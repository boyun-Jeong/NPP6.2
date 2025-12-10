(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frTop_D01");
            this.set_titletext("언어선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLangCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdLangCd","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("mcbo_grd_WF_normal");
            obj.set_binddataset("dsLangCd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"bind:ITM_VAL_1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:CMM_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("frTop_D01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frTop_D01
        * 화면(명)		︰ 언어선택 div
        * 메뉴(경로)	︰ Frame
        * 화면 설명	︰ frTop 언어선택 Div
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
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
        this.curLangCd;


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
        	// 언어코드 조회
        	var oParam = {
        		upCmmCd : ['LANG_CD']
        		,codeDiv: ['CMM_CD']
        		,optStr	: ['']
        		,useYn	: ['Y']
        		,filter	: ['']
        		,objDs	: [this.dsLangCd]
        	}
        	Ex.util.getCmmCode(oParam);

        	// defualt icon url setting
        	for(var i = 0; i < this.dsLangCd.rowcount; i++) {
        		if( !Ex.isEmpty(this.dsLangCd.getColumn(i, 'ITM_VAL_1')) )
        			continue;
        		this.dsLangCd.setColumn(i, 'ITM_VAL_1', "url('theme://SPP_IMAGE_SET/TPF/btn_TPF_lang_ETC.png')");

        	}

        	// 현재 언어로 rowposition setting
        	this.curLangCd = Ex.isNvl(Ex.util.getSession('gvSelLangCd'), 'KR');
        	var rowpos = this.dsLangCd.findRow('CMM_CD', this.curLangCd);
        	if( rowpos >= 0 ) {
        		this.dsLangCd.set_rowposition(rowpos);
        	}
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
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "setScSelLangCd" :
        			var objApp = nexacro.getApplication();

        			// session object 재생성
        			var langCd = this.dsLangCd.getColumn(this.dsLangCd.rowposition, 'CMM_CD');
        			objApp.gdsSession.setColumn(0, "SEL_LANG_CD", langCd);
        			var o = Ex.util.makeSessionObject(objApp.gdsSession);
        			Ex.util.setSession(o);

        			// home으로
        			document.location.href = "/";
        			break;
        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.grdLangCd_oncellclick = function(obj,e)
        {
        	var langCd = this.dsLangCd.getColumn(this.dsLangCd.rowposition, 'CMM_CD');
        	// change current language
        	if( this.curLangCd == langCd )
        		this.parent.closePopup();
        	else {
        		var sTranId = "setScSelLangCd";		// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "setScSelLangCd";	// 서비스명
        		var sInDs = "";						// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "";					// 서버에서 수신할 데이타셋
        		var sArg = "selLangCd='" + langCd + "'";						// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdLangCd.addEventHandler("oncellclick",this.grdLangCd_oncellclick,this);
        };
        this.loadIncludeScript("frTop_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
