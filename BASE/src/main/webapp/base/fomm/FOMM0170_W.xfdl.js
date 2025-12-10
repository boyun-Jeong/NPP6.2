(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0170_W");
            this.set_titletext("단어관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEL_WORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmWordDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmWordMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLangCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnMapMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKey", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmWordDtChk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmWordMtChk", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("1");
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
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01","60.00%","105","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWordMt","0","104",null,null,"Static00_01:0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCmmWordMt");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"시스템언어 단어\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"현재언어 단어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:SYS_WORD\" displaytype=\"expr:ROWFLAG==&apos;I&apos;? &apos;editcontrol&apos; : &apos;text&apos;\" edittype=\"expr:ROWFLAG==&apos;I&apos;? &apos;normal&apos; : &apos;none&apos;\" validation=\"시스템 기준 단어;NULL|DUP\"/><Cell col=\"3\" text=\"bind:SEL_WORD\" validation=\"단어;NULL\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"단어번호\"/><Cell col=\"3\" text=\"시스템언어 단어\"/><Cell col=\"4\" text=\"현재언어 단어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:WORD_NO\"/><Cell col=\"3\" text=\"bind:SYS_WORD\"/><Cell col=\"4\" text=\"bind:SEL_WORD\" validation=\"단어;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("단어 목록");
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

            obj = new Grid("grdWordDt","Static00_01:0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsCmmWordDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useCheck("true");
            obj.set_treeuseimage("false");
            obj.set_useSort("false");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"언어코드\"/><Cell col=\"3\" text=\"단어\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:LANG_CD\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsLangCd\" validation=\"언어코드;NULL\" displaytype=\"combotext\"/><Cell col=\"3\" displaytype=\"expr:ROWFLAG==&apos;I&apos;?&apos;editcontrol&apos;:&apos;text&apos;\" text=\"bind:WORD\" edittype=\"text\" validation=\"단어;NULL\"/></Band></Format><Format id=\"default_bak\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"500\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"언어코드\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"단어\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"최초등록자\"/><Cell col=\"5\" text=\"최초등록일\"/><Cell col=\"6\" text=\"최종수정자\"/><Cell col=\"7\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:LANG_CD\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsLangCd\" displaytype=\"expr:ROWFLAG==&apos;I&apos;?&apos;combocontrol&apos;:&apos;combotext&apos;\" edittype=\"expr:ROWFLAG==&apos;I&apos;? &apos;combo&apos; : &apos;none&apos;\" validation=\"언어코드;NULL\"/><Cell col=\"3\" displaytype=\"expr:ROWFLAG==&apos;I&apos;?&apos;editcontrol&apos;:&apos;text&apos;\" text=\"bind:WORD\" edittype=\"text\" validation=\"단어;NULL\"/><Cell col=\"4\" text=\"bind:FRNM\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:LMNM\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:LMDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","grdWordMt:20.00","70","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("언어별 단어");
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

            obj = new Div("divGrdMtTopBtn","grdWordMt:-250","70","250","24",null,null,null,null,null,null,this);
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

            obj = new Button("btnAddDt",null,"70","60","24","64",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:0","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsCmmWordMt");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntWordDt","stcGrdTitle:11","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsCmmWordDt");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0170_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0170_W
        * 화면(명)		︰ 단어관리
        * 메뉴(경로)	︰ 관리자 > 코드관리 > 단어관리
        * 화면 설명	︰ SPP 기본 단어관리 화면
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
        	//this.stcTreeTitle.set_text("System Base Language = [" + Ex.util.getSession('gvSysLangCd') + ");
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
        	this.dsCond.setColumn(this.dsCond.rowposition, 'TOP_CODE_ID', '');
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsCmmWordMt) || Ex.util.isUpdated(this.dsCmmWordDt) )
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
        	this.dsCmmWordDt.clearData();
        	this.clearGridHeadCheck(this.grdWordDt, 0);

        	// transaction
        	var sTranId = "select01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0170W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCmmWordMt=dsCmmWordMt";       	// 서버에서 수신할 데이타셋
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
        	if(this.dsCmmWordMt.getColumn(this.dsCmmWordMt.rowposition, 'ROWFLAG') == 'I')
        		return;

        	var sTranId = "select02";
            var sService = "FOMM0170W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsCmmWordDt=dsCmmWordDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSaveCheck = function()
        {
        	var dsMtSaveXML = this.dsCmmWordMt.saveXML("dsCmmWordMt", "U");
        	var dsDtSaveXML = this.dsCmmWordDt.saveXML("dsCmmWordDt", "U");
        	//trace("dsMtSaveXML : " + dsMtSaveXML);
        	//trace("dsDtSaveXML : " + dsDtSaveXML);
        	this.dsCmmWordMtChk.loadXML(dsMtSaveXML);
        	this.dsCmmWordDtChk.loadXML(dsDtSaveXML);
        	//trace("this.fnSaveCheck() SEL_WORD_NO : " + this.dsCond.getColumn(0, "SEL_WORD_NO"));
        	var sTranId = "saveCheck01";
            var sService = "FOMM0170W/saveCheck01";
            var sInDs = "dsCmmWordMt=dsCmmWordMtChk:A dsCmmWordDt=dsCmmWordDtChk:A dsCond=dsCond";
            var sOutDs = "dsRtnMapMt=dsRtnMapMt";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	//trace("this.fnSave() SEL_WORD_NO : " + this.dsCond.getColumn(0, "SEL_WORD_NO"));
        	var sTranId = "save01";
            var sService = "FOMM0170W/save01";
            var sInDs = "dsCmmWordMt=dsCmmWordMt:U dsCmmWordDt=dsCmmWordDt:U dsCond=dsCond";
            var sOutDs = "dsCmmWordMt=dsCmmWordMt dsKey=dsKey";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	//if(objDs.id == "dsCmmWordMt") trace("bf objDs.id : " + objDs.id + " objDs.rowposition : " + objDs.rowposition);

        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	if(objDs.id == "dsCmmWordMt")
        	{
        		for(var i = objDs.rowcount-1; i >= 0; i--)
        		{
        			objDs.setDeleteRow(i);
        		}

        		if(objDs.rowcount > 0)
        		{
        			this.dsCmmWordDt.clearData();
        			this.clearGridHeadCheck(this.grdWordDt, 0);
        		}
        	}
        	else if(objDs.id == "dsCmmWordDt")
        	{
        		for(var i = objDs.rowcount-1; i >= 0; i--)
        		{
        			var fRow = this.dsCmmWordMt.findRow("WORD_NO", objDs.getColumn(i, "WORD_NO"));

        			if(this.dsCmmWordMt.getColumn(fRow, "ROWFLAG") != "D")
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
        			else
        			{
        				if(objDs.getColumn(i, "ROWFLAG") != "D")
        				{
        					objDs.setDeleteRow(i);
        				}
        			}
        		}
        	}

        	if(objDs.id == "dsCmmWordMt")
        	{
        		if(objDs.rowposition == -1)
        		{
        			this.dsCond.setColumn(0, "SEL_WORD_NO", "");
        		}
        		else
        		{
        			this.dsCond.setColumn(0, "SEL_WORD_NO", objDs.getColumn(objDs.rowposition, "WORD_NO"));
        		}
        		//trace("af objDs.id : " + objDs.id + " objDs.rowposition : " + objDs.rowposition);
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
        			Ex.core.toast(this, "10002");
        			this.clearGridHeadCheck(this.grdWordMt, 0);

        			var objSize = nexacro.getTextSize(this.stcTreeTitle.text, this.stcTreeTitle._getCurrentStyleInheritValue("font"));
        			this.stcTreeTitle.set_width(parseInt(objSize.nx) + 35);

        			// cnt 위치 조정
        			objSize = nexacro.getTextSize(this.stcCnt.text, this.stcCnt._getCurrentStyleInheritValue("font"));
        			this.stcCnt.set_width(parseInt(objSize.nx) + 35);
        			this.stcCnt.set_left("stcTreeTitle:0");
        			break;

        		case "select02" :
        			//Ex.core.toast(this, "10002");
        			this.clearGridHeadCheck(this.grdWordDt, 0);
        			if(this.dsCmmWordMt.getColumn(this.dsCmmWordMt.rowposition, "ROWFLAG") == "D") this.dsCmmWordDt.clearData();
        			break;

        		case "saveCheck01" :
        			//trace("saveCheck01 this.dsRtnMapMt.rowcount : " + this.dsRtnMapMt.rowcount);
        			if(this.dsRtnMapMt.rowcount > 0)
        			{
        				var chkRowStr = "";
        				var msg = "";

        				if(this.dsRtnMapMt.getColumn(0, "RTN_MAP") == "MT")
        				{
        					var title = Ex.core.word(this.stcTreeTitle.text);
        					msg = "[" + title + "]";

        					for(var i=0; i<this.dsRtnMapMt.rowcount; i++)
        					{
        						var filterStr = "ROWFLAG == 'I' && SYS_WORD=='" + this.dsRtnMapMt.getColumn(i, "WORD") + "'";
        						if( !Ex.isEmpty(chkRowStr) ) filterStr += chkRowStr;

        						var fRow = this.dsCmmWordMt.findRowExpr(filterStr);
        						if(fRow > -1)
        						{
        							chkRowStr += " && currow != " + fRow;
        						}

        						var rowStr = "행";
        						rowStr = Ex.core.word(rowStr);
        						var rowInfo = "[" + fRow + rowStr + "] ";

        						//trace("MT i=" + i + " filterStr:[" + filterStr + "] fRow:" + fRow);

        						var msgStr = Ex.core.msg(11028);								//"은(는) 중복된 단어입니다.";
        							msgStr = "\n" + rowInfo + Ex.core.msgMapping(msgStr, ["[" + this.dsCmmWordMt.getColumn(fRow, "SYS_WORD") + "]"]);
        						msg += msgStr;
        					}
        					//trace("MT msg : " + msg);

        					var param = {id : "pAlertDupMtI", msg : msg};
        					Ex.core.alert(this, param);
        				}
        				else if(this.dsRtnMapMt.getColumn(0, "RTN_MAP") == "DT")
        				{
        					var title = Ex.core.word(this.stcGrdTitle.text);
        					msg = "[" + title + "]";

        					for(var i=0; i<this.dsRtnMapMt.rowcount; i++)
        					{
        						var filterStr = "(ROWFLAG == 'I' || ROWFLAG == 'U') && WORD=='" + this.dsRtnMapMt.getColumn(i, "WORD") + "'";
        						var fRow = this.dsCmmWordDt.findRowExpr(filterStr);

        						var rowStr = "행";
        						rowStr = Ex.core.word(rowStr);
        						var rowInfo = "[" + fRow + rowStr + "] ";

        						//trace("DT i=" + i + " filterStr:[" + filterStr + "] fRow:" + fRow);

        						var msgStr = Ex.core.msg(11028);								//"은(는) 중복된 단어입니다.";
        							msgStr = "\n" + rowInfo + Ex.core.msgMapping(msgStr, ["[" + this.dsCmmWordDt.getColumn(fRow, "WORD") + "]"]);
        						msg += msgStr;
        					}
        					//trace("DT msg : " + msg);
        					var param = {id : "pAlertDupDtI", msg : msg};
        					Ex.core.alert(this, param);
        				}
        				this.dsRtnMapMt.clearData();
        			}
        			else
        			{
        				this.rowChangeFlag = true;		// 행변경 flag
        				this.fnSave();
        			}
        			break;

        		case "save01" :
        			this.dsCmmWordDt.clearData();
        			this.clearGridHeadCheck(this.grdWordDt, 0);
        			var fRow = this.dsCmmWordMt.findRow("WORD_NO", this.dsKey.getColumn(0, "WORD_NO"));
        			this.nLastRow = fRow;
        			trace("save01 this.dsCmmWordMt.rowcount : " + this.dsCmmWordMt.rowcount + " fRow : " + fRow);

        			if(fRow > -1) this.dsCmmWordMt.set_rowposition(fRow);
        			else this.dsCmmWordMt.set_rowposition(0);

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
        			//this.nLastRow = this.dsCmmWordMt.rowposition;	// 마지막 rowposition 저장
        			//this.fnSetDatasetDt();		// 저장용 datset 전처리
        			this.fnSaveCheck();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsCmmWordMt.set_rowposition(this.nSelRow);
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
        	this.grdWordMt.displayRowType();
        	this.grdWordDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdMtTopBtn.form.btnAddMt];		// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdMtTopBtn.form.btnDeleteMt,	this.divGrdDtTopBtn.form.btnDeleteDt];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
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
        		upCmmCd : ['LANG_CD']		// 조회할 상위코드
        		,codeDiv: ['CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['SEL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']				// 사용여부
        		,filter	: ['',]				// filterStr
        		,objDs	: [this.dsLangCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	var chk1 = Ex.util.isUpdated(this.dsCmmWordDt);
        	var chk2 = Ex.util.isUpdated(this.dsCmmWordMt);

        	//trace("this.fnCheckValidate() chk1 : " + chk1 + " chk2 : " +chk2);

        	if( !chk1 && !chk2 )
        		return false;

        	// Grid Validation
        	if( !this.grdWordMt.checkValidate() ) return false;
        	if( !this.grdWordDt.checkValidate() ) return false;

        	return true;
        }

        this.fnAddMt = function()
        {
        	this.dsCmmWordDt.clearData();
        	this.clearGridHeadCheck(this.grdWordDt, 0);
        	var rowPos = this.dsCmmWordMt.setInsertRow(this.dsCmmWordMt.rowposition+1);
        	this.grdWordMt.showEditor(true);		// 그리드 편집모드로 변경
        	this.grdWordMt.setCellPos(2, rowPos);	// 그리드 셀 포커스 이동
        }

        /*
        this.fnAddDt = function()
        {
        	var rowPos = this.dsCmmWordDt.setInsertRow(this.dsCmmWordMt.rowposition+1);
        	this.dsCmmWordDt.setColumn(rowPos, 'LANG_CD', 'KR');	// default 한국어
        }
        */

        /*
        this.fnSetDatasetDt = function()
        {
        	var WORD_NO = this.dsCmmWordMt.getColumn(this.dsCmmWordMt.rowposition, 'WORD_NO');

        	this.dsCmmWordDt.set_enableevent(false);
        	this.dsCmmWordDt.set_filterstr("ROWFLAG=='I'");
        	for(var i = 0; i < this.dsCmmWordDt.rowcount; i++)
        	{
        		this.dsCmmWordDt.setColumn(i, 'WORD_NO', WORD_NO);
        	}
        	this.dsCmmWordDt.set_filterstr("");
        	this.dsCmmWordDt.set_enableevent(true);
        }
        */

        this.clearGridHeadCheck = function(objGrd, colIdx)
        {
        	objGrd.setCellProperty("Head", colIdx, "text", 0);
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
        			this.fnDelete(this.dsCmmWordMt);
        			break;

        		case 'btnAddDt' :
        			//this.fnAddDt();
        			break;

        		case 'btnDeleteDt' :
        			this.fnDelete(this.dsCmmWordDt);
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() )
        			{
        				/*
        				for(var i=0; i<this.dsCmmWordMt.rowcount; i++)
        				{
        					trace("dsCmmWordMt i=" + i + " RowType :[" + this.dsCmmWordMt.getRowType(i) + "]");
        				}

        				for(var i=0; i<this.dsCmmWordDt.rowcount; i++)
        				{
        					trace("dsCmmWordDt i=" + i + " RowType :[" + this.dsCmmWordDt.getRowType(i) + "]");
        				}
        				*/

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
        	//obj.setUpdateRow(e);
        	var bool = Ex.util.isUpdatedRowByCol(obj, e.row);
        	var dRowFlag = obj.getColumn(e.row, "DATA_ROWFLAG");

        	//trace("e.row : " + e.row + " bool : " + bool + " dRowFlag : " + dRowFlag);
        	if(obj.id == "dsCmmWordMt")
        	{
        		obj.setUpdateRow(e);
        	}
        	else if(obj.id == "dsCmmWordDt")
        	{
        		if(bool)
        		{
        			if(dRowFlag == "I")
        			{
        				obj.setColumn(e.row, "ROWFLAG", "I");
        			}
        			else
        			{
        				var fRow = this.dsCmmWordMt.findRow("WORD_NO", obj.getColumn(e.row, "WORD_NO"));
        				if(fRow > -1)
        				{
        					if(this.dsCmmWordMt.getColumn(fRow, "ROWFLAG") == "D")
        					{
        						//obj.setDeleteRow(e.row);
        					}
        					else
        					{
        						obj.setUpdateRow(e);
        					}
        				}
        			}
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

        this.dsCmmWordMt_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsCmmWordDt) )
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

        this.dsCmmWordMt_onrowposchanged = function(obj,e)
        {
        	this.dsCmmWordDt.clearData();
        	this.clearGridHeadCheck(this.grdWordDt, 0);

        	var msgNo 	= obj.getColumn(e.newrow, 'WORD_NO') || '';

        	// Grid title 처리
        	//this.stcGrdTitle.set_text('[' + msgNo + '] ' + Ex.core.word("언어코드별 단어"));

        	var wordNo = obj.getColumn(e.newrow, "WORD_NO");
        	trace("obj.id : " + obj.id + " e.newrow : " + e.newrow + " wordNo : " + wordNo);

        	if( !Ex.isEmpty(wordNo) )
        	{
        		this.dsCond.setColumn(0, 'SEL_WORD_NO', msgNo);
        		this.nLastRow = e.newrow;

        		if(obj.getColumn(e.newrow, "ROWFLAG") != "D")	this.fnSearch02();
        	}

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
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdDtTopBtn.form.btnDeleteDt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnDeleteMt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnAddMt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnAddDt.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsCmmWordDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsCmmWordMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsCmmWordMt.addEventHandler("canrowposchange",this.dsCmmWordMt_canrowposchange,this);
            this.dsCmmWordMt.addEventHandler("onrowposchanged",this.dsCmmWordMt_onrowposchanged,this);
        };
        this.loadIncludeScript("FOMM0170_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
