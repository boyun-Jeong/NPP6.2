package com.base.fwk.util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import jakarta.servlet.http.HttpServletRequest;

import org.apache.ibatis.io.Resources;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.fwk.server.Constants;
import com.base.fwk.server.ServerUtil;

/**
 * 
 * <pre>
 * @title   
 * -        개발자 JAVA 기본 Template 생성 Controller
 * @package com.base.fwk.util
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 04. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 14.    정보윤	최초작성
 */
@Controller
@RequestMapping("JAVACreate")
public class JavaCreateUtil {

	private Logger log = LoggerFactory.getLogger(JavaCreateUtil.class);

	String absPath = Paths.get("").toAbsolutePath().toString().replaceAll("eclipse", "workspace") + "\\SPP\\";
	String basePath = absPath + "src\\main\\java\\com\\wemb\\spp\\";

	/**
	 * JAVA 파일 존재 여부 체크
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/check")
	public NexacroResult javaCheck(HttpServletRequest req, @ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception  
	{
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> rtnMap = new HashMap<>();
		String rtnChkMsg = "";
		
		if(!ServerUtil.isLocalServer(req)) {
			rtnMap.put("RTN_CHK_CD", -998);
			rtnChkMsg = "\n[localhost] 환경에서만 JAVA 파일 생성이 가능하므로 생성 가능 여부 체크를 실행하지 않습니다.";
			rtnMap.put("RTN_CHK_MSG", rtnChkMsg);
			
			result.addDataSet("dsChkResult", rtnMap);
			return result;
		}
		
		String pkgNm = StringUtil.safe(dsCond.get("PKG_NM"));
		String pgmId = StringUtil.safe(dsCond.get("PGM_ID"));
//		String pgmTitle = StringUtil.safe(dsCond.get("PGM_TITLE"));
//		String regUserNm = StringUtil.safe(dsCond.get("REG_USER_NM"));
//		String regDate = StringUtil.safe(dsCond.get("REG_DATE"));
		
		int rtnChkCode = 0;

		int errIdx	= 0;
		int errIdx1 = 0;
		int errIdx2 = 0;
//		int errEtc = 0;
		
		rtnMap.put("CHK_PKG_NM", pkgNm);
		rtnMap.put("CHK_PGM_ID", pgmId);

//		for (int i = 0; i < pgmId.length(); i++) {
//
//			if(pgmId.length() == 7) {
//			
//				if(i < 2) {
//	
//					if(!StringUtil.isAlpha(StringUtil.safe(pgmId.charAt(i))) && errIdx1 == 0) {
//						rtnChkCode--;
//						errIdx++;
//						errIdx1++;
//						rtnChkMsg += (errIdx > 1 ? "\n" : "") + "프로그램 ID 첫 두 글자는 업무 약어 알파벳 값만 지정 가능합니다.";
//						break;
//					}
//					
//				}else if(i < 6) {
//					
//					if(!StringUtil.isNumeric(StringUtil.safe(pgmId.charAt(i))) && errIdx2 == 0) {
//						rtnChkCode--;
//						errIdx++;
//						errIdx2++;
//						rtnChkMsg += (errIdx > 1 ? "\n" : "") + "프로그램 ID 업무 약어 이후 프로그램에 대한 일련번호를 4자리로 지정해야 합니다.";
//						break;
//					}
//				}else if(i == 6) {
//				
//					if(!StringUtil.isAlpha(StringUtil.safe(pgmId.charAt(i)))) {
//						rtnChkCode--;
//						errIdx++;
//						rtnChkMsg += (errIdx > 1 ? "\n" : "") + "프로그램 ID 첫 두 글자는 업무 약어 알파벳 값만 지정 가능합니다.";
//						break;
//					}
//				}
//
//			}else if(pgmId.length() == 9) {
//
//				log.debug("PGMID 4:[" + pgmId.substring(0, 4) + "]");
//
//				if("FOMM".equals(pgmId.substring(0, 4).toUpperCase())) {
//					
//					if(i < 4) {
//						
//						if(!StringUtil.isAlpha(StringUtil.safe(pgmId.charAt(i))) && errIdx1 == 0) {
//							rtnChkCode--;
//							errIdx++;
//							errIdx1++;
//							rtnChkMsg += (errIdx > 1 ? "\n" : "") + "프로그램 ID 첫 네 글자는 업무 약어 알파벳 값만 지정 가능합니다.";
//							break;
//						}
//						
//					}else if(i < 8) {
//						
//						if(!StringUtil.isNumeric(StringUtil.safe(pgmId.charAt(i))) && errIdx2 == 0) {
//							rtnChkCode--;
//							errIdx++;
//							errIdx2++;
//							rtnChkMsg += (errIdx > 1 ? "\n" : "") + "프로그램 ID 업무 약어 이후 프로그램에 대한 일련번호를 4자리로 지정해야 합니다.";
//							break;
//						}
//					}else if(i == 8) {
//					
//						if(!StringUtil.isAlpha(StringUtil.safe(pgmId.charAt(i)))) {
//							rtnChkCode--;
//							errIdx++;
//							rtnChkMsg += (errIdx > 1 ? "\n" : "") + "프로그램 ID 첫 네 글자는 업무 약어 알파벳 값만 지정 가능합니다.";
//							break;
//						}
//					}
//
//				}else {
//					rtnChkCode--;
//					errIdx++;
//					rtnChkMsg += (errIdx > 1 ? "\n" : "") + "생성할 파일명 길이는 7자리로 지정 해야합니다.";
//					break;
//				}
//			}
//		}
//
//		if(pgmId.length() < 7) {
//			rtnChkCode--;
//			errIdx++;
//			rtnChkMsg += (errIdx > 1 ? "\n" : "") + "생성할 파일명 길이는 7자리로 지정 해야합니다.";
//
//		}else if(pgmId.length() == 9) {
//		
//			if(!"FOMM".equals(pgmId.substring(0, 4).toUpperCase())) {
//				rtnChkCode--;
//				errIdx++;
//				rtnChkMsg += (errIdx > 1 ? "\n" : "") + "[FOMM]인 경우만 프로그램ID 9자리로 지정 가능하고 그 외에는 프로그램ID 7자리만 지정 가능합니다.";
//			}
//		}

		if(rtnChkCode < 0) {
			//log.debug("rtnChkCode:::::::::::::::::::::::::::::::::>" + rtnChkCode);
			rtnMap.put("RTN_CHK_CD", rtnChkCode);
			rtnChkMsg += "\n프로그램ID (예시) XX0010W, XX0010P, XX0010D";
			rtnChkMsg += "\nFOMM인 경우 프로그램ID (예시) FOMM0010W, FOMM0010P, FOMM0010D";
			rtnChkMsg = (!"".equals(rtnChkMsg) ? "\n" : "") + "체크 결과 프로그램 명명규칙이 올바르지 않아 파일 생성이 불가능 합니다.\n" + rtnChkMsg;
			rtnMap.put("RTN_CHK_MSG", rtnChkMsg);
			result.addDataSet("dsChkResult", rtnMap);
			return result;
		}

		int fileNoCreateCnt = 0;
		String fullPath = "";
		File file = null;
		
		String[] pathArr = new String[]{"dao", "service", "service\\impl", "web"};
		String[] fileArr = new String[]{"DAO", "Service", "ServiceImpl", "Controller"};
		
		for (int i = 0; i < 4; i++) {

			//fullPath = basePath + pkgNm.toLowerCase() + "\\" + pathArr[i] + "\\" + pgmId.toUpperCase() + fileArr[i] + ".java";
			fullPath = basePath + pkgNm.toLowerCase() + "\\" + pathArr[i] + "\\" + pgmId + fileArr[i] + ".java";
			//log.debug("fullPath:[" + fullPath + "]");
			file = new File(fullPath);

			if(file.exists()) {	//File 존재 유무 체크
				
				rtnChkMsg += (!"".equals(rtnChkMsg) ? "\n" : "") + fullPath + "은 이미 존재하는 파일입니다.";
			}else {
				rtnChkMsg += (!"".equals(rtnChkMsg) ? "\n" : "") + fullPath + "은 생성 가능 합니다.";
				fileNoCreateCnt++;
			}
		}
		
		String creMapperYn = StringUtil.safe(dsCond.get("CRE_MAPPER_YN"));
		
		if("Y".equals(creMapperYn)) {
			
			Properties properties = new Properties();
			
			String resource = "config.properties";
			Reader reader = Resources.getResourceAsReader(resource);
			properties.load(reader);
			
			String dbPath = StringUtil.safe(properties.getProperty("mapper.path"));
			
			String mapperPath = absPath + "src\\main\\resources\\mappers\\" + dbPath + "\\";
			
			System.out.println("mapperPath=[" + mapperPath + "]");
			//fullPath = mapperPath + pkgNm.toLowerCase() + "\\" + pgmId.toUpperCase() + "Mapper.xml";
			
			String mapPkgNm = pkgNm;
			if("com".equals(pkgNm)) {
				mapPkgNm = "sys";
			}
			fullPath = mapperPath + mapPkgNm.toLowerCase() + "\\" + pgmId + "Mapper.xml";
			System.out.println("fullPath=[" + fullPath + "]");
			file = new File(fullPath);

			if(file.exists()) {	//File 존재 유무 체크
				
				rtnChkMsg += (!"".equals(rtnChkMsg) ? "\n" : "") + fullPath + "은 이미 존재하는 파일입니다.";
			}else {
				rtnChkMsg += (!"".equals(rtnChkMsg) ? "\n" : "") + fullPath + "은 생성 가능 합니다.";
				fileNoCreateCnt++;
			}
		}
		
		if(fileNoCreateCnt > 0) {
			rtnMap.put("RTN_CHK_CD", 0);
			
			if(fileNoCreateCnt == 4 + ("Y".equals(creMapperYn) ? 1 : 0)) {
				if(fileNoCreateCnt == 5) {
					rtnChkMsg += "\n\n[요약] : DAO, Service, ServiceImpl, Controller, Mapper 파일 생성이 가능합니다.";
				}else if(fileNoCreateCnt == 4) {
					rtnChkMsg += "\n\n[요약] : DAO, Service, ServiceImpl, Controller 파일이 생성 가능합니다.";
				}
				
			}else {
				rtnChkMsg += "\n\n[요약] : 기 생성 파일을 제외한 일부 파일 생성이 가능합니다.";
			}
			rtnMap.put("RTN_CHK_MSG", rtnChkMsg);			
			
		}else {
			rtnMap.put("RTN_CHK_CD", -1);
			rtnChkMsg += "\n생성 가능한 파일이 없습니다.";
			rtnMap.put("RTN_CHK_MSG", rtnChkMsg);			
		}
		result.addDataSet("dsChkResult", rtnMap);

		return result;
	}

	/**
	 * JAVA 파일 생성 처리
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/proc")
	public NexacroResult javaCreate(HttpServletRequest req, @ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) throws Exception {
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> rtnMap = new HashMap<>();
		String rtnChkMsg = "";
		
		if(!ServerUtil.isLocalServer(req)) {
			rtnMap.put("RTN_CHK_CD", -999);
			rtnChkMsg = "\n[localhost] 환경에서만 JAVA 파일 생성이 가능하여 파일 생성에 실패하였습니다.";
			rtnMap.put("RTN_CHK_MSG", rtnChkMsg);
			
			result.addDataSet("dsChkResult", rtnMap);
			return result;
		}
		
		String pkgNm = StringUtil.safe(dsCond.get("PKG_NM"));
		String pgmId = StringUtil.safe(dsCond.get("PGM_ID"));
		String pgmTitle = StringUtil.safe(dsCond.get("PGM_TITLE"));
		String regUserNm = StringUtil.safe(dsCond.get("REG_USER_NM"));
		String regDate = StringUtil.safe(dsCond.get("REG_DATE"));
		String lowerPgmId = StringUtil.safe(dsCond.get("PGM_ID")).toLowerCase();
		
		String rtnMsg = "";
		
		String fullPath = "";
		File file = null;
		File folder = null;
		
		String[] pathArr = new String[]{"dao", "service", "service\\impl", "web"};
		String[] fileArr = new String[]{"DAO", "Service", "ServiceImpl", "Controller"};
		String[] fileContents = new String[]{Constants.DAO_TEMPLETE, Constants.SERVICE_TEMPLETE, Constants.SERVICEIMPL_TEMPLETE, Constants.CONTROLLER_TEMPLETE};
		
		String path = basePath;
		path += pkgNm;
		
		//log.debug("path:[" + path + "]");
		
		folder = new File(path);

		// 해당 디렉토리가 없을경우 디렉토리를 생성합니다.
		if (!folder.exists()) {
			try{
				folder.mkdir(); //폴더 생성합니다.
			    log.debug(path + "폴더 생성되었습니다.");
			}catch(Exception e) {
			    e.getStackTrace();
			}        
		}else {
			log.debug(path + "폴더는 이미 존재합니다.");
		}
		
		for (int i = 0; i < 4; i++) {

			String filePath = path + "\\" + pathArr[i];
			folder = new File(filePath);

			// 해당 디렉토리가 없을경우 디렉토리를 생성합니다.
			if (!folder.exists()) {
				try{
					folder.mkdir(); //폴더 생성합니다.
				    log.debug(filePath + "폴더 생성되었습니다.");
				}catch(Exception e) {
				    e.getStackTrace();
				}        
			}else {
				log.debug(filePath + "폴더는 이미 존재합니다.");
			}

			//fullPath = basePath + pkgNm.toLowerCase() + "\\" + pathArr[i] + "\\" + pgmId.toUpperCase() + fileArr[i] + ".java";
			fullPath = basePath + pkgNm.toLowerCase() + "\\" + pathArr[i] + "\\" + pgmId + fileArr[i] + ".java";
			//log.debug("fullPath:[" + fullPath + "]");
			file = new File(fullPath);

			if(file.exists()) {	//File 존재 유무 체크
				rtnMsg += (!"".equals(rtnMsg) ? "\n" : "") + fullPath + "은 이미 존재하여 SKIP 합니다.";
			}else {
				
				try {
					String srcText = new String(fileContents[i]);
					srcText = srcText.replaceAll("#0", pkgNm);
					srcText = srcText.replaceAll("#1", pgmId);
					srcText = srcText.replaceAll("#2", pgmTitle);
					srcText = srcText.replaceAll("#3", regUserNm);
					srcText = srcText.replaceAll("#4", regDate);
					srcText = srcText.replaceAll("#5", lowerPgmId);

					File targetFile = new File(fullPath);
					targetFile.createNewFile();

					BufferedWriter output = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(targetFile.getPath()), "UTF8"));

					output.write(srcText);
					output.close();
					rtnMsg += (!"".equals(rtnMsg) ? "\n" : "") + fullPath + "파일 생성 완료";

				} catch(UnsupportedEncodingException uee) {
					uee.printStackTrace();
					rtnMap.put("RTN_CD", -1);
					rtnMap.put("RTN_MSG", uee.getMessage());
					result.addDataSet("dsResult", rtnMap);
					return result;

				} catch(IOException ioe) {
					ioe.printStackTrace();
					rtnMap.put("RTN_CD", -2);
					rtnMap.put("RTN_MSG", ioe.getMessage());
					result.addDataSet("dsResult", rtnMap);
					return result;
				}
			}
		}

		String creMapperYn = StringUtil.safe(dsCond.get("CRE_MAPPER_YN"));
		
		if("Y".equals(creMapperYn)) {
			
			Properties properties = new Properties();
			
			String resource = "config.properties";
			Reader reader = Resources.getResourceAsReader(resource);
			properties.load(reader);
			
			String dbPath = StringUtil.safe(properties.getProperty("mapper.path"));
			
			String mapPkgNm = pkgNm;
			if("com".equals(pkgNm)) {
				mapPkgNm = "sys";
			}
			String filePath = absPath + "src\\main\\resources\\mappers\\" + dbPath + "\\" + mapPkgNm;
			folder = new File(filePath);
	
			// 해당 디렉토리가 없을경우 디렉토리를 생성합니다.
			if (!folder.exists()) {
				try{
					folder.mkdir(); //폴더 생성합니다.
				    log.debug(filePath + "폴더 생성되었습니다.");
				}catch(Exception e) {
				    e.getStackTrace();
				}        
			}else {
				log.debug(filePath + "폴더는 이미 존재합니다.");
			}
	
			//fullPath = filePath + "\\" + pgmId.toUpperCase() + "Mapper.xml";
			fullPath = filePath + "\\" + pgmId + "Mapper.xml";
			//log.debug("fullPath:[" + fullPath + "]");
			file = new File(fullPath);
	
			if(file.exists()) {	//File 존재 유무 체크
				rtnMsg += (!"".equals(rtnMsg) ? "\n" : "") + fullPath + "은 이미 존재하여 SKIP 합니다.";
			}else {
				
				try {
					String srcText = new String(Constants.MAPPER_TEMPLETE);
					srcText = srcText.replaceAll("#0", pkgNm);
					srcText = srcText.replaceAll("#1", pgmId);
	
					File targetFile = new File(fullPath);
					targetFile.createNewFile();
	
					BufferedWriter output = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(targetFile.getPath()), "UTF8"));
	
					output.write(srcText);
					output.close();
					rtnMsg += (!"".equals(rtnMsg) ? "\n" : "") + fullPath + "파일 생성 완료";
	
				} catch(UnsupportedEncodingException uee) {
					uee.printStackTrace();
					rtnMap.put("RTN_CD", -1);
					rtnMap.put("RTN_MSG", uee.getMessage());
					result.addDataSet("dsResult", rtnMap);
					return result;
	
				} catch(IOException ioe) {
					ioe.printStackTrace();
					rtnMap.put("RTN_CD", -2);
					rtnMap.put("RTN_MSG", ioe.getMessage());
					result.addDataSet("dsResult", rtnMap);
					return result;
				}
			}
		}
		
		rtnMap.put("RTN_CD", 0);
		rtnMap.put("RTN_MSG", rtnMsg);
		result.addDataSet("dsResult", rtnMap);

		return result;
	}
}