(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0000_D12");
            this.set_titletext("요청정보-NH IT자산 기본");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PRE_CONF_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LM_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"PROC_COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_ID\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/><Column id=\"JOB_REQ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_DTL_CD\" type=\"string\" size=\"32\"/><Column id=\"LM_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"SVC_NM_INFO\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"JOB_REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"PRE_CONF_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LM_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"REQ_TMPLAT_NM\" type=\"string\" size=\"32\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"datetime\" size=\"17\"/><Column id=\"REQ_DESC\" type=\"string\" size=\"32\"/><Column id=\"REQ_WISH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"datetime\" size=\"17\"/><Column id=\"SVC_CD\" type=\"string\" size=\"32\"/><Column id=\"LMID\" type=\"string\" size=\"32\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IS_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_TMPLAT_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHour", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0000</Col><Col id=\"DATA\">00</Col></Row><Row><Col id=\"CODE\">0100</Col><Col id=\"DATA\">01</Col></Row><Row><Col id=\"CODE\">0200</Col><Col id=\"DATA\">02</Col></Row><Row><Col id=\"CODE\">0300</Col><Col id=\"DATA\">03</Col></Row><Row><Col id=\"CODE\">0400</Col><Col id=\"DATA\">04</Col></Row><Row><Col id=\"CODE\">0500</Col><Col id=\"DATA\">05</Col></Row><Row><Col id=\"CODE\">0600</Col><Col id=\"DATA\">06</Col></Row><Row><Col id=\"CODE\">0700</Col><Col id=\"DATA\">07</Col></Row><Row><Col id=\"CODE\">0800</Col><Col id=\"DATA\">08</Col></Row><Row><Col id=\"CODE\">0900</Col><Col id=\"DATA\">09</Col></Row><Row><Col id=\"CODE\">1000</Col><Col id=\"DATA\">10</Col></Row><Row><Col id=\"CODE\">1100</Col><Col id=\"DATA\">11</Col></Row><Row><Col id=\"CODE\">1200</Col><Col id=\"DATA\">12</Col></Row><Row><Col id=\"CODE\">1300</Col><Col id=\"DATA\">13</Col></Row><Row><Col id=\"CODE\">1400</Col><Col id=\"DATA\">14</Col></Row><Row><Col id=\"CODE\">1500</Col><Col id=\"DATA\">15</Col></Row><Row><Col id=\"CODE\">1600</Col><Col id=\"DATA\">16</Col></Row><Row><Col id=\"CODE\">1700</Col><Col id=\"DATA\">17</Col></Row><Row><Col id=\"CODE\">1800</Col><Col id=\"DATA\">18</Col></Row><Row><Col id=\"CODE\">1900</Col><Col id=\"DATA\">19</Col></Row><Row><Col id=\"CODE\">2000</Col><Col id=\"DATA\">20</Col></Row><Row><Col id=\"CODE\">2100</Col><Col id=\"DATA\">21</Col></Row><Row><Col id=\"CODE\">2200</Col><Col id=\"DATA\">22</Col></Row><Row><Col id=\"CODE\">2300</Col><Col id=\"DATA\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqTmplatMtHelp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpmu2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg04","0","133",null,"67","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg03","0","100",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02","0","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqId","0","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("요청ID");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqUserNm","25.00%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDt","50.00%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnReqUserDetail",null,"39","45","24","stcReqDt:5",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel05","0","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("요청 분류");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcWishComp","50%","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("희망완료일시");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02_00","75%","67",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcUpmuCd","75%","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWishCompTm",null,"72","120","24","stcUpmuCd:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsHour");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("희망완료시간;NULL");
            obj.set_validationGroup("group01");
            obj.set_value("0000");
            obj.set_index("0");
            obj.set_text("00시");
            this.addChild(obj.name, obj);

            obj = new Calendar("calWishCompDt","stcWishComp:5","72",null,"24","cboWishCompTm:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_normal");
            obj.set_validation("희망완료일;NULL");
            obj.set_validationGroup("group01");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel06","25.00%","67","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("요청서명");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqTitle","0","100","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("요청제목");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTitle","stcReqTitle:5.00","105",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_validationGroup("group01");
            obj.set_validation("요청제목;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.set_isChgLang("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDesc","50%","133","114","67",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("작성요령");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqReason","0","133","114","67",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("요청사유");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaContents","stcReqReason:5","138",null,"58","stcReqDesc:5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("txa_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("요청사유;NULL");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5","39",null,"24","stcReqUserNm:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSvcNm","stcLabel05:5","72",null,"24","stcLabel06:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatNm","stcLabel06:5","72",null,"24","stcWishComp:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calReqDt","stcReqDt:5","39",null,"24","cboWishCompTm:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_validation("요청일자;NULL");
            obj.set_validationGroup("group01");
            obj.set_cssclass("cal_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new WebView("wevReqDesc","stcReqDesc:5","138",null,"58","5",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("wv_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReqUserNm","stcReqUserNm:5","39",null,"24","stcReqDt:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Static("stcRegDeptNm00","75.00%","34","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("진행단계 및 상태");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWfProcNm","stcRegDeptNm00:5","39",null,"24","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Button("btnY","stcInfoTitle:5.00","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Y");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnN","btnY:5.00","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("N");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp","stcReqDesc:-109.00","stcReqDesc:-25","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_primary_save");
            obj.getSetter("skipComp").set("Y");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu2",null,"72","130","24","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("업무분류(중);NULL");
            obj.set_innerdataset("dsUpmu2");
            obj.set_type("filterlike");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUpmu1","stcUpmuCd:5.00","72",null,"24","cboUpmu2:5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("업무분류(대);NULL");
            obj.set_innerdataset("dsUpmu1");
            obj.set_type("filterlike");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("reqUserNmView","edtReqUserNm","value","dsSrBaseInfo","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("srCatType","edtSvcNm","value","dsSrBaseInfo","SVC_NM_INFO");
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

            obj = new BindItem("item2","calWishCompDt","value","dsSrBaseInfo","REQ_WISH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboWishCompTm","value","dsSrBaseInfo","REQ_WISH_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboUpmu1","value","dsSrBaseInfo","UPMU_ID1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboUpmu2","value","dsSrBaseInfo","UPMU_ID2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0000_D12.xfdl", function() {
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

        	rowPos = this.dsHour.insertRow(0);
        	this.dsHour.setColumn(rowPos, 'CODE', '');
        	this.dsHour.setColumn(rowPos, 'DATA', '- ' + Ex.core.word("선택") + ' -');
        	this.cboWishCompTm.set_index(0);
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
        		upCmmCd : ['SVC_CD',		'BIZC0000']	// 조회할 상위코드
        		,codeDiv: ['CMM_CD', 		'NHFIRE']			// 조회할 코드의 업무구분
        		,optStr	: ['ALL', 			'SEL']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y', 			'Y']					// 사용여부
        		,filter	: ['', 				'']						// filterStr
        		,objDs	: [this.dsSvcCd,	this.dsUpmu1]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        	for(var i = 0; i < this.dsUpmu1.rowcount; i++)
        	{
        		var UP_CMM_CD = this.dsUpmu1.getColumn(i, 'CMM_CD');
        		if( Ex.isEmpty(UP_CMM_CD) )
        			continue;

        		var dsTemp = new Dataset();
        		var oParam = {
        			upCmmCd : [UP_CMM_CD]	// 조회할 상위코드
        			,codeDiv: ['NHFIRE']			// 조회할 코드의 업무구분
        			,optStr	: ['']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        			,useYn	: ['Y']					// 사용여부
        			,filter	: ['']						// filterStr
        			,objDs	: [dsTemp]	// copy dataset
        		}
        		Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);

        		this.dsUpmu2.appendData(dsTemp, true);
        	}
        	this.dsUpmu2.setColumn(this.dsUpmu2.setInsertRow(0), 'CMM_CD_NM', '- 선택 -');
        	var UP_CMM_CD = this.dsSrBaseInfo.getColumn(0, 'UPMU_ID1');
        	this.dsUpmu2.set_filterstr('Ex.isEmpty(CMM_CD) || UP_CMM_CD == "' + UP_CMM_CD + '"');
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

        	//trace("SR0000_D02 this.fnCallback() sSvcId : " + sSvcId);

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select01" :
        			this.dsSrBaseInfo.set_enableevent(false);
        			this.dsSrBaseInfo.set_updatecontrol(false);

        			if(this.dsSrBaseInfo.getColumn(0, "ROWFLAG") == "I")
        			{
        				this.dsSrBaseInfo.setColumn(0, "REQ_USER_ID", Ex.util.getSession('gvUserId'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_USER_NM", Ex.util.getSession('gvUserNm'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_DEPT_NM", Ex.util.getSession('gvDeptNm'));
        				this.dsSrBaseInfo.setColumn(0, "REQ_WISH_DT", Ex.util.addDate(Ex.util.today(), 14));
        				this.dsSrBaseInfo.setColumn(0, 'REQ_WISH_TIME', '1800');


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

        				this.edtWfProcNm.set_value(
        					this.dsSrBaseInfo.getColumn(0, "WF_PROC_NM") +
        					(!Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM")) ? " [" + this.dsSrBaseInfo.getColumn(0, "REQ_STAT_NM") + "]" : "")
        				);
        			}

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
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue) return;

        	switch(pID)
        	{
        		case "" :
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
        	this.fnGetCmmCd();

        	Ex.util.setAutoComplete(this.edtReqTitle);
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsSrBaseInfo);
        }

        this.fnSaveCheck = function(isReg)
        {
        	//trace("SR0000_D02 this.fnSaveCheck() isReg : " + isReg);
        	if(isReg)
        	{
        		return Ex.util.checkValidate(this, "group01");
        	}
        	else
        	{
        		if( Ex.isEmpty(this.dsSrBaseInfo.getColumn(0, "TITLE")) )
        		{
        			var param = {id : "pAlertTitleI", msg : "요청제목은(는) 필수입력 항목입니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}

        	Ex.util.setAutoComplete(this.edtReqTitle, this.edtReqTitle.value);
        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
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
        					title		: "요청서 선택",
        					pSelType	: "S",

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

        this.wevReqDesc_onloadcompleted = function(obj,e)
        {
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
        this.stcInfoTitle_onclick = function(obj,e)
        {
        	if(e.ctrlkey && e.shiftkey)
        	{
        		for(var k in this.reqInfo) {
        			trace('		this.reqInfo[' + k + ']\t :: ' + this.reqInfo[k]);
        		}
        	}
        };

        this.cboUpmu1_onitemchanged = function(obj,e)
        {
        	if( Ex.isEmpty(e.postvalue) ) {
        		this.dsUpmu2.set_filterstr('Ex.isEmpty(CMM_CD)');
        	}
        	else {
        		this.dsUpmu2.set_filterstr('Ex.isEmpty(CMM_CD) || UP_CMM_CD =="' + e.postvalue + '"');
        	}

        	if( e.prevalue != e.postvalue)
        		this.dsSrBaseInfo.setColumn(0, 'UPMU_ID2', null);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.SR0000_D02_oninit,this);
            this.cboWishCompTm.addEventHandler("onitemchanged",this.doChgWishTm,this);
            this.calWishCompDt.addEventHandler("onchanged",this.doChgWishDt,this);
            this.stcInfoTitle.addEventHandler("onrbuttonup",this.stOonRbuttonUp,this);
            this.stcInfoTitle.addEventHandler("onclick",this.stcInfoTitle_onclick,this);
            this.calReqDt.addEventHandler("onchanged",this.doChgWishDt,this);
            this.wevReqDesc.addEventHandler("onloadcompleted",this.wevReqDesc_onloadcompleted,this);
            this.btnY.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnN.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnHelp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.cboUpmu1.addEventHandler("onitemchanged",this.cboUpmu1_onitemchanged,this);
            this.dsSrBaseInfo.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0000_D12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
