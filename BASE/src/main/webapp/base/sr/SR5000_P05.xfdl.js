(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("relationSearch");
            this.set_titletext("연관ID조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRelationList", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REL_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"256\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REQ_USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"WF_PROC_NM\" type=\"string\" size=\"32\"/><Column id=\"ATTACH_USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_URL\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"string\" size=\"32\"/><Column id=\"SVC_NM\" type=\"string\" size=\"32\"/><Column id=\"WF_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_INFO_TYPE_CD\" type=\"string\" size=\"32\"/><Column id=\"LMNM\" type=\"string\" size=\"32\"/><Column id=\"CUR_VER_YN\" type=\"string\" size=\"32\"/><Column id=\"FRNM\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_NM\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"string\" size=\"32\"/><Column id=\"LMDT\" type=\"datetime\" size=\"17\"/><Column id=\"REQ_DESC\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DTIME\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"SR_INFO_URL\" type=\"string\" size=\"32\"/><Column id=\"SVC_DTL_NM\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FRDT\" type=\"datetime\" size=\"17\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfChm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfSrm", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"10\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"60\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SR_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SR_ODV_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA1_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BA2_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_EXEC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPL_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_WKP\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SR_CAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_RECP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"SR_REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EAI_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfPbm", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"14\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"60\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PBM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_BJC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SOLVED_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SRL_EXM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REL_PROC_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","0",null,"290","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Grid("relationGrid","10","10",null,"270","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRelationList");
            obj.set_useSort("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"관련 ID\" background=\"#fcf5ef\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"1\" cssclass=\"grdHCell_WF\" text=\"요청일\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"2\" cssclass=\"grdHCell_WF\" text=\"진행단계\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"3\" cssclass=\"grdHCell_WF\" text=\"제목\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"4\" cssclass=\"grdHCell_WF\" text=\"업무분류1\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"5\" cssclass=\"grdHCell_WF\" text=\"업무분류2\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"6\" cssclass=\"grdHCell_WF\" text=\"업무분류3\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"7\" cssclass=\"grdHCell_WF\" text=\"담당자\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:REL_REQ_ID\" textAlign=\"center\" color=\"blue\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:REQ_DT\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" calendarformat=\"yyyy-MM-dd\" readonly=\"true\"/><Cell col=\"2\" text=\"bind:ING_PHASE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SR_BRIEF\"/><Cell col=\"4\" text=\"bind:UPMU_ID1\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:UPMU_ID2\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:UPMU_ID3\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:WORK_USER_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcMiddleLine","0","0",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("stcMiddleLine00","0","280",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","10.00","divPage:2",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","8",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","110","8",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("변경추가이관");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5000_P05.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_P05.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 연관ID조회
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.03.12
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2025.03.12	WEMB		최초작성
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
        	this.dsCond.setInsertRow();
        	this.dsCond.setColumn(0,"REQ_ID", this.getOwnerFrame().pReqId);								//요청서ID
        	this.dsCond.setColumn(0,"REL_PROC_TYPE", (this.getOwnerFrame().pReqId||'').substring(0,3));
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
        	var sTranId = "relationId";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/relationId";							// 서비스명
            var sInDs = "dsRelationList=dsCond";							// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsRelationList=dsRelationList dsWfSrm=dsWfSrm dsWfPbm=dsWfPbm";	// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 변경이관 추가
        this.fnSave = function()
        {
        	// 서비스-변경 , 문제-변경 변경이관이 두가지형식으로 나뉨.
        	// 서비스-변경
        	if((this.dsWfSrm.getColumn(0, "REQ_ID")||'').substring(0,3) == "SRM")
        	{
        		this.dsWfChm.setColumn(0, "REQ_ID", 			this.dsWfSrm.getColumn(0, "REQ_ID"));
        		this.dsWfChm.setColumn(0, "SRM_REQ_ID", 		this.dsWfSrm.getColumn(0, "REQ_ID"));
        		this.dsWfChm.setColumn(0, "REL_PROC_TYPE", 		"SRM");

        		this.dsWfChm.setColumn(0, "EM_YN", 				this.dsWfSrm.getColumn(0, "EM_YN"));  // 변경여부
        		this.dsWfChm.setColumn(0, "REQ_TMPLAT_ID", 		"WFT240159"); 	 // 변경관리
        		this.dsWfChm.setColumn(0, "WF_PROC_CD",        	"WF_PROC_2010"); // 접수단계
        		this.dsWfChm.setColumn(0, "ING_PHASE",         	"CHM0003");  	 // 접수단계
        		this.dsWfChm.setColumn(0, "TITLE", 				this.getOwnerFrame().pSrTitle); 		// 타이틀
        		this.dsWfChm.setColumn(0, "REQ_WISH_DT", 		this.getOwnerFrame().pSrReqWishDt); 	// 희망완료일 - BASEINFO
        		this.dsWfChm.setColumn(0, "REQ_WISH_SDT", 		this.getOwnerFrame().pSrReqWishDt); 	// 희망완료일 - WFCHM
        		this.dsWfChm.setColumn(0, "CHM_CATEGORY", 		"CCCT0B00"); // 변경범주 TODO 요청서에서 임시로 보내는 어플리케이션변경.

        		this.dsWfChm.setColumn(0, 'REQ_CONT', 			this.dsWfSrm.getColumn(0, "REQ_CONT"));
        		this.dsWfChm.setColumn(0, 'PRE_CONF_USER_ID', 	this.dsWfSrm.getColumn(0, "PRE_CONF_USER_ID")); // 사전협의자명
        		this.dsWfChm.setColumn(0, 'PRE_CONF_DEPT_ID', 	this.dsWfSrm.getColumn(0, "PRE_CONF_DEPT_ID")); // 사전협의자부서

        		// 요청자 항목
        		this.dsWfChm.setColumn(0, "REQ_DT",            	Ex.util.today());
        		//this.dsWfChm.setColumn(0, "USER_ID", 			this.dsWfSrm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "USER_ID",       		Ex.util.getSession('gvUserId'));
        		//this.dsWfChm.setColumn(0, "REQ_USER_ID",       	this.dsWfSrm.getColumn(0, "WORK_USER_ID"));
        		this.dsWfChm.setColumn(0, "REQ_USER_ID",       	Ex.util.getSession('gvUserId'));
        		this.dsWfChm.setColumn(0, "REQ_DEPT_ID",       	this.dsWfSrm.getColumn(0, "WORK_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "REQ_USER_JBC_POSI", 	this.dsWfSrm.getColumn(0, "WORK_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "REQ_USER_NM",       	this.dsWfSrm.getColumn(0, "WORK_USER_NM"));

        		this.dsWfChm.setColumn(0, "SR_REQ_USER_ID",      this.dsWfSrm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "SR_REQ_DEPT_ID",      this.dsWfSrm.getColumn(0, "REQ_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "SR_REQ_USER_JBC_POSI",this.dsWfSrm.getColumn(0, "REQ_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "SR_REQ_USER_NM",      this.dsWfSrm.getColumn(0, "REQ_USER_NM"));

        		//this.dsWfChm.setColumn(0, "WORK_USER_ID",      	this.dsWfSrm.getColumn(0, "WORK_USER_ID"));
        		this.dsWfChm.setColumn(0, "WORK_USER_ID",      	Ex.util.getSession('gvUserId'));
        		this.dsWfChm.setColumn(0, "WORK_DEPT_ID",      	this.dsWfSrm.getColumn(0, "WORK_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "WORK_USER_JBC_POSI",	this.dsWfSrm.getColumn(0, "WORK_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "WORK_USER_NM",      	this.dsWfSrm.getColumn(0, "WORK_USER_NM"));
        		this.dsWfChm.setColumn(0, "SITE_USER_ID",      	this.dsWfSrm.getColumn(0, "SITE_USER_ID"));
        		this.dsWfChm.setColumn(0, "SITE_DEPT_ID",      	this.dsWfSrm.getColumn(0, "SITE_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "SITE_USER_JBC_POSI",	this.dsWfSrm.getColumn(0, "SITE_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "SITE_USER_NM",      	this.dsWfSrm.getColumn(0, "SITE_USER_NM"));

        		this.dsWfChm.setColumn(0, "SR_BRIEF",          	this.getOwnerFrame().pSrTitle);
        		this.dsWfChm.setColumn(0, 'REQ_ID1', 			this.dsWfSrm.getColumn(0, "REQ_ID1"));
        		this.dsWfChm.setColumn(0, 'REQ_ID2', 			this.dsWfSrm.getColumn(0, "REQ_ID2"));
        		this.dsWfChm.setColumn(0, "UPMU_ID1",          	this.dsWfSrm.getColumn(0, "UPMU_ID1"));
        		this.dsWfChm.setColumn(0, "UPMU_ID2",          	this.dsWfSrm.getColumn(0, "UPMU_ID2"));
        		this.dsWfChm.setColumn(0, "UPMU_ID3",          	this.dsWfSrm.getColumn(0, "UPMU_ID3"));

        		this.dsWfChm.setColumn(0, "REQ_WISH_STIME",    	this.dsWfSrm.getColumn(0, "REQ_WISH_STIME"));
        		this.dsWfChm.setColumn(0, "AGREE_COMP_EDT",    	this.dsWfSrm.getColumn(0, "AGREE_COMP_DT"));
        		this.dsWfChm.setColumn(0, "AGREE_COMP_ETIME",  	this.dsWfSrm.getColumn(0, "AGREE_COMP_TIME"));
        		this.dsWfChm.setColumn(0, "RECP_PATH",         	"CSRIN001"); // 접수경로
        		this.dsWfChm.setColumn(0, "PL_LEVEL",          this.dsWfSrm.getColumn(0, "OUTP_MH"));
        	}
        	else if ((this.dsWfPbm.getColumn(0, "REQ_ID")||'').substring(0,3) == "PBM")
        	{ // 문제-변경
        		this.dsWfChm.setColumn(0, "REQ_ID", 			this.dsWfPbm.getColumn(0, "REQ_ID"));
        		this.dsWfChm.setColumn(0, "SRM_REQ_ID", 		this.dsWfPbm.getColumn(0, "REQ_ID"));
        		this.dsWfChm.setColumn(0, "REL_PROC_TYPE", 		"PBM"); // 문제

        		this.dsWfChm.setColumn(0, "REQ_TMPLAT_ID", 		"WFT250027"); 	 // 변경관리
        		this.dsWfChm.setColumn(0, "WF_PROC_CD",        	"WF_PROC_2010"); // 접수단계
        		this.dsWfChm.setColumn(0, "ING_PHASE",         	"CHM0003");  	 // 접수단계
        		this.dsWfChm.setColumn(0, "TITLE", 				this.getOwnerFrame().pSrTitle); 		// 타이틀
        		this.dsWfChm.setColumn(0, "REQ_WISH_DT", 		this.getOwnerFrame().pSrReqWishDt); // 희망완료일 - BASEINFO
        		this.dsWfChm.setColumn(0, "REQ_WISH_SDT", 		this.getOwnerFrame().pSrReqWishDt); // 희망완료일 - WFCHM
        		this.dsWfChm.setColumn(0, "CHM_CATEGORY", 		"CCCT0B00"); // 변경범주 TODO 요청서에서 임시로 보내는 어플리케이션변경.

        		this.dsWfChm.setColumn(0, 'REQ_CONT', 			this.dsWfPbm.getColumn(0, "REQ_CONT"));
        		this.dsWfChm.setColumn(0, 'PRE_CONF_USER_ID', 	this.dsWfPbm.getColumn(0, "PRE_CONF_USER_ID")); // 사전협의자명
        		this.dsWfChm.setColumn(0, 'PRE_CONF_DEPT_ID', 	this.dsWfPbm.getColumn(0, "PRE_CONF_DEPT_ID")); // 사전협의자부서

        		// 요청자 항목
        		this.dsWfChm.setColumn(0, "REQ_DT",            	Ex.util.today());
        		//this.dsWfChm.setColumn(0, "USER_ID", 			this.dsWfPbm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "USER_ID", 			Ex.util.getSession('gvUserId'));
        		//this.dsWfChm.setColumn(0, "REQ_USER_ID",       	this.dsWfPbm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "REQ_USER_ID", 		Ex.util.getSession('gvUserId'));

        		this.dsWfChm.setColumn(0, "REQ_DEPT_ID",       	this.dsWfPbm.getColumn(0, "REQ_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "REQ_USER_JBC_POSI", 	this.dsWfPbm.getColumn(0, "REQ_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "REQ_USER_NM",       	this.dsWfPbm.getColumn(0, "REQ_USER_NM"));

        		//this.dsWfChm.setColumn(0, "SR_REQ_USER_ID",      this.dsWfPbm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "SR_REQ_USER_ID",      Ex.util.getSession('gvUserId'));
        		this.dsWfChm.setColumn(0, "SR_REQ_DEPT_ID",      this.dsWfPbm.getColumn(0, "REQ_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "SR_REQ_USER_JBC_POSI",this.dsWfPbm.getColumn(0, "REQ_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "SR_REQ_USER_NM",      this.dsWfPbm.getColumn(0, "REQ_USER_NM"));

        		//this.dsWfChm.setColumn(0, "WORK_USER_ID",      	this.dsWfPbm.getColumn(0, "REQ_USER_ID"));
        		this.dsWfChm.setColumn(0, "WORK_USER_ID",      	Ex.util.getSession('gvUserId'));
        		this.dsWfChm.setColumn(0, "WORK_DEPT_ID",      	this.dsWfPbm.getColumn(0, "REQ_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "WORK_USER_JBC_POSI",	this.dsWfPbm.getColumn(0, "REQ_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "WORK_USER_NM",      	this.dsWfPbm.getColumn(0, "REQ_USER_NM"));

        		this.dsWfChm.setColumn(0, "SITE_USER_ID",      	this.dsWfPbm.getColumn(0, "SITE_USER_ID"));
        		this.dsWfChm.setColumn(0, "SITE_DEPT_ID",      	this.dsWfPbm.getColumn(0, "SITE_DEPT_ID"));
        		this.dsWfChm.setColumn(0, "SITE_USER_JBC_POSI",	this.dsWfPbm.getColumn(0, "SITE_USER_JBC_POSI"));
        		this.dsWfChm.setColumn(0, "SITE_USER_NM",      	this.dsWfPbm.getColumn(0, "SITE_USER_NM"));

        		this.dsWfChm.setColumn(0, "SR_BRIEF",          	this.getOwnerFrame().pSrTitle);
        		this.dsWfChm.setColumn(0, 'REQ_ID1', 			this.dsWfPbm.getColumn(0, "REQ_ID1"));
        		this.dsWfChm.setColumn(0, 'REQ_ID2', 			this.dsWfPbm.getColumn(0, "REQ_ID2"));
        		this.dsWfChm.setColumn(0, "UPMU_ID1",          	this.dsWfPbm.getColumn(0, "UPMU_ID1"));
        		this.dsWfChm.setColumn(0, "UPMU_ID2",          	this.dsWfPbm.getColumn(0, "UPMU_ID2"));
        		this.dsWfChm.setColumn(0, "UPMU_ID3",          	this.dsWfPbm.getColumn(0, "UPMU_ID3"));

        		this.dsWfChm.setColumn(0, "REQ_WISH_STIME",    	"2359");
        		//this.dsWfChm.setColumn(0, "AGREE_COMP_EDT",    	this.dsWfPbm.getColumn(0, "AGREE_COMP_DT"));

        		//alert("REQ_WISH_DT : " + this.dsSrBaseInfo.getColumn(0, "REQ_WISH_DT"));
        		this.dsWfChm.setColumn(0, "AGREE_COMP_EDT",    	this.dsSrBaseInfo.getColumn(0, "REQ_WISH_DT"));
        		this.dsWfChm.setColumn(0, "AGREE_COMP_ETIME",  	"2359");
        		this.dsWfChm.setColumn(0, "RECP_PATH",         	"CSRIN003"); // 접수경로
        		this.dsWfChm.setColumn(0, "PL_LEVEL",          	this.dsWfPbm.getColumn(0, "OUTP_MH"));
        		this.dsWfChm.setColumn(0, "CI_ID",          	this.dsWfPbm.getColumn(0, "CI_ID"));
        	}


        	var sTranId = "chmAdd";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/chmAdd";							// 서비스명
            var sInDs = "dsWfChm=dsWfChm dsWfPbm=dsWfPbm";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsRelationList=dsRelationList";					// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "relationId" :
        			Ex.core.toast(this, "10002");
        			var btnVisible = false;
        			if(Ex.util.getSession('gvItDeptYn') == "Y" || Ex.util.getSession('gvDeptCd') == "E9999")
        			{
        				if(this.dsCond.getColumn(0, "REL_PROC_TYPE") == "PBM")
        				{
        					if(this.dsRelationList.rowcount == 0)	btnVisible = true;
        					//btnVisible = true;
        				}
        				else
        				{
        					btnVisible = true;
        				}
        				this.divBtnBottom.form.btnSave.set_visible(btnVisible);
        			}
        			break;

        		case "chmAdd" :
        			this.fnSearch();
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

        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        		case "srRelationPop" :
        			this.fnSearch();	// 검색
        			break;
        	}

        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "btnSave" :
        			this.fnSave();
        		break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnSearch();	// 검색
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

        		case "btnSave" :		// 변경이관 추가
        			var param = {
        				  id : "btnSave"
        				, msg : "변경이관을 추가 등록 하시겠습니까?"
        				, arrparam : ['']
        				, msgtype : "I"
        			};
        			Ex.core.confirm(this, param);
        			return false;
        			break;
        	}
        }

        this.divPage_relationGrid_oncellclick = function(obj,e)
        {
        	if(e.row > - 1 && e.cell == obj.getBindCellIndex("body", "REL_REQ_ID"))
        	{
        	/*	var dsRow = obj.getDatasetRow(e.row);
        		var reqTmplatId = "WFT240159";
        		var reqTmplatVer = "1";
        		var reqId = obj.getBindDataset().getColumn(dsRow, "REL_REQ_ID");

        		this.wffnSearchWfTmplat(reqTmplatId, reqTmplatVer, reqId);
        	*/
        		//var dsRow = obj.getDatasetRow(e.row);

        		this.dsWfProc = this.wffnGetOptDsByWfProcCd();

        		let REQ_TMPLAT_ID = "";
        		let SR_INFO_URL	  = "";
        		if(this.getOwnerFrame().pReqId.substr(0,3) == "PBM")
        		{
        			// 문제관리
        			REQ_TMPLAT_ID = "WFT250027";
        			SR_INFO_URL   = "chm::CHM0001_D01.xfdl";
        		}
        		else
        		{
        			// 서비스/일반요청
        			REQ_TMPLAT_ID = "WFT240159";
        			SR_INFO_URL   = "chm::CHM0001_D01.xfdl";
        		}

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
        				title : "요청서",
        				pWF_FUNC_CD	: "WF_FUNC_00",	//등록
        				pREQ_ID : obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), "REL_REQ_ID"),
        				pREQ_TMPLAT_ID : REQ_TMPLAT_ID,
        				pSR_INFO_URL : SR_INFO_URL,
        				pATTACH_USE_YN : "Y"
        			},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			//"width=1500,height=817,useCloseButton=false"	// <--- width/height/modeless(프레임 처리 옵션)
        			"autosize,useCloseButton=false"
        		);
        	}
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPage.form.relationGrid.addEventHandler("oncellclick",this.divPage_relationGrid_oncellclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWfChm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfChm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsWfSrm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfSrm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsWfPbm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfPbm.addEventHandler("onvaluechanged",this.onValueChanged,this);
        };
        this.loadIncludeScript("SR5000_P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
