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
            this.set_titletext("엑셀 Import");
            this.getSetter("classname").set("ref06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsImport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnImportCase1","10","34","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Import case1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdImport","10","448",null,"205","86",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsImport");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1head","253","33","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("Sheet1!A1:F1;");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase1body","429","33","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("Sheet1!A2;");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","74","971","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀 head : 컬럼정보가 담긴 셀 범위(실제 엑셀 Head데이터와 정확히 일치해야함)\r\n 예 ) Import양식의 엑셀 헤더가 sheet1!A1:S1까지 있을때 head=sheet1!A1:D1 과 같이 일부만 import 할 수 없음\r\n엑셀 body : 실제 import할 데이터가 시작되는 셀 위치");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","193","37","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("head=");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","385","37","41","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("body=");
            this.addChild(obj.name, obj);

            obj = new Button("btnImportCase2","10","136","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Import case2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","178","971","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("시트를 지정하지 않으면 엑셀파일 시트들중 가장 첫번째 시트를 Import한다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","193","141","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("head=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase2head","253","137","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("!A1:F1;");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","385","141","41","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("body=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase2body","429","137","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("!A2;");
            this.addChild(obj.name, obj);

            obj = new Button("btnImportCase3","10","224","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Import case3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","266","971","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("엑셀 Head를 지정하지 않으면 Nexacro엔진에서 자동으로 대상열에 대하여 컬럼을 동적으로 부여한다.\r\n컬럼은 Column0,Column1,~~~,ColumnN 으로 부여된다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","193","229","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("head=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase3head","253","225","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value(";");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","385","229","41","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("body=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase3body","429","225","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("!A2;");
            this.addChild(obj.name, obj);

            obj = new Button("btnImportCase4","10","320","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Import case4");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","362","971","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Head / Body를 모두 지정하지 않으면 첫번째 시트의 대상데이터를 모두 Import한다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","193","325","45","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("head=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase4head","253","321","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value(";");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","385","325","41","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("body=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCase4body","429","321","116","33",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value(";");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","9","409","979","31",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("공통사항 : 반드시 하나의 행/열이 데이타셋의 행과 컬럼에 매핑될수 있는 엑셀 양식이어야 한다.\r\n              엑셀데이타중 열 혹은 행이 머지되어 있지 않아야 한다.");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","575","8","406","58",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("- ref::ref06.xfdl \r\n*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10","3","979","31",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("DRM(문서보안)이 걸린 엑셀문서는 읽지 못함");
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
        this.registerScript("ref06.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 엑셀 Import
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
        	if(bSuccess)
        	{
        		trace("성공");
        		this.grdImport.createFormat();
        	}
        	else
        	{
        		trace("실패");
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
         /**
           * Grid를 Excel로 Import하는 함수
           * this.gfnImportExcel(this , 대상시트명 , 임포트용 데이타셋)
           * this.gfnImportExcel(objForm,sSheet,ds)
           * Export후 콜백함수
           * fnImportExcelCallback(bSuccess,sImportID,strFileNm)
           **/
        this.btnImportCase1_onclick = function(obj,  e)
        {
           /*
           * 1.heead = 시트명  뿌릴 해드값 A1 ~ G1
           * 2. body = 그리드 body에 뿌릴 excel sheet 번호
           */
            var sSheet = "head=" + this.edtCase1head.value + "body=" + this.edtCase1body.value;
           /*
           * 출력할 dataset 명
           */
        	var ds = "dsImport";

        	this.dsImport.clearData();

        	this.gfnImportExcel(this,sSheet,ds);
        }

        this.btnImportCase2_onclick = function(obj,  e)
        {
           /*
           * 1.heead = 시트명  뿌릴 해드값 A1 ~ G1
           * 2. body = 그리드 body에 뿌릴 excel sheet 번호
           */
            var sSheet = "head=" + this.edtCase2head.value + "body=" + this.edtCase2body.value;
           /*
           * 출력할 dataset 명
           */
        	var ds = "dsImport";

        	this.dsImport.clearData();

        	this.gfnImportExcel(this,sSheet,ds);
        }

        this.btnImportCase3_onclick = function(obj,  e)
        {
           /*
           * 1.heead = 시트명  뿌릴 해드값 A1 ~ G1
           * 2. body = 그리드 body에 뿌릴 excel sheet 번호
           */
            var sSheet = "head=" + this.edtCase3head.value + "body=" + this.edtCase3body.value;
           /*
           * 출력할 dataset 명
           */
        	var ds = "dsImport";

        	this.dsImport.clearData();

        	this.gfnImportExcel(this,sSheet,ds);
        }

        this.btnImportCase4_onclick = function(obj,  e)
        {
           /*
           * 1.heead = 시트명  뿌릴 해드값 A1 ~ G1
           * 2. body = 그리드 body에 뿌릴 excel sheet 번호
           */
            var sSheet = "head=" + this.edtCase4head.value + "body=" + this.edtCase4body.value;
           /*
           * 출력할 dataset 명
           */
        	var ds = "dsImport";

        	this.dsImport.clearData();

        	this.gfnImportExcel(this,sSheet,ds);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnImportCase1.addEventHandler("onclick",this.btnImportCase1_onclick,this);
            this.btnImportCase2.addEventHandler("onclick",this.btnImportCase2_onclick,this);
            this.btnImportCase3.addEventHandler("onclick",this.btnImportCase3_onclick,this);
            this.btnImportCase4.addEventHandler("onclick",this.btnImportCase4_onclick,this);
        };
        this.loadIncludeScript("ref06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
