--------------------------------------------------------
--  DDL for Procedure PR_BACH_INSERT
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_BACH_INSERT" 
     
IS     
    -- 배치오류확인 인터페이스용 20231103 an 
    -- IF_V_ERROR_TASK_RESULT 테이블 데이터를 TBT_WF_BACH , TBT_WF_PROC_HIST 테이블에 insert 한다. 
    -- 요청자 = 잡패스, 담당자 = 작업담당자가 1 명인 경우에만 작업담당자를 처리담당자로 등록 한다.
    OUT_CODE NUMBER(38);      
    OUT_MSG  VARCHAR2(250);  

    CURSOR CUR_SEND_MSG IS
         SELECT
            'B'||TO_CHAR(B.REQ_ID + rownum)  AS REQ_ID,
            'BACH002'  AS ING_PHASE,
            TO_CHAR(SYSDATE, 'YYYYMMDD') AS REQ_DT,
            '[' || A.NAME || ']오류확인' AS SR_BRIEF,   
            '' AS REQ_CONT,   
            C.USER_ID WORK_USER_ID,
            C.USER_NM WORK_USER_NM,
            C.POS_NM WORK_USER_JBC_POSI,
            C.DEPT_CD WORK_DEPT_ID,
            'JOB-PASS' AS REG_USER_ID,
           '잡패스' AS REG_USER_NM,
           TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') AS REG_STIME,
           'JOB-PASS' AS LMOD_USER_ID,
           '잡패스' AS LMOD_USER_NM,
           TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') AS SYSMODTIME,
            A.PARENT_DIR,
            A.NAME,
            A.JOB_ID,
            A.CREATE_USER,
            A.RESULT_ID,
            A.TASK_ID,
            A.JOBDATE,
            A.START_TIME,
            A.END_TIME,
            A.CLNAME,
            A.STATUS,
            A.COMMAND,
            A.LAST_LINE,
            CASE WHEN (A.JOB_INCHARGE is null and A.CREATE_USER not in ('system', 'sa')) THEN A.CREATE_USER else A.JOB_INCHARGE  end  as JOB_INCHARGE
        FROM
            IF_V_ERROR_TASK_RESULT A,
            ( SELECT   TO_CHAR(SYSDATE, 'YYYYMMDD') || NVL(TRIM(TO_CHAR(MAX(SUBSTR(REQ_ID, 10,5 )) , '00000')), '00000') REQ_ID
                FROM WF_BACH
               WHERE  1 = 1
                 AND REQ_ID LIKE 'B' || TO_CHAR(SYSDATE, 'YYYYMMDD')||'%'
            ) B,
            FOMM_USER_MT C
        WHERE A.JOB_ID ||RESULT_ID NOT IN (SELECT JOB_ID ||RESULT_ID FROM  WF_BACH  WHERE JOBDATE >= (SELECT MIN(JOBDATE) FROM IF_V_ERROR_TASK_RESULT) ) -- TBT_WF_BACH 테이블에 없는 것만 등록
        AND (CASE WHEN (A.JOB_INCHARGE is null and A.CREATE_USER not in ('system', 'sa')) THEN A.CREATE_USER else A.JOB_INCHARGE  end) = C.USER_ID(+)
        AND A.PARENT_DIR||A.NAME NOT IN ( SELECT NAME FROM WF_BACH_OUT ) -- 특정 작업ID 예외처리 
       -- 20231116 주석처리 and rownum <10
        ORDER BY A.JOB_ID;
        
BEGIN     

    DBMS_OUTPUT.PUT_LINE('BEGIN [WF_BACH]');

    FOR CUR_SEND_MSG_REC IN CUR_SEND_MSG LOOP    

       BEGIN 
         -- 배치오류확인 테이블에 등록
            INSERT INTO WF_BACH (
                REQ_ID,
                ING_PHASE,
                REQ_DT, 
                SR_BRIEF,    
                REQ_CONT,
                WORK_USER_ID,
                WORK_DEPT_ID,
                WORK_USER_JBC_POSI,
                WORK_USER_NM,   
                REG_USER_ID,
                REG_USER_NM,
                REG_STIME,
                LMOD_USER_ID,
                LMOD_USER_NM,
                SYSMODTIME,
                PARENT_DIR,
                NAME,
                JOB_ID,
                CREATE_USER,
                RESULT_ID,
                TASK_ID,
                JOBDATE,
                START_TIME,
                END_TIME,
                CLNAME,
                STATUS,
                COMMAND,
                LAST_LINE,
                JOB_INCHARGE
            ) VALUES (
            CUR_SEND_MSG_REC.REQ_ID,
                CUR_SEND_MSG_REC.ING_PHASE,
                CUR_SEND_MSG_REC.REQ_DT, 
                CUR_SEND_MSG_REC.SR_BRIEF,    
                CUR_SEND_MSG_REC.REQ_CONT,
                CUR_SEND_MSG_REC.WORK_USER_ID,
                CUR_SEND_MSG_REC.WORK_DEPT_ID,
                CUR_SEND_MSG_REC.WORK_USER_JBC_POSI,
                CUR_SEND_MSG_REC.WORK_USER_NM,   
                CUR_SEND_MSG_REC.REG_USER_ID,
                CUR_SEND_MSG_REC.REG_USER_NM,
                CUR_SEND_MSG_REC.REG_STIME,
                CUR_SEND_MSG_REC.LMOD_USER_ID,
                CUR_SEND_MSG_REC.LMOD_USER_NM,
                CUR_SEND_MSG_REC.SYSMODTIME,
                CUR_SEND_MSG_REC.PARENT_DIR,
                CUR_SEND_MSG_REC.NAME,
                CUR_SEND_MSG_REC.JOB_ID,
                CUR_SEND_MSG_REC.CREATE_USER,
                CUR_SEND_MSG_REC.RESULT_ID,
                CUR_SEND_MSG_REC.TASK_ID,
                CUR_SEND_MSG_REC.JOBDATE,
                CUR_SEND_MSG_REC.START_TIME,
                CUR_SEND_MSG_REC.END_TIME,
                CUR_SEND_MSG_REC.CLNAME,
                CUR_SEND_MSG_REC.STATUS,
                CUR_SEND_MSG_REC.COMMAND,
                CUR_SEND_MSG_REC.LAST_LINE,
                CUR_SEND_MSG_REC.JOB_INCHARGE
             ); 
         EXCEPTION     
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('WHEN OTHERS THEN : [WF_BACH]');       
            NULL; 
       END;
      
       DBMS_OUTPUT.PUT_LINE('BEGIN IS SR_BASE_INFO');       
       BEGIN 
       -- 기본 정보 테이블 등록
            INSERT INTO SR_BASE_INFO
                 (  REQ_ID,
					REQ_TMPLAT_ID,
					REQ_TMPLAT_VER,
					SVC_CD,
					WF_PROC_CD,
					WF_PROC_NM,
					MAP_WF_PROC_CD,
					MAP_WF_PROC_NM,
					REQ_STAT_CD,
					REQ_STAT_NM,
					TITLE,
					REQ_USER_ID,
					REQ_USER_NM,
					REQ_DEPT_CD,
					REQ_DEPT_NM,
					REQ_DATE,
					CANCEL_POSS_YN,
					DEL_YN,
					MAP_PROC_CD  )
                 values 
                 ( 
                   CUR_SEND_MSG_REC.REQ_ID,
                   'WFT250046',
                   '1',
                   'SVC',
                   'WF_PROC_2010',
                   '접수',
                   'BACH002',
                   '접수',
                   'RQST01',
                   '등록',
                   'JOB PASS 배치 에러 작업',
                   CUR_SEND_MSG_REC.REG_USER_ID,
                   CUR_SEND_MSG_REC.REG_USER_NM,
                   '',
                   '',
                   CUR_SEND_MSG_REC.REQ_DT, 
                   'N',
                   'N',
                   'BACH_MAPPING_CD'  );
                  
         EXCEPTION     
            WHEN OTHERS THEN NULL; 
       END;
      
       DBMS_OUTPUT.PUT_LINE('BEGIN [SR_WF_PROC]');
       BEGIN 
       -- 요청서최종진행단계  (등록자)
            INSERT INTO SR_WF_PROC
                 ( req_id,
				   wf_proc_cd,
				   seq,
				   wf_proc_skip_yn  )
                 values 
                 ( 
                   CUR_SEND_MSG_REC.REQ_ID,
                   'WF_PROC_1000',
                   1,
 				   'N');
                  
         EXCEPTION     
            WHEN OTHERS THEN NULL; 
           
            OUT_CODE := SQLCODE;      
		    OUT_MSG := SQLERRM;   
		     
		    DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);     		     
		    INSERT INTO TBT_PROC_DB_ERROR_LOG     
		                 (CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)     
		           VALUES('PRC_BACH_INSERT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), '','');    
           
           
       END;
      
       DBMS_OUTPUT.PUT_LINE('BEGIN [SR_WF_PROC]]');

       BEGIN 
       -- 요청서최종진행단계  (접수자)
            INSERT INTO SR_WF_PROC
                 ( req_id,
				   wf_proc_cd,
				   seq,
				   wf_proc_skip_yn  )
                 values 
                 ( 
                   CUR_SEND_MSG_REC.REQ_ID,
                   'WF_PROC_2010',
                   2,
 				   'N');
                  
         EXCEPTION     
            WHEN OTHERS THEN NULL; 
           
            OUT_CODE := SQLCODE;      
		    OUT_MSG := SQLERRM;   
		     
		    DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);     		     
		    INSERT INTO TBT_PROC_DB_ERROR_LOG     
		                 (CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)     
		           VALUES('PRC_BACH_INSERT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), '','');  
           
       END;
    
       DBMS_OUTPUT.PUT_LINE('BEGIN [WF_PROC_HIST]');

       BEGIN 
       -- 작업이력 등록
            INSERT INTO WF_PROC_HIST
                 (  PROC_NUMBER,
					WF_HIST_SEQ,
					WF_PROC_CD, 
					APPR_GRP_SEQ, 
					APPR_NM,
					APPR_STAT_CD, 
					APPR_GBN_CD, 
					SRM_USER_ID, 
                    SRM_USER_NM,
					REG_STIME )
                 values 
                 (  CUR_SEND_MSG_REC.REQ_ID,
                   '1',
                   'WF_PROC_1000',
                   '1',
                   '등록',
                   'APST_90',
                   'A00',
                   'SYSTEM',
                   'SYSTEM',
                   TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') );
                  
         EXCEPTION     
            WHEN OTHERS THEN NULL; 
           
            OUT_CODE := SQLCODE;      
		    OUT_MSG := SQLERRM;   
		     
		    DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);     		     
		    INSERT INTO TBT_PROC_DB_ERROR_LOG     
		                 (CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)     
		           VALUES('PRC_BACH_INSERT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), '','');  
       END;
    
       DBMS_OUTPUT.PUT_LINE('BEGIN [SR_CGER_DT]');

       BEGIN 
       -- 담당자 정보
            INSERT INTO SR_CGER_DT
                 (  REQ_ID,
					WF_PROC_CD, 
					SEQ,
					WF_FUNC_CD, 
					WF_FUNC_NM, 
					ESS_YN, 
					USER_ID,
					APV_BTN_YN,
					RTRN_BTN_YN,
					SAVE_BTN_YN,
					APV_BTN_TEXT, 
					RTRN_BTN_TEXT, 
					SAVE_BTN_TEXT )
                 values 
                 (  
                   CUR_SEND_MSG_REC.REQ_ID,
                   'WF_PROC_2010',
                   '1',
                   'WF_FUNC_04',
                   '담당자',
                   '0',
                   CUR_SEND_MSG_REC.WORK_USER_ID,
                   'Y',
                   'N',
                   'Y',
                   '접수',
                   '반려',
                   '저장');
                  
         EXCEPTION     
            WHEN OTHERS THEN NULL; 
           
            OUT_CODE := SQLCODE;      
		    OUT_MSG := SQLERRM;   
		     
		    DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);     		     
		    INSERT INTO TBT_PROC_DB_ERROR_LOG     
		                 (CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)     
		           VALUES('PRC_BACH_INSERT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), '','');  
       END;
    
       DBMS_OUTPUT.PUT_LINE('BEGIN [SR_REV_PROC]');

       BEGIN 
       -- 접수 내역 입력
            INSERT INTO SR_REV_PROC
                 ( 
					REQ_ID,
					WF_PROC_CD,
					USER_ID,
					USER_NM,
					DEPT_CD,
					DEPT_NM,
					POS_NM,
					TELNUM,
					GUBUN_NM,
					PROC_DATE )
                 values 
                 ( CUR_SEND_MSG_REC.REQ_ID,
                   'WF_PROC_1000',
                   CUR_SEND_MSG_REC.WORK_USER_ID,
                   CUR_SEND_MSG_REC.WORK_USER_NM,  
                   CUR_SEND_MSG_REC.WORK_DEPT_ID,
                   '',
                   CUR_SEND_MSG_REC.WORK_USER_JBC_POSI,
                   '',
                   '요청자(등록자)',
                  TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') );
                  
         EXCEPTION     
            WHEN OTHERS THEN NULL; 
           
            OUT_CODE := SQLCODE;      
		    OUT_MSG := SQLERRM;   
		     
		    DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);     		     
		    INSERT INTO TBT_PROC_DB_ERROR_LOG     
		                 (CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)     
		           VALUES('PRC_BACH_INSERT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), '','');    
       END;
    
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('END');

EXCEPTION     
    WHEN NO_DATA_FOUND THEN     
        NULL;     
    WHEN OTHERS THEN     
        ROLLBACK;   
       
    OUT_CODE := SQLCODE;      
    OUT_MSG := SQLERRM;   
     
    DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);     
     
    INSERT INTO TBT_PROC_DB_ERROR_LOG     
                 (CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)     
           VALUES('PRC_BACH_INSERT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), '','');     
     
 
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_CHM_CFINTERFACE11
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_CHM_CFINTERFACE11" 
(
   IN_REQ_ID    IN  VARCHAR2,   -- 프로세스의 ID       
   IN_INST_ID   IN  VARCHAR2,   -- 형상관리  ID     
   OUT_CODE     OUT VARCHAR2,           
   OUT_MSG      OUT VARCHAR2
 )
IS
BEGIN

    UPDATE WF_CHM SET         
        CONF_MANAGE_ID = ''
    WHERE 1 = 1
    AND CONF_MANAGE_ID = IN_INST_ID
    ;

    UPDATE WF_CHM SET
        CONF_MANAGE_ID = IN_INST_ID
    WHERE 1 = 1
    AND REQ_ID = IN_REQ_ID
    ;

    --OUT_CODE := 'Y';
    OUT_CODE := '';
    OUT_MSG  := '완료';

EXCEPTION
    WHEN NO_DATA_FOUND THEN     
        ROLLBACK;
        RETURN;

    WHEN OTHERS THEN
        ROLLBACK;
        OUT_CODE := '' || SQLCODE;
        OUT_MSG  := SQLERRM;
        --DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_CHM_CFINTERFACE11',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_CODE, OUT_MSG
        );
        OUT_CODE := 'N';
        COMMIT;
        RETURN;
 END;

/
--------------------------------------------------------
--  DDL for Procedure PR_CHM_CFINTERFACE13
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_CHM_CFINTERFACE13" 
(
    IN_REQ_ID           IN VARCHAR2,
    IN_USER_ID          IN VARCHAR2,    -- 현재 로그인 USER_ID(로그인 사번)
    IN_ORG_USER_ID      IN VARCHAR2,    -- 현재 로그인 원 USER_ID
    IN_NEXT_PROC_YN     IN VARCHAR2,    -- 형상관리에서 호출하면  Y,  화면에서 호출하면 N
    IN_LMPID            IN VARCHAR2,    -- 수정프로그램ID

    OUT_RTN_CD          OUT VARCHAR2,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
ECODE           NUMBER(38);
EMESG           VARCHAR2(250);

V_REQ_ID        VARCHAR2(20); -- 각 프로세스의 ID
V_USER_ID       VARCHAR2(30);
V_TITLE         VARCHAR2(250);
V_CONTENT       VARCHAR2(3000);
V_USER_NM       FOMM_USER_MT.USER_NM%TYPE;
V_EMAIL_ADR     FOMM_USER_MT.EMAIL_ADR%TYPE;
V_USER_MOBILE   FOMM_USER_MT.MOBILE_NUM%TYPE;
V_COUNT         NUMBER;
V_WORK_USER_ID  VARCHAR2(30);

V_DAEJIC_YN         WF_PROC_HIST.DAEJIC_YN%TYPE;

V_WF_PROC_CD        WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;
V_NEXT_WF_PROC_CD   WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;
V_WF_FUNC_CD        WF_REQ_TMPLAT_PROC_HT.FUNC%TYPE;

V_RTN_CD            NUMBER(10, 0);      -- PR_SR_REQ_WF_PROC_APPROVE() return code
V_RTN_MSG           VARCHAR2(4000);     -- PR_SR_REQ_WF_PROC_APPROVE() return message
          
V_APPR_NM           VARCHAR2(100);
V_CHM_STATUS        VARCHAR2(20); -- SRM, PBM, CHM 에 따른 변경진행 단계

EX_NO_NEXT_WF_PROC_CD EXCEPTION;
EX_NO_NEXT_WF_FUNC_CD EXCEPTION;

BEGIN

    IF IN_USER_ID <> IN_ORG_USER_ID THEN
        V_DAEJIC_YN := 'Y';
    ELSE
        V_DAEJIC_YN := 'N';
    END IF;

    --IN_PROC_NUMBER은 변경 ID이고 변경 ID로  연결된 각 프로세스의 id를 찾는다.
    SELECT DECODE(A.REQ_ID, NULL, B.REQ_ID, A.REQ_ID)
    INTO V_REQ_ID
    FROM
          WF_PROC_RELATION A
        , WF_CHM B      
    WHERE 1 = 1
    AND B.REQ_ID    = A.REL_REQ_ID(+)
    AND B.REQ_ID    = IN_REQ_ID
    ;
    
    
    
    -- 형상관리에서 호출하면  Y,  화면에서 호출하면 N 
    IF(IN_NEXT_PROC_YN = 'Y') THEN

        /* 변경 이력  =========================*/      
        INSERT INTO WF_PROC_HIST
        (
              PROC_NUMBER
            , WF_HIST_SEQ
            , WF_PROC_CD
            , APPR_LVL_SEQ  --결재차수 (결재이력만 사용)
            , APPR_GRP_SEQ  --결재그룹 (결재이력만 사용)

            , APPR_STAT_CD  --승인상태
            , APPR_COMMENT  --승인/반려의견
            , APPR_GBN_CD   --결재자구분코드
                
            , SRM_USER_ID   --처리이력변경 사용자ID
            , SRM_USER_NM   --처리이력변경 사용자
            , SRM_DEPT_CD   --처리이력변경 사용자 부서코드
            , SRM_DEPT_NM   --처리이력변경 사용자 팀명
            , SRM_JBC_JNAME --처리이력변경 사용자 직명
            , SRM_TELNUM    --처리이력변경 사용자 내선번호

            , ORG_USER_ID   --원처리자ID(대무처리시)
            , ORG_USER_NM   --원처리자명(대무처리시)
            , ORG_DEPT_CD   --원처리자부서코드(대무처리시)
            , ORG_DEPT_NM   --원처리자부서명(대무처리시)
            , ORG_JBC_JNAME --원처리자직명(대무처리시)
            , ORG_TELNUM    --원처리자내선번호(대무처리시)

            , DAEJIC_YN     --대직처리여부
            , APPR_NM       

            , REG_STIME
        )
        SELECT
            A.REQ_ID,
            (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = A.REQ_ID),
            
            C.WF_PROC_CD,   --'CHM0005',--파일배포대기
            NULL,
            NULL,

            'APST_90',  -- APST_90 : 등록, APST_99 : 승인, APST_01 : 승인대기, APST_00 : 반려
            NULL,
            'A00',      -- A00 : 등록자, A01 : 기안자, A02 : 승인자, R01 : 검토자

            A.WORK_USER_ID,
            (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = A.WORK_USER_ID),
            (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = A.WORK_USER_ID), 
            (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = A.WORK_USER_ID),
            (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = A.WORK_USER_ID),
            (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = A.WORK_USER_ID),
            '',
            '',
            '',
            '',
            '',
            '',
          
            'N',
            C.WF_PROC_NM,

            TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')

        FROM
              WF_CHM A
            , FOMM_USER_MT B
            , SR_BASE_INFO C

        WHERE 1 = 1
        AND A.WORK_USER_ID      = B.USER_ID
        AND A.REQ_ID            = C.REQ_ID
        AND A.REQ_ID            = IN_REQ_ID
        --AND A.ING_PHASE     = 'CHM0005'
        AND C.MAP_WF_PROC_CD = 'CHM0005'
        ;
    END IF;

    --다음 단계/기능을 구한다.
    
    IF SUBSTR(V_REQ_ID, 1, 3) = 'SRM' THEN
        V_CHM_STATUS := 'CHM000511';
    ELSIF SUBSTR(V_REQ_ID, 1, 3) = 'PBM' THEN 
        V_CHM_STATUS := 'CHM00051';
    ELSIF SUBSTR(V_REQ_ID, 1, 3) = 'CHM' THEN   
        V_CHM_STATUS := 'CHM00051';
    END IF;
     
     
     /* 형상관리 검증계 배포 체크 */
    UPDATE WF_CHM SET
          USER_TEST_SUCC_YN   = 'Y'
        /* ASIS 단계 진행 처리 주석
        , ING_PHASE           = 'CHM00051' -- 파일배포완료
         */
    WHERE 1 = 1
    AND REQ_ID = IN_REQ_ID
    ;


    --다음 단계/기능을 구한다.
    SELECT
        WF_PROC_CD,
        CASE WHEN CGER = 'true' THEN 'WF_FUNC_04' ELSE FUNC END
    INTO V_NEXT_WF_PROC_CD, V_WF_FUNC_CD
    FROM WF_REQ_TMPLAT_PROC_HT A
    WHERE 1 = 1
    AND EXISTS
            (
            SELECT 1
            FROM SR_BASE_INFO B
            WHERE 1 = 1
            AND A.REQ_TMPLAT_ID     = B.REQ_TMPLAT_ID
            AND A.REQ_TMPLAT_VER    = B.REQ_TMPLAT_VER
            AND B.REQ_ID            = IN_REQ_ID
            )
    AND A.MAP_WF_PROC_CD  = 'CHM000511'
    ;

    --다음 단계를 구하지 못한 경우
    IF NVL(V_NEXT_WF_PROC_CD, ' ') = ' ' THEN
        RAISE EX_NO_NEXT_WF_PROC_CD;
    END IF;

    --다음 단계 기능을 구하지 못한 경우
    IF NVL(V_WF_FUNC_CD, ' ') = ' ' THEN
        RAISE EX_NO_NEXT_WF_FUNC_CD;
    END IF;

  
    
    --현재 단계
    SELECT WF_PROC_CD
    INTO V_WF_PROC_CD
    FROM SR_BASE_INFO
    WHERE REQ_ID = IN_REQ_ID
    ;
    
    IF(IN_NEXT_PROC_YN = 'Y') THEN

        /* TOBE 다음 단계 진행 */
        PR_SR_REQ_WF_PROC_NEXT('REV', IN_REQ_ID, IN_USER_ID, V_WF_PROC_CD, V_NEXT_WF_PROC_CD, V_WF_FUNC_CD, IN_LMPID, V_RTN_CD, V_RTN_MSG);
        
        IF V_RTN_CD != 0 THEN
            OUT_RTN_CD  := V_RTN_CD;
            OUT_RTN_MSG := V_RTN_MSG;
            DBMS_OUTPUT.PUT_LINE(OUT_RTN_MSG);
            ROLLBACK;
            RETURN;
        END IF;

 
    END IF;

 
    
    DBMS_OUTPUT.PUT_LINE('PR_CHM_CFINTERFACE13 에러코드 =>' || OUT_RTN_CD);
    DBMS_OUTPUT.PUT_LINE('PR_CHM_CFINTERFACE13 에러메세지 =>' || OUT_RTN_MSG);

EXCEPTION
    WHEN EX_NO_NEXT_WF_PROC_CD THEN
        ROLLBACK;
        OUT_RTN_CD  := -9996;
        OUT_RTN_MSG := '다음 단계 진행시 [다음 단계]를 확인할 수 없습니다.';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;

    WHEN EX_NO_NEXT_WF_FUNC_CD THEN
        ROLLBACK;
        OUT_RTN_CD  := -9997;
        OUT_RTN_MSG := '다음 단계 진행시 [다음 단계]-[기능]을 확인할 수 없습니다.';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;
        RETURN;

    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        --OUT_RTN_CD  := -9998;
        --OUT_RTN_MSG := SQLERRM;
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        --INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        --VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        --RETURN;

    WHEN OTHERS THEN
        ROLLBACK;
        OUT_RTN_CD := SQLCODE;
        OUT_RTN_MSG := '요청서 결재 승인 처리시 오류가 발생하였습니다.(' || '[' || SQLCODE || ']-' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_RTN_CD || ' ERROR MESSAGE IS ' || OUT_RTN_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;
        OUT_RTN_CD := -9999;
        RETURN;
 END;

/
--------------------------------------------------------
--  DDL for Procedure PR_CHM_CFINTERFACE15
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_CHM_CFINTERFACE15" 
                                  
(
   IN_REQ_ID       IN  VARCHAR2,   -- 프로세스의 ID       
   IN_USER_ID      IN  VARCHAR2,   --배포자 사번     
   IN_EDATE        IN  VARCHAR2,   --  운영배포일시
   
  
   IN_ORG_USER_ID      IN VARCHAR2,    -- 현재 로그인 원 USER_ID
   IN_LMPID            IN VARCHAR2,    -- 수정프로그램ID

   OUT_RTN_CD        OUT VARCHAR2,           
   OUT_RTN_MSG         OUT VARCHAR2        
 )
 IS
   V_PROC_NUMBER  VARCHAR2(14); -- 각 프로세스의 ID   
   V_USER_ID  VARCHAR2(30);  
   V_TITLE  VARCHAR2(250);  
   V_USER_NAME  VARCHAR2(30);  
   V_USER_EMAD  VARCHAR2(100);  
   V_USER_MOBILE  VARCHAR2(30);   
   
   
   V_WORK_USER_ID  VARCHAR2(30);

    V_DAEJIC_YN         WF_PROC_HIST.DAEJIC_YN%TYPE;

    V_WF_PROC_CD        WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;
    V_NEXT_WF_PROC_CD   WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;
    V_WF_FUNC_CD        WF_REQ_TMPLAT_PROC_HT.FUNC%TYPE;

    V_RTN_CD            NUMBER(10, 0);      -- PR_SR_REQ_WF_PROC_APPROVE() return code
    V_RTN_MSG           VARCHAR2(4000);     -- PR_SR_REQ_WF_PROC_APPROVE() return message
              
    V_APPR_NM           VARCHAR2(100);
  

    EX_NO_NEXT_WF_PROC_CD EXCEPTION;
    EX_NO_NEXT_WF_FUNC_CD EXCEPTION;

  BEGIN    
  

       
        IF IN_USER_ID <> IN_ORG_USER_ID THEN
            V_DAEJIC_YN := 'Y';
        ELSE
            V_DAEJIC_YN := 'N';
        END IF;
    
              
          
             
             /* 변경 이력  =========================*/      
             
            INSERT INTO WF_PROC_HIST
            (
                  PROC_NUMBER
                , WF_HIST_SEQ
                , WF_PROC_CD
                , APPR_LVL_SEQ  --결재차수 (결재이력만 사용)
                , APPR_GRP_SEQ  --결재그룹 (결재이력만 사용)

                , APPR_STAT_CD  --승인상태
                , APPR_COMMENT  --승인/반려의견
                , APPR_GBN_CD   --결재자구분코드
                    
                , SRM_USER_ID   --처리이력변경 사용자ID
                , SRM_USER_NM   --처리이력변경 사용자
                , SRM_DEPT_CD   --처리이력변경 사용자 부서코드
                , SRM_DEPT_NM   --처리이력변경 사용자 팀명
                , SRM_JBC_JNAME --처리이력변경 사용자 직명
                , SRM_TELNUM    --처리이력변경 사용자 내선번호

                , ORG_USER_ID   --원처리자ID(대무처리시)
                , ORG_USER_NM   --원처리자명(대무처리시)
                , ORG_DEPT_CD   --원처리자부서코드(대무처리시)
                , ORG_DEPT_NM   --원처리자부서명(대무처리시)
                , ORG_JBC_JNAME --원처리자직명(대무처리시)
                , ORG_TELNUM    --원처리자내선번호(대무처리시)

                , DAEJIC_YN     --대직처리여부
                , APPR_NM       

                , REG_STIME
            )
            SELECT
                A.REQ_ID,
                (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = A.REQ_ID),
                
                C.WF_PROC_CD,   --'CHM0005',--파일배포대기
                NULL,
                NULL,

                'APST_90',  -- APST_90 : 등록, APST_99 : 승인, APST_01 : 승인대기, APST_00 : 반려
                NULL,
                'A00',      -- A00 : 등록자, A01 : 기안자, A02 : 승인자, R01 : 검토자

              
                IN_USER_ID,
                (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                '',
                '',
                '',
                '',
                '',
                '',
                'N',
                C.MAP_WF_PROC_NM,

                TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')

            FROM
                  WF_CHM A
                , FOMM_USER_MT B
                , SR_BASE_INFO C

            WHERE 1 = 1
            AND A.WORK_USER_ID      = B.USER_ID
            AND A.REQ_ID            = C.REQ_ID
            AND A.REQ_ID            = IN_REQ_ID 
            AND C.MAP_WF_PROC_CD = 'CHM0006' ;
            
        
    update WF_CHM set    
              CONF_MANAGE_BEPO_USER_ID = IN_USER_ID,  
              CONF_MANAGE_USER_NM = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),  
              CONF_MANAGE_BEPO_ETIME = IN_EDATE  
        where REQ_ID = IN_REQ_ID ;      
          
    SELECT
        WF_PROC_CD,
        CASE WHEN CGER = 'true' THEN 'WF_FUNC_04' ELSE FUNC END
    INTO V_NEXT_WF_PROC_CD, V_WF_FUNC_CD
    FROM WF_REQ_TMPLAT_PROC_HT A
    WHERE 1 = 1
    AND EXISTS
            (
            SELECT 1
            FROM SR_BASE_INFO B
            WHERE 1 = 1
            AND A.REQ_TMPLAT_ID     = B.REQ_TMPLAT_ID
            AND A.REQ_TMPLAT_VER    = B.REQ_TMPLAT_VER
            AND B.REQ_ID            = IN_REQ_ID
            )
    AND A.MAP_WF_PROC_CD    = 'CHM0007' -- 릴리스 및 이행후 검토 단계 
    ;
    
    --다음 단계를 구하지 못한 경우
    IF NVL(V_NEXT_WF_PROC_CD, ' ') = ' ' THEN
        RAISE EX_NO_NEXT_WF_PROC_CD;
    END IF;

    --다음 단계 기능을 구하지 못한 경우
    IF NVL(V_WF_FUNC_CD, ' ') = ' ' THEN
        RAISE EX_NO_NEXT_WF_FUNC_CD;
    END IF;
 

    --현재 단계
    SELECT WF_PROC_CD
    INTO V_WF_PROC_CD
    FROM SR_BASE_INFO
    WHERE REQ_ID = IN_REQ_ID
    ;    
   
    /* TOBE 다음 단계 진행 */
    PR_SR_REQ_WF_PROC_NEXT('REV', IN_REQ_ID, IN_USER_ID, V_WF_PROC_CD, V_NEXT_WF_PROC_CD, V_WF_FUNC_CD, IN_LMPID, V_RTN_CD, V_RTN_MSG);
        
        
    IF V_RTN_CD != 0 THEN
        OUT_RTN_CD  := V_RTN_CD;
        OUT_RTN_MSG := V_RTN_MSG;
        DBMS_OUTPUT.PUT_LINE(OUT_RTN_MSG);
        ROLLBACK;
        RETURN;
    END IF;
 
    --OUT_RTN_CD := 'Y';
    OUT_RTN_CD := '';
    OUT_RTN_MSG :=  '완료';    
     
EXCEPTION     
    WHEN EX_NO_NEXT_WF_PROC_CD THEN
        ROLLBACK;
        OUT_RTN_CD  := 'N';  
        OUT_RTN_MSG := '다음 단계 진행시 [다음 단계]를 확인할 수 없습니다.';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_CFINTERFACE15', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;

    WHEN EX_NO_NEXT_WF_FUNC_CD THEN
        ROLLBACK;
        OUT_RTN_CD  := 'N';  
        OUT_RTN_MSG := '다음 단계 진행시 [다음 단계]-[기능]을 확인할 수 없습니다.';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_CFINTERFACE15', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;
        RETURN;

    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        RETURN;
        --OUT_RTN_CD  := -9998;
        --OUT_RTN_MSG := SQLERRM;
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        --INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        --VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        --RETURN;

    WHEN OTHERS THEN
        ROLLBACK;
        OUT_RTN_CD := SQLCODE;
        OUT_RTN_MSG := '변경요청 이행후 검토 단계 진행시 오류가 발생하였습니다.(' || '[' || SQLCODE || ']-' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        --DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_RTN_CD || ' ERROR MESSAGE IS ' || OUT_RTN_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_CFINTERFACE15', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;
        OUT_RTN_CD := 'N';  
        RETURN;
     
 END;

/
--------------------------------------------------------
--  DDL for Procedure PR_CHM_COMPLETED
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_CHM_COMPLETED" 
(
    IN_REQ_ID           IN VARCHAR2,
    IN_USER_ID          IN VARCHAR2,    -- 현재 로그인 USER_ID(로그인 사번)
    IN_ORG_USER_ID      IN VARCHAR2,    -- 현재 로그인 원 USER_ID    
    IN_LMPID            IN VARCHAR2,    -- 수정프로그램ID

    OUT_RTN_CD          OUT VARCHAR2,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    프로시저명 : PR_CHM_COMPLETED
    설명      : 변경 완료시 연계된 서비스요청 or 문제 단계 진행 시킨다.
    작성자     작성일자         작성내용
    an     2025.02.17      최초 작성
======================================================================================*/
ECODE           NUMBER(38);
EMESG           VARCHAR2(250);

V_REQ_ID        VARCHAR2(20); -- 각 프로세스의 ID
V_USER_ID       VARCHAR2(30);
V_TITLE         VARCHAR2(250);
V_CONTENT       VARCHAR2(3000);
V_USER_NM       FOMM_USER_MT.USER_NM%TYPE;
V_EMAIL_ADR     FOMM_USER_MT.EMAIL_ADR%TYPE;
V_USER_MOBILE   FOMM_USER_MT.MOBILE_NUM%TYPE;
V_COUNT         NUMBER;
V_WORK_USER_ID      VARCHAR2(30);
V_SRM_COMPLETE_YN    VARCHAR2(1);

V_DAEJIC_YN         WF_PROC_HIST.DAEJIC_YN%TYPE;

V_WF_PROC_CD        WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;
V_NEXT_WF_PROC_CD   WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;
V_WF_FUNC_CD        WF_REQ_TMPLAT_PROC_HT.FUNC%TYPE;

V_RTN_CD            NUMBER(10, 0);      -- PR_SR_REQ_WF_PROC_APPROVE() return code
V_RTN_MSG           VARCHAR2(4000);     -- PR_SR_REQ_WF_PROC_APPROVE() return message
          


EX_NO_NEXT_WF_PROC_CD EXCEPTION;
EX_NO_NEXT_WF_FUNC_CD EXCEPTION;

BEGIN

    IF IN_USER_ID <> IN_ORG_USER_ID THEN
        V_DAEJIC_YN := 'Y';
    ELSE
        V_DAEJIC_YN := 'N';
    END IF;

    --IN_PROC_NUMBER은 변경 ID이고 변경 ID로  연결된 각 프로세스의 id를 찾는다. 
      SELECT DECODE(A.REQ_ID ,NULL, B.REQ_ID,A.REQ_ID) ,   
            NVL(SUM(CASE WHEN C.MAP_WF_PROC_CD  in ('CHM00071','9999') THEN 0
                     ELSE 1
                END),0) 
       INTO V_REQ_ID, V_COUNT
      FROM WF_PROC_RELATION  A, WF_CHM B, SR_BASE_INFO C
     WHERE A.REL_REQ_ID(+) = B.REQ_ID 
       AND B.REQ_ID = C.REQ_ID
       AND A.REQ_ID IN (SELECT REQ_ID    
                             FROM WF_PROC_RELATION 
                             WHERE REL_REQ_ID = IN_REQ_ID)
       AND NVL(C.DEL_YN, 'N') = 'N' 
       GROUP BY  DECODE(A.REQ_ID ,NULL, B.REQ_ID,A.REQ_ID),
       SUBSTR(DECODE(A.REQ_ID ,NULL, B.REQ_ID,A.REQ_ID) ,1,3) 
       ;
    
    
    /*
        서비스 요청 이나 문제에 연계되어 있는 변경이 모두 종료 되어있는 경우에만 서비스요청 or 문제 다음단계로 진행을 시킨다.
    */
    IF V_COUNT > 0 THEN
        RETURN;
    END IF;
    
    
    
    IF SUBSTR(V_REQ_ID, 1, 3) = 'SRM'  THEN

        --SR이 완료인 경우 더이상 아무 처리를 하지 않는다.
        SELECT NVL(CASE WHEN WF_PROC_CD IN ('WF_PROC_9020', 'WF_PROC_9999') THEN 'Y' ELSE 'N' END, 'N')
        INTO V_SRM_COMPLETE_YN
        FROM SR_BASE_INFO
        WHERE REQ_ID    = V_REQ_ID
        ;
        
        IF V_SRM_COMPLETE_YN = 'N' THEN

            /* 이력등록 =========================*/      
            INSERT INTO WF_PROC_HIST
            (
                  PROC_NUMBER
                , WF_HIST_SEQ
                , WF_PROC_CD    --단계
                , APPR_LVL_SEQ  --결재차수 (결재이력만 사용)
                , APPR_GRP_SEQ  --결재그룹 (결재이력만 사용)
    
                , APPR_STAT_CD  --승인상태
                , APPR_COMMENT  --승인/반려의견
                , APPR_GBN_CD   --결재자구분코드
                    
                , SRM_USER_ID   --처리이력변경 사용자ID
                , SRM_USER_NM   --처리이력변경 사용자
                , SRM_DEPT_CD   --처리이력변경 사용자 부서코드
                , SRM_DEPT_NM   --처리이력변경 사용자 팀명
                , SRM_JBC_JNAME --처리이력변경 사용자 직명
                , SRM_TELNUM    --처리이력변경 사용자 내선번호
    
                , ORG_USER_ID   --원처리자ID(대무처리시)
                , ORG_USER_NM   --원처리자명(대무처리시)
                , ORG_DEPT_CD   --원처리자부서코드(대무처리시)
                , ORG_DEPT_NM   --원처리자부서명(대무처리시)
                , ORG_JBC_JNAME --원처리자직명(대무처리시)
                , ORG_TELNUM    --원처리자내선번호(대무처리시)
    
                , DAEJIC_YN     --대직처리여부
                , APPR_NM       
    
                , REG_STIME
            )
            SELECT
                A.REQ_ID,
                (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = A.REQ_ID),
                
                C.WF_PROC_CD,  
                NULL,
                NULL,
    
                'APST_90',  -- APST_90 : 등록, APST_99 : 승인, APST_01 : 승인대기, APST_00 : 반려
                NULL,
                'A00',      -- A00 : 등록자, A01 : 기안자, A02 : 승인자, R01 : 검토자
    
                IN_USER_ID,
                (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID), 
                (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
                (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
            
                CASE WHEN V_DAEJIC_YN = 'Y' THEN IN_ORG_USER_ID END,
                CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
                CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
                CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
                CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
                CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
    
                V_DAEJIC_YN,
    
                C.WF_PROC_NM,
    
                TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
    
            FROM
                  WF_SRM A
                , FOMM_USER_MT B
                , SR_BASE_INFO C
    
            WHERE 1 = 1
            AND A.WORK_USER_ID      = B.USER_ID
            AND A.REQ_ID            = C.REQ_ID
            AND A.REQ_ID            = V_REQ_ID 
        --   AND C.MAP_WF_PROC_CD = 'APPR0I00' -- 변경처리중  
            ;
            
            
            
            --다음 단계/기능을 구한다.
            SELECT
                WF_PROC_CD,
                CASE WHEN CGER = 'true' THEN 'WF_FUNC_04' ELSE CASE WHEN WF_PROC_CD = 'WF_PROC_9020' THEN 'WF_FUNC_04' ELSE FUNC END END
            INTO V_NEXT_WF_PROC_CD, V_WF_FUNC_CD 
            FROM WF_REQ_TMPLAT_PROC_HT A
            WHERE 1 = 1
            AND EXISTS
                    (
                    SELECT 1
                    FROM SR_BASE_INFO B
                    WHERE 1 = 1
                    AND A.REQ_TMPLAT_ID     = B.REQ_TMPLAT_ID
                    AND A.REQ_TMPLAT_VER    = B.REQ_TMPLAT_VER
                    AND B.REQ_ID            = V_REQ_ID
                    )
             AND A.WF_PROC_CD  = 'WF_PROC_9020' -- 만족도 조사  -- 
          --  AND A.MAP_WF_PROC_CD  = '9999' -- 종료  -- 
            ;
    
            --다음 단계를 구하지 못한 경우
            IF NVL(V_NEXT_WF_PROC_CD, ' ') = ' ' THEN
                RAISE EX_NO_NEXT_WF_PROC_CD;
            END IF;
    
            --다음 단계 기능을 구하지 못한 경우
            IF NVL(V_WF_FUNC_CD, ' ') = ' ' THEN
                RAISE EX_NO_NEXT_WF_FUNC_CD;
            END IF;
            
    --        IF V_WF_FUNC_CD = 'WF_FUNC_04' THEN
    --            RAISE EX_NO_NEXT_WF_FUNC_CD;
    --        END IF;
            
            --현재 단계
            SELECT WF_PROC_CD
            INTO V_WF_PROC_CD
            FROM SR_BASE_INFO
            WHERE REQ_ID = V_REQ_ID
            ;
            
       
            /* TOBE 다음 단계 진행 */
            PR_SR_REQ_WF_PROC_NEXT('REV', V_REQ_ID, IN_USER_ID, V_WF_PROC_CD, V_NEXT_WF_PROC_CD, V_WF_FUNC_CD, IN_LMPID, V_RTN_CD, V_RTN_MSG);
            
            IF V_RTN_CD != 0 THEN
                OUT_RTN_CD  := V_RTN_CD;
                OUT_RTN_MSG := V_RTN_MSG;
                DBMS_OUTPUT.PUT_LINE(OUT_RTN_MSG);
                ROLLBACK;
                RETURN;
            END IF;

        END IF;

    ELSIF SUBSTR(V_REQ_ID, 1, 3) = 'PBM' THEN

      /* 이력등록 =========================*/
        INSERT INTO WF_PROC_HIST
        (
              PROC_NUMBER
            , WF_HIST_SEQ
            , WF_PROC_CD    --단계
            , APPR_LVL_SEQ  --결재차수 (결재이력만 사용)
            , APPR_GRP_SEQ  --결재그룹 (결재이력만 사용)

            , APPR_STAT_CD  --승인상태
            , APPR_COMMENT  --승인/반려의견
            , APPR_GBN_CD   --결재자구분코드
                
            , SRM_USER_ID   --처리이력변경 사용자ID
            , SRM_USER_NM   --처리이력변경 사용자
            , SRM_DEPT_CD   --처리이력변경 사용자 부서코드
            , SRM_DEPT_NM   --처리이력변경 사용자 팀명
            , SRM_JBC_JNAME --처리이력변경 사용자 직명
            , SRM_TELNUM    --처리이력변경 사용자 내선번호

            , ORG_USER_ID   --원처리자ID(대무처리시)
            , ORG_USER_NM   --원처리자명(대무처리시)
            , ORG_DEPT_CD   --원처리자부서코드(대무처리시)
            , ORG_DEPT_NM   --원처리자부서명(대무처리시)
            , ORG_JBC_JNAME --원처리자직명(대무처리시)
            , ORG_TELNUM    --원처리자내선번호(대무처리시)

            , DAEJIC_YN     --대직처리여부
            , APPR_NM       

            , REG_STIME
        )
        SELECT
            A.REQ_ID,
            (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = A.REQ_ID),
            
            C.WF_PROC_CD,  
            NULL,
            NULL,

            'APST_90',  -- APST_90 : 등록, APST_99 : 승인, APST_01 : 승인대기, APST_00 : 반려
            NULL,
            'A00',      -- A00 : 등록자, A01 : 기안자, A02 : 승인자, R01 : 검토자

            IN_USER_ID,
            (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
            (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID), 
            (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
            (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
            (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID),
        
            CASE WHEN V_DAEJIC_YN = 'Y' THEN IN_ORG_USER_ID END,
            CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
            CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
            CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
            CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,
            CASE WHEN V_DAEJIC_YN = 'Y' THEN (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = IN_ORG_USER_ID) END,

            V_DAEJIC_YN,

           '변경종료대기', -- C.WF_PROC_NM,

            TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')

        FROM
              WF_PBM A
            , FOMM_USER_MT B
            , SR_BASE_INFO C

        WHERE 1 = 1
        AND A.WORK_USER_ID      = B.USER_ID(+)
        AND A.REQ_ID            = C.REQ_ID
        AND A.REQ_ID            = V_REQ_ID 
      --  AND C.MAP_WF_PROC_CD = 'PBM0008' -- 변경종료대기
        ;
        
        
        
        --다음 단계/기능을 구한다.
        SELECT
            WF_PROC_CD,
            CASE WHEN CGER = 'true' THEN 'WF_FUNC_04' ELSE FUNC END
        INTO V_NEXT_WF_PROC_CD, V_WF_FUNC_CD 
        FROM WF_REQ_TMPLAT_PROC_HT A
        WHERE 1 = 1
        AND EXISTS
                (
                SELECT 1
                FROM SR_BASE_INFO B
                WHERE 1 = 1
                AND A.REQ_TMPLAT_ID     = B.REQ_TMPLAT_ID
                AND A.REQ_TMPLAT_VER    = B.REQ_TMPLAT_VER
                AND B.REQ_ID            = V_REQ_ID
                )
       -- AND A.MAP_WF_PROC_CD  = 'PBM0009' -- 이행후검토
        AND A.MAP_WF_PROC_CD  = '9999' -- 종료  -- 
        ;

        --다음 단계를 구하지 못한 경우
        IF NVL(V_NEXT_WF_PROC_CD, ' ') = ' ' THEN
            RAISE EX_NO_NEXT_WF_PROC_CD;
        END IF;

        --다음 단계 기능을 구하지 못한 경우   종료단계 기능 없음 주석처리..
       -- IF NVL(V_WF_FUNC_CD, ' ') = ' ' THEN
        --    RAISE EX_NO_NEXT_WF_FUNC_CD;
        --END IF;

        
        --현재 단계
        SELECT WF_PROC_CD
        INTO V_WF_PROC_CD
        FROM SR_BASE_INFO
        WHERE REQ_ID = V_REQ_ID
        ;
        
   
        /* TOBE 다음 단계 진행 */
        PR_SR_REQ_WF_PROC_NEXT('REV', V_REQ_ID, IN_USER_ID, V_WF_PROC_CD, V_NEXT_WF_PROC_CD, V_WF_FUNC_CD, IN_LMPID, V_RTN_CD, V_RTN_MSG);
        
        IF V_RTN_CD != 0 THEN
            OUT_RTN_CD  := V_RTN_CD;
            OUT_RTN_MSG := V_RTN_MSG;
            DBMS_OUTPUT.PUT_LINE(OUT_RTN_MSG);
            ROLLBACK;
            RETURN;
        END IF;
        
    END IF;
    
    DBMS_OUTPUT.PUT_LINE('PR_CHM_COMPLETED 에러코드 =>' || OUT_RTN_CD);
    DBMS_OUTPUT.PUT_LINE('PR_CHM_COMPLETED 에러메세지 =>' || OUT_RTN_MSG);

EXCEPTION
    WHEN EX_NO_NEXT_WF_PROC_CD THEN
        ROLLBACK;
        OUT_RTN_CD  := -9996;
        OUT_RTN_MSG := '다음 단계 진행시 [다음 단계]를 확인할 수 없습니다.';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_COMPLETED', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;

    WHEN EX_NO_NEXT_WF_FUNC_CD THEN
        ROLLBACK;
        OUT_RTN_CD  := -9997;
        OUT_RTN_MSG := '다음 단계 진행시 [다음 단계]-[기능]을 확인할 수 없습니다.';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_COMPLETED', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;
        RETURN;

    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        --OUT_RTN_CD  := -9998;
        --OUT_RTN_MSG := SQLERRM;
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        --INSERT INTO TB_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        --VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        --RETURN;

    WHEN OTHERS THEN
        ROLLBACK;
        OUT_RTN_CD := SQLCODE;
        OUT_RTN_MSG := '요청서 결재 승인 처리시 오류가 발생하였습니다.(' || '[' || SQLCODE || ']-' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_RTN_CD || ' ERROR MESSAGE IS ' || OUT_RTN_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_COMPLETED', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;
        OUT_RTN_CD := -9999;
        RETURN;
 END;

/
--------------------------------------------------------
--  DDL for Procedure PR_CHM_THREE_TESTER
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_CHM_THREE_TESTER" 
(
    IN_REQ_ID           IN VARCHAR2,

    OUT_RTN_CD          OUT VARCHAR2,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    프로시저명 : PR_CHM_THREE_TERTER
    설명      : 변경 제3자테스트 정보연계시 제3자테스트 수행자 자동 지정.
    작성자     작성일자         작성내용
    an     2025.02.24      최초 작성
======================================================================================*/
 
V_DEV_USER_ID       VARCHAR2(30); 
V_TESTER_USER_ID       VARCHAR2(30); 
V_WORK_USER_ID  VARCHAR2(30);
 
EX_NO_NEXT_WF_PROC_CD EXCEPTION;
EX_NO_NEXT_WF_FUNC_CD EXCEPTION;

BEGIN

     
    SELECT DISTINCT DEV_USER_ID,WORK_USER_ID,TESTER_ID 
    INTO V_DEV_USER_ID,V_WORK_USER_ID,V_TESTER_USER_ID
      FROM (
            SELECT A.DEV_USER_ID , B.WORK_USER_ID, C.TESTER_ID 
                   , RANK() OVER (ORDER BY  A.T_POINT DESC,A.DEV_USER_ID DESC) RANK 
            FROM WF_CHM_THREE_TEST A, WF_CHM B, WF_CHM_MARK C
            WHERE A.REQ_ID= B.REQ_ID
            AND A.REQ_ID= C.REQ_ID(+)
            AND A.REQ_ID = IN_REQ_ID        
            AND A.DEV_USER_ID <> B.WORK_USER_ID
            AND A.DEV_USER_ID <> '담당자 정보 없음' 
            )
    WHERE RANK = 1;
     
    --  제3자 테스트 수행자 지정 안되어 있는 경우
    IF V_TESTER_USER_ID IS NULL THEN
    
      -- 제3자 테스트 수행자 지정
       UPDATE WF_CHM_MARK SET 
           TESTER_ID = V_DEV_USER_ID
         , TESTER_NM= (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = V_DEV_USER_ID)
       WHERE REQ_ID =  IN_REQ_ID;
       
       
      --변경등록 담당자로 등록     
     INSERT INTO SR_CGER_DT
        (
              REQ_ID
            , WF_PROC_CD
            , SEQ
            , WF_FUNC_CD
            , WF_FUNC_NM
            , ESS_YN
            , USER_ID
            , APV_BTN_YN
            , RTRN_BTN_YN
            , SAVE_BTN_YN
            , APV_BTN_TEXT
            , RTRN_BTN_TEXT
            , SAVE_BTN_TEXT
            , ROLE_CD 
            , RMK
            
            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID
        )
       SELECT REQ_ID
            , WF_PROC_CD
            , (SELECT  MAX(SEQ)+1 
                FROM SR_CGER_DT
                WHERE REQ_ID = IN_REQ_ID
               AND WF_PROC_CD = 'WF_PROC_2040'
               ) SEQ
            , WF_FUNC_CD
            , WF_FUNC_NM
            , ESS_YN
            , V_DEV_USER_ID
            , APV_BTN_YN
            , RTRN_BTN_YN
            , SAVE_BTN_YN
            , APV_BTN_TEXT
            , RTRN_BTN_TEXT
            , SAVE_BTN_TEXT
            , ROLE_CD 
            , RMK
            
            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID 
       FROM SR_CGER_DT
      WHERE REQ_ID = IN_REQ_ID
       AND WF_PROC_CD = 'WF_PROC_2040'
       AND SEQ = 1 ;


    END IF;
   
    --OUT_RTN_CD := 'Y';
    OUT_RTN_CD := '';
    OUT_RTN_MSG :=  '완료';

EXCEPTION
     
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        --OUT_RTN_CD  := -9998;
        --OUT_RTN_MSG := SQLERRM;
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);

        --INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        --VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        --RETURN;

    WHEN OTHERS THEN
        ROLLBACK;
        OUT_RTN_CD := SQLCODE;
        OUT_RTN_MSG := '제3자 테스트 수행자 등록 처리시 오류가 발생하였습니다.(' || '[' || SQLCODE || ']-' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_RTN_CD || ' ERROR MESSAGE IS ' || OUT_RTN_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG(CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)
        VALUES('PR_CHM_CFINTERFACE13', TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG);
        COMMIT;
        OUT_RTN_CD := -9999;
        RETURN;
 END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_APPROVE
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_SR_REQ_WF_PROC_APPROVE" 
(
    pi_req_id           IN VARCHAR2,    -- 요청서ID
    pi_wf_proc_cd       IN VARCHAR2,    -- 현재단계
    pi_seq              IN NUMBER,
    pi_next_wf_proc_cd  IN VARCHAR2,    -- 다음단계(개발자가 지정해준 다음 단계 PARAM)
    pi_next_wf_func_cd  IN VARCHAR2,    -- 다음단계 워크플로우 기능(/* 워크플로우기능[WF_FUNC_CD] - WF_FUNC_00:[등록], WF_FUNC_01:[결재], WF_FUNC_02:[검토], WF_FUNC_04:[담당자] */)
    pi_user_id          IN VARCHAR2,    -- 현재 로그인 USER_ID(로그인 사번)
    pi_org_user_id      IN VARCHAR2,    -- 현재 로그인 원 USER_ID
    pi_appr_desc        IN VARCHAR2,    -- 결재의견
    pi_lmpid            IN VARCHAR2,    -- 수정프로그램ID

    po_rtn_cd       OUT VARCHAR2,     -- 리턴코드
    po_rtn_msg      OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : PR_SR_REQ_WF_PROC_APPROVE
    설명      : 1) 해당 결재건의 승인자를 승인 처리한다
                2) 결재 history를 생성한다
                3) 다음단계 진입 조건을 check한다(결재/검토)
                4) 다음단계 진입 가능이면 PR_SR_REQ_WF_PROC_NEXT 프로시저를 호출한다.(다음단계로 이동처리)
    작성자     작성일자         작성내용
    이정빈     2023.07.12      최초 작성
======================================================================================*/
v_poss_yn           VARCHAR2(1) := 'N'; --결재 가능 여부

v_req_tmplat_id     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
v_req_tmplat_ver    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;

v_req_stat_cd       SR_BASE_INFO.REQ_STAT_CD%TYPE;      -- RQST11:결재중, RQST21:검토중   // 상태 check && 결재/검토 구분용

v_daejic_user_id    WF_APPROVAL_MT.DAEJIC_USER_ID%TYPE;
v_daejic_user_nm    WF_APPROVAL_MT.DAEJIC_USER_NM%TYPE;
v_daejic_dept_cd    WF_APPROVAL_MT.DAEJIC_DEPT_CD%TYPE;
v_daejic_dept_nm    WF_APPROVAL_MT.DAEJIC_DEPT_NM%TYPE;
v_daejic_jbc_jname  WF_APPROVAL_MT.DAEJIC_POS_NM%TYPE;
v_daejic_telnum     WF_PROC_HIST.ORG_TELNUM%TYPE;

v_daejic_yn         WF_PROC_HIST.DAEJIC_YN%TYPE := 'N';

v_appr_lvl_seq      WF_APPROVAL_MT.APPR_LVL_SEQ%TYPE;
v_appr_grp_seq      WF_APPROVAL_MT.APPR_GRP_SEQ %TYPE;

v_cnt_temp          NUMBER := -1;   -- cnt 비교용 임시변수
v_cnt_total         NUMBER := -1;   -- 결재/검토 승인 수 확인용 cnt

v_appr_nm           VARCHAR2(100);

V_min_appr_lvl_seq  WF_APPROVAL_MT.APPR_LVL_SEQ%TYPE;

v_map_wf_proc_cd    SR_BASE_INFO.MAP_WF_PROC_CD%TYPE;
v_wf_proc_nm        SR_BASE_INFO.WF_PROC_NM%TYPE;

EX_NO_APPR_USER EXCEPTION;
EX_NO_APPR_USER1 EXCEPTION;
EX_NO_APPR_USER2 EXCEPTION;

BEGIN
    dbms_output.put_line('pi_req_id : ' || pi_req_id);
    dbms_output.put_line('pi_wf_proc_cd : ' || pi_wf_proc_cd);
    dbms_output.put_line('pi_next_wf_proc_cd : ' || pi_next_wf_proc_cd);
    dbms_output.put_line('pi_user_id : ' || pi_user_id);
    dbms_output.put_line('pi_appr_desc : ' || pi_appr_desc);
    dbms_output.put_line('pi_lmpid : ' || pi_lmpid);

    IF pi_user_id <> pi_org_user_id THEN
        v_daejic_yn := 'Y';
    END IF;

    /* 최초 PARAM에 의한 미승인 결재자가 있는 지 확인 */
    SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, REQ_STAT_CD
    INTO v_req_tmplat_id, v_req_tmplat_ver, v_req_stat_cd
    FROM
        SR_BASE_INFO
    WHERE 1 = 1
    AND REQ_ID      = pi_req_id
    ;

    dbms_output.put_line('v_req_tmplat_id : ' || v_req_tmplat_id || ' v_req_tmplat_ver : ' || v_req_tmplat_ver || ' v_req_stat_cd : ' || v_req_stat_cd);

    IF v_req_stat_cd = 'RQST11' THEN     -- 결재중

        SELECT
            NVL(MAX(CASE WHEN A.USER_ID = pi_user_id AND A.APPR_STAT_CD  = 'APST_01' THEN 'Y' ELSE 'N' END), 'N') AS POSS_YN
        INTO v_poss_yn
        FROM WF_APPROVAL_MT A
        WHERE 1 = 1
        AND A.REQ_ID        = pi_req_id
        AND A.WF_PROC_CD    = pi_wf_proc_cd
        AND A.SEQ           = pi_seq
        AND A.USER_ID       = pi_user_id
        AND A.APPR_STAT_CD  = 'APST_01'
        ;

        IF v_poss_yn = 'N' THEN
            RAISE EX_NO_APPR_USER;
        END IF;

    END IF;

    --현재 로그인과 원본 로그인이 다른 경우 현재 로그인 자 정보를 대무자로 셋팅
    IF v_daejic_yn = 'Y' THEN

        --대직자 정보
        SELECT  USER_ID,            USER_NM,            DEPT_CD,            DEPT_NM,            POS_NM,             TELNUM
        INTO    v_daejic_user_id,   v_daejic_user_nm,   v_daejic_dept_cd,   v_daejic_dept_nm,   v_daejic_jbc_jname, v_daejic_telnum
        FROM    FOMM_USER_MT
        WHERE   USER_ID = pi_org_user_id
        ;

    END IF;

    /* 결재승인 && 이력 처리 */
    BEGIN

        IF v_req_stat_cd = 'RQST11' THEN     -- 결재중

            BEGIN

                SELECT
                      APPR_LVL_SEQ, APPR_GRP_SEQ
                INTO v_appr_lvl_seq, v_appr_grp_seq
                FROM WF_APPROVAL_MT
                WHERE 1 = 1
                AND REQ_ID          = pi_req_id
                AND WF_PROC_CD      = pi_wf_proc_cd
                AND SEQ             = pi_seq
                AND USER_ID         = pi_user_id
                AND APPR_STAT_CD    = 'APST_01' --승인대기
                ;

            EXCEPTION
                WHEN NO_DATA_FOUND THEN
                    po_rtn_cd  := -6;
                    po_rtn_msg := '결재차수/결재그룹순번 확인 중 오류 발생';
                    RAISE EX_NO_APPR_USER1;
                    RETURN;
                WHEN OTHERS THEN
                    po_rtn_cd  := -7;
                    po_rtn_msg := '결재차수/결재그룹순번 확인 중 오류 발생';
                    RAISE EX_NO_APPR_USER2;
                    RETURN;
            END;

        ELSE
            v_appr_lvl_seq := 1;    --검토인 경우는 1로 고정

        END IF;

        /* 결재자 승인 처리 */
        MERGE 
        INTO    WF_APPROVAL_MT A
        USING   DUAL
        ON (
            A.REQ_ID        = pi_req_id
        AND A.WF_PROC_CD    = pi_wf_proc_cd
        AND A.SEQ           = pi_seq
        )

        WHEN MATCHED THEN
            UPDATE SET
                  APPR_STAT_CD      = 'APST_99'
                , APPR_STIME        = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , APPR_DESC         = pi_appr_desc

                , DAEJIC_USER_ID    = v_daejic_user_id      --대리결재자ID
                , DAEJIC_USER_NM    = v_daejic_user_nm      --대리결재자명
                , DAEJIC_DEPT_CD    = v_daejic_dept_cd      --대리결재자부서ID
                , DAEJIC_DEPT_NM    = v_daejic_dept_nm      --대리결재자부서
                , DAEJIC_POS_NM     = v_daejic_jbc_jname    --대리결재자직급

            WHERE 1 = 1
            AND REQ_ID          = pi_req_id
            AND WF_PROC_CD      = pi_wf_proc_cd
            AND SEQ             = pi_seq
            AND USER_ID         = pi_user_id

        WHEN NOT MATCHED THEN
            INSERT
            (
                  REQ_ID
                , WF_PROC_CD
                , SEQ
                , APPR_LVL_SEQ
                , APPR_GRP_SEQ
                , APPR_SEQ
                , APPR_STAT_CD
                , APPR_GBN_CD

                , USER_ID
                , USER_NM
                , DEPT_CD
                , DEPT_NM
                , POS_NM

                , DAEJIC_USER_ID    --대리결재자ID
                , DAEJIC_USER_NM    --대리결재자명
                , DAEJIC_DEPT_CD    --대리결재자부서ID
                , DAEJIC_DEPT_NM    --대리결재자부서
                , DAEJIC_POS_NM     --대리결재자직급

                , APPR_STIME
                , APPR_DESC
                , REG_TIME                
            )
            VALUES
            (
                  pi_req_id
                , pi_wf_proc_cd
                , (SELECT NVL(MAX(SEQ), 0)+1 FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd)
                , v_appr_lvl_seq
                , v_appr_grp_seq
                , (SELECT NVL(MAX(APPR_SEQ), 0)+1 FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd AND APPR_LVL_SEQ = v_appr_lvl_seq AND APPR_GRP_SEQ = v_appr_grp_seq)
                , 'APST_99' -- 결재상태 승인
                , 'R01'     -- INSERT로 처리되는 경우는 검토만 존재

                , pi_user_id
                , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)

                , v_daejic_user_id
                , v_daejic_user_nm
                , v_daejic_dept_cd
                , v_daejic_dept_nm
                , v_daejic_jbc_jname

                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , pi_appr_desc
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')                
            )
            ;

    EXCEPTION
        WHEN OTHERS THEN
        po_rtn_cd  := -8;
        po_rtn_msg := '승인처리중 오류 발생';
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
        ROLLBACK;
        RETURN;
    END;

    BEGIN

        IF v_daejic_yn = 'N' THEN

            v_daejic_user_id    := null;
            v_daejic_user_nm    := null;
            v_daejic_dept_cd    := null;
            v_daejic_dept_nm    := null;
            v_daejic_jbc_jname  := null;
            v_daejic_telnum     := null;

        END IF;

        BEGIN

            SELECT
                REPLACE(APPR_NM, '\n', ' ')
            INTO v_appr_nm
            FROM
                WF_REQ_APPV_HT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = v_req_tmplat_id
            AND REQ_TMPLAT_VER  = v_req_tmplat_ver
            AND WF_PROC_CD      = pi_wf_proc_cd
            AND APPR_LVL_SEQ    = v_appr_lvl_seq
            ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
            v_appr_nm := '';
        END;

        IF NVL(v_appr_nm, ' ') = ' ' THEN

            SELECT
                REPLACE(FUNC_NM, '\n', ' ')
            INTO v_appr_nm
            FROM
                WF_REQ_TMPLAT_PROC_HT

            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = v_req_tmplat_id
            AND REQ_TMPLAT_VER  = v_req_tmplat_ver
            AND WF_PROC_CD      = pi_wf_proc_cd
            AND FUNC            = 'WF_FUNC_01'
            ;

        END IF;

        --dbms_output.put_line('MERGE WF_APPROVAL_MT END');

        /* 결재 HISTORY 생성 */
        INSERT INTO WF_PROC_HIST
        (
              PROC_NUMBER   --프로세스번호
            , WF_HIST_SEQ   --히스토리키값
            , WF_PROC_CD    --워크플로우단계코드
            , APPR_LVL_SEQ  --결재차수 (결재이력만 사용)
            , APPR_GRP_SEQ  --결재그룹 (결재이력만 사용)

            , APPR_STAT_CD  --승인상태
            , APPR_COMMENT  --승인/반려의견
            , APPR_GBN_CD   --결재자구분코드

            , SRM_USER_ID   --처리이력변경 사용자ID
            , SRM_USER_NM   --처리이력변경 사용자
            , SRM_DEPT_CD   --처리이력변경 사용자 부서코드
            , SRM_DEPT_NM   --처리이력변경 사용자 팀명
            , SRM_JBC_JNAME --처리이력변경 사용자 직명
            , SRM_TELNUM    --처리이력변경 사용자 내선번호

            , ORG_USER_ID   --원처리자ID(대무처리시)
            , ORG_USER_NM   --원처리자명(대무처리시)
            , ORG_DEPT_CD   --원처리자부서코드(대무처리시)
            , ORG_DEPT_NM   --원처리자부서명(대무처리시)
            , ORG_JBC_JNAME --원처리자직명(대무처리시)
            , ORG_TELNUM    --원처리자내선번호(대무처리시)

            , DAEJIC_YN     --대직처리여부

            , APPR_NM
            , MOBL_APP_NM

            , REG_STIME     --등록일시
        )
        VALUES
        (
              pi_req_id
            , (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = pi_req_id)
            , pi_wf_proc_cd
            , v_appr_lvl_seq
            , v_appr_grp_seq
            , 'APST_99'
            , pi_appr_desc
            , (SELECT APPR_GBN_CD  FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd AND SEQ = pi_seq)

            , pi_user_id
            , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)

            , CASE WHEN v_daejic_user_id = pi_user_id THEN NULL ELSE v_daejic_user_id END
            , v_daejic_user_nm
            , v_daejic_dept_cd
            , v_daejic_dept_nm
            , v_daejic_jbc_jname
            , v_daejic_telnum

            , v_daejic_yn

            , v_appr_nm
            , CASE WHEN pi_lmpid = 'FLOW' THEN pi_lmpid ELSE '' END

            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
        )
        ;

        dbms_output.put_line('INSERT WF_PROC_HIST');

    EXCEPTION
        WHEN OTHERS THEN
        po_rtn_cd  := -7;
        po_rtn_msg := SQLERRM;
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
        ROLLBACK;
        RETURN;
    END;

    -- 1. 결재
    IF v_req_stat_cd = 'RQST11' THEN

        /* 비교처리용 총 결재 수 확인 */
        SELECT COUNT(*)
        INTO v_cnt_temp
        FROM WF_APPROVAL_MT
        WHERE 1 = 1
        AND REQ_ID      = pi_req_id
        AND WF_PROC_CD  = pi_wf_proc_cd
        AND APPR_GBN_CD NOT IN ('A00', 'A01')
        ;

    -- 2. 검토
    ELSIF v_req_stat_cd = 'RQST21' THEN

        /* 다음단계 진행을 위한 총 검토 수 확인 */
        SELECT RVER_CNT
        INTO v_cnt_temp
        FROM WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = v_req_tmplat_id
        AND REQ_TMPLAT_VER  = v_req_tmplat_ver
        AND WF_PROC_CD      = pi_wf_proc_cd
        ;

    END IF;

    /* 결재/검토된 건 수 확인 */
    SELECT COUNT(*)
    INTO v_cnt_total
    FROM WF_APPROVAL_MT
    WHERE 1 = 1
    AND REQ_ID          = pi_req_id
    AND WF_PROC_CD      = pi_wf_proc_cd
    AND APPR_STAT_CD    = 'APST_99' -- APST_99:승인;  결재된
    ;

    dbms_output.put_line('v_req_stat_cd:[' || v_req_stat_cd || '] v_cnt_temp:[' || v_cnt_temp || '] v_cnt_total:[' || v_cnt_total || ']');

    /* 승인 완료인지 확인 */
    IF v_cnt_total = v_cnt_temp THEN

        DECLARE
            v_rtn_cd            NUMBER(10, 0);      -- PR_SR_REQ_WF_PROC_APPROVE() return code
            v_rtn_msg           VARCHAR2(4000);     -- PR_SR_REQ_WF_PROC_APPROVE() return message

        BEGIN
            UPDATE SR_BASE_INFO SET
                  REQ_STAT_CD           = 'RQST30'    -- RQST30:승인완료
                , REQ_STAT_NM           = (SELECT CMM_CD_NM FROM FOMM_CMM_CD_MT WHERE CODE_DIV = 'WORKFLOW_CD' AND UP_CMM_CD = 'REQ_STAT_CD' AND CMM_CD = 'RQST30' AND LANG_CD = 'KR')
--                , LAST_RTRN_YN          = 'N'
--                , RTRN_WF_PROC_CD       = NULL
--                , RTRN_MAP_WF_PROC_CD   = NULL
            WHERE 1 = 1
            AND REQ_ID = pi_req_id
            ;

            DBMS_OUTPUT.PUT_LINE('PR_SR_REQ_WF_PROC_NEXT pi_req_id:[' || pi_req_id || '] pi_user_id:[' || pi_user_id || '] pi_next_wf_proc_cd:[' || pi_next_wf_proc_cd || ']' ||
                                 ' pi_next_wf_func_cd:[' || pi_next_wf_func_cd || '] pi_lmpid:[' || pi_lmpid || ']');

            PR_SR_REQ_WF_PROC_NEXT('APV', pi_req_id, pi_user_id, pi_wf_proc_cd, pi_next_wf_proc_cd, pi_next_wf_func_cd, pi_lmpid, v_rtn_cd, v_rtn_msg);

            DBMS_OUTPUT.PUT_LINE('PR_SR_REQ_WF_PROC_NEXT :: ' || v_rtn_cd || ' :: ' || v_rtn_msg);

            IF v_rtn_cd != 0 THEN
                po_rtn_cd  := -8;
                po_rtn_msg := v_rtn_msg;
                DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
                ROLLBACK;
                RETURN;
            END IF;

        END;

    ELSE

        SELECT MIN(APPR_LVL_SEQ)
        INTO V_min_appr_lvl_seq
        FROM
            WF_APPROVAL_MT A

        WHERE 1 = 1
        AND REQ_ID          = pi_req_id
        AND WF_PROC_CD      = pi_next_wf_proc_cd
        AND APPR_STAT_CD    = 'APST_01'
        ;

        SELECT
          FN_SR_REQ_MAP_WF_PROC(pi_req_id, pi_next_wf_proc_cd, V_min_appr_lvl_seq, 'CODE')
        , FN_SR_REQ_MAP_WF_PROC(pi_req_id, pi_next_wf_proc_cd, V_min_appr_lvl_seq, 'NAME')
        INTO v_map_wf_proc_cd, v_wf_proc_nm
        FROM DUAL
        ;

        UPDATE SR_BASE_INFO A SET
              MAP_WF_PROC_CD    = v_map_wf_proc_cd
            , WF_PROC_NM        = v_wf_proc_nm
            , MAP_WF_PROC_NM    =
                                (
                                SELECT CMM_CD_NM
                                FROM FOMM_CMM_CD_MT
                                WHERE 1 = 1
                                AND CODE_DIV    = 'WORKFLOW_CD'
                                AND UP_CMM_CD   = (SELECT MAP_PROC_CD FROM WF_REQ_TMPLAT_HT WHERE REQ_TMPLAT_ID = A.REQ_TMPLAT_ID AND REQ_TMPLAT_VER = A.REQ_TMPLAT_VER)
                                AND CMM_CD      = v_map_wf_proc_cd
                                AND LANG_CD     = 'KR'
                                )

            , LMID              = pi_user_id
            , LM_USER_NM        = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LM_DEPT_CD        = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LM_DEPT_NM        = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LMDT              = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMPID             = pi_lmpid

        WHERE 1 = 1
        AND REQ_ID  = pi_req_id
        ;

    END IF;

    --승인 처리인 경우 더는 요청서를 취소할 수 없도록 취소 가능 여부를 'N'으로 변경
    UPDATE SR_BASE_INFO SET
         CANCEL_POSS_YN = 'N'
    WHERE 1 = 1
    AND CANCEL_POSS_YN  = 'Y'
    AND REQ_ID          = pi_req_id
    ;

    /* end procedure */
    po_rtn_cd   := 0;
    po_rtn_msg  := '정상 처리 되었습니다.';
    DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
    RETURN;

EXCEPTION
    WHEN EX_NO_APPR_USER THEN
        ROLLBACK;
        po_rtn_cd  := -9996;
        po_rtn_msg := '현재 결재 처리자는 [결재자 또는 대무자]에 해당하지 않아 결재 처리가 불가능 합니다.';        
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_APPROVE',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        RETURN;

    WHEN EX_NO_APPR_USER1 THEN
        ROLLBACK;
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_APPROVE',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        RETURN;

    WHEN EX_NO_APPR_USER2 THEN
        ROLLBACK;
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_APPROVE',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        RETURN;

    WHEN OTHERS THEN
        ROLLBACK;
        po_rtn_cd   := SQLCODE;
        po_rtn_msg := '요청서 결재 승인 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_APPROVE',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        po_rtn_cd := -9999;
        RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_BACK
--------------------------------------------------------
set define off;

  create or replace PROCEDURE       PR_SR_REQ_WF_PROC_BACK
(
    pi_req_id           IN VARCHAR2,    -- 요청서ID
    pi_wf_proc_cd       IN VARCHAR2,    -- 현재단계
    pi_seq              IN NUMBER,      -- 결재차수
    pi_user_id          IN VARCHAR2,    -- 현재 로그인 사용자(로그인 사번)
    pi_org_user_id      IN VARCHAR2,    -- 원 사용자
    pi_rtrn_div         IN VARCHAR2,    -- 반려구분( RTRN:결재반려 or SCREEN_RTRN:화면(접수)반려 )
    pi_appr_desc        IN VARCHAR2,    -- 결재의견
    pi_lmpid            IN VARCHAR2,    -- 수정프로그램ID

    po_rtn_cd       OUT NUMBER,     -- 리턴코드
    po_rtn_msg      OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : PR_SR_REQ_WF_PROC_BACK
    설명      : PARAM 단계의 반려단계를 구하고 해당 반려 단계로 이동한다.
                1) 반려 단계 구하기
                2) SR_WF_PROC 반려단계 이후 단계들 삭제
                3) SR_BASE_INFO UPDATE
    작성자     작성일자          작성내용
    이정빈     2023.07.12      최초 작성
======================================================================================*/
v_req_tmplat_id     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;            --요청서양식ID
v_req_tmplat_ver    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;           --요청서양식VER

v_rtrn_wf_proc_cd       SR_BASE_INFO.WF_PROC_CD%TYPE;

v_org_user_id           WF_PROC_HIST.ORG_USER_ID%TYPE;
v_org_user_nm           WF_PROC_HIST.ORG_USER_NM%TYPE;
v_org_dept_cd           WF_PROC_HIST.ORG_DEPT_CD%TYPE;
v_org_dept_nm           WF_PROC_HIST.ORG_DEPT_NM%TYPE;
v_org_jbc_jname         WF_PROC_HIST.ORG_JBC_JNAME%TYPE;
v_org_telnum            WF_PROC_HIST.ORG_TELNUM%TYPE;
v_daejic_yn             WF_PROC_HIST.DAEJIC_YN%TYPE := 'N';

v_hist_wf_proc_nm       WF_REQ_TMPLAT_PROC_HT.WF_PROC_NM%TYPE;
v_wf_proc_nm            WF_REQ_TMPLAT_PROC_HT.WF_PROC_NM%TYPE;
v_appr_nm               WF_PROC_HIST.APPR_NM%TYPE := 'N';

v_map_wf_proc_cd        SR_BASE_INFO.MAP_WF_PROC_CD%TYPE;

v_rtrn_seq              SR_WF_PROC.SEQ%TYPE;
v_is_skip_yn            VARCHAR2(1) := 'N';
v_rtrn_cger             WF_REQ_TMPLAT_PROC_HT.CGER%TYPE;         
v_rtrn_func             WF_REQ_TMPLAT_PROC_HT.FUNC%TYPE;

v_req_stat_cd           SR_BASE_INFO.REQ_STAT_CD%TYPE;

v_cur_wf_proc_cd       SR_BASE_INFO.RTRN_WF_PROC_CD%TYPE;
v_cur_map_wf_proc_cd   SR_BASE_INFO.RTRN_MAP_WF_PROC_CD%TYPE;
v_wf_proc_skip_yn      SR_WF_PROC.WF_PROC_SKIP_YN%TYPE;
NO_RTRN_WF_PROC_CD EXCEPTION;
NO_RTRN_WF_FUNC_CD EXCEPTION;

v_chk_cnt               NUMBER;

BEGIN

    --DBMS_OUTPUT.PUT_LINE('PROC_BACK START');
    --DBMS_OUTPUT.PUT_LINE('pi_req_id : ' || pi_req_id || ' pi_wf_proc_cd : ' || pi_wf_proc_cd || ' pi_rtrn_div : ' || pi_rtrn_div || ' pi_user_id : ' || pi_user_id);
    /* 1. 반려 단계 구하기 */
    /* RQST11:결재중 -> RTRN, RQST21:검토중*/
    BEGIN

        SELECT
            A.REQ_TMPLAT_ID,
            A.REQ_TMPLAT_VER,
            DECODE(pi_rtrn_div, 'RTRN', B.RTRN, 'SCREEN_RTRN', B.SCREEN_RTRN, NULL) AS RTRN_WF_PROC_CD,
            (SELECT NVL(MAX(WF_PROC_SKIP_YN), 'N') FROM SR_WF_PROC WHERE REQ_ID = A.REQ_ID AND WF_PROC_CD = DECODE(pi_rtrn_div, 'RTRN', B.RTRN, 'SCREEN_RTRN', B.SCREEN_RTRN, NULL)) AS WF_PROC_SKIP_YN,
            REPLACE(B.WF_PROC_NM, '\n', ' '),
            A.WF_PROC_CD,
            A.MAP_WF_PROC_CD
        INTO v_req_tmplat_id, v_req_tmplat_ver, v_rtrn_wf_proc_cd, v_wf_proc_skip_yn, v_hist_wf_proc_nm, v_cur_wf_proc_cd, v_cur_map_wf_proc_cd
        --INTO v_req_tmplat_id, v_req_tmplat_ver, v_hist_wf_proc_nm, v_cur_wf_proc_cd, v_cur_map_wf_proc_cd
        FROM
              SR_BASE_INFO A
            , WF_REQ_TMPLAT_PROC_HT B
        WHERE 1 = 1
        AND A.REQ_TMPLAT_ID     = B.REQ_TMPLAT_ID
        AND A.REQ_TMPLAT_VER    = B.REQ_TMPLAT_VER
        AND A.WF_PROC_CD        = B.WF_PROC_CD
        AND A.REQ_ID            = pi_req_id
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            po_rtn_cd  := -1;
            po_rtn_msg := '해당 조건의 반려단계가 없습니다.';
            DBMS_OUTPUT.PUT_LINE('po_rtn_cd:' || po_rtn_cd);
            DBMS_OUTPUT.PUT_LINE('po_rtn_msg:' || po_rtn_msg);
            RETURN;
        WHEN OTHERS THEN
            po_rtn_cd  := -2;
            po_rtn_msg := '반려단계 확인시 오류가 발생했습니다.';
            DBMS_OUTPUT.PUT_LINE('po_rtn_cd:' || po_rtn_cd);
            DBMS_OUTPUT.PUT_LINE('po_rtn_msg:' || po_rtn_msg);
            RETURN;
    END;
    
    -- 현재단계가 등록이면 반려 단계도 등록
    IF v_cur_wf_proc_cd = 'WF_PROC_1000' THEN
        v_rtrn_wf_proc_cd := 'WF_PROC_1000';

    ELSE

        -- 구해진 반려단계가 건너뛰기인 경우
        IF v_wf_proc_skip_yn = 'Y' THEN

            FOR CUR IN
            (
                SELECT
                    SEQ, WF_PROC_SKIP_YN, WF_PROC_CD, CGER,
                    NVL(SCREEN_RTRN, CASE WHEN SEQ = 1 THEN 'WF_PROC_1000' END) AS SCREEN_RTRN,
                    NVL(SCREEN_RTRN, CASE WHEN SEQ = 1 THEN 'WF_PROC_1000' END) AS RTRN
                FROM
                    (
                    --등록에 대한 단계 진행 내역이 생성되지 않은 케이스가 있어 임의로 등록에 대한 단계 진행 내역이 없으면 조회시 ROW가 조회되도록 UION ALL 조건을 추가
                    SELECT 1 AS SEQ, 'N' AS WF_PROC_SKIP_YN, 'WF_PROC_1000' AS WF_PROC_CD, NULL AS CGER, 'WF_PROC_1000' AS SCREEN_RTRN, 'WF_PROC_1000' AS RTRN FROM DUAL A
                    WHERE 0 = (SELECT COUNT(*) FROM SR_WF_PROC WHERE REQ_ID = pi_req_id AND SEQ = 1)    -- SEQ==1 은 무조건 등록단계
                    UNION ALL
                    SELECT A.SEQ, A.WF_PROC_SKIP_YN, A.WF_PROC_CD, C.CGER, C.SCREEN_RTRN, C.RTRN
                    FROM
                         SR_WF_PROC A
                        ,SR_BASE_INFO B
                        ,WF_REQ_TMPLAT_PROC_HT C
                        
                    WHERE 1 = 1
                    AND A.REQ_ID            = B.REQ_ID
                    AND B.REQ_TMPLAT_ID     = C.REQ_TMPLAT_ID
                    AND B.REQ_TMPLAT_VER    = C.REQ_TMPLAT_VER
                    AND A.WF_PROC_CD        = C.WF_PROC_CD
                    AND A.REQ_ID            = pi_req_id
                    AND A.SEQ               <= (SELECT SEQ FROM SR_WF_PROC WHERE REQ_ID = A.REQ_ID AND WF_PROC_CD = v_rtrn_wf_proc_cd)
                    ) A
        
                ORDER BY
                    A.SEQ DESC
            )
            LOOP
            
                DBMS_OUTPUT.PUT_LINE('v_rtrn_seq IS NULL [' || CUR.WF_PROC_CD || '] v_rtrn_wf_proc_cd:[' || v_rtrn_wf_proc_cd || '] v_rtrn_seq:[' || v_rtrn_seq || ']');
                
                IF v_rtrn_seq IS NULL THEN
                    
                    IF NVL(CUR.WF_PROC_SKIP_YN, 'N')  = 'N' THEN
        
                        v_rtrn_seq  := CUR.SEQ;
                        
                        IF v_is_skip_yn = 'Y' THEN
    
                            v_rtrn_wf_proc_cd   := CUR.WF_PROC_CD;
    
                        ELSE
    
                            --IF CUR.CGER = 'true' THEN
                            IF pi_seq = -1 THEN
                                v_rtrn_wf_proc_cd   := CUR.SCREEN_RTRN;
                            ELSE
                                IF CUR.WF_PROC_CD = 'WF_PROC_1000' THEN
                                    v_rtrn_wf_proc_cd   := CUR.WF_PROC_CD;
                                ELSE
                                    v_rtrn_wf_proc_cd   := CUR.RTRN;
                                END IF;
                            END IF;
    
                        END IF;
    
                    ELSE
                        v_is_skip_yn := 'Y';
                    END IF;
    
                END IF;
    
            END LOOP;

        END IF;

    END IF;
    
    DBMS_OUTPUT.PUT_LINE('v_rtrn_wf_proc_cd : ' || v_rtrn_wf_proc_cd);

    IF NVL(v_rtrn_wf_proc_cd, ' ') = ' ' THEN

        RAISE NO_RTRN_WF_PROC_CD;

    ELSE
    
        SELECT COUNT(*)
        INTO v_chk_cnt
        FROM WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID     = v_req_tmplat_id
        AND REQ_TMPLAT_VER    = v_req_tmplat_ver
        AND WF_PROC_CD        = v_rtrn_wf_proc_cd
        ;

        IF v_chk_cnt = 0 THEN

            po_rtn_cd  := -4;
            po_rtn_msg := '존재하지 않는 반려 단계 코드[' || v_rtrn_wf_proc_cd || '가 반려 단계로 설정되어 반려 진행을 할 수 없습니다.';
            RETURN;

        END IF;

    END IF;

    BEGIN

        --반려로 프로세스 중간 종료 처리 되는 경우 SKIP 단계를 추가해 준다.
        IF v_rtrn_wf_proc_cd = 'WF_PROC_9999' THEN

            FOR CUR IN
            (
                SELECT *
                FROM
                    (
                    SELECT
                        A.*,
                        MAX(CASE WHEN WF_PROC_CD = v_rtrn_wf_proc_cd THEN SEQ END) OVER() NEXT_MAX_SEQ,
                        (SELECT MAX(SEQ) FROM SR_WF_PROC WHERE REQ_ID = pi_req_id) LAST_MAX_SEQ
                    FROM
                        WF_REQ_TMPLAT_PROC_HT A
                    WHERE 1 = 1
                    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                    AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                    )
                WHERE SEQ > LAST_MAX_SEQ AND SEQ <= NEXT_MAX_SEQ

                ORDER BY
                    SEQ
            )
            LOOP

                IF CUR.WF_PROC_CD = v_rtrn_wf_proc_cd THEN

                    MERGE
                    INTO    SR_WF_PROC A
                    USING   DUAL
                    ON      (A.REQ_ID = pi_req_id AND A.WF_PROC_CD = CUR.WF_PROC_CD)

                    WHEN MATCHED THEN
                        UPDATE
                        SET
                             SEQ                = CUR.SEQ
                            ,LMID               = pi_user_id
                            ,LMDT               = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')

                    WHEN NOT MATCHED THEN
                        INSERT 
                        (
                             REQ_ID
                            ,WF_PROC_CD
                            ,SEQ
                            ,FRID
                            ,FRDT
                            ,LMID
                            ,LMDT
                        )
                        VALUES
                        (
                             pi_req_id
                            ,CUR.WF_PROC_CD
                            ,CUR.SEQ
                            ,pi_user_id
                            ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                            ,pi_user_id
                            ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                        )
                    ;

                ELSE

                    MERGE
                    INTO    SR_WF_PROC A
                    USING   DUAL
                    ON      (A.REQ_ID = pi_req_id AND A.WF_PROC_CD = CUR.WF_PROC_CD)

                    WHEN MATCHED THEN
                        UPDATE
                        SET
                             SEQ                = CUR.SEQ
                            ,WF_PROC_SKIP_YN    = 'Y'
                            ,LMID               = pi_user_id
                            ,LMDT               = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')

                    WHEN NOT MATCHED THEN
                        INSERT 
                        (
                             REQ_ID
                            ,WF_PROC_CD
                            ,SEQ
                            ,WF_PROC_SKIP_YN
                            ,FRID
                            ,FRDT
                            ,LMID
                            ,LMDT
                        )
                        VALUES
                        (
                             pi_req_id
                            ,CUR.WF_PROC_CD
                            ,CUR.SEQ
                            ,'Y'
                            ,pi_user_id
                            ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                            ,pi_user_id
                            ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                        )
                    ;

                END IF;

            END LOOP;

        ELSE

            --반려되어 돌아가는 진행단계까지의 진행 단계 내역 초기화
            DELETE
            FROM SR_WF_PROC A
            WHERE 1 = 1
            AND A.REQ_ID = pi_req_id
            AND A.SEQ >
                    (
                    SELECT SEQ 
                    FROM SR_WF_PROC
                    WHERE 1 = 1
                    AND REQ_ID      = pi_req_id
                    AND WF_PROC_CD  = v_rtrn_wf_proc_cd
                    )
            ;

            --반려되어 돌아가는 진행단계까지의 담당자 내역 초기화
            DELETE
            FROM
                SR_CGER_DT A
            WHERE 1 = 1
            AND A.REQ_ID = pi_req_id
            AND EXISTS
                    (
                    SELECT 1
                    FROM
                        (
                        SELECT
                            B.REQ_ID,
                            C.WF_PROC_CD,
                            C.SEQ,
                            MAX(CASE WHEN C.WF_PROC_CD = v_rtrn_wf_proc_cd THEN SEQ END) OVER() FIRST_SEQ
                        FROM
                              SR_BASE_INFO B
                            , WF_REQ_TMPLAT_PROC_HT C

                        WHERE 1 = 1
                        AND B.REQ_TMPLAT_ID     = C.REQ_TMPLAT_ID
                        AND B.REQ_TMPLAT_VER    = C.REQ_TMPLAT_VER
                        AND B.REQ_ID            = A.REQ_ID
                        ) X
                    WHERE 1 = 1
                    AND X.WF_PROC_CD    = A.WF_PROC_CD
                    AND X.SEQ           >= FIRST_SEQ
                    /*
                    AND (
                         (v_rtrn_wf_proc_cd = 'WF_PROC_1000' AND X.SEQ >= FIRST_SEQ) OR
                         (v_rtrn_wf_proc_cd <> 'WF_PROC_1000' AND X.SEQ >= FIRST_SEQ)
                        )
                    */
                    )

            ;

            --반려되어 돌아가는 진행단계까지의 결재선 내역 초기화
            DELETE
            FROM
                WF_APPROVAL_MT A

            WHERE 1 = 1
            AND A.REQ_ID  = pi_req_id
            AND EXISTS
                    (
                    SELECT 1
                    FROM
                        (
                        SELECT
                            B.REQ_ID,
                            C.WF_PROC_CD,
                            C.SEQ,
                            MAX(CASE WHEN C.WF_PROC_CD = v_rtrn_wf_proc_cd THEN SEQ END) OVER() FIRST_SEQ
                        FROM
                              SR_BASE_INFO B
                            , WF_REQ_TMPLAT_PROC_HT C

                        WHERE 1 = 1
                        AND B.REQ_TMPLAT_ID     = C.REQ_TMPLAT_ID
                        AND B.REQ_TMPLAT_VER    = C.REQ_TMPLAT_VER
                        AND B.REQ_ID            = A.REQ_ID
                        ) X
                    WHERE 1 = 1
                    AND X.WF_PROC_CD    = A.WF_PROC_CD
                    AND X.SEQ           >= FIRST_SEQ
                    )
            ;

            DELETE FROM SR_REV_PROC A
            WHERE 1 = 1
            AND A.REQ_ID  = pi_req_id
            AND EXISTS
                    (
                    SELECT 1
                    FROM
                        (
                        SELECT
                            B.REQ_ID,
                            C.WF_PROC_CD,
                            C.SEQ,
                            MAX(CASE WHEN C.WF_PROC_CD = v_rtrn_wf_proc_cd THEN SEQ END) OVER() FIRST_SEQ
                        FROM
                              SR_BASE_INFO B
                            , WF_REQ_TMPLAT_PROC_HT C

                        WHERE 1 = 1
                        AND B.REQ_TMPLAT_ID     = C.REQ_TMPLAT_ID
                        AND B.REQ_TMPLAT_VER    = C.REQ_TMPLAT_VER
                        AND B.REQ_ID            = A.REQ_ID
                        ) X
                    WHERE 1 = 1
                    AND X.WF_PROC_CD    = A.WF_PROC_CD
                    AND X.SEQ           >= FIRST_SEQ
                    )
            ;

        END IF;

        --DBMS_OUTPUT.PUT_LINE('END_IF');

        SELECT
            FN_SR_REQ_MAP_WF_PROC(pi_req_id, v_rtrn_wf_proc_cd, NULL, 'CODE')
          , FN_SR_REQ_MAP_WF_PROC(pi_req_id, v_rtrn_wf_proc_cd, NULL, 'NAME')
          , FN_SR_REQ_MAP_WF_PROC(pi_req_id, pi_wf_proc_cd, pi_seq, 'NAME')
        INTO v_map_wf_proc_cd, v_wf_proc_nm, v_appr_nm
        FROM DUAL
        ;

        DBMS_OUTPUT.PUT_LINE('SELECT1 v_map_wf_proc_cd:[' || v_map_wf_proc_cd || '] v_req_tmplat_id:[' || v_req_tmplat_id || '] v_rtrn_wf_proc_cd:[' || v_rtrn_wf_proc_cd || ']');

        /*
        IF v_map_wf_proc_cd IS NULL THEN

            BEGIN

                SELECT
                     CASE WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '9999' ELSE MAP_WF_PROC_CD END
                    ,CASE WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '완료' ELSE REPLACE(APPR_NM, '\n', ' ') END --매핑진행단계명                
                INTO v_map_wf_proc_cd, v_wf_proc_nm
                FROM WF_REQ_APPV_HT
                WHERE 1 = 1
                AND REQ_TMPLAT_ID   = v_req_tmplat_id
                AND REQ_TMPLAT_VER  = v_req_tmplat_ver
                AND WF_PROC_CD      = v_rtrn_wf_proc_cd
                AND APPR_LVL_SEQ    = 1
                ;
                
                DBMS_OUTPUT.PUT_LINE('SELECT2 v_map_wf_proc_cd:[' || v_map_wf_proc_cd || ']');

            EXCEPTION
            WHEN NO_DATA_FOUND THEN
                v_map_wf_proc_cd := '';
            END;

        END IF;
        */

        SELECT CGER, FUNC
        INTO v_rtrn_cger, v_rtrn_func
        FROM
            WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = v_req_tmplat_id
        AND REQ_TMPLAT_VER  = v_req_tmplat_ver
        AND WF_PROC_CD      = v_rtrn_wf_proc_cd
        ;

        --DBMS_OUTPUT.PUT_LINE('SELECT3');

        IF v_rtrn_wf_proc_cd = 'WF_PROC_1000' OR v_rtrn_wf_proc_cd = 'WF_PROC_9999' THEN

            v_req_stat_cd := 'RQST91';   --반려

        ELSE

            IF v_rtrn_cger = 'true' THEN

                v_req_stat_cd := 'RQST91';   --반려

            ELSE

                IF v_rtrn_func = 'WF_FUNC_01' THEN

                    v_req_stat_cd := 'RQST11';   --결재중

                ELSE

                    RAISE NO_RTRN_WF_FUNC_CD;

                END IF;

            END IF;

        END IF;

        --DBMS_OUTPUT.PUT_LINE('SELECT4');

        --RAISE NO_RTRN_WF_FUNC_CD;

        /* 3. SR_BASE_INFO Update */
        UPDATE SR_BASE_INFO A SET
              WF_PROC_CD            = v_rtrn_wf_proc_cd
            , WF_PROC_NM            = v_wf_proc_nm

            , MAP_WF_PROC_CD        = v_map_wf_proc_cd
            , MAP_WF_PROC_NM        = 
                                    NVL
                                    (
                                        (
                                        SELECT CMM_CD_NM
                                        FROM FOMM_CMM_CD_MT
                                        WHERE 1 = 1
                                        AND CODE_DIV    = 'WORKFLOW_CD'
                                        AND UP_CMM_CD   = (SELECT MAP_PROC_CD FROM WF_REQ_TMPLAT_HT WHERE REQ_TMPLAT_ID = A.REQ_TMPLAT_ID AND REQ_TMPLAT_VER = A.REQ_TMPLAT_VER)
                                        AND CMM_CD      = 
                                                        (
                                                        SELECT MAP_WF_PROC_CD
                                                        FROM
                                                        WF_REQ_TMPLAT_PROC_HT B
                                                        WHERE 1 = 1
                                                        AND B.REQ_TMPLAT_ID   = A.REQ_TMPLAT_ID
                                                        AND B.REQ_TMPLAT_VER  = A.REQ_TMPLAT_VER
                                                        AND B.WF_PROC_CD      = v_rtrn_wf_proc_cd
                                                        )
                                        AND LANG_CD     = 'KR'
                                        ),
                                        (
                                        SELECT CMM_CD_NM
                                        FROM FOMM_CMM_CD_MT
                                        WHERE 1 = 1
                                        AND CODE_DIV    = 'WORKFLOW_CD'
                                        AND UP_CMM_CD   = (SELECT MAP_PROC_CD FROM WF_REQ_TMPLAT_HT WHERE REQ_TMPLAT_ID = A.REQ_TMPLAT_ID AND REQ_TMPLAT_VER = A.REQ_TMPLAT_VER)
                                        AND CMM_CD      = 
                                                        (
                                                        SELECT MAP_WF_PROC_CD
                                                        FROM
                                                        WF_REQ_APPV_HT B
                                                        WHERE 1 = 1
                                                        AND B.REQ_TMPLAT_ID   = A.REQ_TMPLAT_ID
                                                        AND B.REQ_TMPLAT_VER  = A.REQ_TMPLAT_VER
                                                        AND B.WF_PROC_CD      = v_rtrn_wf_proc_cd
                                                        AND B.APPR_LVL_SEQ    = 1
                                                        )
                                        AND LANG_CD     = 'KR'
                                        )
                                      )
            , REQ_STAT_CD           = v_req_stat_cd
            , REQ_STAT_NM           = (SELECT CMM_CD_NM FROM FOMM_CMM_CD_MT WHERE CODE_DIV = 'WORKFLOW_CD' AND UP_CMM_CD = 'REQ_STAT_CD' AND CMM_CD = v_req_stat_cd AND LANG_CD = 'KR')
            , LAST_RTRN_YN          = 'Y'
            , RTRN_WF_PROC_CD       = v_cur_wf_proc_cd
            , RTRN_MAP_WF_PROC_CD   = v_cur_map_wf_proc_cd
            , RTRN_APPV_YN          = CASE WHEN pi_seq = -1 THEN 'N' ELSE 'Y' END
            
            , RESERV_FLAG           = CASE WHEN v_rtrn_wf_proc_cd = 'WF_PROC_1000' THEN 'N' ELSE RESERV_FLAG END
            , RESERV_DT             = CASE WHEN v_rtrn_wf_proc_cd = 'WF_PROC_1000' THEN NULL ELSE RESERV_DT END
            , RESERV_PROC_YN        = CASE WHEN v_rtrn_wf_proc_cd = 'WF_PROC_1000' THEN 'N' ELSE RESERV_PROC_YN END

            , LMID                  = pi_user_id
            , LM_USER_NM            = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LM_DEPT_CD            = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LM_DEPT_NM            = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LMDT                  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMPID                 = pi_lmpid
        WHERE 1 = 1
        AND REQ_ID  = pi_req_id
        ;

        --DBMS_OUTPUT.PUT_LINE('UPDATE SR_BASE_INFO A SET');

        --반려시 상태가 등록인 경우
        IF v_rtrn_wf_proc_cd = 'WF_PROC_1000' THEN

            --반려 되어 등록 단계로 다시 돌아온 경우 요청서 회수(취소) 가능 상태를 다시 'Y'로 변경한다.
            UPDATE SR_BASE_INFO SET
                 CANCEL_POSS_YN = 'Y'
            WHERE 1 = 1
            AND CANCEL_POSS_YN  = 'N'
            AND REQ_ID          = pi_req_id
            ;

        END IF;

        --DBMS_OUTPUT.PUT_LINE('UPDATE SR_BASE_INFO A SET CANCEL_POSS_YN');

    EXCEPTION
        WHEN OTHERS THEN
            po_rtn_cd  := -4;
            --po_rtn_msg := v_rtrn_wf_proc_cd || '/' || SQLERRM || '반려단계로 이동 처리시 오류가 발생했습니다.';
            po_rtn_msg := '반려단계로 이동 처리시 오류가 발생했습니다.';
            ROLLBACK;
            RETURN;
    END;

    IF pi_rtrn_div = 'SCREEN_RTRN' THEN

        IF pi_user_id <> pi_org_user_id THEN
            v_daejic_yn := 'Y';
        END IF;

        --현재 로그인과 원본 로그인이 다른 경우 원 로그인 자 정보를 대무자로 셋팅
        IF v_daejic_yn = 'Y' THEN

            --원 결재자 장보
            SELECT  USER_ID,        USER_NM,        POS_NM,             DEPT_CD,        DEPT_NM,        TELNUM
            INTO    v_org_user_id,  v_org_user_nm,  v_org_jbc_jname,    v_org_dept_cd,  v_org_dept_nm,  v_org_telnum
            FROM    FOMM_USER_MT
            WHERE   USER_ID = pi_org_user_id
            ;

        END IF;

        BEGIN
            /* 반려 HISTORY 생성 */
            INSERT INTO WF_PROC_HIST
            (
                  PROC_NUMBER   --프로세스번호
                , WF_HIST_SEQ   --히스토리키값
                , WF_PROC_CD    --워크플로우단계코드
                , APPR_LVL_SEQ  --결재차수 (결재이력만 사용)
                , APPR_GRP_SEQ  --결재그룹 (결재이력만 사용)

                , APPR_STAT_CD  --승인상태
                , APPR_COMMENT  --승인/반려의견
                , APPR_GBN_CD   --결재자구분코드

                , SRM_USER_ID   --처리이력변경 사용자ID
                , SRM_USER_NM   --처리이력변경 사용자
                , SRM_DEPT_CD   --처리이력변경 사용자 팀명
                , SRM_DEPT_NM   --처리이력변경 사용자 팀명
                , SRM_JBC_JNAME --처리이력변경 사용자 직명
                , SRM_TELNUM    --처리이력변경 사용자 내선번호

                , ORG_USER_ID   --원처리자ID(대무처리시)
                , ORG_USER_NM   --원처리자명(대무처리시)
                , ORG_DEPT_CD   --원처리자부서명(대무처리시)
                , ORG_DEPT_NM   --원처리자부서명(대무처리시)
                , ORG_JBC_JNAME --원처리자직명(대무처리시)
                , ORG_TELNUM    --원처리자내선번호(대무처리시)

                , DAEJIC_YN     --대직처리여부

                , APPR_NM
                , REG_STIME     --등록일시
            )
            VALUES
            (
                  pi_req_id
                , (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = pi_req_id)
                , pi_wf_proc_cd
                , (SELECT APPR_LVL_SEQ FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd AND SEQ = pi_seq)
                , NVL((SELECT APPR_GRP_SEQ  FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd AND SEQ = pi_seq), 1)

                , 'APST_00'     -- 반려
                , pi_appr_desc
                , 'A01'     -- 기안자(접수자/최초등록자)

                , pi_user_id
                , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)

                , CASE WHEN v_org_user_id = pi_user_id THEN NULL ELSE v_org_user_id END
                , v_org_user_nm
                , v_org_dept_cd
                , v_org_dept_nm
                , v_org_jbc_jname
                , v_org_telnum

                , v_daejic_yn

                , v_appr_nm
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            )
            ;

        EXCEPTION
            WHEN OTHERS THEN
                po_rtn_cd  := -5;
                po_rtn_msg := '반려 처리시 오류가 발생했습니다.';
                ROLLBACK;
                RETURN;
        END;

    END IF;

    /* END PROCEDURE */    
    po_rtn_cd   := 0;
    po_rtn_msg  := '정상 처리 되었습니다.';
    --DBMS_OUTPUT.PUT_LINE('END OF BACK :: ' || po_rtn_msg);
    RETURN;

EXCEPTION
    WHEN NO_RTRN_WF_FUNC_CD THEN
        po_rtn_cd  := -9994;
        po_rtn_msg := '반려 진행 중 요청서 상태를 처리할 수 없습니다.';
        --DBMS_OUTPUT.PUT_LINE('po_rtn_cd:' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('po_rtn_msg:' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_BACK',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        RETURN;

    WHEN NO_RTRN_WF_PROC_CD THEN
        po_rtn_cd  := -9995;
        po_rtn_msg := '반려 단계가 지정되지 않아 반려 처리가 불가능합니다.';
        --DBMS_OUTPUT.PUT_LINE('po_rtn_cd:' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('po_rtn_msg:' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_BACK',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        RETURN;

    WHEN OTHERS THEN
        po_rtn_cd := SQLCODE;
        po_rtn_msg := '요청서 반려 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('po_rtn_cd:' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('po_rtn_msg:' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_BACK',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        po_rtn_cd := -9999;
        RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_NEXT
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_SR_REQ_WF_PROC_NEXT" 
(
    IN_REG_GUBUN        IN VARCHAR2,    -- REG : 등록, REV : 접수
    IN_REQ_ID           IN VARCHAR2,    -- 요청서ID
    IN_USER_ID          IN VARCHAR2,    -- 등록자
    IN_WF_PROC_CD       IN VARCHAR2,    -- 현재단계(dsFormInfo에 담겨있는 단계값)
    IN_NEXT_WF_PROC_CD  IN VARCHAR2,    -- 다음단계
    IN_NEXT_WF_FUNC_CD  IN VARCHAR2,    -- 워크플로우 기능(/* 워크플로우기능[WF_FUNC_CD] - WF_FUNC_00:[등록], WF_FUNC_01:[결재], WF_FUNC_02:[검토], WF_FUNC_04:[담당자] */)
    IN_LMPID            IN VARCHAR2,    -- 수정프로그램ID
    OUT_RTN_CD          OUT NUMBER,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : PR_SR_REQ_WF_PROC_NEXT
    설명      : 요청서 진행단계에 대한 UPDATE 여부 체크 후 단계 변경이 필요하면 단계 변경을 진행한다.
    작성자     작성일자         작성내용
    정보윤     2023.07.11      최초 작성
======================================================================================*/
V_REQ_TMPLAT_ID     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;            --요청서양식ID
V_REQ_TMPLAT_VER    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;           --요청서양식VER
V_WF_PROC_CD        SR_BASE_INFO.WF_PROC_CD%TYPE;               --현재 진행단계
V_REQ_STAT_CD       SR_BASE_INFO.REQ_STAT_CD%TYPE;              --요청서진행상태코드

V_NEXT_WF_PROC_CD   WF_REQ_TMPLAT_PROC_HT.NEXT_WF_PROC_CD%TYPE;            --조회를 통해 구한 다음 진행단계
V_SCREEN_RTRN       WF_REQ_TMPLAT_PROC_HT.SCREEN_RTRN%TYPE;     --다음 진행 단계의 반려 단계

V_CHK_WF_PROC_CD    SR_WF_PROC.WF_PROC_CD%TYPE;
--V_CHK_REQ_STAT_CD   SR_BASE_INFO.REQ_STAT_CD%TYPE;

V_APPR_LVL_SEQ      WF_APPROVAL_MT.APPR_LVL_SEQ%TYPE;

EX_REV_COMPLETE EXCEPTION;

V_MAP_WF_PROC_CD    SR_BASE_INFO.MAP_WF_PROC_CD%TYPE;
V_WF_PROC_NM        SR_BASE_INFO.WF_PROC_NM%TYPE;

V_TEXT1 VARCHAR2(100);
V_TEXT2 VARCHAR2(100);

V_CHK_CNT   NUMBER;

V_UPD_PROC_COMP_DATE VARCHAR(2) := 'N';

BEGIN

    IF IN_REG_GUBUN = 'REV' THEN

        BEGIN

--            SELECT
--                WF_PROC_CD
--            INTO V_CHK_WF_PROC_CD
--            FROM
--                SR_WF_PROC A
--
--            WHERE 1 = 1
--            AND EXISTS
--                    (
--                    SELECT 1
--                    FROM
--                        SR_BASE_INFO B
--                    WHERE 1 = 1
--                    AND A.REQ_ID        = B.REQ_ID
--                    AND A.WF_PROC_CD    = B.WF_PROC_CD
--                    )
--            ;

            SELECT
                  A.WF_PROC_CD
            INTO
                  V_CHK_WF_PROC_CD

            FROM
                  SR_WF_PROC A
                , SR_BASE_INFO B

            WHERE 1 = 1
            AND A.REQ_ID    = B.REQ_ID
            AND A.REQ_ID    = IN_REQ_ID
            AND A.SEQ       = (
                              SELECT MAX(SEQ)
                              FROM SR_WF_PROC
                              WHERE REQ_ID = IN_REQ_ID
                              )
            ;

            IF IN_WF_PROC_CD <> V_CHK_WF_PROC_CD THEN            
                RAISE EX_REV_COMPLETE;
            END IF;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                OUT_RTN_CD := -1;
                OUT_RTN_MSG := '요청서 ';
                DBMS_OUTPUT.PUT_LINE('-1 ERROR');
                RETURN;
            WHEN OTHERS THEN
                OUT_RTN_CD := -2;
                --OUT_RTN_MSG := '기본 정보 조회시 오류 발생'    || 'IN_WF_PROC_CD:' || IN_WF_PROC_CD || ' V_CHK_WF_PROC_CD:' || V_CHK_WF_PROC_CD;
                OUT_RTN_MSG := '기본 정보 조회시 오류 발생';
                DBMS_OUTPUT.PUT_LINE('-2 ERROR');
                RETURN;
        END;

    END IF;

    BEGIN
        --처리시 필요한 컬럼 정보를 기본 정보 TBL에서 얻는다.
        SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD, REQ_STAT_CD
        INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_WF_PROC_CD, V_REQ_STAT_CD
        FROM SR_BASE_INFO
        WHERE 1 = 1
        AND REQ_ID  = IN_REQ_ID
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            OUT_RTN_CD := -3;
            OUT_RTN_MSG := '기본 정보 조회시 오류 발생 NO_DATA';
            RETURN;
        WHEN OTHERS THEN
            OUT_RTN_CD := -4;
            OUT_RTN_MSG := '기본 정보 조회시 오류 발생';
            RETURN;
    END;

    DBMS_OUTPUT.PUT_LINE('1단계 V_REQ_TMPLAT_ID : ' || V_REQ_TMPLAT_ID || ' V_REQ_TMPLAT_VER : ' || V_REQ_TMPLAT_VER ||
                         ' V_WF_PROC_CD : ' || V_WF_PROC_CD ||  ' V_REQ_STAT_CD : ' || V_REQ_STAT_CD );

    --파라미터로 넘어온 다음 단계가 실제 워크플로우에 존재하는 단계인지 검증
    BEGIN

        SELECT WF_PROC_CD
        INTO V_NEXT_WF_PROC_CD
        FROM WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER

        /* [TEST] 일부러 오류를 내기 위해 아래 조회 조건 주석 해제 했다가 적용했다가 사용중*/
        AND WF_PROC_CD      = IN_NEXT_WF_PROC_CD
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            OUT_RTN_CD := -5;
            OUT_RTN_MSG := '다음 진행 단계 조회시 오류 발생 NO_DATA';
            RETURN;
        WHEN OTHERS THEN
            OUT_RTN_CD := -6;
            OUT_RTN_MSG := '다음 진행 단계 조회시 오류 발생';
            RETURN;
    END;

    DBMS_OUTPUT.PUT_LINE('2단계 V_NEXT_WF_PROC_CD : ' || V_NEXT_WF_PROC_CD  );

    --현재 단계의 다음 단계를 정상적으로 구한 경우 다음 단계의 반려 단계를 구한다.
    BEGIN

        SELECT SCREEN_RTRN
        INTO V_SCREEN_RTRN
        FROM WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = V_NEXT_WF_PROC_CD
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            OUT_RTN_CD := -7;
            OUT_RTN_MSG := '다음 진행에 해당하는 반려 단계 조회시 오류 발생 NO_DATA';
            RETURN;
        WHEN OTHERS THEN
            OUT_RTN_CD := -8;
            OUT_RTN_MSG := '다음 진행에 해당하는 반려 단계 조회시 오류 발생';
            RETURN;
    END;

    DBMS_OUTPUT.PUT_LINE('4단계 V_SCREEN_RTRN : ' || V_SCREEN_RTRN );

    BEGIN

        MERGE
        INTO    SR_WF_PROC A
        USING   DUAL
        ON      (A.REQ_ID = IN_REQ_ID AND A.WF_PROC_CD = V_WF_PROC_CD)

        WHEN NOT MATCHED THEN
            INSERT 
            (
                 REQ_ID
                ,WF_PROC_CD
                ,SEQ
                ,FRID
                ,FRDT
                ,LMID
                ,LMDT
            )
            VALUES
            (
                 IN_REQ_ID
                ,V_WF_PROC_CD
                ,(
                 SELECT SEQ
                 FROM WF_REQ_TMPLAT_PROC_HT B
                 WHERE 1 = 1
                 AND B.REQ_TMPLAT_ID    = V_REQ_TMPLAT_ID
                 AND B.REQ_TMPLAT_VER   = V_REQ_TMPLAT_VER
                 AND WF_PROC_CD         = V_WF_PROC_CD
                 )
                ,IN_USER_ID
                ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                ,IN_USER_ID
                ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            )
        ;

    END;

    SELECT
          FN_SR_REQ_MAP_WF_PROC(IN_REQ_ID, IN_NEXT_WF_PROC_CD, NULL, 'CODE')
        , FN_SR_REQ_MAP_WF_PROC(IN_REQ_ID, IN_NEXT_WF_PROC_CD, NULL, 'NAME')
    INTO V_MAP_WF_PROC_CD, V_WF_PROC_NM
    FROM DUAL
    ;

    UPDATE SR_BASE_INFO A SET
        /* 워크플로우단계[WF_PROC_CD] - WF_PROC_1000 : 등록, WF_PROC_2000 : 접수, WF_PROC_3000 : 처리, WF_PROC_9000 : 완료, WF_PROC_9999 : 종료 */
          WF_PROC_CD        = IN_NEXT_WF_PROC_CD
        , WF_PROC_NM        = V_WF_PROC_NM                            
        , MAP_WF_PROC_CD    = V_MAP_WF_PROC_CD
        , MAP_WF_PROC_NM    =
                            (
                            SELECT CMM_CD_NM
                            FROM FOMM_CMM_CD_MT
                            WHERE 1 = 1
                            AND CODE_DIV    = 'WORKFLOW_CD'
                            AND UP_CMM_CD   = (SELECT MAP_PROC_CD FROM WF_REQ_TMPLAT_HT WHERE REQ_TMPLAT_ID = A.REQ_TMPLAT_ID AND REQ_TMPLAT_VER = A.REQ_TMPLAT_VER)
                            AND CMM_CD      = V_MAP_WF_PROC_CD
                            AND LANG_CD     = 'KR'
                            )

         /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
        , REQ_STAT_CD   = CASE
                            WHEN IN_NEXT_WF_PROC_CD = 'WF_PROC_9999'
                            THEN 'RQST99'
                            ELSE
                                CASE
                                    WHEN IN_NEXT_WF_FUNC_CD = 'WF_FUNC_01'  --결재
                                    THEN 'RQST11'
                                    WHEN IN_NEXT_WF_FUNC_CD = 'WF_FUNC_02'  --검토
                                    THEN 'RQST21'
                                    WHEN IN_NEXT_WF_FUNC_CD = 'WF_FUNC_04'  --담당자
                                    THEN 'RQST01'
                                END
                          END
        , REQ_STAT_NM   =   (
                            SELECT CMM_CD_NM
                            FROM FOMM_CMM_CD_MT
                            WHERE CODE_DIV  = 'WORKFLOW_CD'
                            AND UP_CMM_CD   = 'REQ_STAT_CD'
                            AND CMM_CD      = CASE
                                                WHEN IN_NEXT_WF_PROC_CD = 'WF_PROC_9999'
                                                THEN 'RQST99'
                                                ELSE
                                                    CASE
                                                        WHEN IN_NEXT_WF_FUNC_CD = 'WF_FUNC_01'  --결재
                                                        THEN 'RQST11'
                                                        WHEN IN_NEXT_WF_FUNC_CD = 'WF_FUNC_02'  --검토
                                                        THEN 'RQST21'
                                                        WHEN IN_NEXT_WF_FUNC_CD = 'WF_FUNC_04'  --담당자
                                                        THEN 'RQST01'
                                                    END
                                              END
                            AND LANG_CD     = 'KR'
                            )

        , LAST_RTRN_YN          = 'N'
        , RTRN_WF_PROC_CD       = NULL
        , RTRN_MAP_WF_PROC_CD   = NULL
        , RTRN_APPV_YN          = 'N'

        , LMID                  = IN_USER_ID
        , LM_USER_NM            = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
        , LM_DEPT_CD            = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
        , LM_DEPT_NM            = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
        , LMDT                  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
        , LMPID                 = IN_LMPID

    WHERE 1 = 1
    AND REQ_ID  = IN_REQ_ID
    ;

    IF IN_NEXT_WF_PROC_CD = 'WF_PROC_9999' THEN

        IF IN_WF_PROC_CD <> 'WF_PROC_9020' THEN
            V_UPD_PROC_COMP_DATE := 'Y';
        END IF;

    ELSIF IN_NEXT_WF_PROC_CD = 'WF_PROC_9020' THEN
        V_UPD_PROC_COMP_DATE := 'Y';
    END IF;

    UPDATE SR_BASE_INFO A SET
        PROC_COMP_DATE  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
    WHERE 1 = 1
    AND REQ_ID                  = IN_REQ_ID
    AND V_UPD_PROC_COMP_DATE    = 'Y'
    --AND WF_PROC_CD  = 'WF_PROC_9999'
    ;

    IF IN_NEXT_WF_FUNC_CD = 'WF_FUNC_01' THEN

        IF IN_REG_GUBUN IN ('REG', 'REV') THEN
        
            SELECT SUM(CASE WHEN USER_ID = IN_USER_ID THEN 1 ELSE 0 END)
            INTO V_CHK_CNT
            FROM WF_APPROVAL_MT
            WHERE 1 = 1
            AND REQ_ID      = IN_REQ_ID
            AND WF_PROC_CD  = IN_NEXT_WF_PROC_CD
            AND APPR_GBN_CD = 'A01'
            ;
            
            IF V_CHK_CNT = 0 THEN

                DELETE
                FROM WF_APPROVAL_MT
                WHERE 1 = 1
                AND REQ_ID      = IN_REQ_ID
                AND WF_PROC_CD  = IN_NEXT_WF_PROC_CD
                AND APPR_GBN_CD = 'A01'
                ;

                INSERT INTO WF_APPROVAL_MT
                (
                      REQ_ID            --요청번호
                    , WF_PROC_CD        --워크플로우단계코드
                    , SEQ                
                    , APPR_LVL_SEQ      --결재차수
                    , APPR_GRP_SEQ      --결재그룹번호
                    , APPR_SEQ          --승인순서
                    , APPR_GBN_CD       --결재자구분코드
                    , APPR_STAT_CD 
                    , USER_ID           --승인자ID
                    , USER_NM           --승인자
                    , DEPT_CD           --승인자부서ID
                    , DEPT_NM           --승인자부서명
                    , POS_NM            --승인자직급
                    , APV_BTN_YN
                    , RTRN_BTN_YN
                    , SAVE_BTN_YN
                    , APV_BTN_TEXT
                    , RTRN_BTN_TEXT
                    , SAVE_BTN_TEXT
                    , ROLE_CD
                    , DIRECT_YN
                    , REG_TIME          --등록일시
                    , CREATE_USER_ID
                )
                VALUES
                (
                      IN_REQ_ID
                    , IN_NEXT_WF_PROC_CD
                    , 0
                    , 0
                    , 0
                    , 0
                    , 'A01'
                    , 'APST_90'
                    , IN_USER_ID
                    , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    , (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    , 'N'
                    , 'N'
                    , 'N'
                    , '승인'
                    , '반려'
                    , '저장'
                    , NULL
                    , 'N'
                    , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
                    , IN_USER_ID
                )
                ;
            
            END IF;

        END IF;

        UPDATE WF_APPROVAL_MT A SET
            APPR_STAT_CD = 'APST_01'    /* 결재상태코드[APPR_STAT_CD] - APST_00 : 반려, APST_01 : 승인대기, APST_99 : 승인 */
        WHERE 1 = 1
        AND REQ_ID      = IN_REQ_ID
        AND APPR_GBN_CD <> 'A01'
        AND EXISTS
                (
                SELECT 1
                FROM
                    (
                    SELECT
                        X.*,
                        MAX(CASE WHEN WF_PROC_CD = IN_NEXT_WF_PROC_CD THEN SEQ END) OVER() MAX_SEQ
                    FROM
                        WF_REQ_TMPLAT_PROC_HT X
                    WHERE 1 = 1
                    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                    AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                    ) X
                WHERE 1 = 1
                AND X.SEQ >= X.MAX_SEQ
                AND X.WF_PROC_CD    = A.WF_PROC_CD
                )
        ;

        SELECT MIN(APPR_LVL_SEQ)
        INTO V_APPR_LVL_SEQ
        FROM
            WF_APPROVAL_MT A

        WHERE 1 = 1
        AND REQ_ID          = IN_REQ_ID
        AND WF_PROC_CD      = IN_NEXT_WF_PROC_CD
        AND APPR_STAT_CD    = 'APST_01'
        ;

        DBMS_OUTPUT.PUT_LINE('MIN V_APPR_LVL_SEQ=>' || V_APPR_LVL_SEQ);

        SELECT
          FN_SR_REQ_MAP_WF_PROC(IN_REQ_ID, IN_NEXT_WF_PROC_CD, V_APPR_LVL_SEQ, 'CODE')
        , FN_SR_REQ_MAP_WF_PROC(IN_REQ_ID, IN_NEXT_WF_PROC_CD, V_APPR_LVL_SEQ, 'NAME')
        INTO V_MAP_WF_PROC_CD, V_WF_PROC_NM
        FROM DUAL
        ;

        UPDATE SR_BASE_INFO A SET
              MAP_WF_PROC_CD    = V_MAP_WF_PROC_CD
            , WF_PROC_NM        = V_WF_PROC_NM
            , MAP_WF_PROC_NM    =
                                (
                                SELECT CMM_CD_NM
                                FROM FOMM_CMM_CD_MT
                                WHERE 1 = 1
                                AND CODE_DIV    = 'WORKFLOW_CD'
                                AND UP_CMM_CD   = (SELECT MAP_PROC_CD FROM WF_REQ_TMPLAT_HT WHERE REQ_TMPLAT_ID = A.REQ_TMPLAT_ID AND REQ_TMPLAT_VER = A.REQ_TMPLAT_VER)
                                AND CMM_CD      = V_MAP_WF_PROC_CD
                                AND LANG_CD     = 'KR'
                                )

            , LMID              = IN_USER_ID
            , LM_USER_NM        = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            , LM_DEPT_CD        = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            , LM_DEPT_NM        = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            , LMDT              = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMPID             = IN_LMPID

        WHERE 1 = 1
        AND REQ_ID  = IN_REQ_ID
        ;

    END IF;

    IF IN_NEXT_WF_PROC_CD = 'WF_PROC_9020' THEN  --다음 진행단계가 만족도조사인 경우(담당자에 요청자를 자동 셋팅)

        BEGIN

            DELETE
            FROM SR_CGER_DT A
            WHERE 1 = 1
            AND REQ_ID      = IN_REQ_ID
            AND WF_FUNC_CD  = 'WF_FUNC_04'  --담당자
            AND WF_PROC_CD  = 'WF_PROC_9020'    --만족도 조사
--            AND EXISTS
--                (
--                SELECT 1
--                FROM
--                    (
--                    SELECT
--                        X.*,
--                        MAX(CASE WHEN WF_PROC_CD = IN_NEXT_WF_PROC_CD THEN SEQ END) OVER() MAX_SEQ
--                    FROM
--                        WF_REQ_TMPLAT_PROC_HT X
--                    WHERE 1 = 1
--                    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
--                    AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
--                    ) X
--                WHERE 1 = 1
--                AND X.SEQ >= X.MAX_SEQ
--                AND X.WF_PROC_CD    = A.WF_PROC_CD
--                )
            ;

            INSERT INTO SR_CGER_DT
            (
                  REQ_ID
                , WF_PROC_CD
                , SEQ
                , WF_FUNC_CD
                , WF_FUNC_NM
                , ESS_YN
                , USER_ID
                , RMK
                , FRID
                , FRDT
                , LMID
                , LMDT
                , LMPID
            )
            SELECT
                  REQ_ID
                , 'WF_PROC_9020'
                , 1
                , 'WF_FUNC_04'
                , '요청자'
                , '1'
                , REQ_USER_ID
                , NULL
                , IN_USER_ID
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , IN_USER_ID
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , IN_LMPID
            FROM
                SR_BASE_INFO
            WHERE 1 = 1
            AND REQ_ID  = IN_REQ_ID
            ;

        EXCEPTION
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('SQLERRM : ' || SQLERRM);
                RETURN;
        END;

    END IF;

    --다음 단계 데이터를 생성
    BEGIN

        FOR CUR IN
        (
            SELECT *
            FROM
                (
                SELECT
                    A.*,
                    MAX(CASE WHEN WF_PROC_CD = IN_NEXT_WF_PROC_CD THEN SEQ END) OVER() NEXT_MAX_SEQ,
                    (SELECT MAX(SEQ) FROM SR_WF_PROC WHERE REQ_ID = IN_REQ_ID) LAST_MAX_SEQ
                FROM
                    WF_REQ_TMPLAT_PROC_HT A
                WHERE 1 = 1
                AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                )
            WHERE SEQ > LAST_MAX_SEQ AND SEQ <= NEXT_MAX_SEQ

            ORDER BY
                SEQ
        )
        LOOP

            IF IN_NEXT_WF_PROC_CD = CUR.WF_PROC_CD THEN

                MERGE
                INTO    SR_WF_PROC A
                USING   DUAL
                ON      (A.REQ_ID = IN_REQ_ID AND A.WF_PROC_CD = IN_NEXT_WF_PROC_CD)

                WHEN MATCHED THEN
                    UPDATE
                    SET
                         SEQ                = 
                                                (
                                                SELECT SEQ
                                                FROM WF_REQ_TMPLAT_PROC_HT B
                                                WHERE 1 = 1
                                                AND B.REQ_TMPLAT_ID    = V_REQ_TMPLAT_ID
                                                AND B.REQ_TMPLAT_VER   = V_REQ_TMPLAT_VER
                                                AND WF_PROC_CD         = IN_NEXT_WF_PROC_CD
                                                )
                        ,LMID               = IN_USER_ID
                        ,LMDT               = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')

                WHEN NOT MATCHED THEN
                    INSERT 
                    (
                         REQ_ID
                        ,WF_PROC_CD
                        ,SEQ
                        ,FRID
                        ,FRDT
                        ,LMID
                        ,LMDT
                    )
                    VALUES
                    (
                         IN_REQ_ID
                        ,IN_NEXT_WF_PROC_CD
                        ,(
                         SELECT SEQ
                         FROM WF_REQ_TMPLAT_PROC_HT B
                         WHERE 1 = 1
                         AND B.REQ_TMPLAT_ID    = V_REQ_TMPLAT_ID
                         AND B.REQ_TMPLAT_VER   = V_REQ_TMPLAT_VER
                         AND WF_PROC_CD         = IN_NEXT_WF_PROC_CD
                         )
                        ,IN_USER_ID
                        ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                        ,IN_USER_ID
                        ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                    )
                ;

            ELSE

                MERGE
                INTO    SR_WF_PROC A
                USING   DUAL
                ON      (A.REQ_ID = IN_REQ_ID AND A.WF_PROC_CD = CUR.WF_PROC_CD)

                WHEN MATCHED THEN
                    UPDATE
                    SET
                         WF_PROC_SKIP_YN    = 'Y'
                        ,SEQ                = CUR.SEQ
                        ,LMID               = IN_USER_ID
                        ,LMDT               = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')

                WHEN NOT MATCHED THEN
                    INSERT 
                    (
                         REQ_ID
                        ,WF_PROC_CD
                        ,SEQ
                        ,WF_PROC_SKIP_YN
                        ,FRID
                        ,FRDT
                        ,LMID
                        ,LMDT
                    )
                    VALUES
                    (
                         IN_REQ_ID
                        ,CUR.WF_PROC_CD
                        ,CUR.SEQ
                        ,'Y'
                        ,IN_USER_ID
                        ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                        ,IN_USER_ID
                        ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                    )
                ;

            END IF;

        END LOOP;

    END;

    OUT_RTN_CD := 0;
    OUT_RTN_MSG := '정상 처리 되었습니다.';
    --DBMS_OUTPUT.PUT_LINE('에러코드 =>' || OUT_RTN_CD);
    --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
    RETURN;

EXCEPTION

    WHEN EX_REV_COMPLETE THEN
        OUT_RTN_CD  := -9995;
        OUT_RTN_MSG := '이미 접수 처리가 완료된 내역입니다.';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_NEXT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG
        );
        COMMIT;
        RETURN;

    WHEN OTHERS THEN
        OUT_RTN_CD := SQLCODE;
        OUT_RTN_MSG := '요청서 다음 진행 단계 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_NEXT',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG
        );
        COMMIT;
        OUT_RTN_CD := -9999;
        RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_RETURN
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_SR_REQ_WF_PROC_RETURN" 
(
    pi_req_id           IN VARCHAR2,    -- 요청서ID
    pi_wf_proc_cd       IN VARCHAR2,    -- 현재단계
    pi_seq              IN NUMBER,      -- 순번
    pi_user_id          IN VARCHAR2,    -- 현재 로그인 사용자(로그인 사번)
    pi_org_user_id      IN VARCHAR2,    -- 원 로그인 사용자(로그인 사번)
    pi_appr_desc        IN VARCHAR2,    -- 결재의견
    pi_lmpid            IN VARCHAR2,    -- 수정프로그램ID

    po_rtn_cd       OUT NUMBER,     -- 리턴코드
    po_rtn_msg      OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : PR_SR_REQ_WF_PROC_RETURN
    설명      :  1) 해당 결재건의 승인자를 반려 처리한다
                2) 결재 history를 생성한다
                3) PR_SR_REQ_WF_PROC_BACK 프로시저를 호출한다.(반려단계로 이동처리)
    작성자     작성일자          작성내용
    이정빈     2023.07.12      최초 작성
======================================================================================*/
v_poss_yn           VARCHAR2(1) := 'N'; --결재 가능 여부

v_req_tmplat_id     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
v_req_tmplat_ver    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
v_req_stat_cd       SR_BASE_INFO.REQ_STAT_CD%TYPE;      -- RQST11:결재중, RQST21:검토중   // 상태 check && 결재/검토 구분용

v_user_nm           WF_PROC_HIST.SRM_USER_NM%TYPE;
v_appr_gbn_cd       WF_PROC_HIST.APPR_GBN_CD%TYPE;
v_dept_cd           FOMM_USER_MT.DEPT_CD%TYPE;
v_dept_nm           WF_PROC_HIST.SRM_DEPT_NM%TYPE;
v_pos_cd            FOMM_USER_MT.POS_CD%TYPE;
v_pos_nm            WF_PROC_HIST.SRM_JBC_JNAME%TYPE;
v_telnum            WF_PROC_HIST.SRM_TELNUM%TYPE;

v_appr_user_id      WF_APPROVAL_MT.USER_ID%TYPE;

v_appr_lvl_seq      WF_APPROVAL_MT.APPR_LVL_SEQ%TYPE;

v_daejic_yn         WF_PROC_HIST.DAEJIC_YN%TYPE := 'N';

v_daejic_user_id    WF_APPROVAL_MT.DAEJIC_USER_ID%TYPE;
v_daejic_user_nm    WF_APPROVAL_MT.DAEJIC_USER_NM%TYPE;
v_daejic_dept_cd    WF_APPROVAL_MT.DAEJIC_DEPT_CD%TYPE;
v_daejic_dept_nm    WF_APPROVAL_MT.DAEJIC_DEPT_NM%TYPE;
v_daejic_jbc_jname  WF_APPROVAL_MT.DAEJIC_POS_NM%TYPE;
v_daejic_telnum     WF_PROC_HIST.ORG_TELNUM%TYPE;

v_appr_nm           VARCHAR2(100);

EX_NO_APPR_USER     EXCEPTION;

v_rtn_cd            NUMBER(10, 0);      -- PR_SR_REQ_WF_PROC_APPROVE() return code
v_rtn_msg           VARCHAR2(4000);     -- PR_SR_REQ_WF_PROC_APPROVE() return message

BEGIN

    DBMS_OUTPUT.PUT_LINE('pi_req_id : ' || pi_req_id || ' pi_wf_proc_cd : ' || pi_wf_proc_cd || ' pi_appr_desc : ' || pi_appr_desc || ' pi_user_id : ' || pi_user_id);

    IF pi_user_id <> pi_org_user_id THEN
        v_daejic_yn := 'Y';
    END IF;

    SELECT  USER_NM,    POS_CD,     POS_NM,     DEPT_CD,    DEPT_NM,    TELNUM,     'R01' AS APPR_GBN_CD
    INTO    v_user_nm,  v_pos_cd,   v_pos_nm,   v_dept_cd,  v_dept_nm,  v_telnum,   v_appr_gbn_cd
    FROM
        FOMM_USER_MT
    WHERE 1 = 1
    AND USER_ID = pi_user_id
    ;

    IF v_daejic_yn = 'Y' THEN

        --대직자 정보
        SELECT  USER_ID,            USER_NM,            DEPT_CD,            DEPT_NM,            POS_NM,             TELNUM
        INTO    v_daejic_user_id,   v_daejic_user_nm,   v_daejic_dept_cd,   v_daejic_dept_nm,   v_daejic_jbc_jname, v_daejic_telnum
        FROM    FOMM_USER_MT
        WHERE   USER_ID = pi_org_user_id
        ;

    END IF;

    /* 최초 PARAM에 의한 미승인 결재자가 있는 지 확인 */
    BEGIN

        SELECT    REQ_TMPLAT_ID,    REQ_TMPLAT_VER,     REQ_STAT_CD
        INTO      v_req_tmplat_id,  v_req_tmplat_ver,   v_req_stat_cd
        FROM
            SR_BASE_INFO
        WHERE 1 = 1
        AND REQ_ID      = pi_req_id
        ;

        IF v_req_stat_cd = 'RQST11' THEN     -- 결재중

            SELECT
                NVL(MAX(CASE WHEN A.USER_ID = pi_user_id AND A.APPR_STAT_CD  = 'APST_01' THEN 'Y' ELSE 'N' END), 'N') AS POSS_YN
            INTO v_poss_yn
            FROM WF_APPROVAL_MT A
            WHERE 1 = 1
            AND A.REQ_ID        = pi_req_id
            AND A.WF_PROC_CD    = pi_wf_proc_cd
            AND A.SEQ           = pi_seq
            ;

            IF v_poss_yn = 'N' THEN

                RAISE EX_NO_APPR_USER;

            END IF;

        END IF;

    END;

    /* 결재승인 && 이력 처리 */
    BEGIN

        SELECT
            APPR_LVL_SEQ
        INTO v_appr_lvl_seq
        FROM WF_APPROVAL_MT
        WHERE 1 = 1
        AND REQ_ID          = pi_req_id
        AND WF_PROC_CD      = pi_wf_proc_cd
        AND SEQ             = pi_seq
        ;

        BEGIN

            SELECT
                REPLACE(APPR_NM, '\n', ' ')
            INTO v_appr_nm
            FROM
                WF_REQ_APPV_HT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = v_req_tmplat_id
            AND REQ_TMPLAT_VER  = v_req_tmplat_ver
            AND WF_PROC_CD      = pi_wf_proc_cd
            AND APPR_LVL_SEQ    = v_appr_lvl_seq
            ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
            v_appr_nm := '';
        END;

        IF NVL(v_appr_nm, ' ') = ' ' THEN

            SELECT
                REPLACE(FUNC_NM, '\n', ' ')

            INTO v_appr_nm
            FROM
                WF_REQ_TMPLAT_PROC_HT

            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = v_req_tmplat_id
            AND REQ_TMPLAT_VER  = v_req_tmplat_ver
            AND WF_PROC_CD      = pi_wf_proc_cd
            AND FUNC            = 'WF_FUNC_01'
            ;

        END IF;

        /* 결재 HISTORY 생성 */
        INSERT INTO WF_PROC_HIST
        (
              PROC_NUMBER   --프로세스번호
            , WF_HIST_SEQ   --히스토리키값
            , WF_PROC_CD    --워크플로우단계코드
            , APPR_LVL_SEQ  --결재차수 (결재이력만 사용)
            , APPR_GRP_SEQ  --결재그룹 (결재이력만 사용)

            , APPR_STAT_CD  --승인상태
            , APPR_COMMENT  --승인/반려의견
            , APPR_GBN_CD   --결재자구분코드

            , SRM_USER_ID   --처리이력변경 사용자ID
            , SRM_USER_NM   --처리이력변경 사용자
            , SRM_DEPT_CD   --처리이력변경 사용자 팀명
            , SRM_DEPT_NM   --처리이력변경 사용자 팀명
            , SRM_JBC_JNAME --처리이력변경 사용자 직명
            , SRM_TELNUM    --처리이력변경 내선번호

            , ORG_USER_ID   --원처리자ID(대무처리시)
            , ORG_USER_NM   --원처리자명(대무처리시)
            , ORG_DEPT_CD   --원처리자부서명(대무처리시)
            , ORG_DEPT_NM   --원처리자부서명(대무처리시)
            , ORG_JBC_JNAME --원처리자직명(대무처리시)
            , ORG_TELNUM    --원처리자내선번호(대무처리시)

            , DAEJIC_YN     --대직처리여부

            , APPR_NM
            , REG_STIME     --등록일시
        )
        VALUES
        (
              pi_req_id
            , (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = pi_req_id)
            , pi_wf_proc_cd
            , (SELECT APPR_LVL_SEQ FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd AND SEQ = pi_seq)
            , (SELECT APPR_GRP_SEQ  FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd AND SEQ = pi_seq)

            , 'APST_00' -- 결재상태 반려
            , pi_appr_desc
            --, v_appr_gbn_cd            
            , (SELECT A.APPR_GBN_CD FROM WF_APPROVAL_MT A WHERE 1 = 1 AND A.APPR_STAT_CD = 'APST_01' AND A.REQ_ID = pi_req_id AND A.WF_PROC_CD = pi_wf_proc_cd AND A.SEQ = pi_seq)

            , pi_user_id
            , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)

            , CASE WHEN v_daejic_user_id = pi_user_id THEN NULL ELSE v_daejic_user_id END
            , v_daejic_user_nm
            , v_daejic_dept_cd
            , v_daejic_dept_nm
            , v_daejic_jbc_jname
            , v_daejic_telnum

            , v_daejic_yn

            , v_appr_nm
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
        )
        ;

    EXCEPTION
        WHEN OTHERS THEN
            dbms_output.put_line('po_rtn_cd : ' || po_rtn_cd || ' Message:' || SQLERRM);
            po_rtn_cd  := -3;
            po_rtn_msg := '반려처리중 오류 발생' || '[' || v_user_nm || ']' || SQLERRM;
            ROLLBACK;
            RETURN;
    END;

    BEGIN

        PR_SR_REQ_WF_PROC_BACK(pi_req_id, pi_wf_proc_cd, pi_seq, pi_user_id, pi_org_user_id, 'RTRN', pi_appr_desc, pi_lmpid, v_rtn_cd, v_rtn_msg);
        DBMS_OUTPUT.PUT_LINE('PR_SR_REQ_WF_PROC_BACK :: ' || v_rtn_cd || ' :: ' || v_rtn_msg);

        IF v_rtn_cd != 0 THEN
            po_rtn_cd  := -1;
            po_rtn_msg := v_rtn_msg;
            DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
            ROLLBACK;
            RETURN;
        END IF;
    END;

    /* end procedure */
    po_rtn_cd   := 0;
    po_rtn_msg  := '정상 처리 되었습니다.';
    DBMS_OUTPUT.PUT_LINE('END OF RETURN :: ' || po_rtn_msg);
    RETURN;

EXCEPTION
    WHEN EX_NO_APPR_USER THEN
        po_rtn_cd   := -9998;
        po_rtn_msg  := '현재 결재 처리자는 [결재자 또는 대무자]에 해당하지 않아 반려 처리가 불가능 합니다.';
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_RETURN',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        RETURN;
       
    WHEN OTHERS THEN
        po_rtn_cd := SQLCODE;
        po_rtn_msg := '요청서 결재 반려 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REQ_WF_PROC_RETURN',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), po_rtn_cd, po_rtn_msg
        );
        COMMIT;
        po_rtn_cd := -9999;
        RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REV_PROC
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_SR_REV_PROC" 
(
    IN_REG_GUBUN        IN VARCHAR2,    -- REV : 접수(완료)
    IN_REQ_ID           IN VARCHAR2,    -- 요청서ID
    IN_WF_PROC_CD       IN VARCHAR2,    -- 진행단계
    IN_USER_ID          IN VARCHAR2,    -- 접수자ID
    IN_ORG_USER_ID      IN VARCHAR2,    -- 접수자ID
    IN_GUBUN_NM         IN VARCHAR2,    -- 처리자구분
    IN_PROC_EXAM_OPIN   IN VARCHAR2,    -- 처리의견
    IN_CEGR_ID          IN VARCHAR2,    -- 담당자ID
    IN_PROC_DATE        IN VARCHAR2,    --처리일시
    IN_PROC_SDTIME      IN VARCHAR2,    --처리시작일시
    IN_PROC_EDTIME      IN VARCHAR2,    --처리종료일시
    IN_RMK              IN VARCHAR2,    --비고
    IN_LOGIN_ID         IN VARCHAR2,    --현재 로그인자 ID
    IN_LMPID            IN VARCHAR2,    --수정프로그램ID

    OUT_RTN_CD          OUT NUMBER,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : PR_SR_REV_PROC
    설명      : 접수 또는 처리자가 담당자 지정을 처리한다.
    작성자     작성일자         작성내용
    정보윤     2023.07.12      최초 작성
======================================================================================*/
V_OTHER_EXIST_YN    VARCHAR2(1);

EX_EXIST_OTHER_USER EXCEPTION;

V_REQ_TMPLAT_ID     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
V_REQ_TMPLAT_VER    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
V_WF_PROC_CD        SR_BASE_INFO.WF_PROC_CD%TYPE;
V_REQ_STAT_CD       SR_BASE_INFO.REQ_STAT_CD%TYPE;
V_GUBUN_NM          WF_REQ_TMPLAT_PROC_HT.CGER_NM%TYPE;
V_WF_PROC_NM        WF_REQ_TMPLAT_PROC_HT.WF_PROC_NM%TYPE;

v_temp_appr_stat_cd VARCHAR2(100);
v_temp_appr_gbn_cd  VARCHAR2(100);

v_org_user_id    WF_APPROVAL_MT.DAEJIC_USER_ID%TYPE;
v_org_user_nm    WF_APPROVAL_MT.DAEJIC_USER_NM%TYPE;
v_org_dept_cd    WF_APPROVAL_MT.DAEJIC_DEPT_CD%TYPE;
v_org_dept_nm    WF_APPROVAL_MT.DAEJIC_DEPT_NM%TYPE;
v_org_telnum     FOMM_USER_MT.TELNUM%TYPE;
v_org_jbc_jname  WF_APPROVAL_MT.DAEJIC_POS_NM%TYPE;

v_daejic_yn         WF_PROC_HIST.DAEJIC_YN%TYPE := 'N';
v_user_cnt          NUMBER;

BEGIN

    V_GUBUN_NM := IN_GUBUN_NM;

    IF IN_USER_ID <> IN_ORG_USER_ID THEN
        v_daejic_yn := 'Y';
    END IF;

    DBMS_OUTPUT.PUT_LINE('시작');

    BEGIN
        --처리시 필요한 컬럼 정보를 기본 정보 TBL에서 얻는다.
        SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD, REQ_STAT_CD
        INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_WF_PROC_CD, V_REQ_STAT_CD
        FROM SR_BASE_INFO
        WHERE 1 = 1
        AND REQ_ID  = IN_REQ_ID
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            OUT_RTN_CD := -1;
            OUT_RTN_MSG := '기본 정보 조회시 오류 발생 NO_DATA';
            RETURN;
        WHEN OTHERS THEN
            OUT_RTN_CD := -2;
            OUT_RTN_MSG := '기본 정보 조회시 오류 발생' || '('|| SQLERRM || ')';
            RETURN;
    END;

    /*
    BEGIN

        --진행단계에 현재 사용자가 아닌 다른 접수자 내역이 존재하는지 체크
        SELECT
             NVL(MAX(CASE WHEN USER_ID <> IN_USER_ID THEN 'Y' END), 'N')
        INTO V_OTHER_EXIST_YN
        FROM SR_REV_PROC
        WHERE 1 = 1
        AND REQ_ID      = IN_REQ_ID
        AND WF_PROC_CD  = IN_WF_PROC_CD
        ;        

    EXCEPTION        
        WHEN OTHERS THEN
            OUT_RTN_CD := -2;
            OUT_RTN_MSG := '처리자 체크시 오류가 발생하였습니다.';
            RETURN;
    END;
    */

    IF V_OTHER_EXIST_YN = 'Y' THEN
        DBMS_OUTPUT.PUT_LINE('V_OTHER_EXIST_YN=Y');
        RAISE EX_EXIST_OTHER_USER;

    ELSE

        --현재 로그인과 원본 로그인이 다른 경우 원 로그인 자 정보를 대무자로 셋팅
        IF v_daejic_yn = 'Y' THEN

            --대직자 정보
            SELECT  USER_ID,            USER_NM,      DEPT_CD,         DEPT_NM,         POS_NM,          TELNUM
            INTO    v_org_user_id,   v_org_user_nm,   v_org_dept_cd,   v_org_dept_nm,   v_org_jbc_jname, v_org_telnum
            FROM    FOMM_USER_MT
            WHERE   USER_ID = IN_ORG_USER_ID
            ;

        END IF;

        SELECT
            CASE
                WHEN V_GUBUN_NM IS NULL OR NVL(V_GUBUN_NM, ' ') = ' '
                THEN CGER_NM
                ELSE V_GUBUN_NM
            END,
            REPLACE(WF_PROC_NM, '\n', ' ')
        INTO V_GUBUN_NM, V_WF_PROC_NM
        FROM WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = IN_WF_PROC_CD
        ;

        SELECT COUNT(*)
        INTO v_user_cnt
        FROM SR_REV_PROC
        WHERE 1 = 1
        AND REQ_ID      = IN_REQ_ID
        AND WF_PROC_CD  = IN_WF_PROC_CD
        --AND USER_ID     = IN_USER_ID
        ;

        DBMS_OUTPUT.PUT_LINE('v_user_cnt ' || v_user_cnt);

        IF v_user_cnt > 0 THEN

            DELETE
            FROM SR_REV_PROC
            WHERE 1 = 1
            AND REQ_ID      = IN_REQ_ID
            AND WF_PROC_CD  = IN_WF_PROC_CD
            --AND USER_ID     = IN_USER_ID
            ;

        END IF;

        INSERT INTO SR_REV_PROC
        (
             REQ_ID
            ,WF_PROC_CD

            ,USER_ID
            ,USER_NM
            ,DEPT_CD
            ,DEPT_NM
            ,POS_NM
            ,TELNUM

            ,GUBUN_NM
            ,CEGR_ID
            ,PROC_EXAM_OPIN
            ,PROC_DATE
            ,PROC_SDTIME
            ,PROC_EDTIME

            ,ORG_USER_ID   --원처리자ID(대무처리시)
            ,ORG_USER_NM   --원처리자명(대무처리시)
            ,ORG_DEPT_NM   --원처리자부서명(대무처리시)
            ,ORG_JBC_JNAME --원처리자직명(대무처리시)
            ,ORG_TELNUM    --원처리자내선번호(대무처리시)

            ,DAEJIC_YN      --대직처리여부

            ,RMK
            ,FRID
            ,FRDT
            ,LMID
            ,LMDT
            ,LMPID
        )
        VALUES
        (
             IN_REQ_ID
            ,IN_WF_PROC_CD

            ,IN_USER_ID
            ,(SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            ,(SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            ,(SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            ,(SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            ,(SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)

            ,V_GUBUN_NM
            ,IN_CEGR_ID
            ,IN_PROC_EXAM_OPIN
            ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')   --CASE WHEN IN_REG_GUBUN = 'TEMP' THEN NULL ELSE TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') END
            ,IN_PROC_SDTIME
            ,IN_PROC_EDTIME

            --원 접속자 정보
            ,v_org_user_id
            ,v_org_user_nm
            ,v_org_dept_nm
            ,v_org_jbc_jname
            ,v_org_telnum
            ,v_daejic_yn

            ,IN_RMK
            ,IN_LOGIN_ID
            ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            ,IN_LOGIN_ID
            ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            ,IN_LMPID
        )
        ;

        IF IN_REG_GUBUN = 'REG' OR IN_REG_GUBUN = 'REV' THEN
            v_temp_appr_stat_cd := 'APST_90';   -- APST_90 : 등록, APST_99 : 승인, APST_01 : 승인대기, APST_00 : 반려
            v_temp_appr_gbn_cd  := 'A00';       -- A00 : 등록자, A01 : 기안자, A02 : 승인자, R01 : 검토자

            INSERT INTO WF_PROC_HIST
            (
                  PROC_NUMBER   --프로세스번호
                , WF_HIST_SEQ   --히스토리키값
                , WF_PROC_CD    --워크플로우단계코드
                , APPR_STAT_CD  --승인상태
                , APPR_COMMENT  --승인/반려의견
                , APPR_GBN_CD   --결재자구분코드

                , SRM_USER_ID   --처리이력변경 사용자ID
                , SRM_USER_NM   --처리이력변경 사용자
                , SRM_DEPT_CD   --처리이력변경 사용자 팀명
                , SRM_DEPT_NM   --처리이력변경 사용자 팀명
                , SRM_JBC_JNAME --처리이력변경 사용자 직명
                , SRM_TELNUM    --처리이력변경 사용자 내선번호

                , ORG_USER_ID   --원처리자ID(대무처리시)
                , ORG_USER_NM   --원처리자명(대무처리시)
                , ORG_DEPT_CD   --원처리자부서명(대무처리시)
                , ORG_DEPT_NM   --원처리자부서명(대무처리시)
                , ORG_JBC_JNAME --원처리자직명(대무처리시)
                , ORG_TELNUM    --원처리자내선번호(대무처리시)

                , DAEJIC_YN     --대직처리여부

                , APPR_NM

                , REG_STIME --등록일시
            )
            VALUES
            (
                  IN_REQ_ID
                , (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = IN_REQ_ID)
                , IN_WF_PROC_CD
                , v_temp_appr_stat_cd
                , IN_PROC_EXAM_OPIN
                , v_temp_appr_gbn_cd
                , IN_USER_ID
                , CASE
                    WHEN IN_USER_ID = 'RIMS'
                    THEN 'RIMS'
                    ELSE (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                  END
                , (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                , (SELECT TELNUM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)

                , v_org_user_id
                , v_org_user_nm
                , v_org_dept_cd
                , v_org_dept_nm
                , v_org_jbc_jname
                , v_org_telnum

                , v_daejic_yn

                , V_WF_PROC_NM

                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            );

            --PR_SR_REQ_WF_PROC_NEXT(IN_REQ_ID, IN_USER_ID, IN_NEXT_WF_PROC_CD, IN_LMPID, NULL, NULL);

        END IF;

        IF IN_REG_GUBUN = 'REG' OR IN_REG_GUBUN = 'REV' THEN

            IF V_WF_PROC_CD = 'WF_PROC_1000' THEN

                --기본정보에 상태값 저장
                UPDATE SR_BASE_INFO SET
                     REQ_STAT_CD    = CASE WHEN IN_REG_GUBUN = 'TEMP' THEN 'RQST00' WHEN IN_REG_GUBUN = 'REV' THEN 'RQST99' END
                    ,REQ_STAT_NM    = (
                                      SELECT
                                        CMM_CD_NM
                                      FROM
                                        FOMM_CMM_CD_MT
                                      WHERE 1 = 1
                                      AND CODE_DIV  = 'WORKFLOW_CD'
                                      AND UP_CMM_CD = 'REQ_STAT_CD'
                                      AND CMM_CD    = CASE WHEN IN_REG_GUBUN = 'TEMP' THEN 'RQST00' WHEN IN_REG_GUBUN = 'REV' THEN 'RQST99' END
                                      AND LANG_CD = 'KR'
                                      ) --요청서진행상태명
                    ,LMID           = IN_USER_ID
                    ,LM_USER_NM     = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    ,LM_DEPT_CD     = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    ,LM_DEPT_NM     = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    ,LMDT           = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                    ,LMPID          = IN_LMPID
                WHERE 1 = 1
                AND REQ_ID  = IN_REQ_ID
                ;

            ELSE

                IF IN_REG_GUBUN = 'REV' THEN

                    UPDATE SR_BASE_INFO SET
                         REQ_STAT_CD    = 'RQST99'
                        ,REQ_STAT_NM    = (SELECT CMM_CD_NM FROM FOMM_CMM_CD_MT WHERE CODE_DIV = 'WORKFLOW_CD' AND UP_CMM_CD = 'REQ_STAT_CD' AND CMM_CD = 'RQST99' AND LANG_CD = 'KR')    --요청서진행상태명
                        ,LMID           = IN_USER_ID
                        ,LM_USER_NM     = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                        ,LM_DEPT_CD     = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                        ,LM_DEPT_NM     = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                        ,LMDT           = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                        ,LMPID          = IN_LMPID
                    WHERE 1 = 1
                    AND REQ_ID  = IN_REQ_ID
                    ;

                END IF;

            END IF;

        END IF;

        IF IN_WF_PROC_CD != 'WF_PROC_1000' THEN

            UPDATE SR_BASE_INFO SET
                 CANCEL_POSS_YN = 'N'   --요청서 취소 가능여부(취소불가로 셋팅)
            WHERE 1 = 1
            AND CANCEL_POSS_YN  = 'Y'
            AND REQ_ID          = IN_REQ_ID
            ;

        END IF;

    END IF;

    OUT_RTN_CD := 0;
    OUT_RTN_MSG := '정상 처리 되었습니다.';
    DBMS_OUTPUT.PUT_LINE('에러코드 =>' || OUT_RTN_CD);
    DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);    
    RETURN;

EXCEPTION
    WHEN EX_EXIST_OTHER_USER THEN
        ROLLBACK;
        OUT_RTN_CD  := -9998;
        OUT_RTN_MSG := '이미 처리자가 존재하여 등록이 불가능합니다.';

        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REV_PROC',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG
        );
        COMMIT;
        RETURN;

    WHEN OTHERS THEN
        ROLLBACK;
        OUT_RTN_CD := SQLCODE;
        OUT_RTN_MSG := '요청서 진행 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        INSERT INTO TBT_PROC_DB_ERROR_LOG
        (
            CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE
        )
        VALUES
        (
            'PR_SR_REV_PROC',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_RTN_CD, OUT_RTN_MSG
        );
        COMMIT;
        OUT_RTN_CD := -9999;
        RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SRM_SATISFY
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_SRM_SATISFY" 
IS
    OUT_CODE       NUMBER(5);    
    OUT_MSG        VARCHAR2(255);    

    CURSOR CUR_A1 IS                                                    -- 만족도조사상태에서 7 일동안 미처리된 건들을 일괄로 종료처리한다...    
    SELECT REQ_ID    
    FROM
        (   
        SELECT A.REQ_ID
        FROM
            SR_BASE_INFO A,
            WF_SRM B
        WHERE  1 = 1
        AND A.REQ_ID  = B.REQ_ID
        AND A.WF_PROC_CD    = 'WF_PROC_9020'
        AND B.CLOSE_DATE IS NULL
        AND SYSDATE - TO_DATE(B.PROC_COMP_DATE, 'YYYYMMDDHH24MISS') > 7

--        UNION ALL   
--
--        SELECT A.REQ_ID
--        FROM
--            SR_BASE_INFO A,
--            WF_CHM B
--        WHERE 1 = 1
--        AND A.REQ_ID  = B.REQ_ID
--        AND A.WF_PROC_CD    = 'WF_PROC_9020'
--        AND B.CLOSE_ETIME IS NULL
--        AND SYSDATE - TO_DATE(B.SR_PROC_COMP_DATE, 'YYYYMMDDHH24MISS') > 7
        ) B
    ;    

BEGIN    

    FOR CUR_A1_REC IN CUR_A1 LOOP    

        --DBMS_OUTPUT.PUT_LINE('REQ_ID -> '|| CUR_A1_REC.REQ_ID );    

        BEGIN    

            DBMS_OUTPUT.PUT_LINE('REQ_ID -> '|| CUR_A1_REC.REQ_ID ||' UPDATE START');    

            --만족도 조사 단계 SKIP 데이터 INSERT
            INSERT INTO SR_WF_PROC
            (
                  REQ_ID
                , WF_PROC_CD
                , SEQ
                , WF_PROC_SKIP_YN
                , FRID
                , FRDT
                , LMID
                , LMDT
            )
            SELECT
                  A.REQ_ID
                , A.WF_PROC_CD
                , B.SEQ
                , 'Y'   AS WF_PROC_SKIP_YN
                , 'ITSMBATCH'
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , 'ITSMBATCH'
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            FROM
                SR_BASE_INFO A,
                WF_REQ_TMPLAT_PROC_HT B

            WHERE 1 = 1
            AND A.REQ_TMPLAT_ID   = B.REQ_TMPLAT_ID
            AND A.REQ_TMPLAT_VER  = B.REQ_TMPLAT_VER
            AND A.WF_PROC_CD      = B.WF_PROC_CD
            AND A.REQ_ID          = CUR_A1_REC.REQ_ID
            ;

            UPDATE SR_BASE_INFO A SET
                WF_PROC_CD      = 'WF_PROC_9999',
                WF_PROC_NM      = (SELECT WF_PROC_NM FROM WF_REQ_TMPLAT_PROC_HT WHERE REQ_TMPLAT_ID = A.REQ_TMPLAT_ID AND REQ_TMPLAT_VER = A.REQ_TMPLAT_VER AND WF_PROC_CD = 'WF_PROC_9999'),
                MAP_WF_PROC_CD  = '9999',
                MAP_WF_PROC_NM  = '종료',
                REQ_STAT_CD     = 'RQST99',
                REQ_STAT_NM     = (SELECT CMM_CD_NM FROM FOMM_CMM_CD_MT WHERE CODE_DIV = 'WORKFLOW_CD' AND UP_CMM_CD = 'REQ_STAT_CD' AND CMM_CD = 'RQST99')
            WHERE REQ_ID  = CUR_A1_REC.REQ_ID
            ;

            IF SUBSTR(CUR_A1_REC.REQ_ID, 1, 3) = 'SRM'  THEN

                UPDATE WF_SRM SET
                        CLOSE_DATE   = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'), 
                        PROC_COMP_DATE  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'),  
                        LMOD_USER_ID = 'ITSMBATCH',    
                        LMOD_USER_NM = 'ITSMBATCH',    
                        SYSMODTIME   = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                WHERE REQ_ID = CUR_A1_REC.REQ_ID
                ;

            END IF;

--            IF SUBSTR(CUR_A1_REC.REQ_ID, 1, 3) = 'CHM'  THEN
--
--                UPDATE WF_CHM SET
--                    CLOSE_ETIME   = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'),    
--                    LMOD_USER_ID = 'ITSMBATCH',    
--                    LMOD_USER_NM = 'ITSMBATCH',    
--                    SYSMODTIME   = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    
--                WHERE REQ_ID = CUR_A1_REC.REQ_ID
--                ;
--
--            END IF;

            --연관 요청서
--            UPDATE WF_SRM SET
--                CLOSE_DATE   = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'), 
--                PROC_COMP_DATE  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'),  
--                LMOD_USER_ID = 'ITSMBATCH',    
--                LMOD_USER_NM = 'ITSMBATCH',    
--                SYSMODTIME   = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    
--            WHERE REQ_ID =
--                        (
--                        SELECT REQ_ID
--                        FROM WF_PROC_RELATION
--                        WHERE REL_REQ_ID = CUR_A1_REC.REQ_ID 
--                        )
--              AND 0 =
--                        (         
--                        SELECT
--                            NVL(SUM(CASE WHEN B.ING_PHASE = 'CHM0008' THEN 0 ELSE 1 END),0) VCOUNT   
--                        FROM
--                            WF_PROC_RELATION A,
--                            WF_CHM B,
--                            SR_BASE_INFO C
--                        WHERE 1 = 1
--                        AND B.REQ_ID        = C.REQ_ID
--                        AND A.REL_REQ_ID(+) = B.REQ_ID
--                        AND A.REQ_ID IN (SELECT REQ_ID       
--                                                    FROM WF_PROC_RELATION    
--                                                   WHERE REL_REQ_ID = CUR_A1_REC.REQ_ID    
--                                                 )   
--                           GROUP BY  DECODE(A.REQ_ID ,NULL, B.REQ_ID, A.REQ_ID),   
--                           SUBSTR(DECODE(A.REQ_ID ,NULL, B.REQ_ID,A.REQ_ID) , 1, 3)    
--                        )
--              ;
--
--            DBMS_OUTPUT.PUT_LINE('REQ_ID -> '|| CUR_A1_REC.REQ_ID ||' UPDATE SQLCODE -> '||TO_CHAR(SQLCODE) );    
            --DBMS_OUTPUT.PUT_LINE('REQ_ID -> '|| CUR_A1_REC.REQ_ID ||' UPDATE SQLERRM -> '||SQLERRM);    

        EXCEPTION    
            WHEN OTHERS THEN NULL;    
        END;    

        BEGIN    

            DBMS_OUTPUT.PUT_LINE('REQ_ID -> '|| CUR_A1_REC.REQ_ID ||' INSERT START');    

             INSERT INTO WF_KNOWLEDGE    
                 ( KNOW_ID,    
                   KNOW_CATEGORY,    
                   REQ_ID,    
                   REQ_DT,    
                   REQ_USER_ID,    
                   REQ_DEPT_ID,    
                   REQ_USER_JBC_POSI,    
                   REQ_USER_NM,    
                   WORK_USER_ID,    
                   WORK_DEPT_ID,    
                   WORK_USER_JBC_POSI,    
                   WORK_USER_NM,    
                   SR_BRIEF,    
                   UPMU_ID1,    
                   UPMU_ID2,    
                   UPMU_ID3,    
                   REQ_CONT,    
                   PROC_CONT,    
                   CAUSE_CONT,    
                   TEST_CONT,    
                   SOLVED_CONT,    
                   REG_DEPT_ID,    
                   REG_DEPT_NM,    
                   REG_USER_ID,    
                   REG_USER_NM,    
                   REG_STIME,    
                   LMOD_USER_ID,    
                   LMOD_USER_NM,    
                   SYSMODTIME )    
                (    

                SELECT T.KNOW_ID,    
                       T.KNOW_CATEGORY,    
                       T.REQ_ID,    
                       T.REQ_DT,    
                       T.REQ_USER_ID,    
                       T.REQ_DEPT_ID,    
                       T.REQ_USER_JBC_POSI,    
                       T.REQ_USER_NM,    
                       T.WORK_USER_ID,    
                       T.WORK_DEPT_ID,    
                       T.WORK_USER_JBC_POSI,    
                       T.WORK_USER_NM,    
                       T.SR_BRIEF,    
                       T.UPMU_ID1,    
                       T.UPMU_ID2,    
                       T.UPMU_ID3,    
                       T.REQ_CONT,    
                       T.PROC_CONT,    
                       T.CAUSE_CONT,    
                       T.TEST_CONT,    
                       T.SOLVED_CONT,    
                       'ITSMBATCH',    
                       'ITSMBATCH',    
                       'ITSMBATCH',    
                       'ITSMBATCH',    
                       TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'),    
                       'ITSMBATCH',    
                       'ITSMBATCH',    
                       TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    
                FROM (      
                    SELECT     
                        (SELECT 'KNM' || TO_CHAR(SYSDATE, 'YYYYMMDD') || TRIM(TO_CHAR(COUNT(KNOW_ID)+1, '000'))    
                        FROM WF_KNOWLEDGE WHERE  KNOW_ID LIKE 'KNM' || TO_CHAR(SYSDATE, 'YYYYMMDD')||'%' ) AS KNOW_ID,    
                        'KNOW0SRM' AS KNOW_CATEGORY,    
                        REQ_ID,    
                        REQ_DT,    
                        REQ_USER_ID,    
                        REQ_DEPT_ID,    
                        REQ_USER_JBC_POSI,    
                        REQ_USER_NM,    
                        WORK_USER_ID,    
                        WORK_DEPT_ID,    
                        WORK_USER_JBC_POSI,    
                        WORK_USER_NM,    
                        SR_BRIEF,    
                        UPMU_ID1,    
                        UPMU_ID2,    
                        UPMU_ID3,    
                        TO_CLOB(REQ_CONT) AS REQ_CONT,    
                        NULL AS PROC_CONT,    
                        NULL AS CAUSE_CONT,    
                        NULL AS TEST_CONT,    
                        PROC_CONT AS SOLVED_CONT    
                    FROM  WF_SRM
                    WHERE 1 = 1
                    AND KNOW_REG_YN = '1' /* 예 */    
                    AND REQ_ID = CUR_A1_REC.REQ_ID    
                    ) T    
                LEFT OUTER JOIN WF_KNOWLEDGE K    
                ON K.KNOW_CATEGORY = T.KNOW_CATEGORY
                AND K.REQ_ID = T.REQ_ID
                WHERE K.KNOW_ID IS NULL    
                )
            ;     

            DBMS_OUTPUT.PUT_LINE('REQ_ID -> '|| CUR_A1_REC.REQ_ID ||' INSERT SQLCODE -> '||TO_CHAR(SQLCODE) );    

        EXCEPTION    
            WHEN OTHERS THEN NULL;    
        END;    


    END LOOP;    

    OUT_CODE := 0;    
    OUT_MSG  := '완료';

EXCEPTION    
    WHEN NO_DATA_FOUND THEN    
        NULL;    
    WHEN OTHERS THEN    
        ROLLBACK;    

    OUT_CODE := SQLCODE;    
    OUT_MSG  := SQLERRM;    

    --DBMS_OUTPUT.PUT_LINE('THIS PROCDURE ERROR CODE IS ' || OUT_CODE || ' ERROR MESSAGE IS ' ||OUT_MSG);    

    INSERT INTO TBT_PROC_DB_ERROR_LOG    
                 (CALL_PROC_NAME, REG_STIME, ERROR_CODE, ERROR_MESSAGE)    
           VALUES('PRC_SRM_SATISFY',TO_CHAR(SYSDATE,'YYYYMMDDHH24MISS'), OUT_CODE, OUT_MSG);    

 END;

/
--------------------------------------------------------
--  DDL for Procedure PR_WF_REQ_TMPLAT_COPY
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_WF_REQ_TMPLAT_COPY" 
(
    IN_REQ_TMPLAT_ID    IN VARCHAR2,    --양식ID
    IN_REQ_TMPLAT_NM    IN VARCHAR2,    --신규 양식명
    IN_COPY_REG_TBL_YN  IN VARCHAR2,    --등록 테이블 정보 복사 여부
    IN_COPY_CGER_APV_YN IN VARCHAR2,    --담당 및 결재 정보 복사여부
    IN_COPY_SVC_YN      IN VARCHAR2,    --서비스 정보 복사여부
    IN_USER_ID          IN VARCHAR2,    --접속자ID
    IN_LMPID            IN VARCHAR2,    --수정프로그램ID

    OUT_RTN_CD          OUT NUMBER,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명    : WORKFLOW
    프로시저명  : PR_WF_REQ_TMPLAT_COPY
    설명        : WORKFLOW 양식을 복제한다.
    작성자     작성일자        작성내용
    정보윤     2024.10.08      최초 작성
======================================================================================*/
V_REQ_TMPLAT_ID     WF_REQ_TMPLAT_MT.REQ_TMPLAT_ID%TYPE;
V_REQ_TMPLAT_VER    WF_REQ_TMPLAT_HT.REQ_TMPLAT_VER%TYPE;
V_NEW_REQ_TMPLAT_ID WF_REQ_TMPLAT_MT.REQ_TMPLAT_ID%TYPE;

BEGIN

    BEGIN

        SELECT
            REQ_TMPLAT_ID, (SELECT REQ_TMPLAT_VER FROM WF_REQ_TMPLAT_HT WHERE (REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID) AND CUR_VER_YN = 'Y')
        INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER
        FROM
            --WF_REQ_TMPLAT_MT
            WF_REQ_TMPLAT_MT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            OUT_RTN_CD := -1;
            OUT_RTN_MSG := 'WF_REQ_TMPLAT_MT 존재하지 않는 WORKFLOW';
            RETURN;

        WHEN OTHERS THEN
            OUT_RTN_CD := -2;
            OUT_RTN_MSG := 'WF_REQ_TMPLAT_MT WORKFLOW TMPLATE 불명확';
            RETURN;
    END;

    DBMS_OUTPUT.PUT_LINE('조회된 V_REQ_TMPLAT_ID"[' || V_REQ_TMPLAT_ID || '] V_REQ_TMPLAT_VER:[' || V_REQ_TMPLAT_VER || ']');

    SELECT
         'WFT' || TO_CHAR(SYSDATE, 'YY') || LPAD(NVL(MAX(SUBSTR(REQ_TMPLAT_ID, -4)), 0)+1, 4, '0') AS REQ_TMPLAT_ID
    INTO V_NEW_REQ_TMPLAT_ID
    FROM
        --WF_REQ_TMPLAT_MT
        WF_REQ_TMPLAT_MT

    WHERE 1 = 1
    AND SUBSTR(REQ_TMPLAT_ID, 4, 2) = TO_CHAR(SYSDATE, 'YY')
    ;

    DBMS_OUTPUT.PUT_LINE('V_NEW_REQ_TMPLAT_ID :[' || V_NEW_REQ_TMPLAT_ID || ']');

    --INSERT INTO WF_REQ_TMPLAT_MT
    INSERT INTO WF_REQ_TMPLAT_MT
    (
          REQ_TMPLAT_ID         --요청서양식ID
        , REQ_TMPLAT_NM         --요청서양식명
        --, REQ_TMPLAT_VER        --요청서양식버전
        --, CUR_VER_YN          --현재버전여부
        , SVC_CD                --서비스유형코드
        , SVC_DTL_CD            --서비스유형 상세코드
        , WF_ID                 --워크플로우ID
        , MAP_PROC_CD
        , REQ_URL_NO            --요청서URL번호 
        , REQ_URL               --요청서URL
        , END_URL               --종료 후 보여질 화면 URL
        , REQ_INFO_TYPE_CD      --요청서 기본정보 타입코드
        , ATTACH_USE_YN         --첨부파일 사용여부
        , REQ_REF_YN            --요청서 참조여부
        , SATI_INVEST_GUBUN     --만족도조사구분
        , VER_MNG_YN            --버전관리여부
        , REQ_DESC              --작성요령
        , USE_YN                --사용여부
        , DEL_YN                --삭제여부
        , RMK
        , FRID
        , FRDT
        , LMID
        , LMDT
        , LMPID
    )
    SELECT
          V_NEW_REQ_TMPLAT_ID   --요청서양식ID
        , NVL(IN_REQ_TMPLAT_NM, '[' || V_REQ_TMPLAT_ID || ']복사-' || REQ_TMPLAT_NM)  --요청서양식명
        --, 1                     --요청서양식버전
        --, CUR_VER_YN          --현재버전여부
        , SVC_CD                --서비스유형코드
        , SVC_DTL_CD            --서비스유형 상세코드
        , WF_ID                 --워크플로우ID
        , MAP_PROC_CD
        , REQ_URL_NO            --요청서URL번호 
        , REQ_URL               --요청서URL
        , END_URL               --종료 후 보여질 화면 URL
        , REQ_INFO_TYPE_CD      --요청서 기본정보 타입코드
        , ATTACH_USE_YN         --첨부파일 사용여부
        , REQ_REF_YN            --요청서 참조여부
        , SATI_INVEST_GUBUN     --만족도조사구분
        , VER_MNG_YN            --버전관리여부
        , REQ_DESC              --작성요령
        , USE_YN                --사용여부
        , DEL_YN                --삭제여부
        , RMK                   --비고

        , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
        , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
        , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID

    FROM
        --WF_REQ_TMPLAT_MT
        WF_REQ_TMPLAT_MT

    WHERE 1 = 1
    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
    --AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
    ;

    INSERT INTO WF_REQ_TMPLAT_HT
    (
          REQ_TMPLAT_ID
        , REQ_TMPLAT_NM
        , REQ_TMPLAT_VER
        , CUR_VER_YN
        , SVC_CD
        , SVC_DTL_CD
        , WF_ID
        , MAP_PROC_CD
        , REQ_URL
        , REQ_INFO_TYPE_CD
        , REQ_REF_YN
        , VER_MNG_YN
        , REQ_URL_NO
        , END_URL
        , SATI_INVEST_GUBUN
        , REQ_DESC
        , ATTACH_USE_YN
        , USE_YN
        , CANCEL_BTN_YN
        , RMK
        , FRID
        , FRDT
        , LMID
        , LMDT
        , LMPID
    )
    SELECT
          V_NEW_REQ_TMPLAT_ID   --요청서양식ID
        , NVL(IN_REQ_TMPLAT_NM, '[' || V_REQ_TMPLAT_ID || ']복사-' || REQ_TMPLAT_NM)  --요청서양식명
        , REQ_TMPLAT_VER
        , CUR_VER_YN
        , SVC_CD
        , SVC_DTL_CD
        , WF_ID
        , MAP_PROC_CD
        , REQ_URL
        , REQ_INFO_TYPE_CD
        , REQ_REF_YN
        , VER_MNG_YN
        , REQ_URL_NO
        , END_URL
        , SATI_INVEST_GUBUN
        , REQ_DESC
        , ATTACH_USE_YN
        , USE_YN
        , CANCEL_BTN_YN
        , RMK

        , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
        , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
        , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID

    FROM
        WF_REQ_TMPLAT_HT

    WHERE 1 = 1
    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
    ;

    --INSERT INTO WF_REQ_TMPLAT_PROC_DT
    INSERT INTO WF_REQ_TMPLAT_PROC_DT
    (
          REQ_TMPLAT_ID
        --, REQ_TMPLAT_VER
        , WF_PROC_CD
        , WF_PROC_NM
        , NEXT_WF_PROC_CD
        , SEQ
        , URL
        , SKIP_YN
        , SKIP_OPT
        , SCREEN_RTRN
        , FUNC_TYPE_CD
        , FUNC
        , FUNC_NM
        , CGER_TYPE_CD
        , CGER
        , CGER_NM
        , RTRN
        , RVER_CNT
        , SCREEN_EDIT
        , EDIT

        , SCREEN_APV_ESS_YN
        , SCREEN_RTRN_ESS_YN
        , APV_ESS_YN
        , RTRN_ESS_YN
        , MAP_WF_PROC_CD
        , SCRN_TYPE
        , ORG_WF_PROC_NM

        , SCREEN_APV_BTN_YN
        , SCREEN_RTRN_BTN_YN
        , SCREEN_SAVE_BTN_YN

        , APV_BTN_YN
        , RTRN_BTN_YN
        , SAVE_BTN_YN

        , SCREEN_APV_BTN_TEXT
        , SCREEN_RTRN_BTN_TEXT
        , SCREEN_SAVE_BTN_TEXT

        , APV_BTN_TEXT
        , RTRN_BTN_TEXT
        , SAVE_BTN_TEXT 

        , RMK
        , FRID
        , FRDT
        , LMID
        , LMDT
        , LMPID
    )
    SELECT
          V_NEW_REQ_TMPLAT_ID
        , WF_PROC_CD
        , WF_PROC_NM
        , NEXT_WF_PROC_CD
        , SEQ
        , URL
        , SKIP_YN
        , SKIP_OPT
        , SCREEN_RTRN
        , FUNC_TYPE_CD
        , FUNC
        , FUNC_NM
        , CGER_TYPE_CD
        , CGER
        , CGER_NM
        , RTRN
        , RVER_CNT
        , SCREEN_EDIT
        , EDIT

        , SCREEN_APV_ESS_YN
        , SCREEN_RTRN_ESS_YN
        , APV_ESS_YN
        , RTRN_ESS_YN
        , MAP_WF_PROC_CD
        , SCRN_TYPE
        , ORG_WF_PROC_NM

        , SCREEN_APV_BTN_YN
        , SCREEN_RTRN_BTN_YN
        , SCREEN_SAVE_BTN_YN

        , APV_BTN_YN
        , RTRN_BTN_YN
        , SAVE_BTN_YN

        , SCREEN_APV_BTN_TEXT
        , SCREEN_RTRN_BTN_TEXT
        , SCREEN_SAVE_BTN_TEXT

        , APV_BTN_TEXT
        , RTRN_BTN_TEXT
        , SAVE_BTN_TEXT 

        , RMK

        , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
        , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
        , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID
    FROM
        WF_REQ_TMPLAT_PROC_DT

    WHERE 1 = 1
    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
    --AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
    ;

    INSERT INTO WF_REQ_TMPLAT_PROC_HT
    (
          REQ_TMPLAT_ID
        , REQ_TMPLAT_VER
        , WF_PROC_CD
        , WF_PROC_NM
        , NEXT_WF_PROC_CD
        , SEQ
        , URL
        , SKIP_YN
        , SKIP_OPT
        , SCREEN_RTRN
        , FUNC_TYPE_CD
        , FUNC
        , FUNC_NM
        , CGER_TYPE_CD
        , CGER
        , CGER_NM
        , RTRN
        , RVER_CNT
        , SCREEN_EDIT
        , EDIT
        , SCREEN_APV_ESS_YN
        , SCREEN_RTRN_ESS_YN
        , APV_ESS_YN
        , RTRN_ESS_YN
        , MAP_WF_PROC_CD
        , SCRN_TYPE
        , ORG_WF_PROC_NM
        , SCREEN_APV_BTN_YN
        , SCREEN_RTRN_BTN_YN
        , SCREEN_SAVE_BTN_YN
        , APV_BTN_YN
        , RTRN_BTN_YN
        , SAVE_BTN_YN
        , SCREEN_APV_BTN_TEXT
        , SCREEN_RTRN_BTN_TEXT
        , SCREEN_SAVE_BTN_TEXT
        , APV_BTN_TEXT
        , RTRN_BTN_TEXT
        , SAVE_BTN_TEXT
        , RMK
        , FRID
        , FRDT
        , LMID
        , LMDT
        , LMPID
    )
    SELECT
          V_NEW_REQ_TMPLAT_ID
        , REQ_TMPLAT_VER
        , WF_PROC_CD
        , WF_PROC_NM
        , NEXT_WF_PROC_CD
        , SEQ
        , URL
        , SKIP_YN
        , SKIP_OPT
        , SCREEN_RTRN
        , FUNC_TYPE_CD
        , FUNC
        , FUNC_NM
        , CGER_TYPE_CD
        , CGER
        , CGER_NM
        , RTRN
        , RVER_CNT
        , SCREEN_EDIT
        , EDIT
        , SCREEN_APV_ESS_YN
        , SCREEN_RTRN_ESS_YN
        , APV_ESS_YN
        , RTRN_ESS_YN
        , MAP_WF_PROC_CD
        , SCRN_TYPE
        , ORG_WF_PROC_NM
        , SCREEN_APV_BTN_YN
        , SCREEN_RTRN_BTN_YN
        , SCREEN_SAVE_BTN_YN
        , APV_BTN_YN
        , RTRN_BTN_YN
        , SAVE_BTN_YN
        , SCREEN_APV_BTN_TEXT
        , SCREEN_RTRN_BTN_TEXT
        , SCREEN_SAVE_BTN_TEXT
        , APV_BTN_TEXT
        , RTRN_BTN_TEXT
        , SAVE_BTN_TEXT
        , RMK

        , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
        , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
        , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID
    FROM
        WF_REQ_TMPLAT_PROC_HT

    WHERE 1 = 1
    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
    ;

    IF IN_COPY_REG_TBL_YN = 'Y' THEN    --등록 테이블 정보 복사 여부

        INSERT INTO WF_REG_TBL_IFNO_DT
        (
              REQ_TMPLAT_ID
            , WF_PROC_CD
            , SEQ
            , TBL_NM
            , DATASET_NM
            , TBL_DESC
            , SELECT_QUERY
            , INSERT_QUERY
            , UPDATE_QUERY
            , DELETE_QUERY
            , ORDR
            , INC_TEMP_SAVE_YN
            , WF_PROC_AGREE_YN
            , USE_YN
            , RMK

            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID
        )
        SELECT
              V_NEW_REQ_TMPLAT_ID
            , WF_PROC_CD
            , SEQ
            , TBL_NM
            , DATASET_NM
            , TBL_DESC
            , SELECT_QUERY
            , INSERT_QUERY
            , UPDATE_QUERY
            , DELETE_QUERY
            , ORDR
            , INC_TEMP_SAVE_YN
            , WF_PROC_AGREE_YN
            , USE_YN
            , RMK

            , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
            , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
            , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID
        FROM
            WF_REG_TBL_IFNO_DT

        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        ;

    END IF;

    IF IN_COPY_CGER_APV_YN = 'Y' THEN   --담당 및 결재 정보 복사여부

        INSERT INTO WF_REQ_TMPLAT_CGER_EXTD_DT
        (
              REQ_TMPLAT_ID
            , WF_PROC_CD
            , WF_FUNC_CD
            , WF_FUNC_NM
            , EXTD_ID
            , REV_BTN_YN
            , SAVE_BTN_YN
            , RTRN_BTN_YN
            , REV_BTN_TEXT
            , SAVE_BTN_TEXT
            , RTRN_BTN_TEXT
            , RMK

            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID
        )
        SELECT
              V_NEW_REQ_TMPLAT_ID
            , WF_PROC_CD
            , WF_FUNC_CD
            , WF_FUNC_NM
            , EXTD_ID
            , REV_BTN_YN
            , SAVE_BTN_YN
            , RTRN_BTN_YN
            , REV_BTN_TEXT
            , SAVE_BTN_TEXT
            , RTRN_BTN_TEXT
            , RMK

            , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
            , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
            , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID
        FROM
            WF_REQ_TMPLAT_CGER_EXTD_DT

        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        ;

        INSERT INTO WF_REQ_APPV_DT
        (
              REQ_TMPLAT_ID
            , WF_PROC_CD
            , APPR_LVL_SEQ
            , MAP_WF_PROC_CD 
            , APPR_PROC_DIV_CD
            , APPR_PROG_DIV_CD
            , SVC_NM
            , APPR_NM
            , RMK

            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID
        )
        SELECT
              V_NEW_REQ_TMPLAT_ID
            , WF_PROC_CD
            , APPR_LVL_SEQ
            , MAP_WF_PROC_CD 
            , APPR_PROC_DIV_CD
            , APPR_PROG_DIV_CD
            , SVC_NM
            , APPR_NM
            , RMK

            , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
            , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
            , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID
        FROM
            WF_REQ_APPV_DT

        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        ;

        INSERT INTO WF_REQ_APPV_HT
        (
              REQ_TMPLAT_ID
            , REQ_TMPLAT_VER
            , WF_PROC_CD
            , APPR_LVL_SEQ
            , MAP_WF_PROC_CD 
            , APPR_PROC_DIV_CD
            , APPR_PROG_DIV_CD
            , SVC_NM
            , APPR_NM
            , RMK

            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID
        )
        SELECT
              V_NEW_REQ_TMPLAT_ID
            , REQ_TMPLAT_VER
            , WF_PROC_CD
            , APPR_LVL_SEQ
            , MAP_WF_PROC_CD 
            , APPR_PROC_DIV_CD
            , APPR_PROG_DIV_CD
            , SVC_NM
            , APPR_NM
            , RMK

            , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
            , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
            , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID
        FROM
            WF_REQ_APPV_HT

        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        ;

        INSERT INTO WF_REQ_TMPLAT_CGER_SVC_DT
        (
              REQ_TMPLAT_ID
            , WF_PROC_CD
            , WF_FUNC_CD
            , WF_FUNC_NM
            , JAVA_SVC_NM
            , RMK

            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID
        )
        SELECT
              V_NEW_REQ_TMPLAT_ID
            , WF_PROC_CD
            , WF_FUNC_CD
            , WF_FUNC_NM
            , JAVA_SVC_NM
            , RMK

            , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
            , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
            , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID
        FROM
            WF_REQ_TMPLAT_CGER_SVC_DT

        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        ;

    END IF;

    IF IN_COPY_SVC_YN = 'Y' THEN    --서비스 정보 복사여부

        INSERT INTO WF_REQ_PROC_SVC_DT
        (
              REQ_TMPLAT_ID
            , WF_PROC_CD
            , FUNC
            , PROC_GUBUN
            , SEQ
            , PRE_GUBUN
            , SVC_NM
            , FR_BK_GUBUN
            , INC_TEMP_SAVE_YN
            , WF_PROC_AGREE_YN
            , USE_YN
            , IN_DATASET
            , OUT_DATASET
            , RMK

            , FRID
            , FRDT
            , LMID
            , LMDT
            , LMPID
        )
        SELECT
              V_NEW_REQ_TMPLAT_ID
            , WF_PROC_CD
            , FUNC
            , PROC_GUBUN
            , SEQ
            , PRE_GUBUN
            , SVC_NM
            , FR_BK_GUBUN
            , INC_TEMP_SAVE_YN
            , WF_PROC_AGREE_YN
            , USE_YN
            , IN_DATASET
            , OUT_DATASET
            , RMK

            , NVL(IN_USER_ID, 'ADMIN')              --최초등록자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --등록일시
            , NVL(IN_USER_ID, 'ADMIN')              --최종수정자ID
            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  --최종수정일시
            , NVL(IN_LMPID, 'ADMIN')                --최종수정 화면ID

        FROM
            WF_REQ_PROC_SVC_DT

        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        ;

    END IF;

    OUT_RTN_CD := 0;
    OUT_RTN_MSG := 'WF양식 [' || V_REQ_TMPLAT_ID || ']에 대한 신규 양식[' || V_NEW_REQ_TMPLAT_ID || '] 정상적으로 생성 되었습니다.';
    DBMS_OUTPUT.PUT_LINE(OUT_RTN_MSG);
    COMMIT;
    RETURN;

EXCEPTION
    WHEN OTHERS THEN
        OUT_RTN_CD := -9999;
        OUT_RTN_MSG := '요청서 진행 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE(OUT_RTN_CD || ' / ' || OUT_RTN_MSG);
        ROLLBACK;
        RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_WF_REQ_TMPLAT_DEL
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "ITSM2"."PR_WF_REQ_TMPLAT_DEL" 
(
    IN_REQ_TMPLAT_ID    IN VARCHAR2,    --WORKFLOW 양식 ID

    OUT_RTN_CD          OUT NUMBER,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명    : WORKFLOW
    프로시저명  : PR_WF_REQ_TMPLAT_DEL
    설명        : WORKFLOW 양식을 삭제한다.
    작성자     작성일자        작성내용
    정보윤     2024.10.08      최초 작성
======================================================================================*/
BEGIN

    --/*
    DELETE FROM WF_REG_TBL_IFNO_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REG_TBL_IFNO_HT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_PROC_SVC_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_PROC_SVC_HT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_APPV_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_APPV_HT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_TMPLAT_CGER_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_CGER_HT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_TMPLAT_CGER_EXTD_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_CGER_EXTD_HT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_TMPLAT_CGER_SVC_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_CGER_SVC_HT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REG_TBL_IFNO_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REG_TBL_IFNO_DT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_APPV_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_APPV_DT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_PROC_SVC_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_PROC_SVC_DT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_TMPLAT_CGER_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_CGER_DT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_TMPLAT_CGER_EXTD_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_CGER_EXTD_DT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    DELETE FROM WF_REQ_TMPLAT_CGER_SVC_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_CGER_SVC_DT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    --DELETE FROM WF_REQ_TMPLAT_PROC_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;
    DELETE FROM WF_REQ_TMPLAT_PROC_DT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DELETE FROM WF_REQ_TMPLAT_PROC_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_PROC_DT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    --DELETE FROM WF_REQ_TMPLAT_MT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;
    DELETE FROM WF_REQ_TMPLAT_MT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DELETE FROM WF_REQ_TMPLAT_HT WHERE REQ_TMPLAT_ID = IN_REQ_TMPLAT_ID;

    DBMS_OUTPUT.PUT_LINE('[WF_REQ_TMPLAT_MT] REQ_TMPLAT_ID : [' || IN_REQ_TMPLAT_ID || '] 삭제');

    OUT_RTN_CD := 0;
    OUT_RTN_MSG := 'WF양식 [' || IN_REQ_TMPLAT_ID || '] 삭제 완료';
    DBMS_OUTPUT.PUT_LINE(OUT_RTN_MSG);
    COMMIT;
    --*/
    RETURN;

EXCEPTION
    WHEN OTHERS THEN
        OUT_RTN_CD := -9999;
        OUT_RTN_MSG := '요청서 진행 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE(OUT_RTN_CD || ' / ' || OUT_RTN_MSG);
        ROLLBACK;
        RETURN;
END;

/
