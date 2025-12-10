(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR3100_D01");
            this.set_titletext("장애등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"ING_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IC_REG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IC_REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"IC_REC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"IC_CRE_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"IC_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IC_BREAKDOWN\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_BUSEO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_BUSEO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_PART_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_PART_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REC_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REC_COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IC_SEVERITY\" type=\"STRING\" size=\"256\"/><Column id=\"IC_PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"CI_IMPORTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"IER_OBJ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_RTO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_RECOVERY_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECT_RECOVERY_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAILE_IC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FAILE_CAUSE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_DRIVEN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FAIL_SITUATION\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_IMPACT\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_IMPACT_ONLINE\" type=\"STRING\" size=\"256\"/><Column id=\"FAIL_RECOVERY_ACTION\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMPLETE_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"REC_DUR_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_ANALYSIS\" type=\"STRING\" size=\"256\"/><Column id=\"FUTURE_ACTIONS\" type=\"STRING\" size=\"256\"/><Column id=\"PBM_TRN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PB_PROC_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_TRN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"KM_TRN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_AGENT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_AGENT_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_AGENT_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_AGENT_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_AGENT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"ICM_SEVERITY\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IC_CRE_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMPLETE_EDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCi", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"string\" size=\"16\"/><Column id=\"CI_NM\" type=\"string\" size=\"60\"/><Column id=\"CI_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIcmType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu3", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKnow", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"DATA\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIcmLv", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"DATA\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCiTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPhase", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContents","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_00_00_00","20","219",null,"171","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcIcBreakdown","20","434","130","67",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("45");
            obj.set_text("장애내역");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcContentsBg","stcIcBreakdown:-1","434",null,"67","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static06","20","87",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcIcTitle","20","87","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static10","20","54",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcRegUser","20","54","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static13","20","120",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcRpprNo","20","120","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_text("온라인 영향도");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcRegDate","33.33%","54","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcUpmu","33.33%","120","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("17");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcIcmtype","66.67%","87","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("장애유형/단계");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtIcTitle","stcIcTitle:5","92",null,"24","stcIcmtype:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("제목;NULL|MAX_LEN_UTF8:100");
            this.divContents.addChild(obj.name, obj);

            obj = new TextArea("txaIcBreakdown","stcIcBreakdown:5","439",null,"57","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("46");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("장애내역;MAX_LEN_UTF8:4000");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","stcUpmu:5","125","170","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV1;NULL");
            obj.set_innerdataset("dsUpmu1");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static05","20","20","202","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("일반정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid1","20","44",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static00",null,"92","14","24","134",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("69");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboIcmtype","stcIcmtype:5","92",null,"24","Static00:0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsIcmType");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("장애유형;NULL");
            this.divContents.addChild(obj.name, obj);

            obj = new Grid("grdSub","20","677",null,"131","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("57");
            obj.set_binddataset("dsSub");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdSubList_onsummclick");
            obj.set_autoupdatetype("itemselect");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"650\"/><Column size=\"170\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" colspan=\"2\" cssclass=\"CellEssential\" text=\"조치일시\"/><Cell col=\"5\" cssclass=\"CellEssential\" text=\"조치내용\"/><Cell col=\"6\" cssclass=\"CellEssential\" text=\"처리자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:ACT_SDATE\" validation=\"조치일자;NULL\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" displaytype=\"mask\" edittype=\"mask\" editfilter=\"number\" text=\"bind:ACT_STIME\" mask=\"##:##\" maskchar=\" \" editlimit=\"4\" maskeditformat=\"@@:@@\" maskeditlimitbymask=\"none\" editmaxlength=\"4\" maskeditautoselect=\"true\" maskedittype=\"string\" validation=\"조치시간;NULL|DATETIME:HHMI\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:ACT_COMMENT\" textAlign=\"left\" validation=\"조치내용;NULL\"/><Cell col=\"6\" displaytype=\"normal\" style=\"cursor:hand;\" text=\"bind:ACT_USER_NM\" expandshow=\"show\" expandsize=\"24\" validation=\"처리자;NULL\" validationStatus=\"false\"/></Band></Format></Formats>");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn02",null,"643","155","24","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("55");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContents.form.divGrdTopBtn02.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContents.form.divGrdTopBtn02.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divContents.form.divGrdTopBtn02.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContents.form.divGrdTopBtn02.addChild(obj.name, obj);

            obj = new Div("divRegUser","stcRegUser:5","59",null,"24","stcRegDate:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_url("fomm::FOMM0000_D02.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calRegDate","stcRegDate:5","59","130","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("작성일;NULL|DATETIME:YYYYMMDD");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_00","20","951",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("65");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcProcNumber","66.67%","54","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_text("장애ID");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtProcNumber","983","59",null,"24","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtImpact","stcRpprNo:5","125",null,"24","stcUpmu:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_validation("온라인 영향도;MAX_LEN_UTF8:100");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:2","125","170","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV2;NULL");
            obj.set_innerdataset("dsUpmu2");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboUpmu3","cboUpmu2:2","125","170","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV3;NULL");
            obj.set_innerdataset("dsUpmu3");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static13_00","20","153",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcMgrUser","33.33%","153","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("25");
            obj.set_text("책임자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcIcCreDateTime","20","153","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("22");
            obj.set_text("발생일시");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcIcmlvl","66.67%","153","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("27");
            obj.set_text("장애등급");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","20","186",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcProcUser","33.33%","186","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("33");
            obj.set_text("조치자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcCompleteDateTime","20","186","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("30");
            obj.set_text("조치일시");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcKnow","66.67%","186","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("35");
            obj.set_text("지식등록여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divMgrUser","stcMgrUser:5","158",null,"24","stcIcmlvl:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("26");
            obj.set_url("fomm::FOMM0000_D02.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divProcUser","stcProcUser:5","191",null,"24","stcKnow:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("34");
            obj.set_url("fomm::FOMM0000_D02.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboIcmlvl","stcIcmlvl:5","158",null,"24","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("28");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("장애등급;NULL");
            obj.set_innerdataset("dsIcmLv");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calIcCreDate","stcIcCreDateTime:5","158","110","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("23");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("발생일자;DATETIME:YYYYMMDD");
            obj.set_validationGroup("input01");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("mskIcCreTime","calIcCreDate:2","158","56","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("24");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validation("발생시간;DATETIME:HHMI");
            obj.set_validationGroup("input01");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calCompleteDate","stcCompleteDateTime:5","191","110","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("31");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("조치일자;DATETIME:YYYYMMDD");
            obj.set_validationGroup("input01");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("mskCompleteTime","calCompleteDate:2","191","56","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("32");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_validation("조치시간;DATETIME:HHMI");
            obj.set_validationGroup("input01");
            this.divContents.addChild(obj.name, obj);

            obj = new Grid("grdCi","165","253",null,"131","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("40");
            obj.set_binddataset("dsCi");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdSubList_onsummclick");
            obj.set_autoupdatetype("itemselect");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"200\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"구성범주\"/><Cell col=\"4\" text=\"구성번호\"/><Cell col=\"5\" text=\"구성명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:CI_TYPE_CD\" combodataset=\"dsCiTypeCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CI_ID\"/><Cell col=\"5\" text=\"bind:CI_NM\" textAlign=\"left\"/></Band></Format><Format id=\"multiSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"구성범주\"/><Cell col=\"4\" text=\"구성번호\"/><Cell col=\"5\" text=\"구성명\"/><Cell col=\"6\" text=\"호스트명\"/><Cell col=\"7\" text=\"운영환경\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:CI_TYPE_NM\" combodataset=\"dsCiTypeCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CI_ID\"/><Cell col=\"5\" text=\"bind:CI_NM\"/><Cell col=\"6\" text=\"bind:HOST_NM\"/><Cell col=\"7\" text=\"bind:OPENV_CATE_NM\"/></Band></Format></Formats>");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcCi","20","219","130","171",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("38");
            obj.set_text("구성항목(CI)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn01",null,"224","215","24","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("39");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","140","24","0",null,null,null,null,null,this.divContents.form.divGrdTopBtn01.form);
            obj.set_taborder("0");
            obj.set_text("구성항목(CI) 선택");
            obj.set_cssclass("btn_WF_add");
            this.divContents.form.divGrdTopBtn01.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"btnAdd:5","0",null,null,null,null,this.divContents.form.divGrdTopBtn01.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContents.form.divGrdTopBtn01.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","25","400","132","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("42");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_01","20","390",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("41");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_01_00","20","424",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("43");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcContentsBg00","149","500",null,"67","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBizImpact","20","500","130","67",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("48");
            obj.set_text("영향범위");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new TextArea("txaBizImpact","155","505",null,"57","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("49");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("영향범위;MAX_LEN_UTF8:4000");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcContentsBg00_00","149","566",null,"67","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcCauseAnal","20","566","130","67",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("51");
            obj.set_text("장애원인");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new TextArea("txaCauseAnal","155","571",null,"57","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("52");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("장애원인;MAX_LEN_UTF8:4000");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_01_01","20","633",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("53");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","25","643","132","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("54");
            obj.set_text("조치이력");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_01_00_00","20","667",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("56");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcW01","50%","0","5",null,null,"0",null,null,null,null,this.divContents.form);
            obj.set_taborder("68");
            obj.set_text("w5");
            obj.set_background("#e5dbfa");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divFiles","20","961",null,"208","stcW01:0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("66");
            obj.getSetter("__USE_MODE").set("1");
            obj.getSetter("_ENABLE_READONLY_ALL_SKIP").set("Y");
            obj.set_url("comm::comFile.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divAppv","stcW01:0","961",null,"208","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("67");
            obj.set_text("divAppv");
            obj.set_async("false");
            obj.set_border("0px solid blue");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcFailRecovery","20","818","130","67",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("60");
            obj.set_text("조치\r\n결과 요약");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcContentsBg01","149","818",null,"67","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new TextArea("txaFailRecovery","155","823",null,"57","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("61");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("조치 결과 요약;MAX_LEN_UTF8:4000");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcContentsBg00_01","149","884",null,"67","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcFutureActions","20","884","130","67",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("63");
            obj.set_text("향후\r\n장애 대책\r\n(사전예방)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new TextArea("txaFutureActions","155","889",null,"57","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("64");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("향후 장애 대책(사전예방);MAX_LEN_UTF8:4000");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_00_00","20","808",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("58");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("rdoKnow","stcKnow:5","191",null,"24","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("36");
            obj.set_innerdataset("dsKnow");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_columncount("2");
            obj.set_validationGroup("input01");
            obj.set_validation("지식등록여부;NULL");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboIngPhase",null,"92","109","24","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("70");
            obj.set_innerdataset("dsPhase");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("장애단계;NULL");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"110","32","btnClose:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divGrdTopBtn02.form
            obj = new Layout("default","",0,0,this.divContents.form.divGrdTopBtn02.form,function(p){});
            this.divContents.form.divGrdTopBtn02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divRegUser
            obj = new Layout("default","",0,0,this.divContents.form.divRegUser.form,function(p){});
            this.divContents.form.divRegUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divMgrUser
            obj = new Layout("default","",0,0,this.divContents.form.divMgrUser.form,function(p){});
            this.divContents.form.divMgrUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divProcUser
            obj = new Layout("default","",0,0,this.divContents.form.divProcUser.form,function(p){});
            this.divContents.form.divProcUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divGrdTopBtn01.form
            obj = new Layout("default","",0,0,this.divContents.form.divGrdTopBtn01.form,function(p){});
            this.divContents.form.divGrdTopBtn01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divFiles
            obj = new Layout("default","",0,0,this.divContents.form.divFiles.form,function(p){});
            this.divContents.form.divFiles.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divAppv.form
            obj = new Layout("default","",0,0,this.divContents.form.divAppv.form,function(p){});
            this.divContents.form.divAppv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1820,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContents.form.edtIcTitle","value","dsResult","IC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.txaIcBreakdown","value","dsResult","IC_BREAKDOWN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContents.form.cboIcmtype","value","dsResult","FAILE_CAUSE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.cboUpmu1","value","dsResult","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContents.form.calRegDate","value","dsResult","IC_REG_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContents.form.edtProcNumber","value","dsResult","PROC_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.edtImpact","value","dsResult","BIZ_IMPACT_ONLINE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.cboUpmu2","value","dsResult","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContents.form.cboUpmu3","value","dsResult","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.cboIcmlvl","value","dsResult","ICM_SEVERITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.calIcCreDate","value","dsResult","IC_CRE_SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContents.form.mskIcCreTime","value","dsResult","IC_CRE_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divContents.form.calCompleteDate","value","dsResult","PROC_COMPLETE_EDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divContents.form.mskCompleteTime","value","dsResult","PROC_COMPLETE_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.txaBizImpact","value","dsResult","BIZ_IMPACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divContents.form.txaCauseAnal","value","dsResult","CAUSE_ANALYSIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContents.form.txaFailRecovery","value","dsResult","FAIL_RECOVERY_ACTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContents.form.txaFutureActions","value","dsResult","FUTURE_ACTIONS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContents.form.rdoKnow","value","dsResult","KM_TRN_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divContents.form.cboIngPhase","value","dsResult","ING_PHASE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D02.xfdl");
            this._addPreloadList("fdl","comm::comFile.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SR3100_D01.xfdl","lib::lib_PjComm.xjs");
        this.registerScript("SR3100_D01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR3100_D01
        * 화면(명)	︰ 장애등록
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.11
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.11	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_PjComm.xjs"); /*include "lib::lib_PjComm.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.saveFlg = "N";				//화면 저장 여부
        this.isCloseBtnClick = false;	//닫기 버튼을 눌러 닫는 경우 true
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        	//trace("[PA0310_P01] this.form_onload() this.getOwnerFrame()._formObj : " + this.getOwnerFrame()._formObj);
        }

        this.fnInit = function()
        {
        	trace("this.fnInit() this.getOwnerFrame().info.menuId ::: " + this.getOwnerFrame().info.menuId);
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	//trace("[PA0310_P01] this.fnSearch()");
        	var sTranId = "select01";
            var sService = "PA0310P/select01";																								// 서비스명
            var sInDs = "dsCond=dsCond";																									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsResult=dsResult dsSub=dsSub dsCi=dsCi";		// 서버에서 수신할 데이타셋
            var sArg = "";																													// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	//trace("[PA0310_P01] this.fnSave()");
        	this.dsWfApprovalMt.loadXML(this.divContents.form.divAppv.form.dsWfApprovalMt.saveXML());

        	this.dsWfApprovalMt.set_updatecontrol(false);
        	for(var i=0; i<this.dsWfApprovalMt.rowcount; i++)
        	{
        		var rowFlag = this.dsWfApprovalMt.getColumn(i, "ROWFLAG");
        		if(rowFlag == "I")
        		{
        			this.dsWfApprovalMt.setRowType(i, Dataset.ROWTYPE_INSERT);
        			this.dsWfApprovalMt.setColumn(i, "WF_PROC_CD", "WF_PROC_9999");
        		}
        	}
        	this.dsWfApprovalMt.set_updatecontrol(true);

        	trace("this.fnSave() this.getOwnerFrame().info.menuId ::: " + this.getOwnerFrame().info.menuId);

        	var sTranId = "save01";
            var sService = "PA0310P/save01";
            var sInDs = "dsCond=dsCond dsResult=dsResult:U dsSub=dsSub:U dsCi=dsCi:U dsWfApprovalMt=dsWfApprovalMt:U";
        	var sOutDs = "dsResult=dsResult dsSub=dsSub dsCi=dsCi dsCond=dsCond";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	//trace("[PA0310_P01] this.fnUploadCallback() sSvcId : " + sSvcId + " nErrorCode : " + nErrorCode + " sErrorMsg : " + sErrorMsg);
        	// TO DO
        	// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this, {id:"ERROR", msg:sSvcId + "\n" + Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	switch(sSvcId)
        	{
        		case "fileSvc" :
        			this.fnSave();
        			break;
        	}
        };

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
        			trace(">>>> " + this.getOwnerFrame().pProcNumber);
         			this.divContents.form.divAppv.form.dsCond.setColumn(0, "REQ_ID", this.getOwnerFrame().pProcNumber);
         			this.divContents.form.divAppv.form.dsCond.setColumn(0, "WF_PROC_CD", "WF_PROC_9999");
         			this.divContents.form.divAppv.form.fnSearchD();

        			//trace(this.dsResult.saveXML());
        			var fRow = this.dsUpmu1.findRow("CMM_CD", this.dsResult.getColumn(0, "UPMU_ID1"));

        			if(fRow == -1)	this.dsResult.setColumn(0, "UPMU_ID1", undefined);

        			var evt = nexacro.ItemChangeEventInfo;
        			evt.postvalue = this.dsResult.getColumn(0, "UPMU_ID1");
        			this.cboOnItemChanged(this.divContents.form.cboUpmu1, evt);

        			evt.postvalue = this.dsResult.getColumn(0, "UPMU_ID2");
        			this.cboOnItemChanged(this.divContents.form.cboUpmu2, evt);

        			var strRegUserId    = this.dsResult.getColumn(0, "REG_USER_ID");
        			var strRegUserNm    = this.dsResult.getColumn(0, "REG_USER_NM");
        			var strRegDept      = this.dsResult.getColumn(0, "REG_USER_DEPT");
        			this.divContents.form.divRegUser.form.setValue(strRegUserId, strRegUserNm, strRegDept);

        			var strMgrUserId    = this.dsResult.getColumn(0, "MGR_USER_ID");
        			var strMgrUserNm    = this.dsResult.getColumn(0, "MGR_USER_NM");
        			var strMgrDept      = this.dsResult.getColumn(0, "MGR_USER_DEPT");
        			this.divContents.form.divMgrUser.form.setValue(strMgrUserId, strMgrUserNm, strMgrDept);

        			var strProcUserId    = this.dsResult.getColumn(0, "PROC_USER_ID");
        			var strProcUserNm    = this.dsResult.getColumn(0, "PROC_USER_NM");
        			var strProcDept      = this.dsResult.getColumn(0, "PROC_USER_DEPT");
        			this.divContents.form.divProcUser.form.setValue(strProcUserId, strProcUserNm, strProcDept);

        			break;

        		case "save01" :
        			this.saveFlg = "Y";
        			Ex.core.toast(this, "10004", null, {toastType:'S'});

        			if( !Ex.isEmpty(this.dsCond.getColumn(0, "PROC_NUMBER")) )
        			{
        				this.getOwnerFrame().pProcNumber	= this.dsCond.getColumn(0, "PROC_NUMBER");
        				this.getOwnerFrame().pMode = "SEARCH";
        				this.divContents.form.divFiles.form.fnReplaceTempkeyAndSearch(this.dsCond.getColumn(0, "PROC_NUMBER"));
        			}

        			var reqInfo = new Object();
        			reqInfo["REQ_ID"]	= this.getOwnerFrame().pProcNumber;
        			this.divContents.form.divAppv.form.reqInfo = reqInfo;
        			this.divContents.form.divAppv.form.dsCond.setColumn(0, "REQ_ID", this.getOwnerFrame().pProcNumber);
        			this.divContents.form.divAppv.form.dsCond.setColumn(0, "WF_PROC_CD", "WF_PROC_9999");
        			this.divContents.form.divAppv.form.fnSearch();

        			var strRegUserId    = this.dsResult.getColumn(0, "REG_USER_ID");
        			var strRegUserNm    = this.dsResult.getColumn(0, "REG_USER_NM");
        			var strRegDept      = this.dsResult.getColumn(0, "REG_USER_DEPT");
        			this.divContents.form.divRegUser.form.setValue(strRegUserId, strRegUserNm, strRegDept);

        			var strMgrUserId    = this.dsResult.getColumn(0, "MGR_USER_ID");
        			var strMgrUserNm    = this.dsResult.getColumn(0, "MGR_USER_NM");
        			var strMgrDept      = this.dsResult.getColumn(0, "MGR_USER_DEPT");
        			this.divContents.form.divMgrUser.form.setValue(strMgrUserId, strMgrUserNm, strMgrDept);

        			var strProcUserId    = this.dsResult.getColumn(0, "PROC_USER_ID");
        			var strProcUserNm    = this.dsResult.getColumn(0, "PROC_USER_NM");
        			var strProcDept      = this.dsResult.getColumn(0, "PROC_USER_DEPT");
        			this.divContents.form.divProcUser.form.setValue(strProcUserId, strProcUserNm, strProcDept);
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "SV0110_P01" :	//구성항목(CI)
        			//trace("varValue:\n" + varValue);
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				for(var i=0; i<this.dsPopRtn.rowcount; i++)
        				{
        					var aRow = this.dsCi.setAddRow();
        					this.dsCi.setColumn(aRow, "PROC_NUMBER", this.dsCond.getColumn(0, "PROC_NUMBER"));
        					this.dsCi.setColumn(aRow, "CI_TYPE_CD", this.dsPopRtn.getColumn(i, "CI_TYPE_CD"));
        					this.dsCi.setColumn(aRow, "CI_ID", this.dsPopRtn.getColumn(i, "CI_ID"));
        					this.dsCi.setColumn(aRow, "CI_NM", this.dsPopRtn.getColumn(i, "CI_NM"));
        				}
        			}
        			break;

        		case "commSearchUserPopup" :
        			this.dsPopRtn.loadXML(varValue);
        			this.dsSub.setColumn(this.dsSub.rowposition, "ACT_USER_ID", this.dsPopRtn.getColumn(0, 'USER_ID'));
        			this.dsSub.setColumn(this.dsSub.rowposition, "ACT_USER_NM", this.dsPopRtn.getColumn(0, 'USER_NM') + "(" + this.dsPopRtn.getColumn(0, 'USER_ID') + ")");
        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			//this.fnSave();
        			this.divContents.form.divFiles.form.fnUploadFiles(true);
        			break;

        		case "alertChkDateTimeI" :
        			this.divContents.form.calIcCreDate.setFocus();
        			break;

        		case "alertEssRegUserDtI" :
        			this.divContents.form.divRegUser.form.edtUserNm.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divContents.form.edtProcNumber.set_displaynulltext(Ex.core.word("자동생성"));
        	this.dsCond.setColumn(0, "PROC_NUMBER", this.getOwnerFrame().pProcNumber);

        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.divContents.form.grdCi.displayRowType();
        	this.divContents.form.grdSub.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divContents.form.divGrdTopBtn01.form.btnAdd];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);

        	arrBtn = [this.divContents.form.divGrdTopBtn01.form.btnDelete];		// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        	arrBtn = [this.divContents.form.divGrdTopBtn02.form.btnAdd];		// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);

        	arrBtn = [this.divContents.form.divGrdTopBtn02.form.btnDelete];		// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        	arrBtn = [this.divBtnBottom.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divBtnBottom, 'right', true);

        	// 첨부파일 setting
        	var oParam = {
        		 sSvcId		: 'fileSvc'										// divFile callback 후처리용 서비스 ID
        		,limitMinCnt: 0												// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3												// 파일 최대 갯수; default 5
        		,limitSize	: 100											// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'wf'											// 폴더명(업무명)
        		,tableName	: 'WF_ICM'										// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: this.dsCond.getColumn(0, "PROC_NUMBER")||''	// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''											// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''											// 테이블 PK3 (복합 키인 경우 사용)
        		,fileDownYn	: ''											// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: ''											// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''											// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};
        	this.divContents.form.divFiles.form.setConfig(this, oParam);

        	var reqInfo = new Object();
        		reqInfo["REQ_ID"]	= this.getOwnerFrame().pProcNumber;
        	this.divContents.form.divAppv.form.reqInfo = reqInfo;
        	this.divContents.form.divAppv.set_url("sr::SR0010_D01.xfdl");
        	this.divContents.form.divAppv.set_visible(true);

        	if(this.getOwnerFrame().pMode == "NEW")
        	{
        		var nRow = this.dsResult.setInsertRow();
        		this.dsResult.setColumn(0, "IC_REG_STIME", Ex.util.today());
        		this.dsResult.setColumn(0, "IC_CRE_SDATE", Ex.util.today());
        		this.dsResult.setColumn(0, "PROC_COMPLETE_EDATE", Ex.util.today());
        		this.dsResult.setColumn(0, "IC_CRE_STIME", Ex.util.getMaskFormatString(Ex.util.strToDate(Ex.util.todayTime()), "HHss"));
        		this.dsResult.setColumn(0, "PROC_COMPLETE_ETIME", Ex.util.getMaskFormatString(Ex.util.strToDate(Ex.util.todayTime()), "HHss"));

        		this.dsResult.setColumn(0, "REG_USER_ID", Ex.util.getSession('gvUserId'));
        		this.dsResult.setColumn(0, "REG_USER_NM", Ex.util.getSession('gvUserNm'));
        		this.dsResult.setColumn(0, "REG_DEPT_NM", Ex.util.getSession('gvDeptNm'));

        		var strRegUserId    = this.dsResult.getColumn(0, "REG_USER_ID");
        		var strRegUserNm    = this.dsResult.getColumn(0, "REG_USER_NM");
        		var strRegDept      = this.dsResult.getColumn(0, "REG_USER_DEPT");
        		this.divContents.form.divRegUser.form.setValue(strRegUserId, strRegUserNm, strRegDept);

        		var evt = nexacro.ItemChangeEventInfo;
        		evt.postvalue = undefined;
        		this.cboOnItemChanged(this.divContents.form.cboUpmu1, evt);
        		this.cboOnItemChanged(this.divContents.form.cboUpmu2, evt);

        		this.divContents.form.calRegDate.setFocus();
        	}
        	else if(this.getOwnerFrame().pMode == "SEARCH")
        	{
        		this.fnSearch();
        	}
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['FAIL_DIV_CD',		'UPMU_CLSS_CD',	'FAIL_GRD_CD',	'YN_CD',		'CI_TYPE_CD',		'FAIL_STS_CD'		]	// 조회할 상위코드
        		,codeDiv	: ['SVC_MNG_CD',		'SVC_MNG_CD',	'SVC_MNG_CD',	'CMM_CD',		'SVC_MNG_CD',		'SVC_MNG_CD'		]	// 조회할 코드의 업무구분
        		,optStr		: ['SEL',				'SEL',			'SEL',			'',				'',					'SEL'				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y',					'Y',			'Y',			'Y',			'Y',				'Y'					]	// 사용여부
        		,filter		: ['',					'',				'',				'',				'',					''					]	// filterStr
        		,objDs		: [this.dsIcmType,		this.dsUpmu1,	this.dsIcmLv,	this.dsKnow,	this.dsCiTypeCd,	this.dsPhase		]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);



        	this.dsUpmu2.assign(this.dsUpmu1);
        	this.dsUpmu3.assign(this.dsUpmu1);
        	this.dsUpmu2.clearData();
        	this.dsUpmu3.clearData();

        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsResult) && !Ex.util.isUpdated(this.dsCi) &&
        		!Ex.util.isUpdated(this.dsSub) && !Ex.util.isUpdated(this.divContents.form.divAppv.form.dsWfApprovalMt) &&
        		!this.divContents.form.divFiles.form.isUpdateForm())
        	{
        		return false;
        	}

        	//기간체크
        	/*
        	if( !Ex.isEmpty(this.dsResult.getColumn(0, "IC_CRE_SDATE")) && !Ex.isEmpty(this.dsResult.getColumn(0, "PROC_COMPLETE_EDATE")) )
        	//if( !Ex.isEmpty(this.dsResult.getColumn(0, "IC_CRE_STIME")) && !Ex.isEmpty(this.dsResult.getColumn(0, "PROC_COMPLETE_ETIME")) )
        	{
        		if(this.dsResult.getColumn(0, "IC_CRE_SDATE") > this.dsResult.getColumn(0, "PROC_COMPLETE_EDATE"))
        		{
        			var oParam = {id : "alertChkDateTimeI", msg : "조치일시는(은) 발생일시보다 커야 합니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}
        	*/

        	if( !Ex.util.checkValidate(this.divContents, "input01") ) return false;

        	var msgNo;

        	//등록자 입력 체크
        	var rtnVal = this.divContents.form.divRegUser.form.fnCheckValidate();

        	if(rtnVal == "NO_INPUT")	msgNo = 11001;	//"은(는) 필수 입력 항목입니다.";
        	else if(rtnVal == "NO_ID")	msgNo = 20001;	//"은(는) 입력 후 검색까지 완료해야 합니다.";

        	trace("divRegUser rtnVal : " + rtnVal);

        	if(rtnVal == "NO_INPUT" || rtnVal == "NO_ID")
        	{
        		var oParam = {id : "alertRegUserI", msg : msgNo, arrparam : [Ex.core.word(this.divContents.form.stcRegUser.text)], msgtype : "I"};
        		Ex.core.alert(this, oParam);
        		return false;
        	}

        	if( !this.divContents.form.grdSub.checkValidate(true) ) return false;

        	return true;
        }

        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	trace("[PA0310_P01] this.userDeptChangedCallBack() compId : " + compId);
        	if(compId == "divRegUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsResult.setColumn(0, "REG_USER_ID", dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsResult.setColumn(0, "REG_USER_NM", dsRtnObj.getColumn(0, "USER_NM"));
        			this.dsResult.setColumn(0, "REG_USER_DEPT",	dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsResult.setColumn(0, "REG_USER_ID", "");
        			this.dsResult.setColumn(0, "REG_USER_NM", "");
        			this.dsResult.setColumn(0, "REG_USER_DEPT", "");
        		}
        	}
        	else if(compId == "divMgrUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsResult.setColumn(0, "MGR_USER_ID", dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsResult.setColumn(0, "MGR_USER_NM", dsRtnObj.getColumn(0, "USER_NM"));
        			this.dsResult.setColumn(0, "MGR_USER_DEPT", dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsResult.setColumn(0, "MGR_USER_ID", "");
        			this.dsResult.setColumn(0, "MGR_USER_NM", "");
        			this.dsResult.setColumn(0, "MGR_USER_DEPT", "");
        		}
        	}
        	else if(compId == "divProcUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsResult.setColumn(0, "PROC_USER_ID", dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsResult.setColumn(0, "PROC_USER_NM", dsRtnObj.getColumn(0, "USER_NM"));
        			this.dsResult.setColumn(0, "PROC_USER_DEPT", dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsResult.setColumn(0, "PROC_USER_ID", "");
        			this.dsResult.setColumn(0, "PROC_USER_NM", "");
        			this.dsResult.setColumn(0, "PROC_USER_DEPT", "");
        		}
        	}
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAdd" : 	// 추가
        			if(obj.parent.parent.id == "divGrdTopBtn01")		//CI
        			{
        				Ex.core.popup(
        					this,					// <--- 팝업 실행 스코프
        					"SV0110_P01",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        					"sv::SV0110_P01.xfdl",	// <--- 팝업창 오픈 Url
        					{
        						title : "구성정보(CI) 선택",
        						pSelType		: "M",
        						pCheckDs		: this.dsScrMap,
        						pCheckCol		: "CI_ID"
        					},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        				);
        			}
        			else if(obj.parent.parent.id == "divGrdTopBtn02")	//조치 이력
        			{
        				this.dsSub.setInsertRow();
        				this.dsSub.setColumn(0, "PROC_NUMBER",   this.getOwnerFrame().pProcNumber);
        				this.dsSub.setColumn(0, "ACT_SDATE", Ex.util.today());
        				this.dsSub.setColumn(0, "ACT_STIME", Ex.util.getMaskFormatString(Ex.util.strToDate(Ex.util.todayTime()), "HHss"));
        				this.divContents.form.grdSub.setCellPos(5, this.dsSub.rowposition);		// 그리드 셀 포커스 이동
        				this.divContents.form.grdSub.showEditor(true);							// 그리드 편집모드로 변경
        			}
        			break;

        		case "btnDelete" : 	// 삭제
        			if(obj.parent.parent.id == "divGrdTopBtn01")		//CI
        			{
        				this.fnDelete(this.dsCi);
        			}
        			else if(obj.parent.parent.id == "divGrdTopBtn02")	//조치 이력
        			{
        				this.fnDelete(this.dsSub);
        			}
        			break;

        		case "btnSave" : 	// 저장
        			// validation
        			if( this.fnCheckValidate() )
        			{
        				var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnClose" : 	// 닫기
        			this.isCloseBtnClick = true;
        			Ex.core.pclose(this, this.saveFlg);
        			break;
        	}
        }

        this.cboOnItemChanged = function(obj, e)
        {
        	trace("this.cboOnItemChanged() obj.id = " + obj.id);
        	if(obj.id == "cboUpmu1" || obj.id == "cboUpmu2")
        	{
        		var subObj;
        		var dsObj;

        		var upmuId1 = this.dsResult.getColumn(0, "UPMU_ID1");
        		var upmuId2 = this.dsResult.getColumn(0, "UPMU_ID2");
        		var upmuId3 = this.dsResult.getColumn(0, "UPMU_ID3");

        		trace("this.cboOnItemChanged() bf upmuId1 ::: " + upmuId1);
        		trace("this.cboOnItemChanged() bf upmuId2 ::: " + upmuId2);
        		trace("this.cboOnItemChanged() bf upmuId3 ::: " + upmuId3);

        		if(obj.id == "cboUpmu1")
        		{
        			subObj		= this.divContents.form.cboUpmu2;
        			dsObj = this.dsUpmu2;
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			subObj		= this.divContents.form.cboUpmu3;
        			dsObj = this.dsUpmu3;
        		}

        		trace("this.cboOnItemChanged() e.postvalue : " + e.postvalue + " dsObj.id : " + dsObj.id);

        		if( !Ex.isEmpty(e.postvalue) )
        		{
        			trace("zzzzzzzzzzzzzzzzzzzzzzz");

        			var oParam = {
        				 upCmmCd	: [e.postvalue		]	// 조회할 상위코드
        				,codeDiv	: ['SVC_MNG_CD'		]	// 조회할 코드의 업무구분
        				,optStr		: ['SEL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn		: ['Y'				]	// 사용여부
        				,filter		: [''				]	// filterStr
        				,objDs		: [dsObj			]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        			//subObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        			if(obj.id == "cboUpmu1")
        			{
        				this.divContents.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        				this.dsResult.setColumn(0, "UPMU_ID2", undefined);
        			}
        			else if(obj.id == "cboUpmu2")
        			{
        				this.divContents.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        				this.dsResult.setColumn(0, "UPMU_ID3", undefined);
        			}
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			dsObj.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 선택 -"));

        			if(obj.id == "cboUpmu1")
        			{
        				this.dsResult.setColumn(0, "UPMU_ID2", undefined);
        				this.divContents.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        			}
        			else if(obj.id == "cboUpmu2")
        			{
        				this.dsResult.setColumn(0, "UPMU_ID3", undefined);
        				this.divContents.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        			}

        			if(obj.id == "cboUpmu1")
        			{
        				trace("yyyyyyyyyyyyyyyyyyyyyyyyy");
        				this.dsUpmu3.clearData();
        				aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 선택 -"));
        				this.dsResult.setColumn(0, "UPMU_ID3", undefined);
        				this.divContents.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        			}
        		}

        		if(obj.id == "cboUpmu1")
        		{
        			var fRow = dsObj.findRow("CMM_CD", upmuId2);
        			//trace("cboUpmu1 this.cboOnItemChanged() upmuId2 ::: " + upmuId2 + " this.dsUpmu2.rowcount : " + this.dsUpmu2.rowcount);

        			if(fRow == -1)
        			{
        				this.divContents.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        				this.dsResult.setColumn(0, "UPMU_ID2", undefined);

        				this.dsUpmu3.clearData();
        				var aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 선택 -"));
        				this.divContents.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        				this.dsResult.setColumn(0, "UPMU_ID3", undefined);
        			}
        			else
        			{
        				this.divContents.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        				this.dsResult.setColumn(0, "UPMU_ID2", undefined);

        				this.dsResult.setColumn(0, "UPMU_ID2", upmuId2);
        				//trace("AA this.divContents.form.cboUpmu2.index : " + this.divContents.form.cboUpmu2.index + " fRow : " + fRow + " upmuId2 : " + upmuId2);
        			}
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			var fRow = dsObj.findRow("CMM_CD", upmuId3);
        			//trace("cboUpmu1 this.cboOnItemChanged() upmuId2 ::: " + upmuId2 + " this.dsUpmu3.rowcount : " + this.dsUpmu3.rowcount);

        			if(fRow == -1)
        			{
        				this.dsResult.setColumn(0, "UPMU_ID3", undefined);
        			}
        			else
        			{
        				this.dsResult.setColumn(0, "UPMU_ID3", undefined);
        				this.divContents.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));

        				this.dsResult.setColumn(0, "UPMU_ID3", upmuId3);
        				//trace("BB this.divContents.form.cboUpmu3.index : " + this.divContents.form.cboUpmu3.index + " fRow : " + fRow + " upmuId3 : " + upmuId3);
        			}
        		}
        	}
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.onBeforeClose = function(obj,e)
        {
        	if(!this.isCloseBtnClick) if(this.saveFlg == "Y") this.getOwnerFrame()._formObj.fnSearch();
        };

        this.onExpandUp = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("Body", "ACT_USER_NM"))
        	{
        		Ex.core.popup(
        			this,											// <--- 팝업 실행 스코프
        			"commSearchUserPopup",							// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"fomm::FOMM0000_P01.xfdl",						// <--- 팝업창 오픈 Url
        			{
        				title : "자산 담당자 선택",
        				pSelType: "S",
        				//type : "name",
        				data : this.dsSub.getColumn(obj.getDatasetRow(e.row), "ACT_USER_NM")
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"width=900,height=500"							// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };
        this.divContents_cboUpmu1_onlbuttondown = function(obj,e)
        {

        };

        this.divContents_cboUpmu1_onkillfocus = function(obj,e)
        {

        };

        this.divContents_cboUpmu2_onlbuttondown = function(obj,e)
        {

        };

        this.divContents_cboUpmu2_onkillfocus = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContents.form.stcRpprNo.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContents.form.cboUpmu1.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divContents.form.cboUpmu1.addEventHandler("onlbuttondown",this.divContents_cboUpmu1_onlbuttondown,this);
            this.divContents.form.cboUpmu1.addEventHandler("onkillfocus",this.divContents_cboUpmu1_onkillfocus,this);
            this.divContents.form.grdSub.addEventHandler("onexpandup",this.onExpandUp,this);
            this.divContents.form.divGrdTopBtn02.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.divGrdTopBtn02.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.cboUpmu2.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divContents.form.cboUpmu2.addEventHandler("onlbuttondown",this.divContents_cboUpmu2_onlbuttondown,this);
            this.divContents.form.cboUpmu2.addEventHandler("onkillfocus",this.divContents_cboUpmu2_onkillfocus,this);
            this.divContents.form.stcIcCreDateTime.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContents.form.stcCompleteDateTime.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContents.form.calIcCreDate.addEventHandler("onchanged",this.cal_prjStime_onchanged,this);
            this.divContents.form.calCompleteDate.addEventHandler("onchanged",this.cal_prjStime_onchanged,this);
            this.divContents.form.grdCi.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContents.form.stcCi.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContents.form.divGrdTopBtn01.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.divGrdTopBtn01.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsResult.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsCi.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSub.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR3100_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
