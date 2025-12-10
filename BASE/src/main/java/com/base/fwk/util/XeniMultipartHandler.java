package com.base.fwk.util;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.compress.utils.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.java.xapi.tx.impl.PlatformXmlDataDeserializer;
import com.nexacro.java.xeni.extend.XeniMultipartProcBase;
import com.nexacro.java.xeni.extend.XeniMultipartReqData;
import com.nexacro.java.xeni.util.Constants;

public class XeniMultipartHandler implements XeniMultipartProcBase {

	private Logger log = LoggerFactory.getLogger(XeniMultipartHandler.class); 

	@Override
	public XeniMultipartReqData getImportData(HttpServletRequest servletRequest) throws Exception {
		XeniMultipartReqData requestData = new XeniMultipartReqData();

		if(!(servletRequest instanceof MultipartHttpServletRequest)) {
			throw new IllegalArgumentException("Request is not a MultipartHttpServletRequest");
		}
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) servletRequest;

		//ssv stream
		PlatformData platformData = findPlatformData(multipartRequest);
		requestData.setPlatformData(platformData);

		//files..
		String sName = null;
		InputStream insFile = null;

		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
		Set<String> keySet = fileMap.keySet();

		for(String name : keySet) {
			MultipartFile multipartFile = fileMap.get(name);
			sName = multipartFile.getOriginalFilename();
			sName = sName.replaceAll("\\\\", "/");
			int nIdx = sName.lastIndexOf('/');

			if(nIdx >= 0) sName = sName.substring(nIdx + 1);

			InputStream in = multipartFile.getInputStream();
			insFile = new ByteArrayInputStream(IOUtils.toByteArray(in));
			in.close();

			if(log.isDebugEnabled()) {
				log.debug("File field " + name + " with file name " + sName + " detected.");
			}

			requestData.setFileName(sName);
			requestData.setFileStream(insFile);
		}
		return requestData;
	}

	public PlatformData findPlatformData(MultipartHttpServletRequest multipartRequest) throws IOException, PlatformException {
		Enumeration<String> parameterNames = multipartRequest.getParameterNames();

		while(parameterNames.hasMoreElements()) {
			String parameterName = parameterNames.nextElement();

			if(parameterName == null || parameterName.length() == 0) {
				continue;
			}

			String parameter = multipartRequest.getParameter(parameterName);

			if(parameter == null || parameter.length() == 0) {
				continue;
			}

			PlatformXmlDataDeserializer dataDes = new PlatformXmlDataDeserializer();
			PlatformData platformData = dataDes.readData(new StringReader(parameter), null, "UTF-8");

			if(platformData == null) {
				return null;
			}

			DataSet dsCmd = platformData.getDataSet(Constants.DATASET_COMMAND);

			if(dsCmd == null) {
				return platformData;
			}

			//multipart는 import만 처리 된다. 그 외는 예외를 던진다.
			String command = dsCmd.getString(0, Constants .COMMAND_COMMAND);

			if(!Constants.COMMAND_IMPORT.equalsIgnoreCase(command)) {
				throw new PlatformException("multipart request is supported only " + Constants.COMMAND_IMPORT);
			}

			//server에 존재하는 파일은 사용하지 않는다.
			String sMode = dsCmd.getString(0, Constants.COMMAND_COMMAND);

			if(!"local".equalsIgnoreCase(sMode)) {
				throw new PlatformException("supported only local mode.");
			}
			return platformData;
		}
		return null;
	}
}