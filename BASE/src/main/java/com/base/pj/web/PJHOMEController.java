package com.base.pj.web;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.jakarta.core.NexacroException;
import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.pj.service.PJHOMEService;

/**
 * 
 * <pre>
 * @title
 * - 프로젝트 관리(업무공통) Controller
 * @package com.base.pj.web
 * <pre>
 *
 * @author  정보윤
 * @since   2023. 09. 22.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자				내용
 * ------------------------------------------------
 * 2023. 09. 22.	정보윤		최초작성
 */
@Controller
@RequestMapping("PJHOME")
public class PJHOMEController {

	private Logger log = LoggerFactory.getLogger(PJHOMEController.class);

	@Autowired
	private PJHOMEService pjHomeSvc;

	/**
	 * 프로젝트 진척 현황
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select01")
	public NexacroResult select01(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException
	{

		List<Map<String, Object>> dsData = pjHomeSvc.select01(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select02")
	public NexacroResult select02(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		List<Map<String, Object>> dsData = pjHomeSvc.select02(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select03")
	public NexacroResult select03(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{

		List<Map<String, Object>> dsData = pjHomeSvc.select03(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select04")
	public NexacroResult select04(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{

		List<Map<String, Object>> dsData = pjHomeSvc.select04(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select05")
	public NexacroResult select05(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{

		List<Map<String, Object>> dsData = pjHomeSvc.select05(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select06")
	public NexacroResult select06(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart1 = pjHomeSvc.select06(dsCond);
		List<Map<String, Object>> dsData = pjHomeSvc.select11(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart1", dsChart1);
		result.addDataSet("dsData", dsData);
		
		return result;
	}

	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select07")
	public NexacroResult select07(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{

		List<Map<String, Object>> dsData1 = pjHomeSvc.select07(dsCond);
		List<Map<String, Object>> dsCnt1 = pjHomeSvc.select09(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData1", dsData1);
		result.addDataSet("dsCnt1", dsCnt1);
		return result;
	}
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select08")
	public NexacroResult select08(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{

		List<Map<String, Object>> dsData2 = pjHomeSvc.select08(dsCond);
		List<Map<String, Object>> dsCnt2 = pjHomeSvc.select10(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData2", dsData2);
		result.addDataSet("dsCnt2", dsCnt2);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select09")
	public NexacroResult select09(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsReqData = pjHomeSvc.select12(dsCond);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsReqData", dsReqData);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select10")
	public NexacroResult select10(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsSubData = pjHomeSvc.select13(dsCond);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsSubData", dsSubData);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select11")
	public NexacroResult select11(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart1 = pjHomeSvc.select15(dsCond);
		/* List<Map<String, Object>> dsChart2 = pjHomeSvc.select16(dsCond); */
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart1", dsChart1);
		/* result.addDataSet("dsChart2", dsChart2); */
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select12")
	public NexacroResult select12(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsReqData = pjHomeSvc.select16(dsCond);
		List<Map<String, Object>> dsChart = pjHomeSvc.select17(dsCond); 
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsReqData", dsReqData);
		result.addDataSet("dsChart", dsChart); 
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select13")
	public NexacroResult select13(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsData = pjHomeSvc.select18(dsCond);
		List<Map<String, Object>> dsChart = pjHomeSvc.select19(dsCond); 
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		result.addDataSet("dsChart", dsChart);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select14")
	public NexacroResult select14(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select14(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select15")
	public NexacroResult select15(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select15(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	

	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select16")
	public NexacroResult select16(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select16(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	

	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select17")
	public NexacroResult select17(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select17(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select18")
	public NexacroResult select18(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select18(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select19")
	public NexacroResult select19(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select19(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select20")
	public NexacroResult select20(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select20(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select21")
	public NexacroResult select21(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsData = pjHomeSvc.select21(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}	
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select22")
	public NexacroResult select22(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsData = pjHomeSvc.select22(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}	
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select23")
	public NexacroResult select23(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select23(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select24")
	public NexacroResult select24(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsChart = pjHomeSvc.select24(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChart", dsChart);
		return result;
	}	
	
	
	/**
	 * 
	 * @param dsCond
	 * @return
	 */
	@RequestMapping("/select25")
	public NexacroResult select25(@ParamDataSet(name = "dsCond") Map<String, Object> dsCond) throws NexacroException 
	{
		
		List<Map<String, Object>> dsData = pjHomeSvc.select25(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsData", dsData);
		return result;
	}			
	
}