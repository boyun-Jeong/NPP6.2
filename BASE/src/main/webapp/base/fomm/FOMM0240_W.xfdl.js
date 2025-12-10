(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0240_W");
            this.set_titletext("업무위임관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_EDT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_DUTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_STOP\" type=\"STRING\" size=\"256\"/><Column id=\"STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_POS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgency", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCancelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">0</Col><Col id=\"CMM_CD_NM\">취소</Col></Row><Row><Col id=\"CMM_CD\">1</Col><Col id=\"CMM_CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,"69","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","58",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"12","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"12","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divChkAmStatCd","105","129","390","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_url("comm::comCheckboxDiv.xfdl");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","335","-2","30","58",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcWrkNm","Static00_00_00_00_00_00_00_00:0","12","115","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_text("현재 업무담당자");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_taborder("6");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divOutUser","stcWrkNm:0","12","300","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","divOutUser:0","3","30","58",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcWrkNm00","Static00_00_00_00_00_00_00:0.00","12","115","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("변경 업무담당자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divOutAgencyUser","stcWrkNm00:0","12","300","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDate","20.00","13","55","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_schTitle_E");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calStime","stcDate:0","13","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.getSetter("validate").set("title:시작일자,required:false,date");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validation("기간(FROM);NULL|DATETIME:YYYYMMDD");
            obj.set_validationGroup("input01");
            obj.set_text("    -  -  ");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static14","calStime:5","13","10","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEtime","Static14:5","13","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.getSetter("validate").set("title:종료일자,required:false,date");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validation("기간(TO);NULL|DATETIME:YYYYMMDD");
            obj.set_validationGroup("input01");
            obj.set_text("    -  -  ");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","0","70","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("위임 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn00",null,"99","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:5","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsMain");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","104",null,null,"0","190",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMain");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"500\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"현재 업무담당자\"/><Cell col=\"2\" text=\"등록일자\"/><Cell col=\"3\" text=\"변경 업무담당자\"/><Cell col=\"4\" text=\"시작일\"/><Cell col=\"5\" text=\"종료일\"/><Cell col=\"6\" text=\"등록일자\"/><Cell col=\"7\" text=\"중단일자\"/><Cell col=\"8\" text=\"사유\"/><Cell col=\"9\" text=\"취소여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USER_INFO\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:AGENCY_USER_INFO\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:AGENCY_SDT\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:AGENCY_EDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:STOP_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:AGENCY_DESC\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:IS_ACTIVE\" combodataset=\"dsCancelCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divChange","0","grdList:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("divChange");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0",null,"20","0",null,null,null,null,null,this.divChange.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","0","Static00_00:0","130","24",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("0");
            obj.set_text("업무위임 정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","stcGrdTitle:0",null,"10","0",null,null,null,null,null,this.divChange.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","Static00_00_00:0",null,"34","0",null,null,null,null,null,this.divChange.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("stcUserId","0","Static00_00_00:0","114","34",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("2");
            obj.set_text("현재 업무담당자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divChange.addChild(obj.name, obj);

            obj = new Div("divOutChangeUser","stcUserId:5","Static00_00_00:5","350","24",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("7");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("stcAgencyUserId","divOutChangeUser:5","Static00_00_00:0","114","34",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("5");
            obj.set_text("변경 업무담당자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divChange.addChild(obj.name, obj);

            obj = new Div("divOutChangeAgencyUser","stcAgencyUserId:5","Static00_00_00:5","350","24",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("8");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("stcDate","divOutChangeAgencyUser:5","Static00_00_00:0","114","34",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("6");
            obj.set_text("대직 기간");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divChange.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","stcDate:5","Static00_00_00:5","120","24",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("9");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_validation("대체기간(S);NULL");
            obj.set_validationGroup("input01");
            obj.set_text("    -  -  ");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("Static01","calBeginDate:0.00","59","15","24",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divChange.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","Static01:0","Static00_00_00:5","120","24",null,null,null,null,null,null,this.divChange.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_validation("대체기간(E);NULL");
            obj.set_validationGroup("input01");
            obj.set_text("    -  -  ");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","stcBg01:-1",null,null,"0","0",null,null,null,null,this.divChange.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divChange.addChild(obj.name, obj);

            obj = new Static("stcAgencyDesc","0","stcBg01:-1","114",null,null,"0",null,null,null,null,this.divChange.form);
            obj.set_taborder("14");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divChange.addChild(obj.name, obj);

            obj = new TextArea("txaAgencyDesc","stcAgencyDesc:5","stcBg01:4",null,null,"5","5",null,null,null,null,this.divChange.form);
            obj.set_taborder("11");
            obj.set_validation("사유;NULL");
            obj.set_validationGroup("input01");
            obj.set_text("");
            this.divChange.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn1",null,"Static00_00:0","425","24","0",null,null,null,null,null,this.divChange.form);
            obj.set_taborder("15");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divChange.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","60",null,"0","0",null,null,null,null,this.divChange.form.divGrdTopBtn1.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_normal");
            this.divChange.form.divGrdTopBtn1.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","90","24","btnSave:5",null,null,null,null,null,this.divChange.form.divGrdTopBtn1.form);
            obj.set_taborder("0");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_add");
            this.divChange.form.divGrdTopBtn1.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn2",null,"Static00_00:0","425","24","0",null,null,null,null,null,this.divChange.form);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.set_isButtonGroup("true");
            this.divChange.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","100","24","0",null,null,null,null,null,this.divChange.form.divGrdTopBtn2.form);
            obj.set_taborder("2");
            obj.set_text("관리자삭제");
            obj.set_cssclass("btn_WF_del");
            this.divChange.form.divGrdTopBtn2.addChild(obj.name, obj);

            obj = new Button("btnStop",null,"0","90","24","btnDelete:5",null,null,null,null,null,this.divChange.form.divGrdTopBtn2.form);
            obj.set_taborder("1");
            obj.set_text("위임중단");
            obj.set_cssclass("btn_WF_del");
            this.divChange.form.divGrdTopBtn2.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","90","24","btnStop:5",null,null,null,null,null,this.divChange.form.divGrdTopBtn2.form);
            obj.set_taborder("0");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_add");
            this.divChange.form.divGrdTopBtn2.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn3",null,"Static00_00:0","425","24","0",null,null,null,null,null,this.divChange.form);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_isButtonGroup("true");
            this.divChange.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","100","24","0",null,null,null,null,null,this.divChange.form.divGrdTopBtn3.form);
            obj.set_taborder("1");
            obj.set_text("관리자삭제");
            obj.set_cssclass("btn_WF_del");
            this.divChange.form.divGrdTopBtn3.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","90","24","btnDelete:5",null,null,null,null,null,this.divChange.form.divGrdTopBtn3.form);
            obj.set_taborder("0");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_add");
            this.divChange.form.divGrdTopBtn3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form.divChkAmStatCd
            obj = new Layout("default","",0,0,this.divSearchArea.form.divChkAmStatCd.form,function(p){});
            this.divSearchArea.form.divChkAmStatCd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form.divOutUser.form
            obj = new Layout("default","",0,0,this.divSearchArea.form.divOutUser.form,function(p){});
            this.divSearchArea.form.divOutUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form.divOutAgencyUser.form
            obj = new Layout("default","",0,0,this.divSearchArea.form.divOutAgencyUser.form,function(p){});
            this.divSearchArea.form.divOutAgencyUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn00.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn00.form,function(p){});
            this.divGrdTopBtn00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChange.form.divOutChangeUser.form
            obj = new Layout("default","",0,0,this.divChange.form.divOutChangeUser.form,function(p){});
            this.divChange.form.divOutChangeUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChange.form.divOutChangeAgencyUser.form
            obj = new Layout("default","",0,0,this.divChange.form.divOutChangeAgencyUser.form,function(p){});
            this.divChange.form.divOutChangeAgencyUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChange.form.divGrdTopBtn1.form
            obj = new Layout("default","",0,0,this.divChange.form.divGrdTopBtn1.form,function(p){});
            this.divChange.form.divGrdTopBtn1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChange.form.divGrdTopBtn2.form
            obj = new Layout("default","",0,0,this.divChange.form.divGrdTopBtn2.form,function(p){});
            this.divChange.form.divGrdTopBtn2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChange.form.divGrdTopBtn3.form
            obj = new Layout("default","",0,0,this.divChange.form.divGrdTopBtn3.form,function(p){});
            this.divChange.form.divGrdTopBtn3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChange.form
            obj = new Layout("default","",0,0,this.divChange.form,function(p){});
            this.divChange.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearchArea.form.calBeginDate","value","dsCond","START_WRK_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.calEndDate","value","dsCond","END_WRK_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearchArea.form.edtSvcId","value","dsCond","SVC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearchArea.form.edtHostNm","value","dsCond","EXEC_HSTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.edtNotiUserNm","value","dsCond","WRK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.edtNotiUserDeptNm","value","dsCond","WRK_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.edtAgencyUserId","value","dsCond","AGENCY_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divChange.form.stcBg01","value","dsCond","CONTRACT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divChange.form.divOutChangeUser","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divChange.form.Static01","value","dsCond","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divChange.form.txaAgencyDesc","value","dsAgency","AGENCY_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divChange.form.edtUserId","value","dsAgency","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divChange.form.edtAgencyUserId","value","dsAgency","AGENCY_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divChange.form.calBeginDate","value","dsAgency","AGENCY_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divChange.form.calEndDate","value","dsAgency","AGENCY_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divChange.form.divOutChangeUser","text","dsAgency","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divChange.form.divOutChangeAgencyUser","text","dsAgency","AGENCY_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearchArea.form.calEtime","value","dsCond","AGENCY_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearchArea.form.calStime","value","dsCond","AGENCY_SDT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comCheckboxDiv.xfdl");
            this._addPreloadList("fdl","fomm::FOMM0000_D01.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0240_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0240_W
        * 화면(명)		︰ 업무위임관리
        * 메뉴(경로)		︰ 관리자 > 운영관리자 > 업무위임관리
        * 화면 설명		︰ 업무위임관리
        * 작성자			︰ WEMB
        * 작성일			︰ 2024.07.08
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.07.08 	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

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
        	this.fnCompInit();		// component init
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(0, "USER_ID", "");
        	this.dsCond.setColumn(0, "USER_NM", "");
        	this.dsCond.setColumn(0, "AGENCY_USER_ID", "");
        	this.dsCond.setColumn(0, "AGENCY_USER_NM", "");

        	var fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -7), "yyyyMMdd");
        	this.dsCond.setColumn(0, "AGENCY_SDT",	fromDt);
        	this.dsCond.setColumn(0, "AGENCY_EDT",	Ex.util.today());

        	this.divSearchArea.form.divOutUser.form.resetInput(false);
        	this.divSearchArea.form.divOutAgencyUser.form.resetInput(false);
        }

        // 조회
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsMain) )
        	{
        		var param = {
        						id : "pSearchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	//if(!this.fnCheckValidate()) return;
        	this.fnSearch01();
        }

        this.fnSearch01 = function()
        {
        	if( !Ex.util.checkValidate(this.divSearchArea, "input01") ) return false;

        	//기간체크
        	if(this.dsCond.getColumn(0, "AGENCY_SDT") > this.dsCond.getColumn(0, "AGENCY_EDT"))
        	{
        		var oParam = {id : "alertEdtimeI", msg : "기간(TO) 일자는 기간(FROM) 일자보다 커야 합니다.", arrparam : [], msgtype : "I"};
        		Ex.core.alert(this, oParam);
        		return false;
        	}

        	// transaction
        	var sTranId = "select01";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0240W/select01";    // 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMain=dsMain";           // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // IS_ACTIVE == 1이고 USER_ID, AGENCY_USER_ID가 같은 값이 존재하면 false
        // AGENCY_USER_ID가 로그인 사용자와 다를 경우 false
        // 저장
        this.fnSave = function()
        {
        	if(this.dsAgency.getColumn(0, "AGENCY_DEPT_NM") == "")	this.dsAgency.setColumn(0, "AGENCY_DEPT_NM", this.dsMain.getColumn(0, "LOGIN_DEPT_NM"));
        	if(this.dsAgency.getColumn(0, "AGENCY_DUTY_NM") == "")	this.dsAgency.setColumn(0, "AGENCY_DUTY_NM", this.dsMain.getColumn(0, "LOGIN_POS_NM"));

        // 	this.dsCond.setColumn(0, "AGENCY_SDT", this.dsAgency.getColumn(0, "AGENCY_SDT"));
        // 	this.dsCond.setColumn(0, "AGENCY_EDT", this.dsAgency.getColumn(0, "AGENCY_EDT"));

        	// transaction
        	var sTranId = "saveAdd";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0240W/saveAdd";	// 서비스명
            var sInDs = "dsAgency=dsAgency:U dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMain=dsMain dsResult=dsResult";		// 서버에서 수신할 데이타셋
            var sArg = "";                   	//  서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 위임 중단 :: IS_ACTIVE = 0, STOP_DT = TO_CHAR(SYSDATE ... ),
        this.fnStop = function()
        {
        	// transaction
        	var sTranId = "saveStop";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0240W/saveStop";// 서비스명
            var sInDs = "dsAgency=dsAgency dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMain=dsMain";		// 서버에서 수신할 데이타셋
            var sArg = "";                   	//  서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        }

        // 관리자 삭제
        this.fnDelete = function(objDs)
        {
        	// transaction
        	var sTranId = "saveDelete";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0240W/saveDelete";	// 서비스명
            var sInDs = "dsAgency=dsAgency dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMain=dsMain";		// 서버에서 수신할 데이타셋
            var sArg = "";                   	//  서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 신규등록
        this.fnAdd = function()
        {
        	this.btnSet('','','select01');
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
        			Ex.core.toast(this, "10002");
        			this.btnSet('','','select01');
        			break;

        		case "saveAdd" :
        			var toastType;
        			if(this.dsResult.getColumn(0, "CNT") == 0)	toastType = 'S';
        			else if(this.dsResult.getColumn(0, "CNT") != 0)	toastType = 'W';
        			Ex.core.toast(this, this.dsResult.getColumn(0, "ALERT_YN"), null, {toastType:toastType});
        			this.btnSet('','','select01');
        			break;

        		case "saveStop" :
        			Ex.core.toast(this, "위임이 중단되었습니다.", null, {toastType:'S'});
        			this.fnSearch();
        			break;

        		case "saveDelete" :
        			this.dsAgency.clearData();
        			this.divChange.form.divOutChangeUser.form.setValue('', '');
        			this.divChange.form.divOutChangeAgencyUser.form.setValue('', '');
        			Ex.core.toast(this, "업무위임 정보가 삭제되었습니다.", null, {toastType:'S'});
        			break;

        			// 이미 등록된 업무 위임 정보가 있습니다.
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) )
        		return;
        	this.dsPopRtn.loadXML(varValue);
        	switch(pID)
        	{

        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)
        		return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "saveStop" :
        			this.fnStop();
        			break;

        		case "saveDelete" :
        			this.fnDelete();
        			break;

        		case "failMsg" :
        			break;

        		case "alertEdtimeI" :
        			this.divSearchArea.form.calStime.setFocus();
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
        	this.grdList.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();
        	this.fnSearchReset();
        	this.fnSearch();

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['']// 조회할 상위코드
        		,codeDiv: ['']// 조회할 코드의 업무구분
        		,optStr	: ['']// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['']// 사용여부
        		,filter	: ['']// filterStr
        		,objDs	: [''] 		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnSaveCheck = function()
        {
        	if( !Ex.util.checkValidate(this.divChange, "input01") )	return false;

        	var strValue1 = this.dsAgency.getColumn(0, "AGENCY_SDT");
        	var strValue2 = this.dsAgency.getColumn(0, "AGENCY_EDT");
        	if( strValue1 > strValue2 )
        	{
        		var param = {id : "pAlertDate", msg : "대체 기간을 확인해주세요."};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	console.log("USER_ID : " + this.dsAgency.getColumn(0, "USER_ID"));
        	if( !this.dsAgency.getColumn(0, "USER_ID") )
        	{
        		var param = {id : "pAlertSrServAccntI", msg : "업무위임자은(는) 필수 입력 항목입니다."};
        		Ex.core.error(this, param);
        		return false;
        	}

        	console.log("AGENCY_USER_ID : " + this.dsAgency.getColumn(0, "AGENCY_USER_ID"));
        	if( !this.dsAgency.getColumn(0, "AGENCY_USER_ID") )
        	{
        		var param = {id : "pAlertSrServAccntI", msg : "업무처리자은(는) 필수 입력 항목입니다."};
        		Ex.core.error(this, param);
        		return false;
        	}

        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearchReset" :
        			this.fnSearchReset();
        			break;

        		case "btnSearch" :
        			this.fnSearch();
        			break;

        		case "btnAdd" :
        			this.fnAdd();
        			break;

        		case "btnDelete" :

        			if(Ex.isEmpty(this.dsAgency.getColumn(0,"USER_ID"))) {
        				var param = {
        					id : "failMsg"
        				  , msg : "삭제할 업무위임 정보가 없습니다.."
        				  , arrparam : ['']
        				  , msgtype : "W"};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			var param = {
         					id : "saveDelete"
         				  , msg : "업무위임 정보를 삭제하시겠습니까?"
         				  , arrparam : ['']
         				  , msgtype : "I"
         			};
         			Ex.core.confirm(this, param);
        			break;

        		case "btnStop" :
        			var param = {
         					id : "saveStop"
         				  , msg : "중단하시겠습니까?"
         				  , arrparam : ['']
         				  , msgtype : "I"
         			};
         			Ex.core.confirm(this, param);
        			break;

        		case "btnSave" :
        			if( this.fnSaveCheck() )
        			{
        				var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }

        this.fnCommbtnPopOnclick = function(obj,e)
        {
        	var popId	= '';
        	var url		= '';
        	var oParam	= {};

        	switch(obj.name)
        	{
        		case "btnSelUser" :	// 사용자
        			popId	= 'selUserPop';
        			url		= 'fomm::FOMM0000_P01.xfdl';
        			oParam	= {
        				title	: Ex.core.word('사용자') + ' ' + Ex.core.word('선택')
        			};
        			break;
        	}

        	Ex.core.popup(
        		this,
        		popId,
        		url,           		// <--- 팝업창 오픈 Url
        		oParam,
        		"autosize"
        	);
        };

        // 공통 oncloumnchanged event : dataset
        // Grid rowFlag 처리르 위해 호출 필요
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	console.log(dsRtnObj.saveXML());
        	if(compId == "divOutUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsCond.setColumn(0, "USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsCond.setColumn(0, "USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "USER_ID",	"");
        			this.dsCond.setColumn(0, "USER_NM",	"");
        		}
        	}

        	if(compId == "divOutAgencyUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsCond.setColumn(0, "AGENCY_USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsCond.setColumn(0, "AGENCY_USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "AGENCY_USER_ID",	"");
        			this.dsCond.setColumn(0, "AGENCY_USER_NM",	"");
        		}
        	}

        	if(compId == "divOutChangeUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsAgency.setColumn(0, "USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsAgency.setColumn(0, "USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsAgency.setColumn(0, "USER_ID",	"");
        			this.dsAgency.setColumn(0, "USER_NM",	"");
        		}
        	}

        	if(compId == "divOutChangeAgencyUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsAgency.setColumn(0, "AGENCY_USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsAgency.setColumn(0, "AGENCY_USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        			this.dsAgency.setColumn(0, "AGENCY_DEPT_NM",	dsRtnObj.getColumn(0, "DEPT_NM"));
        			this.dsAgency.setColumn(0, "AGENCY_DUTY_NM",	dsRtnObj.getColumn(0, "POS_NM"));
        		}
        		else
        		{
        			this.dsAgency.setColumn(0, "AGENCY_USER_ID",	"");
        			this.dsAgency.setColumn(0, "AGENCY_USER_NM",	"");
        			this.dsAgency.setColumn(0, "AGENCY_DEPT_NM",	"");
        			this.dsAgency.setColumn(0, "AGENCY_DUTY_NM",	"");
        		}
        	}
        }

        this.grdList_oncellclick = function(obj,e)
        {
        	this.btnSet(obj, e);
        	//fnSearch02();
        };

        this.btnSet = function(obj, e, txt)
        {
        	var today = Ex.util.today();

        	// 처음 진입 시 (미선택시) : 신규등록, 저장 + enable true :: divGrdTopBtn1
        	if(txt == 'select01')
        	{
        		this.dsAgency.clearData();
        		this.dsAgency.addRow();

        		//this.divChange.form.divOutChangeUser.form.edtUserNm.set_value("");
        		this.divChange.form.divOutChangeUser.form.setValue('', '');

        		//this.divChange.form.divOutChangeAgencyUser.form.setValue(Ex.util.getSession('gvUserId'), Ex.util.getSession('gvUserNm'));

        		//this.divChange.form.divOutChangeAgencyUser.form.edtUserId.set_value(Ex.util.getSession('gvUserId'));
        		//this.divChange.form.divOutChangeAgencyUser.form.edtUserNm.set_value(this.dsMain.getColumn(0, "LOGIN_USER_NM"));

        		//this.dsAgency.setColumn(0, "AGENCY_USER_ID", this.dsMain.getColumn(0, "LOGIN_USER_ID"));
        		//this.dsAgency.setColumn(0, "AGENCY_USER_NM", this.dsMain.getColumn(0, "LOGIN_USER_NM"));

        		this.dsAgency.setColumn(0, "AGENCY_DEPT_NM", this.dsMain.getColumn(0, "LOGIN_DEPT_NM"));
        		this.dsAgency.setColumn(0, "AGENCY_DUTY_NM", this.dsMain.getColumn(0, "LOGIN_POS_NM"));
        		this.dsAgency.setColumn(0, "AGENCY_SDT", today);
        		this.dsAgency.setColumn(0, "AGENCY_EDT", today);
        		this.divChange.form.divOutChangeUser.form.resetInput(false);
        		this.dsAgency.setColumn(0, "AGENCY_DESC", "");

        		this.divChange.form.divOutChangeUser.enable = true;
        		this.divChange.form.divOutChangeAgencyUser.enable = true;
        		this.divChange.form.calBeginDate.enable = true;
        		this.divChange.form.calEndDate.enable = true;
        		this.divChange.form.txaAgencyDesc.enable = true;

        		this.divChange.form.divGrdTopBtn1.visible = true;
        		this.divChange.form.divGrdTopBtn2.visible = false;
        		this.divChange.form.divGrdTopBtn3.visible = false;

        		this.divChange.form.divOutChangeUser.form.btnSearchPop.visible = true;
        		this.divChange.form.divOutChangeUser.form.btnClear.visible = true;
        		this.divChange.form.divOutChangeAgencyUser.form.btnSearchPop.visible = true;
        		this.divChange.form.divOutChangeAgencyUser.form.btnClear.visible = true;

        	}
        	// 종료일 이전(진행중)인 위임 선택 시 : 신규등록, 위임중단, 관리자삭제 + enable false :: divGrdTopBtn2
        	else if(this.dsMain.getColumn(e.row, "AGENCY_EDT") >= today.substr(0,8) && this.dsMain.getColumn(e.row, "IS_ACTIVE") == '1')
        	{
        		//this.divChange.form.divOutChangeUser.form.edtUserNm.set_value(this.dsMain.getColumn(e.row, "USER_NM"));
        		this.divChange.form.divOutChangeUser.form.setValue(this.dsMain.getColumn(e.row, "USER_ID"), this.dsMain.getColumn(e.row, "USER_NM"));
        		this.divChange.form.divOutChangeAgencyUser.form.setValue(this.dsMain.getColumn(e.row, "AGENCY_USER_ID"), this.dsMain.getColumn(e.row, "AGENCY_USER_NM"));
        		//this.divChange.form.divOutChangeAgencyUser.form.edtUserNm.set_value(this.dsMain.getColumn(e.row, "AGENCY_USER_NM"));
        		this.dsAgency.clearData();
        		this.dsAgency.addRow();
        		this.dsAgency.copyRow(0, this.dsMain, e.row);

        		this.divChange.form.divOutChangeUser.enable = false;
        		this.divChange.form.divOutChangeAgencyUser.enable = false;
        		this.divChange.form.calBeginDate.enable = false;
        		this.divChange.form.calEndDate.enable = false;
        		this.divChange.form.txaAgencyDesc.enable = false;

        		this.divChange.form.divGrdTopBtn1.visible = false;
        		this.divChange.form.divGrdTopBtn2.visible = true;
        		this.divChange.form.divGrdTopBtn3.visible = false;
        		this.divChange.form.divOutChangeUser.form.btnSearchPop.visible = false;
        		this.divChange.form.divOutChangeUser.form.btnClear.visible = false;
        		this.divChange.form.divOutChangeAgencyUser.form.btnSearchPop.visible = false;
        		this.divChange.form.divOutChangeAgencyUser.form.btnClear.visible = false;

        	}
        	// 종료일 이후(종료된)인 위임 선택 시 : 신규등록, 관리자삭제 + enable false :: divGrdTopBtn3
        	else if(this.dsMain.getColumn(e.row, "AGENCY_EDT") < today.substr(0,8) || this.dsMain.getColumn(e.row, "IS_ACTIVE") == '0')
        	{
        		//this.divChange.form.divOutChangeUser.form.edtUserNm.set_value(this.dsMain.getColumn(e.row, "USER_NM"));
        		this.divChange.form.divOutChangeUser.form.setValue(this.dsMain.getColumn(e.row, "USER_ID"), this.dsMain.getColumn(e.row, "USER_NM"));
        		this.divChange.form.divOutChangeAgencyUser.form.setValue(this.dsMain.getColumn(e.row, "AGENCY_USER_ID"), this.dsMain.getColumn(e.row, "AGENCY_USER_NM"));
        		//this.divChange.form.divOutChangeAgencyUser.form.edtUserNm.set_value(this.dsMain.getColumn(e.row, "AGENCY_USER_NM"));
        		this.dsAgency.clearData();
        		this.dsAgency.addRow();
        		this.dsAgency.copyRow(0, this.dsMain, e.row);

        		this.divChange.form.divOutChangeUser.enable = false;
        		this.divChange.form.divOutChangeAgencyUser.enable = false;
        		this.divChange.form.calBeginDate.enable = false;
        		this.divChange.form.calEndDate.enable = false;
        		this.divChange.form.txaAgencyDesc.enable = false;

        		this.divChange.form.divGrdTopBtn1.visible = false;
        		this.divChange.form.divGrdTopBtn2.visible = false;
        		this.divChange.form.divGrdTopBtn3.visible = true;
        		this.divChange.form.divOutChangeUser.form.btnSearchPop.visible = false;
        		this.divChange.form.divOutChangeUser.form.btnClear.visible = false;
        		this.divChange.form.divOutChangeAgencyUser.form.btnSearchPop.visible = false;
        		this.divChange.form.divOutChangeAgencyUser.form.btnClear.visible = false;
        	}
        }

        // 대체기간 :: 시작일이 종료일보다 크지 않도록 / 종료일이 시작일보다 작지 않도록
        this.fnDateOncloseup = function(obj,e)
        {
        	var sDate = this.dsAgency.getColumn(0, "AGENCY_SDT");
        	var eDate = this.dsAgency.getColumn(0, "AGENCY_EDT");
        	var tDate = new Date(Ex.util.strToDate(Ex.util.today()));
        	var curDt = Ex.util.getMaskFormatString(tDate, "yyyyMMdd");	// 현재일자

        	if( !Ex.isEmpty(sDate) && !Ex.isEmpty(eDate) )
        	{
        		if(sDate > eDate)
        		{
        			if(obj.id == 'calBeginDate')
        			{
        				//var oParam = {id : "alertSearchDateI", msg : "대체 기간 시작일은 종료일 이전 날짜여야 합니다.", arrparam : [], msgtype : "I"};
        				//Ex.core.alert(this, oParam);
        				//var preDate = Ex.util.addDate(Ex.util.today(), -120);
        				//var today = Ex.util.today();
        				//this.dsAgency.setColumn(0, "AGENCY_SDT", today);
        				this.dsAgency.setColumn(0, "AGENCY_EDT", sDate);
        			}
        			else if(obj.id == 'calEndDate')
        			{
        				var oParam = {id : "alertSearchDateI", msg : "종료일자가 시작일자보다 작을 수 없습니다.", arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				this.dsAgency.setColumn(0, "AGENCY_EDT", sDate);
        			}
        			return false;
        		}

        		if( curDt > eDate )
        		{
        			var oParam = {id : "alertEdtimeI", msg : "종료일자를 현재 일자 이전 날짜로 입력할 수 없습니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			this.dsAgency.setColumn(0, "AGENCY_EDT", curDt);
        			return false;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.divChkAmStatCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.calStime.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divSearchArea.form.calEtime.addEventHandler("onkeyup",this.onKeyUp,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divChange.form.calBeginDate.addEventHandler("oncloseup",this.fnDateOncloseup,this);
            this.divChange.form.calEndDate.addEventHandler("oncloseup",this.fnDateOncloseup,this);
            this.divChange.form.divGrdTopBtn1.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divChange.form.divGrdTopBtn1.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divChange.form.divGrdTopBtn2.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divChange.form.divGrdTopBtn2.form.btnStop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divChange.form.divGrdTopBtn2.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divChange.form.divGrdTopBtn3.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divChange.form.divGrdTopBtn3.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("FOMM0240_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
