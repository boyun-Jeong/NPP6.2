(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0128_W");
            this.set_titletext("처리이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"UP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"MYREQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"menuType\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"sumSchYn\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"formType\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MYREQ_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REQ_USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"WF_PROC_NM\" type=\"string\" size=\"32\"/><Column id=\"ATTACH_USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_URL\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"string\" size=\"32\"/><Column id=\"SVC_NM\" type=\"string\" size=\"32\"/><Column id=\"WF_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_INFO_TYPE_CD\" type=\"string\" size=\"32\"/><Column id=\"LMNM\" type=\"string\" size=\"32\"/><Column id=\"CUR_VER_YN\" type=\"string\" size=\"32\"/><Column id=\"FRNM\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_NM\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"string\" size=\"32\"/><Column id=\"LMDT\" type=\"datetime\" size=\"17\"/><Column id=\"REQ_DESC\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DTIME\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"SR_INFO_URL\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_NM\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FRDT\" type=\"datetime\" size=\"17\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/><Column id=\"menuType\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSvcDtlCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">요청일자</Col><Col id=\"CMM_CD\">REQ_DATE</Col></Row><Row><Col id=\"CMM_CD_NM\">희망완료일자</Col><Col id=\"CMM_CD\">REQ_WISH_DT</Col></Row><Row><Col id=\"CMM_CD_NM\">최종수정일자</Col><Col id=\"CMM_CD\">LMDT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateTerm", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 선택 -</Col></Row><Row><Col id=\"CMM_CD\">1</Col><Col id=\"CMM_CD_NM\">당일</Col></Row><Row><Col id=\"CMM_CD_NM\">1주일</Col><Col id=\"CMM_CD\">2</Col></Row><Row><Col id=\"CMM_CD_NM\">1개월</Col><Col id=\"CMM_CD\">3</Col></Row><Row><Col id=\"CMM_CD_NM\">3개월</Col><Col id=\"CMM_CD\">4</Col></Row><Row><Col id=\"CMM_CD\">5</Col><Col id=\"CMM_CD_NM\">6개월</Col></Row><Row><Col id=\"CMM_CD\">6</Col><Col id=\"CMM_CD_NM\">1년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"ING\" type=\"STRING\" size=\"256\"/><Column id=\"COMPL\" type=\"STRING\" size=\"256\"/><Column id=\"TOT\" type=\"STRING\" size=\"256\"/><Column id=\"REJT\" type=\"STRING\" size=\"256\"/><Column id=\"CNCL\" type=\"STRING\" size=\"256\"/><Column id=\"APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"108","0",null,null,null,null,null,this);
            obj.set_taborder("5");
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

            obj = new Combo("cboSvcCd","stcSvcCd:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSvcCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("10");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"42","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"42","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("25");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDateType","29.00","71","131","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("16");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsDateType");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_visible("true");
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("- 선택 -");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","cboDateType:2.00","71","130","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01_00","calBeginDate:0.00","71","18","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","Static01_00:0.00","71","135","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("19");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd01","20.00","71","15","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDateTerm","calEndDate:2.00","71","130","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsDateTerm");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("- 선택 -");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtLMNM","677","72","165","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("22");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            obj.set_inputfilter("space");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqUsertNm00","edtLMNM:30","72","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("23");
            obj.set_text("내작업");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chk00","stcReqUsertNm00:0","72","24","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("24");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcLMNM","cboDateTerm:30","72","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("21");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqId","677","42","165","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space,dot,comma,sign,symbol");
            obj.set_inputmode("upper");
            obj.set_inputtype("alpha,number");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqUsertNm","edtReqId:30","42","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm","stcReqUsertNm:0","42","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            obj.set_inputfilter("space");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","105","42","472","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqId","edtReqTitle:30","42","70","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("요청ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSvcCd00","20.02%","13","80","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("서비스상세");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboSvcDtlCd","stcSvcCd00:-0.08600000000001273","13","130","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSvcDtlCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_displayrowcount("99");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm","cboSvcDtlCd:30","13","70","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("요청서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcReqTmplatNm:0","13","165","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","20","42","85","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqStatCd","edtReqTmplatNm:30","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboReqStatCd","stcReqStatCd:0.00","13","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsReqStatCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_text("Combo00");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","divSearchArea:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0.00","Static00:0","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("처리이력");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"115\" band=\"left\"/><Column size=\"50\"/><Column size=\"115\"/><Column size=\"120\"/><Column size=\"125\"/><Column size=\"240\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"45\"/><Column size=\"90\"/><Column size=\"180\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"요청ID\"/><Cell col=\"1\" text=\"요청일시\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"진행상태\" wordWrap=\"char\"/><Cell col=\"4\" text=\"요청분류\"/><Cell col=\"5\" text=\"요청서명\"/><Cell col=\"6\" text=\"제목\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\" 나의&#13;&#10;처리여부\" wordWrap=\"char\"/><Cell col=\"9\" text=\"처리일시\"/><Cell col=\"10\" text=\"반려&#13;&#10;여부\" wordWrap=\"char\"/><Cell col=\"11\" text=\"처리단계\"/><Cell col=\"12\" text=\"의견\"/><Cell col=\"13\" text=\"대결자\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;color:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);color2:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);font:underline antialias 10 Malgun Gothic, 맑은 고딕;cursor:hand;selectcolor:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);selectfont:underline antialias 10 Malgun Gothic, 맑은 고딕;\" text=\"bind:REQ_ID\" cssclass=\"grdBCell_WF_boldP\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:REQ_DATE\" mask=\"####-##-## ##:##\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" wordWrap=\"char\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:REQ_USER_NM\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:REQ_STAT_NM\" suppress=\"5\" suppressalign=\"middle\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:SVC_CD_NM\" combodataset=\"ds_chgCatMdl\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" textAlign=\"left\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:REQ_TMPLAT_NM\" combodataset=\"ds_sr_form\" combocodecol=\"FORM_ID\" combodatacol=\"FORM_NM\" textAlign=\"left\" suppress=\"4\" suppressalign=\"middle\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left;color:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);color2:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);selectcolor:EXPR(CHK == -1 ? &quot;#2196f3&quot; : CHK == 0 ? &quot;#519d40&quot; : &quot;black&quot;);selectfont: ;\" text=\"bind:TITLE\" textAlign=\"left\" suppress=\"5\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"bind:SRM_USER_NM\"/><Cell col=\"8\" text=\"expr:PRC_DIV==&apos;M&apos;||PRC_DIV==&apos;D&apos; ? &apos;○&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:REG_STIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" wordWrap=\"char\"/><Cell col=\"10\" displaytype=\"combotext\" combodataset=\"dsApprStatCd\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" text=\"expr:APPR_STAT_CD==&apos;APST_00&apos;?APPR_STAT_CD:&apos;&apos;\"/><Cell col=\"11\" displaytype=\"normal\" text=\"bind:APPR_NM\"/><Cell col=\"12\" text=\"bind:APPR_COMMENT\" suppress=\"0\" textAlign=\"left\"/><Cell col=\"13\" edittype=\"none\" text=\"bind:ORG_USER_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcListCnt","stcTreeTitle:5.00","Static00:0","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_countDataset("dsSrBaseInfo");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"Static00:0","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);
            // Layout Functions
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

            obj = new BindItem("item4","divSearchArea.form.stcReqUsertNm","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.edtLMNM","value","dsCond","PROC_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.edtReqUserNm","value","dsCond","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.rdoEM","value","dsCond","REQ_EM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearchArea.form.cboReqStatCd","value","dsCond","REQ_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearchArea.form.cboDateType","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearchArea.form.calBeginDate","value","dsCond","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearchArea.form.calEndDate","value","dsCond","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearchArea.form.cboDateTerm","value","dsCond","DATE_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearchArea.form.stcReqUsertNm00","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearchArea.form.chk00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearchArea.form.stcSvcCd00","value","dsCond","REQ_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearchArea.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0128_W.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0128_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0128_W
        * 화면(명)		︰ 처리이력조회
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2024.09.12	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.dsWfProc;
        this.fvMenuType = "P";
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fvMenuType = this.fnMenuTypeChk();
        	this.fnCompInit(this.fvMenuType);		// 컴포넌트 초기화
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function(vType)
        {
        	this.fnGetCmmCd();
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	var fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -30), "yyyyMMdd");

        	this.dsCond.setColumn(0, "DATE_TYPE",	"REQ_DATE");

        	this.dsCond.setColumn(0, "START_DATE",	fromDt);
        	this.dsCond.setColumn(0, "END_DATE",	Ex.util.today());
        	this.dsCond.setColumn(0, "MYREQ_YN",	'N');

        	this.dsCond.setColumn(0, "DATE_TERM",	'3');


        	var evt = nexacro.ItemChangeEventInfo;
        	evt.postvalue = "REQ_DATE";
        	this.cboOnItemChanged(this.divSearchArea.form.cboDateType, evt);

        	this.dsCond.setColumn(0, "menuType",	vType);

        	var oSession = Ex.util.getSession('session');

        	switch(vType) {
        		case "W":
        			var evtInfo = nexacro.ItemChangeEventInfo;
        			evtInfo.postvalue = "CHM";
        			this.dsCond.setColumn(0, "SVC_CD",	evtInfo.postvalue);
        			this.dsCond.setColumn(0, "REQ_DEPT_CD",	oSession.gvDeptCd );
        			this.div_search_cboSvcCd_onitemchanged(this.divSearchArea.form.cboSvcCd,evtInfo);
        			this.divSearchArea.form.cboSvcCd.enable = false;

        			this.grdSrBaseInfo.setCellProperty("head",5,'text','신청서명');

        			this.divSearchArea.form.stcReqTmplatNm.text = "신청서명";
        			this.divSearchArea.form.stcReqTitle.text = "제목";

        			this.divSearchArea.form.stcReqUsertNm00.visible = true;
        			this.divSearchArea.form.chk00.visible = true;

        			this.divSearchArea.form.edtReqUserNm.visible = true;
        			this.divSearchArea.form.stcReqUsertNm.visible = true;

        			this.divSearchArea.form.stcLMNM.visible = true;
        			this.divSearchArea.form.edtLMNM.visible = true;


        			break;

        		case "R":
        			var evtInfo = nexacro.ItemChangeEventInfo;
        			evtInfo.postvalue = "SRM";
        			this.dsCond.setColumn(0, "SVC_CD",	evtInfo.postvalue);
        			this.dsCond.setColumn(0, "REQ_DEPT_CD",	oSession.gvDeptCd );
        			this.div_search_cboSvcCd_onitemchanged(this.divSearchArea.form.cboSvcCd,evtInfo);
        			this.divSearchArea.form.cboSvcCd.enable = false;

        			this.divSearchArea.form.stcReqUsertNm00.visible = true;
        			this.divSearchArea.form.chk00.visible = true;

        			this.divSearchArea.form.edtReqUserNm.visible = true;
        			this.divSearchArea.form.stcReqUsertNm.visible = true;

        			this.divSearchArea.form.stcLMNM.visible = true;
        			this.divSearchArea.form.edtLMNM.visible = true;

        			break;

        		case "P":

        			this.divSearchArea.form.edtReqUserNm.visible = true;
        			this.divSearchArea.form.stcReqUsertNm.visible = true;

        			this.divSearchArea.form.stcLMNM.visible = false;
        			this.divSearchArea.form.edtLMNM.visible = false;

        			break;

        		default:
        			this.dsCond.setColumn(0, "USER_ID",	oSession.gvUserId);
        			this.divSearchArea.form.edtReqUserNm.visible = false;
        			this.divSearchArea.form.stcReqUsertNm.visible = false;

        			this.divSearchArea.form.stcLMNM.left = "35%";
        			this.divSearchArea.form.edtLMNM.left = "stcLMNM:-1px";

        			this.divSearchArea.form.stcLMNM.visible = true;
        			this.divSearchArea.form.edtLMNM.visible = true;

        			break;
        	}
        }

        // 조회
        this.fnSearch = function()
        {
        	this.dsCond.setColumn(0, "sumSchYn",	"Y");
        	this.dsCond.setColumn(0, "P_REQ_STAT_CD",	"");

        	if( !Ex.isEmpty(this.dsCond.getColumn(0, "DATE_TYPE")) )
        	{
        		if( Ex.isEmpty(this.dsCond.getColumn(0, "START_DATE")) )
        		{
        			var param = {
        				  id	: "AlertEmptyStartDateI"	//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: this.divSearchArea.form.cboDateType.text+ "를(을) 확인해주시오."						//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		if( Ex.isEmpty(this.dsCond.getColumn(0, "END_DATE")) )
        		{
        			var param = {
        				  id	: "AlertEmptyEndDateI"		//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: this.divSearchArea.form.cboDateType.text+ "를(을) 확인해주시오."						//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		if(this.dsCond.getColumn(0, "START_DATE") > this.dsCond.getColumn(0, "END_DATE"))
        		{
        			var oParam = {id : "alertChcekDateI", msg : "[" + this.divSearchArea.form.cboDateType.text + "] [FROM] ~ [TO] 기간이 올바르게 입력되지 않았습니다.", arrparam : [], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}

        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0120W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrBaseInfo=dsData dsReqCnt=dsCnt";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
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
        //			this.fnSetCount();
        			Ex.core.toast(this, "10002");
        			break;

        		case "wfInfoCompleted" :
        			this.dsWfProc = this.wffnGetOptDsByWfProcCd();

        			var dsTemp = new Dataset;
        			var oParam = {
        				wfProcCd : ''
        				,optStr: 'NO'
        				,filter	: ''
        				,objDs	: dsTemp
        			}
        			this.wffnGetCger(oParam);

        			var dsRow = this.dsSrBaseInfo.rowposition;
        			var reqId = this.dsSrBaseInfo.getColumn(dsRow, "REQ_ID");
        			var reqNm = this.dsSrBaseInfo.getColumn(dsRow, "REQ_TMPLAT_NM");
        			var reqTmplatId = this.dsSrBaseInfo.getColumn(dsRow, "REQ_TMPLAT_ID");
        			var reqTmplatVer = this.dsSrBaseInfo.getColumn(dsRow, "REQ_TMPLAT_VER");
        			var srInfoUrl = this.dsSrBaseInfo.getColumn(dsRow, "SR_INFO_URL");
        			var reqUrl = this.dsSrBaseInfo.getColumn(dsRow, "REQ_URL");
        			var attachUseYn = this.dsSrBaseInfo.getColumn(dsRow, "ATTACH_USE_YN");

        			Ex.core.popup(
        				this,											// <--- 팝업 실행 스코프
        				"srReqWritePop",								// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0000_W.xfdl",							// <--- 팝업창 오픈 Url
        				{
        					title : Ex.core.word("요청서"),
        					pWF_FUNC_CD	: "WF_FUNC_00",	//등록
        					pREQ_ID : reqId,
        					pREQ_TMPLAT_ID : reqTmplatId,
        					pSR_INFO_URL : srInfoUrl,
        					pATTACH_USE_YN : attachUseYn
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize,useCloseButton=false"
        			);
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
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(mID)
        	{
        		case "AlertEmptyStartDateI" :
        			this.divSearchArea.form.calBeginDate.setFocus();
        			break;

        		case "AlertEmptyEndDateI" :
        			this.divSearchArea.form.calEndDate.setFocus();
        			break;

        		case "alertChcekDateI" :
        			this.divSearchArea.form.calBeginDate.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function(vType)
        {
        	this.fnGetCmmCd();		// 공통코드 조회

        	this.fnSearchReset(vType);	// 검색조건 초기화

        	this.fnSearch();		// 조회
        }

        this.fnMenuTypeChk = function()
        {
        	var rtnType = "P";

        	return rtnType;
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["SVC_CD", 		"YN_CD2",		"REQ_STAT_CD",   "APPR_STAT_CD"]			// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD",	"CMM_CD",		"WORKFLOW_CD",    "WORKFLOW_CD"]			// 조회할 코드의 업무구분
        		,optStr	: ["ALL", 			"",				"ALL"        ,    ""           ]				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["Y", 			"Y",			"Y"          ,    ""           ]				// 사용여부
        		,filter	: ["", 				"",				""           ,    ""           ]					// filterStr
        		,objDs	: [this.dsSvcCd,	this.dsYnCd,	this.dsReqStatCd,     this.dsApprStatCd ]		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	this.dsSvcDtlCd.clearData();
        	var rowpos = this.dsSvcDtlCd.addRow();
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD', null);
        	this.dsSvcDtlCd.setColumn(rowpos, 'CMM_CD_NM', '- 전체 -');
        }

        // 단계 클릭 조회
        this.fnSearchStep = function(btnName)
        {
        	var WF_PROC_CD = '';
        	switch(btnName)
        	{
        		/*
        		case "btnAll" :		case "stcCntAll" :		WF_PROC_CD = '';				break;
        		case "btnStep1" :	case "stcCntStep1" :	WF_PROC_CD = 'WF_PROC_1000';	break;
        		case "btnStep2" :	case "stcCntStep2" :	WF_PROC_CD = 'WF_PROC_2000';	break;
        		case "btnStep3" :	case "stcCntStep3" :	WF_PROC_CD = 'WF_PROC_3000';	break;
        		case "btnStep4" :	case "stcCntStep4" :	WF_PROC_CD = 'WF_PROC_9000';	break;
        		case "btnFin" :		case "stcCntStepFin" :	WF_PROC_CD = 'WF_PROC_9999';	break;
        		*/

        		case "btnAll" :		    case "stcCntAll" :		P_REQ_STAT_CD = "COMPL";	break; // 완료
        		case "btnStep1" :	    case "stcCntStep1" :	P_REQ_STAT_CD = "ING";	    break; // 진행중
        		case "btnStep2" :	    case "stcCntStep2" :	P_REQ_STAT_CD = "APPR"; 	break; // 결재중
        		case "btnStep3" :	    case "stcCntStep3" :	P_REQ_STAT_CD = "CNCL"; 	break; // 중단/폐기
        		case "btnStep4" :	    case "stcCntStep4" :	P_REQ_STAT_CD = "REJT";	    break; // 반려
        		case "btnFin" :		    case "stcCntStepFin" :	P_REQ_STAT_CD = "";	        break;  // 전체
        		case "btnStepTmp" :		case "stcCntStepTmp" :	P_REQ_STAT_CD = "TEMP";	        break;  // 임시

        	}

        //	this.fnSearchReset(this.fvMenuType);
        //	this.dsCond.setColumn(this.dsCond.rowposition, 'UP_WF_PROC_CD', WF_PROC_CD);
        	this.dsCond.setColumn(0, 'P_REQ_STAT_CD', P_REQ_STAT_CD);
        	this.dsCond.setColumn(0, "sumSchYn",	"N");


        	var sTranId = "select01_1";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0120W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrBaseInfo=dsData";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        			this.fnSearchReset(this.fvMenuType);
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
        		case "btnStep1" :	case "stcCntStep1" :
        		case "btnStep2" :	case "stcCntStep2" :
        		case "btnStep3" :	case "stcCntStep3" :
        		case "btnStep4" :	case "stcCntStep4" :
        		case "btnFin" :		case "stcCntStepFin" :
        		case "btnStepTmp" :		case "stcCntStepTmp" :
        			this.fnSearchStep(obj.name);
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
        	if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "REQ_ID"))
        	{
        		var dsRow = obj.getDatasetRow(e.row);
        		var reqTmplatId = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_ID");
        		var reqTmplatVer = obj.getBindDataset().getColumn(dsRow, "REQ_TMPLAT_VER");
        		var reqId = obj.getBindDataset().getColumn(dsRow, "REQ_ID");

        		this.wffnSearchWfTmplat(reqTmplatId, reqTmplatVer, reqId);
        	}
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	if(obj.id == "cboDateType")
        	{
        		if( Ex.isEmpty(e.postvalue) )
        		{
        			this.divSearchArea.form.calBeginDate.set_enable(false);
        			this.divSearchArea.form.calEndDate.set_enable(false);
        			this.divSearchArea.form.cboDateTerm.set_enable(false);
        		}
        		else
        		{
        			this.divSearchArea.form.calBeginDate.set_enable(true);
        			this.divSearchArea.form.calEndDate.set_enable(true);
        			this.divSearchArea.form.cboDateTerm.set_enable(true);
        		}
        	}
        	else if(obj.id == "cboDateTerm")
        	{
        		var fromDate = "";

        		if(e.postvalue == "1")			fromDate = Ex.util.today();
        		else if(e.postvalue == "2")		fromDate = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -7), "yyyyMMdd");
        		else if(e.postvalue == "3")		fromDate = Ex.util.addMonth(Ex.util.today(), -1);
        		else if(e.postvalue == "4")		fromDate = Ex.util.addMonth(Ex.util.today(), -3);
        		else if(e.postvalue == "5")		fromDate = Ex.util.addMonth(Ex.util.today(), -6);
        		else if(e.postvalue == "6")		fromDate = Ex.util.addMonth(Ex.util.today(), -12);

        		var toDate	 = Ex.util.today();

         		this.dsCond.setColumn(this.dsCond.rowposition, 'START_DATE', fromDate);
        		this.dsCond.setColumn(this.dsCond.rowposition, 'END_DATE', toDate);
        	}
        };



        this.chkOnChanged = function(obj,e)
        {
        	this.fnSearch();
        };
        this.fnCommOnkeyup = function(obj,e)
        {
        		if(e.keycode == 13)
        	{
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.stcSvcCd.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onitemchanged",this.div_search_cboSvcCd_onitemchanged,this);
            this.divSearchArea.form.cboSvcCd.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboDateType.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearchArea.form.calBeginDate.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.calEndDate.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcSvcCd01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboDateTerm.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divSearchArea.form.edtLMNM.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqUsertNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.chk00.addEventHandler("onchanged",this.chkOnChanged,this);
            this.divSearchArea.form.stcLMNM.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqId.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqUsertNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqUserNm.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.edtReqTitle.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqId.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.stcSvcCd00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.cboSvcDtlCd.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqTmplatNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.edtReqTmplatNm.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.stcReqTitle.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.stcReqStatCd.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.grdSrBaseInfo.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0128_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
