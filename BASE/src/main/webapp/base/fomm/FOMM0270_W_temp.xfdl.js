(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MAD2300");
            this.set_titletext("시스템링크페이지관리");
            this.getSetter("classname").set("sample03");
            if (Form == this.constructor)
            {
                this._setFormPosition(1012,642);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CLSSF\" type=\"STRING\" size=\"50\"/><Column id=\"PAGE_DESC\" type=\"STRING\" size=\"60\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"300\"/><Column id=\"ORD_SEQ\" type=\"INT\" size=\"5\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHG_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWINDEX\" type=\"INT\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"INT\" size=\"256\"/><Column id=\"ERROR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static25","0","41",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h15");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"41","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"62","25","7","7",null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_clssf","8.89%","8","221","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_page_desc","429","8","357","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","366.00","8","88","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_text("페이지설명");
            obj.set_cssclass("sta_WF_SchTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","309","7","30","41",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("FIX w30");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain_list","0","84",null,null,"20","2",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_sys_linkpage");
            obj.getSetter("scrollbars").set("autoboth");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"140\"/><Column size=\"199\"/><Column size=\"496\"/><Column size=\"70\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"분류명\"/><Cell col=\"2\" text=\"페이지설명\"/><Cell col=\"3\" text=\"페이지URL\"/><Cell col=\"4\" text=\"정렬순번\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"expr:(REG_DT == null || REG_DT ==&apos;&apos; || REG_DT ==&apos;undefined&apos;) ? &apos;normal&apos; : &apos;none&apos;\" style=\"align:left;\" text=\"bind:CLSSF\"/><Cell col=\"2\" edittype=\"expr:(REG_DT == null || REG_DT ==&apos;&apos; || REG_DT ==&apos;undefined&apos;) ? &apos;normal&apos; : &apos;none&apos;\" style=\"align:left;\" text=\"bind:PAGE_DESC\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:PAGE_URL\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:ORD_SEQ\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","79",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("h5");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","56","164","21",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("시스템링크페이지관리");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","21","9","64","21",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("분류명");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_comBtn01","464","56",null,"23","20",null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.getSetter("gridName").set("grd_list01");
            obj.getSetter("sqlId").set("deleteScrnList,insertScrnList,updateScrnList");
            obj.getSetter("svcId").set("saveScreenList");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_comBtn01
            obj = new Layout("default","",0,0,this.div_comBtn01.form,function(p){});
            this.div_comBtn01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_clssf","value","dsCond","CLSSF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_page_desc","value","dsCond","PAGE_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0270_W_temp.xfdl", function() {

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

        	this.fnSearch();		// 조회
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0270W/select01";            			// 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       			// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
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
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
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
        	this.grdMain_list.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

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
        			this.fnSearch();
        			break;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_form_onload,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.edt_clssf.addEventHandler("onkeyup",this.edt_clssf_onkeyup,this);
            this.div_search.form.edt_clssf.addEventHandler("onchanged",this.div_search_edt_clssf_onchanged,this);
            this.div_search.form.edt_page_desc.addEventHandler("onkeyup",this.edt_page_desc_onkeyup,this);
            this.div_search.form.Static03.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.grdMain_list.addEventHandler("onexpandup",this.grdMain_list_onexpandup,this);
            this.Static03.addEventHandler("onclick",this.Div00_Static01_onclick,this);
        };
        this.loadIncludeScript("FOMM0270_W_temp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
