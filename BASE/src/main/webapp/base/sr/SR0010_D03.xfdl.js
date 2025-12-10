(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_D03");
            this.set_titletext("만족도조사");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,207);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSatiInvest01", this);
            obj._setContents("<ColumnInfo><Column id=\"ROW_FALG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"20\"/><Column id=\"SATI_QST_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_RSP1_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP2_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP3_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP4_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP5_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP\" type=\"STRING\" size=\"4000\"/><Column id=\"QST_POINT\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_DESC\" type=\"STRING\" size=\"200\"/><Column id=\"QST_ITEM_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_RSP1\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP2\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP3\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP4\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP5\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_GRD1\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD2\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD3\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD4\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD5\" type=\"INT\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSatiInvest02", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"20\"/><Column id=\"SATI_QST_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_RSP1_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP2_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP3_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP4_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP5_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP\" type=\"STRING\" size=\"4000\"/><Column id=\"QST_POINT\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_DESC\" type=\"STRING\" size=\"200\"/><Column id=\"QST_ITEM_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_RSP1\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP2\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP3\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP4\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP5\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_GRD1\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD2\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD3\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD4\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD5\" type=\"INT\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSatiInvest", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NUMBER\" type=\"STRING\" size=\"20\"/><Column id=\"SATI_QST_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_RSP1_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP2_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP3_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP4_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP5_YN\" type=\"STRING\" size=\"10\"/><Column id=\"QST_ITEM_RSP\" type=\"STRING\" size=\"4000\"/><Column id=\"QST_POINT\" type=\"INT\" size=\"3\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/><Column id=\"QST_ITEM_DESC\" type=\"STRING\" size=\"200\"/><Column id=\"QST_ITEM_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"QST_ITEM_RSP1\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP2\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP3\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP4\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_RSP5\" type=\"STRING\" size=\"20\"/><Column id=\"QST_ITEM_GRD1\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD2\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD3\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD4\" type=\"INT\" size=\"3\"/><Column id=\"QST_ITEM_GRD5\" type=\"INT\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("만족도 조사 - 서비스처리 만족도 조사");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSatiInvest01","0","34",null,"67","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSatiInvest01");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useFilter("false");
            obj.set_useCopy("false");
            obj.set_useContext("false");
            obj.set_useCheck("false");
            obj.set_useSort("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:SEQ\" font=\"12px/normal &quot;NanumSquareR&quot;\" cssclass=\"grdBCell_WF_essential\"/><Cell col=\"1\" colspan=\"10\" text=\"bind:QST_ITEM_DESC\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell row=\"1\" col=\"1\" displaytype=\"checkboxcontrol\" text=\"bind:QST_ITEM_RSP1_YN\" edittype=\"expr:QST_ITEM_RSP1 == null || QST_ITEM_RSP1 == &quot;&quot; ? &quot;none&quot;:&quot;checkbox&quot;\"/><Cell row=\"1\" col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:QST_ITEM_RSP1\" textAlign=\"left\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"expr:QST_ITEM_RSP2 == null || QST_ITEM_RSP2 == &quot;&quot; ? &quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:QST_ITEM_RSP2_YN\"/><Cell row=\"1\" col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:QST_ITEM_RSP2\" textAlign=\"left\"/><Cell row=\"1\" col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"expr:QST_ITEM_RSP3 == null || QST_ITEM_RSP3 == &quot;&quot; ? &quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:QST_ITEM_RSP3_YN\"/><Cell row=\"1\" col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:QST_ITEM_RSP3\" textAlign=\"left\"/><Cell row=\"1\" col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"expr:QST_ITEM_RSP4 == null || QST_ITEM_RSP4 == &quot;&quot; ? &quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:QST_ITEM_RSP4_YN\"/><Cell row=\"1\" col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:QST_ITEM_RSP4\" textAlign=\"left\"/><Cell row=\"1\" col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"expr:QST_ITEM_RSP5 == null || QST_ITEM_RSP5 == &quot;&quot; ? &quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:QST_ITEM_RSP5_YN\"/><Cell row=\"1\" col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"bind:QST_ITEM_RSP5\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSatiInvest02","0","grdSatiInvest01:-1",null,"107","0",null,null,null,null,null,this);
            obj.set_binddataset("dsSatiInvest02");
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useFilter("false");
            obj.set_useCopy("false");
            obj.set_useContext("false");
            obj.set_useCheck("false");
            obj.set_useSort("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\"/><Row size=\"72\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:SEQ\" cssclass=\"grdBCell_WF_essential\"/><Cell col=\"1\" colspan=\"10\" text=\"bind:QST_ITEM_DESC\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" colspan=\"10\" displaytype=\"normal\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:QST_ITEM_RSP\" editlimit=\"4000\" editimemode=\"hangul\" editlengthunit=\"utf8\" textAlign=\"left\" textareaacceptsenter=\"true\" textareaimemode=\"hangul\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,207,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SR0010_D03.xfdl","lib::lib_WorkFlow.xjs");
        this.registerScript("SR0010_D03.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ SR0010_D03
        * 화면(명)	︰ 만족도 조사
        * 메뉴(경로)	︰ 공통
        * 화면 설명  	︰
        * 작성자		︰ WEMB
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일			작성자		이력
        *------------------------------------------------------------------
        * 2024.04.24	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.formObj;

        // this.selectServiceInfo = {
        // 	CALLBACK_ID		: ["select"],
        // 	CALL_SVC		: ["sr/SR0010D/select02"],
        //
        // 	IN_DS_WHERE		: [this.dsCond],
        // 	OUT_DS_OBJ		: [new Array(this.dsSatiInvest)]
        // };

        this.saveServiceInfo = {
        	CALLBACK_ID		: ["save"],
        	CALL_SVC		: ["sr/SR0010D/save02"],

        	IN_DS_OBJ		: [new Array(this.dsSatiInvest)],
        	OUT_DS_OBJ		: []
        };

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.formObj = obj;
        	this.gfnFormOnLoad(this, this.fnInit);
        	this.dsCond.setColumn(0, "REQ_ID", this.reqInfo.REQ_ID);
        }

        this.fnInit = function()
        {
        	this.fnCompInit();
        }

        // 조회
        this.fnSelectServiceInfo = function()
        {
        	// transaction
        	var sTranId = "selectSatiInvest";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "SR0010D/select02";            // 서비스명
            var sInDs = "dsCond=dsCond";                  	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsSatiInvest=dsSatiInvest";       			// 서버에서 수신할 데이타셋
            var sArg = "";                   				// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 저장
        this.fnSaveServiceInfo = function()
        {
        	var sTranId = "save";
            var sService = "SR0010D/save02";
            var sInDs = "dsSatiInvest=dsSatiInvest";
            var sOutDs = "";
            var sArg = "";
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        	switch(sSvcId)
        	{
        		case "selectSatiInvest" :
        			// 항목유형 - 일반항목만 필터사용하여 화면용 ds에 복사
                    this.dsSatiInvest.filter("QST_ITEM_TYPE == '01'");
                    this.dsSatiInvest01.copyData(this.dsSatiInvest, true);

                    // 항목유형 - 종합의견만 필터사용하여 화면용 ds에 복사
                    this.dsSatiInvest.filter("QST_ITEM_TYPE == '02'");
                    this.dsSatiInvest02.copyData(this.dsSatiInvest, true);
        			this.dsSatiInvest.filter("");
        			this.dsSatiInvest.clearData();

        			if(this.dsSatiInvest01.rowcount > 0)
        			{
        				var grd1H = nexacro.toNumber(this.grdSatiInvest01.height) + nexacro.toNumber(this.grdSatiInvest01.vscrollbar.max);
        				this.grdSatiInvest01.set_height(grd1H);

        				if(!this.grdSatiInvest01.visible) this.grdSatiInvest01.set_height(0);
        			}
        			else
        			{
        				this.grdSatiInvest01.set_height(0);
        			}

        			if(this.dsSatiInvest02.rowcount > 0)
        			{
        				var grd2H = nexacro.toNumber(this.grdSatiInvest02.height) + nexacro.toNumber(this.grdSatiInvest02.vscrollbar.max);
        				this.grdSatiInvest02.set_height(grd2H);

        				if(!this.grdSatiInvest02.visible) this.grdSatiInvest02.set_height(0);
        			}
        			else
        			{
        				this.grdSatiInvest02.set_height(0);
        			}
        			this.grdSatiInvest02.set_top("grdSatiInvest01:-1");

        			var formH = nexacro.toNumber(this.grdSatiInvest01.height) +
        						nexacro.toNumber(this.grdSatiInvest02.height) -
        						(nexacro.toNumber(this.grdSatiInvest02.height) > 0 ? 1 : 0);
        			//this.set_height(34 + formH);
        			this.setFormResetScroll();
        			//만족도 조사 현업이 아니면 안보이게
        			/*if(Ex.util.getSession('gvUserType') == "1" ||Ex.util.getSession('gvUserType') == "999"  )
        			{
        				this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight() + this.vscrollbar.max);
        			}
        			else
        			{
        				this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, 0);
        			}*/

        			this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight() + this.vscrollbar.max);

        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
        	if( Ex.isEmpty(varValue) ) return;

        	switch(pID)
        	{
        		case "" :	//
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	if (!varValue) return;

        	switch(mID)
        	{
        		case "" :
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        this.fnCompInit = function()
        {
        	//this.grdSrChIdcardDtlReq.displayRowType();
        	this.reqInfo.PARENT_FORM.setWfProcDivFormSize(this.parent, this.getOffsetHeight());
        	// 공통코드 조회
        	//this.fnGetCmmCd();

        	this.fnSelectServiceInfo();
        }
        this.fnSaveCheck = function(isRev)
        {
         	var nRowCnt  = this.dsSatiInvest01.rowcount;
         	var nChk     = 0;

         	for(var i=0; i<nRowCnt; i++)
        	{
        		var type = this.dsSatiInvest01.getColumn(i, "QST_ITEM_TYPE");
        		if(type == "01")
        		{
        			nChk = 0;

        			for(var j=1; j<=5; j++)
        			{
        			    var col = "QST_ITEM_RSP"+ j +"_YN";
        				var yn  = this.dsSatiInvest01.getColumn(i, col);
        				if (yn == "1")	nChk++;
        			}

        			if(nChk == 0)
        			{
        				var param = {
        					  id	: "RspCheckAlertI"							//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: (i+1) + "행의 만족도 조사를 확인하시기 바랍니다."		//메시지 내용
        					, arrparam : []										//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"										//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}
        		}
         	}

            this.dsSatiInvest.clearData();
            this.dsSatiInvest.copyData(this.dsSatiInvest01);
            this.dsSatiInvest.appendData(this.dsSatiInvest02);

        	this.dsSatiInvest.set_enableevent(false);
        	this.dsSatiInvest.set_updatecontrol(false);

        	for(var i=0; i<this.dsSatiInvest.rowcount; i++)
        	{	//OUTER JOIN으로 문항을 가져오므로 문항 응답 작성을 해도 U로만 넘어간다.
        		if(this.dsSatiInvest.getColumn(i, "ROWFLAG") == "U")
        		{
        			this.dsSatiInvest.setRowType(i, Dataset.ROWTYPE_UPDATE);
        		}
        	}
        	this.dsSatiInvest.set_updatecontrol(true);
        	this.dsSatiInvest.set_enableevent(true);
        	return true;
        }

        this.isUpdateForm = function()
        {
        	trace("[SR0010_D03] this.isUpdateForm() [dsSatiInvest01] : " + Ex.util.isUpdated(this.dsSatiInvest01));
        	trace("[SR0010_D03] this.isUpdateForm() [dsSatiInvest02] : " + Ex.util.isUpdated(this.dsSatiInvest02));

        	if(Ex.util.isUpdated(this.dsSatiInvest01) || Ex.util.isUpdated(this.dsSatiInvest02))
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.dsOnColumnChanged = function(obj,e)
        {
        	if(obj.id == "dsSatiInvest01")
        	{
        		var qstItemRspYnArr = ["QST_ITEM_RSP1_YN", "QST_ITEM_RSP2_YN", "QST_ITEM_RSP3_YN", "QST_ITEM_RSP4_YN", "QST_ITEM_RSP5_YN"];

        		obj.set_enableevent(false);

        		for(var i=0; i<qstItemRspYnArr.length; i++)
        		{
        			if(qstItemRspYnArr[i] != e.columnid)
        			{
        				obj.setColumn(e.row, qstItemRspYnArr[i], "0");
        			}
        		}
        		obj.set_enableevent(true);
        	}
        	obj.setUpdateRow(e);
        };

        this.setFormResetScroll = function()
        {
        	trace("[SR0010_D03] this.setFormResetScroll()");
        	this.formObj.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSatiInvest01.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSatiInvest02.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsSatiInvest.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("SR0010_D03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
