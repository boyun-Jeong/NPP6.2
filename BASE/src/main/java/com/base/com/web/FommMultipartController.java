package com.base.com.web;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import org.apache.commons.codec.binary.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.io.FilenameUtils;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroFileResult;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformType;
import com.base.com.service.FommMultipartService;
//import com.base.fwk.util.DrmUtil;
import com.base.fwk.util.FileUtil;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        첨부파일 업/다운로드 Controller
 * @package com.base.com.web
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜            	변경자	내용
 * ------------------------------------------------
 * 2023. 04. 06.    WEMB	최초작성
 */
@Controller
@RequestMapping("FommMultipart")
public class FommMultipartController {

	private Logger log = LoggerFactory.getLogger(FommMultipartController.class);
	
	@Autowired
	private FommMultipartService fommMultipartSvc;
	
	@Value("#{app['file.storagePath']}")
	private String storagePath;

	/**
	 * 파일 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/selectFileList")
	public NexacroResult select01(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsFommFile =  fommMultipartSvc.selectFileList(dsCond);
		result.addDataSet("dsFommFile", dsFommFile);
		return result;
	}

	/**
	 * 파일 정보 저장
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/saveFileInfo")
	public NexacroResult saveFileInfo(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond,
													  @ParamDataSet(name = "dsFommFile") List<Map<String, Object>> dsFommFile ) throws Exception  {

		NexacroResult result = new NexacroResult();
		fommMultipartSvc.saveFileInfo(dsFommFile);
		dsFommFile = fommMultipartSvc.selectFileList(dsCond);
		result.addDataSet("dsFommFile", dsFommFile);
		return result;
	}

	/**
	 * TEMP_KEY 교체 && 파일 조회
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/replaceKeyAndSelect")
	public NexacroResult replaceKeyAndSelect(@ParamDataSet(name = "dsCond", required=false) Map<String, Object> dsCond) {

		NexacroResult result = new NexacroResult();

		String KEY_TBL	= StringUtil.safe(dsCond.get("KEY_TBL"));
		String PK1 	= StringUtil.safe(dsCond.get("PK1"));
		String PK2 	= StringUtil.safe(dsCond.get("PK2"));
		String PK3 	= StringUtil.safe(dsCond.get("PK3"));

		String[] arrTempKey = {
			StringUtil.safe(dsCond.get("TEMP_KEY_1"))
			, StringUtil.safe(dsCond.get("TEMP_KEY_2"))
		    , StringUtil.safe(dsCond.get("TEMP_KEY_3"))
		};

		fommMultipartSvc.replaceTempKey(KEY_TBL, arrTempKey, PK1, PK2, PK3);
		List<Map<String, Object>> dsFommFile =  fommMultipartSvc.selectFileList(dsCond);
		result.addDataSet("dsFommFile", dsFommFile);
		return result;
	}
	
	/** 
	 * File Upload
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping(value = "/uploadFiles")
	public NexacroResult uploadFiles(HttpServletRequest request, HttpServletResponse response) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsUploadRtn =  new ArrayList<Map<String, Object>>();

		if(!(request instanceof MultipartHttpServletRequest)) {
            result.setErrorCode(-1);
            result.setErrorMsg("-1|Not MultipartHttpServletRequest");
            return result;
        }
		request.setCharacterEncoding("UTF-8");
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

        // files..
        Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

        String fldrNm = request.getParameter("fileFolderName");
        fldrNm = java.net.URLDecoder.decode(fldrNm, "utf-8");

//        String fldrNm = request.getHeader("fileFolderName");
//        log.debug("fldrNm::::::::::::::::::::::::::::::::::::::: " + fldrNm);
        if(fldrNm == null)	fldrNm = "fomm";

        fldrNm += File.separator;

        String folderName 		= fldrNm + new FileUtil().getYYYYMMDD();
		String contextRealPath	= request.getSession().getServletContext().getRealPath("/");
		log.debug(contextRealPath);
		//String FILE_PATH = contextRealPath + storagePath + folderName + File.separator;		// org
		String FILE_PATH = storagePath + folderName + File.separator;		// NH손보 지정경로로 변경
		log.debug("filePath :: " + FILE_PATH);

        // file extention validation
		Set<String> keySet = fileMap.keySet();
        for(String name: keySet) {

        	MultipartFile multipartFile = fileMap.get(name);
        	String orgFileName = multipartFile.getOriginalFilename();
        	String ext = orgFileName.substring(orgFileName.lastIndexOf(".")+1, orgFileName.length());

        	boolean isFileValid = new FileUtil().isCheckFileExtension(orgFileName);
        	if( !isFileValid ) {
        		result.setErrorCode(-1);
                result.setErrorMsg(ext + " File is not permitted");
                return result;
        	}
        }

        // physical file upload
        for(String name: keySet) {

        	String orgFileName = "";
        	try {

	            MultipartFile multipartFile = fileMap.get(name);

	            // 원본파일명
	            orgFileName = multipartFile.getOriginalFilename();
	            log.debug("orgFileName :: " + orgFileName);

	            // 확장자
	            String ext = orgFileName.substring(orgFileName.lastIndexOf(".")+1, orgFileName.length());

	            // parent directory를 찾는다.
	            Path directory = Paths.get(FILE_PATH).toAbsolutePath().normalize();
	            Files.createDirectories(directory);

	        	// 물리파일명
	        	String FILE_SAVE_NM = new FileUtil().getRandFileName() + "." + ext;
	        	log.debug("FILE_SAVE_NM :: " + FILE_SAVE_NM);

	        	// 파일명 validation
	        	Assert.state(!FILE_SAVE_NM.contains(".."), "Name of file cannot contain '..'");

	        	// 저장 path
	        	Path targetPath = directory.resolve(FILE_SAVE_NM).normalize();

	        	// file 저장
//	        	multipartFile.transferTo(targetPath);
	        	multipartFile.transferTo(targetPath.toFile());

	        	Map<String, Object> dsFileInfo = new HashMap<String, Object>();
	        	dsFileInfo.put("FILE_NM",			orgFileName);
	        	dsFileInfo.put("FILE_SAVE_NM",	FILE_SAVE_NM);
	        	dsFileInfo.put("FILE_PATH",			FILE_PATH);
	        	dsUploadRtn.add(dsFileInfo);

        	}catch(Exception e) {
//        		e.printStackTrace();
        		//result.setErrorCode(-99);
        		result.setErrorCode(-1);
                result.setErrorMsg("-99|" + orgFileName + "|" + e.toString());
                return result;
        	}
        }
        
        if(dsUploadRtn.size() > 0)	result.addDataSet("dsUploadRtn", dsUploadRtn);
        return result;
	}

	/** 
	 * File download
	 * @param request
	 * @param response
	 * @throws IOException 
	 * @throws Exception
	 */
	@RequestMapping(value = "/downloadFiles")
	public NexacroFileResult downloadFiles(HttpServletRequest request, HttpServletResponse response) throws IOException {

		//request.setCharacterEncoding("UTF-8");
		String characterEncoding = request.getCharacterEncoding();
		if(characterEncoding == null) {
			characterEncoding = PlatformType.DEFAULT_CHAR_SET;
		}

		// 문자셋 타입
//		String charsetOfRequest = CharsetUtil.getCharsetOfRequest(request, characterEncoding);
		// 파일정보 Dataset saveXML 문자열
		String fileInfoXml = request.getParameter("dsFileInfo");
		DataSet dsFileInfo = null;

		if(fileInfoXml != null) {
			dsFileInfo = new DataSet("dsFileInfo");
//			log.debug("fileInfoXml:\n" + fileInfoXml);
			fileInfoXml = fileInfoXml.replaceAll("&lt;", "<").replaceAll("&quot;", "\"").replaceAll("&gt;", ">");
			dsFileInfo.loadXml(fileInfoXml);
		}

		File orgFile = null;
		File file = null;

		String fileNm	= "";
		String fileName = "";
		String displayFileName = "";

		//첨부파일 최대 99개까지로 제한
		int arrCnt = 0;
		File[] orgFiles = null;
		if(dsFileInfo != null) {
			arrCnt = dsFileInfo.getRowCount() <= 99 ? dsFileInfo.getRowCount() : 0;
			//2024-10-30 sparrow 조치 - 배열크기 점검
			if(0 <= arrCnt && arrCnt <= 99 ) {
				orgFiles = new File[arrCnt];
			}
		}

		//2024-10-25 Sparrow 조치 - if(dsFileInfo != null) 조건 추가  
		if(dsFileInfo != null) {

			if(dsFileInfo.getRowCount() > 1) 
			{
				List<File> files = new ArrayList<>();
				displayFileName = "첨부파일_" + new FileUtil().getYYYYMMDD() +".zip";

				// file Array
				for(int i = 0; i < arrCnt; i++)
				{
					fileNm = dsFileInfo.getString(i, "FILE_NM");
					fileName = dsFileInfo.getString(i, "FILE_SAVE_NM");
					String filePath = dsFileInfo.getString(i, "FILE_PATH");
				    String realFileName = filePath +fileName;
				    String orgRealFileName = filePath +fileNm;
				    log.debug("i= " + i + " filePath:[" + filePath + "] fileName : [" + fileName + "] fileNm : " + fileNm);
				    orgFile = new File(orgRealFileName);
				    file = new File(realFileName);

				    Files.copy(file.toPath(), orgFile.toPath(), StandardCopyOption.REPLACE_EXISTING);

				    orgFile = new File(orgRealFileName);
				    orgFiles[i] = orgFile;
//				    file.renameTo(orgFile);
				    files.add(orgFile);
				}

				// create zip file 
				//String zipFolder = dsFileInfo.getString(0, "FILE_PATH");
				//2024-10-25 sparrow 조치-------------------
				String zipFolder = StringUtil.safe(dsFileInfo.getString(0, "FILE_PATH"));

				File zipFile = null;

				if(!"".equals(displayFileName)) {

					zipFile = new File(zipFolder, displayFileName);

					if(zipFile != null) {

						try(
							FileOutputStream fout = new FileOutputStream(zipFile);
							ZipOutputStream out = new ZipOutputStream(fout)) {

							for(File f : files)  {

								try(FileInputStream in = new FileInputStream(f)) {
									ZipEntry zipEntry = new ZipEntry(f.getName());

									out.putNextEntry(zipEntry);

									int len;
									byte[] buf = new byte[4096];
									while((len = in.read(buf)) > 0 ) {
										out.write(buf, 0, len);
									}
									out.closeEntry();
								}
							}
							
							file = zipFile;
		
							//압축파일에 쓰였던 원본 파일 삭제
							for(int i = 0; i < orgFiles.length; i++) {
								File oFile = orgFiles[i];
								oFile.delete();
							}

							//압축으로 묶은 파일은 다운로드 실행 이후 불필요하므로 JVM 종료시 삭제를 진행한다.
							file.deleteOnExit();

						}catch(Exception e) {
							e.printStackTrace();
						}
					}
				}

			}else if(dsFileInfo.getRowCount() == 1) {

				displayFileName = dsFileInfo.getString(0,"FILE_NM");
				fileName = dsFileInfo.getString(0, "FILE_SAVE_NM");
				String filePath = dsFileInfo.getString(0, "FILE_PATH");
			    String realFileName = filePath +fileName;
			    
			    log.debug("displayFileName : " + displayFileName);
			    log.debug("fileName : " + fileName);
			    log.debug("filePath : " + filePath);
			    log.debug("realFileName : " + realFileName);

			    file = new File(realFileName);
			}			
		}

		NexacroFileResult result = new NexacroFileResult(file);
		result.setOriginalName(displayFileName);
		return result;		
	}
	
	// webeditor upload image
	@ResponseBody
	@PostMapping("/upload/image")
	public void uploadImage(@RequestParam Map<String, Object> paramMap, MultipartHttpServletRequest request, HttpServletResponse response) throws Exception {

		JSONObject json = new JSONObject();		
		json.put("error", "");
		json.put("message", "Upload Success");

		PrintWriter out = response.getWriter();

		try {

			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			MultipartFile uploadFile = request.getFile("upload");
			String uploadDir = request.getSession().getServletContext().getRealPath("/").replace("\\", "/") + "attachFiles/upload/images/";
			log.debug("uploadDir :::::::::::::: " + uploadDir);
			String uploadId = UUID.randomUUID().toString() + "." + FilenameUtils.getExtension(uploadFile.getOriginalFilename());
			
			uploadFile.transferTo(new File(uploadDir + uploadId));
			
//			boolean isSuccess = DrmUtil.decFasooDrmFile(uploadDir + uploadId, uploadDir + uploadId); //복호화 된 문서 FullPath + FileName
			
//			if(isSuccess) {
//				log.debug("uploadId :::::::::::::: " + uploadId);
//				json.put("url", "/attachImg/" + uploadId);
//
//				out.print(json.toString());
//				out.flush(); 
//				log.debug("Success json.toString() ::: " + json.toString());
//				//throw new Exception("강제 예외 발생!!!");
//
//			}else {
//				throw new Exception("DRM 복호화 오류!!!");
//			}

		}catch(Exception e) {
			json.put("error", -9999);
			json.put("message", "File Upload Fail:[" + e.getMessage() + "]");
			json.put("url", "");
			log.debug("Fail json.toString() ::: " + json.toString());

			out.print(json.toString());
			out.flush();

		}finally {
			out.close();
		}
	}

	/** 
	 * 사용자 사진/서명 이미지 업로드
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping(value = "/uploadUserImg")
	public NexacroResult uploadUserImg( HttpServletRequest request, HttpServletResponse response) throws Exception {

		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> dsUploadRtn =  new ArrayList<Map<String, Object>>();
		
		if(!(request instanceof MultipartHttpServletRequest)) {
            result.setErrorCode(-1);
            result.setErrorMsg("Not MultipartHttpServletRequest");
            return result;
        }
		request.setCharacterEncoding("UTF-8");
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

        // files..
        Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

        String USER_ID 	= request.getParameter("USER_ID");
        USER_ID 	= java.net.URLDecoder.decode(USER_ID, "utf-8");

        String IMG_GBN 	= request.getParameter("IMG_GBN");		// SIGN || PHOTO
        String fldrNm 		= "USER_" + IMG_GBN + "_FILES";
        IMG_GBN		= java.net.URLDecoder.decode(IMG_GBN, "utf-8");

        SimpleDateFormat sdf = new SimpleDateFormat("YYYYMM");
        Date now = new Date();
        String YYYYMM	= sdf.format(now);

        //String contextRealPath	= request.getSession().getServletContext().getRealPath("/");
        String folderName = fldrNm += File.separator + YYYYMM + File.separator;
		String FILE_PATH = storagePath + folderName;
		log.debug("filePath :: " + FILE_PATH);

        // file extention validation
		Set<String> keySet = fileMap.keySet();
        for(String name: keySet) {

        	MultipartFile multipartFile = fileMap.get(name);
        	String orgFileName = multipartFile.getOriginalFilename();
        	String ext = orgFileName.substring(orgFileName.lastIndexOf(".")+1, orgFileName.length());
        	
        	boolean isFileValid = new FileUtil().isCheckFileExtensionByImage(orgFileName);
        	if( !isFileValid ) {
        		result.setErrorCode(-1);
                result.setErrorMsg(ext + " File is not image file");
                return result;
        	}
        }
        
        // physical file upload
        for(String name: keySet) {

        	try {
	            MultipartFile multipartFile = fileMap.get(name);

	            // 원본파일명
	            String orgFileName = multipartFile.getOriginalFilename();
	//            log.debug("orgFileName :: " + orgFileName);

	            // 확장자
	            String ext = orgFileName.substring(orgFileName.lastIndexOf(".")+1, orgFileName.length());

	            // parent directory를 찾는다.
	            Path directory = Paths.get(FILE_PATH).toAbsolutePath().normalize();
	            Files.createDirectories(directory);

	        	// 물리파일명
	        	String FILE_SAVE_NM = new FileUtil().getRandFileName() + "." + ext;
	//        	log.debug("FILE_SAVE_NM :: " + FILE_SAVE_NM);

	        	// 파일명 validation
	        	Assert.state(!FILE_SAVE_NM.contains(".."), "Name of file cannot contain '..'");

	        	// 저장 path
	        	Path targetPath = directory.resolve(FILE_SAVE_NM).normalize();

	        	// file 저장
//	        	multipartFile.transferTo(targetPath);
	        	File file = targetPath.toFile();
	        	multipartFile.transferTo(file);

	        	Map<String, Object> dsFileInfo = new HashMap<String, Object>();
	        	dsFileInfo.put("IMG_GBN", IMG_GBN);
	        	dsFileInfo.put("USER_ID", USER_ID);
	        	dsFileInfo.put("FILE_NM", orgFileName);
	        	dsFileInfo.put("FILE_SAVE_NM", FILE_SAVE_NM);
	        	dsFileInfo.put("FILE_PATH", FILE_PATH);

	        	String FILE_BASE64 = fileToBase64(FILE_PATH, FILE_SAVE_NM);
	        	dsFileInfo.put("FILE_BASE64", FILE_BASE64);
	        	dsUploadRtn.add(dsFileInfo);

        	}catch(Exception e) {
        		result.setErrorCode(-1);
                result.setErrorMsg(e.toString());
                return result;
        	}
        }
        if(dsUploadRtn.size() > 0)	result.addDataSet("dsUploadRtn", dsUploadRtn);
        return result;
	}

	public String fileToBase64(String filePath, String fileNm) throws IOException {
		//String ext			= fileNm.substring(fileNm.lastIndexOf("."));
		String orgFilePath = filePath + fileNm; 
		//String decFilePath = filePath + fileNm.substring(0, fileNm.lastIndexOf(".")) + "_temp" + ext;
		//og.debug("orgFile :: " + orgFilePath);
		//log.debug("tempFile :: " + decFilePath);
		//파일 복호화				
//		boolean isSuccess = DrmUtil.decFasooDrmFile(orgFilePath, orgFilePath); //복호화 된 문서 FullPath + FileName
		//log.debug("isSuccess :: " + isSuccess);
		File tempFile = new File(orgFilePath);

		String strBase64 = new String();
		FileInputStream fis = null;
		ByteArrayOutputStream baos = null;

		try {
			fis = new FileInputStream(tempFile);
			baos = new ByteArrayOutputStream();
			
			int len = 0;
			byte[] buf = new byte[1024];
			while((len = fis.read(buf)) != -1) {
				baos.write(buf, 0, len);
			}
			
			byte[] fileArray = baos.toByteArray();
			strBase64 = new String(Base64.encodeBase64(fileArray));

		}catch(Exception e) {
			log.debug("fileToBase64 error");
			log.debug(e.toString());

		}finally {
			if(fis != null)		fis.close();
			if(baos != null)	baos.close();
		}
		return strBase64;
	}
}