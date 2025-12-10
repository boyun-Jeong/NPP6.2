(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comWebEditor");
            this.set_titletext("CKEditor5");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webEditor","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_border("0px solid crimson");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,250,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comWebEditor.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ comWebEditor
        * 화면(명)		︰ 웹에디터(CKEditor5)
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this._isInit	= false;
        this._loadFlag	= false;	// webeditor load complete flag
        this._setValue	= null;		// webeditor setContent flag
        this._bReadonly	= false;	// webeditor readonly flag
        this._bEmptyMsg	= "내용을 입력하세요.";
        this._bSetFocus	= false;
        this._backColor = "";
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        	Ex.util.setWait(this, true);
        }

        this.fnInit = function(){}

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // web editor init
        // bReadonly	(true/false) :: true 시 readonly; default false
        this.initCreate = function(bReadonly, emptyMsg, color)
        {
        	this._isInit = true;
        	if(this.parent.parent.reqInfo)
        	{
        		trace("[comWebEditor] initCreate() SCRN_WF_PROC_CD : " + this.parent.parent.reqInfo.SCRN_WF_PROC_CD);
        	}

        	// readonly
        	if( Ex.isEmpty(bReadonly) )	bReadonly = false;
        	if( !Ex.isEmpty(color) )	this._backColor = color;

        	var isModeChg = false;
        	if(this._bReadonly != bReadonly)
        	{
        		this._bReadonly = bReadonly;
        		isModeChg = true;
        	}

        	trace("isModeChg : " + isModeChg + " this.webEditor.url : " + this.webEditor.url + "this._bReadonly : " + this._bReadonly + " bReadonly : " + bReadonly);

        	if( !Ex.isEmpty(emptyMsg) )	this._bEmptyMsg = emptyMsg;
        	else						this._bEmptyMsg = "";

        	if( Ex.isEmpty(this.webEditor.url) )
        	{
        		var gvHost	= nexacro.getApplication().gvHost;
        		var svcUrl	= nexacro.getEnvironment().services["svc_url"].url;
        		this.webEditor.set_url(svcUrl + "spp/ckeditor/index.html");
        	}
        	else
        	{
        		if(isModeChg)
        		{
        			this.setReadonly(this._bReadonly);
        		}
        	}
        }

        // web editor에 값 setter
        this.setContent = function(value)
        {
        	if( !this._loadFlag)
        	{
        		this._setValue = value;
        	}
        	else
        	{
        		this.webEditor.callMethod("setContent", value);
        		this._setValue = null;
        	}
        }

        // web editor 값 getter
        this.getContent = function()
        {
        	this.webEditor.callMethod("getContent");
        	var contents	= this.webEditor.getProperty("document").getProperty("all").getProperty("editorData").getProperty("value")||'';
        	return contents;
        }

        this.setHeight = function(height)
        {
        	if( Ex.isEmpty(height) ) height = this.webEditor.getOffsetHeight();
        	this.webEditor.callMethod("setHeight", height);		// set default height
        }

        this.setFocus = function()
        {
        	if(this._loadFlag)	this.webEditor.callMethod("setFocus");
        	else				this._bSetFocus = true;
        }

        this.setReadonly = function(bReadonly)
        {
        	if(this._loadFlag)	this.fnSetReadonlyProc(bReadonly);
        }

        this.fnSetReadonlyProc = function(bReadonly)
        {
        	this.webEditor.callMethod("setReadonly", bReadonly, this.webEditor.getOffsetHeight(), this._bEmptyMsg, this._backColor);		// set web editor readonly

        	if(bReadonly)
        	{
        		this.webEditor.set_bottom(null);
        		this.webEditor.set_height(this.parent.getOffsetHeight());
        	}
        	else
        	{
        		this.webEditor.set_height(null);
        		this.webEditor.set_bottom(0);
        	}
        }

        this.setEditorBackColor = function(backColor)
        {
        	this._backColor = backColor;
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
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId){}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	//trace('webEditor_onloadcompleted');
        	this.webEditor.callMethod('initEditor', this.getOffsetHeight(), this._backColor);
        }

        this.webEditor_onusernotify = function(obj,e)
        {
        	//trace('onusernotify :: ' + e.userdata);
        	switch(e.userdata)
        	{
        		case "editor Load" :		// 웹에디터 로드 완료
        			trace("this.webEditor_onusernotify() editor Load");
        			this._loadFlag = true;

        			this.setReadonly(this._bReadonly);

        			if( this._setValue != null )
        			{
        				this.setContent(this._setValue);
        				this._setValue = null;
        			}

        			this.webEditor.set_visible(true);

        			if(this._bSetFocus)	this.webEditor.callMethod("setFocus");
        			break;

        		case "editor Fail" :		// 웹에디터 로드 실패
        			trace("this.webEditor_onusernotify() editor Fail");
        			break;

        		case "setContent" :			// setContent call
        			if(this.parent.parent.reqInfo)
        			{
        				trace("this.webEditor_onusernotify() setContent this._loadFlag : " + this._loadFlag + " SCRN_WF_PROC_CD : " + this.parent.parent.reqInfo.SCRN_WF_PROC_CD);
        			}
        			break;

        		case "getContent" :			// getContent call
        			trace("this.webEditor_onusernotify() getContent");
        			break;

        		case "setReadonly" :		// setReadonly call
        			trace("this.webEditor_onusernotify() setReadonly");
        			break;

        		case "changeData" :			// changeData
        			if(this.getOwnerFrame().url == "sr::SR0000_W.xfdl" || this.getOwnerFrame().url == "sr::SR0010_W.xfdl")
        			{
        				trace("this.webEditor_onusernotify() changeData");

        				var srForm = this;
        				while( srForm )
        				{
        					if( Ex.isEmpty(srForm.reqInfo) )
        					{
        						srForm = srForm.parent;
        					}
        					else
        					{
        						break;
        					}
        				}

        				var evt = nexacro.KeyEventInfo;
        				var objComp = srForm.reqInfo.PARENT_FORM.SR0000_W_onkeyup(this, evt);
        			}
        			break;

        		case "setFocus" :			// setFocus call
        			trace("this.webEditor_onusernotify() setFocus");
        // 			if(this.getOwnerFrame().url == "sr::SR0000_W.xfdl" || this.getOwnerFrame().url == "sr::SR0010_W.xfdl")
        // 			{
        // 				var srForm = this;
        // 				while( srForm )
        // 				{
        // 					if( Ex.isEmpty(srForm.reqInfo) )
        // 					{
        // 						srForm = srForm.parent;
        // 					}
        // 					else
        // 					{
        // 						break;
        // 					}
        // 				}
        //
        // 				var objComp = srForm.reqInfo.PARENT_FORM.getFocus();
        // 				if(objComp)
        // 				{
        // 					trace("[comWebEditor] objComp.id : " + objComp.id);
        // 					if(objComp.updateToDataset)
        // 					{
        // 						trace("[comWebEditor] " + objComp.id + " updateToDataset() value : " + objComp.value);
        // 						var rtn = objComp.updateToDataset();
        // 						trace("[comWebEditor] " + objComp.id + " updateToDataset() rtn : " + rtn);
        // 					}
        // 				}
        // 			}
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.comWebEditor_ontimer,this);
            this.webEditor.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
        };
        this.loadIncludeScript("comWebEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
