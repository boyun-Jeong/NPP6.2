(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0160_W");
            this.set_titletext("메시지관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEL_MSG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYSLANG_MSG_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"CURLANG_MSG_CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmMsgDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmMsgMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLangCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgTypeCd", this);
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

            obj = new Static("stcMsgDiv","20.00","13","93","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("메시지구분");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboMsgTypeCd","stcMsgDiv:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsMsgTypeCd");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","cboMsgTypeCd:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSysLangMsg","Static00_00_00:0.00","13","128","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("시스템언어 메시지");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtSysLangMsgConts","stcSysLangMsg:0.00","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","edtSysLangMsgConts:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcCurLangMsg","Static00_00:0.00","13","116","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("현재언어 메시지");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCurLangMsgConts","stcCurLangMsg:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdMsgMt","0","104","50.54%",null,null,"40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCmmMsgMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"500\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"메시지번호\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"시스템언어 메시지 내용\"/><Cell col=\"4\" text=\"현재언어 메시지 내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"bind:MSG_NO\" displaytype=\"expr:ROWFLAG==&apos;I&apos;? &apos;editcontrol&apos; : &apos;text&apos;\" edittype=\"expr:ROWFLAG==&apos;I&apos;? &apos;text&apos; : &apos;none&apos;\" validation=\"메시지번호;NULL\" editinputtype=\"digit,number\"/><Cell col=\"3\" text=\"bind:SYS_LANG_MSG\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:SEL_LANG_MSG\" displaytype=\"text\" edittype=\"none\" validation=\"메시지용도;NULL\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메시지코드");
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

            obj = new Grid("grdMsgDt","grdMsgMt:20","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsCmmMsgDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useCheck("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\"/><Column size=\"500\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"언어코드\"/><Cell col=\"3\" text=\"메시지 내용\"/><Cell col=\"4\" text=\"최종수정자\"/><Cell col=\"5\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:LANG_CD\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsLangCd\" validation=\"언어코드;NULL\" displaytype=\"combotext\"/><Cell col=\"3\" displaytype=\"expr:ROWFLAG==&apos;I&apos;?&apos;editcontrol&apos;:&apos;text&apos;\" text=\"bind:MSG_CONTS\" edittype=\"text\" validation=\"메시지내용;NULL\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LMNM\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:LMDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","grdMsgMt:0","105","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","grdMsgMt:20","70","320","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[메시지] 메시지내용");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdDtTopBtn",null,"70","240","24","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteDt",null,"0","60",null,"0","0",null,null,null,null,this.divGrdDtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdDtTopBtn.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn","grdMsgMt:-250","70","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteMt",null,"0","60",null,"0","0",null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddMt",null,"0","60","24","65",null,null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:0","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsCmmMsgMt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdDtTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdDtTopBtn.form,function(p){});
            this.divGrdDtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdMtTopBtn.form,function(p){});
            this.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtSysLangMsgConts","value","dsCond","SYSLANG_MSG_CONTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.edtCurLangMsgConts","value","dsCond","CURLANG_MSG_CONTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.cboMsgTypeCd","value","dsCond","MSG_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0160_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0160_W
        * 화면(명)		︰ 메시지관리
        * 메뉴(경로)	︰ 관리자 > 코드관리 > 메시지관리
        * 화면 설명	︰ SPP 기본 공통메시지관리 화면
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
        this.objApp = nexacro.getApplication();
        this.nLastRow = 0;	// 사용자정보 dataset 마지막 rowposition
        this.nSelRow = -1;	// 이동하려는 행
        this.rowChangeFlag = false;		// true: 행변경 가능

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
        	this.dsCond.setColumn(this.dsCond.rowposition, 'MSG_TYPE_CD', 'MSG_TYPE_03');
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsCmmMsgDt) )
        	{
        		var param = {	id : "searchConfirm"
        					  , msg : "10001"
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	this.fnSearch01();
        }

        // 조회
        this.fnSearch01 = function()
        {
        	this.dsCmmMsgDt.clearData();

        	this.dsCond.setColumn(0, 'CUR_LANG_CD', Ex.util.getSession('gvLangCd'));

        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0160W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCmmMsgMt=dsCmmMsgMt";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 권한별 메뉴 목록 조회
        this.fnSearch02 = function()
        {
        	var sTranId = "select02";
            var sService = "FOMM0160W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsCmmMsgDt=dsCmmMsgDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0160W/save01";
            var sInDs = "dsCmmMsgMt=dsCmmMsgMt:U dsCmmMsgDt=dsCmmMsgDt:U dsCond=dsCond";
            var sOutDs = "dsCmmMsgMt=dsCmmMsgMt";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        	{
        		if(objDs.getColumn(i, "DATA_ROWFLAG") != "I")
        		{
        			objDs.setDeleteRow(i);
        		}
        		else
        		{
        			objDs.setColumn(i, "CHK", "");
        			objDs.setColumn(i, "ROWFLAG", "");
        			objDs.setColumn(i, "MSG_CONTS", "");
        			objDs.setColumn(i, "RMK", "");
        		}
        	}
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
        			this.fnSetBtnVisible();	// 버튼 visible 처리
        			Ex.core.toast(this, "10002");
        			this.grdMsgMt.setCellProperty("Head", this.grdMsgMt.getBindCellIndex('Body', 'CHK'), "text", "0");

        			var objSize = nexacro.getTextSize(this.stcTreeTitle.text, this.stcTreeTitle._getCurrentStyleInheritValue("font"));
        			this.stcTreeTitle.set_width(parseInt(objSize.nx) + 20);

        			// cnt 위치 조정
        			objSize = nexacro.getTextSize(this.stcCnt.text, this.stcCnt._getCurrentStyleInheritValue("font"));
        			this.stcCnt.set_width(parseInt(objSize.nx) + 20);
        			this.stcCnt.set_left("stcTreeTitle:0");
        			break;

        		case "select02" :
        			this.grdMsgDt.setCellProperty("Head", this.grdMsgDt.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			this.dsCmmMsgMt.set_rowposition(this.nLastRow);
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
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

        		case "saveConfirm" :
        			this.nLastRow = this.dsCmmMsgMt.rowposition;	// 마지막 rowposition 저장
        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSetDatasetDt();		// 저장용 datset 전처리
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsCmmMsgMt.set_rowposition(this.nSelRow);
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
        	this.grdMsgMt.displayRowType();
        	this.grdMsgDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();
        	this.dsCond.setColumn(this.dsCond.rowposition, 'MSG_TYPE_CD', 'MSG_TYPE_03');
        }

        this.fnSetBtnVisible = function()
        {
        	var msgTypeCd = Ex.isNvl(this.dsCond.getColumn(this.dsCond.rowposition, 'MSG_TYPE_CD'), 'MSG_TYPE_03');

        	if(msgTypeCd == 'MSG_TYPE_01') {	// 메뉴명 메시지
        		var arrBtn = [this.divGrdMtTopBtn.form.btnAddMt, this.divGrdMtTopBtn.form.btnDeleteMt,	this.divGrdDtTopBtn.form.btnDeleteDt];
        		for(var i = 0; i < arrBtn.length; i++)
        			arrBtn[i].set_visible(false);
        	}
        	else {	// 메뉴명 외 메시지
        		// 버튼&권한 mapping && visible 처리
        		var arrBtn = [this.divGrdMtTopBtn.form.btnAddMt];		// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        		Ex.util.setBtnVisible(this, 'write', arrBtn);
        			arrBtn = [this.divGrdMtTopBtn.form.btnDeleteMt,	this.divGrdDtTopBtn.form.btnDeleteDt];	// 삭제
        		Ex.util.setBtnVisible(this, 'delete', arrBtn);
        	}

        	arrBtn = [this.divGrdBotBtn.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdDtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['LANG_CD',		'YN_CD',		'MSG_TYPE_CD']		// 조회할 상위코드
        		,codeDiv: ['CMM_CD',		'CMM_CD',		'CMM_CD']			// 조회할 코드의 업무구분
        		,optStr	: ['SEL',			'SEL',			'']					// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y',			'Y']				// 사용여부
        		,filter	: ['',				'',				'']					// filterStr
        		,objDs	: [this.dsLangCd,	this.dsYnCd,	this.dsMsgTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	//메시지 구분에 따른 자리수 처리
        	//메뉴명 0 ~ 10000
        	//메시지 코드 10001 ~ 20000
        	//SPP 코드 20000 ~ 9999999
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	trace("dsCond ::: " + this.dsCond.getColumn(0,"MSG_TYPE_CD"));
        	var msgType = this.dsCond.getColumn(0,"MSG_TYPE_CD");
        	if(msgType == 'MSG_TYPE_01'){
        //  		var param = {id : "msgType01Alert" , msg : "11031" , arrparam : [Ex.core.word("메시지번호"), 0,10000] , msgtype : "I"};
        //  		Ex.core.alert(this, param);
        //  		return false;
        	}else if (msgType =='MSG_TYPE_02'){
        		var msgCd = this.dsCmmMsgMt.getColumn(this.dsCmmMsgMt.rowposition,'MSG_NO')
        		for(var i = 0 ; i < this.dsCmmMsgMt.rowcount ; i ++ ) {
        			if(this.dsCmmMsgMt.getColumn(this.dsCmmMsgMt.rowposition,'ROWFLAG') == 'I'){
        				if(Number(msgCd) < 10000 || Number(msgCd) > 20000){
        					var param = {id : "msgType02Alert"  , msg : "11031"  , arrparam : [Ex.core.word("메시지번호"), 10001,20000]  , msgtype : "I"};
        					Ex.core.alert(this, param);
        					return false;
        				}
        			}
        		}
        	}else if (msgType =='MSG_TYPE_03'){

        		var msgCd = this.dsCmmMsgMt.getColumn(this.dsCmmMsgMt.rowposition,'MSG_NO')
        		for(var i = 0 ; i < this.dsCmmMsgMt.rowcount ; i ++ ) {
        			if(this.dsCmmMsgMt.getColumn(this.dsCmmMsgMt.rowposition,'ROWFLAG') == 'I'){
        				if(Number(msgCd) < 20000 || Number(msgCd) > 9999999){
        					var param = {id : "msgType03Alert"  , msg : "11031"  , arrparam : [Ex.core.word("메시지번호"), 20001,9999999]  , msgtype : "I"};
        					Ex.core.alert(this, param);
        					return false;
        				}
        			}
        		}
        	}

        	if( !Ex.util.isUpdated(this.dsCmmMsgDt) && !Ex.util.isUpdated(this.dsCmmMsgMt) )
        		return false;

        	// Grid Validation
        	if( !this.grdMsgMt.checkValidate() )
        		return false;
        	if( !this.grdMsgDt.checkValidate() )
        		return false;

        	return true;
        }


        this.fnAddMt = function()
        {
        	var rowPos = this.dsCmmMsgMt.setInsertRow(this.dsCmmMsgMt.rowposition+1);
        	this.dsCmmMsgDt.clearData();
        }


        this.fnSetDatasetDt = function()
        {
        	var MSG_NO = this.dsCmmMsgMt.getColumn(this.dsCmmMsgMt.rowposition, 'MSG_NO');

        	this.dsCmmMsgDt.set_enableevent(false);
        	this.dsCmmMsgDt.set_filterstr("ROWFLAG=='U'");
        	for(var i = 0; i < this.dsCmmMsgDt.rowcount; i++)
        	{
        		this.dsCmmMsgDt.setColumn(i, 'MSG_NO', MSG_NO);
        	}
        	this.dsCmmMsgDt.set_filterstr("");
        	this.dsCmmMsgDt.set_enableevent(true);
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

        		case 'btnAddMt' :
        			this.fnAddMt();
        			break;

        		case 'btnDeleteMt' :
        			this.fnDelete(this.dsCmmMsgMt);
        			break;

        		case 'btnDeleteDt' :
        			this.fnDelete(this.dsCmmMsgDt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() ) {
        				var param = {	id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }

        this.dsCmmMsgMt_cancolumnchange = function(obj,e)
        {
        	/*
        	if( e.columnid=='MSG_NO' && parseInt(e.newvalue) <= 20000 ) {
        		var param = {
        				id : "msgNoInvalidAlert"
        			  , msg : "11003"
        			  , arrparam : [Ex.core.word("메시지번호"), 20000]
        			  , msgtype : "I"};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	*/
        	return true;
        };


        // 공통 oncloumnchanged event : dataset
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	//obj.setUpdateRow(e);
        	var bool = Ex.util.isUpdatedRowByCol(obj, e.row);
        	var dRowFlag = obj.getColumn(e.row, "DATA_ROWFLAG");

        	if(bool)
        	{
        		if(dRowFlag == "I")
        		{
        			obj.setColumn(e.row, "ROWFLAG", "I");
        		}
        		else
        		{
        			obj.setUpdateRow(e);
        		}
        	}
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





        this.dsCmmMsgMt_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsCmmMsgDt) )
        	{
        		if( !this.rowChangeFlag ) {
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {	id : "rowposChangeConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}

        	return true;
        };

        this.dsCmmMsgMt_onrowposchanged = function(obj,e)
        {
        	this.dsCmmMsgDt.clearData();

        	var msgNo 	= obj.getColumn(e.newrow, 'MSG_NO')||Ex.core.word('새 메시지');

        	// Grid title 처리
        	this.stcGrdTitle.set_text('[' + msgNo + '] ' + Ex.core.word('메시지') + ' ' + Ex.core.word('내용') );

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEL_MSG_NO', msgNo);
        	this.fnSearch02();

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboMsgTypeCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtSysLangMsgConts.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtCurLangMsgConts.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdDtTopBtn.form.btnDeleteDt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnDeleteMt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnAddMt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsCmmMsgDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsCmmMsgMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsCmmMsgMt.addEventHandler("canrowposchange",this.dsCmmMsgMt_canrowposchange,this);
            this.dsCmmMsgMt.addEventHandler("onrowposchanged",this.dsCmmMsgMt_onrowposchanged,this);
            this.dsCmmMsgMt.addEventHandler("cancolumnchange",this.dsCmmMsgMt_cancolumnchange,this);
        };
        this.loadIncludeScript("FOMM0160_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
