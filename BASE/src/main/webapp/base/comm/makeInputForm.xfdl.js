(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("makeInputForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","530",null,null,"40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px dashed bisque");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","5","38",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stcBg01","5","5",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnCreateDiv",null,"10","86","24","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("입력폼 추가");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stcDivTitle00","5","38","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("현재 선택된 입력폼");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","147","43","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stcDivTitle","5","5","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("입력폼 타이틀");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","stcDivTitle:5","10",null,"24","204",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","Combo00:5","43","65","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("전체삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","5","71",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stcDivTitle00_00","5","71","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("행추가/삽입/삭제");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","245","76","50","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("행삽입");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00_00_00_00:5","76","50","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","stcDivTitle00_00:5","76","50","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("행추가");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00_00_00","Button00_00_00:5","76","40","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_min("1");
            obj.set_max("30");
            obj.set_value("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00_01","Button00:5","43","40","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_min("1");
            obj.set_max("5");
            obj.set_value("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","Spin00_01:0","43","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("×");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00_00_01","Static00_00:0","43","40","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_min("1");
            obj.set_max("30");
            obj.set_value("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","Edit00:5","10","40","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_min("1");
            obj.set_max("5");
            obj.set_value("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","Edit00:45","9","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("×");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00_00","Static00:0","10","40","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_min("1");
            obj.set_max("30");
            obj.set_value("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","5","104",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_inputBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stcDivTitle00_00_00","5","104","135","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("항목 추가");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","stcDivTitle00_00_00:5","109","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("필수");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","CheckBox00:5","109","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"110","50","24","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("추가");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","Edit00_00:5","110",null,"23","Button00_00_00_00_00:5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("Combo01");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","5","stcBg01_00_00_00:5",null,null,"5","5",null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:5","0",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_border("1px dashed bisque");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("makeInputForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
