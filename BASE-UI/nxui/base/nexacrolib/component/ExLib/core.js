/**
 * @fileoverview 프로젝트 core
 */
var Ex = {};
	Ex.core = {};
	Ex.util = {};
	Ex.grid = {};
	Ex = {
		/**
		  * Ex.isString
		  *  데이타타입이 string인지 판별한다.
		  * @param {string} value 판별대상데이타
		  * @return {boolean} string 여부
		  * @description 
		  *  
		  * @example
		  *  var b = Ex.isString(1234);	// output : false
		  *  var b = Ex.isString("test string!!!");	// output : true
		  * @memberOf Ex
		  **/
		isString: function(value) 
		{
			return typeof value === 'string';
		},
		/**
		  * Ex.isNumber
		  *  데이타타입이 number인지 판별한다.
		  * @param {number} value 판별대상데이타
		  * @return {boolean} number 여부
		  * @description 
		  *  
		  * @example
		  *  var b = Ex.isNumber(1234);	// output : true
		  *  var b = Ex.isNumber("1234");	// output : false
		  * @memberOf Ex
		  **/
		isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },
		/**
		  * Ex.isBoolean
		  *  데이타타입이 boolean 인지 판별한다.
		  * @param {boolean} value 판별대상데이타
		  * @return {boolean} boolean 여부
		  * @description 
		  *  
		  * @example
		  *  var b = Ex.isBoolean(true);	// output : true
		  *  var b = Ex.isBoolean("true");	// output : false
		  * @memberOf Ex
		  **/		 
		isBoolean: function(value) 
		{
			return typeof value == 'boolean';
		},
		/**
		  * Ex.isNull
		  *  데이타타입이 null 인지 판별한다.
		  * @param {null} value 판별대상데이타
		  * @return {boolean} null 여부
		  * @description 
		  *  
		  * @example
		  *  var b = Ex.isNull(null);	// output : true
		  *  var b = Ex.isNull(undefined);	// output : false
		  *  var b = Ex.isNull("");	// output : false
		  * @memberOf Ex
		  **/		 
		isNull: function(value)
		{
			return value === null;
		},
		/**
		  * Ex.isUndefined
		  *  데이타타입이 undefined 인지 판별한다.
		  * @param {undefined} value 판별대상데이타
		  * @return {boolean} undefined 여부
		  * @description 
		  *  
		  * @example
		  *  var b = Ex.isUndefined(undefined);	// output : true
		  *  var b = Ex.isUndefined(null);	// output : false
		  *  var b = Ex.isUndefined("");	// output : false
		  * @memberOf Ex
		  **/
		isUndefined: function(value)
		{
			return value === undefined;
		},
		/**
		  * Ex.isObject
		  *  데이타타입이 Object 인지 판별한다.
		  * @param {Object} value 판별대상데이타
		  * @return {boolean} Object 여부
		  * @description 
		  *  넥사크로 콤퍼넌트는 false를 반환한다.
		  * @example
		  *  var b = Ex.isUndefined(new Object());	// output : true
		  *  var b = Ex.isUndefined({});	// output : true
		  *  var b = Ex.isUndefined([1,2,3]);	// output : false
		  *  var b = Ex.isUndefined(new Button());	// output : false
		  *  var b = Ex.isUndefined("KOREA");	// output : false
		  * @memberOf Ex
		  **/
		isObject: function(value)
		{
			if ( value === null || value === undefined ) return false;
			
			// nexacro Component
			if ( Ex.isXComponent(value) ) return false;
			
			// nexacro Object (e.g. Dataset)
			if( value instanceof nexacro.Object ) return false;
			
			return typeof value == "object" && 
				   'constructor' in value &&
				   value.constructor === Object;
		},
		/**
		  * Ex.isArray
		  *  데이타타입이 array 인지 판별한다.
		  * @param {array} value 판별대상데이타
		  * @return {boolean} array 여부
		  * @description 
		  *
		  * @example
		  *  var b = Ex.isUndefined(new Array());	// output : true
		  *  var b = Ex.isUndefined([]);	// output : true
		  *  var b = Ex.isUndefined([1,2,3]);	// output : true
		  *  var b = Ex.isUndefined("KOREA");	// output : false
		  * @memberOf Ex
		  **/
		isArray: Array.isArray ? function(value) {
			return Array.isArray(value);
		} :
		function(value) 
		{
			return Ex._toString.call( value ) === '[object Array]';
		},
        /**
		* 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
		* @param {array} array 검색 대상 Array
		* @param {object} item 찾고자 하는 Item
		* @param {number=} from 검색의 시작 위치 (default: 0)
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false)
		* @return {number} 검색된 배열 위치. 없다면 -1 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var index = Ex.arrIndexOf(mon, "Mar");
		* trace("index==>" + index);	// output : index==>2
		* var index = Ex.arrIndexOf(mon, "May");
		* trace("index==>" + index);	// output : index==>-1
		* @memberOf Ex
		*/
		arrIndexOf: function(array, item, from, strict) 
		{
			var len = array.length;
			if ( from == null ) from = 0;
			strict == !!strict;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
			{
				from += len;
			}
			
			if (strict)
			{
				for (; from < len; from++) 
				{
					if ( array[from] === item)
					{
						return from;
					}
				}
			}
			else
			{
				for (; from < len; from++) 
				{
					if ( array[from] == item)
					{
						return from;
					}
				}
			}
			
			return -1;
		},
		/**
		* 지정된 항목이 배열에 포함되어 있는지 확인한다.
		* @param {array} array 검색 대상 Array
		* @param {object} item 찾고자 하는 Item
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false)
		* @return {boolean} 포함되어 있다면 true, 없다면 false를 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var contain = Ex.arrContains(mon, "Mar");
		* trace("contain==>" + contain);	// output : contain==>true
		* var contain = Ex.arrContains(mon, "May");
		* trace("contain==>" + contain);	// output : contain==>false
		* @memberOf Ex
		*/
		arrContains: function(array, item, strict) 
        {
			if (Ex.arrIndexOf(array, item, null, strict) === -1) 
			{
				return false;
			}
			else
			{
				return true;
			}
        },
        /**
		* 원하는 위치의 항목을 배열에서 삭제 처리한다.
		* @param {array} array remove 대상 Array
		* @param {number} index remove하고자 하는 item index
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* Ex.arrRemoveAt(mon, 1);
		* trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
		* @memberOf Ex
		*/
        arrRemoveAt: function(array, index) 
        {
			array.splice(index, 1);
        },		
		/**
		  * Ex.isDate
		  *  데이타타입이 date 인지 판별한다.
		  * @param {date} value 판별대상데이타
		  * @return {boolean} date 여부
		  * @description 
		  *
		  * @example
		  *  var b = Ex.isDate(new Date());	// output : true
		  *  var b = Ex.isDate("20130501");	// output : false
		  * @memberOf Ex
		  **/
		isDate: function(value) 
		{
			return Ex._toString.call( value ) === '[object Date]';
		},
		/**
		  * Ex.isStringDate
		  *  데이타타입이 yyyyMMdd형태의 8자리 날짜 문자열 인지 판별한다.
		  * @param {string} value 판별대상데이타
		  * @return {boolean} yyyyMMdd(string) 여부
		  * @description 
		  *
		  * @example
		  *  var b = Ex.isStringDate(new Date());	// output : false
		  *  var b = Ex.isStringDate("20130501");	// output : true
		  * @memberOf Ex
		  **/
		isStringDate: function(value) 
		{
			var stringWrapper = new String(value);
			
			if( stringWrapper.toString().length !== 8 ) return false;
			
			var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
			var iDate   = Math.floor(stringWrapper.slice(6,8), 10);
			
			if( iMonth < 1 || iMonth > 12 ) return false;
				
			if( iDate < 1 || iDate > Ex.util.getLastDayOfMonth(stringWrapper) ) return false;			
			
			return true;
		},
		/**
		  * Ex.isFunction
		  *  데이타타입이 function 인지 판별한다.
		  * @param {function} value 판별대상데이타
		  * @return {boolean} function 여부
		  * @description 
		  *
		  * @example
		  *  var b = Ex.isFunction(Ex.isFunction);	// output : true
		  *  var b = Ex.isFunction(this.fn_search);	// output : true
		  * @memberOf Ex
		  **/		 
		isFunction: function(value)
		{
			return Ex._toString.call( value ) === '[object Function]';
		},
		/**
		  * Ex.isRegExp
		  *  데이타타입이 RegExp 인지 판별한다.
		  * @param {RegExp} value 판별대상데이타
		  * @return {boolean} RegExp 여부
		  * @description 
		  *
		  * @example
		  *  var b = Ex.isRegExp(new RegExp());	// output : true
		  *  var b = Ex.isRegExp(/[a-z]/g);	// output : true
		  * @memberOf Ex
		  **/		 
		isRegExp: function(value) 
		{
			return Ex._toString.call( value ) === '[object RegExp]';
		},
		/**
		  * Ex.isEmpty
		  *  데이타의 상태가 empty 인지 판별한다.
		  * @param {*} value 판별대상데이타
					boolean	bCheckSpace		false(default) 공백도 Empty로 본다	/ true 공백도 문자열로 체크한다.
		  * @return {boolean} empty 여부
		  * @description 
		  *  데이타의 타입이 아니라 empty상태를 판별한다.
		  * @example
		  *  var b = Ex.isEmpty(undefined);	// output : true
		  *  var b = Ex.isEmpty(null);	// output : true
		  *  var b = Ex.isEmpty("");	// output : true
		  *  var b = Ex.isEmpty([]);	// output : true
		  *  var b = Ex.isEmpty({});	// output : true
		  *  var b = Ex.isEmpty(new Array());	// output : true
		  *  var b = Ex.isEmpty(new Object());	// output : true
		  *  var b = Ex.isEmpty(new Date());	// output : false
		  *  var b = Ex.isEmpty(" ");		// output : true			// 공백 옵션 Ex
		  *  var b = Ex.isEmpty(" ", true);	// output : false			// 공백 옵션 Ex
		  * @memberOf Ex
		  **/
		isEmpty: function(value, bCheckSpace)
		{
			// null, undefined ==> true
			if ( value == null ) return true;
			
			// Array ==> length == 0
			if( Ex.isArray(value) ) {
				return (value.length == 0)? true : false;
			}
			// String check
			else if(Ex.isString(value) ) {
				if(bCheckSpace)
					return (value.length == 0)? true : false;
				else
					return ( (value.trim()).length == 0)? true : false;
			}
			else if ( Ex.isObject(value) )
			{
				for (var p in value) 
				{
					if ( value.hasOwnProperty(p) )
					{
						return false;
					}
				}
				return true;
			}
			
			return false;
		},
		/**
		  * Ex.isXComponent
		  *  데이타타입이 nexacro component 인지 판별한다.
		  * @param {component} value 판별대상데이타
		  * @return {boolean} nexacro component 여부
		  * @description 
		  *
		  * @example
		  *  var b = Ex.isXComponent(new Dataset());	// output : true
		  *  var b = Ex.isXComponent(new Button());	// output : true
		  *  var b = Ex.isXComponent(new String());	// output : false
		  * @memberOf Ex
		  **/
		isXComponent: function(value) 
		{
			if ( value === null || value === undefined  ) return false;
			
			return value instanceof nexacro.Component;
		},
		/**
		  * Ex.decode
		  *  입력된 값 또는 수식을 검사해 적당한 값을 반환한다.
		  * @param {*} 입력값과 입력값에 대한 대체값으로 구성
		  * @return {*} decode에 의해서 선택된 값
		  * @description 
		  *  sql decode와 동일한 기능을 제공한다.
		  *  decoce(입력값, CASE1, 결과값1 [, CASE2, 결과값2, ... ], 디폴트 값)
		  *  기준값이 없으면 디폴트 값을 출력한다.
		  * @example
		  *  var rtn = Ex.decode("1", "1", "One", "2", "Two", "Default");	// output : One
		  *  var rtn = Ex.decode(100, 1, "일", 10, "십", 100, "백");	// output : 백
		  * @memberOf Ex
		  **/
		decode: function() 
		{
			var i;
			var count = arguments.length;
			for( i = 1 ; i < count ; i+=2 )
			{
				if( arguments[0] === arguments[i] )
				{
					if( i+1 == count )
						return arguments[i];
					else
						return arguments[i+1];
				}
			}
			
			return arguments[i-2];
		},
		/**
		  * Ex.isNvl
		  *  입력값이 empty 이면 대체값으로 반환한다.
		  * @param {*} val 입력값
		  * @param {*} val2 대체값
		  * @return {*} 입력값혹은 대체값
		  * @description 
		  *  empty가 아니면 입력값을 반환한다.
		  * @example
		  *  var rtn = Ex.isNvl(null,'2016');	// output : 2016
		  *  var rtn = Ex.isNvl(1,'2016');	// output : 1
		  * @memberOf Ex
		  **/
 		isNvl : function(val,val2)
 		{
 		    var rtnVal = (Ex.isEmpty(val)) ? val2 : val;
 		    return rtnVal;
 		},
		/**
		  * Ex.domainUrl
		  *   현재 실행중인 도메인Url을 반환한다.(protocol포함)
		  * @param {*} val 입력값
		  * @param {*} val2 대체값
		  * @return {*} 입력값혹은 대체값
		  * @description 
		  *  
		  * @example
		  *  var str = Ex.domainUrl();
		  * @memberOf Ex
		  **/
 		domainUrl : function()
 		{
			var appUrl = nexacro.getApplication().xadl;
			var addUrl = "";
			if( appUrl.indexOf("/admin/") > -1 ) {
				addUrl = "admin/";
			}
			
			if( !Ex.isEmpty(nexacro.getApplication().gvHost) ) return nexacro.getApplication().gvHost + addUrl;
			
			if ( appUrl.indexOf("quickview.js") > -1 || appUrl.indexOf("file://") > -1 ) 
			{
				var sHost = nexacroEnv.services["svcurl"].url;
				return sHost;
			}			
			return '';
 		},
		/**
		  * Ex.moveCenter
		  *  지정된 버튼을 중앙정렬한다.
		  * @param {form} scope
		  * @param {array} arrObj 배열에 콤퍼넌트 객체를 담는다.
		  * @return N/A
		  * @description 
		  *  arrObj미지정시 [this.btnConfirm , this.btnaa, this.btnCancel ]를 디폴트 값으로 가진다.
		  *  조건이 맞지 않으면 정렬을 시도하지 않음
		  *  객체의 전체크기및 ,top에 상관없이 오직 너비에 대해서만 고려하여 중앙정렬한다.
		  *  배열에 담긴 순서대로 중앙정렬한다.
		  * @example
		  *  Ex.moveCenter(this);
		  *  Ex.moveCenter(this,[this.btnConfirm , this.btnaa, this.btnCancel ]);
		  * @memberOf Ex
		  **/
		moveCenter : function(scope,arrObj)
		{
			if( Ex.isEmpty(arrObj) ) arrObj = [scope.btnConfirm , scope.btnCancel ];

			var width = scope.getOffsetWidth();
			var half = parseInt(width/2);
			var sumBtnWidth = 0;
			for(var i=0;i<arrObj.length;i++) sumBtnWidth += (arrObj[i]?arrObj[i].getOffsetWidth():0);
			if( sumBtnWidth > 0 ){
				sumBtnWidth = sumBtnWidth + (arrObj.length-1)*2;
				var startLeft = half - parseInt(sumBtnWidth/2) - 7;
				if( startLeft < 1 ) return;
				for(var j=0;j<arrObj.length;j++)
				{
					if( arrObj[j] ){
						arrObj[j].setOffsetLeft(startLeft);
						startLeft = startLeft + arrObj[j].getOffsetWidth()+2;
					}
				}
			}
			scope.resetScroll();
		},
		/**
		  * Ex._checkKeys
		  *  주어진 두개의 object들의 properties 가 동일 한지 판별한다.
		  * @param {object} o1 비교대상 Object1
		  * @param {object} o2 비교대상 Object2
		  * @return {boolean} properties 동일여부
		  * @description 
		  *  Ex.equals 함수에 사용된다.
		  * @example
		  *  var b = Ex._checkKeys(Ex.core,Ex.util);	// output : false
		  * @memberOf Ex
		  **/
		"_checkKeys": function(o1, o2)
		{
			for (var i in o1)
			{
				if (o1.hasOwnProperty(i) && typeof o2[i] === 'undefined')
				{
					return false;
				}
			}
			return true;
		},
		/**
		  * Ex.equals
		  *  주어진 두개의 인자에 대하여 동일한 값인지 여부를 판별한다.
		  * @param {*} obj1 비교대상 데이타1
		  * @param {*} obj2 비교대상 데이타2
		  * @return {boolean} 동일여부
		  * @description 
		  *  
		  * @example
		  *  var b = Ex.equals({ID:'LIVART',PW:'1234'},{PW:'1234',ID:'LIVART'});	// output : true
		  *  var b = Ex.equals("A","A");	// output : true
		  *  var b = Ex.equals("20170101",20170101);	// output : false
		  * @memberOf Ex
		  **/		 
		"equals": function(obj1, obj2)
		{
			if (obj1 === obj2)
			{
				return true;
			}
			if ( Ex.isBoolean(obj1) && obj2 == null )
			{
				obj2 = !!obj2;
				return obj1 == obj12;
			}
			if ( Ex.isBoolean(obj2) && obj1 == null )
			{
				obj1 = !!obj1;
				return obj1 == obj12;
			}
			if ( obj1 && obj2 )
			{
				if ( obj1.equals )
				{
					return obj1.equals(obj2);
				}
				if ( obj2.equals )
				{
					return obj2.equals(obj1);
				}
			}
			if (Ex.isDate(obj1) && Ex.isDate(obj2))
			{
				if ( obj1.getTime() == obj2.getTime() )
				{
					return true;
				}
				return false;
			}
			if (Ex.isArray(obj1) && Ex.isArray(obj2))
			{
				if (obj1.length !== obj2.length)
				{
					return false;
				}
				for (var i = 0, l = obj1.length; i < l; i++)
				{
					if (!Ex.equals(obj1[i], obj2[i]))
						return false;
				}
				return true;
			}
			if (obj1 && (typeof obj1 === 'object') && obj1.hasOwnProperty
					&& obj2 && (typeof obj2 === 'object') && obj2.hasOwnProperty )
			{
				if (!Ex._checkKeys(obj1, obj2) || !Ex._checkKeys(obj2, obj1))
				{
					return false;
				}
				for (var i in obj1)
				{
					if (obj1.hasOwnProperty(i) && !Ex.equals(obj1[i], obj2[i]))
					{
						return false;
					}
				}
				return true;
			}
			return obj1 == obj2;
		},
		_toString: (Object.prototype.toString),
		
		// ----------- Ex.core 시작 -----------------
		core : {
		/**
		  * Ex.core.init
		  *  폼 온로드시 기본처리를 수행한다.
		  * @param {form} scope
		  * @return N/A
		  * @description 
		  *  gfn_initForm 실행시 해당 함수를 호츨한다.
		  *  부속 API : Ex.core._set/Ex.core._setDefault
		  * @example
		  *  Ex.core.init(obj);
		  * @memberOf Ex.core
		  **/
		init : function(obj)
		{
			if( obj.name == "divWork" || obj.name == "divUrl"  )
			{

			}
			Ex.core._set(obj);
		},
		_setGridDefault : function(grdObj)
		{
			grdObj.set_autoupdatetype("itemselect");
			if(Ex.util.getSession('gvSysLangCd') != Ex.util.getSession('gvSelLangCd'))
			{
				for (var nCell = 0; nCell < grdObj.getCellCount("Head"); nCell++)
				{
					var autosizecol = grdObj.getCellProperty("head", nCell, "autosizecol");
					
					//trace("[Head] nCell : " + nCell + " autosizecol : " + autosizecol);
					var isChgLang = grdObj.getCellProperty("Head", nCell, "isChgLang");
					var cellText = grdObj.getCellProperty("Head", nCell, "text");
					var chgWord = this.word(cellText);
					
					//trace("nCell=" + nCell + " isChgLang : " + isChgLang + " cellText : " + cellText + " chgWord : " + chgWord);

					if(isChgLang)
					{
						grdObj.setCellProperty("Head", nCell, "text", chgWord);
					}
				}
			}

// 			var fullSize = grdObj.getRealColFullSize();
// 			trace("fullSize : " + fullSize);

			for (var nCell = 0; nCell < grdObj.getCellCount("body"); nCell++)
			{
				dispType = grdObj.getCellProperty("body", nCell, "displaytype");
				editType = grdObj.getCellProperty("body", nCell, "edittype");
				
				if( editType == 'combo' ) grdObj.setCellProperty("body", nCell, "combodisplayrowcount", 10);
				if( dispType == "date" ) grdObj.setCellProperty("body", nCell, "calendardisplaynulltype", "none");
				
				// default grid body toolip
				var cell_text 		= grdObj.getCellProperty('body', nCell, 'text');
				var cell_tooltip	= grdObj.getCellProperty('body', nCell, 'tooltiptext');
				//trace('property >> nCell :: ' + nCell + '\tcell_text :: ' + cell_text + '\tcell_tooltip :: ' + cell_tooltip);
				if( Ex.isEmpty(cell_tooltip) && !Ex.isEmpty(cell_text) )
				{
					if( dispType != 'checkboxcontrol' &&
						dispType != 'imagecontrol' &&
						dispType != 'none' )
					{
						grdObj.setCellProperty('body', nCell, 'tooltiptext', cell_text);
					}
				}
			}
		},
		/**
		  * Ex.core._set
		  *  폼 최초 로드시 컴포넌트 기본 설정을 처리 한다.
		  * @param {form} scope
		  * @return N/A
		  * @description 
		  *  부속 API : Ex.core._setDefault
		  * @example
		  *  Ex.core._set(obj);
		  * @memberOf Ex.core
		  **/
		_set : function(baseObj, subObj)
		{
			if( Ex.isEmpty(subObj)  )
			{
				subObj = baseObj;
			}
			var arrComp = subObj.components;
			var nLength = arrComp.length;
			
			for (var i=0; i<nLength; i++)
			{
				if(arrComp[i] instanceof Div)
				{
					arrComp[i]._formObj = baseObj;
					//trace("Ex.core _set DIV URL : " + arrComp[i].url + " arrComp[i] : " + arrComp[i] + " ID : " + arrComp[i].id);
					if(Ex.util.getSession('gvSysLangCd') != Ex.util.getSession('gvSelLangCd') && arrComp[i].isChgLang && !Ex.isEmpty(arrComp[i].text)) arrComp[i].set_text(this.word(arrComp[i].text));

					
					if( Ex.isEmpty(arrComp[i].url) )
					{
						this._set(baseObj, arrComp[i].form);
					}
					/*
					else
					{
						if(baseObj.id == "_PageForm" || baseObj.id == "_SubPageForm" || baseObj.id == "_PopupPageForm")
						{
							//trace("Ex.core _set() Div obj.id : " + subObj.id+ " arrComp[i].id : " + arrComp[i].id);
							arrComp[i]._formObj = baseObj;
						}
					}
					*/
				}
				else if(arrComp[i] instanceof Tab)
				{
					var oForm = subObj;
					var objComp = arrComp[i];

					var nPages = arrComp[i].tabpages.length;
					for (var j=0; j<nPages;j++)
					{
						if(Ex.util.getSession('gvSysLangCd') != Ex.util.getSession('gvSelLangCd') && arrComp[i].tabpages[j].isChgLang && !Ex.isEmpty(arrComp[i].tabpages[j].text)) arrComp[i].tabpages[j].set_text(this.word(arrComp[i].tabpages[j].text));

						if( Ex.isEmpty(arrComp[i].tabpages[j].url) )
						{
							this._set(baseObj, arrComp[i].tabpages[j].form);
						}
						else
						{
							if(baseObj.id == "_PageForm" || baseObj.id == "_SubPageForm" || baseObj.id == "_PopupPageForm")
							{
								//trace("Ex.core _set() Tabpages obj.id : " + subObj.id+ " arrComp[i].id : " + arrComp[i].id);
								arrComp[i].tabpages[j]._formObj = baseObj;
							}
						}
					}
				}
				else
				{
					//trace("Call _setDefault() Comp : [" + arrComp[i] + "]");
					this._setDefault(subObj, arrComp[i], baseObj);
				}
			}
		},
		/**
		  * Ex.core._setDefault
		  *  화면안의 컴포넌트에 대한 기본 속성을 설정한다.
		  * @param {form} scope
		  * @param {component} objComp component
		  * @return N/A
		  * @description
		  *  폼 최초 로드시 콤포넌트별로 호출한다.
		  * @example
		  *  Ex.core._setDefault(obj, oGrid);
		  * @memberOf Ex.core
		  **/
		_setDefault : function (oForm, objComp, baseForm)
		{
			var strType = objComp.toString().toUpperCase();
			
			//trace("_setDefault() strType : " + strType);
			switch (strType)
			{
				case "[OBJECT STATIC]":
					// grid row count static setting
					objComp.setCountDataset = function(newDs)
					{
						oForm._setChangeDataSet(oForm, objComp, newDs);
					}

					if( !Ex.isEmpty(objComp.countDataset) ) 
					{
						oForm._setChangeDataSet(oForm, objComp, objComp.getCountDataset());
					}
				case "[OBJECT BUTTON]":
				case "[OBJECT GROUPBOX]":
				case "[OBJECT CHECKBOX]":
					break;
				case "[OBJECT RADIO]":
					if(Ex.util.getSession('gvSysLangCd') != Ex.util.getSession('gvSelLangCd') && objComp.isChgLang && !Ex.isEmpty(objComp.text)) objComp.set_text(this.word(objComp.text));
				case "[OBJECT EDIT]":
					if( strType == "[OBJECT EDIT]" ) {
						if(Ex.util.getSession('gvSysLangCd') != Ex.util.getSession('gvSelLangCd') && objComp.isChgLang && !Ex.isEmpty(objComp.value)) objComp.set_value(this.word(objComp.value));
					}
				case "[OBJECT COMBO]":
					if( strType == "[OBJECT COMBO]" ) 
					{
						objComp.set_scrollbarsize(15);
						
						// combo default filterlike
						var comboType = objComp.type;
						if( Ex.isEmpty(comboType) || comboType == 'dropdown' )
							objComp.set_type('filterlike');
					}
				case "[OBJECT MASKEDIT]":
				case "[OBJECT CALENDAR]":
				case "[OBJECT TEXTAREA]":
				case "[OBJECT SPIN]":
				
					if(strType == "[OBJECT TEXTAREA]")
					{
						trace("objComp.scrollbarsize : " + objComp.scrollbarsize);
						if( Ex.isEmpty(objComp.scrollbarsize) )
						{
							objComp.set_scrollbarsize(18);
						}
					}
					
					objComp.setFocusRed = function(b) {
						var str = this.value||'';
						str = str.toString();
// 						if(objComp.enable)
// 						{
// 							if( Ex.isEmpty(nexacro.trim(str)) ) this.set_border("1px solid red");		
// 							this.setFocus(b);
// 						}
						if( Ex.isEmpty(nexacro.trim(str)) ) this.set_border("1px solid red");		
						this.setFocus(b);						
					};
					
					var inputCmm_onkillfocus = function(obj, e)
					{
						obj.set_border("");
					};
					
					objComp.addEventHandler("onkillfocus", inputCmm_onkillfocus, oForm);	
					break;
			}
			switch (strType)
			{
				case "[OBJECT GRID]":
					// checkbox cell click event cell click으로 합치는 이벤트 추가
					var onBodyLbtndown = function(obj, e)
					{
						if(!obj.readonly)
						{
							if( 	obj.getCellPropertyValue(e.row, e.cell, 'displaytype') == 'checkboxcontrol' 
								 && obj.getCellPropertyValue(e.row, e.cell, 'edittype') == 'checkbox' )
							{
								if( e.fromobject.toString().toUpperCase() != '[OBJECT CHECKBOXCONTROL]' ) {
									var BIND_COL 	= obj.getCellProperty('body', e.cell, 'text').toString().split(':')[1];
									if( !Ex.isEmpty(BIND_COL) )
									{
										var bindDs = obj.getBindDataset();
										var ORG_VALUE = bindDs.getColumn(e.row, BIND_COL);
										bindDs.setColumn(e.row, BIND_COL, (ORG_VALUE=='0'?'1':'0'));
									}
								}
							}
						}
					};
					objComp.addEventHandler('onlbuttondown', onBodyLbtndown, oForm);

					// scrollbar size
					var nScrollSize = 15;
					objComp.set_scrollbardecbuttonsize(nScrollSize);
					objComp.set_scrollbarincbuttonsize(nScrollSize);
					objComp.set_scrollbarsize(nScrollSize);
					
					// scrollbar 최소 크기 default 설정
					if( Ex.isEmpty(objComp.scrollbarbarminsize) )
						objComp.set_scrollbarbarminsize(40);
					
					objComp.checkValidate = function(isAll)
					{
						return Ex.util.checkValidateGrid(oForm, objComp, isAll);
					};
					
 					if (objComp.autofittype == "col")
 					{
						objComp.set_cellsizingtype("col");
					}
					objComp.set_autoenter("select");
					
					var def_fmt = "default";
					
					var arrformats = objComp.getFormatIdList();
					if( arrformats.length > 1 ) 
					{
						def_fmt = objComp.formatid;
					}
					
					var editType = '';
					//trace("sysLangCd : " + Ex.util.getSession('gvSysLangCd') + " SelLangCd : " + Ex.util.getSession('gvSelLangCd'));

// 					for (var f=0; f<arrformats.length; f++)
// 					{
// 						objComp.set_formatid(arrformats[f]);
// 					}

					if( arrformats.length > 1 )
					{
						objComp.set_formatid(def_fmt);
					}
					this._setGridDefault(objComp);

					//trace("objComp.useCheck:::" + (objComp.useCheck ? "Y" : "N"));
					//trace("objComp.useSort:::" + (objComp.useSort ? "Y" : "N"));
					//if( Ex.isEmpty(objComp.useCheck) ) objComp.useCheck = true;
					//if( objComp.useSort ) objComp.useSort = true;
					
					var objDs = objComp.getBindDataset();
					
					if(objComp.useCopy)
					{
						//var copyPaste = new Ex.grid.copy(oForm, true, true);
						//copyPaste.addGrid(objComp);
						var copyGridCellData = function(grid, e)
						{
							if(!grid.useCopy) return;
							//trace("this._getGridCellClipBoard() e.ctrlkey : " + e.ctrlkey + ", e.keycode : " + e.keycode);
							if(Ex.isEmpty(grid.getEditSelectedText()) && e.ctrlkey && !e.shiftKey && !e.altKey && e.keycode == 67)
							{
								if(grid.selecttype == "row" || grid.selecttype == "cell")
								{
									/*
									var displaytype = grid.getCellPropertyValue(grid.currentrow, grid.currentcell, "displaytype");
									
									var value = !Ex.isEmpty(grid.getCellValue(grid.currentrow, grid.currentcell)) ? grid.getCellValue(grid.currentrow, grid.currentcell) : "";;
									var text = !Ex.isEmpty(grid.getCellText(grid.currentrow, grid.currentcell)) ? grid.getCellText(grid.currentrow, grid.currentcell) : "";
									
									//trace("displaytype ::: " + displaytype);
									if(displaytype == "combotext")
									{
										t.value = text + (!Ex.isEmpty(value) ? "[" + grid.getCellValue(grid.currentrow, grid.currentcell) + "]" : "");
									}
									else
									{
										t.value = text;
									}
									*/
									Ex.util.copyClipBoard(grid.getCellText(grid.currentrow, grid.currentcell));
								}
								else if(grid.selecttype == "area")
								{
									var rows = grid.getSelectedRows();
									var staCol = nexacro.toNumber(grid.selectstartcol);
									var endCol = nexacro.toNumber(grid.selectendcol);
									//trace("grid.getSelectedRows() : " + rows);
									//trace("grid.getSelectedRows().length : " + rows.length);
									//trace("grid.selectstartcol : " + staCol + ", grid.selectendcol : " + endCol);

									var clipText = "";

									for(var i=0; i<rows.length; i++)
									{
										if(i>0)
										{
											clipText += "\n";
										}

										for(var j=staCol; j<=endCol; j++)
										{
											if(j > staCol)
											{
												clipText += "\t";;
											}
											//trace("i : " + i + ", j : " + j + ", text:" + grid.getCellText(grid.getSelectedRows()[i], j));
											clipText += grid.getCellText(nexacro.toNumber(grid.getSelectedRows()[i]), j) || '';
										}
									}

									if( !Ex.isEmpty(clipText) )
									{
										Ex.util.copyClipBoard(clipText);
									}
								}
								else if(grid.selecttype == "multiarea")
								{
									var sRow	= grid.selectstartrow;
									var eRow	= grid.selectendrow;
									var sCol	= grid.selectstartcol;
									var eCol	= grid.selectendcol;
									
									var staRow = Math.min.apply(null, sRow);
									var endRow = Math.max.apply(null, eRow);
									var staCol = Math.min.apply(null, sRow);
									
									/*
									trace("staRow :::: " + staRow);
									trace("endRow :::: " + endRow);
									trace("staCol :::: " + staCol);

									trace("\nsRow :::: " + sRow);
									trace("eRow :::: " + eRow);
									trace("sCol :::: " + sCol);
									trace("eCol :::: " + eCol);
									
									trace("\nsRow.length :::: " + sRow.length);
									trace("eRow.length :::: " + eRow.length);
									trace("sCol.length :::: " + sCol.length);
									trace("eCol.length :::: " + eCol.length);
									*/
									
									var clipText = "";
									var isRowChg = true;

									if(sRow.length > 1) //컨트롤 키를 눌러 선택 했을 경우 
									{
										for(var i=staRow; i<=endRow; i++)
										{
											if( !Ex.isEmpty(clipText) )
											{
												clipText += "\n";
												isRowChg = true;
											}
											
											for(var j=0; j<grid.getCellCount("Body"); j++)
											{
												var isExist = false;
												
												for(var k=0; k<sRow.length; k++)
												{
													if(i >= sRow[k] && eRow[k] >= i)
													{
														if(j >= sCol[k] && eCol[k] >= j)
														{
															//trace("exist i=" + i + " j=" + j + " k=" + k + " sRow[k]=" + sRow[k] + " eRow[k]=" + eRow[k] + " sCol[k]=" + sCol[k] + " eCol[k]=" + eCol[k]);
															isExist = true;
															//trace("value : " + grid.getCellText(i, j) + " isRowChg : " + isRowChg);
															break;
														}
													}
												}
												
												/*
												if(isExist)
												{
													if(isRowChg)
													{
														isRowChg = false;
													}
													else
													{
														clipText += "\t";
													}
												}
												*/
												
												if(isExist)
												{
													 clipText += (!isRowChg ? "\t" : "") + grid.getCellText(i, j)|| '';
													 if(isRowChg) isRowChg = false;
												}
											}
										}
									}
									else
									{ // 쉬프트 키를 눌러 선택 하거나 드래그로 선택 한 경우 
										//trace(sRow + " >> : " + eRow);
										for(var i=sRow; i<=eRow; i++)
										{
											if( !Ex.isEmpty(clipText) )
											{
												clipText += "\n";
												isRowChg = true;
											}

											for(var j=sCol; j<=eCol; j++)
											{
												clipText += (j>sCol ? "\t" : "") + grid.getCellText(i, j)|| '';
												//trace("선택된 row = " + i + " 선택된 col = " + j + " 값 = "+ grid.getCellText(i, j));
											}
										}
									}
									
									if( !Ex.isEmpty(clipText) )
									{
										Ex.util.copyClipBoard(clipText);
									}
								}
								else if(grid.selecttype == "multirow")
								{
									var rows = grid.getSelectedRows();
									var staCol = nexacro.toNumber(0);
									var endCol = nexacro.toNumber(grid.getCellCount("body")-1);
									//trace("multirow grid.getSelectedRows() : " + rows);
									//trace("multirow grid.getSelectedRows().length : " + rows.length);
									//trace("multirow grid.selectstartcol : " + staCol + ", grid.selectendcol : " + endCol);

									var clipText = "";

									for(var i=0; i<rows.length; i++)
									{
										if(i>0)
										{
											clipText += "\n";
										}

										for(var j=staCol; j<=endCol; j++)
										{
											if(j > staCol)
											{
												clipText += "\t";;
											}
											//trace("i : " + i + ", j : " + j + ", text:" + grid.getCellText(grid.getSelectedRows()[i], j));
											clipText += grid.getCellText(nexacro.toNumber(grid.getSelectedRows()[i]), j)|| '';
										}
									}

									if( !Ex.isEmpty(clipText) )
									{
										Ex.util.copyClipBoard(clipText);
									}
								}
							}
						};
						objComp.addEventHandler("onkeydown", copyGridCellData, oForm);
					}

					// grid head click sort 처리
					if( objComp.useSort )
					{
						var fnGridHeadSort = function(obj, e)
						{
							var objDs = objComp.getBindDataset();
							if( Ex.isEmpty(objDs) )		return;
							if( objDs.rowcount == 0 )	return;
							
							//trace("Ex.core.fnGridHeadSort() e.clickitem :::: " + e.clickitem);
							if(e.clickitem == "expandbutton") return;

							var nRowCnt = objComp.getFormatRowCount();
							var nHeadRowCnt = 0;
			
							//그리드 Head Row 갯수 구하기
							for(i=0; i<nRowCnt; i++)
							{
								if(objComp.getFormatRowProperty(i, "band") == "head") nHeadRowCnt++;
							}
			
							var nHeadRowStart = objComp.getCellProperty("head", e.cell, "row");
				
							//현재 Cell의 Row Sapn 
							var nHeadRowSpan = objComp.getCellProperty("head", e.cell, "rowspan");
				
							//현재 Cell의 마지막 Row Index
							var nHeadRowEnd = nHeadRowStart + nHeadRowSpan -1;
				
							//Head 마지막 Row에 해당하는 Cell에 Filter 기능 추가
							if (nHeadRowEnd != nHeadRowCnt-1) return;

							for (var i = 0; i < objComp.getCellCount("head"); i++)
							{	
								if(obj.getCellProperty("head", e.cell, "displaytype").toUpperCase() == 'CHECKBOXCONTROL') 
									continue;
									
								var sHeadText = obj.getCellText(-1, i)||'';
								var nLen      = sHeadText.length - 1;  
								
								if (i == e.cell)
								{
									var filterBodyCell = obj.getCellProperty("head", i, "validation");
									//trace("i=" + i + " filterBodyCell : " + filterBodyCell);
									
									if( !Ex.isEmpty(filterBodyCell) )
									{
										for(var j=0; j<obj.getCellCount("body"); j++)
										{
											var bCellId = obj.getCellProperty("body", j, "id");
											//trace("j=" + j + " bCellId : " + bCellId);
											if(filterBodyCell == bCellId)
											{
												nBodyCol = j;
												break;
											}
										}
										//trace("!Ex.isEmpty(filterBodyCell) nBodyCol : " + nBodyCol);
										
									}
									else
									{
										for(var j=0; j<obj.getCellCount("body"); j++)
										{
											var hCol = obj.getCellProperty("Head", i, "col")
											if(hCol == obj.getCellProperty("Body", j, "col"))
											{
												nBodyCol = j;
												break;
											}
										}
										//trace("Ex.isEmpty(filterBodyCell) nBodyCol : " + nBodyCol);
									}
									//Head의 Col Index로 Body의 Index 찾기
									
									//var sColId = Ex.isEmpty(obj.getCellProperty("body", e.col, "text")) ? "" : obj.getCellProperty("body", e.col,"text");
									var sColId = obj.getCellProperty("body", nBodyCol, "text");
										sColId = String(sColId).split(":");

									//trace("sColId ::: " + sColId + " e.col : " + e.col + " e.cell : " + e.cell);
									if (sHeadText.substr(nLen) == "▲") 	// 현재 내림차순 -> 오름차순
									{
										obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▼");
										objDs.set_keystring("S:-" + sColId[1]);
									}
									else if (sHeadText.substr(nLen) == "▼") 	// 현재 오름차순 -> 정렬x 
									{
										obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
										objDs.set_keystring("");
									}
									else 		// 현재 정렬 x -> 내림차순
									{
										obj.setCellProperty("head", i, "text", sHeadText+"▲");
										objDs.set_keystring("S:+" + sColId[1]);
									}
								}
								else	// sort 초기화
								{
									if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼") 
									{
										obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
									}
								}
							}	
						};
						objComp.addEventHandler("onheadclick", fnGridHeadSort, oForm);
						
						if( objDs )
						{
							var dsOnLoadCompleted = function(obj, e) 
							{
								if( e.reason == 0 )
								{
									for (var i = 0; i < objComp.getCellCount("head"); i++)	// sort 초기화
									{
										var sHeadText = objComp.getCellText(-1, i)||'';
										var nLen      = sHeadText.length - 1;  
										if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼") 
										{
											objComp.setCellProperty("head", i, "text", sHeadText.substr(0, nLen));
										}
									}
									//trace("objDs : " + objDs.id);
									objDs.set_keystring("");
								}
							};
							var nIdx = objDs.findEventHandler("onload", dsOnLoadCompleted, oForm);
							if( nIdx < 0 ) objDs.addEventHandler("onload", dsOnLoadCompleted , oForm);							
						}
					}
					// grid head checkbox click 처리
					if( objComp.useCheck )
					{
						var onHeadChkclick = function(obj,e)	//grid head checkbox click event
						{							
							if(obj.readonly) return;
						
							if(obj.getCellProperty("head", e.cell, "displaytype").toUpperCase() == 'CHECKBOXCONTROL' && obj.getBindCellIndex('body', 'CHK') == e.cell)
							{
								var objDs = obj.getBindDataset();
								if( Ex.isEmpty(objDs) )	return;
								
								// head checkbox 값 setting
								var chkVal = 0;
								//if (obj.getCellProperty("head", e.cell, "text") == '1')		chkVal = '0';
								//else														chkVal = '1';
								//obj.setCellProperty("head", e.cell, "text", chkVal);
								if(obj.getHeadValue(e.cell) == '1')	chkVal = '1';
								else								chkVal = '0';
								obj.setHeadValue(e.cell, chkVal);
									
								objDs.set_enableevent(false);
								for(var i = 0; i < objDs.rowcount; i++)
								{
									if(obj.getCellPropertyValue(i, obj.getBindCellIndex('body', 'CHK'), 'displaytype').toUpperCase() == 'CHECKBOXCONTROL' )
									{
										// bind dataset 값 setting
										var colNm = obj.getCellProperty("body", e.cell, "text").split(':')[1];
										if( !Ex.isEmpty(colNm) ) {
											objDs.setColumn(i, colNm, chkVal);
										}
									}
								}
								objDs.set_enableevent(true);
								
							}
						};
						objComp.addEventHandler("onheadclick", onHeadChkclick, oForm);
					}
					
					if( objComp.useFilter )
					{
						//trace("objComp.id ::: " + objComp.id);

						objComp.filterActvieYn = "N";

						var popMenuClick = function(obj, e)
						{
							//trace("popMenuClick() objComp.id : " + objComp.id + " e.id : " + e.id + " e.fromobject : " + e.fromobject + " e.fromreferenceobject : " + e.fromreferenceobject);
							if(e.id == "FILTER")
							{
								Ex.core.addHeadFilter(oForm, objComp);
							}
							else if(e.id == "RESET")
							{
								Ex.core.removeHeadFilter(oForm, objComp);
							}
							else if(e.id == "HIDE")
							{
								Ex.core.removeHeadFilter(oForm, objComp, true);
							}
						};

						var objPopupMenu;
						
						if(!oForm.isValidObject("pmnGrid" + objComp.id))
						{
							var innerDs = new Dataset();
							innerDs.addColumn("idcolumn", "string", 256);
							innerDs.addColumn("captioncolumn", "string", 256);
							innerDs.addColumn("levelcolumn", "string", 256);
							innerDs.addColumn("enablecolumn", "string", 256);
							innerDs.addColumn("checkboxcolumn", "string", 256);
							innerDs.addColumn("hotkeycolumn", "string", 256);
							innerDs.addColumn("userdatacolumn", "string", 256);

							var aRow = innerDs.addRow();
							innerDs.setColumn(aRow, "idcolumn", "FILTER");
							innerDs.setColumn(aRow, "captioncolumn", Ex.core.word("필터 사용"));
							innerDs.setColumn(aRow, "levelcolumn", 0);
							innerDs.setColumn(aRow, "enablecolumn", 1);	

							aRow = innerDs.addRow();
							innerDs.setColumn(aRow, "idcolumn", "RESET");
							innerDs.setColumn(aRow, "captioncolumn", Ex.core.word("필터 초기화"));
							innerDs.setColumn(aRow, "levelcolumn", 0);
							innerDs.setColumn(aRow, "enablecolumn", 1);

							var aRow = innerDs.addRow();
							innerDs.setColumn(aRow, "idcolumn", "HIDE");
							innerDs.setColumn(aRow, "captioncolumn", Ex.core.word("필터 미사용"));
							innerDs.setColumn(aRow, "levelcolumn", 0);
							innerDs.setColumn(aRow, "enablecolumn", 1);	

							//PopupMenu.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
							objPopupMenu = new PopupMenu("pmnGrid" + objComp.id, 0, 0, 120, 46, null, null);

							objPopupMenu.set_idcolumn("idcolumn");
							objPopupMenu.set_captioncolumn("captioncolumn");
							objPopupMenu.set_levelcolumn("levelcolumn");
							objPopupMenu.set_enablecolumn("enablecolumn");
							objPopupMenu.set_innerdataset(innerDs);

							var idx = oForm.addChild("pmnGrid" + objComp.id, objPopupMenu);
							objPopupMenu.show();
							
							objPopupMenu.addEventHandler("onmenuclick", popMenuClick, oForm);
						
						/*
						}
						else
						{
							objPopupMenu = oForm["pmnGrid"];
						}
						*/
						//trace("objComp.id : " + objComp.id + " objPopupMenu : " + objPopupMenu);
						/*
						var n = objPopupMenu.findEventHandler("onmenuclick", popMenuClick, oForm);
						trace("objComp.id : " + objComp.id + " n : " + n);
						if( n < 0 )
						{
							objPopupMenu.addEventHandler("onmenuclick", popMenuClick, oForm);
						}
						*/

							if(objComp.autoFilter)	Ex.core.addHeadFilter(oForm, objComp);

							var gridRButtonUp = function(obj, e)
							{
								var x = nexacro.toNumber(system.getCursorX()) - nexacro.toNumber(system.clientToScreenX(obj, 0));
								var y = nexacro.toNumber(system.getCursorY()) - nexacro.toNumber(system.clientToScreenY(obj, 0));

								var filterStr = "";
								//trace("gridRButtonUp() obj.id : " + obj.id + " obj.filterActvieYn : " + obj.filterActvieYn);
								if(obj.filterActvieYn == "Y") filterStr += "idcolumn=='HIDE'";
								else filterStr += "idcolumn=='FILTER'";

								if( !Ex.isEmpty(obj.getBindDataset().filterstr) )
								{
									filterStr += " || idcolumn=='RESET'";
								}
								
								objPopupMenu.getInnerDataset().filter(filterStr);
								objPopupMenu.trackPopupByComponent(obj, x, y);
							}
							objComp.addEventHandler("onrbuttonup", gridRButtonUp, oForm);
						}
					}
					break;

				case "[OBJECT COMBO]":
 					if (objComp.displayrowcount == -1 || Ex.isEmpty(objComp.displayrowcount) ) objComp.set_displayrowcount(10);
					break;

				case "[OBJECT MASKEDIT]":
					objComp.set_trimtype("both") ;
					break;
				/*
				case "[OBJECT CALENDAR]":
					if(objComp.dateformat == "yyyy-MM-dd ddd") objComp.set_dateformat("yyyy-MM-dd");
					var oPdv = oForm['_pdvCal_'];
					if( !oPdv ) {
						oPdv = new PopupDiv;
						oPdv.init("_pdvCal_", 0, 0, 252, 320);
						oForm.addChild("_pdvCal_", oPdv);
						oPdv.set_url("comm::comPopCalendar.xfdl");
						oPdv.form.set_scrollbartype("none");
						oPdv.set_cssclass("div_WF_calendar");
						
// 						oPdv.style.set_shadow("outer 0,5 6 #80808033");
// 						oPdv.set_border("1 solid #e3e3e7ff");
// 						oPdv.style.set_background("#ffffffff");

						oPdv.show();
					}
					var _pdvCal_ondropdown = function(obj, e)
					{
						oPdv.pCalendar = objComp;
						if( oPdv.fnSetDate ) oPdv.fnSetDate(obj.value);
						
						oPdv.trackPopupByComponent(obj , 0,obj.getOffsetHeight());
						return false;
					}
					objComp.addEventHandler("ondropdown",_pdvCal_ondropdown,oForm);
					break;
				*/
				case "[OBJECT STATIC]":
					if( !Ex.isEmpty(objComp.bind) ) {
						var oDs = null;
						if( oForm[objComp.bind] )
							oDs = oForm[objComp.bind];
						else if( oForm.parent[objComp.bind] )
							oDs = oForm.parent[objComp.bind];
						else if( oForm.parent.parent[objComp.bind] )
							oDs = oForm.parent.parent[objComp.bind];
						
						if( oDs ) {
							if( !objComp.usedecorate ) objComp.set_usedecorate(true);
							objComp.set_text("Total : <b v='true'><fc v='#4747b3'> "+oDs.rowcount+"</fc></b>");

							var n = oDs.findEventHandler("onrowsetchanged", oForm._staticDatasetCnt_onrowsetchanged, oForm);
							if( n < 0 )
							{
								oForm._staticDatasetCnt_onrowsetchanged = function(obj,e)
								{
									objComp.set_text("Total : <b v='true'><fc v='#4747b3'> "+obj.rowcount+"</fc></b>");
								};

								oDs.addEventHandler("onrowsetchanged",oForm._staticDatasetCnt_onrowsetchanged,oForm);
							}
							
						}
					}
					break;
				
				case "[OBJECT EDIT]":
					// x : clear버튼구현
					var edtCmm_onkillfocus = function(obj, e)
					{
						var str = obj.value||'';
						str = str.toString();
						if( !Ex.isEmpty(nexacro.trim(str)) ) {
							obj.set_border("");
						}
						var xbrtn = this['_xbrtn_'];
						if( xbrtn && xbrtn.edit == obj ) {
							if( this.getFocus() !=  obj && this.getFocus() != xbrtn) {
								xbrtn.set_visible(false);
							}
						} else { 
							xbrtn.set_visible(false);
						}
					};
					var edtCmm_onsetfocus = function(obj, e)
					{
						var nL = obj.left; 
						var nT = obj.top; 
						var nW = obj.width; 
						var nH = obj.height; 
						var nR = obj.right; 
						var nB = obj.bottom;

						//trace("edtCmm_onsetfocus nL:[" + nL + "] nT:[" + nT + "] nW:[" + nW + "] nH:[" + nH + "] nR:[" + nR + "] nB:[" + nB + "]");

						var xBtn = this['_xbrtn_'];
						if( !xBtn ) {
							xBtn = new Button;
							xBtn.init("_xbrtn_", nL, nT, nW, nH, nR, nB);
							this.addChild("_xbrtn_", xBtn);

							xBtn.set_cssclass("btn_WF_clear");
							xBtn.set_tabstop(false);
							xBtn.set_visible(false);
							xBtn.show();
							
							var btnEditClear_onclick = function(obj,e)
							{
								obj.edit.set_value("");
								obj.edit.setFocus();
							};
							xBtn.addEventHandler("onclick",btnEditClear_onclick,oForm);							
						}
						xBtn.edit = objComp;
						xBtn.move(nL, nT, nW, nH, nR, nB );
						xBtn.set_top(obj.getOffsetTop()+2);
						var edtNm = obj.name;
						//xBtn.set_left(obj.getOffsetRight() - 18 );
						xBtn.set_left(obj.name + ':-18px');
						xBtn.set_width(15 );
						xBtn.set_height(obj.getOffsetHeight() -4 );
						if(objComp.enable && !objComp.readonly ) {
							xBtn.set_visible(true);
						}
					};
					var edtCmm_oneditclick = function(obj,e)
					{
						// 카렌다 다음 에디트에 마우스 클릭시 포커스(커서) 진입에 실패하는 경우가 있어 코드 추가
						if( obj.enable ) obj.setFocus();
					};
					objComp.addEventHandler("onkillfocus", edtCmm_onkillfocus, oForm);					
					objComp.addEventHandler("onsetfocus", edtCmm_onsetfocus, oForm);					
					objComp.addEventHandler("oneditclick", edtCmm_oneditclick, oForm);					
					break;
				

				case "[OBJECT DIV]" :
					// scrollbar size
					var nScrollSize = 15;
					objComp.set_formscrollbardecbuttonsize(nScrollSize);
					objComp.set_formscrollbarincbuttonsize(nScrollSize);
					objComp.set_formscrollbarsize(nScrollSize);
					
					// scrollbar 최소 크기 default 설정
					if( Ex.isEmpty(objComp.scrollbarbarminsize) )
						objComp.set_formscrollbarbarminsize(40);
					
					//trace("Ex.core _setDefault() objComp.id : " + objComp.id + " oForm.id : " + oForm.id + " baseForm.id : " + baseForm.id);
					var isButtonGroup = objComp.isButtonGroup;
					if( Ex.isEmpty(isButtonGroup) ) isButtonGroup = false;
					
					// div 안의 버튼 align 처리(right / margin:5px)
					if(isButtonGroup == true)	Ex.util.setButtonAlign(objComp, 'right', true);		// right: right정렬, true:visible button만/false:visible 상관없이 모든 버튼 대상

					if(baseForm.id == "_PageForm" || baseForm.id == "_SubPageForm" || baseForm.id == "_PopupPageForm")
					{
						if( !Ex.isEmpty(objComp.url) )
						{
							//trace("Ex.core _setDefault() Div baseForm.id : " + baseForm.id + " objComp.id : " + objComp.id);
							objComp._formObj = baseForm;
						}
					}
					break;
			}
		},
		addHeadFilter : function(scope, objGrid)
		{
			var sPopupId = "popFilter";
			var objPopup;
			var objParent = objGrid.parent;
			
			//필터 PopupDiv가 존재하는 경우 가져오기
			if(objParent[sPopupId])
			{
				objPopup = objParent[sPopupId];
				objPopup.move(0, 0, 0, 0);
			}
			//필더 PopupDiv가 없는 경우 만들기
			else
			{
				objPopup = new PopupDiv(sPopupId, 0, 0, 0, 0, null, null);
				objPopup.set_url("comm::comGridHeadFilterPop.xfdl");
				objParent.addChild(sPopupId, objPopup);
				objPopup.show();
			}
			
			//필터 설정 정보 만들기
			objGrid.config = {
								"cols" : [], 					//Col별 필터 정보를 관리할 Array
								"filterpop" : objPopup 			//필터 선택용 PopupDiv
							};
			
			//그리드 Row의 갯수 가져오기
			var nRowCnt = objGrid.getFormatRowCount();
			
			//그리드 Head Row의 갯수를 구하기 위한 변수
			var nHeadRowCnt = 0;
			
			//그리드 Head Row 갯수 구하기
			for(i=0;i<nRowCnt;i++)
			{
				if(objGrid.getFormatRowProperty(i, "band") == "head") nHeadRowCnt++;
			}
			
			//Head의 Cell 갯수 가져오기
			var nHeadCellCnt = objGrid.getCellCount("head");

			//trace("nHeadCellCnt : " + nHeadCellCnt);

			for(var i=0;i<nHeadCellCnt;i++)
			{
				objGrid.config.cols.push({
					"bind" : null,	//바인드된 컬럼명
					"value" : null  //Filter 문자열
				});
				
				var isFilterCell = Ex.isEmpty(objGrid.getCellProperty("head", i, "isFilterCell")) ? false : objGrid.getCellProperty("head", i, "isFilterCell");
				
				//현재 Cell의 시작 Row Index
				var nHeadRowStart = objGrid.getCellProperty("head", i, "row");
				
				//현재 Cell의 Row Sapn 
				var nHeadRowSpan = objGrid.getCellProperty("head", i, "rowspan");
				
				//현재 Cell의 마지막 Row Index
				var nHeadRowEnd = nHeadRowStart + nHeadRowSpan -1;
				
				//Head 마지막 Row에 해당하는 Cell에 Filter 기능 추가
				if (nHeadRowEnd == nHeadRowCnt-1)
				{
					if(isFilterCell)
					{
						//Head의 Col Index로 Body의 Index 찾기
						var nHeadCol = objGrid.getCellProperty("head", i, "col");
						var nBodyCol = -1;
						
						var filterBodyCell = objGrid.getCellProperty("head", i, "validation");
						//trace("i=" + i + " filterBodyCell : " + filterBodyCell);
						
						if( !Ex.isEmpty(filterBodyCell) )
						{
							for(var j=0; j<objGrid.getCellCount("body"); j++)
							{
								var bCellId = objGrid.getCellProperty("body", j, "id");
								//trace("j=" + j + " bCellId : " + bCellId);
								if(filterBodyCell == bCellId)
								{
									nBodyCol = j;
									break;
								}
							}
						}
						else
						{
							for(var j=0; j<objGrid.getCellCount("body"); j++)
							{
								var hCol = objGrid.getCellProperty("Head", i, "col")
								if(hCol == objGrid.getCellProperty("Body", j, "col"))
								{
									nBodyCol = j;
									break;
								}
							}
							//trace("Ex.isEmpty(filterBodyCell) nBodyCol : " + nBodyCol);
						}
						
						var hText = objGrid.getCellProperty("head", i, "text");
						var sText = objGrid.getCellProperty("body", nBodyCol, "text");

						//if( Ex.isEmpty(sValidation) )
						//Bind된 Cell일 경우 Col별 필터 정보 입력
						if(sText && sText.indexOf("bind:")>-1)
						{
							var sBindColumn = sText.replace("bind:", "");
							if(sBindColumn != "CHK" && sBindColumn != "ROWFLAG")
							{
								//trace("addHeadFilter() col=" + i + " hText : " + hText + " bind : " + sBindColumn);
								objGrid.config.cols[i] = {
									"bind" : sBindColumn,	//바인드된 컬럼명
									"value" : null          //Filter 문자열
								};
								//expand버튼이 보이도록 설정
								//trace("addHeadFilter i=" + i + " nHeadCol : " + nHeadCol + " nBodyCol : " + nBodyCol + " sText : " + sText);
								objGrid.setCellProperty("head", i, "expandsize", "24");
								objGrid.setCellProperty("head", i, "expandshow", "show");
								objGrid.setCellProperty("head", i, "expandimage", "theme://images/gridFilter_D.png");
							}
						}
					}
				}
			}
			//필터에 필요한 이벤트 추가
			var idx = objGrid.addEventHandler("onexpandup", scope._filterGridOnExpandUp, scope);
			//trace("addHeadFilter() objGrid.id : " + objGrid.id);
			objGrid.filterActvieYn = "Y";
		},
		/**
		* @description 	      : 필터 삭제 함수
		* @param objGrid	  : 필터 적용된 그리드 컴포넌트
		* @return             : 없음
		*/
		removeHeadFilter : function(scope, objGrid, isDel)
		{
			var sPopupId = "popFilter";
			var objPopup;
			var objDs = objGrid.getBindDataset();
			var objParent = objGrid.parent;
			var objConfig = objGrid.config;
			
			//필터용 PopupDiv 삭제
			//var objPopup = objParent.removeChild(sPopupId);
			//if(objPopup != null) objPopup.destroy();
			
			//그리드 Row의 갯수 가져오기
			var nRowCnt = objGrid.getFormatRowCount();
			
			//그리드 Head Row의 갯수를 구하기 위한 변수
			var nHeadRowCnt = 0;
			
			//그리드 Head Row 갯수 구하기
			for(i=0;i<nRowCnt;i++) if(objGrid.getFormatRowProperty(i, "band") == "head") nHeadRowCnt++;
			
			//Head의 Cell 갯수 가져오기
			var nHeadCellCnt = objGrid.getCellCount("head");
				
			for(i=0; i<nHeadCellCnt; i++)
			{
				//현재 Cell의 시작 Row Index
				var nHeadRowStart = objGrid.getCellProperty("head", i, "row");
				
				//현재 Cell의 Row Sapn 
				var nHeadRowSpan = objGrid.getCellProperty("head", i, "rowspan");
				
				//현재 Cell의 마지막 Row Index
				var nHeadRowEnd = nHeadRowStart + nHeadRowSpan -1;
				
				//Head 마지막 Row에 해당하는 Cell에 Filter 기능 추가
				if (nHeadRowEnd == nHeadRowCnt-1)
				{
					var isFilterCell = Ex.isEmpty(objGrid.getCellProperty("head", i, "isFilterCell")) ? false : objGrid.getCellProperty("head", i, "isFilterCell");
					
					if(isFilterCell)
					{
						//objGrid.setCellProperty("head", i, "expandimage", "theme://images/btn_WF_Grdexpand.png");
						objGrid.setCellProperty("head", i, "expandimage", "theme://images/gridFilter_D.png");
					}
				}
			}
			
			for(var i=0; i<objGrid.config.cols.length; i++)
			{
				if(objGrid.config.cols[i] && objGrid.config.cols[i].value)
				{
					objGrid.config.cols[i].value = "";
				}
			}

			//필터 실행 함수 호출
			Ex.core.applyFilter(objGrid);
			
			if(isDel) Ex.core.hideHeadFilter(scope, objGrid);
		},
		/**
		* @description 	      : 필터 감추기 함수
		* @param objGrid	  : 필터 적용된 그리드 컴포넌트
		* @return             : 없음
		*/
		hideHeadFilter : function(scope, objGrid)
		{
			//그리드 Row의 갯수 가져오기
			var nRowCnt = objGrid.getFormatRowCount();
			
			//그리드 Head Row의 갯수를 구하기 위한 변수
			var nHeadRowCnt = 0;
			
			//그리드 Head Row 갯수 구하기
			for(i=0;i<nRowCnt;i++)
			{
				if(objGrid.getFormatRowProperty(i, "band") == "head") nHeadRowCnt++;
			}

			//Head의 Cell 갯수 가져오기
			var nHeadCellCnt = objGrid.getCellCount("head");
				
			for(i=0;i<nHeadCellCnt;i++)
			{
				//현재 Cell의 시작 Row Index
				var nHeadRowStart = objGrid.getCellProperty("head", i, "row");
				
				//현재 Cell의 Row Sapn 
				var nHeadRowSpan = objGrid.getCellProperty("head", i, "rowspan");
				
				//현재 Cell의 마지막 Row Index
				var nHeadRowEnd = nHeadRowStart + nHeadRowSpan -1;
				
				//Head 마지막 Row에 해당하는 Cell에 Filter 기능 추가
				if(nHeadRowEnd==nHeadRowCnt-1)
				{
					var isFilterCell = Ex.isEmpty(objGrid.getCellProperty("head", i, "isFilterCell")) ? false : objGrid.getCellProperty("head", i, "isFilterCell");

					if(isFilterCell)
					{
						var nBodyCol = -1;
							
						var filterBodyCell = objGrid.getCellProperty("head", i, "validation");
						//trace("i=" + i + " filterBodyCell : " + filterBodyCell);
						
						if( !Ex.isEmpty(filterBodyCell) )
						{
							for(var j=0; j<objGrid.getCellCount("body"); j++)
							{
								var bCellId = objGrid.getCellProperty("body", j, "id");
								//trace("j=" + j + " bCellId : " + bCellId);
								if(filterBodyCell == bCellId)
								{
									nBodyCol = j;
									break;
								}
							}
							//trace("!Ex.isEmpty(filterBodyCell) nBodyCol : " + nBodyCol);
							
						}
						else
						{
							for(var j=0; j<objGrid.getCellCount("body"); j++)
							{
								var hCol = objGrid.getCellProperty("Head", i, "col")
								if(hCol == objGrid.getCellProperty("Body", j, "col"))
								{
									nBodyCol = j;
									break;
								}
							}
							//trace("Ex.isEmpty(filterBodyCell) nBodyCol : " + nBodyCol);
						}
						//Head의 Col Index로 Body의 Index 찾기
						var sText = objGrid.getCellProperty("body", nBodyCol, "text");
						
						//Bind된 Cell일 경우 Col별 필터 정보 입력
						if(sText && sText.indexOf("bind:")>-1)
						{
							//expand버튼이 보이도록 설정
							objGrid.setCellProperty("head", i, "expandshow", "hide");
							objGrid.setCellProperty("head", i, "expandimage", "");
						}
					}
				}
			}
			objGrid.filterActvieYn = "N";
		},		
		/**
		* @description 	      : 필터 실행 함수
		* @param objGrid	  : 필터 적용할 그리드 컴포넌트
		* @return             : 없음
		*/
		applyFilter : function(objGrid)
		{
			var i, j;
			var objConfig = objGrid.config;
			var objCols = objConfig.cols;
			var objDs = objGrid.getBindDataset();
			var sColumnId;
			var sValue;
			var arrValue;
			var sFilterString = "";
			var nColCount;
			var nValueCount;
				
			//Col별 설정정보 갯수 가져오기
			nColCount = objCols.length;

			//trace("applyFilter() nColCount : " + nColCount);

			for(i=0; i<nColCount; i++)
			{
				//Cell 설정정보가 존재하고 bind 정보가 있을 경우
				//trace("applyFilter() i=" + i + " bind : " + objCols[i].bind + " value : " + objCols[i].value);
				
				if(objCols[i] && objCols[i].bind)
				{
					sColumnId = objCols[i].bind;
					sValue = objCols[i].value;
					
					//trace("applyFilter() i=" + i + "sValue : " + sValue);
					//필터 문자열 정보가 있을 경우
					if(sValue)
					{
						//필터 문자열을 분해하여 필터 쿼리 만들기
						sFilterString += "("
						arrValue = nexacro.replaceAll(sValue, "EmpTy", "").split("¶¶");
						
						//trace("applyFilter() arrValue.length : " + arrValue.length);

						for(j=0; j<arrValue.length; j++)
						{
							var repVal = nexacro.replaceAll(arrValue[j], "'", "\\'");
							repVal = nexacro.replaceAll(repVal, '"', '\\"');
							if( Ex.isEmpty(repVal) )
							{
								sFilterString += sColumnId + "==''||Ex.isEmpty(" + sColumnId + ")||";
							}
							else
							{
								sFilterString += sColumnId + "=='" + repVal + "'||";
							}
						}
						//sFilterString += sColumnId + "=='" + sValue +  "'";
						
						sFilterString = sFilterString.substr(0, sFilterString.length-2);
						sFilterString += ") &&";
					}
				}
			}
			sFilterString = sFilterString.substr(0, sFilterString.length-2);
			
			//필터 실행
			//trace("applyFilter() filterstr:\n[" + sFilterString + "]");
			objDs.filter( (Ex.isEmpty(objGrid.baseFilterStr) ? "" : objGrid.baseFilterStr + " && (") +
						  sFilterString +
						  (Ex.isEmpty(objGrid.baseFilterStr) ? "" : ")")
			);
		},
		/**
		* @description 	      : 필터 문자열 만드는 함수
		* @param objGrid	  : 필터 팝업 컴포넌트
		* @return             : 없음
		*/
		getFilterValue : function(objPopDiv)
		{
			var i;
			var objDs = objPopDiv.form.dsFilter;
			var nRowCount;
			var sFilterValue = "";
			
			//체크된 리스트를 필터 문자열로 만들기
			objDs.set_enableevent(false);
			objDs.filter("CHK==1");
			
			//trace("CHK==1 Filter RowCount : " + objDs.rowcount);
			nRowCount = objDs.rowcount;

			for(i=0; i<nRowCount; i++)
			{
				var code = objDs.getColumn(i, "CODE");
				if(i==0) sFilterValue += (Ex.isEmpty(code) ? "EmpTy" : objDs.getColumn(i, "CODE"));
				else sFilterValue += "¶¶" + (Ex.isEmpty(code) ? "EmpTy" : objDs.getColumn(i, "CODE"));
			}
			
			objDs.filter("");
			objDs.set_enableevent(true);
			//trace("getFilterValue() sFilterValue[" + sFilterValue + "]");
			//필터 문자열 리턴
			return sFilterValue;
		},
		/**
		  * Ex.core.depth
		  *  메뉴명으로 구성된 Path를 문자열로 구성하여 반환한다.
		  * @param {string} menuId 메뉴아이디
		  * @return {string} 메뉴Path 문자열
		  * @description
		  *  레벨별 구분자는 ';'
		  * @example
		  *  var menuPath = Ex.core.depth(menuId);
		  * @memberOf Ex.core
		  **/
		depth : function(menuId)
		{
			var oDs;
				oDs = nexacro.getApplication().gdsMenu;
	
			oDs.filter("");
			var mrow = oDs.findRow("MENU_ID",menuId);
			var lvl = oDs.getColumn(mrow , "MENU_LVL");
			var str = [];
				str.push(oDs.getColumn(mrow,"MENU_NM"));
			var flvl = lvl ;
			var desc = lvl-1;
			for(var i=(mrow-1);i>-1;i--)
			{	
				flvl = parseInt(oDs.getColumn(i , "MENU_LVL"));
				if( desc == -1 ) break;
				if( flvl == desc )
				{
					desc--;
					var a = oDs.getColumn(i,"MENU_NM");
					str.push(a);
				}
			}
			return str.reverse().join(";");
		},
		/**
		  * Ex.core.depthCode
		  *  메뉴코드로 구성된 Path를 문자열로 구성하여 반환한다.
		  * @param {string} menuId 메뉴아이디
		  * @return {string} 메뉴Path 문자열
		  * @description
		  *  레벨별 구분자는 ';'
		  * @example
		  *  var menuPath = Ex.core.depthCode(menuId);
		  * @memberOf Ex.core
		  **/		
		depthCode : function(menuId)
		{
			var oDs;
				oDs = nexacro.getApplication().GDSMENU;
	
			oDs.filter("");
			var mrow = oDs.findRow("MENU_ID",menuId);
			var lvl = oDs.getColumn(mrow , "MENU_LVL");
			var str = [];
				str.push(oDs.getColumn(mrow,"MENU_ID"));
			var flvl = lvl ;
			var desc = lvl-1;
			for(var i=(mrow-1);i>-1;i--)
			{	
				flvl = parseInt(oDs.getColumn(i , "MENU_LVL"));
				if( desc == -1 ) break;
				if( flvl == desc )
				{
					desc--;
					var a = oDs.getColumn(i,"MENU_ID");
					str.push(a);
				}
			}
			return str.reverse().join(";");
		},
		/**
		  * Ex.core.openSubpage(this, sUrl, param)
		  * 서브페이지(상세화면)으로 화면 전환
		  * @param {form} scope
		  * @param {string} sUrl 
		  * @param {object} param 이동할 페이지로 전달할 파라미터 객체
		  * @return N/A
		  * @description
		  * N/A 
		  * @example
		  *  Ex.core.openSubpage(this, 'fomm::FOMM0110_W.xfdl', {p1:'1',p2:'2'});
		  * @memberOf Ex.core
		  **/
		openSubpage : function(scope, sUrl, param)
		{
			if(!Ex.util.isExistScrn(sUrl))
			{
				trace("URL[" + sUrl + "]에 해당하는 화면을 찾을 수 없습니다.");
				return;
			}
			
			if( Ex.util.isPopup(scope) ) {
				trace('팝업에서 호출할 수 없습니다.');
				return;
			}
			
			if( (scope.parent.parent.name||'').toUpperCase() != 'WORKFRAME' ) {
				trace('WORKFRAME이 아닙니다.');
				return;
			}
			
			if( (scope.parent.name||'').toUpperCase() != 'DIVWORK') {
				trace('WORK영역이 아닙니다.');
				return;
			}
			
			var divWork = scope.parent;
			var workFrame = divWork.parent;

			for(var i=0; i<workFrame.components.length; i++)
			{
				if(workFrame.components[i].id.indexOf("_pToast") > -1)
				{
					workFrame.components[i].set_visible(false);
				}
			}
			
			// hide original Page
			divWork.set_visible(false);
			
			// make Subpage
			var subPageNm = scope.getOwnerFrame().name + '_SUBPAGE';
			var left 	= scope.parent.left;
			var top		= scope.parent.top;
			var width	= scope.parent.width;
			var height	= scope.parent.height;
			var right 	= scope.parent.right;
			var bottom	= scope.parent.bottom;
			var divSubPage = new Div();
			divSubPage.set_background('#ffffff');
			// set param
			param = param||{};
			scope.getOwnerFrame().subpageParam = param;
			// set url
			divSubPage.form.id = "_SubPageForm";
			divSubPage.set_url(sUrl);
			
			/*
			trace("openSubpage divWork W : " + scope.getOwnerFrame().form.divWork.getOffsetWidth());
			trace("openSubpage divWork H : " + scope.getOwnerFrame().form.divWork.getOffsetHeight());
			trace("openSubpage divSubPage W : " + width);
			trace("openSubpage divSubPage H : " + height);
			*/

			// subPage init
			divSubPage.init(subPageNm, left, top, width, height, right, bottom);
			workFrame.addChild(subPageNm, divSubPage);
			divSubPage.show();
			
			workFrame.fnFormOnSize();
		},
		
		/**
		  * Ex.core.closeSubpage
		  *  서브페이지를 닫고 원 화면으로 돌아간다.
		  * @private
		  * @param {form} scope
		  * @param {object} param 원 화면 callback으로 던져줄 param
		  * @return N/A
		  * @description 
		  *
		  * @example
		  *  Ex.core.closeSubpage(this, oParam);
		  * @memberOf Ex.core
		  **/
		closeSubpage : function(scope, param)
		{
			if( Ex.util.isPopup(scope) ) {
				trace('팝업에서 호출할 수 없습니다.');
				return;
			}
			
			if( (scope.parent.parent.name||'').toUpperCase() != 'WORKFRAME' ) {
				trace('WORKFRAME이 아닙니다.');
				return;
			}
			
			if( (scope.parent.name||'').toUpperCase().indexOf('_SUBPAGE') < 0 ) {
				trace('SUBPAGE가 아닙니다.');
				return;
			}
			
			// 원화면 visible
			var divWork = scope.getOwnerFrame().form.divWork;
			divWork.set_visible(true);
			
			// subpage destroy
			scope.parent.destroy();

			trace("closeSubpage divWork W : " + divWork.getOffsetWidth());
			trace("closeSubpage divWork H : " + divWork.getOffsetHeight());
			
			divWork.parent.fnFormOnSize(divWork.getOffsetWidth(), divWork.form.getOffsetHeight());
			
			// 업무화면 공통 callback함수 실행 & 파라미터 전달
			var callbackFunc = divWork.form.fnSubpageCallback;
			if( Ex.isFunction(callbackFunc) ) {
				param = param||{};
				divWork.form.fnSubpageCallback(param);
			}
			else
				trace("fnSubpageCallback함수가 선언되어 있지 않습니다.");
		},
		
		/**
		  * Ex.core.openLink
		  *  메뉴간 Link기능 제공
		  * @param {form} scope
		  * @param {string} menuId 메뉴아이디
		  * @param {object} param Link화면에 전달할 파라미터
		  * @return N/A
		  * @description
		  *  수신처 화면에서 링크 파라미터 받기 전용함수
		  *  this.fnLinkParam = function()
		  *  {
		  *  	var p1 = this.getOwnerFrame().p1;
		  *  	var p2 = this.getOwnerFrame().p2;
		  *  	trace("link paramter=p1="+p1+",p2="+p2);
		  *  }
		  * @example
		  *  Ex.core.openLink(this,menuId,{p1:'1',p2:'2'});
		  * @memberOf Ex.core
		  **/
		openLink : function(scope, menuId, param, isReOpen)
		{
			if( Ex.util.isPopup(scope) )
			{
				var cParam = {id : "_pBlockLink", msg : "팝업창에서는 링크를 호출할 수 없습니다."};
				Ex.core.alert(scope.getOwnerFrame().form, cParam);
				return;
			}		
			param = param||{};
			var objParam = {};
			objParam.menuId = menuId;
			objParam.linkParam = param;
			Ex.core.openMenu(objParam, isReOpen);
		},	
		/**
		  * Ex.core.openMenu
		  *  메뉴오픈을 처리한다.
		  * @param {object} objParam 화면오픈 정보
		  * @return N/A
		  * @description 
		  *  
		  * @example
		  *  Ex.core.openMenu(object);
		  * @memberOf Ex.core
		  **/
        openMenu : function (objParam, isReOpen)
        {
			if(Ex.isEmpty(isReOpen) )	isReOpen = false;

			// url open
			var menuUrl = objParam.menuUrl||'';
			if( !Ex.isEmpty(menuUrl) ) {
				var protocol = menuUrl.substring(0, 4)||'';
				if( protocol.toUpperCase() == 'HTTP' ) {
					system.execBrowser(menuUrl);
					return;
				}
			}
			var objApp = nexacro.getApplication();
			var cnt = objApp.MAIN_TAB.form.tabMain.tabpages.length;
			var maxCnt = objApp.MAXCNT;
			
			var frameCd = "M_"+objParam.menuId;
			var oChildFrame = objApp.MAIN_WORK.frames[frameCd];
			
			if(isReOpen)
			{
				if( !Ex.isEmpty(oChildFrame) )
				{
					//"M_" + frameCd					
					var mdiTab = objApp.MAIN_TAB.form.tabMain;
					var idx = -1;
					for(var i = 0; i < mdiTab.tabpages.length; i++) {
						var page = mdiTab.tabpages[i];
						if( oChildFrame == objApp.MAIN_WORK.frames[page.name] ) {
							idx = i;
							break;
						}
					}
					var bSucc = mdiTab.removeTabpage(idx);
					if( bSucc != -1 ) 
					oChildFrame.form.close();
					oChildFrame = undefined;
				}
			}
			
			if( Ex.isEmpty(oChildFrame) )
			{
				if(cnt == maxCnt ) 			
				{
					 objApp.gvTmpMenuParam = objParam;
				
					var strMsg = "허용 가능한 메뉴개수는 최대 " + maxCnt + "개 입니다.";
						strMsg += "\n첫 메뉴화면 ["+ nexacro.getApplication().MAIN_TAB.form.tabMain.tabpages[0].text +"]을 닫고";
						strMsg += " 선택하신\n메뉴를 여시겠습니까?";
						strMsg += "\n\n※ 수정중인 데이터는 소실 됩니다.";
				
					//허용 가능한 메뉴개수는 최대 {0}개 입니다.
					var param = {
										id : "pSystemOpenMax"
									, msg : strMsg
									, arrparam : ['']
									, msgtype : "I"								
								 };
					//Ex.core.alert(nexacro.getApplication().MAIN_TAB.form, param);
					Ex.core.confirm(objApp.MAIN_TAB.form, param);
					return;
				}
			}
			else {	// 기존 열린 화면 있으면
				
				// TAB frame tab index set
				var mdiTab = objApp.MAIN_TAB.form.tabMain;
				var idx = -1;
				for(var i = 0; i < mdiTab.tabpages.length; i++) {
					var page = mdiTab.tabpages[i];
					if( oChildFrame == objApp.MAIN_WORK.frames[page.name] ) {
						idx = i;
						break;
					}
				}
				mdiTab.set_tabindex(idx);
				
				// 해당 work 화면 focus
				var frameType = objApp.afnGetFrameType();
				if( frameType != "WORK" ) 
					objApp.afnSetFrame("WORK");
				
				oChildFrame.setFocus();
				//return;
			}
			
			
			Ex.core._callWork(objParam);
        },		
		/**
		  * Ex.core._callWork
		  *  childframe을 구성하고 화면을 오픈한다.
		  * @param {object} objParam 화면오픈 정보
		  * @return N/A
		  * @description 
		  *  
		  * @example
		  *  Ex.core._callWork(object);
		  * @memberOf Ex.core
		  **/
        _callWork : function (objParam)
        {
			var frow = nexacro.getApplication().gdsMenu.findRow("MENU_ID", objParam.menuId);
			if( frow < 0 ) 
			{
				trace("요청받은 메뉴 정보가 없습니다.");
				return;
			}
			
			
            var menuId 		= objParam.menuId;		// 메뉴 ID
			var upMenuId 	= nexacro.getApplication().gdsMenu.getColumn(frow, "UP_MENU_ID")||'';	// 상위메뉴 ID
            var menuNm 		= nexacro.getApplication().gdsMenu.getColumn(frow, "MENU_NM")||'';		// 메뉴 이름
            var menuUrl 	= nexacro.getApplication().gdsMenu.getColumn(frow, "MENU_URL")||'';		// 메뉴 URL
            var menuPath 	= nexacro.getApplication().gdsMenu.getColumn(frow, "MENU_PATH")||'';	// 메뉴 경로(ID)
			var menuPathNm 	= nexacro.getApplication().gdsMenu.getColumn(frow, "MENU_PATH_NM")||'';	// 메뉴 경로(메뉴명)
			var menuLv2Id 	= nexacro.getApplication().gdsMenu.getColumn(frow, "LVL2_MENU_ID")||'';	// 중메뉴 ID
			var menuLv1Id 	= nexacro.getApplication().gdsMenu.getColumn(frow, "LVL1_MENU_ID")||'';	// 대메뉴 ID
			var screenId 	= nexacro.getApplication().gdsMenu.getColumn(frow, "SCREEN_ID")||'';	// 화면 ID
			
			// 메뉴 권한
			var readYn 		= nexacro.getApplication().gdsMenu.getColumn(frow, "READ_YN")||'N';			// 메뉴접근&조회권한
			var writeYn 	= nexacro.getApplication().gdsMenu.getColumn(frow, "WRITE_YN")||'N';		// 추가/쓰기 권한
			var deleteYn 	= nexacro.getApplication().gdsMenu.getColumn(frow, "DELETE_YN")||'N';		// 삭제권한
            var saveYn 		= nexacro.getApplication().gdsMenu.getColumn(frow, "SAVE_YN")||'N';			// 저장권한; write/delete권한 중 하나라도 Y이면 Y
			var exclDownYn 	= nexacro.getApplication().gdsMenu.getColumn(frow, "EXCL_DOWN_YN")||'N';	// 엑셀다운로드권한
			var reportPrntYn= nexacro.getApplication().gdsMenu.getColumn(frow, "REPORT_PRNT_YN")||'N';	// 리포트출력권한
			var fileUpYn 	= nexacro.getApplication().gdsMenu.getColumn(frow, "FILE_UP_YN")||'N';		// 파일첨부(파일업로드)권한
			
			var adminYn 	= nexacro.getApplication().gdsMenu.getColumn(frow, "ADMIN_YN")||'N';		// 관리자 권한
			
			// 메뉴 파라미터
			var menuParamCd	= nexacro.getApplication().gdsMenu.getColumn(frow, "MENU_PARAM_CD")||'';	// 메뉴 파라미터
			
			var menuPath = Ex.core.depth(menuId);
			
			if( Ex.isEmpty(menuUrl) )
			{
				trace('메뉴 URL이 없습니다.');
				return;
			}

			var frameCd = "M_" + menuId;
            var info = {
				menuId 		: menuId,
				upMenuId 	: upMenuId,
				menuNm 		: menuNm,
                menuUrl 	: menuUrl,
                menuPath 	: menuPath,
				menuPathNm	: menuPathNm,
                menuLv2Id	: menuLv2Id,
                menuLv1Id	: menuLv1Id,
				screenId	: screenId,
				readYn		: readYn,
				writeYn		: writeYn,
				deleteYn	: deleteYn,
				saveYn		: saveYn,
				exclDownYn	: exclDownYn,
				reportPrntYn: reportPrntYn,
				fileUpYn	: fileUpYn,
				menuParamCd	: menuParamCd,
                winId 		: frameCd,
				adminYn     : adminYn
            };
			
			// 메뉴 이동시 전달할 parameter 객체
			var linkParam = objParam.linkParam||{};
			for(var key in linkParam ) 
				info[key] = linkParam[key];

			// Child Frame 생성
			nexacro.getApplication().MAIN_TAB.form.fnOpenTab(info);
			var oChildFrame = nexacro.getApplication().MAIN_WORK.frames[frameCd];
			if (oChildFrame != null) 
			{
				var isExist = false;
				for(var key in linkParam )
				{
					oChildFrame[key] = linkParam[key];
					isExist = true;
				}
				
				if( isExist )	// 메뉴가 열려있으면(TAB에 있으면) 해당 탭 화면으로 이동
				{
					if( oChildFrame.form.divWork.form.fnLinkParam ) 
						oChildFrame.form.divWork.form.fnLinkParam();
				}
				return;
			}
			
			oChildFrame = new ChildFrame();
			oChildFrame.init(frameCd, 0, 0, null, null, 0, 0);
			nexacro.getApplication().MAIN_WORK.addChild(frameCd, oChildFrame);
			oChildFrame.set_background('white');
			oChildFrame.set_formurl("Frame::frWork.xfdl");
			oChildFrame.set_titletext(menuNm);
			oChildFrame.set_showtitlebar(false);
			oChildFrame.set_showstatusbar(false);
			oChildFrame.set_dragmovetype("none");
			oChildFrame.set_openstatus("maximize");
			oChildFrame.info = info;
			for(var key in linkParam ) 
				oChildFrame[key] = linkParam[key];
			oChildFrame.show();
			
			// change frame type
			var frameType = nexacro.getApplication().afnGetFrameType();
			if( frameType != "WORK" ) 
				nexacro.getApplication().afnSetFrame("WORK");
			
			// 사용된메뉴 추가
			nexacro.getApplication().MAIN_TOP.form.fnSetUsedMenu(info);
        },

		/**
		  * Ex.core.popup
		  *  팝업 오픈을 처리한다.
		  * @param {form} scope
		  * @param {string} sPopupId 파업창 아이디 (ex: CMB002S)
		  * @param {string} sUrl 오픈 Url. (ex: cmb::CMB002S.xfdl)
		  * @param {object} oArg 팝업에서 사용할 파라미터
		  * @param {string} sOption 팝업처리시 프레임처리 옵션
		  * @param {string} sPopupCallback 팝업 콜백 함수명
		  * @return N/A
		  * @description 
		  *  sPopupCallback는 미지정시 fn_popupAfter를 디폴트로 지정된다.
		  * @example
		  *  Ex.core.popup(this,"popid","sample::sample.xfdl",{},"widht=100,height=100","fn_popupAfter");
		  * @memberOf Ex.core
		  **/
		popup : function(obj, sPopupId, sUrl, oArg, sOption, sPopupCallback)
		{	
			
			//trace("Ex.core.popup obj.parent.id : " + obj.parent.id + " ownerFrame : " + obj.getOwnerFrame().id);
			if(Ex.isEmpty(sOption)) sOption='';
			if(Ex.isEmpty(sPopupId)) sPopupId='';
			if(Ex.isEmpty(oArg)) oArg = {};
			if(Ex.isEmpty(sUrl))
			{
				// 팝업Url이 지정되지 않았습니다.
				trace("팝업Url이 지정되지 않았습니다.");
				return;
			}
			
			if( (sOption.indexOf("width") < 0 || sOption.indexOf("height") < 0) && 
				(sOption.indexOf("autosize") < 0) 
			  )
			{
				trace("팝업 사용시 반드시 width,height를 지정하세요.");
				return;
			}
			
			if(Ex.isEmpty(sPopupId))
			{
				trace("두번째 인자는 팝업창 고유의 아이디 입니다.\n반드시 영문으로 작성된 고유한 ID를 지정하시기 바랍니다.");
				return;
			}
			
			var nLeft = -1;
			var nTop = -1;
			var nWidth = 1;
			var nHeight = 1;
			var nScreenWidth;		// autosize 처리용 화면 width
			var nScreenHeight;		// autosize 처리용 화면 height
 			var bShowTitle = true;
			var bShowStatus = false;
			var bModeless = false;
			var bLayered = true;
			var nOpacity = 100;
			var bAutoSize = false;
			var bResizable = false;
			var bRound = false;
			var bMinButton = false;
			var bMaxButton = false;
			var bNormalButton = false;
			var bCloseButton = true;
            var pThis = obj;
			
            var sPopupCallback = Ex.isEmpty(sPopupCallback) ? "fnPopupAfter" : sPopupCallback;  
			// 콜백함수 파라미터로 담기
			oArg.popupcallback = sPopupCallback;
			
			var sTitleText = "";
			
			/*
			trace("typeof oArg : " + (typeof oArg));			
			if(!Ex.isEmpty(oArg) && typeof oArg =="object" )
	    	{
				for ( var key in oArg )	oArg[key] = oArg[key]||"";
	    	}
			*/
			oArg.url = sUrl;
			var pInfo = {
							pId : sPopupId,
							pName : oArg.title,
							pUrl : sUrl,
						};
			for ( var key in oArg ) pInfo[key] = oArg[key];			
			oArg.info = pInfo;
			
			// 메시지창 처리를 위함
			if( !(oArg.msgbox && oArg.hasOwnProperty("msgbox")) )
				oArg.msgbox = false;
			else if( oArg.msgbox == "true" || oArg.msgbox == true )
				oArg.msgbox = true;
			else oArg.msgbox = false;
			
			var aVal = Ex.isEmpty(sOption)?"" :sOption.split(",");
			for (var i=0; i<aVal.length; i++)
			{
				var aVal2 = aVal[i].trim().split("=");

				switch (aVal2[0])
				{
					case "top":		nTop = parseInt(aVal2[1]);		break;
					case "left":	nLeft = parseInt(aVal2[1]);		break;
					case "width":	nWidth = parseInt(aVal2[1]); 	break;
					case "height":	nHeight = parseInt(aVal2[1]);	break;
					case "title":	bShowTitle = aVal2[1];			break;
					case "titletext":	sTitleText = aVal2[1];		break;
					case "status":		bShowStatus = aVal2[1];		break;
					case "modeless":	bModeless = aVal2[1];		break;
					case "layered":		bLayered = aVal2[1];		break;
					case "opacity":		nOpacity = aVal2[1];		break;
					case "resizable":	bResizable = aVal2[1];		break;
					case "round":		bRound = aVal2[1];			break;
					case "useMinButton":	bMinButton = aVal2[1];	break;
					case "useMaxButton":	bMaxButton = aVal2[1];	break;
					case "useNormalButton":	bNormalButton = aVal2[1];	break;
					case "useCloseButton":	
						bCloseButton = Ex.isEmpty(aVal2[1]) || aVal2[1] == true || aVal2[1] == "true" || aVal2[1] == "TRUE" || aVal2[1] == "Y" || aVal2[1] == "Y" ? true : false;
						break;
						
					case "autosize":	
						bAutoSize = Ex.isNvl(aVal2[1], true);
						if(bAutoSize) 
						{
							
							// autosize url 화면 크기 얻기
							var tempDiv = new Div('autosizeTempDiv', 0, 0, 0, 0, null, null);
							tempDiv.set_visible(false);
							tempDiv.set_async(false);
							tempDiv.set_enable(false);
							tempDiv.set_enableevent(false);
							tempDiv.set_url(sUrl);
							if(tempDiv.form) {
								tempDiv.form.set_enable(false);
								tempDiv.form.set_enableevent(false);
							}
							
							//obj.addChild('autosizeTempDiv', tempDiv);
							nexacro.getApplication().MAIN_LOGIN.form.addChild('autosizeTempDiv', tempDiv);	// 팝업 재귀호출 시 같은 parent에 같은 url 호출 불가로 변경
							
							tempDiv.show();
							
							nScreenWidth	= tempDiv.form.getLayoutInfo("default", "width");
							if(nScreenWidth > 1800)	nScreenWidth = 1800;	// max 1800; 임의로 정함
							nScreenHeight	= tempDiv.form.getLayoutInfo("default", "height");
							if(nScreenHeight > 900) nScreenHeight = 900;	// max 900; 임의로 정함
							trace('<< popup Autosize >> nScreenWidth :: ' + nScreenWidth + '  nScreenHeight :: ' + nScreenHeight);
							
							//obj.removeChild('autosizeTempDiv');
							nexacro.getApplication().MAIN_LOGIN.form.removeChild('autosizeTempDiv');	// 팝업 재귀호출 시 같은 parent에 같은 url 호출 불가로 변경
							tempDiv.destroy();
							
						}
						break;
				}
			}
			
			// autosize인 경우 팝업 width, height 덮어쓰기
			if(bAutoSize) {
				nWidth = nScreenWidth;
				nHeight = nScreenHeight;
			}
			
			//trace("<< popup nLeft : " + nLeft + " nTop : " + nTop);
			
			var sOpenalign = "center";
			var menualOpenAlign	= "auto";
			var menualLeft = -1;
			var menualTop = -1;
			
			if (nLeft == -1 && nTop == -1)
			{
				sOpenalign = "center middle";
		        nLeft   =  parseInt( (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2) );
			    nTop    =  parseInt( (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2) );
			}
			else if (nLeft == -1 && nTop > -1)
			{
		        nLeft   =  (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
				menualTop	= nTop;
				menualOpenAlign = "top";
			}
			else if (nLeft > -1 && nTop == -1)
			{
			    nTop    = (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2);
				menualLeft	= nLeft;
				menualOpenAlign = "left";
			}
			else if (nLeft > -1 && nTop > -1)
			{
				menualTop	= nTop;
				menualLeft	= nLeft;
				menualOpenAlign = "both";
			}
			
			//trace("<< popup menualTop : " + menualTop + " menualLeft : " + menualLeft);

			var objParentFrame = pThis.getOwnerFrame();
			
			oArg._formObj = obj;

		    if(bModeless == "true")		// modeless
		    {
				oArg._isOpen = true;
				
				sTitleText = oArg.title||'';
				// open창에서 해당옵션은 고정처리
				var	sOpenStyle= "showtitlebar=true showstatusbar=false autosize=false resizable="+bResizable+" titletext='"+sTitleText+"'";

				// 공통버튼 적용으로 아래와 같이 수정
				// open창은 넥사크로 프레임을 사용하지 않음, 브라우져창 사용
				// 14 좌측공통여백 , 14 상단공통여백
				if( nexacro.getPopupFrames()[sPopupId] )
				{
					if( system.navigatorname != "nexacro" )
						//nexacro.getApplication().popupframes[sPopupId].popWindow.focus();
						nexacro.getPopupFrames(objParentFrame)[sPopupId].popWindow.focus();
					else
						//nexacro.getApplication().popupframes[sPopupId].form.setFocus();
						nexacro.getPopupFrames(objParentFrame)[sPopupId].form.setFocus();
				}
				else
				{
					if( system.navigatorname == "nexacro" )
					{
						/*
						showModal과 동일하게 너비 높이를 처리한다.
						*/
						sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true autosize=false resizable="+bResizable+" titletext='"+sTitleText+"'";
						nexacro.open(sPopupId, "comm::comPop.xfdl", objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight+60, pThis);
					}
					else if( system.navigatorname == "IE" )
					{						
						nexacro.open(sPopupId, "comm::comPop.xfdl", objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, pThis);
					}
					else
					{
						var popX = (system.getScreenWidth() / 2) - 200;
						var popY = (system.getScreenHeight() / 2) - 150;
						nexacro.open(sPopupId, "comm::comPop.xfdl", objParentFrame, oArg, sOpenStyle, popX, popY, nWidth, nHeight, pThis);
					}
				}
		    }
		    else	// modal
		    {
				oArg._isOpen = false;

				var newChild = new ChildFrame();
				newChild.set_cssclass('cf_FOMM_normal');				

				if(oArg._msgbox_)
				{
					nLeft = nLeft + (this.errorCnt * 20);
					nTop = nTop + (this.errorCnt * 20);				
					// 모달과 동일일한 값에서 브라우져 윈도우 보더를 더한다.
					newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
					newChild.set_dragmovetype("all");
					newChild.set_showtitlebar(bShowTitle);
					if(bShowTitle) {
						newChild.set_titlebarheight("35");
					}
					//newChild.set_border("3px solid #351b6f");
					newChild.set_border("0px solid #351b6f");
					newChild.set_showtitleicon(false);
					
					newChild.set_autosize(bAutoSize);
					newChild.set_resizable(bResizable);
					newChild.set_showstatusbar(bShowStatus);
					
					newChild.set_overlaycolor("rgba(0, 0, 0, 0.5)");	//("RGBA(0, 0, 0, 1)");

					newChild.titlebar.closebutton.set_visible(false); //(bCloseButton);
					
					newChild.showModal(objParentFrame, oArg, pThis , sPopupCallback);
				}
				else	// SPP 기본 div popup
				{
					///*
					bShowTitle = false;		// SPP titleBar comPop 내부 div로 대체
					var titleBarH = 45;
					nHeight += titleBarH;
					//*/
					
					/*
					bShowTitle = true;		// SPP titleBar comPop 내부 div로 대체
					var titleBarH = 36;
					var emptyH = 0;
					nHeight += titleBarH + emptyH;
					*/
					
					//trace("comPop Call nLeft : " + nLeft + " nTop : " + nTop + " nWidth : " + nWidth + " nHeight : " + nHeight);
					newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, "comm::comPop.xfdl");
					newChild.set_dragmovetype("normal");
					
					newChild.addEventHandler("onmove", function(obj, e){
						newChild.menualOpenAlign = "both";
						newChild.menualLeft		= e.x;
						newChild.menualTop		= e.y;
					});
					
					newChild.set_showtitlebar(bShowTitle);

					if(bShowTitle) newChild.set_titlebarheight(titleBarH);
					//newChild.set_border("3px solid #351b6f");
					newChild.set_border("0px solid #351b6f");

					newChild.set_showtitleicon(false);

					newChild.set_autosize(bAutoSize == "true" ? true : false);
					newChild.set_resizable(bResizable == "true" ? true : false);
					newChild.set_showstatusbar(bShowStatus == "true" ? true : false);
					
					if( !Ex.isEmpty(sOpenalign) )	newChild.set_openalign(sOpenalign);
					//newChild.set_openalign("top left");
					
					newChild.titlebar.closebutton.set_visible(bCloseButton); //(bCloseButton);
					if(!Ex.isEmpty(sTitleText)) {
						newChild.set_titletext(sTitleText);
					}
					
					newChild.showModal(objParentFrame, oArg, pThis, sPopupCallback);
					
					//trace("newChild.width : " + newChild.width + " newChild.height : " + newChild.height);
				}
				newChild.info = newChild.getOwnerFrame().info;
				newChild.callWidth 			= nWidth;
				newChild.callHeight 		= nHeight;
				newChild.menualOpenAlign	= menualOpenAlign;
				newChild.menualLeft			= menualLeft;
				newChild.menualTop			= menualTop;
		    }
		},
		/**
		  * Ex.core.pclose
		  *  팝업창 창닫기를 실행한다.
		  * @private
		  * @param {form} scope
		  * @param {string} arg 반환값
		  * @return N/A
		  * @description 
		  *
		  * @example
		  *  Ex.core.pclose(this , '1');
		  * @memberOf Ex.core
		  **/
		pclose : function(scope, arg)
		{
			var pThis = scope;
			if( !Ex.util.isPopup(scope) ) return;
			if( arg == undefined ) arg = "";
			var pFrame = scope.getOwnerFrame();
			if( pFrame._isOpen == true) 
			{
				var sCallback = pFrame.popupcallback;
				var pThis = pFrame.getForm().opener;
				if( !Ex.isEmpty(pThis) ) {
					var func = pThis[sCallback];
					//callback 함수가 존재하면 호출
					if( func && typeof(func) === "function" )
					{					
						pThis[sCallback]( pFrame.name, arg );
					}
				}
			}
			pFrame.form.close(arg);
		},
		/**
		  * Ex.core.msg
		  *  메시지리소스에서 메시지텍스트를 반환한다.
		  * @param {string} msgCode 메시지코드
		  * @return {string} 메시지텍스트
		  * @description
		  *
		  * @example
		  *  var msgTxt = Ex.core.msg("cm.info.00001");
		  * @memberOf Ex.core
		  **/
		msg : function(msgCode, langCd)
		{
			if( Ex.isEmpty(langCd) ) langCd = Ex.util.getSession('gvSelLangCd');
			// 메시지 코드에 해당하는 문자열이 없으면 msgCode를 그대로 return한다.
			if( Ex.isEmpty(msgCode) ) return msgCode;
			var rtn = "";
			var row = nexacro.getApplication().gdsMessage.findRow("MSG_NO", msgCode);
			if(row == -1)
			{
				rtn = msgCode;
			}
			else
			{
				rtn = nexacro.getApplication().gdsMessage.getColumn(row, langCd + "_MSG") || "";
				if( Ex.isEmpty(rtn) ) rtn = nexacro.getApplication().gdsMessage.getColumn(row, "SYS_MSG") || "";
				if( Ex.isEmpty(rtn) ) rtn = msgCode;
				rtn = rtn.split("\\n").join("\n").toString();
				
			}
			return rtn;
		},
		/**
		  * Ex.core.msgMapping
		  *  문자열에서 치환대상문자를 치환하여 반환한다.
		  * @param {string} msgStr
		  * @param {string} msgCode 메시지코드
		  * @return {string} 텍스트
		  * @description
		  *  치환대상문자 {0}{1}...{n}으로 작성한다.
		  * @example
		  *  var msgTxt = Ex.core.msgMapping('{0} {1} {2}',['나는' , '대한민국' , '국민입니다.']);
		  * @memberOf Ex.core
		  **/
		msgMapping : function(msgStr, arrParamter)
		{
			if( Ex.isEmpty(msgStr) ) msgStr = '';
			if( Ex.isEmpty(arrParamter) ) return msgStr;
			
			for(var i=0;i<arrParamter.length;i++) msgStr = nexacro.replaceAll( msgStr , '{'+i+'}' , arrParamter[i]);
			return msgStr;
		},
		word : function(wordStr, langCd)
		{
			if( Ex.isEmpty(langCd) ) langCd = Ex.util.getSession('gvSelLangCd');
			if( Ex.isEmpty(wordStr) ) return;

			var fRow = nexacro.getApplication().gdsWord.findRow("SYS_WORD", wordStr);	//시스템 기준 언어에서 단어를 찾는다.
			var rtnWordStr = "";
			
			if(fRow > -1)
			{
				rtnWordStr = nexacro.getApplication().gdsWord.getColumn(fRow, langCd + "_WORD");
			}
			
			//trace("Ex.core.word wordStr : " + wordStr + " fRow : " + fRow + " rtnWordStr : " + rtnWordStr);
			
			if( Ex.isEmpty(rtnWordStr) ) rtnWordStr = wordStr;
			
			return rtnWordStr;
		},
		toast : function(scope, strMsg, arrParam, optArr)
		{
			var objApp = nexacro.getApplication();
			if( scope.getOwnerFrame() == objApp.MAIN_TOP )	// TOP frame에서 호출 시 현재 FRAME에 toast 띄움
			{
				var frameType = objApp.afnGetFrameType();
				switch(frameType)
				{
					case "HOME" :
						scope = objApp.MAIN_HOME.form;
						break;
						
					case "WORK" :
						scope = objApp.MAIN_TAB.form;
						var tabIdx = scope.tabMain.tabindex;
						
						var page = scope.tabMain.tabpages[tabIdx];
						var oChildFrame = objApp.MAIN_WORK.frames[page.name];
						scope = oChildFrame.form;
						break;
				}
			}
			
			// frame -> frWork 혹은 comPop
			var frame = scope.getOwnerFrame();
			var pform = frame.form;
			trace('frame :: ' + frame.id + 'pform.id :: ' + pform.id);
			strMsg = this.msg(strMsg);
			strMsg = this.msgMapping(strMsg, arrParam);
			//trace("Ex.core strMsg : " + strMsg);
			if( pform && pform.fnSetMsgToast ) pform.fnSetMsgToast(strMsg, optArr);
			return pform;
		},
		/**
		  * Ex.core.error
		  *  transaction 에러발생시 에러메시지창을 띄운다.
		  * @param {form} scope
		  * @param {string} mID 메시지창ID
		  * @param {string} strMsg 출력할 메시지
		  * @param {string} callbackFunc 콜백함수명
		  * @return N/A
		  * @description
		  *  this.fn_msgAfter를 콜백함수로 호출한다.
		  * @example
		  *  Ex.core.error(this,"ERROR",sSvcId+"::"+nErrorCode+"::"+sErrorMsg);
		  * @memberOf Ex.core
		  **/
		errorCnt : 0,
		//error : function(scope, mID, strMsg, callbackFunc)
		error : function(scope, oInfo)
		{
			if( Ex.isEmpty(oInfo.id) ) oInfo.id = scope.name + "_pErrorE";
			if( Ex.isEmpty(oInfo.msg) ) oInfo.msg = "";
			if( Ex.isEmpty(oInfo.msgtype) ) oInfo.msgtype = "";
			
			oInfo.callbackfunc = oInfo.callbackfunc || "fnMsgAfter";
			var oChildFrame = nexacro.getPopupFrames()[oInfo.id];
			
			if (oChildFrame != null) {
				trace("동일한 메시지창은 한번에 하나만 허용합니다.");
				oInfo.id = oInfo.id + (++Ex.core.errorCnt);
				return;
			}
			
			oInfo.msg = this.msg(oInfo.msg);
			oInfo.msg = this.msgMapping(oInfo.msg, oInfo.arrparam);
			
			Ex.core.popup
			(
				scope,
				oInfo.id,
				"comm::comMsgAlert.xfdl",
				{
					title : "메시지",
					_msgbox_: true,
					_param_ : {msg : oInfo.msg, error : true, msgType : "E"}
				},
				"width=400, height=240, title=false",
				oInfo.callbackfunc
			);
		},
		/**
		  * Ex.core.alert
		  *  alert용 메시지창을 띄운다.
		  * @param {form} scope
		  * @param {string} mID 메시지창ID
		  * @param {string} strMsg 메시지코드
		  * @param {array} arrParam 메시지파라미터
		  * @param {string} msgType 메시지 아이콘(''/'I'/'W'/'S')
		  * @param {string} callbackFunc 콜백함수명
		  * @return N/A
		  * @description
		  *  this.fn_msgAfter를 콜백함수로 호출한다.
		  * @example
		  * @memberOf Ex.core
		  **/
		//alert : function(scope, mID, strMsg, arrParam, msgType, callbackFunc)
		alert : function(scope, oInfo)
		{
			if( Ex.isEmpty(oInfo.id) ) oInfo.id = scope.name + "_pAlert";
			if( Ex.isEmpty(oInfo.msg) ) oInfo.msg = "";
			if( Ex.isEmpty(oInfo.msgtype) ) oInfo.msgtype = "";
			
			oInfo.callbackfunc = oInfo.callbackfunc || "fnMsgAfter";
			var oChildFrame = nexacro.getApplication().lookup[oInfo.id];
			
			if (oChildFrame != null)
			{
				trace('동일한 메시지창은 한번에 하나만 허용합니다.');
				return;
			}
			
			oInfo.msg = this.msg(oInfo.msg);
			oInfo.msg = this.msgMapping(oInfo.msg, oInfo.arrparam);

			Ex.core.popup(
				scope,
				oInfo.id,
				"comm::comMsgAlert.xfdl",
				{
					title : "메시지",
					_msgbox_ : true,
					_param_ : {msg : oInfo.msg, error : false, msgType : oInfo.msgtype}
				},
				"width=400, height=200, title=false",
				oInfo.callbackfunc
			);
		},
		alertby : function(scope, oInfo)
		{
			if( Ex.isEmpty(oInfo.id) ) oInfo.id = scope.name + "_pAlert";
			//trace("oInfo.id : " + oInfo.id);
			if( Ex.isEmpty(oInfo.msg) ) oInfo.msg = "";
			if( Ex.isEmpty(oInfo.arrparam) ) oInfo.arrparam = [];
			if( Ex.isEmpty(oInfo.msgtype) ) oInfo.msgtype = "";
			
			oInfo.callbackfunc = oInfo.callbackfunc || "fnMsgAfter";
			this.alert(scope, oInfo);
		},		
		/**
		  * Ex.core.confirm
		  *  confirm용 메시지창을 띄운다.
		  * @param {form} scope
		  * @param {string} mID 메시지창ID
		  * @param {string} strMsg 메시지코드
		  * @param {array} arrParam 메시지파라미터
		  * @param {string} msgType 메시지 아이콘(''/'I'/'W'/'S')
		  * @param {string} callbackFunc 콜백함수명
		  * @return N/A
		  * @description
		  *  this.fn_msgAfter를 콜백함수로 호출한다.
		  * @example
		  *  Ex.core.confirm(this ,'pConfirm','D' ,'나는 {0}인이야???',['한국']  );
		  * @memberOf Ex.core
		  **/
		//confirm : function(scope, mID, strMsg, arrParam, msgType, callbackFunc)
		confirm : function(scope, oInfo)
		{
			if( Ex.isEmpty(oInfo.id) ) oInfo.id = scope.name + "_pConfirm";
			if( Ex.isEmpty(oInfo.msg) ) oInfo.msg = "";
			if( Ex.isEmpty(oInfo.arrparam) ) oInfo.arrparam = [];
			if( Ex.isEmpty(oInfo.msgtype) ) oInfo.msgtype = "";
			oInfo.callbackfunc = oInfo.callbackfunc || "fnMsgAfter";			
			var oChildFrame = nexacro.getPopupFrames()[oInfo.id];

			if (oChildFrame != null)
			{
				trace('동일한 메시지창은 한번에 하나만 허용합니다.');
				return;
			}
			oInfo.msg = this.msg(oInfo.msg);
			oInfo.msg = this.msgMapping(oInfo.msg, oInfo.arrparam);
			Ex.core.popup(
				scope,
				oInfo.id,
				"comm::comMsgConfirm.xfdl",
				{
					title : "메시지",
					_msgbox_ : true,
					_param_ : {msg : oInfo.msg, error : false, msgType : oInfo.msgtype}
				},
				"width=400, height=220, title=false",
				oInfo.callbackfunc
			);
		},
		confirmby : function(scope, oInfo)
		{
			if( Ex.isEmpty(oInfo.id) ) oInfo.id = scope.name + "_pConfirm";
			if( Ex.isEmpty(oInfo.msg) ) oInfo.msg = "";
			if( Ex.isEmpty(oInfo.arrparam) ) oInfo.arrparam = [];
			if( Ex.isEmpty(oInfo.msgtype) ) oInfo.msgtype = "";
			
			oInfo.callbackfunc = oInfo.callbackfunc || "fnMsgAfter";
			this.confirm(scope, oInfo);
		},	
		/** 
		  * Ex.core.tran
		  *  넥사크로 Transaction 요청을 공통함수로 처리한다.
		  * @param {form} objForm scope
		  * @param {string} serviceID
		  * @param {string} Transaction 요청 경로
		  * @param {string} inputdataset 서버데이타세명=클이언트데이타셋명, 수신건별 빈칸으로 구분한다.
		  * @param {string} outDatasets 클라이언트데이타세명=서버데이타셋명, 수신건별 빈칸으로 구분한다.
		  * @param {string} argument 명   Dataset 외의 Transaction을 위한 인자값, a=b의 형태로 입력하고, 빈칸으로 구분
		  * @param {string} callbackFunc Transaction콜백명
		  * @param {boolean} showProgress 처리중표시여부(default:true)
		  * @param {boolean} bAsync 비동기 여부를 지정합니다.(Default : true)
		  * @param {integer} bBinary 데이타 전송형태 (Default : 0)
		  * @return N/A
		  * @description 
		  *  
		  * @example
		  *  Ex.core.tran(this,'svcId','~/~/sample.do','DS_in=DS_in','DS_out=DS_out','a=b c=d','fn_callback');
		  * @memberOf Ex.core
		  **/
		tran : function()
		{
			var svcID, sController, inDatasets, outDatasets, argument, callbackFunc,  bAsync, showProgress;
			var arrArgu = arguments;

			svcID       = arrArgu[1];  //service id
			sController = arrArgu[2];
			inDatasets  = arrArgu[3];
			outDatasets = arrArgu[4];
			argument    = arrArgu[5];
			callbackFunc  = arrArgu[6];
			bAsync        = arrArgu[7];
			//showProgress  = true; // arrArgu[8];
			showProgress  = arrArgu[8];
			//bBinary      = 0;  //0 : xml, 2:ssv
			bBinary      = 2;  //0 : xml, 2:ssv
			//if( nexacro.getApplication().gvHost.indexOf("localhost") < 0 ) bBinary = 2;

			var pThis = arrArgu[0];
			if (Ex.isEmpty(showProgress))
			{				
				showProgress = true;
			}			
			if (bAsync != false || Ex.isEmpty(bAsync))
			{
				bAsync = true;
			}
			if (Ex.isEmpty(argument))
			{
				argument = "";
			}
			if (Ex.isEmpty(callbackFunc))
			{
				callbackFunc = "fnCallback";
			}
			// outDatasets에 자바단 권한 체크용 return dataset 추가
			outDatasets += ' gdsReqMenuAuth=gdsReqMenuAuth';
			
			nexacro.getEnvironment().set_usewaitcursor(showProgress);
			//Transaction Start Time
			var objDate = new Date();
			var nStartTime = objDate.getTime(); //Milliseconds
		    // Service ID Merge
			var strSvcID = {id:svcID, callbackFunc:callbackFunc, outDatasets:outDatasets, trStartTime:nStartTime};
			var strURL = "svc_url::" + sController;
			
			var strInDatasets = inDatasets;
			var strOutDatasets = outDatasets;
			
			var strArgument = argument;
			var strCallbackFunc = "_gfnCallback";

			if( system.navigatorname != "nexacro" )
			{
				var checkQuickViewUrl = decodeURIComponent(location.href);
				var checkQuickViewIdx = checkQuickViewUrl.indexOf("QuickView.html?formname=");
				if ( checkQuickViewIdx > -1 ) {}
			}
			
			// WorkFrmae이면 POST전송 request header에 screenId, menuId 추가
			var objApp = nexacro.getApplication();
			var menuId = '';
			var screenId = '';
			
			//trace("objApp.afnGetFrameType() : " + objApp.afnGetFrameType());
			
			/*
			if(objApp.afnGetFrameType() == 'WORK') {
				var ownerFrame;
				if(pThis.parent) {
					trace("tran 11111111111111111111");
					if( pThis.parent.getOwnerFrame() ) {
						trace("tran 22222222222222222222222");
						ownerFrame = pThis.parent.getOwnerFrame().getOwnerFrame();
						trace("XX:" + ownerFrame);
						trace("XXXX:" + ownerFrame.name);
					}
				}

				if( ownerFrame == objApp.MAIN_WORK ) {
					trace("tran 333333333333333333333333");
					menuId	 = pThis.getOwnerFrame().info.menuId;
					screenId = pThis.getOwnerFrame().info.screenId;
				}
			}
			*/
			var ownerFrame = pThis.getOwnerFrame();

			var chkCnt = 0;
				
			while(ownerFrame)
			{
				if(ownerFrame.info) break;
				else
				{
					//trace("else ownerFram.info~~~~~~~~~~~~~~~~~~~~~~~~~~");
					if(ownerFrame.getOwnerFrame())
					{
						ownerFrame = ownerFrame.getOwnerFrame();
						if(ownerFrame.info)	break;
					}
				}
				if(chkCnt == 10) break;
				chkCnt++;
			}
			
			//trace("ownerFrame.info:/n" + ownerFrame.info);
			//trace("ownerFrame [chkCnt]:" + chkCnt);
			
			if(ownerFrame.info)
			{				
				menuId	 = ownerFrame.info.menuId;
				screenId = ownerFrame.info.screenId;
				//trace("menuId >>>>>>>>>> " + menuId);
			}
			
			//trace("svcID : " + svcID + " menuId ::: " + menuId);
			nexacro.setHTTPHeaderVariable('fommMenuId', menuId);
			nexacro.setHTTPHeaderVariable('fommScreenId', screenId);
			nexacro.setHTTPHeaderVariable('fommUserId', Ex.util.getSession('gvUserId'));
			
			strArgument += " pvMenuId='"+menuId+"'";
			strArgument += " pvScreenId='"+screenId+"'";			
			strArgument += " pvUserId='"+Ex.util.getSession('gvUserId')+"'";		
			
			// transaction call
			pThis.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, bAsync, bBinary);
		},

		/** 
		  * Ex.core.callService
		  *  넥사크로 Transaction 요청을 공통함수로 처리한다.
		  * @param {form} objForm scope
		  * @param {string} serviceID
		  * @param {string} Transaction 요청 경로
		  * @param {string} inputdataset 서버데이타세명=클이언트데이타셋명, 수신건별 빈칸으로 구분한다.
		  * @param {string} outDatasets 클라이언트데이타세명=서버데이타셋명, 수신건별 빈칸으로 구분한다.
		  * @param {string} argument 명   Dataset 외의 Transaction을 위한 인자값, a=b의 형태로 입력하고, 빈칸으로 구분
		  * @param {string} callbackFunc Transaction콜백명
		  * @param {boolean} showProgress 처리중표시여부(default:true)
		  * @param {boolean} bAsync 비동기 여부를 지정합니다.(Default : true)
		  * @param {integer} bBinary 데이타 전송형태 (Default : 0)
		  * @return N/A
		  * @description 
		  *  
		  * @example
		  *  Ex.core.tran(this,'svcId','~/~/sample.do','DS_in=DS_in','DS_out=DS_out','a=b c=d','fn_callback');
		  * @memberOf Ex.core
		  **/
		callService : function()
		{
			var svcID, sController, inDatasets, outDatasets, argument, callbackFunc, bAsync, showProgress, bBinary;
			var arrArgu = arguments;

			svcID       = arrArgu[1];  //service id
			sController = arrArgu[2];
			inDatasets  = arrArgu[3];
			outDatasets = arrArgu[4];
			argument    = arrArgu[5];
			callbackFunc  = arrArgu[6];
			bAsync        = arrArgu[7];
			showProgress  = true; // arrArgu[8];
			bBinary		  = 2;

			var pThis = arrArgu[0];

			if (Ex.isEmpty(showProgress))
			{
				showProgress = true;
			}			
			if (bAsync != false || Ex.isEmpty(bAsync))
			{
				bAsync = true;
			}
			if (Ex.isEmpty(argument))
			{
				argument = "";
			}
			if (Ex.isEmpty(callbackFunc))
			{
				callbackFunc = "fnCallback";
			}
			// outDatasets에 자바단 권한 체크용 return dataset 추가
			outDatasets += ' gdsReqMenuAuth=gdsReqMenuAuth';

			nexacro.getEnvironment().set_usewaitcursor(showProgress);
			//Transaction Start Time
			var objDate = new Date();
			var nStartTime = objDate.getTime(); //Milliseconds
		    // Service ID Merge
			var strSvcID = {id:svcID, callbackFunc:callbackFunc, outDatasets:outDatasets, trStartTime:nStartTime};
			var strURL = "svc_url::" + sController;
			
			var strInDatasets = inDatasets;
			var strOutDatasets = outDatasets;
			
			var strArgument = argument;
			var strCallbackFunc = "_gfnCallback";

			if( system.navigatorname != "nexacro" )
			{
				var checkQuickViewUrl = decodeURIComponent(location.href);
				var checkQuickViewIdx = checkQuickViewUrl.indexOf("QuickView.html?formname=");
				if ( checkQuickViewIdx > -1 ) {}
			}
			
			// WorkFrmae이면 POST전송 request header에 screenId, menuId 추가
			var objApp = nexacro.getApplication();
			var menuId = '';
			var screenId = '';
			if(objApp.afnGetFrameType() == 'WORK') {
				if( pThis.parent.getOwnerFrame().getOwnerFrame() == objApp.MAIN_WORK ) {
					menuId	 = pThis.getOwnerFrame().info.menuId;
					screenId = pThis.getOwnerFrame().info.screenId;
				}
			}
			nexacro.setHTTPHeaderVariable('fommMenuId', menuId);
			nexacro.setHTTPHeaderVariable('fommScreenId', screenId);
			
			// transaction call
			pThis.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, false, bBinary, true);
		},
		callByDsService : function()
		{
			var svcID, argument, callbackFunc, bAsync, showProgress, bBinary;
			var arrArgu = arguments;

			var pThis = arrArgu[0];
			svcID			= arrArgu[1];	//service id
			argument		= arrArgu[2];
			callbackFunc	= arrArgu[3];
			bAsync			= arrArgu[4];
			showProgress	= true;			// arrArgu[8];
			bBinary			= 2;
			
			if( Ex.isEmpty(svcID) )
			{
				trace("CallBack ID가 지정되지 않아 서비스가 실행할 수 없습니다.");
				return;
			}
			
			var sInDs		= "gdsSvcInfo=gdsSvcInfo";	// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
			var sOutDs		= "";                       // 서버에서 수신할 데이타셋

			//var _dsSvcInfo = pThis["_dsSvcInfo"];
			var gdsSvcInfo = nexacro.getApplication().gdsSvcInfo;

			//trace("dsService===> " + gdsSvcInfo);

			for(var i=0; i<gdsSvcInfo.rowcount; i++)
			{
				var inDsArr = (gdsSvcInfo.getColumn(i, "IN_DS")||'').split(",");
				
				//trace("i=" + i + " " + inDsArr + " inDsArr.length : " + inDsArr.length);

				for(var j=0; j<inDsArr.length; j++)
				{
					var inDs	= inDsArr[j] || '';
					var opt		= "";
					
					//trace("j=" + j + " inDs : " + inDs);
					
					if( !Ex.isEmpty(inDs) )
					{
						if(inDsArr[j].indexOf(":") > -1)
						{
							inDs	= inDsArr[j].split(":")[0];
							opt		= inDsArr[j].split(":")[1];
						}
					}
					
					if( !Ex.isEmpty(inDs) )
					{
						//trace("inDs Obj===> " + pThis[inDs]);
						
						if(pThis[inDs] instanceof Dataset)
						{
							sInDs += " " + inDs + "=" + inDs + (!Ex.isEmpty(opt) ? ":" + opt : "");
						}
						else
						{
							trace("IN DATASET [" + inDs + "] 데이터셋이 존재하지 않아 서비스가 실행할 수 없습니다.");
							return;
						}
					}
				}
				
				var outDs = gdsSvcInfo.getColumn(i, "OUT_DS")||'';
				
				if( !Ex.isEmpty(outDs) )
				{
					//trace("outDs Obj===> " + pThis[outDs]);
					
					if(pThis[outDs] instanceof Dataset)
					{
						sOutDs = outDs + "=" + outDs;
					}
					else
					{
						trace("OUT DATASET [" + outDs + "] 데이터셋이 존재하지 않아 서비스가 실행할 수 없습니다.");
						return;
					}
				}
			}
			
			if (Ex.isEmpty(showProgress))		showProgress = true;
			if (!bAsync || Ex.isEmpty(bAsync))	bAsync = true;
			if (Ex.isEmpty(argument))			argument = "";
			if (Ex.isEmpty(callbackFunc))		callbackFunc = "fnCallback";
			
			var strCallbackFunc = "_gfnCallback";

			if( system.navigatorname != "nexacro" )
			{
				var checkQuickViewUrl = decodeURIComponent(location.href);
				var checkQuickViewIdx = checkQuickViewUrl.indexOf("QuickView.html?formname=");
				if ( checkQuickViewIdx > -1 ) {}
			}
			
			// WorkFrmae이면 POST전송 request header에 screenId, menuId 추가
			var objApp = nexacro.getApplication();
			var menuId = '';
			var screenId = '';

			if(objApp.afnGetFrameType() == 'WORK')
			{
				if( pThis.parent.getOwnerFrame().getOwnerFrame() == objApp.MAIN_WORK )
				{
					menuId	 = pThis.getOwnerFrame().info.menuId;
					screenId = pThis.getOwnerFrame().info.screenId;
				}
			}

			nexacro.setHTTPHeaderVariable('fommMenuId', menuId);
			nexacro.setHTTPHeaderVariable('fommScreenId', screenId);

			nexacro.getEnvironment().set_usewaitcursor(showProgress);
			
			//Transaction Start Time
			var objDate = new Date();
			var nStartTime = objDate.getTime(); //Milliseconds
		    // Service ID Merge
			var strSvcID = {id:svcID, callbackFunc:callbackFunc, trStartTime:nStartTime};
			var strURL = "svc_url::FOMMSVC/execService";

// 			trace("[lib_SrComm]-this.fnSrCommCallTran() strSvcID=[" + strSvcID + "]");
// 			trace("[lib_SrComm]-this.fnSrCommCallTran() strURL=[" + strURL + "]");
// 			trace("[lib_SrComm]-this.fnSrCommCallTran() sInDs=[" + sInDs + "]");
// 			trace("[lib_SrComm]-this.fnSrCommCallTran() sOutDs=[" + sOutDs + "]");
			pThis.transaction(strSvcID, strURL, sInDs, sOutDs, argument, strCallbackFunc, bAsync, bBinary);
		},
		/**
		  * Ex.core.pCalendarM
		  *  그리드에 월Calendar 팝업창을 호출한다.
		  * @param {form} scope
		  * @param {component} obj 그리드
		  * @param {object} e onexpandup event객체
		  * @return N/A
		  * @description 
		  *  grid_onexpandup event에 적용
		  * @example
		  *  Ex.core.pCalendarM(this,obj,e);
		  * @memberOf Ex.core
		  **/
		pCalendarM : function(scope,obj,e)
		{
			var pthis = scope;
			obj.updateToDataset();
			var v_oDs = obj.getBindDataset();
			var v_sCol = obj.getCellProperty("body", e.cell, "text");
			v_sCol = v_sCol.split(":")[1];

			var name = "_pdv_grdCalm"
			var objPopDiv = pthis.components[name];	
			if( Ex.isEmpty(objPopDiv) )
			{
				objPopDiv = new PopupDiv();		
				objPopDiv.init(name, 0, 0, 178, 177);		
				pthis.addChild(name, objPopDiv);				
				objPopDiv.set_scrollbars("none");
				objPopDiv.set_cssclass("pdiv_PD_monthcal");
				objPopDiv.set_async(false);
				objPopDiv.set_url("comm::comMonthCalendarM.xfdl");				
				var pdiv_cal_oncloseup = function(obj, e)
				{
					var strYYMM = obj.returnvalue;
					var oDs = obj.userdata;
					var sCol = obj.usercol;
					
					if(!Ex.isEmpty(strYYMM))
					{
						oDs.setColumn(oDs.rowposition, sCol, strYYMM);
					}
				};
				var pdiv_cal_onpopup = function(obj, e)
				{
					var oDs = obj.userdata;
					var sCol = obj.usercol;
					var v_var = oDs.getColumn(e.row, sCol);
					
					if( !Ex.isEmpty(v_var) && v_var.trim().length == 6 )
					{ 		
						obj.setValue(String(oDs.getColumn(oDs.rowposition,sCol)).substr(0,6));
					}
					else
					{
						obj.setValue(String(Ex.util.today()).substr(0,6));
					}
				}
				
				objPopDiv.addEventHandler("oncloseup", pdiv_cal_oncloseup, pthis);		
				objPopDiv.addEventHandler("onpopup", pdiv_cal_onpopup, pthis);		
				
				objPopDiv.show();			
			}
			
			objPopDiv.userdata = v_oDs;
			objPopDiv.usercol = v_sCol;
				
			var v_isValid = v_oDs.getColumn(e.row,v_sCol);
			
			if(!Ex.isEmpty(v_isValid))
			{
				v_isValid=v_isValid.trim();
				v_isValid=v_isValid.replace(" ","");
				v_isValid=v_isValid.replace("/","");
				v_isValid=v_isValid.replace(".","");
				
				if( v_isValid.length !=0 && (v_isValid.length > 6 || v_isValid.length < 6) )		
				{
					var param = {id : "pAlertI", msg : "입력값이 유효 범위를 벗어났습니다.\n{6자리,1920~2030}"};
					Ex.core.alert(scope, param);
					v_oDs.setColumn(e.row, v_sCol, "");
					return;
				}
				
				if( v_isValid.length !=0 && (v_isValid.substr(0,4) > "2030" || v_isValid.substr(0,4) < "1920") )
				{
					var param = {id : "pAlertI", msg : "입력값이 유효 범위를 벗어났습니다.\n{6자리,1920~2030}"};
					Ex.core.alert(scope, param);
					v_oDs.setColumn(e.row, v_sCol, "");
					return;		
				}
				
				if( v_isValid.length !=0 && (v_isValid.substr(4,2) > "12" || v_isValid.substr(4,2) < "01") )
				{
					var param = {id : "pAlertI", msg : "입력값이 유효 범위를 벗어났습니다.\n{6자리,1920~2030}"};
					Ex.core.alert(scope, param);
					v_oDs.setColumn(e.row, v_sCol, "");
					return;		
				}
			}
			
			var v_sMonth = v_isValid;
			var v_sMonth = Ex.isEmpty(v_sMonth) ? Ex.util.today():v_sMonth;
			
			var rect = obj.getCellRect(e.row, e.cell);
			var x = rect.left;
			var y = rect.bottom;
			
			objPopDiv.fn_setCalendar(String(v_sMonth).substr(0,6));	
			var bsucc = objPopDiv.trackPopupByComponent(obj,x,y);
		},
		/** 
		  * Ex.core.excelDownService
		  * POI로 엑셀파일을 생서하는 JAVA Controller Service를 호출하여 EXCEL파일을 다운로드 한다.
		  * @param {string} excelSvcControllerNm
		  * @param {Dataset} 조회 쿼리등에서 WHERE 조건으로 사용될 Dataset Object
		  * @param {string} 다운로드시 지정할 EXCEL 파일명 지정안하면 랜덤이름 생성 (※파일명 지정시 확장자는 붙이지 않도록 한다.)
		  * @return N/A
		  * @description 
		  *  
		  * @example
		  *  Ex.core.tran(this,'svcId','~/~/sample.do','DS_in=DS_in','DS_out=DS_out','a=b c=d','fn_callback');
		  * @memberOf Ex.core
		  **/
		excelDownService : function(scope, excelSvcControllerNm, whereDsObj, fileNm)
		{
			if( Ex.isEmpty(excelSvcControllerNm) )
			{
				console.log("Excel Download Service(Controller명)이 지정되지 않았습니다.");
				return;
			}
			
			if( Ex.isEmpty(whereDsObj) )
			{
				console.log("Excel Download 처리시 조회조건에 사용될 파라미터 DataSet은 필수로 지정해야 합니다.");
				return;
			}
			else
			{
				if(Ex.util.getTypeof(whereDsObj) != "DATASET")
				{
					console.log("Excel Download 조회조건에 사용될 파라미터 DataSet Object가 부당합니다.");
					return;
				}
			}			

			if( Ex.isEmpty(whereDsObj.colinfos["_CALL_CONTROLLER_NM_"]) )	whereDsObj.addColumn("_CALL_CONTROLLER_NM_", "string"); 
			if( Ex.isEmpty(whereDsObj.colinfos["_FILE_NM_"]) )			whereDsObj.addColumn("_FILE_NM_", "string"); 
			
			if(whereDsObj.rowcount == 0)
			{
				var aRow = whereDsObj.addRow();
				whereDsObj.setColumn(aRow, "_CALL_CONTROLLER_NM_",	excelSvcControllerNm);
				whereDsObj.setColumn(aRow, "_FILE_NM_",			fileNm);
			}
			else
			{
				whereDsObj.setColumn(0, "_CALL_CONTROLLER_NM_",	excelSvcControllerNm);
				whereDsObj.setColumn(0, "_FILE_NM_",			fileNm);
			}
			
			trace(whereDsObj.saveXML());

			var sTranId		= "_regExcelDownInfo";
			var sService	= "ExcelDownUtil/regExcelDownInfo";
			var sInDs		= "dsParams=" + whereDsObj.id;
			var sOutDs		= "gdsExcelControllerInfo=dsExcelControllerInfo";
			var sArg		= "";
			Ex.core.tran(scope, sTranId, sService, sInDs, sOutDs, sArg);
			
		}
	}
};

/******************** Component API 추가 ********************/
/**
  * Div.readyChart
  *  rMateChart 객체를 생성한다.
  * @param {form} scope
  * @param {string} id 챠트ID(Div id가 아님)
  * @param {function} onLoadCallFunc rMateChart 객체생성이 완료된후 호출할 콜백함수객체
  * @return N/A
  * @description 
  *  챠트ID : 개발자는 화면내 고유한ID를 부여해야한다.
  *            readyChart 함수에서 application내에서 고유한ID가 되도록 재조합하여 생성한다.
  *            formChartReadyHandler에 전달할때는 개발자가 지정한 ID만 파싱하여 전달한다.
  * @example
  *  this.divLineChart1.readyChart(this,"LineChart1", this.formChartReadyHandler);
  * @memberOf Div
  **/
nexacro.Div.prototype.readyChart = function(scope, id, onLoadCallFunc)
{
	if( system.navigatorname == "nexacro" ) return;
	
	var myFrame = scope.getOwnerFrame().name+"_"+scope.name+"_chartReadyHandler";
	var chartVars = "rMateOnLoadCallFunction="+myFrame;
	
	// frWork에서 화면 종료시 scope.getOwnerFrame().form.arrChart 담긴값을 반드시 초기화 한다.
	// frWork.fn_destroyChart / compop.fn_destroyChart참고
	window[myFrame] = function(chartId){
		var id = chartId.split("|")[1];
		if( onLoadCallFunc ) onLoadCallFunc.call(scope,id);
	};
	if( !scope.getOwnerFrame().form.arrChart ) scope.getOwnerFrame().form.arrChart = [];		
	scope.getOwnerFrame().form.arrChart.push(myFrame);
	
	/**
	  * Div.getHolderId
	  *  rMateChart가 생성될 Div내에 객체ID를 반환한다.(rMate 제공)
	  * @return {string} holderID
	  * @description 
	  *
	  * @example
	  *  var HolderId = divChart.getHolderId();
	  * @memberOf Div
	  **/
	this.getHolderId = function()
	{
		var str = "";
		var holder = this.getElement()._dest_handle.firstElementChild || this.getElement()._dest_handle.firstChild;
		var childHolder = holder.firstElementChild || holder.firstChild;
		str = childHolder.id;
		return str;
	}
	/**
	  * Div.setLayout
	  *  챠트레이아웃XML을 설정한다.
	  * @param {string} layoutStr 챠트레이아웃XML
	  * @return N/A
	  * @description 
	  *
	  * @example
	  *  divChart.setLayout(xmlString);
	  * @memberOf Div
	  **/
	this.setLayout = function(layoutStr)
	{
		var holderId = this.getHolderId();
		var id = this._chartId;
		var ch = document.getElementById(holderId);
		ch.style.width = '100%';
		ch.style.height = '100%';

		var id = this._chartId;
		document.getElementById(id).setLayout(layoutStr);
	};
	/**
	  * Div.setData
	  *  챠트데이타를 설정한다.
	  * @param {array} chartData 챠트데이타
	  * @return N/A
	  * @description 
	  *
	  * @example
	  *  divChart.setData(arrData);
	  * @memberOf Div
	  **/
	this.setData = function(chartData)
	{
		var id = this._chartId;
		document.getElementById(id).setData(chartData);
	};
	/**
	  * Div.getChart
	  *  챠트객체를 반환한다.
	  * @return N/A
	  * @description 
	  *  챠트에 접근가능한 함수처리를 위한 고려로 챠트객체를 반환받아 사용할수 있음.
	  *  rMate차트HTML5_사용설명서.pdf  / 4.2. 차트에 접근 가능한 API 사용
	  * @example
	  *  var rMateChart = divChart.getChart();
	  *  rMateChart.resize();
	  * @memberOf Div
	  **/
	this.getChart = function()
	{
		var id = this._chartId;
		return document.getElementById(id);
	}
	/**
	  * Div.getKey
	  *  application내에서 화면을 구분할수 있는 유니크한 문자열을 반환한다.
	  * @return {string} 문자열
	  * @description 
	  *  rMateChart XML내에 ****JsFunction용 사용자 정의함수를 기술할때
	  *  대상화면의 함수를 찾아 실행하기 위해사용한다.
	  * @example
	  *  var chartClick = divChart.getKey() + "chartClick";
	  *  레이아웃 XML에 추가한 예)  itemClickJsFunction="'+chartClick+'"
	  * @memberOf Div
	  **/
	this.getKey = function()
	{
		var str = scope.getOwnerFrame().name+scope.name+this.name;
			str = str.replace("_","").replace("_","");
		return str;
	}
	/**
	  * Div.resizeChart
	  *  div사이즈가 변경될경우 챠트를 resize처리 한다.
	  * @return N/A
	  * @description 
	  *  div 사이즈가 변결될경우 자동으로 호출하도록 되어 있음
	  * @example
	  *  divChart.resizeChart();
	  * @memberOf Div
	  **/
	this.resizeChart = function()
	{
		var holderId = this.getHolderId();
		var id = this._chartId;
		var ch = document.getElementById(holderId);
		ch.style.width = '100%';
		ch.style.height = '100%';
		
		document.getElementById(id).resize();
	}
	/**
	  * Div.addUserFunc
	  *  챠트에서 제공하는 사용자 정의함수를 넥사크로에 기술된 함수와 연결처리 한다.
	  * @param {string} strUserFunc 챠트에서 호출하는 사용자정의함수 호출명
	  * @param {function} userFunc 넥사크로에 기술된 함수객체
	  * @return N/A
	  * @description 
	  *  사용자 정의함수로 부터 받을 파라미터정보는 rMate차트HTML5_사용설명서.pdf를 참조한다.
	  * @example
	  *  var chartClick = divChart.getKey() + "chartClick";
	  *  divChart.addUserFunc(chartClick,this.chartClick);
	  * @memberOf Div
	  **/
	this.addUserFunc = function(strUserFunc, userFunc)
	{
		window[strUserFunc] = function(p1,p2,p3,p4,p5,p6,p7){
			if( userFunc ) userFunc.call(scope,p1,p2,p3,p4,p5,p6,p7);
		};
		if( !scope.getOwnerFrame().form.arrChart ) scope.getOwnerFrame().form.arrChart = [];		
		scope.getOwnerFrame().form.arrChart.push(strUserFunc);
	}
	// div onsize event 발생시 챠트를 resize한다.
	var divChartOnSize = function(obj,e){
		obj.resizeChart();
	};
	this.addEventHandler("onsize",divChartOnSize,scope);
	
	var holderId = this.getHolderId();
	var chartId = myFrame+"|"+id;
		
	this._chartLayout = "";
	this._chartId = chartId;
	rMateChartH5.create(chartId,  holderId, chartVars, "100%", "100%");
}
/**
  * Dataset.setDeleteRow
  *  ROWFLAG컬럼 사용시 ROWFLAG컬럼에 삭제 플래그를 삽입한다.
  * @param {integer} v 플래그를 삽입할 row index
  * @return {boolean} 처리 성공여부
  * @description 
  *
  * @example
  *  this.dsList.setDeleteRow(5);
  * @memberOf Dataset
  **/
nexacro.Dataset.prototype.setDeleteRow = function(v)
{
	var rowtype = this.getRowType(v);
	var rtn = true;

	var objColumnInfo = this.getColumnInfo("ROWFLAG");
	var flag = "";
	
	if( !Ex.isEmpty(objColumnInfo) )
	{
		flag = this.getColumn(v, "ROWFLAG");
		
		if(flag == "I")
		{
			rtn = this.deleteRow(v);
		}
		else
		{
			if( flag == "D" )
			{
				if( rowtype == Dataset.ROWTYPE_UPDATE )
				{	var isChange = Ex.util.isUpdatedRowByCol(this,v);
					if( isChange )
						flag = "U";
					else
						flag = "";
				}
				else
					flag = "";
			}
			else
			{
				flag = "D";
			}

			this.set_enableevent(false);
			this.setColumn(v,"ROWFLAG",flag);
			this.set_enableevent(true);
		}
	}
	else
	{
		rtn = false;
	}

	/*
	var type = this.getRowType(v);
	var rtn = true;
	
	if (type == Dataset.ROWTYPE_INSERT) {
		rtn = this.deleteRow(v);

	} else {
		var objColumnInfo = this.getColumnInfo("ROWFLAG");
		if( !Ex.isEmpty(objColumnInfo) )
		{
			var flag = this.getColumn(v, "ROWFLAG");
			if( flag == "D" )
			{
				var rowtype = this.getRowType(v);
				if( rowtype == Dataset.ROWTYPE_UPDATE )
				{	var isChange = Ex.util.isUpdatedRowByCol(this,v);
					if( isChange )
						flag = "U";
					else
						flag = "";
				}
				else
					flag = "";
			}
			else
			{
				flag = "D";
			}

			this.set_enableevent(false);
			this.setColumn(v,"ROWFLAG",flag);
			this.set_enableevent(true);
		}
		else
		{
			rtn = false;
		}
	}
	*/
	return rtn;
};
/**
  * Dataset.setAddRow
  *  신규행을 추가하고 ROWFLAG컬럼에 신규 플래그를 삽입한다.
  * @return {integer} 추가한 row index
  * @description 
  *  addRow와 동일한 옵션
  * @example
  *  this.dsList.setAddRow();
  * @memberOf Dataset
  **/
nexacro.Dataset.prototype.setAddRow = function()
{
	var objColumnInfo = this.getColumnInfo("ROWFLAG");
	if( !Ex.isEmpty(objColumnInfo) )
	{
		var row = this.addRow();
		
		//this.set_enableevent(false);
		this.setColumn(row,"ROWFLAG","I");
		//this.set_enableevent(true);
		
		return row;
	}
	else
	{
		var row = this.addRow();
		return row;
	}
};
/**
  * Dataset.setInsertRow
  *  신규행을 삽입하고 ROWFLAG컬럼에 신규 플래그를 삽입한다.
  * @param {integer} v 삽입할 row index
  * @return {integer} 삽입한 row index
  * @description 
  *  insertRow와 동일한 옵션
  * @example
  *  this.dsList.setInsertRow(5);
  * @memberOf Dataset
  **/
nexacro.Dataset.prototype.setInsertRow = function(v)
{
	var objColumnInfo = this.getColumnInfo("ROWFLAG");
	if( !Ex.isEmpty(objColumnInfo) )
	{
		//this.set_enableevent(false);
		var row = this.insertRow(v);
		this.setColumn(row,"ROWFLAG","I");
		//this.set_enableevent(true);
		this.set_rowposition(row);
		return row;
	}
	else
	{
		var row = this.insertRow(v);
		return row;
	}
};
/**
  * Dataset.setUpdateRow
  *  ROWFLAG컬럼에 업데이트 플래그를 삽입한다.
  * @param {object} e oncolumnchanged의 eventinfo 객체 e
  * @param {array:string} arrExcptCol ROWFLAG 상태 제외할 컬럼명 배열
  * @return N/A
  * @description 
  *  데이타셋 oncolumnchanged 이벤트에 기술한다.
  * @example
  *  this.dsList.setUpdateRow(e);
  * @memberOf Dataset
  **/
nexacro.Dataset.prototype.setUpdateRow = function(e, arrExcptCol)
{
	if( Ex.isEmpty(arrExcptCol) || !Ex.isArray(arrExcptCol) )
		arrExcptCol = [];
		
	var objColumnInfo = this.getColumnInfo("ROWFLAG");

	if( !Ex.isEmpty(objColumnInfo) )
	{
		var type = this.getRowType(e.row);
		var flag = this.getColumn(e.row, "ROWFLAG");
		
		if( type == Dataset.ROWTYPE_INSERT || flag == "I" || flag == "D") return;	

		// default ROWFLAG 체크 제외컬럼 정의
		var defaultExceptCol = ['ROWFLAG', 'CHK'];
		for(var i = 0; i < defaultExceptCol.length; i++) {
			if( Ex.arrIndexOf(arrExcptCol, defaultExceptCol[i]) < 0 )
				arrExcptCol.push(defaultExceptCol[i]);
		}
		
		// isUpdatedRowByCol은 arrExcptCol 배열 안의 컬럼명에 대해서는 체크하지 않음
		var isChange = Ex.util.isUpdatedRowByCol(this, e.row, arrExcptCol);
		if( isChange == true )
		{
			this.set_enableevent(false);
			this.setColumn(e.row,"ROWFLAG","U");
			this.set_enableevent(true);
		}
		else
		{
			this.set_enableevent(false);
			this.setColumn(e.row,"ROWFLAG","");
			this.set_enableevent(true);		
		}
	}
};
/**
  * Dataset.setCopyRow
  *  Dataset행을 복사한다.
  * @param {integer} nToRow 복사되어 변경될행
  * @param {dataset} objDataset 복사해 올 데이터셋
  * @param {integer} nFromRow 복사해 올 데이터셋의 행
  * @param {str} strColInfo 복사대상 컬럼매핑 정보
  * @return N/A
  * @description 
  *  copyRow와 동일한 옵션
  *  copyRow 사용시 대상컬럼을 모두 복사한다.
  *  setCopyRow 사용시 ROWFLAG컬럼을 제외하고 대상컬럼을 복사한다.
  * @example
  *  this.dsList.setCopyRow(row,this.dsList00, this.dsList00.rowposition);
  * @memberOf Dataset
  **/
nexacro.Dataset.prototype.setCopyRow = function(nToRow,objDataset,nFromRow,strColInfo)
{
	var objColumnInfo = this.getColumnInfo("ROWFLAG");
	if( !Ex.isEmpty(objColumnInfo) )
	{
		var ROWFLAG = this.getColumn(nToRow,"ROWFLAG")||"U";
		this.copyRow(nToRow,objDataset,nFromRow,strColInfo);
		this.set_enableevent(false);
		this.setColumn(nToRow,"ROWFLAG",ROWFLAG);
		this.set_enableevent(true);
	}
	else
	{
		this.copyRow(nToRow,objDataset,nFromRow,strColInfo);
	}
};
/**
  * Dataset.resetRow
  *  Dataset행을 원본상태로 되돌린다.
  * @param {integer} row rowindex
  * @return N/A
  * @description 
  *  Normal : 처리 없음
  *  Update : Normal상태로 환원
  *  Insert : 모든 컬럼값을 초기화 한다. ROWFLAG 사용시 기본플래그 처리
  *  Delete : ROWFLAG사용시만 Normal상태로 환원
  * @example
  *  this.Dataset.resetRow(5);
  * @memberOf Dataset
  **/
nexacro.Dataset.prototype.resetRow = function(row)
{
	if( this.rowcount == 0 ) return;
	if( Ex.isEmpty(row) || row == -1 ) return;
	if( row > -1 && row < this.rowcount )
	{
		var type = this.getRowType(row);
		var objColumnInfo = this.getColumnInfo("ROWFLAG");
		if( type == Dataset.ROWTYPE_NORMAL )
			return;
		else if( type == Dataset.ROWTYPE_INSERT )
		{
			this.set_enableevent(false);
			for(var i=0; i<this.colcount; i++) this.setColumn(row, i, "");
			if( objColumnInfo ) this.setColumn(row, "ROWFLAG", "I");
			this.set_enableevent(true);			
		}
		else
		{
			this.set_enableevent(false);
			for(var i=0; i<this.colcount; i++)
			{
				this.setColumn(row, i, this.getOrgColumn(row,i) );
			}
			this.set_enableevent(true);
		}
	}
};
/**
  * Static.setDataCount
  *  static에 데이타셋 건수를 표현한다.
  * @param {dataset} objDs 데이타셋객체
  * @return N/A
  * @description 
  *  static에 데이타셋 건수 표현의 표준화를 위해 제공
  * @example
  *  this.static.setDataCount(dataset);
  * @memberOf static
  **/
nexacro.Static.prototype.setDataCount = function(objDs)
{
	var str = "";
	if( nexacro.getApplication().SYSLANG == "ko" )
		str = "[총 {0}건]";
	else
		str = "[Total : {0}]";

	if( Ex.isEmpty(objDs) ) 
		this.set_text( str.replace("{0}","") );
	else
		this.set_text( str.replace("{0}",(objDs.rowcount).toString()) );
};
/**
  * Grid.displayRowType
  *  그리드에 ROWFLAG 아이콘 표현을 위해 그리드를 설정하기 위한 API
  * @return {boolean} 설정성공여부
  * @description 
  *
  * @example
  *  var arrFormats = this.grid.displayRowType(0,0);
  * @memberOf grid
  **/
nexacro.Grid.prototype.displayRowType = function()
{
   var arrFormatId = this.getFormatIdList();
   var orgFormatId   = this.formatid;
   var bRet      = false;   // retrn flag; true : 변경; false: 변경없음
   
   this.set_enableevent(false);
   for(var j=0; j<arrFormatId.length; j++)      // 다중포멧 displayRowType 처리
   {
      this.set_formatid(arrFormatId[j]);
      for(var i=0;i<this.getCellCount("body");i++)
      {
         var str = this.getCellProperty("body",i,"text");
         if( str == "bind:ROWFLAG" )
         {
            var ds = this.getBindDataset();
            if( !Ex.isEmpty(ds) )
            {
               this.setCellProperty("body",i,"displaytype","imagecontrol");
               this.setCellProperty("body",i,"expr","Ex.util.displayRowType(dataset.getRowType(rowidx),ROWFLAG)");
               bRet = true;
               continue;
            }
         }      
      }
   }
   this.set_formatid(orgFormatId);
   this.set_enableevent(true);
   
   return bRet;
};