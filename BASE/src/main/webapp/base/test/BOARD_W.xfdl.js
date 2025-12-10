(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0210_W");
            this.set_titletext("공지사항관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommBoardMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_BOARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_POP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCHFILE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LVL\">0</Col></Row><Row><Col id=\"LVL\">1</Col></Row><Row><Col id=\"LVL\">2</Col></Row><Row><Col id=\"LVL\">1</Col></Row><Row><Col id=\"LVL\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDatTypeCd", this);
            obj._setContents("");
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
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("게시판 명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtTitle","91.00","13","160","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","edtTitle:0.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDatTypeCd","365.00","13","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsDatTypeCd");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDelYn","cboDatTypeCd:30.00","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDelYn","stcDelYn:-3.00","13","150","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDatTypeCd","Static00_00:0.00","13","88","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("게시판 구분");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","515.00","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdBoardMt","370","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommBoardMt");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"400\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"110\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"번호\"/><Cell col=\"3\" text=\"게시판 구분\"/><Cell col=\"4\" text=\"게시판 명\"/><Cell col=\"5\" text=\"게시시작일시\"/><Cell col=\"6\" text=\"게시종료일시\"/><Cell col=\"7\" text=\"종류\"/><Cell col=\"8\" text=\"첨부파일\"/><Cell col=\"9\" text=\"삭제여부\"/><Cell col=\"10\" text=\"등록자\"/><Cell col=\"11\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:BOARD_NO\" cssclass=\"grdBTreeCell_WF_event\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treestartlevel=\"0\" treelevel=\"bind:LVL\"/><Cell col=\"3\" text=\"bind:BOARD_TYPE_CD\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:TITLE\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"5\" text=\"bind:BEGIN_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:END_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"bind:BOARD_TYPE_NM\" displaytype=\"normal\"/><Cell col=\"8\" text=\"expr:ATCHFILE_YN==&apos;Y&apos;? &apos;theme://SPP_IMAGE_SET/WF/btn_WF_download_N.png&apos; : &apos;&apos;\" displaytype=\"imagecontrol\"/><Cell col=\"9\" text=\"bind:DEL_YN\" displaytype=\"combotext\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsYnCd\"/><Cell col=\"10\" text=\"bind:FRNM\"/><Cell col=\"11\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"단어번호\"/><Cell col=\"3\" text=\"시스템언어 단어\"/><Cell col=\"4\" text=\"현재언어 단어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:WORD_NO\"/><Cell col=\"3\" text=\"bind:SYS_WORD\"/><Cell col=\"4\" text=\"bind:SEL_WORD\" validation=\"단어;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","370","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("게시글 목록");
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

            obj = new Div("divGrdMtTopBtn","grdBoardMt:-250","70","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","464.00","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommBoardMt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","350","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00","0.00","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("게시판 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeExpand",null,"70","24","24","1517",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btnTreeCollapse",null,"70","24","24","Static00_01:0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCodeTree","0","104","350",null,null,"40",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsCodeTree");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useCheck("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"게시판명\"/></Band><Band id=\"body\"><Cell text=\"bind:CMM_CD_NM\" treelevel=\"bind:CD_LVL\" cssclass=\"\"/><Cell col=\"1\" text=\"bind:SEL_LANG_CMM_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdMtTopBtn.form,function(p){});
            this.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtTitle","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.cboDelYn","value","dsCond","DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboDatTypeCd","value","dsCond","DAT_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BOARD_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ TS0010_W
        * 화면(명)		︰ 공지사항관리
        * 메뉴(경로)	︰ 관리자 > 커뮤니티관리 > 공지사항관리
        * 화면 설명	︰ SPP 공지사항 관리
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
        	this.fnCompInit();		// 컴포넌트 초기화

        	this.fnSearchReset();	// 검색조건 초기화
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

        	//this.dsCond.setColumn(this.dsCond.rowposition, 'BOARD_TYPE_CD', 'NTC');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEL_YN', 'N');
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsFommBoardMt) )
        	{
        		var param = {	id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}
        	this.fnSearch01();
        }

        // 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "BOARD/select01";            	// 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommBoardMt=dsBoardMt";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "BOARD/save01";
            var sInDs = "dsBoardMt=dsFommBoardMt:U dsCond=dsCond";
            var sOutDs = "dsFommBoardMt=dsBoardMt";
            var sArg = "";
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
        			this.grdBoardMt.setCellProperty("Head", this.grdBoardMt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.grdBoardMt.setCellProperty("Head", this.grdBoardMt.getBindCellIndex('Body', 'CHK'), "text", "0");
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
        		case "noticePop" :
        			if( (varValue||'').toUpperCase() == 'SAVE' )
        				this.fnSearch();
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
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.fnSave();
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
        	this.grdBoardMt.displayRowType();

        	// 공통코드 조회
        	//this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdMtTopBtn.form.btnAdd];		// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdMtTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD',		'DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL',		'ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y']				// 사용여부
        		,filter	: ['',			"ITM_VAL_1=='NTC'||ITM_VAL_1=='ETC'"]				// filterStr
        		,objDs	: [this.dsYnCd,	this.dsDatTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }


        this.fnOpenPop = function(BOARD_NO)
        {
        	BOARD_NO = BOARD_NO||'';
        	var sSize = '';
        	var url = '';
        	var pPopType;
        	if( Ex.isEmpty(BOARD_NO) ) {
        		pPopType = 'I';
        		sSize = 'width=900,height=500';
        	}
        	else {
        		pPopType = 'U';
        		sSize = 'width=1400,height=750';
        	}

        	if(pPopType == 'I'){
        		url = "test::BoardInsert_P02.xfdl";
        	} else {
        		url = "test::BOARD_P01.xfdl"; // 게시판 수정?에 해당하는 팝업 url
        	}
        	Ex.core.popup(
        			this,
        			'noticePop',
        			url,             		// <--- 팝업창 오픈 Url
        			{ title			: Ex.core.word('게시판') + ' ' + Ex.core.word('생성'),
        			  pPopType		: pPopType,
        			  pBoardNo		: BOARD_NO
        			},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			sSize                  // <--- width/height/modeless(프레임 처리 옵션)
        	);
        }


        this.fnCheckValidate = function()
        {
        		if( !Ex.util.isUpdated(this.dsFommBoardMt) )
        		return false;

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
        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAdd' :
        			this.fnOpenPop();
        			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsFommBoardMt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() )
        			{
        				var param = {	id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
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

        this.grdBoardMt_oncellclick = function(obj,e)
        {
        	if( e.cell == obj.getBindCellIndex('body', 'TITLE') )
        	{
        		var BOARD_NO = this.dsFommBoardMt.getColumn(this.dsFommBoardMt.rowposition, 'BOARD_NO');
        		this.fnOpenPop(BOARD_NO);
        	}
        };

        this.stcTreeTitle_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtTitle.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboDatTypeCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboDelYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.grdBoardMt.addEventHandler("oncellclick",this.grdBoardMt_oncellclick,this);
            this.stcTreeTitle.addEventHandler("onclick",this.stcTreeTitle_onclick,this);
            this.divGrdMtTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTreeExpand.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnTreeCollapse.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdCodeTree.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.dsFommBoardMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("BOARD_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
