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
            this.set_titletext("Websocket");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcAutoInMsg","5","20","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid blue");
            obj.set_textAlign("center");
            obj.set_text("●");
            obj.set_color("RED");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("stcConnSocket","stcAutoInMsg:5","20","127","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid blue");
            obj.set_text("소켓연결 [X]");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","5","55",null,null,"5","39",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnConnect","stcConnSocket:5","20","53","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("연결");
            this.addChild(obj.name, obj);

            obj = new Button("btnDisConnect","btnConnect:5","20","53","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("해제");
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
        this.registerScript("ref25.xfdl", function() {
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
        this.webSocket;	//전역변수 설정
        this.formObj;	//전역변수 설정
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        	this.formObj = obj;
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
        	//this.connect(this.formObj);   //호출
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
        		case "" : // 서비스 ID
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
        this.connect = function (sCope, gubun)
        {
        	//trace("this.connect() sCope.id : " + sCope.id);
        	if(gubun != "CLOSE")
        	{
        		var wsUrl = nexacro.replaceAll(nexacro.getApplication().xadl, "spp/SppApp.xadl.js", "");
        			wsUrl = nexacro.replaceAll(wsUrl, "https://", "");
        			wsUrl = nexacro.replaceAll(wsUrl, "http://", "");
        		//trace("xadl // wsUrl :: " + wsUrl);

        		var connectUrl = 'ws://' + wsUrl + "spp/ws/inmsg/" + Ex.util.getSession('gvUserId');

        		trace("sCope.webSocket:[" + sCope.webSocket + "]");

        		if( Ex.isEmpty(sCope.webSocket) )
        		{
        			sCope.webSocket = new WebSocket(connectUrl);
        		}
        	}

        	//웹 소켓이 연결되었을 때 호출되는 이벤트
        	sCope.webSocket.onopen = function(event)
        	{
        		console.log('접속되었습니다.');
        		sCope.sendMessage(sCope, '접속되었습니다.');
        	};

        	//웹 소켓에서 메시지가 날라왔을 때 호출되는 이벤트
        	sCope.webSocket.onmessage = function(event)
        	{
        		if(event != null)
        		{
        			sCope.sendMessage(sCope, event.data);
        		}
        	};

        	//접속이 종료된 후 수행하는 부분
        	sCope.webSocket.onclose = function()
        	{
        		sCope.sendMessage(sCope, "CLOSE");
        		sCope.webSocket = undefined;
        		console.log('Closed!');
        	};

        	sCope.webSocket.onerror = function(event)
        	{
        		if(event != null)
        		{
        			sCope.sendMessage(sCope, "onerror " + event.data);
        		}
        	};

        	if(gubun == "CLOSE")
        	{
        		sCope.webSocket.close();
        		sCope.webSocket = undefined;
        	}
        };

        this.sendMessage = function (sCope, val)
        {
        	trace("this.connect() sendMessage() val : " + val);
        	if(!Ex.isEmpty(val))
        	{
        		if(val == "접속되었습니다.")
        		{
        			sCope.stcAutoInMsg.set_color("lawngreen");
        			sCope.stcConnSocket.set_background("lawngreen");
        			sCope.stcConnSocket.set_text("소켓연결 [O]");
        			var txaVal = sCope.TextArea00.value||'';
        			sCope.TextArea00.set_value(txaVal + (!Ex.isEmpty(txaVal) ? "\n" : "") + "WebSocket Connect");
        		}
        		else if(val == "CLOSE")
        		{
        			sCope.stcAutoInMsg.set_color("RED");
        			sCope.stcConnSocket. set_background("");
        			sCope.stcConnSocket.set_text("소켓연결 [X]");
        			var txaVal = sCope.TextArea00.value||'';
        			sCope.TextArea00.set_value(txaVal + (!Ex.isEmpty(txaVal) ? "\n" : "") + "WebSocket Connection Close");
        		}
        		else
        		{
        			var txaVal = sCope.TextArea00.value||'';
        			sCope.TextArea00.set_value(txaVal + (!Ex.isEmpty(txaVal) ? "\n" : "") + val);
        		}
        	}
        };
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnConnect" :
        			this.connect(this.formObj);	//연결
        			break;

        		case "btnDisConnect" :			//해제
        			if( !Ex.isEmpty(this.webSocket) )
        			{
        				this.connect(this.formObj, "CLOSE");
        			}
        			break;
        	}
        };

        this.onBeforeClose = function(obj,e)
        {
        	if( !Ex.isEmpty(this.webSocket) )
        	{
        		this.connect(this.formObj, "CLOSE");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.onBeforeClose,this);
            this.btnConnect.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDisConnect.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
