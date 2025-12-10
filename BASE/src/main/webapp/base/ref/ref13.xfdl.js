(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref12");
            this.set_titletext("공통코드 util");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYnCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnGetCmmCd","10","20","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("YN_CD 조회");
            this.addChild(obj.name, obj);

            obj = new TextArea("taCmmCd","10","80","565",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","50","162","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("코드 조회 datset saveXML()");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","190","21","185","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsYnCd");
            this.addChild(obj.name, obj);

            obj = new TextArea("taCmmCd00","600","5",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_value("- ref::ref13.xfdl \n\n공통코드 조회를 위한 API : Ex.util.getCmmCode(oParam);\n\t\n1. Parameter\n  - oParam = {\n\t\tupCmmCd\t: 공통코드 상위코드명 (Ex: \'YN_CD\')\n\t\tcodeDiv\t: 공통코드 업무구분 // ROOT 제외 최상위코드를 업무구분으로 사용하여 조회한다.\n\t\toptStr\t: \'\'/\'NO\' : 추가없음;\n\t\t\t\t  \'ALL\'   : \'- 전체 -\' 추가;\n\t\t\t\t  \'SEL\'   : \'- 선택 -\' 추가;\n\t\tuseYn\t: \'Y\'/\'N\' : 사용여부에 따라 복사\n\t\t\t\t: \'\'/\'ALL\': 사용여부 상관없이 복사\n\t\tfilter\t: 개발자 정의 filterstr 추가\t( Ex: \"ITM_VAL_1 == \'Y\'\" )\n\t\tobjDs\t: 공통코드를 복사할 datset 객체( Ex: this.dsYnCd )\n\t}\n  \n2. 기능\n  - global dataset에 담긴 코드 중 설정한 옵션에 맞는 코드를 필터링하여 objDs에 카피한 후 optStr 옵션에 따라 추가 값을 insert함.\n  - oParam은 배열로 선언하여 여러 코드를 동시에 불러올 수 있다.\n  \n3. 사용 예시\n3-1) 배열로 여러 코드 조회\n\tvar oParam = {\n\t\tupCmmCd : [\'YN_CD\', \t\'LANG_CD\']\t\t\t// 조회할 상위코드\n\t\t,codeDiv: [\'CMM_CD\', \t\'\']\t\t\t\t\t// 코드 업무구분\n\t\t,optStr\t: [\'ALL\', \t\t\'SEL\']\t\t\t\t// ALL: \'- 전체 -\'; SEL: \'- 선택 -\'\n\t\t,useYn\t: [\'Y\', \t\t\'\']\t\t\t\t\t// 사용여부\n\t\t,filter\t: [\'\', \t\t\t\'ITM_VAL_1==\"Y\"\']\t// filterStr\n\t\t,objDs\t: [this.dsYnCd,\tthis.dsLangCd]\t\t// copy dataset\n\t}\n\tEx.util.getCmmCode(oParam);\t// 공통코드 dataset copy util;\n\t\n3-2) 단건 조회\n\tvar oParam = {\n\t\tupCmmCd : \'YN_CD\'\t\t// 조회할 상위코드\n\t\t,codeDiv: \'\'\t\t\t// 코드 업무구분\n\t\t,optStr\t: \'ALL\'\t\t\t// ALL: \'- 전체 -\'; SEL: \'- 선택 -\'\n\t\t,useYn\t: \'Y\'\t\t\t// 사용여부\n\t\t,filter\t: \'\'\t\t\t// filterStr\n\t\t,objDs\t: this.dsYnCd\t// copy dataset\n\t}\n\tEx.util.getCmmCode(oParam);\t// 공통코드 dataset copy util;");
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
        this.registerScript("ref13.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 공통코드 Util
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


        // 삭제(행삭제)
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
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
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

        this.fnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		/**
        		  * 공통코드를 조회한다
        		  * @param {object} oParam : 공통코드 copy를 위한 option 객체
        		  * @return null
        		  * @description
        		  *  oParam = {
        		  *  	upCmmCd	: 공통코드 상위코드명 (Ex: 'YN_CD')
        		  *		codeDiv	: 공통코드 업무구분(ROOT 제외 최상위코드를 해당 코드 하위 코드의 업무구분으로 사용)
        		  *  	optStr	: ''/'NO' : 추가없음;
        						  'ALL'   : '- 전체 -' 추가;
        						  'SEL'   : '- 선택 -' 추가;
        		  *  	useYn	: 'Y'/'N' : 사용여부에 따라 복사
        						: ''/'ALL': 사용여부 상관없이 복사
        		  *  	filter	: 개발자 정의 filterstr 추가	( Ex: "ITM_VAL_1 == 'Y'" )
        		  *  	objDs	: 공통코드를 복사할 datset 객체( Ex: this.dsYnCd )
        		  *	 }
        		  * @example
        		  * Ex.util.getCmmCode(oParam);
        		  * @memberOf Ex.util
        		  **/
        		case "btnGetCmmCd" :
        			var oParam = {
        				upCmmCd : ['YN_CD']		// 조회할 상위코드
        				,codeDiv: ['']			// 조회할 코드의 업무구분
        				,optStr	: ['ALL']		// ALL: '- 전체 -'; SEL: '- 선택 -'
        				,useYn	: ['Y']			// 사용여부
        				,filter	: ['']			// filterStr
        				,objDs	: [this.dsYnCd]	// copy dataset
        			}
        			Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam, 언어코드);

        			this.taCmmCd.set_value(this.dsYnCd.saveXML());
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnGetCmmCd.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
