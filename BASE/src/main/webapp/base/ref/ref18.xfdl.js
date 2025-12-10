(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref18");
            this.set_titletext("첨부파일");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode1", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 선택 -</Col></Row><Row><Col id=\"CMM_CD\">Code1</Col><Col id=\"CMM_CD_NM\">코드11</Col></Row><Row><Col id=\"CMM_CD_NM\">코드12</Col><Col id=\"CMM_CD\">Code2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMM_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMM_CD_NM\">- 선택 -</Col></Row><Row><Col id=\"CMM_CD\">Code3</Col><Col id=\"CMM_CD_NM\">코드21</Col></Row><Row><Col id=\"CMM_CD\">Code4</Col><Col id=\"CMM_CD_NM\">코드22</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("TextArea01","1050","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("첨부파일 업/다운로드를 처리한다.\n파일 업로드 하고 저장하는 업무 화면일 경우 예시\n화면에서 데이터 입력&파일 첨부 -> 저장 시 물리파일 서버에 업로드&파일첨부 테이블에 정보 저장 \n-> fnUploadCallback 이벤트 호출 -> save transaction -> fnCallback 호출\n\n\nscript 처리 (자세한 처리는 스크립트 참조)\n1) 파일첨부 Div setting\n- Div를 배치한 후 \"comm::comFile.xfdl\"을 url로 지정한다.\n- fnInit에 아래 첨부파일 처리용 setConfig함수를 호출한다.\n\nvar oParam = {\n\t sSvcId\t\t: \'testFileSvc\'\t\t// divFile callback 후처리용 서비스 ID\n\t,title\t\t: \'User Title\'\t\t// 첨부파일 그리드 타이틀; default : \'첨부파일\'\n\t,limitMinCnt: 0\t\t\t\t\t// 파일 최소 갯수; defualt 0\n\t,limitCnt\t: 3\t\t\t\t\t// 파일 최대 갯수; default 5\n\t,limitSize\t: 100\t\t\t\t// 첨부파일 개당 용량 제한(단위 MB); default 100 MB\n\t,folderName\t: \'ref\'\t\t\t\t// 폴더명(업무명)\n\t,tableName\t: \'CM0000_W_div01\'\t// 구분명(ex. 화면명 + \"_\" + 첨부파일 Div ID)\n\t,primaryKey1: \'TT202306270002\'\t// 테이블 PK1(ex. 요청서ID 등)\n\t,primaryKey2: \'\'\t\t\t\t// 테이블 PK2 (복합 키인 경우 사용)\n\t,primaryKey3: \'\'\t\t\t\t// 테이블 PK3 (복합 키인 경우 사용)\n\t,extGrid\t: this.formatGrid\t// 확장 입력 컬럼 처리를 위한 format용 grid; 자세한 처리는 스크립트 및 좌측 그리드 설명란 참조\n\t,fileDownYn\t: \'\'\t\t\t\t// 파일다운권한; \t 공백 시 메뉴의 조회 권한\n\t,fileUpYn\t: \'\'\t\t\t\t// 파일업로드권한; 공백 시 메뉴의 추가 권한\n\t,deleteYn\t: \'\'\t\t\t\t// 파일삭제권한; \t 공백 시 메뉴의 삭제 권한\n};\nthis.divFile.form.setConfig(this, oParam);\n\n\n2) 파일 저장 서비스 호출\nthis.divFile.form.fnUploadFiles(true);\n- parameter(bCheckValidate) : true:파일업로드전validation수행(default) / false:파일업로드전 validation 비수행\n\n\n3) 파일업로드 콜백이벤트 setting\n- 업무화면 script의 this.fnUploadCallback() 함수에서 업로드 후처리를 기술한다.\n// 파일 업로드 default callback\nthis.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)\n{\n\t// TO DO\n\t// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)\n\tif (nErrorCode < 0) \n\t{\n\t\tEx.core.error(this,{id:\"ERROR\",msg:sSvcId+\"\\n\"+Ex.core.msg(sErrorMsg)});\n\t\treturn;\n\t}\n\t\n\tswitch(sSvcId)\n\t{\n\t\tcase \"fileUploadSvc\" :\n\t\t\t//this.fnSave();\n\t\t\tbreak;\n\t}\t\n}");
            this.addChild(obj.name, obj);

            obj = new Div("divFile","20","55","1000","142",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("comm::comFile.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","940","215","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            this.addChild(obj.name, obj);

            obj = new Grid("formatGrid","20","400","550","270",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_visible("true");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"항목1\"/><Cell col=\"1\" text=\"항목2\" validation=\"항목2;NULL\" cssclass=\"grdHCell_WF_essential\"/><Cell col=\"2\" text=\"항목3\"/><Cell col=\"3\" text=\"항목4\"/><Cell col=\"4\" text=\"항목5\"/></Band><Band id=\"body\"><Cell text=\"bind:EXT_COL_1\" edittype=\"combo\" displaytype=\"combocontrol\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsCode1\"/><Cell col=\"1\" text=\"bind:EXT_COL_2\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"CMM_CD\" combodatacol=\"CMM_CD_NM\" combodataset=\"dsCode2\" validation=\"항목2;NULL\" validationStatus=\"false\"/><Cell col=\"2\" text=\"bind:EXT_COL_3\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:EXT_COL_4\" displaytype=\"mask\" edittype=\"text\" editinputtype=\"number\"/><Cell col=\"4\" text=\"bind:EXT_COL_5\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00","formatGrid:20","400",null,null,"830","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_value("첨부파일 추가 입력 처리를 위한 가이드\n\n1. 추가항목 data 처리\n첨부파일 Table(FOMM_ATCHFILE_MT)의 항목1~항목5(EXT_COL_1 ~ EXT_COL_5)\n컬럼에 매핑하여 저장한다.\n\n2. 추가항목 UI 가이드\n추가항목을 입력받을 grid 객체에 입력 제한, 입력 타입을 설정한 후\nsetConfig oParam의 extGrid로 넘긴다.\n- extGrid의 input type, displayType, inner dataset 등\n  모든 입력 관련 옵션을 그대로 넘기기 위해 format을 읽어 처리함.\n(자세한 처리는 스크립트 및 좌측 그리드 형식 참조)");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1.09%","20","6.47%","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("첨부파일 입력모드");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","130","20","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">보통</Col></Row><Row><Col id=\"codecolumn\">ext</Col><Col id=\"datacolumn\">추가입력</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("normal");
            obj.set_index("0");
            obj.set_text("보통");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFile
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comFile.xfdl");
        };
        
        // User Script
        this.registerScript("ref18.xfdl", function() {
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
        this.oParam;
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
        	var oParam = {
        		 sSvcId		: 'testFileSvc'		// divFile callback 후처리용 서비스 ID
        		,title		: 'User Title'		// 첨부파일 그리드 타이틀; default : '첨부파일'
        		,limitMinCnt: 0					// 파일 최소 갯수; defualt 0
        		,limitCnt	: 3					// 파일 최대 갯수; default 5
        		,limitSize	: 100				// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,folderName	: 'ref'				// 폴더명(업무명)
        		,tableName	: 'CM0000_W_div01'	// 구분명(ex. 화면명 + "_" + 첨부파일 Div ID)
        		,primaryKey1: 'TT202306270002'	// 테이블 PK1(ex. 요청서ID 등)
        		,primaryKey2: ''				// 테이블 PK2 (복합 키인 경우 사용)
        		,primaryKey3: ''				// 테이블 PK3 (복합 키인 경우 사용)
        		,extGrid	: null				// 확장컬럼 입력을 위한 format용 grid
        		,fileDownYn	: ''				// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: ''				// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''				// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};
        	this.divFile.form.setConfig(this, oParam);

        	this.oParam = oParam;
        }


        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSave = function()
        {
        	alert('Save Transaction call');
        }


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
        // 파일 업로드 default callback
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	// TO DO
        	// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	switch(sSvcId)
        	{
        		case "testFileSvc" :
        			this.fnSave();
        			break;
        	}

        }



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
        		// 저장 버튼 클릭
                case "btnSave" :
        			// 물리파일업로드&파일정보 테이블 저장 호출
        			if(this.divFile.form.fnSaveCheck())
        			{
        				this.divFile.form.fnUploadFiles();
        			}
        			break;

            }
        }


        this.Radio00_onitemchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "normal" :		// 일반 첨부파일
        			this.oParam.extGrid = null;
        			break;

        		case "ext" :		// 추가입력 첨부파일
        			this.oParam.extGrid = this.formatGrid;
        			break;
        	}

        	this.divFile.form.setConfig(this, this.oParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("ref18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
