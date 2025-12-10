(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref19_D");
            this.set_titletext("화면전환(서브페이지)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea01","850","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("- ref::ref19_D.xfdl\n호출된 상세화면의 script 처리 (자세한 처리는 스크립트 참조)\n\n1) 파라미터 전달받기\n- var oParam = this.getOwnerFrame().subpageParam;\n\n2) 서브페이지 닫기 & 원 화면 callback으로 파라미터 전달\n- Ex.core.clolseSubpage(scope, oParam);\n- 서브페이지를 닫고 원 화면으로 돌아간다.\n- @private\n- @param {form} scope\n- @param {object} param 원 화면 callback으로 던져줄 param\n- @return N/A");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","29","19","181","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상세 화면 :: ref19_D.xfdl");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","30","60","250","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","30","158","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("원 화면으로 돌아가기");
            obj.set_tabstop("true");
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
        this.registerScript("ref19_D.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		: 상세페이지 처리 가이드
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: 상세페이지 처리 가이드
        * 작성자		: WEMB
        * 작성일		:
        * 수정이력		:
        *------------------------------------------------------------------
        * 수정일			작성자			이력
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
        	var subpageParam = this.getOwnerFrame().subpageParam;

        	var paramStr = '원 화면으로부터 전달받은 파라미터\n';
        	for(var key in subpageParam){
        		paramStr += key + ' :: ' + subpageParam[key] + '\n';
        	}
        	this.TextArea00.set_value(paramStr);
        }


        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/



        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/



        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.fnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btnClose" :
        			/**
        			  * Ex.core.closeSubpage
        			  *  서브페이지를 닫고 원 화면으로 돌아간다.
        			  * @private
        			  * @param {form} scope
        			  * @param {object} param 원 화면 callback으로 던져줄 param
        			  * @return N/A
        			  * @description
        			  *
        			  * @example
        			  *  Ex.core.closeSubpage(this, oParam);
        			  * @memberOf Ex.core
        			  **/
        			Ex.core.closeSubpage(this, {p3:'p3', p4:'p4'});
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref19_D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
