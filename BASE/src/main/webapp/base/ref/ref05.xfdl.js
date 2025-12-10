(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref05");
            this.set_titletext("메뉴링크 수신 - 파라미터 ");
            this.getSetter("classname").set("ref05");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea01","5","50",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_value("- ref::ref05.xfdl \r\n\r\n\t파라미터 수신처리방법\t\r\n\r\n\t링크파라미터 수신처리 함수는 this.fnLinkParam\r\n\tForm Function 영역에 기술\r\n\t\r\n\tthis.fnLinkParam 함수는 링크시 호출되는 예약된 함수\r\n\t\r\n\t화면이 이미 오픈 되어 있다면 공통에서 this.fnLinkParam함수를 재호출 한다.(존재시)\r\n\t약속된 함수, 다른용도로 사용불가\r\n\r\n\t*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5","20","47","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("p1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtP1","31","20","139","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Edit("edtP2","239","20","139","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","213","20","47","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("p2");
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
        this.registerScript("ref05.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 메뉴링크 수신 Sample
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
        	this.fnLinkParam();
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
        /*
        	링크파라미터 수신처리 함수는 this.fnLinkParam
        	Form Function 영역에 기술

        	this.fnLinkParam 함수는 링크시 호출되는 예약된 함수

        	화면이 이미 오픈 되어 있다면 공통에서 this.fnLinkParam함수를 재호출 한다.(존재시)
        	약속된 함수, 다른용도로 사용불가
        */
        this.fnLinkParam = function()
        {
        	// 수신예( ref04.xfdl에서 호출한 파라미터 수신예)
        	var p1 = this.getOwnerFrame().p1||'';
        	var p2 = this.getOwnerFrame().p2||'';

        	this.edtP1.set_value(p1);
        	this.edtP2.set_value(p2);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("ref05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
