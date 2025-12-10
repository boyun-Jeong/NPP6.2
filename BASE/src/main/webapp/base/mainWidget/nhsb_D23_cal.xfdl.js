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
            this.set_titletext("IT부문 작업캘린더");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.set_scrollbartype("none");
            this.set_background("white");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(629,197);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM2\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYYMM\"/></Row></Rows>");
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


            obj = new Dataset("dsCalWork", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRstrctDay", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUE_DATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDate36","20.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate36.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate36.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate36.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate36.addChild(obj.name, obj);

            obj = new Div("divDate29","20.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate29.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate29.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate29.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate29.addChild(obj.name, obj);

            obj = new Div("divDate22","20.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate22.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate22.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate22.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate22.addChild(obj.name, obj);

            obj = new Div("divDate15","20.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate15.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate15.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate15.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate15.addChild(obj.name, obj);

            obj = new Div("divDate01","20",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate01.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate01.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate01.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate01.addChild(obj.name, obj);

            obj = new Div("divDate08","20",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate08.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate08.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate08.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate08.addChild(obj.name, obj);

            obj = new Div("divDate37","60.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate37.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate37.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate37.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate37.addChild(obj.name, obj);

            obj = new Div("divDate30","60.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate30.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate30.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate30.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate30.addChild(obj.name, obj);

            obj = new Div("divDate23","60.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate23.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate23.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate23.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate23.addChild(obj.name, obj);

            obj = new Div("divDate16","60.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate16.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate16.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate16.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate16.addChild(obj.name, obj);

            obj = new Div("divDate02","60.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate02.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate02.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate02.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_verticalAlign("middle");
            this.divDate02.addChild(obj.name, obj);

            obj = new Div("divDate09","60.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate09.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate09.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate09.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate09.addChild(obj.name, obj);

            obj = new Div("divDate38","100.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate38.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate38.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate38.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate38.addChild(obj.name, obj);

            obj = new Div("divDate31","100.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate31.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate31.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate31.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate31.addChild(obj.name, obj);

            obj = new Div("divDate24","100.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate24.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate24.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate24.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate24.addChild(obj.name, obj);

            obj = new Div("divDate17","100.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate17.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate17.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate17.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate17.addChild(obj.name, obj);

            obj = new Div("divDate03","100.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate03.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate03.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate03.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate03.addChild(obj.name, obj);

            obj = new Div("divDate10","100.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate10.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate10.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate10.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate10.addChild(obj.name, obj);

            obj = new Div("divDate39","140.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate39.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate39.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate39.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate39.addChild(obj.name, obj);

            obj = new Div("divDate32","140.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate32.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate32.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate32.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate32.addChild(obj.name, obj);

            obj = new Div("divDate25","140.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate25.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate25.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate25.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate25.addChild(obj.name, obj);

            obj = new Div("divDate18","140.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate18.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate18.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate18.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate18.addChild(obj.name, obj);

            obj = new Div("divDate04","140.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate04.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate04.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate04.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate04.addChild(obj.name, obj);

            obj = new Div("divDate11","140.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate11.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate11.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate11.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate11.addChild(obj.name, obj);

            obj = new Div("divDate40","180.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate40.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate40.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate40.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate40.addChild(obj.name, obj);

            obj = new Div("divDate33","180.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate33.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate33.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate33.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate33.addChild(obj.name, obj);

            obj = new Div("divDate26","180.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate26.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate26.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate26.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate26.addChild(obj.name, obj);

            obj = new Div("divDate19","180.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate19.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate19.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate19.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate19.addChild(obj.name, obj);

            obj = new Div("divDate05","180.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate05.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate05.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate05.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate05.addChild(obj.name, obj);

            obj = new Div("divDate12","180.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate12.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate12.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate12.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate12.addChild(obj.name, obj);

            obj = new Div("divDate41","220.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate41.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate41.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate41.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate41.addChild(obj.name, obj);

            obj = new Div("divDate34","220.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate34.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate34.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate34.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate34.addChild(obj.name, obj);

            obj = new Div("divDate27","220.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate27.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate27.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate27.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate27.addChild(obj.name, obj);

            obj = new Div("divDate20","220.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate20.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate20.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate20.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate20.addChild(obj.name, obj);

            obj = new Div("divDate06","220.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate06.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate06.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate06.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate06.addChild(obj.name, obj);

            obj = new Div("divDate13","220.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate13.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate13.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate13.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate13.addChild(obj.name, obj);

            obj = new Div("divDate42","260.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate42.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate42.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate42.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate42.addChild(obj.name, obj);

            obj = new Div("divDate35","260.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate35.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate35.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate35.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate35.addChild(obj.name, obj);

            obj = new Div("divDate28","260.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate28.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate28.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate28.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate28.addChild(obj.name, obj);

            obj = new Div("divDate21","260.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate21.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate21.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate21.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate21.addChild(obj.name, obj);

            obj = new Div("divDate07","260.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate07.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate07.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate07.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate07.addChild(obj.name, obj);

            obj = new Div("divDate14","260.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate14.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate14.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate14.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate14.addChild(obj.name, obj);

            obj = new Static("stcSun","20.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("SUN");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","20.00","19","280","2",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#e8ecf7");
            this.addChild(obj.name, obj);

            obj = new Static("stcMon","60.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("MON");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTue","100.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("TUE");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcWed","140.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("WED");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcThu","180.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("THU");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcFRI","220.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("FRI");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcSat","260.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("SAT");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCurMonth","40.00","2","94","15",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("-");
            obj.set_color("#005bc3");
            obj.set_font("bold 12px \'KoPubL\'");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stcDivider","313.00","-3","2",null,null,"3",null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-divider.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("stcBefMonth","20.00","3","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("<");
            obj.set_background("#dfdfdf");
            obj.set_borderRadius("20px");
            obj.set_color("#666666");
            obj.set_font("bold 8px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Div("divDate136","329.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate136.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate136.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate136.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate136.addChild(obj.name, obj);

            obj = new Div("divDate129","329.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate129.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate129.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate129.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate129.addChild(obj.name, obj);

            obj = new Div("divDate122","329.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate122.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate122.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate122.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate122.addChild(obj.name, obj);

            obj = new Div("divDate115","329.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate115.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate115.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate115.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate115.addChild(obj.name, obj);

            obj = new Div("divDate101","329.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate101.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate101.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate101.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate101.addChild(obj.name, obj);

            obj = new Div("divDate108","329.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate108.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate108.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate108.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate108.addChild(obj.name, obj);

            obj = new Div("divDate137","369.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate137.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate137.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate137.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate137.addChild(obj.name, obj);

            obj = new Div("divDate130","369.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate130.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate130.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate130.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate130.addChild(obj.name, obj);

            obj = new Div("divDate123","369.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate123.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate123.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate123.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate123.addChild(obj.name, obj);

            obj = new Div("divDate116","369.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate116.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate116.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate116.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate116.addChild(obj.name, obj);

            obj = new Div("divDate102","369.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate102.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate102.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate102.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate102.addChild(obj.name, obj);

            obj = new Div("divDate109","369.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate109.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate109.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate109.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate109.addChild(obj.name, obj);

            obj = new Div("divDate138","409.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate138.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate138.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate138.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate138.addChild(obj.name, obj);

            obj = new Div("divDate131","409.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate131.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate131.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate131.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate131.addChild(obj.name, obj);

            obj = new Div("divDate124","409.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate124.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate124.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate124.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate124.addChild(obj.name, obj);

            obj = new Div("divDate117","409.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate117.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate117.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate117.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate117.addChild(obj.name, obj);

            obj = new Div("divDate103","409.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate103.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate103.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate103.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate103.addChild(obj.name, obj);

            obj = new Div("divDate110","409.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate110.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate110.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate110.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate110.addChild(obj.name, obj);

            obj = new Div("divDate139","449.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate139.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate139.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate139.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate139.addChild(obj.name, obj);

            obj = new Div("divDate132","449.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate132.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate132.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate132.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate132.addChild(obj.name, obj);

            obj = new Div("divDate125","449.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate125.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate125.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate125.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate125.addChild(obj.name, obj);

            obj = new Div("divDate118","449.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate118.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate118.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate118.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate118.addChild(obj.name, obj);

            obj = new Div("divDate104","449.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate104.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate104.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate104.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate104.addChild(obj.name, obj);

            obj = new Div("divDate111","449.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate111.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate111.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate111.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate111.addChild(obj.name, obj);

            obj = new Div("divDate140","489.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate140.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate140.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate140.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate140.addChild(obj.name, obj);

            obj = new Div("divDate133","489.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate133.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate133.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate133.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate133.addChild(obj.name, obj);

            obj = new Div("divDate126","489.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate126.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate126.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate126.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate126.addChild(obj.name, obj);

            obj = new Div("divDate119","489.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate119.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate119.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate119.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate119.addChild(obj.name, obj);

            obj = new Div("divDate105","489.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate105.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate105.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate105.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate105.addChild(obj.name, obj);

            obj = new Div("divDate112","489.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate112.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate112.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate112.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate112.addChild(obj.name, obj);

            obj = new Div("divDate141","529.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate141.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate141.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate141.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate141.addChild(obj.name, obj);

            obj = new Div("divDate134","529.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate134.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate134.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate134.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate134.addChild(obj.name, obj);

            obj = new Div("divDate127","529.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate127.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate127.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate127.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate127.addChild(obj.name, obj);

            obj = new Div("divDate120","529.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate120.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate120.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate120.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate120.addChild(obj.name, obj);

            obj = new Div("divDate106","529.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate106.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate106.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate106.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate106.addChild(obj.name, obj);

            obj = new Div("divDate113","529.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate113.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate113.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate113.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate113.addChild(obj.name, obj);

            obj = new Div("divDate142","569.00",null,"40","25",null,"8",null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate142.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate142.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate142.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate142.addChild(obj.name, obj);

            obj = new Div("divDate135","569.00",null,"40","25",null,"33",null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate135.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate135.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate135.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate135.addChild(obj.name, obj);

            obj = new Div("divDate128","569.00",null,"40","25",null,"58",null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate128.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate128.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate128.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate128.addChild(obj.name, obj);

            obj = new Div("divDate121","569.00",null,"40","25",null,"83",null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate121.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate121.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate121.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate121.addChild(obj.name, obj);

            obj = new Div("divDate107","569.00",null,"40","25",null,"133",null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate107.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate107.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate107.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate107.addChild(obj.name, obj);

            obj = new Div("divDate114","569.00",null,"40","25",null,"108",null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("div_HOME_calNormal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","24.00","9","13","13",null,null,null,null,null,null,this.divDate114.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_HOME_calCntNormal");
            this.divDate114.addChild(obj.name, obj);

            obj = new Static("stcDate","0","0","18","14",null,null,null,null,null,null,this.divDate114.form);
            obj.set_taborder("1");
            obj.set_text("-");
            this.divDate114.addChild(obj.name, obj);

            obj = new Static("stcSun00","329.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("SUN");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","329.00","19","280","2",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_background("#e8ecf7");
            this.addChild(obj.name, obj);

            obj = new Static("stcMon00","369.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("MON");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTue00","409.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("TUE");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcWed00","449.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("WED");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcThu00","489.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("THU");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcFRI00","529.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("FRI");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcSat00","569.00","19","40","18",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("SAT");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 10px \'KoPubL\'");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcNextMonth","335.00","2","154","15",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("-");
            obj.set_color("#c4c8d7");
            obj.set_font("bold 12px \'KoPubL\'");
            this.addChild(obj.name, obj);

            obj = new Static("stcAftMonth","596.00","3","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text(">");
            obj.set_background("#dfdfdf");
            obj.set_borderRadius("20px");
            obj.set_color("#666666");
            obj.set_font("bold 8px \'KoPubL\'");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvMonthCal","667","50","147","146",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_url("mainWidget::nhsb_D23_monthCal.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDate36.form
            obj = new Layout("default","",0,0,this.divDate36.form,function(p){});
            this.divDate36.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate29.form
            obj = new Layout("default","",0,0,this.divDate29.form,function(p){});
            this.divDate29.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate22.form
            obj = new Layout("default","",0,0,this.divDate22.form,function(p){});
            this.divDate22.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate15.form
            obj = new Layout("default","",0,0,this.divDate15.form,function(p){});
            this.divDate15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate01.form
            obj = new Layout("default","",0,0,this.divDate01.form,function(p){});
            this.divDate01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate08.form
            obj = new Layout("default","",0,0,this.divDate08.form,function(p){});
            this.divDate08.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate37.form
            obj = new Layout("default","",0,0,this.divDate37.form,function(p){});
            this.divDate37.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate30.form
            obj = new Layout("default","",0,0,this.divDate30.form,function(p){});
            this.divDate30.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate23.form
            obj = new Layout("default","",0,0,this.divDate23.form,function(p){});
            this.divDate23.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate16.form
            obj = new Layout("default","",0,0,this.divDate16.form,function(p){});
            this.divDate16.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate02.form
            obj = new Layout("default","",0,0,this.divDate02.form,function(p){});
            this.divDate02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate09.form
            obj = new Layout("default","",0,0,this.divDate09.form,function(p){});
            this.divDate09.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate38.form
            obj = new Layout("default","",0,0,this.divDate38.form,function(p){});
            this.divDate38.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate31.form
            obj = new Layout("default","",0,0,this.divDate31.form,function(p){});
            this.divDate31.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate24.form
            obj = new Layout("default","",0,0,this.divDate24.form,function(p){});
            this.divDate24.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate17.form
            obj = new Layout("default","",0,0,this.divDate17.form,function(p){});
            this.divDate17.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate03.form
            obj = new Layout("default","",0,0,this.divDate03.form,function(p){});
            this.divDate03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate10.form
            obj = new Layout("default","",0,0,this.divDate10.form,function(p){});
            this.divDate10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate39.form
            obj = new Layout("default","",0,0,this.divDate39.form,function(p){});
            this.divDate39.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate32.form
            obj = new Layout("default","",0,0,this.divDate32.form,function(p){});
            this.divDate32.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate25.form
            obj = new Layout("default","",0,0,this.divDate25.form,function(p){});
            this.divDate25.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate18.form
            obj = new Layout("default","",0,0,this.divDate18.form,function(p){});
            this.divDate18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate04.form
            obj = new Layout("default","",0,0,this.divDate04.form,function(p){});
            this.divDate04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate11.form
            obj = new Layout("default","",0,0,this.divDate11.form,function(p){});
            this.divDate11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate40.form
            obj = new Layout("default","",0,0,this.divDate40.form,function(p){});
            this.divDate40.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate33.form
            obj = new Layout("default","",0,0,this.divDate33.form,function(p){});
            this.divDate33.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate26.form
            obj = new Layout("default","",0,0,this.divDate26.form,function(p){});
            this.divDate26.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate19.form
            obj = new Layout("default","",0,0,this.divDate19.form,function(p){});
            this.divDate19.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate05.form
            obj = new Layout("default","",0,0,this.divDate05.form,function(p){});
            this.divDate05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate12.form
            obj = new Layout("default","",0,0,this.divDate12.form,function(p){});
            this.divDate12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate41.form
            obj = new Layout("default","",0,0,this.divDate41.form,function(p){});
            this.divDate41.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate34.form
            obj = new Layout("default","",0,0,this.divDate34.form,function(p){});
            this.divDate34.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate27.form
            obj = new Layout("default","",0,0,this.divDate27.form,function(p){});
            this.divDate27.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate20.form
            obj = new Layout("default","",0,0,this.divDate20.form,function(p){});
            this.divDate20.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate06.form
            obj = new Layout("default","",0,0,this.divDate06.form,function(p){});
            this.divDate06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate13.form
            obj = new Layout("default","",0,0,this.divDate13.form,function(p){});
            this.divDate13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate42.form
            obj = new Layout("default","",0,0,this.divDate42.form,function(p){});
            this.divDate42.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate35.form
            obj = new Layout("default","",0,0,this.divDate35.form,function(p){});
            this.divDate35.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate28.form
            obj = new Layout("default","",0,0,this.divDate28.form,function(p){});
            this.divDate28.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate21.form
            obj = new Layout("default","",0,0,this.divDate21.form,function(p){});
            this.divDate21.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate07.form
            obj = new Layout("default","",0,0,this.divDate07.form,function(p){});
            this.divDate07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate14.form
            obj = new Layout("default","",0,0,this.divDate14.form,function(p){});
            this.divDate14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate136.form
            obj = new Layout("default","",0,0,this.divDate136.form,function(p){});
            this.divDate136.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate129.form
            obj = new Layout("default","",0,0,this.divDate129.form,function(p){});
            this.divDate129.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate122.form
            obj = new Layout("default","",0,0,this.divDate122.form,function(p){});
            this.divDate122.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate115.form
            obj = new Layout("default","",0,0,this.divDate115.form,function(p){});
            this.divDate115.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate101.form
            obj = new Layout("default","",0,0,this.divDate101.form,function(p){});
            this.divDate101.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate108.form
            obj = new Layout("default","",0,0,this.divDate108.form,function(p){});
            this.divDate108.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate137.form
            obj = new Layout("default","",0,0,this.divDate137.form,function(p){});
            this.divDate137.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate130.form
            obj = new Layout("default","",0,0,this.divDate130.form,function(p){});
            this.divDate130.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate123.form
            obj = new Layout("default","",0,0,this.divDate123.form,function(p){});
            this.divDate123.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate116.form
            obj = new Layout("default","",0,0,this.divDate116.form,function(p){});
            this.divDate116.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate102.form
            obj = new Layout("default","",0,0,this.divDate102.form,function(p){});
            this.divDate102.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate109.form
            obj = new Layout("default","",0,0,this.divDate109.form,function(p){});
            this.divDate109.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate138.form
            obj = new Layout("default","",0,0,this.divDate138.form,function(p){});
            this.divDate138.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate131.form
            obj = new Layout("default","",0,0,this.divDate131.form,function(p){});
            this.divDate131.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate124.form
            obj = new Layout("default","",0,0,this.divDate124.form,function(p){});
            this.divDate124.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate117.form
            obj = new Layout("default","",0,0,this.divDate117.form,function(p){});
            this.divDate117.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate103.form
            obj = new Layout("default","",0,0,this.divDate103.form,function(p){});
            this.divDate103.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate110.form
            obj = new Layout("default","",0,0,this.divDate110.form,function(p){});
            this.divDate110.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate139.form
            obj = new Layout("default","",0,0,this.divDate139.form,function(p){});
            this.divDate139.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate132.form
            obj = new Layout("default","",0,0,this.divDate132.form,function(p){});
            this.divDate132.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate125.form
            obj = new Layout("default","",0,0,this.divDate125.form,function(p){});
            this.divDate125.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate118.form
            obj = new Layout("default","",0,0,this.divDate118.form,function(p){});
            this.divDate118.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate104.form
            obj = new Layout("default","",0,0,this.divDate104.form,function(p){});
            this.divDate104.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate111.form
            obj = new Layout("default","",0,0,this.divDate111.form,function(p){});
            this.divDate111.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate140.form
            obj = new Layout("default","",0,0,this.divDate140.form,function(p){});
            this.divDate140.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate133.form
            obj = new Layout("default","",0,0,this.divDate133.form,function(p){});
            this.divDate133.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate126.form
            obj = new Layout("default","",0,0,this.divDate126.form,function(p){});
            this.divDate126.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate119.form
            obj = new Layout("default","",0,0,this.divDate119.form,function(p){});
            this.divDate119.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate105.form
            obj = new Layout("default","",0,0,this.divDate105.form,function(p){});
            this.divDate105.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate112.form
            obj = new Layout("default","",0,0,this.divDate112.form,function(p){});
            this.divDate112.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate141.form
            obj = new Layout("default","",0,0,this.divDate141.form,function(p){});
            this.divDate141.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate134.form
            obj = new Layout("default","",0,0,this.divDate134.form,function(p){});
            this.divDate134.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate127.form
            obj = new Layout("default","",0,0,this.divDate127.form,function(p){});
            this.divDate127.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate120.form
            obj = new Layout("default","",0,0,this.divDate120.form,function(p){});
            this.divDate120.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate106.form
            obj = new Layout("default","",0,0,this.divDate106.form,function(p){});
            this.divDate106.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate113.form
            obj = new Layout("default","",0,0,this.divDate113.form,function(p){});
            this.divDate113.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate142.form
            obj = new Layout("default","",0,0,this.divDate142.form,function(p){});
            this.divDate142.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate135.form
            obj = new Layout("default","",0,0,this.divDate135.form,function(p){});
            this.divDate135.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate128.form
            obj = new Layout("default","",0,0,this.divDate128.form,function(p){});
            this.divDate128.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate121.form
            obj = new Layout("default","",0,0,this.divDate121.form,function(p){});
            this.divDate121.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate107.form
            obj = new Layout("default","",0,0,this.divDate107.form,function(p){});
            this.divDate107.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDate114.form
            obj = new Layout("default","",0,0,this.divDate114.form,function(p){});
            this.divDate114.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvMonthCal
            obj = new Layout("default","",0,0,this.pdvMonthCal.form,function(p){});
            this.pdvMonthCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",629,197,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mainWidget::nhsb_D23_monthCal.xfdl");
        };
        
        // User Script
        this.registerScript("nhsb_D23_cal.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frHome_D00
        * 화면(명)		︰ -
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ 대시보드 우측 내 정보 Div
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
        this.callScope = this.parent.parent.parent.parent;

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.SEARCH_GBN = '전체';			// 작업캘린더 조회구분
        this.YYYYMMDD = Ex.util.today();	// 선택된 일자

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
        	this.fnCompInit();
        	this.fnSearchReset();
        	this.fnSearch();
        }

        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	// 당월
        	var YYYYMM = Ex.util.today().substr(0, 6);
        	this.dsCond.setColumn(0, 'YYYYMM', YYYYMM);
        	this.stcCurMonth.set_text( this.getStrYYYYMM(YYYYMM) );

        	// 다음달
        	var YYYYMM2 = Ex.util.addMonth(Ex.util.today(), 1).substr(0, 6);
        	this.dsCond.setColumn(0, 'YYYYMM2', YYYYMM2);
        	this.stcNextMonth.set_text( this.getStrYYYYMM(YYYYMM2) );
        }


        this.fnSetCallScope = function(form)
        {
        	this.callScope = form;
        }
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	this.callScope.dsWorkList.clearData();	// 작업리스트 dataset clear

        	var sTranId = "selectCalDate";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetFOMM/selectCalDate";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCurMonthDate=dsCurMonthDate dsNextMonthDate=dsNextMonthDate";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        this.fnSearch01 = function()
        {
        	this.dsCond.setColumn(0, 'SEARCH_GBN', this.SEARCH_GBN);
        	this.dsCond.setColumn(0, 'SEARCH_DATE', '');

        	var sTranId = "selectMonthCalReqCnt";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectMonthCalReqCnt";   // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCalWork=dsData";       			// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearch02 = function()
        {
        	this.dsCond.setColumn(0, 'SEARCH_GBN', this.SEARCH_GBN);
        	//alert("this.YYYYMMDD : " + this.YYYYMMDD);
        	this.dsCond.setColumn(0, 'SEARCH_DATE', this.YYYYMMDD);

        	var sTranId = "selectMonthCalReqList";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "nhHome/selectMonthCalReqCnt";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWorkList=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        		case "selectCalDate":		// 달력용 날짜 조회
        			// 이행 통제기간 setting - 매달 월 마지막 업무일 3일
        			this.dsRstrctDay.clearData();
        			this.fnSetWorkRestrictDay(this.dsCurMonthDate);		// ds에 통제기간 값 설정
        			this.fnSetWorkRestrictDay(this.dsNextMonthDate);	// ds에 통제기간 값 설정
        			this.fnDispWorkRestrictGrid();		// grid에 통제기간 표기

        			this.fnResetCalendar();		// 달력 초기화
        			this.fnResetStcCnt();		// 달력 건수 초기화
        			this.fnSetCalendar('CUR');
        			this.fnSetCalendar('NEXT');

        			this.fnSearch01();	// 작업캘린더 건수 조회
        			this.fnSearch02();	// 작업캘린더 목록 조회
        			break;

        		case "selectMonthCalReqCnt":	// 달력용 월별 작업리스트 조회
        			this.fnResetStcCnt();	// 달력 건수 초기화
        			this.fnSetCalCntDs();		// 날짜 dataset에 건수 매핑
        			this.fnSetCalCnt();		// 매핑된 건수 달력에 표기
        			break;

        		case "selectMonthCalReqList" :		// 선택일자 작업리스트 조회
        			this.callScope.dsWorkList.loadXML(this.dsWorkList.saveXML());
        			this.fnDispWorkRestrictGrid();		// grid에 통제기간 표기
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{

        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();
        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']				// 사용여부
        		,filter	: ['']				// filterStr
        		,objDs	: [this.dsDatTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }



        // 이행통제기간
        this.fnSetWorkRestrictDay = function(objDs)
        {
        	// 1. 이번달 마지막 업무일 3일
        	var MAX_CNT 	= 3;
        	var RSTRCT_CNT 	= 0;
        	var RSTRCT_FROM_DATE = '';
        	var RSTRCT_TO_DATE = '';
        	for(var i = objDs.rowcount-1; i >= 0; i--)
        	{
        		if(RSTRCT_CNT == MAX_CNT)
        			break;

        		var WEEK_CD = objDs.getColumn(i, 'WEEK_CD');
        		var FULL_DT = objDs.getColumn(i, 'FULL_DT');
        		if( WEEK_CD != '7' && WEEK_CD != '1' ) {	// not sat and not sun
        			objDs.setColumn(i, 'RSTRCT_YN', 'Y');		// 이행통제 FLAG
        			RSTRCT_CNT++;

        			// 통제 종료일 setting
        			if( Ex.isEmpty(RSTRCT_TO_DATE) ) {
        				RSTRCT_TO_DATE		= FULL_DT;
        				RSTRCT_FROM_DATE	= FULL_DT;
        			}

        			// 통제 시작일 setting
        			if( RSTRCT_FROM_DATE > FULL_DT )
        				RSTRCT_FROM_DATE = FULL_DT;

        		}
        	}

        	// 1-1. dataset에 저장
        	var FROM_DATE_NM 	= RSTRCT_FROM_DATE.substr(0, 4) + '/' + RSTRCT_FROM_DATE.substr(4, 2) + '/' + RSTRCT_FROM_DATE.substr(6, 2);
        	var TO_DATE_NM 		= RSTRCT_TO_DATE.substr(0, 4) + '/' + RSTRCT_TO_DATE.substr(4, 2) + '/' + RSTRCT_TO_DATE.substr(6, 2);
        	var rowpos = this.dsRstrctDay.addRow();
        	this.dsRstrctDay.setColumn(rowpos, 'WORK_DEPT_NM', '공지');
        	this.dsRstrctDay.setColumn(rowpos, 'TITLE', "[정기] 이행 통제 기간");
        	this.dsRstrctDay.setColumn(rowpos, 'REQ_DATE_NM', FROM_DATE_NM);
        	this.dsRstrctDay.setColumn(rowpos, 'DUE_DATE_NM', TO_DATE_NM);
        	this.dsRstrctDay.setColumn(rowpos, 'YYYYMM', RSTRCT_FROM_DATE.substr(0, 6));


        	// 2. 설/추석 전 업무일 3일
        	var MAX_CNT 	= 3;
        	var RSTRCT_CNT 	= 0;
        	var RSTRCT_FROM_DATE = '';
        	var RSTRCT_TO_DATE = '';

        	var holiDayBegin = objDs.findRowExpr("HOLY_TYPE == 'S' || HOLY_TYPE == 'C'");	// S:설 C:추석
        	if( holiDayBegin < 0 )
        		return;

        	var HOLI_TYPE = objDs.getColumn(holiDayBegin, 'HOLY_TYPE');
        	for(var i = holiDayBegin-1; i >= 0; i--)
        	{
        		if(RSTRCT_CNT == MAX_CNT)
        			break;

        		var WEEK_CD = objDs.getColumn(i, 'WEEK_CD');
        		var FULL_DT = objDs.getColumn(i, 'FULL_DT');
        		if( WEEK_CD != '7' && WEEK_CD != '1' ) {	// not sat and not sun
        			objDs.setColumn(i, 'RSTRCT_YN', 'Y');		// 이행통제 FLAG
        			RSTRCT_CNT++;

        			// 통제 종료일 setting
        			if( Ex.isEmpty(RSTRCT_TO_DATE) ) {
        				RSTRCT_TO_DATE		= FULL_DT;
        				RSTRCT_FROM_DATE	= FULL_DT;
        			}

        			// 통제 시작일 setting
        			if( RSTRCT_FROM_DATE > FULL_DT )
        				RSTRCT_FROM_DATE = FULL_DT;

        			// 날짜 ds에 값 추가
        			objDs.setColumn(i, 'HOLY_TYPE', HOLI_TYPE);	// 정기 이행통제 구분용 코드
        		}
        	}

        	// 2-1. dataset에 저장
        	var FROM_DATE_NM 	= RSTRCT_FROM_DATE.substr(0, 4) + '/' + RSTRCT_FROM_DATE.substr(4, 2) + '/' + RSTRCT_FROM_DATE.substr(6, 2);
        	var TO_DATE_NM 		= RSTRCT_TO_DATE.substr(0, 4) + '/' + RSTRCT_TO_DATE.substr(4, 2) + '/' + RSTRCT_TO_DATE.substr(6, 2);
        	var HOLI_TYPE_NM	= HOLI_TYPE == 'C'? '추석' : '설';
        	var rowpos = this.dsRstrctDay.addRow();
        	this.dsRstrctDay.setColumn(rowpos, 'WORK_DEPT_NM', '공지');
        	this.dsRstrctDay.setColumn(rowpos, 'TITLE', "[" + HOLI_TYPE_NM + "] 이행 통제 기간");
        	this.dsRstrctDay.setColumn(rowpos, 'REQ_DATE_NM', FROM_DATE_NM);
        	this.dsRstrctDay.setColumn(rowpos, 'DUE_DATE_NM', TO_DATE_NM);
        	this.dsRstrctDay.setColumn(rowpos, 'YYYYMM', RSTRCT_FROM_DATE.substr(0, 6));
        }


        this.fnDispWorkRestrictGrid = function()
        {
        	// 이행 통제 기간 강제 추가
        	var SEL_YYYYMM = this.YYYYMMDD.substr(0, 6);
        	this.dsRstrctDay.set_filterstr("YYYYMM=='" + SEL_YYYYMM + "'");

        	if(this.callScope.dsWorkList.rowcount == 0 ) {		// 초기 컬럼정보 없음
        		this.callScope.dsWorkList.copyData(this.dsRstrctDay, true);
        	}
        	else {
        		for(var i = 0; i < this.dsRstrctDay.rowcount; i++) {
        			this.callScope.dsWorkList.copyRow(this.callScope.dsWorkList.insertRow(0), this.dsRstrctDay, i);
        		}
        	}

        	this.dsRstrctDay.set_filterstr('');
        }


        // 달력 초기화
        this.fnResetCalendar = function()
        {
        	// 이번달
        	for(var i = 1; i <= 42; i++) {
        		var num = (i >= 10? i : '0'+i);
        		var id = 'divDate' + num;

        		// div css 초기화
        		this.components[id].set_cssclass('div_HOME_calNormal');

        		// 건수 초기화
        		this.components[id].form.stcCnt.set_visible(false);
        		this.components[id].form.stcCnt.set_text('');

        		// 날짜 초기화
        		this.components[id].form.stcDate.set_text('');
        		this.components[id].form.stcDate.set_font(undefined);
        		this.components[id].form.stcDate.set_color(undefined);
        		this.components[id].form.stcDate.set_tooltiptext(undefined);
        		this.components[id].form.stcDate.set_cssclass('sta_HOME_calEtcMonth');
        		this.components[id].set_tooltiptext('');

        		// 속성 초기화
        		this.components[id].IS_TODAY	= '';
        		this.components[id].YYYYMMDD 	= '';
        		this.components[id].WEEK_CD		= '';
        		this.components[id].HOLI_YN		= '';
        		this.components[id].HOLY_TYPE	= '';
        		this.components[id].RSTRCT_YN	= '';
        		this.components[id].form.stcDate.YYYYMMDD	= '';
        		this.components[id].form.stcCnt.YYYYMMDD	= '';
        	}

        	// 다음달
        	for(var i = 1; i <= 42; i++)
        	{
        		var num = (i >= 10? i : '0'+i);
        		var id = 'divDate1' + num;

        		// div css 초기화
        		this.components[id].set_cssclass('div_HOME_calNormal');

        		// 건수 초기화
        		this.components[id].form.stcCnt.set_visible(false);
        		this.components[id].form.stcCnt.set_text('');

        		// 날짜 초기화
        		this.components[id].form.stcDate.set_text('');
        		this.components[id].form.stcDate.set_font(undefined);
        		this.components[id].form.stcDate.set_color(undefined);
        		this.components[id].form.stcDate.set_tooltiptext(undefined);
        		this.components[id].form.stcDate.set_cssclass('sta_HOME_calEtcMonth');
        		this.components[id].set_tooltiptext('');

        		// 속성 초기화
        		this.components[id].IS_TODAY	= '';
        		this.components[id].YYYYMMDD 	= '';
        		this.components[id].WEEK_CD		= '';
        		this.components[id].HOLI_YN		= '';
        		this.components[id].HOLY_TYPE	= '';
        		this.components[id].RSTRCT_YN	= '';
        		this.components[id].form.stcDate.YYYYMMDD	= '';
        		this.components[id].form.stcCnt.YYYYMMDD	= '';
        	}
        }

        this.fnResetStcCnt = function()
        {
        	// 이번달
        	for(var i = 1; i <= 42; i++) {
        		var num = (i >= 10? i : '0'+i);
        		var id = 'divDate' + num;

        		// 건수 초기화
        		this.components[id].form.stcCnt.set_visible(false);
        		this.components[id].form.stcCnt.set_cssclass('sta_HOME_calCntNormal');
        		this.components[id].form.stcCnt.set_text('');
        	}

        	// 다음달
        	for(var i = 1; i <= 42; i++) {
        		var num = (i >= 10? i : '0'+i);
        		var id = 'divDate1' + num;

        		// 건수 초기화
        		this.components[id].form.stcCnt.set_visible(false);
        		this.components[id].form.stcCnt.set_cssclass('sta_HOME_calCntNormal');
        		this.components[id].form.stcCnt.set_text('');
        	}
        }


        // 날짜 Div css 초기화
        this.fnResetDivCss = function()
        {
        	// 이번달
        	for(var i = 1; i <= 42; i++) {
        		var num = (i >= 10? i : '0'+i);
        		var id = 'divDate' + num;

        		if( this.components[id].IS_TODAY == 'Y' )
        			this.components[id].set_cssclass('div_HOME_calToday');
        		else
        			this.components[id].set_cssclass('div_HOME_calNormal');
        	}

        	// 다음달
        	for(var i = 1; i <= 42; i++) {
        		var num = (i >= 10? i : '0'+i);
        		var id = 'divDate1' + num;

        		if( this.components[id].IS_TODAY == 'Y' )
        			this.components[id].set_cssclass('div_HOME_calToday');
        		else
        			this.components[id].set_cssclass('div_HOME_calNormal');
        	}
        }



        // 달력 값 setting
        this.fnSetCalendar = function(GBN)
        {
        	var objDs;
        	var id;
        	if( GBN == 'NEXT' ) {
        		objDs = this.dsNextMonthDate;
        		id = 'divDate1';
        	}
        	else {
        		objDs = this.dsCurMonthDate;
        		id = 'divDate';
        	}

        	if( objDs.rowcount == 0 ) {
        		trace('nhsb_D12_cal >> 홈화면 작업캘린더 :: 그릴 날짜가 없습니다.');
        		return;
        	}

        	var WEEK_CD = objDs.getColumn(0, 'WEEK_CD');
        	var FULL_DT = objDs.getColumn(0, 'FULL_DT');

        	// 이전달 날짜
        	var START_DATE = FULL_DT;
        	var LAST_WEEK_CD = Number(WEEK_CD)-1;
        	if( LAST_WEEK_CD != 0 )
        	{
        		for(var i = LAST_WEEK_CD; i >= 1; i--) {
        			START_DATE = Ex.util.addDate(START_DATE, -1);
        			this.components[id + '0' + i].form.stcDate.set_text( START_DATE.substr(6, 2) );

        			// 컴포넌트에 YYYYMMDD setting
        			this.components[id + '0' + i].YYYYMMDD 		= START_DATE;
        			this.components[id + '0' + i].form.stcDate.YYYYMMDD	= START_DATE;
        			this.components[id + '0' + i].form.stcCnt.YYYYMMDD	= START_DATE;
        		}
        	}

        	// 조회해온 이번달 날짜 ㄱㄱ
        	var START_ID = Number(WEEK_CD);
        	for(var i = 0; i < objDs.rowcount; i++)
        	{
        		var FULL_DT 	= objDs.getColumn(i, 'FULL_DT');
        		var IS_TODAY	= objDs.getColumn(i, 'IS_TODAY');
        		var WEEK_CD		= objDs.getColumn(i, 'WEEK_CD');
        		var HOLI_YN		= objDs.getColumn(i, 'HOLI_YN');
        		var HOLY_TYPE	= objDs.getColumn(i, 'HOLY_TYPE');
        		var HOLI_NAME	= objDs.getColumn(i, 'HOLI_NAME');
        		var RSTRCT_YN	= objDs.getColumn(i, 'RSTRCT_YN');

        		var num = (START_ID >= 10? START_ID : '0' + START_ID);
        		this.components[id + num].form.stcDate.set_text(Number(FULL_DT.substr(6, 2)));

        		// divCss
        		if(IS_TODAY == 'Y')	// 오늘인 경우 div css 변경
        		{
        			this.components[id + num].set_cssclass('div_HOME_calToday');
        		}

        		// 날짜 text css
        		this.components[id + num].form.stcDate.set_cssclass('sta_HOME_calCurMonth');

        		// 휴일 || 이행통제일 css
        		if( RSTRCT_YN == 'Y' )
        		{
        			this.components[id + num].set_cssclass('div_HOME_calHoliday');		// 날짜 div
        			this.components[id + num].form.stcCnt.set_cssclass('sta_HOME_calCntHoliday');
        			this.components[id + num].form.stcDate.set_font('bold 12px "KoPubL"');
        		}
        		else if(WEEK_CD == '1' || HOLI_YN == '1' || HOLI_YN == 'Y')	//일요일 또는 휴일
        		{
        			this.components[id + num].form.stcDate.set_color("red");
        			this.components[id + num].form.stcDate.set_font('bold 12px "KoPubL"');
        		}
        		else if( WEEK_CD == '7')	//토요일
        		{
        			//_getCurrentStyleInheritValue("font")
        			this.components[id + num].form.stcDate.set_color("blue");
        			this.components[id + num].form.stcDate.set_font('bold 12px "KoPubL"');
        			//this.components[id + num].set_cssclass('div_HOME_calSatday');		// 날짜 div
        			//this.components[id + num].form.stcCnt.set_cssclass('sta_HOME_calCntSatday');
        		}

        		if( !Ex.isEmpty(HOLI_NAME) )
        		{
        			trace("!Ex.isEmpty(HOLI_NAME) FULL_DT : " + FULL_DT +" HOLI_NAME : " + HOLI_NAME);
        			//this.components[id + num].form.stcDate.set_cssclass(undefined);
        			this.components[id + num].form.stcDate.set_font('bold 12px "KoPubL"');
        			this.components[id + num].form.stcDate.set_tooltiptext(HOLI_NAME);
        			this.components[id + num].set_tooltiptext(HOLI_NAME);
        		}

        		// 컴포넌트에 YYYYMMDD setting
        		this.components[id + num].IS_TODAY	= IS_TODAY;
        		this.components[id + num].YYYYMMDD 	= FULL_DT;
        		this.components[id + num].WEEK_CD	= WEEK_CD;
        		this.components[id + num].HOLI_YN	= HOLI_YN;
        		this.components[id + num].HOLY_TYPE	= HOLY_TYPE;
        		this.components[id + num].RSTRCT_YN	= RSTRCT_YN;
        		this.components[id + num].form.stcDate.YYYYMMDD	= FULL_DT;
        		this.components[id + num].form.stcCnt.YYYYMMDD	= FULL_DT;

        		// dataset에 comp id 저장
        		objDs.setColumn(i, 'DATE_COMP', this.components[id + num].id);

        		START_ID++;
        	}

        	// 다음달 날짜
        	var START_DATE = 1;
        	var FULL_DT = Ex.util.addMonth(this.dsCond.getColumn(0, 'YYYYMM') + '01', 1);
        	for(var i = START_ID; i <= 42; i++)
        	{
        		this.components[id + i].form.stcDate.set_text(START_DATE++);

        		// 컴포넌트에 YYYYMMDD setting
        		this.components[id + i].YYYYMMDD 		= FULL_DT;
        		this.components[id + i].form.stcDate.YYYYMMDD	= FULL_DT;
        		this.components[id + i].form.stcCnt.YYYYMMDD	= FULL_DT;

        		FULL_DT = Ex.util.addDate(FULL_DT, 1);

        	}
        }

        this.getStrYYYYMM = function(YYYYMM)
        {
        	var YYYY = YYYYMM.substr(0, 4);
        	var MM = YYYYMM.substr(4, 2);

        	var strMM = '';
        	switch(MM)
        	{
        		case "01" :	strMM = 'January';	break;
        		case "02" :	strMM = 'February';	break;
        		case "03" :	strMM = 'March';	break;
        		case "04" :	strMM = 'April';	break;
        		case "05" :	strMM = 'May';		break;
        		case "06" :	strMM = 'June';		break;
        		case "07" :	strMM = 'July';		break;
        		case "08" :	strMM = 'August';	break;
        		case "09" :	strMM = 'September';	break;
        		case "10" :	strMM = 'October';	break;
        		case "11" :	strMM = 'November';	break;
        		case "12" :	strMM = 'December';	break;
        	}

        	return strMM + ' ' + YYYY;
        }

        this.fnSetCalCntDs = function()
        {
        	// 건수 초기화
        	for(var i = 0; i < this.dsCurMonthDate.rowcount; i++)
        		this.dsCurMonthDate.setColumn(i, 'JOB_CNT', 0)
        	for(var i = 0; i < this.dsNextMonthDate.rowcount; i++)
        		this.dsNextMonthDate.setColumn(i, 'JOB_CNT', 0);

        	if( this.dsCalWork.rowcount == 0 )	return;

        	trace("this.fnSetCalCntDs() this.dsCurMonthDate.rowcount:[" + this.dsCurMonthDate.rowcount + "]");

        	for(var i = 0; i < this.dsCurMonthDate.rowcount; i++)
        	{
        		var day = this.dsCurMonthDate.getColumn(i, "FULL_DT");
        		var filterStr =
        			"REQ_DATE=='" + day + "' || (" +
        		  "REQ_DATE>='" + day + "' && " +
        		  "DUE_DT>='" + day + "')";

        		var cnt = this.dsCalWork.getCaseCount(filterStr);

        		var reqCnt = this.dsCalWork.getCaseCount("REQ_DATE=='" + day + "'");
        		var dueCnt = this.dsCalWork.getCaseCount("REQ_DATE>='" + day + "' && DUE_DT>='" + day + "'");
        		//trace("i:[" + i + "] day:[" + day + "] filterStr:[" + filterStr + "] reqCnt:[" + reqCnt + "] dueCnt:[" + dueCnt + "]");
        		this.dsCurMonthDate.setColumn(i, 'JOB_CNT', cnt > 0 ? "●" : "");

        		if( Ex.isEmpty(this.dsCurMonthDate.getColumn(i, 'JOB_CNT')) )
        		{
        			var holiName = this.dsCurMonthDate.getColumn(i, "HOLI_NAME");

        			if( !Ex.isEmpty(holiName) )
        			{
        				this.dsCurMonthDate.setColumn(i, 'JOB_CNT', "※");
        			}
        		}
        	}

        	for(var i = 0; i < this.dsNextMonthDate.rowcount; i++)
        	{
        		var day = this.dsNextMonthDate.getColumn(i, "FULL_DT");
        		var filterStr =
        			"REQ_DATE=='" + day + "' || (" +
        		  "REQ_DATE>='" + day + "' && " +
        		  "DUE_DT>='" + day + "')";

        		var cnt = this.dsCalWork.getCaseCount(filterStr);

        		var reqCnt = this.dsCalWork.getCaseCount("REQ_DATE=='" + day + "'");
        		var dueCnt = this.dsCalWork.getCaseCount("REQ_DATE>='" + day + "' && DUE_DT>='" + day + "'");
        		//trace("i:[" + i + "] day:[" + day + "] filterStr:[" + filterStr + "] reqCnt:[" + reqCnt + "] dueCnt:[" + dueCnt + "]");
        		this.dsNextMonthDate.setColumn(i, 'JOB_CNT', cnt > 0 ? "●" : "");

        		if( Ex.isEmpty(this.dsNextMonthDate.getColumn(i, 'JOB_CNT')) )
        		{
        			var holiName = this.dsNextMonthDate.getColumn(i, "HOLI_NAME");

        			if( !Ex.isEmpty(holiName) )
        			{
        				this.dsNextMonthDate.setColumn(i, 'JOB_CNT', "※");
        			}
        		}
        	}

        	/*
        	for(var i = 0; i < this.dsCalWork.rowcount; i++)
        	{
        		var REQ_DATE = this.dsCalWork.getColumn(i, 'REQ_DATE');
        		var DUE_DATE = this.dsCalWork.getColumn(i, 'DUE_DATE');
        		var DATE_CNT = parseInt(Ex.util.getDiffDay(REQ_DATE, DUE_DATE));
        		//trace('i :: ' + i + '  REQ_DATE :: ' + REQ_DATE + '  DUE_DATE :: ' + DUE_DATE + '  DATE_CNT :: ' + DATE_CNT);
        		if( DATE_CNT < 0 )
        			continue;

        		// 해당월 종료 건
        		var rowpos = this.dsCurMonthDate.findRow('FULL_DT', DUE_DATE);
        		//trace('\t해당월종료 : rowpos : ' + rowpos);
        		if( rowpos >= 0 )
        		{
        			for(var j = rowpos; j >= rowpos - DATE_CNT; j--)
        			{
        				if( j < 0 )	break;

        				var JOB_CNT = parseInt(this.dsCurMonthDate.getColumn(j, 'JOB_CNT')||0);
        				this.dsCurMonthDate.setColumn(j, 'JOB_CNT', ++JOB_CNT);
        			}
        			this.dsCalWork.setColumn(i, 'CNT_CHK_YN', 'Y');
        		}

        		// 해당월 시작 건
        		var rowpos = this.dsCurMonthDate.findRow('FULL_DT', REQ_DATE);
        		//trace('\t해당월시작 : rowpos : ' + rowpos);
        		if( rowpos >= 0 && this.dsCalWork.getColumn(i, 'CNT_CHK_YN') == 'N' )
        		{
        			for(var j = rowpos; j < rowpos + DATE_CNT; j++)
        			{
        				// 해당월 시작 ~ 다음달 종료
        				if( j >= this.dsCurMonthDate.rowcount ) {
        					var JOB_CNT = parseInt(this.dsNextMonthDate.getColumn( j-this.dsCurMonthDate.rowcount, 'JOB_CNT')||0);
        					this.dsNextMonthDate.setColumn( j-this.dsCurMonthDate.rowcount, 'JOB_CNT', ++JOB_CNT);
        					continue;
        				}

        				// 해당월 시작
        				var JOB_CNT = parseInt(this.dsCurMonthDate.getColumn(j, 'JOB_CNT')||0);
        				this.dsCurMonthDate.setColumn(j, 'JOB_CNT', ++JOB_CNT);
        			}
        			this.dsCalWork.setColumn(i, 'CNT_CHK_YN', 'Y');
        		}

        		// 다음월 시작 건
        		var rowpos = this.dsNextMonthDate.findRow('FULL_DT', REQ_DATE);
        		//trace('\t다음달시작 : rowpos : ' + rowpos);
        		if( rowpos >= 0 && this.dsCalWork.getColumn(i, 'CNT_CHK_YN') == 'N' )
        		{
        			for(var j = rowpos; j < rowpos + DATE_CNT; j++)
        			{
        				// 다음달 시작 ~ 다다음달 종료
        				if( j >= this.dsNextMonthDate.rowcount ) {
        					continue;
        				}

        				// 다음달 시작
        				var JOB_CNT = parseInt(this.dsNextMonthDate.getColumn(j, 'JOB_CNT')||0);
        				this.dsNextMonthDate.setColumn(j, 'JOB_CNT', ++JOB_CNT);
        			}
        			this.dsCalWork.setColumn(i, 'CNT_CHK_YN', 'Y');
        		}
        	}
        	*/
        }

        this.fnSetCalCnt = function()
        {
        	this.dsCurMonthDate.set_filterstr('!Ex.isEmpty(JOB_CNT) && Number(JOB_CNT) != 0');
        	for(var i = 0; i < this.dsCurMonthDate.rowcount; i++)
        	{
        		var JOB_CNT		= this.dsCurMonthDate.getColumn(i, 'JOB_CNT');
        		var DATE_COMP 	= this.dsCurMonthDate.getColumn(i, 'DATE_COMP');

        		this.components[DATE_COMP].form.stcCnt.set_text(JOB_CNT);
        		this.components[DATE_COMP].form.stcCnt.set_visible(true);
        	}
        	this.dsCurMonthDate.set_filterstr('');

        	this.dsNextMonthDate.set_filterstr('!Ex.isEmpty(JOB_CNT) && Number(JOB_CNT) != 0');
        	for(var i = 0; i < this.dsNextMonthDate.rowcount; i++)
        	{
        		var JOB_CNT		= this.dsNextMonthDate.getColumn(i, 'JOB_CNT');
        		var DATE_COMP 	= this.dsNextMonthDate.getColumn(i, 'DATE_COMP');

        		this.components[DATE_COMP].form.stcCnt.set_text(JOB_CNT);
        		this.components[DATE_COMP].form.stcCnt.set_visible(true);
        	}
        	this.dsNextMonthDate.set_filterstr('');
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	switch(obj.name)
        	{
        		case "btnMore" :	// 요청관리
        			var rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0122_W');
        			if( rowpos >= 0 )
        			Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        			break;

        		case "btnExcel" :
        			break;

        		case "stcBefMonth" :	// 이전달
        			// 다음달
        			var YYYYMM2 = this.dsCond.getColumn(0, 'YYYYMM');
        			this.dsCond.setColumn(0, 'YYYYMM2', YYYYMM2);
        			this.stcNextMonth.set_text( this.getStrYYYYMM(YYYYMM2) );

        			// 당월
        			var YYYYMM = Ex.util.addMonth(YYYYMM2+'01', -1).substr(0, 6);
        			this.YYYYMMDD = YYYYMM + '01';
        			this.dsCond.setColumn(0, 'YYYYMM', YYYYMM);
        			this.stcCurMonth.set_text( this.getStrYYYYMM(YYYYMM) );

        			this.fnSearch();
        			break;

        		case "stcAftMonth" :	// 다음달
        			// 당월
        			var YYYYMM = this.dsCond.getColumn(0, 'YYYYMM2');
        			this.YYYYMMDD = YYYYMM + '01';
        			this.dsCond.setColumn(0, 'YYYYMM', YYYYMM);
        			this.stcCurMonth.set_text( this.getStrYYYYMM(YYYYMM) );

        			// 다음달
        			var YYYYMM2 = Ex.util.addMonth(YYYYMM+'01', 1).substr(0, 6);
        			this.dsCond.setColumn(0, 'YYYYMM2', YYYYMM2);
        			this.stcNextMonth.set_text( this.getStrYYYYMM(YYYYMM2) );

        			this.fnSearch();
        			break;
        	}
        }

        this.stcCurMonth_onclick = function(obj,e)
        {
        	this.pdvMonthCal.set_url('');
        	this.pdvMonthCal.set_url('mainWidget::nhsb_D23_monthCal.xfdl');
        	this.pdvMonthCal.trackPopupByComponent(this.stcCurMonth, 0, this.stcCurMonth.getOffsetHeight(), null, null, "pdvCallback", false );
        };


        this.pdvCallback = function(pdvId, value)
        {
        	if( Ex.isEmpty(value) )	return;

        	// 당월
        	var YYYYMM = value;
        	this.dsCond.setColumn(0, 'YYYYMM', YYYYMM);
        	this.stcCurMonth.set_text( this.getStrYYYYMM(YYYYMM) );

        	// 다음달
        	var YYYYMM2 = Ex.util.addMonth(YYYYMM+'01', 1).substr(0, 6);
        	this.dsCond.setColumn(0, 'YYYYMM2', YYYYMM2);
        	this.stcNextMonth.set_text( this.getStrYYYYMM(YYYYMM2) );

        	this.fnSearch();
        }

        this.fnDateClick = function(obj,e)
        {
        	var div = obj;
        	if( obj == '[object Static]')
        		div = obj.parent.parent;

        	// css 초기화 && set
        	for(var i = 0; i < this.components.length; i++)
        	{
        		if( this.components[i] != '[object Div]' )
        			continue;

        		if(this.components[i].cssclass == 'div_HOME_calSel')
        		{
        			var WEEK_CD		= this.components[i].WEEK_CD;
        			var HOLI_YN		= this.components[i].HOLI_YN;
        			var RSTRCT_YN	= this.components[i].RSTRCT_YN;
        			var HOLY_TYPE	= this.components[i].HOLY_TYPE;
        			if( RSTRCT_YN == 'Y' )
        			{
        				this.components[i].set_cssclass('div_HOME_calHoliday');
        			}
        			else
        			{
        				this.components[i].set_cssclass('div_HOME_calNormal');
        			}
        			break;
        		}
        	}
        	div.set_cssclass('div_HOME_calSel');

        	this.YYYYMMDD = obj.YYYYMMDD;
        	this.fnSearch02();	// 작업리스트 조회
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.divDate36.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate36.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate36.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate29.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate29.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate29.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate22.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate22.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate22.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate15.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate15.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate15.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate01.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate01.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate01.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate08.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate08.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate08.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate37.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate37.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate37.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate30.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate30.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate30.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate23.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate23.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate23.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate16.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate16.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate16.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate02.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate02.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate02.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate09.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate09.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate09.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate38.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate38.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate38.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate31.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate31.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate31.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate24.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate24.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate24.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate17.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate17.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate17.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate03.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate03.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate03.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate10.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate10.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate10.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate39.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate39.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate39.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate32.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate32.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate32.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate25.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate25.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate25.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate18.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate18.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate18.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate04.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate04.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate04.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate11.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate11.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate11.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate40.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate40.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate40.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate33.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate33.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate33.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate26.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate26.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate26.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate19.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate19.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate19.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate05.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate05.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate05.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate12.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate12.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate12.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate41.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate41.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate41.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate34.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate34.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate34.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate27.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate27.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate27.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate20.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate20.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate20.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate06.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate06.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate06.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate13.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate13.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate13.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate42.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate42.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate42.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate35.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate35.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate35.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate28.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate28.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate28.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate21.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate21.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate21.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate07.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate07.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate07.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate14.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate14.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate14.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.stcCurMonth.addEventHandler("onclick",this.stcCurMonth_onclick,this);
            this.stcDivider.addEventHandler("onclick",this.stcDivider_onclick,this);
            this.stcBefMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDate136.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate136.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate136.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate129.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate129.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate129.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate122.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate122.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate122.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate115.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate115.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate115.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate101.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate101.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate101.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate108.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate108.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate108.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate137.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate137.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate137.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate130.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate130.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate130.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate123.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate123.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate123.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate116.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate116.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate116.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate102.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate102.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate102.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate109.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate109.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate109.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate138.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate138.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate138.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate131.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate131.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate131.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate124.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate124.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate124.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate117.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate117.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate117.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate103.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate103.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate103.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate110.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate110.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate110.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate139.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate139.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate139.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate132.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate132.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate132.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate125.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate125.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate125.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate118.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate118.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate118.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate104.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate104.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate104.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate111.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate111.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate111.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate140.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate140.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate140.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate133.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate133.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate133.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate126.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate126.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate126.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate119.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate119.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate119.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate105.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate105.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate105.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate112.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate112.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate112.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate141.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate141.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate141.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate134.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate134.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate134.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate127.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate127.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate127.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate120.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate120.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate120.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate106.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate106.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate106.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate113.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate113.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate113.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate142.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate142.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate142.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate135.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate135.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate135.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate128.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate128.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate128.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate121.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate121.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate121.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate107.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate107.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate107.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate114.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate114.form.stcCnt.addEventHandler("onclick",this.fnDateClick,this);
            this.divDate114.form.stcDate.addEventHandler("onclick",this.fnDateClick,this);
            this.stcAftMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("onrowsetchanged",this.dsData_onrowsetchanged,this);
        };
        this.loadIncludeScript("nhsb_D23_cal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
