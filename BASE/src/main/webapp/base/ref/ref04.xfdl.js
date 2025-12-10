(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref04");
            this.set_titletext("메뉴링크 호출");
            this.getSetter("classname").set("ref04");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnLinkMenuParam","3","20","187","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("화면링크 - 파라미터 있을때");
            this.addChild(obj.name, obj);

            obj = new Button("btnLinkMenu","3","73","187","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("화면링크 - 파라미터 없을때");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","195","20",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_value("- ref::ref04.xfdl\t\r\n\r\n*\t메뉴 링크 처리를위한 API : Ex.core.openLink \r\n\t\r\n\t1. 작업중인 메뉴에서 또다른 메뉴를 open하고자 할때\r\n\t\t메뉴오픈을 스크립트에서 지원한다.\r\n\t\r\n\t2. 메뉴링크처리를 위한 option\r\n\t   Ex.core.openLink(scope, menuId, parameter);\r\n\t   \r\n\t   scope : 메뉴오픈을 요청한 위치, this\r\n\t   menuId : open할 메뉴아이디\r\n\t   parameter : open할 메뉴로 전달할 파라미터 리스트, 생략가능\r\n\t   \r\n\t   화면 링크시 파라미터를 수신하는 대상 메뉴에서는\r\n\t   fnLinkParam라는 약속된 함수를 기술하여 수신처리 한다.\r\n\t   수신방법은 ref::ref5.xfdl 참고\r\n\r\n\t\t\r\n\t*자세한 처리는 스크립트를 참조\t");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","3","45","93","23",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_value("aaa");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","97","45","93","23",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_value("bbb");
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
        this.registerScript("ref04.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 메뉴링크 Sample
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
        this.fnPopupAfter = function(pID, varValue)
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
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /*
        	메뉴 링크 처리를위한 API : Ex.core.openLink

        	1. 작업중인 메뉴에서 또다른 메뉴를 open하고자 할때
        		메뉴오픈을 스크립트에서 지원한다.

        	2. 메뉴링크처리를 위한 option
        	   Ex.core.openLink(scope, menuId, parameter);

        	   scope : 메뉴오픈을 요청한 위치, this
        	   menuId : open할 메뉴아이디
        	   parameter : open할 메뉴로 전달할 파라미터 리스트, 생략가능

        	   화면 링크시 파라미터를 수신하는 대상 메뉴에서는
        	   fnLinkParam라는 약속된 함수를 기술하여 수신처리 한다.
        	   수신방법은 ref::ref5.xfdl 참고
        	*자세한 처리는 스크립트를 참조
        */
        this.btnLinkMenuParam_onclick = function(obj,  e)
        {
        	/*	화면 링크시 파라미터를 사용할때는
        		수신대상화면에 fnLinkParam 함수를 기술하여 수신처리 한다.( ref05.xfdl 화면을 참조 )

        		파라미터 구성
        		object {}로 구성하고 {p1:'파라미터1', p2:'파라미터2' , pN.....} */
        	var p1 = this.Edit00.value;
        	var p2 = this.Edit01.value;
        	Ex.core.openLink(this,"1106",{p1:p1,p2:p2});

        }

        this.btnLinkMenu_onclick = function(obj,  e)
        {
        	/* 메뉴만 호출할때는 파라미터를 기술하지 않는다. */
        	Ex.core.openLink(this,"1106");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnLinkMenuParam.addEventHandler("onclick",this.btnLinkMenuParam_onclick,this);
            this.btnLinkMenu.addEventHandler("onclick",this.btnLinkMenu_onclick,this);
        };
        this.loadIncludeScript("ref04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
