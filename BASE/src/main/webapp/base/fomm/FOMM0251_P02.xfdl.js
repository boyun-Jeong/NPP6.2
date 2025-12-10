(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0251_P02");
            this.set_titletext("게시판 생성 팝업");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,399);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPostMtCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_NTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_READ\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_WRITE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UP_POST_MT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH_CD\">TEAM</Col><Col id=\"AUTH_CD_NM\">부서/팀</Col></Row><Row><Col id=\"AUTH_CD\">ALL</Col><Col id=\"AUTH_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBUN_CD\">P</Col><Col id=\"GUBUN_CD_NM\">게시글</Col></Row><Row><Col id=\"GUBUN_CD\">S</Col><Col id=\"GUBUN_CD_NM\">답글</Col></Row><Row><Col id=\"GUBUN_CD\">C</Col><Col id=\"GUBUN_CD_NM\">댓글</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCreType", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CREATE_TYPE\">DEPT</Col><Col id=\"CREATE_TYPE_NM\">부서/팀 생성</Col></Row><Row><Col id=\"CREATE_TYPE\">POST</Col><Col id=\"CREATE_TYPE_NM\">게시판 생성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","60",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20.00","20",null,"40","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00","-1","7","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDeptNm","19.00","7","80","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("생성 유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Radio("rdoCreType","stcDeptNm:0.00","6","280","26",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCreType");
            obj.set_datacolumn("CREATE_TYPE_NM");
            obj.set_codecolumn("CREATE_TYPE");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_validation("생성유형;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_text("");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","rdoCreType:0","8","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcUpPostNo","Static00_00:0","8","120","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("상위 부서/게시판");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtUpPostNm","stcUpPostNo:0.00","7","195","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divTop","0","Static00_01_01:0",null,"101","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","33",null,"68","20",null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcBg02","20","0",null,"34","20",null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcDeptNm","52.08%","0","110","34",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("접근부서");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcPostTitle","20.00","0","110","34",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("9");
            obj.set_text("게시판명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcPostTitle:5","5",null,"24","stcDeptNm:5",null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("2");
            obj.getSetter("validate").set("");
            obj.set_validation("게시판/부서명;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_text("");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcAdmin","20.00","33","110","68",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("3");
            obj.set_text("관리자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Div("divOutUser","stcAdmin:5","38","300","24",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("4");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Button("btnAddAdmin","divOutUser:5","38","60","24",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("5");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcAdminList","52.08%","33","110","68",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("6");
            obj.set_text("관리자 목록");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Div("divOutDept","stcDeptNm:5","5","300","24",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("7");
            obj.set_url("fomm::FOMM0000_D03.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new ListView("lsv00","stcAdminList:5","38",null,"58","51",null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsUser");
            obj.set_bandexpandtype("none");
            obj.set_bandinitstatus("collapse");
            obj.set_bandindentsize("5");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"50%\" height=\"50%\" border=\"1px solid #dbdbdb\" borderRadius=\"3px\"><Cell id=\"delBtn\" top=\"0\" width=\"15\" text=\"theme://images/btn_TF_Close_O.png\" displaytype=\"imagecontrol\" padding=\"4px 6px 4px 0px\" borderRadius=\"5px\" edittype=\"none\" accessibilityrole=\"button\" cursor=\"pointer\" bottom=\"0\" border=\"1px none #dbdee2\" right=\"5\"/><Cell id=\"userNm\" left=\"5.00\" top=\"0\" border=\"1px none #dbdee2\" bottom=\"0\" text=\"expr:USER_NM+&quot;(&quot;+DEPT_NM+&quot;)&quot;\" right=\"delBtn:10\" tooltiptext=\"expr:USER_NM+&quot;(&quot;+DEPT_NM+&quot;)&quot;\"/></Band></Format></Formats>");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Button("btnSearchPop",null,"38","24","24","24",null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_SearchIcon");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Div("divMid","0","171",null,"132","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg04","20.00","65",null,"34","20",null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcBg06","20.00","98",null,"34","20",null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcBg05","20.00","32",null,"34","20",null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcAlarm","20","65","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("3");
            obj.set_text("알림 설정");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcBg03","20.00","-1",null,"34","20",null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcPostPeriod","20.00","32","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("5");
            obj.set_text("게시 기간");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","stcPostPeriod:5","37","150","24",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validation("게시시작일;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_text("    -  -  ");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("Static00","calBeginDate:0","37","24","24",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("12px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","Static00:0","37","150","24",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("8");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validation("게시종료일;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_text("    -  -  ");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcReadAuth","52.08%","98","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("9");
            obj.set_text("읽기권한");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcWrite","52.08%","32","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("10");
            obj.set_text("쓰기 설정");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcTmpl","52.08%","-1","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("11");
            obj.set_text("게시글 템플릿");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcFile","20","98","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("12");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new MultiCombo("mcboPostTmpl","stcTmpl:5","4","300","24",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_innerdataset("dsTmpl");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_codecolumn("CMM_CD");
            obj.set_taborder("13");
            obj.set_text("mcbo00");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Radio("rdoReadAuth","stcReadAuth:5","103","234","26",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsAuth");
            obj.set_datacolumn("AUTH_CD_NM");
            obj.set_codecolumn("AUTH_CD");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_direction("vertical");
            obj.set_text("");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkSetWrite","stcWrite:5","36","359","27",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_innerdataset("dsGubun");
            obj.set_datacolumn("GUBUN_CD_NM");
            obj.set_codecolumn("GUBUN_CD");
            obj.set_taborder("15");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkSetAlarm","stcAlarm:5","69","359","27",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsGubun");
            obj.set_datacolumn("GUBUN_CD_NM");
            obj.set_codecolumn("GUBUN_CD");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new CheckBox("chkFileYn","stcFile:5","103","150","24",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("17");
            obj.set_value("true");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcWriteAuth","52.08%","65","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("19");
            obj.set_text("쓰기권한");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Radio("rdoWriteAuth","stcWriteAuth:5","70","234","26",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsAuth");
            obj.set_datacolumn("AUTH_CD_NM");
            obj.set_codecolumn("AUTH_CD");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_text("");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("stcPostType","20.00","-1","110","34",null,null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("게시판 종류");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Combo("cboPostTypeCd","stcPostType:5","4",null,"24","641",null,null,null,null,null,this.divContent.form.divMid.form);
            obj.set_taborder("21");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("게시판 종류;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsPostMtCd");
            obj.set_text("");
            this.divContent.form.divMid.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","0",null,null,"36","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTop.form.divOutUser.form
            obj = new Layout("default","",0,0,this.divContent.form.divTop.form.divOutUser.form,function(p){});
            this.divContent.form.divTop.form.divOutUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTop.form.divOutDept.form
            obj = new Layout("default","",0,0,this.divContent.form.divTop.form.divOutDept.form,function(p){});
            this.divContent.form.divTop.form.divOutDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTop.form
            obj = new Layout("default","",0,0,this.divContent.form.divTop.form,function(p){});
            this.divContent.form.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divMid.form
            obj = new Layout("default","",0,0,this.divContent.form.divMid.form,function(p){});
            this.divContent.form.divMid.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,399,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.rdoCreType","value","dsPostMt","CREATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.edtUpPostNm","value","dsPostMt","UP_POST_MT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divTop.form.edtTitle","value","dsPostMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divMid.form.cboPostTypeCd","value","dsPostMt","POST_MT_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divMid.form.mcboPostTmpl","value","dsPostMt","POST_TMPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divMid.form.calBeginDate","value","dsPostMt","BEGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divMid.form.calEndDate","value","dsPostMt","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divMid.form.chkSetAlarm","value","dsPostMt","ALARM_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.divMid.form.chkSetWrite","value","dsPostMt","WRITE_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.divMid.form.rdoWriteAuth","value","dsPostMt","AUTH_WRITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.divMid.form.rdoReadAuth","value","dsPostMt","AUTH_READ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContent.form.divMid.form.chkFileYn","value","dsPostMt","ATTACH_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D01.xfdl");
            this._addPreloadList("fdl","fomm::FOMM0000_D03.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0251_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0251_P02
        * 화면(명)		︰ 게시판 생성 팝업
        * 메뉴(경로)	︰
        * 화면 설명	︰ SPP 게시판 생성 팝업
        * 작성자		︰ 정하림
        * 작성일		︰ 2024.12.16
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.12.16	 정하림			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pPopType = 'R';	// R: read / I: new / U: edit
        this.pPostMtNo = '';	// 부모화면에서 넘겨준 게시판 번호
        this.pUpPostNo = '';	// 부모화면에서 넘겨준 상위 게시판 번호
        this.pUpPostNm = '';	// 부모화면에서 넘겨준 상위 게시판 타이틀
        this.pSelectedDeptNm = '';
        this.pSelectedDeptCd = '';
        this.pSelectedLvl = '';

        this.deptFlag = false; 	// 부서/팀 or 게시판

        this.orgHeight = nexacro.toNumber(this.getOwnerFrame().height);
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
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/


        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select02";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select02pop";               // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsPostMt=dsPostMt";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save02";                          			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/save02";                         // 서비스명
            var sInDs = "dsPostMt=dsPostMt:U dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsPostMt=dsPostMt";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
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
        		case "select02" :
        			Ex.core.toast(this, "10002");

        			this.deptFlag = (this.dsPostMt.getColumn(this.dsPostMt.rowposition, 'CREATE_TYPE') == 'DEPT') ? true : false;
        			if(this.deptFlag){
        				this.fnCreTypeItemChange(); // 부서/팀 생성이면 숨길 화면 세팅
        			} else {
        				this.divContent.form.divTop.form.divOutDept.set_enable(false); // 부서 게시판에서 가져오기 때문에 접근x
        			}

        			var managerList = this.dsPostMt.getColumn(this.dsPostMt.rowposition, 'MANAGER');
        			if ( !Ex.isEmpty(managerList) ) {
        				this.jsonToDataSet(managerList);
        			}

        			// dept DIV 값 세팅(부모 팀 게시판의 DEPT_CD와 DEPT_NM을 가져와야 함)
        			var deptCd    = this.dsPostMt.getColumn(0, "DEPT_CD") || '';
        			var deptNm    = this.dsPostMt.getColumn(0, "DEPT_NM") || '';
        			this.divContent.form.divTop.form.divOutDept.form.setValue(deptCd, deptNm);

        			break;

        		case "save01" :
        		case "save02" :
        			var param = {
        					id : "saveAlert"
        				  , msg : "10004"
        				  , arrparam : ['']
        				  , msgtype : "S"};
        			Ex.core.alert(this, param);
        			break;

        	}
        }

        // 관리자 - 직원 DIV 콜백함수
        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	console.log("this.userDeptChangedCallBack() compId:" + compId + "\n" + dsRtnObj.saveXML());
        	if(compId == "divOutUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			trace("dsRtnObj :: ", dsRtnObj.saveXML());
        			this.dsTemp.setColumn(0, "USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsTemp.setColumn(0, "USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        			this.dsTemp.setColumn(0, "DEPT_NM",	dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsTemp.setColumn(0, "USER_ID",	"");
        			this.dsTemp.setColumn(0, "USER_NM",	"");
        			this.dsTemp.setColumn(0, "DEPT_NM",	"");
        		}
        	}
        }

        // 관리자 - 부서 DIV 콜백함수
        this.deptChangedCallBack = function(compId, dsRtnObj)
        {
        	console.log("this.deptChangedCallBack() compId:" + compId + "\n" + dsRtnObj.saveXML());
        	if(compId == "divOutDept")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "DEPT_CD")) )
        		{
        			this.dsPostMt.setColumn(0, "DEPT_CD",	dsRtnObj.getColumn(0, "DEPT_CD"));
        			this.dsPostMt.setColumn(0, "DEPT_NM",	dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsPostMt.setColumn(0, "DEPT_CD",	"");
        			this.dsPostMt.setColumn(0, "DEPT_NM",	"");
        		}
        	}
        }


        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if( Ex.isEmpty(varValue) )
        		return;

        	switch(pID)
        	{
        		case "searchPop" :
        			//trace("varValue :: ", varValue)
        			this.dsUser.loadJSON(varValue); // 업데이트된 데이터를 현재 팝업에도 적용
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

        		case "saveAlert" :
        			Ex.core.pclose(this, 'mtSave');
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();		// 공통코드 조회

        	var arrBtn = [this.divBottom.form.btnSave];
         	Ex.util.setBtnVisible(this.getOwnerFrame(), 'save', arrBtn);

        	// 관리자 목록
        	this.divContent.form.divTop.form.lsv00.nodatatext = "관리자를 추가해주세요.";

        	this.pPopType 	= (this.getOwnerFrame().pPopType||'').toUpperCase();
        	this.pPostMtNo	= this.getOwnerFrame().pPostNo||'';
        	this.pUpPostNo 	= this.getOwnerFrame().pUpPostNo||'';
        	this.pUpPostNm 	= this.getOwnerFrame().pUpPostNm||'';
        	this.pSelectedDeptNm = this.getOwnerFrame().pSelectedDeptNm||'';
        	this.pSelectedDeptCd = this.getOwnerFrame().pSelectedDeptCd||'';
        	this.pSelectedLvl = this.getOwnerFrame().pSelectedLvl||'';

        	//trace("P02 pPopType : ", this.pPopType)
        	switch(this.pPopType)
        	{
        		case "I" :
        			this.divContent.form.divSearchArea.form.rdoCreType.setFocus();

        			var rowPos = this.dsPostMt.setAddRow();

        			this.dsPostMt.setColumn(rowPos, 'CREATE_TYPE', 'POST');
        			this.dsPostMt.setColumn(rowPos, 'BEGIN_DT', Ex.util.today());
        			this.dsPostMt.setColumn(rowPos, 'END_DT', '99991231');
        			this.dsPostMt.setColumn(rowPos, 'AUTH_READ', 'TEAM');
        			this.dsPostMt.setColumn(rowPos, 'AUTH_WRITE', 'TEAM');
        			this.dsPostMt.setColumn(rowPos, 'DEPT_CD', this.pSelectedDeptCd); // 상위 부서로 세팅
        			this.dsPostMt.setColumn(rowPos, 'DEPT_NM', this.pSelectedDeptNm);

        			if(!Ex.isEmpty(this.pUpPostNo)){
        				this.dsPostMt.setColumn(rowPos, 'UP_POST_MT_NO', this.pUpPostNo); // 상위게시판번호 표시
        				this.dsPostMt.setColumn(rowPos, 'UP_POST_MT_NM', this.pUpPostNm); // 상위게시판이름 표시

        				if(this.pSelectedLvl != '0'){ // 최상위 레벨이 아닌 경우에만(최상위 밑에 부서 만들수도 있으니)
        					this.divContent.form.divTop.form.divOutDept.form.setValue(this.pSelectedDeptCd, this.pSelectedDeptNm);
        					this.divContent.form.divTop.form.divOutDept.set_enable(false); // 상위 부서 게시판에서 가져오기 때문에 접근x
        				}

        			}
        			break;

        		case "U" :
        			this.divBottom.form.btnSave.set_visible(true);
        			this.divContent.form.divSearchArea.form.rdoCreType.readonly = true;
        			this.dsCond.setColumn(this.dsCond.rowposition, 'POST_MT_NO', this.pPostMtNo);

        			this.fnSearch();
        			break;

        	}

        	this.divContent.set_visible(true);
        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['POST_MT_TYPE_CD',	'POST_TMPL_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',			'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['SEL',				'']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y']				// 사용여부
        		,filter	: ['',					'']				// filterStr
        		,objDs	: [this.dsPostMtCd,		this.dsTmpl]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        // validation
        this.fnCheckValidate = function()
        {
        	// component validation
        	if( !Ex.util.checkValidate(this.divContent.form.divSearchArea, "fvValiCmp") )
        		return false;
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") )
        		return false;
        	if( !Ex.util.checkValidate(this.divContent.form.divTop, "fvValiCmp") )
        		return false;
        	if( this.dsPostMt.getColumn(0, 'CREATE_TYPE') == 'POST' && !Ex.util.checkValidate(this.divContent.form.divMid, "fvValiCmp") )
        		return false;

        	var rowpos = this.dsPostMt.rowposition;

        	// 게시종료 > 게시시작 validation
        	var BEGIN	= this.dsPostMt.getColumn(rowpos, 'BEGIN_DT');
        	var END 	= this.dsPostMt.getColumn(rowpos, 'END_DT');
        	var sDt	= Ex.util.strToDate(BEGIN+"000000");
        	var eDt	= Ex.util.strToDate(END+"000000");

        	if(sDt > eDt) {
        		var param = {
        				id : "sDtLateAlert"
        			  , msg : "10013"
        			  , arrparam : [Ex.core.word('게시시작일'), Ex.core.word('게시종료일')]
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}

        // 	if( Ex.isEmpty(this.dsPostMt.getColumn(0, 'BEGIN_DT')) || Ex.isEmpty(this.dsPostMt.getColumn(0, 'END_DT')) ){
        // 		var param = {
        // 			  id	: "setDateAlert"				//fnMsgAfter에서 식별자로 사용되는 ID
        // 			, msg	: "게시 기간을 알맞게 지정해주세요."	//메시지 내용
        // 			, arrparam : [""]						//메시지의 변수에 들어갈 실제값
        // 			, msgtype : "W"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        // 		};
        // 		Ex.core.alert(this, param);
        // 		return false;
        // 	}

        	// 접근 부서 및 관리자 validation
        	var dept = this.dsPostMt.getColumn(rowpos, 'DEPT_CD');
        	var manager = this.dsUser.getColumn(0, 'USER_ID');

        	//if(Ex.isEmpty(dept) || Ex.isEmpty(manager)){
        	if(Ex.isEmpty(manager)){
        		//var msg = Ex.isEmpty(dept) ? '접근부서' : '관리자';
        		var msg = Ex.isEmpty(manager) ? '관리자' : '관리자';

        		var param = {
        			id : "deptManEmptyAlert"
        		  , msg : "{0}가 선택되지 않았습니다."
        		  , arrparam : [Ex.core.word(msg)]
        		  , msgtype : "I"
        		  };

        		Ex.core.alert(this, param);
        		return false;
        	}

        	return true;
        }




        // 생성 유형 변경할 경우
        this.fnCreTypeItemChange = function(obj,e)
        {
        	var isDept = (this.deptFlag != '') ? this.deptFlag : (e.postvalue === "DEPT");
        	this.divContent.form.divMid.set_visible(!isDept); // 아래 내용들 표시 및 숨기기

        	if(isDept) this.divContent.form.divTop.form.stcPostTitle.set_text("부서명");
        	else this.divContent.form.divTop.form.stcPostTitle.set_text("게시판명");

        	if(this.divContent.form.divMid.visible){ // visible 처리가 되어 있다면 각 컴포넌트 위치 동적 변경
        		this.getOwnerFrame().set_height(this.orgHeight+5); // 원래 높이로 변경
        	}else{
        		this.getOwnerFrame().set_height(this.orgHeight - nexacro.toNumber(this.divContent.form.divMid.height) + 30);
        	}
        }

        // 관리자 DataSet --> JSON 변환
        this.dataSetToJson = function(objDs)
        {
        	var jsonArr = [];

        	for(var i=0; i<objDs.rowcount; i++)
        	{
        		var obj =	{
        						"USER_NM": objDs.getColumn(i, 'USER_NM'),
        						"USER_ID": objDs.getColumn(i, 'USER_ID'),
        						"DEPT_NM": objDs.getColumn(i, 'DEPT_NM'),
        					};

        		jsonArr.push(obj);
        	}

        	var result = JSON.stringify(jsonArr);
        	//trace("-- DataSetToJson result :: ", result)
        	return result;
        }

        // JSON --> 관리자 Dataset 변환
        this.jsonToDataSet = function(jsonData)
        {
        	try {
        		var jsonArr = JSON.parse(jsonData); // JSON 문자열을 객체 배열로 변환

        		for(var i=0; i<jsonArr.length; i++)
        		{
        			var userId = jsonArr[i].USER_ID;
        			var userNm = jsonArr[i].USER_NM;
        			var deptNm = jsonArr[i].DEPT_NM;
        			trace("파싱 ) USER_ID : ", userId, " / USER_NM : ", userNm, " / DEPT_NM : ", deptNm);

        			var rowPos = this.dsUser.setAddRow();

        			this.dsUser.setColumn(rowPos, 'USER_ID', userId);
        			this.dsUser.setColumn(rowPos, 'USER_NM', userNm);
        			this.dsUser.setColumn(rowPos, 'DEPT_NM', deptNm);
        		}

        	} catch (e) {
        		var param = {id : "ERROR", msg : "JSON 파싱 오류"};
        		Ex.core.error(this, param);
        		return;
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
        		case "btnSearchPop" :
        			Ex.core.popup(
        				this,
        				'searchPop',
        				'fomm::FOMM0251_P03.xfdl',             		// <--- 팝업창 오픈 Url
        				{ title			: Ex.core.word('관리자 관리'),
        				  pUserList		: this.dsUser.saveJSON()
        				},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        				"autosize"
        			);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSave" :		// 저장
        			var managerInfo = '';

        			if(this.dsUser.getRowCount() > 0) managerInfo = this.dataSetToJson(this.dsUser);
        			this.dsPostMt.setColumn(this.dsPostMt.rowposition, 'MANAGER', managerInfo);

        			if( Ex.util.isUpdated(this.dsPostMt))
        			{
        				if( !this.fnCheckValidate() ) {
        					return;
        				}
        				else {
        					var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"};
        					Ex.core.confirm(this, param);

        				}

        			}
        			break;

        	}
        }

        // 공통 oncloumnchanged event : dataset
        this.dsPostMt_oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        // 관리자 추가 버튼 클릭 이벤트
        this.btnAddAdmin_onclick = function(obj,e)
        {
        	var dataRowCnt = this.divContent.form.divTop.form.divOutUser.form.getDataset().getCount( "USER_ID" );

        	if( dataRowCnt == 0 ) { // 관리자를 선택하지 않았을 경우
        		var param = {
        			  id	: "nonValueAlert"					//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "추가할 정보가 존재하지 않습니다.\n관리자를 선택해주세요."
        			, arrparam : [""]
        			, msgtype : "W"
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	var userId = this.dsTemp.getColumn(0, "USER_ID");
        	var userNm = this.dsTemp.getColumn(0, "USER_NM");
        	var deptNm = this.dsTemp.getColumn(0, "DEPT_NM");

        	var rowPos = this.dsUser.setAddRow();
        	this.dsUser.setColumn(rowPos, 'USER_ID', userId);
        	this.dsUser.setColumn(rowPos, 'USER_NM', userNm);
        	this.dsUser.setColumn(rowPos, 'DEPT_NM', deptNm);

        	this.divContent.form.divTop.form.divOutUser.form.resetInput(true); // 리셋
        };

        // ListView 클릭 이벤트
        this.lsv_onClick = function(obj,e)
        {
        	if (e.cellid == "delBtn"){
        		this.dsUser.deleteRow(e.row);
        	}
        }

        // 동적 DIV 만들 경우 사용 (현재 사용 X)
        this.createManagerForm = function(stcText, rowpos){
        	var parentDiv = this.divContent.form.divTop.form.divManList.form;
        	parentDiv.formscrollbartype = "autoindicator none";
        	trace("parentDiv.formscrollbartype :: ", parentDiv.formscrollbartype)
        	var divId = "divManager" + rowpos;

        	var divWidth = 192;
        	var divHeight = 24;

        	var divManager = new Div(divId, 0+(rowpos * (divWidth+2)), 5, divWidth, null, null, 5);
        	divManager.borderRadius = "3px";
        	divManager.border = "1px solid #dbdbdb";

        	parentDiv.addChild(divId, divManager);
        	divManager.show();

        	var objStatic = new Static("stcManager", 5, 2, 160, null, null, 2);
        	objStatic.text = stcText;
        	divManager.addChild("stcManager", objStatic);
        	objStatic.show();

        	var objButton = new Button("btnDelete", null, 2, 22, null, 2, 2);
        	objButton.color = "red";
        	objButton.background = "white";
        	objButton.border = "0px solid";
        	objButton.text = "X";
        	objButton.addEventHandler("onclick", function(){
        		parentDiv.removeChild(divId);
        		divManager.destroy();
        	})

        	divManager.addChild("btnDelete", objButton);
        	objButton.show();

        }

        this.preventOverUser = function(){
        	var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, "USER_ID"));
        			if(fRow > -1)
        			{
        				var userInfo = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, "USER_NM") + "[" + this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, "USER_ID") + "]";
        				var oParam = {id : "alertAddUserI", msg : "{0} 이미 추가한 사용자 입니다.", arrparam : [userInfo], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContent.form.divSearchArea.form.rdoCreType.addEventHandler("onitemchanged",this.fnCreTypeItemChange,this);
            this.divContent.form.divSearchArea.form.edtUpPostNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.edtUpPostNm.addEventHandler("onchanged",this.divContent_edtDeptId_onchanged,this);
            this.divContent.form.divTop.form.btnAddAdmin.addEventHandler("onclick",this.btnAddAdmin_onclick,this);
            this.divContent.form.divTop.form.lsv00.addEventHandler("oncellclick",this.lsv_onClick,this);
            this.divContent.form.divTop.form.btnSearchPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divMid.form.stcBg04.addEventHandler("onclick",this.divContent_stcBg04_onclick,this);
            this.divContent.form.divMid.form.stcBg05.addEventHandler("onclick",this.Static_onclick,this);
            this.divContent.form.divMid.form.stcAlarm.addEventHandler("onclick",this.Static_onclick,this);
            this.divContent.form.divMid.form.stcPostPeriod.addEventHandler("onclick",this.divContents_stcMeetLoc_onclick,this);
            this.divContent.form.divMid.form.calEndDate.addEventHandler("onchanged",this.divContent_calEndDate_onchanged,this);
            this.divContent.form.divMid.form.stcReadAuth.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContent.form.divMid.form.stcFile.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContent.form.divMid.form.rdoReadAuth.addEventHandler("onitemchanged",this.divContent_rdo00_onitemchanged,this);
            this.divContent.form.divMid.form.chkSetWrite.addEventHandler("onitemchanged",this.divContent_chkSetWrite_onitemchanged,this);
            this.divContent.form.divMid.form.stcWriteAuth.addEventHandler("onclick",this.Static13_onclick,this);
            this.divContent.form.divMid.form.rdoWriteAuth.addEventHandler("onitemchanged",this.divContent_rdo00_onitemchanged,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsPostMt.addEventHandler("oncolumnchanged",this.dsPostMt_oncolumnchanged,this);
            this.dsUser.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsTemp.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0251_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
