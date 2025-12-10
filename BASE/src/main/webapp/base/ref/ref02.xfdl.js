(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref02");
            this.set_titletext("Transaction[ Ex.core.tran ]");
            this.getSetter("classname").set("ref02");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea01","5","45",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("- ref::ref02.xfdl \r\n\r\n\t1. Transaction처리를 위한 API : Ex.core.tran\r\n\r\n\tEx.core.tran(\r\n\t\t\t\tthis,\t\t\t\t\t\t\t\t// transaction 실행스코프\r\n\t\t\t\t\"selectSample\",\t\t\t\t\t\t// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID\r\n\t\t\t\t\"cmm/selectSample\",\t\t\t\t// 서비스명( 서비스 호출 Url, 컨트롤명을 서비스ID로 지정)\r\n\t\t\t\t\"dsCond=dsCond:U\",\t\t\t\t\t// 서버로 전송할 데이타셋\r\n\t\t\t\t\"dsSample=dsSample dsList=dsList\"\t// 서버에서 수신할 데이타셋\r\n\t\t\t\t);\r\n\r\n\ttransaction 실행스코프 : 스크립트를 기술하는 scope의 this\r\n\ttransaction 서비스 실행 ID : transaction을 구분하는 아이디이며, 콜백에서 수신할 서비스ID명\r\n\t서비스명 : 자바서비스명( 서비스 호출 Url, 컨트롤명을 서비스ID로 지정)\r\n\t서버로 전송할 데이타셋 : 서버로 전송할 데이타셋명 \r\n\t\t\t\t\t\t\t 2개 이상의 데이타셋 전송시는 space하나를 구분자로 한다.\r\n\t\t\t\t\t\t\t 서버수신용=클라이언트용\r\n\t\t\t\t\t\t\t transaction이 실행하는 scope인 this에 존재하는 데이타셋을 기술\r\n\t서버에서 수신할 데이타셋 : 서버에서 수신할 데이타셋명\r\n\t\t\t\t\t\t\t\t2개 이상의 데이타셋 전송시는 space하나를 구분자로 한다.\r\n\t\t\t\t\t\t\t\t클라이언트수신용=서버발신용\r\n\t\t\t\t\t\t\t\ttransaction이 실행하는 scope인 this에 존재하는 데이타셋을 기술\r\n\r\n\t2. Transaction 콜백처리를 위한 함수 : this.fnCallback\r\n\tthis.fnCallback는 약속된 transaction용 콜백함수\r\n\t\r\n\t콜백함수의 인자\r\n\tsSvcId : Ex.core.tran 호출시 지정한 서비스ID\r\n\tnErrorCode : <0 이면 서비스 오류, 그외 성공\r\n\tsErrorMsg : 서버에서 보내는 메시지\r\n\t\r\n\t오류발생시 아래와 같이 처리한다.\r\n\t\r\n\t참고 : \tEx.core.error에서 지정한 \'error\'는 메시지아이디\r\n\t\t\t필요시 메시지콜백에서 메세지 아이디로 구분하여 처리\r\n\r\n\t*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"5","100","34","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
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
        this.registerScript("ref02.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Transation Sample
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
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
        /*
        	Transaction 콜백처리를 위한 함수 : this.fnCallback
        	this.fnCallback는 약속된 transaction용 콜백함수

        	콜백함수의 인자
        	sSvcId : Ex.core.tran 호출시 지정한 서비스ID
        	nErrorCode : <0 이면 서비스 오류, 그외 성공
        	sErrorMsg : 서버에서 보내는 메시지

        	오류발생시 아래와 같이 처리한다.

        	참고 : 	Ex.core.error에서 지정한 'error'는 메시지아이디
        			필요시 메시지콜백에서 메세지 아이디로 구분하여 처리
        */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	// 에러메세지 처리
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,"ERROR",sSvcId+"::"+nErrorCode+"::"+sErrorMsg);
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
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.btnSearch_onclick = function(obj, e)
        {
        	// 가이드를 위한 샘폴코드(오류발생);

        	// 기본문법
        	Ex.core.tran(
        		this,								// transaction 실행스코프
        		"selectSample",						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		"cmm/selectSample.do",				// 서비스명
        		"dsCond=dsCond:U",					// 서버로 전송할 데이타셋
        		"dsSample=dsSample dsList=dsList"	// 서버에서 수신할 데이타셋
        	);

        	Ex.core.tran(
        		this,								// transaction 실행스코프
        		"selectSample1",						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		"cmm/selectSample.do",				// 서비스명
        		"dsCond=dsCond:U",					// 서버로 전송할 데이타셋
        		"dsSample=dsSample dsList=dsList"	// 서버에서 수신할 데이타셋
        	);

        	Ex.core.tran(
        		this,								// transaction 실행스코프
        		"selectSample2",						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		"cmm/selectSample.do",				// 서비스명
        		"dsCond=dsCond:U",					// 서버로 전송할 데이타셋
        		"dsSample=dsSample dsList=dsList"	// 서버에서 수신할 데이타셋
        	);

        	/*
        	Transaction처리를 위한 API : Ex.core.tran

        	Ex.core.tran(
        				this,								// transaction 실행스코프
        				"selectSample",						// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        				"cmm/selectSample.do",				// 서비스명( 서비스 호출 Url, 컨트롤명을 서비스ID로 지정)
        				"dsCond=dsCond:U",					// 서버로 전송할 데이타셋
        				"dsSample=dsSample dsList=dsList"	// 서버에서 수신할 데이타셋
        				);

        	transaction 실행스코프 : 스크립트를 기술하는 scope의 this
        	transaction 서비스 실행 ID : transaction을 구분하는 아이디이며, 콜백에서 수신할 서비스ID명
        	서비스명 : 자바서비스명( 서비스 호출 Url, 컨트롤명을 서비스ID로 지정)
        	서버로 전송할 데이타셋 : 서버로 전송할 데이타셋명
        							 2개 이상의 데이타셋 전송시는 space하나를 구분자로 한다.
        							 서버수신용=클라이언트용
        							 transaction이 실행하는 scope인 this에 존재하는 데이타셋을 기술
        	서버에서 수신할 데이타셋 : 서버에서 수신할 데이타셋명
        								2개 이상의 데이타셋 전송시는 space하나를 구분자로 한다.
        								클라이언트수신용=서버발신용
        								transaction이 실행하는 scope인 this에 존재하는 데이타셋을 기술
        	*/
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("ref02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
