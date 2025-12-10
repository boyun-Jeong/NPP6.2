(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frTop_D03");
            this.set_titletext("통합검색_검색어입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,32);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"4","75","24","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_search");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchStr","5","4",null,"24","btnSearch:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSearchStr","value","dsCond","SEARCH_STR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frTop_D03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frTop_D01
        * 화면(명)		︰ 언어선택 div
        * 메뉴(경로)	︰ Frame
        * 화면 설명	︰ frTop 언어선택 Div
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.curLangCd;


        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {

        }


        this.fnSearch = function()
        {
        	trace('통합검색 call');
        }
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/



        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	// 에러메세지 처리
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{

        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/


        this.fnCommOnkeydown = function(obj,e)
        {
        	if( e.keycode == 13 )
        		this.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnSearch.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.edtSearchStr.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
        };
        this.loadIncludeScript("frTop_D03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
