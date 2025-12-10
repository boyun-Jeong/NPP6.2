(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_D02");
            this.set_titletext("접수의견(기본화면)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,134);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("stcBg01_00","0","33",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","66",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg00","0","0",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg","0","33",null,null,"0","129",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","33","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("요청서 제목");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcReqId","0","0","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("요청서 번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcReserveDt","0.13%","66","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("예약일시");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5.00","5","160","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtTitle","95.00","38",null,"24","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calReserveDt","stcReserveDt:5","71","160","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("cal_WF_normal");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","2.00","0","129","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록 예약 설정");
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
            obj = new Layout("default","",550,134,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.stcReqId","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtReqId","value","dsRevProc","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.edtOpinion","value","dsRevProc","PROC_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContent.form.edtTitle","value","dsRevProc","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0010_D05.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0010_D05.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR0010_D02
        * 화면(명)	︰ 접수의견 공통
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 검토의견 작성 DIV
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.04.09
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        	작성자		이력
        *------------------------------------------------------------------
        * 2024.04.09	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
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
        	this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.SCRN_WF_PROC_CD);
        }

        this.fnInit = function()
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pIS_OPIN_ESS) )
        	{
        		if(this.getOwnerFrame().pIS_OPIN_ESS)
        		{
        			this.divContent.form.stcOpinion.set_cssclass("sta_WF_inputTitle_E");
        			this.divContent.form.txaOpinion.set_validation(this.divContent.form.stcOpinion.text + ";NULL");
        		}
        	}

        	if( !Ex.isEmpty(this.getOwnerFrame().pOPINION) ) this.dsRtn.setColumn(0, "OPINION", this.getOwnerFrame().pOPINION);
        	this.divContent.form.txaOpinion.setFocus();

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
        		case "select" :
        			//this.wfdsReqCgerDt = this.getOwnerFrame().pDsdWfCger;
        			trace("[SR0010_D02]-this.fnCallback() [select01] SCRN_WF_PROC_CD : " + this.reqInfo.SCRN_WF_PROC_CD);
        			trace("[SR0010_D02]-this.fnCallback() [select01] this.reqInfo.REQ_ID : " + this.reqInfo.REQ_ID);

        			if( this.dsRevProc.rowcount == 0)
        			{
        				var aRow = this.dsRevProc.setInsertRow();
        				this.dsRevProc.setColumn(aRow, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsRevProc.setColumn(aRow, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);

        				if(this.reqInfo.WF_FUNC_CD == "WF_FUNC_04" && (this.reqInfo.SAVE_BTN_YN == "Y" || this.reqInfo.REV_BTN_YN == "Y") )
        				{
        					this.dsRevProc.setColumn(0, "USER_ID", Ex.util.getSession('gvUserId'));
        					this.dsRevProc.setColumn(0, "USER_NM", Ex.util.getSession('gvUserNm'));
        				}
        			}
        			break;
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
        		case "pAlertSaveGubunI" :	// 그냥 닫기
        			this.dsRtn.setColumn(0, "RESULT", "CLOSE");
        			Ex.core.pclose(this, this.dsRtn.saveXML());
        			break;

        		case "pConfirm" :			// 접수/반려 버튼
        			this.dsRtn.setColumn(0, "RESULT", "PROC");
        			Ex.core.pclose(this, this.dsRtn.saveXML());
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.isUpdateForm = function()
        {
        	if( !Ex.util.isUpdated(this.dsRevProc) ) return false;
        	if(this.dsRevProc.getColumn(0, "ROWFLAG") == "I" && Ex.isEmpty(this.divContent.form.txaOpinion.value) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        	if(isReg)
        	{
        		if( !this.fnCheckValidate() ) return false;
        	}
        	return true;
        }

        this.fnRtnCheck = function()
        {
        	if( !this.fnCheckValidate() ) return false;
        	return true;
        }

        this.fnCheckValidate = function()
        {
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") ) return false;
        	return true;
        }

        this.addDatasetTransfer = function(dsObj)
        {
        	var newDsObj = new Dataset;
        	newDsObj.set_name(dsObj.id);
        	newDsObj.loadXML(dsObj.saveXML());
        	this.addChild(dsObj.id, newDsObj);
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
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0010_D05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
