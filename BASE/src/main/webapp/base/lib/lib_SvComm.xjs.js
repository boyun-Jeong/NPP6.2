//XJS=lib_SvComm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // include "lib::lib_SvComm.xjs";
        // 서비스관리(sv) 공통 라이브러리


        /*
         * 구성범주에 따른 div url return
         */
        this.svfnGetSubUrlFromCiType = function(CI_TYPE_CD)
        {
        	var screenUrl = '';
        	switch(CI_TYPE_CD)
        	{
        		case "10SV0000" :	screenUrl = 'sv::SV0100_D02.xfdl';	break;	// 서버
        		case "10SE0000" :	screenUrl = 'sv::SV0100_D03.xfdl';	break;	// 보안장비
        		case "10NW0000" :	screenUrl = 'sv::SV0100_D04.xfdl';	break;	// 통신장비
        		case "10NWCC00" :	screenUrl = 'sv::SV0100_D10.xfdl';	break;	// 회선
        		case "20SI0100" :	screenUrl = 'sv::SV0100_D05.xfdl';	break;	// DBMS
        		case "20SI0101" :	screenUrl = '';	break;	// 보안SW
        		case "20SI0204" :	screenUrl = 'sv::SV0100_D06.xfdl';	break;	// EAI
        		case "20SI0202" :	screenUrl = 'sv::SV0100_D07.xfdl';	break;	// WAS
        		case "20SI0201" :	screenUrl = 'sv::SV0100_D08.xfdl';	break;	// WEB
        		case "20SI0203" :	screenUrl = 'sv::SV0100_D09.xfdl';	break;	// TP
        	}

        	trace('CI_TYPE_CD :: ' + CI_TYPE_CD + ' // screenUrl :: ' + screenUrl);
        	return screenUrl;
        }

        /*
         * 구성범주에 따른 Host div 사용여부(true/false) return
         */
        this.svfnUseHost = function(CI_TYPE_CD)
        {
        	var bUseHost = false;
        	switch(CI_TYPE_CD)
        	{
        		case "10SV0000" :		// 서버
        		case "10SE0000" :		// 보안장비
        		case "10NW0000" :		// 통신장비
        		case "10NWCC00" :		// 회선
        			bUseHost = false;
        			break;

        		case "20SI0100" :		// DBMS
        		case "20SI0101" :		// 보안SW
        		case "20SI0204" :		// EAI
        		case "20SI0202" :		// WAS
        		case "20SI0201" :		// WEB
        		case "20SI0203" :		// TP/FEP
        		default :
        			bUseHost = true;
        			break;
        	}

        	trace('CI_TYPE_CD :: ' + CI_TYPE_CD + ' // bUseHost :: ' + bUseHost);
        	return bUseHost;
        }


        /*
         * 구성범주에 따른 대/중/소 분류 return
         */
        this.svfnGetClassFromCiTypeCd = function(CI_TYPE_CD)
        {
        	var rtn = {
        		  CLASS_H 	: ''
        		, CLASS_M 	: ''
        		, CLASS_ID	: ''
        	};

        	switch(CI_TYPE_CD)
        	{
        		case "10SV0000" :	// 호스트
        			rtn = {
        				  CLASS_H 	: 'H0000'	// HW	'10000000'
        				, CLASS_M 	: 'HSV00,HDS00,HBD00'	//	서버, 저장장비, 백업장비
        				, CLASS_L	: ''
        				, CLASS_D	: ''
        				, CLASS_ID	: 'HSV00'	//	서버	'10SV0000'
        			};
        			break;

        		case "10SE0000" :	// 보안장비
        			rtn = {
        				  CLASS_H 	: 'H0000'	// HW	'10000000'
        				, CLASS_M 	: 'HSD00'	// 보안장비	'10SE0000'
        				, CLASS_L	: ''
        				, CLASS_D	: ''
        				, CLASS_ID	: 'HSD00'
        			};
        			break;

        		case "10NW0000" :	// 통신장비
        			rtn = {
        				  CLASS_H 	: 'H0000'	// HW	'10000000'
        				, CLASS_M 	: 'HTD00'	// 통신장비	'10NW0000'
        				, CLASS_L	: ''
        				, CLASS_D	: ''
        				, CLASS_ID	: 'HTD00'	//	'10NW0000'
        			};
        			break;

        		case "10NWCC00" :	// 회선
        			rtn = {
        				  CLASS_H 	: 'H0000'	// HW
        				, CLASS_M 	: 'HTD00'	// 통신장비
        				, CLASS_L	: ''	// 회선
        				, CLASS_D	: ''
        				, CLASS_ID	: 'HTD00'	//
        			};
        			break;

        		case "20SI0100" :	// DBMS
        			rtn = {
        				  CLASS_H 	: 'S0000'	// SW	'20000000'
        				, CLASS_M 	: 'SSS00'	// 정보기술 SW	'20IS0000'
        				, CLASS_L	: 'SSSDB'	// DBMS SW	'20IS0100'
        				, CLASS_D	: ''	// DBMS	'20IS0101'
        				, CLASS_ID	: 'SSSDB'	// DBMS	'20IS0101'
        			};
        			break;

        		case "20SI0101" :	// 보안SW
        			rtn = {
        				  CLASS_H 	: 'S0000'	// SW	'20000000'
        				, CLASS_M 	: 'SSE00'	// 보안SW	'20IS0000'
        				, CLASS_L	: ''	//
        				, CLASS_D	: ''	//
        				, CLASS_ID	: 'SSE00'	// 보안 SW	'20IS0101'
        			};
        			break;

        		case "20SI0204" :	// EAI
        			rtn = {
        				  CLASS_H 	: 'S0000'	// SW	'20000000'
        				, CLASS_M 	: 'SSS00'	// 정보기술 SW	'20IS0000'
        				, CLASS_L	: 'SSSEA'	// 미들웨어	'20IS0200'
        				, CLASS_D	: ''	// EAI	'20IS0204'
        				, CLASS_ID	: ''	// EAI	'20IS0204'
        			};
        			break;

        		case "20SI0202" :	// WAS
        			rtn = {
        				  CLASS_H 	: 'S0000'	// SW	'20000000'
        				, CLASS_M 	: 'SSS00'	// 정보기술 SW	'20IS0000'
        				, CLASS_L	: 'SSSWA'	// 미들웨어	'20IS0200'
        				, CLASS_D	: ''	// WAS	'20IS0202'
        				, CLASS_ID	: ''	// WAS	'20IS0202'
        			};
        			break;

        		case "20SI0201" :	// WEB
        			rtn = {
        				  CLASS_H 	: 'S0000'	// SW	'20000000'
        				, CLASS_M 	: 'SSS00'	// 정보기술 SW	'20IS0000'
        				, CLASS_L	: 'SSSWE'	// 미들웨어	'20IS0200'
        				, CLASS_D	: ''	//	'20IS0201'
        				, CLASS_ID	: ''	// WEB	'20IS0201'
        			};
        			break;

        		case "20SI0203" :	// TP
        			rtn = {
        				  CLASS_H 	: 'S0000'	// SW	 '20000000'
        				, CLASS_M 	: 'SSS00'	// 정보기술 SW	'20IS0000'
        				, CLASS_L	: 'SSSWE'	// 미들웨어	'20IS0200'
        				, CLASS_D	: ''	//	'20IS0203'
        				, CLASS_ID	: 'SSSTM'	// TP 모니터	'20IS0203'
        			};
        			break;

        //		FEP 분기? > 일단 보류 240701 LJB
        // 		case "20IS0206" :	// FEP
        // 			rtn = {
        // 				  CLASS_H 	: '20000000'	// SW
        // 				, CLASS_M 	: '20IS0000'	// 정보기술 SW
        // 				, CLASS_L	: '20IS0200'	// 미들웨어
        // 				, CLASS_D	: '20IS0206'
        // 				, CLASS_ID	: '20IS0206'	// FEP
        // 			};
        // 			break;
        	}

        	return rtn;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
