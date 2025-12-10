//XJS=lib_PjComm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * 함수명		: setSubPjtList
         * 설명 		: Main Project에 해당하는 Sub Project 목록을 Combo나 Dataset으로 리턴한다.
         * params
        	- formObj		: 호출한 Form Object
        	- mainPjtId   	: Main Project ID
        	- Object	   	: 셋팅할 Combo Object 또는 Dataset Object
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 		: InnerDataset Setting or Dataset
         */
        this.setSubPjtList = function(formObj, mainPjtId, obj, callBackFunc)
        {
        	trace("[lib::lib_PjComm.xjs] this.setSubPjtList() mainPjtId:[" + mainPjtId + "]");

        	/*
        	if( Ex.isEmpty(mainPjtId) )
        	{
        		trace("[lib::lib_PjComm.xjs] setSubPjtList() mainPjtId[Main Project ID] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}
        	*/

        	var strType;

        	if( Ex.isEmpty(obj) )
        	{
        		trace("[lib::lib_PjComm.xjs] setSubPjtList() obj 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}
        	else
        	{
        		strType = obj.toString().toUpperCase();

        		if(strType != "[OBJECT DATASET]" && strType != "[OBJECT COMBO]")
        		{
        			trace("[lib::lib_PjComm.xjs] setSubPjtList() obj 함수 인자는 [Combo Object] 또는 [Dataset Object]만 지정 가능합니다.");
        			return;
        		}
        	}

        	this.selectSubProjectList(formObj, mainPjtId,
        		function(outDataset)
        		{
        			//trace("[lib::lib_PjComm.xjs] setSubPjtList() outDataset.rowcount : " + outDataset.rowcount);
        			//trace("strType : " + strType);

        			if(strType == "[OBJECT DATASET]")
        			{
        				obj.assign(outDataset);
        			}
        			else if(strType == "[OBJECT COMBO]")
        			{
        				obj.set_innerdataset(outDataset);
        				obj.set_codecolumn("PJT_ID");
        				obj.set_datacolumn("PJT_NAME");
        			}

        			if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        			{
        				callBackFunc.call(formObj);
        			}
        		}
        	);
        }

        /*
         * 함수명		: selectSubProjectList
         * 설명 		: Main Project에 해당하는 Sub Project 목록을 조회한다.
         * params
        	- formObj		: 호출한 Form Object
        	- mainPjtId   	: Main Project ID
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 	: Callback Func [Dataset]
         */
        this.selectSubProjectList = function(formObj, mainPjtId, callBackFunc)
        {
        	trace("[lib::lib_PjComm.xjs] this.selectSubProjectList() mainPjtId:[" + mainPjtId + "]");

        	/*
        	if( Ex.isEmpty(mainPjtId) )
        	{
        		trace("[lib::lib_PjComm.xjs] selectSubProjectList() mainPjtId[Main Project ID] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}
        	*/

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

        	if(dsSearchCond.colinfos["PARENT_ID"] != "[object DSColumnInfo]")
        	{
        		dsSearchCond.addColumn("PARENT_ID", "string");
        	}

        	dsSearchCond.clearData();

        	dsSearchCond.addRow();
        	dsSearchCond.setColumn(0, "PARENT_ID", mainPjtId);

        	var outDataset;

        	if(!formObj._dsOutSubProject)
        	{
        		outDataset = new Dataset;
        		outDataset.set_name("_dsOutSubProject");
        		formObj.addChild("_dsOutSubProject", outDataset);
        	}
        	else
        	{
        		outDataset = formObj._dsOutSubProject;
        	}

        	outDataset.clearData();

        	//trace(dsSearchCond.saveXML());

        	var sTranId = "selectSubPjtInfo";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJ0000W/selectSubPjtInfo";			// 서비스명
            var sInDs = "dsCond=_dsSearchCond";					// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "_dsOutSubProject=dsSubProject";	// 서버에서 수신할 데이타셋
            var sArg = "";										// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.callService(this, sTranId, sService, sInDs, sOutDs, sArg, "__selectSubPjtInfoCallback");

        	if( !formObj.__selectSubPjtInfoCallback)
        	{
        		formObj.__selectSubPjtInfoCallback = function(sSvcId, nErrorCode, sErrorMsg)
        		{
        			//trace("[lib::lib_PjComm.xjs] __selectSubPjtInfoCallback() " + sSvcId + "::" + nErrorCode + "::" + sErrorMsg);
        			//trace("[lib::lib_PjComm.xjs] __selectSubPjtInfoCallback() outDataset.rowcount : " + outDataset.rowcount);
        			//trace(outDataset.saveXML());
        			if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        			{
        				callBackFunc.call(formObj, outDataset);
        			}
        		}
        	}
        }

        /*
         * 함수명		: setSubPjtList
         * 설명 		: 기본 설정된 프로젝트 정보로 상세정보를 조회한다.
         * params
        	- formObj		: 호출한 Form Object
        	- mainPjtId   	: Main Project ID
        	- Object	   	: 셋팅할 Combo Object 또는 Dataset Object
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 		: InnerDataset Setting or Dataset
         */
        this.setProjectBiz = function(formObj, subPjtId, obj, callBackFunc)
        {
        	//trace("[lib::lib_PjComm.xjs] this.setProjectBiz() subPjtId:[" + subPjtId + "]");

        	/*
        	if( Ex.isEmpty(subPjtId) )
        	{
        		trace("[lib::lib_PjComm.xjs] setProjectBiz() subPjtId[Sub Project ID] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}
        	*/

        	var strType;

        	if( Ex.isEmpty(obj) )
        	{
        		trace("[lib::lib_PjComm.xjs] setProjectBiz() obj 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}
        	else
        	{
        		strType = obj.toString().toUpperCase();

        		if(strType != "[OBJECT DATASET]" && strType != "[OBJECT COMBO]")
        		{
        			trace("[lib::lib_PjComm.xjs] setProjectBiz() obj 함수 인자는 [Combo Object] 또는 [Dataset Object]만 지정 가능합니다.");
        			return;
        		}
        	}

        	this.selectProjectBiz(formObj, subPjtId,
        		function(outDataset)
        		{
        			//trace("[lib::lib_PjComm.xjs] setSubPjtList() outDataset.rowcount : " + outDataset.rowcount);
        			//trace("strType : " + strType);

        			if(strType == "[OBJECT DATASET]")
        			{
        				obj.assign(outDataset);
        			}
        			else if(strType == "[OBJECT COMBO]")
        			{
        				obj.set_innerdataset(outDataset);
        				obj.set_codecolumn("BIZ_ID");
        				obj.set_datacolumn("BIZ_NAME");
        			}

        			if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        			{
        				callBackFunc.call(formObj);
        			}
        		}
        	);
        }

        /*
         * 함수명		: selectProjectBiz
         * 설명 		: 프로젝트 상세정보를 조회한다.
         * params
        	- formObj		: 호출한 Form Object
        	- mainPjtId   	: Main Project ID
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 	: Callback Func [Dataset]
         */
        this.selectProjectBiz = function(formObj, subPjtId, callBackFunc)
        {
        	//trace("[lib::lib_PjComm.xjs] this.selectProjectBiz() subPjtId:[" + subPjtId + "]");

        	/*
        	if( Ex.isEmpty(subPjtId) )
        	{
        		trace("[lib::lib_PjComm.xjs] selectProjectBiz() subPjtId[Sub Project ID] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}
        	*/

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

        	if(dsSearchCond.colinfos["PJT_ID"] != "[object DSColumnInfo]")
        	{
        		dsSearchCond.addColumn("PJT_ID", "string");
        	}

        	dsSearchCond.clearData();

        	dsSearchCond.addRow();
        	dsSearchCond.setColumn(0, "PJT_ID", subPjtId);

        	var outDataset;

        	if(!formObj._dsOutBiz)
        	{
        		outDataset = new Dataset;
        		outDataset.set_name("_dsOutBiz");
        		formObj.addChild("_dsOutBiz", outDataset);
        	}
        	else
        	{
        		outDataset = formObj._dsOutBiz;
        	}

        	outDataset.clearData();

        	//trace(dsSearchCond.saveXML());

        	var sTranId = "selectProjectBiz";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJ0000W/selectProjectBiz";	// 서비스명
            var sInDs = "dsCond=_dsSearchCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "_dsOutBiz=dsBiz";				// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.callService(this, sTranId, sService, sInDs, sOutDs, sArg, "__selectProjectBizCallback");

        	if( !formObj.__selectProjectBizCallback)
        	{
        		formObj.__selectProjectBizCallback = function(sSvcId, nErrorCode, sErrorMsg)
        		{
        			//trace("[lib::lib_PjComm.xjs] __selectProjectBizCallback() " + sSvcId + "::" + nErrorCode + "::" + sErrorMsg);
        			//trace("[lib::lib_PjComm.xjs] __selectProjectBizCallback() outDataset.rowcount : " + outDataset.rowcount);
        			//trace(outDataset.saveXML());
        			//trace("callBackFunc:[" + callBackFunc + "]");
        			if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        			{
        				callBackFunc.call(formObj, outDataset);
        			}
        		}
        	}
        }

        /*
         * 함수명		: setPjtWBSLvlList
         * 설명 		: Main Project에 해당하는 WBS 레벨 목록을 Combo나 Dataset으로 리턴한다.
         * params
        	- formObj		: 호출한 Form Object
        	- mainPjtId   	: Main Project ID
        	- Object	   	: 셋팅할 Combo Object 또는 Dataset Object
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 		: InnerDataset Setting or Dataset
         */
        this.setPjtWBSLvlList = function(formObj, mainPjtId, obj, callBackFunc)
        {
        	trace("[lib::lib_PjComm.xjs] this.setPjtWBSLvlList() mainPjtId:[" + mainPjtId + "]");

        	if( Ex.isEmpty(mainPjtId) )
        	{
        		trace("[lib::lib_PjComm.xjs] setPjtWBSLvlList() mainPjtId[Main Project ID] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}

        	var strType;

        	if( Ex.isEmpty(obj) )
        	{
        		trace("[lib::lib_PjComm.xjs] setPjtWBSLvlList() obj 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
        		return;
        	}
        	else
        	{
        		strType = obj.toString().toUpperCase();

        		if(strType != "[OBJECT DATASET]" && strType != "[OBJECT COMBO]")
        		{
        			trace("[lib::lib_PjComm.xjs] setPjtWBSLvlList() obj 함수 인자는 [Combo Object] 또는 [Dataset Object]만 지정 가능합니다.");
        			return;
        		}
        	}

        	this.selectPjtWBSLvlList(formObj, mainPjtId,
        		function(outDataset)
        		{
        			//trace("[lib::lib_PjComm.xjs] setPjtWBSLvlList() outDataset.rowcount : " + outDataset.rowcount);
        			//trace("strType : " + strType);

        			if(strType == "[OBJECT DATASET]")
        			{
        				obj.assign(outDataset);
        			}
        			else if(strType == "[OBJECT COMBO]")
        			{
        				obj.set_innerdataset(outDataset);
        				obj.set_codecolumn("LVL");
        				obj.set_datacolumn("NAME");
        			}

        			if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        			{
        				callBackFunc.call(formObj);
        			}
        		}
        	);
        }

        /*
         * 함수명		: selectPjtWBSLvlList
         * 설명 		: Main Project에 해당하는 WBS 레벨 목록을 조회한다.
         * params
        	- formObj		: 호출한 Form Object
        	- mainPjtId   	: Main Project ID
        	- callBackFunc	: 조회 완료 후 호출받을 FormObj 내의 함수 객체
         * return Type 	: Callback Func [Dataset]
         */
        this.selectPjtWBSLvlList = function(formObj, mainPjtId, callBackFunc)
        {
        	trace("[lib::lib_PjComm.xjs] this.selectPjtWBSLvlList() mainPjtId:[" + mainPjtId + "]");

        	if( Ex.isEmpty(mainPjtId) )
        	{
        		trace("[lib::lib_PjComm.xjs] selectPjtWBSLvlList() mainPjtId[Main Project ID] 함수 인자값이 올바르지 않아 조회를 실행할 수 없습니다.");
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

        	if(dsSearchCond.colinfos["PARENT_ID"] != "[object DSColumnInfo]")
        	{
        		dsSearchCond.addColumn("PARENT_ID", "string");
        	}

        	dsSearchCond.clearData();

        	dsSearchCond.addRow();
        	dsSearchCond.setColumn(0, "PARENT_ID", mainPjtId);

        	var outDataset;

        	if(!formObj._dsOutWbsLvl)
        	{
        		outDataset = new Dataset;
        		outDataset.set_name("_dsOutWbsLvl");
        		formObj.addChild("_dsOutWbsLvl", outDataset);
        	}
        	else
        	{
        		outDataset = formObj._dsOutWbsLvl;
        	}

        	outDataset.clearData();

        	//trace(dsSearchCond.saveXML());

        	var sTranId = "selectPjtWBSLvlInfo";			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "PJ0000W/selectPjtWBSLvlInfo";	// 서비스명
            var sInDs = "dsCond=_dsSearchCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "_dsOutWbsLvl=dsOutWbsLvl";		// 서버에서 수신할 데이타셋
            var sArg = "";									// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.callService(this, sTranId, sService, sInDs, sOutDs, sArg, "__selectPjtWBSLvlInfoCallback");

        	if(! formObj.__selectPjtWBSLvlInfoCallback)
        	{
        		formObj.__selectPjtWBSLvlInfoCallback = function(sSvcId, nErrorCode, sErrorMsg)
        		{
        			//trace("[lib::lib_PjComm.xjs] __selectPjtWBSLvlInfoCallback() " + sSvcId + "::" + nErrorCode + "::" + sErrorMsg);
        			//trace("[lib::lib_PjComm.xjs] __selectPjtWBSLvlInfoCallback() outDataset.rowcount : " + outDataset.rowcount);
        			//trace(outDataset.saveXML());
        			if(callBackFunc != null && callBackFunc != "undefined" && callBackFunc != "")
        			{
        				callBackFunc.call(formObj, outDataset);
        			}
        		}
        	}
        }

        /* 인자로 넣은 row의 최하위 레벨의 자식 노드의 row값을 구해서 리턴한다.
           자식이 없는 경우는 인자로 넣은 row가 그대로 리턴된다.
        */
        this.fnGetLastChildRow = function(grdObj, chkRow)
        {
        	var dsObj = grdObj.getBindDataset();
        	var pWbsCode = String(dsObj.getColumn(chkRow, "WBS_CODE") || '');	//ChkRow에 해당하는 WBS CODE값
        	var pWbsCodeLen	= pWbsCode.length;									//ChkRow에 해당하는 WBS CODE값의 길이

        	//ChkRow가 단말 Row 인지여부를 체크
        	var isLeafNode = grdObj.isTreeLeafRow(chkRow, true);

        	if(isLeafNode)	//단말노드인 경우
        	{
        		trace ("this.fnGetLastChildRow() chkRow ::: " + chkRow);
        		return	chkRow;	//chkRow값을 다시 리턴
        	}
        	else
        	{
        		var lastChildRow;		//인자로 넣은 row의 최하위 레벨의 자식 노드 row값을 구해서 담을 변수
        		var loopRow = chkRow;	//초기 Loop를 시작할 row를 설정

        		while(loopRow > -1)
        		{
        			loopRow = dsObj.findRowExpr("WBS_CODE.substr(" + 0 + ", " + pWbsCodeLen + ") == '" + pWbsCode + "'", loopRow + 1);
        			if(loopRow > -1)	lastChildRow = loopRow;
        		}
        		trace ("this.fnGetLastChildRow() lastChildRow ::: " + lastChildRow);
        		return lastChildRow;
        	}
        }

        this.fnSetTempDragDataList = function(grdObj, dsTmpObj, dragRow, dropRow)
        {
        	var dsObj = grdObj.getBindDataset();
        	var dragEndRow = this.fnGetLastChildRow(grdObj, dragRow);

        	trace("this.fnSetTempDragDataList() dragRow : " + dragRow + " dragEndRow : " + dragEndRow + " dropRow : " + dropRow);

        	dsTmpObj.assign(dsObj);
        	dsTmpObj.clearData();

        	//Drag 된 Node 전체 Data를 복사한다.
        	for(var i=dragRow; i<=dragEndRow; i++)
        	{
        		var aRow = dsTmpObj.addRow();
        		//trace("this.fnSetTempDragDataList() dsPjWbsTmp addRow " + aRow + " WBS_CODE : " + this.dsPjWbs.getColumn(i, "WBS_CODE") + " i : " + i);
        		dsTmpObj.copyRow(aRow, dsObj, i);
        	}

        	//옮겨질 Tree Node를 삭제하면 DropRow가 변경되므로 DropRow의 WBS CODE를 미리 보관한다.
        	var dRopWbsCode = dsObj.getColumn(dropRow, "WBS_CODE");

        	trace("this.fnSetTempDragDataList() dragRow : " + dragRow + " dragEndRow : " + dragEndRow + " dsTmpObj.rowcount : " + dsTmpObj.rowcount);

        	//Drag 위치에 있던 데이터 Node에 대한 삭제 처리
        	dsObj.set_enableevent(false);
        	dsObj.set_updatecontrol(false);

        	for(var i=this.dsPjWbsTmp.rowcount-1; i>=0; i--)
        	{
        		var fRow = dsObj.findRow("WBS_CODE", dsTmpObj.getColumn(i, "WBS_CODE"));

        		if(fRow > -1)
        		{
        			var succ = dsObj.deleteRow(fRow);
        			//trace("delete i=" + i + " fRow : " + fRow + " succ : " + succ);
        		}
        	}

        	var dragRowLvl = dsTmpObj.getColumn(0, "LVL");		//

        	var bfDropLastChildRow = this.fnGetLastChildRow(grdObj, dropRow);
        	var chgDropRow = dsObj.findRow("WBS_CODE", dRopWbsCode);
        	var dropLastChildRow = this.fnGetLastChildRow(grdObj, chgDropRow);

        	var dropRowLvl	= dsObj.getColumn(chgDropRow, "LVL");	//Drop된 Row의 레벨
        	var staLvl = dragRowLvl - dropRowLvl;

        	trace("this.fnSetTempDragDataList() dragRow : " + dragRow + " dropRow : " + dropRow + " dropLastChildRow : " + dropLastChildRow + " bfDropLastChildRow : " + bfDropLastChildRow);
        	trace("this.fnSetTempDragDataList() chgDropRow : " + chgDropRow + " dRopWbsCode : " + dRopWbsCode);

        	//Drop된 ROW 하위에 Drag된 Node 삽입 처리
        	for(var i=dsTmpObj.rowcount-1; i>=0; i--)
        	{
        		var aRow = dsObj.insertRow(dropLastChildRow + 1);
        		trace("Data Insert aRow : " + aRow + " WBS_CODE : " + dsTmpObj.getColumn(i, "WBS_CODE") + " WBS_NAME : " + dsTmpObj.getColumn(i, "WBS_NAME"));
        		dsObj.copyRow(aRow, dsTmpObj, i);

        		if( Ex.isEmpty(dsObj.getColumn(aRow, "ROWFLAG")) || dsObj.getColumn(aRow, "ROWFLAG") == "U")
        		{
        			dsObj.setRowType(aRow, Dataset.ROWTYPE_UPDATE);
        			dsObj.setColumn(aRow, "ROWFLAG", "U");
        		}
        		else if(dsObj.getColumn(aRow, "ROWFLAG") == "I")
        		{
        			dsObj.setRowType(aRow, Dataset.ROWTYPE_INSERT);
        			dsObj.setColumn(aRow, "ROWFLAG", "I");
        		}
        		else if(dsObj.getColumn(aRow, "ROWFLAG") == "D")
        		{
        			dsObj.setRowType(aRow, Dataset.ROWTYPE_UPDATE);
        			dsObj.setColumn(aRow, "ROWFLAG", "D");
        		}
        		var loopLvl = grdObj.getBindDataset().getColumn(aRow, "LVL");

        		//trace("this.fnSetTempDragDataList() dropRowLvl : " + dropRowLvl + " dragRowLvl : " + dragRowLvl + " staLvl : " + staLvl + " loopLvl : " + loopLvl);
        		dsObj.setColumn(aRow, "LVL", loopLvl - staLvl + 1);
        		dsObj.setColumn(aRow, "OUTPRNT_ORD", aRow+1);
        	}
        	dsObj.set_enableevent(true);
        	dsObj.set_updatecontrol(true);

        	this.fnSetWbsCodeRow(grdObj, dsTmpObj);	//변경된 Tree Node에 WBS CODE 재설정
        }

        //WBS 그리드 관련 처리 함수 시작
        /* 입력 받은 row를 기준하여 아래의 WBS CODE를 재설정하는 함수
           ROW값 미지정시 첫행부터 제일 마지막 행까지 재설정 시작
         */
        this.fnSetWbsCodeRow = function(grdObj, dsTmpObj)
        {
        	var grdVPos = grdObj.vscrollbar.pos;
        	var dsObj = grdObj.getBindDataset();
        	dsTmpObj.assign(dsObj);

        	grdObj.setBindDataset(dsTmpObj);

        	//Copy한 Temp DS에 WBS_CODE를 재계산한다.
        	for(var i=0; i<dsTmpObj.rowcount; i++)
        	{
        		if( !grdObj.isTreeLeafRow(i, true) )
        		{
        			var pVal = dsTmpObj.getColumn(i, "WBS_CODE") || '';

        			var idx = 1;
        			for(var j=0; j<grdObj.getTreeChildCount(i, true); j++)
        			{
        				var row = grdObj.getTreeChildRow(i, j, true);
        				dsTmpObj.setColumn(row, "P_WBS_CODE", pVal);
        				dsTmpObj.setColumn(row, "WBS_CODE", pVal + "." + idx);
        				idx++;
        			}
        		}
        	}

        	grdObj.setBindDataset(dsObj);

        	/*
        	fRow = dsTmpObj.findRow("LVL", 0);

        	if(fRow > -1)
        	{
        		dsTmpObj.deleteRow(fRow);
        	}
        	*/

        	//재계산한 WBS_CODE를 원본 DS에 넣는다.
        	for(var i=0; i<dsObj.rowcount; i++)
        	{
        		var oWbsCode = dsObj.getColumn(i, "WBS_CODE");
        		var tWbsCode = dsTmpObj.getColumn(i, "WBS_CODE");

        		if(oWbsCode != tWbsCode)
        		{
        			//trace("this.fnSetWbsCodeRow() if i=" + i + " oWbsCode:[" + oWbsCode + "] tWbsCode:[" + tWbsCode + "]");
        			dsObj.setColumn(i, "P_WBS_CODE", dsTmpObj.getColumn(i, "P_WBS_CODE") ||'' );
        			dsObj.setColumn(i, "WBS_CODE", dsTmpObj.getColumn(i, "WBS_CODE") ||'' );
        		}

        		var isLastLvl = dsObj.getColumn(i, "IS_LAST_LVL");

        		if(grdObj.isTreeLeafRow(i))
        		{
        			if(Ex.isEmpty(isLastLvl) || isLastLvl == "N")	dsObj.setColumn(i, "IS_LAST_LVL", "Y");
        		}
        		else
        		{
        			if(Ex.isEmpty(isLastLvl) || isLastLvl == "Y")	dsObj.setColumn(i, "IS_LAST_LVL", "N");
        		}
        	}

        	grdObj.set_binddataset("");
        	grdObj.set_binddataset(dsObj);

        	if(grdVPos > -1)	grdObj.vscrollbar.set_pos(grdVPos);
        }

        //같은 LVL 내에서 선택한 Tree Node 그룹의 순서를 이동시킨다.
        this.fnSetRowMove = function(strUpDown, grdObj, dsTmpObj)
        {
        	var dsObj = grdObj.getBindDataset();
        	var rowPos = dsObj.rowposition;
        	var curWbsCode = dsObj.getColumn(rowPos, "WBS_CODE");
        	var pRow = grdObj.getTreeParentRow(grdObj.getTreeRow(dsObj.rowposition), true);

        	var moveTargIdx = -1;

        	trace("부모의 자식 건수 : " + grdObj.getTreeChildCount(pRow, true));

        	for(var i=0; i<grdObj.getTreeChildCount(pRow, true); i++)
        	{
        		var cRow = grdObj.getTreeChildRow(pRow, i, true);
        		var loopWbsCode = dsObj.getColumn(cRow, "WBS_CODE");

        		if(curWbsCode == loopWbsCode)
        		{
        			if(strUpDown == "UP")
        			{
        				if(i>0) moveTargIdx = i-1;
        				break;
        			}
        			else if(strUpDown == "DOWN")
        			{
        				if(i<grdObj.getTreeChildCount(pRow, true)-1) moveTargIdx = i+1;
        				break;
        			}
        		}
        	}

        	if(moveTargIdx > -1)
        	{
        		trace("moveTargIdx : " + moveTargIdx);
        		var lastChildRow = this.fnGetLastChildRow(grdObj, rowPos);	//이동하고자 하는 row의 가장 마지막 자식 row

        		dsTmpObj.assign(dsObj);
        		dsTmpObj.clearData();

        		//이동할 대상을 Tmp DS에 보관
        		for(var i=rowPos; i<=lastChildRow; i++)
        		{
        			var aRow = dsTmpObj.addRow();
        			dsTmpObj.copyRow(aRow, dsObj, i);
        		}

        		dsObj.set_enableevent(false);
        		dsObj.set_updatecontrol(false);

        		trace("lastChildRow : " + lastChildRow + " rowPos : " + rowPos);

        		var moveTargWbsCode = dsObj.getColumn(grdObj.getTreeChildRow(pRow, moveTargIdx, true), "WBS_CODE");

        		//Tmp에 보관된 row 내역을 현행 데이터에서 제거
        		for(var i=lastChildRow; i>=rowPos; i--)
        		{
        			var succ = dsObj.deleteRow(i);
        		}

        		moveTargIdx = -1;

        		trace("moveTargWbsCode : " + moveTargWbsCode + " grdObj.getTreeChildCount(pRow, true)-1 : " + (grdObj.getTreeChildCount(pRow, true)-1));
        		//옮길 데이터에 대해 삭제를 진행했으므로 이동할 row 위치를 다시 구한다.
        		for(var i=0; i<grdObj.getTreeChildCount(pRow, true); i++)
        		{
        			var cRow = grdObj.getTreeChildRow(pRow, i, true);
        			var loopWbsCode = dsObj.getColumn(cRow, "WBS_CODE");

        			if(moveTargWbsCode == loopWbsCode)
        			{
        				moveTargIdx = i;
        				break;
        			}
        		}

        		if(moveTargIdx > -1)
        		{
        			var mRow;
        			if(strUpDown == "UP")
        			{
        				mRow = grdObj.getTreeChildRow(pRow, moveTargIdx, true);
        			}
        			else if(strUpDown == "DOWN")
        			{
        				mRow = this.fnGetLastChildRow(grdObj, grdObj.getTreeChildRow(pRow, moveTargIdx, true));
        				mRow++;
        			}

        			for(var i=dsTmpObj.rowcount-1; i>=0; i--)
        			{
        				var aRow = dsObj.insertRow(mRow);

        				dsObj.copyRow(aRow, dsTmpObj, i);
        				if( Ex.isEmpty(dsObj.getColumn(aRow, "ROWFLAG")) || dsObj.getColumn(aRow, "ROWFLAG") == "U")
        				{
        					dsObj.setRowType(aRow, Dataset.ROWTYPE_UPDATE);
        					dsObj.setColumn(aRow, "ROWFLAG", "U");
        				}
        				else if(dsObj.getColumn(aRow, "ROWFLAG") == "I")
        				{
        					dsObj.setRowType(aRow, Dataset.ROWTYPE_INSERT);
        					dsObj.setColumn(aRow, "ROWFLAG", "I");
        				}
        				else if(dsObj.getColumn(aRow, "ROWFLAG") == "D")
        				{
        					dsObj.setRowType(aRow, Dataset.ROWTYPE_UPDATE);
        					dsObj.setColumn(aRow, "ROWFLAG", "D");
        				}
        			}
        		}

        		dsObj.set_enableevent(true);
        		dsObj.set_updatecontrol(true);

        		this.fnSetWbsCodeRow(grdObj, dsTmpObj);
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
