(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref11_T01");
            this.set_titletext("Ex");
            if (Form == this.constructor)
            {
                this._setFormPosition(970,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEx", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"string\" size=\"256\"/><Column id=\"name\" type=\"string\" size=\"256\"/><Column id=\"note\" type=\"string\" size=\"256\"/><Column id=\"exam\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.isEmpty</Col><Col id=\"note\">value의 빈값 여부 반환./**</Col><Col id=\"exam\">Ex.isEmpty({a:&apos;1&apos;, b:&apos;2&apos;})</Col><Col id=\"title\">value의 빈값 여부 반환.</Col></Row><Row><Col id=\"no\">4</Col><Col id=\"name\">Ex.isBoolean</Col><Col id=\"note\">/**&#10; * value의 boolean 여부 반환.&#10; * @param {*} value 확인할 value.&#10; * @return {boolean} boolean 여부.&#10; * @example&#10; * trace(Ex.isBoolean(true));&#9;// output : true&#10; * trace(Ex.isBoolean(&quot;true&quot;));&#9;// output : false&#9;&#9; &#10; * @memberOf Ex&#10;*/</Col><Col id=\"exam\">Ex.isBoolean(true)</Col><Col id=\"title\">value의 boolean 여부 반환.</Col></Row><Row><Col id=\"no\">6</Col><Col id=\"name\">Ex.isNull</Col><Col id=\"note\">/**&#10; * value의 null 여부 반환.&#10; * @param {*} value 확인할 value.&#10; * @return {boolean} null 여부.&#10; * @example&#10; * trace(Ex.isNull(null));&#9;// output : true&#10; * var a; // undefined&#10; * trace(Ex.isNull(a));&#9;// output : false&#9;&#9;&#10; * trace(Ex.isNull(&quot;&quot;));&#9;// output : false&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isNull(null)</Col><Col id=\"title\">value의 null 여부 반환.</Col></Row><Row><Col id=\"no\">7</Col><Col id=\"name\">Ex.isUndefined</Col><Col id=\"note\">/**&#10; * value의 undefined 여부 반환.&#10; * @param {*} value 확인할 value.&#9;&#9; &#10; * @return {boolean} undefined 여부.&#10; * @example&#10; * var a;&#10; * trace(Ex.isUndefined(a));&#9;// output : true&#10; *&#10; * var a = &quot;&quot;;&#10; * trace(Ex.isUndefined(a));&#9;// output : false&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isUndefined(undefined)</Col><Col id=\"title\">value의 undefined 여부 반환.</Col></Row><Row><Col id=\"no\">8</Col><Col id=\"name\">Ex.isObject</Col><Col id=\"note\">/**&#10; * value의 Object 여부 반환.&#10; * @param {*} value 확인할 value.&#10; * @return {boolean} Object 여부.&#10; * @example&#10; * var o = new Object();&#10; * trace(Ex.isObject(o));&#9;// output : true&#10; * &#10; * var o = {};&#10; * trace(Ex.isObject(o));&#9;// output : true&#10; *&#10; * var o = {a:1 , b:2 , c:3};&#10; * trace(Ex.isObject(o));&#9;// output : true&#10; *&#10; * var o = [1,2,3];&#10; * trace(Ex.isObject(o));&#9;// output : false&#10; *&#10; * var o = new Button();&#10; * trace(Ex.isObject(o));&#9;// output : false&#10; *&#10; * var o = &quot;123&quot;;&#10; * trace(Ex.isObject(o));&#9;// output : false&#10; *&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isObject( {a:1 , b:2 , c:3} )</Col><Col id=\"title\">value의 Object 여부 반환.</Col></Row><Row><Col id=\"no\">9</Col><Col id=\"name\">Ex.isArray</Col><Col id=\"note\">/**&#10; * value의 Array 여부 반환.&#10; * @function isArray&#10; * @param {*} value 확인할 value.&#10; * @return {boolean} Array 여부.&#10; * @example&#10; * var a = new Array();&#10; * trace(Ex.isArray(a));&#9;// output : true&#10; *&#10; * var a = [1,2,3];&#10; * trace(Ex.isArray(a));&#9;// output : true&#10; *&#10; * var a = &quot;123&quot;;&#10; * trace(Ex.isArray(a));&#9;// output : false&#10; *&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isArray( [1,2,3] )</Col><Col id=\"title\">value의 Array 여부 반환.</Col></Row><Row><Col id=\"no\">10</Col><Col id=\"name\">Ex.arrContains</Col><Col id=\"note\">/**&#10; * 지정된 항목이 배열에 포함되어 있는지 확인한다.&#10; * @param {array} array 검색 대상 Array&#10; * @param {object} item 찾고자 하는 Item&#10; * @param {boolean=} strict true: 형변환 없이 비교(&apos;===&apos;), false: 형변환 후 비교(&apos;==&apos;) (default: false)&#10; * @return {boolean} 포함되어 있다면 true, 없다면 false를 리턴&#10; * @example&#10; * var mon = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;];&#10; * var contain = Ex.arrContains(mon, &quot;Mar&quot;);&#10; * trace(&quot;contain==&gt;&quot; + contain);&#9;// output : contain==&gt;true&#10; * var contain = Ex.arrContains(mon, &quot;May&quot;);&#10; * trace(&quot;contain==&gt;&quot; + contain);&#9;// output : contain==&gt;false&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.arrContains([&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;], &quot;Mar&quot;)</Col><Col id=\"title\">지정된 항목이 배열에 포함되어 있는지 여부를 반환</Col></Row><Row><Col id=\"no\">10</Col><Col id=\"name\">Ex.arrIndexOf</Col><Col id=\"note\">/**&#10; * 지정된 항목이 처음 나오는 배열 위치를 반환한다. &#10; * @param {array} array 검색 대상 Array&#10; * @param {object} item 찾고자 하는 Item&#10; * @param {number=} from 검색의 시작 위치 (default: 0)&#10; * @param {boolean=} strict true: 형변환 없이 비교(&apos;===&apos;), false: 형변환 후 비교(&apos;==&apos;) (default: false)&#10; * @return {number} 검색된 배열 위치. 없다면 -1 리턴&#10; * @example&#10; * var mon = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;];&#10; * var index = Ex.arrIndexOf(mon, &quot;Mar&quot;);&#10; * trace(&quot;index==&gt;&quot; + index);&#9;// output : index==&gt;2&#10; * var index = Ex.arrIndexOf(mon, &quot;May&quot;);&#10; * trace(&quot;index==&gt;&quot; + index);&#9;// output : index==&gt;-1&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.arrIndexOf([&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;], &quot;Mar&quot;)</Col><Col id=\"title\">지정된 항목이 처음 나오는 배열 위치를 반환</Col></Row><Row><Col id=\"no\">10</Col><Col id=\"name\">Ex.arrRemoveAt</Col><Col id=\"note\">/**&#10; * 원하는 위치의 항목을 배열에서 삭제 처리한다.&#10; * @param {array} array remove 대상 Array&#10; * @param {number} index remove하고자 하는 item index&#10; * @example&#10; * var mon = [&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;];&#10; * Ex.arrRemoveAt(mon, 1);&#10; * trace(&quot;mon==&gt;&quot; + mon);&#9;// output : mon==&gt;[&quot;Jan&quot;,&quot;Mar&quot;,&quot;Apr&quot;]&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.arrRemoveAt([&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;], 1)</Col><Col id=\"title\">지정된 배열에서 원하는 위치의 항목을 삭제 처리</Col></Row><Row><Col id=\"no\">10</Col><Col id=\"name\">Ex.isDate</Col><Col id=\"note\">/**&#10; * value의 Date 여부 반환.&#10; * @param {date} value 확인할 value.&#10; * @return {boolean} Date 여부.&#10; * @example&#10; * var a = new Date();&#10; * trace(Ex.isDate(a));&#9;// output : true&#10; *&#10; * var a = &quot;20130501&quot;;&#10; * trace(Ex.isDate(a));&#9;// output : false &#9; &#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isDate(new Date())</Col><Col id=\"title\">value의 Date 여부 반환.</Col></Row><Row><Col id=\"no\">11</Col><Col id=\"name\">Ex.isStringDate</Col><Col id=\"note\">/**&#10; * yyyyMMdd형태의 날짜 문자열 여부.( 예 : &quot;20111231&quot; ).&#10; * @param {string} value 확인할 value.&#10; * @return {boolean} Date 여부.&#10; * @example&#10; * var a = &quot;20130501&quot;;&#10; * trace(Ex.isStringDate(a));&#9;// output : true &#9; &#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isStringDate(&quot;20130501&quot;)</Col><Col id=\"title\">yyyyMMdd형태의 날짜 문자열 여부.</Col></Row><Row><Col id=\"no\">12</Col><Col id=\"name\">Ex.isFunction</Col><Col id=\"note\">/**&#10; * value의 Function 여부 반환.&#10; * @param {*} value 확인할 value.&#10; * @return {boolean} Function 여부.&#10; * @example&#10; * trace(Ex.isFunction(Ex.isFunction));&#9;// output : true&#10; *&#10; * this.testFunction = function()&#10; * {&#10; * }&#10; * trace(Ex.isFunction(this.testFunction));&#9;// output : true&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isFunction(Ex.isFunction)</Col><Col id=\"title\">value의 Function 여부 반환.</Col></Row><Row><Col id=\"no\">13</Col><Col id=\"name\">Ex.decode</Col><Col id=\"note\">/**&#10; * 입력된 값 또는 수식을 검사해 적당한 값을 반환.&lt;br&gt;&#10; * decoce(비교값, CASE1, 결과값1 [, CASE2, 결과값2, ... ], 디폴트 값);&lt;br&gt;&#10; * 표현식의 값이 기준값1이면 값1을 출력하고, 기준값2이면 값2를 출력한다.&lt;br&gt;&#10; * 그리고 기준값이 없으면 디폴트 값을 출력한다.&lt;br&gt;&#10; * @param {*} * 1. 비교값&#10; * @param {*} * 2. CASE&#10; * @param {*} * 3. 결과값 (2,3 반복)&#10; * @param {*=} * (2,3 반복)&#10; * @param {*=} * 4.디폴트값&#10; * @return {*} decode에 의해서 선택된 값.&#10; * @example&#10; * trace(Ex.decode(&quot;1&quot;, &quot;1&quot;, &quot;One&quot;, &quot;2&quot;, &quot;Two&quot;, &quot;Default&quot;)); // output : One;&#10; * &#10; * trace(Ex.decode(100, 1, &quot;일&quot;, 10, &quot;십&quot;, 100, &quot;백&quot;));&#9;// output : 백&#10; *&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.decode(100, 1, &quot;일&quot;, 10, &quot;십&quot;, 100, &quot;백&quot;)</Col><Col id=\"title\">입력된 값 또는 수식을 검사해 적당한 값을 반환.</Col></Row><Row><Col id=\"no\">14</Col><Col id=\"name\">Ex.isNvl</Col><Col id=\"note\">/**&#10; * 입력값이 &apos;&apos; , null , undefined 이면 대체값으로 반환한다.&#10; * @param {string/object} val 입력값( 문자열 혹은 객체 )&#10; * @param {string/object} val2 대체값( 문자열 혹은 객체 )&#10; * @return {string/object} 문자열 혹은 객체&#10; * @description &#10; *  &#9;&#10; * @example&#10; *  var rtnStr = Ex.isNvl(null,&apos;2016&apos;);  // output 2016&#10; *  &#10; *  var object1 = {};&#10; *  var rtnObj = Ex.isNvl(object1,object2);  // output object2&#10; *  &#10; *  var object1 = {a:1,b:2};&#10; *  var rtnObj = Ex.isNvl(object1,object2);  // output object1&#10; *  &#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isNvl(null,&apos;2016&apos;)</Col><Col id=\"title\">입력값이 &apos;&apos; , null , undefined 이면 대체값으로 반환한다.</Col></Row><Row><Col id=\"no\">15</Col><Col id=\"name\">Ex.isString</Col><Col id=\"note\">/**&#10; * value의 string 여부 반환&#10; * @param {*} value 확인할 value.&#10; * @return {boolean} string 여부.&#10; * @example&#10; * trace(Ex.isString(&quot;test string!!!&quot;));&#9;// output : true&#10; * trace(Ex.isString(1234));&#9;// output : false&#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isString(&quot;test string!!!&quot;)</Col><Col id=\"title\">value의 string 여부 반환</Col></Row><Row><Col id=\"no\">16</Col><Col id=\"name\">Ex.isNumber</Col><Col id=\"note\">/**&#10; * value의 number 여부 반환.&#10; * @param {*} value 확인할 value.&#10; * @return {boolean} number 여부.&#10; * @example&#10; * trace(Ex.isNumber(1234));&#9;// output : true&#10; * trace(Ex.isNumber(&quot;1234&quot;));&#9;// output : false&#9;&#9; &#10; * @memberOf Ex&#10;**/</Col><Col id=\"exam\">Ex.isNumber(1234)</Col><Col id=\"title\">value의 number 여부 반환.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdExList","5","15",null,null,"460","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsEx");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.getSetter("domainId").set("nexa.id;nexa.name;nexa.dspt;nexa.password;nexa.phone;nexa.createdate;nexa.createuser;nexa.updatedate;nexa.updateuser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"320\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"함수명\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell style=\"align:right middle;\" expr=\"currow+1\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:name\" tooltiptext=\"bind:title\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:title\" tooltiptext=\"bind:title\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" style=\"font:8 arial;\" text=\"excute\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"15","163","33","288",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtExample",null,"15","270","33","17",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02",null,"52","434","35","17",null,null,null,null,null,this);
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
            obj = new BindItem("item0","Edit00","value","dsEx","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtExample","value","dsEx","exam");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit02","value","dsEx","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","txaNote","value","dsEx","note");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref11_T01.xfdl", function() {
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
        	trace("ref11_T01 workArea form init call");
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
        this.grdExList_oncellclick = function(obj, e)
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
            this.grdExList.addEventHandler("oncellclick",this.grdExList_oncellclick,this);
        };
        this.loadIncludeScript("ref11_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
