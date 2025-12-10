(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0000_D00");
            this.set_titletext("요청서 히스토리맵");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,235);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfProcDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfProcHist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle","0","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("히스토리맵");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen",null,"0","65","24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_normal");
            obj.set_text("┼ 펼치기");
            this.addChild(obj.name, obj);

            obj = new Div("divReqConts","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_borderRadius("5px 5px");
            obj.set_cssclass("div_WF_wfFieldDisp");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divReqConts
            obj = new Layout("default","",0,0,this.divReqConts.form,function(p){});
            this.divReqConts.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,235,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("recUserNm","txRecUser","value","dtSrReqInfo","recUserNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0000_D00.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0110_D
        * 화면(명)		︰ 요청서 등록
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.fOpen = false;
        this.parentDiv = null;
        this.totHeight = 0;

        // arrow
        this.arrowHead = null;
        this.arrowBody = null;

        // Node&Func
        this.nMargin 	= 10;
        this.nodeLeft	= this.nMargin;	// 노드 left
        this.nodeTop	= this.nMargin;	// 노드 top
        this.nodeWidth	= 80;	// 노드 width
        this.nodeHeight	= 32;	// 노드 height
        this.funcWidth 	= 50;	// Func width
        this.funcHeight = 24;	// Func height

        // Field
        this.arrField 		= [];	// 필드 배열
        this.nField			= 0;	// 필드 최종 갯수
        this.nTop 			= -1;	// 필드 그린 후 최종 top
        this.nLeft 			= -1;	// 필드 그린 후 최종 left
        this.fieldWidth		= 200;
        this.fieldHeight	= 50;	// 필드 height

        // Contents div
        this.arrConts		= [];
        this.contsTop		= this.nTop + this.fieldHeight - 10;
        this.contsWidth		= this.fieldWidth;
        this.contsMinHeight	= 50;
        this.contsHeight	= 50;

        // Hist Div
        this.nHistMargin	= 10;
        this.nHistTopOrg	= 15;
        this.nHistTop		= this.nHistTopOrg;
        this.nHistLeft		= 20;
        this.nHistWidth		= this.fieldWidth - this.nMargin*2;
        this.nHistHeight	= 50;
        this.nHistMaxTop 	= this.nHistHeight + this.nHistMargin*2;

        // Arrow div
        this.arrArrow		= [];
        this.nArrowWidth	= 40;
        this.nArrowHeight	= this.fieldHeight;

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	this.parentDiv = this.parent||'';
        	if(this.parentDiv.toString().toUpperCase() == '[OBJECT DIV]') {
        		this.totHeight = this.divReqConts.getOffsetTop() + this.fieldHeight + this.nHistHeight + this.nHistMargin + 5;
        		this.parentDiv.set_height(this.totHeight);
        	}
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 요청서 양식 조회
        this.fnSearch = function()
        {
        	var sTranId = "selectWfHistMap";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SRComm/selectWfHistMap";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfProcDt=dsMap dsWfProcHist=dsConts";       // 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	Ex.util.setWait(this, false);

        	// 에러메세지 처리
        	if (nErrorCode < 0)
        	{
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "selectWfHistMap" :
        			Ex.util.setWait(this, true);
        			this.fnDrawInit();		// 히스토리맵(워크플로우) 그리기
        			this.fnSetConts();		// 히스토리맵 내용 표기
        			this.SR0000_D00_onsize(this, {cx:this.getOffsetWidth(), cy:this.getOffsetHeight()});		// 최초 resizing
        			Ex.util.setWait(this, false);

        			if( !Ex.isEmpty(this.parentDiv) ) {
        				if(this.parentDiv.parent.fnResetHistoryMapHeight)
        					this.parentDiv.parent.fnResetHistoryMapHeight(this.totHeight);
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue) return;

        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;
        	switch(mID){}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnDrawMap = function(REQ_ID, CUR_WF_PROC_CD)
        {
        	if( Ex.isEmpty(REQ_ID) ) {
        		trace('REQ_ID empty');
        		return;
        	}
        	Ex.util.setWait(this, true);
        	this.dsCond.setColumn(this.dsCond.rowposition, 'REQ_ID', REQ_ID);
        	this.dsCond.setColumn(this.dsCond.rowposition, 'CUR_WF_PROC_CD', CUR_WF_PROC_CD);
        	this.fnSearch();

        	return this.totHeight;
        }

        this.fnDrawInit = function()
        {
        	// WF PROC DIV 생성
        	for(var i = 0; i < this.dsWfProcDt.rowcount; i++)
        	{
        		var WF_PROC_CD	= this.dsWfProcDt.getColumn(i, 'WF_PROC_CD');
        		var WF_PROC_NM	= this.dsWfProcDt.getColumn(i, 'WF_PROC_NM');
        		var REQ_STAT_CD = this.dsWfProcDt.getColumn(i, 'REQ_STAT_CD');		// 요청상태
        		var FUNC		= this.dsWfProcDt.getColumn(i, 'FUNC');
        		var FUNC_NM		= this.dsWfProcDt.getColumn(i, 'FUNC_NM');
        		var CUR_PROC_YN	= this.dsWfProcDt.getColumn(i, 'CUR_WF_PROC_YN')||'N';

        		// draw Field div
        		var divField = new Div();
        		var fieldNm = 'divField_'+i;
        		divField.init(fieldNm, this.nLeft, this.nTop, this.fieldWidth, this.fieldHeight, null, null);
        		divField.set_cssclass('div_WF_wfFieldDisp');
        		this.divReqConts.addChild(fieldNm, divField);
        		divField.show();
        		this.arrField.push(divField);

        		// draw Node Static to Field
        		var stcNode = new Static();
        		var nodeId = 'stcNode_' + WF_PROC_CD;
        		stcNode.init(nodeId, 0, 0, null, null, 0, 0);
        		stcNode.set_cssclass('stc_WF_wfNodeDisp');
        		stcNode.set_text(WF_PROC_NM);
        		divField.addChild(nodeId, stcNode);
        		stcNode.show();

        		// add icon to Field
        		var divIcon = new Div();
        		var iconId = 'divIcon_' + WF_PROC_CD;
        		divIcon.init(iconId, 2, 2, this.fieldHeight, null, null, 0);
        		var css = this.fnGetCssclass('PROC', WF_PROC_CD);
        		divIcon.set_cssclass(css);
        		divField.addChild(iconId, divIcon);
        		divIcon.show();

        		// draw Func
        		var divFunc = null;
        		if( !Ex.isEmpty(FUNC) ) {
        			divFunc		= new Div();
        			var funcId 	= 'divFunc_' + FUNC;
        			var nTop	= this.nodeTop + (this.nodeHeight-this.funcHeight)/2 - 1;
        			divFunc.init(funcId, null, nTop, this.funcWidth, this.funcHeight, 20, null);
        			divFunc.set_cssclass('div_WF_wfFunc');
        			divFunc.set_text(FUNC_NM);
        			divFunc.set_enable(false);
        			divField.addChild(funcId, divFunc);
        			divFunc.show();
        		}

        		// 현재 단계 표기
        		if(CUR_PROC_YN == 'Y') 	// 현재 단계
        		{
        			if( (REQ_STAT_CD == 'RQST11') || (REQ_STAT_CD == 'RQST21') ) {		// 결재중 or 검토중
        				if( !Ex.isEmpty(divFunc) )
        					divFunc.set_enable(true);
        			}
        			else {
        				stcNode.set_color('#020202');
        			}
        		}

        		// draw Conts Div
        		var divConts 	= new Div();
        		var divContsNm 	= 'divConts_'+i;
        		divConts.init(fieldNm, this.nLeft, this.contsTop, this.contsWidth, null, null, 0);
        		divConts.set_cssclass('div_WF_wfContsDisp');
        		this.divReqConts.addChild(divContsNm, divConts);
        		divConts.show();
        		divConts.sendToBack();
        		this.arrConts.push(divConts);


        		// field left 재계산
        		this.nLeft += this.fieldWidth-1;

        		// Arrow Div
        		if( i < this.dsWfProcDt.rowcount-1 )
        		{
        			var divArrow = new Div();
        			var arrowId = 'divArrow_' + i;
        			divArrow.init(arrowId, this.nLeft, this.nTop, this.nArrowWidth, this.nArrowHeight, null, null);
        			divArrow.set_cssclass('div_WF_wfArrowRight');
        			this.divReqConts.addChild(arrowId, divArrow);
        			divArrow.show();
        			this.arrArrow.push(divArrow);

        			this.nLeft += this.nArrowWidth-1;
        		}
        	}

        	// reset scroll
        	this.divReqConts.set_visible(true);
        	this.divReqConts.form.resetScroll();
        }

        this.fnSetConts = function(isOpen)
        {
        	// component 초기화
        	for(var i = 0; i < this.arrConts.length; i++)
        	{
        		var comps = this.arrConts[i].form.components;
        		for(var j = comps.length-1; j >= 0; j--) {
        			this.arrConts[i].removeChild(comps[j]);
        			comps[j].destroy();
        		}
        	}

        	if(this.fOpen)	// 펼침 상태
        	{
        		for(var i = 0; i < this.dsWfProcDt.rowcount; i++)
        		{
        			var WF_PROC_CD = this.dsWfProcDt.getColumn(i, 'WF_PROC_CD');
        			var curDivConts = this.arrConts[i];

        			this.dsWfProcHist.set_filterstr("WF_PROC_CD=='" + WF_PROC_CD + "'");
        			this.nHistTop = this.nHistTopOrg;
        			for(var j = 0; j < this.dsWfProcHist.rowcount; j++)
        			{
        				this.fnSetContsData(j, curDivConts, this.nHistLeft, this.nHistTop, null, this.nHistHeight, this.nHistMargin, null);

        				this.nHistTop += this.nHistHeight;
        				if(this.nHistTop > this.nHistMaxTop)
        					this.nHistMaxTop = this.nHistTop;
        			}
        		}
        	}
        	else	// 접힘 상태
        	{
        		this.nHistTop = this.nHistTopOrg;
        		this.nHistMaxTop = this.nHistHeight;
        		for(var i = 0; i < this.dsWfProcDt.rowcount; i++)
        		{
        			var WF_PROC_CD = this.dsWfProcDt.getColumn(i, 'WF_PROC_CD');
        			var curDivConts = this.arrConts[i];
        			this.dsWfProcHist.set_filterstr("WF_PROC_CD=='" + WF_PROC_CD + "'");
        			if(this.dsWfProcHist.rowcount == 0)
        				continue;

        			this.fnSetContsData(this.dsWfProcHist.rowcount-1, curDivConts, this.nHistLeft, this.nHistTop, null, this.nHistHeight, this.nHistMargin, null);
        		}
        	}
        }

        this.fnSetContsData = function(rowpos, divConts, nLeft, nTop, nWidth, nHeight, nRight, nBottom)
        {
        	var	WF_HIST_SEQ 	= this.dsWfProcHist.getColumn(rowpos, 'WF_HIST_SEQ');
        	var APPR_GBN_NM		= this.dsWfProcHist.getColumn(rowpos, 'APPR_GBN_NM');
        	var APPR_STAT_CD	= this.dsWfProcHist.getColumn(rowpos, 'APPR_STAT_CD');
        	var APPR_STAT_NM	= this.dsWfProcHist.getColumn(rowpos, 'APPR_STAT_NM');
        	var APPR_COMMENT	= this.dsWfProcHist.getColumn(rowpos, 'APPR_COMMENT');
        	var SRM_USER_ID		= this.dsWfProcHist.getColumn(rowpos, 'SRM_USER_ID');
        	var SRM_USER_NM		= this.dsWfProcHist.getColumn(rowpos, 'SRM_USER_NM');
        	var SRM_JBC_JNAME	= this.dsWfProcHist.getColumn(rowpos, 'SRM_JBC_JNAME');
        	var SRM_DEPT_NM		= this.dsWfProcHist.getColumn(rowpos, 'SRM_DEPT_NM');
        	var REG_STIME_NM	= this.dsWfProcHist.getColumn(rowpos, 'REG_STIME_NM');

        	var divHist 	= new Div();
        	var divHistNm	= 'divHist_' + WF_HIST_SEQ;
        	divHist.init(divHistNm, nLeft, nTop, nWidth, nHeight, nRight, nBottom);
        	divConts.addChild(divHistNm, divHist);
        	divHist.show();

        	// 상태
        	var stcStat		= new Static();
        	var stcStatNm	= 'stcStat_' + WF_HIST_SEQ;
        	stcStat.init(stcStatNm, 0, 4, 40, 40, null, null);
        	var css = this.fnGetCssclass('APPR', APPR_STAT_CD);
        	stcStat.set_cssclass(css);
        	stcStat.set_text(APPR_STAT_NM);
        	divHist.addChild(stcStatNm, stcStat);
        	stcStat.show();

        	// 이름&시간
        	var stcConts 	= new Static();
        	var stcContsNm	= 'stcConts_' + WF_HIST_SEQ;
        	stcConts.init(stcContsNm, stcStat.getOffsetRight() + 10, 4, null, null, 0, 0);
        	stcConts.set_cssclass('stc_WF_wfContsDisp');
        	var str =  APPR_GBN_NM + ' ' + SRM_USER_NM + '(' + SRM_USER_ID + ')' + '\n';
        		str += REG_STIME_NM;
        	stcConts.set_text(str);

        	var stcBotLine		= new Static();
        	var stcBotLineNm	= 'stcBot_' + WF_HIST_SEQ;
        	stcBotLine.init(stcBotLineNm, 5, null, null, 2, 5, 0);
        	stcBotLine.set_background('#dfdfdf');
        	divHist.addChild(stcBotLineNm, stcBotLine);
        	stcBotLine.show();

        	divHist.addChild(stcContsNm, stcConts);
        	stcConts.show();
        }

        // css명 return; 나중에 공통코드랑 엮을 예정
        this.fnGetCssclass = function(GBN, CODE)
        {
        	var css = '';
        	if( GBN == 'PROC' )		// 단계 아이콘(등록, 접수, ...) css
        	{
        		switch(CODE.substr(0, 10))
        		{
        			case "WF_PROC_10" :	css = 'div_WF_wfStep01';	break;		// 등록
        			case "WF_PROC_20" :	css = 'div_WF_wfStep02';	break;		// 접수
        			case "WF_PROC_30" :	css = 'div_WF_wfStep03';	break;		// 처리
        			case "WF_PROC_90" :	css = 'div_WF_wfStep04';	break;		// 완료
        			case "WF_PROC_99" :	css = 'div_WF_wfStep05';	break;		// 종료
        		}
        	}
        	else if( GBN == 'APPR' )	// 내역 상태(등록/승인, ...)  css
        	{
        		switch(CODE)
        		{
        			case "APST_00" :	css = 'stc_WF_wfStatDispRed';	break;	// 반려
        			case "APST_01" :	css = 'stc_WF_wfStatDispGrey';	break;	// 승인대기
        			case "APST_02" :	css = 'stc_WF_wfStatDispGrey';	break;	// 검토대기
        			case "APST_90" :	css = 'stc_WF_wfStatDispBlue';	break;	// 등록
        			case "APST_99" :	css = 'stc_WF_wfStatDispPurple';	break;	// 승인
        		}
        	}
        	return css;
        }

        // 펼치기/접기
        this.fnOpenDiv = function()
        {
        	var height = -1;
        	this.fOpen = !this.fOpen;
        	this.fnSetConts();

        	if(this.fOpen) 	// 펼침 상태
        	{
        		this.btnOpen.set_text('━ 접기');
        		if(this.parentDiv.toString().toUpperCase() == '[OBJECT DIV]') {
        			this.totHeight = this.divReqConts.getOffsetTop() + this.fieldHeight + this.nHistMaxTop + this.nHistMargin + 5;
        		}
        	}
        	else			// 접힘 상태
        	{
        		this.btnOpen.set_text('┼ 펼치기');
        		if(this.parentDiv.toString().toUpperCase() == '[OBJECT DIV]') {
        			this.totHeight = this.divReqConts.getOffsetTop() + this.fieldHeight + this.nHistHeight + this.nHistMargin + 5;
        		}
        	}
        	this.parentDiv.set_height(this.totHeight);

        	// 펼치기 접기 후 원 화면 height 재처리를 위해 fnResetHistoryMapHeight() 호출
        	// param : 펼치기/접기 후 form height
        	if( !Ex.isEmpty(this.parentDiv) ) {
        		if(this.parentDiv.parent.fnResetHistoryMapHeight)
        			this.parentDiv.parent.fnResetHistoryMapHeight(this.totHeight);
        	}
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "btnOpen" :
        			this.fnOpenDiv();
        			break;
        	}
        }

        this.SR0000_D00_onsize = function(obj,e)
        {
        	var tempWidth = parseInt(e.cx / this.dsWfProcDt.rowcount) - this.nArrowWidth + 8;	// +8은 border 두꼐 보정

        	var nLeft = 0;
        	for(var i = 0; i < this.arrField.length; i++)
        	{
        		this.arrField[i].set_left(nLeft);
        		this.arrConts[i].set_left(nLeft);

        		if(tempWidth <= this.fieldWidth)
        			tempWidth = this.fieldWidth;
        		else
        		{
        			if( i == this.arrField.length-1 )
        				tempWidth = parseInt(this.divReqConts.getOffsetWidth()) - nLeft - 2;
        		}

        		this.arrField[i].set_width(tempWidth);
        		this.arrConts[i].set_width(tempWidth);

        		nLeft += tempWidth-1;

        		// arrow div 재계산
        		if( i < this.arrArrow.length ) {
        			this.arrArrow[i].set_width(this.nArrowWidth);
        			this.arrArrow[i].set_left(nLeft);
        			nLeft += this.nArrowWidth-1;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.SR0000_D00_onsize,this);
            this.btnOpen.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0000_D00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
