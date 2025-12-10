(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("compGuide");
            this.set_titletext("Grid");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/><Column id=\"COL4\" type=\"STRING\" size=\"256\"/><Column id=\"COL5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"ROWFLAG\"/><Col id=\"COL1\">VALUE1</Col><Col id=\"COL2\">COL2</Col><Col id=\"COL3\">VALUE3</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"ROWFLAG\"/><Col id=\"COL1\">VALUE2</Col><Col id=\"COL2\">COL2</Col><Col id=\"COL3\">VALUE3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTree", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">a</Col><Col id=\"LVL\">0</Col><Col id=\"NAME\">ROOT</Col></Row><Row><Col id=\"CODE\">b</Col><Col id=\"LVL\">1</Col><Col id=\"NAME\">LvA</Col><Col id=\"UP_CODE\">a</Col></Row><Row><Col id=\"CODE\">c</Col><Col id=\"LVL\">2</Col><Col id=\"NAME\">LvA_1</Col><Col id=\"UP_CODE\">b</Col></Row><Row><Col id=\"CODE\">d</Col><Col id=\"LVL\">2</Col><Col id=\"NAME\">LvA_2</Col><Col id=\"UP_CODE\">b</Col></Row><Row><Col id=\"CODE\">e</Col><Col id=\"LVL\">3</Col><Col id=\"NAME\">LvA_2_3</Col><Col id=\"UP_CODE\">d</Col></Row><Row><Col id=\"CODE\">f</Col><Col id=\"LVL\">1</Col><Col id=\"UP_CODE\">a</Col><Col id=\"NAME\">LvB</Col></Row><Row><Col id=\"CODE\">g</Col><Col id=\"LVL\">2</Col><Col id=\"UP_CODE\">f</Col><Col id=\"NAME\">LvB_1</Col></Row><Row><Col id=\"CODE\">h</Col><Col id=\"LVL\">2</Col><Col id=\"UP_CODE\">f</Col><Col id=\"NAME\">LvB_2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","40","15","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid Guide - Basic");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","700","49",null,"120","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("Grid 컴포넌트 가이드 (guide::guide04.xfdl)\n\n - Grid는 기본 Head Height 32px, Body Height 32px, summary Height 32px로 그리도록 한다.\n - 일반 Grid의 경우 grd_WF_normal css를 지정하여 사용한다.");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","49","561","120",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsTemp");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"COL1\"/><Cell col=\"3\" text=\"COL2\"/><Cell col=\"4\" text=\"COL3\"/><Cell col=\"5\" text=\"COL4\"/><Cell col=\"6\" text=\"COL5\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:COL1\"/><Cell col=\"3\" text=\"bind:COL2\"/><Cell col=\"4\" text=\"bind:COL3\"/><Cell col=\"5\" text=\"bind:COL4\"/><Cell col=\"6\" text=\"bind:COL5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","51","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H:32");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","5","82","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H:32");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","40","234","561","130",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsTemp");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행상태\"/><Cell col=\"2\" colspan=\"2\" text=\"COL1\"/><Cell col=\"4\" colspan=\"3\" text=\"COL3\"/><Cell row=\"1\" col=\"2\" text=\"COL1\"/><Cell row=\"1\" col=\"3\" text=\"COL2\"/><Cell row=\"1\" col=\"4\" text=\"COL3\"/><Cell row=\"1\" col=\"5\" text=\"COL4\"/><Cell row=\"1\" col=\"6\" text=\"COL5\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:COL1\"/><Cell col=\"3\" text=\"bind:COL2\"/><Cell col=\"4\" text=\"bind:COL3\"/><Cell col=\"5\" text=\"bind:COL4\"/><Cell col=\"6\" text=\"bind:COL5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","40","200","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Grid Guide - Head Merge");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","5","236","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H:28");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","5","291","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H:32");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","5","263","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H:28");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","481","18","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("grd_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","481","203","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("grd_WF_normal");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","700","234",null,"120","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_value(" - Head영역을 Merge한 경우, 세로 Head Cell을 Merge한 경우 각 Head의 Height는 28로 그리도록 한다.");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuTreeMt","40","424","400",null,null,"0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsTree");
            obj.set_cssclass("grd_WF_tree");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useCheck("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LVL\" cssclass=\"\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","40","390","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Grid Guide - Tree");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","5","424","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("H:32");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00_00","700","424",null,"120","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_value(" - Tree의 경우 Head, Body의 Height를 32px로 고정한다. (일반적으로 Head는 쓰지 않음)\n - css class\n   - Grid 자체: grd_WF_tree\n   - tree body cell: \n ");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","320","393","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("grd_WF_tree");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","445","427","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide04.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Component Guide
        * 메뉴(경로)	︰ Component Guide
        * 화면 설명	︰ Component Guide
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
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
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	this.Tab00.tabpages[this.Tab00.tabindex].fnSearch(op);
        }

        // 저장
        this.fnSave = function()
        {

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
        		case "ABOUT" : // 서비스 ID
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
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.TextArea00_00.addEventHandler("onchanged",this.TextArea00_00_onchanged,this);
            this.TextArea00_00_00.addEventHandler("onchanged",this.TextArea00_00_onchanged,this);
            this.TextArea00_00_00_00.addEventHandler("onchanged",this.TextArea00_00_onchanged,this);
        };
        this.loadIncludeScript("guide04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
