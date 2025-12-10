(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0120_W");
            this.set_titletext("내 요청함");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"menuType\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"sumSchYn\" type=\"STRING\" size=\"256\"/><Column id=\"formType\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MYREQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MYREQ_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REQ_USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"WF_PROC_NM\" type=\"string\" size=\"32\"/><Column id=\"ATTACH_USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_URL\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"string\" size=\"32\"/><Column id=\"SVC_NM\" type=\"string\" size=\"32\"/><Column id=\"WF_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_INFO_TYPE_CD\" type=\"string\" size=\"32\"/><Column id=\"LMNM\" type=\"string\" size=\"32\"/><Column id=\"CUR_VER_YN\" type=\"string\" size=\"32\"/><Column id=\"FRNM\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_NM\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"string\" size=\"32\"/><Column id=\"LMDT\" type=\"datetime\" size=\"17\"/><Column id=\"REQ_DESC\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DTIME\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"SR_INFO_URL\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_NM\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FRDT\" type=\"datetime\" size=\"17\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcDtlCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"ING\" type=\"STRING\" size=\"256\"/><Column id=\"COMPL\" type=\"STRING\" size=\"256\"/><Column id=\"TOT\" type=\"STRING\" size=\"256\"/><Column id=\"REJT\" type=\"STRING\" size=\"256\"/><Column id=\"CNCL\" type=\"STRING\" size=\"256\"/><Column id=\"APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divStepArea","0","89",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnAll","70.00","10","78","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_count05_on");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnStep0","btnAll:100.00","10","75","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_count00");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnStep5","btnStep0:100.00","10","72","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_count01");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnStep1","btnStep5:100.00","10","72","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_count01");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnStep2","btnStep1:100.00","10","80","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_count02");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnStep3","btnStep2:100.00","10","79","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_count04");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnStep4","btnStep3:100.00","10","80","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_count03");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcStep0","btnStep0:-75.00","87","75","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("5");
            obj.set_text("임시");
            obj.set_cssclass("stc_WF_count");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcStep1","btnStep1:-72.00","87","72","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("11");
            obj.set_text("처리중");
            obj.set_cssclass("stc_WF_count");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcStep2","btnStep2:-80.00","87","80","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("14");
            obj.set_text("결재중");
            obj.set_cssclass("stc_WF_count");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcStep4","btnStep4:-80.00","87","80","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("20");
            obj.set_text("납기임박");
            obj.set_cssclass("stc_WF_count");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcStep3","btnStep3:-79.00","87","79","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("17");
            obj.set_text("반려");
            obj.set_cssclass("stc_WF_count");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcAll","btnAll:-78.00","87","78","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_cssclass("stc_WF_count");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntStep0","btnStep0:-26.00","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("4");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntStep1","btnStep1:-26.00","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("10");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntStep2","btnStep2:-26.00","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("13");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntStep4","btnStep4:-26.00","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("19");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntStep3","btnStep3:-26.00","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("16");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntAll","btnAll:-26.00","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnStep6","btnStep4:100.00","10","79","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_count04");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnFin","btnStep6:100.00","10","78","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_count05");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntFin","btnFin:-26.00","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("25");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcFin","btnFin:-78.00","87","78","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("26");
            obj.set_text("완료");
            obj.set_cssclass("stc_WF_count");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcStep5","btnStep5:-72.00","87","72","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("8");
            obj.set_text("접수중");
            obj.set_cssclass("stc_WF_count");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntStep5","btnStep5:-26","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("7");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcStep6","btnStep6:-80","87","79","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("23");
            obj.set_text("만족도조사");
            obj.set_cssclass("stc_WF_count");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntStep6","btnStep6:-26","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("22");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Button("btnForceFin","btnFin:100.00","10","78","80",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_count05");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcCntForceFin","btnForceFin:-26","15","45","20",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("28");
            obj.set_cssclass("stc_WF_countBg");
            obj.set_text("0");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("stcForceFin","btnForceFin:-78.00","87","78","24",null,null,null,null,null,null,this.divStepArea.form);
            obj.set_taborder("29");
            obj.set_text("강제종료");
            obj.set_cssclass("stc_WF_count");
            obj.set_visible("true");
            this.divStepArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","divStepArea:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","Static00:0","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("요청서 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","stcTreeTitle:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSrBaseInfo","0","Static00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSrBaseInfo");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_useFilter("true");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"340\"/><Column size=\"80\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"요청ID\"/><Cell col=\"1\" text=\"진행단계\"/><Cell col=\"2\" text=\"진행상태\"/><Cell col=\"3\" text=\"요청분류\"/><Cell col=\"4\" text=\"요청서명\"/><Cell col=\"5\" text=\"제목\"/><Cell col=\"6\" text=\"요청자\"/><Cell col=\"7\" text=\"요청일\"/><Cell col=\"8\" text=\"희망완료일\" calendardateformat=\"yyyy-MM-dd ddd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"합의완료일\" calendardateformat=\"yyyy-MM-dd ddd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"처리완료일\" calendardateformat=\"yyyy-MM-dd ddd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"담당자\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;color:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);color2:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);font:underline antialias 10 Malgun Gothic, 맑은 고딕;cursor:hand;selectcolor:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);selectfont:underline antialias 10 Malgun Gothic, 맑은 고딕;\" text=\"bind:REQ_ID\" cssclass=\"grdBCell_WF_boldP\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:WF_PROC_NM\"/><Cell col=\"2\" text=\"bind:REQ_STAT_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:SVC_CD_NM\" combodataset=\"ds_chgCatMdl\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:REQ_TMPLAT_NM\" combodataset=\"ds_sr_form\" combocodecol=\"FORM_ID\" combodatacol=\"FORM_NM\" textAlign=\"left\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;color:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);color2:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);selectcolor:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);selectfont: ;\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:REQ_USER_NM\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:REQ_DATE\" mask=\"####-##-## ##:##\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:REQ_WISH_DT_NM\" mask=\"####-##-## ##:##\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" text=\"bind:AGREE_COMP_DT\" mask=\"####-##-## ##:##\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"none\" text=\"bind:PROC_COMP_DATE\" mask=\"####-##-## ##:##\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:WORK_USER_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","0","79",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"79","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20",null,null,"0",null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd","Static06:0.00","13","85","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcCd","stcSvcCd:0.00","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSvcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"25","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"25","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("15");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd00","cboSvcCd:30","13","80","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("서비스상세");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcDtlCd","stcSvcCd00:0.00","13","121","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSvcDtlCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("10");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm","cboSvcDtlCd:30.00","13","70","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("요청서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcReqTmplatNm:2.00","13","130","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEtime","241.00","42","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.getSetter("validate").set("title:종료일자,required:false,date");
            obj.set_cssclass("cal_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","calEtime:85.00","43","53","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:19.00","43","359","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_normal");
            obj.set_displaynulltext("\'&&\', \'||\' 사용하여 AND, OR 검색 가능");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqId","edtReqTmplatNm:30.00","13","59","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("요청ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:0.00","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space,dot,comma,sign,symbol");
            obj.set_inputmode("upper");
            obj.set_inputtype("alpha,number");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd01","20.00","42","85","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calStime","stcSvcCd01:0","42","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.getSetter("validate").set("title:시작일자,required:false,date");
            obj.set_cssclass("cal_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static14","226.00","42","10","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcListCnt","stcTreeTitle:5.00","Static00:0","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_countDataset("dsSrBaseInfo");
            obj.set_text("( 0건)");
            obj.set_cssclass("sta_WF_grdCnt");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"Static00:0","425",null,"0","grdSrBaseInfo:9",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","80","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("신규요청");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","btnAdd:5",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStepArea.form
            obj = new Layout("default","",0,0,this.divStepArea.form,function(p){});
            this.divStepArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.cboSvcCd","value","dsCond","SVC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.edtReqTmplatNm","value","dsCond","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtReqTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.cboSvcDtlCd","value","dsCond","SVC_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divStepArea.form.stcCntStep0","text","dsReqCnt","TEMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divStepArea.form.stcCntStep1","text","dsReqCnt","ING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divStepArea.form.stcCntStep2","text","dsReqCnt","APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divStepArea.form.stcCntStep3","text","dsReqCnt","REJT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divStepArea.form.stcCntAll","text","dsReqCnt","TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divStepArea.form.stcCntStep4","text","dsReqCnt","DUE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearchArea.form.stcReqId","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearchArea.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divStepArea.form.stcCntFin","text","dsReqCnt","COMPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divStepArea.form.stcCntStep5","text","dsReqCnt","PROC_WAIT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divStepArea.form.btnStep6","text","dsReqCnt","REJT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divStepArea.form.stcCntStep6","text","dsReqCnt","TEST_SATIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearchArea.form.calStime","value","dsCond","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearchArea.form.calEtime","value","dsCond","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divStepArea.form.btnForceFin","text","dsReqCnt","COMPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divStepArea.form.stcCntForceFin","text","dsReqCnt","FORCE_FIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0120_W.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0120_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0120_W
        * 화면(명)		︰ 요청함
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.06.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.MENU_PARAM_CD = '';	// 메뉴파라미터 : 요청함 조회 구분용(Ex IT요청서 조회 시 IT요청서 등록 버튼 visible 처리 등)

        this.linkSearch = false;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	this.dsCond.setColumn(0, "FROMDATE",	Ex.util.addDate(Ex.util.today(), -14) );
        	this.dsCond.setColumn(0, "TODATE",		Ex.util.today() );
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["SVC_CD", 		"YN_CD",		"REQ_STAT_CD"]			// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD",	"CMM_CD",		"WORKFLOW_CD"]			// 조회할 코드의 업무구분
        		,optStr	: ["ALL", 			"ALL",			"NO"]				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["Y", 			"Y",			"Y"]				// 사용여부
        		,filter	: ["", 				"",				""]					// filterStr
        		,objDs	: [this.dsSvcCd,	this.dsYnCd,	this.dsReqStatCd]		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	this.dsSvcDtlCd.clearData();
        	var rowpos = this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD', null);
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', Ex.core.word('- 전체 -'));
        }


        this.fnLinkParam = function()
        {
        	trace('fnLinkParma call');
        	var homeParam 	= this.getOwnerFrame().param||'';
        	if( !Ex.isEmpty(homeParam) ) {
        		this.linkSearch = true;

        		var fromDate 	= this.getOwnerFrame().fromDate||'';
        		var toDate		= this.getOwnerFrame().toDate||'';
        		this.dsCond.setColumn(0, 'FROMDATE', fromDate);
        		this.dsCond.setColumn(0, 'TODATE', toDate);
        	}

        	this.fnSearch();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	this.dsSvcDtlCd.clearData();
        	var rowpos = this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD', null);
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', Ex.core.word('- 전체 -'));


        	var oSession = Ex.util.getSession('session');
        	this.dsCond.setColumn(0, "USER_ID",	oSession.gvUserId);

        	if(this.MENU_PARAM_CD == '21') {	// IT자산
        		this.dsCond.setColumn(0, "SVC_CD",	'AMM');
        	}
        }

        // 조회
        this.fnSearch = function()
        {
        	//this.dsCond.setColumn(this.dsCond.rowposition, 'UP_WF_PROC_CD', '');
        	this.dsCond.setColumn(0, 'P_REQ_STAT_CD', '');
        	this.dsCond.setColumn(0, "sumSchYn",	"Y");
        	this.dsCond.setColumn(0, "P_REQ_STAT_CD",	"");

        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0120W/select11";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrBaseInfo=dsData dsReqCnt=dsCnt";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 단계 클릭 조회
        this.fnSearchStep = function(btnName)
        {
        	var WF_PROC_CD = '';

        	var arryBtn = new Array();
        	arryBtn = [this.divStepArea.form.btnAll
        			  ,this.divStepArea.form.btnStep0
        			  ,this.divStepArea.form.btnStep1
        			  ,this.divStepArea.form.btnStep2
        			  ,this.divStepArea.form.btnStep3
        			  ,this.divStepArea.form.btnStep4
        			  ,this.divStepArea.form.btnStep5
        			  ,this.divStepArea.form.btnStep6
        			  ,this.divStepArea.form.btnFin
        			  ,this.divStepArea.form.btnForceFin];

        	for(var i = 0; i < arryBtn.length; i++) {
        			var vCssClass = "";
        			vCssClass = arryBtn[i].cssclass;
        			var btnPushed = (btnName.replace("btn","")).replace("stcCnt","");

        			if(btnPushed==((arryBtn[i].id).replace("btn","")).replace("stcCnt","")) {
        				if(vCssClass.indexOf("_on")==-1) {
        					arryBtn[i].cssclass = vCssClass+"_on";
        				}
        			} else {
        				if(vCssClass.indexOf("_on")!=-1) {
        					arryBtn[i].cssclass = vCssClass.replace('_on','');
        				}
        			}
        		}

        	switch(btnName)
        	{
        		case "btnAll" :		case "stcCntAll" :		P_REQ_STAT_CD = "";		break; 	// 전체
        		case "btnStep0" :	case "stcCntStep0" :	P_REQ_STAT_CD = "TEMP";	    break; 	// 임시
        		case "btnStep5" :	case "stcCntStep5" :	P_REQ_STAT_CD = "PROC_WAIT_CNT";	    break; 	// 진행중
        		case "btnStep1" :	case "stcCntStep1" :	P_REQ_STAT_CD = "ING";	    break; 	// 진행중
        		case "btnStep2" :	case "stcCntStep2" :	P_REQ_STAT_CD = "APPR"; 	break; 	// 결재중
        		case "btnStep3" :	case "stcCntStep3" :	P_REQ_STAT_CD = "REJT"; 	break; 	// 반려
        		case "btnStep4" :	case "stcCntStep4" :	P_REQ_STAT_CD = "DUE_CNT";	    break; 	// 납기임박
        		case "btnStep6" :	case "stcCntStep6" :	P_REQ_STAT_CD = "TEST_SATIS";	   break; 	// 만족도조사
        		case "btnFin" :		case "stcCntFin" :		P_REQ_STAT_CD = "COMPL";		break;	// 완료
        		case "btnForceFin" :	case "stcCntForceFin" :		P_REQ_STAT_CD = "FORCE_FIN";	break;	// 강제종료
        	}

        	this.dsCond.setColumn(0, 'P_REQ_STAT_CD', P_REQ_STAT_CD);
        	this.dsCond.setColumn(0, "sumSchYn",	"Y");


        	var sTranId = "select01_1";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0120W/select11";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrBaseInfo=dsData";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
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
        			if( this.linkSearch ) 	// 메인화면 이동으로 search
        			{
        				this.linkSearch = false;

        				var homeParam 	= this.getOwnerFrame().param||'';
        				var fromDate 	= this.getOwnerFrame().fromDate||'';
        				var toDate		= this.getOwnerFrame().toDate||'';
        				var obj;
        				switch(homeParam)
        				{
        					case "ALL" :	obj = this.divStepArea.form.btnAll;		break; 	// 전체
        					case "TEMP" :	obj = this.divStepArea.form.btnStep0;	break; 	// 임시
        					case "PROC_WAIT_CNT" :	obj = this.divStepArea.form.btnStep5;	break; 	// 접수중(접수대기)
        					case "ING" :	obj = this.divStepArea.form.btnStep1;   break; 	// 진행중(처리중)
        					case "APPR" : 	obj = this.divStepArea.form.btnStep2;	break; 	// 결재중
        					case "REJT" : 	obj = this.divStepArea.form.btnStep3;	break; 	// 반려
        					case "DUE_CNT" : 	obj = this.divStepArea.form.btnStep4;	break; 	// 납기임박
        					case "TEST_SATIS" : obj = this.divStepArea.form.btnStep6;	break; 	// 만족도조사
        					case "COMPL" :		obj = this.divStepArea.form.btnFin;		break;	// 완료
        					case "FORCE_FIN" :	obj = this.divStepArea.form.btnForceFin;	break;	// 강제종료
        				}

        				if( !Ex.isEmpty(obj) ) {
        					this.dsCond.setColumn(0, 'FROMDATE', '');
        					this.dsCond.setColumn(0, 'TODATE', '');

        					if(!Ex.isEmpty(fromDate) )	this.dsCond.setColumn(0, 'FROMDATE', fromDate);
        					if(!Ex.isEmpty(toDate) )	this.dsCond.setColumn(0, 'TODATE', toDate);

        					this.fnCommOnclick(obj, {});
        				}
        			}
        			else {
        				Ex.core.toast(this, "10002");
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	//trace("SR0120_W this.fnPopupAfter() pID=" + pID + " varValue=" + varValue);

        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "srReqWritePop" :
        			if(varValue == "Y") this.fnSearch();
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();		// 공통코드 조회

        	this.MENU_PARAM_CD = Ex.util.getScreenInfo(this, 'menuParamCd');		// 메뉴파라미터
        	trace('MENU_PARAM_CD :: ' + this.MENU_PARAM_CD);
        	if(this.MENU_PARAM_CD == '21') {	// IT자산
        		this.divGrdTopBtn.form.btnAdd.set_visible(true);
        		this.divSearchArea.form.cboSvcCd.set_readonly(true);
        	}

        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);


        	// 메인화면에서 클릭 이동 시 파라미터
        	var homeParam 	= this.getOwnerFrame().param||'';
        	trace('homeParam :: ' + homeParam);
        	if( !Ex.isEmpty(homeParam) ) {
        		this.linkSearch = true;

        		var fromDate 	= this.getOwnerFrame().fromDate||'';
        		var toDate		= this.getOwnerFrame().toDate||'';
        		this.dsCond.setColumn(0, 'FROMDATE', fromDate);
        		this.dsCond.setColumn(0, 'TODATE', toDate);
        	}

        	this.fnSearch();		// 조회
        }



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "btnSearch" :			// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdSrBaseInfo],
           				Sheet	: [this.getOwnerFrame().info.menuNm],
           				FileNm	: [this.getOwnerFrame().info.menuNm],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnAll" :		case "stcCntAll" :
        		case "btnStep0" :	case "stcCntStep0" :
        		case "btnStep1" :	case "stcCntStep1" :
        		case "btnStep2" :	case "stcCntStep2" :
        		case "btnStep3" :	case "stcCntStep3" :
        		case "btnStep4" :	case "stcCntStep4" :
        		case "btnStep5" :	case "stcCntStep5" :
        		case "btnStep6" :	case "stcCntStep6" :
        		case "btnFin" :		case "stcCntFin" :
        		case "btnForceFin" :	case "stcCntForceFin" :
        			this.fnSearchStep(obj.name);
        			break;

        		case "btnAdd" :		// 신규 IT자산 요청서
        			var menuRow = nexacro.getApplication().gdsMenu.findRowExpr("SCREEN_ID=='SR0111_W' && MENU_PARAM_CD=='21'");
        			var menuId 	= nexacro.getApplication().gdsMenu.getColumn(menuRow, 'MENU_ID');
        			Ex.core.openLink(this, menuId, {});
        			break;
        	}
        }


        this.div_search_cboSvcCd_onitemchanged = function(obj,e)
        {
        	this.dsSvcDtlCd.clearData();

        	var upCmmCd = this.dsCond.getColumn(this.dsCond.rowposition, 'SVC_CD')||'';
        	if( !Ex.isEmpty(upCmmCd) ) {
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
        	else {
        		var rowpos = this.dsSvcDtlCd.addRow();
        		this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD', null);
        		this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', Ex.core.word('- 전체 -'));
        	}

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SVC_DTL_CD', null);
        };

        this.grdOnCellClick = function(obj,e)
        {
        	if(e.row > - 1)
        	{
        		if(e.cell == obj.getBindCellIndex("body", "REQ_ID"))
        		{
        			var dsRow = this.dsSrBaseInfo.rowposition;
        			var svcCd = this.dsSrBaseInfo.getColumn(dsRow, "SVC_CD");
        			var reqId = this.dsSrBaseInfo.getColumn(dsRow, "REQ_ID");
        			var reqTmplatId = this.dsSrBaseInfo.getColumn(dsRow, "REQ_TMPLAT_ID");
        			var reqTmplatVer = this.dsSrBaseInfo.getColumn(dsRow, "REQ_TMPLAT_VER");

        			var popURL = "";

        			//var fRow = this.dsSvcCd.findRow("CMM_CD", svcCd);
        			if(svcCd == "SRM")	popURL = "sr::SR0010_W.xfdl";
        			else				popURL = "sr::SR0000_W.xfdl";

        			Ex.core.popup(
        				this,									// <--- 팝업 실행 스코프
        				"srReqWritePop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				popURL,									// <--- 팝업창 오픈 Url
        				{
        					title			: "요청서",
        					//pIsCopy	: true,
        					//pClearKeyColumnArr : ["REQ_ID"],
        					pREQ_ID			: reqId,
        					pREQ_TMPLAT_ID	: reqTmplatId,
        					pREQ_TMPLAT_VER : reqTmplatVer
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize,useCloseButton=false"
        			);
        		}
        	}
        };

        this.fnCommOnkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnSearch();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divStepArea.form.btnAll.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnStep0.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnStep5.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnStep1.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnStep2.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnStep3.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnStep4.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntStep0.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntStep1.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntStep2.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntStep4.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntStep3.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntAll.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnStep6.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnFin.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntFin.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntStep5.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntStep6.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.btnForceFin.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divStepArea.form.stcCntForceFin.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdSrBaseInfo.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divSearchArea.form.stcSvcCd.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onitemchanged",this.div_search_cboSvcCd_onitemchanged,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.stcSvcCd00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboSvcDtlCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboSvcDtlCd.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqTmplatNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTmplatNm.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.calEtime.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqTitle.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTitle.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqId.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqId.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcSvcCd01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.calStime.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0120_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
