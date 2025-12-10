(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0000_P01");
            this.set_titletext("부서선택 팝업(공통)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDeptTreeMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptInfoDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_STR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","70",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcDeptNm","20","13","60","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("true");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","79.00","13","140","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("true");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            obj.set_tooltiptext("조회");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            obj.set_tooltiptext("초기화");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"13","20","24","0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDeptNm00","240.00","13","90","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("폐쇄조직포함");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("true");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkDeptStatus","326","14","33","22",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staDeptTitle","20.00","90","38","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staDeptTitle:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdDeptTreeMt","20","124","300",null,null,"20",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsDeptTreeMt");
            obj.set_cssclass("grd_WF_tree");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_visible("true");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_useCheck("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:DEPT_NM\" treelevel=\"bind:DEPT_LEVEL\" cssclass=\"\" border=\"1px solid #dbdee2\" color=\"#666666\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","staDeptTitle:17","90","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsDeptTreeMt");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00",null,"124","20",null,"460","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdDeptInfoDt","340.00","124",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsDeptInfoDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"170\"/><Column size=\"63\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"부서장\"/><Cell col=\"3\" text=\"상위부서명\"/><Cell col=\"4\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:DEPT_MANAGER_NM\"/><Cell col=\"3\" text=\"bind:UP_DEPT_NM\"/><Cell col=\"4\" text=\"bind:STATUS_NM\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnTreeExpand","stcCnt:130","90","24","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_text("+");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnTreeCollapse","btnTreeExpand:5","90","24","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_text("-");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stc00","340.00","90","431","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_text("※ 프로젝트 수행사는 팀명을 [프로젝트수행팀]으로 지정하세요");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00","21","34","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","241.00","34","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divContent.form.divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContent.form.divSearchArea.form.chkDeptStatus","value","dsCond","DEPT_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0000_P04.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0000_P04
        * 화면(명)		︰ 부서 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 기본 부서 선택 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.29
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.29	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	* pSelType			선택 타입					S:단일선택 M:다중선택
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pSelType = '';		// 선택구분; 'S':single:단건선택; 'M':multi:다건선택


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
        	this.fnCompInit();		// 컴포넌트 초기화
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'CO_NM', this.getOwnerFrame().pCoNm || '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_CD', this.getOwnerFrame().pDeptCd || '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_NM', this.getOwnerFrame().pDeptNm || '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEARCH_STR', this.getOwnerFrame().pSearchStr || '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'GBN', this.getOwnerFrame().pGbn || '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEARCH_YN', this.getOwnerFrame().pSearchYn || '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_STATUS', (this.getOwnerFrame().pDeptStatus || '1') );
        	//if(this.getOwnerFrame().pItDept == "SR_ITGROUP_CD") this.dsCond.setColumn(0,"UP_CMM_CD",this.getOwnerFrame().pItDept);
        }

        // 조회
        this.fnSearch = function()
        {
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_CD', '');
        	this.dsDeptInfoDt.clearData();
        	var pUpCmmNm = (this.getOwnerFrame().pUpCmmNm||'').toUpperCase();
        	if(!Ex.isEmpty(pUpCmmNm))
        		this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_NM', pUpCmmNm);
        	// transaction
        	var sTranId  = "select01";              // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/select02";    // 서비스명
            var sInDs    = "dsCond=dsCond";         // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs   = "dsDeptTreeMt=dsDeptTreeMt"; // 서버에서 수신할 데이타셋
            var sArg     = "";                      // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearch02 = function()
        {
        // 	if (!Ex.isEmpty(this.dsCond.getColumn(this.dsCond.rowposition, 'DEPT_CD'))){
        // 			this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_NM', '');
        // 	}

        	// transaction
        	var sTranId  = "select02";              // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/select02";    // 서비스명
            var sInDs    = "dsCond=dsCond";         // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs   = "dsDeptInfoDt=dsDeptTreeMt"; // 서버에서 수신할 데이타셋
            var sArg     = "";                      // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearch03 = function()
        {
        	// transaction
        	var sTranId  = "select03";              // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/select02";    // 서비스명
            var sInDs    = "dsCond=dsCond";         // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs   = "dsDeptInfoDt=dsDeptTreeMt"; // 서버에서 수신할 데이타셋
            var sArg     = "";                      // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {

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
        			if (this.dsDeptTreeMt.getRowCount()==1) {
        				var deptCd = this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, 'DEPT_CD');
        				this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_CD', deptCd);

        				this.fnSearch03();
        			} else {
        				Ex.core.toast(this, "10002");
        				this.divContent.form.grdDeptTreeMt.setCellProperty("Head", this.divContent.form.grdDeptTreeMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			}
        			this.divContent.form.divSearchArea.form.edtDeptNm.setFocus();
        			break;

        		case "select02" :
        		    this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_CD', '');
        			break;

        		case "select03" :
        		    this.fnSelect(this.pSelType);
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
        	if(!varValue)
        		return;

        	switch(mID)
        	{

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnSearchReset();	// 검색조건 초기화

        	this.pSelType = (this.getOwnerFrame().pSelType||'').toUpperCase();
        	switch(this.pSelType)
        	{
        //		case "M" :				this.divContent.form.grdDeptTreeMt.set_formatid('multiSel');	break;
        //		case "S" :	default :	this.divContent.form.grdDeptTreeMt.set_formatid('singleSel');	break;
        	}
        	this.divContent.form.grdDeptTreeMt.set_visible(true);

        	if(this.dsCond.getColumn(0, 'GBN') == "BIZ" || this.dsCond.getColumn(0, 'GBN') == "IV"  ){
        		this.divContent.form.divSearchArea.form.chkDeptStatus.enable = false;
        	}else{
        		this.divContent.form.divSearchArea.form.chkDeptStatus.enable = true;
        	}

        	this.fnSearch();	// 검색
        }

        // 선택
        this.fnSelect = function(selType)
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pCheckDs) && !Ex.isEmpty(this.getOwnerFrame().pCheckCol) )
        	{
        		var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_CD"));
        		if(fRow > -1)
        		{
        			var userInfo = this.dsDeptInfoDt.getColumn(this.dsDeptInfoDt.rowposition, "DEPT_NM") + "[" + this.dsDeptInfoDt.getColumn(this.dsDeptInfoDt.rowposition, "DEPT_CD") + "]";
        			var oParam = {id : "alertAddUserI", msg : "{0} 이미 추가한 부서 입니다.", arrparam : [userInfo], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}

        	// 추진부서 팝업에서는 부서가 선택 안되도록 처리
        	if(this.dsCond.getColumn(0, 'GBN') == "BIZ" || this.dsCond.getColumn(0, 'GBN') == "IV"  ){

        		if( this.dsDeptInfoDt.getColumn(this.dsDeptInfoDt.rowposition, "LT") == "0") {

        			var oParam = {id : "alertArt", msg : "선택 할 수 없는 부서 입니다.", arrparam : [userInfo], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}

        	this.dsRet.clear();
            this.dsRet.assign(this.dsDeptInfoDt);
            this.dsRet.clearData();
            this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsDeptInfoDt, this.dsDeptInfoDt.rowposition);

        	Ex.core.pclose(this, this.dsRet.saveXML());

        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :		// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_STATUS', 'N');
        			this.fnSearchReset();
        			this.divContent.form.divSearchArea.form.edtDeptNm.setFocus();
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			this.fnSelect(this.pSelType);
        			break;
        		case "btnTreeExpand" :
        			this.divContent.form.grdDeptTreeMt.set_treeinitstatus("expand,all");
        			break;

        		case "btnTreeCollapse" :
        			this.divContent.form.grdDeptTreeMt.set_treeinitstatus("collapse,all");
        			var minLvl = this.divContent.form.grdDeptTreeMt.getBindDataset().getMin("LVL");

        // 			for(var i=0; i<this.grdTree.getBindDataset().rowcount; i++)
        // 			{
        // 				if(this.grdTree.getBindDataset().getColumn(i, "LVL") < minLvl + 1)
        // 				{
        // 					trace("i=" + i);
        // 					this.grdTree.setTreeStatus(i, true);
        // 				}
        // 			}
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        // this.divContent_grdDeptTreeMt_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	this.fnSelect('S');
        // };


        this.dsOnRowposChanged = function(obj,e)
        {
        	trace("childRow : " + this.divContent.form.grdDeptTreeMt.getTreeChildRow(e.newrow, 0) + "/" +
        						  this.divContent.form.grdDeptTreeMt.getTreeChildRow(e.newrow, -1)
        	);
        };

        this.divContent_grdDeptInfoDt_oncelldblclick = function(obj,e)
        {
        	this.fnSelect('S');
        };

        this.divContent_divSearchArea_chkDeptStatus_onclick = function(obj,e)
        {
        	if(this.dsCond.getColumn(this.dsCond.rowposition, 'DEPT_STATUS') == 'Y') this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_STATUS', '');
        	else this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_STATUS', '1');
        };

        this.divContent_grdDeptTreeMt_oncellclick = function(obj,e)
        {
        	//if(this.dsCond.getColumn(0, 'GBN') == "BIZ" || this.dsCond.getColumn(0, 'GBN') == "IV"  ){

        		//if(nexacro.toNumber(this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_TYPE")) >= 50){

         	   if(this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "LT") == "1" ){

        			this.dsDeptInfoDt.copyData(this.dsDeptTreeMt);
        			this.dsDeptInfoDt.filter("DEPT_CD =='" + this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_CD")+ "'");
        			this.dsDeptInfoDt.rowposition = 0;


               }else{

        			this.dsDeptInfoDt.copyData(this.dsDeptTreeMt);
        			this.dsDeptInfoDt.filter("UP_DEPT_CD =='" + this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_CD")+ "'");
        			this.dsDeptInfoDt.rowposition = 0;
        	   }



        	/* 24-10-28 주석처리
        		var deptLv = this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition,'DEPT_LEVEL');
        		if (deptLv < 4){
        			this.dsCond.setColumn(this.dsCond.rowposition,'DEPT_CD','0');
        		}else {

        			var deptCd = this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition,'DEPT_CD');
        			this.dsCond.setColumn(this.dsCond.rowposition,'DEPT_CD',deptCd);
        		}

        		this.fnSearch02();
        	*/

        };
        this.divContent_grdDeptTreeMt_oncelldblclick = function(obj,e)
        {
        	if(this.dsCond.getColumn(0, 'GBN') == "BIZ" || this.dsCond.getColumn(0, 'GBN') == "IV"  ){

        		if(this.dsCond.getColumn(0, 'SEARCH_YN') == "Y"){   // 조회 조건으로 사용 될 때에는 부서 이상도 선택 되도록 처리
        			this.dsDeptInfoDt.copyData(this.dsDeptTreeMt);
        			this.dsDeptInfoDt.filter("DEPT_CD =='" + this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_CD")+ "'");
        			this.dsDeptInfoDt.rowposition = 0;

        			this.fnSelect('S');

        		}else{
        			if(nexacro.toNumber(this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_TYPE")) >= 50 && this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "LT") == "1"){

        				this.dsDeptInfoDt.copyData(this.dsDeptTreeMt);
        				this.dsDeptInfoDt.filter("DEPT_CD =='" + this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_CD")+ "'");
        				this.dsDeptInfoDt.rowposition = 0;

        				this.fnSelect('S');
        			}
        		}
        	}else{

        			this.dsDeptInfoDt.copyData(this.dsDeptTreeMt);
        			this.dsDeptInfoDt.filter("DEPT_CD =='" + this.dsDeptTreeMt.getColumn(this.dsDeptTreeMt.rowposition, "DEPT_CD")+ "'");
        		    this.dsDeptInfoDt.rowposition = 0;

        		 	this.fnSelect('S');

        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtDeptNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.chkDeptStatus.addEventHandler("onclick",this.divContent_divSearchArea_chkDeptStatus_onclick,this);
            this.divContent.form.grdDeptTreeMt.addEventHandler("oncellclick",this.divContent_grdDeptTreeMt_oncellclick,this);
            this.divContent.form.grdDeptTreeMt.addEventHandler("oncelldblclick",this.divContent_grdDeptTreeMt_oncelldblclick,this);
            this.divContent.form.grdDeptInfoDt.addEventHandler("oncelldblclick",this.divContent_grdDeptInfoDt_oncelldblclick,this);
            this.divContent.form.btnTreeExpand.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btnTreeCollapse.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsDeptTreeMt.addEventHandler("onrowposchanged",this.dsOnRowposChanged,this);
            this.dsDeptInfoDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0000_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
