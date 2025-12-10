(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1100_W");
            this.set_titletext("서비스별 담당자관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"svcClssCd\" type=\"STRING\" size=\"256\"/><Column id=\"bseLvl1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"bseLvl2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"staffNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\"/><Col id=\"CMM_CD_NM\">- 선택 -</Col></Row><Row><Col id=\"CMM_CD_NM\">발송시작시간</Col><Col id=\"CMM_CD\">NOTI_SND_STIME</Col></Row><Row><Col id=\"CMM_CD_NM\">발송완료시간</Col><Col id=\"CMM_CD\">NOTI_SND_ETIME</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">전체</Col></Row><Row><Col id=\"CMM_CD\">SR</Col><Col id=\"CMM_CD_NM\">서비스요청</Col></Row><Row><Col id=\"CMM_CD\">CAT</Col><Col id=\"CMM_CD_NM\">요청서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnVal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkTmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataSave", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDevprChk", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBatChg", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcissuStat","20.00","12","95","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("요청유형코드");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboIssuStat","stcissuStat:0","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSrType");
            obj.set_displayrowcount("12");
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","cboIssuStat:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm00","Static00_00_00:0.00","12","90","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("업무분류(대)");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm00","stcReqTmplatNm00:4","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_normal");
            obj.set_displaynulltext("업무분류(대)");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","edtReqTmplatNm00:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm00_00","Static00_00_00_00:0.00","12","90","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("업무분류(중)");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm00_00","stcReqTmplatNm00_00:4","12","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_displaynulltext("업무분류(중)");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","edtReqTmplatNm00_00:0","10","30",null,null,"0",null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcItsysCd","Static00_00_00_00_00_00_01:0.00","12","65","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtChkItm1_00","stcItsysCd:5","12","118","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.getSetter("readonlyYn").set("N");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validationCheckReadonly("false");
            obj.set_displaynulltext("담당자명");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdNoti","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj.set_suppresslevel("allskip");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"30\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"NO\"/><Cell col=\"3\" rowspan=\"2\" text=\"서비스유형\"/><Cell col=\"4\" rowspan=\"2\" text=\"업무분류(대)\"/><Cell col=\"5\" rowspan=\"2\" text=\"업무분류(중)\"/><Cell col=\"6\" rowspan=\"2\" text=\"팀명\"/><Cell col=\"7\" rowspan=\"2\" text=\"사번\"/><Cell col=\"8\" rowspan=\"2\" text=\"담당자명\"/><Cell col=\"9\" colspan=\"7\" text=\"담당 여부\"/><Cell col=\"16\" rowspan=\"2\" text=\"이력보기\" wordWrap=\"char\"/><Cell row=\"1\" col=\"9\" text=\"담당자\"/><Cell row=\"1\" col=\"10\" text=\"현장대리인\"/><Cell row=\"1\" col=\"11\" text=\"QA\"/><Cell row=\"1\" col=\"12\" text=\"PL\"/><Cell row=\"1\" col=\"13\" text=\"팀장\"/><Cell row=\"1\" col=\"14\" text=\"부장\"/><Cell row=\"1\" col=\"15\" text=\"기타\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:SVC_CLSS_CD\" displaytype=\"expr:Ex.isEmpty(SVC_CLSS_CD)?&apos;none&apos;:&apos;combotext&apos;\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" combodataset=\"dsSrType\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\"/><Cell col=\"4\" text=\"bind:BSE_LVL1_NM\"/><Cell col=\"5\" text=\"bind:BSE_LVL2_NM\" expandshow=\"hide\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:STAFF_ID\" cssclass=\"expr:USER_USE_YN==&apos;N&apos;?&apos;grdBCell_WF_danger&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"expr:USER_USE_YN==&apos;N&apos; &amp;&amp; STAFF_NM.indexOf(&apos;퇴사&apos;)==-1?STAFF_NM+&apos;(퇴사)&apos;:STAFF_NM\" textAlign=\"center\" cssclass=\"expr:USER_USE_YN==&apos;N&apos;?&apos;grdBCell_WF_danger&apos;:&apos;&apos;\" tooltiptext=\"expr:USER_USE_YN==&apos;N&apos;?RTRM_DT:STAFF_NM\"/><Cell col=\"9\" text=\"bind:LVL1_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"10\" text=\"bind:LVL2_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LVL3_STAFF_YN\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LVL4_STAFF_YN\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"13\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LVL5_STAFF_YN\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"14\" text=\"bind:LVL6_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"15\" text=\"bind:LVL7_STAFF_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"16\" expandshow=\"expr:HIST_CNT&gt;0?&apos;show&apos;:&apos;hide&apos;\" expandsize=\"30\"/></Band></Format><Format id=\"excel01\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"250\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"서비스유형\"/><Cell col=\"1\" text=\"업무분류(대)코드\"/><Cell col=\"2\" text=\"업무분류(중)코드\"/><Cell col=\"3\" text=\"사번ID\"/><Cell col=\"4\" text=\"담당자명\"/><Cell col=\"5\" text=\"업무분류(대)명\"/><Cell col=\"6\" text=\"업무분류(중)명\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"현장대리인\"/><Cell col=\"9\" text=\"QA\"/><Cell col=\"10\" text=\"PL\"/><Cell col=\"11\" text=\"팀장\"/><Cell col=\"12\" text=\"부장\"/><Cell col=\"13\" text=\"기타\"/><Cell col=\"14\" text=\"LVL8_STAFF_YN\"/><Cell col=\"15\" text=\"LVL9_STAFF_YN\"/><Cell col=\"16\" text=\"BIGO\"/><Cell col=\"17\" text=\"REG_USER_ID\"/><Cell col=\"18\" text=\"REG_USER_NM\"/><Cell col=\"19\" text=\"REG_STIME\"/><Cell col=\"20\" text=\"LMOD_USER_ID\"/><Cell col=\"21\" text=\"LMOD_USER_NM\"/><Cell col=\"22\" text=\"SYSMODTIME\"/></Band><Band id=\"body\"><Cell text=\"bind:SVC_CLSS_CD\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" combodataset=\"dsSrType\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\"/><Cell col=\"1\" text=\"bind:BSE_LVL1_CD\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:BSE_LVL2_CD\" expandshow=\"hide\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:STAFF_ID\" cssclass=\"expr:USER_USE_YN==&apos;N&apos;?&apos;grdBCell_WF_danger&apos;:&apos;&apos;\" displaytype=\"normal\"/><Cell col=\"4\" textAlign=\"center\" cssclass=\"expr:USER_USE_YN==&apos;N&apos;?&apos;grdBCell_WF_danger&apos;:&apos;&apos;\" displaytype=\"normal\" text=\"bind:STAFF_NM\"/><Cell col=\"5\" text=\"bind:BSE_LVL1_NM\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:BSE_LVL2_NM\" expandshow=\"hide\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:LVL1_STAFF_YN\" displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:LVL2_STAFF_YN\" displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"checkbox\" text=\"bind:LVL3_STAFF_YN\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"checkbox\" text=\"bind:LVL4_STAFF_YN\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"checkbox\" text=\"bind:LVL5_STAFF_YN\"/><Cell col=\"12\" text=\"bind:LVL6_STAFF_YN\" displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"13\" text=\"bind:LVL7_STAFF_YN\" displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"14\" text=\"bind:LVL8_STAFF_YN\"/><Cell col=\"15\" text=\"bind:LVL9_STAFF_YN\"/><Cell col=\"16\" text=\"bind:BIGO\"/><Cell col=\"17\" text=\"bind:REG_USER_ID\"/><Cell col=\"18\" text=\"bind:REG_USER_NM\"/><Cell col=\"19\" text=\"bind:REG_STIME\"/><Cell col=\"20\" text=\"bind:LMOD_USER_ID\"/><Cell col=\"21\" text=\"bind:LMOD_USER_NM\"/><Cell col=\"22\" text=\"bind:SYSMODTIME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("서비스별 담당자관리");
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

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","750","24","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnXlsUp",null,"0","120","24","btnExcelDown:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_excelUp");
            obj.set_text("담당자 일괄등록");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnHisReg",null,"0","80","24","btnXlsUp:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("4");
            obj.set_text("변경사유등록");
            obj.set_cssclass("btn_WF_Btn03");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnIssuChk",null,"0","120","24","btnHisReg:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("3");
            obj.set_text("변경사유등록(일괄)");
            obj.set_cssclass("btn_WF_Btn03");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","60","24","btnIssuChk:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","btnDel:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnChgDevpr",null,"0","80","24","btnAdd:4",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("담당자변경");
            obj.set_cssclass("btn_WF_Btn03");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:10.00","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtSndUsr","value","dsCond","NOTI_CGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboDateType","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.stcissuStat","value","dsCond","ISE_SCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.Static00_00_00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.Static00_00_00_00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.stcItsysCd","value","dsCond","RESC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.cboIssuStat","value","dsCond","svcClssCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.edtReqTmplatNm00","value","dsCond","bseLvl1Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearchArea.form.edtReqTmplatNm00_00","value","dsCond","bseLvl2Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearchArea.form.edtChkItm1_00","value","dsCond","staffNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1100_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM1100_W
        * 화면(명)		︰ 서비스별 담당자관리
        * 메뉴(경로)	︰ 관리자 > 사용자권한관리 > 서비스별 담당자관리
        * 화면 설명	︰ 서비스별 담당자관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.11
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.11	 WEMB	최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.sysAdminYn = 'N';  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.
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
        	this.sysAdminYn = Ex.util.getSession('gvAdminYn');
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

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "selectStaffSvcMng";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1100W/selectStaffSvcMng";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            //var sArg = "admYn='"+this.sysAdminYn+"'";	// 서버 @ParamVariable 인자와 맵핑됨
        	var sArg = "admYn=''";	// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSave = function()
        {
        	this.dsDataSave.clearData();
        	this.dsData.enableevent = false;
        	this.dsData.filter("!Ex.isEmpty(ROWFLAG)");
        	this.dsDataSave.copyData(this.dsData,true);
        	this.dsData.filter("");
        	this.dsData.enableevent = true;

        	var sTranId = "save01";
            var sService = "FOMM1100W/save01";
            var sInDs = "dsData=dsDataSave dsCond=dsCond";
            var sOutDs = "dsData=dsData";
            var sArg = "admYn='"+this.sysAdminYn+"'";	// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "selectStaffSvcMng" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        				//this.fnSearch();
        				Ex.core.toast(this, "10004");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        		case "selectSvcStaffReg" :
        			if(!Ex.isEmpty(varValue))
        			{
        				this.dsRtnVal.clear();
        				this.dsRtnVal.loadXML(varValue);

        				this.dsRtnUser.clear();
        				this.dsRtnUser.loadXML(this.dsRtnVal.getColumn(0,"rstUser"));

        				this.dsRtnType.clear();
        				this.dsRtnType.loadXML(this.dsRtnVal.getColumn(0,"rstType"));

        				var svcClssCd = this.dsRtnType.getColumn(0,"FLAG");
        				var bseLvl1Cd = this.dsRtnType.getColumn(0,"SR_TYPE");
        				var bseLvl1Nm = this.dsRtnType.getColumn(0,"SR_CAT_TYPE");
        				var bseLvl2Cd = this.dsRtnType.getColumn(0,"SR_CAT_ID");
        				var bseLvl2Nm = this.dsRtnType.getColumn(0,"SR_CAT_NAME");

        				for(var i = 0 ; i < this.dsRtnUser.rowcount ; i++)
        				{
        					//var rowPos = this.dsData.setInsertRow(this.dsData.rowposition+1);
        					var aRow = this.dsData.setAddRow();
        					this.dsData.setColumn(aRow, "STAFF_ID", this.dsRtnUser.getColumn(i,"USER_ID"));
        					this.dsData.setColumn(aRow, "STAFF_NM", this.dsRtnUser.getColumn(i,"USER_NM"));
        					this.dsData.setColumn(aRow, "DEPT_NM", this.dsRtnUser.getColumn(i,"DEPT_NM"));

        					this.dsData.setColumn(aRow, "SVC_CLSS_CD", svcClssCd);
        					this.dsData.setColumn(aRow, "BSE_LVL1_CD", bseLvl1Cd);
        					this.dsData.setColumn(aRow, "BSE_LVL1_NM", bseLvl1Nm);
        					this.dsData.setColumn(aRow, "BSE_LVL2_CD", bseLvl2Cd);
        					this.dsData.setColumn(aRow, "BSE_LVL2_NM", bseLvl2Nm);
        				}
        			}
        			break;

        		case "chgHisRegMultiPop" :
        			if(!Ex.isEmpty(varValue))
        			{
        				this.dsData.enableevent = false;
        				this.dsData.set_filterstr("CHK=='1'");

        				for(var i=0;i<this.dsData.rowcount;i++)
        				{
        					this.dsData.setColumn(i,"CHG_REASON", varValue);
        				}
        				this.dsData.set_filterstr("");
        				this.dsData.enableevent = true;
        			}
        			break;

        		case "chgHisRegPop" :
        			if(!Ex.isEmpty(varValue))
        			{
        				this.dsData.setColumn(this.dsData.rowposition, "CHG_REASON", varValue);
        				//this.fnSearch();
        			}
        			break;

        		case "batchRegPop" :
        		case "chgSvcStaffReg":
        			if(!Ex.isEmpty(varValue))
        			{
        				this.fnSearch();
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
        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "searchConfirm" :
        			this.fnSearch();
        			break;
        	}
        }


        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.grdNoti.displayRowType();

        	//this.fnGetCmmCd();

        	var	arrBtn = [this.divGrdTopBtn.form.btnExcelDown];
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

        	if(this.sysAdminYn == "Y") {
        		this.divGrdTopBtn.form.btnXlsUp.visible = true;
        	}

        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	this.divGrdTopBtn.visible = true;

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : [ "YN_CD2",		]	// 조회할 상위코드
        		,codeDiv: [ "CMM_CD",		]	// 조회할 코드의 업무구분
        		,optStr	: [ "",				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: [ "Y",			]	// 사용여부
        		,filter	: [ "",				]	// filterStr
        		,objDs	: [	this.dsYnCd,	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
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
        		case 'btnSearch' :	// 조회

        			if( Ex.util.isUpdated(this.dsData) )
        			{
        				var param = {	id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        				return;
        			}

        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnXlsUp" :
        			 Ex.core.popup(	this,
        						'batchRegPop',
        						"fomm::FOMM1100_P05.xfdl",             		// <--- 팝업창 오픈 Url
        						{ title:Ex.core.word('서비스별 담당자일괄등록')
        						},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        						"width=1400,height=650"                  // <--- width/height/modeless(프레임 처리 옵션)
        			  );
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			this.grdNoti.enableredraw = false;
        			this.grdNoti.formatid = "excel01";

        			var oInfo = {
           				Grid	: [this.grdNoti],
           				Sheet	: ['서비스별담당자관리'],
           				FileNm	: ["서비스별담당자관리"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnDel" :
        			this.fnDelete(this.dsData);
        			break;

        		case "btnAdd" :
        			/*
        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        			Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			*/
        // 			var fRow = this.dsData.findRow("ROWFLAG","I");
        // 			if(fRow!=-1)
        // 			{
        // 				var param = {
        // 				    	id : "noAddAlert"
        // 				     , msg : "이미 추가된 행이 있습니다.\n추가된 행을 저장 또는 삭제 후 추가 가능합니다."
        // 				     , arrparam : ['']
        // 				     , msgtype : "I"};
        // 			    Ex.core.alert(this, param);
        // 				return false;
        // 			}
        			Ex.core.popup(
        				this,
        				'selectSvcStaffReg',
        				"fomm::FOMM1100_P01.xfdl",             		// <--- 팝업창 오픈 Url
        				{
        					title: '서비스 담당자 신규등록'
        				},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=950,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnSave" : 	// 저장
        			if( !Ex.util.isUpdated(this.dsData)) return false;

        			var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnHisReg" :
        			var isCudRow = Ex.isEmpty(this.dsData.getColumn(this.dsData.rowposition,"ROWFLAG")) ? false : true;

        			if(isCudRow) {
        					Ex.core.popup(	this,
        							'chgHisRegPop',
        							"fomm::FOMM1100_P03.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('변경사유 등록')
        							  , pPopupType : 'S'
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=950,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			} else {
        				return false;
        			}
        			break;

        		case "btnIssuChk" :
        			var rCnt = this.dsData.getCaseCount("CHK=='1'");

        			if(rCnt>0) {
        					var uCnt = this.dsData.getCaseCount("CHK=='1' && Ex.isEmpty(ROWFLAG)");

        					if(uCnt > 0) {
        						var param = {
        							id : "noCntAlert"
        							, msg : "변경사항이 없는 행이 선택되었습니다."
        							, arrparam : ['']
        							, msgtype : "I"};
        						Ex.core.alert(this, param);
        						return false;
        					} else {
        						Ex.core.popup(	this,
        								'chgHisRegMultiPop',
        								"fomm::FOMM1100_P03.xfdl",             		// <--- 팝업창 오픈 Url
        								{ title:Ex.core.word('변경사유 등록(일괄)')
        								, pPopupType : 'M'
        								},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        								"width=950,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        						);
        				  }
        			} else {
        				var param = {
        				    	id : "noCntAlert"
        				     , msg : "선택된 행이 없습니다."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false;
        			}
        			break;

        		case "btnChgDevpr" :
        			var rCnt = this.dsData.getCaseCount("CHK=='1'");
        			if(rCnt == 0)
        			{
        				var param = {
        						id : "noCntAlert"
        					 , msg : "선택된 행이 없습니다."
        					 , arrparam : ['']
        					 , msgtype : "I"};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			if(Ex.util.isUpdated(this.dsData))
        			{
        				var param = {
        						id : "disChgAlert"
        						, msg : "변경사항 저장후 실행 가능합니다."
        						, arrparam : ['']
        						, msgtype : "I"};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			this.dsData.enableevent = false;
        			this.dsData.filter("CHK=='1'");

        			var chkVal = '';
        			this.dsDevprChk.clearData();

        			for(var i=0; i<this.dsData.rowcount; i++) {
        				var cRow = this.dsDevprChk.addRow();
        				chkVal = this.dsData.getColumn(i,"SVC_CLSS_CD")+this.dsData.getColumn(i,"BSE_LVL1_CD")+this.dsData.getColumn(i,"BSE_LVL2_CD");
        				this.dsDevprChk.setColumn(cRow,"CHK_VAL",chkVal);
        			}
        			this.dsData.filter("");
        			this.dsData.enableevent = true;

        			if(this.dsDevprChk.rowcount == 0) {
        				return false;
        			}

        			var chkCnt = 0;

        			for(var j=0; j<this.dsDevprChk.rowcount; j++) {
        				chkVal = this.dsDevprChk.getColumn(j,"CHK_VAL");
        				this.dsDevprChk.filter("CHK_VAL=='"+chkVal+"'");
        				chkCnt = this.dsDevprChk.rowcount;

        				if(chkCnt >= 2) {
        					this.dsDevprChk.filter("");
        					var param = {
        						id : "dupDevprAlert"
        						, msg : "담당자를 변경하려는 서비스가 중복 됩니다."
        						, arrparam : ['']
        						, msgtype : "I"};
        					Ex.core.alert(this, param);
        					return false;
        				} else {
        					this.dsDevprChk.filter("");
        				}
        			}

        			this.dsData.enableevent = false;
        			this.dsData.filter("CHK=='1'");
        			this.dsBatChg.copyData(this.dsData,true);
        			this.dsData.filter("");
        			this.dsData.enableevent = true;
        			this.dsDevprChk.clearData();

        			Ex.core.popup(
        					this,
        					'chgSvcStaffReg',
        					"fomm::FOMM1100_P06.xfdl",             		// <--- 팝업창 오픈 Url
        					{
        						 title:Ex.core.word('서비스 담당자 변경')
        					   , pOldDevprDs : this.dsBatChg
        					},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"width=1400,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        			);
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

        /*
        this.grdNoti_onexpanddown = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
        {
        	if(e.col==16) {
        				Ex.core.popup(	this,
        							'selectChgHist',
        							"fomm::FOMM1100_P04.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('변경이력')
        							  , SVC_CLSS_CD : this.dsData.getColumn(this.dsData.rowposition,"SVC_CLSS_CD")
        							  , BSE_LVL1_CD : this.dsData.getColumn(this.dsData.rowposition,"BSE_LVL1_CD")
        							  , BSE_LVL2_CD : this.dsData.getColumn(this.dsData.rowposition,"BSE_LVL2_CD")
        							  , STAFF_ID : this.dsData.getColumn(this.dsData.rowposition,"STAFF_ID")
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        	}
        };
        */

        this.grdNoti_oncellclick = function(obj,e)
        {
        	if(e.col==16) {
        				Ex.core.popup(	this,
        							'selectChgHist',
        							"fomm::FOMM1100_P04.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('변경이력')
        							  , SVC_CLSS_CD : this.dsData.getColumn(this.dsData.rowposition,"SVC_CLSS_CD")
        							  , BSE_LVL1_CD : this.dsData.getColumn(this.dsData.rowposition,"BSE_LVL1_CD")
        							  , BSE_LVL2_CD : this.dsData.getColumn(this.dsData.rowposition,"BSE_LVL2_CD")
        							  , STAFF_ID : this.dsData.getColumn(this.dsData.rowposition,"STAFF_ID")
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        	}
        };

        this.fnExportExcelCallback = function()
        {
        	// TODO: 기본 그리드로 돌아가고자함..
        	this.grdNoti.formatid = "default";
        	this.grdNoti.enableredraw = true;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboIssuStat.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcReqTmplatNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTmplatNm00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcReqTmplatNm00_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTmplatNm00_00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtChkItm1_00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdNoti.addEventHandler("oncellclick",this.grdNoti_oncellclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnXlsUp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnHisReg.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnIssuChk.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnChgDevpr.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsYnCd.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM1100_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
