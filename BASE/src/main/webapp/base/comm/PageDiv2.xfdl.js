(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PageDiv2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,25);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("dvPaging","48","0","305","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("bnPreS",null,"6","14","13","dvPaging:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("preS");
            this.addChild(obj.name, obj);

            obj = new Button("bnPreL",null,"6","16","13","bnPreS:3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("preL");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("bnNextS","dvPaging:3","6","14","13",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("nextS");
            this.addChild(obj.name, obj);

            obj = new Button("bnNextL","bnNextS:3","6","16","13",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("nextL");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.dvPaging
            obj = new Layout("default","",0,0,this.dvPaging.form,function(p){});
            this.dvPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,25,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PageDiv2.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 페이징 공통2
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
        this.formObj;
        this.curPage = 0;
        this.startPg = 0;
        this.lastPg = 0;
        this.ownerFrame = this.DataSvrUtil_doGetOwnerFrame();
        /*****************************************************************
         * 함수명 	: doLoad
         * 설명		: 화면 초기 이벤트
         *****************************************************************/
        this.doLoad = function(obj, e)
        {	//trace("PageDiv this.doLoad()");
        	obj.set_visible(false);
        	this.formObj = obj;
        	//this.setPaging(5, 8);
        };

        /*****************************************************************
         * 함수명	: createPaging
         * 설명	: 페이징 표시 화면 타입 설정
         *****************************************************************/
        this.setPaging = function(curPage, lastPage)
        {	trace("PageDiv2 this.setPageType() curPage : " + curPage + ", lastPage : " + lastPage);
        	if(this.formObj.visible) this.formObj.set_visible(false);
        	this.curPage = curPage;
        	this.lastPage = lastPage;
        	var left = 10;
        	var top	= 2;
        	var btnWidth = 22;
        	var btnHeight = 22;
        	var emptyWidth = 2;

        	trace("this.setPaging() this.dvPaging.form.components.length : " + this.dvPaging.form.components.length);
        	var divCompLen = this.dvPaging.form.components.length;
        	for(var i=divCompLen-1; i>=0; i--)
        	{
        		if(this.dvPaging.form.components[i] instanceof Button)
        		{
        			var bnComp = this.dvPaging.form.components[i];
        			trace("this.setPaging() i=" + i + ", bnComp.id : " + bnComp.id);
        			bnComp.destroy();
        			this.dvPaging.removeChild(bnComp.id);
        		}
        	}

        	var modVal = curPage % 10;
        	this.startPg = modVal == 0 ? curPage - 9 : curPage - (curPage % 10) + 1;
        	this.lastPg = lastPage > this.startPg + 9 ? this.startPg + 9 : lastPage;

        	/*
        	if(curPage > 10)
        	{
        		this.bnPreL.set_visible(true);
        	}
        	else
        	{
        		this.bnPreL.set_visible(false);
        	}

        	if(this.lastPg < lastPage)
        	{
        		this.bnNextL.set_visible(true);
        	}
        	else
        	{
        		this.bnNextL.set_visible(false);
        	}
        	*/

        	trace("this.startPg : " + this.startPg + ", this.lastPg : " + this.lastPg);

        	for(var i=this.startPg; i<=this.lastPg; i++)
        	{
        		var objComp  = new Button();

        		//Button.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )

        		if(i == this.startPg)
        		{
        			trace("i=" + i + ", left : " + left);
        			objComp.init("bnPage" + i, left, top, btnWidth, btnHeight, null, null);
        		}
        		else
        		{
        			left += (btnWidth + emptyWidth);
        			trace("i=" + i + ", left : " + left);
        			objComp.init("bnPage" + i, left, top, btnWidth, btnHeight, null, null);
        		}

        		objComp.set_font("12px NotoSansR");

        		if(i == curPage)
        		{
        			objComp.set_color("#007dff");
        		}
        		else
        		{
        			objComp.set_color("#444444");
        		}

        		objComp.set_border("0px none");
        		objComp.set_background("#ffffff")
        		objComp.set_edge('"none", 0px 0px');
        		objComp.set_text(i);
        		objComp.set_textAlign("center");
        		objComp.addEventHandler("onclick", this.fnButtonComOnclick, this.formObj);
        		this.dvPaging.addChild("bnPage" + (i+1), objComp);
        		objComp.show();

        		if(i == this.lastPg)
        		{
        			var widthVal = nexacro.toNumber(objComp.getOffsetLeft()) + nexacro.toNumber(objComp.width) + 10;
        			trace("widthVal : " + widthVal + ", objComp.getOffsetLeft() : " + objComp.getOffsetLeft());
        			this.dvPaging.set_width(widthVal);
        		}
        	}
        	this.dvPaging.set_left(nexacro.toNumber(this.formObj.width/2) - nexacro.toNumber(this.dvPaging.width/2));
        	this.bnPreS.set_right("dvPaging:3");
        	this.bnPreL.set_right("bnPreS:3");
        	this.bnNextS.set_left("dvPaging:3");
        	this.bnNextL.set_left("bnNextS:3");

        	if(!Eco.isEmpty(curPage) && curPage > 0 && !Eco.isEmpty(lastPage) && lastPage > 0)
        	{
        		if(!this.formObj.visible) this.formObj.set_visible(true);
        	}
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /*****************************************************************
         * 함수명	: button onclick 이벤트
         * 설명	: 화면에 버튼 클릭 이벤트 모음
         *****************************************************************/
        this.fnButtonComOnclick = function(obj,e)
        {	trace("PageDiv this.fnButtonComOnclick() obj.name:[" + obj.name + "], obj.name.indexOf(\"bnPage\") : " + obj.name.indexOf("bnPage"));
        	var sObjId = obj.name;
        	var msg = "";

        	if(sObjId == "bnPreL")
        	{
        		if(this.curPage != 1)
        		{
        			this.setPaging(1, this.lastPage);
        		}
        		else
        		{
        			return;
        		}
        	}
        	else if(sObjId == "bnPreS")
        	{
        		if(this.curPage > 1)
        		{
        			this.setPaging(this.curPage-1, this.lastPage);
        		}
        		else
        		{
        			return;
        		}
        	}
        	else if(sObjId == "bnNextS")
        	{
        		if(this.curPage < this.lastPage)
        		{
        			this.setPaging(this.curPage+1, this.lastPage);
        		}
        		else
        		{
        			return;
        		}
        	}
        	else if(sObjId == "bnNextL")
        	{
        		if(this.curPage != this.lastPage)
        		{
        			this.setPaging(this.lastPage, this.lastPage);
        		}
        		else
        		{
        			return;
        		}

        	}
        	else if(sObjId.indexOf("bnPage") > -1)
        	{
        		this.curPage = nexacro.toNumber(obj.text);

        		var pageNum = nexacro.replaceAll(sObjId, "bnPage", "");

        		for(var i=0; i<this.dvPaging.form.components.length; i++)
        		{
        			if(nexacro.toNumber(this.dvPaging.form.components[i].text) == pageNum)
        			{
        				this.dvPaging.form.components[i].set_color("#007dff");
        			}
        			else
        			{
        				this.dvPaging.form.components[i].set_color("#444444");
        			}
        		}
        	}
        	var userCallBack = this.ownerFrame.form.callBackFunc;
        	if( Eco.isFunction(userCallBack) ) userCallBack.call(this.ownerFrame.form, this.curPage);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.doLoad,this);
            this.bnPreS.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.bnPreL.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.bnNextS.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.bnNextL.addEventHandler("onclick",this.fnButtonComOnclick,this);
        };
        this.loadIncludeScript("PageDiv2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
