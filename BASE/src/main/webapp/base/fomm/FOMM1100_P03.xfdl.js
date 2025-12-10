(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1100_P03");
            this.set_titletext("변경이력 등록(일괄)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExpt", this);
            obj._setContents("<ColumnInfo><Column id=\"RQS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_SCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staAuthTitle","1520","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","divBottom:0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","20.00","20",null,null,"20","Static00_02:0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcOpDesc","20.00","20","110",null,null,"Static00_02:0",null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("변경사유");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaApprDesc","stcOpDesc:5.00","25",null,null,"25","Static00_02:5",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("변경사유;NULL|MAX_LEN_ASC :512");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.edtGrpId","value","dsMethodGrp","METHOD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.edtTitle","value","dsWfApprovalMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.edtReqDt","value","dsWfApprovalMt","REQ_DATE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.edtReqId","value","dsWfApprovalMt","REQ_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContent.form.stcBg01_00_01","value","dsWfApprovalMt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.chkGreA","value","dsMethodItem","GRDA_ESSN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.chkGreB","value","dsMethodItem","GRDB_ESSN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.chkGreC","value","dsMethodItem","GRDC_ESSN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.chkGreD","value","dsMethodItem","GRDD_ESSN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContent.form.chkPrj","value","dsMethodItem","PRJ_ESSN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContent.form.chkEss","value","dsMethodItem","MUST_ESSN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.cboOpStep","value","dsMethodItem","ACT_STEP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.cboOpStepDet","value","dsMethodItem","ACT_STEP_SUB_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContent.form.edtOpType","value","dsMethodItem","METHODITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContent.form.edtGrpNm","value","dsMethodGrp","METHOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1100_P03.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM1100_P03
        * 화면(명)	︰ 변경사유등록
        * 메뉴(경로)	︰ 관리자 > 사용자권한관리 > 서비스별 담당자관리
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.02.13
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.13	 WEMB			최초작성
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
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        };

        this.fnInit = function()
        {
        	var popupType = this.getOwnerFrame().pPopupType;

        // 	if(popupType =='S')
        // 	{
        // 		var objBindItem = new BindItem();
        // 		objBindItem.init("item14","divContent.form.txaApprDesc","value","dsData","CHG_REASON");
        // 		this.addChild("item14",objBindItem);
        // 		objBindItem.bind();
        // 	}
        // 	else
        // 	{
        // 		this.divBottom.form.btnSave.visible = true;
        // 	}
        	this.divBottom.form.btnSave.visible = true;
        };

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        //저장
        this.fnSave = function()
        {
        };

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
        		case "reqExpt" :
        			break;
        	}
        };

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "reqConfirm" :
        			break;

        		case "saveAlert" :
        			break;

        	}
        };

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCheckValidate = function()
        {
        	if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") )	return false;
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
        		case "btnSave" :		// 저장
        			if(this.fnCheckValidate())
        			{
        				var rtnVal = this.divContent.form.txaApprDesc.value;
        				Ex.core.pclose(this, rtnVal);
        			}
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        };

        this.dsMethodTmpl_oncolumnchanged = function(obj,e)
        {
        	 obj.setUpdateRow(e);	// ROWFLAG컬럼 변경을 위한 함수 호출
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("FOMM1100_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
