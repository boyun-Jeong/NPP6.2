(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_P01");
            this.set_titletext("workflow 사용자 정보");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,489);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CGER_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprStatCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","20","20",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("결재선 검색");
            obj.set_border("0px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","485","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Grid("grdUser","0","stcEmpty01:0",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsUser");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"appr\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"135\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No.\"/><Cell col=\"1\" colspan=\"7\" text=\"결재자 정보\"/><Cell col=\"8\" colspan=\"4\" text=\"대직자 정보\"/><Cell row=\"1\" col=\"1\" text=\"사번\"/><Cell row=\"1\" col=\"2\" text=\"성명\"/><Cell row=\"1\" col=\"3\" text=\"부서명\"/><Cell row=\"1\" col=\"4\" text=\"내선번호\"/><Cell row=\"1\" col=\"5\" text=\"결재상태\"/><Cell row=\"1\" col=\"6\" text=\"결재의견\"/><Cell row=\"1\" col=\"7\" text=\"결재일시\"/><Cell row=\"1\" col=\"8\" text=\"사번\"/><Cell row=\"1\" col=\"9\" text=\"성명\"/><Cell row=\"1\" col=\"10\" text=\"부서명\"/><Cell row=\"1\" col=\"11\" text=\"내선번호\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TELNUM\"/><Cell col=\"5\" displaytype=\"combotext\" combodataset=\"dsApprStatCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" text=\"bind:APPR_STAT_CD\"/><Cell col=\"6\" text=\"bind:APPR_DESC\" textAlign=\"left\" tooltiptext=\"bind:APPR_DESC\"/><Cell col=\"7\" displaytype=\"expr:!Ex.isEmpty(APPR_STIME) ? &quot;date&quot; : &quot;none&quot;\" combodataset=\"dsApprStatCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" text=\"bind:APPR_STIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"bind:DAEJIC_USER_ID\"/><Cell col=\"9\" text=\"bind:DAEJIC_USER_NM\"/><Cell col=\"10\" text=\"bind:DAEJIC_DEPT_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:DAEJIC_TELNUM\"/></Band></Format><Format id=\"cger\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"130\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"내선번호\"/><Cell col=\"5\" text=\"검토의견\"/><Cell col=\"6\" text=\"처리일시\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TELNUM\"/><Cell col=\"5\" text=\"bind:PROC_EXAM_OPIN\" textAlign=\"left\" tooltiptext=\"bind:APPR_DESC\"/><Cell col=\"6\" displaytype=\"expr:!Ex.isEmpty(PROC_DATE) ? &quot;date&quot; : &quot;none&quot;\" combodataset=\"dsApprStatCd\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" text=\"bind:PROC_DATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format><Format id=\"bak\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"내선번호\"/><Cell col=\"5\" text=\"휴대번호\"/><Cell col=\"6\" text=\"이메일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TELNUM\"/><Cell col=\"5\" text=\"bind:MOBILE_NUM\"/><Cell col=\"6\" text=\"bind:EMAIL_ADR\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,489,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divTop.form.divSearchArea.form.edtCoNm","value","dsCond","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divTop.form.divSearchArea.form.cboDelYn","value","dsCond","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0010_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR0010_P01
        * 화면(명)	︰ workflow 사용자 정보
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ workflow 사용자 정보
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.09.02
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.09.02	WEMB		최초작성
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
        }

        this.fnInit = function()
        {
        	this.dsCond.setColumn(0, "GUBUN", this.getOwnerFrame().pGubun);
        	this.dsCond.setColumn(0, "REQ_TMPLAT_ID", this.getOwnerFrame().pReqTmplatId);
        	this.dsCond.setColumn(0, "REQ_TMPLAT_VER", this.getOwnerFrame().pReqTmplatVer);
        	this.dsCond.setColumn(0, "REQ_ID", this.getOwnerFrame().pReqId);
        	this.dsCond.setColumn(0, "WF_PROC_CD", this.getOwnerFrame().pWfProcCd);
        	this.dsCond.setColumn(0, "CGER_TYPE_CD", this.getOwnerFrame().pCgerTypeCd);
        	this.dsCond.setColumn(0, "APPR_LVL_SEQ", this.getOwnerFrame().pApprLvlSeq);
        	this.dsCond.setColumn(0, "APPR_CNT", this.getOwnerFrame().pApprCnt);

        	this.divTop.form.stcInfoTitle.set_text(this.getOwnerFrame().pCgerGubun);

         	if(this.getOwnerFrame().pGubun != "2")	 //&& this.getOwnerFrame().pApprCnt > 1
         	{
         		this.divTop.form.grdUser.set_formatid("cger");
         	}
        	this.divTop.form.grdUser.set_visible(true);
        	this.fnCompInit();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "selectUser";
            var sService = "SR0010P/select01";		// 서비스명
            var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUser=dsUser";			// 서버에서 수신할 데이타셋
            var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
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
        	switch(sSvcId)
        	{
        		case "" :
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :	// 사용자선택
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
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
        this.fnCompInit = function()
        {
        	this.fnGetCmmCd();		// 공통코드 조회

        	this.fnSearch();		// 조회
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ["APPR_STAT_CD"	]	// 조회할 상위코드
        		,codeDiv: ["WORKFLOW_CD"	]	// 조회할 코드의 업무구분
        		,optStr	: [""				]	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ["Y"				]	// 사용여부
        		,filter	: [""				]	// filterStr
        		,objDs	: [this.dsApprStatCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }


        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var divId = obj.parent.parent.parent.parent.id;

        	//trace("this.fnCommOnclick() divId ::: " + divId + " obj.name : " + obj.name);

        	switch(obj.name)
        	{
        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsUser.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0010_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
