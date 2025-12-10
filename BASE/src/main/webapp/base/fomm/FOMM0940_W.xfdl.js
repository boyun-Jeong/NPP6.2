(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0940_W");
            this.set_titletext("쪽지 그룹 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_code_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">예</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 선택 -</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"NAME\">공통</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">개인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_memo_group", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"STRING\" size=\"16\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OWNER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GROUP_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/><Column id=\"CNT\" type=\"INT\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_memo_group_user", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"STRING\" size=\"16\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"JBC_JNAME\" type=\"STRING\" size=\"100\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_memo_group_cpy", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"STRING\" size=\"16\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OWNER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GROUP_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"REG_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"LMOD_USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"LMOD_USER_NM\" type=\"STRING\" size=\"20\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/><Column id=\"CNT\" type=\"INT\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"50","51.19%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","90","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("쪽지그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn00",null,"12","250","24","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnDelGrp",null,"0","60",null,"0","0",null,null,null,null,this.div_search.form.divGrdMtTopBtn00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.div_search.form.divGrdMtTopBtn00.addChild(obj.name, obj);

            obj = new Button("btnAddGrp",null,"0","60","24","65",null,null,null,null,null,this.div_search.form.divGrdMtTopBtn00.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.div_search.form.divGrdMtTopBtn00.addChild(obj.name, obj);

            obj = new Static("sta_mainListCnt","82.00","99","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GridCount");
            obj.set_countDataset("dsMain");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBotBtn",null,null,"360","32","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","0","0",null,null,null,null,this.divGrdBotBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divGrdBotBtn.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","div_search:0",null,null,"51.19%","40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_memo_group");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"85\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\" displaytype=\"normal\"/><Cell col=\"1\" text=\"행상태\"/><Cell col=\"2\" text=\"구분\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"3\" text=\"그룹명\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"4\" text=\"사용여부\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"5\" text=\"인원수\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ROWFLAG\"/><Cell col=\"2\" text=\"bind:GROUP_TYPE\" displaytype=\"combotext\" combodataset=\"ds_group_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" edittype=\"expr:dataset.parent.fnGirdAuthExprCombo(dataset,currow)\" validation=\"구분;NULL\"/><Cell col=\"3\" text=\"bind:GROUP_NM\" textAlign=\"left\" validation=\"그룹명;NULL|MAX_LEN_ASC:100\" editmaxlength=\"50\" edittype=\"normal\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:USE_YN\" combodataset=\"ds_code_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" validation=\"사용여부;NULL\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:USER_CNT\" calendardisplaynulltype=\"nulltext\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:REG_USER_NM\"/><Cell col=\"7\" text=\"bind:REG_STIME\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search00","51.14%","0",null,"50","0.05%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","63","24",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("0");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_gridTitle");
            this.div_search00.addChild(obj.name, obj);

            obj = new Div("divGrdMtTopBtn",null,"12","250","24","0",null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.div_search00.addChild(obj.name, obj);

            obj = new Button("btnDelUser",null,"0","60",null,"0","0",null,null,null,null,this.div_search00.form.divGrdMtTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.div_search00.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAddUser",null,"0","60","24","65",null,null,null,null,null,this.div_search00.form.divGrdMtTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.div_search00.form.divGrdMtTopBtn.addChild(obj.name, obj);

            obj = new Grid("grd_sub","51.14%","div_search00:0",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_memo_group_user");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\" displaytype=\"text\"/><Cell col=\"2\" text=\"행상태\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"사번\"/><Cell col=\"5\" text=\"이름\"/><Cell col=\"6\" text=\"직책\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" color=\"blue\" font=\"10pt &quot;Malgun Gothic, 맑은 고딕&quot;\" cursor=\"pointer\" textDecoration=\"underline\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ROWFLAG\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USER_ID\" combodataset=\"dsUnitCntrYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:USER_NM\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"6\" text=\"bind:POS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form.divGrdMtTopBtn00.form
            obj = new Layout("default","",0,0,this.div_search.form.divGrdMtTopBtn00.form,function(p){});
            this.div_search.form.divGrdMtTopBtn00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBotBtn.form
            obj = new Layout("default","",0,0,this.divGrdBotBtn.form,function(p){});
            this.divGrdBotBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search00.form.divGrdMtTopBtn.form
            obj = new Layout("default","",0,0,this.div_search00.form.divGrdMtTopBtn.form,function(p){});
            this.div_search00.form.divGrdMtTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search00.form
            obj = new Layout("default","",0,0,this.div_search00.form,function(p){});
            this.div_search00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0940_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)	︰ FOMM0940_W
        * 화면(명)	︰ 쪽지 그룹 관리(개인)
        * 메뉴(경로)	︰ 관리자 > 포털관리 > 쪽지 그룹 관리(개인)
        * 화면 설명	︰ SPP 쪽지 그룹 관리(개인)
        * 작성자		︰ WEMB
        * 작성일		︰ 2024.11.12
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2024.11.12	 WEMB			최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.sysAdminYn = 'N';  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.
        this.rowChangeFlag = false;		// true: 행변경 가능
        this.nSelRow = -1;	// 이동하려는 행
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
        	this.sysAdminYn = Ex.util.getSession('gvAdminYn');
        	this.grd_main.displayRowType();
        	this.grd_sub.displayRowType();

        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	//trace("workArea form init call");
        	this.fnSearch();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {

        }

        // 조회
        this.fnSearch = function()
        {
        	// transaction
        	var sTranId = "select01";					// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0940W/select01";		// 서비스명
            var sInDs = "";				                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "ds_memo_group=ds_memo_group";	// 서버에서 수신할 데이타셋
            var sArg = "admYn='"+this.sysAdminYn+"'";	// 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnSearch02 = function()
        {
        	// transaction
        	var sTranId = "select02";					            // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0940W/select02";		            // 서비스명
            var sInDs = "dsCond=dsCond";				            // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "ds_memo_group_user=ds_memo_group_user";	// 서버에서 수신할 데이타셋
            var sArg = "";								            // 서버 @ParamVariable 인자와 맵핑됨
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        };

        // 저장
        this.fnSave = function()
        {
        	this.ds_memo_group.set_enableevent(false);
        	var sTranId = "save01";
            var sService = "FOMM0940W/save01";
            var sInDs = "ds_memo_group=ds_memo_group ds_memo_group_user=ds_memo_group_user";
            var sOutDs = "ds_memo_group=ds_memo_group";
            var sArg = "admYn='"+this.sysAdminYn+"'";	// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	this.ds_memo_group_user.clearData();
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
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
        	if(sSvcId == "save01" && nErrorCode < 0)
        	{
        		this.ds_memo_group.set_enableevent(true);
        	}

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
        		case "save01" : // 서비스 ID
        			var fRow = -1;
        			this.ds_memo_group.set_enableevent(true);

        			if(this.ds_memo_group.rowcount > 0)
        			{
        				fRow = Ex.isNvl(this.ds_memo_group.findRow("GROUP_ID", this.dsCond.getColumn(0, 'GROUP_ID'), 0));

        				if(fRow > -1)
        				{
        					this.ds_memo_group.set_rowposition(fRow);
        				}
        				else
        				{
        					this.ds_memo_group.set_rowposition(0);
        				}
        			}
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	switch(pID)
        	{
        		case "selectUserPop" :
        			if(!Ex.isEmpty(varValue)) {
        				this.dsSelUser.loadXML(varValue);

        				var dupCnt = 0;
        				// 중복 validation
        				var grpId = this.ds_memo_group.getColumn(this.ds_memo_group.rowposition, "GROUP_ID");

        				for(var i = 0 ; i < this.dsSelUser.rowcount ; i++){
        					var selUserId = this.dsSelUser.getColumn(i, 'USER_ID');
        					var duplRow = this.ds_memo_group_user.findRow('USER_ID', selUserId);
        					if( duplRow >= 0) {
        						var param = {
        								id : "alert_selUserDupl"
        							, msg : "이미 등록한 사용자가 포함되어 있습니다."
        							, arrparam : [Ex.core.word('사용자')]
        							, msgtype : "I"};
        						Ex.core.alert(this, param);
        						return;
        					}

        					this.dsSelUser.setColumn(i, 'CHK', '1');

        					var rowPos = this.ds_memo_group_user.setAddRow();
        					this.ds_memo_group_user.setCopyRow(rowPos, this.dsSelUser, i);
        					this.ds_memo_group_user.setColumn(rowPos, "GROUP_ID", grpId);
        				}
        			}
        		break;

        		case "selectUserPop2" :
        			this.dsUser.clearData();
        			this.dsUser.loadXML(varValue);

        			break;
        	}
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue) return;

        	switch(mID)
        	{
        		case "saveConfirm" :
        			this.fnSave();
        			break;

        		case "rowposChangeConfirm" :		// 행변경 confirm
        			this.rowChangeFlag  = true;
        			this.ds_memo_group.set_rowposition(this.nSelRow);
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
         this.fnGirdAuthExprCombo = function(objDs, vRow)
         {
        	var rtnVal = 'none';

        	if(this.sysAdminYn=="Y") {
        //		var rFlag = objDs.getColumn(vRow, "ROWFLAG");
        //		if(rFlag=="I") {
        			rtnVal = 'combo';
        //		}
        	}

        	return rtnVal;
         }

         this.fnGirdAuthExprNormal = function(objDs, vRow)
         {
        	var rtnVal = 'none';

         	if(this.sysAdminYn=="Y") {
        		var rFlag = objDs.getColumn(vRow, "ROWFLAG");
        		if(rFlag=="I") {
        			rtnVal = 'normal';
        		}
         	}

        	return rtnVal;
         }

        this.fnDelete = function(objDs)
        {
        	if(objDs.name == "ds_memo_group_user") {
        		objDs.set_enableevent(false);
        		objDs.set_filterstr("CHK=='1'");

        		for(var i = objDs.rowcount-1; i >= 0; i--)
        			objDs.setDeleteRow(i);

        		objDs.set_filterstr("");
        		objDs.set_enableevent(true);
        	} else if(objDs.name == "ds_memo_group") {
        		objDs.set_enableevent(false);
        		objDs.setDeleteRow(objDs.rowposition);
        		objDs.set_enableevent(true);

        		if(objDs.getColumn(objDs.rowposition,"ROWFLAG")=="D") {
        			this.ds_memo_group_user.clearData();
        		} else {
        			this.fnSearch02();
        		}
        	}
        };

        this.fnCheckValidate = function()
        {
        	var fRow = this.ds_memo_group.findRowExpr("Ex.isEmpty(GROUP_TYPE)");

        	if(fRow > -1) {
        				var param = {
        				    	id : "noSaveAlert"
        				     , msg : "["+(fRow+1)+"행] 구분은(는) 필수 입력 항목입니다."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false
        	}

        	fRow = this.ds_memo_group.findRowExpr("Ex.isEmpty(GROUP_NM)");

        	if(fRow > -1) {
        				var param = {
        				    	id : "noSaveAlert"
        				     , msg : "["+(fRow+1)+"행] 그룹명은(는) 필수 입력 항목입니다."
        				     , arrparam : ['']
        				     , msgtype : "I"};
        			    Ex.core.alert(this, param);
        				return false
        	}


        	return true;
        };
        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	// TO DO
        	// 개발자가 컴포넌트 onclick event를 'fnCommOnclick'으로 지정하고 컴포넌트 id로 구분하여 작성
        	switch(obj.name)
        	{
        		case "btnAddGrp" :
        				if( Ex.util.isUpdated(this.ds_memo_group) || Ex.util.isUpdated(this.ds_memo_group_user))
        				{
        					var param = {	id : "addAlert"
        						, msg :  "변경된 내용이 있습니다.\n변경된 내용을 저장 또는 삭제 후 추가 가능합니다."
        						, arrparam : []
        						, msgtype : "I"};
        					Ex.core.alert(this, param);
        					return;
        				}

        				var rowPos = this.ds_memo_group.setAddRow();
        						// 그리드 편집모드로 변경
        				this.ds_memo_group.setColumn(rowPos, "USE_YN", 'Y');

        				if(this.sysAdminYn=='Y') {
        					this.ds_memo_group.setColumn(rowPos, "GROUP_TYPE", null);
        				} else {
        					this.ds_memo_group.setColumn(rowPos, "GROUP_TYPE", 'P');
        				}

        				this.ds_memo_group.setColumn(rowPos, "USE_YN", 'Y');
        				this.grd_main.showEditor(true);

        			break;

        		case "btnDelGrp" :
        			this.fnDelete(this.ds_memo_group);
        			break;

        		case "btnAddUser" :
        				if(this.ds_memo_group.rowposition < 0) {
        					return false;
        				}

        				if(this.ds_memo_group.getColumn(this.ds_memo_group.rowposition,"ROWFLAG")=="I") {
        					var param = {	id : "addAlert"
        						, msg :  "추가한 그룹을 저장후 추가하세요."
        						, arrparam : []
        						, msgtype : "I"};
        					Ex.core.alert(this, param);
        					return;
        				}

        				var pSelType = 'M';	// 'S' : single select || 'M' : multi select
        				Ex.core.popup(	this,
        							'selectUserPop',
        							"fomm::FOMM0000_P01.xfdl",             		// <--- 팝업창 오픈 Url
        							{ title:Ex.core.word('사용자 선택') , pSelType:pSelType},     	// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        							"width=900,height=500"                  // <--- width/height/modeless(프레임 처리 옵션)
        				  );
        			break;

        		case "btnDelUser" :
        			this.fnDelete(this.ds_memo_group_user);
        			break;

        		case "btnSave" :

        			if( this.fnCheckValidate() )
        			{
        				var param = {
        					  id : "saveConfirm"
        					, msg : "10003"
        					, arrparam : ['']
        					, msgtype : "I"
        				};
        				Ex.core.confirm(this, param);
        			}
        			break;
        	}
        }

        this.ds_memo_group_onrowposchanged = function(obj,e)
        {
        	this.ds_memo_group_user.clearData();

        	var rowFlag = obj.getColumn(e.newrow, "ROWFLAG");

        	if(rowFlag != "I")
        	{
        		this.dsCond.setColumn(0, 'GROUP_ID', obj.getColumn(e.newrow,"GROUP_ID"));
        		if(obj.getColumn(e.newrow, "ROWFLAG") != "D")	this.fnSearch02();
        	}

        	this.rowChangeFlag = false;		// 행변경 flag 초기화
        	this.nSelRow = -1;				// 이동하려는 행 초기화
        };

        this.dsOnColumnChanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.ds_memo_group_canrowposchange = function(obj,e)
        {
        	if( Ex.util.isUpdated(this.ds_memo_group_user) )
        	{
        		if( !this.rowChangeFlag ) {
        			this.nSelRow = e.newrow;		// 이동하려는 행 저장
        			var param = {	id : "rowposChangeConfirm"
        					  , msg : "10001"
        					  , arrparam : []
        					  , msgtype : "I"};
        			Ex.core.confirm(this, param);
        			return false;
        		}
        	}
        	return true;
        };


        this.div_search00_btn00_onclick = function(obj,e)
        {

        	Ex.core.popup(
        		this,
        		'selectUserPop2',
        		"fomm::FOMM0900_P01.xfdl",             		// <--- 팝업창 오픈 Url
        		objPrm,											// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=900,height=680"                  	// <--- width/height/modeless(프레임 처리 옵션)
        	);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.divGrdMtTopBtn00.form.btnDelGrp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search.form.divGrdMtTopBtn00.form.btnAddGrp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.sta_mainListCnt.addEventHandler("onclick",this.sta_mainListCnt_onclick,this);
            this.divGrdBotBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search00.form.divGrdMtTopBtn.form.btnDelUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.div_search00.form.divGrdMtTopBtn.form.btnAddUser.addEventHandler("onclick",this.fnCommOnclick,this);
            this.ds_memo_group.addEventHandler("onrowposchanged",this.ds_memo_group_onrowposchanged,this);
            this.ds_memo_group.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.ds_memo_group.addEventHandler("canrowposchange",this.ds_memo_group_canrowposchange,this);
            this.ds_memo_group_user.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
            this.dsUser.addEventHandler("oncolumnchanged",this.dsOnColumnChanged,this);
        };
        this.loadIncludeScript("FOMM0940_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
