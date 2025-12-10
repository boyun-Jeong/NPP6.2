(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0230_P01");
            this.set_titletext("FAQ 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_POP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDatTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20","53",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboDatDivCd","125","58","110","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsDatTypeCd");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("FAQ구분;NULL");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","cboDatDivCd:5","53","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("제목");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divFile","20",null,null,"133","20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_url("comm::comFile.xfdl");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","20","86",null,null,"20","divFile:20",null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcConts","20","86","100",null,null,"divFile:20",null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("내용");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtTitle","stcTitle:5","58",null,"24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validation("제목;NULL");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divWebEditor","stcConts:5","91",null,null,"25","divFile:26",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_url("comm::comWebEditor.xfdl");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divTop","20","20",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","0",null,"34","0",null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcBoardNo","0","0","100","34",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("번호");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edtBoardNo","stcBoardNo:5","5","110","24",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcRegiDt","edtBoardNo:5","0","100","34",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("등록일시");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcFrnm","490","0","100","34",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("작성자");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edtTitle00","stcFrnm:5","5","100","24",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcFrDeptNm","edtTitle00:5","0","100","34",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("부서/팀명");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edtFrDeptNm","stcFrDeptNm:5","5",null,"24","5",null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Calendar("calFrdt","325","5","160","24",null,null,null,null,null,null,this.divContent.form.divTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divContent.form.divTop.addChild(obj.name, obj);

            obj = new Static("stcDatTypeCd","20","53","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("FAQ구분");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divComment","1000.00","0","400",null,null,"60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divComment","0","53",null,null,"0","20",null,null,null,null,this.divComment.form);
            obj.set_taborder("0");
            obj.set_async("false");
            obj.set_url("comm::comCommentDiv.xfdl");
            obj.set_background("white");
            obj.set_visible("true");
            this.divComment.addChild(obj.name, obj);

            obj = new Static("Static02","0","20","87","24",null,null,null,null,null,null,this.divComment.form);
            obj.set_taborder("1");
            obj.set_text("댓글");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divComment.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divFile
            obj = new Layout("default","",0,0,this.divContent.form.divFile.form,function(p){});
            this.divContent.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divWebEditor
            obj = new Layout("default","",0,0,this.divContent.form.divWebEditor.form,function(p){});
            this.divContent.form.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTop.form
            obj = new Layout("default","",0,0,this.divContent.form.divTop.form,function(p){});
            this.divContent.form.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComment.form.divComment
            obj = new Layout("default","",0,0,this.divComment.form.divComment.form,function(p){});
            this.divComment.form.divComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComment.form
            obj = new Layout("default","",0,0,this.divComment.form,function(p){});
            this.divComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.edtTitle","value","dsBoardMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divTop.form.edtTitle00","value","dsBoardMt","FRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divTop.form.edtBoardNo","value","dsBoardMt","BOARD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divTop.form.edtFrDeptNm","value","dsBoardMt","FR_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.cboDatDivCd","value","dsBoardMt","DAT_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divTop.form.calFrdt","value","dsBoardMt","FRDT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comFile.xfdl");
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
            this._addPreloadList("fdl","comm::comCommentDiv.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0230_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0230_P01
        * 화면(명)		︰ FAQ 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP FAQ 팝업
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
        this.pPopType = 'R';	// R: read / I: new / U: edit

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

        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0210W/select01";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsBoardMt=dsBoardMt";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0210W/save01";                         // 서비스명
            var sInDs = "dsBoardMt=dsBoardMt:U dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

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
        			var webConts = this.dsBoardMt.getColumn(this.dsBoardMt.rowposition, 'CONTS')||'';
        			this.divContent.form.divWebEditor.form.setContent(webConts, false);
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        			var param = {
        					id : "saveAlert"
        				  , msg : "10004"
        				  , arrparam : ['']
        				  , msgtype : "S"};
        			Ex.core.alert(this, param);
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
        		case "saveConfirm" :
        			this.divContent.form.divFile.form.fnUploadFiles();
        			break;

        		case "saveAlert" :
        			Ex.core.pclose(this, 'save');
        			break;
        	}
        }

        // 파일 업로드 default callback
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	// TO DO
        	// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	switch(sSvcId)
        	{
        		case "fileSvc" :
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
        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnGetCmmCd();		// 공통코드 조회

        	this.pPopType 	= (this.getOwnerFrame().pPopType||'').toUpperCase();
        	var pBoardNo	= this.getOwnerFrame().pBoardNo||'';

        	// 첨부파일 setting
        	var oParam = {
        		 sSvcId		: 'fileSvc'		// divFile callback 후처리용 서비스 ID
        		,limitMinCnt: 0					// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3					// 파일 최대 갯수; default 5
        		,limitSize	: 100				// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'fomm'			// 폴더명(업무명)
        		,tableName	: 'FOMM_BOARD_MT'	// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: pBoardNo||''		// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''				// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''				// 테이블 PK3 (복합 키인 경우 사용)
        		,fileDownYn	: ''				// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: ''				// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''				// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};

        	switch(this.pPopType)
        	{
        		case "I" :
        			this.divContent.form.divFile.form.setConfig(this, oParam);
        			this.divBottom.form.btnSave.set_visible(true);

        			this.divContent.form.divWebEditor.form.initCreate();

        			this.dsBoardMt.clearData();
        			var rowPos = this.dsBoardMt.setAddRow();
        			this.dsBoardMt.setColumn(rowPos, 'BOARD_TYPE_CD', 'FAQ');
        			this.dsBoardMt.setColumn(rowPos, 'DAT_TYPE_CD', '');
        			break;

        		case "U" :
        			this.divContent.form.divFile.form.setConfig(this, oParam);
        			this.divBottom.form.btnSave.set_visible(true);

        			var oCmtParam = {
        				  tableName		: 'FOMM_BOARD_MT'
        				, primaryKey1	: pBoardNo||''
        				, primaryKey2	: ''
        				, primaryKey3	: ''
        				, extCol1		: ''
        				, extCol2		: ''
        				, extCol3		: ''
        				, extCol4		: ''
        				, extCol5		: ''
        				, nDispComment	: ''
        			};
        			this.fnOpencomment(oCmtParam);

        			this.divContent.form.divWebEditor.form.initCreate();

        			this.dsCond.setColumn(this.dsCond.rowposition, 'BOARD_NO', pBoardNo);
        			this.fnSearch();
        			break;

        		case "R" :
        		default	 :
        			this.divContent.form.divFile.form.setConfig(this, oParam,'',true);
        			var oCmtParam = {
        				  tableName		: 'FOMM_BOARD_MT'
        				, primaryKey1	: pBoardNo||''
        				, primaryKey2	: ''
        				, primaryKey3	: ''
        				, extCol1		: ''
        				, extCol2		: ''
        				, extCol3		: ''
        				, extCol4		: ''
        				, extCol5		: ''
        				, nDispComment	: ''
        			};
        			this.fnOpencomment(oCmtParam);

        			this.divContent.form.divWebEditor.form.initCreate(true);

        			// 저장 button visible false
        			this.divBottom.form.btnSave.set_visible(false);

        			// component readonly
        			this.divContent.form.edtTitle.set_readonly(true);
        			this.divContent.form.cboDatDivCd.set_readonly(true);

        			this.dsCond.setColumn(this.dsCond.rowposition, 'BOARD_NO', pBoardNo);
        			this.fnSearch();
        			break;
        	}


        	this.divContent.set_visible(true);
        }

        this.fnOpencomment = function(param)
        {
        	var nMargin = 20;
        	this.divComment.set_right(nMargin);
        	this.divComment.set_visible(true);
        	this.divComment.form.divComment.form.setConfig(this, param);

        	this.divContent.set_right(this.divComment.getOffsetWidth() + nMargin);
        }


        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['SEL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']				// 사용여부
        		,filter	: ['ITM_VAL_1=="FAQ"||ITM_VAL_1=="ETC"']				// filterStr
        		,objDs	: [this.dsDatTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        // dataset data setting
        this.fnSetMt = function()
        {
        	var rowpos = this.dsBoardMt.rowposition;
        	var webConts = this.divContent.form.divWebEditor.form.getContent();
        	this.dsBoardMt.setColumn(rowpos, 'CONTS', webConts);
        }

        // validation
        this.fnCheckValidate = function()
        {
        	// component validation
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") )
        		return false;

        	// 내용 validation
        	var webConts = this.divContent.form.divWebEditor.form.getContent()||'';
        	if( Ex.isEmpty(webConts) ) {
        		var param = {
        				id : "webContsEmptyAlert"
        			  , msg : "11001"
        			  , arrparam : [Ex.core.word('내용')]
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
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
        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSave" :		// 저장
        			this.fnSetMt();

        			if( Ex.util.isUpdated(this.dsBoardMt) || this.divContent.form.divFile.form.isUpdateForm() )
        			{
        				if( !this.fnCheckValidate() ) {
        					return;
        				}
        				else {
        					var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"};
        					Ex.core.confirm(this, param);
        				}

        			}

        			break;
        	}
        }

        this.dsBoardMt_oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsBoardMt.addEventHandler("oncolumnchanged",this.dsBoardMt_oncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0230_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
