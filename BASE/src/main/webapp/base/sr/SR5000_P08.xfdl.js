(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("alikeSearch");
            this.set_titletext("유사요청건조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAlikeList", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REL_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_URL\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT_HTML_NON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REQ_USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"WF_PROC_NM\" type=\"string\" size=\"32\"/><Column id=\"ATTACH_USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_URL\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"string\" size=\"32\"/><Column id=\"SVC_NM\" type=\"string\" size=\"32\"/><Column id=\"WF_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_INFO_TYPE_CD\" type=\"string\" size=\"32\"/><Column id=\"LMNM\" type=\"string\" size=\"32\"/><Column id=\"CUR_VER_YN\" type=\"string\" size=\"32\"/><Column id=\"FRNM\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_NM\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"string\" size=\"32\"/><Column id=\"LMDT\" type=\"datetime\" size=\"17\"/><Column id=\"REQ_DESC\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DTIME\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"SR_INFO_URL\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_NM\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FRDT\" type=\"datetime\" size=\"17\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfChm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EAI_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfPbm", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"14\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"60\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PBM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_BJC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SOLVED_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SRL_EXM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","0",null,"520","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Grid("alikeGrid","20.00","150",null,"370","10",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAlikeList");
            obj.set_useSort("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"500\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"관련 ID\" background=\"#fcf5ef\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"1\" cssclass=\"grdHCell_WF\" text=\"요청일\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"2\" cssclass=\"grdHCell_WF\" text=\"진행단계\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"3\" cssclass=\"grdHCell_WF\" text=\"제목\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"4\" cssclass=\"grdHCell_WF\" text=\"내용요약\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"5\" cssclass=\"grdHCell_WF\" text=\"요청분류1\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"6\" cssclass=\"grdHCell_WF\" text=\"요청분류2\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"7\" cssclass=\"grdHCell_WF\" text=\"업무분류1\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"8\" cssclass=\"grdHCell_WF\" text=\"업무분류2\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"9\" cssclass=\"grdHCell_WF\" text=\"내용복사\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:REQ_ID\" textAlign=\"center\" color=\"blue\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:REQ_WISH_DT\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" calendarformat=\"yyyy-MM-dd\" readonly=\"true\" maskeditformat=\"YYYY-MM-DD\"/><Cell col=\"2\" text=\"bind:WF_PROC_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TITLE\"/><Cell col=\"4\" text=\"bind:REQ_CONT_HTML_NON\"/><Cell col=\"5\" text=\"bind:REQ_ID1_NM\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsReq1\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"6\" text=\"bind:REQ_ID2_NM\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsReq2\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"7\" text=\"bind:UPMU_ID1_NM\" textAlign=\"left\" combodataset=\"dsUpmu1\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:UPMU_ID2_NM\" textAlign=\"left\" combodataset=\"dsUpmu2\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"normal\"/><Cell col=\"9\" color=\"blue\" cursor=\"pointer\" text=\"선택\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcMiddleLine","0","110",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcMiddleLine00","0","450",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"20","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("3");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00",null,"0","20",null,"1580","100",null,null,null,null,this.divPage.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("5");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"140","-138",null,null,null,null,this.divPage.form);
            obj.set_taborder("6");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00",null,"0","20",null,"0","100",null,null,null,null,this.divPage.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divSearch","20.00","20",null,"90","10",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_divSearchArea");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcReq","20.00","13","70","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_schTitle");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            obj.set_visible("false");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stcTitle","19.00","45","60","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:25.00","46","343","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stcCont","470.00","46","60","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_schTitle");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCont","stcCont:25.00","46","343","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.set_displaynulltext("\'&&\', \'||\' 사용하여 AND, OR 검색 가능");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboReq1","stcReq:15.00","13","170","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("요청분류LV1;NULL");
            obj.set_innerdataset("dsReq1");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_text("");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboReq2","cboReq1:2.00","13","170","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("요청분류LV2;NULL");
            obj.set_innerdataset("dsReq2");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_text("");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stcUpmu","470.00","13","70","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_schTitle");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","stcUpmu:15.00","13","170","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV1;NULL");
            obj.set_innerdataset("dsUpmu1");
            obj.set_type("dropdown");
            obj.set_acceptvaluetype("allowinvalid");
            obj.set_text("");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2","cboUpmu1:2.00","13","170","24",null,null,null,null,null,null,this.divPage.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("업무분류LV2;NULL");
            obj.set_innerdataset("dsUpmu2");
            obj.set_type("dropdown");
            this.divPage.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","20.00","118","78","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("9");
            obj.set_text("유사요청");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:0","118","50","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_visible("true");
            obj.set_countDataset("dsAlikeList");
            obj.set_text("(0건)");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","140",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("11");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20.00","divPage:0",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","8",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form.divSearch.form
            obj = new Layout("default","",0,0,this.divPage.form.divSearch.form,function(p){});
            this.divPage.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPage.form.divSearch.form.edtPjtNm","value","dsCond","PJT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPage.form.divSearch.form.rdoAttend","value","dsCond","ATTEND_FLG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPage.form.divSearch.form.rdoRead","value","dsCond","CONF_FLG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPage.form.divSearch.form.edtTitle","value","dsWfSrm","SR_BRIEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPage.form.divSearch.form.edtCont","value","dsWfSrm","REQ_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPage.form.divSearch.form.cboReq1","value","dsWfSrm","REQ_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPage.form.divSearch.form.cboReq2","value","dsWfSrm","REQ_ID2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divPage.form.divSearch.form.cboUpmu1","value","dsWfSrm","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPage.form.divSearch.form.cboUpmu2","value","dsWfSrm","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5000_P08.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_P08.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 유사요청건조회
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.03.20
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2025.03.20	WEMB		최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	pGridFormats	: 선택 목록에 사용될 그리드 포맷
        	pGridInnerDsArr	: 선택 목록 그리드에 콤보 InnerDataset Object Array
        	pDsData			: 선택 목록 그리드 Bind Dataset Object
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.formObj;
        this.dsSrBaseInfo = (!Ex.isEmpty(this.reqInfo) ? this.reqInfo.PARENT_FORM.topForm.dsSrBaseInfo : null);
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.formObj = obj;
        	this.dsAlikeList.setInsertRow();
        	this.dsAlikeList.setColumn(0,"REQ_ID",this.getOwnerFrame().pReqId); // 요청서ID
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
        	var sTranId = "alikeSearch";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/alikeSearch";		// 서비스명
            var sInDs = "dsWfSrm=dsWfSrm";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAlikeList=dsAlikeList";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택
        this.fnSelect = function(selType)
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
        		case "alikeSearch" :
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

        			Ex.core.popup(
        				this,											// <--- 팝업 실행 스코프
        				"srReqWritePop11",								// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0000_W.xfdl",							// <--- 팝업창 오픈 Url
        				{
        					title : Ex.core.word("요청서"),
        					pWF_FUNC_CD	: "WF_FUNC_00",	//등록
        					pREQ_ID : reqId,
        					pREQ_TMPLAT_ID : "WFT240159",
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
        this.fnPopupAfter = function(pID,varValue)
        {
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "copySrm" :
        		case "copyCont" :
        			this.dsRet.clearData();
        			//this.dsAlikeList.setColumn(0,"IP_VALUE",this.dsSub.getColumn(this.dsSub.rowposition,"IP_VALUE"));	 // 하위코드명
        			this.dsRet.assign(this.dsAlikeList);
        			this.dsRet.copyRow(0, this.dsAlikeList, this.dsAlikeList.rowposition);
        			Ex.core.pclose(this, this.dsRet.saveXML());
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();	// 공통코드 조회

        	let dsDate = this.getOwnerFrame().pDs;
        	this.dsWfSrm.setColumn(0, "REQ_ID1",dsDate.getColumn(0,"REQ_ID1"));
        	this.dsWfSrm.setColumn(0, "REQ_ID2",dsDate.getColumn(0,"REQ_ID2"));
        	this.dsWfSrm.setColumn(0, "UPMU_ID1",dsDate.getColumn(0,"UPMU_ID1"));
        	this.dsWfSrm.setColumn(0, "UPMU_ID2",dsDate.getColumn(0,"UPMU_ID2"));
        	this.dsWfSrm.setColumn(0, "SR_BRIEF",dsDate.getColumn(0,"SR_BRIEF"));
        	//this.dsWfSrm.setColumn(0, "REQ_CONT",dsDate.getColumn(0,"REQ_CONT"));

        	this.fnSearch();	// 검색
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: [ 'BIZC0000'	,     'REQC0000']	// 조회할 상위코드
        		,codeDiv	: [ ''  		,     'NHFIRE'  ]	// 조회할 코드의 업무구분
        		,optStr		: [ 'ALL'     	,     'ALL'	  	]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: [ 'Y'       	,     'Y'	    ]	// 사용여부
        		,filter		: [ ''        	,      ''		]	// filterStr
        		,objDs		: [ this.dsUpmu1, 	this.dsReq1	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :		// 검색
        			this.fnSearch();
        			break;

        		case "btnClose" :		// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.divPage_alikeGrid_oncellclick = function(obj,e)
        {
        	if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "REQ_ID"))
        	{
            		var dsTemp = new Dataset;
               		var oParam = {
                			wfProcCd : ''
                			,optStr: 'NO'
                			,filter	: ''
                			,objDs	: dsTemp
                	}
                	this.wffnGetCger(oParam);

                	Ex.core.popup(
                		this,											// <--- 팝업 실행 스코프
                		"srRelationPop",								// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
                		"sr::SR0000_W.xfdl",							// <--- 팝업창 오픈 Url
                		{
                			title : Ex.core.word("요청서"),
                			pWF_FUNC_CD	: "WF_FUNC_00",	//등록
                			pREQ_ID : obj.getBindDataset().getColumn(e.row, "REQ_ID"),
                			pREQ_TMPLAT_ID :obj.getBindDataset().getColumn(e.row, "REQ_TMPLAT_ID"),
                			pSR_INFO_URL : obj.getBindDataset().getColumn(e.row, "REQ_URL"),
                			pATTACH_USE_YN : "Y"
                		},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
                		//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
                		"autosize,useCloseButton=false"
                	);
        	}
        	else if(e.row > - 1 && e.cell == 9)
        	{
        		if(this.getOwnerFrame().pDs.getColumn(0, "REQ_ID1") == this.dsAlikeList.getColumn(this.dsAlikeList.rowposition, "SR_TYPE1"))
        		{
        			var param = {
        				id : "copySrm"
        			  , msg : "해당 요청서 내용을 복사하시겠습니까?"
        			  , arrparam : ['']
        			  , msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        		else
        		{
        			var param = {
        				id : "copyCont"
        			  , msg : "해당 요청서 내용을 복사하시겠습니까?\n\n작성중인 요청서와 복사하려는 요청서의 요청분류가\n\r달라서 요청내용만 복사 됩니다."
        			  , arrparam : ['']
        			  , msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {

        	if(e.columnid == "REQ_ID1" || e.columnid == "UPMU_ID1" )
        	{
        		var cboObj;
        		var colNm;

        		if(e.columnid == "REQ_ID1")
        		{
        			dsObj	= this.dsReq2;
        			cboObj	= this.divPage.form.divSearch.form.cboReq2;
        			colNm	= "REQ_ID2";
        		}
        		else if(e.columnid == "UPMU_ID1")
        		{
        			dsObj	= this.dsUpmu2;
        			cboObj	= this.divPage.form.divSearch.form.cboUpmu2;
        			colNm	= "UPMU_ID2";
        		}
        		trace("e.newvalue ::::::::::::::::::::::::::::: " + e.newvalue);
        		if( !Ex.isEmpty(e.newvalue) )
        		{
        			var oParam = {
        				upCmmCd	: [e.newvalue	]	// 조회할 상위코드
        				,codeDiv	: ['NHFIRE'		]	// 조회할 코드의 업무구분
        				,optStr		: ['ALL'	]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn		: ['Y'		]	// 사용여부
        				,filter		: [''		]	// filterStr
        				,objDs		: [dsObj	]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);


        			var fRow = dsObj.findRow("CMM_CD", this.dsWfSrm.getColumn(0, colNm));

        			if(fRow == -1 || fRow == 0)
        			{
        				cboObj.set_index(0);
        				cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        			}
        		}
        		else
        		{
        			dsObj.clearData();
        			var aRow = dsObj.addRow();
        			dsObj.setColumn(aRow, "CMM_CD_NM", "- 전체 -");

        			cboObj.set_index(0);
        			cboObj.set_text(dsObj.getColumn(0, "CMM_CD_NM"));
        		}
        	}
        // 	else
        // 	{
        // 	}
        	obj.setUpdateRow(e);
        };

        this.onKeyUp = function(obj,e)
        {
        	if(e.keycode == 13) this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPage.form.alikeGrid.addEventHandler("oncellclick",this.divPage_alikeGrid_oncellclick,this);
            this.divPage.form.divSearch.form.stcReq.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divPage.form.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divPage.form.divSearch.form.stcTitle.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divPage.form.divSearch.form.edtTitle.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divPage.form.divSearch.form.edtTitle.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divPage.form.divSearch.form.stcCont.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divPage.form.divSearch.form.edtCont.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divPage.form.divSearch.form.edtCont.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divPage.form.divSearch.form.cboReq2.addEventHandler("onitemchanged",this.cboReq2_onitemchanged,this);
            this.divPage.form.divSearch.form.stcUpmu.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divPage.form.divSearch.form.cboUpmu1.addEventHandler("onlbuttondown",this.cboUpmu1_onlbuttondown,this);
            this.divPage.form.divSearch.form.cboUpmu2.addEventHandler("onlbuttondown",this.cboUpmu2_onlbuttondown,this);
            this.divPage.form.divSearch.form.cboUpmu2.addEventHandler("onkillfocus",this.cboUpmu2_onkillfocus,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWfChm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfChm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsWfPbm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfPbm.addEventHandler("onvaluechanged",this.onValueChanged,this);
        };
        this.loadIncludeScript("SR5000_P08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
