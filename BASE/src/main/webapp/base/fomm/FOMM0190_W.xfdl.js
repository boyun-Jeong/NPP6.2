(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0190_W");
            this.set_titletext("부서관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"UP_DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTree", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("stcMenuGbn","20","13","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","85","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","divSearchArea:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","0","104","300",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsTree");
            obj.set_cssclass("grd_WF_tree");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_useCheck("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:DEPT_NM\" cssclass=\"\" treelevel=\"expr:DEPT_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("부서체계");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","grdTree:20","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_treeuseimage("false");
            obj.set_useSort("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"180\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"350\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"부서장\"/><Cell col=\"3\" text=\"상위부서코드\"/><Cell col=\"4\" text=\"회계부서코드\"/><Cell col=\"5\" text=\"정렬순서\"/><Cell col=\"6\" text=\"부서레벨\"/><Cell col=\"7\" text=\"부서상태\"/><Cell col=\"8\" text=\"전체경로\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:DEPT_CD\" edittype=\"none\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:DEPT_NM\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEPT_MANAGER_NM\" autosizecol=\"none\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:UP_DEPT_CD\" autosizecol=\"none\"/><Cell col=\"4\" text=\"bind:COST_DEPT_ID\" autosizecol=\"none\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:SORT_ORDER\" edittype=\"text\" autosizecol=\"none\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:DEPT_LEVEL\" edittype=\"text\" autosizecol=\"none\"/><Cell col=\"7\" text=\"bind:DEPT_STATUS\" displaytype=\"combotext\" combodataset=\"dsDeptStatus\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" autosizecol=\"none\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:FULL_PATH\" edittype=\"none\" textAlign=\"left\" autosizecol=\"default\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","grdTree:0","105","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcDeptTitle","grdTree:20.00","70","185","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[부서] 하위부서 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcDeptTitle:5","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeExpand","stcTreeTitle:126","70","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeCollapse","btnTreeExpand:5","70","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("-");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",1840,720,this.divSearchArea.form,function(p){});
            obj.set_mobileorientation("landscape");
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearchArea.form.cboMenuDIv","value","dsCond","TOP_MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.cboSvcTypeCd","value","dsCond","SVC_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0190_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0190_W
        * 화면(명)		︰ 부서관리
        * 메뉴(경로)	︰ 관리자 > 부서관리 > 부서관리
        * 화면 설명	︰ 부서관리
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
        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fnSearch();		// 조회
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0190W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTree=dsTree";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select02";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0190W/select02";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "select02" :
        			break;
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
        		case "searchConfirm" :
        			this.fnSearch01();
        			break;

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdTree.displayRowType();
        	this.grdData.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();
        }


        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['DEPT_STATUS'		]	// 조회할 상위코드
        		,codeDiv: ['CMM_CD'				]		// 조회할 코드의 업무구분
        		,optStr	: [''					]						// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y'					]						// 사용여부
        		,filter	: [''					]							// filterStr
        		,objDs	: [this.dsDeptStatus	]		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			this.dsTree.clearData();
        			this.dsData.clearData();
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnTreeExpand" :
        			this.grdTree.set_treeinitstatus("expand,all");
        			break;

        		case "btnTreeCollapse" :
        			this.grdTree.set_treeinitstatus("collapse,all");
        			break;

        		case "stcDeptTitle" :
        			//좌측 Grid에서 this.dsClassTree.getColumn(e.newrow, "CLASS_NM")에 해당하는 분류로 포커싱 이동
        			//var ind = obj.getDisplayText().substring(1, obj.getDisplayText().length-9);
        			var ind = this.dsCond.getColumn(0, "UP_DEPT_CD");

        			this.dsTree.set_rowposition(-1);
        			this.dsTree.set_rowposition(this.dsTree.findRow("DEPT_CD", ind));
        			this.grdTree.setCellPos(this.dsTree.findRow("DEPT_CD", ind));
        			this.grdTree.setFocus();

        			break;
        	}
        }

        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };


        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        this.dsTree_onrowposchanged = function(obj,e)
        {
        	var UP_DEPT_CD	= obj.getColumn(e.newrow, 'DEPT_CD');
        	var DEPT_NM		= obj.getColumn(e.newrow, 'DEPT_NM');

        	// grid title
        	if(!Ex.isEmpty(DEPT_NM))
        	{
        		var title = '[' + DEPT_NM + '] ' + '하위부서 목록';
        		this.stcDeptTitle.set_text(title);

        		// cnt 위치 조정
        		var objSize = nexacro.getTextSize(this.stcDeptTitle.text, this.stcDeptTitle._getCurrentStyleInheritValue("font"));
        		var nWidth = parseInt(objSize.nx) + 25;
        		this.stcDeptTitle.set_width(nWidth);
        		this.stcCnt.set_left(this.stcDeptTitle.getOffsetLeft() + nWidth);
        	}

        	// search
        	this.dsCond.setColumn(0, 'UP_DEPT_CD', UP_DEPT_CD);
        	this.fnSearch01();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtDeptNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdData.addEventHandler("onexpandup",this.grdMenuMt_onexpandup,this);
            this.stcDeptTitle.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTreeExpand.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTreeCollapse.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsTree.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsTree.addEventHandler("onrowposchanged",this.dsTree_onrowposchanged,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsDeptStatus.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsDeptStatus.addEventHandler("onrowposchanged",this.dsTree_onrowposchanged,this);
        };
        this.loadIncludeScript("FOMM0190_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
