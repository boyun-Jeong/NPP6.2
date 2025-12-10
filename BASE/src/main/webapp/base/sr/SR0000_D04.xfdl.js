(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0000_D04");
            this.set_titletext("요청정보-기본");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,202);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IS_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_TMPLAT_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ROWFLAG\" type=\"string\" size=\"32\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LM_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"JOB_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"LM_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"SVC_NM_INFO\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"JOB_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_NM\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"datetime\" size=\"17\"/><Column id=\"REQ_DESC\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"datetime\" size=\"17\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"E_DOCU_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqTmplatMtHelp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmplatList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg04","0","100",null,"102","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02","0","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId","25%","34","114","34",null,null,null,null,null,null,this);
            obj.set_text("신청서 번호");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm","75.00%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt","50.00%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel06","0.00%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신청서 종류");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","0","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Div("divRefReqId","75.00%","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("stcRefReqId","0","0","114","34",null,null,null,null,null,null,this.divRefReqId.form);
            obj.set_taborder("2");
            obj.set_text("관련 요청번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divRefReqId.addChild(obj.name, obj);

            obj = new Div("divForm","stcRefReqId:5","5",null,"24","5",null,null,null,null,null,this.divRefReqId.form);
            obj.set_taborder("1");
            obj.getSetter("skipComp").set("Y");
            this.divRefReqId.addChild(obj.name, obj);

            obj = new Button("btnSearchReqPop",null,"0","24","24","24",null,null,null,null,null,this.divRefReqId.form.divForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SearchIcon");
            obj.set_tabstop("false");
            this.divRefReqId.form.divForm.addChild(obj.name, obj);

            obj = new Button("btnReqClear",null,"0","24","24","1",null,null,null,null,null,this.divRefReqId.form.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ClearIcon");
            obj.set_tabstop("false");
            this.divRefReqId.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtRefReqId","0","0",null,"24","47",null,null,null,null,null,this.divRefReqId.form.divForm.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.divRefReqId.form.divForm.addChild(obj.name, obj);

            obj = new Static("stcEdocu","50%","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("전자결재 문서");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:5.00","72",null,"24","stcEdocu:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_validationGroup("group01");
            obj.set_validation("요청제목;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.set_isChgLang("false");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDesc","50.00%","100","114","102",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("작성요령");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqReason","0","100","114","102",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaContents","stcReqReason:5.00","105",null,"93","stcReqDesc:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("신청사유;NULL");
            obj.set_wordWrap("char");
            obj.set_imemode("hangul");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5.00","39",null,"24","stcReqDt:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcLabel06:5","39",null,"24","stcReqId:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqDt","stcReqDt:5","39",null,"24","stcReqUserNm:5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_validation("요청일자;NULL");
            obj.set_validationGroup("group01");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new WebView("wevReqDesc","stcReqDesc:5.00","105",null,"93","5",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm","stcReqUserNm:5.00","39",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnY","stcInfoTitle:5.00","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Y");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnN","btnY:5.00","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("N");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEdocu","stcEdocu:5.00","72",null,"24","divRefReqId:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("N");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp","stcReqDesc:-109","stcReqDesc:-42","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_primary_save");
            obj.getSetter("skipComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRefReqId.form.divForm.form
            obj = new Layout("default","",0,0,this.divRefReqId.form.divForm.form,function(p){});
            this.divRefReqId.form.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRefReqId.form
            obj = new Layout("default","",0,0,this.divRefReqId.form,function(p){});
            this.divRefReqId.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,202,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("reqUserNmView","edtReqUserNm","value","dsSrBaseInfo","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("srCatName","edtReqTmplatNm","value","dsSrBaseInfo","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("recUserNm","txRecUser","value","dtSrReqInfo","recUserNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("srBrief","edtReqTitle","value","dsSrBaseInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("reqSayu","txaContents","value","dsSrBaseInfo","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","calReqDt","value","dsSrBaseInfo","REQ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","stcEdocu","value","dsSrBaseInfo","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divRefReqId.form.edtRefReqId","value","dsSrBaseInfo","REF_REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtEdocu","value","dsSrBaseInfo","E_DOCU_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divRefReqId.form.divForm.form.btnSearchReqPop","value","dsSrBaseInfo","REF_REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divRefReqId.form.divForm.form.edtRefReqId","value","dsSrBaseInfo","REF_REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0000_D04.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR0000_D04
        * 화면(명)	︰ 요청서 기본정보(미래에셋 기본)
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.05.30	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.isLoadHtmlView = false;	//htmlView Load 완료여부
        this.selectServiceInfo = {
        	CALLBACK_ID		: ["select01"],
        	CALL_SVC		: ["sr/SR0000D/select01"],

        	IN_DS_WHERE		: [this.dsCond],
        	OUT_DS_OBJ		: [new Array(this.dsSrBaseInfo)]
        };

        this.saveServiceInfo = {
        	CALLBACK_ID		: ["save01"],
        	CALL_SVC		: ["sr/SR0000D/save01"],

        	IN_DS_OBJ		: [new Array(this.dsSrBaseInfo)],
        	OUT_DS_OBJ		: []
        };

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.wevReqDesc.set_url(nexacro.getProjectPath() + "html/htmlViewer.html");

        	this.gfnFormOnLoad(obj, this.fnInit);

        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : [''	]	// 조회할 상위코드
        		,codeDiv: [''	]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL']	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y'	]	// 사용여부
        		,filter	: [''	]	// filterStr
        		,objDs	: [		]	// copy dataset
        	}
        	//Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

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

        	//trace("[SR0000_D01]-this.fnCallback() sSvcId : " + sSvcId);

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "selectWfReqTmplatAll" :
        			var fRow = this.dsTmplatList.findRow("REQ_TMPLAT_ID", this.dsSrBaseInfo.getColumn(0, "REQ_TMPLAT_ID"));

        			var svcCd		= this.dsTmplatList.getColumn(fRow, "SVC_CD");
        			//var svcDtlCd	= this.dsTmplatList.getColumn(fRow, "SVC_DTL_CD");

        			if(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && this.reqInfo.WF_FUNC_CD == "WF_FUNC_00")
        			{
        				this.divRefReqId.form.divForm.set_enable(true);

        				if( svcCd == "SRM")	// && (svcDtlCd.indexOf("WFSR0") > -1 || svcDtlCd.indexOf("WFSR1") > -1)
        				{
        					this.divRefReqId.form.divForm.set_enable(false);
        				}
        			}
        			else
        			{
        				this.divRefReqId.form.divForm.set_enable(false);
        			}
        			break;

        		case "select01" :
        			this.dsSrBaseInfo.set_enableevent(false);
        			this.dsSrBaseInfo.set_updatecontrol(false);

        			if(this.dsSrBaseInfo.getColumn(0, "ROWFLAG") == "I")
        			{
        				this.dsSrBaseInfo.setRowType(0, Dataset.ROWTYPE_INSERT);
        				this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_ID", this.reqInfo.REQ_TMPLAT_ID);
        				this.dsSrBaseInfo.setColumn(0, "REQ_TMPLAT_VER", this.reqInfo.REQ_TMPLAT_VER);
        				this.dsSrBaseInfo.setColumn(0, "WF_PROC_CD", this.dsWfProc.getColumn(0, "WF_PROC_CD"));
        				this.dsSrBaseInfo.setColumn(0, "REQ_STAT_CD", "RQST00");	//임시저장
        				this.dsSrBaseInfo.setColumn(0, "REQ_USER_ID", Ex.util.getSession('gvUserId'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_USER_NM", Ex.util.getSession('gvUserNm'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_NM", Ex.util.getSession('gvDeptNm'));
        				this.dsSrBaseInfo.setColumn(0, "FR_NM", Ex.util.getSession('gvUserNm'));
        				//this.dsSrBaseInfo.setColumn(0, "REQ_DATE", Ex.util.today());

        				if(this.reqInfo.REQ_TMPLAT_ID == "WFT240117")
        				{
        					this.dsSrBaseInfo.setColumn(0, "TITLE", "프로젝트 종료 요청");
        				}
        				else if(this.reqInfo.REQ_TMPLAT_ID == "WFT240118")
        				{
        					this.dsSrBaseInfo.setColumn(0, "TITLE", "프로젝트 중단 요청");
        				}
        				if(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0,'SVC_CD')))
        				{
        					if(this.dsSrBaseInfo.getColumn(0,'SVC_CD') =='CHM'||this.dsSrBaseInfo.getColumn(0,'SVC_CD') =='CHK')
        					{
        						this.dsSrBaseInfo.setColumn(0,"TITLE","[" + Ex.util.getSession('gvDeptNm') + "/" + Ex.util.getSession('gvUserNm')+"] ");
        					}
        				}
        			}
        			else
        			{
        				if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "TEMP_REQ_ID")) )
        				{
        					this.edtReqId.set_value(this.dsSrBaseInfo.getColumn(0, "REQ_ID"));
        				}

        				if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_WISH_TIME")) )
        				{
        					this.dsSrBaseInfo.setColumn(0, "REQ_WISH_TIME", "");
        				}

        				/*
        				this.edtWfProcNm.set_value(
        					this.dsSrBaseInfo.getColumn(0, "WF_PROC_NM") +
        					(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM")) ? " [" + this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM") + "]" : "")
        				);
        				*/
        			}

        			this.dsSrBaseInfo.set_updatecontrol(true);
        			this.dsSrBaseInfo.set_enableevent(true);

        			if(this.dsSrBaseInfo.getColumn(0, "REQ_REF_YN") == "Y")
        			{
        				Ex.util.getWfReqTmplatListDs(this, "dsTmplatList");

        				//참조요청서
        				this.divRefReqId.set_visible(true);

        				//전자결재문서
        				this.stcEdocu.set_left("50%");
        				this.edtEdocu.set_left("stcEdocu:5");
        				this.edtEdocu.set_right("divRefReqId:5");

        				//제목
        				this.edtReqTitle.set_right("stcEdocu:5");

        				if( !Ex.isEmpty(this.reqInfo.REF_REQ_ID) )
        				{
        					this.dsSrBaseInfo.setColumn(0, "REF_REQ_ID", this.reqInfo.REF_REQ_ID);
        				}
        			}
        			else
        			{
        				//참조요청서
        				this.divRefReqId.set_visible(false);
        				this.divRefReqId.form.divForm.set_enable(false);

        				//전자결재문서
        				this.stcEdocu.set_left("75%");
        				this.edtEdocu.set_left("stcEdocu:5");
        				this.edtEdocu.set_right(5);

        				//제목
        				this.edtReqTitle.set_right("stcEdocu:5");
        			}

        			if(this.isLoadHtmlView)
        			{
        				if(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")))
        				{
        					var reqDesc = btoa(encodeURIComponent(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")));
        					this.wevReqDesc.callScript("setContent(\"" + reqDesc + "\")");
        				}
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue) return;

        	switch(pID)
        	{
        		case "SR0000_P01" :
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsPopRtn.loadXML(varValue);
        				this.dsSrBaseInfo.setColumn(0, "REF_REQ_ID", this.dsPopRtn.getColumn(0, "REQ_ID"));
        			}
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pAlertTitleI" :	//임시저장
        			this.edtReqTitle.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.wevReqDesc.set_url(nexacro.getProjectPath() + "html/htmlViewer.html");

        	// 공통코드 조회
        	//this.fnGetCmmCd();
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsSrBaseInfo);
        }

        this.fnSaveCheck = function(isReg)
        {
        	//trace("SR0000_D01 this.fnSaveCheck() isReg : " + isReg);
        	if(isReg)
        	{
        		return Ex.util.checkValidate(this, "group01");
        	}
        	else
        	{
        		if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "TITLE")) )
        		{
        			var param = {id : "pAlertTitleI", msg : "요청제목은(는) 필수입력 항목입니다.."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	return true;
        }

        this.fnPagePreView = function(strReqDesc)
        {
        	if(this.dsSrBaseInfo.rowcount == 0)	this.dsSrBaseInfo.addRow();
        	this.dsSrBaseInfo.setColumn(0, "REQ_DESC", strReqDesc);

        	this.fnCompInit();		// 컴포넌트 초기화
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnHelp" :
        			if( !Ex.isEmpty(this.dsWfReqTmplatMtHelp.getColumn(0,'BOARD_NO')) )
        			{
        				Ex.core.popup(
        					this,
        					'요청서 도움말',
        					"fomm::FOMM0220_P01.xfdl",             		// <--- 팝업창 오픈 Url
        					{
        						title		: Ex.core.word('자료실') + ' ' + Ex.core.word('상세'),
        						pPopType	: 'R',
        						pBoardNo	: this.dsWfReqTmplatMtHelp.getColumn(0,'BOARD_NO')
        					},							// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        					"autosize"					// <--- width/height/modeless(프레임 처리 옵션)
        				);
        			}
        			else
        			{
        				var param = {id : "pAlertNoHelpI", msg : "등록된 도움말이 존재하지 않습니다."};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			break;

        		case "btnSearchReqPop":
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"SR0000_P01",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0000_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title			: "요청서 선택",
        					pSelType		: "S",

        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        			);
        			break;

        		case "btnReqClear" :
        			this.dsSrBaseInfo.setColumn(0, "REF_REQ_ID", "");
        			break;

        		case "btnY" :
        			//참조요청서
        			this.divRefReqId.set_visible(true);

        			//전자결재문서
        			this.stcEdocu.set_left("50%");
        			this.edtEdocu.set_left("stcEdocu:5");
        			this.edtEdocu.set_right("divRefReqId:5");

        			//제목
        			this.edtReqTitle.set_right("stcEdocu:5");
        			break;

        		case "btnN" :
        			//참조요청서
        			this.divRefReqId.set_visible(false);

        			//전자결재문서
        			this.stcEdocu.set_left("75%");
        			this.edtEdocu.set_left("stcEdocu:5");
        			this.edtEdocu.set_right(5);

        			//제목
        			this.edtReqTitle.set_right("stcEdocu:5");
        			break;

        	}
        }

        this.wevReqDesc_onloadcompleted = function(obj,e)
        {	//trace("SR0000_D01 this.wevReqDesc_onloadcompleted()");
        	if(this.dsSrBaseInfo.rowcount > 0)
        	{
        		if(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")))
        		{
        			var reqDesc = btoa(encodeURIComponent(this.dsSrBaseInfo.getColumn(0, "REQ_DESC")));
        			this.wevReqDesc.callScript("setContent(\"" + reqDesc + "\")");
        		}
        	}
        	this.isLoadHtmlView = true;
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.stOonRbuttonUp = function(obj,e)
        {
        	if(e.ctrlkey && e.shiftkey)
        	{
        		this.btnY.set_visible(!this.btnY.visible);
        		this.btnN.set_visible(!this.btnN.visible);
        	}
        };
        this.stcLabel06_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stcLabel06.addEventHandler("onclick",this.stcLabel06_onclick,this);
            this.divRefReqId.form.divForm.form.btnSearchReqPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRefReqId.form.divForm.form.btnReqClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.stcInfoTitle.addEventHandler("onrbuttonup",this.stOonRbuttonUp,this);
            this.calReqDt.addEventHandler("onchanged",this.doChgWishDt,this);
            this.wevReqDesc.addEventHandler("onloadcompleted",this.wevReqDesc_onloadcompleted,this);
            this.btnY.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnN.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnHelp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsSrBaseInfo.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0000_D04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
