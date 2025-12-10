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
            this.set_titletext("New Form");
            this.set_scrolltype("both");
            this.set_tooltiptype("inplace");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ALARM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj.set_updatecontrol("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTreeTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("알림발송목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","104.00","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAlarm","0","137","1840",null,null,"40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"180\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"알림일련번호\"/><Cell col=\"4\" text=\"수신일시\"/><Cell col=\"5\" text=\"경과\"/><Cell col=\"6\" text=\"종류\"/><Cell col=\"7\" text=\"확인여부\"/><Cell col=\"8\" text=\"링크\"/><Cell col=\"9\" text=\"알림내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"expr:currow+1\"/><Cell col=\"3\" text=\"bind:ALARM_ID\"/><Cell col=\"4\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:RECEIVED_DT\"/><Cell col=\"5\" text=\"bind:ELAPSEDTIME\"/><Cell col=\"6\" text=\"bind:ALARM_TYPE\"/><Cell col=\"7\" text=\"bind:CONFIRM_YN\"/><Cell col=\"8\" text=\"bind:ALARM_REF\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"9\" text=\"bind:ALARM_CONTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0","1840","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle00","20.00","13","74","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("알람일시");
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

            obj = new Static("Static01_00","334.00","13","15","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","289.00","13","161","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","95.00","13","161","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm00","30.14%","14","69","21",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("미확인");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkConfirmN","614","13","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_visible("true");
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

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","127",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","1537.00","104","303",null,null,"grdAlarm:8",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"2","1",null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnRead","146.00","0","90","24",null,null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("읽음 처리");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAllRead","51.00","0","90","24",null,null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("모두 읽음");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
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

            obj = new BindItem("item3","divSearchArea.form.calBeginDate","value","dsCond","STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.calEndDate","value","dsCond","ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.stcReqTmplatNm00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.chkConfirmN","value","dsCond","CONFIRM_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ALARM_L01.xfdl", function() {
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
        	this.dsCond.addRow();

        	var val = Ex.util.getMaskFormatString(new Date(), "yyyyMMdd");

        	this.dsCond.setColumn(this.dsCond.rowposition, 'STIME', Ex.util.addDate(val, -5)+'000000000');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'ETIME', Ex.util.today()+'000000000');

        	this.dsCond.setColumn(0, 'USER_ID', Ex.util.getSession('gvUserId'));

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

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";                       	// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "ALARM/save01";            		// 서비스명
            var sInDs = "dsCond=dsCond dsData=dsData:U";    // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       			// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	var bAsync = false;								// true(생략) : 비동기 / false : 동기
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg, '', bAsync); // callback : default, bAsync : 동기처리 목적

        	// Top에 존재하는 transaction 함수 호출 (알림 cnt 동기화 목적)
        	this.objApp.MAIN_TOP.form.fnSelectAlarmCnt();
        }


        // 읽음 처리
        this.fnRead = function(objDs, checked)
        {
        	if(checked && checked == "ALL"){
        		this.grdAlarm.setCellProperty("Head", 0, "text", "1"); // 헤드 체크
        		// 모두 체크 표시
        		for(var i=0; i<objDs.getRowCount();i++){
        			objDs.setColumn(i, "CHK", "1");
        		}
        	}

        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	if(objDs.getCaseCount("CONFIRM_YN!='확인'") == 0) { // 체크한 알림 전체가 이미 읽은 알림일 경우
        		Ex.core.toast(this, "읽음 처리할 알림이 없습니다.", null, {toastType:'W'});
        	}
        	else { // 체크한 알림 중 읽지 않은 알림이 하나라도 있을 경우
        		for(var i = objDs.rowcount-1; i >= 0; i--) {
        			if(objDs.getColumn(i, "CONFIRM_YN") != '확인') { // 이미 확인 처리된 것들이 체크되었을 경우 / 해당 Row 제외 후 Update
        				this.dsCond.setColumn(0, 'ALARM_ID', objDs.getColumn(i, "ALARM_ID").toString()); // dsCond에 ALARM_ID 추가
        				this.dsData.setColumn(i, 'CONFIRM_YN', '확인'); // 화면에서도 바로 [읽음 처리] 결과 Update
        				this.dsData.setColumn(i, 'ROWFLAG', 'U'); // dsData - ROWFLAG 수동 변경
        			}
        		}
        	}

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);

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

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.grdAlarm.setCellProperty("Head", this.grdAlarm.getBindCellIndex('Body', 'CHK'), "text", "0");
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
        		case "noticePop" :
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
        // 		case "searchConfirm" :
        // 			this.fnSearch01();
        // 			break;

        		case "saveConfirm" :
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
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdAlarm.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divTopBtn.form.btnRead];		// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        // 		arrBtn = [this.divTopBtn.form.btnDelete];	// 삭제
        // 	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divTopBtn.form.btnAllRead];		// 저장
        	Ex.util.setBtnVisible(this, 'write', arrBtn);


        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divTopBtn, 'right', true);
        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y']				// 사용여부
        		,filter	: ['',			"ITM_VAL_1=='NTC'||ITM_VAL_1=='ETC'"]				// filterStr
        		,objDs	: [this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        // 데이터셋 column 값 변경 후 이벤트
        this.dsData_Oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);	// ROWFLAG컬럼 변경을 위한 함수 호출
        };


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
        			if(this.divSearchArea.form.chkConfirmN.value){ // 체크가 된 상태여야만
        				var val = 'N';
        			}
        			this.dsCond.setColumn(0, 'CONFIRM_YN', val || null);
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnRead' :
        			this.fnRead(this.dsData);
        			break;

        		case 'btnAllRead' :
        			this.fnRead(this.dsData, 'ALL');
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() )
        			{
        				var param = {	id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }


        this.grdAlarm_oncellclick = function(obj,e)
        {
        	if( e.cell == obj.getBindCellIndex('body', 'ALARM_REF') )
        	{
        		console.log("알람 링크 연결");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdAlarm.addEventHandler("oncellclick",this.grdAlarm_oncellclick,this);
            this.divSearchArea.form.stcTitle00.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.calEndDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.calBeginDate.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcReqTmplatNm00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTopBtn.form.btnRead.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTopBtn.form.btnAllRead.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_Oncolumnchanged,this);
            this.dsYnCd.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("ALARM_L01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
