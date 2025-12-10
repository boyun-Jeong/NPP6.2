(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMsgConfirm");
            this.set_titletext("comMsgConfirm");
            this.set_background("transparent");
            this.getSetter("style").set("background:white;border:1 solid #4e73b6ff ;");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_borderRadius("0px 0px 5px 5px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"60","0","0",null,null,null,null,this.divBg.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_msg_btnbg");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","5",null,"40","0",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("3");
            obj.set_text("메시지창");
            this.divBg.addChild(obj.name, obj);

            obj = new TextArea("txaMsg","20","65",null,null,"20","70",null,null,null,null,this.divBg.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("txa_POP_msg_conts");
            obj.getSetter("wordwrap").set("char");
            obj.set_border("0px");
            obj.set_background("transparent");
            obj.set_visible("false");
            obj.set_textAlign("left");
            this.divBg.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"100","32","129","14",null,null,null,null,this.divBg.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBg.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","20","20","5",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("5");
            obj.set_text("X");
            obj.set_visible("false");
            this.divBg.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"100","32","24","14",null,null,null,null,this.divBg.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("staMsg","20","65",null,null,"20","70",null,null,null,null,this.divBg.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_POP_msg_conts");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("stcBgLineTop","0","0",null,"5","0",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("7");
            obj.set_background("#4580ff");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("stcBgLineTop00","20","44",null,"1","20",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("8");
            obj.set_background("#dfdfdf");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("stcBgLineTop00_00","20",null,null,"1","20","59",null,null,null,null,this.divBg.form);
            obj.set_taborder("9");
            obj.set_background("#dfdfdf");
            this.divBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBg.form
            obj = new Layout("default","",0,0,this.divBg.form,function(p){});
            this.divBg.form.addLayout(obj.name, obj);

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
        this.registerScript("comMsgConfirm.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 공통 CONFIRM
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
        this.param = {};
        this.isError = false;

        this.form_onload = function(obj,e)
        {
        	this.param = this.getOwnerFrame()._param_;

        	var msgType = this.param.msgType||'';
        	var css = '';

        	switch(msgType)
        	{
        		case "I" :	css = 'sta_POP_msg_info';		break;	// 'i' icon; 일반적인 alert
        		case "W" :	css = 'sta_POP_msg_warning';	break;	// '!' icon; 경고 alert
        		case "S" :	css = 'sta_POP_msg_success';	break;	// 'check' icon; 저장되었습니다. 등 성공 alert
        		default	 : css = 'sta_POP_msg_title'; 		break;	// 아이콘 없는 기본 alert
        	}
        	this.divBg.form.stcTitle.set_cssclass(css);

        	var msg = this.param.msg || '';
        	// decorate 사용하는 경우 static으로 대체
        	if( msg.indexOf('<fc ') >= 0 )
        	{
        		this.divBg.form.staMsg.set_visible(true);
        	}
        	else
        	{
        		this.divBg.form.txaMsg.set_wordWrap('char');
        		this.divBg.form.txaMsg.set_visible(true);
        	}
        	this.isError = this.param.error || false;

        	var objStaticSize = nexacro.getTextSize(msg, this.divBg.form.txaMsg._getCurrentStyleInheritValue("font")); // ,310,"char" );
        	var objmax = parseInt(objStaticSize.ny)+14;

        	if( objmax > 80 )
        	{
        		var nH = parseInt(this.getOffsetHeight());
        		var n   = objmax-80;
        		var calc = this.getOwnerFrame().height + n;
        		if( calc > 414 ) calc = 414;

        		this.getOwnerFrame().set_height(calc);
        		var recalc = this.getOwnerFrame().top-n;

        		var nTop    =  parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(this.getOwnerFrame().height / 2) );
        		this.getOwnerFrame().set_top(nTop);
        	}

        	if (this.isError)
        	{
        		this.divBg.form.stcTitle.set_cssclass("sta_POP_msg_error");
        		var arrMsg = msg.split("::");
        		this.divBg.form.stcTitle.set_text("에러 메시지(" + arrMsg[0] + ")");
        		//this.btnConfirm.set_left(147);
        		this.divBg.form.btnCancel.set_visible(false);

        		this.divBg.form.btnConfirm.set_text("확인");

        		var arrMsg = msg.split("::");
        		this.divBg.form.txaMsg.set_value(arrMsg[2] || '');
        	}
        	else
        	{
        		this.divBg.form.txaMsg.set_value(msg);
        		this.divBg.form.staMsg.set_text(msg);
        	}
        }

        this.btnConfirm_onclick = function(obj,e)
        {
        	Ex.core.errorCnt = 0;
        	Ex.core.pclose(this, true);
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	if (this.isError)
        	{
        		Ex.core.errorCnt = 0;
        		return;
        	}
        	else
        	{
        		Ex.core.errorCnt = 0;
        		Ex.core.pclose(this, false);
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	if (this.isError)
        	{
        		Ex.core.errorCnt = 0;
        		Ex.core.pclose(this, true);
        	}
        	else
        	{
        		Ex.core.errorCnt = 0;
        		Ex.core.pclose(this, false);
        	}
        };

        this.comMsgConfirm_onkeyup = function(obj,e)
        {
        	if( e.keycode == 27 )	// esc
        	{
        		//trace("this.comMsgConfirm_onkeyup()");
        		e.stopPropagation();
        		Ex.core.pclose(this);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.comMsgConfirm_onkeyup,this);
            this.divBg.form.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divBg.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divBg.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("comMsgConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
