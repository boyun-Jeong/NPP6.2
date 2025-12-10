(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ALARM_L01");
            this.set_titletext("알림 수신 목록");
            this.set_scrolltype("both");
            this.set_tooltiptype("inplace");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MT_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_REF\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_PARAMS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPostDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTreeTitle","0","71","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("알림 수신 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:0","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAlarm","0","102","100%","579",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"30\"/><Column size=\"220\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"수신일시\"/><Cell col=\"2\" text=\"경과\"/><Cell col=\"3\" text=\"종류\"/><Cell col=\"4\" text=\"확인 여부\"/><Cell col=\"5\" text=\"이동\"/><Cell col=\"6\" text=\"알림내용\"/><Cell col=\"7\" text=\"확인일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:RECEIVED_DT\"/><Cell col=\"2\" text=\"bind:ELAPSEDTIME\"/><Cell col=\"3\" text=\"bind:ALARM_TYPE\"/><Cell col=\"4\" text=\"bind:CONFIRM_YN\" cssclass=\"expr:CONFIRM_YN == &apos;미확인&apos; ? &apos;grdBCell_ReadEvent&apos; : &apos;&apos;\"/><Cell col=\"5\" displaytype=\"imagecontrol\" text=\"theme://img_bak/ico_TF_Itsm.png\" cursor=\"pointer\"/><Cell col=\"6\" text=\"bind:ALARM_CONTS\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:CONFIRM_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle00","20.00","13","105","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("알람 수신 일시");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","21",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","101",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01_00","349.00","13","15","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divDate","stcTitle00:0.00","8","260","40",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("div00");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static01","122.00","5","15","24",null,null,null,null,null,null,this.divSearchArea.form.divDate.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearchArea.form.divDate.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","Static01:0","5","120","24",null,null,null,null,null,null,this.divSearchArea.form.divDate.form);
            obj.set_taborder("0");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearchArea.form.divDate.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate",null,"5","120","24","Static01:0",null,null,null,null,null,this.divSearchArea.form.divDate.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearchArea.form.divDate.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm00","divDate:30.00","13","58","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("미확인");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkConfirmN","stcReqTmplatNm00:0.00","13","24","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_truevalue("N");
            obj.set_falsevalue("Y");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","50",null,"20","-2",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","92",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn",null,"69","120","24","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllRead",null,"0","90","24","0",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("모두 읽음");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.divTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form.divDate.form
            obj = new Layout("default","",0,0,this.divSearchArea.form.divDate.form,function(p){});
            this.divSearchArea.form.divDate.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearchArea.form.edtSndUsr","value","dsCond","NOTI_CGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboDateType","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.stcReqTmplatNm00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.chkConfirmN","value","dsCond","CONFIRM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.divDate.form.calBeginDate","value","dsCond","SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.divDate.form.calEndDate","value","dsCond","EDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0261_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ ALARM_L01
        * 화면(명)		︰ 알림수신목록
        * 메뉴(경로)	︰ frTop btnAlarm : 클릭 이벤트 / TEST > 알림수신목록
        * 화면 설명	︰ 알림수신목록 확인
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.22
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.22  정하림		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.alaramId = '';
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 조회
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	var rowPos = this.dsCond.setAddRow();
        	var today = Ex.util.getMaskFormatString(new Date(), "yyyyMMdd");

        	this.dsCond.setColumn(rowPos, 'SDATE', Ex.util.addDate(today, -7));
        	this.dsCond.setColumn(rowPos, 'EDATE', Ex.util.today());

        	this.dsCond.setColumn(rowPos, 'USER_ID', Ex.util.getSession('gvUserId'));
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "ALARM/select01";            	// 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       			// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 게시글 조회
        this.fnSearchPost = function()
        {
        	// transaction
        	var sTranId = "select02";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select01";               // 서비스명
            var sInDs = "dsCond=dsCond";                  	   // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsPostDt=dsPostDt";          		   // 서버에서 수신할 데이타셋
        	var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	var bAsync = false;								// true(생략) : 비동기 / false : 동기
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg, '', bAsync); // callback : default, bAsync : 동기처리 목적
        }

        // 저장
        this.fnUpdate = function()
        {
        	var sTranId = "updateReadYn";                   // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "ALARM/updateReadYn";            // 서비스명
            var sInDs = "dsCond=dsCond dsData=dsData:U";    // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       			// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	var bAsync = false;								// true(생략) : 비동기 / false : 동기
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg, '', bAsync); // callback : default, bAsync : 동기처리 목적
        }


        // 읽음 처리
        this.fnAllRead = function(objDs)
        {
        	if(objDs.getCaseCount("CONFIRM_YN!='확인'") == 0) { // 체크한 알림 전체가 이미 읽은 알림일 경우
        		Ex.core.toast(this, "읽음 처리할 알림이 없습니다.", null, {toastType:'W'});
        	}
        	else { // 체크한 알림 중 읽지 않은 알림이 하나라도 있을 경우
        		var param = {	id : "readAllConfirm"
        			  , msg : "모두 읽음 처리하시겠습니까?"
        			  , arrparam : ['']
        			  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        	}

        }

        this.fnCheckValidate = function()
        {
        		if( !Ex.util.isUpdated(this.dsData) )
        		return false;

        	return true;
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
        			Ex.core.toast(this, "10002");
        			break;

        		case "select02" :

        			break;

        		case "updateReadYn" :
        			// Top에 존재하는 transaction 함수 호출 (알림 cnt 동기화 목적)
        			this.objApp.MAIN_TOP.form.fnSelectAlarmCnt();
        			Ex.core.toast(this, "알림을 읽었습니다.", null, {toastType:'S'});

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
        		case "linkPop" :
        			if( !Ex.isEmpty(this.dsCond.getColumn(0, "ALARM_ID")) )
        				this.fnUpdate(); // 읽음 처리
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
        		case "readAllConfirm" : // 모두 읽음 (예) 처리
        			for(var i = this.dsData.rowcount-1; i >= 0; i--) {
        				if(this.dsData.getColumn(i, "CONFIRM_YN") != '확인') { // 이미 확인 처리된 것들이 체크되었을 경우 / 해당 Row 제외 후 Update
        					var alarmId =  this.dsData.getColumn(i, "ALARM_ID");
        					this.dsCond.setColumn(0, "ALARM_ID", alarmId); // dsCond에 ALARM_ID 추가
        					this.dsData.setColumn(i, "ROWFLAG", "U"); // 업데이트 처리
        					//trace("현재 dsData : ", this.dsData.getColumn(i, "CONFIRM_YN"));
        					//trace("현재 ALARM_ID : ", this.dsData.getColumn(i, "ALARM_ID"));

        					this.fnUpdate(); // 읽음 처리
        				}
        				this.dsCond.setColumn(this.dsCond.rowposition, "ALARM_ID", ''); // 초기화
        			}

        			break;


        	}
        }


        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdAlarm.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	var arrBtn = [this.divTopBtn.form.btnAllRead]; // 저장/업데이트
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD']				// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'ALL']					// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y']					// 사용여부
        		,filter	: ['',			"ITM_VAL_1=='NTC'||ITM_VAL_1=='ETC'"]				// filterStr
        		,objDs	: [this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckDateValidate = function()
        {
        	// 게시종료 > 게시시작 validation
        	var rowpos = this.dsCond.rowposition;
        	var SDATE	= this.dsCond.getColumn(rowpos, 'SDATE');
        	var EDATE 	= this.dsCond.getColumn(rowpos, 'EDATE');
        	var sDt	= Ex.util.strToDate(SDATE+"000000");
        	var eDt	= Ex.util.strToDate(EDATE+"000000");

        	if(sDt > eDt) {
        		var param = {
        				id : "sDtLateAlert"
        			  , msg : "10013"
        			  , arrparam : [Ex.core.word('검색시작일시'), Ex.core.word('검색종료일시')]
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if( Ex.isEmpty(this.dsCond.getColumn(0, 'SDATE')) || Ex.isEmpty(this.dsCond.getColumn(0, 'EDATE')) ){
        		var param = {
        			  id	: "setDateAlert"				//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "검색 기간을 알맞게 지정해주세요."	//메시지 내용
        			, arrparam : [""]						//메시지의 변수에 들어갈 실제값
        			, msgtype : "W"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
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
        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;

        		case 'btnSearch' :	// 조회
        			if( !this.fnCheckDateValidate() ){
        				return false;
        			}else{
        				this.fnSearch();
        			}
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAllRead' :
        			this.fnAllRead(this.dsData);
        			break;
        	}
        }

        // 데이터셋 column 값 변경 후 이벤트
        this.dsData_Oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);	// ROWFLAG컬럼 변경을 위한 함수 호출
        };

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };


        this.grdAlarm_oncellclick = function(obj,e)
        {
        	if(e.row > -1 && e.cell == obj.getBindCellIndex("body", "CONFIRM_YN")){ // 확인여부 클릭하면

        		if(this.dsData.getColumn(e.row, "CONFIRM_YN") == "미확인"){ // 이미 읽음 처리 된 것 제외하고 처리하기
        			var alaramId = this.dsData.getColumn(e.row, "ALARM_ID");
        			this.dsCond.setColumn(0, "ALARM_ID", alaramId);
        			this.dsData.setColumn(e.row, "ROWFLAG", "U");

        			this.fnUpdate(); // 읽음 처리
        		}else{
        			Ex.core.toast(this, "이미 확인한 알림입니다.", null, {toastType:'W'});
        		}

        	}

        	if( e.cell == 5 ) // 이동 클릭하면
        	{
        		var url = this.dsData.getColumn(e.row, "ALARM_REF");
        		var paramArr = JSON.parse(this.dsData.getColumn(e.row, "ALARM_PARAMS")); // JSON 문자열을 객체 배열로 변환
        		var fromPost =  this.dsData.getColumn(e.row, "ALARM_TYPE_CD").substr(5,2);

        		var pPostNo = paramArr[0].pPostNo;
        		var pPostMtType = paramArr[0].pPostMtType;

        		this.dsCond.setColumn(0, "POST_DT_NO", pPostNo);

        		if( !Ex.isEmpty(pPostNo) && ( fromPost == "01" ||  fromPost == "05" ||  fromPost == "06" )){
        			this.fnSearchPost();

        			if(this.dsPostDt.rowcount == 0 || this.dsPostDt.getColumn(this.dsPostDt.rowposition, "DEL_YN") == "Y"){
        				var param = {
        					  id	: "emptyDataSet"					//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "삭제되었거나 접근할 수 없는 게시글입니다."	//메시지 내용
        					, arrparam : [""]							//메시지의 변수에 들어갈 실제값
        					, msgtype : "W"								//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}

        		if(this.dsData.getColumn(e.row, "CONFIRM_YN") == "미확인"){	 	// 이미 읽음 처리 된 것 제외하고 처리하기(팝업 띄워서 확인==읽음)
        			this.alaramId = this.dsData.getColumn(e.row, "ALARM_ID");
        			this.dsCond.setColumn(0, "ALARM_ID", this.alaramId);
        			this.dsData.setColumn(e.row, "ROWFLAG", "U");
        		}

        		//쪽지 수신 알림-CDALM03,회의록 불참 알림-CDALM07,계시판 알림 팝업 분기
        		if (this.dsData.getColumn(e.row, "ALARM_TYPE_CD") == "CDALM07")
        		{
        			Ex.core.popup(
        			this,
        			"linkPop",
        			url,             					 // <--- 팝업창 오픈 Url
        			{ title			: Ex.core.word("회의 상세"),
        			  pPopType		: "R",			 	 // 회의 불참자와 로그인 user 동일인
        			  pMeetId		: pPostNo,			 // meet_id
        			  //pPostMtType	: pPostMtType,		 // 게시판 타입
        			  //pIsAlarmLink	: true
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"width=1200,height=750"
        			);

        		} else if (this.dsData.getColumn(e.row, "ALARM_TYPE_CD") == "CDALM03") {

        			Ex.core.popup(
        			this,
        			"linkPop",
        			url,             					 // <--- 팝업창 오픈 Url
        			{ title			: Ex.core.word("쪽지 내용"),
        			  //pPopType		: "R",			 	 // 회의 불참자와 로그인 user 동일인
        			  memoId		: pPostNo,			 // meet_id
        			  flag			: "RCV",		 // RCV,SND
        			  //pIsAlarmLink	: true
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"width=1060,height=610"
        			);

        		}
        		else {
        			Ex.core.popup(
        			this,
        			"linkPop",				 			 // 답글 작성할 경우 동일한 팝업 표시해야 하는데, 동일한 ID 로 띄울 수 없으므로 조치
        			url,             					 // <--- 팝업창 오픈 Url
        			{ title			: Ex.core.word("알림 발생 화면 (열람용)"),
        			  pPopType		: "R",			 	 // 고정
        			  pPostNo		: pPostNo,			 // 게시글 번호
        			  pPostMtType	: pPostMtType,		 // 게시판 타입
        			  pIsAlarmLink	: true
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"
        			);
        		}

        	}

        };


        // 미확인 체크할때마다 조회
        this.divSearchArea_chkConfirmN_onchanged = function(obj,e)
        {
        	if( !this.fnCheckDateValidate() ){
        		return false;
        	}else{
        		if(e.postvalue == "Y") this.dsCond.setColumn(0, "CONFIRM_YN", "");
        		this.fnSearch();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stcTreeTitle.addEventHandler("onclick",this.stcTreeTitle_onclick,this);
            this.grdAlarm.addEventHandler("oncellclick",this.grdAlarm_oncellclick,this);
            this.divSearchArea.form.stcTitle00.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.divDate.form.calEndDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.divDate.form.calBeginDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcReqTmplatNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearchArea.form.chkConfirmN.addEventHandler("onchanged",this.divSearchArea_chkConfirmN_onchanged,this);
            this.divTopBtn.form.btnAllRead.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_Oncolumnchanged,this);
            this.dsYnCd.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsPostDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0261_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
