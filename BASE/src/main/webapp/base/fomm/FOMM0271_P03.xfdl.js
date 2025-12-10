(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0271_P03");
            this.set_titletext("승인 화면");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,263);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"KM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"80","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnProc",null,null,"80","32","btnClose:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","20","53",null,"133","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcAppvCont","20","53","100","133",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaAppvCont","stcAppvCont:5","58",null,"123","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static06","20","20",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcScore","20","20","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("지식 점수");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Spin("spnScore","125","25","95","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("spn_WF_normal");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_value("");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnClear","spnScore:2","25","24","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ClearIcon");
            obj.set_text("");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,263,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.txaAppvCont","value","dsInput","APPV_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.spnScore","value","dsInput","SCORE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0271_P03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0271_P03
        * 화면(명)	︰ 지식 승인/반려 처리 팝업
        * 메뉴(경로)	︰ 지식관리
        * 화면 설명	︰ 지식 승인/반려 처리 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.12.16
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.12.16	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	if( Ex.isEmpty(this.getOwnerFrame().pKmId) )
        	{
        		var param = {id : "pAlertNoKmIdI", msg : "지식번호가 없습니다."};
        		Ex.core.alert(this, param);
        		return;
        	}
        	else
        	{
        		this.dsInput.setColumn(0, "KM_ID", this.getOwnerFrame().pKmId);
        	}

        	if( Ex.isEmpty(this.getOwnerFrame().pGubun) )
        	{
        		var param = {id : "pAlertSaveGubunI", msg : "승인/반려에 대한 구분값이 올바르지 않습니다."};
        		Ex.core.alert(this, param);
        		return;
        	}
        	else
        	{
        		if(this.getOwnerFrame().pGubun == "APPV")
        		{
        			this.divContent.form.btnClear.set_visible(true);
        			this.divContent.form.stcAppvCont.set_text(Ex.core.word("의견작성"));
        			this.divContent.form.stcScore.set_cssclass("sta_WF_inputTitle_E");
        			//this.divContent.form.spnScore.set_validation(Ex.core.word("의견작성") + ";NULL");
        			//this.divContent.form.spnScore.set_validationGroup("input01");
        			this.dsInput.setColumn(0, "PROC_STS_CD", "KNOW_PROC_STS_CD02");
        			this.divBottom.form.btnProc.set_text(Ex.core.word("승인"));
        			this.divBottom.form.btnProc.set_visible(true);
        			this.divContent.form.spnScore.setFocus();
        		}
        		else if(this.getOwnerFrame().pGubun == "REJECT")
        		{
        			this.divContent.form.btnClear.set_visible(true);
        			this.divContent.form.stcAppvCont.set_text(Ex.core.word("반려사유"));
        			this.divContent.form.stcAppvCont.set_cssclass("sta_WF_inputTitle_E");
        			this.divContent.form.txaAppvCont.set_validation(Ex.core.word("반려사유") + ";NULL");
        			this.divContent.form.txaAppvCont.set_validationGroup("input01");
        			this.dsInput.setColumn(0, "PROC_STS_CD", "KNOW_PROC_STS_CD03");
        			this.divBottom.form.btnProc.set_text(Ex.core.word("반려"));
        			this.divBottom.form.btnProc.set_visible(true);
        			this.divContent.form.spnScore.setFocus();
        		}
        		else if(this.getOwnerFrame().pGubun == "VIEW_A" || this.getOwnerFrame().pGubun == "VIEW_R")
        		{
        			if(this.getOwnerFrame().pGubun == "VIEW_A")
        			{
        				this.divContent.form.stcAppvCont.set_text(Ex.core.word("작성의견"));
        			}
        			else if(this.getOwnerFrame().pGubun == "VIEW_R")
        			{
        				this.divContent.form.stcAppvCont.set_text(Ex.core.word("반려사유"));
        			}

        			this.divContent.form.spnScore.set_value(this.getOwnerFrame().pScore);
        			this.divContent.form.txaAppvCont.set_value(this.getOwnerFrame().pAppvCont);
        			this.divContent.form.spnScore.set_readonly(true);
        			this.divContent.form.txaAppvCont.set_readonly(true);
        		}
        		else
        		{
        			var param = {id : "pAlertSaveGubunI", msg : "승인/반려에 대한 구분값이 올바르지 않습니다.11"};
        			Ex.core.alert(this, param);
        			return;
        		}
        	}
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        //저장
        this.fnProc = function()
        {
        	trace("this.fnProc()~~~~~~~~~~~~~~~~~~~~~~~");
        	// transaction
        	var sTranId = "proc";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SV0400P/save02";	// 서비스명
            var sInDs = "dsInput=dsInput:A";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsResult=dsResult";	// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "proc" :
        			if(this.dsResult.getColumn(0, "RTN_CD") == 0)
        			{
        				Ex.core.pclose(this, "Y");
        			}
        			else if(this.dsResult.getColumn(0, "RTN_CD") == -1)		//등록 상태가 아닌 경우
        			{
        				this.divBottom.form.btnProc.set_visible(false);
        				var oParam = {id : "alertSaveCheckI", msg : "해당 지식 내역은 등록 상태가 아니므로 승인/반려가 불가능합니다.", msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        			else if(this.dsResult.getColumn(0, "RTN_CD") == -2)	//등록/반려 상태인 내역만 삭제 가능
        			{
        				this.divBottom.form.btnProc.set_visible(false);
        				var oParam = {id : "alertSaveCheckI", msg : "이미 삭제된 지식 등록 내역입니다.", msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
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
        		case "pAlertNoKmIdI" :
        		case "pAlertSaveGubunI" :		// 그냥 닫기
        			Ex.core.pclose(this, "N");
        			break;

        		case "pConfirm" :				// 승인 또는 반려 처리
        			this.fnProc();
        			break;

        		case "alertScoreI" :
        			this.divContent.form.spnScore.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCheckValidate = function()
        {
        	if(this.getOwnerFrame().pGubun == "APPV")
        	{
        		if( Ex.isEmpty(this.dsInput.getColumn(0, "SCORE")) )
        		{
        			var oParam = {id : "alertScoreI", msg : "11001", arrparam : [this.divContent.form.stcScore.text], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}
        	if( !Ex.util.checkValidate(this.divContent, "input01") ) return false;
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
        		case "btnClear" :
        			this.dsInput.setColumn(0, "SCORE", "");
        			break;

        		case "btnProc" :
        			if( !this.fnCheckValidate() )
        				return;

        			var param = {
        						id : "pConfirm"
        					  , msg : "10008"
        					  , arrparam : [this.divBottom.form.btnProc.text]
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnProc.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("FOMM0271_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
