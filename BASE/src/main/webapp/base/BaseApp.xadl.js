(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsSession", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"256\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL1\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL2\" type=\"string\" size=\"32\"/><Column id=\"LVL1_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"LVL2_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsUsedMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"256\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL1\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL2\" type=\"string\" size=\"32\"/><Column id=\"LVL1_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"LVL2_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsReqMenuAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"READ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_UP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsWord", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsFommAgencyInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsInDs", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOutDs", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsSvcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DS\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvIsDebug","Y");
            this._addVariable("gvIsSessionOut","Y");
            this._addVariable("gvRtnMsg","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("BaseApp");
            this.set_screenid("screen01");
            this.set_licenseurl("svc_url::");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1600","900",null,null,this);
            mainframe.getSetter("title").set("maintitle");
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.getSetter("position1").set("absolute 0 0 800 800");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSetMain",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0,0,0,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("frLogin",null,null,null,null,null,null,"Frame::frLogin.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::frLogin.xfdl");


            var frame2 = new ChildFrame("frTop",null,null,null,null,null,null,"",frame0);
            frame2.set_showtitlebar("false");
            frame2.set_dragmovetype("none");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("frTabMain",null,null,null,null,null,null,"",frame0);
            frame3.set_dragmovetype("none");
            frame3.set_showtitlebar("false");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("frHome",null,null,null,null,null,null,"",frame0);
            frame4.set_showtitlebar("false");
            frame4.set_openstatus("normal");
            frame4.set_dragmovetype("none");
            frame0.addChild(frame4.name, frame4);

            var frame5 = new FrameSet("FrameSetWork",null,null,null,null,null,null,frame0);
            frame0.addChild(frame5.name, frame5);
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.application_onload,this);
            this.addEventHandler("onloadforms",this.application_onloadforms,this);
            this.addEventHandler("onerror",this.application_onerror,this);
            this.addEventHandler("onbeforeexit",this.application_onbeforeexit,this);
        };
        
        // script Compiler
        this.registerScript("BaseApp.xadl", function() {
        this.application_onload = function(obj,e)
        {
        	var objEnv 	= nexacro.getEnvironment();
        	var objSvcs = objEnv.services;
        	var objApp 	= nexacro.getApplication();

        	var svcUrl = nexacro.replaceAll(objApp.xadl, "base/BaseApp.xadl.js", "");
        	trace("xadl // svcUrl :: " + svcUrl);

        	var svUrl = nexacro.replaceAll(objApp.xadl, "", "");

        	//if(svUrl.indexOf("localhost") > -1 || svUrl.indexOf("127.0.0.1") > -1 || svUrl.indexOf("http://") > -1)
        	//{
        		for(var i=0; i<objEnv.services.length; i++)
        		{
        			if(objEnv.services[i].type == "form")
        			{
        				if(objEnv.services[i].cachelevel != "none")
        				{
        					//trace(" service type:[" + objEnv.services[i].type + "] id:[" + objEnv.services[i].prefixid + "] cachelevel \"" + objEnv.services[i].cachelevel + "\" → \"none\" Change");
        					objEnv.services[i].set_cachelevel("none");
        				}
        			}
        		}
        	//}

        	objApp.gvHost = "";
        	objApp.gvRunMode = "";

        	objSvcs["svc_url"].set_url(svcUrl);
        	objApp.gvHost = objSvcs["svc_url"].url;

        	// 세션객체생성
        	objApp._session_ = {};
        	// 3rd party lib load
        	if( window && window.document )
        	{
        	}

        	objApp.MAXCNT		= 15;	// 최대 mdi 개수
        	objApp.LOADCOUNT	= 0;
        	objApp.FRAMETYPE	= "INIT"; // frameType : default INIT

         	objApp.MAIN_FRAME	= objApp.mainframe.VFrameSetMain;
        	objApp.MAIN_LOGIN 	= objApp.mainframe.VFrameSetMain.frLogin;
         	objApp.MAIN_TOP  	= objApp.mainframe.VFrameSetMain.frTop;
         	objApp.MAIN_TAB		= objApp.mainframe.VFrameSetMain.frTabMain;
        	objApp.MAIN_HOME  	= objApp.mainframe.VFrameSetMain.frHome;
         	objApp.MAIN_WORK	= objApp.mainframe.VFrameSetMain.FrameSetWork;

        	objApp.ACTIVE_WORK = null;

        	var strMode = ""; // 로컬/개발/운영 구분
        	var strHost = objApp.gvHost;

        	if( strHost.indexOf("xxx.xxx.com") > -1 )	// 운영
        	{
        		objApp.gvRunMode = "P";
        		// 운영 적용 시 trace 출력 제거
        		objApp.gtrace = trace;
        		trace = function(){};
        	}

        	if(strHost.indexOf("nitsm.wemb.co.kr") > -1)			// 운영
        	{
        		strMode = "";
        		objApp.gvRunMode = "R";
        	}
        	else if(strHost.indexOf("nitsmdev.wemb.co.kr") > -1)	// 개발
        	{
        		strMode = "[개발] ";
        		objApp.gvRunMode = "D";
        	}
        	//else if(strHost.indexOf("localhost") > -1 || strHost.indexOf("127.0.0.1") > -1)		// 로컬
        	else
        	{
        		strMode = "[로컬] ";
        		objApp.gvRunMode = "L";
        	}
        	objApp.mainframe.set_titletext(strMode + "IT포털");


        };

        // frameType setter
        this.afnSetFrame = function(strFrameType)
        {
        	var objApp 	= nexacro.getApplication();

        	strFrameType = strFrameType||'';
        	if( Ex.isEmpty(strFrameType) ) return;

        	switch(strFrameType)
        	{
        		case "INIT" :
        			objApp.MAIN_LOGIN.form.fnSessCheck();
        			objApp.MAIN_FRAME.set_separatesize("0,0,0,0,0");	// login,top,tab,home,work
        			objApp.FRAMETYPE = "INIT";
        			objApp.ACTIVE_WORK = null;
        			break;
        		case "LOGIN":
        			objApp.MAIN_FRAME.set_separatesize("*,0,0,0,0");	// login,top,tab,home,work
        			objApp.FRAMETYPE = "LOGIN";
        			objApp.ACTIVE_WORK = null;
        			break;

        		case "HOME":
        			if( !Ex.isEmpty(objApp.MAIN_TAB.form.tabMain) ) {
        				var cnt = objApp.MAIN_TAB.form.tabMain.tabpages.length;
        				if( cnt > 0 ) {
        					for(var i = (cnt-1); i >= 0; i--)
        						objApp.MAIN_TAB.form.fnClose(i);
        				}
        			}

         			objApp.MAIN_TOP.set_formurl("Frame::frTop.xfdl");

        			objApp.MAIN_FRAME.set_separatesize("0,100,0,*,0");
        			objApp.FRAMETYPE = "HOME";
        			objApp.ACTIVE_WORK = null;

        			// Home화면 fnSearch 재호출
        			if(objApp.MAIN_HOME.form.fnActiveSearch) {
        				objApp.MAIN_HOME.form.fnActiveSearch();
        			}
        			break;

        		case "WORK":
        			objApp.MAIN_FRAME.set_separatesize("0,100,40,0,*");
        			objApp.FRAMETYPE = "WORK";
        			break;
        	}
        }

        // frameType getter
        this.afnGetFrameType = function()
        {
        	return nexacro.getApplication().FRAMETYPE;
        }



        this.application_onloadforms = function(obj,e)
        {
        	this.afnSetFrame('INIT');
        }

        this.application_onbeforeexit = function(obj,e)
        {
        	trace("nexacro.getApplication().gvIsSessionOut ::: " + nexacro.getApplication().gvIsSessionOut);
        	trace("Ex.util.getSession('gvUserId') : " + Ex.util.getSession('gvUserId'));
        	if(nexacro.getApplication().gvIsSessionOut == "N")
        	{
        		return false;
        	}
        }
        });
        this.checkLicense("svc_url::");
        
        this.loadPreloadList();

        this.loadIncludeScript("BaseApp.xadl");
    };
}
)();
