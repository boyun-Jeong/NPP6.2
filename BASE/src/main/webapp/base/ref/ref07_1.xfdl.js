(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref07_1");
            this.set_titletext("엑셀 다운로드");
            this.getSetter("classname").set("ref07");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_YY\" type=\"STRING\" size=\"256\"/><Column id=\"DRV_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BUDGET_YY\">2026</Col><Col id=\"CHK_GUBUN\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divInput","0","0",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","0",null,"34","0",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stcPrePlanNm","345","0","125","34",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle");
            obj.set_text("엑셀파일명");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtExcelFileNm","stcPrePlanNm:5.00","5","185","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_value("다운로드_테스트");
            obj.set_text("다운로드_테스트");
            this.divInput.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","edtExcelFileNm:2","5","95","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cursor("pointer");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtControllerNm","130","5",null,"24","stcPrePlanNm:5",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("사업명;NULL");
            obj.set_value("IVExcel/downloadExcel01");
            obj.set_text("IVExcel/downloadExcel01");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stcPrePlanNm00","0.00","0","125","34",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("호출Controller");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stc00","774","5","329","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("6");
            obj.set_text("※ 파일명 미지정시 랜덤으로 파일명을 생성하여 다운로드");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","33",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcPrePlanNm00","0","33","125","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("예산년도");
            this.addChild(obj.name, obj);

            obj = new Spin("spnBudgetYy","stcPrePlanNm00:5","38","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("spn_WF_normal");
            obj.set_min("1900");
            obj.set_max("2999");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stcPrePlanNm00_00","345","33","125","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputTitle_E");
            obj.set_text("출력구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPrintGubun","stcPrePlanNm00_00:5","38","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboPrintGubun_innerdataset = new nexacro.NormalDataset("cboPrintGubun_innerdataset", obj);
            cboPrintGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">기초사업계획</Col></Row><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">본사업계획</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">사업추진</Col></Row></Rows>");
            obj.set_innerdataset(cboPrintGubun_innerdataset);
            obj.set_value("B");
            obj.set_index("0");
            obj.set_text("기초사업계획");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divInput.form
            obj = new Layout("default","",0,0,this.divInput.form,function(p){});
            this.divInput.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divInput.form.stcBg01","value","dsIvPrePlan","PRE_PLAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","stcBg01","value","dsIvPrePlan","PRE_PLAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","spnBudgetYy","value","dsCond","BUDGET_YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboPrintGubun","value","dsCond","CHK_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref07_1.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 엑셀 Export
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
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
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        }

        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	var rowPos = this.dsCond.addRow();

        	var BUDGET_YY = Ex.util.today().substring(0, 4);
        	BUDGET_YY = parseInt(BUDGET_YY) + 1;   //20241206 예산년도

        	this.dsCond.setColumn(rowPos, 'BUDGET_YY', BUDGET_YY);
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
        	switch (sSvcId)
        	{
        		case "ABOUT" : // 서비스 ID
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        }

        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.id)
        	{
        		case "btnExcelDown" :
        			Ex.core.excelDownService(this, this.divInput.form.edtControllerNm.value, this.dsCond, this.divInput.form.edtExcelFileNm.value);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divInput.form.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.spnBudgetYy.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
        };
        this.loadIncludeScript("ref07_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
