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
            this.set_titletext("계약현황/검수현황");
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
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_YY\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_REQ_YY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnt1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnt2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcGrdTitle","10.00","10","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계약현황");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore2",null,"14","20","20","11",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);

            obj = new Static("stcGrdTitle00","50%","10","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검수현황");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore",null,"14","20","20","stcGrdTitle00:20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_hyperlink");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","120.00","55",null,null,"348","15",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_HOME_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData1");
            obj._setContents("<Formats><Format id=\"btnTab01\"><Columns><Column size=\"58\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"계약일자\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:CNTC_NM\"/><Cell col=\"1\" text=\"bind:CNTC_NO\" color=\"#043b72\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CNTC_DATE\" color=\"#043b72\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData00","460.00","55",null,null,"13","15",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("grd_HOME_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsData2");
            obj._setContents("<Formats><Format id=\"btnTab01\"><Columns><Column size=\"58\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\" cssclass=\"grdHCell_HOME_fCell\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"계약일자\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:CNTC_NM\"/><Cell col=\"1\" text=\"bind:CNTC_NO\" color=\"#043b72\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PAY_DATE\" color=\"#043b72\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00","344.00","55","102","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_00","344.00","102","102","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_02","344.00","149","102","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01","346.00","55","54","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("투자예산");
            obj.set_color("white");
            obj.set_font("12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00","346.00","102","54","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("운영예산");
            obj.set_color("white");
            obj.set_font("12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00_00","346.00","149","54","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("white");
            obj.set_font("12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("검수예정");
            this.addChild(obj.name, obj);

            obj = new Static("cnt5","403.00","58","39","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("cnt6","403.00","105","39","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("cnt7","403.00","152","39","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("0");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_03","7.00","55","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_00_00","7.00","102","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_02_00","7.00","149","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("divIco01_01_01_00_00_00_01_00","7.00","196","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_edge("url(\'theme://MIRAE_IMAGE_SET/HOME/main-circlechart02-num.png\')");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_01","8.00","55","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("투자(건)");
            obj.set_color("white");
            obj.set_font("12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00_01","8.00","102","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("운영(건)");
            obj.set_color("white");
            obj.set_font("12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00_00_01","8.00","149","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_color("white");
            obj.set_font("12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("변경(건)");
            this.addChild(obj.name, obj);

            obj = new Static("stcCntStep01_00_00_00_00","8.00","196","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("종료(건)");
            obj.set_color("white");
            obj.set_font("12px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("cnt1","65.00","58","39","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("0");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("cnt2","65.00","105","39","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("cnt3","65.00","152","39","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("0");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("cnt4","65.00","199","39","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_color("#3e3e46");
            obj.set_font("18px \'KoPubL\'");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divIco01_01_01_00_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00.form,function(p){});
            this.divIco01_01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_00.form,function(p){});
            this.divIco01_01_01_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_02.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_02.form,function(p){});
            this.divIco01_01_01_00_00_00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_03.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_03.form,function(p){});
            this.divIco01_01_01_00_00_00_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_00_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_00_00.form,function(p){});
            this.divIco01_01_01_00_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_02_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_02_00.form,function(p){});
            this.divIco01_01_01_00_00_00_02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIco01_01_01_00_00_00_01_00.form
            obj = new Layout("default","",0,0,this.divIco01_01_01_00_00_00_01_00.form,function(p){});
            this.divIco01_01_01_00_00_00_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",675,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("iv_D02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ iv_D00
        * 화면(명)		︰ 사업계획/계획현황
        * 메뉴(경로)	︰ -
        * 화면 설명	︰ Home Widget
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
        this.curBtn = this.btnTab01;


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
        	this.fnSearch01();
        	this.fnSearch02();
        	//this.fnSearch(this.curBtn);
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 최초 전체 조회
        this.fnSearch01 = function(obj)
        {
        	var sTranId = "select07";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJHOME/select07";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData1=dsData1 dsCnt1=dsCnt1";       	// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨

        // 	switch(obj.name)
        // 	{
        // 		case "btnTab01" :		// 기초사업
        // 			this.dsCond.setColumn(0, 'BUDGET_YY', Ex.util.today().substr(0, 4) );
        // 			sService = "IV0110W/select01";
        // 			break;
        //
        // 		case "btnTab02" :		// 본사업
        // 			this.dsCond.setColumn(0, 'BUDGET_YY', Ex.util.today().substr(0, 4) );
        // 			sService = "IV0210W/select01";
        // 			break;
        //
        // 		case "btnTab03" :		// 사업추진
        // 			this.dsCond.setColumn(0, 'BUDGET_YY', Ex.util.today().substr(0, 4) );
        // 			this.dsCond.setColumn(0, 'SCREEN_ID', 'IV0310W' );
        // 			sService = "IV0310W/select02";
        // 			break;
        //
        // 		case "btnTab04" :		// 계약요청
        // 			this.dsCond.setColumn(0, 'CNTR_REQ_YY', Ex.util.today().substr(0, 4) );
        // 			this.dsCond.setColumn(0, 'SCREEN_ID', '' );
        // 			sService = "IV0410W/select01";
        // 			break;
        //
        // 		case "btnTab05" :		// 계약체결
        // 			this.dsCond.setColumn(0, 'CNTR_REQ_YY', Ex.util.today().substr(0, 4) );
        // 			this.dsCond.setColumn(0, 'SCREEN_ID', 'IV0430W' );
        // 			sService = "IV0410W/select01";
        // 			break;
        // 	}

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearch02 = function(obj)
        {
        	var sTranId = "select08";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJHOME/select08";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsData2=dsData2 dsCnt2=dsCnt2";      	// 서버에서 수신할 데이타셋
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
        		case "select07" :
        			for(var i = 0 ; i < this.dsCnt1.rowcount; i++ ){
        			 var cnt = this.dsCnt1.getColumn(i,"CNT")
        			 var cntc_cd = this.dsCnt1.getColumn(i,"CNTC_CD")
        				if(cntc_cd =='10')this.cnt1.text = cnt;
        				if(cntc_cd =='20')this.cnt2.text = cnt;
        				if(cntc_cd =='30')this.cnt3.text = cnt;
        				if(cntc_cd =='40')this.cnt4.text = cnt;
        			}

        			break;
        		case "select08" :
        			for(var i = 0 ; i < this.dsCnt2.rowcount; i++ ){
        			 var cnt = this.dsCnt2.getColumn(i,"CNT")
        			 var cntc_cd = this.dsCnt2.getColumn(i,"CNTC_CD")
        				if(cntc_cd =='10')this.cnt5.text = cnt;
        				if(cntc_cd =='20')this.cnt6.text = cnt;
        				if(cntc_cd =='30')this.cnt7.text = cnt;

        			}

        			break;
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
        	if(!varValue)
        		return;

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
        		case "btnMore" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'CT0110_W');	break;	// 신규계약
        		case "btnMore2" :	rowpos = objApp.gdsMenu.findRow('SCREEN_ID', 'CT0140_W');	break;	// 계약검수
        	}

        	if( rowpos >= 0 )
        		Ex.core.openLink(this, objApp.gdsMenu.getColumn(rowpos, 'MENU_ID'), '');
        }




        this.fnBtnTabOnclick = function(obj,e)
        {
        	this.dsData.clearData();
        			//		기초사업		본사업			사업추진			계약요청		계약체결
        	var arrBtn = 	[this.btnTab01, this.btnTab02, this.btnTab03, this.btnTab04, this.btnTab05];

        	// set css
        	for(var i = 0; i < arrBtn.length; i++)
        		arrBtn[i].set_cssclass('btn_HOME_boardOff');
        	obj.set_cssclass('btn_HOME_boardOn');

        	// 마지막 선택 버튼 저장
        	this.curBtn = obj;

        	// grid
        	this.grdData.set_formatid(obj.name);

        	// search
        	this.fnSearch(obj);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnMore2.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnMore.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("iv_D02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
