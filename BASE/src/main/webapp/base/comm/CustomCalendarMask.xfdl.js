(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CustomCalendarMask");
            this.set_titletext("사용자 정의 캘린더 Mask");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(120,22);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("bnCd",null,"0","22","22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyyMMdd");
            obj.set_readonly("false");
            obj.set_editformat("yyyyMMdd");
            obj.set_showmonthspin("true");
            obj.set_showyearspin("true");
            obj.set_type("normal");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("meCalendar","0","0",null,"22","bnCd:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("@@@@-@@-@@");
            obj.set_type("string");
            obj.set_trimtype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",120,22,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CustomCalendarMask.xfdl", function() {
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
        this.editType = "edit";	//edit, readonly, popup
        this.format	= "@@@@-@@-@@";
        this.isCalSelEditFocus = false;
        this.isBnVisible = true
        this.isAutoSize = true;
        this.compWidth = 110;
        this.binddatasetid;
        this.columnid;

        this.ownerFrame = this.getOwnerFrame();
        /*****************************************************************
         * 함수명 	: doLoad
         * 설명		: 화면 초기 이벤트
         *****************************************************************/
        this.doLoad = function(obj, e)
        {	//trace("CustomCalendarMask this.doLoad() this.parent.binddataset : " + this.parent.binddatasetid + ", this.parent.columnid : " + this.parent.columnid);
        	this.editType = Ex.isEmpty(this.parent.editType) ? "edit" : this.parent.editType;	//edit, readonly, popup
        	this.format	= Ex.isEmpty(this.parent.format)? "@@@@-@@-@@" : this.parent.format;
        	this.isCalSelEditFocus = Ex.isEmpty(this.parent.isCalSelEditFocus)? false : this.parent.isCalSelEditFocus;
        	this.isBnVisible = Ex.isEmpty(this.parent.isBnVisible)? true : this.parent.isBnVisible;
        	this.isAutoSize = Ex.isEmpty(this.parent.isAutoSize)? true : this.parent.isAutoSize;
        	this.compWidth = Ex.isEmpty(this.parent.compWidth)? 110 : this.parent.compWidth;
        	this.binddatasetid = this.parent.binddatasetid;
        	this.columnid = this.parent.columnid;

        	if(!Ex.isEmpty(this.parent.binddatasetid) && !Ex.isEmpty(this.parent.columnid) )
        	{
        		var bindObj = new BindItem();
        		bindObj.init("item0", "meCalendar", "value", this.parent.binddatasetid, this.parent.columnid);
        		this.addChild("item0", bindObj);
        		bindObj.bind();
        	}

        	this.setBnVisible(this.isBnVisible);
        	this.setFormat(this.format);
        	trace("this.parent.editType : " + this.parent.editType + " this.editType : " + this.editType);
        	this.changeEditType(this.editType);

        	if(!this.isAutoSize)
        	{
        		var date = this.compWidth - 27;
        		this.meCalendar.set_left(0);
        		this.meCalendar.set_width(nexacro.toNumber(this.compWidth) - (this.isBnVisible ? 27 : 0));
        		if(this.isBnVisible) this.bnCd.set_left("meCalendar:5");
        		if(this.isBnVisible) this.bnCd.set_width(22);
        	}
        };

        /*****************************************************************
         * 함수명	: doChanged
         * 설명	: 캘린더 값 변경 이벤트
         *****************************************************************/
        this.doChanged = function(obj,e)
        {	trace("CustomCalendarMask this.doChanged() this.isCalSelEditFocus : " + this.isCalSelEditFocus + ", e.posttext : " + e.posttext + ", e.postvalue : " + e.postvalue);
        	var str = new String(!Ex.isEmpty(this.meCalendar.value) ? this.meCalendar.value : "");
        	var time = "";

        	if(str.length > 8)
        	{
        		time = str.substr(8, str.length-8);
        	}
        	this.meCalendar.set_value(e.postvalue + time);
        	//trace("CustomCalendarMask this.meCalendar.text : " + this.meCalendar.text + ", this.meCalendar.value : " + this.meCalendar.value);

        	if( !Ex.isEmpty(this.ownerFrame.form.callCalendarValChgEventFunc) )
        	{
        		Ex.isFunction(this.ownerFrame.form.callCalendarValChgEventFunc)
        		{
        			var item = new Object();
        			item.obj	= this.meCalendar;
        			item.parent = obj.parent.parent;
        			item.binddatasetid = this.parent.binddatasetid;
        			item.columnid = this.parent.columnid;
        			item.text = this.meCalendar.text;
        			item.value = this.meCalendar.value;
        			this.ownerFrame.form.callCalendarValChgEventFunc.call(this.ownerFrame.form, item);
        		}
        	}

        	if(this.isCalSelEditFocus)
        	{
        		str = new String(!Ex.isEmpty(this.meCalendar.value) ? this.meCalendar.value : "");
        		if(str.length >= 8)
        		{
        			this.meCalendar.setCaretPos(11);
        			this.meCalendar.setFocus(false, true);
        		}
        	}
        };

        /*****************************************************************
         * 함수명	: doEditclick
         * 설명	: 캘린더 edit click 이벤트
         *****************************************************************/
        this.doEditclick = function(obj,e)
        {
        	if(this.editType == "popup")
        	{
        		this.bnCd.dropdown();
        	}
        };

        /*****************************************************************
         * 함수명	: meCalendar_onkeyup
         * 설명	: 캘린더 키입력 이벤트
         *****************************************************************/
        /*
        this.meCalendar_onkeyup = function(obj:nexacro.MaskEdit,e:nexacro.KeyEventInfo)
        {	var val = nexacro.replaceAll(e.fromreferenceobject.text, " ", "");
        		val = nexacro.replaceAll(val, "-", "");
        		val = nexacro.replaceAll(val, ":", "");

        	//trace("CustomCalendarMask this.meCalendar_onkeyup() val : " + val + ", e.fromreferenceobject.text : " + e.fromreferenceobject.text);
        	if(val.length >= 8)
        	{
        		if(val.indexOf("_") > 7)
        		{
        			if(val.substr(0, 8) != bnCd.value)
        			{
        				this.bnCd.set_value(val.substr(0, 8));
        			}
        		}
        		else
        		{
        			this.bnCd.set_value("");
        		}
        	}
        };
        */

        this.setFormat = function(maskStr)
        {
        	this.meCalendar.set_format(this.format);
        };

        this.changeEditType = function(type)
        {
        	if(type == "edit")
        	{
        		this.meCalendar.set_readonly(false);
        		this.bnCd.set_enable(true);
        	}
        	else if(type == "readonly")
        	{
        		this.meCalendar.set_readonly(true);
        		this.bnCd.set_enable(false);
        	}
        	else if(type == "popup")
        	{
        		this.meCalendar.set_readonly(true);
        		this.bnCd.set_enable(true);
        	}
        };

        this.setWidth = function(width)
        {
        	this.meCalendar.set_width(width - (this.isBnVisible ? 27 : 0));
        	if(this.isBnVisible) this.bnCd.set_left("meCalendar:5");
        };

        this.setBnVisible = function(visible)
        {
        	this.bnCd.set_visible(visible);
        };

        this.bnCd_ondropdown = function(obj,e)
        {
        	trace("this.bnCd_ondropdown() this.meCalendar.value : " + this.meCalendar.value);

        	if( !Ex.isEmpty(this.meCalendar.value) )
        	{
        		trace("!isEmpty this.bnCd_ondropdown() this.meCalendar.value : " + this.meCalendar.value);

        		if(this.meCalendar.value.length > 7)
        		{
        			//trace("CustomCalendarMask this.meCalendar.value : " + this.meCalendar.value);
        			//this.bnCd.set_value(this.DataSvrUtil_StrToDate(nexacro.replaceAll(this.meCalendar.value.substr(0, 8), "-", "")));
        			this.bnCd.set_value(Ex.util.strToDate(nexacro.replaceAll(this.meCalendar.value.substr(0, 8), "-", "")));
        		}
        	}
        };

        this.meCalendar_onsetfocus = function(obj,e)
        {	//trace("CustomCalendarMask this.meCalendar_onsetfocus()");
        	var str = new String(!Ex.isEmpty(obj.value) ? obj.value : "");
        	var formatStr = new String(!Ex.isEmpty(obj.format) ? obj.format : "");
        		str = nexacro.replaceAll(str, " " , "");
        	//trace("CustomCalendarMask this.meCalendar_onsetfocus() obj.text :[" + obj.text + "], str :[" + str + "], str.length : " + str.length);
        	if(str.length == 8)
        	{
        		if(formatStr.length > 8) this.meCalendar.setCaretPos(11);
        	}
        };

        this.doKillfocus = function(obj,e)
        {	//trace("CustomCalendarMask this.doKillfocus() obj.text : " + obj.text);
        	var str = nexacro.replaceAll(obj.text, " ", "");
        		str = nexacro.replaceAll(str, "-", "");
        		str = String(nexacro.replaceAll(str, ":", ""));

        	var limitLen = 7;

        	if( !Ex.isEmpty(this.parent.limitLen) )
        	{
        		trace("this.doKillfocus() this.parent.limitLen : " + this.parent.limitLen);

        		if(nexacro.isNumeric(this.parent.limitLen) )
        		{
        			limitLen = nexacro.toNumber(this.parent.limitLen) - 1;
        		}
        	}

        	if(str.indexOf("_") > -1)
        	{
        		if(str.indexOf("_") > limitLen)
        		{
        			//trace("str : " + str);
        			if(str.substr(0, 8) != this.bnCd.value)
        			{
        				obj.set_value(str.substr(0, 8));
        			}
        		}
        		else
        		{
        			obj.set_value("");

        			if( !Ex.isEmpty(this.bnCd.value) )
        			{
        				obj.set_value("");
        			}
        		}
        	}
        };

        /*****************************************************************
         * 함수명	: setFixCalDateTime
         * 설명	: 캘린더 년월일과 시분의 정합성을 체크하여 올바른 값만 유지한다.
         *****************************************************************/
        this.setFixCalDateTime = function()
        {
        	var str = nexacro.replaceAll(this.meCalendar.text, " ", "");
        		str = nexacro.replaceAll(str, "-", "");
        		str = String(nexacro.replaceAll(str, ":", ""));

        	var limitLen = 7;

        	if( !Ex.isEmpty(this.parent.limitLen) )
        	{
        		//trace("this.setFixCalDateTime() this.parent.limitLen : " + this.parent.limitLen);

        		if(nexacro.isNumeric(this.parent.limitLen) )
        		{
        			limitLen = nexacro.toNumber(this.parent.limitLen) - 1;
        		}
        	}

        	if(str.indexOf("_") > -1)
        	{
        		if(str.indexOf("_") > limitLen)
        		{
        			//trace("str : " + str);
        			this.meCalendar.set_value(str.substr(0, 8));

        			if(str.substr(0, 8) != this.bnCd.value)
        			{
        				this.bnCd.set_value(str.substr(0, 8));
        			}
        		}
        		else
        		{
        			this.meCalendar.set_value("");

        			if( !Ex.isEmpty(this.bnCd.value) )	this.bnCd.set_value("");
        		}
        	}
        }

        this.doKeyup = function(obj,e)
        {
        	//trace("CustomCalendarMask this.doKeyup() this.parent.keyupEvent : " + this.parent.keyupEvent);
        	if( !Ex.isEmpty(this.parent.keyupEvent) )
        	{
        		this.ownerFrame.form[this.parent.keyupEvent].call(this.ownerFrame.form, obj, e);
        		//eval("this.ownerFrame.form." + this.parent.keyupEvent + ".call(this.ownerFrame.form, obj, e);");
        	}
        };

        this.doCloseup = function(obj,e)
        {
        	var meVal = String(Ex.isEmpty(this.meCalendar.value) ? "" : this.meCalendar.value);
        	var time = "";

        	trace("this.doCloseup() meVal : " + meVal + ", meVal.length : " + meVal.length);

        	if(meVal.length > 8)
        	{
        		time = meVal.substr(8, meVal.length-8);
        	}

        	if(!Ex.isEmpty(obj.value) )
        	{
        		if(meVal.substr(0, 8) != obj.value)
        		{
        			this.meCalendar.set_value(obj.value + time);
        		}
        	}

        	trace("this.doCloseup() this.meCalendar.value : " + this.meCalendar.value);

        	if(this.isCalSelEditFocus)
        	{
        		str = new String(!Ex.isEmpty(this.meCalendar.value) ? this.meCalendar.value : "");
        		if(str.length >= 8)
        		{
        			this.meCalendar.setCaretPos(11);
        			this.meCalendar.setFocus(false, true);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.doLoad,this);
            this.bnCd.addEventHandler("onchanged",this.doChanged,this);
            this.bnCd.addEventHandler("ondropdown",this.bnCd_ondropdown,this);
            this.bnCd.addEventHandler("oncloseup",this.doCloseup,this);
            this.meCalendar.addEventHandler("oneditclick",this.doEditclick,this);
            this.meCalendar.addEventHandler("onkillfocus",this.doKillfocus,this);
            this.meCalendar.addEventHandler("onsetfocus",this.meCalendar_onsetfocus,this);
            this.meCalendar.addEventHandler("onkeyup",this.doKeyup,this);
        };
        this.loadIncludeScript("CustomCalendarMask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
