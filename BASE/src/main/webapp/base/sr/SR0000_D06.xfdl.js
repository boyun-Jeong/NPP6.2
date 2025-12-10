(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0000_D06");
            this.set_titletext("요청정보-사업계획신청 기본");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,313);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ROWFLAG\" type=\"string\" size=\"32\"/><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LM_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_POSS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"E_DOCU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IS_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_TMPLAT_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqTmplatMtHelp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmplatList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg01_00","80.00%","34",null,null,"0","179",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg04","0","133",null,"180","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg03","0","100",null,"34","20%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02","0","67",null,"34","20%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","34",null,"34","20%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId","0","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("요청서번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt","25.00%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel05","0","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel06","25.00%","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("서비스구분");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","0","100","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("사업계획명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqReason","0","133","114","180",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사업내용\r\n(추진목적 및\r\n기대효과 기재 必)");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaContents","stcReqReason:5","138",null,"170","5",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("사업내용;NULL");
            obj.set_wordWrap("char");
            obj.set_maxlength("1200");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5.00","39",null,"24","stcReqDt:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSvcNm","stcLabel05:5","72",null,"24","stcLabel06:5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm00","50.00%","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("희망부서");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcLabel06:5","72",null,"24","stcReqUserNm00:5",null,null,null,null,null,this);
            obj.set_taborder("10");
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
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqDt","stcReqDt:5","39","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_validation("신청일자;NULL");
            obj.set_validationGroup("group01");
            obj.set_cssclass("cal_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_text("    -  -      ");
            this.addChild(obj.name, obj);

            obj = new Static("stcRegDeptNm00","50%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("진행단계");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDesc","75.00%","34","114",null,null,"179",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("작성요령");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWfProcNm","stcRegDeptNm00:5.00","39",null,"24","stcReqDesc:5",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnY","stcInfoTitle:5.00","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Y");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnN","btnY:5.00","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("N");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm","50%","100","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm","stcReqUserNm:5.00","105",null,"24","stcReqDesc:5",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:5","105",null,"24","stcReqUserNm:5",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_validationGroup("group01");
            obj.set_validation("사업계획명;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.set_isChgLang("false");
            obj.set_maxlength("130");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm00","759.00","242",null,"24","325",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel06_00","50.00%","237","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("전자결재 문서");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divRefReqId","75.00%","237",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcRefReqId","0","0","114","34",null,null,null,null,null,null,this.divRefReqId.form);
            obj.set_taborder("0");
            obj.set_text("참조 요청서");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divRefReqId.addChild(obj.name, obj);

            obj = new Div("divForm","119.00","5",null,"24","5",null,null,null,null,null,this.divRefReqId.form);
            obj.set_taborder("1");
            obj.getSetter("skipComp").set("Y");
            this.divRefReqId.addChild(obj.name, obj);

            obj = new Button("btnSearchReqPop",null,"0","24","24","24",null,null,null,null,null,this.divRefReqId.form.divForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SearchIcon");
            this.divRefReqId.form.divForm.addChild(obj.name, obj);

            obj = new Button("btnReqClear",null,"0","24","24","1",null,null,null,null,null,this.divRefReqId.form.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ClearIcon");
            this.divRefReqId.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtRefReqId","0","0",null,"24","47",null,null,null,null,null,this.divRefReqId.form.divForm.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.divRefReqId.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtReqDept","stcReqUserNm00:5","72",null,"24","stcReqDesc:5",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new WebView("wevReqDesc","stcReqDesc:5","40",null,null,"5","185",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp","stcReqDesc:-64","101","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_primary_save");
            obj.getSetter("skipComp").set("Y");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRefReqId.form.divForm.form
            obj = new Layout("default","",0,0,this.divRefReqId.form.divForm.form,function(p){});
            this.divRefReqId.form.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRefReqId.form
            obj = new Layout("default","",0,0,this.divRefReqId.form,function(p){});
            this.divRefReqId.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,313,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("srCatType","edtSvcNm","value","dsSrBaseInfo","SVC_NM_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("srCatName","edtReqTmplatNm","value","dsSrBaseInfo","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("recUserNm","txRecUser","value","dtSrReqInfo","recUserNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("reqSayu","txaContents","value","dsSrBaseInfo","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","calReqDt","value","dsSrBaseInfo","REQ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtReqTitle","value","dsSrBaseInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtReqUserNm","value","dsSrBaseInfo","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtReqTmplatNm00","value","dsSrBaseInfo","REQ_TMPLAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","stcReqUserNm00","value","dsSrBaseInfo","REQ_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtReqDept","value","dsSrBaseInfo","REQ_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divRefReqId.form.divForm.form.btnSearchReqPop","value","dsSrBaseInfo","REF_REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0000_D06.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0110_D
        * 화면(명)		︰ 요청서 등록
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
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
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['SVC_CD', 'CHM', 'YN_CD']	// 조회할 상위코드
        		,codeDiv: ['CMM_CD', 'CMM_CD']			// 조회할 코드의 업무구분
        		,optStr	: ['ALL', 'ALL']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y', 'Y']					// 사용여부
        		,filter	: ['', '']						// filterStr
        		,objDs	: [this.dsSvcCd, this.dsYnCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
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
        				if(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0,'SVC_CD')))
        				{
        					if(this.dsSrBaseInfo.getColumn(0,'SVC_CD') =='CHM')
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

        				this.edtWfProcNm.set_value(
        					this.dsSrBaseInfo.getColumn(0, "WF_PROC_NM") +
        					(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM")) ? " [" + this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM") + "]" : "")
        				);
        			}

        // 			if(this.dsSrBaseInfo.getColumn(0, "REQ_REF_YN") == "Y")
        // 			{
        // 				this.divRefReqId.set_visible(true);
        // 				this.edtReqTitle.set_right("divRefReqId:5");
        // 			}
        // 			else
        // 			{
        // 				this.divRefReqId.set_visible(false);
        // 				this.edtReqTitle.set_right(5);
        // 			}

        // 			if(this.dsSrBaseInfo.getColumn(0, "REQ_REF_YN") == "Y")
        // 			{
        // 				Ex.util.getWfReqTmplatListDs(this, "dsTmplatList");
        //
        // 				//참조요청서
        // 				this.divRefReqId.set_visible(true);
        //
        // 				if( !Ex.isEmpty(this.reqInfo.REF_REQ_ID) )
        // 				{
        // 					this.dsSrBaseInfo.setColumn(0, "REF_REQ_ID", this.reqInfo.REF_REQ_ID);
        // 				}
        // 			}
        // 			else
        // 			{
        // 				this.divRefReqId.set_enable(false);
        // 				this.divRefReqId.form.divForm.set_enable(false);
        // 			}

        			this.dsSrBaseInfo.set_updatecontrol(true);
        			this.dsSrBaseInfo.set_enableevent(true);

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
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(Ex.isEmpty(varValue))
        		return;

        	var tempDs = new Dataset();
        	tempDs.loadXML(varValue);

        	switch(pID)
        	{

        		case "selDept" :
        			var DEPT_CD	= tempDs.getColumn(0, 'DEPT_CD');
        			var DEPT_NM	= tempDs.getColumn(0, 'DEPT_NM');
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_DEPT_CD",DEPT_CD);
        			this.dsSrBaseInfo.setColumn(0,"PRE_CONF_DEPT_NM",DEPT_NM);

        			break;

        		case "selRefNo" :

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
        		case "AlertReqTitleI" :	//임시저장
        			this.edtReqTitle.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();

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
        /*		if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "PRE_CONF_DEPT_NM")) )
        		{
        			var param = {id : "pAlertDeptI", msg : "추진부서는 필수입력 항목입니다."};
        			Ex.core.alert(this, param);
        			//this.btnSearchPop_Dept.click();
        			return false;
        		}
        */
        		return Ex.util.checkValidate(this, "group01");
        	}
        	else
        	{
        		if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "TITLE")) )
        		{
        			var param = {
        				  id	: "AlertReqTitleI"				//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "11001"						//메시지 내용
        				, arrparam : [this.stcReqTitle.text]	//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	return true;
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
        			this.divRefReqId.set_visible(true);
        			this.edtReqTitle.set_right("divRefReqId:5");
        			break;

        		case "btnN" :
        			this.divRefReqId.set_visible(false);
        			this.edtReqTitle.set_right(5);
        			break;
        	}
        }
        this.fnCommbtnPopOnclick = function(obj,e)
        {
        	var popId	= '';
        	var url		= '';
        	var oParam	= {};
        	var pPopType= '';
        	switch(obj.name)
        	{

        		case "btnSearchPop_Dept" :		// 부서 선택
        			popId	= 'selDept';
        			url		= 'fomm::FOMM0000_P04.xfdl';
        			oParam	= {
        				title		: Ex.core.word('추진부서') + ' ' + Ex.core.word('선택')
        			  , pSelType	: 'S'
        			};
        			break;
        	}

        	Ex.core.popup(
        		this,
        		popId,
        		url,           		// <--- 팝업창 오픈 Url
        		oParam,
        		"autosize"
        	);
        };
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stcInfoTitle.addEventHandler("onrbuttonup",this.stOonRbuttonUp,this);
            this.calReqDt.addEventHandler("onchanged",this.doChgWishDt,this);
            this.btnY.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnN.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRefReqId.form.divForm.form.btnSearchReqPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRefReqId.form.divForm.form.btnReqClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.wevReqDesc.addEventHandler("onloadcompleted",this.wevReqDesc_onloadcompleted,this);
            this.btnHelp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsSrBaseInfo.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0000_D06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
