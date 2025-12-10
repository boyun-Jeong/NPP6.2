package com.base.fomm.service.impl;

import java.io.IOException;
import java.io.Reader;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.base.com.vo.SessionContext;
import com.base.fomm.dao.FOMM0510PDAO;
import com.base.fomm.service.FOMM0510PService;
import com.base.fwk.schedule.SppJobControl;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 통지관리 Service(구현체)
 * @package com.base.fomm.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2025. 02. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2025. 02. 25.	정보윤		최초작성
 */
@Service
public class FOMM0510PServiceImpl implements FOMM0510PService {

	private Logger log = LoggerFactory.getLogger(FOMM0510PServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private FOMM0510PDAO fomm0510pDao;
	
	@Autowired
	private SppJobControl sppJobCotrol;
	
	/**
	 * 통보설정관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		String sendTypeCd 	= StringUtil.safe(dsCond.get("SEND_TYPE_CD"));
		dsCond.put("DETAIL_PAGE_YN", "Y");
		if(!"".equals(sendTypeCd)) {
			String[] sendTypeCdArr = sendTypeCd.split(",");
			dsCond.put("SEND_TYPE_CD_ARR", sendTypeCdArr);
		}
		
		List<Map<String, Object>> list = fomm0510pDao.select01(dsCond);
		
		if(list != null) {
			
			String[] columns = new String[] {"CONT_DESC", "QUERY_DESC"};
			
			for (int i = 0; i < list.size(); i++) {
				
				for (int j = 0; j < columns.length; j++) {

					Clob clob = (Clob) list.get(i).get(columns[j]);
	
					if(clob != null) {
						try {
							Reader reader = clob.getCharacterStream();
							String str = IOUtils.toString(reader);
							if(reader != null) {
								reader.close();
							}
							list.get(i).put(columns[j], str);
						} catch (IOException e) {
							e.printStackTrace();
							log.debug("[FOMM0510PServiceImpl] select01() IOException e.getMessage() : " + e.getMessage());
						} catch (SQLException e) {
							e.printStackTrace();
							log.debug("[FOMM0510PServiceImpl] select01() SQLException e.getMessage() : " + e.getMessage());
						}
					}
				}
			}
		}
		return list;
	}
		
	/**
	 * 통보설정 저장
	 */
	public String save01(List<Map<String, Object>> dsList) throws Exception {
		String[] jobNoInfo = saveProc(dsList);
		log.debug("[FOMM0510PServiceImpl] save01() changeGubun:[{}]", jobNoInfo[1]);
	    setProcStatusJob(jobNoInfo[1], jobNoInfo[0]);
	    return jobNoInfo[0];
	}

	@Transactional
	public String[] saveProc(List<Map<String, Object>> dsList) {
		
		String userId	= sc.get().getScUserId();
		String lmpId		= sc.get().getScLmpId();
		String jobNo		= "";

		if(dsList != null) {

			Map<String, Object> condMap = new HashMap<String, Object>();
			Map<String, Object> rowData = dsList.get(0);

		    // DATA RowType 가져오기
	    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));

	    	rowData.put("LMID", userId);
	    	rowData.put("LMPID", lmpId);
	    	
	    	String changeGubun = "";

	    	if("I".equals(rowFlag)) {

	    		changeGubun = "CREATE";
	    		fomm0510pDao.insert01(rowData);
	    		jobNo = StringUtil.safe(rowData.get("JOB_NO"));

	    	}else if("U".equals(rowFlag)) {

	    		jobNo = StringUtil.safe(rowData.get("JOB_NO"));
	    		condMap.put("JOB_NO", jobNo);
	    		List<Map<String, Object>> list = fomm0510pDao.select01(condMap);

	    		log.debug("[FOMM0510PServiceImpl] saveProc() list.size() : " + list.size());

	    		String orgJobNo				= "";
	    		String orgDateTermUseYn	= "";		
	    		String orgStrDtime				= "";
    			String orgEndDtime			= "";
    			String orgUseYn					= "";
    			String orgCronExpr			= "";
    			
    			String curJobNo					= "";
    			String curDateTermUseYn	= "";
    			String curStrDtime				= "";
    			String curEndDtime			= "";
    			String curUseYn					= "";
    			String curCronExpr				= "";

	    		if(list != null) {

	    			orgJobNo					= StringUtil.safe(list.get(0).get("JOB_NO"));
	    			orgDateTermUseYn	= StringUtil.safe(list.get(0).get("DATE_TERM_USE_YN"));
	    			orgStrDtime				= StringUtil.safe(list.get(0).get("STR_DTIME"));
	    			orgEndDtime				= StringUtil.safe(list.get(0).get("END_DTIME"));
	    			orgUseYn					= StringUtil.safe(list.get(0).get("USE_YN"));
	    			orgCronExpr				= StringUtil.safe(list.get(0).get("CRON_EXPR"));
	    			
	    			log.debug(
	    					//save01
							"[FOMM0510PServiceImpl] saveProc() [ORG] JOB_NO:{}, DATE_TERM_USE_YN:{}, STR_DTIME:{}, END_DTIME:{}, USE_YN:{}, CRON_EXPR:{}",
							orgJobNo, orgDateTermUseYn, orgStrDtime, orgEndDtime, orgUseYn, orgCronExpr
	    			);
	    		}

	    		fomm0510pDao.modify01(rowData);

	    		list = fomm0510pDao.select01(condMap);
	    		
	    		log.debug("[FOMM0510PServiceImpl] saveProc() list.size():{}", list.size());

	    		if(list != null) {
	    			curJobNo					= StringUtil.safe(list.get(0).get("JOB_NO"));
	    			curDateTermUseYn		= StringUtil.safe(list.get(0).get("DATE_TERM_USE_YN"));
	    			curStrDtime				= StringUtil.safe(list.get(0).get("STR_DTIME"));
	    			curEndDtime				= StringUtil.safe(list.get(0).get("END_DTIME"));
	    			curUseYn					= StringUtil.safe(list.get(0).get("USE_YN"));
	    			curCronExpr				= StringUtil.safe(list.get(0).get("CRON_EXPR"));
	    			
	    			log.debug(
							"[FOMM0510PServiceImpl] saveProc() [CUR] JOB_NO:{}, DATE_TERM_USE_YN:{}, STR_DTIME:{}, END_DTIME:{}, USE_YN:{}, CRON_EXPR:{}",
							curJobNo, curDateTermUseYn, curStrDtime, curEndDtime, curUseYn, curCronExpr
	    			);
	    		}
	    		
	    		//[ORG] JOB_NO:1, DATE_TERM_USE_YN:Y, STR_DTIME:20250322140000, END_DTIME:20250322150000, USE_YN:Y, CRON_EXPR:0/10 * * 1/1 * ?
	    		//[CUR] JOB_NO:1, DATE_TERM_USE_YN:N, STR_DTIME:20250322140000, END_DTIME:20250322150000, USE_YN:Y, CRON_EXPR:0/10 * * 1/1 * ?
	    		
	    		if(!"".equals(curJobNo) && orgJobNo.equals(curJobNo)) {
	    			
	    			if( !orgUseYn.equals(curUseYn) ) {
	    				
	    				if("N".equals(curUseYn)) {
	    					//CommonFilter.getScheduler().pauseJob(new JobKey(curJobNo, "JOB_NO"));
	    					changeGubun = "STOP";
	    				}else {
	    					changeGubun = "CREATE";
	    				}

	    			}else {

	    				if("Y".equals(curUseYn)) {

	    					if("Y".equals(curDateTermUseYn)) {

	    						changeGubun = "UPDATE";
//	    						if( !orgStrDtime.equals(curStrDtime) || !orgEndDtime.equals(curEndDtime) || !orgCronExpr.equals(curCronExpr) ) {	// || !orgHolidayExecYn.equals(curStrDtime)
//	    							changeGubun = "UPDATE";
//	    						}

	    					}else {
	    						changeGubun = "UPDATE";
	    					}

	    				}else {
	    					//CommonFilter.getScheduler().pauseJob(new JobKey(curJobNo, "JOB_NO"));
	    					changeGubun = "STOP";
	    				}
	    			}
	    		}	    		
	    		
	    	}else if("D".equals(rowFlag)) {
	    		
	    		jobNo = StringUtil.safe(rowData.get("JOB_NO"));

	    		fomm0510pDao.remove01(rowData);
	    		//CommonFilter.getScheduler().pauseJob(new JobKey(jobNo, "JOB_NO"));
	    		changeGubun = "DELETE";
	    	}
	    	return new String[]{ jobNo, changeGubun};

		}else {
			return new String[] {null, null};
		}
	}

	@Transactional
	public void setProcStatusJob(String changeGubun, String jobNo) throws Exception {
		
		log.debug("[FOMM0510PServiceImpl] setProcStatusJob() changeGubun:[{}], jobNo:[{}]", changeGubun, jobNo);
		
		if("CREATE".equals(changeGubun)) {
    		sppJobCotrol.createJob("JOB_NO", jobNo);

    	}else if("UPDATE".equals(changeGubun)) {
    		//sppJobCotrol.stopJob(jobNo);
    		sppJobCotrol.removeJob("JOB_NO", jobNo);
    		sppJobCotrol.createJob("JOB_NO", jobNo);

    	}else if("STOP".equals(changeGubun)) {
    		
    		//sppJobCotrol.stopJob(jobNo);
    		sppJobCotrol.removeJob("JOB_NO", jobNo);

    	}else if("DELETE".equals(changeGubun)) {
    		sppJobCotrol.removeJob("JOB_NO", jobNo);
    	}
	}
	
	/**
	 * 통보 실행 이력 조회
	 * @param dsCond
	 * @return
	 */
	public List<Map<String, Object>> select02(Map<String, Object> dsCond) {		
		return fomm0510pDao.select02(dsCond);
	}
}