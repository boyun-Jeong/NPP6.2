(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0500_W");
            this.set_titletext("통지알림관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcDtlCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommNotiMngMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkflowList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqProcMapList", this);
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

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatId","499","13","84","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("워크플로우");
            obj.set_cssclass("sta_WF_schTitle_E");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboReqTmplatId","stcReqTmplatId:0.00","13","347","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_codecolumn("REQ_TMPLAT_ID");
            obj.set_datacolumn("REQ_TMPLAT_NM");
            obj.set_innerdataset("dsWorkflowList");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_type("filterlike");
            obj.set_validationGroup("searchDiv");
            obj.set_validation("워크플로우;NULL");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkErrorYn","cboReqTmplatId:5","13","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_text("통지 누락 워크플로우만");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static4","chkErrorYn:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcUseYn","Static4:5.00","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","stcUseYn:-3.00","13","100","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static1","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd","20.00","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("서비스");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcCd","stcSvcCd:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSvcCd");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static2","cboSvcCd:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcDtlCd","Static2:0","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("서비스상세");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcDtlCd","stcSvcDtlCd:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSvcDtlCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static3","cboSvcDtlCd:0","13","29","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01","70%","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("H10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFommNotiMngMt","0","104",null,null,"Static00_01:0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommNotiMngMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"115\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"3\" text=\"통보시점\"/><Cell col=\"4\" text=\"SEQ\"/><Cell col=\"5\" text=\"단계코드\"/><Cell col=\"6\" text=\"현재&#13;&#10;사용여부\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"문자&#13;&#10;발송여부\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"헤아림톡&#13;&#10;발송여부\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"12\" text=\"쪽지&#13;&#10;발송여부\"/><Cell col=\"13\" text=\"설명\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &apos;checkbox&apos; : &apos;none&apos;\" text=\"bind:CHK\" autosizecol=\"none\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"1\" expr=\"currow+1\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:ROWFLAG\" autosizecol=\"none\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:WF_PROC_NM\" textAlign=\"left\" combodataset=\"dsMapWfProcCdByCode\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:SEQ\" textAlign=\"center\" combodataset=\"dsMapWfProcCdByCode\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:WF_PROC_CD\" textAlign=\"center\" combodataset=\"dsMapWfProcCdByCode\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:USE_YN\" textAlign=\"center\" combodataset=\"dsMapWfProcCdByCode\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"7\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SEND_SMS_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"9\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SEND_TALK_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"11\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SEND_MEMO_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/><Cell col=\"13\" edittype=\"normal\" textAlign=\"left\" text=\"bind:NOTI_DESC\" cssclass=\"expr:DEL_POSS_YN == &apos;Y&apos; ? &quot;grdBCell_WF_bgPink&quot; : &quot;&quot;\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"단어번호\"/><Cell col=\"3\" text=\"시스템언어 단어\"/><Cell col=\"4\" text=\"현재언어 단어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:WORD_NO\"/><Cell col=\"3\" text=\"bind:SYS_WORD\"/><Cell col=\"4\" text=\"bind:SEL_WORD\" validation=\"단어;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcFommNotiMngMtTitle","0","70","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("통지관리 목록");
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

            obj = new Div("divGrdMtTopBtn","1038","70",null,"24","Static00_01:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","btnDelete:5",null,null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("stcFommNotiMngMtCnt","stcFommNotiMngMtTitle:4","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommNotiMngMt");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWfReqProcMapList","Static00_01:0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsWfReqProcMapList");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"55\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"115\" band=\"left\"/><Column size=\"190\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell autosizecol=\"none\" text=\"No.\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"SEQ\"/><Cell col=\"3\" text=\"단계코드\"/><Cell col=\"4\" text=\"단계명\"/></Band><Band id=\"body\"><Cell autosizecol=\"none\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:GUBUN\" textAlign=\"center\" combodataset=\"dsMapWfProcCdByCode\"/><Cell col=\"2\" text=\"bind:SEQ\" textAlign=\"center\" combodataset=\"dsMapWfProcCdByCode\"/><Cell col=\"3\" text=\"bind:WF_PROC_CD\" textAlign=\"center\" combodataset=\"dsMapWfProcCdByCode\"/><Cell col=\"4\" text=\"bind:WF_PROC_NM\" combodataset=\"dsMapWfProcCdByCode\" textAlign=\"left\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"단어번호\"/><Cell col=\"3\" text=\"시스템언어 단어\"/><Cell col=\"4\" text=\"현재언어 단어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:WORD_NO\"/><Cell col=\"3\" text=\"bind:SYS_WORD\"/><Cell col=\"4\" text=\"bind:SEL_WORD\" validation=\"단어;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcWfReqProcMapListTitle","Static00_01:0.00","70","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("워크플로우 단계별 매핑 정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcWfReqProcMapListCnt","stcWfReqProcMapListTitle:0","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWfReqProcMapList");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdMtTopBtn.form,function(p){});
            this.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearchArea.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboSvcCd","value","dsCond","SVC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboSvcDtlCd","value","dsCond","SVC_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.cboReqTmplatId","value","dsCond","REQ_TMPLAT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.chkErrorYn","value","dsCond","ERROR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0500_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0500_W
        * 화면(명)		︰ 알림통지설정관리
        * 메뉴(경로)	︰ 관리자 > 통지관리 > 알림통지설정관리
        * 화면 설명	︰ SPP 공지사항 관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.24
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.24	 정보윤		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.chkCellIdxArr = [0, 7, 9, 11];
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnSearchReset();	// 검색조건 초기화

        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsCond.setColumn(0, 'SVC_CD',		undefined);
        	this.dsCond.setColumn(0, 'SVC_DTL_CD',	undefined);

        	this.setDsWorkflowFilterStr(undefined, undefined, undefined);
        	this.dsCond.setColumn(0, 'REQ_TMPLAT_ID', 	this.dsWorkflowList.getColumn(0, "REQ_TMPLAT_ID"));
        	this.dsCond.setColumn(0, 'USE_YN',			'Y');
        }
        //상단 워크플로우 콤보 목록 조회
        this.fnSearchWorkflowList = function()
        {
        	var sTranId = "selectWorkflowList";                				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0500W/selectWorkflowList";     				// 서비스명
            var sInDs = "dsCond=dsCond";                  					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWorkflowList=dsWorkflowList";					// 서버에서 수신할 데이타셋
            var sArg = "";                   								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearch = function()
        {
        	this.fnSearchList();
        }

        //WorkFlow 단계 조회
        this.fnSearchList = function()
        {
        	//if(Ex.util.checkValidate(this.divSearchArea, "searchDiv")) return;

        // 	if( Ex.isEmpty(this.dsCond.getColumn(0, "REQ_TMPLAT_ID")) )
        // 	{
        // 		var param = {
        // 			  id	: "searchEssAlertI"								//fnMsgAfter에서 식별자로 사용되는 ID
        // 			, msg	: "워크플로우 선택 후 조회가 가능합니다."	//메시지 내용
        // 			, arrparam : [""]
        // 			, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        // 		};
        // 		Ex.core.alert(this, param);
        // 		return false;
        // 	}

        	if( Ex.isEmpty(this.dsCond.getColumn(0, "REQ_TMPLAT_ID")) )
        	{
        		this.dsFommNotiMngMt.clearData();
        		this.dsWfReqProcMapList.clearData();
        	}
        	else
        	{
        		var sTranId = "select01";            													// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "FOMM0500W/select01"; 													// 서비스명
        		var sInDs = "dsCond=dsCond";                  											// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "dsFommNotiMngMt=dsFommNotiMngMt dsWfReqProcMapList=dsWfReqProcMapList";	// 서버에서 수신할 데이타셋
        		var sArg = "";                   														// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        }

        // 저장
        this.fnSave = function()
        {
        	this.dsFommNotiMngMt.set_enableevent(false);
        	this.dsFommNotiMngMt.set_updatecontrol(false);
        	for(var i=0; i<this.dsFommNotiMngMt.rowcount; i++)
        	{
        		if(this.dsFommNotiMngMt.getColumn(i, "ROW_FLAG") == "I")		this.dsFommNotiMngMt.setRowType(i, Dataset.ROWTYPE_INSERT);
        		else if(this.dsFommNotiMngMt.getColumn(i, "ROW_FLAG") == "D")	this.dsFommNotiMngMt.setRowType(i, Dataset.ROWTYPE_UPDATE);
        	}
        	this.dsFommNotiMngMt.set_enableevent(true);
        	this.dsFommNotiMngMt.set_updatecontrol(true);

        	var sTranId = "save01";
            var sService = "FOMM0500W/save01";
            var sInDs = "dsCond=dsCond dsFommNotiMngMt=dsFommNotiMngMt:U";
            //var sOutDs = "dsFommNotiMngMt=dsFommNotiMngMt dsWfReqProcMapList=dsWfReqProcMapList dsWorkflowList=dsWorkflowList";
        	var sOutDs = "dsWorkflowList=dsWorkflowList";
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
        		case "selectWorkflowList" :
        			this.dsWorkflowList.insertRow(0);
        			this.dsWorkflowList.setColumn(0, "REQ_TMPLAT_NM", "- 선택 -");
        			this.setDsWorkflowFilterStr(this.dsCond.getColumn(0, "SVC_CD"), this.dsCond.getColumn(0, "SVC_DTL_CD"), this.dsCond.getColumn(0, "ERROR_YN"));
        			break;

        		case "select01" :
        			Ex.core.toast(this, "10002");
        			this.dsCond.setColumn(0, "SEARCH_REQ_TMPLAT_ID", this.dsCond.getColumn(0, "REQ_TMPLAT_ID"));
        			this.resetHeadCheckVal(this.chkCellIdxArr, 0);
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.resetHeadCheckVal(this.chkCellIdxArr, 0);
        			var reqTmplatId = this.dsCond.getColumn(0, "REQ_TMPLAT_ID");
        			//this.dsCond.setColumn(0, "SEARCH_REQ_TMPLAT_ID", this.dsCond.getColumn(0, "REQ_TMPLAT_ID"));
        			this.dsCond.setColumn(0, "REQ_TMPLAT_ID", undefined);
        			this.dsWorkflowList.insertRow(0);
        			this.dsWorkflowList.setColumn(0, "REQ_TMPLAT_NM", "- 선택 -");
        			this.setDsWorkflowFilterStr(this.dsCond.getColumn(0, "SVC_CD"), this.dsCond.getColumn(0, "SVC_DTL_CD"), this.dsCond.getColumn(0, "ERROR_YN"), reqTmplatId);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        		case "noticePop" :
        			if( (varValue||'').toUpperCase() == 'SAVE' )
        				this.fnSearch();
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.fnSearch();
        			break;

        		case "saveConfirm" :
        			this.fnSave();
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
        	this.grdFommNotiMngMt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdMtTopBtn.form.btnExcelDown];	// 엑셀	,	this.divGrdDtTopBtn.form.btnAddDt
        	Ex.util.setBtnVisible(this, 'exclDownYn', arrBtn);
        // 		arrBtn = [this.divGrdMtTopBtn.form.btnAdd];			// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        // 	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdMtTopBtn.form.btnDelete];		// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];			// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        	this.fnSearchWorkflowList();
        	//this.fnSearchMapWfProcCdList();
        	//this.fnSearch();		// 조회
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'SVC_CD',		]	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'WORKFLOW_CD'	]	// 조회할 코드의 업무구분
        		,optStr	: ['SEL',		'ALL',			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y',			]	// 사용여부
        		,filter	: ['',			'',				]	// filterStr
        		,objDs	: [this.dsYnCd,	this.dsSvcCd	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	// 서비스 상세 코드 init 처리
        	this.dsSvcDtlCd.loadXML(this.dsSvcDtlCd.saveXML());
        	this.dsSvcDtlCd.clearData();
        	this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(0, 'CMM_CD', '');
        	this.dsSvcDtlCd.setColumn(0, 'CMM_CD_NM', '- 전체 -');
        	this.divSearchArea.form.cboSvcDtlCd.set_index(0);
        }

        this.fnCheckValidate = function()
        {
        	return true;
        }

        this.setDsWorkflowFilterStr = function(svcCdStr, svcDtlStr, errorYn, chgReqTmplatId)
        {
        	trace("this.setDsWorkflowFilterStr() svcCdStr:[" + svcCdStr + "] svcDtlStr:[" + svcDtlStr + "] ERROR_YN:[" + this.dsCond.getColumn(0, "ERROR_YN") + "] chgReqTmplatId:[" + chgReqTmplatId + "]");
        	var orgReqTmplatId = this.dsCond.getColumn(0, "REQ_TMPLAT_ID");

        	if( Ex.isEmpty(chgReqTmplatId) )	chgReqTmplatId = orgReqTmplatId;

        	var filterStr = "";

        	if( !Ex.isEmpty(svcCdStr) )
        	{
        		filterStr += "SVC_CD=='" + svcCdStr + "'";
        	}

        	if( !Ex.isEmpty(svcDtlStr) )
        	{
        		filterStr += (!Ex.isEmpty(svcCdStr) ? " && " : "") + "SVC_DTL_CD=='" + svcDtlStr + "'";
        	}

        	if( !Ex.isEmpty(filterStr) )
        	{
        		filterStr = "Ex.isEmpty(SVC_CD) || " + "(" + filterStr + ")";
        	}
        	else
        	{
        		filterStr = "";
        	}

        	this.dsWorkflowList.set_filterstr(filterStr);

        	var chkCnt = this.dsWorkflowList.getCaseCount("ERROR_YN=='Y'");

        	trace("this.dsWorkflowList.rowcount : " + this.dsWorkflowList.rowcount + " chkCnt : " + chkCnt);

        	if(chkCnt > 0)
        	{
        		this.divSearchArea.form.chkErrorYn.set_visible(true);
        	}
        	else
        	{
        		this.dsCond.setColumn(0, "ERROR_YN", undefined);
        		this.divSearchArea.form.chkErrorYn.set_visible(false);
        	}

        	if(this.dsCond.getColumn(0, "ERROR_YN") == "Y")
        	{
        		if( !Ex.isEmpty(filterStr) )
        		{
        			filterStr += " && ERROR_YN=='Y'";
        		}
        		else
        		{
        			filterStr = "Ex.isEmpty(SVC_CD) || ERROR_YN=='Y'";
        		}
        	}
        	trace("적용 filterStr:[" + filterStr + "]");
        	this.dsWorkflowList.set_filterstr(filterStr);


        	var fRow = this.dsWorkflowList.findRow("REQ_TMPLAT_ID", chgReqTmplatId);

        	if(fRow == -1)
        	{
        		if(this.dsWorkflowList.rowcount > 1)
        		{
        			this.dsCond.setColumn(0, "REQ_TMPLAT_ID", this.dsWorkflowList.getColumn(1, "REQ_TMPLAT_ID"));
        			this.divSearchArea.form.cboReqTmplatId.set_index(1);
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "REQ_TMPLAT_ID", this.dsWorkflowList.getColumn(0, "REQ_TMPLAT_ID"));
        			this.divSearchArea.form.cboReqTmplatId.set_index(0);
        		}
        	}
        	else
        	{
        		if(fRow == 0)
        		{
        			if(this.dsWorkflowList.rowcount > 1)
        			{
        				if( Ex.isEmpty(this.dsCond.getColumn(0, "SEARCH_REQ_TMPLAT_ID")) )
        				{
        					this.divSearchArea.form.cboReqTmplatId.set_index(1);
        				}
        			}
        			else
        			{
        				this.divSearchArea.form.cboReqTmplatId.set_index(0);
        			}
        		}
        		else
        		{
        			this.divSearchArea.form.cboReqTmplatId.set_index(fRow);
        		}
        	}

        	if(orgReqTmplatId != this.dsCond.getColumn(0, "REQ_TMPLAT_ID"))
        	{
        		this.fnSearch();
        	}

        }

        this.resetHeadCheckVal = function(cellIdxArr, val)
        {
        	for(var i=0; i<cellIdxArr.length; i++)
        	{
        		trace("this.resetHeadCheckVal() i=" + i + " cellIdxArr[i] : " + cellIdxArr[i] + " val : " + val);
        		this.grdFommNotiMngMt.setHeadValue(cellIdxArr[i], Ex.decode(val, 'Y', 1, 'N', 0, '', 0, undefined, 0, val));
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
        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case "btnExcelDown" :
        			if(this.dsFommNotiMngMt.rowcount == 0)	return;
        			var fRow = this.dsWorkflowList.findRow("REQ_TMPLAT_ID", this.dsCond.getColumn(0, "SELECT_REQ_TMPLAT_ID"));
        			if(fRow > -1)
        			{
        				var oInfo = {
        					Grid	: [this.grdFommNotiMngMt],
        					Sheet	: [this.dsWorkflowList.getColumn(fRow, "REQ_TMPLAT_NM") + " 통지알림"],
        					FileNm	: [this.dsWorkflowList.getColumn(fRow, "REQ_TMPLAT_NM") + " 통지알림"],
        					ExportType : "XLSX",
        					ExportId : "excel01"
        				};
        				this.gfnExportExcel(this, oInfo);
        			}
        			break;

        // 		case 'btnAdd' :
        // 			var rowPos = this.dsFommNotiMngMt.setAddRow();
        // 			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsFommNotiMngMt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() )
        			{
        				var param = {	id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }

        this.onCboItemChanged = function(obj,e)
        {
        	if(obj.id == "cboSvcCd")
        	{
        		var orgSvcDtlCd = this.dsCond.getColumn(0, "SVC_DTL_CD");

        		this.dsSvcDtlCd.clearData();
        		var upCmmCd = this.dsCond.getColumn(this.dsCond.rowposition, 'SVC_CD')||'';
        		if( !Ex.isEmpty(upCmmCd) )
        		{
        			var oParam = {
        				upCmmCd : [upCmmCd]
        				,codeDiv: ['WORKFLOW_CD']
        				,optStr	: ['ALL']
        				,useYn	: ['Y']
        				,filter	: ['']
        				,objDs	: [this.dsSvcDtlCd]
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        		}

        		var fRow = this.dsSvcDtlCd.findRow("CMM_CD", orgSvcDtlCd);

        		if(fRow == -1)
        		{
        			this.dsCond.setColumn(0, "SVC_DTL_CD", undefined);
        			this.divSearchArea.form.cboSvcDtlCd.set_index(0);
        		}
        		else
        		{
        			this.divSearchArea.form.cboSvcDtlCd.set_index(fRow);
        		}
        		this.setDsWorkflowFilterStr(e.postvalue, this.dsCond.getColumn(0, "SVC_DTL_CD"), this.dsCond.getColumn(0, "ERROR_YN"));
        	}
        	else if(obj.id == "cboSvcDtlCd")
        	{
        		this.setDsWorkflowFilterStr(this.dsCond.getColumn(0, "SVC_CD"), e.postvalue, this.dsCond.getColumn(0, "ERROR_YN"));
        	}
        	this.fnSearch();
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

        this.onHeadClick = function(obj,e)
        {
        	if(obj.getCellProperty("head", e.cell, "edittype") == "checkbox")
        	{
        		var chkVal = Ex.decode(obj.getHeadValue(e.cell), 1, 'Y', 0, 'N', '', 'N', obj.getHeadValue(e.cell));
        		trace("obj.getHeadValue(e.cell):[" + obj.getHeadValue(e.cell) + "] chkVal:[" + chkVal + "]");
        		var colNm	= "";

        		if(e.cell == 7 || e.cell == 9 || e.cell == 11)
        		{
        			if(e.cell == 7)			colNm = "SEND_SMS_YN";
        			else if(e.cell == 9)	colNm = "SEND_TALK_YN";
        			else if(e.cell == 11)	colNm = "SEND_MEMO_YN";

        			for(var i=0; i<obj.getBindDataset().rowcount; i++)
        			{
        				obj.getBindDataset().setColumn(i, colNm, chkVal);
        			}
        		}
        	}
        };

        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	if(obj.id == "dsCond")
        	{
        		trace("this.fnCommOncolumnchanged e.columnid:[" + e.columnid + "] e.oldvalue:[" + e.oldvalue + "] e.newvalue:[" + e.newvalue + "]");

        		if(e.columnid == "SVC_CD" || e.columnid == "SVC_DTL_CD" || e.columnid == "ERROR_YN")
        		{
        			var svcCd		= obj.getColumn(0, "SVC_CD");
        			var svcDtlCd	= obj.getColumn(0, "SVC_DTL_CD");
        			var errorYn		= obj.getColumn(0, "ERROR_YN");

        			if(e.columnid == "SVC_CD")				svcCd = e.newvalue;
        			else if(e.columnid == "SVC_DTL_CD")		svcDtlCd = e.newvalue;
        			else if(e.columnid == "ERROR_YN")		errorYn = e.newvalue;

        			this.setDsWorkflowFilterStr(svcCd, svcDtlCd, errorYn);
        		}
        	}
        	else
        	{
        		obj.setUpdateRow(e);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboReqTmplatId.addEventHandler("onitemchanged",this.onCboItemChanged,this);
            this.divSearchArea.form.cboUseYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onitemchanged",this.onCboItemChanged,this);
            this.divSearchArea.form.cboSvcDtlCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcDtlCd.addEventHandler("onitemchanged",this.onCboItemChanged,this);
            this.grdFommNotiMngMt.addEventHandler("onheadclick",this.onHeadClick,this);
            this.divGrdMtTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdWfReqProcMapList.addEventHandler("onheadclick",this.onHeadClick,this);
            this.dsCond.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommNotiMngMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsWfReqProcMapList.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0500_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
