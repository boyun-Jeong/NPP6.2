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
            this.set_titletext("세션 및 메뉴화면권한");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","0","20","174","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접속 도메인정보 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","179","20","201","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","49","174","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("세션값 받아오기");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","5","83",null,null,"50.82%","5",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01",null,"11","220","58","5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("- ref::ref12.xfdl \r\n*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea2","50.27%","83",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","50.22%","49","174","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("화면권한 받아오기");
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
        this.registerScript("ref12.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 세션 및 도메인 정보
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통
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

        	var temp = this.parent.parent.parent.info;
        	trace('info :: ' + temp);
        	for(var key in temp)
        		trace(key + ' ' + temp[key]);
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

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/

        // 도메인정보 받아오기
        this.Button00_onclick = function(obj, e)
        {
        	var str = Ex.domainUrl();
        	this.Edit00.set_value(str);
        }


        // 세션정보 받아오기
        this.Button01_onclick = function(obj, e)
        {
        	/*
        		// 테이블 컬럼 스키마를 기준으로 생성함
        		// gv 키 만드는법
        		Ex.util.getSession('키')
        		Ex.util.getSession('session') // 'session' 약속된 예약어
        	*/

        	// session 은 전체정보를 가져오기 위한 예약어
        	var oSession = Ex.util.getSession('session');			// 세션 전체 {key:value, key2:value2}

        	// key로 특정 세션값 가져오기 사용 예시
        	var sUserId		= Ex.util.getSession("gvUserId");		// 사용자ID
        	var sUserNm		= Ex.util.getSession("gvUserNm");		// 사용자명

        	str = "";
        	str += "---- 전체 session값 목록----\n";
        	for(var key in oSession) {
        		str += 'key:: ' + key + '\t\t value:: ' + oSession[key] + '\n';
        	}
        	str += "\n";
        	str += "---- key값으로 받아오기 예시----\n";
        	str += "---- Ex.util.getSession('gvUserId')\n";
        	str += "gvUserId[사용자ID] = " + sUserId + "\n";
        	str += "gvUserNm[사용자명] = "+ sUserNm +"\n";

        	str += "\n\n---- session을 객체로 전체 받아오기 예시 ----\n";
        	str += "---- 객체 사용법 ----\n";
        	str += "var oSession = Ex.util.getSession('session');\n";
        	str += "oSession.gvUserId = "+ oSession.gvUserId + "\n";
        	str += "oSession.gvUserNm = "+ oSession.gvUserNm + "\n";
        	str += "oSession.gvDeptCd = "+ oSession.gvDeptCd + "\n";

        	this.TextArea00.set_value(str);
        }

        // 화면권한 받아오기
        this.Button02_onclick = function(obj,e)
        {
        	/**
        	  * scope의 권한을 return한다.
        	  * @param {object} scope : 호출 스코프(this);	팝업에서 호출한 경우, 해당 팝업을 최초로 호출한 화면의 권한을 넘긴다.
        	  * @param {string} authDiv : 확인할 권한 구분자 (대소문자무관)
        	  * @return null
        	  * @description
        	  *  authDiv :
        	  *    	"" or "all" :	모든 권한을 객체로 return;	'all'은 예약어
        	  *		"read"		:	조회권한 return
        	  *		"write"		:	쓰기권한 return
        	  *		"delete"	:	삭제권한 return
        	  *		"save"		:	저장권한 return; 저장권한은 write/delete 권한 둘 중 하나라도 Y이면 Y로 return함
        	  *		"exclDown"	:	엑셀다운권한 return
        	  *		"reportPrnt":	리포트출력권한 return
        	  *		"fileUp"	:	파일업로드권한 return
        	  * @example
        	  *  var auth = Ex.util.getMenuAuth(this);
        	  *	 auth == {
        						readYn			: 'Y' (or 'N')	// 메뉴 접근/조회 권한
        					  , writeYn			: 'Y' (or 'N')	// 쓰기/추가 권한
        					  , deleteYn		: 'Y' (or 'N')	// 삭제 권한
        					  , saveYn			: 'Y' (or 'N')	// 저장 권한
        					  , exclDownYn		: 'Y' (or 'N')	// 엑셀다운로드 권한
        					  , reportPrntYn	: 'Y' (or 'N')	// 리포트출력 권한
        					  , fileUpYn		: 'Y' (or 'N')	// 파일업로드(첨부) 권한
        				}
        	  * @memberOf Ex.util
        	  **/

        		var oAuth = Ex.util.getMenuAuth(this);			// 모든 권한을 객체로 return
        		var readYn = Ex.util.getMenuAuth(this, 'read');		// 읽기권한 return ('Y' or 'N')
        		/*  아래 모두 동일
        			Ex.util.getMenuAuth(this);
        			Ex.util.getMenuAuth(this, '');
        			Ex.util.getMenuAuth(this, 'all');
        			Ex.util.getMenuAuth(this, 'ALL');
        		*/

        		str = "";
        		str += "Ex.util.getMenuAuth(scope, authDiv) \n";
        		str += "팝업에서 호출하면 팝업을 최초로 호출한 화면으로 타고가 해당 화면의 권한을 return \n";
        		str += '\n';
        		str += "---- 전체 권한 옵션 목록----\n";
        		str += "---- 전체 권한 옵션문자는 대/소문자 구분 X ----\n";
        		str += "null/''/'all' 	// 모든 권한 객체 return \n";
        		str += "readYn			// 메뉴 접근/조회 권한('Y' or 'N')\n";
        		str += "writeYn 		// 쓰기 권한('Y' or 'N')\n";
        		str += "deleteYn 		// 삭제 권한('Y' or 'N')\n";
        		str += "saveYn 			// 저장 권한('Y' or 'N')\n";
        		str += "exclDownYn 		// 엑셀다운 권한('Y' or 'N')\n";
        		str += "reportPrntYn 	// 리포트출력 권한('Y' or 'N')\n";
        		str += "fileUpYn 		// 파일업로드 권한('Y' or 'N')\n";

        		str += "\n";
        		str += "---- key값으로 받아오기 예시----\n";
        		str += "---- var readYn = Ex.util.getMenuAuth(this, 'read');\n";
        		str += "readYn[조회권한] = " + readYn + "\n";


        		str += "\n\n---- 메뉴화면권한을 객체로 전체 받아오기 예시 ----\n";
        		str += "---- 객체 사용법 ----\n";
        		str += "var oAuth = Ex.util.getMenuAuth(this);\n";
        		str += "oAuth.readYn = "+ oAuth.readYn + "\n";
        		str += "oAuth.writeYn = "+ oAuth.writeYn + "\n";
        		str += "oAuth.deleteYn = "+ oAuth.deleteYn + "\n";
        		str += "oAuth.saveYn = "+ oAuth.saveYn + "\n";
        		str += "oAuth.exclDownYn = "+ oAuth.exclDownYn + "\n";
        		str += "oAuth.reportPrntYn = "+ oAuth.reportPrntYn + "\n";
        		str += "oAuth.fileUpYn = "+ oAuth.fileUpYn + "\n";

        		this.TextArea2.set_value(str);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("ref12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
