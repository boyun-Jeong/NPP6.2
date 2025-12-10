package com.base.sr.service.impl;

import java.util.List;
import java.util.Map;
import jakarta.inject.Inject;
import jakarta.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.base.com.vo.SessionContext;
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR0040DDAO;
import com.base.sr.dao.SRCommDAO;
import com.base.sr.service.SR0040DService;

/**
 * 
 * <pre>
 * @title
 * - 기본요청서 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 07. 21.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 07. 21.	정보윤		최초작성
 */
@Service
public class SR0040DServiceImpl implements SR0040DService {

	private Logger log = LoggerFactory.getLogger(SRCommServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR0040DDAO sr0040dDao;

	@Autowired
	private SRCommDAO srCommDao;

	/**
	 * 기본요청서 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {

		List<Map<String, Object>> result = sr0040dDao.select01(dsCond);

		return result;
	}

	/**
	 * 기본요청서 저장
	 */
	@Transactional
	public void save01(Map<String, Object> rowData) throws Exception {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		// DATA RowType 가져오기
		String saveGubun = StringUtil.safe(rowData.get("SAVE_GUBUN"));
    	String rowFlag = StringUtil.safe(rowData.get("ROWFLAG"));
    	String cegrNm = StringUtil.safe(rowData.get("GUBUN_NM"));
    	String procUserId = StringUtil.safe(rowData.get("PROC_USER_ID"));
    	String reqDesc = StringUtil.safe(rowData.get("REQ_DESC"));
    	
    	rowData.put("LMID", userId);
    	rowData.put("LMPID", lmpId);

    	if("I".equals(rowFlag) || "U".equals(rowFlag)) {
    		sr0040dDao.modify01(rowData);
    	}

//    	if("REV".equals(saveGubun)) {
//    	}
    	
    	String rtn = srCommDao.selectOtherRevUserCnt(rowData);
		
		log.debug("SR0200D save02() rtn :::::::::::::::: " + rtn);
		
		if("Y".equals(rtn)) {
			throw new Exception();

		}else {
    	
	    	rowData.put("USER_ID", procUserId);
			rowData.put("GUBUN_NM", cegrNm);
			rowData.put("PROC_EXAM_OPIN", reqDesc);
			rowData.put("CEGR_ID", "");
			rowData.put("LOGIN_ID", userId);
			rowData.put("LMPID", lmpId);
			
			srCommDao.callPrSrRevProc(rowData);
			
	//		 #{SAVE_GUBUN, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{REQ_ID, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{WF_PROC_CD, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{USER_ID, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{GUBUN_NM, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{PROC_EXAM_OPIN, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{CEGR_ID, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{PROC_DATE, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{PROC_SDTIME, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{PROC_EDTIME, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{RMK, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{LOGIN_ID, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{LMPID, mode=IN, jdbcType=VARCHAR, javaType=string}
	//		,#{OUT_RTN_CD, mode=OUT, jdbcType=INTEGER, javaType=int}
	//		,#{OUT_RTN_MSG, mode=OUT, jdbcType=VARCHAR, javaType=string})}

			int outRtnCd = Integer.parseInt(StringUtil.safe(rowData.get("OUT_RTN_CD")));
			String outRtnMsg = StringUtil.safe(rowData.get("OUT_RTN_MSG"));

			if(outRtnCd < 0) {
				log.debug("ERROR OUT_RTN_CD====================> " + outRtnCd);
				log.debug("ERROR OUT_RTN_MSG====================> " + outRtnMsg);
				throw new Exception();

			}else {
				log.debug("OUT_RTN_CD====================> " + outRtnCd);
				log.debug("OUT_RTN_MSG====================> " + outRtnMsg);
			}
		}
	}
}