--------------------------------------------------------
--  파일이 생성됨 - 수요일-9월-06-2023   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_APPROVE
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "SPP_HI20"."PR_SR_REQ_WF_PROC_APPROVE" 
(
    pi_req_id           IN VARCHAR2,    -- 요청서ID
    pi_wf_proc_cd       IN VARCHAR2,    -- 현재단계
    pi_next_wf_proc_cd  IN VARCHAR2,    -- 다음단계(개발자가 지정해준 다음 단계 PARAM)
    pi_user_id          IN VARCHAR2,    -- 결재자(로그인 사번)
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
v_user_nm           WF_PROC_HIST.SRM_USER_NM%TYPE;
v_req_tmplat_id     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
v_req_tmplat_ver    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
v_appr_gbn_cd       WF_PROC_HIST.APPR_GBN_CD%TYPE;
v_req_stat_cd       SR_BASE_INFO.REQ_STAT_CD%TYPE;      -- RQST11:결재중, RQST21:검토중   // 상태 check && 결재/검토 구분용
v_pos_cd            FOMM_USER_MT.POS_CD%TYPE;
v_pos_nm            WF_PROC_HIST.SRM_JBC_JNAME%TYPE;
v_dept_cd           FOMM_USER_MT.DEPT_CD%TYPE;
v_dept_nm           WF_PROC_HIST.SRM_DEPT_NM%TYPE;
v_cnt_temp          NUMBER := -1;   -- cnt 비교용 임시변수
v_cnt_total         NUMBER := -1;   -- 결재/검토 승인 수 확인용 cnt


BEGIN
    dbms_output.put_line('pi_req_id : ' || pi_req_id);
    dbms_output.put_line('pi_wf_proc_cd : ' || pi_wf_proc_cd);
    dbms_output.put_line('pi_next_wf_proc_cd : ' || pi_next_wf_proc_cd);
    dbms_output.put_line('pi_user_id : ' || pi_user_id);
    dbms_output.put_line('pi_appr_desc : ' || pi_appr_desc);
    dbms_output.put_line('pi_lmpid : ' || pi_lmpid);
    
    /* 최초 PARAM에 의한 미승인 결재자가 있는 지 확인 */
    BEGIN
        SELECT    REQ_TMPLAT_ID,    REQ_TMPLAT_VER,     REQ_STAT_CD
        INTO      v_req_tmplat_id,  v_req_tmplat_ver,   v_req_stat_cd
        FROM      SR_BASE_INFO
        WHERE     1=1
        AND       REQ_ID        = pi_req_id
        AND       WF_PROC_CD    = pi_wf_proc_cd
        ;
        
        IF( v_req_stat_cd = 'RQST11' ) THEN     -- 결재중
            BEGIN
            SELECT    A.USER_NM,  A.POS_NM,   A.DEPT_NM,  A.APPR_GBN_CD
            INTO      v_user_nm,  v_pos_nm,   v_dept_nm,  v_appr_gbn_cd
            FROM      WF_APPROVAL_MT A
                    , SR_BASE_INFO B
            WHERE     1=1
            AND       A.REQ_ID          = B.REQ_ID
            
            AND       A.APPR_STAT_CD    = 'APST_01'
            AND       A.REQ_ID          = pi_req_id
            AND       A.WF_PROC_CD      = pi_wf_proc_cd
            AND       A.USER_ID         = pi_user_id
            AND       B.REQ_STAT_CD     = v_req_stat_cd
            ;
            EXCEPTION
            WHEN NO_DATA_FOUND THEN
                po_rtn_cd  := -1;
                po_rtn_msg := '해당 조건의 결재자가 없습니다.';
                DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
                RETURN;
            WHEN OTHERS THEN
                po_rtn_cd  := -1;
                po_rtn_msg := '결재자 확인 중 오류 발생';
                DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
                RETURN;
            END;
        ELSE -- 검토중
            BEGIN
            SELECT  USER_NM,    POS_CD,     POS_NM,     DEPT_CD,    DEPT_NM,    'R01' AS APPR_GBN_CD
            INTO    v_user_nm,  v_pos_cd,   v_pos_nm,   v_dept_cd,  v_dept_nm,  v_appr_gbn_cd
            FROM    FOMM_USER_MT
            WHERE   USER_ID = pi_user_id
            ;
        END;
        END IF;
    END;


    /* 결재승인 && 이력 처리 */
    BEGIN
        /* 결재자 승인 처리 */
        MERGE 
		INTO	WF_APPROVAL_MT A
		USING 	DUAL
		ON		(A.REQ_ID = pi_req_id AND A.WF_PROC_CD = pi_wf_proc_cd AND USER_ID = pi_user_id)
		
		WHEN MATCHED THEN
            UPDATE    
            SET       APPR_STAT_CD  = 'APST_99'
                    , APPR_STIME    = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                    , APPR_DESC	    = pi_appr_desc
            WHERE     REQ_ID        = pi_req_id
            AND       WF_PROC_CD    = pi_wf_proc_cd
            AND       USER_ID       = pi_user_id
            
        WHEN NOT MATCHED THEN
            INSERT
            (
                  REQ_ID
                , WF_PROC_CD
                , APPR_SEQ
                , APPR_STAT_CD
                , APPR_GBN_CD
                , USER_ID
                , USER_NM
                , DEPT_CD
                , DEPT_NM
                , POS_NM
                , APPR_STIME
                , APPR_DESC
                , REG_TIME
                , DAEJIC_USER_ID
                , DAEJIC_USER_NM
                , DAEJIC_DEPT_CD
                , DAEJIC_DEPT_NM
                , DAEJIC_POS_NM
            )
            VALUES
            (
                  pi_req_id
                , pi_wf_proc_cd
                , (SELECT NVL(MAX(APPR_SEQ), 0)+1 FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd)
                , 'APST_99' -- 결재상태 승인
                , v_appr_gbn_cd
                , pi_user_id
                , v_user_nm
                , v_dept_cd
                , v_dept_nm
                , v_pos_nm
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , pi_appr_desc
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , ''
                , ''
                , ''
                , ''
                , ''
            )
        ;

        /* 결재 HISTORY 생성 */
        INSERT INTO WF_PROC_HIST
		(
			  PROC_NUMBER	--프로세스번호
			, WF_HIST_SEQ	--히스토리키값
			, WF_PROC_CD	--워크플로우단계코드
			, APPR_STAT_CD	--승인상태
			, APPR_COMMENT	--승인/반려의견
			, APPR_GBN_CD	--결재자구분코드
			, SRM_USER_ID	--처리이력변경 사용자ID
			, SRM_USER_NM	--처리이력변경 사용자
			, SRM_JBC_JNAME	--처리이력변경 사용자 직명
			, SRM_DEPT_NM	--처리이력변경 사용자 팀명
			, REG_STIME	    --등록일시
		)
		VALUES
		(
			  pi_req_id
			, (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = pi_req_id)
			, pi_wf_proc_cd
			, 'APST_99'
			, pi_appr_desc
			, v_appr_gbn_cd
			, pi_user_id
			, v_user_nm
			, v_pos_nm
			, v_dept_nm
			, TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
		)
        ;

        EXCEPTION
        WHEN OTHERS THEN
            po_rtn_cd  := -1;
            po_rtn_msg := '승인처리중 오류 발생';
            DBMS_OUTPUT.PUT_LINE(SQLERRM);
            ROLLBACK;
            RETURN;
    END;


    -- 1. 결재
    IF (v_req_stat_cd = 'RQST11')  THEN
        /* 비교처리용 총 결재 수 확인 */
        SELECT    COUNT(*)
        INTO      v_cnt_temp
        FROM      WF_APPROVAL_MT
        WHERE     1=1
        AND       REQ_ID        = pi_req_id
        AND       WF_PROC_CD    = pi_wf_proc_cd
        ;
    -- 2. 검토
    ELSIF(v_req_stat_cd = 'RQST21') THEN
        /* 다음단계 진행을 위한 총 검토 수 확인 */
        SELECT    RVER_CNT
        INTO      v_cnt_temp
        FROM      WF_REQ_TMPLAT_PROC_DT
        WHERE     1=1
        AND       REQ_TMPLAT_ID     = v_req_tmplat_id
        AND       REQ_TMPLAT_VER    = v_req_tmplat_ver
        AND       WF_PROC_CD        = pi_wf_proc_cd
        ;
    END IF;
    
    /* 결재/검토된 건 수 확인 */
    SELECT    COUNT(*)
    INTO      v_cnt_total
    FROM      WF_APPROVAL_MT
    WHERE     REQ_ID = pi_req_id
    AND       WF_PROC_CD = pi_wf_proc_cd
    AND       APPR_STAT_CD = 'APST_99'     -- APST_99:승인;  결재된
    ;
    dbms_output.put_line('승인완료 : ' || v_cnt_total || '/' || v_cnt_temp);
    /* 승인 완료인지 확인 */
    IF (v_cnt_total = v_cnt_temp) THEN
        DECLARE
            v_rtn_cd            NUMBER(10, 0);      -- PR_SR_REQ_WF_PROC_APPROVE() return code
            v_rtn_msg           VARCHAR2(4000);     -- PR_SR_REQ_WF_PROC_APPROVE() return message
        BEGIN
            UPDATE    SR_BASE_INFO
            SET       REQ_STAT_CD = 'RQST30'    -- RQST30:승인완료
            WHERE     REQ_ID = pi_req_id
            ;
            
            PR_SR_REQ_WF_PROC_NEXT(pi_req_id, pi_user_id, pi_next_wf_proc_cd, pi_lmpid, v_rtn_cd, v_rtn_msg);
            DBMS_OUTPUT.PUT_LINE('PR_SR_REQ_WF_PROC_NEXT :: ' || v_rtn_cd || ' :: ' || v_rtn_msg);
            IF(v_rtn_cd != 0) THEN
                po_rtn_cd  := -1;
                po_rtn_msg := v_rtn_msg;
                DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
                ROLLBACK;
                RETURN;
            END IF;
        END;
    END IF;
    
    
/* end procedure */
po_rtn_cd   := 0;
po_rtn_msg  := '정상 처리 되었습니다.';
DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_BACK
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "SPP_HI20"."PR_SR_REQ_WF_PROC_BACK" 
(
    pi_req_id           IN VARCHAR2,    -- 요청서ID
    pi_wf_proc_cd       IN VARCHAR2,    -- 현재단계
    pi_rtrn_div         IN VARCHAR2,    -- 반려구분( RTRN:결재반려 or SCREEN_RTRN:화면(접수)반려 )
    pi_appr_desc        IN VARCHAR2,    -- 결재의견
    pi_user_id          IN VARCHAR2,    -- 반려자(로그인 사번)
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
v_rtrn_wf_proc_cd   SR_BASE_INFO.WF_PROC_CD%TYPE;

BEGIN
    DBMS_OUTPUT.PUT_LINE('PROC_BACK START');
    DBMS_OUTPUT.PUT_LINE('pi_req_id : ' || pi_req_id || ' pi_wf_proc_cd : ' || pi_wf_proc_cd || ' pi_rtrn_div : ' || pi_rtrn_div || ' pi_user_id : ' || pi_user_id);
    /* 1. 반려 단계 구하기 */
    /* RQST11:결재중 -> RTRN, RQST21:검토중*/
    BEGIN
        SELECT  DECODE(pi_rtrn_div, 'RTRN', B.RTRN, 'SCREEN_RTRN', B.SCREEN_RTRN, NULL) AS RTRN_WF_PROC_CD
        INTO    v_rtrn_wf_proc_cd
        FROM    SR_BASE_INFO A
              , WF_REQ_TMPLAT_PROC_DT B
        WHERE   1=1
        AND     A.REQ_TMPLAT_ID = B.REQ_TMPLAT_ID
        AND     A.REQ_TMPLAT_VER = B.REQ_TMPLAT_VER
        AND     A.WF_PROC_CD = B.WF_PROC_CD
    
        AND     A.REQ_ID = pi_req_id
        ;
        EXCEPTION
        WHEN NO_DATA_FOUND THEN
            po_rtn_cd  := -1;
            po_rtn_msg := '해당 조건의 반려단계가 없습니다.';
            RETURN;
        WHEN OTHERS THEN
            po_rtn_cd  := -1;
            po_rtn_msg := '반려단계 구하기 실패';
            RETURN;
    END;
    
    BEGIN
        /* 2. SR_WF_PROC 반려단계까지 DELETE */
        DELETE
        FROM      SR_WF_PROC
        WHERE     REQ_ID = pi_req_id
        AND       SEQ > (SELECT SEQ 
                         FROM   SR_WF_PROC
                         WHERE  REQ_ID      = pi_req_id
                         AND    WF_PROC_CD  = pi_wf_proc_cd)
        ;

        /* 3. SR_BASE_INFO Update */
        UPDATE    SR_BASE_INFO
        SET       WF_PROC_CD    = v_rtrn_wf_proc_cd
                , REQ_STAT_CD   = 'RQST91'      -- 반려
                , LMID          = pi_user_id
                , LM_USER_NM    = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , LM_DEPT_CD    = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , LM_DEPT_NM    = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , LMDT          = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , LMPID         = pi_lmpid
        WHERE     REQ_ID        = pi_req_id
        ;
    
        EXCEPTION
        WHEN OTHERS THEN
            po_rtn_cd  := -1;
            po_rtn_msg := '반려단계로 이동 실패';
            ROLLBACK;
            RETURN;
    END;
    
    IF( pi_rtrn_div = 'SCREEN_RTRN' ) THEN
        BEGIN
            /* 반려 HISTORY 생성 */
            INSERT INTO WF_PROC_HIST
            (
                  PROC_NUMBER	--프로세스번호
                , WF_HIST_SEQ	--히스토리키값
                , WF_PROC_CD	--워크플로우단계코드
                , APPR_STAT_CD	--승인상태
                , APPR_COMMENT	--승인/반려의견
                , APPR_GBN_CD	--결재자구분코드
                , SRM_USER_ID	--처리이력변경 사용자ID
                , SRM_USER_NM	--처리이력변경 사용자
                , SRM_JBC_JNAME	--처리이력변경 사용자 직명
                , SRM_DEPT_NM	--처리이력변경 사용자 팀명
                , REG_STIME	    --등록일시
            )
            VALUES
            (
                  pi_req_id
                , (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = pi_req_id)
                , pi_wf_proc_cd
                , 'APST_00'     -- 반려
                , pi_appr_desc
                , 'A01'     -- 기안자(접수자/최초등록자)
                , pi_user_id
                , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
                , TO_CHAR(SYSDATE, 'YYYYHHDDHH24MISS')
            )
            ;
            EXCEPTION
            WHEN OTHERS THEN
                po_rtn_cd  := -1;
                po_rtn_msg := '반려처리중 오류 발생';
                ROLLBACK;
                RETURN;
        END;
    END IF;
    

/* END PROCEDURE */    
po_rtn_cd   := 0;
po_rtn_msg  := '정상 처리 되었습니다.';
DBMS_OUTPUT.PUT_LINE('END OF BACK :: ' || po_rtn_msg);
RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_NEXT
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "SPP_HI20"."PR_SR_REQ_WF_PROC_NEXT" 
(
    IN_REQ_ID           IN VARCHAR2,    -- 요청서ID
    IN_USER_ID          IN VARCHAR2,    -- 등록자
    IN_NEXT_WF_PROC_CD  IN VARCHAR2,    -- 다음단계(개발자가 지정해준 다음 단계 PARAM)
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
V_FUNC              WF_REQ_TMPLAT_PROC_DT.FUNC%TYPE;            --단계 기능
V_NEXT_WF_PROC_CD   SR_WF_PROC.NEXT_WF_PROC_CD%TYPE;            --조회를 통해 구한 다음 진행단계
V_NEXT_WF_PROC_CD2  WF_REQ_TMPLAT_PROC_DT.NEXT_WF_PROC_CD%TYPE; --다음 진행 단계의 다음 진행 단계
V_SCREEN_RTRN       WF_REQ_TMPLAT_PROC_DT.SCREEN_RTRN%TYPE;     --다음 진행 단계의 반려 단계
V_SCREEN_RTRN2      WF_REQ_TMPLAT_PROC_DT.SCREEN_RTRN%TYPE;     --다음 진행 단계의 다음 진행 단계에 대한 반려 단계

EX_NO_NEXT_WF_PROC_CD1 EXCEPTION;
EX_NO_NEXT_WF_PROC_CD2 EXCEPTION;
EX_NO_NEXT_WF_PROC_CD3 EXCEPTION;

BEGIN

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
            OUT_RTN_CD := -1;
            OUT_RTN_MSG := '기본 정보 조회시 오류 발생';
            RETURN;
    END;
    
    DBMS_OUTPUT.PUT_LINE('1단계 V_REQ_TMPLAT_ID : ' || V_REQ_TMPLAT_ID || ' V_REQ_TMPLAT_VER : ' || V_REQ_TMPLAT_VER ||
                         ' V_WF_PROC_CD : ' || V_WF_PROC_CD ||  ' V_REQ_STAT_CD : ' || V_REQ_STAT_CD );
    
    --개발자가 지정할 다음 단계 값이 존재하는 경우
    IF IN_NEXT_WF_PROC_CD IS NOT NULL THEN

        --파라미터로 넘어온 다음 단계가 실제 워크플로우에 존재하는 단계인지 검증
        BEGIN

            SELECT WF_PROC_CD
            INTO V_NEXT_WF_PROC_CD
            FROM WF_REQ_TMPLAT_PROC_DT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND WF_PROC_CD      = IN_NEXT_WF_PROC_CD
            ;
            
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                OUT_RTN_CD := -2;
                OUT_RTN_MSG := '다음 진행 단계 조회시 오류 발생 NO_DATA';
                RETURN;
            WHEN OTHERS THEN
                OUT_RTN_CD := -2;
                OUT_RTN_MSG := '다음 진행 단계 조회시 오류 발생';
                RETURN;
        END;
        
        DBMS_OUTPUT.PUT_LINE('2단계 V_NEXT_WF_PROC_CD : ' || V_NEXT_WF_PROC_CD  );

    --개발자가 지정할 다음 단계 값이 존재하지 않는 경우
    ELSE

        --현재 진행 단계에서 다음 단계를 구한다.        
        BEGIN

            SELECT NEXT_WF_PROC_CD
            INTO V_NEXT_WF_PROC_CD
            FROM WF_REQ_TMPLAT_PROC_DT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND WF_PROC_CD      = V_WF_PROC_CD
            ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                OUT_RTN_CD := -3;
                OUT_RTN_MSG := '현재 단계에 해당하는 다음 진행에 조회시 오류 발생 NO_DATA';
                RETURN;
            WHEN OTHERS THEN
                OUT_RTN_CD := -3;
                OUT_RTN_MSG := '현재 단계에 해당하는 다음 진행에 조회시 오류 발생';
                RETURN;
        END;
        
        DBMS_OUTPUT.PUT_LINE('3단계 V_NEXT_WF_PROC_CD : ' || V_NEXT_WF_PROC_CD  );

        --다음 단계가 파라미터로 넘어오지도 않고 구할 수도 없으면 예외를 발생
        IF V_NEXT_WF_PROC_CD = '' OR V_NEXT_WF_PROC_CD IS NULL OR INSTR(V_NEXT_WF_PROC_CD, ',') > 0 THEN
            RAISE EX_NO_NEXT_WF_PROC_CD1;
        END IF;

    END IF;

    --현재 단계의 다음 단계를 정상적으로 구한 경우 다음 단계의 반려 단계를 구한다.
    BEGIN

        SELECT SCREEN_RTRN
        INTO V_SCREEN_RTRN
        FROM WF_REQ_TMPLAT_PROC_DT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
        AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
        AND WF_PROC_CD      = V_NEXT_WF_PROC_CD
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            OUT_RTN_CD := -4;
            OUT_RTN_MSG := '다음 진행에 해당하는 반려 단계 조회시 오류 발생 NO_DATA';
            RETURN;
        WHEN OTHERS THEN
            OUT_RTN_CD := -4;
            OUT_RTN_MSG := '다음 진행에 해당하는 반려 단계 조회시 오류 발생';
            RETURN;
    END;
    
    DBMS_OUTPUT.PUT_LINE('4단계 V_SCREEN_RTRN : ' || V_SCREEN_RTRN );

    BEGIN

        MERGE
        INTO	SR_WF_PROC A
        USING 	DUAL
        ON		(A.REQ_ID = IN_REQ_ID AND A.WF_PROC_CD = V_WF_PROC_CD)
    
        WHEN MATCHED THEN
            UPDATE
            SET
                 NEXT_WF_PROC_CD    = V_NEXT_WF_PROC_CD
                ,RTN_WF_PROC_CD     = V_SCREEN_RTRN
                ,SEQ                = 
                                        (
                                        SELECT SEQ
                                        FROM WF_REQ_TMPLAT_PROC_DT B
                                        WHERE 1 = 1
                                        AND B.REQ_TMPLAT_ID    = V_REQ_TMPLAT_ID
                                        AND B.REQ_TMPLAT_VER   = V_REQ_TMPLAT_VER
                                        AND WF_PROC_CD         = V_WF_PROC_CD
                                        )
                ,LMID			    = IN_USER_ID
                ,LMDT			    = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                  
        WHEN NOT MATCHED THEN
            INSERT 
            (
                 REQ_ID
                ,WF_PROC_CD
                ,SEQ
                ,NEXT_WF_PROC_CD
                ,RTN_WF_PROC_CD
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
                 FROM WF_REQ_TMPLAT_PROC_DT B
                 WHERE 1 = 1
                 AND B.REQ_TMPLAT_ID    = V_REQ_TMPLAT_ID
                 AND B.REQ_TMPLAT_VER   = V_REQ_TMPLAT_VER
                 AND WF_PROC_CD         = V_WF_PROC_CD
                 )
                ,V_NEXT_WF_PROC_CD
                ,V_SCREEN_RTRN
                ,IN_USER_ID
                ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                ,IN_USER_ID
                ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            )
        ;

    END;

    /* 현재 진행 단계에서 다음 단계로 넘어가기 전 존재하는 기능을 조회 */
    BEGIN

        SELECT DECODE(B.REQ_STAT_CD, 'RQST30', 'APPR_FIN', FUNC) AS FUNC
        INTO V_FUNC
        FROM WF_REQ_TMPLAT_PROC_DT A
             , SR_BASE_INFO B
        WHERE 1 = 1   
        AND A.REQ_TMPLAT_ID     = B.REQ_TMPLAT_ID
        AND A.REQ_TMPLAT_VER    = B.REQ_TMPLAT_VER
        AND A.WF_PROC_CD        = B.WF_PROC_CD
        AND B.REQ_ID            = IN_REQ_ID
        ;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            OUT_RTN_CD := -5;
            OUT_RTN_MSG := '워크플로우 체크시 오류 발생';
            RETURN;
        WHEN OTHERS THEN
            OUT_RTN_CD := -5;
            OUT_RTN_MSG := '워크플로우 체크시 오류 발생';
            RETURN;
    END;
    
    DBMS_OUTPUT.PUT_LINE('5단계 V_FUNC : ' || V_FUNC );

    --기능이 결재,검토가 아닌 경우 바로 다음 단계를 조회
    IF NVL(V_FUNC, ' ') <> 'WF_FUNC_01' AND NVL(V_FUNC, ' ') <> 'WF_FUNC_02' THEN   /* WF_FUNC_01 : 결재, WF_FUNC_02 : 검토, WF_FUNC_04 : 담당자 */

        BEGIN

            SELECT NEXT_WF_PROC_CD
            INTO V_NEXT_WF_PROC_CD
            FROM SR_WF_PROC
            WHERE 1 = 1
            AND REQ_ID      = IN_REQ_ID
            AND WF_PROC_CD  = V_WF_PROC_CD
            ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                OUT_RTN_CD := -6;
                OUT_RTN_MSG := '현재 단계의 다음 단계 조회시 오류 발생';
                RETURN;
            WHEN OTHERS THEN
                OUT_RTN_CD := -6;
                OUT_RTN_MSG := '현재 단계의 다음 단계 조회시 오류 발생';
                RETURN;
        END;
        
        DBMS_OUTPUT.PUT_LINE('6단계 V_NEXT_WF_PROC_CD : ' || V_NEXT_WF_PROC_CD );
        
        IF V_NEXT_WF_PROC_CD IS NOT NULL THEN

            BEGIN
            
                /* 기본정보의 WF_PROC_CD를 자동으로 다음 단계로 처리해준다. */
                UPDATE SR_BASE_INFO SET
                     /* 워크플로우단계[WF_PROC_CD] - WF_PROC_1000 : 등록, WF_PROC_2000 : 접수, WF_PROC_3000 : 처리, WF_PROC_9000 : 완료, WF_PROC_9999 : 종료 */
                     WF_PROC_CD     = V_NEXT_WF_PROC_CD
                     /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
                    ,REQ_STAT_CD    = CASE WHEN V_NEXT_WF_PROC_CD = 'WF_PROC_9999' THEN 'RQST99' ELSE 'RQST01' END
                    ,LMID           = IN_USER_ID
                    ,LM_USER_NM     = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    ,LM_DEPT_CD     = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    ,LM_DEPT_NM     = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                    ,LMDT           = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                    ,LMPID          = IN_LMPID
                WHERE 1 = 1
                AND REQ_ID  = IN_REQ_ID
                ;

                DELETE FROM SR_REV_PROC
                WHERE 1 = 1
                AND REQ_ID      = IN_REQ_ID
                AND WF_PROC_CD  = V_NEXT_WF_PROC_CD
                ;
                
                DELETE FROM WF_APPROVAL_MT
                WHERE 1 = 1
                AND REQ_ID      = IN_REQ_ID
                AND WF_PROC_CD  = V_NEXT_WF_PROC_CD
                ;

            EXCEPTION
            WHEN OTHERS THEN
                DBMS_OUTPUT.PUT_LINE('SQLERRM : ' || SQLERRM);
                RETURN;
            END;

        ELSE
            RAISE EX_NO_NEXT_WF_PROC_CD2;
        END IF;
        
        /* 다음 단계를 생성하면서 해당 단계의 다음 단계도 같이 구해서 넣어줘야 하므로 다음 단계의 다음 단계를 조회하여 SKIP 없이 다음 단계가 명확하면
           다음 단계 데이터를 자동으로 구해서 넣어준다. 다음 단계가 불명확하면 개발자가 구현한 진행단계 화면에서 다음 단계를 다시 UPDATE 처리 해주어야 함 */
        BEGIN

            SELECT NEXT_WF_PROC_CD
            INTO V_NEXT_WF_PROC_CD2
            FROM WF_REQ_TMPLAT_PROC_DT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND WF_PROC_CD      = V_NEXT_WF_PROC_CD
            ;

        EXCEPTION
            WHEN OTHERS THEN
                OUT_RTN_CD := -7;
                OUT_RTN_MSG := '현재 단계에 해당하는 다음 진행에 조회시 오류 발생';
                RETURN;
        END;
        
        DBMS_OUTPUT.PUT_LINE('7단계 V_NEXT_WF_PROC_CD2 : ' || V_NEXT_WF_PROC_CD2 );

        IF V_NEXT_WF_PROC_CD2 = '' OR V_NEXT_WF_PROC_CD2 IS NULL OR INSTR(V_NEXT_WF_PROC_CD2, ',') > 0 THEN
            RAISE EX_NO_NEXT_WF_PROC_CD3;
        END IF;

        --다음 단계를 정상적으로 구한 경우 다음 단계의 반려 단계를 구한다.
        IF V_NEXT_WF_PROC_CD2 IS NOT NULL OR V_NEXT_WF_PROC_CD2 <> '' THEN
        
            BEGIN
                SELECT SCREEN_RTRN
                INTO V_SCREEN_RTRN2
                FROM WF_REQ_TMPLAT_PROC_DT
                WHERE 1 = 1
                AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
                AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
                AND WF_PROC_CD      = V_NEXT_WF_PROC_CD2
                ;
            EXCEPTION
                WHEN OTHERS THEN
                    OUT_RTN_CD := -8;
                    OUT_RTN_MSG := '다음 진행에 해당하는 반려 단계 조회시 오류 발생';
                    RETURN;
            END;
            
            DBMS_OUTPUT.PUT_LINE('8단계 V_SCREEN_RTRN2 : ' || V_SCREEN_RTRN2 );

        END IF;

        --다음 단계 데이터를 생성
        BEGIN

            MERGE
            INTO	SR_WF_PROC A
            USING 	DUAL
            ON		(A.REQ_ID = IN_REQ_ID AND A.WF_PROC_CD = V_NEXT_WF_PROC_CD)
        
            WHEN MATCHED THEN
                UPDATE
                SET
                     NEXT_WF_PROC_CD    = V_NEXT_WF_PROC_CD2
                    ,RTN_WF_PROC_CD     = V_SCREEN_RTRN2
                    ,SEQ                = 
                                            (
                                            SELECT SEQ
                                            FROM WF_REQ_TMPLAT_PROC_DT B
                                            WHERE 1 = 1
                                            AND B.REQ_TMPLAT_ID    = V_REQ_TMPLAT_ID
                                            AND B.REQ_TMPLAT_VER   = V_REQ_TMPLAT_VER
                                            AND WF_PROC_CD         = V_NEXT_WF_PROC_CD
                                            )
                    ,LMID			    = IN_USER_ID
                    ,LMDT			    = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                      
            WHEN NOT MATCHED THEN
                INSERT 
                (
                     REQ_ID
                    ,WF_PROC_CD
                    ,SEQ
                    ,NEXT_WF_PROC_CD
                    ,RTN_WF_PROC_CD
                    ,FRID
                    ,FRDT
                    ,LMID
                    ,LMDT
                )
                VALUES
                (
                     IN_REQ_ID
                    ,V_NEXT_WF_PROC_CD
                    ,(
                     SELECT SEQ
                     FROM WF_REQ_TMPLAT_PROC_DT B
                     WHERE 1 = 1
                     AND B.REQ_TMPLAT_ID    = V_REQ_TMPLAT_ID
                     AND B.REQ_TMPLAT_VER   = V_REQ_TMPLAT_VER
                     AND WF_PROC_CD         = V_NEXT_WF_PROC_CD
                     )
                    ,V_NEXT_WF_PROC_CD2
                    ,V_SCREEN_RTRN2
                    ,IN_USER_ID
                    ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                    ,IN_USER_ID
                    ,TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                )
            ;
    
        END;

    ELSIF NVL(V_FUNC, ' ') = 'WF_FUNC_01' OR NVL(V_FUNC, ' ') = 'WF_FUNC_02' THEN   /* WF_FUNC_01 : 결재, WF_FUNC_02 : 검토, WF_FUNC_04 : 담당자 */

        /* 기본정보의 WF_PROC_CD를 자동으로 다음 단계로 처리해준다. */
            UPDATE SR_BASE_INFO SET
                /* 요청서상태코드[REQ_STAT_CD] - RQST00 : 임시저장, RQST01 : 등록, RQST11 : 결재중, RQST21 : 검토중, RQST91 : 반려, RQST98 : 종료, RQST99 : 완료 */
                 REQ_STAT_CD = CASE WHEN V_FUNC = 'WF_FUNC_01' THEN 'RQST11'
                                    WHEN V_FUNC = 'WF_FUNC_02' THEN 'RQST21'
                              END
                ,LMID       = IN_USER_ID
                ,LM_USER_NM = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                ,LM_DEPT_CD = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                ,LM_DEPT_NM = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                ,LMDT       = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                ,LMPID      = IN_LMPID
            WHERE 1 = 1
            AND REQ_ID  = IN_REQ_ID
            ;

            IF NVL(V_FUNC, ' ') = 'WF_FUNC_01' THEN

                --결재 기능이 존재하는 경우 결재선을 승인 대기 상태로 만들어 놓는다.
                UPDATE WF_APPROVAL_MT SET
                    APPR_STAT_CD = 'APST_01'    /* 결재상태코드[APPR_STAT_CD] - APST_00 : 반려, APST_01 : 승인대기, APST_99 : 승인 */
                WHERE 1 = 1
                AND REQ_ID      = IN_REQ_ID
                AND WF_PROC_CD  = V_WF_PROC_CD
                ;

            ELSIF NVL(V_FUNC, ' ') = 'WF_FUNC_02' THEN

                --검토자는 전체 검토 대상자 중 누가 검토를 할지 알 수 없으므로 검토가 진행되는 시점에 데이터가 쌓이는 구조로 처리하기 위해 기존 데이터를 모두 초기화한다.
                DELETE
                FROM WF_APPROVAL_MT
                WHERE 1 = 1
                AND REQ_ID      = IN_REQ_ID
                AND WF_PROC_CD  = V_WF_PROC_CD
                ;

            END IF;

    END IF;

    OUT_RTN_CD := 0;
    OUT_RTN_MSG := '정상 처리 되었습니다.';
    --DBMS_OUTPUT.PUT_LINE('에러코드 =>' || OUT_RTN_CD);
    --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
    RETURN;

EXCEPTION
    
    WHEN EX_NO_NEXT_WF_PROC_CD1 THEN
        OUT_RTN_CD  := -9996;
        OUT_RTN_MSG := 'NEXT 진행단계가 없어서 다음 단계 진행 불가';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        RETURN;

    WHEN EX_NO_NEXT_WF_PROC_CD2 THEN
        OUT_RTN_CD  := -9997;
        OUT_RTN_MSG := 'NEXT 진행단계가 없어서 다음 단계 진행 불가';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        RETURN;

    WHEN EX_NO_NEXT_WF_PROC_CD3 THEN
        OUT_RTN_CD  := -9998;
        OUT_RTN_MSG := 'NEXT 진행단계가 없어서 다음 단계 진행 불가';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        RETURN;

    WHEN OTHERS THEN
        OUT_RTN_CD := -9999;
        OUT_RTN_MSG := '요청서 다음 진행 단계 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        RETURN;
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REQ_WF_PROC_RETURN
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "SPP_HI20"."PR_SR_REQ_WF_PROC_RETURN" 
(
    pi_req_id           IN VARCHAR2,    -- 요청서ID
    pi_wf_proc_cd       IN VARCHAR2,    -- 현재단계
    pi_user_id          IN VARCHAR2,    -- 결재자(로그인 사번)
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
v_req_tmplat_id     SR_BASE_INFO.REQ_TMPLAT_ID%TYPE;
v_req_tmplat_ver    SR_BASE_INFO.REQ_TMPLAT_VER%TYPE;
v_req_stat_cd       SR_BASE_INFO.REQ_STAT_CD%TYPE;      -- RQST11:결재중, RQST21:검토중   // 상태 check && 결재/검토 구분용
v_user_id           WF_APPROVAL_MT.USER_ID%TYPE;
v_user_nm           WF_PROC_HIST.SRM_USER_NM%TYPE;
v_appr_stat_cd      WF_PROC_HIST.APPR_STAT_CD%TYPE;
v_appr_gbn_cd       WF_PROC_HIST.APPR_GBN_CD%TYPE;
v_pos_cd            FOMM_USER_MT.POS_CD%TYPE;
v_pos_nm            WF_PROC_HIST.SRM_JBC_JNAME%TYPE;
v_dept_cd           FOMM_USER_MT.DEPT_CD%TYPE;
v_dept_nm           WF_PROC_HIST.SRM_DEPT_NM%TYPE;

BEGIN
    DBMS_OUTPUT.PUT_LINE('pi_req_id : ' || pi_req_id || ' pi_wf_proc_cd : ' || pi_wf_proc_cd || ' pi_appr_desc : ' || pi_appr_desc || ' pi_user_id : ' || pi_user_id);
    /* 최초 PARAM에 의한 미승인 결재자가 있는 지 확인 */
    BEGIN
        SELECT    REQ_TMPLAT_ID,    REQ_TMPLAT_VER,     REQ_STAT_CD
        INTO      v_req_tmplat_id,  v_req_tmplat_ver,   v_req_stat_cd
        FROM      SR_BASE_INFO
        WHERE     1=1
        AND       REQ_ID        = pi_req_id
        AND       WF_PROC_CD    = pi_wf_proc_cd
        ;
        
        IF( v_req_stat_cd = 'RQST11' ) THEN     -- 결재중
            BEGIN
            SELECT    A.USER_NM,  A.POS_NM,   A.DEPT_NM,  A.APPR_GBN_CD
            INTO      v_user_nm,  v_pos_nm,   v_dept_nm,  v_appr_gbn_cd
            FROM      WF_APPROVAL_MT A
                    , SR_BASE_INFO B
            WHERE     1=1
            AND       A.REQ_ID          = B.REQ_ID
            
            AND       A.APPR_STAT_CD    = 'APST_01'
            AND       A.REQ_ID          = pi_req_id
            AND       A.WF_PROC_CD      = pi_wf_proc_cd
            AND       A.USER_ID         = pi_user_id
            AND       B.REQ_STAT_CD     = v_req_stat_cd
            ;
            EXCEPTION
            WHEN NO_DATA_FOUND THEN
                po_rtn_cd  := -1;
                po_rtn_msg := '해당 조건의 결재자가 없습니다.';
                DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
                RETURN;
            WHEN OTHERS THEN
                po_rtn_cd  := -1;
                po_rtn_msg := '결재자 확인 중 오류 발생';
                DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
                RETURN;
            END;
        ELSE -- 검토중
            BEGIN
            SELECT  USER_NM,    POS_CD,     POS_NM,     DEPT_CD,    DEPT_NM,    'R01' AS APPR_GBN_CD
            INTO    v_user_nm,  v_pos_cd,   v_pos_nm,   v_dept_cd,  v_dept_nm,  v_appr_gbn_cd
            FROM    FOMM_USER_MT
            WHERE   USER_ID = pi_user_id
            ;
        END;
        END IF;
    END;


    /* 결재승인 && 이력 처리 */
    BEGIN
        /* 결재자 반려 처리 */
        MERGE 
		INTO	WF_APPROVAL_MT A
		USING 	DUAL
		ON		(A.REQ_ID = pi_req_id AND A.WF_PROC_CD = pi_wf_proc_cd AND USER_ID = pi_user_id)
		
		WHEN MATCHED THEN
            UPDATE    
            SET       APPR_STAT_CD  = 'APST_00'
                    , APPR_STIME    = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                    , APPR_DESC	    = pi_appr_desc
            WHERE     REQ_ID        = pi_req_id
            AND       WF_PROC_CD    = pi_wf_proc_cd
            AND       USER_ID       = pi_user_id
            
        WHEN NOT MATCHED THEN
            INSERT
            (
                  REQ_ID
                , WF_PROC_CD
                , APPR_SEQ
                , APPR_STAT_CD
                , APPR_GBN_CD
                , USER_ID
                , USER_NM
                , DEPT_CD
                , DEPT_NM
                , POS_NM
                , APPR_STIME
                , APPR_DESC
                , REG_TIME
                , DAEJIC_USER_ID
                , DAEJIC_USER_NM
                , DAEJIC_DEPT_CD
                , DAEJIC_DEPT_NM
                , DAEJIC_POS_NM
            )
            VALUES
            (
                  pi_req_id
                , pi_wf_proc_cd
                , (SELECT NVL(MAX(APPR_SEQ), 0)+1 FROM WF_APPROVAL_MT WHERE REQ_ID = pi_req_id AND WF_PROC_CD = pi_wf_proc_cd)
                , 'APST_00' -- 결재상태 반려
                , v_appr_gbn_cd
                , pi_user_id
                , v_user_nm
                , v_dept_cd
                , v_dept_nm
                , v_pos_nm
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , pi_appr_desc
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                , ''
                , ''
                , ''
                , ''
                , ''
            )
        ;

        /* 결재 HISTORY 생성 */
        INSERT INTO WF_PROC_HIST
		(
			  PROC_NUMBER	--프로세스번호
			, WF_HIST_SEQ	--히스토리키값
			, WF_PROC_CD	--워크플로우단계코드
			, APPR_STAT_CD	--승인상태
			, APPR_COMMENT	--승인/반려의견
			, APPR_GBN_CD	--결재자구분코드
			, SRM_USER_ID	--처리이력변경 사용자ID
			, SRM_USER_NM	--처리이력변경 사용자
			, SRM_JBC_JNAME	--처리이력변경 사용자 직명
			, SRM_DEPT_NM	--처리이력변경 사용자 팀명
			, REG_STIME	    --등록일시
		)
		VALUES
		(
			  pi_req_id
			, (SELECT NVL(MAX(TO_NUMBER(WF_HIST_SEQ)), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = pi_req_id)
			, pi_wf_proc_cd
			, v_appr_stat_cd
			, pi_appr_desc
			, v_appr_gbn_cd
			, v_user_id
			, v_user_nm
			, v_pos_nm
			, v_dept_nm
			, TO_CHAR(SYSDATE, 'YYYYHHDDHH24MISS')
		)
        ;

        EXCEPTION
        WHEN OTHERS THEN
            po_rtn_cd  := -1;
            po_rtn_msg := '반려처리중 오류 발생';
            ROLLBACK;
            RETURN;
    END;


    /* PR_SR_REQ_WF_PROC_BACK() 호출; 반려시 단계로 이동 */
    DECLARE
        v_rtn_cd            NUMBER(10, 0);      -- PR_SR_REQ_WF_PROC_APPROVE() return code
        v_rtn_msg           VARCHAR2(4000);     -- PR_SR_REQ_WF_PROC_APPROVE() return message
    BEGIN
        PR_SR_REQ_WF_PROC_BACK(pi_req_id, pi_wf_proc_cd, 'RTRN', pi_appr_desc, pi_user_id, pi_lmpid, v_rtn_cd, v_rtn_msg);
        DBMS_OUTPUT.PUT_LINE('PR_SR_REQ_WF_PROC_BACK :: ' || v_rtn_cd || ' :: ' || v_rtn_msg);
        IF(v_rtn_cd != 0) THEN
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
END;

/
--------------------------------------------------------
--  DDL for Procedure PR_SR_REV_PROC
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "SPP_HI20"."PR_SR_REV_PROC" 
(
    IN_REG_GUBUN        IN VARCHAR2,    -- TEMP : 임시저장, REV : 접수(완료)
    IN_REQ_ID           IN VARCHAR2,    -- 요청서ID
    IN_WF_PROC_CD       IN VARCHAR2,    -- 진행단계
    IN_USER_ID          IN VARCHAR2,    -- 접수자ID
    IN_GUBUN_NM         IN VARCHAR2,    -- 처리자구분
    IN_PROC_EXAM_OPIN   IN VARCHAR2,    -- 처리의견
    IN_CEGR_ID          IN VARCHAR2,    -- 담당자ID
    IN_PROC_DATE        IN VARCHAR2,    --처리일시
    IN_PROC_SDTIME		IN VARCHAR2,    --처리시작일시
    IN_PROC_EDTIME		IN VARCHAR2,    --처리종료일시
    IN_RMK				IN VARCHAR2,    --비고
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
V_GUBUN_NM          WF_REQ_TMPLAT_PROC_DT.CGER_NM%TYPE;

v_temp_appr_stat_cd VARCHAR2(100);
v_temp_appr_gbn_cd  VARCHAR2(100);

BEGIN

    V_GUBUN_NM := IN_GUBUN_NM;
    
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
            OUT_RTN_CD := -1;
            OUT_RTN_MSG := '기본 정보 조회시 오류 발생';
            RETURN;
    END;
    
    BEGIN

        /* 진행단계에 현재 사용자가 아닌 다른 접수자 내역이 존재하는지 체크 */
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

    IF V_OTHER_EXIST_YN = 'Y' THEN
        RAISE EX_EXIST_OTHER_USER;

    ELSE

        IF V_GUBUN_NM IS NULL OR NVL(V_GUBUN_NM, ' ') = '' THEN

            SELECT CGER_NM
            INTO V_GUBUN_NM
            FROM WF_REQ_TMPLAT_PROC_DT
            WHERE 1 = 1
            AND REQ_TMPLAT_ID   = V_REQ_TMPLAT_ID
            AND REQ_TMPLAT_VER  = V_REQ_TMPLAT_VER
            AND WF_PROC_CD      = IN_WF_PROC_CD
            ;

        END IF;

        MERGE 
		INTO	SR_REV_PROC A
		USING 	DUAL
		ON		(A.REQ_ID = IN_REQ_ID AND A.WF_PROC_CD = IN_WF_PROC_CD AND A.USER_ID = IN_USER_ID)

		WHEN MATCHED THEN
			UPDATE
			SET
                 CEGR_ID            = IN_CEGR_ID
                ,PROC_EXAM_OPIN     = IN_PROC_EXAM_OPIN
                ,PROC_DATE          = NVL(IN_PROC_DATE, TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'))
                ,PROC_SDTIME        = IN_PROC_SDTIME
                ,PROC_EDTIME        = IN_PROC_EDTIME
                ,LMID			    = IN_LOGIN_ID
                ,LMDT			    = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                ,LMPID			    = IN_LMPID

		WHEN NOT MATCHED THEN
			INSERT 
			(
                 REQ_ID
                ,WF_PROC_CD
                ,USER_ID
                ,USER_NM
                ,DEPT_CD
                ,DEPT_NM
                ,POS_NM
                ,GUBUN_NM
                ,CEGR_ID
                ,PROC_EXAM_OPIN
                ,PROC_DATE
                ,PROC_SDTIME
                ,PROC_EDTIME
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
                ,V_GUBUN_NM
                ,IN_CEGR_ID
                ,IN_PROC_EXAM_OPIN
                ,NVL(IN_PROC_DATE, TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'))
                ,IN_PROC_SDTIME
                ,IN_PROC_EDTIME
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
                  PROC_NUMBER	--프로세스번호
                , WF_HIST_SEQ	--히스토리키값
                , WF_PROC_CD	--워크플로우단계코드
                , APPR_STAT_CD	--승인상태
                , APPR_COMMENT	--승인/반려의견
                , APPR_GBN_CD	--결재자구분코드
                , SRM_USER_ID	--처리이력변경 사용자ID
                , SRM_USER_NM	--처리이력변경 사용자
                , SRM_DEPT_NM	--처리이력변경 사용자 팀명
                , SRM_JBC_JNAME	--처리이력변경 사용자 직명
                , REG_STIME	--등록일시
            )
            VALUES
            (
                  IN_REQ_ID
                , (SELECT NVL(MAX(WF_HIST_SEQ), 0)+1 FROM WF_PROC_HIST WHERE PROC_NUMBER = IN_REQ_ID)
                , IN_WF_PROC_CD
                , v_temp_appr_stat_cd
                , IN_PROC_EXAM_OPIN
                , v_temp_appr_gbn_cd
                , IN_USER_ID
                , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                , (SELECT POS_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
                , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            );
            
            --PR_SR_REQ_WF_PROC_NEXT(IN_REQ_ID, IN_USER_ID, IN_NEXT_WF_PROC_CD, IN_LMPID, NULL, NULL);

        END IF;

        --기본정보에 상태값 저장
        UPDATE SR_BASE_INFO SET
             REQ_STAT_CD    = CASE WHEN IN_REG_GUBUN = 'TEMP' THEN 'RQST00' WHEN IN_REG_GUBUN = 'REV' THEN 'RQST99' END
            ,LMID           = IN_USER_ID
            ,LM_USER_NM     = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            ,LM_DEPT_CD     = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            ,LM_DEPT_NM     = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
            ,LMDT           = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            ,LMPID			= IN_LMPID
            
        WHERE 1 = 1
        AND REQ_ID  = IN_REQ_ID
        ;

    END IF;

    OUT_RTN_CD := 0;
    OUT_RTN_MSG := '정상 처리 되었습니다.';
    --DBMS_OUTPUT.PUT_LINE('에러코드 =>' || OUT_RTN_CD);
    --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
    COMMIT;
    RETURN;

EXCEPTION
    WHEN EX_EXIST_OTHER_USER THEN
        OUT_RTN_CD  := -9998;
        OUT_RTN_MSG := '이미 처리자가 존재하여 등록이 불가능합니다.';
        ROLLBACK;

    WHEN OTHERS THEN
        OUT_RTN_CD := -9999;
        OUT_RTN_MSG := '요청서 진행 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        ROLLBACK;
        RETURN;
END;

/


/* 2024.12.24 */
CREATE OR REPLACE PROCEDURE pc_noti (
    p_template_id IN varchar,  
    p_req_id IN varchar
) 
IS 
    v_table_name  varchar(100);
    v_column_name varchar(100);
    v_values varchar(100);
-- 커서 선언 --
 CURSOR conf_cursor IS       
    SELECT m.*, d.*
      FROM fomm_noti_tmpl m,
           fomm_noti_tmpl_dtl d 
     WHERE m.REQ_TMPLAT_ID = d.REQ_TMPLAT_ID
       AND m.req_tmplat_id IN ('SR_BASE_INFO',  'WFT240005')
























/* 테이블, 컬럼명 에서  SEQ 찾기 */
SELECT 
    tc.table_name,
    tm.comments AS tab_name,
    tc.column_id,
    tc.column_name,
    substr(cm.comments, 1, instr(cm.comments, ',')-1) AS col_name,
    tc.data_type,
    CASE WHEN tc.data_type = 'NUMBER' AND tc.data_precision IS NOT NULL THEN tc.data_precision||','||tc.data_scale
         ELSE to_char(tc.data_length) END data_length,
    --tc.data_precision, tc.data_scale, tc.data_length,
    tc.nullable,    
    ltrim(substr(cm.comments, instr(cm.comments, ',') + 1 )) AS comments
FROM user_tab_columns tc 
LEFT JOIN 
    user_col_comments cm
    ON tc.table_name = cm.table_name AND tc.column_name = cm.column_name
LEFT JOIN 
    user_tab_comments tm
    ON tc.table_name = tm.table_name    
WHERE tc.table_name NOT LIKE 'TIM%'
AND tc.table_name NOT LIKE 'TB%'
AND tc.table_name NOT LIKE 'PJ%'
AND tc.table_name NOT LIKE 'A\_%' ESCAPE '\'
AND tc.table_name NOT LIKE 'SPRING%'
and upper(cm.comments) LIKE '%SEQ%'
ORDER BY tc.table_name, tc.column_id;
/

CREATE OR REPLACE PROCEDURE PRC_DEPT_N_USER_INFO_EHR
IS
O_ERRMSG VARCHAR2(4000) := '';
BEGIN
    /*
        조직정보 이관
    */
    
    -- 조직 삭제 (인사정보기준)
    DELETE FROM FOMM_DEPT_MT T1
     WHERE T1.COMP_ID = '0051'
       AND EXISTS (SELECT * FROM HR_PMS_DEPT WHERE DEPT_CD = T1.DEPT_CD)
    ;
    
    -- 조직 미사용 플래그 set
    UPDATE FOMM_DEPT_MT
       SET DEPT_STATUS = '0'
         , LMDT = SYSDATE
         , CLOSE_DT = SYSDATE-1
     WHERE DEPT_STATUS = '1'
    ;
    
    -- 조직정보 이관
    INSERT INTO FOMM_DEPT_MT
    (
      DEPT_CD, DEPT_NM , UP_DEPT_CD , COMP_ID
    , DEPT_ENG_NAME, DEPT_LEVEL, DEPT_ABBR_NAME, DEPT_STATUS
    , DEPT_TYPE, DEPT_BIZ_YN, DEPT_MANAGER_ID
    , FULL_PATH, SORT_ORDER
    , COST_DEPT_ID, DEPT_IV_YN
    , LMID , LMDT 

    )
    SELECT DEPT_CD, DEPT_NM, UP_DEPT_CD, '0051' AS COMP_ID
         , DEPT_NM_E, LVL, DEPT_NM_ABBR, '1' AS DEPT_STATUS
         , DEPT_LEVEL, 'N' AS DEPT_BIZ_YN, EMP_NO_CHIEF
         , SUBSTR(FULL_PATH,4) AS FULL_PATH, ROWNUM
         , DEPT_CD_ACNT, 'N' AS DEPT_IV_YN
         , 'SYSTEM' AS LMID, TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') AS LMDT
      FROM (
                SELECT LEVEL AS LVL
                     , SYS_CONNECT_BY_PATH(DEPT_NM, ' > ') AS FULL_PATH
                     , D.*
                  FROM HR_PMS_DEPT D
                 START WITH DEPT_CD = '005'
                CONNECT BY PRIOR DEPT_CD = UP_DEPT_CD
                 ORDER SIBLINGS BY TO_NUMBER(DEPT_SEQ)
        )
    ;
    
    -- IT 부서설정
    UPDATE FOMM_DEPT_MT  T1
       SET T1.DEPT_BIZ_YN = 'Y'
     WHERE T1.DEPT_CD IN (
            SELECT DEPT_CD
              FROM HR_PMS_DEPT 
             START WITH DEPT_CD IN (SELECT R1.CMM_CD
                                      FROM FOMM_CMM_CD_MT R1
                                     WHERE R1.UP_CMM_CD = 'ITGROUP_CD'
                                       AND R1.USE_YN = 'Y'
                                       AND R1.ITM_VAL_1 = 'ICLD' )
            CONNECT BY PRIOR DEPT_CD = UP_DEPT_CD
            UNION ALL
            SELECT DEPT_CD
              FROM HR_PMS_DEPT 
             WHERE DEPT_CD IN (SELECT R1.CMM_CD
                                 FROM FOMM_CMM_CD_MT R1
                                WHERE R1.UP_CMM_CD = 'ITGROUP_CD'
                                  AND R1.USE_YN = 'Y'
                                  AND R1.ITM_VAL_1 IS NULL )
        )
    ;

    -- 사업추진부서 설정
    UPDATE FOMM_DEPT_MT  T1
       SET T1.DEPT_IV_YN = 'Y'
     WHERE T1.DEPT_CD IN (
            SELECT DEPT_CD
              FROM HR_PMS_DEPT 
             START WITH DEPT_CD IN (SELECT R1.CMM_CD
                                      FROM FOMM_CMM_CD_MT R1
                                     WHERE R1.UP_CMM_CD = 'IV_ITGROUP_CD'
                                       AND R1.USE_YN = 'Y'
                                       AND R1.ITM_VAL_1 = 'ICLD' )
            CONNECT BY PRIOR DEPT_CD = UP_DEPT_CD
            UNION ALL
            SELECT DEPT_CD
              FROM HR_PMS_DEPT 
             WHERE DEPT_CD IN (SELECT R1.CMM_CD
                                 FROM FOMM_CMM_CD_MT R1
                                WHERE R1.UP_CMM_CD = 'IV_ITGROUP_CD'
                                  AND R1.USE_YN = 'Y'
                                  AND R1.ITM_VAL_1 IS NULL )
        )
    ;
   
   
    /*
        직원정보 이관
    */
    -- 사용자 삭제 (인사정보기준)
    DELETE FROM FOMM_USER_MT T1
     WHERE T1.CO_CD = '0051'
       AND EXISTS (SELECT * FROM HR_PMS_EMP WHERE EMP_NO = T1.USER_ID)
    ;
    -- 사용자 미사용 플래그 set
    UPDATE FOMM_USER_MT
       SET USE_YN = 'N'
         , RETIRE_DATE = TO_CHAR(SYSDATE-1, 'YYYYMMDD')
         , LMDT = SYSDATE
     WHERE USER_TYPE = '1'
       AND USE_YN= 'Y'
    ;
    
    -- 인사정보 이관
    INSERT INTO FOMM_USER_MT(
           USER_ID, USER_NM, CO_CD, CO_NM, DEPT_CD, DEPT_NM
         , DEPT_ID
         , POS_CD, POS_NM, ROLE_CD, ROLE_NM, EMAIL_ADR
         , TELNUM, MOBILE_NUM
         , USER_PW, EXPIRE_DATE, USE_YN
         , USER_ENG_NAME, USER_CHN_NAME, USER_TYPE, STATUS, HIRE_DATE
         , ACCOUNT_EXPIRED, ACCOUNT_ENABLED, ACCOUNT_LOCKED, CREDENTIALS_EXPIRED, LANGUAGE_TYPE
    )
    SELECT 
           EMP_NO, EMP_NM, '0051', '미래에셋증권', DEPT_CD, DEPT_NM
         , (SELECT UP_DEPT_CD FROM HR_PMS_DEPT HPD WHERE HPD.DEPT_CD = T1.DEPT_CD )
         , PSTN_CD, PSTN_NM, JOB_TITLE_CD, JOB_TITLE_NM, IN_EMAIL_MIRAE
         , COMTEL_NO1_4, CELL_NO1||CELL_NO2||CELL_NO3
         , '1', '20991231', 'Y'
         , EMP_NM_ENGL, EMP_NM_CHINA, '1', '1', START_YMD
         , '0', '1', '0', '0', 'KR'
      FROM HR_PMS_EMP T1
    ;

    /*
        사용자 권한 세팅
    */
    
    /*퇴사자 (외주포함) 권한 전체 삭제*/
    DELETE FROM FOMM_AUTH_USER_DT M
     WHERE EXISTS(SELECT * FROM FOMM_USER_MT
                    WHERE USE_YN = 'N'
                      AND USER_ID = M.USER_ID
                  )
    ;
    
    /* 전체 임직원(외주제외) : ALL_GRP */
    DELETE FROM FOMM_AUTH_USER_DT
     WHERE AUTH_ID = 'ALL_GRP'
    ;
    INSERT INTO FOMM_AUTH_USER_DT (AUTH_ID, USER_ID, LMID, LMDT )
    SELECT 'ALL_GRP'
         , USER_ID, 'SYSTEM', TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
      FROM FOMM_USER_MT
     WHERE USER_TYPE = '1'
       AND USE_YN = 'Y'
    ;
   
    /* 현업 임직원 : BIZ_GRP */
    DELETE FROM FOMM_AUTH_USER_DT
     WHERE AUTH_ID = 'BIZ_GRP'
    ;
    INSERT INTO FOMM_AUTH_USER_DT (AUTH_ID, USER_ID, LMID, LMDT )
    SELECT 'BIZ_GRP'
         , USER_ID, 'SYSTEM', TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
      FROM FOMM_USER_MT U1
     WHERE USER_TYPE = '1'
       AND USE_YN = 'Y'
       AND EXISTS (SELECT 1
                  FROM FOMM_DEPT_MT D1
                 WHERE D1.DEPT_CD = U1.DEPT_CD
                   AND D1.DEPT_BIZ_YN = 'N'
                   AND D1.DEPT_STATUS = '1' )
    ;
   
    /* 현업 부서장 : LDR_GRP */
    DELETE FROM FOMM_AUTH_USER_DT
     WHERE AUTH_ID = 'LDR_GRP'
    ;
    INSERT INTO FOMM_AUTH_USER_DT (AUTH_ID, USER_ID, LMID, LMDT )
    SELECT 'LDR_GRP'
         , USER_ID, 'SYSTEM', TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
      FROM FOMM_USER_MT U1
     WHERE USER_TYPE = '1'
       AND USE_YN = 'Y'
       AND U1.USER_ID IN (SELECT DEPT_MANAGER_ID
                          FROM FOMM_DEPT_MT
                         WHERE DEPT_BIZ_YN = 'N'
                           AND DEPT_STATUS = '1'
                           AND DEPT_MANAGER_ID IS NOT NULL )
    ;
   
    /* IT 임직원 : IT_ALL_GRP */
    DELETE FROM FOMM_AUTH_USER_DT
     WHERE AUTH_ID = 'IT_ALL_GRP'
    ;
    INSERT INTO FOMM_AUTH_USER_DT (AUTH_ID, USER_ID, LMID, LMDT )
    SELECT 'IT_ALL_GRP'
         , USER_ID, 'SYSTEM', TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
      FROM FOMM_USER_MT U1
     WHERE USER_TYPE = '1'
       AND USE_YN = 'Y'
       AND EXISTS (SELECT 1
                  FROM FOMM_DEPT_MT D1
                 WHERE D1.DEPT_CD = U1.DEPT_CD
                   AND D1.DEPT_BIZ_YN = 'Y' )
    ;
   
    /* IT 사업추진부서 임직원 : IT_IV_GRP */
    DELETE FROM FOMM_AUTH_USER_DT
     WHERE AUTH_ID = 'IT_IV_GRP'
    ;
    INSERT INTO FOMM_AUTH_USER_DT (AUTH_ID, USER_ID, LMID, LMDT )
    SELECT 'IT_IV_GRP'
         , USER_ID, 'SYSTEM', TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
      FROM FOMM_USER_MT U1
     WHERE USER_TYPE = '1'
       AND USE_YN = 'Y'
       AND EXISTS (SELECT 1
                  FROM FOMM_DEPT_MT D1
                 WHERE D1.DEPT_CD = U1.DEPT_CD
                   AND D1.DEPT_IV_YN  = 'Y' )
    ;
   
    /* IT 부서장 : IT_LDR_GRP */
    DELETE FROM FOMM_AUTH_USER_DT
     WHERE AUTH_ID = 'IT_LDR_GRP'
    ;
    INSERT INTO FOMM_AUTH_USER_DT (AUTH_ID, USER_ID, LMID, LMDT )
    SELECT 'IT_LDR_GRP'
         , USER_ID, 'SYSTEM', TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
      FROM FOMM_USER_MT U1
     WHERE USER_TYPE = '1'
       AND USE_YN = 'Y'
       AND U1.USER_ID IN (SELECT DEPT_MANAGER_ID
                          FROM FOMM_DEPT_MT
                         WHERE DEPT_BIZ_YN = 'Y'
                           AND DEPT_STATUS = '1'
                           AND DEPT_MANAGER_ID IS NOT NULL )
   ;
   
    /* 외주직원 : XU_GRP */
    DELETE FROM FOMM_AUTH_USER_DT
     WHERE AUTH_ID = 'XU_GRP'
    ;
    INSERT INTO FOMM_AUTH_USER_DT (AUTH_ID, USER_ID, LMID, LMDT )
    SELECT 'XU_GRP'
         , USER_ID, 'SYSTEM', TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
      FROM FOMM_USER_MT
     WHERE USER_TYPE IN ('3', '4', '7')
       AND USE_YN = 'Y'
    ;

    INSERT
      INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
    VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
             , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                  FROM SY_ERROR_LOG
                 WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
             , 'SYSJOB'
             , ''
             , 'PRC_DEPT_N_USER_INFO_EHR'
             , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || ' Procedure 완료'
             , ''
             , SYSDATE
             , ''
             , '' );

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('==  PRC_DEPT_N_USER_INFO_EHR  COMMIT===');

EXCEPTION   WHEN  OTHERS   THEN
    ROLLBACK;
    O_ERRMSG := SQLERRM;
    DBMS_OUTPUT.PUT_LINE('==  예외 발생하여 ERROR LOG 추가합니다. ===');
    INSERT
      INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
    VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
             , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                  FROM SY_ERROR_LOG
                 WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
             , 'SYSJOB'
             , ''
             , 'PRC_DEPT_N_USER_INFO_EHR Procedure Exception'
             , SUBSTRB(O_ERRMSG, 0, 4000)
             , ''
             , SYSDATE
             , ''
             , '' );
    COMMIT;

                  NULL;
END;

--GRANT DEBUG ON PRC_DEPT_N_USER_INFO_EHR TO NEO_SEL;
/

CREATE OR REPLACE PROCEDURE PRC_HR_FOMM_AGENCY_INFO_EHR IS
CURSOR AG_LIST IS
    /*오늘(SYSDATE) 휴가자 목록 조회*/
    SELECT *
      FROM HR_PMS_EMP
     WHERE DTM_NM IS NOT NULL
       AND TO_CHAR(SYSDATE, 'YYYYMMDD') BETWEEN DTM_STA_YMD AND DTM_END_YMD;
     CNT NUMBER;
     MINSDATE VARCHAR2(8);
     AMPM VARCHAR2(10);
     ERRM VARCHAR2(4000);
BEGIN
     FOR AG IN AG_lIST LOOP
        /*휴가자 중 IT포털 업무위임이 등록정보가 있는지 확인*/
        SELECT COUNT(*)
          INTO CNT
          FROM FOMM_AGENCY_INFO T1
         WHERE T1.IS_ACTIVE = '1'
           AND T1.USER_ID = AG.EMP_NO
           AND T1.AGENCY_SDT <= AG.DTM_END_YMD
           AND T1.AGENCY_EDT >= AG.DTM_STA_YMD
           AND TO_CHAR(SYSDATE, 'YYYYMMDD') BETWEEN T1.AGENCY_SDT AND T1.AGENCY_EDT;
        /*오늘 이후 HR-IT포털 업무위임 겹치는 날짜 중 가장 빠른 일자*/
        SELECT MIN(TO_CHAR(TO_DATE(T1.AGENCY_SDT,'YYYYMMDD')-1,'YYYYMMDD'))
          INTO MINSDATE
          FROM FOMM_AGENCY_INFO T1
         WHERE T1.IS_ACTIVE = '1'
           AND T1.USER_ID = AG.EMP_NO
           AND T1.AGENCY_SDT <= AG.DTM_END_YMD
           AND T1.AGENCY_EDT >= AG.DTM_STA_YMD
           AND T1.AGENCY_SDT > TO_CHAR(SYSDATE, 'YYYYMMDD');
        IF CNT = 0 THEN
            /*오늘 업무위임 정보 없고 IT포털-HR 겹치는 기간 없으면 HR휴가기간으로 등록*/
            IF MINSDATE IS NULL AND AG.EXC_EMP_NO IS NOT NULL THEN
                INSERT INTO FOMM_AGENCY_INFO(USER_ID, AGENCY_SEQ, AGENCY_SDT, AGENCY_EDT, AGENCY_USER_ID, AGENCY_DESC, IS_ACTIVE, IS_STOP, FRID, FRDT)
                VALUES
                ( AG.EMP_NO
                 , (SELECT NVL(MAX(AGENCY_SEQ)+1, 1)
                      FROM FOMM_AGENCY_INFO
                     WHERE USER_ID = AG.EMP_NO)
                 , TO_CHAR(SYSDATE, 'YYYYMMDD')
                 , AG.DTM_END_YMD
                 , AG.EXC_EMP_NO
                 , AG.DTM_NM
                 , '1'
                 , '0'
                 , 'PRC_HR'
                 , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                );
            /*오늘 업무위임 정보 없고 이후 IT포털-HR 겹치는 기간 존재하면 오늘부터 MINSDATE 까지 업무위임 등록 */
            ELSIF MINSDATE IS NOT NULL AND AG.EXC_EMP_NO IS NOT NULL THEN
                INSERT INTO FOMM_AGENCY_INFO(USER_ID, AGENCY_SEQ, AGENCY_SDT, AGENCY_EDT, AGENCY_USER_ID, AGENCY_DESC, IS_ACTIVE, IS_STOP, FRID, FRDT)
                VALUES
                ( AG.EMP_NO
                 , (SELECT NVL(MAX(AGENCY_SEQ)+1, 1)
                      FROM FOMM_AGENCY_INFO
                     WHERE USER_ID = AG.EMP_NO)
                 , TO_CHAR(SYSDATE, 'YYYYMMDD')
                 , MINSDATE
                 , AG.EXC_EMP_NO
                 , AG.DTM_NM
                 , '1'
                 , '0'
                 , 'PRC_HR'
                 , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                );
            END IF;
        ELSIF CNT >= 1 THEN
            /*오늘 등록된 업무위임이 있다면 오전 반차인지 확인 후 취소 처리(오후 배치에 작동)*/
            IF AG.H60_TYPE = 'AM' AND TO_CHAR(SYSDATE,'AM') IN ('오후', 'PM') THEN
                UPDATE FOMM_AGENCY_INFO
                   SET IS_ACTIVE = '0'
                     , LMID = 'PRC_HR'
                     , LMDT = SYSDATE
                 WHERE USER_ID = AG.EMP_NO
                   AND AGENCY_SDT <= AG.DTM_END_YMD
                   AND AGENCY_EDT >= AG.DTM_STA_YMD
                   AND TO_CHAR(SYSDATE, 'YYYYMMDD') BETWEEN AGENCY_SDT AND AGENCY_EDT
                   AND IS_ACTIVE = '1'
                   /*
                   AND IS_STOP = '1' */
                  ;
            END IF;
        END IF;
     END LOOP;
    /*표준역할사용자 부서장 삭제*/
    /*
    DELETE
      FROM PM_ST_ROLE_USER R1
     WHERE EXISTS (SELECT 1
              FROM PM_ST_ROLE R2
             WHERE R1.ROLE_ID = R2.ROLE_ID
               AND R2.ROLE_REF_INFO LIKE 'MGR%')
    ;
    */
    /*표준역할사용자 부서단위로 부서장 등록 + 부서장 업무대행자 추가*/
   /* TOBE 미사용
    INSERT INTO PM_ST_ROLE_USER
    (
       ROLE_ID
     , USER_ID
     , USER_EMAL
     , ROLE_NM
     , DEPT_CD
     , ENTRY_ID, ENTRY_DT, UPDATE_ID, UPDATE_DT
    )
    SELECT T2.ROLE_ID
         , T1.EMP_NO_CHIEF
         , (SELECT EMAIL FROM HR_PMS_EMP E1 WHERE E1.EMP_NO = T1.EMP_NO_CHIEF)
         , T2.ROLE_NM
         , T1.DEPT_CD
         , 'AUTO', SYSDATE, 'AUTO', SYSDATE
      FROM HR_PMS_DEPT T1
         , PM_ST_ROLE T2
     WHERE T2.ROLE_REF_INFO = 'MGR' || T1.DEPT_CD
       AND T1.EMP_NO_CHIEF IS NOT NULL
     UNION
    SELECT T3.ROLE_ID
         , T1.AGENCY_USER_ID
         , (SELECT EMAIL
              FROM HR_PMS_EMP E1
             WHERE E1.EMP_NO = T1.AGENCY_USER_ID)
         , T3.ROLE_NM
         , T2.DEPT_ID
         , 'AUTO', SYSDATE, 'AUTO', SYSDATE
      FROM FOMM_AGENCY_INFO T1
         , PM_DEPT T2
         , PM_ST_ROLE T3
     WHERE T1.USER_ID = T2.DEPT_MANAGER_ID
       AND T3.ROLE_REF_INFO = 'MGR' || T2.DEPT_ID
       AND T1.IS_ACTIVE = '1'
       AND TO_CHAR(SYSDATE, 'YYYYMMDD') BETWEEN T1.AGENCY_SDT AND T1.AGENCY_EDT
       AND T2.DEPT_STATUS = '1'
    ;
    */
     COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE(SQLERRM||' 에러 발생');
        ROLLBACK;
        ERRM := SQLERRM;
        INSERT
              INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
            VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                     , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                          FROM SY_ERROR_LOG
                         WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                     , 'SYSJOB'
                     , ''
                     , 'PRC_HR_FOMM_AGENCY_INFO_EHR'
                     , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || ' ERRMSG=' || SUBSTR(ERRM,1,3000) || ' Procedure 예외 발생'
                     , ''
                     , SYSDATE
                     , ''
                     , '' );
        COMMIT;
END;
/

CREATE OR REPLACE PROCEDURE PRC_OM_USER_MT_CREATE
(
    pi_req_id         IN VARCHAR2,
    pi_lmid           IN VARCHAR2,
    pi_lmpid          IN VARCHAR2
)
IS
v_user_id VARCHAR2(20) := '';
O_ERRMSG VARCHAR2(4000) := '';

BEGIN
    dbms_output.put_line('pi_req_id : ' || pi_req_id);
    
        /* 외주직원(SVC_DTL_CD = 'WFSR0G00' ) IT외주직원사번 발급 / 현업용역사번 발급 / 고객센터접속코드 발급  */
        FOR CUR IN
        (
                SELECT 
                    CASE WHEN USER_ID IS NULL THEN  
                          's'|| LPAD(TO_NUMBER(
                          CASE WHEN R.EMPL_GB_CD = '3' OR R.EMPL_GB_CD = '4' THEN
                            (SELECT SUBSTR(NVL(MAX(X.USER_ID),'s0000000'),2,7) FROM FOMM_USER_MT X WHERE X.USER_ID LIKE 's%' AND X.USER_TYPE IN ('3','4') ) 
                               WHEN R.EMPL_GB_CD = '7' THEN
                            (SELECT SUBSTR(NVL(MAX(X.USER_ID),'s0000000'),2,7) FROM FOMM_USER_MT X WHERE X.USER_ID LIKE 's%' AND X.USER_TYPE = '7' ) 
                          END) + ROWNUM ,7, '0') 
                      ELSE USER_ID END AS USER_ID
                    , R.USER_NM
                    , R.USER_EN_NM
                    , R.EMPL_GB_CD
                    , R.COMPANY_ID
                    , R.COMPANY_NM
                    , R.TECH_GRADE_CD
                    , R.HP_NO
                    , R.DEPT_CD
                    , R.DEPT_NM
                    , R.CNTC_NO
                    , R.CNTC_NM
                    , R.CNTC_ED_DT
                    , R.REG_ID_DT
                    , R.PRE_ID_DT
                    , R.EXT_ID_DT
                    , R.EXP_ID_DT
                    , R.CLOUD_IP_ADDR
                    , R.PC_IP_ADDR
                    , R.OFFCIE_TEL_NO
                    , R.N1_ORG_SMIT_YN
                    , R.N2_ORG_SMIT_YN
                    , R.REQ_ID
                    , R.DTL_SEQ
                    , R.RMK
                    , R.FRID
                    , R.FRDT
                    , R.LMID
                    , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    AS LMDT
                    , R.LMPID
                    , '1' AS STATUS
                FROM
                    SR_CH_IDCARD_DTL_REQ R, SR_BASE_INFO B, WF_REQ_TMPLAT_HT T
                WHERE 1 = 1
                AND R.REQ_ID = B.REQ_ID AND B.REQ_TMPLAT_ID = T.REQ_TMPLAT_ID               
                AND T.SVC_DTL_CD = 'WFSR0G00' AND T.REQ_TMPLAT_NM LIKE '%발급'
                AND R.REQ_ID = pi_req_id
                AND R.USER_ID IS NULL
                
        )
        LOOP
                v_user_id := CUR.USER_ID;
            
                /* IT작업신청서 사번 UPDATE */
                UPDATE SR_CH_IDCARD_DTL_REQ
                   SET USER_ID = CUR.USER_ID
                 WHERE REQ_ID = CUR.REQ_ID
                   AND DTL_SEQ = CUR.DTL_SEQ;
                  
        
                /* 외주 마스터정보 INSERT( IT작업신청서  ) */
                
                INSERT INTO OM_USER_MT
                (
                    USER_ID
                   ,USER_NM
                   ,USER_EN_NM
                   ,OM_DIV
                   ,COMPANY_ID
                   ,COMPANY_NM
                   ,CNTC_GRADE
                   ,HP_NO
                   ,DEPT_CD
                   ,DEPT_NM
                   ,CNTC_NO
                   ,CNTC_NM
                   ,CNTC_ED_DT
                   ,REG_ID_DT
                   ,PRE_ID_DT
                   ,EXT_ID_DT
                   ,EXP_ID_DT
                   ,CLOUD_IP_ADDR
                   ,PC_IP_ADDR
                   ,OFFCIE_TEL_NO
                   ,N1_ORG_SMIT_YN
                   ,N2_ORG_SMIT_YN
                   ,REQ_ID
                   ,RMK                   
                   ,FRID ,FRDT
                   ,LMID,LMDT,LMPID
                )
                VALUES
                (
                    CUR.USER_ID
                   , CUR.USER_NM
                   , CUR.USER_EN_NM
                   , CUR.EMPL_GB_CD
                   , CUR.COMPANY_ID
                   , CUR.COMPANY_NM
                   , CUR.TECH_GRADE_CD
                   , CUR.HP_NO
                   , CUR.DEPT_CD
                   , CUR.DEPT_NM
                   , CUR.CNTC_NO
                   , CUR.CNTC_NM
                   , CUR.CNTC_ED_DT
                   , CUR.REG_ID_DT
                   , CUR.PRE_ID_DT
                   , CUR.EXT_ID_DT
                   , CUR.EXP_ID_DT
                   , CUR.CLOUD_IP_ADDR
                   , CUR.PC_IP_ADDR
                   , CUR.OFFCIE_TEL_NO
                   , CUR.N1_ORG_SMIT_YN
                   , CUR.N2_ORG_SMIT_YN
                   , CUR.REQ_ID
                   , CUR.RMK
                   , CUR.FRID, CUR.FRDT
                   , CUR.LMID, CUR.LMDT, CUR.LMPID
                )
                ;
            
              
                /* 사번 마스터정보 INSERT( IT작업신청서  ) */
                
                INSERT INTO FOMM_USER_MT
                (
                    USER_ID
                    ,USER_NM
                    ,USER_ENG_NAME
                    ,CO_CD
                    ,CO_NM
                    ,DEPT_CD
                    ,DEPT_NM
                    ,TELNUM
                    ,MOBILE_NUM
                    ,USER_TYPE
                    ,HIRE_DATE
                    ,RETIRE_DUE_DATE
                    ,RETIRE_DATE
                    ,LEVEL_TYPE
                    ,CNTC_NO
                    ,REQ_ID
                    ,STATUS
                    ,USE_YN
                    ,RMK
                    ,FRID ,FRDT
                    ,LMID,LMDT,LMPID
                )
                VALUES
                (
                    CUR.USER_ID
                   , CUR.USER_NM
                   , CUR.USER_EN_NM
                   , CUR.COMPANY_ID
                   , CUR.COMPANY_NM
                   , CUR.DEPT_CD
                   , CUR.DEPT_NM
                   , CUR.OFFCIE_TEL_NO
                   , CUR.HP_NO
                   , CUR.EMPL_GB_CD
                   , CUR.REG_ID_DT
                   , CUR.PRE_ID_DT
                   , CUR.EXP_ID_DT
                   , CUR.TECH_GRADE_CD
                   , CUR.CNTC_NO
                   , CUR.REQ_ID
                   , CUR.STATUS
                   , CASE WHEN CUR.STATUS = '1' THEN 'Y' ELSE 'N' END 
                   , CUR.RMK
                   , CUR.FRID, CUR.FRDT
                   , CUR.LMID, CUR.LMDT, CUR.LMPID
                )
                ;               
        
               
                INSERT INTO IF_USER_SEND_HIST
                (
                    SEND_HIST_ID
                    ,IF_ID
                    ,IF_NM
                    ,SOURCE_TBL
                    ,TARGET_TBL
                    ,OCCR_DT
                    ,OCCR_ST_CD
                    ,CRUD_ST_CD
                    ,STATUS
                    ,HIRE_DATE
                    ,RETIRE_DATE
                    ,USER_ID
                    ,USER_NM
                    ,DEPT_PART_ID
                    ,USER_TYPE
                    ,TBD_01
                    ,LMDT
                )
                VALUES
                (
                     'USER' || to_char(sysdate, 'yyyymmdd') || LPAD(SEQ_HIST_ID.nextval, 5, '0')  
                   , 'IF_USER_ITSM_SEND'
                   , '외주정보 NITSM to ITSM 재전송'
                   , 'NITSM.FOMM_USER_MT'
                   , 'ITSM.PM_USER'
                   , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                   , 'I'
                   , 'I'
                   , CUR.STATUS
                   , CUR.REG_ID_DT
                   , CUR.EXP_ID_DT                   
                   , CUR.USER_ID
                   , CUR.USER_NM
                   , CUR.DEPT_CD
                   , CUR.EMPL_GB_CD
                   , CASE WHEN CUR.EMPL_GB_CD = '3' THEN '신규(개발외주)'
                          WHEN CUR.EMPL_GB_CD = '4' THEN '신규(상주외주)'
                          WHEN CUR.EMPL_GB_CD = '7' THEN '신규(위탁용역)'                          
                     END 
                   , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                )
                ;                              
               
        END LOOP;
        
        COMMIT;
       
        INSERT
          INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
        VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                 , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                      FROM SY_ERROR_LOG
                     WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                 , 'SYSJOB'
                 , ''
                 , 'PRC_OM_USER_MT_CREATE'
                 , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS')  || 'REQ_ID[' || pi_req_id || '] USER_ID[' || v_user_id || ']  Procedure 완료'
                 , ''
                 , SYSDATE
                 , ''
                 , '' );
    
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OM_USER_MT_CREATE  COMMIT===');
    
    EXCEPTION   WHEN  OTHERS   THEN
    
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
        ROLLBACK;
    
        INSERT
              INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
            VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                     , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                          FROM SY_ERROR_LOG
                         WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                     , 'SYSJOB'
                     , ''
                     , 'PRC_OM_USER_MT_CREATE'
                     , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || 'REQ_ID[' || pi_req_id || '] USER_ID[' || v_user_id || ']  Procedure 예외 발생'
                     , ''
                     , SYSDATE
                     , ''
                     , '' );
        
        COMMIT;
    
        O_ERRMSG := SQLERRM;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OM_USER_MT_CREATE 예외 발생하여 ERROR LOG 추가합니다. ===');

END;
/

CREATE OR REPLACE PROCEDURE PRC_OM_USER_MT_CS_CREATE
(
    pi_req_id         IN VARCHAR2,
    pi_wf_proc_cd         IN VARCHAR2,
    pi_lmid           IN VARCHAR2,
    pi_lmpid          IN VARCHAR2
)
IS
v_user_id VARCHAR2(20) := '';
O_ERRMSG VARCHAR2(4000) := '';

BEGIN
    dbms_output.put_line('pi_req_id : ' || pi_req_id);
    
        /* 외주직원(SVC_DTL_CD = 'WFSR0G00' )  고객센터접속코드 발급  */
        FOR CUR IN
        (
                SELECT 
                    CASE WHEN USER_ID IS NULL THEN  
                          's'|| LPAD(TO_NUMBER(
                          CASE WHEN R.EMPL_GB_CD = '7' THEN
                            (SELECT SUBSTR(NVL(MAX(X.USER_ID),'s0000000'),2,7) FROM FOMM_USER_MT X WHERE X.USER_ID LIKE 's%' AND X.USER_TYPE = '7' ) 
                          END) + ROWNUM ,7, '0') 
                      ELSE USER_ID END AS USER_ID
                    , R.USER_NM
                    , R.USER_EN_NM
                    , R.EMPL_GB_CD
                    , R.COMPANY_ID
                    , R.COMPANY_NM
                    , R.TECH_GRADE_CD
                    , R.HP_NO
                    , R.DEPT_CD
                    , R.DEPT_NM
                    , R.CNTC_NO
                    , R.CNTC_NM
                    , R.CNTC_ED_DT
                    , R.REG_ID_DT
                    , R.PRE_ID_DT
                    , R.EXT_ID_DT
                    , R.EXP_ID_DT
                    , R.CLOUD_IP_ADDR
                    , R.PC_IP_ADDR
                    , R.OFFCIE_TEL_NO
                    , R.N1_ORG_SMIT_YN
                    , R.N2_ORG_SMIT_YN
                    , R.REQ_ID
                    , R.DTL_SEQ
                    , R.RMK
                    , R.FRID
                    , R.FRDT
                    , R.LMID
                    , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    AS LMDT
                    , R.LMPID
                    , '1' AS STATUS
                FROM
                    SR_CH_IDCARD_DTL_REQ R, SR_BASE_INFO B, WF_REQ_TMPLAT_HT T
                WHERE 1 = 1
                AND R.REQ_ID = B.REQ_ID AND B.REQ_TMPLAT_ID = T.REQ_TMPLAT_ID               
                AND T.SVC_DTL_CD = 'WFSR0G00' AND T.REQ_TMPLAT_NM LIKE '%발급'
                AND R.REQ_ID = pi_req_id
               -- AND R.USER_ID IS NULL
                
        )
        LOOP    
                
        dbms_output.put_line('pi_wf_proc_cd : ' || pi_wf_proc_cd);        
                v_user_id := CUR.USER_ID;
            IF pi_wf_proc_cd = 'WF_PROC_2010' THEN
                /* IT작업신청서 사번 UPDATE */
                UPDATE SR_CH_IDCARD_DTL_REQ
                   SET USER_ID = CUR.USER_ID
                 WHERE REQ_ID = CUR.REQ_ID
                   AND DTL_SEQ = CUR.DTL_SEQ;
                  
        
                /* 외주 마스터정보 INSERT( IT작업신청서  ) */
                
                INSERT INTO OM_USER_MT
                (
                    USER_ID
                   ,USER_NM
                   ,USER_EN_NM
                   ,OM_DIV
                   ,COMPANY_ID
                   ,COMPANY_NM
                   ,CNTC_GRADE
                   ,HP_NO
                   ,DEPT_CD
                   ,DEPT_NM
                   ,CNTC_NO
                   ,CNTC_NM
                   ,CNTC_ED_DT
                   ,REG_ID_DT
                   ,PRE_ID_DT
                   ,EXT_ID_DT
                   ,EXP_ID_DT
                   ,CLOUD_IP_ADDR
                   ,PC_IP_ADDR
                   ,OFFCIE_TEL_NO
                   ,N1_ORG_SMIT_YN
                   ,N2_ORG_SMIT_YN
                   ,REQ_ID
                   ,RMK                   
                   ,FRID ,FRDT
                   ,LMID,LMDT,LMPID
                )
                VALUES
                (
                    CUR.USER_ID
                   , CUR.USER_NM
                   , CUR.USER_EN_NM
                   , CUR.EMPL_GB_CD
                   , CUR.COMPANY_ID
                   , CUR.COMPANY_NM
                   , CUR.TECH_GRADE_CD
                   , CUR.HP_NO
                   , CUR.DEPT_CD
                   , CUR.DEPT_NM
                   , CUR.CNTC_NO
                   , CUR.CNTC_NM
                   , CUR.CNTC_ED_DT
                   , CUR.REG_ID_DT
                   , CUR.PRE_ID_DT
                   , CUR.EXT_ID_DT
                   , CUR.EXP_ID_DT
                   , CUR.CLOUD_IP_ADDR
                   , CUR.PC_IP_ADDR
                   , CUR.OFFCIE_TEL_NO
                   , CUR.N1_ORG_SMIT_YN
                   , CUR.N2_ORG_SMIT_YN
                   , CUR.REQ_ID
                   , CUR.RMK
                   , CUR.FRID, CUR.FRDT
                   , CUR.LMID, CUR.LMDT, CUR.LMPID
                )
                ;
            
              
                /* 사번 마스터정보 INSERT( IT작업신청서  ) */
                
                INSERT INTO FOMM_USER_MT
                (
                    USER_ID
                    ,USER_NM
                    ,USER_ENG_NAME
                    ,CO_CD
                    ,CO_NM
                    ,DEPT_CD
                    ,DEPT_NM
                    ,TELNUM
                    ,MOBILE_NUM
                    ,USER_TYPE
                    ,HIRE_DATE
                    ,RETIRE_DUE_DATE
                    ,RETIRE_DATE
                    ,LEVEL_TYPE
                    ,CNTC_NO
                    ,REQ_ID
                    ,STATUS
                    ,USE_YN
                    ,RMK
                    ,FRID ,FRDT
                    ,LMID,LMDT,LMPID
                )
                VALUES
                (
                    CUR.USER_ID
                   , CUR.USER_NM
                   , CUR.USER_EN_NM
                   , CUR.COMPANY_ID
                   , CUR.COMPANY_NM
                   , CUR.DEPT_CD
                   , CUR.DEPT_NM
                   , CUR.OFFCIE_TEL_NO
                   , CUR.HP_NO
                   , CUR.EMPL_GB_CD
                   , CUR.REG_ID_DT
                   , CUR.PRE_ID_DT
                   , CUR.EXP_ID_DT
                   , CUR.TECH_GRADE_CD
                   , CUR.CNTC_NO
                   , CUR.REQ_ID
                   , CUR.STATUS
                   , CASE WHEN CUR.STATUS = '1' THEN 'Y' ELSE 'N' END 
                   , CUR.RMK
                   , CUR.FRID, CUR.FRDT
                   , CUR.LMID, CUR.LMDT, CUR.LMPID
                )
                ;               
            END IF;
            IF pi_wf_proc_cd = 'WF_PROC_3010' THEN     
                INSERT INTO IF_USER_SEND_HIST
                (
                    SEND_HIST_ID
                    ,IF_ID
                    ,IF_NM
                    ,SOURCE_TBL
                    ,TARGET_TBL
                    ,OCCR_DT
                    ,OCCR_ST_CD
                    ,CRUD_ST_CD
                    ,STATUS
                    ,HIRE_DATE
                    ,RETIRE_DATE
                    ,USER_ID
                    ,USER_NM
                    ,DEPT_PART_ID
                    ,USER_TYPE
                    ,TBD_01
                    ,LMDT
                )
                VALUES
                (
                     'USER' || to_char(sysdate, 'yyyymmdd') || LPAD(SEQ_HIST_ID.nextval, 5, '0')  
                   , 'IF_USER_ITSM_SEND'
                   , '외주정보 NITSM to ITSM 재전송'
                   , 'NITSM.FOMM_USER_MT'
                   , 'ITSM.PM_USER'
                   , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                   , 'I'
                   , 'I'
                   , CUR.STATUS
                   , CUR.REG_ID_DT
                   , CUR.EXP_ID_DT                   
                   , CUR.USER_ID
                   , CUR.USER_NM
                   , CUR.DEPT_CD
                   , CUR.EMPL_GB_CD
                   , CASE WHEN CUR.EMPL_GB_CD = '3' THEN '신규(개발외주)'
                          WHEN CUR.EMPL_GB_CD = '4' THEN '신규(상주외주)'
                          WHEN CUR.EMPL_GB_CD = '7' THEN '신규(위탁용역)'                          
                     END 
                   , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
                )
                ;                              
               
            END IF;
        END LOOP;
        
        COMMIT;
       
        INSERT
          INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
        VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                 , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                      FROM SY_ERROR_LOG
                     WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                 , 'SYSJOB'
                 , ''
                 , 'PRC_OM_USER_MT_CREATE'
                 , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS')  || 'REQ_ID[' || pi_req_id || '] USER_ID[' || v_user_id || ']  Procedure 완료'
                 , ''
                 , SYSDATE
                 , ''
                 , '' );
    
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OM_USER_MT_CREATE  COMMIT===');
    
    EXCEPTION   WHEN  OTHERS   THEN
    
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
        ROLLBACK;
    
        INSERT
              INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
            VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                     , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                          FROM SY_ERROR_LOG
                         WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                     , 'SYSJOB'
                     , ''
                     , 'PRC_OM_USER_MT_CS_CREATE' --pi_wf_proc_cd
                     , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || 'REQ_ID[' || pi_req_id || '] USER_ID[' || v_user_id || '] WF_PROC_CD[' || pi_wf_proc_cd || ']  Procedure 예외 발생'
                     , ''
                     , SYSDATE
                     , ''
                     , '' );
        
        COMMIT;
    
        O_ERRMSG := SQLERRM;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OM_USER_MT_CREATE 예외 발생하여 ERROR LOG 추가합니다. ===');

END;
/

CREATE OR REPLACE PROCEDURE PRC_OM_USER_MT_UPDATE
(
    pi_req_id         IN VARCHAR2,
    pi_lmid           IN VARCHAR2,
    pi_lmpid          IN VARCHAR2
)
IS
v_user_id VARCHAR2(20) := '';
v_req_st VARCHAR2(20) := '';
O_ERRMSG VARCHAR2(4000) := '';

BEGIN
    dbms_output.put_line('pi_req_id : ' || pi_req_id);
    
        /* 외주직원(SVC_DTL_CD = 'WFSR0G00' ) IT외주직원사번 해지 / IT외주직원사번 연장 / 현업용역사번 해지 / 고객센터접속코드 해지  */
        FOR CUR IN
        (
                SELECT 
                      R.REQ_ID
                    , R.DTL_SEQ
                    , R.USER_ID
                    , R.USER_NM
                    , R.USER_EN_NM
                    , R.EMPL_GB_CD
                    , R.COMPANY_ID
                    , R.COMPANY_NM
                    , R.TECH_GRADE_CD
                    , R.HP_NO
                    , R.DEPT_CD
                    , R.DEPT_NM
                    , R.CNTC_NO
                    , R.CNTC_NM
                    , R.CNTC_ED_DT
                    , R.REG_ID_DT
                    , R.PRE_ID_DT
                    , R.EXT_ID_DT
                    , R.EXP_ID_DT
                    , R.CLOUD_IP_ADDR
                    , R.PC_IP_ADDR
                    , R.OFFCIE_TEL_NO
                    , R.N1_ORG_SMIT_YN
                    , R.N2_ORG_SMIT_YN
                    , R.RMK
                    , R.FRID
                    , R.FRDT
                    , R.LMID
                    , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    AS LMDT
                    , R.LMPID
                    , T.REQ_TMPLAT_ID
                    , T.REQ_TMPLAT_NM
                    , CASE WHEN T.REQ_TMPLAT_ID IN ('WFT240056', 'WFT240064', 'WFT240066')  THEN '해지' ELSE '연장' END AS REQ_ST_XC
                FROM
                    SR_CH_IDCARD_DTL_REQ R, SR_BASE_INFO B, WF_REQ_TMPLAT_HT T
                WHERE 1 = 1
                AND R.REQ_ID = B.REQ_ID AND B.REQ_TMPLAT_ID = T.REQ_TMPLAT_ID                
                AND T.SVC_DTL_CD = 'WFSR0G00' AND ( T.REQ_TMPLAT_NM LIKE '%해지' OR T.REQ_TMPLAT_NM LIKE '%연장' ) 
                AND R.USER_ID IS NOT NULL
                AND R.REQ_ID = pi_req_id
                ORDER BY R.DTL_SEQ
                
        )
        LOOP
              v_user_id := CUR.USER_ID;
              v_req_st := CUR.REQ_ST_XC;
                
                /* IT외주직원사번해지(WFT240056), 현업용역사번해지(WFT240064), 고객센터접속코드해지(WFT240066), IT외주직원사번연장(WFT240058) */
              IF CUR.REQ_ST_XC = '해지' THEN
              
                        UPDATE OM_USER_MT
                           SET EXP_ID_DT = CUR.EXP_ID_DT   
                              ,PRE_ID_DT = CUR.EXP_ID_DT 
                              ,CNTC_NO = CUR.CNTC_NO
                              ,REQ_ID = CUR.REQ_ID
                              ,STATE = 'N'
                              ,RMK = CUR.RMK
                              ,LMID = CUR.LMID 
                              ,LMDT = CUR.LMDT 
                              ,LMPID = CUR.LMPID
                        WHERE USER_ID = CUR.USER_ID;
              
    
                        UPDATE FOMM_USER_MT
                           SET RETIRE_DATE = CUR.EXP_ID_DT  
                              ,RETIRE_DUE_DATE = CUR.EXP_ID_DT
                              ,CNTC_NO = CUR.CNTC_NO
                              ,REQ_ID = CUR.REQ_ID
                              ,USE_YN = 'N'
                              ,RMK = CUR.RMK
                              ,LMID = CUR.LMID 
                              ,LMDT = CUR.LMDT 
                              ,LMPID = CUR.LMPID
                        WHERE USER_ID = CUR.USER_ID;
              END IF;
             
              IF CUR.REQ_ST_XC = '연장' THEN 
                
                        UPDATE OM_USER_MT
                           SET PRE_ID_DT = CUR.EXT_ID_DT
                              ,EXP_ID_DT = NULL 
                              ,CNTC_NO = CUR.CNTC_NO
                              ,REQ_ID = CUR.REQ_ID
                              ,RMK = CUR.RMK
                              ,LMID = CUR.LMID 
                              ,LMDT = CUR.LMDT 
                              ,LMPID = CUR.LMPID
                        WHERE USER_ID = CUR.USER_ID;
              
    
                        UPDATE FOMM_USER_MT
                           SET RETIRE_DUE_DATE = CUR.EXT_ID_DT
                              ,RETIRE_DATE = NULL 
                              ,CNTC_NO = CUR.CNTC_NO
                              ,REQ_ID = CUR.REQ_ID
                              ,USE_YN = 'Y'
                              ,RMK = CUR.RMK
                              ,LMID = CUR.LMID 
                              ,LMDT = CUR.LMDT 
                              ,LMPID = CUR.LMPID
                        WHERE USER_ID = CUR.USER_ID;

              END IF;
             
                             
               
            INSERT INTO IF_USER_SEND_HIST
            (
                SEND_HIST_ID
                ,IF_ID
                ,IF_NM
                ,SOURCE_TBL
                ,TARGET_TBL
                ,OCCR_DT
                ,OCCR_ST_CD
                ,CRUD_ST_CD
                ,STATUS
                ,HIRE_DATE
                ,RETIRE_DATE
                ,USER_ID
                ,USER_NM
                ,DEPT_PART_ID
                ,USER_TYPE
                ,TBD_01
                ,LMDT
            )
            VALUES
            (
                 'USER' || to_char(sysdate, 'yyyymmdd') || LPAD(SEQ_HIST_ID.nextval, 5, '0') 
               , 'IF_USER_ITSM_SEND'
               , '외주정보 NITSM to ITSM 재전송'
               , 'NITSM.FOMM_USER_MT'
               , 'ITSM.PM_USER'
               , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
               , 'I'
               , CASE WHEN CUR.REQ_ST_XC = '해지' THEN 'U'
                      WHEN CUR.REQ_ST_XC = '연장' THEN 'U'
                 END
               , CASE WHEN CUR.REQ_ST_XC = '해지' THEN '0'
                      WHEN CUR.REQ_ST_XC = '연장' THEN '1'
                 END
               , CUR.REG_ID_DT
               , CUR.EXP_ID_DT                                    
               , CUR.USER_ID
               , CUR.USER_NM
               , CUR.DEPT_CD
               , CUR.EMPL_GB_CD
               , CUR.REQ_ST_XC 
               , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            )
            ; 
                                                     
        END LOOP;
                  
        INSERT
          INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
        VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                 , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                      FROM SY_ERROR_LOG
                     WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                 , 'SYSJOB'
                 , ''
                 , 'PRC_OM_USER_MT_CREATE'
                 , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || 'REQ_ID[' || pi_req_id || '] USER_ID[' || v_user_id || '] REQ_ST[' || v_req_st || ']   Procedure 완료'
                 , ''
                 , SYSDATE
                 , ''
                 , '' );
    
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OM_USER_MT_CREATE  COMMIT===');
    EXCEPTION   WHEN  OTHERS   THEN
        INSERT
              INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
            VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                     , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                          FROM SY_ERROR_LOG
                         WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                     , 'SYSJOB'
                     , ''
                     , 'PRC_OM_USER_MT_CREATE'
                     , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || 'REQ_ID[' || pi_req_id || '] USER_ID[' || v_user_id || '] REQ_ST[' || v_req_st || ']  Procedure 예외 발생'
                     , ''
                     , SYSDATE
                     , ''
                     , '' );
        
        COMMIT;
    
        ROLLBACK;
        O_ERRMSG := SQLERRM;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OM_USER_MT_CREATE 예외 발생하여 ERROR LOG 추가합니다. ===');

END;
/

CREATE OR REPLACE PROCEDURE PRC_OP_NWIP_MT
(
    pi_req_id          IN VARCHAR    -- REQID
    ,pi_lmid           IN VARCHAR    -- REQID
    ,pi_lmpid          IN VARCHAR    -- REQID
)
IS
O_ERRMSG VARCHAR2(4000) := '';

BEGIN
         FOR CUR IN
                (
                    SELECT 
                          A.REQ_ID
                        , A.DTL_SEQ
                        , A.REG_CUD_CD
                        , A.CI_ID
                        , A.HOST_NM
                        , A.SYS_IP_CD
                        , A.USE_IP_CD
                        , A.ETC_COMMENT
                        , A.V_IP_YN
                        , A.IP_ADDR
                        , A.MAC_ADDR
                        , A.SERIAL_NO
                        , A.USAGE_NM
                        , A.BIZ_USER_ID
                        , A.BIZ_USER_NM
                        , A.MNG_USER_ID
                        , A.MNG_USER_NM
                        , A.SYS_IPMNG_CD
                        , A.NET_NM
                        , A.ETH_CHNL_YN
                        , A.NIC_TYPE_CD
                        , A.SYS_RACK_NM
                        , A.NET_RACK_NM
                        , A.SYS_RACK_POS_CD
                        , A.NET_RACK_POS_CD
                        , A.MAIN_SWITCH_NM
                        , A.MAIN_SWITCH_NO
                        , A.BKUP_SWITCH_NM
                        , A.BKUP_SWITCH_NO
                        , A.IP_ED_DT
                        , A.RMK
                        , A.FRID
                        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    AS FRDT
                        , A.LMID
                        , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')    AS LMDT
                        , A.LMPID
                        , (SELECT MAX(REG_STIME) FROM WF_PROC_HIST WHERE PROC_NUMBER = A.REQ_ID ) AS APPR_DT
                        , 'NWIP' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') ||  LPAD(ROWNUM,2,'0') AS NWIP_ID
                        , (SELECT REQ_USER_ID FROM SR_BASE_INFO B WHERE B.REQ_ID = A.REQ_ID) AS REQ_USER_ID
                        , (SELECT REQ_USER_NM FROM SR_BASE_INFO B WHERE B.REQ_ID = A.REQ_ID) AS REQ_USER_NM                    
                    FROM
                        SR_CH_NWIP_DTL_REQ A 
                    WHERE 1 = 1
                    AND A.REQ_ID = pi_req_id
                )
        LOOP
        
               /* HIST 저장 */
                INSERT INTO OP_NWIP_MT_HIST
                (
                    HIST_NO, REG_HIST_DATE, NWIP_DTL_ID,
                    REG_USER_ID, REG_USER_NM, APPR_DT,
                    REQ_ID,DTL_SEQ,REG_CUD_CD,CI_ID,HOST_NM,SYS_IP_CD,USE_IP_CD,ETC_COMMENT,V_IP_YN,IP_ADDR,MAC_ADDR,SERIAL_NO,USAGE_NM,BIZ_USER_ID,BIZ_USER_NM,MNG_USER_ID,MNG_USER_NM,SYS_IPMNG_CD,NET_NM,ETH_CHNL_YN,NIC_TYPE_CD,SYS_RACK_NM,NET_RACK_NM,SYS_RACK_POS_CD,NET_RACK_POS_CD,MAIN_SWITCH_NM,MAIN_SWITCH_NO,BKUP_SWITCH_NM,BKUP_SWITCH_NO,IP_ED_DT,RMK,FRID,FRDT,LMID,LMDT,LMPID
                    ,HIST_DESC
                )
                SELECT 
                    (SELECT TO_NUMBER(NVL(MAX(X.HIST_NO), '0')) FROM OP_NWIP_MT_HIST X WHERE X.IP_ADDR = M.IP_ADDR )+ROWNUM AS HIST_NO , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') AS REG_HIST_DATE, NWIP_ID,
                    REG_USER_ID, REG_USER_NM, APPR_DT,
                    REQ_ID,DTL_SEQ,REG_CUD_CD,CI_ID,HOST_NM,SYS_IP_CD,USE_IP_CD,ETC_COMMENT,V_IP_YN,IP_ADDR,MAC_ADDR,SERIAL_NO,USAGE_NM,BIZ_USER_ID,BIZ_USER_NM,MNG_USER_ID,MNG_USER_NM,SYS_IPMNG_CD,NET_NM,ETH_CHNL_YN,NIC_TYPE_CD,SYS_RACK_NM,NET_RACK_NM,SYS_RACK_POS_CD,NET_RACK_POS_CD,MAIN_SWITCH_NM,MAIN_SWITCH_NO,BKUP_SWITCH_NM,BKUP_SWITCH_NO,IP_ED_DT,RMK,FRID,FRDT,LMID,LMDT,LMPID
                    ,'네트워크 관리자 IP ' || (SELECT CMM_CD_NM FROM FOMM_CMM_CD_MT WHERE UP_CMM_CD = 'REG_CUD_CD' AND CMM_CD = M.REG_CUD_CD) || '신청' AS HIST_DESC 
                  FROM OP_NWIP_MT M
                 WHERE 1=1
                   AND IP_ADDR = CUR.IP_ADDR;            
                      
                 /* MT 1차 이력 보관 , 이후 이전 데이터 삭제   */
                DELETE FROM OP_NWIP_MT
                 WHERE 1=1
                   AND IP_ADDR = CUR.IP_ADDR;                     
        
                
                /* MT 저장 */   
                INSERT INTO OP_NWIP_MT
                (
                    NWIP_ID, REG_USER_ID, REG_USER_NM, APPR_DT,
                    REQ_ID,DTL_SEQ,REG_CUD_CD,CI_ID,HOST_NM,SYS_IP_CD,USE_IP_CD,ETC_COMMENT,V_IP_YN,IP_ADDR,MAC_ADDR,SERIAL_NO,USAGE_NM,BIZ_USER_ID,BIZ_USER_NM,MNG_USER_ID,MNG_USER_NM,SYS_IPMNG_CD,NET_NM,ETH_CHNL_YN,NIC_TYPE_CD,SYS_RACK_NM,NET_RACK_NM,SYS_RACK_POS_CD,NET_RACK_POS_CD,MAIN_SWITCH_NM,MAIN_SWITCH_NO,BKUP_SWITCH_NM,BKUP_SWITCH_NO,IP_ED_DT,RMK,FRID,FRDT,LMID,LMDT,LMPID
                )
                VALUES
                (
                    CUR.NWIP_ID, CUR.REQ_USER_ID, CUR.REQ_USER_NM, CUR.APPR_DT,
                    CUR.REQ_ID, CUR.DTL_SEQ, CUR.REG_CUD_CD, CUR.CI_ID, CUR.HOST_NM, CUR.SYS_IP_CD, CUR.USE_IP_CD, CUR.ETC_COMMENT, CUR.V_IP_YN, CUR.IP_ADDR, CUR.MAC_ADDR, CUR.SERIAL_NO, CUR.USAGE_NM, CUR.BIZ_USER_ID, CUR.BIZ_USER_NM, CUR.MNG_USER_ID, CUR.MNG_USER_NM, CUR.SYS_IPMNG_CD, CUR.NET_NM, CUR.ETH_CHNL_YN, CUR.NIC_TYPE_CD, CUR.SYS_RACK_NM, CUR.NET_RACK_NM, CUR.SYS_RACK_POS_CD, CUR.NET_RACK_POS_CD, CUR.MAIN_SWITCH_NM, CUR.MAIN_SWITCH_NO, CUR.BKUP_SWITCH_NM, CUR.BKUP_SWITCH_NO, CUR.IP_ED_DT, CUR.RMK, CUR.FRID, CUR.FRDT, CUR.LMID, CUR.LMDT, CUR.LMPID
                );
                
                                     
        END LOOP;
                  
        INSERT
          INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
        VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                 , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                      FROM SY_ERROR_LOG
                     WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                 , 'SYSJOB'
                 , ''
                 , 'PRC_OP_NWIP_MT'
                 , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || ' Procedure 완료'
                 , ''
                 , SYSDATE
                 , ''
                 , '' );
    
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OP_NWIP_MT  COMMIT===');
    EXCEPTION   WHEN  OTHERS   THEN
        INSERT
              INTO SY_ERROR_LOG (ERR_DATE, ERR_SEQ, USER_ID, RMT_IP, ERR_URL, ERR_MSG, PARAM_VALUE, ERR_DT, ERR_IMG_PATH, ERR_IMG_NAME)
            VALUES ( TO_CHAR(SYSDATE, 'YYYYMMDD')
                     , (SELECT NVL(MAX(ERR_SEQ)+1, 1)
                          FROM SY_ERROR_LOG
                         WHERE ERR_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD'))
                     , 'SYSJOB'
                     , ''
                     , 'PRC_OP_NWIP_MT'
                     , TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') || ' Procedure 예외 발생'
                     , ''
                     , SYSDATE
                     , ''
                     , '' );
        
        COMMIT;
    
        ROLLBACK;
        O_ERRMSG := SQLERRM;
        DBMS_OUTPUT.PUT_LINE('==  PRC_OP_NWIP_MT 예외 발생하여 ERROR LOG 추가합니다. ===');

END;
/

CREATE OR REPLACE PROCEDURE PR_PJ_WBS_RATE_CACU
(
    IN_GUBUN            IN VARCHAR2,    -- '1' : 계획기준 저장, '2' : 조정계획 기준저장
    IN_PJT_ID           IN VARCHAR2,    -- 프로젝트ID
    IN_SUB_PJT_ID       IN VARCHAR2,    -- 서브프로젝트ID
    IN_CALC_DATE        IN VARCHAR2,    -- 기준일자
    IN_LMID             IN VARCHAR2,    -- 수정자ID

    OUT_RTN_CD          OUT NUMBER,     -- 리턴코드
    OUT_RTN_MSG         OUT VARCHAR2    -- 리턴메세지
)
IS
/*======================================================================================
    시스템명   : 프로젝트 관리
    프로시저명 : PR_PJ_WBS_RATE_CACU
    설명      : WBS
    작성자     작성일자         작성내용
    정보윤     2024.01.19      최초 작성
======================================================================================*/
V_OTHER_EXIST_YN    VARCHAR2(1);

EX_EXIST_OTHER_USER EXCEPTION;

V_PLAN_WORK_DAY_CNT     NUMBER;
V_CALC_WORK_DAY_CNT     NUMBER;

V_TOT_ACTL_PLAN_RATE    PJ_WBS_TOT.ACTL_PLAN_RATE%TYPE;
V_TOT_PLAN_CMPL_RATE    PJ_WBS_TOT.PLAN_CMPL_RATE%TYPE;
V_TOT_ACTL_CMPL_RATE    PJ_WBS_TOT.ACTL_CMPL_RATE%TYPE;

V_MIN_PLAN_SDATE        PJ_WBS.PLAN_EDATE%TYPE;
V_MAX_PLAN_EDATE        PJ_WBS.PLAN_EDATE%TYPE;
V_GRP_PLAN_DAYS         PJ_WBS.PLAN_DAYS%TYPE;
V_GRP_PLAN_TOT_WORK     PJ_WBS.PLAN_TOT_WORK%TYPE;
V_GRP_PLAN_WORK         PJ_WBS.PLAN_WORK%TYPE;
V_GRP_PLAN_CMPL_RATE    PJ_WBS.PLAN_CMPL_RATE%TYPE;
V_GRP_PLAN_CMPL_MRATE   PJ_WBS.PLAN_CMPL_MRATE%TYPE;
V_GRP_ACTL_CMPL_RATE    PJ_WBS.ACTL_CMPL_RATE%TYPE;
V_GRP_ACTL_PLAN_RATE    PJ_WBS.ACTL_PLAN_RATE%TYPE;

V_PLAN_CMPL_RATE        PJ_WBS.PLAN_CMPL_RATE%TYPE;
V_PLAN_CMPL_MRATE       PJ_WBS.PLAN_CMPL_MRATE%TYPE;
V_ACTL_PLAN_RATE        PJ_WBS.ACTL_PLAN_RATE%TYPE;

V_CNT                   NUMBER;

BEGIN

    DBMS_OUTPUT.PUT_LINE('INSERT INTO PJ_WBS_TOT ' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'));

    INSERT INTO PJ_WBS_TOT
    (
          PJT_ID
        , CALC_DATE
        , VERSION
        , REG_STIME
        , REG_USER_ID
        , REG_USER_NM
        , REG_USER_DEPT
        , LMOD_SDATE
        , LMOD_USER_ID
        , LMOD_USER_NM
        , LMOD_USER_DEPT
    )
    SELECT
        PJT_ID,
        CALC_DATE,
        '0.0',
        DTIME,
        USER_ID,
        USER_NM,
        USER_DEPT,

        DTIME,
        USER_ID,
        USER_NM,
        USER_DEPT
    FROM
        (
        SELECT
              DECODE(PARENT_ID, NULL, PJT_ID, PJT_ID)   AS PJT_ID
            , IN_CALC_DATE AS CALC_DATE

            , TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')  AS DTIME
            , IN_LMID                              AS USER_ID
            , (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)   AS USER_NM
            , (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)   AS USER_DEPT

        FROM
            PJ_PROJECT A

        WHERE 1 = 1
        AND (PARENT_ID = IN_PJT_ID OR PJT_ID = IN_PJT_ID)
        ) A
    WHERE 1 = 1
    AND NOT EXISTS
                (
                SELECT 1
                FROM PJ_WBS_TOT B
                WHERE 1 = 1
                AND B.PJT_ID = A.PJT_ID
                )
    ;

    DBMS_OUTPUT.PUT_LINE('UPDATE PJ_WBS_TOT A SET ' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'));

    UPDATE PJ_WBS_TOT A SET
          CALC_DATE         = IN_CALC_DATE
        , VERSION           = CASE WHEN VERSION IS NULL THEN '0.0' ELSE VERSION END
        , LMOD_SDATE        = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
        , LMOD_USER_ID      = IN_LMID
        , LMOD_USER_NM      = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)
        , LMOD_USER_DEPT    = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)
    WHERE 1 = 1
    AND EXISTS
                (
                SELECT 1
                FROM PJ_WBS B
                WHERE (A.PJT_ID = B.PARENT_ID OR A.PJT_ID = B.PJT_ID)
                )
    ;

    V_CNT := 0;

    DBMS_OUTPUT.PUT_LINE('최하위 Tree Node에 대해서만 Days, 총 작업량, 계획작업량 계산 ' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'));

    --최하위 Tree Node에 대해서만 Days, 총 작업량, 계획작업량 계산
    FOR CUR IN (

        SELECT
              WBS_ID
            , WBS_CODE
            , WBS_NAME
            , LVL
            , PARENT_ID
            , PJT_ID
            , LEAF_YN
            , PLAN_SDATE
            , PLAN_EDATE
            , PLAN_TOT_WORK
            , PLAN_WORK
            , PLAN_CMPL_RATE
            , PLAN_CMPL_MRATE
            , WEIGHT
            , ACTL_SDATE
            , ACTL_EDATE
            , ACTL_WORK
            , ACTL_PLAN_RATE
            , ACTL_CMPL_RATE
            , STAGE_CD
            , CALC_DATE
        FROM
            (
            SELECT
                P.*,
                B.CALC_DATE,
                NVL((SELECT 'Y' FROM PJ_WBS WHERE PARENT_ID = IN_PJT_ID AND PJT_ID = P.PJT_ID AND WBS_CODE LIKE NVL(P.WBS_CODE, '1') || '.' || '%' AND ROWNUM = 1), 'N')   AS IS_CHILD_YN
            FROM
                PJ_WBS P,
                PJ_WBS_TOT B
            WHERE 1 = 1
            AND P.PJT_ID    = B.PJT_ID(+)
            AND P.PARENT_ID = IN_PJT_ID
            AND (
                 (IN_SUB_PJT_ID IS NULL AND 1 = 1) OR
                 (IN_SUB_PJT_ID IS NOT NULL AND P.PJT_ID = IN_SUB_PJT_ID)
                )
            )

        WHERE 1 = 1
        AND IS_CHILD_YN  = 'N'

        ORDER BY
            PARENT_ID DESC, PJT_ID, WBS_CODE
    )
    LOOP

        DBMS_OUTPUT.PUT_LINE('CUR.CALC_DATE : ' || CUR.CALC_DATE);

        --계획일 기준 WORK DAY 계산
        SELECT NVL(SUM(CASE WHEN HOLI_YN = 'N' THEN 1 ELSE 0 END), 0) AS WORK_DAY_CNT
        INTO V_PLAN_WORK_DAY_CNT
        FROM
            (
            SELECT
                T.*,
                ROW_NUMBER() OVER(PARTITION BY YYYYMMDD ORDER BY GUBUN) AS NUM
            FROM
                (
                SELECT
                    1   AS GUBUN,
                    YYYYMMDD,
                    HOLI_YN,
                    DAY_NAME
                FROM
                    PJ_WBS_DAY
                WHERE PJT_ID = CUR.PJT_ID
                AND YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.PLAN_EDATE

                UNION ALL

                SELECT
                    2   AS GUBUN,
                    YYYYMMDD,
                    'Y' AS HOLI_YN,
                    HOLI_NAME   AS DAY_NAME
                FROM
                    FOMM_HOLIDAY
                WHERE YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.PLAN_EDATE

                UNION ALL

                SELECT
                    9   AS GUBUN,
                    YYYYMMDD,
                    CASE
                        WHEN TO_CHAR(TO_DATE(YYYYMMDD, 'YYYYMMDD'), 'D') IN ('1', '7') THEN 'Y'
                        ELSE 'N'
                    END AS HOLI_YN,
                    TO_CHAR(TO_DATE(YEAR || MON || DAY, 'YYYYMMDD'), 'DAY') AS DAY_NAME

                FROM
                    (
                    SELECT
                        Y.YEAR || M.MON || D.DAY AS YYYYMMDD,
                        Y.YEAR,
                        M.MON,
                        D.DAY

                    FROM
                        (
                        SELECT MIN_YEAR + LEVEL - 1 AS YEAR
                        FROM
                            (
                            SELECT
                                SUBSTR(LEAST(CUR.PLAN_SDATE, CUR.PLAN_EDATE), 1, 4)       AS MIN_YEAR,
                                SUBSTR(GREATEST(CUR.PLAN_SDATE, CUR.PLAN_EDATE), 1, 4)    AS MAX_YEAR
                            FROM DUAL
                            )
                        CONNECT BY LEVEL <= MAX_YEAR - MIN_YEAR + 1
                        ) Y,
                        (SELECT LPAD(LEVEL, 2, '0') AS MON FROM DUAL CONNECT BY LEVEL <= 12) M,
                        (SELECT LPAD(LEVEL, 2, '0') AS DAY FROM DUAL CONNECT BY LEVEL <= 31) D
                    )
                WHERE 1 = 1
                AND DAY <= TO_NUMBER(TO_CHAR(LAST_DAY(TO_DATE(YEAR || MON || '01', 'YYYYMMDD')), 'DD'))
                AND YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.PLAN_EDATE
                ) T
            )
        WHERE NUM = 1
        ;

        --기준일자 기준 WORK DAY 계산
        SELECT NVL(SUM(CASE WHEN HOLI_YN = 'N' THEN 1 ELSE 0 END), 0) AS WORK_DAY_CNT
        INTO V_CALC_WORK_DAY_CNT
        FROM
            (
            SELECT
                T.*,
                ROW_NUMBER() OVER(PARTITION BY YYYYMMDD ORDER BY GUBUN) AS NUM

            FROM
                (
                SELECT
                    1   AS GUBUN,
                    YYYYMMDD,
                    HOLI_YN,
                    DAY_NAME
                FROM
                    PJ_WBS_DAY
                WHERE PJT_ID = CUR.PJT_ID
                AND YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.CALC_DATE

                UNION ALL

                SELECT
                    2   AS GUBUN,
                    YYYYMMDD,
                    'Y' AS HOLI_YN,
                    HOLI_NAME   AS DAY_NAME
                FROM
                    FOMM_HOLIDAY
                WHERE YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.CALC_DATE

                UNION ALL

                SELECT
                    9   AS GUBUN,
                    YYYYMMDD,
                    CASE
                        WHEN TO_CHAR(TO_DATE(YYYYMMDD, 'YYYYMMDD'), 'D') IN ('1', '7') THEN 'Y'
                        ELSE 'N'
                    END AS HOLI_YN,
                    TO_CHAR(TO_DATE(YEAR || MON || DAY, 'YYYYMMDD'), 'DAY') AS DAY_NAME

                FROM
                    (
                    SELECT
                        Y.YEAR || M.MON || D.DAY AS YYYYMMDD,
                        Y.YEAR,
                        M.MON,
                        D.DAY

                    FROM
                        (
                        SELECT MIN_YEAR + LEVEL - 1 AS YEAR
                        FROM
                            (
                            SELECT
                                SUBSTR(LEAST(CUR.PLAN_SDATE, CUR.CALC_DATE), 1, 4)       AS MIN_YEAR,
                                SUBSTR(GREATEST(CUR.PLAN_SDATE, CUR.CALC_DATE), 1, 4)    AS MAX_YEAR
                            FROM DUAL
                            )
                        CONNECT BY LEVEL <= MAX_YEAR - MIN_YEAR + 1
                        ) Y,
                        (SELECT LPAD(LEVEL, 2, '0') AS MON FROM DUAL CONNECT BY LEVEL <= 12) M,
                        (SELECT LPAD(LEVEL, 2, '0') AS DAY FROM DUAL CONNECT BY LEVEL <= 31) D
                    )
                WHERE 1 = 1
                AND DAY <= TO_NUMBER(TO_CHAR(LAST_DAY(TO_DATE(YEAR || MON || '01', 'YYYYMMDD')), 'DD'))
                AND YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.CALC_DATE
                ) T
            )
        WHERE NUM = 1
        ;

        V_PLAN_CMPL_RATE :=
                                CASE
                                    WHEN V_PLAN_WORK_DAY_CNT = 0
                                    THEN 0
                                    ELSE
                                        ROUND
                                        (
                                            CASE
                                                WHEN GREATEST(CUR.CALC_DATE, CUR.PLAN_SDATE) = CUR.CALC_DATE
                                                THEN
                                                    CASE
                                                        WHEN GREATEST(CUR.CALC_DATE, CUR.PLAN_EDATE) = CUR.PLAN_EDATE
                                                        THEN V_CALC_WORK_DAY_CNT
                                                        ELSE V_PLAN_WORK_DAY_CNT
                                                    END
                                                ELSE 0
                                            END
                                            /
                                            V_PLAN_WORK_DAY_CNT
                                            * 100
                                            , 1
                                        )
                                END;

        V_PLAN_CMPL_MRATE :=
                                CASE
                                    WHEN IN_GUBUN = '2'
                                    THEN
                                        CASE
                                                WHEN V_PLAN_WORK_DAY_CNT = 0
                                                THEN 0
                                                ELSE
                                                    ROUND
                                                    (
                                                        CASE
                                                            WHEN GREATEST(CUR.CALC_DATE, CUR.PLAN_SDATE) = CUR.CALC_DATE
                                                            THEN
                                                                CASE
                                                                    WHEN GREATEST(CUR.CALC_DATE, CUR.PLAN_EDATE) = CUR.PLAN_EDATE
                                                                    THEN V_CALC_WORK_DAY_CNT
                                                                    ELSE V_PLAN_WORK_DAY_CNT
                                                                END
                                                            ELSE 0
                                                        END
                                                        /
                                                        V_PLAN_WORK_DAY_CNT
                                                        * 100
                                                        , 1
                                                    )
                                            END
                                    ELSE CUR.PLAN_CMPL_MRATE
                                END;

        V_ACTL_PLAN_RATE := CASE
                                WHEN NVL(CUR.ACTL_CMPL_RATE, 0) = 0 OR NVL(V_PLAN_CMPL_MRATE, 0) = 0
                                THEN 0
                                ELSE  ROUND(CUR.ACTL_CMPL_RATE / V_PLAN_CMPL_MRATE * 100, 1)
                            END;

        /*
        DBMS_OUTPUT.PUT_LINE('최하위 Node 처리 PJT_ID : ' || CUR.PJT_ID ||
                             --' WBS_ID : ' || CUR.WBS_ID ||
                             ' WBS_CODE : ' || CUR.WBS_CODE ||
                             ' WBS_NAME : ' || CUR.WBS_NAME ||
                             --' LVL : ' || CUR.LVL ||
                             --' V_PLAN_WORK_DAY_CNT : ' || V_PLAN_WORK_DAY_CNT ||
                             --' V_CALC_WORK_DAY_CNT : ' || V_CALC_WORK_DAY_CNT ||
                             --' V_PLAN_CMPL_RATE : ' || V_PLAN_CMPL_RATE ||
                             --' V_ACTL_PLAN_RATE : ' || V_ACTL_PLAN_RATE ||
                             --' CUR.ACTL_CMPL_RATE : ' || CUR.ACTL_CMPL_RATE
                             ' CUR.PLAN_SDATE : ' || CUR.PLAN_SDATE ||
                             ' CUR.PLAN_EDATE : ' || CUR.PLAN_EDATE ||
                             ' CUR.CALC_DATE : ' || CUR.CALC_DATE
        );
        */

        /*
            PLAN_DAYS       --DAYS
            PLAN_TOT_WORK   --계획총공수
            PLAN_WORK       --계획공수
            PLAN_CMPL_RATE  --계획자동진척율
            PLAN_CMPL_MRATE --계획입력진척율
            ACTL_PLAN_RATE  --달성율
        */
        UPDATE PJ_WBS SET
            /*
            기존 PLAN_DAYS = 화면[DAYS] 항목
            (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
            */
              PLAN_DAYS     = V_PLAN_WORK_DAY_CNT

            /*
            기존 PLAN_TOT_WORK = 화면[총 작업량] 항목
            DECODE
            (
                #DS_PJ_WBS.IS_LAST_LVL#,
                'Y',
                (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
            )
            */
            , PLAN_TOT_WORK = V_PLAN_WORK_DAY_CNT

            /* 기존 PLAN_WORK = 화면[계획 작업량] 항목    ※참고 : CALC_DATE = PJ_WBS_TOT.CALC_DATE(계산기준일자)
            DECODE
            (
                GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_SDATE#),
                #DS_PJ_WBS.CALC_DATE#,
                DECODE
                (
                    GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_EDATE#),
                    #DS_PJ_WBS.PLAN_EDATE#,
                    (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.CALC_DATE#, 1, 8) AND HOLI_YN = 'N'),
                    (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                )
                , 0)
            */
            , PLAN_WORK     =
                                CASE
                                    WHEN GREATEST(CUR.CALC_DATE, CUR.PLAN_SDATE) = CUR.CALC_DATE
                                    THEN
                                        CASE
                                            WHEN GREATEST(CUR.CALC_DATE, CUR.PLAN_EDATE) = CUR.PLAN_EDATE
                                            THEN V_CALC_WORK_DAY_CNT
                                            ELSE V_PLAN_WORK_DAY_CNT
                                        END
                                    ELSE 0
                                END

            /*
            기존 PLAN_CMPL_RATE = 화면[계획] 항목    ※참고 : CALC_DATE = PJ_WBS_TOT.CALC_DATE(계산기준일자)
            DECODE
            (
                #DS_PJ_WBS.IS_LAST_LVL#,
                'Y',
                DECODE
                (
                    (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N'),
                    0,
                    0,
                    ROUND
                    (
                        (
                            DECODE
                            (
                                GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_SDATE#),
                                #DS_PJ_WBS.CALC_DATE#,
                                DECODE
                                (
                                    GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_EDATE#),
                                    #DS_PJ_WBS.PLAN_EDATE#,
                                    (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.CALC_DATE#, 1, 8) AND HOLI_YN = 'N'),
                                    (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                                ),
                                0
                            )
                            /
                            (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                        ) * 100, 1
                    )
                )
            )
            */
            , PLAN_CMPL_RATE    = V_PLAN_CMPL_RATE

            /*
            기존 PLAN_CMPL_MRATE = 화면[조정 계획] 항목    ※참고 : CALC_DATE = PJ_WBS_TOT.CALC_DATE(계산기준일자)
            DECODE
            (
                #DS_PJ_WBS.IS_AUTOCALCU#,
                'Y',
                DECODE
                (
                    #DS_PJ_WBS.IS_LAST_LVL#,
                    'Y',
                    DECODE
                    (
                        (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N'),
                        0,
                        0,
                        ROUND
                        (
                            (
                                DECODE
                                (
                                    GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_SDATE#),
                                    #DS_PJ_WBS.CALC_DATE#,
                                    DECODE
                                    (
                                        GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_EDATE#),
                                        #DS_PJ_WBS.PLAN_EDATE#,
                                        (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.CALC_DATE#, 1, 8) AND HOLI_YN = 'N'),
                                        (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                                    ),
                                    0
                                )
                                /
                                (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                            ) * 100
                            , 1
                        )
                    )
                ),
                #DS_PJ_WBS.PLAN_CMPL_MRATE#
            )
            */
            ,PLAN_CMPL_MRATE    = V_PLAN_CMPL_MRATE

            /*
            기존 ACTL_PLAN_RATE = 화면[달성율] 항목    ※참고 : CALC_DATE = PJ_WBS_TOT.CALC_DATE(계산기준일자)
            DECODE
            (
               (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N'),
                0,
                0,
                DECODE
                (
                    DECODE
                    (
                        GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_EDATE#),
                        #DS_PJ_WBS.PLAN_EDATE#,
                        (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.CALC_DATE#, 1, 8) AND HOLI_YN = 'N'),
                        (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                    ),
                    0,
                    0,
                    ROUND
                    (
                        NVL(#DS_PJ_WBS.ACTL_CMPL_RATE#, 0) /
                        ROUND
                        (
                            DECODE
                            (
                                GREATEST(#DS_PJ_WBS.CALC_DATE#, #DS_PJ_WBS.PLAN_EDATE#),
                                #DS_PJ_WBS.PLAN_EDATE#,
                                (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.CALC_DATE#, 1, 8) AND HOLI_YN = 'N'),
                                (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                            )
                            /
                            (SELECT COUNT(*) FROM SPP_PKG.TBT_PT_WORKCAL WHERE YYYYMMDD &gt;= SUBSTR(#DS_PJ_WBS.PLAN_SDATE#, 1, 8) AND YYYYMMDD &lt;= SUBSTR(#DS_PJ_WBS.PLAN_EDATE#, 1, 8) AND HOLI_YN = 'N')
                            * 100,
                            2
                        ),
                        1
                    )
                )
            )
            */
            , ACTL_PLAN_RATE    =   V_ACTL_PLAN_RATE

            , LMOD_SDATE        = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMOD_USER_ID      = IN_LMID
            , LMOD_USER_NM      = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)
            , LMOD_USER_DEPT    = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)
        WHERE 1 = 1
        AND PJT_ID      = CUR.PJT_ID
        AND PARENT_ID   = CUR.PARENT_ID
        AND WBS_ID      = CUR.WBS_ID
        ;

        V_CNT := V_CNT + 1;

    END LOOP;

    DBMS_OUTPUT.PUT_LINE('최하위 Node 처리 건수 : ' || V_CNT);

    V_CNT := 0;

    DBMS_OUTPUT.PUT_LINE('최하위 단말 노드 바로 위 상위 노드에 대한 계획, 조정계획, 실적, 달성율 계산하여 값을 저장 ' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'));

    --최하위 단말 노드 바로 위 상위 노드에 대한 계획, 조정계획, 실적, 달성율 계산하여 값을 저장
    FOR CUR IN (

        SELECT
            PJT_ID,
            WBS_ID,
            P_WBS_CODE,
            PLAN_SDATE,
            PLAN_EDATE,
            PLAN_TOT_WORK,
            PLAN_WORK,
            PLAN_CMPL_RATE,
            PLAN_CMPL_MRATE,
            ACTL_CMPL_RATE,
            ROUND(
                CASE
                    WHEN NVL(ACTL_CMPL_RATE, 0) <> 0 AND NVL(PLAN_CMPL_RATE, 0) <> 0
                    THEN ROUND(ACTL_CMPL_RATE / PLAN_CMPL_RATE * 100, 1)
                    ELSE 0
                END, 1) AS ACTL_PLAN_RATE
        FROM
            (
            SELECT
                PJT_ID,
                (SELECT WBS_ID FROM PJ_WBS WHERE PJT_ID = A.PJT_ID AND WBS_CODE = SUBSTR(A.WBS_CODE, 1, INSTR(A.WBS_CODE, '.', -1)-1))  AS WBS_ID,
                SUBSTR(A.WBS_CODE, 1, INSTR(A.WBS_CODE, '.', -1)-1) AS P_WBS_CODE,
                MIN(PLAN_SDATE)       AS PLAN_SDATE,
                MAX(PLAN_EDATE)       AS PLAN_EDATE,
                SUM(PLAN_TOT_WORK)    AS PLAN_TOT_WORK,
                SUM(PLAN_WORK)        AS PLAN_WORK,
                ROUND(SUM(PLAN_CMPL_RATE * WEIGHT / 100), 1)  AS PLAN_CMPL_RATE,
                ROUND(SUM(PLAN_CMPL_MRATE * WEIGHT / 100), 1) AS PLAN_CMPL_MRATE,
                ROUND(SUM(ACTL_CMPL_RATE * WEIGHT / 100), 1)  AS ACTL_CMPL_RATE

            FROM PJ_WBS A
            WHERE 1 = 1
            AND (A.PARENT_ID = IN_PJT_ID OR A.PARENT_ID IS NULL)
            AND (
                 (IN_SUB_PJT_ID IS NULL AND 1 = 1) OR
                 (IN_SUB_PJT_ID IS NOT NULL AND A.PJT_ID = IN_SUB_PJT_ID)
                )
            --단말 노드에 대해서만 조회
            AND NVL(
                CASE
                    WHEN PARENT_ID IS NULL AND PJT_ID = IN_PJT_ID
                    THEN 'Y'
                    ELSE (SELECT 'Y' FROM PJ_WBS WHERE PARENT_ID = IN_PJT_ID AND PJT_ID = A.PJT_ID AND WBS_CODE LIKE NVL(A.WBS_CODE, '1') || '.' || '%' AND ROWNUM = 1)
                END, 'N') = 'N'

            GROUP BY
                PJT_ID, SUBSTR(A.WBS_CODE, 1, INSTR(A.WBS_CODE, '.', -1)-1)
            )
    )
    LOOP

        --계획일 기준 WORK DAY 계산
        SELECT NVL(SUM(CASE WHEN HOLI_YN = 'N' THEN 1 ELSE 0 END), 0) AS WORK_DAY_CNT
        INTO V_GRP_PLAN_DAYS
        FROM
            (
            SELECT
                T.*,
                ROW_NUMBER() OVER(PARTITION BY YYYYMMDD ORDER BY GUBUN) AS NUM
            FROM
                (
                SELECT
                    1   AS GUBUN,
                    YYYYMMDD,
                    HOLI_YN,
                    DAY_NAME
                FROM
                    PJ_WBS_DAY
                WHERE PJT_ID = CUR.PJT_ID
                AND YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.PLAN_EDATE

                UNION ALL

                SELECT
                    2   AS GUBUN,
                    YYYYMMDD,
                    'Y' AS HOLI_YN,
                    HOLI_NAME   AS DAY_NAME
                FROM
                    FOMM_HOLIDAY
                WHERE YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.PLAN_EDATE

                UNION ALL

                SELECT
                    9   AS GUBUN,
                    YYYYMMDD,
                    CASE
                        WHEN TO_CHAR(TO_DATE(YYYYMMDD, 'YYYYMMDD'), 'D') IN ('1', '7') THEN 'Y'
                        ELSE 'N'
                    END AS HOLI_YN,
                    TO_CHAR(TO_DATE(YEAR || MON || DAY, 'YYYYMMDD'), 'DAY') AS DAY_NAME

                FROM
                    (
                    SELECT
                        Y.YEAR || M.MON || D.DAY AS YYYYMMDD,
                        Y.YEAR,
                        M.MON,
                        D.DAY

                    FROM
                        (
                        SELECT MIN_YEAR + LEVEL - 1 AS YEAR
                        FROM
                            (
                            SELECT
                                SUBSTR(LEAST(CUR.PLAN_SDATE, CUR.PLAN_EDATE), 1, 4)       AS MIN_YEAR,
                                SUBSTR(GREATEST(CUR.PLAN_SDATE, CUR.PLAN_EDATE), 1, 4)    AS MAX_YEAR
                            FROM DUAL
                            )
                        CONNECT BY LEVEL <= MAX_YEAR - MIN_YEAR + 1
                        ) Y,
                        (SELECT LPAD(LEVEL, 2, '0') AS MON FROM DUAL CONNECT BY LEVEL <= 12) M,
                        (SELECT LPAD(LEVEL, 2, '0') AS DAY FROM DUAL CONNECT BY LEVEL <= 31) D
                    )
                WHERE 1 = 1
                AND DAY <= TO_NUMBER(TO_CHAR(LAST_DAY(TO_DATE(YEAR || MON || '01', 'YYYYMMDD')), 'DD'))
                AND YYYYMMDD BETWEEN CUR.PLAN_SDATE AND CUR.PLAN_EDATE
                ) T
            )
        WHERE NUM = 1
        ;

        /*
        DBMS_OUTPUT.PUT_LINE('PJT_ID : ' || CUR.PJT_ID || ' P_WBS_CODE : ' || CUR.P_WBS_CODE ||
                             ' CUR.PLAN_SDATE : ' || CUR.PLAN_SDATE ||
                             ' CUR.PLAN_EDATE : ' || CUR.PLAN_EDATE ||
                             ' V_GRP_PLAN_DAYS : ' || V_GRP_PLAN_DAYS ||
                             ' CUR.PLAN_TOT_WORK : ' || CUR.PLAN_TOT_WORK ||
                             ' CUR.PLAN_WORK : ' || CUR.PLAN_WORK ||
                             ' CUR.PLAN_CMPL_RATE : ' || CUR.PLAN_CMPL_RATE ||
                             ' CUR.PLAN_CMPL_MRATE : ' || CUR.PLAN_CMPL_MRATE ||
                             ' CUR.ACTL_CMPL_RATE : ' || CUR.ACTL_CMPL_RATE ||
                             ' CUR.ACTL_PLAN_RATE : ' || CUR.ACTL_PLAN_RATE
        );
        */

        UPDATE PJ_WBS SET
              PLAN_SDATE        = CUR.PLAN_SDATE
            , PLAN_EDATE        = CUR.PLAN_EDATE
            , PLAN_DAYS         = V_GRP_PLAN_DAYS
            , PLAN_TOT_WORK     = CUR.PLAN_TOT_WORK
            , PLAN_WORK         = CUR.PLAN_WORK
            , PLAN_CMPL_RATE    = CUR.PLAN_CMPL_RATE
            , PLAN_CMPL_MRATE   = CUR.PLAN_CMPL_MRATE
            , ACTL_CMPL_RATE    = CUR.ACTL_CMPL_RATE
            , ACTL_PLAN_RATE    = CUR.ACTL_PLAN_RATE

            , LMOD_SDATE        = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMOD_USER_ID      = IN_LMID
            , LMOD_USER_NM      = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)
            , LMOD_USER_DEPT    = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)

        WHERE 1 = 1
        AND PJT_ID  = CUR.PJT_ID
        AND WBS_ID  = CUR.WBS_ID
        ;

        V_CNT := V_CNT + 1;

    END LOOP;

    DBMS_OUTPUT.PUT_LINE('최하위 단말 노드 바로 위 상위 노드에 대한 계획, 조정계획, 실적, 달성율 계산 건수 : ' || V_CNT || ' ' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'));

    V_CNT := 0;

    DBMS_OUTPUT.PUT_LINE('최하위 Tree Node를 제외한 상위 노드 행 데이터만 조회(최하의 단말 노드의 바로 위 상위 노드에 대한 값은 바로 위에서 구했으므로 해당 내역도 제외) ' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'));

    --최하위 Tree Node를 제외한 상위 노드 행 데이터만 조회(최하의 단말 노드의 바로 위 상위 노드에 대한 값은 바로 위에서 구했으므로 해당 내역도 제외)
    FOR CUR IN (

        SELECT
            *
        FROM
            PJ_WBS A
        WHERE 1 = 1
        AND (PARENT_ID = IN_PJT_ID OR (PARENT_ID IS NULL AND PJT_ID = IN_PJT_ID))
        AND (
             (IN_SUB_PJT_ID IS NULL AND 1 = 1) OR
             (IN_SUB_PJT_ID IS NOT NULL AND A.PJT_ID = IN_SUB_PJT_ID)
            )
        AND NVL(
            CASE
                WHEN PARENT_ID IS NULL AND PJT_ID = IN_PJT_ID
                THEN 'Y'
                ELSE (SELECT 'Y' FROM PJ_WBS WHERE PARENT_ID = IN_PJT_ID AND PJT_ID = A.PJT_ID AND WBS_CODE LIKE NVL(A.WBS_CODE, '1') || '.' || '%' AND ROWNUM = 1)
            END, 'N')  = 'Y'

        AND NOT EXISTS
                    (
                    SELECT 1
                    FROM
                        (
                        SELECT
                            PJT_ID,
                            WBS_ID,
                            (SELECT WBS_ID FROM PJ_WBS WHERE PJT_ID = B.PJT_ID AND WBS_CODE = SUBSTR(B.WBS_CODE, 1, INSTR(B.WBS_CODE, '.', -1)-1)) AS P_WBS_ID
                            --SUBSTR(WBS_CODE, 1, INSTR(WBS_CODE, '.', -1)-1) AS P_WBS_CODE
                        FROM PJ_WBS B
                        WHERE 1 = 1
                        AND (PARENT_ID = IN_PJT_ID OR (PARENT_ID IS NULL AND PJT_ID = IN_PJT_ID))
                        AND (
                             (IN_SUB_PJT_ID IS NULL AND 1 = 1) OR
                             (IN_SUB_PJT_ID IS NOT NULL AND PJT_ID = IN_SUB_PJT_ID)
                            )
                        AND NVL(
                                CASE
                                    WHEN PARENT_ID IS NULL AND PJT_ID = IN_PJT_ID
                                    THEN 'Y'
                                    ELSE (SELECT 'Y' FROM PJ_WBS WHERE PARENT_ID = IN_PJT_ID AND PJT_ID = B.PJT_ID AND WBS_CODE LIKE NVL(B.WBS_CODE, '1') || '.' || '%' AND ROWNUM = 1)
                                END, 'N') = 'N'
                        ) B
                    WHERE 1 = 1
                    AND A.PJT_ID    = B.PJT_ID
                    AND A.WBS_ID    = B.P_WBS_ID
                    --AND A.WBS_CODE  = B.P_WBS_CODE

                    )
        ORDER BY
            PARENT_ID, PJT_ID, LVL DESC, WBS_CODE
    )
    LOOP

        /*
        DBMS_OUTPUT.PUT_LINE('LOOP 안 SELECT PJT_ID : ' || CUR.PJT_ID --|| ' WBS_ID : ' || CUR.WBS_ID
                            || ' WBS_CODE : ' || CUR.WBS_CODE || ' WBS_NAME : ' || CUR.WBS_NAME || ' LVL : ' || CUR.LVL
        );
        */

        --자식 Node를 가지고 있는 각각의 부모 Node에 종속된 계획시작일, 게획종료일, Days, 총 작업량, 계획작업량 계획, 조정계획, 달성율 계산
        SELECT
            PLAN_SDATE,
            PLAN_EDATE,
            PLAN_TOT_WORK,
            PLAN_WORK,
            PLAN_CMPL_RATE,
            PLAN_CMPL_MRATE,
            ACTL_CMPL_RATE,
            ROUND(
                CASE
                    WHEN NVL(ACTL_CMPL_RATE, 0) <> 0 AND NVL(PLAN_CMPL_RATE, 0) <> 0
                    THEN ACTL_CMPL_RATE / PLAN_CMPL_RATE * 100
                    ELSE 0
                END, 1) AS ACTL_PLAN_RATE
        INTO
              V_MIN_PLAN_SDATE
            , V_MAX_PLAN_EDATE
            , V_GRP_PLAN_TOT_WORK
            , V_GRP_PLAN_WORK
            , V_GRP_PLAN_CMPL_RATE
            , V_GRP_PLAN_CMPL_MRATE
            , V_GRP_ACTL_CMPL_RATE
            , V_GRP_ACTL_PLAN_RATE
        FROM
            (
            SELECT
                MIN(PLAN_SDATE)       AS PLAN_SDATE,
                MAX(PLAN_EDATE)       AS PLAN_EDATE,
                SUM(PLAN_TOT_WORK)    AS PLAN_TOT_WORK,
                SUM(PLAN_WORK)        AS PLAN_WORK,
                ROUND(SUM(PLAN_CMPL_RATE * WEIGHT / 100), 1)  AS PLAN_CMPL_RATE,
                ROUND(SUM(PLAN_CMPL_MRATE * WEIGHT / 100), 1) AS PLAN_CMPL_MRATE,
                ROUND(SUM(ACTL_CMPL_RATE * WEIGHT / 100), 1)  AS ACTL_CMPL_RATE

            FROM PJ_WBS A
            WHERE 1 = 1
            AND WBS_CODE LIKE CUR.WBS_CODE || '%'
            AND (
                 (IN_PJT_ID = CUR.PJT_ID AND PARENT_ID = IN_PJT_ID AND LVL = 0 AND PARENT_ID IS NOT NULL) OR
                 (IN_PJT_ID <> CUR.PJT_ID AND PJT_ID = CUR.PJT_ID AND REGEXP_COUNT(WBS_CODE, '\.') = REGEXP_COUNT(CUR.WBS_CODE, '\.') + 1)
                )

            GROUP BY
                --PJT_ID, SUBSTR(A.WBS_CODE, 1, INSTR(A.WBS_CODE, '.', -1)-1)
                SUBSTR(A.WBS_CODE, 1, INSTR(A.WBS_CODE, '.', -1)-1)
            );

        --계획일 기준 WORK DAY 계산
        SELECT NVL(SUM(CASE WHEN HOLI_YN = 'N' THEN 1 ELSE 0 END), 0) AS WORK_DAY_CNT
        INTO V_GRP_PLAN_DAYS
        FROM
            (
            SELECT
                T.*,
                ROW_NUMBER() OVER(PARTITION BY YYYYMMDD ORDER BY GUBUN) AS NUM
            FROM
                (
                SELECT
                    1   AS GUBUN,
                    YYYYMMDD,
                    HOLI_YN,
                    DAY_NAME
                FROM
                    PJ_WBS_DAY
                WHERE PJT_ID = CUR.PJT_ID
                AND YYYYMMDD BETWEEN V_MIN_PLAN_SDATE AND V_MAX_PLAN_EDATE

                UNION ALL

                SELECT
                    2   AS GUBUN,
                    YYYYMMDD,
                    'Y' AS HOLI_YN,
                    HOLI_NAME   AS DAY_NAME
                FROM
                    FOMM_HOLIDAY
                WHERE YYYYMMDD BETWEEN V_MIN_PLAN_SDATE AND V_MAX_PLAN_EDATE

                UNION ALL

                SELECT
                    9   AS GUBUN,
                    YYYYMMDD,
                    CASE
                        WHEN TO_CHAR(TO_DATE(YYYYMMDD, 'YYYYMMDD'), 'D') IN ('1', '7') THEN 'Y'
                        ELSE 'N'
                    END AS HOLI_YN,
                    TO_CHAR(TO_DATE(YEAR || MON || DAY, 'YYYYMMDD'), 'DAY') AS DAY_NAME

                FROM
                    (
                    SELECT
                        Y.YEAR || M.MON || D.DAY AS YYYYMMDD,
                        Y.YEAR,
                        M.MON,
                        D.DAY

                    FROM
                        (
                        SELECT MIN_YEAR + LEVEL - 1 AS YEAR
                        FROM
                            (
                            SELECT
                                SUBSTR(LEAST(V_MIN_PLAN_SDATE, V_MAX_PLAN_EDATE), 1, 4)       AS MIN_YEAR,
                                SUBSTR(GREATEST(V_MIN_PLAN_SDATE, V_MAX_PLAN_EDATE), 1, 4)    AS MAX_YEAR
                            FROM DUAL
                            )
                        CONNECT BY LEVEL <= MAX_YEAR - MIN_YEAR + 1
                        ) Y,
                        (SELECT LPAD(LEVEL, 2, '0') AS MON FROM DUAL CONNECT BY LEVEL <= 12) M,
                        (SELECT LPAD(LEVEL, 2, '0') AS DAY FROM DUAL CONNECT BY LEVEL <= 31) D
                    )
                WHERE 1 = 1
                AND DAY <= TO_NUMBER(TO_CHAR(LAST_DAY(TO_DATE(YEAR || MON || '01', 'YYYYMMDD')), 'DD'))
                AND YYYYMMDD BETWEEN V_MIN_PLAN_SDATE AND V_MAX_PLAN_EDATE
                ) T
            )
        WHERE NUM = 1
        ;

        /*
        DBMS_OUTPUT.PUT_LINE('PJT_ID : ' || CUR.PJT_ID --|| ' WBS_ID : ' || CUR.WBS_ID
                             || ' WBS_CODE : ' || CUR.WBS_CODE || ' WBS_NAME : ' || CUR.WBS_NAME || ' LVL : ' || CUR.LVL ||
                             ' V_MIN_PLAN_SDATE : ' || V_MIN_PLAN_SDATE ||
                             ' V_MAX_PLAN_EDATE : ' || V_MAX_PLAN_EDATE ||
                             ' V_GRP_PLAN_DAYS : ' || V_GRP_PLAN_DAYS ||
                             ' V_GRP_PLAN_TOT_WORK : ' || V_GRP_PLAN_TOT_WORK ||
                             ' V_GRP_PLAN_WORK : ' || V_GRP_PLAN_WORK ||
                             ' V_GRP_PLAN_CMPL_RATE : ' || V_GRP_PLAN_CMPL_RATE ||
                             ' V_GRP_PLAN_CMPL_MRATE : ' || V_GRP_PLAN_CMPL_MRATE ||
                             ' V_GRP_ACTL_CMPL_RATE : ' || V_GRP_ACTL_CMPL_RATE ||
                             ' V_GRP_ACTL_PLAN_RATE : ' || V_GRP_ACTL_PLAN_RATE
        );
        */

        UPDATE PJ_WBS SET
              PLAN_SDATE        = V_MIN_PLAN_SDATE
            , PLAN_EDATE        = V_MAX_PLAN_EDATE
            , PLAN_DAYS         = V_GRP_PLAN_DAYS
            , PLAN_TOT_WORK     = V_GRP_PLAN_TOT_WORK
            , PLAN_WORK         = V_GRP_PLAN_WORK
            , PLAN_CMPL_RATE    = V_GRP_PLAN_CMPL_RATE
            , ACTL_CMPL_RATE    = V_GRP_ACTL_CMPL_RATE
            , PLAN_CMPL_MRATE   = V_GRP_PLAN_CMPL_MRATE
            , ACTL_PLAN_RATE    =
                                    CASE
                                        WHEN NVL(V_GRP_ACTL_CMPL_RATE, 0) = 0 OR NVL(CASE
                                                                                        WHEN IN_GUBUN = '1' THEN V_GRP_PLAN_CMPL_RATE
                                                                                        WHEN IN_GUBUN = '2' THEN V_GRP_PLAN_CMPL_MRATE
                                                                                     END, 0) = 0
                                        THEN 0
                                        ELSE ROUND(V_GRP_ACTL_CMPL_RATE / CASE
                                                                            WHEN IN_GUBUN = '1' THEN V_GRP_PLAN_CMPL_RATE
                                                                            WHEN IN_GUBUN = '2' THEN V_GRP_PLAN_CMPL_MRATE
                                                                         END * 100, 1)
                                    END

            , LMOD_SDATE        = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMOD_USER_ID      = IN_LMID
            , LMOD_USER_NM      = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)
            , LMOD_USER_DEPT    = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)

        WHERE 1 = 1
        AND PJT_ID  = CUR.PJT_ID
        AND WBS_ID  = CUR.WBS_ID
        ;

        DBMS_OUTPUT.PUT_LINE('UPDATE 실행 완료 SQL%ROWCOUNT : ' || SQL%ROWCOUNT);
        V_CNT := V_CNT + 1;

        --PJ_WBS_TOT 처리

    END LOOP
    ;

    DBMS_OUTPUT.PUT_LINE('PJ_WBS_TOT 테이블에 통계 데이터 생성 ' || TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS'));

    --PJ_WBS_TOT 테이블에 통계 데이터 생성
    FOR CUR IN
    (
        SELECT *
        FROM PJ_WBS
        WHERE 1 = 1
        AND (PARENT_ID = IN_PJT_ID OR PJT_ID = IN_PJT_ID)
        AND LVL = 0
    )
    LOOP

        UPDATE PJ_WBS_TOT SET

              PLAN_CMPL_RATE    = CASE WHEN IN_GUBUN = '1' THEN CUR.PLAN_CMPL_RATE ELSE CUR.PLAN_CMPL_MRATE END --계획진척율
            , ACTL_CMPL_RATE    = CUR.ACTL_CMPL_RATE                                                            --실제진척율
            , ACTL_PLAN_RATE    = CUR.ACTL_PLAN_RATE                                                            --전체달성율

            , LMOD_SDATE        = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMOD_USER_ID      = IN_LMID
            , LMOD_USER_NM      = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)
            , LMOD_USER_DEPT    = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_LMID)

        WHERE 1 = 1
        AND PJT_ID  = CUR.PJT_ID
        ;

    END LOOP;

    DBMS_OUTPUT.PUT_LINE('자식이 존재하는 Node 처리 건수 : ' || V_CNT);

    OUT_RTN_CD := 0;
    OUT_RTN_MSG := '정상 처리 되었습니다.';
    --DBMS_OUTPUT.PUT_LINE('에러코드 =>' || OUT_RTN_CD);
    --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
    COMMIT;
    --ROLLBACK;
    RETURN;

EXCEPTION
    WHEN OTHERS THEN
        OUT_RTN_CD := -9999;
        OUT_RTN_MSG := 'WBS 계산시 오류가 발생하였습니다.(' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        ROLLBACK;
        RETURN;
END;
/

CREATE OR REPLACE PROCEDURE PR_SR_REQ_WF_PROC_APPROVE
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
                    RAISE EX_NO_APPR_USER;
                    RETURN;
                WHEN OTHERS THEN
                    po_rtn_cd  := -7;
                    po_rtn_msg := '결재차수/결재그룹순번 확인 중 오류 발생';
                    DBMS_OUTPUT.PUT_LINE(po_rtn_msg);
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
        po_rtn_cd  := -9998;
        po_rtn_msg := '현재 결재 처리자는 [결재자 또는 대무자]에 해당하지 않아 결재 처리가 불가능 합니다.';        
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        RETURN;

        WHEN OTHERS THEN
        po_rtn_cd := -9999;
        po_rtn_msg := '요청서 결재 승인 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        RETURN;
END;
/

CREATE OR REPLACE PROCEDURE PR_SR_REQ_WF_PROC_BACK
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

v_rtrn_cger             WF_REQ_TMPLAT_PROC_HT.CGER%TYPE;         
v_rtrn_func             WF_REQ_TMPLAT_PROC_HT.FUNC%TYPE;

v_req_stat_cd           SR_BASE_INFO.REQ_STAT_CD%TYPE;

v_cur_wf_proc_cd       SR_BASE_INFO.RTRN_WF_PROC_CD%TYPE;
v_cur_map_wf_proc_cd   SR_BASE_INFO.RTRN_MAP_WF_PROC_CD%TYPE;

NO_RTRN_WF_PROC_CD EXCEPTION;
NO_RTRN_WF_FUNC_CD EXCEPTION;

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
            REPLACE(B.WF_PROC_NM, '\n', ' '),
            A.WF_PROC_CD,
            A.MAP_WF_PROC_CD
        INTO v_req_tmplat_id, v_req_tmplat_ver, v_rtrn_wf_proc_cd, v_hist_wf_proc_nm, v_cur_wf_proc_cd, v_cur_map_wf_proc_cd
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
            RETURN;
        WHEN OTHERS THEN
            po_rtn_cd  := -2;
            po_rtn_msg := '반려단계 확인시 오류가 발생했습니다.';
            RETURN;
    END;

    IF NVL(v_rtrn_wf_proc_cd, ' ') = ' ' THEN

        RAISE NO_RTRN_WF_PROC_CD;

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
                            ,v_rtrn_wf_proc_cd
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

            --반려시 단계가 건너뛰기에 해당할 경우 이전 단계로 계속 단계를 더 내려준다.
            FOR CUR IN
            (
                SELECT SEQ, WF_PROC_SKIP_YN, WF_PROC_CD
                FROM SR_WF_PROC A
                WHERE 1 = 1
                AND REQ_ID  = pi_req_id
                AND SEQ     <= (SELECT SEQ FROM SR_WF_PROC WHERE REQ_ID = A.REQ_ID AND WF_PROC_CD = v_rtrn_wf_proc_cd)
                
                ORDER BY
                    SEQ DESC
            )
            LOOP

                IF v_rtrn_seq IS NULL AND NVL(CUR.WF_PROC_SKIP_YN, 'N')  = 'N' THEN
                
                    v_rtrn_seq          := CUR.SEQ;
                    v_rtrn_wf_proc_cd   := CUR.WF_PROC_CD;

                END IF;

            END LOOP;

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
        
        --DBMS_OUTPUT.PUT_LINE('SELECT1 v_map_wf_proc_cd:[' || v_map_wf_proc_cd || '] v_req_tmplat_id:[' || v_req_tmplat_id || '] v_rtrn_wf_proc_cd:[' || v_rtrn_wf_proc_cd || ']');
        
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

            EXCEPTION
            WHEN NO_DATA_FOUND THEN
                v_map_wf_proc_cd := '';
            END;

        END IF;
        
        --DBMS_OUTPUT.PUT_LINE('SELECT2');

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
            po_rtn_cd  := -3;
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
                po_rtn_cd  := -4;
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
        --po_rtn_msg := v_rtrn_cger || '/' || v_rtrn_func || '/' || v_req_stat_cd || ' 반려 진행 중 요청서 상태를 처리할 수 없습니다.';
        po_rtn_msg := '반려 진행 중 요청서 상태를 처리할 수 없습니다.';
        RETURN;

    WHEN NO_RTRN_WF_PROC_CD THEN
        po_rtn_cd  := -9995;
        po_rtn_msg := '반려 단계가 지정되지 않아 반려 처리가 불가능합니다.';
        RETURN;

    WHEN OTHERS THEN
        po_rtn_cd := -9999;
        po_rtn_msg := '요청서 반려 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        RETURN;
END;
/

CREATE OR REPLACE PROCEDURE PR_SR_REQ_WF_PROC_BACK_NEW
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

v_rtrn_cger             WF_REQ_TMPLAT_PROC_HT.CGER%TYPE;         
v_rtrn_func             WF_REQ_TMPLAT_PROC_HT.FUNC%TYPE;

v_req_stat_cd           SR_BASE_INFO.REQ_STAT_CD%TYPE;

v_cur_wf_proc_cd        SR_BASE_INFO.RTRN_WF_PROC_CD%TYPE;
v_cur_map_wf_proc_cd    SR_BASE_INFO.RTRN_MAP_WF_PROC_CD%TYPE;

v_screen_rtrn           WF_REQ_TMPLAT_PROC_HT.SCREEN_RTRN%TYPE;
v_rtrn                  WF_REQ_TMPLAT_PROC_HT.RTRN%TYPE;
v_rtrn_cd               VARCHAR2(20);

NO_RTRN_WF_PROC_CD      EXCEPTION;
NO_RTRN_WF_FUNC_CD      EXCEPTION;

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
            REPLACE(B.WF_PROC_NM, '\n', ' '),
            A.WF_PROC_CD,
            A.MAP_WF_PROC_CD
        INTO v_req_tmplat_id, v_req_tmplat_ver, v_rtrn_wf_proc_cd, v_hist_wf_proc_nm, v_cur_wf_proc_cd, v_cur_map_wf_proc_cd
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
            RETURN;
        WHEN OTHERS THEN
            po_rtn_cd  := -2;
            po_rtn_msg := '반려단계 확인시 오류가 발생했습니다.';
            RETURN;
    END;

    IF NVL(v_rtrn_wf_proc_cd, ' ') = ' ' THEN

        RAISE NO_RTRN_WF_PROC_CD;

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
                            ,v_rtrn_wf_proc_cd
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

            --반려시 단계가 건너뛰기에 해당할 경우 이전 단계로 계속 단계를 더 내려준다.
            FOR CUR IN
            (
                SELECT SEQ, WF_PROC_SKIP_YN, WF_PROC_CD
                FROM SR_WF_PROC A
                WHERE 1 = 1
                AND REQ_ID  = pi_req_id
                AND SEQ     <= (SELECT SEQ FROM SR_WF_PROC WHERE REQ_ID = A.REQ_ID AND WF_PROC_CD = v_rtrn_wf_proc_cd)
                
                ORDER BY
                    SEQ DESC
            )
            LOOP

                IF v_rtrn_seq IS NULL AND NVL(CUR.WF_PROC_SKIP_YN, 'N')  = 'N' THEN
                
                    v_rtrn_seq          := CUR.SEQ;
                    v_rtrn_wf_proc_cd   := CUR.WF_PROC_CD;

                END IF;

            END LOOP;

            /*
            FOR CUR IN
            (
                SELECT B.REQ_TMPLAT_ID, B.REQ_TMPLAT_VER, A.SEQ, A.WF_PROC_SKIP_YN, A.WF_PROC_CD, C.CGER, C.FUNC, C.SCREEN_RTRN, C.RTRN
                FROM
                      SR_WF_PROC A
                    , SR_BASE_INFO B
                    , WF_REQ_TMPLAT_PROC_HT C

                WHERE 1 = 1
                AND A.REQ_ID            = B.REQ_ID
                AND B.REQ_TMPLAT_ID     = C.REQ_TMPLAT_ID
                AND B.REQ_TMPLAT_VER    = C.REQ_TMPLAT_VER
                AND A.REQ_ID            = pi_req_id
                AND A.SEQ               <= v_rtrn_seq

                ORDER BY
                    SEQ DESC
            )
            LOOP

                --반려 대상 단계에 담당자가 존재하는 경우
                IF CGER = 'true' THEN

                    SELECT CASE WHEN CUR.CGER = 'true' THEN SCREEN_RTRN ELSE RTRN END
                    INTO v_rtrn_cd
                    FROM
                        WF_REQ_TMPLAT_PROC_HT
                        
                    WHERE 1 = 1
                    AND REQ_TMPLAT_ID   = CUR.REQ_TMPLAT_ID
                    AND REQ_TMPLAT_VER  = CUR.REQ_TMPLAT_VER
                    AND WF_PROC_CD      = CUR.WF_PROC_CD
                    AND 
                    ;
                    
                    SELECT WF_PROC_SKIP_YN
                    INTO v_screen_rtrn
                    FROM
                        SR_WF_PROC
                        
                    WHERE 1 = 1
                    AND REQ_ID      = pi_req_id
                    AND WF_PROC_CD  = v_rtrn_cd
                    AND 
                    ;

                    --v_rtrn

                END IF;

            END LOOP;
            */

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

        SELECT
            FN_SR_REQ_MAP_WF_PROC(pi_req_id, v_rtrn_wf_proc_cd, NULL, 'CODE')
          , FN_SR_REQ_MAP_WF_PROC(pi_req_id, v_rtrn_wf_proc_cd, NULL, 'NAME')
          , FN_SR_REQ_MAP_WF_PROC(pi_req_id, pi_wf_proc_cd, pi_seq, 'NAME')
        INTO v_map_wf_proc_cd, v_wf_proc_nm, v_appr_nm
        FROM DUAL
        ;
        
        IF v_map_wf_proc_cd IS NULL THEN
        
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

        END IF;

        SELECT CGER, FUNC
        INTO v_rtrn_cger, v_rtrn_func
        FROM
            WF_REQ_TMPLAT_PROC_HT
        WHERE 1 = 1
        AND REQ_TMPLAT_ID   = v_req_tmplat_id
        AND REQ_TMPLAT_VER  = v_req_tmplat_ver
        AND WF_PROC_CD      = v_rtrn_wf_proc_cd
        ;
        
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
            , LMID                  = pi_user_id
            , LM_USER_NM            = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LM_DEPT_CD            = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LM_DEPT_NM            = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = pi_user_id)
            , LMDT                  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
            , LMPID                 = pi_lmpid
        WHERE 1 = 1
        AND REQ_ID  = pi_req_id
        ;

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

    EXCEPTION
        WHEN OTHERS THEN
            po_rtn_cd  := -3;
            --po_rtn_msg := SQLERRM || '반려단계로 이동 처리시 오류가 발생했습니다.';
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
                po_rtn_cd  := -4;
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
        --po_rtn_msg := v_rtrn_cger || '/' || v_rtrn_func || '/' || v_req_stat_cd || ' 반려 진행 중 요청서 상태를 처리할 수 없습니다.';
        po_rtn_msg := '반려 진행 중 요청서 상태를 처리할 수 없습니다.';
        RETURN;

    WHEN NO_RTRN_WF_PROC_CD THEN
        po_rtn_cd  := -9995;
        po_rtn_msg := '반려 단계가 지정되지 않아 반려 처리가 불가능합니다.';
        RETURN;

    WHEN OTHERS THEN
        po_rtn_cd := -9999;
        po_rtn_msg := '요청서 반려 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        RETURN;
END;
/

CREATE OR REPLACE PROCEDURE PR_SR_REQ_WF_PROC_NEXT
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

        , LMID                  = IN_USER_ID
        , LM_USER_NM            = (SELECT USER_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
        , LM_DEPT_CD            = (SELECT DEPT_CD FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
        , LM_DEPT_NM            = (SELECT DEPT_NM FROM FOMM_USER_MT WHERE USER_ID = IN_USER_ID)
        , LMDT                  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
        , LMPID                 = IN_LMPID

    WHERE 1 = 1
    AND REQ_ID  = IN_REQ_ID
    ;

    UPDATE SR_BASE_INFO A SET
        PROC_COMP_DATE  = TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS')
    WHERE 1 = 1
    AND REQ_ID      = IN_REQ_ID
    AND WF_PROC_CD  = 'WF_PROC_9999'
    ;

    IF IN_NEXT_WF_FUNC_CD = 'WF_FUNC_01' THEN

        IF IN_REG_GUBUN IN ('REG', 'REV') THEN

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
                , IN_NEXT_WF_PROC_CD
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
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        RETURN;

    WHEN OTHERS THEN
        OUT_RTN_CD := -9999;
        OUT_RTN_MSG := '요청서 다음 진행 단계 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        RETURN;
    
END;
/

CREATE OR REPLACE PROCEDURE PR_SR_REQ_WF_PROC_RETURN
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
        RETURN;

    WHEN OTHERS THEN
        po_rtn_cd := -9999;
        po_rtn_msg := '요청서 결재 반려 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        DBMS_OUTPUT.PUT_LINE('에러코드   =>' || po_rtn_cd);
        DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || po_rtn_msg);
        RETURN;
END;
/

CREATE OR REPLACE PROCEDURE PR_SR_REV_PROC
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
        OUT_RTN_CD  := -9998;
        OUT_RTN_MSG := '이미 처리자가 존재하여 등록이 불가능합니다.';
        ROLLBACK;

    WHEN OTHERS THEN
        OUT_RTN_CD := -9999;
        OUT_RTN_MSG := '요청서 진행 처리시 오류가 발생하였습니다.(' || SQLERRM || ')';
        --DBMS_OUTPUT.PUT_LINE('에러코드   =>' || OUT_RTN_CD);
        --DBMS_OUTPUT.PUT_LINE('에러메세지 =>' || OUT_RTN_MSG);
        ROLLBACK;
        RETURN;
END;
/

CREATE OR REPLACE PROCEDURE PR_WF_REQ_TMPLAT_COPY
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

CREATE OR REPLACE PROCEDURE PR_WF_REQ_TMPLAT_DEL
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

CREATE OR REPLACE PROCEDURE update_columns
IS
BEGIN
    FOR col_info IN (SELECT table_name, column_name
                     FROM all_tab_columns
                     WHERE owner = 'SPP_HI20' AND data_type = 'VARCHAR2' AND data_length = 14 AND table_name LIKE 'PJ%'
                     AND table_name  IN  ('PJ_ACT_ACTION' , 'PJ_CHECKITEM', 'PJ_CHECKRST', 'PJ_CHECKLIST', 
                                             'PJ_EDU_ATTND', 'PJ_EVAL_ITEM', 'PJ_EVAL_LIST', 'PJ_ISSUE_ACTION', 'PJ_MEET_ATTND',
                                             'PJ_METHOD', 'PJ_METHOD_DLVR', 'PJ_QA_ITEM', 'PJ_QA_LIST', 'PJ_RISK_ACTION') )
    LOOP
        EXECUTE IMMEDIATE 'UPDATE ' || col_info.table_name ||
                          ' SET ' || col_info.column_name ||
                          ' = ''2024'' || SUBSTR(' || col_info.column_name || ', 5)' ;

        DBMS_OUTPUT.PUT_LINE('데이터 수정 완료: ' || col_info.table_name || '.' || col_info.column_name);
    END LOOP;
END update_columns;
/