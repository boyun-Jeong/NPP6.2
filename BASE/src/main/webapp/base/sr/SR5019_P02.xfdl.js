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
            this.set_titletext("출입카드조회팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(645,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CARD_STATUS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","20","0",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","20","150","24",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_text("출입카드 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Static21:0",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divPage.addChild(obj.name, obj);

            obj = new Grid("grdMainList","0","Static00_00_00:0",null,null,"0","0",null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMain");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoupdatetype("none");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"180\"/><Column size=\"240\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"카드번호\"/><Cell col=\"3\" text=\"관리팀\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CARD_NO\" validation=\"카드번호;NULL\" mask=\"0000\" maskedittype=\"string\" maskeditformat=\"####\" maskeditmaskchar=\" \"/><Cell col=\"3\" text=\"bind:MNG_DEPT_CD\" combodataset=\"dsMNG_Deptcd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\" validation=\"관리팀;NULL\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"48\"/><Column size=\"180\"/><Column size=\"240\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"카드번호\"/><Cell col=\"2\" text=\"관리팀\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CARD_NO\" validation=\"카드번호;NULL\" mask=\"0000\" maskedittype=\"string\" maskeditformat=\"####\" maskeditmaskchar=\" \"/><Cell col=\"2\" text=\"bind:MNG_DEPT_NM\" combodataset=\"dsMNG_Deptcd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\" validation=\"관리팀;NULL\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20","divPage:0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","110","14",null,null,null,null,this.divBtnBottom.form);
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
        this.addIncludeScript("SR5019_P02.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5019_P02.xfdl", function() {
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
        this.pSelType = '';
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
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsCond.setColumn(0, "CARD_STATUS_CD", "CARD_STATUS_CD_01");

        	var sTranId = "select01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "OM0510W/select01";	// 서비스명
        	var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsMain=dsData";		// 서버에서 수신할 데이타셋
        	var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택
        this.fnSelect = function(selType)
        {
        	this.dsRet.clear();
        	switch(selType)
        	{
        		case "M" :	// 멀티 선택 시 체크된 모든 행 복사 & return
        			this.dsMain.set_enableevent(false);
        			this.dsMain.set_filterstr("CHK == '1'");
        			this.dsRet.copyData(this.dsMain, true);
        			this.dsMain.set_filterstr("");
        			this.dsMain.set_enableevent(false);
        			break;

        		case "S" :	// 단일 선택 시 현재 rowposion 기준 복사 & return
        		default :
        			this.dsRet.assign(this.dsMain);
        			this.dsRet.clearData();
        			this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsMain, this.dsMain.rowposition);
        			break;
        	}

        	Ex.core.pclose(this, this.dsRet.saveXML());
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
        	this.fnSearch();	// 메인그리드검색

        	this.pSelType = (this.getOwnerFrame().pSelType||'').toUpperCase();
        	switch(this.pSelType)
        	{
        		case "M" :				this.divPage.form.grdMainList.set_formatid('multiSel');	break;
        		case "S" :	default :	this.divPage.form.grdMainList.set_formatid('singleSel'); break;
        	}
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        // 	var oParam = {
        // 		upCmmCd : ['CARD_STATUS_CD'	]	// 조회할 상위코드
        // 		,codeDiv: ['NHFIRE'			]	// 조회할 코드의 업무구분
        // 		,optStr	: [''				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        // 		,useYn	: ['Y'				]	// 사용여부
        // 		,filter	: [''				]	// filterStr
        // 		,objDs	: [this.dsCdStatCd	]	// copy dataset
        // 	}
        // 	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
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

        this.divPage_grdMainList_oncelldblclick = function(obj,e)
        {
        	this.fnSelect('S');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPage.form.grdMainList.addEventHandler("oncelldblclick",this.divPage_grdMainList_oncelldblclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR5019_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
