(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0252_W");
            this.set_titletext("시스템링크페이지관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CLSSF\" type=\"STRING\" size=\"50\"/><Column id=\"PAGE_DESC\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CLSSF\" type=\"STRING\" size=\"50\"/><Column id=\"PAGE_DESC\" type=\"STRING\" size=\"60\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"300\"/><Column id=\"ORD_SEQ\" type=\"INT\" size=\"5\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"32\"/><Column id=\"CHG_DT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("분류명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtClssNM","stcTitle:0","13","160","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","edtClssNM:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDatTypeCd","Static00_00:0.00","13","85","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("페이지설명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtPageCont","stcDatTypeCd:0","13","160","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdSysLinkPageManagement","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj.set_formatid("default");
            obj.set_readonly("true");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"222\"/><Column size=\"50\"/><Column size=\"442\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"분류명\"/><Cell col=\"4\" text=\"페이지설명\"/><Cell col=\"5\" text=\"링크\"/><Cell col=\"6\" text=\"페이지URL\"/><Cell col=\"7\" text=\"정렬순번\"/><Cell col=\"8\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" displaytype=\"normal\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsDatTypeCd\" text=\"bind:CLSSF\" edittype=\"text\" validation=\"분류명;NULL\"/><Cell col=\"4\" cssclass=\"grdBCell_WF_info\" text=\"bind:PAGE_DESC\" edittype=\"text\" validation=\"페이지설명;NULL\" textAlign=\"left\" expandimage=\"url(&apos;theme://img_bak/ico_TF_Itsm.png&apos;)\"/><Cell col=\"5\" text=\"theme://img_bak/ico_TF_Itsm.png\" displaytype=\"imagecontrol\" cursor=\"pointer\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:PAGE_URL\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"number\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:ORD_SEQ\" edittype=\"text\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" text=\"bind:USE_YN\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcGridTitle","0","70","196","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("시스템링크페이지관리");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("true");
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

            obj = new Div("divGrdMtTopBtn",null,"70","250","24","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"btnDelete:5","0",null,null,null,null,this.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_isButtonGroup("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt01","stcGridTitle:0","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
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
            obj = new BindItem("item2","divSearchArea.form.edtClssNM","value","dsCond","CLSSF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.edtPageCont","value","dsCond","PAGE_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0270_W.xfdl", function() {
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
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsData) )
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
            var sService = "FOMM0270W/select01";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       			// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0270W/save01";
            var sInDs = "dsCond=dsCond dsData=dsData:U";
            var sOutDs = "dsData=dsData";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 삭제
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
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        // 		case "noticePop" :
        // 			if( (varValue||'').toUpperCase() == 'SAVE' )
        // 				this.fnSearch();
        // 			break;
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
        	this.grdSysLinkPageManagement.displayRowType();

        	if(Ex.util.getSession('gvAdminYn') == "Y")
        	{
        		var arrBtn = [this.divGrdMtTopBtn.form.btnAdd];		// 쓰기
        		Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdMtTopBtn.form.btnDelete];	// 삭제
        		Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];		// 저장
        		Ex.util.setBtnVisible(this, 'save', arrBtn);

        		// 버튼 영역 div align 처리
        		Ex.util.setBtnAlign(this.divGrdMtTopBtn, 'right', true);
        		Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        		this.grdSysLinkPageManagement.set_readonly(false);

        		this.divGrdMtTopBtn.set_visible(true);
        		this.divGrdBotBtn.set_visible(true);
        	}
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsData) )	return false;

        	// Grid Validation
        	if( !this.grdSysLinkPageManagement.checkValidate()) return false; // return t or f
        // 	for(var i = this.dsData.rowcount-1; i >= 0; i--)
        // 		if( this.dsData.getColumn(i, "CLSSF") == NULL )
        // 			var oParam = {id : "alertSelectLvl1", msg : "분류명이 입력되어야 합니다.", arrparam : [], msgtype : "I"};
        // 			this.dsData.getColumn(i, "CLSSF").setFocus();
        // 			Ex.core.alert(this, oParam);
        // 			return false
        //
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

        		case 'btnDelete' :
        			this.fnDelete(this.dsData);
        			break;

        		case "btnAdd" : 			// 등록
        			//this.dsData.setAddRow();
         			var aRow = this.dsData.setAddRow();
         			this.dsSg.setColumn(aRow, "CLSSF", "결재");
        			this.dsSg.setColumn(aRow, "PAGE_DESC", "페이지설명(입력필요)");


        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( this.fnCheckValidate() )
        			{
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

        this.grdSysLinkPageManagement_oncellclick = function(obj,e)
        {
        	if(obj.getCellProperty("body", e.cell, "displaytype") == "imagecontrol" && obj.getCellProperty("body", e.cell, "text") == "theme://img_bak/ico_TF_Itsm.png")
        	{
        		if( !Ex.isEmpty(this.dsData.getColumn(obj.getDatasetRow(e.row), "PAGE_URL")) )
        		{
        			system.execBrowser(this.dsData.getColumn(obj.getDatasetRow(e.row),"PAGE_URL"));
        		}
        	}
        };

        this.onexpandup = function(obj,e)
        {

        };

        this.fnCommOnkeyup = function(obj,e)
        {
        	if(e.keycode == '13') this.fnSearch();
        };

        this.fnCommOncolumnchanged = function(obj,e)
        {
        	var var_CLSSF = this.dsData.getColumn(this.dsData.rowposition, "CLSSF");
        	var var_PAGE_DESC = this.dsData.getColumn(this.dsData.rowposition, "PAGE_DESC");
        // 	if( Ex.isEmpty(var_CLSSF) || Ex.isEmpty(var_PAGE_DESC) ){
        // 		var oParam = {id : "alertSelectLvl1", msg : "분류명과 페이지설명이 입력되어야 합니다.", arrparam : [], msgtype : "I"};
        //  		Ex.core.alert(this, oParam);
        // 		this.dsData.rowposition.setFocus();
        // 	}
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtClssNM.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearchArea.form.edtPageCont.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.grdSysLinkPageManagement.addEventHandler("oncellclick",this.grdSysLinkPageManagement_oncellclick,this);
            this.divGrdMtTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdMtTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0270_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
