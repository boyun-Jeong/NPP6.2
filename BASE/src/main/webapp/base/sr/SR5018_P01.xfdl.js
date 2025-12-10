(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5018_P01");
            this.set_titletext("업무분류조회팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(645,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM_SUB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThird", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_CLSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL1_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSE_LVL2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LVL1_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL2_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL3_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL4_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL5_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL6_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL7_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL8_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LVL9_STAFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","0","645","290",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Grid("mainGrid","19.00","10","180","270",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMain");
            obj.set_useSort("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell cssclass=\"grdHCell_WF\" text=\"업무분류1\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CMM_CD_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Grid("subGrid","232.00","10","180","270",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsSub");
            obj.set_useSort("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell cssclass=\"grdHCell_WF\" text=\"업무분류2\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CMM_CD_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnArrow","195","121","40","32",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_countArrowRight");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Grid("thirdGrid","442.00","10","180","270",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsThird");
            obj.set_useSort("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell cssclass=\"grdHCell_WF\" text=\"사전협의자\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" expr=\"expr:(DEPT_NM ?? &apos;&apos;) + &apos;/&apos; + (STAFF_NM ?? &apos;&apos;)\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnArrow00","405.00","121","40","32",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_countArrowRight");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","10.00","divPage:0",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","4",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","110","4",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",645,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5018_P01.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5018_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 업무분류조회팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.12
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2025.01.24	WEMB		최초작성
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

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
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
        this.fnSearch = function(type)
        {
        	var sInDs 	= "";
        	var sOutDs 	= "";

        	if(type == 'M'){
        		// 메인그리드
        		this.dsMain.setColumn(0, "UP_CMM_CD", "BIZC0000"); 	// 업무분류1

        		var sTranId = "select06";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "SR5000D/select06";						// 서비스명
        		var sInDs = "dsCond=dsMain";							// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs =  "dsMain=dsComm";							// 서버에서 수신할 데이타셋
        		var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	} else if(type == 'S'){
        		// 서브그리드
        		var sTranId = "select06";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "SR5000D/select06";						// 서비스명
        		var sInDs = "dsCond=dsSub";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "dsSub=dsComm";							// 서버에서 수신할 데이타셋
        		var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	} else {
        		// 서드그리드
        		this.dsThird.setColumn(0, "SVC_CLSS_CD", "SR"); 		// 서비스/일반요청
        		this.dsThird.setColumn(0, "BSE_LVL2_CD", this.dsSub.getColumn(this.dsSub.rowposition, "CMM_CD")); // 업무분류2

        		var sTranId = "select03";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "SR5000D/select03";								// 서비스명
        		var sInDs = "dsCond=dsThird";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "dsThird=dsSvcStaffMng";							// 서버에서 수신할 데이타셋
        		var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        	/*
        	var sTranId = "select06";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "SR5000D/select06";						// 서비스명
        	var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	*/
        }

        // 선택
        this.fnSelect = function(selType)
        {
        	var nRowCnt = this.dsSub.rowcount;

        	if(nRowCnt == 0){
        		var param = {
                	msg	: "건물의 해당층을 선택하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		return false;
        	} else {
        		this.dsRet.clearData();

        		this.dsThird.addColumn("UP_CMM_CD", "STRING");
        		this.dsThird.addColumn("CMM_CD", "STRING");
        		this.dsThird.addColumn("CMM_CD_NM_MAIN", "STRING")
        		this.dsThird.addColumn("CMM_CD_NM_SUB", "STRING");

        		this.dsThird.setColumn(0,"UP_CMM_CD",this.dsMain.getColumn(this.dsMain.rowposition,"CMM_CD")); 		// 상위코드
        		this.dsThird.setColumn(0,"CMM_CD",this.dsSub.getColumn(this.dsSub.rowposition,"CMM_CD"));		 	// 하위코드
        		this.dsThird.setColumn(0,"CMM_CD_NM_MAIN",this.dsMain.getColumn(this.dsMain.rowposition,"CMM_CD_NM")); // 상위코드명
        		this.dsThird.setColumn(0,"CMM_CD_NM_SUB",this.dsSub.getColumn(this.dsSub.rowposition,"CMM_CD_NM"));	// 하위코드명

        		this.dsRet.assign(this.dsThird);
        		this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsThird, this.dsThird.rowposition);
        		Ex.core.pclose(this, this.dsRet.saveXML());
        	}
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
        		case "select06" :
        			//Ex.core.toast(this, "10002");
        			/*if(this.dsSub.rowcount == 0){
        				// 최초 로드시
        				this.dsSub.clearData();
        				this.dsSub.setInsertRow();
        				this.dsSub.setColumn(0, "UP_CMM_CD", this.dsMain.getColumn(0, "CMM_CD")); // 메인그리드 상위코드값 매핑
        				this.fnSearch('S');	// 서브그리드검색
        			}*/
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
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
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.dsMain.setInsertRow();
        	this.fnGetCmmCd();
        	this.fnSearch('M');	// 메인그리드검색
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {

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

        		case "btnSelect" :			// 선택
        			this.fnSelect();
        			//Ex.core.pclose(this, this.dsList.saveXML());
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };
        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        this.divPage_mainGrid_oncellclick = function(obj,e)
        {
        	this.dsSub.clearData();
        	this.dsThird.clearData();
        	this.dsSub.setInsertRow();
        	this.dsSub.setColumn(0, "UP_CMM_CD", this.dsMain.getColumn(e.row, "CMM_CD")); // 메인그리드 상위코드값 매핑
        	this.fnSearch('S');	// 서브그리드검색
        };

        this.divPage_subGrid_oncellclick = function(obj,e)
        {
        	this.dsThird.clearData();
        	this.dsThird.setInsertRow();
        	this.dsThird.setColumn(0, "UP_CMM_CD", this.dsMain.getColumn(e.row, "CMM_CD")); // 서브그리드 상위코드값 매핑
        	this.fnSearch('T');	// 서브그리드검색
        };

        this.divPage_thirdGrid_oncelldblclick = function(obj,e)
        {
        	if(obj.id == "thirdGrid")
        	{
        		this.dsRet.clearData();

        		this.dsThird.addColumn("UP_CMM_CD", "STRING");
        		this.dsThird.addColumn("CMM_CD", "STRING");
        		this.dsThird.addColumn("CMM_CD_NM_MAIN", "STRING");
        		this.dsThird.addColumn("CMM_CD_NM_SUB", "STRING");

        		this.dsThird.setColumn(0,"UP_CMM_CD",this.dsMain.getColumn(this.dsMain.rowposition,"CMM_CD")); 		// 상위코드
        		this.dsThird.setColumn(0,"CMM_CD",this.dsSub.getColumn(this.dsSub.rowposition,"CMM_CD"));		 	// 하위코드
        		this.dsThird.setColumn(0,"CMM_CD_NM_MAIN",this.dsMain.getColumn(this.dsMain.rowposition,"CMM_CD_NM")); // 상위코드명
        		this.dsThird.setColumn(0,"CMM_CD_NM_SUB",this.dsSub.getColumn(this.dsSub.rowposition,"CMM_CD_NM"));	// 하위코드명

        		this.dsThird.setColumn(0,"STAFF_ID",this.dsThird.getColumn(this.dsThird.rowposition,"STAFF_ID")); 	// 사전협의자ID
        		this.dsThird.setColumn(0,"STAFF_NM",this.dsThird.getColumn(this.dsThird.rowposition,"STAFF_NM"));	// 사전협의자명
        		this.dsThird.setColumn(0,"DEPT_ID",this.dsThird.getColumn(this.dsThird.rowposition,"DEPT_ID")); 	// 사전협의부서ID
        		this.dsThird.setColumn(0,"JBC_POSI",this.dsThird.getColumn(this.dsThird.rowposition,"JBC_POSI"));	// 사전협의자직책

        		this.dsRet.assign(this.dsThird);
        		this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsThird, this.dsThird.rowposition);
        		Ex.core.pclose(this, this.dsRet.saveXML());
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPage.form.mainGrid.addEventHandler("oncellclick",this.divPage_mainGrid_oncellclick,this);
            this.divPage.form.subGrid.addEventHandler("oncellclick",this.divPage_subGrid_oncellclick,this);
            this.divPage.form.thirdGrid.addEventHandler("oncelldblclick",this.divPage_thirdGrid_oncelldblclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR5018_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
