(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0120_W");
            this.set_titletext("권한그룹관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_AUTH_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAuthMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAuthUserDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAuthDeptDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAuthExtdDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelExtd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCdSel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthTypeCdSel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcTypeCd", this);
            obj._setContents("");
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

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("staAuthId","20","13","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("권한그룹명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtAuthId","99","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staAuthNm","269","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("그룹유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","239","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","478","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserNm","508","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("관리자여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboAdminYn","590","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","730","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserNm00","760","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","828","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_readonly("false");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboAuthTypeCd","338","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsAuthTypeCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdAuthMt","0","104",null,null,"40%","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommAuthMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" text=\"그룹코드\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"권한그룹명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"업무구분\" cssclass=\"grdHCell_WF_essential\" validation=\"업무구분;NULL\"/><Cell col=\"6\" text=\"그룹유형\"/><Cell col=\"7\" text=\"관리자여부\" displaytype=\"normal\" edittype=\"none\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"8\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:AUTH_ID\" edittype=\"expr:ROWFLAG==&apos;I&apos;? &apos;text&apos; : &apos;none&apos;\" validation=\"그룹코드;NULL\" editmaxlength=\"15\"/><Cell col=\"4\" text=\"bind:AUTH_NM\" edittype=\"text\" validation=\"권한그룹명;NULL\"/><Cell col=\"5\" text=\"bind:SVC_TYPE_CD\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsSvcTypeCd\"/><Cell col=\"6\" text=\"bind:AUTH_TYPE_CD\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsAuthTypeCdSel\"/><Cell col=\"7\" text=\"bind:ADMIN_YN\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCdSel\" validation=\"관리자여부;NULL\"/><Cell col=\"8\" text=\"bind:USE_YN\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCdSel\" displaytype=\"combotext\" edittype=\"combo\" validation=\"사용여부;NULL\"/></Band></Format></Formats>");
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

            obj = new Div("divDeptTopBtn",null,"279","200","25","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteDept",null,"0","60",null,"0","0",null,null,null,null,this.divDeptTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divDeptTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddDept",null,"0","60",null,"65","0",null,null,null,null,this.divDeptTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divDeptTopBtn.addChild(obj.name, obj);

            obj = new Div("divUserTopBtn",null,"70","200","25","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteUser",null,"0","60",null,"0","0",null,null,null,null,this.divUserTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divUserTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddUser",null,"0","60",null,"65","0",null,null,null,null,this.divUserTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divUserTopBtn.addChild(obj.name, obj);

            obj = new Div("divExtdTopBtn",null,"489","200","25","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteExtd",null,"0","60",null,"0","0",null,null,null,null,this.divExtdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divExtdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddExtd",null,"0","60",null,"65","0",null,null,null,null,this.divExtdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divExtdTopBtn.addChild(obj.name, obj);

            obj = new Grid("grdAuthUserDt","grdAuthMt:20","104",null,"155","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsFommAuthUserDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"내선번호\"/><Cell col=\"6\" text=\"부서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:USER_NM\"/><Cell col=\"4\" text=\"bind:ROLE_NM\"/><Cell col=\"5\" text=\"bind:TELNUM\"/><Cell col=\"6\" text=\"bind:DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","grdAuthMt:0","105","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserTitle","grdAuthMt:20.00","70","326","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[권한그룹] 사용자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divAuthTopBtn",null,"70","200","25","40%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteAuth",null,"0","60",null,"0","0",null,null,null,null,this.divAuthTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divAuthTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddAuth",null,"0","60",null,"65","0",null,null,null,null,this.divAuthTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divAuthTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDownAuth",null,"0","60","24","130",null,null,null,null,null,this.divAuthTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divAuthTopBtn.addChild(obj.name, obj);

            obj = new Static("stcAuthTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("권한그룹 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","126.00","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommAuthMt");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntUserDt","1312.00","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommAuthUserDt");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthDeptDt","grdAuthMt:20","grdAuthUserDt:55",null,"155","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsFommAuthDeptDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"170\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"부서장\"/><Cell col=\"5\" text=\"상위부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:DEPT_MANAGER_NM\"/><Cell col=\"5\" text=\"bind:UP_DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","1124","259",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcDeptTItle","grdAuthMt:20.00","grdAuthUserDt:20","296","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[권한그룹] 부서 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntDeptDt","1284","279","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommAuthDeptDt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1124","304",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","1124","grdAuthDeptDt:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcExtdTitle","grdAuthMt:20.00","489","281","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[권한그룹] 확장권한 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntExtdDt","1328.00","489","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommAuthExtdDt");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthExtdDt","grdAuthMt:20","grdAuthDeptDt:55",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsFommAuthExtdDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"140\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"권한코드\"/><Cell col=\"3\" text=\"권한명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:EXTD_ID\"/><Cell col=\"3\" text=\"bind:EXTD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1124","514",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDeptTopBtn.form
            obj = new Layout("default","",0,0,this.divDeptTopBtn.form,function(p){});
            this.divDeptTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUserTopBtn.form
            obj = new Layout("default","",0,0,this.divUserTopBtn.form,function(p){});
            this.divUserTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divExtdTopBtn.form
            obj = new Layout("default","",0,0,this.divExtdTopBtn.form,function(p){});
            this.divExtdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAuthTopBtn.form
            obj = new Layout("default","",0,0,this.divAuthTopBtn.form,function(p){});
            this.divAuthTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtAuthId","value","dsCond","AUTH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboAdminYn","value","dsCond","ADMIN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.cboAuthTypeCd","value","dsCond","AUTH_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0120_W_BAK.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0120_W
        * 화면(명)		︰ 권한그룹 관리
        * 메뉴(경로)	︰ 관리자 > 권한관리 > 권한그룹 관리
        * 화면 설명	︰ SPP 기본 권한그룹 관리 화면
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.nLastRow = 0;	// 사용자정보 dataset 마지막 rowposition
        this.nSelRow = -1;	// 이동하려는 행
        this.rowChangeFlag = false;		// true: 행변경 가능

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
        	this.fnCompInit();		// 컴포넌트 초기화

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 조회
        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsFommAuthMt) ||
        		Ex.util.isUpdated(this.dsFommAuthUserDt) ||
        		Ex.util.isUpdated(this.dsFommAuthDeptDt) ||
        		Ex.util.isUpdated(this.dsFommAuthExtdDt) )
        	{
        		var param = {
        						id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	this.fnSearch01();
        }

        // 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0120W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommAuthMt=dsFommAuthMt";       // 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 권한별 사용자 목록 조회
        this.fnSearchAuthUser = function()
        {
        	var sTranId = "select02";
            var sService = "FOMM0120W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommAuthUserDt=dsFommAuthUserDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 권한별 부서 목록 조회
        this.fnSearchAuthDept = function()
        {
        	var sTranId = "select03";
            var sService = "FOMM0120W/select03";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommAuthDeptDt=dsFommAuthDeptDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 권한별 확장권한 목록 조회
        this.fnSearchAuthExtd = function()
        {
        	var sTranId = "select04";
            var sService = "FOMM0120W/select04";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommAuthExtdDt=dsFommAuthExtdDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0120W/save01";
            var sInDs = "dsFommAuthMt=dsFommAuthMt:U dsFommAuthUserDt=dsFommAuthUserDt:U dsFommAuthDeptDt=dsFommAuthDeptDt:U dsFommAuthExtdDt=dsFommAuthExtdDt:U dsCond=dsCond";
            var sOutDs = "dsFommAuthMt=dsFommAuthMt";
            var sArg = "";
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
        			this.grdAuthMt.setCellProperty("Head", this.grdAuthMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select02" :
        			this.grdAuthUserDt.setCellProperty("Head", this.grdAuthUserDt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select03" :
        			this.grdAuthDeptDt.setCellProperty("Head", this.grdAuthDeptDt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "select04" :
        			this.grdAuthExtdDt.setCellProperty("Head", this.grdAuthExtdDt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.dsFommAuthMt.set_rowposition(this.nLastRow);
        			this.grdAuthMt.setCellProperty("Head", this.grdAuthMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			this.grdAuthUserDt.setCellProperty("Head", this.grdAuthUserDt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{
        		case "selectUserPop" :
        			if( Ex.isEmpty(varValue) )
        				return;

        			this.dsSelUser.loadXML(varValue);

        			// 중복 validation
        			for(var i = 0 ; i < this.dsSelUser.rowcount ; i++){
        			var selUserId = this.dsSelUser.getColumn(i, 'USER_ID');
        			var duplRow = this.dsFommAuthUserDt.findRow('USER_ID', selUserId);
        			if( duplRow >= 0) {
        				var param = {
        						id : "alert_selUserDupl"
        					  , msg : "10005"
        					  , arrparam : [Ex.core.word('사용자')]
        					  , msgtype : "I"};
        				Ex.core.alert(this, param);
        				return;
        			}

        			var rowPos = this.dsFommAuthUserDt.setInsertRow(this.dsFommAuthUserDt.rowposition+1);
        			this.dsFommAuthUserDt.setCopyRow(rowPos, this.dsSelUser, i);
        			}
        			break;

        		case "selectDeptPop" :
        			if( Ex.isEmpty(varValue) )
        				return;

        			this.dsSelDept.loadXML(varValue);

        			// 중복 validation
        			var selDeptCd = this.dsSelDept.getColumn(0, 'DEPT_CD');
        //console.log('  SBYi  -  fnPopupAfter   ----------------  selDeptCd : ' + selDeptCd);
        			var duplRow = this.dsFommAuthDeptDt.findRow('DEPT_CD', selDeptCd);
        			if( duplRow >= 0) {
        				var param = {
        						id : "alert_selDeptDupl"
        					  , msg : "10005"
        					  , arrparam : [Ex.core.word('부서')]
        					  , msgtype : "I"};
        				Ex.core.alert(this, param);
        				return;
        			}

        			for(var i = 0 ; i < this.dsSelDept.rowcount ; i++ ) {
        				var rowPos = this.dsFommAuthDeptDt.setInsertRow(this.dsFommAuthDeptDt.rowposition+1);
        				this.dsFommAuthDeptDt.setCopyRow(rowPos, this.dsSelDept, i);
        			}
        			break;

        		case "selectExtdPop" :
        			if( Ex.isEmpty(varValue) )
        				return;

        			this.dsSelExtd.loadXML(varValue);

        			// 중복 validation
        			for(var i = 0 ; i < this.dsSelExtd.rowcount ; i++){
        			var selExtdId = this.dsSelExtd.getColumn(i, 'EXTD_ID');
        			var duplRow = this.dsFommAuthExtdDt.findRow('EXTD_ID', selExtdId);
        			if( duplRow >= 0) {
        				var param = {
        						id : "alert_selDeptDupl"
        					  , msg : "10005"
        					  , arrparam : [Ex.core.word('확장권한')]
        					  , msgtype : "I"};
        				Ex.core.alert(this, param);
        				return;
        			}

        			var rowPos = this.dsFommAuthExtdDt.setInsertRow(this.dsFommAuthExtdDt.rowposition+1);
        			this.dsFommAuthExtdDt.setCopyRow(rowPos, this.dsSelExtd, i);
        			}
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
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.nLastRow = this.dsFommAuthMt.rowposition;	// 마지막 rowposition 저장
        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSetDatasetDt();	// 권한 추가 전 dataset data setting
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsFommAuthMt.set_rowposition(this.nSelRow);
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
        	this.grdAuthMt.displayRowType();
        	this.grdAuthUserDt.displayRowType();
        	this.grdAuthDeptDt.displayRowType();
        	this.grdAuthExtdDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	// 사용자 목록
        	var arrBtn = [this.divAuthTopBtn.form.btnAddAuth, this.divUserTopBtn.form.btnAddUser];			// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divAuthTopBtn.form.btnDeleteAuth, this.divUserTopBtn.form.btnDeleteUser];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        	// 부서 목록
        	var arrBtn = [this.divAuthTopBtn.form.btnAddAuth, this.divDeptTopBtn.form.btnAddDept];			// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divAuthTopBtn.form.btnDeleteAuth, this.divDeptTopBtn.form.btnDeleteDept];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        	// 확장권한 목록
        	var arrBtn = [this.divAuthTopBtn.form.btnAddAuth, this.divExtdTopBtn.form.btnAddExtd];			// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divAuthTopBtn.form.btnDeleteAuth, this.divExtdTopBtn.form.btnDeleteExtd];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        		arrBtn = [this.divAuthTopBtn.form.btnExcelDownAuth];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divAuthTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divUserTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divDeptTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divExtdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'YN_CD',		'AUTH_TYPE_CD',		'AUTH_TYPE_CD',			'SVC_TYPE_CD']		// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD',		'CMM_CD',			'CMM_CD',				'CMM_CD']			// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'SEL',			'ALL',				'SEL',					'SEL']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y',			'Y',				'Y',					'Y']				// 사용여부
        		,filter	: ['',			'',				'',					'',						'']					// filterStr
        		,objDs	: [this.dsYnCd,	this.dsYnCdSel,	this.dsAuthTypeCd,	this.dsAuthTypeCdSel,	this.dsSvcTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsFommAuthMt) &&
        		!Ex.util.isUpdated(this.dsFommAuthUserDt) &&
        		!Ex.util.isUpdated(this.dsFommAuthDeptDt) &&
        		!Ex.util.isUpdated(this.dsFommAuthExtdDt) )
        		return false;

        	// Grid Validation
        	if( !this.grdAuthMt.checkValidate() )
        		return false;

        	return true;
        }

        this.fnSetDatasetDt = function()
        {
        	var authId = this.dsFommAuthMt.getColumn(this.dsFommAuthMt.rowposition, 'AUTH_ID');

        	this.dsFommAuthUserDt.set_enableevent(false);
        	this.dsFommAuthUserDt.set_filterstr("ROWFLAG=='U' || ROWFLAG == 'I'");
        	for(var i = 0; i < this.dsFommAuthUserDt.rowcount; i++) {
        		this.dsFommAuthUserDt.setColumn(i, 'AUTH_ID', authId);
        	}
        	this.dsFommAuthUserDt.set_filterstr('');
        	this.dsFommAuthUserDt.set_enableevent(true);

            this.dsFommAuthDeptDt.set_enableevent(false);
        	this.dsFommAuthDeptDt.set_filterstr("ROWFLAG=='U' || ROWFLAG == 'I'");
        	for(var i = 0; i < this.dsFommAuthDeptDt.rowcount; i++) {
        		this.dsFommAuthDeptDt.setColumn(i, 'AUTH_ID', authId);
        	}
        	this.dsFommAuthDeptDt.set_filterstr('');
        	this.dsFommAuthDeptDt.set_enableevent(true);

            this.dsFommAuthExtdDt.set_enableevent(false);
        	this.dsFommAuthExtdDt.set_filterstr("ROWFLAG=='U' || ROWFLAG == 'I'");
        	for(var i = 0; i < this.dsFommAuthExtdDt.rowcount; i++) {
        		this.dsFommAuthExtdDt.setColumn(i, 'AUTH_ID', authId);
        	}
        	this.dsFommAuthExtdDt.set_filterstr('');
        	this.dsFommAuthExtdDt.set_enableevent(true);
        }


        this.fnAddAuth = function()
        {
        	var rowPos = this.dsFommAuthMt.setInsertRow(this.dsFommAuthMt.rowposition+1);
        	this.dsFommAuthMt.setColumn(rowPos, 'AUTH_TYPE_CD', '');
        	this.dsFommAuthMt.setColumn(rowPos, 'ADMIN_YN', 'N');
        	this.dsFommAuthMt.setColumn(rowPos, 'USE_YN', 'Y');
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAddAuth' : 	// 권한 그리드 추가
        			this.fnAddAuth();
        			break;
        		case 'btnDeleteAuth' :	// 권한 그리드 삭제
        			this.fnDelete(this.dsFommAuthMt);
        			break;
        		case 'btnExcelDownAuth' :	// 권한 목록 엑셀 다운
        			var oInfo = {
           				Grid	: this.grdAuthMt,
           				Sheet	: '권한그룹',
           				FileNm	: "SPP_권한그룹",
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case 'btnAddUser' :	// 사용자 그리드 추가
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;
        		case 'btnDeleteUser' :	// 사용자 그리드 삭제
        			this.fnDelete(this.dsFommAuthUserDt);
        			break;

        		case 'btnAddDept' :	// 부서 그리드 추가
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectDeptPop',
        							"fomm::FOMM0000_P06.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('부서 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							//"width=440,height=580"                  // <--- width/height/modeless(프레임 처리 옵션)
        							"autosize"
        				  );
        			break;
        		case 'btnDeleteDept' :	// 부서 그리드 삭제
        			this.fnDelete(this.dsFommAuthDeptDt);
        			break;

        		case 'btnAddExtd' :	// 확장권한 그리드 추가
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectExtdPop',
        							"fomm::FOMM0000_P05.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('확장권한 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=600,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;
        		case 'btnDeleteExtd' :	// 확장권한 그리드 삭제
        			this.fnDelete(this.dsFommAuthExtdDt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() ) {
        				var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }

        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };


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

        this.dsFommAuthMt_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsFommAuthUserDt) )
        	{
        		if( !this.rowChangeFlag ) {
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {
        						id : "rowposChangeConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}

        	return true;
        };


        this.dsFommAuthMt_onrowposchanged = function(obj,e)
        {
        	this.dsFommAuthUserDt.clearData();
        	this.dsFommAuthDeptDt.clearData();
        	this.dsFommAuthExtdDt.clearData();

        	var authId 	= obj.getColumn(e.newrow, 'AUTH_ID');
        	var authNm 	= obj.getColumn(e.newrow, 'AUTH_NM')||Ex.core.word('새 권한그룹');

        	// Grid title 처리
        	this.stcUserTitle.set_text('[' + authNm + '] ' + Ex.core.word('사용자 목록') );
        	this.stcDeptTItle.set_text('[' + authNm + '] ' + Ex.core.word('부서 목록') );
        	this.stcExtdTitle.set_text('[' + authNm + '] ' + Ex.core.word('확장권한 목록') );
        	// cnt 위치 조정
        	var objSize = nexacro.getTextSize(this.stcUserTitle.text, this.stcUserTitle._getCurrentStyleInheritValue("font"));
        	var nWidth = parseInt(objSize.nx) + 25;
        	this.stcCntUserDt.set_left(this.stcUserTitle.getOffsetLeft() + nWidth);
        	objSize = nexacro.getTextSize(this.stcDeptTItle.text, this.stcDeptTItle._getCurrentStyleInheritValue("font"));
        	nWidth = parseInt(objSize.nx) + 25;
        	this.stcCntDeptDt.set_left(this.stcDeptTItle.getOffsetLeft() + nWidth);
        	objSize = nexacro.getTextSize(this.stcExtdTitle.text, this.stcExtdTitle._getCurrentStyleInheritValue("font"));
        	nWidth = parseInt(objSize.nx) + 25;
        	this.stcCntExtdDt.set_left(this.stcExtdTitle.getOffsetLeft() + nWidth);

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEL_AUTH_ID', authId);
        	this.fnSearchAuthUser();
        	this.fnSearchAuthDept();
        	this.fnSearchAuthExtd();

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.edtAuthId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboAdminYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboUseYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboAuthTypeCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divDeptTopBtn.form.btnDeleteDept.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDeptTopBtn.form.btnAddDept.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUserTopBtn.form.btnDeleteUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUserTopBtn.form.btnAddUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divExtdTopBtn.form.btnDeleteExtd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divExtdTopBtn.form.btnAddExtd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divAuthTopBtn.form.btnDeleteAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divAuthTopBtn.form.btnAddAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divAuthTopBtn.form.btnExcelDownAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommAuthMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommAuthMt.addEventHandler("canrowposchange",this.dsFommAuthMt_canrowposchange,this);
            this.dsFommAuthMt.addEventHandler("onrowposchanged",this.dsFommAuthMt_onrowposchanged,this);
            this.dsFommAuthUserDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommAuthDeptDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommAuthExtdDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0120_W_BAK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
