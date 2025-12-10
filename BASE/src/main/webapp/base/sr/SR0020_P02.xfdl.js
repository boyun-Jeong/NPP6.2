(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0020_P02");
            this.set_titletext("결재자선택 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,494);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfApprovalBoxM", this);
            obj._setContents("<ColumnInfo><Column id=\"BOX_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BOX_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBtnBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","btnClose:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","60",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divUp","20","20",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("나의 결재선");
            obj.set_border("0px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","-375",null,null,null,null,null,this.divUp.form);
            obj.set_taborder("0");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divUp.addChild(obj.name, obj);

            obj = new Static("stcInfoTitle","0","0","145","24",null,null,null,null,null,null,this.divUp.form);
            obj.set_taborder("1");
            obj.set_text("나의 결재선 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divUp.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"0","218","24","0",null,null,null,null,null,this.divUp.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divUp.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divUp.form.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divUp.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"btnDelete:5","0",null,null,null,null,this.divUp.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divUp.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Grid("grdWfApprovalBoxM","0","34",null,null,"0","0",null,null,null,null,this.divUp.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsWfApprovalBoxM");
            obj.set_cssclass("grd_WF_normal");
            obj.set_useCheck("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_useContext("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"45\" band=\"left\"/><Column size=\"45\" band=\"left\"/><Column size=\"185\"/><Column size=\"65\" band=\"right\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"결재선 별칭\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"기본&#13;&#10;결재선\"/><Cell col=\"5\" text=\"결재자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:BOX_DESC\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:DEFAULT_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" displaytype=\"expr:ROWFLAG != &quot;I&quot; &amp;&amp; ROWFLAG != &apos;D&apos; ? &quot;buttoncontrol&quot; : &quot;&quot;\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" text=\"expr:ROWFLAG != &quot;I&quot; &amp;&amp; ROWFLAG != &apos;D&apos; ? &quot;지정 및 편집&quot; : &quot;&quot;\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.divUp.addChild(obj.name, obj);

            obj = new Div("divDown","20","415",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUp.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divUp.form.divGrdTopBtn.form,function(p){});
            this.divUp.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUp.form
            obj = new Layout("default","",0,0,this.divUp.form,function(p){});
            this.divUp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDown.form
            obj = new Layout("default","",0,0,this.divDown.form,function(p){});
            this.divDown.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,494,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0020_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ SR0020_P01
        * 화면(명)		︰ 검토자 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ 결재선 지정
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.06.20
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.06.20	 WEMB			최초작성
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
        	this.divUp.form.grdWfApprovalBoxM.displayRowType();

        	trace("[SR0020_P02] this.getOwnerFrame().saveYn : " + this.getOwnerFrame().saveYn);

        	if( Ex.isEmpty(this.getOwnerFrame().saveYn) )
        	{
        		this.getOwnerFrame().saveYn = "N";
        	}

        	this.fnSearchM();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 조회
        this.fnSearchM = function()
        {
        	// transaction
        	var sTranId = "selectM";							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0020P/select02";					// 서비스명
            var sInDs = "dsCond=dsCond";                  		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsWfApprovalBoxM=dsWfApprovalBoxM";	// 서버에서 수신할 데이타셋
            var sArg = "";                   					// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	var sTranId = "save01";
            var sService = "SR0020P/save01";
            var sInDs = "dsCond=dsCond dsWfApprovalBoxM=dsWfApprovalBoxM:U";
            var sOutDs = "dsWfApprovalBoxM=dsWfApprovalBoxM dsRtn=dsRtn";
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
        			this.divUp.form.grdWfApprovalBoxM.setCellProperty("Head", 0, "text", 0);
        			break;

        		case "save01" :
        			this.getOwnerFrame().saveYn = "Y";
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			this.divUp.form.grdWfApprovalBoxM.setCellProperty("Head", 0, "text", 0);
        			var boxSeq = this.dsRtn.getColumn(0, "BOX_SEQ");
        			var fRow = this.dsWfApprovalBoxM.findRow("BOX_SEQ", boxSeq);
        			if(fRow > -1) this.dsWfApprovalBoxM.set_rowposition(fRow);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "SR0020_P03" :	//
        			if(this.getOwnerFrame().saveYn == "N") this.getOwnerFrame().saveYn = "Y";
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSave();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDeleteRow = function(objDs)
        {
        	//objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        	{
        		//objDs.findRow("DEFAULT_YN", "Y")
        		objDs.setDeleteRow(i);
        		if(objDs.getColumn(i, "ROWFLAG") == "D" && objDs.getColumn(i, "DEFAULT_YN") == "Y")
        		{
        			objDs.setColumn(i, "DEFAULT_YN", "N");
        		}
        	}

        	objDs.set_filterstr("");
        	//objDs.set_enableevent(true);

        	this.divUp.form.grdWfApprovalBoxM.setCellProperty("Head", 0, "text", 0);

        	if(objDs.rowcount > 0)
        	{
        		if(objDs.findRow("DEFAULT_YN", "Y") == -1)
        		{
        			var fRow = objDs.findRowExpr("ROWFLAG !='D' && Ex.isNvl(DEFAULT_YN, 'N')=='N'");
        			trace("fRow=======================> " + fRow);
        			objDs.setColumn(fRow, "DEFAULT_YN", "Y");
        		}
        	}
        }

        //저장 validation Check
        this.fnCheckValidate = function()
        {
        	// 저장할 dataset에 변경된 data 있는 지 확인
        	if( !Ex.util.isUpdated(this.dsWfApprovalBoxM) ) return false;

        	// Grid Validation
        	if( !this.divUp.form.grdWfApprovalBoxM.checkValidate() ) return false;
        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var divId = obj.parent.parent.parent.parent.id;

        	trace("this.fnCommOnclick() divId ::: " + divId + " obj.name : " + obj.name);

        	switch(obj.name)
        	{
        		case "btnSearchReset" :
        			this.fnSearchReset();
        			break;

        		case "btnSearch" :
        			this.fnSearchUser();
        			break;

        		case "btnAdd" :
        			var aRow = this.dsWfApprovalBoxM.setAddRow();
        			this.dsWfApprovalBoxM.setColumn(aRow, "DEFAULT_YN", "N");
        			this.dsWfApprovalBoxM.set_rowposition(aRow);
        			this.divUp.form.grdWfApprovalBoxM.showEditor(true);		// 그리드 편집모드로 변경
        			this.divUp.form.grdWfApprovalBoxM.setCellPos(this.divUp.form.grdWfApprovalBoxM.getBindCellIndex("body", "BOX_DESC"), aRow);	// 그리드 셀 포커스 이동

        			if(this.dsWfApprovalBoxM.findRow("DEFAULT_YN", "Y") == -1)
        			{
        				this.dsWfApprovalBoxM.setColumn(aRow, "DEFAULT_YN", "Y");
        			}
        			else
        			{
        				this.dsWfApprovalBoxM.setColumn(aRow, "DEFAULT_YN", "N");
        			}
        			break;

        		case "btnDelete" :
        			this.fnDeleteRow(this.dsWfApprovalBoxM);			//나의 결재선
        			break;

        		case "btnSave" :										// 저장
        			if( this.fnCheckValidate() )
        			{
        				var param = {
        					 id : "saveConfirm"
        					,msg : "10003"
        					,arrparam : ['']
        					,msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this, this.getOwnerFrame().saveYn);
        			break;
        	}
        };

        this.grdOnCellClick = function(obj,e)
        {
        	if(obj.getCellPropertyValue(e.row, e.col, "displaytype") == "checkboxcontrol" && obj.getBindCellIndex("Body", "DEFAULT_YN") == e.col)
        	{
        		var clickDefaultYn = Ex.isNvl(obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), "DEFAULT_YN"), "N");

        		if(clickDefaultYn == "N")
        		{
        			var fRow = obj.getBindDataset().findRow("DEFAULT_YN", "Y");

        			if(fRow > -1)
        			{
        				obj.getBindDataset().setColumn(fRow, "DEFAULT_YN", "N");
        			}
        			obj.getBindDataset().setColumn(obj.getDatasetRow(e.row), "DEFAULT_YN", "Y");
        		}
        	}
        	else if(obj.getCellPropertyValue(e.row, e.col, "displaytype") == "buttoncontrol")
        	{
        		Ex.core.popup(
        			this,					// <--- 팝업 실행 스코프
        			"SR0020_P03",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        			"sr::SR0020_P03.xfdl",	// <--- 팝업창 오픈 Url
        			{
        				title	: "결재자 지정 및 편집",
        				pBoxSeq	: obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), "BOX_SEQ")
        			},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        			//"width=800,height=750"	// <--- width/height/modeless(프레임 처리 옵션)
        			"autosize,useCloseButton=false"
        		);
        	}
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
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUp.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUp.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divUp.form.grdWfApprovalBoxM.addEventHandler("oncellclick",this.grdOnCellClick,this);
            this.dsWfApprovalBoxM.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0020_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
