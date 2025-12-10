(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template");
            this.set_titletext("입력폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcBg01","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId","0","34","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청ID");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqstr","25%","34","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5","39",null,"24","stcReqstr:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDate","50%","34","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqstr","stcReqstr:5","39",null,"24","stcReqDate:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcRecptNm","75%","34","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("접수자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqDate","stcReqDate:5","39",null,"24","stcRecptNm:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRecptNm","stcRecptNm:5","39",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","0","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqType","0","67","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청구분");
            this.addChild(obj.name, obj);

            obj = new Static("stcRecptDate","75%","67","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("접수일");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeL","50%","72",null,"24","stcRecptDate:5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeM","25%","72",null,"24","cboReqTypeL:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeH","stcReqType:5","72",null,"24","cboReqTypeM:5",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","0","100",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcHopeDt","0","100","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("완료희망일시");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt","25%","100","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청작업일시");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHopeDate","stcHopeDt:5","105","10.87%","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskHopeTime","calHopeDate:5","105",null,"24","stcReqDt:5",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("@@:@@");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRecptDate","stcRecptDate:5","72",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcPreRvwer","50%","100","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("사전검토자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqDate","stcReqDt:5","105","10.87%","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskReqTime","calReqDate:5","105",null,"24","stcPreRvwer:5",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("@@:@@");
            this.addChild(obj.name, obj);

            obj = new Static("stcPostRvwr","75%","100","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("사후검토자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPreRvwer","stcPreRvwer:5","105",null,"24","stcPostRvwr:5",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostRvwer","stcPostRvwr:5","105",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle00","0","154","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("요청정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","134",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","178",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","408","41.85%",null,null,"40",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"400\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_01","0","188",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId00","0","188","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청ID");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqstr00","25%","188","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqId00","stcReqId00:5","193",null,"24","stcReqstr00:5",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDate00","50%","188","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqstr00","stcReqstr00:5","193",null,"24","stcReqDate00:5",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcRecptNm00","75%","188","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("접수자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqDate00","stcReqDate00:5","193",null,"24","stcRecptNm00:5",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRecptNm00","stcRecptNm00:5","193",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_01","0","221",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqType00","0","221","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청구분");
            this.addChild(obj.name, obj);

            obj = new Static("stcRecptDate00","75%","221","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("접수일");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeL00","49.95%","226",null,"24","stcRecptDate00:5",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeM00","25%","226",null,"24","cboReqTypeL00:5",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeH00","stcReqType00:5","226",null,"24","cboReqTypeM00:5",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00","0","254",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcHopeDt00","0","254","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("완료희망일시");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt00","25%","254","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청작업일시");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHopeDate00","stcHopeDt00:5","259","10.87%","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskHopeTime00","calHopeDate00:5","259",null,"24","stcReqDt00:5",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("@@:@@");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRecptDate00","stcRecptDate00:5","226",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcPreRvwer00","50%","254","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("사전검토자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqDate00","stcReqDt00:5","259","10.87%","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskReqTime00","calReqDate00:5","259",null,"24","stcPreRvwer00:5",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("@@:@@");
            this.addChild(obj.name, obj);

            obj = new Static("stcPostRvwr00","75%","254","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("사후검토자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPreRvwer00","stcPreRvwer00:5","259",null,"24","stcPostRvwr00:5",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostRvwer00","stcPostRvwr00:5","259",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_01_00","0","287",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqType00_00","0","287","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청구분");
            this.addChild(obj.name, obj);

            obj = new Static("stcRecptDate00_00","75%","287","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("접수일");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeL00_00","49.95%","292",null,"24","stcRecptDate00_00:5",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeM00_00","25%","292",null,"24","cboReqTypeL00_00:5",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboReqTypeH00_00","stcReqType00_00:5","292",null,"24","cboReqTypeM00_00:5",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00_00_00","0","320",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcHopeDt00_00","0","320","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("완료희망일시");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt00_00","25%","320","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청작업일시");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHopeDate00_00","stcHopeDt00_00:5","325","10.87%","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskHopeTime00_00","calHopeDate00_00:5","325",null,"24","stcReqDt00_00:5",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("@@:@@");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRecptDate00_00","stcRecptDate00_00:5","292",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcPreRvwer00_00","50%","320","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("사전검토자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqDate00_00","stcReqDt00_00:5","325","10.87%","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("cal_WF_normal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskReqTime00_00","calReqDate00_00:5","325",null,"24","stcPreRvwer00_00:5",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("@@:@@");
            this.addChild(obj.name, obj);

            obj = new Static("stcPostRvwr00_00","75%","320","7.61%","34",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("사후검토자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPreRvwer00_00","stcPreRvwer00_00:5","325",null,"24","stcPostRvwr00_00:5",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostRvwer00_00","stcPostRvwr00_00:5","325",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","398",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle00_00","0","374","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","0","354",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","Grid00:0","374","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_background("rgba(72,156,255,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle00_00_00","Grid00:20","374","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("결재선");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","Grid00:20","408",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Button("btnSave00",null,null,"80","32","85","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("1");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00","0",null,null,"40","325","0",null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("40");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"374","425","24","stcInfoTitle00_00_00:20",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","40","454","454","102",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_background("rgba(166,166,166,0.4)");
            obj.set_cssclass("ta_WF_normal");
            obj.set_value("** 화면 design template **\n\n화면 가로/세로 리사이징 처리를 위한 각 컴포넌트의\nleft/top/width/height/right/bottom position 및 margin 참조할 것.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("template03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ 화면 디자인 Template
        * 화면(명)		︰ 화면 디자인 Template
        * 메뉴(경로)	︰ 화면 디자인 Template
        * 화면 설명	︰ 화면 디자인 Template
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

        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {

        }


        this.fnSearch = function()
        {

        }



        // 저장
        this.fnSave = function()
        {


        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = 0; i < objDs.rowcount; i++)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{

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

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{

        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave00.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("template03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
