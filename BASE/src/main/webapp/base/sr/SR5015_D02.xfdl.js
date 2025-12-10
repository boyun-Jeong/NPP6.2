(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5015_D02");
            this.set_titletext("전산기기 처리자 항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrSysJunsan", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CLSS\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERIAL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLE_YY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"WKP_BUILD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_IN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKP_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ASSET_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">신규</Col><Col id=\"CMM_CD\">BIZC0V0AA</Col></Row><Row><Col id=\"CMM_CD_NM\">회수</Col><Col id=\"CMM_CD\">BIZC0V0AB</Col></Row><Row><Col id=\"CMM_CD_NM\">이동설치</Col><Col id=\"CMM_CD\">BIZC0V0AC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSust", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
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

            obj = new Grid("grdList","0","34",null,"223","0.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSrSysJunsan");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdSubList_onsummclick");
            obj.set_autoupdatetype("itemselect");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"요청분류\"/><Cell col=\"4\" text=\"자산번호\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"시리얼번호\"/><Cell col=\"7\" text=\"제조년도\"/><Cell col=\"8\" text=\"사용기한(연)\"/><Cell col=\"9\" text=\"사용기한\"/><Cell col=\"10\" text=\"위치코드\"/><Cell col=\"11\" text=\"장소\"/><Cell col=\"12\" text=\"직원구분\"/><Cell col=\"13\" text=\"신청자\"/><Cell col=\"14\" text=\"신청자명\"/><Cell col=\"15\" text=\"부서명\"/><Cell col=\"16\" text=\"내선번호\"/><Cell col=\"17\" text=\"연락처(HP)\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:REQ_CLSS\" textAlign=\"left\" combodataset=\"dsActType\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"4\" text=\"bind:ASSET_ID\" edittype=\"none\" expandimage=\"url(&apos;theme://images/gridFilter_D.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"5\" text=\"bind:MODEL_NAME\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:SERIAL_NUMBER\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:DATE_CODE\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:DURABLE_YY\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:USE_EDT\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:LOCATION_ID\"/><Cell col=\"11\" text=\"bind:LOCATION_NM\" expandimage=\"url(&apos;theme://images/gridFilter_D.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"12\" text=\"bind:REQ_TYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsSust\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"13\" text=\"bind:USER_ID\" expandimage=\"url(&apos;theme://images/gridFilter_D.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"14\" text=\"bind:USER_NM\"/><Cell col=\"15\" text=\"bind:DEPT_NM\" displaytype=\"normal\" edittype=\"text\" maskeditformat=\"##:##\" maskedittype=\"string\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:TEL_IN\" edittype=\"normal\" validation=\"내선번호;PHONE\"/><Cell col=\"17\" text=\"bind:USER_PHONE\" edittype=\"normal\" validation=\"연락처(HP);MOBILE\"/></Band></Format><Format id=\"multiSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"구성범주\"/><Cell col=\"4\" text=\"구성번호\"/><Cell col=\"5\" text=\"구성명\"/><Cell col=\"6\" text=\"호스트명\"/><Cell col=\"7\" text=\"운영환경\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:CI_TYPE_NM\" combodataset=\"dsCiTypeCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CI_ID\"/><Cell col=\"5\" text=\"bind:CI_NM\"/><Cell col=\"6\" text=\"bind:HOST_NM\"/><Cell col=\"7\" text=\"bind:OPENV_CATE_NM\"/></Band></Format></Formats>");
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

            obj = new Static("stcBg","0","306",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaOpinion","3","309",null,null,"3","3",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","257",null,"20","-540",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle3","0","274","500","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("업무내용 (개발명 등에 대하여 상세히 기재)");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00","0","297",null,"10","-540",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("recUserNm","txRecUser","value","dtSrReqInfo","recUserNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","stcBg","value","dsRevProc","PROC_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Static00_01","value","dsSrMaPrj","PRJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Static00_01.form.edtCntr9","value","dsSrReqCtPayInsptOp","CONF_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Static00_01.form.txaContents","value","dsSrReqIvInfo","DSUS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Static00_01.form.cboCol1_00","value","dsSrReqIvInfo","PRGS_PARG_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txaOpinion","value","dsWfSrm","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5015_D02.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5015_D02.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5015_D02
        * 화면(명)	︰ 전산기기 처리자 항목
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.02.05	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
         this.dsSrBaseInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo : null);
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
        	var strReqSeq = this.dsSrSysJunsan.getMax("REQ_SEQ");
        	var nNo = 0;

        	if(strReqSeq == null || strReqSeq == "0") {
        		nNo = 1;
        	} else {
        		nNo = new Number(strReqSeq.valueOf()) + 1;
        	}

        	var rowPos = this.dsSrSysJunsan.setInsertRow(this.dsSrSysJunsan.rowcount+1);
        	var grdObj = this.grdList;

        	this.dsSrSysJunsan.setColumn(rowPos, "REQ_SEQ", nNo); // 시퀀스
        	if(!this.dsSrSysJunsan.getColumnInfo("REQ_ID")){
        		this.dsSrSysJunsan.addColumn("REQ_ID", "STRING"); //  요청서번호
        	};
        	this.dsSrSysJunsan.setColumn(rowPos, "REQ_ID", this.dsCond.getColumn(0, "REQ_ID"));

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
        				this.dsRevProc.setColumn(0, "IN_USER_ID", Ex.util.getSession('gvUserId')); // 접수자ID
        				this.dsRevProc.setColumn(0, "IN_ORG_USER_ID", Ex.util.getSession('gvUserId'));  // 접수자ID
        				this.dsRevProc.setColumn(0, "IN_GUBUN_NM", '');  // 처리자구분
        				this.dsRevProc.setColumn(0, "IN_PROC_EXAM_OPIN", '');  // 처리의견
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
        		case "selAssetPop" : // 자산검색 팝업
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				// 자산ID
        				if(!this.dsSrSysJunsan.getColumnInfo("AM_ASSET_ID")){
        					this.dsSrSysJunsan.addColumn("AM_ASSET_ID","STRING");
        				}
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "AM_ASSET_ID", this.dsPopRtn.getColumn(0, 'AM_ASSET_ID'));
        				// 자산번호
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "ASSET_ID", this.dsPopRtn.getColumn(0, 'ASSET_NO'));
        				// 품목명
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "MODEL_NAME", this.dsPopRtn.getColumn(0, 'ITEM_NM'));
        				// 시리얼번호
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "SERIAL_NUMBER", this.dsPopRtn.getColumn(0, 'SERIAL_NO'));

        				// TODO 아래 신규컬럼은 추후 팝업에서 수정완료확인후 데이터 확인해야함
        				// 제조년도
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "DATE_CODE", this.dsPopRtn.getColumn(0, 'DATE_CODE'));
        				// 사용기한(연)
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "DURABLE_YY", this.dsPopRtn.getColumn(0, 'DURABLE_YY'));
        				// 사용기한
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "USE_EDT", this.dsPopRtn.getColumn(0, 'USE_EDT'));
        			}
        		break;

        		case "userPopup" : // 사용자 팝업
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				// 담당자사번
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "USER_ID", this.dsPopRtn.getColumn(0, 'USER_ID'));
        				// 담당자명
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "USER_NM", this.dsPopRtn.getColumn(0, 'USER_NM'));
        				// 그룹코드
        				//this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "DEPT_CD", this.dsPopRtn.getColumn(0, 'DEPT_CD'));
        				// 그룹명
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "DEPT_NM", this.dsPopRtn.getColumn(0, 'DEPT_NM'));
        				// 내선번호
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "TEL_IN", this.dsPopRtn.getColumn(0, 'TELNUM'));
        				// 연락처
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "USER_PHONE", this.dsPopRtn.getColumn(0, 'MOBILE_NUM'));
        			}
        		break;

        		case "commSearchFloorPopup" :	// 근무장소 팝업
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "WKP_BUILD_NM", this.dsPopRtn.getColumn(0,"BRANCH_NM")); // 지점/센터명
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "WKP_FLOOR", this.dsPopRtn.getColumn(0, "FLOOR_NM")); // 층

        				if(!this.dsSrSysJunsan.getColumnInfo("LOCATION_ID")){
        					this.dsSrSysJunsan.addColumn("LOCATION_ID","STRING");
        				}
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "LOCATION_ID", this.dsPopRtn.getColumn(0, "LOCATION_ID")); // 위치코드
        				this.dsSrSysJunsan.setColumn(this.dsSrSysJunsan.rowposition, "LOCATION_NM", this.dsPopRtn.getColumn(0, "LOCATION_NM")); // 건물, 층수

        				//this.dsSrSysConnIp.setColumn(this.dsSrSysConnIp.rowposition, "WKP_BUILD_NM_MAIN", this.dsPopRtn.getColumn(0, 'CMM_CD_NM_MAIN')); // 상위코드명
        				//this.dsSrSysConnIp.setColumn(this.dsSrSysConnIp.rowposition, "WKP_FLOOR_NM", this.dsPopRtn.getColumn(0, 'CMM_CD_NM_SUB')); // 하위코드명
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
        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['EMP_TYPE_CD']	// 조회할 상위코드
        		,codeDiv	: ['CMM_CD'		]	// 조회할 코드의 업무구분
        		,optStr		: ['ALL'		]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'			]	// 사용여부
        		,filter		: [''			]	// filterStr
        		,objDs		: [this.dsSust	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsSrBaseInfo);
        }

        this.fnSaveCheck = function(isReg)
        {
        	var nRowCnt = this.dsSrSysJunsan.rowcount;

        	if(nRowCnt == 0){
        		var param = {
                	msg	: "신청자정보를 등록하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		return false;
        	}

        	for(i = 0; i < nRowCnt; i++){
        		// 요청분류
        		strValue = this.dsSrSysJunsan.getColumn(i, "REQ_CLSS");
        		if(strValue == null){
        			var param = {
        				msg	: "신청자정보 " + (i.valueOf() + 1) + "행의 요청분류를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 자산
        		strValue = this.dsSrSysJunsan.getColumn(i, "ASSET_ID");
        		if(strValue == null){
        			var param = {
        				msg	: "신청자정보 " + (i.valueOf() + 1) + "행의 자산번호를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 장소
        		strValue = this.dsSrSysJunsan.getColumn(i, "LOCATION_NM");
        		if(strValue == null){
        			var param = {
        				msg	: "신청자정보 " + (i.valueOf() + 1) + "행의 장소를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 직원구분
        		strValue = this.dsSrSysJunsan.getColumn(i, "REQ_TYPE");
        		if(strValue == null){
        			var param = {
        				msg	: "신청자정보 " + (i.valueOf() + 1) + "행의 직원구분을 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		// 신청자정보
        		strValue = this.dsSrSysJunsan.getColumn(i, "USER_ID");
        		if(strValue == null){
        			var param = {
        				msg	: "신청자정보 " + (i.valueOf() + 1) + "행의 신청자정보를 확인하시기 바랍니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
        			Ex.core.alert(this, param);
        			return false;
        		}

        	}
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
        			this.fnAdd(this.dsSrSysJunsan);
        			break;

        		// 작업후 확인사항 삭제
        		case "btnDelete" :
        			this.fnDelete(this.dsSrSysJunsan);
        			break;

        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        //화면 컴포넌트 제어를 위해 사용
        this.setChangeEditAfter = function()
        {
        	var oAuth = Ex.util.getMenuAuth(this);
        }
        this.grdList_onexpandup = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("Body", "ASSET_ID"))
        	{
        		Ex.core.popup(
        			this,
        			'selAssetPop',
        			'am::AM0000_P01.xfdl',
        			{
        				title : Ex.core.word('자산번호') + ' ' + Ex.core.word('선택')
        				,pSelType	: 'S'
        				,pClassH	: 'H0000'	// HW
        				,pClassM	: 'HOA00'	// 전산장비
        				,pClassReadonly : true
        			},
        			'autosize'
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
        				pSelType: "S",
        				data : this.dsSrSysJunsan.getColumn(obj.getDatasetRow(e.row), "USER_ID"),
        				pAuserFlag : 'Y'
        				//type : "name",
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"width=900,height=500"							// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        	else if(e.cell == obj.getBindCellIndex("Body", "LOCATION_NM"))
        	{
        		Ex.core.popup(
        			this,											// <--- 팝업 실행 스코프
        			"commSearchFloorPopup",							// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			//"sr::SR5014_P01.xfdl",						// <--- 팝업창 오픈 Url
        			"ms::MS0900_P01.xfdl",
        			{
        				title : Ex.core.word('위치') + ' ' + Ex.core.word('선택')
        				,pSelType	: 'S'
        				/*title : "근무장소검색팝업",
        				pSelType: "S",
        				data : this.dsSrSysJunsan.getColumn(obj.getDatasetRow(e.row), "WKP_FLOOR")
        				*/
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			//"width=430,height=360"							// <--- width/height/modeless(프레임 처리 옵션)
        			'autosize'
        		);
        	}
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
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
            this.dsSrSysJunsan.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR5015_D02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
