(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0730_W");
            this.set_titletext("배치오류 예외처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWFBACHOUT", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcMenuGbn","20","13","70",null,null,"40",null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("신청서번호");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatNm","Static00:0","15","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("작업ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtREG_USER_NM","371.00","12","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcLMNM00","15.94%","12","63","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtKEY","100","12","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","94",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsWFBACHOUT");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"146\"/><Column size=\"99\"/><Column size=\"93\"/><Column size=\"480\"/><Column size=\"207\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"작업ID\"/><Cell col=\"4\" text=\"등록자ID\"/><Cell col=\"5\" text=\"등록자\" background=\"#fcf5ef\"/><Cell col=\"6\" text=\"비고\"/><Cell col=\"7\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:ROWFLAG\" displaytype=\"none\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:NAME\" editdisplay=\"none\" editlimitbymask=\"none\" combodisplay=\"none\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:REG_USER_ID\" editdisplay=\"none\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:REG_USER_NM\" color=\"#32333b\" edittype=\"none\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:BIGO\" color=\"#32333b\" editmaxlength=\"-1\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"7\" textAlign=\"left\" color=\"#32333b\" edittype=\"textarea\" displaytype=\"text\" text=\"bind:REG_STIME\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"78\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"통신사\"/><Cell col=\"2\" text=\"전화번호\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"개통일자\"/><Cell col=\"5\" text=\"만료일자\"/><Cell col=\"6\" text=\"요금제\"/><Cell col=\"7\" text=\"용도\"/><Cell col=\"8\" cssclass=\"CellEssential\" text=\"부서명\"/><Cell col=\"9\" cssclass=\"CellEssential\" text=\"회계코드\"/><Cell col=\"10\" cssclass=\"CellEssential\" text=\"사용자\"/><Cell col=\"11\" text=\"모델명\"/><Cell col=\"12\" text=\"일련번호\"/><Cell col=\"13\" text=\"IMEI\"/><Cell col=\"14\" cssclass=\"CellEssential\" text=\"비고\"/><Cell col=\"15\" cssclass=\"CellEssential\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EQP_TELECOM_CD \" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsEqpTelecomCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"2\" edittype=\"none\" style=\"cursor:hand;\" text=\"bind:EQP_TEL_NO\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\" color=\"blue\" cursor=\"pointer\" editinputtype=\"number\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:EQP_STAT_CD\" mask=\"######-#######\" editdisplay=\"none\" editlimitbymask=\"none\" combodisplay=\"edit\" displaytype=\"combotext\" combodataset=\"dsEqpStatCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"selectcolor: ;\" text=\"bind:EQP_OPEN_DT\" editdisplay=\"none\" editlimitbymask=\"none\" combodisplay=\"edit\" displaytype=\"expr:!Ex.isEmpty(LMDT) ? &apos;date&apos; : &apos;none&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:EQP_EXPIRE_DT\" mask=\"###-##-#####\" editdisplay=\"none\" editlimitbymask=\"none\" combodisplay=\"edit\" displaytype=\"expr:!Ex.isEmpty(LMDT) ? &apos;date&apos; : &apos;none&apos;\" maskeditmaskchar=\" \" maskeditformat=\"@@@-@@-@@@@@\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:EQP_FEE_NM\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:EQP_USAGE_CD\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:USE_DEPT_NM\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\" textAlign=\"left\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:COST_DEPT_ID\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:USE_USER_NM\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:EQP_MODL_NM\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\" textAlign=\"left\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EQP_SR_NO\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EQP_IMEI_NO\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\"/><Cell col=\"14\" edittype=\"none\" style=\"align:left;\" text=\"bind:EQP_DESC\" wordwrap=\"char\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\"/><Cell col=\"15\" edittype=\"none\" style=\"align:left;\" text=\"bind:LMDT\" wordwrap=\"char\" editdisplay=\"edit\" editlimitbymask=\"none\" combodisplay=\"edit\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:!Ex.isEmpty(LMDT) ? &apos;date&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"70","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","130",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"66","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","3",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("stcGridTitle","0","69","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("배치오류 예외목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","160.00","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWFBACHOUT");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divGrdBotBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",992,41,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.edtREG_USER_NM","value","dsCond","REG_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edtKEY","value","dsCond","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0730_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0730_W
        * 화면(명)	︰ 배치오류 예외처리
        * 메뉴(경로)	︰ 표준정보관리 > 표준체크리스트관리 > 배치오류 예외처리
        * 화면 설명	︰ 배치오류 예외처리 추가 수정 삭제
        * 작성자		︰ 김호일
        * 작성일		︰ 2025.03.05
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2025.03.04	김호일		최초작성
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
        	this.dsCond.clearData();
        	this.dsCond.addRow();

        	this.div_search.form.edtKEY.value = "";
        	this.div_search.form.edtREG_USER_NM.value = "";
        }

        this.fnSearch = function()
        {
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FOMM0730W/select01";			// 서비스명
        	var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsWFBACHOUT=dsWFBACHOUT";	// 서버에서 수신할 데이타셋
        	var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0730W/save01";
            var sInDs = "dsWFBACHOUT=dsWFBACHOUT:U dsCond=dsCond";
        	var sOutDs = "dsWFBACHOUT=dsWFBACHOUT";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.setDeleteRow(i);

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
        			//trace(this.dsRptMonCfMng.saveXML());
        			//trace(this.dsCond.getColumn(0,"S_YM"));
        			//trace("김호일");
        			Ex.core.toast(this, "10002");
        			this.grdList.setCellProperty("Head", this.grdList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.grdList.setCellProperty("Head", this.grdList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.fnSearch();
        			break;

        		case "saveConfirm" :
        			//this.fnSaveCheck(this.dsRptMonCfMng);
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
        	this.grdList.displayRowType();

        	// 공통코드 조회
        	//this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];		// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnExcelDown];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
        		arrBtn = [this.divGrdBotBtn.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 조회
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	/*
        	var oParam = {
        		upCmmCd : ['COMPANY_CATE_CD', 'CORP_CATE_CD']		// 조회할 상위코드
        		,codeDiv: ['POR_INFO_CD', 'POR_INFO_CD']			// 조회할 코드의 업무구분
        		,optStr	: ['ALL', 'ALL']							// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y', 'Y']								// 사용여부
        		,filter	: ['', '']									// filterStr
        		,objDs	: [this.dsCompanyCateCd, this.dsCorpCateCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        	*/
        }

        this.fnCheckValidate = function()
        {
        	// 컴포넌트가 필수입력 값일때 호출 information의 validation 과 validationGroup 값필요
        	//if( !Ex.util.checkValidate(this, "input01") ) return false;
        	//그리드에 필수 입력 값이 있을때 필요 그리드 컬럼의 validation 항목에 "컬럼의text;NULL" 로 표기
        	//if(!this.grdList.checkValidate(true)) return false;

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
        		case "btnSearch" :		// 검색
        			if(Ex.util.isUpdated(this.dsWFBACHOUT))
        			{
        				var param = {
        						id : "searchConfirm"
        					  , msg : "변경사항을 취소하고 계속 조회를 잔행 하시겠습니까?"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			else
        			{
        				this.fnSearch();
        			}
        			break;

        		case "btnAdd" : 	// 추가
        			var aRow = this.dsWFBACHOUT.setInsertRow();
        			this.dsWFBACHOUT.setColumn(aRow, "REG_USER_ID", Ex.util.getSession('gvUserId'));
        			this.dsWFBACHOUT.setColumn(aRow, "REG_USER_NM", Ex.util.getSession('gvUserNm'));
        			break;

        		case "btnDelete" :	// 삭제
        			this.fnDelete(this.dsWFBACHOUT);
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdList],
           				Sheet	: ['주요장애현황'],
           				FileNm	: ["주요장애현황"],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;

        		case "btnSave" : 	// 저장
        			// validation

        			if(Ex.util.isUpdated(this.dsWFBACHOUT))
        			{
        				if(this.fnCheckValidate())
        				{
        					var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"};
        					Ex.core.confirm(this, param);
        				}
        			}
        			break;
        		/*
        		case "btnCallPop" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"CompanyPop",		// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"ms::MS0700_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "제조업체정보팝업"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=880,height=600"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;
        		*/
        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        	if(e.columnid == "CHK" && this.dsRptMonCfMng.getColumn(e.row,"CHK") == 0 && this.dsRptMonCfMng.getColumn(e.row,"ROWFLAG") == "D"){
        		//trace("CHK 내용변경");
        		this.dsRptMonCfMng.setColumn(e.row,"ROWFLAG","");
        		trace(this.dsRptMonCfMng.getColumn(e.row,"CHK"));
        		//trace(this.dsRptMonCfMng.getColumn(e.row,"ROWFLAG"));
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.stcReqTmplatNm.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_search.form.edtREG_USER_NM.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.div_search.form.stcLMNM00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div_search.form.edtKEY.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWFBACHOUT.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0730_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
