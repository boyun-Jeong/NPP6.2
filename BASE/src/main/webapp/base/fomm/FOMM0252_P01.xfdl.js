(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0252_P01");
            this.set_titletext("템플릿 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_TMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmplMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TMPL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMNM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
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
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","20","86",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","670",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20","53",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcConts","20.00","118","100",null,null,"20",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("내용");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divWebEditor","stcConts:5.00","125",null,null,"25","25",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_url("comm::comWebEditor.xfdl");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divTopIU","20","20",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","0",null,"34","0",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcTmplNm","0","0","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("템플릿 명");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Edit("edtTmplNm","105.00","5","570","24",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validation("템플릿명;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_text("");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcBringTmpl","680.00","0","100","34",null,null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("템플릿 선택");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Combo("cboBringTmpl","785.00","5",null,"24","5",null,null,null,null,null,this.divContent.form.divTopIU.form);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("템플릿;NULL");
            obj.set_innerdataset("dsTmpl");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_validationGroup("fvValiCmp");
            obj.set_text("");
            this.divContent.form.divTopIU.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_01","20.00","86",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRegiDt","20.00","53","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("등록일시");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUpdateDt","20.00","86","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("수정일시");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calFrdt","125.00","58","360","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calLmdt","125.00","91","360","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcFrnm",null,"53","100","34","410",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("작성자");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcLmnm",null,"86","100","34","410",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("수정자");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtLmnm",null,"91","100","24","305",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtFrnm",null,"58","100","24","305",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUseYn",null,"86","100","34","200",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("사용 여부");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcFrDeptNm",null,"53","100","34","200",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("부서/팀명");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboUseYnCd",null,"91","170","24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("20");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsYnCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("사용여부;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtFrDeptNm",null,"58","170","24","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("21");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divWebEditor.form
            obj = new Layout("default","",0,0,this.divContent.form.divWebEditor.form,function(p){});
            this.divContent.form.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTopIU.form
            obj = new Layout("default","",0,0,this.divContent.form.divTopIU.form,function(p){});
            this.divContent.form.divTopIU.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divTopIU.form.edtTmplNm","value","dsTmplMt","POST_TMPL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.calFrdt","value","dsTmplMt","FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.calLmdt","value","dsTmplMt","LMDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.edtFrnm","value","dsTmplMt","FRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.edtLmnm","value","dsTmplMt","LMNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.edtFrDeptNm","value","dsTmplMt","FR_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.cboUseYnCd","value","dsTmplMt","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.divTopIU.form.cboBringTmpl","value","dsTmplMt","POST_TMPL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0252_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0252_P01
        * 화면(명)		︰ 게시판 템플릿 팝업
        * 메뉴(경로)	︰
        * 화면 설명	︰ SPP 게시판 템플릿 팝업
        * 작성자		︰ 정하림
        * 작성일		︰ 2025.01.13
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.01.13	 정하림			최초작성
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
        	this.divContent.form.divTopIU.form.edtTmplNm.setFocus();

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
        	var sTranId = "select05";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/select05";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTmplMt=dsTmplMt";           // 서버에서 수신할 데이타셋
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
        	var sTranId = "save03";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0251W/save03";                         // 서비스명
            var sInDs = "dsTmplMt=dsTmplMt:U dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTmplMt=dsTmplMt";           // 서버에서 수신할 데이타셋
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
        		case "select05" :
        			var webConts = this.dsTmplMt.getColumn(this.dsTmplMt.rowposition, 'CONTS')||'';
        			this.divContent.form.divWebEditor.form.setContent(webConts, false);

        			Ex.core.toast(this, "10002");
        			break;

        		case "save03" :
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
        			this.fnSave();
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
        	var pTmplId	= this.getOwnerFrame().pTmplId||'';

        	switch(this.pPopType)
        	{
        		case "I" :
        			this.divContent.form.divTopIU.set_visible(true);
        			this.divBottom.form.btnSave.set_visible(true);
        			this.divContent.form.divWebEditor.form.initCreate();

        			this.dsTmplMt.clearData();
        			var rowPos = this.dsTmplMt.setAddRow();

        			this.dsTmplMt.setColumn(rowPos, 'FRNM', Ex.util.getSession('gvUserNm'));
        			this.dsTmplMt.setColumn(rowPos, 'FR_DEPT_NM', Ex.util.getSession('gvDeptNm'));

        			break;

        		case "U" :
        			this.divContent.form.divTopIU.set_visible(true);
        			this.divBottom.form.btnSave.set_visible(true);
        			this.divContent.form.divWebEditor.form.initCreate();

        			this.dsCond.setColumn(this.dsCond.rowposition, 'POST_TMPL_ID', pTmplId);
        			this.fnSearch();

        			break;

        		case "R" :
        		default	 :
        			this.divContent.form.divWebEditor.form.initCreate(true);
        			this.divContent.form.divTopIU.set_visible(true);

        			// 저장 button visible false
        			this.divBottom.form.btnSave.set_visible(false);

        			// component readonly
        			this.divContent.form.divTopIU.form.edtTmplNm.set_readonly(true);
        			this.divContent.form.divTopIU.form.cboBringTmpl.set_readonly(true);
        			this.divContent.form.cboUseYnCd.set_readonly(true);

        			this.dsCond.setColumn(this.dsCond.rowposition, 'POST_TMPL_ID', pTmplId);
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
        		upCmmCd : ['YN_CD',		'POST_TMPL_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD',	'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['SEL',		'SEL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',			'Y']				// 사용여부
        		,filter	: ['',			'']				// filterStr
        		,objDs	: [this.dsYnCd, this.dsTmpl]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }


        // dataset data setting
        this.fnSetMt = function()
        {
        	var rowpos = this.dsTmplMt.rowposition;
        	var webConts = this.divContent.form.divWebEditor.form.getContent();
        	this.dsTmplMt.setColumn(rowpos, 'CONTS', webConts);
        }

        // validation
        this.fnCheckValidate = function()
        {
        	// component validation
        	if( !Ex.util.checkValidate(this.divContent.form.divTopIU, "fvValiCmp") )
        		return false;
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") )
        		return false;

        	// 내용 validation
        	var webConts = this.divContent.form.divWebEditor.form.getContent()||'';
        	this.dsTmplMt.setColumn(this.dsTmplMt.rowposition, "CONTS", webConts);

        	if(this.dsTmplMt.getColumn(0, "CONTS").trim() == "<p>&nbsp;</p>"){
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

        			if( Ex.util.isUpdated(this.dsTmplMt) )
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

        this.dsTmplMt_oncolumnchanged = function(obj,e)
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
            this.dsTmplMt.addEventHandler("oncolumnchanged",this.dsTmplMt_oncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0252_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
