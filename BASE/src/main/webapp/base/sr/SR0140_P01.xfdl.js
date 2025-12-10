(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmSR0140_P01");
            this.set_titletext("요청서 결재 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,373);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprGbnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"RTRN_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WF_FUNC_CD\">WF_FUNC_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("staAuthTitle","1520","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnRtrn",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnAppv",null,null,"100","32","btnRtrn:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","20","19",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr","20","19","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("요청자");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcReqId","440","19","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("요청ID");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcReqDt","190","19","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("요청일시");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqUser","stcRqstr:5","24",null,"24","stcReqDt:5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20","52",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","52","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("제목");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtTitle","115","57",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqDt","stcReqDt:5","24",null,"24","stcReqId:5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5","25",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","20","85",null,"68","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcApprDesc","20","85","90","68",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("결재의견");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaApprDesc","115","90",null,"58","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("의견/사유;MAX_LEN_UTF8:1500");
            obj.set_maxlength("1500");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","20","152",null,"141","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcAppr","20","152","90","141",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("결재현황");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdAppvMt","115","157",null,"131","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("19");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_binddataset("dsApprList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"결재자\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"결재상태\"/><Cell col=\"5\" text=\"결재시간\"/><Cell col=\"6\" text=\"결재의견\"/></Band><Band id=\"body\"><Cell text=\"bind:APPR_SEQ\"/><Cell col=\"1\" text=\"bind:USER_NM\"/><Cell col=\"2\" text=\"bind:POS_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:APPR_STAT_CD\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsApprStatCd\"/><Cell col=\"5\" text=\"bind:APPR_STIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:APPR_DESC\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,373,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.edtReqUser","value","dsWfApprovalMt","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtTitle","value","dsWfApprovalMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.edtReqDt","value","dsWfApprovalMt","REQ_DATE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.edtReqId","value","dsWfApprovalMt","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0140_P01.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0140_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SR0140_P01
        * 화면(명)		︰ 요청서 결재 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 요청서 결재 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                          					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0140W/select02";                         			// 서비스명
            var sInDs = "dsCond=dsCond";                  						// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfApprovalMt=dsWfApprovalMt dsApprList=dsApprList"; // 서버에서 수신할 데이타셋
            var sArg = "";                   									// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
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
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			var fRow = this.dsApprList.findRow("CUR_APV_YN", "Y");

        			if( !Ex.isEmpty(this.getOwnerFrame().OPINION) )
        			{
        				this.divContent.form.txaApprDesc.set_value(this.getOwnerFrame().OPINION);
        			}

        			if(this.getOwnerFrame().GUBUN == "APV")
        			{
        				this.divContent.form.stcApprDesc.set_text("결재의견");

        				if(this.dsApprList.getColumn(fRow, "APV_ESS_YN") == "Y")
        				{
        					this.divContent.form.stcApprDesc.set_cssclass("sta_WF_inputTitle_E");
        					this.divContent.form.txaApprDesc.set_validation(this.divContent.form.stcApprDesc.text + ";NULL");
        				}
        				else
        				{
        					this.divContent.form.stcApprDesc.set_cssclass("sta_WF_inputTitle");
        					this.divContent.form.txaApprDesc.set_validation("");
        				}
        				this.divBottom.form.btnAppv.set_visible(true);
        			}
        			else if(this.getOwnerFrame().GUBUN == "RTRN")
        			{
        				this.divContent.form.stcApprDesc.set_text("반려사유");

        				if(this.dsApprList.getColumn(fRow, "RTRN_ESS_YN") == "Y")
        				{
        					this.divContent.form.stcApprDesc.set_cssclass("sta_WF_inputTitle_E");
        					this.divContent.form.txaApprDesc.set_validation(this.divContent.form.stcApprDesc.text + ";NULL");
        				}
        				else
        				{
        					this.divContent.form.stcApprDesc.set_cssclass("sta_WF_inputTitle");
        					this.divContent.form.txaApprDesc.set_validation("");
        				}
        				this.divBottom.form.btnRtrn.set_visible(true);
        			}
        			Ex.util.setBtnAlign(this.divBottom, 'right', true);

        			this.divContent.form.txaApprDesc.setFocus();
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
        	{
        		case "appvConfirm" :	// 승인
        			this.fnSetApprInfo('APV');
        			break;

        		case "rtrnConfirm" :	// 반려
        			this.fnSetApprInfo('RTRN');
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();

        	var REQ_ID			= this.getOwnerFrame().REQ_ID;
        	var WF_PROC_CD		= this.getOwnerFrame().WF_PROC_CD;
        	var SEQ				= this.getOwnerFrame().SEQ;

        	this.dsCond.setColumn(0, 'REQ_ID', REQ_ID);
        	this.dsCond.setColumn(0, 'WF_PROC_CD', WF_PROC_CD);
        	this.dsCond.setColumn(0, 'SEQ', SEQ);

        	this.fnSearch();		// 검색
        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["APPR_GBN_CD",		"APPR_STAT_CD"]		// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD",		"WORKFLOW_CD"]		// 조회할 코드의 업무구분
        		,optStr	: ["NO",				"NO"]				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["",					""]					// 사용여부
        		,filter	: ["",					""]					// filterStr
        		,objDs	: [this. dsApprGbnCd,	this.dsApprStatCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") )	return false;
        	return true;
        }

        this.fnSetApprInfo = function(APPR_DIV)
        {
        	this.dsApprInfo.clearData();
        	var rowPos = this.dsApprInfo.addRow();

        	var REQ_ID			= this.dsWfApprovalMt.getColumn(this.dsWfApprovalMt.rowposition, 'REQ_ID');
        	var WF_PROC_CD		= this.dsWfApprovalMt.getColumn(this.dsWfApprovalMt.rowposition, 'WF_PROC_CD');
        	var APPR_DESC		= this.divContent.form.txaApprDesc.value||'';

        	this.dsApprInfo.setColumn(rowPos, 'REQ_ID',		REQ_ID);
        	this.dsApprInfo.setColumn(rowPos, 'WF_PROC_CD',	WF_PROC_CD);
        	this.dsApprInfo.setColumn(rowPos, 'APPR_DESC',	APPR_DESC);
        	this.dsApprInfo.setColumn(rowPos, 'APPR_DIV',	APPR_DIV);

        	Ex.core.pclose(this, this.dsApprInfo.saveXML());
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAppv" :
        			if( !this.fnCheckValidate() ) return;
        			var param = {
        						id : "appvConfirm"
        					  , msg : "10008"
        					  , arrparam : ['승인']
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnRtrn" :
        			if( !this.fnCheckValidate() ) return;
        			var param = {
        						id : "rtrnConfirm"
        					  , msg : "10008"
        					  , arrparam : ['반려']
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnRtrn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnAppv.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsCond.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsCond.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsCond.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
        };
        this.loadIncludeScript("SR0140_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
