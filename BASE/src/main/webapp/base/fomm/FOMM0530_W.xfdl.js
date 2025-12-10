(function() {
	return function() {
		if (!this._is_form)
			return;

		var obj = null;

		this.on_create = function() {
			this.set_name("FOMM0530_W");
			this.set_titletext("문자발송이력");
			if (Form == this.constructor) {
				this._setFormPosition(1840, 720);
			}

			// Object(Dataset, ExcelExportObject) Initialize
			obj = new Dataset("dsCond", this);
			obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DateSearchType\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TO_PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
			this.addChild(obj.name, obj);


			obj = new Dataset("dsFOMM_SMSTRAN_MT", this);
			obj._setContents("<ColumnInfo><Column id=\"TRAN_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TO_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
			this.addChild(obj.name, obj);


			obj = new Dataset("dsDateSearchType", this);
			obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">발송완료일시</Col><Col id=\"CMM_CD\">S</Col></Row><Row><Col id=\"CMM_CD_NM\">발송등록일시</Col><Col id=\"CMM_CD\">R</Col></Row></Rows>");
			this.addChild(obj.name, obj);

			// UI Components Initialize
			obj = new Static("Static21", "0", "100", "130", "24", null, null, null, null, null, null, this);
			obj.set_taborder("1");
			obj.set_text("문자발송이력");
			obj.set_cssclass("sta_WF_gridTitle");
			this.addChild(obj.name, obj);

			obj = new Grid("grdMainList", "0", "134", null, null, "0", "0", null, null, null, null, this);
			obj.set_taborder("3");
			obj.set_binddataset("dsFOMM_SMSTRAN_MT");
			obj.set_cellsizingtype("col");
			obj.set_autofittype("col");
			obj.set_cssclass("grd_WF_normal");
			obj.set_autoupdatetype("none");
			obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"193\"/><Column size=\"358\"/><Column size=\"57\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"전송번호\"/><Cell col=\"2\" text=\"수신자이름\"/><Cell col=\"3\" text=\"수신자&#13;&#10;전화번호\"/><Cell col=\"4\" text=\"발신자사번\"/><Cell col=\"5\" text=\"메시지제목\"/><Cell col=\"6\" text=\"메시지내용\"/><Cell col=\"7\" text=\"메시지&#13;&#10;타입\"/><Cell col=\"8\" text=\"발송등록일시\"/><Cell col=\"9\" text=\"발송완료일시\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TRAN_SQNO\"/><Cell col=\"2\" combodataset=\"dsMNG_Deptcd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\" text=\"bind:TO_NAME\"/><Cell col=\"3\" text=\"bind:TO_PHONE\" combodataset=\"dsUse_YN\" combocodecol=\"CARD_STATUS_CD\" combodatacol=\"CARD_STATUS_CD_NM\" textAlign=\"center\"/><Cell col=\"4\" maskedittype=\"number\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:FROM_ID\" textAlign=\"center\"/><Cell col=\"5\" maskedittype=\"string\" maskeditformat=\"##:##\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CONTENT\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MSG_TYPE\"/><Cell col=\"8\" text=\"bind:REG_DATE\"/><Cell col=\"9\" text=\"bind:SEND_TIME\"/></Band></Format></Formats>");
			this.addChild(obj.name, obj);

			obj = new Static("Static00_01", "0", "80", null, "20", "0", null, null, null, null, null, this);
			obj.set_taborder("0");
			obj.set_background("rgba(173,142,219,0.4)");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.addChild(obj.name, obj);

			obj = new Static("Static00_00_00", "0", "124", null, "10", "0", null, null, null, null, null, this);
			obj.set_taborder("2");
			obj.set_background("rgba(173,142,219,0.4)");
			obj.set_text("10");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.addChild(obj.name, obj);

			obj = new Div("divGrdBotBtn", null, null, "200", "32", "0", "0", null, null, null, null, this);
			obj.set_taborder("4");
			this.addChild(obj.name, obj);

			obj = new Static("sta_listCnt", "Static21:5", "70", "55", "21", null, null, null, null, null, null, this);
			obj.set_taborder("5");
			obj.set_countDataset("dsVendor");
			this.addChild(obj.name, obj);

			obj = new Div("divSearch", "0", "0", null, "80", "0", null, null, null, null, null, this);
			obj.set_taborder("6");
			obj.getSetter("scrollbars").set("none");
			obj.set_cssclass("div_WF_divSearchArea");
			obj.set_text("");
			this.addChild(obj.name, obj);

			obj = new Static("stcTitle", "1.09%", "39", "85", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("5");
			obj.set_text("메시지제목");
			obj.set_cssclass("sta_WF_schTitle");
			this.divSearch.addChild(obj.name, obj);

			obj = new Edit("edtSUBJECT", "stcTitle:0.00", "39", "283", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("6");
			obj.set_cssclass("edt_WF_normal");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("Static00_00_01", "edtSUBJECT:0.00", "0", "30", null, null, "0", null, null, null, null, this.divSearch.form);
			obj.set_taborder("19");
			obj.set_background("rgba(173,142,219,0.4)");
			obj.set_text("30");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("stcContent", "Static00_00_01:0.00", "39", "85", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("7");
			obj.set_text("메시지내용");
			obj.set_cssclass("sta_WF_schTitle");
			this.divSearch.addChild(obj.name, obj);

			obj = new Edit("edtContent", "stcContent:0", "39", "200", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("8");
			obj.set_cssclass("edt_WF_normal");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("Static00_00_01_00", "edtContent:0", "0", "30", null, null, "0", null, null, null, null, this.divSearch.form);
			obj.set_taborder("20");
			obj.set_background("rgba(173,142,219,0.4)");
			obj.set_text("30");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("stcTO_NAME", "Static00_00_01_00:0.00", "39", "90", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("0");
			obj.set_text("수신자이름");
			obj.set_cssclass("sta_WF_schTitle");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("Static00_00_00", "407.00", "13", "30", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("2");
			obj.set_background("rgba(173,142,219,0.4)");
			obj.set_text("30");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("Static00_00", "0", "0", "20", null, null, "0", null, null, null, null, this.divSearch.form);
			obj.set_taborder("1");
			obj.set_background("rgba(173,142,219,0.4)");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divSearch.addChild(obj.name, obj);

			obj = new Button("btnSearchReset", null, "13", "90", "24", "100", null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("3");
			obj.set_text("초기화");
			obj.set_cssclass("btn_WF_searchReset");
			this.divSearch.addChild(obj.name, obj);

			obj = new Button("btnSearch", null, "13", "75", "24", "20", null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("4");
			obj.set_text("조회");
			obj.set_cssclass("btn_WF_search");
			this.divSearch.addChild(obj.name, obj);

			obj = new Edit("edtTO_NAME", "stcTO_NAME:0", "39", "130", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("9");
			obj.set_cssclass("edt_WF_normal");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("stcTerm", "21.00", "13", "85", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("8");
			obj.set_text("기간");
			obj.set_cssclass("sta_WF_schTitle");
			this.divSearch.addChild(obj.name, obj);

			obj = new Calendar("calBeginDate", "stcTerm:0", "12", "130", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("9");
			obj.set_cssclass("cal_WF_normal");
			obj.set_readonly("false");
			obj.set_enable("true");
			obj.set_visible("true");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("Static01_00", "calBeginDate:0", "12", "18", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("10");
			obj.set_text("~");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_visible("true");
			this.divSearch.addChild(obj.name, obj);

			obj = new Calendar("calEndDate", "Static01_00:0", "12", "135", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("11");
			obj.set_cssclass("cal_WF_normal");
			obj.set_readonly("false");
			obj.set_enable("true");
			obj.set_visible("true");
			this.divSearch.addChild(obj.name, obj);

			obj = new Combo("cboDateSearchType", "calEndDate:2", "12", "130", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("12");
			obj.set_codecolumn("CMM_CD");
			obj.set_datacolumn("CMM_CD_NM");
			obj.set_cssclass("cbo_WF_normal");
			obj.set_visible("true");
			obj.set_enable("true");
			obj.set_innerdataset("dsDateSearchType");
			obj.set_value("당일");
			obj.set_index("-1");
			obj.set_text("- 선택 -");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("stcFROM_ID", "Static00_00_01_00:0.00", "13", "90", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("15");
			obj.set_text("발신자사번");
			obj.set_cssclass("sta_WF_schTitle");
			this.divSearch.addChild(obj.name, obj);

			obj = new Edit("edtFROM_ID", "stcFROM_ID:0", "12", "130", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("16");
			obj.set_cssclass("edt_WF_normal");
			this.divSearch.addChild(obj.name, obj);

			obj = new Static("stcTO_PHONE", "edtTO_NAME:30", "40", "113", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("18");
			obj.set_text("수신자전화번호");
			obj.set_cssclass("sta_WF_schTitle");
			this.divSearch.addChild(obj.name, obj);

			obj = new Edit("edtTO_PHONE", "stcTO_PHONE:0", "40", "130", "24", null, null, null, null, null, null, this.divSearch.form);
			obj.set_taborder("17");
			obj.set_cssclass("edt_WF_normal");
			this.divSearch.addChild(obj.name, obj);

			obj = new Div("divGrdTopBtn", null, "99", "425", "24", "0", null, null, null, null, null, this);
			obj.set_taborder("7");
			obj.set_visible("true");
			obj.set_isButtonGroup("true");
			obj.set_text("");
			this.addChild(obj.name, obj);

			obj = new Button("btnExcelDown", null, "0", "60", "24", "3", null, null, null, null, null, this.divGrdTopBtn.form);
			obj.set_taborder("1");
			obj.set_text("엑셀");
			obj.set_cssclass("btn_WF_excelDown");
			obj.set_visible("false");
			this.divGrdTopBtn.addChild(obj.name, obj);

			obj = new Static("stcFommNotiMngMtCnt", "Static21:0", "100", "60", "24", null, null, null, null, null, null, this);
			obj.set_taborder("8");
			obj.set_text("0 건");
			obj.set_cssclass("sta_WF_grdCnt");
			obj.set_countDataset("dsFOMM_SMSTRAN_MT");
			this.addChild(obj.name, obj);
			// Layout Functions
			//-- Default Layout : this.divGrdBotBtn.form
			obj = new Layout("default", "", 0, 0, this.divGrdBotBtn.form, function(p) { });
			this.divGrdBotBtn.form.addLayout(obj.name, obj);

			//-- Default Layout : this.divSearch.form
			obj = new Layout("default", "", 0, 0, this.divSearch.form, function(p) { });
			this.divSearch.form.addLayout(obj.name, obj);

			//-- Default Layout : this.divGrdTopBtn.form
			obj = new Layout("default", "", 0, 0, this.divGrdTopBtn.form, function(p) { });
			this.divGrdTopBtn.form.addLayout(obj.name, obj);

			//-- Default Layout : this
			obj = new Layout("default", "", 1840, 720, this, function(p) { });
			this.addLayout(obj.name, obj);

			// BindItem Information
			obj = new BindItem("item1", "divSearch.form.edtSUBJECT", "value", "dsCond", "SUBJECT");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item2", "divSearch.form.edtContent", "value", "dsCond", "CONTENT");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item3", "divSearch.form.edtTO_NAME", "value", "dsCond", "TO_NAME");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item4", "divSearch.form.cboDateSearchType", "value", "dsCond", "DateSearchType");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item7", "divSearch.form.calBeginDate", "value", "dsCond", "START_DATE");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item8", "divSearch.form.calEndDate", "value", "dsCond", "END_DATE");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item9", "divSearch.form.edtFROM_ID", "value", "dsCond", "FROM_ID");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item10", "divSearch.form.edtTO_PHONE", "value", "dsCond", "TO_PHONE");
			this.addChild(obj.name, obj);
			obj.bind();

			// TriggerItem Information

		};

		this.loadPreloadList = function() {

		};

		// User Script
		this.registerScript("FOMM0530_W.xfdl", function() {
			/***********************************************************************************
			* 화면(ID)	︰ FOMM0530_W
			* 화면(명)	︰ 문자발송이력
			* 메뉴(경로)	︰ 관리자 > 통지관리 > 문자발송이력
			* 화면 설명	︰ 문자발송이력 추가 수정 삭제
			* 작성자		︰ 김호일
			* 작성일		︰ 2025.02.26
			* 수정이력	︰
			*------------------------------------------------------------------
			* 수정일          작성자     		이력
			*------------------------------------------------------------------
			* 2025.02.26	김호일			최초작성
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
			this.form_onload = function(obj, e) {
				// 업무화면 laod 전 공통 처리를 위한 함수.
				// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
				this.gfnFormOnLoad(this, this.fnInit);
			}

			this.fnInit = function() {
				this.fnCompInit();		// 컴포넌트 초기화
				this.fnSearch();		// 조회
			}

			/***********************************************************************************
			 * Common Function
			 ***********************************************************************************/
			// 검색조건 초기화
			this.fnSearchReset = function() {
				this.dsCond.clearData();
				this.dsCond.addRow();

				var fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -1), "yyyyMMdd");
				this.dsCond.setColumn(0, "START_DATE", fromDt);
				this.dsCond.setColumn(0, "END_DATE", Ex.util.today());
				this.dsCond.setColumn(0, "DateSearchType", 'S');

				this.divSearch.form.edtSUBJECT.value = "";
				this.divSearch.form.edtContent.value = "";
				this.divSearch.form.edtFROM_ID.value = "";
				this.divSearch.form.edtTO_NAME.value = "";
				this.divSearch.form.edtTO_PHONE.value = "";
			}

			this.fnSearch = function() {
				var sTranId = "select01";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
				var sService = "FOMM0530W/select01";	// 서비스명
				var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
				var sOutDs = "dsFOMM_SMSTRAN_MT=dsFOMM_SMSTRAN_MT";	// 서버에서 수신할 데이타셋
				var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
				Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
			}


			// 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
			// this.fnDelete = function(objDs:Dataset)
			// {
			// 	objDs.set_enableevent(false);
			// 	objDs.set_filterstr("CHK=='1'");
			//
			// 	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.setDeleteRow(i);
			//
			// 	objDs.set_filterstr("");
			// 	objDs.set_enableevent(true);
			// }

			/***********************************************************************************
			 * CallBack Event
			 ***********************************************************************************/
			// Transaction 디폴트 콜백함수
			this.fnCallback = function(sSvcId, nErrorCode, sErrorMsg) {
				// 에러메세지 처리
				if (nErrorCode < 0) {
					var param = { id: "ERROR", msg: sSvcId + "::" + nErrorCode + "::" + sErrorMsg };
					Ex.core.error(this, param);
					return;
				}

				// 각 Transaction별 CallBack 처리
				switch (sSvcId) {
					case "select01":
						Ex.core.toast(this, "10002");
						this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
						//alert(this.grdMainList.setCellProperty("body",0,"readonly",true));
						//alert(this.grdMainList.setCellProperty("body",1,"readonly",true));
						//this.grdMainList.setFormatRowProperty(0,"readonly",true);
						break;

					// 		case "save01" :
					// 			Ex.core.toast(this, "10004", null, {toastType:'S'});
					// 			this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
					// 			break;

					// 		case "select02" :
					//
					// 			break;
				}
			}
			// 팝업 디폴트 콜백함수
			this.fnPopupAfter = function(pID, varValue) {
				if (Ex.isEmpty(varValue)) return;

				switch (pID) {
					case "AAAAAA":
						trace("varValue:\n" + varValue);
						if (varValue.indexOf("Dataset id=") > -1) this.dsPopRtn.loadXML(varValue);
						/*
						trace("제조업체정보 팝업 선택 리턴");
						trace("VENDOR_ID : " + rtn.pVENDOR_ID);
						trace("VENDOR_NM : " + rtn.pVENDOR_NM);
						trace("VD_M_TEL_NUM : " + rtn.pVD_M_TEL_NUM);
						trace("VD_DESC : " + rtn.pVD_DESC);
						trace("USE_YN : " + rtn.pUSE_YN);
						*/
						break;
				}
			}
			// alert/confirm/error 메시지창 디폴트 콜백함수
			this.fnMsgAfter = function(mID, varValue) {
				// TO DO alertCard_No
				// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
				// alert/error : 무조건 true 반환
				// confirm     : true/false 선택적 반환
				if (!varValue) return;

				switch (mID) {
					case "searchConfirm":
						this.fnSearch();
						break;
				}
			}

			/***********************************************************************************
			 * User Function
			 ***********************************************************************************/
			// component init
			this.fnCompInit = function() {
				this.fnSearchReset();

				// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
				this.grdMainList.displayRowType();

				// 공통코드 조회
				//this.fnGetCmmCd();

				// 버튼&권한 mapping && visible 처리

				var arrBtn = [this.divGrdTopBtn.form.btnExcelDown];	// 엑셀
				Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

				// 버튼 영역 div align 처리
				Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
				Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
			}

			// 공통코드 조회
			this.fnGetCmmCd = function() {
				// 	//cboIMP_LOC_CD 출입장소 코드, cboCARD_INOUT_CD 반납여부
				// 	var oParam = {
				// 		upCmmCd : ['IMP_LOC_CD' ,'CARD_INOUT_CD']		// 조회할 상위코드
				// 		,codeDiv: ['' ,'']							// 조회할 코드의 업무구분
				// 		,optStr	: ['ALL' 		,'ALL']				// ALL: '- 전체 -'; SEL: '- 선택 -'
				// 		,useYn	: ['Y' 			,'Y']				// 사용여부
				// 		,filter	: ['' 			,'']				// filterStr
				// 		,objDs	: [this.dsLmpLocCd,this.dsCardInoutCd]// copy dataset
				// 	}
				// 	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
			}

			/***********************************************************************************
			 * Component Event
			 ***********************************************************************************/
			// 공통 onclick : component
			this.fnCommOnclick = function(obj, e) {
				switch (obj.name) {
					case "btnSearch":		// 검색
						if (Ex.util.isUpdated(this.dsSR_CARD_USE_MT)) {
							var param = {
								id: "searchConfirm"
								, msg: "변경사항을 취소하고 계속 조회를 잔행 하시겠습니까?"
								, arrparam: ['']
								, msgtype: "I"
							};
							Ex.core.confirm(this, param);
						}
						else {
							this.fnSearch();
						}
						break;

					case "btnSearchReset":		// 검색조건 초기화
						this.fnSearchReset();
						break;

					case "btnExcelDown":	// 엑셀다운
						var oInfo = {
							Grid: [this.grdMainList],
							Sheet: [this.getOwnerFrame().info.menuNm],
							FileNm: [this.getOwnerFrame().info.menuNm],
							ExportType: "XLSX",
							ExportId: "excel01"
						};
						this.gfnExportExcel(this, oInfo);
						break;
				}
			}

			this.dsOnColumnChanged = function(obj, e) {
				obj.setUpdateRow(e);
			};

			this.cboOnItemChanged = function(obj, e) {

			};
		});

		// Regist UI Components Event
		this.on_initEvent = function() {
			this.addEventHandler("onload", this.form_onload, this);
			this.grdMainList.addEventHandler("onlbuttondown", this.grdOnCellClick, this);
			this.divSearch.form.stcTitle.addEventHandler("onclick", this.Div00_Static01_onclick, this);
			this.divSearch.form.edtSUBJECT.addEventHandler("onkeyup", this.fnCommOnkeyup, this);
			this.divSearch.form.stcContent.addEventHandler("onclick", this.Div00_Static01_onclick, this);
			this.divSearch.form.edtContent.addEventHandler("onkeyup", this.fnCommOnkeyup, this);
			this.divSearch.form.stcTO_NAME.addEventHandler("onclick", this.Div00_Static01_onclick, this);
			this.divSearch.form.btnSearchReset.addEventHandler("onclick", this.fnCommOnclick, this);
			this.divSearch.form.btnSearch.addEventHandler("onclick", this.fnCommOnclick, this);
			this.divSearch.form.edtTO_NAME.addEventHandler("onkeyup", this.fnCommOnkeyup, this);
			this.divSearch.form.stcTerm.addEventHandler("onclick", this.Div00_Static01_onclick, this);
			this.divSearch.form.calBeginDate.addEventHandler("onkeyup", this.fnCommOnkeyup, this);
			this.divSearch.form.calEndDate.addEventHandler("onkeyup", this.fnCommOnkeyup, this);
			this.divSearch.form.stcFROM_ID.addEventHandler("onclick", this.Div00_Static01_onclick, this);
			this.divSearch.form.edtFROM_ID.addEventHandler("onkeyup", this.fnCommOnkeyup, this);
			this.divSearch.form.stcTO_PHONE.addEventHandler("onclick", this.Div00_Static01_onclick, this);
			this.divSearch.form.edtTO_PHONE.addEventHandler("onkeyup", this.fnCommOnkeyup, this);
			this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick", this.fnCommOnclick, this);
			this.dsFOMM_SMSTRAN_MT.addEventHandler("oncolumnchanged", this.dsOnColumnChanged, this);
		};
		this.loadIncludeScript("FOMM0530_W.xfdl");
		this.loadPreloadList();

		// Remove Reference
		obj = null;
	};
}
)();
