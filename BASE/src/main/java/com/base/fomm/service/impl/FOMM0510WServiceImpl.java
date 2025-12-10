package com.base.fomm.service.impl;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.fomm.dao.FOMM0510WDAO;
import com.base.fomm.service.FOMM0510WService;
import com.base.fwk.util.StringUtil;

/**
 * 
 * <pre>
 * @title
 * - 슬라이드 알림 관리 Service(구현체)
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
public class FOMM0510WServiceImpl implements FOMM0510WService {

	private Logger log = LoggerFactory.getLogger(FOMM0510WServiceImpl.class);

	@Autowired
	private FOMM0510WDAO fomm0510wDao;
	
	/**
	 * 통보설정관리 목록 조회
	 */
	public List<Map<String, Object>> select01(Map<String, Object> dsCond) {
		String sendTypeCds 	= StringUtil.safe(dsCond.get("SEND_TYPE_CDS"));
		if(!"".equals(sendTypeCds)) {
			String[] sendTypeCdArr = sendTypeCds.split(",");
			dsCond.put("SEND_TYPE_CD_ARR", sendTypeCdArr);
		}
		return fomm0510wDao.select01(dsCond);
	}	
}