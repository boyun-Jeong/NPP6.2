(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0000_D02");
            this.set_titletext("직원/직원FORM(DIV)");
            this.getSetter("scrollbars").set("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(285,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtUserNm2","136","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("position").set("absolute");
            obj.set_readonly("true");
            obj.set_displaynulltext("직원명");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"0","24","24","edtUserNm2:-1",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ClearIcon");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPop",null,"0","24","24","btnClear:0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchIcon");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","0","0",null,null,"btnSearchPop:-1","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_enable("true");
            obj.set_displaynulltext("사용자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","286","0","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId2","376","0","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","466.00","0","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDeptCd","556.00","0","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_cssclass("edt_WF_normal");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",285,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edtUserId","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtUserId2","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtDeptNm","value","dsUser","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtDeptCd","value","dsUser","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FOMM0000_D05_M.xfdl","lib::lib_FommComm.xjs");
        this.registerScript("FOMM0000_D05_M.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0000_D02.xfdl
        * 화면(명)		︰ 이름/부서 폼
        * 화면 설명	︰ 직원을 검색한다.
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.09.13
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.09.13	 WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_FommComm.xjs"); /*include "lib::lib_FommComm.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.isSetValueProc = false;	//setValue 함수가 수행중인지 여부
        this.isEnable = true;
        this.objDsUser = '';
        this.filterCol = '';
        this.filterStr = '';
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	//trace("[FOMM0000_D02] this.form_onload()");
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	//trace("[FOMM0000_D02] this.fnInit() this.id : " + this.id + " this.parent.id : " + this.parent.id + " this.parent._formObj :: " + this.parent._formObj.id);
        	this.fnCompInit();		// 컴포넌트 초기화
        }

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
        		case "select01" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "selectMemoUserSingle" :

        			if(this.dsUserList.rowcount == 1) {
        				this.fnPopupAfter("selectUserPop",this.dsUserList.saveXML());
        			} else if(this.dsUserList.rowcount > 1 || this.dsUserList.rowcount == 0) {
        				var searchText = this.edtUserNm.value;
        				if( Ex.isEmpty(this.dsUser.getColumn(0, "USER_ID")) )	this.resetInput();
        				if(!this.isSetValueProc)	this.openUserPop(searchText);

        				this.dsUser.applyChange();
        				this.isSetValueProc = false;
        			}

        			this.dsUserList.clearData();

        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "selectUserPop" :
        			//trace("varValue:\n" + varValue);
        			/*if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsUser.loadXML(varValue);
        				this.edtUserId.set_value(this.dsUser.getColumn(0, "USER_ID"));
        				this.edtUserNm.set_value(this.dsUser.getColumn(0, "USER_NM"));
        				this.edtUserId2.set_value(this.dsUser.getColumn(0, "USER_ID"));
        				this.edtUserNm2.set_value(this.dsUser.getColumn(0, "USER_NM"));
        				this.edtDeptCd.set_value(this.dsUser.getColumn(0, "DEPT_CD"));
        				this.edtDeptNm.set_value(this.dsUser.getColumn(0, "DEPT_NM"));
        				this.edtUserNm.set_tooltiptext(this.dsUser);
        				this.edtUserNm2.set_tooltiptext(this.dsUser);

        				if(this.parent._formObj.userDeptChangedCallBack)
        				{
        					this.parent._formObj.userDeptChangedCallBack(this.parent.id, this.dsUser);
        				}
        				this.lockInput();
        			}*/

        			/*
        			for(var i = 0; i < this.dsUser.rowcount; i++)
        			{
        				this.dsUser.setColumn(i, 'CHK', '0');

        				var userId = this.dsUser.getColumn(i, 'USER_ID');
        				var duplRow = this.dsCger.findRow('USER_ID', userId);
        				if( duplRow < 0 )
        				{
        					var rowPos = this.dsCger.setAddRow();
        					this.dsCger.setCopyRow(rowPos, this.dsSelUser, i);
        					this.dsCger.setColumn(rowPos, 'CGER_TYPE_CD', this.cgerTypeCd);
        				}
        			}*/

        			this.dsUser.clearData();
        			this.dsUser.loadXML(varValue);

        			//trace(this.dsUser.saveXML());
        			//trace("데이터셋" + this.dsUser.getColumn(0, "USER_NM"));

        			//this.edtUserNm2.value = "" ;
        			//this.edtUserNm2.set_Value = "하하하";
        		/*	부모 form에서 처리
        			var strUser = "";
        			var j = 0;
        			var nRowCnt = this.dsUser.rowcount;

        			for( i = 0; i <nRowCnt ; i++ ) {

        				if( j > 0) strUser += ",";

        				strUser += this.dsUser.getColumn(i, "USER_NM");
        				j++;
        			}
        			this.edtUserNm2.set_value(strUser);
        		*/
        			//this.edtUserNm2.value() = setUser;

        			//-----------------------------------------
        			//for문 돌면서
        			// var user 		= this.dsUser.getColumn(i, "USER_ID");
        			// var nFindRow 	= this.ds_pt_memo_rcv.findRow("RCV_USER_ID", user);
        			// 여기서 중복 제거해서 보내야함 각 수신자들의 edtUserNm2 중복 표현 방지
        			// 그렇게 하려면 부모창에서 팝업 호출시 ds를 보내야 하고 콜백도 지금처럼 팝업에서 ds 받아야함
        			// 수신,참조,숨은참조에 중복으로 보내는것 방지
        			// 나중에 하자 ㅠㅠ
        			//--------------------------------------

        			//----------------------------------------------------------------
        			//PJ0620_P01 화면에서 복사해옴 부모창의 함수를 호출 부모창에 함수가 존재해야 한다
        			//include "lib::lib_FommComm.xjs"; 있어야 호출가능
        			//this.parent._formObj.userDeptChangedCallBack(this.parent.id, this.dsUser);
        			//----------------------------------------------------------------
        			//수신,참조,숨은 참조 수신인 선택후 부모창의 콜백함수 호출
        			this.parent._formObj.selrcvUserCallBack(this.parent.id, this.dsUser);

        			//this.parent._formObj.pfn_test(this.parent.id, this.dsUser);
        			//var parentObj = this.getOwnerFrame();
        			//var parentFunc = parentObj.arguments["pfn_test"];
        			//parentFunc.call(this);
        			//parentObj.selrvcUserCallBack(this.parent.id, this.dsUser);

        			//var ds = this.getOwnerFrame().ds_userRcv;
        			//trace(this.dsUser.saveXML());
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "" :
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        }

        this.setDisplaynulltext = function (strUser, strDept)
        {

        	if( !Ex.isEmpty(strUser) )	{
        	trace("=================유저선택 폼 :: "+ strUser + "=================" );
        	this.edtUserNm.set_displaynulltext(strUser);
        	}
        	if( !Ex.isEmpty(strUser) )	this.edtUserNm2.set_displaynulltext(strUser);
        }
        /*
         * 함수명  	: setValue
         * 설명 		: 선택된 사용자 정보를 가져온다
         * params  		:
        	- userName : 검색할 사용자 명
        	- deptNm   : 검색한 부서 명
         * return Type 	: None
         */
        this.setValue = function (userId, userNm, deptNm, deptCd)
        {
        	this.dsUser.set_enableevent(false);
        	this.dsUser.setColumn(0, "USER_ID", userId);
        	this.dsUser.setColumn(0, "USER_NM", userNm);
        	this.dsUser.setColumn(0, "USER_ID2", userId);
        	this.dsUser.setColumn(0, "USER_NM2", userNm);
        	this.dsUser.setColumn(0, "DEPT_CD", deptCd);
        	this.dsUser.setColumn(0, "DEPT_NM", deptNm);
        	this.dsUser.set_enableevent(true);

        // 	if( !Ex.isEmpty(userId) && !Ex.isEmpty(userNm) )
        // 	{
        // 		this.isSetValueProc = true;
        // 		this.selectUserDeptInfo(this, "ID", userId, this.searchUserCallBack);
        // 	}
        }

        /*
         * 함수명  		: getValue
         * 설명			: 선택된 사용자 정보를 가져온다
         * params		: None
         * return Type 	: String or Json
        	- String : "" (검색된 데이터가 없을 경우)
        	- Json   : id, name 으로 구성된 json 객체
         */
        this.getValue = function ()
        {
        	var rtnObj = new Object();

        	for(var i=0; i<this.dsUser.colcount; i++)
        	{
        		rtnObj[this.dsUser.getColID(i)] = this.dsUser.getColumn(0, this.dsUser.getColID(i));
        	}
        	return rtnObj;
        }

        this.setEnable = function(isEnable)
        {
        	trace("[FOMM0000_D02] this.setEnable() isEnable ::: " + isEnable);
        	this.isEnable = isEnable;

        	if(!isEnable)
        	{
        		this.edtUserNm.set_readonly(true);
        		this.btnSearchPop.set_enable(false);
        		this.btnClear.set_enable(false);
        	}
        	else
        	{
        		if( Ex.isEmpty(isChkUserId) ) isChkUserId = false;

        		if(isChkUserId)
        		{
        			if( Ex.isEmpty(this.edtUserId.value) )
        			{
        				this.edtUserNm.set_readonly(false);
        				this.btnSearchPop.set_enable(true);
        			}
        			else
        			{
        				this.edtUserNm.set_readonly(true);
        				this.btnSearchPop.set_enable(false);
        			}
        		}
        		else
        		{
        			this.edtUserNm.set_readonly(false);
        			this.btnSearchPop.set_enable(true);
        		}
        		this.btnClear.set_enable(true);
        	}

        	trace("[FOMM0000_D02] this.setEnable() this.edtUserNm.readonly : " + this.edtUserNm.readonly);
        	trace("[FOMM0000_D02] this.setEnable() this.btnSearchPop.enable : " + this.btnSearchPop.enable);
        	trace("[FOMM0000_D02] this.setEnable() this.btnClear.enable : " + this.btnClear.enable);
        }

        /*
         * 함수명  	: getDataset
         * 설명 		: 선택된 사용자 정보의 Dataset을 가져온다.
         * return Type 	: Dataset
        	- Dataset : 선택된 사용자 정보
         */
        this.getDataset = function()
        {
        	return this.dsUser;
        }

        this.searchUserCallBack = function(rtnObj)
        {
        	trace("[FOMM0000_D02] this.searchUserCallBack() this.parent.id : " + this.parent.id + " rtnObj.ROWCOUNT : " + rtnObj.ROWCOUNT);

        	//단건 검색 막으려고 이벤트 닫음 시작
        	/*
        	if(rtnObj.ROWCOUNT == 1)
        	{
        		//trace("[FOMM0000_D02] this.searchUserCallBack() rtnObj.USER_ID : " + rtnObj.USER_ID);
        		//trace("[FOMM0000_D02] this.searchUserCallBack() rtnObj.USER_NM : " + rtnObj.USER_NM);
        		//trace("[FOMM0000_D02] this.searchUserCallBack() rtnObj.DEPT_CD : " + rtnObj.DEPT_CD);
        		//trace("[FOMM0000_D02] this.searchUserCallBack() rtnObj.DEPT_MN : " + rtnObj.DEPT_NM);

        		for (prop in rtnObj)
        		{
        			var col1 = prop;
        			if(this.dsUser.colinfos[prop] != "[object DSColumnInfo]")
        			{
        				this.dsUser.addColumn(prop, "string");
        			}
        		}

        		this.dsUser.clearData();
        		var aRow = this.dsUser.addRow();

        		if(this.isSetValueProc) this.dsUser.set_enableevent(false);

        		for (prop in rtnObj)
        		{
        			this.dsUser.setColumn(aRow, prop, rtnObj[prop]);
        		}

        		if(this.isSetValueProc) this.dsUser.set_enableevent(true);

        		if(this.parent._formObj.userDeptChangedCallBack)
        		{
        			this.parent._formObj.userDeptChangedCallBack(this.parent.id, this.dsUser);
        		}

        		this.lockInput();

        		this.edtUserNm.set_tooltiptext(rtnObj["USER_INFO"]);
        		this.edtUserNm2.set_tooltiptext(rtnObj["USER_INFO"]);

        		//trace([FOMM0000_D02] this.searchUserCallBack()\n" + this.dsUser.saveXML());

        	}

        	/*
        	else if(rtnObj.ROWCOUNT == 0)
        	{
        		this.resetInput();
        	}
        	else
        	{
        		if(!this.isSetValueProc)	this.openUserPop();
        	}
        	*/
        	/*
        	else
        	{
        		var searchText = this.edtUserNm.value;
        		if( Ex.isEmpty(this.dsUser.getColumn(0, "USER_ID")) )	this.resetInput();
        		if(!this.isSetValueProc)	this.openUserPop(searchText);
        	}
        	//단건검색 막으려 이벤트 닫음 끝
        	*/

        	var searchText = this.edtUserNm.value;
        		if( Ex.isEmpty(this.dsUser.getColumn(0, "USER_ID")) )	this.resetInput();
        		if(!this.isSetValueProc)	this.openUserPop(searchText);

        	this.dsUser.applyChange();
        	this.isSetValueProc = false;
        }

        this.openUserPop = function()
        {
        	/*
        	Ex.core.popup(
        		this,
        		'selectUserPop',
        		"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        		{
        			title		: Ex.core.word('사용자 선택'),
        			pSelType	: 'M',
        			pType		: "NAME",
        			pDeptCd		: this.__searchDeptCd,
        			pDeptNm		: this.__searchDeptNm,
        			pData		: this.edtUserNm.value,
        			pDs			: this.dsUser
        		},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=900,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
        	);
        	*/

        	var objPrm = 		{
        			title		: Ex.core.word('사용자 선택'),
        			pData		: this.edtUserNm.value,
        			pDs			: this.dsUser,
        			pTgDs       : '',
        			pFilterCol  : '',
        			pFilterStr  : ''
        		};

        	if(!Ex.isEmpty(this.objDsUser)) {
        			objPrm.pTgDs = this.objDsUser;
        	}

        	if(!Ex.isEmpty(this.filterCol)) {
        			objPrm.pFilterCol = this.objDsUser.getColumnInfo(this.filterCol);
        	}

        	if(!Ex.isEmpty(this.filterStr)) {
        			objPrm.pFilterStr = this.filterStr;
        	}

        	Ex.core.popup(
        		this,
        		'selectUserPop',
        		"fomm::FOMM0900_P01.xfdl",             		// <--- 팝업창 오픈 Url
        		objPrm,											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=950,height=680"                  	// <--- width/height/modeless(프레임 처리 옵션)
        	);


        }

        this.resetInput = function(isFocus)
        {
        	trace("[FOMM0000_D02] this.resetInput()");
        	if(Ex.isEmpty(isFocus) ) isFocus = false;
        	if(!isFocus) isFocus = false;

        	this.dsUser.clearData();
        	this.edtUserNm.set_tooltiptext("");
        	this.edtUserNm2.set_tooltiptext("");
        	this.dsUser.applyChange();

        	var aRow = this.dsUser.addRow();

        	if(this.isEnable)
        	{
        		this.edtUserNm.set_readonly(false);
        		this.btnSearchPop.set_enable(true);
        	}
        	else
        	{
        		this.edtUserNm.set_readonly(true);
        		this.btnSearchPop.set_enable(false);
        	}

        	if(this.parent._formObj.userDeptChangedCallBack)
        	{
        		this.parent._formObj.userDeptChangedCallBack(this.parent.id, this.dsUser);
        	}

        	if(this.isEnable)
        	{
        		if(isFocus)	this.edtUserNm.setFocus();
        	}
        }

        this.lockInput = function()
        {
        	trace("[FOMM0000_D02] this.lockInput()");
        	if(this.isEnable)	this.btnSearchPop.set_enable(false);
        	this.edtUserNm.set_enable(false);
        	this.edtUserNm.set_enable(true);
        	this.edtUserNm.set_readonly(true);
        }

        this.fnCheckValidate = function()
        {
        	if( Ex.isEmpty(this.dsUser.getColumn(0, "USER_NM")) )
        	{
        		return "NO_INPUT";
        	}
        	else
        	{
        		if( Ex.isEmpty(this.dsUser.getColumn(0, "USER_ID")) )
        		{
        			return "NO_ID";
        		}
        	}
        	return "OK";
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearchPop" :		// 검색
        			//this.selectUserDeptInfo(this, "ID_NM", this.edtUserNm.value, this.searchUserCallBack);
        			var searchText = this.edtUserNm.value;
        			if( Ex.isEmpty(this.dsUser.getColumn(0, "USER_ID")) )	this.resetInput();
        			if(!this.isSetValueProc)	this.openUserPop(searchText);

        			this.dsUser.applyChange();
        			this.isSetValueProc = false;
        			break;

        		case "btnClear" :
        			//this.resetInput(true);
        			this.parent._formObj.userClearCallBack(this.parent.id, this.dsUser)
        			break;
        	}
        }
        //단건검색 막으려고 이벤트 끊음
        this.edtOnKeyUp = function(obj,e)
        {
        	obj.updateToDataset();
        	this.dsUser.setColumn(0, "USER_ID", "");
        	//trace("[FOMM0000_D02] this.edtOnKeyUp() this.edtUserNm.value : " + this.edtUserNm.value);
        	if(e.keycode == 13)	this.selectUserDeptInfo(this, "ID_NM", this.edtUserNm.value, this.searchUserCallBack);
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "USER_NM")
        	{
        		if(e.newvalue != obj.getOrgColumn(0, "USER_NM") && !Ex.isEmpty(obj.getColumn(0, "USER_ID")))
        		{
        			obj.setColumn(0, "USER_ID", "");
        		}

        		if(this.parent._formObj.userDeptChangedCallBack)
        		{
        			this.parent._formObj.userDeptChangedCallBack(this.parent.id, this.dsUser);
        		}
        	}
        };


        this.edtUserNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        // 조회
        this.fnSearch = function()
        {
        	this.fnDsSchInit();

        	// transaction

        	var sTranId = "selectMemoUserSingle";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0900W/selectMemoUserSingle";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUserList=dsUserList";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        }


        this.fnDsSchInit = function()
        {

        	this.dsCond.clearData();
        	var aRow = this.dsCond.addRow();
        	this.dsCond.setColumn(aRow,"USER_NM", this.edtUserNm.value);

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtUserNm2.addEventHandler("onkeydown",this.edtUserNm_onkeydown,this);
            this.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnSearchPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edtUserNm.addEventHandler("onkeyup",this.edtUserNm_onkeyup,this);
            this.dsUser.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsUserList.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsUserList.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsUserList.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
            this.dsUserList.addEventHandler("onload",this.dsUserList_onload,this);
        };
        this.loadIncludeScript("FOMM0000_D05_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
