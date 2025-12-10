(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref29");
            this.set_titletext("Workflow 진행단계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tabCond","10","10","395","62",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tabCond);
            obj.set_text("요청서 양식");
            this.tabCond.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatVer","260.00","5","49","24",null,null,null,null,null,null,this.tabCond.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("버전");
            obj.set_cssclass("sta_WF_schTitle");
            this.tabCond.tabpage1.addChild(obj.name, obj);

            obj = new Spin("spnReqTmplatVer","309","5","70","24",null,null,null,null,null,null,this.tabCond.tabpage1.form);
            obj.set_taborder("1");
            obj.set_min("1");
            obj.set_max("200");
            obj.set_value("1");
            this.tabCond.tabpage1.addChild(obj.name, obj);

            obj = new Static("stcReqTmplatId","10.00","5","99","24",null,null,null,null,null,null,this.tabCond.tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("요청서양식ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.tabCond.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtReqTmplatId","109","5","140","24",null,null,null,null,null,null,this.tabCond.tabpage1.form);
            obj.set_taborder("3");
            this.tabCond.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tabCond);
            obj.set_text("요청서");
            this.tabCond.addChild(obj.name, obj);

            obj = new Static("stcReqId","0.00","5","90","24",null,null,null,null,null,null,this.tabCond.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("요청서 번호");
            obj.set_cssclass("sta_WF_inputTitle");
            this.tabCond.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtReqId","stcReqId:5","5","140","24",null,null,null,null,null,null,this.tabCond.tabpage2.form);
            obj.set_taborder("1");
            this.tabCond.tabpage2.addChild(obj.name, obj);

            obj = new Button("btnSearch","339","4","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);

            obj = new Div("divWorkFlow","5","tabCond:10",null,"165","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("sr::SR0010_D00.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabCond.tabpage1.form
            obj = new Layout("default","",0,0,this.tabCond.tabpage1.form,function(p){});
            this.tabCond.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabCond.tabpage2.form
            obj = new Layout("default","",0,0,this.tabCond.tabpage2.form,function(p){});
            this.tabCond.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkFlow
            obj = new Layout("default","",0,0,this.divWorkFlow.form,function(p){});
            this.divWorkFlow.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sr::SR0010_D00.xfdl");
        };
        
        // User Script
        this.registerScript("ref29.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ Workflow 진행단계
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.06.07
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        2024.06.07		WEMB		최초작성
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

        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 요청서 양식 단계 상세 조회
        this.fnSearchProcDt = function()
        {
        	var sTranId = "selectProcDt";                   // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "WF0120W/selectProcDt";          // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsReqProcDt=dsWfReqTmplatProcDt";	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 요청서 양식 단계 Flow 상세 조회
        this.fnSearchWfHistFlow = function()
        {
        	if(this.tabCond.tabindex == 0)
        	{
        		if( Ex.isEmpty(this.tabCond.tabpage1.form.edtReqTmplatId.value) ) return;
        		if( Ex.isEmpty(this.tabCond.tabpage1.form.spnReqTmplatVer.value) ) return;

        		this.divWorkFlow.form.dsCond.setColumn(0, "REQ_ID", "");
        		this.divWorkFlow.form.dsCond.setColumn(0, "REQ_TMPLAT_ID", this.tabCond.tabpage1.form.edtReqTmplatId.value);
        		this.divWorkFlow.form.dsCond.setColumn(0, "REQ_TMPLAT_VER", this.tabCond.tabpage1.form.spnReqTmplatVer.value);
        	}
        	else
        	{
        		if( Ex.isEmpty(this.tabCond.tabpage2.form.edtReqId.value) ) return;

        		this.divWorkFlow.form.dsCond.setColumn(0, "REQ_ID", this.tabCond.tabpage2.form.edtReqId.value);
        		this.divWorkFlow.form.dsCond.setColumn(0, "REQ_TMPLAT_ID", "");
        		this.divWorkFlow.form.dsCond.setColumn(0, "REQ_TMPLAT_VER", "");
        	}

        	this.divWorkFlow.form.fnSearchWfFlow();
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
        		case "btnSearch" :
        			this.fnSearchWfHistFlow();
        			break;
        	}
        };

        this.onkeyup = function(obj, e)
        {
        	if(e.keycode == 13)	this.fnSearchWfHistFlow();
        };

        this.tabCond_onchanged = function(obj,e)
        {
        	this.fnSearchWfHistFlow();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tabCond.addEventHandler("onchanged",this.tabCond_onchanged,this);
            this.tabCond.tabpage1.form.edtReqTmplatId.addEventHandler("onkeyup",this.onkeyup,this);
            this.tabCond.tabpage2.form.edtReqId.addEventHandler("onkeyup",this.onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref29.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
