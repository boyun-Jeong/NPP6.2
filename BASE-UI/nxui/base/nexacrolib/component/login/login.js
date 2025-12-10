var user_id;
var timer_id;
var timer_cnt = 0;

var mapLogin = new Map();

function startLogin() {

	timer_cnt = 0;
	clearInterval(timer_id);

    try {
        user_id = ajaxFunction('GetLoginToken');
    } catch (e) {
		mapLogin.set('STATUS','FAIL'); 
    	return mapLogin;
    	// 프로그램이 설치되지 않은 경우
//        alert("통합인증 클라이언트 프로그램이 PC 에 설치되지 않았거나,\n잠시 후 다시 시도해 주십시요.");
    }

    if (user_id == null || user_id == "") {
        server_status = ajaxFunction("GetStatus");
/*
        if (server_status == "RETRY") {
	        alert("잠시 후 다시 통합인증을 시도해 주시기 바랍니다.");
	        return;
        }
        if (server_status == "EMERGENCY") {
	        alert("통합인증 서버에 장애가 발생하였습니다.");
	        return;
        }
        if (server_status == "OK") {
        	$("#j_username").attr("readonly", true).css("background-color", "#CCCCCC");
        	$("#password").attr("readonly", true).css("background-color", "#CCCCCC");
	        timer_id = setInterval(callAuth, 1000);
			console.log("<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+timer_id);	
        }
*/
		mapLogin.set('STATUS',server_status); 
		
    } else {
		//로그인처리
		mapLogin.set('USER_ID',ajaxFunction("GetUserID")); //사용자id
		mapLogin.set('MADW_TK',user_id); //토큰
		mapLogin.set('whocall',"MADW"); //호출 코드
    }

	return mapLogin;
}

// 통합인증을 기다리는 함수
function callAuth() {
	
    ret_isLogin = ajaxFunction("IsLogin");
//	console.log(">>>>>>>>>>>>>>>>"+ret_isLogin);
	
    if (ret_isLogin == "1") {
        // 로그인 된 사번 가져오기
        user_id = ajaxFunction("GetLoginToken");
        server_status = ajaxFunction("GetStatus");
//		clearInterval(timer_id);        

		mapLogin.set('USER_ID',ajaxFunction("GetUserID")); //사용자id
		mapLogin.set('MADW_TK',user_id); //토큰
		mapLogin.set('whocall',"MADW"); //호출 코드	
		
	}
	else if (ret_isLogin == "0") {
/* 
		if (timer_cnt >= 120) {
	   		clearInterval(timer_id);
	   	}
		timer_cnt++;
*/
  	}else if (ret_isLogin == "-1") {
		mapLogin.set('STATUS',ret_isLogin);
		
/*
		alert("통합인증을 취소하였습니다");
	    clearInterval(timer_id);
	    $("#j_username").attr("readonly", false).css("background-color", "#FFFFFF").focus();
	    $("#password").attr("readonly", false).css("background-color", "#FFFFFF");
*/

    }
	return mapLogin;
}

function ajaxFunction(uri) {
    var ajax_return;
    var ajax_url = "https://localhost:40443/" + uri;
    //var ajax_url = "http://localhost:40080/" + uri;

    $.ajax({
		url: ajax_url,
		async: false,
        timeout: 60000, // WARNING : Windows 가 sleep 에서 빠져 나올때 시간 소요됨
		type: 'GET',
		data: '',
		dataType : 'text',
		success : function(data) {
			//console.log(ajax_url + " return:" + data);
            ajax_return = data;
		},
		error: function(err) {
            console.log(ajax_url + " exception: " + err.name);
            console.error(err);
            throw err;
		}	
	});
    return ajax_return;
}
