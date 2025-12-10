(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref20");
            this.set_titletext("그리드복사");
            this.getSetter("classname").set("ref08");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPage", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"string\" size=\"255\"/><Column id=\"Column1\" type=\"string\" size=\"255\"/><Column id=\"Column2\" type=\"string\" size=\"255\"/><Column id=\"Column3\" type=\"string\" size=\"255\"/><Column id=\"Column4\" type=\"string\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">AA</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">5</Col></Row><Row><Col id=\"Column0\">BB</Col><Col id=\"Column1\">22</Col><Col id=\"Column2\">33</Col><Col id=\"Column3\">44</Col><Col id=\"Column4\">55</Col></Row><Row><Col id=\"Column1\">222</Col><Col id=\"Column2\">333</Col><Col id=\"Column3\">444</Col><Col id=\"Column4\">555</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">AA</Col><Col id=\"NAME\">가나다</Col></Row><Row><Col id=\"CODE\">BB</Col><Col id=\"NAME\">라마바</Col></Row><Row><Col id=\"NAME\">-선택-</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList1","0","56","503","111",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsPage");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" combodataset=\"dsCode\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"readonly\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnUseCopy3","648","296","120","110",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("useCopy=true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","btnUseCopy3:5","56",null,"589","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList2","0","175","503","111",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsPage");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("multirow");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"readonly\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","grdList1:5","56","134","111",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("좌측 Grid\nselecttype=row");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00","grdList2:5","175","134","111",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("좌측 Grid\nselecttype=multirow");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList3","0","295","503","111",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsPage");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00_00","509","295","134","111",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("좌측 Grid\nselecttype=cell");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList4","0","414","503","111",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsPage");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("area");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00_00_00","grdList4:5","414","134","111",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("좌측 Grid\nselecttype=area");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList5","0","534","503","111",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsPage");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("multiarea");
            obj.set_cssclass("grd_WF_normal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00_00_00_00","grdList5:5","534","134","111",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("좌측 Grid\nselecttype=multiarea");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUseCopy1","TextArea01:5","57","120","110",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("useCopy=true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUseCopy2","TextArea01_00:5","176","120","110",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("useCopy=true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUseCopy4","TextArea01_00_00_00:5","415","120","110",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("useCopy=true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUseCopy5","TextArea01_00_00_00_00:5","535","120","110",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("useCopy=true");
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
        this.registerScript("ref20.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 그리드 복사
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
        // 페이징 처리를위한 폼 변수(약속된 폼변수)
        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
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
        		case "search" :
        			// 조회페이지 정보갱신및 페이지 디스플레이를 위한 호출(필수)
        			this.divPage.pageDisp();
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	trace("pID="+pID+" ,varValue="+varValue);
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
        // 공통 onclick : component
        this.fnCommOnclick = function(obj, e)
        {
        	var btn = nexacro.replaceAll(obj.name, "btnUseCopy", "");

        	var useCopy = this["grdList" + btn].useCopy;
        	trace("this.fnCommOnclick() useCopy : " + useCopy);
        	this["grdList" + btn].set_useCopy(!useCopy);
        	obj.set_text("useCopy=" + (!useCopy));

        	trace("this.fnCommOnclick() grdList" + btn + " useCopy : " + this["grdList" + btn].useCopy);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnUseCopy3.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnUseCopy1.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnUseCopy2.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnUseCopy4.addEventHandler("onclick",this.fnCommOnclick,this);
            this.btnUseCopy5.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
