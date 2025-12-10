(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0110_W");
            this.set_titletext("사용자관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommAuthUserDt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCdS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
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

            obj = new Static("staCoNm","20","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","77","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            obj.set_imemode("hangul");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staDeptNm","247","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","304","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.set_imemode("hangul");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","217","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","444","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserNm","474","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","519","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_WF_normal");
            obj.set_imemode("hangul");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","659","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("13");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staEmpId","689","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("14");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtEmpId","732","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUseYn","902","13","60","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","872","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("16");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","970","13","140","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCdS");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdUserInfo","0","104",null,null,"18.53%","40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommUserMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"사번(ID)\"/><Cell col=\"5\" text=\"이름\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"직책(역할)\"/><Cell col=\"8\" text=\"내선번호\"/><Cell col=\"9\" text=\"핸드폰번호\"/><Cell col=\"10\" text=\"이메일주소\"/><Cell col=\"11\" text=\"계정만료일\"/><Cell col=\"12\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:USER_ID\" edittype=\"none\" cssclass=\"grdBCell_WF_event\"/><Cell col=\"5\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:TELNUM2\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:MOBILE_NUM\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:EMAIL_ADR\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:EXPIRE_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" edittype=\"none\"/><Cell col=\"12\" edittype=\"combo\" displaytype=\"combotext\" text=\"bind:USE_YN\" combodataset=\"dsYnCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfo","0","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사용자 정보");
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

            obj = new Div("divGrdTopBtn",null,"70","425","24","18.48%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","60","24","130",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("false");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Grid("grdAuthUserDt","82.61%","104",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsFommAuthUserDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"240\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"권한그룹\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:AUTH_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","1500","104","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staAuthTitle","82.61%","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","109.00","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommUserMt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtUserNm","value","dsCond","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.edtEmpId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0110_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0110_W
        * 화면(명)		︰ 사용자 관리
        * 메뉴(경로)	︰ 관리자 > 사용자 > 사용자 관리
        * 화면 설명	︰ SPP 기본 사용자 관리 화면
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
        	this.divSearchArea.form.edtUserNm.setFocus();
        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsCond.setColumn(0, "USE_YN",	"Y");
        }

        // 변경 행 확인
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsFommUserMt) ||
        		Ex.util.isUpdated(this.dsFommAuthUserDt) )
        	{
        		var param = {
        						id : "pSearchConfirm"
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
        	this.dsFommAuthUserDt.clearData();
        	this.staAuthTitle.set_text('권한 그룹');

        	// transaction
        	var sTranId = "select01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0110W/select01";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommUserMt=dsFommUserMt";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 선택 사용자별 권한그룹 조회
        this.fnSearchAuth = function()
        {
        	var sTranId = "select02";
            var sService = "FOMM0110W/select02";
            var sInDs = "dsCond=dsCond";
            var sOutDs = "dsFommAuthUserDt=dsFommAuthUserDt";
            var sArg = "";

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "FOMM0110W/save01";
            var sInDs = "dsFommUserMt=dsFommUserMt:U dsFommAuthUserDt=dsFommAuthUserDt:U dsCond=dsCond";
            var sOutDs = "dsFommUserMt=dsFommUserMt";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	this.dsFommUserMt.set_enableevent(false);
        	this.dsFommUserMt.set_filterstr("CHK=='1'");
        	for(var i = 0; i<= this.dsFommUserMt.rowcount-1; i++)

        	//	if(this.dsFommUserMt.getColumn(i,"ROWFLAG") != "D"){
        			this.dsFommUserMt.setDeleteRow(i);
        	//	}
        	this.dsFommUserMt.set_filterstr("");
        	this.dsFommUserMt.set_enableevent(true);
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
        		if(sSvcId == "save01") Ex.core.error(this, {id : "ERROR", msg : "동일한 사번의 사용자가 있습니다."});
        		else Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			this.grdUserInfo.setCellProperty("Head", this.grdUserInfo.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			this.dsFommUserMt.set_rowposition(this.nLastRow);
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.grdUserInfo.setCellProperty("Head", this.grdUserInfo.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if( Ex.isEmpty(varValue) )
        		return;

        	switch(pID)
        	{
        		case "userInfoPop" :
        			if( varValue == 'save' ) {
        				this.fnSearch();
        			} else if( varValue == 'ad' ) {
        				var objApp = nexacro.getApplication();
        				var rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'FOMM0241_W');
        				if( rowpos >= 0 )
        					Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        			}
        			break;
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
        		case "pSearchConfirm" :
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.nLastRow = this.dsFommUserMt.rowposition;	// 마지막 rowposition 저장
        			this.rowChangeFlag = true;		// 행변경 flag

        			this.fnSetDatasetDt();	// 권한 추가 전 dataset data setting
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsFommUserMt.set_rowposition(this.nSelRow);
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
        	this.grdUserInfo.displayRowType();
        	this.grdAuthUserDt.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divGrdTopBtn.form.btnAdd];	// 쓰기
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);
        		arrBtn = [this.divGrdTopBtn.form.btnExcelDown];	// 엑셀
        	Ex.util.setBtnVisible(this, 'exclDown', arrBtn);
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
        		upCmmCd : ['YN_CD',			'YN_CD']		// 조회할 상위코드
        		,codeDiv: ['CMM_CD',		'CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL',			'']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y']			// 사용여부
        		,filter	: ['',				'']				// filterStr
        		,objDs	: [this.dsYnCdS,	this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsFommUserMt) &&
        		!Ex.util.isUpdated(this.dsFommAuthUserDt) )
        		return false;

        	// Grid Validation
        	if( !this.grdUserInfo.checkValidate() )
        		return false;

        	return true;
        }


        this.fnSetDatasetDt = function()
        {
        	this.dsFommAuthUserDt.set_enableevent(false);
        	this.dsFommAuthUserDt.set_filterstr("ROWFLAG=='U'");

        	var userId = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'USER_ID');
        	for(var i = 0; i < this.dsFommAuthUserDt.rowcount; i++) {
        		this.dsFommAuthUserDt.setColumn(i, 'USER_ID', userId);
        	}

        	this.dsFommAuthUserDt.set_filterstr('');
        	this.dsFommAuthUserDt.set_enableevent(true);

        	return;
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
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnAdd" : 	// 추가
        			Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"userInfoPop",					// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0000_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					  title 	: "나의 정보 관리"
        					, pPopType	: 'I'
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnDelete" :	// 삭제
        			this.fnDelete(this.dsFommUserMt);
        			break;

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

        		case "btnSave" : 	// 저장
        			// validation
        		for(var i= 0; i < this.dsFommAuthUserDt.rowcount ; i++ ){
        			if(this.dsFommAuthUserDt.getColumn(i,'CHK') == '1'){
        				trace("CHK >>" + this.dsFommAuthUserDt.getColumn(i,'CHK'));
        				trace("AUTH_YN >>" + this.dsFommAuthUserDt.getColumn(i,'AUTH_YN'));
        				this.dsFommAuthUserDt.setColumn(i,'AUTH_YN','1');
        			}else{
        				this.dsFommAuthUserDt.setColumn(i,'AUTH_YN','0');
        			}
        		}
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
        // Grid rowFlag 처리르 위해 호출 필요
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);

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

        this.dsFommUserMt_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsFommAuthUserDt) )
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

        	return true;
        };

        this.dsFommUserMt_onrowposchanged = function(obj,e)
        {
        	this.dsFommAuthUserDt.clearData();

        	var userId 	= obj.getColumn(e.newrow, 'USER_ID')||'NEW_USER';
        	var userNm 	= obj.getColumn(e.newrow, 'USER_NM')||Ex.core.word('새 유저');

        	// Grid title 처리
        	this.staAuthTitle.set_text('[' + userNm + ']' + Ex.core.word('의 권한 그룹') );

        	var objSize = nexacro.getTextSize(this.staAuthTitle.text, this.staAuthTitle._getCurrentStyleInheritValue("font"));
        	var nWidth = parseInt(objSize.nx) + 20;
        	this.staAuthTitle.set_width(nWidth);

        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEL_USER_ID', userId);
        	this.fnSearchAuth();

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };






        this.grdUserInfo_oncellclick = function(obj,e)
        {
        	if(obj.getCellPropertyValue(e.row, e.cell, "edittype") == "combo")	obj.dropdownCombo();

        	if( e.cell == obj.getBindCellIndex('body', 'USER_ID') ) {
        		Ex.core.popup(
        				this,						// <--- 팝업 실행 스코프
        				"userInfoPop",					// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"fomm::FOMM0000_P02.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					  title 	: "나의 정보 관리"
        					, pPopType	: 'U'
        					, pUserId	: this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'USER_ID')
        					, pAdminYn	: 'Y'
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"	// <--- width/height/modeless(프레임 처리 옵션)
        			);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.edtCoNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtDeptNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtUserNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtEmpId.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.cboUseYn.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdUserInfo.addEventHandler("oncellclick",this.grdUserInfo_oncellclick,this);
            this.grdUserInfo.addEventHandler("onlbuttondown",this.grdUserInfo_onlbuttondown,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdAuthUserDt.addEventHandler("oncellclick",this.grdAuthUserDt_oncellclick,this);
            this.grdAuthUserDt.addEventHandler("onheadclick",this.grdAuthUserDt_onheadclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommUserMt.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommUserMt.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
            this.dsFommAuthUserDt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0110_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
