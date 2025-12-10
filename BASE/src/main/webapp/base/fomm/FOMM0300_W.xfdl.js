(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0300_W");
            this.set_titletext("작업 캘린더");
            this.getSetter("classname").set("MRP1720");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalData", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_SDT\" type=\"STRING\" size=\"8\"/><Column id=\"WORK_ALL_CNT\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"WORK_END_Y_CNT\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"WORK_END_N_CNT\" type=\"BIGDECIMAL\" size=\"39\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DT\" type=\"STRING\" size=\"8\"/><Column id=\"FULL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TODAY\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_DAY\" type=\"STRING\" size=\"8\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Radio("rdoGubun","20","30","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("2");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","20","64",null,"590","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("fomm::FOMM0300_D02.xfdl");
            obj.set_border("0px solid aqua");
            this.addChild(obj.name, obj);

            obj = new Div("divYearMonth","40.27%","10","354","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_DateChoice");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreMonth","0","0","30",null,null,"0",null,null,null,null,this.divYearMonth.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_btnPrev3");
            obj.set_text("");
            this.divYearMonth.addChild(obj.name, obj);

            obj = new Button("btnNextMonth",null,"0","30",null,"0","0",null,null,null,null,this.divYearMonth.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_btnNext3");
            this.divYearMonth.addChild(obj.name, obj);

            obj = new Static("stcYearMonth","29.10%","0","41.81%",null,null,"0",null,null,null,null,this.divYearMonth.form);
            obj.set_taborder("2");
            obj.set_cssclass("stc_WF_CalDate");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            this.divYearMonth.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","54",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"30","84","24","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_refresh");
            this.addChild(obj.name, obj);

            obj = new Static("stcRemain",null,"30","24","24","278",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("60");
            obj.set_cssclass("stc_WF_timer");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfo1",null,"30","85","24","stcRemain:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("남은 시간 (초)");
            this.addChild(obj.name, obj);

            obj = new Static("stcInfo3",null,"30","135","24","138",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("자동 새로고침 사용 안함");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUnuse",null,"30","13","24","btnSearch:20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("chk_WF_normal");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divYearMonth.form
            obj = new Layout("default","",0,0,this.divYearMonth.form,function(p){});
            this.divYearMonth.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","fomm::FOMM0300_D02.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FOMM0300_W.xfdl","lib::lib_Comm.xjs");
        this.registerScript("FOMM0300_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0300_W
        * 화면(명)		︰ 일정등록
        * 메뉴(경로)	︰ 관리자 > 나의업무(개인) > 일정등록
        * 화면 설명	︰ SPP FAQ 조회
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.12.12
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.12.12	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_Comm.xjs"); /*include "lib::lib_Comm.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.refreshSec = 60;	//타이미 초기 시간
        this.pdivObj;
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
        	this.fnCompInit();		// 컴포넌트 초기화

        	this.stcRemain.set_text(this.refreshSec);
        	this.pdivObj = this.initMonthCalendar("pdMonth", "MONTH", Ex.util.getMaskFormatString(Ex.util.strToDate(Ex.util.today()), "yyyyMM"));
        	//this.pdivObj.monthValue = Ex.util.getMaskFormatString(Ex.util.strToDate(Ex.util.today()), "yyyyMM");

        	//trace("this.pdivObj.monthValue : " + this.pdivObj.monthValue);
        	//this.dsCond.setColumn(0, "MONTH", Ex.util.today());

        	var evt = nexacro.SizeEventInfo;
        	evt.cx = this.divPage.getOffsetWidth();
        	evt.cy = this.divPage.getOffsetHeight();
        	this.divPage.form.divOnSize(this.divPage.form.divCalComp, evt);

        	this.fnSearch();		// 조회
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	this.killTimer(0);

        	//trace("this.divPage.form.divCalComp.divVisible ::: " + this.divPage.form.divCalComp.divVisible);
        	if(this.divPage.form.divCalComp.divVisible == "Y") this.fnResetDayComp(false);

        	this.dsCond.setColumn(0, "MONTH", this.pdivObj.monthValue);
        	this.dsCond.setColumn(0, "WORK_USER_ID", this.rdoGubun.value == "0" ? Ex.util.getSession('gvUserId') : "");

        	this.stcRemain.set_text(this.refreshSec);

        	if(this.chkUnuse.value == "N")	this.setTimer(0, 1000);

        	// transaction
        	var sTranId = "selectCalDate";                       			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0300W/select01";            			// 서비스명
            var sInDs = "dsCond=dsCond";                  				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMonthInfo=dsMonthInfo dsCalData=dsCalData"; // 서버에서 수신할 데이타셋
            var sArg = "";                   							// 서버 @ParamVariable 인자와 맵핑됨
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
        		case "select01" :
        			//Ex.core.toast(this, "10002");
        			this.divPage.form.divCalComp.divVisible = "Y";
        			var startDivIdx = this.dsMonthInfo.getColumn(0, "WEEK_CD");

        			for(var i=0; i<this.dsMonthInfo.rowcount; i++)
        			{
        				var divObj = this.divPage.form.divCalComp.form["div" + startDivIdx];
        				//trace("i=" + i + "divObj : " + divObj.id);
        				var divIdx = nexacro.toNumber(nexacro.replaceAll(divObj.id, "div", ""));

        				divObj.form.divBox.set_background("");

        				if(this.dsMonthInfo.getColumn(i, "WEEK_CD") == "1") divObj.form.divBox.form.stcDt.set_color("red");		//일요일
        				if(this.dsMonthInfo.getColumn(i, "WEEK_CD") == "7") divObj.form.divBox.form.stcDt.set_color("blue");	//토요일
        				divObj.form.divBox.form.stcDt.set_text(this.dsMonthInfo.getColumn(i, "DT"));
        				divObj.form.divBox.fullDt = this.dsMonthInfo.getColumn(i, "FULL_DT");
        				divObj.form.divBox.isToday = this.dsMonthInfo.getColumn(i, "IS_TODAY");

        				if(this.dsMonthInfo.getColumn(i, "IS_TODAY") == "Y") {
        					divObj.form.divBox.set_cssclass("div_WF_calTodayBg");
        				}
        				else {
        					divObj.form.divBox.set_cssclass("div_WF_calDayBg");
        				}

        				var fRow = this.dsCalData.findRow("WORK_SDT", this.dsMonthInfo.getColumn(i, "FULL_DT"));

        				if(fRow > -1)
        				{
        					divObj.form.divBox.form.stcAll.set_visible(true);
        					divObj.form.divBox.form.stcComp.set_visible(true);
        					divObj.form.divBox.form.stcNoComp.set_visible(true);
        					divObj.form.divBox.form.stcAllCnt.set_text(this.dsCalData.getColumn(fRow, "WORK_ALL_CNT") + " " + Ex.core.word("건"));
        					divObj.form.divBox.form.stcCompCnt.set_text(this.dsCalData.getColumn(fRow, "WORK_END_Y_CNT") + " " + Ex.core.word("건"));
        					divObj.form.divBox.form.stcNoCompCnt.set_text(this.dsCalData.getColumn(fRow, "WORK_END_N_CNT") + " " + Ex.core.word("건"));
        				}
        				startDivIdx++;
        			}

        			var rowArr = [];
        			for(var i=1; i<=42; i++)
        			{
        				var objComp = this.divPage.form.divCalComp.form["div" + i];

        				var divIdx = nexacro.toNumber(nexacro.replaceAll(objComp.id, "div", ""));
        				//trace("i=" + i + " divIdx : " + divIdx);

        				if(divIdx%7 == 0)
        				{
        					var isExist = false;
        					for(var j=divIdx-6; j<=divIdx; j++)
        					{
        						var divObj = this.divPage.form.divCalComp.form["div" + j];
        						if( !Ex.isEmpty(divObj.form.divBox.form.stcDt.text) )
        						{
        							isExist = true;
        							break;
        						}
        					}
        					if(isExist)
        					{
        						rowArr.push(divObj.height);
        					}
        					else
        					{
        						rowArr.push(0);
        					}

        					for(var j=divIdx-6; j<=divIdx; j++)
        					{
        						var divObj = this.divPage.form.divCalComp.form["div" + j];
        						divObj.set_visible(isExist);
        					}
        				}
        			}

        			var totHeight = 57;	//상단 요일 헤더 높이 기본 설정

        			//trace("rowArr.length : " + rowArr.length);

        			for(var i=0; i<rowArr.length; i++)
        			{
        				totHeight += nexacro.toNumber(rowArr[i]);
        			}
        			trace("totHeight ::: " + totHeight);
        			totHeight += 5 + 24;	//여백5 + 바닥 범례 높이(24) 추가
        			this.divPage.set_height(totHeight);
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
        		case "PJ1910_P01" :
        			if(varValue == "Y") this.fnSearch();
        			break;
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
        		case "searchConfirm" :
        			this.fnSearch01();
        			break;
        	}
        }

        this.monthCalendarCallBack = function(rtnObj, rtnValue)
        {
        	//trace("rtnObj.id : " + rtnObj.id + ", rtnValue : " + rtnValue);
        	rtnObj.monthValue = rtnValue;
        	this.divYearMonth.form.stcYearMonth.set_text(Ex.util.getMaskFormatString(Ex.util.strToDate(rtnValue + "01"), "yyyy-MM"));
        	this.fnSearch();
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// 공통코드 조회
        	this.fnGetCmmCd();
        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var aRow = this.dsGubun.addRow();
        	this.dsGubun.setColumn(aRow, "CODE", "1");
        	this.dsGubun.setColumn(aRow, "NAME", Ex.core.word("전체"));

        	aRow = this.dsGubun.addRow();
        	this.dsGubun.setColumn(aRow, "CODE", "0");
        	this.dsGubun.setColumn(aRow, "NAME", Ex.core.word("나의 작업"));

        	this.rdoGubun.set_value("0");
        }

        //달력 Page 전체 초기화
        this.fnResetDayComp = function(isVisible)
        {
        	if( Ex.isEmpty(isVisible) )	isVisible = false;
        	var divVisible = this.divPage.form.divCalComp.divVisible;

        	if( Ex.isEmpty(divVisible) ) divVisible = "N";

        	var isChg = false;

        	if( ( isVisible && this.divPage.form.divCalComp.divVisible == "N") ||
        		(!isVisible && this.divPage.form.divCalComp.divVisible == "Y") )
        	{
        		isChg = true;
        	}

        	//trace("isChg ::: " + isChg);

        	if(isChg)
        	{
        		for(var i=1; i<=42; i++)
        		{
        			var objComp = this.divPage.form.divCalComp.form["div" + i];

        			//trace("i=" + i + " objComp.id : " + objComp.id);
        			objComp.form.divBox.fullDt = "";
        			objComp.form.divBox.isToday = "N";
        			objComp.form.divBox.form.stcDt.set_color("");
        			objComp.form.divBox.form.stcDt.set_text("");
        			objComp.form.divBox.form.stcAll.set_visible(false);
        			objComp.form.divBox.form.stcAllCnt.set_text("");
        			objComp.form.divBox.form.stcComp.set_visible(false);
        			objComp.form.divBox.form.stcCompCnt.set_text("");
        			objComp.form.divBox.form.stcNoComp.set_visible(false);
        			objComp.form.divBox.form.stcNoCompCnt.set_text("");
        			objComp.form.divBox.set_cssclass("div_WF_calDayBg");
        		}
        		this.divPage.form.divCalComp.divVisible = (isVisible ? "Y" : "N");
        	}
        	//trace("this.divPage.form.divCalComp.divVisible : " + this.divPage.form.divCalComp.divVisible);
        }

        //날짜 영역 클릭시 기존 클릭되었던 바탕색 초기화
        this.fnDaySelect = function(day)
        {
        	for(var i=1; i<=42; i++)
        	{
        		var objComp = this.divPage.form.divCalComp.form["div" + i];
        		var dayVal = objComp.form.divBox.form.stcDt.text;

        		objComp.form.divBox.set_background("");
        		objComp.form.divBox.set_cssclass("div_WF_calDayBg");

        		var fRow = this.dsMonthInfo.findRow("DT", dayVal);

        		if(this.dsMonthInfo.getColumn(fRow, "IS_TODAY") == "Y")
        		{
        			objComp.form.divBox.set_cssclass("div_WF_calTodayBg");
        			if(day == dayVal)	objComp.form.divBox.set_background("aqua");
        		}
        		else
        		{
        			if(day == dayVal)	objComp.form.divBox.set_background("aqua");
        		}
        	}
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.id)
        	{
        		case 'btnSearch' :	// 조회
        			this.fnSearch();
        			break;

        		case "stcYearMonth" :
        			this.openMonthCalendar(this.pdivObj, obj);
        			break;
        		case "btnPreMonth" :
        		case "btnNextMonth" :
        			var dateVal = "";
        			if(obj.id == "btnPreMonth")			dateVal = Ex.util.addMonth(this.pdivObj.monthValue + "01", -1);
        			else if(obj.id == "btnNextMonth")	dateVal = Ex.util.addMonth(this.pdivObj.monthValue + "01", 1);
        			this.pdivObj.monthValue = dateVal.substr(0, 6);
        			//trace("this.pdivObj.monthValue : " + this.pdivObj.monthValue);
        			this.divYearMonth.form.stcYearMonth.set_text(Ex.util.getMaskFormatString(Ex.util.strToDate(this.pdivObj.monthValue + "01"), "yyyy-MM"));
        			this.fnSearch();
        			break;
        	}
        }

        this.chkOnChanged = function(obj,e)
        {
        	if(e.postvalue)
        	{
        		this.killTimer(0);
        		this.stcRemain.set_text(this.refreshSec);
        	}
        	else
        	{
        		this.setTimer(0, 1000);
        	}
        };

        //컬럼 변경 이벤트
        this.dsOnColumnChanged = function(obj,e)
        {
        	if(obj.id == "dsCond")
        	{
        		if(e.columnid == "MONTH")
        		{
        			this.divYearMonth.form.stcYearMonth.set_text(Ex.util.getMaskFormatString(Ex.util.strToDate(e.newvalue + "01"), "yyyy-MM"));
        		}
        	}
        };

        //자동조회 타이머 처리
        this.onTimer = function(obj,e)
        {
        	if(e.timerid == 0)
        	{
        		var remainSec = parseInt(this.stcRemain.text);

        		if(remainSec == 0)
        		{
        			remainSec = this.refreshSec;
         			this.fnSearch();
        		}
        		else
        		{
        			remainSec = remainSec - 1;
        		}

        		this.stcRemain.set_text(remainSec);
        	}
        };

        this.rdoOnItemChanged = function(obj,e)
        {
        	this.dsCond.setColumn(0, "WORK_USER_ID", e.postvalue == "0" ? Ex.util.getSession('gvUserId') : "");
        	this.fnSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.onTimer,this);
            this.rdoGubun.addEventHandler("onitemchanged",this.rdoOnItemChanged,this);
            this.divYearMonth.form.btnPreMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divYearMonth.form.btnNextMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divYearMonth.form.stcYearMonth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.chkUnuse.addEventHandler("onchanged",this.chkOnChanged,this);
            this.dsCond.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0300_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
