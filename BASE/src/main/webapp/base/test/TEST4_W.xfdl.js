(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0110_W");
            this.set_titletext("사용자관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">aa</Col><Col id=\"value\">21.3</Col></Row><Row><Col id=\"name\">bb</Col><Col id=\"value\">18.7</Col></Row><Row><Col id=\"name\">cc</Col><Col id=\"value\">20.2</Col></Row><Row><Col id=\"name\">dd</Col><Col id=\"value\">14.2</Col></Row><Row><Col id=\"name\">ee</Col><Col id=\"value\">25.6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divChart","20","20","400","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_border("1px solid black");
            obj.set_url("comm::comHighChartDiv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","530.00","23","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("drawchart");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","533","76",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","655.00","23","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("callscript");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web","20","387","400","350",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","780.00","23","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("setoption");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comHighChartDiv.xfdl");
        };
        
        // User Script
        this.registerScript("TEST4_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0110_W
        * 화면(명)		︰ 사용자 관리
        * 메뉴(경로)	︰ 관리자 > 사용자 > 사용자 관리
        * 화면 설명	︰ SPP 기본 사용자 관리 화면
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
        this.chartScript = '';
        this.document;

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
        	this.web.set_url(nexacro.getProjectPath() + "html/HighChartPage.html");
        	this.document = this.web.getProperty('document');
        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 변경 행 확인
        this.fnSearch = function()
        {

        }


        this.fnSave = function()
        {
        }


        // 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = 0; i < objDs.rowcount; i++)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        	switch (sSvcId)
        	{
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
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

        	}
        }

        this.edt00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.oParam.primaryKey1 = this.edt00.value;
        		this.oParam.nDispComment = this.edt00_00.value;
        		this.divComment.form.setConfig(this, this.oParam);
        	}

        };

        this.btn00_onclick = function(obj,e)
        {
        	var oParam = {
        		 colors		: []
        		,title		: ''
        		,subtitle	: ''
        		,objDs		: this.dsChart
        		,nameCol	: 'name'
        		,valueCol	: 'value'
        	};
        	//var chartScript = this.divChart.form.miraefnGetPie2DChart(oParam);
        	var chartScript = this.divChart.form.miraefnGetHalfDonutChart(oParam);
        	trace(chartScript);
        	this.divChart.form.drawChart(chartScript);
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.divChart.form.drawChart(this.txa00.value);
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	var script = this.document.callMethod('createElement', 'script');
        	trace('script :: ' + script);
        	var jsUrl = nexacro.getProjectPath() + "html/miraeAssetCustom/pie2DchartCustom.js";
        	script.callMethod('setAttribute', 'src', jsUrl);
        	trace('jsUrl :: ' + jsUrl);
        	this.document.getProperty('head').callMethod('appendChild', script);


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.txa00.addEventHandler("onchanged",this.txa00_onchanged,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
        };
        this.loadIncludeScript("TEST4_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
