(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref03");
            this.set_titletext("메시지(alert/error/confirm/toast)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnAlertI","160","70","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("type 지정 예시");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlertE","0","70","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파라미터 사용 예시");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirmI","0","210","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("confirm(script 참조)");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirmParam","0","250","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파라미터 사용 예시");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","30","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("alert(script 참조)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","0","140","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Error");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","330","17",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("- ref::ref03.xfdl \n\n메세지 처리를 위한 API : Ex.core.alert / Ex.core.confirm / Ex.core.error\n\t\n1. alert/confirm/error 를 지원한다.\n  - alert\t: alert 처리를 위한 메세지처리\n  - confirm : confirm 처리를 위한 메세지처리\n  - error\t: transaction 오류처리를 위한 메세지처리\n\t\n2. 메세지창은 this.fnMsgAfter 라는 약속된 콜백함수를 사용한다.\n   메세지 확인/취소 선택후 후처리를 위한 용도로 사용한다.\n   \n   this.fnMsgAfter = function(mID,varValue)\n   콜백함수 option\n   - mID : 메세지 호출시 지정한 메세지창ID\n   - varValue : alert은 무조건 true를 반환한다.\n\t\t\t\tconfirm은 확인(true)/취소(false)를 반환한다.\t\n\t\t\t\terror는 무조건 true를 반환한다.\n\n 3. 메세지팝업처리를 위한 option\n\tEx.core.alert(scope, mID, strMsg, msgType, arrParam)\n\t\n\tscope\t: 메시지팝업 실행 위치, this\n\tmID\t\t: 메세지창ID, 메세지콜백에서 반환받을 mID\n\tstrMsg\t: 메세지\n\tmsgType\t: 메시지타입 {\n\t\t\t\t\'\' : No icon\t\t// 아이콘 없는 기본 alert\n\t\t\t\t\'I\': Normal(Info)\t// \'i\' icon; 일반적인 alert\n\t\t\t\t\'W\': Warning\t\t// \'!\' icon; 경고 alert\n\t\t\t\t\'S\': Success)\t\t// \'check\' icon; 저장되었습니다. 등 성공 alert\n\t\t\t}\n\tarrParam: 메세지문자열내에 대체할 문자열지정 ( 갯수만큼 array로 지정 )\n \n 4. 메세지 작성법(메시지 치환은 alert / confirm만 해당)\n\t메세지가 아래와 같다면\t\t\n\t나는 WEMB 과장입니다. \n\t나는 {0} {1}입니다. -> 문자열내 파라미터가 필요하면 우측과 같이 {n},n은 파라미터 순번으로 표현한다.\n\t\t\t\t\t -> 동일한 파라미터라면 n을 동일순번으로 표현한다.\t\t\n\t[\'WEMB\',\'과장\'] -> 파라미터는 array로 작성하고 각 아이템은 string값을 부여하고, \n\t\t\t\t   -> 문자열내 파라미터 부분을 치환하여 반환하다.\n\t\t\t\t\t\t\t  \n\t*자세한 처리는 스크립트를 참조\t");
            obj.set_readonly("true");
            obj.set_scrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Button("btnToast","0","320","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("toast(script 참조)");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlertby","160","30","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("alertby(script 참조)");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirmby","160","210","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("confirmby(script 참조)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","430","310","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","0","484","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("메시지 문자열 가져오기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","516","310","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            obj = new Button("btnToastTime","160","320","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("표기시간 지정 예시");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","7","0","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("alert / alertby");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","7","180","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("confirm / confirmby");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirmType","160","250","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("type 지정 예시");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","7","110","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("error");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","7","290","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("toast");
            this.addChild(obj.name, obj);

            obj = new Button("btnToast03","0","360","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("type 지정 예시");
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
        this.registerScript("ref03.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 메시지 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ 공통
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        }
        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	trace("this.fnMsgAfter() mID = " + mID + " ,varValue = " + varValue);
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /*
        	- ref::ref03.xfdl

        	메세지 처리를 위한 API : Ex.core.alert / Ex.core.confirm / Ex.core.error

        	1. alert/confirm/error 를 지원한다.
        	  - alert	: alert 처리를 위한 메세지처리
        	  - confirm : confirm 처리를 위한 메세지처리
        	  - error	: transaction 오류처리를 위한 메세지처리

        	2. 메세지창은 this.fnMsgAfter 라는 약속된 콜백함수를 사용한다.
        	   메세지 확인/취소 선택후 후처리를 위한 용도로 사용한다.

        	   this.fnMsgAfter = function(mID,varValue)
        	   콜백함수 option
        	   - mID : 메세지 호출시 지정한 메세지창ID
        	   - varValue : alert은 무조건 true를 반환한다.
        					confirm은 확인(true)/취소(false)를 반환한다.
        					error는 무조건 true를 반환한다.

        	 3. 메세지팝업처리를 위한 option
        		Ex.core.alert(scope, mID, strMsg, msgType, arrParam)

        		scope	: 메시지팝업 실행 위치, this
        		mID		: 메세지창ID, 메세지콜백에서 반환받을 mID
        		strMsg	: 메세지
        		msgType	: 메시지타입 {
        					'' : No icon		// 아이콘 없는 기본 alert
        					'I': Normal(Info)	// 'i' icon; 일반적인 alert
        					'W': Warning		// '!' icon; 경고 alert
        					'S': Success)		// 'check' icon; 저장되었습니다. 등 성공 alert
        				}
        		arrParam: 메세지문자열내에 대체할 문자열지정 ( 갯수만큼 array로 지정 )

        	 4. 메세지 작성법(메시지 치환은 alert / confirm만 해당)
        		메세지가 아래와 같다면
        		나는 WEMB 과장입니다.
        		나는 {0} {1}입니다. -> 문자열내 파라미터가 필요하면 우측과 같이 {n},n은 파라미터 순번으로 표현한다.
        						 -> 동일한 파라미터라면 n을 동일순번으로 표현한다.
        		['WEMB','과장'] -> 파라미터는 array로 작성하고 각 아이템은 string값을 부여하고,
        					   -> 문자열내 파라미터 부분을 치환하여 반환하다.

        		*자세한 처리는 스크립트를 참조
        */

        // alert 기본
        this.Button00_onclick = function(obj, e)
        {
        	var str = "SystemBase_HTML5.js?version=14.0.0.1501:34 fnCallback=selectUserSession,0,SUCCESS\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 gdsUserSession.rowcount=0\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 fnCallback=selectMenu,0,정상적으로 조회되었습니다.\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 rowCnt=180\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 objmax=23\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 pID=pAlertI , varValue=true\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 objmax=23\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 pID=pAlertI , varValue=true\n";

        		var param = {id : "pAlertI", msg : str};
        		Ex.core.alert(this, param);
        }

        // alertBy 기본
        this.btnAlertby_onclick = function(obj, e)
        {
        	var alertby_msgCallback = function(mid , varValue)
        	{
        		this.Static00.set_text(mid  + " 콜백을 실행했습니다.");
        	};

        	// 파라미터 구성
        	// mid 				: 필수 , 메시지창 ID( 콜백에서 받을 메시지 mID )
        	// msg 				: 필수 , 메시지 문자열
        	// arrParam 		: 옵션 , array로 구성,  치환할 문자열 정보
        	// callbackFunc 	: 옵션 , 콜백함수 객체 , 생략시 표준 콜백함수(this.fnMsgAfter) 호출
        	var param  = {
        		id			: "pAlertby",
        		msg			: "alertby를 실행했습니다.",  // 혹은 메시지 코드
        		arrparam	: "",
        		msgtype		: "",
        		callbackfunc: alertby_msgCallback
        	};

        	// param.callbackFunc 을 생략하면 표준 this.fnMsgAfter 콜백함수를 호출한다.
        	Ex.core.alertby(this, param);
        }

        // alert: 메시지 문자열 파라미터 사용 예시
        this.btnAlertE_onclick = function(obj, e)
        {
        	// 디폴트 콜백함수 this.fnMsgAfter 를 제공한다.
        	// alert은 무조건 true를 반환한다.
        	var param = {id : "pAlertI", msg : "출력할 메세지 {0} 혹은 {1}", arrparam : ['코드1', '문자열1']};
        	Ex.core.alert(this, param);
        }

        // alert msgType 지정 예시
        this.btnAlertI_onclick = function(obj,e)
        {
        	// 디폴트 콜백함수 this.fnMsgAfter 를 제공한다.
        	// alert은 무조건 true를 반환한다.
        	/* 메시지타입
        	 * '' : No icon			// 아이콘 없는 기본 alert (default)
        	 * 'I': Normal(Info)	// 'i' icon; 일반적인 alert
        	 * 'W': Warning			// '!' icon; 경고 alert
        	 * 'S': Success			// 'check' icon; 저장되었습니다. 등 성공 alert */
        	var param = {id : "pAlertI", msg : "출력할 메세지 {0} 혹은 {1}", arrparam : ['코드1', '문자열1'], msgtype : "I"};
        	Ex.core.alert(this, param);
        };


        // alert : Error
        this.Button02_onclick = function(obj, e)
        {
        	var sSvcId = 'selectSample';
        	var nErrorCode = '-1';
        	var sErrorMsg = '오류가 발생했습니다.';
        	var str = "SystemBase_HTML5.js?version=14.0.0.1501:34 fnCallback=selectUserSession,0,SUCCESS\n";
        	str += "SystemBase_HTML5.js?version=14.0.0.1501:34 gdsUserSession.rowcount=0\n";
        	str += "SystemBase_HTML5.js?version=14.0.0.1501:34 fnCallback=selectMenu,0,정상적으로 조회되었습니다.\n";
        	str += "SystemBase_HTML5.js?version=14.0.0.1501:34 rowCnt=180\n";
        	str += "SystemBase_HTML5.js?version=14.0.0.1501:34 objmax=23\n";
        	str += "SystemBase_HTML5.js?version=14.0.0.1501:34 pID=pAlertI , varValue=true\n";
        	str += "SystemBase_HTML5.js?version=14.0.0.1501:34 objmax=23\n";
        	str += "SystemBase_HTML5.js?version=14.0.0.1501:34 pID=pAlertI , varValue=true\n";
        	sErrorMsg = str;

        	var param = {id : "pErrorE", msg : sSvcId + "::" + nErrorCode + "::" + sErrorMsg};
        	Ex.core.error(this, param);
        }

        // confirm
        this.btnConfirmI_onclick = function(obj, e)
        {
        	var str = "SystemBase_HTML5.js?version=14.0.0.1501:34 fnCallback=selectUserSession,0,SUCCESS\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 gdsUserSession.rowcount=0\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 fnCallback=selectMenu,0,정상적으로 조회되었습니다.\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 rowCnt=180\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 objmax=23\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 pID=pAlertI , varValue=true\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 objmax=23\n";
        	    str += "SystemBase_HTML5.js?version=14.0.0.1501:34 pID=pAlertI , varValue=true\n";
        		var param = {id : "pConfirmI", msg : str};
        		Ex.core.confirm(this, param);
        }

        // confirmby
        this.btnConfirmby_onclick = function(obj, e)
        {
        	var confirmby_msgCallback = function(mid , varValue)
        	{
        		this.Static00.set_text(mid  + " 콜백을 실행했습니다.");
        	};

        	// 파라미터 구성
        	// id 				: 필수 , 메시지창 ID( 콜백에서 받을 메시지 mID )
        	// msg 				: 필수 , 메시지 문자열
        	// arrparam 		: 옵션 , array로 구성,  치환할 문자열 정보
        	// callbackfunc 	: 옵션 , 콜백함수 객체 , 생략시 표준 콜백함수(this.fnMsgAfter) 호출
        	var param  = {
        		id	: "pConfirmby",
        		msg	: "confirmby를 실행했습니다.",  // 혹은 메시지 코드
        		arrparam : [],
        		callbackfunc: confirmby_msgCallback,
        	};
        	// param.callbackFunc 을 생략하면 표준 this.fnMsgAfter 콜백함수를 호출한다.
        	Ex.core.confirmby(this, param);
        }

        // confirm : 파라미터 사용 예시
        this.btnConfirmE_onclick = function(obj, e)
        {
        	// 디폴트 콜백함수 this.fnMsgAfter 를 제공한다.
        	// confirm은 확인:true/취소:false를 반환한다.
        	var param = {id : "pConfirmI", msg : "출력할 메세지 {0}혹은 {1}이 맞나요?", arrparam : ['코드2', '문자열2']};
        	Ex.core.confirm(this, param);
        }

        // confirm : msgType 지정 예시
        this.btnConfirmType_onclick = function(obj,e)
        {
        	// 디폴트 콜백함수 this.fnMsgAfter 를 제공한다.
        	// alert은 무조건 true를 반환한다.
        	/* 메시지타입
        	 * '' : No icon			// 아이콘 없는 기본 alert (default)
        	 * 'I': Normal(Info)	// 'i' icon; 일반적인 alert
        	 * 'W': Warning			// '!' icon; 경고 alert
        	 * 'S': Success			// 'check' icon; 저장되었습니다. 등 성공 alert */
        	var param = {id : "pConfirmI", msg : "출력할 메세지 {0}혹은 {1}이 맞나요?", arrparam : ['코드2', '문자열2'], msgtype : "I"};
        	Ex.core.confirm(this, param);
        };

        // toast 기본
        this.btnToastMsg01_onclick = function(obj, e)
        {
        	// 조회 되었습니다. / 저장되었습니다. 와 같은 한줄짜리 간단 메시지출력만 하세요.
        	// 2초정도 유지후 자동으로 사라지며, 콜백은 없습니다.
        	Ex.core.toast(this, "시간 미지정시 [2초] 간단 메시지가 출력 되었습니다.");   // 혹은 메시지 코드
        }

        // toast 표기시간 지정 예시
        this.btnToastMsg02_onclick = function(obj, e)
        {
        	// 조회 되었습니다. / 저장되었습니다. 와 같은 한줄짜리 간단 메시지출력만 하세요.
        	var opts = {
        		displaySecond	: 4		//단위: 초, default 2
        	};
        	Ex.core.toast(this, "4초간 간단 메시지가 출력 되었습니다.", null, opts);
        }

        // toast Type지정 예시
        this.btnToastMsg03_onclick = function(obj,e)
        {
        	// 4초 유지후 자동으로 사라지며, 콜백은 없습니다.
        	var opts = {
        		usedecorate		: true,
        		displaySecond	: 4,
        		toastType		: 'I'	// default ''
        	};
        	Ex.core.toast(this, "[decorate] 4초간 간단 <b v='true'><fc v='blue'>메시지</fc></b>가 <b v='true'><fc v='red'>출력</fc></b> 되었습니다.", null, opts);
        };

        this.Button03_onclick = function(obj, e)
        {
        	/*
        		Ex.core.alert / Ex.core.alertby / Ex.core.confirm / Ex.core.confirmby / Ex.core.toast
        		아래 기능을 포함하고 있습니다.
        	*/
        	// 메시지 코드 목록에 없으면 대상 문자열을 그대로 반환합니다.
        	var strMsg = "나는 {0} {1}입니다.";  // "00001"
        	var arrParam = ['WEMB', '과장'] ;
        	strMsg = Ex.core.msg(strMsg);
        	strMsg = Ex.core.msgMapping(strMsg , arrParam);
        	this.Static01.set_text(strMsg);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAlertI.addEventHandler("onclick",this.btnAlertI_onclick,this);
            this.btnAlertE.addEventHandler("onclick",this.btnAlertE_onclick,this);
            this.btnConfirmI.addEventHandler("onclick",this.btnConfirmI_onclick,this);
            this.btnConfirmParam.addEventHandler("onclick",this.btnConfirmE_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btnToast.addEventHandler("onclick",this.btnToastMsg01_onclick,this);
            this.btnAlertby.addEventHandler("onclick",this.btnAlertby_onclick,this);
            this.btnConfirmby.addEventHandler("onclick",this.btnConfirmby_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.btnToastTime.addEventHandler("onclick",this.btnToastMsg02_onclick,this);
            this.btnConfirmType.addEventHandler("onclick",this.btnConfirmType_onclick,this);
            this.btnToast03.addEventHandler("onclick",this.btnToastMsg03_onclick,this);
        };
        this.loadIncludeScript("ref03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
