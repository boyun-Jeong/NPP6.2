package com.base.com.vo;

import java.io.Serializable;
import java.util.Map;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("SessionContext")
@Scope("session")
public class SessionContext implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private String scUserId;										// 사용자 ID
	private String scUserNm;									// 사용자명
	private String scUserPw;										// 비번
	private String scCoCd;										// 회사코드
	private String scCoNm;										// 회사명
	private String scDeptCd;									// 부서코드
	private String scDeptNm;									// 부서명
	private String scPosCd;										// 직급코드
	private String scPosNm;										// 직급명
	private String scRoleCd;										// 직책코드
	private String scRoleNm;									// 직책명
	private String scEmailAdr;									// 이메일주소
	private String scTelnum;										// 전화번호
	private String scMobileNum;								// 휴대폰번호
	private String scSysLangCd;								// 시스템기본언어코드
	private String scLangCd;									// 언어코드(사용자TBL-COLUMN)
	private String scSelLangCd;								// 선택언어코드
	private String scAuthId;										// 권한그룹ID (','구분)
	private String scAuthNm;									// 권한그룹명 (','구분)
	private String scAuthAdminYn;							// /* 권한그룹 관리자여부  ','구분 */
	private String scAdminYn;									// /* 전체 관리자여부  ','구분 */
	private String scUserType;									// 사용자구분 
	private String scUserFlag;									// 메인화면구분용(1:IT부문, 2:현업) 
	private String scLReqMenuId;								// 최종요청메뉴ID
	private String scLmpId;										// 최종수정화면ID
	private String scPwInitDt;									// 비밀번호 초기화 일시
	private String scPwExpDt;									// 비밀번호 만료 일시
	private String scMkeyLoginYn;							// 
	private String scItDeptYn;									//IT부서여부
	
	private int scSessionCode;									// 현재 Session에서 담아두고 사용할 MSG
	private String scSessionMsg;								// 현재 Session에서 담아두고 사용할 MSG
	private boolean authenticated;							// 인증여부
	
	private String scOrgUserId;								// 실제 로그인한 USER_ID
	
	private int firstRanKey;										//로그인 세션 랜덤키1
	private int lastRanKey;										//로그인 세션 랜덤키2
	private String encUserKey;									//로그인 사번 암호키
	
	private String scExtdId;										// 확장권한ID (','구분)
	
	//엑셀 다운로드용 session 변수
	private String scExcelFileNm;								//Excel Download할 파일명 
	private Map<String, Object> scExcelParamMap;	//Excel Download 파일을 생성할 JAVA Controller명

	// 사용자 ID
	public String getScUserId() 																		{	return scUserId; }
	public void setScUserId(String scUserId)														{	this.scUserId = scUserId; }
	// 사용자명
	public String getScUserNm()																		{	return scUserNm; }
	public void setScUserNm(String scUserNm)												{	this.scUserNm = scUserNm; }
	// 비번
	public String getScUserPw()																		{	return scUserPw; }
	public void setScUserPw(String scUserPw)													{	this.scUserPw = scUserPw; }

	// 회사코드
	public String getScCoCd()																			{	return scCoCd; }
	public void setScCoCd(String scCoCd)														{	this.scCoCd = scCoCd; }
	// 회사명
	public String getScCoNm()																			{	return scCoNm; }
	public void setScCoNm(String scCoNm)														{	this.scCoNm = scCoNm; }

	// 부서코드
	public String getScDeptCd() 																		{	return scDeptCd; }
	public void setScDeptCd(String scDeptCd)													{	this.scDeptCd = scDeptCd; }

	// 부서명
	public String getScDeptNm() 																		{	return scDeptNm; }
	public void setScDeptNm(String scDeptNm) 												{	this.scDeptNm = scDeptNm; }

	// 직급코드
	public String getScPosCd() 																		{	return scPosCd; }
	public void setScPosCd(String scPosCd)														{	this.scPosCd = scPosCd; }
	// 직급명
	public String getScPosNm() 																		{	return scPosNm; }
	public void setScPosNm(String scPosNm) 													{	this.scPosNm = scPosNm; }
	
	// 직책코드
	public String getScRoleCd() 																		{	return scRoleCd; }
	public void setScRoleCd(String scRoleCd)													{	this.scRoleCd = scRoleCd; }
	// 직책명
	public String getScRoleNm() 																		{	return scRoleNm; }
	public void setScRoleNm(String scRoleNm) 												{	this.scRoleNm = scRoleNm; }
	
	// 이메일주소
	public String getScEmailAdr() 																	{	return scEmailAdr; }
	public void setScEmailAdr(String scEmailAdr)												{	this.scEmailAdr = scEmailAdr; }
	
	// 전화번호
	public String getScTelnum() 																		{	return scTelnum; }
	public void setScTelnum(String scTelnum) 													{	this.scTelnum = scTelnum; }
	
	// 휴대폰번호
	public String getScMobileNum() 																{	return scMobileNum; }
	public void setScMobileNum(String scMobileNum) 										{	this.scMobileNum = scMobileNum; }
	
	// 시스템 기본 언어코드
	public String getScSysLangCd() 																	{	return scSysLangCd; }
	public void setScSysLangCd(String scSysLangCd) 										{	this.scSysLangCd = scSysLangCd; }

	// 언어코드
	public String getScSelLangCd() 																	{	return scSelLangCd; }
	public void setScSelLangCd(String scSelLangCd) 											{	this.scSelLangCd = scSelLangCd; }

	// 언어코드
	public String getScLangCd() 																		{	return scLangCd; }
	public void setScLangCd(String scLangCd) 													{	this.scLangCd = scLangCd; }

	// 권한그룹 ID
	public String getScAuthId() 																		{	return scAuthId; }
	public void setScAuthId(String scAuthId) 													{	this.scAuthId = scAuthId; }

	// 권한그룹명
	public String getScAuthNm() 																		{	return scAuthNm; }
	public void setScAuthNm(String scAuthNm) 												{	this.scAuthNm = scAuthNm; }

	// 권한그룹 관리자여부
	public String getScAuthAdminYn()																{ return scAuthAdminYn; }
	public void setScAuthAdminYn(String scAuthAdminYn) 									{ this.scAuthAdminYn = scAuthAdminYn; }

	// 전체 관리자여부
	public String getScAdminYn()																		{	return scAdminYn; }
	public void setScAdminYn(String scAdminYn) 												{	this.scAdminYn = scAdminYn; }
		
	// 사용자구분
	public String getScUserType() 																	{	return scUserType; }
	public void setScUserType(String scUserType) 											{	this.scUserType = scUserType; }

	// 사용자구분 - 메인화면분기용
	public String getScUserFlag() 																		{	return scUserFlag; }
	public void setScUserFlag(String scUserFlag)												{	this.scUserFlag = scUserFlag; }
		
	// 최종요청 화면ID
	public String getScLReqMenuId() 																{	return scLReqMenuId; }
	public void setScLReqMenuId(String scLReqMenuId) 									{	this.scLReqMenuId = scLReqMenuId; }
	
	// 최종수정화면ID
	public String getScLmpId() 																		{	return scLmpId; }
	public void setScLmpId(String scLmpId) 														{	this.scLmpId = scLmpId; }

	// 최종수정화면ID
	public int getScSessionCode() 																	{	return scSessionCode; }
	public void setScSessionCode(int scSessionCode)										{	this.scSessionCode = scSessionCode; }
		
	// 최종수정화면ID
	public String getScSessionMsg() 																{	return scSessionMsg; }
	public void setScSessionMsg(String scSessionMsg) 									{	this.scSessionMsg = scSessionMsg; }

	// 인증여부
	public boolean isAuthenticated() 																{	return authenticated; }
	public void setAuthenticated(boolean authenticated)									{	this.authenticated = authenticated; }
	
	// 비밀번호 초기화 일시
	public String getScPwInitDt() 																		{	return scPwInitDt; }
	public void setScPwInitDt(String scPwInitDt)													{	this.scPwInitDt = scPwInitDt; }

	// 비밀번호 만료 일시
	public String getScPwExpDt() 																		{	return scPwExpDt; }
	public void setScPwExpDt(String scPwExpDt) 												{	this.scPwExpDt = scPwExpDt; }

	// 비밀번호 만료 일시
	public String getScMkeyLoginYn() 																{	return scMkeyLoginYn; }
	public void setScMkeyLoginYn(String scMkeyLoginYn) 								{	this.scMkeyLoginYn = scMkeyLoginYn; }
	
	//실제 로그인 USER_ID
	public String getScOrgUserId() 																	{	return scOrgUserId; }
	public void setScOrgUserId(String scOrgUserId)											{	this.scOrgUserId = scOrgUserId; }

	public int getFirstRanKey()																			{	return firstRanKey;	}
	public void setFirstRanKey(int firstRanKey)													{	this.firstRanKey = firstRanKey;	}

	public int getLastRanKey()																			{	return lastRanKey;	}
	public void setLastRanKey(int lastRanKey)													{	this.lastRanKey = lastRanKey;	}

	public String getEncUserKey()																		{	return encUserKey;	}
	public void setEncUserKey(String encUserKey)											{	this.encUserKey = encUserKey;	}

	public String getScItDeptYn()																		{	return scItDeptYn;	}
	public void setScItDeptYn(String scItDeptYn)												{	this.scItDeptYn = scItDeptYn;	}

	// 확장권한
	public String getScExtdId()																			{	return scExtdId;  }
	public void setScExtdId(String scExtdId)														{	this.scExtdId = scExtdId;	}

	//엑셀 다운로드용 session 변수
	public String getScExcelFileNm()																	{	return scExcelFileNm;  }
	public void setScExcelFileNm(String scExcelFileNm)										{	this.scExcelFileNm = scExcelFileNm;	}

	public Map<String, Object> getScExcelParamMap()										{	return scExcelParamMap;  }
	public void setScExcelParamMap(Map<String, Object> scExcelParamMap)	{	this.scExcelParamMap = scExcelParamMap;	}



	public static long getSerialversionuid() 														{	return serialVersionUID;	}
}