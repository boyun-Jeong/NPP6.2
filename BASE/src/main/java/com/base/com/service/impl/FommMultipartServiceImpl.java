package com.base.com.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.dao.FommMultipartDAO;
import com.base.com.service.FommMultipartService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        첨부파일 업/다운로드 ServiceImpl Class
 * @package com.base.com.service.impl
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 00.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2023. 04. 00.	WEMB		최초작성
 */
@Service
public class FommMultipartServiceImpl implements FommMultipartService {

	private Logger log = LoggerFactory.getLogger(FommMultipartService.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FommMultipartDAO fommMultipartDao;

	/**
	 * 파일목록 조회
	 */	
	public List<Map<String, Object>> selectFileList(Map<String, Object> dsCond) 
	{
		List<Map<String, Object>> dsFileList = fommMultipartDao.selectFileList(dsCond);
		for(int i = 0; i < dsFileList.size(); i++) {
			Map<String, Object> rowData = dsFileList.get(i);
			String fileName = StringUtil.safe(rowData.get("FILE_NM"));
			String fileExt 	= StringUtil.substring(fileName, fileName.lastIndexOf(".") + 1, fileName.length());
			String fileIcon = this.getFileIcon(fileExt);
			rowData.put("FILE_ICON", fileIcon);
		}
		
		return dsFileList;
	}
	
	
	private String getFileIcon(String fileExt)
	{
		String fileIcon = "";
		switch(fileExt)
		{
			case "zip" :	case "rar" :	case "7z" :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_ZIP.png";	break;
				
			case "jpg" :	case "jpeg" :	case "gif" :	case "png" :	case "bmp" :    case "tif" :    case "tiff" :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_IMG.png";	break;
				
			case "txt" :	case "xml" :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_TXT.png";	break;
				
			case "doc" :	case "docx" :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_DOC.png";	break;
				
			case "xls" :	case "xlsx" :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_XLS.png";	break;
				
			case "ppt" :	case "pptx" :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_PPT.png";	break;
				
			case "pdf" :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_PDF.png";	break;
				
			default :
				fileIcon = "theme://SPP_IMAGE_SET/FOMM/ico_file_ETC.png";	break;
		}
		
		return fileIcon;
	}


	/**
	 * 파일정보 저장
	 */
//	@Transactional
	public void saveFileInfo(List<Map<String, Object>> dsFommFile) 
	{
		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();
		
		log.debug("saveFileInfo() dsFommFile.size() ::: " + dsFommFile.size());
		
//		fommMultipartDao.removeTempFile();		// TEMP파일 삭제

		for(int i = 0; i < dsFommFile.size(); i++)
		{
			Map<String, Object> rowData = dsFommFile.get(i);
			
			// DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
	    	
	    	log.debug("saveFileInfo() i=" + i + " rowFlag : " + dsFommFile.size());
	    	
	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);

	    	if( rowFlag.equalsIgnoreCase("I")) {
	    		// 파일정보 저장 실패한 임시파일 삭제
//	    		fommMultipartDao.removeTempFile();

	    		// 임시파일여부 setting
	    		String PK1 = StringUtil.safe(rowData.get("PK1"));
	    		if("".equals(PK1))	PK1 = "TEMP_KEY_" + userId;

	    		if( PK1.indexOf("TEMP_KEY_") == 0 )
	    			rowData.put("TEMP_YN", "Y");
	    		else
	    			rowData.put("TEMP_YN", "N");
	    		
	    		// 파일정보 insert
	    		fommMultipartDao.insertFileInfo(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("U")) {
	    		fommMultipartDao.modifyFileInfo(rowData);
	    	}
	    	else if( rowFlag.equalsIgnoreCase("D")) {
	    		fommMultipartDao.removeFileInfo(rowData);
	    	}
			
		}
	}
	
	/**
	 * 파일정보 PK 정보로 삭제
	 */
	@Transactional
	public void removeFileInfo(Map<String, Object> rowData) 
	{
		fommMultipartDao.removeFileInfo2(rowData);
	}
	
	
	/**
	 * 파일 tempkey 치환
	 * tempKey 값이 있으면 해당 tempKey의 데이터를 교체, tempKey가 공백이면 defualt tempKey로 처리
	 */
	@Transactional
	public void replaceTempKey(String keyTbl, String tempKey, String PK1) 
	{
		String userId 	= sc.get().getScUserId();
		Map<String, Object> rowData = new HashMap<String, Object>();
		
		if("".equals(tempKey) || tempKey == null)
			tempKey = "TEMP_KEY_"+userId;
		
		rowData.put("KEY_TBL", keyTbl);
		rowData.put("TEMP_KEY1", tempKey);
		rowData.put("PK1", PK1);
		rowData.put("PK2", "");
		rowData.put("PK3", "");
		fommMultipartDao.replaceTempKey(rowData);
	}
	@Transactional
	public void replaceTempKey(String keyTbl, String[] tempKey, String PK1, String PK2) 
	{
		String userId 	= sc.get().getScUserId();
		Map<String, Object> rowData = new HashMap<String, Object>();
		
		if(tempKey instanceof String[])
		{
			if(tempKey.length == 2) {
				String tempKey1 = StringUtil.safe(tempKey[0]);
				if("".equals(tempKey1)) tempKey[0] = "TEMP_KEY_"+userId;
				rowData.put("TEMP_KEY1", tempKey[0]);
				rowData.put("TEMP_KEY2", tempKey[1]);
			}else {
				rowData.put("TEMP_KEY1", "TEMP_KEY_"+userId);
			}
		}else {
			rowData.put("TEMP_KEY1", "TEMP_KEY_"+userId);
		}
		
		rowData.put("KEY_TBL", keyTbl);
		rowData.put("PK1", PK1);
		rowData.put("PK2", PK2);
		rowData.put("PK3", "");
		fommMultipartDao.replaceTempKey(rowData);
	}
	@Transactional
	public void replaceTempKey(String keyTbl, String[] tempKey, String PK1, String PK2, String PK3) 
	{
		String userId 	= sc.get().getScUserId();
		Map<String, Object> rowData = new HashMap<String, Object>();
		
		if(tempKey instanceof String[])
		{
			if(tempKey.length == 3) {
				String tempKey1 = StringUtil.safe(tempKey[0]);
				if("".equals(tempKey1)) tempKey[0] = "TEMP_KEY_"+userId;
				rowData.put("TEMP_KEY1", tempKey[0]);
				rowData.put("TEMP_KEY2", tempKey[1]);
				rowData.put("TEMP_KEY3", tempKey[2]);
			}else {
				rowData.put("TEMP_KEY1", "TEMP_KEY_"+userId);
			}
		}else {
			rowData.put("TEMP_KEY1", "TEMP_KEY_"+userId);
		}
		
		rowData.put("KEY_TBL", keyTbl);
		rowData.put("PK1", PK1);
		rowData.put("PK2", PK2);
		rowData.put("PK3", PK3);
		fommMultipartDao.replaceTempKey(rowData);
	}
	
	public void replaceTempKeyOne(Map<String, Object> rowData) {
		fommMultipartDao.replaceTempKeyOne(rowData);
	}
}