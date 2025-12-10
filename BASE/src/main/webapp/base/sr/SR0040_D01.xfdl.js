(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0040_D01");
            this.set_titletext("기본요청서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,371);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNextWfProcCd", this);
            obj._setContents("<ColumnInfo><Column id=\"NEXT_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrBasicReq", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcReqDescBg","0","67",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcReqDesc","0","67","130",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNmBg","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaReqDesc","stcReqDesc:5","74",null,null,"5","6",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_validationGroup("group01");
            obj.set_cssclass("txa_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProcUserNm","stcProcUserNm:5","39","195","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,371,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txaReqDesc","value","dsSrBasicReq","REQ_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtProcUserNm","value","dsSrBasicReq","PROC_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0040_D01.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0040_D01.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0040D_01
        * 화면(명)		︰ 기초요청서
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.05.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.nextWfProcCdArr;
        this.baseWfProcCd;
        this.CGER_NM;
        this.WF_PROC_NM;

        this.selectServiceInfo = {
        	CALLBACK_ID		: ["select01"],
        	CALL_SVC		: ["sr/SR0040D/select01"],

        	IN_DS_WHERE		: [this.dsCond],
        	OUT_DS_OBJ		: [new Array(this.dsSrBasicReq)]
        };

        this.saveServiceInfo = {
        	CALLBACK_ID		: ["save01"],
        	CALL_SVC		: ["sr/SR0040D/save01"],

        	IN_DS_TYPE		: [new Array("MAP")],
        	IN_DS_OBJ		: [new Array(this.dsSrBasicReq)],
        	OUT_DS_OBJ		: []
        };
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);

        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.SCRN_WF_PROC_CD);

        	if( Ex.isEmpty(this.wfDsReqWfProc) )
        	{
        		this.wfdsReqWfProc = new Dataset();
        	}
        	this.wfdsReqWfProc.loadXML(this.dsWfProc.saveXML());

        	//trace("SR0040_D01 this.form_onload() " + this.wfdsReqWfProc.saveXML());
        }

        this.fnInit = function()
        {
        	var curWfProcCd = this.dsCond.getColumn(0, "WF_PROC_CD");
        	this.baseWfProcCd = this.wfdsReqWfProc.getColumn(0, "WF_PROC_CD");

        	//trace("SR0040_D01 this.fnInit() curWfProcCd : " + curWfProcCd + " this.baseWfProcCd : " + this.baseWfProcCd + " this.reqInfo.SCRN_WF_PROC_CD : " + this.reqInfo.SCRN_WF_PROC_CD + " this.reqInfo.WF_PROC_CD : " + this.reqInfo.WF_PROC_CD);

        	var rtn = this.wffnGetOptByWfProcCd(this.reqInfo.SCRN_WF_PROC_CD, "CUR");
        	this.nextWfProcCdArr = rtn.NEXT_WF_PROC_CD;

        	var nextWfProcCd = this.nextWfProcCdArr[0];
        	this.dsNextWfProcCd.clearData();
        	this.dsNextWfProcCd.addRow();

        	this.dsNextWfProcCd.setColumn(0, "PROC_USER_ID", Ex.util.getSession('gvUserId'));
        	this.dsNextWfProcCd.setColumn(0, "NEXT_WF_PROC_CD", nextWfProcCd);

        	this.wfdsReqCgerDt = this.getOwnerFrame().pDsdWfCger;

        	//trace("SR0040_D01 this.fnInit() SCRN_WF_PROC_CD : " + this.reqInfo.SCRN_WF_PROC_CD);
        	//trace("SR0040_D01 this.fnInit() next_wf_proc_cd : " + nextWfProcCd);
        	//trace(SR0040_D01 this.fnCallback() this.wfdsReqCgerDt.saveXML());

        	var oParam = {
        		wfProcCd : [this.reqInfo.SCRN_WF_PROC_CD, nextWfProcCd]
        		,optStr: ['NO', 'SEL']
        		,filter	: ['', '']
        		,objDs	: [this.dsProc, this.dsCegr]
        	}
        	this.wffnGetCger(oParam);

        	var fRow = this.dsProc.findRow("USER_ID", Ex.util.getSession('gvUserId'));

        	//trace("SR0200_D02 this.fnCallback() gvUserId : " + Ex.util.getSession('gvUserId') + " fRow : " + fRow);

        	if(this.getOwnerFrame().pEditYn)
        	{
        		if(this.baseWfProcCd != this.reqInfo.WF_PROC_CD && this.reqInfo.WF_PROC_CD == curWfProcCd && this.reqInfo.WF_PROC_CD != "WF_PROC_9999")
        		{
        			if(fRow == -1)
        			{
        				//접수자에 존재하지 않는 사람이 접근한 경우
        				var param = {id : "pAlertNoRevUserI", msg : "현재 로그인 사용자는 처리 가능 담당자가 아닙니다."};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}
        	}

        	this.CGER_NM = rtn.CGER_NM;
        	this.WF_PROC_NM	= rtn.WF_PROC_NM;

        	if(this.baseWfProcCd == this.reqInfo.SCRN_WF_PROC_CD)
        	{
        		this.stcReqDesc.set_top(34);
        		this.stcReqDescBg.set_top(34);
        		this.txaReqDesc.set_top(39);
        		this.stcTitle.set_text(Ex.core.word(this.WF_PROC_NM));
        		this.txaReqDesc.set_validation(Ex.core.word("요청내용") + ";NULL|MAX_LEN_UTF8:4000");
        		this.stcReqDesc.set_text(Ex.core.word("요청내용"));
        	}
        	else
        	{
        		this.stcProcUserNm.set_visible(true);
        		this.edtProcUserNm.set_visible(true);
        		this.stcProcUserNmBg.set_visible(true);
        		this.stcTitle.set_text(Ex.core.word(this.WF_PROC_NM));
        		this.txaReqDesc.set_validation(Ex.core.word("검토의견") + ";NULL|MAX_LEN_UTF8:4000");
        		this.stcReqDesc.set_text(Ex.core.word("검토의견"));
        		this.stcProcUserNm.set_text(this.CGER_NM);
        	}

        	if(this.getOwnerFrame().pEditYn)
        	{
        		this.fn_initDataset();
        	}
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fn_initDataset = function()
        {
         	if( Ex.isEmpty(this.dsCond.getColumn(0, "REQ_ID")) )
        	{
        		var aRow = this.dsSrBasicReq.setInsertRow();
        		this.dsSrBasicReq.setColumn(0, "WF_PROC_CD", this.dsCond.getColumn(0, "WF_PROC_CD"));	//임시저장
        		this.dsSrBasicReq.setColumn(0, "PROC_USER_ID", Ex.util.getSession('gvUserId'));
        		this.dsSrBasicReq.setColumn(0, "PROC_USER_NM", Ex.util.getSession('gvUserNm'));
        		this.dsSrBasicReq.setColumn(0, "PROC_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        		this.dsSrBasicReq.setColumn(0, "PROC_DEPT_NM", Ex.util.getSession('gvDeptNm'));
        		this.dsSrBasicReq.setColumn(0, "BASE_WF_PROC_CD", this.baseWfProcCd);
        		this.dsSrBasicReq.setColumn(0, "GUBUN_NM", this.CGER_NM);
        	}
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

        	//trace("SR0040_D01 this.fnCallback()");

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "select01" :
        			if(this.dsSrBasicReq.rowcount == 0)
        			{
        				if(this.getOwnerFrame().pEditYn)
        				{
        					var aRow = this.dsSrBasicReq.setInsertRow();
        					this.dsSrBasicReq.setColumn(0, "REQ_ID", this.dsCond.getColumn(0, "REQ_ID"));
        					this.dsSrBasicReq.setColumn(0, "WF_PROC_CD", this.dsCond.getColumn(0, "WF_PROC_CD"));
        					this.dsSrBasicReq.setColumn(0, "PROC_USER_ID", Ex.util.getSession('gvUserId'));
        					this.dsSrBasicReq.setColumn(0, "PROC_USER_NM", Ex.util.getSession('gvUserNm'));
        					this.dsSrBasicReq.setColumn(0, "PROC_DEPT_CD", Ex.util.getSession('gvDeptCd'));
        					this.dsSrBasicReq.setColumn(0, "PROC_DEPT_NM", Ex.util.getSession('gvDeptNm'));
        				}
        			}
        			else
        			{
        				this.dsSrBasicReq.set_enableevent(false);
        				this.dsSrBasicReq.set_updatecontrol(false);
        				this.dsSrBasicReq.setColumn(0, "BASE_WF_PROC_CD", this.baseWfProcCd);
        				this.dsSrBasicReq.set_updatecontrol(true);
        				this.dsSrBasicReq.set_enableevent(true);
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	//trace("pID=" + pID + " varValue=" + varValue);

        	if( Ex.isEmpty(varValue) ) return;
        	//this.dsPopRtn.loadXML(varValue);

        	switch (pID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pAlertReqDescI" :
        			this.txaReqDesc.setFocus();
        			break;

        		case "pAlertNoRevUserI" :
        			Ex.core.pclose(this, "");
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.isUpdateForm = function()
        {
        	if( !Ex.util.isUpdated(this.dsSrBasicReq) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function(isReg)
        {
        	if( Ex.isEmpty(this.dsSrBasicReq.getColumn(0, "GUBUN_NM")) )
        	{
        		this.dsSrBasicReq.set_enableevent(false);
        		this.dsSrBasicReq.set_updatecontrol(false);
        		this.dsSrBasicReq.setColumn(0, "GUBUN_NM", this.CGER_NM);
        		this.dsSrBasicReq.set_updatecontrol(true);
        		this.dsSrBasicReq.set_enableevent(true);
        	}

        	//trace("SR0040_D01 this.fnSaveCheck()");
        	return Ex.util.checkValidate(this, "group01");
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
        		case "" :
        			break;
        	}
        }

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSrBasicReq.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0040_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
