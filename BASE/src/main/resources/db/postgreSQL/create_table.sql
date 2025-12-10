CREATE TABLE IF NOT EXISTS FOMM_ATCHFILE_MT
(
    file_no bigint NOT NULL,
    key_tbl character varying(10) COLLATE pg_catalog."default" NOT NULL,
    fldr_nm character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    pk1 character varying(20) COLLATE pg_catalog."default",
    pk2 character varying(20) COLLATE pg_catalog."default",
    pk3 character varying(20) COLLATE pg_catalog."default",
    file_nm character varying(100) COLLATE pg_catalog."default",
    file_save_nm character varying(100) COLLATE pg_catalog."default",
    file_path character varying(1000) COLLATE pg_catalog."default",
    file_size character varying(50) COLLATE pg_catalog."default",
    del_yn character varying(1) COLLATE pg_catalog."default",
    rmk character varying(1000) COLLATE pg_catalog."default",
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    CONSTRAINT fomm_atchfile_mt_pk PRIMARY KEY (file_no)
)
;

   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FILE_NO IS '파일번호';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.KEY_TBL IS '키 테이블명';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FLDR_NM IS '폴더명';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.PK1 IS 'PK1';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.PK2 IS 'PK2';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.PK3 IS 'PK3';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FILE_NM IS '파일명';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FILE_SAVE_NM IS '저장파일명';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FILE_PATH IS '파일경로';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FILE_SIZE IS '파일크기';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.DEL_YN IS '삭제여부';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FRID IS '최초등록자ID';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.FRDT IS '최초등록일시';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.LMID IS '최종수정자ID';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_ATCHFILE_MT.LMPID IS '최종수정화면ID';
   COMMENT ON TABLE FOMM_ATCHFILE_MT  IS '첨부파일';

CREATE TABLE IF NOT EXISTS FOMM_AUTH_MENU_DT
(
    auth_id character varying(12) COLLATE pg_catalog."default" NOT NULL,
    menu_id character varying(10) COLLATE pg_catalog."default" NOT NULL,
    read_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    write_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    delete_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    excl_down_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    report_prnt_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    file_up_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    CONSTRAINT FOMM_auth_menu_dt_pk PRIMARY KEY (auth_id, menu_id)
);

   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.AUTH_ID IS '권한ID';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.MENU_ID IS '메뉴ID';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.READ_YN IS '읽기권한';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.WRITE_YN IS '쓰기권한';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.DELETE_YN IS '삭제권한';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.EXCL_DOWN_YN IS '엑셀다운로드권한';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.REPORT_PRNT_YN IS '레포트출력권한';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.FILE_UP_YN IS '파일첨부권한';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.FRID IS '최초등록자ID';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.FRDT IS '최초등록일시';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.LMID IS '최종수정자ID';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_AUTH_MENU_DT.LMPID IS '최종수정화면ID';
   COMMENT ON TABLE FOMM_AUTH_MENU_DT  IS '권한별 메뉴관리';

CREATE TABLE IF NOT EXISTS FOMM_AUTH_MT
(
    auth_id character varying(20) COLLATE pg_catalog."default" NOT NULL,
    auth_nm character varying(100) COLLATE pg_catalog."default",
    auth_type_cd character varying(20) COLLATE pg_catalog."default",
    admin_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    use_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    rmk character varying(1000) COLLATE pg_catalog."default",
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    hub_code character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT fomm_auth_mt_pk PRIMARY KEY (auth_id)
);

   COMMENT ON COLUMN FOMM_AUTH_MT.AUTH_ID IS '권한ID';
   COMMENT ON COLUMN FOMM_AUTH_MT.AUTH_NM IS '권한그룹명';
   COMMENT ON COLUMN FOMM_AUTH_MT.AUTH_TYPE_CD IS '권한유형코드';
   COMMENT ON COLUMN FOMM_AUTH_MT.ADMIN_YN IS '관리자여부';
   COMMENT ON COLUMN FOMM_AUTH_MT.USE_YN IS '사용여부';
   COMMENT ON COLUMN FOMM_AUTH_MT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_AUTH_MT.FRID IS '최초등록자ID';
   COMMENT ON COLUMN FOMM_AUTH_MT.FRDT IS '최초등록일시';
   COMMENT ON COLUMN FOMM_AUTH_MT.LMID IS '최종수정자ID';
   COMMENT ON COLUMN FOMM_AUTH_MT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_AUTH_MT.LMPID IS '최종수정화면ID';
   COMMENT ON TABLE FOMM_AUTH_MT  IS '권한목록';

CREATE TABLE IF NOT EXISTS FOMM_AUTH_USER_DT
(
    auth_id character varying(12) COLLATE pg_catalog."default" NOT NULL,
    user_id character varying(10) COLLATE pg_catalog."default" NOT NULL,
    frid character varying(10) COLLATE pg_catalog."default",
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'yyyymmddhh24miss'::text),
    lmid character varying(10) COLLATE pg_catalog."default",
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'yyyymmddhh24miss'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    rmk character varying(500) COLLATE pg_catalog."default",
    hub_code character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT fomm_user_auth_dt_pk PRIMARY KEY (auth_id, user_id)
);

   COMMENT ON COLUMN FOMM_AUTH_USER_DT.AUTH_ID IS '메뉴ID';
   COMMENT ON COLUMN FOMM_AUTH_USER_DT.USER_ID IS '사용자ID';
   COMMENT ON COLUMN FOMM_AUTH_USER_DT.FRID IS '최초등록자 ID';
   COMMENT ON COLUMN FOMM_AUTH_USER_DT.FRDT IS '최초등록일시';
   COMMENT ON COLUMN FOMM_AUTH_USER_DT.LMID IS '최종수정자 ID';
   COMMENT ON COLUMN FOMM_AUTH_USER_DT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_AUTH_USER_DT.LMPID IS '최종수정화면 I';
   COMMENT ON COLUMN FOMM_AUTH_USER_DT.RMK IS '비고';
   COMMENT ON TABLE FOMM_AUTH_USER_DT  IS '사용자 권한';

CREATE TABLE IF NOT EXISTS FOMM_CMM_CD_MT
(
    cd_no character varying(100) COLLATE pg_catalog."default" NOT NULL,
    lang_cd character varying(10) COLLATE pg_catalog."default" NOT NULL,
    up_cd_no character varying(100) COLLATE pg_catalog."default" NOT NULL,
    cd_lvl bigint,
    cmm_cd character varying(20) COLLATE pg_catalog."default",
    up_cmm_cd character varying(20) COLLATE pg_catalog."default",
    cmm_cd_nm character varying(100) COLLATE pg_catalog."default",
    cmm_cd_desc character varying(200) COLLATE pg_catalog."default",
    itm_val_1 character varying(1000) COLLATE pg_catalog."default",
    itm_val_2 character varying(1000) COLLATE pg_catalog."default",
    itm_val_3 character varying(1000) COLLATE pg_catalog."default",
    itm_val_4 character varying(1000) COLLATE pg_catalog."default",
    itm_val_5 character varying(1000) COLLATE pg_catalog."default",
    code_div character varying(20) COLLATE pg_catalog."default",
    sort_ordr bigint,
    use_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    rmk character varying(1000) COLLATE pg_catalog."default",
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    CONSTRAINT fomm_cmm_cd_mt_pk PRIMARY KEY (cd_no, lang_cd)
)

   COMMENT ON COLUMN FOMM_CMM_CD_MT.CD_NO IS '코드번호';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.LANG_CD IS '언어코드';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.UP_CD_NO IS '상위코드번호';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.CD_LVL IS '코드레벨';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.CMM_CD IS '공통코드';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.UP_CMM_CD IS '상위코드';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.CMM_CD_NM IS '코드명';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.CMM_CD_DESC IS '코드설명';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.ITM_VAL_1 IS '항목값1';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.ITM_VAL_2 IS '항목값2';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.ITM_VAL_3 IS '항목값3';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.ITM_VAL_4 IS '항목값4';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.ITM_VAL_5 IS '항목값5';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.CODE_DIV IS '코드업무구분';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.SORT_ORDR IS '정렬순서';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.USE_YN IS '사용여부';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.FRID IS '최초등록자';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.FRDT IS '최초등록일시';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.LMID IS '최종수정자';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_CMM_CD_MT.LMPID IS '최종수정화면ID';
   COMMENT ON TABLE FOMM_CMM_CD_MT  IS 'SPP 공통코드';

CREATE TABLE IF NOT EXISTS FOMM_CMM_MSG_MT
(
	msg_no varchar(16) NOT NULL,
	lang_cd varchar(10) NOT NULL,
	msg_conts varchar(2000) NULL,
	rmk varchar(1000) NULL,
	frid varchar(10) NULL DEFAULT 'SYSTEM'::character varying,
	frdt varchar(14) NULL DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
	lmid varchar(10) NULL DEFAULT 'SYSTEM'::character varying,
	lmdt varchar(14) NULL DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
	lmpid varchar(20) NULL DEFAULT 'SYSTEM'::character varying,
	CONSTRAINT fomm_cmm_msg_mt_pk PRIMARY KEY (msg_no, lang_cd)
);
	
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.MSG_NO IS '메시지번호';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.LANG_CD IS '언어코드';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.MSG_CONTS IS '메시지내용';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.FRID IS '최초등록자';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.FRDT IS '최초등록일시';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.LMID IS '최종수정자';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_CMM_MSG_MT.LMPID IS '최종수정화면ID';
   COMMENT ON TABLE FOMM_CMM_MSG_MT  IS '언어별 공통메시지';

CREATE TABLE IF NOT EXISTS FOMM_CMM_WORD_MT (
	word_no varchar(16) NOT NULL,
	lang_cd varchar(10) NOT NULL,
	word varchar(2000),
	rmk varchar(1000) NULL,
	frid varchar(10) NULL DEFAULT 'SYSTEM'::character varying,
	frdt varchar(14) NULL DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
	lmid varchar(10) NULL DEFAULT 'SYSTEM'::character varying,
	lmdt varchar(14) NULL DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
	lmpid varchar(20) NULL DEFAULT 'SYSTEM'::character varying,
	CONSTRAINT fomm_cmm_word_mt_pk PRIMARY KEY (word_no, lang_cd)
);

COMMENT ON COLUMN FOMM_CMM_WORD_MT.word_no IS '메시지번호';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.lang_cd IS '언어코드';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.word IS '단어';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.rmk IS '비고';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.frid IS '최초등록자';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.frdt IS '최초등록일시';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.lmid IS '최종수정자';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.lmdt IS '최종수정일시';
COMMENT ON COLUMN FOMM_CMM_WORD_MT.lmpid IS '최종수정화면ID';

CREATE TABLE IF NOT EXISTS FOMM_DEV_MENU_MT
(
    menu_id character varying(12) COLLATE pg_catalog."default" NOT NULL,
    menu_nm character varying(100) COLLATE pg_catalog."default",
    up_menu_id character varying(10) COLLATE pg_catalog."default",
    menu_lvl smallint,
    menu_url character varying(100) COLLATE pg_catalog."default",
    screen_id character varying(20) COLLATE pg_catalog."default",
    sort_ordr smallint,
    use_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    rmk character varying(1000) COLLATE pg_catalog."default",
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'yyyymmddhh24miss'::text),
    lmid character varying(10) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'yyyymmddhh24miss'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    CONSTRAINT fomm_dev_menu_mt_pk PRIMARY KEY (menu_id)
);

   COMMENT ON COLUMN FOMM_DEV_MENU_MT.MENU_ID IS '메뉴ID';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.MENU_NM IS '메뉴명';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.UP_MENU_ID IS '상위메뉴';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.MENU_LVL IS '메뉴레벨';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.MENU_URL IS '메뉴URL';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.SCREEN_ID IS '화면ID';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.SORT_ORDR IS '정렬순서';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.USE_YN IS '사용유무';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.FRID IS '등록자ID';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.FRDT IS '등록일시';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.LMID IS '수정자ID';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_DEV_MENU_MT.LMPID IS '최종수정화면ID';
   COMMENT ON TABLE FOMM_DEV_MENU_MT  IS '메뉴관리';

CREATE TABLE IF NOT EXISTS FOMM_MENU_BKMK_DT
(
    menu_id character varying(12) COLLATE pg_catalog."default" NOT NULL,
    user_id character varying(10) COLLATE pg_catalog."default" NOT NULL,
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'yyyymmddhh24miss'::text),
    CONSTRAINT fomm_menu_bkmk_dt_pk PRIMARY KEY (menu_id, user_id)
);

   COMMENT ON COLUMN FOMM_MENU_BKMK_DT.MENU_ID IS '메뉴ID';
   COMMENT ON COLUMN FOMM_MENU_BKMK_DT.USER_ID IS '사용자ID';
   COMMENT ON COLUMN FOMM_MENU_BKMK_DT.FRID IS '등록자ID';
   COMMENT ON COLUMN FOMM_MENU_BKMK_DT.FRDT IS '등록일시';
   COMMENT ON TABLE FOMM_MENU_BKMK_DT  IS '사용자별 메뉴 즐겨찾기';

CREATE TABLE IF NOT EXISTS FOMM_MENU_MT
(
    menu_id character varying(12) COLLATE pg_catalog."default" NOT NULL,
    menu_nm character varying(100) COLLATE pg_catalog."default",
    up_menu_id character varying(10) COLLATE pg_catalog."default",
    menu_lvl smallint,
    menu_url character varying(100) COLLATE pg_catalog."default",
    screen_id character varying(20) COLLATE pg_catalog."default",
    sort_ordr smallint,
    use_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    rmk character varying(1000) COLLATE pg_catalog."default",
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'yyyymmddhh24miss'::text),
    lmid character varying(10) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'yyyymmddhh24miss'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'system'::character varying,
    CONSTRAINT fomm_menu_mt_pk PRIMARY KEY (menu_id)
);

   COMMENT ON COLUMN FOMM_MENU_MT.MENU_ID IS '메뉴ID';
   COMMENT ON COLUMN FOMM_MENU_MT.MENU_NM IS '메뉴명';
   COMMENT ON COLUMN FOMM_MENU_MT.UP_MENU_ID IS '상위메뉴';
   COMMENT ON COLUMN FOMM_MENU_MT.MENU_LVL IS '메뉴레벨';
   COMMENT ON COLUMN FOMM_MENU_MT.MENU_URL IS '메뉴URL';
   COMMENT ON COLUMN FOMM_MENU_MT.SCREEN_ID IS '화면ID';
   COMMENT ON COLUMN FOMM_MENU_MT.SORT_ORDR IS '정렬순서';
   COMMENT ON COLUMN FOMM_MENU_MT.USE_YN IS '사용유무';
   COMMENT ON COLUMN FOMM_MENU_MT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_MENU_MT.FRID IS '등록자ID';
   COMMENT ON COLUMN FOMM_MENU_MT.FRDT IS '등록일시';
   COMMENT ON COLUMN FOMM_MENU_MT.LMID IS '수정자ID';
   COMMENT ON COLUMN FOMM_MENU_MT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_MENU_MT.LMPID IS '최종수정화면ID';
   COMMENT ON TABLE FOMM_MENU_MT  IS '메뉴관리';

CREATE TABLE IF NOT EXISTS FOMM_USER_LOGIN_HT
(
    hst_no bigint NOT NULL,
    user_id character varying(10) COLLATE pg_catalog."default",
    client_ip character varying(15) COLLATE pg_catalog."default",
    access_ip character varying(15) COLLATE pg_catalog."default",
    conn_succss_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    rmk character varying(1000) COLLATE pg_catalog."default",
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    CONSTRAINT fomm_user_login_ht_pk PRIMARY KEY (hst_no)
);

   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.HST_NO IS '사용자명';
   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.USER_ID IS '사번';
   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.CLIENT_IP IS '접속자 IP';
   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.ACCESS_IP IS '접속 IP';
   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.CONN_SUCCSS_YN IS '접속성공여부';
   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.FRID IS '최초등록자ID';
   COMMENT ON COLUMN FOMM_USER_LOGIN_HT.FRDT IS '최초등록일시';
   COMMENT ON TABLE FOMM_USER_LOGIN_HT  IS '사용자 로그인 이력';

CREATE TABLE IF NOT EXISTS FOMM_USER_MT
(
    user_id character varying(10) COLLATE pg_catalog."default" NOT NULL,
    user_nm character varying(20) COLLATE pg_catalog."default",
    lang_cd character varying(10) COLLATE pg_catalog."default" DEFAULT 'KR'::character varying,
    co_cd character varying(10) COLLATE pg_catalog."default",
    co_nm character varying(100) COLLATE pg_catalog."default",
    dept_cd character varying(10) COLLATE pg_catalog."default",
    dept_nm character varying(100) COLLATE pg_catalog."default",
    pos_cd character varying(20) COLLATE pg_catalog."default",
    pos_nm character varying(100) COLLATE pg_catalog."default",
    role_cd character varying(20) COLLATE pg_catalog."default",
    role_nm character varying(200) COLLATE pg_catalog."default",
    email_adr character varying(100) COLLATE pg_catalog."default",
    telnum character varying(20) COLLATE pg_catalog."default",
    mobile_num character varying(20) COLLATE pg_catalog."default",
    user_pw character varying(4000) COLLATE pg_catalog."default",
    pw_init_dt character varying(14) COLLATE pg_catalog."default",
    pw_exp_dt character varying(14) COLLATE pg_catalog."default",
    expire_date character varying(8) COLLATE pg_catalog."default" DEFAULT '29991231'::character varying,
    use_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'Y'::character varying,
    absnce_yn character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
    rmk character varying(1000) COLLATE pg_catalog."default",
    frid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    frdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmid character varying(10) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    lmdt character varying(14) COLLATE pg_catalog."default" DEFAULT to_char(CURRENT_TIMESTAMP, 'YYYYMMDDHH24MISS'::text),
    lmpid character varying(20) COLLATE pg_catalog."default" DEFAULT 'SYSTEM'::character varying,
    CONSTRAINT fomm_user_mt_pk PRIMARY KEY (user_id)
)

   COMMENT ON COLUMN FOMM_USER_MT.USER_ID IS '사번';
   COMMENT ON COLUMN FOMM_USER_MT.USER_NM IS '사용자명';
   COMMENT ON COLUMN FOMM_USER_MT.LANG_CD IS '언어코드';
   COMMENT ON COLUMN FOMM_USER_MT.CO_CD IS '회사코드';
   COMMENT ON COLUMN FOMM_USER_MT.CO_NM IS '회사명';
   COMMENT ON COLUMN FOMM_USER_MT.DEPT_CD IS '부서코드';
   COMMENT ON COLUMN FOMM_USER_MT.DEPT_NM IS '부서명';
   COMMENT ON COLUMN FOMM_USER_MT.POS_CD IS '직급코드';
   COMMENT ON COLUMN FOMM_USER_MT.POS_NM IS '직급명';
   COMMENT ON COLUMN FOMM_USER_MT.ROLE_CD IS '직책코드';
   COMMENT ON COLUMN FOMM_USER_MT.ROLE_NM IS '직책명';
   COMMENT ON COLUMN FOMM_USER_MT.EMAIL_ADR IS '이메일주소';
   COMMENT ON COLUMN FOMM_USER_MT.TELNUM IS '내선전화번호';
   COMMENT ON COLUMN FOMM_USER_MT.MOBILE_NUM IS '휴대폰번호';
   COMMENT ON COLUMN FOMM_USER_MT.USER_PW IS '패스워드';
   COMMENT ON COLUMN FOMM_USER_MT.PW_INIT_DT IS '패스워드 초기일시';
   COMMENT ON COLUMN FOMM_USER_MT.PW_EXP_DT IS '패스워드 만료일시';
   COMMENT ON COLUMN FOMM_USER_MT.EXPIRE_DATE IS '계정만료일';
   COMMENT ON COLUMN FOMM_USER_MT.USE_YN IS '사용여부';
   COMMENT ON COLUMN FOMM_USER_MT.ABSNCE_YN IS '부재(대무)여부';
   COMMENT ON COLUMN FOMM_USER_MT.RMK IS '비고';
   COMMENT ON COLUMN FOMM_USER_MT.FRID IS '최초등록자ID';
   COMMENT ON COLUMN FOMM_USER_MT.FRDT IS '최초등록일시';
   COMMENT ON COLUMN FOMM_USER_MT.LMID IS '최종수정자ID';
   COMMENT ON COLUMN FOMM_USER_MT.LMDT IS '최종수정일시';
   COMMENT ON COLUMN FOMM_USER_MT.LMPID IS '최종수정 화면ID';
   COMMENT ON TABLE FOMM_USER_MT  IS '사용자';