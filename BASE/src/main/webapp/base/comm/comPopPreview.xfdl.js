(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comPopPreview");
            this.set_titletext("화면미리보기 팝업 base");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divPage","20","0",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enableevent("false");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnBottom","20","divPage:20",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","0","14",null,null,null,null,this.divBtnBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBtnBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnBottom.form
            obj = new Layout("default","",0,0,this.divBtnBottom.form,function(p){});
            this.divBtnBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comPopPreview.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 화면 미리보기 공통 팝업
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

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	if( !Ex.isEmpty(this.getOwnerFrame().pPageURL) )
        	{
        		this.divPage.form.set_enableevent(false);
        		trace("this.getOwnerFrame().pPageURL : " + this.getOwnerFrame().pPageURL);
        		this.divPage.set_url(this.getOwnerFrame().pPageURL);

        		var dWidth = nexacro.toNumber(this.divPage.form.getLayoutInfo("default", "width"));
        		var dHeight = nexacro.toNumber(this.divPage.form.getLayoutInfo("default", "height"));

        		if( !Ex.util.checkType("NUMBER", dWidth) || !Ex.util.checkType("NUMBER", dHeight) )
        		{
        			var param = {id : "pAlertNoPreviewI", msg : "미리 보기 페이지 정보가 없습니다."};
        			Ex.core.alert(this, param);
        			return;
        		}

        		this.divPage.set_width(dWidth);
        		this.divPage.set_height(dHeight);

        		this.getOwnerFrame().set_width(dWidth + 45);
        		this.getOwnerFrame().set_height(dHeight + 20 + 60 + 52);

        		var mainW = nexacro.toNumber(nexacro.getApplication().mainframe.width);
        		var mainH = nexacro.toNumber(nexacro.getApplication().mainframe.height);

        		var nLeft   =  parseInt( (mainW - this.getOwnerFrame().width) / 2);
        	    var nTop    =  parseInt( (mainH - this.getOwnerFrame().height) / 2);

        		trace("[comPopPreview] mainW : " + mainW + " dWidth : " + dWidth + " mainH : " + mainH + " dHeight : " + dHeight + " nLeft : " + nLeft + " nTop : " + nTop);

        		this.getOwnerFrame().set_left(nLeft);
        		this.getOwnerFrame().set_top(nTop);

        		this.fnClearFormBtnEvent(this.divPage.form);

        		if(this.divPage.form.fnPagePreView)
        		{
        			this.divPage.form.fnPagePreView(this.getOwnerFrame().param1,
        											this.getOwnerFrame().param2,
        											this.getOwnerFrame().param3,
        											this.getOwnerFrame().param4,
        											this.getOwnerFrame().param5);
        		}
        	}
        	else
        	{
        		var param = {id : "pAlertNoPreviewI", msg : "미리 보기 페이지 정보가 없습니다."};
        		Ex.core.alert(this, param);
        		return;
        	}
        }

        this.fnClearFormBtnEvent = function (obj)
        {
        	var arrComp = obj.components;
        	var nLength = arrComp.length;
        	for (var i=0; i<nLength; i++)
        	{
        		if(arrComp[i] instanceof nexacro.Div)
        		{
        			//trace("[comPopPreview] i=" + i + " id : " + arrComp[i].id);
        			arrComp[i].set_enableevent(false);
        			this.fnClearFormBtnEvent(arrComp[i].form);
        		}
        		else if(arrComp[i] instanceof nexacro.Tab)
        		{
        			var nPages = arrComp[i].tabpages.length;
        			for (var j=0; j<nPages;j++)
        			{
        				arrComp[i].tabpages[j].set_enableevent(false);
        				this.fnClearFormBtnEvent(arrComp[i].tabpages[j].form);
        			}
        		}
        		else
        		{
        			arrComp[i].set_enableevent(false);
        		}
        	}
        }

        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pAlertNoPreviewI" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.btnCloseOnclick = function(obj,e)
        {
        	Ex.core.pclose(this);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.btnCloseOnclick,this);
        };
        this.loadIncludeScript("comPopPreview.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
