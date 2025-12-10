(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FOMM0900_P01");
            this.set_titletext("쪽지사용자조회");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">NM</Col><Col id=\"CMM_CD_NM\">이름</Col><Col id=\"UP_CD\">01</Col></Row><Row><Col id=\"CMM_CD\">DP</Col><Col id=\"CMM_CD_NM\">팀명</Col><Col id=\"UP_CD\">01</Col></Row><Row><Col id=\"CMM_CD\">NM</Col><Col id=\"CMM_CD_NM\">이름</Col><Col id=\"UP_CD\">02</Col></Row><Row><Col id=\"CMM_CD\">GP</Col><Col id=\"CMM_CD_NM\">그룹명</Col><Col id=\"UP_CD\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchNm", this);
            obj._setContents("<ColumnInfo><Column id=\"SCH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"NAME\">공통</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">개인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsType", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD\">01</Col><Col id=\"CMM_CD_NM\">팀단위</Col></Row><Row><Col id=\"CMM_CD\">02</Col><Col id=\"CMM_CD_NM\">그룹</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommUserMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnCompl",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","70",null,"20","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divSearchArea","20","20",null,"50","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_divSearchArea");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staSearchStr","20","13","89","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("1");
            obj.set_text("검색 구분");
            obj.set_cssclass("sta_WF_schTitle");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","20","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"13","75","24","20",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"13","20","24","0",null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("3");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Radio("rdoSchOdr","staSearchStr:0","13","150","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsType");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_direction("vertical");
            obj.set_padding("0px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_value("01");
            obj.set_index("0");
            obj.set_text("부서");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Combo("cboQualDiv","rdoSchOdr:0","13","90","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("5");
            obj.set_cssclass("cbo_WF_normal");
            obj.set_codecolumn("CMM_CD");
            obj.set_datacolumn("CMM_CD_NM");
            obj.set_innerdataset("dsCboGrp");
            obj.set_value("01");
            obj.set_index("0");
            obj.set_text("이름");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","cboQualDiv:5","13","150","24",null,null,null,null,null,null,this.divContent.form.divSearchArea.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_normal");
            this.divContent.form.divSearchArea.addChild(obj.name, obj);

            obj = new Static("staUserInfo","20","Static00:300","98","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("수신자");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","staUserInfo:0",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_background("#e5dbfa");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Grid("grdUserInfo","20","staUserInfo:10",null,null,"20","20",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFommUserMt");
            obj.set_cssclass("grd_WF_normal");
            obj.set_autofittype("col");
            obj.set_useSort("true");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"multiSel\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"133\"/><Column size=\"120\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번(ID)\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"소속명\"/><Cell col=\"4\" text=\"팀명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"직책(역할)\"/><Cell col=\"7\" text=\"내선번호\"/><Cell col=\"8\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:CO_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:TELNUM\"/><Cell col=\"8\" text=\"bind:USE_YN\" edittype=\"none\" displaytype=\"text\"/></Band></Format><Format id=\"singleSel\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"107\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번(ID)\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책(역할)\"/><Cell col=\"6\" text=\"내선번호\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:USER_NM\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CO_NM\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:POS_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ROLE_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:TELNUM\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","0",null,"20","-5",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcCnt","115","Static00:300","60","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("9");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsFommUserMt");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divGrdTopBtn","41.05%","Static00:300",null,"24","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divContent.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_del");
            obj.set_text("삭제");
            this.divContent.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd","45%","0","30",null,null,"0",null,null,null,null,this.divContent.form.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("▼");
            obj.set_cursor("pointer");
            this.divContent.form.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Div("divGrp","20","Static00:0",null,null,"20","staUserInfo:10",null,null,null,null,this.divContent.form);
            obj.set_taborder("11");
            obj.set_async("false");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"30","61.28%",null,null,null,null,null,this.divContent.form.divGrp.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divContent.form.divGrp.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","60","24",null,null,null,null,null,null,this.divContent.form.divGrp.form.div_search.form);
            obj.set_taborder("0");
            obj.set_text("조직도");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.divGrp.form.div_search.addChild(obj.name, obj);

            obj = new Static("stcCnt","Static00:0","0","60","24",null,null,null,null,null,null,this.divContent.form.divGrp.form.div_search.form);
            obj.set_taborder("1");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsDeptUser");
            this.divContent.form.divGrp.form.div_search.addChild(obj.name, obj);

            obj = new Radio("rdoSchFilter",null,"0","180","24","0",null,null,null,null,null,this.divContent.form.divGrp.form.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_group_type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_padding("0px");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_visible("false");
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("전체");
            this.divContent.form.divGrp.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_search00","41.05%","0",null,"30","0",null,null,null,null,null,this.divContent.form.divGrp.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divContent.form.divGrp.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","60","24",null,null,null,null,null,null,this.divContent.form.divGrp.form.div_search00.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.form.divGrp.form.div_search00.addChild(obj.name, obj);

            obj = new Static("stcCnt","Static00:0","0","60","24",null,null,null,null,null,null,this.divContent.form.divGrp.form.div_search00.form);
            obj.set_taborder("1");
            obj.set_text("0 건");
            obj.set_cssclass("sta_WF_grdCnt");
            obj.set_countDataset("dsUserList");
            this.divContent.form.divGrp.form.div_search00.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","30",null,null,"61.28%","0",null,null,null,null,this.divContent.form.divGrp.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_tree");
            obj.set_cellsizingtype("none");
            obj.set_binddataset("dsDeptUser");
            obj.set_formatid("dept");
            obj.set_useCheck("false");
            obj.set_useSort("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"group\"><Columns><Column size=\"86\"/><Column size=\"201\"/><Column size=\"48\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"그룹명\"/><Cell col=\"2\" text=\"인원수\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" combodataset=\"ds_group_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" validation=\"구분;NULL\" text=\"bind:GROUP_TYPE\"/><Cell col=\"1\" text=\"bind:GROUP_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CNT\" textAlign=\"right\" displaytype=\"number\"/></Band></Format><Format id=\"dept\"><Columns><Column size=\"331\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" textAlign=\"left\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LEVEL\"/></Band></Format><Format id=\"dept_backup\"><Columns><Column size=\"86\"/><Column size=\"331\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" validation=\"구분;NULL\" text=\"expr:SCH_TYPE==&apos;01&apos;?&apos;부서&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divContent.form.divGrp.addChild(obj.name, obj);

            obj = new Grid("grd_sub","41.05%","30",null,null,"0","0",null,null,null,null,this.divContent.form.divGrp.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_normal");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsUserList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"팀명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" color=\"blue\" font=\"10pt &quot;Malgun Gothic, 맑은 고딕&quot;\" cursor=\"pointer\" textDecoration=\"underline\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USER_ID\" combodataset=\"dsUnitCntrYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:USER_NM\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"3\" text=\"bind:POS_NM\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divContent.form.divGrp.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divSearchArea.form
            obj = new Layout("default","",0,0,this.divContent.form.divSearchArea.form,function(p){});
            this.divContent.form.divSearchArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrdTopBtn.form,function(p){});
            this.divContent.form.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrp.form.div_search.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrp.form.div_search.form,function(p){});
            this.divContent.form.divGrp.form.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrp.form.div_search00.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrp.form.div_search00.form,function(p){});
            this.divContent.form.divGrp.form.div_search00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divGrp.form
            obj = new Layout("default","",0,0,this.divContent.form.divGrp.form,function(p){});
            this.divContent.form.divGrp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",950,680,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.divSearchArea.form.edtCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divSearchArea.form.staCoNm","value","dsCond","CO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divSearchArea.form.edtDeptNm","value","dsSchNm","SCH_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FOMM0900_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0900_P01
        * 화면(명)		︰ 쪽지 사용자 선택 팝업
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰ 쪽지 사용자 선택 팝업
        * 작성자		︰ WEMB
        * 작성일		︰ 2025.03.11
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2025.03.11	 WEMB			최초작성
        *------------------------------------------------------------------
        * Description
        	<< Popup param >>
        	* pSelType			선택 타입					S:단일선택 M:다중선택
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.objApp = nexacro.getApplication();
        this.pSelType = '';		// 선택구분; 'S':single:단건선택; 'M':multi:다건선택
        this.objTgDs = '';
        this.filterStr = '';
        this.filterCol = '';

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
        	this.fnCompInit();		// 컴포넌트 초기화
        }

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
        	this.fnDsSchInit();

        	// transaction
        	var sTranId = "selectMemoDeptUser";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0900W/selectMemoDeptUser";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsDeptUser=dsDeptUser";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch02 = function(vDeptCd, vSchNm)
        {
        	// transaction
        	var sTranId = "selectMemoDeptUserList";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0900W/selectMemoDeptUserList";                         // 서비스명
            var sInDs = "";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUserList=dsUserList";           // 서버에서 수신할 데이타셋
            var sArg = "DEPT_CD='"+vDeptCd+"'";
        	    sArg += " SCH_NM='"+vSchNm+"'";

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch03 = function()
        {
        	this.fnDsSchInit();

        	// transaction
        	var sTranId = "selectMemoGrpUser";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0900W/selectMemoGrpUser";                         // 서비스명
            var sInDs = "dsCond=dsCond";                  // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsDeptUser=dsDeptUser";           // 서버에서 수신할 데이타셋
            var sArg = "";                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearch04 = function(vGroupId, vSchNm)
        {
        	// transaction
        	var sTranId = "selectMemoGrpUserList";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0900W/selectMemoGrpUserList";               // 서비스명
            var sInDs = "";                                    // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsUserList=dsUserList";                           // 서버에서 수신할 데이타셋
            var sArg = "GROUP_ID='"+vGroupId+"'";
        	    sArg += " SCH_NM='"+vSchNm+"'";                                                   // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // 조회
        this.fnSearchEx = function(strDsId)
        {
        	// transaction
        	var sTranId = "selectUserRtn";                          // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FOMM0900W/selectUserRtn";               // 서비스명
            var sInDs = "dsCond="+strDsId;                                    // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommUserMt=dsFommUserMt";                           // 서버에서 수신할 데이타셋
            var sArg = "";                                                 // 서버 @ParamVariable 인자와 맵핑됨

            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }


        // 공통 저장 func.
        this.fnSave = function()
        {

        }


        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = objDs.rowcount-1; i >= 0; i--)
        		objDs.deleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
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
        		case "selectMemoDeptUser" :

        			Ex.core.toast(this, "10002");

        			break;
        		case "selectMemoGrpUser" :
        			Ex.core.toast(this, "10002");
        			break;

        		case "selectMemoDeptUserList" :
        		case "selectMemoGrpUserList" :
        			var colInfo = this.dsFommUserMt.getColumnInfo(0);
        			if(colInfo==undefined) {
        				for(var i=0;this.dsUserList.colcount;i++) {
        					var frmInfo = this.dsUserList.getColumnInfo(i);
        					this.dsFommUserMt.addColumnInfo(frmInfo.id,frmInfo);
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
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	if(!varValue)
        		return;

        	switch(mID)
        	{

        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // component init
        this.fnCompInit = function()
        {
        	this.objTgDs = this.getOwnerFrame().pTgDs;

        	if(typeof( this.getOwnerFrame().pFilterCol)!='undefined') {
        		this.filterCol = this.getOwnerFrame().pFilterCol;
        	}

        	if(typeof( this.getOwnerFrame().pFilterStr) !='undefined') {
        		this.filterStr = this.getOwnerFrame().pFilterStr;
        	}

        	if(!Ex.isEmpty(this.objTgDs) && !Ex.isEmpty(this.filterCol) && !Ex.isEmpty(this.filterStr)) {
        		this.objTgDs.enableevent = false;
        		this.objTgDs.filter(this.filterCol.id+"=='"+this.filterStr+"'");
        		this.dsSelRtn.copyData(this.objTgDs,true);
        		this.objTgDs.filter("");
        		this.objTgDs.enableevent = true;


        	} else {
        		if(!Ex.isEmpty(this.objTgDs)) {
        			if(!Ex.isEmpty(this.objTgDs)) {
        				this.dsSelRtn.copyData(this.objTgDs,true);
        			}
        		}
        	}

        	if(this.dsSelRtn.rowcount > 0) {
        		this.fnSearchEx(this.dsSelRtn.id);
        	}

        	this.dsCboGrp.filter("UP_CD=='"+this.divContent.form.divSearchArea.form.rdoSchOdr.value+"'");

        	var userName = this.getOwnerFrame().pData;
        	var aRow = this.dsSchNm.addRow();

        	if(!Ex.isEmpty(userName)) {
        		this.dsSchNm.setColumn(aRow, "SCH_NM",userName);
        	} else {
        		this.dsSchNm.setColumn(aRow, "SCH_NM",null);
        	}

        	aRow = this.dsCond.addRow();
        	this.dsCond.setColumn(aRow, "DEPT_NM",null);
        	this.dsCond.setColumn(aRow, "USER_NM",null);
        	this.dsCond.setColumn(aRow, "GROUP_NM",null);

        	this.fnSearchReset();	// 검색조건 초기화
        	this.fnSearch();		// 검색
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
        			var rVal = this.divContent.form.divSearchArea.form.rdoSchOdr.value;
        			if(rVal == '01') {
        				this.fnSearch();
        			} else {
        				this.fnSearch03();
        			}
        			break;

        		case "btnSearchReset" :		// 검색조건 초기화
        			this.fnSearchReset();
        			break;

        		case "btnClose" :			// 닫기
        			Ex.core.pclose(this);
        			break;

        		case "btnCompl" :		// 선택
        			this.fnSelect();
        			break;

        		case "btnAdd" :

        			this.dsUserList.enableevent = false;
        			this.dsUserList.filter("CHK=='1'");

        			var fRow = -1;
        			var chkId = "";
        			var aRow = -1;

        			for(var i=0; i<this.dsUserList.rowcount; i++)
        			{
        				chkId = this.dsUserList.getColumn(i,"USER_ID");
        				fRow = this.dsFommUserMt.findRowExpr("USER_ID=='"+chkId+"'");

        				if(fRow == -1) {
        					aRow = this.dsFommUserMt.addRow();
        					this.dsFommUserMt.copyRow(aRow, this.dsUserList, i);
        				}
        			}

        			this.dsUserList.filter("");
        			this.dsUserList.enableevent = true;

        			break;

        	    case "btnDelete" :
        			this.fnDelete(this.dsFommUserMt);
        			break;
        	}
        }

        // 공통 onkeydown event : component
        this.fnCommOnkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.divContent.form.divSearchArea.form.btnSearch.setFocus();

        		var evtInfo = new nexacro.ClickEventInfo();

        		this.fnCommOnclick(this.divContent.form.divSearchArea.form.btnSearch, evtInfo);
        		obj.setFocus();
        	}
        };


        this.divContent_divSearchArea_rdoSchOdr_onitemchanged = function(obj,e)
        {
        	this.dsSchNm.setColumn(0, "SCH_NM",null);

        	if(e.postvalue=="01") {
        		this.fnSearch();
        		this.divContent.form.divGrp.form.grd_main.formatid = "dept";
        		this.divContent.form.divGrp.form.div_search.form.Static00.text = "조직도";
        		this.divContent.form.divGrp.form.div_search.form.rdoSchFilter.visible = false;
        		this.dsDeptUser.filter("");
        	} else if(e.postvalue=="02") {
        		this.fnSearch03();
        		this.divContent.form.divGrp.form.grd_main.formatid = "group";
        		this.divContent.form.divGrp.form.div_search.form.Static00.text = "그룹";
        		this.divContent.form.divGrp.form.div_search.form.rdoSchFilter.visible = true;
        		this.divContent.form.divGrp.form.div_search.form.rdoSchFilter.index = 0;
        		this.dsDeptUser.filter("");
        	}

        	this.dsCboGrp.filter("UP_CD=='"+e.postvalue+"'");
        	this.divContent.form.divSearchArea.form.cboQualDiv.index = 0;
        };

        this.dsDeptUser_onrowposchanged = function(obj,e)
        {
        	if(e.newrow != -1) {
        		var rVal = this.divContent.form.divSearchArea.form.rdoSchOdr.value;
        		if(rVal == '01') {
        			this.fnSearch02(this.dsDeptUser.getColumn(e.newrow,"DEPT_CD"), this.dsDeptUser.getColumn(e.newrow,"SCH_NM"));
        		} else {
        			this.fnSearch04(this.dsDeptUser.getColumn(e.newrow,"GROUP_ID"), this.dsDeptUser.getColumn(e.newrow,"SCH_NM"));
        		}
        	}
        };

        this.fnDsSchInit = function()
        {
        	this.dsDeptUser.clearData();
        	this.dsUserList.clearData();

        	var schType = this.divContent.form.divSearchArea.form.cboQualDiv.value;
        	this.dsCond.clearData();
        	var aRow = this.dsCond.addRow();

        	if(schType=="NM") {
        		this.dsCond.setColumn(aRow,"USER_NM", this.dsSchNm.getColumn(0,"SCH_NM"));
        	} else if(schType=="DP") {
        		this.dsCond.setColumn(aRow,"DEPT_NM", this.dsSchNm.getColumn(0,"SCH_NM"));
        	} else if(schType=="GP") {
        		this.dsCond.setColumn(aRow,"GROUP_NM", this.dsSchNm.getColumn(0,"SCH_NM"));
        	}
        }

        this.divContent_divGrp_div_search_rdoSchFilter_onitemchanged = function(obj,e)
        {
        	this.dsUserList.clearData();
        	this.dsDeptUser.enableevent = false;
        	if(Ex.isEmpty(e.postvalue)) {
        		this.dsDeptUser.filter("");
        	} else {
        		this.dsDeptUser.filter("");
        		this.dsDeptUser.filter("GROUP_TYPE=='"+e.postvalue+"'");
        	}

        	var evtDsInfo = new nexacro.DSRowPosChangeEventInfo();
        	evtDsInfo.newrow = 0;
        	this.dsDeptUser.rowposition = evtDsInfo.newrow;
        	this.dsDeptUser_onrowposchanged(this.dsDeptUser,evtDsInfo);
        	this.dsDeptUser.enableevent = true;

        };

        this.fnSelect = function()
        {
        	Ex.core.pclose(this, this.dsFommUserMt.saveXML());
        }
        this.dsUserList_onload = function(obj,e)
        {
        	this.divContent.form.divGrp.form.grd_sub.setCellProperty("Head", this.divContent.form.divGrp.form.grd_sub.getBindCellIndex('Body', 'CHK'), "text", "0");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBottom.form.btnCompl.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divSearchArea.form.rdoSchOdr.addEventHandler("onitemchanged",this.divContent_divSearchArea_rdoSchOdr_onitemchanged,this);
            this.divContent.form.divSearchArea.form.edtDeptNm.addEventHandler("onkeydown",this.fnCommOnkeydown,this);
            this.divContent.form.grdUserInfo.addEventHandler("oncelldblclick",this.divContent_grdUserInfo_oncelldblclick,this);
            this.divContent.form.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divContent.form.divGrp.form.div_search.form.rdoSchFilter.addEventHandler("onitemchanged",this.divContent_divGrp_div_search_rdoSchFilter_onitemchanged,this);
            this.dsUserList.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsUserList.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsUserList.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
            this.dsUserList.addEventHandler("onload",this.dsUserList_onload,this);
            this.dsDeptUser.addEventHandler("onrowposchanged",this.dsDeptUser_onrowposchanged,this);
            this.dsFommUserMt.addEventHandler("onrowposchanged",this.dsFommUserMt_onrowposchanged,this);
            this.dsFommUserMt.addEventHandler("oncolumnchanged",this.fnCommOncolumnchanged,this);
            this.dsFommUserMt.addEventHandler("canrowposchange",this.dsFommUserMt_canrowposchange,this);
        };
        this.loadIncludeScript("FOMM0900_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
