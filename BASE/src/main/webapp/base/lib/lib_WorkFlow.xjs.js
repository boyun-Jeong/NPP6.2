//XJS=lib_WorkFlow.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
          * 특정 요청서 양식(WF_REQ_TMPLAT_MT) 조회
          * @param {string} tmplatId	: 요청서 양식 ID
          * @param {string} tmplatVer 	: 요청서 양식 버전
          * @return null
          * @description
          *
          **/
        this.wffnSearchWfTmplat = function(tmplatId, tmplatVer, reqId)
        {
        	if( Ex.isEmpty(tmplatId) )
        	{
        		trace('tmplatId Empty');
        		if( Ex.isEmpty(reqId) )	return;
        	}

        	if( Ex.isEmpty(reqId) )	reqId = '';

        	if( Ex.isEmpty(tmplatVer) )	tmplatVer = '';

        	if( !this.wfdsReqTmplatMt )	this.wfdsReqTmplatMt = new Dataset();

        	if( this.wfDsReqWfProc )	this.wfDsReqWfProc.clearData();
        	else						this.wfdsReqWfProc = new Dataset();

        	if( this.wfdsReqCgerDt )	this.wfdsReqCgerDt.clearData();
        	else						this.wfdsReqCgerDt = new Dataset();

        	var sTranId = "wffnSearchWfTmplat";
            var sService = "WF0120W/selectProc";
            var sInDs = "";
            var sOutDs = "wfdsReqTmplatMt=dsWfReqTmplatMt wfdsReqWfProc=dsWfReqTmplatProcDt wfdsReqCgerDt=dsWfReqCgerDt";

            var sArg = "tmplatId='" + tmplatId + "' tmplatVer='" + tmplatVer + "' reqId='" + reqId + "'";
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg, this.wffnCallback);
        }

        /**
          * 특정 요청서 양식(WF_REQ_TMPLAT_MT) 조회 Callback
          * @param 	: 	fncallback과 동일
          * @return 	fncallback과 동일
          * @description
          *
          **/
        this.wffnCallback = function(sSvcId, nErrorCode, sErrorMsg)
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
        		case "wffnSearchWfTmplat" :
        			//this.wffnParseProcToDataset(this.wfdsReqTmplatMt.getColumn(0, 'REQ_WF_PROC')||'');
        			break;
        	}

        	if(this.fnCallback)	this.fnCallback('wfInfoCompleted', nErrorCode, sErrorMsg);
        }

        /**
          * 조회한 요청서 양식의 워크플로우 문자열(REQ_WF_PROC) 데이터를
        	this.wfDsReqWfProc 데이터셋으로 변환
          * @param {string}	strWfProc	: REQ_WF_PROC 	// 워크플로우 단계 문자열
          * @return {dataset}	wfdsReqWfProc
          * @description
          *	this.wfdsReqWfProc 컬럼 정보
          *		 WF_PROC_CD		: 워크플로우단계코드
          *		,WF_PROC_NM		: 워크플로우단계명
          *		,SEQ			: 워크플로우단계 순번 (rowposition+1)
          *		,URL			: 서브화면URL
          *		,SCREEN_RTRN	: 화면 반려시 단계
          *		,SKIP_YN		: 화면 스킵 가능 여부
          *		,SKIP_OPT		: 화면 스킵 조건
          *		,CGER_TYPE_CD	: 담당자유형코드 (01: 사용자선택 담당자, 02: 조건지정 담당자, null: 미사용)
          *		,CGER_NM		: 담당자 표기명
          *		,JAVA_SVC_NM	: 담당자 조회 자바 서비스명(담당자(조건지정)시)
          *		,FUNC			: 워크플로우 기능코드
          *		,FUNC_NM		: 워크플로우 기능코드명
          *		,RTRN			: 워크플로우 기능(결재,검토) 사용 시 반려할 경우 이동 워크플로우단계코드
          *		,RVER_CNT		: 워크플로우기능(검토) 사용 시 다음 단계 진행을 위한 총 검토 수
          **/
        this.wffnParseProcToDataset = function(strWfProc)
        {
        	if( Ex.isEmpty(strWfProc) ) {
        		trace('strWfProc Empty');
        		return;
        	}
        	trace('wffnParseProcToDataset strWfProc :: ' );
        	trace(strWfProc);
        	// ready dataset
        	if( this.wfDsReqWfProc ) {
        		this.wfDsReqWfProc.clearData();
        	}
        	else {
        		this.wfdsReqWfProc = new Dataset();
        		this.wfdsReqWfProc.addColumn("SEQ", 			"string", 256);
        		this.wfdsReqWfProc.addColumn("WF_PROC_CD", 		"string", 256);
        		this.wfdsReqWfProc.addColumn("WF_PROC_NM", 		"string", 256);
        		this.wfdsReqWfProc.addColumn("URL",				"string", 256);
        		this.wfdsReqWfProc.addColumn("SCREEN_RTRN",		"string", 256);
        		this.wfdsReqWfProc.addColumn("SKIP_YN", 		"string", 256);
        		this.wfdsReqWfProc.addColumn("SKIP_OPT", 		"string", 256);
        		this.wfdsReqWfProc.addColumn("CGER_TYPE_CD",	"string", 256);
        		this.wfdsReqWfProc.addColumn("CGER_NM", 		"string", 256);
        		this.wfdsReqWfProc.addColumn("JAVA_SVC_NM",		"string", 256);
        		this.wfdsReqWfProc.addColumn("FUNC", 			"string", 256);
        		this.wfdsReqWfProc.addColumn("FUNC_NM", 		"string", 256);
        		this.wfdsReqWfProc.addColumn("RTRN", 			"string", 256);
        		this.wfdsReqWfProc.addColumn("RVER_CNT", 		"string", 256);
        	}

        	// 검토자 카운트
        	var sIdx = strWfProc.indexOf('RVER_CNT');
        	var arrRverCnt = strWfProc.substring(sIdx, strWfProc.length).split(":")[1];
        	arrRverCnt = arrRverCnt.substring(1, arrRverCnt.length-1).split(',');

        	var sIdx 	= strWfProc.indexOf('ARR_WF_PROC_CD');
        	var eIdx 	= strWfProc.indexOf('RVER_CNT');
        	strWfProc = strWfProc.substring(sIdx, eIdx-1);

        	var sIdx 	= strWfProc.indexOf('[');
        	var eIdx 	= strWfProc.lastIndexOf(']');
        	strWfProc = strWfProc.substring(sIdx+1, eIdx);

        	// define variable
        	var WF_PROC_CD,		WF_PROC_NM,
        		URL,			SCREEN_RTN,
        		SKIP_YN,		SKIP_OPT,
        		CGER, 			CGER_NM,
        		FUNC, 			FUNC_NM,
        		JAVA_SVC_NM,
        		RTRN;
        	var sIdx = -1, eIdx = -1;

        	while(true)
        	{
        		if(strWfProc.length < 1)
        			break;

        		var rowPos = this.wfdsReqWfProc.addRow();
        		this.wfdsReqWfProc.setColumn(rowPos, 'SEQ', rowPos+1);

        		// WF_PROC_CD
        		sIdx 	= 0;
        		eIdx 	= strWfProc.indexOf(':');
        		var WF_PROC_CD_NM = strWfProc.substring(sIdx, eIdx);
        		WF_PROC_CD 	= WF_PROC_CD_NM.substring(0, WF_PROC_CD_NM.indexOf('('));
        		WF_PROC_NM	= WF_PROC_CD_NM.substring(WF_PROC_CD_NM.indexOf('(|')+2, WF_PROC_CD_NM.indexOf('|)'));
        		this.wfdsReqWfProc.setColumn(rowPos, 'WF_PROC_CD', WF_PROC_CD);
        		this.wfdsReqWfProc.setColumn(rowPos, 'WF_PROC_NM', WF_PROC_NM);

        		strWfProc = strWfProc.substr(eIdx, strWfProc.length);

        		// option
        		sIdx = strWfProc.indexOf('{');
        		eIdx = strWfProc.indexOf('}');
        		var optStr = strWfProc.substr(sIdx, eIdx);
        		strWfProc = strWfProc.substring(eIdx+2, strWfProc.length);

        		// URL
        		URL = optStr.substring(optStr.indexOf('URL:')+4, optStr.indexOf(',SCREEN_RTRN'))||'';
        		this.wfdsReqWfProc.setColumn(rowPos, 'URL', URL);

        		// SCREEN_RTRN
        		SCREEN_RTRN = optStr.substring(optStr.indexOf('SCREEN_RTRN:')+12, optStr.indexOf(',SKIP_YN'))||'';
        		this.wfdsReqWfProc.setColumn(rowPos, 'SCREEN_RTRN', SCREEN_RTRN);

        		// SKIP_YN
        		SKIP_YN = optStr.substring(optStr.indexOf('SKIP_YN:')+8, optStr.indexOf(',SKIP_OPT'))||'';
        		this.wfdsReqWfProc.setColumn(rowPos, 'SKIP_YN', SKIP_YN);

        		// SKIP_OPT
        		SKIP_OPT = optStr.substring(optStr.indexOf('SKIP_OPT:')+9, optStr.indexOf(',CGER'))||'';
        		this.wfdsReqWfProc.setColumn(rowPos, 'SKIP_OPT', SKIP_OPT);

        		// CGER_TYPE_CD
        		optStr = optStr.substring(optStr.indexOf('CGER_TYPE_CD'), optStr.length);
        		CGER_TYPE_CD = optStr.substring(optStr.indexOf('CGER_TYPE_CD'), optStr.indexOf(',')).split(":")[1]||'';
        		if( Ex.isEmpty(CGER_TYPE_CD) ) {
        			this.wfdsReqWfProc.setColumn(rowPos, 'CGER_TYPE_CD', '');
        			this.wfdsReqWfProc.setColumn(rowPos, 'CGER_NM', '');
        		}
        		else {
        			this.wfdsReqWfProc.setColumn(rowPos, 'CGER_TYPE_CD', CGER_TYPE_CD);
        			CGER_NM = optStr.substring(optStr.indexOf('CGER_NM'), optStr.indexOf(',FUNC')).split(":")[1]||'';
        			this.wfdsReqWfProc.setColumn(rowPos, 'CGER_NM', CGER_NM);
        		}

        		// FUNC
        		optStr = optStr.substring(optStr.indexOf('FUNC'), optStr.length);
        		FUNC = optStr.substring(optStr.indexOf('FUNC'), optStr.indexOf(',')).split(":")[1]||'';
        		if( Ex.isEmpty(FUNC) ) {
        			this.wfdsReqWfProc.setColumn(rowPos, 'FUNC', '');
        			this.wfdsReqWfProc.setColumn(rowPos, 'FUNC_NM', '');
        		}
        		else {
        			this.wfdsReqWfProc.setColumn(rowPos, 'FUNC', FUNC);
        			FUNC_NM = optStr.substring(optStr.indexOf('FUNC_NM'), optStr.indexOf(',RTRN')).split(":")[1]||'';
        			this.wfdsReqWfProc.setColumn(rowPos, 'FUNC_NM', FUNC_NM);
        		}

        		// RTRN
        		optStr = optStr.substring(optStr.indexOf('RTRN'), optStr.length);
        		var rtrn = optStr.substring(optStr.indexOf('RTRN'), optStr.length-1).split(":")[1]||'';
        		this.wfdsReqWfProc.setColumn(rowPos, 'RTRN', rtrn);

        		// RVER_CNT
        		this.wfdsReqWfProc.setColumn(rowPos, 'RVER_CNT', arrRverCnt[rowPos]);
        	}


        	if( Ex.isFunction(this.fnCallback))
        	{
        		this.fnCallback("wfInfoCompleted");
        	}

        	return this.wfdsReqWfProc;
        }


        /**
          * 해당 WF_PROC_CD의 옵션에 따른 값 return
          * @param {string}	WF_PROC_CD	: 기준이되는 워크플로우단계
          * @param {string}	optStr		: 'PRE:이전단계, NEXT:다음단계, CUR(defualt):현재단계
          * @return {object}	rtn
          * @description
          *	var rtn = {
          *		 WF_PROC_CD	: 워크플로우단계코드
          *		,WF_PROC_NM	: 워크플로우단계명
          *		,SEQ		: 워크플로우단계 순번
          *		,URL		: 서브화면URL
          *		,SCREEN_RTRN: 화면 반려시 단계
          *		,SKIP_YN	: 화면 스킵 가능 여부
          *		,SKIP_OPT	: 화면 스킵 조건
          *		,CGER_TYPE_CD	: 담당자유형코드 (01: 사용자선택 담당자, 02: 조건지정 담당자, null: 미사용)
          *		,CGER_NM	: 담당자 표기명
          *		,FUNC		: 워크플로우 기능코드
          *		,FUNC_NM	: 워크플로우 기능코드명
          *		,RTRN		: 워크플로우 기능(결재,검토) 사용 시 반려할 경우 이동 워크플로우단계코드
          *		,RVER_CNT	: 워크플로우기능(검토) 사용 시 다음 단계 진행을 위한 총 검토 수
          *	};
          **/
        this.wffnGetOptByWfProcCd = function(WF_PROC_CD, optStr)
        {
        	if( Ex.isEmpty(this.wfdsReqWfProc) ) {
        		return;
        	}

        	if( Ex.isEmpty(WF_PROC_CD) ) 	return;
        	if( Ex.isEmpty(optStr) )	optStr = '';

        	if( this.wfdsReqWfProc.rowcount == 0 )
        		return;

        	var rtn;
        	var rowPos = this.wfdsReqWfProc.findRow('WF_PROC_CD', WF_PROC_CD);
        	if( rowPos < 0 ) {
        		trace('해당 WF_PPOC_CD가 없습니다');
        	}

        	switch( optStr.toUpperCase() )
        	{
        		case "NEXT" :
        			if(rowPos == this.wfdsReqWfProc.rowcount-1) {
        				trace('다음 WF_PROC_CD가 없습니다');
        			}
        			rowPos++;
        			break;

        		case "CUR" :
        		default :
        			break;
        	}

        	rtn = {
        		 WF_PROC_CD			: this.wfdsReqWfProc.getColumn(rowPos, 'WF_PROC_CD')||''
        		,WF_PROC_NM			: this.wfdsReqWfProc.getColumn(rowPos, 'WF_PROC_NM')||''
        		,NEXT_WF_PROC_CD	: this.wffnGetNextProcCd(WF_PROC_CD)||''
        		,SEQ				: this.wfdsReqWfProc.getColumn(rowPos, 'SEQ')||''
        		,URL				: this.wfdsReqWfProc.getColumn(rowPos, 'URL')||''
        		,SCREEN_RTRN		: this.wfdsReqWfProc.getColumn(rowPos, 'SCREEN_RTRN')||''
        		,SKIP_YN			: this.wfdsReqWfProc.getColumn(rowPos, 'SKIP_YN')||''
        		,SKIP_OPT			: this.wfdsReqWfProc.getColumn(rowPos, 'SKIP_OPT')||''
        		,CGER_TYPE_CD		: this.wfdsReqWfProc.getColumn(rowPos, 'CGER_TYPE_CD')||''
        		,CGER_NM			: this.wfdsReqWfProc.getColumn(rowPos, 'CGER_NM')||''
        		,FUNC				: this.wfdsReqWfProc.getColumn(rowPos, 'FUNC')||''
        		,FUNC_NM			: this.wfdsReqWfProc.getColumn(rowPos, 'FUNC_NM')||''
        		,RTRN				: this.wfdsReqWfProc.getColumn(rowPos, 'RTRN')||''
        		,RVER_CNT			: this.wfdsReqWfProc.getColumn(rowPos, 'RVER_CNT')||''
        	};

        	return rtn;
        }

        this.wffnGetNextProcCd = function(WF_PROC_CD)
        {
        	if( Ex.isEmpty(WF_PROC_CD) ) {
        		trace('WF_PROC_CD empty');
        		return;
        	}

        	var rowPos = this.wfdsReqWfProc.findRow('WF_PROC_CD', WF_PROC_CD);
        	if(rowPos < 0 )	{
        		trace('cannot find row; ' + WF_PROC_CD);
        		return;
        	}

        	if( rowPos == this.wfdsReqWfProc.rowcount-1 ) {	// 마지막 row면 return
        		trace(WF_PROC_CD + ' is last proc');
        		return;
        	}

        	var arrNextWfProcCd = new Array();
        	for(var i = rowPos + 1; i < this.wfdsReqWfProc.rowcount; i++)
        	{
        		var skipYn = this.wfdsReqWfProc.getColumn(i, 'SKIP_YN')||'N';
        		arrNextWfProcCd.push(this.wfdsReqWfProc.getColumn(i, 'WF_PROC_CD'));
        		if(skipYn != 'Y')
        			break;
        	}

        	return arrNextWfProcCd;
        }

        /**
          * 조회한 요청서 양식 옵션 전체 dataset을 return한다
          * @param
          * @return {dataset}	wfdsReqWfProc
          * @description
          *	this.wfdsReqWfProc 컬럼 정보
          *		 WF_PROC_CD		: 워크플로우단계코드
          *		,WF_PROC_NM		: 워크플로우단계명
          *		,SEQ			: 워크플로우단계 순번 (rowposition+1)
          *		,URL			: 서브화면URL
          *		,SCREEN_RTRN	: 화면 반려시 단계
          *		,SKIP_YN		: 화면 스킵 가능 여부
          *		,SKIP_OPT		: 화면 스킵 조건
          *		,CGER_TYPE_CD	: 담당자유형코드 (01: 사용자지정, 02: 조건지정, null: 미사용)
          *		,CGER_NM		: 담당자 표기명
          *		,FUNC			: 워크플로우 기능코드
          *		,FUNC_NM		: 워크플로우 기능코드명
          *		,RTRN			: 워크플로우 기능(결재,검토) 사용 시 반려할 경우 이동 워크플로우단계코드
          *		,RVER_CNT		: 워크플로우기능(검토) 사용 시 다음 단계 진행을 위한 총 검토 수
          **/
        this.wffnGetOptDsByWfProcCd = function()
        {
        	if( Ex.isEmpty(this.wfdsReqWfProc) )
        		return;
        	if( this.wfdsReqWfProc.rowcount == 0 )
        		return;

        	return this.wfdsReqWfProc;
        }


        /**
          * 조회한 요청서 양식의 담당자를 dataset에 제공한다.
          * @param {object} oParam : 담당자 dataset copy를 위한 option 객체
          * @return null
          * @description
          *  oParam = {
          *  	wfProcCd	: 공통코드 상위코드명 (Ex: 'YN_CD')
          *  	optStr		: ''/'NO' : 추가없음;
        					  'ALL'   : '- 전체 -' 추가;
        					  'SEL'   : '- 선택 -' 추가;
          *  	filter		: 개발자 정의 filterstr 추가	( Ex: "SEQ == '1'" )
          *  	objDs		: 공통코드를 복사할 datset 객체( Ex: this.dsCgerDt )
          *	 }
          */
        this.wffnGetCger = function(oParam)
        {
        	var wfProcCd	= oParam.wfProcCd||'';	// 단계
        	var optStr		= oParam.optStr||'';	// 옵션
        	var filter 		= oParam.filter||'';	// 필터
        	var objDs		= oParam.objDs||'';		// 코드 받을 dataset

        	// oParam이 배열인 경우 재호출
        	if( Ex.isArray(wfProcCd) )
        	{
        		if(oParam.wfProcCd.length > 0)
        		{
        			for(var i = 0; i < oParam.wfProcCd.length; i++)
        			{
        				var objParam = {
        					 wfProcCd 	: oParam.wfProcCd[i]||''
        					,optStr	 	: oParam.optStr[i]||''
        					,filter		: oParam.filter[i]||''
        					,objDs	 	: oParam.objDs[i]||''
        				}
        				this.wffnGetCger(objParam);
        			}
        			return;
        		}
        	}

        	// default value
        	if( Ex.isEmpty(objDs) ) {
        		trace('objDs null');
        		return;
        	}
        	if( Ex.isEmpty(filter) )	filter	= '';


        	// 던져줄 dataset data setting
        	var dsTemp = new Dataset();
        	var filterStr = '';
        	dsTemp.copyData(this.wfdsReqCgerDt, false);

        	// 검토자 뺴고 담당자만 강제 filter 처리
        	filterStr += "WF_FUNC_CD=='" + "WF_FUNC_04" + "'";
        	// 단계 필터
        	if( !Ex.isEmpty(wfProcCd) )	filterStr += " && WF_PROC_CD=='" + wfProcCd + "'";
        	// 개발자 정의 filter 추가
        	if( !Ex.isEmpty(filter) )	filterStr += (" && (" + filter + ")");

        	// return dataset copy
        	dsTemp.set_filterstr(filterStr);
        	objDs.copyData(dsTemp, true);
        	dsTemp.set_filterstr("");

        	// optStr 추가
        	switch(optStr)
        	{
        		case "" :	case "NO" :
        			break;

        		case "ALL" :
        			rowPos = objDs.insertRow(0);
        			objDs.setColumn(rowPos, 'USER_ID', '');
        			objDs.setColumn(rowPos, 'USER_NM', '- ' + Ex.core.word("전체") + ' -');
        			break;

        		case "SEL" :
        			rowPos = objDs.insertRow(0);
        			objDs.setColumn(rowPos, 'USER_ID', '');
        			objDs.setColumn(rowPos, 'USER_NM', '- ' + Ex.core.word("선택") + ' -');
        			break;
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
