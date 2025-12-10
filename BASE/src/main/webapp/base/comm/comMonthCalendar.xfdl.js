(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMonthCalendar");
            this.set_titletext("월력");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(296,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divCalendar","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid #8a96a8");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("divMonth","0","60",null,null,"0","0",null,null,null,null,this.divCalendar.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Dboard_CalBg");
            obj.set_background("transparent");
            this.divCalendar.addChild(obj.name, obj);

            obj = new Button("btn01","11","9","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("1월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn02","102","9","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("2월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn03","193","9","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("3월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn04","11","70","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("4월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn05","102","70","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("4");
            obj.set_text("5월");
            obj.set_cssclass("btn_WF_calDayOff");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn06","193","70","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("6월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn07","11","131","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("7월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn08","102","131","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("8월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn09","193","131","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("9월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn10","11","192","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("10월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn11","102","192","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("11월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btn12","193","192","90","60",null,null,null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_calDayOff");
            obj.set_text("12월");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Button("btnCurMonth","11","253",null,null,"11","11",null,null,null,null,this.divCalendar.form.divMonth.form);
            obj.set_taborder("12");
            obj.set_text("현재 월");
            obj.set_cssclass("btn_WF_primary_save");
            this.divCalendar.form.divMonth.addChild(obj.name, obj);

            obj = new Div("divYear","0","0",null,"60","0",null,null,null,null,null,this.divCalendar.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_calTopBg");
            this.divCalendar.addChild(obj.name, obj);

            obj = new Spin("spYear","88","11","120","40",null,null,null,null,null,null,this.divCalendar.form.divYear.form);
            obj.set_taborder("0");
            obj.set_cssclass("spn_WF_normal");
            obj.set_min("0");
            obj.set_max("9999");
            obj.set_value("");
            this.divCalendar.form.divYear.addChild(obj.name, obj);

            obj = new Button("btnNextYear","214","11","70","40",null,null,null,null,null,null,this.divCalendar.form.divYear.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_btnNext2");
            this.divCalendar.form.divYear.addChild(obj.name, obj);

            obj = new Button("btnPreYear","12","11","70","40",null,null,null,null,null,null,this.divCalendar.form.divYear.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_btnPrev2");
            this.divCalendar.form.divYear.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalendar.form.divMonth.form
            obj = new Layout("default","",0,0,this.divCalendar.form.divMonth.form,function(p){});
            this.divCalendar.form.divMonth.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalendar.form.divYear.form
            obj = new Layout("default","",0,0,this.divCalendar.form.divYear.form,function(p){});
            this.divCalendar.form.divYear.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalendar.form
            obj = new Layout("default","",0,0,this.divCalendar.form,function(p){});
            this.divCalendar.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comMonthCalendar.xfdl", function() {
        /*****************************************************************
         * 프로그램 ID		: comMonthCalendar.xfdl
         * 작성자			: WEMB
         * 작성일자		: 2023.04.00
         * 설명				: 사용자 정의 캘린더(월력)
        					  캘린더 EDIT 영역 입력 불가 클릭시 캘린더 팝업이 호출되도록 수정
         * 서비스(JAVA)		:
         * 라이센스        : 본 프로그램 소스는 농협 서면에 의한 사전 승인 없이
         *                	  타 업체 및 타 회사원에게 누설 되어서는 안됨. 본 프로그램
         *                	  소스는 농협의 사전 승인 없이 임의로 복제, 복사, 배포할 수 없음
         * version			: 1.0
         * 변경이력		: {변경일자}, {변경자}: {변경내역} 형식으로 매 줄마다 기록.
         *****************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /*****************************************************************
         * 함수명 	: doLoad
         * 설명		: 화면 초기 이벤트
         *****************************************************************/
        this.doLoad = function(obj, e)
        {
        }

        this.doClick = function(obj,e)
        {
        	if(obj.id == "btnPreYear")
        	{
        		this.divCalendar.form.divYear.form.spYear.set_value(nexacro.toNumber(this.divCalendar.form.divYear.form.spYear.value) - 1);
        	}
        	else if(obj.id == "btnNextYear")
        	{
        		this.divCalendar.form.divYear.form.spYear.set_value(nexacro.toNumber(this.divCalendar.form.divYear.form.spYear.value) + 1);
        	}
        	else if(obj.id == "btnCurMonth") {
        		var sDate = "";
        		if(this.divCalendar.form.divYear.visible)
        			sDate = Ex.util.today().substring(0, 6);	// YYYYMM
        		else
        			sDate = Ex.util.today().substring(4, 6);	// MM

        		this.parent.parent.monthCalendarCallBack(this.parent, sDate);
        		this.parent.closePopup();
        	}
        	else
        	{
        		var year = "";

        		if(this.divCalendar.form.divYear.visible)
        		{
        			year = this.divCalendar.form.divYear.form.spYear.value;
        		}

        		var month = nexacro.replaceAll(obj.id, "btn", "");
        		this.parent.parent.monthCalendarCallBack(this.parent, year + "" + month);
        		this.parent.closePopup();
        	}
        };


        this.divCalendar_divYear_spYear_canchange = function(obj,e)
        {
        	if(e.postvalue > 9999) {
        		return false;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.doLoad,this);
            this.divCalendar.form.divMonth.form.btn01.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn02.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn03.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn04.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn05.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn06.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn07.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn08.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn09.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn10.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn11.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btn12.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divMonth.form.btnCurMonth.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divYear.form.spYear.addEventHandler("canchange",this.divCalendar_divYear_spYear_canchange,this);
            this.divCalendar.form.divYear.form.btnNextYear.addEventHandler("onclick",this.doClick,this);
            this.divCalendar.form.divYear.form.btnPreYear.addEventHandler("onclick",this.doClick,this);
        };
        this.loadIncludeScript("comMonthCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
