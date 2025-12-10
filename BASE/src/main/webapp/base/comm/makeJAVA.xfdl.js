(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CreateJAVA_temlplte");
            this.set_titletext("JAVA templete 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PKG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CRE_MAPPER_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CRE_MAPPER_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01","5","315","100","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("처리 결과");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_qurey","5","Static00_01:6",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("divInput","5","20",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","5.00","1","61","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("0");
            obj.set_text("패키지명");
            obj.set_cssclass("sta_WF_SchTitle");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtPkgNm","Static00_00:0.00","1","68","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("1");
            obj.set_maxlength("4");
            obj.set_inputmode("lower");
            obj.set_inputtype("alpha");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static00","edtPkgNm:10.00","1","71","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("2");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WF_SchTitle");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtPgmId","Static00:0","1","158","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("3");
            obj.set_inputtype("alpha,digit");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","edtPgmId:10","1","86","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("4");
            obj.set_text("프로그램 제목");
            obj.set_cssclass("sta_WF_SchTitle");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtPgmTitle","Static00_00_00:0","1","222","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","edtPgmTitle:10","1","61","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("6");
            obj.set_text("작성자명");
            obj.set_cssclass("sta_WF_SchTitle");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edtRegUserNm","Static00_00_01:0","1","118","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","edtRegUserNm:10","1","51","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("8");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_SchTitle");
            this.divInput.addChild(obj.name, obj);

            obj = new Calendar("CalRegDate","Static00_00_01_00:0","1","120","24",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("9");
            obj.set_showyearspin("true");
            obj.set_showmonthspin("true");
            this.divInput.addChild(obj.name, obj);

            obj = new Button("btnExec",null,"1","77","24","5",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("10");
            obj.set_text("생성");
            obj.set_cursor("pointer");
            this.divInput.addChild(obj.name, obj);

            obj = new Button("btnCheck",null,"1","77","24","87",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("11");
            obj.set_text("체크");
            obj.set_cursor("pointer");
            this.divInput.addChild(obj.name, obj);

            obj = new CheckBox("chkCreMapper","CalRegDate:10","3","120","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("12");
            obj.set_text("Mapper 포함여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","5","55","100","19",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("체크 내용");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_qurey00","5","79",null,null,"5","Static00_01:21",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divInput.form
            obj = new Layout("default","",0,0,this.divInput.form,function(p){});
            this.divInput.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divInput.form.edtPkgNm","value","dsCond","PKG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divInput.form.edtPgmId","value","dsCond","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divInput.form.edtPgmTitle","value","dsCond","PGM_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divInput.form.edtRegUserNm","value","dsCond","REG_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txt_qurey00","value","dsChkResult","RTN_CHK_MSG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txt_qurey","value","dsResult","RTN_MSG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divInput.form.chkCreMapper","value","dsCond","CRE_MAPPER_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("makeJAVA.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ JAVA FILE LOCAL 자동 생성
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통 팝업
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
        	this.divInput.form.edtRegUserNm.set_value(Ex.util.getSession("gvUserNm"));
        	this.divInput.form.CalRegDate.set_value(Ex.util.today());
        	this.divInput.form.edtPkgNm.setFocus();
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
        		case "check" : // 서비스 ID
        			if(this.dsResult.rowcount == 1)
        			{
        				this.dsResult.clearData();
        			}
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
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	if(mID == "pAlertPkgNmI")
        	{
        		this.divInput.form.edtPkgNm.setFocus();
        	}
        	else if(mID == "pAlertPgmIdI")
        	{
        		this.divInput.form.edtPgmId.setFocus();
        	}
        	else if(mID == "pAlertPgmTitleI")
        	{
        		this.divInput.form.edtPgmTitle.setFocus();
        	}
        	else if(mID == "pAlertRegUserNmI")
        	{
        		this.divInput.form.edtRegUserNm.setFocus();
        	}
        	else if(mID == "pAlertRegDateI")
        	{
        		this.divInput.form.CalRegDate.setFocus();
        	}
        	else if(mID == "pProcConfirmI")
        	{
        		this.dsCond.setColumn(0, "REG_DATE", Ex.util.getMaskFormatString(Ex.util.strToDate(this.divInput.form.CalRegDate.value), "yyyy. MM. dd."));
        		var sTranId = "proc";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "JAVACreate/proc";	// 서비스명
        		var sInDs = "dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "dsResult=dsResult";	// 서버에서 수신할 데이타셋
        		var sArg = "";						// 서버 @ParamVariable 인자와 맵핑됨
        		/**
        		 * 기본문법
        		 * this : transaction 실행스코프 (필수)
        		 */
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        //사용자 정의 함수

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        //공통 버튼 이벤트
        this.fnButtonComOnclick = function(obj, e)
        {
            var sObjId = obj.name;

            switch(sObjId)
        	{
        		case "btnCheck" :
        			if(!this.fnValidCheck()) return;

        			var sTranId = "check";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        			var sService = "JAVACreate/check";		// 서비스명
        			var sInDs = "dsCond=dsCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        			var sOutDs = "dsChkResult=dsChkResult";	// 서버에서 수신할 데이타셋
        			var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
        			/**
        			 * 기본문법
        			 * this : transaction 실행스코프 (필수)
        			 */
        			Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
                    break;

                case "btnExec" :
        			if(!this.fnValidCheck()) return;

        			if(this.dsChkResult.rowcount == 0)
        			{
        				var param = {id : "pAlertCheckBtnI", msg : "체크 버튼을 통해 생성 가능여부 체크 후 생성을 진행하시기 바랍니다."};
        				Ex.core.alert(this, param);
        				return false;
        			}
        			else
        			{
        				if(this.dsChkResult.getColumn(0, "RTN_CHK_CD") == 0)
        				{
        					if(this.dsChkResult.getColumn(0, "CHK_PKG_NM") == this.dsCond.getColumn(0, "PKG_NM") &&
        					   this.dsChkResult.getColumn(0, "CHK_PGM_ID") == this.dsCond.getColumn(0, "PGM_ID"))
        					{
        						var param = {id : "pProcConfirmI", msg : "JAVA Templete 파일을 생성하시겠습니까?"};
        						Ex.core.confirm(this, param);
        						return;
        					}
        					else
        					{
        						var param = {id : "pAlertCheckBtnI", msg : "패키지명 [또는] 프로그램ID가 변경되었습니다.\n체크 버튼 실행 후\n다시 생성 버튼을 실행 하시기 바랍니다."};
        						Ex.core.alert(this, param);
        						return false;
        					}
        				}
        				else
        				{
        					var param = {id : "pAlertCheckBtnI", msg : "패키지명 [또는] 프로그램ID를 올바르게 지정 후\n다시 체크 버튼 확인 후\n생성 버튼을 실행 하시기 바랍니다."};
        					Ex.core.alert(this, param);
        					return false;
        				}
        			}
        	}
        }

        this.fnValidCheck = function()
        {
        	if( Ex.isEmpty(this.dsCond.getColumn(0, "PKG_NM")))
        	{
        		var param = {id : "pAlertPkgNmI", msg : "생성할 패키지명이 입력되지 않았습니다."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else if(Ex.util.getLength(this.dsCond.getColumn(0, "PKG_NM"), "utf8") < 2)
        	{
        		var param = {id : "pAlertPkgNmI", msg : "패키지명은 2자리로 입력해야 합니다."};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if( Ex.isEmpty(this.dsCond.getColumn(0, "PGM_ID")))
        	{
        		var param = {id : "pAlertPgmIdI", msg : "생성할 프로그램ID가 입력되지 않았습니다."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else if(Ex.util.getLength(this.dsCond.getColumn(0, "PGM_ID"), "utf8") < 7)
        	{
        		var param = {id : "pAlertPkgNmI", msg : "프로그램ID는 7자리로 입력해야 합니다.\nex) XX0010W"};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if( Ex.isEmpty(this.dsCond.getColumn(0, "PGM_TITLE")))
        	{
        		var param = {id : "pAlertPkgTitleI", msg : "프로그램 제목이 입력되지 않았습니다."};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	return true;
        }

        this.divInput_Static00_onrbuttonup = function(obj,e)
        {
        	trace("e.ctrlkey : "  + e.ctrlkey + " e.shiftkey : " + e.shiftkey);
        	if(e.ctrlkey && e.shiftkey)
        	{
        		this.divInput.form.edtPgmId.set_inputmode("normal");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divInput.form.Static00.addEventHandler("onrbuttonup",this.divInput_Static00_onrbuttonup,this);
            this.divInput.form.btnExec.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.divInput.form.btnCheck.addEventHandler("onclick",this.fnButtonComOnclick,this);
        };
        this.loadIncludeScript("makeJAVA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
