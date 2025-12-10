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
                this._setFormPosition(1080,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divContents","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20","147","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridTitle");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcBackMid1","20","44",null,"10","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn",null,"20","140","24","20",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContents.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","20","54",null,null,"20","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_border("0px none");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20.00",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);

            obj = new Button("btnConf",null,"13","100","31","btnClose:5",null,null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContents.form.divGrdTopBtn.form,function(p){});
            this.divContents.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comWebEditorPop.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ comWebEditorPop
        * 화면(명)	︰ 웹에디터 팝업(CKEditor5)
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.06.05
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.06.05	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this._loadFlag	= false;	// webeditor load complete flag
        this._setValue	= null;		// webeditor setContent flag
        this._bReadonly	= false;	// webeditor readonly flag
        this._bEmptyMsg	= "내용을 입력하세요.";
        /* param 변수
        pBtnConfUseYn				//Popup 창의 넓이[STRING(Y/N)]
        pWidth						//Popup 창의 넓이[NUMBER]
        pHeight						//Popup 창의 높이[NUMBER]
        pTitle						//상단 Editor 위의 제목 TEXT[STRING]
        pContent					//Editor 내용 TEXT[STRING]
        pIsEss						//내용필수여부[boolean]
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

        this.fnInit = function()
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pTitle) )
        	{
        		this.divContents.form.staTitle.set_visible(true);
        		this.divContents.form.staTitle.set_text(this.getOwnerFrame().pTitle);
        	}

        	if( !Ex.isEmpty(this.getOwnerFrame().pContent) )
        	{
        		this._setValue = this.getOwnerFrame().pContent;
        	}

        	if( !Ex.isEmpty(this.getOwnerFrame().pBtnConfUseYn) )
        	{
        		if(this.getOwnerFrame().pBtnConfUseYn == "Y")
        		{
        			this.divBtnBottom.form.btnConf.set_visible(true);
        		}
        	}

        	var minWidth	= 760;
        	var minHeight	= 540;

        	if(	!Ex.isEmpty(this.getOwnerFrame().pWidth) )
        	{
        		this.getOwnerFrame().pWidth = nexacro.toNumber(this.getOwnerFrame().pWidth, 0);
        		if(this.getOwnerFrame().pWidth < minWidth)
        		{
        			this.getOwnerFrame().pWidth = minWidth;
        		}
        	}
        	else
        	{
        		this.getOwnerFrame().pWidth = 1080;
        	}

        	if(	!Ex.isEmpty(this.getOwnerFrame().pHeight) )
        	{
        		this.getOwnerFrame().pHeight = nexacro.toNumber(this.getOwnerFrame().pHeight, 0);
        		if(this.getOwnerFrame().pHeight < minHeight)
        		{
        			this.getOwnerFrame().pHeight = minHeight;
        		}
        	}
        	else
        	{
        		this.getOwnerFrame().pHeight = 760;
        	}

        	if(this.getOwnerFrame().pWidth != this.getOwnerFrame().width)	this.getOwnerFrame().set_width(this.getOwnerFrame().pWidth);
        	if(this.getOwnerFrame().pHeight != this.getOwnerFrame().height)	this.getOwnerFrame().set_height(this.getOwnerFrame().pHeight);

        	var nTop = parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(this.getOwnerFrame().height / 2) );
        	this.getOwnerFrame().set_top(nTop);

        	this.initCreate();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // web editor init
        // bReadonly	(true/false) :: true 시 readonly; default false
        this.initCreate = function(bReadonly, emptyMsg)
        {
        	// readonly
        	if( Ex.isEmpty(bReadonly) )	bReadonly = false;
        	this._bReadonly = bReadonly;

        	if( !Ex.isEmpty(emptyMsg) )	this._bEmptyMsg = emptyMsg;
        	else						this._bEmptyMsg = "";

        	var gvHost	= nexacro.getApplication().gvHost;
        	var svcUrl	= nexacro.getEnvironment().services["svc_url"].url;
        	this.divContents.form.webEditor.set_url(svcUrl + "spp/ckeditor/index.html");
        }

        // web editor에 값 setter
        this.setContent = function(value)
        {
        	if( !this._loadFlag) {
        		this._setValue = value;
        	}
        	else {
        		this.divContents.form.webEditor.callMethod("setContent", value);
        		this._setValue = null;
        	}
        }

        // web editor 값 getter
        this.getContent = function()
        {
        	this.divContents.form.webEditor.callMethod("getContent");
        	var contents	= this.divContents.form.webEditor.getProperty("document").getProperty("all").getProperty("editorData").getProperty("value")||'';
        	return contents;
        }

        this.setHeight = function(height)
        {
        	if( Ex.isEmpty(height) ) height = this.divContents.form.webEditor.getOffsetHeight();
        	this.divContents.form.webEditor.callMethod("setHeight", height);		// set default height
        }

        this.setReadonly = function(bReadonly)
        {
        	this.divContents.form.webEditor.callMethod("setReadonly", bReadonly, this._bEmptyMsg);		// set web editor readonly
        	this.webEditor.set_height(this.webEditor.getOffsetHeight() + 41);
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			Ex.core.pclose(this, this.getContent());
        			break;

        		case "pAlertEssI" :
        			this.divContents.form.webEditor.callMethod('setFocus');
        			break;
        	}
        }

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
        	switch (sSvcId)
        	{
        	}
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
        		case "btnConf" :	//적용
        			if( this.getOwnerFrame().pIsEss )
        			{
        				if( Ex.isEmpty(this.getContent()) )
        				{
        					var param = {
        						  id	: "pAlertEssI"			//fnMsgAfter에서 식별자로 사용되는 ID
        						, msg	: "내용이 입력되지 않았습니다."	//메시지 내용
        						, arrparam : []					//메시지의 변수에 들어갈 실제값
        						, msgtype : "I"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        					Ex.core.alert(this, param);
        					return;
        				}
        			}

        			if(this.getOwnerFrame().pContent != this.getContent())
        			{
        				var param = {
        					  id : "saveConfirm"
        					, msg : "적용하시겠습니까?"
        					, arrparam : []
        					, msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        			else
        			{
        				Ex.core.pclose(this);
        			}
        			break;

        		case "btnClose" : 	// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.webEditorOnloadcompleted = function(obj,e)
        {
        	//trace('webEditor_onloadcompleted');
        	this.divContents.form.webEditor.callMethod('initEditor', this.divContents.form.webEditor.getOffsetHeight());
        };

        this.webEditorOnusernotify = function(obj,e)
        {
        	//trace('onusernotify :: ' + e.userdata);
        	switch(e.userdata)
        	{
        		case "editor Load" :		// 웹에디터 로드 완료
        			Ex.util.setWait(this, false);
        			this.setReadonly(this._bReadonly);
        			this._loadFlag = true;

        			if( this._setValue != null ) {
        				this.setContent(this._setValue);
        				this._setValue = null;
        			}

        			this.divContents.form.webEditor.set_visible(true);
        			if(!this._bReadonly)	this.divContents.form.webEditor.callMethod('setFocus');

        			break;

        		case "editor Fail" :		// 웹에디터 로드 실패
        			Ex.util.setWait(this, false);
        			break;

        		case "setContent" :			// setContent call
        			break;

        		case "getContent" :			// getContent call
        			break;

        		case "setReadonly" :		// setReadonly call
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.comWebEditor_ontimer,this);
            this.divContents.form.webEditor.addEventHandler("onloadcompleted",this.webEditorOnloadcompleted,this);
            this.divContents.form.webEditor.addEventHandler("onusernotify",this.webEditorOnusernotify,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnConf.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("comWebEditorPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
