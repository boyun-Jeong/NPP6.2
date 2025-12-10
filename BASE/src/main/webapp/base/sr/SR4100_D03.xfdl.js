(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR4100_D3");
            this.set_titletext("처리계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChm", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">1</Col><Col id=\"CMM_CD_NM\">예</Col></Row><Row><Col id=\"CMM_CD\">0</Col><Col id=\"CMM_CD_NM\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfPbm", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"14\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"60\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PBM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_BJC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SOLVED_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SRL_EXM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Div("divContent","0","0",null,"230","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","0","67",null,"80","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","34",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin","0","67","130","80",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("근본원인");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaProcExam","stcProcExamOpin:5.00","72",null,"71","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            obj.set_validationGroup("input01");
            obj.set_validation("근본원인;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcSdt","0","34","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("계획시작");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","230",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_text("처리계획");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calPlanSdt","stcProcSdt:5.00","40","113","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작일;NULL");
            obj.set_text("    -  -  ");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanStime","calPlanSdt:2.00","40","56","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validationGroup("input01");
            obj.set_validation("계획시작시간;NULL");
            obj.set_text("__:__");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm01","33.25%","34","130","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_text("계획완료");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calPlanEdt","stcProcUserNm01:5.00","40","113","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("계획완료일;NULL");
            obj.set_text("    -  -  ");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskPlanEtime","calPlanEdt:2.00","40","56","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validation("계획완료시간;NULL");
            obj.set_text("__:__");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static04",null,"34","130","34","26.00%",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("예상공수(Hour)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtPlanMh","Static04:5.00","40","50","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputtype("number");
            obj.set_validationGroup("input01");
            obj.set_validation("예상공수;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","0","146",null,"80","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin00","0","146","130","80",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_text("조치내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaProcPlan","135.00","151",null,"71","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            obj.set_validationGroup("input01");
            obj.set_validation("조치내용;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,230,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.calPlanSdt","value","dsWfPbm","PLAN_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.calPlanEdt","value","dsWfPbm","PLAN_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.mskPlanStime","value","dsWfPbm","PLAN_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.mskPlanEtime","value","dsWfPbm","PLAN_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.edtPlanMh","value","dsWfPbm","PLAN_MH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.txaProcPlan","value","dsWfPbm","TEST_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.txaProcExam","value","dsWfPbm","CAUSE_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.stcProcSdt","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.edtOpinion","value","dsRevProc","PROC_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR4100_D03.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR4100_D03.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR4100_D03
        * 화면(명)	︰ 처리계획
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2025.03.14	WEMB		최초작성
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
        		case "select" :
        			if(this.dsWfPbm.getColumn(0, "PLAN_SDT") == null){
        				this.dsWfPbm.setColumn(0, "PLAN_SDT", Ex.util.today());
        				this.dsWfPbm.setColumn(0, "PLAN_STIME", "0900");
        			}

        			if(this.dsWfPbm.getColumn(0, "PLAN_EDT") == null){
        				this.dsWfPbm.setColumn(0, "PLAN_EDT", Ex.util.addDate(Ex.util.today(), +7));
        				this.dsWfPbm.setColumn(0, "PLAN_ETIME", "2359");
        			}

        			if(this.reqInfo.WF_PROC_CD == "WF_PROC_2020"){
        				this.SDT_onchanged();
        			}

        			if( this.dsRevProc.rowcount == 0)
        			{
        				var aRow = this.dsRevProc.setInsertRow();
        				this.dsRevProc.setColumn(aRow, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsRevProc.setColumn(aRow, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);

        				if(this.reqInfo.WF_FUNC_CD == "WF_FUNC_04" && (this.reqInfo.SAVE_BTN_YN == "Y" || this.reqInfo.REV_BTN_YN == "Y") )
        				{
        					this.dsRevProc.setColumn(0, "USER_ID", Ex.util.getSession('gvUserId'));
        					this.dsRevProc.setColumn(0, "USER_NM", Ex.util.getSession('gvUserNm'));
        					this.dsWfPbm.setColumn(0, "WORK_USER_ID", Ex.util.getSession('gvUserId'));
        				}
        			}
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
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "calPlanSdt" :		// 계획시작일
        			this.divContent.form.calPlanSdt.setFocusRed();
        			break;

        		case "mskPlanStime" :	// 계획시작시간
        			this.divContent.form.mskPlanStime.setFocusRed();
        			break;

        		case "calPlanEdt" :		// 계획종료일
        			this.divContent.form.calPlanEdt.setFocusRed();
        			break;

        		case "mskPlanEtime" :	// 계획종료시간
        			this.divContent.form.mskPlanEtime.setFocusRed();
        			break;

        		case "PLAN_MH" :	// 예상공수
        			this.divContent.form.edtPlanMh.setFocusRed();
        			break;

        		case "CAUSE_CONT" :	// 근본원인
        			this.divContent.form.txaProcExam.setFocusRed();
        			break;

        		case "TEST_CONT" :	// 조치내용
        			this.divContent.form.txaProcPlan.setFocusRed();
        			break;
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

        this.isUpdateForm = function()
        {
        	if( !Ex.util.isUpdated(this.dsRevProc) && !Ex.util.isUpdated(this.dsWfPbm) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        	if(this.parent.editYn == "Y")
        	{
        		if( !Ex.util.checkValidate(this, "input01") ) return false;

        		var selecToday = nexacro.toNumber(this.dsWfPbm.getColumn(0,"PLAN_SDT"));
        		var selecEndday = nexacro.toNumber(this.dsWfPbm.getColumn(0,"PLAN_EDT"));
        		let strValue = "";

        		if(this.reqInfo.WF_PROC_CD == "WF_PROC_2020")
        		{
        			if(selecToday <  nexacro.toNumber(Ex.util.today()))
        			{
        				var param = {
        					  id	: "calPlanSdt"
        					, msg	: "계획시작일은 오늘날짜보다 크거나 같아야합니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			else if( Ex.isEmpty(this.dsWfPbm.getColumn(0,"PLAN_SDT")) )
        			{
        				var param = {
        					  id	: "calPlanSdt"
        					, msg	: "계획시작일을 확인하시기 바랍니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			strValue = this.dsWfPbm.getColumn(0, "PLAN_STIME");
        			if(strValue < '0000' || strValue > '2459' || Ex.isEmpty(strValue) )
        			{
        				var param = {
        					  id	: "mskPlanStime"
        					, msg	: "계획시작시간을 확인하시기 바랍니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			if(selecEndday <  selecToday && this.reqInfo.WF_PROC_CD == "WF_PROC_2020")
        			{
        				var param = {
        					  id : "calPlanEdt"
        					, msg	: "계획완료일은 계획시작일보다 크거나 같아야합니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			if( Ex.isEmpty(this.dsWfPbm.getColumn(0,"PLAN_EDT")) )
        			{
        				var param = {
        					  id	: "calPlanEdt"
        					, msg	: "계획완료일을 확인하시기 바랍니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			strValue = this.dsWfPbm.getColumn(0, "PLAN_ETIME");
        			if(strValue < '0000' || strValue > '2459' || Ex.isEmpty(strValue) )
        			{
        				var param = {
        					  id : "mskPlanEtime"
        					, msg	: "계획완료시간을 확인하시기 바랍니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}

        		strValue = this.dsWfPbm.getColumn(0, "PLAN_MH");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  id : "PLAN_MH"
        				, msg	: "예상공수를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfPbm.getColumn(0, "CAUSE_CONT");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  id : "CAUSE_CONT"
        				, msg	: "근본원인을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfPbm.getColumn(0, "TEST_CONT");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  id : "TEST_CONT"
        				, msg	: "조치내용을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	//this.dsWfPbm.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	//this.dsWfPbm.setColumn(0, "ROWFLAG", "U");
        	//this.dsWfPbm.setColumn(0, "EM_YN", "0"); // 변경여부 1예 0아니오
        	/*
        	if(this.dsRevProc.rowcount == 0)
        	{
        		this.dsRevProc.setAddRow();
        		this.dsRevProc.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        		this.dsRevProc.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	}
        	*/
        	return true;
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

        this.divContent_txaProcExam_onchanged = function(obj,e)
        {

        };

        this.SDT_onchanged = function(obj,e)
        {
        	var hour = "";
        	var sDate = this.dsWfPbm.getColumn(0, "PLAN_SDT"); // 시작일
        	var sTime = this.dsWfPbm.getColumn(0, "PLAN_STIME"); // 시작시간
        	var eDate = this.dsWfPbm.getColumn(0, "PLAN_EDT"); // 종료일
        	var eTime = this.dsWfPbm.getColumn(0, "PLAN_ETIME"); // 종료시간

        	if(!sDate ||!sDate||!eDate||!eTime) return;

        	var start = new Date(sDate.substr(0,4), sDate.substr(4,2)-1, sDate.substr(6,2),sTime.substr(0,2),sTime.substr(2,2))
        	var end = new Date(eDate.substr(0,4), eDate.substr(4,2)-1, eDate.substr(6,2),eTime.substr(0,2),eTime.substr(2,2))

        	// 시간 차이(밀리초단위 => 시간)
        // 	var diffMs = end.getTime() - start.getTime();
        // 	var diffMin = diffMs / (1000*60); 	 // 분
        // 	var diffHr = Math.floor(diffMin/60); // 시간(정수)
        //
        // 	this.dsWfPbm.setColumn(0,"PLAN_MH" ,diffHr);
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.calPlanSdt.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.divContent.form.mskPlanStime.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.divContent.form.calPlanEdt.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.divContent.form.mskPlanEtime.addEventHandler("onchanged",this.SDT_onchanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfPbm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR4100_D03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
