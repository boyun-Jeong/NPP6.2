(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comPopPreview");
            this.set_titletext("처리자IP할당");
            if (Form == this.constructor)
            {
                this._setFormPosition(650,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM_SUB\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"IP_COUNT\" type=\"INT\" size=\"100\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IP_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NL_IPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"NL_SENSORNID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"WKP_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_LANG_CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpUseList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","0","640","290",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Grid("mainGrid","19.00","10","381","270",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMain");
            obj.set_useSort("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"구역\" background=\"#fcf5ef\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/><Cell col=\"1\" cssclass=\"grdHCell_WF\" text=\"해당장소 대역폭\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CMM_CD_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ITM_VAL_1\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Grid("subGrid","452.00","10","180","270",null,null,null,null,null,null,this.divPage.form);
            obj.set_useSort("true");
            obj.set_taborder("1");
            obj.set_binddataset("dsSub");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell cssclass=\"grdHCell_WF\" text=\"미사용IP\" background=\"#fcf5ef\" color=\"#32333b\" border=\"1px solid #9ea7cc\" font=\"normal 700 12px/normal &quot;KoPubL&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:NL_IPSTR\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnArrow","406.00","121","40","32",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
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
            obj = new Layout("default","",650,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5014_P02.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5014_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 처리자IP할당
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.01.24
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
        	var sTranId = "";
        	var sService =  "";
        	var sInDs 	= "";
        	var sOutDs 	= "";

        	if(type == 'M'){
        		// 메인그리드
        		this.dsMain.setColumn(0, "CMM_CD", this.getOwnerFrame().data1); 	// 선택된 건물의 대역폭
        		sTranId = "select05";								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		sService = "SR5000D/select05";						// 서비스명
        		sInDs = "dsCond=dsMain";
        		sOutDs = "dsMain=dsWp";
        	} else if(type == 'S'){
        		// 서브그리드
        		if(!this.dsSub.getColumnInfo("REG_IP")){
        		this.dsSub.addColumn("REG_IP", "STRING")
        		}
        		this.dsSub.setColumn(0, "REG_IP", this.dsMain.getColumn(this.dsMain.rowposition,"ITM_VAL_1")); // 해당층 TODO 실제 연동시 컬럼명변경

        		if(!this.dsSub.getColumnInfo("TYPE")){
        		this.dsSub.addColumn("TYPE", "STRING")
        		}
        		this.dsSub.setColumn(0, "TYPE", "S"); // 서브그리드 플래그

        		this.dsSub.setColumn(0, "GUBUN", "CODE");
        		this.dsSub.setColumn(0, "USE_YN", "N"); // 미사용IP만 조회

        		this.dsSub.setColumn(0, "IP_COUNT", this.getOwnerFrame().data2); // 배당인원수

        		 sTranId = "getIpList";
        		 sService = "NacUtil/getIpList";
        		 sInDs = "dsParams=dsSub";
        		 sOutDs = "dsIpList=dsIpList";
        	}

        	var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        }

        // 선택
        this.fnSelect = function(selType)
        {
        	var nRowCnt = this.dsSub.rowcount;

        	if(nRowCnt == 0){
        		var param = {
                	msg	: "할당 가능한IP를 선택하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		return false;
        	} else {
        		this.dsRet.clearData();

        		this.dsSub.setColumn(0,"NL_IPSTR",this.dsSub.getColumn(this.dsSub.rowposition,"NL_IPSTR"));	 // 하위코드명
        		this.dsSub.setColumn(0,"NL_SENSORNID",this.dsSub.getColumn(this.dsSub.rowposition,"NL_SENSORNID"));	 // 하위코드명

        		this.dsRet.assign(this.dsSub);
        		this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsSub, this.dsSub.rowposition);
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
        		case "select05" :
        			if(this.dsSub.rowcount >0){
        				this.sortIpDataset(this.dsSub)
        			}

        			//Ex.core.toast(this, "10002");
        			break;

        		case "getIpList" :


        		this.dsSub.copyData(this.dsIpList, true);


        		//this.grdUseIpList.createFormat();
        		//this.grdUnUseIpList.createFormat();
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
        	this.fnSearch('M');	// 메인그리드검색
        }

        // IP정렬
        this.sortIpDataset = function(ds)
        {
        	const ipDate = [];
        	for(let i=0; i<ds.rowcount; i++){
        		ipDate.push({
        			IP_VALUE : ds.getColumn(i,"IP_VALUE"),
        			IP_COUNT : ds.getColumn(i,"IP_COUNT")
        		})
        	}

        	ipDate.sort((a,b) =>{
        		const ipValue1 = a.IP_VALUE.split(".").map(Number);
        		const ipValue2 = b.IP_VALUE.split(".").map(Number);

        		for(let i=0; i<ds.rowcount; i++){
        			if(ipValue1[i] !== ipValue2[i]){
        				return ipValue1[i] - ipValue2[i]
        			}
        		}
        	return 0;
        	});

        	ds.clearData();
        	ipDate.forEach((row) =>{
        		const newRow = ds.addRow();
        		ds.setColumn(newRow, "IP_VALUE", row.IP_VALUE);
        		ds.setColumn(newRow, "IP_COUNT", row.IP_COUNT);
        	})
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
        	this.dsSub.setInsertRow();

        	this.dsSub.setColumn(this.dsMain.rowposition, "UP_CMM_CD", "SWKP0A00");
        	this.dsSub.setColumn(this.dsMain.rowposition, "CMM_CD", this.dsMain.getColumn(this.dsMain.rowposition, "CMM_CD"));
        	this.fnSearch('S');	// 서브그리드검색
        };

        this.divPage_subGrid_oncelldblclick = function(obj,e)
        {
        	if(obj.id == "subGrid")
        	{
        		this.dsRet.clearData();

        		this.dsSub.setColumn(0,"NL_IPSTR",this.dsSub.getColumn(this.dsSub.rowposition,"NL_IPSTR"));	 // 하위코드명
        		this.dsSub.setColumn(0,"NL_SENSORNID",this.dsSub.getColumn(this.dsSub.rowposition,"NL_SENSORNID"));	 // 하위코드명

        		this.dsRet.assign(this.dsSub);
        		this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsSub, this.dsSub.rowposition);
        		Ex.core.pclose(this, this.dsRet.saveXML());
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPage.form.mainGrid.addEventHandler("oncellclick",this.divPage_mainGrid_oncellclick,this);
            this.divPage.form.subGrid.addEventHandler("oncelldblclick",this.divPage_subGrid_oncelldblclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR5014_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
