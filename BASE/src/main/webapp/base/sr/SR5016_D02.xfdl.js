(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5016_D02");
            this.set_titletext("일반문의 담당자 접수의견");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,276);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCegr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNextWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"NEXT_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChm", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">1</Col><Col id=\"CMM_CD_NM\">예</Col></Row><Row><Col id=\"CMM_CD\">0</Col><Col id=\"CMM_CD_NM\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg01_00_00","0","97",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","64",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin","0","97","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접수의견");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaProcExam","stcProcExamOpin:5.00","102",null,"81","5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            obj.set_validationGroup("input01");
            obj.set_validation("접수의견;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","0","64","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("계획시작");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","66.65%","64","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("예상공수(Hour)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("담당자 접수의견");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPlanMh","Static04:5","70","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputtype("number");
            obj.set_validationGroup("input01");
            obj.set_validation("예상공수;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPlanSdt","stcProcUserNm:5.00","70","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작일;NULL");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanStime","calPlanSdt:2.00","70","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작시간;NULL");
            obj.set_text("__:__");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01","33.30%","64","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("계획완료");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPlanEdt","stcProcUserNm01:5","70","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("계획완료일;NULL");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanEtime","calPlanEdt:2.00","70","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validation("계획완료시간;NULL");
            obj.set_text("__:__");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","0","186",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin00","0","186","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("처리계획");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaProcPlan","135.00","191",null,"81","5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm00","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01_00","33.30%","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","66.65%","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("변경여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdChnYn","Static04_00:5","39","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsChm");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_validation("변경여부;NULL");
            obj.set_enableevent("true");
            obj.set_visible("false");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","stcProcUserNm00:5","39","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskProcDate","stcProcUserNm01_00:5","39","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("string");
            obj.getSetter("mask").set("@@@@-@@-@@ @@:@@:@@");
            obj.set_maskchar("_");
            obj.set_readonly("true");
            obj.set_format("####-##-## @@:@@:@@");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1820,276,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","txaProcExam","value","dsWfSrm","WORK_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calPlanSdt","value","dsWfSrm","PLAN_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calPlanEdt","value","dsWfSrm","PLAN_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","mskPlanStime","value","dsWfSrm","PLAN_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","mskPlanEtime","value","dsWfSrm","PLAN_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","txaProcPlan","value","dsWfSrm","PROC_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","rdChnYn","value","dsWfSrm","EM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtPlanMh","value","dsWfSrm","PLAN_MH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtUserNm","value","dsWfSrm","WORK_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","mskProcDate","value","dsWfSrm","WORK_RECP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5016_D02.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5016_D02.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5016_D02
        * 화면(명)	︰ 담당자 접수의견
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2025.02.17	WEMB		최초작성
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
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	this.gfnFormOnLoad(this, this.fnInit);

        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fn_initDataset();
        }

        this.fn_initDataset = function()
        {
        	//this.dsWfSrmSub.setInsertRow();
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

        	// 각 Transaction별 CallBack 처리
        	//trace("SR0200_D02 this.fnCallback() sSvcId:::[" + sSvcId + "]");

        	switch(sSvcId)
        	{
        		case "select01" :

        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	//trace("SR0200_D02 this.fnPopupAfter() pID : " + pID + " varValue : " + varValue);
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :	//
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

        	if(!varValue) return;

        	switch(mID)
        	{

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
         this.fnCompInit = function()
        {
        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();
        }
        this.fnSaveCheck = function(isReg)
        {
        	if( !Ex.util.checkValidate(this, "input01") ) return false;

        	var selecToday = nexacro.toNumber(this.dsWfSrm.getColumn(0,"PLAN_SDT"));
        	var selecEndday = nexacro.toNumber(this.dsWfSrm.getColumn(0,"PLAN_EDT"));

          	if(selecToday <  nexacro.toNumber(Ex.util.today()))
          	{
        		this.calPlanSdt.setFocusRed();
        		var param = {
                	msg	: "계획시작일은 오늘날짜보다 크거나 같아야합니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		//this.dsWfSrmSub.setColumn(0,"PLAN_SDT",'');
        		return false;
          	}

        	if(selecEndday <  selecToday)
          	{
        		this.calPlanEdt.setFocusRed();
        		var param = {
                	msg	: "계획완료일은 계획시작일보다 크거나 같아야합니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		//this.dsWfSrm.setColumn(0,"PLAN_EDT",'');
        		return false;
        	}

        	let strValue = "";

        	strValue = this.dsWfSrm.getColumn(0, "PLAN_STIME");
        	if(strValue < '0000' || strValue > '2459'){
        		this.mskPlanStime.setFocusRed();
        		var param = {
        			msg	: "계획시작시간을 확인하시기 바랍니다."	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	strValue = this.dsWfSrm.getColumn(0, "PLAN_ETIME");
        	if(strValue < '0000' || strValue > '2459'){
        		this.mskPlanEtime.setFocusRed();
        		var param = {
        			msg	: "계획완료시간을 확인하시기 바랍니다."	//메시지 내용
        			, arrparam : []						//메시지의 변수에 들어갈 실제값
        			, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	this.dsWfSrm.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	//this.dsWfSrm.setColumn(0, "ROWFLAG", "U");
        	this.dsWfSrm.setColumn(0, "EM_YN", "0"); // 변경여부 1예 0아니오

        	if(this.dsRevProc.rowcount == 0)
        	{
        		this.dsRevProc.setAddRow();
        		this.dsRevProc.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        		this.dsRevProc.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	}

        	return true;
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsRevProc);
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
        		case "" :
        			break;
        	}
        }
        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calPlanSdt.addEventHandler("onchanged",this.calPjtStime_onchanged,this);
            this.calPlanEdt.addEventHandler("onchanged",this.calPjtStime_onchanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
        };
        this.loadIncludeScript("SR5016_D02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
