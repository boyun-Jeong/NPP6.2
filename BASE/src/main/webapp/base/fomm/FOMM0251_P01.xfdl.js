(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0210_P01");
            this.set_titletext("게시글 생성 팝업");
            this.set_cssclass("");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,885);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_ADD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_POST_DT_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNtcYn", this);
            obj._setContents("<ColumnInfo><Column id=\"NTC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NTC_CD\">N</Col><Col id=\"NTC_CD_NM\">일반글</Col></Row><Row><Col id=\"NTC_CD\">Y</Col><Col id=\"NTC_CD_NM\">공지글</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostMtTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpl", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TMPL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TMPL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEduMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNUM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_CNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEduTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSwMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNUM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SW_VENDOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PURPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"SW_USE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SW_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcStaffMng", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL1_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LVL1_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL2_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL3_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL4_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL5_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL6_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL7_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL8_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL9_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAlarm", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_REF\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_PARAMS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComment", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommNotiSendMt", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSwTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00_02","1000","5","10",null,null,"60",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"Static00_01_00_02:0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5.00","487",null,"20","-400",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divFile","20","Static00_01:0",null,"133","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_url("comm::comFile.xfdl");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divTopIU","20.00","20",null,"100","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","0",null,"34","0",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcPostDtNo","0","0","120","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("게시글 번호");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcRegiDt","220.00","0","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("등록일시");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Edit("edtPostDtNo","stcPostDtNo:5","5",null,"24","stcRegiDt:5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcFrnm","490.00","0","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("작성자");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Calendar("calFrdt","stcRegiDt:5","5",null,"24","stcFrnm:5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcFrDeptNm","700.00","0","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("부서/팀명");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Edit("edtFrnm","stcFrnm:5","5",null,"24","stcFrDeptNm:5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Edit("edtFrDeptNm","stcFrDeptNm:5","5",null,"24","5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0.00","33",null,"34","0",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcPostDtType","490","33","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("게시판 종류");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcPostTmpl","700.00","33","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("템플릿 선택");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Combo("cboPostDtTypeCd","stcPostDtType:5","38",null,"24","stcPostTmpl:5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("5");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsPostMtTypeCd");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("공지구분;NULL");
            obj.set_readonly("true");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_01","0.00","66",null,"34","0",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","66","120","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("제목");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcNtcYn","490.00","66","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("공지글 여부");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:5","71",null,"24","stcNtcYn:5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validation("제목;NULL");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcUpPostTitle","0","33","120","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("상위 게시글 제목");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Radio("rdoNtcYn","stcNtcYn:5","70","205","26",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsNtcYn");
            obj.set_datacolumn("NTC_CD_NM");
            obj.set_codecolumn("NTC_CD");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_text("");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Edit("edtUpPostTitle","stcUpPostTitle:5","38",null,"24","stcPostDtType:5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Combo("cboPostTmpl","stcPostTmpl:5","38",null,"24","5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("7");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("템플릿;NULL");
            obj.set_innerdataset("dsTmpl");
            obj.set_codecolumn("TMPL_ID");
            obj.set_datacolumn("TMPL_CD_NM");
            obj.set_displaynulltext("- 선택 -");
            obj.set_text("");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","5","640",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divGrid","20","Static00_01_00:0",null,"195","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","260","24",null,null,null,null,null,null,this.divContent.form.divGrid.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("교육 조사");
            this.divContent.form.divGrid.addChild(obj.name, obj);

            obj = new Grid("grdSub","0","34",null,null,"0","0",null,null,null,null,this.divContent.form.divGrid.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsEduMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("none");
            obj.set_useSort("true");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"EDU\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"240\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"신청자\"/><Cell col=\"3\" text=\"신청부서\"/><Cell col=\"4\" text=\"내선\"/><Cell col=\"5\" text=\"교육구분\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"교육명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"교육기관명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"8\" text=\"교육일수/강의시수\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"9\" text=\"소요금액(부가세 포함)\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"10\" text=\"비고\"/><Cell col=\"11\" text=\"저장일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:REQ_USER_NM\"/><Cell col=\"3\" text=\"bind:REQ_DEPT_NM\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:TELNUM\"/><Cell col=\"5\" text=\"bind:EDU_TYPE_CD\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;combo&apos; : &apos;none&apos;\" displaytype=\"combocontrol\" combodataset=\"dsEduTypeCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" validation=\"교육구분;NULL\"/><Cell col=\"6\" text=\"bind:EDU_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"교육명;NULL\"/><Cell col=\"7\" text=\"bind:EDU_ORG_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"교육기관명;NULL\"/><Cell col=\"8\" text=\"bind:EDU_CNT_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"교육일수/강의시수;NULL\"/><Cell col=\"9\" text=\"bind:EDU_AMOUNT\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" editinputfilter=\"comma,alpha,dot,sign,space,symbol\" editinputtype=\"number\" textAlign=\"right\" displaytype=\"number\" validation=\"소요금액;NULL\"/><Cell col=\"10\" text=\"bind:RMK\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"11\" text=\"bind:FRDT\" displaytype=\"date\"/></Band></Format><Format id=\"SW\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"190\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"240\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"신청자\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"신청부서\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"내선\"/><Cell col=\"5\" text=\"필요 소프트웨어\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"수량\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"예상금액(부가세포함, 단위:천원)\"/><Cell col=\"8\" text=\"사용목적\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"9\" text=\"제조사\"/><Cell col=\"10\" text=\"사용방식\"/><Cell col=\"11\" text=\"비고\"/><Cell col=\"12\" text=\"저장일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:REQ_USER_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:REQ_DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:TELNUM\"/><Cell col=\"5\" text=\"bind:SW_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"필요 소프트웨어;NULL\"/><Cell col=\"6\" text=\"bind:SW_CNT\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" editinputfilter=\"comma,alpha,dot,sign,space,symbol\" editinputtype=\"number\" textAlign=\"center\" displaytype=\"number\" validation=\"수량;NULL\"/><Cell col=\"7\" text=\"bind:SW_AMT\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" editinputfilter=\"comma,alpha,dot,sign,space,symbol\" editinputtype=\"number\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:USE_PURPOSE\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" validation=\"사용목적;NULL\"/><Cell col=\"9\" text=\"bind:SW_VENDOR_NM\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"10\" displaytype=\"combocontrol\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;combo&apos; : &apos;none&apos;\" combodataset=\"dsSwTypeCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" text=\"bind:SW_USE_TYPE\"/><Cell col=\"11\" text=\"bind:RMK\" edittype=\"expr:REQ_USER_ID == Ex.util.getSession(&apos;gvUserId&apos;) ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:FRDT\" displaytype=\"date\"/></Band></Format></Formats>");
            this.divContent.form.divGrid.addChild(obj.name, obj);

            obj = new Div("swBtnDiv",null,"0","250","24","0",null,null,null,null,null,this.divContent.form.divGrid.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            this.divContent.form.divGrid.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","130",null,null,null,null,null,this.divContent.form.divGrid.form.swBtnDiv.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            obj.getSetter("skipComp").set("Y");
            this.divContent.form.divGrid.form.swBtnDiv.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60","24","65",null,null,null,null,null,this.divContent.form.divGrid.form.swBtnDiv.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            obj.getSetter("skipComp").set("Y");
            this.divContent.form.divGrid.form.swBtnDiv.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"0","60","24","0",null,null,null,null,null,this.divContent.form.divGrid.form.swBtnDiv.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divContent.form.divGrid.form.swBtnDiv.addChild(obj.name, obj);

            obj = new Div("divEditor","20","152",null,"335","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divEditor.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.divEditor.addChild(obj.name, obj);

            obj = new Static("stcConts","0","0","120",null,null,"0",null,null,null,null,this.divContent.form.divEditor.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("내용");
            this.divContent.form.divEditor.addChild(obj.name, obj);

            obj = new Div("divWebEditor","stcConts:5","5",null,null,"5","5",null,null,null,null,this.divContent.form.divEditor.form);
            obj.set_taborder("0");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            this.divContent.form.divEditor.addChild(obj.name, obj);

            obj = new Div("divSub","20.00","119",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","0",null,"34","0",null,null,null,null,null,this.divContent.form.divSub.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.divSub.addChild(obj.name, obj);

            obj = new Static("stcJobCate","0","0","120","34",null,null,null,null,null,null,this.divContent.form.divSub.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("업무 분류");
            this.divContent.form.divSub.addChild(obj.name, obj);

            obj = new Static("stcPlNm","490.00","0","100","34",null,null,null,null,null,null,this.divContent.form.divSub.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("PL");
            this.divContent.form.divSub.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","stcJobCate:5","5","195","24",null,null,null,null,null,null,this.divContent.form.divSub.form);
            obj.set_taborder("3");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("업무분류-1;NULL");
            obj.set_innerdataset("dsUpmu1");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_codecolumn("CMM_CD");
            obj.set_cursor("pointer");
            obj.set_validationGroup("fvValiCmp");
            obj.set_type("filterlike");
            obj.set_text("");
            this.divContent.form.divSub.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:5","5",null,"24","stcPlNm:5",null,null,null,null,null,this.divContent.form.divSub.form);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("업무분류-2;NULL");
            obj.set_innerdataset("dsUpmu2");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cursor("pointer");
            obj.set_validationGroup("fvValiCmp");
            obj.set_type("filterlike");
            obj.set_text("");
            this.divContent.form.divSub.addChild(obj.name, obj);

            obj = new Combo("cbo_plNm","stcPlNm:5","5","180","24",null,null,null,null,null,null,this.divContent.form.divSub.form);
            obj.set_taborder("12");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("PL;NULL");
            obj.set_innerdataset("dsSvcStaffMng");
            obj.set_codecolumn("STAFF_ID");
            obj.set_datacolumn("STAFF_NM");
            obj.set_cursor("pointer");
            obj.set_validationGroup("fvValiCmp");
            obj.set_type("filterlike");
            obj.set_text("");
            this.divContent.form.divSub.addChild(obj.name, obj);

            obj = new Div("divComment","Static00_01_00_02:0","20",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divComment","0","34",null,null,"0","0",null,null,null,null,this.divComment.form);
            obj.set_taborder("0");
            obj.set_async("false");
            obj.set_url("comm::comCommentDiv.xfdl");
            obj.set_background("white");
            obj.set_visible("true");
            this.divComment.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","87","24",null,null,null,null,null,null,this.divComment.form);
            obj.set_taborder("1");
            obj.set_text("댓글");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divComment.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","0","670","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnReply","20",null,"100","32",null,"14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("답글 작성");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","60",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5.00","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"70",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContent.form.divFile
            obj = new Layout("default","",0,0,this.divContent.form.divFile.form,function(p){});
            this.divContent.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTopIU.form
            obj = new Layout("default","",0,0,this.divContent.form.divTopIU.form,function(p){});
            this.divContent.form.divTopIU.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrid.form.swBtnDiv.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrid.form.swBtnDiv.form,function(p){});
            this.divContent.form.divGrid.form.swBtnDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrid.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrid.form,function(p){});
            this.divContent.form.divGrid.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divEditor.form.divWebEditor.form
            obj = new Layout("default","",0,0,this.divContent.form.divEditor.form.divWebEditor.form,function(p){});
            this.divContent.form.divEditor.form.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divEditor.form
            obj = new Layout("default","",0,0,this.divContent.form.divEditor.form,function(p){});
            this.divContent.form.divEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSub.form
            obj = new Layout("default","",0,0,this.divContent.form.divSub.form,function(p){});
            this.divContent.form.divSub.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComment.form.divComment
            obj = new Layout("default","",0,0,this.divComment.form.divComment.form,function(p){});
            this.divComment.form.divComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComment.form
            obj = new Layout("default","",0,0,this.divComment.form,function(p){});
            this.divComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1400,885,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divTopIU.form.edtPostDtNo","value","dsPostDt","POST_DT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divTopIU.form.calFrdt","value","dsPostDt","FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divTopIU.form.edtFrnm","value","dsPostDt","FRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divTopIU.form.edtFrDeptNm","value","dsPostDt","FR_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.divTopIU.form.cboPostTmpl","value","dsPostDt","POST_TMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divTopIU.form.edtTitle","value","dsPostDt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContent.form.divTopIU.form.rdoNtcYn","value","dsPostDt","NTC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divSub.form.cboUpmu1","value","dsPostDt","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divSub.form.cboUpmu2","value","dsPostDt","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.divTopIU.form.cboPostDtTypeCd","value","dsPostDt","POST_MT_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.divTopIU.form.edtUpPostTitle","value","dsPostDt","UP_POST_DT_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContent.form.divSub.form.cbo_plNm","value","dsPostDt","PL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comFile.xfdl");
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
            this._addPreloadList("fdl","comm::comCommentDiv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FOMM0251_P01.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("FOMM0251_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0251_P01
        * 화면(명)		︰ 게시글 생성 팝업
        * 메뉴(경로)	︰
        * 화면 설명	︰ SPP 게시글 생성 팝업
        * 작성자		︰ 정하림
        * 작성일		︰ 2024.12.24
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.01.14	정하림		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.formObj;

        this.pPopType = 'R';		// R: read / I: new / U: edit
        this.pPostDtNo = '';		// 부모화면에서 넘겨준 게시글 번호
        this.pUpPostNo = '';		// 부모화면에서 넘겨준 상위 게시글 번호
        this.pUpPostNm = '';
        this.pSelectedMtNo = '';
        this.pPostMtType = '';
        this.pReplyFlag = '';
        this.pWriteGubun = '';
        this.pAlarmGubun = '';
        this.pAttachYn = '';
        this.pUpPostLmId = '';
        this.pUpmu1 = '';
        this.pUpmu2 = '';
        this.pPlId = '';
        this.pPostAdm = false;
        this.pIsAlarmLink = false;

        this.pSelectedMtManager = ''; // 넘긴 그대로 JSON 형태
        this.currMtManager = ''; // 파싱해서 저장할 변수

        // 템플릿 :: Index / ID 변수
        this.prevIdx = 0;
        this.newIdx = 0;
        this.newValue = '';

        this.saveYn = "N";

        this.isAdmin = (Ex.util.getSession('gvAuthId').includes('SPP_ADM'));
        this.isPostAdm = '';
        this.myId = Ex.util.getSession('gvUserId');

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.formObj = obj;
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.divContent.form.divTopIU.form.edtTitle.setFocus();

        	// 게시판 종류에 따라 화면 분기 및 포지션 지정
        	// 그리드 추가하는 분기
        	var pHeight = nexacro.toNumber(this.getOwnerFrame().height);

        	if(this.pPostMtType == '03' || this.pPostMtType == '04'){ // SW 또는 교육 ; 하단에 그리드 추가

        		if(this.pReplyFlag){	// 답글이면
        			var gap = 20;
        			this.getOwnerFrame().set_height(this.divContent.form.divFile.getOffsetBottom() + this.divContent.form.divFile.getOffsetHeight() - gap);
        			// 가운데 자동 정렬
        			var nTop = parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(this.getOwnerFrame().height / 2) );
        			var nLeft = parseInt( (nexacro.getApplication().mainframe.width / 2) - Math.round(this.getOwnerFrame().width / 2) );
        			this.getOwnerFrame().set_top(nTop);
        			this.getOwnerFrame().set_left(nLeft);

        			return false;
        		}

        		// 버튼&권한 mapping && visible 처리
        		var arrBtn = [this.divContent.form.divGrid.form.swBtnDiv.form.btnAdd];		// 쓰기
        		Ex.util.setBtnVisible(this, 'write', arrBtn);
        			arrBtn = [this.divContent.form.divGrid.form.swBtnDiv.form.btnDelete];	// 삭제
        		Ex.util.setBtnVisible(this, 'delete', arrBtn);
        			arrBtn = [this.divContent.form.divGrid.form.swBtnDiv.form.btnExcel];	// 엑셀다운 - 게시글
        		Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

        		this.divContent.form.divGrid.set_visible(true);
        	}
        	else { // 일반 or 협업
        		var gap = (this.pPostMtType == '01') ? 20 : 0;
        		this.getOwnerFrame().set_height(this.divContent.form.divFile.getOffsetBottom() + this.divContent.form.divFile.getOffsetHeight() - gap);
        	}

        	// 가운데 자동 정렬
        	var nTop = parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(this.getOwnerFrame().height / 2) );
        	var nLeft = parseInt( (nexacro.getApplication().mainframe.width / 2) - Math.round(this.getOwnerFrame().width / 2) );
        	this.getOwnerFrame().set_top(nTop);
        	this.getOwnerFrame().set_left(nLeft);


        	// 중간 메뉴 추가하는 분기
        	if(this.pPostMtType == '02') // 협업일 경우
        	{
        		// 협업 처음 select
        		if(this.pPopType == 'U') {
        			var evt = nexacro.DSColChangeEventInfo;

        			// 업무분류
        			evt.columnid	= "UPMU_ID1";
        			evt.newvalue	= undefined;
        			this.dsOnColumnChanged(this.dsPostDt, evt);

        			evt.columnid	= "UPMU_ID2";
        			evt.newvalue	= undefined;
        			this.dsOnColumnChanged(this.dsPostDt, evt);
        		}

        		this.divContent.form.divSub.set_top(this.divContent.form.divTopIU.getOffsetTop() + this.divContent.form.divTopIU.getOffsetHeight() -1);
        		this.divContent.form.divSub.set_visible(true);
        	}

        	if(this.divContent.form.divSub.visible) // visible 처리가 되어 있다면 각 컴포넌트 위치 동적 변경
        	{
        		this.divContent.form.divEditor.set_top(this.divContent.form.divSub.getOffsetTop() + this.divContent.form.divSub.getOffsetHeight() - 1);
        	}
        	else
        	{
        		this.divContent.form.divEditor.set_top(this.divContent.form.divTopIU.getOffsetTop() + this.divContent.form.divTopIU.getOffsetHeight() - 1);
        	}

        	this.divContent.form.divFile.set_top(20 + this.divContent.form.divEditor.getOffsetTop() + this.divContent.form.divEditor.getOffsetHeight() - 1);
        	this.divContent.form.divGrid.set_top(20 + this.divContent.form.divFile.getOffsetTop() + this.divContent.form.divFile.getOffsetHeight() - 1);
        	this.divComment.form.divComment.set_height(this.divComment.getOffsetHeight() - this.divComment.form.divComment.getOffsetTop());

        	this.divComment.form.divComment.form.resetScroll();
        	this.divComment.form.resetScroll();
        	this.divComment.form.divComment.form.fnOnsize();
        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        // 게시글 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select01";               // 서비스명
            var sInDs = "dsCond=dsCond";                  	   // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsPostDt=dsPostDt";          		   // 서버에서 수신할 데이타셋
            var sArg = "";                   				   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 템플릿 조회
        this.fnSearchTmpl = function()
        {
        	// transaction
        	var sTranId = "select03";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select03";               // 서비스명
            var sInDs = "dsCond=dsCond";                  	   // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTmpl=dsTmpl";           		   // 서버에서 수신할 데이타셋
            var sArg = "";                   				   // 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 하단 그리드 데이터 조회
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

        // 공통 저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";                          									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/save01";                         							// 서비스명
            var sInDs = "dsPostDt=dsPostDt:U dsEduMt=dsEduMt:U dsSwMt=dsSwMt:U dsCond=dsCond";  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsPostDt=dsPostDt dsEduMt=dsEduMt dsSwMt=dsSwMt dsResult=dsResult";           			// 서버에서 수신할 데이타셋
            var sArg = "";                   													// 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);

        	// 교육조사 그리드 높이 조절
        	this.adjustDivGrid();
        }

        // 서비스별 담당자 조회
        this.fnSvcStaffMng = function()
        {
        	if(!this.dsPostDt.getColumnInfo("SVC_CLSS_CD")){
        		this.dsPostDt.addColumn("SVC_CLSS_CD", "STRING")
        		this.dsPostDt.addColumn("BSE_LVL2_CD", "STRING");
        	}
        	this.dsPostDt.setColumn(0, "SVC_CLSS_CD", "SR"); 		// 인프라
        	this.dsPostDt.setColumn(0, "BSE_LVL2_CD", this.dsPostDt.getColumn(0, "UPMU_ID2")); 	// 업무프로그램 폐기신청서

        	var sTranId = "fnSvcStaffMng";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/select03";								// 서비스명
            var sInDs = "dsCond=dsPostDt";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSvcStaffMng=dsSvcStaffMng";						// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 알림 보내기
        this.fnSendAlaram = function()
        {
        	// transaction
        	var sTranId = "sendAlarm";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "ALARM/send";               			// 서비스명
            var sInDs = "dsAlarm=dsAlarm";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";           		   					// 서버에서 수신할 데이타셋
            var sArg = "";                   				    // 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 헤아림톡 쪽지 발송
        this.fnSendTalk = function()
        {
        	// transaction
        	var sTranId = "send";														// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "TestSend/send";												// 서비스명
            var sInDs = "dsFommNotiSendMt=dsFommNotiSendMt dsUserList=dsUserList";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";															// 서버에서 수신할 데이타셋
            var sArg = "";																// 서버 @ParamVariable 인자와 맵핑됨
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
        			if(this.pPostMtType == '02'){ // 협업 일 때
        				var rowPos = this.dsPostDt.rowposition;

        				if(this.pPopType == 'U' ){
        					var aRow = this.dsSvcStaffMng.addRow();
        					this.dsSvcStaffMng.setColumn(aRow, "STAFF_ID",  this.dsPostDt.getColumn(rowPos, "PL_ID"));
        					this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM",  this.dsPostDt.getColumn(rowPos, "PL_NM"));
        					this.divContent.form.divSub.form.cbo_plNm.set_index(1);
        				}

        				var upmuId1 = this.dsPostDt.getColumn(rowPos, "UPMU_ID1");
        				var upmuId2 = this.dsPostDt.getColumn(rowPos, "UPMU_ID2");

        				var evt = nexacro.DSColChangeEventInfo;

        				evt.columnid	= "UPMU_ID1";
        				evt.newvalue	= upmuId1;
        				this.dsOnColumnChanged(this.dsPostDt, evt);

        				evt.columnid	= "UPMU_ID2";
        				evt.newvalue	= upmuId2;
        				this.dsOnColumnChanged(this.dsPostDt, evt);
        			}
        			// 상위 게시글 제목 & 게시글 제목 길어서 잘리는 경우 > tooltip 으로 표시
        			this.divContent.form.divTopIU.form.edtUpPostTitle.tooltiptext = this.dsPostDt.getColumn(this.dsPostDt.rowposition, "UP_POST_DT_TITLE");
        			this.divContent.form.divTopIU.form.edtTitle.tooltiptext 	  = this.dsPostDt.getColumn(this.dsPostDt.rowposition, "TITLE");

        			var webConts = this.dsPostDt.getColumn(this.dsPostDt.rowposition, 'CONTS')||'';
        			this.divContent.form.divEditor.form.divWebEditor.form.setContent(webConts, false);

        			Ex.core.toast(this, "10002");
        			break;

        		case "select03" :

        			break;

        		case "select04" :
        			// 교육조사 그리드 높이 조절
        			this.adjustDivGrid();

        			break;

        		case "save01" :
        			// 알림 보내기
        			this.fnSetAlarmParam(this.dsResult);

        			this.saveYn = "Y";
        			var param = {
        					id : "saveAlert"
        				  , msg : "10004"
        				  , arrparam : ['']
        				  , msgtype : "S"};
        			Ex.core.alert(this, param);
        			break;

        		case "fnSvcStaffMng" :
        			// 나중에 권한 처리 들어오게 되면 수정 필요
        			if(this.dsPostDt.getColumn(0, "PL_NM") == null){ // 새로운 게시글 생성할 경우
        				var aRow = this.dsSvcStaffMng.insertRow();
        				this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", Ex.core.word("- 선택 -"));

        				this.divContent.form.divSub.form.cbo_plNm.set_index(0);
        				this.divContent.form.divSub.form.cbo_plNm.set_text(Ex.core.word("- 선택 -"));
        			}else{
        				var aRow = this.dsSvcStaffMng.insertRow();
        				this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", Ex.core.word("- 선택 -"));
        				this.divContent.form.divSub.form.cbo_plNm.set_text(Ex.core.word(this.dsPostDt.getColumn(rowPos, "PL_NM")));
        			}
        			break;

        		case "sendAlarm" :
        			//trace("알림 전송 완료")
        			break;

        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "postReplyPop" :	// 답글 팝업이 close된 후
        			if(varValue == "Y")
        				Ex.core.pclose(this, 'save');
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
        		case "etcTypeAlert" :
        			this.divContent.form.divGrid.form.grdSub.setCellPos(11);
        			this.divContent.form.divGrid.form.grdSub.showEditor();
        			break;

        		case "saveConfirm" :
        			this.divContent.form.divFile.form.fnUploadFiles();
        			break;

        		case "saveAlert" :
        			Ex.core.pclose(this, this.saveYn); // saveYn 을 함께 보냄
        			break;

        		case "tmplSaveConfirm" :
        			if(varValue){
        				this.divContent.form.divTopIU.form.cboPostTmpl.set_index(this.newIdx);  // 인덱스 업데이트

        				// dsTmpl-CONTS ==> dsPostDt-CONTS 에 표시
        				var rowPos = 0;

        				for(var i=0; i<this.dsTmpl.rowcount; i++){
        					if(Number(this.dsTmpl.getColumn(i, 'TMPL_ID')) === Number(this.newValue)){ // number로 타입 맞추기
        						rowPos = i;
        					}
        				}

        				if(rowPos >= 0){
        					var tmplConts = this.dsTmpl.getColumn(rowPos, 'CONTS');
        					this.divContent.form.divEditor.form.divWebEditor.form.setContent(tmplConts, false);
        				}
        				else {
        					this.divContent.form.divTopIU.form.cboPostTmpl.set_index(this.prevIdx); // 이전 인덱스 유지
        				}

        			}
        			else {
        				this.divContent.form.divTopIU.form.cboPostTmpl.set_index(this.prevIdx); // 이전 인덱스 유지
        			}

        			break;
        	}
        }

        // 파일 업로드 default callback
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	// TO DO
        	// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	switch(sSvcId)
        	{
        		case "fileSvc" :
        			this.fnSave();

        			break;
        	}

        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 알림 보내기 - 글 관련
        this.fnSetAlarmParam = function(objDs){

        	if(this.pReplyFlag){ // 답글
        		if(!this.pAlarmGubun.includes("S")){ // 알림 답글 설정 안되어 있다면
        			//trace("-------------답글 설정 안되어 있음--------------")
        			return false;
        		}
        	}else{
        		if(!this.pAlarmGubun.includes("P")){ // 알림 게시글 설정 안되어 있다면
        			//trace("-------------게시글 설정 안되어 있음--------------")
        			return false;
        		}
        	}

        	//trace("-------------fnSetAlarmParam--------------")
        	var userCnt = 0;
        	var userIdArr = [];
        	var paramArr = [];

        	var params = {"pPostNo": objDs.getColumn(0, "POST_DT_NO").toString(), "pPostMtType": objDs.getColumn(0, "POST_MT_TYPE_CD")};
        	paramArr.push(params);

        	var postMtTitle = objDs.getColumn(0, 'POST_MT_TITLE');
        	var postDtTitle = objDs.getColumn(0, 'TITLE');
        	var userNm = Ex.util.getSession('gvUserNm');
        	var deptNm = Ex.util.getSession('gvDeptNm');
        	var targetId = (this.pReplyFlag == true) ? this.pUpPostLmId : this.currMtManager; // UP_POST_DT_LMID
        	var alarmTypeCd = (this.pReplyFlag == true) ? 'CDALM05' : 'CDALM06'; // 답글이면 05, 그냥 글이면 06
        	var alarmRef = this.getOwnerFrame().url;

        	var title1 = `[ ${postMtTitle} ]의 새로운 게시글 알림`;
        	var title2 = `내가 작성한 글 [ ${this.pUpPostNm} ]에 대한 답글 알림`;
        	var conts1 = `${postMtTitle}-${userNm}(${deptNm})님의 게시글 등록 : [ ${postDtTitle} ]`;  	// 게시글
        	var conts2 = `${postMtTitle}-${userNm}(${deptNm})님의 [ ${this.pUpPostNm} ]에 대한 답글 작성 : [ ${postDtTitle} ]`;	// 답글
        	var conts3 = `내가 작성한 글 [ ${this.pUpPostNm} ]의 요청내용에 대한 답변이 작성되었습니다.`;
        	var alarmConts = (this.pReplyFlag == true) ? conts2 : conts1;
        	var alarmParams = JSON.stringify(paramArr); // 알림발생 화면을 열기 위한 파라미터 전달

        	this.dsAlarm.clearData();
        	this.dsFommNotiSendMt.clearData();
        	this.dsUserList.clearData();

        	if(!Ex.isEmpty(this.currMtManager)){
        		userIdArr = this.currMtManager.split(",");

        		if(!Ex.isEmpty(objDs.getColumn(0, 'PL_ID'))){ 		// 협업 - PL 지정 후 게시글 저장할 경우
        			var plId = objDs.getColumn(0, 'PL_ID');
        			var plNm = objDs.getColumn(0, 'PL_NM');

        			// (협업 - 게시글 PM에게 헤아림톡 쪽지)
        			this.dsFommNotiSendMt.setAddRow();
        			this.dsFommNotiSendMt.setColumn(0, "SEND_USER_ID", Ex.util.getSession('gvUserId'));
        			this.dsFommNotiSendMt.setColumn(0, "SEND_USER_NM", userNm);
        			this.dsFommNotiSendMt.setColumn(0, "SEND_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        			this.dsFommNotiSendMt.setColumn(0, "SEND_DEPT_NM", deptNm);
        			this.dsFommNotiSendMt.setColumn(0, "SEND_TYPE_CD", "TALK");
        			this.dsFommNotiSendMt.setColumn(0, "SEND_GUBUN", "05");

        			this.dsFommNotiSendMt.setColumn(0, "TITLE", title1);
        			this.dsFommNotiSendMt.setColumn(0, "MSG_CONTS", conts1);

        			var aRow = this.dsUserList.setAddRow();
        			this.dsUserList.setColumn(aRow, "USER_ID", plId);

        			this.fnSendTalk(); // 게시글 PL에게 헤아림톡 전송

        			userIdArr.push(plId); 	// 해당 PL에게도 알림 전송하도록 배열에 추가
        		}
        		userCnt = userIdArr.length;

        	}else{
        		if(this.pReplyFlag && this.pPostMtType == '02'){ // 답글이고 협업이면
        			alarmConts = conts3;
        		}

        		// dsAlarm 에 데이터 세팅 (답글 알림)
        		var rowpos = this.dsAlarm.setAddRow();
        		this.dsAlarm.setColumn(rowpos, "USER_ID", targetId); // 알림 받을 target ID 적으면 됨
        		this.dsAlarm.setColumn(rowpos, "ALARM_TYPE_CD", alarmTypeCd);
        		this.dsAlarm.setColumn(rowpos, "ALARM_REF", alarmRef);
        		this.dsAlarm.setColumn(rowpos, "ALARM_CONTS", alarmConts);
        		this.dsAlarm.setColumn(rowpos, "ALARM_PARAMS", alarmParams);

        		// (답글 헤아림톡 쪽지)
        		this.dsFommNotiSendMt.setAddRow();
        		this.dsFommNotiSendMt.setColumn(0, "SEND_USER_ID", Ex.util.getSession('gvUserId'));
        		this.dsFommNotiSendMt.setColumn(0, "SEND_USER_NM", userNm);
        		this.dsFommNotiSendMt.setColumn(0, "SEND_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        		this.dsFommNotiSendMt.setColumn(0, "SEND_DEPT_NM", deptNm);
        		this.dsFommNotiSendMt.setColumn(0, "SEND_TYPE_CD", "TALK");
        		this.dsFommNotiSendMt.setColumn(0, "SEND_GUBUN", "07");

        		this.dsFommNotiSendMt.setColumn(0, "TITLE", title2);
        		this.dsFommNotiSendMt.setColumn(0, "MSG_CONTS", alarmConts);

        		var aRow = this.dsUserList.setAddRow();
        		this.dsUserList.setColumn(aRow, "USER_ID", targetId);

        		this.fnSendTalk(); // 작성자에게 헤아림톡 전송
        	}

        	if(userCnt > 0){ // Manager 가 여러 명인 경우
        		for(var i=0; i<userCnt; i++){
        			var rowpos = this.dsAlarm.setAddRow();
        			//trace(" userIdArr :: ",  userIdArr[i])

        			this.dsAlarm.setColumn(rowpos, "USER_ID",  userIdArr[i]); // 알림 받을 target ID 적으면 됨
        			this.dsAlarm.setColumn(rowpos, "ALARM_TYPE_CD", alarmTypeCd);
        			this.dsAlarm.setColumn(rowpos, "ALARM_REF", alarmRef);
        			this.dsAlarm.setColumn(rowpos, "ALARM_CONTS", alarmConts);
        			this.dsAlarm.setColumn(rowpos, "ALARM_PARAMS", alarmParams);
        		}
        	}

        	this.fnSendAlaram(); // 알림 전송

        }

        // 알림 보내기 - 댓글 관련
        this.fnAfterCommentSave = function(rowPos){
        	if(!this.pAlarmGubun.includes("C")){ // 알림 댓글 설정 안되어 있다면
        		return false;
        	}

        	//trace("-------------fnAfterCommentSave--------------")
        	this.dsAlarm.clearData();
        	var rowpos = this.dsAlarm.setAddRow();

        	var postMtTitle = this.dsPostDt.getColumn(0, 'POST_MT_TITLE');
        	var postDtTitle = this.dsPostDt.getColumn(0, 'TITLE');
        	var postDtNo = this.dsPostDt.getColumn(0, 'POST_DT_NO');
        	var postMtTypeCd = this.dsPostDt.getColumn(0, 'POST_MT_TYPE_CD');
        	var paramArr = [];
        	var params = {"pPostNo": postDtNo.toString(), "pPostMtType": postMtTypeCd};
        	paramArr.push(params);

        	var dtAuthor = this.dsPostDt.getColumn(0, 'LMID');
        	var commentConts = this.dsComment.getColumn(rowPos, 'COMMENT_CONTS');
        	var userNm = Ex.util.getSession('gvUserNm');
        	var deptNm = Ex.util.getSession('gvDeptNm');

        	var alarmTypeCd = 'CDALM01';
        	var alarmRef = this.getOwnerFrame().url;
        	var alarmConts = `[${postMtTitle}-${postDtTitle}] ${userNm}(${deptNm})님의 댓글 등록 : [${commentConts}]`;
        	var alarmParams = JSON.stringify(paramArr); // 알림발생 화면을 열기 위한 파라미터 전달


        	// dsAlarm 에 데이터 세팅
        	this.dsAlarm.setColumn(rowpos, "USER_ID", dtAuthor); // 알림 받을 target ID 적으면 됨
        	this.dsAlarm.setColumn(rowpos, "ALARM_TYPE_CD", alarmTypeCd);
        	this.dsAlarm.setColumn(rowpos, "ALARM_REF", alarmRef);
        	this.dsAlarm.setColumn(rowpos, "ALARM_CONTS", alarmConts);
        	this.dsAlarm.setColumn(rowpos, "ALARM_PARAMS", alarmParams);

        	this.fnSendAlaram(); // 트랜잭션

        }


        this.fnOpenPop = function(data)
        {
        	var type = data.type||'';
        	var typeNm = '';
        	var url = '';
        	var pPostNo = data.postNo||'';
        	var pPopType = pPostNo ? 'U' : 'I';
        	var pUpPostNo = data.upPostNo||'';
        	var pUpPostNm = data.upPostNm||'';
        	var pSelectedMtNo = data.selectedMtNo||'';
        	var pPostMtType = data.postMtType||'';
        	var pSelectedDeptNm = data.selectedDeptNm||'';
        	var pSelectedDeptCd = data.selectedDeptCd||'';
        	var pSelectedLvl = data.selectedLvl||'';
        	var replyFlag = data.replyFlag||'';
        	var pUpPostLmId = data.upPostLmId||'';
        	var pAlarmGubun = data.alarmGubun||'';
        	var pUpmu1 = data.upmu1||'';
        	var pUpmu2 = data.upmu2||'';
        	var pPlId = data.plId||'';
        	var popId = "postPop";

        	if( type == 'M' ){
        		// 게시판 관련

        		typeNm = '게시판';
        		url = "fomm::FOMM0251_P02.xfdl"; // 게시판 팝업 url
        	} else {
        		// 게시글 관련
        		if(replyFlag) popId = "postReplyPop"; // 답글로 열린 팝업 flag 처리

        		typeNm = '게시글';
        		url = "fomm::FOMM0251_P01.xfdl"; // 게시글 팝업 url
        	}

        	Ex.core.popup(
        			this,
        			popId,				 			 	// 답글 작성할 경우 동일한 팝업 표시해야 하는데, 동일한 ID 로 띄울 수 없으므로 조치
        			url,             					 // <--- 팝업창 오픈 Url
        			{ title				: Ex.core.word(typeNm) + ' ' + Ex.core.word('생성'),
        			  pPopType			: pPopType,
        			  pPostNo			: pPostNo,			 // U, R일 경우
        			  pUpPostNo			: pUpPostNo, 		 // 상위 게시판 or 상위 게시글 지정할 경우
        			  pUpPostNm			: pUpPostNm,
        			  pSelectedMtNo		: pSelectedMtNo, //게시판 선택 후 게시글 추가할 경우
        			  pPostMtType		: pPostMtType, 	 // 게시판 종류
        			  pSelectedDeptNm 	: pSelectedDeptNm,
        			  pSelectedDeptCd 	: pSelectedDeptCd,
        			  pSelectedLvl	  	: pSelectedLvl,
        			  pUpPostLmId		: pUpPostLmId,
        			  pAlarmGubun		: pAlarmGubun,
        			  pUpmu1			: pUpmu1,
        			  pUpmu2			: pUpmu2,
        			  pPlId		  		: pPlId,
        			  pReplyFlag		: replyFlag
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"
        	);
        }


        // component init
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.divContent.form.divGrid.form.grdSub.displayRowType();

        	this.fnGetCmmCd();		// 공통코드 조회

        	this.pPopType 	= (this.getOwnerFrame().pPopType||'').toUpperCase();
        	this.pPostDtNo	= this.getOwnerFrame().pPostNo||'';
        	this.pUpPostNo 	= this.getOwnerFrame().pUpPostNo||'';
        	this.pUpPostNm = this.getOwnerFrame().pUpPostNm||'';
        	this.pSelectedMtNo = this.getOwnerFrame().pSelectedMtNo||'';
        	this.pPostMtType = this.getOwnerFrame().pPostMtType||'';
        	this.pReplyFlag = this.getOwnerFrame().pReplyFlag||this.getOwnerFrame().pFlag||'';
        	this.pWriteGubun = this.getOwnerFrame().pWriteGubun||'';
        	this.pAlarmGubun = this.getOwnerFrame().pAlarmGubun||'';
        	this.pAttachYn = this.getOwnerFrame().pAttachYn||'';
        	this.pUpPostLmId = this.getOwnerFrame().pUpPostLmId||'';
        	this.pUpmu1 = this.getOwnerFrame().pUpmu1||'';
        	this.pUpmu2 = this.getOwnerFrame().pUpmu2||'';
        	this.pPlId = this.getOwnerFrame().pPlId||'';
        	this.pPostAdm = this.getOwnerFrame().pPostAdm||'';
        	this.pSelectedMtManager = this.getOwnerFrame().pSelectedMtManager||'';
        	this.pIsAlarmLink = this.getOwnerFrame().pIsAlarmLink||'';

        	if(!Ex.isEmpty(this.pSelectedMtManager)){
        		try{
        			var jsonArr = JSON.parse(this.pSelectedMtManager);
        			var userIdList = jsonArr.map(function(item){
        				return item.USER_ID;
        			})
        			this.currMtManager = userIdList.join(",");
        			this.isPostAdm = (this.currMtManage || "")
        						.split(",")
        						.map(id => id.trim())
        						.includes(this.myId);

        			//trace("게시판 관리자 : ", this.currMtManager)
        		}catch (e){
        			return e.message;
        		}
        	}

        	if(this.pPostMtType == '03') { // sw 조사일때 그리드 정보 변경
        		this.divContent.form.divGrid.form.grdSub.set_formatid("SW");
        		this.divContent.form.divGrid.form.stcTitle.set_text("소프트웨어 조사");
        		this.divContent.form.divGrid.form.grdSub.binddataset = "dsSwMt";
        	}

        	var evt = nexacro.DSColChangeEventInfo;

        	// 업무분류
        	evt.columnid = "UPMU_ID1";
        	evt.newvalue = undefined;
        	this.dsOnColumnChanged(this.dsPostDt, evt);

        	evt.columnid = "UPMU_ID2";
        	evt.newvalue = undefined;
        	this.dsOnColumnChanged(this.dsPostDt, evt);

        	// 첨부파일 setting
        	var oParam = {
        		 sSvcId		: 'fileSvc'				// divFile callback 후처리용 서비스 ID
        		,limitMinCnt: 0						// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3						// 파일 최대 갯수; default 5
        		,limitSize	: 100					// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'fomm'				// 폴더명(업무명)
        		,tableName	: 'FOMM_POST_DT'		// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: this.pPostDtNo||''	// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''					// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''					// 테이블 PK3 (복합 키인 경우 사용)
        		,fileDownYn	: ''					// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: this.pAttachYn		// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''					// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};

        	switch(this.pPopType)
        	{
        		case "I" :
        			if(this.pAttachYn == "N") this.divContent.form.divFile.form.setConfig(this, oParam, '', true, false);
        			else this.divContent.form.divFile.form.setConfig(this, oParam);

        			this.setGrdBtnVisible(true, true);
        			this.divContent.form.divTopIU.set_visible(true);
        			this.divBottom.form.btnSave.set_visible(true);
        			this.divContent.form.divEditor.form.divWebEditor.form.initCreate();

        			// 댓글 안보이도록 width 처리
        			var pWidth = nexacro.toNumber(this.getOwnerFrame().width);
        			this.getOwnerFrame().set_width(pWidth - 400 + 20);

        			this.dsCond.setColumn(0, 'POST_MT_NO', this.pSelectedMtNo);
        			this.fnSearchTmpl(); // 게시판 템플릿 가져오기

        			this.dsPostDt.clearData();
        			var rowPos = this.dsPostDt.setAddRow();

        			if(this.pReplyFlag && this.pPostMtType == '02'){ // 답글이고 협업이면
        				this.dsPostDt.setColumn(this.dsPostDt.rowposition, "UPMU_ID1", this.pUpmu1);
        				this.dsPostDt.setColumn(this.dsPostDt.rowposition, "UPMU_ID2", this.pUpmu2);
        				//trace("this.pPlId : ", this.pPlId);
        				this.dsPostDt.setColumn(this.dsPostDt.rowposition, "PL_ID", this.pPlId);
        			}

        			if(!Ex.isEmpty(this.pUpPostNo) && !Ex.isEmpty(this.pUpPostNm)){
        				this.dsPostDt.setColumn(rowPos, 'UP_POST_DT_NO', this.pUpPostNo); 		// 상위게시글번호 표시
        				this.dsPostDt.setColumn(rowPos, 'UP_POST_DT_TITLE', this.pUpPostNm);	// 상위게시글제목 표시(답글)

        				// 상위 게시글 제목 길어서 잘리는 경우 > tooltip 으로 표시
        				this.divContent.form.divTopIU.form.edtUpPostTitle.tooltiptext = this.dsPostDt.getColumn(rowPos, "UP_POST_DT_TITLE");
        			}

        			this.dsPostDt.setColumn(rowPos, 'POST_MT_TYPE_CD', this.pPostMtType);
        			this.dsPostDt.setColumn(rowPos, 'POST_MT_NO', this.pSelectedMtNo);
        			this.dsPostDt.setColumn(rowPos, 'NTC_YN', 'N'); // 일반글 default로 설정

        			this.dsPostDt.setColumn(rowPos, 'FRNM', Ex.util.getSession('gvUserNm'));
        			this.dsPostDt.setColumn(rowPos, 'FR_DEPT_NM', Ex.util.getSession('gvDeptNm'));

        			break;

        		case "U" :
        			if(!this.pWriteGubun.includes("C")){ // 댓글 설정이 안되어 있다면 댓글창 숨기기
        				// 댓글 안보이도록 width 처리
        				var pWidth = nexacro.toNumber(this.getOwnerFrame().width);
        				this.getOwnerFrame().set_width(pWidth - 400 + 20);
        			}else{ // 댓글 설정 되어있으면 댓글창 보여주기
        				var oCmtParam = {
        					  tableName		: 'FOMM_POST_DT'
        					, primaryKey1	: this.pPostDtNo||''
        					, primaryKey2	: ''
        					, primaryKey3	: ''
        					, extCol1		: ''
        					, extCol2		: ''
        					, extCol3		: ''
        					, extCol4		: ''
        					, extCol5		: ''
        					, nDispComment	: ''
        				};
        				this.fnOpencomment(oCmtParam);
        			}

        			this.setGrdBtnVisible(true, true);

        			if(!this.pWriteGubun.includes("S")){  // 답글 설정이 안되어 있다면 답글 버튼 숨기기
        				this.divBottom.form.btnReply.set_visible(false);
        			}else{
        				this.divBottom.form.btnReply.set_visible(true);
        			}

        			if(this.pAttachYn == "N"){
        				//trace("this.pAttachYn :: ", this.pAttachYn)
        				this.divContent.form.divFile.form.setConfig(this, oParam, '', true, false);
        			}
        			else {
        				this.divContent.form.divFile.form.setConfig(this, oParam);
        			}

        			this.divBottom.form.btnSave.set_visible(true);
        			this.divContent.form.divEditor.form.divWebEditor.form.initCreate();

        			var rowPos = this.dsCond.rowposition;

        			this.dsCond.setColumn(rowPos, 'POST_MT_NO', this.pSelectedMtNo);
        			this.fnSearchTmpl(); // 게시판 종류 및 템플릿 가져오기

        			this.dsCond.setColumn(rowPos, 'POST_DT_NO', this.pPostDtNo);
        			this.dsCond.setColumn(rowPos, 'NTC_ADD_YN', 'N') // 한 게시물 조회할 경우 - 상단 공지 제외하는 파라미터 보내기
        			this.fnSearch();

        			if(this.pPostMtType == '03' || this.pPostMtType == '04'){ // SW/IT 게시판
        				// Grid 저장된 데이터 가져오기
        				var grdFormatId = this.divContent.form.divGrid.form.grdSub.formatid;
        				this.dsCond.setColumn(rowPos, 'REQ_TYPE_NM', grdFormatId);

        				//trace(this.dsCond.saveXML())
        				this.fnSearchGrid();
        			} else {
        				if(this.pWriteGubun.includes("S")){
        					this.divBottom.form.btnReply.set_visible(true);	// 답글 작성은 일반/협업 게시판에서만 가능
        				}else{
        					this.divBottom.form.btnReply.set_visible(false);
        				}

        			}

        			break;

        		case "R" :
        		default	 :
        			//trace("this.pIsAlarmLink :: ", this.pIsAlarmLink)
        			var closeFlag = false;
        			if(this.pIsAlarmLink){ // 알림 열람 화면일 경우 댓글창 없애기
        				closeFlag = true;
        			}

        			this.setGrdBtnVisible(true, true);

        			this.divContent.form.divFile.form.setConfig(this, oParam, '', true);
        			this.divContent.form.divEditor.form.divWebEditor.form.initCreate(true);

        			var oCmtParam = {
        				  tableName		: 'FOMM_POST_DT'
        				, primaryKey1	: this.pPostDtNo||''
        				, primaryKey2	: ''
        				, primaryKey3	: ''
        				, extCol1		: ''
        				, extCol2		: ''
        				, extCol3		: ''
        				, extCol4		: ''
        				, extCol5		: ''
        				, nDispComment	: ''
        			};
        			this.fnOpencomment(oCmtParam, closeFlag);

        			// 저장 button visible false
        			this.divBottom.form.btnSave.set_visible(false);

        			if(!this.pWriteGubun.includes("S") || this.pIsAlarmLink){  // 답글 설정이 안되어 있거나 알림 열람 화면일 경우 답글 버튼 숨기기
        				this.divBottom.form.btnReply.set_visible(false);
        			}else{
        				this.divBottom.form.btnReply.set_visible(true);
        			}

        			// component readonly
        			this.divContent.form.divTopIU.form.edtTitle.set_readonly(true);
        			this.divContent.form.divSub.form.cboUpmu1.set_readonly(true);
        			this.divContent.form.divSub.form.cboUpmu2.set_readonly(true);
        			this.divContent.form.divSub.form.cbo_plNm.set_readonly(true);
        			this.divContent.form.divTopIU.form.cboPostTmpl.set_readonly(true);

        			if(this.pPostAdm){ // 게시판 관리자인 경우
        				this.divContent.form.divTopIU.form.rdoNtcYn.set_readonly(false); // 공지글 올리기 가능
        				this.divBottom.form.btnSave.set_visible(true);
        			}else{
        				this.divContent.form.divTopIU.form.rdoNtcYn.set_readonly(true);
        			}

        			this.dsCond.setColumn(rowPos, 'POST_MT_NO', this.pSelectedMtNo);
        			this.fnSearchTmpl(); // 게시판 종류 및 템플릿 가져오기

        			this.dsCond.setColumn(this.dsCond.rowposition, 'POST_DT_NO', this.pPostDtNo);
        			this.dsCond.setColumn(this.dsCond.rowposition, 'NTC_ADD_YN', 'N') // 한 게시물 조회할 경우 - 상단 공지 제외하는 파라미터 보내기
        			this.fnSearch();

        			if(this.pPostMtType == '03' || this.pPostMtType == '04'){ // SW/IT 게시판
        				// Grid 저장된 데이터 가져오기
        				var grdFormatId = this.divContent.form.divGrid.form.grdSub.formatid;
        				this.dsCond.setColumn(rowPos, 'REQ_TYPE_NM', grdFormatId);

        				this.fnSearchGrid();
        			} else {
        				if(this.pWriteGubun.includes("S")){
        					this.divBottom.form.btnReply.set_visible(true);	// 답글 작성은 일반/협업 게시판에서만 가능
        				}else{
        					this.divBottom.form.btnReply.set_visible(false);
        				}
        			}

        			break;
        	}

        	this.divContent.set_visible(true);
        }


        this.fnOpencomment = function(param, flag)
        {
        	var nMargin = 20;
        	this.divComment.set_visible(true);
        	this.divComment.form.divComment.form.setConfig(this, param);

        	if(flag)	this.divComment.form.divComment.form.closeComment('', false, true); // 댓글 input 창 숨기기

        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['EDU_TYPE_CD',	'SW_TYPE_CD',	'POST_MT_TYPE_CD', 'BIZC0000']		// 조회할 상위코드
        		,codeDiv: ['CMM_CD',		'CMM_CD',		'CMM_CD',			'']				// 조회할 코드의 업무구분
        		,optStr	: ['SEL',			'SEL',			'SEL', 				'ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y',			'Y',				'Y']			// 사용여부
        		,filter	: ['', '', '', '']											// filterStr
        		,objDs	: [this.dsEduTypeCd, this.dsSwTypeCd, this.dsPostMtTypeCd, this.dsUpmu1]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }


        // dataset data setting
        this.fnSetMt = function()
        {
        	var rowpos = this.dsPostDt.rowposition;
        	var webConts = this.divContent.form.divEditor.form.divWebEditor.form.getContent();
        	this.dsPostDt.setColumn(rowpos, 'CONTS', webConts);
        }

        // validation
        this.fnCheckValidate = function()
        {
        	// component validation
        	if( !Ex.util.checkValidate(this.divContent.form.divTopIU, "fvValiCmp") )
        		return false;
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") )
        		return false;

        	// Grid Validation
        	if( !this.divContent.form.divGrid.form.grdSub.checkValidate() )
        		return false;

        	if(this.pPostMtType == '02'){ // 협업일 경우에만 divSub 처리
        		if( !Ex.util.checkValidate(this.divContent.form.divSub, "fvValiCmp") )
        		return false;
        	}


        	// 게시종료 > 게시시작 validation
        	var rowpos = this.dsPostDt.rowposition;
        	var BEGIN_DATE	= this.dsPostDt.getColumn(rowpos, 'BEGIN_DATE');
        	var BEGIN_TIME 	= this.dsPostDt.getColumn(rowpos, 'BEGIN_TIME');
        	var END_DATE 	= this.dsPostDt.getColumn(rowpos, 'END_DATE');
        	var END_TIME 	= this.dsPostDt.getColumn(rowpos, 'END_TIME');
        	var beginDt	= Ex.util.strToDate(BEGIN_DATE + BEGIN_TIME);
        	var endDt	= Ex.util.strToDate(END_DATE + END_TIME);

        	if(beginDt > endDt) {
        		var param = {
        				id : "beginDtLateAlert"
        			  , msg : "10013"
        			  , arrparam : [Ex.core.word('공지시작일시'), Ex.core.word('공지종료일시')]
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	// 내용 validation
        	var webConts = this.divContent.form.divEditor.form.divWebEditor.form.getContent()||'';
        	this.dsPostDt.setColumn(this.dsPostDt.rowposition, "CONTS", webConts);

        	if(this.dsPostDt.getColumn(0, "CONTS").trim() == "<p>&nbsp;</p>"){
        		var param = {
        				id : "webContsEmptyAlert"
        			  , msg : "11001"
        			  , arrparam : [Ex.core.word('내용')]
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}

        // 	// 그리드 최소 한 행 존재하는지 check
        // 	trace("::::::::::::::::::::: " +this.pPostMtType);
        // 	var ds = (this.pPostMtType == '03') ? this.dsSwMt : this.dsEduMt;
        // 	var param = (this.pPostMtType == '03') ? "SW조사" : "IT교육";
        // 	var grdRowCnt = ds.getRowCountNF();
        //
        // 	if(grdRowCnt < 1 && !this.isAdmin && !this.isPostAdm){
        // 		var param = {
        // 				id : "grdContsEmptyAlert"
        // 			  , msg : "{0} 그리드에 데이터가 한 개 이상 존재해야 합니다."
        // 			  , arrparam : [param]
        // 			  , msgtype : "I"};
        // 		Ex.core.alert(this, param);
        //
        // 		return false;
        // 	}

        	return true;
        }

        // 그리드 데이터 추가(교육조사 및 SW조사)
        this.fnAddGridRow = function(objDs){
        	var rowPos = objDs.setInsertRow(objDs.rowposition+1);

        	objDs.setColumn(rowPos, 'REQ_USER_ID', Ex.util.getSession('gvUserId'));
        	objDs.setColumn(rowPos, 'REQ_USER_NM', Ex.util.getSession('gvUserNm'));
        	objDs.setColumn(rowPos, 'REQ_DEPT_NM', Ex.util.getSession('gvDeptNm'));
        	objDs.setColumn(rowPos, 'TELNUM', Ex.util.getSession('gvTelnum'));
        	objDs.setColumn(rowPos, 'POST_DT_NO', this.pPostDtNo);
        	if(objDs == this.dsSwMt){	// SW 그리드면 사용방식 기본값 세팅
        		objDs.setColumn(rowPos, 'SW_USE_TYPE', '01');
        	}

        	if(!Ex.isEmpty(this.pPostDtNo) && this.pPopType != 'I') { // popType이 U(수정)이거나 R일 경우 로우플래그가 I이면 postDtNo UI상에서 보내기
        		objDs.addColumn('POPTYPE', 'string');
        		objDs.setColumn(rowPos, 'POPTYPE', this.pPopType);
        		objDs.setColumn(rowPos, 'POST_DT_NO', this.pPostDtNo);
        	}

        	// 교육조사 그리드 높이 조절
        	this.adjustDivGrid();
        }

        // 교육조사 div 높이조절
        this.adjustDivGrid = function()
        {
        	var objDs = (this.pPostMtType == '03') ?  this.dsSwMt : this.dsEduMt;
        	var adjustHeight = (objDs.rowcount > 3) ? objDs.rowcount * 32 + 84 : 195;
        	this.divContent.form.divGrid.setOffsetHeight(adjustHeight);
        	this.divContent.form.resetScroll();
        }

        // Grid Btn visible 처리
        this.setGrdBtnVisible = function(v1, v2){
        	//trace("this.setGrdBtnVisible :", v1, v2)
        	this.divContent.form.divGrid.form.swBtnDiv.form.btnAdd.set_visible(v1);
        	this.divContent.form.divGrid.form.swBtnDiv.form.btnDelete.set_visible(v2);
        	Ex.util.setBtnAlign(this.divContent.form.divGrid.form.swBtnDiv, 'right', true);
        	this.divContent.form.divGrid.form.swBtnDiv.set_visible(true);
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objDs;
        	objDs = (this.pPostMtType == '03') ?  this.dsSwMt : this.dsEduMt;
        	var title = this.divContent.form.divGrid.form.stcTitle.text;
        	title = title.replace(/\s+/g, "");

        	switch(obj.name)
        	{
        		case "btnAdd" : 	// 그리드 로우 추가
        			this.fnAddGridRow(objDs);
        			break;

        		case "btnExcel" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.divContent.form.divGrid.form.grdSub],
           				Sheet	: [title],
           				FileNm	: [title],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnReply" :
        			var popData = {
        							postNo : '',
        							selectedMtNo : this.pSelectedMtNo,
        							type : 'D',
        							upPostNo : this.dsPostDt.getColumn(0, "POST_DT_NO"),
        							upPostNm : this.dsPostDt.getColumn(0, "TITLE"),
        							upPostLmId : this.dsPostDt.getColumn(0, "LMID"),
        							postMtType : this.pPostMtType,
        							alarmGubun : this.pAlarmGubun,
        							upmu1	   : this.dsPostDt.getColumn(0, "UPMU_ID1"),
        							upmu2	   : this.dsPostDt.getColumn(0, "UPMU_ID2"),
        							plId	   : this.divContent.form.divSub.form.cbo_plNm.value,
        							replyFlag : true
        						  };

        			this.fnOpenPop(popData);
        			break;

        		case "btnDelete" :
        			this.fnDelete(objDs);
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this, 'search');
        			break;

        		case "btnSave" :		// 저장
        			this.fnSetMt();

        			if( Ex.util.isUpdated(this.dsPostDt) || this.divContent.form.divFile.form.isUpdateForm() || Ex.util.isUpdated(this.dsEduMt) || Ex.util.isUpdated(this.dsSwMt))
        			{
        				if( !this.fnCheckValidate() ) {
        					return;
        				}
        				else {
        					var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"};
        					Ex.core.confirm(this, param);
        				}

        			}

        			break;
        	}
        }

        // ROWFLAG컬럼 변경을 위한 함수 호출
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);

        	var dataSet = (obj.id == "dsSwMt") ? this.dsSwMt : this.dsEduMt;

        	if(e.columnid == "SW_USE_TYPE" && e.newvalue == "03"){ 		// 사용방식 "기타"로 변경할 경우
        		var param = {
        			  id	: "etcTypeAlert"							//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "비고란에 사용방식을 작성해주세요."	//메시지 내용
        			, arrparam : [""]									//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"										//메시지 타입
        		};
        		Ex.core.alert(this, param);
        	}


        	if(e.columnid == "CHK" && e.newvalue == "1" && (obj.id == "dsSwMt" || obj.id == "dsEduMt")){
        		var reqUserId = dataSet.getColumn(e.row, "REQ_USER_ID");

        		if(!this.isAdmin && !this.isPostAdm && (reqUserId != this.myId)){	// 본인 게시글이 아닌 글을 체크했을 때 (시스템&부서관리자 제외)
        			dataSet.setColumn(e.row, "CHK", "0"); // 다시 체크 해제

        			var param = {
        				  id	: "isNotMyPost"
        				, msg	: "본인이 작성한 내용만 선택할 수 있습니다."
        				, arrparam : [""]
        				, msgtype : "I"
        			};
        			Ex.core.alert(this, param);

        			return false;
        		}
        	}
        };


        this.cboPostTmpl_canitemchange = function(obj,e)
        {
        	this.prevIdx = e.preindex;
        	this.newIdx = e.postindex;
        	this.newValue = e.postvalue;

        	//trace(`prevIdx : ${this.prevIdx}, newIdx : ${this.newIdx}, newValue : ${this.newValue}`)

        	var param = {
        					id : "tmplSaveConfirm"
        				  , msg : "기존 내용이 사라집니다. 템플릿을 가져오시겠습니까?"
        				  , arrparam : ['']
        				  , msgtype : "I"
        				};

        	Ex.core.confirm(this, param);

        	return false; // item 변경 방지
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "UPMU_ID1" || e.columnid == "UPMU_ID2")
        	{
        		var cboObj;
        		var colNm;

        		if(e.columnid == "UPMU_ID1")
        		{
        			dsObj	= this.dsUpmu2;
        			cboObj	= this.divContent.form.divSub.form.cboUpmu2;
        			colNm	= "UPMU_ID2";
        		}
        		// 값 선택을 UPMU_ID1 에서 했을 때
        		if(!Ex.isEmpty(e.newvalue) && e.columnid == "UPMU_ID1"){
        			this.setContentClear();

        			var oParam = {
        					upCmmCd	: [e.newvalue		]	// 조회할 상위코드
        					,codeDiv	: ['NHFIRE'			]	// 조회할 코드의 업무구분
        					,optStr		: ['ALL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        					,useYn		: ['Y'				]	// 사용여부
        					,filter		: [''				]	// filterStr
        					,objDs		: [dsObj			]	// copy dataset
        				}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        			var fRow = dsObj.findRow("CMM_CD", this.dsPostDt.getColumn(0, colNm));

        			if(fRow == -1 || fRow == 0)
        			{
        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        			}

        		}
        		// 값 선택을 UPMU_ID2 에서 했을 때 -- PL 조회
        		else if(!Ex.isEmpty(e.newvalue) && e.columnid == "UPMU_ID2"){
        			this.fnSvcStaffMng(); // 서비스별담당자
        		}
        		// UPMU_ID1 값을 "전체"로 바꿨을 때
        		else if(Ex.isEmpty(e.newvalue) && e.columnid == "UPMU_ID1"){
        			this.dsUpmu2.clearData();
        			var aRow = this.dsUpmu2.addRow();
        			this.dsUpmu2.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 전체 - "));

        			this.divContent.form.divSub.form.cboUpmu2.set_index(0);
        			this.divContent.form.divSub.form.cboUpmu2.set_text(Ex.core.word("- 전체 - "));

        			this.setContentClear();
        		}
        		// UPMU_ID2 값을 "전체"로 바꿨을 때
        		else if(Ex.isEmpty(e.newvalue) && e.columnid == "UPMU_ID2"){
        			this.setContentClear();
        		}
        	}
        	obj.setUpdateRow(e);
        };

        // 중복되는 내용 - 함수 생성
        this.setContentClear = function(){
        	this.dsSvcStaffMng.clearData();
        	var aRow = this.dsSvcStaffMng.addRow();
        	this.dsSvcStaffMng.setColumn(aRow, "STAFF_NM", Ex.core.word("- 선택 - "));

        	this.divContent.form.divSub.form.cbo_plNm.set_index(0);
        	this.divContent.form.divSub.form.cbo_plNm.set_text(Ex.core.word("- 선택 - "));
        }

        this.divContent_divSub_cbo_plNm_onitemchanged = function(obj,e)
        {
        	var nRow = this.dsSvcStaffMng.findRow("STAFF_ID", e.postvalue);

        	if(nRow > -1){
        		this.dsPostDt.setColumn(0, "PL_NM", this.dsSvcStaffMng.getColumn(nRow, "STAFF_NM"));
        		this.dsPostDt.setColumn(0, "PL_ID", this.dsSvcStaffMng.getColumn(nRow, "STAFF_ID"));
        	}else{
        		this.dsPostDt.setColumn(0, "PL_NM", "");
        		this.dsPostDt.setColumn(0, "PL_ID", "");
        	}
        };

        // 댓글 등록하고 난 후 알림 보내기
        this.dsComment_onrowsetchanged = function(obj,e)
        {
        	var rowPos = obj.rowcount-1;
        	this.fnAfterCommentSave(rowPos);
        };

        // SW/EDU 그리드에서 rowpos change
        this.objDs_onrowposchanged = function(obj,e)
        {
        	var rowpos = e.newrow;
        	var currowUser = obj.getColumn(rowpos, "REQ_USER_ID");
        	var rowType = obj.getRowType(rowpos);

        	if(currowUser == Ex.util.getSession('gvUserId') || rowType == '2' || this.isPostAdm || this.isAdmin){ // 현재 로우의 작성자와 로그인 유저가 같거나, 게시판 관리자인 경우
        		// 삭제버튼 visible 처리
        		this.setGrdBtnVisible(true, true);
        		this.divBottom.form.btnSave.set_visible(true);
        	}
        	else{
        		this.setGrdBtnVisible(true, false);
        		this.divBottom.form.btnSave.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContent.form.Static00_01.addEventHandler("onclick",this.Static00_01_onclick,this);
            this.divContent.form.divTopIU.form.cboPostDtTypeCd.addEventHandler("onitemchanged",this.cboPostDtTypeCd_onitemchanged,this);
            this.divContent.form.divTopIU.form.cboPostTmpl.addEventHandler("canitemchange",this.cboPostTmpl_canitemchange,this);
            this.divContent.form.Static00_01_00.addEventHandler("onclick",this.Static00_01_onclick,this);
            this.divContent.form.divGrid.form.swBtnDiv.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrid.form.swBtnDiv.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrid.form.swBtnDiv.form.btnExcel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divEditor.form.divWebEditor.addEventHandler("onsetfocus",this.focusEvent,this);
            this.divContent.form.divSub.form.stcPlNm.addEventHandler("onclick",this.divContent_divSub_stcPlNm_onclick,this);
            this.divContent.form.divSub.form.cbo_plNm.addEventHandler("onitemchanged",this.divContent_divSub_cbo_plNm_onitemchanged,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnReply.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_01_onclick,this);
            this.dsPostDt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsNtcYn.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsEduMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsEduMt.addEventHandler("onrowposchanged",this.objDs_onrowposchanged,this);
            this.dsSwMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsSwMt.addEventHandler("onrowposchanged",this.objDs_onrowposchanged,this);
            this.dsAlarm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsComment.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsComment.addEventHandler("onrowsetchanged",this.dsComment_onrowsetchanged,this);
            this.dsResult.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSwTypeCd.addEventHandler("onrowposchanged",this.dsSwTypeCd_onrowposchanged,this);
        };
        this.loadIncludeScript("FOMM0251_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
