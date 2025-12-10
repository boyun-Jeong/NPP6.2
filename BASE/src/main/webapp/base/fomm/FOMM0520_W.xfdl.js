(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0520_W");
            this.set_titletext("메신저발송이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DateSearchType\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_INDN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHEARIMTLKTRAN", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAN_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_INDN\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_URL\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NOTI_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TARGET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateSearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 전체 -</Col><Col id=\"CMM_CD\">A</Col></Row><Row><Col id=\"CMM_CD\">T</Col><Col id=\"CMM_CD_NM\">발송등록일시</Col></Row><Row><Col id=\"CMM_CD_NM\">발송완료시간</Col><Col id=\"CMM_CD\">S</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"79","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtContent","529","13","270","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","42","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","Static00_00_00_00:0.00","42","70","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("수신자명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"27","90","24","100",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"27","75","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","241","12","135","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","calEndDate:0","13","30","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLMNM00","Static00_00_00:0","13","125","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("메시지 제목/내용");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRcvr_indn","Static07:0.00","42","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","13","70","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("발송일");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","Static07_00:0","12","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","calBeginDate:0","12","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","376","42","30","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","Static00_00_00_00_00:0.00","42","125","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("발신자명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRcvr_indn00","Static07_01:0.00","42","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","divSearch:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","Static00_01:0","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메신저 발송이력");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Static00_01:24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","0","Static00_00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsHEARIMTLKTRAN");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoupdatetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"250\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"발송일시\"/><Cell col=\"2\" text=\"발신자사번\"/><Cell col=\"3\" text=\"발신자명\"/><Cell col=\"4\" text=\"수신자사번\"/><Cell col=\"5\" text=\"수신자명\"/><Cell col=\"6\" text=\"메시지 제목\"/><Cell col=\"7\" text=\"메시지 내용\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SEND_TIME\"/><Cell col=\"2\" text=\"bind:SEND_USER_ID\" combodataset=\"dsMNG_Deptcd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\"/><Cell col=\"3\" text=\"bind:SEND_USER_NM\"/><Cell col=\"4\" text=\"bind:RCVR_INDN\" combodataset=\"dsMNG_Deptcd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\"/><Cell col=\"5\" text=\"bind:RCVR_INDN_NM\"/><Cell col=\"6\" text=\"bind:TITLE\" combodataset=\"dsUse_YN\" combocodecol=\"CARD_STATUS_CD\" combodatacol=\"CARD_STATUS_CD_NM\" textAlign=\"left\"/><Cell col=\"7\" maskedittype=\"number\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:CONTENT\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_listCnt","Static21:0.00","Static00_01:0","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_countDataset("dsHEARIMTLKTRAN");
            obj.set_cssclass("sta_WF_grdCnt");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"Static00_01:0","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","0",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.edtRcvr_indn","value","dsCond","RCVR_INDN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.Static07_00","value","dsCond","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtContent","value","dsCond","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.Static00_00_00_00_00","value","dsCond","RCVR_INDN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtRcvr_indn00","value","dsCond","SEND_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calBeginDate","value","dsCond","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.calEndDate","value","dsCond","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0520_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0520_W
        * 화면(명)	︰ 메신저발송이력
        * 메뉴(경로)	︰ 관리자 > 통지관리 > 메신저발송이력
        * 화면 설명	︰ 메신저발송이력 추가 수정 삭제
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
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
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

        	var fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -7), "yyyyMMdd");
        	this.dsCond.setColumn(0, "START_DATE",		fromDt);
        	this.dsCond.setColumn(0, "END_DATE",		Ex.util.today());
        	this.dsCond.setColumn(0, "CONTENT",			undefined);
        	this.dsCond.setColumn(0, "RCVR_INDN_NM",	undefined);
        	this.dsCond.setColumn(0, "SEND_USER_NM",	undefined);
        }

        this.fnSearch = function()
        {
        	var sTranId = "select01";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0520W/select01";	// 서비스명
            var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsHEARIMTLKTRAN=dsHEARIMTLKTRAN";	// 서버에서 수신할 데이타셋
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
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "AAAAAA" :
        			trace("varValue:\n" + varValue);
        			if(varValue.indexOf("Dataset id=") > -1)	this.dsPopRtn.loadXML(varValue);
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
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO alertCard_No
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.fnSearch();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnSearchReset();

        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdMainList.displayRowType();

        	// 공통코드 조회
        	//this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리

        	var	arrBtn = [this.divGrdTopBtn.form.btnExcelDown];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divGrdTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
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
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :		// 검색
        			if(Ex.util.isUpdated(this.dsSR_CARD_USE_MT))
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

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			var oInfo = {
           				Grid	: [this.grdMainList],
           				Sheet	: [this.getOwnerFrame().info.menuNm],
           				FileNm	: [this.getOwnerFrame().info.menuNm],
           				ExportType : "XLSX",
           				ExportId : "excel01"
           			};
        			this.gfnExportExcel(this, oInfo);
        			break;
        	}
        }

        this.fnCommOnkeyup = function(obj,e)
        {
        	if(e.keycode == '13') this.fnSearch();
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtContent.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearch.form.edtContent.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearch.form.Static07.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearch.form.calEndDate.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearch.form.stcLMNM00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtRcvr_indn.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearch.form.Static07_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.calBeginDate.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divSearch.form.Static07_01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divSearch.form.edtRcvr_indn00.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.grdMainList.addEventHandler("onlbuttondown",this.grdOnCellClick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsHEARIMTLKTRAN.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0520_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
