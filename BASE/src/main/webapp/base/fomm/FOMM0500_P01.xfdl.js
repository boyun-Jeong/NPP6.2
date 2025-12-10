(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0500_P01");
            this.set_titletext("통보등록 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,694);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTI_BATCH_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUse", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendTerm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_BATCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_BATCH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SND_GAP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SND_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MON\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_TUE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_WED\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_THU\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_FRI\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_SAT\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_SUN\" type=\"STRING\" size=\"256\"/><Column id=\"SND_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SND_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"SND_HLDY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CC_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CC_SNS\" type=\"STRING\" size=\"256\"/><Column id=\"CC_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"CC_PUSH\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendDate", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">MON</Col><Col id=\"CMM_CD_NM\">월</Col></Row><Row><Col id=\"CMM_CD\">TUE</Col><Col id=\"CMM_CD_NM\">화</Col></Row><Row><Col id=\"CMM_CD\">WED</Col><Col id=\"CMM_CD_NM\">수</Col></Row><Row><Col id=\"CMM_CD_NM\">목</Col><Col id=\"CMM_CD\">THU</Col></Row><Row><Col id=\"CMM_CD_NM\">금</Col><Col id=\"CMM_CD\">FRI</Col></Row><Row><Col id=\"CMM_CD_NM\">토</Col><Col id=\"CMM_CD\">SAT</Col></Row><Row><Col id=\"CMM_CD_NM\">일</Col><Col id=\"CMM_CD\">SUN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("70");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_04","60.08%","0","20",null,null,"60",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00",null,"10","20",null,"0","50",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","150","86",null,"292","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","150","377",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotiDate","20","377","130","68",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("발송 일시");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","150","575",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","150.00","410",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","-10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","150.00","509",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","150.00","542",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","150.00","476",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0.00","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","0","20",null,null,"60",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","150.00","443",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","150","20",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","150","53",null,"34","Static00_04:0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotiTitle","20.00","53","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcBtjbTypeCd","20.00","575","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcRefEntity","20.00","443","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("통보매체");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotiDetail","20.00","86","130","292",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotiManager","20.00","476","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("통보담당자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotiHoliYN","20.00","509","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("공휴일 전송여부");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotiUrl","20.00","542","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("배치모듈호출URL");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcNotiNm","20.00","20","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("통보배치명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","155","25",null,"589","Static00_04:5",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbNotiDay","0","358","80","22",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSendTerm");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validationCheckReadonly("false");
            obj.set_validationCheckVisible("false");
            obj.set_validationCheckEnable("false");
            obj.set_validation("발송일시;NULL");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkDay","95.00","357","400","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSendDate");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divContents.addChild(obj.name, obj);

            obj = new TextArea("txaBtjbDesc","0","66",null,"282","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("발송내용;NULL|MAX_LEN_UTF8:4000");
            this.divContents.addChild(obj.name, obj);

            obj = new CheckBox("chkNoti01","5.00","418","100","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_text("FLOW");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("true");
            this.divContents.addChild(obj.name, obj);

            obj = new CheckBox("chkNoti02","105","418","100","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_text("문자");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divContents.addChild(obj.name, obj);

            obj = new CheckBox("chkNoti03","205","418","100","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_text("메일");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtNotiTitle","0","33",null,"24","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("메일 발송 제목;NULL|MAX_LEN_UTF8:100");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("rdoNotiYN","1.00","550","120","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYn");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new CheckBox("chkNoti04","305","418","100","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("메신저");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtNotiTimeH","0","390","50","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_inputtype("number");
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("발송시간_시;NULL|MAX_LEN_UTF8:5");
            obj.set_maxlength("2");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static00T","60.00","392","20","18",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("시");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("rdoNotiHoliYN","2.00","484","120","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_index("-1");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaticTM","80.00","392","200","18",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_text("※ 24시간 기준");
            obj.set_color("#ff0000");
            obj.set_visible("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtNotiNm","0","0",null,"24","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("통보배치명;NULL|MAX_LEN_UTF8:100");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divUser","0","456","240","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divDay","85.00","352","360","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtDay","0","5","95","24",null,null,null,null,null,null,this.divContents.form.divDay.form);
            obj.set_inputtype("digit,comma");
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("발송일자;NULL");
            obj.set_maxlength("10");
            obj.set_enable("true");
            obj.set_textAlign("right");
            obj.set_validationGroup("fvValiCmp");
            obj.set_text("");
            this.divContents.form.divDay.addChild(obj.name, obj);

            obj = new Static("Static00T00","edtDay:10","7","20","18",null,null,null,null,null,null,this.divContents.form.divDay.form);
            obj.set_taborder("0");
            obj.set_text("일");
            this.divContents.form.divDay.addChild(obj.name, obj);

            obj = new Edit("edtNotiUrl","0","522",null,"24","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validate").set("");
            obj.set_validation("배치모듈호출url;NULL|MAX_LEN_UTF8:100");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divRcpt","Static00_04:0.00","Static00_01:0",null,null,"Static00_04_00:0","divBottom:24",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("d");
            this.addChild(obj.name, obj);

            obj = new Div("divMbrGrdBtn",null,"0","200","24","0",null,null,null,null,null,this.divRcpt.form);
            obj.set_taborder("0");
            obj.set_isButtonGroup("true");
            obj.set_isChgLang("false");
            obj.getSetter("skipComp").set("Y");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divRcpt.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"5","0",null,null,null,null,this.divRcpt.form.divMbrGrdBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divRcpt.form.divMbrGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","btnDelete:5",null,null,null,null,null,this.divRcpt.form.divMbrGrdBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divRcpt.form.divMbrGrdBtn.addChild(obj.name, obj);

            obj = new Static("sta_titl","0","0","65","24",null,null,null,null,null,null,this.divRcpt.form);
            obj.set_taborder("3");
            obj.set_text("수신자");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divRcpt.addChild(obj.name, obj);

            obj = new Grid("grdRcptUser","0","sta_titl:10",null,null,"0","0",null,null,null,null,this.divRcpt.form);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoenter("select");
            obj.set_binddataset("dsUser");
            obj.getSetter("skipComp").set("Y");
            obj.set_useSort("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"130\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"사번\"/><Cell col=\"5\" text=\"소속\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" editlimit=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:USER_NM\" editlimit=\"10\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"이름;NULL\" edittype=\"none\" textAlign=\"center\" expandshow=\"expr:ROLE_CD != &apos;3&apos; &amp;&amp; ROWFLAG == &apos;I&apos; ?  &quot;show&quot; :  &quot;none&quot;\" expandsize=\"28\" validationStatus=\"false\"/><Cell col=\"4\" text=\"bind:USER_ID\" editlimit=\"10\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"이름;NULL\" edittype=\"none\" textAlign=\"center\" expandshow=\"expr:ROLE_CD != &apos;3&apos; &amp;&amp; ROWFLAG == &apos;I&apos; ?  &quot;show&quot; :  &quot;none&quot;\" expandsize=\"28\" validationStatus=\"false\"/><Cell col=\"5\" text=\"bind:DEPT_NM\" editlimit=\"10\" combodataset=\"dsCodeSysType\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"소속;NULL\" edittype=\"none\" textAlign=\"left\" displaytype=\"normal\" validationStatus=\"false\"/></Band></Format></Formats>");
            this.divRcpt.addChild(obj.name, obj);

            obj = new Static("stcCnt","65","0","50","24",null,null,null,null,null,null,this.divRcpt.form);
            obj.set_taborder("2");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsUser");
            this.divRcpt.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divUser.form
            obj = new Layout("default","",0,0,this.divContents.form.divUser.form,function(p){});
            this.divContents.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divDay.form
            obj = new Layout("default","",0,0,this.divContents.form.divDay.form,function(p){});
            this.divContents.form.divDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRcpt.form.divMbrGrdBtn.form
            obj = new Layout("default","",0,0,this.divRcpt.form.divMbrGrdBtn.form,function(p){});
            this.divRcpt.form.divMbrGrdBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRcpt.form
            obj = new Layout("default","",0,0,this.divRcpt.form,function(p){});
            this.divRcpt.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1320,694,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item11","Static06","value","dsData","NOTI_BATCH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContents.form.cmbNotiDay","value","dsData","SND_GAP_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.cmbNotiDay.form.Static00T00","value","dsData","SND_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.cmbNotiDay.form.edtDay","value","dsData","SND_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.cmbNotiDay.form.edtDay00","value","dsData","SND_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.edtNotiNm","value","dsData","NOTI_BATCH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.edtNotiTitle","value","dsData","SND_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.txaBtjbDesc","value","dsData","SND_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.divDay.form.edtDay","value","dsData","SND_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.edtNotiTimeH","value","dsData","SND_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContents.form.chkNoti01","value","dsData","CC_PUSH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContents.form.chkNoti02","value","dsData","CC_SMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContents.form.chkNoti04","value","dsData","CC_SNS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContents.form.rdoNotiYN","value","dsData","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContents.form.edtNotiUrl","value","dsData","NOTI_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divContents.form.rdoNotiHoliYN","value","dsData","SND_HLDY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContents.form.chkNoti03","value","dsData","CC_MAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D01.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0500_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0500_P01
        * 화면(명)		︰ 통지등록 팝업
        * 메뉴(경로)	︰ 관리자 > 통지관리 > 통지등록팝업
        * 화면 설명	︰ 통지등록팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.02.01
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.02.01	 김지수		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pPopType = 'R';	// R: read / I: new / U: edit

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
        	this.fn_initDataset();
        	this.fnCompInit();		// 컴포넌트 초기화
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0500W/select01";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData dsUser=dsUser";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func.
        this.fnSave = function()
        {
        	if(Ex.util.isUpdated(this.dsUser))
        	{
        		var userID = '';
        		this.dsUser.set_filterstr("ROWFLAG != 'D' ");
        		for(var i=0; i<this.dsUser.rowcount; i++)
        		{
        			if(i == this.dsUser.rowcount-1) userID = userID + this.dsUser.getColumn(i,"USER_ID");
        			else userID = userID + this.dsUser.getColumn(i,"USER_ID") + ",";

        		}
        		this.dsData.setColumn(0,"SND_USER_ID",userID);
        		this.dsUser.set_filterstr("");
        	}

         	// transaction
         	var sTranId = "save01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0500W/save01";                         // 서비스명
            var sInDs = "dsData=dsData:U dsCond=dsCond ";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

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
        			this.fnSwitch(this.dsData.getColumn(0,'SND_GAP_TYPE'));
        			Ex.core.toast(this, "10002");

        			var strCgerUserId    = this.dsData.getColumn(0, "NOTI_USER_ID");
        			var strCgerUserNm    = this.dsData.getColumn(0, "NOTI_USER_NM");
        			this.divContents.form.divUser.form.setValue(strCgerUserId, strCgerUserNm);

        			break;


        		case "save01" :
        			var param = {
        					id : "saveAlert"
        				  , msg : "10004"
        				  , arrparam : ['']
        				  , msgtype : "S"};
        			Ex.core.alert(this, param);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if( Ex.isEmpty(varValue) ) return;
        	this.dsPopRtn.loadXML(varValue);
        	switch (pID)
        	{
        		case "selUserPop" : // 서비스 ID

        			if(this.dsPopRtn.rowcount == 0)
        			{
        				var param = {id : "pAlertNotSelectUserI", msg : "선택한 사용자가 없습니다."};
        				Ex.core.alert(this, param);
        				return;
        			}
        // 			else if(this.dsPopRtn.rowcount > 0)
        // 			{
        // 				for(var i=0; i<this.dsUser.rowcount; i++)
        // 				{
        // 					var fRow = this.dsUser.findRow("USER_ID", this.dsPopRtn.getColumn(i, "USER_ID"));
        // 					if(fRow > -1)
        // 					{
        // 						var param = {id : "pAlertOneSelectUserI", msg : "이미 등록된 사용자 입니다."};
        // 						Ex.core.alert(this, param);
        // 						return;
        // 					}
        // 				}
        // 			}
        			for(var i=0; i<this.dsPopRtn.rowcount; i++)
        			{
        				var fRow = this.dsUser.findRow("USER_ID", this.dsPopRtn.getColumn(i, "USER_ID"));
        				if(fRow < 0 )
        				{
        					var USER_ID = this.dsPopRtn.getColumn(i, "USER_ID");
        					var USER_NM = this.dsPopRtn.getColumn(i, "USER_NM");
        					var DEPT_CD = this.dsPopRtn.getColumn(i, "DEPT_CD");
        					var DEPT_NM = this.dsPopRtn.getColumn(i, "DEPT_NM");

        					var nRow = this.dsUser.setInsertRow();
        					this.dsUser.setColumn(nRow, "USER_ID", USER_ID);
        					this.dsUser.setColumn(nRow, "USER_NM", USER_NM);
        					this.dsUser.setColumn(nRow, "DEPT_CD", DEPT_CD);
        					this.dsUser.setColumn(nRow, "DEPT_NM", DEPT_NM);
        				}
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

        		case "saveAlert" :
        			Ex.core.pclose(this, 'save');
        			break;

        	}
        }


        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	if(compId == "divUser")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsData.setColumn(0, "NOTI_USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsData.setColumn(0, "NOTI_USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsData.setColumn(0, "NOTI_USER_ID",	"");
        			this.dsData.setColumn(0, "NOTI_USER_NM",	"");
        		}
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fn_initDataset = function()
        {
        	this.fnGetCmmCd();		// 공통코드 조회
        	var pNOTI_BATCH_ID = (this.getOwnerFrame().pNOTI_BATCH_ID||'').toUpperCase();
        	this.pPopType 	= (this.getOwnerFrame().pPopType||'').toUpperCase();

        	trace("fn_initDataset  this.pPopType===>" + this.pPopType );
        	switch(this.pPopType)
        	{
        		case "I" :

        			this.dsData.clearData();
        			var rowPos = this.dsData.setAddRow();
        			this.dsData.setColumn(rowPos, 'SND_HLDY_YN', 'N');
        			this.dsData.setColumn(rowPos, 'USE_YN', 'Y');
        			this.divContents.form.cmbNotiDay.set_index(1);
        			//this.dsData.setColumn(rowPos, 'SND_STIME','00');
        			break;

        		case "R" :
        			this.divBottom.form.btnSave.set_visible(false);

        			this.divContents.form.edtNotiNm.set_readonly(true);
        			this.divContents.form.edtNotiTimeH.set_readonly(true);
        			this.divContents.form.edtNotiTitle.set_readonly(true);
        			this.divContents.form.edtNotiUrl.set_readonly(true);
        			this.divContents.form.txaBtjbDesc.set_readonly(true);

        			this.divContents.form.rdoNotiHoliYN.set_readonly(true);
        			this.divContents.form.rdoNotiYN.set_readonly(true);
        			this.divContents.form.chkDay.set_readonly(true);
         			this.divContents.form.chkNoti01.set_readonly(true);
         			this.divContents.form.chkNoti02.set_readonly(true);
         			this.divContents.form.chkNoti03.set_readonly(true);
         			this.divContents.form.chkNoti04.set_readonly(true);
        			this.divContents.form.cmbNotiDay.set_readonly(true);

        			this.divContents.form.divUser.set_enable(false);
        			this.divContents.form.divDay.set_enable(false);

        		default	 :
        			this.dsCond.setColumn(this.dsCond.rowposition, 'NOTI_BATCH_ID', pNOTI_BATCH_ID);
        			this.fnSearch();
        			break;
        	}
        }

        this.fnCompInit = function()
        {
        	this.divRcpt.form.grdRcptUser.displayRowType();
        	this.dsData.setColumn(0, "SND_GAP_TYPE", "TERM_W");  //기본 매주선택
        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : [	'USE_CD',	'YN_CD2',	'SEND_TERM_CD'				]	// 조회할 상위코드
        		,codeDiv: [	'CMM_CD',	'CMM_CD',	'BASIS_CD'					]	// 조회할 코드의 업무구분
        		,optStr	: [	'',			'',			'SEL'						]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: [	'Y',		'Y',		'Y'							]	// 사용여부
        		,filter	: [	'',			'',			''							]	// filterStr
        		,objDs	: [	this.dsUse,	this.dsYn,	this.dsSendTerm				]	// copy dataset
        	};
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util

        };

        this.isUpdateForm = function()
        {
        	if( !Ex.util.isUpdated(this.dsData) ) return false;
        	else return true;
        }

        this.isModify = function()
        {
        	if( Ex.util.isUpdated(this.dsData) ) return true;
        	else return false;
        }

        this.fnCheckValidate = function(isRev)
        {

        	var sndDate = this.dsData.getColumn(0,"SND_DATE");
        	var sndType = this.dsData.getColumn(0,'SND_GAP_TYPE');
        	var dayValue = this.divContents.form.chkDay.value;
        	var notiUser = this.dsData.getColumn(0,'NOTI_USER_ID');

        	if(!Ex.util.checkValidate(this.divContents, "fvValiCmp")) return false;
        	else if ( sndType == "TERM_W" && (Ex.isUndefined(dayValue) || Ex.isEmpty(dayValue) ))
        	{
        		var param = {id : "pAlertNoti", msg : "발송 일시(요일)가 설정되지 않았습니다."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else if( sndType == "TERM_M" && !Ex.util.checkValidate(this.divContents.form.divDay, "fvValiCmp")) return false;
        	else if(!Ex.isEmpty(sndDate) && !Ex.isUndefined(sndDate) && !this.timeChk(sndDate) )
        	{
        		this.divContents.form.divDay.form.edtDay.setFocus();
        		var param = {id : "pAlertNoti", msg : "발송일을 다시 확인 후 입력하세요."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else if( parseInt(this.dsData.getColumn(0,'SND_STIME')) > 23  )
        	{
        		this.divContents.form.edtNotiTimeH.setFocus();
        		var param = {id : "pAlertNoti", msg : "발송일시 시간을 다시 확인 후 입력하세요."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else if( !this.fnCCSave() )
        	{
        		var param = {id : "pAlertNoti", msg : "통보매체를 선택하세요."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else if( Ex.isEmpty( notiUser ) || Ex.isUndefined( notiUser ) )
        	{
        		var param = {id : "pAlertNoti", msg : "담당자가 설정되지 않았습니다."};
        		Ex.core.alert(this, param);
        		return false;
        	}


        	//발송일자 체크 값 저장
        	if( this.dsData.getColumn(0,'SND_GAP_TYPE') != 'TERM_M' )
        	{
        		this.dsData.setColumn(0,'SND_DATE','');

        	}
        	else
        	{
        		this.divContents.form.chkDay.value = '';
        	}
        	this.fnchkDaySave();

        	return true;
        }

        this.fnCCSave = function(){
        	var rtn = false;
        	for (var i = 0; i < this.dsData.colcount; i++) {
        		if(this.dsData.getColID(i).indexOf("CC_") > -1)
        		{
        			if (this.dsData.getColumn(0, this.dsData.getColID(i) ) == 'Y')
        			{
        				return true;
        			}
        		}
        	}
        	return rtn;
        }

        this.fnchkDaySave = function(){
        	var strValue = this.divContents.form.chkDay.value;
        	for(var i = 0; i< this.dsSendDate.rowcount ; i++ )
        	{
        		sndDay = this.dsSendDate.getColumn(i,'CMM_CD');
          		if( !Ex.isEmpty(strValue) && strValue.includes(sndDay) )
          			this.dsData.setColumn(0,"DAY_"+sndDay,'Y');
         		else
         			this.dsData.setColumn(0,"DAY_"+sndDay,'N');
        	}
        }

        this.fnDayChk = function(){
        	var strValue = '';
        	for(var i = 0; i< this.dsSendDate.rowcount ; i++ )
        	{
        		sndDay = this.dsSendDate.getColumn(i,'CMM_CD');
          		if( this.dsData.getColumn(0,"DAY_"+sndDay) == 'Y')
        		{
        			strValue = strValue+ "," + sndDay;
        		}
        	}

        	this.divContents.form.chkDay.value = strValue.substring(1,strValue.length) ;
        }

        this.timeChk = function(sndDate)
        {
        	if(Ex.isEmpty(sndDate) ) return false;

            var values = sndDate.split(',');
        	trace("[this.timeChk] values : " +values )
            for (var i = 0; i < values.length; i++) {
                var num = parseInt(values[i], 10);
                if (num > 25 || num < 1)
        			return false;
            }
            return true;
        }

        this.fnSwitch = function(newvalue)
        {
        	if(Ex.isEmpty(newvalue)) return;
        	switch (newvalue)
        		{
        			case "TERM_D":
        				this.divContents.form.chkDay.set_visible(true);
        				this.divContents.form.chkDay.set_value('MON,TUE,WED,THU,FRI,SAT,SUN');
        				this.divContents.form.chkDay.set_enable(false);
        				this.divContents.form.divDay.set_visible(false);
        				break;
        			case "TERM_W":
        				this.divContents.form.chkDay.set_visible(true);
        				this.divContents.form.chkDay.set_enable(true);
        				this.divContents.form.divDay.set_visible(false);
        				this.fnDayChk();
        				break;
        			case "TERM_M":
        				this.divContents.form.chkDay.set_visible(false);
        				this.divContents.form.divDay.set_visible(true);
        				break;

        			default:
        				this.divContents.form.chkDay.set_visible(false);
        				this.divContents.form.divDay.set_visible(false);
        				break;
        		}
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        	if(e.columnid == 'SND_STIME')
        	{
        		if( nexacro.toNumber(e.newvalue) > 24 )
        		{
        			this.divContents.form.edtNotiTimeH.setFocus();
        			var param = {
        					 msg	: "24시간 기준으로 입력하세요. "
        					, msgtype : "W"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        			Ex.core.confirm(this, param);

        		}
        	}
        	else if(e.columnid == 'SND_GAP_TYPE')
        	{
        		this.fnSwitch(e.newvalue);
        	}
        }

        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{

        		case "btnAdd" :

        			Ex.core.popup(
        				this,
        				'selUserPop',
        				"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        				{
        					title		: '수신자 선택',
        					pSelType	: 'M',
        					pCheckDs	: this.dsUser,
        					pCheckCol	: 'USER_ID',
        					pUserType	: '1' 		//직원
        				},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=900,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
        			);

        			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsUser);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSave" :		// 저장
        			if( !Ex.util.isUpdated(this.dsData) && !Ex.util.isUpdated(this.dsUser) )
        			{
        				var param = {
        						id : "alert"
        					  , msg : "수정된 내용이 없습니다"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.alert(this, param);
        				break;
        			}

        			if(this.fnCheckValidate())
        			{
        				var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}

        			break;
        	}
        }

        // 검색 팝업 버튼들 onclick
        this.fnCommbtnPopOnclick = function(obj,e)
        {
        	var popId	= '';
        	var url		= '';
        	var oParam	= {};

        	switch(obj.name)
        	{
        		case "btnSelUser" :	// 사용자
        			popId	= 'selUserPop';
        			url		= 'fomm::FOMM0000_P01.xfdl';
        			oParam	= {
        				title	: Ex.core.word('담당자') + ' ' + Ex.core.word('선택')
        			};
        			break;
        	}

        	if(Ex.isEmpty(url))	return;

        	Ex.core.popup(
        		this,
        		popId,
        		url,           		// <--- 팝업창 오픈 Url
        		oParam,
        		"autosize"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcNotiDate.addEventHandler("onclick",this.stcNotiDate_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static06_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.divContent_Static00_01_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static06_00_onclick,this);
            this.Static03.addEventHandler("onclick",this.divDown_Static13_onclick,this);
            this.stcNotiTitle.addEventHandler("onclick",this.Static13_onclick,this);
            this.stcNotiManager.addEventHandler("onclick",this.Div00_00_stcNotiDay_onclick,this);
            this.stcNotiUrl.addEventHandler("onclick",this.Div00_00_stcNotiDay_onclick,this);
            this.divContents.form.chkDay.addEventHandler("onitemchanged",this.fnchkDaySave,this);
            this.divContents.form.rdoNotiYN.addEventHandler("onitemchanged",this.divContent_rdoNotiYN_onitemchanged,this);
            this.divContents.form.chkNoti04.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.divContents.form.edtNotiUrl.addEventHandler("onchanged",this.divNotiTime00_edtNotiTimeH_onchanged,this);
            this.divRcpt.form.divMbrGrdBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRcpt.form.divMbrGrdBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRcpt.form.grdRcptUser.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divRcpt.form.grdRcptUser.addEventHandler("onexpanddown",this.grdSrMaPrjMbr_onexpanddown,this);
            this.divRcpt.form.grdRcptUser.addEventHandler("onkeydown",this.grdSrMaPrjMbr_onkeydown,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsUser.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0500_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
