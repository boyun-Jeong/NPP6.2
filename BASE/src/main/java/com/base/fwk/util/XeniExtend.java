package com.base.fwk.util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.java.xeni.extend.XeniExcelDataStorageBase;
import com.nexacro.java.xeni.util.CommUtil;

public class XeniExtend implements XeniExcelDataStorageBase {

	private static Logger log = LoggerFactory.getLogger(XeniExtend.class);

	public InputStream loadTargetStream(String filepath) throws Exception {
		File file = new File(filepath);
		return new FileInputStream(file);
	}

	public String saveImportStream(VariableList varlist, InputStream in, String filepath) throws Exception {

//		log.debug("saveImportStream()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		int nIdx = filepath.lastIndexOf("/");
		String sPath = filepath.substring(0, nIdx);
		String fileName = filepath.substring(nIdx+1);
		String srcFile = sPath + "/" + fileName;
		
		File file = new File(sPath);
		if( !file.exists() ) file.mkdirs();

		OutputStream out = null;
			
		try {

			out = new FileOutputStream(srcFile);
			byte[] buf = new byte[1024];
			int length = 0;

			if(out != null) {
				while ((length = in.read(buf)) > 0) {			
					out.write(buf, 0, length);
				}
				
				out.flush();
			}

		}catch(Exception e) {
			
		}finally {
			log.debug("finally");
			if(out != null)	out.close();
			if(in != null)	in.close();
			
			//파일 복호화
			/*
			boolean isSuccess = DrmUtil.decFasooDrmFile(srcFile, srcFile); //복호화 된 문서 FullPath + FileName
			log.debug("isSuccess:" + isSuccess);
			if(isSuccess) {
	
				File delFile = new File(srcFile);
	
				if(delFile != null) {
	
					if(delFile.exists()) delFile.deleteOnExit();
				}
			}
			*/
		}
		return null;
	}

	//export된 excel 파일을 저장 후 url을 전달
	@GetMapping
	public int saveExportStream(VariableList varlist, DataSet dscmd, ByteArrayOutputStream out, String filepath, String fileurl, HttpServletResponse response) throws Exception {
		PlatformData resData = new PlatformData();
		VariableList varList = resData.getVariableList();

//		ServletRequestAttributes sra = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
//		HttpServletRequest req = sra.getRequest();

		//properites 파일의 udp 정보를 가져온다.
//		Reader reader = Resources.getResourceAsReader(resource);
//		properties.load(reader);

		String lastSheet = StringUtil.safe(varlist.getString("lastSheet"));
//		log.debug("lastSheet:::::::::::::::::::::" + lastSheet);

		int nIdx = filepath.lastIndexOf("/");
		String sPath = filepath.substring(0, nIdx);
		String sFileName = filepath.substring(nIdx + 1);
		
//		log.debug("[saveExportStream ] sPath : " + sPath + " sFileName : " + sFileName);

		//엑셀파일만 다운로드 가능...
		if(!"xls".equals(filepath.substring(filepath.lastIndexOf(".") + 1)) && !"xlsx".equals(filepath.substring(filepath.lastIndexOf(".") + 1))) {
			Exception ex = new RuntimeException("This is not an Excel file");
			throw ex;
		}
		
		FileOutputStream fout = null;
		File filePath = null;

		try {
			filePath = new File(sPath);
			if(filePath.exists() == false) {
				filePath.mkdirs();
			}		
			
			fout = new FileOutputStream(sPath + "/" + sFileName);			
			if(fout != null) {
				fout.write(out.toByteArray());
			}
			log.debug(dscmd.saveXml());
			
		}catch(Exception e) {
			log.error("XeniExtend saveExportStream >> catch() " + e.getMessage());					
			//e.getMessage();
			varList.add("ErrorCode", -1);
			varList.add("ErrorMsg", e.getMessage());
			
		//2024-10-25 Sparrow 조치 
		} finally {
			if(fout != null) fout.close();
			if(out != null) out.close();
			
		}
		
		DataSet dsRes = CommUtil.getDatasetExportResponse(dscmd);

		varList.add("ErrorCode", 0);
		varList.add("ErrorMsg", "SUCCESS");
		dsRes.set(0, "url", fileurl);
		resData.addDataSet(dsRes);
		
		log.debug("[saveExportStream] fileurl :::::::::::::::: " + fileurl);

		String range = StringUtil.safe(dscmd.getString(0, "range"));
		range = range.replaceAll(" ", "");

		// DRM
		if(range.contentEquals(lastSheet)) {
			/*
			boolean isSuccess = DrmUtil.encFasooDrmFile(sPath, sFileName, sFileName);
			log.debug("isSuccess ::::::::::: " + isSuccess + " range:[" + dscmd.getString(0, "range") + "]");
//			
			if(!isSuccess) {
				throw new Exception("[DRM암호화 오류] Excel Export시 DRM 암호화 처리시 오류가 발생했습니다.");
			}
			*/	
		}
		
		HttpPlatformResponse platformRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
		platformRes.setData(resData);
		platformRes.sendData();

		return 0;
	}

	@Override
	public DataSet saveExportStream(VariableList arg0, DataSet arg1, ByteArrayOutputStream arg2, String arg3, String arg4) throws Exception {
		log.debug("saveExportStream()xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
		return null;
	}
}