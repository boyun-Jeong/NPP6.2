(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("슬라이드 알림");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_background("transparent");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,52);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_ASSET_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcSlide","0","6",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_usedecorate("true");
            obj.set_background("#f8fdff");
            obj.set_borderRadius("8px");
            obj.set_color("black");
            obj.set_font("bold 16px \'KoPubL\'");
            obj.set_padding("10px 10px 0px 10px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_border("1px solid #c4c8d7");
            obj.set_text("adsfsdaf");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",740,52,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comSlideDiv.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ comSlidePop
        * 화면(명)	︰ 슬라이드 알림
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ 슬라이드 알림
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description

        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.callScope;		// 호출 scope
        this.curSlide;		// 현재 slide
        this.aniObj;	// 슬라이드 처리할 Animation 객체
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        }

        this.fnInitSlide = function(scope)
        {
        	this.scrollbartype = 'none';

        	this.callScope = scope;
        	if( Ex.isEmpty(this.callScope) )
        	{
        		//trace('		comSlidePop >> fnInit >> callScope null !!!');
        		return;
        	}
        	this.fnPlaySlide();
        }

        // 애니메이션 등록 & play
        this.fnPlaySlide = function()
        {
        	this.curSlide = this.callScope._commArrSlide.shift();
        	//trace('fnPlaySlide >> 슬라이드를 실행합니다. 잔여 슬라이드 :: ' + this.callScope._commArrSlide.length);

        	// slide 위치 초기화
        	var nTop = 0 - this.stcSlide.getOffsetHeight() - 5;
        	this.stcSlide.set_top(nTop);

        	if( Ex.isEmpty(this.curSlide) )
        	{
        		//trace('fnPlaySlide :: 재생할 슬라이드가 없습니다.');
        		this.stcSlide.set_visible(false);
        		return;
        	}
        	this.stcSlide.set_visible(true);

        	// animation init
        	if( Ex.isEmpty(this.aniObj) )
        	{
        		this.aniObj = new nexacro.Animation("aniSlide", this);
        		this.aniObj.set_loopcount(1);			// 타이머 대신 사용
        		this.aniObj.set_loop(false);			// loopcount 숫자만큼 반복
        		this.aniObj.set_direction("normal");
        		this.aniObj.set_duration(1000);
        		this.aniObj.addEventHandler("oncomplete", this.__aniOnComplete, this);
        		this.addChild("aniSlide", this.aniObj);
        	}

        	// slide message setting
        	this.stcSlide.set_text(this.curSlide);
        	//this.stcSlide.set_tooltiptext(this.curSlide);

        	// animation target
        	this.aniObj.addTarget('slideAnimation', this.stcSlide, "top:[6]");	// duration 동안 배열값 step

        	// play
        	this.aniObj.play();
        }

        // 애니메이션 종료
        this.__aniOnComplete = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "aniSlide" :
        			// normal animation 삭제
        			var objAniItem  = obj.removeTarget("slideAnimation");
          			this.removeChild('aniSlide');
        			objAniItem.destroy();
          			obj.destroy();
        			this.aniObj = null;

        			// reverse animation
         			this.aniObj = new nexacro.Animation("aniSlideReverse", this);
         			this.aniObj.set_loopcount(1);			// 타이머 대신 사용
         			this.aniObj.set_loop(false);			// loopcount 숫자만큼 반복
         			this.aniObj.set_direction("normal");
        			this.aniObj.delay = 10000;
         			this.aniObj.set_duration(1000);
         			this.aniObj.addEventHandler("oncomplete", this.__aniOnComplete, this);
         			this.addChild("aniSlideReverse", this.aniObj);

         			// animation target
         			this.aniObj.addTarget('slideAnimation', this.stcSlide, "top:[" + (0 - this.stcSlide.getOffsetHeight() - 10) + "]");	// duration 동안 배열값 step

        			// play
        			this.aniObj.play();
        			break;

        		case "aniSlideReverse" :
        			// reverse animation 삭제
        // 			var objAniItem  = obj.removeTarget("slideAnimation");
        //   			this.removeChild('aniSlideReverse');
        // 			objAniItem.destroy();
        //   			obj.destroy();
        // 			this.aniObj = null;
        //
        // 			this.fnPlaySlide();

        			this.fnDeleteAniObj();
        			if( this.callScope._commArrSlide.length >= 1 )
        			{
        				this.fnPlaySlide();
        			}
        			else
        			{
        				var comp = this.callScope.components['__divSlide'];
        				this.callScope.removeChild(comp.id);
        				comp.destroy();
        			}
        			break;
        	}
        }

        this.fnDeleteAniObj = function()
        {
        	if( this.aniObj )
        	{
        		this.stcSlide.set_visible(false);

        		this.aniObj.stop();
        		var objAniItem  = this.aniObj.removeTarget("slideAnimation");
        		this.removeChild(this.aniObj.id);
        		objAniItem.destroy();
        		this.aniObj.destroy();
        		this.aniObj = null;
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
        	switch(obj.name){}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
        };
        this.loadIncludeScript("comSlideDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
