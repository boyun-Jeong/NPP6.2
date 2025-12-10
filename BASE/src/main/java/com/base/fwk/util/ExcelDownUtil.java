package com.base.fwk.util;

import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import jakarta.inject.Inject;
import jakarta.inject.Provider;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.util.CellAddress;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.jakarta.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.jakarta.core.data.NexacroResult;
import com.base.com.vo.SessionContext;

@Controller
@RequestMapping("ExcelDownUtil")
public class ExcelDownUtil {

	private static Logger log = LoggerFactory.getLogger(ExcelDownUtil.class);

	@Inject
	private Provider<SessionContext> sc;

	/**
	 * Excel 다운로드 정보를 Session 정보에 등록
	 * @param dsParams
	 * @return
	 */
	@RequestMapping("/regExcelDownInfo")
	public NexacroResult regExcelInfo(@ParamDataSet(name = "dsParams") Map<String, Object> paramMap) throws Exception {

		NexacroResult result = new NexacroResult();

		String fileNm = StringUtil.safe(paramMap.get("_FILE_NM_"));
		log.debug("[ExcelDownUtil] regExcelInfo() fileNm : [{}]", fileNm);
		sc.get().setScExcelFileNm(fileNm);
		log.debug("[ExcelDownUtil] regExcelInfo() sc.get().getScExcelFileNm() : [{}]", sc.get().getScExcelFileNm());
		paramMap.remove("_FILE_NM_");

		Map<String, Object> map = new HashMap<String, Object>();
		String callControllerNm	= StringUtil.safe(paramMap.get("_CALL_CONTROLLER_NM_"));
		map.put("CALL_CONTROLLER_NM", callControllerNm);
		
		paramMap.remove("_CALL_CONTROLLER_NM_");
		sc.get().setScExcelParamMap(paramMap);
		
		result.addDataSet("dsExcelControllerInfo", map);
	    return result;
    }

	/**
	 * Excel 다운로드를 브라우저로 실행
	 * @param dsParams
	 * @return
	 */
	public static void excelFileDownload(HttpServletResponse response, SXSSFWorkbook wb, String excelFileNm) throws Exception {
		
		long time = System.currentTimeMillis();
		
		if("".equals(excelFileNm)) {
			excelFileNm += UUID.randomUUID() + "_" + time;
		}
		log.debug("excelFileNm:[{}]", excelFileNm);

		response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
		response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(excelFileNm, "UTF-8").replaceAll("\\+", "%20") + ".xlsx");

		wb.write(response.getOutputStream());
		wb.dispose();
		wb.close();
	}

	/**
	 * getRowColumnIndex : Excel의 주소 문자로 Cell의 열Index값을 리턴
	 * @param String 주소문자값
	 * @return [int] Index
	 */
	public static int getExcelColumnIndex(String cellAddr) {
		cellAddr = cellAddr.toUpperCase().replaceAll(" ", "");																	//공백제거
		return StringUtil.safeInt(new CellAddress(cellAddr.replaceAll("\\d", "") + "1").getColumn(), -1);		//EXCEL 열을 구하는 경우 엑셀표의 CELL주소행 숫자는 필요 없으므로 1로 고정해서 열을 구한다.
	}

	/**
	 * getFont : 인자로 설정한 Excel Font 객체를 반환
	 * @param SXSSFWorkbook	Excel Workbook 객체
	 * @param String					설정할 Font명
	 * @param int						설정할 Font 색상	IndexedColors
	 * @param int						설정할 Font Size PT
	 * @param boolean				Bold 설정여부
	 * @param boolean				Italic 설정여부
	 * @param boolean				Strikeout 설정여부
	 * @return [Font] Object
	 */
	public static Font getFont(SXSSFWorkbook wb, String fontNm, int fontColor, int fontSize, boolean isBold, boolean isItalic, boolean isStrikeout) {
		
		Font customFont = wb.createFont();
		customFont.setFontName(fontNm);	//Modern H Medium, 나눔고딕
		customFont.setColor((short) fontColor);
		customFont.setFontHeightInPoints((short) fontSize);
		customFont.setBold(isBold);
		customFont.setItalic(isItalic);
		customFont.setStrikeout(isStrikeout);
		return customFont;
	}
	
	/** 
	 * getCellStyle : CellStyle 설정
	 * @param SXSSFWorkbook		Excel Workbook 객체
	 * @param Font							CellStyle에 설정할 Font 객체
	 * @param int[]							Cell 배경색 설정
	 * @param FillPatternType			Cell 채우기 설정
	 * @param BorderStyle[]			Cell Border Style 설정
	 * @param short[]						Cell Border 색상 [IndexedColors]		※ short[] 첫번째 배열 : 전경색 설정값, 두번째 배열 : 배경색 설정값
	 * @param HorizontalAlignment	Cell 수평 정렬 설정
	 * @param VerticalAlignment		Cell 수직 정렬 설정
	 * @param boolean					줄바꿈 설정 여부
	 * @param String						Cell DataFormat 문자열
	 */
	public static CellStyle getCellStyle(	SXSSFWorkbook wb, Font font, XSSFColor[] foreBackColor, FillPatternType fillPattern, BorderStyle[] borderArr, short[] borderColorArr,
														HorizontalAlignment h_align, VerticalAlignment v_align, String dataFormat, boolean isWarpText) {
		
		XSSFWorkbook xwb = wb.getXSSFWorkbook();
		
		XSSFCellStyle uCellStyle = xwb.createCellStyle();

		//1. font설정
		uCellStyle.setFont(font);

		if(foreBackColor != null) {
			
			//전경색 설정	[ ex) IndexedColors.DARK_YELLOW.getIndex() ]
			//log.debug("foreBackColor.length : " + foreBackColor.length);

			if(foreBackColor.length > 0) {
				
				if(foreBackColor[0] == null) {
					uCellStyle.setFillForegroundColor(IndexedColors.WHITE.getIndex());

				}else {
					XSSFColor bkColor = foreBackColor[0];
					uCellStyle.setFillForegroundColor(bkColor);
				}
				
				if(foreBackColor.length == 2) {
					
					if(foreBackColor[1] == null) {
						uCellStyle.setFillBackgroundColor(IndexedColors.WHITE.getIndex());

					}else {
						XSSFColor bkColor = foreBackColor[1];
						uCellStyle.setFillBackgroundColor(bkColor);
					}
				}
			}
		}

		//채우기 패턴	[ ex) FillPatternType.BIG_SPOTS ] ※ NO_FILL : 채우기 없음, SOLID_FOREGROUND : 단색채우기, FINE_DOTS : 미세한 점, ALT_BARS : 교차막대, BIG_SPOTS : 큰 점, THIN_HORZ_BANDS : 얇은 수평 줄무늬
		if(fillPattern == null)	uCellStyle.setFillPattern(foreBackColor == null ? FillPatternType.NO_FILL : FillPatternType.SOLID_FOREGROUND);
		else							uCellStyle.setFillPattern(fillPattern);

		if(borderArr != null) {
			if(borderArr.length >= 1)	uCellStyle.setBorderLeft(borderArr[0]);			//LEFT - BORDER
			if(borderArr.length >= 2)	uCellStyle.setBorderTop(borderArr[1]);		//TOP - BORDER
			if(borderArr.length >= 3)	uCellStyle.setBorderRight(borderArr[2]);		//RIGHT - BORDER
			if(borderArr.length >= 4)	uCellStyle.setBorderBottom(borderArr[3]);	//BOTTOM - BORDER
		}
//		else {
//			uCellStyle.setBorderLeft(BorderStyle.NONE);		//LEFT - BORDER 
//			uCellStyle.setBorderTop(BorderStyle.NONE);		//TOP - BORDER      
//			uCellStyle.setBorderRight(BorderStyle.NONE);		//RIGHT - BORDER
//			uCellStyle.setBorderBottom(BorderStyle.NONE);	//BOTTOM - BORDER   
//		}

		if(borderColorArr != null) {
			if(borderColorArr.length >= 1 && borderColorArr[0] != -1)	uCellStyle.setLeftBorderColor(borderColorArr[0]);
			if(borderColorArr.length >= 2 && borderColorArr[1] != -1)	uCellStyle.setTopBorderColor(borderColorArr[1]);
			if(borderColorArr.length >= 3 && borderColorArr[2] != -1)	uCellStyle.setRightBorderColor(borderColorArr[2]);
			if(borderColorArr.length >= 4 && borderColorArr[3] != -1)	uCellStyle.setBottomBorderColor(borderColorArr[3]);
		}

		//셀 정렬
		if(h_align != null)	uCellStyle.setAlignment(h_align);
		if(v_align != null)	uCellStyle.setVerticalAlignment(v_align);

		//셀 DataFormat
		if(!"".equals(dataFormat) && dataFormat !=null) {
			
			DataFormat df = wb.createDataFormat();
			/* 예시
			 * 숫자 형식(1,234)			 format.getFormat("#,##0")
			 * 날짜 형식(2025-01-01)	 format.getFormat("yyyy-mm-dd")
			 * 퍼센트 형식(80%)			 format.getFormat("0.00%")
			 * 소수점 3자리(123,456)	 format.getFormat("#,##0.000")
			 * 텍스트						 format.getFormat("@")
			 */
			uCellStyle.setDataFormat(df.getFormat(dataFormat));
		}
		
		uCellStyle.setWrapText(isWarpText);	//줄바꿈 설정
		return uCellStyle;
	}

	//설정된 Font와 Text에 대한 Cell의 실제 높이를 구하여 리턴
	public static float getCellHeight(SXSSFWorkbook wb, SXSSFSheet sheet, Cell cell, CellStyle cs, String text) {
		cs.setWrapText(true);
		cell.setCellStyle(cs);
		cell.setCellValue(text);

		Font font = wb.getFontAt(cs.getFontIndexAsInt());
		short fomtHeightTwips	= font.getFontHeight();				//TWIPS 단위
		//log.debug("fomtHeightTwips:\n" + fomtHeightTwips);

		float fontHeightPoints	= fomtHeightTwips / 20f;
		//log.debug("fontHeightPoints:\n" + fontHeightPoints);
		
		float defaultRowHeightPoints	= fontHeightPoints * 1.5f;	//대략적인 높이 비율
		//log.debug("defaultRowHeightPoints:\n" +defaultRowHeightPoints);
		
		int lineCnt = StringUtil.safe(cell.getStringCellValue()).split("\n").length;
		//log.debug("text:\n" + text);
		//log.debug("lineCnt : " + lineCnt);
		//log.debug("height : " + ((float) (defaultRowHeightPoints * lineCnt)));
		return (float) ((defaultRowHeightPoints * lineCnt) + 4);
	}

	//Cell 회계 서식 format을 리턴
	public static String getAcctFormatString() {
		return "_-* #,##0_-;-* #,##0_-;_-* \"-\"_-;_-@_-";
	}
}