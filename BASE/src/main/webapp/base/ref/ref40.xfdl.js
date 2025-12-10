(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref23");
            this.set_titletext("차트 및 화면 캡쳐");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">Name1</Col><Col id=\"Value\">10.0</Col></Row><Row><Col id=\"Name\">Name2</Col><Col id=\"Value\">10.0</Col></Row><Row><Col id=\"Name\">Name3</Col><Col id=\"Value\">20</Col></Row><Row><Col id=\"Name\">Name4</Col><Col id=\"Value\">10.0</Col></Row><Row><Col id=\"Name\">Name5</Col><Col id=\"Value\">15</Col></Row><Row><Col id=\"Name\">Name6</Col><Col id=\"Value\">10.0</Col></Row><Row><Col id=\"Name\">Name7</Col><Col id=\"Value\">25</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart21", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">27.6</Col></Row><Row><Col id=\"data\">28.8</Col></Row><Row><Col id=\"data\">21.7</Col></Row><Row><Col id=\"data\">34.1</Col></Row><Row><Col id=\"data\">29.0</Col></Row><Row><Col id=\"data\">28.4</Col></Row><Row><Col id=\"data\">45.6</Col></Row><Row><Col id=\"data\">51.7</Col></Row><Row><Col id=\"data\">39.0</Col></Row><Row><Col id=\"data\">60.0</Col></Row><Row><Col id=\"data\">28.6</Col></Row><Row><Col id=\"data\">32.1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart22", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"data2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">-13.6</Col><Col id=\"data2\">-5</Col></Row><Row><Col id=\"data\">-14.9</Col><Col id=\"data2\">-4</Col></Row><Row><Col id=\"data\">-5.8</Col><Col id=\"data2\">0</Col></Row><Row><Col id=\"data\">-0.7</Col><Col id=\"data2\">-2</Col></Row><Row><Col id=\"data\">3.1</Col><Col id=\"data2\">-1</Col></Row><Row><Col id=\"data\">13.0</Col><Col id=\"data2\">0</Col></Row><Row><Col id=\"data\">14.5</Col><Col id=\"data2\">0</Col></Row><Row><Col id=\"data\">10.8</Col><Col id=\"data2\">4</Col></Row><Row><Col id=\"data\">5.8</Col><Col id=\"data2\">0</Col></Row><Row><Col id=\"data\">-0.7</Col><Col id=\"data2\">4</Col></Row><Row><Col id=\"data\">-11.0</Col><Col id=\"data2\">10</Col></Row><Row><Col id=\"data\">-16.4</Col><Col id=\"data2\">-5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","20","10","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("차트 그리기");
            this.addChild(obj.name, obj);

            obj = new Div("divChart01","20","47",null,"400","760",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_border("1px solid chocolate");
            this.addChild(obj.name, obj);

            obj = new Div("divChart02","20","divChart01:5","500","300",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_border("1px solid chocolate");
            this.addChild(obj.name, obj);

            obj = new Div("divChart03","20","divChart02:5","500","300",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_border("1px solid chocolate");
            this.addChild(obj.name, obj);

            obj = new Div("divChart04","20","divChart03:5","500","300",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_border("1px solid chocolate");
            this.addChild(obj.name, obj);

            obj = new Div("divChart05","20","divChart04:5","500","300",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_border("1px solid chocolate");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonImage","150.00","10","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이미지 저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart01
            obj = new Layout("default","",0,0,this.divChart01.form,function(p){});
            this.divChart01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart02
            obj = new Layout("default","",0,0,this.divChart02.form,function(p){});
            this.divChart02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart03
            obj = new Layout("default","",0,0,this.divChart03.form,function(p){});
            this.divChart03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart04
            obj = new Layout("default","",0,0,this.divChart04.form,function(p){});
            this.divChart04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart05
            obj = new Layout("default","",0,0,this.divChart05.form,function(p){});
            this.divChart05.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comHighChartDiv.xfdl");
        };
        
        // User Script
        this.registerScript("ref40.xfdl", function() {

        this.refChart_onload = function(obj,e)
        {
        	this.formObj = obj;
        	this.gfnFormOnLoad(this, this.fnInit);
        };

        this.fnInit = function()
        {

        }

        this.Button00_onclick = function(obj,e)
        {
        	// custom pie chart(donut)
        	var oParam = {
        		 colors		: []
        		,title		: ''
        		,subtitle	: ''
        		,objDs		: this.dsChart
        		,nameCol	: 'Name'
        		,valueCol	: 'Value'
        	};
        	var chartScript = this.divChart01.form.miraefnGetPie2DChart(oParam);
        	trace(chartScript);
        	this.divChart01.form.drawChart(chartScript);
        	chartScript = this.divChart03.form.miraefnGetPie2DChart(oParam);
        	this.divChart03.form.drawChart(chartScript);
        	chartScript = this.divChart05.form.miraefnGetPie2DChart(oParam);
        	this.divChart05.form.drawChart(chartScript);

        	oParam = {
        		 colors		: []
        		,title		: ''
        		,subtitle	: ''
        		,objDs		: this.dsChart
        		,nameCol	: 'Name'
        		,valueCol	: 'Value'
        	};
        	var chartScript = this.divChart02.form.miraefnGetHalfDonutChart(oParam);
        	this.divChart02.form.drawChart(chartScript);
        	chartScript = this.divChart04.form.miraefnGetHalfDonutChart(oParam);
        	this.divChart04.form.drawChart(chartScript);
        };

        this.ButtonImage_onclick = function(obj,e)
        {
        	var ele = document.getElementById(this.formObj.getElement().handle.id);

        	html2canvas(ele).then(canvas => {
        		const link = document.createElement("a");
        		link.href = canvas.toDataURL("image/jpeg");
        		link.download = "testImage.jpeg";
        		link.click();
        	});
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.refChart_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ButtonImage.addEventHandler("onclick",this.ButtonImage_onclick,this);
        };
        this.loadIncludeScript("ref40.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
