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
            this.set_titletext("Synap");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
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
        this.registerScript("ref28.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	︰ SynapViewer Popup
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.06.04
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        2024.06.04		WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.formObj;	//전역변수 설정
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        	this.formObj = obj;
        }

        this.fnInit = function()
        {
        	var convertType = "1"; //0: HTML 형식으로 변환합니다. 1: IMAGE 형식으로 변환합니다.
        	var fileType = "URL";
        	var fid = 'NITSM_' + Ex.util.today() + '_' + Ex.util.todayTime() + new Date().getMilliseconds().toString().substring(0, 2) ;
        	var filePath = "http://10.110.52.133:8081/spp/_resource_/_theme_/spp/images/img_WF_Nexacro.png";

        //	var vurl = 'https://docvwdev.wemb.co.kr:8443/SynapDocViewServer/';
        	//https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp
        	var vurl = 'https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp';


        	var params = {
        			title		: "report_view",
        			filePath	: filePath,
        			fileType	: fileType,
        			fid			: fid,
        			convertType	: convertType,
        			urlEncoding	: "UTF-8",
        			pageEnd		: 1
        		};

        	$.ajax({
        		type		: "POST",
        		url			: vurl,
        		data		: params,
        		contentType	: "application/x-www-form-urlencoded",
        		dataType	: "json",
        		cache		: false,
        		async		: false,
        		xhrFields	: {withCredentials: true}, // 올바른 옵션 이름
        		success		: function(data)
        		{
        			if(data != null)
        			{
        				var viewUrl = vurl;
        				window.open(viewUrl, "_blank", "fullscreen=yes");
        			}
        		},
        		error		: function(request, status, error)
        		{
        			var rtnVal = JSON.stringify(request.responseJSON);
        			console.log(rtnVal);
        		}
        	});
        }

        this.fnInit1 = function()
        {
        	var convertType = "1"; //0: HTML 형식으로 변환합니다. 1: IMAGE 형식으로 변환합니다.
        	var fileType = "URL";
        	var fid = 'NITSM_' + Ex.util.today() + '_' + Ex.util.todayTime() + new Date().getMilliseconds().toString().substring(0, 2) ;
        	//var filePath = thisObj.fileArr[0];
        	//var filePath = "https://nitsm.wemb.co.kr/spp/_resource_/_theme_/spp/images/img_WF_Nexacro.png";
        	var filePath = "http://10.110.52.133:8081/spp/_resource_/_theme_/spp/images/img_WF_Nexacro.png";

        	//var filePath = "https://10.16.158.28/spp/_resource_/_theme_/spp/images/img_WF_Nexacro.png";
        //	var vurl = 'https://docvwdev.wemb.co.kr:8443/SynapDocViewServer/';
        	//https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp
        	var vurl = 'https://crownixdev.wemb.co.kr:1443/reporting/html5/report_view.jsp';


        	var params = {
        			title		: "파일이름은 여기",
        			filePath	: filePath,
        			fileType	: fileType,
        			fid			: fid,
        			convertType	: convertType,
        			urlEncoding	: "UTF-8",
        			pageEnd		: 1
        		};

        	var webView = this.WebBrowser00;
        	//var winObj = window;
        	//winObj.open("", "_blank");

        	$.ajax({
        		type		: "POST",
        		url			: vurl + "jobJson",
        		data		: params,
        		contentType	: "application/x-www-form-urlencoded",
        		dataType	: "json",
        		cache		: false,
        		async		: false,
        		xhrFields	: {withCredentials: true}, // 올바른 옵션 이름
        		success		: function(data)
        		{
        			if(data != null)
        			{
        				var viewUrl = vurl + data.viewUrlPath;
        				//webView.set_url(viewUrl);
        				window.open(viewUrl, "_blank", "fullscreen=yes");	//,toolbar=no,status=no,menubar=no,
        				//location.href = viewUrl;  //, 'about:blank', 'width:100%;height:100%');
        			}
        		},
        		error		: function(request, status, error)
        		{
        			//console.log("error:" + error);
        			//console.log("status:[" + error.status + "] statusText:[" + error.statusText + "]");
        			var rtnVal = JSON.stringify(request.responseJSON);
        			console.log(rtnVal);
        		}
        	});
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

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "" :
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("ref28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
