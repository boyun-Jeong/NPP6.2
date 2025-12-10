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
                this._setFormPosition(1840,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRadio", this);
            obj._setContents("<ColumnInfo><Column id=\"AA\" type=\"STRING\" size=\"256\"/><Column id=\"BB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">1</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"NAME\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"NAME\">3</Col><Col id=\"CODE\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">sel</Col></Row><Row><Col id=\"NAME\">11</Col><Col id=\"CODE\">11</Col><Col id=\"UP_CODE\">1</Col></Row><Row><Col id=\"NAME\">12</Col><Col id=\"CODE\">12</Col><Col id=\"UP_CODE\">1</Col></Row><Row><Col id=\"NAME\">13</Col><Col id=\"CODE\">13</Col><Col id=\"UP_CODE\">1</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col><Col id=\"UP_CODE\">2</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22</Col><Col id=\"UP_CODE\">2</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23</Col><Col id=\"UP_CODE\">2</Col></Row><Row><Col id=\"UP_CODE\">3</Col><Col id=\"NAME\">31</Col><Col id=\"CODE\">31</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc00","10","20",null,"127","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("형상관리 호출시 보여질 Sample Page 입니다.");
            obj.set_font("50px/normal \"KoPubL\"");
            obj.set_textAlign("center");
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
        this.registerScript("TEST2_W.xfdl", function() {
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
        	var svcUrl	= nexacro.getEnvironment().services["svc_url"].url;

        	this.CALL_SCRN	= this.parent.CALL_SCRN;
        	this.URL_PARAM	= this.parent.URL_PARAM;

        	//alert('this.CALL_SCRN : ' + this.CALL_SCRN);
        	//alert('this.URL_PARAM : ' + this.URL_PARAM);
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


        this.grd00_ondropdown = function(obj,e)
        {
        	var upCd = this.dsList.getColumn(e.row, 'CODE');
        	this.dsList2.set_filterstr("UP_CODE=='" + upCd + "'");
        };

        this.grd00_oncloseup = function(obj,e)
        {
        	this.dsList2.set_filterstr("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("TEST2_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
