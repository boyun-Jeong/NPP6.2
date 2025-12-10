(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comGridHeaderFilterPop");
            this.set_titletext("New Form");
            this.set_border("1px solid #aaaaaa");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(150,215);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilterCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrgFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCacu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">=</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"DATA\">&gt;</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"DATA\">&lt;</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"DATA\">&gt;=</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"DATA\">&lt;=</Col></Row><Row><Col id=\"CODE\">00</Col><Col id=\"DATA\">범위</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcEmpty01","50%","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelList","290","0",null,"32","-210",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택 보기");
            obj.set_cssclass("btn_WF_normal");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFilter","0","34",null,null,"0","33",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsFilter");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autoFilter("false");
            obj.set_useFilter("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\" band=\"left\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"값\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01_00","33.33%","0","4",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply","1","grdFilter:2",null,"30","stcEmpty01_00:0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmpty01_00_00","66.66%","0","4",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","stcEmpty01_00_00:-2","grdFilter:2",null,"30","1",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllList","210","0",null,"32","-135",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 보기");
            obj.set_cssclass("btn_WF_normal");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear","stcEmpty01_00:-2","grdFilter:2",null,"30","stcEmpty01_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("해제");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCacu",null,"5","45","24","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_innerdataset("dsCacu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_visible("false");
            obj.set_value("=");
            obj.set_index("0");
            obj.set_text("=");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","5","5","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchTo","5","edtSearch:5","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",150,215,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comGridHeadFilterPop.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ comGridHeadFilterPop.xfdl
        * 화면(명)		︰ Grid Filter 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ Grid Filter 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.07.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.07.00	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.fv_combocodecol; //20231211 박종민
        this.fv_combodatacol; //20231211 박종민

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objGrid;
        this.nCol;
        this.objConfig;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.edtSearch.set_right(5);
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        //필터 리스트 데이터셋 생성 함수 호출
        /**
        * @description 	      : 필터 리스트 데이터셋 생성 함수
        * @param objGrid	  : 필터 적용된 그리드 컴포넌트
        * @param nCol	  	  : 팝업이 호출된 Head Col Index
        * @param objConfig	  : 필터 설정 정보
        * @return             : 없음
        */
        this.fnMakeAllFilterDataset = function(objGrid, nCol, objConfig)
        {
        	var nRowCnt = objGrid.getFormatRowCount();
        	var nHeadRowCnt = 0;

        	//그리드 Head Row 갯수 구하기
        	for(i=0; i<nRowCnt; i++)
        	{
        		if(objGrid.getFormatRowProperty(i, "band") == "head") nHeadRowCnt++;
        	}

        	var hIdx = -1;

        	for(var i=0; i<objGrid.getCellCount("head"); i++)
        	{
        		//현재 Cell의 시작 Row Index
        		var nHeadRowStart = objGrid.getCellProperty("head", i, "row");

        		//현재 Cell의 Row Sapn
        		var nHeadRowSpan = objGrid.getCellProperty("head", i, "rowspan");

        		//현재 Cell의 마지막 Row Index
        		var nHeadRowEnd = nHeadRowStart + nHeadRowSpan -1;

        		//Head 마지막 Row에 해당하는 Cell에 Filter 기능 추가
        		if (nHeadRowEnd == nHeadRowCnt-1)
        		{
        			var headCol = objGrid.getCellProperty("head", i, "col");

        			//trace("i=" + i + " headCol : " + headCol);
        			if(nCol == headCol)
        			{
        				hIdx = i;
        				break;
        			}
        		}
        	}

        	//trace("before ****this.fnMakeAllFilterDataset() hIdx : " + hIdx);
        	/*
        	for(var i=0; i<objGrid.getCellCount("head"); i++)
        	{
        		var headId = objGrid.getCellProperty("Head", i, "id");
        		if(headId == ("head" + hIdx))
        		{
        			hIdx = objGrid.getCellProperty("Head", i, "col");
        			break;
        		}
        	}
        	trace("after ****this.fnMakeAllFilterDataset() hIdx : " + hIdx);
        	*/

        	this.grdFilter.setCellProperty("Head", 1, "text", Ex.core.word("값"));
        	this.btnApply.set_enable(true);

        	this.objGrid = objGrid;
        	this.nCol = hIdx;
        	this.objConfig = objConfig;

        	var objDs = objGrid.getBindDataset();
        	//trace("this.fnMakeAllFilterDataset() objConfig.cols.length : " + objConfig.cols.length + " hIdx : " + hIdx);
        	/*
        	for(var i=0; i<objConfig.cols.length; i++)
        	{
        		var hText = objGrid.getCellProperty("head", i, "text");
        		trace("this.fnMakeAllFilterDataset() i=" + i + " nCol : " + nCol + " hIdx : " + hIdx + " hText : " + hText + " objConfig.cols[i].bind : " + objConfig.cols[i].bind);
        	}
        	*/
        	var objCol = objConfig.cols[hIdx];
        	var nRowCount = objDs.getRowCountNF();
        	//var nRowCount = objDs.rowcount;
        	var sColumnId = objCol.bind;
        	var sPreValue = objCol.value;
        	var arrPreValue;
        	var sValue;
        	var nIdx;

        	/*
        	for(var i=0; i<objConfig.cols.length; i++)
        	{
        		if( !Ex.isEmpty(objConfig.cols[i].value) )
        		{
        			trace("this.fnMakeAllFilterDataset() i=" + i + " col filterStr : " + objConfig.cols[i].value);
        		}
        	}
        	*/

        	//trace("this.fnMakeAllFilterDataset() hIdx : " + hIdx + " sPreValue : " + sPreValue);
        	var nBodyCol = -1;
        	var filterBodyCell = objGrid.getCellProperty("head", hIdx, "validation");
        	var hText = objGrid.getCellProperty("head", hIdx, "text");
        	//trace("this.fnMakeAllFilterDataset() nCol=" + nCol + " hIdx : " + hIdx + " hText : " + hText + " filterBodyCell : " + filterBodyCell + " sColumnId : " + sColumnId);

        	if( !Ex.isEmpty(filterBodyCell) )
        	{
        		//trace("this.fnMakeAllFilterDataset() !Ex.isEmpty(filterBodyCell)");
        		for(var i=0; i<objGrid.getCellCount("body"); i++)
        		{
        			var bCellId = objGrid.getCellProperty("body", i, "id");
        			//trace("i=" + i + " bCellId : " + bCellId);
        			if(filterBodyCell == bCellId)
        			{
        				nBodyCol = i;
        				break;
        			}
        		}
        		//trace("this.fnMakeAllFilterDataset() !Ex.isEmpty(filterBodyCell) nBodyCol : " + nBodyCol);
        	}
        	else
        	{
        		//trace("this.fnMakeAllFilterDataset() Ex.isEmpty(filterBodyCell)");
        		var objRectLeft = objGrid.getCellRect(-1, hIdx).left;
        		//trace("i=" + i + " objRect.left : " + objRect.left + " objRect.right : " + objRect.right);
        		for(var j=0; j<objGrid.getCellCount("body"); j++)
        		{
        			if(nCol == objGrid.getCellProperty("Body", j, "col"))
        			{
        				nBodyCol = j;
        				break;
        			}
        		}
        	}
        	//trace("this.fnMakeAllFilterDataset() nBodyCol : " + nBodyCol);
        	var dispType		= objGrid.getCellProperty("body", nBodyCol, "displaytype");
        	var combodataset	= objGrid.getCellProperty("body", nBodyCol, "combodataset");
        	var combocodecol	= objGrid.getCellProperty("body", nBodyCol, "combocodecol");
        	var combodatacol	= objGrid.getCellProperty("body", nBodyCol, "combodatacol");
        	var textAlign		= objGrid.getCellProperty("body", nBodyCol, "textAlign");

        	//20231211 박종민
        	this.fv_combocodecol = combocodecol;
        	this.fv_combodatacol = combodatacol;

        	/*
        	trace("this.fnMakeAllFilterDataset() displaytype : " + dispType);
          	trace("this.fnMakeAllFilterDataset() combodataset : " + combodataset);
          	trace("this.fnMakeAllFilterDataset() combocodecol : " + combocodecol);
          	trace("this.fnMakeAllFilterDataset() combodatacol : " + combodatacol);
         	trace("this.fnMakeAllFilterDataset() textAlign : " + textAlign);
        	*/
        	if( Ex.isEmpty(textAlign) ) textAlign = "left";

        	this.grdFilter.setCellProperty("body", 1, "textAlign", textAlign);

        	if(dispType == "combotext")
        	{
        		if( !Ex.isEmpty(combodataset) && !Ex.isEmpty(combocodecol) && !Ex.isEmpty(combodatacol) )
        		{
        			//trace("is Not Empty combodataset : " + combodataset);
        			if(String(combodataset).indexOf("expr:") == -1 && String(combocodecol).indexOf("expr:") == -1 && String(combodatacol).indexOf("expr:") == -1)
        			{
        				//trace("indexOf -1");
        				var objDsComp = objGrid.parent;
        				//trace("start objDsComp ::::: " + objDsComp + " objDsComp[combodataset] : " + objDsComp[combodataset]);
        				var cnt = 0;

        				while( objDsComp )
        				{
        					//trace("while cnt=" + cnt + " objDsComp[combodataset] : " + objDsComp[combodataset]);
        					if(objDsComp[combodataset])
        					{
        						var strType = objDsComp[combodataset].toString().toUpperCase();
        						//trace("strType : " + strType);
        						if(strType == "[OBJECT DATASET]")
        						{
        							objDsComp = objDsComp[combodataset];
        							break;
        						}
        					}
        					else
        					{
        						//objDsComp = objDsComp.parent[combodataset];
        						if(objDsComp.parent)
        						{
        							objDsComp = objDsComp.parent;

        							if(objDsComp[combodataset])
        							{
        								var strType = objDsComp[combodataset].toString().toUpperCase();
        								//trace("strType : " + strType);
        								if(strType == "[OBJECT DATASET]")
        								{
        									objDsComp = objDsComp[combodataset];
        									break;
        								}
        							}
        						}
        						else
        						{
        							break;
        						}
        					}
        					cnt++;
        				}

        				var gridCboDs;

        				if(this.isValidObject("dsCombo"))
        				{
        					//trace("dsCombo isValidObject");
        					gridCboDs = this["dsCombo"];
        				}
        				else
        				{
        					//trace("dsCombo is InValidObject");
        					gridCboDs = new Dataset();
        					gridCboDs.set_name("dsCombo");
        					this.addChild("dsCombo", gridCboDs);
        				}

        				//trace("gridCboDs : " + gridCboDs);
        				//trace(objDsComp.saveXML());

        				gridCboDs.assign(objDsComp);
        				this.grdFilter.setCellProperty("body", 1, "displaytype", dispType);
        				this.grdFilter.setCellProperty("body", 1, "combodataset", "dsCombo");
        				this.grdFilter.setCellProperty("body", 1, "combocodecol", combocodecol);
        				this.grdFilter.setCellProperty("body", 1, "combodatacol", combodatacol);
        			}
        			else
        			{
        				this.grdFilter.setCellProperty("body", 1, "displaytype", "normal");
        			}
        		}
        		else
        		{
        			this.grdFilter.setCellProperty("body", 1, "displaytype", "normal");
        		}
        	}
        	else
        	{
        		if(this.isValidObject("dsCombo"))
        		{
        			this.dsCombo.clearData();
        		}

        		if(String(dispType).indexOf("expr:") == -1)
        		{
        			this.grdFilter.setCellProperty("body", 1, "displaytype", dispType);

        			if(dispType == "date")
        			{
        				var calDateFmt = objGrid.getCellProperty("body", nBodyCol, "calendardateformat");
        				var calEditFmt = objGrid.getCellProperty("body", nBodyCol, "calendareditformat");
        				if( !Ex.isEmpty(calDateFmt) ) this.grdFilter.setCellProperty("body", 1, "calendardateformat", calDateFmt);
        				if( !Ex.isEmpty(calEditFmt) ) this.grdFilter.setCellProperty("body", 1, "calendareditformat", calEditFmt);
        			}
        		}
        	}

        	//기존에 설정된 필터 문자열이 존재하는 경우
        	//문자열을 Array로 분해
        	//trace("this.fnMakeAllFilterDataset() sPreValue : " + sPreValue);
        	if(sPreValue)	arrPreValue = sPreValue.split("¶¶");

        	if(arrPreValue)
        	{
        		for(var i=0; i<arrPreValue.length; i++)
        		{
        			if(arrPreValue[i] == "EmpTy")	arrPreValue[i] = "";
        		}
        	}

        	this.dsFilter.set_enableevent(false);
        	objDs.set_enableevent(false);
        	//this.dsFilter.clearData();
        	this.dsFilter.clear();
        	this.dsFilter.addColumn("CHK", "STRING", 256);
        	var colInfo = objDs.getColumnInfo(sColumnId);
        	var colType = "STRING";

        	if( !Ex.isEmpty(colInfo) ) colType = objDs.getColumnInfo(sColumnId).type;
        	this.dsFilter.addColumn("CODE", colType, 256);

        	this.dsOrgFilter.clearData();

        	if(dispType == "checkboxcontrol")
        	{
        		var yCnt = objDs.getCaseCount(sColumnId + "=='Y'");
        		var nCnt = objDs.getCaseCount(sColumnId + "=='N'");

        		if(yCnt > 0 || nCnt > 0)
        		{
        			this.grdFilter.setCellProperty("body", 1, "checkboxtruevalue", "Y");
        			this.grdFilter.setCellProperty("body", 1, "checkboxfalsevalue", "N");
        		}
        	}

        	//trace("this.fnMakeAllFilterDataset() nRowCount : " + nRowCount);

        	for(i=0; i<nRowCount; i++)
        	{
        		//원본데이터셋의 데이터 가져오기
        		sValue = objDs.getColumnNF(i, sColumnId);

        		//필터 리스트 데이터셋에 존재 여부 확인
        		var nFRow = this.dsFilter.findRow("CODE", (Ex.isEmpty(sValue) ? "" : sValue) );

        		//trace("i= " + i + " nFRow : " + nFRow + " sValue : " + (Ex.isEmpty(sValue) ? "" : sValue));
        		//필터 리스트에 해당 컬럼 값이 없을 경우 데이터 추가
        		if(nFRow == -1)
        		{
        			var nRow = this.dsFilter.addRow();
        			this.dsFilter.setColumn(nRow, "CHK", "0");
        			this.dsFilter.setColumn(nRow, "CODE", (Ex.isEmpty(sValue) ? "" : sValue));

        			var fORow = objDs.findRow(sColumnId, (Ex.isEmpty(sValue) ? "" : sValue));

        			//trace("i=" + i + " fORow : " + fORow + " sValue : " + sValue);

        			//추가한 컬럼값이 기존 필터 스트링이 있을 경우
        			if(arrPreValue)
        			{
        				//trace("추가한 컬럼값이 기존 필터 스트링이 있을 경우");
        				nIdx = arrPreValue.indexOf(String(( (Ex.isEmpty(sValue) ? "" : sValue))));
        				if(nIdx!=-1)
        				{
        					//체크박스 선택 상태로 변경
        					this.dsFilter.setColumn(nRow, "CHK", "1");
        				}
        			}
        			else
        			{
        				//trace("추가한 컬럼값이 기존 필터 스트링이 없을 경우");
        				var fRow = objDs.findRow(sColumnId, (Ex.isEmpty(sValue) ? "" : sValue));
        				if(fRow > -1) this.dsFilter.setColumn(nRow, "CHK", "1");
        			}
        		}
        	}

        	if( Ex.isEmpty(sPreValue) )
        	{
        		for(i=0; i<nRowCount; i++)
        		{
        			this.dsFilter.setColumn(i, "CHK", "1");
        		}
        	}

        	//0번째 Row가 선택되도록 설정
        	this.dsFilter.set_rowposition(0);

        	objDs.set_enableevent(true);
        	this.dsFilter.set_enableevent(true);

        	this.dsFilter.set_keystring("S:+CODE");

        	if(this.dsFilter.rowcount == this.dsFilter.getCaseCount("CHK=='1'"))
        	{
        		this.grdFilter.setCellProperty("Head", 0, "text", "1");
        	}
        	else
        	{
        		this.grdFilter.setCellProperty("Head", 0, "text", "0");
        	}
        	this.dsFilter.set_rowposition(0);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAllList" :
        			this.fnMakeAllFilterDataset(this.objGrid, this.nCol, this.objGrid.config);
        			break;

        		case "btnSelList" :
        			this.dsFilter.filter("CHK=='1'");
        			var chkCnt = this.dsFilter.getCaseCount("CHK=='1'");
        			if(chkCnt > 0) this.grdFilter.setCellProperty("Head", 0, "text", "1");
        			else this.grdFilter.setCellProperty("Head", 0, "text", "0");

        			//this.fnMakeFilterDataset(this.objGrid, this.nCol, this.objGrid.config);
        			break;

        		case "btnApply" :
        			if( !Ex.isEmpty(this.dsFilter.filterstr) )
        			{
        				var filterStr = this.dsFilter.filterstr;
        				filterStr = "(" + filterStr + ")";
        				filterStr += " && CHK=='1'";
        				this.dsFilter.set_filterstr(filterStr);
        				this.dsFilterCopy.copyData(this.dsFilter, true);

        				this.dsFilter.set_filterstr("");

        				for(var i=0; i<this.dsFilter.rowcount; i++)		this.dsFilter.setColumn(i, "CHK", "0");
        				for(var i=0; i<this.dsFilterCopy.rowcount; i++)	this.dsFilter.setColumn(this.dsFilter.findRow("CODE", this.dsFilterCopy.getColumn(i, "CODE")), "CHK", "1");
        			}
        			else
        			{
        				if(this.dsFilter.getCaseCount("CHK=='1'") == this.dsFilter.rowcount)
        				{
        					for(var i=0; i<this.dsFilter.rowcount; i++)	this.dsFilter.setColumn(i, "CHK", "0");
        				}
        			}
        			this.parent.closePopup({"targetObj" : this.parent, "rtnValue" : "apply"});
        			break;

        		case "btnClear" :
        			this.dsFilter.set_filterstr("");

        			for(var i=0; i<this.dsFilter.rowcount; i++)
        			{
        				this.dsFilter.setColumn(i, "CHK", "0");
        			}
        			this.parent.closePopup({"targetObj" : this.parent, "rtnValue" : "apply"});
        			break;

        		case "btnClose" :
        			this.parent.closePopup({"targetObj" : this.parent, "rtnValue" : "cancel"});
        			break;
        	}
        }

        this.onGridCellClick = function(obj,e)
        {
        	//trace("e.row : " + e.row + " e.cell : " + e.cell);

        	if(e.cell == 1)
        	{
        		var conCHK = obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), "CHK") == "1" ? "0" : "1";
        		//trace("conCHK : " + conCHK);
        		obj.getBindDataset().setColumn(obj.getDatasetRow(e.row), "CHK", conCHK);
        	}
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	var CHKCnt = obj.getCaseCount("CHK=='1'");

        	if(obj.rowcount > 0 && CHKCnt == obj.rowcount) this.grdFilter.setCellProperty("Head", 0, "text", "1");
        	else this.grdFilter.setCellProperty("Head", 0, "text", "0");

        	if(CHKCnt == 0) this.btnApply.set_enable(false);
        	else this.btnApply.set_enable(true);
        };

        this.edtOnKeyUp = function(obj,e)
        {
        	var findCboCode = [];
        	if(this.isValidObject("dsCombo"))
        	{
        		for(var i=0; i<this.dsCombo.rowcount; i++)
        		{
        			var cboCode = this.dsCombo.getColumn(i, this.fv_combocodecol); //20231211 박종민
        			var cboText = this.dsCombo.getColumn(i, this.fv_combodatacol); //20231211 박종민
        			//var cboCode = this.dsCombo.getColumn(i, "CMM_CD");
        			//var cboText = this.dsCombo.getColumn(i, "CMM_CD_NM");
        			if(cboText.indexOf(obj.value) > -1)
        			{
        				findCboCode.push(cboCode);
        			}
        		}
        	}

        	if( Ex.isEmpty(obj.value) )
        	{
        		this.dsFilter.set_filterstr("");
        	}
        	else
        	{
        		var filterStr = "CODE.indexOf('" + obj.value + "') > -1";
        		for(var i=0; i<findCboCode.length; i++)
        		{
        			if( !Ex.isEmpty(filterStr) )	filterStr += " || ";
        			filterStr += "CODE.indexOf('" + findCboCode[i] + "') > -1";
        		}
        		this.dsFilter.set_filterstr(filterStr);
        	}

        	/*
        	if( !Ex.isEmpty(obj.value) )
        	{
        		for(var i=0; i<this.dsFilter.rowcount; i++)
        		{
        			this.dsFilter.setColumn(i, "CHK", "1");
        		}
        	}
        	*/

        	if(this.dsFilter.rowcount == this.dsFilter.getCaseCount("CHK=='1'"))
        	{
        		this.grdFilter.setCellProperty("Head", 0, "text", "1");
        	}
        	else
        	{
        		this.grdFilter.setCellProperty("Head", 0, "text", "0");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSelList.addEventHandler("onclick",this.fnCommOnclick,this);
            this.grdFilter.addEventHandler("oncellclick",this.onGridCellClick,this);
            this.btnApply.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnAllList.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnClear.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edtSearch.addEventHandler("onkeyup",this.edtOnKeyUp,this);
            this.edtSearchTo.addEventHandler("onkeyup",this.edtOnKeyUp,this);
            this.dsFilter.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsFilterCopy.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsOrgFilter.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("comGridHeadFilterPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
