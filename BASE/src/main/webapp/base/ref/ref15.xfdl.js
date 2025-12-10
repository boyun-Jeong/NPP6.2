(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref14");
            this.set_titletext("버튼 권한/align");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea00","5","280",null,null,"50.22%","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("- ref::ref15.xfdl \n\n지정한 권한에 따라 지정한 버튼을 visible처리하는 API : Ex.util.setBtnVisible(scope, authType, arrBtn);\n\t\n1. Parameter\n  - scoppe   : 권한 조회할 화면; this; 팝업인 경우 최초 호출한 화면의 권한을 따라간다.\n  - authType : 적용할 메뉴권한구분 (대/소문자 구분 X)\n\t\t\"\" :\t\t\t전부 visible 처리\n\t\t\"READ\" :\t\t조회권한\n\t\t\"WRITE\" :\t\t쓰기권한\n\t\t\"DELETE\" :\t\t삭제권한\n\t\t\"SAVE\" :\t\t저장권한\n\t\t\"EXCLDOWN\" :\t엑셀다운권한\n\t\t\"REPORTPRNT\" :\t리포트출력권한\n\t\t\"FILEUP\" :\t\t파일첨부권한\n  - arrBtn   : 권한을 적용할 Button 객체 배열\n2. 기능\n  - scope의 메뉴권한을 조회한다.\n  - 조회한 권한 중 authType에 지정된 권한에 따라\n  - arrBtn 배열 각 버튼의 visible을 처리한다.\n  \n3. 사용 예시\nvar arrBtn = [this.divGrdTopBtn.form.btnAdd\n\t\t\t ,this.btnAdd\n\t\t\t];\t// 쓰기권한 매핑\nEx.util.setBtnVisible(this, \'write\', arrBtn);");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01",null,"11","220","58","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("- ref::ref15.xfdl \n*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea2","50.71%","280",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("- ref::ref15.xfdl \n\ndiv 안의 button을 visible 여부에 따라 좌/우 정렬하는 API : Ex.util.setBtnAlign(objDiv, align, compVisible);\n\t\n1. Parameter\n  - objDiv   : 버튼을 감싸고 있는 Div\n  - align    : 적용할 align (대/소문자 무관) (string)\n\t\t\"right\": 버튼 오른쪽 정렬(default)\n\t\t\"left\" : 버튼 왼쪽 정렬 \n  - compVisible : 정렬 visible 기준 (bool)\n\t\ttrue  : visible컴포넌트대상(default)\n\t\tfalse : visible 상관없이 모든 컴포넌트 대상\n2. 기능\n  - objDiv 안의 모든 Button을 compVsible에 따라 읽어들인다.\n  - 읽어드린 버튼을 align에 따라 재배치한다.\n  \n3. 사용 예시\nEx.util.setBtnAlign(this.divBtn, \'right\', true);");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaAuth","5","10","195","230",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn","29.89%","36","620","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"4","60","24","448",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"4","60",null,"383","10",null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"80","32","276","6",null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_primary_save");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"4","80","24","190",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_add");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnREport",null,"4","70",null,"115","10",null,null,null,null,this.divBtn.form);
            obj.set_taborder("4");
            obj.set_text("레포트");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnFileup",null,"4","80",null,"29","10",null,null,null,null,this.divBtn.form);
            obj.set_taborder("5");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_del");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSearch","0","3","75","24",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("Button00","220","41","304","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("setBtnVisible");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","66.3%","41","304","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("setBtnAlign(this.divBtn,  \'right\', true)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","66.3%","81","304","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("setBtnAlign(this.divBtn,  \'right\', false)");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","66.3%","121","304","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("setBtnAlign(this.divBtn,  \'left\', true)");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","66.3%","161","304","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("setBtnAlign(this.divBtn,  \'left\', false)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

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
        this.registerScript("ref15.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 버튼 권한/align
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
        	this.getOwnerFrame().info.deleteYn = 'N';
        	this.getOwnerFrame().info.exclDownYn = 'N';
        	this.getOwnerFrame().info.reportPrntYn = 'N';

        	var oAuth = Ex.util.getMenuAuth(this);
        	var str = '현재 화면 권한\n';
        	for(var key in oAuth)
        		str += key + ': ' + oAuth[key] + '\n';

        	this.txaAuth.set_value(str);
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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
        this.fnMsgAfter = function(mID, varValue)
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

         /**
          * div안의 버튼을 정렬한다.
          * @param {object} objDiv : 정렬할 div
          * @param {string} align : 'left', 'right'(default)
          * @param {bool} compVisible : true-visible버튼 대상(default) / false-visible상관없이 모든 버튼 대상
          * @return null
          * @description
          *  args
          * @example
          * Ex.util.setBtnAlign(this.div01, 'right', true);
          * @memberOf Ex.util
          **/
        this.fnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "Button01" :	Ex.util.setBtnAlign(this.divBtn,  'right', true);	break;
        		case "Button02" :	Ex.util.setBtnAlign(this.divBtn,  'right', false);	break;
        		case "Button03" :	Ex.util.setBtnAlign(this.divBtn,  'left', true);	break;
        		case "Button04" :	Ex.util.setBtnAlign(this.divBtn,  'left', false);	break;
        	}
        };




        /**
          * scope의 메뉴권한을 보고 authDiv에 따라 배열 각 버튼의 visible 처리 api
          * @param {object} scope : 호출 스코프(this)
          * @param {string} authType : 적용할 메뉴권한구분 key
          * @param {array} arrBtn : 메뉴권한 적용할 버튼 객체 배열
          * @return null
          * @description
          *  1) scope의 메뉴권한을 조회하고
          *  2) 적용할 메뉴권한구분에 따라
          *  3) 각 버튼 객체의 visible을 처리한다.
          * @example
          * var arrBtn = [this.div01.form.btnSave, this.btnSave];
          * Ex.util.setBtnVisible(this, 'save', arrBtn);
          * @memberOf Ex.util
          **/
        this.Button00_onclick = function(obj,e)
        {
        	Ex.util.setBtnVisible(this, 'read',			[this.divBtn.form.btnSearch]);
        	Ex.util.setBtnVisible(this, 'write', 		[this.divBtn.form.btnAdd]);
        	Ex.util.setBtnVisible(this, 'delete', 		[this.divBtn.form.btnDelete]);
        	Ex.util.setBtnVisible(this, 'save', 		[this.divBtn.form.btnSave]);
        	Ex.util.setBtnVisible(this, 'exclDown', 	[this.divBtn.form.btnExcel]);
        	Ex.util.setBtnVisible(this, 'reportPrnt',	[this.divBtn.form.btnREport]);
        	Ex.util.setBtnVisible(this, 'fileUp', 		[this.divBtn.form.btnFileup]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtn.form.btnAdd.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnDelete.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnExcel.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnREport.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnFileup.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divBtn.form.btnSearch.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button02.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button03.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button04.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
