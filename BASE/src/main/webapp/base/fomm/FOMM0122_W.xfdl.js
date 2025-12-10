(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0610_W");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_titletext("사용자권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_GRP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ACT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExtdCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Radio("rdoSndYn","100.00","13",null,"24","1494",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_enableevent("true");
            obj.set_validationCheckReadonly("false");
            var divSearchArea_form_rdoSndYn_innerdataset = new nexacro.NormalDataset("divSearchArea_form_rdoSndYn_innerdataset", obj);
            divSearchArea_form_rdoSndYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ALL</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">확장그룹</Col></Row><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">권한그룹</Col></Row></Rows>");
            obj.set_innerdataset(divSearchArea_form_rdoSndYn_innerdataset);
            obj.set_value("ALL");
            obj.set_index("0");
            obj.set_text("전체");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboAuthId","rdoSndYn:0.00","13","165","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsCommCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","cboAuthId:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcRecUsr","Static00_00:5","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divOutUserReg","stcRecUsr:5","13","221","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_url("fomm::FOMM0000_D01.xfdl");
            obj.set_enableevent("false");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","divOutUserReg:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staAuthNm","Static00:0","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("그룹유형");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcCntrReqDeptNm","Static00_00_01:5","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divDeptWish","stcCntrReqDeptNm:5","13","237","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_text("div00");
            obj.set_url("fomm::FOMM0000_D03.xfdl");
            obj.set_visible("true");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","divDeptWish:0","13","29","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staAuthNm00","Static00_00_01_00:5","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("처리구분");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboAuthTypeCd00","staAuthNm00:5","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_WF_normal");
            var divSearchArea_form_cboAuthTypeCd00_innerdataset = new nexacro.NormalDataset("divSearchArea_form_cboAuthTypeCd00_innerdataset", obj);
            divSearchArea_form_cboAuthTypeCd00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">ALL</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">권한등록</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">권한해지</Col></Row></Rows>");
            obj.set_innerdataset(divSearchArea_form_cboAuthTypeCd00_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdList","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"70\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"143\"/><Column size=\"165\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"권한그룹\"/><Cell col=\"5\" text=\"역할\"/><Cell col=\"6\" text=\"처리구분\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\"처리일시\"/><Cell col=\"9\" text=\"요청번호\"/><Cell col=\"10\" text=\"신청서제목\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:AUTH_GRP_NM\"/><Cell col=\"5\" text=\"bind:AUTH_NM\"/><Cell col=\"6\" text=\"bind:AUTH_ACT_NM\"/><Cell col=\"7\" text=\"bind:FRNM\"/><Cell col=\"8\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:REQ_ID\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"10\" text=\"bind:TITLE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사용자권한관리");
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

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:10","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.addChild(obj.name, obj);

            obj = new Div("divUserTopBtn",null,"70","275","25","5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divUserTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divUserTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDeleteAuth",null,"0","80",null,"btnExcelDown:5","0",null,null,null,null,this.divUserTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("권한해지");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divUserTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddAuth",null,"0","80",null,"btnDeleteAuth:5","0",null,null,null,null,this.divUserTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("권한등록");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divUserTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form.divOutUserReg
            obj = new Layout("default","",0,0,this.divSearchArea.form.divOutUserReg.form,function(p){});
            this.divSearchArea.form.divOutUserReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form.divDeptWish
            obj = new Layout("default","",0,0,this.divSearchArea.form.divDeptWish.form,function(p){});
            this.divSearchArea.form.divDeptWish.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUserTopBtn.form
            obj = new Layout("default","",0,0,this.divUserTopBtn.form,function(p){});
            this.divUserTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtSndUsr","value","dsCond","NOTI_CGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboDateType","value","dsCond","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.calBeginDate","value","dsCond","STIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.calEndDate","value","dsCond","ETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.rdoSndYn","value","dsCond","AUTH_GRP_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.stcReqTmplatNm00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.edtReqTmplatNm00","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.divDeptWish","text","dsCond","REQ_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearchArea.form.cboAuthId","value","dsCond","AUTH_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearchArea.form.cboAuthTypeCd00","value","dsCond","AUTH_ACT_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0000_D01.xfdl");
            this._addPreloadList("fdl","fomm::FOMM0000_D03.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0122_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0600_W
        * 화면(명)		︰ 통지이력관리
        * 메뉴(경로)	︰ 관리자 > 통지관리 > 통지이력관리
        * 화면 설명	︰ 통지이력관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.02.01
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.02.01	 김지수		최초작성
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
        	this.fnCompInit();		// 컴포넌트 초기화



        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 조회 권한코드
        	this.fnSearchList();		// 조회 리스트
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	this.dsCond.setColumn(0, "AUTH_GRP_GB", "ALL");
        	this.dsCond.setColumn(0, "AUTH_ACT_GB", "ALL");
        	this.divSearchArea.form.divOutUserReg.form.resetInput();
        	this.divSearchArea.form.divDeptWish.form.resetInput();
        	this.dsCond.setColumn(0, "AUTH_ID", "");
        	this.dsCond.setColumn(0, "REQ_ID", "");


        }

        // 조회 권한코드
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsAuthCd=dsAuthCd dsExtdCd=dsExtdCd";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }
        // 조회 권한리스트
        this.fnSearchList = function()
        {
        	// transaction
        	var sTranId = "select03";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/select03";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "select01" :
        				//Ex.core.toast(this, "10002");
        			this.dsCommCd.clearData();
        			//this.dsCommCd.copyData(this.dsAuthCd,false);
        			this.dsCommCd.insertRow(0);
        			this.dsCommCd.setColumn(0, "CMM_CD_NM", "- 전체 -");
        			this.divSearchArea.form.cboAuthId.set_index(0);

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
        		case "addAuth" :
        		if(varValue) this.fnSearchList();
        			break;
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
        			this.fnSearch();
        			break;
        	}
        }

        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {

        	if(compId == "divUserRcv")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsCond.setColumn(0, "RECV_USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsCond.setColumn(0, "RECV_USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "RECV_USER_ID",	"");
        			this.dsCond.setColumn(0, "RECV_USER_NM",	"");
        		}
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.grdList.displayRowType();

        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divUserTopBtn.form.btnAddAuth];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divUserTopBtn.form.btnDeleteAuth];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divUserTopBtn.form.btnExcelDown];		// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divUserTopBtn, 'right', true);

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        // 	var oParam = {
        // 		upCmmCd : [ "YN_CD2",		]	// 조회할 상위코드
        // 		,codeDiv: [ "CMM_CD",		]	// 조회할 코드의 업무구분
        // 		,optStr	: [ "",				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        // 		,useYn	: [ "Y",			]	// 사용여부
        // 		,filter	: [ "",				]	// filterStr
        // 		,objDs	: [	this.dsYnCd,	]	// copy dataset
        // 	}
        // 	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	return true;
        }

        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {

        	this.deptChangedCallBack(compId, dsRtnObj);

        }

        this.deptChangedCallBack = function(compId, dsRtnObj)
        {
        	if(compId == "divOutUserReg")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsCond.setColumn(0, "USER_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsCond.setColumn(0, "USER_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "USER_ID",	"");
        			this.dsCond.setColumn(0, "USER_NM",	"");
        		}
        	}
        	else if(compId == "divDeptWish")
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "DEPT_CD")) )
        		{
        			this.dsCond.setColumn(0, "DEPT_ID",	dsRtnObj.getColumn(0, "DEPT_CD"));
        			this.dsCond.setColumn(0, "DEPT_NM",	dsRtnObj.getColumn(0, "DEPT_NM"));
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "DEPT_ID",	"");
        			this.dsCond.setColumn(0, "DEPT_NM",	"");
        		}
        	}

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
        			this.fnSearchList();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnAddAuth" : // 권한추가
        				Ex.core.popup(
        					this,
        					'addAuth',
        					"fomm::FOMM0122_P01.xfdl",             		// <--- 팝업창 오픈 Url
        					{
        						title:Ex.core.word('사용자 권한등록')
        						//pSelType:pSelType
        					},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"width=875,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				);
        			break;
        		case "btnDeleteAuth" : // 권한해지
        				Ex.core.popup(
        					this,
        					'addAuth',
        					"fomm::FOMM0122_P02.xfdl",             		// <--- 팝업창 오픈 Url
        					{
        						title:Ex.core.word('사용자 권한해지')
        						//pSelType:pSelType
        					},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"width=1000,height=570"                  // <--- width/height/modeless(프레임 처리 옵션)
        				);
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdList],
           				Sheet	: ['사용자권한이력'],
           				FileNm	: ["사용자권한이력"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
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
        		this.fnSearchList();
        		obj.setFocus();
        	}
        };


        this.divSearchArea_rdoSndYn_onitemchanged = function(obj,e)
        {
        	this.dsCommCd.clear();
        	if(this.dsCond.getColumn(0,'AUTH_GRP_GB') == 'G')
        	{
        		this.dsCommCd.copyData(this.dsAuthCd,true);
        	}else if(this.dsCond.getColumn(0,'AUTH_GRP_GB') == 'X')
        	{
        		this.dsCommCd.copyData(this.dsExtdCd,true);
        	}else
        	{

        	}
        	this.dsCond.setColumn(0,"AUTH_ID",'');
        	this.dsCommCd.insertRow(0);
        	this.dsCommCd.setColumn(0, "CMM_CD_NM", "- 전체 -");
        	this.divSearchArea.form.cboAuthId.set_index(0);
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.row > -1)
        	{
        		if(e.col == obj.getBindCellIndex('body', 'REQ_ID')) {		// 요청서 내용 보기
        				Ex.core.popup(
        					this,
        					'addAuth',
        					"fomm::FOMM0122_P03.xfdl",             		// <--- 팝업창 오픈 Url
        					{
        						title:Ex.core.word('사용자 권한수정'),
        						pAuthId : this.dsData.getColumn(e.row,'AUTH_HT_ID')
        						//pSelType:pSelType
        					},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"autosize,useCloseButton=false"                // <--- width/height/modeless(프레임 처리 옵션)
        				);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.rdoSndYn.addEventHandler("onitemchanged",this.divSearchArea_rdoSndYn_onitemchanged,this);
            this.divSearchArea.form.rdoSndYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboAuthId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.stcRecUsr.addEventHandler("onclick",this.divSearchArea_stcTitle_onclick,this);
            this.divSearchArea.form.cboAuthTypeCd00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUserTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUserTopBtn.form.btnDeleteAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUserTopBtn.form.btnAddAuth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsAuthCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsExtdCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsCommCd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0122_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
