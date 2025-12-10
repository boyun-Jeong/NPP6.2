(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWF0110_W");
            this.set_titletext("워크플로우 관리");
            this.set_cssclass("");
            this.set_scrolltype("none");
            this.getSetter("classname").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"WF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_WF_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WF_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkflowMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkflowDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkflowMtSave", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKey", this);
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
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staCoNm","20.00","13","85","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("WF단계 ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","staCoNm:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("search");
            obj.set_validation("워크플로우ID;MIN_LEN:4");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staDeptNm","edtCoNm:30.00","13","80","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("WF단계명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNm:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("search");
            obj.set_validation("워크플로우명;MIN_LEN:2");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUseYn","edtDeptNm:30","13","70","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDelYn","staUseYn:0","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            obj.set_cssclass("cbo_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01","75%","104","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWfMt","0","104",null,null,"Static00_01:0","40",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsWorkflowMt");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"240\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"WF단계 ID\"/><Cell col=\"3\" text=\"WF단계명\" cssclass=\"grdHCell_WF_essential\" validation=\"워크플로우명;NULL\"/><Cell col=\"4\" text=\"삭제여부\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"최초등록자\"/><Cell col=\"7\" text=\"최초등록일시\"/><Cell col=\"8\" text=\"최종수정자\"/><Cell col=\"9\" text=\"최종수정일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:WF_ID\"/><Cell col=\"3\" text=\"bind:WF_NM\" edittype=\"normal\" validation=\"워크플로우명;NULL\"/><Cell col=\"4\" text=\"bind:DEL_YN\"/><Cell col=\"5\" text=\"bind:RMK\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:FRNM\"/><Cell col=\"7\" text=\"bind:FRDT\" displaytype=\"expr:Ex.isEmpty(FRDT) ? &apos;none&apos; : &apos;normal&apos;\"/><Cell col=\"8\" text=\"bind:LMNM\"/><Cell col=\"9\" text=\"bind:LMDT\" displaytype=\"expr:Ex.isEmpty(LMDT) ? &apos;none&apos; : &apos;normal&apos;\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"단어번호\"/><Cell col=\"3\" text=\"시스템언어 단어\"/><Cell col=\"4\" text=\"현재언어 단어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:WORD_NO\"/><Cell col=\"3\" text=\"bind:SYS_WORD\"/><Cell col=\"4\" text=\"bind:SEL_WORD\" validation=\"단어;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("WF단계 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","250","24","Static00_01:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00","Static00_01:0","70","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("WF단계");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWfDt","Static00_01:0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsWorkflowDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"행상태\" autosizecol=\"none\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" border=\"1px solid #d3d3d3, 0px, 1px solid #d3d3d3, 1px solid #d3d3d3\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"2\" text=\"사용\"/><Cell col=\"3\" text=\"WF단계\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:WF_USE_YN\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"3\" text=\"bind:WF_PROC_NM\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"행상태\" autosizecol=\"none\"/><Cell col=\"2\" text=\"단어번호\"/><Cell col=\"3\" text=\"시스템언어 단어\"/><Cell col=\"4\" text=\"현재언어 단어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:WORD_NO\"/><Cell col=\"3\" text=\"bind:SYS_WORD\"/><Cell col=\"4\" text=\"bind:SEL_WORD\" validation=\"단어;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:0","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWorkflowMt");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntDt","stcTreeTitle00:5","71","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWorkflowDt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.cboDelYn","value","dsCond","DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.edtCoNm","value","dsCond","WF_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtDeptNm","value","dsCond","WF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WF0110_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ WF0110_W
        * 화면(명)		︰ 워크플로우관리
        * 메뉴(경로)	︰ 관리자 > 워크플로우 > 워크플로우관리
        * 화면 설명	︰ SPP 워크플로우 관리 화면
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
        this.nSelRow = -1;	// 이동하려는 행

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
        	this.dsCond.setColumn(this.dsCond.rowposition, "WF_ID", "");
        	this.dsCond.setColumn(this.dsCond.rowposition, "WF_NM", "");
        	this.dsCond.setColumn(this.dsCond.rowposition, "DEL_YN", "N");
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	var rtn = Ex.util.checkValidate(this.divSearchArea, "search");
        	//trace("rtn : " + rtn);
        	if(!rtn) return;

        	if( Ex.util.isUpdated(this.dsWorkflowMt) ||
        		Ex.util.isUpdated(this.dsWorkflowDt) )
        	{
        		var param = {
        						id : "searchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	this.fnSearch01();
        }

        // 워크플로우 Type 목록 조회
        this.fnSearch01 = function()
        {
        	this.dsWorkflowDt.clearData();

        	// transaction
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "WF0110W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWorkflowMt=dsWorkflowMt";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 워크플로우 Type 단계 목록 조회
        this.fnSearch02 = function()
        {
        	var sTranId = "select02";
            var sService = "WF0110W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsWorkflowDt=dsWorkflowDt";
            var sArg = "";
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var mDs = " dsWorkflowMt=";

        	if(this.dsWorkflowMt.getColumn(this.dsWorkflowMt.rowposition, "ROWFLAG") == "I")
        	{
        		mDs += "dsWorkflowMtSave";
        		this.dsWorkflowMt.set_enableevent(false);
        		this.dsWorkflowMt.set_updatecontrol(false);

        		var selYn = this.dsWorkflowMt.getColumn(this.dsWorkflowMt.rowposition, "SEL_YN");
        		this.dsWorkflowMt.setColumn(this.dsWorkflowMt.rowposition, "SEL_YN", "Y");
        		var dsMtSaveXML = this.dsWorkflowMt.saveXML("dsWorkflowMt", "U");
        		this.dsWorkflowMt.setColumn(this.dsWorkflowMt.rowposition, "SEL_YN", selYn);	//복원
        		this.dsWorkflowMtSave.loadXML(dsMtSaveXML);

        		this.dsWorkflowMt.set_updatecontrol(true);
        		this.dsWorkflowMt.set_enableevent(true);
        	}
        	else
        	{
        		mDs += "dsWorkflowMt";
        	}

        	//trace("fnSave():n" + this.dsWorkflowDt.saveXML());

        	var sTranId = "save01";
            var sService = "WF0110W/save01";
            var sInDs = mDs + " dsWorkflowDt=dsWorkflowDt:U dsCond=dsCond";
            var sOutDs = "dsWorkflowMt=dsWorkflowMt dsKey=dsKey";
            var sArg = "";
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        	//trace("fnSave() af this.dsWorkflowDt.rowcount : " + this.dsWorkflowDt.rowcount);
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	if(objDs.getCaseCount("CHK=='1'") > 0)
        	{
        		objDs.set_enableevent(false);
        		objDs.set_filterstr("CHK=='1'");

        		for(var i = objDs.rowcount-1; i >= 0; i--)
        			objDs.setDeleteRow(i);

        		objDs.set_filterstr("");
        		objDs.set_enableevent(true);
        	}
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
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			this.clearGridHeadCheck(this.grdWfMt, 0);
        			break;

        		case "select02" :
        			//Ex.core.toast(this, "10002");
        			if(this.dsWorkflowDt.getCaseCount("WF_USE_YN=='Y'") == this.dsWorkflowDt.rowcount)  this.grdWfDt.setCellProperty("head", 1, "text", "Y");
        			else this.grdWfDt.setCellProperty("head", 1, "text", "N");

        			if(this.dsWorkflowDt.getColumn(this.dsWorkflowMt.rowposition, "ROWFLAG") == "D") this.dsWorkflowDt.clearData();
        			break;

        		case "save01" :
        			this.dsWorkflowDt.clearData();
        			var fRow = this.dsWorkflowMt.findRow("WF_ID", this.dsKey.getColumn(0, "WF_ID"));
        			//trace("save01 this.dsCmmWordMt.rowcount : " + this.dsWorkflowMt.rowcount + " fRow : " + fRow);

        			if(fRow > -1)
        			{
        				this.dsWorkflowMt.set_rowposition(fRow);
        			}
        			else
        			{
        				if(this.dsWorkflowMt.rowcount > 0) this.dsWorkflowMt.set_rowposition(0);
        			}
        			this.dsCond.setColumn(0, "SEL_WF_ID", this.dsWorkflowMt.getColumn(this.dsWorkflowMt.rowposition, "WF_ID"));

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
        			//this.fnSetDatasetDt();	// 권한 추가 전 dataset data setting
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.dsWorkflowMt.set_rowposition(this.nSelRow);
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
        	this.grdWfMt.displayRowType();
        	this.grdWfDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		//arrBtn = [this.divGrdTopBtn.form.btnExcelDown];	// 엑셀
        	//Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];	// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD']		// 조회할 상위코드
        		,codeDiv: ['CMM_CD']	// 조회할 코드의 업무구분
        		,optStr	: ['ALL']		// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']			// 사용여부
        		,filter	: ['']			// filterStr
        		,objDs	: [this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsWorkflowMt) && !Ex.util.isUpdated(this.dsWorkflowDt) ) return false;

        	// Grid Validation
        	if( !this.grdWfMt.checkValidate() ) return false;
        	return true;
        }

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
        		case "btnSearch" :			// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnAdd" : 	// 추가
        			var rowPos = this.dsWorkflowMt.setInsertRow(this.dsWorkflowMt.rowposition+1);
        			this.dsWorkflowMt.set_rowposition(-1);
        			this.dsWorkflowMt.set_rowposition(rowPos);
        			this.dsWorkflowMt.setColumn(rowPos, 'DEL_YN', 'N');
        			this.grdWfMt.showEditor(true);		// 그리드 편집모드로 변경
        			this.grdWfMt.setCellPos(3, rowPos);	// 그리드 셀 포커스 이동
        			break;

        		case "btnDelete" :	// 삭제
        			this.fnDelete(this.dsWorkflowMt);
        			break;

        		/*
        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdUserInfo],
           				Sheet	: ['사용자'],
           				FileNm	: ["SPP_사용자"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;
        		*/
        		case "btnSave" : 	// 저장
        			// validation
        			if( this.fnCheckValidate() ) {
        				var param = {
        						id : "saveConfirm"
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

        	if(obj.id == "dsWorkflowDt")
        	{
        		if(obj.getColumn(e.row, "IS_DATA") == "N")
        		{
        			obj.setColumn(e.row, "ROWFLAG", "I");
        		}
        		else if(obj.getColumn(e.row, "IS_DATA") == "Y")
        		{
        			if(obj.getColumn(e.row, "WF_USE_YN") == obj.getOrgColumn(e.row, "WF_USE_YN"))
        			{
        				obj.setColumn(e.row, "ROWFLAG", "");
        			}
        			else
        			{
        				obj.setColumn(e.row, "ROWFLAG", "D");
        			}
        		}

        		if(obj.getCaseCount("WF_USE_YN=='Y'") == obj.rowcount)  this.grdWfDt.setCellProperty("head", 1, "text", "Y");
        		else this.grdWfDt.setCellProperty("head", 1, "text", "N");
        	}
        };

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.divSearchArea.form.btnSearch.click();
        		obj.setFocus();
        	}
        };

        this.dsCanRowposChange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsWorkflowDt) )
        	{
        		if( !this.rowChangeFlag ) {
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {
        						id : "rowposChangeConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}
        };

        this.dsOnrowposChanged = function(obj,e)
        {
        	if(obj.id == "dsWorkflowMt")
        	{
        		this.dsWorkflowDt.clearData();

        		var selWfId = obj.getColumn(e.newrow, 'WF_ID');
        		this.dsCond.setColumn(0, 'SEL_WF_ID', selWfId);
        		this.dsCond.setColumn(0, 'SEL_ROW', e.newrow);

        		trace("e.newrow : " + e.newrow);

        		if(e.newrow > -1)
        		{
        			this.fnSearch02();
        		}
        		this.nSelRow = -1;				// 이동하려는 행 초기화
        	}
        };

        this.grdOnHeadClick = function(obj,e)
        {
        	//trace("this.grdOnHeadClick() e.cell : " + e.cell);
        	if(e.cell == 1)
        	{
        		var objDs = obj.getBindDataset();
        		if( Ex.isEmpty(objDs) )	return;

        		var chkVal = 0;

        		if (obj.getCellProperty("head", e.cell, "text") == 'Y')		chkVal = 'N';
        		else	chkVal = 'Y';
        		obj.setCellProperty("head", e.cell, "text", chkVal);

        		for(var i = 0; i < objDs.rowcount; i++)
        		{
        			var displaytype = obj.getCellPropertyValue(i, obj.getBindCellIndex('body', 'WF_USE_YN'), 'displaytype').toUpperCase();

        			//trace("cell : " + obj.getBindCellIndex('body', 'WF_USE_YN') + " this.grdOnHeadClick() displaytype : " + displaytype);

        			if(displaytype == 'CHECKBOXCONTROL' )
        			{
        				// bind dataset 값 setting
        				var colNm = obj.getCellProperty("body", e.cell, "text").split(':')[1];
        				//trace("colNm : " + colNm + " chkVal : " + chkVal);
        				if( !Ex.isEmpty(colNm) )
        				{
        					objDs.setColumn(i, colNm, chkVal);
        				}
        			}
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
            this.divSearchArea.form.edtCoNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtDeptNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboDelYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdWfDt.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.dsWorkflowMt.addEventHandler("onrowposchanged",this.dsOnrowposChanged,this);
            this.dsWorkflowMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsWorkflowMt.addEventHandler("canrowposchange",this.dsCanRowposChange,this);
            this.dsWorkflowDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsKey.addEventHandler("onrowposchanged",this.dsOnrowposChanged,this);
            this.dsKey.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsKey.addEventHandler("canrowposchange",this.dsCanRowposChange,this);
        };
        this.loadIncludeScript("WF0110_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
