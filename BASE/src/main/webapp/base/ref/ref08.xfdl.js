(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref08");
            this.set_titletext("그리드페이징");
            this.getSetter("classname").set("ref08");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPage", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"string\" size=\"255\"/><Column id=\"Column1\" type=\"string\" size=\"255\"/><Column id=\"Column2\" type=\"string\" size=\"255\"/><Column id=\"Column3\" type=\"string\" size=\"255\"/><Column id=\"Column4\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"fetchRow\" type=\"STRING\" size=\"256\"/><Column id=\"pageNum\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","559",null,"24","612",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_GridPage");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPageData","0","56",null,"501","612",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsPage");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01",null,"57","577","500","28",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("- ref::ref08.xfdl \r\n\r\n그리드 페이징 처리 기법\r\n\r\n1. 대용량 데이터 조회시 그리드 페이징을 적용한다.\r\n\r\n2. 적용 방식\r\n- 그리드 하단에 Div을 배치하고 페이징 처리를 위한 폼을 링크한다.\r\n  링크할 페이징Url comm::comPaging.xfdl\r\n\r\n- 페이징 처리를 위한 푬변수의 선언\r\n  this.fetchRow = 20;// 최초 페이지당 가져올 레코드 카운트\r\n  \r\n- form_onload에 페이징처리를 위한 링크페이지 기본값설정\r\n  페이징처리용 Div에 내부 setup 인터페이스 함수를 이용한다.\r\n\r\n- 조회를 위한 fn_search함수 호출시 \r\n  무조건 첫페이지를 조회한다.\r\n  조회조건을 처리하며 transaction을 직접 기술하지 않고,\r\n  페이징처리용 Div에 내부 searchPage 인터페이스 함수를 이용한다.\r\n  \r\n- transaction은 페이징처리용 Div에서 사용자 페이지별 조회함수를 호출한다.\r\n  setup 인터페이스 함수에서 지정한 설정값을 이용한다.\r\n  해당함수에서는 페이지 정보를 조회조건에 설정하여 조회를 시도한다.\r\n  이때 조회조건의 영향을 받지 않도록 기술한다.(페이지 정보만 설정)\r\n  \r\n*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","7","19","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnCurSearch","134","19","177","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("현재 조회된 페이지 재조회하기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

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
        this.registerScript("ref08.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 그리드 페이징
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
        // 페이징 처리를위한 폼 변수(약속된 폼변수)
        this.fetchRow = 100;	/* <-- 페이지당 가져올 레코드 카운트  */
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
        	// 페이징 처리용 Div에 페이징 처리를 위한 기본값 설정
        	this.divPage.setup(this.fetchRow, // 페이지당 가져올 레코드 카운트를 기술한 폼변수
        							this.fnSearchPage, // 페이지 조회 함수
        							[this.dsPage, 'totCnt']// [dsPage:조회결과 데이타셋 , dsPage총레코드카운트결과값을 가진 컬럼명]
        						);
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
        		case "search" :
        			// 조회페이지 정보갱신및 페이지 디스플레이를 위한 호출(필수)
        			this.divPage.pageDisp();
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
        // divPage에서 호출하는 조회함수
        this.fnSearchPage = function (pageNum, fetchRow)
        {
        	// 페이지넘버를 인자로 받는다
        	// 조회함수에서 처리된 조회조건으로 페이징만 처리한다.
        	// 조회를 위한 파라미터는 여기서는 받지 않는다.(fn_search와 같은 조회함수에서만 파라미터 처리)
        	// 페이지 파라미터설정
        	this.dsCond.setColumn(0, "fetchRow", fetchRow);
        	this.dsCond.setColumn(0, "pageNum", pageNum);
        	// "fetchRow='"+this.fetchRow+"' pageNum='"+pageNum+"'"
        	Ex.core.tran(this, "search", "sppHy/html/PagingSample2.jsp", "dsCond=dsCond", "dsPage=dsOutput", "");
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /*
        그리드 페이징 처리 기법

         1. 대용량 데이터 조회시 그리드 페이징을 적용한다.

         2. 적용 방식
         - 그리드 하단에 Div을 배치하고 페이징 처리를 위한 폼을 링크한다.
         링크할 페이징Url comm::comPaging.xfdl

         - 페이징 처리를 위한 푬변수의 선언
         this.fetchRow = 20;	// 페이지당 가져올 레코드 카운트

         - form_onload에 페이징처리를 위한 링크페이지 기본값설정
         페이징처리용 Div에 내부 setup 인터페이스 함수를 이용한다.

         - 조회를 위한 fn_search함수 호출시
         무조건 첫페이지를 조회한다.
         조회조건을 처리하며 transaction을 직접 기술하지 않고,
         페이징처리용 Div에 내부 searchPage 인터페이스 함수를 이용한다.

         - transaction은 페이징처리용 Div에서 사용자 페이지별 조회함수를 호출한다.
         setup 인터페이스 함수에서 지정한 설정값을 이용한다.
         해당함수에서는 페이지 정보를 조회조건에 설정하여 조회를 시도한다.
         이때 조회조건의 영향을 받지 않도록 기술한다.(페이지 정보만 설정)

         *자세한 처리는 스크립트를 참조
        */
        // 조회
        this.btnSearch_onclick = function(obj, e)
        {
        	this.dsPage.clearData();

        	// 조회 버튼 클릭시 처음페이지로 조회
        	// 조회조건 파라미터처리(페이지 정보처리는 하지 않는다.)
        	this.dsCond.setColumn(0, "param1", "");
        	this.dsCond.setColumn(0, "param2", "");

        	// 페이징처리를 위한 함수호출
        	// fn_search와 같은 조회함수에서는 조회조건에 맞게 다시 처음부터 조회한다.
        	// searchPage 함수에서 this.fn_searchPage 함수를 페이정보를 인자로 하여 호출한다.
        	this.divPage.searchPage();
        }

        this.btnCurSearch_onclick = function(obj, e)
        {
        	var pageNum = this.divPage.getPage();
        	var fetchRow = this.divPage.getFetchRow();
        	this.fnSearchPage(pageNum, fetchRow);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnCurSearch.addEventHandler("onclick",this.btnCurSearch_onclick,this);
        };
        this.loadIncludeScript("ref08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
