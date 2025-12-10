(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chkList");
            this.set_titletext("체크리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReqChkList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmuChkList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_REM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_CHM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdateData", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VERIF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPage","0","0",null,null,"0","80",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0",null,"24","20",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_text("검증 체크리스트 정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("Static33_00_00_00","-830","24",null,"10","0",null,null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            obj.set_text("");
            this.divPage.addChild(obj.name, obj);

            obj = new Grid("upmuGrdList","20","33",null,null,"20","0",null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsUpmuChkList");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoenter("select");
            obj.set_useSort("false");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"270\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"등록구분\"/><Cell col=\"3\" text=\"항목명\"/><Cell col=\"4\" text=\"검증내용\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"선택\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:REG_USER_TYPE_NM\" combodataset=\"dsUserType\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/><Cell col=\"3\" text=\"bind:UPMU_NM\"/><Cell col=\"4\" displaytype=\"normal\" style=\"cursor:hand;\" text=\"bind:VERIF_CONT\" editlimit=\"20\" expandsize=\"24\" edittype=\"none\" combodataset=\"dsEmplGbCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" comboitemheight=\"24\" combobuttonsize=\"24 24\" comboscrollbarsize=\"24\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:VERIF_REM\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:VERIF_CHK\"/></Band></Format></Formats>");
            this.divPage.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","13",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","125","13",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0",null,null,"20","0","60",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR5000_P06.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR5000_P06.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ 체크리스트
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.03.18
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2025.03.18	WEMB		최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	pGridFormats	: 선택 목록에 사용될 그리드 포맷
        	pGridInnerDsArr	: 선택 목록 그리드에 콤보 InnerDataset Object Array
        	pDsData			: 선택 목록 그리드 Bind Dataset Object
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
         this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.chkListk = "N";
        this.saveChk = "N";
        this.fv_ingPhase = "";
        this.fv_ingPhaseNm = "";
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 랜더링 시점때문에 로드할때 숨김처리
        	if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") &&
        		this.reqInfo.REQ_USER_ID == Ex.util.getSession("gvUserId") )
        	{
        		this.divPage.form.upmuGrdList.set_readonly(false);
        		this.divBtnBottom.form.btnSave.set_visible(true);
        	}
        	this.gfnFormOnLoad(this, this.fnInit);
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "UPMU_ID2", this.getOwnerFrame().pUpmuId2);
        	this.dsCond.setColumn(0, "REQ_ID2", this.getOwnerFrame().pReqId2);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 업무분류별 체크리스트 조회
        this.fnUpmuChkList = function()
        {
        	var sTranId = "upmuChkList";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/upmuChkList";							// 서비스명
            var sInDs = "dsUpmuChkList=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUpmuChkList=dsUpmuChkList";						// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 요청서 체크리스트 조회
        this.fnReqChkList = function()
        {
        	var sTranId = "reqChkList";										// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/reqChkList";							// 서비스명
            var sInDs = "dsReqChkList=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqChkList=dsReqChkList";						// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 체크리스트 저장
        this.fnChkListSave = function()
        {
        	var sTranId = "chkListSave";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/chkListSave";							// 서비스명
            var sInDs = "dsCond=dsReqChkList dsReqChkList=dsReqChkList";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqChkList=dsReqChkList";						// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 체크리스트 삭제
        this.fnChkListDelete = function()
        {
        	var sTranId = "chkListDelete";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/chkListDelete";							// 서비스명
            var sInDs = "dsCond=dsCond";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";												// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 테스트케이스 삭제
        this.fnTestCaseDelete = function()
        {
        	var sTranId = "testCaseDelete";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR5000D/testCaseDelete";						// 서비스명
            var sInDs = "dsCond=dsCond";									// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";												// 서버에서 수신할 데이타셋
            var sArg = "";													// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        		case "upmuChkList" :
        			this.dsUpmuChkList.addColumn("REG_USER_TYPE_NM", "STRING");
        			this.fnReqChkList();
        			break;

        		case "reqChkList" :
        			for(var i=0; i<this.dsReqChkList.rowcount; i++)
        			{
        				this.dsUpmuChkList.set_enableevent(false);
        				var fRow = this.dsUpmuChkList.findRow("VERIF_SEQ", this.dsReqChkList.getColumn(i, "VERIF_SEQ"));
        				if( fRow > -1 ) {
        					this.dsUpmuChkList.setColumn(fRow, "VERIF_CHK", 1);
        					this.dsUpmuChkList.setColumn(fRow, "REG_USER_TYPE_NM", this.dsReqChkList.getColumn(i, "REG_USER_TYPE_NM"));
        				}
        				this.dsUpmuChkList.set_enableevent(true);
        			}

        			if(this.saveChk == "Y")
        			{
        				Ex.core.toast(this, "10004");
        			}
        			else
        			{
        				Ex.core.toast(this, "10002");
        				this.saveChk = "N";
        			}
        			break;

        		case "chkListSave" :
        			this.saveChk = "Y"
        			this.fnUpmuChkList();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "chkListConfirm" :
        			// 체크리스트 임시저장단계에서만 노출
        			if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        			{
        				this.chkListk = "Y";
        				this.fv_ingPhase = "SCKU0A00";	// 요청자
        				this.fv_ingPhaseNm = "요청자";
        			}
        			else
        			{
        				this.fv_ingPhase = "SCKU0B00";	// PL
        				this.fv_ingPhaseNm = "PL";
        			}

        			if( Ex.isEmpty(this.dsReqChkList.getColumnInfo("USER_ID")) )
        			{
        				this.dsReqChkList.addColumn("USER_ID", "STRING");
        				this.dsReqChkList.addColumn("USER_NM", "STRING");
        			}

        			for(var i=0; i<this.dsUpmuChkList.rowcount; i++)
        			{
        				if( this.dsUpmuChkList.getColumn(i, "VERIF_CHK") == 1 )
        				{
        					var fRow = this.dsReqChkList.findRow("VERIF_SEQ", this.dsUpmuChkList.getColumn(i, "VERIF_SEQ"));
        					if( fRow < 0 )
        					{
        						var aRow = this.dsReqChkList.addRow();
        						this.dsReqChkList.setColumn(aRow, "REQ_ID", this.dsCond.getColumn(0, "REQ_ID"));	// 요청서번호
        						this.dsReqChkList.setColumn(aRow, "ROWFLAG", "I");		// ROWFLAG
        						this.dsReqChkList.setColumn(aRow, "VERIF_SEQ", this.dsUpmuChkList.getColumn(i,"VERIF_SEQ"))	// 체크리스트 시퀀스
        						this.dsReqChkList.setColumn(aRow, "VERIF_CONT", this.dsUpmuChkList.getColumn(i,"VERIF_CONT"))
        						this.dsReqChkList.setColumn(aRow, "VERIF_TYPE", this.d)
        						this.dsReqChkList.setColumn(aRow, "REG_USER_TYPE", this.fv_ingPhase);		// 등록구분
        						this.dsReqChkList.setColumn(aRow, "REG_USER_TYPE_NM", this.fv_ingPhaseNm);
        						this.dsReqChkList.setColumn(aRow, "USER_ID", Ex.util.getSession("gvUserId"));
        						this.dsReqChkList.setColumn(aRow, "USER_NM", Ex.util.getSession("gvUserNm"));
        					}
        				}
        				else
        				{
        					var fRow = this.dsReqChkList.findRow("VERIF_SEQ", this.dsUpmuChkList.getColumn(i, "VERIF_SEQ"));
        					if( fRow > -1 )
        					{
        						this.dsReqChkList.setColumn(fRow, "ROWFLAG", "D");		// 시퀀스
        					}
        				}
        			}
        			this.fnChkListSave();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// ROWFLAG처리
        	this.divPage.form.upmuGrdList.displayRowType();

        	this.fnGetCmmCd();
        	this.fnUpmuChkList();

        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());

        	// 체크리스트 임시저장단계에서만 노출
        	if(	this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        	{
        		this.chkListk = "Y";
        		this.fv_ingPhase = "SCKU0A00";	// 요청자
        		this.fv_ingPhaseNm = "요청자";
        	}
        	else
        	{
        		this.fv_ingPhase = "SCKU0B00";	// PL
        		this.fv_ingPhaseNm = "PL";
        	}
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		 upCmmCd	: ['SCKU0000']	// 조회할 상위코드
        		,codeDiv	: [''		 ]	// 조회할 코드의 업무구분
        		,optStr		: [''	 	]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn		: ['Y'		 ]	// 사용여부
        		,filter		: [''		 ]	// filterStr
        		,objDs		: [this.dsUserType]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.fnSaveCheck = function(isReg)
        {
        	var nRowCnt = this.dsUpmuChkList.getCaseCount("VERIF_CHK == 1");

        	if(nRowCnt == 0)
        	{
        		var param = {
                	  msg	: "체크리스트를 선택하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                };
                Ex.core.alert(this, param);
        		return false;
        	}

        	var param = {
        		  id : "chkListConfirm"
        		, msg : "저장하시겠습니까?"
        		, arrparam : ['']
        		, msgtype : "I"
        	};
        	Ex.core.confirm(this, param);
        	return false;
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

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSave" :	// 저장
        			this.fnSaveCheck();
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

        this.onHeadClick = function(obj,e)
        {
        	if(obj.getCellProperty("head", e.cell, "edittype") == "checkbox" && obj.getBindCellIndex('body', 'VERIF_CHK') == e.cell)
        	{
        		var chkVal = obj.getHeadValue(e.cell);

        		for(var i=0; i<obj.getBindDataset().rowcount; i++)
        		{
        			obj.getBindDataset().setColumn(i, "VERIF_CHK", chkVal);
        		}
        	}
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
            this.divPage.form.upmuGrdList.addEventHandler("onexpandup",this.grdList_onexpandup,this);
            this.divPage.form.upmuGrdList.addEventHandler("onheadclick",this.onHeadClick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsUpmuChkList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsUpdateData.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR5000_P06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
