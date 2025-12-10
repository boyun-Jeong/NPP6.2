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
            this.set_titletext("Static");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","5","15","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회조건 영역");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","70","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","520","40",null,"140","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("Static 컴포넌트 가이드 (guide::guide03.xfdl)\n\n - Static은 용도에 맞게 css class를 지정하여 사용하도록 한다.\n - Static의 Height는 24px로 통일하여 그리도록 한다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","160","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","45","40","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("static Example");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","160","40","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("css class");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","5","130","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Grid Title");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","5","160","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            this.addChild(obj.name, obj);

            obj = new Static("staCoNm","45","70","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","45","160","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("TItle");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","160","160","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("sta_WF_gridTitle");
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
        this.registerScript("guide03.xfdl", function() {
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
        this.loadIncludeScript("guide03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
