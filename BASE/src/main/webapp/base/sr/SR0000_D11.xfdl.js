(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0000_D11");
            this.set_titletext("요청정보-기본");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,101);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IS_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_TMPLAT_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ROWFLAG\" type=\"string\" size=\"32\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LM_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"JOB_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"LM_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"SVC_NM_INFO\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"JOB_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_NM\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"datetime\" size=\"17\"/><Column id=\"REQ_DESC\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"datetime\" size=\"17\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"E_DOCU_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrRevDivCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrRevDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqTmplatMtHelp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg04","0","100",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02","0","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm","75%","67","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt","50.00%","34","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","0","67","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcEdocu","50.00%","67","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("요청부서");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:5.00","72",null,"24","stcEdocu:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_validationGroup("group01");
            obj.set_validation("제목;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.set_isChgLang("false");
            obj.set_imemode("hangul");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqDt","stcReqDt:5.00","39","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_validation("요청일자;NULL");
            obj.set_validationGroup("group01");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm","stcReqUserNm:5","72",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqDeptNm","stcEdocu:5.00","72",null,"24","stcReqUserNm:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel06","0","34","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("요청서종류");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId","25%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("요청서번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcLabel06:5.00","39",null,"24","stcReqId:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5","39",null,"24","stcEdocu:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt00","75%","34","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("희망완료일");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqWishDt","stcReqDt00:5","39","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_validation("희망완료일;NULL");
            obj.set_validationGroup("group01");
            obj.set_cssclass("cal_WF_normal");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("calReqWishTime","calReqWishDt:3","39","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validation("희망완료시간;NULL");
            obj.set_visible("false");
            obj.set_text("__:__");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","stcInfoTitle:10","0","522","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("※ 운영반영 전까지 <요청내용>을 수정할 수 있습니다 (실운영반영기능과 요청내용 일치)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,101,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("reqUserNmView","edtReqUserNm","value","dsSrBaseInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("recUserNm","txRecUser","value","dtSrReqInfo","recUserNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("srBrief","edtReqTitle","value","dsSrBaseInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","calReqDt","value","dsSrBaseInfo","REQ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","stcEdocu","value","dsSrBaseInfo","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtReqDeptNm","value","dsSrBaseInfo","REQ_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","stcLabel06","value","dsSrBaseInfo","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","stcReqId","value","dsSrBaseInfo","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stcReqDt00","value","dsSrBaseInfo","REQ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtReqTmplatNm","value","dsSrBaseInfo","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","calReqWishDt","value","dsSrBaseInfo","REQ_WISH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calReqWishTime","value","dsSrBaseInfo","REQ_WISH_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0000_D11.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0000_D11.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR0000_D11
        * 화면(명)	︰ 요청서 등록 공통
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.12.24	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.selectServiceInfo = {
        	CALLBACK_ID		: ["select01"],
        	CALL_SVC		: ["sr/SR0000D/select01"],

        	IN_DS_WHERE		: [this.dsCond],
        	OUT_DS_OBJ		: [new Array(this.dsSrBaseInfo)]
        };

        this.saveServiceInfo = {
        	CALLBACK_ID		: ["save01"],
        	CALL_SVC		: ["sr/SR0000D/save01"],

        	IN_DS_OBJ		: [new Array(this.dsSrBaseInfo)],
        	OUT_DS_OBJ		: []
        };

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	//this.wevReqDesc.set_url(nexacro.getProjectPath() + "html/htmlViewer.html");

        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

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

        	//trace("[SR0000_D01]-this.fnCallback() sSvcId : " + sSvcId);

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select01" :
        			this.dsSrBaseInfo.set_enableevent(false);
        			this.dsSrBaseInfo.set_updatecontrol(false);

        			if(this.dsSrBaseInfo.getColumn(0, "ROWFLAG") == "I")
        			{
        				this.dsSrBaseInfo.setRowType(0, Dataset.ROWTYPE_INSERT);
        				this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_ID", this.reqInfo.REQ_TMPLAT_ID);
        				this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_VER", this.reqInfo.REQ_TMPLAT_VER);
        				this.dsSrBaseInfo.setColumn(0, "WF_PROC_CD", this.dsWfProc.getColumn(0, "WF_PROC_CD"));
        				this.dsSrBaseInfo.setColumn(0, "REQ_STAT_CD", "RQST00");	//임시저장
        				this.dsSrBaseInfo.setColumn(0, "REQ_USER_ID", Ex.util.getSession('gvUserId'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_USER_NM", Ex.util.getSession('gvUserNm'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_NM", Ex.util.getSession('gvDeptNm'));
        				this.dsSrBaseInfo.setColumn(0, "FR_NM", Ex.util.getSession('gvUserNm'));
        				this.edtReqUserNm.set_value(Ex.util.getSession('gvUserNm') +"("+Ex.util.getSession('gvUserId')+")") // 이름(사번)
        				this.dsSrBaseInfo.setColumn(0, "REQ_WISH_DT",  Ex.util.addDate(Ex.util.today(), +7));

        				/*if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME")) )
        				{
        					this.dsSrBaseInfo.setColumn(0, "REQ_WISH_TIME", "0000");
        				}*/
        			}
        			else
        			{
        				if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "TEMP_REQ_ID")) )
        				{
        					this.edtReqId.set_value(this.dsSrBaseInfo.getColumn(0, "REQ_ID"));
        				}

        				if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME")) )
        				{
        					this.dsSrBaseInfo.setColumn(0, "REQ_WISH_TIME", "");
        				}
        				this.edtReqUserNm.set_value(this.dsSrBaseInfo.getColumn(0,"REQ_USER_NM") +"("+this.dsSrBaseInfo.getColumn(0,"REQ_USER_ID")+")") // 이름(사번)
        				/*
        				this.edtWfProcNm.set_value(
        					this.dsSrBaseInfo.getColumn(0, "WF_PROC_NM") +
        					(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM")) ? " [" + this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM") + "]" : "")
        				);
        				*/
        			}



        			if(this.isLoadHtmlView)
        			{
        				if(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")))
        				{
        					var reqDesc = btoa(encodeURIComponent(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")));
        					this.wevReqDesc.callScript("setContent(\"" + reqDesc + "\")");
        				}
        			}

        			this.dsSrBaseInfo.set_updatecontrol(true);
        			this.dsSrBaseInfo.set_enableevent(true);
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
        		case "SR0000_P01" :
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				this.dsSrBaseInfo.setColumn(0, "REF_REQ_ID", this.dsPopRtn.getColumn(0, "REQ_ID"));
        			}
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pAlertTitleI" :	//임시저장
        			this.edtReqTitle.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	Ex.util.setAutoComplete(this.edtReqTitle);

        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['SR_REV_DIV_CD',		'SR_REV_TEAM'		]	// 조회할 상위코드
        		,codeDiv: ['WORKFLOW_CD',		'WORKFLOW_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['',					'SEL'				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y'					]	// 사용여부
        		,filter	: ['',					''					]	// filterStr
        		,objDs	: [this.dsSrRevDivCd,	this.dsSrRevDept	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsSrBaseInfo);
        }

        this.fnSaveCheck = function(isReg)
        {
        	if(isReg)
        	{
        		if( !Ex.util.checkValidate(this, "group01") ) return false;

        		/*strValue = this.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME");
        		if(strValue < '0000' || strValue > '2459'){
        			var param = {
        				msg	: "희망완료시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			this.calReqWishTime.setFocusRed();
        			return false;
        		}*/
        	}
        	else
        	{
        		if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "TITLE")) )
        		{
        			var param = {id : "pAlertTitleI", msg : "요청제목은(는) 필수입력 항목입니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	Ex.util.setAutoComplete(this.edtReqTitle, this.edtReqTitle.value);
        	return true;
        }

        this.fnPagePreView = function(strReqDesc)
        {
        	if(this.dsSrBaseInfo.rowcount == 0)	this.dsSrBaseInfo.addRow();
        	this.dsSrBaseInfo.setColumn(0, "REQ_DESC", strReqDesc);

        	this.fnCompInit();		// 컴포넌트 초기화
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnHelp" :
        			if( !Ex.isEmpty(this.dsWfReqTmplatMtHelp.getColumn(0,'BOARD_NO')) )
        			{
        				Ex.core.popup(
        					this,
        					'요청서 도움말',
        					"fomm::FOMM0220_P01.xfdl",             		// <--- 팝업창 오픈 Url
        					{
        						title		: Ex.core.word('자료실') + ' ' + Ex.core.word('상세'),
        						pPopType	: 'R',
        						pBoardNo	: this.dsWfReqTmplatMtHelp.getColumn(0,'BOARD_NO')
        					},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"autosize"					// <--- width/height/modeless(프레임 처리 옵션)
        				);
        			}
        			else
        			{
        				var param = {id : "pAlertNoHelpI", msg : "등록된 도움말이 존재하지 않습니다."};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			break;
        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        this.doChgWishDt = function(obj,e)
        {
          	var selecToday = nexacro.toNumber(this.dsSrBaseInfo.getColumn(0,"REQ_WISH_DT"));

          	if(selecToday <  nexacro.toNumber(Ex.util.today()))
          	{
          		var param = {id : "", msg : "희망완료일은 오늘날짜보다 크거나 같아야합니다."};
        		Ex.core.alert(this, param);
        		this.dsSrBaseInfo.setColumn(0,"REQ_WISH_DT",'');
        		return false;
          	}
        };

        this.wevReqDesc_onloadcompleted = function(obj,e)
        {
        	if(this.dsSrBaseInfo.rowcount > 0)
        	{
        		if(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")))
        		{
        			var reqDesc = btoa(encodeURIComponent(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")));
        			this.wevReqDesc.callScript("setContent(\"" + reqDesc + "\")");
        		}
        	}
        	this.isLoadHtmlView = true;
        };
        this.calReqWishDt_onchanged = function(obj,e)
        {
        	var selecToday = nexacro.toNumber(this.dsSrBaseInfo.getColumn(0,"REQ_WISH_DT"));

          	if(selecToday <  nexacro.toNumber(Ex.util.today()))
          	{
          		var param = {id : "", msg : "희망완료일은 오늘날짜보다 크거나 같아야합니다."};
        		Ex.core.alert(this, param);
        		this.dsSrBaseInfo.setColumn(0,"REQ_WISH_DT",'');
        		return false;
          	}

        	if(nexacro.toNumber(this.dsSrBaseInfo.getColumn(0,"REQ_WISH_DT")) -  nexacro.toNumber(Ex.util.today()) < 14){
        		var param = {
        			msg : "요청일과 희망완료일의 차이가 2주 이내입니다."
        		  , arrparam : ['']
        		  , msgtype : "I"
        		  };
        		Ex.core.alert(this, param);
        		}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stcInfoTitle.addEventHandler("onrbuttonup",this.stOonRbuttonUp,this);
            this.calReqDt.addEventHandler("onchanged",this.doChgWishDt,this);
            this.calReqWishDt.addEventHandler("onchanged",this.calReqWishDt_onchanged,this);
            this.dsSrBaseInfo.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0000_D11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
