(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5000_P03");
            this.set_titletext("회의 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"MEET_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"DETRM_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"PENDG_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRIEF\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttnd", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_ATTND_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMUSERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMeetTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttndS", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_ATTND_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ATN_USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMUSERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContents","0","-10",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20","132","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static06","20","49",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static13","20.00","82",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static16","20.00","148",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static17","20.00","181",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static15","20.00","115",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static28_00","20","115","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("회의일자/시간");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static32","20.00","649","95","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("22");
            obj.set_text("참석자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divFiles","20.00","931",null,"179","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.getSetter("__USE_MODE").set("1");
            obj.getSetter("_ENABLE_READONLY_ALL_SKIP").set("Y");
            obj.set_url("comm::comFile.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00","20.00","629",null,"20","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("21");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_00_00","20.00","673",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("25");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn","50.00%","649",null,"24","33%",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("23");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContents.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContents.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divContents.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContents.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("Static32_00","divGrdTopBtn:7%","649",null,"24","260",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("37");
            obj.set_text("불참자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtnS",null,"649","130","24","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("24");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDeleteS",null,"0","60",null,"0","0",null,null,null,null,this.divContents.form.divGrdTopBtnS.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContents.form.divGrdTopBtnS.addChild(obj.name, obj);

            obj = new Button("btnAddS",null,"0","60","24","65",null,null,null,null,null,this.divContents.form.divGrdTopBtnS.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContents.form.divGrdTopBtnS.addChild(obj.name, obj);

            obj = new Static("Static14","20","181","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("20");
            obj.set_text("작성일시");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcRegUser","50.30%","181","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("19");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calMeetDate","Static28_00:5","120","120","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("회의일자;NULL|DATETIME:YYYYMMDD");
            obj.set_cssclass("cal_WF_normal");
            obj.set_text("    -  -  ");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("mskMeetStime","calMeetDate:5","120","50","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_enable("true");
            obj.set_format("##:##");
            obj.set_validation("회의시간(시작);NULL|DATETIME:HHMI");
            obj.set_validationGroup("fvValiCmp");
            obj.set_cssclass("msk_WF_normal");
            obj.set_textAlign("center");
            obj.set_text("__:__");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static19","mskMeetStime:1","120","20","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("17");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("mskMeetEtime","Static19:1","120","50","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.getSetter("mask").set("##:##");
            obj.set_enable("true");
            obj.set_format("##:##");
            obj.set_validation("회의시간(종료);NULL|DATETIME:HHMI");
            obj.set_validationGroup("fvValiCmp");
            obj.set_cssclass("msk_WF_normal");
            obj.set_textAlign("center");
            obj.set_text("__:__");
            this.divContents.addChild(obj.name, obj);

            obj = new Grid("grdMeetAttnd","20","683",null,"230","33%",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsAttnd");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"확인시간\"/><Cell col=\"6\" text=\"검토의견\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:ATN_USER_DEPT\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ATN_USER_NM\"/><Cell col=\"5\" text=\"bind:CONF_TIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"6\" text=\"bind:OPINION\"/></Band></Format></Formats>");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divRegUser","stcRegUser:5","186","350","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_url("fomm::FOMM0000_D02.xfdl");
            obj.set_enable("false");
            obj.set_enableevent("false");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","49","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_text("회의제목");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:5.00","54",null,"24","25",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.getSetter("validate").set("");
            obj.set_validation("회의제목;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_cssclass("edt_WF_normal");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtFrDtNm","Static14:5","186","350","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.getSetter("validate").set("");
            obj.set_validation("제목;NULL");
            obj.set_validationGroup("input01");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static28_00_00","50.30%","115","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("회의장소");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtLocation","Static28_00_00:5.00","120","350","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.getSetter("validate").set("");
            obj.set_validation("회의장소;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_cssclass("edt_WF_normal");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBotMargin","0","grdMeetAttnd:0",null,"20","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("27");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static05_00","20.00","233","132","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("28");
            obj.set_text("회의 내용");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divWebEditor","20.00","265",null,"365","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_01","20.00","215",null,"20","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("29");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static20","20.00","148","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("32");
            obj.set_text("주관부서");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcUser","50.30%","148","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("33");
            obj.set_text("주관자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcTitleSub","20.00","82","110","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("34");
            obj.set_text("회의요약");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtTitle00","stcTitleSub:5","86",null,"24","26",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.getSetter("validate").set("");
            obj.set_validation("회의요약;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_cssclass("edt_WF_normal");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divUser","stcUser:5","153","350","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divOutDept","Static20:5.00","153","350","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("35");
            obj.set_url("fomm::FOMM0000_D03.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Grid("grdMeetAttndS","grdMeetAttnd:1.5%","683",null,"230","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("36");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsAttndS");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"이름\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:ATN_USER_DEPT\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ATN_USER_NM\"/></Band></Format></Formats>");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_00_00_00","20.00","255",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("38");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
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

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divFiles
            obj = new Layout("default","",0,0,this.divContents.form.divFiles.form,function(p){});
            this.divContents.form.divFiles.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContents.form.divGrdTopBtn.form,function(p){});
            this.divContents.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divGrdTopBtnS.form
            obj = new Layout("default","",0,0,this.divContents.form.divGrdTopBtnS.form,function(p){});
            this.divContents.form.divGrdTopBtnS.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divRegUser
            obj = new Layout("default","",0,0,this.divContents.form.divRegUser.form,function(p){});
            this.divContents.form.divRegUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divWebEditor
            obj = new Layout("default","",0,0,this.divContents.form.divWebEditor.form,function(p){});
            this.divContents.form.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divUser
            obj = new Layout("default","",0,0,this.divContents.form.divUser.form,function(p){});
            this.divContents.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divOutDept.form
            obj = new Layout("default","",0,0,this.divContents.form.divOutDept.form,function(p){});
            this.divContents.form.divOutDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,1160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.edtPjtName","value","dsPjMeeting","PJT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.edtTitle","value","dsData","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.calRegDate","value","dsPjMeeting","REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.edtMeetLoc","value","dsPjMeeting","MEET_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContents.form.mskRegTime","value","dsPjMeeting","REG_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContents.form.edtFrDtNm","value","dsData","FRDT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContents.form.edtLocation","value","dsData","MEET_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.edtTitle00","value","dsData","BRIEF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comFile.xfdl");
            this._addPreloadList("fdl","fomm::FOMM0000_D02.xfdl");
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
            this._addPreloadList("fdl","fomm::FOMM0000_D01.xfdl");
            this._addPreloadList("fdl","fomm::FOMM0000_D03.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SR5000_P03_OLD.xfdl","lib::lib_AmComm.xjs");
        this.registerScript("SR5000_P03_OLD.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR5000_P03
        * 화면(명)	︰ 회의상세
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.20
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.20	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_AmComm.xjs"); /*include "lib::lib_AmComm.xjs"*/;	// readonly 처리 함수 사용 용도

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pPopType = '';
        this.MEET_ID = '';

        this.saveGbn = '';
        this.grdValidRow = -1;
        var idx;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        	//trace("[PJ0620_P01] this.form_onload() this.getOwnerFrame()._formObj : " + this.getOwnerFrame()._formObj);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	this.fnSearch01();
        	this.fnSearch02();
        	this.fnSearch03();
        }

        this.fnSearch01 = function()
        {
        	var sTranId = "select01";																		// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0250W/select01";																// 서비스명
            var sInDs = "dsCond=dsCond";																	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";	// 서버에서 수신할 데이타셋
            var sArg = "";																					// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 참석자 조회
        this.fnSearch02 = function()
        {
        	var sTranId = "select02";																		// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0250W/select02";																// 서비스명
            var sInDs = "dsCond=dsCond";																	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAttnd=dsAttnd";	// 서버에서 수신할 데이타셋
            var sArg = "";																					// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 불참자 조회
        this.fnSearch03 = function()
        {
        	// 불참자 체크
        	//this.dsCond.setColumn(0, "ATN_USER_CD", "N")

        	var sTranId = "select03";																		// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0250W/select03";																// 서비스명
            var sInDs = "dsCond=dsCond";																	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAttndS=dsAttndS";	// 서버에서 수신할 데이타셋
            var sArg = "";																					// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";																		// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0250W/save01";																// 서비스명
            var sInDs = "dsCond=dsCond dsData=dsData:U dsAttnd=dsAttnd:U dsAttndS=dsAttndS:U";																	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData dsAttnd=dsAttnd dsAttndS=dsAttndS";	// 서버에서 수신할 데이타셋
            var sArg = "";																					// 서버 @ParamVariable 인자와 맵핑됨
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
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	//trace("[PJ0620_P01] this.fnUploadCallback() sSvcId : " + sSvcId + " nErrorCode : " + nErrorCode + " sErrorMsg : " + sErrorMsg);

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
        			// 작성자 setting
        			var FRID    	= this.dsData.getColumn(0, "FRID");
        			var FRNM		= this.dsData.getColumn(0, "FRNM");
        			var FR_DEPT_NM	= this.dsData.getColumn(0, "FR_DEPTNM");
        			this.divContents.form.divRegUser.form.setValue(FRID, FRNM, FR_DEPT_NM);
        			this.divContents.form.divRegUser.form.setEnable(false);

        			// 주관부서 setting
        			var MNG_DEPT_ID    	= this.dsData.getColumn(0, "MNG_DEPT_ID");
        			var MNG_DEPT_NM		= this.dsData.getColumn(0, "MNG_DEPT_NM");
        			this.divContents.form.divOutDept.form.setValue(MNG_DEPT_ID, MNG_DEPT_NM);

        			// 주관자 setting
        			var MNG_USER_ID    	= this.dsData.getColumn(0, "MNG_USER_ID");
        			var MNG_USER_NM	= this.dsData.getColumn(0, "MNG_USER_NM");
        			this.divContents.form.divUser.form.setValue(MNG_USER_ID, MNG_USER_NM);

        			// 회의시간 setting
        			var sDate = this.dsData.getColumn(0, 'MEET_STIME').substring(0, 8);
        			var sTime = this.dsData.getColumn(0, 'MEET_STIME').substring(8, 12);
        			var eTime = this.dsData.getColumn(0, 'MEET_ETIME').substring(8, 12);

        			this.divContents.form.calMeetDate.set_value(sDate);
        			this.divContents.form.mskMeetStime.set_value(sTime);
        			this.divContents.form.mskMeetEtime.set_value(eTime);

        			var webConts = this.dsData.getColumn(this.dsData.rowposition, 'CONTENTS')||'';
        			this.divContents.form.divWebEditor.form.setContent(webConts, false);

        			break;

        		case "select02" :
        			idx = this.dsAttnd.findRow("ATN_USER_ID", Ex.util.getSession('session').gvUserId);
        			this.divContents.form.grdMeetAttnd.setCellPos(0, idx);
        			break;

        		case "select03" :
        			idx = this.dsAttndS.findRow("ATN_USER_ID", Ex.util.getSession('session').gvUserId);
        			this.divContents.form.grdMeetAttndS.setCellPos(0, idx);
        			break;

        		case "save01" :
        			var param = {
        					id : "saveAlert"
        				  , msg : "10004"
        				  , arrparam : ['']
        				  , msgtype : "S"};
        			Ex.core.alert(this, param);
        			this.saveGbn = 'save';
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "selectAttendeePop" :
        			var dsTemp = new Dataset();
        			dsTemp.loadXML(varValue);
        			for(var i = 0; i < dsTemp.rowcount; i++)
        			{
        				var rowpos = this.dsAttnd.setAddRow();
        				this.dsAttnd.setColumn(rowpos, 'MEET_ID', this.MEET_ID);
        				//등록자가 참석자에 포함되는 경우 자동으로 동의여부 '예' 처리
        				if( dsTemp.getColumn(i, 'USER_ID') == this.divContents.form.divRegUser.form.edtUserId.value )
        				{
        					this.dsAttnd.setColumn(rowpos, 'CONF_YN', 'Y');
        					this.dsAttnd.setColumn(rowpos, 'READ_YN', 'Y');
        					this.dsAttnd.setColumn(rowpos, 'CONF_CHK', '1');
        				}
        				else {
        					this.dsAttnd.setColumn(rowpos, 'CONF_YN', 'N');
        					this.dsAttnd.setColumn(rowpos, 'READ_YN', 'N');
        					this.dsAttnd.setColumn(rowpos, 'CONF_CHK', '0');
        				}

        				var sCopyCol = 	'ATN_USER_ID=USER_ID';
        					sCopyCol += ',ATN_USER_NM=USER_NM';
        					sCopyCol += ',ATN_USER_DEPT=DEPT_NM';
        				this.dsAttnd.setCopyRow(rowpos, dsTemp, i, sCopyCol);
        			}

        			break;

        		case "selectAttendeeSPop" :
        			var dsTemp = new Dataset();
        			dsTemp.loadXML(varValue);
        			for(var i = 0; i < dsTemp.rowcount; i++)
        			{
        				var rowpos = this.dsAttndS.setAddRow();
        				this.dsAttndS.setColumn(rowpos, 'MEET_ID', this.MEET_ID);
        				this.dsAttndS.setColumn(rowpos, 'ATN_USER_CD', "N");

        				this.dsAttndS.setColumn(rowpos, 'CONF_YN', 'N');
        				this.dsAttndS.setColumn(rowpos, 'READ_YN', 'N');
        				this.dsAttndS.setColumn(rowpos, 'CONF_CHK', '0');

        				var sCopyCol = 	'ATN_USER_ID=USER_ID';
        					sCopyCol += ',ATN_USER_NM=USER_NM';
        					sCopyCol += ',ATN_USER_DEPT=DEPT_NM';
        				this.dsAttndS.setCopyRow(rowpos, dsTemp, i, sCopyCol);
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
        			this.divContents.form.divFiles.form.fnUploadFiles(true);
        			break;

        		case "alertDisReasonI" :
        			this.divContents.form.grdMeetAttnd.getBindDataset().set_rowposition(this.grdValidRow);		// 데이터셋 ROW 포커스 이동
        			this.divContents.form.grdMeetAttnd.showEditor(true);										// 그리드 편집모드로 변경
        			var cellIdx = this.divContents.form.grdMeetAttnd.getBindCellIndex("Body", "DIS_REASON");
        			this.divContents.form.grdMeetAttnd.setCellPos(cellIdx, this.grdValidRow);						// 그리드 셀 포커스 이동
        			break;

        		case "alertMeetTimeChkI" :
        			this.divContents.form.mskMeetStime.setFocus();
        			break;

        		case "saveAlert":
        			Ex.core.pclose(this, this.saveGbn);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();

        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.divContents.form.grdMeetAttnd.displayRowType();
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.divContents.form.grdMeetAttndS.displayRowType();

        	// 에디터영역 생성
        	this.divContents.form.divWebEditor.form.initCreate();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divContents.form.divGrdTopBtn.form.btnAdd];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);

        	arrBtn = [this.divContents.form.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        // 	arrBtn = [this.divBtnBottom.form.btnSave];	// 저장
        // 	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divContents.form.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divBtnBottom, 'right', true);


        	this.pPopType 	= this.getOwnerFrame().pPopType||'I';
        	this.MEET_ID	= this.getOwnerFrame().pMeetId||'';

        	this.dsCond.setColumn(0, "MEET_ID", this.MEET_ID);

        	if(!this.dsCond.getColumn(0, "MEET_ID")){
        		this.divContents.form.divWebEditor.form.setContent(
        		"<font size=3><b>1. 목적 : </b></font><br><br><font size=3><b>2. 회의내용 : </b></font><br>&nbsp;1) 업무범위 : <br><br>&nbsp;2) 그외 요구사항  : <br><br>&nbsp;3) 개발 예상결과 : <br><br>&nbsp;4) 향후 일정 : <br><br><font size=3><b>3. 기타사항</b><br>&nbsp;1) 기타내용 : <br>");
        	}

        	trace('pPopType :: ' + this.pPopType);
        	switch(this.pPopType)
        	{
        		case "R" :
        			this.amfnSetCompReadonly(true, this.divContents.form);	// lib_AmComm
        			this.divContents.form.divGrdTopBtn.set_visible(false);

        		case "U" :
        			this.fnSearch();
        			break;

        		case "I" :
        			var rowpos = this.dsData.setAddRow();

        			var date = new Date();
        			var bfdate = new Date();
        			var vdate = date.getTime() + (date.getTimezoneOffset()) + ( 30 * (60*1000));  //1초(1/1000)
        			bfdate.setTime(vdate);
        			//trace("bfdate.getHours():" + bfdate.getHours().toString().padLeft(2,"0")   );
        			//trace("bfdate.getMinutes():" + bfdate.getMinutes().toString().padLeft(2,"0")  );

        			var hourStr = bfdate.getHours().toString().padLeft(2,"0") ;
        			var minStr = bfdate.getMinutes().toString().padLeft(2,"0") ;

        			//trace("hourStr:" + hourStr + " minStr:" + minStr );
        			// 회의일자
        			this.divContents.form.calMeetDate.set_value( Ex.util.today() );
        			this.divContents.form.mskMeetStime.set_value( Ex.util.todayTime().substring(8, 12) );
        			this.divContents.form.mskMeetEtime.set_value( Ex.util.todayTime().substring(8, 12) );
        			this.divContents.form.mskMeetEtime.set_value( hourStr+""+minStr);

        			// 작성자
        			var oSession = Ex.util.getSession('session');
        			trace("oSession.gvUserId > " + oSession.gvUserId);
        			this.dsData.setColumn(0, "FRID",	oSession.gvUserId);
        			this.dsData.setColumn(0, "FRNM",	oSession.gvUserNm);
        			this.dsData.setColumn(0, "FR_DEPTNM",	oSession.gvDeptNm);
        			this.divContents.form.divRegUser.form.setValue( oSession.gvUserId, oSession.gvUserNm, oSession.gvDeptNm);

        			// 회의구분
        			this.dsData.setColumn(rowpos, 'MEET_TYPE_CD', '01');

        			// 요청서ID
        			this.dsData.setColumn(0, "REQ_ID", this.getOwnerFrame().pReqId);

        			// 불참자 체크
        			//this.dsCond.setColumn(0, "ATN_USER_CD", "N")
        			//this.dsAttndS.setColumn(0, "ATN_USER_CD", "N")
        			break;
        	}
        	// 첨부파일 setting
        	var oParam = {
        		 sSvcId		: 'fileSvc'						// divFile callback 후처리용 서비스 ID
        		,limitMinCnt: 0								// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3								// 파일 최대 갯수; default 5
        		,limitSize	: 100							// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'fomm'						// 폴더명(업무명)
        		,tableName	: 'FOMM_MEET_MT'				// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: this.MEET_ID					// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''							// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''							// 테이블 PK3 (복합 키인 경우 사용)
        		,fileDownYn	: ''							// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: ''							// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''							// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};
        	this.divContents.form.divFiles.form.setConfig(this, oParam);


        	// bottom margin
        	this.divContents.form.stcBotMargin.set_background('transparent');
        	this.divContents.form.stcBotMargin.set_text('');
        	this.divContents.form.stcBotMargin.set_top(this.divContents.form.grdMeetAttnd.getOffsetBottom());
        	this.divContents.form.stcBotMargin.set_visible(true);

        	this.divContents.set_visible(true);
        	this.divContents.form.resetScroll();

        	// time set
        	this.fnSetData();
        }

        this.fnCheckValidate = function()
        {
        	// dataset update check
        	/*if( !Ex.util.isUpdated(this.dsData) &&
        		!Ex.util.isUpdated(this.dsAttnd) &&
        		!this.divContents.form.divFiles.form.isUpdateForm()) {
        			var oParam = {msg : "변경사항이 없습니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        		return false;
        	}

        	// 회의 시간, 장소 겹침 validation
        	for(var i=0; i<this.getOwnerFrame().pCheckDs.rowcount; i++)
        	{
        		var timeOverlapChk = (this.getOwnerFrame().pCheckDs.getColumn(i, "MEET_ETIME") > this.dsData.getColumn(0, "MEET_STIME")); // true면 회의시간 겹침
        		if(this.getOwnerFrame().pCheckDs.getColumn(i, "MEET_LOC") == this.dsData.getColumn(0, "MEET_LOC") && timeOverlapChk == true)
        		{
        			var oParam = {id : "alertMeetTimeChkI", msg : "해당 시간대에 회의 장소가 사용되고 있습니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}*/

        	// component validation
        	if( !Ex.util.checkValidate(this.divContents, "fvValiCmp") )
        		return false;

        	// 시작 < 종료 시간 validation, 시작 < 현재 validation
        	var strMeetStime = this.divContents.form.mskMeetStime.value;
        	var strMeetEtime = this.divContents.form.mskMeetEtime.value;
        	if (strMeetStime >= strMeetEtime)
        	{
        		var oParam = {id : "alertMeetTimeChkI", msg : "회의 시작시간은 종료시간보다 작아야 합니다.", arrparam : [], msgtype : "I"};
        		Ex.core.alert(this, oParam);
        		return false;
        	}
        	if (strMeetStime < Ex.util.todayTime().substring(8, 12))
        	{
        		var oParam = {id : "alertMeetTimeChkI", msg : "지난 시간 회의는 불가합니다.", arrparam : [], msgtype : "I"};
        		Ex.core.alert(this, oParam);
        		return false;
        	}

        	//등록자 주관자 입력 체크
        	var msgNo;
        	var rtnVal = this.divContents.form.divRegUser.form.fnCheckValidate();
        	var rtnVal01 = this.divContents.form.divUser.form.fnCheckValidate();

        	if(rtnVal == "NO_INPUT" || rtnVal01 == "NO_INPUT")	msgNo = 11001;	//"은(는) 필수 입력 항목입니다.";
        	else if(rtnVal == "NO_ID" || rtnVal01 == "NO_ID")	msgNo = 20001;	//"은(는) 입력 후 검색까지 완료해야 합니다.";
        	if(rtnVal == "NO_INPUT" || rtnVal == "NO_ID")
        	{
        		var oParam = {id : "alertRegUserI", msg : "작성자는 필수 입력 항목입니다.", arrparam : [], msgtype : "I"};
        		Ex.core.alert(this, oParam);
        		return false;
        	} else if (rtnVal01 == "NO_INPUT" || rtnVal01 == "NO_ID"){
        		var oParam = {id : "alertRegUserI", msg : "주관자는 필수 입력 항목입니다.", arrparam : [], msgtype : "I"};
        		Ex.core.alert(this, oParam);
        		return false;
        	}



        	// 에디터에 입력데이터를 데이터셋에 치환
        	var webConts = this.divContents.form.divWebEditor.form.getContent();
        	this.dsData.setColumn(this.dsData.rowposition, 'CONTENTS', webConts);

        	if(this.dsData.getColumn(0, "CONTENTS").trim() == "<p>&nbsp;</p>"){
        		var param = {
                	msg	: "회의내용은 필수 입력 항목입니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                	Ex.core.alert(this, param);
                	return false;
        	}

        	return true;
        }


        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	if(compId == "divRegUser")
        	{
        		trace(">>>> " + dsRtnObj.getColumn(0, "USER_ID"));
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsData.setColumn(0, "FRID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsData.setColumn(0, "FRNM",	dsRtnObj.getColumn(0, "USER_NM"));
        			this.dsData.setColumn(0, "FR_DEPTNM",	dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsData.setColumn(0, "FRID",   "");
        			this.dsData.setColumn(0, "FRNM",   "");
        			this.dsData.setColumn(0, "FR_DEPTNM", "");
        		}
        	} else if (compId == "divUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsData.setColumn(0, "MNG_USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsData.setColumn(0, "MNG_USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsData.setColumn(0, "MNG_USER_ID",   "");
        			this.dsData.setColumn(0, "MNG_USER_NM",   "");
        		}
        	}
        }
        this.deptChangedCallBack = function(compId, dsRtnObj)
        {
        	if (compId == "divOutDept")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "DEPT_CD")) )
        		{
        			this.dsData.setColumn(0, "MNG_DEPT_CD",	dsRtnObj.getColumn(0, "DEPT_CD"));
        			this.dsData.setColumn(0, "MNG_DEPT_NM",	dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsData.setColumn(0, "MNG_DEPT_CD",   "");
        			this.dsData.setColumn(0, "MNG_DEPT_NM",   "");
        		}
        	}
        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['MEET_TYPE_CD',		'YN_CD']		// 조회할 상위코드
        		,codeDiv: ['PJT_MNG_CD',		'CMM_CD']	// 조회할 코드의 업무구분
        		,optStr	: ['SEL',				'']		// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y']			// 사용여부
        		,filter	: ['',					'']			// filterStr
        		,objDs	: [this.dsMeetTypeCd,	this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        // 저장 전 data setting
        this.fnSetData = function()
        {
        	// 회의시간
        	var MEET_STIME = this.divContents.form.calMeetDate.value + this.divContents.form.mskMeetStime.value + '00';
        	var MEET_ETIME = this.divContents.form.calMeetDate.value + this.divContents.form.mskMeetEtime.value + '00';
        	this.dsData.setColumn(0, 'MEET_STIME', MEET_STIME);
        	this.dsData.setColumn(0, 'MEET_ETIME', MEET_ETIME);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAdd" : 	// 저장
        			Ex.core.popup(
        				this,
        				'selectAttendeePop',
        				"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        				{
        					title		: Ex.core.word('사용자 선택'),
        					pSelType	: 'M',
        					pType		: "name",
        					pCheckDs	: this.dsAttnd,
        					pCheckCol	: "ATN_USER_ID"
        				},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=900,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize"
        			);
        			break;

        		case "btnDelete" : 	// 삭제
        			this.fnDelete(this.dsAttnd);
        			break;

        		case "btnAddS" : 	// 저장
        			Ex.core.popup(
        				this,
        				'selectAttendeeSPop',
        				"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        				{
        					title		: Ex.core.word('사용자 선택'),
        					pSelType	: 'M',
        					pType		: "name",
        					pCheckDs	: this.dsAttndS,
        					pCheckCol	: "ATN_USER_ID"
        				},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=900,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize"
        			);
        			break;

        		case "btnDeleteS" : 	// 삭제
        			this.fnDelete(this.dsAttndS);
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
        			Ex.core.pclose(this, this.saveGbn);
        			break;
        	}
        }


        this.fnCommOncolumnchanged = function(obj,e)
        {
        	if(obj.id == "dsAttnd")
        	{
        		if( e.columnid == 'CONF_YN' && e.newvalue != 'N' )
        			obj.setColumn(e.row, "DIS_REASON", "");
        	}

        	obj.setUpdateRow(e);
        };



        this.divContents_maskTime_onchanged = function(obj,e)
        {
        	this.fnSetData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContents.addEventHandler("onclick",this.divContents_onclick,this);
            this.divContents.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.divGrdTopBtnS.form.btnDeleteS.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.divGrdTopBtnS.form.btnAddS.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.Static14.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContents.form.calMeetDate.addEventHandler("onchanged",this.divContents_maskTime_onchanged,this);
            this.divContents.form.mskMeetStime.addEventHandler("onchanged",this.divContents_maskTime_onchanged,this);
            this.divContents.form.mskMeetEtime.addEventHandler("onchanged",this.divContents_maskTime_onchanged,this);
            this.divContents.form.grdMeetAttnd.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContents.form.grdMeetAttnd.addEventHandler("onlbuttondown",this.divContents_grdMeetAttnd_onlbuttondown,this);
            this.divContents.form.Static20.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContents.form.grdMeetAttndS.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContents.form.grdMeetAttndS.addEventHandler("onlbuttondown",this.divContents_grdMeetAttnd_onlbuttondown,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsAttnd.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsAttndS.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("SR5000_P03_OLD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
