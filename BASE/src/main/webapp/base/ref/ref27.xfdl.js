(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref01");
            this.set_titletext("Synap");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnUpload","20","16","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Div("divFiles","20.00","60",null,"187","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("__USE_MODE").set("1");
            obj.getSetter("_ENABLE_READONLY_ALL_SKIP").set("Y");
            obj.set_url("comm::comFile.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnViewer","115.00","16","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("뷰어호출");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","208","16","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","20","302",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFiles
            obj = new Layout("default","",0,0,this.divFiles.form,function(p){});
            this.divFiles.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comFile.xfdl");
        };
        
        // User Script
        this.registerScript("ref27.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 팝업 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
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
        this.formObj;	//전역변수 설정
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        	this.formObj = obj;
        }

        this.fnInit = function()
        {
        	// 첨부파일 setting
        	var oParam = {
        		 sSvcId		: 'fileSvc'									// divFile callback 후처리용 서비스 ID
        		,limitMinCnt: 0											// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3											// 파일 최대 갯수; default 5
        		,limitSize	: 100										// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'test'									// 폴더명(업무명)
        		,tableName	: 'TEST'									// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: "TEST1001"								// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''										// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''										// 테이블 PK3 (복합 키인 경우 사용)
        		,fileDownYn	: ''										// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: ''										// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''										// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};
        	this.divFiles.form.setConfig(this, oParam);
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	//trace("[PJ0410_P01] this.fnUploadCallback() sSvcId : " + sSvcId + " nErrorCode : " + nErrorCode + " sErrorMsg : " + sErrorMsg);

        	// TO DO
        	// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this, {id:"ERROR", msg:sSvcId + "\n" + Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	switch(sSvcId)
        	{
        		case "fileSvc" :
        			this.fnSave();
        			break;
        	}
        };

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
        		case "" : // 서비스 ID
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	trace("pID="+pID+" ,varValue="+varValue);
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
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "Button00" :
        			trace("FILE_PATH : " + this.divFiles.form.dsFommFile.getColumn(this.divFiles.form.dsFommFile.rowposition, "FILE_PATH"));
        			trace("FILE_SAVE_NM : " + this.divFiles.form.dsFommFile.getColumn(this.divFiles.form.dsFommFile.rowposition, "FILE_SAVE_NM"));
        			break;

        		case "btnUpload" :
        			this.divFiles.form.fnUploadFiles(true);
        			break;

        		case "btnViewer" :
        			Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"synapPop",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"ref::ref28.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title : "Synap Viewer"
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"width=1280,height=768"	// <--- width/height/autosize/modeless(프레임 처리 옵션)
        			);
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnUpload.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnViewer.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button00.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
