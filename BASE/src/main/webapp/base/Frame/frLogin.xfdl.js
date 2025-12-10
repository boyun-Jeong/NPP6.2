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
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MADW_TK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPwHist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMkeyCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdminAllowIp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoginRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","710.00","141","500","655",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_boxShadow("5px 5px 30px #888888");
            obj.set_cssclass("div_LG_bg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPw","60.00","458",null,"48","60",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("비밀번호를 입력하세요");
            obj.set_cssclass("edt_LG_input");
            obj.set_autoselect("true");
            obj.set_maxlength("64");
            obj.set_password("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId","60","edtUserPw:5","120","24",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("아이디저장");
            obj.set_iconPosition("left");
            obj.set_font("12px/normal \"NanumSquareR\",\"KoPub돋움체_Pro Medium\"");
            obj.set_borderRadius("10px");
            obj.set_value("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Div("divLoginImg","0.00%","0",null,"350","0",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/LG/nh-spp-login-visual.png\')");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("stcBi","20","20","214","22",null,null,null,null,null,null,this.divLogin.form.divLoginImg.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://NHSB_IMAGE_SET/LG/nh-spp-login-bi.png\') no-repeat center center");
            this.divLogin.form.divLoginImg.addChild(obj.name, obj);

            obj = new Edit("edtUserId","60.00","divLoginImg:50",null,"48","60",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디를 입력하세요");
            obj.set_cssclass("edt_LG_input");
            obj.set_inputfilter("space");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","60.00","edtUserPw:44",null,"65","60",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LG_login_MIRAE");
            obj.set_text("Login");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnSSOTest","318","513","120","32",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("SSO_TEST");
            obj.set_visible("false");
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
        this.addIncludeScript("frLogin.xfdl","lib::comSHA256.xjs");
        this.registerScript("frLogin.xfdl", function() {
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
        this.executeIncludeScript("lib::comSHA256.xjs"); /*include "lib::comSHA256.xjs"*/;

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

        this.loginSuccessFlag = false;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        //Form onload 이벤트
        this.loginFrame_onload = function(obj, e)
        {
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

        	//trace('test str :: ' + sha256_digest('Dnldpaql10@'));
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
        			//trace('fnCallback login >> this.isAuthenticated :: ' + this.isAuthenticated);
        			//trace('fnCallback login >> this.objApp.gdsSession.rowcount :: ' + this.objApp.gdsSession.rowcount);
        			// 로그인 후처리
        			if (this.isAuthenticated === "true" && this.objApp.gdsSession.rowcount > 0 )
        			{
        				var sUserId = this.objApp.gdsSession.getColumn(0, 'USER_ID')||'';
        				var PW_INIT_DT 	= this.objApp.gdsSession.getColumn(0, 'PW_INIT_DT')||'';
        				var PW_EXP_DT 	= this.objApp.gdsSession.getColumn(0, 'PW_EXP_DT')||'';
        				var USER_PW		= this.objApp.gdsSession.getColumn(0, 'USER_PW')||'';
        				var PASSWD_INCORRECT_CNT = this.objApp.gdsSession.getColumn(0, 'PASSWD_INCORRECT_CNT')||'0';
        				var MKEY_LOGIN_YN	= this.objApp.gdsSession.getColumn(0, 'MKEY_LOGIN_YN')||'N';
        				//trace('fnCallback login >> MKEY_LOGIN_YN :: ' + MKEY_LOGIN_YN);

        				// 아이디 저장
        				if( this.divLogin.form.chkSaveId.value ) {
        					//Ex.util.setStoredItem("USERID_"+"1111", this.divLogin.form.edtUserId.value );
        					nexacro.setPrivateProfile("USERID_"+"1111", sUserId );
        				} else {
        					nexacro.removePrivateProfile("USERID_"+"1111");
        				}


        				// login 후처리 validation ㄱㄱ
        				if( MKEY_LOGIN_YN == 'N' )
        				{
        					// PW 5회 틀림
        					if( PASSWD_INCORRECT_CNT >= 5 ) {
        						var param = {id : "pPasswdFail5Alert", msg : "비밀번호 <fc v='red'>5회</fc> 이상 불일치로 로그인 할 수 없습니다.\n관리자에게 문의하여 초기화해 주세요."};
        						Ex.core.alert(this, param);
        						this.fnKillSession("2");
        						return;
        					}

        					// PW 3개월 초기화 or Pw 초기화 상태(user_pw == user_id) or pw 초기일자 NULL
        					if( (Ex.util.today() > PW_EXP_DT) || Ex.isEmpty(PW_INIT_DT) ) {	//|| (sha256_digest(sUserId) == USER_PW)
        						Ex.core.popup(
        							this,											// <--- 팝업 실행 스코프
        							"popupChangePwd",								// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        							"comm::commChangePwd.xfdl",						// <--- 팝업창 오픈 Url
        							{
        								title : "비밀번호 변경",
        								pUserId : sUserId,
        								pShowInitBtnYn	: 'N'
        							},												// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"autosize"
        						);
        						return;
        					}

        					// 관리자 권한(SPP_ADM) 보유 시 FOMM_USER_ADMIN IP check
        					// fommAuthController > /login 참조
        // 					if( this.dsAdminAllowIp.rowcount == 1 ) {
        // 						//trace('fnCallback login >> 관리자 권한이 있습니다 - IP CHECK');
        // 						var ADMIN_IP_YN = this.dsAdminAllowIp.getColumn(0, 'ADMIN_IP_YN')||'Y';
        // 						//trace('fnCallback login >> 관리자 허용 IP :: ' + ADMIN_IP_YN);
        // 						if( ADMIN_IP_YN == 'N' ) {
        // 							var param = {id : "pAdminIpForbiddenAlert", msg : "관리자 권한 계정은 <fc v='red'>지정된 IP</fc>에서만 접속 가능합니다."};
        // 							Ex.core.alert(this, param);
        // 							this.fnKillSession("1");
        // 							return;
        // 						}
        // 					}
          				}

        				// 로그인 최종 성공 >> 다음 진행
        				this.loginSuccessFlag = true;
        				nexacro.getApplication().gvIsSessionOut = "N";
        				this.fnLoginAfter();
        				this.fnSelectUserMenu();
                    }
        			else
        			{
        				var param = {id : "pLoginError", msg : "비밀번호가 일치하지 않습니다."};
        				Ex.core.error(this, param);
        				return;
        			}
                    break;

        		// 메뉴/즐겨찾기 메뉴 조회
        		case "selectUserMenu" :
        			// 인증 성공 && 메뉴 조회 성공이면 session object 생성
        			var o = Ex.util.makeSessionObject(this.objApp.gdsSession);
        			Ex.util.setSession(o);
        			//console.log("get Session :::", Ex.util.getSession("gvUserId"))
        			this.objApp.afnSetFrame("HOME");
        			break;

        		// session check
        		case "sessCheck" :
        			//alert("this.logoutBtnYn : " + this.logoutBtnYn);
        			trace('외부호출 확인 중....');
        			// URL PARAMETER CALL_SCRN 있으면 외부 호출로 간주하고 Frame::frInterface.xfdl 화면 띄움
        			if( this.fnCheckInfCall(window.location.search) )	return;

        			//trace('일반 session 진행');
        			this.divLogin.set_visible(true);
        			if( nexacro.getApplication().gdsSession.rowcount == 0 )
        			{
        				nexacro.getApplication().gvIsSessionOut = "Y";
        				//trace('session invalid - go Login');
        				if(this.initFlag == false)
        				{
        					Ex.core.error(this, {id:"sessionOut", msg:'10007'} );
        					return;
        				}
        				else	this.fnMsgAfter('sessionOut', true);
        			}
        			else
        			{
        				nexacro.getApplication().gvIsSessionOut = "N";
        				//trace('session valid - go Home');
        				this.fnSelectUserMenu();
        			}
        			break;

        		case "ssoTest" :
        			if(this.dsLoginRtn.getColumn(0, "SUCC_YN") == "Y")
        			{
        				nexacro.getApplication().gvIsSessionOut = "N";
        				location.href = this.objApp.gvHost + 'spp/index.html';
        			}
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{
        		case "popupChangePwd" :		// 비밀번호 만료로 변경 팝업 이후 > 무조건 재로그인
        			nexacro.getApplication().gvIsSessionOut = "Y";
        			location.href = this.objApp.gvHost + 'logout';
        			break;
        	}
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
        		alert("this.initFlag : " + this.initFlag);
        		if(this.initFlag == true) this.initFlag = false;	// 초기세션플래그 갱신
        		this.objApp.afnSetFrame('LOGIN');
        		break;
        	case "pPasswdFail5Alert" :
        		nexacro.getApplication().gvIsSessionOut = "Y";
        		location.href = this.objApp.gvHost + 'logout';
        		break;
        	}
        }

        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        this.fnLogin = function()
        {
        	var sUserId = this.divLogin.form.edtUserId.value;
        	var sPassWd = this.divLogin.form.edtUserPw.value;
        	var mKey = this.dsMkeyCd.getColumn(0, 'ITM_VAL_2')||'';

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

        	// 최초로그인 ID == 사번 처리용
        	if( sPassWd == sUserId )
        		this.dsLogin.setColumn(this.dsLogin.rowposition, 'USER_PW_ORG', sPassWd);
        	else
        		this.dsLogin.setColumn(this.dsLogin.rowposition, 'USER_PW_ORG', '');

        	sPassWd = sha256_digest(sPassWd);	// comSHA256	암호화
        	this.dsLogin.setColumn(this.dsLogin.rowposition, 'USER_PW', sPassWd);



        	this.loginSuccessFlag = false;
        	this.dsAdminAllowIp.clearData();	// 관리자권한(SPP_ADM) 보유 시 IP check 결과

         	// transaction
        	var sTranId = "login";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	if( this.dsLogin.getColumn(0,"FLAG") == "PASS" )  sTranId = "adLogin"
            var sService = "login";                         // 서비스명
            var sInDs = "dsLogin=dsLogin";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "gdsSession=gdsSession dsAdminAllowIp=dsAdminAllowIp";           // 서버에서 수신할 데이타셋
            var sArg = "userId= passwd=";                   // 서버 @ParamVariable 인자와 맵핑됨
         	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnKillSession = function(gubun)
        {
        	//trace("this.fnKillSession() gubun : " + gubun);
        	var sTranId = "killSession";	// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "killSession";   // 서비스명
            var sInDs = "";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";				// 서버에서 수신할 데이타셋
            var sArg = "";					// 서버 @ParamVariable 인자와 맵핑됨
         	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 로그인 성공 시 후처리
        this.fnLoginAfter = function()
        {
        	var sTranId = "loginAfter";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "loginAfter";                         // 서비스명
            var sInDs = "dsLogin=dsLogin";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨
         	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 비번 틀릴 시
        this.fnAddPwFailCnt = function()
        {
        	var sTranId = "pwFailCnt";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "pwFailCnt";                         // 서비스명
            var sInDs = "dsLogin=dsLogin";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";           	// 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }



        // 세션 확인
        this.fnSessCheck = function()
        {
        	trace('SPP initial Session Check');
        	var sTranId = "sessCheck";              // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "sessCheck";             // 서비스명
            var sInDs = "";                  		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "gdsSession=gdsSession";   // 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨
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

        // url parameter에 CALL_SCRN 있으면 외부호출로 간주; return true;
        this.fnCheckInfCall = function(param)
        {
        	//this.divLogin.set_visible(true);

        	var KEY1 = 'CALL_SCRN';
        	if( !Ex.isEmpty(param) )
        	{
        		param = param.substr(1, param.length);		// 맨앞 ? 제거
        		// PARAM1 CALL_SCRN 확인
        		// CALL_SCRN 있으면 frInterface로 분기
        		//trace("param.indexOf(KEY1) : " + param.indexOf(KEY1));
        		if( param.indexOf(KEY1) == 0 )
        		{
        			trace('외부호출입니다. 화면으로 이동합니다. param:' + param);

        			var divInterface = new Div();
        			divInterface.set_async(false);
        			divInterface.init('divInterface', 40, 40, null, null, 40, 40);
        			divInterface.set_background('white');
        			this.addChild('divInterface', divInterface);
        			divInterface.show();

        			var sIdx = 'CALL_SCRN'.length+1;	// '=' 보정 +1
        			var eIdx = param.indexOf('&');
        			var CALL_SCRN = param.substring(sIdx, eIdx);
        			param = param.substr(eIdx+1, param.length);
        // 			trace('CALL_SCRN :: ' + CALL_SCRN);
        // 			trace('URL_PARAM :: ' + param);
        			// CALL_SCRN value에 따라 화면 url setting
        			var sUrl = '';
        			switch(CALL_SCRN)
        			{
        				case "CHM"			:	sUrl = 'chm::CHM0002_P.xfdl';	break;
        				case "frInterface"	:	sUrl = 'test::TEST2_W.xfdl';	break;
        			}
        			//trace('호출 화면 URL :: ' + sUrl);
        			if( Ex.isEmpty(sUrl) )
        			{
        				trace('frInterface >> fnSetDivUrl() >> 해당 화면이 없습니다.');
        			}
        			else
        			{
        				divInterface.set_url(sUrl);
        				divInterface.CALL_SCRN = CALL_SCRN;
        				divInterface.URL_PARAM = param;
        			}
        			this.objApp.afnSetFrame('LOGIN');
        			return true;
        		}
        	}
        	return false;
        }

        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        this.btnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btnLogin" :
        			this.dsLogin.setColumn(0,"FLAG","REV");
        			this.fnLogin();
        			break;
        	}
        }

        this.onKeyUp = function(obj,e)
        {
        	//trace("this.onKeyUp() e.keycode : " + e.keycode);
        	if(e.keycode == 13)
        	{
        		if(obj.id == "edtUserId")
        		{
        			this.divLogin.form.edtUserPw.setFocus();
        		}
        		else if(obj.id == "edtUserPw")
        		{
        			//TODO: 개발중, 삭제예정
        			//this.dsLogin.setColumn(this.dsLogin.rowposition, 'FLAG', 'PASS');
        			this.dsLogin.setColumn(0,"FLAG","REV");
        			this.fnLogin();
        		}
        	}
        };

        this.loginFrame_onbeforeclose = function(obj,e)
        {
        	if( nexacro.getApplication().gvIsSessionOut == 'Y' && !this.loginSuccessFlag )
        	{
        		var param = window.location.search;
        		var KEY1 = 'CALL_SCRN';
        		if( !Ex.isEmpty(param) )
        		{
        			param = param.substr(1, param.length);		// 맨앞 ? 제거
        			// PARAM1 CALL_SCRN 확인
        			// CALL_SCRN 있으면 frInterface로 분기
        			//trace("param.indexOf(KEY1) : " + param.indexOf(KEY1));
        			if( param.indexOf(KEY1) == 0 )
        			{
        			}
        			else
        			{
        				this.fnKillSession("3");
        			}
        		}
        	}
        };

        this.divLogin_divLoginImg_onclick = function(obj,e)
        {
        // 	if(e.ctrlkey) {
        // 		if(e.shiftkey)
        // 		{
        // 			Ex.core.popup(
        // 				this,								// <--- 팝업 실행 스코프
        // 				"_pTestPop",               	// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        // 				"comm::datasetList_nhsb.xfdl",             			// <--- 팝업창 오픈 Url
        // 				{
        // 					title : "test"
        // 				},									// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        // 				"width=1600,height=800,modeless=true"	// <--- width/height/modeless(프레임 처리 옵션)
        // 			);
        // 		}
        // 	}
        };

        this.divLogin_btn00_onclick = function(obj,e)
        {
        	this.dsLogin.clearData();
        	this.dsLogin.addRow();
        	this.dsLogin.setColumn(this.dsLogin.rowposition, 'USER_ID', this.divLogin.form.edtUserId.value);// 서비스명

        	var sTranId = "ssoTest";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "ssoTest";			// 서비스명
        	var sInDs = "dsLogin=dsLogin";      // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsLoginRtn=dsLoginRtn";					// 서버에서 수신할 데이타셋
        	var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        this.loginFrame_onrbuttonup = function(obj,e)
        {
        	if(e.ctrlkey && e.altkey && e.shiftkey)
        	{
        		this.divLogin.form.btnSSOTest.set_visible(!this.divLogin.form.btnSSOTest.visible);
        	}
        };

        this.loginFrame_onsize = function(obj,e)
        {
        	// left
        	if( e.cx + 40 < this.divLogin.getOffsetWidth() )
        		this.divLogin.set_left(20);
        	else
        		this.divLogin.set_left((e.cx - this.divLogin.getOffsetWidth())/2);

        	// top
        	if( e.cy + 40 < this.divLogin.getOffsetHeight() )
        		this.divLogin.set_top(20);
        	else
        		this.divLogin.set_top((e.cy - this.divLogin.getOffsetHeight())/2);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.loginFrame_onload,this);
            this.addEventHandler("onsize",this.loginFrame_onsize,this);
            this.addEventHandler("onbeforeclose",this.loginFrame_onbeforeclose,this);
            this.addEventHandler("onrbuttonup",this.loginFrame_onrbuttonup,this);
            this.divLogin.form.edtUserPw.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divLogin.form.divLoginImg.addEventHandler("onclick",this.divLogin_divLoginImg_onclick,this);
            this.divLogin.form.edtUserId.addEventHandler("onkeyup",this.onKeyUp,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.btnCommOnclick,this);
            this.divLogin.form.btnSSOTest.addEventHandler("onclick",this.divLogin_btn00_onclick,this);
        };
        this.loadIncludeScript("frLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
