(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref01");
            this.set_titletext("팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"aaa\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"aaa\">1</Col></Row><Row><Col id=\"aaa\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnModal","10","20","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달 팝업");
            this.addChild(obj.name, obj);

            obj = new Button("btnModeless","10","79","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업 - 오픈(modeless)");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","165","20",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("- ref::ref01.xfdl \r\n\r\n\t팝업 처리를 위한 API : Ex.core.popup\r\n\t\r\n\t1. modal / modeless(open창)을 지원한다.\r\n\t2. 팝업창은 this.fnPopupAfter 라는 약속된 콜백함수를 사용한다.\r\n\t   창닫기시 후처리를 위한 용도로 사용한다.\r\n\t  \r\n\t   \r\n\t   this.fnPopupAfter = function( pID, varValue)\r\n\t   콜백함수 option\r\n\t   - pID : 팝업호출시 지정한 팝업창ID\r\n\t   - varValue : 팝업창 닫을때 지정한 반환값(기본적으로 string만 지원한다.)\r\n\t   - 팝업창 : reference::ref01_01.xfdl 소스 참조\r\n\t   \r\n\t   \r\n\t2. 팝업처리를 위한 option\r\n\t\tEx.core.popup( scope, pID, url, pOption, fOption)\r\n\t\t\r\n\t\tscope\t: 파업 실행 위치 , this\r\n\t\tpID\t\t: 팝업창 ID, 팝업콜백에세서 반환받을 pID\r\n\t\turl\t\t: 팝업창 Url\r\n\t\tpOption\t: 팝업창으로 넘길 파라미터\r\n\t\tfOption\t: 팝업창처리를 위한 프레임 옵션\r\n\t\t\r\n\t*자세한 처리는 스크립트를 참조\t\r\n");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","10","108","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("팝업 - debug");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","10","137","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("샘플 팝업");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","160","138","190",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnBaseInfoPage","1","32","127","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnReqPage","1","67","127","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("요청서정보");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnModal_autosize","10","49","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("모달 팝업(autosize)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("ref01.xfdl", function() {
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
        	var divId = obj.parent.parent.parent.parent.id;

        	//trace("this.fnCommOnclick() divId ::: " + divId + " obj.name : " + obj.name);

        	switch(obj.name)
        	{
        		case "btnModal" :
        			/*
        			pOption 처리부(파라미터)
        			-- 지정방법 ,ojbect로 지정하고 title은 필수지정옵션이다.
        			-- ex : {title:팝업창title , p1:'파라미터1' , p2:'파라미터2' , pN.....}
        			-- title : title지정 필수, 팝업창title

        			fOption 처리부(프레임옵션)
        			-- 지정방법 key=value형대의 string으로 지정하고, 각각의 구분은 ,로 구분한다. width/height는 필수 지정옵션이다.
        			-- ex : "width=600,height=400"
        			  width : 지정필수, 개발자 화면 가로사이즈
        			  height : 지정필수, 개발자 화면 세로사이즈
        			  modeless : open창 여부, 미지정시 modal처리( default:false)
        			*/

        			// 디폴트 콜백함수 this.fnPopupAfter 를 제공한다.
        			// 개발자가 지정한 팝업창 ID를 인자값으로 콜백함수를 호출한다.
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"modalpop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::comPopPreview.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "모달창",
        					p1 : 1,
        					p2 : 2
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=600,height=430"	// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;

        		/* 사이즈 제외 옵션처리는 위 모달팝업과 동일 */
        		/* autosize 설정 시, 오픈 url (ref::ref01_01.xfdl) 화면 디자인 크기(600x430)으로 팝업 오픈 */
        		case "btnModal_autosize" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"modalpop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"ref::ref01_01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "모달창",
        					p1 : 1,
        					p2 : 2
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)

        				"autosize,left=200,top=800"		// <--- width/height/autosize/modeless(프레임 처리 옵션)
        				//"autosize"
        			);
        			break;


        		case "btnModeless" :
        			/*
        			pOption 처리부(파라미터)
        			-- 지정방법 ,ojbect로 지정하고 title은 필수지정옵션이다.
        			-- ex : {title:팝업창title , p1:'파라미터1' , p2:'파라미터2' , pN.....}
        			-- title : title지정 필수, 팝업창title

        			fOption 처리부(프레임옵션)
        			-- 지정방법 key=value형대의 string으로 지정하고, 각각의 구분은 ,로 구분한다. width/height는 필수 지정옵션이다.
        			-- ex : "width=600,height=400"
        			  width : 지정필수, 개발자 화면 가로사이즈
        			  height : 지정필수, 개발자 화면 세로사이즈
        			  modeless : open창 여부, 미지정시 modal처리( default:false)

        			  resizable : open창 리사이즈 가능여부( default:false, modeless:true만 지원하며, IE만 효과가 적용된다.)
        			*/
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"modelesspop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::comPopPreview.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "오픈창",
        					p1 : 1,
        					p2 : 2
        				},										// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=600,height=430,modeless=true"    // <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "Button00_00" :
        			Ex.core.popup(
        				this,														// <--- 팝업 실행 스코프
        				"_pDebugPop",                   							// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::datasetList.xfdl",             						// <--- 팝업창 오픈 Url
        				{
        					title: 'debug',
        					formObj : this,
        					Datasets : null
        				},															// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=1080,height=670,modeless=false,useMinButton=true,useMaxButton=true,useNormalButton=true,useCloseButton=true"	// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "Button01" :
        			Ex.core.popup(
        				this,														// <--- 팝업 실행 스코프
        				"_pDebugPop",                   							// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"template::testPop.xfdl",             						// <--- 팝업창 오픈 Url
        				{
        					title: 'testPopup'
        				},
        																	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=1080,height=600,modeless=false"		// width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnBaseInfoPage" :
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"baseInfoPop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::comPopPreview.xfdl",		// <--- 팝업창 오픈 Url
        				{
        					title : "기본정보 미리보기",
        					pPageURL : "sr::SR0000_D01.xfdl"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=0,height=0"	// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnReqPage" :
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"reqPop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"comm::comPopPreview.xfdl",		// <--- 팝업창 오픈 Url
        				{
        					title : "계정신청 요청서 미리보기",
        					pPageURL : "sr::SR0200_D01.xfdl"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=0,height=0"	// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;
        	}
        };
        this.btnModal_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnModal.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnModeless.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button00_00.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button01.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Div00.form.btnBaseInfoPage.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Div00.form.btnReqPage.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnModal_autosize.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
