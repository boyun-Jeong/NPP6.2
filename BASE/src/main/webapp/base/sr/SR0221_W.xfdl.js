(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0221_W");
            this.set_titletext("IT요청서목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"10\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC_ID\" type=\"string\" size=\"16\"/><Column id=\"FUNC_NO\" type=\"string\" size=\"100\"/><Column id=\"FUNC_NAME\" type=\"string\" size=\"100\"/><Column id=\"FUNC_TYPE_CD\" type=\"string\" size=\"30\"/><Column id=\"PJT_ID\" type=\"string\" size=\"16\"/><Column id=\"FUNC_LV1\" type=\"string\" size=\"100\"/><Column id=\"FUNC_LV2\" type=\"string\" size=\"100\"/><Column id=\"FUNC_DESC\" type=\"string\" size=\"4000\"/><Column id=\"REF_ENTITY\" type=\"string\" size=\"4000\"/><Column id=\"REG_STIME\" type=\"string\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"REG_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"REG_USER_DEPT\" type=\"string\" size=\"100\"/><Column id=\"LMOD_SDATE\" type=\"string\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"LMOD_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"LMOD_USER_DEPT\" type=\"string\" size=\"100\"/><Column id=\"PJT_NAME\" type=\"string\" size=\"200\"/><Column id=\"P_PJT_ID\" type=\"string\" size=\"16\"/><Column id=\"P_PJT_NAME\" type=\"string\" size=\"200\"/><Column id=\"REQ_NO_INFO\" type=\"string\" size=\"4000\"/><Column id=\"REQ_NAME_INFO\" type=\"string\" size=\"4000\"/><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"BIZ_NAME\" type=\"string\" size=\"100\"/><Column id=\"BIZ_ID\" type=\"string\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPbmCateCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPbmCateCdGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmuGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPhase", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PBM_CATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"R_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"R_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"P_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"P_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"A_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"A_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"SCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SENIOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEADLINE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MY_TEAM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WF_ID\">WF20231204001</Col><Col id=\"DATE_TYPE\">R</Col><Col id=\"SCH_DIV\">01</Col><Col id=\"MY_TEAM\">N</Col><Col id=\"END_DEL_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPhaseGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqTmplatMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrType1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrType2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeniorLsit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDevprList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrType2ALL", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2All", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"27","75","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"27","90","24","100",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcUpmu","20.00","72","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcDate","20","13","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDateGbn","stcDate:0.00","13","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsDate");
            obj.set_index("-1");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calStime","cboDateGbn:2","13","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.getSetter("validate").set("title:시작일자,required:false,date");
            obj.set_cssclass("cal_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","calStime:5","13","10","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calEtime","Static14:5","13","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.getSetter("validate").set("title:종료일자,required:false,date");
            obj.set_cssclass("cal_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","stcUpmu:0","72","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsUpmu1");
            obj.set_displayrowcount("14");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:2","72","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsUpmu2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu3","cboUpmu2:2","72","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsUpmu3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcPbmCateCd","20","42","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPbmCateCd","stcPbmCateCd:0","42","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSrType1");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06_00","cboUpmu3:0","0","30",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcTitle","Static06_00:0","72","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:0","72",null,"24","903",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_normal");
            obj.set_displaynulltext("\'&&\', \'||\' 사용하여 AND, OR 검색 가능");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSrDtl","cboPbmCateCd:2","42","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSrType2");
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("- 전체 -");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm","Static06_00:0","42","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("요청자명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm","stcReqUserNm:0","42",null,"24","903",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcReqId","Static06_00:0","13","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("요청ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:0","13",null,"24","903",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space,dot,comma,sign,symbol");
            obj.set_inputmode("upper");
            obj.set_inputtype("alpha,number");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","edtReqUserNm:0","0","30",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm00","Static06_00_00:0","42","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm00","stcReqUserNm00:0","42",null,"24","533",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcPhase00","Static06_00_00:0","72","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("조회범주");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPhase00","stcPhase00:0","72",null,"24","533",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboPhase00_innerdataset = new nexacro.NormalDataset("divSearch_form_cboPhase00_innerdataset", obj);
            divSearch_form_cboPhase00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">DEPT</Col><Col id=\"datacolumn\">부서</Col></Row><Row><Col id=\"codecolumn\">PERSON</Col><Col id=\"datacolumn\">개인</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboPhase00_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("전체");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm00_00","edtReqUserNm00:30","42","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("사전협의자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm00_00","stcReqUserNm00_00:0","42",null,"24","218",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcPhase","Static06_00_00:0","13","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("단계");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPhase","stcPhase:0","13",null,"24","533",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("14");
            var divSearch_form_cboPhase_innerdataset = new nexacro.NormalDataset("divSearch_form_cboPhase_innerdataset", obj);
            divSearch_form_cboPhase_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">QA승인</Col><Col id=\"datacolumn\">QA승인</Col></Row><Row><Col id=\"codecolumn\">등록</Col><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"codecolumn\">만족도조사</Col><Col id=\"datacolumn\">만족도조사</Col></Row><Row><Col id=\"codecolumn\">변경처리중</Col><Col id=\"datacolumn\">변경처리중</Col></Row><Row><Col id=\"codecolumn\">사전검토</Col><Col id=\"datacolumn\">사전검토</Col></Row><Row><Col id=\"codecolumn\">완료</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">요청검토</Col><Col id=\"datacolumn\">요청검토</Col></Row><Row><Col id=\"codecolumn\">요청결재</Col><Col id=\"datacolumn\">요청결재</Col></Row><Row><Col id=\"codecolumn\">요청접수</Col><Col id=\"datacolumn\">요청접수</Col></Row><Row><Col id=\"codecolumn\">요청처리</Col><Col id=\"datacolumn\">요청처리</Col></Row><Row><Col id=\"codecolumn\">카드반납</Col><Col id=\"datacolumn\">카드반납</Col></Row><Row><Col id=\"codecolumn\">현장대리인승인</Col><Col id=\"datacolumn\">현장대리인승인</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboPhase_innerdataset);
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcReqUsertNm00","cboPhase00:30.00","12","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("소속팀");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkTeam","stcReqUsertNm00:0.00","12","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("true");
            obj.set_value("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcEndCloseYN","1335.00","71","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("강제종료");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("endCloseYN","stcEndCloseYN:2.00","71","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static25","0","111",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","Static25:0","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("요청서 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","stcTreeTitle:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcListCnt","stcTreeTitle:5","Static25:0","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_countDataset("dsResult");
            obj.set_cssclass("sta_WF_GridCount");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"Static25:0","425",null,"0","436",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnPDF",null,"0","60","24","66",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("PDF");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stc00","stcListCnt:11","Static25:0","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("●");
            obj.set_textAlign("center");
            obj.set_color("#0000ff");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeadline","stcListCnt:35","Static25:0","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("납기임박");
            obj.set_cssclass("btn_WF_Btn03");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","btnDeadline:20","Static25:0","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("●");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelay","stc00_00:0","Static25:0","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("납기지연");
            obj.set_cssclass("btn_WF_Btn03");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","0","Static00_00:0",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsResult");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"요청ID\"/><Cell col=\"1\" text=\"요청서명\"/><Cell col=\"2\" text=\"단계\"/><Cell col=\"3\" text=\"요청분류(대)\"/><Cell col=\"4\" text=\"요청분류(중)\"/><Cell col=\"5\" text=\"업무분류\"/><Cell col=\"6\" text=\"제목\"/><Cell col=\"7\" text=\"요청자명\"/><Cell col=\"8\" text=\"요청일자\"/><Cell col=\"9\" text=\"희망완료일\"/><Cell col=\"10\" text=\"합의완료일\"/><Cell col=\"11\" text=\"처리완료일\"/><Cell col=\"12\" text=\"담당자명\"/><Cell col=\"13\" text=\"사전협의자\"/><Cell col=\"14\" text=\"회의록\"/></Band><Band id=\"body\"><Cell text=\"bind:REQ_ID\" tooltiptext=\"bind:REQ_ID\" cssclass=\"expr:CHK == -1 ? &quot;grdBCell_WF_boldP_danger&quot; : CHK == 0 ? &quot;grdBCell_WF_boldP_info&quot; : &quot;grdBCell_WF_boldP&quot;\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:REQ_TMPLAT_NM\" combodataset=\"dsSrType1\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:WF_PROC_NM\"/><Cell col=\"3\" text=\"bind:SR_TYPE1\" displaytype=\"combotext\" combodataset=\"dsSrType1\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:SR_TYPE2\" displaytype=\"combotext\" combodataset=\"dsSrType2ALL\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:UPMU_ID2\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsUpmu2All\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"6\" style=\"align:left middle;\" text=\"bind:TITLE\" textAlign=\"left\" cssclass=\"expr:CHK == -1 ? &quot;grdBCell_WF_danger&quot; : CHK == 0 ? &quot;grdBCell_WF_info&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:REQ_USER_NM\" cursor=\"pointer\" tooltiptext=\"클릭시 요청자 상세 조회 팝업을 볼 수 있습니다.\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:REQ_DATE\" mask=\"@@@@-@@-@@ @@:@@\" maskchar=\" \" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"9\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" text=\"bind:REQ_WISH_DT\"/><Cell col=\"10\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" text=\"bind:AGREE_COMP_DT\"/><Cell col=\"11\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" text=\"bind:PROC_COMP_DATE\"/><Cell col=\"12\" text=\"bind:WORK_USER_NM\" cursor=\"pointer\" tooltiptext=\"클릭시 담당자 상세 조회 팝업을 볼 수 있습니다.\"/><Cell col=\"13\" text=\"bind:PRE_CONF_USER_NM\" cursor=\"pointer\" tooltiptext=\"클릭시 사전협의자 상세 조회 팝업을 볼 수 있습니다.\"/><Cell col=\"14\" text=\"bind:MEET_CNT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","divSearch.form.rdoEM","value","dsCond","REQ_EM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.stcUpmu","value","dsCond","SCOPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calStime","value","dsCond","CLOS_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calEtime","value","dsCond","CLOS_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboDateGbn","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboPhase","value","dsCond","MAP_WF_PROC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboPbmCateCd","value","dsCond","SR_TYPE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSrDtl","value","dsCond","SR_TYPE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtReqUserNm","value","dsCond","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.edtReqUserNm00","value","dsCond","PROC_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboUpmu1","value","dsCond","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboUpmu2","value","dsCond","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboUpmu3","value","dsCond","UPMU_ID3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.edtTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.cboPhase00","value","dsCond","SCOPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.edtReqUserNm00_00","value","dsCond","PRE_CONF_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.stcReqUsertNm00","value","dsCond","MYREQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.chkTeam","value","dsCond","MY_TEAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.stcEndCloseYN","value","dsCond","END_DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.endCloseYN","value","dsCond","END_DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0221_W.xfdl","lib::lib_PjComm.xjs");
        this.addIncludeScript("SR0221_W.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0221_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0221_W
        * 화면(명)		︰ IT요청서 조회
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		    작성자		이력
        *------------------------------------------------------------------
        * 2024.03.19	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_PjComm.xjs"); /*include "lib::lib_PjComm.xjs"*/;
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.dsWfProc;
        var SrBtnCheck = false;
        this.schDiv = "01";
        this.delayYn = "";
        this.deadlineYn = "";
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        	this.formObj = obj;
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
            this.dsCond.clearData();
        	var sRow = this.dsCond.addRow();

        	this.dsCond.setColumn(sRow, "SCH_DIV", this.schDiv);
        	this.dsCond.setColumn(sRow, "DATE_TYPE", "R");
        	this.dsCond.setColumn(sRow, "CLOS_STIME", Ex.util.addMonth(Ex.util.today(), -2));
        	this.dsCond.setColumn(sRow, "CLOS_ETIME", Ex.util.today());
        	this.dsCond.setColumn(sRow, "SCOPE", "");
        	this.dsCond.setColumn(sRow, "MAP_WF_PROC_CD", "");

        	if(Ex.util.getSession('gvItDeptYn') != "Y")
        	{
        		this.dsCond.setColumn(sRow, "MY_TEAM", "Y");
        	}
        	this.divSearch.form.calStime.setFocus();
        }

        this.fnSelectInitInfo = function()
        {
        	var sTranId = "selectInitInfo";                       				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1300W/selectInitInfo";            				// 서비스명
            var sInDs = "";                  									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsDeptList=dsDeptList dsSrType2ALL=dsSrType2ALL";     // 서버에서 수신할 데이타셋
        	    sOutDs +=" dsUpmu2All=dsUpmu2All"
            var sArg = "SCH_LSIT='srtype2:upmu2'";                   			// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch = function()
        {
        	if(nexacro.toNumber(this.dsCond.getColumn(0,"CLOS_STIME")) > nexacro.toNumber(this.dsCond.getColumn(0,"CLOS_ETIME")))
        	{
        		var param = {
                	msg	: "조회시작일은 조회종료일보다 작거나 같아야합니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		return false;
        	}

        	var homeParam 	= this.getOwnerFrame().param||'';
        	trace('homeParam :: ' + homeParam);

        	if( !Ex.isEmpty(homeParam) )
        	{
        		this.delayYn = "Y";

         		this.dsCond.setColumn(0, "DATE_TYPE", "X");
         		this.dsCond.setColumn(0, "CLOS_STIME", this.getOwnerFrame().fromDate||'');
         		this.dsCond.setColumn(0, "CLOS_ETIME", this.getOwnerFrame().toDate||'');

        		if(homeParam == "DELAY-ALL")
        		{
        			this.dsCond.setColumn(0, "MY_TEAM", "N");
        			this.dsCond.setColumn(0, "SCOPE", "");
        		}
        		else if(homeParam == "DELAY-DEPT")
        		{
        			this.dsCond.setColumn(0, "WORK_DEPT_ID", Ex.util.getSession('gvDeptCd'));
        			this.dsCond.setColumn(0, "SCOPE", "DEPT");
        		}
        		else if(homeParam == "DELAY-USER")
        		{
        			this.dsCond.setColumn(0, "PROC_USER_NM", Ex.util.getSession('gvUserNm'));
        			this.dsCond.setColumn(0, "SCOPE", "PERSON");
        		}

        		this.getOwnerFrame().param = undefined;
        		this.getOwnerFrame().fromDate = undefined;
        		this.getOwnerFrame().toDate = undefined;
        	}

        	this.fnSetCondDs();

        	var schDiv = this.dsCond.getColumn(0,"SCH_DIV");

        	// transaction
        	var sTranId = "selectResult";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PA0900W/select"+schDiv;			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsResult=dsResult";		// 서버에서 수신할 데이타셋
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
        		var param = {id : "ERROR", msg : sSvcId+"::" + nErrorCode+"::" + sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "selectResult" :
        			if(this.dsCond.getColumn(0, "DATE_TYPE") == "X")
        			{
        				this.dsCond.setColumn(0, "DATE_TYPE", "R");
        				this.dsCond.setColumn(0, "CLOS_STIME", Ex.util.addMonth(Ex.util.today(), -2));
        				this.dsCond.setColumn(0, "CLOS_ETIME", Ex.util.today());
        				this.dsCond.setColumn(0, "SCOPE", "");
        			}
        			this.delayYn	= "";
        			this.deadlineYn	= "";
        			Ex.core.toast(this, "10002");
        			break;

        		case "selectInitInfo" :
        			this.dsDevprList.filter("SENIOR_ID==null || USER_NM == '- 전체 -'");
        			this.fnSearch();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {

        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "srReqWritePop1" :
        			if(varValue == "Y")
        			{
        				this.fnSearch();
        			}
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
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();	// 공통코드 조회

        	this.fnSearchReset();

        	this.fnSelectInitInfo();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: [ 'BIZC0000',     'REQC0000',   'APPR0000']	// 조회할 상위코드
        		,codeDiv	: [ 'NHFIRE'  ,     'NHFIRE'  ,   'WORKFLOW_CD']	// 조회할 코드의 업무구분
        		,optStr		: [ 'ALL'     ,     'ALL'	  ,   'ALL']	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: [ 'Y'       ,     'Y'	      ,   'Y']	// 사용여부
        		,filter		: [ ''        ,      ''		  ,   '']	// filterStr
        		,objDs		: [ this.dsUpmu1, this.dsSrType1, this.dsPhase]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	//일자 검색조건 Combo
        	var innerDS = new Dataset;
        	innerDS.addColumn("CODE", "string");
        	innerDS.addColumn("NAME", "string");
        	this.addChild("dsDate", innerDS);

        	this.divSearch.form.cboDateGbn.set_innerdataset(innerDS);
        	this.divSearch.form.cboDateGbn.set_codecolumn("CODE");
        	this.divSearch.form.cboDateGbn.set_datacolumn("NAME");

        	var aRow = innerDS.addRow();
        	innerDS.setColumn(aRow, "CODE", "R");
        	innerDS.setColumn(aRow, "NAME", Ex.core.word("요청일자"));

        	aRow = innerDS.addRow();
        	innerDS.setColumn(aRow, "CODE", "P");
        	innerDS.setColumn(aRow, "NAME", Ex.core.word("처리완료일자"));

        	aRow = innerDS.addRow();
        	innerDS.setColumn(aRow, "CODE", "A");
        	innerDS.setColumn(aRow, "NAME", Ex.core.word("합의완료일자"));

        	this.dsUpmu2.assign(this.dsUpmu1);
        	this.dsUpmu3.assign(this.dsUpmu1);
        	this.dsUpmu2.clearData();
        	this.dsUpmu3.clearData();

        	this.dsCond.setColumn(0, "DATE_TYPE", "R");
        	this.divSearch.form.cboDateGbn.set_text(innerDS.getColumn(0, "NAME"));

        	var evt = nexacro.ItemChangeEventInfo;
        	evt.postvalue = undefined;
        	this.cboOnItemChanged(this.divSearch.form.cboUpmu1, evt);
        	this.cboOnItemChanged(this.divSearch.form.cboUpmu2, evt);


         	var nRow = this.dsPhase.addRow(0);
         	this.dsPhase.setColumn(nRow, "CMM_CD", "APPR0XXX");
         	this.dsPhase.setColumn(nRow, "CMM_CD_NM", "진행중");
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnSearch" :			// 검색
        			this.fnSearch();
        			break;

        		case "btnDeadline" :
        		   this.deadlineYn = "Y";
        		   this.fnSearch();
        		   break;

        		case "btnDelay" :
        		   this.delayYn = "Y";
        		   this.fnSearch();
        		   break;

        		case "btnExcelDown" :		// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdMainList],
           				Sheet	: [this.getOwnerFrame().info.menuNm],
           				FileNm	: [this.getOwnerFrame().info.menuNm],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnPDF" :
        			trace("---btnPDF : PDF 변환 다운로드 중---");
        			var grid = this.formObj.components["grdMainList"];
        			trace("------", grid)
        			grid.set_scrollbartype("none");

        			var originalHeight = grid.getOffsetHeight();
        			var rowCnt = grid.rowcount;
        			var rowHeight = grid.getFormatRowProperty(1, "size");

        			var totalHeight = rowCnt * rowHeight;
        			grid.set_height(totalHeight+"px");

        			Ex.util.saveScreenPDF(this.formObj, this.formObj, this.getOwnerFrame().info.menuNm);

        			grid.set_scrollbartype("auto");

        			break;
        	}
        }

        this.grdOnCellClick = function(obj,e)
        {
        	if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "REQ_ID"))
        	{
        			var dsRow = this.dsResult.rowposition;

        			var reqTmplatId = this.dsResult.getColumn(dsRow,"REQ_TMPLAT_ID");
        			var reqTmplatVer = this.dsResult.getColumn(dsRow, "REQ_TMPLAT_VER");
        			var reqId = this.dsResult.getColumn(dsRow,"REQ_ID");
        			var scrnPath = "sr::SR0000_W.xfdl";

        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"srReqWritePop1",		// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				scrnPath,				// <--- 팝업창 오픈 Url
        				{
        					title : Ex.core.word("문제등록"),
        					pREQ_ID : reqId,
        					pREQ_TMPLAT_ID : reqTmplatId,
        					pREQ_TMPLAT_VER : reqTmplatVer
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize,useCloseButton=false"
        				//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        	}
        	else
        	{
        		var userId = "";
        		if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "WORK_USER_NM"))
        		{
        			var dsRow = this.dsResult.rowposition;
        			userId = this.dsResult.getColumn(dsRow,"WORK_USER_ID");
        		}
        		else if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "REQ_USER_NM"))
        		{
        			var dsRow = this.dsResult.rowposition;
        			userId = this.dsResult.getColumn(dsRow,"REQ_USER_ID");
        		}
        		else if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "PRE_CONF_USER_NM"))
        		{
        			var dsRow = this.dsResult.rowposition;
        			userId = this.dsResult.getColumn(dsRow,"PRE_CONF_USER_ID");
        		}
        // 		else if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "BA1_USER_NM"))
        // 		{
        // 			var dsRow = this.dsResult.rowposition;
        // 			userId = this.dsResult.getColumn(dsRow,"BA1_USER_ID");
        // 		}

        		if( !Ex.isEmpty(userId) )
        		{
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"srWorkUserIdPop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0000_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: "담당자 정보",
        					pPopType	: "R",
        					pUserId		: userId
        				},
        				"autosize,useCloseButton=false"
        				//"width=900,height=553,useCloseButton=false"                 // <--- width/height/modeless(프레임 처리 옵션)
        			);
        		}
        	}

        };

        this.onKeyUp = function(obj,e)
        {
        	if(e.keycode == 13) this.fnSearch();
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	if(obj.id == "cboUpmu1" || obj.id == "cboUpmu2")
        	{
        		var subObj;
        		var dsObj;

        		if(obj.id == "cboUpmu1")
        		{
        			subObj		= this.divSearch.form.cboUpmu2;
        			dsObj = this.dsUpmu2;
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			subObj		= this.divSearch.form.cboUpmu3;
        			dsObj = this.dsUpmu3;
        		}

        		if(obj.id == "cboUpmu1")
        		{
        			this.dsCond.setColumn(0, "UPMU_ID2", undefined);
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			this.dsCond.setColumn(0, "UPMU_ID3", undefined);
        		}

        		trace("this.cboOnItemChanged() e.postvalue : " + e.postvalue);

        		if( !Ex.isEmpty(e.postvalue) )
        		{
        			var oParam = {
        				 upCmmCd	: [e.postvalue		]	// 조회할 상위코드
        				,codeDiv	: ['NHFIRE'		]	// 조회할 코드의 업무구분
        				,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn		: ['Y'				]	// 사용여부
        				,filter		: [''				]	// filterStr
        				,objDs		: [dsObj			]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        			//subObj.set_index(0);
        			subObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			dsObj.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 -"));

        			if(obj.id == "cboUpmu1")
        			{
        				this.dsUpmu3.clearData();
        				var aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 - "));

        				this.divSearch.form.cboUpmu3.set_index(0);
        				this.divSearch.form.cboUpmu3.set_text(Ex.core.word("- 전체 - "));
        			}
        		}
        	} else if(obj.id == "cboPbmCateCd") {
        		if( !Ex.isEmpty(e.postvalue) )
        		{
        			var oParam = {
        				 upCmmCd	: [e.postvalue		]	// 조회할 상위코드
        				,codeDiv	: ['NHFIRE'		    ]	// 조회할 코드의 업무구분
        				,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn		: ['Y'				]	// 사용여부
        				,filter		: [''				]	// filterStr
        				,objDs		: [this.dsSrType2	]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        			this.divSearch.form.cboSrDtl.index = 0;
        			//subObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        		}
        		else
        		{
        			this.dsSrType2.clearData();
        			var aRow = this.dsSrType2.addRow();
        			this.dsSrType2.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 -"));
        			this.divSearch.form.cboSrDtl.index = 0;
        		}
        	}
        };



        this.divSearch_M_cboPbmCateCd_onitemchanged = function(obj,e)
        {
        	var strCode = this.divSearch_M.form.cboPbmCateCd.value;
        	var ds      = this.divSearch_M.form.cboDevpr.getInnerDataset();

        	if(Ex.isEmpty(strCode)){
        		ds.filter("SENIOR_ID==null || USER_NM == '- 전체 -'");
        		ds.set_rowposition(0);
        		this.divSearch_M.form.cboDevpr.set_index(0);
        	}else{
        		if(strCode != '%'){
        			ds.filter("SENIOR_ID == '"+strCode+"'|| USER_NM == '- 전체 -'");
        		} else {
        			ds.filter("SENIOR_ID != ''");
        		}
        		this.divSearch_M.form.cboDevpr.set_index(0);
         	}
        };

        this.fnSetCondDs = function()
        {
        	var dtType = this.dsCond.getColumn(0,"DATE_TYPE");
        	var stDt = this.dsCond.getColumn(0,"CLOS_STIME");
        	var edDt = this.dsCond.getColumn(0,"CLOS_ETIME");
        	var vScope = this.dsCond.getColumn(0,"SCOPE");


        	this.dsCond.setColumn(0,"REQ_ST_DT","");
        	this.dsCond.setColumn(0,"REQ_ED_DT","");
        	this.dsCond.setColumn(0,"PROC_ST_DT","");
        	this.dsCond.setColumn(0,"PROC_ED_DT","");
        	this.dsCond.setColumn(0,"AGREE_ST_DT","");
        	this.dsCond.setColumn(0,"AGREE_ED_DT","");

        	this.dsCond.setColumn(0,"WORK_DEPT_ID","");
        	this.dsCond.setColumn(0,"WORK_USER_ID","")

        	this.dsCond.setColumn(0,"DEADLINE",this.deadlineYn);
        	this.dsCond.setColumn(0,"DELAY",this.delayYn);

        	if(dtType == "R") {
        		this.dsCond.setColumn(0,"REQ_ST_DT",stDt);
        		this.dsCond.setColumn(0,"REQ_ED_DT",edDt);
        	} else if(dtType == "P") {
        		this.dsCond.setColumn(0,"PROC_ST_DT",stDt);
        		this.dsCond.setColumn(0,"PROC_ED_DT",edDt);
        	} else if(dtType == "A") {
        		this.dsCond.setColumn(0,"AGREE_ST_DT",stDt);
        		this.dsCond.setColumn(0,"AGREE_ED_DT",edDt);
        	}

        	if(vScope=="DEPT") {
        		this.dsCond.setColumn(0,"WORK_DEPT_ID", Ex.util.getSession('gvDeptCd'));
        	} else if(vScope=="PERSON"){
        		this.dsCond.setColumn(0,"WORK_USER_ID", Ex.util.getSession('gvUserId'));
        	}
        }

        this.fnExportExcelCallback = function()
        {

        }

        this.chkOnChanged = function(obj,e)
        {
        	this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.calStime.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.calEtime.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboUpmu1.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearch.form.cboUpmu1.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboUpmu2.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearch.form.cboUpmu2.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboUpmu3.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboPbmCateCd.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearch.form.cboPbmCateCd.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.edtTitle.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboSrDtl.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearch.form.cboSrDtl.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.edtReqUserNm.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.edtReqId.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.edtReqUserNm00.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboPhase00.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.edtReqUserNm00_00.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.cboPhase.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearch.form.stcReqUsertNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.chkTeam.addEventHandler("onchanged",this.chkOnChanged,this);
            this.divSearch.form.stcEndCloseYN.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnPDF.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDeadline.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDelay.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdMainList.addEventHandler("oncellclick",this.grdOnCellClick,this);
        };
        this.loadIncludeScript("SR0221_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
