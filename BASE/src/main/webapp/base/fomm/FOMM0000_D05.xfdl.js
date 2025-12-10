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
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPop",null,"0","24","24","btnClear:1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchIcon");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","0","0",null,null,"btnSearchPop:-1","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_displaynulltext("사용자");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_enable("true");
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
            obj = new BindItem("item0","edtUserNm","value","dsUser","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserId","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtUserId2","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtUserNm2","value","dsUser","USER_NM");
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
        this.addIncludeScript("FOMM0000_D05.xfdl","lib::lib_FommComm.xjs");
        this.registerScript("FOMM0000_D05.xfdl", function() {
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
        			if(varValue.indexOf("Dataset id=") > -1)
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

        				this.lockInput();

        				if(this.parent._formObj.userDeptChangedCallBack)
        				{
        					this.parent._formObj.userDeptChangedCallBack(this.parent.id, this.dsUser);
        				}
        			}
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
        	if( !Ex.isEmpty(strUser) )	this.edtUserNm.set_displaynulltext(strUser);
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

        this.setEnable = function(isEnable, isChkDeptCd)
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
        		if( Ex.isEmpty(isChkDeptCd) ) isChkDeptCd = false;

        		if(isChkDeptCd)
        		{
        			if( Ex.isEmpty(this.edtDeptCd.value) )
        			{
        				this.edtDeptNm.set_readonly(false);
        				this.btnSearchPop.set_enable(true);
        			}
        			else
        			{
        				this.edtDeptNm.set_readonly(true);
        				this.btnSearchPop.set_enable(false);
        			}
        		}
        		else
        		{
        			this.edtDeptNm.set_readonly(false);
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

        		this.lockInput();

        		if(this.isSetValueProc) this.dsUser.set_enableevent(true);

        		if(this.parent._formObj.userDeptChangedCallBack)
        		{
        			this.parent._formObj.userDeptChangedCallBack(this.parent.id, this.dsUser);
        		}

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
        	else
        	{
        		var searchText = this.edtUserNm.value;
        		if( Ex.isEmpty(this.dsUser.getColumn(0, "USER_ID")) )	this.resetInput();
        		if(!this.isSetValueProc)	this.openUserPop(searchText);
        	}
        	this.dsUser.applyChange();
        	this.isSetValueProc = false;
        }

        this.openUserPop = function()
        {
        	Ex.core.popup(
        		this,
        		'selectUserPop',
        		"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        		{
        			title		: Ex.core.word('사용자 선택'),
        			pSelType	: 'S',
        			pType		: "NAME",
        			pDeptCd		: this.__searchDeptCd,
        			pDeptNm		: this.__searchDeptNm,
        			pData		: this.edtUserNm.value,
        			pDs			: this.dsUser
        		},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=900,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
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
        			this.selectUserDeptInfo(this, "ID_NM", this.edtUserNm.value, this.searchUserCallBack);
        			break;

        		case "btnClear" :
        			this.resetInput(true);
        			break;
        	}
        }

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtUserNm2.addEventHandler("onkeydown",this.edtUserNm_onkeydown,this);
            this.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnSearchPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edtUserNm.addEventHandler("onkeyup",this.edtOnKeyUp,this);
            this.dsUser.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0000_D05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
