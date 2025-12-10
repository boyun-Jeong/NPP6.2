package com.base.com.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * <pre>
 * @title
 * - 메모관리 Controller
 * @package com.base.com.web
 * <pre>
 *
 * @author  이정빈
 * @since   2025. 03. 17.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2025. 03. 17.	이정빈		최초작성
 */
@Controller
@RequestMapping("MEMO")
public class FommMemoMgrController {

	private Logger log = LoggerFactory.getLogger(FommMemoMgrController.class);
}