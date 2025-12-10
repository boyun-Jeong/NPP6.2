(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMultiSelectCombo");
            this.set_titletext("MultiSelectCombo");
            if (Form == this.constructor)
            {
                this._setFormPosition(140,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"chkedit\" type=\"STRING\" size=\"256\"/><Column id=\"chkvisible\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("mcbo_sta_WF_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"4","50","20","4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("OK");
            obj.set_visible("false");
            obj.set_cssclass("mcbo_btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAll","9","4","54","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("mcbo_chk_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCombo","1","28",null,null,"1","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCombo");
            obj.set_autofittype("col");
            obj.set_cssclass("mcbo_grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"expr:chkvisible == &quot;Y&quot; ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:chkedit == &quot;Y&quot; ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:chk\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",140,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comMultiSelectCombo.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 멀티콤보 컴포넌트
        * 메뉴(경로)	︰ 공통관리 > 플랫폼 > 공통
        * 화면 설명	︰ 공통 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.00
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일       작성자		이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        this.parentForm;
        this.comMultiSelectCombo_onload = function(obj, e)
        {
        // 	trace("this.comMultiSelectCombo_onload() this.id : " + this.id);
        // 	trace("this.comMultiSelectCombo_onload() this.parent.id : " + this.parent.id);
        // 	trace("this.comMultiSelectCombo_onload() this.parent.parent.id : " + this.parent.parent.id);
        // 	trace("this.comMultiSelectCombo_onload() this.parent.parent.parent.id : " + this.parent.parent.parent.id);
        // 	trace("this.comMultiSelectCombo_onload() this.parent.parent.parent.parent.id : " + this.parent.parent.parent.parent.id);
        // 	trace("this.comMultiSelectCombo_onload() this.parentForm.isbuttonokvisible : " + this.parentForm.isbuttonokvisible);
        	this.parentForm = this.parent.parent.parent;

        	if(this.parentForm.isbuttonokvisible) this.setBtnOkVisible(this.parentForm.isbuttonokvisible);
        }

        this.setBtnOkVisible = function(v)
        {
        	this.btnOk.set_visible(v)
        };

        this.setData = function(comp)
        {
        	this.parentForm = comp;

        	this.grdCombo.set_enableredraw(false);
        	this.dsCombo.set_enableevent(false);
        	this.dsCombo.clearData();

        	var innerdataset = comp.parent.innerdataset;

        	//trace("this.id : " + this.id + " this.parent.id : " + this.parent.id + " this.parent.form.id : " + this.parent.form.id);
        	//trace("comMultiSelectCombo this.setData() comp : " + comp + " comp.id : " + comp.id + " innerdataset : " + innerdataset);
        // 	trace("comp.parent.codecolumn : " + comp.parent.codecolumn);
        // 	trace("comp.parent.datacolumn : " + comp.parent.datacolumn);
        // 	trace("comp.parent.ischeckeditcolumn : " + comp.parent.ischeckeditcolumn);
        // 	trace("comp.parent.ischeckvisiblecolumn : " + comp.parent.ischeckvisiblecolumn);
        // 	trace("comp.parent.displayrowcount : " + comp.parent.displayrowcount);

        	if ( !Ex.isEmpty(innerdataset) )
        	{
        		var ds = comp.parent.form.lookup(innerdataset);

        		if ( !Ex.isEmpty(ds) )
        		{
        			var cnt = ds.rowcount;
        			var codecolumn = comp.parent.codecolumn || '';
        			var datacolumn = comp.parent.datacolumn || '';
        			var ischeckeditcolumn = comp.parent.ischeckeditcolumn || '';
        			var ischeckvisiblecolumn = comp.parent.ischeckvisiblecolumn || '';

        			var row, text, size, idx, width = 0;
        			//var font = this.grdCombo.currentstyle.font;
        			var font = this.grdCombo._getCurrentStyleInheritValue("font");
        			for (var i=0; i<cnt; i++)
        			{
        				row = this.dsCombo.addRow();
        				this.dsCombo.setColumn(row, "chk", "0");
        				this.dsCombo.setColumn(row, "code", ds.getColumn(i, codecolumn));
        				this.dsCombo.setColumn(row, "data", ds.getColumn(i, datacolumn));
        				this.dsCombo.setColumn(row, "chkedit", ds.getColumn(i, ischeckeditcolumn) || 'Y');
        				this.dsCombo.setColumn(row, "chkvisible", ds.getColumn(i, ischeckvisiblecolumn) || 'Y');
        			}

        			//trace("this.dsCombo.rowcount : " + this.dsCombo.rowcount);
        			//trace("comp.edtCode : " + comp.edtCode);

        			var value = comp.edtCode.value || "";
        			if ( !Ex.isEmpty(value) )
        			{
        				var codes = value.split(",");
        				var len = codes.length;
        				for (var i=0; i<len; i++)
        				{
        					row = this.dsCombo.findRow("code", codes[i]);
        					if ( row > -1 )
        					{
        						this.dsCombo.setColumn(row, "chk", "1");
        					}
        				}
        			}

        			// checkbox 는 set_value 로 onchanged 가 발생한다 ??
        			this.chkAll.set_enableevent(false);
        			if ( this.dsCombo.rowcount == this.dsCombo.getCaseCount("chk=='1'") )
        			{
        				this.chkAll.set_value("1");
        			}
        			else
        			{
        				this.chkAll.set_value("0");
        			}
        			this.chkAll.set_enableevent(true);

        			if ( this.grdCombo.vscrollbar )
        			{
        				this.grdCombo.vscrollbar.set_pos(0);
        			}
        		}
        	}

        	this.dsCombo.set_enableevent(true);
        	this.grdCombo.set_enableredraw(true);
        }

        // ok버튼을 미사용으로 전환하고 pdiv가 닫힐때 자동반영으로 변경
        this.applyData = function()
        {
        	//trace("this.applyData()~~~~~~~~~~~~~~~~~~~~");

        	var code = [];
        	var data = [];

        	var ds = this.dsCombo;
        	var val;
        	for (var i=0; i<ds.rowcount; i++)
        	{
        		if ( ds.getColumn(i, "chk") == "1" )
        		{
        			val = ds.getColumn(i, "code");
        			if ( !Ex.isEmpty(val) )
        			{
        				code.push(val);

        				val = ds.getColumn(i, "data");
        				val = Ex.isEmpty(val) ? undefined : val;
        				data.push(val);
        			}
        		}
        	}
        	var ret = {'code': code, 'data': data};
        	return ret;
        }

        // 전체 선택/해제
        this.chkAll_onchanged = function(obj, e)
        {
        	var chk = e.postvalue;
        	var ds = this.dsCombo;

        	ds.set_enableevent(false);
        	for (var i=0; i<ds.rowcount; i++)
        	{
        		if(ds.getColumn(i, "chkedit") == "Y")
        		{
        			ds.setColumn(i, "chk", chk);
        		}
        	}
        	ds.set_enableevent(true);

        	/*
        	var data = this.applyData();
        	this.parentForm.edtCode.set_value(data.code);
        	this.parentForm.edtData.set_value(data.data);
        	*/
        }

        this.btnOk_onclick = function(obj,  e)
        {
        	var ret = this.applyData();
        	//if( this.parentForm.parent.popupdiv.isPopup() ) this.parentForm.parent.popupdiv.closePopup(ret);
        	if( this.parent.isPopup() ) this.parent.closePopup(ret);
        }

        this.grdCombo_oncellclick = function(obj, e)
        {
        	if(e.col == 1) {
        		var chk = this.dsCombo.getColumn(e.row, "chk") == "1" ? "0" : "1";
        		this.dsCombo.setColumn(e.row, "chk", chk);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comMultiSelectCombo_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.chkAll.addEventHandler("onchanged",this.chkAll_onchanged,this);
            this.grdCombo.addEventHandler("oncellclick",this.grdCombo_oncellclick,this);
        };
        this.loadIncludeScript("comMultiSelectCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
