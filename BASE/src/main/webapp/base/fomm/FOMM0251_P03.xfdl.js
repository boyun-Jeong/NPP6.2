(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0251_P03");
            this.set_titletext("관리자 목록 팝업");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,361);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20","Static00_01:0","98","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("관리자 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdUserInfo","20","staUserInfo:10",null,"227","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj.set_binddataset("dsFommUserMt");
            obj.set_autoFilter("true");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"theme://images/btn_TF_Close_O.png\" cursor=\"pointer\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"107\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/><Cell col=\"6\" text=\"내선번호\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:TELNUM\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","staUserInfo:-5","20","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommUserMt");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,361,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0251_P03.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		: FOMM0251_P03
        * 화면(명)	: 관리자 관리(삭제) 팝업
        * 메뉴(경로)	:
        * 화면 설명	: 관리자 관리(삭제) 팝업
        * 작성자		: 정하림
        * 작성일		: 2025.03.17
        * 수정이력	: 2025.03.17
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2025.03.17	정하림		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pUserList = '';
        this.pGridTitle = '';
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	this.fnCompInit();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 저장
        this.fnSave = function()
        {
        	//trace("fnSave call");
        	var param = {
        					id : "saveAlert"
        				  , msg : "10004"
        				  , arrparam : ['']
        				  , msgtype : "S"};
        	Ex.core.alert(this, param);

        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");
        	for(var i = 0; i < objDs.rowcount; i++)	objDs.setDeleteRow(i);
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
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "" : // 서비스 ID
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if( Ex.isEmpty(varValue) )	return;

        	switch(pID)
        	{

        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "saveConfirm" :	// 선택 확인
        			this.fnSave();
        			break;

        		case "saveAlert" :
        			var dsObj = this.dsFommUserMt.saveJSON();
        			trace(dsObj)
        			Ex.core.pclose(this, dsObj);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
        	//this.grdObj.displayRowType();	// Grid 행상태(ROWFLAG) 이미지 처리 util 호출

        	//버튼 권한 처리
        	var arrBtn = [this.divBottom.form.btnSave];
         	Ex.util.setBtnVisible(this.getOwnerFrame(), 'save', arrBtn);

        	this.pUserList	= this.getOwnerFrame().pUserList||'';
        	this.pGridTitle = this.getOwnerFrame().pGridTitle||'';

        	if(!Ex.isEmpty(this.pGridTitle)){
        		// Grid title 처리
        		this.divContent.form.staUserInfo.set_text(this.pGridTitle);

        		// cnt 위치 조정
        		var objSize = nexacro.getTextSize(this.divContent.form.staUserInfo.text, this.divContent.form.staUserInfo._getCurrentStyleInheritValue("font"));
        		this.divContent.form.staUserInfo.set_width(parseInt(objSize.nx) + 20);

        		objSize = nexacro.getTextSize(this.divContent.form.stcCnt.text, this.divContent.form.stcCnt._getCurrentStyleInheritValue("font"));
        		this.divContent.form.stcCnt.set_width(parseInt(objSize.nx) + 20);
        		this.divContent.form.stcCnt.set_left("staUserInfo:0");
        	}

        	this.dsFommUserMt.loadJSON(this.pUserList);

        }

        this.fnGetCmmCd = function()
        {
        	/*
        	var oParam = {
        		upCmmCd : [''	]	// 조회할 상위코드
        		,codeDiv: [''	]	// 조회할 코드의 업무구분
        		,optStr	: ['ALL']	// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y'	]	// 사용여부
        		,filter	: [''	]	// filterStr
        		,objDs	: [		]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        	*/
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :			// 검색
        			//this.fnSearch();
        			break;

        		case "btnSave" :
        			if( Ex.util.isUpdated(this.dsFommUserMt))
        			{
        				var param = {
        							id : "saveConfirm"
        						  , msg : "10003"
        						  , arrparam : ['']
        						  , msgtype : "I"
        						};
        				Ex.core.confirm(this, param);
        			}


        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;
        	}
        }

        this.dsOncolumnchanged = function(obj, e)
        {
        	obj.setUpdateRow(e);
        }

        this.divContent_grdUserInfo_oncellclick = function(obj,e)
        {
        	if(e.row > -1 && e.cell == 3) // 삭제 버튼 클릭 시
        	{
        		this.dsFommUserMt.deleteRow(e.row);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.grdUserInfo.addEventHandler("oncelldblclick",this.divContent_grdUserInfo_oncelldblclick,this);
            this.divContent.form.grdUserInfo.addEventHandler("oncellclick",this.divContent_grdUserInfo_oncellclick,this);
            this.dsFommUserMt.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommUserMt.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
        };
        this.loadIncludeScript("FOMM0251_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
