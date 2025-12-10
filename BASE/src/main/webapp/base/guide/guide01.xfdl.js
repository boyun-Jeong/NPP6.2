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
            this.set_titletext("기본 컴포넌트");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">code01</Col><Col id=\"CMM_CD_NM\">값1</Col></Row><Row><Col id=\"CMM_CD\">code02</Col><Col id=\"CMM_CD_NM\">값2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","40","50","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsTemp");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","15","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Componenet");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","345","15","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("css class");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","50","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","345","50","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("cbo_WF_normal");
            obj.set_text("cbo_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","5","80","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","345","80","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("edt_WF_normal");
            obj.set_text("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","40","80","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","190","15","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Component Name");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","190","50","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("Combo");
            obj.set_text("Combo");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","190","80","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("Edit");
            obj.set_visible("true");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","5","110","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","345","110","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("msk_WF_normal");
            obj.set_text("msk_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","190","110","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("MaskEdit");
            obj.set_visible("true");
            obj.set_text("MaskEdit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","40","110","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("msk_WF_normal");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","40","140","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("txa_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","345","140","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("txa_WF_normal");
            obj.set_text("txa_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","190","140","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("TextArea");
            obj.set_visible("true");
            obj.set_text("TextArea");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","40","200","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsTemp");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","5","200","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","190","200","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("Radio");
            obj.set_visible("true");
            obj.set_text("Radio");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","345","200","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("rdo_WF_normal");
            obj.set_text("rdo_WF_normal");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","40","230","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","5","230","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","190","230","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("CheckBox");
            obj.set_visible("true");
            obj.set_text("CheckBox");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","345","230","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("chk_WF_normal");
            obj.set_text("chk_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","40","260","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","190","260","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("Calendar");
            obj.set_visible("true");
            obj.set_text("Calendar");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","345","260","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_value("cal_WF_normal");
            obj.set_text("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","5","260","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","520","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_value("기본 컴포넌트 가이드 (guide::guide01.xfdl)\n\n아래 기본 컴포넌트에 대한 디자인 가이드\n- Combo\n- Edit\n- MaskEdit\n- TextArea\n- Radio\n- CheckBox\n- Calendar\n\nSPP의 컴포넌트는 모두 cssclass를 사용하도록 한다. (컴포넌트 접두어_WF_noraml)\n- Ex: edt_WF_normal\n\n입력 컴포넌트의 경우, textarea 등 높이 설정이 필요한 컴포넌트 제외 일반적인 경우 높이는 24px로 설정한다.\n");
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
        this.registerScript("guide01.xfdl", function() {
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
        };
        this.loadIncludeScript("guide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
