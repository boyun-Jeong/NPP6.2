(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0540_W");
            this.set_titletext("즉시알림발송");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DateSearchType\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TO_PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommNotiSendMt", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"RECV_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommNotiSendMtHist", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgKindCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divUser",null,"0","22%",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","0","150","24",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("0");
            obj.set_text("수신자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","24",null,"10","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divUser.addChild(obj.name, obj);

            obj = new Grid("grdUserList","0","Static00_00_00:0",null,null,"0","0",null,null,null,null,this.divUser.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsUserList");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoupdatetype("none");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"사번(ID)\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" edittype=\"none\" textAlign=\"left\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"107\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/><Cell col=\"6\" text=\"내선번호\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:TELNUM\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.divUser.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"0","125","24","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divUser.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divUser.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divUser.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divUser.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"333","divUser:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("stcMsgBg","0","66",null,"34","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","33",null,"34","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputBg");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"34","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","130","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("알림 이름");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcSendUserInfo","50%","0","130","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("발신자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:5","5",null,"24","stcSendUserInfo:5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("알림이름;NULL");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcSendTypeCd","0","33","130","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_text("통보매체");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcSendUserInfoI","stcSendUserInfo:5","5",null,"20","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcRecvDiv","50%","33","130","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("11");
            obj.set_text("수신구분");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divTop.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkSetSendTypeCd","stcSendTypeCd:5","38",null,"24","stcRecvDiv:5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSendTypeCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("horizontal");
            obj.set_cssclass("chk_WF_normal");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcMsgConts","0","66","130",null,null,"0",null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            obj.set_text("알림 내용");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcMsgContsBg","129.00","66",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            this.divTop.addChild(obj.name, obj);

            obj = new TextArea("txaMsgConts","stcMsgConts:5.00","71",null,null,"5","5",null,null,null,null,this.divTop.form);
            obj.set_taborder("9");
            obj.set_validationGroup("input01");
            obj.set_validation("알림 내용;NULL");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnSend",null,"38","57","24","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("12");
            obj.set_text("발송");
            obj.set_cursor("pointer");
            this.divTop.addChild(obj.name, obj);

            obj = new Radio("rdoRecvDiv","stcRecvDiv:5","38",null,"24","btnSend:5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_cssclass("rdo_WF_normal");
            var divTop_form_rdoRecvDiv_innerdataset = new nexacro.NormalDataset("divTop_form_rdoRecvDiv_innerdataset", obj);
            divTop_form_rdoRecvDiv_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">USER</Col><Col id=\"datacolumn\">수신자 목록</Col></Row><Row><Col id=\"codecolumn\">IT</Col><Col id=\"datacolumn\">IT지원부 전체</Col></Row></Rows>");
            obj.set_innerdataset(divTop_form_rdoRecvDiv_innerdataset);
            obj.set_value("USER");
            obj.set_index("0");
            obj.set_text("수신자 목록");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcMsgKind","0","66","130","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("14");
            obj.set_text("공통 메세지");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcEmpty","50%","66","130","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Combo("cboMsgKind","stcMsgKind:5.00","71","178","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsMsgKindCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_visible("false");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcMsgKindDesc","cboMsgKind:10","71","405","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("18");
            obj.set_text("※ 공통 메세지 관리 (코드관리 > 기준정보 > 실시간알림발송 메시지 종류)");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divBottom","0","338",null,null,"divUser:10","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","20","125","24",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("문자발송이력");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("sta_listCnt","Static21:0","20","55","21",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_countDataset("dsFommNotiSendMtHist");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","44",null,"10","0",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Grid("grdFommNotiSendMtHist","0","54",null,null,"0","0",null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsFommNotiSendMtHist");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoupdatetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"220\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"340\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"알림이름\"/><Cell col=\"2\" text=\"발송시간\"/><Cell col=\"3\" text=\"발신자\"/><Cell col=\"4\" text=\"통보 매체\"/><Cell col=\"5\" text=\"알림 내용\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"2\" combodataset=\"dsMNG_Deptcd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\" text=\"bind:SEND_DTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:SEND_USER_NM\" combodataset=\"dsUse_YN\" combocodecol=\"CARD_STATUS_CD\" combodatacol=\"CARD_STATUS_CD_NM\" textAlign=\"center\"/><Cell col=\"4\" maskedittype=\"string\" maskeditformat=\"##:##\" text=\"bind:SEND_TYPE_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:MSG_CONTS\" textAlign=\"left\" expandshow=\"show\" expandsize=\"25\"/></Band></Format></Formats>");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"20","0",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divUser.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divUser.form.divGrdTopBtn.form,function(p){});
            this.divUser.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUser.form
            obj = new Layout("default","",0,0,this.divUser.form,function(p){});
            this.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTop.form.Static01","value","dsFommScheduleJobMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTop.form.Static01","text","dsFommScheduleJobMt","REG_USER_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTop.form.edtTitle","value","dsFommNotiSendMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTop.form.chkSetSendTypeCd","value","dsFommNotiSendMt","SEND_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTop.form.txaMsgConts","value","dsFommNotiSendMt","MSG_CONTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTop.form.stcSendUserInfoI","text","dsFommNotiSendMt","SEND_USER_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divTop.form.rdoRecvDiv","value","dsFommNotiSendMt","RECV_DIV_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0540_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0540_W
        * 화면(명)		︰ 즉시알림발송
        * 메뉴(경로)	︰ 관리자 > 통지관리 > 즉시알림발송
        * 화면 설명	︰ 즉시알림발송
        * 작성자		︰ 정보윤
        * 작성일		︰ 2025.03. 13
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자    		이력
        *------------------------------------------------------------------
        * 2025.03. 13	정보윤			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.menuParam;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSearch = function()
        {
        	var sTranId = "select01";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0540W/select01";						// 서비스명
            var sInDs = "dsCond=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommNotiSendMtHist=dsFommNotiSendMtHist";	// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSend = function()
        {
        	var sTranId = "send";																		// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0540W/save01";															// 서비스명
            var sInDs = "dsCond=dsCond dsFommNotiSendMt=dsFommNotiSendMt:U dsUserList=dsUserList:A";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommNotiSendMtHist=dsFommNotiSendMtHist";									// 서버에서 수신할 데이타셋
            var sArg = "";																				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.deleteRow(i);

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
        		case "send" :
        			this.dsFommNotiSendMt.clearData();
        			this.dsFommNotiSendMt.setAddRow();
        			this.dsFommNotiSendMt.setColumn(0, "SEND_USER_ID", Ex.util.getSession('gvUserId'));
        			this.dsFommNotiSendMt.setColumn(0, "SEND_USER_NM", Ex.util.getSession('gvUserNm'));
        			this.dsFommNotiSendMt.setColumn(0, "SEND_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        			this.dsFommNotiSendMt.setColumn(0, "SEND_DEPT_NM", Ex.util.getSession('gvDeptNm'));

        			this.menuParam = nexacro.getApplication().gvTmpMenuParam||'';
        			nexacro.getApplication().gvTmpMenuParam = undefined;

        			var recvDivCd = "";

        			if(this.menuParam.indexOf("RECV_DIV_CD") > -1)
        			{
        				recvDivCd = this.menuParam.split("=")[1];
        			}
        			else
        			{
        				recvDivCd = "USER";
        			}
        			this.divTop.form.rdoRecvDiv.set_value(recvDivCd);

        			var evt = nexacro.ItemChangeEventInfo;
        			evt.postvalue = this.divTop.form.rdoRecvDiv.value;
        			this.rdoOnItemChanged(this.divTop.form.rdoRecvDiv, evt);
        			this.divTop.form.cboMsgKind.set_value(undefined);
        			this.divTop.form.stcSendUserInfoI.set_text(Ex.util.getSession('gvUserNm') + "(" + Ex.util.getSession('gvUserId') + ")");
        			this.divTop.form.edtTitle.setFocus();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "sendUserPop" :
        			trace("varValue:\n" + varValue + " val:[" + varValue.indexOf("Dataset id=") + "]");
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsUserList.loadXML(varValue);
        			}
        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSend();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();

        	this.fnSearch();		// 조회
        }

        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['SEND_TYPE_CD',		'MSG_KIND_CD'		]	// 조회할 상위코드
        		,codeDiv: ['BASIS_CD',			'BASIS_CD'			]	// 조회할 코드의 업무구분
        		,optStr	: ['',					'SEL'				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y'					]	// 사용여부
        		,filter	: ["CMM_CD!='SLIDE'",	""					]	// filterStr
        		,objDs	: [this.dsSendTypeCd,	this.dsMsgKindCd	]	// copy dataset
        	};
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util
        	this.divTop.form.cboMsgKind.set_index(0);
        };

        this.fnCheckValidate = function()
        {
        	var rtn = Ex.util.checkValidate(this.divTop, "input01");
        	if(!rtn) return false;

        	if( Ex.isEmpty(this.dsFommNotiSendMt.getColumn(0, "SEND_TYPE_CD")) )
        	{
        		var param = {
        			  id	: "essSendTypeCdAlertI"							//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "11001"										//메시지 내용
        			, arrparam : [this.divTop.form.stcSendTypeCd.text]		//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if(this.dsFommNotiSendMt.getColumn(0, "RECV_DIV_CD") == "USER")
        	{
        		if(this.dsUserList.rowcount == 0)
        		{
        			var param = {
        				  id	: "essSendTypeCdAlertI"							//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "수신자 목록이 지정되지 않았습니다."		//메시지 내용
        				, arrparam : []											//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSend" :	//발송
        			if( this.fnCheckValidate() )
        			{
        				var param = {
        					  id : "saveConfirm"
        					, msg : "10003"
        					, arrparam : ['']
        					, msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnAdd" :		//추가
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"sendUserPop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0900_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "수신자 등록",
        					pTgDs : this.dsUserList
        				},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"					// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnDelete" :	//삭제
        			this.fnDelete(this.dsUserList);
        			break;
        	}
        }

        this.divTopList_grdFommNotiSendMtHist_onexpandup = function(obj,e)
        {
        	var colNm = nexacro.replaceAll(obj.getCellProperty("body", e.cell, "text"), "bind:", "");

        	Ex.core.popup(
        		this,								// <--- 팝업 실행 스코프
        		"alarmDetailPop",					// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		"comm::comTextareaPop.xfdl",		// <--- 팝업창 오픈 Url
        		{
        			pRefDesc		: true,
        			title			: "알림 내용 상세보기",
        			isHeightChange	: false,
        			isEss			: false,
        			subTitle		: "알림 내용",
        			pMsg			: obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), colNm),
        			pBtnConfUseYn	: "N"	//적용버튼 사용여부
        		},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		//"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		"width=600,height=300"
        	);
        };

        this.rdoOnItemChanged = function(obj,e)
        {
        	if(e.postvalue == "USER")	//수신구분이 수신자 목록인 경우
        	{
        		this.divTop.form.stcMsgKind.set_visible(false);
        		this.divTop.form.cboMsgKind.set_visible(false);
        		this.divTop.form.stcMsgBg.set_visible(false);
        		this.divTop.form.stcMsgKindDesc.set_visible(false);
        		this.divTop.form.stcMsgConts.set_top(66);
        		this.divTop.form.stcMsgContsBg.set_top(66);
        		this.divTop.form.txaMsgConts.set_top(71);
        		//this.divUser.set_visible(true);
        		this.divUser.set_width("22%");
        		this.divTop.set_right("divUser:10");
        		this.divBottom.set_right("divUser:10");
        	}
        	else	//IT지원부 전체인 경우
        	{
        		this.divTop.form.stcMsgKind.set_visible(true);
        		this.divTop.form.cboMsgKind.set_visible(true);
        		this.divTop.form.stcMsgBg.set_visible(true);
        		this.divTop.form.stcMsgKindDesc.set_visible(true);
        		this.divTop.form.stcMsgConts.set_top(66+33);
        		this.divTop.form.stcMsgContsBg.set_top(66+33);
        		this.divTop.form.txaMsgConts.set_top(71+33);
        		//this.divUser.set_visible(false);
        		this.divUser.set_width(0);
        		this.divTop.set_right("divUser:0");
        		this.divBottom.set_right("divUser:0");
        	}
        };

        this.cboOnItemChanged = function(obj,e)
        {
        	if( !Ex.isEmpty(e.postvalue) )
        	{
        		this.dsFommNotiSendMt.setColumn(0, "MSG_CONTS", this.dsMsgKindCd.getColumn(e.postindex, "CMM_CD_DESC"));
        		this.divTop.form.txaMsgConts.setFocus();
        	}
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
            this.divUser.form.grdUserList.addEventHandler("onlbuttondown",this.grdOnCellClick,this);
            this.divUser.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUser.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.btnSend.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTop.form.rdoRecvDiv.addEventHandler("onitemchanged",this.rdoOnItemChanged,this);
            this.divTop.form.cboMsgKind.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divBottom.form.grdFommNotiSendMtHist.addEventHandler("onexpandup",this.divTopList_grdFommNotiSendMtHist_onexpandup,this);
        };
        this.loadIncludeScript("FOMM0540_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
