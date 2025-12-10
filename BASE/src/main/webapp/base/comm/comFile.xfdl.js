(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFile");
            this.set_titletext("파일첨부");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_KEY1_00\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_TBL\" type=\"STRING\" size=\"256\"/><Column id=\"FLDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PK1\" type=\"STRING\" size=\"256\"/><Column id=\"PK2\" type=\"STRING\" size=\"256\"/><Column id=\"PK3\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_KEY_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_KEY_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_KEY_3\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_KEY_RANGE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_KEY1\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_KEY2\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_KEY3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFommFile", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ICON\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TMPLAT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_TBL\" type=\"STRING\" size=\"256\"/><Column id=\"FLDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PK1\" type=\"STRING\" size=\"256\"/><Column id=\"PK2\" type=\"STRING\" size=\"256\"/><Column id=\"PK3\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL_3\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL_4\" type=\"STRING\" size=\"256\"/><Column id=\"EXT_COL_5\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/><Column id=\"FRNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownloadInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ICON\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_TBL\" type=\"STRING\" size=\"256\"/><Column id=\"FLDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PK1\" type=\"STRING\" size=\"256\"/><Column id=\"PK2\" type=\"STRING\" size=\"256\"/><Column id=\"PK3\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FRID\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMID\" type=\"STRING\" size=\"256\"/><Column id=\"LMDT\" type=\"STRING\" size=\"256\"/><Column id=\"LMPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new VirtualFile("VirtualFile", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcGridBg","5","39",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Drop Files Here");
            obj.set_cssclass("sta_WF_fileDropBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFile","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFommFile");
            obj.set_autofittype("col");
            obj.set_useFilter("false");
            obj.set_cssclass("grd_WF_normal");
            obj.set_background("white");
            obj.set_tabstop("false");
            obj.getSetter("skipComp").set("Y");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"200\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" border=\"1px solid #9ea7cc,0px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc\"/><Cell col=\"4\" text=\"파일명\" border=\"1px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc,0px solid #9ea7cc\"/><Cell col=\"5\" text=\"크기\"/><Cell col=\"6\" text=\"최초등록자\"/><Cell col=\"7\" text=\"최초등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"expr:currow+1\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"bind:FILE_ICON\" imagestretch=\"fixaspectratio\" autosizecol=\"none\"/><Cell col=\"4\" text=\"bind:FILE_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:FILE_SIZE_NM\" autosizecol=\"limitmax\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:FRNM\"/><Cell col=\"7\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format><Format id=\"extFormat\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"200\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" border=\"1px solid #9ea7cc,0px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc\"/><Cell col=\"4\" text=\"파일명\" border=\"1px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc,0px solid #9ea7cc\"/><Cell col=\"5\" text=\"크기\"/><Cell col=\"6\" text=\"최초등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:EDIT_YN == &apos;Y&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:EDIT_YN == &apos;Y&apos; ? &apos;checkbox&apos; : &apos;none&apos;\" text=\"bind:CHK\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"expr:currow+1\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"bind:FILE_ICON\" imagestretch=\"fixaspectratio\" autosizecol=\"none\"/><Cell col=\"4\" text=\"bind:FILE_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:FILE_SIZE_NM\" autosizecol=\"limitmax\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format><Format id=\"default_bak\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"200\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"50\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" border=\"1px solid #9ea7cc,0px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc\"/><Cell col=\"4\" text=\"파일명\" border=\"1px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc,0px solid #9ea7cc\"/><Cell col=\"5\" text=\"크기\"/><Cell col=\"6\" text=\"최초등록자\"/><Cell col=\"7\" text=\"최초등록일\"/><Cell col=\"8\" text=\"뷰어\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"expr:currow+1\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"bind:FILE_ICON\" imagestretch=\"fixaspectratio\" autosizecol=\"none\" cursor=\"pointer\"/><Cell col=\"4\" text=\"bind:FILE_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:FILE_SIZE_NM\" autosizecol=\"limitmax\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:FRNM\"/><Cell col=\"7\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" displaytype=\"expr:ROWFLAG != &quot;I&quot; ? &quot;imagecontrol&quot; : &quot;none&quot;\" text=\"expr:ROWFLAG != &quot;I&quot; ? &quot;url(&apos;theme://img_bak/btn_top_search.png&apos;)&quot; : &quot;&quot;\" cursor=\"pointer\"/></Band></Format><Format id=\"extFormat_bak\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"200\"/><Column size=\"90\" band=\"right\"/><Column size=\"90\" band=\"right\"/><Column size=\"50\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"No\"/><Cell col=\"3\" border=\"1px solid #9ea7cc,0px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc\"/><Cell col=\"4\" text=\"파일명\" border=\"1px solid #9ea7cc,1px solid #9ea7cc,1px solid #9ea7cc,0px solid #9ea7cc\"/><Cell col=\"5\" text=\"크기\"/><Cell col=\"6\" text=\"최초등록일\"/><Cell col=\"7\" text=\"뷰어\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:EDIT_YN == &apos;Y&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:EDIT_YN == &apos;Y&apos; ? &apos;checkbox&apos; : &apos;none&apos;\" text=\"bind:CHK\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:ROWFLAG\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"expr:currow+1\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"bind:FILE_ICON\" imagestretch=\"fixaspectratio\" autosizecol=\"none\"/><Cell col=\"4\" text=\"bind:FILE_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:FILE_SIZE_NM\" autosizecol=\"limitmax\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" displaytype=\"expr:ROWFLAG != &quot;I&quot; ? &quot;imagecontrol&quot; : &quot;none&quot;\" text=\"expr:ROWFLAG != &quot;I&quot; ? &quot;url(&apos;theme://img_bak/btn_top_search.png&apos;)&quot; : &quot;&quot;\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","220","24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("false");
            obj.getSetter("skipComp").set("Y");
            obj.set_tabstop("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","24","65",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("false");
            obj.getSetter("skipComp").set("Y");
            obj.set_tabstop("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"0","90","24","130",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_fileDown");
            obj.set_visible("false");
            obj.getSetter("skipComp").set("Y");
            obj.set_tabstop("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Static("stcTitle","0","0","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcFileDesc","stcTitle:0","0",null,"24","divBtn:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDelete.set_taborder("0");
                p.btnDelete.set_text("삭제");
                p.btnDelete.set_cssclass("btn_WF_del");
                p.btnDelete.set_visible("false");
                p.btnDelete.getSetter("skipComp").set("Y");
                p.btnDelete.set_tabstop("false");
                p.btnDelete.move(null,"0","60",null,"0","0");

                p.btnAdd.set_taborder("1");
                p.btnAdd.set_text("추가");
                p.btnAdd.set_cssclass("btn_WF_add");
                p.btnAdd.set_visible("false");
                p.btnAdd.getSetter("skipComp").set("Y");
                p.btnAdd.set_tabstop("false");
                p.btnAdd.move(null,"0","60","24","65",null);

                p.btnDownload.set_taborder("2");
                p.btnDownload.set_text("다운로드");
                p.btnDownload.set_cssclass("btn_WF_fileDown");
                p.btnDownload.set_visible("false");
                p.btnDownload.getSetter("skipComp").set("Y");
                p.btnDownload.set_tabstop("false");
                p.btnDownload.move(null,"0","90","24","130",null);
            	}
            );
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("Layout0","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",600,250,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comFile.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ comFile
        * 화면(명)		︰ 첨부파일 div
        * 메뉴(경로)	︰
        * 화면 설명	︰ SPP 첨부파일 Div
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
        		 sSvcId		: 'testFileSvc'		// divFile callback 후처리용 서비스 ID
        		,title		: 'title'			// 그리드  타이틀; default: '첨부파일'
        		,limitMinCnt: 0					// 파일 최소 갯수; default 0
        		,limitCnt	: 3					// 파일 최대 갯수; default 5
        		,limitSize	: 100				// 첨부파일 개당 용량 제한(단위 MB); default 100 MB
        		,tmplatYn	: ''				// 양식파일구분(Y/N, default N)
        		,folderName	: 'test'			// 폴더명(업무명)
        		,tableName	: 'CM_CMM_CD_MT'	// 테이블명
        		,primaryKey1: 'CD_NO'			// 테이블 PK1; default 'TEMP_KEY_'+'사번'
        		,primaryKey2: ''				// 테이블 PK2 (사용 시)
        		,primaryKey3: ''				// 테이블 PK3 (사용 시)
        		,fileDownYn	: ''				// 파일다운권한; 	 공백 시 메뉴의 조회 권한
        		,fileUpYn	: ''				// 파일업로드권한; 공백 시 메뉴의 추가 권한
        		,deleteYn	: ''				// 파일삭제권한; 	 공백 시 메뉴의 삭제 권한
        	};
        this.divFile.form.setConfig(this, oParam);
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.callScope;
        this.svcUrl;
        this.title;

        this.limitMinCnt;	// 첨부파일 최소갯수 제한 default 0
        this.limitCnt;		// 첨부파일 최대갯수 제한 default 5
        this.limitSize;		// 첨부파일 개별 용량 제한 default 100MB

        this.isBtnAuth;
        this.fileDownYn		= 'N';	// 조회/다운로드 권한
        this.fileUpYn		= 'N';	// 추가/파일첨부 권한
        this.deleteYn 		= 'N';	// 삭제 권한
        this.fileNmDupYn	= "N";	// 파일명 중복 체크

        this.tmplatYn		= '';	// 양식파일여부(TMPLAT_YN)
        this.tmplatFolerNm	= 'tmplateFiles/';	// 양식파일일 시 폴더

        this.fileSvcId		= "";	// 첨부파일 서비스 ID
        this.folderName		= "";	// 저장 폴더명
        this.tablename		= "";	// 테이블명

        this.primaryKey1	= "";	// PK1
        this.primaryKey2	= "";	// PK2
        this.primaryKey3	= "";	// PK3
        this.tempKey		= 'TEMP_KEY_' + Ex.util.getSession('gvUserId');

        this.extGrid		= null;	// 추가 입력(EXT_COL_1 ~ EXT_COL_5) 처리를 위한 포멧용 그리드
        this.orgGrdFormat	= '';	// 그리드 포멧 복원을 위한 원본 format string

        this.iconInfo = {
        	ico_file_ZIP: ["zip","rar","7z"],
        	ico_file_IMG: ["jpg", "jpeg", "gif", "png", "bmp", "tif", "tiff"],
        	ico_file_TXT: ["txt", "xml"],
        	ico_file_DOC: ["doc", "docx"],
        	ico_file_XLS: ["xls", "xlsx"],
        	ico_file_PPT: ["ppt", "pptx"],
        	ico_file_PDF: ["pdf"],
        	ico_file_ETC: ["etc"]
        };

        this.fileTransferLog = "";

        this.extWhiteList = ["hwp", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "png", "pdf", "jpg", "sql","jpeg", "gif", "bmp", "zip", "7z", "mp4", "dwg", "tif", "tiff", "show"];
        this.extBlackList = ["exe", "bat", "sh", "java", "jsp", "html", "js", "css", "xml"];

        this.orgGrdFileFormat;
        this.delFnScope;
        this.fnDeleteCheck;
        //this.failUploadFileInfo;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        	this.orgGrdFileFormat = this.grdFile.getCurFormatString();
        }

        this.fnInit = function()
        {
        	 this.svcUrl = nexacro.getEnvironment().services["svc_url"].url;
        }

        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSearchFile = function()
        {
        	if( Ex.isEmpty(this.folderName) || Ex.isEmpty(this.tablename) )
        		return;

        	var sTranId = "selectFileList";                // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FommMultipart/selectFileList";        // 서비스명
            var sInDs = "dsCond=dsCond";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommFile=dsFommFile";       // 서버에서 수신할 데이타셋
            var sArg = "";                   			// 서버 @ParamVariable 인자와 맵핑됨
            /**
        	 * 기본문법
        	 * this : transaction 실행스코프 (필수)
        	 */
        	Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        // TEMPKEY 교체 및 파일리스트 조회
        this.fnReplaceTempkeyAndSearch = function(PK1, PK2, PK3)
        {
        	//trace("this.fnReplaceTempkeyAndSeaarch()~~~~~~~~~~~~~~~~~");
        	var orgPK1	= '';
        	var orgPK2	= '';
        	var orgPK3	= '';

        	if( !Ex.isEmpty(PK1) )
        	{
        		this.dsCond.setColumn(0, 'TEMP_KEY_1', this.dsCond.getColumn(0, "PK1"));
        		this.dsCond.setColumn(0, 'PK1', PK1);
        		this.dsCond.setColumn(0, 'SEARCH_KEY1', this.dsCond.getColumn(0, "PK1"));
        	}

        	if( !Ex.isEmpty(PK2) )
        	{
        		this.dsCond.setColumn(0, 'TEMP_KEY_2', this.dsCond.getColumn(0, "PK2"));
        		this.dsCond.setColumn(0, 'PK2', PK2);

        		if( !Ex.isEmpty(this.dsCond.getColumn(0, 'SEARCH_KEY2')) )
        		{
        			this.dsCond.setColumn(0, 'SEARCH_KEY2', this.dsCond.getColumn(0, "PK2"));
        		}
        	}

        	if( !Ex.isEmpty(PK3) )
        	{
        		this.dsCond.setColumn(0, 'TEMP_KEY_3', this.dsCond.getColumn(0, "PK3"));
        		this.dsCond.setColumn(0, 'PK2', PK3);

        		if( !Ex.isEmpty(this.dsCond.getColumn(0, 'SEARCH_KEY3')) )
        		{
        			this.dsCond.setColumn(0, 'SEARCH_KEY3', this.dsCond.getColumn(0, "PK3"));
        		}
        	}

        	var sTranId = "replaceKeyAndSelect";                // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
            var sService = "FommMultipart/replaceKeyAndSelect";        // 서비스명
            var sInDs = "dsCond=dsCond";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
            var sOutDs = "dsFommFile=dsFommFile";       // 서버에서 수신할 데이타셋
            var sArg = "";                   			// 서버 @ParamVariable 인자와 맵핑됨
            Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        }

        this.fnAddFileList = function(fileList)
        {
        	//trace("this.fnAddFileList()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        	// 파일 갯수 제한 validation
        	//trace(" this.dsFommFile.rowcount >> " + this.dsFommFile.rowcount);
        	//trace(" fileList.length >> " + fileList.length);
        	//trace(" limitCnt >> " + this.limitCnt);

        	var nFileCnt = this.dsFommFile.rowcount + fileList.length;
        	if(nFileCnt > this.limitCnt)
        	{
        		var param = {id : "pLimitCntAlert", msg : '10009', arrparam : [this.limitCnt], msgtype : "I"};
        		Ex.core.alert(this, param);
        		return;
        	}

        	//array type virtualfile List
        	var vFile;
        	for (var i = 0; i < fileList.length; i++)
        	{
        		vFile = fileList[i];
        		var idx = vFile.addEventHandler("onsuccess", this.VirtualFile_onsuccess, this);
        		vFile.addEventHandler("onerror", this.VirtualFile_onerror, this);
        		vFile.open(null, VirtualFile.openRead);
        		vFile.getFileSize();	//return file size

        		vFile.close();
        	}
        }

        this.fnDelete = function(objDs)
        {
        	if(objDs.rowcount == 0) return;

        	nRowCnt = objDs.getCaseCount("CHK == '1'");

        	// 현재 선택 행 삭제
        	objDs.set_enableevent(false);

        	if(nRowCnt == 0)
        	{
        		var editYn = objDs.getColumn(objDs.rowposition,"EDIT_YN");
        		if(editYn == "Y")
        		{
        			objDs.setDeleteRow(objDs.rowposition);
        		}
        		else
        		{
        			return;
        		}
        	}
        	else	// check 행 삭제
        	{
        		var orgFilterStr = objDs.filterstr;
        		objDs.set_filterstr("CHK=='1'");
        		for(var i = objDs.rowcount-1; i >= 0; i--)
        		{
        			//trace("deloteRow i = " + i + " FILE_NM : " + objDs.getColumn(i, "FILE_NM"));
        			//this.FileUpTransfer.removeFile(objDs.getColumn(i, "FILE_NM"));
        			this.FileUpTransfer.removeFile(objDs.getColumn(i, "CREATE_KEY"));
        			objDs.setDeleteRow(i);
        		}

        		if( Ex.isEmpty(orgFilterStr) )
        		{
        			objDs.set_filterstr('');
        		}
        		else
        		{
        			objDs.set_filterstr(orgFilterStr);
        		}
        	}
        	objDs.set_enableevent(true);
        }

        this.fnDownloadFile = function(row)
        {
        	this.FileDownTransfer.clearPostDataList();
        	this.dsDownloadInfo.clearData();

        	/**** 선택 전체 다운로드 ****/
        	if(row == 'ALL')
        	{
        		var nRowCnt = this.dsFommFile.getCaseCount("CHK=='1' && ROWFLAG != 'I'");
        		if( nRowCnt == 0 )	// 체크 행이 없을 때
        		{
        			return;
        		}
        		else if(nRowCnt == 1)	// 체크 행이 1개일 때 - 단건다운로드로 다운
        		{
        			var rowPos = this.dsFommFile.findRowExpr("CHK=='1' && ROWFLAG != 'I'");
        			this.fnDownloadFile(rowPos);
        			return;
        		}

        		// 다중선택 다운로드 begin
        		this.dsFommFile.set_enableevent(false);
        		var orgFilterStr = this.dsFommFile.filterStr;
        		this.dsFommFile.set_filterstr("CHK=='1' && ROWFLAG != 'I'");
        		this.dsDownloadInfo.copyData(this.dsFommFile, true);

        		if( Ex.isEmpty(orgFilterStr) )
        		{
        			this.dsFommFile.set_filterstr('');
        		}
        		else
        		{
        			this.dsFommFile.set_filterstr(orgFilterStr);
        		}
        		this.dsFommFile.set_enableevent(true);
        		//this.FileDownTransfer.set_downloadfilename("fileSample.zip");
        	}
        	/**** 특정 행 다운로드 ****/
        	else
        	{
        		this.dsDownloadInfo.loadXML(this.dsFommFile.saveXML());
        		this.dsDownloadInfo.clearData();
        		this.dsDownloadInfo.copyRow(this.dsDownloadInfo.setAddRow(), this.dsFommFile, row);
        	}

        	if(this.dsDownloadInfo.rowcount < 1)
        		return;

        	this.FileDownTransfer.setPostData("dsFileInfo", this.dsDownloadInfo.saveXML() );
        	this.FileDownTransfer.download(this.svcUrl + "FommMultipart/downloadFiles");
        }

        // File upload tran
        this.fnUploadFiles = function(bCheckValidate)
        {
        	if(this.isUpdateForm())
        	{
        		if( Ex.isEmpty(bCheckValidate) ) bCheckValidate = true;

        		if( bCheckValidate )	// bCheckValidate ==  true : validation수행; false ; validation 비수행;
        		{
        			// 첨부파일 갯수 제한 validation
        			trace(' checking number of file limit ... ' );
        			if(this.dsFommFile.rowcount < this.limitMinCnt)
        			{
        				var param =
        				{
        					  id : "limitMinAlert"
        					, msg : "10029"
        					, arrparam : ['첨부파일', this.limitMinCnt]
        					, msgtype : "I"
        				};
        				Ex.core.alert(this, param);
        				return false;
        			}

        			// 첨부파일 grid validation
        			trace(' checking grid validation ... ' );
        			if( !this.grdFile.checkValidate() )
        				return false;
        		}
        		Ex.util.setWait(this , true);
        		for(var i = 0;  i < this.FileUpTransfer.filelist.length; i++)
        		{
        			trace("filelist i=" + i + " " + this.FileUpTransfer.filelist[i]);
        		}

        		for(var i = 0; i < this.FileUpTransfer.postdatalist.length; i++)
        		{
        			trace("postdatalist i=" + i + " " + this.FileUpTransfer.postdatalist[i]);
        		}
        		//trace("filelist:\n" + this.FileUpTransfer.filelist);
        		this.FileUpTransfer.upload(this.svcUrl + 'FommMultipart/uploadFiles');
        	}
        	else
        	{
        		var callbackFunc = this.callScope.fnUploadCallback;
        		if( Ex.isFunction(callbackFunc) )
        		{
        			//trace("this.fileSvcId : " + this.fileSvcId + " fnUploadCallback 호출");
        			this.callScope.fnUploadCallback(this.fileSvcId, 0);
        		}
        		else
        		{
        			trace("지정된 콜백함수가 선언되어 있지 않습니다.");
        		}
        	}
        	return true;
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
        		case "selectFileList" :
        		case "saveFileInfo" :
        			this.dsFommFile.set_enableevent(false);
        			this.dsFommFile.set_updatecontrol(false);

        			for(var i = 0; i < this.dsFommFile.rowcount; i++)
        			{
        				this.dsFommFile.setColumn(i, "FILE_SIZE_NM", this.fnParseFileSize(this.dsFommFile.getColumn(i, "FILE_SIZE")));
        				this.dsFommFile.applyChange();
        			}

        			this.dsFommFile.set_updatecontrol(true);
        			this.dsFommFile.set_enableevent(true);

        			if(sSvcId == "saveFileInfo")
        			{
        				// 업무화면 공통 callback함수 실행
        				var callbackFunc = this.callScope.fnUploadCallback;
        				if( Ex.isFunction(callbackFunc) )
        				{
        					//trace("this.fileSvcId : " + this.fileSvcId + " fnUploadCallback 호출");
        					this.callScope.fnUploadCallback(this.fileSvcId, nErrorCode, sErrorMsg);
        				}
        				else
        				{
        					trace("지정된 콜백함수가 선언되어 있지 않습니다.");
        				}

        // 				if( !Ex.isEmpty(this.failUploadFileInfo) )
        // 				{
        // 					var param = {id : "failUploadFile", msg : "업로드 파일 목록 중\n일부 파일은 업로드에 실패하였습니다.\n 실패한 파일목록은 다음과 같습니다.\n" + this.failUploadFileInfo, callbackfunc: alertbyMsgCallback}	//'10006', arrparam:[msgParam]};
        // 					Ex.core.error(this, param);
        // 					this.failUploadFileInfo = "";
        // 				}
        			}
        			break;

        		case "replaceKeyAndSelect" :
        			break;
        	}
        }

        // File Upload 디폴트 콜백함수
        this.fnCommUploadCallback = function(nErrorCode, sErrorMsg)
        {
        	trace("this.fnCommUploadCallback() nErrorCode : " + nErrorCode + " sErrorMsg : " + sErrorMsg);
        	Ex.util.setWait(this , false);

        	if(nErrorCode < 0)
        	{
        		if(nErrorCode == -99998)	// session out
        		{
        			var alertbyMsgCallback = function(mid, varValue)
        			{
        				if(mid == "sppSessionOut") document.location.href = "/";
        			};

        			var param = {id : "sppSessionOut", msg : "Session이 종료 되었습니다.", callbackfunc: alertbyMsgCallback}	//'10006', arrparam:[msgParam]};
        			Ex.core.error(this, param);
        		}
        		else
        		{
        			var fileNm		= "";
        			var errorMsg	= "";

        			if(sErrorMsg.indexOf("|") > -1)
        			{
        				fileNm = "파일[" + sErrorMsg.split("|")[0] + "]\n";
        				errorMsg = sErrorMsg.split("|")[1] || sErrorMsg;
        			}
        			else
        			{
        				errorMsg = sErrorMsg;
        			}
        			var param = {id : "failUploadFileMsg", msg : fileNm + "업로드시 오류가 발생했습니다.\n\n(※재업로드시에도 동일한 오류가 발생할 경우\n   첨부된 파일 목록에 대한 확인이 필요합니다.)", callbackfunc: alertbyMsgCallback}	//'10006', arrparam:[msgParam]};
        			Ex.core.error(this, param);
        		}
        		//else sErrorMsg = '10010';	// error
        	}
        	else
        	{
        		for(var i = this.dsFommFile.rowcount-1; i >= 0; i--)
        		{
        // 			if( Ex.isEmpty(this.dsFommFile.getColumn(i, "FILE_SAVE_NM")) )
        // 			{
        // 				this.failUploadFileInfo = Ex.isEmpty(this.failUploadFileInfo) ? "" : "\n" + this.dsFommFile.getColumn(i, "FILE_SAVE_NM");
        // 				this.dsFommFile.setDeleteRow(i);
        // 			}
        		}
        		// 파일 정보 insert tran
        		var sTranId = "saveFileInfo";                			// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
        		var sService = "FommMultipart/saveFileInfo";        	// 서비스명
        		var sInDs = "dsCond=dsCond dsFommFile=dsFommFile:U";    // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
        		var sOutDs = "dsFommFile=dsFommFile";       			// 서버에서 수신할 데이타셋
        		var sArg = "";                   						// 서버 @ParamVariable 인자와 맵핑됨
        		Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // divFile config
        this.setConfig = function(scope, oParam, isSearch, isDownOnly, isBtnAuth)
        {
        	if( Ex.isEmpty(isSearch) ) isSearch = true;
        	if( Ex.isEmpty(isDownOnly) ) isDownOnly = false;
        	if( Ex.isEmpty(isBtnAuth) ) isBtnAuth = true;

        	//trace("this.setConfig() scope : " + scope.parent.id + " isSearch : " + isSearch + " isDownOnly : " + isDownOnly + " isBtnAuth " + isBtnAuth);

        	// comFile 호출한 scope
        	this.callScope = scope;

        	if( !Ex.isEmpty(oParam.delFnScope) )
        	{
        		this.delFnScope = oParam.delFnScope;
        	}

        	if( !Ex.isEmpty(oParam.delCheckFn) )
        	{
        		if( Ex.isEmpty(oParam.delFnScope) )	this.delFnScope = scope;

        		this.fnDeleteCheck	= this.delFnScope[oParam.delCheckFn];
        	}

        	// set param
        	this.tmplatYn		= oParam.tmplatYn||'';			// 템플릿파일여부; default N, N일 시 일반 첨부파일로 구분
        	this.title			= oParam.title||'';				// 첨부파일 grid title
        	this.fileSvcId		= oParam.sSvcId||'';			// 파일 업/다운로드 서비스 id (callback 처리용도)
        	this.folderName		= oParam.folderName||'';		// 파일 저장 폴더명(양식파일일 시 tmplat폴더로 지정
        	this.tablename		= oParam.tableName||'';			// 파일 관리할 테이블명	(업무구분용)
        	this.extCol1		= oParam.extCol1||'';			// 부모창에서 EXT_COL_1 미리세팅할 경우 (파일변경화면에서 필요)

        	this.extGrid		= oParam.extGrid||null;			// 파일 grid 추가입력을 위한 포멧용 grid 객체

        	this.limitMinCnt	= oParam.limitMinCnt||0;		// 첨부파일 최소갯수 제한: default 0;
        	//this.limitCnt		= oParam.limitCnt||5;			// 첨부파일 최대갯수 제한: default 5;
        	//20241202 파일변경등록화면 첨부파일갯수 제어
        	if(this.fileSvcId == 'adminFileSvc') this.limitCnt = 1;
        	else this.limitCnt		= 99;							// 갯수 99개까지 풀기;
        	//this.limitSize		= oParam.limitSize||100;		// 파일별 용량 제한: default 100 (MB);
        	this.limitSize		= 200*1024*1024;

        	this.fileDownYn		= oParam.fileDownYn||'Y';		// 파일다운권한
         	this.fileUpYn		= oParam.fileUpYn||'Y';			// 파일업로드권한
         	this.deleteYn		= oParam.deleteYn||'Y';			// 파일삭제권한
        	this.fileNmDupYn	= oParam.fileNmDupYn||'N';		// 파일명중복체크

        	trace("[comFile]-this.setConfig() this.fileDownYn:[" + this.fileDownYn + "] this.fileUpYn:[" + this.fileUpYn + "] this.deleteYn:[" + this.deleteYn + "]");

        	// 템플릿여부 setting
        	if( Ex.isEmpty(this.tmplatYn) )	this.tmplatYn = 'N';

        	// title setting
        	var grdTitle = Ex.core.word( (Ex.isEmpty(this.title)? '첨부파일' : this.title) );
        	var size = nexacro.getTextSize(grdTitle, this.stcTitle._getCurrentStyleInheritValue("font")).nx;
        	this.stcTitle.set_width(size + 20);
        	this.stcTitle.set_text(grdTitle);
        	//trace("[comFile] this.stcTitle.getOffsetLeft() : " + this.stcTitle.getOffsetLeft() + " this.stcTitle.getOffsetRight() : " + this.stcTitle.getOffsetRight());
        	this.stcFileDesc.set_left(this.stcTitle.getOffsetRight());	// padding 및 간격 추가

        	// 추가입력 그리드 format setting
        	if( Ex.isEmpty(this.orgGrdFormat) )		// 원본 그리드 포멧 저장
        		this.orgGrdFormat = this.grdFile.getFormatString();

        	if( !Ex.isEmpty(this.extGrid) )
        	{
        		if( this.extGrid.toString().toUpperCase() == '[OBJECT GRID]' )
        		{
        			this.fnSetFileGridFormat();
        		}
        	}
        	else
        	{
        		if( !Ex.isEmpty(this.orgGrdFormat) )
        			this.grdFile.set_formats(this.orgGrdFormat);
        	}

        	// TEMP KEY 생성
        	if( Ex.isEmpty(oParam.primaryKey1) )
        	{
        		this.dsCond.setColumn(0, "PK1", this.tempKey);
        	}
        	else
        	{
        		this.dsCond.setColumn(0, "PK1", oParam.primaryKey1);
        	}

        	this.isBtnAuth = isBtnAuth;
        	trace("[comFile]-this.setConfig() this.fileSvcId:[" + this.fileSvcId + "] isSearch:[" + isSearch + "] isDownOnly:[" + isDownOnly + "] isBtnAuth:[" + isBtnAuth + "]");

        	// 권한 setting / oParam으로 넘어온 권한이 없으면 화면 권한을 default로 setting
        	//if(isBtnAuth)
        	//{
        		this.fnSetBtnAuth(isDownOnly);
        	//}

        	// 필수옵션 validation
        	// 파일 서비스 id
        	if( Ex.isEmpty(this.fileSvcId) )
        	{
        		trace('divFile sSvcId empty');
        		return;
        	}

        	// 폴더명; 템플릿여부 N(일반 첨부파일)일 시에만 check
        	if( this.tmplatYn == 'N' )
        	{
        		if( Ex.isEmpty(this.folderName) )
        		{
        			trace('divFile folder name empty');
        			return;
        		}
        	}
        	else
        	{
        		this.folderName = this.tmplatFolerNm + this.folderName;
        	}

        	// 업무 테이블명
        	if( Ex.isEmpty(this.tablename) )
        	{
        		trace('divFile table name empty');
        		return;
        	}

        	// request header 추가
        	this.FileUpTransfer.setPostData("fileFolderName", encodeURIComponent(this.folderName));

        	this.dsCond.setColumn(0, 'TMPLAT_YN', this.tmplatYn);
        	this.dsCond.setColumn(0, 'KEY_TBL', this.tablename);
        	this.dsCond.setColumn(0, 'FLDR_NM', this.folderName);

        	this.dsCond.setColumn(0, 'PK2', oParam.primaryKey2);
        	this.dsCond.setColumn(0, 'PK3', oParam.primaryKey3);

        	var rangeKey	= 0;
        	if( Ex.isEmpty(oParam.editKeyRange) )
        	{
        		if( !Ex.isEmpty(oParam.primaryKey1) )	rangeKey++;
        		if( !Ex.isEmpty(oParam.primaryKey2) )	rangeKey++;
        		if( !Ex.isEmpty(oParam.primaryKey3) )	rangeKey++;

        		this.dsCond.setColumn(0, "EDIT_KEY_RANGE", rangeKey);
        	}
        	else
        	{
        		this.dsCond.setColumn(0, "EDIT_KEY_RANGE", oParam.editKeyRange);
        	}

        	this.dsCond.setColumn(0, 'SEARCH_KEY1', oParam.searchKey1||oParam.primaryKey1||'');
        	this.dsCond.setColumn(0, 'SEARCH_KEY2', oParam.searchKey2||'');
        	this.dsCond.setColumn(0, 'SEARCH_KEY3', oParam.searchKey3||'');

        	// Component Init
        	this.fnCompInit();

        	if( Ex.isEmpty(isSearch) )	isSearch = true;

        	// 첨부파일 조회
        	if(isSearch)	this.fnSearchFile();
        }



        this.fnSetBtnAuth = function(isDownOnly)
        {
        	trace("[comFile] this.fnSetBtnAuth() isDownOnly ::: " + isDownOnly);

        	if( Ex.isEmpty(isDownOnly) ) isDownOnly = false;

        	//this.fileDownYn		= oParam.fileDownYn;	// 다운권한


        	if(isDownOnly)	//다운로드 전용인 경우
        	{
        		this.fileDownYn	= "Y";
        		this.fileUpYn = "N";
        		this.deleteYn = "N";
        	}
        	else
        	{
        		if(this.isBtnAuth)
        		{
        			var oAuth = Ex.util.getMenuAuth(this.callScope);
        			trace("[ELSE] oAuth.readYn : " + oAuth.readYn + " oAuth.fileUpYn : " + oAuth.fileUpYn + " oAuth.deleteYn : " + oAuth.deleteYn);

        			this.fileDownYn = oAuth.readYn;
        			this.fileUpYn = oAuth.fileUpYn;
        			this.deleteYn = oAuth.deleteYn;
        		}
        	}
        	//trace("isDownOnly : " + isDownOnly + " this.isBtnAuth : " + this.isBtnAuth + " this.fileDownYn : " + this.fileDownYn + " this.fileUpYn : " + this.fileUpYn + " this.deleteYn : " + this.deleteYn);

        	// 버튼 visible 처리
        	this.divBtn.form.btnDownload.set_visible(this.fileDownYn=='Y'? true : false);	// 조회(다운로드)
        	this.divBtn.form.btnAdd.set_visible(this.fileUpYn=='Y'? true : false);			// 추가(파일첨부)
        	this.divBtn.form.btnDelete.set_visible(this.deleteYn=='Y'? true : false);		// 삭제

        	//this.divBtn.form.btnDownload.set_right(130);
        	//this.divBtn.form.btnAdd.set_right(65);
        	//this.divBtn.form.btnDelete.set_right(0);

        	Ex.util.setBtnAlign(this.divBtn, 'right', true);
        	trace("[comFile]-this.fnSetBtnAuth() this.fileDownYn:[" + this.fileDownYn + "] this.fileUpYn:[" + this.fileUpYn + "] this.deleteYn:[" + this.deleteYn + "]");
        }



        this.getConfig = function()
        {
        	if( Ex.isEmpty(this.fileSvcId) )
        	{
        		trace('divFile sSvcId empty');
        		return false;
        	}

        	if( Ex.isEmpty(this.folderName) )
        	{
        		trace('divFile folder name empty');
        		return false;
        	}

        	if( Ex.isEmpty(this.tablename) )
        	{
        		trace('divFile table name empty');
        		return false;
        	}
        	return true;
        }



        // Component Init
        this.fnCompInit = function()
        {
        	// grid RowFlag 처리
        	this.grdFile.displayRowType();
        }



        // 확장 컬럼 1~5 처리를 위한 그리드 format setting
        this.fnSetFileGridFormat = function()
        {
        	this.grdFile.set_autofittype('none');
        	this.grdFile.set_enable(false);
        	var strDefaultFormat = this.orgGrdFileFormat;	//this.grdFile.getCurFormatString();		// default format
        	var extFormatId = 'extFormat';	// 확장컬럼 처리용 format id
        	var insertIdx 	= 3;			// 확장 컬럼들 추가할 column index

        	// ext Grid format
        	var strExtFormat 	= this.extGrid.getCurFormatString();
        	var strExtColumns	= strExtFormat.substring( strExtFormat.indexOf('<Columns>')+10, 		strExtFormat.indexOf('</Columns>') 			);	// Columns
        	var strExtRows		= strExtFormat.substring( strExtFormat.indexOf('<Rows>')+7, 			strExtFormat.indexOf('</Rows>') 			);	// Rows
        	var strExtHead		= strExtFormat.substring( strExtFormat.indexOf('<Band id="head">')+17, 	strExtFormat.indexOf('<Band id="body">')-8 	);	// band head
        	var strExtBody		= strExtFormat.substring( strExtFormat.indexOf('<Band id="body">')+17, 	strExtFormat.indexOf('</Format>')-8 		);	// band body

        	// org File Grid Format
        	this.grdFile.set_formatid(extFormatId);
        	var size = this.grdFile.getFormatColProperty(this.grdFile.getBindCellIndex('body', 'FILE_ICON'), "size");
        	this.grdFile.setFormatColProperty(this.grdFile.getBindCellIndex('body', 'FILE_ICON'), "size", size);
        	var size = this.grdFile.getFormatColProperty(this.grdFile.getBindCellIndex('body', 'FILE_NM'), "size");
        	this.grdFile.setFormatColProperty(this.grdFile.getBindCellIndex('body', 'FILE_NM'), "size", size);
        	var strGrdFormat	= this.orgGrdFileFormat;	//this.grdFile.getCurFormatString();

        	var strGrdColumns	= strGrdFormat.substring( strGrdFormat.indexOf('<Columns>')+10, 		strGrdFormat.indexOf('</Columns>') 			);	// Columns
        	var strGrdRows		= strGrdFormat.substring( strGrdFormat.indexOf('<Rows>')+7, 			strGrdFormat.indexOf('</Rows>') 			);	// Rows
        	var strGrdHead		= strGrdFormat.substring( strGrdFormat.indexOf('<Band id="head">')+17, 	strGrdFormat.indexOf('<Band id="body">')-8 	);	// band head
        	var strGrdBody		= strGrdFormat.substring( strGrdFormat.indexOf('<Band id="body">')+17, 	strGrdFormat.indexOf('</Format>')-8 		);	// band body

        	// 1. New Columns part setting
        	var strNewColumns 	= '';							// 확장 + 원본 Columns용 변수
        	var arrExtColumns	= strExtColumns.split('\n');	// 확장컬럼 Columns
        	var arrGrdColumns 	= strGrdColumns.split('\n');	// 원본컬럼 Columns

        	var fileNmColSize = this.grdFile.getFormatColSize(this.grdFile.getBindCellIndex('body', 'FILE_NM'));	// 제목 컬럼 크기
        	for(var i = 0; i < arrGrdColumns.length-1; i++)
        	{
        		if( i == insertIdx )
        		{	// 추가 행이면 ext grid의 columns를 추가
        			for(var j = 0; j < arrExtColumns.length-1; j++)
        				strNewColumns += arrExtColumns[j] + '\n';
        		}
        		strNewColumns += arrGrdColumns[i] + '\n';
        	}

        	// 2. New Rows part setting
        	// Rows는 유지
        	var strNewRows = strGrdRows;

        	// 3. New Head band setting
        	var strNewHead 	= '';						// 확장 + 원본 head band용 변수
        	var arrExtHead	= strExtHead.split('\n');	// 확장컬럼 head band
        	var arrGrdHead	= strGrdHead.split('\n');	// 원본컬럼 head band
        	var cnt = 0;
        	for(var i = 0; i < arrGrdHead.length-1; i++)
        	{
        		if( i == insertIdx )
        		{	// 추가 행이면 ext grid의 columns를 추가
        			for(var j = 0; j < arrExtHead.length-1; j++)
        			{
        				strNewHead += '<Cell col="' + cnt + '" ' + this.fnParseHeadBody(arrExtHead[j]) + '\n';
        				cnt++;
        				if( arrExtHead[j].indexOf('colspan="2"') >= 0 )	// head merge cell index 처리
        					cnt++;
        			}
        		}

        		strNewHead += '<Cell col="' + cnt + '" ' + this.fnParseHeadBody(arrGrdHead[i]) + '\n';
        		cnt++;

        		if( arrGrdHead[i].indexOf('colspan="2"') >= 0 )		// head merge cell index 처리
        			cnt++;
        	}

        	// 4. New Body band setting
        	var strNewBody 	= '';						// 확장 + 원본 body band용 변수
        	var arrExtBody	= strExtBody.split('\n');	// 확장컬럼 body band
        	var arrGrdBody	= strGrdBody.split('\n');	// 원본컬럼 body band
        	var cnt = 0;
        	for(var i = 0; i < arrGrdBody.length-1; i++)
        	{
        		if( i == insertIdx )
        		{	// 추가 행이면 ext grid의 columns를 추가
        			for(var j = 0; j < arrExtBody.length-1; j++)
        			{
        				strNewBody += '<Cell col="' + cnt + '" ' + this.fnParseHeadBody(arrExtBody[j]) + '\n';
        				cnt++;
        			}
        		}
        		strNewBody += '<Cell col="' + cnt + '" ' + this.fnParseHeadBody(arrGrdBody[i]) + '\n';
        		cnt++;
        	}

        	// 5. new forat setting
        	var strNewFormat = '';
        	strNewFormat += '<Format id="' + extFormatId + '">' + '\n';
        	strNewFormat += '<Columns>' + '\n';
        	strNewFormat += strNewColumns;
        	strNewFormat += '</Columns>' + '\n';
        	strNewFormat += '<Rows>' + '\n';
        	strNewFormat += strNewRows;
        	strNewFormat += '</Rows>' + '\n';
        	strNewFormat += '<Band id="head">' + '\n';
        	strNewFormat += strNewHead;
        	strNewFormat += '</Band>' + '\n';
        	strNewFormat += '<Band id="body">' + '\n';
        	strNewFormat += strNewBody;
        	strNewFormat += '</Band>' + '\n';
        	strNewFormat += '</Format>';

        	// 6. 적용
        	var fullFormat = '<Formats>\n' + strDefaultFormat + strNewFormat + '\n</Formats>';
        	//trace(fullFormat);
        	this.grdFile.set_formats(fullFormat);
        	this.grdFile.set_formatid(extFormatId);
        	this.grdFile.set_enable(true);
        	this.grdFile.setCellProperty('head', this.grdFile.getBindCellIndex('body', 'FILE_NM'), 'size', fileNmColSize);
        	this.grdFile.set_autofittype('col');
        }

        // head band, body band 문자열 파싱용 함수;
        this.fnParseHeadBody = function(str)
        {
        	if( Ex.isEmpty(str) )	return '';
        	return str.substring( str.indexOf('row="0"'), str.length );
        }

        // file size str parsing
        this.fnParseFileSize = function(filesize)
        {
        	var strRtn = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024;		nApprox > 1;		nApprox /= 1024, nMultiple++)
        	{
        		strRtn = nApprox.toFixed(2) + "" + aMultiples[nMultiple];
        	}
        	return strRtn;
        };

        // get file Icon string
        this.fnGetFileIcon = function(fileName)
        {
        	if( Ex.isEmpty(fileName) )
        	{
        		trace('illegal file name');
        		return;
        	}
        	var strIcon = "theme://SPP_IMAGE_SET/FOMM/";

        	fileName = fileName.toLowerCase();
        	var fileExt = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;		// 파일 확장자

        	var strExt = 'ico_file_ETC';
        	for(var name in this.iconInfo)
        	{
        		for(var i = 0; i < this.iconInfo[name].length; i++)
        		{
        			if( this.iconInfo[name][i] == fileExt )
        			{
        				strExt = name;
        				break;
        			}
        		}
        	}
        	return strIcon + strExt + '.png';
        };

        this.fnIsFileSizeExceed = function(size)
        {
        	if( Ex.isEmpty(size) ) return false;

        	if( !Ex.util.checkType("NUMBER", size) ) return false;

        	if( size > this.limitSize ) return true;

        	return false;
        }

        // 확장자 validation
        this.fnValidateExt = function(fileType)
        {
        	trace('Validating Extention :: ' + fileType);
        	var rtn = true;

        	if( Ex.isEmpty(fileType) )
        	{
        		trace('file extention empty');
        		return false;
        	}

        	fileType = fileType.toLowerCase();

        	// blacklist 포함된 확장자면 false
        	if( this.extBlackList.indexOf(fileType) >= 0 )	rtn = false;

        	//whitelist 미포함된 확장자면 false
        	if( this.extWhiteList.indexOf(fileType) < 0 )	rtn = false;

        	return rtn;
        }

        this.isUpdateForm = function()
        {
        	return Ex.util.isUpdated(this.dsFommFile);
        }

        this.fnSaveCheck = function(isReg)
        {
        	if(isReg)
        	{
        		if(!this.grdFile.checkValidate(true)) return false;
        	}
        	return true;
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btnAdd" :
        			this.FileDialog.open('File Upload', FileDialog.MULTILOAD);
        			break;

        		case "btnDelete" :
        			var rtn = true;
        			trace("this.fnDeleteCheck : " + this.fnDeleteCheck);
        			if(Ex.isFunction(this.fnDeleteCheck))
        			{
        				rtn = this.fnDeleteCheck(this.dsFommFile);
        			}

        			if(rtn)
        			{
        				this.fnDelete(this.dsFommFile);
        			}
        			break;

        		case "btnDownload" :
        			this.fnDownloadFile('ALL');
        			break;
        	}
        }

        this.dsFommFile_oncolumnchanged = function(obj,e)
        {
        	obj.setUpdateRow(e);
        };

        this.dsFommFile_onvaluechanged = function(obj,e)
        {
        	var rowCnt 		= obj.rowcount;
        	var limitSizeNm = this.fnParseFileSize(this.limitSize);
        	var limitCntNm 	= '';
        	if( rowCnt <= this.limitCnt )	limitCntNm = this.limitCnt;
        	else							limitCntNm = "<fc v='red'>" + this.limitCnt + "</fc>";

        	var str = "(파일수: {0}/{1} 용량제한: {2})";
        	str = Ex.core.msgMapping(str, [rowCnt, limitCntNm, limitSizeNm]);
        	this.stcFileDesc.set_text(str);
        };

        /***************************************
         * Grid Event
         ***************************************/
        this.grdFile_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        this.grdFile_oncelldblclick = function(obj,e)
        {
        	trace("e.cell : " + e.cell + " e.col : " + e.col + " FILE_NM CellIndex : " + obj.getBindCellIndex("body", "FILE_NM"));

        	if(obj.getBindCellIndex("body", "FILE_NM") == e.cell)
        	{
        		if( e.col == 0 || this.fileDownYn == 'N')	return;
        		this.fnDownloadFile(e.row);
        	}
        };

        this.grdFile_ondragenter = function(obj,e)
        {
        	if(e.datatype == 'file' && this.fileUpYn == 'Y')
        	{
        		obj.set_opacity(0.4);
        	}
        };

        this.grdFile_ondragleave = function(obj,e)
        {
        	obj.set_opacity(1);
        };

        this.grdFile_ondrop = function(obj, e)
        {
        	obj.set_opacity(1);
        	if(e.datatype == "file" && this.fileUpYn == 'Y')
        	{
        		var fileAllSize = 0;
        		for(var i=0; i<this.dsFommFile.rowcount; i++)
        		{
        			if(this.dsFommFile.getColumn(i, "ROWFLAG") != "D")
        			{
        				fileAllSize += nexacro.toNumber(this.dsFommFile.getColumn(i, "FILE_SIZE"), 0);
        			}
        		}

        		var filelists = e.filelist;

        		//trace("filelists.length ==============> " + filelists.length);
        		for(var i=0; i<filelists.length; i++)
        		{
        			var file = filelists[i];
        			fileAllSize += nexacro.toNumber(file._handle.size, 0);
        			//trace("i=" + i + " file.id : " + file.id + " file.filename : " + file.filename + " file._handle.size : " + file._handle.size);
        		}

        		if(fileAllSize > (1024 * 1024 * 200))
        		{
        			var param = {
        				  id	: "fileSizeExceedAlertI"				//fnMsgAfter에서 식별자로 사용되는 ID
        				, msg	: "전체 업로드 용량은 200M까지만 가능합니다."	//메시지 내용
        				, arrparam : [""]								//메시지의 변수에 들어갈 실제값
        				, msgtype : "I"									//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        			};
        			Ex.core.alert(this, param);
        			return false;
        		}
        		else
        		{
        			if(e.filelist)
        			{
        				this.fnAddFileList(e.filelist);
        			}
        		}
        	}
        };

        this.grdFile_onlbuttonup = function(obj,e)
        {
        	//trace("e.cell : " + e.cell + " VIEWER index : " + obj.getBindCellIndex("body", "VIEWER"));
        	//trace("e.cell : " + e.cell + " displaytype : " + obj.getCellPropertyValue(e.row, e.cell, "displaytype"));

        	if(obj.getBindCellIndex("body", "ROWFLAG") == e.cell) return;

        	//if(obj.getCellPropertyValue(e.row, e.cell, "text") == "뷰어")
        	if(obj.getCellPropertyValue(e.row, e.cell, "displaytype") == "imagecontrol")
        	{
        		return;	// 미리보기 기능 제거
        		var svcUrl = nexacro.replaceAll(nexacro.getApplication().xadl, "spp/SppApp.xadl.js", "");

        		var fullFilePath	= svcUrl + this.dsFommFile.getColumn(e.row, "FILE_PATH") + this.dsFommFile.getColumn(e.row, "FILE_SAVE_NM");
        		fullFilePath		= nexacro.replaceAll(fullFilePath, "/nitsm/spp/", "");

        		//trace("svcUrl : " + svcUrl + " fullFilePath:[" + fullFilePath + "]");

        		var xhr = new XMLHttpRequest();
        		xhr.open('HEAD', fullFilePath, false);
        		xhr.send();

        		if (xhr.status == "404")
        		{
        			var param = {id : "errorFileNotExist", msg : "파일이 존재하지 않습니다."};
        			Ex.core.error(this, param);
        			return;
        		}
        		else
        		{
        			var convertType = "1"; //0: HTML 형식으로 변환합니다. 1: IMAGE 형식으로 변환합니다.
        			var fileType = "URL";
        			var fid = 'NITSM_' + Ex.util.today() + '_' + Ex.util.todayTime() + new Date().getMilliseconds().toString().substring(0, 2) ;
        			//var filePath = "https://nitsm.miraeassetsecurities.com/spp/_resource_/_theme_/spp/images/img_WF_Nexacro.png";
        			var filePath = fullFilePath;
        			var vurl;

        			if(nexacro.getApplication().gvHost.indexOf("nitsm.miraeassetsecurities.com") > -1)			// 운영
        			{
        				vurl = 'https://docvw.miraeassetsecurities.com:8443/SynapDocViewServer/';
        			}
        			else if(nexacro.getApplication().gvHost.indexOf("nitsmdev.miraeassetsecurities.com") > -1)	// 개발
        			{
        				vurl = 'https://docvwdev.miraeassetsecurities.com:8443/SynapDocViewServer/';
        			}
        			else
        			{
        				vurl = 'https://docvwdev.miraeassetsecurities.com:8443/SynapDocViewServer/';
        			}

        			var params = {
        				  title			: this.dsFommFile.getColumn(e.row, "FILE_NM")
        				, filePath		: filePath
        				, fileType		: fileType
        				, fid			: fid
        				, convertType	: convertType
        				, urlEncoding	: "UTF-8"
        				//, pageEnd		: 1
        			};

        			$.ajax({
        				type		: "POST",
        				url			: vurl + "jobJson",
        				data		: params,
        				contentType	: "application/x-www-form-urlencoded",
        				dataType	: "json",
        				cache		: false,
        				async		: false,
        				xhrFields	: {withCredentials: true}, // 올바른 옵션 이름
        				success		: function(data)
        				{
        					if(data != null)
        					{
        						var viewUrl = vurl + data.viewUrlPath;
        						window.open(viewUrl, "_blank", "fullscreen=yes");	//,toolbar=no,status=no,menubar=no,
        					}
        				},
        				error		: function(request, status, error)
        				{
        					//console.log("error:" + error);
        					//console.log("status:[" + error.status + "] statusText:[" + error.statusText + "]");
        					var rtnVal = JSON.stringify(request.responseJSON);
        					console.log(rtnVal);
        				}
        			});
        		}
        	}
        };

        /***************************************
         * FileDialog Event
         ***************************************/
        this.FileDialog_onclose = function(obj, e)
        {
        	//trace("this.FileDialog_onclose()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ e.virtualfiles.length " + e.virtualfiles.length);
        	var fileAllSize = 0;
        	for(var i=0; i<this.dsFommFile.rowcount; i++)
        	{
        		if(this.dsFommFile.getColumn(i, "ROWFLAG") != "D")
        		{
        			fileAllSize += nexacro.toNumber(this.dsFommFile.getColumn(i, "FILE_SIZE"), 0);
        		}
        	}

        	var filelists = e.virtualfiles;
        	for(var i=0; i<filelists.length; i++)
        	{
        		var file = filelists[i];
        		fileAllSize += nexacro.toNumber(file._handle.size, 0);
        		//trace("i=" + i + " file.id : " + file.id + " file.filename : " + file.filename + " file._handle.size : " + file._handle.size);
        	}

        	if(fileAllSize > (1024 * 1024 * 200))
        	{
        		var param = {
        			  id	: "fileSizeExceedAlertI"				//fnMsgAfter에서 식별자로 사용되는 ID
        			, msg	: "전체 업로드 용량은 200M까지만 가능합니다."	//메시지 내용
        			, arrparam : [""]								//메시지의 변수에 들어갈 실제값
        			, msgtype : "I"									//메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        		};
        		Ex.core.alert(this, param);
        		return false;
        	}
        	else
        	{
        		this.fnAddFileList(e.virtualfiles);
        	}
        };

        /***************************************
         * VirtualFile Event
         ***************************************/
        this.VirtualFile_onerror = function(obj, e)
        {
        	trace("this.VirtualFile_onerror() statuscode :: " + e.statuscode + " errortype :: " + e.errortype + " errormsg :: "+ e .errormsg);
        };

        this.VirtualFile_onsuccess = function(obj, e)
        {
        	trace("this.VirtualFile_onsuccess() e.reason :===================> " + e.reason);
        	if (e.reason == 9)	// e.reason == 9 :: getFileSize() called
        	{
        		var fileName = obj.filename||'';
        		var ext = fileName.substring(obj.filename.lastIndexOf('.')+1, fileName.length);

        		// 확장자 validation
        		if(!this.fnValidateExt(ext)) {
        			var param = {id : "extValidAlert"
        						,msg : "11026"
        						,arrparam : [ext]
        						,msgtype : "I"};
        			Ex.core.alert(this, param);
        			return;
        		}

        		// 파일명 중복 validation
        		if(this.fileNmDupYn == "Y")
        		{
        			if( this.dsFommFile.findRow("FILE_NM", fileName) >= 0 ) {
        				var param = {id : "fileNameDuplAlert"
        							,msg : "10005"
        							,arrparam : ['파일']
        							,msgtype : "I"};
        				Ex.core.alert(this, param);
        				return;
        			}
        		}

        		// fileTransfer에 파일 추가
        		//var fileIdx = this.FileUpTransfer.addFile(obj.filename + (this.FileUpTransfer.filelist.length+1), obj);
        		//var addIdx = this.FileUpTransfer.filelist.length + 1;
        		//var fileIdx = this.FileUpTransfer.addFile(obj.filename + "_" + addIdx, obj);
        		var createKey = Ex.util.getUniqueId();
        		var fileIdx = this.FileUpTransfer.addFile(createKey, obj);

        		//trace("fileIdx : " + fileIdx + " this.FileUpTransfer.filelist.length : " + this.FileUpTransfer.filelist.length);

        		if(fileIdx > -1)
        		{
        			// file info Dataset에 파일정보 추가
        			var rowPos = this.dsFommFile.setAddRow();
        			this.dsFommFile.setColumn(rowPos, "CREATE_KEY",		createKey);
        			this.dsFommFile.setColumn(rowPos, "FILE_ICON",		this.fnGetFileIcon(fileName));
        			this.dsFommFile.setColumn(rowPos, "FILE_NM",		fileName);
        			this.dsFommFile.setColumn(rowPos, "FILE_SIZE", 		e.filesize);
        			this.dsFommFile.setColumn(rowPos, "FILE_SIZE_NM", 	this.fnParseFileSize(e.filesize));
        			this.dsFommFile.setColumn(rowPos, "FILE_PATH", 		obj.fullpath);

        			this.dsFommFile.setColumn(rowPos, "EDIT_YN", 		"Y");
        			this.dsFommFile.setColumn(rowPos, "KEY_TBL", 		this.tablename);
        			this.dsFommFile.setColumn(rowPos, "FLDR_NM",		this.folderName);
        			//20241203 파일관리화면에 필요한 변수 추가
        			trace("this.extCol1 >>>"  + this.extCol1);
        			if(!Ex.isEmpty(this.extCol1))
        			{
        				this.dsFommFile.setColumn(rowPos, "EXT_COL_1", 		this.extCol1);
        			}
        			/*
        			trace("this.tablename : " + this.tablename);
        			trace("this.folderName : " + this.folderName);
        			trace("PK1 : " + this.dsCond.getColumn(0, "PK1"));
        			trace("PK2 : " + this.dsCond.getColumn(0, "PK2"));
        			trace("PK3 : " + this.dsCond.getColumn(0, "PK3"));
        			*/

        			this.dsFommFile.setColumn(rowPos, "PK1",			this.dsCond.getColumn(0, "PK1"));
        			this.dsFommFile.setColumn(rowPos, "PK2",			this.dsCond.getColumn(0, "PK2"));
        			this.dsFommFile.setColumn(rowPos, "PK3",			this.dsCond.getColumn(0, "PK3"));
        			this.dsFommFile.setColumn(rowPos, "FILE_SAVE_NM",	'');
        			this.dsFommFile.setColumn(rowPos, "FRDT",		Ex.util.todayTime());
        			this.dsFommFile.setColumn(rowPos, "FRNM",		Ex.util.getSession('gvUserNm'));
        		}
        		else
        		{
        			var param = {id : "ERROR", msg : "파일 추가에 실패하였습니다."};
        			Ex.core.error(this, param);
        			return;
        		}
        	}
        	//trace(this.dsFommFile.saveXML());
        };

        /***************************************
         * FileUpTransfer Event
         ***************************************/
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	trace("this.FileUpTransfer_onsuccess() e.code:[" + e.code + "] e.message:[" + e.message + "]");
        	var objDs = e.datasets[0];

        	if( objDs != null)
        	{
        		trace(objDs.saveXML());
        		for(var i = 0; i < objDs.rowcount; i++)
        		{
         			var FILE_PATH		= objDs.getColumn(i, 'FILE_PATH');
         			var FILE_NM 		= objDs.getColumn(i, 'FILE_NM');
         			var FILE_SAVE_NM 	= objDs.getColumn(i, 'FILE_SAVE_NM');
        			var createKey		= objDs.getColumn(i, 'CREATE_KEY');
        			var rowPos = this.dsFommFile.findRowExpr('FILE_NM=="' + FILE_NM + '" && Ex.isEmpty(FILE_SAVE_NM)');
        			trace("rowPos=" + rowPos);
        			trace("FILE_SAVE_NM=[" + this.dsFommFile.getColumn(0, "FILE_SAVE_NM") + "] isEmpty:[" + Ex.isEmpty(this.dsFommFile.getColumn(0, "FILE_SAVE_NM")) + "]");
        			trace("i=" + i + " FILE_PATH : " + FILE_PATH + " FILE_NM : " + FILE_NM + " FILE_SAVE_NM : " + FILE_SAVE_NM + " rowPos : " + rowPos);
        			trace("FILE_NM : " + FILE_NM + "\n" +
        				  "FILE_NM : " + this.dsFommFile.getColumn(0, "FILE_NM")
        			);

        			if(rowPos >= 0)
        			{
        				this.dsFommFile.setColumn(rowPos, "FILE_PATH", FILE_PATH);
        				this.dsFommFile.setColumn(rowPos, "FILE_SAVE_NM", FILE_SAVE_NM);
        			}
        		}
        	}
        	//trace('FileUpTransfer_onsuccess :: ' + e.code);
        	this.FileUpTransfer.clearFileList();

        	this.fnCommUploadCallback(e.code, e.message);
        };

        this.FileUpTransfer_onerror = function(obj,e)
        {
        	trace('FileUpTransfer_onerror() e.statuscode:[' + e.statuscode + ']  e.errormsg:[' + e.errormsg + "]");

        	var errorCode	= -1;
        	var errorMsg	= "";
        	if( !Ex.isEmpty(e.errormsg) )
        	{
        		if(e.errormsg.indexOf("|") > -1)
        		{
        			errorCode = e.errormsg.split("|")[0];

        			for(var i=0; i<e.errormsg.split("|").length; i++)
        			{
        				if(i > 0)
        				{
        					errorMsg += (i>1 ? "|" : "") + e.errormsg.split("|")[i]	//|| e.errormsg;
        				}
        			}

        			if( Ex.isEmpty(errorMsg) )	errorMsg = e.errormsg;
        		}
        		else
        		{
        			errorMsg = e.errormsg;
        		}
        	}
        	trace('FileUpTransfer_onerror() errorCode:[' + errorCode + ']  errormsg:[' + errorMsg + "]");
        	this.fnCommUploadCallback(errorCode, errorMsg);
        };

        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var percent = e.loaded / e.total;
        // 	trace(e.loaded);
        // 	trace(e.total);
        // 	trace(percent);
        // 	trace(e.fromobject);
        // 	trace(e.fromreferenceobject);
        };

        /***************************************
         * FileDownTransfer Event
         ***************************************/
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	//trace("this.FileDownTransfer_onerror() e.statuscode : " + e.statuscode + " e.eventid : " + e.eventid + " e.errormsg : " + e.errormsg);
        	if(e.statuscode == -99998)	// session out
        	{
        		var alertbyMsgCallback = function(mid, varValue)
        		{
        			if(mid == "sppSessionOut") document.location.href = "/";
        		};

        		var param = {id : "sppSessionOut", msg : "Session이 종료 되었습니다.", callbackfunc: alertbyMsgCallback}	//'10006', arrparam:[msgParam]};
        		Ex.core.error(this, param);
        	}
        };

        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	trace("this.FileDownTransfer_onsuccess() ");	//e.targetfullpath : " + e.targetfullpath
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.stcGridBg.addEventHandler("onclick",this.stcGridBg_onclick,this);
            this.grdFile.addEventHandler("oncelldblclick",this.grdFile_oncelldblclick,this);
            this.grdFile.addEventHandler("ondrop",this.grdFile_ondrop,this);
            this.grdFile.addEventHandler("ondragenter",this.grdFile_ondragenter,this);
            this.grdFile.addEventHandler("ondragleave",this.grdFile_ondragleave,this);
            this.grdFile.addEventHandler("onlbuttonup",this.grdFile_onlbuttonup,this);
            this.grdFile.addEventHandler("oncellclick",this.grdFile_oncellclick,this);
            this.divBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnDownload.addEventHandler("onclick",this.fnCommOnclick,this);
            this.dsFommFile.addEventHandler("oncolumnchanged",this.dsFommFile_oncolumnchanged,this);
            this.dsFommFile.addEventHandler("onvaluechanged",this.dsFommFile_onvaluechanged,this);
            this.VirtualFile.addEventHandler("onerror",this.VirtualFile_onerror,this);
            this.VirtualFile.addEventHandler("onsuccess",this.VirtualFile_onsuccess,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("comFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
