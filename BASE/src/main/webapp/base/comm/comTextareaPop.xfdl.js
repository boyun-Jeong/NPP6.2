(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comTextareaPop");
            this.set_titletext("TexaArea 확장 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,469);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divContents","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20","147","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridTitle");
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

            obj = new TextArea("txaMsg","20","stcBackMid1:0",null,null,"20","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_cssclass("txa_WF_normal");
            obj.set_acceptstab("true");
            this.divContents.addChild(obj.name, obj);

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
            obj = new Layout("default","",600,469,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comTextareaPop.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ comTextareaPop
        * 화면(명)	︰ TexaArea 확장 팝업
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.03.15
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        2024.01.30		 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        /* param 변수
        pBtnConfUseYn	//적용버튼 사용유무[STRING(Y/N)]
        isEss			//내용필수여부[boolean]
        subTitle		//상단 TEXTAREA 위의 제목 TEXT[STRING]
        pMsg			//내용 TEXT[STRING]
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

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
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.rtnVal = this.divContents.form.txaMsg.value;
        			Ex.core.pclose(this, this.rtnVal);
        			break;

        		case "pAlertEssI" :
        		case "pAlertLengthI" :
        			this.divContents.form.txaMsg.setFocus();
        			break;

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	if( Ex.isEmpty(this.getOwnerFrame().pIsEdit) )	this.getOwnerFrame().pIsEdit = true;

        	if(!this.getOwnerFrame().pIsEdit)	this.divContents.form.txaMsg.set_readonly(true);

        	if( Ex.isEmpty(this.getOwnerFrame().isEss) ) this.getOwnerFrame().isEss = false;

        	this.divContents.form.staTitle.set_text(this.getOwnerFrame().subTitle);
        	if(this.getOwnerFrame().subTitle == '사용자 테스트 참고사항')
        	{
        	 this.divContents.form.txaMsg.set_displaynulltext("릴리스 및 이행후 검토 단계에서 <개발 및 코드 리뷰>를 입력 해주세요.");
        	}
        	var objStaticSize = nexacro.getTextSize(this.getOwnerFrame().subTitle, this.divContents.form.staTitle._getCurrentStyleInheritValue("font"));
        	this.divContents.form.staTitle.set_width(parseInt(objStaticSize.nx) + 15);

        	//브라우저 spellcheck 기능헤제
        	var eleTxa = document.getElementById(this.divContents.form.txaMsg.getElement().handle.id);
        	eleTxa.setAttribute("spellcheck", "false");

        	this.divContents.form.txaMsg.set_value(this.getOwnerFrame().pMsg);

        	if( Ex.isEmpty(this.getOwnerFrame().isHeightChange) || this.getOwnerFrame().isHeightChange)
        	{
        		var minHeight = 65;

        		var oFHeight = this.getOwnerFrame().height;						//팝업 프레임 높이
        		var orgTextH = this.divContents.form.txaMsg.getOffsetHeight();	//Textarea 원본 높이
        		var orgTextOB = this.divContents.form.txaMsg.getOffsetBottom();	//Textarea 원본 Bottom

        		//trace("this.getOwnerFrame().pBtnConfUseYn ::: " + this.getOwnerFrame().pBtnConfUseYn);

        		this.divContents.form.txaMsg.set_height(minHeight);				//Textarea MinSize로 변경
        		var textOB = this.divContents.form.txaMsg.getOffsetBottom();	//Textarea 변경 후 Bottom
        		var vScroll = this.divContents.form.txaMsg.vscrollbar.max;		//변경 후 세로 스크롤의 크기

        		var textHStep = orgTextOB - textOB;

        		//trace("orgTextOB : " + orgTextOB + " textOB : " + textOB + " vScroll : " + vScroll);	//290

        		var confH;	//팝업 프레임 적용할 높이

        		if(vScroll > 0)
        		{
        			if(vScroll < (orgTextOB - textOB))
        			{
        				confH = oFHeight - (orgTextOB - textOB) + vScroll;
        			}
        			else
        			{
        				confH = oFHeight;
        			}
        		}
        		else
        		{
        			confH = oFHeight - (orgTextOB - textOB);
        		}

        		this.divContents.form.txaMsg.set_bottom(0);
        		this.getOwnerFrame().set_height(confH);

        		var nTop = parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(this.getOwnerFrame().height / 2) );
        		this.getOwnerFrame().set_top(nTop);
        	}

        	if(this.getOwnerFrame().pBtnConfUseYn == "Y")
        	{
        		if( !Ex.isEmpty(this.getOwnerFrame().pBtnConfText) )
        		{
        			this.divBtnBottom.form.btnConf.set_text(this.getOwnerFrame().pBtnConfText);
        		}
        		this.divBtnBottom.form.btnConf.set_visible(true);
        		if(this.getOwnerFrame().subTitle != '사용자 테스트 참고사항')
        		{
        		 this.divContents.form.txaMsg.setFocus();
        		}

        		return;
        	}
        	else
        	{
        		this.divContents.form.txaMsg.set_readonly(true);
        		this.divBtnBottom.form.btnClose.setFocus();
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
        		case "btnConf" :	//적용
        			if( !Ex.isEmpty(this.getOwnerFrame().pValLenCheck) )
        			{
        				var validAttrArr = this.getOwnerFrame().pValLenCheck.split(":");
        				var chkAttr = validAttrArr[0];	//validation Check이름(NULL, MIN, MAX, MIN_LEN, MAX_LEN 등)

        				trace("validAttrArr.length : " + validAttrArr.length + " chkAttr : " + chkAttr);

        				var charSet = "utf16";
        				if(chkAttr == "MIN_LEN_ASC" || chkAttr == "MAX_LEN_ASC") charSet = "ascii";
        				if(chkAttr == "MIN_LEN_UTF8" || chkAttr == "MAX_LEN_UTF8") charSet = "utf8";

        				if(!Ex.isEmpty(this.divContents.form.txaMsg.value) )
        				{
        					if(validAttrArr.length == 2)
        					{
        						var chkVal = validAttrArr[1];	//validation에 사용되는 기준값

        						trace("charSet : " + charSet + " Ex.util.getLength(this.divContents.form.txaMsg.value, charSet) : " + Ex.util.getLength(this.divContents.form.txaMsg.value, charSet));
        						trace("nexacro.toNumber(chkVal) : " + nexacro.toNumber(chkVal));

        						if( Ex.util.getLength(this.divContents.form.txaMsg.value, charSet) > nexacro.toNumber(chkVal))
        						{
        							var msgStr = Ex.core.msg(11007);
        							msgStr = Ex.core.msgMapping(msgStr, ["입력항목", chkVal]);

        							var param = {
        								  id	: "pAlertLengthI"			//fnMsgAfter에서 식별자로 사용되는 ID
        								, msg	: msgStr	//메시지 내용
        								, arrparam : []					//메시지의 변수에 들어갈 실제값
        								, msgtype : "I"					//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        							};
        							Ex.core.alert(this, param);
        							return;
        						}
        					}
        				}
        			}

        			if( this.getOwnerFrame().isEss )
        			{
        				if( Ex.isEmpty(this.divContents.form.txaMsg.value) )
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

        			if( Ex.isEmpty(this.getOwnerFrame().pIsValueChgSaveChk) )	this.getOwnerFrame().pIsValueChgSaveChk = true;

        			if(this.getOwnerFrame().pIsValueChgSaveChk)
        			{
        				if(this.getOwnerFrame().pMsg != this.divContents.form.txaMsg.value)
        				{
        					var param = {
        						  id : "saveConfirm"
        						, msg : this.divBtnBottom.form.btnConf.text + "하시겠습니까?"
        						, arrparam : []
        						, msgtype : "I"
        					};
        					Ex.core.confirm(this, param);
        				}
        				else
        				{
        					Ex.core.pclose(this, "NO_CHANGE");
        				}
        			}
        			else
        			{
        				var param = {
        					  id : "saveConfirm"
        					, msg : this.divBtnBottom.form.btnConf.text + "하시겠습니까?"
        					, arrparam : []
        					, msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        			break;

        		case "btnClose" : 	// 닫기
        			Ex.core.pclose(this, "NO_CHANGE");
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.onBeforeClose,this);
            this.divBtnBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtnBottom.form.btnConf.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("comTextareaPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
