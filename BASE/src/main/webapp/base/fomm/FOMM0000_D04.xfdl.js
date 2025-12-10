(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0000_D03");
            this.set_titletext("부서FORM(DIV)");
            this.getSetter("scrollbars").set("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(285,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtDeptCd","70%","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("true");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_displaynulltext("부서코드");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"0","24","24","edtDeptCd:-1",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_edge("");
            obj.set_cssclass("btn_WF_ClearIcon");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPop",null,"0","24","24","btnClear:1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchIcon");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","0","0",null,null,"btnSearchPop:-1","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_displaynulltext("부서명");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_normal");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",285,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtDeptNm","value","dsDept","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtDeptCd","value","dsDept","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FOMM0000_D04.xfdl","lib::lib_FommComm.xjs");
        this.registerScript("FOMM0000_D04.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0000_D04.xfdl
        * 화면(명)	︰ 부서 폼
        * 화면 설명	︰ 요청관리 접수부서(IT)를 검색한다.
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.09.27
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.06.14	 WEMB		최초작성
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
        	//trace("[FOMM0000_D03] this.form_onload()");
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	//trace("[FOMM0000_D03] this.fnInit() this.id : " + this.id + " this.parent.id : " + this.parent.id + " this.parent._formObj :: " + this.parent._formObj.id);
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
        		case "selectDeptPop" :
        			//trace("varValue:\n" + varValue);
        			if(varValue.indexOf("Dataset id=") > -1)
        			{
        				this.dsDept.loadXML(varValue);
        				this.edtDeptCd.set_value(this.dsDept.getColumn(0, "DEPT_CD"));
        				this.edtDeptNm.set_value(this.dsDept.getColumn(0, "DEPT_NM"));
        				this.edtDeptCd.set_tooltiptext(this.dsDept);
        				this.edtDeptNm.set_tooltiptext(this.dsDept);

        				this.lockInput();

        				if(this.parent._formObj.deptChangedCallBack)
        				{
        					this.parent._formObj.deptChangedCallBack(this.parent.id, this.dsDept);
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

        this.setDisplaynulltext = function (strDeptCd, strDeptNm)
        {
        	if( !Ex.isEmpty(strDeptCd) )	this.edtDeptCd.set_displaynulltext(strDeptCd);
        	if( !Ex.isEmpty(strDeptNm) )	this.edtDeptNm.set_displaynulltext(strDeptNm);
        }
        /*
         * 함수명  	: setValue
         * 설명 		: 부서 정보를 셋팅한다.
         * params  		:
        	- deptCd	: 부서코드
        	- deptNm	: 부서명
         * return Type 	: None
         */
        this.setValue = function (deptCd, deptNm)
        {
        	this.dsDept.set_enableevent(false);
        	this.dsDept.setColumn(0, "DEPT_CD", deptCd);
        	this.dsDept.setColumn(0, "DEPT_NM", deptNm);
        	this.dsDept.set_enableevent(true);

        // 	if( !Ex.isEmpty(deptCd) && !Ex.isEmpty(deptNm) )
        // 	{
        // 		this.isSetValueProc = true;
        // 		this.selectDeptInfo(this, "CD", deptCd, this.searchDeptCallBack);
        // 	}
        }

        /*
         * 함수명  		: getValue
         * 설명			: 선택된 부서 정보를 가져온다
         * params		: None
         * return Type 	: String or Json
        	- String : "" (검색된 데이터가 없을 경우)
        	- Json   : id, name 으로 구성된 json 객체
         */
        this.getValue = function ()
        {
        	var rtnObj = new Object();

        	for(var i=0; i<this.dsDept.colcount; i++)
        	{
        		rtnObj[this.dsDept.getColID(i)] = this.dsDept.getColumn(0, this.dsDept.getColID(i));
        	}
        	return rtnObj;
        }

        this.setEnable = function(isEnable, isChkDeptCd)
        {
        	trace("[FOMM0000_D03] this.setEnable() isEnable ::: " + isEnable);
        	this.isEnable = isEnable;

        	if(!isEnable)
        	{
        		this.edtDeptNm.set_readonly(true);
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

        	trace("[FOMM0000_D03] this.setEnable() this.edtDeptCd.readonly : " + this.edtDeptCd.readonly);
        	trace("[FOMM0000_D03] this.setEnable() this.btnSearchPop.enable : " + this.btnSearchPop.enable);
        	trace("[FOMM0000_D03] this.setEnable() this.btnClear.enable : " + this.btnClear.enable);
        }

        /*
         * 함수명  	: getDataset
         * 설명 		: 선택된 사용자 정보의 Dataset을 가져온다.
         * return Type 	: Dataset
        	- Dataset : 선택된 사용자 정보
         */
        this.getDataset = function()
        {
        	return this.dsDept;
        }

        this.searchDeptCallBack = function(rtnObj)
        {
        	trace("[FOMM0000_D03] this.searchDeptCallBack() this.parent.id : " + this.parent.id + " rtnObj.ROWCOUNT : " + rtnObj.ROWCOUNT);
        	if(rtnObj.ROWCOUNT == 1)
        	{
        		//trace("[FOMM0000_D03] this.searchUserCallBack() rtnObj.DEPT_CD : " + rtnObj.DEPT_CD);
        		//trace("[FOMM0000_D03] this.searchUserCallBack() rtnObj.DEPT_MN : " + rtnObj.DEPT_NM);

        		for (prop in rtnObj)
        		{
        			var col1 = prop;
        			if(this.dsDept.colinfos[prop] != "[object DSColumnInfo]")
        			{
        				this.dsDept.addColumn(prop, "string");
        			}
        		}

        		this.dsDept.clearData();
        		var aRow = this.dsDept.addRow();

        		if(this.isSetValueProc) this.dsDept.set_enableevent(false);

        		for (prop in rtnObj)
        		{
        			this.dsDept.setColumn(aRow, prop, rtnObj[prop]);
        		}

        		if(this.isSetValueProc) this.dsDept.set_enableevent(true);

        		this.lockInput();

        		if(this.parent._formObj.deptChangedCallBack)
        		{
        			this.parent._formObj.deptChangedCallBack(this.parent.id, this.dsDept);
        		}

        		this.edtDeptCd.set_tooltiptext(rtnObj["DEPT_INFO"]);
        		this.edtDeptNm.set_tooltiptext(rtnObj["DEPT_INFO"]);
        		//trace([FOMM0000_D03] this.searchDeptCallBack()\n" + this.dsDept.saveXML());
        	}
        	else
        	{
        		if( Ex.isEmpty(this.dsDept.getColumn(0, "DEPT_CD")) )	this.resetInput();
        		if(!this.isSetValueProc)	this.openDeptPop();
        	}
        	this.isSetValueProc = false;
        	this.dsDept.applyChange();
        }

        this.openDeptPop = function()
        {
        	Ex.core.popup(
        		this,
        		'selectDeptPop',
        		"fomm::FOMM0000_P04.xfdl",             		// <--- 팝업창 오픈 Url
        		{
        			title		: Ex.core.word('부서 선택'),
        			pSelType	: 'S',
        			pType		: "name",
        			upGbn		: "BIZ",				//it 그룹
        			pDeptCd		: this.__searchDeptCd,
        			pDeptNm		: this.__searchDeptNm,
        			pData		: this.edtDeptCd.value,
        			pDs			: this.dsDept,

        		},											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=900,height=500"                  	// <--- width/height/modeless(프레임 처리 옵션)
        	);
        }

        this.resetInput = function(isFocus)
        {
        	trace("[FOMM0000_D03] this.resetInput()");
        	if(Ex.isEmpty(isFocus) ) isFocus = false;
        	if(!isFocus) isFocus = false;

        	this.dsDept.clearData();
        	this.edtDeptCd.set_tooltiptext("");
        	this.edtDeptNm.set_tooltiptext("");
        	this.dsDept.applyChange();

        	var aRow = this.dsDept.addRow();

        	if(this.isEnable)
        	{
        		this.edtDeptNm.set_readonly(false);
        		this.btnSearchPop.set_enable(true);
        	}
        	else
        	{
        		this.edtDeptNm.set_readonly(true);
        		this.btnSearchPop.set_enable(false);
        	}

        	if(this.parent._formObj.deptChangedCallBack)
        	{
        		this.parent._formObj.deptChangedCallBack(this.parent.id, this.dsDept);
        	}

        	if(this.isEnable)
        	{
        		if(isFocus)	this.edtDeptNm.setFocus();
        	}
        }

        this.lockInput = function()
        {
        	trace("[FOMM0000_D03] this.lockInput()");
        	if(this.isEnable)	this.btnSearchPop.set_enable(false);
        	this.edtDeptNm.set_enable(false);
        	this.edtDeptNm.set_enable(true);
        	this.edtDeptNm.set_readonly(true);
        }

        this.fnCheckValidate = function()
        {
        	if( Ex.isEmpty(this.dsDept.getColumn(0, "DEPT_NM")) )
        	{
        		return "NO_INPUT";
        	}
        	else
        	{
        		if( Ex.isEmpty(this.dsDept.getColumn(0, "DEPT_CD")) )
        		{
        			return "NO_CD";
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
        			this.selectDeptInfo(this, "CD_NM", this.edtDeptNm.value, this.searchDeptCallBack, "SR_ITGROUP_CD");
        			break;

        		case "btnClear" :
        			this.resetInput(true);
        			break;
        	}
        }

        this.edtOnKeyUp = function(obj,e)
        {
        	//trace("[FOMM0000_D03] this.edtOnKeyUp() this.edtDeptNm.value : " + this.edtDeptNm.value);
        	if(e.keycode == 13)
        	{
        		this.dsDept.setColumn(0, "DEPT_CD", "");
        		obj.updateToDataset();
        		trace("this.edtDeptNm.value : " + this.edtDeptNm.value);
        		this.selectDeptInfo(this, "CD_NM", this.edtDeptNm.value, this.searchDeptCallBack, "SR_ITGROUP_CD");
        	}
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	if(e.columnid == "DEPT_NM")
        	{
        		if(e.newvalue != obj.getOrgColumn(0, "DEPT_NM"))
        		{
        			obj.setColumn(0, "DEPT_CD", "");
        		}

        		if(this.parent._formObj.deptChangedCallBack)
        		{
        			this.parent._formObj.deptChangedCallBack(this.parent.id, this.dsDept);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtDeptCd.addEventHandler("onkeydown",this.edtUserNm_onkeydown,this);
            this.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnSearchPop.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edtDeptNm.addEventHandler("onkeyup",this.edtOnKeyUp,this);
            this.dsDept.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0000_D04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
