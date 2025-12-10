(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0000_P02");
            this.set_visible("true");
            this.set_titletext("나의정보관리");
            this.getSetter("scrollbars").set("autoboth");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLangCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg01","20","54",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","20","20","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","44",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserId","20","54","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("사번");
            this.addChild(obj.name, obj);

            obj = new Static("stcUserNm","50.00%","54","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("성명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","stcUserId:5","59",null,"24","stcUserNm:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","stcUserNm:5","59",null,"24","26",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01_00","20","87",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId01","20","87","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("언어코드");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId00_00","50.00%","87","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLangCd","stcReqId01:5","92",null,"24","stcReqId00_00:5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_validation("언어코드;NULL");
            obj.set_validationGroup("group01");
            obj.set_innerdataset("dsLangCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edt_upmuNm","value","ds_userInfo","UPMU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtUserId","value","dsFommUserMt","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserNm","value","dsFommUserMt","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboLangCd","value","dsFommUserMt","LANG_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0000_P02_bak.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0000_P02
        * 화면(명)		︰ 나의 정보 관리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ SPP 기본 사용자 정보 관리 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.05.16
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.05.16	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pSelType = '';		// 선택구분; 'S':single:단건선택; 'M':multi:다건선택
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
        	this.dsCond.setColumn(0, "USER_ID",  Ex.util.getSession('gvUserId'));

        	this.fnCompInit();		// 컴포넌트 초기화
        	this.fnSearch();		// 검색
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/select01";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommUserMt=dsFommUserMt";           // 서버에서 수신할 데이타셋
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
        	var sTranId = "save01";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FOMM0000P/save01";						// 서비스명
        	var sInDs = "dsCond=dsCond dsFommUserMt=dsFommUserMt";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsFommUserMt=dsFommUserMt";				// 서버에서 수신할 데이타셋
        	var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨

        	/**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
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
        		case "select01" :
        			// 대직기간 setting
        			var BUJAE_STIME = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'BUJAE_STIME');
        			if( !Ex.isEmpty(BUJAE_STIME) ) {
        				var date = BUJAE_STIME.substr(0, 8);
        				var time = BUJAE_STIME.substr(8, 4);
        				this.divDaejic.form.calBeginDate.set_value(date);
        				this.divDaejic.form.mskBeginTime.set_value(time);
        			}
        			var BUJAE_ETIME = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'BUJAE_ETIME');
        			if( !Ex.isEmpty(BUJAE_ETIME) ) {
        				var date = BUJAE_ETIME.substr(0, 8);
        				var time = BUJAE_ETIME.substr(8, 4);
        				this.divDaejic.form.calEndDate.set_value(date);
        				this.divDaejic.form.mskEndTime.set_value(time);
        			}

        			// 대직자 setting
        			var DAEJIC_ID = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'DAEJIC_ID');
        			var DAEJIC_NM = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'DAEJIC_NM');
        			if( !Ex.isEmpty(DAEJIC_ID) ) {
        				this.divDaejic.form.divDaejicUser.setValue(DAEJIC_ID, DAEJIC_NM);
        			}

        			// 대직 div disable setting
        			var ABSNCE_YN = this.dsFommUserMt.getColumn(this.dsFommUserMt.rowposition, 'ABSNCE_YN');
        			if(ABSNCE_YN != 'Y') {
        				this.rdoDaejicYn_onitemchanged(this.rdoDaejicYn, {postvalue:'N'});
        			}
        			break;

        		case "save01" :
        			if(this.dsFommUserMt.getColumn(0, "LANG_CD") != Ex.util.getSession('gvLangCd'))
        			{
        				Ex.core.toast(this, "10004");
        				var param = {id : "pConfirmRefreshI", msg : "10014", arrparam : [''], msgtype : "I"};
        				Ex.core.confirm(this, param);
        				return;
        			}
        			else
        			{
        				var param = {
        						id : "saveAlert"
        					  , msg : "10004"
        					  , arrparam : ['']
        					  , msgtype : "S"};
        				Ex.core.alert(this, param);
        			}
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
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        	{
        		if(mID == "pConfirmRefreshI")
        		{
        			nexacro.getApplication().gdsSession.setColumn(0, "LANG_CD", this.dsFommUserMt.getColumn(0, "LANG_CD"));
        			var o = Ex.util.makeSessionObject(nexacro.getApplication().gdsSession);
        			Ex.util.setSession(o);
        		}
        		else
        		{
        			return;
        		}
        	}
        	else
        	{
        		switch(mID)
        		{
        			case "pConfirmSaveI" :
        				this.fnSetDataset();
        				this.fnSave();
        				break;

        			case "pConfirmRefreshI" :
        				document.location.href = "/";
        				break;

        			case "saveAlert" :
        				Ex.core.pclose(this, 'save');
        				break;
        		}
        	}
        }


        // 대직자 div change callback
        this.userDeptChangedCallBack = function(compId, dsRtnObj)
        {
        	if(compId == "divDaejicUser")	// 대직자 setting
        	{
        		if( !Ex.isEmpty(dsRtnObj.getColumn(0, "USER_ID")) )
        		{
        			this.dsFommUserMt.setColumn(0, "DAEJIC_ID",	dsRtnObj.getColumn(0, "USER_ID"));
        			this.dsFommUserMt.setColumn(0, "DAEJIC_NM",	dsRtnObj.getColumn(0, "USER_NM"));
        		}
        		else
        		{
        			this.dsFommUserMt.setColumn(0, "DAEJIC_ID",	"");
        			this.dsFommUserMt.setColumn(0, "DAEJIC_NM",	"");
        		}
        	}
        }


        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['LANG_CD',		'YN_CD']	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',		'CMM_CD']	// 조회할 코드의 업무구분
        		,optStr	: ['SEL',			'']		// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y']			// 사용여부
        		,filter	: ['',				'']			// filterStr
        		,objDs	: [this.dsLangCd,	this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	this.cboLangCd.set_index(0);
        }



        // 저장 validation
        this.fnCheckValidate = function()
        {
        	if( !Ex.util.isUpdated(this.dsFommUserMt) )
        		return false;
        	trace('111');
        	if( !Ex.util.checkValidate(this, "group01") )
        		return false;
        	trace('222');
        	// 대직 validation
        	var DAEJIC_YN = this.rdoDaejicYn.value;
        	if(DAEJIC_YN == 'Y') {
        		if( this.divDaejic.form.divDaejicUser.form.fnCheckValidate() != 'OK') {		// 대직자 div
        			var oParam = {id : "daejicUserAlert", msg : "10011", arrparam : ['대직자'], msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        		trace('2222_1');
        		if( !Ex.util.checkValidate(this.divDaejic, "fvValiDaejic") )
        			return false;
        	}
        	trace('333');
        	return true;
        }


        // 저장 전 data setting
        this.fnSetDataset = function()
        {
        	if( this.rdoDaejicYn.value == 'Y' )
        	{
        		// 대직기간
        		var sDate = this.divDaejic.form.calBeginDate.value;
        		var sTime = this.divDaejic.form.mskBeginTime.value;
        		var eDate = this.divDaejic.form.calEndDate.value;
        		var eTime = this.divDaejic.form.mskEndTime.value;

        		this.dsFommUserMt.setColumn(this.dsFommUserMt.rowposition, 'BUJAE_STIME', (sDate + sTime + '00') );
        		this.dsFommUserMt.setColumn(this.dsFommUserMt.rowposition, 'BUJAE_ETIME', (eDate + eTime + '00') );
        	}

        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :			// 검색
        			this.fnSearch();
        			break;

        		case "btnSave" :			// 저장
        			if( !this.fnCheckValidate() )
        				return;

        			var param = {id : "pConfirmSaveI", msg : "10003", arrparam : [''], msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.onColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);	// ROWFLAG컬럼 변경을 위한 함수 호출
        };



        this.rdoDaejicYn_onitemchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "Y" :
        			this.divDaejic.set_enable(true);
        			break;

        		case "N" :
        			this.divDaejic.set_enable(false);
        			break;
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.onColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0000_P02_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
