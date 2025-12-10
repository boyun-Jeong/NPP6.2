(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0700_P02");
            this.set_titletext("표준체크리스트 등록/수정(팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1012,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChklstStepCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChklstTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChklstCalCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommChklst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"10\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"10\"/><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_STEP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_MAX_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_CAL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommChklstGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"10\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"10\"/><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLSTGRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRD_FR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"GRD_TO_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBackTop","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackLeft","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","20","20",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcCompanyId","20","20","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("체크리스트 명");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02","20","53",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcCompanyNm","20","53","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("개발단계");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcCorpNo","33%","53","124","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("테스크유형");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackRight",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCompanyNm","155","25",null,"24","stcBackRight:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_normal");
            obj.set_enable("true");
            obj.set_tooltiptext("edit");
            obj.set_imemode("hangul");
            obj.set_maxlength("54");
            obj.set_validation("체크리스트명;NULL");
            obj.set_validationGroup("group01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg03","20","86",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcCompanyCateCd","20","86","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("총점수");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcCorpCateCd","32.91%","86","124","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg04","20","119",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcCoBizNm","20","119","130","68",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboChklstStopCd","stcCompanyNm:5","58",null,"24","stcCorpNo:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsChklstStepCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("개발단계;NULL");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCoBizNm00_00_00","155","124",null,"0","25",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("80");
            obj.set_tooltiptext("edit");
            obj.getSetter("validate").set("");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcCorpNo00","64.92%","53","124","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("통계");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Combo("cboChklstTypeCd","stcCorpNo:5","59",null,"24","stcCorpNo00:5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsChklstTypeCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("테스크유형;NULL");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboChklstCalCd","stcCorpNo00:5","58",null,"24","stcBackRight:5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsChklstCalCd");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("group01");
            obj.set_validation("통계;NULL");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20.00","438","972",null,null,"0",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"110","32","btnClose:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Grid("grdMainList","20","237","972",null,null,"divBtnBottom:0",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsFommChklstGrd");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"600\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"등급명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" cssclass=\"grdHCell_WF_essential\" text=\"시작&#13;&#10;점수\"/><Cell col=\"5\" text=\"종료&#13;&#10;점수\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"사용&#13;&#10;여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:GRD_NM\" textAlign=\"left\" edittype=\"text\" validation=\"등급명;NULL\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" text=\"bind:GRD_FR_VAL\" combodisplayrowcount=\"0\" validation=\"시작점수;NULL|NUMBER\" textAlign=\"right\" editinputfilter=\"sign,space,symbol,dot,comma,alpha\" editmaxlength=\"3\"/><Cell col=\"5\" edittype=\"text\" style=\"align:left;\" text=\"bind:GRD_TO_VAL\" validation=\"종료점수;NULL|NUMBER\" textAlign=\"right\" displaytype=\"number\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\" editmaxlength=\"5\"/><Cell col=\"6\" edittype=\"combo\" style=\"align:left;\" text=\"bind:USE_YN\" validation=\"사용여부;NULL\" displaytype=\"combotext\" combodataset=\"dsUseYn\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","20","196","95",null,null,"275",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("평가표");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","5.00","178",null,null,"-833","513",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcCorpNo00_00","64.92%","86","124","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","462","91",null,"24","stcCorpNo00_00:5",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsUseYn");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validation("사용여부;NULL");
            obj.set_validationGroup("group01");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackTop00","0","187",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackTop00_00","0","227",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"200","60","24","92",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.addChild(obj.name, obj);

            obj = new Button("btnRowDelete",null,"200","60","24","27",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChklstMaxVal","stcCompanyCateCd:5","91","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_normal_E");
            obj.set_enable("true");
            obj.set_tooltiptext("edit");
            obj.set_imemode("hangul");
            obj.set_maxlength("5");
            obj.set_validation("점수;NULL");
            obj.set_validationGroup("group01");
            obj.set_inputtype("number");
            obj.set_inputfilter("alpha,comma,dot,sign,space,symbol");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00","242.00","89","35",null,null,"382",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("점");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaInput","stcCoBizNm:5.00","125",null,"56","stcBackRight:5",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("txa_WF_normal");
            obj.set_wordWrap("char");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1012,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","cboEqpTelecomCd","value","dsOpCommEqp","EQP_TELECOM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboChklstStopCd","value","dsFommChklst","CHKLST_STEP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCompanyNm","value","dsFommChklst","CHKLST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboChklstTypeCd","value","dsFommChklst","CHKLST_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboChklstCalCd","value","dsFommChklst","CHKLST_CAL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboUseYn","value","dsFommChklst","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtChklstMaxVal","value","dsFommChklst","CHKLST_MAX_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txaInput","value","dsFommChklst","CHKLST_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0700_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID	: FOMM0700_P02
         * 화면명		: 표준체크리스트 등록/수정(팝업)
         * 화면설명	:
         * 작성일		: 2024.08.06
         * 작성자		: WEMB
         * 수정이력	:
         ***********************************************************************
         * 수정일     	수정자	내용
         ***********************************************************************
        * 2024.08.07	WEMB	최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.saveFlg = "N";
        this.chkRow;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['CHKLST_STEP_CD',	'CHKLST_TYPE_CD',	'CHKLST_CAL_CD',	'QUE_TYPE_CD',	  'USE_CD'		]	// 조회할 상위코드
        		,codeDiv: ['POR_INFO_CD',		'POR_INFO_CD',		'POR_INFO_CD',		'POR_INFO_CD',	  'CMM_CD'		]	// 조회할 코드의 업무구분
        		,optStr	: ['SEL',				'SEL',				'SEL',				'',			  	  ''			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y',				'Y',				'Y',			  'Y'			]	// 사용여부
        		,filter	: ['',					'',					'',					'',				  ''			]	// filterStr
        		,objDs	: [this.dsChklstStepCd,	this.dsChklstTypeCd,this.dsChklstCalCd,	this.dsQueTypeCd, this.dsUseYn	]// copy dataset
        	};
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function ()
        {
        	var sTranId = "select01";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0700W/select03";							// 서비스명
            var sInDs = "dsCond=dsCond";								// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommChklst=dsFommChklst dsFommChklstGrd=dsFommChklstGrd";						// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
        	var sService = "FOMM0700W/save01";
        	var sInDs = " dsCond=dsCond dsFommChklst=dsFommChklst:U dsFommChklstGrd=dsFommChklstGrd:U";
        	var sOutDs = "dsFommChklst=dsFommChklst dsFommChklstGrd=dsFommChklstGrd dsCond=dsCond";
        	var sArg = "";
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
        			this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			this.saveFlg = "Y";
        			Ex.core.toast(this, "10004", null, {toastType:'S'});

        			if( !Ex.isEmpty(this.dsCond.getColumn(0, "CHKLST_ID")) )
        			{
        				this.getOwnerFrame().pChklstId	= this.dsCond.getColumn(0, "CHKLST_ID");
        			}

        			this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

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
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "alertSaveI" :
        			Ex.core.pclose(this, this.saveFlg);
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "deleteConfirm" :
        			this.dsFommChklstGrd.setDeleteRow(0);
        			this.fnSave();
        			break;

        		case "AlertNoInputMaxValI" :
        			this.edtChklstMaxVal.setFocus();
        			break;

        		case "AlertgrdFrValChkI" :
        			this.dsFommChklstGrd.set_rowposition(this.chkRow);	// 데이터셋 ROW 포커스 이동
        			this.grdMainList.showEditor(true);		// 그리드 편집모드로 변경
        			this.grdMainList.setCellPos(4, this.chkRow);		// 그리드 셀 포커스 이동
        			break;

        		case "AlertgrdToValChkI" :
        			this.dsFommChklstGrd.set_rowposition(this.chkRow);	// 데이터셋 ROW 포커스 이동
        			this.grdMainList.showEditor(true);					// 그리드 편집모드로 변경
        			this.grdMainList.setCellPos(5, this.chkRow);		// 그리드 셀 포커스 이동
        			break;
        	}
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복

        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }

        this.fnAdd = function(objDs)
        {
        	var rowPos = objDs.setAddRow();

        	if (this.dsCond.getColumn(0,"CHKLST_ID") != undefined){
        		objDs.setColumn(rowPos,"CHKLST_ID",this.dsCond.getColumn(0,"CHKLST_ID"));
        	}
        	var grdObj = this.grdMainList;
        	objDs.setColumn(rowPos,"USE_YN","Y");
        	objDs.set_rowposition(rowPos);
        	grdObj.showEditor(true);					// 그리드 편집모드로 변경
        	grdObj.setCellPos(3, objDs.rowposition);	// 그리드 셀 포커스 이동
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();

        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdMainList.displayRowType();

        	if( Ex.isEmpty(this.getOwnerFrame().pChklstId))	//신규
        	{
        		var aRow = this.dsFommChklst.setAddRow();
        		this.cboUseYn.set_index(0);
        		this.edtCompanyNm.setFocus();


        		// 초기값 세팅
        	}
        	else
        	{
        		this.dsCond.setColumn(0, "CHKLST_ID", this.getOwnerFrame().pChklstId);
        		this.fnSearch();
        	}

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divBtnBottom.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	if( !Ex.isEmpty(this.getOwnerFrame().pEqpImeiNo))	//신규
        	{
        		arrBtn = [this.divBtnBottom.form.btnDelete];	// 삭제
        		Ex.util.setBtnVisible(this, 'delete', arrBtn);
        	}

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divBtnBottom, 'right', true);
        }

        this.fnCheckValidateM = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.checkValidate(this, "group01") ) return false;
        	return true;
        }

        this.fnCheckValidateD = function()
        {
        	if( !Ex.util.checkValidateGrid(this, this.grdMainList,"isAll") )	return false;
        	return true;
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAdd" :
        			if( Ex.isEmpty(this.dsFommChklst.getColumn(0, "CHKLST_MAX_VAL")) )
        			{
        				var param = {
        					  id	: "AlertNoInputMaxValI"					//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: this.stcCompanyCateCd.text + "가 입력되지 않았습니다."					//메시지 내용
        					, arrparam : [""]						//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			this.fnAdd(this.dsFommChklstGrd);
        			break;

        		case "btnRowDelete" :
        			this.fnDelete(this.dsFommChklstGrd);
        			break;

        		case "btnSave" : 	// 저장
        			// validation
        			if(!Ex.util.isUpdated(this.dsFommChklst) && !Ex.util.isUpdated(this.dsFommChklstGrd))
        			{
        				var oParam = {id : "alertNotAddI", msg : "변경 사항이 없습니다.", arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return;
        			}
        			else
        			{
        				if(Ex.util.isUpdated(this.dsFommChklst) && !Ex.util.isUpdated(this.dsFommChklstGrd))
        				 {
        					if(this.fnCheckValidateM())
        					{
        						var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"};
        						Ex.core.confirm(this, param);
        					}
        				 }
        				 else if(!Ex.util.isUpdated(this.dsFommChklst) && Ex.util.isUpdated(this.dsFommChklstGrd))
        				 {
        					if(this.fnCheckValidateD())
        					{
        						var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"};
        						Ex.core.confirm(this, param);
        					}
        				 }
        				 else
        				 {
        					if(this.fnCheckValidateM())
        					{
        						if(this.fnCheckValidateD())
        							{
        								var param = {
        									id : "saveConfirm"
        								  , msg : "10003"
        								  , arrparam : ['']
        								  , msgtype : "I"};
        								Ex.core.confirm(this, param);
        							}
        					}
        				}
        			}
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this, this.saveFlg);
        			break;
        	}
        }

        this.grdOnCellClick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        this.dsCanColumnChange = function(obj,e)
        {
        	if(e.columnid == "GRD_FR_VAL" || e.columnid == "GRD_TO_VAL")
        	{
        		var chklstMaxVal = nexacro.toNumber(this.dsFommChklst.getColumn(0, "CHKLST_MAX_VAL"));

        		this.chkRow = e.row;
        		var grdFrVal;
        		var grdToVal;
        		var msgId = "";
        		var msg = "";

        		if(e.columnid == "GRD_FR_VAL")
        		{
        			msgId = "AlertgrdFrValChkI";

        			if( !Ex.isEmpty(obj.getColumn(e.row, "GRD_TO_VAL")) )
        			{
        				grdFrVal = nexacro.toNumber(e.newvalue, 0);
        				grdToVal = nexacro.toNumber(obj.getColumn(e.row, "GRD_TO_VAL"), 0);

        				if(chklstMaxVal <= grdFrVal)
        				{
        					msg = "시작 점수는 " + this.stcCompanyCateCd.text + "보다 같거나 클 수 없습니다.";
        				}
        				else
        				{
        					if(grdFrVal >= grdToVal)
        					{
        						msg = "시작 점수는 종료 점수보다 같거나 클 수 없습니다.";
        					}
        				}
        			}
        		}
        		else if(e.columnid == "GRD_TO_VAL")
        		{
        			msgId = "AlertgrdToValChkI";

        			if( !Ex.isEmpty(obj.getColumn(e.row, "GRD_FR_VAL")) )
        			{
        				grdFrVal = nexacro.toNumber(obj.getColumn(e.row, "GRD_FR_VAL"), 0);
        				grdToVal = nexacro.toNumber(e.newvalue, 0);

        				if(chklstMaxVal < grdToVal)
        				{
        					msg = "종료 점수는 " + this.stcCompanyCateCd.text + "보다 클 수 없습니다.";
        				}
        				else
        				{
        					if(grdFrVal >= grdToVal)
        					{
        						msg = "시작 점수는 종료 점수보다 같거나 클 수 없습니다.";
        					}
        				}
        			}
        		}

        		if( !Ex.isEmpty(msg) )
        		{
        			obj.setColumn(e.row, e.columnid, e.oldvalue);

        			var param = {
        				  id	: "AlertgrdToValChkI"	//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: msg					//메시지 내용
        				, arrparam : [""]				//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	return true;
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
            this.stcCompanyCateCd.addEventHandler("onclick",this.Static13_onclick,this);
            this.cboChklstStopCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.cboChklstTypeCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.cboChklstCalCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdMainList.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.cboUseYn.addEventHandler("oninnerdatachanged",this.cboUseYn_oninnerdatachanged,this);
            this.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnRowDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.txaInput.addEventHandler("onkeydown",this.divInput_txaInput_onkeydown,this);
            this.txaInput.addEventHandler("onchanged",this.divInput_txaInput_onchanged,this);
            this.dsFommChklst.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsFommChklstGrd.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsFommChklstGrd.addEventHandler("cancolumnchange",this.dsCanColumnChange,this);
        };
        this.loadIncludeScript("FOMM0700_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
