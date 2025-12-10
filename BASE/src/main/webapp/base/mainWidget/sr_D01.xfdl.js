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
            this.set_titletext("IT작업신청/IT작업예정");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.set_font("normal 24pt/normal \"PretendardR\"");
            this.set_color("white");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(675,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PJT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart1", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GBN\"/><Col id=\"CNT\">4</Col></Row><Row><Col id=\"GBN\"/><Col id=\"CNT\">2</Col></Row><Row><Col id=\"GBN\"/><Col id=\"CNT\">1</Col></Row><Row><Col id=\"GBN\"/><Col id=\"CNT\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart2", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GBN\"/><Col id=\"CNT\">2</Col></Row><Row><Col id=\"GBN\"/><Col id=\"CNT\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divChart","113.00","25","247",null,null,"-20",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_async("true");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Div("divChart2","462.00","30",null,null,"0","-5",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_url("comm::comHighChartDiv.xfdl");
            obj.set_async("true");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle","10","10","185","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("작업예정현황");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50%","10","1",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_TPF_line");
            obj.set_background("url(\'theme://MIRAE_IMAGE_SET/HOME/main-linedashed.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00","Static00:10","10","185","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작업신청현황");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00","12.00","55","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart01-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00","349.00","55","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_01","12.00","divIco01_01_01_00_00:5","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart01-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_04","12.00","160","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart01-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_02","12.00","divIco01_01_01_00_00_04:5","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart01-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_03","12.00","divIco01_01_01_00_00_01:5","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart01-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_00","349.00","divIco01_01_01_00_00_00:14","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_02","349.00","divIco01_01_01_00_00_00_00:14","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_01","349.00","divIco01_01_01_00_00_00_02:14","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01","347.00","55","65","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("서버/DB/백업");
            obj.set_color("white");
            obj.set_font("10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00","347.00","102","65","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("보안/NW/그룹웨어");
            obj.set_color("white");
            obj.set_font("10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00_00","347.00","149","65","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("white");
            obj.set_font("10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("원장/SW/외주직원");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00_00_00","347.00","196","65","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("기타");
            obj.set_color("white");
            obj.set_font("10px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_01","14.00","55","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Today");
            obj.set_color("#043b72");
            obj.set_font("13px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_01_00","7.00","90","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("+1");
            obj.set_color("#043b72");
            obj.set_font("13px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_01_00_00","7.00","125","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("+2");
            obj.set_color("#043b72");
            obj.set_font("13px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_01_00_00_00","7.00","160","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("+3");
            obj.set_color("#043b72");
            obj.set_font("13px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_01_00_00_00_00","7.00","195","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("+4");
            obj.set_color("#043b72");
            obj.set_font("13px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02","91.00","55","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("2");
            obj.set_color("white");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00","91.00","90","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("0");
            obj.set_color("white");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00_00","91.00","125","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("4");
            obj.set_color("white");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00_00_00","91.00","160","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("1");
            obj.set_color("white");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00_00_00_00","91.00","195","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("1");
            obj.set_color("white");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00_01","412.00","58","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("2");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00_00_01","412.00","105","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00_00_00_01","412.00","152","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("1");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_02_00_00_00_00_00","412.00","199","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("4");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"11","20","20","10",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart2
            obj = new Layout("default","",0,0,this.divChart2.form,function(p){});
            this.divChart2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00.form,function(p){});
            this.divIco01_01_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00.form,function(p){});
            this.divIco01_01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_01.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_01.form,function(p){});
            this.divIco01_01_01_00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_04.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_04.form,function(p){});
            this.divIco01_01_01_00_00_04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_02.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_02.form,function(p){});
            this.divIco01_01_01_00_00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_03.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_03.form,function(p){});
            this.divIco01_01_01_00_00_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_00.form,function(p){});
            this.divIco01_01_01_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_02.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_02.form,function(p){});
            this.divIco01_01_01_00_00_00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_01.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_01.form,function(p){});
            this.divIco01_01_01_00_00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",675,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","stcCntStep01_02_00_01","text","dsData","CHM_SUM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","stcCntStep01_02_00_00_01","text","dsData","CHM_SUM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","stcCntStep01_02_00_00_00_01","text","dsData","CHM_SUM3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","stcCntStep01_02_00_00_00_00_00","text","dsData","CHM_SUM4");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comHighChartDiv.xfdl");
        };
        
        // User Script
        this.registerScript("sr_D01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ frHome_D00
        * 화면(명)		︰ -
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ 대시보드 우측 내 정보 Div
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
        	this.fnCompInit();
        	this.fnDrawChart();
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 최초 전체 조회
        this.fnSearch = function()
        {
        	var sTranId = "select13";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJHOME/select13";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData=dsData";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
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
        	switch(pID)
        	{

        	}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)return;

        	switch(mID)
        	{

        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {

        }


        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['DAT_TYPE_CD']			// 조회할 상위코드
        		,codeDiv: ['CMM_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['ALL']			// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']				// 사용여부
        		,filter	: ['']				// filterStr
        		,objDs	: [this.dsDatTypeCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util;
        }



        this.fnDrawChart = function()
        {
        	var oParam = {
        		  title : ''
        		, colors: ['#6581F2', '#6ACCF1', '#7E88FE', '#424FD9']
        		, showLegned: false
        	};
        	var chartScript = this.divChart.form.hcfnGetPie2DChart(oParam, this.dsChart1, 'GBN', 'CNT');
        	this.divChart.form.drawChart(chartScript);



        	var oParam = {
        		  title : ''
        		, colors: ['#68CBF2', '#3469F5']

        	};
        	var chartScript = this.divChart2.form.hcfnGetPie2DChart(oParam, this.dsChart2, 'GBN', 'CNT');
        	this.divChart2.form.drawChart(chartScript);
        }



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	var rowpos = -1;

        	switch(obj.name)
        	{
        		case "btnMore" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SR0111_W');	break;	// IT작업신청
        		//case "btnMore2" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'SV0110_W');	break;	// 구성현황(운영)
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        }



        this.grdData_oncellclick = function(obj,e)
        {
        	if( e.cell == obj.getBindCellIndex('body', 'TITLE') ) {
        		var ds = obj.getBindDataset();
        		var PJT_ID 		= ds.getColumn(e.row, "PJT_ID");
        		var PJT_NAME	= ds.getColumn(e.row, "PJT_NAME");
        		var SUB_ID		= ds.getColumn(e.row, "SUB_ID");

        		Ex.core.popup(
        				this,					// <--- 팝업 실행 스코프
        				"actionItemPop",			// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        				"pj::PJ0510_P01.xfdl",	// <--- 팝업창 오픈 Url
        				{
        					title		: "Action Item 상세",
        					pPjtId		: PJT_ID,
        					pPjtNm  	: PJT_NAME,
        					pActItemCd	: SUB_ID,
        					pNew		: 'N'
        				},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        				"autosize"				// <--- width/height/modeless(프레임 처리 옵션)
        		);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stcCntStep01_02_00_01.addEventHandler("onclick",this.stcCntStep01_02_00_01_onclick,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("sr_D01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
