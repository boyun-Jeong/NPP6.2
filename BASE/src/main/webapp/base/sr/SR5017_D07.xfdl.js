(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5016_D03");
            this.set_titletext("담당자 처리 테스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWfChmWorkHist", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_MH\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_UDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_SHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_EHDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_PROC_ADT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_JOB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SVC_IMPT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SVC_IMPT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ADVC_PREP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_JOB_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_POST_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeWork", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("변경처리중");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","34",null,"266","0.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsWfChmWorkHist");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdSubList_onsummclick");
            obj.set_autoupdatetype("itemselect");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"350\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"구분\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"담당자\"/><Cell col=\"5\" text=\"시작일\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"시간\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"완료일\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"8\" text=\"시간\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"9\" text=\"작업설명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"10\" text=\"공수(H)\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"11\" text=\"입력(수정)일시\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:DEV_PROCESS\" textAlign=\"left\" combodataset=\"dsCodeWork\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"4\" text=\"bind:DEV_USER_NAME\" edittype=\"none\" expandshow=\"hide\" expandsize=\"24\" displaytype=\"normal\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:DEV_SDATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:DEV_SHDATE\" edittype=\"mask\" displaytype=\"mask\" maskeditformat=\"##\" maskedittype=\"string\"/><Cell col=\"7\" text=\"bind:DEV_EDATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"8\" text=\"bind:DEV_EHDATE\" edittype=\"mask\" maskeditformat=\"##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:DEV_CONT\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:DEV_MH\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"11\" text=\"bind:DEV_UDATE\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" displaytype=\"mask\"/></Band></Format><Format id=\"multiSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"구성범주\"/><Cell col=\"4\" text=\"구성번호\"/><Cell col=\"5\" text=\"구성명\"/><Cell col=\"6\" text=\"호스트명\"/><Cell col=\"7\" text=\"운영환경\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:CI_TYPE_NM\" combodataset=\"dsCiTypeCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CI_ID\"/><Cell col=\"5\" text=\"bind:CI_NM\"/><Cell col=\"6\" text=\"bind:HOST_NM\"/><Cell col=\"7\" text=\"bind:OPENV_CATE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","75",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,300,this,function(p){});
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
        this.addIncludeScript("SR5017_D07.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5017_D07.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5016_D03
        * 화면(명)	︰ 담당자 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.02.10	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        	//this.dsSrBaseInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo : null);
        	//var gv_ingPhase = "";

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
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnAdd = function(objDs)
        {
        	var strReqSeq = this.dsWfChmWorkHist.getMax("SEQ");
        	var nNo = 0;

        	if(strReqSeq == null || strReqSeq == "0")
        	{
        		nNo = 1;
        	}
        	else
        	{
        		nNo = new Number(strReqSeq.valueOf()) + 1;
        	}

        	var rowPos = this.dsWfChmWorkHist.setInsertRow(this.dsWfChmWorkHist.rowcount+1);
        	var grdObj = this.grdList;

        	this.dsWfChmWorkHist.setColumn(rowPos, "SEQ", nNo);		// 시퀀스
        	this.dsWfChmWorkHist.setColumn(rowPos, "REQ_ID", this.dsCond.getColumn(0, "REQ_ID"));	// 시퀀스

        	if(!this.dsWfChmWorkHist.getColumnInfo("DEV_USER_NAME")){
        		this.dsWfChmWorkHist.addColumn("DEV_USER_NAME", "STRING") // 담당자명
        	}
        	objDs.setColumn(rowPos, "DEV_USER_NAME", Ex.util.getSession("gvUserNm")); // 담당자명
        	objDs.setColumn(rowPos, "DEV_USER_ID", Ex.util.getSession("gvUserId"));   // 담당자ID

        	objDs.setColumn(rowPos, "DEV_SDATE", Ex.util.today());	// 시작일
        	objDs.setColumn(rowPos, "DEV_EDATE", Ex.util.today());	// 종료일
        	//objDs.setColumn(rowPos, "DEV_SHDATE", "00" ); 		// 시작시간
        	//objDs.setColumn(rowPos, "DEV_EHDATE", "00" ); 		// 종료시간


        	objDs.set_rowposition(rowPos);
        	grdObj.showEditor(true);					// 그리드 편집모드로 변경
        	grdObj.setCellPos(3, objDs.rowposition);	// 그리드 셀 포커스 이동
        }

        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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

        	//trace("[SR0000_D01]-this.fnCallback() sSvcId : " + sSvcId);

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select" :
        			if(this.dsRevProc.rowcount == 0)
        			{
        				this.dsRevProc.setAddRow();
        				this.dsRevProc.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsRevProc.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        			}
        		    this.dsWfSrm.set_updatecontrol(true);
        			// gv_ingPhase = this.dsWfChmSub.getColumn(0, 'ING_PHASE'); // 현재 단계


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
        		case "selAssetPop" :
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				//this.dsSrBaseInfo.setColumn(0, "REF_REQ_ID", this.dsPopRtn.getColumn(0, "REQ_ID"));
        			}
        		break;

        		case "userPopup" :
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				//this.dsSrBaseInfo.setColumn(0, "REF_REQ_ID", this.dsPopRtn.getColumn(0, "REQ_ID"));
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

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	// 그리드 에니메이션처리
        	this.grdList.displayRowType();
        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());

        	if(this.reqInfo.REQ_STAT_CD == "RQST01")
        	{
        		// TODO 처리자 시점일때 아마 RQST02 확인후 교체필요
        		this.grdList.set_readonly(false);
        		this.grdList.set_enable(false);
        		this.grdList.set_enable(true);
        		this.btnAdd.set_enable(true);
        		this.btnDelete.set_enable(true);
        	}
        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['CHMHIST01']	// 조회할 상위코드
        		,codeDiv	: [''		 ]	// 조회할 코드의 업무구분
        		,optStr		: ['SEL'	 ]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'		 ]	// 사용여부
        		,filter		: [''		 ]	// filterStr
        		,objDs		: [this.dsCodeWork]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsRevProc);
        }

        this.fnSaveCheck = function(isReg)
        {
        	let strValue = "";
        	let nRowCnt = this.dsWfChmWorkHist.rowcount;

        	for(i = 0; i < nRowCnt; i++)
        	{
        		strValue = this.dsWfChmWorkHist.getColumn(i, "DEV_PROCESS");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 구분을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfChmWorkHist.getColumn(i, "DEV_SDATE");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 시작일을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfChmWorkHist.getColumn(i, "DEV_SHDATE");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 시작시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		if(strValue < '00' || strValue > '24')
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 시작시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfChmWorkHist.getColumn(i, "DEV_EDATE");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 완료일을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfChmWorkHist.getColumn(i, "DEV_EHDATE");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 완료시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		if(strValue < '00' || strValue > '24')
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 완료시간을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		var selecToday = nexacro.toNumber(this.dsWfChmWorkHist.getColumn(0,"DEV_SDATE"));
        		var selecEndday = nexacro.toNumber(this.dsWfChmWorkHist.getColumn(0,"DEV_EDATE"));

        		if(selecEndday <  selecToday)
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 완료일는 시작일보다 크거나 같아야 합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.alert(this, param);
        			//this.dsWfChmWorkHist.setColumn(0,"DEV_EDATE",'');
        			return false;
        		}

        		strValue = this.dsWfChmWorkHist.getColumn(i, "DEV_CONT");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 작업설명을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.dsWfChmWorkHist.getColumn(i, "DEV_MH");
        		if( Ex.isEmpty(strValue) )
        		{
        			var param = {
        				  msg	: "처리내용 " + (i.valueOf() + 1) + "행의 공수를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	this.dsWfChmWorkHist.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	//this.dsWfChmWorkHist.setColumn(0, "ROWFLAG", "U");

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

        this.fnPagePreView = function(strReqDesc)
        {
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		// 작업후 확인사항 그리드
        		case "btnAdd" :
        			this.fnAdd(this.dsWfChmWorkHist);
        			break;

        		// 작업후 확인사항 삭제
        		case "btnDelete" :
        			this.fnDelete(this.dsWfChmWorkHist);
        			break;

        	}
        }

        //화면 컴포넌트 제어를 위해 사용
        this.setChangeEditAfter = function()
        {
        	//var oAuth = Ex.util.getMenuAuth(this);
        }

        this.grdList_onexpandup = function(obj,e)
        {
        	/*if(e.cell == obj.getBindCellIndex("Body", "ASSET_ID"))
        	{
        		Ex.core.popup(this
        						, 'selAssetPop'
        						, 'am::AM0000_P01.xfdl'
        						, {
        							 title 			: Ex.core.word('자산 선택')
        							,pSelType		: 'S'
        						  }
        						, 'autosize'
        			);
        	}
        	else if (e.cell == obj.getBindCellIndex("Body", "USER_ID"))
        	{
        		Ex.core.popup(
        			this,											// <--- 팝업 실행 스코프
        			"userPopup",							// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"fomm::FOMM0000_P01.xfdl",						// <--- 팝업창 오픈 Url
        			{
        				title : "자산 담당자 선택",
        				pSelType: "S"
        				//type : "name",
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"width=900,height=500"							// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}*/
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
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
            this.stcInfoTitle.addEventHandler("onrbuttonup",this.stOonRbuttonUp,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList.addEventHandler("onexpandup",this.grdList_onexpandup,this);
            this.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWfChmWorkHist.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR5017_D07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
