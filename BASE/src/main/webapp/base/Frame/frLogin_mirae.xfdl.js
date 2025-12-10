(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("loginFrame");
            this.set_scrolltype("none");
            this.set_titletext("LOGIN");
            this.getSetter("scrollbars").set("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,937);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MADW_TK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","36.98%","10.67%","500","735",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_boxShadow("5px 5px 30px #888888");
            obj.set_cssclass("div_LG_bg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId","80","446","120","24",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("아이디저장");
            obj.set_iconPosition("left");
            obj.set_font("12px/normal \"NanumSquareR\",\"KoPub돋움체_Pro Medium\"");
            obj.set_borderRadius("10px");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnMpassLogin","80.00","chkSaveId:20","135","64",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LG_login_MIRAE_T");
            obj.set_text("     통합인증");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static00","btnMpassLogin:5","502",null,"54","80",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_text("※ 비밀번호\r\n - 직원 : WeMB OTP\r\n - 외주 : 메신저(Mi-SQUARE) 비밀번호");
            obj.set_verticalAlign("top");
            obj.set_font("12px/normal \"NanumSquareR\",\"KoPub돋움체_Pro Medium\"");
            obj.set_borderRadius("10px");
            obj.set_wordSpacing("0.5px");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("stcUrl","278","501",null,"15","80",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_color("red");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_text("WeMB OTP 등록 안내");
            obj.set_textAlign("right");
            obj.set_verticalAlign("top");
            obj.set_font("12px/normal \"NanumSquareR\",\"KoPub돋움체_Pro Medium\"");
            obj.set_wordSpacing("0.5px");
            this.divLogin.addChild(obj.name, obj);

            obj = new Div("divLoginImg","0%","0",null,"330","0",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_LG_loginImg_MIRAE");
            obj.set_tabstop("false");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("test","40.00","26","150","25",null,null,null,null,null,null,this.divLogin.form.divLoginImg.form);
            obj.set_taborder("0");
            obj.set_color("white");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_text("SSO TEST LINK");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_visible("false");
            this.divLogin.form.divLoginImg.addChild(obj.name, obj);

            obj = new Static("btnPassLogin","10.00","6","150","25",null,null,null,null,null,null,this.divLogin.form.divLoginImg.form);
            obj.set_taborder("1");
            obj.set_color("white");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_text("OTP / LDAP  LOGIN TEST");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_visible("false");
            this.divLogin.form.divLoginImg.addChild(obj.name, obj);

            obj = new Edit("edtUserId","80","divLoginImg:0",null,"48","80",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디를 입력하세요");
            obj.set_cssclass("edt_LG_input");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserPw","80","edtUserId:10",null,"48","80",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("비밀번호를 입력하세요");
            obj.set_cssclass("edt_LG_input");
            obj.set_autoselect("true");
            obj.set_maxlength("64");
            obj.set_password("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnPassLogin","80","576",null,"65","80",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LG_login_MIRAE");
            obj.set_text("Login");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","370.00","447","50","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("Dev");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form.divLoginImg.form
            obj = new Layout("default","",0,0,this.divLogin.form.divLoginImg.form,function(p){});
            this.divLogin.form.divLoginImg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

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
        this.registerScript("frLogin_mirae.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 공통
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통
        * 작성자		︰ 홍길동
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자			이력
        *------------------------------------------------------------------
        * 2023.04.06	홍길동				최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.isAuthenticated = "";
        this.objApp = nexacro.getApplication();
        this.initFlag = true;	// 최초sessionc체크 구분용 flag
        this.logoutBtnYn = "";
        this.adFailCnt = 0;		// OTP 인증 후 실패 메시지 출력
        this.limitTimeCnt = 0;	//누척 초(Second) 건수
        this.mpassYn = false;
        this.webSocket;	//웹소켓 전역변수 설정
        this.formObj;	//화면 전역변수 설정
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        //Form onload 이벤트
        this.loginFrame_onload = function(obj, e)
        {
        // 	trace(this.logoutBtnYn);
        	// 통합로그인 js include
        	//this.mPassLoad();

        	//var userId = Ex.util.getStoredItem('USERID_1111');
        	var userId = nexacro.getPrivateProfile('USERID_1111');

        	this.divLogin.form.edtUserId.setFocus();
        	if( !Ex.isEmpty(userId) ) {
        		this.divLogin.form.chkSaveId.set_value(true);
        		this.divLogin.form.edtUserId.set_value(userId);
        		this.divLogin.form.edtUserPw.setFocus();
        	}
        	// obj 전역변수 지정
        	this.formObj = obj;

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
        		if(sSvcId != "sessCheck")
        		{
        			Ex.core.error(this, {id:"ERROR", msg:sSvcId+"\n"+sErrorMsg} );
        			return;
        		}
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		// 로그인
        		case "login" :
        			// 로그인 후처리
        			if (this.isAuthenticated === "true" && this.objApp.gdsSession.rowcount > 0 )
        			{
        				nexacro.getApplication().gvIsSessionOut = "N";
        				if( this.divLogin.form.chkSaveId.value ) {
        					//Ex.util.setStoredItem("USERID_"+"1111", this.divLogin.form.edtUserId.value );
        					nexacro.setPrivateProfile("USERID_"+"1111", this.divLogin.form.edtUserId.value );
        				} else {
        					nexacro.removePrivateProfile("USERID_"+"1111");
        				}
        				this.fnSelectUserMenu();
                    }
        			else
        			{
        				var param = {id : "pLoginError", msg : "ID 또는 비밀번호를 확인해 주세요."};
        				Ex.core.error(this, param);
        				return;
        			}
                    break;

        		case "adLogin" :
        			// 로그인 후처리
        			if (this.isAuthenticated === "true" && this.objApp.gdsSession.rowcount > 0 )
        			{
        				nexacro.getApplication().gvIsSessionOut = "N";
        				if( this.divLogin.form.chkSaveId.value ) {
        					//Ex.util.setStoredItem("USERID_"+"1111", this.divLogin.form.edtUserId.value );
        					nexacro.setPrivateProfile("USERID_"+"1111", this.divLogin.form.edtUserId.value );
        				} else {
        					nexacro.removePrivateProfile("USERID_"+"1111");
        				}
        				this.fnSelectUserMenu();
                    }
        // 			else
        // 			{
        // 				var param = {id : "pLoginError", msg : "OTP 인증이 ["+ (++this.adFailCnt) +"] 회 실패 되었습니다. \n[10] 회 실패시 계정이 잠깁니다."};
        // 				Ex.core.error(this, param);
        // 				return;
        // 			}
                    break;
        		// 통합인증 로그인 시도
        		case "loginM" :
        			// 로그인 후처리
        			if (this.isAuthenticated === "true" && this.objApp.gdsSession.rowcount > 0 )
        			{
        				nexacro.getApplication().gvIsSessionOut = "N";
        				if( this.divLogin.form.chkSaveId.value ) {
        					//Ex.util.setStoredItem("USERID_"+"1111", this.divLogin.form.edtUserId.value );
        					nexacro.setPrivateProfile("USERID_"+"1111", this.divLogin.form.edtUserId.value );
        				} else {
        					nexacro.removePrivateProfile("USERID_"+"1111");
        				}
        				this.fnSelectUserMenu();
                    }/*
        			else

        			{
        				var param = {id : "pLoginError", msg : "통합인증을 확인해 주세요."};
        				Ex.core.error(this, param);
        				return;
        			}
        			*/
                    break;



        		// 메뉴/즐겨찾기 메뉴 조회
        		case "selectUserMenu" :
        			// 인증 성공 && 메뉴 조회 성공이면 session object 생성
        			var o = Ex.util.makeSessionObject(this.objApp.gdsSession);
        			Ex.util.setSession(o);
        			console.log("get Session :::", Ex.util.getSession("gvUserId"))
        			this.objApp.afnSetFrame("HOME");
        			break;

        		// session check
        		case "sessCheck" :
        			//alert("this.logoutBtnYn : " + this.logoutBtnYn);
        			if( nexacro.getApplication().gdsSession.rowcount == 0 )
        			{
        				nexacro.getApplication().gvIsSessionOut = "Y";
        				trace('session invalid - go Login');
        				if(this.initFlag == false) {
        					Ex.core.error(this, {id:"sessionOut", msg:'10007'} );
        					return;
        				}
        				else
        					this.fnMsgAfter('sessionOut', true);


        				try{
        				if( ajaxFunction('GetStatus') == "OK")	this.mpassYn = true;
        				}
        				catch(e){
        					this.mpassYn = false;
        				}
        				this.divLogin.form.btnMpassLogin.set_enable(this.mpassYn);

        				if(this.logoutBtnYn != "Y")
        				{
        					if(this.mpassYn) this.setTimer(1, 1000); // 자동실행 - 통합인증 로그인
        				}

        				trace("[sessCheck - go Login] this.mpassYn : " +this.mpassYn);
        			}
        			else {
        				nexacro.getApplication().gvIsSessionOut = "N";
        				trace('session valid - go Home');
        				this.fnSelectUserMenu();
        			}

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
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        	case "pLoginId" :
        		this.divLogin.form.edtUserId.setFocus();
        		break;
        	case "pLoginPass" :
        		this.divLogin.form.edtUserPw.setFocus();
        		break;
        	case "sessionOut" :
        		if(this.initFlag == true) this.initFlag = false;	// 초기세션플래그 갱신
        		this.objApp.afnSetFrame('LOGIN');

        		break;
        	default:
        		break;
        	}
        }




        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        //mpass 통합로그인 js
        /*
        this.mPassLoad = function()
        {
        	if(nexacro._Browser != "Runtime") {
        		if (!document.getElementById("userscript"))
        		{
        			var includejsJquery = document.createElement("script");
        			includejsJquery.src= './js/jquery.min.js';
        			includejsJquery.type = 'text/javascript';
        			document.head.appendChild(includejsJquery);

        			var includejs = document.createElement("script");
        			includejs.src = "./js/login.js";
        			includejs.type = 'text/javascript';

        			includejs.id = "loginScript";
        			includejs.ownerForm = this;
        			document.head.appendChild(includejs);
        			includejs.onload = this.onloadIncludeJS;
        			console.log("mPAss Laod");
        		}
        	}
        };
        */

        this.onTimer = function(obj,e)
        {
        	if(this.limitTimeCnt == 120)
        		{
        			this.killTimer(1);
        			var param = {id : "pMpassLogin", msg : "통합인증 시간이 초과되었습니다."};
        			Ex.core.alert(this, param);
        		}


        	if (e.timerid == 1){

        		try {
        			var mPassId = startLogin();

        			if(mPassId){
        				this.killTimer(1);
        				//this.divLogin.form.edtUserId.set_enable(false);
        				//this.divLogin.form.edtUserPw.set_enable(false);
        				this.fnMpassLogin();
        			}
        			else
        				console.log(" 진입 - 통합인증 시도 중 ");

        		}catch(e){
        			console.log("error");
        		}

        	}

        	else if (e.timerid == 0){

        		var mPassId = callAuth();
        		if(mPassId.get("USER_ID"))
        		{
        			this.killTimer(0);
        			this.fnMpassLogin();
        		}
        		else if(mPassId.get("STATUS") == -1){
        			this.killTimer(0);
        			var param = {id : "pMpassLoginCANCLE", msg : "통합인증을 취소하였습니다."};
        			Ex.core.alert(this, param);
        			this.divLogin.form.set_enable(true);
        		}

        	}

        	this.limitTimeCnt++;

        };
        //mpass 통합로그인
        this.fnMpassLogin = function()
        {
        	this.divLogin.form.set_enable(false);

        	var mPassId = startLogin();
        	if(mPassId.get("USER_ID") == null)
        	{
        		this.divLogin.form.set_enable(true);

        		switch(mPassId.get("STATUS")) {

        		case  "RETRY" :
        			var param = {id : "pMpassLoginRETRY", msg : "잠시 후 다시 통합인증을 시도해 주시기 바랍니다."};
        			Ex.core.alert(this, param);
        			break;

        		case "EMERGENCY" :
        			var param = {id : "pMpassLoginEMERGENCY", msg : "통합인증 서버에 장애가 발생하였습니다."};
        			Ex.core.alert(this, param);
        			break;

        		case "OK" :
        			this.divLogin.form.set_enable(false);
        			this.setTimer(0, 1000);
        			break;

        		case "FAIL" :
        			var param = {id : "pMpassLoginFAIL", msg : "통합인증 클라이언트 프로그램이 PC 에 설치되지 않았거나,\n잠시 후 다시 시도해 주십시요"};
        			Ex.core.alert(this, param);
        			break;

        		default:
        		}
        	}
        	this.divLogin.form.edtUserId.set_value(mPassId.get("USER_ID"));
        	this.dsLogin.setColumn(0, 'USER_ID', mPassId.get("USER_ID"));
        	this.dsLogin.setColumn(0, 'FLAG', mPassId.get("whocall"));
        	this.dsLogin.setColumn(0, 'MADW_TK', mPassId.get("MADW_TK"));

        	if( !Ex.isEmpty(this.dsLogin.getColumn(0,'USER_ID')))
        	{
        		// transaction
        		var sTranId = "loginM";                		    // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "login";                         // 서비스명
        		var sInDs = "dsLogin=dsLogin";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "gdsSession=gdsSession";           // 서버에서 수신할 데이타셋
        		var sArg = "userId= passwd=";                   // 서버 @ParamVariable 인자와 맵핑됨

        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        };


        this.fnLogin = function(){

        	var sUserId = this.divLogin.form.edtUserId.value;
        	var sPassWd = this.divLogin.form.edtUserPw.value;

        	// ID/PW validation
        	if (Ex.isEmpty(sUserId))
        	{
        		var param = {id : "pLoginId", msg : "ID를 입력해 주십시오."};
        		Ex.core.alert(this, param);
        		return;
        	}

        	if (Ex.isEmpty(sPassWd))
        	{
        		var param = {id : "pLoginPass", msg : "비밀번호를 입력해 주십시오."};
        		Ex.core.alert(this, param);
        		return;
        	}

        	this.dsLogin.setColumn(this.dsLogin.rowposition, 'USER_ID', sUserId);
        	this.dsLogin.setColumn(this.dsLogin.rowposition, 'USER_PW', sPassWd);


         	// transaction
        	 var sTranId = "login";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	if( this.dsLogin.getColumn(0,"FLAG") == "PASS" )  sTranId = "adLogin"
             var sService = "login";                         // 서비스명
             var sInDs = "dsLogin=dsLogin";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
             var sOutDs = "gdsSession=gdsSession";           // 서버에서 수신할 데이타셋
             var sArg = "userId= passwd=";                   // 서버 @ParamVariable 인자와 맵핑됨
         	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 세션 확인
        this.fnSessCheck = function()
        {
        	trace('SPP initial Session Check');
        	var sTranId = "sessCheck";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "sessCheck";                         // 서비스명
            var sInDs = "";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "gdsSession=gdsSession";           	// 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 메뉴/즐겨찾기 메뉴 조회
        this.fnSelectUserMenu = function()
        {
        	var sTranId = "selectUserMenu";						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FommMenu/selectUserMenu";			// 서비스명
        	var sInDs = "dsCond=dsLogin";						// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "gdsMenu=gdsMenu gdsMyMenu=gdsMyMenu";	// 서버에서 수신할 데이타셋
        	var sArg = "";                   					// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        }
        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        this.btnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        	    case "divLoginImg":
        		    var chk = this.divLogin.form.divLoginImg.form.test.visible;
        		    if (e.ctrlkey && e.shiftkey && !chk) {
                        this.divLogin.form.divLoginImg.form.test.visible = true;
        				this.divLogin.form.divLoginImg.form.btnPassLogin.visible = true;
        			} else {
                        this.divLogin.form.divLoginImg.form.test.visible = false;
        				this.divLogin.form.divLoginImg.form.btnPassLogin.visible = false;
        			}
                    break;

        		case "btnLogin" :
        			this.dsLogin.setColumn(0,"FLAG","REV");
        			this.fnLogin();
        			break;

        		case "btnPassLogin" :
        			this.dsLogin.setColumn(0,"FLAG","PASS");
        			this.fnLogin();
        			break;

        		case "btnMpassLogin" :
        			this.fnMpassLogin();
        			break;
        	}
        }

        this.onKeyUp = function(obj,e)
        {	//trace("this.onKeyUp() e.keycode : " + e.keycode);
        	if(e.keycode == 13)
        	{
        		if(obj.id == "edtUserId")
        		{
        			this.divLogin.form.edtUserPw.setFocus();
        		}
        		else if(obj.id == "edtUserPw")
        		{
        			//TODO: 개발중, 삭제예정
        			this.dsLogin.setColumn(this.dsLogin.rowposition, 'FLAG', 'PASS');
        			this.fnLogin();
        		}
        	}
        };


        this.divLogin_stcUrl_onclick = function(obj,e)
        {
        	system.execBrowser("https://otp.wemb.com/");
        };

        this.divLogin_divLoginImg_test_onclick = function(obj,e)
        {
        	system.execBrowser("https://nitsm.wemb.co.kr/sso?callPage=ITSCOPE&originUserId=3&userId=3354950");
        	//system.execBrowser("http://127.0.0.1:8080/sso?callPage=ITSCOPE&originUserId=3&userId=3354950");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.loginFrame_onload,this);
            this.addEventHandler("ontimer",this.onTimer,this);
            this.divLogin.form.btnMpassLogin.addEventHandler("onclick",this.btnCommOnclick,this);
            this.divLogin.form.stcUrl.addEventHandler("onclick",this.divLogin_stcUrl_onclick,this);
            this.divLogin.form.divLoginImg.addEventHandler("onclick",this.btnCommOnclick,this);
            this.divLogin.form.divLoginImg.form.test.addEventHandler("onclick",this.divLogin_divLoginImg_test_onclick,this);
            this.divLogin.form.divLoginImg.form.btnPassLogin.addEventHandler("onclick",this.btnCommOnclick,this);
            this.divLogin.form.edtUserId.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divLogin.form.edtUserPw.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divLogin.form.btnPassLogin.addEventHandler("onclick",this.btnCommOnclick,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.btnCommOnclick,this);
        };
        this.loadIncludeScript("frLogin_mirae.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
