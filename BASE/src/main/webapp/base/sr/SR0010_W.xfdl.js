(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0010_W");
            this.set_titletext("SR요청");
            this.set_scrollbarsize("15");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,825);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFormInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMP_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_LVL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_GRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TMPLAT_VER\" type=\"STRING\" size=\"256\"/><Column id=\"SR_INFO_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_WF_FUNC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_SAVE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_POSS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_SCRN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_APPROVAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATASET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUR_SCRN_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectService", this);
            obj.set_saveinvaliddate("exclude");
            obj._setContents("<ColumnInfo><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CALLBACK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_INDS\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_OUTDS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveService", this);
            obj.set_saveinvaliddate("exclude");
            obj._setContents("<ColumnInfo><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CALLBACK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_INDS\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_OUTDS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WF_PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"RTRN_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"WF_FUNC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WF_FUNC_CD\">WF_FUNC_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfProc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfReqTmplatMt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveCheck", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcH00","0","165",null,"20","22",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1-h20");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","20","stcH00:0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1 soid black");
            obj.set_text("");
            obj.set_formscrollbarsize("20");
            obj.set_formscrollbartype("auto fixed");
            this.addChild(obj.name, obj);

            obj = new Div("divFormTop","0","0",null,"235","20",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("divFormTop");
            obj.set_async("false");
            obj.set_border("0px solid red");
            obj.set_formscrollbartype("auto");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("stcW01","50%","0","5",null,null,"0",null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("w5");
            obj.set_background("#e5dbfa");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("stcH01","0","divFormTop:0",null,"20","0",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("1-h20");
            obj.set_visible("false");
            obj.set_background("#e5dbfa");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divFormFile","0","divFormTop:20",null,"208","stcW01:5",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("divFormFile");
            obj.set_async("false");
            obj.set_border("0px solid blue");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divFormAppv","stcW01:0","divFormTop:20",null,"208","20",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("divFormAppv");
            obj.set_async("false");
            obj.set_border("0px solid blue");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divBottomButton","20","divForm:0",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("white");
            obj.set_isChgLang("false");
            obj.set_isButtonGroup("true");
            obj.set_border("1px solid #d3d3d3, 1px none #d3d3d3, 1px none #d3d3d3");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,null,"80","32","170","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","255","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnSaveTemp",null,null,"90","32","340","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("1");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnScrnRtn",null,null,"80","32","435","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("3");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnRev",null,null,"80","32","520","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("2");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"80","32","0","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_primary_close");
            obj.set_isChgLang("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"80","32","85","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("6");
            obj.set_text("회수");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnRtn",null,null,"80","32","605","14",null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("7");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Button("btnApv",null,"13","80","32","690",null,null,null,null,null,this.divBottomButton.form);
            obj.set_taborder("8");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.divBottomButton.addChild(obj.name, obj);

            obj = new Div("divWorkFlow","20","0",null,"165","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("sr::SR0010_D00.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrintDsWfProc","0","0","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("dsWfProc DS 출력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","0","29","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("editYn");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnComment","20","779","105","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("협업글 작성");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnQuit","130.00","779","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("종결");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divFormTop.form
            obj = new Layout("default","",0,0,this.divForm.form.divFormTop.form,function(p){});
            this.divForm.form.divFormTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divFormFile.form
            obj = new Layout("default","",0,0,this.divForm.form.divFormFile.form,function(p){});
            this.divForm.form.divFormFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divFormAppv
            obj = new Layout("default","",0,0,this.divForm.form.divFormAppv.form,function(p){});
            this.divForm.form.divFormAppv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottomButton.form
            obj = new Layout("default","",0,0,this.divBottomButton.form,function(p){});
            this.divBottomButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkFlow
            obj = new Layout("default","",0,0,this.divWorkFlow.form,function(p){});
            this.divWorkFlow.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1820,825,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sr::SR0010_D00.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SR0010_W.xfdl","lib::lib_WorkFlow.xjs");
        this.addIncludeScript("SR0010_W.xfdl","lib::lib_SrComm.xjs");
        this.registerScript("SR0010_W.xfdl", function() {
        /***********************************************************************************
        * 화면 ID	︰ SR0010_W
        * 화면(명)	︰ 요청서 SR요청 템플릿 화면
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 수정이력	︰
        *------------------------------------------------------------------
        * 수정일           작성자     이력
        *------------------------------------------------------------------
        * 2023.06.12    WEMB        최초작성
        *------------------------------------------------------------------
        **********************************************************************************
        SR0010_W에서 단계별 Div Form 화면에 호출이 되는 함수 목록
        [필수정의 함수]
        1. this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)   - 해당 Form 화면에 정의된 Service 호출 후 SR0010_W에서 해당 함수를 호출함.
        2. this.isUpdateForm = function()                               - 저장 시점 해당 Form의 데이터 변경이 발생하는지 체크를 하기 위해 호출
        3. this.fnSaveCheck = function(isReg)                           - 저장 시점 저장에 대한 Validation을 체크하기 위해 호출(인자값은 임시저장/등록에 대한 플래그 Boolean)
        4. this.fnRtnCheck = function()                                 - 반려 버튼 처리시 반려 버튼에 해당하는 Validation을 체크하기 위해 호출

        [선택적 정의 함수]
        1. this.formUploadFiles = function()                            - 해당 Form에 정의된 파일업로드를 진행하기 위해 호출함(첨부파일이 없는 경우는 정의하지 않아도 무관)
           this.formUploadFiles 함수를 통해 upload를 실행하면 Form 내의 Upload 처리에 대한
           예약된 callback 함수
           this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg) 가 호출이 되고
           Form 내의 모든 업로드가 끝나면 부모 Form(SR0010_W)로 업로드 처리 완료 여부를 전달하도록
           SR0010_W Form에 정의된 fnCallUploadCompleteDiv 함수를 호출해 준다.
           ex) this.reqInfo.PARENT_FORM.fnCallUploadCompleteDiv(this.reqInfo.SCRN_WF_PROC_CD);

        2. this.formUploadTempKeyChange = function(pk1, pk2, pk3)       - SR0010_W Form 저장이 완료되고 신규 Key값이 생성되면 임시키로 업로드 된 단게 Form 화면의 첨부파일 키를 신규 Key로 교체하기 위해 호출

        ※참고사항
        - 단계별 Form 화면을 동적 생성하면서 공통 라이브러리 lib_SrComm.xjs에 정의된
          fnSrCommSetDivFormReqInfoData 함수를 통해
          각각의 단계 Form 화면에 SR0010_W에 정의된 dsFormInfo Dataset에 존재하는 컬럼의 값들이 추출가능
          단계별 Div Form내에서 dsFormInfo의 컬럼 값을 추출하는 예시

          ex) this.reqInfo.REQ_ID → SR0010_W에 정의된 [Dataset] dsFormInfo의 [REQ_ID] 컬럼값을 추출

          그 외 추출 가능 정보
          this.reqInfo.SCRN_WF_PROC_CD  : 단계 Form 화면에 해당하는 WORKFLOW상 정의된 단계 코드값
          this.reqInfo.PARENT_FORM      : SR0010_W Form 객체
          this.dsWfProc                 : WORKFLOW의 단계 리스트 Dataset 객체
        */
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/
        this.executeIncludeScript("lib::lib_WorkFlow.xjs"); /*include "lib::lib_WorkFlow.xjs"*/;
        this.executeIncludeScript("lib::lib_SrComm.xjs"); /*include "lib::lib_SrComm.xjs"*/;
        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        var formObj;
        this.topForm = this.divForm.form.divFormTop.form;       //기본정보 Form 경로
        this.fileForm = this.divForm.form.divFormFile.form;     //첨부파일 Form 경로
        this.appvForm = this.divForm.form.divFormAppv.form;     //결재선 Form 경로

        //this.reqFormArr = [];     //요청서 영역 폼 List를 저장할 배열
        this.gubunArr = [];         //요청서 내부 각각의 폼영역을 관리
        this.bfBottomLastComp;      //bottom이 붙기 전 마지막에 그려진 컴포넌트 Obj를 가지고 있도록 함
        this.baseWfProcCd;          //WF프로세스 관리의 요청서 진행단계 중 첫단계(등록단계)에 해당하는 코드값을 셋팅
        this.uploadFormDiv = [];    //저장시점에 업로드 처리가 존재하는 Div 영역의 ID값을 배열로 담아두고 DIV별 업로드가 완료되면 해당 변수 배열에서 DIV를 제거한다. 모든 DIV ID가 제거되면 그 때 저장 로직을 수행

        this.isPostSelectComplete = false;
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
            formObj = obj;
            this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
            /* 부모창에서 팝업 호출시 pDsFormAdd_○○○ 형태의 변수를 dsFormInfo 데이터셋에 ○○○에 해당하는 컬럼이 존재하지 않으면 컬럼을 추가해 주고 넘어온 값을 삽입한다.
             ex) pDsFormAdd_USER_NM → dsFormInfo에 [USER_NM] 컬럼이 추가된다. */
            /*
            for(var prop in this.getOwnerFrame())
            {
                if(prop.indexOf("pDsFormAdd_") > -1)
                {
                    var colNm = nexacro.replaceAll(prop, "pDsFormAdd_", "");
                    if( Ex.isEmpty(this.dsFormInfo.colinfos[colNm]) )
                    {
                        //trace("prop : " + prop + " Value:[" + this.getOwnerFrame()[prop] + "] 컬럼:[" + colNm + "]");
                        this.dsFormInfo.addColumn(colNm, "STRING");
                        this.dsFormInfo.setColumn(0, colNm, this.getOwnerFrame()[prop]);
                    }
                }
            }
            */
            if( Ex.isEmpty(this.getOwnerFrame().WF_PROC_CD) )
            {
                this.getOwnerFrame().WF_PROC_CD = "WF_PROC_1000";
            }

            this.dsFormInfo.setColumn(0, "WF_PROC_CD", this.getOwnerFrame().WF_PROC_CD);

            if( Ex.isEmpty(this.getOwnerFrame().isSave) )   this.getOwnerFrame().isSave = false;
            this.dsFormInfo.setColumn(0, "REQ_ID", this.getOwnerFrame().pREQ_ID);
            this.dsFormInfo.setColumn(0, "APPR_LVL_SEQ", this.getOwnerFrame().pApprLvlSeq); //결재차수
            this.dsFormInfo.setColumn(0, "APPR_GRP_SEQ", this.getOwnerFrame().pApprGrpSeq); //결재그룹번호
            this.dsFormInfo.setColumn(0, "SEQ", this.getOwnerFrame().pSeq); //결재SEQ
            this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", this.getOwnerFrame().pREQ_TMPLAT_ID);
            this.dsFormInfo.setColumn(0, "REQ_TMPLAT_VER", this.getOwnerFrame().pREQ_TMPLAT_VER);

            trace("[SR0010_W] pApprLvlSeq : [" + this.getOwnerFrame().pApprLvlSeq + "] pApprGrpSeq:[" + this.getOwnerFrame().pApprGrpSeq + "] pSeq:[" + this.getOwnerFrame().pSeq + "]");
            this.fnCompInit();
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        //임시저장 이거나 등록 버튼 처리인 경우
        this.fnSave = function(isTemp)
        {
            var isUpd = false;

            if(!isTemp) //등록인 경우
            {
                if(this.divForm.form.divFormTop.form.dsSrBaseInfo.getColumn(0, "REQ_STAT_CD") == "RQST00" ||
                   this.divForm.form.divFormTop.form.dsSrBaseInfo.getColumn(0, "REQ_STAT_CD") == "RQST91")
                {
                    isUpd = true;
                }
            }

            //trace("isUpd : " + isUpd);

            var chgCnt = 0;
            for(var i=0; i<this.gubunArr.length; i++)
            {
                //trace("SR0010_W this.fnSave() i=" + i + " divNm : " + this.gubunArr[i][0] + " isUpdateForm() : " + this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm());
                if(this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm())  chgCnt++;
            }

            if(chgCnt == 0)
            {
                if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
                {
                    if(this.divForm.form["divFormFile"].form.isUpdateForm()) chgCnt++;
                }
            }

            if(!isUpd)
            {
                if(chgCnt == 0) return false;
            }

            if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
            {
                var rtn = this.divForm.form["divFormFile"].form.fnSaveCheck(!isTemp);
                if(!rtn) return false;
            }

            for(var i=0; i<this.gubunArr.length; i++)
            {
                if( !Ex.isEmpty(this.divForm.form[this.gubunArr[i][0]].url) )
                {
                    this.divForm.form[this.gubunArr[i][0]].form.reqInfo["callFunc"] = this.fnSave;
                    this.divForm.form[this.gubunArr[i][0]].form.reqInfo["argu"] = isTemp;

                    var rtn = this.divForm.form[this.gubunArr[i][0]].form.fnSaveCheck(!isTemp);
                    //trace("SR0010_W this.fnSave() btnSave i= " + i + " this.gubunArr : " + this.gubunArr[i][0] + " this.gubunArr[i][0].form.fnSaveCheck rtn::: " + rtn);
                    if(!rtn) return false;
                }
            }

            var confGubun = "";
            var msg = "";

            if(isTemp)
            {
                confGubun = "pConfirmSaveTempI";
                var curWfProcCd = this.dsFormInfo.getColumn(0, "WF_PROC_CD");   //실제 저장된 진행 단계
                if(curWfProcCd == this.baseWfProcCd)    msg = "임시저장 하시겠습니까?";
                else                                    msg = "저장 하시겠습니까?";
            }
            else
            {
                confGubun = "pConfirmSaveI";
                msg = "등록 하시겠습니까?";
            }
            var param = {id : confGubun, msg : msg};
            Ex.core.confirm(this, param);
        };

        //접수 처리
        this.fnRev = function()
        {
            var chgCnt = 0;
            for(var i=0; i<this.gubunArr.length; i++)
            {
                //trace("[SR0010_W]-this.fnRev() i=" + i + " divNm : " + this.gubunArr[i][0] + " isUpdateForm() : " + this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm());

                var curWfProcCd = this.dsFormInfo.getColumn(0, "WF_PROC_CD");   //실제 저장된 진행 단계

                //if(curWfProcCd == this.divForm.form[this.gubunArr[i][0]].form.reqInfo.SCRN_WF_PROC_CD)
                //{
                    this.divForm.form[this.gubunArr[i][0]].form.reqInfo["callFunc"] = this.fnRev;
                    this.divForm.form[this.gubunArr[i][0]].form.reqInfo["argu"] = null;

                    var isUpdForm = this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm();
                    //trace("[SR0010_W]-this.fnRev() this.fnRev() curWfProcCd ::: " + curWfProcCd + " isUpdForm : " + isUpdForm);

                    if(isUpdForm)
                    {
                        chgCnt++;
                        break;
                    }
                //}
            }

            //trace("[SR0010_W]-this.fnRev() chgCnt : " + chgCnt);

            if(chgCnt == 0)
            {
                if(this.getOwnerFrame().pATTACH_USE_YN == "Y")
                {
                    if(this.divForm.form["divFormFile"].form.isUpdateForm()) chgCnt++;
                }
            }

            //if(chgCnt == 0) return false;

            for(var i=0; i<this.gubunArr.length; i++)
            {
                //var curWfProcCd = this.dsFormInfo.getColumn(0, "WF_PROC_CD"); //실제 저장된 진행 단계

                //if(curWfProcCd == this.divForm.form[this.gubunArr[i][0]].form.reqInfo.SCRN_WF_PROC_CD)
                //{
                    if( !Ex.isEmpty(this.divForm.form[this.gubunArr[i][0]].url) )
                    {
                        var rtn = this.divForm.form[this.gubunArr[i][0]].form.fnSaveCheck(true);
                        //trace("[SR0010_W]-this.fnRev() btnSave i= " + i + " this.gubunArr : " + this.gubunArr[i][0] + " this.gubunArr[i][0].form.fnSaveCheck rtn::: " + rtn);
                        if(!rtn) return false;
                    }
                //}
            }

            var param = {
                id : "pConfirmRevI",
                msg : "접수 하시겠습니까?"
            };
            Ex.core.confirm(this, param);
        };

        //반려 처리
        this.fnScrnRtn = function()
        {
            for(var i=0; i<this.gubunArr.length; i++)
            {
                var curWfProcCd = this.dsFormInfo.getColumn(0, "WF_PROC_CD");   //실제 저장된 진행 단계

                if(curWfProcCd == this.divForm.form[this.gubunArr[i][0]].form.reqInfo.SCRN_WF_PROC_CD)
                {
                    if( !Ex.isEmpty(this.divForm.form[this.gubunArr[i][0]].url) && this.gubunArr[i][0] != "divAppv" )
                    {
                        var isFunc = Ex.isFunction(this.divForm.form[this.gubunArr[i][0]].form.fnRtnCheck);

                        //trace("isFunc : " + isFunc);

                        if(isFunc)
                        {
                            this.divForm.form[this.gubunArr[i][0]].form.reqInfo["callFunc"] = this.fnScrnRtn;
                            var rtn = this.divForm.form[this.gubunArr[i][0]].form.fnRtnCheck();
                            if(!rtn) return false;
                            //trace("SR0010_W this.fnRtn() btnRtn i= " + i + " this.gubunArr : " + this.gubunArr[i][0] + " this.gubunArr[i][0].form.fnRtnCheck rtn::: " + rtn);
                        }
                    }
                }
            }

            var param = {
                id : "pConfirmScrnRtrnI",
                msg : "반려 하시겠습니까?"
            };
            Ex.core.confirm(this, param);
        }

        //회수
        this.fnCancel = function()
        {
            var param = {
                  id : "pConfirmCancelI"
                , msg : "10008"
                , arrparam : [Ex.core.word("회수")]
                , msgtype : "I"
            };
            Ex.core.confirm(this, param);
        }

        // this.fnQuit = function()
        // {
        //     var param = {
        //           id : "pConfirmQuitI"
        //         , msg : "10008"
        //         , arrparam : [Ex.core.word("종결")]
        //         , msgtype : "I"
        //     };
        //     Ex.core.confirm(this, param);
        // }


        //삭제
        this.fnDelete = function()
        {
            var param = {
                  id : "pConfirmDeleteI"
                , msg : "10008"
                , arrparam : [Ex.core.word("삭제")]
                , msgtype : "I"
            };
            Ex.core.confirm(this, param);
        }

        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
            trace("[SR0010_W this.fnCallback()] sSvcId:[" + sSvcId + "] nErrorCode:[" + nErrorCode + "]");

            // 에러메세지 처리
            if (nErrorCode < 0)
            {
                var pId = "pERROR";

                if(nErrorCode == -2 && sSvcId == "cancel")  pId += sSvcId;

                var param = {id : pId, msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
                Ex.core.error(this, param);
                return;
            }

            // 각 Transaction별 CallBack 처리
            switch(sSvcId)
            {
                case "selectWfReqTmplatHt" :
                    this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", this.dsWfReqTmplatMt.getColumn(0, "REQ_TMPLAT_ID"));
                    this.dsFormInfo.setColumn(0, "REQ_TMPLAT_VER", this.dsWfReqTmplatMt.getColumn(0, "REQ_TMPLAT_VER"));
                    this.dsFormInfo.setColumn(0, "SR_INFO_URL", this.dsWfReqTmplatMt.getColumn(0, "SR_INFO_URL"));
                    this.dsFormInfo.setColumn(0, "ATTACH_USE_YN", this.dsWfReqTmplatMt.getColumn(0, "ATTACH_USE_YN"));
                    this.divWorkFlow.form.dsCond.setColumn(0, "REQ_ID",         this.dsFormInfo.getColumn(0, "REQ_ID"));
                    this.divWorkFlow.form.dsCond.setColumn(0, "REQ_TMPLAT_ID",  this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID"));
                    this.divWorkFlow.form.dsCond.setColumn(0, "REQ_TMPLAT_VER", this.dsFormInfo.getColumn(0, "REQ_TMPLAT_VER"));

                    this.divWorkFlow.form.fnSearchWfFlow();

                    this.setBaseReqForm();
                    break;

                case "wfInfoCompleted" :    //WF프로세스 상세 조회
                    this.dsWfProc.loadXML(this.wffnGetOptDsByWfProcCd().saveXML());
                    trace("this.dsWfProc:\n" + this.dsWfProc.saveXML());

                    //trace("[SR0010_W]-this.fnInit()this.getOwnerFrame().pDsWfProc:\n" + this.dsWfProc.saveXML());
                    this.baseWfProcCd = this.dsWfProc.getColumn(0, "WF_PROC_CD");
                    this.fnSrCommGetSelectBaseInfo();   //임시
                    //임시 this.fnSrCommGetReqSelectService(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID"), this.dsFormInfo.getColumn(0, "WF_FUNC_CD"));   //요청서 테이블 및 서비스 조회
                    break;

                case "selectBaseInfo" : //요청서 기본 정보 조회 처리 후
                    /* 부모창에서 팝업 호출시 pDsFormAdd_○○○ 형태의 변수를 dsFormInfo 데이터셋에 ○○○에 해당하는 컬럼이 존재하지 않으면 컬럼을 추가해 주고 넘어온 값을 삽입한다.
                    ex) pDsFormAdd_USER_NM → dsFormInfo에 [USER_NM] 컬럼이 추가된다. */
        //              if( Ex.isEmpty(this.dsFormInfo.getColumn(0, "REQ_ID")) )
        //              {
        //              //요청서 ID외에 외부키가 필요한 경우 신규 작성시 파라미터를 전달받아 외부키에 대한 정보를 KEY_INFO 컬럼에 등록한다.
        //              var keyInfo = "";
        //              for(var prop in this.getOwnerFrame())
        //              {
        //                  if(prop.indexOf("pDsFormAdd_") > -1)
        //                  {
        //                      var colNm = nexacro.replaceAll(prop, "pDsFormAdd_", "");
        //
        //                      if( Ex.isEmpty(this.dsFormInfo.colinfos[colNm]) )
        //                      {
        //                          //trace("prop : " + prop + " Value:[" + this.getOwnerFrame()[prop] + "] 컬럼:[" + colNm + "]");
        //                          this.dsFormInfo.addColumn(colNm, "STRING");
        //                          this.dsFormInfo.setColumn(0, colNm, this.getOwnerFrame()[prop]);
        //                      }
        //
        //                      //trace("prop : " + prop + " Value:[" + this.getOwnerFrame()[prop] + "] 컬럼:[" + colNm + "]");
        //                      if( Ex.isEmpty(keyInfo) )
        //                      {
        //                          keyInfo = colNm + "=" + this.getOwnerFrame()[prop];
        //                      }
        //                      else
        //                      {
        //                          keyInfo += "," + colNm + "=" + this.getOwnerFrame()[prop];
        //                      }
        //                  }
        //              }
        //
        //              if( !Ex.isEmpty(keyInfo) )
        //              {
        //                  this.dsSrBaseInfo_TOP.setColumn(0, "KEY_INFO", keyInfo);
        //              }
        //          }
        //          else
        //          {
                    var keyInfo = this.dsSrBaseInfo_TOP.getColumn(0, "KEY_INFO");

                    if( !Ex.isEmpty(keyInfo) )
                    {
                        var keyInfos = keyInfo.split(",");

                        for(var i=0; i<keyInfos.length; i++)
                        {
                            var keyVal = keyInfos[i].split("=");

                            if( Ex.isEmpty(this.dsFormInfo.colinfos[keyVal[0]]) )
                            {
                                this.dsFormInfo.addColumn(keyVal[0], "STRING");
                                this.dsFormInfo.setColumn(0, keyVal[0], keyVal[1]);
                            }
                        }
                    }
                    else
                    {
                        var keyInfo = "";
                        for(var prop in this.getOwnerFrame())
                        {
                            if(prop.indexOf("pDsFormAdd_") > -1)
                            {
                                var colNm = nexacro.replaceAll(prop, "pDsFormAdd_", "");

                                if( Ex.isEmpty(this.dsFormInfo.colinfos[colNm]) )
                                {
                                    //trace("prop : " + prop + " Value:[" + this.getOwnerFrame()[prop] + "] 컬럼:[" + colNm + "]");
                                    this.dsFormInfo.addColumn(colNm, "STRING");
                                    this.dsFormInfo.setColumn(0, colNm, this.getOwnerFrame()[prop]);
                                }

                                trace("prop : " + prop + " Value:[" + this.getOwnerFrame()[prop] + "] 컬럼:[" + colNm + "]");
                                if( Ex.isEmpty(keyInfo) )
                                {
                                    keyInfo = colNm + "=" + this.getOwnerFrame()[prop];
                                }
                                else
                                {
                                    keyInfo += "," + colNm + "=" + this.getOwnerFrame()[prop];
                                }
                            }
                        }

                        if( !Ex.isEmpty(keyInfo) )
                        {
                            this.dsSrBaseInfo_TOP.setColumn(0, "KEY_INFO", keyInfo);
                        }
                    }
        //          }

                    this.topForm.reqInfo["WF_FUNC_CD"] = this.dsSrBaseInfo_TOP.getColumn(0, "WF_FUNC_CD");

                    this.topForm.dsSrBaseInfo.assign(this.dsSrBaseInfo_TOP);
        			this.topForm.dsWfReqTmplatMtHelp.assign(this.dsWfReqTmplatMtHelp_TOP);
                    this.topForm.dsSrBaseInfo.applyChange();
                    this.topForm.fnCallback("select01", nErrorCode, sErrorMsg); //요청서 기본정보 화면에 서비스 CallBack 처리

                    for(var i=0; i<this.dsSrBaseInfo_TOP.colcount; i++)
                    {
                        if(this.dsFormInfo.colinfos[this.dsSrBaseInfo_TOP.getColID(i)] != "[object DSColumnInfo]")
                        {
                            this.dsFormInfo.addColumn(this.dsSrBaseInfo_TOP.getColID(i), "STRING");
                        }

                        if(this.dsSrBaseInfo_TOP.getColID(i) == "WF_PROC_CD")
                        {
                            this.dsFormInfo.setColumn(0, this.dsSrBaseInfo_TOP.getColID(i), Ex.isNvl(this.topForm.dsSrBaseInfo.getColumn(0, this.dsSrBaseInfo_TOP.getColID(i)), this.dsWfProc.getColumn(0, "WF_PROC_CD")));
                        }
                        else
                        {
                            this.dsFormInfo.setColumn(0, this.dsSrBaseInfo_TOP.getColID(i), this.topForm.dsSrBaseInfo.getColumn(0, this.dsSrBaseInfo_TOP.getColID(i)));
                        }
                    }
                    /*
                    this.dsFormInfo.setColumn(0, "TEMP_REQ_ID", this.topForm.dsSrBaseInfo.getColumn(0, "TEMP_REQ_ID"));
                    this.dsFormInfo.setColumn(0, "REQ_ID", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_ID"));
                    this.dsFormInfo.setColumn(0, "REF_REQ_ID", this.topForm.dsSrBaseInfo.getColumn(0, "REF_REQ_ID"));
                    this.dsFormInfo.setColumn(0, "REQ_TMPLAT_ID", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_TMPLAT_ID"));
                    this.dsFormInfo.setColumn(0, "REQ_TMPLAT_VER", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_TMPLAT_VER"));
                    this.dsFormInfo.setColumn(0, "WF_PROC_CD", Ex.isNvl(this.topForm.dsSrBaseInfo.getColumn(0, "WF_PROC_CD"), this.dsWfProc.getColumn(0, "WF_PROC_CD")));
                    this.dsFormInfo.setColumn(0, "REQ_STAT_CD", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_STAT_CD"));
                    this.dsFormInfo.setColumn(0, "WF_FUNC_CD", this.topForm.dsSrBaseInfo.getColumn(0, "WF_FUNC_CD"));
                    this.dsFormInfo.setColumn(0, "CANCEL_POSS_YN", this.topForm.dsSrBaseInfo.getColumn(0, "CANCEL_POSS_YN"));
                    */

        /***************************************************************************

                [this.divBottomButton.form.btn...] set_visible(true);

                divBottomButton.form.btnApv         승인[APV_BTN_YN]
                divBottomButton.form.btnRtn         결재반려[RTRN_BTN_YN]
                    결재/검토자

                divBottomButton.form.btnRev         접수(승인)[APV_BTN_YN](APV_BTN_TEXT)
                divBottomButton.form.btnScrnRtn     접수반려[RTRN_BTN_YN]
                    등록단계X 완료단계X 담당자O 접수OR반려 상태
                    this.baseWfProcCd != curWfProcCd && curWfProcCd != "WF_PROC_9999" && wfFuncCd == "WF_FUNC_04" &&
                    this.dsFormInfo.getColumn(0, "REQ_STAT_CD") == "RQST01" || this.dsFormInfo.getColumn(0, "REQ_STAT_CD") == "RQST91"

                divBottomButton.form.btnSaveTemp    임시저장(저장)[SAVE_BTN_YN](SAVE_BTN_TEXT)
                    등록단계O WF_FUNC_00O 본인O   wfFuncCd == "WF_FUNC_00"
                    등록단계O WF_FUNC_00X
                    등록단계X 종료 전              curWfProcCd != "WF_PROC_9999"
                    접수자/담당자/결재/검토자

                divBottomButton.form.btnSave        등록[REG_BTN_YN]
                    등록단계O WF_FUNC_00O 본인O       wfFuncCd == "WF_FUNC_00"

                divBottomButton.form.btnDelete      삭제
                    등록단계O WF_FUNC_00O
                    등록단계O WF_FUNC_00X 본인O
                    등록단계O 반려O

                    //임시저장, 반려인 경우만 삭제 가능
                        if( this.dsFormInfo.getColumn(0, "REQ_STAT_CD") == "RQST00" || this.dsFormInfo.getColumn(0, "REQ_STAT_CD") == "RQST91")
                        {
                            if(this.getOwnerFrame().pIsCopy || this.dsFormInfo.getColumn(0, "REQ_ID").indexOf("REQ") > -1)
                            {
                                this.divBottomButton.form.btnDelete.set_visible(false);
                            }
                            else
                            {
                                if(reqUserId == Ex.util.getSession('gvUserId'))
                                {
                                    if( "N" != this.dsFormInfo.getColumn(0,"CANCEL_BTN_YN"))    this.divBottomButton.form.btnDelete.set_visible(true);
                                }
                            }
                        }

                divBottomButton.form.btnCancel      회수[CANCEL_BTN_YN]
                    XXXXXXXXXXX수정가능X WF_FUNC_00O 본인O

                    if(wfFuncCd == "WF_FUNC_00")    //등록자
                    {
                        if(reqStatCd == "RQST01" || reqStatCd == "RQST11" || reqStatCd == "RQST21")
                        {
                            if(isCancel)
                            {
                                if(reqUserId == Ex.util.getSession('gvUserId'))
                                {
                                    if(isCancel)    this.divBottomButton.form.btnCancel.set_visible(true);
                                }
                            }
                        }
                    }
        ***************************************************************************/

                    if(this.getOwnerFrame().pIsCopy)
                    {
                        this.topForm.dsSrBaseInfo.setColumn(0, "REQ_USER_ID", Ex.util.getSession('gvUserId'));
                        this.dsFormInfo.setColumn(0, "REQ_USER_ID", Ex.util.getSession('gvUserId'));

                        this.topForm.dsSrBaseInfo.setColumn(0, "REQ_USER_NM", Ex.util.getSession('gvUserNm'));
                        this.dsFormInfo.setColumn(0, "REQ_USER_NM", Ex.util.getSession('gvUserNm'));

                        this.topForm.dsSrBaseInfo.setColumn(0, "REQ_DEPT_CD", Ex.util.getSession('gvDeptCd'));
                        this.dsFormInfo.setColumn(0, "REQ_DEPT_CD", Ex.util.getSession('gvDeptCd'));

                        this.topForm.dsSrBaseInfo.setColumn(0, "REQ_DEPT_NM", Ex.util.getSession('gvDeptNm'));
                        this.dsFormInfo.setColumn(0, "REQ_DEPT_NM", Ex.util.getSession('gvDeptNm'));

                        this.topForm.dsSrBaseInfo.setColumn(0, "FR_NM", Ex.util.getSession('gvUserNm'));
                        this.dsFormInfo.setColumn(0, "FR_NM", Ex.util.getSession('gvUserNm'));
                    }
                    else
                    {
                        this.dsFormInfo.setColumn(0, "REQ_USER_ID", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_USER_ID"));
                        this.dsFormInfo.setColumn(0, "REQ_USER_NM", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_USER_NM"));
                    }

                    this.fnSrCommGetReqSelectService(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID"), this.dsFormInfo.getColumn(0, "REQ_TMPLAT_VER"), this.dsFormInfo.getColumn(0, "WF_PROC_CD"), this.dsFormInfo.getColumn(0, "WF_FUNC_CD"));    //요청서 테이블 및 서비스 조회
                    break;

                case "selectReqInfo" :
        			var sUrl = this.getOwnerFrame().url;
        			var screenId = ' - (' + sUrl.substring(sUrl.indexOf('::')+2, sUrl.indexOf('.xfdl')) + ')';
        			this.parent.parent.stcTitle.set_text("[" + this.dsWfReqTmplatMt.getColumn(0, "REQ_TMPLAT_NM") + "] " + screenId);
                    this.wfProcForm();
                    break;

                case "preSelect" :  //전처리 조회 서비스 실행 후
                    this.fnAfterSelectCallback(sSvcId, nErrorCode, sErrorMsg);
                    break;

                case "select" :     //조회 서비스 실행 후
                    this.fnAfterSelectCallback(sSvcId, nErrorCode, sErrorMsg);
                    break;

                case "postSelect" : //후처리 조회 서비스 실행 후
                    this.isPostSelectComplete = true;
                    this.fnAfterSelectCallback(sSvcId, nErrorCode, sErrorMsg);
                    break;

                case "saveCheck" :
                    this.dsFormInfo.setColumn(0, "LAST_APPROVAL_YN", this.dsSaveCheck.getColumn(0, "LAST_APPROVAL_YN"));
                    this.dsFormInfo.setColumn(0, "NEXT_WF_PROC_CD", this.dsSaveCheck.getColumn(0, "NEXT_WF_PROC_CD"));
                    this.dsFormInfo.setColumn(0, "NEXT_WF_FUNC_CD", this.dsSaveCheck.getColumn(0, "NEXT_WF_FUNC_CD"));
                    this.formDivUpladProc();    //Div Form별 FileUpload진행
                    break;

                case "preSave" :    //전처리 저장 서비스 실행 후
                    break;

                case "save" :       //저장 서비스 실행 후
        			break;

                case "postSave" :   //후처리 저장 서비스 실행 후
                    this.getOwnerFrame().isSave = true;
                    if( Ex.isEmpty(this.getOwnerFrame().pREQ_ID) )
                    {
                        this.getOwnerFrame().pREQ_ID = this.dsFormInfo.getColumn(0, "REQ_ID");

                        this.uploadFormDiv = [];    //업로드 체크 DIV 영역 초기화
                        for(var i=0; i<this.gubunArr.length; i++)
                        {
                            if(this.divForm.form[this.gubunArr[i][0]].form.formUploadTempKeyChange)
                            {
                                //trace("this.gubunArr[i][0] : " + this.gubunArr[i][0]);
                                this.uploadFormDiv.push(this.gubunArr[i][0]);
                            }
                        }

                        for(var i=0; i<this.gubunArr.length; i++)
                        {
                            if(this.divForm.form[this.gubunArr[i][0]].form.formUploadTempKeyChange)
                            {
                                this.divForm.form[this.gubunArr[i][0]].form.formUploadTempKeyChange(this.getOwnerFrame().pREQ_ID);
                            }
                        }
                    }
                    else
                    {
                        if(this.getOwnerFrame().pIsCopy)
                        {
                            this.getOwnerFrame().pREQ_ID = this.dsFormInfo.getColumn(0, "REQ_ID");
                        }
                    }
                    this.getOwnerFrame().pIsCopy = false;
                    this.getOwnerFrame().pClearKeyColumnArr = undefined;
                    this.getOwnerFrame().pExcludedsInfoArr = undefined;

        			//처리함, 결재함이 아닌 경우는 저장 후 WF_FUNC_CD를 고정하지 않고 해제
        			if( !Ex.isEmpty(this.getOwnerFrame().pWF_FUNC_CD) && this.getOwnerFrame().pWF_FUNC_CD != "WF_FUNC_01" && this.getOwnerFrame().pWF_FUNC_CD != "WF_FUNC_04" )
        			{
        				this.getOwnerFrame().pWF_FUNC_CD = "";
        			}
                    this.reload();
                    break;

                case "delete01" :
                    this.getOwnerFrame().isSave = true;
                    var param = {
                          id    : "deleteAlertI"    //fnMsgAfter에서 식별자로 사용되는 ID
                        , msg   : "삭제 되었습니다."       //메시지 내용
                        , arrparam : [""]           //메시지의 변수에 들어갈 실제값
                        , msgtype : "I"             //메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                    };
                    Ex.core.alert(this, param);
                    break;

                case "cancel" :
                    this.getOwnerFrame().isSave = true;
                    var param = {
                          id    : "cancelAlertI"    //fnMsgAfter에서 식별자로 사용되는 ID
                        , msg   : "회수 처리 되었습니다."    //메시지 내용
                        , arrparam : [""]           //메시지의 변수에 들어갈 실제값
                        , msgtype : "I"             //메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
                    };
                    Ex.core.alert(this, param);
                    return false;
                    break;

        //         case "quit" :
        //             this.getOwnerFrame().isSave = true;
        //             var param = {
        //                   id    : "quitAlertI"  //fnMsgAfter에서 식별자로 사용되는 ID
        //                 , msg   : "종결 처리 되었습니다."        //메시지 내용
        //                 , arrparam : [""]           //메시지의 변수에 들어갈 실제값
        //                 , msgtype : "I"             //메시지 타입 '' : [No icon]아이콘 없는 기본 alert, 'I' : [Info]일반 alert, 'W' : [Warning]경고 Alert, 'S' : [Success]성공 alert(저장 등에 사용)&#13;
        //             };
        //             Ex.core.alert(this, param);
        //             break;
            }
        };

        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
            //trace("[SR0010_W]-this.fnUploadCallback() sSvcId : " + sSvcId + " nErrorCode : " + nErrorCode + " sErrorMsg : " + sErrorMsg);
            if (nErrorCode < 0)
            {
                Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
                return;
            }

            switch(sSvcId)
            {
                case "srFileSvc" :
                    this.fnSrCommSetPreSaveService();
                    break;
            }
        };

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
            //trace("[SR0010_W]-this.fnPopupAfter() varValue : " + varValue);

            switch(pID)
            {
                case "srOpinionPop" :
                    if( !Ex.isEmpty(varValue) )
                    {
                        if(varValue.indexOf("Dataset id=\"dsRtn\"") > -1)
                        {
                            this.dsRtn.loadXML(varValue);

                            if(this.dsRtn.getColumn(0, "RESULT") == "PROC")
                            {
                                this.dsFormInfo.setColumn(0, "OPINION", this.dsRtn.getColumn(0, "OPINION"));    //검토의견 셋팅

                                if(this.dsRtn.getColumn(0, "SAVE_GUBUN") == "REV")
                                {
                                    this.fnRev(false, false);
                                }
                                else if(this.dsRtn.getColumn(0, "SAVE_GUBUN") == "RTRN")
                                {
                                    this.fnRtn(false);
                                }
                            }
                        }
                    }
                    break;

                case "apprPop" :
                    if(varValue.indexOf("Dataset id=") > -1)
                    {
                        this.dsApprInfo.loadXML(varValue);
                        this.dsFormInfo.setColumn(0, "OPINION", this.dsApprInfo.getColumn(0, "APPR_DESC"));
                        this.fnMsgAfter("pConfirmApvI", true);
                    }

                    break;

                case "rtrnPop" :
                    if(varValue.indexOf("Dataset id=") > -1)
                    {
                        this.dsApprInfo.loadXML(varValue);
                        this.dsFormInfo.setColumn(0, "OPINION", this.dsApprInfo.getColumn(0, "APPR_DESC"));
                        this.fnMsgAfter("pConfirmRtrnI", true);
                    }
                    break;

                case "ScrnCheckPop" :
                    Ex.core.pclose(this, this.getOwnerFrame().isSave ? "Y" : "");
                    break;
            }

        };

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
            if(!varValue) return;

            switch(mID)
            {
                case "pConfirmSaveTempI" :  //임시저장
                case "pConfirmSaveI" :      //등록
                case "pConfirmRevI" :       //접수
                case "pConfirmScrnRtrnI" :  //반려(담당자)
                case "pConfirmApvI" :       //승인
                case "pConfirmRtrnI" :      //반려(결재)
                    if(mID == "pConfirmSaveTempI")  //임시저장
                    {
                        if(this.dsFormInfo.getColumn(0, "WF_FUNC_CD") == "WF_FUNC_00")
                        {
                            this.topForm.dsSrBaseInfo.setColumn(0, "REQ_STAT_CD", "RQST00");
                        }
                        this.dsFormInfo.setColumn(0, "REQ_USER_ID", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_USER_ID"));
                        this.dsFormInfo.setColumn(0, "REQ_STAT_CD", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_STAT_CD"));

                        /* 워크플로우기능[WF_FUNC_CD] - WF_FUNC_00:[등록], WF_FUNC_01:[결재], WF_FUNC_02:[검토], WF_FUNC_03:[회람], WF_FUNC_04:[담당자] */
                        /*
                        if(this.dsFormInfo.getColumn(0, "WF_FUNC_CD") == "WF_FUNC_00")
                        {
                            this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "REG");
                        }
                        else if(this.dsFormInfo.getColumn(0, "WF_FUNC_CD") == "WF_FUNC_01" || this.dsFormInfo.getColumn(0, "WF_FUNC_CD") == "WF_FUNC_02")
                        {
                            this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "APV");
                        }
                        else if(this.dsFormInfo.getColumn(0, "WF_FUNC_CD") == "WF_FUNC_04")
                        {
                            this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "REV");
                        }
                        */
                        this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "TEMP");
                        this.dsFormInfo.setColumn(0, "TEMP_SAVE_YN", "Y");
                    }
                    else if(mID == "pConfirmSaveI") //등록(저장)
                    {
                        this.divForm.form.divFormTop.form.dsSrBaseInfo.setColumn(0, "REQ_STAT_CD", "RQST01");
                        this.dsFormInfo.setColumn(0, "REQ_USER_ID", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_USER_ID"));
                        this.dsFormInfo.setColumn(0, "REQ_STAT_CD", this.topForm.dsSrBaseInfo.getColumn(0, "REQ_STAT_CD"));
                        this.divForm.form.divFormTop.form.dsSrBaseInfo.setColumn(0, "REQ_DATE", Ex.util.todayTime());
                        this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "REG");
                    }
                    else if(mID == "pConfirmRevI")  //접수
                    {
                        this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "REV");
                    }
                    else if(mID == "pConfirmScrnRtrnI") //반려(접수)
                    {
                        this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "SCRN_RTRN");
                    }
                    else if(mID == "pConfirmApvI")      //승인
                    {
                        this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "APV");
                    }
                    else if(mID == "pConfirmRtrnI")     //반려(승인)
                    {
                        this.dsFormInfo.setColumn(0, "SAVE_GUBUN", "RTRN");
                    }

                    if(mID != "pConfirmSaveTempI")  //임시저장
                    {
                        this.dsFormInfo.setColumn(0, "TEMP_SAVE_YN", "N");
                    }

                    var sTranId = "saveCheck";                      // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
                    var sService = "SRComm/saveCheck";              // 서비스명
                    var sInDs = "dsCond=dsFormInfo";                // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
                    var sOutDs = "dsSaveCheck=dsSaveCheck";     // 서버에서 수신할 데이타셋
                    var sArg = "";                                  // 서버 @ParamVariable 인자와 맵핑됨
                    Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
                    break;

                case "pConfirmCancelI" :
                    var sTranId = "cancel";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
                    var sService = "SR0000D/cancel";                // 서비스명
                    var sInDs = "dsSrBaseInfo=dsFormInfo";          // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
                    var sOutDs = "";                                // 서버에서 수신할 데이타셋
                    var sArg = "";                                  // 서버 @ParamVariable 인자와 맵핑됨
                    Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
                    break;

                case "pConfirmQuitI" :

                    var sTranId = "quit";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
                    var sService = "SR1000D/quit";              // 서비스명
                    var sInDs = "dsSrBaseInfo=dsFormInfo";          // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
                    var sOutDs = "";                                // 서버에서 수신할 데이타셋
                    var sArg = "";                                  // 서버 @ParamVariable 인자와 맵핑됨
                    Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);

                    break;

                case "pConfirmDeleteI" :
                    var sTranId = "delete01";                       // transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
                    var sService = "SR0000D/delete01";              // 서비스명
                    var sInDs = "dsSrBaseInfo=dsFormInfo";          // 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
                    var sOutDs = "";                                // 서버에서 수신할 데이타셋
                    var sArg = "";                                  // 서버 @ParamVariable 인자와 맵핑됨
                    Ex.core.tran(this, sTranId, sService, sInDs, sOutDs, sArg);
                    break;

                case "cancelAlertI" :
                    this.reload();
                    break;

                case "deleteAlertI" :
                    Ex.core.pclose(this, this.getOwnerFrame().isSave ? "Y" : "");
                    break;

        //         case "quitAlertI" :
        //             Ex.core.pclose(this, this.getOwnerFrame().isSave ? "Y" : "");
        //             break;

                case "pERRORcancel" :
                    this.reload();
                    break;
            }
        };

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCompInit = function()
        {
            this.fnSrCommSelectWfReqTmplatMt(); //WF 관리 템플릿 조회
        };

        this.fnAfterSelectCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
            trace("[SR0010_W]-START this.fnAfterSelectCallback() sSvcId : " + sSvcId);

            if(sSvcId == "postSelect")
            {
                if(this.getOwnerFrame().pIsCopy)    //복사기능 처리 키값 초기화
                {
                    this.setFormDatasetInsert(this, this.getOwnerFrame().pClearKeyColumnArr, this.getOwnerFrame().pExcludedsInfoArr);
                }
            }

            for(var i=0; i<this.gubunArr.length; i++)
            {
                //trace("[SR0010_W]-fnAfterSelectCallback() sSvcId:[" + sSvcId + "] i=" + i + " this.gubunArr:[" + this.gubunArr + "]");
                var divScope = nexacro.replaceAll(this.gubunArr[i][0], "divForm", "").toUpperCase();
                var outDatasets = this.dsFormInfo.getColumn(0, "OUT_DATASET").split(" ");

                //trace("[SR0010_W]-fnAfterSelectCallback() [select] divScope : " + divScope +" outDatasets.length ::::: " + outDatasets.length);

                for(var j=0; j<outDatasets.length; j++)
                {
                    if(outDatasets[j].indexOf(divScope) > -1)
                    {
                        var outDs   = outDatasets[j].split("=")[0];
                        var formOutDs = nexacro.replaceAll(outDs, "_" + divScope, "");

                        //trace("[SR0010_W]-fnAfterSelectCallback() [" + sSvcId + "] outDs=[" + outDs + "] formOutDs=[" + formOutDs + "]");

                        if(this.divForm.form[this.gubunArr[i][0]].form.isValidObject(formOutDs))
                        {
                            //trace("formOutDs : " + formOutDs + " outDs : " + outDs + " " + this[outDs].saveXML());
                            trace("formOutDs : " + formOutDs + " outDs : " + outDs);
                            this.divForm.form[this.gubunArr[i][0]].form[formOutDs].loadXML(this[outDs].saveXML());
                            this[outDs].clearData();
                            //trace("[SR0010_W fnAfterSelectCallback() select] DataSetPrint\n" + this.divForm.form[this.gubunArr[i][0]].form[formOutDs].saveXML());
                        }
                    }
                }

                var callbackId = sSvcId;
                var fRow = this.dsSelectService.findRow("WF_PROC_CD", divScope);
                if(fRow > -1)
                {
                    if(sSvcId == "select")  callbackId = this.dsSelectService.getColumn(fRow, "CALLBACK_ID");
                }

                trace("[SR0010_W]-fnAfterSelectCallback() [" + sSvcId + "] i=" + i + " divScope : " + divScope + " callbackId : " + callbackId);
                this.divForm.form[this.gubunArr[i][0]].form.fnCallback(callbackId, nErrorCode, sErrorMsg);
            }

            if(sSvcId == "postSelect")
            {
                //this.setChangeEdit();

                if( this.dsFormInfo.getColumn(0, "REQ_ID").indexOf("REQ") > -1 )
                {
                    this.divForm.form.divFormTop.form.edtReqTitle.setFocus();
                }
            }
            trace("END this.fnAfterSelectCallback() sSvcId:[" + sSvcId + "]");
        }

        //요청서 폼 배치 (기본정보)
        this.setBaseReqForm = function()
        {
            this.gubunArr = [];

            //trace("[SR0010_W]-this.setBaseReqForm() [시작]");
            this.set_bottom(null);

            var divFormTop = this.topForm.parent;

            var reqInfo = new Object();
            reqInfo["SCRN_WF_PROC_CD"]  = this.baseWfProcCd;
            reqInfo["PARENT_FORM"]      = this;
            reqInfo["REF_REQ_ID"]       = this.getOwnerFrame().pRefReqId;

            //this.topForm._formObj = this;

            for(var i=0; i<this.dsFormInfo.getColCount(); i++)
            {
                reqInfo[this.dsFormInfo.getColID(i)] = this.dsFormInfo.getColumn(0, this.dsFormInfo.getColID(i));
            }

            this.topForm.reqInfo = reqInfo;

            this.topForm.dsWfProc = this.dsWfProc;

            divFormTop.set_url(this.dsFormInfo.getColumn(0, "SR_INFO_URL"));
            divFormTop.set_height(this.topForm.getLayoutInfo("default", "height"));
            divFormTop.wfProcCd = this.baseWfProcCd;
            //trace("[SR0010_W]-this.setBaseReqForm() divFormTop Height : " + this.topForm.getLayoutInfo("default", "height"));

            this.gubunArr.push(["divFormTop", "Y", this.topForm.getLayoutInfo("default", "height"), this.topForm.getLayoutInfo("default", "height")]);

            this.divForm.form["divFormTop"].editYn = "N";   //해당 div 편집 가능 여부
            Ex.util.setCompPropAll(this, this.divForm.form["divFormTop"], false);

            this.topForm.dsCond.setColumn(0, "REQ_ID", this.dsFormInfo.getColumn(0, "REQ_ID"));
            this.topForm.dsCond.setColumn(0, "REQ_TMPLAT_ID", this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID"));
            this.topForm.dsCond.setColumn(0, "REQ_TMPLAT_VER", this.dsFormInfo.getColumn(0, "REQ_TMPLAT_VER"));
            this.topForm.dsCond.setColumn(0, "IS_COPY", this.getOwnerFrame().pIsCopy ? "Y" : "N");

            if( !Ex.isEmpty(this.getOwnerFrame().pWF_FUNC_CD) )
            {
                this.dsFormInfo.setColumn(0, "WF_FUNC_CD", this.getOwnerFrame().pWF_FUNC_CD);
            }
            trace("[SR0010_W]-this.setBaseReqForm() [종료]");

            //WF프로세스 상세 조회
            this.wffnSearchWfTmplat(this.dsFormInfo.getColumn(0, "REQ_TMPLAT_ID"),
                                    this.dsFormInfo.getColumn(0, "REQ_TMPLAT_VER"),
                                    this.dsFormInfo.getColumn(0, "REQ_ID"));
        };

        //[요청서 Form 화면 + 요청서 진행단계]에 대한 화면 폼 추가
        this.wfProcForm = function()
        {
            var msg = "";

            for(var i=0; i<this.dsWfProc.rowcount; i++)
            {
                var wfProcCd    = this.dsWfProc.getColumn(i, "WF_PROC_CD");
                var wfProcNm    = this.dsWfProc.getColumn(i, "WF_PROC_NM");
                var wfFormUrl   = this.dsWfProc.getColumn(i, "URL");

                if( !Ex.isEmpty(wfFormUrl) )
                {
                    if( !Ex.util.isExistScrn(wfFormUrl) )
                    {
                        msg += (Ex.isEmpty(msg) ? "" : "\n") + "요청서 단계-" + wfProcNm + "[" + wfProcCd + "] 설정화면-[" + wfFormUrl + "]이 존재하지 않습니다.";
                    }
                }
            }

            if( !Ex.isEmpty(msg) )
            {
                Ex.core.popup(
                    this,                               // <--- 팝업 실행 스코프
                    "ScrnCheckPop",                     // <--- 팝업창 아이디(반드시 영문으로 입력 처리)
                    "comm::comTextareaPop.xfdl",        // <--- 팝업창 오픈 Url
                    {
                        title       : "요청서 단계 화면 체크",
                        subTitle    : "화면 체크",
                        pMsg        : msg
                    },                      // <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
                    "autosize"  // <--- width/height/modeless(프레임 처리 옵션)
                );
                return false;
            }

            var topDivObj = this.topForm.parent;

            //진행단계 화면 그리기 시작
            var curWfProcCd = this.dsFormInfo.getColumn(0, "WF_PROC_CD");   //실제 저장된 진행 단계
            //trace("[SR0010_W]-this.wfProcForm() curWfProcCd : " + curWfProcCd);
            var curReqStatCd = Ex.isNvl(this.dsFormInfo.getColumn(0, "REQ_STAT_CD"), "RQST00");

            //현재 진행된 단계를 구하여 workFlow 정보를 통해 Form 화면을 그린다.
            var fRow = this.dsWfProc.findRow("WF_PROC_CD", curWfProcCd);

            //trace("[SR0010_W]-this.wfProcForm() fRow : " + fRow + " curWfProcCd : " + curWfProcCd + " curReqStatCd : " + curReqStatCd + " URL : " + this.dsWfProc.getColumn(fRow, "URL"));

            if( !Ex.isEmpty(this.dsWfProc.getColumn(fRow, "URL")) ) this.dsFormInfo.setColumn(0, "CUR_SCRN_YN", "Y");

            for(var i=0; i<=fRow; i++)
            {
                var wfProcCd    = this.dsWfProc.getColumn(i, "WF_PROC_CD");

                //trace("[SR0010_W]-this.wfProcForm() For Loop Start wfProcCd:[" + wfProcCd + "] i=" + i);

                if(wfProcCd != "WF_PROC_9999")
                {
                    var wfProcNm    	= this.dsWfProc.getColumn(i, "WF_PROC_NM");
                    var cgerNm      	= this.dsWfProc.getColumn(i, "CGER_NM");
                    var cger        	= this.dsWfProc.getColumn(i, "CGER");
        			var scrnType		= this.dsWfProc.getColumn(i, "SCRN_TYPE");			//단계화면 TYPE(D:Div화면, P:Popup화면)
        			var skipYn			= this.dsWfProc.getColumn(i, "SKIP_YN");			//단계SKIP가능여부
        			var wfProcSkipYn	= this.dsWfProc.getColumn(i, "WF_PROC_SKIP_YN");	//단계SKIP여부
                    var wfFormUrl   = "";
                    var defaultURL  = "";

                    if(cger == "true")  defaultURL  = "sr::SR0010_D02.xfdl";

                    wfFormUrl   = this.dsWfProc.getColumn(i, "URL") || defaultURL;

        			if(wfProcSkipYn == "N")
        			{
        				if( !Ex.isEmpty(wfFormUrl) )
        				{
        					trace("[SR0010_W]-this.wfProcForm() i= " + i + " wfFormUrl :::::: " + wfFormUrl);
        					var formDivNm = "divForm" + wfProcCd;
        					//trace("[SR0010_W]-this.wfProcForm() i= " + i + " wfProcCd : " + wfProcCd + " wfFormUrl : " + wfFormUrl + " formDivNm : " + formDivNm);

        					//Div.init(strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]])
        					var objFormDiv = new Div(formDivNm, 0, 0, null, 50, 20, null);
        					objFormDiv.set_async(false);
        					objFormDiv.set_visible(false);
        					this.divForm.addChild(formDivNm, objFormDiv);
        					//objFormDiv.set_border("1px solid orange");
        					objFormDiv.show();

        					var upDivObjId = "";

        					if( Ex.isEmpty(this.bfBottomLastComp) )
        					{
        						upDivObjId = topDivObj.id;
        						objFormDiv.set_top(nexacro.toNumber(topDivObj.top) + nexacro.toNumber(topDivObj.height) + 20);
        					}
        					else
        					{
        						upDivObjId = this.bfBottomLastComp.id;
        						objFormDiv.set_top(nexacro.toNumber(this.bfBottomLastComp.top) + nexacro.toNumber(this.bfBottomLastComp.height) + 20);
        					}

        					//trace("[SR0010_W]-this.wfProcForm() i=" + i + " upDivObjId : " + upDivObjId);

        					//요청서 단계별 Div Form 객제에 요청서 정보를 셋팅
        					this.fnSrCommSetDivFormReqInfoData(objFormDiv.form, wfProcCd);

        					objFormDiv.set_url(wfFormUrl);
        					objFormDiv.editYn = "N";    //해당 div 편집 가능 여부
        					//trace("[SR0010_W]-this.wfProcForm() "+ objFormDiv.id + " wfProcCd : " + wfProcCd + " objFormDiv.wfProcCd : " + objFormDiv.wfProcCd);

        					if(wfFormUrl == "sr::SR0010_D02.xfdl")
        					{
        						objFormDiv.form.stcTitle.set_text(nexacro.replaceAll(wfProcNm, "\\n", " ") + (Ex.isEmpty(cgerNm) ? "" : " " + cgerNm) + " 의견");
        					}

        					var formHeight = objFormDiv.form.getLayoutInfo("default", "height");

        // 					if(scrnType == "D")	formHeight = objFormDiv.form.getLayoutInfo("default", "height");
        // 					else				formHeight = 24;
        //
         					objFormDiv.set_height(formHeight);
        // 					if(objFormDiv.form.vscorllbar)
        // 					{
        // 						objFormDiv.form.vscorllbar.set_pos(0);
        // 					}
        // 					if(scrnType == "P")	objFormDiv.set_formscrollbartype("none none");
        					this.gubunArr.push([formDivNm, "N", formHeight, objFormDiv.form.getLayoutInfo("default", "height")]);

        					//trace("objFormDiv.form.vscrollbar:[" + objFormDiv.form.vscrollbar + "]");
        					//trace("wfProcCd:[" + wfProcCd + "] objFormDiv.form.vscrollbar.max:[" + objFormDiv.form.vscrollbar.max + "]");

        					//trace("[SR0010_W]-this.wfProcForm() formHeight : " + formHeight + " Height : " + objFormDiv.form.getLayoutInfo("default", "height"));
        					objFormDiv.set_visible(true);

        					this.bfBottomLastComp = objFormDiv;
        					Ex.util.setCompPropAll(this, objFormDiv.form, false);
        				}
        			}
                }
        		else
        		{
        			var wfFormUrl   = this.dsWfProc.getColumn(i, "URL");

                    if( !Ex.isEmpty(wfFormUrl) )
                    {
                        var formDivNm = "divForm" + wfProcCd;

                        trace("[SR0000_W]-this.wfProcForm() i= " + i + " wfProcCd : " + wfProcCd + " wfFormUrl : " + wfFormUrl + " formDivNm : " + formDivNm);

                        //Div.init(strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]])
                        var objFormDiv = new Div(formDivNm, 0, 0, null, 50, 20, null);
                        objFormDiv.set_async(false);
                        objFormDiv.set_visible(false);
                        this.divForm.addChild(formDivNm, objFormDiv);
                        //divFormObj._formObj = this;
                        objFormDiv.show();

                        var upDivObjId = "";

                        if( Ex.isEmpty(this.bfBottomLastComp) )
                        {
                            upDivObjId = topDivObj.id;
                            objFormDiv.set_top(nexacro.toNumber(topDivObj.top) + nexacro.toNumber(topDivObj.height) + 20);
                        }
                        else
                        {
                            upDivObjId = this.bfBottomLastComp.id;
                            objFormDiv.set_top(nexacro.toNumber(this.bfBottomLastComp.top) + nexacro.toNumber(this.bfBottomLastComp.height) + 20);
                        }

                        //trace("[SR0010_W]-this.wfProcForm() i=" + i + " upDivObjId : " + upDivObjId);

                        this.fnSrCommSetDivFormReqInfoData(objFormDiv.form, wfProcCd);

                        objFormDiv.set_url(wfFormUrl);
                        //trace("[SR0010_W]-this.wfProcForm() "+ objFormDiv.id + " wfProcCd : " + wfProcCd + " objFormDiv.wfProcCd : " + objFormDiv.wfProcCd);

                        var formHeight = objFormDiv.form.getLayoutInfo("default", "height");
                        objFormDiv.set_height(formHeight);
                        this.gubunArr.push([formDivNm, "N", formHeight]);
                        //this.gubunArr.push([formDivNm]);

                        //trace("objFormDiv.form.vscrollbar:[" + objFormDiv.form.vscrollbar + "]");
                        //trace("wfProcCd:[" + wfProcCd + "] objFormDiv.form.vscrollbar.max:[" + objFormDiv.form.vscrollbar.max + "]");

                        //trace("[SR0010_W]-this.wfProcForm() formHeight : " + formHeight + " Height : " + objFormDiv.form.getLayoutInfo("default", "height"));
                        objFormDiv.set_visible(true);

                        this.bfBottomLastComp = objFormDiv;

                        //this.reqFormArr.push(objFormDiv.form);
                        //Ex.util.setCompPropAll(this, this.divForm.form["divForm" + wfProcCd], false);
                    }
        		}
                //trace("[SR0010_W]-this.wfProcForm() For Loop End i=" + i);
            }
            //진행단계 화면 그리기 끝
            //trace("[SR0010_W]-this.wfProcForm() this.bfBottomLastComp.id : " + this.bfBottomLastComp.id + " ATTACH_USE_YN : " + this.dsFormInfo.getColumn(0, "ATTACH_USE_YN"));

            //최하단 Div 처리
            if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
            {
                //trace("[SR0010_W]-this.wfProcForm() 첨부파일 DIV 처리");
                this.fileForm.parent.set_top(nexacro.toNumber(this.bfBottomLastComp.top) + nexacro.toNumber(this.bfBottomLastComp.height) + 20);

                //trace("[SR0010_W]-this.wfProcForm() 첨부파일 DIV 처리 Top:[" + this.fileForm.parent.top + "]");

                //첨부파일 Div Form 객제에 요청서 정보를 셋팅
                this.fnSrCommSetDivFormReqInfoData(this.fileForm, curWfProcCd);

                this.fileForm.parent.editYn = "N";  //해당 div 편집 가능 여부

                this.fileForm.parent.set_url("comm::comFile.xfdl");
                //this.fnSrCommSetFileConfig(this.fileForm, [this.dsFormInfo.getColumn(0, "REQ_ID")], true);
            }
            //trace("[SR0010_W]-this.wfProcForm() curWfProcCd : " + curWfProcCd);

            var fRow = this.dsWfProc.findRow("WF_PROC_CD", curWfProcCd);
            var WF_FUNC_CD = this.dsWfProc.getColumn(fRow, "FUNC");
            //trace("[SR0010_W]-this.wfProcForm() fRow:[" + fRow + "] WF_FUNC_CD:[" + WF_FUNC_CD + "]");

            if(WF_FUNC_CD == "WF_FUNC_01")  //결재선
            {
                if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") != "Y")
                {
                    this.appvForm.parent.setOffsetLeft(0);
                }

                //trace("결재선 DIV 처리");
                this.gubunArr.push(["divFormAppv", "Y"]);
                this.appvForm.parent.setOffsetTop(nexacro.toNumber(this.bfBottomLastComp.top) + nexacro.toNumber(this.bfBottomLastComp.height) + 20);

                //결재선 Div Form 객제에 요청서 정보를 셋팅
                this.fnSrCommSetDivFormReqInfoData(this.appvForm, this.dsFormInfo.getColumn(0, "WF_PROC_CD"));

                this.appvForm.parent.set_visible(true);
                this.appvForm.parent.set_url("sr::SR0010_D01.xfdl");
                this.appvForm.parent.editYn = "N";

                if(this.getOwnerFrame().pIsCopy)
                {
                    this.appvForm.dsCond.setColumn(0, "REQ_ID", "");
                }
                else
                {
                    this.appvForm.dsCond.setColumn(0, "REQ_ID", this.dsFormInfo.getColumn(0, "REQ_ID"));
                }
                this.appvForm.dsCond.setColumn(0, "WF_PROC_CD", curWfProcCd);
            }
            else
            {
                this.appvForm.parent.setOffsetHeight(0);
                if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y") this.fileForm.parent.set_right(20);
            }

        	this.divForm.form.resetScroll();
            //trace("[SR0010_W]-this.wfProcForm() 전체Form화면 [셋팅 완료]");
        };

        this.setChangeEdit = function()
        {
        	var curWfProcCd 	= this.dsFormInfo.getColumn(0, "WF_PROC_CD");
        	var wfFuncCd 		= this.dsFormInfo.getColumn(0, "WF_FUNC_CD");

            var regBtnYn		= this.dsFormInfo.getColumn(0,"REG_BTN_YN") == "Y" ? true : false;
        	var cancelBtnYn		= this.dsFormInfo.getColumn(0,"CANCEL_BTN_YN") == "Y" ? true : false;
        	var delBtnYn		= this.dsFormInfo.getColumn(0,"DEL_BTN_YN") == "Y" ? true : false;

        	var saveBtnYn		= this.dsFormInfo.getColumn(0,"SAVE_BTN_YN") == "Y" ? true : false;
        	var revBtnYn		= this.dsFormInfo.getColumn(0,"REV_BTN_YN") == "Y" ? true : false;
        	var revRtrnBtnYn	= this.dsFormInfo.getColumn(0,"REV_RTRN_BTN_YN") == "Y" ? true : false;
        	var apvBtnYn		= this.dsFormInfo.getColumn(0,"APV_BTN_YN") == "Y" ? true : false;
        	var rtrnBtnYn		= this.dsFormInfo.getColumn(0,"RTRN_BTN_YN") == "Y" ? true : false;

        	var saveBtnText		= this.dsFormInfo.getColumn(0,"SAVE_BTN_TEXT");		//저장버튼TEXT
        	var revBtnText		= this.dsFormInfo.getColumn(0,"REV_BTN_TEXT");		//[담당자]접수 버튼TEXT
        	var revRtrnBtnText	= this.dsFormInfo.getColumn(0,"REV_RTRN_BTN_TEXT");	//[담당자]반려 버튼TEXT
        	var apvBtnText		= this.dsFormInfo.getColumn(0,"APV_BTN_TEXT");		//[결재자]승인 버튼TEXT
        	var rtrnBtnText		= this.dsFormInfo.getColumn(0,"RTRN_BTN_TEXT");		//[결재자]반려 버튼TEXT

        	this.divBottomButton.form.btnSave.set_visible(regBtnYn);		//등록버튼 권한 처리
        	this.divBottomButton.form.btnCancel.set_visible(cancelBtnYn);	//회수버튼 권한 처리
        	this.divBottomButton.form.btnDelete.set_visible(delBtnYn);		//삭제버튼 권한 처리

        	this.divBottomButton.form.btnSaveTemp.set_text(saveBtnText);	//저장버튼 TEXT 설정
        	this.divBottomButton.form.btnSaveTemp.set_visible(saveBtnYn);	//저장버튼 권한 처리

        	this.divBottomButton.form.btnRev.set_text(revBtnText);			//[담당자] 접수버튼 TEXT 설정
        	this.divBottomButton.form.btnRev.set_visible(revBtnYn);			//[담당자] 접수버튼 권한 처리

        	this.divBottomButton.form.btnScrnRtn.set_text(revRtrnBtnText);	//[담당자] 반려버튼 TEXT 설정
        	this.divBottomButton.form.btnScrnRtn.set_visible(revRtrnBtnYn);	//[담당자] 반려버튼 권한 처리

        	this.divBottomButton.form.btnApv.set_text(apvBtnText);			//[결재자] 승인버튼 TEXT 설정
        	this.divBottomButton.form.btnApv.set_visible(apvBtnYn);			//[결재자] 승인버튼 권한 처리

        	this.divBottomButton.form.btnRtn.set_text(rtrnBtnText);			//[결재자] 반려버튼 TEXT 설정
        	this.divBottomButton.form.btnRtn.set_visible(rtrnBtnYn);		//[결재자] 반려버튼 권한 처리

        	Ex.util.setBtnAlign(this.divBottomButton, 'right', true);
        	//버튼 제어 종료

        	if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
            {
        		this.fnSrCommSetFileConfig(this.fileForm, [this.dsFormInfo.getColumn(0, "REQ_ID")]);
        	}

        	if(saveBtnYn)
            {
                if(this.baseWfProcCd == curWfProcCd)    //현재 진행 단계가 등록 단계인 경우
                {
        			this.divForm.form["divFormTop"].editYn = "Y";
        			Ex.util.setCompPropAll(this, this.divForm.form["divFormTop"], true);
                }

        		if(wfFuncCd != "WF_FUNC_01" && curWfProcCd != "WF_PROC_9999")
        		{
        			this.divForm.form["divForm" + curWfProcCd].editYn = "Y";
        			Ex.util.setCompPropAll(this, this.divForm.form["divForm" + curWfProcCd], true);
        		}
            }
        	else
        	{
        		if(regBtnYn)	//등록 버튼 권한
        		{
        			if(this.baseWfProcCd == curWfProcCd)    //현재 진행 단계가 등록 단계인 경우
        			{
        				this.divForm.form["divFormTop"].editYn = "Y";
        				Ex.util.setCompPropAll(this, this.divForm.form["divFormTop"], true);

        				this.divForm.form["divForm" + this.baseWfProcCd].editYn = "Y";
        				Ex.util.setCompPropAll(this, this.divForm.form["divForm" + this.baseWfProcCd], true);
        			}
        		}

        		if(revBtnYn)	//접수 버튼 권한
        		{
        			if(wfFuncCd == "WF_FUNC_04" && this.baseWfProcCd != curWfProcCd && curWfProcCd != "WF_PROC_9999")    //
        			{
        				this.divForm.form["divForm" + this.baseWfProcCd].editYn = "Y";
        				Ex.util.setCompPropAll(this, this.divForm.form["divForm" + curWfProcCd], true);
        			}
        		}
        	}

        	//단계별 폼 화면 제어
        	if((wfFuncCd == "WF_FUNC_04" && (revBtnYn || saveBtnYn)) || (wfFuncCd == "WF_FUNC_01" && saveBtnYn) )	//isUserEdit
            {
                var fRow = this.dsWfProc.findRow("WF_PROC_CD", curWfProcCd);

                var editWfProcCds = "";

        		if(wfFuncCd == "WF_FUNC_04")		editWfProcCds = this.dsWfProc.getColumn(fRow, "SCREEN_EDIT");
        		else if(wfFuncCd == "WF_FUNC_01")	editWfProcCds = this.dsWfProc.getColumn(fRow, "EDIT");

                trace(wfFuncCd + " [SR0010_W]-this.setChangeEdit() fRow:" + fRow + " editWfProcCds : " + editWfProcCds);

                if( !Ex.isEmpty(editWfProcCds) )
                {
                    var editWfProcCdArr = editWfProcCds.split(",");

                    for(var i=0; i<editWfProcCdArr.length; i++)
                    {
        				var divGubun = editWfProcCdArr[i];

        				if(divGubun == "TOP")	divGubun = "Top";
                        var divFormStr = "divForm" + divGubun;
                        trace(wfFuncCd + " [SR0010_W]-this.setChangeEdit() i=" + i + " divFormStr : " + divFormStr);

                        if(this.divForm.form[divFormStr])
                        {
        					trace(wfFuncCd + " IF [SR0010_W]-this.setChangeEdit() i=" + i + " divFormStr : " + divFormStr);
                             this.divForm.form[divFormStr].editYn = "Y";
                            Ex.util.setCompPropAll(this, this.divForm.form[divFormStr], true);
                        }
                    }
                }
            }

            for(var i=0; i<this.gubunArr.length; i++)
            {
                if( !Ex.isEmpty(this.divForm.form[this.gubunArr[i][0]].url) )
                {
        			trace("[SR0010_W]-this.setChangeEdit() this.divForm.form[" + this.gubunArr[i][0] + "].editYn : " + this.divForm.form[this.gubunArr[i][0]].editYn);

        			if(this.divForm.form[this.gubunArr[i][0]].form.setChangeEditAfter)
        			{
        				this.divForm.form[this.gubunArr[i][0]].form.setChangeEditAfter();
        			}
                    //trace("SR0010_W this.fnSave() btnSave i= " + i + " this.gubunArr : " + this.gubunArr[i][0] + " this.gubunArr[i][0].form.fnSaveCheck rtn::: " + rtn);
                }
            }
        	this.fnSrCommSetPreSelectService(); //조회 전처리 서비스 실행
        	trace("[SR0010_W]-this.setChangeEdit() [실행완료]");
        };

        this.fnRevPop = function(gubun)
        {
            var chgCnt = 0;
            for(var i=0; i<this.gubunArr.length; i++)
            {
                //trace("SR0010_W this.fnSave() i=" + i + " divNm : " + this.gubunArr[i][0] + " isUpdateForm() : " + this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm());
                this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm();
            }

            if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
            {
                var rtn = this.divForm.form["divFormFile"].form.fnSaveCheck(true);
                if(!rtn) return false;
            }

            for(var i=0; i<this.gubunArr.length; i++)
            {
                if( !Ex.isEmpty(this.divForm.form[this.gubunArr[i][0]].url) )
                {
                    this.divForm.form[this.gubunArr[i][0]].form.reqInfo["callFunc"] = this.fnRevPop;

                    var rtn = this.divForm.form[this.gubunArr[i][0]].form.fnSaveCheck(true);
                    //trace("SR0010_W this.fnSave() btnSave i= " + i + " this.gubunArr : " + this.gubunArr[i][0] + " this.gubunArr[i][0].form.fnSaveCheck rtn::: " + rtn);
                    if(!rtn) return false;
                }
            }

            var reqNm = this.topForm.dsSrBaseInfo.getColumn(0, "REQ_TMPLAT_NM");

            Ex.core.popup(
                this,                                                       // <--- 팝업 실행 스코프
                "srOpinionPop",                                             // <--- 팝업창 아이디(반드시 영문으로 입력 처리)
                "sr::SR0030_P01.xfdl",                                      // <--- 팝업창 오픈 Url
                {
                    title : reqNm,
                    pIS_OPIN_ESS : false,
                    pSAVE_GUBUN : gubun,
                    REQ_ID      : REQ_ID,
                    WF_PROC_CD  : WF_PROC_CD,
                    pOPINION : this.dsSaveInfo.getColumn(0, "OPINION")
                },                                                          // <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
                "width=750,height=263,useCloseButton=false"                 // <--- width/height/modeless(프레임 처리 옵션)
            );
        };

        this.fnCommentPop = function()
        {
            Ex.core.popup(
                this,
                'comment',
                "sr::SR0011_P01.xfdl",                  // <--- 팝업창 오픈 Url
                {
                    title       : '협업글 작성'
                  , pTableName  : 'FOMM_BOARD_MT'
                  , pPK1        : this.dsFormInfo.getColumn(0, 'REQ_ID')
                },
                "autosize"
            );
        }
        //결재/검토 승인 팝업
        this.fnApvPop = function(gubun)
        {
            if(gubun == "APV")
            {
                var chgCnt = 0;
                for(var i=0; i<this.gubunArr.length; i++)
                {
                    //trace("SR0010_W this.fnSave() i=" + i + " divNm : " + this.gubunArr[i][0] + " isUpdateForm() : " + this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm());
                    this.divForm.form[this.gubunArr[i][0]].form.isUpdateForm();
                }

                if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
                {
                    var rtn = this.divForm.form["divFormFile"].form.fnSaveCheck(true);
                    if(!rtn) return false;
                }

                for(var i=0; i<this.gubunArr.length; i++)
                {
                    if( !Ex.isEmpty(this.divForm.form[this.gubunArr[i][0]].url) )
                    {
                        this.divForm.form[this.gubunArr[i][0]].form.reqInfo["callFunc"] = this.fnApvPop;
                        this.divForm.form[this.gubunArr[i][0]].form.reqInfo["argu"] = gubun;

                        var rtn = this.divForm.form[this.gubunArr[i][0]].form.fnSaveCheck(true);
                        //trace("SR0010_W this.fnSave() btnSave i= " + i + " this.gubunArr : " + this.gubunArr[i][0] + " this.gubunArr[i][0].form.fnSaveCheck rtn::: " + rtn);
                        if(!rtn) return false;
                    }
                }
            }

            var REQ_ID          = this.dsFormInfo.getColumn(0, 'REQ_ID');
            var WF_PROC_CD      = this.dsFormInfo.getColumn(0, 'WF_PROC_CD');
            var WF_FUNC_CD      = this.dsFormInfo.getColumn(0, 'WF_FUNC_CD');
            var APPR_LVL_SEQ    = this.dsFormInfo.getColumn(0, 'APPR_LVL_SEQ');
            var APPR_GRP_SEQ    = this.dsFormInfo.getColumn(0, 'APPR_GRP_SEQ');
            var SEQ             = this.dsFormInfo.getColumn(0, 'SEQ');

            if(gubun == "APV")
            {
                if(WF_FUNC_CD == "WF_FUNC_00")
                {
                    WF_FUNC_CD = "WF_FUNC_01";
                    this.dsFormInfo.setColumn(0, 'WF_FUNC_CD', WF_FUNC_CD);
                }
            }

            var scrnPath = "";

            if(WF_FUNC_CD == "WF_FUNC_01")      scrnPath = "sr::SR0140_P01.xfdl";   //결재
            else if(WF_FUNC_CD == "WF_FUNC_02") scrnPath = "sr::SR0141_P01.xfdl";   //검토

            Ex.core.popup(
                this,
                gubun == "APV" ? 'apprPop' : 'rtrnPop',
                scrnPath,                   // <--- 팝업창 오픈 Url
                {
                    title           : (WF_FUNC_CD == "WF_FUNC_01" ? "결재" : "검토") + ' 상세정보',
                    GUBUN           : gubun,
                    REQ_ID          : REQ_ID,
                    APPR_LVL_SEQ    : APPR_LVL_SEQ,
                    APPR_GRP_SEQ    : APPR_GRP_SEQ,
                    SEQ             : SEQ,
                    WF_PROC_CD      : WF_PROC_CD
                },      // <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
                "autosize,useCloseButton=false"
            );
        }

        this.formDivUpladProc = function()
        {
            this.uploadFormDiv = [];    //업로드 체크 DIV 영역 초기화
            for(var i=0; i<this.gubunArr.length; i++)
            {
                if(this.divForm.form[this.gubunArr[i][0]].form.formUploadFiles)
                {
                    trace("this.gubunArr[i][0] : " + this.gubunArr[i][0]);
                    this.uploadFormDiv.push(this.gubunArr[i][0]);
                }
            }

            if(this.uploadFormDiv.length > 0)
            {
                for(var i=0; i<this.gubunArr.length; i++)
                {
                    if(this.divForm.form[this.gubunArr[i][0]].form.formUploadFiles)
                    {
                        this.divForm.form[this.gubunArr[i][0]].form.formUploadFiles();
                    }
                }
            }
            else
            {
                this.fnCallUploadCompleteDiv();
            }
        }

        //단계 화면별 업로드 완료 시점 최종 완료 여부 체크 함수
        this.fnCallUploadCompleteDiv = function(wfProcCd)
        {
            //trace("this.fnCallUploadCompleteDiv() wfProcCd : " + wfProcCd);

            if( !Ex.isEmpty(wfProcCd) )
            {
                var divForm = "divForm" + wfProcCd;
                for(var i=0; i<this.uploadFormDiv.length; i++)
                {
                    if(this.uploadFormDiv[i] == divForm)
                    {
                        this.uploadFormDiv.splice(i, 1)
                    }
                }
            }

            if(this.uploadFormDiv.length == 0)
            {
                if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")    this.divForm.form.divFormFile.form.fnUploadFiles(true);
                else                                                        this.fnSrCommSetPreSaveService();   //저장 전처리 함수 실행
            }
        }

        this.setWfProcDivFormSize = function(divObj, realSize)
        {
            trace("this.setWfProcDivFormSize() divObj.id:[" + divObj.id + "] realSize :[" + realSize + "]");
            for(var i=0; i<this.gubunArr.length; i++)
            {
                if(this.gubunArr[i][0] == divObj.id)
                {
                    this.gubunArr[i][1] = "Y";
                    this.gubunArr[i][2] = realSize;
                }
                trace("this.setWfProcDivFormSize() DIV ID:[" + this.gubunArr[i][0] + "] this.gubunArr[i][1]:[" + this.gubunArr[i][1] + "] this.gubunArr[i][2]:[" + this.gubunArr[i][2] + "]");
            }

            var isResizeProc = true;
            var targDivNm = "";
            for(var i=0; i<this.gubunArr.length; i++)
            {
                if(this.gubunArr[i][1] == "N")
                {
                    isResizeProc = false;
                    targDivNm = this.gubunArr[i][0];
                    trace(this.gubunArr[i][0] + " Form Resize 미완료");
                    break;
                }
            }

            if(isResizeProc)
            {
                trace("[SR0010_W] Resize 진행 시작");
            }
            else
            {
                trace(targDivNm + " Div Resize 미완료로 [SR0010_W] Resize 진행 대기");
            }

            for(var i=0; i<this.gubunArr.length; i++)
            {
                if(this.gubunArr[i][0] != "divFormAppv")
                {
                    if(i > 0)
                    {
                        var divH =  nexacro.toNumber(this.divForm.form[this.gubunArr[i-1][0]].top) +
                                    nexacro.toNumber(this.divForm.form[this.gubunArr[i-1][0]].height) + 20;
                        trace("i=" + i + " " + this.gubunArr[i][0] + " divH : " + divH);
                        this.divForm.form[this.gubunArr[i][0]].set_top(divH);
                    }
                    this.divForm.form[this.gubunArr[i][0]].set_height(this.gubunArr[i][2]);

                    this.bfBottomLastComp = this.divForm.form[this.gubunArr[i][0]];
                }
            }

            //최하단 Div 처리
            if(this.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
            {
                //trace("[SR0010_W]-this.wfProcForm() 첨부파일 DIV 처리");
                this.fileForm.parent.set_top(nexacro.toNumber(this.bfBottomLastComp.top) + nexacro.toNumber(this.bfBottomLastComp.height) + 20);
                //trace("[SR0010_W]-this.wfProcForm() 첨부파일 DIV 처리 Top:[" + this.fileForm.parent.top + "]");
            }

            if( !Ex.isEmpty(this.appvForm.parent.url) )
            {
                this.appvForm.parent.setOffsetTop(nexacro.toNumber(this.bfBottomLastComp.top) + nexacro.toNumber(this.bfBottomLastComp.height) + 20);
            }

            this.divForm.form.resetScroll();

            this.fnSizeChangeComplete(formObj, divObj.id);
        }

        this.fnSizeChangeComplete = function(scope, compId)
        {
            var allLoadYn = true;

            for(var i=0; i<formObj.gubunArr.length; i++)
            {
                if(formObj.gubunArr[i][1] != "Y")
                {
                    allLoadYn = false;
                }
            }

            trace("[SR0010_W] this.fnSizeChangeComplete() Load Complete allLoadYn=[" + allLoadYn + "]");

            if(allLoadYn)
            {
                for(var i=0; i<formObj.gubunArr.length; i++)
                {
                    trace("this.fnSizeChangeComplete() formObj.gubunArr[i][0] : " + formObj.gubunArr[i][0]);
                    if(formObj.gubunArr[i][0] != "divFormAppv")
                    {
                        Ex.util.setCompPropAll(formObj, formObj.divForm.form[formObj.gubunArr[i][0]].form, false);
                    }
                }
                formObj.setChangeEdit();

                /*
                var totHeight = 185;

                for(var i=0; i<formObj.gubunArr.length; i++)
                {
                    trace("i=" + i + " div : " + this.gubunArr[i][0] + " formObj.gubunArr[i][2] : " + formObj.gubunArr[i][2]);
                    if(formObj.gubunArr[i][2])
                    {
                        totHeight += (i>0 ? 20 : 0) + nexacro.toNumber(formObj.gubunArr[i][2], 0);
                    }
                }

                if(this.appvForm.parent.visible)
                {
                    totHeight += 20 + nexacro.toNumber(formObj.appvForm.parent.height, 0);
                }
                else
                {
                    if(formObj.dsFormInfo.getColumn(0, "ATTACH_USE_YN") == "Y")
                    {
                        totHeight += 20 + nexacro.toNumber(formObj.fileForm.parent.height, 0);
                    }
                }

                if(totHeight > 685)
                {
                    if(formObj.getOwnerFrame().height < 870)
                    {
                        formObj.getOwnerFrame().set_height(870);
                    }
                }
                else
                {
                    formObj.getOwnerFrame().set_height(totHeight + 185);
                }
                var nTop = parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(formObj.getOwnerFrame().height / 2) );
                formObj.getOwnerFrame().set_top(nTop);
                */
                //formObj.fnSrCommSetPreSelectService();    //조회 전처리 서비스 실행
            }
        }

        this.fnClose = function()
        {
        	Ex.core.pclose(this, this.getOwnerFrame().isSave ? "Y" : "N");
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
            //trace("[SR0010_W]-this.fnCommOnclick obj.id : " + obj.id);
            switch(obj.id)
            {
                case "btnSaveTemp" :    //임시저장 버튼
                    this.fnSave(true);
                    trace("[SR0010_W]-this.fnCommOnclick baseWfProcCd : " + this.baseWfProcCd + " dsFormInfo WF_PROC_CD : " + this.dsFormInfo.getColumn(0, "WF_PROC_CD"));
                    break;

                case "btnSave" :    //등록 버튼
                    this.fnSave(false);
                    break;

                case "btnRev" :     //접수(담당자) 버튼
        		case "btnScrnRtn" : //반려(담당자) 버튼
        			var curWfProcCd = this.dsFormInfo.getColumn(0, "WF_PROC_CD");   //실제 저장된 진행 단계
        			var curRow		= this.dsWfProc.findRow("WF_PROC_CD", curWfProcCd);
        			var curScrnType	= this.dsWfProc.getColumn(curRow, "SCRN_TYPE");

        			//alert("curWfProcCd : " + curWfProcCd + " curRow : " + curRow + " curScrnType : " + curScrnType);
        			if(obj.id == "btnRev")			this.fnRev();
        			else if(obj.id == "btnScrnRtn")	this.fnScrnRtn();
        			/*
        			if(curScrnType == "D")
        			{
        				if(obj.id == "btnApv")			this.fnRev();
        				else if(obj.id == "btnScrnRtn")	this.fnScrnRtn();
        			}
        			else if(curScrnType == "P")
        			{
        				var gubun = "";
        				if(obj.id == "btnRev")			gubun = "REV";
        				else if(obj.id == "btnScrnRtn")	gubun = "SCRN_RTRN";
        				this.fnRevPop(gubun);
        			}
        			*/
                    break;

                case "btnApv" :     //승인(결재/검토) 버튼
                case "btnRtn" :     //반려(결재/검토) 버튼
                    var gubun = "";
                    if(obj.id == "btnApv")  gubun = "APV";
                    else                    gubun = "RTRN";
                    this.fnApvPop(gubun);
                    break;

                case "btnDelete" :  //삭제 버튼
                    this.fnDelete();
                    break;

                case "btnCancel" :  //회수(취소) 버튼
                    this.fnCancel();
                    break;

                case "btnComment" :     //승인(결재/검토) 버튼
                    this.fnCommentPop();
                    break;

        //         case "btnQuit" :
        //             this.fnQuit();
        //             break;

                case "btnClose" :
                    /* 닫기 전 변경 체크에 대한 로직 작성 필요 */
                    Ex.core.pclose(this, this.getOwnerFrame().isSave ? "Y" : "N");
                    break;
            }
        }

        //WF_REQ_TMPLAT_PROC_DT 내역 Dataset 출력
        this.btnPrintDsWfProc_onclick = function(obj,e)
        {
            trace("[Dataset] this.dsWfProc\n" + this.dsWfProc.saveXML());
        };

        this.formOnRbuttonUp = function(obj,e)
        {
            if(e.ctrlkey && e.shiftkey)
            {
                this.btnPrintDsWfProc.set_visible(!this.btnPrintDsWfProc.visible);
                this.btn00.set_visible(!this.btn00.visible);
            }
        };

        this.btn00_onclick = function(obj,e)
        {
            for(var i=0; i<this.gubunArr.length; i++)
            {
                trace("this.divForm.form[" + this.gubunArr[i][0] + "].editYn : " + this.divForm.form[this.gubunArr[i][0]].editYn);
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onrbuttonup",this.formOnRbuttonUp,this);
            this.divBottomButton.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnSaveTemp.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnScrnRtn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnRev.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnCancel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnRtn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottomButton.form.btnApv.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnPrintDsWfProc.addEventHandler("onclick",this.btnPrintDsWfProc_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btnComment.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnQuit.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0010_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
