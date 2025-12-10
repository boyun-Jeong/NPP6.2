(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comPopCalendar");
            this.set_titletext("calendar");
            this.getSetter("scrollbars").set("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,318);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dataKR\" type=\"STRING\" size=\"256\"/><Column id=\"dataENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"dataKR\">1월</Col><Col id=\"dataENG\">Jan</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"dataKR\">2월</Col><Col id=\"dataENG\">Feb</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"dataKR\">3월</Col><Col id=\"dataENG\">Mar</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"dataKR\">4월</Col><Col id=\"dataENG\">Apr</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"dataKR\">5월</Col><Col id=\"dataENG\">May</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"dataKR\">6월</Col><Col id=\"dataENG\">Jun</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"dataKR\">7월</Col><Col id=\"dataENG\">Jul</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"dataKR\">8월</Col><Col id=\"dataENG\">Aug</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"dataKR\">9월</Col><Col id=\"dataENG\">Sep</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"dataKR\">10월</Col><Col id=\"dataENG\">Oct</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"dataKR\">11월</Col><Col id=\"dataENG\">Nov</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"dataKR\">12월</Col><Col id=\"dataENG\">Dec</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calMonth","0","0",null,"278","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","250","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_calmonthbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","277","250","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_calbtnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrevY","11","1","25","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_yearprev");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrevM","36","1","25","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_monthprev");
            this.addChild(obj.name, obj);

            obj = new Button("btnNextM","189","1","25","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_monthnext");
            this.addChild(obj.name, obj);

            obj = new Button("btnNextY","214","1","25","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_yearnext");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYear","61","1","68","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("cd");
            obj.set_cssclass("cmb_WF_calendar");
            obj.set_displayrowcount("8");
            obj.set_innerdataset("dsYear");
            obj.set_value("1");
            obj.set_index("1");
            obj.set_text("Feb");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMonth","129","1","60","43",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKR");
            obj.set_cssclass("cmb_WF_calendar");
            obj.set_displayrowcount("8");
            obj.set_innerdataset("dsMonth");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnToday","1","278","64","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Today");
            obj.set_cssclass("btn_WF_textblue");
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
        this.registerScript("comPopCalendar.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 공통
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

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.minYear;
        this.maxYear;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.fnInit();
        }

        this.fnInit = function()
        {
        	var strDate = Ex.util.today();
        	var sYY = parseInt(strDate.substr(0,4));
        	var sMM = strDate.substr(4,2);
        	var sDD = strDate.substr(6,4);

        	var nRow = -1;
        	this.dsYear.set_enableevent(false);
        	this.minYear = 1980;
        	this.maxYear = sYY+20;
        	for(var i=this.minYear; i<=this.maxYear ;i++)
        	{
        		nRow = this.dsYear.addRow();
        		this.dsYear.setColumn(nRow, "cd" , i);
        	}
        	this.dsYear.set_enableevent(true);

        	//trace("strDate="+strDate+",sYY="+sYY+",sMM="+sMM);
        	this.calMonth.set_value(strDate);
        	this.cboMonth.set_value(sMM);
        	this.cboYear.set_value(sYY);
        }
        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnSetDate = function(strDate)
        {
        	strDate = strDate||'';
        	strDate = strDate.toString();
        	if( Ex.isEmpty(strDate) ) strDate = Ex.util.today();
        	var sYY = strDate.substr(0,4);
        	var sMM = strDate.substr(4,2)||'01';
        	var sDD = strDate.substr(6,4)||'01';

        	if( sYY < this.minYear ) {

        		var fRow  = this.dsYear.findRow("cd",sYY);
        		if( fRow < 0 ) {
        			this.dsYear.insertRow(0);
        			this.dsYear.setColumn(0, "cd" , sYY);
        		}
        	}
        	if( sYY > this.maxYear ) {

        		var fRow  = this.dsYear.findRow("cd",sYY);
        		if( fRow < 0 ) {
        			var nRow = this.dsYear.addRow();
        			this.dsYear.setColumn(nRow, "cd" , sYY);
        		}
        	}
        	this.calMonth.set_value(strDate);
        	this.cboMonth.set_value(sMM);
        	this.cboYear.set_value(sYY);
        }
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.cboMonth_onitemchanged = function(obj, e)
        {
        	var strDate = this.calMonth.value.toString();
        	var sYY = strDate.substr(0,4);
        	var sMM = e.postvalue;
        	var sDD = '01';

        	strDate = sYY+sMM+sDD;

        	this.calMonth.set_value(strDate);
        }

        this.cboYear_onitemchanged = function(obj, e)
        {
        	var strDate = this.calMonth.value.toString();
        	var sYY = e.postvalue;
        	var sMM = strDate.substr(4,2);
        	var sDD = '01';

        	strDate = sYY+sMM+sDD;

        	this.calMonth.set_value(strDate);
        }
        this.calMonth_ondayclick = function(obj, e)
        {
        	if( this.pCalendar ) this.pCalendar.set_value(e.date);
        	this.closePopup();
        }

        this.btnPrevY_onclick = function(obj, e)
        {
        	var strDate = this.calMonth.value.toString();
        	var str = Ex.util.addMonth(strDate, -12);

        	var sYY = str.substr(0,4);
        	var sMM = str.substr(4,2);
        	var sDD = '01';

        	strDate = sYY+sMM+sDD;
        	this.fnSetDate(strDate);
        }

        this.btnPrevM_onclick = function(obj, e)
        {
        	var strDate = this.calMonth.value.toString();
        	var str = Ex.util.addMonth(strDate, -1);

        	var sYY = str.substr(0,4);
        	var sMM = str.substr(4,2);
        	var sDD = '01';

        	strDate = sYY+sMM+sDD;
        	this.fnSetDate(strDate);
        }

        this.btnNextM_onclick = function(obj, e)
        {
        	var strDate = this.calMonth.value.toString();
        	var str = Ex.util.addMonth(strDate, 1);

        	var sYY = str.substr(0,4);
        	var sMM = str.substr(4,2);
        	var sDD = '01';

        	strDate = sYY+sMM+sDD;
        	this.fnSetDate(strDate);
        }

        this.btnNextY_onclick = function(obj, e)
        {
        	var strDate = this.calMonth.value.toString();
        	var str = Ex.util.addMonth(strDate, 12);

        	var sYY = str.substr(0,4);
        	var sMM = str.substr(4,2);
        	var sDD = '01';

        	strDate = sYY+sMM+sDD;
        	this.fnSetDate(strDate);
        }

        this.btnToday_onclick = function(obj, e)
        {
        	var strDate = Ex.util.today();
        	this.fnSetDate(strDate);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calMonth.addEventHandler("ondayclick",this.calMonth_ondayclick,this);
            this.btnPrevY.addEventHandler("onclick",this.btnPrevY_onclick,this);
            this.btnPrevM.addEventHandler("onclick",this.btnPrevM_onclick,this);
            this.btnNextM.addEventHandler("onclick",this.btnNextM_onclick,this);
            this.btnNextY.addEventHandler("onclick",this.btnNextY_onclick,this);
            this.cboYear.addEventHandler("onitemchanged",this.cboMonth_onitemchanged,this);
            this.cboMonth.addEventHandler("onitemchanged",this.cboYear_onitemchanged,this);
            this.btnToday.addEventHandler("onclick",this.btnToday_onclick,this);
        };
        this.loadIncludeScript("comPopCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
