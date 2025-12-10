(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_D01");
            this.set_titletext("결재선 공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,177);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_DEFAULT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_REF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_PROC_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalMt", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_USER_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"DRAFTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_GRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_GBN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalRefMt", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"string\" size=\"32\"/><Column id=\"WF_PROC_CD\" type=\"string\" size=\"32\"/><Column id=\"APPR_LVL_SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_NM\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"string\" size=\"32\"/><Column id=\"FRDT\" type=\"string\" size=\"32\"/><Column id=\"LMPID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqAppvDt", this);
            obj._setContents("<ColumnInfo><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_PROC_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_PROG_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurApprLvlSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"MIN_APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tbWf","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("33");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tbWf);
            obj.set_text("결재선");
            this.tbWf.addChild(obj.name, obj);

            obj = new Grid("grdWfApprovalMt","0","0",null,null,"0","0",null,null,null,null,this.tbWf.tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsWfApprovalMt");
            obj.getSetter("scrollbars").set("autoboth");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"132\"/><Column size=\"94\"/><Column size=\"109\"/><Column size=\"88\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"행상태\"/><Cell col=\"1\" text=\"결재&#13;&#10;순서\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"결재자\"/><Cell col=\"5\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWFLAG\"/><Cell col=\"1\" text=\"bind:APPR_SEQ\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:POS_NM\"/><Cell col=\"4\" text=\"bind:USER_NM\"/><Cell col=\"5\" text=\"bind:APPR_STAT_NM\"/></Band></Format></Formats>");
            this.tbWf.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tbWf);
            obj.set_text("회람");
            this.tbWf.addChild(obj.name, obj);

            obj = new Grid("grdWfApprovalRefMt","0","0",null,null,"0","0",null,null,null,null,this.tbWf.tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsWfApprovalRefMt");
            obj.getSetter("scrollbars").set("autoboth");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"132\"/><Column size=\"94\"/><Column size=\"109\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"회람자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:POS_NM\"/><Cell col=\"5\" text=\"bind:USER_NM\"/></Band></Format></Formats>");
            this.tbWf.tabpage2.addChild(obj.name, obj);

            obj = new Div("divTopButton2",null,"0","145","29","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("white");
            obj.set_isChgLang("false");
            obj.set_isButtonGroup("true");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divTopButton2.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_tabstop("false");
            this.divTopButton2.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divTopButton2.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divTopButton2.addChild(obj.name, obj);

            obj = new Static("stcApprWfProcCd","115","0","65","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("결재단계");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboApprWfProcCdLvlSeq","stcApprWfProcCd:-1.00","0","255","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("cbot_WF_normal");
            obj.set_innerdataset("dsWfReqAppvDt");
            obj.set_codecolumn("WF_PROC_CD_SEQ");
            obj.set_datacolumn("APPR_INFO");
            obj.set_visible("false");
            obj.set_tabstop("false");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divTopButton",null,"0","110","29","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_isChgLang("false");
            obj.set_isButtonGroup("true");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnApproval",null,"0","105",null,"0","0",null,null,null,null,this.divTopButton.form);
            obj.set_taborder("0");
            obj.set_text("결재선 지정");
            obj.set_cssclass("btn_WF_primary_save");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_tabstop("false");
            this.divTopButton.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tbWf.tabpage1.form
            obj = new Layout("default","",0,0,this.tbWf.tabpage1.form,function(p){});
            this.tbWf.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tbWf.tabpage2.form
            obj = new Layout("default","",0,0,this.tbWf.tabpage2.form,function(p){});
            this.tbWf.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTopButton2.form
            obj = new Layout("default","",0,0,this.divTopButton2.form,function(p){});
            this.divTopButton2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTopButton.form
            obj = new Layout("default","",0,0,this.divTopButton.form,function(p){});
            this.divTopButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,177,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0010_D01.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR0010_D01
        * 화면(명)	︰ 결재선 공통 DIV
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.06.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.isBtnAuth = false;			//결재선 편집 관련 버튼 Div Visible 권한

        // this.selectServiceInfo = {
        // 	CALLBACK_ID		: ["select", "select"],
        // 	CALL_SVC		: ["sr/SR0010D/select01", "sr/SR0010D/select03"],
        //
        // 	IN_DS_WHERE		: [this.dsCond, this.dsCond],
        // 	OUT_DS_OBJ		: [new Array(this.dsWfApprovalMt), new Array(this.dsWfApprovalRefMt)]
        // };

        this.saveServiceInfo = {
        	CALLBACK_ID		: ["save01"],
        	CALL_SVC		: ["sr/SR0010D/save01"],

        	IN_DS_OBJ		: [new Array(this.dsWfApprovalMt, this.dsWfApprovalRefMt)],
        	OUT_DS_OBJ		: []
        };
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "REQ_TMPLAT_ID", this.reqInfo.REQ_TMPLAT_ID);

        	this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.SCRN_WF_PROC_CD);
        	this.dsCond.setColumn(0, "WF_FUNC_CD", this.reqInfo.WF_FUNC_CD);
        	this.dsCond.setColumn(0, "APPR_LVL_SEQ", this.reqInfo.APPR_LVL_SEQ);

        	this.dsCond.setColumn(0, "SEARCH_REF_YN", "Y");

        	for(var i=0; i<this.reqInfo.PARENT_FORM.dsFormInfo.colcount; i++)
        	{
        		var colNm = this.reqInfo.PARENT_FORM.dsFormInfo.getColID(i);
        		if( Ex.isEmpty(this.dsCond.getColumnInfo(colNm)) )
        		{
        			this.dsCond.addColumn(colNm, "STRING", 256);
        			this.dsCond.setColumn(0, colNm, this.reqInfo.PARENT_FORM.dsFormInfo.getColumn(0, colNm));
        		}
        	}

        	this.gfnFormOnLoad(this, this.fnInit);
        	//trace("SR0010_D01 this.form_onload() this.reqInfo.REQ_ID : " + this.reqInfo.REQ_ID);
        }

        this.fnInit = function()
        {
        	this.tbWf.tabpage1.form.grdWfApprovalMt.displayRowType();
        	this.tbWf.tabpage2.form.grdWfApprovalRefMt.displayRowType();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 결채차수 목록조회
        this.fnSearchApprBaseInfo = function()
        {
        	var sTranId = "selectApprInfo";																				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0010D/selectApprInfo";																	// 서비스명
            var sInDs = "dsCond=dsCond";																				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsCurApprLvlSeq=dsCurApprLvlSeq dsWfReqAppvDt=dsWfReqAppvDt dsWfApprovalMt=dsWfApprovalMt dsWfApprovalRefMt=dsWfApprovalRefMt";
            var sArg = "";																								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        	//trace("SR0010_D01 this.fnCallback() sSvcId:::[" + sSvcId + "]");

        	switch(sSvcId)
        	{
        		case "postSelect" :
        			if(this.getOwnerFrame().pChkAdv=="Y") {
        				this.dsCond.addColumn("CHK_ADV",		"STRING");
        				this.dsCond.setColumn(0,"CHK_ADV",this.getOwnerFrame().pChkAdv);
        			}
        			this.fnSearchApprBaseInfo();
        			break;

        		case "selectApprInfo" :
        			if(
        				(this.reqInfo.WF_PROC_CD == "WF_PROC_1000" && this.reqInfo.WF_FUNC_CD == "WF_FUNC_00" && (this.reqInfo.REQ_STAT_CD == "RQST00" || this.reqInfo.REQ_STAT_CD == "RQST91") ) ||
        				(this.reqInfo.WF_PROC_CD != "WF_PROC_1000" && this.reqInfo.WF_FUNC_CD == "WF_FUNC_04" && (this.reqInfo.REQ_STAT_CD == "RQST01" || this.reqInfo.REQ_STAT_CD == "RQST91") )
        			  )	//등록 기능이고 임시저장 또는 반려 상태인 경우
        			{
        				if(this.reqInfo.REG_BTN_YN == "Y" || this.reqInfo.REV_BTN_YN == "Y")	this.isBtnAuth = true;
        			}

        			if(this.dsWfReqAppvDt.rowcount > 1)
        			{
        				this.stcApprWfProcCd.set_visible(true);
        				this.cboApprWfProcCdLvlSeq.set_visible(true);
        			}
        			else
        			{
        				this.stcApprWfProcCd.set_visible(false);
        				this.cboApprWfProcCdLvlSeq.set_visible(false);
        			}
        			//trace("Callback [selectSeq] this.reqInfo.WF_PROC_CD : " + this.reqInfo.WF_PROC_CD + " this.isBtnAuth : " + this.isBtnAuth);

        			this.cboApprWfProcCdLvlSeq.setInnerDataset("");
        			var minWfProcCd		= Ex.isNvl(this.dsCurApprLvlSeq.getColumn(0, "MIN_WF_PROC_CD"), this.reqInfo.SCRN_WF_PROC_CD);
        			var minApprLvlSeq	= nexacro.toNumber(this.dsCurApprLvlSeq.getColumn(0, "MIN_APPR_LVL_SEQ"), 0);

        			//trace("※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※\n" + this.dsCurApprLvlSeq.saveXML());

        			var fRow = this.dsWfReqAppvDt.findRow("WF_PROC_CD", minWfProcCd);

        			if(fRow > -1)	this.dsWfReqAppvDt.filter("WF_PROC_CD=='" + minWfProcCd + "'");

        			minWfProcCd = this.dsWfReqAppvDt.getColumn(0, "WF_PROC_CD");
        			if(minApprLvlSeq == 0)		minApprLvlSeq = this.dsWfReqAppvDt.getColumn(0, "APPR_LVL_SEQ");

        			this.dsCurApprLvlSeq.setColumn(0, "MIN_WF_PROC_CD", minWfProcCd);
        			this.dsCurApprLvlSeq.setColumn(0, "MIN_APPR_LVL_SEQ", minApprLvlSeq);

        			if(fRow > -1)	this.dsWfReqAppvDt.filter("");

        			this.cboApprWfProcCdLvlSeq.setInnerDataset(this.dsWfReqAppvDt);
        			this.cboApprWfProcCdLvlSeq.set_value(minWfProcCd + "-" + minApprLvlSeq);

        			var evt = nexacro.ItemChangeEventInfo;
        			evt.postvalue = this.cboApprWfProcCdLvlSeq.value;
        			this.cboOnItemChanged(this.cboApprWfProcCdLvlSeq, evt);

        			//this.reqInfo.PARENT_FORM.fnAppvSearchAfter(sSvcId, 0);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	//trace("SR0010_D01 this.fnPopupAfter() pID : " + pID + " varValue : " + varValue);
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "selectApprUserPop" :	// 사용자선택
        			if( !Ex.isEmpty(varValue) )
        			{
        				if(varValue.indexOf("<Dataset id=") > -1)
        				{
        					//trace("[SR0010_D01]-this.fnPopupAfter varValue:\n" + varValue);
        					//this.dsWfApprovalMt.clearData();
        					var filterstr = this.dsWfApprovalMt.filterstr;
        					this.dsWfApprovalMt.loadXML(varValue);
        					this.dsWfApprovalMt.set_filterstr(filterstr);

        					var fRow = this.dsWfReqAppvDt.findRow("WF_PROC_CD_SEQ", this.cboApprWfProcCdLvlSeq.value);
        					var apprProgDivCd = this.dsWfReqAppvDt.getColumn(fRow, "APPR_PROG_DIV_CD");

        					for(var i=0; i<this.dsWfApprovalMt.rowcount; i++)
        					{
        						if(apprProgDivCd == "01")	//동시진행
        						{
        							this.dsWfApprovalMt.setColumn(aRow, "APPR_SEQ", 1);
        						}
        					}
        					//trace("[SR0010_D01]-this.fnPopupAfter [결재선 셋팅 완료] this.dsWfApprovalMt.rowcount:[" + this.dsWfApprovalMt.rowcount + "]");
        				}
        			}
        			break;

        		case "selectApprRefUserPop" :
        			//trace("varValue:\n" + varValue);
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsRtn.loadXML(varValue);
        				for(var i=0; i<this.dsRtn.rowcount; i++)
        				{
        					var aRow = this.dsWfApprovalRefMt.setAddRow();
        					this.dsWfApprovalRefMt.setColumn(aRow, "REQ_ID",	this.dsCond.getColumn(0, "REQ_ID"));
        					var wfProcCdSeq = this.cboApprWfProcCdLvlSeq.value.split("-");
        					this.dsWfApprovalRefMt.setColumn(aRow, "WF_PROC_CD", wfProcCdSeq[0]);
        					this.dsWfApprovalRefMt.setColumn(aRow, "APPR_LVL_SEQ", wfProcCdSeq[1]);
        					this.dsWfApprovalRefMt.setColumn(aRow, "USER_ID",	this.dsRtn.getColumn(i, "USER_ID"));
        					this.dsWfApprovalRefMt.setColumn(aRow, "USER_NM",	this.dsRtn.getColumn(i, "USER_NM"));
        					this.dsWfApprovalRefMt.setColumn(aRow, "DEPT_NM",	this.dsRtn.getColumn(i, "DEPT_NM"));
        					this.dsWfApprovalRefMt.setColumn(aRow, "POS_NM",	this.dsRtn.getColumn(i, "POS_NM"));
        				}
        			}
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

        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pAlertNoDataI" :
        			this.tbWf.tabpage1.form.grdWfApprovalMt.setFocus();
        			break;

        		case "pAlertNoWfSettingI" :
        			Ex.core.pclose(this.parent.parent.parent);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	//Ex.util.setBtnAlign(this.divTopButton, 'right', true);	// 버튼 영역 div align 처리
        }

        this.isUpdateForm = function()
        {
        	if(Ex.util.isUpdated(this.dsWfApprovalMt) || Ex.util.isUpdated(this.dsWfApprovalRefMt)) return true;
        	else return false;
        }

        this.fnSaveCheck = function(isReg)
        {
        	//trace("SR0010_D01 this.fnSaveCheck() isReg : " + isReg);
        	if(isReg)
        	{
        		var filterStr = this.dsWfApprovalMt.filterstr;

        		this.dsWfApprovalMt.set_filterstr("");
        		var cnt = this.dsWfApprovalMt.rowcount;
        		this.dsWfApprovalMt.set_filterstr(filterStr);

        		if(cnt == 0)
        		{
        			this.dsWfApprovalMt.set_filterstr(filterStr);
        			var param = {id : "pAlertNoDataI", msg : "결재선이 지정되지 않았습니다."};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	return true;
        }

        this.fnSetBtn = function(tabIndex, apprLvlSeqVal)
        {
        	//alert("this.fnSetBtn() this.isBtnAuth : " + this.isBtnAuth);
        	if(this.isBtnAuth)
        	{
        		if(tabIndex == 0)
        		{
        			var fRow = this.dsWfReqAppvDt.findRow("WF_PROC_CD_SEQ", apprLvlSeqVal);
        			var apprDirectYn = Ex.isNvl(this.dsWfReqAppvDt.getColumn(fRow, "APPR_DIRECT_YN"), "N");
        			var apprProcDivCd	= this.dsWfReqAppvDt.getColumn(fRow, "APPR_PROC_DIV_CD");

        			if(apprDirectYn == "Y" || apprProcDivCd == "01")	this.divTopButton.set_visible(true);
        			else					this.divTopButton.set_visible(false);
        			this.divTopButton2.set_visible(false);
        		}
        		else
        		{
        			this.divTopButton.set_visible(false)
        			this.divTopButton2.set_visible(true);
        		}
        	}
        	else
        	{
        		this.divTopButton.set_visible(false);
        		this.divTopButton2.set_visible(false);
        	}
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnApproval" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"selectApprUserPop",	// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"sr::SR0020_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title				: "결재선 지정",
        					pReqId				: this.reqInfo.REQ_ID,
        					pApprWfProcCdLvlSeq	: this.cboApprWfProcCdLvlSeq.value,
        					dsWfApprovalMt		: this.dsWfApprovalMt
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=800,height=750"	// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize,useCloseButton=false"
        			);
        			break;

        		case "btnAdd" :
        			Ex.core.popup(
        				this,
        				'selectApprRefUserPop',
        				"fomm::FOMM0000_P01.xfdl",             	// <--- 팝업창 오픈 Url
        				{
        					title		: '참조자 선택',
        					pSelType	: 'M',
        					pType		: "name",
        					pCheckDs	: this.dsWfApprovalRefMt,
        					pCheckCol	: "USER_ID"
        				},										// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				//"width=900,height=500"				// <--- width/height/modeless(프레임 처리 옵션)
        				"autosize,useCloseButton=false"
        			);
        			break;

        		case "btnDelete" :
        			this.fnDelete(this.dsWfApprovalRefMt);
        			break;
        	}
        }

        this.cboOnItemChanged = function(obj,e)
        {
        	var val = e.postvalue.split("-");

        	trace("this.cboOnItemChanged() val[0] : " + val[0] + " val[1] : " + val[1]);
        	this.dsWfApprovalMt.filter("WF_PROC_CD=='" + val[0] + "' && APPR_LVL_SEQ=='" + val[1] + "'");
        	this.dsWfApprovalRefMt.filter("WF_PROC_CD=='" + val[0] + "' && APPR_LVL_SEQ=='" + val[1] + "'");

        	trace("this.cboOnItemChanged() tabIndex:[" + this.tbWf.tabindex + "] cboApprWfProcCdLvlSeq.value:[" + e.postvalue + "]");
        	this.fnSetBtn(this.tbWf.tabindex, e.postvalue);

        };

        this.tabOnChanged = function(obj,e)
        {
        	trace("this.tabOnChanged() tabIndex:[" + e.postindex + "] cboApprWfProcCdLvlSeq.value:[" + this.cboApprWfProcCdLvlSeq.value + "]");
        	this.fnSetBtn(e.postindex, this.cboApprWfProcCdLvlSeq.value);
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
            this.tbWf.addEventHandler("onchanged",this.tabOnChanged,this);
            this.divTopButton2.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divTopButton2.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.cboApprWfProcCdLvlSeq.addEventHandler("onitemchanged",this.cboOnItemChanged,this);
            this.divTopButton.form.btnApproval.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsWfApprovalMt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfApprovalRefMt.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0010_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
