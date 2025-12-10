(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_P03");
            this.set_titletext("접수의견(보안담당자)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,247);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRevProc", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CEGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EXAM_OPIN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_SDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_EDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSecGradeCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSecCgerGrade", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","-21",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("staAuthTitle","1520","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg","0","66",null,null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaOpinion","95.00","71",null,null,"5","5",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("검토의견;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcOpinion","0","66","90",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("검토의견");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg00_00","0","33",null,"34","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcSecGrade","0","33","90","34",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("보안등급");
            obj.set_cssclass("sta_WF_inputTitle_E");
            this.divContent.addChild(obj.name, obj);

            obj = new Combo("cboSecGrade","stcSecGrade:5.00","38","110","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSecGradeCd");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("보안등급;NULL");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","170","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("보안담당자 결재 의견");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static32","0","24",null,"10","-8",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","-81",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnProc",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,247,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.txaOpinion","value","dsRevProc","PROC_EXAM_OPIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.stcProcUserNm","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtUserNm","value","dsRevProc","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.mskProcDate","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.stcBg00_00","value","dsRevProc","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.cboSecGrade","value","dsSecCgerGrade","SECURE_GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0010_P03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR0010_P03
        * 화면(명)	︰ 접수의견(보안담당자)
        * 메뉴(경로)	︰
        * 화면 설명	︰ 접수의견(보안담당자)
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.09.03
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        	작성자		이력
        *------------------------------------------------------------------
        * 2024.09.03	WEMB		최초작성
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
        	this.gfnFormOnLoad(this, this.fnInit);

        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        	this.dsCond.setColumn(0, "WF_PROC_CD", this.reqInfo.SCRN_WF_PROC_CD);
        }

        this.fnInit = function()
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pOPINION) ) this.dsRtn.setColumn(0, "OPINION", this.getOwnerFrame().pOPINION);
        	this.divContent.form.txaOpinion.setFocus();

        	this.fnGetCmmCd();


        	trace("[SR0010_P03] this.reqInfo.SCRN_WF_PROC_CD : "+ this.reqInfo.SCRN_WF_PROC_CD);

        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());
        }

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
        	switch (sSvcId)
        	{
        		case "select" :
        			//this.wfdsReqCgerDt = this.getOwnerFrame().pDsdWfCger;
        			trace("[SR0010_P03]-this.fnCallback() [select01] SCRN_WF_PROC_CD : " + this.reqInfo.SCRN_WF_PROC_CD);
        			trace("[SR0010_P03]-this.fnCallback() [select01] this.reqInfo.REQ_ID : " + this.reqInfo.REQ_ID);

        			if( this.dsRevProc.rowcount == 0)
        			{
        				var aRow = this.dsRevProc.setInsertRow();
        				this.dsRevProc.setColumn(aRow, "REQ_ID", this.reqInfo.REQ_ID);
        				this.dsRevProc.setColumn(aRow, "WF_PROC_CD", this.reqInfo.WF_PROC_CD);
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch (pID)
        	{
        		case "" :
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
        		case "pAlertSaveGubunI" :	// 그냥 닫기
        			this.dsRtn.setColumn(0, "RESULT", "CLOSE");
        			Ex.core.pclose(this, this.dsRtn.saveXML());
        			break;

        		case "pConfirm" :			// 접수/반려 버튼
        			this.dsRtn.setColumn(0, "RESULT", "PROC");
        			Ex.core.pclose(this, this.dsRtn.saveXML());
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['SEC_GRADE_CD'	]	// 조회할 상위코드
        		,codeDiv: ['WORKFLOW_CD'	]	// 조회할 코드의 업무구분
        		,optStr	: ['SEL'			]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y'				]	// 사용여부
        		,filter	: [''				]	// filterStr
        		,objDs	: [this.dsSecGradeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }

        this.isUpdateForm = function()
        {
        	if( !Ex.util.isUpdated(this.dsRevProc) && !Ex.util.isUpdated(this.dsSecCgerGrade) ) return false;
        	else return true;
        }

        this.fnSaveCheck = function()
        {
        	if( !this.fnCheckValidate() ) return false;
        	return true;
        }

        this.fnCheckValidate = function()
        {
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") ) return false;
        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
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
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnProc.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsRevProc.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSecCgerGrade.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0010_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
