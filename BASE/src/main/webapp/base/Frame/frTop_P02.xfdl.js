(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frTop_P02");
            this.set_titletext("통합검색");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"query\" type=\"STRING\" size=\"256\"/><Column id=\"researchQuery\" type=\"STRING\" size=\"256\"/><Column id=\"collection\" type=\"STRING\" size=\"256\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/><Column id=\"searchField\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"startPage\" type=\"STRING\" size=\"256\"/><Column id=\"endPage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"query\"/><Col id=\"collection\">ALL</Col><Col id=\"sort\">TITLE</Col><Col id=\"searchField\">ALL</Col><Col id=\"userId\">3</Col><Col id=\"deptCd\">DEPT01</Col><Col id=\"startDate\">2020/07/01</Col><Col id=\"endDate\">2024/07/14</Col><Col id=\"startPage\">1</Col><Col id=\"endPage\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuLv1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuLv2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuLv3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst03", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst04", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst05", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst06", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst07", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst08", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst09", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRst13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRstAll", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchRst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"collection\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"r_pk\" type=\"STRING\" size=\"256\"/><Column id=\"r_type\" type=\"STRING\" size=\"256\"/><Column id=\"r_title\" type=\"STRING\" size=\"256\"/><Column id=\"r_conts\" type=\"STRING\" size=\"256\"/><Column id=\"r_name\" type=\"STRING\" size=\"256\"/><Column id=\"r_datetime\" type=\"STRING\" size=\"256\"/><Column id=\"r_desc\" type=\"STRING\" size=\"256\"/><Column id=\"r_itsys_nm\" type=\"STRING\" size=\"256\"/><Column id=\"r_host\" type=\"STRING\" size=\"256\"/><Column id=\"r_ipaddr\" type=\"STRING\" size=\"256\"/><Column id=\"r_table\" type=\"STRING\" size=\"256\"/><Column id=\"r_db\" type=\"STRING\" size=\"256\"/><Column id=\"r_sid\" type=\"STRING\" size=\"256\"/><Column id=\"r_svcid\" type=\"STRING\" size=\"256\"/><Column id=\"r_fileconts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTopLine","20.00","Static00_01:100",null,"2","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#8a96a8");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20.00","Static00_01:0",null,"100","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staSearchStr","20","13","89","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtSearchStr","80.00","13","200","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("검색어;NULL");
            obj.set_text("");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"13","20","24","0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkViewAll","20.00","41","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("전체");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView01","110.00","41","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("요청정보");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView02","200.00","41","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("IT작업신청");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView03","290.00","41","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("사업계획");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView04","380.00","41","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("계약");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView05","480.00","41","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("투자검수정보");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView06","590.00","41","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("운영검수정보");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView13","590.00","64","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("첨부파일");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView12","480.00","64","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("게시판");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView11","380.00","64","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("15");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("업무시스템");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView10","290.00","64","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("16");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("업무정보");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView09","200.00","64","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("17");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("업무정보");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView08","110.00","64","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("18");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("구성정보");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkView07","20.00","64","100","20",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("19");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_cssclass("chk_WF_normal");
            obj.set_text("자산정보");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","550.00","14","135","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("20");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01_00","535.00","14","15","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("21");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","400.00","14","135","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("22");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDtctDt","330.00","13","70","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("23");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divColls","30","stcTopLine:0",null,null,"30","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Tab("tabRst","0","8",null,null,"0","20",null,null,null,null,this.divContent.form.divColls.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divContent.form.divColls.addChild(obj.name, obj);

            obj = new Tabpage("tabRstAll",this.divContent.form.divColls.form.tabRst);
            obj.set_text("전체");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRstAll.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRstAll.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRstAll");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj.set_useCheck("false");
            obj.set_useContext("false");
            obj.set_useCopy("false");
            obj.set_useFilter("false");
            obj.set_useSort("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsSchRst");
            this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst01",this.divContent.form.divColls.form.tabRst);
            obj.set_text("요청정보");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst01.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst01.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst01");
            this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst02",this.divContent.form.divColls.form.tabRst);
            obj.set_text("IT작업신청");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst02.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst02.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst02");
            this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst03",this.divContent.form.divColls.form.tabRst);
            obj.set_text("사업계획");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst03.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst03.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst03");
            this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst04",this.divContent.form.divColls.form.tabRst);
            obj.set_text("계약정보");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst04.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst04.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst04");
            this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst05",this.divContent.form.divColls.form.tabRst);
            obj.set_text("투자검수정보");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst05.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst05.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst05");
            this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst06",this.divContent.form.divColls.form.tabRst);
            obj.set_text("운영검수정보");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst06.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst06.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst06");
            this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst07",this.divContent.form.divColls.form.tabRst);
            obj.set_text("자산정보");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst07.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst07.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst07");
            this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst08",this.divContent.form.divColls.form.tabRst);
            obj.set_text("구성정보");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst08.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst08.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst08");
            this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst09",this.divContent.form.divColls.form.tabRst);
            obj.set_text("업무정보");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst09.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst09.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst09");
            this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst10",this.divContent.form.divColls.form.tabRst);
            obj.set_text("업무분장");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst10.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst10.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst10");
            this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst11",this.divContent.form.divColls.form.tabRst);
            obj.set_text("업무시스템");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst11.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst11.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst11");
            this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst12",this.divContent.form.divColls.form.tabRst);
            obj.set_text("게시판");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst12.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst12.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form);
            obj.set_taborder("3");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsRst12");
            this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.addChild(obj.name, obj);

            obj = new Tabpage("tabRst13",this.divContent.form.divColls.form.tabRst);
            obj.set_text("첨부파일");
            this.divContent.form.divColls.form.tabRst.addChild(obj.name, obj);

            obj = new Div("divColl","0","0",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst13.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst13.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","20","100","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
            this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCollsLine","0","stcTitle:6",null,"2","0",null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right, #043C73, #4371f7, #d9e3ff)");
            this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.addChild(obj.name, obj);

            obj = new Grid("grdList","0","stcCollsLine:13",null,null,"0","0",null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"764\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.parent.fnGridTitleExpr3(dataset,currow)\" suppress=\"1\" suppressalign=\"middle\" cursor=\"pointer\" background=\"#f9f3f3\" cssclass=\"grdBCell_WF_event grdBCell_WF_backColor_f9f3f3\"/><Cell col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr(dataset,currow)\" displaytype=\"decoratetext\" cursor=\"pointer\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" textAlign=\"left\" autosizerow=\"default\" wordWrap=\"char\" border=\"1px solid #ced3e5,1px solid #ced3e5,0px solid #ced3e5\"/><Cell row=\"1\" col=\"1\" text=\"expr:dataset.parent.fnGridTitleExpr2(dataset,currow)\" border=\"0px solid #ced3e5,1px solid #ced3e5,1px solid #ced3e5\" color=\"#8e8e8e\" textAlign=\"left\" cursor=\"pointer\" displaytype=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;normal&apos;:&apos;decoratetext&apos;\" cssclass=\"expr:dataset.getRowLevel(currow)&gt;0?&apos;grdBCell_WF_event, grdBCell_WF_backColor_f9f3f3&apos;:&apos;&apos;\" suppress=\"0\"/></Band></Format></Formats>");
            this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.addChild(obj.name, obj);

            obj = new Static("stcCnt","86.00","20","60","24",null,null,null,null,null,null,this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_text(" 0 건");
            obj.set_countDataset("dsRst13");
            this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRstAll.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRstAll.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRstAll.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst01.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst01.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst02.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst02.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst03.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst03.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst04.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst04.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst05.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst05.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst06.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst06.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst07.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst07.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst08.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst08.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst08.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst09.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst09.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst09.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst10.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst10.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst11.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst11.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst12.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst12.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form,function(p){});
            obj.set_type("default");
            this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form.tabRst.tabRst13.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form.tabRst.tabRst13.form,function(p){});
            this.divContent.form.divColls.form.tabRst.tabRst13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divColls.form
            obj = new Layout("default","",0,0,this.divContent.form.divColls.form,function(p){});
            obj.set_type("default");
            obj.set_tabledirection("horizontal");
            obj.set_flexwrap("nowrap");
            obj.set_horizontalgap("0");
            this.divContent.form.divColls.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.stcReqId","value","dsCond","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divSearchArea.form.stcReqDt","value","dsCond","SEARCH_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.calFrReqDt","value","dsCond","FR_REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divSearchArea.form.cboReqStatCd","value","dsCond","REQ_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divSearchArea.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divSearchArea.form.calToReqDt","value","dsCond","TO_REQ_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divSearchArea.form.chkMyReq","value","dsCond","MY_REQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.divSearchArea.form.edtSearchStr","value","dsCond","query");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divContent.form.divSearchArea.form.calEndDate","value","dsCond","endDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divContent.form.divSearchArea.form.calBeginDate","value","dsCond","startDate");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frTop_P02.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("frTop_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frTab_P01
        * 화면(명)		︰ Sitemap
        * 메뉴(경로)	︰
        * 화면 설명	︰ Sitemap
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
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.GBN = 'SITEMAP';

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
        	this.fnSearchReset();

        	//this.fnSearch();
        	this.fnGetCmmCd();
        	this.fnCompInit();		// 컴포넌트 초기화

        	//this.divContent.form.divSiteMap.form.height = 0;

        	//alert(this.isValidObject("dsCond"));


        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();

        	this.fnChkBoxInit();

        	var rowpos = this.dsCond.addRow();
        	var oSession = Ex.util.getSession('session');

        	this.dsCond.setColumn(rowpos, 'searchField', 'ALL');
        	this.dsCond.setColumn(rowpos, 'sort', 'TITLE');
        	this.dsCond.setColumn(rowpos, 'userId', oSession.gvUserId);
        	this.dsCond.setColumn(rowpos, 'deptCd', oSession.gvDeptCd);

        }

        // 조회
        this.fnSearch = function()
        {
        	var schChk = this.fnChkBoxGetVal();

        	if(!Ex.isEmpty(schChk)) {
        		this.dsCond.setColumn(0,"collection",schChk);
        	}


        	// transaction
        	var sTranId = "unifiedSerarch";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "unifiedSerarch";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSchRst=dsSchRst";			// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['VIEW_CD']					//조회할 상위코드
        		,codeDiv: ['CMM_CD']						//조회할 코드의 업무구분
        		,optStr	: ['']															//ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']																//사용여부
        		,filter	: ['']																	//filterStr
        		,objDs	: [this.dsViewCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
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
        		case "unifiedSerarch" :

        			this.dsRstAll.clearData();

        			//this.setVisibleInit(this, this.divContent.form.divColls);

        			for(var i=0; i<this.dsViewCd.rowcount; i++) {
        				var vColelts =  this.dsViewCd.getColumn(i,"ITM_VAL_1");
        				var cmmId = this.dsViewCd.getColumn(i,"CMM_CD");
        				var objDsId = "dsRst"+cmmId;

        				this.dsSchRst.filter("collection=='"+vColelts+"'");
        				this[objDsId].copyData(this.dsSchRst, true);
        				this.dsSchRst.filter("");

        				if(this[objDsId].rowcount > 0) {
        					this[objDsId].filter("rowidx<5");
        					this.dsRstAll.appendData(this[objDsId],true,true);
        					this[objDsId].filter("");
        				}
        			}

        			//this.dsRstAll.keystring = "collection";
        			this.dsRstAll.rowposition = -1;
        			this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form.grdList.scrollTo(0,0);

        			/*
        			var arryRst = this.chkDataCnt(this);

        			if(arryRst.length !=0) {
        				this.setVisibleTrue(this.divContent.form.divColls,arryRst);
        			}
        			*/



        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)	return;

        	switch(mID)
        	{

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	//trace(this.dsViewCd.saveXML());


        	var crDsId = "dsRst";
        	//var arrColInfo = new Array("collection","rank","pk","type","title","FILE_NM");

        	for(var i=0;i<this.dsViewCd.rowcount;i++) {
        		//var objDs = new Dataset();
        		var dsId = this.dsViewCd.getColumn(i,"CMM_CD");
        		//objDs.name = crDsId+dsId;
        		//this.addChild(objDs.name, objDs );

        		var tapId = "tabRst"+dsId;
        		//trace(tapId+" / "+this[objDs.name]);
        		this[crDsId+dsId].assign(this.dsSchRst);
        		this.divContent.form.divColls.form.tabRst.tabpages[tapId].form.divColl.form.grdList.setBindDataset(this[crDsId+dsId]);
        		this.divContent.form.divColls.form.tabRst.tabpages[tapId].form.divColl.form.stcCnt.setCountDataset(this[crDsId+dsId]);
        	}
        	this.dsRstAll.assign(this.dsSchRst);

        };


        this.fnChkBoxCtrl = function(obj,e) {
        	if(obj.name == "chkViewAll") {
        		for(var i=0;i<this.dsViewCd.rowcount;i++) {
        			var compNm = "chkView"+this.dsViewCd.getColumn(i,"CMM_CD");
        			this.divContent.form.divSearchArea.form[compNm].value = 'N';
        		}

        	} else {
        		if(this.divContent.form.divSearchArea.form.chkViewAll.value == 'Y') {
        			this.divContent.form.divSearchArea.form.chkViewAll.value = 'N';
        		}
        	}
        };


        this.chkDataCnt = function(frmObj) {

        			var collsCnt = frmObj.dsViewCd.rowcount;
        			var collsId = "";
        			var rtnArry = new Array();

        			for(var i=0;i<collsCnt;i++) {
        				var cmmCd = frmObj.dsViewCd.getColumn(i,"CMM_CD");
        				collsId = "dsRst"+cmmCd;
        				if(frmObj.isValidObject(collsId)) {
        					if(frmObj[collsId].rowcount>0) {
        						rtnArry.push(cmmCd)
        					}
        				}
        			}
        			return rtnArry;
        };

        this.setVisibleTrue = function(frmObj, arryId) {

        			var offHeight = 302;
        			var collsHeight = offHeight*arryId.length;
        			frmObj.height = collsHeight;

        			var rtnArry = new Array();

        			for(var idx of arryId) {
        				var divNm = "divColl"+ idx;
        				var objDiv = frmObj.form.lookup(divNm);
        				objDiv.visible = true;
        				rtnArry.push(objDiv);
        			}
        			return rtnArry;
        };


        this.setVisibleInit = function(frmObj,divObj) {
        			var collsCnt = frmObj.dsViewCd.rowcount;

        			for(var i=0; i < collsCnt; i++) {
        				var cmmCd = frmObj.dsViewCd.getColumn(i,"CMM_CD");
        				var divNm = "divColl"+ cmmCd;
        				var objDiv = divObj.form.lookup(divNm);
        				//trace(divNm);
        				objDiv.visible = false;
        			}
        };

        this.fnChkBoxGetVal = function(){
        	var rtnVal = "";

        	if(this.divContent.form.divSearchArea.form.chkViewAll.isChecked()) {
        		rtnVal = "ALL"
        	} else {
        		var vCnt = this.dsViewCd.rowcount;
        		for(var i=0; i<vCnt; i++){
        			var cmmCd = this.dsViewCd.getColumn(i,"CMM_CD");
        			var chkBoxNm = "chkView"+cmmCd;

        			if(this.divContent.form.divSearchArea.form[chkBoxNm].isChecked())
        			{
        				var itmNm = this.dsViewCd.getColumn(i,"ITM_VAL_1");
        				if(Ex.isEmpty(rtnVal)) {
        					rtnVal += itmNm;
        				} else {
        					rtnVal += ','+itmNm;
        				}
        			}
        		}
        	}

        	return rtnVal;
        };

        this.fnChkBoxInit = function(){

        	this.divContent.form.divSearchArea.form.chkViewAll.value = 'Y';

        	var vCnt = this.dsViewCd.rowcount;
        	for(var i=0; i<vCnt; i++){
        		var cmmCd = this.dsViewCd.getColumn(i,"CMM_CD");
        		var chkBoxNm = "chkView"+cmmCd;

        		this.divContent.form.divSearchArea.form[chkBoxNm].value = 'N';


        	}
        };

        this.fnGridTitleExpr  = function(bindDs, vRow) {

        	var rtnVal = "";

        	var rPk = bindDs.getColumn(vRow,"r_pk");
        	var rType = bindDs.getColumn(vRow,"r_type");
        	var rTitle = bindDs.getColumn(vRow,"r_title");
        	var rConts = bindDs.getColumn(vRow,"r_conts");
        	var rName = bindDs.getColumn(vRow,"r_name");
        	var rDatetime = bindDs.getColumn(vRow,"r_datetime");
        	var rDesc  = bindDs.getColumn(vRow,"r_desc");

        	var rItsysNm  = bindDs.getColumn(vRow,"r_itsys_nm");
        	var rHost  = bindDs.getColumn(vRow,"r_host");
        	var rIpaddr  = bindDs.getColumn(vRow,"r_ipaddr");
        	var rTable  = bindDs.getColumn(vRow,"r_table");
        	var rDb  = bindDs.getColumn(vRow,"r_db");
        	var rSid  = bindDs.getColumn(vRow,"r_sid");
        	var rSvcid  = bindDs.getColumn(vRow,"r_svcid");
        	var rFileconts  = bindDs.getColumn(vRow,"r_fileconts");

        	var qry = this.dsCond.getColumn(0,'query');
        	var contsLen = 0;
        	var descLen = 0;
        	var fileLen = 0;

        	var contsIdx = -1;
        	var descIdx = -1;
        	var fileIdx = -1;

        	if(!Ex.isEmpty(rConts)) {
        		contsLen = rConts.length;
        		contsIdx = rConts.indexOf(qry);
        	}

        	if(!Ex.isEmpty(rDesc)) {
        		descLen = rDesc.length;
        		descIdx = rDesc.indexOf(qry);
        	}

        	if(!Ex.isEmpty(rFileconts)) {
        		fileLen = rFileconts.length;
        		fileIdx = rFileconts.indexOf(qry);
        	}


        	if(!Ex.isEmpty(rTitle)) {
        		rtnVal = "<fs v='10'><fc v='#6759dd'>[ "+rTitle+" ]</fc></fs>";
        	}

        	if(!Ex.isEmpty(rType)) {
        		rtnVal += "  >  "+rType;
        	}

        	if(!Ex.isEmpty(rConts)) {
        			if(contsIdx!=-1) {
        				if(contsLen > 510) {
        					if(contsIdx>500) {
        						rtnVal += "\n" +rConts.substring(contsIdx-100,contsIdx+410)+"...";
        					} else {
        						rtnVal += "\n"+rConts.slice(0,510)+"...";
        					}
        				} else {
        					rtnVal += "\n"+rConts;
        				}
        			}
        	}

        	if(contsIdx == -1) {
        		if(!Ex.isEmpty(rDesc)) {
        			if(descIdx!=-1) {
        				if(descLen > 510) {
        					if(descIdx>500) {
        						rtnVal += "\n" +rDesc.substring(descIdx-100,descIdx+410)+"...";
        					} else {
        						rtnVal += "\n"+rDesc.slice(0,510)+"...";
        					}
        				} else {
        					rtnVal += "\n"+rDesc;
        				}
        			}
        		}
        	}

        	if(contsIdx == -1 && descIdx == -1) {
        		if(!Ex.isEmpty(rFileconts)) {
        			if(fileLen > 510) {
        				if(fileIdx>490) {
        					rtnVal += "\n" +rFileconts.substring(fileIdx-110,fileIdx+420)+"...";
        				} else {
        					rtnVal += "\n"+rFileconts.slice(0,520)+"...";
        				}
        			} else {
        				rtnVal += "\n"+rFileconts;
        			}
        		}
        	}

        	rtnVal += "\n";
        	rtnVal += "\n";
        	//rtnVal += rItsysNm;

        	//rtnVal += !Ex.isEmpty(rItsysNm)?" : "+rHost:rHost;
        	//rtnVal += !Ex.isEmpty(rHost)?" : "+rIpaddr:rIpaddr;
        	//rtnVal += !Ex.isEmpty(rIpaddr)?" : "+rTable:rTable;
        	//rtnVal += !Ex.isEmpty(rTable)?" : "+rDb:rDb;
        	//rtnVal += !Ex.isEmpty(rDb)?" : "+rSid:rSid;
        	//rtnVal += !Ex.isEmpty(rSid)?" : "+rSvcid:rSvcid;

        	//rtnVal += "\n";


        	//if(!Ex.isEmpty(rDatetime)) {
        	//	rtnVal +="<fc v='#8e8e8e'>"+rDatetime+"</fc>";
        	//}

        	//if(!Ex.isEmpty(rName)) {
        	//	rtnVal += "<fc v='#8e8e8e'>";
        	//	rtnVal += !Ex.isEmpty(rDatetime)?" : "+rName:rName;
        	//	rtnVal += "</fc>";
        	//}

        	rtnVal = nexacro.replaceAll(rtnVal,"<!HS>","<b v='true'><fc v='#e00021'>");
        	rtnVal = nexacro.replaceAll(rtnVal,"<!HE>","</fc></b>");

        	return rtnVal;
        };

        this.fnGridTitleExpr2  = function(bindDs, vRow) {

        	var rtnVal = "";

        	var rName = bindDs.getColumn(vRow,"r_name");
        	var rDatetime = bindDs.getColumn(vRow,"r_datetime");

        	if(!Ex.isEmpty(rDatetime)) {
        		rtnVal +=rDatetime;
        	}

        	if(!Ex.isEmpty(rName)) {
        		rtnVal += !Ex.isEmpty(rDatetime)?"  "+rName:rName;
        	}

        	rtnVal = nexacro.replaceAll(rtnVal,"<!HS>","");
        	rtnVal = nexacro.replaceAll(rtnVal,"<!HE>","");

        	return rtnVal;
        }

        this.fnGridTitleExpr3  = function(objDs, vRow) {
        	var rtnVal = "";

        	var colsId = objDs.getColumn(vRow, "collection");
        	var dsId = "dsRst"+this.dsViewCd.lookup("ITM_VAL_1",colsId,"CMM_CD");
        	rtnVal = this.dsViewCd.lookup("ITM_VAL_1",colsId,"CMM_CD_NM")+"("+this[dsId].rowcount+")";
        	return rtnVal;
        };


        this.fnGridSubsumExpr  = function(objDs, vRow) {
        	var rtnVal = "";

        	var colsId = objDs.getColumn(vRow-1, "collection");
        	var dsId = "dsRst"+this.dsViewCd.lookup("ITM_VAL_1",colsId,"CMM_CD");
        	rtnVal = "총 "+this[dsId].rowcount+"건";
        	return rtnVal;
        };

        this.fnGridSubsumExpr2  = function(objDs, vRow) {
        	var rtnVal = "";

        	var colsId = objDs.getColumn(vRow-1, "collection");
        	rtnVal = this.dsViewCd.lookup("ITM_VAL_1",colsId,"CMM_CD_NM");

        	return rtnVal;
        };


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSearchReset" :
        			this.fnSearchReset();
        			break;

        		case "btnSearch" :

        			if( !Ex.util.checkValidate(this.divContent.form.divSearchArea, "fvValiCmp") )	return false;

        			if(Ex.isEmpty(this.divContent.form.divSearchArea.form.edtSearchStr.value.trim())) {
        				var param = {id : "ERROR", msg : '검색어은(는) 필수 입력 항목입니다.'};
        				Ex.core.error(this, param);
        				return false;
        			}

        			this.fnSearch();
        			break;
        	}
        };


        this.fnCommOnkeydown = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };


        this.fnBtnTabOnclick = function(obj,e)
        {
        	var arrBtn = [this.divContent.form.btnSiteMap, this.divContent.form.btnFavorite];
        	for(var i = 0; i < arrBtn.length; i++)
        		arrBtn[i].set_cssclass('btn_HOME_boardOff');

        	obj.set_cssclass('btn_HOME_boardOn');

        	if( this.GBN != obj.GBN ) {
        		this.GBN = obj.GBN;
        		this.fnSearchReset();
        		this.fnSearch();
        	}
        };


        // 동적 메뉴 버튼 onclick
        this.btnMenuOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = objApp.gdsMenu.findRow('MENU_ID', obj.MENU_ID);
        	if( rowpos >= 0 ) {
        		Ex.core.pclose(this, obj.MENU_ID);
        	}
        	else {
        		var param = {id : "ERROR", msg : '연결된 메뉴정보가 올바르지 않습니다.'};
        		Ex.core.error(this, param);
        	}

        	return;
        }


        this.btnMenuOnmouseenter = function(obj,e)
        {
        	obj.set_color('#F58220');
        };


        this.btnMenuOnmouseleave = function(obj,e)
        {
        	obj.set_color('#888888');
        };

        this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick = function(obj,e)
        {
        	var objBindDs = obj.getBindDataset();

        	if(e.col==0) {

        		var rowLevl = objBindDs.getRowLevel(objBindDs.rowposition);

        		var colsId = objBindDs.getColumn(objBindDs.rowposition, "collection");
        		if(rowLevl > 0) {
        			colsId = objBindDs.getColumn(objBindDs.rowposition-1, "collection");
        		}

        		var fRow = this.dsViewCd.findRow("ITM_VAL_1",colsId);
        		var goId = nexacro.toNumber(this.dsViewCd.getColumn(fRow,"CMM_CD"));

        		if(goId > 0) {
        			this.divContent.form.divColls.form.tabRst.tabindex = goId;
        		}
        	} else if(e.col==1) {

        		var rowLevl = objBindDs.getRowLevel(objBindDs.rowposition);

        		if(rowLevl > 0) {
        			var colsId = objBindDs.getColumn(objBindDs.rowposition-1, "collection");
        			var fRow = this.dsViewCd.findRow("ITM_VAL_1",colsId);
        			var goId = nexacro.toNumber(this.dsViewCd.getColumn(fRow,"CMM_CD"));

        			if(goId > 0) {
        				this.divContent.form.divColls.form.tabRst.tabindex = goId;
        			}
        		} else {
        			var vColl = objBindDs.getColumn(objBindDs.rowposition, "collection");

        			switch(vColl) {
        			case "ITPORTAL_BOARD":
        				var bNo = objBindDs.getColumn(objBindDs.rowposition, "r_pk");
        				this.fnOpenPop(bNo);
        				break;
        			default:
        			}
        		}
        	}
        };

        // 게시판 상세화면 팝업
        this.fnOpenPop = function(BOARD_NO)
        {
        	BOARD_NO = BOARD_NO||'';
        	var pPopType;
        	var sSize = '';
        	if( Ex.isEmpty(BOARD_NO) ) {
        		pPopType = 'I';
        		sSize = 'width=1000,height=750';
        	}
        	else {
        		sSize = 'width=1400,height=750';
        		pPopType = 'R';
        	}

        	Ex.core.popup(
        			this,
        			'noticePop',
        			"fomm::FOMM0210_P01.xfdl",             		// <--- 팝업창 오픈 Url
        			{ title			: Ex.core.word('공지사항') + ' ' + Ex.core.word('상세'),
        			  pPopType		: pPopType,
        			  pBoardNo		: BOARD_NO
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        		);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtSearchStr.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.chkViewAll.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView01.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView02.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView03.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView04.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView05.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView06.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView13.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView12.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView11.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView10.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView09.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView08.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.chkView07.addEventHandler("onchanged",this.fnChkBoxCtrl,this);
            this.divContent.form.divSearchArea.form.calEndDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.calBeginDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divColls.form.tabRst.tabRstAll.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst01.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst02.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst03.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst04.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst05.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst06.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst07.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst08.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst09.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst10.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst11.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst12.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
            this.divContent.form.divColls.form.tabRst.tabRst13.form.divColl.form.grdList.addEventHandler("oncellclick",this.divContent_divColls_tabRst_tabRstAll_divColl_grdList_oncellclick,this);
        };
        this.loadIncludeScript("frTop_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
