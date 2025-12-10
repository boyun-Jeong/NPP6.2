package com.base.com.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface FommAuthDAO {

	// 사용자정보 조회
	public List<Map<String, String>> selectUserInfo(Map<String, Object> dsLogin);
	
	public void modifyLoginInfo(Map<String, Object> dsLogin);
	
	
	public List<Map<String, Object>> selectPwFailCnt(Map<String, Object> dsLogin);
	public void modifyPwFailCnt(Map<String, Object> dsLogin);
	
	// 관리자 접속 가능 IP 조회
	public List<Map<String, Object>> selectAdminIp(Map<String, Object> dsLogin);
	
	
	// 미래에셋 로그인 사용자정보 조회
	public List<Map<String, String>> isMiraeUser(Map<String, Object> dsLogin);
	
	public List<Map<String, Object>> sppExec(Map<String, Object> dsCond);
	public void sppExec2(Map<String, Object> dsCond);
	
	// 료그인 이력 추가
	public void insertUserLoginHt(Map<String, Object> rowData);
	
	// 사용자 비밀번호 변경
	public void changePw(Map<String, Object> rowData);
	
	// 사용자 비밀번호 변경 이력 조회
	public List<Map<String, Object>> selectUserPwHist(Map<String, Object> dsCond);
	
	// 사용자 비밀번호 변경 이력
	public void insertUserPwHist(Map<String, Object> rowData);
	
		
	//menu권한 존재여부 체크
	public String selectUserMenuAuthYn(String userId);
}
