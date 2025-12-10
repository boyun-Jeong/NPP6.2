(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref31");
            this.set_titletext("체크리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOparam", this);
            obj._setContents("<ColumnInfo><Column id=\"tableName\" type=\"STRING\" size=\"256\"/><Column id=\"primaryKey1\" type=\"STRING\" size=\"256\"/><Column id=\"primaryKey2\" type=\"STRING\" size=\"256\"/><Column id=\"primaryKey3\" type=\"STRING\" size=\"256\"/><Column id=\"extCol1\" type=\"STRING\" size=\"256\"/><Column id=\"extCol2\" type=\"STRING\" size=\"256\"/><Column id=\"extCol3\" type=\"STRING\" size=\"256\"/><Column id=\"extCol4\" type=\"STRING\" size=\"256\"/><Column id=\"extCol5\" type=\"STRING\" size=\"256\"/><Column id=\"nDispComment\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt00","110","34",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("26,27,28,29,30,31,32,33,34,35,36,37,38,39,44,45,46,47,48,49,50,51,52,53,54,55,56,58,61,62,63,98");
            obj.set_text("26,27,28,29,30,31,32,33,34,35,36,37,38,39,44,45,46,47,48,49,50,51,52,53,54,55,56,58,61,62,63,98");
            this.addChild(obj.name, obj);

            obj = new Div("divCheckList","5","edt00:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoVal","0","0","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoVal_innerdataset = new nexacro.NormalDataset("rdoVal_innerdataset", obj);
            rdoVal_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">H</Col><Col id=\"datacolumn\">가로답항</Col></Row><Row><Col id=\"codecolumn\">V</Col><Col id=\"datacolumn\">세로답항</Col></Row></Rows>");
            obj.set_innerdataset(rdoVal_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            obj.set_text("가로답항");
            this.addChild(obj.name, obj);

            obj = new Static("stcChkLstId","337.00","1","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장 알림 메시지 타입");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChkLstId","1016.00","0","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("38");
            obj.set_text("38");
            this.addChild(obj.name, obj);

            obj = new Static("stcKeyTbl","1082.00","0","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("KEY_TBL");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtKeyTbl","1166.00","0","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("TEST");
            obj.set_text("TEST");
            this.addChild(obj.name, obj);

            obj = new Static("stcPK1","1307.00","0","39","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("PK1");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPK1","stcPK1:5.00","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("11");
            obj.set_text("11");
            this.addChild(obj.name, obj);

            obj = new Static("stcPK2","edtPK1:5.00","0","39","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("PK2");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPK2","stcPK2:5.00","0","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcPK3","1641.00","0","39","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("PK3");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPK3","stcPK3:5.00","0","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","1794.00","0","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Static("stcKeyTbl00","0.00","34","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("체크리스트 목록");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoEditable","170","0","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoEditable_innerdataset = new nexacro.NormalDataset("rdoEditable_innerdataset", obj);
            rdoEditable_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">편집모드</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">조회모드</Col></Row></Rows>");
            obj.set_innerdataset(rdoEditable_innerdataset);
            obj.set_value("Y");
            obj.set_index("0");
            obj.set_text("편집모드");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMsg","stcChkLstId:0","0","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboMsg_innerdataset = new nexacro.NormalDataset("cboMsg_innerdataset", obj);
            cboMsg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">알림없음</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">ALERT</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">TOAST</Col></Row></Rows>");
            obj.set_innerdataset(cboMsg_innerdataset);
            obj.set_value("N");
            obj.set_index("0");
            obj.set_text("알림없음");
            this.addChild(obj.name, obj);

            obj = new Static("stcKeyTbl01","927.00","0","89","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("CHKLST_ID");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIsUseRegBtn","cboMsg:2","0","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboIsUseRegBtn_innerdataset = new nexacro.NormalDataset("cboIsUseRegBtn_innerdataset", obj);
            cboIsUseRegBtn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">등록버튼 사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">등록버튼 미사용</Col></Row></Rows>");
            obj.set_innerdataset(cboIsUseRegBtn_innerdataset);
            obj.set_value("Y");
            obj.set_index("0");
            obj.set_text("등록버튼 사용");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIsLabelScore","cboIsUseRegBtn:2.00","0","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboIsLabelScore_innerdataset = new nexacro.NormalDataset("cboIsLabelScore_innerdataset", obj);
            cboIsLabelScore_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">답항 라벨 점수 표기</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">답항 라벨 점수 미표기</Col></Row></Rows>");
            obj.set_innerdataset(cboIsLabelScore_innerdataset);
            obj.set_value("Y");
            obj.set_index("0");
            obj.set_text("답항 라벨 점수 표기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCheckList
            obj = new Layout("default","",0,0,this.divCheckList.form,function(p){});
            this.divCheckList.form.addLayout(obj.name, obj);

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
        this.registerScript("ref31.xfdl", function() {
        /***********************************************************************************
        * 화면(명)	: 공통 댓글
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: 댓글 핸들링 가이드
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
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	//this.fnButtonComOnclick(this.btnConf);
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.fnButtonComOnclick = function(obj, e)
        {
            switch(obj.name)
        	{
        		case "btnConf" :
        			if( !Ex.isEmpty(this.divCheckList.url) )
        			{
        				trace("this.divCheckList URL Clear");
        				this.divCheckList.set_url("");
        			}
        			this.divCheckList.set_url("fomm::FOMM0700_D01.xfdl");

        			if( Ex.isEmpty(this.edtChkLstId.value) )
        			{
        				var param = {
        					  id	: "AlertChkLstIdI"								//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: this.stcChkLstId.text + "가 입력되지 않았습니다."	//메시지 내용
        					, arrparam : [Ex.core.word("")]							//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			if( Ex.isEmpty(this.edtChkLstId.value) )
        			{
        				var param = {
        					  id	: "AlertKeyTblI"								//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: this.stcKeyTbl.text + "가 입력되지 않았습니다."		//메시지 내용
        					, arrparam : [Ex.core.word("")]							//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			if( Ex.isEmpty(this.edtChkLstId.value) )
        			{
        				var param = {
        					  id	: "AlertPK!I"									//fnMsgAfter에서 식별자로 사용되는 ID
        					, msg	: this.stcPK1.text + "가 입력되지 않았습니다."		//메시지 내용
        					, arrparam : [Ex.core.word("")]							//메시지의 변수에 들어갈 실제값
        					, msgtype : "I"											//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			var oParam = {
        				 IS_AUTO_SIZE	: false												//true(전체 Form에 Scroll발생)/false([divConts] DIV 영역만 Scroll 발생)
        				,IS_DIV_RESIZE	: true												//checklist 데이터 조회하여 화면을 동적으로 그린 후 Header와 [divConts] DIV 크기 재조정을 실행할지 여부
        				,DIRECTION		: this.rdoVal.value									//답항 그리기 방향 H(가로)/V(세로)
        				,EDITABLE		: this.rdoEditable.value == "Y" ? true : false		//true(편집모드)/ false(조회모드)
        				,MSG			: this.cboMsg.value									//N(NO:알림없음), A(ALERT:alert창), T(TOAST:toast메시지)
        				,IS_USE_REG_BTN	: this.cboIsUseRegBtn.value == "Y" ? true : false	//true(등록버튼 사용), false(등록버튼 미사용)
        				,IS_LABEL_SCORE	: this.cboIsLabelScore.value == "Y" ? true : false	//true(답항라벨 점수 표기), false(답항라벨 점수 미표기)
        				,USE_ONSIZE_EVT	: true												//checklist Form의 onsize 이벤트 사용여부 true(사용) / false(미사용)
        				,CHKLST_ID		: this.edtChkLstId.value							//문항 CHKLIST KEY ID
        				,KEY_TBL		: this.edtKeyTbl.value								//구분값
        				,PK1			: this.edtPK1.value									//테이블 PK1
        				,PK2			: this.edtPK2.value									//테이블 PK2 (복합 키인 경우 사용)
        				,PK3			: this.edtPK3.value									//테이블 PK3 (복합 키인 경우 사용)
        			};
        			this.divCheckList.form.setConfig(this, oParam);
        			break;
            }
        }

        this.onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnButtonComOnclick(this.btnConf);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtChkLstId.addEventHandler("onkeyup",this.onkeyup,this);
            this.edtKeyTbl.addEventHandler("onkeyup",this.onkeyup,this);
            this.edtPK1.addEventHandler("onkeyup",this.onkeyup,this);
            this.edtPK2.addEventHandler("onkeyup",this.onkeyup,this);
            this.edtPK3.addEventHandler("onkeyup",this.onkeyup,this);
            this.btnConf.addEventHandler("onclick",this.fnButtonComOnclick,this);
        };
        this.loadIncludeScript("ref31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
