(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("reportSample");
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
            obj = new Static("stc00","5.00","11","59","13",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("URL");
            this.addChild(obj.name, obj);

            obj = new Edit("input_RS","74.00","5","783","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp");
            obj.set_text("https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp");
            this.addChild(obj.name, obj);

            obj = new Button("btnView","858.00","5","73","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","5.00","35","59","13",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("MRD file");
            this.addChild(obj.name, obj);

            obj = new Edit("input_mrdPath","74.00","29","783","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("ITSM/SBYi202407050.mrd");
            obj.set_text("ITSM/SBYi202407050.mrd");
            this.addChild(obj.name, obj);

            obj = new Button("btnParamView","858.00","29","73","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("param 조회");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_01","5.00","59","59","13",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("parameter");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaParam","74","53",null,"75","5",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webBrowser","5.00","130","908",null,null,"5",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("https://nitsm.wemb.co.kr/spp/template/crownixReport.html");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSample","921.00","158","266","318",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"반복1\"/><Cell col=\"1\" text=\"반복2\"/><Cell col=\"2\" text=\"반복3\"/></Band><Band id=\"body\"><Cell text=\"bind:반복1\" edittype=\"text\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:반복2\" edittype=\"text\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:반복3\" edittype=\"text\" padding=\"0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","1060.00","133","59","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("btnAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","1127.00","133","59","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("btnDel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","921.00","130","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("테스트 페이지 제목");
            obj.set_text("테스트 페이지 제목");
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
        this.registerScript("template05.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Component Guide
        * 메뉴(경로)	︰ Component Guide
        * 화면 설명	︰ Component Guide
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
        		default:
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

        this.fnRowAdd = function() {
            this.dsSample.addRow();
        }


        this.fnRowDel = function() {
            this.dsSample.deleteRow(this.dsSample.rowposition);
        }

        this.fnViewWebBrowser = function() {
            var ReportingServerUrl = this.input_RS.value;
            var mrdPath            = this.input_mrdPath.value;
            var pwin               = this.webBrowser.getProperty("window");
        	var dtot;
        	var param;
        	var datasetArray = new Array();
        	datasetArray[0] = this.dsSample;

        	dtot = this.DStoTEXT(datasetArray, "//DD//");
        	param = "/rdata [";
        	param += this.edt00.value;
        	param += "/ENTER/";
        	param += dtot;
        	param += "//EOR//] ";
        	param += "/rnl [/ENTER/] ";

            this.txaParam.value = param;

            pwin.callMethod("funcRpt", ReportingServerUrl, mrdPath, param);
        }

        this.fnParamView = function() {
            var ReportingServerUrl = this.input_RS.value;
            var mrdPath            = this.input_mrdPath.value;
            var pwin               = this.webBrowser.getProperty("window");
        	var param              = this.txaParam.value;

            pwin.callMethod("funcRpt", ReportingServerUrl, mrdPath, param);
        }


         // dataset TO TEXT
        //function DStoTEXT(dsArr, delStr) {
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
        	switch(obj.name)
        	{
        		case "btnView" :
        		    this.fnViewWebBrowser();
        			break;

                case "btnParamView" :
        		    this.fnParamView();
        			break;

        		case "btnAdd" :
        		    this.fnRowAdd();
        			break;

        		case "btnDel" :
        		    this.fnRowDel();
        			break;

        		default:
        		    console.log('this.fnCommOnclick case default obj.name : ' + obj.name);
        			break;
        	}
        }

        /*

        Other Sample
        mrd path  : ITSM/PrjMigr.mrd
        parameter : /rdata [정보기술팀//DD//송건일//DD//연관자테스트//DD//정보기술팀//DD//송건일//DD//2024-05-21//DD//D//DD//bbb//DD//bbb//DD//테스트//DD//테스트//DD//2024-07-10 11:11//DD//테스트//DD//테스트//DD//테스트//DD//테스트//DD//곽현호//DD//2024-07-08//DD///ENTER//ENTER//ENTER//ENTER/ /ENTER//ENTER//ENTER//ENTER/ /ENTER//ENTER/시스템팀//DD//송인철//NL//[(代)송건일]//DD//승인//DD//장성섭//NL//[(代)송건일]//DD//승인//DD///ENTER//ENTER//ENTER//ENTER//ENTER//ENTER/IT지원팀//DD//오은혜//DD//대기//DD////DD////DD///ENTER//ENTER///EOR//] /rnl [/ENTER/]

        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnView.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnParamView.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnDel.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("template05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
