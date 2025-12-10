package com.base.com.service;

import java.util.List;
import java.util.Map;

/**
 * 
 * <pre>
 * @title   
 * -        바코드 파일 Servlce Interface
 * @package com.base.com.service
 * <pre>

 * @author  WEMB
 * @since   2023. 04. 06
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2023.04.06.	WEMB	최초작성
 */
public interface FommBarcodeFileService {
	
	/**
	 * 바코드 출력 이력 추가
	 * @param dsCond
	 * @return 
	 */
	public void insertBarcodeHist(List<Map<String, Object>> dsBarCode);
}