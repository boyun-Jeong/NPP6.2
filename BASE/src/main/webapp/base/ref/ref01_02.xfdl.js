(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref01_02");
            this.set_titletext("팝업창/오픈창");
            this.getSetter("classname").set("ref01_01");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","104",null,"222","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.getSetter("areaselecttype").set("overband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"429\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static20","20","78","129","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("팝업 그리드");
            obj.set_cssclass("sta_WF_TitleLev1");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnToast",null,"75","139","24","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("간단메시지");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00","120","164","400","126",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("개발은 20,20부터\r\n\r\n팝업창은 좌우/상단 여백 20px 처리\r\n\r\n하단 필수 영역 60px\r\n\r\n확인 취소와 같은 닫기 기능이 없으면 반드시 닫기 배치할것");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20",null,"43","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("검색조건 영역 div_search");
            obj.set_cssclass("div_POPSA_bg");
            this.divContent.addChild(obj.name, obj);

            obj = new Edit("edtP2","366","11","100","20",null,null,null,null,null,null,this.divContent.form.divSearch.form);
            obj.set_taborder("4");
            obj.getSetter("position").set("fixed");
            this.divContent.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","252","11","100","20",null,null,null,null,null,null,this.divContent.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("parameter p2");
            this.divContent.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtP1","134","11","100","20",null,null,null,null,null,null,this.divContent.form.divSearch.form);
            obj.set_taborder("6");
            this.divContent.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","11","100","20",null,null,null,null,null,null,this.divContent.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("parameter p1");
            this.divContent.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","13","430","30",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text(" 팝업창 하단 닫기 영역 필수 : 좌우 풀사이즈, 높이 60px");
            obj.set_cssclass("sta_POP_msg_btnbg");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContent.form.divSearch.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearch.form,function(p){});
            this.divContent.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,430,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref01_02.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ modaless 팝업 샘플
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
        	// 파라미터 받기
        	var p1 = this.getOwnerFrame().p1;
        	var p2 = this.getOwnerFrame().p2;

        	this.divContent.form.divSearch.form.edtP1.set_value(p1);
        	this.divContent.form.divSearch.form.edtP2.set_value(p2);
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
        		Ex.core.error(this,"ERROR",sSvcId+"::"+nErrorCode+"::"+sErrorMsg);
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
        }
        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.btnConfirm_onclick = function(obj,  e)
        {
        	Ex.core.pclose(this,"YES");
        }

        this.btnCancel_onclick = function(obj,  e)
        {
        	Ex.core.pclose(this,"NO");
        }

        this.Button00_onclick = function(obj, e)
        {
        	Ex.core.toast(this, "조회 도었습니다.1");
        	Ex.core.toast(this, "조회 도었습니다.2");
        }

        this.btnToast_onclick = function(obj, e)
        {
        	Ex.core.toast(this, "오픈창이 조회 되었습니다.");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContent.form.btnToast.addEventHandler("onclick",this.btnToast_onclick,this);
        };
        this.loadIncludeScript("ref01_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
