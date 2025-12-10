(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comTopology");
            this.set_titletext("토폴로지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"UPPER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TPLG_SEARCH_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"ITSYS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITSYS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HW_SW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_H\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ASSET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTree", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTplgStd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTplgHost", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTplgItsys", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTplgHw", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTplgSw", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsItsys", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItsysCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEdge", this);
            obj._setContents("<ColumnInfo><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNode", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"label\" type=\"STRING\" size=\"256\"/><Column id=\"shape\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBorderTplg00","0","0","330",null,null,"0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02_00","10","374","310","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","240.00","379","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHostNm","15","379",null,"24","btnSearch:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_displaynulltext("HOST명");
            this.addChild(obj.name, obj);

            obj = new Grid("grdItSys","10","413","310",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMsItsys");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업무시스템분류\"/><Cell col=\"2\" text=\"호스트명\"/></Band><Band id=\"body\"><Cell expr=\"currow +1\"/><Cell col=\"1\" text=\"bind:ITSYS_NM\"/><Cell col=\"2\" text=\"bind:HOST_NM\" cssclass=\"grdBCell_WF_event\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","10","83","310","237",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsTree");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_tabstop("false");
            obj.set_cssclass("grd_WF_tree");
            obj.set_useFilter("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" style=\"line:0 none #808080 ;font:EXPR(LVL == &apos;2&apos; ? &apos;bold 9 맑은 고딕&apos; : &apos;&apos;);selectfont:EXPR(LVL == &apos;2&apos; ? &apos;bold 9 맑은 고딕&apos; : &apos;&apos;);\" text=\"bind:CMM_CD_NM\" treestartlevel=\"0\" treelevel=\"bind:LVL\" cssclass=\"\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg02_00_00","10","44","310","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchItsys","240.00","49","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItsysNm","15","49",null,"24","btnSearchItsys:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_normal");
            obj.set_readonly("false");
            obj.set_displaynulltext("업무시스템명");
            this.addChild(obj.name, obj);

            obj = new Div("divBorderTplg","divBorderTplg00:10","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Tab("tabTopology","divBorderTplg00:20","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_TBF_mdi");
            obj.set_showextrabutton("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"10","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TBF_mdiAllX");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","15","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업무시스템 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt00","139.00","15","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsTree");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","340","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("HOST 목록");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcCnt","118.00","340","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsMsItsys");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBorderTplg00
            obj = new Layout("default","",0,0,this.divBorderTplg00.form,function(p){});
            this.divBorderTplg00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBorderTplg
            obj = new Layout("default","",0,0,this.divBorderTplg.form,function(p){});
            this.divBorderTplg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtItsysNm","value","dsCond","ITSYS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comTopology.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ comTopology
        * 화면(명)		︰ 토폴로지 div
        * 메뉴(경로)	︰
        * 화면 설명	︰ SPP 토폴로지 Div
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        var oParam = {
        		 CLASS_H		// 자산 대분류
        		,AM_ASSET_ID	// 자산 PK
        		,ASSET_NM		// 자산명
        		,CI_TYPE_CD		// 구성범주
        		,HOST_NM		// HOST명
        	};
        this.fnCompInit(oParam);
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/


        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/

        this.CLASS_H		= '';
        this.AM_ASSET_ID	= '';
        this.ASSET_NM		= '';
        this.CI_TYPE_CD		= '';
        this.HOST_NM		= '';

        this.vIsPopCall		= false;	// popup callback으로 topology 호출 flag
        this.vPopParam		= '';		// popup callback 호출 시 param

        this.webLoadComplete = false;	// 토폴로지 webbrowser용



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
        	trace('comTopology ready');
        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        	this.dsCond.clearData();
        	this.dsCond.addRow();
        	this.dsCond.setColumn(0, 'CI_TYPE_CD', 	this.CI_TYPE_CD);
        	this.dsCond.setColumn(0, 'HOST_NM', 	this.HOST_NM);
        }


        // 업무시스템 tree 조회
        this.fnSearchTree = function()
        {
        	this.dsCond.setColumn(0, "UPPER_CODE", 	"POR_INFO_CD");		// 기준정보
        	this.dsCond.setColumn(0, "CODE", 		"ITSYS_CD");		// 업무시스템분류

        	var sTranId = "selectTree";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "MS1100W/select01";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTree=dsCodeTree";		// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 토폴로지 기준 조회
        this.fnSearchStd = function()
        {
        	var sTranId = "selectTplgStd";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "AM0000W/selectTplgStd";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTplgStd=dsData";			// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // HOST목록 조회
        this.fnSearchHost = function(ITSYS_ID, AM_ASSET_ID, HOST_NM)
        {
        	this.dsCond.setColumn(0, 'ITSYS_ID', 	ITSYS_ID||'');
        	this.dsCond.setColumn(0, 'AM_ASSET_ID',	AM_ASSET_ID||'');
        	this.dsCond.setColumn(0, 'HOST_NM', 	HOST_NM||'');

        	var sTranId = "selectHost";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "AM0000W/selectHost";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsMsItsys=dsData";		// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 토폴로지 조회
        this.fnSearchTopology = function(searchGbn)
        {
        	trace('fnSearchTopology :: ' + searchGbn);
        	this.fnSearchReset();
        	this.dsCond.setColumn(this.dsCond.rowposition, 'TPLG_SEARCH_GBN', searchGbn);	// 토폴로지 검색 구분

        	var sTranId = '';	// transaction callback id
        	switch(searchGbn)
        	{
        		case "HOST" :		// HOST 선택 (하단 그리드)
        			sTranId = 'topologyHost';
        			this.dsCond.setColumn(0, "ITSYS_ID", 	this.dsMsItsys.getColumn(this.dsMsItsys.rowposition, "ITSYS_ID"));
        			this.dsCond.setColumn(0, "CI_ID", 		this.dsMsItsys.getColumn(this.dsMsItsys.rowposition, "CI_ID"));
        			break;

        		case "ITSYS" :		// 업무시스템분류(tree) 선택
        			sTranId = 'topologyItsys';
        			this.dsCond.setColumn(0, 'ITSYS_ID', 	this.dsTree.getColumn(this.dsTree.rowposition, 'CMM_CD'));
        			break;

        		case "SW" :			// sW 토폴로지 조회
        			sTranId = 'topologySw';
        			this.dsCond.setColumn(0, 'AM_ASSET_ID',	this.AM_ASSET_ID);
        			this.dsCond.setColumn(0, 'CI_TYPE_CD', 	this.CI_TYPE_CD);
        			this.dsCond.setColumn(0, 'HOST_NM', 	this.HOST_NM);
        			break;

        		case "HW" :			// HW 토폴로지 조회
        			sTranId = 'topologyHw';
        			this.dsCond.setColumn(0, 'AM_ASSET_ID',	this.AM_ASSET_ID);
        			this.dsCond.setColumn(0, 'CI_TYPE_CD', 	this.CI_TYPE_CD);
        			this.dsCond.setColumn(0, 'HOST_NM', 	this.HOST_NM);
        			break;
        	}

        	var sService = "AM0000W/selectTopology";			// 서비스명
            var sInDs = "dsCond=dsCond";				// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsTplgHost=dsTplgHost dsTplgItsys=dsTplgItsys dsTplgHw=dsTplgHw dsTplgSw=dsTplgSw";		// 서버에서 수신할 데이타셋
            var sArg = "";								// 서버 @ParamVariable 인자와 맵핑됨
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
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "selectTree" :			// 업무시스템 트리 조회
        			this.dsTree.set_filterstr("CODE_ID != 'ITSYS_CD'");
        			break;

        		case "selectHost" :			// Host 목록 조회
        			this.grdItSys.selectRow(0);
        			if(this.vIsPopCall) {
        				this.vIsPopCall = false;
        				var rowpos = this.dsMsItsys.findRow('CI_ID', this.vPopParam);
        				if( rowpos >= 0 ) {
        					this.dsMsItsys.set_rowposition(rowpos);
        				}

        				this.fnSearchTopology('HOST');
        		    }

        			break;

        		case "topologyHost" :		// 토폴로지 조회 (HOST 선택)
        			this.fnCreateNodesEdges("HOST");
        			if(this.dsNode.rowcount > 0 && this.dsEdge.rowcount > 0) {
        				var CI_ID		= this.dsMsItsys.getColumn(this.dsMsItsys.rowposition, 'CI_ID');
        				var tabNm 		= this.dsMsItsys.getColumn(this.dsMsItsys.rowposition, "HOST_NM");
        				this.fnAddTabpage(CI_ID, tabNm);	//탭페이지 추가
        			}
        			break;

        		case "topologyItsys" :		// 토폴로지 조회 (업무분류 선택)
        			this.fnCreateNodesEdges("SYS");
        			if(this.dsNode.rowcount > 0 && this.dsEdge.rowcount > 0) {
        				var ITSYS_ID	= this.dsTree.getColumn(this.dsTree.rowposition, "CMM_CD");
        				var tabNm 		= this.dsTree.getColumn(this.dsTree.rowposition, "CMM_CD_NM");
        				this.fnAddTabpage(ITSYS_ID, tabNm);	//탭페이지 추가
        			}
        			break;

        		case "topologyHw" :			// 토폴로지 조회 (HW기준)
         			this.fnCreateNodesEdges("HW");
          			if(this.dsNode.rowcount > 0 && this.dsEdge.rowcount > 0) {
          				var tabNm 		= this.ASSET_NM;
          				this.fnAddTabpage(this.AM_ASSET_ID, tabNm);	//탭페이지 추가
          			}
        			break;

        		case "topologySw" :			// 토폴로지 조회 (SW기준)
         			this.fnCreateNodesEdges("SW");
          			if(this.dsNode.rowcount > 0 && this.dsEdge.rowcount > 0) {
          				var tabNm 		= this.ds_cond.getColumn(0, "ASSET_NM");
          				this.fnAddTabpage(this.AM_ASSET_ID, tabNm);	//탭페이지 추가
          			}
        			break;
        	}
        }


        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	if( Ex.isEmpty(varValue) )
        		return;

        	switch(pID)
        	{
        		case "topologyDtlPop" :	// 토폴로지 상세 팝업
        			var arrParam = varValue.split('||');			// CI_ID||HOST_NM
        			var CI_ID		= arrParam[0];
        			var HOST_NM		= arrParam[1];

        			this.vPopParam = CI_ID;
        			this.edtHostNm.set_value(HOST_NM);
        			this.vIsPopCall = true;
        			this.fnSearchHost('', '', HOST_NM);
        			break;
        	}
        }


        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        // Component Init
        this.fnCompInit = function(oParam)
        {
        	if( Ex.isEmpty(oParam) )
        		oParam = {};

        	// PARAM setting
        	this.CLASS_H		= oParam.CLASS_H||'';
        	this.AM_ASSET_ID 	= oParam.AM_ASSET_ID||'';
        	this.ASSET_NM 		= oParam.ASSET_NM||'';
        	this.CI_TYPE_CD		= oParam.CI_TYPE_CD||'';
        	this.HOST_NM		= oParam.HOST_NM||'';
        	trace('CLASS_H :: ' + this.CLASS_H + ' AM_ASSET_ID :: ' + this.AM_ASSET_ID + ' ASSET_NM :: ' + this.ASSET_NM
        		+ ' CI_TYPE_CD :: ' + this.CI_TYPE_CD + ' HOST_NM :: ' + this.HOST_NM);


        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnGetCmmCd();		// 공통코드 조회
        	this.fnSearchTree();	// 업부시스템 tree 조회
        	this.fnSearchStd();		// 기준 조회


        	// init Search
        	if( !Ex.isEmpty(this.CI_TYPE_CD) )
        	{
        		if( !Ex.isEmpty(this.HOST_NM) ) {	// HOST명 조회
        			this.edtHostNm.set_value(this.HOST_NM);
        			this.fnSearchHost('', '', this.HOST_NM);
        		} else {							// 통신장비 : HOST명 없음.
        			this.fnSearchTopology('HW');
        		}
        	}
        	else if( !Ex.isEmpty(this.AM_ASSET_ID) )
        	{
        		this.dsCond.setColumn(0, 'AM_ASSET_ID',	this.AM_ASSET_ID);
        		if(this.CLASS_H == "H0000")		// 10000000
        			this.fnSearchTopology('HW');		// HW 토폴로지
        		else if(this.CLASS_H == "S0000")	// 20000000
        			this.fnSearchTopology('SW');		// SW 토폴로지
        	}


        }



        // 공통코드 조회
        this.fnGetCmmCd = function()
        {
        	var oParam = {
        		upCmmCd : ['ITSYS_CD']		// 조회할 상위코드
        		,codeDiv: ['POR_INFO_CD']		// 조회할 코드의 업무구분
        		,optStr	: ['']				// ALL: '- 전체 -'; SEL: '- 선택 -'
        		,useYn	: ['Y']				// 사용여부
        		,filter	: ['']					// filterStr
        		,objDs	: [this.dsItsysCd]	// copy dataset
        	}
        	Ex.util.getCmmCode(oParam);	// 공통코드 getter util; (oParam);
        }




        // Nodes 생성, Edges 생성
        this.fnCreateNodesEdges = function(pStd)
        {
        	this.dsNode.clearData();
        	this.dsEdge.clearData();

        	// Edge Setting
        	var arrTo = ["SYS", "HOST", "HW", "SW"];
        	for(var i = 0; i < arrTo.length; i++)
        	{
        		if(arrTo[i] == pStd)	continue;

        		var rowPos = this.dsEdge.addRow();
        		this.dsEdge.setColumn(rowPos, 'from', 	pStd);
        		this.dsEdge.setColumn(rowPos, 'to', 	arrTo[i]);
        	}

        	// Node setting
        	// 0. 기준
        	for(var i = 0; i < this.dsTplgStd.rowcount; i++) {
        		var rowPos = this.dsNode.addRow();
        		this.dsNode.copyRow(rowPos, this.dsTplgStd, i, "id=ID,label=LABEL,shape=SHAPE,value=VALUE,image=IMAGE,color=COLOR");
        	}

        	// 1. 호스트
        	for(var i = 0; i < this.dsTplgHost.rowcount; i++) {
        		var rowPos = this.dsNode.addRow();
        		this.dsNode.copyRow(rowPos, this.dsTplgHost, i, "id=ID,label=LABEL,shape=SHAPE,value=VALUE,image=IMAGE,color=COLOR");

        		rowPos = this.dsEdge.addRow();
        		this.dsEdge.setColumn(rowPos, "from",	"HOST");
        		this.dsEdge.setColumn(rowPos, "to",		this.dsTplgHost.getColumn(i, "ID"));
        	}

        	// 2. 업무시스템
        	for(var i = 0; i < this.dsTplgItsys.rowcount; i++) {
        		var rowPos = this.dsNode.addRow();
        		this.dsNode.copyRow(rowPos, this.dsTplgItsys, i, "id=ID,label=LABEL,shape=SHAPE,value=VALUE,image=IMAGE,color=COLOR");

        		rowPos = this.dsEdge.addRow();
        		this.dsEdge.setColumn(rowPos, "from",	"SYS");
        		this.dsEdge.setColumn(rowPos, "to", 	this.dsTplgItsys.getColumn(i, "ID"));
        	}

        	// 3. HW
        	for(var i = 0; i < this.dsTplgHw.rowcount; i++) {
        		var rowPos = this.dsNode.addRow();
        		this.dsNode.copyRow(rowPos, this.dsTplgHw, i, "id=ID,label=LABEL,shape=SHAPE,value=VALUE,image=IMAGE,color=COLOR");

        		rowPos = this.dsEdge.addRow();
        		this.dsEdge.setColumn(rowPos, "from", 	"HW");
        		this.dsEdge.setColumn(rowPos, "to", 	this.dsTplgHw.getColumn(i, "ID"));
        	}

        	// 4. SW
        	for(var i = 0; i < this.dsTplgSw.rowcount; i++) {
        		var rowPos = this.dsNode.addRow();
        		this.dsNode.copyRow(rowPos, this.dsTplgSw, i, "id=ID,label=LABEL,shape=SHAPE,value=VALUE,image=IMAGE,color=COLOR");

        		rowPos = this.dsEdge.addRow();
        		this.dsEdge.setColumn(rowPos, "from",	"SW");
        		this.dsEdge.setColumn(rowPos, "to", 	this.dsTplgSw.getColumn(i, "ID"));
        	}
        }



        // TAB 추가
        this.fnAddTabpage = function(tabCode, tabNm)
        {
        	var svcUrl 	= nexacro.getEnvironment().services["svc_url"].url;
        	var tabId 	= "tab_" + tabCode;
        	var tabCnt	= this.tabTopology.getTabpageCount();

        	// 기존 열린 TAB이 잇으면 이동
        	for(var i = 0; i < tabCnt; i++) {
        		var tabPage = this.tabTopology.tabpages[i];
        		if(tabId == tabPage.id) {
        			this.tabTopology.set_tabindex(i);
        			return;
        		}
        	}

        	// tabPage 추가
        	var tabIdx	= this.tabTopology.insertTabpage(tabId, tabCnt, "", tabNm);
        	var tabPage = this.tabTopology.tabpages[tabIdx];
        	this.btnCloseAll.set_visible(true);

        	// tab에 web browser 추가
        	var objWebBrowser = new WebBrowser("webTopology", 0, 0, null, null, 0, 0);
        	objWebBrowser.set_border("");
        	tabPage.addChild(objWebBrowser.name, objWebBrowser);
        	tabPage.form.webTopology.addEventHandler('onloadcompleted', this.webTopology_onloadcompleted, this);
        	tabPage.form.webTopology.addEventHandler('onusernotify', this.webTopology_onusernotify, this);
        	tabPage.form.webTopology.set_url(svcUrl + 'spp/topology/topology.html');
        	objWebBrowser.show();

        	this.btnCloseAll.set_visible(true);	// all X button
        }


        // TAB 삭제
        this.fnRemoveTabPage = function(tabIdx)
        {
        	if (tabIdx < 0 )
        		return;

        	this.tabTopology.removeTabpage(tabIdx);

        	if (this.tabTopology.getTabpageCount() == 0) {
        		this.btnCloseAll.set_visible(false);
        		return;
        	}

        }


        // Topology 상세 팝업
        this.fnOpenPop = function(sType, sId, sParam3, sParam4)
        {
        	Ex.core.popup(
        		  this
        		, 'topologyDtlPop'
        		, 'am::AM0000_P04.xfdl'
        		, {
        			  title			: Ex.core.word('토폴로지') + ' ' + Ex.core.word('상세')
        			, pTypeCd		: sType
        			, pClassId		: sId
        			, PARAM3		: sParam3
        			, PARAM4		: sParam4
        			, pClassH		: this.CLASS_H
        		  }
        		, 'autosize'
        	);
        }


        this.fnCreateNetwork = function(obj)
        {
        	var vNodes = this.fnFromDataset(this.dsNode);
        	var vEdges = this.fnFromDataset(this.dsEdge);

        	var pNodes = this.fnSetStringToJSON(vNodes);
        	var pEdges = this.fnSetStringToJSON(vEdges);

        	obj.callMethod("setCreateNetwork", pNodes, pEdges);
        }

        this.fnFromDataset = function(ds)
        {
        	var aJsonArray = new Array();
        	for(var i = 0, nRow = ds.getRowCount(); i < nRow; i++)
        	{
        		var aJson = new Object();
        		for(j = 0, nCol = ds.getColCount(); j < nCol; j++)
        		{
        			var name = ds.getColID(j);
        			if (Ex.isEmpty(name))
        				continue;

        			var value = ds.getColumn(i, name)||'';
        			aJson[name] = value;
        		}

        		aJsonArray.push(aJson);
        	}

        	var sNodes = JSON.stringify(aJsonArray);
        	return sNodes;
        }


        this.fnSetJsonToString = function(object)
        {
        	var isArray = ( object.join && object.pop && object.push && object.reverse && object.shift && object.slice && object.splice);
        	var results = [];

        	for (var i in object) {
        		var value = object[i];

        		results.push( (isArray ? "" : "\"" + i.toString() + "\" : ")
        					+ (typeof value == "string" ? "\"" + value + "\"" : value) );
        	}

        	return (isArray ? "[" : "{") + results.join(", ") + (isArray ? "]" : "}");
        }

        this.fnSetStringToJSON = function(strJson)
        {
        	return eval("(" + strJson + ")");
        }



        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnSearch" :		// 검색
        			var HOST_NM = this.edtHostNm.value;
        			this.fnSearchHost('', '', HOST_NM);
        			break;

        		case "btnSearchItsys" :
        			this.fnSearchTree();
        			break;

        		case "btnCloseAll" :	// 모든 tab 닫기
        			var tabCnt = this.tabTopology.getTabpageCount();
        			for(var i = tabCnt-1; i >= 0; i--) {
        				this.fnRemoveTabPage(i);
        			}
        			this.btnCloseAll.set_visible(false);		// all X button
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		if( obj.name == 'edtHostNm' ) {
        			this.btnSearch.setFocus();
        			var HOST_NM = this.edtHostNm.value;
        			this.fnSearchHost('', '', HOST_NM);
        			obj.setFocus();
        		}
        		else if (obj.name == 'edtItsysNm' ) {
        			this.btnSearchItsys.setFocus();
        			this.fnSearchTree();
        			obj.setFocus();
        		}

        	}
        };



        this.dsTree_onrowposchanged = function(obj,e)
        {
        	var ISLEAF = obj.getColumn(e.newrow, 'ISLEAF');
        	var LVL = obj.getColumn(e.newrow, 'LVL');

        	//LVL=3 경우 업무시스템코드임 그외 return
        	if( LVL != 3 || ISLEAF == 0 )
        		return;

        	var ITSYS_ID = obj.getColumn(e.newrow, 'CMM_CD');
        	this.fnSearchHost(ITSYS_ID, '', '');
        	this.fnSearchTopology('ITSYS');
        };


        // TAB X버튼 클릭
        this.tabTopology_onextrabuttonclick = function(obj,e)
        {
        	//this.fnRemoveTabPage(i);

        };



        this.webTopology_onloadcompleted = function(obj,e)
        {
        	if(e.url.toString().indexOf("topology") >= 0)
        	{
        		this.webLoadComplete	= true;
        		this.fnCreateNetwork(obj);
        	}
        };

        this.webTopology_onusernotify = function(obj,e)
        {
        	if(e.userdata == "createComplete")
        		this.webLoadComplete	= true;

        	var objArr = e.userdata.split("||");

        	if(objArr[0] == "POP")			//Topology 상세팝업 호출
        	{
        		if(objArr.length > 2) {
        			this.fnOpenPop(objArr[1], objArr[2], objArr[3], objArr[4]);
        		}
        	}
        	else if(objArr[0] == "TAB") 	//탭 추가
        	{
        		var tabNm	= e.userdata;
        		this.fnAddTabpage(tabNm, tabNm);	//탭페이지 추가
        	}

        };

        // HOST목록 선택
        this.grdItSys_oncellclick = function(obj,e)
        {
        	this.fnSearchTopology('HOST');
        };


        this.Edit_onkillfocus = function(obj,e)
        {
        	if( Ex.isEmpty(obj.value) )
        		obj.set_value(null);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edtHostNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.edtHostNm.addEventHandler("onkillfocus",this.Edit_onkillfocus,this);
            this.grdItSys.addEventHandler("oncellclick",this.grdItSys_oncellclick,this);
            this.btnSearchItsys.addEventHandler("onclick",this.fnCommOnclick,this);
            this.edtItsysNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.edtItsysNm.addEventHandler("onkillfocus",this.Edit_onkillfocus,this);
            this.tabTopology.addEventHandler("onextrabuttonclick",this.tabTopology_onextrabuttonclick,this);
            this.tabTopology.addEventHandler("onmouseup",this.tabTopology_onmouseup,this);
            this.btnCloseAll.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsTree.addEventHandler("onrowposchanged",this.dsTree_onrowposchanged,this);
        };
        this.loadIncludeScript("comTopology.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
