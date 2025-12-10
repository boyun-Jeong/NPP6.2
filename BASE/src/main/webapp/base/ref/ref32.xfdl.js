(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref32");
            this.set_titletext("Java Service");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsSvcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DS\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">1</Col><Col id=\"SVC_NM\">sr/SR0000D/select01</Col><Col id=\"IN_DS\">dsIn1</Col><Col id=\"OUT_DS\">dsOut1</Col></Row><Row><Col id=\"CHK\">1</Col><Col id=\"SVC_NM\">sr/SR0000D/selectAppvSeq</Col><Col id=\"IN_DS\">dsIn2</Col><Col id=\"OUT_DS\">dsOut2</Col></Row><Row><Col id=\"CHK\">1</Col><Col id=\"SVC_NM\">sr/SR0000D/selectAppvSeq</Col><Col id=\"IN_DS\">dsIn3</Col><Col id=\"OUT_DS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn1", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_ID\">TT202411110037</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn2", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_ID\">TT202410210026</Col><Col id=\"WF_PROC_CD\">WF_PROC_1000</Col><Col id=\"USER_ID\">3343745</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn3", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_ID\">TT202410210026</Col><Col id=\"WF_PROC_CD\">WF_PROC_1000</Col><Col id=\"USER_ID\">3343745</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCallSvc",null,"15","53","24","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"15","53","24","btnCallSvc:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"15","53","24","btnDelete:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","45",null,"190","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("_dsSvcInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"270\"/><Column size=\"170\"/><Column size=\"170\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"서비스경로\"/><Cell col=\"3\" text=\"IN 데이터셋\"/><Cell col=\"4\" text=\"OUT 데이터셋\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" editinputfilter=\"dot,comma,sign,space\" editinputtype=\"alpha,digit,symbol,numberandenglish\" text=\"bind:SVC_NM\" edittype=\"normal\"/><Cell col=\"3\" editinputfilter=\"dot,comma,sign,space\" editinputtype=\"alpha,digit,numberandenglish,symbol\" text=\"bind:IN_DS\" edittype=\"normal\"/><Cell col=\"4\" editinputfilter=\"dot,comma,sign,space\" editinputtype=\"alpha,digit,numberandenglish,symbol\" text=\"bind:OUT_DS\" edittype=\"normal\"/></Band></Format></Formats>");
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
        this.registerScript("ref32.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	: Java Service
        * 메뉴(경로)	: 공통
        * 화면 설명	:
        * 작성자		: WEMB
        * 작성일		: 2024.11.11
        * 수정이력	:
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.11.11	WEMB		최초작성
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
        	this.gfnFormOnLoad(obj, this.fnInit);

        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        }

        // 필요시 폼관련 이벤트는 여기 추가
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
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "test01" : // 서비스 ID
        			for(var i=0; i<this._dsSvcInfo.rowcount; i++)
        			{
        				if( !Ex.isEmpty(this._dsSvcInfo.getColumn(i, "OUT_DS")) )
        				{
        					if( this[this._dsSvcInfo.getColumn(i, "OUT_DS")] )
        					{
        						alert(this[this._dsSvcInfo.getColumn(i, "OUT_DS")].saveXML());
        					}
        				}
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	trace("pID="+pID+" ,varValue="+varValue);
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnAdd = function()
        {
        	this.dsService.addRow();
        	this.grd00.setCellPos(1);
        	this.grd00.setFocus();
        	this.grd00.showEditor();
        }

        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.deleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case 'btnAdd' :	// 조회
        			this.fnAdd();
        			break;

        		case 'btnDelete' :
        			this.fnDelete(this.dsSvcInfo);
        			break;

        		case 'btnCallSvc' :
        			Ex.core.callByDsService(this, "test01");
        			break;
        	}
        }

        this.grd00_oncellclick = function(obj,e)
        {
        	obj.showEditor();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.onBeforeClose,this);
            this.btnCallSvc.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
        };
        this.loadIncludeScript("ref32.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
