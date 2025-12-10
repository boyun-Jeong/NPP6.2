(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_D00");
            this.set_titletext("WORKFLOW공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,171);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_SKIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HIST_SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkFlow", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProcConts", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divWorkflow","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_border("0px dashed gray");
            obj.set_formscrollbarsize("10");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFlow","89.00","0",null,"138","0",null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #d3d3d3");
            obj.set_formscrolltype("horizontal");
            obj.set_formscrollbarsize("10");
            obj.set_text("");
            obj.set_tabstop("false");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Button("btn00",null,"0","55","17","110",null,null,null,null,null,this.divWorkflow.form.divFlow.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            obj.set_visible("false");
            this.divWorkflow.form.divFlow.addChild(obj.name, obj);

            obj = new Static("stcReqWfProc","0","0","90","138",null,null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("2");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_textAlign("center");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Static("stcBg","89.00",null,null,"34","0","0",null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputBg");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Static("stcReqId","0","137","90","34",null,null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("1");
            obj.set_text("TO-DO");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_textAlign("center");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Static("stcCgerInfoNm","stcReqId:5.00","142","45","24",null,null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("6");
            obj.set_text("역할자 :");
            obj.set_textAlign("left");
            obj.set_border("0px solid #d3d3d3");
            obj.set_verticalAlign("middle");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Static("stcCgerInfo","stcCgerInfoNm:0.00","142",null,"24","970",null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_textAlign("left");
            obj.set_border("0px solid #d3d3d3");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("stc_WF_event");
            obj.set_cursor("pointer");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Button("btnHist","25.00","79","45","24",null,null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("5");
            obj.set_text("이력");
            obj.set_cursor("pointer");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Static("stcCgerProcInfo","stcCgerInfo:0.00","142",null,"24","735",null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_textAlign("left");
            obj.set_border("0px solid #d3d3d3");
            obj.set_verticalAlign("middle");
            obj.set_usedecorate("true");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Static("stcCgerProcConts","stcCgerProcInfo:0.00","142",null,"24","10",null,null,null,null,null,this.divWorkflow.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_textAlign("left");
            obj.set_border("0px solid #d3d3d3");
            obj.set_verticalAlign("middle");
            obj.set_usedecorate("true");
            this.divWorkflow.addChild(obj.name, obj);

            obj = new Static("stcWfProcEx",null,"10","110","110","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("90px");
            obj.set_textAlign("center");
            obj.set_border("1px solid darkblue");
            obj.set_text("테스트\r\n샘플");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWorkflow.form.divFlow.form
            obj = new Layout("default","",0,0,this.divWorkflow.form.divFlow.form,function(p){});
            this.divWorkflow.form.divFlow.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkflow.form
            obj = new Layout("default","",0,0,this.divWorkflow.form,function(p){});
            this.divWorkflow.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,171,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0010_D00.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ Workflow 진행단계
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.06.07
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        2024.06.07		WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.formObj;	//전역변수 설정
        this.curDivWfProc;
        this.arrWfDiv = [];

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        	this.formObj = obj;
        }

        this.fnInit = function()
        {
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSearch = function()
        {
        	var REQ_ID = this.dsCond.getColumn(0, 'REQ_ID');
        	this.dsCond.setColumn(0, 'HIST_SORT_ORDR', 'DESC');

        	if( Ex.isEmpty(REQ_ID) )
        	{
        		this.fnSearchWfFlow();		// 요청서 양식 단계 Flow 상세 조회
        	}
        	else
        	{
        		// 처리이력 조회
        		var sTranId = "selectWfProcHist";
        		var sService = "SR0010P/select04";		// 서비스명
        		var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "dsHist=dsHist";			// 서버에서 수신할 데이타셋
        		var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        }

        // 요청서 양식 단계 Flow 상세 조회
        this.fnSearchWfFlow = function()
        {
        	var sTranId = "selectWfHistFlow";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SRComm/selectWfHistFlow";	// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWorkFlow=dsWorkFlow";		// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearchWfFlowDetail = function()
        {
        	var sTranId = "selectWfHistFlowDetail";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SRComm/selectWfHistFlowDetail";	// 서비스명
            var sInDs = "dsCond=dsCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsProcConts=dsProcConts";			// 서버에서 수신할 데이타셋
            var sArg = "";									// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 일반요청/서비스요청용 조회
        this.fnSearchSrm = function()
        {
        	var sTranId = "selectSrmTarget";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/selectSrmTarget";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfSrm=dsWfSrm";		// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "selectWfProcHist" :
        			this.fnSearchWfFlow();
        			break;

        		case "selectWfHistFlow" : // 서비스 ID
        			// 일반요청/서비스요청일경우 상태값 확인을 위해 WF_SRM테이블 조회
        			if("WFT250033,WFT250048,WFT250049".indexOf(this.dsCond.getColumn(0,"REQ_TMPLAT_ID")) > -1)
        			{
        				this.fnSearchSrm();
        			}
        			else {
        				this.fnDrawHtMap();
        			}
        			break;

        		case "selectWfHistFlowDetail" : // 서비스 ID
        			this.divWorkflow.form.stcCgerInfo.set_text(this.dsProcConts.getColumn(0, "EXTD_NM")||'');
        			this.divWorkflow.form.stcCgerProcInfo.set_text(this.dsProcConts.getColumn(0, "PROC_INFO")||'');
        			this.divWorkflow.form.stcCgerProcConts.set_text(this.dsProcConts.getColumn(0, "PROC_CONTS")||'');
        			this.divWorkflow.form.stcCgerProcConts.set_tooltiptext(this.dsProcConts.getColumn(0, "APPR_COMMENT")||'');

        			if(this.divWorkflow.form.stcCgerInfo.text.indexOf("[") > -1)
        			{
        				this.divWorkflow.form.stcCgerInfo.set_cssclass("stc_WF_event");
        				this.divWorkflow.form.stcCgerInfo.set_cursor("pointer");
        			}
        			else
        			{
        				this.divWorkflow.form.stcCgerInfo.set_cssclass("");
        				this.divWorkflow.form.stcCgerInfo.set_cursor("");
        			}

        			var objSize;

        			if( Ex.isEmpty(this.divWorkflow.form.stcCgerInfo.text) )	this.divWorkflow.form.stcCgerInfo.set_width(0);
        			else
        			{
        				objSize = nexacro.getTextSize( this.divWorkflow.form.stcCgerInfo.getDisplayText(), this.divWorkflow.form.stcCgerInfo._getCurrentStyleInheritValue("font"));
        				var nWidth = parseInt(objSize.nx) + 10;
        				this.divWorkflow.form.stcCgerInfo.set_width(nWidth);
        			}

        			if( Ex.isEmpty(this.divWorkflow.form.stcCgerProcInfo.text) )	this.divWorkflow.form.stcCgerProcInfo.set_width(0);
        			else
        			{
        				objSize = nexacro.getTextSize( this.divWorkflow.form.stcCgerProcInfo.getDisplayText(), this.divWorkflow.form.stcCgerProcInfo._getCurrentStyleInheritValue("font"));
        				var nWidth = parseInt(objSize.nx) + 10;
        				this.divWorkflow.form.stcCgerProcInfo.set_width(nWidth);
        			}

        			this.divWorkflow.form.stcCgerInfo.set_left("stcCgerInfoNm:0");
        			this.divWorkflow.form.stcCgerProcInfo.set_left("stcCgerInfo:0");
        			this.divWorkflow.form.stcCgerProcConts.set_left("stcCgerProcInfo:0");
        			break;


        		case "selectSrmTarget" : // 서비스 ID
        			this.fnDrawHtMap('SRM');
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	//trace("pID="+pID+" ,varValue="+varValue);
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnDrawHtMap = function(REQ_GBN)
        {
        	// init
        	var divFlow = this.divWorkflow.form.divFlow;
        	for(var i = this.arrWfDiv.length - 1; i >= 0; i--)
        	{
        		divFlow.removeChild(this.arrWfDiv[i].id);
        		this.arrWfDiv[i].destroy();
        	}
        	this.arrWfDiv = [];

        	this.divWorkflow.form.stcCgerInfo.dsRow = -1;
        	this.divWorkflow.form.stcCgerInfo.set_text("");


        	// draw
        	var curWfProcRow 	= this.dsWorkFlow.findRow("CUR_WF_PROC_YN", 'Y');
        	var nLeft	= 5;
        	var nTop	= 5;
        	var nWidth	= 109;
        	var nHeight	= 128;
        	var space	= 10;

        	// 최근 회수 제외
        	var collecRow = this.dsHist.findRowExpr("APPR_NM == '회수'");
        	//trace('collecRow :: ' + collecRow );
        	var collectHistSeq = this.dsHist.getColumn(collecRow, 'WF_HIST_SEQ')||'0';
        	//trace('collectHistSeq ::' + collectHistSeq );
        	var defaultFilter = "(WF_HIST_SEQ > " + collectHistSeq + ") ";

        	// begin
        	for(var i = 0; i < this.dsWorkFlow.rowcount; i++)
        	{
        		this.dsHist.set_filterstr(defaultFilter);
        		//trace('rowcnt :: ' + this.dsHist.rowcount);

        		if( REQ_GBN == 'SRM' )
        		{
        			if(i == 1) 	// SRM인 경우 요청서등록시 결재정보 스킵
        				continue;
        		}

        		var gubun			= this.dsWorkFlow.getColumn(i, "GUBUN");
        		var apprLvlSeq		= this.dsWorkFlow.getColumn(i, "APPR_LVL_SEQ");
        		var wfProcCd		= this.dsWorkFlow.getColumn(i, "WF_PROC_CD");
        		var wfProcNm		= this.dsWorkFlow.getColumn(i, "WF_PROC_NM")||'';
        		var mapWfProcCd		= this.dsWorkFlow.getColumn(i, "MAP_WF_PROC_CD")||'';
        		var wfProcNmStr		= this.dsWorkFlow.getColumn(i, "WF_PROC_NM_STR")||'';
        		var func			= this.dsWorkFlow.getColumn(i, "FUNC");
        		var scrnType		= this.dsWorkFlow.getColumn(i, "SCRN_TYPE")||'';
        		var wfProcSkipYn	= this.dsWorkFlow.getColumn(i, "WF_PROC_SKIP_YN")||'N';
        		var curWfProcYn		= this.dsWorkFlow.getColumn(i, "CUR_WF_PROC_YN")||'N';
        		var curRtrnYn		= this.dsWorkFlow.getColumn(i, "CUR_RTRN_YN")||'N';


        		// 단계div
        		var divId = 'divWfProc'+ (i.toString()).padLeft(2, "0");
        		var divWfProc = new Div(divId, nLeft, nTop, nWidth, nHeight, null, null);
        		if( curWfProcYn == 'Y' )	divWfProc.set_cssclass('div_WF_WFHist_On');
        		else 						divWfProc.set_cssclass('div_WF_WFHist_Off');
        		divWfProc.defCss = divWfProc.cssclass;
        		divWfProc.set_tooltiptext(wfProcNm);
        		divWfProc.wfProcCd		= wfProcCd;
        		divWfProc.gubun 		= gubun;
        		divWfProc.apprLvlSeq 	= apprLvlSeq;
        		divWfProc.wfProcSkipYn	= wfProcSkipYn;
        		divWfProc.dsRow			= i;
        		divFlow.addChild(divId, divWfProc);
        		divWfProc.show();
        		this.arrWfDiv.push(divWfProc);		// add to array

        		// 단계 div add event
        		if(!Ex.isEmpty(this.dsCond.getColumn(0, "REQ_ID")) )
        		{
        			if(curWfProcRow >= i) {
        				if(wfProcSkipYn != "Y")	{
        					divWfProc.set_cursor("pointer");
        					divWfProc.addEventHandler("onclick", this.reqWfProcClick, this);
        				}
        			}
        		}

        		// div 안 단계 icon
        		var stcIcon;

        		if(scrnType == "D" && curWfProcRow >= i)
        		{
        			stcIcon = new Button('stcIcon', 5, 17, 30, 30, null, null);
        			stcIcon.wfProcCd	= wfProcCd;
        			stcIcon.set_tooltiptext("클릭시\n[" + wfProcNmStr + "]\n단계이동");	//&#13;&#10;
        			stcIcon.addEventHandler("onclick", this.reqWfProcTitleClick, this);
        		}
        		else
        		{
        			stcIcon = new Static('stcIcon', 5, 17, 30, 30, null, null);
        		}

        		var onOffGubun = "nor";
        		if(curWfProcYn == "Y")	onOffGubun = "act";

        		// icon image set
        		var icon = '';
        		if(gubun == "1" && wfProcCd == "WF_PROC_1000")		// 등록
        		{
        			icon = "icon-m-2-" + onOffGubun;
        			stcIcon.set_background("url('theme://NHSB_IMAGE_SET/WF/" + icon + ".png') no-repeat center center");
        		}
        		else if(wfProcCd == "WF_PROC_9999")		// 완료
        		{
        			icon = "icon-m-6-" + onOffGubun;
        			stcIcon.set_background("url('theme://NHSB_IMAGE_SET/WF/" + icon + ".png') no-repeat center center");
        		}
        		else
        		{
        			//func
        			if(func	== "WF_FUNC_01")
        			{
        				icon = "icon-m-5-" + onOffGubun;
        				stcIcon.set_background("url('theme://NHSB_IMAGE_SET/WF/" + icon + ".png') no-repeat center center");
        			}
        			else {	// 나머지
        				icon = "icon-m-18-" + onOffGubun;
        				stcIcon.set_background("url('theme://NHSB_IMAGE_SET/WF/" + icon + ".png') no-repeat center center");
        			}
        		}
        		stcIcon.defIcon = icon;
        		divWfProc.addChild('stcIcon', stcIcon);
        		stcIcon.show();

        		// 단계명
        		var nmTop = stcIcon.getOffsetTop() + 0;
        		var stcNmId	= 'stcWfProcNm'+ (i.toString()).padLeft(2, "0");
        		var stcWfProcNm = new Static(stcNmId, 40, nmTop, null, 31, 5, null);

        		var strText = wfProcNm;
        		if( REQ_GBN == 'SRM' )
        		{
        			//if(wfProcCd == "WF_PROC_2050" && this.dsWfSrm.getColumn(0, "EM_YN") == "1")	strText = '변경처리중';
        			//매핑코드 요청처리(APPR0H00)
        			if(mapWfProcCd == "APPR0H00" && this.dsWfSrm.getColumn(0, "EM_YN") == "1")	strText = '변경처리중';
        		}
        		stcWfProcNm.set_text(strText);

        		stcWfProcNm.set_font('bold 10px "KoPubL"');
        		stcWfProcNm.set_textAlign("left");
        		stcWfProcNm.set_tabstop(false);
        		stcWfProcNm.wfProcCd	= wfProcCd;
        		stcWfProcNm.gubun 		= gubun;
        		stcWfProcNm.apprLvlSeq 	= apprLvlSeq;
        		divWfProc.addChild(stcNmId, stcWfProcNm);
        		stcWfProcNm.show();

        		if(wfProcCd != "WF_PROC_9999" && !Ex.isEmpty(this.dsCond.getColumn(0, "REQ_ID")) )
        		{
        			if(curWfProcRow >= i)
        			{
        				/*
        				if(wfProcSkipYn != "Y" && gubun == "1")
        				{
        					if(scrnType == "D")
        					{
        						if(this.dsWorkFlow.getColumn(i, "CUR_WF_PROC_YN") != "Y")	stcWfProcNm.set_cssclass("stc_WF_normalClickEvent");
        						else														stcWfProcNm.set_cursor("pointer");
        						stcWfProcNm.set_text(stcWfProcNm.text + " ↓");
        						stcWfProcNm.set_text(stcWfProcNm.text);
        						stcWfProcNm.set_tooltiptext("클릭시\n[" + wfProcNmStr + "]\n단계이동");	//&#13;&#10;
        						//stcWfProcNm.addEventHandler("onclick", this.reqWfProcTitleClick, this);
        					}
        				}
        				*/
        				if(wfProcSkipYn != "Y")
        				{
        					stcWfProcNm.set_cursor("pointer");
        					stcWfProcNm.addEventHandler("onclick", this.reqWfProcClick, this);
        				}
        			}
        		}


        		// 처리이력
        		var SRM_USER_NM;
        		var SRM_DEPT_NM;
        		var PROC_DTIME;
        		var histRow = this.dsHist.findRow('WF_PROC_CD', wfProcCd);
        // 		trace('wfProcCd :: ' + wfProcCd + '  histRow :: ' + histRow);
        // 		trace('gubun :: ' + gubun);
        		var isHist = false;
        		if( histRow >= 0 )
        		{
        			if( gubun == 1 )	// 등록
        			{
        				this.dsHist.set_filterstr(defaultFilter + " && WF_PROC_CD=='" + wfProcCd + "' && Ex.isEmpty(APPR_LVL_SEQ)");
        // 				trace(this.dsHist.filterstr);
        // 				trace('this.dsHist.rowcount  :: ' + this.dsHist.rowcount );
        				if(this.dsHist.rowcount > 0) {
        					SRM_USER_NM = this.dsHist.getColumn(0, 'SRM_USER_INFO')||'';
        					SRM_DEPT_NM = this.dsHist.getColumn(0, 'SRM_DEPT_NM')||'';
        					PROC_DTIME = this.dsHist.getColumn(0, 'PROC_DTIME')||'';
        					PROC_DTIME = PROC_DTIME.substr(0, PROC_DTIME.length-3);
        					isHist = true;
        				}
        			}
        			else if( gubun == 2 )	// 결재
        			{
        				this.dsHist.set_filterstr(defaultFilter + " && WF_PROC_CD=='" + wfProcCd + "' && !Ex.isEmpty(APPR_LVL_SEQ)");
        				if(this.dsHist.rowcount > 0) {
        					SRM_USER_NM = this.dsHist.getColumn(0, 'SRM_USER_INFO')||'';
        					SRM_DEPT_NM = this.dsHist.getColumn(0, 'SRM_DEPT_NM')||'';
        					PROC_DTIME = this.dsHist.getColumn(0, 'PROC_DTIME')||'';
        					PROC_DTIME = PROC_DTIME.substr(0, PROC_DTIME.length-3);
        					isHist = true;
        				}
        			}
        		}

        		trace("isHist : " + isHist + " // " + SRM_USER_NM + ' // ' + SRM_DEPT_NM + ' // ' + PROC_DTIME);

        		var stcProcDt;
        		var stcSrmUser;
        		var stcSrmDept;
        		if( isHist )
        		{
        			// 처리시간
        			stcProcDt = new Static('stcProcDt', 5, stcIcon.getOffsetBottom() + 5, null, 24, 5, null);
        			stcProcDt.set_text(PROC_DTIME);
        			stcProcDt.set_font("bold 11px 'KoPubL'");
        			stcProcDt.set_textAlign('center');
        			stcProcDt.set_color('#5f6172');
        			divWfProc.addChild('stcProcDt', stcProcDt);
        			stcProcDt.show();

        			// 처리자
        			stcSrmUser = new Static('stcSrmUser', 5, stcProcDt.getOffsetBottom() + 10, null, 24, 5, null);
        			stcSrmUser.set_text(SRM_USER_NM);
        			stcSrmUser.set_font("bold 12px 'KoPubL'");
        			stcSrmUser.set_textAlign('center');
        			stcSrmUser.set_color('#282832');
        			divWfProc.addChild('stcSrmUser', stcSrmUser);
        			stcSrmUser.show();

        			// 처리자부서
        			stcSrmDept = new Static('stcSrmDept', 5, stcSrmUser.getOffsetBottom(), null, 24, 5, null);
        			stcSrmDept.set_text(SRM_DEPT_NM);
        			stcSrmDept.set_font("bold 11px 'KoPubL'");
        			stcSrmDept.set_textAlign('center');
        			stcSrmDept.set_verticalAlign('top');
        			stcSrmDept.set_color('#5f6172');
        			divWfProc.addChild('stcSrmDept', stcSrmDept);
        			stcSrmDept.show();

        			// add event
        			if( divWfProc.cursor == 'pointer' ) {
        				stcProcDt.set_cursor(divWfProc.cursor);
        				stcSrmUser.set_cursor(divWfProc.cursor);
        				stcSrmDept.set_cursor(divWfProc.cursor);
        				stcProcDt.addEventHandler("onclick", this.reqWfProcClick, this);
        				stcSrmUser.addEventHandler("onclick", this.reqWfProcClick, this);
        				stcSrmDept.addEventHandler("onclick", this.reqWfProcClick, this);
        			}
        		}




        		// 반려/SKIP 표기
        		var nL = stcIcon.getOffsetLeft() + stcIcon.getOffsetWidth() + 5;
        		if(curRtrnYn == "Y")
        		{
        			// 반려단계
        			var id = 'stcWfProcL'+ (i.toString()).padLeft(2, "0");
        			var stcWfProcL = new Static(id, nL, 2, nWidth, 20, null, null);
        			stcWfProcL.set_tabstop(false);
        			stcWfProcL.set_textAlign("left");
        			stcWfProcL.set_color("red");
        			stcWfProcL.set_text("[반려]");
        			stcWfProcL.set_font('bold 12px "KoPubL"');
        			divWfProc.addChild(id, stcWfProcL);
        			stcWfProcL.show();
        		}
        		else if(wfProcSkipYn == "Y")
        		{
        			// 단계SKIP
        			var id = 'stcWfProcL'+ (i.toString()).padLeft(2, "0");
        			var stcWfProcL = new Static(id, nL, 2, nWidth, 20, null, null);
        			stcWfProcL.set_tabstop(false);
        			stcWfProcL.set_textAlign("left");
        			stcWfProcL.set_color("blue");
        			stcWfProcL.set_text("[단계 SKIP]");
        			stcWfProcL.set_font('bold 12px "KoPubL"');
        			divWfProc.addChild(id, stcWfProcL);
        			stcWfProcL.show();
        		}


        		// 화살표
        		if(i >= 0 && i != this.dsWorkFlow.rowcount -1)
        		{
        			var arrowId = 'stcArrow'+ (i.toString()).padLeft(2, "0");
        			var arrowTop = (divFlow.getOffsetHeight() - 20)/2;
        			var arrowLeft = nLeft + divWfProc.getOffsetWidth() + space;
        			var stcArrow = new Static(arrowId, arrowLeft, arrowTop, 20, 20, null, null);

        			if(curWfProcRow > i)	stcArrow.set_cssclass("stc_WfAllow_On");
        			else					stcArrow.set_cssclass("stc_WfAllow_Off");
        			stcArrow.set_tabstop(false);

        			divFlow.addChild(arrowId, stcArrow);
        			stcArrow.show();
        		}


        		// 현재단계면 클릭이벤트 실행
        		if(curWfProcYn == 'Y')
        			this.reqWfProcClick(divWfProc);


        		// 좌표 재계산
        		nLeft = stcArrow.getOffsetLeft() + stcArrow.getOffsetWidth() + space;
        	}

        	this.dsHist.set_filterstr("");


        	if(this.dsWorkFlow.getColumn(curWfProcRow, "WF_PROC_CD") != "WF_PROC_9999") {
        		this.divWorkflow.form.stcCgerInfo.dsRow = curWfProcRow;
        	}
        	else {
        		this.divWorkflow.form.stcCgerInfo.dsRow = 0;
        	}

        // 	if(wfProcCd == "WF_PROC_1000")
        // 	{
        // 		this.divWorkflow.form.stcCgerInfoNm.set_text("요청자 : ");
        // 	}
        // 	else
        // 	{
        // 		if(this.dsWorkFlow.getColumn(this.divWorkflow.form.stcCgerInfo.dsRow, "CGER_TYPE_CD") == "03")
        // 		{
        // 			this.divWorkflow.form.stcCgerInfoNm.set_text("역할자 : ");
        // 		}
        // 		else
        // 		{
        // 			this.divWorkflow.form.stcCgerInfoNm.set_text("담당자 : ");
        // 		}
        //	}
        	this.divWorkflow.form.divFlow.form.resetScroll();
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnHist" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"SR0010_P02",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0010_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					  title			: "[" + this.dsCond.getColumn(0, "REQ_ID") + "] 처리 이력"
        					, pReqId		: this.dsCond.getColumn(0, "REQ_ID")
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;
        	}
        };

        this.reqWfProcClick = function(obj, e)
        {
        	if( obj.toString().toUpperCase() == '[OBJECT STATIC]' )	obj = obj.parent.parent;

        	//this.dsWorkFlow.findRowExpr("WF_PROC_CD=='" + obj.wfProcCd + "' && GUBUN=='" + obj.gubun + "' && APPR_LVL_SEQ=='" + obj.apprLvlSeq + "'");
        	trace('wfProcCd :: ' + obj.wfProcCd);
        	trace('gubun :: ' + obj.gubun);
        	trace('apprLvlSeq :: ' + obj.apprLvlSeq);
        	trace('wfProcSkipYn :: ' + obj.wfProcSkipYn);

        	// set css
        	for(var i = 0; i < this.arrWfDiv.length; i++) {
        		this.arrWfDiv[i].set_cssclass(this.arrWfDiv[i].defCss);
        	}
        	obj.set_cssclass(obj.defCss + 'Sel');


        	var clickRow = -1;
        	var divFlow = this.divWorkflow.form.divFlow;
        	var wfProcCd	= obj.wfProcCd;
        	var gubun		= obj.gubun;
        	var apprLvlSeq	= obj.apprLvlSeq;
        	var wfProcSkipYn = obj.wfProcSkipYn;
        	var divCss		= obj.defCss;

        	var rowpos = -1;
        	if(wfProcCd == "WF_PROC_9999")
        	{
        		this.divWorkflow.form.stcCgerInfoNm.set_text("");
        		this.divWorkflow.form.stcCgerInfo.set_text("");
        		this.divWorkflow.form.stcCgerProcInfo.set_text("");
        		this.divWorkflow.form.stcCgerProcConts.set_text("");
        	}
        	else
        	{
        		rowpos = this.dsWorkFlow.findRow('WF_PROC_CD', wfProcCd);

        		var cgerInfo = this.dsWorkFlow.getColumn(rowpos, "CGER_INFO") ||'';
        		this.divWorkflow.form.stcCgerInfo.dsRow = rowpos;

        		// 역할자 명칭 setting
        		if(gubun == "1")
        		{
        			if(wfProcCd == "WF_PROC_1000")
        			{
        				this.divWorkflow.form.stcCgerInfoNm.set_text("요청자 : ");
        			}
        			else
        			{
        				if(this.dsWorkFlow.getColumn(rowpos, "CGER_TYPE_CD") == "03")	this.divWorkflow.form.stcCgerInfoNm.set_text("역할자 : ");
        				else															this.divWorkflow.form.stcCgerInfoNm.set_text("담당자 : ");
        			}
        		}
        		else
        		{
        			this.divWorkflow.form.stcCgerInfoNm.set_text("결재자 : ");
        		}

        		// 역할자 조회
        		this.dsCond.setColumn(0, "GUBUN", gubun);
        		this.dsCond.setColumn(0, "WF_PROC_CD", wfProcCd);
        		this.dsCond.setColumn(0, "APPR_LVL_SEQ", apprLvlSeq);
        		this.dsCond.setColumn(0, "WF_PROC_SKIP_YN", wfProcSkipYn);

        		var curRow = this.dsWorkFlow.findRow("CUR_WF_PROC_YN", "Y");
        		//alert("curRow : " + curRow + " rowpos : " + rowpos);
        		if(rowpos < curRow)	this.dsCond.setColumn(0, "PROC_YN", "Y");
        		else				this.dsCond.setColumn(0, "PROC_YN", "N");
        		this.fnSearchWfFlowDetail();
        	}

        };

        this.reqWfProcTitleClick = function(obj,e)
        {
        	if(this.parent.parent.gubunArr)
        	{
        		for(var i=0; i<this.parent.parent.gubunArr.length; i++)
        		{
        			var divId = this.parent.parent.gubunArr[i][0];
        			var wfDivObj = this.parent.parent.divForm.form[divId];

        			var formWfProcCd = nexacro.replaceAll(divId, "divForm", "");

        			if(formWfProcCd == obj.wfProcCd)
        			{
        				trace("divId:[" + divId + "] formWfProcCd : " + formWfProcCd + " wfDivObj.getOffsetTop() : " + wfDivObj.getOffsetTop());
        				if(this.parent.parent.divForm.form.vscrollbar)
        				{
        					if(formWfProcCd == "WF_PROC_1000")
        					{
        						this.parent.parent.divForm.form.vscrollbar.set_pos(0);
        					}
        					else
        					{
        						this.parent.parent.divForm.form.vscrollbar.set_pos(wfDivObj.getOffsetTop());
        					}
        					break;
        				}
        			}
        		}
        	}
        }

        this.stcOnClick = function(obj,e)
        {
        	if(obj.id == "stcCgerInfo")
        	{
        		if(this.divWorkflow.form.stcCgerInfo.cssclass == "stc_WF_event")
        		{
        			var dsRow = -1;

        			for(var i=0; i<this.arrWfDiv.length; i++)
        			{
        				if(this.arrWfDiv[i].cssclass.indexOf("Sel") > -1)
        				{
        					dsRow = this.arrWfDiv[i].dsRow;
        					break;
        				}

        				if(this.arrWfDiv[i].cssclass == "div_WF_WFHist_On")
        				{
        					dsRow = this.arrWfDiv[i].dsRow;
        					break;
        				}
        			}
        			//var dsRow = nexacro.toNumber(this.divWorkflow.form.stcCgerInfo.dsRow, -1);

        			var title		= "";
        			var cgerGubun	= nexacro.replaceAll(nexacro.replaceAll(this.divWorkflow.form.stcCgerInfoNm.text, ":", ""), " ", "");

        			if(this.dsWorkFlow.getColumn(dsRow, "CGER_TYPE_CD") == "03")
        			{
        				title = this.divWorkflow.form.stcCgerInfo.text + " 정보";
        			}
        			else
        			{
        				title = cgerGubun + " 정보";
        			}

        			if(dsRow > -1)
        			{
        				Ex.core.popup(
        					this,					// <--- 팝업 실행 스코프
        					"SR0010_P01",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        					"sr::SR0010_P01.xfdl",	// <--- 팝업창 오픈 Url
        					{
        						  title			: "[" + this.dsWorkFlow.getColumn(dsRow, "WF_PROC_NM_STR") + "] " + cgerGubun + " 정보"
        						, pCgerGubun	: title
        						, pGubun		: this.dsWorkFlow.getColumn(dsRow, "GUBUN")
        						, pReqTmplatId	: this.dsWorkFlow.getColumn(dsRow, "REQ_TMPLAT_ID")
        						, pReqTmplatVer	: this.dsWorkFlow.getColumn(dsRow, "REQ_TMPLAT_VER")
        						, pReqId		: this.dsWorkFlow.getColumn(dsRow, "REQ_ID")
        						, pWfProcCd		: this.dsWorkFlow.getColumn(dsRow, "WF_PROC_CD")
        						, pCgerTypeCd	: this.dsWorkFlow.getColumn(dsRow, "CGER_TYPE_CD")
        						, pApprLvlSeq	: this.dsWorkFlow.getColumn(dsRow, "APPR_LVL_SEQ")
        						, pApprCnt		: this.dsProcConts.getColumn(0, "APPR_CNT")
        					},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        				);
        			}
        		}
        	}
        };

        this.divWorkflow_stcReqWfProc_onrbuttondown = function(obj,e)
        {
        	if(e.ctrlkey)
        	{
        		this.divWorkflow.form.divFlow.form.btn00.set_visible(!this.divWorkflow.form.divFlow.form.btn00.visible);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divWorkflow.form.stcReqWfProc.addEventHandler("onrbuttondown",this.divWorkflow_stcReqWfProc_onrbuttondown,this);
            this.divWorkflow.form.stcCgerInfoNm.addEventHandler("onclick",this.stcOnClick,this);
            this.divWorkflow.form.stcCgerInfo.addEventHandler("onclick",this.stcOnClick,this);
            this.divWorkflow.form.btnHist.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divWorkflow.form.stcCgerProcInfo.addEventHandler("onclick",this.stcOnClick,this);
            this.divWorkflow.form.stcCgerProcConts.addEventHandler("onclick",this.stcOnClick,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
        };
        this.loadIncludeScript("SR0010_D00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
