(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0020_P01");
            this.set_titletext("결재자선택 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_USER\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_NM\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE_NUM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalBoxM", this);
            obj._setContents("<ColumnInfo><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalBoxD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","20","20",null,"370","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("결재선 검색");
            obj.set_border("0px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("결재자 검색");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","35",null,"50","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","5",null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","btnSearch:5",null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staCoNm","20.00","13","80","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","staCoNm:0.00","13","110","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("search");
            obj.set_validation("워크플로우ID;MIN_LEN:4");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staCoNm01","edtCoNm:25.00","13","90","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("부서코드/명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCoNm00","staCoNm01:0.00","13","150","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("search");
            obj.set_validation("워크플로우ID;MIN_LEN:4");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staCoNm00","edtCoNm00:30","13","90","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("나의 결재선");
            obj.set_cssclass("sta_WF_schTitle");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboWfApprovalBoxM","staCoNm00:0.00","13","159","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsWfApprovalBoxM");
            obj.set_datacolumn("BOX_DESC");
            obj.set_codecolumn("BOX_SEQ");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnMyAppv","cboWfApprovalBoxM:2.00","13","105","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("나의결재선 관리");
            obj.set_cursor("pointer");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdUser","0","104",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsUser");
            obj.set_cssclass("grd_WF_normal");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"휴대번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:POS_NM\"/><Cell col=\"5\" text=\"bind:ROLE_NM\"/><Cell col=\"6\" text=\"bind:TELNUM\"/><Cell col=\"7\" text=\"bind:MOBILE_NUM\"/></Band></Format></Formats>");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","84",null,"20","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divBottom","20","divTop:50",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("결재선");
            obj.set_border("0px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","-326",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("결재선");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divBottom.addChild(obj.name, obj);

            obj = new Grid("grdWfApprovalMt","0","34",null,null,"0","0",null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsWfApprovalMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"130\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"결재&#13;&#10;순서\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"사번\"/><Cell col=\"5\" text=\"성명\"/></Band><Band id=\"body\"><Cell edittype=\"expr:DIRECT_YN==&quot;Y&quot; ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:CHK\" displaytype=\"expr:DIRECT_YN==&quot;Y&quot; ? &quot;checkboxcontrol&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:APPR_SEQ\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:POS_NM\"/><Cell col=\"4\" text=\"bind:USER_ID\"/><Cell col=\"5\" text=\"bind:USER_NM\"/></Band></Format></Formats>");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"0","220","24","0",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divBottom.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divBottom.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnMoveDown",null,"0","60",null,"btnDelete:5","0",null,null,null,null,this.divBottom.form.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("아래로");
            obj.set_cursor("pointer");
            this.divBottom.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnMoveUp",null,"0","60",null,"btnMoveDown:5","0",null,null,null,null,this.divBottom.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("위로");
            obj.set_cursor("pointer");
            this.divBottom.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd","50%","divTop:8","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("▼");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnAppvConf",null,null,"110","32","btnClose:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("0");
            obj.set_text("결재선 적용");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divTop.form.divSearchArea.form,function(p){});
            this.divTop.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divBottom.form.divGrdTopBtn.form,function(p){});
            this.divBottom.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divTop.form.divSearchArea.form.edtCoNm","value","dsCond","SEARCH_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divTop.form.divSearchArea.form.staCoNm01","value","dsCond","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0020_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SR0020_P01
        * 화면(명)		︰ 검토자 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ 결재선 지정
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.06.20
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.06.20	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.afCboWfApprovalBox;
        this.lastSelectCombo;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	var wfProcApprLvlSeqArr = [];

        	var wfProcApprLvlSeq = this.getOwnerFrame().pApprWfProcCdLvlSeq;

        	if( Ex.isEmpty(wfProcApprLvlSeq) )
        	{
        		var param = {id : "pAlertEmptypprWfProcCdLvlSeqI", msg : "나의 결재선 목록이 선택되지 않았습니다."};
        		Ex.core.alert(this, param);
        		return;
        	}
        	else
        	{
        		wfProcApprLvlSeqArr = wfProcApprLvlSeq.split("-");
        		this.dsCond.setColumn(0, "REQ_ID",			this.getOwnerFrame().pReqId);
        		this.dsCond.setColumn(0, "WF_PROC_CD",		wfProcApprLvlSeqArr[0]);
        		this.dsCond.setColumn(0, "APPR_LVL_SEQ",	wfProcApprLvlSeqArr[1]);
        	}

        	var objDs = this.getOwnerFrame().dsWfApprovalMt;

        	if( !Ex.isEmpty(objDs) )
        	{
        		var objType = objDs.toString().toUpperCase();
        		trace("objType : " + objType);
        		var filterstr = objDs.filterstr;
        		if(objType == "[OBJECT DATASET]") this.dsWfApprovalMt.loadXML(objDs.saveXML());
        		//this.dsWfApprovalMt.set_filterstr("WF_PROC_CD=='" + this.dsCond.getColumn(0, "WF_PROC_CD") + "' && APPR_LVL_SEQ=='" + this.dsCond.getColumn(0, "APPR_LVL_SEQ") + "'");
        		this.dsWfApprovalMt.set_filterstr(filterstr);

        		this.setAddColumnDsWfApprovalMt();

        		for(var i=0; i<this.dsWfApprovalMt.rowcount; i++)
        		{
        			this.dsWfApprovalMt.setColumn(i, "CHK", "0");
        		}
        	}
        	this.fnSearchMyAppr();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(0, "GUBUN", "");
        	this.dsCond.setColumn(0, "SEARCH_WORD", "");
        }

        // 조회
        this.fnSearchUser = function()
        {
        	// transaction
        	var sTranId = "selectUser";
            var sService = "SR0020P/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUser=dsUser";			// 서버에서 수신할 데이타셋
            var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 나의 결재선 조회
        this.fnSearchMyAppr = function()
        {
        	var sTranId = "selectAll";															// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0020P/select04";													// 서비스명
            var sInDs = "dsCond=dsCond";                  										// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfApprovalBoxM=dsWfApprovalBoxM dsWfApprovalBoxD=dsWfApprovalBoxD";	// 서버에서 수신할 데이타셋
            var sArg = "";                   													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	//trace("SR0020_P01 this.fnCallback() sSvcId : " +sSvcId + " nErrorCode : " + nErrorCode + " sErrorMsg : " + sErrorMsg);
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
        		case "selectAll" :
        			var aRow = this.dsWfApprovalBoxM.insertRow(0);
        			this.dsWfApprovalBoxM.setColumn(aRow, "BOX_SEQ", "");
        			this.dsWfApprovalBoxM.setColumn(aRow, "BOX_DESC", "미지정");

        			var fRow = this.dsWfApprovalBoxM.findRow("DEFAULT_YN", "Y");
        			if(fRow > -1)
        			{
        				var boxSeq = this.dsWfApprovalBoxM.getColumn(fRow, "BOX_SEQ");
        				this.dsCond.setColumn(0, "BOX_SEQ", boxSeq);
        				this.divTop.form.divSearchArea.form.cboWfApprovalBoxM.set_value(boxSeq);
        				var evt = nexacro.ItemChangeEventInfo;
        				evt.postvalue = boxSeq;
        				this.cboOniIemChanged(this.divTop.form.divSearchArea.form.cboWfApprovalBoxM, evt);
        			}
        			else
        			{
        				this.dsCond.setColumn(0, "BOX_SEQ", "");
        				this.divTop.form.divSearchArea.form.cboWfApprovalBoxM.set_value("");
        			}
        			break;

        		case "select01" :
        			Ex.core.toast(this, "10002");
        			this.resetGridHeadCheck();	//그리드 Checkbox 초기화
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	trace("this.fnPopupAfter() pID : " + pID + " varValue : " + varValue);
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "SR0020_P02" :	// 사용자선택
        			if(varValue == "Y")
        			{
        				this.dsCond.setColumn(0, "BOX_SEQ", "");
        				this.fnSearchMyAppr();
        			}
        			break;

        		case "pAlertEmptypprWfProcCdLvlSeq" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "" :
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnAddRow = function(objDs, fromDs, isRowDbClick)
        {
        	//trace("SR0020_P01 this.fnAddRow() objDs : " + objDs.id + " fromDs : " + fromDs.id + " objDs.rowcount : " + objDs.rowcount + " isRowDbClick : " + isRowDbClick);

        	if( !Ex.isEmpty(fromDs) )
        	{
        		if(isRowDbClick)	//Row double click으로 추가하는 경우
        		{
        			if(objDs.findRow("USER_ID", fromDs.getColumn(fromDs.rowposition, "USER_ID")) == -1)
        			{
        				var aRow = objDs.setAddRow();
        				objDs.setColumn(aRow, "DIRECT_YN",		"Y");
        				objDs.setColumn(aRow, "APPR_GRP_SEQ",	"1");
        				objDs.setColumn(aRow, "REQ_ID",			this.dsCond.getColumn(0, "REQ_ID"));
        				objDs.setColumn(aRow, "WF_PROC_CD",		this.dsCond.getColumn(0, "WF_PROC_CD"));
        				objDs.setColumn(aRow, "APPR_LVL_SEQ",	this.dsCond.getColumn(0, "APPR_LVL_SEQ"));
        				objDs.setColumn(aRow, "APPR_SEQ",		objDs.rowcount);
        				objDs.setColumn(aRow, "APPR_GBN_CD",	"A02");
        				//trace("SR0020_P01 this.fnAddRow() rowVal : " + rowVal + " aRow : " + aRow);
        				this.getColumnData(objDs, aRow, fromDs, fromDs.rowposition);
        			}
        			fromDs.setColumn(fromDs.rowposition, "CHK", 0);
        		}
        		else
        		{
        			for(var i=0; i<fromDs.rowcount; i++)
        			{
        				if(fromDs.getColumn(i, "CHK") == 1)
        				{
        					if(objDs.findRow("USER_ID", fromDs.getColumn(i, "USER_ID")) == -1)
        					{
        						var aRow = objDs.setAddRow();
        						objDs.setColumn(aRow, "DIRECT_YN",		"Y");
        						objDs.setColumn(aRow, "REQ_ID",			this.dsCond.getColumn(0, "REQ_ID"));
        						objDs.setColumn(aRow, "WF_PROC_CD",		this.dsCond.getColumn(0, "WF_PROC_CD"));
        						objDs.setColumn(aRow, "APPR_LVL_SEQ",	this.dsCond.getColumn(0, "APPR_LVL_SEQ"));
        						objDs.setColumn(aRow, "APPR_SEQ",		objDs.rowcount);
        						objDs.setColumn(aRow, "APPR_GBN_CD",	"A02");
        						this.getColumnData(objDs, aRow, fromDs, i);
        					}
        					fromDs.setColumn(i, "CHK", 0);
        				}
        			}
        			this.resetGridHeadCheck(fromDs);	//그리드 Checkbox 초기화
        		}
        	}
        }

        //추가 버튼 처리에 따른 선택한 로우 데이터 추가할 데이터셋 컬럼값에 삽입
        this.getColumnData = function(recvDs, recvRowIdx, readDs, readRowIdx)
        {
        	var columnInfo = ["USER_ID", "USER_NM", "DEPT_CD", "DEPT_NM", "POS_NM"]

        	for(var i=0; i<columnInfo.length; i++)
        	{
        		if( !Ex.isEmpty(recvDs.colinfos[columnInfo[i]]) && !Ex.isEmpty(readDs.colinfos[columnInfo[i]]) )
        		{
        			recvDs.setColumn(recvRowIdx, columnInfo[i], readDs.getColumn(readRowIdx, columnInfo[i]));
        		}
        	}
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDeleteRow = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");
        	for(var i = objDs.rowcount-1; i >= 0; i--)	objDs.deleteRow(i);
        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);

        	this.resetGridHeadCheck(objDs);	//그리드 Checkbox 초기화

        	for(var i=0; i<objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "APPR_SEQ", i+1);
        	}
        }

        // 결재선 적용
        this.fnSelect = function()
        {
        	Ex.core.pclose(this, this.dsWfApprovalMt.saveXML());
        }

        //그리드 Checkbox 초기화 함수
        this.resetGridHeadCheck = function(objDs)
        {
        	//trace("this.resetGridHeadCheck() objDs : " + objDs);
        	var objDsId = "";

        	if( Ex.isEmpty(objDs) ) objDsId = "ALL";
        	else
        	{
        		var objType = objDs.toString().toUpperCase();
        		if(objType == "[OBJECT DATASET]")
        		{
        			objDsId = objDs.id;
        		}
        		else
        		{
        // 			var param = {id : "pAlertNotDatasetI", msg : "GRID Head Chebox초기화 Dataset 정보가 올바르지 않습니다."};
        // 			Ex.core.alert(this, param);
        			trace("GRID Head Chebox초기화 Dataset 정보가 올바르지 않습니다.");
        			return;
        		}
        	}

        	if(objDsId == "ALL")
        	{
        		this.divTop.form.grdUser.setCellProperty("Head", 0, "text", 0);
        		this.divBottom.form.grdWfApprovalMt.setCellProperty("Head", 0, "text", "0");
        	}
        	else if(objDsId == "dsUser") this.divTop.form.grdUser.setCellProperty("Head", 0, "text", 0);
        	else if(objDsId == "dsWfApprovalMt") this.divBottom.form.grdWfApprovalMt.setCellProperty("Head", 0, "text", "0");
        }

        //저장 validation Check
        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsWfApprovalMt) ) return false;

        	// Grid Validation
        	if( !this.divBottom.form.grdWfApprovalMt.checkValidate() ) return false;
        	return true;
        }

        this.setAddColumnDsWfApprovalMt = function()
        {
        	if(this.dsWfApprovalMt.colinfos["MNG_USER_DIV"] != "[object DSColumnInfo]")
        	{
        		this.dsWfApprovalMt.addColumn("MNG_USER_DIV", "string");
        	}

        	if(this.dsWfApprovalMt.colinfos["DRAFTER_ID"] != "[object DSColumnInfo]")
        	{
        		this.dsWfApprovalMt.addColumn("DRAFTER_ID", "string");
        	}

        	if(this.dsWfApprovalMt.colinfos["DIRECT_YN"] != "[object DSColumnInfo]")
        	{
        		this.dsWfApprovalMt.addColumn("DIRECT_YN", "string");
        	}

        	if(this.dsWfApprovalMt.colinfos["APPR_GRP_SEQ"] != "[object DSColumnInfo]")
        	{
        		this.dsWfApprovalMt.addColumn("APPR_GRP_SEQ", "string");
        	}
        }

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
        		case "btnSearchReset" :		//초기화
        			this.fnSearchReset();
        			break;

        		case "btnSearch" :			//조회
        			this.fnSearchUser();
        			break;

        		case "btnMyAppv" :			//나의 결재선 관리
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"SR0020_P02",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0020_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "결재선 관리"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=800,height=750"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize,useCloseButton=false"
        			);
        			break;

        		case "btnAdd" :				//▼ (추가버튼)
        			this.fnAddRow(this.dsWfApprovalMt, this.dsUser);
        			break;

        		case "btnDelete" :			//삭제 버튼
        			this.fnDeleteRow(this.dsWfApprovalMt);
        			break;

        		case "btnMoveUp" :			//위로
        			var rowP = this.dsWfApprovalMt.rowposition;
        			if(rowP > 0)
        			{
        				this.dsWfApprovalMt.setColumn(rowP-1, "APPR_SEQ", rowP+1); //상위 row 순서를 하위로 변경
        				this.dsWfApprovalMt.setColumn(rowP, "APPR_SEQ", rowP); //상위 row 순서를 하위로 변경
        				this.dsWfApprovalMt.moveRow(rowP, rowP-1);
        			}
        			break;

        		case "btnMoveDown" :		//아래로
        			var rowP = this.dsWfApprovalMt.rowposition;
        			var rowcnt = this.dsWfApprovalMt.rowcount;
        			if(rowP < rowcnt-1)
        			{
        				this.dsWfApprovalMt.setColumn(rowP+1, "APPR_SEQ", rowP+1); //상위 row 순서를 하위로 변경
        				this.dsWfApprovalMt.setColumn(rowP, "APPR_SEQ", rowP+2); //상위 row 순서를 하위로 변경
        				this.dsWfApprovalMt.moveRow(rowP, rowP+1);
        			}
        			break;

        		case "btnAppvConf" :		// 결재선 적용
        			if(this.dsWfApprovalMt.rowcount == 0)
        			{
        				var cboText = this.divTop.form.divSearchArea.form.cboWfApprovalBox.text;
        				var param = {id : "pAlertNoApprUserI", msg : "결재선에 적용할 결재자 목록이 없습니다."};
        				Ex.core.alert(this, param);
        				return;
        			}
        			else
        			{
        				this.fnSelect();
        			}
        			break;

        		case "btnSave" :			// 저장
        			if( this.fnCheckValidate() )
        			{
        				var param = {
        					 id : "saveConfirm"
        					,msg : "10003"
        					,arrparam : ['']
        					,msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        };

        this.grdOnCellDblClick = function(obj,e)
        {	//trace("SR0020_P01 this.grdOnCellDblClick() obj.id : " + obj.id);
        	if(obj.id == "grdUser")
        	{
        		this.fnAddRow(this.dsWfApprovalMt, obj.getBindDataset(), true);
        	}
        };

        this.edtOnKeyup = function(obj,e)
        {
        	if(e.keycode == 13)	this.fnSearchUser();
        };

        this.cboOniIemChanged = function(obj,e)
        {
        	this.dsWfApprovalBoxD.set_filterstr("BOX_SEQ=='" + e.postvalue + "'");
        	this.dsUser.clearData();
        	trace("this.cboOniIemChanged() e.postvalue : " + e.postvalue + " this.dsWfApprovalBoxD.rowcount : " + this.dsWfApprovalBoxD.rowcount);

        	for(var i=0; i<this.dsWfApprovalBoxD.rowcount; i++)
        	{
        		var aRow = this.dsUser.addRow();
        		this.dsUser.setColumn(aRow, "CO_CD",		this.dsWfApprovalBoxD.getColumn(i, "CO_CD"));
        		this.dsUser.setColumn(aRow, "CO_NM",		this.dsWfApprovalBoxD.getColumn(i, "CO_NM"));
        		this.dsUser.setColumn(aRow, "USER_ID",		this.dsWfApprovalBoxD.getColumn(i, "USER_ID"));
        		this.dsUser.setColumn(aRow, "USER_NM",		this.dsWfApprovalBoxD.getColumn(i, "USER_NM"));
        		this.dsUser.setColumn(aRow, "DEPT_CD",		this.dsWfApprovalBoxD.getColumn(i, "DEPT_CD"));
        		this.dsUser.setColumn(aRow, "DEPT_NM",		this.dsWfApprovalBoxD.getColumn(i, "DEPT_NM"));
        		this.dsUser.setColumn(aRow, "POS_NM",		this.dsWfApprovalBoxD.getColumn(i, "POS_NM"));
        		this.dsUser.setColumn(aRow, "ROLE_NM",		this.dsWfApprovalBoxD.getColumn(i, "ROLE_NM"));
        		this.dsUser.setColumn(aRow, "TELNUM",		this.dsWfApprovalBoxD.getColumn(i, "TELNUM"));
        		this.dsUser.setColumn(aRow, "MOBILE_NUM",	this.dsWfApprovalBoxD.getColumn(i, "MOBILE_NUM"));
        	}
        // 	, #{REQ_ID}			AS REQ_ID
        // 			, #{WF_PROC_CD}	AS WF_PROC_CD
        // 			, #{APPR_LVL_SEQ}	AS APPR_LVL_SEQ
        // 			, 'A02'					AS APPR_GBN_CD
        // 		    , NULL					AS APPR_STAT_CD
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divTop.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.divSearchArea.form.edtCoNm.addEventHandler("onkeyup",this.edtOnKeyup,this);
            this.divTop.form.divSearchArea.form.edtCoNm00.addEventHandler("onkeyup",this.edtOnKeyup,this);
            this.divTop.form.divSearchArea.form.cboWfApprovalBoxM.addEventHandler("onitemchanged",this.cboOniIemChanged,this);
            this.divTop.form.divSearchArea.form.btnMyAppv.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.grdUser.addEventHandler("oncelldblclick",this.grdOnCellDblClick,this);
            this.divBottom.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.divGrdTopBtn.form.btnMoveDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.divGrdTopBtn.form.btnMoveUp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnAppvConf.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsUser.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfApprovalMt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0020_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
