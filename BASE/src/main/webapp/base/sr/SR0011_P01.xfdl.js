(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0011_P01");
            this.set_titletext("협업의견작성(팝업)");
            this.getSetter("scrollbars").set("autoboth");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divFiles","20","541",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("__USE_MODE").set("1");
            obj.getSetter("_ENABLE_READONLY_ALL_SKIP").set("Y");
            obj.set_url("comm::comFile.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divComment","20","10",null,null,"20","divFiles:5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("comm::comCommentDiv.xfdl");
            obj.set_async("false");
            obj.set_border("0px solid darkmagenta");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"110","32","btnClose:5","13",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFiles
            obj = new Layout("default","",0,0,this.divFiles.form,function(p){});
            this.divFiles.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComment
            obj = new Layout("default","",0,0,this.divComment.form,function(p){});
            this.divComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,820,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edt_upmuNm","value","ds_userInfo","UPMU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divComment.form.divInfo.form.stcBg01","value","dsWfApprovalMt","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divComment.form.divInfo.form.stcBg01_00","value","dsWfApprovalMt","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divComment.form.divInfo.form.stcBg01_01","value","dsWfApprovalMt","REQ_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comFile.xfdl");
            this._addPreloadList("fdl","comm::comCommentDiv.xfdl");
        };
        
        // User Script
        this.registerScript("SR0011_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ SR0011_P01
        * 화면(명)	︰ 협업의견작성 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.07.29
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.07.29	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        var formObj;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	formObj = obj;
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 공통 저장 func.
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";									// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FOMM0000P/save01";						// 서비스명
        	var sInDs = "dsCond=dsCond dsFommUserMt=dsFommUserMt";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsFommUserMt=dsFommUserMt";				// 서버에서 수신할 데이타셋
        	var sArg = "";											// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        		case "" :
        			break;

        		case "save01" :
        			if(this.dsFommUserMt.getColumn(0, "LANG_CD") != Ex.util.getSession('gvLangCd'))
        			{
        				Ex.core.get_id()(this, "10004");
        				var param = {id : "pConfirmRefreshI", msg : "10014", arrparam : [''], msgtype : "I"};
        				Ex.core.confirm(this, param);
        				return;
        			}
        			else
        			{
        				var param = {
        						id : "saveAlert"
        					  , msg : "10004"
        					  , arrparam : ['']
        					  , msgtype : "S"};
        				Ex.core.alert(this, param);
        			}
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
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pConfirmSaveI" :
        			this.divFiles.form.fnUploadFiles(true);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	trace("this.getOwnerFrame().pTableName=[" + this.getOwnerFrame().pTableName + "] this.getOwnerFrame().pPK1=[" + this.getOwnerFrame().pPK1 + "] this.getOwnerFrame().pReqId=[" + this.getOwnerFrame().pReqId + "]")
        	if( Ex.isEmpty(this.getOwnerFrame().pTableName) )
        	{
        		trace("pTableName is Empty");
        		Ex.core.pclose(this);
        	}

        	if( Ex.isEmpty(this.getOwnerFrame().pPK1) )
        	{
        		trace("primaryKey1 is Empty");
        		Ex.core.pclose(this);
        	}
        	if( Ex.isEmpty(this.getOwnerFrame().pReqId) )
        	{
        		trace("reqId is Empty");
        		Ex.core.pclose(this);
        	}

        	// 첨부파일 setting
        	var oParam = {
        		 sSvcId		: 'fileSvc'										// divFile callback 후처리용 서비스 ID
        		,limitMinCnt: 0												// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3												// 파일 최대 갯수; default 5
        		,limitSize	: 100											// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'sr'											// 폴더명(업무명)
        		,tableName	: 'WF_SR_COMMENT'								// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: this.getOwnerFrame().pPK1||''					// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''											// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''											// 테이블 PK3 (복합 키인 경우 사용)
        		,fileDownYn	: 'Y'											// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: 'Y'											// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: 'Y'											// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        		,delFnScope	: this
        		,delCheckFn	: "fnDeleteCheck"
        	};
        	this.divFiles.form.setConfig(this, oParam, true, false, false );
        	//this.setConfig = function(scope, oParam, isSearch, isDownOnly, isBtnAuth)
        	var oParam = {
        		  tableName		: this.getOwnerFrame().pTableName
        		, primaryKey1	: this.getOwnerFrame().pPK1
        		, primaryKey2	: ''
        		, primaryKey3	: ''
        		, extCol1		: 'btnConfirm_Y'
        		, extCol2		: this.getOwnerFrame().pReqId
        		, extCol3		: ''
        		, extCol4		: ''
        		, extCol5		: ''
        		, nDispComment	: ''
        	};
        	this.divComment.form.setConfig(this, oParam);
        }

        this.fnDeleteCheck = function(dsObj)
        {
        	//trace("[SR2000_T02] this.fnDeleteCheck()");
        	// 삭제 전 권한 체크
        	for(var i=0; i<dsObj.rowcount; i++)
        	{
        		if("1" == dsObj.getColumn(i,"CHK") && dsObj.getColumn(i,"FRID") != Ex.util.getSession('gvUserId') )
        		{
        			var oParam = {id : "alertDelChk", msg : "본인이 첨부한 파일만 삭제 가능합니다.", arrparam : '', msgtype : "I"};
        			Ex.core.alert(this, oParam);
        			return false;
        		}
        	}
        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSave" :			// 저장

        			var param = {id : "pConfirmSaveI", msg : "10003", arrparam : [''], msgtype : "I"};
        			Ex.core.confirm(this, param);
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0011_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
