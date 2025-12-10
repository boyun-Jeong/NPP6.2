package com.base.com.service.impl;

import java.io.Reader;
import java.lang.reflect.Method;
import java.sql.Clob;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.base.com.service.FommSvcService;
import com.base.fwk.server.BeanUtils;
import com.base.fwk.util.StringUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 06. 09.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 06. 09.	정보윤		최초작성
 */
@Service
@Transactional(rollbackFor = {Exception.class})
public class FommSvcServiceImpl implements FommSvcService {

	private Logger log = LoggerFactory.getLogger(FommSvcServiceImpl.class);

	/**
	 * java Service Call
	 */
	public List<Map<String, Object>> execJavaService(DataSetList dataSetList) throws Exception {

		Map<String, Object> svcRowMap = new HashMap<String, Object>();
		List<Map<String, Object>> serviceList = new ArrayList<Map<String,Object>>();
		
		for (int i=0; i<dataSetList.get("gdsSvcInfo").getRowCount(); i++) {
			svcRowMap = dataSetList.get("gdsSvcInfo").getRowToMap(i);
			serviceList.add(svcRowMap);
		}

		List<Map<String, Object>> rtnDataObj = new ArrayList<Map<String,Object>>();
		
		for (int i=0; i<serviceList.size(); i++) {

			Map<String, Object> rowData = serviceList.get(i); 
			String svcNm	= StringUtil.safe(rowData.get("SVC_NM"));
			String inDsStr	= StringUtil.safe(rowData.get("IN_DS"));
			String outDs	= StringUtil.safe(rowData.get("OUT_DS"));

			String[] svcArr = svcNm.split("/");

			if(svcArr != null) {
				log.debug("i=" + i + " SVC_NM:[" + svcNm + "] svcArr.length : " + svcArr.length);

			}else {
				log.debug("i=" + i + " SVC_NM:[" + svcNm + "]");
			}

			if(svcArr.length == 3) {

				String path = "com.wemb.spp." + svcArr[0] + ".service.impl";
	    		String classNm = path + "." + svcArr[1] + "ServiceImpl";
	    		
	    		log.debug("i=" + i + " CLASS_NM : [" + classNm + "]");

	    		Class svcClass = Class.forName(classNm);

	    		if(svcClass != null) {

	    			Method[] methodList = svcClass.getMethods();	//해당 ServiceImpl Clsss에 있는 Method 목록
		    		String[] paramClassNm = null;
		    		
		    		for(int j=0; j<methodList.length; j++) {
		    			
		    			if(methodList[j].getName().equals(svcArr[2])) {	//WF프로세스 관리에 정의한 서비스명과 동일한 경우

		    				Class<?>[] paramTypes = methodList[j].getParameterTypes();	//해당 METHOD의 매개변수 TYPE을 배열을 구한다.
		    				paramClassNm = new String[paramTypes.length];

		    				String[] inDsArr = null;
		    				
		    				boolean isEmptyInDs = true;	//단계 화면에 정의된 파라미터 데이터셋이 없는 경우
		    				
		    				if(!"".equals(inDsStr)) {
		    					
		    					inDsArr = inDsStr.split(",");
		    					
				    			isEmptyInDs = false;
		    				}

		    				for (int k=0; k<paramTypes.length; k++)	paramClassNm[k] = paramTypes[k].getName();	//해당 METHOD의 매개변수 Class명을 구한다.

		    				Object object  = BeanUtils.getBean(svcArr[1] + "ServiceImpl");

		    				Class<?>[] paramClass = new Class<?>[paramClassNm.length];
		    				Object[] oParam = new Object[paramClassNm.length];

		    				if(!isEmptyInDs) {

			    				for (int k=0; k<paramClassNm.length; k++) {

					    			paramClass[k] = Class.forName(paramClassNm[k]);
					    			log.debug("[FommSvcServiceImpl]-execJavaService " + (k + 1) + "번째 매개변수 : [" + paramClass[k].getName() + "]");
	
					    			if(inDsArr.length > k) {
					    				
				    					log.debug("[FommSvcServiceImpl]-execJavaService inDsArr[" + k + "] : " + inDsArr[k]);
	
				    					if(!"".equals(inDsArr[k])) {
				    						
				    						String inDs = StringUtil.safe(inDsArr[k]);
				    						
				    						if(inDs.indexOf(":") > -1)	inDs = inDs.split(":")[0];

				    						DataSet paramDs = dataSetList.get(inDs);
				    						
				    						Map<String, Object> inMap = null;
				    						List<Map<String, Object>> inList = null;
				    						
				    						if(paramDs == null) {
				    							log.debug("[FommSvcServiceImpl]-execJavaService paramDs IS NULL inDs : " + inDs);
				    						}
		
		//		    						log.debug("[execJavaService] paramDs : " + paramDs.saveXml());
				    						log.debug("[FommSvcServiceImpl]-execJavaService paramClass[" + k + "] : " + paramClass[k] + " paramClassNm[" + k + "]:[" + paramClassNm[k] + "]");
	
					    					if(paramClass[k] == java.util.Map.class || paramClass[k] == java.util.HashMap.class) {
	
					    						inMap = new HashMap<>();
		
					    						if(paramDs != null) {
						    						log.debug("[FommSvcServiceImpl]-execJavaService Map paramDs.getColumnCount() : " + paramDs.getColumnCount());
		
						    						for (int l = 0; l < paramDs.getColumnCount(); l++) {
						    	    					String colNm = paramDs.getColumn(l).getName();
						    	    					inMap.put(colNm, paramDs.getString(0, colNm));
						    						}
						    						oParam[k] = inMap;
					    						}
		
					    					}else if(paramClass[k] == java.util.List.class || paramClass[k] == java.util.ArrayList.class) {
					    						
		//			    						log.debug("[FommSvcServiceImpl]-execJavaService List paramDs.getColumnCount() : " + paramDs.getColumnCount());
					    						inList = new ArrayList<Map<String,Object>>();
					    						
					    						if(paramDs != null) {
		
						    						for (int l=0; l<paramDs.getRowCount(); l++) {
						    							
						    							Map<String, Object> rowMap = new HashMap<>();
						    							
						    							for (int m = 0; m < paramDs.getColumnCount(); m++) {
						    								String colNm = paramDs.getColumn(m).getName();
						    								rowMap.put(colNm, paramDs.getString(l, colNm));
						    							}
						    							inList.add(rowMap);
						    						}
						    						oParam[k] = inList;
					    						}
	
					    					}else {
					    						log.debug("[FommSvcServiceImpl]-execJavaService ELSE TypeName:[" + paramClass[k].getTypeName() + "]");
					    					}
				    					}
				    				}
					    		}
		    				}
				    			
			    			Method method = svcClass.getMethod(svcArr[2], paramClass);
			    			
			    			if(method == null) {
				    			throw new Exception("[FommSvcServiceImpl]-execJavaService svcNm:[" + svcNm + "] 존재하지 않습니다.");
				    		}
			    			
			    			Object retObj = null;

			    			try {
				    			retObj = method.invoke(object, oParam);	//Class Method를 매개변수를 셋팅하여 실행

				    		}catch(Exception e) {
				    			e.printStackTrace();
				    			throw new Exception("[FommSvcServiceImpl]-execJavaService svcNm:[" + svcNm + "]");
				    		}

			    			log.debug("[FommSvcServiceImpl]-execJavaService i=" + i + " [outDs] :::: " + outDs);

			    			if(!"".equals(outDs)) {
			    			
		    					if(retObj != null) {
	
		    						Map<String, Object> outMap = new HashMap<>();
		    						
			    					log.debug("[FommSvcServiceImpl]-execJavaService [" + svcNm + "] outDs:[" + outDs + "] retObj.getClass():[" + retObj.getClass().getName() + "]");
			    					
	
		    						if(retObj.getClass() == java.util.HashMap.class || retObj.getClass() == java.util.Map.class) {
		    	    					Map<String, Object> resultData = (Map<String, Object>) retObj;
		    	    					outMap.put(outDs, resultData);
	
		    	    				}else if(retObj.getClass() == java.util.List.class || retObj.getClass() == java.util.ArrayList.class) {
	
		    	    					List<Map<String, Object>> resultData = (List<Map<String, Object>>) retObj;
		    	    					
		    	    					for (int k = 0; k < resultData.size(); k++) {
	
		    	    						for(String colNm : resultData.get(k).keySet()) {
	
		    	    							if(resultData.get(k).get(colNm) != null) {
	
		    	    								String colType = resultData.get(k).get(colNm).getClass().toString().toUpperCase();
		    	    								if(colType.indexOf("CLOB") > -1) {
	
		    	    									Clob clob = (Clob) resultData.get(k).get(colNm);
	
		    	    	    							if(clob != null) {
		    	    	    								Reader reader = clob.getCharacterStream();
		    	    	    								String str = IOUtils.toString(reader);
		    	    	    								if(reader != null) {
		    	    	    									reader.close();
		    	    	    								}
		    	    	    								resultData.get(k).put(colNm, str);
		    	    	    							}
		    	    								}
		    	    							}
		    								}
		    							}
		    	    					outMap.put(outDs, resultData);
	
		    	    				}else if(retObj.getClass() == com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData.class) {
		    	    					MapMetaData metaData = (MapMetaData) retObj;
		    	    					outMap.put(outDs, metaData);
		    	    				}
		    		    			rtnDataObj.add(outMap);
		    		    		}
			    			}
	    					break;
						}
		    		}

	    		}else {

	    			log.debug("[FommSvcServiceImpl]-[" + svcNm + "] 서비스명이 올바르게 지정되지 않았습니다.");
	    			throw new Exception("[FommSvcServiceImpl]-[" + svcNm + "] 서비스명이 올바르게 지정되지 않았습니다.");
	    		}
	       	}
		}
		return rtnDataObj;
	}
}