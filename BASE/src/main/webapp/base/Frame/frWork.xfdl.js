(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workFrame");
            this.set_titletext("Work Frame");
            this.set_scrollbartype("auto auto");
            this.set_scrollbarsize("20");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,797);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","40.00","37",null,null,"40","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px solid yellow");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Div("divHeadLine","0","0",null,"37","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuHelp",null,"0","20",null,"40","0",null,null,null,null,this.divHeadLine.form);
            obj.set_taborder("4");
            obj.set_background("transparent url(\'theme://SPP_IMAGE_SET/WF/btn_WF_Help.png\') no-repeat right center");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            this.divHeadLine.addChild(obj.name, obj);

            obj = new Button("btnAddMyMenu",null,"0","30",null,"btnMenuHelp:0","0",null,null,null,null,this.divHeadLine.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite_off");
            this.divHeadLine.addChild(obj.name, obj);

            obj = new Static("stcNavi",null,"0","320",null,"btnAddMyMenu:0","0",null,null,null,null,this.divHeadLine.form);
            obj.set_taborder("1");
            obj.set_text("Menu Navigation");
            obj.set_font("12px \'KopubL\'");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_usedecorate("true");
            obj.set_padding("2px 0px 0px 0px");
            this.divHeadLine.addChild(obj.name, obj);

            obj = new Edit("edtNuiTest","500","3","400",null,null,"3",null,null,null,null,this.divHeadLine.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("fomm::FOMM0110_W.xfdl");
            obj.set_font("9 맑은 고딕");
            obj.set_textAlign("left");
            obj.set_border("2px solid green");
            obj.set_visible("false");
            this.divHeadLine.addChild(obj.name, obj);

            obj = new Static("stcFormSize","40","13","120","24",null,null,null,null,null,null,this.divHeadLine.form);
            obj.set_taborder("3");
            obj.set_text("0X0");
            obj.set_visible("false");
            this.divHeadLine.addChild(obj.name, obj);

            obj = new Div("divBottom","40","divWork:0",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("divWRight","divWork:0","0","40",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("divSRight","divWork:0","5","40",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("white");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHeadLine.form
            obj = new Layout("default","",0,0,this.divHeadLine.form,function(p){});
            this.divHeadLine.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWRight
            obj = new Layout("default","",0,0,this.divWRight.form,function(p){});
            this.divWRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSRight
            obj = new Layout("default","",0,0,this.divSRight.form,function(p){});
            this.divSRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frWork.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Work Frame
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.subPage;

        this.menuId;
        this.menuNm;

        this.minWidth 	= 1280;		// 가로 최소 form size
        this.minHeight	= 680;		// 세로 최소 form size
        this.nMargin 	= 40;		// from margin 업무화면 Margin(right, bottom) top은 마진처리 X, left는 따로 고정 처리
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.set_scrollbarsize(20);

        	this.divWork.form.vscrollbar.set_scrollbarsize(20);
        	this.divWork.form.vscrollbar.set_scrollindicatorsize(16);
        	this.divWork.form.hscrollbar.set_scrollbarsize(20);
        	this.divWork.form.hscrollbar.set_scrollindicatorsize(16);

        	var frame		= this.getOwnerFrame();

        	trace("frame.id : [ " + frame.id + "]");
        	trace("frame.parent.id : " + frame.parent.id);
        	trace("frame.parent.parent.id : " + frame.parent.parent.id);

        	this.menuId		= frame.info["menuId"]||'';
        	this.menuNm		= frame.info["menuNm"]||'';
        	var upMenuId	= frame.info["upMenuId"]||'';
        	var menuUrl		= frame.info["menuUrl"]||'';
        	var menuPath	= frame.info["menuPath"]||'';
        	var menuPathNm	= frame.info["menuPathNm"]||'';
        	var menuLv1Id	= frame.info["menuLv1Id"]||'';	// 대메뉴 id
        	var menuLv2Id	= frame.info["menuLv2Id"]||'';	// 중메뉴 id
        	var screenId	= frame.info["screenId"]||'';	// 화면ID

        	var readYn		= frame.info["readYn"]||'N';			// 메뉴 접근/조회 권한
        	var writeYn		= frame.info["writeYn"]||'N';			// 쓰기권한
        	var deleteYn	= frame.info["deleteYn"]||'N';			// 삭제권한
        	var exclDownYn	= frame.info["exclDownYn"]||'N';		// 엑셀다운권한
        	var reportPrntYn= frame.info["reportPrntYn"]||'N';		// 리포트출력권한
        	var fileUpYn	= frame.info["fileUpYn"]||'N';			// 파일업로드권한
        	var saveYn		= frame.info["saveYn"]||'N';			// 저장권한; 쓰기/삭제권한 중 하나라도 Y이면 Y
        	var adminYn		= frame.info["adminYn"]||'N';			// 관리자권한

        	var menuParamCd	= frame.info["menuParamCd"]||'';		// 메뉴 파라미터

        	var winId		= frame.info["winId"]||'';		// mdi ID


        	// NUI TEST setting
        	if( this.menuNm == "NUI TEST" && (this.objApp.gvRunMode == "L" || this.objApp.gvRunMode == "D") )
        	{
        		Ex.moveCenter(this, [this.divNuiTest]);
        		this.divHeadLine.form.edtNuiTest.set_visible(true);
        	}
        	else
        	{
        		if( Ex.util.isExistScrn(menuUrl) )
        		{
        			Ex.util.setWait(this , true);
        			this.divWork.form.id = "_PageForm";
        			this.divWork.form.menuInfo = frame.info;
        			this.divWork.set_url(menuUrl);
        			this.fnSaveUserLog(this.menuId, this.menuNm, menuUrl);	// 사용로그(메뉴접근) 추가
        		}
        		else
        		{
        			var param = {
        				  id	: "notExistScrnAlertI"						//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: this.menuNm + "\n[" + menuUrl + "] 파일이 존재하지 않습니다."	//메시지 내용
        				, arrparam : []										//메시지의 변수에 들어갈 실제값
        				, msgtype : "E"										//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	// navigation text setting
        	var tempStr =	menuPathNm.split(",").join("  >  ");
        		tempStr +=	' (' + screenId + ')';
        	var objStaticSize = nexacro.getTextSize(tempStr, this.divHeadLine.form.stcNavi.font);
        	var objmax = objStaticSize.nx + 50;
        	this.divHeadLine.form.stcNavi.set_width(objmax);
        	this.divHeadLine.form.stcNavi.set_text(tempStr);

        	// 즐겨찾기 아이콘 setting
        	this.fnSetFavoriteMenu(this.menuId);

        	this.fnFormOnSize(this.divWork.getOffsetWidth(), this.divWork.getOffsetHeight());
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
        		case "ABOUT" : // 서비스 ID
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "notExistScrnAlertI" :	//메뉴화면이 존재하지 않는 경우
        			this.objApp.MAIN_TAB.form.fnClose(this.objApp.MAIN_TAB.form.tabMain.tabindex);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnSetFavoriteMenu = function(menuId)
        {
        	var rowPos = this.objApp.gdsMyMenu.findRow("MENU_ID", menuId);
        	if( rowPos < 0 )
        		this.divHeadLine.form.btnAddMyMenu.set_cssclass("btn_WF_favorite_off");
        	else
        		this.divHeadLine.form.btnAddMyMenu.set_cssclass("btn_WF_favorite_on");
        }


        this.fnSaveUserLog = function(menuId, menuNm, menuUrl)
        {
        	// 사용로그(메뉴접금) insert
        	var sTranId = "saveUserLog";
        	var sService = "FommMenu/saveUserLog";
        	var sInDs = "";
        	var sOutDs = "";
        	var sArg = "MENU_ID='" + menuId + "' MENU_NM='" + menuNm + "' MENU_URL='" + menuUrl + "'";
        	Ex.core.tran(this.divWork.form, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnFormOnSize = function(nx, ny)
        {
        	trace("this.fnFormOnSize()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        	var workFrameW = nexacro.getApplication().mainframe.VFrameSetMain.FrameSetWork.width;
        	var workFrameH = nexacro.getApplication().mainframe.VFrameSetMain.FrameSetWork.height;

        	//trace("workFrameW : " + workFrameW + " nx : " + nx + " workFrameH : " + workFrameH + " ny : " + ny);

        	this.minWidth 	= 1280;		// 가로 최소
        	this.minHeight	= 680;		// 세로 최소
        	this.nMargin 	= 40;		// 업무화면 Margin(right, bottom) top은 마진처리 X, left는 따로 고정 처리

        	// 업무영역 가로 크기 limit
        	if(this.divWork.visible)
        	{
        		trace("this.divWork.visible");
        		this.divWRight.set_visible(true);
        		this.divSRight.set_visible(false);

        		if( workFrameW < this.minWidth)
        		{
        			this.divWork.set_right(null);
        			this.divWork.set_width(this.minWidth - (this.nMargin * 2));
        		}
        		else
        		{
        			this.divWork.set_width(null);
        			this.divWork.set_right(this.nMargin);
        		}

        		// 업무영역 세로 크기 limit
        		if( workFrameH >= this.minHeight + this.nMargin )
        		{
        			this.divWork.set_height(null);
        			this.divWork.set_bottom(this.nMargin);
        		}
        		else
        		{
        			this.divWork.set_bottom(null);
        			this.divWork.set_height(this.minHeight - (nexacro.toNumber(this.divHeadLine.height) + this.nMargin));
        		}

        		if(this.objApp.gvRunMode == 'L') {
        			this.divHeadLine.form.stcFormSize.set_text((workFrameW - 80) + ' x ' + (workFrameH - 80));
        			this.divHeadLine.form.stcFormSize.set_visible(true);
        		}

        		this.divWRight.set_right(null);
        		this.divWRight.set_width(40);
        		this.divWRight.set_left(this.divWork.id + ":0");
        	}
        	else
        	{
        		this.divWork.set_width(null);
        		this.divWork.set_right(this.nMargin);
        		this.divWork.set_bottom(this.nMargin);
        		this.divWork.set_height(null);

        		this.divWRight.set_left(null);
        		this.divWRight.set_right(40);
        	}

        	// scroll reset
        	this.divWork.form.resetScroll();

        	var arrComp = this.components;
        	var subPage = "";

        	this.subPage = null;

        	for (var i=0; i<arrComp.length; i++)
        	{
        		if(arrComp[i] instanceof Div && arrComp[i].id.indexOf("_SUBPAGE") > -1)
        		{
        			subPage = arrComp[i];
        			this.subPage = subPage;
        			break;
        		}
        	}

        	if( !Ex.isEmpty(subPage) )
        	{
        		trace("!Ex.isEmpty(subPage)");
        		this.divWRight.set_visible(false);
        		this.divSRight.set_visible(true);

        		if( workFrameW <= this.minWidth)
        		{
        			subPage.set_right(null);
        			subPage.set_width(this.minWidth - (this.nMargin * 2));
        		}
        		else
        		{
        			subPage.set_width(null);
        			subPage.set_right(this.nMargin);
        		}

        		// 업무영역 세로 크기 limit
        		if( workFrameH >= this.minHeight + this.nMargin )
        		{
        			subPage.set_height(null);
        			subPage.set_bottom(this.nMargin);
        		}
        		else
        		{
        			subPage.set_bottom(null);
        			subPage.set_height(this.minHeight - (nexacro.toNumber(this.divHeadLine.height) + this.nMargin));
        		}

        		this.divSRight.set_right(null);
        		this.divSRight.set_width(40);
        		this.divSRight.set_left(subPage.getOffsetRight());

        		subPage.form.resetScroll();
        	}

        	this.resetScroll();

        	if( !Ex.isEmpty(subPage) )
        	{
        		if(subPage.form.fnSubPageResize)
        			subPage.form.fnSubPageResize(this.getOffsetHeight(), Ex.isEmpty(this.vscrollbar) ? 0 : this.vscrollbar.max, Ex.isEmpty(this.vscrollbar) ? 0 : this.vscrollbar.pos );
        	}
        }

        this.fnPopOnSize = function(nx, ny, formObj)
        {
        	var topFrame = this.objApp.MAIN_TOP;
        	var tabFrame = this.objApp.MAIN_TAB;
        	ny += topFrame.getOffsetHeight() + tabFrame.getOffsetHeight();

        	var arrPopFrame = nexacro.getPopupFrames();
        	for(var i = 0; i < arrPopFrame.length; i++)
        	{
        		var pop = arrPopFrame[i];
        		var popL = pop.getOffsetLeft();
        		var popT = pop.getOffsetTop();
        		var popW = pop.getOffsetWidth();
        		var popH = pop.getOffsetHeight();
        		var orgW = pop.callWidth||popW;		// 팝업 호출 당시 원본 width
        		var orgH = pop.callHeight||popH;	// 팝업 호출 당시 원본 height
        		var mOpenAlign	= pop.menualOpenAlign || 'auto';
        		var menualLeft	= pop.menualLeft || -1;
        		var menualTop	= pop.menualTop || -1;

        		var popMargin = 10;

        		var objStr = Ex.isEmpty(formObj) ? "" : formObj.toString().toUpperCase();
        		//trace("objStr ::: " + objStr);
        		if(objStr == "[OBJECT FORM]")
        		{
        			nexacro.getPopupFrames()[i].menualOpenAlign = 'auto';
        			nexacro.getPopupFrames()[i].menualLeft = -1;
        			nexacro.getPopupFrames()[i].menualTop = -1;

        			//trace("nexacro.getPopupFrames()[i].menualOpenAlign : " + nexacro.getPopupFrames()[i].menualOpenAlign);
        			//trace("nexacro.getPopupFrames()[i].menualTop : " + nexacro.getPopupFrames()[i].menualTop);
        			//trace("nexacro.getPopupFrames()[i].menualLeft : " + nexacro.getPopupFrames()[i].menualLeft);

        			mOpenAlign = nexacro.getPopupFrames()[i].menualOpenAlign;
        			menualTop = nexacro.getPopupFrames()[i].menualTop;
        			menualLeft = nexacro.getPopupFrames()[i].menualLeft;
        		}
        		//trace("mOpenAlign : " + mOpenAlign + " menualTop : " + menualTop + " menualLeft : " + menualLeft + " popL : " + popL + " popT : " + popT);

        		// size
        		if(nx - popMargin < orgW)	popW = nx - popMargin;
        		else	popW = orgW;

        		if(ny - popMargin < orgH)	popH = ny - popMargin;
        		else	popH = orgH;

        		// pos
        		if( nx > popW - popMargin)
        		{
        			if(mOpenAlign == "both" || mOpenAlign == "left")
        			{
        				popL = menualLeft;
        			}
        			else
        			{
        				popL =  parseInt( (nx / 2) - Math.round(popW / 2) );
        			}
        		}
        		else	popL = popMargin;

        		if( ny > popH + popMargin )
        		{
        			if(mOpenAlign == "both" || mOpenAlign == "top")
        			{
        				popT = menualTop;
        			}
        			else
        			{
        				popT =  parseInt( (ny / 2) - Math.round(popH / 2) );
        			}
        		}
        		else	popT = popMargin;

        		// move
        		pop.move(popL, popT, popW, popH);
        	}
        }


        // 활성화된 Frame setting
        this.fnActiveFrame = function()
        {
        	this.objApp.ACTIVE_WORK = this.getOwnerFrame();
        }

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
        this.fnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btnAddMyMenu" :	// 즐겨찾기 추가/삭제
        			var info	= this.getOwnerFrame().info;
        			var cssClass = obj.cssclass;
        			if( cssClass == "btn_WF_favorite_off" )	// 추가
        			{
        				info.myMenuCreate = "Y";
        				obj.set_cssclass("btn_WF_favorite_on");
        			}
        			else		// 삭제
        			{
        				info.myMenuCreate = "N";
        				obj.set_cssclass("btn_WF_favorite_off");
        			}
        			this.objApp.MAIN_TOP.form.fnSetMyMenu(info);

        			break;

        		case "btnMenuHelp" :
        			var gdsMenu = this.objApp.gdsMenu;
        			var menuRow = gdsMenu.findRow('MENU_ID', this.menuId);
        			trace(menuRow);
        			if( menuRow < 0 )
        				return;

        			var menuHelpYn = gdsMenu.getColumn(menuRow, 'MENU_HELP_YN')||'N';
        			trace('menuHelpYn :: ' + menuHelpYn);
        			if( menuHelpYn == 'N' ) {
        				var oParam = {
        					id : "helpNullAlert"
        				  , msg : "도움말이 없습니다."
        				  , arrparam : []
        				  , msgtype : "I"
        				};
        				Ex.core.alert(this, oParam);
        				return;
        			}

        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"menuHelpPop",					// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0000_P03.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "도움말",
        					pMenuId	: this.menuId,
        					pMenuNm : this.menuNm,
        					pReadOnly	: true
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;
        	}
        };

        this.form_onsize = function(obj, e)
        {
        	//this.fnFormOnSize(e.cx-40, e.cy-40);
        	this.fnFormOnSize(e.cx, e.cy);

        	trace("e.fromobject : " + e.fromobject);
        	this.fnPopOnSize(e.cx, e.cy, e.fromobject);
        }
        this.form_onactivate = function(obj, e)
        {
        	this.fnActiveFrame();
        }

        // 화면 개발 test용 edit enter key
         this.edtNuiTest_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13 )	// enter
        	{
        		var sUrl = obj.value||'';
        		if( !Ex.isEmpty(sUrl) )
        		{
        			sUrl = nexacro.trim(sUrl);
        			sSuffix = Ex.util.getRightStr(sUrl,5);

        			if( sUrl.indexOf("::") > -1 && sSuffix == ".xfdl" )
        			{
        				this.divWork.set_url("");
        				this.divWork.set_url(sUrl);

        				this.fnFormOnSize(this.divWork.getOffsetWidth(), this.divWork.getOffsetHeight());
        			}
        		}
        	}
        }

        this.form_onvscroll = function(obj,e)
        {
        	if( !Ex.isEmpty(this.subPage) )
        	{
        		this.subPage.form.fnSubPageResize(this.getOffsetHeight(), Ex.isEmpty(this.vscrollbar) ? 0 : this.vscrollbar.max, e.pos );
        	}
        };

        this.stcOnrButtonUp = function(obj,e)
        {
        	var text = nexacro.replaceAll(this.divHeadLine.form.stcNavi.text, " ", "");
        	text = nexacro.replaceAll(text, ">", " > ");
        	Ex.util.copyClipBoard(text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onclose",this.workFrame_onclose,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onbeforeclose",this.workFrame_onbeforeclose,this);
            this.addEventHandler("onkeydown",this.form_onkeydown,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divHeadLine.form.btnMenuHelp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divHeadLine.form.btnAddMyMenu.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divHeadLine.form.stcNavi.addEventHandler("onrbuttonup",this.stcOnrButtonUp,this);
            this.divHeadLine.form.stcNavi.addEventHandler("onclick",this.divHeadLine_stcNavi_onclick,this);
            this.divHeadLine.form.edtNuiTest.addEventHandler("onkeydown",this.edtNuiTest_onkeydown,this);
        };
        this.loadIncludeScript("frWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
