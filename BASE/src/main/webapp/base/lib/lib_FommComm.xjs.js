//XJS=lib_FommComm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * 함수명		: selectUserDeptInfo
         * 설명 		: 검색에서 사용할 부서정보를 설정한다.
         * params
        	- formObj		: 호출한 Form Object
        	- searchType   	: 조회 Type ("ID" : USER_ID로 검색, "NM" : USER_NM으로 검색, "ID_NM" : USER_ID와 USER_NM으로 OR 검색)
        	- searchText	: 검색할 문자열
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
        	- userType		: 1:[직원], 4:[상주외주], 3:[개발외주], 7:[위탁외주] ( ASIS CODE[30027] )
        	- useYn			: 퇴사자 검색 여부
         * return Type 	: None
         */
        this.selectUserDeptInfo = function(formObj, searchType, searchText, callBackFunc, userType, useYn)
        {
        	trace("[lib::lib_FommComm.xjs] this.selectUserDeptInfo() searchType:[" + searchType + "] searchText:[" + searchText + "]");
        	var rtnObj = new Object();
        	rtnObj["ROWCOUNT"] = 0;
        	rtnObj["_SEARCH_TYPE"] = searchType;
        	rtnObj["_SEARCH_TEXT"] = searchText;

        	if( Ex.isEmpty(searchType) ||  (searchType != "ID" && searchType != "NM" && searchType != "ID_NM") )
        	{
        		trace("[lib::lib_FommComm.xjs] searchType[조회타입] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}

        	var dsSearchCond;

        	if(!formObj._dsSearchCond)
        	{
        		dsSearchCond = new Dataset;
        		dsSearchCond.set_name("_dsSearchCond");
        		formObj.addChild("_dsSearchCond", dsSearchCond);
        	}
        	else
        	{
        		dsSearchCond = formObj._dsSearchCond
        	}

        	var searchColumn = "";

        	if(searchType == "ID")			searchColumn = "USER_ID";
        	else if(searchType == "NM")		searchColumn = "USER_NM";
        	else if(searchType == "ID_NM")	searchColumn = "USER_ID_NM";
        	dsSearchCond.addColumn(searchColumn, "string");
        	dsSearchCond.addColumn("USER_TYPE", "string");
        	dsSearchCond.addColumn("USER_YN", "string");
        	dsSearchCond.clearData();

        	if( userType == "undefined"  )
        	{
        			userType = "";
        	}
        	if( useYn == "undefined"  )
        	{
        			useYn = "";
        	}
        //	trace("userType =============================== " + userType);
        	if( Ex.isEmpty(searchText) )
        	{
        		//formObj.removeChild("_dsSearchCond", dsSearchCond);

        		trace("[lib::lib_FommComm.xjs] selectUserDeptInfo searchText[검색할 문자열] 함수 인자값이 입력되지 조회를 실행하지 않습니다.");

        		if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        		{
        			callBackFunc.call(this, rtnObj);
        		}
        		else
        		{
        			trace("[lib::lib_FommComm.xjs] selectUserDeptInfo시 callBackFunc에 대한 함수 인자값이 callBackFunc 호출을 하지 않습니다.");
        		}
        		return;
        	}
        	else
        	{
        		var aRow = dsSearchCond.addRow();
        		dsSearchCond.setColumn(aRow, searchColumn, searchText);
        		if(!Ex.isEmpty(userType))	dsSearchCond.setColumn(aRow, "USER_TYPE", userType);
        		if(!Ex.isEmpty(useYn)) 		dsSearchCond.setColumn(aRow, "USE_YN", useYn);
        	}

        	var outDataset;

        	if(!formObj._dsOutUser)
        	{
        		outDataset = new Dataset;
        		outDataset.set_name("_dsOutUser");
        		formObj.addChild("_dsOutUser", outDataset);
        	}
        	else
        	{
        		outDataset = formObj._dsOutUser;
        	}

        	outDataset.clearData();

        	if(! formObj.__selectUserDeptCallback)
        	{
        		formObj.__selectUserDeptCallback = function(sSvcId, nErrorCode, sErrorMsg)
        		{
        			trace("[lib::lib_FommComm.xjs] __selectUserDeptCallback() " + sSvcId + "::" + nErrorCode + "::" + sErrorMsg);
        			trace("[lib::lib_FommComm.xjs] __selectUserDeptCallback() outDataset.rowcount : " + outDataset.rowcount);
        			trace(outDataset.saveXML());

        			rtnObj["USER_INFO"] = "";

        			for(var i=0; i<outDataset.colcount; i++)	rtnObj[outDataset.getColID(i)] = "";
        			rtnObj["ROWCOUNT"] = outDataset.rowcount;

        			if(outDataset.rowcount == 1)
        			{
        				for(var i=0; i<outDataset.colcount; i++)
        				{
        					rtnObj[outDataset.getColID(i)] = outDataset.getColumn(0, outDataset.getColID(i));
        				}
        				rtnObj["USER_INFO"] = this.getUserInfoToolTipText(outDataset);
        			}

        			if(sSvcId == "selectUserDeptInfo")
        			{
        				if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        				{
        					callBackFunc.call(formObj, rtnObj);
        				}
        			}
        		}
        	}

        	var sTranId = "selectUserDeptInfo";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0110W/select01";		// 서비스명
            var sInDs = "dsCond=_dsSearchCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "_dsOutUser=dsFommUserMt";		// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.callService(this, sTranId, sService, sInDs, sOutDs, sArg, "__selectUserDeptCallback");
        }

        this.getUserInfoToolTipText = function(dsUserObj)
        {
        	var strType = dsUserObj.toString().toUpperCase();

        	//trace("[lib::lib_FommComm.xjs] getUserInfoToolTipText() strType : " + strType);
        	if(strType != "[OBJECT DATASET]")
        	{
        		trace("[lib::lib_FommComm.xjs] getUserInfoToolTipText시 dsUserObj에 대한 함수 인자값이 Dataset Object가 아닙니다.");
        	}
        	if(dsUserObj.rowcount == 0)
        	{
        		trace("[lib::lib_FommComm.xjs] getUserInfoToolTipText시 dsUserObj 데이터 row가 존재하지 않습니다.");
        		return "";
        	}
        	else
        	{
        		var textUserInfo = "사　번 :  " + (dsUserObj.getColumn(0, "USER_ID") || "") + "\r\n";
        		textUserInfo	+= "이　름 :  " + (dsUserObj.getColumn(0, "USER_NM") || "") + "\r\n";

        		if( !Ex.isEmpty(dsUserObj.getColumn(0, "POS_NM")) )
        		{
        			textUserInfo	+= "직　명 :  " + (dsUserObj.getColumn(0, "POS_NM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsUserObj.getColumn(0, "CO_NM")) )
        		{
        			textUserInfo	+= "소　속 :  " + (dsUserObj.getColumn(0, "CO_NM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsUserObj.getColumn(0, "DEPT_NM")) )
        		{
        			textUserInfo	+= "부　서 :  " + (dsUserObj.getColumn(0, "DEPT_NM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsUserObj.getColumn(0, "MOBILE_NUM")) )
        		{
        			textUserInfo	+= "핸드폰 :  " + (dsUserObj.getColumn(0, "MOBILE_NUM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsUserObj.getColumn(0, "TELNUM")) )
        		{
        			textUserInfo	+= "전  화 :  " + (dsUserObj.getColumn(0, "TELNUM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsUserObj.getColumn(0, "EMAIL_ADR")) )
        		{
        			textUserInfo	+= "E-MAIL :  " + (dsUserObj.getColumn(0, "EMAIL_ADR") || "");
        		}
        		return textUserInfo;
        	}
        }


        /*
         * 함수명		: selectDeptInfo
         * 설명 		: 검색에서 사용할 부서정보를 설정한다.
         * params
        	- formObj		: 호출한 Form Object
        	- searchType   	: 조회 Type ("CD" : DEPT_CD로 검색, "NM" : DEPT_NM으로 검색, "CD_NM" : DEPT_CD와 DEPT_NM으로 OR 검색)
        	- searchText	: 검색할 문자열
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 	: None
         */
        this.selectDeptInfo = function(formObj, searchType, searchText, callBackFunc)
        {
        	trace("[lib::lib_FommComm.xjs] this.selectDeptInfo() searchType:[" + searchType + "] searchText:[" + searchText + "]");
        	var rtnObj = new Object();
        	rtnObj["ROWCOUNT"] = 0;
        	rtnObj["_SEARCH_TYPE"] = searchType;
        	rtnObj["_SEARCH_TEXT"] = searchText;

        	if( Ex.isEmpty(searchType) ||  (searchType != "CD" && searchType != "NM" && searchType != "CD_NM") )
        	{
        		trace("[lib::lib_FommComm.xjs] searchType[조회타입] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}

        	var dsSearchCond;

        	if(!formObj._dsSearchCond)
        	{
        		dsSearchCond = new Dataset;
        		dsSearchCond.set_name("_dsSearchCond");
        		formObj.addChild("_dsSearchCond", dsSearchCond);
        	}
        	else
        	{
        		dsSearchCond = formObj._dsSearchCond
        	}

        	var searchColumn = "";

        	if(searchType == "CD")			searchColumn = "DEPT_CD";
        	else if(searchType == "NM")		searchColumn = "DEPT_NM";
        	else if(searchType == "CD_NM")	searchColumn = "DEPT_CD_NM";

        	if( Ex.isEmpty(dsSearchCond.colinfos["DEPT_STATUS"]) )
        	{
        		dsSearchCond.addColumn("DEPT_STATUS", "string");
        	}

        	if( Ex.isEmpty(dsSearchCond.colinfos["GBN"]) )
        	{
        		if( !Ex.isEmpty(this.upGbn) )
        		{
        			dsSearchCond.addColumn("GBN", "string");
        		}
        	}

        	if( Ex.isEmpty(dsSearchCond.colinfos[searchColumn]) )
        	{
        		dsSearchCond.addColumn(searchColumn, "string");
        	}

        	dsSearchCond.clearData();

        	if( Ex.isEmpty(searchText) )
        	{
        		//formObj.removeChild("_dsSearchCond", dsSearchCond);

        		trace("[lib::lib_FommComm.xjs] selectDeptInfo searchText[검색할 문자열] 함수 인자값이 입력되지 조회를 실행하지 않습니다.");

        		if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        		{
        			callBackFunc.call(this, rtnObj);
        		}
        		else
        		{
        			trace("[lib::lib_FommComm.xjs] selectDeptInfo시 callBackFunc에 대한 함수 인자값이 callBackFunc 호출을 하지 않습니다.");
        		}
        		return;
        	}
        	else
        	{

        		var aRow = dsSearchCond.addRow();
        		dsSearchCond.setColumn(aRow, searchColumn, searchText);
        		dsSearchCond.setColumn(aRow, "DEPT_STATUS", this.deptStatus);
        		dsSearchCond.setColumn(aRow, "GBN", Ex.isEmpty(this.upGbn) ? "" : this.upGbn); //그룹추가
        	}

        	var outDataset;
        	if(!formObj._dsOutDept)
        	{
        		outDataset = new Dataset;
        		outDataset.set_name("_dsOutDept");
        		formObj.addChild("_dsOutDept", outDataset);
        	}
        	else
        	{
        		outDataset = formObj._dsOutDept;
        	}

        	outDataset.clearData();

        	if(! formObj.__selectDeptCallback)
        	{
        		formObj.__selectDeptCallback = function(sSvcId, nErrorCode, sErrorMsg)
        		{
        			//trace("[lib::lib_FommComm.xjs] __selectDeptCallback() " + sSvcId + "::" + nErrorCode + "::" + sErrorMsg);
        			//trace("[lib::lib_FommComm.xjs] __selectDeptCallback() outDataset.rowcount : " + outDataset.rowcount);
        			//trace(outDataset.saveXML());

        			rtnObj["DEPT_INFO"] = "";

        			for(var i=0; i<outDataset.colcount; i++)	rtnObj[outDataset.getColID(i)] = "";
        			rtnObj["ROWCOUNT"] = outDataset.rowcount;

        			if(outDataset.rowcount == 1)
        			{
        				for(var i=0; i<outDataset.colcount; i++)
        				{
        					rtnObj[outDataset.getColID(i)] = outDataset.getColumn(0, outDataset.getColID(i));
        				}
        				rtnObj["DEPT_INFO"] = this.getDeptInfoToolTipText(outDataset);
        			}

        			if(sSvcId == "selectDeptInfo")
        			{
        				if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        				{
        					callBackFunc.call(formObj, rtnObj);
        				}
        			}
        		}
        	}

        	var sTranId = "selectDeptInfo";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0000P/select04";	// 서비스명
            var sInDs = "dsCond=_dsSearchCond";		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "_dsOutDept=dsDept";		// 서버에서 수신할 데이타셋
            var sArg = "";							// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.callService(this, sTranId, sService, sInDs, sOutDs, sArg, "__selectDeptCallback");
        }

        this.getDeptInfoToolTipText = function(dsDeptObj)
        {
        	var strType = dsDeptObj.toString().toUpperCase();

        	//trace("[lib::lib_FommComm.xjs] getDeptInfoToolTipText() strType : " + strType);
        	if(strType != "[OBJECT DATASET]")
        	{
        		trace("[lib::lib_FommComm.xjs] getDeptInfoToolTipText시 dsDeptObj에 대한 함수 인자값이 Dataset Object가 아닙니다.");
        	}
        	if(dsDeptObj.rowcount == 0)
        	{
        		trace("[lib::lib_FommComm.xjs] getDeptInfoToolTipText시 dsDeptObj 데이터 row가 존재하지 않습니다.");
        		return "";
        	}
        	else
        	{
        		var textDeptInfo = "부서코드 :  " + (dsDeptObj.getColumn(0, "DEPT_CD") || "") + "\r\n";
        		textDeptInfo	+= "부 서 명 :  " + (dsDeptObj.getColumn(0, "DEPT_NM") || "") + "\r\n";
        		return textDeptInfo;
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
