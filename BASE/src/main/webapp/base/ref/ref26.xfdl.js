(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref26");
            this.set_titletext("PDF 다운 & 화면 캡쳐");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"aaa\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"aaa\">1</Col></Row><Row><Col id=\"aaa\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAllScrnToImg","10","20","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전체 화면 캡쳐 Viewer");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllPDFDown","10","btnAllScrnToImg:5","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 화면 PDF Down");
            this.addChild(obj.name, obj);

            obj = new Button("btnScrnToImg","10","btnAllPDFDown:5","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("현재 화면 캡쳐 Viewer");
            this.addChild(obj.name, obj);

            obj = new Button("btnPDFDown","10","btnScrnToImg:5","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("현재 화면 PDF Down");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer","btnPDFDown:20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_stretch("fit");
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
        this.registerScript("ref26.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 팝업 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
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
        this.formObj;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        	this.formObj = obj;
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
        	trace("pID="+pID+" ,varValue="+varValue);
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
        /*
        	팝업 처리를 위한 API : Ex.core.popup

        	1. modal / modeless(open창)을 지원한다.
        	2. 팝업창은 this.fnPopupAfter 라는 약속된 콜백함수를 사용한다.
        	   창닫기시 후처리를 위한 용도로 사용한다.

        	   this.fnPopupAfter = function( pID, varValue)
        	   콜백함수 option
        	   - pID : 팝업호출시 지정한 팝업창ID
        	   - varValue : 팝업창 닫을때 지정한 반환값(기본적으로 string만 지원한다.)
        	   - 팝업창 : ref::ref01_01.xfdl 소스 참조


        	2. 팝업처리를 위한 option
        		Ex.core.popup( scope, pID, url, pOption, fOption)

        		scope	: 팝업 실행 위치 , this
        		pID		: 팝업창 ID, 팝업콜백에세서 반환받을 pID
        		url		: 팝업창 Url
        		pOption	: 팝업창으로 넘길 파라미터
        		fOption	: 팝업창처리를 위한 프레임 옵션

        	*자세한 처리는 스크립트를 참조
        */

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAllScrnToImg" :
        			Ex.util.saveToBase64Img(this.formObj, nexacro.getApplication().mainframe, this.imgViewer);
        			break;

        		case "btnAllPDFDown" :
        			Ex.util.saveScreenPDF(this.formObj, nexacro.getApplication().mainframe, "테스트 파일");
        			break;

        		case "btnScrnToImg" :
        			Ex.util.saveToBase64Img(this.formObj, this.formObj, this.imgViewer);
        			break;

        		case "btnPDFDown" :
        			Ex.util.saveScreenPDF(this.formObj, this.formObj, "테스트 파일");
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAllScrnToImg.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnAllPDFDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnScrnToImg.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnPDFDown.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
