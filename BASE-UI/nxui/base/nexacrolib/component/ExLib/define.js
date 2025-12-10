//==============================================================================
// redifine nexacro._download
// IE adding conditional statements, Chrome branching. 
// 
//==============================================================================
if (nexacro.Browser == "IE" && nexacro.BrowserVersion < 9) {
	nexacro._download = function (url) {
/* 		
		var index = url.lastIndexOf(".");
		var extension;
		if (index > 0) {
			extension = url.substr(index + 1);
			//if (extension == "xlsx") {
			if (extension == "xlsx" || extension=="xls") {
				window.location.href = url;
				return;
			}
		}
		window.open(url);
		 */
		
		//_download 재정의
		//새창으로 열지 않고 iframe 처리.
		var hiddenIframeId = "_hiddenDownloader";
		var _iframe = document.getElementById('_hiddenDownloader');
		if(_iframe === null){
			_iframe = document.createElement('iframe');
			_iframe.id = hiddenIframeId;
			_iframe.style.display = 'none';
			document.body.appendChild(_iframe);
		}
		_iframe.src = url;
	};
}
else if (nexacro.Browser == "Chrome" || nexacro.Browser == "Edge") {
	nexacro._download = function (url) {
		var index = url.lastIndexOf(".");
		var extension;
		if(index > 0){
			
/* 			extension = url.substr(index + 1);
			if(extension=="xlsx"||extension=="xls"){
				//window.location.href = url;//or iframe process
				return;
			}
			window.open(url); */
			
			//_download 재정의
			//새창으로 열지 않고 iframe 처리.
			var hiddenIframeId = "_hiddenDownloader";
			var _iframe = document.getElementById('_hiddenDownloader');
			if(_iframe === null){
				_iframe = document.createElement('iframe');
				_iframe.id = hiddenIframeId;
				_iframe.style.display = 'none';
				document.body.appendChild(_iframe);
			}
			_iframe.src = url;
				
		}else{
			var new_win = window.open(url);
			new_win.addEventListener("focus", function () {
				if (this._use_filedialog) {
					this.close();
				}
			}, false);
			new_win.addEventListener("blur", function () {
				this._use_filedialog = true;
			}, false);
		}
	};
}
else if (nexacro.Browser == "Safari") {
}
else if (nexacro.Browser == "MobileSafari" && nexacro.OS == "iOS") {
}
else {
	nexacro._download = function (url) {
		if (nexacro.Browser == "IE" || nexacro.Browser == "Gecko"){
			//window.open(url);
			
			//_download 재정의
			//새창으로 열지 않고 iframe 처리.
			var hiddenIframeId = "_hiddenDownloader";
			var _iframe = document.getElementById('_hiddenDownloader');
			if(_iframe === null){
				_iframe = document.createElement('iframe');
				_iframe.id = hiddenIframeId;
				_iframe.style.display = 'none';
				document.body.appendChild(_iframe);
			}
			_iframe.src = url;
		};
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------
var pForm  = nexacro.Form.prototype;
//--------------------------------------------------------------form common function ----------------------------------------------------
/**
  * @fileoverview 폼 초기설정 처리관련.
  * @version 1.0
  * @since 
  * @author 
  **/
 /**
   * 그리드 페이징시 사용할 페이징당 레코드 카운트 상수 정의
   * comm::comPaging에 정의된 콤보 건수와 일치하도록 정의하세요.
   **/
pForm.CNTBYPAGE_20 = 20;
pForm.CNTBYPAGE_50 = 50;
pForm.CNTBYPAGE_100 = 100;
pForm.CNTBYPAGE_500 = 500;
 /**
   * 폼 onload 시 초기 설정
   * @param {form} oForm 폼 scope
   * @return N/A
   * @description 
   *
   * @example
   *  pForm.gfn_formOnLoad(this);
   **/
pForm.gfnFormOnLoad = function(oForm,ofunc)
{
	if(oForm != this || oForm == null || oForm == undefined)
	{
		trace("gfnFormOnLoad함수 파라미터를 확인하세요");
		return;
	}
	
	var nScrollSize = 15;
	oForm.set_scrollbardecbuttonsize(nScrollSize);
	oForm.set_scrollbarincbuttonsize(nScrollSize);
	oForm.set_scrollbarsize(nScrollSize);
	oForm.set_scrollbarbarminsize(40);
	
	if( oForm == this.getOwnerFrame().form.divWork || oForm == this.getOwnerFrame().form.divUrl) {
		var frame = oForm.getOwnerFrame();
		Ex.util.setWait(this, false);
	}

	// 업무화면 높이 갱신 && 스크롤 리셋
	if(oForm.parent && oForm.parent.name.toUpperCase() == 'DIVWORK') {
		var height = oForm.getOffsetHeight();
		var components = oForm.components;
		for(var i = 0; i < components.length; i++) {
			if(components[i].visible) {
				if(components[i].getOffsetBottom() > height)
					height = components[i].getOffsetBottom();
			}
		}
		oForm.set_height(height);

		var divWork = oForm.parent;
		divWork.parent.fnFormOnSize(oForm.getOffsetWidth(), oForm.getOffsetHeight());
		
		divWork.form.resetScroll();
	}
	
	
	Ex.core.init(oForm);
	var appUrl = nexacro.getApplication().xadl;
	
	if ( appUrl.indexOf("quickview.") > -1 ) 
	{	
		nexacro.getApplication().services["svc_url"].set_url( "http://localhost:8080/" );
		nexacro.getApplication().gvHost = nexacro.getApplication().services["svc_url"].url;
		
		return;
	}	
	if(!Ex.util.isPopup(oForm))
	{
		//quickview는 return;
		if ( appUrl.indexOf("quickview.") > -1 ) 
		{			
			return;
		}
	}
	
	if( !Ex.isEmpty(ofunc) )
	{
		var interval = null;
		var funcs = function(){
			clearInterval(interval);
			ofunc.call(oForm);
		};
		interval = setInterval(funcs,200);
	}
	
	
	Ex.util.setWait(this, false);
}

/**
 * @description 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다
 * @param {object} objService id:서비스아이디, callbackFunc:화면단콜백함수
 * @param {string} sErrorCode 서비스 응답코드
 * @param {string} sErrorMsg 서비스 응답메시지
 * @return N/A
 * @memberOf lib_form
 */
pForm._gfnCallback = function(objService, nErrorCode, sErrorMsg)
{
	trace("_gfnCallback() svcId:[" + objService.id + "] errorCode:[" + nErrorCode + "] sErrorMsg:[" + sErrorMsg + "]");	// errorMsg:[" + sErrorMsg + "]"

	if(nErrorCode < 0)
	{
		if( !Ex.isEmpty(nexacro.getApplication().gvRtnMsg))	nexacro.getApplication().gvRtnMsg = "";

		if( !Ex.isEmpty(sErrorMsg) )
		{
			nexacro.getApplication().gvRtnMsg = sErrorMsg;
		}
	}
	
	var sSvcId		= objService.id;	
	var sCallBackId	= objService.callbackFunc;

	// error인 경우
	if(nErrorCode < 0)
	{
		//-90000 ~ -90999	: gfnCallback에서 자동 메시지 후 화면 닫힘
		//-91000 ~ -91999	: gfnCallback에서 자동 메시지 후 화면 유지
		//-92000 ~ -92999	: gfnCallback에서 메시지 처리 없이 화면 callback로 전달

		Ex.util.setWait(this, false);
		if(nErrorCode <= -90000 && nErrorCode >= -91999)	//-90000 ~ -91999
		{
			var alertbyMsgCallback = function(mid, varValue)
			{
				if(mid == "systemCustomMsg")
				{
					if(nErrorCode <= -91000 && nErrorCode >= -91999)
					{
						//trace("IF2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
						Ex.core.pclose(this, this.getOwnerFrame().isSave ? "Y" : "N");
					}
					return;
				}
			};
			var param = {
				  id	: "systemCustomMsg"	//fnMsgAfter에서 식별자로 사용되는 ID
				, msg	: sErrorMsg			//메시지 내용
				, arrparam : []				//메시지의 변수에 들어갈 실제값s
				, msgtype : "W"				//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
				, callbackfunc: alertbyMsgCallback
			};
			Ex.core.alert(this, param);
			return;
		}
		else if(nErrorCode <= -92000 && nErrorCode >= -92999)
		{
			//trace("IF3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
			if( Ex.isFunction(sCallBackId) || this[sCallBackId])
			{
				this._gfnFormCallback(nErrorCode, sErrorMsg, sSvcId, sCallBackId);
			}
			return;
		}
		else if(nErrorCode == -99998)
		{
			trace("nexacro.getApplication().gvIsSessionOut :::::::::::: " + nexacro.getApplication().gvIsSessionOut);

			//if(nexacro.getApplication().gvIsSessionOut == "N")

			if(nexacro.getApplication().gvIsSessionOut == "N")
			{
				var alertbyMsgCallback = function(mid, varValue)
				{
					if(mid == "sppSessionOut") document.location.href = "/";
				};
				
				nexacro.getApplication().gvIsSessionOut = "Y";
				
				var param = {id : "sppSessionOut", msg : "10007", callbackfunc: alertbyMsgCallback};
				Ex.core.error(this, param);
				return;
			}
 			else
 			{
				if(nexacro.getApplication().FRAMETYPE != "INIT")
				{
					var alertbyMsgCallback = function(mid, varValue)
					{
						if(mid == "sppSessionOut") document.location.href = "/";
					};
					
					if(nexacro.getApplication().gvIsSessionOut == "N")	nexacro.getApplication().gvIsSessionOut = "Y";
					var param = {id : "sppSessionOut", msg : "10007", callbackfunc: alertbyMsgCallback};
					Ex.core.error(this, param);
					return;
				}
				//trace("nexacro.getApplication().FRAMETYPE :::::::::::::: " + nexacro.getApplication().FRAMETYPE);
				//document.location.href = "/";
 			}
		}
		else if(nErrorCode == -99997)
		{
			var alertbyMsgCallback = function(mid, varValue)
			{
				if(mid == "sppAuthExpire") document.location.href = "/";
			};
			var param = {id : "sppAuthExpire", msg : "※위임 권한이 만료되었거나 위임 권한이 존재하지 않습니다.", callbackfunc: alertbyMsgCallback};
			Ex.core.error(this, param);
			return;
		}
		else if(nErrorCode == -99996)
		{
			var alertbyMsgCallback = function(mid, varValue)
			{
				if(mid == "sppAuthExpire") document.location.href = "/";
			};
			var param = {id : "sppAuthExpire", msg : "※위임자의 메뉴 권한이 존재하지 않습니다.", callbackfunc: alertbyMsgCallback};
			Ex.core.error(this, param);
			return;
		}
		else if(nErrorCode == -99995)
		{
			nexacro.getApplication().gvIsSessionOut = "Y";
			var alertbyMsgCallback = function(mid, varValue)
			{
				if(mid == "sppChangeUserChk") document.location.href = "/";
			};
			var param = {id : "sppChangeUserChk", msg : "접속 유저가 변경되어 재접속을 진행합니다.", callbackfunc: alertbyMsgCallback};
			Ex.core.error(this, param);
			return;
		}
		else
		{
			if( Ex.isFunction(sCallBackId) || this[sCallBackId])
			{
				this._gfnFormCallback(nErrorCode, "오류가 발생했습니다.\n관리자에게 문의 하세요.", sSvcId, sCallBackId);				
			}
			else
			{
				var param = {id : "sppSystemError", msg : "오류가 발생했습니다.\n관리자에게 문의 하세요."};
				Ex.core.error(this, param);
			}
			return;
		}
	}
	
	if(objService.id == "_regExcelDownInfo")
	{
		if(nexacro.getApplication().gdsExcelControllerInfo.rowcount > 0)
		{
			var httpUrl	= nexacro.getEnvironment().services["svc_url"].url;
			nexacro.getApplication().MAIN_TOP.form.webExcelDown.set_url(httpUrl + nexacro.getApplication().gdsExcelControllerInfo.getColumn(0, "CALL_CONTROLLER_NM"));
		}
		else
		{
			trace("처리할 EXCEL 정보가 없습니다.");
		}
		return;
	}

	// 요청 transaction 권한이 없는 경우
	var objApp = nexacro.getApplication();
	if( objApp.gdsReqMenuAuth.rowcount && objApp.gdsReqMenuAuth.getColumn(0, 'AUTH_YN') != 'Y' )
	{
		var authDiv	= objApp.gdsReqMenuAuth.getColumn(0, 'AUTH_DIV');
		var authYn 	= objApp.gdsReqMenuAuth.getColumn(0, 'AUTH_YN');
		
		if(authDiv.toUpperCase()!="ADMIN_YN") {
		
			var msgParam = '';
			switch(authDiv.toUpperCase())
			{
				case "READ_YN"			: msgParam = '조회'; break;
				case "WRITE_YN" 		: msgParam = '쓰기'; break;
				case "DELETE_YN"		: msgParam = '삭제'; break;
				case "SAVE_YN" 			: msgParam = '저장'; break;
				case "EXCL_DOWN_YN"		: msgParam = '엑셀다운로드'; break;
				case "REPORT_PRNT_YN"	: msgParam = '레포트출력'; break;
				case "FILE_UP_YN"		: msgParam = '파일첨부'; break;
			}
			var param = {id : "sppMenuAuthError", msg : '10006', arrparam:[msgParam]};
			Ex.core.error(this, param);
			objApp.gdsReqMenuAuth.clearData();
			return;
		}
	}

	// callback 실행
	this._gfnFormCallback(nErrorCode, sErrorMsg, sSvcId, sCallBackId);
}

pForm._gfnFormCallback = function(nErrorCode, sErrorMsg, sSvcId, sCallBack)
{
	if( Ex.isFunction(sCallBack) )
	{
		trace("Ex.isFunction sCallBack : [ " + sCallBack + "]");
		if(nErrorCode == -99998 && sSvcId != "sessCheck") return;
		sCallBack.call(this, sSvcId, nErrorCode, sErrorMsg);
	}
	else
	{
		trace("!Ex.isFunction sCallBack : [ " + sCallBack + "]");
		
		if( this[sCallBack] )
		{
			if(nErrorCode == -99998 && sSvcId != "sessCheck") return;
			this[sCallBack](sSvcId, nErrorCode, sErrorMsg);
		}
		else
		{
			trace("지정된 콜백함수가 선언되어 있지 않습니다.");
		}
	}
}

 /**
   * Excel을 Import하는 함수
   * @param  {form} oForm 폼 scope
   * @param  {string} sSheet 임포트할 시트명
   * @param  {string} ds 받을 데이타셋명
   * @return N/A
   * @description 
   *
   * @example
   *  this.importExcel(this,"head=sheet1A1B1;body=sheet1A2B2","DS_EXCEL");
   **/
pForm.fvImportObj;
pForm.gfnImportExcel = function(oForm, sSheet, ds, sImportID)
{
	if( Ex.isEmpty(sImportID) ) sImportID = ds+"_"+Ex.util.todayTime();
	var sSvcUrl = "svc_url::XImport" ;
	var xlsImport  = this.objects["_importExcel"];
	if( Ex.isEmpty(xlsImport) )
	{	
		this.fvImportObj = new nexacro.ExcelImportObject("_importExcel",oForm);
		this.addChild("_importExcel",this.fvImportObj);

		this.fvImportObj.set_importtype(nexacro.ImportTypes.EXCEL);
		this.fvImportObj.addEventHandler("onsuccess", this._importExcel_onsuccess, this);
		this.fvImportObj.addEventHandler("onerror", this._importExcel_onerror, this);
		this.fvImportObj.set_importurl(sSvcUrl);
	}
	this.fvImportObj.scope = oForm;
	this.fvImportObj.importID = sImportID;
	this.fvImportObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+ds+"=outDs]");
}
pForm.gfnImportExcelBySheet = function(oForm, oParam, sImportID)
{
   /* oParam 구성 샘플
	var oParam = {};
	oParam.dataset = [this.dsImport1 , this.dsImport2]; //  데이타셋객체지정필수
	oParam.sheet = ["Sheet1","Sheet2"]; // 시트명지정필수
	oParam.head = ["A1:G1","A1:D1"]; // []
	oParam.body = ["A2","A2"]; // []
	*/
	if( Ex.isEmpty(oParam) ) oParam = {};
	if( Ex.isEmpty(oParam.dataset) ) oParam.dataset = [];
	if( Ex.isEmpty(oParam.sheet) ) oParam.sheet = [];
	if( Ex.isEmpty(oParam.head) ) oParam.head = [];
	if( Ex.isEmpty(oParam.body) ) oParam.body = [];

	if( Ex.isEmpty(sImportID) ) sImportID = ds+"_"+Ex.util.todayTime();
	var sSvcUrl = "svc_url::XImport" ;
	var xlsImport  = this.objects["_importExcel"];
	if( Ex.isEmpty(xlsImport) )
	{	
		this.fvImportObj = new nexacro.ExcelImportObject("_importExcel",oForm);
		this.addChild("_importExcel",this.fvImportObj);

		this.fvImportObj.set_importtype(nexacro.ImportTypes.EXCEL );
		this.fvImportObj.addEventHandler("onsuccess", this._importExcel_onsuccess, this);
		this.fvImportObj.addEventHandler("onerror", this._importExcel_onerror, this);
		this.fvImportObj.set_importurl(sSvcUrl);
	}
	if( (oParam.dataset).length != (oParam.sheet).length ) {
		trace("dataset목록과 sheet목록 정보가 일치하지 않습니다.");
		return;
	}

	var strComand = "";
	var strDsInfo = "[";
	for(var i=0; i<(oParam.sheet).length; i++)
	{
		strComand += "[command=getsheetdata;output=output"+(i+1)+";head="+oParam.sheet[i]+"!"+(oParam.head[i]||'')+";body="+oParam.sheet[i]+"!"+(oParam.body[i]||'')+";]";
		strDsInfo += (oParam.dataset[i]).name+"=output"+(i+1)+" ";
		if( !oParam.dataset[i] )
			trace("데이타셋을 확인하세요.");
		else
			(oParam.dataset[i]).clearData();
	}
	strDsInfo = nexacro.trim(strDsInfo);
	strDsInfo += "]";
	
	this.fvImportObj.scope = oForm;
	this.fvImportObj.importID = sImportID;
	this.fvImportObj.importData("",strComand , strDsInfo ,"");
}
 /**
   * import Excel 성공시 callback
   * @param  {component} obj export object
   * @param  {event} e exportEventInfo object
   * @return N/A
   * @description 
   *  개발자는 반드시 this.fn_importCallback 고정함수를 사용해야 한다.
   * @example
   *  개발자 화면 코드
   *  this.fn_importCallback = function(bSuccess)
   *  { 
   *    if(bSuccess)
   *       trace(성공);
   *    else
   *       trace(실패);
   *  }
   **/   
pForm._importExcel_onsuccess = function(obj,  e)
{
	/*
	trace("  e.eventid : " +  e.eventid);
	trace("  e.fromobject : " +  e.fromobject);
	trace(" e.fromreferenceobject : " + e.fromreferenceobject);
	trace(" e.url : " + e.url);
	*/
	if( !Ex.isEmpty(e.url) )
	{
		var fileUrl = (e.url).split("/");
		var fileNm = fileUrl[fileUrl.length-1];
	}
	else
	{
		var fileNm = "";
	}
	// fnImportExcelCallback 인자로 true(성공)값을 넘긴다.
	if( this.fvImportObj.scope )
		if( this.fvImportObj.scope['fnImportExcelCallback'] ) this.fvImportObj.scope['fnImportExcelCallback'](true,this.fvImportObj.importID, fileNm);
}

 /**
   * import Excel 실패시 callback
   * @param  {component} obj export object
   * @param  {event} e exportEventInfo object
   * @return N/A
   * @description 
   *  개발자는 반드시 this.fn_importCallback 고정함수를 사용해야 한다.
   * @example
   *  개발자 화면 코드
   *  this.fn_importCallback = function(bSuccess)
   *  { 
   *    if(bSuccess)
   *       trace(성공);
   *    else
   *       trace(실패);
   *  }
   **/   
pForm._importExcel_onerror = function(obj,  e)
{
	/*
	trace(" =========== onerror event start============");
	trace(" e.eventid : " + e.eventid);
	trace(" e.errortype : " + e.errortype);
	trace(" e.fromobject : " + e.fromobject);
	trace(" e.fromreferenceobject : " + e.fromreferenceobject);
	trace(" e.statuscode : " + e.statuscode);
	trace(" e.errormsg  : " + e.errormsg);
	*/
	// fnImportExcelCallback 인자로 false(실패)값을 넘긴다.
	if( this.fvImportObj.scope )
		if(e.statuscode == -99998)
		{
			if(nexacro.getApplication().gvIsSessionOut == "N")
			{
				nexacro.getApplication().gvIsSessionOut = "Y";

				var alertbyMsgCallback = function(mid, varValue)
				{
					if(mid == "sppSessionOut") document.location.href = "/";
				};
				var param = {id : "sppSessionOut", msg : "10007", callbackfunc: alertbyMsgCallback};
				Ex.core.error(this, param);
			}
			return;
		}
		else
		{
			if( this.fvImportObj.scope['fnImportExcelCallback'] ) this.fvImportObj.scope['fnImportExcelCallback'](false,this.fvImportObj.importID);
		}
}
 /**
   * Grid를 Excel로 Export하는 함수
   * @param  {form} objForm 폼 scope
   * @param  {object} oInfo export할 정보
   * @return N/A
   * @description 
   *  objGrid : array로 만들고 그 요소는 그리드 콤퍼넌트
   *  exportType : XLS/XLSX/CSV 중 택일 미지정시 default:XLS
   * 	--- oInfo 구성정보 ---
   *	oInfo.Grid : 대상그리드 객체
   *	oInfo.FileNm : 출력파일명
   *	oInfo.Sheet : 출력 시트명
   *	oInfo.ExportType : XLS/XLSX/CSV 중 택일 미지정시 default:XLS
   *	oInfo.ExportId : fnExportExcelCallback 에서 반환받을 ExportId값
   * @example
   *  var oInfo = {
   *				Grid	: [ this.grd_check01,this.grd_userList] ,
   *				Sheet	: ['개발자','PMO'],
   *				FileNm	: "Sample07",
   *				ExportType : "XLS/XLSX/CSV",
   *				ExportId : "btnExport_onclick"
   *			};
   *  this.exportExcel(this, oInfo);
   **/ 
pForm.fvExportObj;
pForm.gfnExportExcel = function(objForm, oInfo)
{
	var objGrid			= oInfo.Grid;
	var gridFmt			= oInfo.FormatId;
	var sFileName		= oInfo.FileNm;
	var strSheet		= oInfo.Sheet;
	var exportType		= oInfo.ExportType;
	var exportId		= oInfo.ExportId;
	
	var controllerNm	= oInfo.Controller;
	var whereDs			= oInfo.Where;
	var formatId		= oInfo.formatId||'';
	
	var strType			= objGrid.toString().toUpperCase();
	var arrGrid			= new Array();
	var arrDataCond 	= new Array();

	var arrController	= new Array();
	var arrWhere		= new Array();
	var arrFormatId 	= new Array();

	//trace("[define]-pForm.gfnExportExcel strType:[" + strType + "]");

	if( Ex.util.getTypeof(objGrid) != "ARRAY" && strType == "[OBJECT GRID]" )
	{
		if( Ex.isEmpty(controllerNm) )	controllerNm = "";
		if( Ex.isEmpty(whereDs) )		whereDs = "";
		if( Ex.isEmpty(formatId) )		formatId = "";
		
		arrGrid = [objGrid];
		
		if( !Ex.isEmpty(controllerNm) )	arrController	= [controllerNm];
		if( !Ex.isEmpty(whereDs) )		arrWhere		= [whereDs];
		if( !Ex.isEmpty(formatId) )		arrFormatId 	= [formatId];
	}
	else
	{
		if( Ex.isEmpty(controllerNm) )	controllerNm	= new Array();
		if( Ex.isEmpty(whereDs) )		whereDs			= new Array();
		if( Ex.isEmpty(formatId) )		formatId		= new Array();
		
		arrGrid			= objGrid;
		arrController	= controllerNm;
		arrWhere		= whereDs;
		arrFormatId 	= formatId;
	}

	var strSeltype = new Array();
	for( var i=0; i<arrGrid.length; i++) 
	{
		var type = arrGrid[i].selecttype;
		strSeltype.push(type);
		arrGrid[i].set_selecttype("row");
	}

	var sSheetName;
	var TODAYTIME = Ex.util.todayTime();
	if(!Ex.isEmpty(sFileName))	sFileName =  sFileName + "_" + TODAYTIME;
	else						sFileName = TODAYTIME;
	sFileName = Ex.util.isValidateFileName(sFileName);

	//ExcelExportObject 초기화
	if( this.fvExportObj && this.fvExportObj instanceof ExcelExportObject)
	{
		this.fvExportObj.destroy();
		this.fvExportObj = null;
	}
	
	var expGrid = undefined;
	var expDs	= undefined;
	
	var sSvcUrl = "svc_url::XExportImport";
	if( arrController.length > 0 )	sSvcUrl = "svc_url::XExportQuery";

	var exportObj = new ExcelExportObject();

	if( exportType == "XLS" )		exportObj.set_exporttype(nexacro.ExportTypes.EXCEL);
	else if( exportType == "XLSX" )	exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	else if( exportType == "CSV" )	exportObj.set_exporttype(nexacro.ExportTypes.CSV);
	else							exportObj.set_exporttype(nexacro.ExportTypes.EXCEL);
	
	exportObj.set_exporturl(sSvcUrl);
	exportObj.set_exportfilename(sFileName);
	strSheet = Ex.isEmpty(strSheet) ? [] : strSheet;
	if( Ex.util.getTypeof(strSheet) != "ARRAY" ) strSheet = [strSheet];

	exportObj.scope		= objForm;
	exportObj.filename	= sFileName;
	exportObj.exportID	= exportId;

	var oGridFmtIdArr = [];
	console.log("pForm.gfnExportExcel() strType:[" + strType + "]");

	var lastSheet		= "";
	var controllerParam	= "";
	var whereParam		= "";
	var colInfoParam	= "";
	var paramVar		= "";

	if(strType == "[OBJECT GRID]")
	{
		sSheetName = (Ex.isEmpty(strSheet[0]) ? ('Sheet1') : strSheet[0]);
		sSheetName = Ex.util.isValidateSheetName(sSheetName);
		var sheetInfo = sSheetName + "!A1";

		if( sSvcUrl ==  "svc_url::XExportQuery")
		{
			if(!objForm["dsExpGrid"])
			{
				expDs = new Dataset;
				expDs.assign(arrGrid[0].getBindDataset());
				expDs.clearData();
				objForm.addChild("dsExpGrid", expDs);
			}
			
			if(!objForm["grdExpGrid"])
			{
				expGrid = new Grid("grdExpGrid", arrGrid[0].left, arrGrid[0].top, arrGrid[0].width, arrGrid[0].height, arrGrid[0].right, arrGrid[0].bottom);
				objForm.addChild("grdExpGrid", expGrid);
			}
			else
			{
				expGrid = arrGrid[0];
			}
			expGrid.set_visible(false);
			expGrid.set_formats(arrGrid[0].formats);
			expGrid.setBindDataset(expDs);
			expGrid.show();
		}
		else
		{
			expGrid = arrGrid[0];
		}

		expGrid.controllerNm	= arrController[0];
		expGrid.whereDs			= arrWhere[0];
		expGrid.excelFormatId	= arrFormatId[0];

		if( !Ex.isEmpty(expGrid.controllerNm) )
		{
			controllerParam = sheetInfo + "_CONTROLLERNM_=" + expGrid.controllerNm;
		}
		
		if( !Ex.isEmpty(expGrid.whereDs) )
		{
			whereParam	= "‡" + sheetInfo + "_WHEREPARAM_=";
			for(var i=0; i<expGrid.whereDs.colcount; i++)
			{
				whereParam = (i>0 ? "†" : "") + expGrid.whereDs.getColID(i) + "¶" + nexacro.base64Encode(expGrid.whereDs.getColumn(0, expGrid.whereDs.getColID(i)));
			}
		}
		
		var colInfo = "";
		
		if( sSvcUrl ==  "svc_url::XExportQuery")
		{
			for(var j=0; j<expGrid.getCellCount("body"); j++)
			{
				var colNm = (Ex.isEmpty(colInfo) ? "" : ",") + nexacro.replaceAll(expGrid.getCellProperty("body", j, "text"), "bind:", "");
				colInfo += colNm;
			}
			colInfoParam = "‡" + sheetInfo + "_COLINFO_=" + colInfo;
		}
		
		paramVar += controllerParam + whereParam + colInfoParam;

		oGridFmtIdArr.push(expGrid.formatid);	//원본 formatid 보관
		
		if( Ex.isEmpty(expGrid.excelFormatId) )
		{
			var rtn = String(expGrid.getFormatIdList()).toLowerCase().includes(expGrid.formatid + "_excel");
			if(rtn)	expGrid.set_formatid(expGrid.formatid + "_excel");
		}
		else
		{
			var rtn = String(expGrid.getFormatIdList()).toLowerCase().includes(expGrid.excelFormatId);
			if(rtn)	expGrid.set_formatid(expGrid.excelFormatId);
		}

		//trace("[IF] sheetInfo : " + sheetInfo);
		lastSheet = sheetInfo;
		
		//exportObj.addExportItem( nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1", "allband", "allrecord", "suppress", "allstyle", "none", "color", "both", [1, 5], "head" );
		exportObj.addExportItem(nexacro.ExportItemTypes.GRID, expGrid, sheetInfo, "allband", "allrecord", "suppress", "allstyle", "image", "none", "both", "[]");
	}
	else
	{
		for(var i=0; i<arrGrid.length; i++)
		{
			sSheetName = (Ex.isEmpty(strSheet[i]) ? ('Sheet' + (i+1)) : strSheet[i] );
			sSheetName = Ex.util.isValidateSheetName(sSheetName);
			var sheetInfo = sSheetName + "!A1";
			//trace("[ELSE] sheetInfo : " + sheetInfo);

			if( sSvcUrl ==  "svc_url::XExportQuery")
			{
				if(!objForm["dsExpGrid" + (i+1)])
				{
					expDs = new Dataset;
					expDs.assign(arrGrid[i].getBindDataset());
					expDs.clearData();
					objForm.addChild("dsExpGrid" + (i+1), expDs);
				}
				
				if(!objForm["grdExpGrid" + (i+1)])
				{
					expGrid = new Grid("grdExpGrid" + (i+1), arrGrid[i].left, arrGrid[i].top, arrGrid[i].width, arrGrid[i].height, arrGrid[i].right, arrGrid[i].bottom);
					expGrid.set_visible(false);
					expGrid.controllerNm	= arrController[i];
					expGrid.whereDs			= arrWhere[i];
					expGrid.excelFormatId	= arrFormatId[i];
					expGrid.set_formats(arrGrid[i].formats);

					if( !Ex.isEmpty(arrGrid[i].cssclass) )
					{
						expGrid.set_cssclass(arrGrid[i].cssclass);
					}
					expGrid.setBindDataset(expDs);
					objForm.addChild("grdExpGrid" + (i+1), expGrid);
					expGrid.show();
				}
				else
				{
					expGrid = arrGrid[i];
				}
			}
			else
			{
				expGrid = arrGrid[i];
			}

			arrGrid[i] = expGrid;
			
			if( !Ex.isEmpty(arrController) && arrController.length >= (i+1)) arrGrid[i].controllerNm = arrController[i];
			else arrGrid[i].controllerNm = "";
			
			if( !Ex.isEmpty(arrWhere) && arrWhere.length >= (i+1)) arrGrid[i].whereDs = arrWhere[i];
			else arrGrid[i].whereDs = "";
			
			if( !Ex.isEmpty(arrFormatId) && arrFormatId.length >= (i+1)) arrGrid[i].excelFormatId = arrFormatId[i];
			else arrGrid[i].excelFormatId = "";

			if( !Ex.isEmpty(arrGrid[i].controllerNm) )
			{
				controllerParam = (i>0 ? "‡" : "") + sheetInfo + "_CONTROLLERNM_=" + arrGrid[i].controllerNm;
			}

			if( !Ex.isEmpty(arrGrid[i].whereDs) )
			{
				whereParam = "‡" + sheetInfo + "_WHEREPARAM_=";
				
				for(var j=0; j<arrGrid[i].whereDs.colcount; j++)
				{
					whereParam += (j>0 ? "†" : "") + arrGrid[i].whereDs.getColID(j) + "¶" + arrGrid[i].whereDs.getColumn(0, arrGrid[i].whereDs.getColID(j));
				}
			}
			
			var colInfo = "";
			
			if( sSvcUrl ==  "svc_url::XExportQuery")
			{
				for(var j=0; j<arrGrid[i].getCellCount("body"); j++)
				{
					var colNm = (Ex.isEmpty(colInfo) ? "" : ",") + nexacro.replaceAll(arrGrid[i].getCellProperty("body", j, "text"), "bind:", "");
					colInfo += colNm;
				}
				colInfoParam = "‡" + sheetInfo + "_COLINFO_=" + colInfo;
			}

			paramVar +=  controllerParam + whereParam + colInfoParam;

			//trace("bf arrGrid[i].formatid : " + arrGrid[i].formatid);
			oGridFmtIdArr.push(arrGrid[i].formatid);	//원본 formatid 보관
			
			if( Ex.isEmpty(arrGrid[i].excelFormatId) )
			{
				var rtn = String(arrGrid[i].getFormatIdList()).toLowerCase().includes(arrGrid[i].formatid + "_excel");
				if(rtn)	arrGrid[i].set_formatid(arrGrid[i].formatid + "_excel");
			}
			else
			{
				var rtn = String(arrGrid[i].getFormatIdList()).toLowerCase().includes(arrGrid[i].excelFormatId);
				if(rtn)	arrGrid[i].set_formatid(arrGrid[i].excelFormatId);
			}

			//trace("af arrGrid[i].formatid : " + arrGrid[i].formatid);
			if(arrGrid.length - 1 == i)
			{
				lastSheet = sheetInfo;
			}

			//exportObj.addExportItem(nexacro.ExportItemTypes.GRID, arrGrid[i], sheetInfo, "allband", "allrecord", "nosuppress", "allstyle", "image", "", "both", "cellline");
			exportObj.addExportItem(nexacro.ExportItemTypes.GRID, arrGrid[i], sheetInfo, "allband", "allrecord", "suppress", "allstyle", "image", "none", "both", "[]");
		}
		
		trace("paramVar:\n" + paramVar);
		paramVar = nexacro.base64Encode(paramVar);
	}

	exportObj.set_exporteventtype("itemrecord"); // onprogress 이벤트와 export 상태 표시 방식에 대하여 지정하는 속성입니다
	exportObj.set_exportuitype("exportprogress");
	exportObj.set_exportmessageprocess("%d[%d/%d]");

	if(nexacro.getApplication().gvSelLangCd == 'KR')
	{
		exportObj.set_exportmessageready("준비중");
		exportObj.set_exportmessagecomplete("완료");
	}
	else
	{
		exportObj.set_exportmessageready("Ready");
		exportObj.set_exportmessagecomplete("Completed");
	}
	
	this.fvExportObj = exportObj;

	var _exportExcelCallback = function(obj, e)
	{
		//trace("_exportExcelCallback()~~~~~~~~~~~~~~~~~~ : " + e.eventid);
		for( var i=0; i<arrGrid.length; i++)
		{
			arrGrid[i].set_formatid(oGridFmtIdArr[i]);
			//arrGrid[i].set_selecttype(strSeltype[i]);
		}
		
		if(e.eventid == "onsuccess") this._exportExcel_onsuccess(obj, e);
		else if(e.eventid == "onerror") this._exportExcel_onerror(obj, e);
	}
	exportObj.addEventHandler("onsuccess", _exportExcelCallback, this);
	exportObj.addEventHandler("onerror", _exportExcelCallback, this);

	lastSheet = nexacro.replaceAll(lastSheet, " " , "");
	var rtn = exportObj.exportData("_LASTSHEET_=" + lastSheet + " PARAM=" + paramVar);
}

/**
* ExcelExport 성공시 callback
* @param  {component} obj export object
* @param  {event} e exportEventInfo object
* @return N/A
* @description 
*  개발자는 반드시 this.fn_exportCallback 고정함수를 사용해야 한다.
* @example
*  개발자 화면 코드
*  this.fn_exportCallback = function(bSuccess)
*  { 
*    if(bSuccess)
*       trace(성공);
*    else
*       trace(실패);
*  }
**/
pForm._exportExcel_onsuccess = function(obj, e)
{
	/*
	trace("  e.eventid : " +  e.eventid);
	trace("  e.fromobject : " +  e.fromobject);
	trace(" e.fromreferenceobject : " + e.fromreferenceobject);
	trace(" e.url : " + e.url);
	*/
	if( !Ex.isEmpty(e.url) )
	{
		var fileUrl = (e.url).split("/");
		var fileNm = fileUrl[fileUrl.length-1];
	}
	else
	{
		var fileNm = "";
	}

	// fn_exportCallback 인자로 true(성공)값을 넘긴다.
	if( this.fvExportObj.scope )
		if( this.fvExportObj.scope['fnExportExcelCallback'] ) this.fvExportObj.scope['fnExportExcelCallback'](true ,this.fvExportObj.exportID, fileNm);
}
 /**
   * ExcelExport 실패시 callback
   * @param  {component} obj export object
   * @param  {event} e exportEventInfo object
   * @return N/A
   * @description 
   *  개발자는 반드시 this.fn_exportCallback 고정함수를 사용해야 한다.
   * @example
   *  개발자 화면 코드
   *  this.fn_exportCallback = function(bSuccess)
   *  { 
   *    if(bSuccess)
   *       trace(성공);
   *    else
   *       trace(실패);
   *  }
   **/   
pForm._exportExcel_onerror = function(obj,e)
{
	/*
	trace("e.statuscode : " + e.statuscode);
	trace("e.errormsg : " + e.errormsg);
	trace("e.errortype : " + e.errortype);
	trace("  e.eventid : " +  e.eventid);
	trace("  e.fromobject : " +  e.fromobject);
	trace(" e.fromreferenceobject : " + e.fromreferenceobject);
	trace(" e.url : " + e.url);	
	*/
	// fn_exportCallback 인자로 false(실패)값을 넘긴다.
	if( this.fvExportObj.scope )
		if(e.statuscode == -99998)
		{
			if(nexacro.getApplication().gvIsSessionOut == "N")
			{
				nexacro.getApplication().gvIsSessionOut = "Y";

				var alertbyMsgCallback = function(mid, varValue)
				{
					if(mid == "sppSessionOut") document.location.href = "/";
				};
				var param = {id : "sppSessionOut", msg : "10007", callbackfunc: alertbyMsgCallback};
				Ex.core.error(this, param);
			}
			return;
		}
		else
		{
			if( this.fvExportObj.scope['fnExportExcelCallback'] ) this.fvExportObj.scope['fnExportExcelCallback'](false,this.fvExportObj.exportID);
		}
}

pForm._fnDownFileSearchCallBack = function(sSvcId, nErrorCode, sErrorMsg)
{
	trace("pForm.fnDownFileSearchCallBack()");
	// 에러메세지 처리
	if(nErrorCode < 0) 
	{
		var param = {id : "ERROR", msg : sSvcId + "::" + nErrorCode + "::" + sErrorMsg};
		Ex.core.error(pForm, param);
		return;
	}

	/**** 선택 전체 다운로드 ****/
	if(this._dsDownFommFile.rowcount > 0)
	{
		var _objFileDown = this.objects["_gFileDownTrans"];

		if(!_objFileDown)
		{
			_objFileDown = new nexacro.FileDownTransfer("_gFileDownTrans", this);
			this.addChild("_gFileDownTrans", _objFileDown);

			if(this._fileDownTransfer_onerror)
			{
				_objFileDown.addEventHandler("onerror", this._fileDownTransfer_onerror, this);
			}
			
			if(this._fileDownTransfer_onsuccess)
			{
				_objFileDown.addEventHandler("onsuccess", this._fileDownTransfer_onsuccess, this);
			}
		}		

		if(this._dsDownFommFile.rowcount > 0)
		{
			_objFileDown.set_downloadfilename(this._dsFileDownCond.getColumn(0, "ZIP_FILE_NM") + ".zip");
		}
		_objFileDown.setPostData("dsFileInfo", this._dsDownFommFile.saveXML());
		_objFileDown.download(nexacro.getEnvironment().services["svc_url"].url + "FommMultipart/downloadFiles");
	}
}

/***************************************
 * FileDownTransfer Event
 ***************************************/
pForm._fileDownTransfer_onerror = function(obj, e)
{
	trace("file download error");
	trace(e.statuscode);
	trace("error : " + e.eventid);
	trace("error : " + e.errormsg);
	
	if(e.statuscode == -99998)	// session out
	{	
		var alertbyMsgCallback = function(mid, varValue)
		{
			if(mid == "sppSessionOut") document.location.href = "/";
		};

		var param = {id : "sppSessionOut", msg : "Session이 종료 되었습니다.", callbackfunc: alertbyMsgCallback}	//'10006', arrparam:[msgParam]};
		Ex.core.error(this, param);
	}
};

pForm._fileDownTransfer_onsuccess = function(obj, e)
{
	trace("file download success");
	trace(e.targetfullpath);
};

//그리드 헤더 필터 ExpandUp Event
pForm._filterGridOnExpandUp = function(obj, e)	//obj:nexacro.Grid, e:nexacro.GridMouseEventInfo
{
	if(e.row > -1)	return;
	//trace("Ex.define pForm._filterGridOnExpandUp obj.id : " + obj.id);
	//Expand 버튼이 포함된 Cell 오브젝트 가져오기
	var objParent = e.fromobject.parent;
	
	//필터 설정정보 가져오기
	var objConfig = obj.config;
	
	//필터 팝업 컴포넌트 가져오기
	var objPopup = objConfig.filterpop;
	
	//팝업 사이즈 설정
	var objRect = obj.getCellRect(-1, e.cell);
	var nWidth = objParent.getOffsetWidth();	// + 24
	var nHeight = 311;	//215(5개) 143(2개)
	var nLeft = objRect.left;
	var nTop = objRect.top + objRect.height;
	
	//oncloseup시 필요한 정보를 사용자 속성으로 등록
	objPopup.targetGrid = obj;
	
	//팝업을 호출한 Col Index
	objPopup.colidx = e.col;
	
	//팝업을 호출한 Cell Index
	objPopup.cellidx = e.cell;
	
	//Cols정보를 다시 만드는 함수 호출
	//Ex.core.reMakeCols(obj);
	
	//필터 리스트 데이터셋 생성 함수 호출
	var expandImg = objPopup.targetGrid.getCellProperty("head", objPopup.colidx, "expandimage");
	
	//trace(objPopup.targetGrid.id + " objPopup.cellidx : " + objPopup.cellidx + " objPopup.colidx : " + objPopup.colidx + " expandimage : " + expandImg);

	/*
	if(expandImg == "theme://images/chk_WF_Popupmenu_O.png")
	{
		objPopup.form.fnMakeAllFilterDataset(obj, e.col, objConfig);
	}
	else
	{
		objPopup.form.fnMakeFilterDataset(obj, e.col, objConfig);
	}
	*/
	objPopup.form.fnMakeAllFilterDataset(obj, e.col, objConfig);
	
	/*
	trace("objPopup.getOwnerFrame().form.width : " + objPopup.getOwnerFrame().form.width);
	trace("objPopup.getOwnerFrame().form.height : " + objPopup.getOwnerFrame().form.height);
	trace("objPopup.getOwnerFrame().form.getOffsetWidth() : " + objPopup.getOwnerFrame().form.getOffsetWidth());
	trace("objPopup.getOwnerFrame().form.getOffsetHeight() : " + objPopup.getOwnerFrame().form.getOffsetHeight());
	trace("objPopup.getOwnerFrame().form.id : " + objPopup.getOwnerFrame().form.id);
	trace("objPopup.getOwnerFrame().form.vscrollbar.max : " + objPopup.getOwnerFrame().form.vscrollbar.max);
	trace("obj.parent.parent.id : " + obj.parent.parent.id +
		  " obj.parent.height : " +  obj.parent.height + " obj.parent.getOffsetHeight() : " + obj.parent.getOffsetHeight());
	*/

	var gridTop = obj.getOffsetTop();
	var remaHeight = obj.parent.getOffsetHeight() - gridTop;
	/*
	if(obj.getOffsetHeight() - objRect.height < nHeight)
	{
		if(obj.getOffsetTop() > nHeight)
		{
			nTop = -nHeight;
		}
		else
		{
			if(obj.getOffsetTop() >= 215)
			{
				nTop = -215;
				nHeight = 215;
			}
			else
			{
				nTop = -143;
				nHeight = 143;
			}
		}
	}
	trace("nTop : " + nTop + " objRect.top : " + objRect.top + " objRect.height : " + objRect.height + " gridTop : " + gridTop + " remaHeight : " + remaHeight);
	trace("objRect.top : " + objRect.top + " objRect.height : " + objRect.height + " nTop : " + nTop + " obj.top : " + obj.top + " obj.getOffsetTop() : " + obj.getOffsetTop())
	*/
	
	//필터 팝업 오픈
	//trace("nWidth :::: " + nWidth);
	
	if(nWidth < 150) nWidth = 150;
	
	//trace("before nLeft : " + nLeft + " nTop : " + nTop + " nWidth : " + nWidth + " nHeight : " + nHeight + " objPopup.getOwnerFrame().form.getOffsetWidth() : " + objPopup.getOwnerFrame().form.getOffsetWidth());
	
	if(objPopup.getOwnerFrame().form.getOffsetWidth() - 80 < nLeft + nWidth)
	{
		nLeft = nLeft - ( (nLeft + nWidth) - (objPopup.getOwnerFrame().form.getOffsetWidth() - 80) );
	}
	
	//trace("after nLeft : " + nLeft + " nTop : " + nTop + " nWidth : " + nWidth + " nHeight : " + nHeight);
	
	objPopup.trackPopupByComponent(obj, nLeft, nTop, nWidth, nHeight, "_closeFilterPopup");
	
	objPopup.form.edtSearch.set_value("");
	objPopup.form.edtSearch.setFocus();
}

/**
* @description 	      		: 필터 팝업 콜백 함수
* @param sId	  	  		: 콜백 Id
* @param objRtn	  	  		: 리턴 오브젝트
* @param objRtn.targetObj	: 팝업 컴포넌트
* @param objRtn.rtnValue	: 리턴 값 - apply : 설정, cancel : cnlth
* @return             		: 없음
*/
pForm._closeFilterPopup = function(sId, objRtn)
{
	var objPopDiv = objRtn.targetObj;
	var strRtnValue = objRtn.rtnValue;
		
	if(strRtnValue == "apply")
	{
		//팝업을 호출한 Col Index
		var nCol = objPopDiv.colidx;
		
		//팝업을 호출한 Cell Index
		var nCell = objPopDiv.cellidx;
		
		//팝업을 호출한 Grid 컴포넌트
		var objGrid = objPopDiv.targetGrid;
		
		//필터 설정 정보
		var objConfig = objGrid.config;
		
		//필터 문자열 만드는 함수 호출
		var sFilterValue = Ex.core.getFilterValue(objPopDiv);
		
		//trace("pForm._closeFilterPopup() sFilterValue : " + sFilterValue);
		
		//필터 문자열이 있는지 여부에 따라
		//expand버튼 이미지 변경(이미지 변경 필요!!)
		//trace("sFilterValue : " + sFilterValue);
		
		if(sFilterValue.length > 0)
		{
			//objGrid.setCellProperty("head", nCell, "expandimage", "theme://images/chk_WF_Popupmenu_O.png");
			objGrid.setCellProperty("head", nCell, "expandimage", "theme://images/gridFilter_S.png");
		}
		else 
		{
			//objGrid.setCellProperty("head", nCell, "expandimage", "theme://images/btn_WF_Grdexpand.png");
			objGrid.setCellProperty("head", nCell, "expandimage", "theme://images/gridFilter_D.png");
		}
		
		//해당 Cell 설정정보에 필터 문자열 저장
		objConfig.cols[nCell].value = sFilterValue;
		//trace("pForm._closeFilterPopup() nCol : " + nCol + " nCell : " + nCell + " sFilterValue : " + sFilterValue + " objConfig.cols[nCell].value : " + objConfig.cols[nCell].value);
		
		//필터 실행 함수 호출
		Ex.core.applyFilter(objGrid);
	}
}

pForm._setChangeDataSet = function(oForm, objComp, dsObj)
{
	if( !Ex.isEmpty(objComp.countDataset) ) 
	{
		var _dsCnt = objComp.getCountDataset();
		
		//trace("pForm._setChangeDataSet() dsObj : " + dsObj + " _dsCnt : " + _dsCnt);

		if( !Ex.isEmpty(dsObj) )
		{
			//trace("pForm._setChangeDataSet() !Ex.isEmpty(dsObj)");
			dsObj.stcCnt = objComp.id;
			dsObj.addEventHandler('onvaluechanged', this._dsStaticCountChange, this);
			
		}
		else
		{
			if(_dsCnt)
			{
				var index = objComp.getCountDataset().removeEventHandlerLookup("onvaluechanged", "_dsStaticCountChange", this);
				//trace("pForm._setChangeDataSet() index ::::::: " + index);
			}
		}
	}
}

pForm._dsStaticCountChange = function(obj, e) 
{
	//trace("pForm._dsStaticCountChange()~~~~~~~~~~~~~~");
	if(obj.stcCnt) 
	{
		var stcCnt = this.components[obj.stcCnt];
		if( Ex.isEmpty(stcCnt) )
			return;
		
		stcCnt.set_cssclass('sta_WF_grdCnt');
		
		var strCnt = "";
		//if(Ex.util.getSession('gvSelLangCd') == "KR")
			strCnt = '(' + (obj.rowcount||0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + '건)';
		//else
		//	strCnt = '(Count : ' + (obj.rowcount||0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ')';

		var objStaticSize = nexacro.getTextSize(strCnt, stcCnt._getCurrentStyleInheritValue("font"));
		
		stcCnt.set_width(objStaticSize.nx + 40);
		stcCnt.set_text(strCnt);
	}
};
//---------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------form common function ----------------------------------------------------