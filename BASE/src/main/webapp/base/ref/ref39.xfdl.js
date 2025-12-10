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
            obj = new Dataset("dsObjectList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSend","0","0",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"34","0",null,null,null,null,null,this.divSend.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("stcTitle01","0","0","130","34",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divSend.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","350.00","5","305","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsObjectList");
            obj.set_value("FUNCTION");
            obj.set_index("0");
            obj.set_text("FUNCTION");
            this.divSend.addChild(obj.name, obj);

            obj = new Button("btnSearch","660.00","5","45","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("3");
            obj.set_text("갱신");
            this.divSend.addChild(obj.name, obj);

            obj = new Combo("cbo00","135.00","5","105","24",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSend_form_cbo00_innerdataset = new nexacro.NormalDataset("divSend_form_cbo00_innerdataset", obj);
            divSend_form_cbo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">FUNCTION</Col><Col id=\"datacolumn\">FUNCTION</Col></Row><Row><Col id=\"codecolumn\">PROCEDURE</Col><Col id=\"datacolumn\">PROCEDURE</Col></Row></Rows>");
            obj.set_innerdataset(divSend_form_cbo00_innerdataset);
            obj.set_value("FUNCTION");
            obj.set_index("0");
            obj.set_text("FUNCTION");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00","245.00","0","100","34",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("5");
            obj.set_text("NAME");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divSend.addChild(obj.name, obj);

            obj = new TextArea("txaCont","0","divSend:5",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

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

            obj = new Grid("grdExtdUserDt","0","104","20%","250",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsExtdAuthUserDt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"171\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"내선\"/><Cell col=\"6\" text=\"부서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:USER_NM\"/><Cell col=\"4\" text=\"bind:ROLE_NM\"/><Cell col=\"5\" text=\"bind:TELNUM\"/><Cell col=\"6\" text=\"bind:DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSend.form
            obj = new Layout("default","",0,0,this.divSend.form,function(p){});
            this.divSend.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSend.form.Static01_00","value","dsFommNotiSendMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSend.form.Static01_00","text","dsFommScheduleJobMt","REG_USER_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref39.xfdl", function() {
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
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref39.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
