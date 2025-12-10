(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0210_W");
            this.set_titletext("게시판 관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_MT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_NTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCHFILE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_ADD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"PL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostMtTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_NTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_READ\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_WRITE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEduMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_CNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSwMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SW_VENDOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PURPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"SW_USE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SW_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDate", this);
            obj._setContents("<ColumnInfo><Column id=\"PERIOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PERIOD_NM\">- 선택 -</Col></Row><Row><Col id=\"PERIOD_NM\">최근 1주</Col><Col id=\"PERIOD_CD\">WEEK</Col></Row><Row><Col id=\"PERIOD_NM\">최근 1개월</Col><Col id=\"PERIOD_CD\">MONTH</Col></Row><Row><Col id=\"PERIOD_NM\">최근 6개월</Col><Col id=\"PERIOD_CD\">6MONTH</Col></Row><Row><Col id=\"PERIOD_CD\">YEAR</Col><Col id=\"PERIOD_NM\">최근 1년</Col></Row><Row><Col id=\"PERIOD_NM\">사용자 범위 지정</Col><Col id=\"PERIOD_CD\">SELF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMtCond", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_MT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","400","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcTitle","520","13",null,"24","829",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("게시글 제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:0","13","162","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","edtTitle:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboPeriod","94","13","130","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("PERIOD_CD");
            obj.set_datacolumn("PERIOD_NM");
            obj.set_innerdataset("dsDate");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divDate","cboPeriod:2","8","260","40",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("div00");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01","122.00","5","15","24",null,null,null,null,null,null,this.divSearchArea.form.divDate.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearchArea.form.divDate.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","Static01:0","5","120","24",null,null,null,null,null,null,this.divSearchArea.form.divDate.form);
            obj.set_taborder("0");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearchArea.form.divDate.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate",null,"5","120","24","Static01:0",null,null,null,null,null,this.divSearchArea.form.divDate.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearchArea.form.divDate.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","divDate:0","13",null,"24","918",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDelYn","Static00_00_00:0.00","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDelYn","stcDelYn:-3.00","13","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDatTypeCd00","20","13",null,"24","cboPeriod:7",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("작성 일자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdPostDtTree","400.00","104",null,"547","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsPostDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("true");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj.set_cellcalendarpopuptype("none");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"50\"/><Column size=\"320\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"2\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"게시글 제목\"/><Cell col=\"5\" text=\"답글 작성\"/><Cell col=\"6\" text=\"작성자\"/><Cell col=\"7\" text=\"작성일시\"/><Cell col=\"8\" text=\"게시판종류\"/><Cell col=\"9\" text=\"첨부파일\"/><Cell col=\"10\" text=\"조회수\"/><Cell col=\"11\" text=\"댓글수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"3\" text=\"expr:NTC_YN==&apos;Y&apos;? &apos;공지&apos; : &apos;일반&apos;\" displaytype=\"normal\" cssclass=\"expr:NTC_ADD_YN==&apos;Y&apos;?&apos;grdBCell_DayEvent&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:TITLE\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL\" cursor=\"pointer\" cssclass=\"grdBTreeCell_WF_event_sameTreeIcon\"/><Cell col=\"5\" displaytype=\"expr:DEL_YN == &apos;Y&apos; ? &apos;none&apos; : &apos;imagecontrol&apos;\" edittype=\"none\" cursor=\"pointer\" autosizecol=\"limitmin\" text=\"theme://img_bak/btn_WF_More.png\"/><Cell col=\"6\" text=\"bind:FRNM\"/><Cell col=\"7\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"bind:POST_MT_TYPE_NM\" displaytype=\"normal\"/><Cell col=\"9\" text=\"expr:ATCHFILE_YN==&apos;Y&apos;? &apos;theme://SPP_IMAGE_SET/WF/btn_WF_download_N.png&apos; : &apos;&apos;\" displaytype=\"imagecontrol\"/><Cell col=\"10\" text=\"bind:READ_CNT\"/><Cell col=\"11\" text=\"bind:COMMENT_CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","400.00","70","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("게시글 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn","grdPostDtTree:-580.00","70","580","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"207","0",null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","273",null,null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"0","60","24","0",null,null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelSwIt",null,"0","135","24","66",null,null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDtSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:0","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsPostDt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","380.00","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00","0","70","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("게시판 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPostTree","0","104","380","547",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsPostMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("true");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_useContext("false");
            obj.set_autosizingtype("none");
            obj.set_cellcalendarpopuptype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" controlautosizingtype=\"both\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"부서/팀별 게시판명\"/><Cell col=\"3\" text=\"정렬순서\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:TITLE\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:SORT_ORDR\" edittype=\"text\" editinputfilter=\"alpha,comma,dot,none,sign,space,symbol\" editinputtype=\"digit,number\" displaytype=\"text\" validation=\"정렬순서;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt00","stcTreeTitle00:0","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsPostMt");
            this.addChild(obj.name, obj);

            obj = new Button("btnMtSave","300",null,"80","32",null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea_mt","0","0","380","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea_mt.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea_mt.addChild(obj.name, obj);

            obj = new Static("stcDatTypeCd","Static00:0.00","13","93","24",null,null,null,null,null,null,this.divSearchArea_mt.form);
            obj.set_taborder("1");
            obj.set_text("게시판 구분");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea_mt.addChild(obj.name, obj);

            obj = new Combo("cboPostMtTypeCd","stcDatTypeCd:-5","13","150","24",null,null,null,null,null,null,this.divSearchArea_mt.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsPostMtTypeCd");
            this.divSearchArea_mt.addChild(obj.name, obj);

            obj = new Div("divCrudBtn","180","70",null,"24","Static00_01:0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddMt","10.00","0","60","24",null,null,null,null,null,null,this.divCrudBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divCrudBtn.addChild(obj.name, obj);

            obj = new Button("btnDeleteMt","btnAddMt:5","0","60","24",null,null,null,null,null,null,this.divCrudBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divCrudBtn.addChild(obj.name, obj);

            obj = new Button("btnModMt","btnDeleteMt:5","0","60","24",null,null,null,null,null,null,this.divCrudBtn.form);
            obj.set_taborder("0");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_mod");
            obj.set_visible("true");
            this.divCrudBtn.addChild(obj.name, obj);

            obj = new Static("stcSWDesc","stcCnt:10","71","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("※ 하나의 게시물에 여러명이 소프트웨어 목록추가 가능");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"KoPubL\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSub","1855.00","104","1695",null,null,"490",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsEduMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_scrolltype("both");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"EDU\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"240\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"신청자\"/><Cell col=\"1\" text=\"신청부서\"/><Cell col=\"2\" text=\"내선\"/><Cell col=\"3\" text=\"교육구분\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"교육명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"교육기관명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"교육일수/강의시수\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"소요금액(부가세 포함)\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" text=\"저장일자\"/></Band><Band id=\"body\"><Cell text=\"bind:REQ_USER_NM\"/><Cell col=\"1\" text=\"bind:REQ_DEPT_NM\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:TELNUM\"/><Cell col=\"3\" text=\"bind:EDU_TYPE_CD\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;combo&apos; : &apos;none&apos;\" displaytype=\"combocontrol\" combodataset=\"dsEduTypeCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" validation=\"교육구분;NULL\"/><Cell col=\"4\" text=\"bind:EDU_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"교육명;NULL\"/><Cell col=\"5\" text=\"bind:EDU_ORG_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"교육기관명;NULL\"/><Cell col=\"6\" text=\"bind:EDU_CNT_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"교육일수/강의시수;NULL\"/><Cell col=\"7\" text=\"bind:EDU_AMOUNT\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" editinputfilter=\"comma,alpha,dot,sign,space,symbol\" editinputtype=\"number\" textAlign=\"right\" displaytype=\"number\" validation=\"소요금액;NULL\"/><Cell col=\"8\" text=\"bind:RMK\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"9\" text=\"bind:FRDT\" displaytype=\"date\"/></Band></Format><Format id=\"SW\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"190\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"240\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"신청자\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"1\" text=\"신청부서\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"2\" text=\"내선\"/><Cell col=\"3\" text=\"필요 소프트웨어\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"수량\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"예상금액(부가세포함, 단위:천원)\"/><Cell col=\"6\" text=\"사용목적\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"제조사\"/><Cell col=\"8\" text=\"사용방식\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"저장일자\"/></Band><Band id=\"body\"><Cell text=\"bind:REQ_USER_NM\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:REQ_DEPT_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:TELNUM\"/><Cell col=\"3\" text=\"bind:SW_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"필요 소프트웨어;NULL\"/><Cell col=\"4\" text=\"bind:SW_CNT\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" editinputfilter=\"comma,alpha,dot,sign,space,symbol\" editinputtype=\"number\" textAlign=\"center\" displaytype=\"number\" validation=\"수량;NULL\"/><Cell col=\"5\" text=\"bind:SW_AMT\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" editinputfilter=\"comma,alpha,dot,sign,space,symbol\" editinputtype=\"number\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:USE_PURPOSE\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"사용목적;NULL\"/><Cell col=\"7\" text=\"bind:SW_VENDOR_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"8\" displaytype=\"combocontrol\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;combo&apos; : &apos;none&apos;\" combodataset=\"dsSwTypeCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" text=\"bind:SW_USE_TYPE\"/><Cell col=\"9\" text=\"bind:RMK\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:FRDT\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form.divDate.form
            obj = new Layout("default","",0,0,this.divSearchArea.form.divDate.form,function(p){});
            this.divSearchArea.form.divDate.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdMtTopBtn.form,function(p){});
            this.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea_mt.form
            obj = new Layout("default","",0,0,this.divSearchArea_mt.form,function(p){});
            this.divSearchArea_mt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCrudBtn.form
            obj = new Layout("default","",0,0,this.divCrudBtn.form,function(p){});
            this.divCrudBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.cboDelYn","value","dsCond","DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.divDate.form.calBeginDate","value","dsCond","SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.divDate.form.calEndDate","value","dsCond","EDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea_mt.form.cboPostMtTypeCd","value","dsMtCond","POST_MT_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0251_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0251_W
        * 화면(명)		︰ 게시판
        * 메뉴(경로)	︰ 커뮤니티 > 커뮤니티 > 게시판
        * 화면 설명	︰ SPP 게시판
        * 작성자		︰ 정하림
        * 작성일		︰ 2024.12.02
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.01.14	 정하림		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.isAdmin = (Ex.util.getSession('gvAuthId').includes('SPP_ADM'));
        this.isPostAdm = false;
        this.myId = Ex.util.getSession('gvUserId');
        this.myDeptCd = Ex.util.getSession('gvDeptCd');

        this.selectedMtNo;
        this.seledtedMtTitle;
        this.selectedCreType;
        this.selectedDeptNm;
        this.selectedDeptCd;
        this.selectedLvl;
        this.selectedMtManager;
        this.postMtType;
        this.attachYn;

        this.upmu1;
        this.upmu2;
        this.plId;

        this.writeGubun;
        this.alarmGubun;
        this.authRead;
        this.authWrite;

        this.selectedDtFrId;
        this.seledtedDtDelYn;

        this.isInit = true;
        this.addCellWidth;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/

        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	trace("시스템 관리자 여부 : ", this.isAdmin)

        	this.checkBtnAuth();		// 게시판 관련 권한 체크
        	this.fnCompInit();			// 컴포넌트 초기화
        	this.fnSearchReset();		// 검색조건 초기화
        	this.fnSearch(this.isInit);	// 조회
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsMtCond.clearData();
        	this.dsCond.addRow();
        	this.dsMtCond.addRow();
        	this.divSearchArea.form.cboPeriod.set_index(0);

        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEL_YN', 'N');

        	var adminYn = (this.isAdmin) ? 'Y' : 'N';
        	this.dsMtCond.setColumn(this.dsMtCond.rowposition, 'DEL_YN', 'N');
        	this.dsMtCond.setColumn(this.dsMtCond.rowposition, 'DEPT_CD', this.myDeptCd);
        	this.dsMtCond.setColumn(this.dsCond.rowposition, 'SYS_YN', adminYn);
        }

        // 변경 행 확인
        this.fnSearch = function(isInit)
        {
        	// 게시판 조회 - 게시판 구분 (01/02/03/04)
        	if(this.dsMtCond.getColumn(0, 'POST_MT_TYPE_CD') != null){
        		if(Ex.util.isUpdated(this.dsMtCond)){
        			this.fnSearch02();
        		}else{
        			this.fnSearch01();
        		}

        	}
        	else if(!Ex.isEmpty(this.dsCond.getColumn(0, 'SDATE')) && !Ex.isEmpty(this.dsCond.getColumn(0, 'EDATE'))){
        		// 게시글 조회 - 기간
        		this.fnSearch01();
        	}
        	else if(!Ex.isEmpty(this.dsCond.getColumn(0, 'TITLE'))){
        		this.fnSearch01();
        	}
        	else {
        		if(!isInit){
        			this.fnSearch01();
        		}
        		else{
        			this.fnSearch02();
        		}
        	}

        }

        // 그리드 데이터 조회
        this.fnSearchGrid = function()
        {
        	// transaction
        	var sTranId = "select04";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select04";               // 서비스명
            var sInDs = "dsCond=dsCond";                  	   // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsEduMt=dsEduMt dsSwMt=dsSwMt";      // 서버에서 수신할 데이타셋
            var sArg = "";                  				   // 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 게시글 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsPostDt=dsPostDt";       		// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 게시판 조회
        this.fnSearch02 = function()
        {
        	this.dsPostDt.clearData();
        	// transaction
        	var sTranId = "select02";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select02";            // 서비스명
            var sInDs = "dsCond=dsMtCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsPostMt=dsPostMt";		       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회수 증가
        this.fnInceaseViewCnt = function()
        {
        	// transaction
        	var sTranId = "updateCnt";                      // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/updateCnt";           // 서비스명
            var sInDs = "dsCond=dsCond"; 				    // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";		       					// 서버에서 수신할 데이타셋
            var sArg = "";                    				// 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 게시글 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0251W/save01";
            var sInDs = "dsPostDt=dsPostDt:U dsEduMt=dsEduMt:U dsSwMt=dsSwMt:U dsCond=dsCond";
            var sOutDs = "dsPostDt=dsPostDt";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 게시판 저장
        this.fnMtSave = function()
        {
        	var sTranId = "save02";
            var sService = "FOMM0251W/save02";
            var sInDs = "dsPostMt=dsPostMt:U dsCond=dsCond";
            var sOutDs = "dsPostMt=dsPostMt";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 게시판 CRUD 권한 조회
        this.fnCheckAuth = function()
        {
        	// transaction
        	var sTranId = "checkAuth";                      // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select06";            // 서비스명
            var sInDs = "dsSessUser=gdsSession";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsBtnAuth=dsBtnAuth";       		// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	if(objDs.rowcount == 0){ // 체크된게 하나도 없다면
        		var param = {
        				  id	: "noChkColAlert"				//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "삭제할 게시판을 선택해주세요."		//메시지 내용
        				, arrparam : [""]						//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);

        			objDs.set_filterstr("");
        			objDs.set_enableevent(true);

        			return false;
        	}

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

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

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select01" :
        			var grdFormatId = this.grdSub.formatid;
        			this.dsCond.setColumn(0, 'REQ_TYPE_NM', grdFormatId);
        			this.fnSearchGrid();	// 그리드 데이터 조회

        			if(this.postMtType == '03' || this.postMtType == '04'){
        				this.grdPostDtTree.setFormatColProperty(5,"size",0);	// 추가 컬럼 안보이게 처리
        			} else {
        				var totWidth = this.grdPostDtTree.getRealColFullSize();
        				this.grdPostDtTree.setRealColSize("body", 5, totWidth * 0.05, false ); // 비율 계산 후 다시 보이게 처리
        			}

        			this.grdPostDtTree.setCellProperty("Head", this.grdPostDtTree.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select02" :
        			if(!this.isAdmin){ // 시스템 관리자가 아닐 경우 [정렬순서] 컬럼 숨기기
        				this.grdPostTree.setFormatColProperty(3,"size",0);
        			}
        			Ex.core.toast(this, "10002");
        			this.grdPostTree.setCellProperty("Head", this.grdPostTree.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select04" :
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.grdPostDtTree.setCellProperty("Head", this.grdPostDtTree.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save02" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.grdPostTree.setCellProperty("Head", this.grdPostTree.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "updateCnt" :
        			this.dsCond.setColumn(0, 'POST_DT_NO', '');
        			break;

        		case "checkAuth" :
        			var rowpos = this.dsBtnAuth.findRow("CREATE_TYPE", "DEPT");
        			if(rowpos != -1 && this.dsBtnAuth.getColumn(rowpos, 'ADMIN_YN') == 'Y'){
        				this.setCrudBtnVisible(true, true, true);
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue)
        		return;

        	switch(pID)
        	{
        		case "postPop" :
        			if( (varValue||'').toUpperCase() == 'N'){
        				this.fnSearch();
        			}
        			else if( (varValue||'').toUpperCase() == 'MTSAVE' ){
        				this.fnSearch02();
        			}
        			else{ // save , search, y
        				this.fnSearch01();
        			}
        			break;

        		case "postReplyPop" :
        			this.fnSearch01();
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
        		case "searchConfirm" :
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "saveMtConfirm" :
        			this.fnMtSave();
        			break;

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdPostDtTree.displayRowType();
        	this.grdPostTree.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divCrudBtn.form.btnAddMt];		// 쓰기 - 게시판
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdMtTopBtn.form.btnAdd];		// 쓰기 - 게시글
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divCrudBtn.form.btnDeleteMt];	// 삭제 - 게시판
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdMtTopBtn.form.btnDelete];	// 삭제 - 게시글
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.btnMtSave];						// 저장 - 게시판
        	Ex.util.setBtnVisible(this, 'save', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnDtSave];	// 저장 - 게시글
        	Ex.util.setBtnVisible(this, 'save', arrBtn);
        		arrBtn = [this.divGrdMtTopBtn.form.btnExcel];	// 엑셀다운 - 게시글
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);


        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divCrudBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'POST_MT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD']					// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'SEL']						// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y']						// 사용여부
        		,filter	: ['',	'']									// filterStr
        		,objDs	: [this.dsYnCd, this.dsPostMtTypeCd]		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);								// 공통코드 getter util;
        }

        // 팝업 열기 - TYPE 에 따라 다른 팝업
        this.fnOpenPop = function(data)
        {
        	var type = data.type||'';
        	var typeNm = '';
        	var url = '';
        	var pPostNo = data.postNo||'';
        	var pPopType = '';
        	var pUpPostNo = data.upPostNo||'';
        	var pUpPostNm = data.upPostNm||'';
        	var pSelectedMtNo = data.selectedMtNo||'';
        	var pPostMtType = data.postMtType||'';
        	var pSelectedDeptNm = data.selectedDeptNm||'';
        	var pSelectedDeptCd = data.selectedDeptCd||'';
        	var pSelectedLvl = data.selectedLvl||'';
        	var pSelectedMtManager = data.selectedMtManager||'';
        	var pWriteGubun = data.writeGubun||'';
        	var pAlarmGubun = data.alarmGubun||'';
        	var pAttachYn = data.attachYn||'';
        	var pUpPostLmId = data.upPostLmId||'';
        	var pUpmu1 = data.upmu1||'';
        	var pUpmu2 = data.upmu2||'';
        	var pPlId = data.plId||'';
        	var flag = data.flag||'';
        	var postAdm = data.postAdm||'';

        	var popId = "postPop";

        	if( type == 'M' ){
        		// 게시판 관련
        		pPopType = pPostNo ? 'U' : 'I';

        		typeNm = '게시판';
        		url = "fomm::FOMM0251_P02.xfdl"; // 게시판 팝업 url
        	} else {
        		if( Ex.isEmpty(pPostNo) ) {
        			pPopType = 'I';
        		}
        		else {
        			var FRID = this.dsPostDt.getColumn(this.dsPostDt.rowposition, 'FRID');
        			if( FRID == this.myId )
        				pPopType = 'U';
        			else
        				pPopType = 'R';
        		}

        		// 게시글 관련
        		if(flag) popId = "postReplyPop"; // 답글로 열린 팝업 flag 처리

        		typeNm = '게시글';
        		url = "fomm::FOMM0251_P01.xfdl"; // 게시글 팝업 url
        	}

        	Ex.core.popup(
        			this,
        			popId,				 			 	// 답글 작성할 경우 동일한 팝업 표시해야 하는데, 동일한 ID 로 띄울 수 없으므로 조치
        			url,             					 // <--- 팝업창 오픈 Url
        			{ title			: Ex.core.word(typeNm) + ' ' + Ex.core.word('생성'),
        			  pPopType		: pPopType,
        			  pPostNo		: pPostNo,			 // U, R일 경우
        			  pUpPostNo		: pUpPostNo, 		 // 상위 게시판 or 상위 게시글 지정할 경우
        			  pUpPostNm		: pUpPostNm,
        			  pSelectedMtNo	: pSelectedMtNo, //게시판 선택 후 게시글 추가할 경우
        			  pPostMtType	: pPostMtType, 	 // 게시판 종류
        			  pSelectedDeptNm : pSelectedDeptNm,
        			  pSelectedDeptCd : pSelectedDeptCd,
        			  pSelectedLvl	  : pSelectedLvl,
        			  pSelectedMtManager : pSelectedMtManager,
        			  pWriteGubun	  : pWriteGubun,
        			  pAlarmGubun	  : pAlarmGubun,
        			  pAttachYn		  : pAttachYn,
        			  pUpPostLmId	  : pUpPostLmId,
        			  pUpmu1		  : pUpmu1,
        			  pUpmu2		  : pUpmu2,
        			  pPlId		  	: pPlId,
        			  pFlag			: flag,
        			  pPostAdm		: postAdm,
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"
        	);
        }

        this.fnCheckValidate = function(type)
        {

        	var dataSet = (type == 'M') ? this.dsPostMt : this.dsPostDt;

        	if( !Ex.util.isUpdated(dataSet) )
        		return false;

        	// Grid Validation
        	if( !this.grdPostTree.checkValidate() )
        		return false;

        	return true;
        }

        this.fnCheckDateValidate = function()
        {
        	// 게시종료 > 게시시작 validation
        	var rowpos = this.dsCond.rowposition;
        	var SDATE	= this.dsCond.getColumn(rowpos, 'SDATE');
        	var EDATE 	= this.dsCond.getColumn(rowpos, 'EDATE');
        	var sDt	= Ex.util.strToDate(SDATE+"000000");
        	var eDt	= Ex.util.strToDate(EDATE+"000000");

        	if(sDt > eDt) {
        		var param = {
        				id : "sDtLateAlert"
        			  , msg : "10013"
        			  , arrparam : [Ex.core.word('검색시작일시'), Ex.core.word('검색종료일시')]
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if(this.divSearchArea.form.cboPeriod.value == 'SELF'){
        		if( Ex.isEmpty(this.dsCond.getColumn(0, 'SDATE')) || Ex.isEmpty(this.dsCond.getColumn(0, 'EDATE')) ){
        			var param = {
        				  id	: "setDateAlert"				//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "검색 기간을 알맞게 지정해주세요."	//메시지 내용
        				, arrparam : [""]						//메시지의 변수에 들어갈 실제값
        				, msgtype : "W"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	return true;
        }

        // 게시판/게시글에 따른 데이터셋 validate 체크 후 저장 함수 분기처리
        this.fnTypeSave = function(type){
        	var paramId = (type == 'M' ? 'saveMtConfirm' : "saveConfirm");

        	if( this.fnCheckValidate(type) )
        	{
        		var param = {	id : paramId
        			  , msg : "10003"
        			  , arrparam : ['']
        			  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        	}
        }

        this.checkBtnAuth = function(){

        	if(this.isAdmin){
        		this.setCrudBtnVisible(true, true, true);
        	} else{ // spp admin 은 아니지만 team admin일 경우
        		this.fnCheckAuth();
        	}
        }

        // 게시판 행별 CRUD btn visible 처리
        this.currRowIsAdminRow = function(rowpos){
        	trace(`rowpos : ${rowpos} / postMtNo : ${this.selectedMtNo} / authRead : ${this.authRead} / authWrite : ${this.authWrite} / deptCd : ${this.selectedDeptCd}`)

        	var idx = this.dsBtnAuth.findRow("POST_MT_NO", this.selectedMtNo)
        	trace( "idx ::::: " + idx + " this.isAdmin ::::: " + this.isAdmin);
        	if(idx != -1 && !this.isAdmin){ // 시스템 관리자는 이미 btn 모두 visible 처리
        		trace("나의 권한 :: ", this.dsBtnAuth.getColumn(idx, "ADMIN_YN"))
        		trace("부서 or 게시판 :: ", this.dsBtnAuth.getColumn(idx, "CREATE_TYPE"))
         		if(this.dsBtnAuth.getColumn(idx, "ADMIN_YN") == 'Y'){
        			if(this.dsBtnAuth.getColumn(idx, "CREATE_TYPE") == 'POST'){ // 게시판 관리자인 경우
        				// 게시판 관리자 플래그 관리
        				this.isPostAdm = true;
        				this.setCrudBtnVisible(false, false, true);
        			}
        			else { // 부서 관리자인 경우
        				this.isPostAdm = false;
        				this.setCrudBtnVisible(true, true, true);
        			}
        		}else this.setCrudBtnVisible(true, true, true);
        	}else { // 해당 부서/게시판의 관리자가 아닌 경우는 btn 모두 숨김 처리
        		this.isPostAdm = false;
        		this.setCrudBtnVisible(false, false, false);
        	}
        }

        // 게시글 등록 및 삭제 버튼 visible 처리
        this.currRowSetAuth = function(){
        	//trace(`writeGubun : ${this.writeGubun} / alarmGubun : ${this.alarmGubun}`)
        	//trace(`authRead : ${this.authRead} / authWrite : ${this.authWrite} `)

        	// 1. 내 부서가 현재 위치한 게시판 부서와 같은지 먼저 체크 --> 같다면 (2) 진행
        	// 2. this.authWrite 값이 'TEAM' 이고, 쓰기설정에 'P'가 포함되어 있다면 등록버튼 표시

        	// 3. 내 부서가 현재 위치한 게시판 부서와 다르다면 --> (4) 진행 authRead/authWrite 체크
        	// 4. this.authWrite 값이 'ALL' 이고, 쓰기설정에 'P'가 포함되어 있다면 등록버튼 표시
        	// 5. this.authWrite 값이 'TEAM' 이면, 등록버튼 숨김
        	trace(" >>>  " +  this.selectedDeptCd +"  ++++  "  +this.myDeptCd);
        	//if(this.selectedDeptCd == this.myDeptCd){ // 내 부서 게시판일 때

        	/* 20250718 이미 트리에서 내가 접근 가능한 부서만 조회되는데 다시 부서를 체크하는 이유가 무엇일까요???*/

        		if(this.authWrite == "TEAM" && this.writeGubun.includes("P")){ // 게시글 쓰기 설정되어 있고, 쓰기권한이 TEAM(나의 팀) 이라면
        			this.setTopBtnVisible(true, false);
        		}
        	//}
        	//else { // 다른 팀 게시판일 때
        		else if(this.authWrite == "ALL"){ // 모든 사람이 쓰기 권한이 있다면 쓰기 설정 있는지 체크
        			if(this.writeGubun.includes("P")){ // 게시글 쓰기 설정되어 있고, 쓰기권한이 TEAM(나의 팀) 이라면 등록버튼 표시
        				this.setTopBtnVisible(true, false);
        			}
        		}
        		else{ // TEAM 한테만 쓰기 권한이 있다면 등록버튼 숨김 처리
        			this.setTopBtnVisible(false, false);
        		}
        //	}
        }

        // divCrudBtn visible 처리
        this.setCrudBtnVisible = function(v1, v2, v3){
        	this.divCrudBtn.form.btnDeleteMt.set_visible(v1);
        	this.divCrudBtn.form.btnAddMt.set_visible(v2);
        	this.divCrudBtn.form.btnModMt.set_visible(v3);
        	this.divCrudBtn.set_visible(true);

        	Ex.util.setBtnAlign(this.divCrudBtn, 'right', true);
        }

        // TopBtn visible 처리
        this.setTopBtnVisible = function(v1, v2){
        	this.divGrdMtTopBtn.form.btnAdd.set_visible(v1);
        	this.divGrdMtTopBtn.form.btnDelete.set_visible(v2);
        	trace(" this.postMtType :::" + this.postMtType);
        	trace(" this.isAdmin :::" + this.isAdmin);
        	trace(" this.isPostAdm :::" + this.isPostAdm);

        	if((this.postMtType == '03' || this.postMtType == '04') && (this.isAdmin || this.isPostAdm)){	// sw조사 게시판(관리자에게만 표시)
        		if(this.postMtType == '03'){ // SW
        			this.divGrdMtTopBtn.form.btnExcelSwIt.set_text("신청S/W 목록저장");
        		}else{	// EDU
        			this.divGrdMtTopBtn.form.btnExcelSwIt.set_text("신청교육 목록저장");
        		}
        		this.divGrdMtTopBtn.form.btnExcelSwIt.set_visible(true);
        	}else{
        		this.divGrdMtTopBtn.form.btnExcelSwIt.set_visible(false);
        	}

        	Ex.util.setBtnAlign(this.divGrdMtTopBtn, 'right', true);
        	this.divGrdMtTopBtn.set_visible(true);
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	const typeMap = {
        		'btnMtSave' : 'M',
        		'btnDtSave' : 'D'
        	}

        	var type = typeMap[obj.name];

        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			if(this.divSearchArea.form.cboPeriod.value == 'SELF'){
        				if( Ex.isEmpty(this.dsCond.getColumn(0, 'SDATE')) || Ex.isEmpty(this.dsCond.getColumn(0, 'EDATE')) ){
        					var param = {
        						  id	: "setDateAlert"				//fnMsgAfter에서 식별자로 사용되는 ID
        						, msg	: "검색 기간을 알맞게 지정해주세요."	//메시지 내용
        						, arrparam : [""]						//메시지의 변수에 들어갈 실제값
        						, msgtype : "W"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        					Ex.core.alert(this, param);
        					return false;
        				}
        			} else {
        				if( !this.fnCheckDateValidate() ) return false;
        			}

        			this.fnSearch(this.isInit);
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAddMt' :	// 게시판 추가(선택한 부서 폴더 하위에)
        			if(this.selectedCreType == 'POST'){
        				var param = {
        						  id	: "createTypeAlert"							//fnMsgAfter에서 식별자로 사용되는 ID
        						, msg	: "게시판은 부서 폴더 하위에만 생성할 수 있습니다."		//메시지 내용
        						, arrparam : [""]									//메시지의 변수에 들어갈 실제값
        						, msgtype : "W"										//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        					Ex.core.alert(this, param);
        					return false;
        			}

        			var popData = {
        					postNo : '',
        					type : 'M',
        					upPostNo : this.selectedMtNo,
        					upPostNm : this.seledtedMtTitle,
        					postMtType : this.postMtType,
        					selectedDeptNm : this.selectedDeptNm,
        					selectedDeptCd : this.selectedDeptCd,
        					selectedLvl	  : this.selectedLvl
        				  };

        			this.fnOpenPop(popData);
        			break;

        		case 'btnAdd' : 		// 게시글 추가
        			var popData = {
        							postNo : '',
        							selectedMtNo : this.selectedMtNo,
        							type : 'D',
        							upPostNo : '',
        							postMtType : this.postMtType,
        							selectedMtManager : this.selectedMtManager,
        							alarmGubun : this.alarmGubun,
        							attachYn : this.attachYn
        						  };

        			this.fnOpenPop(popData);
        			break;

        		case 'btnDeleteMt' :	// 게시판 삭제
        			this.fnDelete(this.dsPostMt);
        			break;

        		case 'btnDelete' :		 // 게시글 삭제
        			this.fnDelete(this.dsPostDt);

        			break;

        		case 'btnModMt' :		// 게시판 수정
        			var popData = {
        							postNo : this.selectedMtNo,
        							type : 'M',
        							upPostNo : '',
        							postMtType : this.postMtType,
        							selectedDeptNm : this.selectedDeptNm,
        							selectedDeptCd : this.selectedDeptCd,
        							selectedLvl	  : this.selectedLvl
        						  };

        			this.fnOpenPop(popData);
        			break;

        		case 'btnMtSave' :
        		case 'btnDtSave' : 		// 저장
        			this.fnTypeSave(type);
        			break;

        		case "btnExcel" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdPostDtTree],
           				Sheet	: [this.getOwnerFrame().info.menuNm],
           				FileNm	: [this.getOwnerFrame().info.menuNm],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnExcelSwIt" : 	// 엑셀다운 (SW신청/IT교육조사)
        			var title = (this.grdSub.formatid == 'SW') ? '소프트웨어_조사_목록' : 'IT교육_조사_목록';

        			var oInfo = {
           				Grid	: [this.grdSub],
           				Sheet	: [title],
           				FileNm	: [title],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        	}
        }

        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);

        	if(e.columnid == "CHK" && e.newvalue == "1" && obj.id == "dsPostDt"){
        		var frId = this.dsPostDt.getColumn(e.row, "FRID");
        		if(!this.isAdmin && !this.isPostAdm && frId != this.myId){	// 본인 게시글이 아닌 글을 체크했을 때 (시스템&부서관리자 제외)
        			this.dsPostDt.setColumn(e.row, "CHK", "0"); // 다시 체크 해제

        			var param = {
        				  id	: "isNotMyPost"
        				, msg	: "본인이 작성한 글만 선택할 수 있습니다."
        				, arrparam : [""]
        				, msgtype : "I"
        			};
        			Ex.core.alert(this, param);

        			return false;
        		}
        	}
        };


        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch(this.isInit);
        		obj.setFocus();
        	}
        };

        // 게시글에서 추가버튼 및 타이틀 클릭 이벤트 --아래 함수랑 순서 변경하면 안됨
        this.grdPostDt_oncellclick = function(obj,e)
        {
        	var postDtNo = this.dsPostDt.getColumn(e.row, "POST_DT_NO").toString();

        	if(e.row > -1 && e.cell == 5) // 답글 작성 버튼 클릭 시
        	{
        		if(this.seledtedDtDelYn == 'Y'){ // 삭제된 게시글이면 이벤트 발생 X
        			return false;
        		}else if(!this.writeGubun.includes("S")){ // 답글 설정이 안되어 있으면
        			var param = {
        				  id	: "replySetAlert"
        				, msg	: "답글작성에 권한이 없습니다."
        				, arrparam : [""]
        				, msgtype : "W"
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		var popData = {
        							postNo : '',
        							selectedMtNo : this.selectedMtNo,
        							type : 'D',
        							upPostNo : postDtNo,
        							upPostNm : this.dsPostDt.getColumn(e.row, "TITLE"),
        							upPostLmId : this.dsPostDt.getColumn(e.row, "LMID"),
        							postMtType : this.postMtType,
        							alarmGubun : this.alarmGubun,
        							upmu1	   : this.upmu1,
        							upmu2	   : this.upmu2,
        							plId	   : this.plId,
        							flag : true
        						  };

        		this.fnOpenPop(popData);
        	}
        	else if(e.row > -1 && e.cell == obj.getBindCellIndex("body", "TITLE") && !(e.fromobject == "[object TreeItemIconControl]")) // 제목 클릭 시
        	{
        		if(this.seledtedDtDelYn == "Y"){ // 삭제된 게시글인 경우 보지 못하도록 처리
        			var param = {
        				  id	: "delPostAlert"
        				, msg	: "삭제된 글입니다."
        				, arrparam : [""]
        				, msgtype : "W"
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		this.dsCond.setColumn(0, 'POST_DT_NO', postDtNo); // 조회수 증가에 태울 파라미터 세팅
        		this.fnInceaseViewCnt(); // 조회수 증가

        		var popData = {
        							postNo : postDtNo,
        							selectedMtNo : this.selectedMtNo,
        							type : 'D',
        							upPostNo : '',
        							postMtType : this.postMtType,
        							writeGubun : this.writeGubun,
        							alarmGubun : this.alarmGubun,
        							attachYn : this.attachYn,
        							postAdm	 : this.isPostAdm,
        						  };
        		this.fnOpenPop(popData);
        	}
        };

        // 게시판 - 하위 게시글 조회
        this.dsPostMt_onrowposchanged = function(obj,e)
        {
        	this.dsPostDt.clearData();

        	this.selectedMtNo = obj.getColumn(e.newrow, 'POST_MT_NO');; // 게시판 변수에 담기
        	this.seledtedMtTitle = obj.getColumn(e.newrow, 'TITLE');
        	this.selectedCreType = obj.getColumn(e.newrow, 'CREATE_TYPE');
        	this.postMtType = obj.getColumn(e.newrow, 'POST_MT_TYPE_CD');
        	this.selectedDeptNm = obj.getColumn(e.newrow, 'DEPT_NM');
        	this.selectedDeptCd = obj.getColumn(e.newrow, 'DEPT_CD');
        	this.selectedLvl	= obj.getColumn(e.newrow, 'LVL');
        	this.selectedMtManager = obj.getColumn(e.newrow, 'MANAGER');
        	this.attachYn = obj.getColumn(e.newrow, 'ATTACH_YN');
        	this.writeGubun = obj.getColumn(e.newrow, 'WRITE_GUBUN');
        	this.alarmGubun = obj.getColumn(e.newrow, 'ALARM_GUBUN');

        	this.authRead = obj.getColumn(e.newrow, 'AUTH_READ');
        	this.authWrite = obj.getColumn(e.newrow, 'AUTH_WRITE');
        	trace( e.newrow + " >>>>>dsPostMt_onrowposchanged >>>>>>>>>>" + this.isAdmin);
        	/* 권한에 따라 crud 버튼 display 세팅 */
        	if(!this.isAdmin){
        		this.currRowIsAdminRow(e.newrow);
        		if(this.selectedCreType == "POST"){	// 게시판 클릭하면 권한 체크
        			this.currRowSetAuth();
        		}else {	// 부서 클릭하면 게시글 top 버튼 모두 숨기기
        			this.setTopBtnVisible(false, false);
        		}
        	}else if(this.isAdmin && this.selectedCreType == "POST"){
        		this.setTopBtnVisible(true, true);
        	}else{ // admin이면서 부서 클릭했을 경우
        		this.setTopBtnVisible(false, false);
        	}

        	// Grid title 처리
        	this.stcTreeTitle.set_text('[' + this.seledtedMtTitle + '] ' + Ex.core.word('게시글 목록'));
        	// cnt 위치 조정
        	var objSize = nexacro.getTextSize(this.stcTreeTitle.text, this.stcTreeTitle._getCurrentStyleInheritValue("font"));
        	this.stcTreeTitle.set_width(parseInt(objSize.nx) + 20);

        	objSize = nexacro.getTextSize(this.stcCnt.text, this.stcCnt._getCurrentStyleInheritValue("font"));
        	this.stcCnt.set_width(parseInt(objSize.nx) + 20);
        	this.stcCnt.set_left("stcTreeTitle:0");

        	if(this.postMtType == '03'){
        		objSize = nexacro.getTextSize(this.stcSWDesc.text, this.stcSWDesc._getCurrentStyleInheritValue("font"));
        		this.stcSWDesc.set_width(parseInt(objSize.nx) + 20);
        		this.stcSWDesc.set_left("stcCnt:10");
        		this.stcSWDesc.set_visible(true);

        		this.grdSub.set_formatid("SW");
        		this.grdSub.binddataset = "dsSwMt";
        	}else{
        		if(this.postMtType == '04'){
        			this.grdSub.set_formatid("EDU");
        			this.grdSub.binddataset = "dsEduMt";
        		}

        		this.stcSWDesc.set_visible(false);
        	}


        	this.dsCond.setColumn(this.dsCond.rowposition, 'POST_MT_NO', this.selectedMtNo);

        	// 사용자가 직접 rowposition을 변경할 경우만 해당 (새로고침 제외)
        	if(e.oldrow != -1) this.fnSearch01();
        };

        // 게시글 - rowpos 변경될 때
        this.dsPostDt_onrowposchanged = function(obj,e)
        {
        	this.selectedDtFrId = obj.getColumn(e.newrow, 'FRID');
        	this.seledtedDtDelYn = obj.getColumn(e.newrow, 'DEL_YN');
        	this.upmu1 = obj.getColumn(e.newrow, 'UPMU_ID1');
        	this.upmu2 = obj.getColumn(e.newrow, 'UPMU_ID2');
        	this.plId  = obj.getColumn(e.newrow, 'PL_ID');

        	if(this.isAdmin || this.isPostAdm){ // sys 관리자면
        		this.setTopBtnVisible(true, true);
        	}else{
        		if(this.seledtedDtDelYn == 'Y'){ // 이미 삭제된 게시물이면 내꺼든 아니든 답글 못달고, 삭제 못함
        			this.setTopBtnVisible(true, false);
        		}else{ // 삭제되지 않은 게시물이면
        			if(this.myId == this.selectedDtFrId){	// 내 게시물인 경우
        				this.setTopBtnVisible(true, true);
        			}else { // 다른 사람 게시물인 경우
        				this.setTopBtnVisible(true, false);
        			}
        		}
        	}
        };

        // 작성일자 콤보 변경 이벤트
        this.divSearchArea_cboPeriod_onitemchanged = function(obj,e)
        {
        	var selectedDt = e.postvalue ? e.postvalue.toUpperCase() : '';

        	var rowPos = this.dsCond.rowposition;
        	var today = Ex.util.getMaskFormatString(new Date(), "yyyyMMdd");

        	switch(selectedDt) {

        		case "WEEK": 	// 1주일
        			this.dsCond.setColumn(rowPos, 'SDATE', Ex.util.addDate(today, -7));
        			this.dsCond.setColumn(rowPos, 'EDATE', Ex.util.today());
        			break;

        		case "MONTH":	// 1개월
        			this.dsCond.setColumn(rowPos, 'SDATE', Ex.util.addMonth(today, -1));
        			this.dsCond.setColumn(rowPos, 'EDATE', Ex.util.today());
        			break;

        		case "6MONTH": 	// 6개월
        			this.dsCond.setColumn(rowPos, 'SDATE', Ex.util.addMonth(today, -6));
        			this.dsCond.setColumn(rowPos, 'EDATE', Ex.util.today());
        			break;

        		case "YEAR": 	// 1년
        			this.dsCond.setColumn(rowPos, 'SDATE', Ex.util.addMonth(today, -12));
        			this.dsCond.setColumn(rowPos, 'EDATE', Ex.util.today());
        			break;

        		case "SELF":
        		default:
        			this.dsCond.setColumn(rowPos, 'SDATE', '');
        			this.dsCond.setColumn(rowPos, 'EDATE', '');
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtTitle.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtTitle.addEventHandler("onchanged",this.divSearchArea_edtTitle_onchanged,this);
            this.divSearchArea.form.cboPeriod.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboPeriod.addEventHandler("onitemchanged",this.divSearchArea_cboPeriod_onitemchanged,this);
            this.divSearchArea.form.divDate.form.calEndDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.divDate.form.calBeginDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboDelYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdPostDtTree.addEventHandler("oncellclick",this.grdPostDt_oncellclick,this);
            this.stcTreeTitle.addEventHandler("onclick",this.stcTreeTitle_onclick,this);
            this.divGrdMtTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnExcel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnExcelSwIt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnDtSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcCnt.addEventHandler("onclick",this.stcCnt_onclick,this);
            this.btnMtSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea_mt.form.cboPostMtTypeCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea_mt.form.cboPostMtTypeCd.addEventHandler("onitemchanged",this.divSearchArea_mt_cboPostMtTypeCd_onitemchanged,this);
            this.divCrudBtn.form.btnAddMt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divCrudBtn.form.btnDeleteMt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divCrudBtn.form.btnModMt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcSWDesc.addEventHandler("onclick",this.stcTreeTitle_onclick,this);
            this.dsPostDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsPostDt.addEventHandler("onrowposchanged",this.dsPostDt_onrowposchanged,this);
            this.dsPostMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsPostMt.addEventHandler("onrowposchanged",this.dsPostMt_onrowposchanged,this);
            this.dsEduMt.addEventHandler("oncolumnchanged",this.dsEduMt_Oncolumnchanged,this);
            this.dsSwMt.addEventHandler("oncolumnchanged",this.dsSwMt_oncolumnchanged,this);
            this.dsBtnAuth.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0251_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
