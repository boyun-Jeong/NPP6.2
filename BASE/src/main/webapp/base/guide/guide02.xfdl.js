(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("compGuide");
            this.set_titletext("Button");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","5","125","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회조건 영역");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","180","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","520","40",null,"140","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("Button 컴포넌트 가이드 (guide::guide02.xfdl)\n\n - 검색조건 영역은 좌측 2개 css 사용을 기본으로 한다.\n - 검색조건 영역의 Button은 Height 24px로 고정한다.\n - 검색조건 영역 내 Button간 간격(margin)은 5px로 고정한다.\n - text길이에 따라 button Width를 맞춰서 그리도록 한다.\n   - Default(한글 2글자: 75) 한글 1글자 추가시마다 +15px\n");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","40","180","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","40","205","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W:75");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","40","240","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","40","265","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W:90");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","155","180","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn_WF_search");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","5","240","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","150","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("button Example");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","155","150","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("css class");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","155","240","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("btn_WF_searchReset");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","5","310","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Grid 우측 상단 버튼 div");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn","40","340","435","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_text("");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnEdit",null,"0","60","24","130",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd00_00",null,"0","75","24","195",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("3");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_excelUp");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd00_00_00",null,"0","90","24","340",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("4");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_fileDown");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnChart",null,"0","60","24","275",null,null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("5");
            obj.set_text("차트");
            obj.set_cssclass("btn_WF_chart");
            obj.set_visible("true");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","5","340","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","520","240",null,"110","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_value(" - Grid 상단 버튼 영역은 공통 Util 사용과 코딩 표준을 위해 Div로 감싸도록 한다.\n - Height 24px 고정, margin 5px 고정, button 우측정렬을 표준으로 그리도록 한다.\n - text길이에 따라 button Width를 맞춰서 그리도록 한다.\n   - Default(한글 2글자: 60px) 한글 1글자 추가시마다 +15px");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","44","367","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("W:90");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","139","367","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("W:60");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","284","367","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("W:60");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","349","367","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("W:60");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","414","367","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("W:60");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_01","204","367","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("W:75");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","44","391","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("btn_WF_fileDown");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","139","411","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("btn_WF_chart");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","204","391","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("btn_WF_excelUp");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","284","411","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("btn_WF_excelDown");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00_00","349","391","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("btn_WF_add");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00_00_00","414","321","91","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("btn_WF_del");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","5","460","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("화면 우측 하단 버튼 div");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn","40","488","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_isButtonGroup("true");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","85","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","5","488","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("H:32");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","159","522","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("W:80");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","74","522","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("W:80");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00_00","520","410",null,"110","20",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_value(" - 업무화면 우측 하단 버튼 영역은 공통 Util 사용과 코딩 표준을 위해 Div로 감싸도록 한다.\n - Height 32px 고정, margin 5px 고정, button 우측정렬을 표준으로 그리도록 한다.\n - text길이에 따라 button Width를 맞춰서 그리도록 한다.\n   - Default(한글 2글자: 80px) 한글 1글자 추가시마다 +10px");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01","75","546","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("btn_WF_primary_save");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","160","570","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("btn_WF_primary_close");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","5","5","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("조회조건 영역");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","36","55","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("기본");
            obj.set_cssclass("btn_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","40","25","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("button Example");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","155","25","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("css class");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","5","55","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("H:24");
            obj.set_border("1px dotted red, 0px, 1px dotted red, 1px dotted red");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","36","84","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("W:60");
            obj.set_border("0px none, 1px dotted red, 1px dotted red, 1px dotted red");
            obj.set_textAlign("center");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_03","155","55","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("btn_WF_normal");
            obj.set_font("12px \'NanumSquareR\'");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide02.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Component Guide
        * 메뉴(경로)	︰ Component Guide
        * 화면 설명	︰ Component Guide
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
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
        // 조회
        this.fnSearch = function()
        {
        	this.Tab00.tabpages[this.Tab00.tabindex].fnSearch(op);
        }

        // 저장
        this.fnSave = function()
        {

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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.TextArea00_00.addEventHandler("onchanged",this.TextArea00_00_onchanged,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnEdit.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd00_00.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd00_00_00.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnChart.addEventHandler("onclick",this.fnCommOnclick,this);
            this.TextArea00_00_00.addEventHandler("onchanged",this.TextArea00_00_onchanged,this);
            this.divGrdBotBtn.form.btnCancel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.TextArea00_00_00_00.addEventHandler("onchanged",this.TextArea00_00_onchanged,this);
        };
        this.loadIncludeScript("guide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
