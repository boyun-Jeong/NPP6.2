(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFilePop");
            this.set_titletext("파일첨부");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBtnBottom","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnConf",null,null,"110","32","btnClose:5","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Div("divContents","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divFiles","20","0",null,null,"20","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.getSetter("__USE_MODE").set("1");
            obj.getSetter("_ENABLE_READONLY_ALL_SKIP").set("Y");
            obj.set_url("comm::comFile.xfdl");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divFiles
            obj = new Layout("default","",0,0,this.divContents.form.divFiles.form,function(p){});
            this.divContents.form.divFiles.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",850,270,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comFile.xfdl");
        };
        
        // User Script
        this.registerScript("comFilePop.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ comFile
        * 화면(명)		︰ 첨부파일 div
        * 메뉴(경로)	︰
        * 화면 설명	︰ SPP 첨부파일 Div
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.10.10
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.10	 WEMB		최초작성
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
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	// 에러메세지 처리
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	//if(!varValue) return;

        	switch(mID)
        	{
        		case "confConfirm" :
        			if(varValue)
        			{
        				Ex.core.pclose(this);
        			}
        			else
        			{
        				Ex.core.pclose(this, this.divContents.form.divFiles.form.dsFommFile.saveXML("dsFileList", "ALL"));
        			}
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // Component Init
        this.fnCompInit = function()
        {
        	if( Ex.isEmpty(this.getOwnerFrame().pBtnConfVisible) ) this.getOwnerFrame().pBtnConfVisible = false;
        	//trace("[comFilePop] this.fnCompInit() this.getOwnerFrame().pBtnConfVisible : [" + this.getOwnerFrame().pBtnConfVisible + "]");
        	if( this.getOwnerFrame().pBtnConfVisible )	this.divBtnBottom.form.btnConf.set_visible(this.getOwnerFrame().pBtnConfVisible);

        	//trace("[comFilePop] this.fnCompInit() this.getOwnerFrame().pTitle::: [" + this.getOwnerFrame().pTitle + "]");
        	//trace("[comFilePop] this.fnCompInit() this.getOwnerFrame().pIsSearch ::: [" + this.getOwnerFrame().pIsSearch + "]");
        	//trace("[comFilePop] this.fnCompInit() this.getOwnerFrame().pFilterStr ::: [" + this.getOwnerFrame().pFilterStr + "]");
        	//trace("[comFilePop] this.fnCompInit() this.getOwnerFrame().pIsDownLoad ::: [" + this.getOwnerFrame().pIsDownLoad + "]");

        	if( Ex.isEmpty(this.getOwnerFrame().pIsBtnAuth) ) this.getOwnerFrame().pIsBtnAuth = false;
        	this.divContents.form.divFiles.form.setConfig(this, this.getOwnerFrame().pFileCfg, this.getOwnerFrame().pIsSearch, this.getOwnerFrame().pIsDownLoad, this.getOwnerFrame().pIsBtnAuth);

        	if( !Ex.isEmpty(this.getOwnerFrame().pDsObj) )
        	{
        		this.divContents.form.divFiles.form.dsFommFile.loadXML(this.getOwnerFrame().pDsObj.saveXML("dsFommFile", "All"));
        	}

        	this.divContents.form.divFiles.form.FileUpTransfer = this.getOwnerFrame().pTargetFileDiv.form.FileUpTransfer;

        	if( !Ex.isEmpty(this.getOwnerFrame().pFilterStr) )
        	{
        		this.divContents.form.divFiles.form.dsFommFile.set_filterstr(this.getOwnerFrame().pFilterStr);
        	}
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnConf" :
        			//20241202 파일변경관리 수정
        			if(!Ex.isEmpty(this.getOwnerFrame().pFileFlag)) {
        				var cnt1 = this.divContents.form.divFiles.form.dsFommFile.getColumn(0,"EXT_COL_1");
        				if(!Ex.isEmpty(this.getOwnerFrame().pFileCfg.extGrid))
        				{
        					if(Ex.isEmpty(cnt1))
        					{
        						var param = {
        							id : "alert_admin"
        						  , msg : "파일구분을 확인해주세요."
        						  , msgtype : "I"};
        						Ex.core.alert(this, param);
        						return;
        					}
        				}

        			}
        			this.divContents.form.divFiles.form.dsFommFile.set_filterstr("");
        			trace(this.divContents.form.divFiles.form.dsFommFile.saveXML());
        			this.getOwnerFrame().pTargetFileDiv.form.FileUpTransfer = this.divContents.form.divFiles.form.FileUpTransfer;
        			Ex.core.pclose(this, this.divContents.form.divFiles.form.dsFommFile.saveXML("dsFileList", "ALL"));
        			break;

        		case "btnClose" : 	// 닫기
        			/*
        			if(this.divContents.form.divFiles.form.isUpdateForm())
        			{
        				var param = {
        						id : "confConfirm"
        					  , msg : "첨부파일이 변경 되었습니다.\n적용하지 않고 화면을 닫으시겠습니까?"
        					  , arrparam : ['']
        					  , msgtype : "I"};
        				Ex.core.confirm(this, param);
        			}
        			else
        			{
        				Ex.core.pclose(this);
        			}
        			*/
        			Ex.core.pclose(this);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnConf.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("comFilePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
