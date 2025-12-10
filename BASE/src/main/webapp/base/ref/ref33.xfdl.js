(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref33");
            this.set_titletext("소스배포");
            this.getSetter("classname").set("ref06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_SOURCE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_SOURCE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"PATH_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"EXT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridHead", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnExcelDown",null,"54","60","24","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_excelDown");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreate",null,"54","100","24","btnExcelDown:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일생성");
            obj.set_cursor("pointer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport",null,"54","100","24","btnCreate:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일선택");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchArea","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCoNm","20.00","13","105","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_text("원본 소스 경로");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","staCoNm:0","13","300","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","edtCoNm:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staDeptNm","Static00_00:0.00","13","100","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_text("복사 대상 경로");
            obj.set_cssclass("sta_WF_schTitle");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNm:0.00","13","300","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearchReset",null,"13","90","24","20",null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_searchReset");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","edtDeptNm:0","13","30","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staDeptNm00","Static00_00_00:0.00","13","120","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("8");
            obj.set_text("디렉토리 구조 경로");
            obj.set_cssclass("sta_WF_schTitle");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm00","staDeptNm00:0","13","300","24",null,null,null,null,null,null,this.divSearchArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_normal");
            obj.set_visible("false");
            this.divSearchArea.addChild(obj.name, obj);

            obj = new Grid("grdImport","0","divSearchArea:34",null,null,"0","5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autosizingtype("both");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","5","55","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchArea.form
            obj = new Layout("default","",0,0,this.divSearchArea.form,function(p){});
            this.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchArea.form.edtCoNm","value","dsCond","ORG_SOURCE_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchArea.form.edtDeptNm","value","dsCond","TARGET_SOURCE_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchArea.form.edtUserNm","value","dsCond","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchArea.form.edtEmpId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchArea.form.cboUseYn","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchArea.form.staUseYn00","value","dsCond","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearchArea.form.cboUserType","value","dsCond","USER_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearchArea.form.Static00_00_00","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearchArea.form.edtDeptNm00","value","dsCond","DIRECTORY_PATH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref33.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 엑셀 Import
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
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
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	this.fnSearchReset();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.setColumn(0, "ORG_SOURCE_PATH", "C:\\WEMB\\SPP\\workspace\\SPP");
        	this.dsCond.setColumn(0, "TARGET_SOURCE_PATH", "D:\\targetSource\\" + Ex.util.today());
        }

        // 조회
        this.fnCreate = function()
        {
        	if(this.dsGrid.rowcount == 0)	return;

        	var sTranId = "create01";
            var sService = "REF0033W/create01";
            var sInDs = "dsCond=dsCond dsGrid=dsGrid:N";
            var sOutDs = "";
            var sArg = "";
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
        		case "create01" : // 서비스 ID
        			var param = {
        				  id	: "CreateAlertI"				//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "배포 파일 생성이 완료되었습니다."	//메시지 내용
        				, arrparam : [""]						//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"							//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "" :
        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {

        	if(!varValue)	return;

        	switch(mID)
        	{
        		case "createConfirm" :
        			this.fnCreate();
        			break;

        		case "CreateAlertI" :
        			this.btnCreate.set_enable(false);
        			break;
        	}
        }

        //-----엑셀 Import 콜백---
        this.fnImportExcelCallback = function(bSuccess,sImportID,strFileNm)
        {
        	// bSuccess 성공/실패를 boolean값으로 리턴한다.
        	// sImportID는 지정한 경우만 반환한다.
        	// strFileNm은 성공일경우만 반환한다.
        	trace("fnImportExcelCallback IMPORTID/IMPORTFILENM="+sImportID+","+strFileNm);
        	if(bSuccess)
        	{
        		trace("성공");

        		this.dsGridHead.assign(this.dsImport);
        		this.dsGridHead.clearData();
        		this.dsGridHead.addColumn("Column" + this.dsGridHead.colcount, "STRING");
        		this.dsGridHead.addRow();
        		this.dsGridHead.copyRow(0, this.dsImport, 0);
        		this.dsGridHead.setColumn(0, "Column" + (this.dsGridHead.colcount-1), "작성건수");
        		this.dsImport.deleteRow(0);

        		this.dsImport.addColumn("Column" + this.dsImport.colcount, "INT");

        		this.dsGrid.assign(this.dsImport);
        		this.dsGrid.clearData();

        		for(var i=0; i<this.dsGridHead.colcount; i++)
        		{
        			if( (this.dsGridHead.getColumn(0, "Column" + i)||'').indexOf("프로그램파일명") > -1)
        			{
        				this.dsCond.setColumn(0, "FILE_NM_COLUMN", "Column" + i);
        			}

        			if( (this.dsGridHead.getColumn(0, "Column" + i)||'').indexOf("프로그램경로") > -1)
        			{
        				this.dsCond.setColumn(0, "PATH_COLUMN", "Column" + i);
        			}

        			if( (this.dsGridHead.getColumn(0, "Column" + i)||'').indexOf("프로그램종류") > -1)
        			{
        				this.dsCond.setColumn(0, "EXT", "Column" + i);
        			}

        			if( (this.dsGridHead.getColumn(0, "Column" + i)||'').indexOf("비고") > -1)
        			{
        				this.dsCond.setColumn(0, "REMARK", "Column" + i);
        			}

        		}

        		if(this.dsImport.getCaseCount("Ex.isEmpty(" + this.dsCond.getColumn(0, "EXT") + ")") > 0)
        		{
        			var param = {
        				  id	: "AlertI"					//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "프로그램종류가 입력되지 않은 내역이 존재합니다."					//메시지 내용
        				, arrparam : [""]		//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}

        		for(var i=0; i<this.dsImport.rowcount; i++)
        		{
        			var ext = (this.dsImport.getColumn(i, this.dsCond.getColumn(0, "EXT"))||'').toString();
        			ext = ext.toUpperCase();
        			trace("ext : " + ext);
        			this.dsImport.setColumn(i, this.dsCond.getColumn(0, "EXT"), ext);
        		}

        		for(var i=this.dsImport.rowcount-1; i>=0; i--)
        		{
        			if(Ex.isEmpty(this.dsImport.getColumn(i, this.dsCond.getColumn(0, "FILE_NM_COLUMN"))) && Ex.isEmpty(this.dsImport.getColumn(i, this.dsCond.getColumn(0, "PATH_COLUMN"))) )
        			{
        				this.dsImport.deleteRow(i);
        			}
        		}

        		this.dsImport.set_keystring("S:" + this.dsCond.getColumn(0, "FILE_NM_COLUMN"));

         		var extArr = ["XFDL", "화면", "JAVA", "CLASS", "XML"];

        		for(var i=0; i<extArr.length; i++)
        		{
        			if(extArr[i] == "CLASS")
        			{
        				this.dsImport.set_filterstr(this.dsCond.getColumn(0, "EXT") + ".indexOf('" + extArr[i] + "') > -1");
        			}
        			else
        			{
        				this.dsImport.set_filterstr(this.dsCond.getColumn(0, "EXT") + " == '" + extArr[i] + "'");
        			}
        			//trace("extArr[i] : " + extArr[i] + " this.dsImport.rowcount : " + this.dsImport.rowcount);

        			for(var j=0; j<this.dsImport.rowcount; j++)
        			{
        				var fRow = this.dsGrid.findRowExpr(this.dsCond.getColumn(0, "PATH_COLUMN") + " == '" + this.dsImport.getColumn(j, this.dsCond.getColumn(0, "PATH_COLUMN")) + "' && " +
        												   this.dsCond.getColumn(0, "FILE_NM_COLUMN") + " == '" + this.dsImport.getColumn(j, this.dsCond.getColumn(0, "FILE_NM_COLUMN")) + "'");


        				if(fRow == -1)
        				{
        					var aRow = this.dsGrid.addRow();
        					//alert("aRow : " + aRow + " j=" + j);
        					this.dsGrid.copyRow(aRow, this.dsImport, j);
        					this.dsGrid.setColumn(aRow, "Column" + (this.dsGrid.colcount-1), 1);
        				}
        				else
        				{
        					this.dsGrid.setColumn(fRow, "Column" + (this.dsGrid.colcount-1), nexacro.toNumber(this.dsGrid.getColumn(fRow, "Column" + (this.dsGrid.colcount-1))) + 1);
        					var remark = this.dsGrid.getColumn(fRow, this.dsCond.getColumn(0, "REMARK"));

        					if( !Ex.isEmpty(remark) )
        					{
        						this.dsGrid.setColumn(fRow, this.dsCond.getColumn(0, "REMARK"), remark + "\n" + this.dsImport.getColumn(j, this.dsCond.getColumn(0, "REMARK")));
        					}
        					else
        					{
        						this.dsGrid.setColumn(fRow, this.dsCond.getColumn(0, "REMARK"), this.dsImport.getColumn(j, this.dsCond.getColumn(0, "REMARK")));
        					}
        				}
        			}
        		}

        		this.grdImport.set_binddataset(this.dsGrid);

        		if(this.dsGrid.rowcount > 0)
        		{
        			this.grdImport.createFormat();

        			this.grdImport.setRealRowSize(0, 34, -1, true);
        			this.grdImport.setRealRowSize(-1, 34, -1, false);

        			for(var i=0; i<this.dsGridHead.colcount; i++)
        			{
        				this.grdImport.setCellProperty("head", i, "text", this.dsGridHead.getColumn(0, "Column" + i));
        			}

        			for(var i=0; i<this.grdImport.getCellCount("Head"); i++)
        			{
        				this.grdImport.setRealColSize("head", i, 50, false);
        				this.grdImport.setCellProperty("haad", i, "autosizerow", "limitmin");
        				this.grdImport.setCellProperty("haad", i, "autosizecol", "limitmin");
        			}

        			for(var i=0; i<this.grdImport.getCellCount("Body"); i++)
        			{
        				this.grdImport.setRealColSize("body", i, 50, false);
        				this.grdImport.setCellProperty("Body", i, "autosizerow", "limitmin");
        				this.grdImport.setCellProperty("haad", i, "autosizecol", "limitmin");
        			}

        			for(var i=this.dsImport.rowcount-1; i>=0; i--)
        			{
        				if( Ex.isEmpty(this.dsImport.getColumn(i, this.dsCond.getColumn(0, "FILE_NM_COLUMN"))) ||
        					Ex.isEmpty(this.dsImport.getColumn(i, this.dsCond.getColumn(0, "PATH_COLUMN")))
        				  )
        				{
        					this.dsImport.deleteRow(i);
        				}
        			}
        		}

        		this.stcCnt.set_text(Ex.util.getNumberToMaskStr(this.dsGrid.rowcount) + " 건");
        		this.btnCreate.set_enable(this.dsImport.rowcount > 0 ? true : false);
        	}
        	else
        	{
        		trace("실패");
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
        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnExcelDown" :	// 엑셀다운
        			if( !Ex.isEmpty(this.grdImport.binddataset) && this.grdImport.getBindDataset().rowcount > 0 )
        			{
        				var oInfo = {
        					Grid	: [this.grdImport],
        					Sheet	: ["배포파일"],
        					FileNm	: ["배포파일"],
        					ExportType : "XLSX",
        					ExportId : "excel01"
        				};
        				this.gfnExportExcel(this, oInfo);
        			}
        			break;

        		case "btnImport" :
        			this.dsImport.clear();
        			this.dsGrid.clear();
        			this.grdImport.createFormat();
        			this.grdImport.set_binddataset(undefined);
        			var sSheet = "head=" + ";" + "body=" + ";"
        			this.gfnImportExcel(this, sSheet, "dsImport");
        			break;

        		case "btnCreate" :		// 생성
        			if(this.dsImport.rowcount > 0)
        			{
        				if(this.dsImport.getCaseCount("Ex.isEmpty(" + this.dsCond.getColumn(0, "EXT") + ")") > 0)
        				{
        					var param = {
        						  id	: "AlertI"					//fnMsgAfter에서 식별자로 사용되는 ID
        						, msg	: "프로그램종류가 입력되지 않은 내역이 존재합니다."					//메시지 내용
        						, arrparam : [""]		//메시지의 변수에 들어갈 실제값
        						, msgtype : "I"						//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        					};
        					Ex.core.alert(this, param);
        					return false;
        				}

        				var param = {
        							id : "createConfirm"
        						  , msg : this.dsCond.getColumn(0, "TARGET_SOURCE_PATH") + "\n하위 경로에 배포 대상 파일을 생성하시겠습니까?"
        						  , arrparam : ['']
        						  , msgtype : "I"};
        					Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnExcelDown.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnCreate.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnImport.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtCoNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.edtDeptNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divSearchArea.form.btnSearchReset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divSearchArea.form.edtDeptNm00.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
        };
        this.loadIncludeScript("ref33.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
