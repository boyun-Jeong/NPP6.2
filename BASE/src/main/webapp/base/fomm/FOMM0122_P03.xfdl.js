(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SV0110_P02");
            this.set_titletext("사용자권한수정");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(875,215);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_HT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthHisList", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_HT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ACT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"10","-5",null,null,null,null,null,this.divContent.form);
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

            obj = new Static("stcBg01_00","19.00","38",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00","2.06%","38","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("신청서번호");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00_00","34.06%","38","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("그룹유형");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00_00_00","64.46%","38","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("역할");
            this.divContent.addChild(obj.name, obj);

            obj = new Radio("rdoSndYn","stcRqstr00_00:4.00","44",null,"24","stcRqstr00_00_00:6",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_padding("0px 5px 0px 5px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_enableevent("true");
            obj.set_validationCheckReadonly("false");
            obj.set_readonly("true");
            var divContent_form_rdoSndYn_innerdataset = new nexacro.NormalDataset("divContent_form_rdoSndYn_innerdataset", obj);
            divContent_form_rdoSndYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">권한그룹</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">확장그룹</Col></Row></Rows>");
            obj.set_innerdataset(divContent_form_rdoSndYn_innerdataset);
            obj.set_value("Y");
            obj.set_index("-1");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqUser","stcRqstr00:5","44","155","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("group1");
            obj.set_readonly("true");
            obj.set_validation("신청서번호;NULL");
            obj.set_validationCheckReadonly("false");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnSearchSr","edtReqUser:0","44",null,"24","stcRqstr00_00:4",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00_00","21.00","11","100","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_text("권한 등록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divUserTopBtn",null,"88","200","25","21",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","19.00","71",null,"34","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00_01","2.06%","71","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("사용자");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00_00_01","34.06%","71","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("부서");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcRqstr00_00_00_00","64.46%","71","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("처리구분");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqUser00","stcRqstr00_01:5","77",null,"24","stcRqstr00_00_01:5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqUser00_00","stcRqstr00_00_01:5","77",null,"24","stcRqstr00_00_00_00:5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("18");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqUser00_00_00","stcRqstr00_00_00_00:4.00","77",null,"24","28",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtReqUser00_00_00_00","stcRqstr00_00_00:5","42",null,"24","29",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_readonly("true");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divUserTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divUserTopBtn.form,function(p){});
            this.divContent.form.divUserTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",875,215,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.divSearchArea.form.edtSearchStr","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.edtSearchStr00","value","dsCond","MAIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divSearchArea.form.Static00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.Static00_00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.divSearchArea.form.divSearchArea.form.edtSearchStr","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divSearchArea.form.divSearchArea.form.edtSearchStr00","value","dsCond","MAIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divSearchArea.form.divSearchArea.form.Static00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divSearchArea.form.divSearchArea.form.Static00_00_00","value","dsCond","CI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.stcBg01_00","value","dsCond","REV_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divContent.form.divInfo.form.edtReqUser02","value","dsChklstInfo","GRD_CHKLST_CONTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divContent.form.divInfo.form.edtReqUser02_00","value","dsChklstInfo","GRD_TEAM_CHKLST_CONTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.stcBg01_00_00","value","dsCond","REV_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContent.form.edtReqUser","value","dsData","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContent.form.rdoSndYn","value","dsData","AUTH_GRP_GB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContent.form.edtReqUser00_00_00_00","value","dsData","AUTH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContent.form.edtReqUser00","value","dsData","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divContent.form.edtReqUser00_00","value","dsData","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divContent.form.edtReqUser00_00_00","value","dsData","AUTH_ACT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0122_P03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SV0110_P02
        * 화면(명)		︰ 서버선택팝업(공통)
        * 메뉴(경로)		︰ 공통
        * 화면 설명		︰ 서버선택팝업
        * 작성자			︰ WEMB
        * 작성일			︰ 2024.05.30
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        	작성자		이력
        *------------------------------------------------------------------
        * 2024.05.30	JBY			최초작성
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
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.AUTH_HT_ID = this.getOwnerFrame().pAuthId||'';
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
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

        	this.dsCond.setColumn(0, 'AUTH_HT_ID', this.AUTH_HT_ID);
        	this.fnSearchList();
        }

        // 조회
        this.fnSearchList = function()
        {
        	// transaction
        	var sTranId = "select03";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/select03";	// 서비스명
            var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0122W/save01";	// 서비스명
            var sInDs = "dsAuthHisList=dsAuthHisList";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "";		// 서버에서 수신할 데이타셋
            var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
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
        			Ex.core.toast(this, "10002");
        			break;
        		case "save01" :
        			Ex.core.pclose(this, true);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO selReqPop
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue)
        		return;

        	switch(pID)
        	{
        		case "selReqPop" :
        			this.dsReq.loadXML(varValue);
        			this.dsCond.setColumn(0,'REQ_ID',this.dsReq.getColumn(0,'REQ_ID'));
        			this.dsData.setColumn(0,'REQ_ID',this.dsReq.getColumn(0,'REQ_ID'));

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
        		case "saveConfirm" :
        			if(varValue)
        			{	this.dsAuthHisList.clearData();
        				var nRow = this.dsAuthHisList.addRow();

        				this.dsAuthHisList.setColumn(nRow,'AUTH_HT_ID',this.dsCond.getColumn(0,'AUTH_HT_ID'));
        				this.dsAuthHisList.setColumn(nRow,'AUTH_ID',this.dsData.getColumn(0,'AUTH_ID'));
        				this.dsAuthHisList.setColumn(nRow,'REQ_ID',this.dsCond.getColumn(0,'REQ_ID'));
        				this.dsAuthHisList.setColumn(nRow,'ROWFLAG','U');
        				this.fnSave();
        				//Ex.core.pclose(this, this.dsData.saveXML());
        			}
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	//this.fnGetCmmCd();

        	this.fnSearchReset();	// 검색조건 초기화

        	// 버튼&권한 mapping && visible 처리
        	var	arrBtn = [this.divBottom.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);
        	// 버튼 영역 div align 처리
        	//Ex.util.setBtnAlign(this.divBottom, 'right', true);
        	//this.fnSearch();	// 검색
        }



        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['CI_TYPE_CD',	'CI_TYPE_CD'		]	// 조회할 상위코드
        		,codeDiv: ['SVC_MNG_CD',	'SVC_MNG_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',			''					]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y'					]	// 사용여부
        		,filter	: ['',				''					]	// filterStr
        		,objDs	: [this.dsCiTypeCd, this.dsCiTypeCdGrid	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }


        this.fnCheckValidate = function()
        {
        	// 필수값 체크
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsData))
        		return false;

        	if( !Ex.util.checkValidate(this.divContent, "group1") ) return false;


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
        		case "btnSave" :			// 선택
        			if( this.fnCheckValidate() ) {
        				var param = {
        						id : "saveConfirm"
        					  , msg : "수정하시겠습니까?"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;
        		case "btnSearchSr" : //요청서 가져오기
        			Ex.core.popup(
        					this,
        					'selReqPop',
        					"sr::SR0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        						{
        							title		: Ex.core.word('신청서ID') + ' ' + Ex.core.word('선택'),
        							pSvCTmplatId : 'WFT240071'
        						},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"width=1320,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
        				);
        				return;
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
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

        this.grdOnCellClick = function(obj,e)
        {
        	if(obj.id == "grdData")
        	{
        		obj.dropdownCombo();
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
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.rdoSndYn.addEventHandler("onitemchanged",this.divSearchArea_rdoSndYn_onitemchanged,this);
            this.divContent.form.btnSearchSr.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsReq.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsReq.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsReq.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
            this.dsAuthHisList.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0122_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
