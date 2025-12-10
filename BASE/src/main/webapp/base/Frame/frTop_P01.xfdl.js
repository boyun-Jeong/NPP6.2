(function() {
	return function() {
		if (!this._is_form)
			return;

		var obj = null;

		this.on_create = function() {
			this.set_name("frTop_P01");
			this.set_titletext("Site Map");
			this.set_scrolltype("none");
			this.set_cssclass("");
			this.getSetter("classname").set("top");
			if (Form == this.constructor) {
				this._setFormPosition(1760, 800);
			}

			// Object(Dataset, ExcelExportObject) Initialize
			obj = new Dataset("dsCond", this);
			obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
			this.addChild(obj.name, obj);


			obj = new Dataset("dsData", this);
			obj._setContents("");
			this.addChild(obj.name, obj);


			obj = new Dataset("dsMenuLv1", this);
			obj._setContents("");
			this.addChild(obj.name, obj);


			obj = new Dataset("dsMenuLv2", this);
			obj._setContents("");
			this.addChild(obj.name, obj);


			obj = new Dataset("dsMenuLv3", this);
			obj._setContents("");
			this.addChild(obj.name, obj);

			// UI Components Initialize
			obj = new Div("divBottom", "0", null, null, "60", "0", "0", null, null, null, null, this);
			obj.set_taborder("0");
			obj.set_text("");
			obj.set_cssclass("div_POP_msg_btnbg");
			this.addChild(obj.name, obj);

			obj = new Button("btnClose", null, null, "100", "32", "20", "14", null, null, null, null, this.divBottom.form);
			obj.set_taborder("1");
			obj.set_text("닫기");
			obj.set_cssclass("btn_WF_primary_close");
			this.divBottom.addChild(obj.name, obj);

			obj = new Div("divContent", "0", "0", null, null, "0", "60", null, null, null, null, this);
			obj.set_taborder("1");
			obj.set_text("Div00");
			this.addChild(obj.name, obj);

			obj = new Static("Static00_01", "5", "0", null, "20", "-5", null, null, null, null, null, this.divContent.form);
			obj.set_taborder("0");
			obj.set_background("#e5dbfa");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divContent.addChild(obj.name, obj);

			obj = new Static("Static00_01_00", "0", "0", "20", null, null, "0", null, null, null, null, this.divContent.form);
			obj.set_taborder("1");
			obj.set_background("#e5dbfa");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divContent.addChild(obj.name, obj);

			obj = new Static("Static00_01_00_00", null, "0", "20", null, "0", "0", null, null, null, null, this.divContent.form);
			obj.set_taborder("2");
			obj.set_background("#e5dbfa");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divContent.addChild(obj.name, obj);

			obj = new Static("Static00_02", "0", null, null, "20", "0", "0", null, null, null, null, this.divContent.form);
			obj.set_taborder("3");
			obj.set_background("#e5dbfa");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divContent.addChild(obj.name, obj);

			obj = new Div("divSearchArea", "20.00", "20", null, "50", "20", null, null, null, null, null, this.divContent.form);
			obj.set_taborder("4");
			obj.set_cssclass("div_WF_divSearchArea");
			obj.set_text("");
			this.divContent.addChild(obj.name, obj);

			obj = new Static("staSearchStr", "20", "13", "89", "24", null, null, null, null, null, null, this.divContent.form.divSearchArea.form);
			obj.set_taborder("3");
			obj.set_text("메뉴명");
			obj.set_cssclass("sta_WF_schTitle");
			this.divContent.form.divSearchArea.addChild(obj.name, obj);

			obj = new Static("Static00", "0", "13", "20", "24", null, null, null, null, null, null, this.divContent.form.divSearchArea.form);
			obj.set_taborder("4");
			obj.set_background("#e5dbfa");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divContent.form.divSearchArea.addChild(obj.name, obj);

			obj = new Edit("edtSearchStr", "80.00", "13", "200", "24", null, null, null, null, null, null, this.divContent.form.divSearchArea.form);
			obj.set_taborder("0");
			obj.set_cssclass("edt_WF_normal");
			this.divContent.form.divSearchArea.addChild(obj.name, obj);

			obj = new Button("btnSearch", null, "13", "75", "24", "20", null, null, null, null, null, this.divContent.form.divSearchArea.form);
			obj.set_taborder("2");
			obj.set_text("조회");
			obj.set_cssclass("btn_WF_search");
			this.divContent.form.divSearchArea.addChild(obj.name, obj);

			obj = new Button("btnSearchReset", null, "13", "90", "24", "100", null, null, null, null, null, this.divContent.form.divSearchArea.form);
			obj.set_taborder("1");
			obj.set_text("초기화");
			obj.set_cssclass("btn_WF_searchReset");
			this.divContent.form.divSearchArea.addChild(obj.name, obj);

			obj = new Static("Static00_01", null, "13", "20", "24", "0", null, null, null, null, null, this.divContent.form.divSearchArea.form);
			obj.set_taborder("5");
			obj.set_background("#e5dbfa");
			obj.set_text("20");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("normal 12pt/normal \"Arial\"");
			obj.set_visible("false");
			this.divContent.form.divSearchArea.addChild(obj.name, obj);

			obj = new Div("divSiteMap", "20", "114", null, null, "20", "20", null, null, null, null, this.divContent.form);
			obj.set_taborder("5");
			this.divContent.addChild(obj.name, obj);

			obj = new Button("btnSiteMap", "20.00", "divSearchArea:11", "110", "31", null, null, null, null, null, null, this.divContent.form);
			obj.set_taborder("6");
			obj.set_text("사이트맵");
			obj.set_cssclass("btn_HOME_boardOn");
			obj.getSetter("GBN").set("SITEMAP");
			this.divContent.addChild(obj.name, obj);

			obj = new Button("btnFavorite", "btnSiteMap:5.00", "divSearchArea:11", "110", "31", null, null, null, null, null, null, this.divContent.form);
			obj.set_taborder("7");
			obj.set_text("즐겨찾기");
			obj.set_cssclass("btn_HOME_boardOff");
			obj.getSetter("GBN").set("FAVORITE");
			this.divContent.addChild(obj.name, obj);

			obj = new Static("stcTopLine", "20.00", "112", null, "2", "20", null, null, null, null, null, this.divContent.form);
			obj.set_taborder("8");
			obj.set_background("#8a96a8");
			this.divContent.addChild(obj.name, obj);
			// Layout Functions
			//-- Default Layout : this.divBottom.form
			obj = new Layout("default", "", 0, 0, this.divBottom.form, function(p) { });
			this.divBottom.form.addLayout(obj.name, obj);

			//-- Default Layout : this.divContent.form.divSearchArea.form
			obj = new Layout("default", "", 0, 0, this.divContent.form.divSearchArea.form, function(p) { });
			this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

			//-- Default Layout : this.divContent.form.divSiteMap
			obj = new Layout("default", "", 0, 0, this.divContent.form.divSiteMap.form, function(p) { });
			this.divContent.form.divSiteMap.form.addLayout(obj.name, obj);

			//-- Default Layout : this.divContent.form
			obj = new Layout("default", "", 0, 0, this.divContent.form, function(p) { });
			this.divContent.form.addLayout(obj.name, obj);

			//-- Default Layout : this
			obj = new Layout("default", "", 1760, 800, this, function(p) { });
			obj.set_mobileorientation("landscape");
			this.addLayout(obj.name, obj);

			// BindItem Information
			obj = new BindItem("item0", "divContent.form.divSearchArea.form.edtTitle", "value", "dsCond", "TITLE");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item1", "divContent.form.divSearchArea.form.stcReqId", "value", "dsCond", "SEARCH_TEXT");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item2", "divContent.form.divSearchArea.form.stcReqDt", "value", "dsCond", "SEARCH_TEXT");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item3", "divContent.form.divSearchArea.form.calFrReqDt", "value", "dsCond", "FR_REQ_DT");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item4", "divContent.form.divSearchArea.form.cboReqStatCd", "value", "dsCond", "REQ_STAT_CD");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item5", "divContent.form.divSearchArea.form.edtReqId", "value", "dsCond", "REQ_ID");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item6", "divContent.form.divSearchArea.form.calToReqDt", "value", "dsCond", "TO_REQ_DT");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item7", "divContent.form.divSearchArea.form.chkMyReq", "value", "dsCond", "MY_REQ_YN");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item8", "divContent.form.divSearchArea.form.edtSearchStr", "value", "dsCond", "MENU_NM");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item9", "divContent.form.divSearchArea.form.edtCoNm", "value", "dsCond", "CO_NM");
			this.addChild(obj.name, obj);
			obj.bind();

			obj = new BindItem("item10", "divContent.form.divSearchArea.form.edtDeptNm", "value", "dsCond", "DEPT_NM");
			this.addChild(obj.name, obj);
			obj.bind();

			// TriggerItem Information

		};

		this.loadPreloadList = function() {

		};

		// User Script
		this.registerScript("frTop_P01.xfdl", function() {
			/***********************************************************************************
			* 화면(ID)		︰ frTab_P01
			* 화면(명)		︰ Sitemap
			* 메뉴(경로)	︰
			* 화면 설명	︰ Sitemap
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
			this.GBN = 'SITEMAP';



			/***********************************************************************************
			 * Form Function
			 ***********************************************************************************/
			this.form_onload = function(obj, e) {
				// 업무화면 laod 전 공통 처리를 위한 함수.
				// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
				this.gfnFormOnLoad(this, this.fnInit);
			}

			this.fnInit = function() {
				this.fnSearchReset();
				this.fnCompInit();		// 컴포넌트 초기화
				this.fnSearch();
			}

			/***********************************************************************************
			 * Common Function
			 ***********************************************************************************/
			// 검색조건 초기화
			this.fnSearchReset = function() {
				this.dsCond.clearData();
				var rowpos = this.dsCond.addRow();
				this.dsCond.setColumn(rowpos, 'GBN', this.GBN);
			}

			// 조회
			this.fnSearch = function() {
				// sitemap div 초기화
				for (var i = this.divContent.form.divSiteMap.form.components.length - 1; i >= 0; i--)
					this.divContent.form.divSiteMap.form.components[i].destroy();

				// transaction
				var sTranId = "selectSiteMap";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
				var sService = "FOMM0000P/selectSiteMap";	// 서비스명
				var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
				var sOutDs = "dsData=dsData";			// 서버에서 수신할 데이타셋
				var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
				Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
			}

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
					case "selectSiteMap":
						this.fnSetMenuDataset();	// lvl별로 dataset 조개기
						this.fnDrawSiteMap();	// siteMap 그리기
						break;
				}
			}

			// 팝업 디폴트 콜백함수
			this.fnPopupAfter = function(pID, varValue) {
				// TO DO
				// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
			}

			// alert/confirm/error 메시지창 디폴트 콜백함수
			this.fnMsgAfter = function(mID, varValue) {
				// TO DO
				// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
				// alert/error : 무조건 true 반환
				// confirm     : true/false 선택적 반환
				if (!varValue) return;

				switch (mID) {

				}
			}

			/***********************************************************************************
			 * User Function
			 ***********************************************************************************/
			// component init
			this.fnCompInit = function() {

			}


			// lvl별 dataset 쪼개기
			this.fnSetMenuDataset = function() {
				this.dsData.set_filterstr("MENU_LVL==1");
				this.dsMenuLv1.copyData(this.dsData, true);

				this.dsData.set_filterstr("MENU_LVL==2");
				this.dsMenuLv2.copyData(this.dsData, true);

				this.dsData.set_filterstr("MENU_LVL==3");
				this.dsMenuLv3.copyData(this.dsData, true);

				this.dsData.set_filterstr("");
			}


			// siteMap 그리기
			this.fnDrawSiteMap = function() {
				var nMargin = 20;
				var nMargin2 = 10;
				var nTop = 0;
				var nLeft = nMargin;

				var nTopLv2 = 0;
				var nLeftLv2 = 0;
				var nMaxBotLv2 = 0;
				var nMaxCol = 5;

				for (var i = 0; i < this.dsMenuLv1.rowcount; i++) {
					nMaxBotLv2 = 0;

					var MENU_ID = this.dsMenuLv1.getColumn(i, 'MENU_ID');
					var MENU_NM = this.dsMenuLv1.getColumn(i, 'MENU_NM');
					var READ_YN = this.dsMenuLv1.getColumn(i, 'READ_YN');

					// 해당 대매뉴 하위 중메뉴가 없을 경우 continue;
					//trace(MENU_ID + '  '  + MENU_NM + '  ' + this.dsMenuLv2.getCaseCount("UP_MENU_ID=='" + MENU_ID + "'"));

					if (this.dsMenuLv2.getCaseCountNF("UP_MENU_ID=='" + MENU_ID + "'") == 0)
						continue;

					var chkCnt = 0;
					this.dsMenuLv2.filter("UP_MENU_ID=='" + MENU_ID + "'");

					for (var j = 0; j < this.dsMenuLv2.rowcount; j++) {
						var MENU_IDL2 = this.dsMenuLv2.getColumn(j, 'MENU_ID');
						trace(chkCnt);
						if (this.dsMenuLv3.getCaseCountNF("UP_MENU_ID=='" + MENU_IDL2 + "'") != 0) {
							chkCnt++;
						}
					}
					this.dsMenuLv2.filter("");
					if (chkCnt == 0) continue;

					// 대메뉴 Div
					var divLv1 = new Div();
					divLv1.init("divLv1_" + (i + 1), 0, nTop, null, 300, nMargin2, null);
					this.divContent.form.divSiteMap.addChild('divLv1_' + (i + 1), divLv1);
					divLv1.show();
					divLv1.set_borderRadius('10px 10px');

					// 대메뉴 Static
					var stcLv1 = new Static();
					stcLv1.init("stcLv1_" + (i + 1), nMargin, 10, null, 32, 0, null);
					stcLv1.set_text(this.dsMenuLv1.getColumn(i, "MENU_NM"));
					stcLv1.set_background("transparent url('theme://MIRAE_IMAGE_SET/HOME/spp-tit-b-circle.png') no-repeat left center");
					stcLv1.set_padding('0px 0px 0px 24px');
					stcLv1.set_font('bold 14px "KoPubL"');
					stcLv1.set_color('#1078c9');

					// 접근권한 처리
					// 		if(READ_YN == "Y") {
					// 			stObj.set_cssclass("sta_WF_SiteMapTitle02");
					// 		}
					// 		else {
					// 			stcLv1.set_enable(false);
					// 			stObj.set_cssclass("sta_WF_SiteMapTitle03");
					// 		}
					divLv1.addChild("stcLv1_" + (i + 1), stcLv1);
					stcLv1.show();

					// 대메뉴 구분선 추가
					var tempId = 'stcLv2Line_' + i;
					if (!divLv1.form.components[tempId]) {
						//var nLineWidth = nexacro.getTextSize(stcLv1.getDisplayText(), stcLv1._getCurrentStyleInheritValue("font")).nx;
						var stcLv2Line = new Static();
						stcLv2Line.init(tempId, stcLv1.getOffsetLeft(), stcLv1.getOffsetBottom() + 2, null, 2, 20, null);
						stcLv2Line.set_background('linear-gradient(to right, #043C73, #4371f7, #d9e3ff');
						divLv1.addChild(tempId, stcLv2Line);
						stcLv2Line.show();
					}


					// 하위메뉴 div
					var menuDiv = new Div();
					menuDiv.init("menuDiv" + (i + 1), nMargin, stcLv1.getOffsetBottom() + 10, null, 300, 0, null);
					divLv1.addChild("menuDiv" + (i + 1), menuDiv);
					menuDiv.show();

					var nBottom = this.fnDrawMiddleMenu(menuDiv, MENU_ID);
					if (nBottom > nMaxBotLv2)
						nMaxBotLv2 = nBottom;

					menuDiv.set_height(nMaxBotLv2 + 5);

					divLv1.set_height(menuDiv.getOffsetTop() + menuDiv.getOffsetHeight() + nMargin2);
					nTop += divLv1.getOffsetHeight();
				}

				this.divContent.form.divSiteMap.form.resetScroll();
				this.divContent.form.resetScroll();

			}


			// 중메뉴 draw
			this.fnDrawMiddleMenu = function(div, UP_MENU_ID) {
				var rtn = 300;
				var nMaxBottom = 0;

				var nTopDiv = 0;
				var nLeftDiv = 0;

				var nTop = 10;
				var nLeft = 0;
				var nWidth = 200;
				var nHeight = 32;

				var nDivMargin = 20;

				this.dsMenuLv2.set_filterstr("UP_MENU_ID=='" + UP_MENU_ID + "'");
				for (var i = 0; i < this.dsMenuLv2.rowcount; i++) {
					nTop = 0;
					var nMaxWidth = 80;
					var MENU_ID_LV2 = this.dsMenuLv2.getColumn(i, 'MENU_ID');
					var MENU_NM_LV2 = this.dsMenuLv2.getColumn(i, 'MENU_NM');
					var READ_YN_LV2 = this.dsMenuLv2.getColumn(i, 'READ_YN');

					// 해당 중매뉴 하위 소메뉴가 없을 경우 continue;
					if (this.dsMenuLv3.getCaseCountNF("UP_MENU_ID=='" + MENU_ID_LV2 + "'") == 0)
						continue;

					var divLv2 = new Div();
					divLv2.init('divLv2_' + (i + 1), nLeftDiv, nTopDiv, nMaxWidth, 300, null, null);
					div.addChild('divLv2_' + (i + 1), divLv2);
					divLv2.show();

					// 중메뉴 Static
					var stcLv2 = new Static();
					stcLv2.init("stcLv2_" + (i + 1), 0, nTop, null, nHeight, 0, null);
					stcLv2.set_text(MENU_NM_LV2);
					divLv2.addChild('stcLv2_' + (i + 1), stcLv2);
					stcLv2.set_color('#222222');
					stcLv2.set_font('bold 13px "KoPubL"');
					stcLv2.show();

					// 최대가로길이 갱신
					var stcSize = nexacro.getTextSize(stcLv2.text, stcLv2._getCurrentStyleInheritValue("font")).nx + 10;
					if (stcSize > nMaxWidth)
						nMaxWidth = stcSize;

					nTop += nHeight;


					// 소메뉴 Button
					var nLv3Height = 28;
					var sFilter = "UP_MENU_ID =='" + MENU_ID_LV2 + "'";
					if (this.GBN == 'FAVORITE')
						sFilter += " && FAVORITE_YN =='Y'";
					this.dsMenuLv3.set_filterstr(sFilter);
					for (var j = 0; j < this.dsMenuLv3.rowcount; j++) {
						var MENU_ID_LV3 = this.dsMenuLv3.getColumn(j, 'MENU_ID');
						var MENU_NM_LV3 = this.dsMenuLv3.getColumn(j, 'MENU_NM');

						var btnLv3 = new Button();
						btnLv3.init("btnLv3_" + (j + 1), 0, nTop, null, nLv3Height, 0, null);
						btnLv3.addEventHandler('onclick', this.btnMenuOnclick, this);
						btnLv3.addEventHandler('onmouseenter', this.btnMenuOnmouseenter, this);
						btnLv3.addEventHandler('onmouseleave', this.btnMenuOnmouseleave, this);
						btnLv3.MENU_ID = MENU_ID_LV3;
						btnLv3.set_text('  · ' + MENU_NM_LV3);
						btnLv3.set_textAlign('left');
						btnLv3.set_background('#f7f9fc');
						btnLv3.set_color('#888888');
						btnLv3.set_font('bold 12px "KopubL"');
						btnLv3.set_border('0px none');
						btnLv3.set_cursor('pointer');

						if (this.dsMenuLv3.rowcount == 1)
							btnLv3.set_border('1px solid #d6d6d6, 0px, 1px solid #d6d6d6px, 0px');
						else if (j == 0)
							btnLv3.set_border('1px solid #d6d6d6, 0px, 0px, 0px');
						else if (j == this.dsMenuLv3.rowcount - 1)
							btnLv3.set_border('0px, 0px, 1px solid #d6d6d6, 0px');
						divLv2.addChild("btnLv3_" + (j + 1), btnLv3);
						btnLv3.show();

						// 최대가로길이 갱신
						var stcSize = nexacro.getTextSize(btnLv3.text, btnLv3._getCurrentStyleInheritValue("font")).nx + 20;
						if (stcSize > nMaxWidth)
							nMaxWidth = stcSize;
						nTop += nLv3Height;
					}

					// 최하위 좌표 갱신
					if (nMaxBottom < nTop)
						nMaxBottom = nTop;

					nTopDiv = 0;
					nLeftDiv += nMaxWidth + nDivMargin;

					divLv2.set_width(nMaxWidth);
					divLv2.set_height(nTop + 5);
					divLv2.form.resetScroll();
				}

				div.set_height(nMaxBottom);
				div.form.resetScroll();

				rtn = nMaxBottom + 10;
				return rtn;
			}
			/***********************************************************************************
			 * Component Event
			 ***********************************************************************************/
			// 공통 onclick : component
			this.fnCommOnclick = function(obj, e) {
				switch (obj.name) {
					case "btnClose":			// 닫기
						Ex.core.pclose(this);
						break;

					case "btnSearchReset":
						this.fnSearchReset();
						break;

					case "btnSearch":
						this.fnSearch();
						break;
				}
			}


			this.fnCommOnkeydown = function(obj, e) {
				if (e.keycode == 13) {
					this.divContent.form.divSearchArea.form.btnSearch.setFocus();
					this.fnSearch();
					obj.setFocus();
				}
			};


			this.fnBtnTabOnclick = function(obj, e) {
				var arrBtn = [this.divContent.form.btnSiteMap, this.divContent.form.btnFavorite];
				for (var i = 0; i < arrBtn.length; i++)
					arrBtn[i].set_cssclass('btn_HOME_boardOff');

				obj.set_cssclass('btn_HOME_boardOn');

				if (this.GBN != obj.GBN) {
					this.GBN = obj.GBN;
					this.fnSearchReset();
					this.fnSearch();
				}
			};


			// 동적 메뉴 버튼 onclick
			this.btnMenuOnclick = function(obj, e) {
				var objApp = nexacro.getApplication();
				var rowpos = objApp.gdsMenu.findRow('MENU_ID', obj.MENU_ID);
				if (rowpos >= 0) {
					Ex.core.pclose(this, obj.MENU_ID);
				}
				else {
					var param = { id: "ERROR", msg: '연결된 메뉴정보가 올바르지 않습니다.' };
					Ex.core.error(this, param);
				}

				return;
			}



			this.btnMenuOnmouseenter = function(obj, e) {
				obj.set_color('#F58220');
			};

			this.btnMenuOnmouseleave = function(obj, e) {
				obj.set_color('#888888');
			};

		});

		// Regist UI Components Event
		this.on_initEvent = function() {
			this.addEventHandler("onload", this.form_onload, this);
			this.divBottom.form.btnClose.addEventHandler("onclick", this.fnCommOnclick, this);
			this.divContent.form.divSearchArea.form.edtSearchStr.addEventHandler("onkeydown", this.fnCommOnkeydown, this);
			this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick", this.fnCommOnclick, this);
			this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick", this.fnCommOnclick, this);
			this.divContent.form.btnSiteMap.addEventHandler("onclick", this.fnBtnTabOnclick, this);
			this.divContent.form.btnFavorite.addEventHandler("onclick", this.fnBtnTabOnclick, this);
		};
		this.loadIncludeScript("frTop_P01.xfdl");
		this.loadPreloadList();

		// Remove Reference
		obj = null;
	};
}
)();
