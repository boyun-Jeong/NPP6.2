(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0260_W");
            this.set_titletext("휴일관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TODAY\" type=\"STRING\" size=\"256\"/><Column id=\"HOLI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HOLI_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearCd", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthCd", this);
            obj._setContents("<ColumnInfo><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MONTH\">-전체-</Col></Row><Row><Col id=\"MONTH\">01</Col></Row><Row><Col id=\"MONTH\">02</Col></Row><Row><Col id=\"MONTH\">03</Col></Row><Row><Col id=\"MONTH\">04</Col></Row><Row><Col id=\"MONTH\">05</Col></Row><Row><Col id=\"MONTH\">06</Col></Row><Row><Col id=\"MONTH\">07</Col></Row><Row><Col id=\"MONTH\">08</Col></Row><Row><Col id=\"MONTH\">09</Col></Row><Row><Col id=\"MONTH\">10</Col></Row><Row><Col id=\"MONTH\">11</Col></Row><Row><Col id=\"MONTH\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","58",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"12","75","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"12","90","24","100",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Div("divChkAmStatCd","105","129","390","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_url("comm::comCheckboxDiv.xfdl");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("stcWrkNm","Static00:0","12","100","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboYear","stcWrkNm:0","12","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYearCd");
            obj.set_datacolumn("YYYY");
            obj.set_codecolumn("YYYY");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboMonth","cboYear:5","12","90","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsMonthCd");
            obj.set_datacolumn("MONTH");
            obj.set_codecolumn("MONTH");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBottomButton",null,null,"200","32","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_isChgLang("false");
            obj.set_isButtonGroup("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","46",null,"13","0",null,null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_isChgLang("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Grid("grdList","0","Static00:0",null,null,"0","45",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMonthInfo");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"800\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"행상태\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"요일\"/><Cell col=\"3\" text=\"휴일구분\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWFLAG\"/><Cell col=\"1\" text=\"bind:FULL_DT\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:HOLI_YN != 1 ? &quot;&quot; : &quot;grdBCell_WF_danger&quot;\"/><Cell col=\"2\" text=\"bind:WEEK_NM\" textAlign=\"center\" cssclass=\"expr:HOLI_YN != &quot;1&quot; ? &quot;&quot; : &quot;grdBCell_WF_danger&quot;\"/><Cell col=\"3\" text=\"bind:HOLI_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\" calendardateformat=\"yyyy-MM-dd\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"4\" text=\"bind:HOLI_NAME\" textAlign=\"left\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form.divChkAmStatCd
            obj = new Layout("default","",0,0,this.divSearchArea.form.divChkAmStatCd.form,function(p){});
            this.divSearchArea.form.divChkAmStatCd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottomButton.form
            obj = new Layout("default","",0,0,this.divBottomButton.form,function(p){});
            this.divBottomButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearchArea.form.calBeginDate","value","dsCond","START_WRK_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.calEndDate","value","dsCond","END_WRK_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearchArea.form.edtSvcId","value","dsCond","SVC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearchArea.form.edtHostNm","value","dsCond","EXEC_HSTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.edtNotiUserNm","value","dsCond","WRK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearchArea.form.edtNotiUserDeptNm","value","dsCond","WRK_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.edtAgencyUserId","value","dsCond","AGENCY_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.cboYear","value","dsCond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.cboMonth","value","dsCond","MONTH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comCheckboxDiv.xfdl");
        };
        
        // User Script
        this.registerScript("FOMM0260_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0260_W
        * 화면(명)		︰ 휴일관리
        * 메뉴(경로)		︰ 관리자 > 운영관리자 > 휴일관리
        * 화면 설명		︰ 휴일관리
        * 작성자			︰ WEMB
        * 작성일			︰ 2024.07.11
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.07.11 	 WEMB			최초작성
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
        	this.fnCompInit();		// component init
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	var today = Ex.util.today();
        	var tDate = new Date(Ex.util.strToDate(today));
        	var curYear = Ex.util.getMaskFormatString(tDate, "yyyy");
        	var curMonth = Ex.util.getMaskFormatString(tDate, "MM");

        	this.dsCond.setColumn(0, "YEAR", curYear);
        	this.dsCond.setColumn(0, "MONTH", curMonth);
        	this.dsCond.setColumn(0, "DT", this.dsCond.getColumn(0, "YEAR") + this.dsCond.getColumn(0, "MONTH"));
        }

        // 조회
        this.fnSearch = function()
        {
        	if( Ex.util.isUpdated(this.dsMain) )
        	{
        		var param = {
        						id : "pSearchConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        		Ex.core.confirm(this, param);
        		return;
        	}

        	if(!this.fnCheckValidate()) return;
        	this.fnSearch01();
        }

        this.fnSearch01 = function()
        {
        	if(this.dsCond.getColumn(0, "MONTH") == '-전체-')
        			this.dsCond.setColumn(0, "DT", "ALL");
        	else	this.dsCond.setColumn(0, "DT", this.dsCond.getColumn(0, "YEAR") + this.dsCond.getColumn(0, "MONTH"));

        	// transaction
        	var sTranId = "select01";                       			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0260W/select01";            			// 서비스명
            var sInDs = "dsCond=dsCond";                  				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMonthInfo=dsMonthInfo dsCalData=dsCalData"; // 서버에서 수신할 데이타셋
            var sArg = "";                   							// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 저장
        this.fnSave = function()
        {
        	// transaction
        	var sTranId = "save01";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0260W/save01";	// 서비스명
            var sInDs = "dsMonthInfo=dsMonthInfo:U dsCond=dsCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMonthInfo=dsMonthInfo";		// 서버에서 수신할 데이타셋
            var sArg = "";                   	//  서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 삭제
        this.fnDelete = function(objDs)
        {
        }

        this.fnYearCd = function()
        {
        	// transaction
        	var sTranId = "select02";                   // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0260W/select02";        // 서비스명
            var sInDs = "dsCond=dsCond";              	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsYearCd=dsYearCd"; 			//서버에서 수신할 데이타셋
            var sArg = "";                   			// 서버 @ParamVariable 인자와 맵핑됨
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
        			Ex.core.toast(this, "10002");
        			break;

        		case "save01" :
        			Ex.core.toast(this, "10004", null, {toastType:'S'});
        			break;
        	}
        }
        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	if( Ex.isEmpty(varValue) )	return;
        	//this.dsPopRtn.loadXML(varValue);
        	switch(pID){}
        }
        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "searchConfirm" :
        			this.fnSearch01();
        			break;

        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "saveDelete" :
        			this.fnDelete();
        			break;
        	}
        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출
        	this.grdList.displayRowType();

        	// 공통코드 조회
        	this.fnGetCmmCd();
        	this.fnYearCd();
        	this.fnSearchReset();
        	this.fnSearch();

        }

        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['']// 조회할 상위코드
        		,codeDiv: ['']// 조회할 코드의 업무구분
        		,optStr	: ['']// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['']// 사용여부
        		,filter	: ['']// filterStr
        		,objDs	: [''] 		// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }



        // 검색조건 유효성 검사
        this.fnCheckValidate = function()
        {
        	// component validation

        	var strValue1 = this.dsCond.getColumn(0,"START_WRK_DTTM");
        	var strValue2 = this.dsCond.getColumn(0,"END_WRK_DTTM");

        	if( strValue1 > strValue2 )
        	{
        		var param = {id : "pAlertDate", msg : "대체 기간을 확인해주세요."};
        		Ex.core.alert(this, param);
        		return false;
        	}

        	if( !Ex.util.checkValidate(this.divSearchArea, "fvValiCmp") )
        	{
        		return false;
        	}

        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :
        			this.fnSearch();
        			break;

        		case "btnDelete" :
        			var param = {
         					id : "saveDelete"
         				  , msg : "관리자를 삭제하시겠습니까?"
         				  , arrparam : ['']
         				  , msgtype : "I"
         			};
         			Ex.core.confirm(this, param);
        			break;

        		case "btnSave" :
        			var param = {
         					id : "saveConfirm"
         				  , msg : "10003"
         				  , arrparam : ['']
         				  , msgtype : "I"
         			};
         			Ex.core.confirm(this, param);
        			break;
        	}
        }

        this.divSearchArea_cboMonth_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divSearchArea.form.btnSearch.setFocus();
        		this.fnSearch();
        		obj.setFocus();
        	}
        };

        // 대체기간 :: 시작일이 종료일보다 크지 않도록 / 종료일이 시작일보다 작지 않도록
        this.fnDateOncloseup = function(obj,e)
        {
        	var sDate = this.dsAgency.getColumn(0, "AGENCY_SDT");
        	var eDate = this.dsAgency.getColumn(0, "AGENCY_EDT");

        	if( !Ex.isEmpty(sDate) && !Ex.isEmpty(eDate) )
        	{
        		if(sDate > eDate)
        		{

        			if(obj.id == 'calBeginDate')
        			{
        				//var oParam = {id : "alertSearchDateI", msg : "대체 기간 시작일은 종료일 이전 날짜여야 합니다.", arrparam : [], msgtype : "I"};
        				//Ex.core.alert(this, oParam);
        				//var preDate = Ex.util.addDate(Ex.util.today(), -120);
        				//var today = Ex.util.today();
        				//this.dsAgency.setColumn(0, "AGENCY_SDT", today);
        				this.dsAgency.setColumn(0, "AGENCY_EDT", sDate);
        			}
        			else if(obj.id == 'calEndDate')
        			{
        				var oParam = {id : "alertSearchDateI", msg : "종료일자가 시작일자보다 작을 수 없습니다.", arrparam : [], msgtype : "I"};
        				Ex.core.alert(this, oParam);
        				this.dsAgency.setColumn(0, "AGENCY_EDT", sDate);
        			}
        			return false;
        		}
        	}
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	console.log(e.row);
        	console.log(this.grdList.getCellProperty("body", e.row, "cssclass"));
        	console.log(this.grdList.getCellPropertyValue( e.row, 1, "cssclass"));
        	console.log(this.grdList.getCellPropertyValue( e.row, 2, "cssclass"));
        };

        // 공통 oncloumnchanged event : dataset
        // Grid rowFlag 처리르 위해 호출 필요
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.divChkAmStatCd.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.cboYear.addEventHandler("onitemchanged",this.divSearchArea_cboMonth_onitemchanged,this);
            this.divSearchArea.form.cboMonth.addEventHandler("onitemchanged",this.divSearchArea_cboMonth_onitemchanged,this);
            this.divBottomButton.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.dsMonthInfo.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("FOMM0260_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
