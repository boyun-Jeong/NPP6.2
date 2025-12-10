(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMsg");
            this.set_titletext("simpleMsg(Toast)");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,36);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcMsg","3","3",null,null,"3","3",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,36,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comMsg.xfdl", function() {
        this.form_onload = function(obj, e)
        {
        	var strMsg = this.parent.msg || '';
        	if(this.parent.isDecorate)
        		this.stcMsg.set_usedecorate(true);

        	// toast Type (css) setting
        	var css = '';
        	switch(this.parent.toastType)
        	{
        		case "S" :	css = "sta_TOAST_success";	break;		// SUCCESS
        		case "W" :	css = "sta_TOAST_warning";	break;		// WARNING
        		case "E" :	css = "sta_TOAST_error";	break;		// ERROR
        		default	:	css = "sta_TOAST_normal";	break;		// NORMAL
        	}

        	//trace("css :::: " + css);
        	this.stcMsg.set_cssclass(css);
        	this.stcMsg.set_text(strMsg);
        	this.stcMsg.set_visible(true);

        	this.setTimer(1000, (this.parent.displaySecond * 1000));	//2000
        }

        this.form_ontimer = function(obj, e)
        {
        	if( e.timerid == 1000 )
        	{
        		this.killTimer(e.timerid);
        // 		trace("this.parent.parent.id : " + this.parent.parent.id);
        // 		trace("this.getOwnerFrame().id : " + this.getOwnerFrame().id);
        		this.parent.parent.fnSetDestroy();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
        };
        this.loadIncludeScript("comMsg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
