(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0000_P02");
            this.set_visible("true");
            this.set_titletext("나의정보관리");
            this.getSetter("scrollbars").set("autoboth");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,553);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"TELNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"PW_INIT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PW_EXP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EXPIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HDOF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RTRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JBC_JNM\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NH_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FLAG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_EMAIL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_MEMO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_ORG_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_NEW_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TALK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWD_INCORRECT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ABSNCE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BUJAE_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"BUJAE_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"BUJAE_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"DAEJIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAEJIC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JBC_POSI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLangCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendYn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJbcPosi", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJbc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfoChck", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"string\" size=\"9\"/><Column id=\"USER_NAME\" type=\"string\" size=\"100\"/><Column id=\"JBC_POSI_ID\" type=\"string\" size=\"4\"/><Column id=\"JBC_POSI\" type=\"string\" size=\"100\"/><Column id=\"HDOF_YN\" type=\"string\" size=\"1\"/><Column id=\"EMPMT_DT\" type=\"string\" size=\"8\"/><Column id=\"RTRM_DT\" type=\"string\" size=\"8\"/><Column id=\"INFO_DEPT_ID\" type=\"string\" size=\"6\"/><Column id=\"INFO_DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_ID\" type=\"string\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"ADDRESS_1\" type=\"string\" size=\"200\"/><Column id=\"ADDRESS_2\" type=\"string\" size=\"200\"/><Column id=\"CONTACT_PHONE\" type=\"string\" size=\"400\"/><Column id=\"NH_ACTIVE\" type=\"string\" size=\"3\"/><Column id=\"APNT_DT\" type=\"string\" size=\"100\"/><Column id=\"JBC_JID\" type=\"string\" size=\"4\"/><Column id=\"JBC_JNAME\" type=\"string\" size=\"30\"/><Column id=\"USER_CHN_DCD\" type=\"string\" size=\"100\"/><Column id=\"FC_DTY_CD\" type=\"string\" size=\"100\"/><Column id=\"FC_DTY_NM\" type=\"string\" size=\"200\"/><Column id=\"USE_ST_DT\" type=\"string\" size=\"8\"/><Column id=\"USE_ED_DT\" type=\"string\" size=\"8\"/><Column id=\"ACC_USE_YN\" type=\"string\" size=\"4\"/><Column id=\"CONTACT_MOBILE\" type=\"string\" size=\"80\"/><Column id=\"USER_EMAD\" type=\"string\" size=\"80\"/><Column id=\"CONTACT_OFFICE\" type=\"string\" size=\"20\"/><Column id=\"POSTCODE\" type=\"string\" size=\"7\"/><Column id=\"NH_GUBUN\" type=\"string\" size=\"1\"/><Column id=\"NH_STATUS\" type=\"string\" size=\"3\"/><Column id=\"BUJAE_YN\" type=\"string\" size=\"1\"/><Column id=\"BUJAE_STIME\" type=\"string\" size=\"14\"/><Column id=\"BUJAE_ETIME\" type=\"string\" size=\"14\"/><Column id=\"BUJAE_SAYU\" type=\"string\" size=\"30\"/><Column id=\"DAEJIC_ID\" type=\"string\" size=\"9\"/><Column id=\"DAEJIC_NM\" type=\"string\" size=\"20\"/><Column id=\"MY_CHR_ID1\" type=\"string\" size=\"9\"/><Column id=\"MY_CHR_NM1\" type=\"string\" size=\"20\"/><Column id=\"MY_CHR_ID2\" type=\"string\" size=\"9\"/><Column id=\"MY_CHR_NM2\" type=\"string\" size=\"20\"/><Column id=\"MY_MGR_ID\" type=\"string\" size=\"9\"/><Column id=\"MY_MGR_NM\" type=\"string\" size=\"20\"/><Column id=\"LAST_LOGIN_TIME\" type=\"string\" size=\"14\"/><Column id=\"NH_PASSWD\" type=\"string\" size=\"60\"/><Column id=\"REG_USER_ID\" type=\"string\" size=\"9\"/><Column id=\"REG_USER_NM\" type=\"string\" size=\"20\"/><Column id=\"REG_STIME\" type=\"string\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"string\" size=\"9\"/><Column id=\"LMOD_USER_NM\" type=\"string\" size=\"20\"/><Column id=\"SYSMODTIME\" type=\"string\" size=\"14\"/><Column id=\"USER_TYPE\" type=\"string\" size=\"20\"/><Column id=\"NH_JOBDESC\" type=\"string\" size=\"200\"/><Column id=\"NH_JOB_CD\" type=\"string\" size=\"10\"/><Column id=\"UPMU_NM\" type=\"string\" size=\"2000\"/><Column id=\"UP_DEPT_ID\" type=\"string\" size=\"10\"/><Column id=\"JBC_JNAME_ORG\" type=\"string\" size=\"30\"/><Column id=\"IN_FLAG\" type=\"string\" size=\"2\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAgencyInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_DUTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_STOP\" type=\"STRING\" size=\"256\"/><Column id=\"STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGENCY_RESN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgencyResnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItDeptYn", this);
            obj._setContents("<ColumnInfo><Column id=\"IT_DEPT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new VirtualFile("VirtualFile", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg07","20.00","120",null,"232","20",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg06","50%","219",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg03","50%","120",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","20","54",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","20","20","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","44",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserId","20","54","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("사번");
            this.addChild(obj.name, obj);

            obj = new Static("stcChangePwd","50.00%","54","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("비밀번호");
            this.addChild(obj.name, obj);

            obj = new Button("btnUserIdChk","385.00","59",null,"24","stcChangePwd:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("중복체크");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","stcUserId:5","59",null,"24","btnUserIdChk:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.set_validationGroup("group01");
            obj.set_validation("사번;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02","20","87",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("stcUserNm","20","87","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("성명");
            this.addChild(obj.name, obj);

            obj = new Static("stcDeptNm","50.00%","87","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("팀명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","stcUserNm:5","92",null,"24","stcDeptNm:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.set_validationGroup("group01");
            obj.set_validation("성명;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcJbcPosi","50%","120","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("직급");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJbcPosi","920","125",null,"24","-310",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_validation("직급;NULL");
            obj.set_innerdataset("dsJbcPosi");
            obj.set_codecolumn("JBC_POSI_ID");
            obj.set_datacolumn("JBC_POSI");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_readonly("true");
            obj.set_type("filterlike");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangePwd","stcChangePwd:5.00","59","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("비밀번호 변경/초기화");
            obj.set_cssclass("btn_WF_func");
            obj.set_textAlign("center");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg04","50%","153",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg05","50%","186",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","352",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle00","20.00","Static00_01_00_00:0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("부재정보(AD)");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","Static00_01_00_00:24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg08","20.00","406",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg09","20.00","439",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBujaeYn","20.00","406","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("부재여부");
            this.addChild(obj.name, obj);

            obj = new Static("stcBujaetm","20.00","439","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("부재기간");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserId00_00","50.00%","406","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("대직자");
            this.addChild(obj.name, obj);

            obj = new Static("stcBujaeSayu","50.00%","439","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("부재사유");
            this.addChild(obj.name, obj);

            obj = new Combo("cboAgencyResnCd","stcBujaeSayu:5.00","444","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsAgencyResnCd");
            obj.set_readonly("true");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoBujaeYn","stcBujaeYn:5.00","411",null,"24","stcUserId00_00:5",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_columncount("2");
            obj.set_rowcount("1");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBujaeStm","stcBujaetm:5.00","444","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.getSetter("validate").set("");
            obj.set_validationGroup("fvValiDaejic");
            obj.set_validation("대직시작일;NULL|DATETIME:YYYYMMDD");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.set_text("    -  -  ");
            this.addChild(obj.name, obj);

            obj = new Static("stcBujaetmTerm","calBujaeStm:2.00","444","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBujaeEtm","stcBujaetmTerm:2.00","444","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("divUser","stcUserId00_00:5.00","411",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcPhotoImg","20.00","120","130","232",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("사진이미지");
            this.addChild(obj.name, obj);

            obj = new Static("stcSignImg","101.11%","252","130","237",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("서명이미지");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnPhotoImgAdd","330.00","126","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnPhotoImgDelete","btnPhotoImgAdd:5.00","126","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","330.00","153","127","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("- size : 170*222px");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","330.00","175","127","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("- 용량 : 10MB 이하");
            this.addChild(obj.name, obj);

            obj = new Button("btnSignAdd","1270.00","257","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSignDelete","btnSignAdd:5.00","257","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","1270.00","284","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("- size : 170*227px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","1270.00","306","119","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("- 용량 : 600KB 이하");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNhPasswd","btnChangePwd:5","59",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_maxlength("15");
            obj.getSetter("validate").set("title:비밀번호,required:true,minlength:5");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            obj.set_password("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDept","stcDeptNm:5","92",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("fomm::FOMM0000_D03.xfdl");
            obj.getSetter("BTN_SEARCH_V").set("Y");
            obj.getSetter("BTN_CLEAR_V").set("Y");
            obj.getSetter("DEPT_CD_V").set("Y");
            obj.getSetter("READONLY").set("N");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcPhotoBg","stcPhotoImg:5.00","125","170","222",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Drop Files Here");
            obj.set_cssclass("sta_WF_fileDropBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcSignBg","stcSignImg:5.00","257","170","227",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Drop Files Here");
            obj.set_cssclass("sta_WF_fileDropBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPhotoImg","stcPhotoImg:5.00","125","170","222",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_opacity("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgSignImg","stcSignImg:5.00","257","170","227",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_opacity("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserEmad","450.00","219","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserEmad","stcUserEmad:5.00","224",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcContactMobile","50.00%","318","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("휴대폰");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg06_00","50.00%","252",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg06_00_00","50%","285",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcContactPhone","50.00%","252","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("내선번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edtContactPhone","stcContactPhone:5.00","257",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcJbc","50.00%","153","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("직명");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJbc","920","158",null,"24","-310",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_validation("직명;NULL");
            obj.set_innerdataset("dsJbc");
            obj.set_codecolumn("JBC_JID");
            obj.set_datacolumn("JBC_JNAME_ORG");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_readonly("true");
            obj.set_type("filterlike");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcJobDesc","50%","186","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("담당업무");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJobDesc","stcJobDesc:5.00","191",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserNm02_01_00","37.5em","285","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("발송여부");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSMS","585.00","290","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("문자(SMS)");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkMemo","chkSMS:0.00","290","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("쪽지(ITSM)");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkTalk","chkMemo:0.00em","290","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("메신저쪽지");
            obj.set_cssclass("chk_WF_normal");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskContactMobile","stcContactMobile:5","323","290","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("@@@-@@@@-@@@@");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAd",null,"372","95","24","20",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("대직관리 이동");
            obj.set_cssclass("btn_WF_func");
            this.addChild(obj.name, obj);

            obj = new Static("stcAdInfo","293","372",null,"24","btnAd:15",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("인사정보시스템 연계정보를 표시합니다. 대직 처리는 나의대직관리에서 진행하세요.");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJbcPosi","stcJbcPosi:5","125",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJbc","stcJbc:5","158",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","stcInfoTitle:0","20","431","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("※ 프로젝트 수행사는 팀명을 [프로젝트수행팀]으로 지정하세요");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUser
            obj = new Layout("default","",0,0,this.divUser.form,function(p){});
            this.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDept
            obj = new Layout("default","",0,0,this.divDept.form,function(p){});
            this.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",900,553,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edt_upmuNm","value","ds_userInfo","UPMU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtUserId","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserNm","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","stcJbcPosi","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboJbcPosi","value","dsFommUserMt","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","stcDeptNm","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","stcBg04","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboJbc","value","dsFommUserMt","ROLE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stcJbc","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","stcBg05","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","stcBg06","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","stcBg08","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","calBujaeStm","value","dsFommUserMt","BUJAE_STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","stcBujaetmTerm","value","dsCond","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divUser","value","dsCond","SVC_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","stcBg07","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDept","value","dsCond","SVC_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","rdoBujaeYn","value","dsFommUserMt","ABSNCE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtNhPasswd","value","dsFommUserMt","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","calBujaeEtm","value","dsFommUserMt","BUJAE_ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","chkSMS","value","dsFommUserMt","SEND_SMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","chkMemo","value","dsFommUserMt","SEND_MEMO_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","chkTalk","value","dsFommUserMt","SEND_TALK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtJobDesc","value","dsFommUserMt","UPMU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtContactPhone","value","dsFommUserMt","TELNUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtUserEmad","value","dsFommUserMt","EMAIL_ADR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","stcBg06_00","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","stcBg06_00_00","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","mskContactMobile","value","dsFommUserMt","MOBILE_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","cboAgencyResnCd","value","dsFommUserMt","BUJAE_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtJbcPosi","value","dsFommUserMt","POS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edtJbc","value","dsFommUserMt","ROLE_NM");
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
        this.registerScript("FOMM0000_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0000_P02
        * 화면(명)	︰ 나의 정보 관리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 기본 사용자 정보 관리 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.05.16
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        	작성자		이력
        *------------------------------------------------------------------
        * 2023.05.16	WEMB		최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	pPopType	: 팝업 타입; I/U/R
        	pUserId		: 사용자 사번
        ***********************************************************************************/


        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pPopType;
        this.pAdminYn;		// 관리자 호출여부
        this.USER_ID;

        this.IMG_GBN;		// 첨부 이미지 구분 : PHOTO / SIGN
        this.extWhiteList = ["png", "jpg", "jpeg", "bmp"];		// image file ext

        this.svcUrl;

        this.ID_CHK_FLAG = false;
        this.pEscYn;

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnSearchJbcPosi();		// 직급 목록 조회
        	this.fnCompInit();
        }

        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsCond.setColumn(0, "USER_ID",  this.USER_ID);
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	var sTranId = "select";							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommUserMt=dsFommUserMt";		// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
            //Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg, null, false, true, 2);
        }

        // 대직 조회
        this.fnSearch01 = function()
        {
        	return;
        	var sTranId = "select02";							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/selectAgency";			// 서비스명
            var sInDs = "dsCond=dsCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommAgencyInfo=dsData";		// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearchJbcPosi = function()
        {
        	var sTranId = "selectJbcPosiList";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "util/selectJbcPosiList";		// 서비스명
            var sInDs = "dsCond=dsCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsJbcPosi=dsJbcPosi";				// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearchJbc = function()
        {
        	var sTranId = "selectJbcList";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "util/selectJbcList";	// 서비스명
            var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsJbc=dsJbc";				// 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FOMM0000P/save01";						// 서비스명
        	var sInDs = "dsCond=dsCond dsFommUserMt=dsFommUserMt dsFommAgencyInfo=dsFommAgencyInfo:U";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsFommUserMt=dsFommUserMt dsFommAgencyInfo=dsFommAgencyInfo dsItDeptYn=dsItDeptYn";	// 서버에서 수신할 데이타셋
        	var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "selectJbcPosiList" :	//직급코드 목록 조회
        			this.dsJbcPosi.insertRow(0);
        			this.dsJbcPosi.setColumn(0, 'JBC_POSI_ID', null);
        			this.dsJbcPosi.setColumn(0, 'JBC_POSI', '- 선택 -');
        			break;

        		case "selectJbcList" :
        			this.dsJbc.insertRow(0);
        			this.dsJbc.setColumn(0, 'JBC_JID', null);
        			this.dsJbc.setColumn(0, 'JBC_JNAME_ORG', '- 선택 -');
        			break;

        		case "selectUserIdChck" :
        			this.fnDuplChk();
        			break;

        		case "select" :	// 사용자정보 조회
        			if(this.dsFommUserMt.getColumn(0, "USER_ID") == Ex.util.getSession('gvUserId') || Ex.util.getSession('gvAdminYn') == "Y")
        			{
        				this.divBottom.form.btnSave.set_visible(true);
        			}
        			var DEPT_CD = this.dsFommUserMt.getColumn(0, 'DEPT_CD');
        			var DEPT_NM = this.dsFommUserMt.getColumn(0, 'DEPT_NM');
        			this.divDept.form.setValue(DEPT_CD, DEPT_NM);

        			var POS_CD = this.dsFommUserMt.getColumn(0, 'POS_CD');
        			var POS_NM = this.dsFommUserMt.getColumn(0, 'POS_NM');
        			if( !Ex.isEmpty(POS_CD) && !Ex.isEmpty(POS_NM) ) {
        				this.dsCond.setColumn(0, 'JBC_POSI_ID', POS_CD);
        				this.dsCond.setColumn(0, 'JBC_POSI', POS_NM);
        				this.fnSearchJbc();
        			}

        			// AD 대직자 표기
        			var DAEJIC_ID = this.dsFommUserMt.getColumn(0, 'DAEJIC_ID');
        			var DAEJIC_NM = this.dsFommUserMt.getColumn(0, 'DAEJIC_NM');
        			this.divUser.form.setValue(DAEJIC_ID, DAEJIC_NM);

        			// 사용자/서명 이미지 표기
        			this.fnSetImage();
        			break;

        		case "select02" :		// 대직조회
        			if( this.dsFommAgencyInfo.rowcount == 0 ) {
        				var rowpos = this.dsFommAgencyInfo.setAddRow();
        				this.dsFommAgencyInfo.setColumn(0, 'USER_ID', this.USER_ID);
        				this.dsFommAgencyInfo.setColumn(0, 'AGENCY_SEQ', '1');
        				this.dsFommAgencyInfo.setColumn(0, 'IS_ACTIVE', '0');
        			}
        			else {
        				var AGENT_USER_ID = this.dsFommAgencyInfo.getColumn(0, 'AGENCY_USER_ID');
        				var AGENT_USER_NM = this.dsFommAgencyInfo.getColumn(0, 'AGENCY_USER_NM');

        				this.divUser.form.setValue(AGENT_USER_ID, AGENT_USER_NM);
        			}

        			var IS_ACTIVE = this.dsFommAgencyInfo.getColumn(0, 'IS_ACTIVE');
        			this.fnSetAgentComp(IS_ACTIVE=='1');

        			this.fnSetImage();
        			break;

        		case "save01" :
        			var param = {
        						id : "saveAlert"
        					  , msg : "10004"
        					  , arrparam : ['']
        					  , msgtype : "S"};
        				Ex.core.alert(this, param);
        				this.FileUpTransfer.clearFileList();
        			break;
        	}
        }

        // 부서명 div callback
        this.deptChangedCallBack = function()
        {
        	var DEPT_CD = this.divDept.form.getValue().DEPT_CD;
        	var DEPT_NM = this.divDept.form.getValue().DEPT_NM;
        	this.dsFommUserMt.setColumn(0, 'DEPT_CD', DEPT_CD);
        	this.dsFommUserMt.setColumn(0, 'DEPT_NM', DEPT_NM);
        	this.divDept.form.setEnable(true);
        }

        // 대직자 div callback
        // this.userDeptChangedCallBack = function()
        // {
        // 	var AGENCY_USER_ID	= this.divUser.form.getValue().USER_ID;
        // 	var AGENCY_DUTY_NM	= this.divUser.form.getValue().ROLE_NM;
        // 	var AGENCY_DEPT_NM	= this.divUser.form.getValue().DEPT_NM;
        // 	this.dsFommAgencyInfo.setColumn(0, 'AGENCY_USER_ID', AGENCY_USER_ID);
        // 	this.dsFommAgencyInfo.setColumn(0, 'AGENCY_DUTY_NM', AGENCY_DUTY_NM);
        // 	this.dsFommAgencyInfo.setColumn(0, 'AGENCY_DEPT_NM', AGENCY_DEPT_NM);
        // }



        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "pConfirmSaveI" :
        			this.fnSetDataset();
        			this.fnSave();
        			break;

        		case "pConfirmRefreshI" :
        			document.location.href = "/";
        			break;

        		case "saveAlert" :
        			if(this.dsCond.getColumn(0, "USER_ID") == Ex.util.getSession('gvUserId'))
        			{
        				if(Ex.util.getSession('gvDeptCd') != this.dsFommUserMt.getColumn(0, "DEPT_CD"))
        				{
        					nexacro.getApplication().gdsSession.setColumn(0, "DEPT_CD", this.dsFommUserMt.getColumn(0, "DEPT_CD"));
        					nexacro.getApplication().gdsSession.setColumn(0, "DEPT_NM", this.dsFommUserMt.getColumn(0, "DEPT_NM"));
        					nexacro.getApplication().gdsSession.setColumn(0, "IT_DEPT_YN", this.dsItDeptYn.getColumn(0, "IT_DEPT_YN")||'N');

        					var o = Ex.util.makeSessionObject(nexacro.getApplication().gdsSession);
        					Ex.util.setSession(o);

        					// 사용자/대직자 표기
        					nexacro.getApplication().MAIN_TOP.form.fnSetUserDisp();

        					// 컴포넌트 visible && align 처리
        					nexacro.getApplication().MAIN_TOP.form.fnSetCompVisible();
        				}
        			}
        			else
        			{
        				Ex.core.pclose(this, 'save');
        			}

        			break;

        		case "pInputUserIdAlertI" :
        		case "pDupUserIdAlertI" :
        			this.edtUserId.setFocus();
        			break;
        	}
        }



        // 대직자 div change callback
        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	if(compId == "divDaejicUser")	// 대직자 setting
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsFommAgencyInfo.setColumn(0, "DAEJIC_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsFommAgencyInfo.setColumn(0, "DAEJIC_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsFommAgencyInfo.setColumn(0, "DAEJIC_ID",	"");
        			this.dsFommAgencyInfo.setColumn(0, "DAEJIC_NM",	"");
        		}
        	}
        }

        this.fnSetImage = function()
        {
        	// 사용자 이미지
        	var IMG_FILE_BASE64 = this.dsFommUserMt.getColumn(0, 'IMG_FILE_BASE64');
        	if( !Ex.isEmpty(IMG_FILE_BASE64) ) {
        		this.imgPhotoImg.set_image(IMG_FILE_BASE64);
        		this.imgPhotoImg.set_stretch('fixaspectratio');
        	}
        	else
        		this.imgPhotoImg.set_stretch('none');

        	// 서명 이미지
        	var FILE_BASE64 = this.dsFommUserMt.getColumn(0, 'FILE_BASE64');
        	if( !Ex.isEmpty(FILE_BASE64) ) {
        		this.imgSignImg.set_image(FILE_BASE64);
        		this.imgSignImg.set_stretch('fixaspectratio');
        	}
        	else
        		this.imgSignImg.set_stretch('none');

        }
        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.svcUrl = nexacro.getEnvironment().services["svc_url"].url;
        	this.USER_ID = this.getOwnerFrame().pUserId;
        	if( Ex.isEmpty(this.USER_ID) )
        		this.USER_ID = Ex.util.getSession('gvUserId');

        	this.pPopType = this.getOwnerFrame().pPopType||'R';
        	this.pAdminYn = this.getOwnerFrame().pAdminYn||'N';
        	this.pEscYn	= this.getOwnerFrame().pEscYn||'Y';
        	trace('FOMM0000_P02 this.pAdminYn :: ' + this.pAdminYn);
        	// 공통코드 조회
        	this.fnGetCmmCd();

        	this.fnSearchReset();

        	switch(this.pPopType)
        	{
        		case "I" :
        			this.btnUserIdChk.set_enable(true);

        			var arrEditComp = [this.edtUserId, this.edtUserNm, this.edtJbcPosi, this.edtJbc, this.edtJobDesc, this.edtUserEmad, this.edtContactPhone, this.chkSMS, this.chkMemo, this.chkTalk, this.mskContactMobile];
        			for(var i = 0; i < arrEditComp.length; i++) {
        				arrEditComp[i].set_readonly(false);
        			}

        			this.btnChangePwd.set_width(0);
        			this.edtNhPasswd.set_left(this.btnChangePwd.getOffsetRight());
        			this.edtNhPasswd.set_visible(true);

        			// 이미지
        			this.imgPhotoImg.set_visible(false);
        			this.imgSignImg.set_visible(false);
        			this.stcPhotoBg.set_text('사용자 이미지는\n저장 후 추가 가능합니다.');
        			this.stcSignBg.set_text('서명 이미지는\n저장 후 추가 가능합니다.');
        			var arrImgBtn = [this.btnPhotoImgAdd, this.btnPhotoImgDelete, this.btnSignAdd, this.btnSignDelete];
        			for(var i = 0; i < arrImgBtn.length; i++) {
        				arrImgBtn[i].set_enable(false);
        			}

        			var rowpos = this.dsFommUserMt.setAddRow();
        			this.dsFommUserMt.setColumn(rowpos, 'USE_YN', 'Y');
        			var rowpos = this.dsFommAgencyInfo.setAddRow();
        			this.dsFommAgencyInfo.setColumn(rowpos, 'IS_ACTIVE', '0');
        			this.fnSetAgentComp(false);

        			this.divDept.set_enable(true);

        			break;

        		case "U" :
        			this.btnUserIdChk.set_enable(false);

        			var arrEditComp = [this.edtJobDesc, this.edtUserEmad, this.edtContactPhone, this.chkSMS, this.chkMemo, this.chkTalk, this.mskContactMobile];
        			for(var i = 0; i < arrEditComp.length; i++) {
        				arrEditComp[i].set_readonly(false);
        			}

        			// P사번, e사번, 5사번인 경우만 부서 수정 가능
        			var userId = this.USER_ID.toUpperCase();
        			if( userId.startsWith("P") || userId.startsWith("E") || userId.startsWith("5") )
        			{
        				this.edtJbc.set_readonly(false);
        				this.divDept.set_enable(true);
        			}

        			this.fnSearch();		// 사용자정보 조회
        			this.fnSearch01();		// 대직정보 조회
        			break;

        		case "R" :
        			this.btnChangePwd.set_width(0);
        			this.stcAdInfo.set_width(0);
        			this.btnAd.set_width(0);

        			var arrImgBtn = [this.btnPhotoImgAdd, this.btnPhotoImgDelete, this.btnSignAdd, this.btnSignDelete];
        			for(var i = 0; i < arrImgBtn.length; i++) {
        				arrImgBtn[i].set_enable(false);
        			}

        			this.fnSearch();		// 사용자정보 조회
        			this.fnSearch01();		// 대직정보 조회
        			break;
        	}
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['LANG_CD',		'SEND_TYPE_CD',	'YN_CD',		'AGENCY_RESN_CD']	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',		'CMM_CD',		'CMM_CD',		'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['SEL',			'',				'',				'']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y',			'Y',			'Y']			// 사용여부
        		,filter	: ['',				'',				'',				'']				// filterStr
        		,objDs	: [this.dsLangCd,	this.dsSendYn,	this.dsYnCd,	this.dsAgencyResnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }


        this.fnSetAgentComp = function(bEnable)
        {
        	return;		// 대무 AD정보 표기용으로 바뀜
        	this.divUser.form.setEnable(bEnable);
        	this.calBujaeStm.set_enable(bEnable);
        	this.calBujaeEtm.set_enable(bEnable);
        	this.edtBujaeSayu.set_enable(bEnable);

        	// default value
        	if( bEnable ) {
        		var fromDate	= Ex.util.today();
        		var toDate	 	= Ex.util.addDate(day1, 1);
        		this.dsFommAgencyInfo.setColumn(0, 'AGENCY_SDT', fromDate);
        		this.dsFommAgencyInfo.setColumn(0, 'AGENCY_SDT', toDate);

        		this.dsFommAgencyInfo.setColumn(0, 'AGENCY_RESN_CD', '01');	// 휴가
        	}
        }

        // 저장 validation
        this.fnCheckValidate = function()
        {
        	if( !Ex.util.isUpdated(this.dsFommUserMt) &&
        		!Ex.util.isUpdated(this.dsFommAgencyInfo) )
        		return false;


        	// 사용자정보 validation
        	if( !Ex.util.checkValidate(this, "group01") )
        		return false;

        	// 부서 validation
        // 	var rtn = this.divDept.form.fnCheckValidate()
        // 	if(rtn == 'NO_INPUT' || rtn == 'NO_CD' ) {
        // 		var oParam = {id : "deptNullAlert", msg : "부서명을 입력해주세요.", arrparam : [''], msgtype : "I"};
        // 		Ex.core.alert(this, oParam);
        // 		return false;
        // 	}

        	// 사번 중복체크
        	if( this.pPopType == 'I' )
        	{
        		if( !this.ID_CHK_FLAG ) {
        			var oParam = {id : "idDuplChkAlert", msg : "사번 중복체크를 해야합니다.", arrparam : [''], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}

        	// 대직 validation
        	var DAEJIC_YN = this.rdoBujaeYn.value;
        	if(DAEJIC_YN == '1')
        	{
        		if( this.divUser.form.fnCheckValidate() != 'OK')
        		{		// 대직자 div
        			var oParam = {id : "daejicUserAlert", msg : "10011", arrparam : ['대직자'], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        		if( !Ex.util.checkValidate(this, "fvValiDaejic") )
        			return false;
        	}
        	return true;
        }

        // 저장 전 data setting
        this.fnSetDataset = function()
        {
        }

        // 중복체크
        this.fnDuplChk = function()
        {
        	if(this.dsUserInfoChck.rowcount != 0)
        	{
        		var param = {
        			  id	: "pDupUserIdAlertI"										//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "이미 등록된 사번입니다."	//메시지 내용
        			, arrparam : [""]													//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"														//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else
        	{
        		var param = {
        			  id	: "AlertI"					//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "사용할 수 있는 사번입니다."	//메시지 내용
        			, arrparam : [""]					//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		this.ID_CHK_FLAG = true;
        		return false;
        	}
        }

        this.fnAddFile = function(file)
        {
        	var idx = file.addEventHandler("onsuccess", this.VirtualFile_onsuccess, this);
        	file.addEventHandler("onerror", this.VirtualFile_onerror, this);
        	file.open(null, VirtualFile.openRead);
        	file.close();	// onsuccess 태우기용
        }

        // 확장자 validation
        this.fnValidateExt = function(fileType)
        {
        	trace('Validating Extention :: ' + fileType);
        	if( Ex.isEmpty(fileType) ) {
        		trace('file extention empty');
        		return false;
        	}

        	fileType = fileType.toLowerCase();

        	//whitelist 미포함된 확장자면 false
        	if( this.extWhiteList.indexOf(fileType) < 0 )	 {
        		var param = {id : "pLimitCntAlert", msg : fileType + '은 지원하지 않는 파일 형식입니다.', arrparam : [], msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	return true;
        }

        this.fnUploadFiles = function()
        {
        	// request header 추가
        	this.FileUpTransfer.setPostData("IMG_GBN", encodeURIComponent(this.IMG_GBN));
        	this.FileUpTransfer.setPostData("USER_ID", encodeURIComponent(this.USER_ID));

        	//trace("filelist:\n" + this.FileUpTransfer.filelist);
        	this.FileUpTransfer.upload(this.svcUrl + 'FommMultipart/uploadUserImg');
        }

        this.isDeptEmpty = function()
        {
        	if( Ex.isEmpty(Ex.util.getSession('gvDeptCd')) )
        	{
        		var param = {
        			  id    : "deptNotExistAlert"   		//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg   : "소속팀이 선택 후 저장을 눌러주세요."	//메시지 내용
        			, arrparam : [""]               		//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"                 		//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
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
        		case "btnUserIdChk" :	//중복체크
        			this.dsUserInfoChck.clearData();
        			var userId = this.dsFommUserMt.getColumn(0, "USER_ID");
        			if( Ex.isEmpty(userId))
        			{
        				var param = {
        					  id	: "pInputUserIdAlertI"	//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "사번을 입력하세요"		//메시지 내용
        					, arrparam : [""]				//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			this.dsCond.setColumn(0, 'USER_ID', userId);

        			var sTranId = "selectUserIdChck";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        			var sService = "FOMM0000P/select01";			// 서비스명
        			var sInDs = "dsCond=dsCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        			var sOutDs = "dsUserInfoChck=dsFommUserMt";		// 서버에서 수신할 데이타셋
        			var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        			Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        			break;

        		case "btnChangePwd" :
        			Ex.core.popup(
        				this,											// <--- 팝업 실행 스코프
        				"popupChangePwd",								// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::commChangePwd.xfdl",						// <--- 팝업창 오픈 Url
        				{
        					title : "비밀번호 변경",
        					pUserId : this.USER_ID,
        					pAdminYn : this.pAdminYn
        				},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"
        			);
        			break;

        		case "btnSave" :			// 저장
        			if( !this.fnCheckValidate() )	return;

        			var param = {id : "pConfirmSaveI", msg : "10003", arrparam : [''], msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :			// 닫기
        			//소속팀 존재하는지 확인
        			if( !this.isDeptEmpty() ) return;
        			Ex.core.pclose(this);
        			break;

        		case "btnPhotoImgAdd" :
        			this.FileDialog.open('File Upload', FileDialog.LOAD);
        			break;

        		case "btnPhotoImgDelete" :
        			this.dsFommUserMt.setColumn(0, 'IMG_ORG_FILE_NM', '');
        			this.dsFommUserMt.setColumn(0, 'IMG_NEW_FILE_NM', '');
        			this.dsFommUserMt.setColumn(0, 'IMG_FILE_PATH', '');
        			this.dsFommUserMt.setColumn(0, 'IMG_FILE_PATH', 'IMG_FILE_BASE64');
        			this.imgPhotoImg.set_image('');
        			break;
        	}
        }

        this.rdoDaejicYn_onitemchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "Y" :
        			this.divDaejic.set_enable(true);
        			break;

        		case "N" :
        			this.divDaejic.set_enable(false);
        			break;
        	}
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	if(obj.id == "cboJbcPosi")
        	{
        		this.dsFommUserMt.setColumn(0, "JBC_JID", '');
        		this.dsFommUserMt.setColumn(0, "JBC_JNAME", '');

        		this.dsFommUserMt.setColumn(0, "POS_NM", obj.text);

        		this.dsCond.setColumn(0, 'JBC_POSI_ID', e.newvalue);
        		this.dsCond.setColumn(0, 'JBC_POSI', obj.text);
        		this.fnSearchJbc();
        	}
        	else if(obj.id == "cboJbc")
        	{
        		var postindex = e.postindex;
        		var jbcJid = this.dsJbc.getColumn(postindex, "JBC_JID");
        		var jbcJnameOrg = this.dsJbc.getColumn(postindex, "JBC_JNAME_ORG");

        		this.dsFommUserMt.setColumn(0, "JBC_JNAME_ORG", jbcJnameOrg);

        		var jbcPosi = this.cboJbcPosi.text;
        		this.dsFommUserMt.setColumn(0, "JBC_JNAME", jbcPosi+jbcJnameOrg);
        	}
        };

        this.onColumnChanged = function(obj,e)
        {
        	if( obj.id == 'dsFommUserMt' ) {
        		if( e.columnid == 'USER_ID' ) {
        			this.ID_CHK_FLAG = false;
        		}
        	}
        	obj.setUpdateRow(e);	// ROWFLAG컬럼 변경을 위한 함수 호출
        };




        this.ImgOndragenter = function(obj,e)
        {
        	if( e.datatype == 'file' ) {
        		obj.set_opacity(0.4);
        	}
        };


        this.ImgOndragleave = function(obj,e)
        {
        	obj.set_opacity(1);
        };

        this.ImgOndrop = function(obj,e)
        {
        	trace('ondrop call');
        	if( obj.name == 'imgPhotoImg' )
        		this.IMG_GBN = 'PHOTO';
        	else
        		this.IMG_GBN = 'SIGN';

        	obj.set_opacity(1);

        	if( e.datatype == "file" )
        	{
        		// 첨부할 파일 갯수 1개 제한
        		if( e.filelist.length > 1 ) {
        			var param = {
        						id : "multiFileAlert"
        					  , msg : "파일은 한 개만 첨부 가능합니다."
        					  , arrparam : []
        					  , msgtype : "I"};
        				Ex.core.alert(this, param);
        			return;
        		}
        		e.filelist[0].IMG_GBN = this.IMG_GBN;
        		trace("file.IMG_GBN : " + e.filelist[0].IMG_GBN + " file.id : " + e.filelist[0].id + " file.filename : " + e.filelist[0].filename + " file._handle.size : " + e.filelist[0]._handle.size);
        		// 첨부할 파일 추가
        		this.fnAddFile(e.filelist[0]);
        	}
        };

        this.rdoBujaeYn_onitemchanged = function(obj,e)
        {
        	this.fnSetAgentComp(e.postvalue == '1');
        };


        /***************************************
         * VirtualFile Event
         ***************************************/
        this.VirtualFile_onerror = function(obj, e)
        {
        	trace("this.VirtualFile_onerror() statuscode :: " + e.statuscode + " errortype :: " + e.errortype + " errormsg :: "+ e .errormsg);
        };

        this.VirtualFile_onsuccess = function(obj, e)
        {
        	trace("this.VirtualFile_onsuccess() e.reason :===================> " + e.reason);

        	if (e.reason == 2)	// e.reason == 2 :: virtualfile.close()
        	{
        		var fileName = obj.filename||'';
        		var ext = fileName.substring(obj.filename.lastIndexOf('.')+1, fileName.length);
        		trace('onsuccess file ext :: ' + ext);
        		// 확장자 validation
        		if(!this.fnValidateExt(ext)) {
        			return;
        		}

        		// fileTransfer에 파일 추가
        		var userId = Ex.util.getSession('gvUserId');
        		var fileIdx = this.FileUpTransfer.addFile(userId, obj);
        		if(fileIdx > -1)
        		{
        			var colNm = '';
        			var objImgViewer;
        			var objBg;
        			if( this.IMG_GBN == 'PHOTO' ) {
        				ColNm = 'IMG_ORG_FILE_NM';
        				objImgViewer = this.imgPhotoImg;
        				objBg = this.stcPhotoBg;
        			}
        			else {
        				ColNm = 'ORG_FILE_NM';
        				objImgViewer = this.imgSignImg;
        				objBg = this.stcSignBg;
        			}


        			// Dataset에 파일정보 추가
        			this.dsFommUserMt.setColumn(0, ColNm, fileName);	// 원본파일명

        			// 이미지파일 업로드
        			this.fnUploadFiles();
        		}
        		else
        		{
        			var param = {id : "ERROR", msg : "파일 추가에 실패하였습니다."};
        			Ex.core.error(this, param);
        			return;
        		}
        	}
        };




        /***************************************
         * FileUpTransfer Event
         ***************************************/
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];

        	if( objDs != null)
        	{
        		trace('FileUpTransfer onsuccess rtn Dataset :: ' );
        		trace(objDs.saveXML());
        		var FILE_PATH		= objDs.getColumn(0, 'FILE_PATH');
        		var FILE_NM 		= objDs.getColumn(0, 'FILE_NM');
        		var EXT				= FILE_NM.substring(FILE_NM.lastIndexOf('.')+1, FILE_NM.length);
        		var FILE_SAVE_NM 	= objDs.getColumn(0, 'FILE_SAVE_NM');
        		var FILE_BASE64		= objDs.getColumn(0, 'FILE_BASE64');
        		var IMG_GBN			= objDs.getColumn(0, 'IMG_GBN');
        		var USER_ID			= objDs.getColumn(0, 'USER_ID');

        		var arrColNm = [];
        		var objViewer;
        		if( IMG_GBN == 'PHOTO' ) {
        			arrColNm = ['IMG_NEW_FILE_NM', 'IMG_FILE_PATH',	'IMG_FILE_BASE64'];
        			objViewer = this.imgPhotoImg;
        		}
        		else {
        			arrColNm = ['NEW_FILE_NM', 'FILE_PATH', 'FILE_BASE64'];
        			objViewer = this.imgSignImg;
        		}

        		var imgPath = FILE_PATH + FILE_SAVE_NM;
        		if( nexacro.getApplication().gvRunMode != 'L' ) {
        			imgPath = this.svcUrl + imgPath;
        		}

        		for(var i = 0; i < arrColNm.length; i++) {
        			this.dsFommUserMt.setColumn(0, arrColNm[0], FILE_SAVE_NM);
        			this.dsFommUserMt.setColumn(0, arrColNm[1], FILE_PATH);
        			this.dsFommUserMt.setColumn(0, arrColNm[2], FILE_BASE64);
        		}

        		this.fnSetImage();

        	}

        	this.FileUpTransfer.clearFileList();
        };

        this.FileUpTransfer_onerror = function(obj,e)
        {
        	trace('FileUpTransfer_onerror :: ' + e.statuscode + '  ' + e.errormsg);
        	if(e.statuscode == -99998)	// session out
        	{
        		var alertbyMsgCallback = function(mid, varValue)
        		{
        			if(mid == "sppSessionOut") document.location.href = "/";
        		};

        		var param = {id : "sppSessionOut", msg : "Session이 종료 되었습니다.", callbackfunc: alertbyMsgCallback}	//'10006', arrparam:[msgParam]};
        		Ex.core.error(this, param);
        	}
        	else {
        		var param = {id : "fileUpError", msg : "10010"}
        		Ex.core.error(this, param);
        	}
        };

        this.edtUserId_onkeydown = function(obj,e)
        {
        	this.dsFommUserMt.setColumn(0, 'USER_PW', obj.value);
        };

        this.FileDialog_onclose = function(obj,e)
        {
        	this.IMG_GBN = 'PHOTO';

        	if( e.virtualfiles.length > 1 ) {
        		var param = {
        			id : "multiFileAlert"
        		  , msg : "파일은 한 개만 첨부 가능합니다."
        		  , arrparam : []
        		  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return;
        	}

        	e.virtualfiles[0].IMG_GBN = this.IMG_GBN;
        	var file = e.virtualfiles[0];
        	var fileSize = nexacro.toNumber(file._handle.size, 0);

        	this.fnAddFile(file);
        };

        this.btnAd_onclick = function(obj,e)
        {
        	//소속팀 존재하는지 확인
        	if( !this.isDeptEmpty() ) return;
        	Ex.core.pclose(this, 'ad');
        };

        this.stcBg08_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnUserIdChk.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edtUserId.addEventHandler("onkeydown",this.edtUserId_onkeydown,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.cboJbcPosi.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.btnChangePwd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcBg08.addEventHandler("onclick",this.stcBg08_onclick,this);
            this.rdoBujaeYn.addEventHandler("onitemchanged",this.rdoBujaeYn_onitemchanged,this);
            this.calBujaeStm.addEventHandler("onchanged",this.cal_PjtTime_onchanged,this);
            this.calBujaeEtm.addEventHandler("onkeydown",this.Common_onkeydown,this);
            this.btnPhotoImgAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnPhotoImgDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnSignAdd.addEventHandler("onclick",this.btn_signSave_onclick,this);
            this.btnSignDelete.addEventHandler("onclick",this.btn_signDelete_onclick,this);
            this.edtNhPasswd.addEventHandler("onchanged",this.edtNhPasswd_onchanged,this);
            this.stcPhotoBg.addEventHandler("onclick",this.stcGridBg_onclick,this);
            this.stcSignBg.addEventHandler("onclick",this.stcGridBg_onclick,this);
            this.imgPhotoImg.addEventHandler("ondragenter",this.ImgOndragenter,this);
            this.imgPhotoImg.addEventHandler("ondragleave",this.ImgOndragleave,this);
            this.imgPhotoImg.addEventHandler("ondrop",this.ImgOndrop,this);
            this.imgSignImg.addEventHandler("ondragenter",this.ImgOndragenter,this);
            this.imgSignImg.addEventHandler("ondragleave",this.ImgOndragleave,this);
            this.imgSignImg.addEventHandler("ondrop",this.ImgOndrop,this);
            this.cboJbc.addEventHandler("ondropdown",this.cboJbc_ondropdown,this);
            this.btnAd.addEventHandler("onclick",this.btnAd_onclick,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.onColumnChanged,this);
            this.VirtualFile.addEventHandler("onerror",this.VirtualFile_onerror,this);
            this.VirtualFile.addEventHandler("onsuccess",this.VirtualFile_onsuccess,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.dsFommAgencyInfo.addEventHandler("oncolumnchanged",this.onColumnChanged,this);
            this.dsItDeptYn.addEventHandler("oncolumnchanged",this.onColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0000_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
