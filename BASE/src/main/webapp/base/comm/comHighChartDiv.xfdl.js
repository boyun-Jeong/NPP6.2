(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comHighChart");
            this.set_titletext("High Chart div");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebView("wevChart","5.00","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comHighChartDiv.xfdl","lib::lib_HighChart.xjs");
        this.addIncludeScript("comHighChartDiv.xfdl","lib::lib_HighChart_mirae.xjs");
        this.registerScript("comHighChartDiv.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ High Chart div
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ HighChart
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        this.executeIncludeScript("lib::lib_HighChart.xjs"); /*include "lib::lib_HighChart.xjs"*/;
        this.executeIncludeScript("lib::lib_HighChart_mirae.xjs"); /*include "lib::lib_HighChart_mirae.xjs"*/;

        this._loadFlag 	= false;
        this._script 	= '';

        this.form_onload = function(obj,e)
        {
        	//this.wevChart.set_url(nexacro.getProjectPath() + "html/HighChartPage.html");
        	this.wevChart.set_url(nexacro.getProjectPath() + "html/HighChartPage_mirae.html");
        };


        // 차트 그리기
        // 차트 script 생성은 lib::lib_HighChart.xjs 안에 기술할 것
        this.drawChart = function(strChartScript)
        {
        	if( Ex.isEmpty(strChartScript) ) {
        		trace('하이차트 스크립트가 없습니다.');
        		return;
        	}

        	if( !this._loadFlag) {
        		this._script = strChartScript;
        		return;
        	}

        	this.wevChart.callScript(strChartScript);
        	trace('drawChart call');

        	this._script = '';
        }



        this.addScript = function(strScript)
        {
        	this.wevChart.callScript(strScript);
        	trace('callScript call');
        }







        this.wevChart_onloadcompleted = function(obj,e)
        {
        	this._loadFlag = true;
        	if( !Ex.isEmpty(this._script) ) {
        		this.drawChart(this._script);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.wevChart.addEventHandler("onloadcompleted",this.wevChart_onloadcompleted,this);
        };
        this.loadIncludeScript("comHighChartDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
