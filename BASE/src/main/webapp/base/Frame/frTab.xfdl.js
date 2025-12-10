(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("MDI Tab frame");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            this.getSetter("classname").set("MDI");
            this.getSetter("scrollbars").set("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staMdiBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TBF_mdiBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"8","56","23","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TBF_mdiAllX");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","40","0",null,null,"btnCloseAll:0","0",null,null,"40","40",this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_extrabuttonsize("20 20");
            obj.set_showextrabutton("true");
            obj.set_tabstop("false");
            obj.set_cssclass("tab_NHFIRE_mdi");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("frTab.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ MDI Frame
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
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
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
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환

        	switch(mID)
        	{
        		case "pSystemOpenMax" :
        			if(!varValue) {
        				nexacro.getApplication().gvTmpMenuParam = "";
        			} else {
        				var objParam = nexacro.getApplication().gvTmpMenuParam;
        				nexacro.getApplication().gvTmpMenuParam = "";
        				this.fnClose(0);
        				Ex.core.openMenu(objParam);
        			}
        			break;
        	}
        }
        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnOpenTab = function(param)
        {
        	var menuId 	= param.menuId;
        	var menuNm 	= param.menuNm;
        	var menuFrame 	= param.winId;

        	var tabCd = menuFrame;
        	var arr = this.tabMain.tabpages;

        	for(var i = 0; i < arr.length; i++)
        	{
        		if( arr[i].name == tabCd )
        		{
        			this.tabMain.set_tabindex(i);
        			return;
        		}
        	}

        	// 신규 생성..
        	var tabIdx = this.tabMain.insertTabpage(tabCd, -1, "", menuNm);
        	this.tabMain.set_tabindex(-1);
        	this.tabMain.set_tabindex(tabIdx);
        	var tabPage = this.tabMain.tabpages[tabIdx];

        	/*
        	var row = application.GDSOPENMENU.addRow();
        	application.GDSOPENMENU.setColumn(row,"menuId",menuId);
        	application.GDSOPENMENU.setColumn(row,"menuNm",menuNm);
        	application.GDSOPENMENU.setColumn(row,"menuFrame",menuFrame);
        	*/
        }

        this.fnClose = function(nIndex)
        {
        	if( Ex.isEmpty(nIndex) || nIndex < 0) return;
        	var page = this.tabMain.tabpages[nIndex];
        	var pname = page.name;

        	if( page )
        	{
        		var oChildFrame = this.objApp.MAIN_WORK.frames[pname];
        		if (oChildFrame != null) {
        			var bSucc = this.tabMain.removeTabpage(nIndex);
        			if( bSucc != -1 )
        				oChildFrame.form.close();
        		}
        	}

        	var cnt = this.tabMain.tabpages.length;
        	if( cnt == 0 ) {
        		this.objApp.afnSetFrame("HOME");
        	}
        }

        this.fnCloseAll = function()
        {
        	var cnt = this.tabMain.tabpages.length;
        	if( cnt == 0 ) {
        		this.objApp.afnSetFrame("HOME");
        		return;
        	}
        	for(var i = (cnt-1); i >= 0; i--)
        	{
        		this.fnClose(i);
        	}
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnCloseAll" :
        			this.fnCloseAll();
        			break;
        	}
        }

        this.tabMain_onchanged = function(obj, e)
        {
        // 	if( e.postindex == -1 )
        // 		return;
        //
        // 	var page = obj.tabpages[e.postindex];
        // 	var oChildFrame = this.objApp.MAIN_WORK.frames[page.name];
        // 	if (oChildFrame != null)
        // 		oChildFrame.setFocus();
        }

        this.tabMain_onextrabuttonclick = function(obj, e)
        {
        	this.fnClose(e.index);
        }


        this.tabMain_onlbuttondown = function(obj,e)
        {
        	var tabBtn;
        	if(e.fromreferenceobject == '[object TabButtonItemControl]' ) {
        		tabBtn = e.fromreferenceobject;
        	}
        	else if (e.fromreferenceobject == '[object StaticControl]') {
        		tabBtn = e.fromreferenceobject.parent;
        	}

        	// extrabutton 제외 이벤트 처리
        	if( tabBtn != '[object TabButtonItemControl]' )
        		return;


        	var tabIdx = obj.getIndex(e.clientx, e.clienty);
        	if( e.postindex == -1 )
        		return;

        	// set frmae type
        	var objApp = nexacro.getApplication();
        	if( objApp.afnGetFrameType() == 'HOME' ) {
        		objApp.afnSetFrame('WORK');
        	}

        	// open mdi
        	var page = obj.tabpages[tabIdx];
        	var oChildFrame = this.objApp.MAIN_WORK.frames[page.name];
        	if (oChildFrame != null)
        		oChildFrame.setFocus();


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnCloseAll.addEventHandler("onclick",this.fnCommOnclick,this);
            this.tabMain.addEventHandler("onchanged",this.tabMain_onchanged,this);
            this.tabMain.addEventHandler("onextrabuttonclick",this.tabMain_onextrabuttonclick,this);
            this.tabMain.addEventHandler("onlbuttondown",this.tabMain_onlbuttondown,this);
        };
        this.loadIncludeScript("frTab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
