(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frTop_D02");
            this.set_titletext("관련시스템");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdLangCd","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_normal");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj.set_cursor("pointer");
            obj.set_useFilter("false");
            obj.set_useCopy("false");
            obj.set_useSort("false");
            obj.set_useContext("false");
            obj.set_useCheck("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"url(&apos;theme://SPP_IMAGE_SET/TPF/ico_TPF_hyperlink.png&apos;)\" border=\"1px solid #ced3e5,0px,1px solid #ced3e5,1px solid #ced3e5\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:CMM_CD_NM\" border=\"1px solid #ced3e5, 1px solid #ced3e5, 1px solid #ced3e5, 0px\" textAlign=\"left\" padding=\"0px\"/></Band></Format></Formats>");
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
        this.registerScript("frTop_D02.xfdl", function() {
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
        		upCmmCd : ['HYPERLINK_LIST_CD']
        		,codeDiv: ['BASIS_CD']
        		,optStr	: ['']
        		,useYn	: ['Y']
        		,filter	: ['']
        		,objDs	: [this.dsData]
        	}
        	Ex.util.getCmmCode(oParam);


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
        	var sUrl = this.dsData.getColumn(e.row, 'ITM_VAL_1');
        	if( Ex.isEmpty(sUrl) )	return;

        	var sUserId = Ex.util.getSession('gvUserId');

        	if(sUrl.indexOf('?') < 0)
        	{
        		sUrl += '?USER_ID=' + sUserId;
        	}

        	if(obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), "CMM_CD") == "01")	//RENOBIT
        	{
        		if(Ex.util.getSession('gvItDeptYn') == "Y")
        		{
        			system.execBrowser(sUrl);
        		}
        		else
        		{
        			var param = {
        				msg	: "해당 메뉴는 IT(개발자 포함) 전용 메뉴입니다."	//메시지 내용
        				, arrparam : []												//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"												//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        	else if(obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), "CMM_CD") == "03")	//TIM
        	{
        		if(Ex.util.getSession('gvItDeptYn') == "Y")
        		{
        			if(!sUserId.startsWith("e") && !sUserId.startsWith("P") && !sUserId.startsWith("5"))
        			{
        				system.execBrowser(sUrl);
        			}
        			else
        			{
        				var param = {
        					msg	: "해당 메뉴는 IT지원팀 전용 메뉴입니다."	//메시지 내용
        					, arrparam : []												//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"												//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}
        		else
        		{
        			var param = {
        				msg	: "해당 메뉴는 IT지원팀 전용 메뉴입니다."	//메시지 내용
        				, arrparam : []												//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"												//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdLangCd.addEventHandler("oncellclick",this.grdLangCd_oncellclick,this);
        };
        this.loadIncludeScript("frTop_D02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
