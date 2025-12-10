(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM1300_P01");
            this.set_titletext("담당자목록 조회");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">전체</Col></Row><Row><Col id=\"CMM_CD\">SR</Col><Col id=\"CMM_CD_NM\">서비스요청</Col></Row><Row><Col id=\"CMM_CD\">CAT</Col><Col id=\"CMM_CD_NM\">요청서</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
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

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","70",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staSearchStr","20","13","89","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("요청분류명");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","100",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"13","20","24","0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboDevNm","staSearchStr:0","13","80","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("20");
            var divContent_form_divSearchArea_form_cboDevNm_innerdataset = new nexacro.NormalDataset("divContent_form_divSearchArea_form_cboDevNm_innerdataset", obj);
            divContent_form_divSearchArea_form_cboDevNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NM</Col><Col id=\"datacolumn\">이름</Col></Row><Row><Col id=\"codecolumn\">ID</Col><Col id=\"datacolumn\">ID</Col></Row></Rows>");
            obj.set_innerdataset(divContent_form_divSearchArea_form_cboDevNm_innerdataset);
            obj.set_value("NM");
            obj.set_index("0");
            obj.set_text("이름");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtSearchStr","cboDevNm:5","13","120","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20","90","110","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("담당자 조회");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","staUserInfo:5","90","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdUserInfo","20.00","Static00_00:0",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsData");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"133\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번(ID)\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"직책(역할)\"/><Cell col=\"6\" text=\"내선번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:TELNUM\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"133\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" text=\"직책(역할)\"/><Cell col=\"5\" text=\"내선번호\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:TELNUM\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",900,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.staCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM1300_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM1100_P02
        * 화면(명)		︰ 요청분류 조회
        * 메뉴(경로)	    ︰ 관리자 > 사용자권한관리 > 서비스별 담당자관리
        * 화면 설명	    ︰ 요청분류 조회
        * 작성자	    	︰ WEMB
        * 작성일	    	︰ 2025.02.12
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.02.12	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description

        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objFrame = this.getOwnerFrame();
        this.pSelType = 'M';

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {

        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        }

        // 조회
        this.fnSearch = function()
        {
        	if(this.divContent.form.divSearchArea.form.cboDevNm.value == 'NM')
        	{
        		this.dsCond.setColumn(0,"USER_NM",this.divContent.form.divSearchArea.form.edtSearchStr.value);
        	} else {
        		this.dsCond.setColumn(0,"USER_ID",this.divContent.form.divSearchArea.form.edtSearchStr.value);
        	}

        	// transaction
        	var sTranId = "selectDevprRegPopList";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM1300W/selectDevprRegPopList";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func.
        this.fnSave = function()
        {

        }


        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
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
        	switch (sSvcId)
        	{
        		case "selectSvcType" :
        			Ex.core.toast(this, "10002");

        			this.divContent.form.divSearchArea.form.edtSearchStr.setFocus();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
        	{

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.pSelType = this.objFrame.pSelType;

        	if(this.pSelType == "S") {
        		this.divContent.form.grdUserInfo.formatid = "singleSel";
        	} else {
        		this.divContent.form.grdUserInfo.formatid = "multiSel";
        	}

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 검색
        }

        // 선택
        this.fnSelect = function(strPopType)
        {
        	var dRow = 	-1;

        	if(strPopType=="M") {
        		this.dsRet.clearData();
        		this.dsData.set_enableevent(false);
        		this.dsData.set_filterstr("CHK == '1'");
        		this.dsRet.copyData(this.dsData, true);
        		this.dsData.set_filterstr("");
        		this.dsData.set_enableevent(true);
        	} else {
        			this.dsRet.assign(this.dsData);
        			this.dsRet.clearData();
        			this.dsRet.copyRow(this.dsRet.setAddRow(), this.dsData, this.dsData.rowposition);

        	}

        	for(var i=0;i<this.dsRet.rowcount;i++) {
        		dRow = this.getOwnerFrame().opener.dsData.findRow("DEVPR_ID",this.dsRet.getColumn(i,"USER_ID"));
        		if(dRow>-1) {
        			var param = {
        			        	id : "noUpdateAlert"
        			         , msg : "이미 담당자로 선택된 사용자가 포함되어 있습니다."
        			         , arrparam : ['']
        			         , msgtype : "I"};
        		            Ex.core.alert(this, param);
        	        return false;
        		}
        	}

        	Ex.core.pclose(this, this.dsRet.saveXML());
        }



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :		// 검색
        			this.fnSearch();
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnSelect" :		// 선택
        			this.fnSelect(this.pSelType);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };


        this.divContent_grdUserInfo_oncelldblclick = function(obj,e)
        {
        	this.fnSelect("S");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSelect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.cboDevNm.addEventHandler("onkeyup",this.fnCommOnkeydown,this);
            this.divContent.form.divSearchArea.form.edtSearchStr.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.grdUserInfo.addEventHandler("oncelldblclick",this.divContent_grdUserInfo_oncelldblclick,this);
            this.dsData.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsData.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsData.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
        };
        this.loadIncludeScript("FOMM1300_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
