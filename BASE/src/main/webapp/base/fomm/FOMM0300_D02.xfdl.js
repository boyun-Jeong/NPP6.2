(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0300_D02");
            this.set_titletext("일정등록 달력 Page");
            if (Form == this.constructor)
            {
                this._setFormPosition(1750,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcTitle1","0","0","250","57",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일");
            obj.set_cssclass("stc_WF_calDateTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle2","250","0","250","57",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("월");
            obj.set_cssclass("stc_WF_calDateTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle3","500","0","250","57",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화");
            obj.set_cssclass("stc_WF_calDateTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle4","750","0","250","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수");
            obj.set_cssclass("stc_WF_calDateTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle5","1000","0","250","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("목");
            obj.set_cssclass("stc_WF_calDateTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle6","1250","0","250","57",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("금");
            obj.set_cssclass("stc_WF_calDateTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle7","1500","0","250","57",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("토");
            obj.set_cssclass("stc_WF_calDateTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divCalComp","0","57",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Calendar");
            obj.set_text("");
            obj.getSetter("divVisible").set("N");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("div1","0","0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div2","250","0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div3","500","0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div4","750","0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div5","1000","0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div6","1250","0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div7","1500","0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div8","0","div1:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div9","250","div2:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div10","500","div3:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div11","750","div4:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div12","1000","div5:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div13","1250","div6:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div14","1500","div7:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div15","0","div8:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div16","250","div9:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div17","500","div10:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div18","750","div11:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div19","1000","div12:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div20","1250","div13:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div21","1500","div14:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div22","0","div15:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div23","250","div16:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div24","500","div17:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div25","750","div18:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div26","1000","div19:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div27","1250","div20:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div28","1500","div21:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div29","0","div22:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div30","250","div23:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div31","500","div24:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div32","750","div25:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div33","1000","div26:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div34","1250","div27:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div35","1500","div28:0","249","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div36","0","div29:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("35");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div37","250","div30:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("36");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div38","500","div31:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("37");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div39","750","div32:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("38");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div40","1000","div33:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("39");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div41","1250","div34:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("40");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("div42","1500","div35:0","250","84",null,null,null,null,null,null,this.divCalComp.form);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D01.xfdl");
            obj.set_async("true");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Div("divInfo","0",null,"585","24",null,"0",null,null,null,null,this.divCalComp.form);
            obj.set_taborder("42");
            this.divCalComp.addChild(obj.name, obj);

            obj = new Static("Static28","0","0","49","24",null,null,null,null,null,null,this.divCalComp.form.divInfo.form);
            obj.set_taborder("0");
            obj.set_text("범례 : ");
            obj.set_cssclass("sta_WF_schTitle");
            this.divCalComp.form.divInfo.addChild(obj.name, obj);

            obj = new Static("txt_total10","49","4","16","16",null,null,null,null,null,null,this.divCalComp.form.divInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("stc_WF_legend11");
            this.divCalComp.form.divInfo.addChild(obj.name, obj);

            obj = new Static("txt_total11","70","0","50","24",null,null,null,null,null,null,this.divCalComp.form.divInfo.form);
            obj.set_taborder("2");
            obj.set_text("완료");
            this.divCalComp.form.divInfo.addChild(obj.name, obj);

            obj = new Static("txt_total14","120","4","16","16",null,null,null,null,null,null,this.divCalComp.form.divInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("stc_WF_legend13");
            this.divCalComp.form.divInfo.addChild(obj.name, obj);

            obj = new Static("txt_total15","141","0","50","24",null,null,null,null,null,null,this.divCalComp.form.divInfo.form);
            obj.set_taborder("4");
            obj.set_text("미완료");
            this.divCalComp.form.divInfo.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","561",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalComp.form.div1
            obj = new Layout("default","",0,0,this.divCalComp.form.div1.form,function(p){});
            this.divCalComp.form.div1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div2
            obj = new Layout("default","",0,0,this.divCalComp.form.div2.form,function(p){});
            this.divCalComp.form.div2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div3
            obj = new Layout("default","",0,0,this.divCalComp.form.div3.form,function(p){});
            this.divCalComp.form.div3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div4
            obj = new Layout("default","",0,0,this.divCalComp.form.div4.form,function(p){});
            this.divCalComp.form.div4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div5
            obj = new Layout("default","",0,0,this.divCalComp.form.div5.form,function(p){});
            this.divCalComp.form.div5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div6
            obj = new Layout("default","",0,0,this.divCalComp.form.div6.form,function(p){});
            this.divCalComp.form.div6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div7
            obj = new Layout("default","",0,0,this.divCalComp.form.div7.form,function(p){});
            this.divCalComp.form.div7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div8
            obj = new Layout("default","",0,0,this.divCalComp.form.div8.form,function(p){});
            this.divCalComp.form.div8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div9
            obj = new Layout("default","",0,0,this.divCalComp.form.div9.form,function(p){});
            this.divCalComp.form.div9.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div10
            obj = new Layout("default","",0,0,this.divCalComp.form.div10.form,function(p){});
            this.divCalComp.form.div10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div11
            obj = new Layout("default","",0,0,this.divCalComp.form.div11.form,function(p){});
            this.divCalComp.form.div11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div12
            obj = new Layout("default","",0,0,this.divCalComp.form.div12.form,function(p){});
            this.divCalComp.form.div12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div13
            obj = new Layout("default","",0,0,this.divCalComp.form.div13.form,function(p){});
            this.divCalComp.form.div13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div14
            obj = new Layout("default","",0,0,this.divCalComp.form.div14.form,function(p){});
            this.divCalComp.form.div14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div15
            obj = new Layout("default","",0,0,this.divCalComp.form.div15.form,function(p){});
            this.divCalComp.form.div15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div16
            obj = new Layout("default","",0,0,this.divCalComp.form.div16.form,function(p){});
            this.divCalComp.form.div16.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div17
            obj = new Layout("default","",0,0,this.divCalComp.form.div17.form,function(p){});
            this.divCalComp.form.div17.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div18
            obj = new Layout("default","",0,0,this.divCalComp.form.div18.form,function(p){});
            this.divCalComp.form.div18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div19
            obj = new Layout("default","",0,0,this.divCalComp.form.div19.form,function(p){});
            this.divCalComp.form.div19.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div20
            obj = new Layout("default","",0,0,this.divCalComp.form.div20.form,function(p){});
            this.divCalComp.form.div20.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div21
            obj = new Layout("default","",0,0,this.divCalComp.form.div21.form,function(p){});
            this.divCalComp.form.div21.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div22
            obj = new Layout("default","",0,0,this.divCalComp.form.div22.form,function(p){});
            this.divCalComp.form.div22.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div23
            obj = new Layout("default","",0,0,this.divCalComp.form.div23.form,function(p){});
            this.divCalComp.form.div23.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div24
            obj = new Layout("default","",0,0,this.divCalComp.form.div24.form,function(p){});
            this.divCalComp.form.div24.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div25
            obj = new Layout("default","",0,0,this.divCalComp.form.div25.form,function(p){});
            this.divCalComp.form.div25.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div26
            obj = new Layout("default","",0,0,this.divCalComp.form.div26.form,function(p){});
            this.divCalComp.form.div26.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div27
            obj = new Layout("default","",0,0,this.divCalComp.form.div27.form,function(p){});
            this.divCalComp.form.div27.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div28
            obj = new Layout("default","",0,0,this.divCalComp.form.div28.form,function(p){});
            this.divCalComp.form.div28.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div29
            obj = new Layout("default","",0,0,this.divCalComp.form.div29.form,function(p){});
            this.divCalComp.form.div29.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div30
            obj = new Layout("default","",0,0,this.divCalComp.form.div30.form,function(p){});
            this.divCalComp.form.div30.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div31
            obj = new Layout("default","",0,0,this.divCalComp.form.div31.form,function(p){});
            this.divCalComp.form.div31.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div32
            obj = new Layout("default","",0,0,this.divCalComp.form.div32.form,function(p){});
            this.divCalComp.form.div32.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div33
            obj = new Layout("default","",0,0,this.divCalComp.form.div33.form,function(p){});
            this.divCalComp.form.div33.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div34
            obj = new Layout("default","",0,0,this.divCalComp.form.div34.form,function(p){});
            this.divCalComp.form.div34.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div35
            obj = new Layout("default","",0,0,this.divCalComp.form.div35.form,function(p){});
            this.divCalComp.form.div35.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div36
            obj = new Layout("default","",0,0,this.divCalComp.form.div36.form,function(p){});
            this.divCalComp.form.div36.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div37
            obj = new Layout("default","",0,0,this.divCalComp.form.div37.form,function(p){});
            this.divCalComp.form.div37.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div38
            obj = new Layout("default","",0,0,this.divCalComp.form.div38.form,function(p){});
            this.divCalComp.form.div38.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div39
            obj = new Layout("default","",0,0,this.divCalComp.form.div39.form,function(p){});
            this.divCalComp.form.div39.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div40
            obj = new Layout("default","",0,0,this.divCalComp.form.div40.form,function(p){});
            this.divCalComp.form.div40.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div41
            obj = new Layout("default","",0,0,this.divCalComp.form.div41.form,function(p){});
            this.divCalComp.form.div41.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.div42
            obj = new Layout("default","",0,0,this.divCalComp.form.div42.form,function(p){});
            this.divCalComp.form.div42.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form.divInfo.form
            obj = new Layout("default","",0,0,this.divCalComp.form.divInfo.form,function(p){});
            this.divCalComp.form.divInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalComp.form
            obj = new Layout("default","",0,0,this.divCalComp.form,function(p){});
            this.divCalComp.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1750,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0300_D01.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0300_D02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0300_D02
        * 화면(명)		︰ 일정등록 달력 Page
        * 메뉴(경로)	︰
        * 화면 설명	︰ SPP FAQ 조회
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.12.12
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.12.12	 WEMB		최초작성
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
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	//this.fnSearch();		// 조회

        	for(var i=0; i<this.divCalComp.form.components.length; i++)
        	{
        		var compObj = this.divCalComp.form.components[i];
        		if(compObj.id != "divInfo")
        		{
        			//trace("i=" + i + " compObj.id : " + compObj.id);
        			compObj.form.divBox.form.stcAll.addEventHandler('onclick', this.openPopup, this.divCalComp.form);
        			compObj.form.divBox.form.stcAllCnt.addEventHandler('onclick', this.openPopup, this.divCalComp.form);
        			compObj.form.divBox.form.stcComp.addEventHandler('onclick', this.openPopup, this.divCalComp.form);
        			compObj.form.divBox.form.stcCompCnt.addEventHandler('onclick', this.openPopup, this.divCalComp.form);
        			compObj.form.divBox.form.stcNoComp.addEventHandler('onclick', this.openPopup, this.divCalComp.form);
        			compObj.form.divBox.form.stcNoCompCnt.addEventHandler('onclick', this.openPopup, this.divCalComp.form);
        			compObj.form.divBox.addEventHandler('onclick', this.openPopup, this.divCalComp.form);
        		}
        	}
        }

        this.openPopup = function(obj, e)
        {
        	//trace("this.openPopup() obj.id : " + obj.id + " obj.parent.id : " + obj.parent.id + " obj.parent.parent.id : " + obj.parent.parent.id);
        	var strType = obj.toString().toUpperCase();

        	var clickDivObj;
        	var day = "";

        	if(strType == "[OBJECT DIV]")
        	{
        		clickDivObj = obj.parent.parent;
        		day = obj.form.stcDt.text;
        	}
        	else
        	{
        		clickDivObj = obj.parent.parent.parent.parent;
        		day = obj.parent.stcDt.text;
        	}

        	trace("clickDivObj.id : " + clickDivObj.id + " day : " + day);

        	if( !Ex.isEmpty(day) )
        	{
        		var dform = clickDivObj.parent.parent.parent.parent.parent;
        		dform.fnDaySelect(day);
        		trace("dform.rdoGubun.value : " + dform.rdoGubun.value);
        		trace("clickDivObj.form.divBox.fullDt : " + clickDivObj.form.divBox.fullDt);

        		Ex.core.popup(
        			dform,					// <--- 팝업 실행 스코프
        			"PJ1910_P01",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"fomm::FOMM0300_P01.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				title		: "작업 캘린더 상세",
        				pWorkDt		: clickDivObj.form.divBox.fullDt,
        				pWorkUserId	: dform.rdoGubun.value == "0" ? Ex.util.getSession('gvUserId') : ""
        			},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

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
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
        	{
        		case "PJ1910_P01" :
        			this.fnSearch01();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	//this.fnGetCmmCd();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y']				// 사용여부
        		,filter	: ['',			'ITM_VAL_1=="FAQ"||ITM_VAL_1=="ETC"']				// filterStr
        		,objDs	: [this.dsYnCd,	this.dsDatTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;
        	}
        }

        this.divOnSize = function(obj,e)
        {
        	//trace("this.formOnSize() obj.form.components.length : " + obj.form.components.length + " e.cx : " + e.cx + " e.cy : " + e.cy);

        	var divWidth = nexacro.floor(e.cx / 7);
        	var defaultLeft = nexacro.floor((e.cx - (divWidth * 7)) / 2);

        	//trace("divWidth : " + divWidth + " defaultLeft : " + defaultLeft);

        	for(var i=1; i<=obj.form.components.length; i++)
        	{
        		if(obj.form.components[i-1].id != "divInfo")
        		{
        			var divDayComp = obj.form["div" + i];
        			var divIdx = nexacro.replaceAll(divDayComp.id, "div", "");
        			var divKind = divIdx % 7;

        			//요일 헤더 사이즈 조절 시작
        			if(i<=7)
        			{
        				var stcIdx = nexacro.replaceAll(this["stcTitle" + i].id, "stcTitle", "");
        				this["stcTitle" + i].set_left( defaultLeft + (divWidth * ( (divKind == 0 ? 7 : divKind)- 1 ) ) );
        				this["stcTitle" + i].set_width(divWidth);
        			}
        			//요일 헤더 사이즈 조절 종료

        			//trace("BF divIdx : " + divIdx + " divKind :[" + divKind + "] left : " + divDayComp.left + " width : " + divDayComp.width);
        			divDayComp.set_left( defaultLeft + (divWidth * ( (divKind == 0 ? 7 : divKind)- 1 ) ) );
        			divDayComp.set_width(divWidth);
        			//trace("AF divIdx : " + divIdx + " divKind :[" + divKind + "] left : " + divDayComp.left + " width : " + divDayComp.width);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divCalComp.addEventHandler("onsize",this.divOnSize,this);
        };
        this.loadIncludeScript("FOMM0300_D02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
