(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0020_P03");
            this.set_titletext("결재자선택 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,735);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_USER\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalBoxM", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_SEQ\" type=\"string\" size=\"32\"/><Column id=\"BOX_DESC\" type=\"string\" size=\"32\"/><Column id=\"BOX_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_YN\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalBoxD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalBoxDSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","20.00","20",null,"299","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("결재선 검색");
            obj.set_border("0px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("사용자 검색");
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

            obj = new Static("staUser","20.00","13","80","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtUser","staUser:0.00","13","110","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("search");
            obj.set_validation("워크플로우ID;MIN_LEN:4");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staDept","edtUser:30.00","13","90","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("부서코드/명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDept","staDept:0.00","13","150","24",null,null,null,null,null,null,this.divTop.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("search");
            obj.set_validation("워크플로우ID;MIN_LEN:4");
            this.divTop.form.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdUser","0","104",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_normal");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_binddataset("dsUser");
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

            obj = new Static("stcEmpty01_00","-20","divTop:0",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","48.38%","stcEmpty01_00:0","27","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("▼");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01_00_00","0","btnAdd:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDown","20","stcEmpty01_00_00:0",null,null,"20","divBottom:20",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0.00","0",null,"34","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcReqId","0.00","0","114","34",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("1");
            obj.set_text("결재선 별칭");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcEmpty01_00","-20","stcBg01:0",null,"10","-20",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0.00","44","225","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("3");
            obj.set_text("[나의 결재선] 결재자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","stcEmpty01_00:24",null,"10","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Grid("grdWfApprovalBoxD","0","stcEmpty01:0",null,null,"0","0",null,null,null,null,this.divDown.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsWfApprovalBoxD");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_useContext("false");
            obj.set_useFilter("false");
            obj.set_autosizebandtype("nohead,noleft");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"직급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:USER_ID\"/><Cell col=\"4\" text=\"bind:USER_NM\"/><Cell col=\"5\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" text=\"bind:POS_NM\"/></Band></Format></Formats>");
            this.divDown.addChild(obj.name, obj);

            obj = new Combo("cboBoxSeq","119.00","5","280","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsWfApprovalBoxM");
            obj.set_codecolumn("BOX_SEQ");
            obj.set_datacolumn("BOX_INFO");
            obj.set_value("");
            obj.set_index("0");
            this.divDown.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"44","365","24","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("7");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divDown.form.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divDown.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnMoveDown",null,"0","60","24","btnDelete:5",null,null,null,null,null,this.divDown.form.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("아래로");
            obj.set_cursor("pointer");
            this.divDown.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnMoveUp",null,"0","60","24","btnMoveDown:5",null,null,null,null,null,this.divDown.form.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("위로");
            obj.set_cursor("pointer");
            this.divDown.form.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divTop.form.divSearchArea.form,function(p){});
            this.divTop.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form.divBtn.form
            obj = new Layout("default","",0,0,this.divDown.form.divBtn.form,function(p){});
            this.divDown.form.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form
            obj = new Layout("default","",0,0,this.divDown.form,function(p){});
            this.divDown.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,735,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDown.form.stcBg01","value","dsCond","BOX_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTop.form.divSearchArea.form.edtUser","value","dsCond","SEARCH_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTop.form.divSearchArea.form.staDept","value","dsCond","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTop.form.divSearchArea.form.edtDept","value","dsCond","SEARCH_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0020_P03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SR0020_P03
        * 화면(명)		︰ 나의 결재선 신규 등록
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ 나의 결재선 추가
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

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	//trace("[SR0020_P03] this.getOwnerFrame().saveYn : " + this.getOwnerFrame().saveYn);
        	if( Ex.isEmpty(this.getOwnerFrame().saveYn) )
        	{
        		this.getOwnerFrame().saveYn = "N";
        	}
        	this.divDown.form.grdWfApprovalBoxD.displayRowType();
        	this.fnSearch();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 사용자 검색
        this.fnSearchUser = function()
        {
        	var sTranId = "selectUser";
            var sService = "SR0020P/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUser=dsUser";			// 서버에서 수신할 데이타셋
            var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch = function()
        {
        	var sTranId = "selectAll";															// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0020P/select04";													// 서비스명
            var sInDs = "dsCond=dsCond";                  										// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfApprovalBoxM=dsWfApprovalBoxM dsWfApprovalBoxD=dsWfApprovalBoxD";	// 서버에서 수신할 데이타셋
            var sArg = "";                   													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	this.dsWfApprovalBoxDSave.assign(this.dsWfApprovalBoxD);
        	this.dsWfApprovalBoxDSave.clearData();

        	var orgFilter = this.dsWfApprovalBoxD.filterstr;
        	this.dsWfApprovalBoxD.set_filterstr("");

        	for(var i=0; i<this.dsWfApprovalBoxD.rowcount; i++)
        	{
        		if(this.dsWfApprovalBoxD.getColumn(i, "ROWFLAG") != "D")
        		{
        			var aRow = this.dsWfApprovalBoxDSave.setAddRow();
        			this.dsWfApprovalBoxDSave.copyRow(aRow, this.dsWfApprovalBoxD, i);
        		}
        	}
        	this.dsWfApprovalBoxD.set_filterstr(orgFilter);

        	var sTranId = "save01";
            var sService = "SR0020P/save02";
            var sInDs = "dsWfApprovalBoxD=dsWfApprovalBoxDSave:U";
            var sOutDs = "dsWfApprovalBoxD=dsWfApprovalBoxD";
            var sArg = "";
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
        		case "selectAll" :
        			this.divDown.form.cboBoxSeq.set_value(this.getOwnerFrame().pBoxSeq);
        			var evt = nexacro.ItemChangeEventInfo;
        			evt.postvalue = this.getOwnerFrame().pBoxSeq;
        			this.cboOnItemChanged(this.divDown.form.cboBoxSeq, evt);
        			this.divTop.form.divSearchArea.form.edtUser.setFocus();
        			break;

        		case "save01" :
        			this.getOwnerFrame().saveYn = "Y";
        			//this.dsWfApprovalBoxD.set_filterstr("BOX_SEQ=='" + this.divDown.form.cboBoxSeq.value + "' && ROWFLAG != 'D'");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "confirmDataChgClose" :
        			Ex.core.pclose(this, this.getOwnerFrame().saveYn);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        //저장 validation Check
        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsWfApprovalBoxD) )	return false;

        	// Grid Validation
        	if( !this.divDown.form.grdWfApprovalBoxD.checkValidate() ) return false;
        	return true;
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDeleteRow = function(objDs)
        {
        	objDs.set_enableevent(false);
        	var orgFilterStr = objDs.filterstr;
        	objDs.set_filterstr(orgFilterStr + " && CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)	objDs.setDeleteRow(i);
        	//for(var i = objDs.rowcount-1; i >= 0; i--)	objDs.deleteRow(i);

        	objDs.set_filterstr(orgFilterStr);
        	objDs.set_enableevent(true);

        	this.resetGridHeadCheck(objDs);	//그리드 Checkbox 초기화
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnAddRow = function(objDs, fromDs, isRowDbClick)
        {
        	//trace("[SR0020_P03] this.fnAddRow() objDs : " + objDs.id + " fromDs : " + fromDs.id + " objDs.rowcount : " + objDs.rowcount + " isRowDbClick : " + isRowDbClick);
        	var fRow = this.dsWfApprovalBoxM.findRow("BOX_SEQ", this.divDown.form.cboBoxSeq.value);
        	var boxUserId	= this.dsWfApprovalBoxM.getColumn(fRow, "BOX_USER_ID");
        	var boxSeq		= this.dsWfApprovalBoxM.getColumn(fRow, "BOX_SEQ");

        	if( !Ex.isEmpty(fromDs) )
        	{
        		if(isRowDbClick)	//Row double click으로 추가하는 경우
        		{
        			if(objDs.findRow("USER_ID", fromDs.getColumn(fromDs.rowposition, "USER_ID")) == -1)
        			{
        				var aRow = objDs.setAddRow();
        				objDs.setColumn(aRow, "BOX_USER_ID",	boxUserId);
        				objDs.setColumn(aRow, "BOX_SEQ",		boxSeq);
        				//trace("[SR0020_P03] this.fnAddRow() rowVal : " + rowVal + " aRow : " + aRow);
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
        						objDs.setColumn(aRow, "BOX_USER_ID",	boxUserId);
        						objDs.setColumn(aRow, "BOX_SEQ",		boxSeq);
        						this.getColumnData(objDs, aRow, fromDs, i);
        					}
        				}
        				fromDs.setColumn(i, "CHK", 0);
        			}
        			this.resetGridHeadCheck(fromDs);	//그리드 Checkbox 초기화
        		}
        	}
        }

        //추가 버튼 처리에 따른 선택한 로우 데이터 추가할 데이터셋 컬럼값에 삽입
        this.getColumnData = function(recvDs, recvRowIdx, readDs, readRowIdx)
        {
        	var columnInfo = ["USER_ID", "USER_NM", "DEPT_CD", "DEPT_NM", "POS_NM"]

        	for(var i=0; i<columnInfo.length ; i++)
        	{
        		if( !Ex.isEmpty(recvDs.colinfos[columnInfo[i]]) && !Ex.isEmpty(readDs.colinfos[columnInfo[i]]) )
        		{
        			recvDs.setColumn(recvRowIdx, columnInfo[i], readDs.getColumn(readRowIdx, columnInfo[i]));
        		}
        	}
        }

        this.resetGridHeadCheck = function(objDs)
        {
        	//trace("this.resetGridHeadCheck() objDs : " + objDs);
        	var objType = objDs.toString().toUpperCase();
        	if(objType != "[OBJECT DATASET]")
        	{
        		trace("GRID Head Chebox초기화 Dataset 정보가 올바르지 않습니다.");
        		return;
        	}

        	if(objDs.id == "dsUser")				this.divTop.form.grdUser.setCellProperty("Head", 0, "text", 0);
        	else if(objDs.id == "dsWfApprovalBoxD") this.divDown.form.grdWfApprovalBoxD.setCellProperty("Head", 0, "text", "0");
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var divId = obj.parent.parent.parent.parent.id;

        	trace("this.fnCommOnclick() divId ::: " + divId + " obj.name : " + obj.name);

        	switch(obj.name)
        	{
        		case "btnAdd" :
        			this.fnAddRow(this.dsWfApprovalBoxD, this.dsUser);
        			break

        		case "btnDelete" :
        			this.fnDeleteRow(this.dsWfApprovalBoxD);
        			break

        		case "btnMoveUp" :			//위로
        			var rowP = this.dsWfApprovalBoxD.rowposition;
        			if(rowP > 0)
        			{
        				this.dsWfApprovalBoxD.moveRow(rowP, rowP-1);
        			}
        			break;

        		case "btnMoveDown" :		//아래로
        			var rowP = this.dsWfApprovalBoxD.rowposition;
        			var rowcnt = this.dsWfApprovalBoxD.rowcount;
        			if(rowP < rowcnt-1)
        			{
        				this.dsWfApprovalBoxD.moveRow(rowP, rowP+1);
        			}
        			break;

        		case "btnSave" :			// 저장
        			if( Ex.util.checkValidate(this, "group01") )
        			{
        				var param = {
        						 id : "saveConfirm"
        						,msg : "10003"
        						,arrparam : ['']
        						,msgtype : "I"};
        					Ex.core.confirm(this, param);
        					return;
        			}
        			break;

        		case "btnClose" :			// 닫기
        			if( Ex.util.isUpdated(this.dsWfApprovalBoxD) )
        			{
        				var param = {
        					  id : "confirmDataChgClose"
        					, msg : "편집중인 데이터가 존재합니다.\n화면을 닫으시겠습니까?"
        					, arrparam : []
        					, msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        				return false;
        			}
        			else
        			{
        				Ex.core.pclose(this, this.getOwnerFrame().saveYn);
        			}
        			break;
        	}
        };

        this.grdOnCellDblClick = function(obj,e)
        {
        	if(obj.id == "grdUser")
        	{
        		this.fnAddRow(this.dsWfApprovalBoxD, this.dsUser, true);
        	}
        };

        this.edtOnKeyup = function(obj,e)
        {
        	if(e.keycode == 13)	this.fnSearchUser();
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	this.dsWfApprovalBoxD.set_filterstr("BOX_SEQ=='" + e.postvalue + "' && ROWFLAG != 'D'");
        	//this.dsWfApprovalBoxD.set_filterstr("BOX_SEQ=='" + e.postvalue + "'");

        	var fRow = this.dsWfApprovalBoxM.findRow("BOX_SEQ", e.postvalue);
        	var boxDesc	= this.dsWfApprovalBoxM.getColumn(fRow, 'BOX_DESC');

        	// Grid title 처리
        	if( Ex.isEmpty(boxDesc) )
        	{
        		this.divDown.form.stcInfoTitle.set_text("결재자 목록" );
        	}
        	else
        	{
        		this.divDown.form.stcInfoTitle.set_text('[' + boxDesc + ']' + " 결재자 목록" );
        	}

        	var objSize = nexacro.getTextSize(this.divDown.form.stcInfoTitle.text, this.divDown.form.stcInfoTitle._getCurrentStyleInheritValue("font"));
        	var nWidth = parseInt(objSize.nx) + 20;
        	this.divDown.form.stcInfoTitle.set_width(nWidth);
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
            this.addEventHandler("onbeforeclose",this.formOnBeforeClose,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.divSearchArea.form.edtUser.addEventHandler("onkeyup",this.edtOnKeyup,this);
            this.divTop.form.divSearchArea.form.edtDept.addEventHandler("onkeyup",this.edtOnKeyup,this);
            this.divTop.form.grdUser.addEventHandler("oncelldblclick",this.grdOnCellDblClick,this);
            this.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.cboBoxSeq.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divDown.form.divBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.divBtn.form.btnMoveDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.divBtn.form.btnMoveUp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWfApprovalBoxD.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfApprovalBoxDSave.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0020_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
