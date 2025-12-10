(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SR0030_P01");
            this.set_titletext("접수반려의견작성(기본화면)");
            this.set_scrolltype("none");
            this.set_cssclass("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,277);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGrdTopBtn",null,null,"425","24","18.48%","626",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_isButtonGroup("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","60",null,"0","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60",null,"65","0",null,null,null,null,this.divGrdTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            this.divGrdTopBtn.addChild(obj.name, obj);

            obj = new Static("staAuthTitle","1520","70","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자의 권한그룹");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_POP_msg_btnbg");
            this.addChild(obj.name, obj);

            obj = new Button("btnProc",null,null,"100","32","125","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("btn_WF_primary_save");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"100","32","20","14",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_primary_close");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContent","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","20",null,null,"0",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("Static00_02","0",null,null,"20","0","0",null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_background("#e5dbfa");
            obj.set_text("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcBg01_00_00","20.00","34",null,"163","20",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcOpinion","20.00","34","90","163",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_inputTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new TextArea("txaOpinion","115.00","39",null,"153","25",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_cssclass("txa_WF_normal");
            obj.set_enable("true");
            obj.set_validationGroup("fvValiCmp");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTitle","20.00","0","129","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridTitle");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcEmpty01","0","24",null,"10","0",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_background("rgba(173,142,219,0.4)");
            obj.set_text("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_visible("false");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdTopBtn.form
            obj = new Layout("default","",0,0,this.divGrdTopBtn.form,function(p){});
            this.divGrdTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,277,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContent.form.txaOpinion","value","dsRtn","OPINION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SR0030_P01.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)    ︰ SR0030_P01
        * 화면(명) ︰ 검토의견 공통
        * 메뉴(경로)    ︰ 공통
        * 화면 설명 ︰ SPP 검토의견 작성 팝업
        * 작성자       ︰ WEMB
        * 작성일       ︰ 2023.07.18
        * 수정이력  ︰
        *------------------------------------------------------------------
        * 수정일           작성자 이력
        *------------------------------------------------------------------
        * 2023.07.18    WEMB    최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/
        this.isOpinEss = false; //의견 필수 입력 여부
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
            this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {
        	if( Ex.isEmpty(this.getOwnerFrame().pIS_CONFIRM) )	this.getOwnerFrame().pIS_CONFIRM = false;

            if( Ex.isEmpty(this.getOwnerFrame().pIS_OPIN_ESS) )
            {
                this.isOpinEss = false;
            }
            else
            {
                if(this.getOwnerFrame().pIS_OPIN_ESS)   this.isOpinEss = true;
                else                                    this.isOpinEss = false;
            }

            if( Ex.isEmpty(this.getOwnerFrame().pSAVE_GUBUN) )
            {
                var param = {id : "pAlertSaveGubunI", msg : "접수/반려/종료에 대한 구분값이 올바르지 않습니다."};
                Ex.core.alert(this, param);
                return;
            }
            else
            {
                var btnText = "";

                this.dsRtn.setColumn(0, "SAVE_GUBUN", this.getOwnerFrame().pSAVE_GUBUN);

        		if(this.getOwnerFrame().pSAVE_GUBUN == "APV")       btnText = Ex.isNvl(this.getOwnerFrame().pBtnText, "승인");
                else if(this.getOwnerFrame().pSAVE_GUBUN == "REV")  btnText = Ex.isNvl(this.getOwnerFrame().pBtnText, "접수");
                else if(this.getOwnerFrame().pSAVE_GUBUN == "RTRN") btnText = Ex.isNvl(this.getOwnerFrame().pBtnText, "반려");
        		else if(this.getOwnerFrame().pSAVE_GUBUN == "EXAM") btnText = Ex.isNvl(this.getOwnerFrame().pBtnText, "검토");
        		else if(this.getOwnerFrame().pSAVE_GUBUN == "END")	btnText = Ex.isNvl(this.getOwnerFrame().pBtnText, "종료");

                this.divBottom.form.btnProc.set_text(btnText);
                this.divContent.form.stcOpinion.set_text(btnText + " 의견");
                this.divContent.form.stcTitle.set_text(btnText + " 의견 작성");

                if(this.isOpinEss)
                {
                    this.divContent.form.stcOpinion.set_cssclass("sta_WF_inputTitle_E");
                    this.divContent.form.txaOpinion.set_validation(btnText + " 의견;NULL");
                }

                if(this.getOwnerFrame().pSAVE_GUBUN == "EXAM")
                {
                    this.divContent.form.stcOpinion.set_text("검토 의견");
                    this.divBottom.form.btnProc.set_text("확정");
                }
                else if(this.getOwnerFrame().pSAVE_GUBUN != "REV" && this.getOwnerFrame().pSAVE_GUBUN != "RTRN" &&
        				this.getOwnerFrame().pSAVE_GUBUN != "APV" && this.getOwnerFrame().pSAVE_GUBUN != "EXAM" &&
        				this.getOwnerFrame().pSAVE_GUBUN != "END")
                {
                    var param = {id : "pAlertSaveGubunI", msg : "접수/승인/반려/종료에 대한 구분값이 올바르지 않습니다."};
                    Ex.core.alert(this, param);
                    return;
                }
            }

            if( !Ex.isEmpty(this.getOwnerFrame().pOPINION) ) this.dsRtn.setColumn(0, "OPINION", this.getOwnerFrame().pOPINION);
            this.divContent.form.txaOpinion.setFocus();
        }


        /***********************************************************************************
         * Common Function
         ***********************************************************************************/

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
                case "" :
                    break;
            }
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID, varValue)
        {
            // TO DO
            // 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
            switch (sSvcId)
            {
                case "" :
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
                case "pAlertSaveGubunI" :   // 그냥 닫기
                    this.dsRtn.setColumn(0, "RESULT", "CLOSE");
                    Ex.core.pclose(this, this.dsRtn.saveXML());
                    break;

                case "pConfirm" :           // 접수/반려 버튼
                    this.dsRtn.setColumn(0, "RESULT", "PROC");
                    Ex.core.pclose(this, this.dsRtn.saveXML());
                    break;
            }
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        this.fnCheckValidate = function()
        {
            if( !Ex.util.checkValidate(this.divContent, "fvValiCmp") ) return false;
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
                case "btnProc" :
                    if( !this.fnCheckValidate() )   return;

                    if( !Ex.isEmpty(this.getOwnerFrame().pIS_CONFIRM) && this.getOwnerFrame().pIS_CONFIRM )
                    {
                        var param = {
                                    id : "pConfirm"
                                  , msg : "10008"
                                  , arrparam : [this.divBottom.form.btnProc.text]
                                  , msgtype : "I"};
                        Ex.core.confirm(this, param);
        			}
                    else
                    {
                        this.fnMsgAfter("pConfirm", true);
                    }
                    break;

                case "btnClose" :
                    Ex.core.pclose(this);
                    break;
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrdTopBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divGrdTopBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnProc.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBottom.form.btnClose.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("SR0030_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
