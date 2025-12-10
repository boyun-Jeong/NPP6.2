--------------------------------------------------------
--  DDL for Function FN_GET_APPR_USERNM
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_GET_APPR_USERNM" 
(
    IN_REQ_ID           IN SR_BASE_INFO.REQ_ID%TYPE,
    IN_MAP_WF_PROC_CD   IN SR_BASE_INFO.MAP_WF_PROC_CD%TYPE
)
RETURN VARCHAR2
IS
/*======================================================================================
    시스템명  : WORKFLOW
    프로시저명 : FN_GET_APPR_USERNM
    설명      : 요청서의 승인대기 중인 대상을 구한다.
    작성자     작성일자     작성내용
    정보윤     2025.01.17  최초 작성
======================================================================================*/
V_STAFF_NM      VARCHAR2(100);
V_WF_PROC_CD    SR_BASE_INFO.WF_PROC_CD%TYPE;
V_COUNT         NUMBER;

BEGIN

    IF NVL(IN_MAP_WF_PROC_CD, ' ') <> ' ' THEN
        SELECT FN_SR_REQ_WF_PROC_CD(IN_REQ_ID, IN_MAP_WF_PROC_CD, 'WF_PROC_CD')
        INTO V_WF_PROC_CD
        FROM DUAL
        ;

    END IF;

    IF NVL(IN_MAP_WF_PROC_CD, ' ') <> ' ' THEN

        SELECT COUNT(*)
        INTO V_COUNT
        FROM WF_APPROVAL_MT
        WHERE REQ_ID        = IN_REQ_ID
        AND WF_PROC_CD      = V_WF_PROC_CD
        AND APPR_STAT_CD    = 'APST_01'
        ;

        IF V_COUNT = 0 THEN

            SELECT LISTAGG(USER_NM, ',') WITHIN GROUP (ORDER BY USER_NM)
            INTO V_STAFF_NM
            FROM
                WF_APPROVAL_MT
            WHERE 1 = 1
            AND REQ_ID      = IN_REQ_ID
            AND WF_PROC_CD  = V_WF_PROC_CD
            ;

        ELSE

            SELECT LISTAGG(USER_NM, ',') WITHIN GROUP (ORDER BY USER_NM)
            INTO V_STAFF_NM
            FROM
                (
                SELECT
                      C.*
                    , DENSE_RANK() OVER(PARTITION BY REQ_ID, WF_PROC_CD, APPR_LVL_SEQ, APPR_GRP_SEQ ORDER BY APPR_SEQ) AS RNK
                FROM
                    WF_APPROVAL_MT C

                WHERE 1 = 1
                AND C.REQ_ID        = IN_REQ_ID
                AND C.APPR_STAT_CD  = 'APST_01'
                AND C.APPR_LVL_SEQ =
                                    (
                                    SELECT MIN(APPR_LVL_SEQ)
                                      FROM WF_APPROVAL_MT
                                      WHERE 1 = 1
                                      AND REQ_ID         = C.REQ_ID
                                      AND WF_PROC_CD     = C.WF_PROC_CD
                                      AND APPR_STAT_CD   = C.APPR_STAT_CD
                                    )
                )
            WHERE RNK = 1
            ;

        END IF;

    ELSE

        SELECT LISTAGG(USER_NM, ',') WITHIN GROUP (ORDER BY USER_NM)
        INTO V_STAFF_NM
        FROM
            (
            SELECT
                  C.*
                , DENSE_RANK() OVER(PARTITION BY REQ_ID, WF_PROC_CD, APPR_LVL_SEQ, APPR_GRP_SEQ ORDER BY APPR_SEQ) AS RNK
            FROM
                WF_APPROVAL_MT C

            WHERE 1 = 1
            AND C.REQ_ID        = IN_REQ_ID

            AND C.APPR_STAT_CD  = 'APST_01'
            AND C.APPR_LVL_SEQ =
                                (
                                SELECT MIN(APPR_LVL_SEQ)
                                  FROM WF_APPROVAL_MT
                                  WHERE 1 = 1
                                  AND REQ_ID         = C.REQ_ID
                                  AND WF_PROC_CD     = C.WF_PROC_CD
                                  AND APPR_STAT_CD   = C.APPR_STAT_CD
                                )
            )
        WHERE RNK = 1
        ;

    END IF;

    RETURN V_STAFF_NM;

END;

/
--------------------------------------------------------
--  DDL for Function FN_GETCODEVALUE
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_GETCODEVALUE" 
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
--  DDL for Function FN_GETDATEFORMAT
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_GETDATEFORMAT" 
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
--------------------------------------------------------
--  DDL for Function FN_HEARIMTLKTRAN_MT_TRAN_SQ
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_HEARIMTLKTRAN_MT_TRAN_SQ" 
RETURN NUMBER IS V_TRAN_SQNO NUMBER;

BEGIN
  SELECT FOMM_HEARIMTLKTRAN_MT_TRAN_SQ.NEXTVAL INTO V_TRAN_SQNO FROM DUAL;
  RETURN V_TRAN_SQNO;
END;

/
--------------------------------------------------------
--  DDL for Function FN_MEMOTRAN_MT_TRAN_SQ
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_MEMOTRAN_MT_TRAN_SQ" 
RETURN NUMBER IS V_TRAN_SQNO NUMBER;

BEGIN
  SELECT FOMM_MEMOTRAN_MT_TRAN_SQ.NEXTVAL INTO V_TRAN_SQNO FROM DUAL;
  RETURN V_TRAN_SQNO;
END;

/
--------------------------------------------------------
--  DDL for Function FN_SMSTRAN_MT_TRAN_SQ
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_SMSTRAN_MT_TRAN_SQ" 
RETURN NUMBER IS V_TRAN_SQNO NUMBER;

BEGIN
  SELECT FOMM_SMSTRAN_MT_TRAN_SQ.NEXTVAL INTO V_TRAN_SQNO FROM DUAL;
  RETURN V_TRAN_SQNO;
END;

/
--------------------------------------------------------
--  DDL for Function FN_SR_REQ_MAP_WF_PROC
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_SR_REQ_MAP_WF_PROC" 
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
V_REQ_STAT_CD       SR_BASE_INFO.REQ_STAT_CD%TYPE;

V_MAP_WF_PROC_VAL   VARCHAR2(100);

BEGIN

    SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, MAP_PROC_CD, REQ_STAT_CD
    INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_MAP_PROC_CD, V_REQ_STAT_CD
    FROM
        SR_BASE_INFO
    WHERE 1 = 1
    AND REQ_ID = IN_REQ_ID
    ;

    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_ID=>' || V_REQ_TMPLAT_ID);
    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_VER=>' || V_REQ_TMPLAT_VER);

    IF IN_APPR_LVL_SEQ IS NULL THEN

        IF V_REQ_STAT_CD = 'RQST11' THEN

            SELECT NVL(MIN(APPR_LVL_SEQ), -1)
            INTO V_APPR_LVL_SEQ
            FROM WF_APPROVAL_MT
            WHERE REQ_ID = IN_REQ_ID
            AND APPR_STAT_CD = 'APST_01'
            ;

        ELSE
            V_APPR_LVL_SEQ := -1;
        END IF;

    ELSE
        V_APPR_LVL_SEQ := IN_APPR_LVL_SEQ;

    END IF;

    --DBMS_OUTPUT.PUT_LINE('V_APPR_LVL_SEQ=>' || V_APPR_LVL_SEQ);

    SELECT MAX(RTN_VAL)            
    INTO V_MAP_WF_PROC_VAL
    FROM
        (
        SELECT
            CASE
                WHEN IN_GUBUN = 'CODE' THEN CASE
                                                WHEN WF_PROC_CD = 'WF_PROC_9020' THEN '9990'
                                                WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '9999'
                                            ELSE MAP_WF_PROC_CD END
                WHEN IN_GUBUN = 'NAME' THEN CASE
                                                WHEN WF_PROC_CD = 'WF_PROC_9020' THEN '만족도조사'
                                                WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '완료'
                                                ELSE REPLACE(WF_PROC_NM, '\n', ' ') END --매핑진행단계명
            END AS RTN_VAL
        FROM
            WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = IN_WF_PROC_CD
        AND (
             (V_APPR_LVL_SEQ = - 1 AND 1 = 1) OR
             (V_APPR_LVL_SEQ > - 1 AND 1 <> 1)
            )
        
        UNION ALL
        
        SELECT
            CASE
                WHEN IN_GUBUN = 'CODE' THEN
                                            CASE
                                                WHEN M.WF_PROC_CD = 'WF_PROC_9020' THEN '9990'
                                                WHEN M.WF_PROC_CD = 'WF_PROC_9999' THEN '9999'
                                                ELSE A.MAP_WF_PROC_CD
                                            END
                WHEN IN_GUBUN = 'NAME' THEN
                                            CASE
                                                WHEN M.WF_PROC_CD = 'WF_PROC_9020' THEN '만족도조사'
                                                WHEN M.WF_PROC_CD = 'WF_PROC_9999' THEN '완료'
                                                ELSE REPLACE(M.WF_PROC_NM, '\n', ' ') || '(' || REPLACE(A.APPR_NM, '\n', ' ') || ')'
                                            END
            END AS RTN_VAL
        FROM
            WF_REQ_TMPLAT_PROC_HT M,
            WF_REQ_APPV_HT A

        WHERE 1 = 1
        AND M.REQ_TMPLAT_ID   = A.REQ_TMPLAT_ID
        AND M.REQ_TMPLAT_VER  = A.REQ_TMPLAT_VER
        AND M.WF_PROC_CD      = A.WF_PROC_CD
        AND A.REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND A.REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND A.WF_PROC_CD      = IN_WF_PROC_CD
        AND (
             (V_APPR_LVL_SEQ > - 1 AND APPR_LVL_SEQ = V_APPR_LVL_SEQ) OR
             (V_APPR_LVL_SEQ = - 1 AND 1 = 1)
            )
        AND NOT EXISTS
                (
                SELECT 1
                FROM
                    WF_REQ_TMPLAT_PROC_HT B
                WHERE 1 = 1
                AND B.REQ_TMPLAT_ID   = A.REQ_TMPLAT_ID
                AND B.REQ_TMPLAT_VER  = A.REQ_TMPLAT_VER
                AND B.WF_PROC_CD      = A.WF_PROC_CD
                AND B.REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                AND B.REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                AND B.WF_PROC_CD      = IN_WF_PROC_CD
                AND (
                     (V_APPR_LVL_SEQ = - 1 AND 1 = 1) OR
                     (V_APPR_LVL_SEQ > - 1 AND 1 <> 1)
                    )
                )
        )
    ;
    RETURN NVL(V_MAP_WF_PROC_VAL, ' ');

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN NVL(V_MAP_WF_PROC_VAL, ' ');
    WHEN OTHERS THEN
        RETURN NVL(V_MAP_WF_PROC_VAL, ' ');
END;

/
--------------------------------------------------------
--  DDL for Function FN_SR_REQ_MAP_WF_PROC_TEST
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_SR_REQ_MAP_WF_PROC_TEST" 
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
V_REQ_STAT_CD       SR_BASE_INFO.REQ_STAT_CD%TYPE;

V_MAP_WF_PROC_VAL   VARCHAR2(100);

BEGIN

    SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, MAP_PROC_CD, REQ_STAT_CD
    INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_MAP_PROC_CD, V_REQ_STAT_CD
    FROM
        SR_BASE_INFO
    WHERE 1 = 1
    AND REQ_ID = IN_REQ_ID
    ;

    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_ID=>' || V_REQ_TMPLAT_ID);
    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_VER=>' || V_REQ_TMPLAT_VER);

    IF IN_APPR_LVL_SEQ IS NULL THEN

        IF V_REQ_STAT_CD = 'RQST11' THEN

            SELECT NVL(MIN(APPR_LVL_SEQ), -1)
            INTO V_APPR_LVL_SEQ
            FROM WF_APPROVAL_MT
            WHERE REQ_ID = IN_REQ_ID
            AND APPR_STAT_CD = 'APST_01'
            ;

        ELSE
            V_APPR_LVL_SEQ := -1;
        END IF;

    ELSE
        V_APPR_LVL_SEQ := IN_APPR_LVL_SEQ;

    END IF;

    --DBMS_OUTPUT.PUT_LINE('V_APPR_LVL_SEQ=>' || V_APPR_LVL_SEQ);

    SELECT MAX(RTN_VAL)            
    INTO V_MAP_WF_PROC_VAL
    FROM
        (
        SELECT
            CASE
                WHEN IN_GUBUN = 'CODE' THEN CASE
                                                WHEN WF_PROC_CD = 'WF_PROC_9020' THEN '9990'
                                                WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '9999'
                                            ELSE MAP_WF_PROC_CD END
                WHEN IN_GUBUN = 'NAME' THEN CASE
                                                WHEN WF_PROC_CD = 'WF_PROC_9020' THEN '만족도조사'
                                                WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '완료'
                                                ELSE REPLACE(WF_PROC_NM, '\n', ' ') END --매핑진행단계명
            END AS RTN_VAL
        FROM
            WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = IN_WF_PROC_CD
        AND (
             (V_APPR_LVL_SEQ = - 1 AND 1 = 1) OR
             (V_APPR_LVL_SEQ > - 1 AND 1 <> 1)
            )

        UNION ALL

        SELECT
            CASE
                WHEN IN_GUBUN = 'CODE' THEN
                                            CASE
                                                WHEN WF_PROC_CD = 'WF_PROC_9020' THEN '9990'
                                                WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '9999'
                                                ELSE MAP_WF_PROC_CD
                                            END
                WHEN IN_GUBUN = 'NAME' THEN
                                            CASE
                                                WHEN WF_PROC_CD = 'WF_PROC_9020' THEN '만족도조사'
                                                WHEN WF_PROC_CD = 'WF_PROC_9999' THEN '완료'
                                                ELSE REPLACE(APPR_NM, '\n', ' ')
                                            END
            END AS RTN_VAL
        FROM
            WF_REQ_APPV_HT A
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = IN_WF_PROC_CD
        AND (
             (V_APPR_LVL_SEQ > - 1 AND APPR_LVL_SEQ = V_APPR_LVL_SEQ) OR
             (V_APPR_LVL_SEQ = - 1 AND 1 = 1)
            )
        AND NOT EXISTS
                (
                SELECT 1
                FROM
                    WF_REQ_TMPLAT_PROC_HT B
                WHERE 1 = 1
                AND B.REQ_TMPLAT_ID   = A.REQ_TMPLAT_ID
                AND B.REQ_TMPLAT_VER  = A.REQ_TMPLAT_VER
                AND B.WF_PROC_CD      = A.WF_PROC_CD
                AND B.REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                AND B.REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                AND B.WF_PROC_CD      = IN_WF_PROC_CD
                AND (
                     (V_APPR_LVL_SEQ = - 1 AND 1 = 1) OR
                     (V_APPR_LVL_SEQ > - 1 AND 1 <> 1)
                    )
                )
        )
    ;
    RETURN NVL(V_MAP_WF_PROC_VAL, ' ');

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN NVL(V_MAP_WF_PROC_VAL, ' ');
    WHEN OTHERS THEN
        RETURN NVL(V_MAP_WF_PROC_VAL, ' ');
END;

/
--------------------------------------------------------
--  DDL for Function FN_SR_REQ_WF_PROC_CD
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."FN_SR_REQ_WF_PROC_CD" 
(
    IN_REQ_ID           IN SR_BASE_INFO.REQ_ID%TYPE,            --요청서ID
    IN_MAP_WF_PROC_CD   IN SR_BASE_INFO.WF_PROC_CD%TYPE,        --매핑단계코드
    IN_COLUMN_NM        IN VARCHAR2                             --'WF_PROC_CD', 'WF_PROC_NM', 'MAP_WF_PROC_NM'
)
RETURN VARCHAR2
IS
/*======================================================================================
    시스템명   : WORKFLOW
    프로시저명 : FN_SR_REQ_WF_PROC_CD
    설명       : 요청서 매핑코드에 해당하는 단계를 구하여 리턴한다.
    작성자     작성일자     작성내용
    정보윤     2025.01.17  최초 작성
======================================================================================*/
V_REQ_TMPLAT_ID     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
V_REQ_TMPLAT_VER    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
V_MAP_PROC_CD       WF_REQ_TMPLAT_HT.MAP_PROC_CD%TYPE;
V_MAP_WF_PROC_VAL   VARCHAR2(100);

BEGIN

    SELECT REQ_TMPLAT_ID, REQ_TMPLAT_VER, MAP_PROC_CD
    INTO V_REQ_TMPLAT_ID, V_REQ_TMPLAT_VER, V_MAP_PROC_CD
    FROM
        SR_BASE_INFO
    WHERE 1 = 1
    AND REQ_ID = IN_REQ_ID
    ;

    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_ID=>' || V_REQ_TMPLAT_ID);
    --DBMS_OUTPUT.PUT_LINE('V_REQ_TMPLAT_VER=>' || V_REQ_TMPLAT_VER);

    IF IN_COLUMN_NM = 'MAP_WF_PROC_NM' THEN

        SELECT CMM_CD_NM
        INTO V_MAP_WF_PROC_VAL
        FROM
            FOMM_CMM_CD_MT
        WHERE 1 = 1
        AND CODE_DIV    = 'WORKFLOW_CD'
        AND UP_CMM_CD   = V_MAP_PROC_CD
        AND CMM_CD      = IN_MAP_WF_PROC_CD
        ;        
        RETURN V_MAP_WF_PROC_VAL;

    ELSIF IN_COLUMN_NM = 'WF_PROC_CD' THEN

        SELECT MAX(WF_PROC_CD)
        INTO V_MAP_WF_PROC_VAL
        FROM
            (
            SELECT WF_PROC_CD        
            FROM
                WF_REQ_TMPLAT_PROC_HT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND MAP_WF_PROC_CD  = IN_MAP_WF_PROC_CD

            UNION ALL

            SELECT WF_PROC_CD
            FROM
                WF_REQ_APPV_HT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND MAP_WF_PROC_CD  = IN_MAP_WF_PROC_CD
            )
        ;

    ELSIF IN_COLUMN_NM = 'WF_PROC_NM' THEN

        SELECT
            NVL(
                (
                SELECT MAX(REPLACE(WF_PROC_NM, '\n', ' '))
                FROM
                    (
                    SELECT WF_PROC_NM
                    FROM
                        WF_REQ_TMPLAT_PROC_HT
                    WHERE 1 = 1
                    AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                    AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                    AND MAP_WF_PROC_CD  = IN_MAP_WF_PROC_CD

                    UNION ALL

                    SELECT REPLACE(A.WF_PROC_NM, '\n', ' ') || '(' || REPLACE(B.APPR_NM, '\n', ' ') || ')'
                    FROM
                        WF_REQ_TMPLAT_PROC_HT A,
                        WF_REQ_APPV_HT B
                    WHERE 1 = 1
                    AND A.REQ_TMPLAT_ID   = B.REQ_TMPLAT_ID
                    AND A.REQ_TMPLAT_VER  = B.REQ_TMPLAT_VER
                    AND A.WF_PROC_CD      = B.WF_PROC_CD
                    AND B.REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                    AND B.REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                    AND B.MAP_WF_PROC_CD  = IN_MAP_WF_PROC_CD
                    )
                ),
                (
                SELECT CMM_CD_NM
                FROM FOMM_CMM_CD_MT
                WHERE 1 = 1
                AND LANG_CD     = 'KR'
                AND CODE_DIV    = 'WORKFLOW_CD'
                AND UP_CMM_CD   = V_MAP_PROC_CD
                AND CMM_CD      = IN_MAP_WF_PROC_CD
                )
            )
        INTO V_MAP_WF_PROC_VAL
        FROM DUAL
        ;

    END IF;

    RETURN NVL(V_MAP_WF_PROC_VAL, ' ');

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN NVL(V_MAP_WF_PROC_VAL, ' ');
    WHEN OTHERS THEN
        RETURN NVL(V_MAP_WF_PROC_VAL, ' ');
END;

/
--------------------------------------------------------
--  DDL for Function PT_GETCODENM
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."PT_GETCODENM" (
      V_CODE_ID in FOMM_CMM_CD_MT.CMM_CD%TYPE
    )
RETURN VARCHAR2 IS
  v_code_nm varchar2(100);
  /*
  사용 방법 - 코드를 넣으면 코드명을 리턴 한다.
  select PT_GETCODENM('APPL0B00') from dual
  */
BEGIN
  select max(CMM_CD_NM) into v_code_nm
    from FOMM_CMM_CD_MT
  where CMM_CD = V_CODE_ID;
  RETURN v_code_nm;
END;

/
--------------------------------------------------------
--  DDL for Function PT_GETDEPTNM
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "ITSM2"."PT_GETDEPTNM" (
  V_DEPT_CD IN FOMM_DEPT_MT.DEPT_CD%TYPE
)
  RETURN VARCHAR2 IS V_DEPT_NM FOMM_DEPT_MT.DEPT_NM%TYPE;

BEGIN

  SELECT DEPT_NM
  INTO   V_DEPT_NM
  FROM   FOMM_DEPT_MT
  WHERE  DEPT_CD = V_DEPT_CD; 

  RETURN V_DEPT_NM;

END;

/