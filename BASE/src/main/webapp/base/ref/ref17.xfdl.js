(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref14");
            this.set_titletext("ROWLFLAG");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTemp01", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">A</Col><Col id=\"Column1\">B</Col><Col id=\"Column2\">C</Col><Col id=\"ROWFLAG\">I</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">AA</Col><Col id=\"Column1\">BB</Col><Col id=\"Column2\">CC</Col><Col id=\"ROWFLAG\">U</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">AAA</Col><Col id=\"Column1\">BBB</Col><Col id=\"Column2\">CCC</Col><Col id=\"ROWFLAG\">D</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">AAAA</Col><Col id=\"Column1\">BBBB</Col><Col id=\"Column2\">CCCC</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">AAAAA</Col><Col id=\"Column1\">BBBBB</Col><Col id=\"Column2\">CCCCC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp02", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">D</Col><Col id=\"Column1\">E</Col><Col id=\"Column2\">F</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">DD</Col><Col id=\"Column1\">EE</Col><Col id=\"Column2\">FF</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("TextArea00","0","0","800","380",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("ROWFLAG 처리 (ref::ref17.xfdl)\n\n넥사크로에서 제공하는 Dataset RowType은 제한사항이 많아 SPP에서는 Dataset의 ROWFLAG 컬럼을 기준으로 행상태를 체크하도록 한다.\nROWFLAG는 예약어이므로 행상태 목적 외 사용을 금지한다.\nROWFLAG 처리와 행상태 표기를 위해 Dataset과 Grid의 처리가 필요하다. (자세한 처리는 script 참조)\n\n1. Dataset 처리\n  - Dataset컬럼중 ROWFLAG 컬럼이 들어 있어야 한다.\n    - 쿼리를 통해 Dataset 형식을 받아오는 경우, \" \'\' AS ROWFLAG \"를 추가하여 ROWFLAG컬럼이 생성되도록 쿼리문을 작성한다.\n  - Dataset oncolumnchanged event에 아래 내용을 추가한다.\n    this.dsTemp01_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)\n    {\n        obj.setUpdateRow(e);\t// ROWFLAG컬럼 변경을 위한 함수 호출\n    }\n\t  \n2. Grid 처리\n  = binding된 ROWFLAG 컬럼이 필요함\n  - ROWFLAG 상태를 Grid상에 아이콘으로 표기하기 위한 전처리가 필요함. fnInit 등 폼 로드 후 호출한다.\n    this.fnInit = function()\n    {\n        this.grdTemp01.displayRowType();\t// ROWFLAG가 binding되어있는 컬럼의 아이콘 표기를 위한 함수 호출\n    }\n\t");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTemp01","270","434","530","270",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsTemp01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"Column0\"/><Cell col=\"3\" text=\"Column1\"/><Cell col=\"4\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTemp02","840","434","800","270",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsTemp02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"Column0\"/><Cell col=\"3\" text=\"Column1\"/><Cell col=\"4\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc01","270","410","265","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("grdTemp01 - dsTemp01");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00","840","410","265","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("grdTemp02 - dsTemp02");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","840","0","800","380",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("ROWFLAG 처리를 위한 Dataset Event\n\n1. setAddRow();\n   - addRow()와 동일하나 ROWFLAG에 신규 플래그 값(\'I\')을 추가한다.\n   \n2. setInsertRow(nRow);\n   - insertRow(nRow)와 동일하나 ROWFLAG에 신규 플래그 값(\'I\')을 추가한다.\n   \n3. setDeleteRow();\n   - 호출 당시 ROWFLAG에 따라 다르게 동작함.\n   - 호출 시 ROWFLAG ->\t호출 후 ROWFLAG\n\t1. \'I\'\t->\tdeleteRow()로 동작하여 신규 추가 행을 삭제한다.\n\t2. \'U\'\t->\tROWFLAG값을 \'D\'로 변경한다.\n\t3. \'D\'\t->\tROWFLAG값을 원복한다.\n   \n4. setCopyRow(nToRow, objDataset, nFromRow, strColInfo);\n   - copyRow()와 동일하나 ROWFLAG 컬럼을 제외하고 카피한다.\n");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","1540","408","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("setAddRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsert","1435","408","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("setInsertRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","1330","408","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("setDeleteRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy","1225","408","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("setCopyRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset","1119","408","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("초기화");
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
        this.registerScript("ref17.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		: ROWFLAG 핸들링 가이드
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: ROWFLAG 핸들링 가이드
        * 작성자		: WEMB
        * 작성일		:
        * 수정이력		:
        *------------------------------------------------------------------
        * 수정일			작성자			이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	/*
        	 * ROWFLAG (행상태) icon 표기할 그리드에 대하여 displayRowType()을 최초에 호출해준다.
        	 */
        	this.grdTemp01.displayRowType();
        	this.grdTemp02.displayRowType();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
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

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/

        /*
         * Dataset 변경에 따라 ROWFLAG 처리가 들어가야 하므로 setAddRow, setInsertRow, setDeleteRow, setCopyRow를 활용한다.
         */
        this.fnButtonComOnclick = function(obj, e)
        {
            var sObjId = obj.name;
            switch(sObjId)
        	{
        		// addRow()와 기본적으로 동일. 신규 추가한 행의 rowposition을 return한다.
                case "btnAdd" :
        			var rowPos = this.dsTemp02.setAddRow();
        			break;

        		// insertRow()와 기본적으로 동일. 신규 추가한 행의 rowposition을 return한다.
        		case "btnInsert" :
        			var rowPos = this.dsTemp02.setInsertRow(0);
        			break;

        		// deleteRow()와 다르게 행을 삭제하지 않는다.
        		// 호출 시 ROWFLAG ->	호출 후 ROWFLAG
        		//   1. 'I'			->	deleteRow()로 동작하여 신규 추가 행을 삭제한다.
        		//   2. 'U'			->	ROWFLAG값을 'D'로 변경한다.
        		//   3. 'D'			->	ROWFLAG값을 원복한다.
        		case "btnDelete" :
        			this.dsTemp02.setDeleteRow();

        			// CHK컬럼 사용 시, 선택 삭제를 위해 Common Function의 fnDelete()를 활용한다.
        			// this.fnDelete(this.dsTemp02);
        			break;

        		case "btnCopy" :
        			this.dsTemp02.setCopyRow(this.dsTemp02.setAddRow(), this.dsTemp01, this.dsTemp01.rowposition);
        			break;

        		case "btnReset" :
        			this.dsTemp02.reset();
        			break;
            }
        }

        // dataset oncolumnchanged event
        this.fnCommOncolumnchanged = function(obj,e)
        {
        	/*
        	 * ROWFLAG 변경 처리를 위해 ROWFLAG 처리할 Dataset의 oncolumnchanged event 안에서 setUpdateRow(e)를 호출해준다.
        	 */
        	obj.setUpdateRow(e);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAdd.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnInsert.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnDelete.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnCopy.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnReset.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.dsTemp01.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsTemp02.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
        };
        this.loadIncludeScript("ref17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
