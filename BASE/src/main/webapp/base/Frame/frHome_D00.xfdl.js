(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frHome_D00");
            this.set_titletext("대시보드 내정보");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(445,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMyTask", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyShortcut", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondShortcut", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BOARD_TYPE_CD\">NTC</Col><Col id=\"DEL_YN\">N</Col><Col id=\"POST_YN\">Y</Col><Col id=\"RNUM\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoard", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDatTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMyTask","0","10",null,"250","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_HOME_border");
            this.addChild(obj.name, obj);

            obj = new Div("divMyAppv","15.00","15","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_HOME_myAppv");
            obj.set_background("");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Static("stcTitle","15","10","97","28",null,null,null,null,null,null,this.divMyTask.form.divMyAppv.form);
            obj.set_taborder("0");
            obj.set_text("나의 결재");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyAppv.addChild(obj.name, obj);

            obj = new Static("stcCnt","15","40","97","40",null,null,null,null,null,null,this.divMyTask.form.divMyAppv.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_font("32px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.divMyTask.form.divMyAppv.addChild(obj.name, obj);

            obj = new Button("btnArrowRight","85.00","12","24","24",null,null,null,null,null,null,this.divMyTask.form.divMyAppv.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_arrowRight");
            this.divMyTask.form.divMyAppv.addChild(obj.name, obj);

            obj = new Static("stcIcon","132","24","63","76",null,null,null,null,null,null,this.divMyTask.form.divMyAppv.form);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/box-3d-icon01.png\') no-repeat center center");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyAppv.addChild(obj.name, obj);

            obj = new Div("divMyReview","227.00","15","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_HOME_myReview");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Static("stcTitle","15","10","97","28",null,null,null,null,null,null,this.divMyTask.form.divMyReview.form);
            obj.set_taborder("0");
            obj.set_text("-");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyReview.addChild(obj.name, obj);

            obj = new Static("stcCnt","15","40","97","40",null,null,null,null,null,null,this.divMyTask.form.divMyReview.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_font("32px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.divMyTask.form.divMyReview.addChild(obj.name, obj);

            obj = new Button("btnArrowRight00","85.00","12","24","24",null,null,null,null,null,null,this.divMyTask.form.divMyReview.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_arrowRight");
            this.divMyTask.form.divMyReview.addChild(obj.name, obj);

            obj = new Static("stcIcon","116.00","21","59","79",null,null,null,null,null,null,this.divMyTask.form.divMyReview.form);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/box-3d-icon02.png\') no-repeat center center");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyReview.addChild(obj.name, obj);

            obj = new Div("divMyTask","15.00","130","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_HOME_myTask");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Static("stcTitle","15","10","97","28",null,null,null,null,null,null,this.divMyTask.form.divMyTask.form);
            obj.set_taborder("0");
            obj.set_text("접수/처리");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyTask.addChild(obj.name, obj);

            obj = new Static("stcCnt","15","40","97","40",null,null,null,null,null,null,this.divMyTask.form.divMyTask.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_font("32px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.divMyTask.form.divMyTask.addChild(obj.name, obj);

            obj = new Button("btnArrowRight00","85.00","12","24","24",null,null,null,null,null,null,this.divMyTask.form.divMyTask.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_arrowRight");
            this.divMyTask.form.divMyTask.addChild(obj.name, obj);

            obj = new Static("stcIcon","123.00","40","60","60",null,null,null,null,null,null,this.divMyTask.form.divMyTask.form);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/box-3d-icon03.png\') no-repeat center center");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyTask.addChild(obj.name, obj);

            obj = new Div("divMyRequest","227.00","130","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_HOME_myRequest");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Static("stcTitle","15","10","97","28",null,null,null,null,null,null,this.divMyTask.form.divMyRequest.form);
            obj.set_taborder("0");
            obj.set_text("나의 요청");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyRequest.addChild(obj.name, obj);

            obj = new Static("stcCnt","15","40","97","40",null,null,null,null,null,null,this.divMyTask.form.divMyRequest.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_font("32px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.divMyTask.form.divMyRequest.addChild(obj.name, obj);

            obj = new Button("btnArrowRight00","85.00","12","24","24",null,null,null,null,null,null,this.divMyTask.form.divMyRequest.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_arrowRight");
            this.divMyTask.form.divMyRequest.addChild(obj.name, obj);

            obj = new Static("stcIcon","123.00","40","56","58",null,null,null,null,null,null,this.divMyTask.form.divMyRequest.form);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/box-3d-icon04.png\') no-repeat center center");
            obj.set_cursor("pointer");
            this.divMyTask.form.divMyRequest.addChild(obj.name, obj);

            obj = new Div("divBlockAPPR","15.00","15","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("4");
            obj.set_background("rgba(200,200,200,0.8)");
            obj.set_borderRadius("0px 0px 25px 0px");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Div("divBlockREVR","227.00","15","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("5");
            obj.set_background("rgba(200,200,200,0.8)");
            obj.set_borderRadius("0px 0px 25px 0px");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Div("divBlockTSK","15.00","130","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("6");
            obj.set_background("rgba(200,200,200,0.8)");
            obj.set_borderRadius("0px 0px 25px 0px");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Div("divBlockREQ","227.00","130","195","100",null,null,null,null,null,null,this.divMyTask.form);
            obj.set_taborder("7");
            obj.set_background("rgba(200,200,200,0.8)");
            obj.set_borderRadius("0px 0px 25px 0px");
            this.divMyTask.addChild(obj.name, obj);

            obj = new Div("divBoard","0","530",null,"250","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_HOME_border");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBoard","15.00","76",null,"163","15",null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBoard");
            obj.set_cssclass("grd_HOME_board");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:DAT_TYPE_NM\" displaytype=\"editcontrol\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsDatTypeCd\" textAlign=\"center\" cssclass=\"grdBCelledit_HOME_readonly\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.divBoard.addChild(obj.name, obj);

            obj = new Button("btnNtc","15.00","11","130","46",null,null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_HOME_boardOff2");
            obj.getSetter("BOARD_TYPE_CD").set("NTC");
            obj.set_padding("0px 20px 0px 0px");
            this.divBoard.addChild(obj.name, obj);

            obj = new Button("btnRef","152.00","11","135","46",null,null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("1");
            obj.set_text("자료실");
            obj.set_cssclass("btn_HOME_boardOff2");
            obj.getSetter("BOARD_TYPE_CD").set("REF");
            obj.set_padding("0px 20px 0px 0px");
            this.divBoard.addChild(obj.name, obj);

            obj = new Button("btnFaq","293.00","11","135","46",null,null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("2");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_HOME_boardOn2");
            obj.getSetter("BOARD_TYPE_CD").set("FAQ");
            obj.set_padding("0px 20px 0px 0px");
            this.divBoard.addChild(obj.name, obj);

            obj = new Static("stc00","15","58",null,"2","15",null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("4");
            obj.set_background("#010103");
            this.divBoard.addChild(obj.name, obj);

            obj = new Button("btnLinkNoti",null,"22","25","24","304",null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_HOME_link");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divBoard.addChild(obj.name, obj);

            obj = new Button("btnLinkRef",null,"22","25","24","163",null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_HOME_link");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divBoard.addChild(obj.name, obj);

            obj = new Button("btnLinkFaq",null,"22","25","24","22",null,null,null,null,null,this.divBoard.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_HOME_link");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divBoard.addChild(obj.name, obj);

            obj = new Div("divQuick1","0","270","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("normal 700 24pt/normal \"PretendardR\"");
            obj.set_text("");
            obj.set_cursor("pointer");
            obj.set_cssclass("div_HOME_myWidgetBg");
            this.addChild(obj.name, obj);

            obj = new Div("divIco","15.00","13","54","54",null,null,null,null,null,null,this.divQuick1.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-ico01.png\') no-repeat center center");
            this.divQuick1.addChild(obj.name, obj);

            obj = new Static("stcTitle","75.00","26","106","28",null,null,null,null,null,null,this.divQuick1.form);
            obj.set_taborder("0");
            obj.set_text("대시보드");
            obj.set_font("bold 17px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_color("#005bc3");
            this.divQuick1.addChild(obj.name, obj);

            obj = new Button("btnSetting",null,"49","25","24","8",null,null,null,null,null,this.divQuick1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_setting");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divQuick1.addChild(obj.name, obj);

            obj = new Div("divQuick2","228.00","270","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("normal 700 24pt/normal \"PretendardR\"");
            obj.set_cursor("pointer");
            obj.set_color("black");
            obj.set_text("");
            obj.set_cssclass("div_HOME_myWidgetBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","75.00","26","106","28",null,null,null,null,null,null,this.divQuick2.form);
            obj.set_taborder("0");
            obj.set_text("To-Do");
            obj.set_font("bold 17px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_color("#005bc3");
            this.divQuick2.addChild(obj.name, obj);

            obj = new Div("divIco","15","15","48","49",null,null,null,null,null,null,this.divQuick2.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-ico02.png\') no-repeat center center");
            this.divQuick2.addChild(obj.name, obj);

            obj = new Button("btnSetting",null,"49","25","24","8",null,null,null,null,null,this.divQuick2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_setting");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divQuick2.addChild(obj.name, obj);

            obj = new Div("divQuick3","0","354","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("normal 700 24pt/normal \"PretendardR\"");
            obj.set_color("black");
            obj.set_cursor("pointer");
            obj.set_cssclass("div_HOME_myWidgetBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","75.00","26","106","28",null,null,null,null,null,null,this.divQuick3.form);
            obj.set_taborder("0");
            obj.set_text("요청관리");
            obj.set_font("bold 17px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_color("#005bc3");
            this.divQuick3.addChild(obj.name, obj);

            obj = new Div("divIco","15.00","13","45","55",null,null,null,null,null,null,this.divQuick3.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-ico03.png\') no-repeat center center");
            this.divQuick3.addChild(obj.name, obj);

            obj = new Button("btnSetting",null,"49","25","24","8",null,null,null,null,null,this.divQuick3.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_setting");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divQuick3.addChild(obj.name, obj);

            obj = new Div("divQuick4","228.00","354","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("normal 700 24pt/normal \"PretendardR\"");
            obj.set_color("black");
            obj.set_cursor("pointer");
            obj.set_cssclass("div_HOME_myWidgetBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","75.00","26","106","28",null,null,null,null,null,null,this.divQuick4.form);
            obj.set_taborder("0");
            obj.set_text("계약등록검토");
            obj.set_font("bold 17px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_color("#005bc3");
            this.divQuick4.addChild(obj.name, obj);

            obj = new Div("divIco","15","15","47","50",null,null,null,null,null,null,this.divQuick4.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-ico04.png\') no-repeat center center");
            this.divQuick4.addChild(obj.name, obj);

            obj = new Button("btnSetting",null,"49","25","24","8",null,null,null,null,null,this.divQuick4.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_setting");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divQuick4.addChild(obj.name, obj);

            obj = new Div("divQuick5","0","438","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("normal 700 24pt/normal \"PretendardR\"");
            obj.set_color("black");
            obj.set_cursor("pointer");
            obj.set_cssclass("div_HOME_myWidgetBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","75.00","26","106","28",null,null,null,null,null,null,this.divQuick5.form);
            obj.set_taborder("0");
            obj.set_text("계약관리");
            obj.set_font("bold 17px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_color("#005bc3");
            this.divQuick5.addChild(obj.name, obj);

            obj = new Div("divIco","15.00","13","47","55",null,null,null,null,null,null,this.divQuick5.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-ico05.png\') no-repeat center center");
            this.divQuick5.addChild(obj.name, obj);

            obj = new Button("btnSetting",null,"49","25","24","8",null,null,null,null,null,this.divQuick5.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_setting");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divQuick5.addChild(obj.name, obj);

            obj = new Div("divQuick6","228.00","438","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("normal 700 24pt/normal \"PretendardR\"");
            obj.set_color("black");
            obj.set_cursor("pointer");
            obj.set_cssclass("div_HOME_myWidgetBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","75.00","26","106","28",null,null,null,null,null,null,this.divQuick6.form);
            obj.set_taborder("0");
            obj.set_text("자산정보조회");
            obj.set_font("bold 17px \'KoPubL\'");
            obj.set_cursor("pointer");
            obj.set_color("#005bc3");
            this.divQuick6.addChild(obj.name, obj);

            obj = new Div("divIco","15.00","14","53","53",null,null,null,null,null,null,this.divQuick6.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/HOME/main-ico06.png\') no-repeat center center");
            this.divQuick6.addChild(obj.name, obj);

            obj = new Button("btnSetting",null,"49","25","24","8",null,null,null,null,null,this.divQuick6.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_HOME_setting");
            obj.set_tooltiptext("설정");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divQuick6.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMyTask.form.divMyAppv.form
            obj = new Layout("default","",0,0,this.divMyTask.form.divMyAppv.form,function(p){});
            this.divMyTask.form.divMyAppv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form.divMyReview.form
            obj = new Layout("default","",0,0,this.divMyTask.form.divMyReview.form,function(p){});
            this.divMyTask.form.divMyReview.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form.divMyTask.form
            obj = new Layout("default","",0,0,this.divMyTask.form.divMyTask.form,function(p){});
            this.divMyTask.form.divMyTask.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form.divMyRequest.form
            obj = new Layout("default","",0,0,this.divMyTask.form.divMyRequest.form,function(p){});
            this.divMyTask.form.divMyRequest.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form.divBlockAPPR.form
            obj = new Layout("default","",0,0,this.divMyTask.form.divBlockAPPR.form,function(p){});
            this.divMyTask.form.divBlockAPPR.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form.divBlockREVR
            obj = new Layout("default","",0,0,this.divMyTask.form.divBlockREVR.form,function(p){});
            this.divMyTask.form.divBlockREVR.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form.divBlockTSK
            obj = new Layout("default","",0,0,this.divMyTask.form.divBlockTSK.form,function(p){});
            this.divMyTask.form.divBlockTSK.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form.divBlockREQ
            obj = new Layout("default","",0,0,this.divMyTask.form.divBlockREQ.form,function(p){});
            this.divMyTask.form.divBlockREQ.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMyTask.form
            obj = new Layout("default","",0,0,this.divMyTask.form,function(p){});
            this.divMyTask.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBoard.form
            obj = new Layout("default","",0,0,this.divBoard.form,function(p){});
            this.divBoard.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick1.form.divIco
            obj = new Layout("default","",0,0,this.divQuick1.form.divIco.form,function(p){});
            this.divQuick1.form.divIco.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick1.form
            obj = new Layout("default","",0,0,this.divQuick1.form,function(p){});
            this.divQuick1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick2.form.divIco
            obj = new Layout("default","",0,0,this.divQuick2.form.divIco.form,function(p){});
            this.divQuick2.form.divIco.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick2.form
            obj = new Layout("default","",0,0,this.divQuick2.form,function(p){});
            this.divQuick2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick3.form.divIco
            obj = new Layout("default","",0,0,this.divQuick3.form.divIco.form,function(p){});
            this.divQuick3.form.divIco.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick3.form
            obj = new Layout("default","",0,0,this.divQuick3.form,function(p){});
            this.divQuick3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick4.form.divIco
            obj = new Layout("default","",0,0,this.divQuick4.form.divIco.form,function(p){});
            this.divQuick4.form.divIco.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick4.form
            obj = new Layout("default","",0,0,this.divQuick4.form,function(p){});
            this.divQuick4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick5.form.divIco
            obj = new Layout("default","",0,0,this.divQuick5.form.divIco.form,function(p){});
            this.divQuick5.form.divIco.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick5.form
            obj = new Layout("default","",0,0,this.divQuick5.form,function(p){});
            this.divQuick5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick6.form.divIco
            obj = new Layout("default","",0,0,this.divQuick6.form.divIco.form,function(p){});
            this.divQuick6.form.divIco.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick6.form
            obj = new Layout("default","",0,0,this.divQuick6.form,function(p){});
            this.divQuick6.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",445,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frHome_D00.xfdl", function() {
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
        	// 나의검토 > 메인화면 나의 검토를 버튼 수정, 팀장이면 결재이력, 그외는 처리이력으로 표시, ROLE_CD = 800 이 팀장임
        	this.divMyTask.form.divBlockREVR.set_visible(false);
        	this.divMyTask.form.divMyReview.form.stcCnt.set_visible(false);	// 건수
        	var roleCd = Ex.util.getSession('gvRoleCd');
        	if( roleCd == '800' ) {	// 팀장
        		this.divMyTask.form.divMyReview.form.stcTitle.set_text('결재이력');	// title
        	}
        	else {
        		this.divMyTask.form.divMyReview.form.stcTitle.set_text('처리이력');	// title
        	}


        	this.fnCompInit();
        	this.fnGetCmmCd();
        	this.fnSearch();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 최초 전체 조회
        this.fnSearch = function()
        {
        	this.fnSearchMyTask();		// 나의 업무 조회
        	this.fnSearchBoard();		// 게시판 조회
        	this.fnSearchMyShortcut();	// 빠른이동 조회
        }

        // 나의 업무 조회
        this.fnSearchMyTask = function()
        {
        	var sTranId = "selectMyTask";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetFOMM/selectMyTask";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMyTask=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 게시판 조회
        this.fnSearchBoard = function()
        {
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0210W/select01";            // 서비스명
            var sInDs = "dsCond=dsCondBoard";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsBoard=dsBoardMt";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 빠른이동 조회
        this.fnSearchMyShortcut = function()
        {
        	var sTranId = "selectMyShortcut";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "widgetFOMM/selectMyShortcut";            // 서비스명
            var sInDs = "dsCond=dsCondShortcut";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMyShortcut=dsMyShortcut";       	// 서버에서 수신할 데이타셋
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
        		case "selectMyTask" :
        			this.fnSetMyTask();
        			break;

        		case "selectMyShortcut" :
        			this.fnSetMyShortcut();
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
        		case "quickMenuPop" :
        			if( varValue == 'save' )
        				this.fnSearchMyShortcut();
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

        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	// 게시판 검색조건 초기화
        	//this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'BOARD_TYPE_CD', 'NTC'); 20250707 이상국차장님 요청으로 초기값 FAQ로 변경
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'BOARD_TYPE_CD', 'FAQ');
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'DEL_YN', 'N');
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'POST_YN', 'Y');
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'RNUM', '5');	// 최근 5개 조회
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


        // 결재/검토/처리/요청 div 처리
        this.fnSetMyTask = function()
        {
        	for(var i = 0; i < this.dsMyTask.rowcount; i++)
        	{
        		var GBN = this.dsMyTask.getColumn(i, 'GBN');
        		var CNT = this.dsMyTask.getColumn(i, 'CNT')||0;
        		var visible = (CNT==0? true : false);
        		switch(GBN)
        		{
        			case "REQ" :	this.divMyTask.form.divBlockREQ.set_visible(visible);	break;
        			case "APPR" :	this.divMyTask.form.divBlockAPPR.set_visible(visible);	break;
        			//case "REVR" :	this.divMyTask.form.divBlockREVR.set_visible(visible);	break;
        			case "TSK" :	this.divMyTask.form.divBlockTSK.set_visible(visible);	break;
        		}
        	}
        }


        // 빠른이동 mapping
        this.fnSetMyShortcut = function()
        {
        	var arrTitle = [  this.divQuick1.form.stcTitle
        					, this.divQuick2.form.stcTitle
        					, this.divQuick3.form.stcTitle
        					, this.divQuick4.form.stcTitle
        					, this.divQuick5.form.stcTitle
        					, this.divQuick6.form.stcTitle	];

        	// 초기화
        	for(var i = 0; i < arrTitle.length; i++)
        		arrTitle[i].set_text('');

        	// 빠른이동명 or 메뉴명 setting
        	for(var i = 0; i < this.dsMyShortcut.rowcount; i++)
        	{
        		var SHORTCUT_NM	= this.dsMyShortcut.getColumn(i, 'SHORTCUT_NM');
        		var MENU_NM		= this.dsMyShortcut.getColumn(i, 'MENU_NM');

        		var sTitle = SHORTCUT_NM||MENU_NM;
        		arrTitle[i].set_text(sTitle);
        	}
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;
        	var boardType = this.dsCondBoard.getColumn(0,"BOARD_TYPE_CD")
        	switch(obj)
        	{
        		case this.divBoard.form.btnLinkNoti :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'FOMM0211_W');		break;
        		case this.divBoard.form.btnLinkRef :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'FOMM0221_W');		break;
        		case this.divBoard.form.btnLinkFaq :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'FOMM0231_W');		break;
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        }

        // 나의업무(처리) onclick
        this.fnMyTaskOnclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;
        	switch(obj)
        	{
        		// 나의 결재
        		case	this.divMyTask.form.divMyAppv :
        		case 	this.divMyTask.form.divMyAppv.form.stcTitle :
        		case	this.divMyTask.form.divMyAppv.form.btnArrowRight :
        		case 	this.divMyTask.form.divMyAppv.form.stcCnt :
        		case 	this.divMyTask.form.divMyAppv.form.stcIcon :
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0140_W');
        			break;

        		// 나의 검토
        		case	this.divMyTask.form.divMyReview :
        		case	this.divMyTask.form.divMyReview.form.stcTitle :
        		case	this.divMyTask.form.divMyReview.form.btnArrowRight :
        		case	this.divMyTask.form.divMyReview.form.stcCnt :
        		case	this.divMyTask.form.divMyReview.form.stcIcon :
        			if( Ex.util.getSession('gvRoleCd') == '800' )	// 팀장 > 결재이력
        				rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0142_W');
        			else	// 나머지 > 처리이력
        				rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0128_W');
        			break;

        		// 접수/처리
        		case	this.divMyTask.form.divMyTask :
        		case	this.divMyTask.form.divMyTask.form.stcTitle	:
        		case	this.divMyTask.form.divMyTask.form.btnArrowRight :
        		case	this.divMyTask.form.divMyTask.form.stcCnt :
        		case	this.divMyTask.form.divMyTask.form.stcIcon :
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0130_W');
        			break;

        		// 나의 요청
        		case	this.divMyTask.form.divMyRequest :
        		case	this.divMyTask.form.divMyRequest.form.stcTitle :
        		case	this.divMyTask.form.divMyRequest.form.btnArrowRight :
        		case	this.divMyTask.form.divMyRequest.form.stcCnt :
        		case	this.divMyTask.form.divMyRequest.form.stcIcon :
        			rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0120_W');
        			break;
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        	else
        		trace('해당 메뉴ID가 없어 이동할 수 없습니다');
        };

        // 게시판 버튼 onclick
        this.fnBoardBtnOnclick = function(obj,e)
        {
        	var arrBtn = [this.divBoard.form.btnNtc, this.divBoard.form.btnRef, this.divBoard.form.btnFaq];

        	for(var i = 0; i < arrBtn.length; i++)
        		arrBtn[i].set_cssclass('btn_HOME_boardOff2');

        	obj.set_cssclass('btn_HOME_boardOn2');

        	var BOARD_TYPE_CD = obj.BOARD_TYPE_CD;	// user property
        	this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'BOARD_TYPE_CD', BOARD_TYPE_CD);
        	if( BOARD_TYPE_CD == 'REF' ) {		// 자료실이면 메뉴분기 기분 '자료실'만
        		this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'MENU_PARAM_CD', '00');
        	}
        	else {
        		this.dsCondBoard.setColumn(this.dsCondBoard.rowposition, 'MENU_PARAM_CD', '');
        	}
        	this.fnSearchBoard();
        };

        this.divBoard_grdBoard_oncellclick = function(obj,e)
        {
        	var BOARD_TYPE_CD 	= this.dsBoard.getColumn(this.dsBoard.rowposition, 'BOARD_TYPE_CD');
        	var BOARD_NO		= this.dsBoard.getColumn(this.dsBoard.rowposition, 'BOARD_NO');
        	var popUrl = '';
        	var oParam = {
        		title		: '',
        		pPopType	: 'R',
        		pBoardNo	: BOARD_NO
        	};

        	switch(BOARD_TYPE_CD)
        	{
        		case "NTC" :
        			oParam.title = Ex.core.word('공지사항') + ' ' + Ex.core.word('상세');
        			popUrl = 'fomm::FOMM0210_P01.xfdl';
        			break;

        		case "REF" :
        			oParam.title = Ex.core.word('자료실') + ' ' + Ex.core.word('상세');
        			popUrl = 'fomm::FOMM0220_P01.xfdl';
        			break;

        		case "FAQ" :
        			oParam.title = Ex.core.word('FAQ') + ' ' + Ex.core.word('상세');
        			popUrl = 'fomm::FOMM0230_P01.xfdl';
        			break;
        	}

        	Ex.core.popup(this, 'boardPop', popUrl, oParam, 'width=1400,height=750');
        };

        this.fnQuickmenuOnclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;
        	var SHORTCUT_NO = -1;
        	switch(obj)
        	{
        		case this.divQuick1 :	// to-do
        		case this.divQuick1.form.stcTitle :
        		case this.divQuick1.form.divIco :
        			SHORTCUT_NO = 1;
        			break;

        		case this.divQuick2 :	// 회의관리
        		case this.divQuick2.form.stcTitle :
        		case this.divQuick2.form.divIco :
        			SHORTCUT_NO = 2;
        			break;

        		case this.divQuick3 :	// 요청관리
        		case this.divQuick3.form.stcTitle :
        		case this.divQuick3.form.divIco :
        			SHORTCUT_NO = 3;
        			break;

        		case this.divQuick4 :	// SLA 종합현황
        		case this.divQuick4.form.stcTitle :
        		case this.divQuick4.form.divIco :
        			SHORTCUT_NO = 4;
        			break;

        		case this.divQuick5 :	// 계약관리
        		case this.divQuick5.form.stcTitle :
        		case this.divQuick5.form.divIco :
        			SHORTCUT_NO = 5;
        			break;

        		case this.divQuick6 :	// 자산정보조회
        		case this.divQuick6.form.stcTitle :
        		case this.divQuick6.form.divIco :
        			SHORTCUT_NO = 6;
        			break;
        	}

        	var shortcutRow = this.dsMyShortcut.findRow('SHORTCUT_NO', SHORTCUT_NO);
        	if( shortcutRow < 0 ) {
        		trace('빠른이동이 지정되지 않았습니다.');
        		return;
        	}

        	var menuId = this.dsMyShortcut.getColumn(shortcutRow, 'MENU_ID');
        	var rowpos = objApp.gdsMenu.findRow('MENU_ID', menuId);
        	if( rowpos >= 0 )
        		Ex.core.openLink(this, menuId, '');
        	else
        		trace('해당 메뉴ID가 없어 이동할 수 없습니다');

        // 	rowpos = this.dsMyShortcut.findRow('SHORTCUT_NO', SHORTCUT_NO);
        // 	if( rowpos >= 0 ) {
        // 		var menuId = this.dsMyShortcut.getColumn(rowpos, 'MENU_ID');
        // 		if( objApp.gdsMenu.findRow('MENU_ID', menuId) >= 0 ) {
        // 			Ex.core.openLink(this, menuId, '');
        // 		}
        // 		else {
        // 			trace('빠른이동 오류 >> frHome_D00(left widget)\n메뉴 권한이 없거나 잘못된 메뉴번호입니다. menuId : ' + menuId);
        // 			return;
        // 		}
        // 	}
        };

        this.divMyTask_Button00_onclick = function(obj,e)
        {
        	this.fnSearchMyTask();
        };

        this.fnQuickSettingOnclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;
        	var SHORTCUT_NO = -1;
        	switch(obj)
        	{
        		case this.divQuick1.form.btnSetting :	SHORTCUT_NO = 1;		break;
        		case this.divQuick2.form.btnSetting :	SHORTCUT_NO = 2;		break;
        		case this.divQuick3.form.btnSetting :	SHORTCUT_NO = 3;		break;
        		case this.divQuick4.form.btnSetting :	SHORTCUT_NO = 4;		break;
        		case this.divQuick5.form.btnSetting :	SHORTCUT_NO = 5;		break;
        		case this.divQuick6.form.btnSetting :	SHORTCUT_NO = 6;		break;
        	}

        	rowpos = this.dsMyShortcut.findRow('SHORTCUT_NO', SHORTCUT_NO);


        	var menuId 		= this.dsMyShortcut.getColumn(rowpos, 'MENU_ID')||'';
        	var shortcutNm	= this.dsMyShortcut.getColumn(rowpos, 'SHORTCUT_NM')||'';

        	Ex.core.popup(
        			this,
        			'quickMenuPop',
        			"mainWidget::fomm_P01.xfdl",             		// <--- 팝업창 오픈 Url
        			{ title			: Ex.core.word('빠른이동') + ' ' + Ex.core.word('설정'),
        			  pMenuId		: menuId,
        			  pShortcutNo	: SHORTCUT_NO,
        			  pShortcutNm	: shortcutNm
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			'autosize'                  // <--- width/height/modeless(프레임 처리 옵션)
        		);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divMyTask.form.divMyAppv.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyAppv.form.stcTitle.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyAppv.form.stcCnt.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyAppv.form.btnArrowRight.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyAppv.form.stcIcon.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyReview.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyReview.form.stcTitle.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyReview.form.stcCnt.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyReview.form.btnArrowRight00.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyReview.form.stcIcon.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyTask.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyTask.form.stcTitle.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyTask.form.stcCnt.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyTask.form.btnArrowRight00.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyTask.form.stcIcon.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyRequest.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyRequest.form.stcTitle.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyRequest.form.stcCnt.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyRequest.form.btnArrowRight00.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divMyTask.form.divMyRequest.form.stcIcon.addEventHandler("onclick",this.fnMyTaskOnclick,this);
            this.divBoard.form.grdBoard.addEventHandler("oncellclick",this.divBoard_grdBoard_oncellclick,this);
            this.divBoard.form.btnNtc.addEventHandler("onclick",this.fnBoardBtnOnclick,this);
            this.divBoard.form.btnRef.addEventHandler("onclick",this.fnBoardBtnOnclick,this);
            this.divBoard.form.btnFaq.addEventHandler("onclick",this.fnBoardBtnOnclick,this);
            this.divBoard.form.btnLinkNoti.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBoard.form.btnLinkRef.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBoard.form.btnLinkFaq.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divQuick1.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick1.form.divIco.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick1.form.stcTitle.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick1.form.btnSetting.addEventHandler("onclick",this.fnQuickSettingOnclick,this);
            this.divQuick2.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick2.form.stcTitle.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick2.form.divIco.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick2.form.btnSetting.addEventHandler("onclick",this.fnQuickSettingOnclick,this);
            this.divQuick3.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick3.form.stcTitle.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick3.form.divIco.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick3.form.btnSetting.addEventHandler("onclick",this.fnQuickSettingOnclick,this);
            this.divQuick4.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick4.form.stcTitle.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick4.form.divIco.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick4.form.btnSetting.addEventHandler("onclick",this.fnQuickSettingOnclick,this);
            this.divQuick5.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick5.form.stcTitle.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick5.form.divIco.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick5.form.btnSetting.addEventHandler("onclick",this.fnQuickSettingOnclick,this);
            this.divQuick6.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick6.form.stcTitle.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick6.form.divIco.addEventHandler("onclick",this.fnQuickmenuOnclick,this);
            this.divQuick6.form.btnSetting.addEventHandler("onclick",this.fnQuickSettingOnclick,this);
        };
        this.loadIncludeScript("frHome_D00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
