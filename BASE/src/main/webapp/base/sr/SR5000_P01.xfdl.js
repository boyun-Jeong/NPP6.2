(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR5000_P01");
            this.set_titletext("구성정보선택팝업(공통)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(689,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LVL1\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LVL2\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LVL3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SOFTWARE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DB_SID_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DB_INST_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelected", this);
            obj._setContents("<ColumnInfo><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LVL1\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LVL2\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LVL3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SOFTWARE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DB_SID_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DB_INST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DB_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDb", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DB_SID_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DB_INST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DB_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCiTypeCd","20.00","13","75","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("DB명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtSearchStr","stcCiTypeCd:0","13","120","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","btnSearch:5",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20",null,null,"0",null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","edtSearchStr:0","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","divSearchArea:0",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","20","Static00:0","90","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("조회목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:24",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdCi","20","Static00:34",null,null,"Static00_01_00_00:0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("false");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"CI_ID\"/><Cell col=\"3\" text=\"DB명(CI명)\"/><Cell col=\"4\" text=\"소프트웨어명\"/><Cell col=\"5\" text=\"서버명\"/><Cell col=\"6\" text=\"서버ID\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CI_ID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CI_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:SOFTWARE_NAME\"/><Cell col=\"5\" text=\"bind:SERVER_NAME\"/><Cell col=\"6\" text=\"bind:SERVER_ID\"/><Cell col=\"7\" text=\"bind:CI_STATE\"/></Band></Format><Format id=\"multiSel\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"구성범주\"/><Cell col=\"4\" text=\"구성번호\"/><Cell col=\"5\" text=\"구성명\"/><Cell col=\"6\" text=\"호스트명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:CI_TYPE_CD\" combodataset=\"dsCiTypeCdGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CI_ID\"/><Cell col=\"5\" text=\"bind:CI_NM\"/><Cell col=\"6\" text=\"bind:HOST_NM\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcGrdTitle:5","Static00:0","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsList");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",689,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtSearchStr","value","dsSearch","CI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR5000_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SR5000_P01
        * 화면(명)		︰ 구성정보 검색(공통)
        * 메뉴(경로)		︰ 공통
        * 화면 설명		︰ 구성정보 검색
        * 작성자			︰ WEMB
        * 작성일			︰ 2025.01.02
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        	작성자		이력
        *------------------------------------------------------------------
        * 2025.01.02	WEMB			최초작성
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
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	//this.dsCond.setColumn(this.dsCond.rowposition, 'ARR_CI_TYPE_CD', "10SV0000,10SE0000");
        	this.dsCond.setColumn(0, "CI_NAME", "");
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SV0110P/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsList=dsData";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택
        this.fnSelect = function(selType)
        {
        	this.dsRet.clear();
        	switch(selType)
        	{
        		case "S" :	// 단일 선택 시 현재 rowposion 기준 복사 & return
        		default :
        			this.dsRet.assign(this.dsList);
        			this.dsRet.clearData();
        			this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsList, this.dsList.rowposition);
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
        		case "select01" :
        			Ex.core.toast(this, "10002");
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
        	//this.fnGetCmmCd();

        	this.fnSearchReset();	// 검색조건 초기화

        	//this.divContent.form.grdCi.set_visible(true);

        	this.fnSearch();	// 검색
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	/*
        	var oParam = {
        		upCmmCd : ['',	''		]	// 조회할 상위코드
        		,codeDiv: ['',	''		]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',			''					]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y'					]	// 사용여부
        		,filter	: ['',				''					]	// filterStr
        		,objDs	: [this., this.	]	// copy dataset

        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        	*/
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

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

        this.grdOnCellClick = function(obj,e)
        {
        	if(obj.id == "grdData")
        	{
        		obj.dropdownCombo();
        	}
        };

        this.grdOnCelldblClick = function(obj,e)
        {
        	if(obj.id == "grdCi")
        	{
        		//if(e.cell != obj.getBindCellIndex("body", "CHK"))
        		//{
        			var aRow = this.dsData.setAddRow();
        			this.dsData.setColumn(aRow, "CI_ID", this.dsList.getColumn(this.dsList.rowposition, "CI_ID"));
        			this.dsData.setColumn(aRow, "CI_NM", this.dsList.getColumn(this.dsList.rowposition, "CI_NM"));
        			this.dsData.setColumn(aRow, "HOST_NM", this.dsList.getColumn(this.dsList.rowposition, "HOST_NM"));

        			if( !Ex.isEmpty(this.getOwnerFrame().pDefColVal) )
        			{
        				for(var i=0; i<this.getOwnerFrame().pDefColVal.length; i++)
        				{
        					var colInfoArr = this.getOwnerFrame().pDefColVal[i].split(":");
        					var colNm	= colInfoArr[0];
        					var colVal	= colInfoArr[1] || '';
        					trace("i=" + i + " colNm : " + colNm + " colVal : " + colVal);
        					this.dsData.setColumn(aRow, colNm, colVal);
        				}
        			}

        			if(this.dsList.getColumn(this.dsList.rowposition, "CHK", 0) == 1)
        			{
        				this.dsList.setColumn(this.dsList.rowposition, "CHK", 0);
        			}
        		//}
        	}
        };

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
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtSearchStr.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.grdCi.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContent.form.grdCi.addEventHandler("oncelldblclick",this.fnSelect,this);
        };
        this.loadIncludeScript("SR5000_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
