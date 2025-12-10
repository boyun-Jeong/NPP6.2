(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CustomCalendar");
            this.set_titletext("사용자 정의 캘린더");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(110,22);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("bnCd",null,"0","22","22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edCalendar","0","0",null,"22","bnCd:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",110,22,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CustomCalendar.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰사용자 정의 캘린더
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: 캘린더 EDIT 영역 입력 불가 클릭시 캘린더 팝업이 호출되도록 수정
        * 작성자		︰WEMB
        * 작성일		︰2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.binddatasetid = this.parent.binddatasetid;
        this.columnid = this.parent.columnid;

        this.ownerFrame = this.getOwnerFrame();
        /*****************************************************************
         * 함수명 	: doLoad
         * 설명		: 화면 초기 이벤트
         *****************************************************************/
        this.doLoad = function(obj, e)
        {	trace("CustomCalendar this.doLoad() this.parent.binddataset : " + this.parent.binddatasetid + ", this.parent.columnid : " + this.parent.columnid);
        	var bindObj = new BindItem();
        	bindObj.init("item0", "edCalendar", "value", this.parent.binddatasetid, this.parent.columnid);
        	this.addChild("item0", bindObj);
        	bindObj.bind();
        };

        /*****************************************************************
         * 함수명	: doChanged
         * 설명	: 캘린더 값 변경 이벤트
         *****************************************************************/
        this.doChanged = function(obj,e)
        {	trace("CustomCalendar this.doChanged()");
        	this.edCalendar.set_value(e.posttext);

        	if( !Ex.isEmpty(this.ownerFrame.form.callCalendarValChgEventFunc) )
        	{
        		Ex.isFunction(this.ownerFrame.form.callCalendarValChgEventFunc)
        		{
        			var item = new Object();
        			item.parentid = obj.parent.parent.id;
        			item.binddatasetid = this.parent.binddatasetid;
        			item.columnid = this.parent.columnid;
        			item.text = e.posttext;
        			item.value = e.postvalue;
        			this.ownerFrame.form.callCalendarValChgEventFunc.call(this.ownerFrame.form, item);
        		}
        	}
        };

        /*****************************************************************
         * 함수명	: doEditclick
         * 설명	: 캘린더 edit click 이벤트
         *****************************************************************/
        this.doEditclick = function(obj,e)
        {
        	this.bnCd.dropdown();
        };

        this.bnCd_ondropdown = function(obj,e)
        {
        	var val = nexacro.replaceAll(this.edCalendar.value, "-", "");
        	if(val.length == 8)
        	{
        		trace("val : " + val);
        		this.bnCd.set_value(this.DataSvrUtil_StrToDate(nexacro.replaceAll(this.edCalendar.value, "-", "")));
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.doLoad,this);
            this.bnCd.addEventHandler("onchanged",this.doChanged,this);
            this.bnCd.addEventHandler("ondropdown",this.bnCd_ondropdown,this);
            this.edCalendar.addEventHandler("oneditclick",this.doEditclick,this);
        };
        this.loadIncludeScript("CustomCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
