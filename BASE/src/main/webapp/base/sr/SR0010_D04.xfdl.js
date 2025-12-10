(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_D04");
            this.set_titletext("접수의견(처리)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,365);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORTANT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"EFF_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"APEND_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("staAuthTitle","1520","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divContent","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg00_00","0","0",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm00","0","0","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("처리예정시작");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calProcPlanSdt","stcProcUserNm00:5","5","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm00_00","calProcPlanSdt:5","0","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("처리예정종료");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calProcPlanEdt","stcProcUserNm00_00:5","5","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm00_00_00","calProcPlanEdt:5","0","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskProcDate","stcProcUserNm00_00_00:5.00","5","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.getSetter("mask").set("@@@@-@@-@@ @@:@@:@@");
            obj.set_maskchar("_");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_cssclass("msk_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","stcBg00_00:-1",null,"100","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcOpinion00","0","stcProcUserNm00:-1","90","100",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("작업계획");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaPlanEdt","stcOpinion00:5.00","stcBg00_00:4",null,"90","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("작업계획;NULL|MAX_LEN_UTF8:4000");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","stcBg01:-1",null,"100","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcOpinion00_00","0","stcOpinion00:-1","90","100",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("업무보고서\r\n(수행내역)");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaProcDesc","stcOpinion00:5.00","stcBg01:4",null,"90","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("업무보고서(수행내역);NULL|MAX_LEN_UTF8:4000");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","0","stcBg01_00:-1",null,"100","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcOpinion00_00_00","0","stcOpinion00_00:-1","90","100",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("업무보고서\r\n(산출내역)");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaOutDesc","stcOpinion00:5.00","stcBg01_00:4",null,"90","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("업무보고서(산출내역);NULL|MAX_LEN_UTF8:4000");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","2.00","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작업 처리 내역");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,365,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.txaOpinion","value","dsMain","PROC_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.stcProcUserNm","value","dsMain","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtUserNm","value","dsMain","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.mskProcDate","value","dsMain","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.mskProcDate00","value","dsMain","PROC_PLAN_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.mskProcDate00_00","value","dsMain","PROC_PLAN_EDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.mskProcDate","value","dsMain","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.txaPlanEdt","value","dsMain","PROC_PLAN_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.txaProcDesc","value","dsMain","PROC_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.txaOutDesc","value","dsMain","OUT_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.calProcPlanSdt","value","dsMain","PROC_PLAN_SDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContent.form.calProcPlanEdt","value","dsMain","PROC_PLAN_EDT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0010_D04.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0010_D04.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR0010_D04
        * 화면(명)	︰ 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 처리
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.06.27
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        	작성자		이력
        *------------------------------------------------------------------
        * 2024.06.27	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.nextWfProcCdArr;
        /*
        this.selectServiceInfo = {
        	CALLBACK_ID		: ["select01"],
        	CALL_SVC		: ["sr/SRComm/selectRevProc"],

        	IN_DS_WHERE		: [this.dsCond],
        	OUT_DS_OBJ		: [this.dsRevProc]
        };

        this.saveServiceInfo = {
        	CALLBACK_ID		: ["save01"],
        	CALL_SVC		: ["sr/SRComm/callPrSrRevProc"],

        	IN_DS_OBJ		: [new Array(this.dsRevProc)],
        	OUT_DS_OBJ		: []
        };
        */
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);

        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	//this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.SCRN_WF_PROC_CD);

        	if( Ex.isEmpty(this.wfDsReqWfProc) )
        	{
        		this.wfdsReqWfProc = new Dataset();
        	}
        	this.wfdsReqWfProc.loadXML(this.dsWfProc.saveXML());
        }

        this.fnInit = function()
        {
        	this.divContent.form.txaPlanEdt.setFocus();

        	var aRow = this.dsMain.setInsertRow();
        	this.dsMain.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);

        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

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

        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch (pID)
        	{
        		case "" :
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
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pAlertGubunI" :
        			break;

        		case "saveConfirm" :
        			//this.nLastRow = this.dsCmmWordMt.rowposition;	// 마지막 rowposition 저장
        			//this.fnSetDatasetDt();		// 저장용 datset 전처리
        			this.fnCheckValidate();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.isUpdateForm = function()
        {
        	if( !Ex.util.isUpdated(this.dsMain) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function()
        {
        	if( !this.fnCheckValidate() ) return false;
        	return true;
        }

        this.fnCheckValidate = function()
        {
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") ) return false;
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
        		case "" :
        			break;
        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	//obj.setUpdateRow(e);
        	this.dsMain.setColumn(e, "ROWFLAG", "U");
        	//this.dsRevProc.setColumn(e, "ROWFLAG", "I");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsMain.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0010_D04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
