(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0000_P01");
            this.set_titletext("사용자선택 팝업(공통)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_STR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUSER_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","divBottom:0",null,null,null,null,this);
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

            obj = new Static("staSearchStr","20","13","89","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("아이디/이름");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtSearchStr","107","13","120","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","227","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","434","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcDeptNm","258.00","13","60","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","313.00","13","120","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"13","20","24","0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcResig","465.00","13","80","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_text("퇴사자 포함");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new CheckBox("chkResig","552.00","14","33","22",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("11");
            obj.set_falsevalue("Y");
            obj.set_value("N");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","641.00","13","30","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("12");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20.00","90","113","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdUserInfo","20","staUserInfo:10",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommUserMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"133\"/><Column size=\"75\"/><Column size=\"107\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번(ID)\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"소속명\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"담당업무\"/><Cell col=\"7\" text=\"직책(역할)\"/><Cell col=\"8\" text=\"내선번호\"/><Cell col=\"9\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:CO_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:UPMU_NM\"/><Cell col=\"7\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:TELNUM\"/><Cell col=\"9\" text=\"bind:USE_YN\" edittype=\"none\" displaytype=\"text\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"107\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"담당업무\"/><Cell col=\"6\" text=\"직책(역할)\"/><Cell col=\"7\" text=\"내선번호\"/><Cell col=\"8\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:USER_NM\"/><Cell col=\"2\" text=\"bind:CO_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:POS_NM\"/><Cell col=\"5\" text=\"bind:UPMU_NM\"/><Cell col=\"6\" text=\"bind:ROLE_NM\"/><Cell col=\"7\" text=\"bind:TELNUM\"/><Cell col=\"8\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","staUserInfo:0","90","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommUserMt");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staCoNm","940.00","70","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("소속명");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","997.00","70","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
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
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtSearchStr","value","dsCond","SEARCH_STR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.staCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divSearchArea.form.stcResig","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divSearchArea.form.chkResig","value","dsCond","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0000_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0000_P01
        * 화면(명)		︰ 사용자 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 기본 사용자 선택 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	* pSelType			선택 타입					S:단일선택 M:다중선택
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pSelType = '';		// 선택구분; 'S':single:단건선택; 'M':multi:다건선택
        this.pModalYn;

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
        	this.dsCond.setColumn(this.dsCond.rowposition, 'CO_NM', '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_NM', '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'SEARCH_STR', '');
        	this.dsCond.setColumn(this.dsCond.rowposition, 'USER_TYPE', this.getOwnerFrame().pUserType );
        	trace("this.getOwnerFrame().pUserType==>" + this.getOwnerFrame().pUserType );

        	if( Ex.isEmpty(this.getOwnerFrame().pUseYn)	)
        	{
        		this.dsCond.setColumn(this.dsCond.rowposition, 'USE_YN', "Y");
        		this.divContent.form.divSearchArea.form.chkResig.set_value(this.getOwnerFrame().pUseYn);
        	}
        	else
        	{
        		if(this.getOwnerFrame().pUseYn == "ALL")
        		{
        			this.dsCond.setColumn(this.dsCond.rowposition, 'USE_YN', undefined);
        			this.divContent.form.divSearchArea.form.chkResig.set_value(undefined);
        		}
        		else
        		{
        			this.dsCond.setColumn(this.dsCond.rowposition, 'USE_YN', this.getOwnerFrame().pUseYn);
        		}
        	}
        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0110W/select01";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommUserMt=dsFommUserMt";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 공통 저장 func.
        this.fnSave = function()
        {
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
        			Ex.core.toast(this, "10002");
        			this.divContent.form.grdUserInfo.setCellProperty("Head", this.divContent.form.grdUserInfo.getBindCellIndex('Body', 'CHK'), "text", "0");
        			//this.divContent.form.divSearchArea.form.edtSearchStr.setFocus();
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

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.fnSearchReset();	// 검색조건 초기화

        	var pType = Ex.isEmpty(this.getOwnerFrame().pType) ? "" : this.getOwnerFrame().pType.toUpperCase();

        	if( !Ex.isEmpty(this.getOwnerFrame().pData) )
        	{
        		if(pType == "ID" || pType == "NAME" || pType == "ID_NM")
        		{
        			this.dsCond.setColumn(0, "SEARCH_STR", this.getOwnerFrame().pData);
        		}

        	}
        	this.dsCond.setColumn(0, "ROLE_CD", this.getOwnerFrame().pRoleCd);

        	var pDepYn = Ex.isEmpty(this.getOwnerFrame().pDepYn) ? "" : this.getOwnerFrame().pDepYn.toUpperCase();
        	var pDepLock = Ex.isEmpty(this.getOwnerFrame().pDepLock) ? "" : this.getOwnerFrame().pDepLock.toUpperCase();

        	if(pDepYn == "Y"){
        		this.dsCond.setColumn(this.dsCond.rowposition, 'DEPT_NM',  Ex.util.getSession('gvDeptNm'));
        	}

        	if(pDepLock == "Y"){
        		this.divContent.form.divSearchArea.form.edtDeptNm.enable = false;
        	}

        	/* ASIS CODE[30027] - 1:[직원], 4:[상주외주], 3:[개발외주], 7:[위탁외주] */
        // 	if( !Ex.isEmpty(this.getOwnerFrame().pUserType) )
        // 	{
        // 		this.dsCond.setColumn(0, "USER_TYPE", this.getOwnerFrame().pUserType);
        // 		if( this.getOwnerFrame().pUserType == '1' )
        // 		{
        // 			this.divContent.form.divSearchArea.form.staCoNm.set_visible(false);
        // 			this.divContent.form.divSearchArea.form.edtCoNm.set_visible(false);
        // 		}
        // 	}

        	this.pSelType = (this.getOwnerFrame().pSelType||'').toUpperCase();
        	switch(this.pSelType)
        	{
        		case "M" :				this.divContent.form.grdUserInfo.set_formatid('multiSel');	break;
        		case "S" :	default :	this.divContent.form.grdUserInfo.set_formatid('singleSel');	break;
        	}
        	this.divContent.form.grdUserInfo.set_visible(true);


        	// 퇴사자 체크박스 나오도록 처리
        	var pUseYn = Ex.isEmpty(this.getOwnerFrame().pUseYn) ? "" : this.getOwnerFrame().pUseYn.toUpperCase();
        	if(pUseYn == 'Y' || pUseYn == '')
        	{
        		this.divContent.form.divSearchArea.form.stcResig.visible = true;
        		this.divContent.form.divSearchArea.form.chkResig.visible = true;
        	}

        	// 외부인원? 포함 조회
        	var pAuserFlag = (this.getOwnerFrame().pAuserFlag||'').toUpperCase();
        	this.dsCond.setColumn(0, "AUSER_FLAG", pAuserFlag);

        	// 버튼 visible / 모달창인지 아닌지
        	this.pModalYn = this.getOwnerFrame().pModalYn||'N';
        	if( this.pModalYn == 'Y') {
        		this.divBottom.set_height(0);
        		this.divContent.set_bottom("divBottom:0");
        	}

        	this.fnSearch();		// 검색
        	this.divContent.form.divSearchArea.form.edtSearchStr.setFocus();
        }

        // 선택
        this.fnSelect = function(selType)
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pCheckDs) && !Ex.isEmpty(this.getOwnerFrame().pCheckCol) )
        	{
        		if(selType == "S")
        		{
        			var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, "USER_ID"));
        			if(fRow > -1)
        			{
        				var userInfo = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, "USER_NM") + "[" + this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, "USER_ID") + "]";
        				var oParam = {id : "alertAddUserI", msg : "{0} 이미 추가한 사용자 입니다.", arrparam : [userInfo], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return false;
        			}
        		}
        		else if(selType == "M")
        		{
        			this.dsFommUserMt.set_enableevent(false);
        			this.dsFommUserMt.set_filterstr("CHK == '1'");

        			for(var i=0; i<this.dsFommUserMt.rowcount; i++)
        			{
        				var fRow = this.getOwnerFrame().pCheckDs.findRow(this.getOwnerFrame().pCheckCol, this.dsFommUserMt.getColumn(i, "USER_ID"));
        				if(fRow > -1)
        				{
        					var userInfo = this.dsFommUserMt.getColumn(i, "USER_NM") + "[" + this.dsFommUserMt.getColumn(i, "USER_ID") + "]";
        					var oParam = {id : "alertAddUserI", msg : "{0} 이미 추가한 사용자 입니다.", arrparam : [userInfo], msgtype : "I"};
        					Ex.core.alert(this, oParam);
        					this.dsFommUserMt.set_filterstr("");
        					this.dsFommUserMt.set_enableevent(true);
        					return false;
        				}
        			}
        			this.dsFommUserMt.set_filterstr("");
        			this.dsFommUserMt.set_enableevent(true);
        		}
        	}

        	this.dsRet.clear();
        	switch(selType)
        	{
        		case "M" :	// 멀티 선택 시 체크된 모든 행 복사 & return
        			this.dsFommUserMt.set_enableevent(false);
        			this.dsFommUserMt.set_filterstr("CHK == '1'");
        			this.dsRet.copyData(this.dsFommUserMt, true);
        			this.dsFommUserMt.set_filterstr("");
        			this.dsFommUserMt.set_enableevent(false);
        			break;

        		case "S" :	// 단일 선택 시 현재 rowposion 기준 복사 & return
        		default :
        			this.dsRet.assign(this.dsFommUserMt);
        			this.dsRet.clearData();
        			this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsFommUserMt, this.dsFommUserMt.rowposition);
        			break;
        	}

        	Ex.core.pclose(this, this.dsRet.saveXML());
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

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			this.fnSelect(this.pSelType);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        this.divContent_grdUserInfo_oncelldblclick = function(obj,e)
        {
        	this.fnSelect('S');
        };

        this.divContent_divSearchArea_chkResig_onchanged = function(obj,e)
        {
        	trace("e.postvalue : " + e.postvalue);

        	if(e.postvalue == "Y")
        	{
        		this.dsCond.setColumn(0, "USE_YN", "Y");

        	}
        	else
        	{
        		this.dsCond.setColumn(0, "USE_YN", undefined);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtSearchStr.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.edtDeptNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.chkResig.addEventHandler("onchanged",this.divContent_divSearchArea_chkResig_onchanged,this);
            this.divContent.form.grdUserInfo.addEventHandler("oncelldblclick",this.divContent_grdUserInfo_oncelldblclick,this);
            this.edtCoNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.dsFommUserMt.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommUserMt.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
        };
        this.loadIncludeScript("FOMM0000_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
