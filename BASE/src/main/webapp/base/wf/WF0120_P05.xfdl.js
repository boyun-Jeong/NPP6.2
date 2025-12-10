(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWF0120_P05");
            this.set_titletext("요청서 등록 화면/테이블 목록");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqScrnDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_SCRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SCRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SCRN_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SCRN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_SCRN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqScrnDefTblDt", this);
            obj.set_keystring("S:SCRN_PATH+TBL_NM+");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_SCRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SCRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SCRN_TBL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTblList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUser00","20.00","20","130","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("요청서 화면 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","65%","0","5",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdWfReqScrnDt","20","54",null,null,"Static00_01_00_01:0","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsWfReqScrnDt");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"화면명칭\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"화면경로\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"등록화면&#13;&#10;여부\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"사용&#13;&#10;여부\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"기본 테이블&#13;&#10;건수\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:SCRN_NM\" textAlign=\"left\" validation=\"화면명칭;NULL\"/><Cell col=\"3\" text=\"bind:SCRN_PATH\" displaytype=\"normal\" validation=\"테이블명;NULL\" editinputtype=\"normal,dot,digit,symbol,english,alpha\" editimemode=\"alpha\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsYnCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" text=\"bind:REG_SCRN_YN\"/><Cell col=\"5\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsYnCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"6\" text=\"bind:TBL_CNT\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdWfReqScrnDefTblDt","Static00_01_00_01:0.00","54",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsWfReqScrnDefTblDt");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"160\"/><Column size=\"60\" band=\"right\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"기본 테이블\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"사용&#13;&#10;여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:TBL_NM\" displaytype=\"normal\" validation=\"테이블명;NULL\" editinputtype=\"alpha,digit,english,symbol\" editimemode=\"alpha\" textAlign=\"left\" editinputmode=\"upper\" edittype=\"normal\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:USE_YN\" combodataset=\"dsYnCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" validation=\"사용여부;NULL\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcUser00_00","Static00_01_00_01:0.00","20","130","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("화면 기본 테이블");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCntM","stcUser00:5","20","50","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWfReqScrnDt");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCntD","stcUser00_00:5","20","50","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsWfReqScrnDefTblDt");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divGrdLeftBtn",null,"20","125","24","Static00_01_00_01:0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContent.form.divGrdLeftBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContent.form.divGrdLeftBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","btnDelete:5",null,null,null,null,null,this.divContent.form.divGrdLeftBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContent.form.divGrdLeftBtn.addChild(obj.name, obj);

            obj = new Div("divGrdRightBtn",null,"20","125","24","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContent.form.divGrdRightBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divContent.form.divGrdRightBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","btnDelete:5",null,null,null,null,null,this.divContent.form.divGrdRightBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divContent.form.divGrdRightBtn.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","44",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divBtmBtn","780",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtmBtn.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtmBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBtmBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBtmBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrdLeftBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrdLeftBtn.form,function(p){});
            this.divContent.form.divGrdLeftBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrdRightBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrdRightBtn.form,function(p){});
            this.divContent.form.divGrdRightBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtmBtn.form
            obj = new Layout("default","",0,0,this.divBtmBtn.form,function(p){});
            this.divBtmBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,490,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WF0120_P05.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ WF0120_P05
        * 화면(명)	︰ 요청서 화면 / 테이블 관리
        * 메뉴(경로)	︰ 워크플로우
        * 화면 설명	︰ 요청서에서 사용되는 화면의 화면 경로 화면에서 사용되는 테이블 목록을 관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.03.12
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.03.12	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.rowposition;
        this.saveFlg = "N";
        this.delDsObj;
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
        	var sTranId = "select01";																// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "WF0120P/select01";														// 서비스명
        	var sInDs = "dsCond=dsCond";    														// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsWfReqScrnDt=dsWfReqScrnDt dsWfReqScrnDefTblDt=dsWfReqScrnDefTblDt";		// 서버에서 수신할 데이타셋
        	var sArg = "";                  														// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
        	this.dsCond.setColumn(0, "PATH", this.dsWfReqScrnDt.getColumn(this.dsWfReqScrnDt.rowposition, "SCRN_PATH"));

        	var sTranId = "save01";																					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "WF0120P/save01";																		// 서비스명
        	var sInDs = "dsCond=dsCond dsWfReqScrnDt=dsWfReqScrnDt:U dsWfReqScrnDefTblDt=dsWfReqScrnDefTblDt:U";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsWfReqScrnDt=dsWfReqScrnDt dsWfReqScrnDefTblDt=dsWfReqScrnDefTblDt";						// 서버에서 수신할 데이타셋
        	var sArg = "";																							// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        //추가 버튼 처리 이벤트
        this.fnAdd = function(objDs)
        {
        	var rowPos = objDs.setInsertRow(objDs.rowposition+1);
        	objDs.setColumn(rowPos, 'USE_YN', 'Y');

        	if(objDs.id == "dsWfReqScrnDt")
        	{
        		var tempScrnNo = this.getMaxSeq(this.dsWfReqScrnDt, "TEMP_SCRN_NO", 3);

        		objDs.setColumn(rowPos, 'TEMP_SCRN_NO', tempScrnNo);
        		objDs.setColumn(rowPos, 'REG_SCRN_YN', 'Y');
        	}

        	if(objDs.id == "dsWfReqScrnDt")	objDs.setColumn(rowPos, 'REG_SCRN_YN', 'Y');

        	if(objDs.id == "dsWfReqScrnDefTblDt")
        	{
        		var chkCol;

        		if( !Ex.isEmpty(this.dsWfReqScrnDt.getColumn(this.dsWfReqScrnDt.rowposition, "SCRN_NO")) )	chkCol	= "SCRN_NO";
        		else																						chkCol	= "TEMP_SCRN_NO";

        		var pScrnNo = this.dsWfReqScrnDt.getColumn(this.dsWfReqScrnDt.rowposition, chkCol);
        		trace("this.dsWfReqScrnDt.rowposition : " + this.dsWfReqScrnDt.rowposition + " pScrnNo ::: " + pScrnNo);
        		objDs.setColumn(rowPos, chkCol, pScrnNo);
        	}

        	var grdObj;
        	if(objDs.id == "dsWfReqScrnDt")				grdObj = this.divContent.form.grdWfReqScrnDt;
        	else if(objDs.id == "dsWfReqScrnDefTblDt")	grdObj = this.divContent.form.grdWfReqScrnDefTblDt;

        	if(objDs.id == "dsWfReqScrnDt")
        	{
        		objDs.setColumn(objDs.rowposition, "TBL_CNT", this.dsWfReqScrnDefTblDt.rowcount||0);
        	}

        	objDs.set_rowposition(rowPos);
        	grdObj.showEditor(true);					// 그리드 편집모드로 변경
        	grdObj.setCellPos(2, objDs.rowposition);	// 그리드 셀 포커스 이동
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	var orgStr = objDs.filterstr;
        	objDs.set_enableevent(false);
        	objDs.set_filterstr(orgStr + (!Ex.isEmpty(orgStr) ? " && " : "") + "CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr(orgStr);
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
        		case "selectTableList" :
        			this.fnSearch();
        			break;

        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        			this.saveFlg = "Y";
        			Ex.core.toast(this, "10004");
        			var fRow = this.dsWfReqScrnDt.findRow("SCRN_PATH", this.dsCond.getColumn(0, "PATH"));
        			if(fRow > -1)
        			{
        				this.dsWfReqScrnDt.set_rowposition(fRow);
        			}
        			this.dsCond.setColumn(0, "PATH", "");
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) )	return;

        	switch(pID){}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "emptyScrnPathAlertI" :
        		case "inValidScrnPathAlertI" :
        		case "dupScrnPathAlertI" :
        			this.dsWfReqScrnDt.set_rowposition(this.rowposition);
        			this.divContent.form.grdWfReqScrnDt.showEditor(true);								// 그리드 편집모드로 변경
        			this.divContent.form.grdWfReqScrnDt.setCellPos(2, this.dsWfReqScrnDt.rowposition);	// 그리드 셀 포커스 이동
        			this.rowposition = undefined;
        			break;

        		case "emptyTblNmAlertI" :
        		case "dupTblNmAlertI" :
        			this.dsWfReqScrnDefTblDt.set_rowposition(this.rowposition);
        			this.divContent.form.grdWfReqScrnDefTblDt.showEditor(true);										// 그리드 편집모드로 변경
        			this.divContent.form.grdWfReqScrnDefTblDt.setCellPos(2, this.dsWfReqScrnDefTblDt.rowposition);	// 그리드 셀 포커스 이동
        			this.rowposition = undefined;
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "deleteConfirm" :
        			this.fnDelete(this.delDsObj);
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
        	this.divContent.form.grdWfReqScrnDt.displayRowType();
        	this.divContent.form.grdWfReqScrnDefTblDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divContent.form.divGrdLeftBtn.form.btnAdd];	// 추가
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        	arrBtn = [this.divContent.form.divGrdLeftBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        	arrBtn = [this.divContent.form.divGrdRightBtn.form.btnAdd];		// 추가
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        	arrBtn = [this.divContent.form.divGrdRightBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        	arrBtn = [this.divBtmBtn.form.btnSave];							// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divContent.form.divGrdLeftBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divContent.form.divGrdRightBtn, 'right', true);

        	Ex.util.setBtnAlign(this.divBtmBtn, 'right', true);

        	var sTranId = "selectTableList";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FommMenu/selectTableList";	// 서비스명
        	var sInDs = "dsCond=dsCond";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsTblList=dsTblList";			// 서버에서 수신할 데이타셋
        	var sArg = "";                   			// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['YN_CD2'		]	// 조회할 상위코드
        		,codeDiv: ['CMM_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['SEL'		]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y'			]	// 사용여부
        		,filter	: [''			]	// filterStr
        		,objDs	: [this.dsYnCd	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }

        this.getMaxSeq = function(objDs, col, totLen)
        {
        	var strSeq = nexacro.toNumber(objDs.getMax(col), 0);
        	strSeq = nexacro.toNumber(strSeq) + 1;
        	strSeq = strSeq.toString();
        	strSeq = strSeq.padLeft(totLen, "0");
        	return strSeq;
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsWfReqScrnDt) && !Ex.util.isUpdated(this.dsWfReqScrnDefTblDt) )	return false;

        	//Grid Validation
        	var rtn = this.divContent.form.grdWfReqScrnDt.checkValidate();
        	trace("rtn1 : " + rtn);
        	if( !rtn )			return false;
        	rtn = this.divContent.form.grdWfReqScrnDefTblDt.checkValidate();
        	trace("rtn2 : " + rtn);

        	if( !rtn )	return false;
        	return true;
        }

        this.fnCheckSrcnPathValid = function(scrnPath, rowIdx, isMsg)
        {
        	if(rowIdx > -1)
        	{
        		if( Ex.isEmpty(scrnPath) )
        		{
        			this.rowposition = rowIdx;
        			if(isMsg)
        			{
        				var param = {
        					  id	: "emptyScrnPathAlertI"				//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "[" + (rowIdx+1) + "행] 화면경로가 입력되지 않았습니다.\n화면경로 예시)\n업무폴더명::화면파일명.xfdl → sr::test.xfdl"		//메시지 내용
        					, arrparam : []								//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"								//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        			}
        			return false;
        		}
        		else if(scrnPath.indexOf("::") == -1 || scrnPath.indexOf(".xfdl") == -1)
        		{
        			this.rowposition = rowIdx;
        			if(isMsg)
        			{
        				var param = {
        					  id	: "inValidScrnPathAlertI"				//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "[" + (rowIdx+1) + "행] 화면경로가 올바르게 입력되지 않았습니다.\n화면경로 예시)\n업무폴더명::화면파일명.xfdl → sr::test.xfdl"	//메시지 내용
        					, arrparam : []								//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"								//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        			}
        			return false;
        		}
        	}
        	return true;
        }

        this.fnCheckTblNmValid = function(tblNm, rowIdx, isMsg)
        {
        	trace("this.fnCheckTblNmValid() tblNm:[" + tblNm + "]");
        	if(rowIdx > -1)
        	{
        		if( Ex.isEmpty(tblNm) )
        		{
        			this.rowposition = rowIdx;
        			if(isMsg)
        			{
        				var param = {
        					  id	: "emptyTblNmAlertI"									//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "[" + (rowIdx+1) + "행] 기본 테이블명이 입력되지 않았습니다."		//메시지 내용
        					, arrparam : []													//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"													//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        			}
        			return false;
        		}
        	}
        	return true;
        }

        this.fnChkDelete = function()
        {
        	for(var i=0; i<this.dsWfReqScrnDt.rowcount; i++)
        	{
        		if(this.dsWfReqScrnDt.getColumn(i, "CHK") == "1")
        		{
        			var chkCol;
        			if( !Ex.isEmpty(this.dsWfReqScrnDt.getColumn(i, "SCRN_NO")) )	chkCol	= "SCRN_NO";
        			else															chkCol	= "TEMP_SCRN_NO";

        			var scrnNo = this.dsWfReqScrnDt.getColumn(i, chkCol);

        			var cnt = this.dsWfReqScrnDefTblDt.getCaseCount(chkCol + "=='" + scrnNo + "'");

        			if(cnt > 0)
        			{
        				return false;
        			}
        		}
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
        		case "btnAdd" :
        			var dsObj;
        			if(obj.parent.parent.id == "divGrdLeftBtn")	dsObj = this.dsWfReqScrnDt;
        			else										dsObj = this.dsWfReqScrnDefTblDt;

        			if(obj.parent.parent.id == "divGrdLeftBtn")
        			{
        				var scrnPath = dsObj.getColumn(dsObj.rowposition, "SCRN_PATH");

        				if( !this.fnCheckSrcnPathValid(scrnPath, dsObj.rowposition, true) )	return;
        			}
        			else
        			{
        				var scrnPath = this.dsWfReqScrnDt.getColumn(this.dsWfReqScrnDt.rowposition, "SCRN_PATH");

        				if( !this.fnCheckSrcnPathValid(scrnPath, this.dsWfReqScrnDt.rowposition, true) )	return;

        				var tblNm = dsObj.getColumn(dsObj.rowposition, "TBL_NM");

        				if( !this.fnCheckTblNmValid(tblNm, dsObj.rowposition, true) )	return;

        			}
        			this.fnAdd(dsObj);
        			break;

        		case "btnDelete" :
        			this.delDsObj = "";
        			if(obj.parent.parent.id == "divGrdLeftBtn")	this.delDsObj = this.dsWfReqScrnDt;
        			else										this.delDsObj = this.dsWfReqScrnDefTblDt;

        			if(obj.parent.parent.id == "divGrdLeftBtn")
        			{
        				if( !this.fnChkDelete() )
        				{
        					var param = {
        						  id : "deleteConfirm"
        						, msg : "화몀 경로 삭제시 화면 경로에 등록된 기본 테이블 목록도 삭제 처리됩니다.\n저장을 진행 하시겠습니까?"
        						, arrparam : []
        						, msgtype : "I"
        					};
        					Ex.core.confirm(this, param);
        					return;
        				}
        			}
        			else
        			{
        				this.fnDelete(this.delDsObj);
        			}
        			break;

        		case "btnSave" :
        			if( this.fnCheckValidate() )
        			{
        				var param = {
        					  id : "saveConfirm"
        					, msg : "10003"
        					, arrparam : ['']
        					, msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this, this.saveFlg);
        			break;
        	}
        }


        this.grdOnCellClick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        this.dsOnCanRowposChange = function(obj,e)
        {
        	if(e.oldrow > -1)
        	{
        		var scrnPath = obj.getColumn(e.oldrow, "SCRN_PATH");
        		var rtnValid = this.fnCheckSrcnPathValid(scrnPath, e.oldrow, true);
        		if(!rtnValid) return rtnValid;

        		for(var i=0; i<this.dsWfReqScrnDefTblDt.rowcount; i++)
        		{
        			var tblNm = this.dsWfReqScrnDefTblDt.getColumn(i, "TBL_NM");
        			rtnValid = this.fnCheckTblNmValid(tblNm, i, true);
        			if(!rtnValid) return rtnValid;
        		}
        	}
        	return true;
        };

        this.dsOnRowposChanged = function(obj,e)
        {
        	if(e.newrow > -1)
        	{
        		var chkCol;
        		if( !Ex.isEmpty(obj.getColumn(e.newrow, "SCRN_NO")) )	chkCol	= "SCRN_NO";
        		else													chkCol	= "TEMP_SCRN_NO";

        		var scrnNo = this.dsWfReqScrnDt.getColumn(e.newrow, chkCol);

        		trace("this.dsOnRowposChanged() e.newrow : " + e.newrow);
        		this.dsWfReqScrnDefTblDt.filter(chkCol + "=='" + scrnNo + "'");
        		trace("this.dsOnRowposChanged() this.dsWfReqScrnDefTblDt.rowcount||0 " + this.dsWfReqScrnDefTblDt.rowcount||0);
        		obj.setColumn(e.newrow, "TBL_CNT", "" + (this.dsWfReqScrnDefTblDt.rowcount||0));
        	}
        };

        this.dsCancolumnchange = function(obj,e)
        {
        	if(obj.id == "dsWfReqScrnDt")
        	{
        		if(e.columnid == "SCRN_PATH")
        		{
        			var cnt = obj.getCaseCount(e.columnid + "=='" + e.newvalue + "'");
        			trace("SCRN_PATH cnt : " + cnt);
        			if(cnt > 0)
        			{
        				this.rowposition = e.row;
        				var param = {
        					  id	: "dupScrnPathAlertI"	//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "중복된 화면 경로명입니다."	//메시지 내용
        					, arrparam : []					//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}
        	}
        	else if(obj.id == "dsWfReqScrnDefTblDt")
        	{
        		if(e.columnid == "TBL_NM")
        		{
        			var cnt = obj.getCaseCount(e.columnid + "=='" + e.newvalue + "'");
        			trace("TBL_NM cnt : " + cnt);
        			if(cnt > 0)
        			{
        				this.rowposition = e.row;
        				var param = {
        					  id	: "dupTblNmAlertI"		//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "중복된 테이블명 입니다."	//메시지 내용
        					, arrparam : []					//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			cnt = this.dsTblList.getCaseCount(e.columnid + "=='" + e.newvalue + "'");
        			trace("TBL_NM cnt : " + cnt);
        			if(cnt == 0)
        			{
        				this.rowposition = e.row;
        				var param = {
        					  id	: "notExistTblNmAlertI"		//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: "존재하지 않는 테이블명 입니다."	//메시지 내용
        					, arrparam : []						//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}
        	}
        	return true;
        };

        // 공통 oncloumnchanged event : dataset
        this.dsOnColumnChanged = function(obj,e)
        {
        	if(obj.id == "dsWfReqScrnDefTblDt")
        	{
        		this.dsWfReqScrnDt.setColumn(this.dsWfReqScrnDt.rowposition, "TBL_CNT", obj.rowcount||0);
        	}
        	obj.setUpdateRow(e, ["TBL_CNT"]);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContent.form.grdWfReqScrnDt.addEventHandler("onlbuttondown",this.divReqTmplatMt_divNode_grdNode_onlbuttondown,this);
            this.divContent.form.grdWfReqScrnDt.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContent.form.grdWfReqScrnDefTblDt.addEventHandler("onlbuttondown",this.divReqTmplatMt_divNode_grdNode_onlbuttondown,this);
            this.divContent.form.grdWfReqScrnDefTblDt.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divContent.form.divGrdLeftBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdLeftBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdRightBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdRightBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtmBtn.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtmBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWfReqScrnDt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfReqScrnDt.addEventHandler("canrowposchange",this.dsOnCanRowposChange,this);
            this.dsWfReqScrnDt.addEventHandler("onrowposchanged",this.dsOnRowposChanged,this);
            this.dsWfReqScrnDt.addEventHandler("cancolumnchange",this.dsCancolumnchange,this);
            this.dsWfReqScrnDefTblDt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfReqScrnDefTblDt.addEventHandler("cancolumnchange",this.dsCancolumnchange,this);
        };
        this.loadIncludeScript("WF0120_P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
