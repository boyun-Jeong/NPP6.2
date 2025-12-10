(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testPop");
            this.set_titletext("테스트 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid navy");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"13","100","32","5",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cursor("pointer");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"13","100","32","110",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("버튼");
            obj.set_cursor("pointer");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","divBottom:0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","5","5","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00","5","44","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","5","121","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_01","5","82","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_02","5","158","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","5","197","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","5","235","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","5","274","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","5","580","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","5","541","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","5","503","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","5","464","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01","5","427","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","5","388","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_00_02","5","350","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("Button00_03","5","311","120","33",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_text("Button00");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testPop.xfdl", function() {
        this.onLoad = function(obj,e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        };

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        	this.parent.parent.popupLoadComplete(this, this.divContent, this.divBottom);
        };

        this.divBtn_btnClose_onclick = function(obj,e)
        {
        	Ex.core.pclose(this, "");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.onLoad,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.divBtn_btnClose_onclick,this);
        };
        this.loadIncludeScript("testPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
