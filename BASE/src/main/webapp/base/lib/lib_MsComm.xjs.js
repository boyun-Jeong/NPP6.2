//XJS=lib_MsComm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * 함수명		: selectCompanyInfo
         * 설명 		: 검색에서 사용할 업체정보를 설정한다.
         * params
        	- formObj		: 호출한 Form Object
        	- searchType   	: 조회 Type ("ID" : 업체코드로 검색, "NM" : 업체명으로 검색, "NUM" : 사업자번호로 검색, "ALL" : 업체코드, 업체명, 사업자번호로 OR 검색)
        	- searchText	: 검색할 문자열
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 	: None
         */
        this.selectCompanyInfo = function(formObj, searchType, searchText, callBackFunc)
        {
        	trace("[lib::lib_MsComm.xjs] this.selectCompanyInfo시 searchType:[" + searchType + "] searchText:[" + searchText + "]");
        	var rtnObj = new Object();
        	rtnObj["ROWCOUNT"] = 0;
        	rtnObj["_SEARCH_TYPE"] = searchType;
        	rtnObj["_SEARCH_TEXT"] = searchText;

        	if( Ex.isEmpty(searchType) ||  (searchType != "ID" && searchType != "NM" && searchType != "NUM" && searchType != "ALL") )
        	{
        		trace("[lib::lib_MsComm.xjs] selectCompanyInfo시 searchType[조회타입] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
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

        	if(searchType == "ID")
        	{
        		if(dsSearchCond.colinfos["COMPANY_ID"] != "[object DSColumnInfo]")
        		{
        			dsSearchCond.addColumn("COMPANY_ID", "string");
        		}
        	}
        	else if(searchType == "NM" || searchType == "NUM" || searchType == "ALL")
        	{
        		if(dsSearchCond.colinfos["SEARCH_TYPE"] != "[object DSColumnInfo]")
        		{
        			dsSearchCond.addColumn("SEARCH_TYPE", "string");
        		}

        		if(dsSearchCond.colinfos["SEARCH_TEXT"] != "[object DSColumnInfo]")
        		{
        			dsSearchCond.addColumn("SEARCH_TEXT", "string");
        		}
        	}

        	dsSearchCond.clearData();

        	if( Ex.isEmpty(searchText) )
        	{
        		//formObj.removeChild("_dsSearchCond", dsSearchCond);

        		trace("[lib::lib_MsComm.xjs] selectCompanyInfo시 searchText[검색할 문자열] 함수 인자값이 입력되지 조회를 실행하지 않습니다.");

        		if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        		{
        			callBackFunc.call(this, rtnObj);
        		}
        		else
        		{
        			trace("[lib::lib_MsComm.xjs] selectCompanyInfo시 callBackFunc에 대한 함수 인자값이 callBackFunc 호출을 하지 않습니다.");
        		}
        		return;
        	}
        	else
        	{
        		var aRow = dsSearchCond.addRow();

        		dsSearchCond.setColumn(aRow, "USE_YN", "Y");

        		if(searchType == "ID")
        		{
        			dsSearchCond.setColumn(aRow, "COMPANY_ID", searchText);
        		}
        		else if(searchType == "NM")
        		{
        			dsSearchCond.setColumn(aRow, "SEARCH_TYPE", "3");
        			dsSearchCond.setColumn(aRow, "SEARCH_TEXT", searchText);
        		}
        		else if(searchType == "NUM")
        		{
        			dsSearchCond.setColumn(aRow, "SEARCH_TYPE", "1");
        			dsSearchCond.setColumn(aRow, "SEARCH_TEXT", searchText);
        		}
        		else if(searchType == "ALL")
        		{
        			dsSearchCond.setColumn(aRow, "SEARCH_TYPE", "4");
        			dsSearchCond.setColumn(aRow, "SEARCH_TEXT", searchText);
        		}
        	}

        	var outDataset;

        	if(!formObj._dsOutCompany)
        	{
        		outDataset = new Dataset;
        		outDataset.set_name("_dsOutCompany");
        		formObj.addChild("_dsOutCompany", outDataset);
        	}
        	else
        	{
        		outDataset = formObj._dsOutCompany;
        	}

        	outDataset.clearData();

        	//trace(dsSearchCond.saveXML());

        	var sTranId = "selectCompanyInfo";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "MS0500W/select01";			// 서비스명
            var sInDs = "dsCond=_dsSearchCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "_dsOutCompany=dsCompanyList";	// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.callService(this, sTranId, sService, sInDs, sOutDs, sArg, "__selectCompanyInfoCallback");

        	if(! formObj.__selectCompanyInfoCallback)
        	{
        		formObj.__selectCompanyInfoCallback = function(sSvcId, nErrorCode, sErrorMsg)
        		{
        			//trace("[lib::lib_MsComm.xjs] __selectCompanyInfoCallback() " + sSvcId + "::" + nErrorCode + "::" + sErrorMsg);
        			//trace("[lib::lib_MsComm.xjs] __selectCompanyInfoCallback() outDataset.rowcount : " + outDataset.rowcount);
        			//trace(outDataset.saveXML());

        			rtnObj["ROWCOUNT"] = outDataset.rowcount;
        			rtnObj["COMPANY_INFO"] = "";

        			for(var i=0; i<outDataset.colcount; i++)	rtnObj[outDataset.getColID(i)] = "";

        			if(outDataset.rowcount == 1)
        			{
        				for(var i=0; i<outDataset.colcount; i++)
        				{
        					rtnObj[outDataset.getColID(i)] = outDataset.getColumn(0, outDataset.getColID(i));
        				}
        				rtnObj["COMPANY_INFO"] = this.getCompanyInfoToolTipText(outDataset);
        			}

        			if(sSvcId == "selectCompanyInfo")
        			{
        				if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        				{
        					callBackFunc.call(formObj, rtnObj);
        				}
        			}
        		}
        	}
        }

        this.getCompanyInfoToolTipText = function(dsCompanyObj)
        {
        	var strType = dsCompanyObj.toString().toUpperCase();

        	//trace("[lib::lib_MsComm.xjs] getCompanyInfoToolTipText() strType : " + strType);
        	if(strType != "[OBJECT DATASET]")
        	{
        		trace("[lib::lib_MsComm.xjs] getCompanyInfoToolTipText시 dsCompanyObj 대한 함수 인자값이 Dataset Object가 아닙니다.");
        	}

        	if(dsCompanyObj.rowcount == 0)
        	{
        		trace("[lib::lib_MsComm.xjs] getCompanyInfoToolTipText시 dsCompanyObj 데이터 row가 존재하지 않습니다.");
        		return "";
        	}
        	else
        	{
        		var textCompanyInfo = "업체코드 :  " + (dsCompanyObj.getColumn(0, "COMPANY_ID") || "") + "\r\n";
        		textCompanyInfo	+= "업 체 명 :  " + (dsCompanyObj.getColumn(0, "COMPANY_NM") || "") + "\r\n";

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "CO_REG_NUM")) )
        		{
        			textCompanyInfo	+= "사업자번호 :  " + (dsCompanyObj.getColumn(0, "CO_REG_NUM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "CORP_NO")) )
        		{
        			textCompanyInfo	+= "법인등록번호 :  " + (dsCompanyObj.getColumn(0, "CORP_NO") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "CORP_CEO_NM")) )
        		{
        			textCompanyInfo	+= "대표자명 :  " + (dsCompanyObj.getColumn(0, "CORP_CEO_NM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "CO_M_TEL_NUM")) )
        		{
        			textCompanyInfo	+= "회사대표번호 : " + (dsCompanyObj.getColumn(0, "CO_M_TEL_NUM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "SALES_U_NM")) )
        		{
        			textCompanyInfo	+= "영업대표명        : " + (dsCompanyObj.getColumn(0, "SALES_U_NM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "SALES_U_HP_NUM")) )
        		{
        			textCompanyInfo	+= "영업대표휴대전화 : " + (dsCompanyObj.getColumn(0, "SALES_U_HP_NUM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "SALES_U_TEL_NUM")) )
        		{
        			textCompanyInfo	+= "영업대표전화      : " + (dsCompanyObj.getColumn(0, "SALES_U_TEL_NUM") || "") + "\r\n";
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "SALES_U_EAMIL_NM")) )
        		{
        			textCompanyInfo	+= "영업대표 E-MAIL   : " + (dsCompanyObj.getColumn(0, "SALES_U_EAMIL_NM") || "");
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "CO_ADDR_NM")) )
        		{
        			textCompanyInfo	+= "회사주소          : " + (dsCompanyObj.getColumn(0, "CO_ADDR_NM") || "");
        		}

        		if( !Ex.isEmpty(dsCompanyObj.getColumn(0, "CO_ADDR_NM")) && !Ex.isEmpty(dsCompanyObj.getColumn(0, "CO_POST_NUM")) )
        		{
        			textCompanyInfo	+= "우편번호          : " + (dsCompanyObj.getColumn(0, "CO_POST_NUM") || "");
        		}
        		return textCompanyInfo;
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
