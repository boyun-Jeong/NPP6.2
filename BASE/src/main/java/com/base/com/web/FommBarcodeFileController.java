package com.base.com.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.vo.SessionContext;
import com.base.com.service.FommBarcodeFileService;
import com.base.fwk.util.FileUtil;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title   
 * -        바코드 파일 Controller
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
@RequestMapping("FommBarcodeFile")
public class FommBarcodeFileController {

	private Logger log = LoggerFactory.getLogger(FommBarcodeFileController.class);
	
	@Inject
	private Provider<SessionContext> provider;
	
	@Autowired
	private FommBarcodeFileService fommBarcodeFileSvc;
	
	@Value("#{app['file.storagePath']}")
	private String storagePath;

	
	
	/**
	 * 바코드 파일 생성 & 출력 이력 생성
	 * @param dsCond
	 * @return
	 */
	@RequestMapping(value = "/downloadBarcode")
	public NexacroResult downloadBarcode( HttpServletRequest request 
											, HttpServletResponse response
											, @ParamDataSet(name = "dsBarCode") List<Map<String, Object>> dsBarCode ) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		
		// 1. 바코드파일 생성
		File barcodeFile = null;
		String fileName = "";
		String fullPath = "";
		try 
		{
			// 파일 경로 setting
			String contextRealPath	= request.getSession().getServletContext().getRealPath("/");
			String folderNm		= "barcodeFile" + File.separator + new FileUtil().getYYYYMMDD();
			String createPath 	= contextRealPath + storagePath + folderNm;
			
			// 파일명 setting
			String userId 		= provider.get().getScUserId();
			String timeStamp	= new FileUtil().getTimestamp();
			fileName			= "RFPRN_" + userId + "_" + timeStamp + ".DAT";
			
			// 최종 경로 + 파일명
			fullPath	= createPath + File.separator;		
			barcodeFile = new File(fullPath + fileName);
			if (!barcodeFile.exists()) {
				barcodeFile.createNewFile();
			}
			
			// barCode file data 쓰기
			FileWriter fw 		= new FileWriter(fullPath + fileName);
			BufferedWriter bw	= new BufferedWriter(fw);
			String seperator	= "|";
			try 
			{
				for(int i = 0; i < dsBarCode.size(); i++)
				{
					Map<String, Object> rowData = dsBarCode.get(i);
					String ASSET_NO 			= StringUtil.safe(rowData.get("ASSET_NO"));
					String SERIAL_NO 			= StringUtil.safe(rowData.get("SERIAL_NO"));
					String ASSET_NM 			= StringUtil.safe(rowData.get("ASSET_NM"));
					String VENDOR_NM 			= StringUtil.safe(rowData.get("VENDOR_NM"));
					String SAP_ACQ_DATE_DISP 	= StringUtil.safe(rowData.get("SAP_ACQ_DATE_DISP"));
					String CONTRACT_NO 			= StringUtil.safe(rowData.get("CONTRACT_NO"));
					String CONTRACT_NM 			= StringUtil.safe(rowData.get("CONTRACT_NM"));
					String CONTRACT_DATE 		= StringUtil.safe(rowData.get("CONTRACT_DATE"));
					String CLASS_M_NM 			= StringUtil.safe(rowData.get("CLASS_M_NM"));
					String CLASS_NM 			= StringUtil.safe(rowData.get("CLASS_NM"));
					
					bw.write(ASSET_NO + seperator);
					bw.write(SERIAL_NO + seperator);
					bw.write(ASSET_NM + seperator);
					bw.write(VENDOR_NM + seperator);
					bw.write(SAP_ACQ_DATE_DISP + seperator);
					bw.write(CONTRACT_NO + seperator);
					bw.write(CONTRACT_NM + seperator);
					bw.write(CONTRACT_DATE + seperator);
					bw.write(CLASS_M_NM + seperator);
					bw.write(CLASS_NM + seperator);
					
					
					if( i < dsBarCode.size()-1 )
					{
						bw.newLine();
					}
				}
				bw.flush();
				
			}
			catch (Exception e) 
			{
				log.error("FommBarcodeFileController >> saveFileInfo >> catch");
				log.error(e.toString());				
			}
			finally {
				bw.close();
				fw.close();
			}
			
		}
		catch (Exception e) 
		{
			log.error("FommBarcodeFileController >> saveFileInfo >> catch");
			log.error(e.toString());
		}
		finally {
		
		}
		
		
		// 2. 바코드생성 이력 추가
		fommBarcodeFileSvc.insertBarcodeHist(dsBarCode);
		
		// 3. 바코드파일 전송
		int fSize = (int)barcodeFile.length();
		if( fSize > 0 )
		{
			// 파일명 encode
			String encodeFileName = "attachment; filename*=" + "UTF-8" + "''" + URLEncoder.encode(fileName);
			
			// content type
			response.setContentType("application/octet-stream; charset=utf-8");
			
			// header setting
			response.setHeader("Content-Disposition", encodeFileName);
			
			// content length setting
			//response.setContentLengthLong(fSize);
			response.setContentLength(fSize);

			FileInputStream fs 		 = null;
			BufferedInputStream in 	 = null;
			BufferedOutputStream out = null;
			
			try {
				fs 		= new FileInputStream(barcodeFile);
				in 		= new BufferedInputStream(fs);
				out 	= new BufferedOutputStream(response.getOutputStream());
			
				byte[] buffer = new byte[4096];
				int bytesRead = 0;
				
				while( (bytesRead = in.read(buffer)) != -1 ) {
					out.write(buffer, 0, bytesRead);
				}
				out.flush();
			}
			catch(Exception e) {
			    log.error("FommBarcodeFileController downloadBarcode >> catch");
			    log.error(e.toString());											
			}
			finally {
				  if (in != null) {
		                try {
		                	in.close();
		                } catch (Exception e1) {
		                }
				  }
				  if (out != null) {
		                try {
		                	out.close();
		                } catch (Exception e1) {
		                }
				  }
				  if (fs != null) {
		                try {
		                	fs.close();
		                } catch (Exception e1) {
		                }
				  }				
			}
		}
		else
		{
			
		}
				
		return result;
	}

	
}