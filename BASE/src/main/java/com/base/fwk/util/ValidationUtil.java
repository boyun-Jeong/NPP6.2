package com.base.fwk.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.stereotype.Component;

@Component
public class ValidationUtil {

	public static boolean isKorText(String str) {
		Pattern pattern = Pattern.compile("^[가-힣]*$");
		Matcher matcher = pattern.matcher(str);
		return matcher.matches();
	}
	
	public static boolean isApphabetText(String str) {
		Pattern pattern = Pattern.compile("^[a-zA-Z]*$");
		Matcher matcher = pattern.matcher(str);
		return matcher.matches();
	}
	
	public static boolean isNumText(String str) {
		Pattern pattern = Pattern.compile("^[0-9]*$");
		Matcher matcher = pattern.matcher(str);
		return matcher.matches();
	}
	
	public static boolean isAlphabetNumText(String str) {
		Pattern pattern = Pattern.compile("^[a-zA-Z0-9]*$");
		Matcher matcher = pattern.matcher(str);
		return matcher.matches();
	}
	
	public static boolean isValidateCode(String str) {
		Pattern pattern = Pattern.compile("^[a-zA-Z0-9[-][_][.]]*$");
		Matcher matcher = pattern.matcher(str);
		return matcher.matches();
	}
	
	public static boolean isOverByteSize(String str, int maxSize) {
		if(str.getBytes().length > maxSize) {
			return true;
		}else {
			return false;
		}
	}
}