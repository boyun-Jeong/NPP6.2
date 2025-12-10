(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0510_P02");
            this.set_titletext("스케쥴러 실행 이력 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommScheduleJobExecHt", this);
            obj._setContents("<ColumnInfo><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"14\"/><Column id=\"ING_PHASE\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"8\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REQ_USER_JBC_POSI\" type=\"STRING\" size=\"30\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SR_BRIEF\" type=\"STRING\" size=\"100\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"10\"/><Column id=\"WORK_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"WORK_USER_JBC_POSI\" type=\"STRING\" size=\"30\"/><Column id=\"WORK_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_CONT\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
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

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","100",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20.00","20",null,"80","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcTitle","20","43","70","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","stcTitle:0.00","43","461","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"28","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","210","0","30",null,null,"0",null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("10");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staJobNo","Static00:0","13","70","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("JOB번호");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edJobNo","staJobNo:0","13",null,"24","Static00_00:0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputfilter("space,dot,comma,sign,symbol,alpha");
            obj.set_inputtype("number");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcSearchDate","edJobNo:30","13","71","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("실행일자");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("true");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calStrDate","stcSearchDate:0","13","110","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_validationGroup("input01");
            obj.set_validation("실행일자(FROM);NULL");
            obj.set_text("    -  -   ");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("st00","calStrDate:0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","st00:0","13","110","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_validation("실행일자(TO);NULL");
            obj.set_validationGroup("input01");
            obj.set_text("    -  -  ");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20.00","120","208","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("스케쥴러 실행 이력 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdFommScheduleJobExecHt","20.00","staUserInfo:10",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommScheduleJobExecHt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"250\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"JOB번호\"/><Cell col=\"2\" text=\"이력번호\"/><Cell col=\"3\" text=\"실행일시\"/><Cell col=\"4\" text=\"전송타입\"/><Cell col=\"5\" text=\"실행구분\"/><Cell col=\"6\" text=\"제목\"/><Cell col=\"7\" text=\"예외 메시지\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:JOB_NO\"/><Cell col=\"2\" text=\"bind:HIST_NO\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"4\" text=\"bind:SEND_TYPE_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EXEC_GUBUN_NM\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:EXCEPTION_MSG\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","staUserInfo:5.00","120","35","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommScheduleJobExecHt");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,660,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("recUserNm","txRecUser","value","dtSrReqInfo","recUserNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtPreConfUser00","value","dsSrBaseInfo","PRE_CONF_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divSearchArea.form.calStrDate","value","dsCond","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContent.form.divSearchArea.form.calEndDate","value","dsCond","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divSearchArea.form.edJobNo","value","dsCond","JOB_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.edtDeptNm","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0510_P02.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		: FOMM0510_P02
        * 화면(명)		: 스케쥴러JOB 실행 이력 조회
        * 메뉴(경로)	:
        * 화면 설명	:
        * 작성자		:
        * 작성일		:
        * 수정이력		:
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.06.25 	 WEMB			최초작성
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

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	if(!Ex.util.checkValidate(this, "input01")) return;

        	var jobNo = this.dsCond.getColumn(0, "JOB_NO");
        	var days = Ex.util.getDiffDay(this.dsCond.getColumn(0, "START_DATE"), this.dsCond.getColumn(0, "END_DATE"));
        	var dayNm	= "30일";
        	var chkDays = 30;
        	//alert("days==========>" + days);

        	if(days < 0)
        	{
        		var attrNm = this.divContent.form.divSearchArea.form.stcSearchDate.text;

        		var param = {
        			  id	: "wrongDaysAlertI"									//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: attrNm + " 기간 범위가 올바르지 않습니다. "	//메시지 내용
        			, arrparam : [""]											//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"												//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	if( Ex.isEmpty(jobNo) )
        	{
        		dayNm	= "일주일"
        		chkDays = 7;
        	}

        	if(days > chkDays)
        	{
        		var param = {
        			  id	: "overDaysAlertI"									//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "조회 범위는 " + dayNm + "까지만 가능합니다."	//메시지 내용
        			, arrparam : [""]											//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"												//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	var sTranId = "select";         								// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0510P/select02";							// 서비스명
            var sInDs = "dsCond=dsCond";            						// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommScheduleJobExecHt=dsFommScheduleJobExecHt"; // 서버에서 수신할 데이타셋
            var sArg = "";                   								// 서버 @ParamVariable 인자와 맵핑됨
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

        	switch (sSvcId)
        	{
        		case "select" :
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if(Ex.isEmpty(varValue))	return;

        	switch(pID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	switch(mID)
        	{
        		case "wrongDaysAlertI" :
        		case "overDaysAlertI" :
        			this.divContent.form.divSearchArea.form.calStrDate.setFocus();
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	var pJobNo = '' + this.getOwnerFrame().pJobNo||'';
        	//alert("pJobNo====> " + pJobNo);
        	var fromDt;

        	if( !Ex.isEmpty(pJobNo) )
        	{
        		this.dsCond.setColumn(0, "JOB_NO", pJobNo);
        		fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -30), "yyyyMMdd");
        	}
        	else
        	{
        		fromDt = Ex.util.getMaskFormatString(Ex.util.addDate(Ex.util.strToDate(Ex.util.today()), -7), "yyyyMMdd");
        	}
        	this.dsCond.setColumn(0, "START_DATE",	fromDt);
        	this.dsCond.setColumn(0, "END_DATE",	Ex.util.today());
        	this.fnSearch();
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :
        			this.fnSearch();
        			break;

        		case "btnClose" :
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.fnCommOnkeyup = function(obj,e)
        {
        	if(e.keycode == '13')	this.fnSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edtDeptNm.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.edJobNo.addEventHandler("onkeyup",this.fnCommOnkeyup,this);
            this.divContent.form.divSearchArea.form.calStrDate.addEventHandler("onkeydown",this.Common_onkeydown,this);
            this.divContent.form.divSearchArea.form.calEndDate.addEventHandler("onkeydown",this.Common_onkeydown,this);
        };
        this.loadIncludeScript("FOMM0510_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
