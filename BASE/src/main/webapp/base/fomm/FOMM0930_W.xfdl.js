(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM730_W");
            this.set_titletext("쪽지함 첨부파일 용량조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pt_file_attach", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REG_USER_DEPT\" type=\"STRING\" size=\"255\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"FILE_SIZE\" type=\"BIGDECIMAL\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","12","63","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("첨부기간");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_regDtTo","233","13","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","cal_regDtTo:0","12","300","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("300");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static15","Static00_00_00_00_00_00:0","12","40","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"27","75","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","13","20","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_regDtFr","Static00:20","13","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc00","cal_regDtFr:0","11","10","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_regUserNm","Static15:20","13","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","edt_regUserNm:0","13","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc01","Static00_00_00_00_00_00_00:0","14","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("파일사용용량");
            obj.set_cssclass("sta_WF_schTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_fileSize","stc01:20","14","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc02","edt_fileSize:10","14","50","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("MB이상");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","49",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userInfo","0","79","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainListCnt","82.00","99","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GridCount");
            obj.set_countDataset("dsMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","103",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"99","425","24","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"360","32","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","113",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\" displaytype=\"text\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"파일갯수\"/><Cell col=\"4\" text=\"파일사용요령(MB)\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONTRACT_NO\" color=\"blue\" font=\"10pt &quot;Malgun Gothic, 맑은 고딕&quot;\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:CONTRACT_NM\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:UNIT_CNTR_YN\" combodataset=\"dsUnitCntrYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:DLVR_DUE_DATE\" calendardisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0930_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0930_W
        * 화면(명)	︰ 쪽지함 첨부파일 용량조회
        * 메뉴(경로)	︰ 관리자 > 포털관리 > 쪽지함 첨부파일 용량조회
        * 화면 설명	︰ SPP 쪽지함 첨부파일 용량조회
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.12
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.12	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.fvVar;  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {

        }

        // 조회
        this.fnSearch = function()
        {

        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");
        	for(var i = 0; i < objDs.rowcount; i++)
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
        		case "ABOUT" : // 서비스 ID
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
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("FOMM0930_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
