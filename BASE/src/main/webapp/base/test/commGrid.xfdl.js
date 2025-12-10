(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commGrid");
            this.set_titletext("New Form");
            this.set_scrolltype("both");
            this.set_tooltiptype("inplace");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEduMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle","0","0","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_text("교육 조사");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEdu","0","34",null,null,"0.00%","42",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsFommUserMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"교육명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"교육기관명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"교육종류(온/오프라인)\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"교육일수/강의시수\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"소요 금액\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"저장일자(자동저장)\"/><Cell col=\"8\" text=\"신청자(자동기입)\"/><Cell col=\"9\" text=\"신청부서(자동기입)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:USER_ID\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:USER_NM\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:POS_NM\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:ROLE_NM\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:TELNUM\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:MOBILE_NUM\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","24",null,null,"0","grdEdu:0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","Static00_00:-1760","1","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_normal");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","697","0","303",null,null,"grdEdu:0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","70",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60","24","0",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,400,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commGrid.xfdl", function() {
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

        	this.dsCond.setColumn(this.dsCond.rowposition, 'POST_DT_NO' );
        	this.dsCond.setColumn(this.dsCond.rowposition, 'ETIME', Ex.util.today()+'000000000');


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
        }

        this.fnCheckValidate = function()
        {
        		if( !Ex.util.isUpdated(this.dsEduMt) )
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
        			this.grdEdu.setCellProperty("Head", this.grdEdu.getBindCellIndex('Body', 'CHK'), "text", "0");
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
        	this.grdEdu.displayRowType();

        	// 공통코드 조회
        	//this.fnGetCmmCd();

        	var rowPos = this.dsEduMt.setAddRow();
        	this.dsEduMt.setColumn(rowPos, 'FRNM', Ex.util.getSession('gvUserNm'));
        	this.dsEduMt.setColumn(rowPos, 'FR_DEPT_NM', Ex.util.getSession('gvDeptNm'));
        	this.dsEduMt.setColumn(rowPos, 'FRID', Ex.util.getSession('gvUserId'));

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divTopBtn.form.btnAdd];		// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

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
        this.dsEduMt_Oncolumnchanged = function(obj,e)
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
        		case "btnAdd" :
        			var rowPos = this.dsEduMt.setInsertRow(this.dsEduMt.rowposition+1);
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdEdu.addEventHandler("oncellclick",this.grdUserInfo_oncellclick,this);
            this.grdEdu.addEventHandler("onlbuttondown",this.grdUserInfo_onlbuttondown,this);
            this.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsEduMt.addEventHandler("oncolumnchanged",this.dsEduMt_Oncolumnchanged,this);
        };
        this.loadIncludeScript("commGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
