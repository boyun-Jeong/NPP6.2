(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref37");
            this.set_titletext("요청서 테스트용");
            this.getSetter("classname").set("ref06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFormInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENC_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"SR_INFO_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_SAVE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_POSS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_SCRN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_APPROVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUR_SCRN_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENC_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"SR_INFO_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_SAVE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_POSS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_SCRN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_APPROVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATASET\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsSvcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DS\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">1</Col><Col id=\"SVC_NM\">sr/SR0000D/select01</Col><Col id=\"IN_DS\">dsCond</Col><Col id=\"OUT_DS\">dsSrBaseInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENC_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"SR_INFO_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_MAP_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_SAVE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_POSS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_SCRN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_APPROVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATASET\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnSendList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSend","0","0",null,"446","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSrBaseInfo","0","44",null,"67","0",null,null,null,null,null,this.divSend.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsSrBaseInfo");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("Static01","0","grdSrBaseInfo:10",null,"34","0",null,null,null,null,null,this.divSend.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("stcSaveGubun","0","121","130","34",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("1");
            obj.set_text("SAVE_GUBUN");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("stcTempSaveYn","255","121","130","34",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("4");
            obj.set_text("TEMP_SAVE_YN");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divSend.addChild(obj.name, obj);

            obj = new Combo("cboTempSaveYn","stcTempSaveYn:5","126","115","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("3");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("TEMP_SAVE_YN;NULL");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSend_form_cboTempSaveYn_innerdataset = new nexacro.NormalDataset("divSend_form_cboTempSaveYn_innerdataset", obj);
            divSend_form_cboTempSaveYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(divSend_form_cboTempSaveYn_innerdataset);
            obj.set_value("N");
            obj.set_index("0");
            obj.set_text("N");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("stcWfProcCd","cboTempSaveYn:5","121","130","34",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("2");
            obj.set_text("WF_PROC_CD");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divSend.addChild(obj.name, obj);

            obj = new Combo("cboSaveGubun","stcSaveGubun:5.00","126","115","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("11");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("SAVE_GUBUN;NULL");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSend_form_cboSaveGubun_innerdataset = new nexacro.NormalDataset("divSend_form_cboSaveGubun_innerdataset", obj);
            divSend_form_cboSaveGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG</Col><Col id=\"datacolumn\">REG</Col></Row><Row><Col id=\"codecolumn\">REV</Col><Col id=\"datacolumn\">REV</Col></Row><Row><Col id=\"codecolumn\">APV</Col><Col id=\"datacolumn\">APV</Col></Row><Row><Col id=\"codecolumn\">SCRN_RTRN</Col><Col id=\"datacolumn\">SCRN_RTRN</Col></Row><Row><Col id=\"codecolumn\">RTRN</Col><Col id=\"datacolumn\">RTRN</Col></Row><Row><Col id=\"codecolumn\">TEMP</Col><Col id=\"datacolumn\">TEMP</Col></Row></Rows>");
            obj.set_innerdataset(divSend_form_cboSaveGubun_innerdataset);
            obj.set_value("N");
            obj.set_index("0");
            obj.set_text("REG");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"34","0",null,null,null,null,null,this.divSend.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.divSend.addChild(obj.name, obj);

            obj = new Edit("edtReqId","135.00","5","158","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input01");
            obj.set_validation("요청서ID;NULL");
            obj.set_text("");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("stcTitle01","0","0","130","34",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("7");
            obj.set_text("요청서ID");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divSend.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtReqId:5.00","5","65","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.divSend.addChild(obj.name, obj);

            obj = new Edit("edtWfProcCd","stcWfProcCd:5.00","126","130","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("WF_PROC_CD;NULL");
            obj.set_text("");
            this.divSend.addChild(obj.name, obj);

            obj = new Grid("grdSaveCheck","0","165",null,"67","0",null,null,null,null,null,this.divSend.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsSaveCheck");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.divSend.addChild(obj.name, obj);

            obj = new Edit("edtWfProcCd00","915","126","130","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("input02");
            obj.set_validation("WF_PROC_CD;NULL");
            obj.set_text("");
            this.divSend.addChild(obj.name, obj);

            obj = new Button("btnSaveCheck","edtWfProcCd00:5","125","115","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("13");
            obj.set_text("saveCheck실행");
            this.divSend.addChild(obj.name, obj);

            obj = new Button("btnSendTarget","btnSaveCheck:5.00","125","115","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("14");
            obj.set_text("발송대상자 확인");
            this.divSend.addChild(obj.name, obj);

            obj = new Grid("grdSendTarget","0","241",null,"195","0",null,null,null,null,null,this.divSend.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsRtnSendList");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.divSend.addChild(obj.name, obj);

            obj = new Button("btnProcReq","btnSendTarget:5.00","125","115","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("16");
            obj.set_text("execReqProc");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("stcWfProcCd00","edtWfProcCd:5","121","130","34",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("18");
            obj.set_text("USER_ID");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divSend.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSend.form
            obj = new Layout("default","",0,0,this.divSend.form,function(p){});
            this.divSend.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSend.form.Static01","value","dsFommScheduleJobMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSend.form.Static01","text","dsFommScheduleJobMt","REG_USER_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSend.form.stcTempSaveYn","value","dsFommNotiSendMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSend.form.Static01_00","value","dsFommNotiSendMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSend.form.Static01_00","text","dsFommScheduleJobMt","REG_USER_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSend.form.edtReqId","value","dsCond","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSend.form.edtWfProcCd","value","dsFormInfo","WF_PROC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSend.form.cboSaveGubun","value","dsFormInfo","SAVE_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSend.form.cboTempSaveYn","value","dsFormInfo","TEMP_SAVE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSend.form.edtWfProcCd00","value","dsFormInfo","WF_PROC_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref38.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 요청서 테스트용
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

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	//this.fnGetCmmCd();
        	this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "REG");
        	this.dsFormInfo.setColumn(0, "TEMP_SAVE_YN", "N");
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSaveCheck = function()
        {
        	var sTranId = "saveCheck";                      // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "SRComm/saveCheckReq";			// 서비스명
        	var sInDs = "dsCond=dsFormInfo";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsSaveCheck=dsSaveCheck";     	// 서버에서 수신할 데이타셋
        	var sArg = "";                                  // 서버 @ParamVariable 인자와 맵핑됨
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
        		case "selectBaseInfo" :
        			this.divSend.form.grdSrBaseInfo.createFormat();

        			for(var i=0; i<this.dsSrBaseInfo.colcount; i++)
                    {
                        if(this.dsFormInfo.colinfos[this.dsSrBaseInfo.getColID(i)] != "[object DSColumnInfo]")
                        {
                            this.dsFormInfo.addColumn(this.dsSrBaseInfo.getColID(i), "STRING");
                        }
                        this.dsFormInfo.setColumn(0, this.dsSrBaseInfo.getColID(i), this.dsSrBaseInfo.getColumn(0, this.dsSrBaseInfo.getColID(i)));
                    }
        			break;

        		case "saveCheck" :
        			this.dsFormInfo.setColumn(0, "LAST_APPROVAL_YN", 	this.dsSaveCheck.getColumn(0, "LAST_APPROVAL_YN"));
                    this.dsFormInfo.setColumn(0, "NEXT_WF_PROC_CD", 	this.dsSaveCheck.getColumn(0, "NEXT_WF_PROC_CD"));
        			this.dsFormInfo.setColumn(0, "NEXT_WF_PROC_NM",		this.dsSaveCheck.getColumn(0, "NEXT_WF_PROC_NM"));
                    this.dsFormInfo.setColumn(0, "NEXT_WF_FUNC_CD",		this.dsSaveCheck.getColumn(0, "NEXT_WF_FUNC_CD"));
        			this.dsFormInfo.setColumn(0, "MAP_PROC_CD",			this.dsSaveCheck.getColumn(0, "MAP_PROC_CD"));
        			this.dsFormInfo.setColumn(0, "MAP_WF_PROC_CD",		this.dsSaveCheck.getColumn(0, "MAP_WF_PROC_CD"));
        			this.dsFormInfo.setColumn(0, "NEXT_MAP_WF_PROC_CD", this.dsSaveCheck.getColumn(0, "NEXT_MAP_WF_PROC_CD"));
        			this.divSend.form.grdSaveCheck.createFormat();
        			break;

        		case "testSendDataCheck" :
        			this.divSend.form.grdSendTarget.createFormat();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case ""	:
        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "" :
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['ALARM_TYPE_CD',		'SEND_TYPE_CD',		'SEND_GUBUN'													]	// 조회할 상위코드
        		,codeDiv: ['CMM_CD',			'BASIS_CD',			'CMM_CD'														]	// 조회할 코드의 업무구분
        		,optStr	: ['SEL',				'',					'SEL'															]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',					'Y',				'Y'																]	// 사용여부
        		,filter	: ['',					"CMM_CD!='SLIDE'",	"CMM_CD=='04' || CMM_CD=='05' || CMM_CD=='06' || CMM_CD=='07'"	]	// filterStr
        		,objDs	: [this.dsAlarmTypeCd,	this.dsSendTypeCd,	this.dsSendGubun												]	// copy dataset
        	};
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
         // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :	// 초기화
        			var rtn = Ex.util.checkValidate(this.divSend, "input01");
        			if(!rtn) return false;
        			nexacro.getApplication().gdsSvcInfo.loadXML(this._dsSvcInfo.saveXML());
        			Ex.core.callByDsService(this, "selectBaseInfo");
        			break;

        		case "btnSaveCheck" :
        			var rtn = Ex.util.checkValidate(this.divSend, "input02");
        			if(!rtn) return false;
        			this.fnSaveCheck();
        			break;

        		case "btnSendTarget" :
        			if(this.dsSaveCheck.rowcount == 1)
        			{
        				var sTranId = "testSendDataCheck";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        				var sService = "SRComm/testSendDataCheck";		// 서비스명
        				var sInDs = "dsFormInfo=dsFormInfo";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        				var sOutDs = "dsRtnSendList=dsRtnSendList";     // 서버에서 수신할 데이타셋
        				var sArg = "";                                  // 서버 @ParamVariable 인자와 맵핑됨
        				Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        			}
        			break;

        		case "btnProcReq" :
        			if( !Ex.isEmpty(this.dsCond.getColumn(0, "REQ_ID")) )
        			{
        				var sTranId = "execReqProc";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        				var sService = "SRComm/execReqProc";	// 서비스명
        				var sInDs = "dsData=dsFormInfo";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        				var sOutDs = "";     					// 서버에서 수신할 데이타셋
        				var sArg = "";                      	// 서버 @ParamVariable 인자와 맵핑됨
        				Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        			}
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSend.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSend.form.btnSaveCheck.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSend.form.btnSendTarget.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSend.form.btnProcReq.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref38.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
