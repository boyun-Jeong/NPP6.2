(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref35");
            this.set_titletext("NAC Test");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParams", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"SENSORNID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBUN\">CODE</Col><Col id=\"USE_YN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPlaceAll", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPlace1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPlace2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpUseList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpUnUseList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearchArea","0","60",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staCoNm","Static00:0.00","13","105","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("IP(등록/삭제시)");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","staCoNm:-1","13","145","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"13","75","24","5",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"13","75","24","btnDelete:5",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staCoNm00","edtCoNm:5.00","13","130","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_text("SENSORNID(등록시)");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCoNm00","staCoNm00:-1","13",null,"24","btnReg:5",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new TextArea("txaResult","0",null,null,"200","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","50%",null,null,"24","0","txaResult:5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUseIpList","0","divSearchArea:10","50%",null,null,"edt00:5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsIpUseList");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea00","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCoNm","20.00","13","60","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("0");
            obj.set_text("근무장소");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Combo("cboPlace","staCoNm:5.00","13","165","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsPlaceAll");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_text("cbo00");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Combo("cboGubun","cboPlace:5.00","13","120","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearchArea00_form_cboGubun_innerdataset = new nexacro.NormalDataset("divSearchArea00_form_cboGubun_innerdataset", obj);
            divSearchArea00_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CODE</Col><Col id=\"datacolumn\">근무장소 대역</Col></Row><Row><Col id=\"codecolumn\">IP</Col><Col id=\"datacolumn\">입력 IP</Col></Row></Rows>");
            obj.set_innerdataset(divSearchArea00_form_cboGubun_innerdataset);
            obj.set_value("CODE");
            obj.set_index("0");
            obj.set_text("근무장소 대역");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Combo("cboGubun00","cboGubun:5","13","90","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearchArea00_form_cboGubun00_innerdataset = new nexacro.NormalDataset("divSearchArea00_form_cboGubun00_innerdataset", obj);
            divSearchArea00_form_cboGubun00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ALL</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용중</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearchArea00_form_cboGubun00_innerdataset);
            obj.set_value("CODE");
            obj.set_index("0");
            obj.set_text("근무장소 대역");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Edit("edt00","cboGubun00:5","13","105","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","edt00:5.00","13","100","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","edt00_00:5.00","13","199","24",null,null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","5",null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","edt00_00_00:5.00","13",null,"24","btnSearch:5",null,null,null,null,null,this.divSearchArea00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divSearchArea00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","0",null,null,"24","50%","205",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUnUseIpList",null,"120","50.00%",null,"0","234",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsIpUnUseList");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea00.form
            obj = new Layout("default","",0,0,this.divSearchArea00.form,function(p){});
            this.divSearchArea00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtCoNm","value","dsParams","IP_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txaResult","value","dsResult","RTN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea00.form.edt00","value","dsParams","UP_CMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea00.form.edt00_00","value","dsParams","CMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea00.form.edt00_00_00","value","dsParams","ITM_VAL_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea00.form.edt00_00_00_00","value","dsParams","ITM_VAL_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.edtCoNm00","value","dsParams","SENSORNID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt00","value","dsResult","PROC_KEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt00_00","value","dsResult","PROC_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearchArea00.form.cboGubun","value","dsParams","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearchArea00.form.cboGubun00","value","dsParams","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref35.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 팝업 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
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
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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
        	else
        	{
        		if(this.dsResult.getColumn(0, "CODE") == "200" || sSvcId == "getIpList")
        		{
        			this.dsIpList.set_filterstr("USE_YN=='Y'");
        			this.dsIpUseList.copyData(this.dsIpList, true);
        			this.dsIpList.set_filterstr("USE_YN=='N'");
        			this.dsIpUnUseList.copyData(this.dsIpList, true);
        			this.dsIpList.set_filterstr("");

        			this.grdUseIpList.createFormat();
        			this.grdUnUseIpList.createFormat();

        			if( !Ex.isEmpty(this.dsParams.getColumn(0, "IP_ADDR")) && Ex.util.checkType("IPADDR", this.dsParams.getColumn(0, "IP_ADDR")))
        			{
        				var fRow = this.dsIpUseList.findRow("NL_IPSTR", this.dsParams.getColumn(0, "IP_ADDR"));

        				/*
        				alert(
        					"CODE : " + this.dsResult.getColumn(0, "CODE") +
        					"\nsSvcId : " + sSvcId +
        					"\nfRow : " + fRow
        				);
        				*/
        				if(fRow > -1)
        				{
        					this.grdUseIpList.setCellPos(1, fRow);
        				}

        				var fRow = this.dsIpUnUseList.findRow("NL_IPSTR", this.dsParams.getColumn(0, "IP_ADDR"));

        				/*
        				alert(
        					"CODE : " + this.dsResult.getColumn(0, "CODE") +
        					"\nsSvcId : " + sSvcId +
        					"\nfRow : " + fRow
        				);
        				*/
        				if(fRow > -1)
        				{
        					this.grdUnUseIpList.setCellPos(1, fRow);
        				}
        			}
        		}
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "regIp" :
        			if(this.dsResult.getColumn(0, "CODE") != "200")
        			{
        				var param = {id : "ERROR", msg : this.dsResult.getColumn(0, "MESSAGE")};
        				Ex.core.error(this, param);
        			}
        			else
        			{
        				Ex.core.toast(this, "IP:[" + this.dsParams.getColumn(0, "IP_ADDR") + "] 등록이 완료 되었습니다.");
        			}
        			break;

        		case "deleteIp" :
        			if(this.dsResult.getColumn(0, "CODE") != "200")
        			{
        				var param = {id : "ERROR", msg : this.dsResult.getColumn(0, "MESSAGE")};
        				Ex.core.error(this, param);
        			}
        			else
        			{
        				Ex.core.toast(this, "IP:[" + this.dsParams.getColumn(0, "IP_ADDR") + "] 삭제가 완료 되었습니다.");
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	trace("pID="+pID+" ,varValue="+varValue);
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.dsResult.clearData();
        			var sTranId = "regIp";
        			var sService = "NacUtil/regIp";
        			var sInDs = "dsParams=dsParams";
        			var sOutDs = "dsIpList=dsIpList dsResult=dsResult";
        			var sArg = "";
        			Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        			break;

        		case "deleteConfirm" :
        			this.dsResult.clearData();
        			var sTranId = "deleteIp";
        			var sService = "NacUtil/deleteIp";
        			var sInDs = "dsParams=dsParams";
        			var sOutDs = "dsIpList=dsIpList dsResult=dsResult";
        			var sArg = "";
        			Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();	// 공통코드 조회
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['SWKP0A00',		'SWKP0J00'		]	// 조회할 상위코드
        		,codeDiv: ['',				''				]	// 조회할 코드의 업무구분
        		,optStr	: ['',				''				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y',				'Y'				]	// 사용여부
        		,filter	: ['',				''				]	// filterStr
        		,objDs	: [this.dsPlace1,	this.dsPlace2	]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;

        	this.dsPlaceAll.appendData(this.dsPlace1);
        	this.dsPlaceAll.appendData(this.dsPlace2);

        	this.dsPlaceAll.insertRow(0);
        	this.dsPlaceAll.setColumn(0, "CMM_CD_NM", "- 선택 -");
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :
        			if( this.dsParams.getColumn(0, "GUBUN") == "CODE" && Ex.isEmpty(this.divSearchArea00.form.cboPlace.value) ) return;
        			else if( this.dsParams.getColumn(0, "GUBUN") == "IP" &&
        					 (Ex.isEmpty(this.dsParams.getColumn(0, "IP_ADDR")) || !Ex.util.checkType("IPADDR", this.dsParams.getColumn(0, "IP_ADDR")))
        					) return;

        			var sTranId = "getIpList";
        			var sService = "NacUtil/getIpList";
        			var sInDs = "dsParams=dsParams";
        			var sOutDs = "dsIpList=dsIpList";
        			var sArg = "";
        			Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        			break;

        		case "btnReg" :
        			if( Ex.isEmpty(this.dsParams.getColumn(0, "IP_ADDR")) ) return;
        			if( !Ex.util.checkType("IPADDR", this.dsParams.getColumn(0, "IP_ADDR")) ) return;
        			if( Ex.isEmpty(this.dsParams.getColumn(0, "SENSORNID")) ) return;

        			var param = {
        					id : "saveConfirm"
        				  , msg : "IP:[" + this.dsParams.getColumn(0, "IP_ADDR") + "] 등록 하시겠습니까?"
        				  , arrparam : [""]
        				  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnDelete" :
        			if( Ex.isEmpty(this.dsParams.getColumn(0, "IP_ADDR")) ) return;
        			if( !Ex.util.checkType("IPADDR", this.dsParams.getColumn(0, "IP_ADDR")) ) return;

        			var param = {
        					id : "deleteConfirm"
        				  , msg : "IP:[" + this.dsParams.getColumn(0, "IP_ADDR") + "] 삭제 하시겠습니까?"
        				  , arrparam : [""]
        				  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        	}
        };

        this.divSearchArea00_cboPlace_onitemchanged = function(obj,e)
        {
        	if( !Ex.isEmpty(e.postvalue) )
        	{
        		if( this.dsParams.getColumn(0, "GUBUN") == "IP" &&
        		    (Ex.isEmpty(this.dsParams.getColumn(0, "IP_ADDR")) || !Ex.util.checkType("IPADDR", this.dsParams.getColumn(0, "IP_ADDR"))) ) return;

        		var fRow = this.dsPlaceAll.findRow("CMM_CD", this.divSearchArea00.form.cboPlace.value);
        		this.dsParams.setColumn(0, "UP_CMM_CD", this.dsPlaceAll.getColumn(fRow, "UP_CMM_CD"));
        		this.dsParams.setColumn(0, "CMM_CD", this.dsPlaceAll.getColumn(fRow, "CMM_CD"));
        		this.dsParams.setColumn(0, "ITM_VAL_1", this.dsPlaceAll.getColumn(fRow, "ITM_VAL_1"));
        		this.dsParams.setColumn(0, "ITM_VAL_2", this.dsPlaceAll.getColumn(fRow, "ITM_VAL_2"));

        		var sTranId = "getIpList";
        		var sService = "NacUtil/getIpList";
        		var sInDs = "dsParams=dsParams";
        		var sOutDs = "dsIpList=dsIpList";
        		var sArg = "";
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        	else
        	{
        		this.dsParams.setColumn(0, "UP_CMM_CD", "");
        		this.dsParams.setColumn(0, "CMM_CD", "");
        		this.dsParams.setColumn(0, "ITM_VAL_1", "");
        		this.dsParams.setColumn(0, "ITM_VAL_2", "");
        		this.dsIpList.clearData();
        	}
        };

        this.divSearchArea00_cboGubun_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "IP")
        	{
        		this.divSearchArea00.form.cboGubun00.set_enable(false);
        	}
        	else
        	{
        		this.divSearchArea00.form.cboGubun00.set_enable(true);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.edtCoNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnReg.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtCoNm00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea00.form.cboPlace.addEventHandler("onitemchanged",this.divSearchArea00_cboPlace_onitemchanged,this);
            this.divSearchArea00.form.cboGubun.addEventHandler("onitemchanged",this.divSearchArea00_cboGubun_onitemchanged,this);
            this.divSearchArea00.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref35.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
