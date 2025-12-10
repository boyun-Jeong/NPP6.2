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
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDatasetList", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"scope\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTblList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurrent", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTblColList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab","10","0",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("30");
            obj.set_tabjustify("false");
            obj.set_showextrabutton("false");
            obj.set_multiline("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpgDsList",this.tab);
            obj.set_text("Dataset List");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdDatasetList","10","10","311","466",null,null,null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDatasetList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"45\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Dataset Name\"/><Cell col=\"1\" text=\"cnt\"/><Cell col=\"2\" text=\"scope\"/></Band><Band id=\"body\"><Cell text=\"bind:id\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:cnt\"/><Cell col=\"2\" text=\"bind:scope\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new Grid("grdDatasetContent","331","36",null,"440","10",null,null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("1");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats/>");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new TextArea("txtVariables","9","478",null,null,"739","4",null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("2");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new TextArea("txtXML","331","478",null,null,"10","4",null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("3");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new CheckBox("chkUnFilter","331","10",null,"20","649",null,null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("4");
            obj.set_text("필터제거");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new Button("btnSaveXml",null,"10","70","22","10",null,null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("5");
            obj.set_text("SaveXml");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"10","70","22","85",null,null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("6");
            obj.set_text("excel");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new Grid("gd00","482","10","353","20",null,null,null,null,null,null,this.tab.tpgDsList.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj._setContents("");
            this.tab.tpgDsList.addChild(obj.name, obj);

            obj = new Tabpage("tpgCreQuery",this.tab);
            obj.set_text("Query 생성");
            this.tab.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","269","140","265","24",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("6");
            obj.set_text("컬럼 COMMENT");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_border("1px solid aqua");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new TextArea("txt_comments","269","Static00_00_00:1","265",null,null,"10",null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("7");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","140","264","24",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("5");
            obj.set_text("컬럼");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_border("1px solid aqua");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new TextArea("txt_cols","0","Static00_00:1","264",null,null,"10",null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("0");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","76","24",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("1");
            obj.set_text("테이블명");
            obj.set_cssclass("sta_WF_SchTitle");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new Combo("cboTblNm","Static00:10","10","388","24",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTblList");
            obj.set_codecolumn("TBL_CD");
            obj.set_datacolumn("TBL_NM");
            obj.set_type("caseifilterlike");
            obj.set_imemode("alpha");
            obj.set_text("Combo00");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new Button("btn_exec","cboTblNm:3","10","57","24",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("2");
            obj.set_text("생성");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new TextArea("txt_qurey","txt_comments:5","10",null,null,"0","10",null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("3");
            obj.set_font("10pt \"나눔고딕코딩,맑은 고딕\"");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new Static("Static34","57","10","20","40",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("Guideline_H2_blue");
            obj.set_visible("false");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new TextArea("txt_keys","0","65","535","71",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("9");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","40","534","24",null,null,null,null,null,null,this.tab.tpgCreQuery.form);
            obj.set_taborder("8");
            obj.set_text("KEY 컬럼");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_border("1px solid aqua");
            this.tab.tpgCreQuery.addChild(obj.name, obj);

            obj = new Tabpage("tpgCreDataset",this.tab);
            obj.set_text("dataset 생성");
            this.tab.addChild(obj.name, obj);

            obj = new TextArea("txt_cols","0","39","50%",null,null,"10",null,null,null,null,this.tab.tpgCreDataset.form);
            obj.set_taborder("0");
            this.tab.tpgCreDataset.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","51","25",null,null,null,null,null,null,this.tab.tpgCreDataset.form);
            obj.set_taborder("3");
            obj.set_text("DS ID");
            obj.set_cssclass("sta_WF_SchTitle");
            this.tab.tpgCreDataset.addChild(obj.name, obj);

            obj = new Button("btn_exec",null,"10","77","25","530",null,null,null,null,null,this.tab.tpgCreDataset.form);
            obj.set_taborder("4");
            obj.set_text("생성");
            this.tab.tpgCreDataset.addChild(obj.name, obj);

            obj = new Edit("edt_id","Static00:10","10",null,"25","btn_exec:10",null,null,null,null,null,this.tab.tpgCreDataset.form);
            obj.set_taborder("1");
            this.tab.tpgCreDataset.addChild(obj.name, obj);

            obj = new TextArea("txt_format","txt_cols:10","10",null,null,"0","10",null,null,null,null,this.tab.tpgCreDataset.form);
            obj.set_taborder("2");
            this.tab.tpgCreDataset.addChild(obj.name, obj);

            obj = new Static("Static34","32","-10","20","40",null,null,null,null,null,null,this.tab.tpgCreDataset.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("Guideline_H2_blue");
            obj.set_visible("false");
            this.tab.tpgCreDataset.addChild(obj.name, obj);

            obj = new Tabpage("tpgCompList",this.tab);
            obj.set_text("Form ComponentList");
            this.tab.addChild(obj.name, obj);

            obj = new TextArea("txaCompList","5","5",null,null,"5","5",null,null,null,null,this.tab.tpgCompList.form);
            obj.set_taborder("0");
            this.tab.tpgCompList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab.tpgDsList.form
            obj = new Layout("default","",0,0,this.tab.tpgDsList.form,function(p){});
            this.tab.tpgDsList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab.tpgCreQuery.form
            obj = new Layout("default","",0,0,this.tab.tpgCreQuery.form,function(p){});
            this.tab.tpgCreQuery.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab.tpgCreDataset.form
            obj = new Layout("default","",0,0,this.tab.tpgCreDataset.form,function(p){});
            this.tab.tpgCreDataset.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab.tpgCompList.form
            obj = new Layout("default","",0,0,this.tab.tpgCompList.form,function(p){});
            this.tab.tpgCompList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab.tpgCreQuery.form.txt_cols","value","dsTblColList","COLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab.tpgCreQuery.form.txt_comments","value","dsTblColList","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab.tpgCreQuery.form.txt_keys","value","dsTblColList","PK_COLS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("datasetListPostgreSQL.xfdl", function() {
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
        this.datasets = new Array();
        this.compArr = new Array();
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.DatasetList_onload = function (obj, e)
        {
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        	var sService = "FommMenu/selectTableList";	// 서비스명
        	var sInDs = "dsCond=dsCond";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        	var sOutDs = "dsTblList=dsTblList";			// 서버에서 수신할 데이타셋
        	var sArg = "";                   			// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

        	//오브젝트 만큼 루프를 돌립니다.
        	/*
        	trace("this.getOwnerFrame().formObj : " + this.getOwnerFrame().formObj + " " +
        		  "this.getOwnerFrame().formObj.all.length : " + this.getOwnerFrame().formObj.all.length);
        	*/

        	for(var i = 0; i < this.getOwnerFrame().formObj.all.length; i++)
        	{
        		//trace("i : " + i + " " + this.getOwnerFrame().formObj.all[i].id);

        		//Dataset 항목만 가져 올수 있게 체크를 합니다.
        		if(this.getOwnerFrame().formObj.all[i].toString().toUpperCase() == "[OBJECT DATASET]")
        		{
        			this.datasets.push(this.getOwnerFrame().formObj.all[i]);
        		}
        	}

        	//trace("this.datasets.length : " + this.datasets.length);

        	this.compArr = new Array();

        	this.fn_getAllDataset();
        	this.getFormComponentList(this.getOwnerFrame().formObj, this.tab.tabpages["tpgCompList"].form.txaCompList);
        	//this.getOwnerFrame().titlebar.maxbutton.click();
        };

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
        		case "select01" : // 서비스 ID
        			var aRow = this.dsTblList.insertRow(0);
        			this.dsTblList.setColumn(aRow, "TBL_CD", "");
        			this.dsTblList.setColumn(aRow, "TBL_NM", "");
        			this.tab.tabpages["tpgCreQuery"].form.cboTblNm.set_index(0);
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "pTblNmAlertI" :
        			this.tab.tpgCreQuery.form.cboTblNm.setFocus();
        			break;

        		case "pColumnAlertI" :
        			this.tab.tpgCreQuery.form.txt_cols.setFocus();
        			break;
        	}
        }

        /**
         * 글로벌 데이터셋과 부모창에서 가지고 있는 데이터셋을 검색해서
         * dsDatasetList 에 저장해둔다.
         *
         */
        this.fn_getAllDataset = function ()
        {
        	var allObjects = nexacro.getApplication().all;

        	for (var idx = 0,size = allObjects.length; idx < size; idx++)
        	{
        		var dataset = allObjects[idx];

        		if (dataset.toString().toUpperCase() == "[OBJECT DATASET]")
        		{
        			//trace("dataset.name : " + dataset.name);
        			var nRow = this.dsDatasetList.addRow();
        			this.dsDatasetList.setColumn(nRow, "id", dataset.name);
        			this.dsDatasetList.setColumn(nRow, "type", "G");
        			this.dsDatasetList.setColumn(nRow, "cnt", dataset.rowcount);
        			this.dsDatasetList.setColumn(nRow, "scope", "global");
        		}
        	}

        	allObjects = this.datasets;

        	this.dsDatasetList.set_enableevent(false);
        	for (var idx = 0; idx < allObjects.length; idx++)
        	{
        		var dataset = allObjects[idx];

        		if (dataset.toString().toUpperCase() == "[OBJECT DATASET]")
        		{
        			var nRow = this.dsDatasetList.addRow();
        			this.dsDatasetList.setColumn(nRow, "id", dataset.name);
        			this.dsDatasetList.setColumn(nRow, "type", "F");
        			this.dsDatasetList.setColumn(nRow, "cnt", dataset.rowcount);
        			this.dsDatasetList.setColumn(nRow, "scope", dataset.parent.name);
        		}
        	}
        	this.dsDatasetList.set_enableevent(true);

        	this.dsDatasetList.keystring = "S:+id";
        	this.dsDatasetList.rowposition = 0;

        	this.tab.tabpages["tpgDsList"].form.txtVariables.set_value("글로벌 변수 목록");
        	for (var idx = 0; idx < nexacro.getApplication()._variables.length; idx++)
        	{
        		this.tab.tabpages["tpgDsList"].form.txtVariables.set_value(this.tab.tabpages["tpgDsList"].form.txtVariables.value + "\n" + nexacro.getApplication()._variables[idx] + " : [" + nexacro.getApplication().getVariable(nexacro.getApplication()._variables[idx]) + "]");
        		trace(nexacro.getApplication()._variables[idx] + " : [" + nexacro.getApplication().getVariable(nexacro.getApplication()._variables[idx]) + "]");
        	}
        };

        this.chkUnFilter_onclick = function (obj, e)
        {
        	if (this.dsCurrent == null)
        	{
        		return;
        	}

        	if (this.chkUnFilter.value == true)
        	{
        		this.dsCurrent.filter("");
        	}
        };

        this.Radio00_onitemchanged = function (obj, e)
        {
        	if (obj.value == "asc")
        	{
        		this.dsDatasetList.set_keystring("S:+id");
        	}
        	else if (obj.value == "desc")
        	{
        		this.dsDatasetList.set_keystring("S:-id");
        	}
        	this.dsDatasetList.rowposition = 0;
        };

        this.btnSaveXml_onclick = function (obj, e)
        {
        	if (this.dsCurrent == null)
        	{
        		return;
        	}
        	this.tab.tabpages["tpgDsList"].form.txtXML.set_value(this.dsCurrent.saveXML());
        };

        this.grdDatasetList_oncellclick = function (obj, e)
        {
        	// 만약 필터가 체크되어 있으면 해제
        	this.tab.tabpages["tpgDsList"].form.chkUnFilter.set_value(false);

        	this.tab.tabpages["tpgDsList"].form.grdDatasetContent.set_binddataset("");
        	this.dsCurrent.clearData();
        	var datasetName = this.dsDatasetList.getColumn(e.row, "id");
        	var type = this.dsDatasetList.getColumn(e.row, "type");
        	var gCnt = this.dsDatasetList.getCaseCount("type=='G'");
        	// 로컬 데이터셋으로 복사
        	if (type == "F")
        	{
        		// this.dsCurrent = this.getOwnerFrame().form.opener.objects[datasetName];
        		var dsIdx = -1;
        		for(var i=0; i<this.datasets.length; i++)
        		{
        			if(datasetName == this.datasets[i].id)
        			{
        				dsIdx = i;
        				break;
        			}
        		}

        		if(dsIdx > -1)
        		{
        			this.dsCurrent.copyData(this.datasets[dsIdx]);
        		}
        	}
        	else if (type == "G")
        	{
        		// this.dsCurrent = application.all[datasetName];
        		this.dsCurrent.copyData(nexacro.getApplication().all[datasetName]);
        	}

        	// 바인드&포맷생성
        	this.tab.tabpages["tpgDsList"].form.grdDatasetContent.set_binddataset(this.dsCurrent);
        	this.tab.tabpages["tpgDsList"].form.grdDatasetContent.createFormat();
        };

        this.btn_exec_onclick = function(obj,e)
        {
        	trace("select TabId : " + this.tab.tabpages[this.tab.tabindex].id);

        	if(this.tab.tabpages[this.tab.tabindex].id == "tpgCreQuery")
        	{
        		if( Ex.isEmpty(this.tab.tpgCreQuery.form.cboTblNm.value) )
        		{
        			var param = {id : "pTblNmAlertI", msg : "테이블명이 선택되지 않았습니다."};
        			Ex.core.alert(this, param);
        			return;
        		}

        		if( Ex.isEmpty(this.tab.tpgCreQuery.form.txt_cols.value) )
        		{
        			var param = {id : "pColumnAlertI", msg : "컬럼명이 입력되지 않았습니다."};
        			Ex.core.alert(this, param);
        			return;
        		}

        		if(this.tab.tabpages[this.tab.tabindex].id == "tpgCreQuery")
        		{
        			var keys = !Ex.isEmpty(this.tab.tabpages["tpgCreQuery"].form.txt_keys.value) ? this.tab.tabpages["tpgCreQuery"].form.txt_keys.value.split("\n") : [];
        			var cols = !Ex.isEmpty(this.tab.tabpages["tpgCreQuery"].form.txt_cols.value) ? this.tab.tabpages["tpgCreQuery"].form.txt_cols.value.split("\n") : [];
        			var comments = !Ex.isEmpty(this.tab.tabpages["tpgCreQuery"].form.txt_comments.value) ? this.tab.tabpages["tpgCreQuery"].form.txt_comments.value.split("\n") : [];

        			if (cols.length > 0)
        			{
        				var selQuery = '\t<select id="select01" parameterType="java.util.Map" resultType="com.wemb.spp.com.vo.UpperKeyMap">';
        				selQuery += '\n\t\tSELECT';
        				var tblNm = 'PUBLIC.' + (Ex.isEmpty(this.tab.tabpages["tpgCreQuery"].form.cboTblNm.value) ? "" : this.tab.tabpages["tpgCreQuery"].form.cboTblNm.value.toUpperCase());

        				var insQuery = '\n\t<insert id="insert01" parameterType="java.util.Map">';
        				insQuery += '\n\t\tINSERT INTO ' + tblNm;
        				insQuery += '\n\t\t(';

        				var updQuery = '\n\t<update id="modify01" parameterType="java.util.Map">';
        				updQuery += '\n\t\tUPDATE ' + tblNm + " SET";

        				var delQuery = '\n\t<delete id="remove01" parameterType="java.util.Map">';
        				delQuery += '\n\t\tDELETE';
        				delQuery += '\n\t\tFROM ' + tblNm;
        				delQuery += '\n\t\tWHERE 1 = 1';

        				if(keys.length > 0)
        				{
        					for (var i = 0; i < keys.length; i++)
        					{
        						if (!Ex.isEmpty(nexacro.replaceAll(keys[i], ",", "")))
        						{
        							delQuery += '\n\t\t<if test="' + nexacro.replaceAll(keys[i], ",", "") + ' != \'\' and ' + nexacro.replaceAll(keys[i], ",", "") + ' != null">';
        							delQuery += '\n\t\tAND ' + nexacro.replaceAll(keys[i], ",", "") + ' = #{' + nexacro.replaceAll(keys[i], ",", "") + '}';
        							delQuery += '\n\t\t</if>';
        						}
        					}
        				}

        				delQuery += '\n\t</delete>';

        				if(cols.length > 0)
        				{
        					for (var i = 0; i < cols.length; i++)
        					{
        						if (!Ex.isEmpty(nexacro.replaceAll(cols[i], ",", "")))
        						{
        							if (i == 0)
        							{
        								selQuery += '\n\t\t\t  ' + nexacro.replaceAll(cols[i], ",", "") + (comments.length >= (i+1) ? "\t--" + nexacro.replaceAll(comments[i], ",", "") : "");
        								insQuery += '\n\t\t\t  ' + nexacro.replaceAll(cols[i], ",", "") + (comments.length >= (i+1) ? "\t--" + nexacro.replaceAll(comments[i], ",", "") : "");
        								updQuery += '\n\t\t\t  ' + nexacro.replaceAll(cols[i], ",", "") + ' ' + '=' + ' #{' + nexacro.replaceAll(cols[i], ",", "") + '}' + (comments.length >= (i+1) ? "\t--" + nexacro.replaceAll(comments[i], ",", "") : "");
        							}
        							else
        							{
        								selQuery += '\n\t\t\t, ' + nexacro.replaceAll(cols[i], ",", "") + (comments.length >= (i+1) ? "\t--" + nexacro.replaceAll(comments[i], ",", "") : "");
        								insQuery += '\n\t\t\t, ' + nexacro.replaceAll(cols[i], ",", "") + (comments.length >= (i+1) ? "\t--" + nexacro.replaceAll(comments[i], ",", "") : "");
        								updQuery += '\n\t\t\t, ' + nexacro.replaceAll(cols[i], ",", "") + ' ' + '=' + ' #{' + nexacro.replaceAll(cols[i], ",", "") + '}' + (comments.length >= (i+1) ? "\t--" + nexacro.replaceAll(comments[i], ",", "") : "");
        							}
        						}
        					}
        				}

        				selQuery += "\n\t\tFROM " + tblNm;
        				selQuery += '\n\t\tWHERE 1 = 1';

        				if (keys.length > 0)
        				{
        					for (var i = 0; i < keys.length; i++)
        					{
        						if (!Ex.isEmpty(nexacro.replaceAll(keys[i], ",", "")))
        						{
        							selQuery += '\n\t\t<if test="' + nexacro.replaceAll(keys[i], ",", "") + ' != \'\' and ' + nexacro.replaceAll(keys[i], ",", "") + ' != null">';
        							selQuery += '\n\t\tAND ' + nexacro.replaceAll(keys[i], ",", "") + ' = #{' + nexacro.replaceAll(keys[i], ",", "") + '}';
        							selQuery += '\n\t\t</if>';
        						}
        					}
        				}
        				selQuery += '\n\t</select>';

        				insQuery += '\n\t\t)';
        				insQuery += '\n\t\tVALUES';
        				insQuery += '\n\t\t(';

        				updQuery += '\n\t\tWHERE 1 = 1';

        				if (keys.length > 0)
        				{
        					for (var i = 0; i < keys.length; i++)
        					{
        						if (!Ex.isEmpty(nexacro.replaceAll(keys[i], ",", "")))
        						{
        							updQuery += '\n\t\t<if test="' + nexacro.replaceAll(keys[i], ",", "") + ' != \'\' and ' + nexacro.replaceAll(keys[i], ",", "") + ' != null">';
        							updQuery += '\n\t\tAND ' + nexacro.replaceAll(keys[i], ",", "") + ' = #{' + nexacro.replaceAll(keys[i], ",", "") + '}';
        							updQuery += '\n\t\t</if>';
        						}
        					}
        				}

        				updQuery += '\n\t</update>';

        				if (cols.length > 0)
        				{
        					for (var i = 0; i < cols.length; i++)
        					{
        						if (!Ex.isEmpty(nexacro.replaceAll(cols[i], ",", "")))
        						{
        							if (i == 0)
        							{
        								insQuery += '\n\t\t\t  #{' + nexacro.replaceAll(cols[i], ",", "") + '}';
        							}
        							else
        							{
        								insQuery += '\n\t\t\t, #{' + nexacro.replaceAll(cols[i], ",", "") + '}';
        							}
        						}
        					}
        				}

        				insQuery += '\n\t\t)';
        				insQuery += '\n\t</insert>';

        				this.tab.tabpages["tpgCreQuery"].form.txt_qurey.set_value(selQuery + "\n" + insQuery + "\n" + updQuery + "\n" + delQuery);
        			}
        		}
        	}
        	else if(this.tab.tabpages[this.tab.tabindex].id == "tpgCreDataset")
        	{
        		if (!Ex.isEmpty(this.tab.tabpages["tpgCreDataset"].form.txt_cols.value))
        		{
        			var cols = this.tab.tabpages["tpgCreDataset"].form.txt_cols.value.split("\n");
        			var dsCols = '\t<Dataset id="' + this.tab.tabpages["tpgCreDataset"].form.edt_id.value + '">\n';
        			dsCols += '\t\t<ColumnInfo>';

        			if (cols.length > 0)
        			{
        				for (var i = 0; i < cols.length; i++)
        				{
        					if (!Ex.isEmpty(cols[i]))
        					{
        						var colInfo = cols[i].split(";");

        						if (colInfo.length == 1)
        						{
        							dsCols += '\n\t\t\t<Column id="' + nexacro.replaceAll(nexacro.replaceAll(cols[i], " ", ""), ",", "") + '" type="STRING" size="256"/>';
        						}
        						else if (colInfo.length == 2)
        						{
        							dsCols += '\n\t\t\t<Column id="' + nexacro.replaceAll(nexacro.replaceAll(cols[i], " ", ""), ",", "") + '" type="' + nexacro.replaceAll(nexacro.replaceAll(colInfo[1], " ", ""), ",", "") + '" size="256"/>';
        						}
        					}
        				}
        			}
        			dsCols += '\n\t\t</ColumnInfo>';
        			dsCols += '\n\t</Dataset>';
        			this.tab.tabpages["tpgCreDataset"].form.txt_format.set_value(dsCols);
        		}
        	}
        };

        this.tab_Tabpage1_grdDatasetContent_onkeydown = function(obj,e)
        {
        	if(e.ctrlkey && e.keycode == 67)
        	{
        		var rows = obj.getSelectedRows();
        		var staCol = nexacro.toNumber(obj.selectstartcol);
        		var endCol = nexacro.toNumber(obj.selectendcol);
        		//trace("obj.getSelectedRows() : " + rows);
        		//trace("obj.getSelectedRows().length : " + rows.length);
        		//trace("obj.selectstartcol : " + staCol + ", obj.selectendcol : " + endCol);

        		var clipText = "";

        		for(var i=0; i<rows.length; i++)
        		{
        			if(i>0)
        			{
        				clipText += "\n";
        			}

        			for(var j=staCol; j<=endCol; j++)
        			{
        				if(j > staCol)
        				{
        					clipText += "\t";
        				}
        				//trace("i : " + i + ", j : " + j);
        				//trace("i : " + i + ", j : " + j + ", text:" + obj.getCellText(obj.getSelectedRows()[i], j));
        				clipText += obj.getCellText(nexacro.toNumber(obj.getSelectedRows()[i]), j);
        			}
        		}

        		if( !Ex.isEmpty(clipText) )
        		{
        			system.setClipboard("CF_TEXT", clipText);
        		}
        	}
        };

        this.tab_Tabpage1_btnExcel_onclick = function(obj,e)
        {
        	if(this.tab.tabpages["tpgDsList"].form.grdDatasetContent.getBindDataset().rowcount > 0)
        	{
        		this.tab.tabpages["tpgDsList"].form.gd00.set_formats(this.tab.tabpages["tpgDsList"].form.grdDatasetContent.formats);
        		this.tab.tabpages["tpgDsList"].form.gd00.set_formatid("default");
        		this.tab.tabpages["tpgDsList"].form.gd00.set_binddataset(this.tab.tabpages["tpgDsList"].form.grdDatasetContent.getBindDataset());

        		var oInfo = {
        			Grid	: this.tab.tabpages["tpgDsList"].form.gd00,
        			Sheet	: this.tab.tabpages["tpgDsList"].form.grdDatasetContent.id,
        			FileNm	: "Debug_DatasetList_" + this.tab.tabpages["tpgDsList"].form.grdDatasetContent.id,
        			ExportType : "XLSX",
        			ExportId : "grdDatasetContent"
        		};
        		this.gfnExportExcel(this, oInfo);
        	}
        };

        this.onItemChanged = function(obj,e)
        {
        	this.dsCond.setColumn(0, "TBL_NM", e.postvalue);

        	if( !Ex.isEmpty(e.postvalue) )
        	{
        		var sTranId = "select02";							// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "FommMenu/selectTableColumnList";	// 서비스명
        		var sInDs = "dsCond=dsCond";                  		// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "dsTblColList=dsTblColList";           // 서버에서 수신할 데이타셋
        		var sArg = "";                   					// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        	else
        	{
        		this.dsTblColList.clearData();
        	}
        };

        this.getFormComponentList = function(formObj, txtAreaObj, parentPath)
        {
        	if( Ex.isEmpty(parentPath) ) parentPath = "this";

        	var components = formObj.components;

        	trace("components.length :::::::::::::::::::::: " + components.length);

        	for(var i=0; i<components.length; i++)
        	{
        		//trace("i=" + i + " Comp:[" + components[i] + "]");
        		if(components[i] == "[object Div]")
        		{
        			this.getFormComponentList(components[i].form, txtAreaObj, parentPath + "." + components[i].id + ".form");
        		}
        		else if(components[i] == "[object Tab]")
        		{
        			for (var j=0; j<components[i].tabpages.length; j++)
        			{
        				this.getFormComponentList(components[i].tabpages[j].form, txtAreaObj, parentPath + "." + components[i].id + "." + components[i].tabpages[j].id + ".form");
        			}
        		}
        		else
        		{
        			if(components[i].id != "_btnReload" && components[i].id != "_edtPath" && components[i].id != "_btnPath")
        			{
        				txtAreaObj.set_value((Ex.isEmpty(txtAreaObj.value) ? "" : txtAreaObj.value + "\n") + parentPath + "." + components[i].id);
        			}
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DatasetList_onload,this);
            this.tab.tpgDsList.form.grdDatasetList.addEventHandler("oncellclick",this.grdDatasetList_oncellclick,this);
            this.tab.tpgDsList.form.grdDatasetContent.addEventHandler("onkeydown",this.tab_Tabpage1_grdDatasetContent_onkeydown,this);
            this.tab.tpgDsList.form.chkUnFilter.addEventHandler("onclick",this.chkUnFilter_onclick,this);
            this.tab.tpgDsList.form.btnSaveXml.addEventHandler("onclick",this.btnSaveXml_onclick,this);
            this.tab.tpgDsList.form.btnExcel.addEventHandler("onclick",this.tab_Tabpage1_btnExcel_onclick,this);
            this.tab.tpgCreQuery.form.cboTblNm.addEventHandler("onitemchanged",this.onItemChanged,this);
            this.tab.tpgCreQuery.form.btn_exec.addEventHandler("onclick",this.btn_exec_onclick,this);
            this.tab.tpgCreDataset.form.btn_exec.addEventHandler("onclick",this.btn_exec_onclick,this);
        };
        this.loadIncludeScript("datasetListPostgreSQL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
