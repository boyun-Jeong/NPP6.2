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
            this.set_titletext("서비스요청");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.set_scrollbartype("none");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(675,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PJT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PJT_ID\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">25일</Col><Col id=\"CNT\">31</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">26일</Col><Col id=\"CNT\">18</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">29일</Col><Col id=\"CNT\">23</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">30일</Col><Col id=\"CNT\">21</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">31일</Col><Col id=\"CNT\">25</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart1", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">25일</Col><Col id=\"CNT\">31</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">26일</Col><Col id=\"CNT\">18</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">29일</Col><Col id=\"CNT\">23</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">30일</Col><Col id=\"CNT\">21</Col></Row><Row><Col id=\"GBN\">요청</Col><Col id=\"DATE\">31일</Col><Col id=\"CNT\">25</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_00","107","202","140","2",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#8FB6E8");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","10","10","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("요청관리");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01","20","102","36","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-ico07.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_00","20","178","36","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-ico08.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","divIco01:0","36","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("요청");
            obj.set_color("#4077bc");
            obj.set_font("bold 15px \"KoPubL\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","divIco01_00:0","36","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("처리");
            obj.set_color("#4077bc");
            obj.set_font("bold 15px \"KoPubL\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","10","stcGrdTitle:5","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("월별 요청(건)");
            obj.set_color("#2a538a");
            obj.set_font("bold 15px \'KoPubL\'");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01","77","173","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox03-off.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_00","147","173","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox03-off.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01","217","173","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox03-on.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","107","127","140","2",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#9de0d9");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_02","77","97","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox02-on.png\')");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_00_00","147","97","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox02-off.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00","217","97","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox02-off.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","309","39","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일별 요청(건)");
            obj.set_color("#2a538a");
            obj.set_font("bold 15px \'KoPubL\'");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonthB2","77","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("5월");
            obj.set_color("#12407d");
            obj.set_font("bold 14px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonthB1","147","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("6월");
            obj.set_color("#12407d");
            obj.set_font("bold 14px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonth","217","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("7월");
            obj.set_color("#12407d");
            obj.set_font("bold 14px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqCntB2","77","115","60","24",null,null,null,null,null,null,this);
            obj.set_text("152");
            obj.set_color("white");
            obj.set_font("bold 18px \'PretendardR\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqCntB1","147","115","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("132");
            obj.set_color("white");
            obj.set_font("bold 18px \'PretendardR\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqCnt","217","115","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("146");
            obj.set_color("white");
            obj.set_font("bold 18px \'PretendardR\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcCntB2","77","191","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("139");
            obj.set_color("white");
            obj.set_font("bold 18px \'PretendardR\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcCntB1","147","191","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("132");
            obj.set_color("white");
            obj.set_font("bold 18px \'PretendardR\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcCnt","217","191","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("147");
            obj.set_color("white");
            obj.set_font("bold 18px \'PretendardR\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00","591.00","62","74","33",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numcircle-green.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00","591","97","74","33",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numcircle-green.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_01","591","132","74","33",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numcircle-green.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_03","591","202","74","33",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numcircle-red.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01",null,"62","31","33","9",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("22");
            obj.set_color("white");
            obj.set_font("15px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_padding("0px 7px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep02",null,"97","31","33","9",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("14");
            obj.set_color("white");
            obj.set_font("15px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_padding("0px 7px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep03",null,"132","31","33","9",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("8");
            obj.set_color("white");
            obj.set_font("15px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_padding("0px 7px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep00",null,"202","31","33","9",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("0");
            obj.set_color("white");
            obj.set_font("15px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_padding("0px 7px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonthB2_00_00_00_01_01",null,"62","30","33","50",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("요청");
            obj.set_font("12px \"KoPubL\"");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_color("#61636b");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonthB2_00_00_00_01_01_00",null,"97","30","33","50",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("결재");
            obj.set_font("12px \"KoPubL\"");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_color("#61636b");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonthB2_00_00_00_01_01_00_00",null,"131","35","33","47",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("접수중");
            obj.set_font("12px \"KoPubL\"");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_color("#61636b");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonthB2_00_00_00_01_01_00_00_00_00",null,"203","30","33","51",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("지연");
            obj.set_font("12px \"KoPubL\"");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_color("#61636b");
            this.addChild(obj.name, obj);

            obj = new Div("divChart","279.00","52","290",null,null,"-10",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_async("true");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","42.81%","10","1",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_TPF_line");
            obj.set_background("url(\'theme://MIRAE_IMAGE_SET/HOME/main-linedashed.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","574.00","40","1",null,null,"10",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Static00");
            obj.set_cssclass("sta_TPF_line");
            obj.set_background("url(\'theme://MIRAE_IMAGE_SET/HOME/main-linedashed.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_01","570.00","74","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox02-on.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_01_00","570.00","109","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox02-on.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_01_00_00","570.00","144","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-numbox02-on.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_01_00_01_00","567.00","213","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circle-red.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("stcMonth00","582","36","78","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Today");
            obj.set_color("#12407d");
            obj.set_font("bold 15px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"11","20","20","10",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divIco01.form
            obj = new Layout("default","",0,0,this.divIco01.form,function(p){});
            this.divIco01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_00
            obj = new Layout("default","",0,0,this.divIco01_00.form,function(p){});
            this.divIco01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01.form
            obj = new Layout("default","",0,0,this.divIco01_01.form,function(p){});
            this.divIco01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_00.form,function(p){});
            this.divIco01_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01.form
            obj = new Layout("default","",0,0,this.divIco01_01_01.form,function(p){});
            this.divIco01_01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_02.form
            obj = new Layout("default","",0,0,this.divIco01_01_02.form,function(p){});
            this.divIco01_01_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_00_00.form,function(p){});
            this.divIco01_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00.form,function(p){});
            this.divIco01_01_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00.form,function(p){});
            this.divIco01_01_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00.form,function(p){});
            this.divIco01_01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_01.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_01.form,function(p){});
            this.divIco01_01_01_00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_03.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_03.form,function(p){});
            this.divIco01_01_01_00_00_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_01.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_01.form,function(p){});
            this.divIco01_01_01_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_01_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_01_00.form,function(p){});
            this.divIco01_01_01_00_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_01_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_01_00_00.form,function(p){});
            this.divIco01_01_01_00_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_01_00_01_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_01_00_01_00.form,function(p){});
            this.divIco01_01_01_00_01_00_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",675,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","stcReqCntB2","text","dsReqData","LAST_MONTH_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","stcReqCntB1","text","dsReqData","BEFORE_MONTH_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","stcReqCnt","text","dsReqData","THIS_MONTH_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","stcProcCntB2","text","dsReqData","LAST_MONTH_COM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","stcProcCntB1","text","dsReqData","BEFORE_MONTH_COM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","stcProcCnt","text","dsReqData","THIS_MONTH_COM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","stcMonthB2","text","dsReqData","LAST_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","stcMonthB1","text","dsReqData","BEFORE_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","stcMonth","text","dsReqData","THIS_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stcCntStep01","text","dsReqData","DAY_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","stcCntStep00","text","dsReqData","CHK_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","stcCntStep03","text","dsReqData","DAY_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","stcCntStep02","text","dsReqData","APPC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comHighChartDiv.xfdl");
        };
        
        // User Script
        this.registerScript("sr_D00.xfdl", function() {
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
        	this.fnCompInit();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	var sTranId = "select12";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJHOME/select12";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqData=dsReqData dsChart=dsChart";       	// 서버에서 수신할 데이타셋
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
        		case "select12":
        			this.fnDrawChart();
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
        	this.fnSearch();
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



        this.fnDrawChart = function()
        {

        	var arrX = [];	// X축 표기명
        	for(i=0; i< 5;i++)
        		arrX[i] = this.dsChart.getColumn(0, "DAYM"+i);


        	//데이터 가공 시작
        	this.dsChart1.clearData();
        	for(var i=0; i<5; i++)
        	{
        		var aRow = this.dsChart1.addRow();
        		this.dsChart1.setColumn(aRow, "CNT", this.dsChart.getColumn(0, "DAYR"+aRow));
        	}
        	//데이터 가공 끝


        	var oParam = {
        		  fontFamily	: 'bold 12px PretendardR'
        		, title 		: ''
        		, align 		: ''
        		, subtitle 		: ''
        		, subalign		: ''
        		, xAxis			: arrX
        		, valuesuffix	: ''
        		, objDs			: this.dsChart1
        		, datalabel		: false
        		, yAxis			: {
        					  title		: ['']
        					, valueCol	: ['CNT']
        					, color		: ['#656FF2', '#38529B']
        					, colorCol  : ['#656FF2', '#38529B']
        		  }
        		, legend : false
        	};
        	var chartScript = this.divChart.form.hcfnGetBasicColumnChart(oParam);
        	this.divChart.form.drawChart(chartScript);
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;

        	switch(obj.name)
        	{
        		case "btnMore" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0122_W');	break;	// 요청관리
        		//case "btnMore2" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SV0110_W');	break;	// 구성현황(운영)
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frHome_D00_onclick,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_onclick,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("sr_D00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
