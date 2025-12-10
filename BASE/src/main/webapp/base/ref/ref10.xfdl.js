(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref10");
            this.set_titletext("focus 처리 API");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">A</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">B</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">C</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">D</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">E</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"name\">F</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"name\">G</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"name\">H</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"name\">I</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">J</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">K</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("TextArea01","423","20",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("- ref::ref10.xfdl \r\n\r\nEdit , maskEdit , combo , calendar , textArea\r\n위 입력 콤포넌트에 setFocusRed() API 추가\r\n\r\n필수 입력 체크시 border = red처리를 위해 추가된 API\r\nsetFocusRed(); 호출시 \r\n값이 존재할때는 border = red 처리 하지않음\r\n값이 없을때는 border = red 처리\r\n\r\n값을 채운후 포커스가 빠지면 자동으로 평시\r\nborder 칼라로 변경됨\r\n\r\n\r\n\r\n\r\n*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","1","52","246","27",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","1","84","246","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_type("string");
            obj.getSetter("mask").set("##-##");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","1","116","246","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("dsCombo00");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","1","145","246","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","1","174","246",null,null,"5",null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","257","20","156","27",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Edit.setFocusRed");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","257","52","156","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("maskEdit.setFocusRed");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","257","84","156","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("combo.setFocusRed");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","257","113","156","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("calendar.setFocusRed");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","257","142","156","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("textArea.setFocusRed");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","1","20","246","27",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("필수 입력 체크 하기");
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
        this.registerScript("ref10.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ focus 처리 API
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
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
        this.fvVar;  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.
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
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환

        	var cmp = this[mID];
        	if( cmp )
        	{
        		cmp.setFocusRed();
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.Button00_onclick = function(obj, e)
        {
        	this.Edit00.setFocusRed();
        }

        this.Button01_onclick = function(obj, e)
        {
        	this.MaskEdit00.setFocusRed();
        }

        this.Button02_onclick = function(obj, e)
        {
        	this.Combo00.setFocusRed();
        }

        this.Button03_onclick = function(obj, e)
        {
        	this.Calendar00.setFocusRed();
        }

        this.Button04_onclick = function(obj, e)
        {
        	this.TextArea00.setFocusRed();
        }

        this.Button05_onclick = function(obj, e)
        {
        	var strEdit = this.Edit00.value;
        	var strMaskEdit = this.MaskEdit00.value;
        	var strCombo = this.Combo00.value;
        	var strCalendar = this.Calendar00.value;
        	var strTextArea = this.TextArea00.value;

        	var cmp;
        	if( Ex.isEmpty(strEdit) )		cmp = this.Edit00;
        	else if( Ex.isEmpty(strMaskEdit) )	cmp = this.MaskEdit00;
        	else if( Ex.isEmpty(strCombo) )		cmp = this.Combo00;
        	else if( Ex.isEmpty(strCalendar) )	cmp = this.Calendar00;
        	else if( Ex.isEmpty(strTextArea) )	cmp = this.TextArea00;

        	if( cmp )
        	{
        		// 메세지 콜백을 확인하세요.
        		var param = {id : cmp.name, msg : cmp.name + "에 값을 입력하세요."};
        		Ex.core.alert(this, param);
        		return;
        	}
        	// TO DO CODE.....
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };
        this.loadIncludeScript("ref10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
