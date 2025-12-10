(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref06");
            this.set_titletext("엑셀 Import multi");
            this.getSetter("classname").set("ref06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsImport1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImport2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnImportCase1","10","34","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Import case1(시트명필수)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","353","37","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("head=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1head","413","33","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("A1:G1;");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","545","37","41","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("body=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1body","589","33","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("A2;");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10","3","979","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("DRM(문서보안)이 걸린 엑셀문서는 읽지 못함");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","712","8","269","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("- ref::ref06_1.xfdl \r\n*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","138","971","64",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("기본 엑셀 Import기능의 모든 제약사항을 준수해야함\r\n- 엑셀 Import 샘플 메뉴 참고");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","169","37","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Sheet1=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1Sheet","229","33","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("Sheet1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","353","85","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("head=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1head01","413","81","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("A1:D1;");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","545","85","41","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("body=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1body01","589","81","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("A2;");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","169","85","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Sheet2=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1Sheet01","229","81","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("Sheet2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","210","971","74",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Multi Sheet Import시 추가되는 제약사항\r\n- Sheet명은 필수지정 해야함\r\n\r\n샘플파일위치 : test::multiSheet_import_test.xls");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","8","287","772","57",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("공통사항 : 반드시 하나의 행/열이 데이타셋의 행과 컬럼에 매핑될수 있는 엑셀 양식이어야 한다.\r\n              엑셀데이타중 열 혹은 행이 머지되어 있지 않아야 한다.");
            this.addChild(obj.name, obj);

            obj = new Grid("grdImport1","10","352","970","211",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsImport1");
            obj._setContents("<Formats/>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdImport2","12","573","970","211",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("dsImport2");
            obj._setContents("<Formats/>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("ref06_1.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 엑셀 Import Multi
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
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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

        //-----엑셀 Import 콜백---
        this.fnImportExcelCallback = function(bSuccess,sImportID,strFileNm)
        {
        	// bSuccess 성공/실패를 boolean값으로 리턴한다.
        	// sImportID는 지정한 경우만 반환한다.
        	// strFileNm은 성공일경우만 반환한다.
        	trace("fnImportExcelCallback IMPORTID/IMPORTFILENM="+sImportID+","+strFileNm);
        	if (bSuccess)
        	{
        		trace("성공");
        		this.grdImport1.createFormat();
        		this.grdImport2.createFormat();
        	}
        	else
        	{
        		trace("실패,");
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /**
         * Excel을 Dataset으로 Import하는 함수
         * this.gfnImportExcelBySheet(this , oParam,sImportID)
         * Import 콜백함수
         * fn_importCallback(bSuccess,sImportID)
         * oParam 구성 샘플
        	var oParam = {};
        	oParam.dataset = [this.dsImport1 , this.dsImport2]; //  필수
        	oParam.sheet = ["Sheet1","Sheet2"]; // 필수
        	oParam.head = ["A1:G1","A1:D1"]; // []
        	oParam.body = ["A2","A2"]; // []
         **/
        this.btnImportCase1_onclick = function(obj,  e)
        {
        	// Array 인덱스별 시트정보를 정확히 매핑하여 기술해야함

        	var sheet1SheetNm = this.edtCase1Sheet.value||'';
        	var sheet1Head = this.edtCase1head.value||'';
        	var sheet1Body = this.edtCase1body.value||'';

        	var sheet2SheetNm = this.edtCase1Sheet01.value||'';
        	var sheet2Head = this.edtCase1head01.value||'';
        	var sheet2Body = this.edtCase1body01.value||'';

        	var oParam = {};
        	oParam.dataset = [this.dsImport1   , this.dsImport2]; //  Dataset 객체지정필수
        	oParam.sheet    = [sheet1SheetNm , sheet2SheetNm]; // 시트명지정필수
        	oParam.head     = [sheet1Head      , sheet2Head]; // []
        	oParam.body     = [sheet1Body      , sheet2Body]; // []
        	this.gfnImportExcelBySheet(this , oParam , "importCase1ByMultiSheet" );
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnImportCase1.addEventHandler("onclick",this.btnImportCase1_onclick,this);
        };
        this.loadIncludeScript("ref06_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
