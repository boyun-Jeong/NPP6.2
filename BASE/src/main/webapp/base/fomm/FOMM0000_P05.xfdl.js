(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0000_P01");
            this.set_titletext("사용자선택 팝업(공통)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExtdAuthMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EXTD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EXTD_GB\">00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
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
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","70",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staSearchStr","20","13","89","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("확장권한명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtSearchStr","107","13","120","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","227","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"13","20","24","0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staExtdAuthLst","20","90","98","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("확장권한 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staExtdAuthLst:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdExtdInfo","20","staExtdAuthLst:10",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsExtdAuthMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"singleSel\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"확장권한코드\"/><Cell col=\"2\" text=\"확장권한명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EXTD_ID\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:EXTD_NM\" edittype=\"none\"/></Band></Format></Formats>");
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

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
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

            obj = new Static("stcCnt","115","90","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsExtdAuthMt");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
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
            obj = new Layout("default","",600,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtSearchStr","value","dsCond","SEARCH_STR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0000_P05.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0000_P01
        * 화면(명)		︰ 사용자 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 기본 사용자 선택 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	* pSelType			선택 타입					S:단일선택 M:다중선택
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pSelType = '';		// 선택구분; 'S':single:단건선택; 'M':multi:다건선택


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
        	this.fnSearch();		// 검색
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'EXTD_GB', '00');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'EXTD_NM', '');
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                  // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0121W/select01";       // 서비스명
            var sInDs = "dsCond=dsCond";               // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsExtdAuthMt=dsExtdAuthMt";  // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func.
        this.fnSave = function()
        {

        }


        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        			this.divContent.form.grdExtdInfo.setCellProperty("Head", this.divContent.form.grdExtdInfo.getBindCellIndex('Body', 'CHK'), "text", "0");
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
        	this.pSelType = (this.getOwnerFrame().pSelType||'').toUpperCase();
        	switch(this.pSelType)
        	{
        		case "M" :				//this.divContent.form.grdExtdInfo.set_formatid('multiSel');	break;
        		case "S" :	default :	this.divContent.form.grdExtdInfo.set_formatid('singleSel');	break;
        	}
        	this.divContent.form.grdExtdInfo.set_visible(true);
        }


        // 선택
        this.fnSelect = function(selType)
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pCheckDs) && !Ex.isEmpty(this.getOwnerFrame().pCheckCol) )
        	{
        		if(selType == "S")
        		{
        			var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsExtdAuthMt.getColumn(this.dsExtdAuthMt.rowposition, "EXTD_ID"));
        			if(fRow > -1)
        			{
        				var userInfo = this.dsExtdAuthMt.getColumn(this.dsExtdAuthMt.rowposition, "EXTD_NM") + "[" + this.dsExtdAuthMt.getColumn(this.dsExtdAuthMt.rowposition, "EXTD_ID") + "]";
        				var oParam = {id : "alertAddExtdI", msg : "{0} 이미 추가한 확장권한 입니다.", arrparam : [userInfo], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}
        		else if(selType == "M")
        		{
        			this.dsExtdAuthMt.set_enableevent(false);
        			this.dsExtdAuthMt.set_filterstr("CHK == '1'");

        			for(var i=0; i<this.dsExtdAuthMt.rowcount; i++)
        			{
        				var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsExtdAuthMt.getColumn(i, "EXTD_ID"));
        				if(fRow > -1)
        				{
        					var userInfo = this.dsExtdAuthMt.getColumn(i, "EXTD_NM") + "[" + this.dsExtdAuthMt.getColumn(i, "EXTD_ID") + "]";
        					var oParam = {id : "alertAddExtdI", msg : "{0} 이미 추가한 확장권한 입니다.", arrparam : [userInfo], msgtype : "I"};
        					Ex.core.alert(this, oParam);
        					this.dsExtdAuthMt.set_filterstr("");
        					this.dsExtdAuthMt.set_enableevent(true);
        					return false;
        				}
        			}
        			this.dsExtdAuthMt.set_filterstr("");
        			this.dsExtdAuthMt.set_enableevent(true);
        		}
        	}

        	this.dsRet.clear();
        	switch(selType)
        	{
        		case "M" :	// 멀티 선택 시 체크된 모든 행 복사 & return
        			this.dsExtdAuthMt.set_enableevent(false);
        			this.dsExtdAuthMt.set_filterstr("CHK == '1'");
        			this.dsRet.copyData(this.dsExtdAuthMt, true);
        			this.dsExtdAuthMt.set_filterstr("");
        			this.dsExtdAuthMt.set_enableevent(true);
        			break;

        		case "S" :	// 단일 선택 시 현재 rowposion 기준 복사 & return
        		default :
        			this.dsRet.assign(this.dsExtdAuthMt);
        			this.dsRet.clearData();
        			this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsExtdAuthMt, this.dsExtdAuthMt.rowposition);
        			break;
        	}

        	Ex.core.pclose(this, this.dsRet.saveXML());
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

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			this.fnSelect(this.pSelType);
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

        this.divContent_grdExtdInfo_oncelldblclick = function(obj,e)
        {
        	this.fnSelect('S');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtSearchStr.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.grdExtdInfo.addEventHandler("oncelldblclick",this.divContent_grdExtdInfo_oncelldblclick,this);
            this.dsExtdAuthMt.addEventHandler("onrowposchanged",this.dsExtdAuthMt_onrowposchanged,this);
            this.dsExtdAuthMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsExtdAuthMt.addEventHandler("canrowposchange",this.dsExtdAuthMt_canrowposchange,this);
        };
        this.loadIncludeScript("FOMM0000_P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
