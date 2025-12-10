(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFOMM0110_W");
            this.set_titletext("사용자관리");
            this.set_scrolltype("none");
            this.set_cssclass("");
            this.getSetter("classname").set("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">aa</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">bb</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">cc</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc00","35.00","8","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("NanumSqurae ABCDabcd가나다라");
            obj.set_font("14px \'PretendardR\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","35.00","stc00:10","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Pretendard ABCDabcd가나다라");
            obj.set_font("14px \'PretendardR\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_01","35.00","318","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("NanumSqurae ABCDabcd가나다라");
            obj.set_font("14px \'PretendardB\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","35.00","360","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Pretendard ABCDabcd가나다라");
            obj.set_font("14px \'PretendardB\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_02","35.00","93","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ABCDabcd가나다라 - NanumSqurae ");
            obj.set_font("bold 14px \'PretendardR\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00_01","35.00","135","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("ABCDabcd가나다라 - Pretendard");
            obj.set_font("bold 14px \'PretendardR\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","777","124","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("grd_WF_normal");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"Column0\"/><Cell col=\"3\" text=\"Column1\"/><Cell col=\"4\" text=\"Column2\"/></Band><Band id=\"body\"><Cell displaytype=\"editcontrol\" edittype=\"none\" text=\"기타\" padding=\"4px\" cssclass=\"grdBCelledit_WF_readonly\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" cssclass=\"grdCellCtrl_WF_normal\" text=\"기타\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_00","35.00","175","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ABCDabcd가나다라 - KopubL   2024-12-31");
            obj.set_font("12px \'KoPubL\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00","35.00","400","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("KoPub ABCDabcd가나다라");
            obj.set_font("14px \'KoPubB\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","721","13","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("20241231");
            obj.set_font("12px \'KoPubL\'");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","890.00","41","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_normal");
            obj.set_value("20241231");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","890.00","76","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_normal");
            obj.set_value("20241231");
            obj.set_font("12px \'KoPubL\'");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_01","721.00","48","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("20241231");
            obj.set_font("12px \'KoPubM\'");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_01_00","721.00","78","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("20241231");
            obj.set_font("12px \'KoPubB\'");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkSet00","1400.00","15","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_cssclass("chkset_WF_checklist");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_direction("horizontal");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkSet00_00","1180.00","15","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_direction("horizontal");
            obj.set_padding("0px 10px 0px 0px ");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","1180.00","50","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","1400.00","50","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_padding("0px 10px 0px 6px");
            obj.set_cssclass("rdo_WF_checklist");
            obj.set_direction("vertical");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_00_00","35.00","220","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("ABCDabcd가나다라 - KopubL   2024-12-31");
            obj.set_font("12pt \'KoPubL\'");
            obj.set_border("1px solid #dfdfdf");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("TEST_W.xfdl", function() {
        /***********************************************************************************
        * 화면(ID)		︰ FOMM0110_W
        * 화면(명)		︰ 사용자 관리
        * 메뉴(경로)	︰ 관리자 > 사용자 > 사용자 관리
        * 화면 설명	︰ SPP 기본 사용자 관리 화면
        * 작성자		︰ WEMB
        * 작성일		︰ 2023.04.06
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일        작성자		이력
        *------------------------------------------------------------------
        * 2023.04.06	 WEMB			최초작성
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
        	// 업무화면 laod 전 공통 처리를 위한 함수.
        	// 업무단 소스는 fnInit을 onload로 취급하고 fnInit에 기술할 것.
        	this.gfnFormOnLoad(this, this.fnInit);
        }

        this.fnInit = function()
        {

        }



        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 검색조건 초기화
        this.fnSearchReset = function()
        {
        }

        // 변경 행 확인
        this.fnSearch = function()
        {

        }


        this.fnSave = function()
        {
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




        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	switch(obj.name)
        	{

        	}
        }

        this.chkSet00_onitemchanged = function(obj,e)
        {

        };

        this.chkSet00_00_onsetfocus = function(obj,e)
        {
        	var aa = obj.form.components;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.chkSet00.addEventHandler("onitemchanged",this.chkSet00_onitemchanged,this);
            this.chkSet00_00.addEventHandler("onitemchanged",this.chkSet00_onitemchanged,this);
            this.chkSet00_00.addEventHandler("onsetfocus",this.chkSet00_00_onsetfocus,this);
        };
        this.loadIncludeScript("TEST_W.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
