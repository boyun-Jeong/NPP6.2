(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0910_W");
            this.set_titletext("쪽지 발송함");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_commCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"CODE\" type=\"STRING\" size=\"50\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"UPPER_CODE\" type=\"STRING\" size=\"30\"/><Column id=\"OUTPRNT_ORD\" type=\"STRING\" size=\"4\"/><Column id=\"USE_PART\" type=\"STRING\" size=\"2\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CODE_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL_RCV</Col><Col id=\"CODE_NAME\">전체</Col><Col id=\"UPPER_CODE\">[Undefined]</Col><Col id=\"OUTPRNT_ORD\">[Undefined]</Col><Col id=\"USE_PART\">[Undefined]</Col><Col id=\"USE_YN\">[Undefined]</Col><Col id=\"CODE_DESC\">[Undefined]</Col></Row><Row><Col id=\"CODE\">TITLE</Col><Col id=\"CODE_NAME\">제목</Col><Col id=\"UPPER_CODE\">[Undefined]</Col><Col id=\"OUTPRNT_ORD\">[Undefined]</Col><Col id=\"USE_PART\">[Undefined]</Col><Col id=\"USE_YN\">[Undefined]</Col><Col id=\"CODE_DESC\">[Undefined]</Col></Row><Row><Col id=\"CODE\">RCV</Col><Col id=\"CODE_NAME\">받는이</Col><Col id=\"UPPER_CODE\">[Undefined]</Col><Col id=\"OUTPRNT_ORD\">[Undefined]</Col><Col id=\"USE_PART\">[Undefined]</Col><Col id=\"USE_YN\">[Undefined]</Col><Col id=\"CODE_DESC\">[Undefined]</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pt_file_attach", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">새글</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pt_memo_lst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"255\"/><Column id=\"MEMO_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MEMO_STATUS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"MEMO_TITLE\" type=\"STRING\" size=\"255\"/><Column id=\"SEND_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"255\"/><Column id=\"RCV_USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"255\"/><Column id=\"MY_CNT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"MY_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"SND_NEW_MEMO_CNT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"RCV_NEW_MEMO_CNT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"CREATE_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_MEMO_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_memoStatusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"CODE\" type=\"STRING\" size=\"50\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"UPPER_CODE\" type=\"STRING\" size=\"30\"/><Column id=\"OUTPRNT_ORD\" type=\"STRING\" size=\"4\"/><Column id=\"USE_PART\" type=\"STRING\" size=\"2\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CODE_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">COMESTA1</Col><Col id=\"CODE_NAME\">임시저장</Col></Row><Row><Col id=\"CODE\">COMESTA2</Col><Col id=\"CODE_NAME\">발송완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COND_COL\" type=\"STRING\" size=\"256\"/><Column id=\"COND_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DATE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDatTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuParamCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","13","75","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboCond","Static00:0.00","13","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("ds_commCode");
            obj.set_value("ALL_RCV");
            obj.set_index("0");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtCondText","cboCond:2.00","13","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_cssclass("edt_WF_normal");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","edtCondText:0.00","13","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static15","Static00_00_00_00_00_00:0.00","13","75","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("calStime","Static15:0.00","13","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc00","calStime:0.00","12","20","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("calEtime","stc00:0.00","13","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userInfo","0","70","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainListCnt","82.00","99","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GridCount");
            obj.set_countDataset("dsMain");
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

            obj = new Div("divGrdBotBtn",null,null,"360","32","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Button("btn_go",null,null,"100","32","btnSave:3","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("9");
            obj.set_text("수신 쪽지함");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("txtNew","150","70","48","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("새글");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("txtTotal","sta_userInfo:4.00","70","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(0건)");
            obj.set_countDataset("ds_pt_memo_lst");
            obj.set_cssclass("sta_WF_grdCnt");
            this.addChild(obj.name, obj);

            obj = new Static("txtFileSize","130",null,"174","36",null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","340","24","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSendMemo",null,"0","100","24","65",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("쪽지보내기");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"3","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("sta_New_listCnt","txtNew:4","70","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_pt_memo_lst");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"55\" band=\"left\"/><Column size=\"0\"/><Column size=\"500\"/><Column size=\"120\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"130\" band=\"right\"/><Column size=\"130\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combotype=\"dropdown\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"첨부\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"받는이\"/><Cell col=\"6\" text=\"수신확인\"/><Cell col=\"7\" text=\"작성일시\"/><Cell col=\"8\" text=\"보낸일시\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\" combotype=\"dropdown\"/><Cell col=\"1\" displaytype=\"none\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" cursor=\"pointer\" text=\"expr:ATTACH_YN==&apos;Y&apos;? &apos;theme://SPP_IMAGE_SET/WF/btn_WF_download_N.png&apos; : &apos;&apos;\" displaytype=\"imagecontrol\"/><Cell col=\"3\" text=\"bind:MEMO_TITLE\" combotype=\"dropdown\" cursor=\"pointer\" cssclass=\"grdBCell_WF_event\" textAlign=\"left\"/><Cell col=\"4\" text=\"expr:MEMO_STATUS_CD == &apos;1&apos;?&apos;임시저장&apos;:&apos;발송완료&apos;\" displaytype=\"expr:MEMO_STATUS_CD == &apos;1&apos;?&apos;임시저장&apos;:&apos;발송완료&apos;\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:RCV_USER_NM\" calendardisplaynulltype=\"nulltext\" combotype=\"dropdown\"/><Cell col=\"6\" text=\"bind:READ_CNT\" displaytype=\"normal\" combotype=\"dropdown\" calendardateformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"7\" text=\"bind:CREATE_TIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:SEND_TIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","370","74","54","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("btn00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("txtFileSize00","20.00",null,"100","36",null,"0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("첨부파일 총 용량");
            obj.set_cssclass("sta_WF_GridInfo");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edtCondText","accessibilityaction","dsCond","COND_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cboCond","value","dsCond","COND_COL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.calStime","value","dsCond","STR_DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.calEtime","value","dsCond","STR_DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0910_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0910_W
        * 화면(명)	︰ 쪽지 발송함
        * 메뉴(경로)	︰ 관리자 > 포털관리 > 쪽지 발송함
        * 화면 설명	︰ SPP 쪽지 발송함
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.12
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.12	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         *********************************************************************************/
        this.fv_MemoId = "";
        this.fv_nTime  = 10;
        this.fv_MEMO_STATUS_CD = "";

        this.ACT_DEPT_NM = Ex.util.getSession('gvDeptNm');
        this.ACT_USER_ID = Ex.util.getSession('gvUserId');
        this.ACT_USER_NM = Ex.util.getSession('gvUserNm');

        this.MENU_PARAM_CD = '00';

        // frTop 에서 복사해옴
        this.objApp = nexacro.getApplication();
        this.BTNMENU = [];

        this.session;

        // 웹소켓 전역변수
        this.webSocket;
        this.formObj;

        this.pdvMiddleMenu;
        // frTop 에서 복사해옴 여기까지

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);

        	//trace("this.ACT_USER_ID : " + this.ACT_USER_ID);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fnSearch();		// 조회
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	//strDay = Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -15)
        	//strDay1 = strDay.getFullYear() + "";
        	//strDay2 = Ex.util.getRightStr("0" + (strDay.getMonth() + 1), 2);
        	//strDay3 = Ex.util.getRightStr("0" + strDay.getDate(), 2);
        	var fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -30), "yyyyMMdd");

        	this.dsCond.setColumn(0, "REG_USER_ID", this.ACT_USER_ID);
        	//this.dsCond.setColumn(0, "STR_DATE_FROM", strDay1 + strDay2 + strDay3);
        	this.dsCond.setColumn(0, "STR_DATE_FROM", fromDt);
        	this.dsCond.setColumn(0, "STR_DATE_TO", Ex.util.today());
        	this.dsCond.setColumn(0, "COND_COL", "ALL_RCV");
        	this.dsCond.setColumn(0, "COND_TEXT", "");
        	this.dsCond.setColumn(0, "RCV_USER_ID", "");
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0910W/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "ds_pt_memo_lst=ds_pt_memo_lst";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨

        	this.dsCond.setColumn(0, "COND_TEXT", this.div_search.form.edtCondText.value);
        	//trace("dsCond의 cond_TEXT : " +this.dsCond.getColumn(0,"COND_TEXT"));
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        }

        // 저장 - 쪽지삭제용
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0910W/save01";
            var sInDs = "ds_pt_memo_lst=ds_pt_memo_lst:U dsCond=dsCond";
        	var sOutDs = "ds_pt_memo_lst=ds_pt_memo_lst";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");
        	for(var i = 0; i < objDs.rowcount; i++)
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
        		case "select01" : // 서비스 ID    SELECT 01 - 발신쪽지함,   02 - 수신쪽지함
        			//trace(this.ds_pt_memo_lst.saveXML());
        			Ex.core.toast(this, "10002");
        			this.grdMain.setCellProperty("Head", this.grdMain.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	//if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "sendMemo" :
        			//trace("pID : " + pID);
        			//trace("varValue : " + varValue);
        			//this.go("fomm::FOMM0910_W.xfdl");
        			//Ex.core._callWork("FOMM0910_W");
        			//Ex.core._callWork("fomm::FOMM0910_W.xfdl");
        			//Ex.core.openMenu("FOMM0910_W");
        			//Ex.core.openMenu("fomm::FOMM0910_W.xfdl");
        			//if(varValue.indexOf("Dataset id=") > -1)	this.dsPopRtn.loadXML(varValue);

        			//수신함으로 이동
         			//var obj = {menuId : '684'};			//수신함 684 발신함 685
         			//this.fnOpenMenu(obj);

        			//Ex.core.toast(this, "10004", null, {toastType:'S'});
        			//this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");

        			//900에서 보내기 후 받는 팝업 콜백이벤트
        			//if(!Ex.isEmpty(varValue)){
        			if(varValue!="close"){
        				this.fnSearch();
        			}
        		break;

        		case "MemoDetail" :

        			switch(varValue) {
        				case "Close" :
        					this.fnSearch();
        					break;

        				case "btnSave" :
        					this.fnSearch();
        					break;

        				case "MsgReSnd" :
        					var M_Title = "쪽지 재발송 하기";
        					break;

        				case "MsgTrans" :
        					var M_Title = "쪽지 전달 하기";
        					break;
        				case "btnMsgDel" :
        					//alert("btnMsgDel - 메모삭제->전달 콜백   :::  " + varValue);
        					if(varValue == "btnMsgDel") this.fnSearch();
        					break;
        			}

        			if (varValue == "MsgReSnd" || varValue == "MsgTrans"){

        				//if(varValue == "RcvMsgReply") {var M_Title = "쪽지 전달 하기";}
        				//else if(varValue == "MsgTrans") {var M_Title = "쪽지 답신 하기";}
        				//950에서 받는 팝업 콜백이벤트
        				//fv_MemoId = this.ds_pt_memo_lst.getColumn(crow, "MEMO_ID");
        				trace("=================920 memo id : " +fv_MemoId);
        				trace("=================920 event id : " +varValue);
        				trace("=================920 memo id : " +M_Title);
        				var sSize = '';
        				sSize = 'width=1060,height=610';
        				Ex.core.popup(
        					this,
        					varValue,
        					"fomm::FOMM0900_W.xfdl",             		// <--- 팝업창 오픈 Url
        					{ title			: M_Title,
        					  pMEMO_ID 		: fv_MemoId,
        					  //pMEMO_RCV_ID 	: this.pMEMO_RCV_ID,
        					  pflag 		: varValue
        					},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        				);
        			}
        			break;
        		case "MsgReSnd" :
        			//alert("MsgReSnd - 디테일->재발송 콜백   ::: " + varValue);
        			if(varValue == "save") this.fnSearch();
        			break;

        		case "MsgTrans" :
        			//alert("MsgTrans - 디테일->전달 콜백   :::  " + varValue);
        			if(varValue == "save") this.fnSearch();
        			break;

        			/*
        			if (varValue != "Close"){
        				//상세조회 후 단순 닫기가 아니면
        				//MsgReSnd-재발송,RcvMsgReply-답신,MsgTrans-전달
        				if(varValue == "MsgReSnd") {var M_Title = "쪽지 다시 보내기";}
        				else if(varValue == "RcvMsgReply") {var M_Title = "쪽지 전달 하기";}
        				else if(varValue == "MsgTrans") {var M_Title = "쪽지 답신 하기";}
        				//950에서 받는 팝업 콜백이벤트
        				//fv_MemoId = this.ds_pt_memo_lst.getColumn(crow, "MEMO_ID");
        				trace("=================910 memo id : " +fv_MemoId);
        				trace("=================910 event id : " +varValue);
        				trace("=================910 memo id : " +M_Title);
        				var sSize = '';
        				sSize = 'width=1060,height=900';
        				Ex.core.popup(
        					this,
        					varValue,
        					"fomm::FOMM0900_W.xfdl",             		// <--- 팝업창 오픈 Url
        					{ title			: M_Title,
        					  pMEMO_ID 		: fv_MemoId,
        					  //pMEMO_RCV_ID 	: this.pMEMO_RCV_ID,
        					  pflag 		: varValue
        					},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        				);
        			}
        			*/
        		//	this.fnSearch();

        		//창 이동 하는것은 920으로 옮겨서 코딩
        		//910은 close 구분자로 search 안하게 분기 할 수 있음

        		/*case "save" :
        		var menuRow = nexacro.getApplication().gdsMenu.findRowExpr("SCREEN_ID==_W' && MENU_PARAM_CD==");
        		var menuId = nexacro.getApplication().gdsMenu.getColumn(menuRow, 'MENU_ID');
        		Ex.core.openLink(this, menuId, {});
        		break;
        		*/
        	}

        	switch(varValue)
        	{
        		/*case "save" :
        		var menuRow = nexacro.getApplication().gdsMenu.findRowExpr("SCREEN_ID==_W' && MENU_PARAM_CD==");
        		var menuId = nexacro.getApplication().gdsMenu.getColumn(menuRow, 'MENU_ID');
        		Ex.core.openLink(this, menuId, {});
        		break;
        		*/
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		//case "searchConfirm" :
        		//	this.fnSearch();
        		//	break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "pAlertSearch" :
        			return;
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출

        	this.grdMain.displayRowType();

        	var arrBtn = [this.divGrdTopBtn.form.btnSendMemo];	// 쪽지보내기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btn_go];	// 수신함이동
        	Ex.util.setBtnVisible(this, 'save', arrBtn);


        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);


        	this.MENU_PARAM_CD = Ex.util.getScreenInfo(this, 'menuParamCd');

        	// 공통코드 조회
        	this.fnGetCmmCd();
        	this.fnSearchReset();
        	//this.fnSearch();	// 조회
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'DAT_TYPE_CD',							'MENU_PARAM_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD',								'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'ALL',									'ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y',									'Y']				// 사용여부
        		,filter	: ['',			'ITM_VAL_1=="REF"||ITM_VAL_1=="ETC"',	'']				// filterStr
        		,objDs	: [this.dsYnCd,	this.dsDatTypeCd,						this.dsMenuParamCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnOpenMenu = function(obj)
        {
        	var sMenuId 	= obj.menuId;
        	trace('sMenuId :: ' + sMenuId);

        	var nRow		= this.objApp.gdsMenu.findRow("MENU_ID", sMenuId);
        	var sMenuUrl   	= this.objApp.gdsMenu.getColumn(nRow, "MENU_URL");
        // 	trace('this.objApp.gdsMenu.getColumn(nRow, "MENU_URL") :: ' + sMenuUrl);
        // 	trace('this.objApp.gdsMenu.saveXML() :: ' + this.objApp.gdsMenu.saveXML());

        	if(!Ex.isEmpty(sMenuUrl))
        	{
        		if( this.pdvMiddleMenu ) {
        			if( this.pdvMiddleMenu.toString().toUpperCase() == '[OBJECT POPUPDIV]' )
        				this.pdvMiddleMenu.closePopup();
        			else if (this.pdvMiddleMenu.toString().toUpperCase() == '[OBJECT DIV]') {
        				this.pdvMiddleMenu.destroy();
        			}
        		}

        		var objParam = {};
        		objParam.menuId = sMenuId;
        		objParam.menuUrl = sMenuUrl;
        		Ex.core.openMenu(objParam);
        	} else {
        		trace("연결된 업무화면이 없습니다.");
        	}
        }

        this.fnPopupRecall = function(obj)
        {
        	//alert("fnPopupRecall");
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "btnSearch" :
        			if(this.div_search.form.calStime.value > this.div_search.form.calEtime.value){
        				var param = {
        					id : "pAlertSearch"
        					, msg : "작성일자 조회 시작일이 종료일보다 큽니다."
        					, arrparam : ['']
        					, msgtype : "I"
        				};

        				Ex.core.error(this, param);
        				return;
        			}

        			this.fnSearch();
        			break;

        		case "btnSendMemo" :
        			this.fn_popup();
        			break;

        		case "btnDelete" :	// 삭제
        			this.fnDelete(this.ds_pt_memo_lst);
        			break;

        		case "btnSave" :	// 저장-쪽지삭제용
        			if(Ex.util.isUpdated(this.ds_pt_memo_lst))
        				{
        					var param = {
        						id : "saveConfirm"
        						, msg : "선택하신 쪽지를 삭제하시겠습니까?"
        						, arrparam : ['']
        						, msgtype : "I"};
        					Ex.core.confirm(this, param);
        				}
        			break;

        		case "btn_go" :	// 수신함으로 이동
        			var obj = {menuId : '684'};			//수신함 684 발신함 685
        			this.fnOpenMenu(obj);
        			break;
        	}
        }

        this.grdMain_oncellclick = function(obj,e)
        {
        	if(e.row < 0) return;

        	this.killTimer(0);

        	if(e.col ==3){				// 발신 쪽지 상세 내용 팝업 fnMemoDetail
        		this.fnMemoDetail(e.row);
        	}else if(e.col == 2){		// 첨부 파일 팝업 fnMemoFileDetail
        		this.fnMemoFileDetail(e.row);
        	}else{
        		fv_MemoId = "";
        	}
        };

        //쪽지 보내기창 팝업
        this.fn_popup = function()
        {
        	var sSize = '';
        	sSize = 'width=1060,height=610';
        	Ex.core.popup(
        		this,
        		'sendMemo',
        		"fomm::FOMM0900_W.xfdl",             		// <--- 팝업창 오픈 Url
        		{ title		: Ex.core.word('쪽지') + ' ' + Ex.core.word('보내기'),
        			pMenuParamCd	: this.MENU_PARAM_CD
        		},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        	);
        }


        this.fnMemoDetail = function(crow)
        {
        	fv_MemoId = this.ds_pt_memo_lst.getColumn(crow, "MEMO_ID");
        	fv_MEMO_STATUS_CD = this.ds_pt_memo_lst.getColumn(crow, "MEMO_STATUS_CD");

        	//trace("910 memo id : " +fv_MemoId);
        	 /*
        	if(fv_MEMO_STATUS_CD == 1 && Ex.isEmpty(this.ds_pt_memo_lst.getColumn(crow, "RCV_USER_NM")))
        	{	//수신자가 없으면 임시저장 0900 행

        		var sSize = '';
        		sSize = 'width=1060,height=610';
        		Ex.core.popup(
        			this,
        			'sendMemo',
        			"fomm::FOMM0900_W.xfdl",             		// <--- 팝업창 오픈 Url
        			{ title		: Ex.core.word('쪽지') + ' ' + Ex.core.word('보내기'),
        			  pMEMO_ID	: fv_MemoId,
        			  pflag 		: "temp_memo",
        			  fv_MEMO_STATUS_CD		: fv_MEMO_STATUS_CD,
        			  pMenuParamCd	: this.MENU_PARAM_CD
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        		);

        	} else {
        		//발송 0950 행
        		var sSize = '';
        		sSize = 'width=1060,height=610';
        		Ex.core.popup(
        			this,
        			'MemoDetail',
        			"fomm::FOMM0950_W.xfdl",             		// <--- 팝업창 오픈 Url
        			{ title		: Ex.core.word('쪽지') + ' ' + Ex.core.word('내용'),
        			  memoId	: fv_MemoId,
        			  fv_MEMO_STATUS_CD		: fv_MEMO_STATUS_CD,
        			  flag 		: "SND",
        			  pMenuParamCd	: this.MENU_PARAM_CD
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        	*/


         	var sSize = '';
         		sSize = 'width=1060,height=610';
         		Ex.core.popup(
         			this,
         			'MemoDetail',
         			"fomm::FOMM0950_W.xfdl",             		// <--- 팝업창 오픈 Url
         			{ title		: Ex.core.word('쪽지') + ' ' + Ex.core.word('내용'),
         			  memoId	: fv_MemoId,
         			  flag 		: "SND",
        			  fv_MEMO_STATUS_CD		: fv_MEMO_STATUS_CD,
         			  pMenuParamCd	: this.MENU_PARAM_CD
         			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
         			sSize                  // <--- width/height/modeless(프레임 처리 옵션)
         		);




        }

        this.edtCondTextOnkeyUP = function(obj,e)
        {
        	if(e.keycode == 13) this.fnSearch();
        }

        this.btn00_onclick = function(obj,e)
        {
        	var obj = {menuId : 684};			//수신함 684 발신함 685
        	this.fnOpenMenu(obj);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cboCond.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.div_search.form.edtCondText.addEventHandler("onkeyup",this.edtCondTextOnkeyUP,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btn_go.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnSendMemo.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdMain.addEventHandler("oncellclick",this.grdMain_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("FOMM0910_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
