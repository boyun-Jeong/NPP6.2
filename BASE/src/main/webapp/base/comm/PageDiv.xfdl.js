(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PageDiv");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("dvStatic","0","0",null,"21","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv","50%","3","10",null,null,"3",null,null,null,null,this.dvStatic.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.dvStatic.addChild(obj.name, obj);

            obj = new Static("stCurPage",null,"3","30",null,"stDiv:3","3",null,null,null,null,this.dvStatic.form);
            obj.set_taborder("0");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.dvStatic.addChild(obj.name, obj);

            obj = new Static("stTotalPage","stDiv:3","3","30",null,null,"3",null,null,null,null,this.dvStatic.form);
            obj.set_taborder("1");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.dvStatic.addChild(obj.name, obj);

            obj = new Button("bnPreS",null,"5","14",null,"stCurPage:15","3",null,null,null,null,this.dvStatic.form);
            obj.set_taborder("4");
            obj.set_cssclass("preS");
            this.dvStatic.addChild(obj.name, obj);

            obj = new Button("bnPreL",null,"5","16",null,"bnPreS:5","3",null,null,null,null,this.dvStatic.form);
            obj.set_taborder("3");
            obj.set_cssclass("preL");
            this.dvStatic.addChild(obj.name, obj);

            obj = new Button("bnNextS","stTotalPage:15","5","14",null,null,"3",null,null,null,null,this.dvStatic.form);
            obj.set_taborder("5");
            obj.set_cssclass("nextS");
            this.dvStatic.addChild(obj.name, obj);

            obj = new Button("bnNextL","bnNextS:5","5","16",null,null,"3",null,null,null,null,this.dvStatic.form);
            obj.set_taborder("6");
            obj.set_cssclass("nextL");
            this.dvStatic.addChild(obj.name, obj);

            obj = new Div("dvSpin","0","30",null,"21","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv","50%","3","10",null,null,"3",null,null,null,null,this.dvSpin.form);
            obj.set_taborder("1");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.dvSpin.addChild(obj.name, obj);

            obj = new Static("stTotalPage","stDiv:3","3","30",null,null,"3",null,null,null,null,this.dvSpin.form);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.dvSpin.addChild(obj.name, obj);

            obj = new Spin("spCurPage",null,"2","45",null,"stDiv:3","2",null,null,null,null,this.dvSpin.form);
            obj.set_taborder("6");
            obj.set_min("1");
            obj.set_max("1");
            obj.set_value("1");
            this.dvSpin.addChild(obj.name, obj);

            obj = new Button("bnPreS",null,"5","14",null,"spCurPage:15","3",null,null,null,null,this.dvSpin.form);
            obj.set_taborder("3");
            obj.set_cssclass("preS");
            this.dvSpin.addChild(obj.name, obj);

            obj = new Button("bnPreL",null,"5","16",null,"bnPreS:5","3",null,null,null,null,this.dvSpin.form);
            obj.set_taborder("2");
            obj.set_cssclass("preL");
            this.dvSpin.addChild(obj.name, obj);

            obj = new Button("bnNextS","stTotalPage:15","5","14",null,null,"3",null,null,null,null,this.dvSpin.form);
            obj.set_taborder("4");
            obj.set_cssclass("nextS");
            this.dvSpin.addChild(obj.name, obj);

            obj = new Button("bnNextL","bnNextS:5","5","16",null,null,"3",null,null,null,null,this.dvSpin.form);
            obj.set_taborder("5");
            obj.set_cssclass("nextL");
            this.dvSpin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.dvStatic.form
            obj = new Layout("default","",0,0,this.dvStatic.form,function(p){});
            this.dvStatic.form.addLayout(obj.name, obj);

            //-- Default Layout : this.dvSpin.form
            obj = new Layout("default","",0,0,this.dvSpin.form,function(p){});
            this.dvSpin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",300,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PageDiv.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 페이징 공통1
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
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
        this.pageType = "static";
        this.curPage;
        this.totPage;
        this.ownerFrame = this.DataSvrUtil_doGetOwnerFrame();
        /*****************************************************************
         * 함수명 	: doLoad
         * 설명		: 화면 초기 이벤트
         *****************************************************************/
        this.doLoad = function(obj, e)
        {	//trace("PageDiv this.doLoad()");
        	if( Eco.isEmpty(this.ownerFrame.pageType) )
        	{
        		if(this.ownerFrame.pageType == "static" || this.ownerFrame.pageType == "spin")
        		{
        			this.setPageType(this.ownerFrame.pageType);
        		}
        		else
        		{
        			this.setPageType("static");
        		}
        	}
        	else
        	{
        		this.setPageType("static");
        	}
        };

        /*****************************************************************
         * 함수명	: setPageType
         * 설명	: 페이징 표시 화면 타입 설정
         *****************************************************************/
        this.setPageType = function(val, cur, tot)
        {	//trace("PageDiv this.setPageType() val : " + val + ", cur : " + cur + ", tot : " + tot);
        	this.pageType = val;

        	if( Eco.isEmpty(cur) ) cur = this.curPage;
        	if( Eco.isEmpty(tot) ) tot = this.totPage;

        	if(this.pageType == "static")
        	{
        		if(this.dvStatic.top > 0) this.dvStatic.set_top(0);
        		this.dvStatic.set_visible(true);
        		this.dvSpin.set_visible(false);

        	}
        	else if(this.pageType == "spin")
        	{
        		if(this.dvSpin.top > 0) this.dvSpin.set_top(0);
        		this.dvSpin.set_visible(true);
        		this.dvStatic.set_visible(false);
        	}

        	this.setCurPage(cur);
        	this.setTotPage(tot);
        };

        /*****************************************************************
         * 함수명	: setCurPage
         * 설명	: 현재 페이지 셋팅
         *****************************************************************/
        this.setCurPage = function(val)
        {	//trace("PageDiv this.setCurPage() val : " + val);
        	this.curPage = val;
        	this.dvStatic.form.stCurPage.set_text(this.curPage);
        	this.setCompMove();
        };

        /*****************************************************************
         * 함수명	: setTotPage
         * 설명	: 전체 페이지 셋팅
         *****************************************************************/
        this.setTotPage = function(val)
        {	//trace("PageDiv this.setTotPage() val : " + val);
        	this.totPage = val;
        	this.dvStatic.form.stTotalPage.set_text(this.totPage);
        	this.dvSpin.form.spCurPage.set_max(this.totPage);
        	this.dvSpin.form.stTotalPage.set_text(this.totPage);
        	this.setCompMove();
        };

        /*****************************************************************
         * 함수명	: setCompMove
         * 설명	: 페이징 수치값에 변경에 따른 컴포넌트 재배치
         *****************************************************************/
        this.setCompMove = function()
        {	//trace("PageDiv this.setCompMove() val : " + val);
        	if( Eco.isEmpty(this.curPage) || Eco.isEmpty(this.totPage) )
        	{
        		this.dvStatic.form.stDiv.set_width(0);
        		this.dvStatic.form.stCurPage.set_width(0);
        		this.dvStatic.form.stTotalPage.set_width(0);

        		this.dvSpin.form.stDiv.set_width(0);
        		this.dvSpin.form.spCurPage.set_width(0);
        		this.dvSpin.form.stTotalPage.set_width(0);
        	}
        	else
        	{
        		this.dvStatic.form.stDiv.set_width(10);
        		this.dvSpin.form.stDiv.set_width(10);
        	}

        	var curPage = !Eco.isEmpty(this.curPage) ? this.curPage : "";
        	var curSizeVal = nexacro.getTextSize(String(curPage), "12px NotoSansKR");	//, 100, "none"	this.dvStatic.form.stTotalPage.font
        	//trace("setCurPage this.pageType : " + this.pageType +", curPage : " + curPage + ", width : " + curSizeVal.nx + ", height : " + curSizeVal.ny);

        	this.dvStatic.form.stCurPage.set_width(curSizeVal.nx);
        	this.dvStatic.form.bnPreS.set_right("stCurPage:15");
        	this.dvStatic.form.bnPreL.set_right("bnPreS:5");

        	this.dvSpin.form.spCurPage.set_value(this.curPage);
        	this.dvSpin.form.bnPreS.set_right("spCurPage:15");
        	this.dvSpin.form.bnPreL.set_right("bnPreS:5");

        	var totPage = !Eco.isEmpty(this.curPage) ? this.totPage : "";
        	var totSizeVal = nexacro.getTextSize(String(totPage), "12px NotoSansKR");	//, 100, "none"	this.dvStatic.form.stTotalPage.font
        	//trace("setTotPage this.pageType : " + this.pageType +", totPage : " + totPage + ", width : " + totSizeVal.nx + ", height : " + totSizeVal.ny);

        	this.dvStatic.form.stTotalPage.set_width(nexacro.toNumber(totSizeVal.nx));
        	this.dvStatic.form.bnNextS.set_left("stTotalPage:15");
        	this.dvStatic.form.bnNextL.set_left("bnNextS:5");

        	this.dvSpin.form.stTotalPage.set_width(nexacro.toNumber(totSizeVal.nx));
        	this.dvSpin.form.spCurPage.set_width(nexacro.toNumber(totSizeVal.nx) + 35);

        	this.dvSpin.form.bnPreS.set_right("spCurPage:15");
        	this.dvSpin.form.bnPreL.set_right("bnPreS:5");
        	this.dvSpin.form.bnNextS.set_left("stTotalPage:15");
        	this.dvSpin.form.bnNextL.set_left("bnNextS:5");
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /*****************************************************************
         * 함수명	: button onclick 이벤트
         * 설명	: 화면에 버튼 클릭 이벤트 모음
         *****************************************************************/
        this.fnButtonComOnclick = function(obj,e)
        {	//trace("PageDiv this.fnButtonComOnclick() obj.name:[" + obj.name + "]");
        	var sObjId = obj.name;
        	var msg = "";

        	switch (sObjId)
        	{
        		case "bnPreL" :		//첫 페이지
        			if( Eco.isEmpty(this.curPage) || this.curPage <= 1 )
        			{
        				msg = "FIRST";
        			}
        			else
        			{
        				this.setCurPage(1);
        			}
        			break;

        		case "bnPreS" :		//페이지 아래로
        			if( Eco.isEmpty(this.curPage) || this.curPage <= 1 )
        			{
        				msg = "FIRST";
        			}
        			else
        			{
        				this.setCurPage(nexacro.toNumber(this.curPage) - 1);
        			}
        			break;

        		case "bnNextS" :	//페이지 위로
        			if( Eco.isEmpty(this.curPage) || this.curPage == this.totPage )
        			{
        				msg = "LAST";
        			}
        			else
        			{
        				this.setCurPage(nexacro.toNumber(this.curPage) + 1);
        			}
        			break;

        		case "bnNextL" :	//마지막 페이지
        			if( Eco.isEmpty(this.curPage) || this.curPage ==  this.totPage )
        			{
        				msg = "LAST";
        			}
        			else
        			{
        				this.setCurPage(this.totPage);
        			}
        			break;
        	}

        	var userCallBack = this.ownerFrame.form.callBackFunc;
        	if( Eco.isFunction(userCallBack) ) userCallBack.call(this.ownerFrame.form, this.curPage);
        };

        /*****************************************************************
         * 함수명	: doSpin
         * 설명	: onspin 이벤트
         *****************************************************************/
        this.doSpin = function(obj,e)
        {	//trace("PageDiv this.doSpin() e.postvalue : " + e.postvalue);
        	this.setCurPage(e.postvalue);
        	var userCallBack = this.ownerFrame.form.callBackFunc;
        	if( Eco.isFunction(userCallBack) ) userCallBack.call(this.ownerFrame.form, this.curPage, msg);
        };

        /*****************************************************************
         * 함수명	: doChange
         * 설명	: onchanged 이벤트
         *****************************************************************/
        this.doChange = function(obj,e)
        {	//trace("PageDiv  this.doChange() e.postvalue : " + e.postvalue);
        	this.setCurPage(e.postvalue);
        	var userCallBack = this.ownerFrame.form.callBackFunc;
        	if( Eco.isFunction(userCallBack) ) userCallBack.call(this.ownerFrame.form, this.curPage);
        };

        /*****************************************************************
         * 함수명	: doKeydown
         * 설명	: onkeydown 이벤트
         *****************************************************************/
        this.doKeydown = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		trace("PageDiv this.doKeydown() e.fromreferenceobject.text : " + e.fromreferenceobject.text);

        		var msg = "";
        		if(nexacro.toNumber(e.fromreferenceobject.text) == this.curPage) return;
        		if(nexacro.toNumber(e.fromreferenceobject.text) > this.totPage) msg = "OVER";
        		if(nexacro.toNumber(e.fromreferenceobject.text) < 1) msg = "UNDER";

        		if( Eco.isEmpty(msg) )
        		{
        			this.setCurPage(e.fromreferenceobject.text);
        		}
        		var userCallBack = this.ownerFrame.form.callBackFunc;
        		if( Eco.isFunction(userCallBack) ) userCallBack.call(this.ownerFrame.form, this.curPage, msg);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.doLoad,this);
            this.dvStatic.form.bnPreS.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dvStatic.form.bnPreL.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dvStatic.form.bnNextS.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dvStatic.form.bnNextL.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dvSpin.form.spCurPage.addEventHandler("onkeydown",this.doKeydown,this);
            this.dvSpin.form.spCurPage.addEventHandler("onchanged",this.doChange,this);
            this.dvSpin.form.spCurPage.addEventHandler("onspin",this.doSpin,this);
            this.dvSpin.form.bnPreS.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dvSpin.form.bnPreL.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dvSpin.form.bnNextS.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dvSpin.form.bnNextL.addEventHandler("onclick",this.fnButtonComOnclick,this);
        };
        this.loadIncludeScript("PageDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
