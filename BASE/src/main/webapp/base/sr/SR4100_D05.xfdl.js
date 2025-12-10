(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR4100_D05");
            this.set_titletext("이행평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,158);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfPbm", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"14\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"14\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"16\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"60\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"3000\"/><Column id=\"REQ_WISH_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_WISH_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PBM_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_CONF_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_BJC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_MH\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTP_MH\" type=\"STRING\" size=\"256\"/><Column id=\"KNOW_REG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_COMP_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_ETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SOLVED_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SRL_EXM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResultCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">S</Col><Col id=\"CMM_CD_NM\">정상</Col></Row><Row><Col id=\"CMM_CD\">F</Col><Col id=\"CMM_CD_NM\">비정상</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg01_00_00","0","67",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","34",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcExamOpin","0","67","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("stcProcUserNm","0","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("평가결과");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","66.67%","34","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("지식등록여부");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이행평가");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboResultCode","stcProcUserNm:5","39","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tooltiptext("담당자가 위엠비 직원인 경우만 선택 가능!!");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsResultCode");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_value("1");
            obj.set_index("0");
            obj.set_text("정상");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaEvalCont","stcProcExamOpin:5","72",null,"81","5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.getSetter("mask").set("");
            obj.getSetter("validate").set("");
            obj.set_imemode("hangul");
            obj.set_cssclass("txa_WF_normal");
            obj.set_maxlength("4000");
            obj.set_validationGroup("input01");
            obj.set_validation("평가의견;NULL");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1820,158,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cboResultCode","visible","dsWfPbm","EVAL_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","txaEvalCont","value","dsWfPbm","EVAL_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR4100_D05.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR4100_D05.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR5100_D05
        * 화면(명)	︰ 이행평가
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2024.11.21	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        	//this.fn_initDataset();
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

        	// 각 Transaction별 CallBack 처리
        	//trace("SR0200_D02 this.fnCallback() sSvcId:::[" + sSvcId + "]");

        	switch(sSvcId)
        	{
        		case "select" :
        			if( this.dsRevProc.rowcount == 0)
        			{
        				var aRow = this.dsRevProc.setInsertRow();
        				this.dsRevProc.setColumn(aRow, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsRevProc.setColumn(aRow, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);

        				if(this.reqInfo.WF_FUNC_CD == "WF_FUNC_04" && (this.reqInfo.SAVE_BTN_YN == "Y" || this.reqInfo.REV_BTN_YN == "Y") )
        				{
        					this.dsRevProc.setColumn(0, "USER_ID", Ex.util.getSession('gvUserId'));
        					this.dsRevProc.setColumn(0, "USER_NM", Ex.util.getSession('gvUserNm'));
        					this.dsWfPbm.setColumn(0, "WORK_USER_NM", Ex.util.getSession('gvUserNm'));
        				}
        			}
        		break;

        		case "select01" :

        			var rtn = this.wffnGetOptByWfProcCd(this.reqInfo.SCRN_WF_PROC_CD, "CUR");
        			this.nextWfProcCdArr = rtn.NEXT_WF_PROC_CD;

        			this.dsNextWfProcCd.clearData();
        			this.dsNextWfProcCd.addRow();

        			this.dsNextWfProcCd.setColumn(0, "PROC_USER_ID", Ex.util.getSession('gvUserId'));

        			var nextWfProcCd = "";

        			if(this.nextWfProcCdArr.length == 1)
        			{
        				nextWfProcCd = this.nextWfProcCdArr[0];
        				this.dsNextWfProcCd.setColumn(0, "NEXT_WF_PROC_CD", nextWfProcCd);
        			}
        			else
        			{	/* 다음 워크플로우가 1개를 초과하면 개발자가 판단하여 다음 단계를 지정 */
        				nextWfProcCd = this.nextWfProcCdArr[0];
        				this.dsNextWfProcCd.setColumn(0, "NEXT_WF_PROC_CD", nextWfProcCd);
        			}

        			this.wfdsReqCgerDt = this.getOwnerFrame().pDsdWfCger;

        			trace("SR0200_D02 this.fnCallback() SCRN_WF_PROC_CD : " + this.reqInfo.SCRN_WF_PROC_CD);
        			trace("SR0200_D02 this.fnCallback() next_wf_proc_cd : " + nextWfProcCd);
        			//trace(SR0200_D02 this.fnCallback() this.wfdsReqCgerDt.saveXML());

        			var oParam = {
        				wfProcCd : [this.reqInfo.SCRN_WF_PROC_CD, nextWfProcCd]
        				,optStr: ['NO', 'SEL']
        				,filter	: ['', '']
        				,objDs	: [this.dsProc, this.dsCegr]
        			}
        			this.wffnGetCger(oParam);

        			//trace("SR0200_D02 this.fnCallback() dsProc:\n" + this.dsProc.saveXML());
        			//trace("SR0200_D02 this.fnCallback() dsCegr:\n" + this.dsCegr.saveXML());
        			//trace("this.reqInfo.REQ_ID : " + this.reqInfo.REQ_ID);

        			if( this.dsRevProc.rowcount == 0 )
        			{
        				var aRow = this.dsRevProc.setInsertRow();
        				this.dsRevProc.setColumn(aRow, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsRevProc.setColumn(aRow, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);

        				var fRow = this.dsProc.findRow("USER_ID", Ex.util.getSession('gvUserId'));

        				//trace("SR0200_D02 this.fnCallback() gvUserId : " + Ex.util.getSession('gvUserId') + " fRow : " + fRow);

        				if(fRow == -1)
        				{
        					//접수자에 존재하지 않는 사람이 접근한 경우
        					//Ex.core.pclose(this, "");
        				}
        				else
        				{
        					this.dsRevProc.setColumn(0, "USER_ID", Ex.util.getSession('gvUserId'));
        					this.dsRevProc.setColumn(0, "USER_NM", Ex.util.getSession('gvUserNm'));
        				}
        				this.dsRevProc.setColumn(aRow, "GUBUN_NM", rtn.CGER_NM);

        				this.cboCegr.set_index(0);
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	//trace("SR0200_D02 this.fnPopupAfter() pID : " + pID + " varValue : " + varValue);
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :	//
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
        		case "pAlertCegrI" :
        			this.cboCegr.setFocus();
        			break;

        		case "pAlertProcExamOpinI" :
        			this.txaProcExamOpin.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
         this.fnCompInit = function()
        {
        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());
        }
        this.fnSaveCheck = function(isRev)
        {
        	this.dsWfPbm.setColumn(0, "EVAL_RESULT", this.cboResultCode.value);
        	//this.dsWfPbm.setColumn(0, "EVAL_CONT", this.txaEvalCont.value);
        	if( !Ex.util.checkValidate(this, "input01") ) return false;

        	/*if (this.dsWfPbm.getColumn(0,"EVAL_RESULT") == null){
        		var param = {
                	msg	: "평가결과를 확인하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		this.cboResultCode.setFocusRed();
        		return false;
        	}*/

        	if (this.dsWfPbm.getColumn(0,"EVAL_CONT") == null){
        		var param = {
                	msg	: "평가의견 확인하시기 바랍니다."	//메시지 내용
                	, arrparam : []						//메시지의 변수에 들어갈 실제값
                	, msgtype : "E"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                	};
                Ex.core.alert(this, param);
        		this.txaEvalCont.setFocusRed();
        		return false;
        	}

        	return true;
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsRevProc);
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
            this.cboResultCode.addEventHandler("onitemchanged",this.onCboItemChanged,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsWfPbm.addEventHandler("onvaluechanged",this.onValueChanged,this);
            this.dsWfPbm.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR4100_D05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
