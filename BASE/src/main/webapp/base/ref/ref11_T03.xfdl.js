(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref11_T03");
            this.set_titletext("Ex.util.checkType");
            if (Form == this.constructor)
            {
                this._setFormPosition(970,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExUtil", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"string\" size=\"256\"/><Column id=\"name\" type=\"string\" size=\"256\"/><Column id=\"note\" type=\"string\" size=\"256\"/><Column id=\"exam\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;NUMBER&quot;,1234);&#10;  *  var bool = Ex.util.checkType(&quot;NUMBER&quot;,&quot;1234&quot;);&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;NUMBER&quot;,&quot;1234&quot;)</Col><Col id=\"title\">값이 숫자인지 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;EMAIL&quot;,&quot;test@naver.com&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;EMAIL&quot;,&quot;test@naver.com&quot;)</Col><Col id=\"title\">EMAIL 형식을 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;PHONE&quot;,&quot;02-1234-1234&quot;); // true&#10;  *  var bool = Ex.util.checkType(&quot;PHONE&quot;,&quot;0212341234&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;PHONE&quot;,&quot;02-1234-1234&quot;)</Col><Col id=\"title\">전화번호 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;MOBILE&quot;,&quot;01012341234&quot;); // true&#10;  *  var bool = Ex.util.checkType(&quot;MOBILE&quot;,&quot;010-1234-1234&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;MOBILE&quot;,&quot;010-1234-1234&quot;)</Col><Col id=\"title\">모바일번호 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;JUMINNO&quot;,&quot;6407131018433&quot;); // true&#10;  *  var bool = Ex.util.checkType(&quot;JUMINNO&quot;,&quot;640713-1018433&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;JUMINNO&quot;,&quot;640713-1018433&quot;)</Col><Col id=\"title\">주민번호 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;BIZNO&quot;,&quot;2208162517&quot;); // true&#10;  *  var bool = Ex.util.checkType(&quot;BIZNO&quot;,&quot;220-81-62517&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;BIZNO&quot;,&quot;2208162517&quot;)</Col><Col id=\"title\">사업자번호 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;CORPNO&quot;,&quot;1201110001743&quot;); // true&#10;  *  var bool = Ex.util.checkType(&quot;CORPNO&quot;,&quot;120111-0001743&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;CORPNO&quot;,&quot;1201110001743&quot;)</Col><Col id=\"title\">법인번호 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE &#10;  *  - JUMINNO , BIZNO , CORPNO&#10;  *  - YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;YYYYMM&quot;,&quot;204707&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;YYYYMM&quot;,&quot;204707&quot;)</Col><Col id=\"title\">년월 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE &#10;  *  - JUMINNO , BIZNO , CORPNO&#10;  *  - YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;YYYYMMDD&quot;,&quot;20470701&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;YYYYMMDD&quot;,&quot;20470701&quot;)</Col><Col id=\"title\">년월일 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE &#10;  *  - JUMINNO , BIZNO , CORPNO&#10;  *  - YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;YYYYMMDDHHMI&quot;,&quot;204707011512&quot;); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;YYYYMMDDHHMI&quot;,&quot;204707011512&quot;)</Col><Col id=\"title\">년월일시분 형식 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE &#10;  *  - JUMINNO , BIZNO , CORPNO&#10;  *  - YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;FROMTOMONTH&quot;,[&quot;201701&quot;,&quot;201705&quot;]); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;FROMTOMONTH&quot;,[&quot;201701&quot;,&quot;201705&quot;])</Col><Col id=\"title\">시작월과 종료월 체크</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.checkType</Col><Col id=\"note\">/**&#10;  * 특정 형태의 데이타의 구성형식을 체크한다.&#10;  * @param {scope} form&#10;  * @param {string} typeStr 체크할 타입의 문자열&#10;  * @param {value} value 체크할 값&#10;  * @return {boolean} true : valid , false: invalid&#10;  * @description &#10;  *  체크대상 문자열&#10;  *  - NUMBER , EMAIL , PHONE , MOBILE &#10;  *  - JUMINNO , BIZNO , CORPNO&#10;  *  - YYYYMM ,YYYYMMDD , YYYYMMDDHHMI&#10;  * @example&#10;  *  var bool = Ex.util.checkType(&quot;FROMTOMONTH&quot;,[&quot;20170101&quot;,&quot;20170501&quot;]); // true&#10;  * @memberOf Ex.util&#10;  **/</Col><Col id=\"exam\">Ex.util.checkType(&quot;FROMTODATE&quot;,[&quot;20170101&quot;,&quot;20170501&quot;])</Col><Col id=\"title\">시작일과 종료일 체크</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdExUtilList","5","15",null,null,"460","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsExUtil");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.getSetter("domainId").set("nexa.id;nexa.name;nexa.dspt;nexa.password;nexa.phone;nexa.createdate;nexa.createuser;nexa.updatedate;nexa.updateuser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"320\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"함수명\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band><Band id=\"body\" style=\"cellbackground2: ;\"><Cell style=\"align:right middle;\" expr=\"currow+1\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:name\" tooltiptext=\"bind:title\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:title\" tooltiptext=\"bind:title\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" style=\"font:8 arial;\" text=\"excute\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"15","163","33","288",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtExample",null,"15","270","33","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02",null,"52","434","35","15",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaNote",null,"121","436",null,"15","5",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"93","120","26","331",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("note");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dsExUtil","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtExample","value","dsExUtil","exam");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit02","value","dsExUtil","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","txaNote","value","dsExUtil","note");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref11_T03.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ Ex Utility
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
        	trace("ref11_T03 workArea form init call");
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
        this.grdExUtilList_oncellclick = function(obj, e)
        {
        	if( e.cell != 3 ) return;
        	var dsObj = obj.getBindDataset();

        	if (e.cell == 3)
        	{
        		var sFunc = dsObj.getColumn(e.row, "exam");
        		var result = eval(sFunc);
        		var param = {id : "pAlertI", msg : "" + result};
        		Ex.core.alert(this, param);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdExUtilList.addEventHandler("oncellclick",this.grdExUtilList_oncellclick,this);
        };
        this.loadIncludeScript("ref11_T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
