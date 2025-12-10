(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0300_D01");
            this.set_titletext("캘린더(날짜영역-Display)");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,84);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divBox","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_calDayBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcDt","5","5","25","33",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("0");
            obj.set_text("날짜");
            obj.set_font("bold 11px \'KoPubL\'");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcAll","20%","5","65","24",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("1");
            obj.set_text("전체");
            obj.set_visible("false");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcAllCnt","114","5",null,"24","25",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("2");
            obj.set_text("건수");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcComp","19.76%","29","16","24",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("3");
            obj.set_cssclass("stc_WF_legend11");
            obj.set_visible("false");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcCompCnt","114","29",null,"24","25",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("4");
            obj.set_text("건수");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcNoComp","20%","53","16","24",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("5");
            obj.set_cssclass("stc_WF_legend13");
            obj.set_visible("false");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcNoCompCnt","114","53",null,"24","25",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("6");
            obj.set_text("건수");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcAllInfo01_01",null,"-5","65","5","126",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("stcAllInfo00_00_01",null,"-5","100","5","26",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.divBox.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBox.form
            obj = new Layout("default","",0,0,this.divBox.form,function(p){});
            this.divBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",250,84,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0300_D01.xfdl", function() {
        /*****************************************************************
         * 프로그램 ID		: FOMM0300_D01.xfdl
         * 작성자			: 정보윤
         * 작성일자		: 2022.12.12
         * 설명				: 캘린더 Day 항목 양식
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

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.divBox.form.stcDt.set_text("");
        	this.divBox.form.stcAllCnt.set_text("");
        	this.divBox.form.stcCompCnt.set_text("");
        	this.divBox.form.stcNoCompCnt.set_text("");
        };

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        		case "PJ1910_P01" :
        			trace("D02 this.parent.id : " + this.parent.id);
        			trace("D02 this.parent.parent.id : " + this.parent.parent.id);
        			trace("D02 this.parent.parent.parent.id : " + this.parent.parent.parent.id);
        			trace("D02 this.parent.parent.parent.parent.id : " + this.parent.parent.parent.parent.id);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.doSize,this);
            this.addEventHandler("ontimer",this.doTimer,this);
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("FOMM0300_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
