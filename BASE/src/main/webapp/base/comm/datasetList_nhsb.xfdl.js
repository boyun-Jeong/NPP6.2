(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DatasetList");
            this.set_titletext("Debug");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"STR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("dbTab","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("35");
            obj.set_showextrabutton("true");
            obj.set_font("bold 14px/normal \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabEditor1",this.dbTab);
            obj.set_text("에디터1");
            obj.set_url("comm::dbEditor.xfdl");
            this.dbTab.addChild(obj.name, obj);

            obj = new Button("btnTabClose",null,"0","120","28","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체 탭닫기");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddTab",null,"0","120","28","btnTabClose:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("에디터 추가");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.dbTab.tabEditor1
            obj = new Layout("default","",0,0,this.dbTab.tabEditor1.form,function(p){});
            this.dbTab.tabEditor1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::dbEditor.xfdl");
        };
        
        // User Script
        this.registerScript("datasetList_nhsb.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ DEBUG/UTIL
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통
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
        this.editorIdx = 1;
        this.tabpageIdx = -1;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.DatasetList_onload = function (obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
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

        this.fnMsgAfter = function(mID, varValue)
        {
        	if(!varValue)
        	{
        		if(mID == "editorCloseConfirm")	this.tabpageIdx = -1;
        		return;
        	}

        	switch(mID)
        	{
        		case "editorCloseConfirm" :
        			this.dbTab.removeTabpage(this.tabpageIdx);
        			this.tabpageIdx = -1;
        			break;

        		case "editorAllCloseConfirm" :
        			for(var i=this.dbTab.getTabpageCount()-1; i>=0; i--)
        			{
        				this.dbTab.removeTabpage(i);
        			}
        			break;

        	}
        }

        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.id)
        	{
        		case "btnAddTab" :	//에디터 추가
        			if(this.dbTab.getTabpageCount() == 10)
        			{
        				var param = {
        						id : "limitTabAlert"
        					  , msg : "editor Tab은 최대 10개까지만 열 수 있습니다."
        					  , arrparam : ['']
        					  , msgtype : "S"
        				};
        				Ex.core.alert(this, param);
        				return;
        			}
        			else
        			{
        				this.editorIdx++;
        				this.dbTab.insertTabpage("editor" + this.editorIdx, this.dbTab.getTabpageCount() ,"comm::dbEditor.xfdl", " 에디터" + this.editorIdx + " ");
        			}
        			break;

        		case "btnTabClose" :
        			if(this.dbTab.getTabpageCount() > 0)
        			{
        				var param = {
        						id : "editorAllCloseConfirm"
        					  , msg : "※[전체] Editor를 닫으시겠습니까?"
        					  , arrparam : ['']
        					  , msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        				this.tabpageIdx = e.index;
        				return;
        			}
        			break;
        	}
        }

        this.txaQueryEditor_onkeydown = function(obj,e)
        {
        	if( e.ctrlkey )
        	{
        		if( e.keycode == 13 )
        		{
        			var STR = this.txaQueryEditor.value;
        			if( !Ex.isEmpty(STR) )
        			{
        				this.dsCond.setColumn(0, 'STR', STR);
        				this.fnExec();
        				if(this.stcCenterLine.left != "50%")
        				{
        					this.btnSize_onclick(this.btnEditorSize);
        				}
        			}
        		}
        	}
        };

        this.dbTab_onextrabuttonclick = function(obj,e)
        {
         	if( Ex.isEmpty(this.dbTab.tabpages[e.index].form.txaQueryEditor.value) )
        	{
        		this.dbTab.removeTabpage(e.index);
        	}
        	else
        	{
        		var param = {
        				id : "editorCloseConfirm"
        			  , msg : "선택한 Editor 를 닫으시겠습니까?"
        			  , arrparam : ['']
        			  , msgtype : "I"
        		};
        		Ex.core.confirm(this, param);
        		this.tabpageIdx = e.index;
        		return;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DatasetList_onload,this);
            this.dbTab.addEventHandler("onextrabuttonclick",this.dbTab_onextrabuttonclick,this);
            this.btnTabClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnAddTab.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("datasetList_nhsb.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
