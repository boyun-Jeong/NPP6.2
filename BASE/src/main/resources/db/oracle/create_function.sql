--------------------------------------------------------
--  파일이 생성됨 - 수요일-9월-06-2023   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Function FN_GETCODEVALUE
--------------------------------------------------------

CREATE OR REPLACE FUNCTION "FN_GETCODEVALUE"
(
    IN_GROUP_CODE    IN FOMM_CMM_CD_MT.UP_CMM_CD%TYPE,  --상위그룹코드
    IN_CODE          IN FOMM_CMM_CD_MT.CMM_CD%TYPE,     --코드
    IN_SEL_LANG_CD   IN FOMM_CMM_CD_MT.LANG_CD%TYPE,    --현재 선택언어코드
    IN_SYS_LANG_CD   IN FOMM_CMM_CD_MT.LANG_CD%TYPE     --시스템 기준언어코드
)
RETURN VARCHAR2
IS
    V_SEL_LANG_CD   FOMM_CMM_CD_MT.LANG_CD%TYPE;
    V_SYS_LANG_CD   FOMM_CMM_CD_MT.LANG_CD%TYPE := 'KR';
    V_CODE_NAME VARCHAR2(100);

BEGIN

    IF NVL(IN_SYS_LANG_CD, ' ') = ' ' THEN
        V_SYS_LANG_CD := 'KR';
    ELSE
        V_SYS_LANG_CD := IN_SYS_LANG_CD;
    END IF;

    IF NVL(IN_SEL_LANG_CD, ' ') = ' ' THEN
        V_SEL_LANG_CD := V_SYS_LANG_CD;
    ELSE
        V_SEL_LANG_CD := IN_SEL_LANG_CD;
    END IF;

    SELECT CMM_CD_NM
    INTO V_CODE_NAME
    FROM FOMM_CMM_CD_MT
    WHERE UP_CMM_CD = IN_GROUP_CODE
    AND LANG_CD = V_SEL_LANG_CD
    AND CMM_CD = IN_CODE
    AND ROWNUM = 1
    ;

    IF NVL(V_CODE_NAME, ' ') = ' ' THEN

        IF V_SYS_LANG_CD <> V_SEL_LANG_CD THEN

            SELECT CMM_CD_NM
            INTO V_CODE_NAME
            FROM FOMM_CMM_CD_MT
            WHERE 1 = 1
            AND UP_CMM_CD   = IN_GROUP_CODE
            AND LANG_CD     = V_SYS_LANG_CD
            AND CMM_CD      = IN_CODE
            AND ROWNUM      = 1
            ;

        END IF;
    END IF;
    
    RETURN V_CODE_NAME;

EXCEPTION
   WHEN NO_DATA_FOUND THEN
       RETURN '';
END;
/
--------------------------------------------------------
--  DDL for Function FN_SR_REQ_USER_EDIT_YN
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "FN_SR_REQ_USER_EDIT_YN" 
(
    IN_REQ_ID       IN  VARCHAR2,   --요청서ID
    IN_USER_ID      IN  VARCHAR2,   --유저ID(현재 로그인 사용자)
    IN_WF_FUNC_CD   IN  VARCHAR2    --기능
)RETURN  VARCHAR2
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : FN_SR_REQ_USER_EDIT_YN
    설명      : 요청서 진행단계에 따른 현재 사용자의 편집 가능여부을 구한다.
    작성자     작성일자         작성내용
    정보윤     2023.07.13      최초 작성
======================================================================================*/
V_REQ_TMPLAT_ID     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
V_REQ_TMPLAT_VER    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
V_WF_PROC_CD        SR_BASE_INFO.WF_PROC_CD%TYPE;
V_REQ_STAT_CD       SR_BASE_INFO.REQ_STAT_CD%TYPE;
V_REQ_USER_ID       SR_BASE_INFO.REQ_USER_ID%TYPE;

V_FIRST_WF_PROC_CD  WF_REQ_TMPLAT_PROC_DT.WF_PROC_CD%TYPE;
V_USER_EXIST_CNT    NUMBER;
V_OTHER_USER_CNT    NUMBER;
V_USER_EXIST_YN     VARCHAR2(1);

BEGIN

    --처리시 필요한 컬럼 정보를 기본 정보 TBL에서 얻는다.
        SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD, REQ_STAT_CD, REQ_USER_ID
        INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_WF_PROC_CD, V_REQ_STAT_CD, V_REQ_USER_ID
        FROM SR_BASE_INFO
        WHERE 1 = 1
        AND REQ_ID  = IN_REQ_ID
        ;

        BEGIN

            SELECT WF_PROC_CD
            INTO V_FIRST_WF_PROC_CD
            FROM WF_REQ_TMPLAT_PROC_DT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND SEQ             = 1
            ;

        EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN 'N';
        WHEN OTHERS THEN
            RETURN 'N';
        END;

        /* 등록 단계인 경우 */
        IF V_WF_PROC_CD = V_FIRST_WF_PROC_CD THEN

            IF V_REQ_USER_ID = IN_USER_ID THEN
            
                /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
                IF V_REQ_STAT_CD IN ('RQST00', 'RQST91') THEN
                    RETURN 'Y';
                ELSE
                    RETURN 'N';
                END IF;

            ELSE
                RETURN 'N';

            END IF;

        /* 그외 단계인 경우 */
        ELSE

            /* 1. 처리자 TABLE에 해당 단계 처리자 처리 내역이 존재하는지 체크 */
            SELECT
                NVL(SUM(CASE WHEN USER_ID = IN_USER_ID THEN 1 ELSE 0 END), 0),
                NVL(SUM(CASE WHEN USER_ID <> IN_USER_ID THEN 1 ELSE 0 END), 0)
            INTO V_USER_EXIST_CNT, V_OTHER_USER_CNT
            FROM SR_REV_PROC
            WHERE 1 = 1
            AND REQ_ID        = IN_REQ_ID
            AND WF_PROC_CD    = V_WF_PROC_CD            
            ;
            
            IF V_OTHER_USER_CNT > 0 THEN
                RETURN 'N';
            END IF;

            /* 현재 로그인 사용자가 해당 단계의 처리자 내역으로 존재하는 경우 */
            IF V_USER_EXIST_CNT > 0 THEN

                /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
                IF V_REQ_STAT_CD IN ('RQST00', 'RQST01', 'RQST91') THEN
                    RETURN 'Y';
                ELSE
                    RETURN 'N';
                END IF;

            /* 현재 로그인 사용자가 해당 단계 처리자 내역에 존재하지 않는 경우 */
            ELSE

                /* 아직 처리자가 처리 이전인 경우로 판단되며 WORKFLOW 담당자 내역에 현재 로그인 사용자가 처리자로 등록되어 있는지 확인 */
                SELECT NVL(MAX('Y'), 'N')
                INTO V_USER_EXIST_YN
                FROM WF_REQ_TMPLAT_CGER_DT
                WHERE 1 = 1
                AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                AND WF_PROC_CD      = V_WF_PROC_CD
                AND USER_ID         = IN_USER_ID
                AND WF_FUNC_CD      = IN_WF_FUNC_CD
                ;

                IF V_USER_EXIST_YN = 'Y' THEN

                    IF V_REQ_STAT_CD = 'RQST00' OR V_REQ_STAT_CD = 'RQST01' OR V_REQ_STAT_CD = 'RQST91' THEN
                        RETURN 'Y';
                    ELSE
                        RETURN 'N';
                    END IF;

                ELSE
                    RETURN 'N';

                END IF;

            END IF;

        END IF;

EXCEPTION
    WHEN OTHERS THEN
        RETURN 'N';
END;

/


/* 2024.12.24 */
CREATE OR REPLACE FUNCTION FN_FOMM_UP_USER_INFO
(
    IN_USER_ID      IN FOMM_USER_MT.USER_ID%TYPE,   -- USER_ID
    IN_GUBUN        IN VARCHAR2,                    -- 'T' : 팀장, 'B' : 본부장
    IN_GUBUN2       IN VARCHAR2                     -- 'ID' : 사번 리턴, 'NM' : 성명 리턴
)
RETURN VARCHAR2
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : FN_SR_REQ_MAP_WF_PROC
    설명       : 요청서 단계에 해당하는 매핑 단계를 구하여 리턴한다.
    작성자     작성일자    작성내용
    정보윤     2024.10.31  최초 작성
======================================================================================*/
V_GUBUN             VARCHAR2(1);
V_USER_GUBUN        VARCHAR2(1);
V_RETURN            VARCHAR2(40);

BEGIN

    DBMS_OUTPUT.PUT_LINE('0. IN_GUBUN=>' || IN_GUBUN);

    IF IN_GUBUN IN ('T', 'B') AND IN_GUBUN2 IN ('ID', 'NM') THEN

        V_GUBUN := IN_GUBUN;

        DBMS_OUTPUT.PUT_LINE('1. V_GUBUN=>' || V_GUBUN);

        IF V_GUBUN = 'T' THEN

            SELECT
                CASE WHEN IN_USER_ID = (SELECT DEPT_MANAGER_ID FROM FOMM_DEPT_MT WHERE DEPT_CD = B.DEPT_CD )
                     THEN 'T'
                     WHEN IN_USER_ID = (SELECT DEPT_MANAGER_ID FROM FOMM_DEPT_MT WHERE DEPT_TYPE >= '40' /* 부서구분 30:본부, 20:부문 */ AND DEPT_CD = A.UP_DEPT_CD )
                     THEN 'B'
                     ELSE 'U'
                END AS USER_GUBUN
            INTO V_USER_GUBUN
            FROM
                  FOMM_DEPT_MT A
                , FOMM_USER_MT B
            WHERE 1 = 1
            AND A.DEPT_CD   = B.DEPT_CD
            AND B.USER_ID   = IN_USER_ID
            ;

            --인자로 넘어온 USER_ID가 팀장일 때 팀장을 구하는 경우는 본부장을 구하도록 처리한다.
            IF V_USER_GUBUN = 'T' THEN
                V_GUBUN := 'B';
            END IF;

        END IF;

        DBMS_OUTPUT.PUT_LINE('2. V_GUBUN=>' || V_GUBUN);

        IF V_GUBUN = 'T' THEN

            SELECT
                  CASE
                    WHEN IN_GUBUN2 = 'ID'
                    THEN A.USER_ID
                    WHEN IN_GUBUN2 = 'NM'
                    THEN A.USER_NM
                END
            INTO V_RETURN
            FROM
                FOMM_USER_MT A

            WHERE 1 = 1
            AND EXISTS
                    (
                    SELECT 1                  
                    FROM
                        FOMM_DEPT_MT B,
                        FOMM_USER_MT C
                    WHERE 1 = 1
                    AND B.DEPT_CD           = C.DEPT_CD
                    AND B.DEPT_MANAGER_ID   = A.USER_ID
                    AND EXISTS
                            (
                            SELECT 1
                            FROM
                                FOMM_USER_MT D
                            WHERE 1 = 1
                            AND D.USER_ID   = IN_USER_ID
                            AND D.DEPT_CD   = B.DEPT_CD
                            )
                    )
            ;

        ELSIF V_GUBUN = 'B' THEN

            SELECT
                CASE
                    WHEN IN_GUBUN2 = 'ID'
                    THEN A.USER_ID
                    WHEN IN_GUBUN2 = 'NM'
                    THEN A.USER_NM
                END
            INTO V_RETURN
            FROM
                FOMM_USER_MT A

            WHERE 1 = 1
            AND EXISTS
                    (
                    SELECT 1
                    FROM 
                        (
                        SELECT
                              (SELECT DEPT_MANAGER_ID FROM FOMM_DEPT_MT WHERE DEPT_TYPE >= '40' /* 부서구분 30:본부, 20:부문 */ AND DEPT_CD = B.UP_DEPT_CD ) AS BON_MANAGER_ID -- 본부장
                            , (SELECT DEPT_MANAGER_ID FROM FOMM_DEPT_MT WHERE DEPT_CD = C.DEPT_CD ) AS TEAM_MANAGER_ID -- 팀장
                        FROM
                              FOMM_DEPT_MT B
                            , FOMM_USER_MT C
                        WHERE 1 = 1
                        AND B.DEPT_CD   = C.DEPT_CD
                        AND C.USER_ID   = IN_USER_ID
                        ) B
                    WHERE 1 = 1
                    AND CASE
                            WHEN B.BON_MANAGER_ID IS NULL
                            THEN TEAM_MANAGER_ID
                            ELSE BON_MANAGER_ID
                        END = A.USER_ID
                    )
            ;

        END IF;

    ELSE

        RETURN '';

    END IF;

    RETURN V_RETURN;

EXCEPTION
   WHEN NO_DATA_FOUND THEN
       RETURN '';
    WHEN OTHERS THEN
        RETURN '';
END;
/

CREATE OR REPLACE FUNCTION FN_GETCODEVALUE
(
    IN_GROUP_CODE    IN FOMM_CMM_CD_MT.UP_CMM_CD%TYPE,  --상위그룹코드
    IN_CODE          IN FOMM_CMM_CD_MT.CMM_CD%TYPE,     --코드
    IN_SEL_LANG_CD   IN FOMM_CMM_CD_MT.LANG_CD%TYPE,    --현재 선택언어코드
    IN_SYS_LANG_CD   IN FOMM_CMM_CD_MT.LANG_CD%TYPE     --시스템 기준언어코드
)
RETURN VARCHAR2
IS
    V_SEL_LANG_CD   FOMM_CMM_CD_MT.LANG_CD%TYPE;
    V_SYS_LANG_CD   FOMM_CMM_CD_MT.LANG_CD%TYPE := 'KR';
    V_CODE_NAME VARCHAR2(100);

BEGIN

    IF NVL(IN_SYS_LANG_CD, ' ') = ' ' THEN
        V_SYS_LANG_CD := 'KR';
    ELSE
        V_SYS_LANG_CD := IN_SYS_LANG_CD;
    END IF;

    IF NVL(IN_SEL_LANG_CD, ' ') = ' ' THEN
        V_SEL_LANG_CD := V_SYS_LANG_CD;
    ELSE
        V_SEL_LANG_CD := IN_SEL_LANG_CD;
    END IF;

    SELECT CMM_CD_NM
    INTO V_CODE_NAME
    FROM FOMM_CMM_CD_MT
    WHERE UP_CMM_CD = IN_GROUP_CODE
    AND LANG_CD = V_SEL_LANG_CD
    AND CMM_CD = IN_CODE
    AND ROWNUM = 1
    ;

    IF NVL(V_CODE_NAME, ' ') = ' ' THEN

        IF V_SYS_LANG_CD <> V_SEL_LANG_CD THEN

            SELECT CMM_CD_NM
            INTO V_CODE_NAME
            FROM FOMM_CMM_CD_MT
            WHERE 1 = 1
            AND UP_CMM_CD   = IN_GROUP_CODE
            AND LANG_CD     = V_SYS_LANG_CD
            AND CMM_CD      = IN_CODE
            AND ROWNUM      = 1
            ;

        END IF;
    END IF;
    
    RETURN V_CODE_NAME;

EXCEPTION
   WHEN NO_DATA_FOUND THEN
       RETURN '';
END;
/

CREATE OR REPLACE FUNCTION FN_GETDATEFORMAT
(
 v_gubun VARCHAR2, -- 1:yyyy-mm-dd, 2:yyyy-mm-dd hh:mm, 3:yyyy-mm-dd hh:mm:ss
 v_stime VARCHAR2 -- 날짜데이터
)
RETURN VARCHAR2
IS
    RT_VALUE VARCHAR2(20);
BEGIN
    IF v_gubun = '1' THEN  -- yyyy-mm-dd
      SELECT CASE when length(nvl(v_stime, '-'))>7 THEN SUBSTR(v_stime,1,4)||'-'||SUBSTR(v_stime,5,2)||'-'||SUBSTR(v_stime,7,2) ELSE '' END INTO RT_VALUE
      FROM DUAL
      ;
    ELSIF v_gubun = '2' THEN  -- yyyy-mm-dd hh:mm
      SELECT CASE when length(nvl(v_stime, '-'))>11 THEN SUBSTR(v_stime,1,4)||'-'||SUBSTR(v_stime,5,2)||'-'||SUBSTR(v_stime,7,2)||' '||SUBSTR(v_stime,9,2)||':'||SUBSTR(v_stime,11,2) ELSE '' END INTO RT_VALUE
      FROM DUAL
      ;
    ELSIF v_gubun = '3' THEN -- yyyy-mm-dd hh:mm:ss
      SELECT CASE when length(nvl(v_stime, '-'))>13 THEN SUBSTR(v_stime,1,4)||'-'||SUBSTR(v_stime,5,2)||'-'||SUBSTR(v_stime,7,2)||' '||SUBSTR(v_stime,9,2)||':'||SUBSTR(v_stime,11,2)||':'||SUBSTR(v_stime,13,2) ELSE '' END INTO RT_VALUE
      FROM DUAL
     ;
    END IF;
  RETURN RT_VALUE;

EXCEPTION
    WHEN OTHERS THEN
        RETURN '';
END;
/

CREATE OR REPLACE FUNCTION FN_GET_CHKLST_GRD
(
    IN_GUBUN        IN VARCHAR2,                        --구분 : RETURN COLUMN NAME
    IN_CHKLST_ID    IN FOMM_CHKLST_GRD.CHKLST_ID%TYPE,  --체크리스트ID
    IN_KEY_TBL      IN FOMM_CHKLST_RET.KEY_TBL%TYPE,    --키테이블
    IN_PK1          IN FOMM_CHKLST_RET.PK1%TYPE,        --PK1
    IN_PK2          IN FOMM_CHKLST_RET.PK2%TYPE,        --PK2
    IN_PK3          IN FOMM_CHKLST_RET.PK3%TYPE         --PK3
)
RETURN VARCHAR2
IS
/*======================================================================================
    시스템명   : 기준정보
    프로시저명 : FN_GET_CHKLST_GRD
    설명       : 입력된 체크리스트의 등급을 구한다.
    작성자     작성일자        작성내용
    정보윤     2024.08.19      최초 작성
======================================================================================*/
V_TOT_SCORE NUMBER := 0;
V_RTN       VARCHAR2(100);

BEGIN

    SELECT NVL(SUM(RET_VAL), 0)
    INTO V_TOT_SCORE
    FROM
          FOMM_CHKLST_EXM A
        , FOMM_CHKLST_RET B

    WHERE 1 = 1
    AND A.CHKLSTEXM_ID  = B.CHKLSTEXM_ID
    AND A.CHKLST_ID     = IN_CHKLST_ID
    AND B.KEY_TBL       = IN_KEY_TBL
    AND B.PK1           = IN_PK1
    AND ( (NVL(IN_PK2, ' ') = ' ' AND 1 = 1) OR (NVL(IN_PK2, ' ') <> ' ' AND B.PK2 = IN_PK2)  )
    AND ( (NVL(IN_PK3, ' ') = ' ' AND 1 = 1) OR (NVL(IN_PK3, ' ') <> ' ' AND B.PK3 = IN_PK3)  )
    ;

    BEGIN

        SELECT
            CASE
                WHEN IN_GUBUN = 'GRD_SEQ' THEN TO_CHAR(GRD_SEQ)
                WHEN IN_GUBUN = 'GRD_NM' THEN GRD_NM
                ELSE GRD_NM
            END
        INTO V_RTN
        FROM
            FOMM_CHKLST_GRD

        WHERE 1 = 1
        AND CHKLST_ID = IN_CHKLST_ID
        AND V_TOT_SCORE BETWEEN GRD_FR_VAL AND GRD_TO_VAL
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN '';
        WHEN OTHERS THEN
            RETURN '';
    END;

    RETURN V_RTN;

END;
/

CREATE OR REPLACE FUNCTION FN_SR_REQ_CUR_APV_USER_YN
(
    IN_REQ_ID       IN  VARCHAR2,   --요청서ID
    --IN_SEQ          IN  VARCHAR2,   --
    IN_USER_ID      IN  VARCHAR2,   --유저ID(현재 로그인 사용자)
    IN_WF_FUNC_CD   IN  VARCHAR2    --기능(/* 워크플로우기능[WF_FUNC_CD] - WF_FUNC_00 : 등록, WF_FUNC_01 : 결재, WF_FUNC_02 : 검토, WF_FUNC_04 : 담당자 */)
)RETURN  VARCHAR2
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : FN_SR_REQ_CUR_APV_USER_YN
    설명      : 요청서가 현재 검토/결재 진행중인 경우 인자로 입력받은 유저가 현재 검토/결재 가능한지 체크
    작성자     작성일자         작성내용
    정보윤     2024.04.14      최초 작성
======================================================================================*/
V_REQ_TMPLAT_ID     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
V_REQ_TMPLAT_VER    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
V_WF_PROC_CD        SR_BASE_INFO.WF_PROC_CD%TYPE;
V_REQ_STAT_CD       SR_BASE_INFO.REQ_STAT_CD%TYPE;

V_FIRST_WF_PROC_CD  WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;
V_USER_EXIST_CNT    NUMBER;
V_OTHER_USER_CNT    NUMBER;
V_USER_EXIST_YN     VARCHAR2(1);

V_CGER_USER_ID      SR_CGER_DT.USER_ID%TYPE;
V_DAEJIC_USER_ID    FOMM_USER_MT.USER_ID%TYPE;
V_FUNC_EDIT_YN      VARCHAR2(1);
V_RVER_CNT          NUMBER;

V_USER_APV_YN       VARCHAR2(1);
BEGIN

        IF IN_WF_FUNC_CD = 'WF_FUNC_00' OR IN_WF_FUNC_CD = 'WF_FUNC_04' THEN    --현재 기능 처리가 등록/담당자인 경우
            RETURN 'N';
        ELSE
        
            --처리시 필요한 컬럼 정보를 기본 정보 TBL에서 얻는다.
            SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD, REQ_STAT_CD                   
            INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_WF_PROC_CD, V_REQ_STAT_CD
            FROM
                SR_BASE_INFO A
            WHERE 1 = 1
            AND REQ_ID  = IN_REQ_ID
            ;
            
            IF IN_WF_FUNC_CD = 'WF_FUNC_01' AND V_REQ_STAT_CD = 'RQST11' THEN   --현재 기능 처리가 결재이고 상태도 결재중인 경우

                BEGIN

                    SELECT
                        --MAX(CASE WHEN A.SEQ = IN_SEQ AND A.USER_ID = IN_USER_ID THEN 'Y' ELSE 'N' END)
                        MAX(CASE WHEN A.USER_ID = IN_USER_ID THEN 'Y' ELSE 'N' END)
                    INTO V_USER_APV_YN
                    FROM
                        (
                        SELECT
                            A.*,
                            DENSE_RANK() OVER(PARTITION BY REQ_ID, WF_PROC_CD, APPR_LVL_SEQ, APPR_GRP_SEQ ORDER BY APPR_SEQ) AS RNK
                        FROM WF_APPROVAL_MT A
                        WHERE 1 = 1
                        AND A.REQ_ID        = IN_REQ_ID
                        AND A.WF_PROC_CD    = V_WF_PROC_CD
                        AND A.APPR_STAT_CD  = 'APST_01'     --승인대기
                        AND A.APPR_LVL_SEQ  =
                                                (
                                                SELECT MIN(APPR_LVL_SEQ)
                                                FROM WF_APPROVAL_MT B
                                                WHERE 1 = 1
                                                AND B.REQ_ID        = A.REQ_ID
                                                AND B.WF_PROC_CD    = A.WF_PROC_CD
                                                AND B.APPR_STAT_CD  = A.APPR_STAT_CD
                                                )
                        ) A
                    WHERE RNK = 1
                    ;
                    
                    RETURN V_USER_APV_YN;

                EXCEPTION
                    WHEN NO_DATA_FOUND THEN
                        RETURN 'N';
                    WHEN OTHERS THEN
                        RETURN 'X'; --결재자 체크 오류
                END;

            ELSIF IN_WF_FUNC_CD = 'WF_FUNC_02' AND V_REQ_STAT_CD = 'RQST21' THEN   --현재 기능 처리가 검토이고 상태도 검토중인 경우

                SELECT
                    NVL(MAX('Y'), 'N')
                INTO V_USER_APV_YN
                FROM WF_APPROVAL_MT A
                WHERE 1 = 1
                AND A.REQ_ID        = IN_REQ_ID
                AND A.WF_PROC_CD    = V_WF_PROC_CD
                AND A.USER_ID       = IN_USER_ID
                AND A.APPR_STAT_CD  = 'APST_02' --검토대기
                AND A.APPR_LVL_SEQ =
                                    (
                                    SELECT MIN(APPR_LVL_SEQ)
                                    FROM WF_APPROVAL_MT B
                                    WHERE 1 = 1
                                    AND B.REQ_ID        = A.REQ_ID
                                    AND B.WF_PROC_CD    = A.WF_PROC_CD
                                    AND B.APPR_STAT_CD  = A.APPR_STAT_CD
                                    )
                ;
                
                RETURN V_USER_APV_YN;

            ELSE
            
                RETURN 'N';
            
            END IF;

        END IF;

EXCEPTION
    WHEN OTHERS THEN
        RETURN 'N';
END;
/

CREATE OR REPLACE FUNCTION FN_SR_REQ_MAP_WF_PROC
(
    IN_REQ_ID       IN SR_BASE_INFO.REQ_ID%TYPE,            --요청서ID
    IN_WF_PROC_CD   IN SR_BASE_INFO.WF_PROC_CD%TYPE,        --단계코드
    IN_APPR_LVL_SEQ IN WF_APPROVAL_MT.APPR_LVL_SEQ%TYPE,    --결재차수
    IN_GUBUN        IN VARCHAR2                             --CODE, NAME
)
RETURN VARCHAR2
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : FN_SR_REQ_MAP_WF_PROC
    설명       : 요청서 단계에 해당하는 매핑 단계를 구하여 리턴한다.
    작성자     작성일자    작성내용
    정보윤     2024.10.31  최초 작성
======================================================================================*/
V_REQ_TMPLAT_ID     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
V_REQ_TMPLAT_VER    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
V_MAP_PROC_CD       WF_REQ_TMPLAT_HT.MAP_PROC_CD%TYPE;

V_APPR_LVL_SEQ      WF_APPROVAL_MT.APPR_LVL_SEQ%TYPE;

V_MAP_WF_PROC_VAL   VARCHAR2(100);

BEGIN

    SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER
    INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER
    FROM
        SR_BASE_INFO
    WHERE 1 = 1
    AND REQ_ID = IN_REQ_ID
    ;

    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_ID=>' || V_REQ_TMPLAT_ID);
    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_VER=>' || V_REQ_TMPLAT_VER);

    IF IN_APPR_LVL_SEQ IS NULL THEN

        V_APPR_LVL_SEQ := -1;

    ELSE
        V_APPR_LVL_SEQ := IN_APPR_LVL_SEQ;

    END IF;

    --DBMS_OUTPUT.PUT_LINE('V_APPR_LVL_SEQ=>' || V_APPR_LVL_SEQ);

    IF V_APPR_LVL_SEQ = -1 THEN

        SELECT
            CASE
                WHEN IN_GUBUN = 'CODE' THEN CASE WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '9999' ELSE MAP_WF_PROC_CD END
                WHEN IN_GUBUN = 'NAME' THEN CASE WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '완료' ELSE REPLACE(WF_PROC_NM, '\n', ' ') END --매핑진행단계명
            END
        INTO V_MAP_WF_PROC_VAL
        FROM WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = IN_WF_PROC_CD
        ;
        
        --DBMS_OUTPUT.PUT_LINE('IF V_MAP_WF_PROC_VAL=>' || V_MAP_WF_PROC_VAL);
        RETURN V_MAP_WF_PROC_VAL;

    ELSE

        SELECT
            CASE
                WHEN IN_GUBUN = 'CODE' THEN CASE WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '9999' ELSE MAP_WF_PROC_CD END
                WHEN IN_GUBUN = 'NAME' THEN CASE WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '완료' ELSE REPLACE(APPR_NM, '\n', ' ') END --매핑진행단계명
            END
        INTO V_MAP_WF_PROC_VAL
        FROM WF_REQ_APPV_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = IN_WF_PROC_CD
        AND APPR_LVL_SEQ    = IN_APPR_LVL_SEQ
        ;
        --DBMS_OUTPUT.PUT_LINE('ELSE V_MAP_WF_PROC_VAL=>' || V_MAP_WF_PROC_VAL || ' IN_APPR_LVL_SEQ=>' || IN_APPR_LVL_SEQ);
        RETURN V_MAP_WF_PROC_VAL;

    END IF;
    
    RETURN '';

EXCEPTION
   WHEN NO_DATA_FOUND THEN
       RETURN '';
END;
/

CREATE OR REPLACE FUNCTION FN_SR_REQ_USER_EDIT_YN
(
    IN_REQ_ID       IN  VARCHAR2,   --요청서ID
    IN_USER_ID      IN  VARCHAR2,   --유저ID(현재 로그인 사용자)
    IN_WF_FUNC_CD   IN  VARCHAR2    --기능(/* 워크플로우기능[WF_FUNC_CD] - WF_FUNC_00 : 등록, WF_FUNC_01 : 결재, WF_FUNC_02 : 검토, WF_FUNC_04 : 담당자 */)
)RETURN  VARCHAR2
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : FN_SR_REQ_USER_EDIT_YN
    설명      : 요청서 진행단계에 따른 현재 사용자의 편집 가능여부을 구한다.
    작성자     작성일자         작성내용
    정보윤     2023.07.13      최초 작성
======================================================================================*/
V_REQ_TMPLAT_ID     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
V_REQ_TMPLAT_VER    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
V_WF_PROC_CD        SR_BASE_INFO.WF_PROC_CD%TYPE;
V_REQ_STAT_CD       SR_BASE_INFO.REQ_STAT_CD%TYPE;
V_REQ_USER_ID       SR_BASE_INFO.REQ_USER_ID%TYPE;
V_FIRST_WF_PROC_CD  WF_REQ_TMPLAT_PROC_HT.WF_PROC_CD%TYPE;

V_CGER_USER_ID      SR_CGER_DT.USER_ID%TYPE;
V_DAEJIC_USER_ID    FOMM_USER_MT.USER_ID%TYPE;
V_FUNC_EDIT_YN      VARCHAR2(1);
V_RVER_CNT          NUMBER;

BEGIN
        --처리시 필요한 컬럼 정보를 기본 정보 TBL에서 얻는다.
        SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, WF_PROC_CD, REQ_STAT_CD, REQ_USER_ID
        INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_WF_PROC_CD, V_REQ_STAT_CD, V_REQ_USER_ID
        FROM SR_BASE_INFO
        WHERE 1 = 1
        AND REQ_ID  = IN_REQ_ID
        ;

        BEGIN

            --WF프로세스 관리에 설정된 첫 단계를 추출한다.
            SELECT WF_PROC_CD
            INTO V_FIRST_WF_PROC_CD
            FROM WF_REQ_TMPLAT_PROC_HT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND SEQ             = 1
            ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RETURN 'N';
            WHEN OTHERS THEN
                RETURN 'N';
        END;

        /* 등록 단계인 경우 */
        IF V_WF_PROC_CD = V_FIRST_WF_PROC_CD THEN

            /* 워크플로우기능[WF_FUNC_CD] - WF_FUNC_00 : 등록, WF_FUNC_01 : 결재, WF_FUNC_02 : 검토, WF_FUNC_03 : 회람, WF_FUNC_04 : 담당자 */
            IF IN_WF_FUNC_CD = 'WF_FUNC_00' THEN

                IF V_REQ_USER_ID = IN_USER_ID THEN
                
                    /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
                    IF V_REQ_STAT_CD IN ('RQST00', 'RQST91') THEN
                        RETURN 'Y';
                    ELSE
                        RETURN 'N';
                    END IF;
    
                ELSE
                    RETURN 'N';
    
                END IF;

            ELSIF IN_WF_FUNC_CD = 'WF_FUNC_01' THEN
            
                /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
--                IF V_REQ_STAT_CD = 'RQST11' THEN
--                    RETURN 'Y';
--                ELSE
--                    RETURN 'N';
--                END IF;
                RETURN 'N';

            ELSIF IN_WF_FUNC_CD = 'WF_FUNC_02' THEN
            
                /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
--                IF V_REQ_STAT_CD = 'RQST21' THEN
--                    RETURN 'Y';
--                ELSE
--                    RETURN 'N';
--                END IF;
                RETURN 'N';

            ELSE
                RETURN 'N';

            END IF;

        /* 등록이 아닌 단계인 경우 */
        ELSE

            IF IN_WF_FUNC_CD = 'WF_FUNC_00' THEN
                RETURN 'N';

            ELSIF IN_WF_FUNC_CD = 'WF_FUNC_04' THEN   --담당자

                IF V_WF_PROC_CD = 'WF_PROC_9020' THEN   --만족도조사 단계인 경우
                
                    IF V_REQ_USER_ID = IN_USER_ID THEN
                        RETURN  'Y';
                    END IF;

                ELSE
                
                    IF V_REQ_STAT_CD IN ('RQST01', 'RQST91') THEN

                        FOR CUR IN(
        
                            SELECT USER_ID  AS CGER_USER_ID
                            --INTO V_CGER_USER_ID
                            FROM SR_CGER_DT
                            WHERE 1 = 1
                            AND REQ_ID      = IN_REQ_ID
                            AND WF_PROC_CD  = V_WF_PROC_CD
                            AND WF_FUNC_CD  = IN_WF_FUNC_CD
        
                        ) LOOP

                            IF CUR.CGER_USER_ID = IN_USER_ID THEN
                                RETURN  'Y';
                            END IF;
                        
                        END LOOP;

                    ELSE

                        RETURN  'N';

                    END IF;

                END IF;

                RETURN 'N';

            ELSE
                /*
                SELECT
                    RVER_CNT
                INTO V_RVER_CNT
                FROM
                     (
                     SELECT *
                     FROM WF_REQ_TMPLAT_PROC_HT
                     WHERE 1 = 1
                     AND REQ_TMPLAT_ID  = V_REQ_TMPLAT_ID
                     AND REQ_TMPLAT_VER = V_REQ_TMPLAT_VER
                     AND WF_PROC_CD     = V_WF_PROC_CD
                     ) A
                    ,SR_CGER_DT B
                WHERE 1 = 1
                AND A.WF_PROC_CD    = B.WF_PROC_CD
                AND B.REQ_ID        = IN_REQ_ID
                ;

                --워크플로우기능[WF_FUNC_CD] - WF_FUNC_00 : 등록, WF_FUNC_01 : 결재, WF_FUNC_02 : 검토, WF_FUNC_04 : 담당자
                SELECT
                    CASE WHEN IN_WF_FUNC_CD = 'WF_FUNC_01' OR IN_WF_FUNC_CD = 'WF_FUNC_02'
                         THEN FUNC_EDIT_YN
                         ELSE 'N'
                    END
                INTO V_FUNC_EDIT_YN
                FROM WF_REQ_TMPLAT_PROC_HT
                WHERE 1 = 1
                AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                AND WF_PROC_CD      = V_WF_PROC_CD
                ;
                RETURN V_FUNC_EDIT_YN;
                */
                RETURN 'N';

            END IF;

        END IF;

EXCEPTION
    WHEN OTHERS THEN
        RETURN 'N';
END;
/