(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0510_P01");
            this.set_titletext("통보배치관리상세 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PAGE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DETAIL_PAGE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUse", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommScheduleJobMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"EXEC_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"JAVA_SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QUERY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"HOLIDAY_SEND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRON_EXPR_SEC\" type=\"STRING\" size=\"256\"/><Column id=\"CRON_EXPR_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"CRON_EXPR_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"CRON_EXPR_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CRON_EXPR_MON\" type=\"STRING\" size=\"256\"/><Column id=\"CRON_EXPR_DOW\" type=\"STRING\" size=\"256\"/><Column id=\"CRON_EXPR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECT_EXEC_DTIME1\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECT_EXEC_DTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECT_EXEC_DTIME3\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECT_EXEC_DTIME4\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECT_EXEC_DTIME5\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECT_EXEC_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_04_00",null,"10","20",null,"0","50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","0","20",null,null,"60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","0",null,null,"20","0","60",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","20","20",null,null,"20","Static00_03_00:0",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("StaticBg","369.00","330",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","369.00","297",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","99",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","33",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("알림 이름");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcRegUserInfo","49.43%","0","140","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcUseYn","0","33","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcSendTypeCd","49.43%","33","140","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_text("통보매체");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcCronExpr","0","132","130","232",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("스케쥴링 설정\r\n(CRON식 작성)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","stcCronExpr:239.00","132",null,"166","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01","129.00","165","241","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","129.00","198","241","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","129.00","231","241","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","129.00","264","241","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","129.00","297","241","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","129.00","330",null,"34","680",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stc00","stcCronExpr:5.00","170","75","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_text("초(0~59) :");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stc00_00","135.00","stc00:9","75","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("18");
            obj.set_text("분(0~59) :");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","135.00","stc00_00:9","75","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("21");
            obj.set_text("시(0~24, *) :");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00","135.00","stc00_00_00:9","75","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("24");
            obj.set_text("일(1~31, *) :");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00_00","135.00","stc00_00_00_00:9","75","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("27");
            obj.set_text("월(1~12, *) :");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00_00_00","135.00","stc00_00_00_00_00:9","75","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("30");
            obj.set_text("요일(0~6, ?) :");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtCronExprSec","stc00:5.00","170","150","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("스케쥴링 설정(초);NULL");
            obj.set_inputtype("alpha,digit,symbol,sign");
            obj.set_inputmode("upper");
            obj.set_inputfilter("space,dot");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtCronExprMin","215.00","203","150","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("스케쥴링 설정(분);NULL");
            obj.set_inputtype("alpha,digit,symbol,sign");
            obj.set_inputmode("upper");
            obj.set_inputfilter("space,dot");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtCronExprHour","215.00","edtCronExprMin:9","150","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("22");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("스케쥴링 설정(시);NULL");
            obj.set_inputtype("alpha,digit,symbol,sign");
            obj.set_inputmode("upper");
            obj.set_inputfilter("space,dot");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtCronExprDay","215.00","edtCronExprHour:9","150","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("25");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("스케쥴링 설정(일);NULL");
            obj.set_inputtype("alpha,digit,symbol,sign");
            obj.set_inputmode("upper");
            obj.set_inputfilter("space,dot");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtCronExprMon","215.00","edtCronExprDay:9","150","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("28");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("스케쥴링 설정(월);NULL");
            obj.set_inputtype("alpha,digit,symbol,sign");
            obj.set_inputmode("upper");
            obj.set_inputfilter("space,dot");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtCronExprDow","215.00","edtCronExprMon:9","150","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("31");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("스케쥴링 설정(요일);NULL");
            obj.set_inputtype("alpha,digit,symbol,sign");
            obj.set_inputmode("upper");
            obj.set_inputfilter("space,dot");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stc01","Static01_01:10.00","145","299","130",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("33");
            obj.set_text("도움말 기호\r\n\r\n- : 범위\r\n* : 어떤 값이나\r\n/ : 스텝\r\n, : 여러 값\r\n? : 미지정, 일/요일 중 한 군데는 ?로 표시");
            obj.set_verticalAlign("top");
            obj.set_font("bold 14px/normal \"KoPubL\"");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcExpectExecDtime","Static01_01_00_00_00_00_00:-1.00","297","130","67",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("35");
            obj.set_text("예상 실행 시각\r\n     (TOP 5)");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtExpectExecDtime1","stcExpectExecDtime:5.00","302","177","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("36");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("skipComp").set("Y");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtExpectExecDtime2","edtExpectExecDtime1:5.00","302","177","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("37");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("skipComp").set("Y");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtExpectExecDtime3","edtExpectExecDtime2:5.00","302",null,"24","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("38");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("skipComp").set("Y");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtExpectExecDtime4","504.00","335","177","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("40");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("skipComp").set("Y");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtExpectExecDtime5","686.00","335","177","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("41");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("skipComp").set("Y");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","stcUseYn:5.00","38",null,"24","stcSendTypeCd:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsUse");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_validationGroup("input01");
            obj.set_validation("사용여부;NULL");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcContDesc","0","stcCronExpr:-1","130",null,null,"0",null,null,null,null,this.divContents.form);
            obj.set_taborder("43");
            obj.set_text("알림 내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:5.00","5",null,"24","stcRegUserInfo:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("알림이름;NULL");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcRegUserInfoI","stcRegUserInfo:5.00","5",null,"20","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcJavaSvcNm","520.00","99","140","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("55");
            obj.set_text("실행 JAVA 서비스명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcExecGubun","0","99","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("59");
            obj.set_text("실행구분");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("StaticBg00","129","StaticBg:-1",null,null,"0","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","129.00","132","241","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnClear","320.00","137",null,"24","Static01_00_00_00:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            obj.set_text("CLEAR");
            obj.set_tooltiptext("입력된 Cron표현식 초기화");
            obj.set_cursor("pointer");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnCheckCron","271.00","137",null,"24","btnClear:2",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("44");
            obj.set_text("CHECK");
            obj.set_tooltiptext("Cron식 유효성 체크");
            obj.set_cursor("pointer");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtCronExpr","stcCronExpr:5.00","137",null,"24","btnCheckCron:2",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("스케쥴링 설정(초);NULL");
            obj.set_inputtype("alpha,digit,symbol,sign,space,comma");
            obj.set_inputmode("upper");
            obj.set_inputfilter("dot");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnTest","76.00","5","50","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("45");
            obj.set_text("btn00");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","0","66",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcDateTermUseYn","0","66","130","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("47");
            obj.set_text("알림기간설정여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcSendTerm","520.00","66","140","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("49");
            obj.set_text("알림설정기간");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcHolidaySendYn","27.5%","66","95","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("61");
            obj.set_text("휴일실행여부");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("rdoDateTermUseYn","stcDateTermUseYn:5.00","71",null,"24","stcHolidaySendYn:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("48");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_validationGroup("input01");
            obj.set_validation("휴일실행여부;NULL");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calStrDate","stcSendTerm:5","71","110","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_initvalueid("알림설정기간(시작일);DATETIME:YYYYMMDD");
            obj.set_taborder("50");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_enable("false");
            obj.set_text("    -  -   ");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("mskStrTime","calStrDate:2","71","65","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("51");
            obj.set_format("##:##");
            obj.set_textAlign("center");
            obj.set_type("string");
            obj.set_validation("알림설정기간(시작시간);DATETIME:HHMI");
            obj.set_validationGroup("input01");
            obj.set_cssclass("msk_WF_normal");
            obj.set_enable("false");
            obj.set_text("__:__");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("st00","mskStrTime:3","71","20","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("52");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","st00:3","71","110","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("알림설정기간(종료일);DATETIME:YYYYMMDD");
            obj.set_enable("false");
            obj.set_text("    -  -   ");
            this.divContents.addChild(obj.name, obj);

            obj = new MaskEdit("mskEndTime","calEndDate:2","71","65","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("54");
            obj.set_format("##:##");
            obj.set_validation("알림설정기간(종료시간);DATETIME:HHMI");
            obj.set_cssclass("msk_WF_normal");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_validationGroup("input01");
            obj.set_enable("false");
            obj.set_text("__:__");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtJavaSvcNm","stcJavaSvcNm:5","104",null,"24","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("56");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("실행 JAVA 서비스명;NULL");
            obj.set_inputtype("alpha,symbol,digit,dot");
            obj.set_inputfilter("sign,space,comma");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkSetSendTypeCd","stcSendTypeCd:5","38",null,"24","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("57");
            obj.set_innerdataset("dsSendTypeCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_direction("horizontal");
            obj.set_cssclass("chk_WF_normal");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBatchStatusNm",null,"38","60","24","925",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("58");
            obj.set_text(" <fc v=\'green\'>●</fc> 작동중");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_border("1px solid darkgray");
            obj.set_textAlign("center");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("rdoExecGubun","stcExecGubun:5","105",null,"24","stcJavaSvcNm:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("60");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_validationGroup("input01");
            obj.set_validation("실행구분;NULL");
            var divContents_form_rdoExecGubun_innerdataset = new nexacro.NormalDataset("divContents_form_rdoExecGubun_innerdataset", obj);
            divContents_form_rdoExecGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">JAVA 서비스 실행</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">QUERY</Col></Row></Rows>");
            obj.set_innerdataset(divContents_form_rdoExecGubun_innerdataset);
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Radio("rdoHolidaySendYn","stcHolidaySendYn:5","72",null,"24","stcSendTerm:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("62");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_validationGroup("input01");
            obj.set_validation("휴일실행여부;NULL");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnQuery","stcJavaSvcNm:5.00","104","130","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("63");
            obj.set_text("QUERY 작성/편집");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnHist","390","38",null,"24","stcSendTypeCd:5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("64");
            obj.set_text("스케쥴러 실행 이력");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_cursor("pointer");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnDelete:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_cursor("pointer");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("70");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_cursor("pointer");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1090,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divContents.form.edtCronExprSec","value","dsFommScheduleJobMt","CRON_EXPR_SEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.edtTitle","value","dsFommScheduleJobMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.rdoUseYn","value","dsFommScheduleJobMt","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContents.form.edtExpectExecDtime1","value","dsFommScheduleJobMt","EXPECT_EXEC_DTIME1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContents.form.edtExpectExecDtime2","value","dsFommScheduleJobMt","EXPECT_EXEC_DTIME2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContents.form.edtExpectExecDtime3","value","dsFommScheduleJobMt","EXPECT_EXEC_DTIME3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContents.form.edtExpectExecDtime4","value","dsFommScheduleJobMt","EXPECT_EXEC_DTIME4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContents.form.edtExpectExecDtime5","value","dsFommScheduleJobMt","EXPECT_EXEC_DTIME5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContents.form.edtCronExprMin","value","dsFommScheduleJobMt","CRON_EXPR_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContents.form.edtCronExprHour","value","dsFommScheduleJobMt","CRON_EXPR_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divContents.form.edtCronExprDay","value","dsFommScheduleJobMt","CRON_EXPR_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divContents.form.edtCronExprMon","value","dsFommScheduleJobMt","CRON_EXPR_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divContents.form.edtCronExprDow","value","dsFommScheduleJobMt","CRON_EXPR_DOW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divContents.form.edtCronExpr","value","dsFommScheduleJobMt","CRON_EXPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divContents.form.stcRegUserInfoI","text","dsFommScheduleJobMt","REG_USER_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divContents.form.Static01_00_00_01","value","dsFommScheduleJobMt","HOLIDAY_SEND_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divContents.form.rdoDateTermUseYn","value","dsFommScheduleJobMt","DATE_TERM_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContents.form.stcSendTerm","value","dsFommScheduleJobMt","END_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.stcJavaSvcNm","value","dsFommScheduleJobMt","END_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.edtJavaSvcNm","value","dsFommScheduleJobMt","JAVA_SVC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.calStrDate","value","dsFommScheduleJobMt","STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.mskStrTime","value","dsFommScheduleJobMt","STR_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divContents.form.calEndDate","value","dsFommScheduleJobMt","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divContents.form.mskEndTime","value","dsFommScheduleJobMt","END_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divContents.form.chkSetSendTypeCd","value","dsFommScheduleJobMt","SEND_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divContents.form.rdoExecGubun","value","dsFommScheduleJobMt","EXEC_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.stcHolidaySendYn","value","dsFommScheduleJobMt","HOLIDAY_SEND_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divContents.form.rdoHolidaySendYn","value","dsFommScheduleJobMt","HOLIDAY_SEND_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0510_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0510_P01
        * 화면(명)		︰ 슬라이드알림 관리
        * 메뉴(경로)	︰ 관리자 > 통지관리 > 슬라이드알림 관리
        * 화면 설명	︰ SPP 공지사항 관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.25
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.25	 정보윤		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        //Cron 설정 컬럼
        this.divWebEditorObj;	//웹에디터 div객체를 설정할 변수
        this.orgExprCron = "";
        this.cronColNm = ["CRON_EXPR_SEC", "CRON_EXPR_MIN", "CRON_EXPR_HOUR", "CRON_EXPR_DAY", "CRON_EXPR_MON", "CRON_EXPR_DOW"];
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_oninit = function(obj,e)
        {
        	if(this.getOwnerFrame().pSendType == "1")			//슬라이드
        	{
        		//Div.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
        		this.divWebEditorObj = new Div("divWebEditor", 135, "StaticBg:5", null, null, 5, 5);
        		this.divContents.addChild("divWebEditor", this.divWebEditorObj);
        		this.divContents.form.rdoExecGubun.set_enable(false);
        		this.divWebEditorObj.set_async(false);
        		this.divWebEditorObj.set_url("comm::comWebEditor.xfdl");
        		this.divWebEditorObj.show();
        	}
        	else if(this.getOwnerFrame().pSendType == "2")
        	{
        		//Div.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
        		var textareaObj = new TextArea("txaContDesc", 135, "StaticBg:5", null, null, 5, 5);
        		textareaObj.set_taborder(99);
        		this.divContents.addChild("txaContDesc", textareaObj);

        		textareaObj.set_cssclass("txa_WF_normal");
        		textareaObj.set_validationGroup("input01");
        		textareaObj.set_validation(this.divContents.form.stcContDesc.text + ";NULL");
        		textareaObj.show();
        		var bindObj = new BindItem();
        		bindObj.init("itemContDesc", "divContents.form.txaContDesc", "value", "dsFommScheduleJobMt", "CONT_DESC");
        		this.addChild("itemContDesc", bindObj);
        	}
        };

        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pJOB_NO) )	this.dsCond.setColumn(0, "JOB_NO", this.getOwnerFrame().pJOB_NO);
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnCheckCronValidation = function()
        {
        	if( Ex.isEmpty(this.dsFommScheduleJobMt.getColumn(0, "CRON_EXPR")) )
        	{
        		var param = {
        			  id	: "noInputCronAlertI"										//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "[스케쥴링 설정] CRON표현식이 입력되지 않았습니다."	//메시지 내용
        			, arrparam : [""]													//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"														//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	// transaction
        	var sTranId = "selectCheckCronValidation";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0510P/checkCronValidation";			// 서비스명
            var sInDs = "dsCond=dsFommScheduleJobMt:A";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCheck=dsCheck";							// 서버에서 수신할 데이타셋
            var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0510P/select01";                    // 서비스명
            var sInDs = "dsCond=dsCond";							// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommScheduleJobMt=dsFommScheduleJobMt"; // 서버에서 수신할 데이타셋
            var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function(gubun)
        {
        	var sTranId = "";		                          							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID

        	if(gubun == "SAVE")			sTranId = "save01";
        	else if(gubun == "DELETE")
        	{
        		sTranId = "delete01";
        		this.dsFommScheduleJobMt.setColumn(0, "ROWFLAG", "D");
        	}

         	// transaction
        	var sService = "FOMM0510P/save01";                         					// 서비스명
            var sInDs = "dsFommScheduleJobMt=dsFommScheduleJobMt:A dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCond=dsCond dsFommScheduleJobMt=dsFommScheduleJobMt";		// 서버에서 수신할 데이타셋
            var sArg = "";                   											// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "selectCheckCronValidation" :
        			if(this.dsCheck.getColumn(0, "CHK_YN") == "Y")
        			{
        				this.orgExprCron = this.dsFommScheduleJobMt.getColumn(0, "CRON_EXPR");
        				this.divContents.form.btnCheckCron.set_enable(false);
        			}
        			else
        			{
        				var cronExpr = this.dsFommScheduleJobMt.getColumn(0, "CRON_EXPR") || '';
        				var param = {id : "inValidCronExprAlert", msg : "[" + cronExpr + "] CRON 표현식이\n유효하지 않습니다."};
        				Ex.core.error(this, param);
        				return;
        			}
        			break;

        		case "select01" :
        			this.setEditChkSetSendTypeCd();
        			this.divContents.form.stcBatchStatusNm.set_visible(false);

        			//alert("this.getOwnerFrame().pPopType : " + this.getOwnerFrame().pPopType);

        			if(this.getOwnerFrame().pPopType == "U")
        			{
        				this.divContents.form.btnHist.set_visible(true);
        				Ex.core.toast(this, "10002");

        				this.setExecProc(this.dsFommScheduleJobMt.getColumn(0, "EXEC_GUBUN"));
        				this.orgExprCron = this.dsFommScheduleJobMt.getColumn(0, "CRON_EXPR") ||'';
        				this.divContents.form.btnCheckCron.set_enable(false);
        				if(this.dsFommScheduleJobMt.rowcount == 0)
        				{
        					var param = {id : "noSearchDataAlert", msg : "알림 상세 내역을 조회할 수 없습니다."};
        					Ex.core.error(this, param);
        					return;
        				}
        				this.getStatusLabelVisible();

        				if(this.divWebEditorObj)
        				{
        					this.divContents.form["divWebEditor"].form.setContent(this.dsFommScheduleJobMt.getColumn(0, "CONT_DESC") || '');
        				}
        				this.divContents.form.edtCronExpr.setFocus();
        			}
        			else
        			{
        				this.divContents.form.btnHist.set_visible(false);
        				this.divContents.form.btnCheckCron.set_enable(true);
        				this.dsFommScheduleJobMt.clearData();
        				this.dsFommScheduleJobMt.setAddRow();
        				this.dsFommScheduleJobMt.setColumn(0, "DATE_TERM_USE_YN", "Y");
        				this.dsFommScheduleJobMt.setColumn(0, "REG_USER_INFO", Ex.util.getSession('gvUserNm') + "(" + Ex.util.getSession('gvUserId') + ")");

        				this.dsFommScheduleJobMt.setColumn(0, "EXEC_GUBUN", "01");
        				this.setExecProc("01");

        				if(this.getOwnerFrame().pSendType == "1")
        				{
        					this.divContents.form.rdoExecGubun.set_enable(false);
        					this.dsFommScheduleJobMt.setColumn(0, "SEND_TYPE_CD", "SLIDE");
        					this.dsFommScheduleJobMt.setColumn(0, "JAVA_SVC_NM", "com/FommScheduleCommon/sendWebsocketDefaultService");
        				}

        				this.dsFommScheduleJobMt.setColumn(0, "USE_YN", "Y");
        				this.dsFommScheduleJobMt.setColumn(0, "HOLIDAY_SEND_YN", "N");

        				 var dTime = new Date();
        				 dTime.setHours(dTime.getHours() + 1);
        				 //trace("dTime : " + dTime);
        				 var dTimeStr = Ex.util.getMaskFormatString(dTime, 'yyyyMMddHHmmss');

        				 //trace("STR_DATE : " + dTimeStr.substr(0, 8));
        				 this.dsFommScheduleJobMt.setColumn(0, "STR_DT", dTimeStr.substr(0, 8));
        				 var hour = dTimeStr.substr(8, 2);
        				 //trace("STR_TIME : " + hour);
        				 this.dsFommScheduleJobMt.setColumn(0, "STR_TIME", hour + "00");
        				this.divContents.form.edtTitle.setFocus();
        			}
        			this.setDateTermUseYn();
        			break;

        		case "save01" :
        			this.divContents.form.btnHist.set_visible(true);
        			this.getOwnerFrame().saveYn	= "Y";
        			Ex.core.toast(this, "10004");
        			this.getOwnerFrame().pJOB_NO = this.dsCond.getColumn(0, "JOB_NO");
        			this.getOwnerFrame().pPopType = "U";
        			this.divContents.form.stcBatchStatusNm.set_visible(false);
        			this.getStatusLabelVisible();
        			this.orgExprCron = this.dsFommScheduleJobMt.getColumn(0, "CRON_EXPR") ||'';
        			if(this.divWebEditorObj)
        			{
        				this.divContents.form["divWebEditor"].form.setContent(this.dsFommScheduleJobMt.getColumn(0, "CONT_DESC") || '');
        				//this.divWebEditorObj.form.setContent(this.dsFommScheduleJobMt.getColumn(0, "CONT_DESC"), false);
        			}
        			this.setDateTermUseYn();
        			break;

        		case "delete01" :
        			this.getOwnerFrame().saveYn	= "Y";
        			Ex.core.pclose(this, this.getOwnerFrame().saveYn||'N');
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch (pID)
        	{
        		case "queryDescPop" :
        			if( Ex.isEmpty(varValue) || varValue == "NO_CHANGE") return;
        			this.dsFommScheduleJobMt.setColumn(this.dsFommScheduleJobMt.rowposition, "QUERY_DESC", varValue);
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSave("SAVE");
        			break;

        		case "deleteConfirm" :
        			this.fnSave("DELETE");
        			break;

        // 		case "saveAlert" :
        // 			Ex.core.pclose(this, 'save');
        // 			break;

        		case "noSearchDataAlert" :
        			Ex.core.pclose(this, 'save');
        			break;

        		case "noInputCronAlertI" :
        			this.divContents.form.edtCronExpr.setFocus();
        			break;

        		case "inValidCronExprAlert" :
        			this.divContents.form.btnCheckCron.set_enable(true);
        			break;

        		case "pStrDtCheckAlert" :
        			this.divContents.form.calStrDt.setFocus();
        			break;

        		case "pStrTimeCheckAlert" :
        			this.divContents.form.mskStrTime.setFocus();
        			break;

        		case "pEndDtCheckAlert" :
        			this.divContents.form.calEndDt.setFocus();
        			break;

        		case "pEndTimeCheckAlert" :
        			this.divContents.form.mskEndTime.setFocus();
        			break;

        		case "essContDescAlertI" :
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();		// 공통코드 조회

        	if(this.getOwnerFrame().pSendType == "1")
        	{
        		this.divWebEditorObj.form.initCreate();
        	}
        	this.fnSearch();
        }

        this.fnGetCmmCd = function()
        {
        	var sendTypeFilter = "";

        	if(this.getOwnerFrame().pSendType == "1")
        	{
        		sendTypeFilter = "CMM_CD=='SLIDE'";
        	}
        	else
        	{
        		this.divContents.form.chkSetSendTypeCd.set_enable(true);
        		sendTypeFilter = "CMM_CD!='SLIDE'";
        	}
        	var oParam = {
        		upCmmCd : [	'USE_CD',	'YN_CD2',	'SEND_TYPE_CD'		]	// 조회할 상위코드
        		,codeDiv: [	'CMM_CD',	'CMM_CD',	'BASIS_CD'			]	// 조회할 코드의 업무구분
        		,optStr	: [	'',			'',			''					]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: [	'Y',		'Y',		'Y'					]	// 사용여부
        		,filter	: [	'',			'',			sendTypeFilter		]	// filterStr
        		,objDs	: [	this.dsUse,	this.dsYn,	this.dsSendTypeCd	]	// copy dataset
        	};
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util
        };

        this.fnCheckValidate = function()
        {
        	trace("this.fnCheckValidate()~~~~~~~~~~~~~~");
        	var rtn = Ex.util.checkValidate(this.divContents, "input01");
        	if(!rtn) return false;

        	if( Ex.isEmpty(this.dsFommScheduleJobMt.getColumn(0, "SEND_TYPE_CD")) )
        	{
        		var param = {
        			  id	: "essSendTypeCdAlertI"							//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "11001"										//메시지 내용
        			, arrparam : [this.divContents.form.stcSendTypeCd.text]	//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if( this.dsFommScheduleJobMt.getColumn(0, "EXEC_GUBUN") == "02" )
        	{
        		if( Ex.isEmpty(this.dsFommScheduleJobMt.getColumn(0, "QUERY_DESC")) )
        		{
        			var param = {
        				  id	: "essQueryDescAlertI"							//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "실행 QUERY가 작성되지 않았습니다."		//메시지 내용
        				, arrparam : [this.divContents.form.stcContDesc.text]	//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	if( Ex.isEmpty(this.dsFommScheduleJobMt.getColumn(0, "CONT_DESC")) )
        	{
        		var param = {
        			  id	: "essContDescAlertI"							//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "11001"										//메시지 내용
        			, arrparam : [this.divContents.form.stcContDesc.text]	//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	var dateTermUseYn = this.dsFommScheduleJobMt.getColumn(0,"DATE_TERM_USE_YN");
        	var strDt = this.dsFommScheduleJobMt.getColumn(0,"STR_DT");
        	var strTime = this.dsFommScheduleJobMt.getColumn(0,"STR_TIME");
        	var endDt = this.dsFommScheduleJobMt.getColumn(0,"END_DT");
        	var endTime = this.dsFommScheduleJobMt.getColumn(0,"END_TIME");

        	if(dateTermUseYn == "Y")
        	{
        		if( Ex.isEmpty(strDt) && Ex.isEmpty(strTime) && Ex.isEmpty(endDt) && Ex.isEmpty(endTime) )
        		{
        			var param = {id : "pStrTimeCheckAlert", msg : "[알림설정기간] 알람기간설정여부가 \"Y\"인 경우 [알람설정기간] 시작/종료 기간 중 한가지는 반드시 지정해야 합니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		if( !Ex.isEmpty(strDt) && Ex.isEmpty(strTime) )
        		{
        			var param = {id : "pStrTimeCheckAlert", msg : "[알림설정기간] 시작일자 입력시 시작일시도 함께 입력해야 합니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        		else if( Ex.isEmpty(strDt) && !Ex.isEmpty(strTime) )
        		{
        			var param = {id : "pStrDtCheckAlert", msg : "[알림설정기간] 시작일시 입력시 시작일자도 함께 입력해야 합니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		if( !Ex.isEmpty(endDt) && Ex.isEmpty(endTime) )
        		{
        			var param = {id : "pEndTimeCheckAlert", msg : "[알림설정기간] 종료일자 입력시 종료일시도 함께 입력해야 합니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        		else if( Ex.isEmpty(endDt) && !Ex.isEmpty(endTime) )
        		{
        			var param = {id : "pEndDtCheckAlert", msg : "[알림설정기간] 종료일시 입력시 종료일자도 함께 입력해야 합니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		var strDtTime = nexacro.toNumber(strDt + strTime + "00");
        		var endDtTime = nexacro.toNumber(endDt + endTime + "00");

        		if(strDtTime > endDtTime)
        		{
        			var param = {id : "pAlertNoti", msg : "[알림설정기간] 시작일시는 종료일시보다 이후일 수 없습니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	if(this.divContents.form.btnCheckCron.enable)
        	{
        		var param = {
        			  id	: "noCheckCropExprAlertI"																			//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "[스케쥴링 설정] CHECK 버튼을 클릭하여\nCRON 표현식 유효성 체크 후 저장이 가능합니다."	//메시지 내용
        			, arrparam : []																								//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"																								//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	return true;
        }

        //배치 상태를 라벨에 표기한다.
        this.getStatusLabelVisible = function()
        {
        	this.divContents.form.stcBatchStatusNm.set_visible(true);

        	if(this.dsFommScheduleJobMt.getColumn(0, "STATUS") == "1")
        	{
        		this.divContents.form.stcBatchStatusNm.set_text("<fc v='green'>●</fc> 작동중");
        	}
        	else
        	{
        		this.divContents.form.stcBatchStatusNm.set_text("<fc v='red'>●</fc> 중단");
        	}
        }

        //알림구분에 따른 통보매체 입력폼 제어 이벤트
        this.setEditChkSetSendTypeCd = function()
        {
        	this.divContents.form.chkSetSendTypeCd.set_readonly(this.getOwnerFrame().pSendType == "SLIDE" ? true : false);
        }

        //알림기간설정여부 값 변경에 대한 처리 이벤트
        this.setDateTermUseYn = function(val)
        {
        	if( Ex.isEmpty(val) )	val = this.dsFommScheduleJobMt.getColumn(0, "DATE_TERM_USE_YN");

        	this.divContents.form.calStrDate.set_enable(val == "Y" ? true : false);
        	this.divContents.form.mskStrTime.set_enable(val == "Y" ? true : false);
        	this.divContents.form.calEndDate.set_enable(val == "Y" ? true : false);
        	this.divContents.form.mskEndTime.set_enable(val == "Y" ? true : false);
        }

        this.setExecProc = function(val)
        {
        	if(val == "01")
        	{
        		this.divContents.form.edtJavaSvcNm.set_visible(true);
        		this.divContents.form.btnQuery.set_visible(false);
        		this.divContents.form.stcJavaSvcNm.set_text("실행 JAVA 서비스명");
        		this.divContents.form.stcJavaSvcNm.set_cssclass("sta_WF_inputTitle_E");
        		this.divContents.form.edtJavaSvcNm.set_validation("실행 JAVA 서비스명;NULL");
        	}
        	else if(val == "02")
        	{
        		this.divContents.form.edtJavaSvcNm.set_visible(false);
        		this.divContents.form.btnQuery.set_visible(true);
        		this.divContents.form.stcJavaSvcNm.set_text("실행QUERY");
        		this.divContents.form.stcJavaSvcNm.set_cssclass("sta_WF_inputTitle");
        		this.divContents.form.edtJavaSvcNm.set_validation("");
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
        		case "btnTest" :
        			var sTranId = "test01";                          							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        			var sService = "FOMM0510P/test01";                         					// 서비스명
        			var sInDs = "dsFommScheduleJobMt=dsFommScheduleJobMt:A dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        			var sOutDs = "";           													// 서버에서 수신할 데이타셋
        			var sArg = "";                   											// 서버 @ParamVariable 인자와 맵핑됨
        			Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        			break;

        		case "btnCheckCron" :
        			this.fnCheckCronValidation();
        			break;

        		case "btnClear" :
        			this.dsFommScheduleJobMt.setColumn(0, "CRON_EXPR", undefined);
        			this.divContents.form.edtCronExpr.setFocus();
        			break;

        		case "btnSave" :		// 저장
        			if(this.dsFommScheduleJobMt.getColumn(0, "SEND_TYPE_CD") == "SLIDE")
        			{
        				var webConts = this.divWebEditorObj.form.getContent() || '';
        				this.dsFommScheduleJobMt.setColumn(0, "CONT_DESC", webConts);
        			}

        			var rtn = Ex.util.isUpdated(this.dsFommScheduleJobMt);
        			trace("btnSave isUpdated:" + rtn);

        			if( rtn )
        			{
        				if( this.fnCheckValidate() )
        				{
        					var param = {
        						  id : "saveConfirm"
        						, msg : "10003"
        						, arrparam : ['']
        						, msgtype : "I"
        					};
        					Ex.core.confirm(this, param);
        				}
        			}
        			break;

        		case 'btnDelete' :
        			var param = {
        				  id : "deleteConfirm"
        				, msg : "10008"
        				, arrparam : ['삭제']
        				, msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnQuery" :
        			Ex.core.popup(
        				this,								// <--- 팝업 실행 스코프
        				"queryDescPop",						// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::comTextareaPop.xfdl",		// <--- 팝업창 오픈 Url
        				{
        					pRefDesc		: true,
        					title			: "QUERY 편집",
        					isHeightChange	: false,
        					isEss			: true,
        					subTitle		: "통지 대상자 조회 QUERY 편집 (※알림 전송할 사용자 사번 컬럼 Alias명은 [USER_ID]로 지정해야 합니다.)",
        					pMsg			: this.dsFommScheduleJobMt.getColumn(0, "QUERY_DESC"),
        					pBtnConfUseYn	: "Y"	//적용버튼 사용여부
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        				"width=1500,height=817"
        			);
        			return false;
        			break;

        		case "btnHist" :
        			Ex.core.popup(
        				this,								// <--- 팝업 실행 스코프
        				"histPop",							// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0510_P02.xfdl",			// <--- 팝업창 오픈 Url
        				{
        					title	: "스케쥴러 실행 이력",
        					pJobNo	: this.dsCond.getColumn(0, "JOB_NO"),
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			return false;
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this, this.getOwnerFrame().saveYn||'N');
        			break;
        	}
        }

        this.FOMM0510_P01_onrbuttonup = function(obj,e)
        {
        	if(e.ctrlkey && e.shiftkey)
        	{
        		this.divContents.form.btnTest.set_visible(!this.divContents.form.btnTest.visible);
        	}
        };

        this.rdoOnItemChanged = function(obj,e)
        {
        	this.setExecProc(e.postvalue);
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	trace("this.dsOnColumnChanged() START e.columnid + " + e.columnid + " e.oldvalue : " + e.oldvalue + " e.newvalue : " + e.newvalue);

        	if(e.columnid == "CRON_EXPR_SEC" || e.columnid == "CRON_EXPR_MIN" || e.columnid == "CRON_EXPR_HOUR" ||
        	   e.columnid == "CRON_EXPR_DAY" || e.columnid == "CRON_EXPR_MON" || e.columnid == "CRON_EXPR_DOW")
        	{
        		var cronValArr = new Array();

        		for(var i=0; i<this.cronColNm.length; i++)
        		{
        			if(e.columnid == this.cronColNm[i])
        			{
        				cronValArr[i] = e.newvalue || '';
        			}
        			else
        			{
        				cronValArr[i] = obj.getColumn(0, this.cronColNm[i]) || '';
        			}
        		}

        		var cronExpr = "";

        		for(var i=0; i<this.cronColNm.length; i++)
        		{
        			cronExpr += (i==0 ? "" : " ") + cronValArr[i];
        		}
        		trace("cronExpr:[" + cronExpr + "]");
        		obj.setColumn(0, "CRON_EXPR", cronExpr);

        		if(this.orgExprCron != cronExpr)
        		{
        			this.divContents.form.btnCheckCron.set_enable(true);
        		}
        		else
        		{
        			this.divContents.form.btnCheckCron.set_enable(false);
        		}
        	}
        	else if(e.columnid == "CRON_EXPR")
        	{
        		trace("[CRON_EXPR COLUMN] orgVal:[" + this.orgExprCron + "] e.newvalue:[" + e.newvalue + "]");

        		if(this.orgExprCron != e.newvalue)
        		{
        			this.divContents.form.btnCheckCron.set_enable(true);
        		}
        		else
        		{
        			this.divContents.form.btnCheckCron.set_enable(false);
        		}

        		for(var i=0; i<this.cronColNm.length; i++)
        		{
        			obj.setColumn(0, this.cronColNm[i], "");
        		}

        		var cronExpr = (e.newvalue || '').split(" ");

        		trace("cronExpr.length==========>" + cronExpr.length);

        		for(var i=0; i<cronExpr.length; i++)
        		{
        			trace("i=" + i + " expr:[" + (cronExpr[i] || '') + "]");
        			obj.setColumn(0, this.cronColNm[i], cronExpr[i] || '');
        		}
        	}
        	else if(e.columnid == "DATE_TERM_USE_YN")
        	{
        		this.setDateTermUseYn(e.newvalue);
        	}
        	else if(e.columnid == "EXEC_GUBUN")
        	{
        		this.setExecProc(e.newvalue);
        	}
        	obj.setUpdateRow(e);
        	trace("this.dsOnColumnChanged() END");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onrbuttonup",this.FOMM0510_P01_onrbuttonup,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.Static00_01.addEventHandler("onclick",this.divContent_Static00_01_onclick,this);
            this.divContents.form.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.btnCheckCron.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.btnTest.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.calStrDate.addEventHandler("onkeydown",this.Common_onkeydown,this);
            this.divContents.form.calEndDate.addEventHandler("onkeydown",this.Common_onkeydown,this);
            this.divContents.form.rdoExecGubun.addEventHandler("onitemchanged",this.rdoOnItemChanged,this);
            this.divContents.form.btnQuery.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContents.form.btnHist.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommScheduleJobMt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsCheck.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0510_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
