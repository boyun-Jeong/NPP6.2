(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0271_P01");
            this.set_titletext("지식상세(등록)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,848);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSvKmMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"string\" size=\"32\"/><Column id=\"KNOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SOLVED_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKnowCateCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"KNOW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKnowProcStsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"EXT_COL_3\" type=\"STRING\" size=\"256\"/><Column id=\"TMPLAT_YN\" type=\"string\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"EXT_COL_4\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL_1\" type=\"string\" size=\"32\"/><Column id=\"FLDR_NM\" type=\"string\" size=\"32\"/><Column id=\"EXT_COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"EXT_COL_5\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"PK2\" type=\"STRING\" size=\"256\"/><Column id=\"PK1\" type=\"STRING\" size=\"256\"/><Column id=\"PK3\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"KEY_TBL\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LMNM\" type=\"string\" size=\"32\"/><Column id=\"FRNM\" type=\"string\" size=\"32\"/><Column id=\"FILE_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_NO\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"string\" size=\"32\"/><Column id=\"FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_SAVE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_ICON\" type=\"string\" size=\"32\"/><Column id=\"FRDT\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"TMPLAT_YN\">N</Col><Col id=\"FILE_SIZE\">82935</Col><Col id=\"EXT_COL_1\">SCRN</Col><Col id=\"FLDR_NM\">template</Col><Col id=\"CHK\">0</Col><Col id=\"DEL_YN\">N</Col><Col id=\"LMPID\">SV0400_W</Col><Col id=\"KEY_TBL\">TEMPLATE</Col><Col id=\"LMNM\">정보윤</Col><Col id=\"FRNM\">정보윤</Col><Col id=\"FILE_PATH\">C:\\WEMB\\SPP_TEST\\workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\SPP\\attachFiles/template\\20240112\\</Col><Col id=\"FILE_NO\">97</Col><Col id=\"LMDT\">20240112135629</Col><Col id=\"FILE_NM\">IT포탈_프로젝트명_3.화면목록.xlsx</Col><Col id=\"FILE_SAVE_NM\">93625b53-a482-4032-b77b-1ea0120b2641.xlsx</Col><Col id=\"FILE_ICON\">theme://SPP_IMAGE_SET/FOMM/ico_file_XLS.png</Col><Col id=\"FRDT\">20240112135629</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBtnBottom",null,null,"795","60","20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("position").set("fixed");
            obj.set_text("");
            obj.set_cssclass("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"80","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnModify",null,null,"80","32","170","15",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("4");
            obj.set_text("편집");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnRjct",null,null,"80","32","btnModify:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("2");
            obj.set_text("반려");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnAppv",null,null,"80","32","btnRjct:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("승인");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,null,"80","32","btnClose:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("3");
            obj.set_text("폐기");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Div("divContents","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","0","24",null,"10","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divInput","20","Static00_00_00_00_01:0",null,"517","20",null,"1200",null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.getSetter("position").set("fixed");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","0","66",null,"34","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","0","Static06_00_00_00:-1",null,"220","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","Static06_00_00_00_00:-1",null,"100","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","Static06_00:-1",null,"100","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static06","0","0",null,"34","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","0","Static06:-1",null,"34","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcKmId","0","0","100","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("1");
            obj.set_text("지식ID");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcRefReqId","33%","0","99","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("18");
            obj.set_text("연관ID");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtKmId","stcKmId:5","5",null,"24","stcRefReqId:5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcRegUserNm00","0.00%","stcKmId:-1","100","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("14");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcKmTitle","0","stcRegUserNm00:-1","100","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcRegStime","66%","33","100","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("4");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtKmTitle","stcKmTitle:5.00","72",null,"22","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("제목;NULL");
            obj.set_readonly("true");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtKmCateGbnNm","1035","5",null,"24","205",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcRegUserNm","66%","0","100","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("6");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtRegUserNm","stcRegUserNm:5","5",null,"24","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Calendar("calRegStime","stcRegStime:5.00","38",null,"24","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("5");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcPreFailCause","0","stcKmTitle:-1","100","220",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("12");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtRefReqId","stcRefReqId:5","5",null,"24","stcRegUserNm:5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcPreFailCause00","0","stcPreFailCause:-1","100","100",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("19");
            obj.set_text("근본원인");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcPreFailCause00_00","0","stcPreFailCause00:-1","100","100",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("20");
            obj.set_text("해결책");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtKmId00","stcRegUserNm00:5","38",null,"24","stcRegStime:5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new TextArea("txaPreFailCause00","105","stcPreFailCause:4",null,"90","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("22");
            obj.set_validation("지식내용;NULL|MAX_LEN_UTF8:4000");
            obj.set_validationGroup("input01");
            obj.set_readonly("true");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new TextArea("txaPreFailCause00_00","105","stcPreFailCause00:4",null,"90","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("23");
            obj.set_validation("지식내용;NULL|MAX_LEN_UTF8:4000");
            obj.set_validationGroup("input01");
            obj.set_readonly("true");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Div("divWebEditor","stcPreFailCause:5.00","stcKmTitle:4",null,"210","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("24");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","divInput:0",null,"10","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divFiles","20","Static00_00_00_00:0",null,null,"20","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.getSetter("__USE_MODE").set("1");
            obj.getSetter("_ENABLE_READONLY_ALL_SKIP").set("Y");
            obj.set_url("comm::comFile.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","0","193","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackRight",null,"0","20",null,"0","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackLeft","0","0","20",null,null,"0",null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divTopBtn",null,"20","150","24","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.getSetter("position").set("fixed");
            obj.set_text("");
            obj.set_cssclass("");
            obj.set_tabstop("false");
            this.divContents.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divInput.form.divWebEditor.form
            obj = new Layout("default","",0,0,this.divContents.form.divInput.form.divWebEditor.form,function(p){});
            this.divContents.form.divInput.form.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divInput.form
            obj = new Layout("default","",0,0,this.divContents.form.divInput.form,function(p){});
            this.divContents.form.divInput.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divFiles
            obj = new Layout("default","",0,0,this.divContents.form.divFiles.form,function(p){});
            this.divContents.form.divFiles.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divTopBtn.form
            obj = new Layout("default","",0,0,this.divContents.form.divTopBtn.form,function(p){});
            this.divContents.form.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,848,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.divInput.form.edtKmId","value","dsSvKmMt","KNOW_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.divInput.form.edtKmCateGbnNm","value","dsSvKmMt","KM_CATE_GBN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.divInput.form.edtKmTitle","value","dsSvKmMt","SR_BRIEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.divInput.form.calRegStime","value","dsSvKmMt","REG_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.divInput.form.edtRegUserNm","value","dsSvKmMt","REG_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.divInput.form.edtRefReqId","value","dsSvKmMt","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.divInput.form.edtKmId00","value","dsSvKmMt","UPMU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.divInput.form.txaPreFailCause00","value","dsSvKmMt","CAUSE_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.divInput.form.txaPreFailCause00_00","value","dsSvKmMt","SOLVED_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
            this._addPreloadList("fdl","comm::comFile.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0271_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0271_P01
        * 화면(명)	︰ 지식내용 상세
        * 메뉴(경로)	︰
        * 화면 설명	︰ 지식내용 상세
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.12.16
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.12.16	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

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
        	// transaction
        	var sTranId = "select01";													// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SV0400P/select01";											// 서비스명
            var sInDs = "dsCond=dsCond";												// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSvKmMt=dsSvKmMt dsKmFrpMt=dsKmFrpMt";	// 서버에서 수신할 데이타셋
            var sArg = "";																// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        //저장
        this.fnSave = function()
        {
        	this.dsSvKmMt.setColumn(0, "KM_CATE_NM", this.divContents.form.divInput.form.cboKmCateCd.text);

        	if( !Ex.isEmpty(this.dsSvKmMt.getColumn(0, "KM_CATE_GBN_CD")) )
        	{
        		this.dsSvKmMt.setColumn(0, "KM_CATE_GBN_NM", this.divContents.form.divInput.form.cboKmCateGbnCd.text);
        	}
        	else
        	{
        		this.dsSvKmMt.setColumn(0, "KM_CATE_GBN_NM", "");
        	}

        	// transaction
        	var sTranId = "save01";																		// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SV0400P/save01";															// 서비스명
            var sInDs = "dsCond=dsCond dsSvKmMt=dsSvKmMt:U dsKmFrpMt=dsKmFrpMt:U";						// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSvKmMt=dsSvKmMt dsKmFrpMt=dsKmFrpMt dsCond=dsCond dsResult=dsResult";		// 서버에서 수신할 데이타셋
            var sArg = "";																				// 서버 @ParamVariable 인자와 맵핑됨
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
        	//trace("[SV0400_P01] this.fnUploadCallback() sSvcId : " + sSvcId + " nErrorCode : " + nErrorCode + " sErrorMsg : " + sErrorMsg);

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
        			this.setComponent();

        			var evt = nexacro.ItemChangeEventInfo;
        			evt.postvalue = this.dsSvKmMt.getColumn(0, "KM_CATE_CD");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboKmCateCd, evt);

        			var fRow = this.dsUpmu1.findRow("CMM_CD", this.dsSvKmMt.getColumn(0, "UPMU_ID1"));

        			if(fRow == -1)	this.dsSvKmMt.setColumn(0, "UPMU_ID1", undefined);

        			evt.postvalue = this.dsSvKmMt.getColumn(0, "UPMU_ID1");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboUpmu1, evt);

        			evt.postvalue = this.dsSvKmMt.getColumn(0, "UPMU_ID2");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboUpmu2, evt);

        			evt.postvalue = this.dsSvKmMt.getColumn(0, "KM_CATE_CD");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboKmCateCd, evt);
        			break;

        		case "save01" :
        			if(this.dsResult.getColumn(0, "RTN_CD") == 0)		//정상
        			{
        				Ex.core.pclose(this, "Y|" + this.dsCond.getColumn(0, "KM_ID"));
        			}
        			else if(this.dsResult.getColumn(0, "RTN_CD") == -1)	//신규등록 또는 반려인 경우만 저장 가능
        			{
        				var oParam = {id : "alertSaveCheckI", msg : "반려인 경우만 재등록이 가능합니다.", msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        			else if(this.dsResult.getColumn(0, "RTN_CD") == -2)	//신규등록 또는 반려인 경우만 저장 가능
        			{
        				var oParam = {id : "alertSaveCheckI", msg : "해당 지식 내역은 이미 삭제되었습니다.", msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        			//this.saveFlg = "Y";
        			/*
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.setComponent();

        			var evt = nexacro.ItemChangeEventInfo;
        			evt.postvalue = this.dsSvKmMt.getColumn(0, "KM_CATE_CD");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboKmCateCd, evt);

        			trace("save01 KM_ID : " + this.dsCond.getColumn(0, "KM_ID"));

        			if( !Ex.isEmpty(this.dsCond.getColumn(0, "KM_ID")) )
        			{
        				this.getOwnerFrame().pKmId = this.dsCond.getColumn(0, "KM_ID");
        				this.divContents.form.divFiles.form.fnReplaceTempkeyAndSearch(this.dsCond.getColumn(0, "KM_ID"));
        			}

        			var fRow = this.dsUpmu1.findRow("CMM_CD", this.dsSvKmMt.getColumn(0, "UPMU_ID1"));

        			if(fRow == -1)	this.dsSvKmMt.setColumn(0, "UPMU_ID1", undefined);

        			evt.postvalue = this.dsSvKmMt.getColumn(0, "UPMU_ID1");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboUpmu1, evt);

        			evt.postvalue = this.dsSvKmMt.getColumn(0, "UPMU_ID2");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboUpmu2, evt);

        			evt.postvalue = this.dsSvKmMt.getColumn(0, "KM_CATE_CD");
        			this.cboOnItemChanged(this.divContents.form.divInput.form.cboKmCateCd, evt);
        			*/
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "commSearchUserPopup" :
        			this.dsPopRtn.loadXML(varValue);
        			this.dsSvKmMt.setColumn(0, "KM_APPR_ID", this.dsPopRtn.getColumn(0, 'USER_ID'));
        			this.dsSvKmMt.setColumn(0, "KM_APPR_NM", this.dsPopRtn.getColumn(0, 'USER_NM'));
        			this.dsSvKmMt.setColumn(0, "KM_APPR_INFO", this.dsPopRtn.getColumn(0, 'USER_NM') + '[' + this.dsPopRtn.getColumn(0, 'USER_ID') + ']');
        			break;

        		case "SV0110_P01" :
        			this.dsPopRtn.loadXML(varValue);
        			this.dsSvKmMt.setColumn(0, "CI_ID", this.dsPopRtn.getColumn(0, "CI_ID"));
        			this.dsSvKmMt.setColumn(0, "CI_NM", this.dsPopRtn.getColumn(0, "CI_NM"));
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
        		case "saveConfirm" :
        			this.divContents.form.divFiles.form.fnUploadFiles(true);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divContents.form.divInput.form.edtKmId.set_displaynulltext(Ex.core.word("자동생성"));
        	this.divContents.form.divInput.form.cboProcStsCd.set_displaynulltext(Ex.core.word("작성중"));

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	this.dsCond.setColumn(0, "KM_ID", this.getOwnerFrame().pKmId);

        	// 첨부파일 setting
        	var oParam = {
        		 sSvcId		: 'fileSvc'										// divFile callback 후처리용 서비스 ID
        		,limitMinCnt: 0												// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3												// 파일 최대 갯수; default 5
        		,limitSize	: 100											// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'sv'											// 폴더명(업무명)
        		,tableName	: 'SV_KM_MT'									// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: this.dsCond.getColumn(0, "KM_ID")||''			// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''											// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''											// 테이블 PK3 (복합 키인 경우 사용)
        		,fileDownYn	: ''											// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: ''											// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''											// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};
        	this.divContents.form.divFiles.form.setConfig(this, oParam);

        	if( !Ex.isEmpty(this.getOwnerFrame().pKmId) )
        	{
        		this.fnSearch();
        	}
        	else
        	{
        		//this.fnSearch();
        		var aRow = this.dsSvKmMt.setInsertRow();
        		this.dsSvKmMt.setColumn(0, "KM_CATE_NM", Ex.core.word("장애대응절차"));
        		this.dsSvKmMt.setColumn(0, "REG_DTIME", Ex.util.today());
        		this.dsSvKmMt.setColumn(0, "REG_DEPT_NM", Ex.util.getSession('gvDeptNm'));
        		this.dsSvKmMt.setColumn(0, "REG_USER_NM", Ex.util.getSession('gvUserNm'));
        		this.dsSvKmMt.setColumn(0, "REG_USER_INFO", Ex.util.getSession('gvUserNm') + "[" + Ex.util.getSession('gvUserId') + "]");

        		var evt = nexacro.ItemChangeEventInfo;
        		evt.postvalue = undefined;
        		this.cboOnItemChanged(this.divContents.form.divInput.form.cboUpmu1, evt);
        		this.cboOnItemChanged(this.divContents.form.divInput.form.cboUpmu2, evt);

        		this.setComponent();
        	}
        	//this.fnSearch();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['CD00360',		'KNOW_FAIL_GBN_CD',	'BIZC0000',	'KNOW_PROC_STS_CD'		]	// 조회할 상위코드
        		,codeDiv: ['',		'SVC_MNG_CD',		'',	'SVC_MNG_CD'			]	// 조회할 코드의 업무구분
        		,optStr	: ['SEL',				'SEL',				'SEL',			''						]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y',				'Y',			'Y'						]	// 사용여부
        		,filter	: ['',	'',					'',				''						]	// filterStr
        		,objDs	: [this.dsKnowCateCd,	this.dsCode,		this.dsUpmu1,	this.dsKnowProcStsCd	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsSvKmMt) && !Ex.util.isUpdated(this.dsKmFrpMt) &&
        		!this.divContents.form.divFiles.form.isUpdateForm())
        	{
        		return false;
        	}

        	if( !Ex.util.checkValidate(this.divContents.form.divInput, "input01") ) return false;

        	// Grid Validation
        	if( !this.divContents.form.grdSvKmMt.checkValidate() ) return false;

        	return true;
        }

        this.setComponent = function()
        {
        	this.divContents.form.divGrdTopBtn.form.btnAdd.set_visible(false);
        	this.divContents.form.divGrdTopBtn.form.btnDelete.set_visible(false);
        	this.divBtnBottom.form.btnReg.set_visible(false);

        	this.divContents.form.divFiles.form.divBtn.form.btnAdd.set_visible(false);
        	this.divContents.form.divFiles.form.divBtn.form.btnDelete.set_visible(false);

        	var enable = false;
        	var	arrBtn;

        	if( this.dsSvKmMt.getColumn(0, "ROWFLAG") == "I" ||
        		(this.dsSvKmMt.getColumn(0, "REG_USER_ID") == Ex.util.getSession('gvUserId') &&	//신규거나 현재 로그인 사용자와 등록자가 같으면서 반려인 경우
        		this.dsSvKmMt.getColumn(0, "PROC_STS_CD") == "KNOW_PROC_STS_CD03"))
        	{
        		enable = true;
        		arrBtn = [this.divContents.form.divGrdTopBtn.form.btnAdd];		// 추가
        		Ex.util.setBtnVisible(this, 'write', arrBtn);

        		arrBtn = [this.divContents.form.divGrdTopBtn.form.btnDelete];	// 삭제
        		Ex.util.setBtnVisible(this, 'delete', arrBtn);

        		arrBtn = [this.divBtnBottom.form.btnReg];						// 저장
        		Ex.util.setBtnVisible(this, 'save', arrBtn);

        		this.divContents.form.divFiles.form.divBtn.form.btnAdd.set_visible(true);
        		this.divContents.form.divFiles.form.divBtn.form.btnDelete.set_visible(true);
        	}

        	// 상단 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divContents.form.divGrdTopBtn, 'right', true);

        	// 하단 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divBtnBottom, 'right', true);

        	//첨부파일 버튼 영역
        	Ex.util.setBtnAlign(this.divContents.form.divFiles.form.divBtn, 'right', true);


        	//trace("enable ::: " + enable);
        	//입력 폼 제어
        	var excludeObjArr = [
        		this.divContents.form.divInput.form.edtKmId,
        		this.divContents.form.divInput.form.cboProcStsCd,
        		this.divContents.form.divInput.form.calRegStime,
        		this.divContents.form.divInput.form.edtRegDeptNm,
        		this.divContents.form.divInput.form.edtRegUserNm,
        		this.divContents.form.divInput.form.edtKmApprInfo,
        		this.divContents.form.divInput.form.edtCiNm
        	];
        	Ex.util.setCompPropAll(this, this.divContents.form.divInput.form, enable, excludeObjArr);

        	this.divContents.form.grdSvKmMt.set_readonly(!enable);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnButtonComOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnCiPop" :
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"FOMM0271_P01",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0271_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: "구성정보(CI) 선택",
        					pSelType	: "S"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnCiClear" :
        			this.dsSvKmMt.setColumn(0, "CI_ID", "");
        			this.dsSvKmMt.setColumn(0, "CI_NM", "");
        			break;

        		case 'btnAdd' :
        			var aRow = this.dsKmFrpMt.setInsertRow(this.dsKmFrpMt.rowposition+1);
        			this.divContents.form.grdSvKmMt.setCellPos(this.divContents.form.grdSvKmMt.getBindCellIndex("Body", "STAGE"));
        			this.divContents.form.grdSvKmMt.showEditor(true);
        			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsKmFrpMt);
        			break;

        		case 'btnReg' : 	// 등록
        			if( this.fnCheckValidate() )
        			{
        				var param = {
        					id : "saveConfirm",
        					msg : "10003",
        					arrparam : [''],
        					msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnClose" : 	// 닫기
        			this.isCloseBtnClick = true;
        			Ex.core.pclose(this, this.saveFlg);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        this.cboOnItemChanged = function(obj, e)
        {
        	//trace("this.cboOnItemChanged() obj.id = " + obj.id);
        	if(obj.id == "cboKmCateCd")
        	{
        		//trace("e.postvalue ::: " + e.postvalue);
        		if(e.postvalue == "KMC200")	//장애대응절차
        		{
        			this.divContents.form.grdSvKmMt.set_formatid("fmt_ICM");
        			//this.divContents.form.divInput.form.stcKmCateGbnNm.set_cssclass("sta_WF_inputTitle_E");
        			this.divContents.form.divInput.form.cboKmCateGbnCd.set_validationGroup("input01");
        		}
        		else
        		{
        			if(this.divContents.form.grdSvKmMt.formatid != "default")
        			{
        				this.divContents.form.grdSvKmMt.set_formatid("default");
        			}
        			//this.divContents.form.divInput.form.stcKmCateGbnNm.set_cssclass("sta_WF_inputTitle");
        			this.divContents.form.divInput.form.cboKmCateGbnCd.set_validationGroup("");
        		}
        	}
        	else if(obj.id == "cboUpmu1" || obj.id == "cboUpmu2")
        	{
        		var subObj;
        		var dsObj;

        		var upmuId1 = this.dsSvKmMt.getColumn(0, "UPMU_ID1");
        		var upmuId2 = this.dsSvKmMt.getColumn(0, "UPMU_ID2");
        		var upmuId3 = this.dsSvKmMt.getColumn(0, "UPMU_ID3");

        		//trace("this.cboOnItemChanged() bf upmuId1 ::: " + upmuId1);
        		//trace("this.cboOnItemChanged() bf upmuId2 ::: " + upmuId2);
        		//trace("this.cboOnItemChanged() bf upmuId3 ::: " + upmuId3);

        		if(obj.id == "cboUpmu1")
        		{
        			subObj		= this.divContents.form.divInput.form.cboUpmu2;
        			dsObj = this.dsUpmu2;
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			subObj		= this.divContents.form.divInput.form.cboUpmu3;
        			dsObj = this.dsUpmu3;
        		}

        		//trace("this.cboOnItemChanged() e.postvalue : " + e.postvalue + " dsObj.id : " + dsObj.id);

        		if( !Ex.isEmpty(e.postvalue) )
        		{
        			var oParam = {
        				 upCmmCd	: [e.postvalue		]	// 조회할 상위코드
        				,codeDiv	: [''		]	// 조회할 코드의 업무구분
        				,optStr		: ['SEL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn		: ['Y'				]	// 사용여부
        				,filter		: [''				]	// filterStr
        				,objDs		: [dsObj			]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        			//subObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        			if(obj.id == "cboUpmu1")
        			{
        				this.divContents.form.divInput.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        				this.dsSvKmMt.setColumn(0, "UPMU_ID2", undefined);
        			}
        			else if(obj.id == "cboUpmu2")
        			{
        				this.divContents.form.divInput.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        				this.dsSvKmMt.setColumn(0, "UPMU_ID3", undefined);
        			}
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			dsObj.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 선택 -"));

        			if(obj.id == "cboUpmu1")
        			{
        				this.dsSvKmMt.setColumn(0, "UPMU_ID2", undefined);
        				this.divContents.form.divInput.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        			}
        			else if(obj.id == "cboUpmu2")
        			{
        				this.dsSvKmMt.setColumn(0, "UPMU_ID3", undefined);
        				this.divContents.form.divInput.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        			}

        			if(obj.id == "cboUpmu1")
        			{
        				this.dsUpmu3.clearData();
        				aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 선택 -"));
        				this.dsSvKmMt.setColumn(0, "UPMU_ID3", undefined);
        				this.divContents.form.divInput.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        			}
        		}

        		if(obj.id == "cboUpmu1")
        		{
        			var fRow = dsObj.findRow("CMM_CD", upmuId2);
        			//trace("cboUpmu1 this.cboOnItemChanged() upmuId2 ::: " + upmuId2 + " this.dsUpmu2.rowcount : " + this.dsUpmu2.rowcount);

        			if(fRow == -1)
        			{
        				this.divContents.form.divInput.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        				this.dsSvKmMt.setColumn(0, "UPMU_ID2", undefined);

        				this.dsUpmu3.clearData();
        				var aRow = this.dsUpmu3.addRow();
        				this.dsUpmu3.setColumn(aRow, "CMM_CD_NM", Ex.core.word("- 선택 -"));
        				this.divContents.form.divInput.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));
        				this.dsSvKmMt.setColumn(0, "UPMU_ID3", undefined);
        			}
        			else
        			{
        				this.divContents.form.divInput.form.cboUpmu2.set_text(Ex.core.word("- 선택 -"));
        				this.dsSvKmMt.setColumn(0, "UPMU_ID2", undefined);

        				this.dsSvKmMt.setColumn(0, "UPMU_ID2", upmuId2);
        				//trace("AA this.divContents.form.cboUpmu2.index : " + this.divContents.form.divInput.form.cboUpmu2.index + " fRow : " + fRow + " upmuId2 : " + upmuId2);
        			}
        		}
        		else if(obj.id == "cboUpmu2")
        		{
        			var fRow = dsObj.findRow("CMM_CD", upmuId3);
        			//trace("cboUpmu1 this.cboOnItemChanged() upmuId2 ::: " + upmuId2 + " this.dsUpmu3.rowcount : " + this.dsUpmu3.rowcount);

        			if(fRow == -1)
        			{
        				this.dsSvKmMt.setColumn(0, "UPMU_ID3", undefined);
        			}
        			else
        			{
        				this.dsSvKmMt.setColumn(0, "UPMU_ID3", undefined);
        				this.divContents.form.divInput.form.cboUpmu3.set_text(Ex.core.word("- 선택 -"));

        				this.dsSvKmMt.setColumn(0, "UPMU_ID3", upmuId3);
        				//trace("BB this.divContents.form.cboUpmu3.index : " + this.divContents.form.divInput.form.cboUpmu3.index + " fRow : " + fRow + " upmuId3 : " + upmuId3);
        			}
        		}
        	}
        };

        // 공통 oncloumnchanged event : dataset
        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.onBeforeClose = function(obj,e)
        {
        	if(!this.isCloseBtnClick) if(this.saveFlg == "Y") this.getOwnerFrame()._formObj.fnSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.divBtnBottom.form.btnModify.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnRjct.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.divBtnBottom.form.btnAppv.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.divBtnBottom.form.btnDelete.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.divContents.form.divInput.form.Static06.addEventHandler("onclick",this.divContents_divInput_Static06_onclick,this);
            this.divContents.form.divInput.form.edtKmCateGbnNm.addEventHandler("onkeydown",this.doKeyup,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("FOMM0271_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
