/**
 * @fileoverview 프로젝트 utility
 **/
	Ex.util = {
		/**
		  * 공통코드를 조회한다
		  * @param {object} oParam : 공통코드 copy를 위한 option 객체
		  * @return null
		  * @description 
		  *  oParam = {
		  *  	upCmmCd	: 공통코드 상위코드명 (Ex: 'YN_CD')
		  *		codeDiv	: 공통코드 업무구분; ROOT 제외 최상위코드를 업무구분코드로 등록하고, 해당 업무구분 코드 아래의 코드 조회 시 사용한다.
		  *  	optStr	: ''/'NO' : 추가없음;
						  'ALL'   : '- 전체 -' 추가;
						  'SEL'   : '- 선택 -' 추가;
		  *  	useYn	: 'Y'/'N' : 사용여부에 따라 복사
						: ''/'ALL': 사용여부 상관없이 복사
		  *  	filter	: 개발자 정의 filterstr 추가	( Ex: "ITM_VAL_1 == 'Y'" )
		  *  	objDs	: 공통코드를 복사할 datset 객체( Ex: this.dsYnCd )
		  *	 }
		  * @example
		  * Ex.util.getCmmCode(oParam);
		  * @memberOf Ex.util
		  **/
		getCmmCode : function(oParam)
		{
			var upCmmCd = oParam.upCmmCd||'';	// 상위코드
			var codeDiv	= oParam.codeDiv||'';	// 코드 업무구분(Lv1코드)
			var optStr 	= oParam.optStr||'';	// 옵션
			var useYn 	= oParam.useYn||'';		// 사용여부
			var filter 	= oParam.filter||'';	// 필터
			var objDs	= oParam.objDs||'';		// 코드 받을 dataset

			if(Ex.util.getTypeof(objDs))
			{
				// oParam이 배열인 경우 재호출
				if( Ex.isArray(upCmmCd) ) 
				{
					for(var i = 0; i < oParam.upCmmCd.length; i++) 
					{
						var objParam = {
							 upCmmCd : oParam.upCmmCd[i]||''
							,codeDiv : oParam.codeDiv[i]||''
							,optStr	 : oParam.optStr[i]||''
							,useYn	 : oParam.useYn[i]||''
							,filter	 : oParam.filter[i]||''
							,objDs	 : oParam.objDs[i]||''
						}
						Ex.util.getCmmCode(objParam);
					}
					return;
				}
				
				if( Ex.isEmpty(objDs) ) {
					trace('objDs null');	
					return;
				}

				//초기화
				objDs.clearData();

				// default value
				if( Ex.isEmpty(upCmmCd) ) {
					trace('upCmmCd null');	
					return;
				}			
				if( Ex.isEmpty(codeDiv) )	codeDiv	= '';		// 코드 업무구분
				if( Ex.isEmpty(optStr) )	optStr 	= '';		// 옵션 X
				if( Ex.isEmpty(useYn) )		useYn 	= '';		// 전체조회
				if( Ex.isEmpty(filter) )	filter	= '';		
				
				// 화면에 던질 dataset setting
				var gdsCodeTemp = new Dataset();
				gdsCodeTemp.copyData(nexacro.getApplication().gdsCode, false);
				var filterStr = '';
				
				// 상위 코드 매칭
				var rowPos = gdsCodeTemp.findRow('UP_CMM_CD', upCmmCd);
				if( rowPos < 0 ) {
					trace(upCmmCd + ' : 해당하는 코드가 없습니다.');
					return;
				}
				else
					filterStr += ("UP_CMM_CD == '" + upCmmCd + "'");
				
				// 추가 코드 업무구분 매칭
				if( !Ex.isEmpty(codeDiv) )	filterStr += (" && CODE_DIV =='" + codeDiv + "'");
					
				// 사용여부 매칭
				switch(useYn) 
				{
					case "Y" :	case "N" :
						filterStr += (" && USE_YN == '" + useYn + "'");
						break;
					case "" :	case "ALL"	:
						break;
				}
				
				// 개발자 정의 filter 추가
				if( !Ex.isEmpty(filter) )	filterStr += (" && (" + filter + ")");
				
				// 필터 적용
				gdsCodeTemp.set_filterstr(filterStr);
				
				// 다국어 처리용 temp dataset 생성 및 copy
				var gdsCodeLang = new Dataset();
				gdsCodeLang.copyData(gdsCodeTemp, true);
				gdsCodeLang.set_filterstr("LANG_CD =='" + Ex.util.getSession('gvSysLangCd') + "'");
				
				// 현재 언어 코드 매칭 && 언어코드 filter 적용
				var selLangCd = Ex.util.getSession('gvSelLangCd')||Ex.util.getSession('gvSysLangCd');
				var filterLang = " && LANG_CD == '" + selLangCd + "'";
				gdsCodeTemp.set_filterstr(filterStr + filterLang);
				
				// 코드 비교 및 다국어 적용(default sysLangCd의 CMM_CD_NM으로 적용)
				for(var i = 0; i < gdsCodeLang.rowcount; i++)
				{
					var _cmmCd	= gdsCodeLang.getColumn(i, 'CMM_CD');
					var _cmmCdNm= gdsCodeLang.getColumn(i, 'CMM_CD_NM');
					var rowpos 	= gdsCodeTemp.findRow('CMM_CD', _cmmCd);
					if( rowpos < 0 ) {
						var nOrdr	= gdsCodeLang.getColumn(i, 'SORT_ORDR');
						gdsCodeTemp.copyRow(gdsCodeTemp.setInsertRow(nOrdr), gdsCodeLang, i);
						gdsCodeTemp.setColumn(i, 'LANG_CD', selLangCd);
					}
					else {
						var t_cmmCdNm = gdsCodeTemp.getColumn(i, 'CMM_CD_NM');
						if( Ex.isEmpty(t_cmmCdNm) ) {
							gdsCodeTemp.setColumn(rowpos, 'CMM_CD_NM', _cmmCdNm);
						}
					}
				}
				
				// return dataset copy
				objDs.copyData(gdsCodeTemp, true);
				gdsCodeTemp.set_filterstr("");
				
				
				// optStr 추가
				switch(optStr)
				{
					case "" :
						break;
					
					case "NO" :
						rowPos = objDs.insertRow(0);
						objDs.setColumn(rowPos, 'CMM_CD_NM', '');
						break;
						
					case "ALL" :
						rowPos = objDs.insertRow(0);
						//objDs.setColumn(rowPos, 'CMM_CD', '');
						objDs.setColumn(rowPos, 'CMM_CD_NM', '- ' + Ex.core.word("전체") + ' -');
						
						break;
						
					case "SEL" :
						rowPos = objDs.insertRow(0);
						//objDs.setColumn(rowPos, 'CMM_CD', '');
						objDs.setColumn(rowPos, 'CMM_CD_NM', '- ' + Ex.core.word("선택") + ' -');
						break;
				}
			}
		},
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
		setBtnAlign : function(objDiv, align, compVisible)		// right: right정렬, true:visible button만/false:visible 상관없이 모든 버튼 대상
		{
			if(!objDiv instanceof Div ) {
				trace('DIV가 아닙니다');
				return;
			}
			
			if( Ex.isEmpty(align) ) align = 'RIGHT';
			align = align.toUpperCase();
			
			if( Ex.isEmpty(compVisible) ) compVisible = true;
			
			// div안의 button만 뽑기(compVisible에 따라)
			var arrBtn = [];
			for(var i = 0; i < objDiv.form.components.length; i++)
			{
				if(objDiv.form.components[i].toString().toUpperCase() == '[OBJECT BUTTON]') {
					var objBtn = objDiv.form.components[i];
					
					if( Ex.isEmpty(objBtn.propLeft) )
					{
						if( !Ex.isEmpty(objBtn.getOffsetLeft) )	objBtn.propLeft = objBtn.getOffsetLeft();
					}
					
					if(compVisible) {
						if(objBtn.visible)
							arrBtn.push(objDiv.form.components[i]);
					}
					else
						arrBtn.push(objDiv.form.components[i]);
				}
			}

			for(var i = 0; i < objDiv.form.components.length; i++)
			{
				var objBtn = objDiv.form.components[i];

				//trace("i=" + i + " objBtn.id : " + objBtn.id + " left : " + objBtn.propLeft + " right : " + objBtn.propRight);
				
				if( !Ex.isEmpty(objBtn.propLeft) )			objBtn.setOffsetLeft(nexacro.toNumber(objBtn.propLeft));
			}
			
			// button sort
			// left : 오름차순  /  right : 내림차순 버튼 정렬
			arrBtn.sort( function(btnA, btnB) {
							if(align == 'LEFT')	
								return btnA.getOffsetLeft() - btnB.getOffsetLeft();
							else if(align == 'RIGHT')
								return btnB.getOffsetLeft() - btnA.getOffsetLeft();
						} );

			// 버튼 위치 재조정
			var nStart = 0;
			var nWidth = 0;
			var nMargin = 5;
			for(var i = 0; i < arrBtn.length; i++)
			{
				var objBtn = arrBtn[i];
				nWidth = objBtn.getOffsetWidth();
				if(align == 'LEFT') {
					objBtn.set_right(null);
					objBtn.set_left(nStart);
				}
				else {		// align == 'right'
					objBtn.set_left(null);
					objBtn.set_right(nStart);
				}
				
				nStart += (nWidth + nMargin);
			}
		},
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
		setBtnAlignEx : function(objDiv, align, compVisible)		// right: right정렬, true:visible button만/false:visible 상관없이 모든 버튼 대상
		{		
			if(!objDiv instanceof Div ) {
				trace('DIV가 아닙니다');
				return;
			}
			
			if( Ex.isEmpty(align) ) align = 'RIGHT';
			align = align.toUpperCase();
			
			if( Ex.isEmpty(compVisible) ) compVisible = true;
			
			// div안의 button만 뽑기(compVisible에 따라)
			var arrBtn = [];
			for(var i = 0; i < objDiv.form.components.length; i++)
			{
				if(objDiv.form.components[i].toString().toUpperCase() == '[OBJECT BUTTON]') {
					var objBtn = objDiv.form.components[i];
					if(compVisible) {
						if(objBtn.visible)
							arrBtn.push(objDiv.form.components[i]);
					}
					else
						arrBtn.push(objDiv.form.components[i]);
				}
			}
			
			// button sort
			// left : 오름차순  /  right : 내림차순 버튼 정렬
			arrBtn.sort( function(btnA, btnB) {
							if(align == 'LEFT')	
								return btnA.getOffsetLeft() - btnB.getOffsetLeft();
							else if(align == 'RIGHT')
								return btnB.getOffsetLeft() - btnA.getOffsetLeft();
						} );
			
			// 버튼 위치 재조정
			var nStart = 0;
			var nWidth = 0;
			var nMargin = 5;
			for(var i = 0; i < arrBtn.length; i++)
			{
				var objBtn = arrBtn[i];
				nWidth = objBtn.getOffsetWidth();
				if(align == 'LEFT') {
					objBtn.set_right(null);
					objBtn.set_left(nStart);
				}
				else {		// align == 'right'
					objBtn.set_left(null);
					objBtn.set_right(nStart);
				}
				
				nStart += (nWidth + nMargin);
			}
		},
		/**
		  * scope의 메뉴권한을 보고 authType에 따라 배열 각 버튼의 visible 처리 api
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
		setBtnVisible : function(scope, authType, arrBtn)
		{
			if( Ex.isEmpty(scope) ) {
				trace('no scope');
				return;
			}
			if( Ex.isEmpty(arrBtn) ) {
				trace('no button');
				return;
			}
			
			if( Ex.isEmpty(authType) )	authType = '';
			
			// 해당 scope의 권한 조회
			var objAuth = Ex.util.getMenuAuth(scope);
			var isVisible = false;
			switch(authType.toUpperCase()) {
				case "" :			isVisible = true;	break;
				case "READ" :		isVisible = (objAuth.readYn == 'Y');		break;
				case "WRITE" :		isVisible = (objAuth.writeYn == 'Y');		break;
				case "DELETE" :		isVisible = (objAuth.deleteYn == 'Y');		break;
				case "SAVE" :		isVisible = (objAuth.saveYn == 'Y');		break;
				case "EXCLDOWN" :	isVisible = (objAuth.exclDownYn == 'Y');	break;
				case "REPORTPRNT" :	isVisible = (objAuth.reportPrntYn == 'Y');	break;
				case "FILEUP" :		isVisible = (objAuth.fileUpYn == 'Y');		break;
				default :			isVisible = false;	break;
			}
			
			// 각 btn의 visible 처리
			for(var i = 0; i < arrBtn.length; i++)
				arrBtn[i].set_visible(isVisible);
			
			return;
		},
		/**
		  * scope의 권한을 return한다.
		  * @param {object} scope : 호출 스코프(this)
		  * @param {string} authType : 확인할 권한 구분자
		  * @return null
		  * @description 
		  *  authType :
		  *    	"" or "all" :	모든 권한을 객체로 return
		  *		"read"		:	조회권한 return
		  *		"write"		:	쓰기권한 return
		  *		"delete"	:	삭제권한 return
		  *		"save"		:	저장권한 return; 저장권한은 쓰기/삭제권한중 하나라도 있으면 Y
		  *		"exclDown"	:	엑셀다운권한 return
		  *		"reportPrnt":	리포트출력권한 return
		  *		"fileUp"	:	파일업로드권한 return
		  * @example
		  *  var auth = Ex.util.getMenuAuth(this);
		  *	 auth == {
							readYn			: 'Y' (or 'N')	// 메뉴 접근/조회 권한
						  , writeYn			: 'Y' (or 'N')	// 쓰기/추가 권한
						  , deleteYn		: 'Y' (or 'N')	// 삭제 권한
						  , saveYn			: 'Y' (or 'N')	// 저장 권한
						  , exclDownYn		: 'Y' (or 'N')	// 엑셀다운로드 권한
						  , reportPrntYn	: 'Y' (or 'N')	// 리포트출력 권한
						  , fileUpYn		: 'Y' (or 'N')	// 파일업로드(첨부) 권한
					}
		  * @memberOf Ex.util
		  **/ 
		getMenuAuth : function(scope, authType)
		{
			if( Ex.isEmpty(scope) ) {
				trace('scope가 없습니다.');
				return;
			}
			
			var objRtn;
			var selMenuScope;
			var curScope;

			if(nexacro.getApplication().MAIN_TAB.form.tabMain && nexacro.getApplication().MAIN_TAB.form.tabMain.tabindex > -1)
			{
				selMenuScope = nexacro.getApplication().MAIN_TAB.form.tabMain.tabpages[nexacro.getApplication().MAIN_TAB.form.tabMain.tabindex];
				curScope = nexacro.getApplication().MAIN_WORK.frames[selMenuScope.id];
			}
			else
			{
				var authObj = new Object();
				authObj["readYn"] = "Y";
				authObj["writeYn"] = "Y";
				authObj["deleteYn"] = "Y";
				authObj["saveYn"] = "Y";
				authObj["exclDownYn"] = "Y";
				authObj["reportPrntYn"] = "Y";
				authObj["fileUpYn"] = "Y";
				authObj["adminYn"] = nexacro.getApplication().gvAuthAdminYn||'N';

				//alert("adminYn:" + authObj["adminYn"]);

				curScope = new Object();
				curScope["info"] = authObj;
			}
			//trace("curScope.id : " + curScope.id);
			//trace("selMenuScope.id : " + selMenuScope.id + " selMenuScope : [" + selMenuScope + "]");
			
			/*
			if( Ex.util.isPopup(scope) ) {
				//scope = scope.parent.getOwnerFrame();
				scope = scope.getOwnerFrame();
				objRtn = Ex.util.getMenuAuth(scope, authType);
				return objRtn;
			}
			*/

			if( Ex.isEmpty(authType) )	authType = "";
			switch(authType.toUpperCase())
			{
				case "" :	case "ALL" :
					objRtn = {
							readYn		: curScope.info.readYn
						  , writeYn		: curScope.info.writeYn
						  , deleteYn	: curScope.info.deleteYn
						  , saveYn		: curScope.info.saveYn
						  , exclDownYn	: curScope.info.exclDownYn
						  , reportPrntYn: curScope.info.reportPrntYn
						  , fileUpYn	: curScope.info.fileUpYn
						  , adminYn  	: curScope.info.adminYn
					};
					break;
					
				case "READ" :		objRtn = curScope.info.readYn;			break;
				case "WRITE" :		objRtn = curScope.info.writeYn;		break;
				case "DELETE" :		objRtn = curScope.info.deleteYn;		break;
				case "SAVE" :		objRtn = curScope.info.saveYn;			break;
				case "EXCLDOWN" :	objRtn = curScope.info.exclDownYn;		break;
				case "REPORTPRNT" :	objRtn = curScope.info.reportPrntYn;	break;
				case "FILEUP" :		objRtn = curScope.info.fileUpYn;		break;
				case "ADMIN" :		objRtn = curScope.info.adminYn;		break;
			}
// 			trace("Ex.util.getMenuAuth() authType : " + authType);
// 			trace("Ex.util.getMenuAuth() menuId : " + curScope.info.menuId);
// 			trace("Ex.util.getMenuAuth() menuNm : " + curScope.info.menuNm);
// 			trace("Ex.util.getMenuAuth() READ : " + curScope.info.readYn);
// 			trace("Ex.util.getMenuAuth() WRITE : " + curScope.info.writeYn);
// 			trace("Ex.util.getMenuAuth() DELETE : " + curScope.info.deleteYn);
// 			trace("Ex.util.getMenuAuth() SAVE : " + curScope.info.saveYn);
// 			trace("Ex.util.getMenuAuth() EXCLDOWN : " + curScope.info.exclDownYn);
// 			trace("Ex.util.getMenuAuth() REPORTPRNT : " + curScope.info.reportPrntYn);
// 			trace("Ex.util.getMenuAuth() FILEUP : " + curScope.info.fileUpYn);
			return objRtn;
		},
		/**
		  * 인자로 받은 문자열을 문자열의 양끝단 공백,null,undefined를 빈문자('')로 치환하여 반환한다.
		  * @param {string} strArg 문자열
		  * @param {boolean} bUseNullStr "null","undefined" 치환여부(default : false)
		  * @return {string} 문자열
		  * @description 
		  *  bUseNullStr=true 일경우 문자열 내부에 'null','undefined' 문자를 치환없이 반환한다. 
		  * @example
		  *  var str = Ex.util.replaceEmpty(undefined); // output ""
		  *  var str = Ex.util.replaceEmpty(" 대한 민국 undefined "); // output "대한 민국"
		  *  var str = Ex.util.replaceEmpty(" 대한 민국 undefined ",true); // output "대한 민국 undefined"
		  * @memberOf Ex.util
		  **/ 
		replaceEmpty : function(strArg , bUseNullStr)
		{
			if( Ex.isEmpty(bUseNullStr) ) bUseNullStr = false;
			if( Ex.isNull(strArg) || Ex.isUndefined(strArg))
				return "";
			else
			{
				if( bUseNullStr )
				{
					return (str).toString().trim();
				}
				else
				{
					var str = strArg;
					if ( str.toString().indexOf("undefined") > -1 ) str = nexacro.replaceAll(str.toString(),"undefined","");
					if ( str.toString().indexOf("null") > -1 ) str = nexacro.replaceAll(str.toString(),"null","");
					return (str).toString().trim();
				}
			}
		},
		/**
		  * 파일명으로 지정한 문자열에서 유효하지 않은 문자를 "_"로 치환하여 반환한다.
		  * @param {string} str 문자열
		  * @return {string} 문자열
		  * @description 
		  *  
		  * @example
		  *  var filename = Ex.util.isValidateFileName("가\나/다:라*마?바"사아<자>차|카");
		  * @memberOf Ex.util
		  **/ 
	    isValidateFileName : function(str)
	    {
			if( Ex.isEmpty(str) ) return "";
			str = str.toString();
			var checkStr = ["\\","/",":","*","?","\"","<",">","|"];
			for(var i=0;i<checkStr.length;i++) str = nexacro.replaceAll(str, checkStr[i], "_");

			return str;
	    },
		/**
		  * 엑셀시트명으로 지정한 문자열에서 유효하지 않은 문자를 "_"로 치환하여 반환한다.
		  * @param {string} str 문자열
		  * @return {string} 문자열
		  * @description 
		  *  
		  * @example
		  *  var sheetname = Ex.util.isValidateSheetName("가\나/다:라*마?바"사아<자>차|카[파]하");
		  * @memberOf Ex.util
		  **/ 	    
	    isValidateSheetName : function(str)
	    {
			if( Ex.isEmpty(str) ) return "";
			str = str.toString();
			var checkStr = ["\\","/",":","*","?","\"","<",">","|","[","]"];
			for(var i=0;i<checkStr.length;i++) str = nexacro.replaceAll(str, checkStr[i], "_");

			return str;
	    },
	    xList : [], // xquery list 적재용
		// scope : form객체
		xqueryDataset : function(scope)
		{
			this.xList = [];
			
			var arrObjs = scope.objects;
			for(var i=0; i<arrObjs.length; i++)  this.xList.push(arrObjs[i]);
			
			this.xFindDataset(scope );
			
			var a = this.xList;
			this.xList = [];
			return a;			
		},
		// obj : form객체
		xFindDataset : function (obj)
		{
			var arrComp = obj.components;
			var nLength = arrComp.length;
			for (var i=0; i<nLength; i++)
			{
				if(arrComp[i] instanceof nexacro.Div)
				{
					if( !Ex.isEmpty(arrComp[i].url) )
					{
						var arrObjs = arrComp[i].objects;
						for(var k=0; k<arrObjs.length; k++)  this.xList.push(arrObjs[k]);
						this.xFindDataset(arrComp[i]);
					}
				}
				else if(arrComp[i] instanceof nexacro.Tab)
				{
					var nPages = arrComp[i].tabpages.length;
					for (var j=0; j<nPages;j++)
					{
						if( !Ex.isEmpty(arrComp[i].tabpages[j].url) )
						{
							var arrObjs = arrComp[i].tabpages[j].objects;
							for(var k=0; k<arrObjs.length; k++)  this.xList.push(arrObjs[k]);
							this.xFindDataset(arrComp[i].tabpages[j]);
						}
					}
				}
			}	
		},
		/**
		  * 대상 데이타셋이 없으면 생성, 있으면 대상 데이타셋 객체를 반환
		  * @param {form} oForm 검색 할 폼 scope지정
		  * @param {string} sDsNm 데이타셋명
		  * @return {dataset} 데이타셋 객체
		  * @description 
		  *  데이타셋명으로 존재하면 데이타를 제거하고 반환한다.
		  * @example
		  *  var datasetObject = Ex.util.createDataset(this,'DS_LIST');
		  * @memberOf Ex.util
		  **/ 
		createDataset : function(oForm,sDsNm)
		{
			var oDs =oForm.objects[sDsNm];
			if(Ex.isEmpty(oDs))
			{
				oDs = new Dataset;
				oDs.set_name(sDsNm);
				oForm.addChild(sDsNm, oDs);
			}
			else
			{
				oDs.clearData();
			}

			return oDs;
		},		
		/**
		  * 원본 데이타셋에서 삭제된 레코드만 추출하여 데이타셋으로 반환한다. 
		  * @param {form} oForm 검색 할 폼 scope지정
		  * @param {dataset} targetDs 추출하고자 하는 원본 데이타셋
		  * @param {string} deletedDsNm 리턴받을 데이타셋명
		  * @return {dataset} 데이타셋 객체
		  * @description 
		  *  
		  * @example
		  *  var datasetObject = Ex.util.getDeletedDs(this,this.DS_LIST,'DS_LIST_DELETED');
		  * @memberOf Ex.util
		  **/ 
		getDeletedDs : function(oForm,targetDs,deletedDsNm)
		{
			if( Ex.isEmpty(deletedDsNm) ) deletedDsNm = "_DS_DELETED";
			var DS_ORIGIN = targetDs;
			var infos = DS_ORIGIN.colinfos;
			var DS_DELETED = this.createDataset(oForm,deletedDsNm);

			DS_DELETED.set_enableevent(false);
			DS_DELETED.clear();
			for(var k=0;k<infos.length;k++) DS_DELETED.addColumnInfo(infos[k].id,infos[k]);
			
			var arrDeleted = DS_ORIGIN.getDeletedRowset();
			for(var i=0;i<arrDeleted.length;i++)
			{
				var dRow = DS_DELETED.addRow();
				for(var j=0;j<arrDeleted[i].length;j++)
				{
					if( !Ex.isEmpty(arrDeleted[i][j]) ) 
					{
						DS_DELETED.setColumn(dRow,j,(arrDeleted[i][j]).toString());
					}
				}
			}
			DS_DELETED.set_enableevent(true);
			return DS_DELETED;
		},
		/**
		  * 데이타셋 객체가 변경된 레코드 정보가 있는지 여부를 반환한다.
		  * @param {dataset} objDs 데이타셋 객체
		  * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)
		  * @description 
		  *  
		  * @example
		  *  var bool = Ex.util.isUpdated(datasetObject);
		  * @memberOf Ex.util
		  **/ 
		isUpdated : function (objDs)
		{
			if( Ex.isEmpty(objDs) )
			{
				trace("데이타셋이 존재하지 않습니다.");
				return false;
			}
			//if( objDs.rowcount == 0 )	return false;
			
			if (objDs.getDeletedRowCount() > 0) {
				return true;
			}
				
			var colRowFlag = objDs.getColumnInfo('ROWFLAG');	
			if( !Ex.isEmpty(colRowFlag) )	// ROWFLAG 컬럼 있으면 ROWFLAG컬럼으로 dataset 변경상태 체크
			{
				var filterStr = objDs.filterstr;
				objDs.set_filterstr("");
				var chkRow = objDs.findRowExpr("!Ex.isEmpty(ROWFLAG)");
				objDs.set_filterstr(filterStr);
				
				if( chkRow > -1 )
				{
					trace('ROWFLAG 값 있음');
					return true;
				}
			}
			else							// ROWFLAG 컬럼 없으면 기본 dataset 행상태로 체크
			{
				var filterStr = objDs.filterstr;
				objDs.set_filterstr("");
				var chkRow = objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)");
				objDs.set_filterstr(filterStr);
				
				if(chkRow > -1)
				{
					trace('ROWTYPE U or I');
					return true;
				}
			}
			return false;
		},	
		/**
		  * 데이타셋 객체에서 지정된 행이 변경되었는지 여부를 반환한다.
		  * @param {dataset} objDs 데이타셋 객체
		  * @param {int} nRow 데이타셋 row index
		  * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)
		  * @description 
		  *  
		  * @example
		  *  var bool = Ex.util.isUpdatedRow(datasetObject,1);
		  * @memberOf Ex.util
		  **/
		isUpdatedRow : function (objDs, nRow)
		{
			if (objDs.updatecontrol == true) 
			{
				if (objDs.getRowType(nRow) == Dataset.ROWTYPE_INSERT || objDs.getRowType(nRow) == Dataset.ROWTYPE_UPDATE || objDs.getRowType(nRow) == Dataset.ROWTYPE_DELETE) 
				{
					return true;
				}
				return false;
			}
			return false;
		},
		/**
		  * 데이타셋 객체에서arrExcptCol:array 안의 컬럼명을 제외하고 지정된 행이 변경되었는지 여부를 반환한다.
		  * @param {dataset} objDs 데이타셋 객체
		  * @param {int} nRow 데이타셋 row index
		  * @param {array} arrExcptCol ROWFLAG 상태 제외할 컬럼명 배열
		  * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)
		  * @description 
		  *  
		  * @example
		  *  var bool = Ex.util.isUpdatedRowByCol(datasetObject,1, ['COL1', 'COL2']);
		  * @memberOf Ex.util
		  **/		
		isUpdatedRowByCol : function(objDs, nRow, arrExcptCol)
		{
			if( Ex.isEmpty(arrExcptCol) )
				arrExcptCol = ['CHK', 'ROWFLAG'];
			
			for(var i = 0; i < objDs.colcount; i++)
			{
				var colid = objDs.getColID(i);
				if(Ex.arrIndexOf(arrExcptCol, colid) >= 0 )		// ROWFLAG 체크 제외 컬럼 처리
					continue;
				
				var isUpdate = this.isUpdatedColumn(objDs, nRow, colid);
				if( isUpdate == true ) return true;
			}
			return false;
		},
		/**
		  * 데이타셋 객체에서 지정된 행의 특정 컬럼값이 변경되었는지 여부를 반환한다.
		  * @param {dataset} objDs 데이타셋 객체
		  * @param {int} nRow 데이타셋 row index
		  * @param {string} Column 컬럼명
		  * @return {boolean} 업데이트 여부(true:변경있음,false:변경없음)
		  * @description 
		  *  
		  * @example
		  *  var bool = Ex.util.isUpdatedColumn(datasetObject,1,"column1");
		  * @memberOf Ex.util
		  **/
		isUpdatedColumn : function (objDs, nRow, Column)
		{
			if (objDs.getRowType(nRow) == 2) // ROWTYPE_INSERT
			{
				if (Ex.isEmpty(objDs.getColumn(nRow, Column))) 
				{
					return false;
				}
			}
			else 
			{
				var strCur = (objDs.getColumn(nRow, Column)||'').toString();		// 현재 값
				var strOrg = (objDs.getOrgColumn(nRow, Column)||'').toString();		// 원래 값
				if (strCur == strOrg) 
				{
					return false;
				}
			}
			return true;
		},
		
		// 그리드 crud 이미지 표현을 위한 함수
		displayRowType : function(type,varValue)
		{
			if( varValue == "D" )
				return "theme://SPP_IMAGE_SET/FOMM/ico_FOMM_ROWFLAG_D.png";
			else if( varValue == "I" )
				return "theme://SPP_IMAGE_SET/FOMM/ico_FOMM_ROWFLAG_I.png";
			else if( varValue == "U" )
				return "theme://SPP_IMAGE_SET/FOMM/ico_FOMM_ROWFLAG_U.png";
			else if( varValue == "N" || Ex.isEmpty(varValue) )
				return ""; 
		},
		
		 /**
		   * 변수의 타입을 반환합니다.( 반환대상 String문자열, 배열, Object(Json객체), 데이타셋 )
		   * @param {STRING/DATASET/ARRAY/OBJECT} isType 확인할 객체혹은 문자열
		   * @return {string} 타입을 문자열로 반환
		   * @description 
		   *
		   * @example
		   *  var strType =  Ex.util.getTypeof('abcde');
		   **/  
		getTypeof : function(isType)
		{
			if( (typeof (isType)) == "string")
				return "STRING";
			else
			{
				if(isType instanceof Dataset)
					return "DATASET";
				else if(isType instanceof Array)
					return "ARRAY";
				else if(isType instanceof Object)
					return "OBJECT";
				else return "";
			}
		},
		// 숫자에 , 서식을 적용하여 반환한다.
		getNumberToMaskStr : function(num)
		{
			num = nexacro.toNumber(num);
			if( isNaN(num) || Ex.isNumber(num) == false ) return 0;
			var reg = /(^[+-]?\d+)(\d{3})/;
			num +='';
			while(reg.test(num)) num = num.replace(reg,'$1'+','+'$2');
			return num;			
		},
		hashMenu : '',
		isHash : false,
		useEvent : true,
		useHash : function()
		{
			if( system.navigatorname == "nexacro" ) return;
			try{
				window.onhashchange = Ex.util.hash;
				Ex.util.isHash = true;
			}catch(e){
				trace("hash처리 실패");
			}
		},
		hash : function()
		{
			if( system.navigatorname == "nexacro" ) return;
			if( Ex.util.useEvent == false )
			{
				Ex.util.useEvent = true;
				return;
			}
			if( nexacro.getApplication().SYSSTATUS == "LOGIN" && Ex.util.isHash )
			{
				var hash = window.location.hash;
				Ex.util.hashMenu = hash;
				nexacro.getApplication().MAIN_LEFT.form.fn_hashMenu(hash);
			}
		},
		setHash : function(menuId)
		{
			if( system.navigatorname == "nexacro" ) return;
			if( !Ex.util.isHash ) return;
			var hash = "#M"+menuId;
			if( window.location.hash == hash ) return;
			Ex.util.useEvent = false;
			window.location.hash = hash;
		},
		removeHash : function()
		{
			if( system.navigatorname == "nexacro" ) return;
			if( !Ex.util.isHash ) return;
			if( "pushState" in window.history )
			{
				var url = window.location.pathname+window.location.search;
				window.history.pushState("",document.title,url);
			}
		},
		/**
		  * 해당 PC의 오늘 날짜(korea)를 반환한다.
		  * @return {string} PC의 오늘날짜
		  * @description 
		  *  
		  * @example
		  *  var strDate = Ex.util.today();
		  * @memberOf Ex.util
		  **/
		today : function ()
		{
			var strToday = "";
			if( Ex.isEmpty(strToday) )
			{
				var objDate = new Date();
				strToday = objDate.getFullYear() + "";
				strToday += Ex.util.getRightStr("0" + (objDate.getMonth() + 1), 2);
				strToday += Ex.util.getRightStr("0" + objDate.getDate(), 2);			
			}
			strToday = strToday.substr(0,8);
			return strToday;
		},
		/**
		  * 해당 PC의 오늘 날짜+시간를 가져온다.
		  * @return {string} 오늘날짜 + 시간
		  * @description 
		  *  
		  * @example
		  *  var strDate = Ex.util.todayTime(); // output '20160701153030'
		  * @memberOf Ex.util
		  **/
		todayTime : function ()
		{
			var strToday = "";
			if( Ex.isEmpty(strToday) )
			{
				var objDate = new Date();
				var strToday = objDate.getFullYear() + "";
				strToday += Ex.util.getRightStr("0" + (objDate.getMonth() + 1), 2);
				strToday += Ex.util.getRightStr("0" + objDate.getDate(), 2);
				strToday += Ex.util.getRightStr("0" + objDate.getHours(), 2);
				strToday += Ex.util.getRightStr("0" + objDate.getMinutes(), 2);
				strToday += Ex.util.getRightStr("0" + objDate.getSeconds(), 2);
			}
			strToday = strToday.substr(0,14);
			return strToday;
		},
		/**
		  * 입력된날짜(YYYYMMDD)로부터 요일을 반환하는 함수
		  * @return {string} 오늘날짜 + 시간
		  * @description 
		  *  
		  * @example
		  *  var strDate = Ex.util.todayTime(); // output '20160701153030'
		  * @memberOf Ex.util
		  **/
		getDay : function (strDate)
		{
			var nYear = parseInt(String(strDate).substr(0, 4));
			var nMonth = parseInt(String(strDate).substr(4, 2) - 1);
			var nDate = parseInt(String(strDate).substr(6, 2));

			var date = new Date(nYear, nMonth, nDate);

			return date.getDay();
		},
		getWeekDay : function (sDate, nSelDay)
		{
			//문자열 날짜(sDate)와 동일요일(nSelDay)인경우 문자열 날짜(sDate)를 리턴하도록 초기값 설정
			var rtn = sDate; 
			var nDay = Ex.util.getDay(sDate);
			
			// 일요일인경우 전주 처리
			if(nDay == 0) nDay = 7;
			
			//trace("nDay::"+nDay + " nSelDay::" + nSelDay);
			
			if(nDay != nSelDay) {
				var nGap = nSelDay - nDay;
				rtn = Ex.util.addDate(sDate, nGap);
			}
			return rtn;
		},
		/**
		  * 문자열내에 한글이 존재하는지 여부를 반환한다.
		  * @return {boolean} true : 존재 , false : 없음
		  * @description 
		  *  
		  * @example
		  *  var strDate = Ex.util.isExistKor('askdjf한글');
		  * @memberOf Ex.util
		  **/
		isExistKor : function(str)
		{
			if( Ex.isEmpty(str) ) return false;
			var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
			if( check.test(str) ) return true;
				
			return false;
		},
		/**
		  * 24시 표현방식을 기준으로 시분/시분초의 유효성을 검증한다.
		  * @param {string} typeStr "HHMM" 시분/ "HHMMSS" 시분초 검층타입지정
		  * @param {string} timeStr typeStr에서 지정한 형식의 값
		  * @return {boolean} true/false
		  * @description 
		  *  space를 인정하지 않음(space제거)
		  *  /,-,.,: 기호는 자동제거후 검증
		  *  "HHMM" 4자리 입력값 / "HHMMSS" 6자리 입력값
		  * @example
		  *  var b = Ex.util.isValidTime("HHMM","1230"); 
		  *  var b = Ex.util.isValidTime("HHMMSS","213045"); 
		  * @memberOf Ex.util
		  **/
		isValidTime : function(typeStr , timeStr)
		{
			if( Ex.isEmpty(typeStr) )
			{
				trace("시간형식이 지정되지 않았습니다.");
				return false;
			}
			if( Ex.isEmpty(timeStr) )
			{
				trace("대상값이 없습니다.");
				return false;
			}
			
			var sTime = timeStr;
			var stringWrapper = new String(sTime);
			stringWrapper = nexacro.replaceAll(stringWrapper, " ", "");
			stringWrapper = stringWrapper.replace("/","").replace("/","");
			stringWrapper = stringWrapper.replace("-","").replace("-","");
			stringWrapper = stringWrapper.replace(".","").replace(".","");
			stringWrapper = stringWrapper.replace(":","").replace(":","");
			
			typeStr = typeStr.toString();
			switch(typeStr)
			{
				case "HHMM":
					if( stringWrapper.toString().length != 4 )
					{
						trace("올바른 시간표현이 아닙니다.");
						return false;
					}
					var ihh		= Math.floor(stringWrapper.slice(0,2), 10);
					var imi		= Math.floor(stringWrapper.slice(2,4), 10);
					if( ihh < 0 || ihh > 23 ) return false;	
					if( imi < 0 || imi > 59 ) return false;	
					break;
				case "HHMMSS":
					if( stringWrapper.toString().length != 6 )
					{
						trace("올바른 시간표현이 아닙니다.");
						return false;
					}
					var ihh		= Math.floor(stringWrapper.slice(0,2), 10);
					var imi		= Math.floor(stringWrapper.slice(2,4), 10);
					var iss		= Math.floor(stringWrapper.slice(4,6), 10);
					if( ihh < 0 || ihh > 23 ) return false;	
					if( imi < 0 || imi > 59 ) return false;	
					if( iss < 0 || iss > 59 ) return false;	
					break;
				default:
					trace("올바른 시간표현이 아닙니다.");
					return false;
					break;
			}
			return true;
		},
		/**
		  * 해당 날짜의 요일명을 약어로 리턴한다.
		  * @param {string} sDate 날짜
		  * @return {string} 요일명약어
		  * @description 
		  *  
		  * @example
		  *  var strDate = Ex.util.getDayShortNm('20170101');
		  * @memberOf Ex.util
		  **/
		getDayShortNm : function(sDate)
		{
			if( Ex.isEmpty(sDate) ) return '';
			sDate = nexacro.replaceAll(sDate,'-','');
			sDate = nexacro.replaceAll(sDate,'.','');
			sDate = nexacro.replaceAll(sDate,' ','');
			sDate = sDate.substr(0,8);
			if( sDate.length != 8 ) return '';
			var ret = '';
			var day = Ex.util.strToDate(sDate).getDay();
			switch(day)
			{
				case 0:
					ret = nexacro.getApplication().SYSLANG=='ko'?'일':'SUN';
					break;
				case 1:
					ret = nexacro.getApplication().SYSLANG=='ko'?'월':'MON';
					break;
				case 2:
					ret = nexacro.getApplication().SYSLANG=='ko'?'화':'TUE';
					break;
				case 3:
					ret = nexacro.getApplication().SYSLANG=='ko'?'수':'WED';
					break;
				case 4:
					ret = nexacro.getApplication().SYSLANG=='ko'?'목':'THU';
					break;
				case 5:
					ret = nexacro.getApplication().SYSLANG=='ko'?'금':'FRI';
					break;
				case 6:
					ret = nexacro.getApplication().SYSLANG=='ko'?'토':'SAT';
					break;
				default:
					ret = '';
					break;
			}
			return ret;
		},
		// DB 기준 요일코드를 요일명으로 반환한다.
		getDayShortNmByDbCd : function(wcd)
		{
			if( Ex.isEmpty(wcd) ) return '';
			var ret = '';
			switch(wcd)
			{
				case '1':
					ret = nexacro.getApplication().SYSLANG=='ko'?'일':'SUN';
					break;
				case '2':
					ret = nexacro.getApplication().SYSLANG=='ko'?'월':'MON';
					break;
				case '3':
					ret = nexacro.getApplication().SYSLANG=='ko'?'화':'TUE';
					break;
				case '4':
					ret = nexacro.getApplication().SYSLANG=='ko'?'수':'WED';
					break;
				case '5':
					ret = nexacro.getApplication().SYSLANG=='ko'?'목':'THU';
					break;
				case '6':
					ret = nexacro.getApplication().SYSLANG=='ko'?'금':'FRI';
					break;
				case '7':
					ret = nexacro.getApplication().SYSLANG=='ko'?'토':'SAT';
					break;
				default:
					ret = '';
					break;
			}
			return ret;
		},		
		/**
		  * 해당 날짜의 요일을 코드로 리턴한다.
		  * @return {string} 요일코드
		  * @description 
		  *  
		  * @example
		  *  var dayCode = Ex.util.getDayCode('20170101');
		  * @memberOf Ex.util
		  **/
		getDayCode : function(sDate)
		{
			if( Ex.isEmpty(sDate) ) return '';
			sDate = nexacro.replaceAll(sDate,'-','');
			sDate = nexacro.replaceAll(sDate,'.','');
			sDate = nexacro.replaceAll(sDate,' ','');
			sDate = sDate.substr(0,8);
			if( sDate.length != 8 ) return '';
			var ret = '';
			var day = Ex.util.strToDate(sDate).getDay();
			return day;
			/*
			0 1 2 3 4 5 6 / 일 월 화 수 목 금 토
			*/
		},		
		/**
		  * 윤년여부 확인
		  * @param {string} sDate yyyyMMdd형태의 날짜 ( 예 : "20121122" )
		  * @return {boolean} true/false (true : 윤년인 경우 , false : 윤년이 아닌 경우/입력되지 않은 경우)
		  * @description 
		  *  
		  * @example
		  *  Ex.util.isLeapYear("20121122");
		  * @memberOf Ex.util
		  **/
		isLeapYear : function(sDate)
		{
			var ret;
			var nY;

			if (Ex.isEmpty(sDate)) 
			{
				return false;
			}
			sDate = sDate?sDate.toString():'';

			nY = parseInt(sDate.substring(0, 4), 10);

			if ((nY % 4) == 0) 
			{
				if ((nY % 100) != 0 || (nY % 400) == 0) 
				{
					ret = true;
				}
				else 
				{
					ret = false;
				}
			}
			else 
			{
				ret = false;
			}

			return ret;
		},

		/**
		  * 작업중임을 표시하는 wait아이콘을 표현한다.
		  * @param {form} objForm 실행폼 scope
		  * @param {boolean} bWaitStatus true/false( true:아이콘 활성, false:아이콘 비활성)
		  * @return N/A
		  * @description 
		  *  <br>Ex.util.setWait(this , true); 처리후 반드시 -> Ex.util.setWait(this , false); 호출해야 한다.
		  * @example
		  *  Ex.util.setWait(this , true); // 활성
		  *  Ex.util.setWait(this , false);  // 비활성
		  * @memberOf Ex.util
		  **/
		setWait : function(objForm , bWaitStatus)
		{
			if( Ex.isEmpty(objForm) ) return;
			if( Ex.isEmpty(bWaitStatus) ) bWaitStatus = false;
			var frame = objForm.getOwnerFrame();
			frame.form.setWaitCursor(bWaitStatus, true);
		},
		/**
		  * 데이타셋에서 특정컬럼값의 중복여부를 반환한다.
		  * @param {form} objForm 실행폼의 scope 지정
		  * @param {dataset} objDataset 중복을 검색할 데이타셋 객체
		  * @param {array} arrKey 중복검색할 컬럼명을 array로 담아 지정한다.
		  * @param {array} arrItemNm 중복검색시 메시지로 사용할 컬럼의 메시시명을 array로 담아 지정한다.
		  * @param {string} sExpr 컬럼의 중복이외 추가로 지정할 조건식
		  * @return {boolean} 중복여부
		  * @description 
		  *  	arrKey , arrItemNm는 1:1매핑 가능하도록 지정해야한다.
		  * @example
		  *  var bool = Ex.util.isDataDup(this, this.DS_LIST, ['col1','col2',.], ['컬럼1','컬럼2',.]); 
		  * @memberOf Ex.util
		  **/
		isDataDup : function (objForm,objDataset,arrKey,arrItemNm,sExpr)
		{
			if( Ex.isEmpty(arrKey) ) arrKey = [];
			if( Ex.isEmpty(arrItemNm) ) arrItemNm = [];
			if( Ex.isEmpty(objDataset) ) objDataset = Ex.util.createDataset(objForm,"emptyDataset");
			
			var pData = objDataset;
			var bResult = true;
			if( arrKey.length==0 ) return bResult;
			var nCnt = 0;
			var str = "";
			for(var j=0;j<arrKey.length;j++)
			{
				for( i=(pData.rowcount-1) ; i>=0 ; i--)
				{
					str = pData.getColumn(i,arrKey[j]);
					if( !Ex.isEmpty(str) )
					{
						if( Ex.isEmpty(sExpr) )
							nCnt = pData.getCaseCount(arrKey[j]+"=='"+str+"'");
						else
						{
							nCnt = pData.getCaseCount(arrKey[j]+"=='"+str+"' && "+sExpr);
						}
						if( nCnt > 1)
						{
							var param = {
								id : "pValidDup",
								msg : "{0} 행의 {1} 항목은 중복 데이타가 존재합니다.\n[대상 데이타 : {2}]",
								arrparam : [i+1, arrItemNm[j], str]
							};
							Ex.core.alert(objForm, param);
							bResult = false;
							break;
						}
					}
				}
			}
			return bResult;
		},

		/**
		  * 데이타셋에서 특정컬럼들을 AND 조건으로 하여 중복여부를 반환한다.
		  * @param {form} objForm 실행폼의 scope 지정
		  * @param {dataset} objDataset 중복을 검색할 데이타셋 객체
		  * @param {array} arrKey 중복검색할 컬럼명을 array로 담아 지정한다.
		  * @param {array} arrItemNm 중복검색시 메시지로 사용할 컬럼의 메시시명을 array로 담아 지정한다.
		  * @param {string} sExpr 컬럼의 중복이외 추가로 지정할 조건식
		  * @return {boolean} 중복여부
		  * @description 
		  *  	arrKey , arrItemNm는 1:1매핑 가능하도록 지정해야한다.
		  * @example
		  *  var bool = Ex.util.isDataDupJoinKey(this, this.DS_LIST, ['col1','col2',.], ['컬럼1','컬럼2',.]); 
		  * @memberOf Ex.util
		  **/
		isDataDupJoinKey : function (objForm,objDataset,arrKey,arrItemNm,sExpr)
		{
			if( Ex.isEmpty(arrKey) ) arrKey = [];
			if( Ex.isEmpty(arrItemNm) ) arrItemNm = [];
			if( Ex.isEmpty(objDataset) ) objDataset = Ex.util.createDataset(objForm,"emptyDataset");
			
			var pData = objDataset;
			var bResult = true;
			if( arrKey.length==0 ) return bResult;
			if( arrKey.length==1 ) return this.isDataDup(objForm,arrKey,arrItemNm);
			var nCnt = 0;
			var str = "";
			var strColJoin = "";
			var strItemJoin = "";
			var strDataJoin = "";
			for(var j=0;j<arrKey.length;j++) 
			{
				strColJoin += (arrKey[j]||"") + (j==(arrKey.length-1)?"":"+");
				strItemJoin += (arrItemNm[j]||"") + (j==(arrKey.length-1)?"":",");
			}
			for( i=(pData.rowcount-1) ; i>=0 ; i--)
			{
				str = "";
				strDataJoin = "";
				for(var j=0;j<arrKey.length;j++) 
				{
					str += pData.getColumn(i,arrKey[j])||"";
					strDataJoin += (pData.getColumn(i,arrKey[j])||"") + (j==(arrKey.length-1)?"":" , ");
				}
				if( !Ex.isEmpty(str) )
				{
					if( Ex.isEmpty(sExpr) )
						nCnt = pData.getCaseCount(strColJoin+"=='"+str+"'");
					else
					{
						nCnt = pData.getCaseCount(strColJoin+"=='"+str+"' && "+sExpr);
					}
					if( nCnt > 1)
					{
						var param = {
							id : "pValidJoinDup",
							msg : "{0} 행의 {1} 항목은 중복 데이타가 존재합니다.\n[대상 데이타 : {2}]",
							arrparam : [i+1, arrItemNm, strDataJoin]
						};
						Ex.core.alert(objForm, param);
						bResult = false;
						break;
					}
				}
			}
			return bResult;
		},
		/**
		  * 실행폼의 타입이 팝업창인지를 판별하여 반환한다.
		  * @param {form} objForm 실행폼의 scope 지정
		  * @return {boolean} 팝업창 여부
		  * @description 
		  *  	
		  * @example
		  *  var bool = Ex.util.isPopup(this); 
		  * @memberOf Ex.util
		  **/
		isPopup : function (objForm)
		{
			if(Ex.isEmpty(objForm)) objForm=this;
			var isPopFrame=false;
			//var oOpenFrame = nexacro.getApplication().popupframes;
			var oOpenFrame = nexacro.getPopupFrames();
			for(var i=0;i<oOpenFrame.length;i++)
			{
				if(objForm.getOwnerFrame().name==oOpenFrame[i].name){
					isPopFrame = true;
				}
			}	
			return isPopFrame;	
		},
		/**
		  * 화면영역에서 작업영역의 폼(div)객체를 리턴한다.
		  * @param {form} scope 호출위치의 this 를 지정한다.
		  * @return div  작업영역 폼(divWork) 객체를 반환한다.
		  * @description 
		  *  팝업에서 사용할수 없음
		  *  조회영역(divSearchArea)에서 필요시 호출하여 사용한다.
		  * @example
		  *  var pWorkArea = Ex.util.getWorkArea(this); 
		  * @memberOf Ex.util
		  **/			
		getWorkArea : function(scope)
		{
			if( this.isPopup(scope) ) {
				trace("팝업에서 사용할수 없는 API입니다.");
				return null;
			}
			var frame = scope.getOwnerFrame();
			return frame.form.divWork;
		},
		/**
		  * 화면영역에서 조회영역의 폼(div)객체를 리턴한다.
		  * @param {form} scope 호출위치의 this 를 지정한다.
		  * @return div  조회영역 폼(divSearchArea) 객체를 반환한다.
		  * @description 
		  *  팝업에서 사용할수 없음
		  *  작업영역(divWork)에서 필요시 호출하여 사용한다.
		  * @example
		  *  var pSearchArea = Ex.util.getSearchArea(this); 
		  * @memberOf Ex.util
		  **/		
		getSearchArea : function(scope)
		{
			if( this.isPopup(scope) ) {
				trace("팝업에서 사용할수 없는 API입니다.");
				return null;
			}
			var frame = scope.getOwnerFrame();
			return frame.form.divSearchArea;
		},	
		/**
		  * 화면영역에서 조회영역의 파라미터 객체를 리턴한다.
		  * @param {form} scope 호출위치의 this 를 지정한다.
		  * @return object  조회영역 파라미터 객체를 반환한다.
		  * @description 
		  *  팝업에서 사용할수 없음
		  *  작업영역(divWork)에서 필요시 호출하여 사용한다.
		  * @example
		  *  var oParam = Ex.util.getSearchParam(this); 
		  * @memberOf Ex.util
		  **/	
		getSearchParam : function(scope)
		{
			if( this.isPopup(scope) ) {
				trace("팝업에서 사용할수 없는 API입니다.");
				return null;
			}
			var frame = scope.getOwnerFrame();
			return frame.form.fnGetParam();
		},
		/**
		  * UI용 사용자 정보를 적재한 세션객체를 생성한다.
		  * @param {object} 사용자 정보를 담은 object
		  * @return N/A
		  * @description 
		  *  
		  * @example
		  *  Ex.util.setSession({a:'a',b:'b'});
		  * @memberOf Ex.util
		  **/
		setSession : function(objSession)
		{
			nexacro.getApplication()._session_ = {};
			if( !Ex.isEmpty(objSession) ) nexacro.getApplication()._session_ = objSession;
		},
		/**
		  * UI 사용자용 정보를 적재한 세션객체를 초기화한다.
		  * @param N/A
		  * @return N/A
		  * @description 
		  *  
		  * @example
		  *  Ex.util.clearSession();
		  * @memberOf Ex.util
		  **/
		clearSession : function()
		{
			nexacro.getApplication()._session_ = {};
		},
		/**
		  * 세션객체에서 키값을 찾아 value값을 반환다.
		  * @param {string} key 키값을 지정한다.
		  * @return {string||object} value값 반환 혹은 object
		  * @description 
		  *  키값을 'session' 지정하면 전체 객체를 반환한다.
		  * @example
		  *  var str= Ex.util.getSession('session');
		  *  var str= Ex.util.getSession('gvEmpno');
		  * @memberOf Ex.util
		  **/
		getSession : function(key)
		{
			var str = "";
			if( key == 'session' )
				str = nexacro.getApplication()._session_;
			else
				str = nexacro.getApplication()._session_[key]||'';
				
			return str;
		},
		/**
		  * userSession정보가 담긴 데이타셋으로 부터 세션용 object를 생성한다.
		  * @param {object} 사용자 정보를 담은 Dataset객체
		  * @return {} object
		  * @description 
		  *  UI세션정보구조에 맞게 object를 구성하여 반환한다.
		  * @example
		  *  Ex.util.makeSessionObject(objDs);
		  * @memberOf Ex.util
		  **/
		makeSessionObject : function(objDs)
		{	
			var sess = {};
			var sCol = "";
			var gvCol = "";
			var arr;
			var nCnt = objDs.getColCount();
			if( objDs.rowcount == 0 ) return sess;		
			for( var i=0; i<nCnt; i++ )
			{    
				sCol = objDs.getColID(i);
				arr = sCol.split("_");
				if( arr.length > 1 )
				{
					gvCol = "gv";
					for(var j=0; j<arr.length; j++) gvCol += arr[j].charAt(0).toUpperCase()+arr[j].substr(1).toLowerCase();
				}
				else
				{
					gvCol = "gv"+arr[0].charAt(0).toUpperCase()+arr[0].substr(1).toLowerCase();
				}
				sess[gvCol] = objDs.getColumn(0,sCol)||'';
			}
			return sess;
		},
		/**
		  * 브라우저 세션저장소에 값을 저장한다.
		  * @param {string} key 키값을 지정한다.
		  * @param {string} str 키에 할당할 값을 지정한다.
		  * @return N/A
		  * @description 
		  *   대상 도메인이 살아 있는동안만 유지합니다.
		  *   브라우져를 닫거나 브라우져탭을 닫으면 값이 지워집니다.
		  * @example
		  *  Ex.util.setStoredItem('userid','5001'); 
		  * @memberOf Ex.util
		  **/
		setStoredItem : function(key,v)
		{
			if( nexacro.Browser == "Runtime" ) return "";
			if( Ex.isEmpty(key) ) return false;
			if( window.localStorage )
			{
				var strKey = nexacro.base64Encode( key ) ;
					 strKey = nexacro.base64Encode(strKey) ;
				var strVar = nexacro.base64Encode( v ) ;
					 strVar = nexacro.base64Encode(strVar) ;
				window.localStorage[strKey]=strVar;
				return true;
			}
			return false;
		},
		getStoredItem : function(key)
		{
			if( nexacro.Browser == "Runtime" ) return "";
			if( Ex.isEmpty(key) ) return "";
			if( window.localStorage )
			{
				var strKey = nexacro.base64Encode( key ) ;
					 strKey = nexacro.base64Encode(strKey) ;
				var strVar = window.localStorage[strKey];
				if( Ex.isEmpty(strVar) ) {
					return '';
				} else {
					strVar = nexacro.base64Decode( strVar ) ;
					var v	      = nexacro.base64Decode( strVar ) ;
					return v||'';
				}
			}
			return"";
		},
		clearStoredItem : function(key)
		{
			if( Ex.isEmpty(key) )
			{
				if( window.localStorage ) window.localStorage.clear();
			}
			else
			{
				if( window.sessionStorage )
				{
					var strKey = nexacro.base64Encode( key ) ;
						 strKey = nexacro.base64Encode(strKey) ;
					window.localStorage.removeItem(strKey);
				}
			}
		},
		/**
		  * 특정 형태의 데이타의 구성형식을 체크한다.
		  * @param {string} typeStr 체크할 타입의 문자열
		  * @param {value} value 체크할 값
		  * @return {boolean} true : valid , false: invalid
		  * @description 
		  *  체크대상 문자열
		  *  - NUMBER , EMAIL , PHONE , MOBILE , JUMINNO , BIZNO , CORPNO , YYYYMM ,YYYYMMDD , YYYYMMDDHHMI
		  * @example
		  *  var bool = Ex.util.checkType("EMAIL","test@naver.com");
		  *  var bool = Ex.util.checkType("NUMBER","1234");
		  *  var bool = Ex.util.checkType("PHONE","02-1234-1234");
		  *  var bool = Ex.util.checkType("MOBILE","010-1234-1234");
		  *  var bool = Ex.util.checkType("JUMINNO","640713-1018433");
		  *  var bool = Ex.util.checkType("BIZNO","2208162517");
		  *  var bool = Ex.util.checkType("CORPNO","1201110001743");
		  *  var bool = Ex.util.checkType("YYYYMM","204707");
		  *  var bool = Ex.util.checkType("YYYYMMDD","20470701");
		  *  var bool = Ex.util.checkType("YYYYMMDDHHMI","204707011512");
		  *  var bool = Ex.util.checkType("FROMTOMONTH",["201701","201705"]);
		  *  var bool = Ex.util.checkType("FROMTODATE",["20170101","20170501"]);
		  * @memberOf Ex.util
		  **/
		checkType : function(typeStr , v )
		{
			var expr = {
				/**
				  * 정규식 기본 규칙 참고 *
				  * 1. $ : 문자열의 끝을 의미
				  * 2. '/' 로 시작해서 '/'로 끝남
				  * 3. '^' 가 [] 앞에 오면 문자열의 시작부분을 의미
				  * 4. {3,16} : 앞에 [a-z0-9_-]이 최소3글자 ~ 15글자 이하
				  * 5. [a-z0-9_-] : 소문자(a-z)나 숫자(0-9), 언더스코어(_), 하이픈(-)이 입력 가능
				  * 
				  **/
				NUMBER    	: /^[0-9]+(.[0-9]+)?$/,
				INTEGER		: /^\d{1,20}$/,
				EMAIL		: /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_\.-]+)\.([a-zA-Z\.]{2,6})$/,
							  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
				PHONE		: /^(\d{2,4})-?(\d{3,4})-?(\d{4})$/,
				MOBILE		: /(^(010-?\d{4})|^(01[16789]-?\d{3,4}))-?(\d{4})$/,
				URL			: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
				IPADDR		: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
			};
			var regCheck = function(type, varValue)
			{
				if( Ex.isEmpty(varValue) ) return true;
				switch(type)
				{
					case "EMAIL":		//이메일형식
					case "NUMBER":		//정수,실수모두체크
					case "INTEGER":		//정수여부
					case "PHONE":		//전화번호
					case "MOBILE":		//핸드폰번호
					case "URL":			//URL
					case "IPADDR":		//IP
						var objRegExp = expr[type];
						//trace(objRegExp.test(varValue));
						if( !objRegExp.test(varValue) ) return false;
						break;

					case "JUMINNO":	//주민번호
						var rsrno = varValue;
						var juminNo = nexacro.replaceAll(rsrno,"-",""); //rsrno.replaceAll("-", "");
						juminNo = juminNo.trim();
						
						if(!nexacro.isNumeric(juminNo) || juminNo.length != 13){
							return false;
						}
						
						var juminChkDgt = [2,3,4,5,6,7,8,9,2,3,4,5];
						var fNum = new Number();
						var lNum = new Number();
						var iSum = new Number();
						var yy, lnumf;
						
						fNum = juminNo.substr(0, 6).toString();
						lNum = juminNo.substr(6).toString();
						lnumf = lNum.substr(0,1);
						
						if(lnumf == '1' ||  lnumf == '2' ||  lnumf == '5' ||  lnumf == '6'){
							yy  = '19';
						} else if (lnumf == '3' ||  lnumf == '4' ||  lnumf == '7' ||  lnumf == '8'){
							yy  = '20';
						} else if (lnumf == '9' ||  lnumf == '0') {
							yy  = '18';
						} else {
							return false;
						}
						
						if(!Ex.isStringDate(yy + fNum)) return false;
						
						var bForeignerYN = "N";
						if(lNum.substr(0,1) == '5' || lNum.substr(0,1) == '6' || lNum.substr(0,1) == '7' ||  lNum.substr(0,1) == '8'){
							bForeignerYN = "Y";
						}

						for(var ix=0; ix<12; ix++)
						{
							iSum += (parseInt(juminNo.substr(ix, 1)) * juminChkDgt[ix]);
						}

						iSum = 11 - (iSum%11);
						iSum = iSum % 10;

						if(bForeignerYN == "Y") iSum += 2;

						if(iSum != ( parseInt(juminNo.substr(12, 1)) ) ) return false;					
						break;

					case "BIZNO":	//사업자번호
						var compRegNo = varValue;
						var compNo = nexacro.replaceAll(compRegNo,"-","");
						compNo = compNo.trim();

						var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
						var i, Sum=0, c2, remander;
						//trace(compNo+","+compNo.length);
						if (compNo.length != 10) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(compNo) ) return false;

						for(i=0; i<=7; i++)
						{
							Sum += checkID[i] * compNo.charAt(i);
						}
						c2 = "0" + (checkID[8] * compNo.charAt(8));
						c2 = c2.substring(c2.length - 2, c2.length);

						Sum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
						remander = (10 - (Sum % 10)) % 10;

						if(Math.floor(compNo.charAt(9)) != remander) return false;
						break;

					case "CORPNO":	//법인번호
						var corpRegNo = varValue;
						var corpNo = nexacro.replaceAll(corpRegNo,"-","");
						corpNo = corpNo.trim();
						
						var checkID = new Array(1,2,1,2,1,2,1,2,1,2,1,2);
						var i, Sum=0, c2, remander;
						
						if (corpNo.length != 13) return false;
						
						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(corpNo) ) return false;

						for (var i=0; i<12; i++)
						{
							Sum += checkID[i] * corpNo.charAt(i);
						}
						var calc = (10 - (Sum % 10)) % 10;
						if ( calc != corpNo.charAt(12)) return false;
						break;

					case "YYYY":
						var sDate = varValue;
						var stringWrapper = new String(sDate);

						if( stringWrapper.toString().length != 4 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;
						break;

					case "YYYYMM":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						stringWrapper = stringWrapper.replace("/","");
						stringWrapper = stringWrapper.replace("-","");
						stringWrapper = stringWrapper.replace(".","");

						if( stringWrapper.toString().length != 6 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
						
						if( !Ex.isStringDate((sDate+"01")) ) return false;
						if( iMonth < 1 || iMonth > 12 ) return false;
						break;

					case "YYYYMMDD":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						stringWrapper = stringWrapper.replace("/","").replace("/","");
						stringWrapper = stringWrapper.replace("-","").replace("-","");
						stringWrapper = stringWrapper.replace(".","").replace(".","");

						if( !Ex.isStringDate(stringWrapper) ) return false;
						break;

					case "YYYYMMDDHH":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						stringWrapper = stringWrapper.replace("/","").replace("/","");
						stringWrapper = stringWrapper.replace("-","").replace("-","");
						stringWrapper = stringWrapper.replace(".","").replace(".","");

						if( stringWrapper.toString().length != 10 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var iDate  = stringWrapper.slice(0, 8);
						var ihh		= Math.floor(stringWrapper.slice(8, 10), 10);

						if( !Ex.isStringDate(iDate) ) return false;
						if( ihh < 0 || ihh > 23 ) return false;	
						break;

					case "YYYYMMDDHHMI":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						stringWrapper = stringWrapper.replace("/","").replace("/","");
						stringWrapper = stringWrapper.replace("-","").replace("-","");
						stringWrapper = stringWrapper.replace(".","").replace(".","");

						if( stringWrapper.toString().length != 12 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var iDate  = stringWrapper.slice(0, 8);
						var ihh		= Math.floor(stringWrapper.slice(8, 10), 10);
						var imi		= Math.floor(stringWrapper.slice(10, 12), 10);

						if( !Ex.isStringDate(iDate) ) return false;
						if( ihh < 0 || ihh > 23 ) return false;	
						if( imi < 0 || imi > 59 ) return false;	
						break;

					case "YYYYMMDDHHMISS":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						stringWrapper = stringWrapper.replace("/","").replace("/","");
						stringWrapper = stringWrapper.replace("-","").replace("-","");
						stringWrapper = stringWrapper.replace(".","").replace(".","");
						stringWrapper = stringWrapper.replace(":","").replace(":","");
						stringWrapper = stringWrapper.replace(" ","");

						if( stringWrapper.toString().length != 14 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var iDate  = stringWrapper.slice(0, 8);
						var ihh		= Math.floor(stringWrapper.slice(8, 10), 10);
						var imi		= Math.floor(stringWrapper.slice(10, 12), 10);
						var iss		= Math.floor(stringWrapper.slice(12, 14), 10);

						if( !Ex.isStringDate(iDate) ) return false;
						if( ihh < 0 || ihh > 23 ) return false;
						if( imi < 0 || imi > 59 ) return false;
						if( iss < 0 || imi > 59 ) return false;
						break;

					case "HH":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						if( stringWrapper.toString().length > 2 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var ihh		= Math.floor(stringWrapper.slice(0,2), 10);
						if( ihh < 0 || ihh > 23 ) return false;	
						break;

					case "MI":
					case "SS":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						if( stringWrapper.toString().length > 2 ) return false;
						
						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var imi		= Math.floor(stringWrapper.slice(0,2), 10);
						if( imi < 0 || imi > 59 ) return false;	
						break;

					case "HHMI":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						stringWrapper = stringWrapper.replace(":", "").replace(" ", "");

						if( stringWrapper.toString().length != 4 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var ihh		= Math.floor(stringWrapper.slice(0, 2), 10);
						var imi		= Math.floor(stringWrapper.slice(2, 4), 10);
							
						if( ihh < 0 || ihh > 23 ) return false;	
						if( imi < 0 || imi > 59 ) return false;	
						break;

					case "HHMISS":
						var sDate = varValue;
						var stringWrapper = new String(sDate);
						stringWrapper = stringWrapper.replace(":","").replace(":","");
						stringWrapper = stringWrapper.replace(" ","").replace(" ","");

						if( stringWrapper.toString().length != 6 ) return false;

						var objRegExp = expr["NUMBER"];
						if( !objRegExp.test(stringWrapper) ) return false;

						var ihh		= Math.floor(stringWrapper.slice(0,2), 10);
						var imi		= Math.floor(stringWrapper.slice(2,4), 10);
						var iss		= Math.floor(stringWrapper.slice(4,6), 10);

						if( ihh < 0 || ihh > 23 ) return false;	
						if( imi < 0 || imi > 59 ) return false;	
						if( iss < 0 || imi > 59 ) return false;	
						break;

					case "FROMTOMONTH":
					case "FROMTODATE":
						if( !Ex.isArray(varValue) ) return false;
						if( varValue.length != 2 ) return false;
						if( Ex.isEmpty(varValue[0]) || Ex.isEmpty(varValue[1]) ) return false;
						if( type == "FROMTOMONTH" )
						{
							var isdate = Ex.isStringDate(varValue[0]+"01");
							if( !isdate ) return false;
								isdate = Ex.isStringDate(varValue[1]+"01");
							if( !isdate ) return false;
						}
						else
						{
							var isdate = Ex.isStringDate(varValue[0]);
							if( !isdate ) return false;
								isdate = Ex.isStringDate(varValue[1]);
							if( !isdate ) return false;
						}
						var p1 = parseInt(varValue[0]);
						var p2 = parseInt(varValue[1]);
						if( (p2-p1) < 0 ) return false;
						break;
				}
				return true;
			};
			return regCheck(typeStr,v);
		},
		checkValidate : function(scope, groupId)
		{
			//trace("scope:" + scope);
			var components = scope.components;
			
			if(scope == "[object Div]" || scope == "[object TabpageControl]")
			{
				components = scope.form.components;
			}
			
			//trace("components.length : " + components.length);

			var validInfoArr = [];
			for(var i=0; i<components.length; i++)
			{
				//trace("i=" + i + " id:[" + scope.components[i].id + "] validationGroup : " + scope.components[i].validationGroup);
				if(components[i].validationGroup == groupId)
				{
					if( !Ex.isEmpty(components[i].validation) )
					{
						var validation = components[i].validation;
						//trace("i=" + i + " validation : " + validation);
						var validArr = validation.split(";");
						//trace("i=" + i + " validArr.length : " + validArr.length);
						var attrNm = validArr[0];
						//trace("i=" + i + " attrNm : " + attrNm);
						var chkValid = nexacro.replaceAll(validArr[1], " ", "");
						//trace("i=" + i + " chkValid : " + chkValid);
						validInfoArr.push([components[i].taborder, components[i], attrNm, chkValid]);
					}
				}
			}
			
			validInfoArr.sort(function(a, b)
			{
				var num1 = a[0];
				var num2 = b[0];
				return a[0] - b[0];
			});

			//trace("checkCompLength : " + validInfoArr.length);

			for(var i=0; i<validInfoArr.length; i++)
			{
				var comp = validInfoArr[i][1];
				var checkValidation = validInfoArr[i][3];

				/*
				var text = "";
			
				if(comp.validationCheckEnable) text += " comp.validationCheckEnable[true]";
				else text += " comp.validationCheckEnable[false]";
				
				if(comp.validationCheckVisible) text += " comp.validationCheckVisible[true]";
				else text += " comp.validationCheckVisible[false]";
				
				if(comp.validationCheckReadonly) text += " comp.validationCheckReadonly[true]";
				else text += " comp.validationCheckReadonly[false]";
				
				trace("i=" + i + " taborder : " + comp.taborder + " enable : " + comp.enable + " visible : " + comp.visible + " readonly : " + comp.readonly +
					  text +
					  " checkValidation:[" + checkValidation + "]");
				*/

				if( !Ex.isEmpty(checkValidation) )
				{
					if( ( !comp.validationCheckEnable || (comp.enable && comp.validationCheckEnable) ) &&
						( !comp.validationCheckVisible || (comp.visible && comp.validationCheckVisible) ) &&
						( !comp.validationCheckReadonly || (!comp.readonly && comp.validationCheckReadonly) ) )
					{
						//trace("i=" + i + " comp.id : " + comp.id + " checkValidation[" + checkValidation + "]");

						var validArr = checkValidation.split("|");
						for(var j=0; j<validArr.length; j++)
						{
							var validAttrArr = validArr[j].split(":");
							var rtn = false;
							var chkAttr = validAttrArr[0];	//validation Check이름(NULL, MIN, MAX, MIN_LEN, MAX_LEN 등)
							
							var inpVal = comp.value;		//사용자가 입력한 값
							var chkVal;						//validation에 사용되는 기준값
							
							if(validAttrArr.length == 2) chkVal = validAttrArr[1];
							
							var charSet = "utf16";
							if(chkAttr == "MIN_LEN_ASC" || chkAttr == "MAX_LEN_ASC") charSet = "ascii";
							if(chkAttr == "MIN_LEN_UTF8" || chkAttr == "MAX_LEN_UTF8") charSet = "utf8";

							switch(chkAttr)
							{
								case "NULL" : rtn = !Ex.isEmpty(inpVal);	//빈값인지 여부 체크
									//trace("Ex.util.checkValidate NULL comp.id : "  + comp.id + " inpVal : " + inpVal + " rtn : " + rtn);
									break;

								case "MIN" :	//입력값의 최소값 체크
									if(Ex.isEmpty(inpVal) ) rtn = true;
									else
									{
										if(validAttrArr.length == 2)
										{
											if(nexacro.toNumber(inpVal, 0) < nexacro.toNumber(chkVal)) rtn = false;
											else rtn = true;
										}
										else rtn = true;
									}
									break;
								
								case "MAX" :	//입력값의 최대값 체크
									if(Ex.isEmpty(inpVal) ) rtn = true;
									else
									{
										if(validAttrArr.length == 2)
										{
											if(nexacro.toNumber(inpVal, 0) > nexacro.toNumber(chkVal)) rtn = false;
											else rtn = true;
										}
										else rtn = true;
									}
									break;

								//입력값 최소 길이 체크
								case "MIN_LEN" :
								case "MIN_LEN_ASC" :
								case "MIN_LEN_UTF8" :
									if(Ex.isEmpty(inpVal) ) rtn = true;
									else
									{
										if(validAttrArr.length == 2)
										{
											if( Ex.util.getLength(inpVal, charSet) < nexacro.toNumber(chkVal)) rtn = false;
											else rtn = true;
										}
										else rtn = true;
									}
									break;

								//입력값 최대 길이 체크
								case "MAX_LEN" :
								case "MAX_LEN_ASC" :
								case "MAX_LEN_UTF8" :
									if(Ex.isEmpty(inpVal) ) rtn = true;
									else
									{
										if(validAttrArr.length == 2)
										{
											if( Ex.util.getLength(inpVal, charSet) > nexacro.toNumber(chkVal)) rtn = false;
											else rtn = true;
										}
										else rtn = true;
									}
									break;

								case "NUMBER":		//숫자여부
								case "EMAIL":		//이메일형식
								case "PHONE":		//전화번호
								case "MOBILE":		//핸드폰번호
								case "URL":			//URL
								case "IPADDR":		//IP
								case "JUMINNO":		//주민번호
								case "BIZNO":		//사업자번호
								case "CORPNO":		//법인번호
									rtn = Ex.util.checkType(chkAttr, inpVal);
									//rtn = this.regCheck(chkAttr, inpVal);
									break;

								case "DATETIME" :
									if(Ex.isEmpty(inpVal) ) rtn = true;
									else
									{
										if(validAttrArr.length == 2)
										{
											rtn = Ex.util.checkType(chkVal, inpVal);
											//rtn = this.regCheck(chkAttr, inpVal);
										}
										else rtn = true;
									}
									break;

								default :
									rtn = true;
									break;
							}
							
							//trace("j=" + j + " validNm : " + validAttrArr[0] + " rtn : " + rtn);
							
							if(!rtn)
							{
								var msgStr = "";
								var attrNm = validInfoArr[i][2];	//항목명
									attrNm = Ex.core.word(attrNm);

								switch(chkAttr)
								{	
									case "NULL" :
										msgStr += Ex.core.msg(11001);							//"은(는) 필수 입력 항목입니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "NUMBER" : msgStr += Ex.core.msg(11002);				//"은(는) 숫자만 입력 가능합니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break; 
									case "MIN" :
										msgStr += Ex.core.msg(11003);
										msgStr = Ex.core.msgMapping(msgStr, [attrNm, chkVal]);	//"은(는) 최소 [" + chkVal + "] 이상으로 입력해야 합니다.";
										break;
									case "MAX" :
										msgStr += Ex.core.msg(11004);
										msgStr = Ex.core.msgMapping(msgStr, [attrNm, chkVal]);	//"은(는) 최대 [" + chkVal + "] 까지만 입력가능 합니다.";
										break;
									case "MIN_LEN" :
										msgStr += Ex.core.msg(11005);
										msgStr = Ex.core.msgMapping(msgStr, [attrNm, chkVal]);	//"의 길이는 " + chkVal + "자 이상 입력해야 합니다.";
										break;
									case "MAX_LEN" :
										msgStr += Ex.core.msg(11006);
										msgStr = Ex.core.msgMapping(msgStr, [attrNm, chkVal]);	//"의 길이는 " + chkVal + "자까지 입력 가능합니다.";
										break;
									case "MIN_LEN_ASC" :
									case "MIN_LEN_UTF8" :
										msgStr += Ex.core.msg(11007);
										msgStr = Ex.core.msgMapping(msgStr, [attrNm, chkVal]);	//"의 길이는 " + chkVal + "byte 이상 입력해야 합니다.";
										break;
									case "MAX_LEN_ASC" :
									case "MAX_LEN_UTF8" :
										msgStr += Ex.core.msg(11008);
										msgStr = Ex.core.msgMapping(msgStr, [attrNm, chkVal]);	//"의 길이는 " + chkVal + "byte까지 입력 가능합니다.";
										break;
									case "EMAIL" :
										msgStr += Ex.core.msg(11009);							//"은(는) [E-MAIL] 입력 형식이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "PHONE" :
										msgStr += Ex.core.msg(11010);							//"은(는) [전화번호] 입력 형식이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "MOBILE" :
										msgStr += Ex.core.msg(11011);							//"은(는) [핸드폰번호] 입력 형식이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "URL" :
										msgStr += Ex.core.msg(11012);							//"은(는) [URL] 형식이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "IPADDR" :
										msgStr += Ex.core.msg(11013);							//"은(는) [IP주소] 형식이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "JUMINNO" :
										msgStr += Ex.core.msg(11014);							//"은(는) [주민번호] 입력값이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "BIZNO" :
										msgStr += Ex.core.msg(11015);							//"은(는) [사업자번호] 입력값이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;
									case "CORPNO" :
										msgStr += Ex.core.msg(11016);							//"은(는) [법인번호] 입력값이 올바르지 않습니다.";
										msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
										break;

									case "DATETIME" :
										switch(chkVal)
										{
											case "YYYY" :
												msgStr += Ex.core.msg(11017);					//"은(는) [년도] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "YYYYMM" :
												msgStr += Ex.core.msg(11018);					//"은(는) [년월] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "YYYYMMDD" :
												msgStr += Ex.core.msg(11019);					//"은(는) [날짜] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "YYYYMMDDHH" :
												msgStr += Ex.core.msg(11020);					//"은(는) [날짜/시간] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "YYYYMMDDHHMI" :
												msgStr += Ex.core.msg(11021);					//"은(는) [날짜/시간/분] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "YYYYMMDDHHMISS" :
												msgStr += Ex.core.msg(11022);					//"은(는) [날짜/시간/분/초] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "HH" :
												msgStr += Ex.core.msg(11023);					//"은(는) [시간] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "HHMI" :
												msgStr += Ex.core.msg(11024);					//"은(는) [시간/분] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "HHMISS" :
												msgStr += Ex.core.msg(11025);					//"은(는) [시간/분/초] 입력 형식이 올바르지 않습니다.";
												msgStr = Ex.core.msgMapping(msgStr, [attrNm]);
												break;
										}
										break;
								}
								
								var alertby_msgCallback = function(mid, varValue)
								{
									if(comp.enable && !comp.readonly)
									{
										comp.setFocusRed();
									}
								};

								var param  = {
									id			: "pAlertby",
									msg			: msgStr,
									msgtype		: "E",
									callbackfunc: alertby_msgCallback,
								};
								Ex.core.alertby(scope, param);
								return false;
							}
						}
					}
				}
			}
			return true;
		},
		checkValidateGrid : function(scope, gridObj, isAll)
		{
			if( Ex.isEmpty(isAll) ) isAll = false;
			
			var msg = "";
			var grdBindDataset = gridObj.getBindDataset();
			
			if( Ex.isEmpty(scope) ) msg = "Grid Validation 체크시 scope가 지정되지 않았습니다.";
			if( Ex.isEmpty(grdBindDataset) ) msg = "Grid Validation 체크시 Grid BindDataset이 지정되지 않았습니다.";

			if( !Ex.isEmpty(msg) )
			{
				var param = {id : "pAlertI", msg : msg, msgtype : "E"};
				Ex.core.alert(scope, param);
				return;
			}
			else
			{
				//trace("gridObj.getCellCount() : " + gridObj.getCellCount("Body"));
	
				var edittypeInfo = "normal|combo|date|mask|text|textarea";

				for(var i=0; i<grdBindDataset.rowcount; i++)
				{
					var rowStatus = grdBindDataset.getColumn(i, "ROWFLAG") || "";
					
					//trace( (i+1) + "행 ROWFLAG:[" + rowStatus + "]" );

					if(grdBindDataset.colinfos["ROWFLAG"] != "[object DSColumnInfo]")
					{
						rowStatus = grdBindDataset.getRowType(i);

						if(rowStatus == Dataset.ROWTYPE_NORMAL) rowStatus = "";
						else if(rowStatus == Dataset.ROWTYPE_INSERT) rowStatus = "I";
						else if(rowStatus == Dataset.ROWTYPE_UPDATE) rowStatus = "U";
						else if(rowStatus == Dataset.ROWTYPE_DELETE) rowStatus = "D";
					}

					//trace( (i+1) + "행 ROWTYPE:[" + rowStatus + "]" );

					if(isAll || rowStatus == "I" || rowStatus == "U")	// || rowStatus == "D"
					{
						for(var j=0; j<gridObj.getCellCount("Body"); j++)
						{
							var colNm = nexacro.replaceAll(gridObj.getCellProperty("Body", j, "text")||"", "bind:", "");
							var chkStatus = gridObj.getCellProperty("Body", j, "validationStatus")||"";
							var chkValidation = gridObj.getCellProperty("body", j, "validation")||"";
							
							if( Ex.isEmpty(chkValidation) ) continue;
							
							var edittype = gridObj.getCellPropertyValue(i, j, "edittype");
							var inpVal = gridObj.getCellPropertyValue(i, j, "text")||"";	//사용자가 입력한 값
							var validation = nexacro.replaceAll(String(Ex.isEmpty(chkValidation) ? "" : chkValidation).split(";")[1], " ", "");

							if( (!chkStatus || (chkStatus && edittypeInfo.indexOf(edittype) > -1)) && !Ex.isEmpty(validation) )
							{
								//trace("i=" + i + " j=[" + j + "] colNm : " + colNm + " chkStatus : " + chkStatus + " edittype : " + edittype + " value : " + inpVal);
								
								//var validArr = Ex.isEmpty(validation) ? new Array() : String(validation).split("|");
								var validArr = validation.split("|");
								
								for(var k=0; k<validArr.length; k++)
								{
									//var validAttrArr = Ex.isEmpty(validArr) ? new Array() : String(validArr[k]).split(":");
									var validAttrArr = validArr[k].split(":");
									
									var rtn = false;
									var chkAttr = validAttrArr[0];	//validation Check이름(NULL, MIN, MAX, MIN_LEN, MAX_LEN 등)
									
									var chkVal;						//validation에 사용되는 기준값
									
									if(validAttrArr.length == 2) chkVal = validAttrArr[1];
									
									var charSet = "utf16";
									if(chkAttr == "MIN_LEN_ASC" || chkAttr == "MAX_LEN_ASC") charSet = "ascii";
									if(chkAttr == "MIN_LEN_UTF8" || chkAttr == "MAX_LEN_UTF8") charSet = "utf8";

									switch(chkAttr)
									{
										case "NULL" : rtn = !Ex.isEmpty(inpVal);	//빈값인지 여부 체크
											break;
										case "MIN" :	//입력값의 최소값 체크
											if(Ex.isEmpty(inpVal) ) rtn = true;
											else
											{
												if(validAttrArr.length == 2)
												{
													if(nexacro.toNumber(inpVal, 0) < nexacro.toNumber(chkVal)) rtn = false;
													else rtn = true;
												}
												else rtn = true;
											}
											break;
										
										case "MAX" :	//입력값의 최대값 체크
											if(Ex.isEmpty(inpVal) ) rtn = true;
											else
											{
												if(validAttrArr.length == 2)
												{
													if(nexacro.toNumber(inpVal, 0) > nexacro.toNumber(chkVal)) rtn = false;
													else rtn = true;
												}
												else rtn = true;
											}
											break;

										//입력값 최소 길이 체크
										case "MIN_LEN" :
										case "MIN_LEN_ASC" :
										case "MIN_LEN_UTF8" :
											if(Ex.isEmpty(inpVal) ) rtn = true;
											else
											{
												if(validAttrArr.length == 2)
												{
													if( Ex.util.getLength(inpVal, charSet) < nexacro.toNumber(chkVal)) rtn = false;
													else rtn = true;
												}
												else rtn = true;
											}
											break;

										//입력값 최대 길이 체크
										case "MAX_LEN" :
										case "MAX_LEN_ASC" :
										case "MAX_LEN_UTF8" :
											if(Ex.isEmpty(inpVal) ) rtn = true;
											else
											{
												if(validAttrArr.length == 2)
												{
													if( Ex.util.getLength(inpVal, charSet) > nexacro.toNumber(chkVal)) rtn = false;
													else rtn = true;
												}
												else rtn = true;
											}
											break;

										case "NUMBER":		//숫자여부
										case "EMAIL":		//이메일형식
										case "PHONE":		//전화번호
										case "MOBILE":		//핸드폰번호
										case "URL":			//URL
										case "IPADDR":		//IP
										case "JUMINNO":		//주민번호
										case "BIZNO":		//사업자번호
										case "CORPNO":		//법인번호
											rtn = Ex.util.checkType(chkAttr, inpVal);
											//rtn = this.regCheck(chkAttr, inpVal);
											break;

										case "DATETIME" :
											if(Ex.isEmpty(inpVal) ) rtn = true;
											else
											{
												if(validAttrArr.length == 2)
												{
													rtn = Ex.util.checkType(chkVal, inpVal);
													//rtn = this.regCheck(chkAttr, inpVal);
												}
												else rtn = true;
											}
											break;
										
										case "DUP" :
											if(!Ex.isEmpty(inpVal))
											{
												var chkCnt = grdBindDataset.getCaseCount(colNm + "=='" + inpVal + "'", 0, i+1);
												trace("DUP chkCnt : " + chkCnt);
												if(chkCnt > 1) rtn = false;
												else rtn = true;
											}
											else rtn = true;
											trace("DUP rtn : " + rtn);
											break;

										default :
											rtn = true;
											break;
									}
									
									//trace("j=" + j + " validNm : " + validAttrArr[0] + " rtn : " + rtn);
									
									if(!rtn)
									{
										var rowVal = i+1;
										var rowStr = Ex.core.word("행");
										var rowInfo = "[" + rowVal + rowStr + "] ";
										var msgStr = "";
										var attrNm = chkValidation.split(";")[0];
										trace("attrNm : " + attrNm);

										switch(chkAttr)
										{
											case "NULL" :
												msgStr += Ex.core.msg(11001);								//"은(는) 필수 입력 항목입니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "NUMBER" :
												msgStr += Ex.core.msg(11002);								//"은(는) 숫자만 입력 가능합니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "MIN" :
												msgStr += Ex.core.msg(11003);								//"은(는) 최소 [" + chkVal + "] 이상으로 입력해야 합니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm, chkVal]);
												break;
											case "MAX" :
												msgStr += Ex.core.msg(11004);								//"은(는) 최대 [" + chkVal + "] 까지만 입력가능 합니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm, chkVal]);
												break;
											case "MIN_LEN" :
												msgStr += Ex.core.msg(11005);								//"의 길이는 " + chkVal + "자 이상 입력해야 합니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm, chkVal]);
												break;
											case "MAX_LEN" :
												msgStr += Ex.core.msg(11006);								//"의 길이는 " + chkVal + "자까지 입력 가능합니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm, chkVal]);
												break;
											case "MIN_LEN_ASC" :
											case "MIN_LEN_UTF8" :
												msgStr += Ex.core.msg(11007);								//"의 길이는 " + chkVal + "byte 이상 입력해야 합니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm, chkVal]);
												break;
											case "MAX_LEN_ASC" :
											case "MAX_LEN_UTF8" :
												msgStr += Ex.core.msg(11008);								//"의 길이는 " + chkVal + "byte까지 입력 가능합니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm, chkVal]);
												break;
											case "EMAIL" :
												msgStr += Ex.core.msg(11009);								//"은(는) [E-MAIL] 입력 형식이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "PHONE" :
												msgStr += Ex.core.msg(11010);								//"은(는) [전화번호] 입력 형식이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "MOBILE" :
												msgStr += Ex.core.msg(11011);								//"은(는) [핸드폰번호] 입력 형식이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "URL" :
												msgStr += Ex.core.msg(11012);								//"은(는) [URL] 형식이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "IPADDR" :
												msgStr += Ex.core.msg(11013);								//"은(는) [IP주소] 형식이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "JUMINNO" :
												msgStr += Ex.core.msg(11014);								//"은(는) [주민번호] 입력값이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "BIZNO" :
												msgStr += Ex.core.msg(11015);								//"은(는) [사업자번호] 입력값이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
											case "CORPNO" :
												msgStr += Ex.core.msg(11016);								//"은(는) [법인번호] 입력값이 올바르지 않습니다.";
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;

											case "DATETIME" :
												switch(chkVal)
												{
													case "YYYY" :
														msgStr += Ex.core.msg(11017);						//"은(는) [년도] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "YYYYMM" :
														msgStr += Ex.core.msg(11018);						//"은(는) [년월] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "YYYYMMDD" :
														msgStr += Ex.core.msg(11019);						//"은(는) [날짜] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "YYYYMMDDHH" :
														msgStr += Ex.core.msg(11020);						//"은(는) [날짜/시간] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "YYYYMMDDHHMM" :
														msgStr += Ex.core.msg(11021);						//"은(는) [날짜/시간/분] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "YYYYMMDDHHMMSS" :
														msgStr += Ex.core.msg(11022);						//"은(는) [날짜/시간/분/초] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "HH" :
														msgStr += Ex.core.msg(11023);						//"은(는) [시간] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "HHMM" :
														msgStr += Ex.core.msg(11024);						//"은(는) [시간/분] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
													case "HHMMSS" :
														msgStr += Ex.core.msg(11025);						//"은(는) [시간/분/초] 입력 형식이 올바르지 않습니다.";
														msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
														break;
												}
												break;

											case "DUP" :
												msgStr += Ex.core.msg(11027);								//{0}은(는) 입력값이 중복되었습니다.
												msgStr = rowInfo + Ex.core.msgMapping(msgStr, [attrNm]);
												break;
										}
										
										var alertby_msgCallback = function(mid, varValue)
										{
											if(edittypeInfo.indexOf(edittype) > -1)
											{
												grdBindDataset.set_rowposition(i);	// 데이터셋 ROW 포커스 이동
												gridObj.showEditor(true);		// 그리드 편집모드로 변경
												gridObj.setCellPos(j, i);		// 그리드 셀 포커스 이동
											}
										};
										var param  = {
											id			: "pAlertby",
											msg			: msgStr,
											msgtype		: "E",
											callbackfunc: alertby_msgCallback,
										};
										Ex.core.alertby(scope, param);
										return false;
									}
								}
							}
							
						}
					}
				}
			}
			return true;
		},
		// rMateChart용 데이타 생성함수
		/*
			데이타 형태
			chartData = [	{"Month":"Jan", "Profit":900},
							{"Month":"Feb", "Profit":2400},
							{"Month":"Mar", "Profit":1900}	];
							
			var  arr = [ 데이타셋 객체,
						{key:value 1},  --> key:라벨명,val:라벨명으로사용할 컬럼명( key:val 반복만큼 기술 )
						{key:value 2},
						{ ~ },
						{key:value n }
								]
			var chartData = Ex.util.makeChartData(arr);	
		*/
		makeChartData : function(arrInfo)
		{
			var rtn = [];
			var oJson = {};
			var oDs = arrInfo[0];
			for(var i=0;i<oDs.rowcount;i++)
			{
				oJson = {};
				for(var j=1;j<arrInfo.length;j++)
				{
					var keyStr = arrInfo[j].key;
					oJson[keyStr] = oDs.getColumn(i,arrInfo[j].val);
				}
				rtn.push(oJson);
			}
			return rtn;
		},
		//----------------------------------------Ex extend----------------------------------------------------
		/**
		 * 문자열의 오른쪽에서 length만큼의 문자열을 가져온다.
		 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
		 * @param {number} length 가져올문자열 길이 ( 예 : 2 )
		 * @return {boolean} 오른쪽에서 length만큼의 문자열 ( 예 : "cc" )]
		 * @example
		 * var str = "myT1 and myT2 are the strings used for padding";
		 * var res = Ex.util.getRightStr(str, 7);
		 * trace(res); // output : padding
		 * @memberOf Ex.util
		 */	 
		getRightStr: function(source, length) 
		{
			if( source.length < length ) 
			{
				return source;
			} 
			else 
			{
				return source.substr(source.length-length, length);
			}
		},
		/**
		 * 문자열 길이계산.
		 * @param {string} str 대상 문자열.
		 * @param {string=} unit 문자열의 길이를 검사하는 단위 . 
						   "utf16" - 한문자당 1의 값으로 합산함(default).
						   "utf8"  - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.
						   "ascii" - 한문자당 영문 1, 한글 2의 값으로 합산함.
		 * @return {number} 문자열 길이.
		 * @example
		 * var str = "unit 문자열";
		 * var len = Ex.util.getLength(str);
		 * trace(len); // output : 8
		 * len = Ex.util.getLength(str, "ascii");
		 * trace(len); // output : 11
		 * len = Ex.util.getLength(str, "utf8");
		 * trace(len); // output : 14
		 * @memberOf Ex.util
		 */	 		 
		getLength: function(str, unit)
		{
			if ( !str ) return 0;
			str = str + '';
			if( Ex.isEmpty(unit) ) unit = "ascii";
			unit = unit.toLowerCase();

			var pThis = Ex.util;

			if ( unit == "utf8" )		return pThis._utf8ByteCount(str);
			else if ( unit == "ascii" )	return pThis._asciiByteCount(str);
			else						return str.length;
		},
		/**
		 * utf8을 기준으로 문자열 길이계산.
		 * @private
		 * @param {string} str 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Ex.util
		 */	 		 
		_utf8ByteCount: function(str)
		{
			if (str === undefined) return 0;
			
			var pThis = Ex.util;
			var count = 0,
				ch,
				high,
				low,
				isHighSurrogate = pThis._isHighSurrogate,
				utf8Len = pThis._utf8Len,
				toCodepoint = pThis._toCodepoint;

			for(var i=0, n = str.length; i< n; i++) 
			{
				ch = str.charCodeAt(i);
				
				if(isHighSurrogate(ch)) 
				{
					high = ch;
					low = str.charCodeAt(++i);
					count += utf8Len(toCodepoint(high, low));
				} 
				else 
				{
					count += utf8Len(ch);
				}
			}
			return count;
		}, 	
		/**
		 * ascii를 기준으로 문자열 길이계산.
		 * @private
		 * @param {string} str 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Ex.util
		 */	 		 
		_asciiByteCount: function(str)
		{
			if (str === undefined) return 0;
			
			var i, j=0, val; 
			for(i=0, n = str.length; i< n; i++) 
			{ 
				val = str.charCodeAt(i);
				if ( val > 255 ) j++;
				j++; 
			}
			return j;
		},
		
		/**
		 * [내부함수]uft8 문자열 길이계산.
		 * @private
		 * @param {string} codePoint 문자셋 수치보정값.
		 * @return {number} 문자열 길이.
		 * @memberOf Ex.util
		 */	 		 
		_utf8Len: function(codePoint)
		{
			if(codePoint >= 0xD800 && codePoint <= 0xDFFF)
			{
				trace("잘못된 파라미터입니다:"+codePoint);
			}
			if(codePoint < 0)
			{
				trace("잘못된 파라미터입니다:"+codePoint);
			}
			if(codePoint <= 0x7F) return 1;
			if(codePoint <= 0x7FF) return 2;
			if(codePoint <= 0xFFFF) return 3;
			if(codePoint <= 0x1FFFFF) return 4;
			if(codePoint <= 0x3FFFFFF) return 5;
			if(codePoint <= 0x7FFFFFFF) return 6;

			trace("잘못된 파라미터입니다:"+codePoint);
		},

		
		/**
		 * 유니코드 보충언어판(Supplementary Plane)의 상위 대행코드(High Surrogate) 여부.
		 * @private
		 * @param {string} codeUnit 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Ex.util
		 */	 		 
		_isHighSurrogate: function(codeUnit)
		{
			return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
		},
		
		/**
		 * 유니코드 보충언어판(Supplementary Plane)의 하위 대행코드(Low Surrogate) 여부.
		 * @private
		 * @param {string} codeUnit 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Ex.util
		 */	 		 
		_isLowSurrogate: function(codeUnit)
		{
			return codeUnit >= 0xDC00 && codeUnit <= 0xDFFF;
		},
		
		/**
		 * 문자셋의 수치보정값 처리
		 * @private
		 * @param {number} highCodeUnit 상위 대행코드.
		 * @param {number} lowCodeUnit 하위 대행코드.
		 * @return {number} 문자열 길이.
		 * @memberOf Ex.util
		 */
		_toCodepoint: function(highCodeUnit, lowCodeUnit)
		{
			var pThis = Ex.util;
			
			if(!pThis._isHighSurrogate(highCodeUnit))
			{
				trace("잘못된 파라미터입니다:"+highCodeUnit);
			}
			if(!pThis._isLowSurrogate(lowCodeUnit))
			{
				trace("잘못된 파라미터입니다:"+lowCodeUnit);
			}
			highCodeUnit = (0x3FF & highCodeUnit) << 10;
			var u = highCodeUnit | (0x3FF & lowCodeUnit);
			return u + 0x10000;	 	
		},
		
		/**
		 * 문자열의 특수문자(개행문자 Tab문자 ~ ` ! @ # $ % % ^ & * - = + 등) 포함개수.
		 * @param {string} str 대상 문자열.
		 * @return {number} 특수문자 개수.
		 * @example
		 * var str = "2011-12-27\r\n\t~`";
		 * var cnt = Ex.util.countNonword(str);
		 * trace(cnt); // output : 7
		 * @memberOf Ex.util
		 */	 		 
		countNonword: function(str)
		{
			var regExp = /\W/g;
			var rtn = str.match(regExp);
			return (!rtn)?0:rtn.length;
		}, 
		/**
		 * 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 증감한다.
		 * @param {string|date} value 'yyyyMMdd' 형태로 표현된 String 또는 Date.
		 * @param {number} offset 날짜로부터 증가 감소값.
		 * @return {string|date} 'yyyyMMdd' 형태로 표현된 String 또는 Date Value.
		 * @example
		 * // 2013/04/29 16:39:04 test함. 
		 * trace(EX.util.addDate(new Date(), 3)); // output : Thu May 02 2013 16:39:04 GMT+0900
		 * var val = Ex.util.getMaskFormatString(new Date(), "yyyyMMdd");
		 * trace(Ex.util.addDate(val, 3)); // output : 20130502 
		 * @memberOf EX.util
		 */
		addDate: function(value, offset) 
		{
			var dt;
			if ( Ex.isDate(value) )
			{
				dt = new Date();
				dt.setFullYear(value.getFullYear(), value.getMonth(), value.getDate() + offset);
				dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
				dt.setMilliseconds(value.getMilliseconds());
				return dt;
			}
			else
			{
				dt = new Date();
				dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1), parseInt(value.substr(6, 2)) + offset);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
				return Ex.util.getMaskFormatString(dt, "yyyyMMdd");
			}
		},
		/**
		 * yyyy, yyyyMM, yyyyMMdd, yyyyMMddhh, yyyyMMddhhmm, yyyyMMddhhmmss 형태의 String을 Date객체로 만들기.
		 * @param {string} value yyyy ~ yyyyMMddhhmmss형태의 날짜String ( 예 : "20121122" ).
		 * @return {date} Date Object.
		 * @example
		 * var dt = Ex.util.strToDate("20120331"); // convert Date type from "20120331".
		 * trace(dt); // output : Sat Mar 31 2012 00:00:00 GMT+0900
		 * var dt = Ex.util.strToDate("20130320123022"); // convert Date type from "20130320123022".
		 * trace(dt); // output : Wed Mar 20 2013 12:30:22 GMT+0900
		 * @memberOf Ex.util
		 */
		strToDate: function(value) 
		{
			var dt = new Date();
			if ( value.length == 4 ) //yyyy
			{
				dt.setFullYear(parseInt(value), 0, 0);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 6 ) //yyyyMM
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, 0);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 8 ) //yyyyMMdd
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 10 ) //yyyyMMddhh
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(parseInt(value.substr(8,2)), 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 12 )//yyyyMMddhhmm
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 14 ) //yyyyMMddhhmmss
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), parseInt(value.substr(12,2)));
				dt.setMilliseconds(0);
			}
			return dt;
		},
		/**
		 * 입력된 날짜에 OffSet 으로 지정된만큼의 월을 증감한다.
		 * @param {string | date} value 'yyyyMMdd' 형태로 표현된 String 또는 Date.
		 * @param {number} offset 월 증감값 ( 예 : 1 또는 -1 ) 
		 * @return {string | date} 'yyyyMMdd' 형태로 표현된 String 또는 Date Value.
		 * @example
		 * var dt = Ex.util.strToDate("20130331");
		 * var dt0 = Ex.util.addMonth(dt, 1);
		 * trace(dt0); // output : Tue Apr 30 2013 00:00:00 GMT+0900
		 * var str1 = "20130331";
		 * var str = Ex.util.addMonth(str1, 1);
		 * trace(str); // output : 20130430 
		 * @memberOf Ex.util
		 */
		addMonth: function(value, offset) 
		{
			var pThis = Ex.util;
			var dt;
			if ( Ex.isDate(value) )
			{
				var nTmpday = value.getDate();
				dt = new Date();
				dt.setFullYear(value.getFullYear(), value.getMonth() + offset, value.getDate());
				dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
				dt.setMilliseconds(value.getMilliseconds());
				if ( dt.getDate() != nTmpday )
				{
					dt.setMonth(dt.getMonth() - 1);
					dt.setDate(pThis.getLastDayOfMonth(dt));
				}
				return dt;
			}
			else
			{
				var nTmpday = parseInt(value.substr(6, 2));
				dt = new Date();
				dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1) + offset, nTmpday);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
				if ( dt.getDate() != nTmpday )
				{
					dt.setMonth(dt.getMonth() - 1);
					dt.setDate(pThis.getLastDayOfMonth(dt));
				}
				return pThis.getMaskFormatString(dt, "yyyyMMdd");
			}
		},	
		/**
		 * 달별 일자 Offset
		 * @private
		 * @memberOf Ex.util
		 */
		_dayOfYearOffset: [0, 
							31, 
							31 + 28, 
							31 + 28 + 31, 
							31 + 28 + 31 + 30, 
							31 + 28 + 31 + 30 + 31, 
							31 + 28 + 31 + 30 + 31 + 30, 
							31 + 28 + 31 + 30 + 31 + 30 + 31, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30],
		/**
		 * 해당연도의 1월 1일부터 날짜까지의 일 수 반환.
		 * @param {date|string} date Date Object 또는 날짜형 스트링.
		 * @return {number} 일수
		 * @example
		 * var dt = Ex.util.strToDate("20130420"); // convert Date type from "20130420".
		 * var days = Ex.util.getDayOfYear(dt);
		 * trace(days); // output : 110
		 * var dtstr = "20130420";
		 * var days = Ex.util.getDayOfYear(dtstr);
		 * trace(days); // output : 110
		 * @memberOf Ex.util
		 */
		getDayOfYear: function(date)
		{
			var pThis = Ex.util;
			
			if ( Ex.isString(date) )
			{
				date = pThis.strToDate(date);
			}
			
			if ( !Ex.isDate(date) )
			{
				trace("날짜 형식에 맞지 않습니다.");
			}
			
			var nDay = pThis._dayOfYearOffset[date.getMonth()] + date.getDate();
			if (pThis.isLeapYear(date.getFullYear()))
			{
				nDay = nDay + 1;
			}
			return nDay;
		},
		/**
		 * 두 일자간의 차이 일수 계산.
		 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 ( 예 : "20121122" ).
		 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 : "20121202" ).
		 * @return {number} 숫자 형태의 차이일수  ( 예 : 10 ). 단, fromDate < toDate 음수가 return된다.
		 * @example
		 * var fromdt = Ex.util.strToDate("20120331");
		 * var todt = Ex.util.strToDate("20130420");
		 * var day = Ex.util.getDiffDay(fromdt, todt);
		 * trace(day); // output : 385
		 * var fromstr = "20120331";
		 * var tostr = "20130420";
		 * var day = Ex.util.getDiffDay(fromstr, tostr);
		 * trace(day); // output : 385
		 * @memberOf Ex.util
		 */
		getDiffDay: function(fromDate, toDate)
		{
			var pThis = Ex.util;
			if( Ex.isEmpty(fromDate) ) return 0;
			if( Ex.isEmpty(toDate) ) return 0;
			fromDate = fromDate.toString();
			toDate = toDate.toString();
			
			if(Ex.isString(fromDate) && Ex.isString(toDate))
			{
				fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
				toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
			}

			var flag = 1, nDay;
			if ( fromDate >  toDate )
			{
				flag = -1;
				var tmpDt = toDate;
				toDate = fromDate;
				fromDate = tmpDt;
			}

			if (fromDate.getFullYear() != toDate.getFullYear() )
			{
				nDay = (pThis.isLeapYear(fromDate.getFullYear()) ? 366 : 365) - pThis.getDayOfYear(fromDate) + pThis.getDayOfYear(toDate);
				var nYear = fromDate.getFullYear();
				while (nYear++ < toDate.getFullYear() - 1)
				{
					nDay = nDay + (pThis.isLeapYear(nYear) ? 366 : 365);
				}
			}
			else
			{
				nDay = pThis.getDayOfYear(toDate) - pThis.getDayOfYear(fromDate);
			}
			return nDay*flag;
		},	
		/**
		 * 두 월간의 차이 월수 계산. (정확한 달수를 처리하려면 fromDate Day값을 1로 하고 toDate를 마지막일자로 처리하여야 한다.)<br>
		 * 시작일자의 Day값이 1로 아니면 소수점((마지막일자 - 해당월의 일수)/마지막일자)으로 계산한다.<br>
		 * 끝일자의 Day값이 마지막일자가 아니면 소수점(해당월의 일수/마지막일자)를 계산한다.
		 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 ( 예 : "20121122" ).
		 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 : "20121202" ).
		 * @return {number} 숫자 형태의 차이월수  ( 예 : 10 ). 단, fromDate < toDate 음수가 return된다.
		 * @example
		 * var fromdt = Ex.util.strToDate("20130301");
		 * var todt = Ex.util.strToDate("20130501");
		 * var month = Math.ceil(Ex.util.getDiffMonth(fromdt, todt));
		 * trace(month); // output : 3
		 * var fromstr = "20120331";
		 * var tostr = "20130420";
		 * var month = Ex.util.getDiffMonth(fromstr, tostr);
		 * trace(month); // output : 12.69
		 * @memberOf Ex.util
		 */
		getDiffMonth: function(fromDate, toDate)
		{
			var pThis = Ex.util;
			
			if(Ex.isString(fromDate) && Ex.isString(toDate))
			{
				fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
				toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
			}

			var flag = 1, nMonth, nDay;
			if ( fromDate >  toDate )
			{
				flag = -1;
				var tmpDt = toDate;
				toDate = fromDate;
				fromDate = tmpDt;
			}

			if ( fromDate.getDate() == 1 )
			{
				nMonth = 1;
				nDay = 0;
			}
			else
			{
				nMonth = 0;
				var lastday = pThis.getLastDayOfMonth(fromDate);
				nDay = Math.floor(( lastday - fromDate.getDate() + 1)/lastday, 2);
			}

			if ( toDate.getDate() == pThis.getLastDayOfMonth(toDate) )
			{
				nMonth += 1;
			}
			else
			{
				nDay += Math.floor(toDate.getDate()/pThis.getLastDayOfMonth(toDate), 2);
			}

			if (fromDate.getFullYear() != toDate.getFullYear() )
			{
				nMonth += 12 - (fromDate.getMonth() + 1) + toDate.getMonth();
				var nYear = fromDate.getFullYear();
				while (nYear++ < toDate.getFullYear() - 1)
				{
					nMonth = nMonth + 12;
				}
			}
			else
			{
				nMonth += toDate.getMonth() - (fromDate.getMonth() + 1);
			}
			return (nMonth + nDay)*flag;
		},
		/**
		 * 날짜 차이 계산하기.
		 * @param {string} date1 yyyyMMddHHMMSS형태의 일자.
		 * @param {string} date2 yyyyMMddHHMMSS형태의 일자.
		 * @return {array} 두 날짜의 기간.[일,시,분,초]
		 * @example
		 * var dt0 = Ex.util.strToDate("20130302113022");
		 * var dt1 = Ex.util.strToDate("20130305145032");
		 * var etime = Ex.util.getDiffTime(dt0, dt1); // return Array Type [일, 시, 분, 초]
		 * trace(etime); // output : 3,3,20,10
		 * var str0 = "20130302113022";
		 * var str1 = "20130305145032";
		 * var etime = Ex.util.getDiffTime(str0, str1); // return Array Type [일, 시, 분, 초]
		 * trace(etime); // output : 3,3,20,10
		 * @memberOf Ex.util
		 */		 
		getDiffTime: function(date1, date2)
		{
			var dFrom, dTo;
			if ( Ex.isDate(date1) && Ex.isDate(date2) )
			{
				dFrom = date2;
				dTo = date1;
			}
			else
			{
				dFrom = new Date(date2.substring(0,4),  date2.substring(4,6)-1, date2.substring(6,8)
								,date2.substring(8,10), date2.substring(10,12), date2.substring(12,14));
				dTo   = new Date(date1.substring(0,4),  date1.substring(4,6)-1, date1.substring(6,8)
								,date1.substring(8,10), date1.substring(10,12), date1.substring(12,14));    
			}
			var nGap  = (dFrom.getTime() - dTo.getTime()) / 1000; 
			var nSec  = nGap % 60; 
			var nMin  = Math.floor(nGap/(60)) % 60; 
			var nHour = Math.floor(nGap/(60 * 60)) % 24; 
			var nDay  = Math.floor(nGap/(60 * 60 * 24)); 
				
			var sRtn = nDay + "" + nHour  + "" + nMin + "" + nSec+ ""; 
			return [nDay, nHour, nMin, nSec];
		},	
		/**
		 * 전달된 月의 1일 만들기.
		 * @param {string | date} value yyyyMMdd형태의 일자.
		 * @return {string} yyyyMM01.
		 * @example
		 * var dt = Ex.util.strToDate("20120331");
		 * var dt1 = Ex.util.getFirstDate(dt);
		 * trace(dt1); // output : Thu Mar 01 2012 00:00:00 GMT+0900
		 * var str1 = "20120331";
		 * var str = Ex.util.getFirstDate(str1);
		 * trace(str); // output : 20120301
		 * @memberOf Ex.util
		 */			 
		getFirstDate: function(value)
		{
			if ( Ex.isDate(value) )
			{
				var dt = new Date();
				dt.setFullYear(value.getFullYear(), value.getMonth(), 1);
				dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
				dt.setMilliseconds(value.getMilliseconds());
				return dt;
			}
			else
			{
				var sRtn = "";
				var dDate = new Date(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, 1);
				sRtn =  dDate.getFullYear()
					 + (dDate.getMonth()+1).toString().padLeft(2, "0")
					 +  dDate.getDate().toString().padLeft(2, "0");

				return sRtn;
			}
		},
		/**
		 * 해당월의 마지막 날짜를 숫자로 구하기.
		 * @param {number | string} value yyyyMMdd형태의 날짜 ( 예 : "20121122" ).
		 * @return {number} 마지막 날짜 숫자값 ( 예 : 30 ).
		 * @example
		 * var dt = Ex.util.strToDate("20120302"); // convert Date type from "20120302".
		 * var day = Ex.util.getLastDayOfMonth(dt);
		 * trace(day); // output : 31
		 * var dtstr = "20120302";
		 * var day = Ex.util.getLastDayOfMonth(dtstr);
		 * trace(day); // output : 31
		 * @memberOf Ex.util
		 */
		getLastDayOfMonth: function(value) 
		{
			var nMonth, nLastDate;

			if ( Ex.isDate(value) )
			{
				nMonth = value.getMonth() + 1;
			}
			else
			{
				nMonth = parseInt(value.substr(4,2), 10);
			}
			if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 ) 
			{
				nLastDate = 31;
			} 
			else if( nMonth == 2 ) 
			{
				if( Ex.util.isLeapYear(value) == true ) 
				{
					nLastDate = 29;
				} 
				else 
				{
					nLastDate = 28;
				}
			} 
			else 
			{
				nLastDate = 30;
			}
				
			return nLastDate;
		},
		/**
		 * yyyyMMdd형태의 날짜를 입력하면 해당연도의 날짜에 해당하는 주차반환.
		 * @param {date|string} date Date Object 또는 날짜형 스트링.
		 * @return {number} 주차에 해당하는 숫자  ( 예 : 10 ).
		 * @example
		 * var dt = Ex.util.strToDate("20130331"); // convert Date type from "20130331".
		 * var week = Ex.util.getWeekOfYear(dt);
		 * trace(week); // output : 14
		 * var dtstr = "20130331";
		 * var week = Ex.util.getWeekOfYear(dt);
		 * trace(week); // output : 14
		 * @memberOf Ex.date
		 */
		getWeekOfYear: function(date)
		{
			if ( Ex.isString(date) )
			{
				date = this.strToDate(date);
			}
			if ( !Ex.isDate(date) )
			{
				return -1;
			}
			
			var onejan = new Date();
			
			onejan.setYear(date.getFullYear());
			onejan.setMonth(0);
			onejan.setDate(1);	
									
			return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
		},		
		/**
		 * 요일명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		 * @public
		 * @type array
		 * @memberOf Ex.util
		 */			
		weekName: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
		//weekName: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],				
		
		/**
		 * 축약 요일명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
		 * @public
		 * @type array
		 * @memberOf Ex.util
		 */	
		weekShortName: ["일", "월", "화", "수", "목", "금", "토"],
		//weekShortName: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],		
		
		/**
		 * 월명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		 * @public
		 * @type array
		 * @memberOf Ex.util
		 */	
		monthName: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		//monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		
		/**
		 * 축약 월명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		 * @public
		 * @type array
		 * @memberOf Ex.util
		 */	
		monthShortName: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		//monthShortName: ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		
		/**
		 * 오전/오후<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["AM", "PM"]
		 * @public
		 * @type array
		 * @memberOf Ex.util
		 */	
		ttName: ["오전", "오후"],
		//ttName: ["AM", "PM"],
		/**
		 * 주어진 날짜 개체의 Mask Format 처리된 문자열을 반환.<br>
		 * 요일명칭, 달명칭, 오전오후 명칭 표시 처리는 Ex.util에 정의된 값으로 처리된다.<br><br>
		 * Ex.util.weekName : 요일명칭(Array value), <br>
		 * Ex.util.weekShortName : 요일축약명칭(Array value),<br>
		 * Ex.util.monthName : 월명칭(Array value),<br>
		 * Ex.util.monthShortName : 월축약 명칭(Array value),<br>
		 * Ex.util.ttName : 오전/오후 명칭(Array value)
		 * @param {date} dt Date 개체.
		 * @param {string} strMask mask할 format 문자열.
		 * @return {string} 변환된 문자열.
		 * @example
		 * var dt = Ex.util.strToDate("20130430123412"); // convert Date type from "20130430123412".
		 * trace(Ex.util.getMaskFormatString(dt, "yyyy년 MM월 dd일 tt hh시 mm분 ss초")); // output : 2013년 04월 30일 오후 12시 34분 12초
		 * trace(Ex.util.getMaskFormatString(dt, "yyyy-MM-dd")); // output : 2013-04-30
		 * trace(Ex.util.getMaskFormatString(dt, "yy MM.dd")); // output : 13 04.30
		 * trace(Ex.util.getMaskFormatString(dt, "yyyy-MM-dd W \\Week")); // output : 2013-04-30 18 Week
		 * trace(Ex.util.getMaskFormatString(dt, "MMMM dddd")); // output : 4월 화요일
		 * @memberOf Ex.util
		 */
		getMaskFormatString: function(dt, strMask)
		{
			var pThis = Ex.util;
			
			var arrMask = pThis._parseDateMask(strMask),
				arrDt = [], mask, h;
			for ( var i = 0, len = arrMask.length; i < len ; i++ )
			{
				mask = arrMask[i];
				if ( mask > -1 )
				{
					arrDt[arrDt.length] = strMask.charAt(mask);
				}
				else
				{
					switch (mask)
					{
						case "yyyy": arrDt[arrDt.length] = new String(dt.getFullYear()); break;
						case "MMMM": arrDt[arrDt.length] = pThis.monthName[dt.getMonth()]; break;
						case "dddd": arrDt[arrDt.length] = pThis.weekName[dt.getDay()]; break;
						case "MMM": arrDt[arrDt.length] = pThis.monthShortName[dt.getMonth()]; break;
						case "ddd": arrDt[arrDt.length] = pThis.weekShortName[dt.getDay()]; break;
						case "sss": arrDt[arrDt.length] = new String(dt.getMilliseconds()).padLeft(3,'0'); break;
						case "yy": arrDt[arrDt.length] = new String(dt.getFullYear() % 1000).padLeft(2,'0'); break;
						case "MM": arrDt[arrDt.length] = new String(dt.getMonth() + 1).padLeft(2,'0'); break;
						case "WW": arrDt[arrDt.length] = new String(getWeekNumber(dt)).padLeft(2,'0'); break;
						case "dd": arrDt[arrDt.length] = new String(dt.getDate()).padLeft(2,'0'); break;
						case "HH": arrDt[arrDt.length] = new String(dt.getHours()).padLeft(2,'0'); break;
						case "hh": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)).padLeft(2,'0'); break;
						case "mm": arrDt[arrDt.length] = new String(dt.getMinutes()).padLeft(2,'0'); break;
						case "ss": arrDt[arrDt.length] = new String(dt.getSeconds()).padLeft(2,'0'); break;
						case "tt": arrDt[arrDt.length] = dt.getHours() < 12 ? pThis.ttName[0] : pThis.ttName[1]; break;
						case "M": arrDt[arrDt.length] = new String(dt.getMonth() + 1); break;
						case "d": arrDt[arrDt.length] = new String(dt.getDate()); break;
						case "H": arrDt[arrDt.length] = new String(dt.getHours()); break;
						case "h": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)); break;
						case "m": arrDt[arrDt.length] = new String(dt.getMinutes()); break;
						case "s": arrDt[arrDt.length] = new String(dt.getSeconds()); break;
						case "W": arrDt[arrDt.length] = new String(pThis.getWeekOfYear(dt)); break;
					}
				}
			}
			return arrDt.join("");
		},
		/**
		 * mask format cache.
		 * @private
		 * @memberOf Ex.util
		 */
		_dateMaskCache: {},		
		/**
		 * mask format 변환 정보 반환.
		 * @private
		 * @param {string} strMask mask할 format 문자열.
		 * @return {array} mask format 변환 정보
		 * @memberOf Ex.util
		 */		
		_parseDateMask: function(strMask)
		{
			var pThis = Ex.util;
			
			var res = pThis._dateMaskCache[strMask];
			if ( res ) return res;

			var arrMask = [], tokenStr, seq = 0,
				bEscape = false, bQuote = false,
				maskArr = strMask.split(""),
				tmpStr;

			for ( var i = 0, len = maskArr.length ; i < len ; )
			{
				tokenStr = maskArr[i];
				//trace(i + "===>" + tokenStr);
				if( bEscape == false && tokenStr == "'" ) 
				{ // Mask가 Quotation이 시작될 경우.
					if( bQuote == false )
						bQuote = true;
					else
						bQuote = false;
					i++;
					continue;
				}
				if( bEscape == false && tokenStr == "\\" && !bQuote ) 
				{ // Mask에서 Escape에 진입할 경우.
					bEscape = true;
					i++;
					continue;
				}
				else if ( bEscape ) 
				{ // Mask에서 Escape를 사용할 경우.
					//trace(i + "(EEE)===>" + tokenStr);
					arrMask[seq] = i;
					seq++;
					bEscape = false;
				}
				else if( bQuote == false ) 
				{// Mask에서 Quotation 밖의 글자에 대해.
					tmpStr = strMask.substr(i, 4);
					if ( tmpStr == "yyyy" || tmpStr == "MMMM" || tmpStr == "dddd" ) //yyyy, MMMM, dddd
					{
						arrMask[seq] = tmpStr;
						i += 4;
						seq++;
						continue;
					}
					tmpStr = strMask.substr(i, 3);
					if ( tmpStr == "MMM" || tmpStr == "ddd" || tmpStr == "sss" ) //MMM, ddd, sss
					{
						arrMask[seq] = tmpStr;
						i += 3;
						seq++;
						continue;
					}
					tmpStr = strMask.substr(i, 2);
					if ( tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
						 tmpStr == "HH" || tmpStr == "mm" || tmpStr == "ss" ||
						 tmpStr == "hh" || tmpStr == "tt" || tmpStr == "tt" ) // yy, MM, dd, HH, mm , ss, tt, WW
					{
						arrMask[seq] = tmpStr;
						i += 2;
						seq++;
						continue;
					}

					if ( tokenStr == "M" || tokenStr == "d" || tokenStr == "H" ||
						 tokenStr == "h" || tokenStr == "m" || tokenStr == "s" || tokenStr == "W" ) // M, d, H, h, m, s, W
					{
						arrMask[seq] = tokenStr;
						seq++;
					}
					else
					{
						arrMask[seq] = i;
						seq++;
					}
				}
				i++;
			}
			
			pThis._dateMaskCache[strMask] = arrMask;
			
			return arrMask;
		},
		/* Dataset 컬럼에서 인자로 넘긴 값을 검색하여 리턴 받고자 하는 컬럼명의 Vaule를 리턴 */
		getDsFindValue : function(dsObj, filterColNm, filterVal, returnColNm)
		{
			var fRow = dsObj.findRow(filterColNm, filterVal);
			if(fRow > -1) return dsObj.getColumn(fRow, returnColNm);
			else "";
		},
		/* Dataset 필터 문자열을 통해 리턴 받고자 하는 컬럼명의 Vaule를 리턴 */
		getDsExprFindValue : function(dsObj, filterStr, returnColNm)
		{
			filterStr = nexacro.replaceAll(filterStr, '"', '\"');			
			var fRow = dsObj.findRowExpr(filterStr);
			if(fRow > -1) return dsObj.getColumn(fRow, returnColNm);
			else "";
		},
		setCompPropAll : function(scope, objArr, isVal, isExcludeObjArr)
		{
			//trace("Ex.util.setCompPropAll() START");
			if( Ex.isEmpty(objArr) ) return;
			
			if( !Ex.isArray( objArr) )
			{
				objArr = new Array(objArr);
			}
			
			//trace("Ex.util.setCompPropAll() objArr.length :::::: " + objArr.length);
			
			/*
			if(isExcludeObjArr instanceof Array)
			{
				trace("setCompPropAll() isExcludeObjArr.length ::::::::::::::::::::: " + isExcludeObjArr.length);
			}
			*/
			
			for(var i=0; i<objArr.length; i++)
			{
				var strType = objArr[i].toString().toUpperCase();
				
				//trace("Ex.util.setCompPropAll() strType :::::: " + strType + " comp ID : " + objArr[i].id);
				
				var arrComp;
				
				if( Ex.isEmpty(objArr[i].components) )
				{
					//trace("[IF] Ex.isEmpty(objArr[i].components)");
					arrComp = objArr[i];
				}
				else
				{
					//trace("[ELSE] Ex.isEmpty(objArr[i].components)");
					arrComp = objArr[i].components;
				}
				//trace("setCompPropAll() arrComp :::::::::::::::> " + arrComp);

				if( !Ex.isEmpty(objArr[i].components) )
				{
					//trace("Ex.util.setCompPropAll() objArr[i].components.length : " + objArr[i].components.length);
					
					var nLength = Ex.isEmpty(objArr[i].components) ? 1 : arrComp.length;
					//trace("setCompPropAll() nLength :::::::::::::::> " + nLength);
				
					for (var j=0; j<nLength; j++)
					{
						var isCheck = true;
				
						//trace("====if setCompPropAll() arrComp[j].id : " + arrComp[j].id);
						
						if(isExcludeObjArr instanceof Array)
						{
							if(isExcludeObjArr.indexOf(arrComp[j]) > -1)
							{
								//trace("if XXXXXXXXXXXXXXXXXX arrComp[j].id : " + arrComp[j].id);
								isCheck = false;
							}
						}
						
						//trace("isCheck : [" + arrComp[j].id + "]");
						//trace("arrComp[j].skipComp : " + arrComp[j].skipComp);
						if(arrComp[j].skipComp != "Y")
						{
							if(isCheck)
							{
								if(arrComp[j] instanceof Div)
								{
									//trace("setCompPropAll() [DIV]");
									//if( Ex.isEmpty(arrComp[j].form.url) )
									//{
										//this.setCompProp(scope, arrComp[j], isVal);
										this.setCompPropAll(scope, arrComp[j].form, isVal);
									//}
								}
								else if(arrComp[j] instanceof Tab)
								{
									//trace("setCompPropAll() [TAB]");

									var nPages = arrComp[j].tabpages.length;
									//trace("setCompPropAll() [TAB] tabpages.length : " + nPages);

									for (var k=0; k<nPages; k++)
									{
										//if( Ex.isEmpty(arrComp[j].tabpages[k].form.url) )
										//trace("setCompPropAll() [TAB] tabpages k=" + k + " arrComp[j].tabpages[k].form.components.length : " + arrComp[j].tabpages[k].form.components.length);
										//this.setCompProp(scope, arrComp[j].tabpages[k], isVal);
										this.setCompPropAll(scope, arrComp[j].tabpages[k].form, isVal);
									}
								}
								else
								{
									//trace("setCompPropAll() [ELSE]");
									Ex.util.setCompProp(scope, arrComp[j], isVal);
								}
							}
						}
					}
				}
				else
				{
					//trace("else setCompPropAll() arrComp[i].id : " + arrComp[i].id);

					var isCheck = true;
					
					if(isExcludeObjArr instanceof Array)
					{
						if(isExcludeObjArr.indexOf(arrComp) > -1)
						{
							//trace("else XXXXXXXXXXXXXXXXXX arrComp.id : " + arrComp.id);
							isCheck = false;
						}
					}

					if(isCheck)
					{
						if(arrComp instanceof Div)
						{
							//trace("setCompPropAll() Div~~~~~~~~~~~~~~~~~~~~~~~");
							//if( Ex.isEmpty(arrComp.form.url) )
							//this.setCompProp(scope, arrComp, isVal);
							this.setCompPropAll(scope, arrComp.form, isVal);
						}
						else if(arrComp instanceof Tab)
						{
							var nPages = arrComp.tabpages.length;
							for (var j=0; j<nPages; j++)
							{
								//if( Ex.isEmpty(arrComp.tabpages[i].form.url) )
								//this.setCompProp(scope, arrComp.tabpages[j], isVal);
								this.setCompPropAll(scope, arrComp.tabpages[j].form, isVal);
							}
						}
						else
						{
							this.setCompProp(scope, arrComp, isVal);
						}
					}
				}
			}
		},
		setCompProp : function(scope, objComp, isVal)
		{
			if( Ex.isEmpty(isVal) ) isVal = true;
			else
			{
				if( !Ex.isBoolean(isVal) ) isVal = true
			}

			var strType = objComp.toString().toUpperCase();

			//trace("setCompProp() strType : " + strType + " objComp.id : " + objComp.id + " objComp.readonlyComp : " + objComp.readonlyComp);

			switch(strType)
			{
				case "[OBJECT BUTTON]" :
				case "[OBJECT CHECKBOXSET]" :
				case "[OBJECT CHECKBOX]" :
				case "[OBJECT RADIO]" :
					if( objComp.skipComp != "Y")
					{
						if( !Ex.isEmpty(objComp.readonlyComp) && objComp.readonlyComp == "Y") objComp.set_enable(false);
						else objComp.set_enable(isVal);
					}
					break;

				case "[OBJECT COMBO]" :
				case "[OBJECT CALENDAR]" :
				case "[OBJECT EDIT]" :
				case "[OBJECT MASKEDIT]" :
				case "[OBJECT TEXTAREA]" :
				case "[OBJECT SPIN]" :
 				case "[OBJECT GRID]" :
					if( objComp.skipComp != "Y")
					{
						if( !Ex.isEmpty(objComp.readonlyComp) && objComp.readonlyComp == "Y") objComp.set_readonly(true);
						else objComp.set_readonly(!isVal);
					}
					break;
				/*
				case "[OBJECT GRID]" :
					if( objComp.skipComp != "Y")
					{
						objComp.set_readonly(!isVal);
					}
					
					if(!objComp._edittype)
					{
						var bindDs = objComp.getBindDataset();
						var orgFmtId = objComp.formatid;
						objComp.setBindDataset(undefined);
						
						var formEdittypeArr = new Array();
						
						//trace("objComp.getFormatIdList().length ===> "+ objComp.getFormatIdList().length);
						for(var i=0; i<objComp.getFormatIdList().length; i++)
						{
							var lFmtId = objComp.getFormatIdList()[i];
							trace("fmtId = " + lFmtId);
							
							objComp.set_formatid(lFmtId);
							
							var cellEdittypeArr = new Array();
							
							for(var j=0; j<objComp.getCellCount("body"); j++)
							{
								cellEdittypeArr.push(objComp.getCellProperty("body", j, "edittype"));
							}
							//trace("fmtId = " + lFmtId + " cellEdittypeArr.length : " + cellEdittypeArr.length);
							formEdittypeArr.push(cellEdittypeArr);
						}
						
						//trace("formEdittypeArr.length : " + formEdittypeArr.length);
						objComp._edittype = formEdittypeArr;
						
						objComp.setBindDataset(bindDs);
						objComp.set_formatid(orgFmtId);
					}
					
					var forIdx;
					for(var i=0; i<objComp.getFormatIdList().length; i++)
					{
						if(objComp.formatid == objComp.getFormatIdList()[i])
						{
							forIdx = i;
							break;
						}
					}
					
					if( objComp.skipComp != "Y")
					{
						if( !Ex.isEmpty(objComp.readonlyComp) && objComp.readonlyComp == "Y")
						{
							for(var i=0; i<objComp.getCellCount("body"); i++)
							{
								objComp.setCellProperty("Body", i, "edittype", "readonly");
							}
						}
						else
						{
							if(!isVal)
							{
								for(var i=0; i<objComp.getCellCount("body"); i++)
								{
									objComp.setCellProperty("Body", i, "edittype", "readonly");
								}
							}
							else
							{
								for(var i=0; i<objComp.getCellCount("body"); i++)
								{
									objComp.setCellProperty("Body", i, "edittype", objComp._edittype[forIdx][i]);
								}
							}
						}
					}
					break;
					*/
				/*
				case "[OBJECT DIV]" :
				case "[OBJECT TABPPAGE]" :
					trace("Ex.util.setCompProp() [OBJECT DIV] [OBJECT TABPPAGE] objComp.id:[" + objComp.id + "]");
					objComp.set_enable(isVal);
					break;
				*/
			}
		},
		/**
		  * 상위 form을 return한다.
		  * @param scope 상위 form을 찾을 현재 scope
		  * @return form
		  * @description 
		  * 호출 시 layer 상위로 타고올라가면서 가장 먼저 발견된 form을 return한다.
		  * @example
		  *  Ex.util.getParentForm(this);
		  * @memberOf Ex.util
		  **/
		getParentForm : function(scope)
		{
			if(Ex.isEmpty(scope)) {
				return;
			}
			var sParent = scope.parent;
			while( sParent.toString().toUpperCase() != '[OBJECT FORM]' || sParent.name == 'form') {
				sParent = sParent.parent;
			}
			return sParent;
		},
		/**
		 * 유일한 ID 를 반환
		 * @public
		 * @param {string=} prefix id 앞에 붙일 문자열
		 * @param {string=} separator id 생성시 구분용 문자(default: '-' ).
		 * @return {string} id
		 * @example
		 *
		 * trace(Ex.getUniqueId()); 
		 * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
		 * 
		 * trace(Ex.getUniqueId("Button_")); 
		 * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
		 * 
		 * trace(Ex.getUniqueId("", "_")); 
		 * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
		 * 
		 * trace(Ex.getUniqueId("Button_", "_")); 
		 * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
		 * 
		 * @memberOf Eco
		 */
		getUniqueId : function(prefix, separator)
		{
			if ( Ex.isEmpty(prefix) ) prefix = "";
			if ( Ex.isEmpty(separator) ) {
				separator = 45;
			} else {
				separator = separator.charCodeAt(0);
			}
			
			var charcode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
			var seq = 0;
			var seq0;
			var tmpArray = new Array(16);
			var idx = -1;
			
			while (seq < 4) 
			{
				tmpArray[++idx] = charcode[Math.random() * 16 | 0];
				seq++;
			}
			seq = 0;
			while (seq < 3) 
			{
				tmpArray[++idx] = separator;	//45 => "-", 95=> "_"
				seq0 = 0;
				while (seq0 < 4) 
				{
					tmpArray[++idx] = charcode[Math.random() * 16  | 0];
					seq0++;
				}
				seq++;
			}
			//tmpArray[++idx] = separator; //45 => "-", 95=> "_"
			// 끝에서 12자리을 random으로 처리하면 속도가 좀더 개선됨(10만건 생성 약 0.8초 ==> chrome)
			
			//var tmpStr = (new Date()).getTime();
			//tmpStr = ("000" + tmpStr.toString(8)).substr(-8);
			//trace("prefix : " + prefix);
			//trace("tmpArray : " + tmpArray);
			return nexacro.replaceAll((prefix + String.fromCharCode.apply(null, tmpArray)), "", "");
		},
		downloadTemplateFiles : function(scope, zipFileNm, fileKey1, fileKey2, fileKey3, fileKey4, fileKey5)
		{
			if(!scope.isValidObject("_dsFileDownCond"))
			{
				//input Dataset 생성
				var dsCondObj = new Dataset;
				dsCondObj.set_name("_dsFileDownCond");
				scope.addChild("_dsFileDownCond", dsCondObj);

				dsCondObj.addColumn("ZIP_FILE_NM", "STRING", 256);
				dsCondObj.addColumn("EXT_COL_1", "STRING", 256);
				dsCondObj.addColumn("EXT_COL_2", "STRING", 256);
				dsCondObj.addColumn("EXT_COL_3", "STRING", 256);
				dsCondObj.addColumn("EXT_COL_4", "STRING", 256);
				dsCondObj.addColumn("EXT_COL_5", "STRING", 256);
			}

			scope._dsFileDownCond.clearData();
			var aRow = scope._dsFileDownCond.addRow();
			scope._dsFileDownCond.setColumn(aRow, "ZIP_FILE_NM", zipFileNm);
			scope._dsFileDownCond.setColumn(aRow, "EXT_COL_1", fileKey1);
			scope._dsFileDownCond.setColumn(aRow, "EXT_COL_2", fileKey2);
			scope._dsFileDownCond.setColumn(aRow, "EXT_COL_3", fileKey3);
			scope._dsFileDownCond.setColumn(aRow, "EXT_COL_4", fileKey4);
			scope._dsFileDownCond.setColumn(aRow, "EXT_COL_5", fileKey5);

			if(!scope.isValidObject("_dsDownFommFile"))
			{
				//output Dataset 생성
				var dsFileDownObj = new Dataset;
				dsFileDownObj.set_name("_dsDownFommFile");
				scope.addChild("_dsDownFommFile", dsFileDownObj);
			}

			var sTranId = "selectDownFileList";				// transaction 서비스 실행 ID / 콜백에서 수신할 서비스ID
			var sService = "FommMultipart/selectFileList";	// 서비스명
			var sInDs = "dsCond=_dsFileDownCond";			// 서버로 전송할 데이타셋 @ParamDataSet 인자와 맵핑됨
			var sOutDs = "_dsDownFommFile=dsFommFile";		// 서버에서 수신할 데이타셋
			var sArg = "";									// 서버 @ParamVariable 인자와 맵핑됨
			Ex.core.tran(scope, sTranId, sService, sInDs, sOutDs, sArg, "_fnDownFileSearchCallBack");
		},
		saveScreenPDF : function(scope, objComp, strFileName)
		{
			if( Ex.isEmpty(scope) || Ex.isEmpty(objComp) ) return;
			
			if( Ex.isEmpty(strFileName) ) strFileName = "화면캡쳐_" + Ex.util.todayTime();

			if(strFileName.indexOf(".pdf") == -1) strFileName += ".pdf";

			var ele = document.getElementById(objComp.getElement().handle.id);
			trace("ele : " + ele + " strFileName : " + strFileName);
			if (!ele) {
				trace('ele is not exist.')
				return false
			}			
			
			// pdf 저장시 bottom 200px 추가하여 여유주기
			var htmlHeight = objComp.getOffsetHeight() + 200;
			document.body.style.height = htmlHeight + 'px';

			html2canvas(ele)
			//.then(function(canvas) {
			.then(canvas => {
				scope.setWaitCursor(true);
				var imgData = canvas.toDataURL('imgage/png');
				//297 * 210
				//var imgWidth = 210;
				//var pageHeight = imgWidth * 1.414;
				var imgWidth = 297;
				var pageHeight = imgWidth * 0.707;
				
				var imgHeight = canvas.height * imgWidth / canvas.width;
				console.log("imgHeight : " + imgHeight);
				var heightLeft = imgHeight;
				var doc = new jsPDF('l','mm', 'a4');
				var position = 0;
				
				doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
				heightLeft -= pageHeight;
				
				while(heightLeft >= 20)
				{
					position = heightLeft - imgHeight;
					doc.addPage();
					doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
					heightLeft -= pageHeight;
				}
				doc.save(strFileName);
				scope.setWaitCursor(false);
			});
		},
		saveToBase64Img : function(scope, objComp, imgViewObj)
		{
			var formObj = objComp;
			var objDragImage;
			
			if( !Ex.isEmpty(imgViewObj) )
			{
				objDragImage = imgViewObj;
				objDragImage.image = "";
				//objDragImage.visible = false;
			}

			var orgBackGround = formObj.background;
			formObj.background = "#ffffff";

			var nLeft 	= formObj.getOffsetLeft();
			var nTop 	= formObj.getOffsetTop();
			var nWidth 	= formObj.getOffsetWidth();
			var nHeight = formObj.getOffsetHeight();
			
			var ele = document.getElementById(formObj.getElement().handle.id);
	
			if (!ele)
			{
				trace('ele is not exist.')
				return false
			}

			html2canvas(ele, 
			{
				onrendered : function(canvas) { //전체 화면 캡쳐
					 // 선택 영역만큼 crop
					//trace("nLeft : " + nLeft + " nTop : " + nTop + " nWidth : " + nWidth + " nHeight : " + nHeight);
					var img = canvas.getContext('2d').getImageData(nLeft, nTop, nWidth, nHeight);
					//trace("img : " + img);
					var objCanvas = document.createElement("canvas");
					objCanvas.width = nWidth;
					objCanvas.height = nHeight;
					objCanvas.getContext('2d').putImageData(img, 0, 0);
				
					var dataURI = objCanvas.toDataURL('image/jpeg'); //Image 코드로 가져오기(image 추가)
					//trace(dataURI);
					//html2canvas 안에서 비동기 처리되기 떄문에 이미지의 크기 변경, visible을 이미지 변경 후 차례대로 진행되도록 함
					if( !Ex.isEmpty(objDragImage) )
					{
						objDragImage.image = dataURI;
						//objDragImage.visible = true;
					}

					formObj.background = orgBackGround;

					if( Ex.isEmpty(objDragImage) )
					{
						return dataURI;
					}
				}
			});
		},
		//클립보드로 data를 복사해준다.
		copyClipBoard : function(contents)
		{
			if(navigator.clipboard !== undefined)
			{
				trace("[copy] contents=>" + contents);
				navigator.clipboard.writeText(contents);
			}
			else
			{
				var t = document.createElement("textarea");
				document.body.appendChild(t);
											
				t.value = contents;
				t.select();
				document.execCommand("copy");
				document.body.removeChild(t);
			}
		},
// 		pasteClipBoard : function()
// 		{	
// 			var t = document.createElement("textarea");
// 			document.body.appendChild(t);
// 			
// 			t.focus();
// 			t.select();
// 			var isPaste = document.execCommand("paste");
// 			var pasteText = t.value;
// 			trace("isPaste : " + isPaste + " pasteText ::::::::::::>>>>> " + pasteText);
// 			document.body.removeChild(t);
// 			return pasteText;			
//		},
		//문자열 camelCase로 변경
		toCamelCase : function(str)
		{
			return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
		},
		isExistScrn : function(scrnFilePath)
		{
			if( !Ex.isEmpty(scrnFilePath) )
			{
				scrnFilePath	= nexacro.replaceAll(scrnFilePath, "::", "/");
				scrnFilePath = nexacro.getProjectPath() + scrnFilePath + ".js";
				trace("scrnFilePath:[" + scrnFilePath + "]");

				var xhr = new XMLHttpRequest();
				xhr.open('HEAD', scrnFilePath, false);
				xhr.send();

				if (xhr.status == "404")
				{
					console.log("[" + scrnFilePath + "] 파일이 존재하지 않습니다.");
					return false;
				}
				else
				{
					console.log("[" + scrnFilePath + "] 파일이 존재합니다.");
					return true;
				}
			}
			else
			{
				console.log("화면 경로가 빈값입니다.");
				return false;
			}
		},
		/**
		  * 호출한 화면이 work화면이면 fomm_menu_mt의 menu_param_cd를 return한다.
		  * @param {object} 호출 scope
		  * @param {string} key 키값을 지정한다.
		  * @return {string||object} value값 반환 혹은 object
		  * @description 
		  *  키값이 null이면 전체 객체를 반환한다.
		  * @example
		  *  var rtn = Ex.util.getScreenInfo();		// type of rtn == object
		  *  var rtn = Ex.util.getScreenInfo('gvEmpno');	// type of rtn ==
		  * @memberOf Ex.util
		  **/
		getScreenInfo : function(scope, key)
		{
			if( Ex.isEmpty(scope) ) {
				trace('scope를 지정해 주세요');
				return;
			}
			
			if( !Ex.util.getWorkArea(scope) ) {
				trace('work화면이 아닙니다');
				return;
			}
			
			var rtn;
			if( Ex.isEmpty(key) )
				rtn = scope.parent.parent.parent.info;
			else
				rtn = scope.parent.parent.parent.info[key]||'';
				
			return rtn;
		},
		callParentSizeChangeComplete : function(scope, funcNm, compId)
		{
			trace("Ex.util.callParentSizeChangeComplete() scope.id:[" + scope.id + "] compId:[" + compId + "]");

			var chkCnt = 0;

			while(scope)
			{
				//trace("callScrnId:[" + callScrnId + "] Ex.util.callParentSizeChangeComplete() while chkCnt : " + chkCnt);
				scope = scope.parent;

				if(scope)
				{
					var func = scope[funcNm];

					if(func)
					{
						func(scope, compId);
						return;
					}
				}
				if(chkCnt == 10) return;
				chkCnt++;
			}
		},
		getWfReqTmplatListDs : function(scope, outDsNm)
		{
			nexacro.getApplication().gdsSvcInfo.clearData();
			var aRow = nexacro.getApplication().gdsSvcInfo.addRow();
			nexacro.getApplication().gdsSvcInfo.setColumn(aRow, "SVC_NM", "wf/WF0120W/selectWfReqTmplatAll");
			nexacro.getApplication().gdsSvcInfo.setColumn(aRow, "OUT_DS", outDsNm);
			Ex.core.callByDsService(scope, "selectWfReqTmplatAll");
		},
		callJasperReport : function(scope, webBComp, connNm, fileNm, dsParam)
		{
			var reportUrl = nexacro.getEnvironment().services["svc_url"].url + "jasperReport/viewer?";
			reportUrl += "CONN_NM="+encodeURIComponent(connNm);
			reportUrl += "&FILE_NM="+encodeURIComponent(fileNm);
			
			for(var i=0; i<dsParam.rowcount; i++)
			{
				if( !Ex.isEmpty(dsParam.getColumn(i, "PARAM_VAL")) )
				{
					reportUrl += "&" + dsParam.getColumn(i, "PARAM_NM") + "=" + encodeURIComponent(dsParam.getColumn(i, "PARAM_VAL"));
				}
			}
			webBComp.set_url(reportUrl);
		},
		jqueryID : function(objID)
		{
			var generateID = "";
			var prtID = objID;
			var i = 0;
			var mainFrm = nexacro.getApplication().mainframe;
			
			while(prtID != mainFrm)
			{
				if(prtID.toString() == "[object Form]")
				{
					generateID = "form." + generateID;
				}
				else
				{
					generateID = prtID.name + ((generateID != "") ? "." : "") + generateID;
				}
				i++;
				prtID = prtID.parent;
			}
			var reGenerateID = nexacro.replaceAll(generateID, ".", "\\.");
			return "#mainframe\\." + reGenerateID;			
		},
		setAutoComplete : function(objComp, value)
		{
			// set autocomplete on 
			var jQueryComp = $(Ex.util.jqueryID(objComp));
			trace('jQueryComp id ::: ' + jQueryComp.attr('id'));
			var jQueryCb = jQueryComp.children('input');
			jQueryCb.attr("autocomplete", "on");
			jQueryCb.attr("list", "autofillList");
			
			
			if(Ex.isEmpty(objComp) ) {
				trace('setAutoComplete >> objComp null');
				return;
			}
			
			if( objComp.toString().toUpperCase() != '[OBJECT EDIT]' ) {
				trace('setAutoComplete >> not object edit');
				return;
			}
			
			
			var MAX_AUTO_SIZE = 5;
			
			var sUserId = Ex.util.getSession('gvUserId');
			var strKey = "AUTOCOMPLETE&USER_ID=" + sUserId;
				strKey+= "&COMP_ID=" + jQueryComp.attr('id');
				
			// org value
			var orgValue = nexacro.getPrivateProfile(strKey);
			var arrOrgValue = [];
			if( !Ex.isEmpty(orgValue) )
				arrOrgValue = orgValue.split(',');
			
			// newvalue
			if( !Ex.isEmpty(value) )
			{
				var idx = arrOrgValue.indexOf(value);
				if( idx >= 0 )
				{	
					// 기존에 있는 값이면
					arrOrgValue.splice(idx, 1);
					arrOrgValue.unshift(value);
				}
				else
				{
					// 신규 값이면
					arrOrgValue.unshift(value);
					if( arrOrgValue.length > MAX_AUTO_SIZE ) {
						arrOrgValue.pop();
					}
				}
			}
			
			// set autocomplete datalist
			var oDatalist = jQueryComp.children('datalist');
			if( !Ex.isEmpty(oDatalist) ) {
				jQueryComp.remove('autofillList');
			}
			var sDatalist = '<datalist id="autofillList">';
			for(var i = 0; i < arrOrgValue.length; i++) {
				sDatalist+= '<option value="' + arrOrgValue[i] + '"/>';
			}
			sDatalist += '</datalist>';
			jQueryCb.after(sDatalist);
			
			// set local storage
			var newValue = arrOrgValue.toString();
			nexacro.setPrivateProfile(strKey, newValue);
		},
		
		// sPassWd : validation check할 비밀번호
		// sExcptPw : 예외 처리할 비밀번호(문자열)
		// 영문 대/소문자, 숫자, 특수문자, 8자 이상
		validatePw : function(sPassWd, sExcptPw)
		{
			trace('validatePw >> sPassWd :: ' + sPassWd + '  sExcptPw :: ' + sExcptPw);
			if( !Ex.isEmpty(sExcptPw) ) {
				if( sPassWd == sExcptPw )
					return true;
			}
				
			//var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
			var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
			if( !regex.test(sPassWd) )
				return false;
			
			// 연속된 문자, 숫자 4자리 포함 확인
			var o = 0;
			var d = 0;
			var p = 0;
			var n = 0;
			var limit = 4;
			for(var i = 0; i < sPassWd.length; i++) {
				var tmpVal = sPassWd.charAt(i);
				if( i > 0 && (p = o - tmpVal) > -2 && (n = p == d? n+1 : 0) > limit - 3 ) {
					return false;
				}
				d = p;
				o = tmpVal;
			}
			
			
			return true;
		}
	};