(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("report");
            this.set_titletext("Button");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"반복1\" type=\"STRING\" size=\"256\"/><Column id=\"반복2\" type=\"STRING\" size=\"256\"/><Column id=\"반복3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"반복1\">a1</Col><Col id=\"반복2\">b1</Col><Col id=\"반복3\">c1</Col></Row><Row><Col id=\"반복1\">a2</Col><Col id=\"반복2\">b2</Col><Col id=\"반복3\">c2</Col></Row><Row><Col id=\"반복1\">a3</Col><Col id=\"반복2\">b3</Col><Col id=\"반복3\">c3</Col></Row><Row><Col id=\"반복1\">a3</Col><Col id=\"반복2\">b3</Col><Col id=\"반복3\">c3</Col></Row><Row><Col id=\"반복1\">a4</Col><Col id=\"반복2\">b4</Col><Col id=\"반복3\">c4</Col></Row><Row><Col id=\"반복1\">a5</Col><Col id=\"반복2\">b5</Col><Col id=\"반복3\">c5</Col></Row><Row><Col id=\"반복1\">a6</Col><Col id=\"반복2\">b6</Col><Col id=\"반복3\">c6</Col></Row><Row><Col id=\"반복1\">a7</Col><Col id=\"반복2\">b7</Col><Col id=\"반복3\">c7</Col></Row><Row><Col id=\"반복1\">a8</Col><Col id=\"반복2\">b8</Col><Col id=\"반복3\">c8</Col></Row><Row><Col id=\"반복1\">a9</Col><Col id=\"반복2\">b9</Col><Col id=\"반복3\">c9</Col></Row><Row><Col id=\"반복1\">a10</Col><Col id=\"반복2\">b10</Col><Col id=\"반복3\">c10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContents","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webBrowser","0","0",null,null,"0","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_url("https://nitsmdev.wemb.co.kr/spp/comm/crownixReport.html");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divBottom","0","divContents:0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

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
        this.registerScript("comPopReport.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Pop Report
        * 메뉴(경로)	︰ Pop Report
        * 화면 설명	    ︰ Pop Report
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
        *------------------------------------------------------------------
        * 2023.07.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.pRPT_URL  = 'https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp';
        this.pMRD_FILE = this.getOwnerFrame().pMRD_FILE||'';
        this.pRPT_DATA = this.getOwnerFrame().pRPT_DATA||'';

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
        	//trace("workArea form init call");
        	this.fnParamView();

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
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	// 에러메세지 처리
        	if (nErrorCode < 0) {
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId) {
        		case "ABOUT" : // 서비스 ID
        			break;

        		default:
        			trace("this.fnCallback  switch  default : " + sSvcId);
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
        this.fnParamView = function() {
            var pWin = this.divContents.form.webBrowser.getProperty("window");

            pWin.callMethod("funcRpt", this.pRPT_URL, this.pMRD_FILE, this.pRPT_DATA);
        }

         // dataset TO TEXT
        this.DStoTEXT = function(dsArr, delStr) {
        	var returnStr;
        	var dsLength;	// 배열의 전체 개수 (데이터셋의 개수)
        	var dsColCnt;	// 각 데이터셋의 컬럼 개수
        	var dsRowCnt;	// 각 데이터셋의 로우 개수

            dsLength = dsArr.length;
        	// 데이터셋 배열의 크기가 1보다 작을 경우
        	if (dsLength < 1) {
        		returnStr = "";
        	} else {
        		var tmpStr = "";
        		for(i=0; i<dsLength; i++)
        		{
        			dsColCnt = dsArr[i].getColCount();
        			dsRowCnt = dsArr[i].getRowCount();
        			for(j=0; j<dsRowCnt; j++)
        			{
        				for(k=0; k<dsColCnt; k++)
        				{
        					// 각 필드의 값을 문자열로 연결
        					tmpStr += dsArr[i].getColumn(j,k);
        					tmpStr += delStr;	// 각 필드 사이에 구분자 값을 입력
        				}
        				tmpStr += "/ENTER/";	// 각 데이터 로우 사이에 개행 문자 삽입
        			}

        			// 데이터셋이 두 개 이상일 경우 구분하기 위한 문자 삽입 (Crownix에서 필요)
        			if(dsLength>1)
        			{
        				tmpStr += "//EOR//";
        				tmpStr += "/ENTER/";
        			}
        		}
        		returnStr = tmpStr;
        	}

        	return returnStr;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/

        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name) {
                case "btnParamView" :
        		    this.fnParamView();
        			break;

                case "btnClose" :  // 닫기
        			Ex.core.pclose(this);
        			break;

        		default:
        		    trace('this.fnCommOnclick case default obj.name : ' + obj.name);
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("comPopReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
