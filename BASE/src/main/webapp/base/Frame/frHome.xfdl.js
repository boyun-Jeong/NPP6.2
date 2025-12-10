(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frHome_D");
            this.set_scrollbarsize("15");
            this.set_scrollbarincbuttonsize("15");
            this.set_scrollbardecbuttonsize("15");
            this.set_scrollbartype("auto auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLangCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divScrn","0","0","1905","800",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0","839","1920","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_background("#dfdfdf");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","5",null,null,"40","5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("Copyright ⓒ Wemb SPP(Smart Portal Platform) All Reserved.");
            obj.set_font("13px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btn00","5","5","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divScrn
            obj = new Layout("default","",0,0,this.divScrn.form,function(p){});
            this.divScrn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

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
        this.registerScript("frHome.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frTop_D01
        * 화면(명)		︰ 언어선택 div
        * 메뉴(경로)	︰ Frame
        * 화면 설명	︰ frTop 언어선택 Div
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.formObj;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        }

        this.fnInit = function(screenUrl)
        {
        	this.formObj = obj;
        	this.divScrn.set_url(screenUrl);
        // 	if(screenUrl == this.divScrn.url) {
        // 		this.divScrn.set_url(screenUrl);
        // 	}
        // 	else {
        // 		this.divScrn.form.fnSearch();
        // 	}
        	this.frHome_D_onsize();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

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
        		case "" :
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // Toast 관련 함수
        // Toast message 처리용
        this.nToastCnt = 0;  // ID 및 Top 처리용
        this.arrToast = []; // Top 처리시 참조용

        this.fnSetMsgToast = function(strMsg, optArr)
        {
        	var tID = '';
        	if( Ex.isEmpty(strMsg) ) strMsg = '';
        	if( Ex.isEmpty(tID) ) tID = this.name +'_pToast' + this.nToastCnt;

        	//trace("tID:" + tID);
        	var pToast = this[tID];

        	// option NVL
        	if( Ex.isEmpty(optArr) )	optArr = {};
        	var displaySecond 	= Ex.isNvl(optArr.displaySecond, 2);
        	var usedecorate 	= Ex.isNvl(optArr.usedecorate, true);
        	var toastType 		= Ex.isNvl(optArr.toastType, 'N');

        	// CSS setting
        	var css = '';
        	switch(toastType.toUpperCase)
        	{
        		case "S" :	css = "sta_TOAST_success";	break;		// SUCCESS
        		case "W" :	css = "sta_TOAST_warning";	break;		// WARNING
        		case "E" :	css = "sta_TOAST_error";	break;		// ERROR
        		default	:	css = "sta_TOAST_normal";	break;		// NORMAL
        	}

        	// toast begin
        	var MIN_DISPLAY_SEC = 2;
        	var MAX_DISPLAY_SEC = 10;
        	var MIN_WIDTH = 250;
        	var MAX_WIDTH = 800;

        	var tempStatic = new Static("tempStatic", 0, 0, 0, 0, null, null);
        	tempStatic.set_cssclass(css);

        	if( usedecorate )
        	{
        		tempStatic.set_usedecorate(true);
        	}

        	tempStatic.set_text(strMsg);

        	this.addChild("tempStatic", tempStatic);
        	tempStatic.show();

        	// toast width
        	var objStaticSize = nexacro.getTextSize(tempStatic.getDisplayText(), tempStatic._getCurrentStyleInheritValue("font"));
        	var objmax = parseInt(objStaticSize.nx) + 50;
        	if(objmax <= MIN_WIDTH)	objmax = MIN_WIDTH;
        	if(objmax >= MAX_WIDTH)	objmax = MAX_WIDTH;

        	this.removeChild("tempStatic", tempStatic);
        	tempStatic.destroy();

        	var nLeft = (this.getOffsetWidth() / 2) - (objmax / 2);
        	var nTop = 20 + (this.nToastCnt * 36);
        	this.nToastCnt++;
        	var oDiv = new Div(tID, nLeft, nTop, objmax, 36);
        	oDiv.set_async(false);

        	this.addChild(tID, oDiv);
        	oDiv.msg = strMsg;

        	// toast display time
        	displaySecond = nexacro.toNumber(displaySecond, 0);
        	if(displaySecond == MIN_DISPLAY_SEC)	displaySecond = MIN_DISPLAY_SEC;	// defualt 2초
        	if(displaySecond > MAX_DISPLAY_SEC) 	displaySecond = MAX_DISPLAY_SEC;	// max 10초

        	oDiv.displaySecond	= displaySecond;	// 표기할 시간(초)
        	oDiv.isDecorate 	= usedecorate;		// default usedecorate true
        	oDiv.toastType 		= toastType;		// defualt Type 'N'	- Normal
        	oDiv.set_url("comm::comMsg.xfdl");
        	oDiv.show();

        	this.arrToast.push(oDiv);
        }

        // Toast message 삭제용
        this.fnSetDestroy = function()
        {
        	//trace("frWork this.fnSetDestroy()");
        	var rtn = this.removeChild(this.arrToast[0].id);
        	var bSucc = this.arrToast[0].destroy();

        	this.arrToast.splice(0,1);
        	if( this.arrToast.length == 0 )
        		this.nToastCnt = 0;
        }







        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.frHome_D_onsize = function(obj,e)
        {
        	if(this.hscrollbar)
        	{
        		//trace("1111 this.hscrollbar.pos : " + this.hscrollbar.pos);
        		if(this.hscrollbar.pos > 0)
        		{
        			this.hscrollbar.set_pos(0);
        		}
        		//trace("2222 this.hscrollbar.pos : " + this.hscrollbar.pos);
        	}

        	trace("[frHome_D_onsize] objApp.MAIN_HOME.width : " + this.objApp.MAIN_HOME.width + " objApp.MAIN_HOME.height: " + this.objApp.MAIN_HOME.height);

        	var scrnWidth = this.divScrn.form.getLayoutInfo("default", "width");
        	var scrnHeight = this.divScrn.form.getLayoutInfo("default", "height");

        	var totWidth = this.getOwnerFrame().width;
        	var totHeight = this.getOwnerFrame().height;

        	this.set_width(totWidth);
        	this.set_height(totHeight);

        	var left = (totWidth - scrnWidth) / 2;
        	trace("totWidth : " + totWidth + " scrnWidth : " + scrnWidth + " left: " + left + " totHeight: " + totHeight + " scrnHeight : " + scrnHeight);

        	this.divBottom.set_width(0);
        	this.resetScroll();

        	if(left >= 0)
        	{
        		trace("if");
        		this.divScrn.set_left(left);

        		var scroll = 0;
        		if(this.vscrollbar)	scroll = this.vscrollbar.max;
        		trace("scroll : " + scroll);
        		if(scroll > 0)
        		{
        			this.divBottom.set_width(this.getOwnerFrame().width - 15);
        		}
        		else
        		{
        			this.divBottom.set_width(this.getOwnerFrame().width);
        		}
        	}
        	else
        	{
        		trace("else");
        		this.divScrn.set_left(0);
        		//this.divBottom.set_width(1920);
        		var scroll = 0;
        		if(this.vscrollbar)	scroll = this.vscrollbar.max;

        		trace("scroll : " + scroll);
        		if(scroll > 0)
        		{
        			this.divBottom.set_width(1920 - 15);
        		}
        		else
        		{
        			this.divBottom.set_width(1920);
        		}
        	}

        	//this.resetScroll();

        	var add = this.hscrollbar.max;
        	trace("this.getOwnerFrame().width : " + this.getOwnerFrame().width + " this.width : " + this.width + " this.divScrn.left : " + this.divScrn.left + " this.divScrn.width : " + this.divScrn.width + " this.divBottom.width : " + this.divBottom.width + " add : " + add);
        	//this.divBottom.set_width(this.divScrn.set_width - this.getOwnerFrame().width);

        	if(nexacro.toNumber(this.divScrn.height) + nexacro.toNumber(this.divBottom.height) > totHeight)
        	{
        		this.divBottom.set_bottom(null);
        		this.divBottom.set_height(52);
        		this.divBottom.set_top(this.divScrn.height);
        	}
        	else
        	{
        		this.divBottom.set_top(null);
        		this.divBottom.set_height(52);
        		this.divBottom.set_bottom(0);
        	}

        	this.resetScroll();

        	this.objApp.MAIN_HOME.form.resetScroll();

        	// 폼 로드 시 필요한 기술사항은 this.fnInit에서 기술할 것.
        	//trace("workArea form init call :: WebSocketTest");
        	//this.objApp.connect(this.objApp.MAIN_HOME.form);	//연결
        };

        this.btn00_onclick = function(obj,e)
        {
        	var scrnWidth = this.divScrn.form.getLayoutInfo("default", "width");
        	var scrnHeight = this.divScrn.form.getLayoutInfo("default", "height");
        	var left = (this.getOwnerFrame().width - scrnWidth) / 2;

        	trace("left : " + left);
        	trace("this.getOwnerFrame().width : " + this.getOwnerFrame().width);
        	trace("this.getOwnerFrame().height : " + this.getOwnerFrame().height);
        	trace("this.width : " + this.width);
        	trace("this.height : " + this.height);
        	trace("this.divScrn.width : " + this.divScrn.width);
        	trace("this.divScrn.height : " + this.divScrn.height);
        	if(this.hscrollbar)
        	{
        		trace("this.hscrollbar.max : " + this.hscrollbar.max);
        	}
        	if(this.vscrollbak)
        	{
        		trace("this.vscrollbak.max : " + this.vscrollbak.max);
        	}
        	trace("this.divBottom.width : " + this.divBottom.width);
        	trace("this.divBottom.height : " + this.divBottom.height);
        };

        this.frHome_D_onrbuttonup = function(obj,e)
        {
        	if(e.ctrlkey && e.shiftkey) this.btn00.set_visible(!this.btn00.visible);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.frHome_D_onsize,this);
            this.addEventHandler("onrbuttonup",this.frHome_D_onrbuttonup,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("frHome.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
