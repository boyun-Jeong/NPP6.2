(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAD0310");
            this.set_visible("true");
            this.set_titletext("나의정보관리");
            this.getSetter("classname").set("PAD0310");
            this.getSetter("scrollbars").set("autoboth");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,735);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("RESULT0", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWINDEX\" type=\"INT\" size=\"255\"/><Column id=\"STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"RESULT\" type=\"INT\" size=\"255\"/><Column id=\"ERROR\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"string\" size=\"9\"/><Column id=\"USER_NAME\" type=\"string\" size=\"100\"/><Column id=\"JBC_POSI_ID\" type=\"string\" size=\"4\"/><Column id=\"JBC_POSI\" type=\"string\" size=\"100\"/><Column id=\"HDOF_YN\" type=\"string\" size=\"1\"/><Column id=\"EMPMT_DT\" type=\"string\" size=\"8\"/><Column id=\"RTRM_DT\" type=\"string\" size=\"8\"/><Column id=\"INFO_DEPT_ID\" type=\"string\" size=\"6\"/><Column id=\"INFO_DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_ID\" type=\"string\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"ADDRESS_1\" type=\"string\" size=\"200\"/><Column id=\"ADDRESS_2\" type=\"string\" size=\"200\"/><Column id=\"CONTACT_PHONE\" type=\"string\" size=\"400\"/><Column id=\"NH_ACTIVE\" type=\"string\" size=\"3\"/><Column id=\"APNT_DT\" type=\"string\" size=\"100\"/><Column id=\"JBC_JID\" type=\"string\" size=\"4\"/><Column id=\"JBC_JNAME\" type=\"string\" size=\"30\"/><Column id=\"USER_CHN_DCD\" type=\"string\" size=\"100\"/><Column id=\"FC_DTY_CD\" type=\"string\" size=\"100\"/><Column id=\"FC_DTY_NM\" type=\"string\" size=\"200\"/><Column id=\"USE_ST_DT\" type=\"string\" size=\"8\"/><Column id=\"USE_ED_DT\" type=\"string\" size=\"8\"/><Column id=\"ACC_USE_YN\" type=\"string\" size=\"4\"/><Column id=\"CONTACT_MOBILE\" type=\"string\" size=\"80\"/><Column id=\"USER_EMAD\" type=\"string\" size=\"80\"/><Column id=\"CONTACT_OFFICE\" type=\"string\" size=\"20\"/><Column id=\"POSTCODE\" type=\"string\" size=\"7\"/><Column id=\"NH_GUBUN\" type=\"string\" size=\"1\"/><Column id=\"NH_STATUS\" type=\"string\" size=\"3\"/><Column id=\"BUJAE_YN\" type=\"string\" size=\"255\"/><Column id=\"BUJAE_STIME\" type=\"string\" size=\"14\"/><Column id=\"BUJAE_ETIME\" type=\"string\" size=\"14\"/><Column id=\"BUJAE_SAYU\" type=\"string\" size=\"30\"/><Column id=\"DAEJIC_ID\" type=\"string\" size=\"9\"/><Column id=\"DAEJIC_NM\" type=\"string\" size=\"20\"/><Column id=\"MY_CHR_ID1\" type=\"string\" size=\"9\"/><Column id=\"MY_CHR_NM1\" type=\"string\" size=\"20\"/><Column id=\"MY_CHR_ID2\" type=\"string\" size=\"9\"/><Column id=\"MY_CHR_NM2\" type=\"string\" size=\"20\"/><Column id=\"MY_MGR_ID\" type=\"string\" size=\"9\"/><Column id=\"MY_MGR_NM\" type=\"string\" size=\"20\"/><Column id=\"LAST_LOGIN_TIME\" type=\"string\" size=\"14\"/><Column id=\"NH_PASSWD\" type=\"string\" size=\"60\"/><Column id=\"REG_USER_ID\" type=\"string\" size=\"9\"/><Column id=\"REG_USER_NM\" type=\"string\" size=\"20\"/><Column id=\"REG_STIME\" type=\"string\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"string\" size=\"9\"/><Column id=\"LMOD_USER_NM\" type=\"string\" size=\"20\"/><Column id=\"SYSMODTIME\" type=\"string\" size=\"14\"/><Column id=\"USER_TYPE\" type=\"string\" size=\"20\"/><Column id=\"NH_JOBDESC\" type=\"string\" size=\"200\"/><Column id=\"NH_JOB_CD\" type=\"string\" size=\"10\"/><Column id=\"UPMU_NM\" type=\"string\" size=\"2000\"/><Column id=\"UP_DEPT_ID\" type=\"string\" size=\"10\"/><Column id=\"JBC_JNAME_ORG\" type=\"string\" size=\"30\"/><Column id=\"IN_FLAG\" type=\"string\" size=\"2\"/><Column id=\"SEND_SMS_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SEND_EMAIL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SEND_TALK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SIGN_ORG_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_NEW_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PJT_ID\" type=\"STRING\" size=\"16\"/><Column id=\"MAIN_PJT_NAME\" type=\"STRING\" size=\"200\"/><Column id=\"IMG_ORG_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_NEW_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"OM_COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ORG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ORG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jbc_posi", this);
            obj._setContents("<ColumnInfo><Column id=\"JBC_POSI_ID\" type=\"string\" size=\"8\"/><Column id=\"JBC_POSI\" type=\"string\" size=\"100\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jbc", this);
            obj._setContents("<ColumnInfo><Column id=\"JBC_JID\" type=\"string\" size=\"4\"/><Column id=\"JBC_JNAME_ORG\" type=\"string\" size=\"30\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfoChck", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"string\" size=\"9\"/><Column id=\"USER_NAME\" type=\"string\" size=\"100\"/><Column id=\"JBC_POSI_ID\" type=\"string\" size=\"4\"/><Column id=\"JBC_POSI\" type=\"string\" size=\"100\"/><Column id=\"HDOF_YN\" type=\"string\" size=\"1\"/><Column id=\"EMPMT_DT\" type=\"string\" size=\"8\"/><Column id=\"RTRM_DT\" type=\"string\" size=\"8\"/><Column id=\"INFO_DEPT_ID\" type=\"string\" size=\"6\"/><Column id=\"INFO_DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_ID\" type=\"string\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"ADDRESS_1\" type=\"string\" size=\"200\"/><Column id=\"ADDRESS_2\" type=\"string\" size=\"200\"/><Column id=\"CONTACT_PHONE\" type=\"string\" size=\"400\"/><Column id=\"NH_ACTIVE\" type=\"string\" size=\"3\"/><Column id=\"APNT_DT\" type=\"string\" size=\"100\"/><Column id=\"JBC_JID\" type=\"string\" size=\"4\"/><Column id=\"JBC_JNAME\" type=\"string\" size=\"30\"/><Column id=\"USER_CHN_DCD\" type=\"string\" size=\"100\"/><Column id=\"FC_DTY_CD\" type=\"string\" size=\"100\"/><Column id=\"FC_DTY_NM\" type=\"string\" size=\"200\"/><Column id=\"USE_ST_DT\" type=\"string\" size=\"8\"/><Column id=\"USE_ED_DT\" type=\"string\" size=\"8\"/><Column id=\"ACC_USE_YN\" type=\"string\" size=\"4\"/><Column id=\"CONTACT_MOBILE\" type=\"string\" size=\"80\"/><Column id=\"USER_EMAD\" type=\"string\" size=\"80\"/><Column id=\"CONTACT_OFFICE\" type=\"string\" size=\"20\"/><Column id=\"POSTCODE\" type=\"string\" size=\"7\"/><Column id=\"NH_GUBUN\" type=\"string\" size=\"1\"/><Column id=\"NH_STATUS\" type=\"string\" size=\"3\"/><Column id=\"BUJAE_YN\" type=\"string\" size=\"1\"/><Column id=\"BUJAE_STIME\" type=\"string\" size=\"14\"/><Column id=\"BUJAE_ETIME\" type=\"string\" size=\"14\"/><Column id=\"BUJAE_SAYU\" type=\"string\" size=\"30\"/><Column id=\"DAEJIC_ID\" type=\"string\" size=\"9\"/><Column id=\"DAEJIC_NM\" type=\"string\" size=\"20\"/><Column id=\"MY_CHR_ID1\" type=\"string\" size=\"9\"/><Column id=\"MY_CHR_NM1\" type=\"string\" size=\"20\"/><Column id=\"MY_CHR_ID2\" type=\"string\" size=\"9\"/><Column id=\"MY_CHR_NM2\" type=\"string\" size=\"20\"/><Column id=\"MY_MGR_ID\" type=\"string\" size=\"9\"/><Column id=\"MY_MGR_NM\" type=\"string\" size=\"20\"/><Column id=\"LAST_LOGIN_TIME\" type=\"string\" size=\"14\"/><Column id=\"NH_PASSWD\" type=\"string\" size=\"60\"/><Column id=\"REG_USER_ID\" type=\"string\" size=\"9\"/><Column id=\"REG_USER_NM\" type=\"string\" size=\"20\"/><Column id=\"REG_STIME\" type=\"string\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"string\" size=\"9\"/><Column id=\"LMOD_USER_NM\" type=\"string\" size=\"20\"/><Column id=\"SYSMODTIME\" type=\"string\" size=\"14\"/><Column id=\"USER_TYPE\" type=\"string\" size=\"20\"/><Column id=\"NH_JOBDESC\" type=\"string\" size=\"200\"/><Column id=\"NH_JOB_CD\" type=\"string\" size=\"10\"/><Column id=\"UPMU_NM\" type=\"string\" size=\"2000\"/><Column id=\"UP_DEPT_ID\" type=\"string\" size=\"10\"/><Column id=\"JBC_JNAME_ORG\" type=\"string\" size=\"30\"/><Column id=\"IN_FLAG\" type=\"string\" size=\"2\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_license", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LICS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQU_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_compHist", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WK_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"WK_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_license_valid", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LICS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQU_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LICS_NM\">title:자격증명,required:true,maxlength:100</Col><Col id=\"BIGO\">title:비고,required:false,maxlength:200</Col><Col id=\"ACQU_DT\">title:취득일,required:true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_compHist_valid", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WK_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"WK_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMP_NM\">title:회사명,required:true,maxlength:100</Col><Col id=\"JOB_NM\">title:업무명,required:true,maxlength:100</Col><Col id=\"WK_SDT\">title:근무시작일,required:true</Col><Col id=\"WK_EDT\">title:근무종료일,required:true</Col><Col id=\"BIGO\">title:비고,required:false,maxlength:200</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("RESULT01", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWINDEX\" type=\"INT\" size=\"255\"/><Column id=\"STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"RESULT\" type=\"INT\" size=\"255\"/><Column id=\"ERROR\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("RESULT02", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWINDEX\" type=\"INT\" size=\"255\"/><Column id=\"STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"RESULT\" type=\"INT\" size=\"255\"/><Column id=\"ERROR\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45","30","219",null,"120","30",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","30","120",null,"34","30",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("H20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","30","21",null,"34","30",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","30","21","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_userId","168","26","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_tooltiptext("edit");
            obj.getSetter("validate").set("title:사번,required:true");
            obj.set_cssclass("essential");
            obj.set_maxlength("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","440","21","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","30","54",null,"34","30",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","30","54","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","30","87",null,"34","30",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","30","87","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","440","87","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("직명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","30","153",null,"34","30",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","30","153","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_userEmad","168","158","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_tooltiptext("edit");
            obj.set_maxlength("80");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","30","186",null,"34","30",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","30","186","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("내선번호");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","440","186","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailLabel_essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","30","459","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("대직설정");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","160","491","280","34",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","30","491","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("대직자");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild_essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","570","491","280","34",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","440","491","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("대직사유");
            obj.set_cssclass("sta_WF_DetailLabel_essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","30","120","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jobDesc","168","125","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_tooltiptext("edit");
            obj.set_maxlength("200");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_bujaeYn","120","459","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_contactMobile","578","191","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.getSetter("mask").set("###-####-####");
            obj.set_type("string");
            obj.set_readonly("false");
            obj.getSetter("validate").set("title:휴대폰,required:true,minlength:11");
            obj.set_enable("false");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Div("div_searchDept","578","59","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("comm::commSearchDept.xfdl");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","440","54","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_jbcPosi","168","92","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_displayrowcount("5");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_jbc_posi");
            obj.set_displaynulltext("선택하세요");
            obj.set_enable("false");
            obj.getSetter("validate").set("title:직급,required:true");
            obj.set_datacolumn("JBC_POSI");
            obj.set_codecolumn("JBC_POSI");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_jbc","578","92","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_displaynulltext("선택하세요");
            obj.set_innerdataset("ds_jbc");
            obj.set_codecolumn("JBC_JID");
            obj.set_datacolumn("JBC_JNAME_ORG");
            obj.set_displayrowcount("5");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            obj.getSetter("validate").set("title:직책,required:true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_userName","168","59","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_tooltiptext("edit");
            obj.getSetter("validate").set("title:성명,required:true");
            obj.set_cssclass("essential");
            obj.set_maxlength("100");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_nhPasswd","578","26","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_maxlength("15");
            obj.set_tooltiptext("edit");
            obj.getSetter("validate").set("title:비밀번호,required:true,minlength:5");
            obj.set_enable("false");
            obj.set_cssclass("essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_userIdChk","354","26","78","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("중복체크");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_license","30","1000",null,"166","30",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","0",null,null,null,null,null,this.div_license.form);
            obj.set_taborder("8");
            obj.set_text("h30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_license.addChild(obj.name, obj);

            obj = new Static("Static19","0","27","103","21",null,null,null,null,null,null,this.div_license.form);
            obj.set_taborder("9");
            obj.set_text("자격증");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_license.addChild(obj.name, obj);

            obj = new Static("Static22","0","44",null,"12","0",null,null,null,null,null,this.div_license.form);
            obj.set_taborder("10");
            obj.set_text("h12");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_license.addChild(obj.name, obj);

            obj = new Grid("grd_license","0","56",null,"110","0",null,null,null,null,null,this.div_license.form);
            obj.set_taborder("11");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_license");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"240\"/><Column size=\"140\"/><Column size=\"390\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"CellEssential\" text=\"자격증명\"/><Cell col=\"2\" cssclass=\"CellEssential\" text=\"취득일\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:LICS_NM\" editdisplay=\"display\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:ACQU_DT\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:BIGO\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.div_license.addChild(obj.name, obj);

            obj = new Button("btn_confirm00","687",null,"45","21",null,"122",null,null,null,null,this.div_license.form);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.div_license.addChild(obj.name, obj);

            obj = new Button("btn_addLicense",null,"18","66","28","70",null,null,null,null,null,this.div_license.form);
            obj.set_taborder("13");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("true");
            this.div_license.addChild(obj.name, obj);

            obj = new Button("btn_deleteLicense",null,"18","66","28","0",null,null,null,null,null,this.div_license.form);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Del");
            obj.set_visible("true");
            this.div_license.addChild(obj.name, obj);

            obj = new Edit("edt_contactPhone","168","191","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maxlength("15");
            obj.getSetter("validate").set("title:내선번호,required:false,minlength:10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_compHist","30","834",null,"166","30",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","26","103","21",null,null,null,null,null,null,this.div_compHist.form);
            obj.set_taborder("5");
            obj.set_text("경력사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div_compHist.addChild(obj.name, obj);

            obj = new Grid("grd_compHist","0","56",null,null,"0","0",null,null,null,null,this.div_compHist.form);
            obj.set_taborder("7");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_compHist");
            obj.set_cellclickbound("control");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"CellEssential\" text=\"회사명\"/><Cell col=\"2\" cssclass=\"CellEssential\" text=\"업무명\"/><Cell col=\"3\" cssclass=\"CellEssential\" text=\"근무시작일\"/><Cell col=\"4\" cssclass=\"CellEssential\" text=\"근무종료일\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\" expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:COMP_NM\" editdisplay=\"display\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:JOB_NM\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:WK_SDT\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:WK_EDT\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:BIGO\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.div_compHist.addChild(obj.name, obj);

            obj = new Button("btn_addCompHist",null,"19","66","28","72",null,null,null,null,null,this.div_compHist.form);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Add");
            this.div_compHist.addChild(obj.name, obj);

            obj = new Button("btn_deleteCompHist",null,"19","66","28","0",null,null,null,null,null,this.div_compHist.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Del");
            this.div_compHist.addChild(obj.name, obj);

            obj = new Static("Static40","0","0",null,"30","0",null,null,null,null,null,this.div_compHist.form);
            obj.set_taborder("10");
            obj.set_text("H30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_compHist.addChild(obj.name, obj);

            obj = new Static("Static42","0","45",null,"12","0",null,null,null,null,null,this.div_compHist.form);
            obj.set_taborder("11");
            obj.set_text("H12");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_compHist.addChild(obj.name, obj);

            obj = new CheckBox("cbo_sendSmsYn","578","159","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("문자");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbo_sendEmailYn","651","162","110","19",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("자동알림 쪽지");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbo_sendTalkYn","777","162","65","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("메신저");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","160","524","690","34",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","30","524","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("대직기간");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild_essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bujaeSayu","578","496","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_tooltiptext("edit");
            obj.getSetter("validate").set("");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Div("div_searchUser","168","496","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_url("comm::commSearchUser.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_changePwd","578","26","108","24",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","160","398","690","34",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Div("div_project","172","403","666","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_url("comm::commSearchProject.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","30","366","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("주프로젝트");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","668","265","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("- size : 170*227px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_signSave","668","238","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Button("btn_signDelete","722","238","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_signImg","578","224","80","110",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_image("URL(\'img::bg_photo.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","440","153","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("수신여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","219","130","120",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("사진이미지");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","440","219","130","120",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("서명이미지");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","30","398","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_imgImg","168","224","80","110",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_image("URL(\'img::bg_photo.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_imgUploadFiles","168","224","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.getSetter("retry").set("0");
            obj.set_visible("false");
            obj.getSetter("scrollbars").set("none");
            obj.set_itemcount("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("W30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","339",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("H30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","385",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("H12");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","0","432",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("H30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","0","478",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("H12");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","782",null,"68","34",null,"30",null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Popupclose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","704",null,"68","34",null,"30",null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yellow");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","0",null,null,"30","0","0",null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("h30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","0","651",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","30","20",null,"2","30",null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_TopBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","30","338",null,"1","30",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_BottomBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","30","397",null,"2","30",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_TopBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","30","431",null,"1","30",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_BottomBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","30","490",null,"2","30",null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_TopBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","30","557",null,"1","30",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_BottomBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgDelete","312","238","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgSave","258","238","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","258","265","127","20",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("- size : 170*227px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_signName","670","287","164","20",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Static("stc_imgName","260","287","164","20",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bujaeStimeYYYYMMDD","168","529","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("essential");
            obj.getSetter("validate").set("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bujaeEtimeYYYYMMDD","422","529","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_cssclass("essential");
            obj.getSetter("validate").set("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_bujaeStimeHH24MI","324","529","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_type("string");
            obj.getSetter("mask").set("##:##");
            obj.set_cssclass("essential");
            obj.getSetter("validate").set("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_bujaeEtimeHH24MI","578","529","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_type("string");
            obj.getSetter("mask").set("##:##");
            obj.set_cssclass("essential");
            obj.getSetter("validate").set("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","402","529","9","21",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","395","524","27","34",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("FIX w");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","440","120","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("소속명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_signUploadFiles","578","224","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_multiselect("false");
            obj.getSetter("retry").set("0");
            obj.set_visible("false");
            obj.getSetter("scrollbars").set("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","260","307","127","20",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("- 용량 : 600KB 이하");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","668","307","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("- 용량 : 600KB 이하");
            this.addChild(obj.name, obj);

            obj = new Div("div_searchOutCpy","578","125","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_url("comm::commSearchMsCompany.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","558",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("H30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","30","585","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("요청서 기본 결재자 설정");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","604",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("H12");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","30","617","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("1차결재자");
            obj.set_cssclass("sta_WF_DetailLabel_FirstChild");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","440","617","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("2차결재자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","570","617","280","34",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","160","617","280","34",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","30","616",null,"2","30",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_TopBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_myChr1","168","622","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_tabstop("false");
            obj.set_url("comm::commSearchUser.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_myChr2","578","622","264","24",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_tabstop("false");
            obj.set_url("comm::commSearchUser.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_searchDept
            obj = new Layout("default","",0,0,this.div_searchDept.form,function(p){});
            this.div_searchDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_license.form
            obj = new Layout("default","",840,378,this.div_license.form,function(p){});
            this.div_license.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_compHist.form
            obj = new Layout("default","",0,0,this.div_compHist.form,function(p){});
            this.div_compHist.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_searchUser
            obj = new Layout("default","",0,0,this.div_searchUser.form,function(p){});
            this.div_searchUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_project
            obj = new Layout("default","",0,0,this.div_project.form,function(p){});
            this.div_project.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_searchOutCpy
            obj = new Layout("default","",0,0,this.div_searchOutCpy.form,function(p){});
            this.div_searchOutCpy.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_myChr1
            obj = new Layout("default","",0,0,this.div_myChr1.form,function(p){});
            this.div_myChr1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_myChr2
            obj = new Layout("default","",0,0,this.div_myChr2.form,function(p){});
            this.div_myChr2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",880,735,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_userId","value","ds_userInfo","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_userName","value","ds_userInfo","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_userEmad","value","ds_userInfo","USER_EMAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_upmuNm","value","ds_userInfo","UPMU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","rdo_bujaeYn","value","ds_userInfo","BUJAE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","msk_contactMobile","value","ds_userInfo","CONTACT_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbo_jbc","value","ds_userInfo","JBC_JID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_contactPhone","value","ds_userInfo","CONTACT_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_jbcPosi","value","ds_userInfo","JBC_POSI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbo_sendSmsYn","value","ds_userInfo","SEND_SMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cbo_sendEmailYn","value","ds_userInfo","SEND_EMAIL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cbo_sendTalkYn","value","ds_userInfo","SEND_TALK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_bujaeSayu","value","ds_userInfo","BUJAE_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_jobDesc","value","ds_userInfo","NH_JOBDESC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::commSearchDept.xfdl");
            this._addPreloadList("fdl","comm::commSearchUser.xfdl");
            this._addPreloadList("fdl","comm::commSearchProject.xfdl");
            this._addPreloadList("fdl","comm::commSearchMsCompany.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAD0320.xfdl","lib::comInclude.xjs");
        this.addIncludeScript("PAD0320.xfdl","lib::comSHA256.xjs");
        this.registerScript("PAD0320.xfdl", function() {
        /***********************************************************************
         * 화면ID   : PAD0310
         * 화면명   : 개인정보 팝업
         * 화면설명 : 개인정보를 보여준다.
         * 작성일   : 2016.10.25
         * 작성자   : 임성도
         * 수정이력 :
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::comInclude.xjs"); /*include "lib::comInclude.xjs"*/;
        this.executeIncludeScript("lib::comSHA256.xjs"); /*include "lib::comSHA256.xjs"*/

        // 업무에 필요한 공통 라이브러리 파일을 추가할 수 있다.
        // TODO

        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        var fv_oArgs;
        var mode;
        var originalUserId;
        var isUserInfoChck = false;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.PAD0310_onload = function(obj, e)
        {
        	// OnLoad 공통 함수 (필수)
        	this.gfn_init(obj);

        	// Form Initialize 함수
        	this.fn_initForm(); // Init Form
        	this.fn_initDataset(); // Init Dataset
        }

        /***********************************************************************
         * Form Initialize Functions
         ***********************************************************************/
        /*
         * 함수명  	: fn_initForm
         * 설명 		: Form을 초기화한다.
         * params  		: None
         * return Type 	: None
         */
        this.fn_initForm = function()
        {
        	fv_oArgs = this.getOwnerFrame().arguments["popup_oArg"];

        	if(this.gfn_isNull(fv_oArgs.userId)) {
        		mode = "INSERT";
        		var nRow = this.ds_userInfo.addRow();
        		this.ds_userInfo.setColumn(nRow, "HDOF_YN", "1");
        		this.ds_userInfo.setColumn(nRow, "BUJAE_YN", "N");
        		this.ds_userInfo.setColumn(nRow, "IN_FLAG", "Y");
        		this.ds_userInfo.setColumn(nRow, "SEND_SMS_YN", "Y");
        		this.ds_userInfo.setColumn(nRow, "SEND_EMAIL_YN", "Y");
        		this.ds_userInfo.setColumn(nRow, "SEND_TALK_YN", "Y");
        		this.componentControlByMode();
        		this.componentControlByBujae();
        		this.formResizeByDeptId();
        	} else {
        		mode = "UPDATE";
        		this.fn_search();
        	}

        // 	this.div_searchDept.setEssential();
        // 	this.div_searchDept.setCallback(this, "searchDeptCallback");
        // 	this.div_searchUser.setEssential();
        // 	this.div_searchUser.setCallback(this, "searchDaejicUseCallback");
        	this.gfn_procDivSetEssential(this.div_searchDept);
        	this.gfn_procDivSetCallback(this.div_searchDept, this, "searchDeptCallback");
        	this.gfn_procDivSetEssential(this.div_searchUser);
        	this.gfn_procDivSetCallback(this.div_searchUser, this, "searchDeptCallback");

        	this.gfn_procDivSetCallback(this.div_project, this, "searchProjectCallback");
        	this.gfn_procDivSetCallback(this.div_myChr1, this, "myChr1Callback");
        	this.gfn_procDivSetCallback(this.div_myChr2, this, "myChr2Callback");
        }

        /*
         * 함수명  	: fn_initDataset
         * 설명 		: Dataset을 초기화한다.
         *                주로, 조건 Dataset들(ds_cond, ds_cond_00, ds_cond_01, ...) 을 초기화한다.
         * params  		: None
         * return Type 	: None
         */
        this.fn_initDataset = function()
        {
        	this.searchJbcPosi();
        }

        /***********************************************************************
        * Data Transaction Functions
        ************************************************************************/
        /*
         * 함수명  	: fn_search
         * 설명 		: 사용자정보 데이터를 불러온다.
         * params  		: None
         * return Type 	: None
         */
        this.fn_search = function ()
        {
        	var params = "";
        	params += Iject.Util.setParam("model", "PAD0320Select01");

        	var svcId = "PAD0320Select01";
        	var inDatasets = "";
        	var outDatasets = "ds_userInfo=ds_userInfo ds_compHist=ds_compHist ds_license=ds_license";
        	var argument = Iject.Util.setParam("userId", nexacro.wrapQuote(fv_oArgs.userId));
        	var callbackFunc = "fn_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        /*
         * 함수명  	: fn_saveUser
         * 설명 		: 사용자 정보 저장
         * params  		: None
         * return Type 	: None
         */
        this.fn_saveUser = function ()
        {
        	// Validate : deptId & deptName
        	var deptInfo = this.div_searchDept.getValue();
        	var deptId = deptInfo.id;
        	var deptName = deptInfo.name;

        	if(!this.gfn_isNull(deptId)) {
        		this.ds_userInfo.setColumn(0, "DEPT_ID", deptId);
        		this.ds_userInfo.setColumn(0, "DEPT_NAME", deptName);
        	}

        	var deptIdByDs = this.ds_userInfo.getColumn(0, "DEPT_ID");

        	if(this.gfn_isNull(deptIdByDs)) {
        		alert("부서명은(는) 필수입력 항목입니다");
        		return;
        	}

        	// Validate : contactPhone
        // 	var contactPhone = this.ds_userInfo.getColumn(0, "CONTACT_PHONE");
        //
        // 	if(!this.gfn_isNull(contactPhone)) {
        // 		var pattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
        //
        // 		if(!(pattern.exec(contactPhone) ? true : false)) {
        // 			alert("내선번호에 \'-\'을 넣어 작성해야 합니다.\n"
        // 			     +"ex) xxx-xxxx-xxx");
        // 			return;
        // 		}
        // 	}

        	// Validate : Email
        	var userEmad = this.ds_userInfo.getColumn(0, "USER_EMAD");

        	if(!this.gfn_isNull(userEmad) &&!Iject.Util.checkEmail(userEmad)) {
        		alert("이메일 형식이 올바르지 않습니다.");
        		return;
        	}

        	// Validate : daejicUserId & daejicUserName
        	var daejicUserInfo = this.div_searchUser.getValue();
        	var daejicUserId = daejicUserInfo.id;
        	var daejicUserName = daejicUserInfo.name;

        	if(!this.gfn_isNull(daejicUserId)) {
        		this.ds_userInfo.setColumn(0, "DAEJIC_ID", daejicUserId);
        		this.ds_userInfo.setColumn(0, "DAEJIC_NM", daejicUserName);
        	}

        	var bujaeYn = this.ds_userInfo.getColumn(0, "BUJAE_YN");
        	var daejicUserIdByDs = this.ds_userInfo.getColumn(0, "DAEJIC_ID");

        	if(bujaeYn == "Y" && this.gfn_isNull(daejicUserIdByDs)) {
        		alert("대직자은(는) 필수입력 항목입니다");
        		return;
        	}

        	// Validate : BUJAE_STIME, BUJAE_ETIME
        	var bujaeStimeYYYYMMDD = this.cal_bujaeStimeYYYYMMDD.value;
        	var bujaeStimeHH24MI = this.msk_bujaeStimeHH24MI.value;
        	var bujaeEtimeYYYYMMDD = this.cal_bujaeEtimeYYYYMMDD.value;
        	var bujaeEtimeHH24MI = this.msk_bujaeEtimeHH24MI.value;
        	var bujaeStimeYYYYMMDDHH24MI = bujaeStimeYYYYMMDD + bujaeStimeHH24MI;
        	var bujaeEtimeYYYYMMDDHH24MI = bujaeEtimeYYYYMMDD + bujaeEtimeHH24MI;

        	if(bujaeYn == "Y") {
        		this.ds_userInfo.setColumn(0, "BUJAE_STIME", bujaeStimeYYYYMMDDHH24MI);
        		this.ds_userInfo.setColumn(0, "BUJAE_ETIME", bujaeEtimeYYYYMMDDHH24MI);

        		if(!Iject.Util.isTime(bujaeStimeHH24MI)) {
        			alert("대직시작시간이 올바르지 않습니다.");
        			return;
        		}

        		if(!Iject.Util.isTime(bujaeEtimeHH24MI)) {
        			alert("대직종료시간이 올바르지 않습니다.");
        			return;
        		}

        		if(bujaeStimeYYYYMMDDHH24MI > bujaeEtimeYYYYMMDDHH24MI) {
        			alert("대직시작일(시간)이 대직종료일(시간) 이후입니다.");
        			return;
        		}
        	}

        	// Validate : WK_SDT, WK_EDT
        	for(var i=0; i<this.ds_compHist.getRowCount(); i++) {
        		var wkSdt = this.ds_compHist.getColumn(0, "WK_SDT");
        		var wkEdt = this.ds_compHist.getColumn(0, "WK_EDT");

        		if(!this.gfn_isNull(wkSdt) && wkSdt > wkEdt) {
        			alert("근무시작일이 근무종료일 이후입니다.");
        			return;
        		}
        	}

        	// nhPasswd
        	var nhPasswd = this.edt_nhPasswd.value;

        	if(!this.gfn_isNull(nhPasswd)) {
        		nhPasswd = sha256_digest(nhPasswd);
        		this.ds_userInfo.setColumn(0, "NH_PASSWD", nhPasswd);
        	}

        	// Company
        	var strOutCpy = this.div_searchOutCpy.getValue();
        	if (!this.gfn_isNull(strOutCpy) && !this.gfn_isNull(strOutCpy.pCOMPANY_ID)) {
        		this.ds_userInfo.setColumn(0, "EMP_ORG_ID" , strOutCpy.pCOMPANY_ID);
        		this.ds_userInfo.setColumn(0, "EMP_ORG_NM", strOutCpy.pCOMPANY_NM);
        	}

        	// UserInfoChck
        	if(mode == "INSERT" && !this.isUserInfoChck) {
        		alert("사번 중복체크를 해야합니다.");
        		return;
        	}

        	var signCountFile = this.countFile(this.fup_signUploadFiles);
        	var imgCountFile = this.countFile(this.fup_imgUploadFiles);

        	if(this.gfn_isUpdate(this.ds_userInfo) || this.gfn_isUpdate(this.ds_compHist) || this.gfn_isUpdate(this.ds_license)) {
        		if(!confirm("저장하시겠습니까?")) {
        			return;
        		}
        	} else {
        		alert("변경된 내용이 없습니다.");
        		return;
        	}

        	this.fn_save();
        }

        this.fn_save = function() {
        	var params = "";
        	params += Iject.Util.setParam("model", "PAD0310Modify01");

        	var svcId = "PAD0310Modify01";
        	var inDatasets = "ds_userInfo=ds_userInfo:A ds_compHist=ds_compHist:U ds_license=ds_license:U";
        	var outDatasets = "RESULT0=RESULT0 RESULT01=RESULT01 RESULT02=RESULT02";
        	var argument = "userId="+nexacro.wrapQuote(application.gv_Logid)+" userNm="+nexacro.wrapQuote(application.gv_Name);
        	var callbackFunc = "fn_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        // Transaction Function
        this.fn_callback = function (sid, errNo, errMsg)
        {
        	if(errNo < 0) {
        		return;
        	}

        	switch(sid) {
        		case "PAD0320Select01" :
        			this.originalUserId = this.ds_userInfo.getColumn(0, "USER_ID");
        			var deptId = this.ds_userInfo.getColumn(0, "DEPT_ID");
        			var deptName = this.ds_userInfo.getColumn(0, "DEPT_NAME");
        			var inFlag = this.ds_userInfo.getColumn(0, "IN_FLAG");
        			var jbcPosiId = this.ds_userInfo.getColumn(0, "JBC_POSI_ID");
        			var jbcPosi = this.ds_userInfo.getColumn(0, "JBC_POSI");
        			var bujaeYn = this.ds_userInfo.getColumn(0, "BUJAE_YN");
        			var bujaeStime = this.ds_userInfo.getColumn(0, "BUJAE_STIME");
        			var bujaeEtime = this.ds_userInfo.getColumn(0, "BUJAE_ETIME");
        			var daejicId = this.ds_userInfo.getColumn(0, "DAEJIC_ID");
        			var daejicNm = this.ds_userInfo.getColumn(0, "DAEJIC_NM");
        			var mainPjtId = this.ds_userInfo.getColumn(0, "MAIN_PJT_ID");
        			var mainPjtName = this.ds_userInfo.getColumn(0, "MAIN_PJT_NAME");
        			var signOrgFileNm = this.ds_userInfo.getColumn(0, "SIGN_ORG_FILE_NM");
        			var signNewFileNm = this.ds_userInfo.getColumn(0, "SIGN_NEW_FILE_NM");
        			var signFilePath = this.ds_userInfo.getColumn(0, "SIGN_FILE_PATH");
        			var imgOrgFileNm = this.ds_userInfo.getColumn(0, "IMG_ORG_FILE_NM");
        			var imgNewFileNm = this.ds_userInfo.getColumn(0, "IMG_NEW_FILE_NM");
        			var imgFilePath = this.ds_userInfo.getColumn(0, "IMG_FILE_PATH");
        			var empOrgNm = this.ds_userInfo.getColumn(0, "EMP_ORG_NM");
        			var myChrId1 = this.ds_userInfo.getColumn(0, "MY_CHR_ID1");
        			var myChrNm1 = this.ds_userInfo.getColumn(0, "MY_CHR_NM1");
        			var myChrId2 = this.ds_userInfo.getColumn(0, "MY_CHR_ID2");
        			var myChrNm2 = this.ds_userInfo.getColumn(0, "MY_CHR_NM2");

        			//trace(this.ds_userInfo.saveXML());


        			if(!this.gfn_isNull(bujaeStime) && !this.gfn_isNull(bujaeStime)) {
        				var bujaeStimeYYYYMMDD = bujaeStime.substr(0, 8);
        				var bujaeStimeHH24MI = bujaeStime.substr(8, 4);
        				var bujaeEtimeYYYYMMDD = bujaeEtime.substr(0, 8);
        				var bujaeEtimeHH24MI = bujaeEtime.substr(8, 4);

        				this.cal_bujaeStimeYYYYMMDD.set_value(bujaeStimeYYYYMMDD);
        				this.msk_bujaeStimeHH24MI.set_value(bujaeStimeHH24MI);
        				this.cal_bujaeEtimeYYYYMMDD.set_value(bujaeEtimeYYYYMMDD);
        				this.msk_bujaeEtimeHH24MI.set_value(bujaeEtimeHH24MI);
        			}

        // 			this.div_searchDept.setValue(deptName);
        // 			this.div_searchUser.setValue(daejicNm);

        			this.gfn_procDivSetValue(this.div_searchDept, deptName);
        			this.gfn_procDivSetValue(this.div_searchUser, daejicNm, "setValue", daejicId);
        			this.gfn_procDivSetValue(this.div_myChr1, myChrNm1, "setValue", myChrId1);
        			this.gfn_procDivSetValue(this.div_myChr2, myChrNm2, "setValue", myChrId2);
        			this.searchJbc(jbcPosiId, jbcPosi);
        			this.div_project.setValue(mainPjtId, mainPjtName);

        			if(Eco.isEmpty(inFlag)) {
        				mode = "DETAIL";
        			}

        			this.componentControlByMode();
        			this.componentControlByBujae(bujaeYn);
        			this.formResizeByDeptId(deptId);

        			this.setSignInfo(signFilePath, signNewFileNm, signOrgFileNm);
        			this.setImgInfo(imgFilePath, imgNewFileNm, imgOrgFileNm);

        			this.div_searchOutCpy.setValue(empOrgNm);

        			break;
        		case "PAD0310Modify01" :
        			var successCount = this.transactionResultHandler(this.RESULT0, this.RESULT01, this.RESULT02);

        			//project는 gds_user에 한번 반영해주자.
        			var projectInfo = this.div_project.getValue();

        			//trace("projectInfo "+Iject.Util.setJSONToString(projectInfo));
        			this.gfn_setMainProject(projectInfo["id"], projectInfo["name"]);

        			if(successCount > 0) {
        				alert("정상 처리되었습니다.");
        				Iject.close(this, "SAVE");
        			}
        			break;
        		case "commLogout" :
        			this.fn_logoutAfter();
        			break;
        		default :
        			break;
        	}
        }

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.btn_close_onclick = function(obj,  e)
        {
        	Iject.close(this);
        }

        this.btn_confirm_onclick = function(obj,  e)
        {
        	if(!Iject.Validate.validateCompList(this, this)) return;

        	if(!Iject.Validate.dsValidCheck(this, this.div_compHist.grd_compHist, this.ds_compHist_valid)) return;

        	if(!Iject.Validate.dsValidCheck(this, this.div_license.grd_license, this.ds_license_valid)) return;

        	this.fn_saveUser();
        }

        this.cbo_jbcPosi_onitemchanged = function(obj, e)
        {
        	this.ds_userInfo.setColumn(0, "JBC_JID", null);
        	this.ds_userInfo.setColumn(0, "JBC_JNAME", null);

        	var postindex = e.postindex;
        	var jbcPosiId = this.ds_jbc_posi.getColumn(postindex, "JBC_POSI_ID");
        	var jbcPosi = this.ds_jbc_posi.getColumn(postindex, "JBC_POSI");

        	this.ds_userInfo.setColumn(0, "JBC_POSI_ID", jbcPosiId);
        	this.ds_userInfo.setColumn(0, "JBC_POSI", jbcPosi);

        	this.searchJbc(jbcPosiId, jbcPosi);
        }

        this.cbo_jbc_onitemchanged = function(obj, e)
        {
        	var postindex = e.postindex;
        	var jbcJid = this.ds_jbc.getColumn(postindex, "JBC_JID");
        	var jbcJnameOrg = this.ds_jbc.getColumn(postindex, "JBC_JNAME_ORG");

        	this.ds_userInfo.setColumn(0, "JBC_JNAME_ORG", jbcJnameOrg);

        	var jbcPosi = this.cbo_jbcPosi.text;

        	this.ds_userInfo.setColumn(0, "JBC_JNAME", jbcPosi+jbcJnameOrg);
        }

        this.btn_userIdChk_onclick = function(obj,  e)
        {
        	this.ds_userInfoChck.clearData();

        	var userId = this.ds_userInfo.getColumn(0, "USER_ID");

        	if(this.gfn_isNull(userId)) {
        		alert("사번을 입력하세요");
        		return;
        	}

        	var params = "";
        	params += Iject.Util.setParam("model", "PAD0310Select01");

        	var svcId = "PAD0310Select01";
        	var inDatasets = "";
        	var outDatasets = "ds_userInfoChck=ds_userInfo";
        	var argument = Iject.Util.setParam("userId", nexacro.wrapQuote(userId));
        	var callbackFunc = "userIdChkCallbackFunc";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.edt_userId_onkeyup = function(obj, e)
        {
        	this.isUserInfoChck = false;
        }

        this.div_compHist_btn_addCompHist_onclick = function(obj,  e)
        {
        	var row = this.ds_compHist.addRow();

        	this.ds_compHist.setColumn(row, "SEQ", this.fnGetMaxSeq(this.ds_compHist, row));
        }

        this.div_license_btn_addLicense_onclick = function(obj,  e)
        {
        	var row = this.ds_license.addRow();

        	this.ds_license.setColumn(row, "SEQ", this.fnGetMaxSeq(this.ds_license, row));
        }

        this.div_compHist_btn_deleteCompHist_onclick = function(obj,  e)
        {
        	var selectendrow = this.div_compHist.grd_compHist.selectendrow;

        	this.ds_compHist.deleteRow(selectendrow);
        }

        this.div_license_btn_deleteLicense_onclick = function(obj,  e)
        {
        	var selectendrow = this.div_license.grd_license.selectendrow;

        	this.ds_license.deleteRow(selectendrow);
        }

        this.rdo_bujaeYn_onitemchanged = function(obj, e)
        {
        	var postvalue = e.postvalue;

        	this.componentControlByBujae(postvalue);
        	return;

        	this.cal_bujaeStimeYYYYMMDD.set_value(null);
        	this.msk_bujaeStimeHH24MI.set_value(null);
        	this.cal_bujaeEtimeYYYYMMDD.set_value(null);
        	this.msk_bujaeEtimeHH24MI.set_value(null);
        	this.edt_bujaeSayu.set_value(null);
        // 	this.div_searchUser.setValue(null);
        	this.gfn_procDivSetValue(this.div_searchUser, null);
        	this.componentControlByBujae(postvalue);
        }

        this.btn_changePwd_onclick = function(obj,  e)
        {
        	this.fn_popupChangePwd();
        }

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        this.fnGetMaxSeq = function(objDs, row)
        {
        	var strSeq;

        	if(row == 0){
        		strSeq	= '01';
        	}else{
        		strSeq = objDs.getMax("SEQ");
        		strSeq = nexacro.toNumber(strSeq) + 1;
        		strSeq = strSeq.toString();
        		strSeq = strSeq.padLeft(2,"0");
        	}

        	return strSeq;
        }

        this.componentControlByMode = function()
         {
        	trace("mode = " + mode);

         	if(mode == "DETAIL") {
        		this.div_searchDept.edt_search.set_enable("false");
        		this.div_searchDept.btn_search.set_enable("false");
        		this.div_searchOutCpy.edt_search.set_enable("false");
        		this.div_searchOutCpy.btn_search.set_enable("false");
        	} else if(mode == "INSERT") {
        		this.btn_userIdChk.set_enable("true");
        		this.edt_nhPasswd.set_enable("true");
        		this.edt_nhPasswd.set_visible("true");
        		this.edt_userId.set_enable("true");
        		this.edt_userName.set_enable("true");
        		this.cbo_jbcPosi.set_enable("true");
        		this.cbo_jbc.set_enable("true");
        		this.edt_userEmad.set_enable("true");
        		this.edt_contactPhone.set_enable("true");
        		this.div_searchOutCpy.set_enable("true");
        		this.msk_contactMobile.set_enable("true");
        		this.componentControlByBujae();
        	} else if(mode == "UPDATE") {
        		this.edt_userName.set_enable("true");
        		this.cbo_jbcPosi.set_enable("true");
        		this.cbo_jbc.set_enable("true");
        		this.edt_userEmad.set_enable("true");
        		this.edt_contactPhone.set_enable("true");
        		this.div_searchOutCpy.set_enable("true");
        		this.msk_contactMobile.set_enable("true");
        	}
         }

        this.searchJbcPosi = function() {
        	var params = "";
        	params += Iject.Util.setParam("model", "PAD0310Select02");

        	var svcId = "PAD0310Select02";
        	var inDatasets = "";
        	var outDatasets = "ds_jbc_posi=ds_jbc_posi";
        	var argument = "";
        	var callbackFunc = "fn_jbc_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.searchJbc = function(jbcPosiId, jbcPosi) {
        	var params = "";
        	params += Iject.Util.setParam("model", "PAD0310Select03");

        	var svcId = "PAD0310Select03";
        	var inDatasets = "";
        	var outDatasets = "ds_jbc=ds_jbc";
        	var argument = Iject.Util.setParam("jbcPosiId", nexacro.wrapQuote(jbcPosiId));
        	argument += Iject.Util.setParam("jbcPosi", nexacro.wrapQuote(jbcPosi));
        	var callbackFunc = "fn_jbc_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.fn_jbc_callback = function (sid, errNo, errMsg) {
        	if(errNo < 0) {
        		return;
        	}

        	switch(sid) {
        		case "PAD0310Select02" :
        			trace("PAD0310Select02 : " + this.ds_jbc_posi.getRowCount());
        			break;
        		case "PAD0310Select03" :
        			trace("PAD0310Select03 : " + this.ds_jbc.getRowCount());
        			break;
        		default :
        			break;
        	}
        }

        this.userIdChkCallbackFunc = function (sid, errNo, errMsg) {
        	if(errNo < 0) {
        		return;
        	}

        	switch(sid) {
        		case "PAD0310Select01" :
        			trace("PAD0310Select01 : " + this.ds_userInfoChck.getRowCount());
        			var rowCount =  this.ds_userInfoChck.getRowCount();

        			if(rowCount != 0) {
        				var userId = this.ds_userInfoChck.getColumn(0, "USER_ID");
        				var userName = this.ds_userInfoChck.getColumn(0, "USER_NAME");

        				alert("중복된 사번입니다\n"
        				      + "사번 : " + userId + "\n"
        				      + "성명 : " + userName + "\n");
        			} else {
        				alert("사용할 수 있는 사번입니다.");
        				this.isUserInfoChck = true;
        			}
        			break;
        		default :
        			break;
        	}
        }

        this.searchDeptCallback = function (sid, rtn)
        {
        	var deptInfo = this.div_searchDept.getValue();
        	var deptId = deptInfo.id;
        	var deptName = deptInfo.name;

        	this.formResizeByDeptId(deptId);

        	this.ds_compHist.clearData();
        	this.ds_license.clearData();
        }

        this.searchDaejicUseCallback = function (sid, rtn)
        {
        	var daejicUserInfo = this.div_searchUser.getValue();
        	var daejicUserId = daejicUserInfo.id;
        	var daejicUserName = daejicUserInfo.name;

        	this.ds_userInfo.setColumn(0, "DAEJIC_ID", daejicUserId);
        	this.ds_userInfo.setColumn(0, "DAEJIC_NM", daejicUserName);
        }

        this.searchProjectCallback = function (sid, rtn)
        {
        	var projectInfo = this.div_project.getValue();

        	this.ds_userInfo.setColumn(0, "MAIN_PJT_ID", projectInfo["id"]);
        	this.ds_userInfo.setColumn(0, "MAIN_PJT_NAME", projectInfo["name"]);
        }

        this.formResizeByDeptId = function(deptId) {
        	if("E0001" == deptId || "P0001" == deptId) { // E0001 : 외주인력, P0001 : 농정
        		// this.div_compHist.set_visible(true);
        		// this.div_license.set_visible(true);
        		// this.set_height(756);
        		// this.getOwnerFrame().set_height(784);
        	} else {
        		// this.div_compHist.set_visible(false);
        		// this.div_license.set_visible(false);
        		// this.set_height(356);
        		// this.getOwnerFrame().set_height(384);
        	}

        	Iject.Util.goCenter(this);
        }

        this.componentControlByBujae = function(strBujaeYn) {
        	if(strBujaeYn == "Y") {
        		this.div_searchUser.edt_search.set_enable(true);
        		this.div_searchUser.btn_search.set_enable(true);

        		this.cal_bujaeStimeYYYYMMDD.set_enable(true);
        		this.msk_bujaeStimeHH24MI.set_enable(true);
        		this.cal_bujaeEtimeYYYYMMDD.set_enable(true);
        		this.msk_bujaeEtimeHH24MI.set_enable(true);
        		this.edt_bujaeSayu.set_enable(true);

        		this.cal_bujaeStimeYYYYMMDD.validate = "title:대직시작일,required:true";
        		this.msk_bujaeStimeHH24MI.validate = "title:대직시작시간,required:true,minlength:4";
        		this.cal_bujaeEtimeYYYYMMDD.validate = "title:대직종료일,required:true";
        		this.msk_bujaeEtimeHH24MI.validate = "title:대직종료시간,required:true,minlength:4";
        		this.edt_bujaeSayu.validate = "title:대직사유,required:true,maxlength:30";
        	} else if(this.gfn_isNull(strBujaeYn) || strBujaeYn == "N") {
        		this.div_searchUser.edt_search.set_enable(false);
        		this.div_searchUser.btn_search.set_enable(false);

        		this.cal_bujaeStimeYYYYMMDD.set_enable(false);
        		this.msk_bujaeStimeHH24MI.set_enable(false);
        		this.cal_bujaeEtimeYYYYMMDD.set_enable(false);
        		this.msk_bujaeEtimeHH24MI.set_enable(false);
        		this.edt_bujaeSayu.set_enable(false);

        		this.cal_bujaeStimeYYYYMMDD.validate = "";
        		this.msk_bujaeStimeHH24MI.validate = "";
        		this.cal_bujaeEtimeYYYYMMDD.validate = "";
        		this.msk_bujaeEtimeHH24MI.validate = "";
        		this.edt_bujaeSayu.validate = "";
        	}
        }

        this.fn_popupChangePwd = function ()
        {
        	var oData = {
        		sId				: "popupChangePwd",   //callback id
        		sUrl			: "comm::commChangePwd.xfdl",   //url
        		bshowtitlebar	: true, //title bar
        		bAutoSize		: true,    //autosize
        		bResize			: false,   //resize
        		bShowstatusbar	: false,  //statusbar
        		sOpenalign		: "center middle",  //align
        		oArgs			:
        			{
        				pForm:this
        			}	// argument
        	};

        	Iject.showModal(this, oData, this.fn_popupChangePwdCallback);
        }

        this.fn_popupChangePwdCallback = function (sid, rtn)
        {
        	if(rtn)
        	{
        		alert("비밀번호가 정상적으로 변경되었습니다. 다시 로그인 하십시요.");
        		this.fn_logout();
        	}
        	else
        	{
        		return;
        	}
        }

        this.fn_logout = function ()
        {
        	application.gds_user.setColumn(0, "LAST_LOGIN_TIME", application.gds_user.getColumn(0, "LOGIN_TIME_STD"));

        	var params = "";
        	params += Iject.Util.setParam("model", "commLogout");

        	var svcId = "commLogout";
        	var inDatasets = "ds_user=gds_user:U";
        	var outDatasets = "";
        	var argument = "";
        	var callbackFunc = "fn_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.fn_logoutAfter = function ()
        {
        	// Iject.logout(this); // SSO : 처음 로그인한 상태로 이동, 일반 사용자 : 로그인 화면으로 이동
        	// Iject.exit(this); // 브라우저 닫기
        }

        this.onkeyupForm = function(obj, e)
        {
        	if(e.keycode == 27) Iject.close(this);
        }

        this.transactionResultHandler = function() {
        	var successCount = 0;

        	for(var argumentIndex=0; argumentIndex<arguments.length; argumentIndex++) {
        		var argument = arguments[argumentIndex];

        		for(var i=0; i < argument.rowcount; i++) {
        			var reowIndex = argument.getColumn(i, "ROWINDEX");
        			var status = argument.getColumn(i, "STATUS");
        			var result = argument.getColumn(i, "RESULT");
        			var error = argument.getColumn(i, "ERROR")

        			if(result > 0) {
        				successCount++;
        			} else if(!this.gfn_isNull(error)) {
        				alert(error);
        				break;
        			}
        		}
        	}

        	return successCount;
        }

        this.fup_uploadFiles_onerror = function(obj,  e)
        {
        	trace("fup_signUploadFiles_onerror");
        }

        this.fup_uploadFiles_onitemchanged = function(obj,  e)
        {
        	var	fv_allowTypes = new Array("jpg","jpeg","gif","png","bmp");

        	if(Eco.isEmpty(e.newvalue)) return;

        	var fileExt = e.newvalue.slice(e.newvalue.lastIndexOf(".")+1).toLowerCase();
        	if(!Eco.array.contains(fv_allowTypes, fileExt))
        	{
        		alert("'" + fileExt + "' 유형의 파일은 업로드가 불가능합니다.");
        		obj.deleteItem(e.index);
        		obj.appendItem();
        		return false;
        	}

        	var fileSize = 0;
        	for(var i = 0; i < obj.filelist.length; i++)
        	{
        		fileSize += parseInt(obj.filelist[i].getFileSize());
        	}

        	var maxSize = parseInt(application.gv_maxFileSize) * 1024 * 1024;
        	if(fileSize > maxSize)
        	{
        		alert("전체 업로드 파일 크기가 50MB를 넘을 수 없습니다.\n(현재 전체 파일 크기 : " + (Math.round(fileSize / 1024 / 1024)) + "MB)");
        		obj.deleteItem(obj.index);
        		obj.appendItem();
        		return false;
        	}

        	this.upload(obj);
        }

        this.fup_signUploadFiles_onsuccess = function(obj,  e)
        {
        	var isSuccess = true;
        	if(e.datasets == null)
        	{
        		isSuccess = false;
        		alert("ERROR!!!");
        	}
        	else
        	{
        		isSuccess = true;

        		var orgfilename, newfilename, filepath, filesize;

        		orgfilename = this.ds_userInfo.getColumn(0, "IMG_ORG_FILE_NM");
        		newfilename = this.ds_userInfo.getColumn(0, "IMG_NEW_FILE_NM");
        		filepath = this.ds_userInfo.getColumn(0, "IMG_FILE_PATH");

        		orgfilename = e.datasets[0].getColumn(0, "orgfilename");
        		newfilename = e.datasets[0].getColumn(0, "newfilename");
        		filepath = e.datasets[0].getColumn(0, "filepath");
        		filesize = e.datasets[0].getColumn(0, "filesize");

        		if(Math.round(filesize / 1024) >= 600) {
        			alert("용량은 600KB 이하 이어야 합니다.");
        			this.imageDelete(orgfilename, newfilename, filepath);
        			return;
        		}

        		this.ds_userInfo.setColumn(0, "SIGN_ORG_FILE_NM", orgfilename);
        		this.ds_userInfo.setColumn(0, "SIGN_NEW_FILE_NM", newfilename);
        		this.ds_userInfo.setColumn(0, "SIGN_FILE_PATH", filepath);

        		this.setSignInfo(filepath, newfilename, orgfilename);

        		alert("\"저장\"버튼을 눌러야 반영됩니다.");
        	}
        }

        this.fup_imgUploadFiles_onsuccess = function(obj,  e)
        {
        	var isSuccess = true;
        	if(e.datasets == null)
        	{
        		isSuccess = false;
        		alert("ERROR!!!");
        	}
        	else
        	{
        		isSuccess = true;

        		var orgfilename, newfilename, filepath, filesize;

        		orgfilename = this.ds_userInfo.getColumn(0, "IMG_ORG_FILE_NM");
        		newfilename = this.ds_userInfo.getColumn(0, "IMG_NEW_FILE_NM");
        		filepath = this.ds_userInfo.getColumn(0, "IMG_FILE_PATH");

        		orgfilename = e.datasets[0].getColumn(0, "orgfilename");
        		newfilename = e.datasets[0].getColumn(0, "newfilename");
        		filepath = e.datasets[0].getColumn(0, "filepath");
        		filesize = e.datasets[0].getColumn(0, "filesize");

        		if(Math.round(filesize / 1024) >= 600) {
        			alert("용량은 600KB 이하 이어야 합니다.");
        			this.imageDelete(orgfilename, newfilename, filepath);
        			return;
        		}

        		this.ds_userInfo.setColumn(0, "IMG_ORG_FILE_NM", orgfilename);
        		this.ds_userInfo.setColumn(0, "IMG_NEW_FILE_NM", newfilename);
        		this.ds_userInfo.setColumn(0, "IMG_FILE_PATH", filepath);

        		this.setImgInfo(filepath, newfilename, orgfilename);

        		alert("\"저장\"버튼을 눌러야 반영됩니다.");
        	}
        }

        this.countFile = function (fup)
        {
        	trace("fup.getItemCount() : " + fup.getItemCount());
        	var cnt = fup.getItemCount();
        	var rtn = 0;
        	for(var i = 0; i < cnt; i++)
        	{
        		if(fup.hasValue(i)) rtn++;
        	}
        	trace("rtn : " + rtn);
        	return rtn;
        }

        this.upload = function (fup)
        {
        	var folder = "USER_SIGN_FILES";
        	var uploadUrl = "svc_url::jsp/saveFile.jsp?path=" + folder;
        	fup.upload(uploadUrl);
        }

        this.removeImageCallback = function (sid, errNo, errMsg)
        {
        	if(errNo < 0) {
        		trace(errMsg);
        		alert("파일 삭제가 실패하였습니다.");
        	}
        }
        this.btn_signSave_onclick = function(obj,  e)
        {
        	var findButtons = this.fup_signUploadFiles.filefindbuttons;
        	var id = findButtons.get_id(0);
        	var item = findButtons.get_item(id);
        	item.click();
        }

        this.btn_imgSave_onclick = function(obj,  e)
        {
        	var findButtons = this.fup_imgUploadFiles.filefindbuttons;
        	var id = findButtons.get_id(0);
        	var item = findButtons.get_item(id);
        	item.click();
        }

        this.btn_signDelete_onclick = function(obj,  e)
        {
        	if(confirm("정말 삭제하시겠습니까?")) {
        		this.emptySignInfo();
        		alert("\"저장\"버튼을 눌러야 반영됩니다.");
        		this.ds_userInfo.setColumn(0, "SIGN_ORG_FILE_NM", null);
        		this.ds_userInfo.setColumn(0, "SIGN_NEW_FILE_NM", null);
        		this.ds_userInfo.setColumn(0, "SIGN_FILE_PATH", null);
        	}
        }

        this.btn_imgDelete_onclick = function(obj,  e)
        {
        	if(confirm("정말 삭제하시겠습니까?")) {
        		this.emptyImgInfo();
        		alert("\"저장\"버튼을 눌러야 반영됩니다.");
        		this.ds_userInfo.setColumn(0, "IMG_ORG_FILE_NM", null);
        		this.ds_userInfo.setColumn(0, "IMG_NEW_FILE_NM", null);
        		this.ds_userInfo.setColumn(0, "IMG_FILE_PATH", null);
        	}
        }

        this.setSignInfo = function(signFilePath, signNewFileNm, signOrgFileNm)
        {
        	if(!Eco.isEmpty(signOrgFileNm)) {
        		//var imgUrl = "svc_url::jsp/downloadFileDrm.jsp?path=" + signFilePath + "&fileName=" + signNewFileNm + "|" + signOrgFileNm
        		var imgUrl = "svc_url::jsp/downloadFile.jsp?path=" + signFilePath + "&fileName=" + signNewFileNm + "|" + signOrgFileNm
        		this.imv_signImg.set_image(imgUrl);
        		this.stc_signName.set_text("- 파일명 : " + signOrgFileNm);
        	}
        }

        this.setImgInfo = function(imgFilePath, imgNewFileNm, imgOrgFileNm)
        {
        	if(!Eco.isEmpty(imgNewFileNm)) {
        		//var imgUrl = "svc_url::jsp/downloadFileDrm.jsp?path=" + imgFilePath + "&fileName=" + imgNewFileNm + "|" + imgOrgFileNm
        		var imgUrl = "svc_url::jsp/downloadFile.jsp?path=" + imgFilePath + "&fileName=" + imgNewFileNm + "|" + imgOrgFileNm
        		this.imv_imgImg.set_image(imgUrl);
        		this.stc_imgName.set_text("- 파일명 : " + imgOrgFileNm);
        	}
        }

        this.emptySignInfo = function()
        {
        	this.imv_signImg.set_image("img::bg_photo.png");
        	this.stc_signName.set_text("- 파일명 : ");
        }

        this.emptyImgInfo = function()
        {
        	this.imv_imgImg.set_image("img::bg_photo.png");
        	this.stc_imgName.set_text("- 파일명 : ");
        }

        this.imageDelete = function(orgfilename, newfilename, filepath)
        {
        	if(!this.gfn_isNull(orgfilename)) {
        		this.ds_deleteFile.deleteAll();

        		var svcUrl = "svc_url::jsp/deleteFile.jsp";

        		var row = this.ds_deleteFile.addRow();
        		this.ds_deleteFile.setColumn(row, "ORG_FILE_NM", orgfilename);
        		this.ds_deleteFile.setColumn(row, "NEW_FILE_NM", newfilename);
        		this.ds_deleteFile.setColumn(row, "FILE_PATH", filepath);
        		this.transaction("deleteImage", svcUrl, "input=ds_deleteFile", "", "", "removeImageCallback");
        	}
        }

        this.myChr1Callback = function (sid, rtn)
        {
        	var value = this.div_myChr1.getValue();
        	var myChr1Id = this.ds_userInfo.getColumn(0, "MY_CHR_ID1");
        	var myChr2Id = this.ds_userInfo.getColumn(0, "MY_CHR_ID2");

        	if(value.id == "undefined") {
        		value.id = null;
        		value.name = null;
        	} else if(value.id == myChr2Id) {
        		alert("2차결재자와 동일한 사용자를 넣을 수 없습니다.");
        		this.div_myChr1.setValue(null, null);
        		return;
        	}

        	this.ds_userInfo.setColumn(0, "MY_CHR_ID1", value.id);
        	this.ds_userInfo.setColumn(0, "MY_CHR_NM1", value.name);
        }

        this.myChr2Callback = function (sid, rtn)
        {
        	var value = this.div_myChr2.getValue();
        	var myChr1Id = this.ds_userInfo.getColumn(0, "MY_CHR_ID1");
        	var myChr2Id = this.ds_userInfo.getColumn(0, "MY_CHR_ID2");

        	if(value.id == "undefined") {
        		value.id = null;
        		value.name = null;
        	} else if(value.id == myChr1Id) {
        		alert("1차결재자와 동일한 사용자를 넣을 수 없습니다.");
        		this.div_myChr2.setValue(null, null);
        		return;
        	}

        	this.ds_userInfo.setColumn(0, "MY_CHR_ID2", value.id);
        	this.ds_userInfo.setColumn(0, "MY_CHR_NM2", value.name);
        }

        this.cal_bujaeStimeYYYYMMDD_onchanged = function(obj, e)
        {
        	this.msk_bujaeStimeHH24MI.set_value("0800");
        }

        this.cal_bujaeEtimeYYYYMMDD_onchanged = function(obj, e)
        {
        	this.msk_bujaeEtimeHH24MI.set_value("1900");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PAD0310_onload,this);
            this.addEventHandler("onkeyup",this.onkeyupForm,this);
            this.Static16.addEventHandler("onclick",this.Static16_onclick,this);
            this.edt_userId.addEventHandler("onkeyup",this.edt_userId_onkeyup,this);
            this.Static13.addEventHandler("onclick",this.Static13_onclick,this);
            this.rdo_bujaeYn.addEventHandler("onitemchanged",this.rdo_bujaeYn_onitemchanged,this);
            this.div_searchDept.addEventHandler("onkeydown",this.div_searchUser_onkeydown,this);
            this.cbo_jbcPosi.addEventHandler("onitemchanged",this.cbo_jbcPosi_onitemchanged,this);
            this.cbo_jbc.addEventHandler("onitemchanged",this.cbo_jbc_onitemchanged,this);
            this.btn_userIdChk.addEventHandler("onclick",this.btn_userIdChk_onclick,this);
            this.div_license.form.btn_confirm00.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.div_license.form.btn_addLicense.addEventHandler("onclick",this.div_license_btn_addLicense_onclick,this);
            this.div_license.form.btn_deleteLicense.addEventHandler("onclick",this.div_license_btn_deleteLicense_onclick,this);
            this.div_compHist.form.btn_addCompHist.addEventHandler("onclick",this.div_compHist_btn_addCompHist_onclick,this);
            this.div_compHist.form.btn_deleteCompHist.addEventHandler("onclick",this.div_compHist_btn_deleteCompHist_onclick,this);
            this.div_searchUser.addEventHandler("onkeydown",this.div_searchUser_onkeydown,this);
            this.btn_changePwd.addEventHandler("onclick",this.btn_changePwd_onclick,this);
            this.btn_signSave.addEventHandler("onclick",this.btn_signSave_onclick,this);
            this.btn_signDelete.addEventHandler("onclick",this.btn_signDelete_onclick,this);
            this.fup_imgUploadFiles.addEventHandler("onsuccess",this.fup_imgUploadFiles_onsuccess,this);
            this.fup_imgUploadFiles.addEventHandler("onerror",this.fup_uploadFiles_onerror,this);
            this.fup_imgUploadFiles.addEventHandler("onitemchanged",this.fup_uploadFiles_onitemchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static54_onclick,this);
            this.Static51.addEventHandler("onclick",this.Static54_onclick,this);
            this.Static53.addEventHandler("onclick",this.Static54_onclick,this);
            this.btn_imgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.btn_imgSave.addEventHandler("onclick",this.btn_imgSave_onclick,this);
            this.cal_bujaeStimeYYYYMMDD.addEventHandler("onchanged",this.cal_bujaeStimeYYYYMMDD_onchanged,this);
            this.cal_bujaeEtimeYYYYMMDD.addEventHandler("onchanged",this.cal_bujaeEtimeYYYYMMDD_onchanged,this);
            this.fup_signUploadFiles.addEventHandler("onsuccess",this.fup_signUploadFiles_onsuccess,this);
            this.fup_signUploadFiles.addEventHandler("onerror",this.fup_uploadFiles_onerror,this);
            this.fup_signUploadFiles.addEventHandler("onitemchanged",this.fup_uploadFiles_onitemchanged,this);
            this.Static57.addEventHandler("onclick",this.Static54_onclick,this);
        };
        this.loadIncludeScript("PAD0320.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
