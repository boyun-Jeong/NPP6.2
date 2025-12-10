(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0300_P01");
            this.set_titletext("작업 캘린더 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,767);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWorkList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_CAL_ID\" type=\"STRING\" size=\"20\"/><Column id=\"WORK_REG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BZSYS_CAT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"WORK_NO\" type=\"STRING\" size=\"20\"/><Column id=\"WORK_SDT\" type=\"STRING\" size=\"8\"/><Column id=\"WORK_STIME\" type=\"STRING\" size=\"4\"/><Column id=\"WORK_EDT\" type=\"STRING\" size=\"8\"/><Column id=\"WORK_ETIME\" type=\"STRING\" size=\"4\"/><Column id=\"WORK_END_YN\" type=\"STRING\" size=\"1\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"50\"/><Column id=\"WORK_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"1\"/><Column id=\"WORK_BRIEF\" type=\"STRING\" size=\"200\"/><Column id=\"WORK_CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"REG_DATETIME\" type=\"STRING\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"REG_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LMOD_DATETIME\" type=\"STRING\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LMOD_DEPT_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"DATA\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCdGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"DATA\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompYnGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"DATA\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContents","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","19",null,"34","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00","20","54",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","64","82","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_text("작업 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Grid("grdSchedule","20","98",null,"195","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsWorkList");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("onsummclick").set("grdScheduleList_onsummclick");
            obj.set_autoupdatetype("itemselect");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"500\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" cssclass=\"CellEssential\" text=\"시작일시\"/><Cell col=\"4\" text=\"업무구분\"/><Cell col=\"5\" text=\"작업번호\"/><Cell col=\"6\" text=\"제목\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"expr:WORK_USER_ID==Ex.util.getSession(&apos;gvUserId&apos;) &amp;&amp; (ROWFLAG == &apos;I&apos; || CHK != &apos;&apos;) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:WORK_USER_ID==Ex.util.getSession(&apos;gvUserId&apos;) &amp;&amp; (ROWFLAG == &apos;I&apos; || CHK != &apos;&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" expandshow=\"hide\" expandsize=\"30\" expandimage=\"URL(&apos;img::pmnu_WF_Expand.png&apos;)\" expr=\"WORK_SDT + WORK_STIME\" maskeditformat=\"####-##-## ##:##\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"4\" text=\"bind:BZSYS_CAT_CD\" combodataset=\"dsSvcCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:WORK_NO\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left;\" text=\"bind:WORK_BRIEF\" textAlign=\"left\" validation=\"제목;NULL\" validationStatus=\"false\"/><Cell col=\"7\" combodataset=\"dsCompYnGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\" text=\"bind:WORK_END_YN\" validationStatus=\"false\" validation=\"상태;NULL\"/></Band></Format></Formats>");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_00_00","20","88",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"64","155","24","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContents.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContents.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divContents.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContents.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcToday","20","20","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("작업일자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calToday","stcToday:5","24","130","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_readonly("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static05_01","20","309","202","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("작업 상세 내용");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid1_00","20","333",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid1_01","20","293",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcCnt","Static05_00:5","64","60","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWorkList");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divInput","20","343",null,"364","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcContentsBg","0","132",null,"232","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static13","0","0",null,"34","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("WorkDtTime","0","0","130","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("2");
            obj.set_text("작업기간");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new TextArea("txaWorkCont","135","137",null,"222","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("3");
            obj.set_cssclass("txa_WF_normal");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","66",null,"34","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcWorkEndYn","50.00%","66","130","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("19");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Div("divWorkUser","135","71",null,"24","stcWorkEndYn:5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("5");
            obj.set_url("fomm::FOMM0000_D02.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Calendar("calWorkSdt","135","5","120","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new MaskEdit("mskWorkStime","calWorkSdt:2","5","55","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("7");
            obj.set_format("##:##");
            obj.set_trimtype("both");
            obj.set_type("string");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","33",null,"34","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static00","mskWorkStime:5","5","10","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Calendar("calWorkEdt","Static00:5","5","120","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new MaskEdit("mskWorkEtime","calWorkEdt:2","5","55","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("11");
            obj.set_format("##:##");
            obj.set_trimtype("both");
            obj.set_type("string");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcWorkUser","0","66","130","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("12");
            obj.set_text("작업자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","0","99",null,"34","0",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","99","130","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtTitle","135","104",null,"24","5",null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Edit("edtWorkNo","135","38","150","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("input01");
            obj.set_readonly("true");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcSysType","50.00%","33","130","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("17");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Combo("cboSysType","stcSysType:5","38","170","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsSvcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Combo("cboWorkEndYn","stcWorkEndYn:5","71","170","24",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsCompYn");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcWorkNo","0","33","130","34",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("21");
            obj.set_text("작업번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.form.divInput.addChild(obj.name, obj);

            obj = new Static("stcWorkCont","0","132","130","232",null,null,null,null,null,null,this.divContents.form.divInput.form);
            obj.set_taborder("22");
            obj.set_text("작업내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.form.divInput.addChild(obj.name, obj);

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
            //-- Default Layout : this.divContents.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContents.form.divGrdTopBtn.form,function(p){});
            this.divContents.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divInput.form.divWorkUser
            obj = new Layout("default","",0,0,this.divContents.form.divInput.form.divWorkUser.form,function(p){});
            this.divContents.form.divInput.form.divWorkUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divInput.form
            obj = new Layout("default","",0,0,this.divContents.form.divInput.form,function(p){});
            this.divContents.form.divInput.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",880,767,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","divContents.form.calToday","value","dsCond","WORK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContents.form.divInput.form.txaWorkCont","value","dsWorkList","WORK_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.divInput.form.calWorkSdt","value","dsWorkList","WORK_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.divInput.form.mskWorkStime","value","dsWorkList","WORK_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.divInput.form.calWorkEdt","value","dsWorkList","WORK_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.divInput.form.mskWorkEtime","value","dsWorkList","WORK_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.divInput.form.edtTitle","value","dsWorkList","WORK_BRIEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.divInput.form.edtWorkNo","value","dsWorkList","WORK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.divInput.form.cboSysType","value","dsWorkList","BZSYS_CAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.divInput.form.cboWorkEndYn","value","dsWorkList","WORK_END_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D02.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FOMM0300_P01.xfdl","lib::lib_PjComm.xjs");
        this.registerScript("FOMM0300_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0300_P01
        * 화면(명)		︰ 작업 캘린더 팝업
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.12.15
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.11.01	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_PjComm.xjs"); /*include "lib::lib_PjComm.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.chkRow;					//Validation 체크시 row값 설정(포커스 이동용)
        this.saveFlg = "N";				//화면 저장 여부
        this.isCloseBtnClick = false;	//닫기 버튼을 눌러 닫는 경우 true
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        	//trace("[FOMM0300_P01] this.form_onload() this.getOwnerFrame()._formObj : " + this.getOwnerFrame()._formObj);
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
        	//trace("[FOMM0300_P01] this.fnSearch()");
        	var sTranId = "select01";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0300P/select01";							// 서비스명
            var sInDs = "dsCond=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWorkList=dsWorkList";		// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	//trace("[FOMM0300_P01] this.fnSave()");
        	var sTranId = "save01";
            var sService = "FOMM0300P/save01";
            var sInDs = "dsCond=dsCond dsWorkList=dsWorkList:U";
        	var sOutDs = "dsWorkList=dsWorkList";
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

        			var strWorkUserId    = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "WORK_USER_ID");
        			var strWorkUserNm    = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "WORK_USER_NM");
        			var strWorkDeptNm      = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "WORK_DEPT_NM");
        			this.divContents.form.divInput.form.divWorkUser.form.setValue(strWorkUserId, strWorkUserNm, strWorkDeptNm);
        			break;

        		case "save01" :
        			this.saveFlg = "Y";
        			Ex.core.toast(this, "10004", null, {toastType:'S'});

        			var strWorkUserId    = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "WORK_USER_ID");
        			var strWorkUserNm    = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "WORK_USER_NM");
        			var strWorkDeptNm      = this.dsWorkList.getColumn(this.dsWorkList.rowposition, "WORK_DEPT_NM");
        			this.divContents.form.divInput.form.divWorkUser.form.setValue(strWorkUserId, strWorkUserNm, strWorkDeptNm);
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :
        			//trace("varValue:\n" + varValue);
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
        			this.fnSave();
        			break;

        		case "alertChkWorkStime" :
        			if(this.dsWorkList.rowposition == this.chkRow)
        			{
        				this.divContents.form.divInput.form.mskWorkStime.setFocus();
        			}
        			break;

        		case "alertChkWorkEdt" :
        			if(this.dsWorkList.rowposition == this.chkRow)
        			{
        				this.divContents.form.divInput.form.calWorkEdt.setFocus();
        			}
        			break;

        		case "alertChkWorkETime" :
        			if(this.dsWorkList.rowposition == this.chkRow)
        			{
        				this.divContents.form.divInput.form.mskWorkEtime.setFocus();
        			}
        			break;

        		case "alertChkWorkEndYn" :
        			if(this.dsWorkList.rowposition == this.chkRow)
        			{
        				this.divContents.form.divInput.form.cboWorkEndYn.setFocus();
        			}
        			break;

        		case "alertChkWorkUser" :
        			break;

        		case "alertChkWorkTitle" :
        			if(this.dsWorkList.rowposition == this.chkRow)
        			{
        				this.divContents.form.divInput.form.edtTitle.setFocus();
        			}
        			break;

        		case "alertChkWorkDtI" :
        			if(this.dsWorkList.rowposition == this.chkRow)
        			{
        				this.divContents.form.mskWorkStime.setFocus();
        			}
        			break;

        		case "alertWorkDtimeI" :
        			if(this.dsWorkList.rowposition == this.chkRow)
        			{
        				this.divContents.form.mskWorkStime.setFocus();
        			}
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	Ex.util.setCompPropAll(
        						this,
        						this.divContents.form.divInput.form,
        						false,
        						[this.divContents.form.divInput.form.calWorkSdt,
        						 this.divContents.form.divInput.form.edtWorkNo,
        						 //this.divContents.form.divInput.form.divWorkUser,
        						]
        	);

        	this.dsCond.setColumn(0, "WORK_DT", this.getOwnerFrame().pWorkDt);
        	this.dsCond.setColumn(0, "WORK_USER_ID", this.getOwnerFrame().pWorkUserId);

        	//this.divContents.form.divInput.form.edtWorkNo.set_displaynulltext(Ex.core.word("자동생성"));

        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.divContents.form.grdSchedule.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divContents.form.divGrdTopBtn.form.btnAdd];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);

        	arrBtn = [this.divContents.form.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        	arrBtn = [this.divBtnBottom.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divBtnBottom, 'right', true);

        	this.fnSearch();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['COMP_YN',		'COMP_YN',			'SVC_CD',		'SVC_CD']			// 조회할 상위코드
        		,codeDiv	: ['CMM_CD',		'CMM_CD',			'WORKFLOW_CD',	'WORKFLOW_CD']		// 조회할 코드의 업무구분
        		,optStr		: ['SEL',			'',					'SEL',			'']					// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y',				'Y',				'Y',			'Y']				// 사용여부
        		,filter		: ['',				'',					'',				'']					// filterStr
        		,objDs		: [this.dsCompYn,	this.dsCompYnGrid,	this.dsSvcCd,	this.dsSvcCdGrid]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsWorkList))	return false;

        	for(var i=0; i<this.dsWorkList.rowcount; i++)
        	{
        		var rowVal = i+1;
        		var rowStr = Ex.core.word("행");
        		var rowInfo = "[" + rowVal + rowStr + "] ";

        		if( Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_STIME")) )
        		{
        			//"은(는) 필수 입력 항목입니다.";
        			this.chkRow = i;
        			var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11001), [Ex.core.word("작업기간[작업시간(FROM)]")]);
        			var oParam = {id : "alertChkWorkStime", msg : msgStr, arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        		else
        		{
        			rtn = Ex.util.checkType(this.dsWorkList.getColumn(i, "WORK_STIME"), "HHMI");
        			if(!rtn)
        			{
        				//"은(는) [시간/분] 입력 형식이 올바르지 않습니다."
        				this.chkRow = i;
        				var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11024), [Ex.core.word("작업기간[작업시간(FROM)]")]);
        				var oParam = {id : "alertChkWorkStime", msg : msgStr, arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}

        		if( Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_EDT")) )
        		{
        			//"은(는) 필수 입력 항목입니다.";
        			this.chkRow = i;
        			var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11001), [Ex.core.word("작업기간[작업일(TO)]")]);
        			var oParam = {id : "alertChkWorkEdt", msg : msgStr, arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        		else
        		{
        			rtn = Ex.util.checkType(this.dsWorkList.getColumn(i, "WORK_EDT"), "YYYYMMDD");
        			if(!rtn)
        			{
        				//"은(는) [날짜] 입력 형식이 올바르지 않습니다.";
        				this.chkRow = i;
        				var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11019), [Ex.core.word("작업기간[작업일(TO)]")]);
        				var oParam = {id : "alertChkWorkStime", msg : msgStr, arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}

        		if( Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_ETIME")) )
        		{
        			//"은(는) 필수 입력 항목입니다.";
        			this.chkRow = i;
        			var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11001), [Ex.core.word("작업기간[작업시간(TO)]")]);
        			var oParam = {id : "alertChkWorkETime", msg : msgStr, arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        		else
        		{
        			rtn = Ex.util.checkType(this.dsWorkList.getColumn(i, "WORK_ETIME"), "HHMI");
        			if(!rtn)
        			{
        				//"은(는) [시간/분] 입력 형식이 올바르지 않습니다."
        				this.chkRow = i;
        				var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11024), [Ex.core.word("작업기간[작업시간(TO)]")]);
        				var oParam = {id : "alertChkWorkETime", msg : msgStr, arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}

        		if( Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_END_YN")) )
        		{
        			//"은(는) 필수 입력 항목입니다.";
        			this.chkRow = i;
        			var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11001), [Ex.core.word(divContents.form.divInput.form.stcWorkEndYn.text)]);
        			var oParam = {id : "alertChkWorkEndYn", msg : msgStr, arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}

        		if( !Ex.isEmpty(this.dsWorkList.getColumn(i, "ROWFLAG")) &&
        			( Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_USER_ID")) ||
        			  Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_USER_NM")) ))
        		{
        			//"은(는) 필수 입력 항목입니다.";
        			this.chkRow = i;
        			var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11001), [Ex.core.word(divContents.form.divInput.form.stcWorkUser.text)]);
        			var oParam = {id : "alertChkWorkUser", msg : msgStr, arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}

        		if( Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_BRIEF")) )
        		{
        			//"은(는) 필수 입력 항목입니다.";
        			this.chkRow = i;
        			var msgStr = rowInfo + Ex.core.msgMapping(Ex.core.msg(11001), [Ex.core.word(this.divContents.form.divInput.form.stcTitle.text)]);
        			var oParam = {id : "alertChkWorkTitle", msg : msgStr, arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}

        		//기간체크
        		if( !Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_SDT")) && !Ex.isEmpty(this.dsWorkList.getColumn(i, "WORK_EDT")) )
        		{
        			if(this.dsWorkList.getColumn(i, "WORK_SDT") > this.dsWorkList.getColumn(0, "WORK_EDT"))
        			{
        				this.chkRow = i;
        				var msgStr = rowInfo + Ex.core.msgMapping(rowInfo + "작업기간 종료일은(는) 시작일보다 커야 합니다.", []);
        				var oParam = {id : "alertChkWorkDtI", msg : msgStr, arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}

        		var workSdTime = nexacro.toNumber( (this.dsWorkList.getColumn(i, "WORK_SDT") + this.dsWorkList.getColumn(i, "WORK_STIME")) );
        		var workEdTime = nexacro.toNumber( (this.dsWorkList.getColumn(i, "WORK_EDT") + this.dsWorkList.getColumn(i, "WORK_ETIME")) );

        		if(workSdTime > workEdTime)
        		{
        			this.chkRow = i;
        			var msgStr = rowInfo + Ex.core.msgMapping(rowInfo + "작업기간 [FROM~TO] 기간 설정이 올바르지 않습니다.", []);
        			var oParam = {id : "alertWorkDtimeI", msg : msgStr, arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}

        	//if( !this.divContents.form.grdSchedule.checkValidate(true) ) return false;
        	return true;
        }

        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	trace("[FOMM0300_P01] this.userDeptChangedCallBack() compId : " + compId);

        	if(compId == "divWorkUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsWorkList.setColumn(this.dsWorkList.rowposition, "WORK_USER_ID", dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsWorkList.setColumn(this.dsWorkList.rowposition, "WORK_DEPT_NM", dsRtnObj.getColumn(0, "USER_NM"));
        			this.dsWorkList.setColumn(this.dsWorkList.rowposition, "WORK_DEPT_NM",	dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsWorkList.setColumn(this.dsWorkList.rowposition, "WORK_USER_ID", "");
        			this.dsWorkList.setColumn(this.dsWorkList.rowposition, "WORK_DEPT_NM", "");
        			this.dsWorkList.setColumn(this.dsWorkList.rowposition, "WORK_DEPT_NM", "");
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
        		case "btnAdd" : 	// 저장
        			this.dsWorkList.set_enableevent(false);
        			var rowPos = this.dsWorkList.setInsertRow(this.dsWorkList.rowposition+1);

        			this.dsWorkList.setColumn(rowPos, "WORK_SDT", this.dsCond.getColumn(0, "WORK_DT"));
        			this.dsWorkList.setColumn(rowPos, "WORK_STIME", "0900");
        			this.dsWorkList.setColumn(rowPos, "WORK_EDT", this.dsCond.getColumn(0, "WORK_DT"));
        			this.dsWorkList.setColumn(rowPos, "WORK_ETIME", "1800");
        			this.dsWorkList.setColumn(rowPos, "WORK_END_YN", "N");
        			this.dsWorkList.setColumn(rowPos, "WORK_USER_ID", Ex.util.getSession('gvUserId'));
        			this.dsWorkList.setColumn(rowPos, "WORK_USER_NM", Ex.util.getSession('gvUserNm'));
        			this.dsWorkList.setColumn(rowPos, "WORK_DEPT_NM", Ex.util.getSession('gvDeptNm'));
        			this.dsWorkList.set_enableevent(true);

        			var strWorkUserId    = this.dsWorkList.getColumn(rowPos, "WORK_USER_ID");
        			var strWorkUserNm    = this.dsWorkList.getColumn(rowPos, "WORK_USER_NM");
        			var strWorkDeptNm      = this.dsWorkList.getColumn(rowPos, "WORK_DEPT_NM");
        			this.divContents.form.divInput.form.divWorkUser.form.setValue(strWorkUserId, strWorkUserNm, strWorkDeptNm);

        			var evt = nexacro.DSRowPosChangeEventInfo;
        			evt.newrow = rowPos;

        			this.dsOnRowposChanged(this.dsWorkList, evt);
        			//this.dsWorkList.setColumn(rowPos, 'UP_MENU_ID', upMenuId);
        			break;

        		case "btnDelete" : 	// 삭제
        			var delete_chk;
        			for(var i=0; i<this.dsWorkList.rowcount; i++)
        			{
        				var chk = this.dsWorkList.getColumn(i, "CHK");
        				if(chk == "1") delete_chk = true;
        			}
        			if(delete_chk) this.fnDelete(this.dsWorkList);
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
        			trace("this.saveFlg ::: " + this.saveFlg);
        			Ex.core.pclose(this, this.saveFlg);
        			break;
        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.dsOnRowposChanged = function(obj,e)
        {
        	var rowFlag = obj.getColumn(e.newrow, "ROWFLAG");

        	trace("this.dsOnRowposChanged() e.newrow : " + e.newrow + " rowFlag : " + rowFlag);

        	var isEdit = false;

        	if(rowFlag == "I" || obj.getColumn(e.newrow, "WORK_USER_ID") == Ex.util.getSession('gvUserId'))
        	{
        		isEdit = true;
        	}

        	trace("this.dsOnRowposChanged() isEdit : " + isEdit);

        	Ex.util.setCompPropAll(
        						this,
        						this.divContents.form.divInput.form,
        						isEdit,
        						[this.divContents.form.divInput.form.calWorkSdt,
        						 this.divContents.form.divInput.form.edtWorkNo,
        						 this.divContents.form.divInput.form.divWorkUser
        						]
        	);

        	if(isEdit)
        	{
        		if( !Ex.isEmpty(this.divContents.form.divInput.form.divWorkUser.form.edtUserId.value) )
        		{
        			this.divContents.form.divInput.form.divWorkUser.form.edtUserNm.set_readonly(true);
        			this.divContents.form.divInput.form.divWorkUser.form.btnSearchPop.set_enable(false);
        		}
        		else
        		{
        			this.divContents.form.divInput.form.divWorkUser.form.edtUserNm.set_readonly(false);
        			this.divContents.form.divInput.form.divWorkUser.form.btnSearchPop.set_enable(true);
        		}
        		this.divContents.form.divInput.form.divWorkUser.form.btnClear.set_enable(true);
        	}
        	else
        	{
        		this.divContents.form.divInput.form.divWorkUser.form.edtUserNm.set_readonly(true);
        		this.divContents.form.divInput.form.divWorkUser.form.btnSearchPop.set_enable(false);
        		this.divContents.form.divInput.form.divWorkUser.form.btnClear.set_enable(false);
        	}

        	if(rowFlag == "I")
        	{
        		this.divContents.form.divInput.form.edtTitle.setFocus();
        	}
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
            this.divContents.form.grdSchedule.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContents.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.divInput.form.WorkDtTime.addEventHandler("onclick",this.Static13_onclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWorkList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWorkList.addEventHandler("onrowposchanged",this.dsOnRowposChanged,this);
        };
        this.loadIncludeScript("FOMM0300_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
