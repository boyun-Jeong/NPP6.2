(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DatasetList");
            this.set_titletext("Debug");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"STR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcCenterLine","50%","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaQueryEditor","5","29",null,null,"stcCenterLine:-5","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("txa_WF_normal");
            obj.set_wordWrap("char");
            obj.set_acceptstab("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","stcCenterLine:-10.00","29",null,null,"0","75",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("grd_WF_normal");
            obj.set_binddataset("dsData");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_extendsizetype("row");
            obj.set_selecttype("area");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt",null,"2","90","24","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsData");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btnEditorSize","4.00","2","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("에디터 확대/축소");
            obj.set_cursor("pointer");
            obj.set_tooltiptext("[CTRL+SHIFT+E] 확대/축소");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaErrMsg","stcCenterLine:-10",null,null,"70","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("txa_WF_normal");
            obj.set_wordWrap("char");
            obj.set_acceptstab("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnListSize","btnEditorSize:5.00","2","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("리스트 확대/축소");
            obj.set_cursor("pointer");
            obj.set_tooltiptext("[CTRL+SHIFT+L] 확대/축소");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCurString","btnListSize:50","2","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","edtCurString:10","6","14","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("▶");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChgString","stc00:5","2","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnReplace","edtChgString:2.00","2","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txaErrMsg","value","dsErr","MSG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbEditor.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ DEBUG/UTIL
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.changeQueryString = "";
        this.sel1;
        this.sel2;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.DatasetList_onload = function (obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.txaQueryEditor.set_acceptstab(true);
        	this.txaQueryEditor.setFocus();
        }

        this.fnExec = function()
        {
        	this.dsData.clear();
        	this.grdList.set_formats('<Formats><Format id="default"/></Formats>');
        	this.dsErr.clearData();

        	var sTranId = "exec01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "/sppExec";	// 서비스명
        	var sInDs = "dsCond=dsCond";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsData=dsData dsErr=dsErr";			// 서버에서 수신할 데이타셋
        	var sArg = "";                   			// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
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
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "exec01" : // 서비스 ID
        			this.grdList.createFormat();

        			if( this.dsErr.rowcount )
        			{
        				//trace('exec01 callbacak error');
        				trace(this.dsErr.getColumn(0, 'MSG'));
        				var opts = {
        					usedecorate		: true,
        					displaySecond	: 1,
        					toastType		: 'E'	// default ''
        				};
        				Ex.core.toast(this, "Error", null, opts);
        			}
        			else {
        				var opts = {
        					usedecorate		: true,
        					displaySecond	: 1,
        					toastType		: 'I'	// default ''
        				};
        				Ex.core.toast(this, "Complete", null, opts);
        			}
        			break;
        	}
        }

        this.btnSizeClickEvent = function(btnId)
        {
        	if(btnId == "btnEditorSize")
        	{
        		if(!this.txaQueryEditor)
        		{
        			this.txaQueryEditor.set_right("stcCenterLine:-5");
        			this.txaQueryEditor.set_visible(true);
        			this.stcCnt.set_visible(true);
        			this.grdList.set_visible(true);
        			this.txaErrMsg.set_visible(true);
        		}
        		else
        		{
        			if(this.txaQueryEditor.right != 0)
        			{
        				this.txaQueryEditor.set_right(0);
        				this.txaQueryEditor.set_visible(true);
        				this.stcCnt.set_visible(false);
        				this.grdList.set_visible(false);
        				this.txaErrMsg.set_visible(false);
        			}
        			else
        			{
        				this.txaQueryEditor.set_right("stcCenterLine:-5");
        				this.txaQueryEditor.set_visible(true);
        				this.stcCnt.set_visible(true);
        				this.grdList.set_visible(true);
        				this.txaErrMsg.set_visible(true);
        			}
        		}
        	}
        	else if(btnId == "btnListSize")
        	{
        		if(!this.grdList.visible)
        		{
        			this.grdList.set_left("stcCenterLine:-10");
        			this.txaErrMsg.set_left("stcCenterLine:-10");
        			this.txaQueryEditor.set_visible(true);
        			this.stcCnt.set_visible(true);
        			this.grdList.set_visible(true);
        			this.txaErrMsg.set_visible(true);
        		}
        		else
        		{
        			if(this.grdList.left != 0)
        			{
        				this.grdList.set_left(0);
        				this.txaErrMsg.set_left(true);
        				this.txaQueryEditor.set_visible(false);
        				this.stcCnt.set_visible(true);
        				this.grdList.set_visible(true);
        				this.txaErrMsg.set_visible(true);
        			}
        			else
        			{
        				this.grdList.set_left("stcCenterLine:-10");
        				this.txaErrMsg.set_left("stcCenterLine:-10");
        				this.txaQueryEditor.set_visible(true);
        				this.stcCnt.set_visible(true);
        				this.grdList.set_visible(true);
        				this.txaErrMsg.set_visible(true);
        			}
        		}
        	}
        };

        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.id)
        	{
        		case "btnEditorSize" :	//에디터 확대/축소
        		case "btnListSize" :	//에디터 확대/축소
        			this.btnSizeClickEvent(obj.id);
        			break;

        		case "btnReplace" :		//텍스트 변경
        			var allString = this.txaQueryEditor.value;
        			this.txaQueryEditor.set_value(nexacro.replaceAll(allString, this.edtCurString.value, this.edtChgString.value));
        			break;
        	}
        }

        this.txaQueryEditor_onkeydown = function(obj,e)
        {
         	var isSelectText	= !Ex.isEmpty(obj.getSelectedText()) ? true : false;
        	var value			= isSelectText ? obj.getSelectedText() : obj.value;
        	var allText			= obj.value;

        	this.changeQueryString = "";

        	if(e.keycode == 9)	//TAB키
        	{
        		if(isSelectText)
        		{
        			var selTextIdx = obj.getSelect();
        			//trace("selTextIdx[0]:[" + selTextIdx[0] + "] selTextIdx[1]:[" + selTextIdx[1] + "]");

        			var fromText	= allText.substring(0, selTextIdx[0]);
        			var toText		= allText.substring(selTextIdx[1]+ 1, allText.length-1);
        			//trace("fromText : " + fromText);
        			//trace("toText : " + toText);

        			var allTextRowVal = allText.split("\n");

        // 			for(var i=0; i<allTextRowVal.length; i++)
        // 			{
        // 				if(i>0)
        // 				{
        // 					allTextRowVal[i] = "\n" + allTextRowVal[i];
        // 				}
        // 			}

        			var selectStartRow;
        			var selectEndRow;
        			var selectUpStartRowData	= allText.substring(0, selTextIdx[0]).split("\n");	//선택영역 전까지의 로우수
        			var selectUpEndRowData		= allText.substring(0, selTextIdx[1]).split("\n");	//선택영역 까지의 로우수

        			selectStartRow	= selectUpStartRowData.length > 0 ? selectUpStartRowData.length-1 : 0;
        			selectEndRow	= selectUpEndRowData.length > 0 ? selectUpEndRowData.length-1 : 0;

        // 			trace("선택시작행:[" + selectStartRow + "] 선택종료행:[" + selectEndRow + "]" +
        // 				  "\nDATA:[" + allText.split("\n")[selectStartRow] + "]" +
        // 				  "\nDATA:[" + allText.split("\n")[selectEndRow] + "]"
        // 			);

        			var chgText = "";

        			var firstRowAdd = 0;
        			var cnt = 0;
        			for(var i=0; i<allTextRowVal.length; i++)
        			{
        				if(i>=selectStartRow && i<=selectEndRow)
        				{
        					if(e.shiftkey)
        					{
        						if(allTextRowVal[i].substring(0, 1) == "\t")
        						{
        							chgText += (i>0 ? "\n" : "") + allTextRowVal[i].substring(1, allTextRowVal[i].length);
        							if(i==selectStartRow)	firstRowAdd++;
        							else					cnt++;
        							//trace("if i=" + i + " chgText:[" + chgText + "]");
        						}
        						else
        						{
        							chgText += (i>0 ? "\n" : "") + allTextRowVal[i];
        							//trace("else[1] i=" + i + " chgText:[" + chgText + "]");
        						}
        					}
        					else
        					{
        						chgText += (i>0 ? "\n\t" : "\t") + allTextRowVal[i];
        						if(i==selectStartRow)	firstRowAdd++;
        						else					cnt++;
        					}
        				}
        				else
        				{
        					chgText += (i>0 ? "\n" : "") + allTextRowVal[i];
        					//trace("else[2] i=" + i + " chgText:[" + chgText + "]");
        				}
        			}

        			selTextIdx[0] = (e.shiftkey ? selTextIdx[0] - firstRowAdd : selTextIdx[0] + firstRowAdd);
        			selTextIdx[1] = (e.shiftkey ? selTextIdx[1] - (firstRowAdd + cnt) : selTextIdx[1] + (firstRowAdd + cnt) );

        			//trace("chgText:\n[" + chgText + "]");
        			//trace("firstRowAdd:[" + firstRowAdd + "] cnt:[" + cnt + "] selTextIdx[0]:[" + selTextIdx[0] + "] selTextIdx[1]:[" + selTextIdx[1] + "] chg selectText:\n" + chgText.substring(selTextIdx[0], selTextIdx[1]));

        			this.changeQueryString	= chgText;
        			this.sel1		= selTextIdx[0];
        			this.sel2		= selTextIdx[1];

        			if(e.shiftkey)	this.txaQueryEditor_oninput(obj);
        		}
        		e.preventDefault();
        		e.stopPropagation();
        	}

        	if( e.ctrlkey )
        	{
        		if( e.keycode == 13 )
        		{
        			if( !Ex.isEmpty(value) )
        			{
        				this.dsCond.setColumn(0, 'STR', value);
        				this.fnExec();
        				if(this.stcCenterLine.left != "50%")
        				{
        					this.btnSizeClickEvent("btnEditorSize");
        				}
        			}
        		}
        	}
        };

        this.datasetList_onkeydown = function(obj,e)
        {
        	//trace("this.datasetList_onkeydown() e.keycode : " + e.keycode);
        	if(e.ctrlkey && e.shiftkey)
        	{
        		if(e.keycode == 69)	//e키
        		{
        			this.btnSizeClickEvent("btnEditorSize");
        		}
        		else if(e.keycode == 76)	//l키
        		{
        			this.btnSizeClickEvent("btnListSize");
        		}
        		else if(e.keycode == 49)	//1키
        		{
        			this.parent.parent.parent.btnAddTab.click();
        		}
        	}
        };

        this.txaQueryEditor_oninput = function(obj,e)
        {
        	//trace("this.txaQueryEditor_oninput()");
        	if( !Ex.isEmpty(this.changeQueryString) )
        	{
        		obj.set_value(this.changeQueryString);
        		obj.setSelect(this.sel1, this.sel2);
        		//trace("confVal:\n[" + obj.value.substring(this.sel1, this.sel2) + "]");
        		this.changeQueryString = undefined;
        		this.sel1				= undefined;
        		this.sel2				= undefined;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DatasetList_onload,this);
            this.addEventHandler("onkeydown",this.datasetList_onkeydown,this);
            this.txaQueryEditor.addEventHandler("onkeydown",this.txaQueryEditor_onkeydown,this);
            this.txaQueryEditor.addEventHandler("oninput",this.txaQueryEditor_oninput,this);
            this.btnEditorSize.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnListSize.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnReplace.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("dbEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
