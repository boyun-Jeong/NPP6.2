(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref11_T02");
            this.set_titletext("Ex.util");
            if (Form == this.constructor)
            {
                this._setFormPosition(970,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExUtil", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"string\" size=\"256\"/><Column id=\"name\" type=\"string\" size=\"256\"/><Column id=\"note\" type=\"string\" size=\"256\"/><Column id=\"exam\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"name\">Ex.util.createDataset</Col><Col id=\"note\">/**&#10; * 대상 데이타셋이 없으면 생성, 있으면 대상 데이타셋 객체를 반환&#10; * @param {form} oForm 검색 할 폼 scope지정&#10; * @param {string} sDsNm 데이타셋명&#10; * @return {dataset} 데이타셋 객체&#10; * @description&#10; * 데이타셋명으로 존재하면 데이타를 제거하고 반환한다.&#10; * @example&#10; * var datasetObject = Ex.util.createDataset(this,&apos;DS_LIST&apos;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.createDataset(this,&apos;DS_LIST&apos;);</Col><Col id=\"title\">대상 데이타셋이 없으면 생성, 있으면 대상 데이타셋 객체를 반환</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"name\">Ex.util.isUpdatedRowByCol</Col><Col id=\"note\">/**&#10; * 데이타셋 객체에서 rowFlag컬럼을 제외하고 지정된 행이 변경되었는지 여부를 반환한다.&#10; * @param {dataset} objDs 데이타셋 객체&#10; * @param {int} nRow 데이타셋 row index&#10; * @param {array} arrExcptCol ROWFLAG 상태 제외할 컬럼명 배열&#10; * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)&#10; * @description&#10; *&#10; * @example&#10; * var bool = Ex.util.isUpdatedRowByCol(datasetObject,1,[&apos;COL1&apos;,&apos;COL2&apos;]);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isUpdatedRowByCol(this.dsExUtil,1, [&apos;COL1&apos;,&apos;COL2&apos;]);</Col><Col id=\"title\">데이타셋 객체에서 &apos;ROWFLAG&apos;, &apos;CHK&apos;컬럼 및 arrExcptCol 배열의 컬럼을 제외하고 지정된 행이 변경되었는지 여부를 반환한다.</Col></Row><Row><Col id=\"no\">3</Col><Col id=\"name\">Ex.util.isUpdated</Col><Col id=\"note\">/**&#10; * 데이타셋 객체가 변경된 레코드 정보가 있는지 여부를 반환한다.&#10; * @param {dataset} objDs 데이타셋 객체&#10; * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)&#10; * @description&#10; *&#10; * @example&#10; * var bool = Ex.util.isUpdated(datasetObject);&#10; * @memberOf Ex.util&#10;**/&#10;&#9;&#9;</Col><Col id=\"exam\">Ex.util.isUpdated(this.dsExUtil)</Col><Col id=\"title\">데이타셋 객체 변경된 정보가 있는지 여부를 반환(CUD)</Col></Row><Row><Col id=\"no\">5</Col><Col id=\"name\">Ex.util.isUpdatedRow</Col><Col id=\"note\">/**&#10; * 데이타셋 객체에서 지정된 행이 변경되었는지 여부를 반환한다.&#10; * @param {dataset} objDs 데이타셋 객체&#10; * @param {int} nRow 데이타셋 row index&#10; * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)&#10; * @description&#10; *&#10; * @example&#10; * var bool = Ex.util.isUpdatedRow(datasetObject,1);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isUpdatedRow(this.dsExUtil,1)</Col><Col id=\"title\">데이타셋 객체에서 지정된 행이 변경되었는지 여부를 반환한다.</Col></Row><Row><Col id=\"no\">6</Col><Col id=\"name\">Ex.util.isUpdatedColumn</Col><Col id=\"note\">/**&#10; * 데이타셋 객체에서 지정된 행의 특정 컬럼값이 변경되었는지 여부를 반환한다.&#10; * @param {dataset} objDs 데이타셋 객체&#10; * @param {int} nRow 데이타셋 row index&#10; * @param {string} Column 컬럼명&#10; * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)&#10; * @description&#10; *&#10; * @example&#10; * var bool = Ex.util.isUpdatedColumn(datasetObject,1,&quot;column1&quot;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isUpdatedColumn(this.dsExUtil,1,&quot;column1&quot;)</Col><Col id=\"title\">데이타셋 객체에서 지정된 행의 특정 컬럼값이 변경되었는지 여부를 반환한다.</Col></Row><Row><Col id=\"no\">9</Col><Col id=\"name\">Ex.util.today</Col><Col id=\"note\">/**&#10; * 오늘 날짜를 8자리 문자열로 반환한다.&#10; * @return {string} PC의 오늘날짜&#10; * @description&#10; *&#10; * @example&#10; * var strDate = Ex.util.today();&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.today()</Col><Col id=\"title\">해당 PC의 오늘 날짜를 8자리 문자열로 반환한다.</Col></Row><Row><Col id=\"no\">10</Col><Col id=\"name\">Ex.util.todayTime</Col><Col id=\"note\">/**&#10; * 해당 PC의 오늘 날짜+시간를 가져온다.&#10; * @return {string} 오늘날짜 + 시간&#10; * @description&#10; *&#10; * @example&#10; * var strDate = Ex.util.todayTime(); // output &apos;20160701153030&apos;&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.todayTime()</Col><Col id=\"title\">해당 PC의 오늘 날짜+시간를 가져온다.</Col></Row><Row><Col id=\"no\">11</Col><Col id=\"name\">Ex.util.isExistKor</Col><Col id=\"note\">/**&#10; * 문자열내에 한글이 존재하는지 여부를 반환한다.&#10; * @return {boolean} true : 존재 , false : 없음&#10; * @description&#10; *&#10; * @example&#10; * var strDate = Ex.util.isExistKor(&apos;askdjf한글&apos;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isExistKor(&apos;askdjf한글&apos;)</Col><Col id=\"title\">문자열내에 한글이 존재하는지 여부를 반환한다.</Col></Row><Row><Col id=\"no\">12</Col><Col id=\"name\">Ex.util.isValidTime</Col><Col id=\"note\">/**&#10; * 24시 표현방식을 기준으로 시분/시분초의 유효성을 검증한다.&#10; * @param {string} typeStr &quot;HHMM&quot; 시분/ &quot;HHMMSS&quot; 시분초 검층타입지정&#10; * @param {string} timeStr typeStr에서 지정한 형식의 값&#10; * @return {boolean} true/false&#10; * @description&#10; * space를 인정하지 않음(space제거)&#10; * /,-,.,: 기호는 자동제거후 검증&#10; * &quot;HHMM&quot; 4자리 입력값 / &quot;HHMMSS&quot; 6자리 입력값&#10; * @example&#10; * var b = Ex.util.isValidTime(&quot;HHMM&quot;,&quot;1230&quot;);&#10; * var b = Ex.util.isValidTime(&quot;HHMMSS&quot;,&quot;213045&quot;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isValidTime(&quot;HHMMSS&quot;,&quot;213045&quot;)</Col><Col id=\"title\">24시 표현방식을 기준으로 시분/시분초의 유효성을 검증한다.</Col></Row><Row><Col id=\"no\">13</Col><Col id=\"name\">Ex.util.getDayShortNm</Col><Col id=\"note\">/**&#10; * 해당 날짜의 요일명을 약어로 리턴한다.&#10; * @return {string} 요일명약어&#10; * @description&#10; * &apos;일&apos; / &apos;SUN&apos;&#10; * &apos;월&apos; / &apos;MON&apos;&#10; * &apos;화&apos; / &apos;TUE&apos;&#10; * &apos;수&apos; / &apos;WED&apos;&#10; * &apos;목&apos; / &apos;THU&apos;&#10; * &apos;금&apos; / &apos;FRI&apos;&#10; * &apos;토&apos; / &apos;SAT&apos;&#10; * @example&#10; * var strDate = Ex.util.getDayShortNm(&apos;20170101&apos;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getDayShortNm(&apos;20170101&apos;)</Col><Col id=\"title\">해당 날짜의 요일명을 약어로 리턴한다.</Col></Row><Row><Col id=\"no\">14</Col><Col id=\"name\">Ex.util.isLeapYear</Col><Col id=\"note\">/**&#10; * 윤년여부 확인&#10; * @param {string} sDate yyyyMMdd형태의 날짜 ( 예 : &quot;20121122&quot; )&#10; * @return {boolean} true/false (true : 윤년인 경우 , false : 윤년이 아닌 경우/입력되지 않은 경우)&#10; * @description&#10; *&#10; * @example&#10; * Ex.util.isLeapYear(&quot;20121122&quot;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isLeapYear(&quot;20121122&quot;)</Col><Col id=\"title\">윤년여부 확인</Col></Row><Row><Col id=\"no\">15</Col><Col id=\"name\">Ex.util.setWait</Col><Col id=\"note\">/**&#10; * 작업중임을 표시하는 wait아이콘을 표현한다.&#10; * @param {form} objForm 실행폼 scope&#10; * @param {boolean} bWaitStatus true/false( true:아이콘 활성, false:아이콘 비활성)&#10; * @return N/A&#10; * @description&#10; * &lt;br&gt;Ex.util.setWait(this , true); 처리후 반드시 -&gt;&#10;   Ex.util.setWait(this , false); 호출해야 한다.&#10; * @example&#10; * Ex.util.setWait(this , true); // 활성&#10; * Ex.util.setWait(this , false); // 비활성&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.setWait(this , true)</Col><Col id=\"title\">작업중임을 표시하는 wait아이콘을 표현한다.</Col></Row><Row><Col id=\"no\">16</Col><Col id=\"name\">Ex.util.isDataDup</Col><Col id=\"note\">/**&#10; * 데이타셋에서 특정컬럼값의 중복여부를 반환한다.&#10; * @param {form} objForm 실행폼의 scope 지정&#10; * @param {dataset} objDataset 중복을 검색할 데이타셋 객체&#10; * @param {array} arrKey 중복검색할 컬럼명을 array로 담아 지정한다.&#10; * @param {array} arrItemNm 중복검색시 메시지로 사용할 컬럼의 메시시명을 array로 담아 지정한다.&#10; * @param {string} sExpr 컬럼의 중복이외 추가로 지정할 조건식&#10; * @return {boolean} 중복여부&#10; * @description&#10; * arrKey , arrItemNm는 1:1매핑 가능하도록 지정해야한다.&#10; * @example&#10; * var bool = Ex.util.isDataDup(this, this.dsExUtil, [&apos;col1&apos;,&apos;col2&apos;,.],&#10;   [&apos;컬럼1&apos;,&apos;컬럼2&apos;,.]);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isDataDup(this, this.dsExUtil, [&apos;no&apos;,&apos;name&apos;],&#10;&#9;&#9;&#9;[&apos;컬럼1&apos;,&apos;컬럼2&apos;])</Col><Col id=\"title\">데이타셋에서 특정컬럼값의 중복여부를 반환한다.</Col></Row><Row><Col id=\"no\">17</Col><Col id=\"name\">Ex.util.isDataDupJoinKey</Col><Col id=\"note\">/**&#10; * 데이타셋에서 특정컬럼들을 AND 조건으로 하여 중복여부를 반환한다.&#10; * @param {form} objForm 실행폼의 scope 지정&#10; * @param {dataset} objDataset 중복을 검색할 데이타셋 객체&#10; * @param {array} arrKey 중복검색할 컬럼명을 array로 담아 지정한다.&#10; * @param {array} arrItemNm 중복검색시 메시지로 사용할 컬럼의 메시시명을 array로 담아 지정한다.&#10; * @param {string} sExpr 컬럼의 중복이외 추가로 지정할 조건식&#10; * @return {boolean} 중복여부&#10; * @description&#10; * arrKey , arrItemNm는 1:1매핑 가능하도록 지정해야한다.&#10; * @example&#10; * var bool = Ex.util.isDataDupJoinKey(this, this.DS_LIST,&#10;   [&apos;col1&apos;,&apos;col2&apos;,.], [&apos;컬럼1&apos;,&apos;컬럼2&apos;,.]);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isDataDupJoinKey(this, this.dsExUtil,&#10;&#9;&#9;&#9;[&apos;no&apos;,&apos;name&apos;], [&apos;컬럼1&apos;,&apos;컬럼2&apos;])</Col><Col id=\"title\">데이타셋에서 특정컬럼들을 AND 조건으로 하여 중복여부를 반환한다.</Col></Row><Row><Col id=\"no\">18</Col><Col id=\"name\">Ex.util.isPopup</Col><Col id=\"note\">/**&#10; * 실행폼의 타입이 팝업창인지를 판별하여 반환한다.&#10; * @param {form} objForm 실행폼의 scope 지정&#10; * @return {boolean} 팝업창 여부&#10; * @description&#10; *&#10; * @example&#10; * var bool = Ex.util.isPopup(this);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.isPopup(this)</Col><Col id=\"title\">실행폼의 타입이 팝업창인지를 판별하여 반환한다.</Col></Row><Row><Col id=\"no\">20</Col><Col id=\"name\">Ex.util.getRightStr</Col><Col id=\"note\">/**&#10; * 문자열의 오른쪽에서 length만큼의 문자열을 가져온다.&#10; * @param {string} source 원래 문자열( 예 : &quot;aaBBbbcc&quot; )&#10; * @param {number} length 가져올문자열 길이 ( 예 : 2 )&#10; * @return {boolean} 오른쪽에서 length만큼의 문자열 ( 예 : &quot;cc&quot; )]&#10; * @example&#10; * var str = &quot;myT1 and myT2 are the strings used for padding&quot;;&#10; * var res = Ex.util.getRightStr(str, 7);&#10; * trace(res); // output : padding&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getRightStr(&quot;aaBBbbcc&quot;, 2)</Col><Col id=\"title\">문자열의 오른쪽에서 length만큼의 문자열을 가져온다.</Col></Row><Row><Col id=\"no\">22</Col><Col id=\"name\">Ex.util.addDate</Col><Col id=\"note\">/**&#10; * 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 증감한다.&#10; * @param {string|date} value &apos;yyyyMMdd&apos; 형태로 표현된 String 또는 Date.&#10; * @param {number} offset 날짜로부터 증가 감소값.&#10; * @return {string|date} &apos;yyyyMMdd&apos; 형태로 표현된 String 또는 Date Value.&#10; * @example&#10; * // 2013/04/29 16:39:04 test함.&#10; * trace(EX.util.addDate(new Date(), 3)); // output : Thu May 02 2013&#10;   16:39:04 GMT+0900&#10; * var val = Ex.util.getMaskFormatString(new Date(), &quot;yyyyMMdd&quot;);&#10; * trace(Ex.util.addDate(val, 3)); // output : 20130502&#10; * @memberOf EX.util&#10;**/</Col><Col id=\"exam\">Ex.util.addDate(&quot;20170707&quot;, -3)</Col><Col id=\"title\">입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 증감한다.</Col></Row><Row><Col id=\"no\">23</Col><Col id=\"name\">Ex.util.strToDate</Col><Col id=\"note\">/**&#10; * yyyy, yyyyMM, yyyyMMdd, yyyyMMddhh, yyyyMMddhhmm, yyyyMMddhhmmss 형태의&#10;   String을 Date객체로 반환.&#10; * @param {string} value yyyy ~ yyyyMMddhhmmss형태의 날짜String ( 예 :&#10; &quot;20121122&quot; ).&#10; * @return {date} Date Object.&#10; * @example&#10; * var dt = Ex.util.strToDate(&quot;20120331&quot;); // convert Date type from&#10;   &quot;20120331&quot;.&#10; * trace(dt); // output : Sat Mar 31 2012 00:00:00 GMT+0900&#10; * var dt = Ex.util.strToDate(&quot;20130320123022&quot;); // convert Date type&#10;   from &quot;20130320123022&quot;.&#10; * trace(dt); // output : Wed Mar 20 2013 12:30:22 GMT+0900&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.strToDate(&quot;20120331&quot;)</Col><Col id=\"title\">yyyy, yyyyMM, yyyyMMdd, yyyyMMddhh, yyyyMMddhhmm,&#10;&#9;&#9;&#9;yyyyMMddhhmmss 형태의 String을 Date객체로 반환.</Col></Row><Row><Col id=\"no\">24</Col><Col id=\"name\">Ex.util.addMonth</Col><Col id=\"note\">/**&#10; * 입력된 날짜에 OffSet 으로 지정된만큼의 월을 증감한다.&#10; * @param {string | date} value &apos;yyyyMMdd&apos; 형태로 표현된 String 또는 Date.&#10; * @param {number} offset 월 증감값 ( 예 : 1 또는 -1 )&#10; * @return {string | date} &apos;yyyyMMdd&apos; 형태로 표현된 String 또는 Date Value.&#10; * @example&#10; * var dt = Ex.util.strToDate(&quot;20130331&quot;);&#10; * var dt0 = Ex.util.addMonth(dt, 1);&#10; * trace(dt0); // output : Tue Apr 30 2013 00:00:00 GMT+0900&#10; * var str1 = &quot;20130331&quot;;&#10; * var str = Ex.util.addMonth(str1, 1);&#10; * trace(str); // output : 20130430&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.addMonth(&quot;20130331&quot;,-1)</Col><Col id=\"title\">입력된 날짜에 OffSet 으로 지정된만큼의 월을 증감한다.</Col></Row><Row><Col id=\"no\">25</Col><Col id=\"name\">Ex.util.getDayOfYear</Col><Col id=\"note\">/**&#10; * 해당연도의 1월 1일부터 날짜까지의 일 수 반환.&#10; * @param {date|string} date Date Object 또는 날짜형 스트링.&#10; * @return {number} 일수&#10; * @example&#10; * var dt = Ex.util.strToDate(&quot;20130420&quot;); // convert Date type from&#10;   &quot;20130420&quot;.&#10; * var days = Ex.util.getDayOfYear(dt);&#10; * trace(days); // output : 110&#10; * var dtstr = &quot;20130420&quot;;&#10; * var days = Ex.util.getDayOfYear(dtstr);&#10; * trace(days); // output : 110&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getDayOfYear(&quot;20130420&quot;)</Col><Col id=\"title\">해당연도의 1월 1일부터 날짜까지의 일 수 반환.</Col></Row><Row><Col id=\"no\">26</Col><Col id=\"name\">Ex.util.getDiffDay</Col><Col id=\"note\">/**&#10; * 두 일자간의 차이 일수 계산.&#10; * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 (&#10;   예 : &quot;20121122&quot; ).&#10; * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 :&#10;   &quot;20121202&quot; ).&#10; * @return {number} 숫자 형태의 차이일수 ( 예 : 10 ). 단, fromDate &lt; toDate 음수가&#10;   return된다.&#10; * @example&#10; * var fromdt = Ex.util.strToDate(&quot;20120331&quot;);&#10; * var todt = Ex.util.strToDate(&quot;20130420&quot;);&#10; * var day = Ex.util.getDiffDay(fromdt, todt);&#10; * trace(day); // output : 385&#10; * var fromstr = &quot;20120331&quot;;&#10; * var tostr = &quot;20130420&quot;;&#10; * var day = Ex.util.getDiffDay(fromstr, tostr);&#10; * trace(day); // output : 385&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getDiffDay(&apos;20120331&apos;, &apos;20130420&apos;)</Col><Col id=\"title\">두 일자간의 차이 일수 계산.</Col></Row><Row><Col id=\"no\">27</Col><Col id=\"name\">Ex.util.getDiffMonth</Col><Col id=\"note\">/**&#10; * 두 월간의 차이 월수 계산. (정확한 달수를 처리하려면 fromDate Day값을 1로 하고 toDate를 마지막일자로&#10;   처리하여야 한다.)&lt;br&gt;&#10; * 시작일자의 Day값이 1로 아니면 소수점((마지막일자 - 해당월의 일수)/마지막일자)으로 계산한다.&lt;br&gt;&#10; * 끝일자의 Day값이 마지막일자가 아니면 소수점(해당월의 일수/마지막일자)를 계산한다.&#10; * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 (&#10;   예 : &quot;20121122&quot; ).&#10; * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 :&#10;   &quot;20121202&quot; ).&#10; * @return {number} 숫자 형태의 차이월수 ( 예 : 10 ). 단, fromDate &lt; toDate 음수가&#10;   return된다.&#10; * @example&#10; * var fromdt = Ex.util.strToDate(&quot;20130301&quot;);&#10; * var todt = Ex.util.strToDate(&quot;20130501&quot;);&#10; * var month = Math.ceil(Ex.util.getDiffMonth(fromdt, todt));&#10; * trace(month); // output : 3&#10; * var fromstr = &quot;20120331&quot;;&#10; * var tostr = &quot;20130420&quot;;&#10; * var month = Ex.util.getDiffMonth(fromstr, tostr);&#10; * trace(month); // output : 12.69&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getDiffMonth(&quot;20120331&quot;, &quot;20130420&quot;)</Col><Col id=\"title\">두 월간의 차이 월수 계산.</Col></Row><Row><Col id=\"no\">28</Col><Col id=\"name\">Ex.util.getDiffTime</Col><Col id=\"note\">/**&#10; * 날짜 차이 계산하기.&#10; * @param {string} date1 yyyyMMddHHMMSS형태의 일자.&#10; * @param {string} date2 yyyyMMddHHMMSS형태의 일자.&#10; * @return {array} 두 날짜의 기간.[일,시,분,초]&#10; * @example&#10; * var dt0 = Ex.util.strToDate(&quot;20130302113022&quot;);&#10; * var dt1 = Ex.util.strToDate(&quot;20130305145032&quot;);&#10; * var etime = Ex.util.getDiffTime(dt0, dt1); // return Array Type [일,&#10;   시, 분, 초]&#10; * trace(etime); // output : 3,3,20,10&#10; * var str0 = &quot;20130302113022&quot;;&#10; * var str1 = &quot;20130305145032&quot;;&#10; * var etime = Ex.util.getDiffTime(str0, str1); // return Array Type&#10;   [일, 시, 분, 초]&#10; * trace(etime); // output : 3,3,20,10&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getDiffTime(&quot;20130302113022&quot;, &quot;20130305145032&quot;)</Col><Col id=\"title\">날짜 차이 계산하기</Col></Row><Row><Col id=\"no\">29</Col><Col id=\"name\">Ex.util.getFirstDate</Col><Col id=\"note\">/**&#10; * 전달된 月의 1일 만들기.&#10; * @param {string | date} value yyyyMMdd형태의 일자.&#10; * @return {string} yyyyMM01.&#10; * @example&#10; * var dt = Ex.util.strToDate(&quot;20120331&quot;);&#10; * var dt1 = Ex.util.getFirstDate(dt);&#10; * trace(dt1); // output : Thu Mar 01 2012 00:00:00 GMT+0900&#10; * var str1 = &quot;20120331&quot;;&#10; * var str = Ex.util.getFirstDate(str1);&#10; * trace(str); // output : 20120301&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getFirstDate(&quot;20120331&quot;)</Col><Col id=\"title\">전달된 月의 1일 만들기</Col></Row><Row><Col id=\"no\">30</Col><Col id=\"name\">Ex.util.getLastDayOfMonth</Col><Col id=\"note\">/**&#10; * 해당월의 마지막 날짜를 숫자로 구하기.&#10; * @param {number | string} value yyyyMMdd형태의 날짜 ( 예 : &quot;20121122&quot; ).&#10; * @return {number} 마지막 날짜 숫자값 ( 예 : 30 ).&#10; * @example&#10; * var dt = Ex.util.strToDate(&quot;20120302&quot;); // convert Date type from&#10;   &quot;20120302&quot;.&#10; * var day = Ex.util.getLastDayOfMonth(dt);&#10; * trace(day); // output : 31&#10; * var dtstr = &quot;20120302&quot;;&#10; * var day = Ex.util.getLastDayOfMonth(dtstr);&#10; * trace(day); // output : 31&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getLastDayOfMonth(&quot;20120302&quot;)</Col><Col id=\"title\">해당월의 마지막 날짜를 숫자로 구하기.</Col></Row><Row><Col id=\"no\">31</Col><Col id=\"name\">Ex.util.getLength</Col><Col id=\"note\">/**&#10; * 측정단위에 따라 문자열의 길이를 반환한다.&#10; * @param {string} str 대상문자열&#10; * @return {string} sCheckUnit 측정단위&#10; * @example&#10; * --- 측정단위 ---&#10; * &quot;utf16&quot; - 한문자당 1의 값으로 합산함(default).&#10; * &quot;utf8&quot; - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.&#10; * &quot;ascii&quot; - 한문자당 영문 1, 한글 2의 값으로 합산함.&#10; * var len = Ex.util.getLength(&quot;123ABC한국&quot;,&quot;utf8&quot;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getLength(&quot;123ABC한국&quot;,&quot;utf8&quot;)</Col><Col id=\"title\">측정단위에 따라 문자열의 길이를 반환한다.</Col></Row><Row><Col id=\"no\">32</Col><Col id=\"name\">Ex.util.getNumberToMaskStr</Col><Col id=\"note\">/**&#10; * 숫자에 , 서식을 적용하여 반환한다.&#10; * @param {string} num 숫자 혹은 숫자로구성된 문자열&#10; * @return {string} ,가 적용된 문자열&#10; * @example&#10; * var num = Ex.util.getNumberToMaskStr(&quot;123456789&quot;);&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getNumberToMaskStr(&quot;123456789&quot;)</Col><Col id=\"title\">숫자에 , 서식을 적용하여 반환</Col></Row><Row><Col id=\"no\">33</Col><Col id=\"name\">Ex.util.getTypeof</Col><Col id=\"note\">/**&#10; * 변수의 타입을 반환합니다.( 반환대상 String문자열 ~ ` ! @ # $ % % ^ &amp; * - = + 등,&#10;   배열, Object(Json객체), 데이타셋 )&#10; * @param {STRING/DATASET/ARRAY/OBJECT} isType 확인할 객체혹은 문자열&#10; * @return {string} 타입을 문자열로 반환&#10; * @description&#10; *&#10; * @example&#10; * var strType = Ex.util.getTypeof(&apos;abcde&apos;);&#10;**/&#10;&#9;&#9;</Col><Col id=\"exam\">Ex.util.getTypeof(&apos;abcde&apos;)</Col><Col id=\"title\">변수의 타입을 반환</Col></Row><Row><Col id=\"no\">34</Col><Col id=\"name\">Ex.util.countNonword</Col><Col id=\"note\">/**&#10; * 문자열의 특수문자(개행문자 Tab문자) 포함개수.&#10; * @param {string} str 대상 문자열.&#10; * @return {number} 특수문자 개수.&#10; * @example&#10; * var str = &quot;2011-12-27\\r\\n\\t~`&quot;;&#10; * var cnt = Ex.util.countNonword(str);&#10; * trace(cnt); // output : 7&#10; * @memberOf Ex.util&#10;**/&#10;&#9;&#9;</Col><Col id=\"exam\">Ex.util.countNonword(&quot;2011-12-27\\r\\n\\t~`&quot;)</Col><Col id=\"title\">문자열의 특수문자 포함개수반환</Col></Row><Row><Col id=\"no\">35</Col><Col id=\"name\">Ex.util.getMaskFormatString</Col><Col id=\"note\"> /**&#10; * 주어진 날짜 개체의 Mask Format 처리된 문자열을 반환.&#10; * 요일명칭, 달명칭, 오전오후 명칭 표시 처리는 Ex.util에 정의된 값으로 처리된다.&#10; * Ex.util.weekName : 요일명칭(Array value),&#10; * Ex.util.weekShortName : 요일축약명칭(Array value),&#10; * Ex.util.monthName : 월명칭(Array value),&#10; * Ex.util.monthShortName : 월축약 명칭(Array value)&#10; * Ex.util.ttName : 오전/오후 명칭(Array value)&#10; * @param {date} dt Date 개체.&#10; * @param {string} strMask mask할 format 문자열.&#10; * @return {string} 변환된 문자열.&#10; * @example&#10; * var dt = Ex.util.strToDate(&quot;20130430123412&quot;); // convert Date type&#10;   from &quot;20130430123412&quot;.&#10; * trace(Ex.util.getMaskFormatString(dt, &quot;yyyy년 MM월 dd일 tt hh시 mm분&#10;   ss초&quot;)); // output : 2013년 04월 30일 오후 12시 34분 12초&#10; * trace(Ex.util.getMaskFormatString(dt, &quot;yy MM.dd&quot;));&#10;   output : 13 04.30&#10; * trace(Ex.util.getMaskFormatString(dt, &quot;yyyy-MM-dd&quot;));&#10;   output : 2013-04-30&#10; * trace(Ex.util.getMaskFormatString(dt, &quot;yyyy-MM-dd W Week&quot;));&#10;   output : 2013-04-30 18 Week&#10; * trace(Ex.util.getMaskFormatString(dt, &quot;MMMM dddd&quot;));&#10;   output : 4월 화요일&#10; * @memberOf Ex.util&#10;**/</Col><Col id=\"exam\">Ex.util.getMaskFormatString(Ex.util.strToDate(&quot;20130430123412&quot;),&#10;&#9;&#9;&#9;&quot;yyyy-MM-dd&quot;)</Col><Col id=\"exam\">Ex.util.getMaskFormatString(Ex.util.strToDate(&quot;20130430123412&quot;),&#10;&#9;&#9;&#9;&quot;yyyy-MM-dd&quot;)</Col><Col id=\"title\">주어진 날짜 개체의 Mask Format 처리된 문자열을 반환</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdExUtilList","5","15",null,null,"460","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsExUtil");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.getSetter("domainId").set("nexa.id;nexa.name;nexa.dspt;nexa.password;nexa.phone;nexa.createdate;nexa.createuser;nexa.updatedate;nexa.updateuser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"320\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"함수명\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell style=\"align:right middle;\" expr=\"currow+1\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:name\" tooltiptext=\"bind:name\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:title\" tooltiptext=\"bind:title\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" style=\"font:8 arial;\" text=\"excute\"/></Band></Format></Formats>");
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
        this.registerScript("ref11_T02.xfdl", function() {
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
        	trace("ref11_T02 workArea form init call");
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
        this.loadIncludeScript("ref11_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
