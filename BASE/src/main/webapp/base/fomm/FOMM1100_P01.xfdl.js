(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1100_P01");
            this.set_titletext("서비스별 담당자관리 추가");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_STR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRstType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">SR</Col><Col id=\"CMM_CD_NM\">서비스요청</Col></Row><Row><Col id=\"CMM_CD\">CAT</Col><Col id=\"CMM_CD_NM\">요청서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDivType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRstUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRstVal", this);
            obj._setContents("<ColumnInfo><Column id=\"rstUser\" type=\"STRING\" size=\"256\"/><Column id=\"rstType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"STAFF_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20","100","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdUserInfo","20","staUserInfo:10",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFommUserMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"133\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"사번(ID)\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"소속명\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"직위\"/><Cell col=\"7\" text=\"직책(역할)\"/><Cell col=\"8\" text=\"내선번호\"/><Cell col=\"9\" text=\"중복여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:CO_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DEPT_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:TELNUM\"/><Cell col=\"9\" text=\"bind:DUP_YN\" edittype=\"none\" displaytype=\"text\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"107\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/><Cell col=\"6\" text=\"내선번호\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:TELNUM\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","staUserInfo:10","100","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommUserMt");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staUserInfo00","20.00","20","98","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01","20.00","54",null,"34","Static00_01_00_00:0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcPrePlanNm","20.00","54","120","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("요청분류");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","44",null,"10","-10",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboSvc","stcPrePlanNm:5","59",null,"24","641",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsSrType");
            obj.set_displaynulltext("서비스유형");
            obj.set_type("dropdown");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtType","cboSvc:4","59","150","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyYn").set("N");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validationCheckReadonly("false");
            obj.set_displaynulltext("업무분류(대)");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtCat","edtType:4","59","250","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyYn").set("N");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validationCheckReadonly("false");
            obj.set_displaynulltext("업무분류(중)");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnSearchSvc","edtCat:4","59","24","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"100","425","24","Static00_01_00_00:0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","60","24","0",null,null,null,null,null,this.divContent.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divContent.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","btnDel:4",null,null,null,null,null,this.divContent.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.divContent.form.divGrdTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrdTopBtn.form,function(p){});
            this.divContent.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.stcBg01","value","dsIvPrePlan","PRE_PLAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.cboSvc","value","dsDivType","FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtType","value","dsDivType","SR_CAT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.edtCat","value","dsDivType","SR_CAT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1100_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM1100_P01
        * 화면(명)		︰ 서비스 담당자 신규등록
        * 메뉴(경로)	    ︰ 관리자 > 사용자권한관리 > 서비스별 담당자관리
        * 화면 설명	    ︰ 요청분류 조회
        * 작성자	    	︰ WEMB
        * 작성일	    	︰ 2025.02.12
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.12	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description

        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pSelType = '';		// 선택구분; 'S':single:단건선택; 'M':multi:다건선택
        this.sysAdminYn = 'N';  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.

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
        	this.sysAdminYn = Ex.util.getSession('gvAdminYn');
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {

        }


        // 중복체크
        this.fnChkDup = function()
        {
        	this.dsChkTmp.clearData();

        	var pvSvcClssCd = this.dsDivType.getColumn(0,"FLAG");
        	var pvBseLvl1Cd = this.dsDivType.getColumn(0,"SR_TYPE");
        	var pvBseLvl2Cd = this.dsDivType.getColumn(0,"SR_CAT_ID");

        	for(var i=0;i<this.dsFommUserMt.rowcount;i++) {
        		var aRow = this.dsChkTmp.addRow();
        		this.dsChkTmp.setColumn(aRow,"STAFF_ID",this.dsFommUserMt.getColumn(i,"USER_ID"));
        	}

        	// transaction
        	var sTranId = "chkDup";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1100W/chkDup";            // 서비스명
            var sInDs = "dsChkTmp=dsChkTmp";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsChkRst=dsChkRst";       	// 서버에서 수신할 데이타셋
            var sArg = "pvSvcClssCd='"+pvSvcClssCd+"'";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	    sArg += " pvBseLvl1Cd='"+pvBseLvl1Cd+"'";
        		sArg += " pvBseLvl2Cd='"+pvBseLvl2Cd+"'";
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
        		case "chkDup" :

        			var isDup = false;

        			if(this.dsChkRst.rowcount>0) {
        				for(var i=0;i<this.dsChkRst.rowcount;i++) {
        					var fRow = this.dsFommUserMt.findRow("USER_ID",this.dsChkRst.getColumn(i,"STAFF_ID"));
        					this.dsFommUserMt.setColumn(fRow,"DUP_YN","Y");
        				}

        				isDup = true;
        			}

        			if(isDup) {
        				var param = {
        				    	id : "delIssueAlert"
        				     , msg : "이미 등록된 정보가 존재합니다.\n중복여부를 확인 하세요."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false;
        			} else {
        				this.fnSelect();
        			}

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
        		case "selectSvcPop" :
        			if(!Ex.isEmpty(varValue)) {
        				this.dsDivType.clear();
        				this.dsDivType.loadXML(varValue);
        			}
        			break;

        		case "selectUserPop" :
        			if(!Ex.isEmpty(varValue)) {
        				this.dsSelUser.loadXML(varValue);

        				if(this.dsFommUserMt.getColCount()==0) {
        					for(var i=0;i<this.dsSelUser.getColCount();i++) {
        						var objColInfo = this.dsSelUser.getColumnInfo(i);
        						this.dsFommUserMt.addColumnInfo(objColInfo.name,objColInfo);
        					}

        					this.dsFommUserMt.addColumn("DUP_YN","string");
        				}

        				// 중복 validation
        				for(var i = 0 ; i < this.dsSelUser.rowcount ; i++){
        					var selUserId = this.dsSelUser.getColumn(i, 'USER_ID');
        					var duplRow = this.dsFommUserMt.findRow('USER_ID', selUserId);
        					if( duplRow >= 0) {
        						var param = {
        								id : "alert_selUserDupl"
        							, msg : "10005"
        							, arrparam : [Ex.core.word('사용자')]
        							, msgtype : "I"};
        						Ex.core.alert(this, param);
        						return;
        					}

        					this.dsSelUser.setColumn(i, 'CHK', '1');

        					var rowPos = this.dsFommUserMt.setInsertRow(this.dsFommUserMt.rowposition+1);
        					this.dsFommUserMt.setCopyRow(rowPos, this.dsSelUser, i);
        				}

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
        		case "resetUserAlert" :
        				this.dsFommUserMt.clearData();

        				Ex.core.popup(	this,
        							'selectSvcPop',
        							"fomm::FOMM1100_P02.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('요청분류 조회')
        								//, pCheckDs:this.dsDivType
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.divContent.form.grdUserInfo.displayRowType();
        }

        // 선택
        this.fnSelect = function(selType)
        {
        	this.dsRstUser.clearData();
        	this.dsRstType.clear();

            this.dsFommUserMt.set_enableevent(false);
        	//this.dsFommUserMt.set_filterstr("CHK == '1'");

        	for(var i=0; i<this.dsFommUserMt.rowcount; i++) {
        		var aRow = this.dsRstUser.addRow();
        		this.dsRstUser.setColumn(aRow, "USER_ID", this.dsFommUserMt.getColumn(i,"USER_ID"));
        		this.dsRstUser.setColumn(aRow, "USER_NM", this.dsFommUserMt.getColumn(i,"USER_NM"));
        		this.dsRstUser.setColumn(aRow, "DEPT_NM", this.dsFommUserMt.getColumn(i,"DEPT_NM"));
        	}

        	//this.dsFommUserMt.set_filterstr("");
        	this.dsFommUserMt.set_enableevent(true);

        	this.dsDivType.set_enableevent(false);
        	this.dsRstType.copyData(this.dsDivType, true);
        	this.dsDivType.set_enableevent(true);

        	this.dsRstVal.addRow();
        	this.dsRstVal.setColumn(0,"rstUser",this.dsRstUser.saveXML());
        	this.dsRstVal.setColumn(0,"rstType",this.dsRstType.saveXML());

        	Ex.core.pclose(this, this.dsRstVal.saveXML());
        }


        this.fnCheckValidate = function()
        {
        	if(this.dsDivType.rowcount==0) {
        				var param = {
        				    	id : " selNoTypeAlert"
        				     , msg : "요청분류를 선택해 주세요."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false;
        	}

        	if(this.dsFommUserMt.rowcount==0) {
        				var param = {
        				    	id : "selNotUserAlert"
        				     , msg : "사용자를 선택해 주세요."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.confirm(this, param);
        				return false;

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

        			if(this.dsDivType.rowcount==0) {
        				var param = {
        				    	id : "noTypeAlert"
        				     , msg : "요청분류 선택후 추가 가능합니다."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false;

        			}

        			var pSelType = 'M';	// 'S' : single select || 'M' : multi select

        			if(this.sysAdminYn == "Y") {
        				Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택')
        							 , pSelType:pSelType
        							 },     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			} else {
        					Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택')
        							 , pSelType:pSelType
        							 //, pDepYn:"Y"
        							 //, pDepLock:"Y"
        							 },     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );

        			}


        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			//this.fnSelect();
        			if(this.fnCheckValidate()) {
        				this.fnChkDup();
        			}
        			break;

        		case "btnSearchSvc" :

        			if(this.dsFommUserMt.rowcount!=0) {
        				var param = {
        				    	id : "resetUserAlert"
        				     , msg : "요청분류 변경시 추가한 사용자 목록이 초기화 됩니다.\n계속 하시겠습니까?"
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.confirm(this, param);
        				return false;

        			}

        			Ex.core.popup(	this,
        							'selectSvcPop',
        							"fomm::FOMM1100_P02.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('요청분류 조회')
        								//, pCheckDs:this.dsDivType
        							},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;

        		case "btnDel" :
        			this.fnDelete(this.dsFommUserMt);
        			break;
        	}
        }

        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.btnSearchSvc.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdTopBtn.form.btnDel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM1100_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
