(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("Action Item");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(910,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PJT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdData","10","44",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"식별일자\"/><Cell col=\"2\" text=\"처리기한\"/><Cell col=\"3\" text=\"담당자\"/><Cell col=\"4\" cssclass=\"cell_rightnoline\" text=\"상태\"/></Band><Band id=\"body\"><Cell cssclass=\"grdBCell_WF_event\" text=\"bind:TITLE\" textAlign=\"left\" tooltiptext=\"bind:TITLE\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ACK_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:DUE_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:CHARGE_NM\"/><Cell col=\"4\" cssclass=\"cell_rightnoline\" text=\"bind:STATUS_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","10","10","185","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Action Item");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",910,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pj_D04.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frHome_D00
        * 화면(명)		︰ -
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ 대시보드 우측 내 정보 Div
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
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
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();
        	this.fnGetCmmCd();

        	this.dsCond.setColumn(0, 'PJT_ID', '11');
        	this.fnSearch();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 최초 전체 조회
        this.fnSearch = function()
        {
        	var sTranId = "select05";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJHOME/select05";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
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
        	switch (sSvcId)
        	{

        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{

        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
        	{

        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {

        }


        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']				// 사용여부
        		,filter	: ['']				// filterStr
        		,objDs	: [this.dsDatTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{

        	}
        }



        this.grdData_oncellclick = function(obj,e)
        {
        	if( e.cell == obj.getBindCellIndex('body', 'TITLE') ) {
        		var ds = obj.getBindDataset();
        		var PJT_ID 		= ds.getColumn(e.row, "PJT_ID");
        		var PJT_NAME	= ds.getColumn(e.row, "PJT_NAME");
        		var SUB_ID		= ds.getColumn(e.row, "SUB_ID");

        		Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"actionItemPop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"pj::PJ0510_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: "Action Item 상세",
        					pPjtId		: PJT_ID,
        					pPjtNm  	: PJT_NAME,
        					pActItemCd	: SUB_ID,
        					pNew		: 'N'
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdData.addEventHandler("oncellclick",this.grdData_oncellclick,this);
        };
        this.loadIncludeScript("pj_D04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
