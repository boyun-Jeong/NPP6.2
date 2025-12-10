(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commChangePwd");
            this.set_titletext("비밀번호 변경");
            this.getSetter("classname").set("commConfirmPwd");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNewPwInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_PW\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommUserPwChgHist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg01_00","20.00","53",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_01","20.00","86",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","20",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20.00","20","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기존 비밀번호");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_passwd","133.00","25","193","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("edt_WF_normal");
            obj.set_autoselect("true");
            obj.getSetter("validate").set("title:패스워드,required:true");
            obj.set_password("true");
            obj.set_imemode("alpha");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("기존 비밀번호;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20.00","53","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPasswd","Static07:5.00","58","193","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("edt_WF_normal");
            obj.set_autoselect("true");
            obj.getSetter("validate").set("title:새 패스워드,required:true");
            obj.set_password("true");
            obj.set_imemode("alpha");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("새 비밀번호;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","86","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_confirm","Static11:5.00","91","193","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("edt_WF_normal");
            obj.set_autoselect("true");
            obj.set_password("true");
            obj.set_imemode("alpha");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("확인 비밀번호;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("rgba(173,142,219,0.4)");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnReset",null,null,"100","32","230","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("rgba(173,142,219,0.4)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("rgba(173,142,219,0.4)");
            this.addChild(obj.name, obj);

            obj = new Static("stcDesc","20","stcBg01_01:10",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("<fc v=\'red\'>*</fc> 비밀번호 규칙\r\n- 영문 대/소문자, 숫자, 특수문자 각 1개 이상\r\n- 8자리 이상\r\n- 최근 3개 비밀번호 사용불가\r\n- ID 사용 불가");
            obj.set_font("12px \'KoPubL\'");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",350,270,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("commChangePwd.xfdl","lib::comSHA256.xjs");
        this.registerScript("commChangePwd.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	: commChangePwd
        * 화면(명)	: 패스워드 변경 팝업
        * 메뉴(경로)	: 현재 사용자 패스워드를 변경한다.
        * 화면 설명	:
        * 작성자		:
        * 작성일		:
        * 수정이력	: 2025.01.15
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2025.01.15	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::comSHA256.xjs"); /*include "lib::comSHA256.xjs"*/;


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.USER_ID;
        this.ORG_PW;
        this.pAdminYn;	// 관리자 화면에서 호출하는건지 여부
        this.pShowInitBtnYn = 'Y';	// 초기화  버튼  표기여부


        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.USER_ID	= this.getOwnerFrame().pUserId||'';
        	this.pAdminYn	= this.getOwnerFrame().pAdminYn||'N';
        	this.pShowInitBtnYn = this.getOwnerFrame().pShowInitBtnYn||'Y';

        	if( this.pShowInitBtnYn == 'Y' )
        		this.divBottom.form.btnReset.set_visible(true);


        	this.dsCond.setColumn(0, 'USER_ID', this.USER_ID);
        	this.fnGetUserInfo();	// 사용자 정보 조회
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 사용자 정보 조회
        this.fnGetUserInfo = function ()
        {
        	// transaction
        	var sTranId = "select01";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/select01";      // 서비스명
            var sInDs = "dsCond=dsCond";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommUserMt=dsFommUserMt dsFommUserPwChgHist=dsFommUserPwChgHist";   	// 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 미사용
        this.fnGetPwdCount = function ()
        {
        	this.ds_pwd.clearData();

        	var params = "";
        	params += Iject.Util.setParam("model", "commCheckPasswdDuplicated");

        	var svcId = "commCheckPasswdDuplicated";
        	var inDatasets = "";
        	var outDatasets = "ds_pwdCount=ds_pwdCount";
        	var argument = Iject.Util.setParam("pwd", nexacro.wrapQuote(sha256_digest(this.edt_newPasswd.value)));
        	var callbackFunc = "fn_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }


        this.fnChangePasswd = function()
        {
        	var ORG_PW = sha256_digest(this.edt_passwd.value||'');
        	var NEW_PW = sha256_digest(this.edt_newPasswd.value||'');

        	// data setting
        	this.dsNewPwInfo.setColumn(0, 'USER_ID', this.USER_ID);
        	this.dsNewPwInfo.setColumn(0, 'ORG_PW', ORG_PW);
        	this.dsNewPwInfo.setColumn(0, 'NEW_PW', NEW_PW);

        	// transaction
        	var sTranId = "changePw";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "/changePw";      // 서비스명
            var sInDs = "dsFommUserMt=dsNewPwInfo";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";   	// 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        	return true;
        }


        this.fnResetPasswd = function()
        {
        	var NEW_PW = sha256_digest(this.USER_ID);
        	this.dsNewPwInfo.setColumn(0, 'USER_ID', this.USER_ID);
        	this.dsNewPwInfo.setColumn(0, 'ORG_PW', this.ORG_PW);
        	this.dsNewPwInfo.setColumn(0, 'NEW_PW', NEW_PW);
        	this.dsNewPwInfo.setColumn(0, 'ADMIN_YN', this.pAdminYn);
        	trace('commChangePwd this.pAdminYn :: ' + this.pAdminYn);
        	trace(this.dsNewPwInfo.saveXML());
        	// transaction
        	var sTranId = "resetPw";               // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "/changePw";      // 서비스명
            var sInDs = "dsFommUserMt=dsNewPwInfo";            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";   	// 서버에서 수신할 데이타셋
            var sArg = "";                   		// 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        	switch(sSvcId)
        	{
        		case "select01" :
        			var USER_ID = this.dsFommUserMt.getColumn(0, 'USER_ID');
        			var USER_PW = this.dsFommUserMt.getColumn(0, 'USER_PW')||sha256_digest(USER_ID);		// 비번 null인 경우 > 최초로그인 > user_id를 pw로 간주

        			this.ORG_PW = USER_PW;
        			break;

        		case "changePw" :
        			var param = {
        						id : "saveAlert"
        					  , msg : "비밀번호가 변경 되었습니다."
        					  , arrparam : ['']
        					  , msgtype : "S"};
        				Ex.core.alert(this, param);
        			break;

        		case "resetPw" :
        			var param = {
        						id : "resetAlert"
        					  , msg : "비밀번호를 <fc v='red'>ID</fc>로 초기화 했습니다."
        					  , arrparam : ['']
        					  , msgtype : "S"};
        				Ex.core.alert(this, param);
        			break;

        		case "commCheckPasswdDuplicated" :
        			if(this.ds_pwdCount.getColumn(0, "PASSWD_COUNT") == 0)
        			{
        				var oldPwd = this.edt_passwd.value;
        				var newPwd = this.edt_newPasswd.value;
        				var confirmPwd = this.edt_confirm.value;
        				this.fn_changePasswd();
        			}
        			else
        			{
        				alert("최근에 사용된 비밀번호는 사용하실 수 없습니다. 다시 입력하여 주십시요.");
        				return;
        			}
        			break;

        		case "commChangePwd" :
        			Iject.logging(this.opener, "비밀번호 변경", "comm::commChangePwd.xfdl", "xfdl");
        			Iject.close(this, true);
        			break;

        		default :
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if( Ex.isEmpty(varValue) )	return;

        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "pSaveConfirm" :	// 선택 확인
        			this.fnChangePasswd();
        			break;

        		case "pResetConfirm" :
        			this.fnResetPasswd();
        			break;

        		case "saveAlert" :
        		case "resetAlert" :
        			Ex.core.pclose(this, 'save');
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCheckValidate = function()
        {
        	var OLD_PW = this.edt_passwd.value||'';		// 입력 기존 비번
        	var NEW_PW = this.edt_newPasswd.value||'';	// 입력 새 비번
        	var CNF_PW = this.edt_confirm.value||'';	// 입력 새 비번 확인

        	// 필수입력
        	if( Ex.isEmpty(OLD_PW) ) {
        		var oParam = {id : "oldPwAlert", msg : "기존 비밀번호를 입력해 주세요.", arrparam : [''], msgtype : "E"};
        		Ex.core.alert(this, oParam);
        		this.edt_passwd.setFocusRed();
        		return false;
        	}

        	if( Ex.isEmpty(NEW_PW) ) {
        		var oParam = {id : "oldPwAlert", msg : "새 비밀번호를 입력해 주세요.", arrparam : [''], msgtype : "E"};
        		Ex.core.alert(this, oParam);
        		this.edt_newPasswd.setFocusRed();
        		return false;
        	}

        	if( Ex.isEmpty(CNF_PW) ) {
        		var oParam = {id : "oldPwAlert", msg : "확인 비밀번호를 입력해 주세요.", arrparam : [''], msgtype : "E"};
        		Ex.core.alert(this, oParam);
        		this.edt_confirm.setFocusRed();
        		return false;
        	}


        	// ID == 사번
        // 	if( this.USER_ID == NEW_PW ) {
        // 		var oParam = {id : "oldPwAlert", msg : "ID를 비밀번호로 설정할 수 없습니다.", arrparam : [''], msgtype : "E"};
        // 		Ex.core.alert(this, oParam);
        // 		this.edt_newPasswd.setFocusRed();
        // 		return false;
        // 	}

        	// 기존 비밀번호 불일치
        	trace('this.ORG_PW :: ' + this.ORG_PW + '\nOLD_PW :: ' + sha256_digest(OLD_PW) + '\nNEW_PW :: ' + NEW_PW + '\nCNF_PW :: ' + CNF_PW);
        	if( this.ORG_PW != sha256_digest(OLD_PW) ) {
        		var oParam = {id : "oldPwAlert", msg : "기존 비밀번호가 올바르지 않습니다.", arrparam : [''], msgtype : "E"};
        		Ex.core.alert(this, oParam);
        		this.edt_passwd.setFocusRed();
        		return false;
        	}

        	// 직전비번 3개까지 사용 불가
        // 	for(var i = 0; i < 3; i++) {
        // 		if( i >= this.dsFommUserPwChgHist.rowcount )
        // 			break;
        //
        // 		var HIST_PW = this.dsFommUserPwChgHist.getColumn(i, 'USER_PW')||'';
        // 		if( sha256_digest(NEW_PW) == HIST_PW ) {
        // 			var param = {id : "pPwRegAlert", msg : "지난 변경 3번 안에 사용했던 비밀번호로는\n변경할 수 없습니다."};
        // 			Ex.core.alert(this, param);
        // 			this.edt_newPasswd.setFocusRed();
        // 			return false;
        // 		}
        // 	}


        	// 새 비밀번호 != 비밀번호 불일치
        	if( NEW_PW != CNF_PW ) {
        		var oParam = {id : "confPwAlert", msg : "확인 비밀번호가 올바르지 않습니다.", arrparam : [''], msgtype : "E"};
        		Ex.core.alert(this, oParam);
        		this.edt_confirm.setFocusRed();
        		return false;
        	}

        	// new pw rule validation
        // 	if( !Ex.util.validatePw(NEW_PW) ) {
        // 		var param = {id : "pPwRegAlert", msg : "비밀번호가 규칙에 맞지 않습니다."};
        // 		Ex.core.alert(this, param);
        // 		this.edt_newPasswd.setFocusRed();
        // 		return false;
        // 	}
        	return true;
        }



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSave" :
        			if( !this.fnCheckValidate() )
        				return;

        			var param = {id : "pSaveConfirm", msg : "비밀번호를 변경 하시겠습니까?", arrparam : [''], msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnReset" :
        			var param = {id : "pResetConfirm", msg : "비밀번호를 초기화 하시겠습니까?\nID로 초기화됩니다.", arrparam : [''], msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.dsOncolumnchanged = function(obj, e)
        {
        	obj.setUpdateRow(e);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsNewPwInfo.addEventHandler("oncolumnchanged",this.dsOncolumnchanged,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.dsOncolumnchanged,this);
        };
        this.loadIncludeScript("commChangePwd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
