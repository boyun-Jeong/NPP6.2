(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PageDiv");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(170,22);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stPageContent",null,"0","155","22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#39b54a\'>0</fc>건     현재 <fc v=\'#39b54a\'>0</fc>/0페이지");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            obj.set_font("12px/normal \"NotoSansR\"");
            this.addChild(obj.name, obj);

            obj = new Static("stIcon",null,"0","5","22","stPageContent:1",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::search/searchTableBullet.png\') no-repeat center center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",170,22,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PageInfo.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 페이징 공통
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통 팝업
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

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.formObj;
        /*****************************************************************
         * 함수명	: doLoad
         * 설명	: 화면 초기 이벤트
         *****************************************************************/
        this.doLoad = function(obj, e)
        {	trace("PageInfo this.doLoad()");
        	this.formObj = this;
        	this.set_visible(false);
        };

        /*****************************************************************
         * 함수명	: setPage
         * 설명	: 페이징 정보 표시
         *****************************************************************/
        this.setPage = function(curPage, lastPage, totCnt)
        {	trace("PageInfo this.setPage() curPage : " + curPage + ", lastPage : " + lastPage + ", totCnt : " + totCnt + ", this.formObj.visible : " + this.formObj.visible);
        	if(this.formObj.visible) this.formObj.set_visible(false);

        	if(nexacro.toNumber(curPage) > 0)	//&& nexacro.toNumber(lastPage) > 0 && nexacro.toNumber(totCnt) > 0
        	{
        		var text = "<b v='true'>총</b> <fc v='#39b54a'>" + totCnt + "</fc><b v='true'>건</b>     <b v='true'>현재</b> <fc v='#39b54a'>" + curPage + "</fc>/<b v='true'>" + lastPage + "페이지</b>";
        		this.stPageContent.set_text(text);
        		this.stPageContent.set_fittocontents("width");
        		this.stPageContent.set_right(0);
        		this.stIcon.set_right("stPageContent:3");
        		if(!this.formObj.visible) this.formObj.set_visible(true);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.doLoad,this);
        };
        this.loadIncludeScript("PageInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
