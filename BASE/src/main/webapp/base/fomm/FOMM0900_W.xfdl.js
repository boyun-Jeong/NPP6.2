(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0900_W");
            this.set_titletext("쪽지보내기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1052,603);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pt_memo", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMO_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MEMO_TITLE\" type=\"STRING\" size=\"200\"/><Column id=\"MEMO_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_STATUS_CD\" type=\"STRING\" size=\"30\"/><Column id=\"SEND_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"REG_USER_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"NEW_MEMO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LMOD_USER_DEPT\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pt_memo_rcv", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMO_RCV_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MEMO_ID\" type=\"STRING\" size=\"20\"/><Column id=\"RCV_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"RCV_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"RCV_USER_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"RCV_TYPE_CD\" type=\"STRING\" size=\"30\"/><Column id=\"SND_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SND_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SND_USER_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"NEW_MEMO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"1\"/><Column id=\"READ_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"RCV_USER_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userRcv", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BUSEO_ID\" type=\"STRING\" size=\"6\"/><Column id=\"BUSEO_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"JBC_JID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_JNAME\" type=\"STRING\" size=\"30\"/><Column id=\"JBC_POSI_ID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"30\"/><Column id=\"CONTACT_PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"ADDRESS_1\" type=\"STRING\" size=\"200\"/><Column id=\"ADDRESS_2\" type=\"STRING\" size=\"100\"/><Column id=\"POSTCODE\" type=\"STRING\" size=\"7\"/><Column id=\"NH_GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"NH_ACTIVE\" type=\"STRING\" size=\"1\"/><Column id=\"NH_STATUS\" type=\"STRING\" size=\"3\"/><Column id=\"BUJAE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUJAE_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_ETIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_SAYU\" type=\"STRING\" size=\"30\"/><Column id=\"DAEJIC_ID\" type=\"STRING\" size=\"9\"/><Column id=\"DAEJIC_NM\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_MOBILE\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_OFFICE\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID1\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM1\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID2\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM2\" type=\"STRING\" size=\"20\"/><Column id=\"MY_MGR_ID\" type=\"STRING\" size=\"9\"/><Column id=\"MY_MGR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"LAST_LOGIN_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"NH_PASSWD\" type=\"STRING\" size=\"28\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_new_memo_id", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMO_ID\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pt_memo_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMO_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MEMO_TITLE\" type=\"STRING\" size=\"200\"/><Column id=\"MEMO_CONTENTS\" type=\"STRING\" size=\"4000\"/><Column id=\"MEMO_STATUS_CD\" type=\"STRING\" size=\"30\"/><Column id=\"SEND_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"REG_USER_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"NEW_MEMO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LMOD_USER_DEPT\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pt_memo_rcv_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMO_RCV_ID\" type=\"STRING\" size=\"20\"/><Column id=\"MEMO_ID\" type=\"STRING\" size=\"20\"/><Column id=\"RCV_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"RCV_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"RCV_USER_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"RCV_TYPE_CD\" type=\"STRING\" size=\"30\"/><Column id=\"SND_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SND_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SND_USER_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"NEW_MEMO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"1\"/><Column id=\"READ_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"RCV_USER_DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SND_USER_DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"JBC_JNAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pt_memo_reply_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMO_ID\" type=\"STRING\" size=\"20\"/><Column id=\"REPLY_ID\" type=\"STRING\" size=\"20\"/><Column id=\"REPLY_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REPLY_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"REPLY_USER_DEPT\" type=\"STRING\" size=\"100\"/><Column id=\"REPLY_CONTENTS\" type=\"STRING\" size=\"4000\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEL_TIME\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userRef", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BUSEO_ID\" type=\"STRING\" size=\"6\"/><Column id=\"BUSEO_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"JBC_JID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_JNAME\" type=\"STRING\" size=\"30\"/><Column id=\"JBC_POSI_ID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"30\"/><Column id=\"CONTACT_PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"ADDRESS_1\" type=\"STRING\" size=\"200\"/><Column id=\"ADDRESS_2\" type=\"STRING\" size=\"100\"/><Column id=\"POSTCODE\" type=\"STRING\" size=\"7\"/><Column id=\"NH_GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"NH_ACTIVE\" type=\"STRING\" size=\"1\"/><Column id=\"NH_STATUS\" type=\"STRING\" size=\"3\"/><Column id=\"BUJAE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUJAE_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_ETIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_SAYU\" type=\"STRING\" size=\"30\"/><Column id=\"DAEJIC_ID\" type=\"STRING\" size=\"9\"/><Column id=\"DAEJIC_NM\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_MOBILE\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_OFFICE\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID1\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM1\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID2\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM2\" type=\"STRING\" size=\"20\"/><Column id=\"MY_MGR_ID\" type=\"STRING\" size=\"9\"/><Column id=\"MY_MGR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"LAST_LOGIN_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"NH_PASSWD\" type=\"STRING\" size=\"28\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userBld", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BUSEO_ID\" type=\"STRING\" size=\"6\"/><Column id=\"BUSEO_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"JBC_JID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_JNAME\" type=\"STRING\" size=\"30\"/><Column id=\"JBC_POSI_ID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"30\"/><Column id=\"CONTACT_PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"ADDRESS_1\" type=\"STRING\" size=\"200\"/><Column id=\"ADDRESS_2\" type=\"STRING\" size=\"100\"/><Column id=\"POSTCODE\" type=\"STRING\" size=\"7\"/><Column id=\"NH_GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"NH_ACTIVE\" type=\"STRING\" size=\"1\"/><Column id=\"NH_STATUS\" type=\"STRING\" size=\"3\"/><Column id=\"BUJAE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUJAE_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_ETIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_SAYU\" type=\"STRING\" size=\"30\"/><Column id=\"DAEJIC_ID\" type=\"STRING\" size=\"9\"/><Column id=\"DAEJIC_NM\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_MOBILE\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_OFFICE\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID1\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM1\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID2\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM2\" type=\"STRING\" size=\"20\"/><Column id=\"MY_MGR_ID\" type=\"STRING\" size=\"9\"/><Column id=\"MY_MGR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"LAST_LOGIN_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"NH_PASSWD\" type=\"STRING\" size=\"28\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userRcv_All", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_MEMO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_USER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_USER_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userRcv_All_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMO_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAlarm", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_REF\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_PARAMS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommNotiSendMt", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcMsgDiv","20","12","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("쪽지내용");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","20","40","1012","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc01","20","40","104","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMemoTitle","stc01:8.00","45","890","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_validation("제목;NULL");
            obj.set_validationGroup("input01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20","73","1012","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00","20","73","104","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수신자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","20","106","1012","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00_00","20","106","104","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("참조자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","20","139","1012","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00_00_00","20","139","104","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("숨은 참조자");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00_00","20.00","172","1012","431",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00_00_00_00","20.00","139","104","405",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divRcvUserNm","stc01_00:8.00","78","800","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("div00");
            obj.set_url("fomm::FOMM0000_D05_M.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divRefUserNm","stc01_00_00:8.00","111","890","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_url("fomm::FOMM0000_D05_M.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divBldUserNm","stc01_00_00_00:8.00","144","890","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("div00");
            obj.set_url("fomm::FOMM0000_D05_M.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSelfSnd","935.00","78","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("나에게 쓰기");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","123.00","139","908","405",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","20.00",null,"1012","63",null,"0",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","105","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSend",null,null,"100","32","0","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("발송");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_02","20.00",null,"1012","20",null,"63",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","962.00","7","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","603",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1032","0","20","603",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRcvUserNm
            obj = new Layout("default","",0,0,this.divRcvUserNm.form,function(p){});
            this.divRcvUserNm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRefUserNm
            obj = new Layout("default","",0,0,this.divRefUserNm.form,function(p){});
            this.divRefUserNm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBldUserNm
            obj = new Layout("default","",0,0,this.divBldUserNm.form,function(p){});
            this.divBldUserNm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWebEditor.form
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1052,603,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D05_M.xfdl");
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0900_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0900_W
        * 화면(명)	︰ 쪽지보내기
        * 메뉴(경로)	︰ 관리자 > 포털관리 > 쪽지보내기
        * 화면 설명	︰ SPP 쪽지보내기
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.12
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.12	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.fvMemoId = "";
        this.fvMsgFlag = "";

        // 0950화면에서 버튼클릭시 0910화면 팝업콜백 갔다가 0900 화면 호출
        //pflag : MsgReSnd - 재발송, RcvMsgReply - 답신,  MsgTrans -전달
        //this.pMEMO_ID = "";
        //this.pMEMO_RCV_ID = "";
        //this.pflag = "";

        this.ACT_USER_ID = Ex.util.getSession('gvUserId');
        this.ACT_USER_NM = Ex.util.getSession('gvUserNm');
        this.ACT_DEPT_NM = Ex.util.getSession('gvDeptNm');
        this.ACT_DEPT_CD = Ex.util.getSession('gvDeptCd');


        // frTop 에서 복사해옴
         this.objApp = nexacro.getApplication();
         this.BTNMENU = [];

         this.session;

         // 웹소켓 전역변수
         this.webSocket;
         this.formObj;

         this.pdvMiddleMenu;
        // frTop 에서 복사해옴 여기까지
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	/* 쪽지 수신자 선택 관련 초기화*/
        	this.divRcvUserNm.form.objDsUser = this.ds_userRcv_All;
        	this.divRcvUserNm.form.filterCol  = 'RCV_TYPE_CD';
        	this.divRcvUserNm.form.filterStr  = 'TO';

        	this.divRefUserNm.form.objDsUser = this.ds_userRcv_All;
        	this.divRefUserNm.form.filterCol  = 'RCV_TYPE_CD';
        	this.divRefUserNm.form.filterStr  = 'CC';

        	this.divBldUserNm.form.objDsUser = this.ds_userRcv_All;
        	this.divBldUserNm.form.filterCol  = 'RCV_TYPE_CD';
        	this.divBldUserNm.form.filterStr  = 'BCC';

        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {

        }

        // 조회
        this.fnSearch = function()
        {
        	//0950화면에서 재발송, 전달, 답신 으로 넘어왔을때
        	// transaction
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0950W/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "ds_pt_memo=dsPtMemo ds_pt_memo_rcv=dsPtMemoRcv dsPtMemoReply=dsPtMemoReply";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        //저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";                          						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0900W/save01";                         			   	// 서비스명
            //var sInDs = "dsPtMemo=ds_pt_memo:A dsPtMemoRcv=ds_pt_memo_rcv:U";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	//var sInDs = "dsPtMemo=ds_pt_memo dsPtMemoRcv=ds_userRcv_All dsFommNotiSendMt=dsFommNotiSendMt";
        	var sInDs = "dsCond=dsCond dsPtMemo=ds_pt_memo dsPtMemoRcv=ds_userRcv_All";
            var sOutDs = "ds_new_memo_id=ds_new_memo_id";				          	// 서버에서 수신할 데이타셋
            //var sOutDs = "";
            var sArg = "";                   										// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");
        	for(var i = 0; i < objDs.rowcount; i++)
        		objDs.setDeleteRow(i);
        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }

        // 알림 보내기
        this.fnSendAlarm = function()
        {
        	// transaction
        	var sTranId = "sendAlarm";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "ALARM/send";               			// 서비스명
            var sInDs = "dsAlarm=dsAlarm";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";           		   					// 서버에서 수신할 데이타셋
            var sArg = "";                   				    // 서버 @ParamVariable 인자와 맵핑됨

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
        		case "save01" : // 서비스 ID

        			//Ex.core.toast(this, "10004", null, {toastType:'S'});

        			/****************************************************************/
        			//저장후에 나에게 쓰기 - 수신함으로 이동 Ex.core.pclose(this,toMe);
        			//저장후에 남에게 쓰기 - 발신함으로 이동 Ex.core.pclose(this,toOthers);
        			/****************************************************************/

        			if(this.chkSelfSnd.value == 0) { // 나에게 쓰기 X

        				//application.open(nextFommId, nextFommUrl, parentFrame, null, "showtitlebar=true");
        				//this.go("fomm::FOMM0910_W.xfdl");

        				//Ex.core.openMenu("fomm::FOMM0910_W.xfdl");
        				//application.av_WorkFrame.set_formurl("fomm::FOMM0910_W.xfdl");

        				Ex.core.toast(this, "10004", null, {toastType:'S'});

        				//팝업창에서는 menuId, menuUrl 두개를 보내 함수 호출 하면 언제나 가능
        				//memuID만 태워서 보내는 호출은 팝업창에서인경우 콜백처리 할때만 가능한듯
        				//수신함<--->발신함 은 팝업창이 아니므로 이동할때 id만 보내서 함수 호출 해도 가능
        				/*
        				var objParam = {};
        //				var objParam = {menuId : '684', menuUrl : 'fomm::FOMM0920_W.xfdl'};//수신함 684 발신함 685
        //				objParam.menuId = '684';					//수신쪽지함
        //				objParam.menuUrl = 'fomm::FOMM0920_W.xfdl';
         				objParam.menuId = '685';					//발신쪽지함
         				objParam.menuUrl = 'fomm::FOMM0910_W.xfdl';
        				Ex.core.openMenu(objParam);
        				Ex.core.pclose(this);*/
        			} else { // 나에게 쓰기 O

        				Ex.core.toast(this, "10004", null, {toastType:'S'});

        				// 원래는 fnOpenMenu(obj)를 호출하려했는데 잘안되서 직접 부름
        				var objParam = {};
        				objParam.menuId = '684';					//수신쪽지함
        				objParam.menuUrl = 'fomm::FOMM0920_W.xfdl';
        // 				objParam.menuId = '685';					//발신쪽지함
        // 				objParam.menuUrl = 'fomm::FOMM0910_W.xfdl';
        				Ex.core.openMenu(objParam);
        				Ex.core.pclose(this);
         			}

        			//alert(this.ds_pt_memo.getColumn(0,"MEMO_STATUS_CD"));
        			//발송일 경우만 알림전송

        			if (this.ds_pt_memo.getColumn(0,"MEMO_STATUS_CD") == 2)
        			{
        				this.setAlarmParam();		//알림 발송
        			}
        			Ex.core.pclose(this, "save");

        			break;

        		case "select01" :

        			this.fnMemoReset();	//0950화면에서 재발송, 전달, 답신 으로 넘어왔을때
        			Ex.core.toast(this, "10002");

        			break;
        	}
        }


        // 파일 업로드 default callback
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	// TO DO
        	// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	switch(sSvcId)
        	{
        		case "fileSvc" :
        			this.fnSave();
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
        		case "MsgReSnd" :
        			//trace("pID : " + pID);
        			//trace("varValue : " + varValue);
        			//this.go("fomm::FOMM0910_W.xfdl");
        			//Ex.core._callWork("FOMM0910_W");
        			//Ex.core._callWork("fomm::FOMM0910_W.xfdl");
        			//Ex.core.openMenu("FOMM0910_W");
        			//Ex.core.openMenu("fomm::FOMM0910_W.xfdl");
        			//if(varValue.indexOf("Dataset id=") > -1)	this.dsPopRtn.loadXML(varValue);
        			Ex.core.pclose(this, "MsgReSnd");
        			break;

        		case "MsgTrans" :
        			Ex.core.pclose(this, "MsgTrans");
        			break;

        		case "RcvMsgReply" :
        			Ex.core.pclose(this, "RcvMsgReply");
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
        	//tmpsaveConfirm
        		case "AlertRcvUser" :
        			this.divRcvUserNm.setFocus();
        			break;

        // 		case "AlertEmptyConts" :
        // 			this.divWebEditor.form.webEditor.setFocus();
        // 			//this.fnSave();
        // 			break;

        		case "saveConfirm" :
        			//var strmemoid = this.ds_pt_memo.getColumn(0, "MEMO_ID");		//쪽지 수정인지 신규인지
        			//var strStatus = this.ds_pt_memo.getColumn(0, "MEMO_STATUS_CD");	//임시저장인지 발송인지
        			//var rcvCnt = this.ds_userRcv_All.rowcount;
        			//쪽지 임시저장 후 0910(발신함) 에서
        			//수신자 있으면 0910 --> 0950 으로 이동
        			//수신자 없으면 0910 --> 0900 으로 이동
        			// 1. 쪽지 update 수신자 선택 안함 - 쪽지만 update
        			// 2. 쪽지 update 수신자 선택 - 쪽지는 update

        			/*
        			if (!Ex.isEmpty(strmemoid) && rcvCnt == 0)
        			{
        				//1.쪽지내용 update 수신자없음
        				//this.fnSave02();
        			}
        			else if(Ex.isEmpty(strmemoid) && rcvCnt > 0)
        			{
        				//3.쪽지내용 insert 수신자없음 신규저장
        				//this.fnSave();
        			}
        			else if(Ex.isEmpty(strmemoid) && rcvCnt > 0)
        			{
        				//4.쪽지내용 insert 수신자있음
        				//this.fnSave();
        			}
        			*/

        			this.fnSave();

        			//this.divFile.form.fnUploadFiles();
        			//Ex.core.pclose(this);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fn_initDataset = function() {
        	if(this.fvMemoId === null || this.fvMemoId === ""){
        		var nRow = this.ds_pt_memo.addRow();
        		this.ds_pt_memo.setColumn(nRow, "REG_USER_ID",   	this.ACT_USER_ID);
        		this.ds_pt_memo.setColumn(nRow, "REG_USER_NM",   	this.ACT_USER_NM);
        		this.ds_pt_memo.setColumn(nRow, "REG_USER_DEPT", 	this.ACT_DEPT_CD);
        		this.ds_pt_memo.setColumn(nRow, "ATTACH_YN",	 	"N");
        		this.ds_pt_memo.setColumn(nRow, "DEL_YN",		 	"N");
        		this.ds_pt_memo.setColumn(nRow, "NEW_MEMO_YN",	 	"Y");
        		//this.divWebEditor.form.setContent("<p>&lt;쪽지 내용을 입력 하세요&gt;</p>");
        		//this.divWebEditor.form.initCreate(false,"<p>&lt;쪽지 내용을 입력 하세요&gt;</p>");
        	}
        }

        // component init
        this.fnCompInit = function()
        {
        	//새로운 쪽지를 보내는 것인지 0950에서 호출한 한건지 분기
        	if (!Ex.isEmpty(this.getOwnerFrame().pMEMO_ID)) {
        	//if (this.getOwnerFrame().pMEMO_ID != undefined) {
        		//950에서 재발송,전달,답신 으로 온경우
        		pMEMO_ID = this.getOwnerFrame().pMEMO_ID.toString();
        		pflag = this.getOwnerFrame().pflag;	//MsgReSnd: 재발송, RcvMsgReply: 답장, MsgTrans: 전달
        		this.dsCond.setColumn(0,"MEMO_ID",pMEMO_ID);
        		this.divWebEditor.form.initCreate();
        		this.fnSearch();
        		//this.ds_pt_memo.clearData();
        		//this.ds_pt_memo_rcv.clearData();
        	} else {
        		/*
        		// 첨부파일 setting
        		var oParam = {
        			 sSvcId		: 'fileSvc'		// divFile callback 후처리용 서비스 ID
        			,limitMinCnt: 0					// 파일 최소 갯수; defualt 0
        			,limitCnt	: 3					// 파일 최대 갯수; default 5
        			,limitSize	: 100				// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        			,folderName	: 'fomm'			// 폴더명(업무명)
        			,tableName	: 'FOMM_MEMO'		// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        			,primaryKey1: ''				// 테이블 PK1(ex. 요청서ID 등)
        			,primaryKey2: ''				// 테이블 PK2 (복합 키인 경우 사용)
        			,primaryKey3: ''				// 테이블 PK3 (복합 키인 경우 사용)
        			,fileDownYn	: ''				// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        			,fileUpYn	: ''				// 파일업로드권한; 공백 시 메뉴의 추가 권한
        			,deleteYn	: ''				// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        		};
        		this.divFile.form.setConfig(this, oParam);
        		*/
        		this.divWebEditor.form.initCreate();
        		//this.divWebEditor.form.initCreate(false,"<p>쪽지 내용을 입력 하세요</p>");
        		this.ds_pt_memo.clearData();
        		this.ds_pt_memo_rcv.clearData();

        		this.fn_initDataset(); //데이터셋 초기 세팅
        	}
        	//this.divFile.form.setConfig(this, oParam);
        	this.edtMemoTitle.setFocus();
        }

        this.fn_SaveChk = function()
        {
        	// 컴포넌트가 필수입력 값일때 호출 information의 validation 과 validationGroup 값필요
        	if( !Ex.util.checkValidate(this, "input01") ) return false;

        	var nRow		= this.ds_pt_memo.rowposition;
        	var nRowType    = this.ds_pt_memo.getRowType(nRow);
        	var strValue	= "";

        	if(nRowType == 2 || nRowType == 4){	//추가 혹은 수정
        //		strValue = this.ds_pt_memo.getColumn(nRow, "MEMO_TITLE");
        // 		if(this.strValue == null || this.strValue == ""){
        // 			//alert("제목을 확인하시기 바랍니다.");
        // 			//return false;
        // 			var param = {
        // 				  id	: "AlertEmptyTitle"	//fnMsgAfter에서 식별자로 사용되는 ID
        // 				, msg	: "제목을 확인하시기 바랍니다."	//메시지 내용
        // 				, arrparam : []						//메시지의 변수에 들어갈 실제값
        // 				, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        // 			};
        // 			Ex.core.alert(this, param);
        // 			return false;
        // 		}

        		if(Ex.isEmpty(this.divRcvUserNm.form.edtUserNm2.value)){
        			var param = {
        				  id	: "AlertRcvUser"	//fnMsgAfter에서 식별자로 사용되는 ID
        				//, msg	: "수신자가 없습니다. \n저장하시겠습니까?"	//메시지 내용
        				, msg	: "수신자가 없습니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		strValue = this.ds_pt_memo.getColumn(nRow, "MEMO_CONTENTS");
        		//trace("this.ds_pt_memo.getColumn(nRow, 'MEMO_CONTENTS')    ::::: "   + strValue);
        		if(Ex.isEmpty(strValue) || strValue == "<p>&nbsp;</p>"){
        			//alert("내용을 확인하시기 바랍니다.");
        			//return false;
        			var param = {
        				  id	: "AlertEmptyConts"	//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "발송내용을 입력하셔야 쪽지발송이 가능합니다."	//메시지 내용
        				, arrparam : []						//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			//this.divWebEditor.form.webEditor.f
        			return false;
        		}

        	}


        //
        // 	var nFindRow = this.ds_pt_memo_rcv.findRow("RCV_TYPE_CD", "COMVSTA1");
        //
        //
        // 	trace("nFindRow : "+nFindRow);
        //
        // 	if(nFindRow < 0){
        // 		alert("수신자를 확인하시기 바랍니다.");
        // 		return false;
        // 	}

        // 	var nCnt = this.divFile.dsCond.getRowCount();
        //
        // 	for(var i=0; i<nCnt; i++){
        // 		this.divFile.dsCond.setColumn(i, "CHK", "1");
        // 	}
        //
        // 	if(this.div_req_basic.div_upload.countFile() > 0 || this.div_req_basic.div_upload.fn_getCopyTgtCnt() > 0){
        // 		this.ds_pt_memo.setColumn(nRow, "ATTACH_YN", 	"Y");
        // 	}else{
        // 		this.ds_pt_memo.setColumn(nRow, "ATTACH_YN", 	"N");
        // 	}

        	this.ds_pt_memo.setColumn(nRow, "ATTACH_YN", 	"N");
        	return true;
        }

        this.fnOpenMenu = function(obj)
        {
        	var sMenuId 	= obj.menuId;
        	trace('sMenuId :: ' + sMenuId);
        	var nRow		= this.objApp.gdsMenu.findRow("MENU_ID", sMenuId);
        	var sMenuUrl   	= this.objApp.gdsMenu.getColumn(nRow, "MENU_URL");

        	if(!Ex.isEmpty(sMenuUrl))
        	{
        		if( this.pdvMiddleMenu )
        		{
        			if(this.pdvMiddleMenu.toString().toUpperCase() == '[OBJECT POPUPDIV]')
        			{
        				this.pdvMiddleMenu.closePopup();
        			} else if (this.pdvMiddleMenu.toString().toUpperCase() == '[OBJECT DIV]')
        			{
        				this.pdvMiddleMenu.destroy();
        			}
        		}

        		var objParam = {};
        		objParam.menuId = sMenuId;
        		objParam.menuUrl = sMenuUrl;
        		Ex.core.openMenu(objParam);
        	} else {
        		trace("연결된 업무화면이 없습니다.");
        	}
        }

        //팝업창에서 수신,참조,숨은참조 선택 후 콜백 받는 함수
        this.selrcvUserCallBack = function(compId, dsRtnObj)
        {
        	this.fn_setRcvUserType(compId, dsRtnObj);
        }
        //TO,CC,BCC 수신자를 선택하면 콜 하는 함수
        //ds_userRcv_All 데이터셋에 수신자 별로 저장
        this.fn_setRcvUserType = function(compId, dsRtnObj)
        {
        	var rcvType = "";
        	var sid = "";
        	var RCV_TYPE_CD = "";

        	if (compId == "divRcvUserNm"){
        		rcvType = "TO";	//수신
        	} else if (compId == "divRefUserNm"){
        		rcvType = "CC";	//참조
        	} else if (compId == "divBldUserNm"){
        		rcvType = "BCC";	//숨은참조
        	}

        	this.ds_userRcv_All_tmp.clearData();	// TO,CC,BCC 상관없이 수신자를 선택했다면 tmp에 복사해온다
        	this.ds_userRcv_All_tmp.copyData(dsRtnObj);
        	trace(this.ds_userRcv_All_tmp.saveXML());

        	// 수신,참조 선택팝업에서 기존 선택된 수신,참조자를 취소하는 경우
        	if(this.ds_userRcv_All_tmp.rowcount == 0 && rcvType == "TO") {
        		this.userClearCallBack(compId,this.ds_userRcv_All);
        	} else if(this.ds_userRcv_All_tmp.rowcount == 0 && rcvType == "CC") {
        		this.userClearCallBack(compId,this.ds_userRcv_All);
        	}
        	//this.ds_userRcv

        //	수신,참조,숨은참조 선택후 사용자 팝업에서 return 받는 필드명
        // 	"RCV_USER_ID", 		USER_ID - 받아옴
        // 	"RCV_USER_NM", 		USER_NM - 받아옴
        // 	"RCV_USER_DEPT", 	DEPT_CD - 받아옴
        // 	"RCV_USER_DEPT_NM",	DEPT_NM - 받아옴

        	var strRcvUserNm = "";
        	var j = 0;
        	var nRowCnt = this.ds_userRcv_All_tmp.rowcount;
        	var nRowJungCnt = 0;

        	// copy된 ds_userRcv_All_tmp 에 RCV_TYPE_CD 컬럼을 추가하고 edtuserNm2에 수신자 이름을 넣어 준다
        	for( i = 0; i <nRowCnt ; i++ ) {
        		this.ds_userRcv_All_tmp.addColumn("RCV_TYPE_CD", "string");
        		this.ds_userRcv_All_tmp.addColumn("SND_USER_ID", "string");
        		this.ds_userRcv_All_tmp.addColumn("SND_USER_NM", "string");
        		this.ds_userRcv_All_tmp.addColumn("SND_USER_DEPT", "string");
        		this.ds_userRcv_All_tmp.addColumn("READ_YN", "string");
        		this.ds_userRcv_All_tmp.addColumn("NEW_MEMO_YN", "string");
        		this.ds_userRcv_All_tmp.addColumn("DEL_YN", "string");
        		this.ds_userRcv_All_tmp.addColumn("ROWFLAG", "string");

        		this.ds_userRcv_All_tmp.setColumn(i,"RCV_TYPE_CD", rcvType);			// 추가된 컬럼의 rcvtype을 바꿔줌 TO:수신, CC:참조, BCC:숨은참조
        		this.ds_userRcv_All_tmp.setColumn(i,"SND_USER_ID", this.ACT_USER_ID);	// SND_USER_ID
        		this.ds_userRcv_All_tmp.setColumn(i,"SND_USER_NM", this.ACT_USER_NM);	// SND_USER_NM
        		this.ds_userRcv_All_tmp.setColumn(i,"SND_USER_DEPT", this.ACT_DEPT_CD);	// SND_USER_DEPT
        		this.ds_userRcv_All_tmp.setColumn(i,"READ_YN", "N");					// READ_YN
        		this.ds_userRcv_All_tmp.setColumn(i,"NEW_MEMO_YN", "Y");				// NEW_MEMO_YN
        		this.ds_userRcv_All_tmp.setColumn(i,"DEL_YN", "N");						// DEL_YN
        		this.ds_userRcv_All_tmp.setColumn(i,"ROWFLAG", "I");					// ROWFLAG
        		this.ds_userRcv_All_tmp.setColumn(i,"REG_USER_ID", this.ACT_USER_ID);	// REG_USER_ID
        		this.ds_userRcv_All_tmp.setColumn(i,"REG_USER_NM", this.ACT_USER_NM);	// REG_USER_NM
        		this.ds_userRcv_All_tmp.setColumn(i,"REG_USER_DEPT", this.ACT_DEPT_CD);	// REG_USER_DEPT
        	}
        	//this.ds_userRcv_All.appendData(this.ds_userRcv_All_tmp,true);

        	if(this.ds_userRcv_All.rowcount < 1){								// 기존 Dataset에 선택된 수신자가 없는경우는 전체복사
        		this.ds_userRcv_All.copyData(this.ds_userRcv_All_tmp);
        		//trace("신규 row 개수 : "+this.ds_userRcv_All_tmp.rowcount);
        	} else {															// 기존 Dataset에 선택된 수신자가 1건이라도 있을경우 비교후 추가
        		for( i = 0; i <nRowCnt ; i++ )
        		{
        			sid = this.ds_userRcv_All_tmp.getColumn(i,"USER_ID");
        			//trace("기존 USER ID : " + this.ds_userRcv_All.getColumn(i,"USER_ID"));
        			//trace("기존 USER ID : " + this.ds_userRcv_All.getColumn(this.ds_userRcv_All.rowcount-1,"USER_ID"));

        			if (this.ds_userRcv_All.findRow("USER_ID",sid) == -1) 	// USER_ID로 중복체크
        			{
        				this.ds_userRcv_All.addRow();
        				this.ds_userRcv_All.copyRow(this.ds_userRcv_All.rowcount-1,this.ds_userRcv_All_tmp,i);
        				//trace("기존로우 + 추가한 로우 count : "+this.ds_userRcv_All.rowcount);
        				//trace("신규 추가되는 user ID : "+ this.ds_userRcv_All.getColumn(this.ds_userRcv_All.rowcount-1,"USER_ID"));
        			} else {
        				RCV_TYPE_CD = this.ds_userRcv_All.getColumn(this.ds_userRcv_All.findRow("USER_ID",sid),"RCV_TYPE_CD");
        				if (RCV_TYPE_CD != rcvType) nRowJungCnt++;
        			}
        		}
        	}
        	// edtUserNm2 수신자 이름 넣기
        // 	trace("필터전 : " + this.ds_userRcv_All.rowcount);
        // 	trace("rcvType : " + rcvType);
        	this.ds_userRcv_All.set_enableevent(false);
        	this.ds_userRcv_All.set_filterstr("RCV_TYPE_CD=='" + rcvType +"'");
        //	trace("필터후 : " + this.ds_userRcv_All.rowcount);

        	for( i = 0; i <this.ds_userRcv_All.rowcount ; i++ )
        	{
        		if( j > 0) strRcvUserNm += ",";
        		strRcvUserNm += this.ds_userRcv_All.getColumn(i,"USER_NM");
        		j++;
        	}

        	this.ds_userRcv_All.set_filterstr("");
        	this.ds_userRcv_All.set_enableevent(true);

        // 	trace("원복후 : " + this.ds_userRcv_All.rowcount);
        // 	trace("edtName2 : " + strRcvUserNm);

        	switch(rcvType)
        	{
        		case "TO" :
        			this.divRcvUserNm.form.edtUserNm2.set_value(strRcvUserNm);
        			//this.divRcvUserNm.set_enable(false);
        			break;

        		case "CC" :
        			this.divRefUserNm.form.edtUserNm2.set_value(strRcvUserNm);
        			//this.divRefUserNm.set_enable(false);
        			break;

        		case "BCC" :
        			this.divBldUserNm.form.edtUserNm2.set_value(strRcvUserNm);
        			//this.divBldUserNm.set_enable(false);
        			break;
        	}

        	if(nRowJungCnt >0){
        		Ex.core.toast(this, "중복된 수신,참조자는 제외 하였습니다.");
        	}
        //	trace(this.ds_userRcv_All.saveXML());
        	/*
        	for( i = 0; i <this.ds_userRcv_All.rowcount ; i++ )
        	{
        		trace("수신자 전체 : "+ i + "번 " + this.ds_userRcv_All.getColumn(i,"USER_NM"));
        	}
        	*/
        }

        //팝업창에서 수신,참조,숨은참조 선택 후 Clear 이벤트처리
        this.userClearCallBack = function(compId, dsRtnObj)
        {
        	this.ds_userRcv_All_tmp.clearData();
        	//trace("삭제전 : " + this.ds_userRcv_All.rowcount);
        	this.ds_userRcv_All.set_enableevent(false);

        	var rcvType;
        	if (compId == "divRcvUserNm"){
        		this.divRcvUserNm.form.edtUserNm2.set_value("");
        		rcvType = "TO";	//수신
        	} else if (compId == "divRefUserNm"){
        		this.divRefUserNm.form.edtUserNm2.set_value("");
        		rcvType = "CC";	//참조
        	} else if (compId == "divBldUserNm"){
        		this.divBldUserNm.form.edtUserNm2.set_value("");
        		rcvType = "BCC";	//숨은참조
        	}
        	// dataset에서 해당 레코드 삭제
        	var delRowCnt = this.ds_userRcv_All.rowcount;
        	for( i = delRowCnt-1; i >= 0; i-- )
        	{
        		if(this.ds_userRcv_All.getColumn(i,"RCV_TYPE_CD") == rcvType) this.ds_userRcv_All.deleteRow(i);
        		//trace("edtName2 : " + strRcvUserNm);
        	}
        	/*
        	switch(compId)
        	{
        		case "divRcvUserNm" :
        			this.divRcvUserNm.form.edtUserNm2.set_value("");
        			this.ds_userRcv_All.filter("RCV_TYPE_CD != 'TO'");		//수신 Clear
        			//this.divRcvUserNm.set_enable(false);
        		break;

        		case "divRefUserNm" :
        			this.divRefUserNm.form.edtUserNm2.set_value("");
        			this.ds_userRcv_All.filter("RCV_TYPE_CD != 'CC' ");		//참조 Clear
        			//this.divRefUserNm.set_enable(false);
        		break;

        		case "divBldUserNm" :
        			this.divBldUserNm.form.edtUserNm2.set_value("");
        			this.ds_userRcv_All.filter("RCV_TYPE_CD != 'BCC'");		//숨은잠조 Clear
        			//this.divBldUserNm.set_enable(false);
        		break;
        	}
        	*/
        	this.ds_userRcv_All.set_enableevent(true);
        	//trace("삭제후 : " + this.ds_userRcv_All.rowcount);
        }

        // 0950화면에서 재발송, 전달, 답신 으로 넘어왔을때으로 넘어왔을때
        this.fnMemoReset = function() {

        	this.ds_userRcv_All.clearData(); 					//받는 사람 전체를 데이터셋에 복사
        	this.ds_userRcv_All.copyData(this.ds_pt_memo_rcv);

        	var strTOUserNm = "", strCCUserNm = "", strBCCUserNm = "";
        	var TOcnt = 0, CCcnt = 0, BCCcnt = 0 ;
        	var nRowCnt = this.ds_pt_memo_rcv.rowcount;
        	var rcvType = "";
        	var BCCYN = "";

        	// TO, CC, BCC SET
        	var rcvChildForm = this.divRcvUserNm.form;
        	var refChildForm = this.divRefUserNm.form;
        	var bldChildForm = this.divBldUserNm.form;

        	this.ds_userRcv_All.addColumn("DEPT_CD", "string"); //받는사람 부서코드컬럼 생성

        	//pflag = this.getOwnerFrame().pflag;	//MsgReSnd: 재발송, RcvMsgReply: 답장, MsgTrans: 전달
        	//답장일 경우 보낸사람만 수신자
        	//재발송일경우 기존과 똑같은 수신자
        	//전달일 경우 수신자 없음

        	if (pflag == "MsgReSnd"){
        		//alert("MsgReSnd");
        		//for문 돌면서 각 user이름 SET
        		for( i = 0; i <nRowCnt ; i++ ) {

        			rcvType =  this.ds_pt_memo_rcv.getColumn(i,"RCV_TYPE_CD");
        			this.ds_userRcv_All.setColumn(i,"DEPT_CD",this.ds_userRcv_All.getColumn(i,"RCV_USER_DEPT"));
        			this.ds_userRcv_All.setColumn(i,"ROWFLAG","I");	//재발송,전달 으로 왔을경우 기존 수신자도 새롭게 보내야 하므로 insert

        			switch(rcvType) {
        			case 'TO' 	:
        				if( TOcnt > 0) strTOUserNm += ",";
        				strTOUserNm += this.ds_pt_memo_rcv.getColumn(i,"RCV_USER_NM");
        				TOcnt++
        				break;
        			case 'CC' 	:
        				if( CCcnt > 0) strCCUserNm += ",";
        				strCCUserNm += this.ds_pt_memo_rcv.getColumn(i,"RCV_USER_NM");
        				CCcnt++
        				break;
        			case 'BCC' 	:
        				// 숨은 참조인 USER가 상세화면을 보고 있는 경우라면 TO,CC,BCC 다 보임
        				if(this.ACT_USER_ID == this.ds_pt_memo_rcv.getColumn(i,"RCV_USER_ID")) BCCYN = "Y";

        				if( BCCcnt > 0) strBCCUserNm += ",";
        				strBCCUserNm += this.ds_pt_memo_rcv.getColumn(i,"RCV_USER_NM");
        				BCCcnt++
        				break;
        			}
        		}
        		rcvChildForm.edtUserNm.set_value("");
        		rcvChildForm.edtUserNm2.set_value(strTOUserNm);
        		refChildForm.edtUserNm.set_value("");
        		refChildForm.edtUserNm2.set_value(strCCUserNm);

        		bldChildForm.edtUserNm.set_value("");

        	} else if (pflag == "RcvMsgReply"){
        		//alert("RcvMsgReply");
        		//수신자를 보낸사람으로 set
        		this.ds_userRcv_All.deleteAll();
        		this.ds_userRcv_All.setAddRow();
        		this.ds_userRcv_All.setColumn(0,"RCV_TYPE_CD","TO");
        		this.ds_userRcv_All.setColumn(0,"DEPT_CD",this.ds_pt_memo_rcv.getColumn(0,"SND_USER_DEPT"));
        		this.ds_userRcv_All.setColumn(0,"USER_ID",this.ds_pt_memo_rcv.getColumn(0,"SND_USER_ID"));
        		this.ds_userRcv_All.setColumn(0,"USER_NM",this.ds_pt_memo_rcv.getColumn(0,"SND_USER_NM"));
        		this.ds_userRcv_All.setColumn(0,"READ_YN", "N");
        		this.ds_userRcv_All.setColumn(0,"NEW_MEMO_YN", "Y");
        		this.ds_userRcv_All.setColumn(0,"DEL_YN", "N");
        		this.ds_userRcv_All.setColumn(0,"SND_USER_ID", this.ACT_USER_ID);	// SND_USER_ID
        		this.ds_userRcv_All.setColumn(0,"SND_USER_NM", this.ACT_USER_NM);	// SND_USER_NM
        		this.ds_userRcv_All.setColumn(0,"SND_USER_DEPT", this.ACT_DEPT_CD);	// SND_USER_DEPT
        		this.ds_userRcv_All.setColumn(0,"REG_USER_ID", this.ACT_USER_ID);	// REG_USER_ID
        		this.ds_userRcv_All.setColumn(0,"REG_USER_NM", this.ACT_USER_NM);	// REG_USER_NM
        		this.ds_userRcv_All.setColumn(0,"REG_USER_DEPT", this.ACT_DEPT_CD);	// REG_USER_DEPT
        		//rcvChildForm.edtUserNm2.set_value(this.ds_pt_memo.getColumn(0,"REG_USER_ID"));
        		rcvChildForm.edtUserNm.set_value("");
        		rcvChildForm.edtUserNm2.set_value(this.ds_userRcv_All.getColumn(0,"USER_NM"));
        	} else if ("MsgTrans"){
        		//alert("MsgTrans");
        		this.ds_userRcv_All.deleteAll();
        	}
        /*
        	rcvChildForm.edtUserNm.set_value("");
        	rcvChildForm.edtUserNm2.set_value(strTOUserNm);
        	refChildForm.edtUserNm.set_value("");
        	refChildForm.edtUserNm2.set_value(strCCUserNm);

        	bldChildForm.edtUserNm.set_value("");
        */
        	if (BCCYN = "Y") {
        		bldChildForm.edtUserNm2.set_value(strBCCUserNm);
        	} else {
        		bldChildForm.edtUserNm2.set_value("");
        	}
        	/*
        	rcvChildForm.edtUserNm.set_enable(false);
        	rcvChildForm.btnSearchPop.set_enable(false);
        	rcvChildForm.edtUserNm2.set_enable(false);

        	refChildForm.edtUserNm.set_enable(false);
        	refChildForm.btnSearchPop.set_enable(false);
        	refChildForm.edtUserNm2.set_enable(false);

        	bldChildForm.edtUserNm.set_enable(false);
        	bldChildForm.btnSearchPop.set_enable(false);
        	bldChildForm.edtUserNm2.set_enable(false);
        	*/
        	//pflag : MsgReSnd - 다시보내기, RcvMsgReply - 답신,  MsgTrans -전달
        	var reqCont    = "";
        	var title      = "";
        	var sendTime   = this.ds_pt_memo.getColumn(0, "SEND_TIME");

        	reqCont += "<p><br><br></p>";
        	reqCont += "<p>[원본글]========================================================================</p>";
        	reqCont += "<p>*  발신자 : " + this.ds_pt_memo.getColumn(0, "REG_USER_NM") + "</p>";
        	//reqCont += "<p>*  발신시각 : " + this.gfn_stringToDateFormat(this.ds_pt_memo.getColumn(0, "SEND_TIME")) + "</p>";
        	if(!Ex.isEmpty(sendTime)){
        		reqCont += "<p>*  발신시각 : " + Ex.util.getMaskFormatString(Ex.util.strToDate(sendTime), "yyyy-MM-dd HH:mm") + "</p>";
        	}
        	//reqCont += "<p>*  발신시각 : "  + "2025-02-21 15:27"
        	reqCont += "<p><br></p>";
        	reqCont += this.ds_pt_memo.getColumn(0, "MEMO_CONTENTS");

        	//this.edtMemoTitle.value = this.ds_pt_memo.getColumn(0,"MEMO_TITLE");
        	//var webConts = this.ds_pt_memo.getColumn(0, 'MEMO_CONTENTS')||'';
        	trace("pflag==========================================" + pflag);
        	switch(pflag) {
        		case 'MsgReSnd' 	:
        			M_title = "[재발송] "+this.ds_pt_memo.getColumn(0,"MEMO_TITLE");
        			this.edtMemoTitle.value = M_title;
        			this.divWebEditor.form.setContent(reqCont, false);
        			//this.divWebEditor.form.getContent();
        			//this.divWebEditor.form.setContent(webConts, false);
        			break;
        		case 'RcvMsgReply' 	:
        			M_title = "[답신] "+this.ds_pt_memo.getColumn(0,"MEMO_TITLE");
        			this.edtMemoTitle.value = M_title;
        			this.divWebEditor.form.setContent(reqCont, false);
        			break;
        		case 'MsgTrans'		:
        			M_title = "[전달] "+this.ds_pt_memo.getColumn(0,"MEMO_TITLE");
        			this.edtMemoTitle.value = M_title;
        			this.divWebEditor.form.setContent(reqCont, false);
        			break;
        		case 'temp_memo'		:
        			M_title = this.ds_pt_memo.getColumn(0,"MEMO_TITLE");
        			this.edtMemoTitle.value = M_title;
        			this.divWebEditor.form.setContent(this.ds_pt_memo.getColumn(0, "MEMO_CONTENTS"), false);
        			break;
        	}
        }

        this.setAlarmParam = function(){
        	//trace("------------- fnSendAlarm --------------");
        	var nRowCnt = this.ds_userRcv_All.rowcount;
        	var alarmTypeCd = "CDALM03";	//쪽지용 코드테이블 참조
        	//var alarmRef = this.getOwnerFrame().url;
        	var alarmRef = "fomm::FOMM0950_W.xfdl";
        	var alarmConts = this.ACT_USER_NM + "님 으로 부터 쪽지가 도착했습니다.";

        	var paramArr = [];
        	var params = {"pPostNo": this.ds_new_memo_id.getColumn(0, "MEMO_ID").toString(), "pPostMtType": "RCV"};
        	paramArr.push(params);
        	var alarmParams = JSON.stringify(paramArr); // 알림발생 화면을 열기 위한 파라미터 전달

        	// memo 수신자 id를 넣어준다.
        	for( i = 0; i <nRowCnt ; i++ )
        	{
        		var rowpos = this.dsAlarm.setAddRow();
        		this.dsAlarm.setColumn(rowpos, "USER_ID",this.ds_userRcv_All.getColumn(i,"USER_ID"));
        		this.dsAlarm.setColumn(rowpos, "ALARM_TYPE_CD", alarmTypeCd);
        		this.dsAlarm.setColumn(rowpos, "ALARM_REF", alarmRef);
        		this.dsAlarm.setColumn(rowpos, "ALARM_CONTS", alarmConts);
        		this.dsAlarm.setColumn(rowpos, "ALARM_PARAMS", alarmParams);
        	}

        	//var rowpos = this.dsAlarm.setAddRow();

        	//var postMtTitle = this.dsPostDt.getColumn(0, 'POST_MT_TITLE');
        	//var userNm = this.dsPostDt.getColumn(0, 'FRNM');
        	//var deptNm = this.dsPostDt.getColumn(0, 'FR_DEPT_NM');
        	//var alarmTypeCd = (this.pReplyFlag == true) ? 'CDALM05' : 'CDALM06'; // 답글이면 05, 그냥 글이면 06

        	//var alarmTypeCd = 'CDALM03';	//쪽지용 코드테이블 참조
        	//var alarmRef = this.getOwnerFrame().url;
        	//var alarmConts = `${postMtTitle}에 ${userNm}(${deptNm})님이 게시글을 작성했습니다.`;
        	//var alarmConts = this.ACT_USER_NM + '님 으로 부터 쪽지가 도착했습니다.';

        	// dsAlarm 에 데이터 세팅
        	//this.dsAlarm.setColumn(rowpos, "USER_ID", Ex.util.getSession('gvUserId'));
        	//this.dsAlarm.setColumn(rowpos, "USER_ID", "e1002229");
        	//this.dsAlarm.setColumn(rowpos, "ALARM_TYPE_CD", alarmTypeCd);
        	//this.dsAlarm.setColumn(rowpos, "ALARM_REF", alarmRef);
        	//this.dsAlarm.setColumn(rowpos, "ALARM_CONTS", alarmConts);

        	this.fnSendAlarm(); // 트랜잭션
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	this.ds_pt_memo.setColumn(0, "MEMO_TITLE", this.edtMemoTitle.value);	// 쪽지 제목
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성

        	switch(obj.name)
        	{
        		case "btnSave" :

        			var rowpos = this.ds_pt_memo.rowposition;
        			var webConts = this.divWebEditor.form.getContent();
        			this.ds_pt_memo.setColumn(rowpos, 'MEMO_CONTENTS', webConts);		// 쪽지 내용
        			// COMESTA1 : 임시저장 COMESTA2 : 발송 -----> 1, 2 로 변경
        			this.ds_pt_memo.setColumn(0, "MEMO_STATUS_CD", 	"1");	//1 : 임시저장, 2 : 발송완료

        			//임시저장일 경우 수신자가 없어도 저장 할 수 있도록 처리, 발송일 경우만 vali 체크함
        			//if(!this.fn_SaveChk()) return;

        			/*
        			if(this.divFile.form.isUpdateForm())
        			{
        				this.divFile.form.fnUploadFiles();
        			}
        			*/
        			var param = {
        				id : "saveConfirm"					//fnMsgAfter에서 식별자로 사용되는 ID itemPopValiAlert-am100_D00.xfdl
        			  , msg : "임시 저장 하시겠습니까?"			//메시지 내용
        			  , arrparam : ['']						//메시지의 변수에 들어갈 실제값
        			  , msgtype : "I"};						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert,
        													//'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용), 'E' : 'X' icon; Error alert;
        			Ex.core.confirm(this, param);
        			break;

        		case "btnSend" :

        			var rowpos = this.ds_pt_memo.rowposition;
        			var webConts = this.divWebEditor.form.getContent();
        			this.ds_pt_memo.setColumn(rowpos, 'MEMO_CONTENTS', webConts);
        			trace("webEditor 내용 확인 :::: " + this.ds_pt_memo.getColumn(rowpos,"MEMO_CONTENTS"));
        			this.ds_pt_memo.setColumn(0, "MEMO_STATUS_CD", 	"2");	//1 : 임시저장, 2 : 발송
        			this.ds_pt_memo.setColumn(0, "NEW_MEMO_YN",	 	"Y");	//발신함 리스트의 제목에 NEW_MEMO_YN = Y 이면 굵은글씨 표현(사용안하기로 협의)

        			if(!this.fn_SaveChk()) return;
        			/*
        			if(this.divFile.form.isUpdateForm())
        			{
        				this.divFile.form.fnUploadFiles();
        			}
        			*/
        			var param = {
        				id : "saveConfirm"					//fnMsgAfter에서 식별자로 사용되는 ID itemPopValiAlert-am100_D00.xfdl
        			  , msg : "쪽지를 발송 하시겠습니까?"			//메시지 내용
        			  , arrparam : ['']						//메시지의 변수에 들어갈 실제값
        			  , msgtype : "I"};						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert,
        													//'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용), 'E' : 'X' icon; Error alert;
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :			// 닫기
        			//var nextFommId = "FOMM0910_W";
        			//var nextFommUrl = "fomm::FOMM0910_W.xfdl";
        			//var parentFrame = this.getOwnerFrame().parent;
        			//Ex.core.pclose(this,nextFommUrl);

        			//var parentFrame = this.getOwnerFrame().parent;
        			//this.dsSendChk.setColumn(0,"MemoSaveYN","Y");
        			//this.parentFrame.fnMemoSaveYN(dsSendChk);

        			//this.dsSendChk.addRow();
        			//this.dsSendChk.setColumn(0,"MemoSaveYN","Y");
        			//this.parent._formObj.selrcvUserCallBack(this.parent.id, this.dsUser);
        			//this.parent._formObj.fnMemoSaveYN("aaaaaaa");

        			//menuId, menuUrl 두개를 보내 함수 호출 하면 언제나 가능
         			//memuID만 태워서 보내는 호출은 콜백처리 할때만 가능한듯
        // 			var obj = {menuId : '684'};			//수신함 684 발신함 685
        // 			this.fnOpenMenu(obj);

        //			var objParam = {};
        //			var objParam = {menuId : '684', menuUrl : 'fomm::FOMM0920_W.xfdl'};//수신함 684 발신함 685
        //			objParam.menuId = '684';
        //			objParam.menuUrl = 'fomm::FOMM0920_W.xfdl';
        // 			objParam.menuId = '685';
        // 			objParam.menuUrl = 'fomm::FOMM0910_W.xfdl';
        //			Ex.core.openMenu(objParam);
        			//this.opener.fnMemoSaveYN(dsSendChk);

        			Ex.core.pclose(this,"close");
        			//Ex.core.pclose(this,"FOMM0910_W");
        			//Ex.core.pclose(this,"fomm::FOMM0910_W.xfdl");
        			break;
        	}
        }

        //나에게 쓰기 클릭시
        this.chkSelfSnd_onclick = function(obj,e)
        {
        	this.ds_userRcv.clearData();
        	this.ds_userRef.clearData();
        	this.ds_userBld.clearData();

        	this.ds_pt_memo_rcv.clearData();

        	var childFrame = this.divRcvUserNm.form;

        	if(this.chkSelfSnd.value == "1"){

        		this.divRcvUserNm.form.edtUserNm.set_value("");
        		this.divRcvUserNm.form.edtUserNm2.set_value(this.ACT_USER_NM);
        		this.divRefUserNm.form.edtUserNm.set_value("");
        		this.divRefUserNm.form.edtUserNm2.set_value("");
        		this.divBldUserNm.form.edtUserNm.set_value("");
        		this.divBldUserNm.form.edtUserNm2.set_value("");

        		this.divRcvUserNm.set_enable(false);
        		this.divRefUserNm.set_enable(false);
        		this.divBldUserNm.set_enable(false);

        		var nRow = this.ds_userRcv_All.addRow();

        		this.ds_userRcv_All.setColumn(nRow,"RCV_TYPE_CD", "TO");			// 추가된 컬럼의 rcvtype을 바꿔줌 TO:수신, CC:참조, BCC:숨은참조
        		this.ds_userRcv_All.setColumn(nRow,"SND_USER_ID", this.ACT_USER_ID);	// SND_USER_ID
        		this.ds_userRcv_All.setColumn(nRow,"SND_USER_NM", this.ACT_USER_NM);	// SND_USER_NM
        		this.ds_userRcv_All.setColumn(nRow,"SND_USER_DEPT", this.ACT_DEPT_CD);	// SND_USER_DEPT
        		this.ds_userRcv_All.setColumn(nRow,"READ_YN", "N");					// READ_YN
        		this.ds_userRcv_All.setColumn(nRow,"NEW_MEMO_YN", "Y");				// NEW_MEMO_YN
        		this.ds_userRcv_All.setColumn(nRow,"DEL_YN", "N");						// DEL_YN
        		this.ds_userRcv_All.setColumn(nRow,"ROWFLAG", "I");					// ROWFLAG

        		this.ds_userRcv_All.setColumn(nRow, "USER_ID", 	this.ACT_USER_ID);
        		this.ds_userRcv_All.setColumn(nRow, "USER_NM", 	this.ACT_USER_NM);
        		this.ds_userRcv_All.setColumn(nRow, "DEPT_CD", 	this.ACT_DEPT_CD);
        		this.ds_userRcv_All.setColumn(nRow, "DEPT_NM",	this.ACT_DEPT_NM);
        		// 	"RCV_USER_ID", 		USER_ID - 받아옴
        		// 	"RCV_USER_NM", 		USER_NM - 받아옴
        		// 	"RCV_USER_DEPT", 	DEPT_CD - 받아옴
        		// 	"RCV_USER_DEPT_NM",	DEPT_NM - 받아옴
        		//this.div_req_basic.div_rcvUserNm.setDataset(this.ds_userRcv);
        		//childFrame.edtUserNm2.set_value(this.ACT_USER_NM);
        		this.divBottom.form.btnSave.set_visible(false);

        		//alert("'나에게 쓰기'의 경우 작성과 동시에 발송하셔야 합니다.");

        	}else{
        		this.divRcvUserNm.set_enable(true);
        		this.divRefUserNm.set_enable(true);
        		this.divBldUserNm.set_enable(true);

        		//childFrame.edtUserNm2.set_value(null);
        		this.divRcvUserNm.form.edtUserNm.set_value(null);
        		this.divRcvUserNm.form.edtUserNm2.set_value(null);
        		this.divRefUserNm.form.edtUserNm.set_value(null);
        		this.divRefUserNm.form.edtUserNm2.set_value(null);
        		this.divBldUserNm.form.edtUserNm.set_value(null);
        		this.divBldUserNm.form.edtUserNm2.set_value(null);

        		this.divBottom.form.btnSave.set_visible(true);
        	}
        };

        //
        // this.btn00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	trace("=================================btnCloase_btn00=================================");
        // 	var obj = {menuId : 684};			//수신함 684 발신함 685
        // 	this.fnOpenMenu(obj);
        // };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.chkSelfSnd.addEventHandler("onclick",this.chkSelfSnd_onclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSend.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsAlarm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0900_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
