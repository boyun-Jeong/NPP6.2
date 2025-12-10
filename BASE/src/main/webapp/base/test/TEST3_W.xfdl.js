(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0110_W");
            this.set_titletext("사용자관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","520","98","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","227","144","413","330",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","270","102","230","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("sdfdsf");
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
        this.registerScript("TEST3_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0110_W
        * 화면(명)		︰ 사용자 관리
        * 메뉴(경로)	︰ 관리자 > 사용자 > 사용자 관리
        * 화면 설명	︰ SPP 기본 사용자 관리 화면
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.oParam;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	var cb = this.edt00;
        	var jQueryCb = $(Ex.util.jqueryID(cb)).children('input');
        	var cbStyle = jQueryCb.attr("style");
        	jQueryCb.attr("style", cbStyle + "-webkit-appearance:none;");
        	jQueryCb.attr("autocomplete", "on");
        	jQueryCb.attr("list", "autofillList");


        	var getFormComponentList = function(formObj, parentPath)
        	{
        		var rtn = '';
        		if( Ex.isEmpty(parentPath) )
        			parentPath = "this";

        		var components = formObj.components;
        		for(var i=0; i<components.length; i++)
        		{
        			if(components[i] == "[object Div]")	{
        				rtn += getFormComponentList(components[i].form, parentPath + "." + components[i].id + ".form");
        			}
        			else if(components[i] == "[object Tab]") {
        				for (var j=0; j<components[i].tabpages.length; j++)
        					rtn +=getFormComponentList(components[i].tabpages[j].form, parentPath + "." + components[i].id + "." + components[i].tabpages[j].id + ".form");
        			}
        			else {
        				if(components[i].id != "_btnReload" && components[i].id != "_edtPath" && components[i].id != "_btnPath")
        					rtn += (Ex.isEmpty(txtAreaObj.value) ? "" : txtAreaObj.value + "\n") + parentPath + "." + components[i].id;
        			}
        		}

        		return rtn;
        	}


        	var sDatalist = '<datalist id="autofillList">';
        		sDatalist+= '<option value="aa"/>';
        		sDatalist+= '<option value="bb"/>';
        		sDatalist+= '<option value="cc"/>';
        		sDatalist+= '<option value="dd"/>';
        		sDatalist+= '</datalist>';
        	var datalist = jQueryCb.after(sDatalist);


        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 변경 행 확인
        this.fnSearch = function()
        {

        }


        this.fnSave = function()
        {
        }


        // 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = 0; i < objDs.rowcount; i++)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
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
        	if(!varValue)
        		return;

        	switch(mID)
        	{
        	}
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

        	}
        }

        this.edt00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.oParam.primaryKey1 = this.edt00.value;
        		this.oParam.nDispComment = this.edt00_00.value;
        		this.divComment.form.setConfig(this, this.oParam);
        	}

        };

        this.btn00_onclick = function(obj,e)
        {
        	this.setAutoFill('temp', 'temp', this.edt00.value);
        	this.txa00.set_value(this.getAutoFill('temp', 'temp'));

        };



        this.getAutoFill = function(SCREEN_ID, objComp)
        {
        	// key
        	var sUserId = Ex.util.getSession('gvUserId');
        	var strKey = "AUTOFILL&USER_ID=" + sUserId;
        		strKey+= "&SCREEN_ID=" + SCREEN_ID;
        		strKey+= "&COMP_GBN=" + objComp.id;

        	// org value
        	var orgValue = nexacro.getPrivateProfile(strKey);

        	return (orgValue||'').split(',').toString();
        }

        this.setAutoFill = function(SCREEN_ID, objComp, value)
        {
        	if( Ex.isEmpty(value) )
        		return;

        	var MAX_AUTOFILL_SIZE = 5;

        	// key
        	var sUserId = Ex.util.getSession('gvUserId');
        	var strKey = "AUTOFILL&USER_ID=" + sUserId;
        		strKey+= "&SCREEN_ID=" + SCREEN_ID;
        		strKey+= "&COMP_GBN=" + objComp.id;

        	// org value
        	var orgValue = nexacro.getPrivateProfile(strKey);
        	var arrOrgValue = [];
        	if( !Ex.isEmpty(orgValue) )
        		arrOrgValue = orgValue.split(',');

        	// newvalue
        	var idx = arrOrgValue.indexOf(value);
        	if( idx >= 0 )
        	{
        		// 기존에 있는 값이면
        		arrOrgValue.splice(idx, 1);
        		arrOrgValue.unshift(value);
        	}
        	else
        	{
        		// 신규 값이면
        		arrOrgValue.unshift(value);
        		if( arrOrgValue.length > MAX_AUTOFILL_SIZE ) {
        			arrOrgValue.pop();
        		}
        	}
        	// set
        	var newValue = arrOrgValue.toString();
        	nexacro.setPrivateProfile(strKey, newValue);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("TEST3_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
