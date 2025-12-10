(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_P04");
            this.set_titletext("예약등록");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,214);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"CANCEL_POSS_YN\" type=\"string\" size=\"32\"/><Column id=\"FR_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_ID\" type=\"string\" size=\"32\"/><Column id=\"REQ_EM_YN\" type=\"string\" size=\"32\"/><Column id=\"LM_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE\" type=\"string\" size=\"32\"/><Column id=\"REQ_STAT_CD\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"RTRN_MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_DT\" type=\"string\" size=\"32\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"RESERV_PROC_YN\" type=\"string\" size=\"32\"/><Column id=\"URL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"FR_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"LAST_RTRN_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_STAT_NM\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"END_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"string\" size=\"32\"/><Column id=\"REG_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"LM_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RTRN_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"string\" size=\"32\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_NM\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_NM\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"string\" size=\"32\"/><Column id=\"CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"UPMU_ID1\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"E_DOCU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"LM_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"MAP_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"REG_MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"JOB_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RESERV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RESERV_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESERV_FLAG\" type=\"string\" size=\"32\"/><Column id=\"KEY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FRDT\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","60",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

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

            obj = new Div("divContent","20.00","0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg00","0","99",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg","0","66",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","0","66","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("요청서 제목");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg00_00","0","33",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcReqId","0","33","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("요청서 번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","170","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("요청서 예약 등록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static32","0","24",null,"10","-8",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcReserveDTime","0","99","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("예약일시");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5","38","170","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcReqTitle:5","71",null,"24","5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calReserveDt","stcReserveDTime:5.00","104","130","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.set_validationGroup("input01");
            obj.set_validation("예약일자;NULL|DATETIME:YYYYMMDD");
            obj.set_text("    -  -  ");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskReserveTime","calReserveDt:2","104","65","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_format("##:##");
            obj.set_textAlign("center");
            obj.set_type("string");
            obj.set_validation("예약일시;NULL|DATETIME:HHMI");
            obj.set_validationGroup("input01");
            obj.set_cssclass("msk_WF_normal");
            obj.set_text("__:__");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btn00","163","0","65","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_text("job list");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnProc",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,214,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.stcProcUserNm","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtReqId","value","dsSrBaseInfo","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.mskProcDate","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.stcBg00_00","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContent.form.edtTitle","value","dsSrBaseInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.calReserveDt","value","dsSrBaseInfo","RESERV_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.mskReserveTime","value","dsSrBaseInfo","RESERV_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0010_P04.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SR0010_P04
        * 화면(명)		︰ 요청서 예약 등록
        * 메뉴(경로)	︰
        * 화면 설명	︰ 요청서 예약 등록
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.04.25
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2025.04.25	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.isSave = false;
        this.reservDt;
        this.reservTime;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        	this.dsCond.setColumn(0, "REQ_ID", this.getOwnerFrame().pREQ_ID);
        }

        this.fnInit = function()
        {
        	this.fnSearch();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSearch = function()
        {
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0000D/select02";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrBaseInfo=dsSrBaseInfo";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearchJobList = function()
        {
        	var sTranId = "selectJobList";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SRComm/getServerJobList";	// 서비스명
            var sInDs = "";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsJobList=dsJobList";			// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnReserve = function()
        {
        	var sTranId = "procReserve";							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0000D/procReserve";					// 서비스명
            var sInDs = "dsCond=dsCond dsSrBaseInfo=dsSrBaseInfo";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrBaseInfo=dsSrBaseInfo dsRtn=dsRtn";	// 서버에서 수신할 데이타셋
            var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnCancelReserve = function()
        {
        	var sTranId = "procCancelReserve";						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0000D/procCancelReserve";				// 서비스명
            var sInDs = "dsCond=dsCond dsSrBaseInfo=dsSrBaseInfo";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrBaseInfo=dsSrBaseInfo dsRtn=dsRtn";	// 서버에서 수신할 데이타셋
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
        		case "select01" :
        			this.setProcStatus(true);
        			break;

        		case "procReserve" :
        			if( Ex.isEmpty(this.dsRtn.getColumn(0, "MSG")) )
        			{
        				Ex.core.toast(this, "요청서 예약 등록 처리 되었습니다.");
        				this.isSave = true;
        				this.setProcStatus(false);
        			}
        			else
        			{
        				this.dsSrBaseInfo.setColumn(0, "RESERV_DT", this.reservDt);
        				this.dsSrBaseInfo.setColumn(0, "RESERV_TIME", this.reservTime);

        				var param = {
        					id : "errorprocReserveAlert",
        					msg : this.dsRtn.getColumn(0, "MSG")
        				};
        				Ex.core.error(this, param);
        				this.reservDt = undefined;
        				this.reservTime = undefined;
        			}
        			break;

        		case "procCancelReserve" :
        			if( Ex.isEmpty(this.dsRtn.getColumn(0, "MSG")) )
        			{
        				Ex.core.toast(this, "요청서 예약 등록 취소 처리 되었습니다.");
        				this.isSave = true;
        				this.setProcStatus(false);
        			}
        			else
        			{
        				var param = {
        					id : "errorprocReserveAlert",
        					msg : this.dsRtn.getColumn(0, "MSG")
        				};
        				Ex.core.error(this, param);
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
        		case "pConfirmReserveI" :		// 예약 등록
        			this.reservDt	= this.dsSrBaseInfo.getColumn(0, "RESERV_DT");
        			this.reservTime	= this.dsSrBaseInfo.getColumn(0, "RESERV_TIME");
        			this.fnReserve();
        			break;

        		case "pConfirmCancelReserveI" :	// 예약 취소
        			this.fnCancelReserve();
        			break;

        		case "errorprocReserveAlert" :
        			this.setProcStatus(false);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.setProcStatus = function(isSetTime)
        {
        	if(this.dsSrBaseInfo.getColumn(0, "RESERV_PROC_YN") == "N")	//예약처리여부
        	{
        		if(this.dsSrBaseInfo.getColumn(0, "RESERV_FLAG") == "Y")
        		{
        			this.divContent.form.calReserveDt.set_readonly(true);
        			this.divContent.form.mskReserveTime.set_readonly(true);
        			this.divBottom.form.btnProc.set_text("예약취소");
        		}
        		else
        		{
        			if( Ex.isEmpty(isSetTime) ) isSetTime = false;
        			if(isSetTime)
        			{
        				var dTime = new Date();
        				dTime.setHours(dTime.getHours() + 1);
        				trace("dTime : " + dTime);
        				var dTimeStr = Ex.util.getMaskFormatString(dTime, 'yyyyMMddHHmmss');

        				trace("RESERV_DT : " + dTimeStr.substr(0, 8));
        				this.dsSrBaseInfo.setColumn(0, "RESERV_DT", dTimeStr.substr(0, 8));
        				var hour = dTimeStr.substr(8, 2);
        				trace("RESERV_TIME : " + hour);
        				this.dsSrBaseInfo.setColumn(0, "RESERV_TIME", hour + "00");
        			}

        			this.divContent.form.stcReserveDTime.set_cssclass("sta_WF_inputTitle_E");
        			this.divContent.form.calReserveDt.set_readonly(false);
        			this.divContent.form.mskReserveTime.set_readonly(false);

        			this.divBottom.form.btnProc.set_text("예약등록");
        			this.divContent.form.mskReserveTime.setFocus();
        		}
        		this.divBottom.form.btnProc.set_visible(true);
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
        		case "btnProc" :
        			if(this.dsSrBaseInfo.getColumn(0, "RESERV_FLAG") == "Y")	//예약취소
        			{
        				var param = {
        					id : "pConfirmCancelReserveI",
        					msg : "요청서 예약을 취소 하시겠습니까?"
        				};
        				Ex.core.confirm(this, param);
        				return;
        			}
        			else														//예약등록
        			{
        				if( !Ex.util.checkValidate(this.divContent, "input01") ) return false;

        				var param = {
        					id : "pConfirmReserveI",
        					msg : "요청서 예약 등록을 하시겠습니까?"
        				};
        				Ex.core.confirm(this, param);
        				return;
        			}
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this, this.isSave ? "Y" : "N");
        			break;
        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.formOnRbuttonUp = function(obj,e)
        {
            if(e.ctrlkey && e.shiftkey)
            {
                this.divContent.form.btn00.set_visible(!this.divContent.form.btn00.visible);
            }
        };

        this.divContent_btn00_onclick = function(obj,e)
        {
        	this.fnSearchJobList();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onrbuttonup",this.formOnRbuttonUp,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btn00.addEventHandler("onclick",this.divContent_btn00_onclick,this);
            this.divBottom.form.btnProc.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsSrBaseInfo.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsJobList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsRtn.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0010_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
