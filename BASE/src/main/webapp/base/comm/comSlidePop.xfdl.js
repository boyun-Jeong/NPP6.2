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
                this._setFormPosition(1500,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_ASSET_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSlide","440","10","800","730",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid black");
            obj.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this.divSlide.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.divSlide.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divSlide.form.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divSlide.form.divBottom.addChild(obj.name, obj);

            obj = new Div("divWebEditor","20","20",null,null,"20","divBottom:20",null,null,null,null,this.divSlide.form);
            obj.set_taborder("0");
            obj.set_url("comm::comWebEditor.xfdl");
            this.divSlide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSlide.form.divBottom.form
            obj = new Layout("default","",0,0,this.divSlide.form.divBottom.form,function(p){});
            this.divSlide.form.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSlide.form.divWebEditor
            obj = new Layout("default","",0,0,this.divSlide.form.divWebEditor.form,function(p){});
            this.divSlide.form.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSlide.form
            obj = new Layout("default","",0,0,this.divSlide.form,function(p){});
            this.divSlide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1500,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.registerScript("comSlidePop.xfdl", function() {
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
        	this.scrollbartype = 'none';

        	// web editor init
        	this.divSlide.form.divWebEditor.form.initCreate(true);

        	this.callScope = this.getOwnerFrame().pScope;
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

        	if( Ex.isEmpty(this.curSlide) )
        	{
        		//trace('fnPlaySlide :: 재생할 슬라이드가 없습니다.');
        		Ex.core.pclose(this);
        		return;
        	}

        	// slide 위치 초기화
        	var nLeft = (this.getOwnerFrame().getOffsetWidth() - this.divSlide.getOffsetWidth() ) / 2;
        	var nTop = this.getOwnerFrame().getOffsetHeight();
        	this.divSlide.set_left(nLeft);
        	this.divSlide.set_top(nTop);
        	this.divSlide.set_visible(true);

        	// animation init
        	if( Ex.isEmpty(this.aniObj) )
        	{
        		this.aniObj = new nexacro.Animation("aniSlide", this);
        		this.aniObj.set_loopcount(1);			// 타이머 대신 사용
        		this.aniObj.set_loop(false);			// loopcount 숫자만큼 반복
        		this.aniObj.set_direction("normal");
        		this.aniObj.set_duration(2000);
        		this.aniObj.addEventHandler("oncomplete", this.__aniOnComplete, this);
        		this.addChild("aniSlide", this.aniObj);
        	}

        	// slide message setting
        	this.divSlide.form.divWebEditor.form.setContent(this.curSlide);

        	// animation target
        	this.aniObj.addTarget('slideAnimation', this.divSlide, "top:[100]");	// duration 동안 배열값 step

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
         			this.aniObj.set_duration(3000);
         			this.aniObj.addEventHandler("oncomplete", this.__aniOnComplete, this);
         			this.addChild("aniSlideReverse", this.aniObj);

         			// animation target
         			this.aniObj.addTarget('slideAnimation', this.divSlide, "top:[" + this.getOwnerFrame().getOffsetHeight() + "]");	// duration 동안 배열값 step

        			// play
        			this.aniObj.play();
        			break;

        		case "aniSlideReverse" :
        			// reverse animation 삭제
        			var objAniItem  = obj.removeTarget("slideAnimation");
          			this.removeChild('aniSlideReverse');
        			objAniItem.destroy();
          			obj.destroy();
        			this.aniObj = null;

        			this.fnPlaySlide();
        			break;
        	}
        }

        this.fnDeleteAniObj = function()
        {
        	if( this.aniObj )
        	{
        		this.divSlide.set_visible(false);

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
        	switch(obj.name)
        	{
        		case "btnClose" :			// 닫기
        			this.fnDeleteAniObj();
        			if( this.callScope._commArrSlide.length >= 1 ) {
        				this.fnPlaySlide();
        			}
        			else {
        				Ex.core.pclose(this);
        			}
        			break;
        	}
        }

        this.form_onbeforeclose = function(obj,e)
        {
        	// animation 삭제
        	this.fnDeleteAniObj();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divSlide.form.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("comSlidePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
