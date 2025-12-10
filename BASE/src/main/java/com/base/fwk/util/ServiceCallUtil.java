package com.base.fwk.util;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.base.fwk.server.BeanUtils;

/**
 * 
 * <pre>
 * @title
 * - 요청서 공통 처리 Controller
 * @package com.base.sr.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 05. 30.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 05. 30.	정보윤		최초작성
 */
@Controller
@RequestMapping("SVC_CALL")
public class ServiceCallUtil {

	private Logger log = LoggerFactory.getLogger(ServiceCallUtil.class);

	@Transactional
	@RequestMapping("/callService")
	public NexacroResult callService(HttpServletRequest paramHttpServletRequest,
									 HttpServletResponse paramHttpServletResponse) throws Exception {

		NexacroResult result = new NexacroResult();

		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(paramHttpServletRequest, "PlatformSsv", "UTF-8");
		//log.debug("\n" + httpPlatformRequest);
	    httpPlatformRequest.receiveData();
	    PlatformData platformData = httpPlatformRequest.getData();

//	    VariableList variableList = platformData.getVariableList();
//	    log.debug("variableList.size() ::: " + variableList.size());
	    
	    DataSetList dataSetList = platformData.getDataSetList();
		log.debug("dataSetList.size() ::: " + dataSetList.size());
		log.debug("dsService rowcount : " + dataSetList.get("dsService").getRowCount());
		
		for (int i = 0; i < dataSetList.size(); i++) {
			
			log.debug("i=" + i + " : Name=[" + dataSetList.get(i).getName() + "] Type:[" + dataSetList.get(i).getClass().toString() + "]"); 
		}

		DataSet dsService = dataSetList.get("dsService");
//		Map<String, Object> dsService = (Map<String, Object>) dataSetList.get("dsService");
//		log.debug("CALL_SERVICE : " + dsService.get("CALL_SERVICE"));
		
		String returnKey = "";

		for (int i = 0; i < dsService.getRowCount(); i++) {
			
			String[] keys = new String[0];
			
			if(!"".equals(returnKey)) {
				keys = new String[returnKey.split("|").length];
				keys = returnKey.split("|");
			}
			
			String svcData = dsService.getString(i, "CALL_SERVICE");
			String inDsType = dsService.getString(i, "INDS_TYPE");
			String inDs = dsService.getString(i, "INDS");
			
			//log.debug("svcData : [" + svcData + "]");
			String[] svcArr = svcData.split("/");
			//log.debug("svcArr : [" + svcArr.length + "]");
			//log.debug("IN_DS_TYPE : [" + inDsType + "]");

			if(svcArr.length == 3)
	       	{
				String path = "com.wemb.spp." + svcArr[0] + ".web";
	    		String classNm = path + "." + svcArr[1] + "Controller";
	    		Class svcClass = Class.forName(classNm);
	    		
	    		Object object  = BeanUtils.getBean(svcArr[1] + "Controller");
	    		Method method;	    		
	    		
	    		Class[] paramType = new Class[inDsType.split(",").length];
	    		Object[] oParam = new Object[inDsType.split(",").length];
	    		
	    		//log.debug("oParam.length:::::::::::::::::[" + oParam.length + "]");

	    		for (int j = 0; j < oParam.length; j++) {
	    			String dsType = inDsType.split(",")[j];
	    			//log.debug("데이터셋명 : " + inDs.split(",")[j]);
	    			String dsName = inDs.split(",")[j];
	    			
	    			log.debug("InDsName :::::::::::::::::::::::::::::::::[" + dsName + "]");
	    			DataSet paramDs = dataSetList.get(dsName);
	    			//log.debug("paramDs.getAlias() : " + paramDs.getAlias());
	    			//log.debug("paramDs.getClass().getName() : " + paramDs.getClass().getName());
	    			oParam[j] = paramDs;
	    			
	    			if("MAP".equals(dsType)) {

	    				paramType[j] = java.util.Map.class;
	    				Map<String, Object> inMap = new HashMap<>();

	    				for (int k = 0; k < paramDs.getColumnCount(); k++) {
	    					
	    					String colNm = paramDs.getColumn(k).getName();
	    					inMap.put(colNm, paramDs.getString(0, colNm));
	    					
	    					for (int l = 0; l < keys.length; l++) {
								
	    						String[] keyInfo = keys[l].split("=");
	    						
	    						if(keyInfo.length > 0) {
	    							log.debug("keyInfo[0]======================================" + keyInfo[0]);
		    						if(colNm.equals(keyInfo[0])) {
		    							if(keyInfo.length == 2) {
		    								inMap.put(colNm, keyInfo[1]);
		    							}
		    							break;
		    						}
	    						}else {
	    							log.debug("keyInfo.length [0]======================================");
	    						}
							}
						}
	    				oParam[j] = inMap;

	    			}else if("LIST".equals(dsType)) {
	    				
	    				paramType[j] = java.util.List.class;
	    				
	    				Map<String, Object> inMap = new HashMap<>();
	    				List<Map<String, Object>> inList = new ArrayList<Map<String,Object>>();
	    				
	    				log.debug("LIST data==================================================>" + paramDs.getRowCount());
	    				
	    				for (int k = 0; k < paramDs.getRowCount(); k++) {
	    					
	    					for (int l = 0; l < paramDs.getColumnCount(); l++) {

	    						String colNm = paramDs.getColumn(l).getName();
	    						inMap.put(colNm, paramDs.getString(k, colNm));
	    						
	    						for (int m = 0; m < keys.length; m++) {
									
		    						String[] keyInfo = keys[m].split("=");
		    						
		    						if(colNm.equals(keyInfo[0])) {
		    							if(keyInfo.length == 2) {
		    								inMap.put(colNm, keyInfo[1]);
		    							}
		    							break;
		    						}
								}
	    					}
	    					inList.add(inMap);
						}
	    				oParam[j] = inList;
	    			}
				}
	    		
	    		for (int j = 0; j < paramType.length; j++) {
	    			log.debug("paramType j=" + j + " toGenericString : [" + paramType[j].getClass().toGenericString() + "] toString : [" + paramType[j].getClass().toString() + "]");
	    		}
	    		method = svcClass.getMethod(svcArr[2], paramType);
	    		
	    		log.debug("path : " + path);
	    		log.debug("classNm : " + classNm);
	    		log.debug("svcNm[0] : " + svcArr[0]);
	    		log.debug("svcNm[1] : " + svcArr[1]);
	    		log.debug("svcNm[2] : " + svcArr[2]);
	    		
	    		log.debug(path + "." + classNm + "." + method + "() call");

	    		for (int j = 0; j < oParam.length; j++) {
	    			log.debug("oParam j=" + j + " toGenericString : [" + oParam[j].getClass().toGenericString() + "] toString : [" + oParam[j].getClass().toString() + "]");
	    			
	    			if(oParam[j].getClass() == java.util.List.class || oParam[j].getClass() == java.util.ArrayList.class) {
	    				List<Map<String, Object>> list = (List<Map<String, Object>>) oParam[j];
	    				log.debug("listClass j=" + j + " list.size() : " + list.size());
    				}
				}
	    		
	    		Object retObj = method.invoke(object, oParam);
	    		log.info("retObj:::::::::::::::::" + retObj);

	    		if(retObj != null) {
	    			NexacroResult outData = new NexacroResult();
	    			outData = (NexacroResult) retObj;
	    			
	    			//logger.info("outData.getDataSetList().size() : " + outData.getDataSets().size());
	    			for(String name : outData.getDataSets().keySet()) {
	    				log.debug("outData.getDataSets().get(name).getClass() : " +
	    						"\ntoGenericString : [" + outData.getDataSets().get(name).getClass().toGenericString() + "]" +
	    						"\ntoString : [" + outData.getDataSets().get(name).getClass().toString() + "]");
	    				
	    				if(outData.getDataSets().get(name).getClass() == java.util.HashMap.class || outData.getDataSets().get(name).getClass() == java.util.Map.class) {
	    					Map<String, Object> data = (Map<String, Object>) outData.getDataSets().get(name);
	    					result.addDataSet(name, data);
	    				}else if(outData.getDataSets().get(name).getClass() == java.util.List.class || outData.getDataSets().get(name).getClass() == java.util.ArrayList.class) {
	    					List<Map<String, Object>> data = (List<Map<String, Object>>) outData.getDataSets().get(name);
	    					result.addDataSet(name, data);
	    				}
    				}
	    			
	    			//save 처리시 KEY를 리턴한 Controller가 존재하면 아래의 Controller에는 리턴받은 키값을 다 씌운다.
	    			for(String name : outData.getVariables().keySet()) {
	    				if("KEY".equals(name)) {
	    					returnKey = StringUtil.safe(outData.getVariables().get(name));
	    					log.debug("KEY=====================================================================[" + returnKey + "]");
	    				}
	    			}
	    		}
	       	}
		}
		return result;
	}
}