(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("IT부문 월달력");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.set_scrollbartype("none");
            this.set_background("white");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(147,146);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYYMM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurMonthDate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNextMonthDate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid #c4c8d7");
            obj.set_background("#ecf5fe");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","40","0",null,null,"40","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_text("2025");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcBefMonth","5","3","13","13",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("<");
            obj.set_background("#dfdfdf");
            obj.set_borderRadius("20px");
            obj.set_color("#666666");
            obj.set_font("bold 8px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcAftMonth",null,"3","13","13","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text(">");
            obj.set_background("#dfdfdf");
            obj.set_borderRadius("20px");
            obj.set_color("#666666");
            obj.set_font("bold 8px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divMonthCal","0","divTop:-1",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #c4c8d7");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("divMonth01","5.00","5","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth01.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("1");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth01.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth01.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Jan");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth01.addChild(obj.name, obj);

            obj = new Div("divMonth02","divMonth01:5","5","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth02.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("2");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth02.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth02.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Feb");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth02.addChild(obj.name, obj);

            obj = new Div("divMonth03","75","5","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth03.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("3");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth03.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth03.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Mar");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth03.addChild(obj.name, obj);

            obj = new Div("divMonth04","110","5","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth04.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("4");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth04.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth04.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Apr");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth04.addChild(obj.name, obj);

            obj = new Div("divMonth05","6.00","45","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth05.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("5");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth05.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth05.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("May");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth05.addChild(obj.name, obj);

            obj = new Div("divMonth06","41.00","45","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth06.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("6");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth06.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth06.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Jun");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth06.addChild(obj.name, obj);

            obj = new Div("divMonth07","76.00","45","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth07.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("7");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth07.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth07.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Jul");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth07.addChild(obj.name, obj);

            obj = new Div("divMonth08","111","45","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth08.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("8");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth08.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth08.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Aug");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth08.addChild(obj.name, obj);

            obj = new Div("divMonth09","6.00","85","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth09.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("9");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth09.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth09.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Sep");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth09.addChild(obj.name, obj);

            obj = new Div("divMonth10","41.00","85","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth10.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth10.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth10.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Oct");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth10.addChild(obj.name, obj);

            obj = new Div("divMonth11","76.00","85","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth11.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("11");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth11.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth11.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Nov");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth11.addChild(obj.name, obj);

            obj = new Div("divMonth12","111","85","30","35",null,null,null,null,null,null,this.divMonthCal.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #c4c8d7");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            this.divMonthCal.addChild(obj.name, obj);

            obj = new Static("stcMonth","0","0",null,null,"0","15",null,null,null,null,this.divMonthCal.form.divMonth12.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_color("#005bc3");
            obj.set_font("bold 13px \'KoPubL\'");
            obj.set_text("12");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_cursor("pointer");
            this.divMonthCal.form.divMonth12.addChild(obj.name, obj);

            obj = new Static("stcNm","0","stcMonth:-2",null,null,"0","0",null,null,null,null,this.divMonthCal.form.divMonth12.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 11px \'KoPubL\'");
            obj.set_text("Dec");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_cursor("pointer");
            obj.set_padding("2px 0px 0px 0px");
            this.divMonthCal.form.divMonth12.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth01.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth01.form,function(p){});
            this.divMonthCal.form.divMonth01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth02.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth02.form,function(p){});
            this.divMonthCal.form.divMonth02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth03.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth03.form,function(p){});
            this.divMonthCal.form.divMonth03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth04.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth04.form,function(p){});
            this.divMonthCal.form.divMonth04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth05.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth05.form,function(p){});
            this.divMonthCal.form.divMonth05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth06.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth06.form,function(p){});
            this.divMonthCal.form.divMonth06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth07.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth07.form,function(p){});
            this.divMonthCal.form.divMonth07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth08.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth08.form,function(p){});
            this.divMonthCal.form.divMonth08.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth09.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth09.form,function(p){});
            this.divMonthCal.form.divMonth09.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth10.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth10.form,function(p){});
            this.divMonthCal.form.divMonth10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth11.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth11.form,function(p){});
            this.divMonthCal.form.divMonth11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form.divMonth12.form
            obj = new Layout("default","",0,0,this.divMonthCal.form.divMonth12.form,function(p){});
            this.divMonthCal.form.divMonth12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal.form
            obj = new Layout("default","",0,0,this.divMonthCal.form,function(p){});
            this.divMonthCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",147,146,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nhsb_D23_monthCal.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ NHSB HOME 월달력
        * 화면(명)		︰ -
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ NHSB HOME 월달력
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.arrMonthDiv= [	this.divMonthCal.form.divMonth01, this.divMonthCal.form.divMonth02, this.divMonthCal.form.divMonth03, this.divMonthCal.form.divMonth04,
        					this.divMonthCal.form.divMonth05, this.divMonthCal.form.divMonth06, this.divMonthCal.form.divMonth07, this.divMonthCal.form.divMonth08,
        					this.divMonthCal.form.divMonth09, this.divMonthCal.form.divMonth10, this.divMonthCal.form.divMonth11, this.divMonthCal.form.divMonth12 ];

        this.arrMonth	= [ this.divMonthCal.form.divMonth01.form.stcMonth, this.divMonthCal.form.divMonth02.form.stcMonth, this.divMonthCal.form.divMonth03.form.stcMonth,
        					this.divMonthCal.form.divMonth04.form.stcMonth, this.divMonthCal.form.divMonth05.form.stcMonth, this.divMonthCal.form.divMonth06.form.stcMonth,
        					this.divMonthCal.form.divMonth07.form.stcMonth, this.divMonthCal.form.divMonth08.form.stcMonth, this.divMonthCal.form.divMonth09.form.stcMonth,
        					this.divMonthCal.form.divMonth10.form.stcMonth, this.divMonthCal.form.divMonth11.form.stcMonth, this.divMonthCal.form.divMonth12.form.stcMonth ];

        this.arrMonthNm	= [ this.divMonthCal.form.divMonth01.form.stcNm,	this.divMonthCal.form.divMonth02.form.stcNm,	this.divMonthCal.form.divMonth03.form.stcNm,
        					this.divMonthCal.form.divMonth04.form.stcNm,	this.divMonthCal.form.divMonth05.form.stcNm,	this.divMonthCal.form.divMonth06.form.stcNm,
        					this.divMonthCal.form.divMonth07.form.stcNm,	this.divMonthCal.form.divMonth08.form.stcNm,	this.divMonthCal.form.divMonth09.form.stcNm,
        					this.divMonthCal.form.divMonth10.form.stcNm,	this.divMonthCal.form.divMonth11.form.stcNm,	this.divMonthCal.form.divMonth12.form.stcNm ];

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.CUR_YYYY;
        this.CUR_MM;

        this.SEL_YYYY;
        this.SEL_MM;

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	var today = Ex.util.today();
        	this.CUR_YYYY	= today.substr(0, 4);
        	this.CUR_MM		= today.substr(4, 2);
        	this.divTop.form.stcTitle.set_text(this.CUR_YYYY);

        	this.SEL_YYYY 	= this.CUR_YYYY;

        	this.fnsetCurMonthCss();
        }



        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj)
        	{
        		case this.divMonthCal.form.divMonth01 :
        		case this.divMonthCal.form.divMonth01.form.stcMonth :
        		case this.divMonthCal.form.divMonth01.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth01.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth02 :
        		case this.divMonthCal.form.divMonth02.form.stcMonth :
        		case this.divMonthCal.form.divMonth02.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth02.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth03 :
        		case this.divMonthCal.form.divMonth03.form.stcMonth :
        		case this.divMonthCal.form.divMonth03.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth03.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth04 :
        		case this.divMonthCal.form.divMonth04.form.stcMonth :
        		case this.divMonthCal.form.divMonth04.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth04.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth05 :
        		case this.divMonthCal.form.divMonth05.form.stcMonth :
        		case this.divMonthCal.form.divMonth05.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth05.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth06 :
        		case this.divMonthCal.form.divMonth06.form.stcMonth :
        		case this.divMonthCal.form.divMonth06.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth06.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth07 :
        		case this.divMonthCal.form.divMonth07.form.stcMonth :
        		case this.divMonthCal.form.divMonth07.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth07.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth08 :
        		case this.divMonthCal.form.divMonth08.form.stcMonth :
        		case this.divMonthCal.form.divMonth08.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth08.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth09 :
        		case this.divMonthCal.form.divMonth09.form.stcMonth :
        		case this.divMonthCal.form.divMonth09.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth09.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth10 :
        		case this.divMonthCal.form.divMonth10.form.stcMonth :
        		case this.divMonthCal.form.divMonth10.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth10.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth11 :
        		case this.divMonthCal.form.divMonth11.form.stcMonth :
        		case this.divMonthCal.form.divMonth11.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth11.form.stcMonth.text;
        			break;

        		case this.divMonthCal.form.divMonth12 :
        		case this.divMonthCal.form.divMonth12.form.stcMonth :
        		case this.divMonthCal.form.divMonth12.form.stcNm :
        			this.SEL_MM = this.divMonthCal.form.divMonth12.form.stcMonth.text;
        			break;
        	}

        	if( Number(this.SEL_MM) < 10 )
        		this.SEL_MM = '0' + this.SEL_MM;
        	this.parent.closePopup(this.SEL_YYYY + this.SEL_MM);
        }


        this.divTop_stcBefMonth_onclick = function(obj,e)
        {
        	this.divTop.form.stcTitle.set_text(--this.SEL_YYYY);
        	this.fnsetCurMonthCss();
        };

        this.divTop_stcAftMonth_onclick = function(obj,e)
        {
        	this.divTop.form.stcTitle.set_text(++this.SEL_YYYY);
        	this.fnsetCurMonthCss();
        };


        // 현재월 색칠
        this.fnsetCurMonthCss = function()
        {
        	if( this.CUR_YYYY == this.SEL_YYYY )
        	{
        		var idx = Number(this.CUR_MM - 1);
        		this.arrMonthDiv[idx].set_background('#6bb0fe');
        		this.arrMonth[idx].set_color('white');
        		this.arrMonthNm[idx].set_color('white');
        	}
        	else
        	{
        		// 초기화
        		for(var i = 0; i < this.arrMonthDiv.length; i++)
        		{
        			this.arrMonthDiv[i].set_background('white');
        			this.arrMonth[i].set_color('#005bc3');
        			this.arrMonthNm[i].set_color('#c4c8d7');
        		}
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.divTop.form.stcBefMonth.addEventHandler("onclick",this.divTop_stcBefMonth_onclick,this);
            this.divTop.form.stcAftMonth.addEventHandler("onclick",this.divTop_stcAftMonth_onclick,this);
            this.divMonthCal.form.divMonth01.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth01.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth01.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth02.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth02.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth02.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth03.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth03.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth03.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth04.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth04.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth04.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth05.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth05.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth05.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth06.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth06.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth06.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth07.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth07.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth07.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth08.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth08.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth08.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth09.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth09.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth09.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth10.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth10.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth10.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth11.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth11.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth11.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth12.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth12.form.stcMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divMonthCal.form.divMonth12.form.stcNm.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("onrowsetchanged",this.dsData_onrowsetchanged,this);
        };
        this.loadIncludeScript("nhsb_D23_monthCal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
