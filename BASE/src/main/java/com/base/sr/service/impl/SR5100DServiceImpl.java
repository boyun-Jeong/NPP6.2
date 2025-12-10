package com.base.sr.service.impl;

import java.io.Reader;
import java.sql.Clob;
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
import com.base.fwk.util.StringUtil;
import com.base.sr.dao.SR5100DDAO;
import com.base.sr.service.SR5100DService;

/**
 * 
 * <pre>
 * @title
 * - 문제등록 Service(구현체)
 * @package com.base.sr.service.impl
 * <pre>
 *
 * @author  이정빈
 * @since   2023. 12. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 12. 01.	이정빈		최초작성
 */
@Service
public class SR5100DServiceImpl implements SR5100DService {

	private Logger log = LoggerFactory.getLogger(SR0200DServiceImpl.class);

	@Inject
	private Provider<SessionContext> sc;

	@Autowired
	private SR5100DDAO sr5100dDao;

	/**
	 * 문제등록 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) throws Exception {

		List<Map<String, Object>> result = sr5100dDao.select01(dsCond);
		
		for (int i = 0; i < result.size(); i++) {

			Clob clob = (Clob) result.get(i).get("REQ_CONT");

			if(clob != null) {
				Reader reader = clob.getCharacterStream();
				String str = IOUtils.toString(reader);
				result.get(i).put("REQ_CONT", str);
				if(reader != null)	reader.close();
			}
		}
		return result;
	}

	/**
	 * 문제등록 저장
	 */
	@Transactional
	public void save01(Map<String, Object> dsWfPbm) {

		String userId 	= sc.get().getScUserId();
		String lmpId 	= sc.get().getScLmpId();

		// DATA RowType 가져오기
	    String rowFlag = StringUtil.safe(dsWfPbm.get("ROWFLAG"));
	    
	    log.debug("sr5100dDao.save() rowFlag==================================" + rowFlag);
	    
	    dsWfPbm.put("LMID", userId);
	    dsWfPbm.put("LMPID", lmpId);

    	if("I".equals(rowFlag)) {
    		sr5100dDao.insert01(dsWfPbm);

    	}else if("U".equals(rowFlag)) {
    		sr5100dDao.modify01(dsWfPbm);
    	}
	}
}