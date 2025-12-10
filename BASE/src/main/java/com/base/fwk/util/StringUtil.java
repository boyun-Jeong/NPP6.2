package com.base.fwk.util;

import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.support.JdbcUtils;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.base.sr.web.SRCommController;

public class StringUtil extends StringUtils {

	private static Logger log = LoggerFactory.getLogger(SRCommController.class);
	
    /**
     * XSS처리되어있는 문자열을 복구한다.
     * RequestWrapper.java cleanXSS 기준
     * @param str
     * @return
     */
    public static String replaceXSS(String str) {
    	//XSS처리되는 문자열을 복구한다. (RIMS 데이터 입력용)
    	if(str == null){
    		return "";
    	}
    	str = str.replaceAll("&amp;", "&");
    	str = str.replaceAll("&lt;", "<");
    	str = str.replaceAll("&gt;", ">");
    	str = str.replaceAll("&quot;", "\"");
    	str = str.replaceAll("&#34;", "\"");
    	str = str.replaceAll("&#39;", "\'");
    	str = str.replaceAll("&#37;", "%");
    	
	    return str;
	}

	//null 일 때 빈문자열을 돌려준다
	public static String safe(Object obj) {
		if(obj != null) {
			return obj.toString();
		}else {
			return "";
		}
	}
	
	//null 일 때 0 반환
	public static int safeInt(Object obj) {
		if(obj != null && obj.toString().length() > 0) {
			if(ValidationUtil.isNumText(obj.toString())) {
				return Integer.parseInt(obj.toString());
			}else {
				return 0;
			}
		}else {
			return 0;
		}
	}

	//null 일 때 지정된 숫자 반환
	public static int safeInt(Object obj, int defaultNum) {
		if(obj != null && obj.toString().length() > 0) {
			if(ValidationUtil.isNumText(obj.toString())) {
				return Integer.parseInt(obj.toString());
			}else {
				return defaultNum;
			}
		}else {
			return defaultNum;
		}
	}

	//null 일 때 빈무자열을 돌려준다
	public static String safe(Object obj, String defaultString) {
		if(obj != null && obj != "null" && obj.toString().length() > 0) {
			return obj.toString();
		}else {
			return defaultString;
		}
	}

	//null일 때 빈문자열을 돌려준다. 빈무자열이 아니면 trim한다.
	public static String safeTrim(Object obj) {
		if(obj != null) {
			return obj.toString().trim();
		}else {
			return "";
		}
	}
	
	//객체가 확실이 null 아닌지 확인한다. not null과 빈 문자열이 아닌 경우에만 true를 리턴한다
	public static boolean safeNotNull(Object obj) {
		if(obj != null && obj.toString().length() > 0) {
			return true;
		}else {
			return false;
		}
	}
	
	//문자열이 확실히 null인지 확인한다. null 또는 빈 문자열인지 판단한다.
	public static boolean safeNull(Object obj) {
		if(obj == null || obj.toString().length() == 0) {
			return true;
		}else {
			return false;
		}
	}
	
	public static String camelToDbStyle(String str) {
//		String regex = "([a-z])([A-Z])";
//		String replacement = "$1_$2";
//		return str.replaceAll(regex, replacement).toUpperCase();
		return JdbcUtils.convertUnderscoreNameToPropertyName(str);
	}

	public static String replaceLast(String string, String toReplace, String replacement) {
		
		int pos = string.lastIndexOf(toReplace);
		
		if(pos > -1) {
			return string.substring(0, pos) + replacement + string.substring(pos + toReplace.length(), string.length());
		}else {
			return string;
		}
	}
	
	public static String lpad(String str, int length, char prefix) {
		StringBuffer stringBuffer = null;
		if(!"".equals(StringUtil.safe(str))) {
			int strLength = str.length();
	
			if(strLength > length) {
				return str.substring(0, length);
			}else if(strLength == length) {
				return str;
			}else {
				int lpadLength = length - strLength;
				stringBuffer = new StringBuffer();
	
				for(int i=0; i<lpadLength; i++) {
					stringBuffer.append(prefix);
				}
				stringBuffer.append(str);
				return stringBuffer.toString();
			}
		}
	
		stringBuffer = new StringBuffer();
	
		for(int i=0; i<length; i++) {
			stringBuffer.append(prefix);
		}
		return stringBuffer.toString();
	}
	
	public static int objectToInt(Object obj) {
		return Integer.parseInt(String.valueOf(obj));
	}
	
	public static double objectToDouble(Object obj) {
		return Double.parseDouble(String.valueOf(obj));
	}
	
	//최소,초대 길이를 받아서 랜덤으로 숫자,영문형태의 비밀번호를 자동으로 생성하여 리턴한다. 금지어가 존재시 만족할 때까지 재생성시도 한다.
	public static String getRandomPassword(int minLen, int maxLen, ArrayList skipPwd) {
		//길이 : 10~12자리 숫자와 문자 조합 이름, 메일, 사번 동일 사용 금지 특수문자 ' , +, |, <, >, %, & 사용
		//금지 : 가장 최근에 사용했던 비밀번호 2개까지 사용 금지 비밀번호 사용금지 단어 : skhynix, admin
		//길이 : 10~12자리
		int max = StringUtil.safeInt(maxLen, 12);
		int min = StringUtil.safeInt(minLen, 10);
		
		SecureRandom random = new SecureRandom();
		int pwdlen = random.nextInt((max - min) + 1) + min;
		
		//영문과 숫자만 가능 : 숫자와 문자 조합, 특수문자 ', +, |, <, >, %, & 사용 금지
		char[] charaters = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',};
		
		StringBuilder sb = new StringBuilder("");
		SecureRandom rn = new SecureRandom();
		
		for(int i=0; i<pwdlen; i++) {
			int nextInt = rn.nextInt(charaters.length);
			if(nextInt < 0) return "";			
			sb.append(charaters[nextInt]);
		}
		
		//랜덤생성 패스워드
		String tmpPwd = sb.toString();
		
		for(int i=0; i<(skipPwd).size(); i++) {
			if(StringUtil.safeNull(skipPwd.get(i))) continue;
		
			if(tmpPwd.indexOf(StringUtil.safe(skipPwd.get(i))) >-1) {
				return getRandomPassword(min, max, skipPwd); //재귀호출
			}
		}
		return tmpPwd;
	}

	//Header를 validation 함수
	public static String cleanString(String aString) {
		String cleanString = "";
		cleanString = aString.replaceAll("\r", "").replaceAll("\n", "").replaceAll(":", "").replaceAll("=", "");
		return cleanString;
	}

	//XSS SCRIPTING 필터처리
	public static String cleanXSS(String value) {
		return "";
	}
	
	//문자열이 알파벳만 존재하는지 체크
	public static boolean isAlpha(String s)
    {
        if (s == null)return false;
 
        for (int i = 0; i < s.length(); i++)
        {
            char c = s.charAt(i);
            if (!(c >= 'A' && c <= 'Z') && !(c >= 'a' && c <= 'z')) return false;
        }
        return true;
    }

	//문자열이 숫자만 존재하는지 체크
	public static boolean isNumeric(String s) {
        return s.chars().allMatch(Character::isDigit);
    }
	
	public static boolean isJSON(String text) {
		
		try {
			new org.json.JSONObject(text);
		}catch(JSONException ex1) {
			try {
				new org.json.JSONArray(text);
			}catch(JSONException ex2) {
				return false;
			}
		}
		return true;
	}
	
	/**
     * <PRE>
     * JSON 문자열을 HashMap, List 객체로 변경 함.
     *
     * </PRE>
     *
     * @param [ String ] strJSonStream : Json 문자열
     * @return Object
     */
    public static Object getJsonToObj(String strJSonStream) {

        Object obj = null;
        obj = JSONValue.parse(strJSonStream);

        if (obj.getClass() == org.json.simple.JSONArray.class) {
            obj = getJSONArrayToList((JSONArray) obj);
        } else if (obj.getClass() == org.json.simple.JSONObject.class) {
            obj = getJSONObjectToHashMap((JSONObject) obj);
        } else {
            return null;
        }
        return obj;
    }
    
    // 내부함수
    // HashMap, List 객체를 JSON 문자열로 변경 함.
    private static List getJSONArrayToList(JSONArray jsonArray) {

        List lObject = new ArrayList();
        int nJsonArray = jsonArray.size();
        Object obj = null;

        for (int i = 0; i < nJsonArray; i++) {

            obj = jsonArray.get(i);

            if (obj.getClass() == org.json.simple.JSONArray.class) {
                lObject.add(getJSONArrayToList((JSONArray) obj));
            } else if (obj.getClass() == org.json.simple.JSONObject.class) {
                lObject.add(getJSONObjectToHashMap((JSONObject) obj));
            } else {
                lObject.add(obj);
            }
        }
        return lObject;
    }

    // 내부함수
    // HashMap, List 객체를 JSON 문자열로 변경 함.
    private static HashMap getJSONObjectToHashMap(JSONObject jsonObject) {

        HashMap ehmObject = new HashMap();

        Set key = jsonObject.entrySet();
        Iterator it = key.iterator();
        Object obj = null;
        Object obj2 = null;
        Map.Entry hmEnt = null;
        String strEntKey = null;

        while (it.hasNext()) {

            obj2 = it.next();

            hmEnt = (Map.Entry) obj2;
            strEntKey = hmEnt.getKey().toString();

            obj = hmEnt.getValue();

            if (obj2 == null || obj == null) {
                ehmObject.put(strEntKey, null);

            } else if (obj.getClass() == org.json.simple.JSONArray.class) {
                ehmObject.put(strEntKey, getJSONArrayToList((JSONArray) obj));

            } else if (obj.getClass() == org.json.simple.JSONObject.class) {
                ehmObject.put(strEntKey, getJSONObjectToHashMap((JSONObject) obj));

            } else {
                ehmObject.put(strEntKey, hmEnt.getValue());
            }
        }
        return ehmObject;
    }

    //Map에 들어있는 값을 GET METHOD 파리미터 형태로 변환한다.
    public static String convertMapParamString(Map<String, Object> paramMap) {
    	
    	String paramStr = "";

    	for(String paramNm : paramMap.keySet()) {
			
    		paramStr += (!"".equals(paramStr) ? "&" : "") + paramNm + "=" + paramMap.get(paramNm);
		}
    	return paramStr;
    }

    /**
     * 날짜시간 문자열을 받아 Date 객체로 반환
     * String		: 날짜시간 문자값 "20250101", "2025010101", "202501010145", "20250101014558" 등
     * boolean	: 날짜시간 문자길이가 8인 경우 즉 날짜만 넘어온 경우 해당 날짜의
     * 					  시작시간(00:00:00)을 붙여줄 것인지 마감시간(23:59:59)을 붙여줄 것인지 여부
     * 					  true : 시작시간, false : 종료시간
     * 					  (※ 단 날짜시간 문자열이 8자를 초과하는 경우는 true, false에 관계없이
     * 						   입력되어 넘어온 시간 기준에 0을 PAD처리하여 date객체로 전달
     * 						   ex) 2025010110		-> 20250101100000로 처리되어 date 객체로 리턴
     * 						   ex) 202501011053	-> 20250101105300로 처리되어 date 객체로 리턴
     */    
    public static Date getDateTimeFromString(String dateTimeStr, boolean isStartTime) {

    	Date date = null;
    	
    	if("".equals(StringUtil.safe(dateTimeStr))) {
    		return null;
    		
    	}else {
    		
    		if(dateTimeStr.length() < 8) {
    			return null;

    		}else {
    			
    			if(dateTimeStr.length() == 8) {
    				
    				if(isStartTime) {
    					dateTimeStr += "000000";
    				}else {
    					dateTimeStr += "235959";
    				}
    			}

    			String execDateTime = StringUtil.rightPad(dateTimeStr, 14, '0');
    			
//    			System.out.println("dateTimeStr:[" + dateTimeStr + "] execDateTime:[" + execDateTime + "]");
    			
    			String yyStr = execDateTime.substring(0, 4);
    			String mmStr = execDateTime.substring(4, 6);
    			String ddStr = execDateTime.substring(6, 8);
    			String hhStr = execDateTime.substring(8, 10);
    			String miStr = execDateTime.substring(10, 12);
    			String ssStr = execDateTime.substring(12, 14);
    			
//    			System.out.println("DATE STR : " + yyStr + "/" + mmStr + "/" + ddStr + "/" + hhStr + "/" + miStr + "/" + ssStr);

    			int yy = StringUtil.safeInt(yyStr) -1900;
    			int mm = StringUtil.safeInt(mmStr) - 1;
    			int dd = StringUtil.safeInt(ddStr);
    			int hh = StringUtil.safeInt(hhStr);
    			int mi = StringUtil.safeInt(miStr);
    			int ss = StringUtil.safeInt(ssStr);
    			
//    			System.out.println("DATE INT : " + yy + "/" + mm + "/" + dd + "/" + hh + "/" + mi + "/" + ss);
    			
    			date = new Date();
    			date.setYear(yy);
    			date.setMonth(mm);
    			date.setDate(dd);
    			date.setHours(hh);
    			date.setMinutes(mi);
    			date.setSeconds(ss);

    			String pattern = "yyyy-MM-dd HH:mm:ss";
    			SimpleDateFormat sdf  = new SimpleDateFormat(pattern);
    			String dateStr = sdf.format(date);

    			System.out.println("SIMPLE DATE :" + dateStr);
    		}
    	}
    	return date;
    }
    
    public static boolean isWeekEnd(Date day) {
    	
    	Calendar cal = Calendar.getInstance();
		cal.setTime(day);
		int dayNum = cal.get(Calendar.DAY_OF_WEEK);
		
		if(dayNum == 1 || dayNum == 7)	return true;
		else												return false;
    }
    
    public static DataSet getDataSetObject(String dsName, Map<String, Object> map) throws Exception {
    	if(map != null) {
    		PlatformData platformData = new PlatformData();
    		List<Map<String, Object>> list = new ArrayList<>(Arrays.asList(map));	//Map DataSet으로 등록
    		platformData.addDataSet(dsName, list);
    		DataSet ds = platformData.getDataSet(dsName);
//    		log.debug("[StringUtil] getDataSetObject() [map] dsName:[{}]\n{}", dsName, ds.saveXml());
    		return ds;
    	}else {
    		return new DataSet(dsName);
    	}
    }
    
    public static DataSet getDataSetObject(String dsName, List<Map<String, Object>> list) throws Exception {
    	if(list != null) {
	    	PlatformData platformData = new PlatformData();
	    	platformData.addDataSet(dsName, list);	//List를 DataSet으로 등록
	    	DataSet ds = platformData.getDataSet(dsName);
//    		log.debug("[StringUtil] getDataSetObject() [list] dsName:[{}]\n{}", dsName, ds.saveXml());
	    	return ds;
    	}else {
    		return new DataSet(dsName);
    	}
    }
}