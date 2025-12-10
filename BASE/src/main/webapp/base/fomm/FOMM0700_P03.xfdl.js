(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0700_P03");
            this.set_titletext("표준체크리스트 질문등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CHKLST_QUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsFommChklstQ", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"bigdecimal\" size=\"16\"/><Column id=\"QUESTION_TYPE\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"QUESTION_DIV\" type=\"string\" size=\"32\"/><Column id=\"CHKLST_ID\" type=\"string\" size=\"32\"/><Column id=\"TEST_NO\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXAMPLE_SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXAMPLE_ORDER\" type=\"bigdecimal\" size=\"16\"/><Column id=\"QUESTION_DESC\" type=\"string\" size=\"32\"/><Column id=\"QUESTION_SCORE\" type=\"bigdecimal\" size=\"16\"/><Column id=\"QUE_SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MIN_ANS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_ANS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NO_INPUT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQueTypeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommChklstExl", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLSTEXM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHKLST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXM_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"EXM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackRight",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMainList","20","54","1060",null,null,"396",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommChklstQ");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"480\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" colspan=\"2\" text=\"순번\"/><Cell col=\"5\" text=\"내용\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"6\" text=\"질문유형\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"7\" text=\"점수\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"8\" text=\"최소응답\"/><Cell col=\"9\" text=\"최대응답\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"예문추가\" cssclass=\"grdHCell_WF\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL\" treestartlevel=\"1\" editinputtype=\"number\" editinputfilter=\"dot,comma,alpha,sign,space,symbol\" editmaxlength=\"2\" cursor=\"pointer\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:SEQ\" treelevel=\"bind:LVL\" treestartlevel=\"1\" editinputtype=\"number\" editinputfilter=\"dot,comma,alpha,sign,space,symbol\" editmaxlength=\"2\"/><Cell col=\"5\" text=\"bind:QUESTION_DESC\" textAlign=\"left\" displaytype=\"normal\" edittype=\"text\" validation=\"내용;NULL\"/><Cell col=\"6\" displaytype=\"expr:LVL == 1 ? &quot;combotext&quot; : &quot;none&quot;\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" textAlign=\"center\" validation=\"질문유형;NULL\" combodataset=\"dsQueTypeCd\" text=\"bind:QUESTION_TYPE\" edittype=\"expr:LVL == 1 ? &quot;combo&quot; : &quot;none&quot;\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;\" text=\"bind:QUESTION_SCORE\" validation=\"점수;NULL|NUMBER\" textAlign=\"right\" displaytype=\"number\" editinputtype=\"number\" editmaxlength=\"3\" editinputfilter=\"none,dot,comma,symbol,space,alpha\"/><Cell col=\"8\" validation=\"최소응답;NULL\" text=\"bind:MIN_ANS_CNT\" displaytype=\"expr:QUESTION_TYPE == &apos;1&apos; ? &quot;normal&quot; : &quot;none&quot;\" edittype=\"expr:QUESTION_TYPE == &apos;1&apos; ? &quot;normal&quot; : &quot;none&quot;\" editinputtype=\"number\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\" editmaxlength=\"2\"/><Cell col=\"9\" validation=\"최대응답;NULL\" text=\"bind:MAX_ANS_CNT\" displaytype=\"expr:QUESTION_TYPE == &apos;1&apos; ? &quot;normal&quot; : &quot;none&quot;\" edittype=\"expr:QUESTION_TYPE == &apos;1&apos; ? &quot;normal&quot; : &quot;none&quot;\" editinputtype=\"number\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\" editmaxlength=\"2\"/><Cell col=\"10\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsUseYn\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" text=\"bind:USE_YN\" validation=\"사용여부;NULL\"/><Cell col=\"11\" edittype=\"none\" style=\"align:left;\" expandshow=\"hide\" expandsize=\"25\" color=\"blue\" font=\"normal 12px/bold &quot;KoPubL&quot;\" cursor=\"pointer\" displaytype=\"expr:LVL == 1 ? &quot;buttoncontrol&quot; : &quot;none&quot;\" expr=\"LVL == 1 ? &quot;예문추가&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00",null,"20","200","24","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","btnDelete:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stcBackTop00","20","45",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20","grdMainList:0","1060","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Div("div00_00",null,"434","200","24","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btnExlDelete",null,"0","60",null,"0","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("btnExlAdd",null,"0","60","24","btnExlDelete:5",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.div00_00.addChild(obj.name, obj);

            obj = new Grid("grdExlList","20","div00_00:10","1060",null,null,"60",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsFommChklstExl");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("false");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"480\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"질문순번\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"선택답항\" validation=\"선택답항;NULL\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"제외대상문항순번\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:QUE_SEQ\" displaytype=\"normal\" edittype=\"normal\" validation=\"질문순번;NULL\" editinputtype=\"number\" editinputfilter=\"sign,dot,comma,alpha,space,symbol\" editmaxlength=\"2\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:EXM_SEQ\" treelevel=\"bind:LVL\" treestartlevel=\"1\" editinputtype=\"number\" editinputfilter=\"sign,dot,comma,alpha,space,symbol\" editmaxlength=\"2\" validation=\"선택답항;NULL\"/><Cell col=\"4\" text=\"bind:EXL_SEQ_VAL\" textAlign=\"left\" displaytype=\"normal\" edittype=\"normal\" validation=\"제외대상문항순번;NULL\" editinputtype=\"digit,comma\" editinputfilter=\"alpha,dot,sign,space,symbol\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsUseYn\" combodatacol=\"CMM_CD_NM\" combocodecol=\"CMM_CD\" text=\"bind:USE_YN\" validation=\"사용여부;NULL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnEnd","20","grdExlList:0",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnEnd.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnEnd.addChild(obj.name, obj);

            obj = new Button("btnExlSave",null,null,"110","32","btnClose:5","14",null,null,null,null,this.divBtnEnd.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnEnd.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","20","divBtnBottom:0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","20.00","436","132",null,null,"292",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("제외항목 리스트");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","151.00","434","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommChklstExl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00","20.00","459",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnEnd.form
            obj = new Layout("default","",0,0,this.divBtnEnd.form,function(p){});
            this.divBtnEnd.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","cboEqpTelecomCd","value","dsFommChklstExl","EQP_TELECOM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0700_P03.xfdl", function() {
        /***********************************************************************
         * 화면ID	: FOMM0700_P03
         * 화면명		: 표준체크리스트 질문등록/수정(팝업)
         * 화면설명	:
         * 작성일		: 2024.08.08
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
        		,optStr	: ['SEL',				'SEL',				'SEL',				'SEL',			  ''			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
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
            var sService = "FOMM0700W/select02";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommChklstQ=dsFommChkSublst";	// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        this.fnSearch02 = function ()
        {
        	var sTranId = "select02";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0700W/select04";		// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommChklstExl=dsFommChklstExl";	// 서버에서 수신할 데이타셋
            var sArg = "";												// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
        	var sService = "FOMM0700W/save02";
        	var sInDs = " dsCond=dsCond dsFommChklstQ=dsFommChklstQ:U";
        	var sOutDs = "dsFommChklstQ=dsFommChklstQ dsCond=dsCond";
        	var sArg = "";
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 제외항목 저장
        this.fnSave02 = function()
        {
        	var sTranId = "save02";
        	var sService = "FOMM0700W/save03";
        	var sInDs = " dsCond=dsCond dsFommChklstExl=dsFommChklstExl:U";
        	var sOutDs = "dsFommChklstExl=dsFommChklstExl dsCond=dsCond";
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
        			this.fnSearch02();
        			break;

        		case "select02" :
        			this.grdExlList.setCellProperty("Head", this.grdExlList.getBindCellIndex('Body', 'CHK'), "text", "0");
        			break;

        		case "save01" :
        			this.saveFlg = "Y";
        			Ex.core.toast(this, "10004", null, {toastType:'S'});

        			if( !Ex.isEmpty(this.dsCond.getColumn(0, "CHKLST_ID")) )
        			{
        				this.getOwnerFrame().pChklstId	= this.dsCond.getColumn(0, "CHKLST_ID");
        			}
        			this.fnSearch();
        			this.grdMainList.setCellProperty("Head", this.grdMainList.getBindCellIndex('Body', 'CHK'), "text", "0");
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

        		case "saveConfirmE" :
        			this.fnSave02();
        			break;

        		case "deleteConfirm" :
        			this.dsFommChklstGrd.setDeleteRow(0);
        			this.fnSave();
        			break;
        		case "deleteConfirm" :
        			this.dsFommChklstGrd.setDeleteRow(0);
        			this.fnSave();
        			break;
        	}
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnAdd = function(objDs)
        {
        	var rowPos = objDs.setInsertRow(objDs.rowcount+1);
        	var cnt=0;
        	var grdObj = this.grdMainList;

        	if ( !Ex.isEmpty(this.dsCond.getColumn(0,"CHKLST_ID")) ) objDs.setColumn(rowPos,"CHKLST_ID",this.dsCond.getColumn(0,"CHKLST_ID"));

        	objDs.setColumn(rowPos,"LVL","1");
        	objDs.setColumn(rowPos,"USE_YN","Y");

        	var maxSeq = nexacro.toNumber(objDs.getCaseMax("LVL==1", "SEQ"), 0);
        	maxSeq++;
        	objDs.setColumn(rowPos, "SEQ", maxSeq);
        	objDs.setColumn(rowPos, "CHKLST_ID", this.dsCond.getColumn(0,"CHKLST_ID"));
        	objDs.setColumn(rowPos, "QUE_SEQ", maxSeq);

        	objDs.set_rowposition(rowPos);
        	//grdObj.showEditor(true);					// 그리드 편집모드로 변경
        	grdObj.setCellPos(3, objDs.rowposition);	// 그리드 셀 포커스 이동
        }

        this.fnExlAdd = function(objDs)
        {
        	var rowPos = objDs.setInsertRow(objDs.rowcount+1);
        	var cnt=0;
        	var grdObj = this.grdExlList;

        	objDs.setColumn(rowPos, "CHKLST_ID", this.dsCond.getColumn(0,"CHKLST_ID"));
        	objDs.set_rowposition(rowPos);
        	objDs.setColumn(rowPos,"USE_YN","Y");
        	grdObj.showEditor(true);					// 그리드 편집모드로 변경
        	grdObj.setCellPos(2, objDs.rowposition);	// 그리드 셀 포커스 이동

        }

        this.fnExlDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }


        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--) objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        	this.grdExlList.displayRowType();

        	this.dsCond.setColumn(0, "CHKLST_QUE_ID", this.getOwnerFrame().pChklstId);
        	this.dsCond.setColumn(0, "CHKLST_ID", this.getOwnerFrame().pChklstId);
        	this.dsCond.setColumn(0, "NO_NUM","Y");

        	// 버튼&권한 mapping && visible 처리
        	var arrBtn = [this.divBtnBottom.form.btnSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	arrBtn = [this.divBtnEnd.form.btnExlSave];		// 저장
        	Ex.util.setBtnVisible(this, 'save', arrBtn);

        	// 버튼 영역 div align 처리
        	Ex.util.setBtnAlign(this.divBtnBottom, 'right', true);

        	this.fnSearch();
        }

        this.fnCheckValidate = function()
        {
        	if( !Ex.util.checkValidateGrid(this, this.grdMainList,"isAll") )	return false;
        	return true;
        };

        this.fnCheckValidateE = function()
        {
        	if( !Ex.util.checkValidateGrid(this, this.grdExlList,"isAll") )	return false;
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
        			this.fnAdd(this.dsFommChklstQ);
        			break;

        		case "btnExlAdd" :
        			this.fnExlAdd(this.dsFommChklstExl);
        			break;

        		case "btnSave" : 	// 저장
        			// validation
        			if(!Ex.util.isUpdated(this.dsFommChklstQ))
        			{
        				var oParam = {id : "alertNotAddI", msg : "변경 사항이 없습니다.", arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return;
        			}
        			else
        			{
        				if(this.fnCheckValidate())
        				{
        					var param = {
        						id : "saveConfirm"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        					Ex.core.confirm(this, param);
        				}

        			}
        			break;
        		case "btnExlSave" : 	// 제외목록저장
        			// validation
        			if(!Ex.util.isUpdated(this.dsFommChklstExl))
        			{
        				var oParam = {id : "alertNotAddI", msg : "변경 사항이 없습니다.", arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				return;
        			}
        			else
        			{
        				if(this.fnCheckValidateE())
        				{
        					var param = {
        						id : "saveConfirmE"
        					  , msg : "10003"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        					Ex.core.confirm(this, param);
        				}

        			}
        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsFommChklstQ);
        			break;
        		case "btnExlDelete" :
        			this.fnExlDelete(this.dsFommChklstExl);
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this, this.saveFlg);
        			break;
        	}
        }

        this.grdOnCellClick = function(obj,e)
        {
        	var displayType = obj.getCellPropertyValue(e.row, e.cell, "displaytype");

        	if(displayType == "buttoncontrol" && this.dsFommChklstQ.getColumn(obj.getDatasetRow(e.row), "LVL") == "1")
        	{
        		var childCnt = obj.getTreeChildCount(e.row);
        		var childRow;

        		if(childCnt > 0)
        		{
         			childRow = obj.getTreeChildRow(e.row, childCnt-1) + 1;

        // 			var firstChildRow = obj.getTreeChildRow(e.row, 0);
        // 			var lastChildRow = obj.getTreeChildRow(e.row, childCnt-1);
        // 			trace("firstChildRow : " + firstChildRow + " lastChildRow : " + lastChildRow);
        // 			maxSeq = this.dsFommChklstQ.getMax("SEQ", firstChildRow, lastChildRow+1);
        		}
        		else
        		{
        			childRow = e.row + 1;
        		}

        		trace("childRow : " + childRow);

        		var queSeq = this.dsFommChklstQ.getColumn(e.row, "QUE_SEQ");
        		var maxSeq = nexacro.toNumber(this.dsFommChklstQ.getCaseMax("LVL==2 && QUE_SEQ==" + queSeq, "SEQ"), 0);
        		trace("maxSeq ::::::::::::::::: " + maxSeq);
        		maxSeq++;

        		var rowPos = this.dsFommChklstQ.setInsertRow(childRow);

        		trace("rowPos : " + rowPos);

        		this.dsFommChklstQ.set_rowposition(rowPos);
        		this.grdMainList.showEditor(true);	// 그리드 편집모드로 변경
        		this.dsFommChklstQ.setColumn(rowPos, "SEQ", maxSeq);
        		this.dsFommChklstQ.setColumn(rowPos, "CHKLST_ID", this.dsCond.getColumn(0,"CHKLST_ID"));
        		this.dsFommChklstQ.setColumn(rowPos, "USE_YN","Y");
        		this.dsFommChklstQ.setColumn(rowPos, "LVL", "2");
        		this.dsFommChklstQ.setColumn(rowPos, "QUE_SEQ", this.dsFommChklstQ.getColumn(obj.getDatasetRow(e.row), "QUE_SEQ"));


        		if(this.grdMainList.isTreeCollapsedRow(rowPos))
        		{
        			var bSucc = this.grdMainList.setTreeStatus(e.row, true);
        		}

        		this.grdMainList.setCellPos(4, this.dsFommChklstQ.rowposition);	// 그리드 셀 포커스 이동
        	}
        	obj.dropdownCombo();
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	trace("this.dsOnColumnChanged() e.row : " + e.row);
        	if(e.columnid == "SEQ" && obj.getColumn(e.row, "LVL") == 1)
        	{
        		obj.setColumn(e.row, "QUE_SEQ", e.newvalue);

        		var childCnt = this.grdMainList.getTreeChildCount(e.row);

        		if(childCnt > 0)
        		{
        			var firstChildRow = this.grdMainList.getTreeChildRow(e.row, 0);
        			var lastChildRow = this.grdMainList.getTreeChildRow(e.row, childCnt-1);

        			trace("firstChildRow : "+firstChildRow+"   lastChildRow : "+lastChildRow);

        			for(var i=firstChildRow; i<=lastChildRow; i++)
        			{
        				obj.setColumn(i, "QUE_SEQ", e.newvalue);
        				var evt = nexacro.DSColChangeEventInfo;
        				evt.row = i;
        				evt.newvalue = e.newvalue;
        				obj.setUpdateRow(evt);
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
            this.grdMainList.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.grdMainList.addEventHandler("onlbuttonup",this.grdMainList_onlbuttonup,this);
            this.grdMainList.addEventHandler("onmouseup",this.grdMainList_onmouseup,this);
            this.grdMainList.addEventHandler("oncloseup",this.grdMainList_oncloseup,this);
            this.div00.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div00.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div00_00.form.btnExlDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div00_00.form.btnExlAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnEnd.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnEnd.form.btnExlSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Static00_00_02.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static32.addEventHandler("onclick",this.Static32_onclick,this);
            this.Static00_00_02_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.dsFommChklstQ.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsFommChklstExl.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0700_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
