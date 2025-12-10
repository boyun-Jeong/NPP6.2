(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1400_W");
            this.set_titletext("난이도 관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrlMng", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"10\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"10\"/><Column id=\"SATI_QST_ID\" type=\"STRING\" size=\"10\"/><Column id=\"APP_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TITLE\" type=\"STRING\" size=\"200\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"9\"/><Column id=\"FRDT\" type=\"STRING\" size=\"14\"/><Column id=\"LMID\" type=\"STRING\" size=\"9\"/><Column id=\"LMDT\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrlItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"10\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"10\"/><Column id=\"SATI_QST_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_DESC\" type=\"STRING\" size=\"200\"/><Column id=\"QST_ITEM_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_RSP1\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP2\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP3\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP4\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP5\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_GRD1\" type=\"STRING\" size=\"3\"/><Column id=\"QST_ITEM_GRD2\" type=\"STRING\" size=\"3\"/><Column id=\"QST_ITEM_GRD3\" type=\"STRING\" size=\"3\"/><Column id=\"QST_ITEM_GRD4\" type=\"STRING\" size=\"3\"/><Column id=\"QST_ITEM_GRD5\" type=\"STRING\" size=\"3\"/><Column id=\"FRID\" type=\"STRING\" size=\"9\"/><Column id=\"FRDT\" type=\"STRING\" size=\"14\"/><Column id=\"LMID\" type=\"STRING\" size=\"9\"/><Column id=\"LMDT\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRL_QST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">NONE</Col><Col id=\"CODE\">N</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">33</Col></Row><Row><Col id=\"CODE\">32</Col><Col id=\"NAME\">32</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">31</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">30</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">29</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"NAME\">28</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"NAME\">27</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"NAME\">26</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">25</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">24</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">9</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">8</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">7</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">6</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">5</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">4</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">3</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">2</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">1</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataItem", this);
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
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","40%",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divUp","0","70",null,null,"0","Static00_00:0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","0","34",null,null,"0","0",null,null,null,null,this.divUp.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSrlMng");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"난이도 ID\"/><Cell col=\"3\" cssclass=\"grdHCell_WF_essential\" text=\"적용일자\"/><Cell col=\"4\" text=\"최상\"/><Cell col=\"5\" text=\"상\"/><Cell col=\"6\" text=\"중\"/><Cell col=\"7\" text=\"하\"/><Cell col=\"8\" text=\"단순\"/><Cell col=\"9\" cssclass=\"grdHCell_WF_essential\" text=\"사용여부\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:SRL_QST_ID\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:APP_DATE\" calendardateformat=\"yyyy-MM-dd\" validation=\"적용일자;NULL|DATETIME :YYYYMMDD\"/><Cell col=\"4\" text=\"bind:SCORE_LV1\" edittype=\"normal\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\"/><Cell col=\"5\" text=\"bind:SCORE_LV2\" edittype=\"normal\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\"/><Cell col=\"6\" text=\"bind:SCORE_LV3\" edittype=\"normal\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\"/><Cell col=\"7\" text=\"bind:SCORE_LV4\" edittype=\"normal\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\"/><Cell col=\"8\" text=\"bind:SCORE_LV5\" edittype=\"normal\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\"/><Cell col=\"9\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:USE_YN\" combodataset=\"dsUseYnGrid\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodisplayrowcount=\"0\" validation=\"사용여부;NULL\"/><Cell col=\"10\" edittype=\"text\" style=\"align:left;\" text=\"bind:BIGO\" textAlign=\"left\" editmaxlength=\"500\"/></Band></Format></Formats>");
            this.divUp.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","0","110","24",null,null,null,null,null,null,this.divUp.form);
            obj.set_taborder("1");
            obj.set_text("난이도 관리");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divUp.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","24",null,"10","0",null,null,null,null,null,this.divUp.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divUp.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn",null,"0","250","24","0",null,null,null,null,null,this.divUp.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divUp.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divUp.form.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divUp.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divUp.form.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divUp.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:5","0","60","24",null,null,null,null,null,null,this.divUp.form);
            obj.set_taborder("4");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsSrlMng");
            this.divUp.addChild(obj.name, obj);

            obj = new Div("divDown","0","Static00_00:0",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","0","34",null,null,"0","0",null,null,null,null,this.divDown.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSrlItem");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"274\"/><Column size=\"78\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"순서\"/><Cell col=\"3\" cssclass=\"grdHCell_WF_essential\" text=\"난이도 항목내용\"/><Cell col=\"4\" cssclass=\"grdHCell_WF_essential\" text=\"항목유형\"/><Cell col=\"5\" text=\"점수1\"/><Cell col=\"6\" text=\"점수2\"/><Cell col=\"7\" text=\"점수3\"/><Cell col=\"8\" text=\"점수4\"/><Cell col=\"9\" text=\"점수5\"/><Cell col=\"10\" text=\"점수6\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:SEQ\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:QST_ITEM_DESC\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:QST_ITEM_TYPE\" combodataset=\"dsCommCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" validation=\"항목유형;NULL\"/><Cell col=\"5\" text=\"bind:QST_ITEM_GRD1\" combodataset=\"dsGrd\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"6\" displaytype=\"combotext\" edittype=\"expr:QST_ITEM_TYPE == &apos;02&apos; ? &apos;none&apos; : &apos;combo&apos;\" text=\"bind:QST_ITEM_GRD2\" combodataset=\"dsGrd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" displaytype=\"combotext\" edittype=\"expr:QST_ITEM_TYPE == &apos;02&apos; ? &apos;none&apos; : &apos;combo&apos;\" text=\"bind:QST_ITEM_GRD3\" combodataset=\"dsGrd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" displaytype=\"combotext\" edittype=\"expr:QST_ITEM_TYPE == &apos;02&apos; ? &apos;none&apos; : &apos;combo&apos;\" text=\"bind:QST_ITEM_GRD4\" combodataset=\"dsGrd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"9\" displaytype=\"combotext\" edittype=\"expr:QST_ITEM_TYPE == &apos;02&apos; ? &apos;none&apos; : &apos;combo&apos;\" text=\"bind:QST_ITEM_GRD5\" combodataset=\"dsGrd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"10\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:QST_ITEM_GRD6\" combodataset=\"dsGrd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(QST_ITEM_GRD1)&quot;)\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","0","0","110","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("1");
            obj.set_text("난이도 항목");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divDown.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","24",null,"10","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divDown.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn",null,"0","250","24","0",null,null,null,null,null,this.divDown.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divDown.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divDown.form.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divDown.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divDown.form.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divDown.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Static("stcCnt","stcTreeTitle:5","0","60","24",null,null,null,null,null,null,this.divDown.form);
            obj.set_taborder("4");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsSrlItem");
            this.divDown.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUp.form.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divUp.form.divGrdMtTopBtn.form,function(p){});
            this.divUp.form.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUp.form
            obj = new Layout("default","",0,0,this.divUp.form,function(p){});
            this.divUp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.divDown.form.divGrdMtTopBtn.form,function(p){});
            this.divDown.form.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form
            obj = new Layout("default","",0,0,this.divDown.form,function(p){});
            this.divDown.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1400_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM1400_W
        * 화면(명)		︰ 난이도 관리
        * 메뉴(경로)	︰ 관리자 > 만족도관리 > 난이도 관리
        * 화면 설명	︰ 난이도 관리
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.24
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.24	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.selectRow;	//저장 전 마지막 로우 위치를 보관했다가 저장 후 조회시 셋팅하기 위한 변수
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
        };

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        };

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {

        };

        // 변경 행 확인
        this.fnSearchM = function()
        {
        	if( Ex.util.isUpdated(this.dsSatiqstMng) || Ex.util.isUpdated(this.dsSatiQstItem) )
        	{
        		var param = {	id : "searchConfirmM"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}
        	this.fnSearch01();
        };

        // 조회
        this.fnSearch01 = function()
        {
        	// transaction
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1400W/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrlMng=dsSrlMng";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // 변경 행 확인
        this.fnSearchD = function()
        {
        	if( Ex.util.isUpdated(this.dsSatiQstItem) )
        	{
        		var param = {	id : "searchConfirmD"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}
        	this.fnSearch02();
        };

        // 조회
        this.fnSearch02 = function()
        {
        	//this.dsCond.setColumn(0, "SRL_QST_ID", this.dsSrlMng.getColumn(this.dsSrlMng.rowposition, "SRL_QST_ID"));

        	// transaction
        	var sTranId = "select02";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1400W/select02";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrlItem=dsSrlItem";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // 저장
        this.fnSave = function()
        {
        	//this.selectRow = this.dsSatiqstMng.rowposition;
        	this.dsData.clearData();
        	this.dsDataItem.clearData();

        	this.selectRow = this.dsSrlMng.rowposition;

            this.dsSrlMng.enableevent = false;
        	this.dsSrlMng.filter("!Ex.isEmpty(ROWFLAG)");
        	this.dsData.copyData(this.dsSrlMng,true);
        	this.dsSrlMng.filter("");
        	this.dsSrlMng.enableevent = true;

        	this.dsSrlItem.enableevent = false;
        	this.dsSrlItem.filter("!Ex.isEmpty(ROWFLAG)");
        	this.dsDataItem.copyData(this.dsSrlItem,true);
        	this.dsSrlItem.filter("");
        	this.dsSrlItem.enableevent = true;

        	for(var i=0;i<this.dsDataItem.rowcount;i++) {
        		for(var j=1;j<=9;j++) {
        			if(this.dsDataItem.getColumn(i,"QST_ITEM_GRD"+j)=='N')
        			{
        				this.dsDataItem.setColumn(i,"QST_ITEM_GRD"+j,'0');
        			}
        		}
        	}

        	var sTranId = "save01";
            var sService = "FOMM1400W/save01";
            var sInDs = "dsCond=dsCond dsData=dsData dsDataItem=dsDataItem";
            var sOutDs = "dsSrlMng=dsSrlMng";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // MNG 삭제
        this.fnDelMng = function()
        {
        	this.dsCond.setColumn(0, "SRL_QST_ID", this.dsSrlMng.getColumn(this.dsSrlMng.rowposition, "SRL_QST_ID"));

        	// transaction
        	var sTranId = "delMng";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1400W/delMng";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSrlMng=dsSrlMng";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	if(objDs.name == "dsSrlItem") {
        		objDs.set_enableevent(false);
        		objDs.set_filterstr("CHK=='1'");

        		for(var i = objDs.rowcount-1; i >= 0; i--)
        			objDs.setDeleteRow(i);

        		objDs.set_filterstr("");
        		objDs.set_enableevent(true);
        	} else if(objDs.name == "dsSrlMng") {
        		objDs.set_enableevent(false);
        		objDs.setDeleteRow(objDs.rowposition);
        		objDs.set_enableevent(true);

        		if(objDs.getColumn(objDs.rowposition,"ROWFLAG")=="D") {
        			this.dsSrlItem.clearData();
        		} else {
        			this.fnSearch02();
        		}
        	}
        };

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
        			//this.divUp.form.grdMainList.setCellProperty("Head", this.divUp.form.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			//this.divDown.form.grdMainList.setCellProperty("Head", this.divDown.form.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			//this.divUp.form.grdMainList.setCellProperty("Head", this.divUp.form.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			//this.divDown.form.grdMainList.setCellProperty("Head", this.divDown.form.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			this.dsSrlMng.set_rowposition(this.selectRow);
        			this.selectRow = -1;
        			break;

        		case "select02" :
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        };

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "searchConfirmM" :
        			this.fnSearch01();
        			break;

        		case "searchConfirmD" :
        			this.fnSearch02();
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.dsSrlMng.set_rowposition(this.nSelRow);
        			break;
        	}
        };

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.divUp.form.grdMainList.displayRowType();
        	this.divDown.form.grdMainList.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divUp.form.divGrdMtTopBtn.form.btnAdd];		// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divUp.form.divGrdMtTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        	arrBtn = [this.divDown.form.divGrdMtTopBtn.form.btnAdd];		// 쓰기	,	this.divGrdDtTopBtn.form.btnAddDt
        	Ex.util.setBtnVisible(this, 'write', arrBtn);
        		arrBtn = [this.divDown.form.divGrdMtTopBtn.form.btnDelete];	// 삭제
        	Ex.util.setBtnVisible(this, 'delete', arrBtn);

        	arrBtn = [this.divGrdBotBtn.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divUp.form.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divDown.form.divGrdMtTopBtn, 'right', true);
        	Ex.util.setBtnAlign(this.divGrdBotBtn, 'right', true);

        	this.fnSearchReset();	// 검색조건 초기화

        	this.fnSearchM();		// 조회
        };

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['USE_CD',		'USE_CD'			]	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',		'CMM_CD'			]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL',			'SEL'				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y'					]	// 사용여부
        		,filter	: ['',				''					]	// filterStr
        		,objDs	: [this.dsUseYn,	this.dsUseYnGrid	]	// copy dataset
        	};
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util

        	var aRow = this.dsCommCd.addRow();
        	this.dsCommCd.setColumn(aRow, "CODE", "01");
        	this.dsCommCd.setColumn(aRow, "NAME", Ex.core.word("선택형"));

        	aRow = this.dsCommCd.addRow();
        	this.dsCommCd.setColumn(aRow, "CODE", "02");
        	this.dsCommCd.setColumn(aRow, "NAME", Ex.core.word("입력형"));

        	/*
        	var addCnt = 34;
        	this.dsGrd.addRow();
        	this.dsGrd.setColumn(0,"CODE",'N');
        	this.dsGrd.setColumn(0,"NAME",'NONE');

        	for(var i=addCnt-1;i>=0;i--) {
        		var nRow = this.dsGrd.addRow();
        		this.dsGrd.setColumn(nRow,"CODE",i);
        		this.dsGrd.setColumn(nRow,"NAME",i);
        	}
        	*/

        };

        this.fnCheckValidate = function()
        {

        	return true;
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var pDivId = obj.parent.parent.parent.parent.id;

        	switch(obj.name)
        	{
        		case 'btnSearch' :	// 조회
        			this.fnSearchM();
        			break;

        		case 'btnSearchReset' :	// 조회조건 초기화
        			this.fnSearchReset();
        			break;

        		case 'btnAdd' :
        			if(pDivId == "divUp")
        			{
        				if( Ex.util.isUpdated(this.dsSrlItem) || Ex.util.isUpdated(this.dsSrlMng))
        				{
        					var param = {	id : "addAlert"
        						, msg :  "변경된 내용이 있습니다.\n변경된 내용을 저장 또는 삭제 후 추가 가능합니다."
        						, arrparam : []
        						, msgtype : "I"};
        					Ex.core.alert(this, param);
        					return;
        				}

        				var rowPos = this.dsSrlMng.setAddRow();
        				this.divUp.form.grdMainList.showEditor(true);			// 그리드 편집모드로 변경
        				this.dsSrlMng.setColumn(rowPos, "USE_YN", 'Y');
        			}
        			else if(pDivId == "divDown")
        			{
        				if(this.dsSrlMng.rowposition < 0) {
        					return false;
        				}

        				if(this.dsSrlMng.getColumn(this.dsSrlMng.rowposition,"ROWFLAG")=="I") {
        					var param = {	id : "addAlert"
        						, msg :  "신규 추가한 난이도 관리 내용을 저장후 추가하세요."
        						, arrparam : []
        						, msgtype : "I"};
        					Ex.core.alert(this, param);
        					return;
        				}

        				var strSrlQstId = this.dsSrlMng.getColumn(this.dsSrlMng.rowposition, "SRL_QST_ID");

        				var nRow = this.dsSrlItem.setAddRow();

        				this.dsSrlItem.setColumn(nRow, "SRL_QST_ID", strSrlQstId);
        				this.dsSrlItem.setColumn(nRow, "QST_ITEM_TYPE", "01");
        				this.dsSrlItem.setColumn(nRow, "QST_ITEM_GRD6", "0");
            			this.divDown.form.grdMainList.showEditor(true);			// 그리드 편집모드로 변경

        			}
        			break;

        		case 'btnDelete' :
        			if(pDivId == "divUp")
        			{
        				this.fnDelete(this.dsSrlMng);
        			}
        			else if(pDivId == "divDown")
        			{
        				this.fnDelete(this.dsSrlItem);
        			}
        			break;

        		case 'btnSave' : 	// 저장
        			// validation
        			if( !this.divUp.form.grdMainList.checkValidate() ) {
        				return false;
        			}

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
        	}
        };

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')	this.fnSearch();
        };

        this.dsCanRowposChange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.dsSrlItem) )
        	{
        		if( !this.rowChangeFlag ) {
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {	id : "rowposChangeConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}
        	return true;
        };

        this.grdOnCellClick = function(obj,e)
        {
        	obj.dropdownCombo();
        	obj.dropdownCalendar();
        	obj.showEditor();
        };

        this.dsOnRowposChanged = function(obj,e)
        {
        	this.dsSrlItem.clearData();

        	var srlQstId = obj.getColumn(e.newrow, 'SRL_QST_ID') || '';

        	// Grid title 처리
        	//this.stcGrdTitle.set_text('[' + msgNo + '] ' + Ex.core.word("언어코드별 단어"));

        	var rowFlag = obj.getColumn(e.newrow, "ROWFLAG");
        	//trace("obj.id : " + obj.id + " e.newrow : " + e.newrow + " rowFlag : " + rowFlag);

        	if(rowFlag != "I")
        	{
        		this.dsCond.setColumn(0, 'SRL_QST_ID', srlQstId);
        		if(obj.getColumn(e.newrow, "ROWFLAG") != "D")	this.fnSearch02();
        	}

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };

        // 공통 oncloumnchanged event : dataset
        this.dsOnColumnChanged = function(obj,e)
        {
        	if(obj.name == "dsSrlItem") {
        		if(e.columnid.indexOf("QST_ITEM_TYPE")!=-1) {
        			if(e.newvalue == '02') {
        				for(var i = 6; i > 0;i--){
        					obj.setColumn(e.row, "QST_ITEM_GRD"+i, null);
        				}
        			}
        		}

        		if(e.columnid.indexOf("QST_ITEM_GRD")!=-1) {
        			if(e.newvalue == 'N') {
        				//obj.setColumn(e.row, e.columnid, null);
        			}
        		}
        	}

        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUp.form.grdMainList.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divUp.form.divGrdMtTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUp.form.divGrdMtTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.grdMainList.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.divDown.form.divGrdMtTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divDown.form.divGrdMtTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsSrlMng.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSrlMng.addEventHandler("canrowposchange",this.dsCanRowposChange,this);
            this.dsSrlMng.addEventHandler("onrowposchanged",this.dsOnRowposChanged,this);
            this.dsSrlItem.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM1400_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
