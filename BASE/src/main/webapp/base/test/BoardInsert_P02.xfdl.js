(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BoardInsert_P02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardMt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTS\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_POP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","70",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDeptNm","663.00","13","60","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","718.00","13","120","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","838.00","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20","90","98","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("게시판 등록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","21.00","124",null,"34","21",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputBg");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcPeriod","21.00","124","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("게시 기간");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calBeginDate","125.00","129","130","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validation("공지시작일;NULL");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskBeginTime","260.00","129","70","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_maskchar("_");
            obj.set_trimtype("both");
            obj.set_type("string");
            obj.set_validation("공지시작시간;NULL|DATETIME:HHMI");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_03","330.00","129","24","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_font("normal 12pt/normal \"NanumSquareR\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divContent.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","354.00","129","130","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validation("공지종료일;NULL");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.addChild(obj.name, obj);

            obj = new MaskEdit("mskEndTime","489.00","129","70","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("msk_WF_normal");
            obj.set_format("##:##");
            obj.set_maskchar("_");
            obj.set_trimtype("both");
            obj.set_type("string");
            obj.set_validation("공지종료시간;NULL|DATETIME:HHMI");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcFrnm","569.00","124","122","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("종류");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","21.00","157",null,"34","21",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcDatTypeCd","21.00","157","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("구분");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboDatDivCd","126.00","162","130","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("18");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsDatTypeCd");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("공지구분;NULL");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","261.00","157","100","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("게시판 명");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtTitle","366.00","162",null,"24","26",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validation("게시판명;NULL");
            obj.set_validationGroup("fvValiCmp");
            obj.set_displaynulltext("게시판 명을 입력해주세요");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtTitle00","696.00","129",null,"24","26",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("21");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","21.00","190",null,"230","21",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcConts","21.00","190","100",null,null,"20",null,null,null,null,this.divContent.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("설명");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("editContent","125.00","196",null,"218","26",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("24");
            obj.set_cssclass("edt_WF_normal");
            obj.set_displaynulltext("게시판 설명을 작성해주세요");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",900,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBottom.form.divSearchArea.form.edtSearchStr","value","dsCond","SEARCH_STR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBottom.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBottom.form.divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.edtUserNm","value","dsBoardMt","FRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BoardInsert_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ BoardInsert_P02
        * 화면(명)		︰ 게시판 생성
        * 메뉴(경로)	︰ TEST > TEST-2 > 게시판 모음 POP_UP
        * 화면 설명	︰ TEST 게시판 생성
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.19
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.19	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/


        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pPopType = 'I';	// R: read / I: new / U: edit

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
        	this.divContent.form.edtTitle.setFocus();

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
        	var rowPos = this.dsBoardMt.setAddRow();
        	this.dsBoardMt.setColumn(rowPos, 'FRNM', Ex.util.getSession('gvUserNm'));

        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSave" :
        			// Save 처리
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        // 		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        // 		this.fnSearch();
        // 		obj.setFocus();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.staUserInfo.addEventHandler("onclick",this.divContent_staUserInfo_onclick,this);
            this.divContent.form.stcPeriod.addEventHandler("onclick",this.divContent_stcPeriod_onclick,this);
            this.dsBoardMt.addEventHandler("oncolumnchanged",this.dsBoardMt_oncolumnchanged,this);
        };
        this.loadIncludeScript("BoardInsert_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
