(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref99");
            this.set_titletext("스크립트 양식샘플");
            this.getSetter("classname").set("ref99");
            if (Form == this.constructor)
            {
                this._setFormPosition(1820,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"cd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"nm\">Dataset</Col><Col id=\"cd\">ds</Col></Row><Row><Col id=\"nm\">Button</Col><Col id=\"cd\">btn</Col></Row><Row><Col id=\"nm\">Static</Col><Col id=\"cd\">stc</Col></Row><Row><Col id=\"nm\">Div</Col><Col id=\"cd\">div</Col></Row><Row><Col id=\"nm\">Edit</Col><Col id=\"cd\">edt</Col></Row><Row><Col id=\"nm\">CheckBox</Col><Col id=\"cd\">chk</Col></Row><Row><Col id=\"nm\">TextArea</Col><Col id=\"cd\">txa</Col></Row><Row><Col id=\"nm\">ListBox</Col><Col id=\"cd\">lsb</Col></Row><Row><Col id=\"nm\">MaskEdit</Col><Col id=\"cd\">msk</Col></Row><Row><Col id=\"nm\">Spin</Col><Col id=\"cd\">spn</Col></Row><Row><Col id=\"nm\">Radio</Col><Col id=\"cd\">rdo</Col></Row><Row><Col id=\"nm\">Combo</Col><Col id=\"cd\">cbo</Col></Row><Row><Col id=\"nm\">MultiSelectCombo</Col><Col id=\"cd\">mcbo</Col></Row><Row><Col id=\"nm\">ImageView</Col><Col id=\"cd\">img</Col></Row><Row><Col id=\"nm\">Calendar</Col><Col id=\"cd\">cal</Col></Row><Row><Col id=\"nm\">Grid</Col><Col id=\"cd\">grd</Col></Row><Row><Col id=\"nm\">Tab</Col><Col id=\"cd\">tab</Col></Row><Row><Col id=\"nm\">tabpage</Col><Col id=\"cd\">tpg</Col></Row><Row><Col id=\"nm\">GroupBox</Col><Col id=\"cd\">gbx</Col></Row><Row><Col id=\"nm\">WebBrowser</Col><Col id=\"cd\">web</Col></Row><Row><Col id=\"nm\">PopupDiv</Col><Col id=\"cd\">pdv</Col></Row><Row><Col id=\"nm\">Menu</Col><Col id=\"cd\">mnu</Col></Row><Row><Col id=\"nm\">PopupMenu</Col><Col id=\"cd\">pmn</Col></Row><Row><Col id=\"nm\">ProgressBar</Col><Col id=\"cd\">pbar</Col></Row><Row><Col id=\"nm\">ListView</Col><Col id=\"cd\">lsv</Col></Row><Row><Col id=\"nm\">Sketch</Col><Col id=\"cd\">skc</Col></Row><Row><Col id=\"nm\">VideoPlayer</Col><Col id=\"cd\">vdp</Col></Row><Row><Col id=\"nm\">GoogleMap</Col><Col id=\"cd\">ggm</Col></Row><Row><Col id=\"nm\">Graphics</Col><Col id=\"cd\">gpc</Col></Row><Row><Col id=\"nm\">View</Col><Col id=\"cd\">vw</Col></Row><Row><Col id=\"nm\">WebView</Col><Col id=\"cd\">wev</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("TextArea00","0","20","355","430",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("UI 스크립트 기본양식\n\n- ref::ref99.xfdl\n- 스크립트 기본양식은 Script 참조\n\n- 작업영역 화면 기본사이즈\n  1840(가로) * 720(세로)\n\n- 상/하 여백 0px\n- 화면 디자인 시작점 L:0 , T:0\n- 화면 가로배치는 벗어날수 -> 없고, \n  화면 세로배치는 벗어날수 -> 있다.\n  이때에도 폼사이즈는 변경없음\n\n* 화면 디자인시를 제외하고 불필요한\n  컴포넌트는 반드시 제거하도록 한다.\n\n* 폼 onload이벤트에 form_onload로 \n  폼로드 이벤트를 등록하고\n  공통함수 this.gfnFormOnLoad(obj);\n  함수를 가장상단에 기술한다.\n\n* 폼변수 선언\n  Form Variable영역에 기술한다.\n  var로 선언하지 말고 \n  \'this.변수명\'으로 기술한다.");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","360","20","172",null,null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"컴포넌트 접두어\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:nm\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:cd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","450","350","190",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'red\'>※ 코딩 시 순서 준수 사항(스크립트 소스탭참조)</fc>\r\n1. 화면주석 \r\n2. Script Include <fc v=\'blue\'>- 공통 라이브러리</fc>\r\n3. 화면 변수 선언부 <fc v=\'blue\'>- 화면 전역변수</fc>\r\n4. Form 관련 Event 처리(필수) <fc v=\'blue\'>- 화면 onload</fc>\r\n5. 공통함수 영역  <fc v=\'blue\'>- 조회,초기화,저장 함수</fc>\r\n6. CallBack 영역 <fc v=\'blue\'>- tr,팝업,메시지 callback 함수</fc>\r\n7. 사용자 FUNCTION 영역 (필수) <fc v=\'blue\'>- 개발자가 작성한 로컬 함수</fc>\r\n8. 각 COMPONENT 별 EVENT 영역 (필수) <fc v=\'blue\'>- 이벤트 영역 함수</fc>\r\n\r\n* UI공통에서 제공하는 기본 include는 없음");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","535","20",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("/***********************************************************************************\n* 화면 ID\t\t︰ ref99\n* 화면(명)\t\t︰ Script 양식 샘플\n* 메뉴(경로)\t︰ 공통\n* 화면 설명\t︰ \n* 작성자\t\t︰ WEMB\n* 작성일\t\t︰ \n* 수정이력\t\t︰\n*------------------------------------------------------------------\n* 수정일\t\t작성자\t\t이력\n*------------------------------------------------------------------\n* 2023.04.00\tWEMB\t\t최초작성\n*------------------------------------------------------------------\n***********************************************************************************/\n/***********************************************************************************\n * Script Include \n ***********************************************************************************/\n\n/***********************************************************************************\n * Form Variable\n ***********************************************************************************/\nthis.fvVar;  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.\n/***********************************************************************************\n * Form Function\n ***********************************************************************************/\nthis.form_onload = function(obj:Form, e:nexacro.LoadEventInfo)\n{\n\t// 화면 초기 세팅\n\t// 이외는 기술하지 말것\n\tthis.gfnFormOnLoad(obj, this.fnInit);\n}\n\nthis.fnInit = function()\n{\n\t// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것\n\ttrace(\"workArea form init call\");\n}\n\n// 필요시 폼관련 이벤트는 여기 추가\n/***********************************************************************************\n * Common Function\n ***********************************************************************************/\n// 검색조건 초기화\nthis.fnSearchReset = function()\n{\n\n}\n\n// 조회\nthis.fnSearch = function()\n{\n\n}\n\n// 저장\nthis.fnSave = function()\n{\n\ttrace(\"fnSave call\");\n}\n\n// 공통 삭제 func. ROWFLAG가 \'I\'면 행 삭제, \'U\'/\'\'면 \'D\'로 변경, \'D\'면 원복\nthis.fnDelete = function(objDs:Dataset)\n{\n\tobjDs.set_enableevent(false);\t\n\tobjDs.set_filterstr(\"CHK==\'1\'\");\n\tfor(var i = 0; i < objDs.rowcount; i++)\t\n\t\tobjDs.setDeleteRow(i);\n\tobjDs.set_filterstr(\"\");\n\tobjDs.set_enableevent(true);\n}\n\n/***********************************************************************************\n * CallBack Event \n ***********************************************************************************/\n// Transaction 디폴트 콜백함수\nthis.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)\n{\n\t// 에러메세지 처리\n\tif (nErrorCode < 0) \n\t{\n\t\tvar param = {id : \"ERROR\", msg : sSvcId+\"::\"+nErrorCode+\"::\"+sErrorMsg};\n\t\tEx.core.error(this, param);\n\t\treturn;\n\t}\n\t\t\t\n\t// 각 Transaction별 CallBack 처리\n\tswitch (sSvcId)\n\t{\t\t\n\t\tcase \"ABOUT\" : // 서비스 ID\n\t\t\tbreak;\t\n\t}\n}\n\n// 팝업 디폴트 콜백함수\nthis.fnPopupAfter = function(pID,varValue)\n{\n\t// TO DO\n\t// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)\n}\n\n// alert/confirm/error 메시지창 디폴트 콜백함수\nthis.fnMsgAfter = function(mID,varValue)\n{\n\t// TO DO\n\t// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)\n\t// alert/error : 무조건 true 반환\n\t// confirm     : true/false 선택적 반환\n}\n\n/***********************************************************************************\n * User Function\n ***********************************************************************************/\n\n/***********************************************************************************\n * Component Event\n ***********************************************************************************/\n// component onclick event. \nthis.fnCommOnclick = function(obj:objects, e:nexacro.ClickEventInfo)\n{\t\n\t// TO DO\n\t// 개발자가 컴포넌트 onclick event를 \'fnCommOnclick\'으로 지정하고 컴포넌트 id로 구분하여 작성\n\tswitch(obj.name)\n\t{\n\t\tcase \"\" :\n\t\t\n\t\t\tbreak;\n\t}\n}");
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
        this.registerScript("ref99.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ ref99
        * 화면(명)		︰ Script 양식 샘플
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
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
        this.fvVar;  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.
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
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	trace("workArea form init call");
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

        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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
        		case "ABOUT" : // 서비스 ID
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
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

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
        		case "" :

        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("ref99.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
