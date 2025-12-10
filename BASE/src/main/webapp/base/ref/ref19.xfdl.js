(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref19");
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
            obj.set_value("- ref::ref19.xfdl\n\n상세화면(서브페이지)으로의 화면전환을 처리한다.\nworkframe 하위 업무 화면에서만 사용 가능하다.\n상세화면에서 다시 상세화면 호출은 불가능하다.\n\n\nscript 처리 (자세한 처리는 스크립트 참조)\n1) 서브페이지로 화면전환\n- Ex.core.openSubpage(scope, sUrl, oParam);\n- @param {form} scope\n- @param {string} sUrl \n- @param {object} param 이동할 페이지로 전달할 파라미터 객체\n- @return N/A\n\n\n2) 서브페이지 콜백\n- this.fnSubpageCallback = function(oParam){}\n- 서브페이지에서 Ex.core.closeSubpage()호출 시 약속된 공통 콜백함수를 호춣하고 파라미터를 전달한다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","29","19","181","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("원 화면 :: ref19.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubpage","30","158","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서브페이지로 화면전환");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","30","60","250","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
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
        this.registerScript("ref19.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		: 서브페이지 가이드
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: 서브페이지 가이드
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

        }


        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/



        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // 서브페이지 콜백
        this.fnSubpageCallback = function(objParam)
        {
        	// objParam : 서브페이지 종료 시 서브페이지를 호출한 원 화면으로 넘길 파라미터 객체
        	var paramStr = '서브페이지로부터 전달받은 파라미터\n';
        	for(var key in objParam) {
        		paramStr += key + ' :: ' + objParam[key] + '\n';
        	}
        	this.TextArea00.set_value(paramStr);
        }



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
        		case "btnSubpage" :
        			/**
        			  * Ex.core.pageChange(this, sUrl, param)
        			  * 업무 화면 전환
        			  * @param {form} scope
        			  * @param {string} sUrl
        			  * @param {object} param 이동할 페이지로 전달할 파라미터 객체
        			  * @return N/A
        			  **/
        			var oParam = {p1:'p1', p2:'p2'};
        			Ex.core.openSubpage(this, 'ref::ref19_D.xfdl', oParam);
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSubpage.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
