(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("JasperReportViewerPop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divViewer","20","20",null,null,"20","80",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new WebView("wevReport","0","0",null,null,"0","0",null,null,null,null,this.divViewer.form);
            obj.set_taborder("0");
            this.divViewer.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divViewer.form
            obj = new Layout("default","",0,0,this.divViewer.form,function(p){});
            this.divViewer.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBottom.form.divSearchArea.form.edtSearchStr","value","dsCond","SEARCH_STR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBottom.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBottom.form.divSearchArea.form.edtDeptNm","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("JasperReportViewerPop.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ comJasperReportViewerPop
        * 화면(명)	︰ jasperReport Viewer Popup
        * 메뉴(경로)	︰
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.01.13
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2025.01.13	WEMB		최초작성
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
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();		// 컴포넌트 초기화
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.getOwnerFrame().set_titletext("JasperReports Viewer");

        	trace("this.getOwnerFrame() : ", this.getOwnerFrame())
        	if( Ex.isEmpty(this.getOwnerFrame().pFileNm) )
        	{
        		var param = {id : "ERROR", msg : "출력할 보고서 파일명이 지정되지 않았습니다."};
        		Ex.core.error(this, param);
        		return;
        	}
        	else
        	{
        		if(this.getOwnerFrame().pDsParam == "[object Dataset]")
        		{
        			this.dsParam.loadXML(this.getOwnerFrame().pDsParam.saveXML());
        		}
        		else
        		{
        			var param = {id : "ERROR", msg : "파라미터 [DATASET]이 올바르지 않습니다."};
        			Ex.core.error(this, param);
        			return;
        		}
        		Ex.util.callJasperReport(this, this.divViewer.form.wevReport, this.getOwnerFrame().pDbConn, this.getOwnerFrame().pFileNm, this.dsParam);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("JasperReportViewerPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
