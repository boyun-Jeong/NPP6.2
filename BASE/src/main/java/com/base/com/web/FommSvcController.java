package com.base.com.web;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.base.com.service.FommSvcService;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;

import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("FOMMSVC")
public class FommSvcController {

	private Logger log = LoggerFactory.getLogger(FommSvcController.class);
	
	@Inject
	private Provider<SessionContext> sc;
	
	@Autowired
	private FommSvcService fommSvc;
	
	/**
	 * Java Service 호출
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/execService")
	public NexacroResult execJavaService(HttpServletRequest req, HttpServletResponse res) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(req, "PlatformSsv", "UTF-8");
		
		httpPlatformRequest.receiveData();
	    PlatformData platformData = httpPlatformRequest.getData();	    
	    DataSetList pDataSetList = platformData.getDataSetList();

	    log.debug("fommMenuId===> " + platformData.getVariable("fommMenuId"));
	    log.debug("fommScreenId===> " + platformData.getVariable("fommScreenId"));
	    
	    List<Map<String, Object>> selectObj = null;
		
		try {
			
			selectObj = fommSvc.execJavaService(pDataSetList);

			for (int i = 0; i < selectObj.size(); i++) {
				for(String name : selectObj.get(i).keySet()) {
					if(name.indexOf("_MapMeta_") > -1) {	//조회된 데이터가 없는 경우는 MapMeta가 붙어서 넘어온다.
						String dsNm = name.replaceAll("_MapMeta_", "");
						DataSet ds = new DataSet(dsNm);
						Map<String, Object> map = (Map<String, Object>) selectObj.get(i).get(name);

						for(String colNm : map.keySet())	ds.addColumn(colNm, 1);
						result.addDataSet(ds);

					}else {
						result.addDataSet(name, selectObj.get(i).get(name));
					}
				}
			}

		}catch(Exception e) {
			result.setErrorCode(-1);
			if(!"".equals(StringUtil.safe(sc.get().getScSessionMsg()))) {
				result.setErrorCode(-90000);
				result.setErrorMsg(sc.get().getScSessionMsg());
				sc.get().setScSessionMsg("");
			}else {
				if(e.getMessage() != null) {
					result.setErrorMsg("[ERROR]:" + e.getMessage());					
				}else {
					result.setErrorMsg("실행 중 오류가 발생했습니다.");
				}
			}
            return result;
		}
		return result;
	}
}
