package com.base.com.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

/**
 * 
 * <pre>
 * @title   
 * -        바코드 파일 DAO
 * @package com.base.com.dao
 * <pre>
 *
 * @author  WEMB
 * @since   2023. 04. 06.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜          변경자	내용
 * ------------------------------------------------
 * 2023.04.06.  WEMB	최초작성
 */
@Repository
public interface FommBarcodeFileDAO {


	/**
	 * 바코드 출력 이력 저장
	 * @param dsCond
	 * @return
	 */
	public void insertBarcodeHist(Map<String, Object> rowData);
}
