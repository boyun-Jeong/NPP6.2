package com.base.com.service;

import java.util.List;
import java.util.Map;
import com.nexacro.java.xapi.data.DataSetList;

/**
 * 
 * <pre>
 * @title
 * - 계정 신청(요청서) Service Intreface
 * @package com.base.sr.service
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
public interface FommSvcService {

	/**
	 * java Service Call
	 * @param rowData
	 */
	public List<Map<String, Object>> execJavaService(DataSetList dataSetList) throws Exception;
}