package com.base.fwk.util;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Calendar;
import java.util.UUID;
import org.apache.commons.lang3.StringUtils;

public class FileUtil {

	// 신규 File Name 만드는 함수
	public String getNewFileName(String orgFileName) {
		String newFileName;

		// 현재 날짜 구함
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String datetime1 = sdf1.format(cal.getTime());

		// 신규 File 유일성 보장을 위하여 UUID 구함
		UUID uid = UUID.randomUUID();

		// 확장자
		String ext = "";

		if (orgFileName.lastIndexOf(".") >= 0) {
			ext = orgFileName.substring(orgFileName.lastIndexOf(".") + 1, orgFileName.length());
		}
		// 실제 물리적 저장 신규 File Name
		newFileName = uid.toString() + "-" + datetime1 + "." + ext;
		return newFileName;
	}

	// path를 validation 함수(Path Manipulation)
	public static String cleanString(String aString) {
		if (aString == null || "".equals(aString)) {
			return null;
		}

		if (aString.indexOf("..") > -1) {
			return null;
		}

		if (aString.indexOf("//") > -1) {
			return null;
		}

		String cleanString = "";
		for (int i = 0; i < aString.length(); i++) {
			cleanString += cleanChar(aString.charAt(i));
		}
		return cleanString;
	}

	private static char cleanChar(char aChar) {
		// 0-9
		for (int i = 48; i < 58; ++i) {
			if (aChar == i) {
				return (char) i;
			}
		}

		// 'A'-'Z'
		for (int i = 65; i < 91; ++i) {
			if (aChar == i) {
				return (char) i;
			}
		}

		// 'a'-'z'
		for (int i = 97; i < 123; ++i) {
			if (aChar == i) {
				return (char) i;
			}
		}

		// other valid characters
		return getSpecialLetter(aChar);
	}

	public static char getSpecialLetter(char aChar) {

		switch(aChar) {
			case '/' :
				return '/';
			case '.' :
				return '.';
			case '-' :
				return '-';
			case '_' :
				return '_';
			case ' ' :
				return ' ';
			case ':' :
				return ':';
			case '&' :
				return '&';
			default :
				return '%';
		}
	}

	// 파일 확장자 검사(문제없는 파일 확장자는 true)
	public boolean isCheckFileExtension(String originFileName) {
		boolean chk = true;
	
		//blacklist 확장자
		final String[] blackExtensions = {"exe", "bat", "sh", "java", "jsp", "html", "js", "css", "xml"};
	
		//whitelist 확장자
		final String[] whiteExtensions = {"hwp", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "png", "pdf", "jpg", "jpeg", "gif", "bmp", "zip", "7z", "mp4", "dwg"};
	
		//파일명 : trim, 소문자변환, 공백제거
		String fileName = originFileName.trim().toLowerCase().replaceAll(" ", "");
	
		//파일확장자
		String fileExtension = StringUtils.substring(fileName, fileName.lastIndexOf(".") + 1, fileName.length());
	
		//blacklist 포함된 확장자면 false
		if(Arrays.asList(blackExtensions).contains(fileExtension)) {
			chk = false;
		}
	
		//whitelist 미포함된 확장자면 false
		if(!Arrays.asList(whiteExtensions).contains(fileExtension)) {
			chk = false;
		}
		return chk;
	}

	// 이미지 파일 확장자 검사(문제없는 파일 확장자는 true)
	public boolean isCheckFileExtensionByImage(String originFileName) {
		boolean chk = true;

		// whitelist 확장자
		final String[] whiteExtensions = { "jpg", "jpeg", "gif", "png", "bmp" };

		// 파일명 : trim, 소문자변환, 공백제거
		String fileName = originFileName.trim().toLowerCase().replaceAll(" ", "");

		// 파일확장자
		String fileExtension = StringUtils.substring(fileName, fileName.lastIndexOf(".") + 1, fileName.length());

		// whitelist 미포함된 확장자면 false
		if (!Arrays.asList(whiteExtensions).contains(fileExtension)) {
			chk = false;
		}
		return chk;
	}
	
	
	// filename용 UUID
	public String getRandFileName() {
		// UUID
        return UUID.randomUUID().toString();
	}
	
	
	// YYYYMMDD return
	public String getYYYYMMDD() {
		// 현재시간 구하기
        LocalDate now = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        return now.format(formatter);
	}
	
	// yyyyMMddHHmmss return
	public String getTimestamp() {
		// 현재시간 구하기
		LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
        return now.format(formatter);
	}
}