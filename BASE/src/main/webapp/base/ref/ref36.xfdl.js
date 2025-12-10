(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref01");
            this.set_titletext("팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAddList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SECONDS\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExecList", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SECONDS\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divRight","288.00","20",null,"308","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0.00","0","97","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("2");
            obj.set_text("추가 데이터");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divRight.addChild(obj.name, obj);

            obj = new Grid("grd00","0","Static05:10",null,"115","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAddList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"260\"/><Column size=\"50\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"시간(초)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:CONT\"/><Cell col=\"4\" text=\"bind:SECONDS\" editinputtype=\"number\" editmaxlength=\"2\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divRight.addChild(obj.name, obj);

            obj = new Div("div01",null,"0","200","24","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("1");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","70","24","0",null,null,null,null,null,this.divRight.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_del");
            this.divRight.form.div01.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","70","24","btnDel:5",null,null,null,null,null,this.divRight.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_add");
            this.divRight.form.div01.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","grd00:10","247","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("3");
            obj.set_text("진행 데이터");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("btnModal00","284.00","grd00:10","24","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("4");
            obj.set_text("▼");
            this.divRight.addChild(obj.name, obj);

            obj = new Grid("grd00_00","0","btnModal00:10",null,"115","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsExecList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"290\"/><Column size=\"60\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"시간(초)\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:CONT\"/><Cell col=\"3\" text=\"bind:SECONDS\" editmaxlength=\"2\" editinputtype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcPjtNameBg","120","-5",null,"34","209",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_schTitle");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("staCoNm","130","0","50","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("7");
            obj.set_text("시간(초)");
            this.divRight.addChild(obj.name, obj);

            obj = new Spin("spnSeconds","staCoNm:0","0","80","24",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("8");
            obj.set_min("3");
            obj.set_max("20");
            obj.set_value("10");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("stcBackMid2_00_00_01","0","divRight:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","20.00","20",null,null,"617","395",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnModal","0.00","40","100","24",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_text("실행");
            this.divLeft.addChild(obj.name, obj);

            obj = new Button("btnModal00","160","40","100","24",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("1");
            obj.set_text("중단");
            this.divLeft.addChild(obj.name, obj);

            obj = new Div("divSlide","40","101","230","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new Div("divArea","20","stcBackMid2_00_00_01:0",null,"150","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRight.form.div01.form
            obj = new Layout("default","",0,0,this.divRight.form.div01.form,function(p){});
            this.divRight.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form
            obj = new Layout("default","",0,0,this.divRight.form,function(p){});
            this.divRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSlide
            obj = new Layout("default","",0,0,this.divSlide.form,function(p){});
            this.divSlide.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divArea
            obj = new Layout("default","",0,0,this.divArea.form,function(p){});
            this.divArea.form.addLayout(obj.name, obj);

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
        this.registerScript("ref36.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 팝업 처리
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
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
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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
        		case "ABOUT" : // 서비스 ID
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	trace("pID="+pID+" ,varValue="+varValue);
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
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
        	var divId = obj.parent.parent.parent.parent.id;

        	//trace("this.fnCommOnclick() divId ::: " + divId + " obj.name : " + obj.name);

        	switch(obj.name)
        	{
        		case "btnAdd" :
        			var rowPos = this.dsCmmMsgMt.setInsertRow(this.dsCmmMsgMt.rowposition+1);
        			this.dsCmmMsgDt.clearData();
        			break;

        		/* 사이즈 제외 옵션처리는 위 모달팝업과 동일 */
        		/* autosize 설정 시, 오픈 url (ref::ref01_01.xfdl) 화면 디자인 크기(600x430)으로 팝업 오픈 */
        		case "btnDel" :
        			break;

        		case "btnAppend" :
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divRight.form.div01.form.btnDel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRight.form.div01.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divRight.form.btnModal00.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.btnModal.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divLeft.form.btnModal00.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref36.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
