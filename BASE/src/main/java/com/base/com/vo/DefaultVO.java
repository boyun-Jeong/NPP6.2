package com.base.com.vo;

import com.nexacro.java.xapi.data.DataSetRowTypeAccessor;

/**
 * 
 * <pre>
 * @title   
 * -        default vo Class
 * @package com.nexacro.uiadapter.spring.sample.vo
 * <pre>

 * @author  이호성
 * @since   2020. 08. 25.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2020. 08. 25.		이호성	최초작성
 */
public class DefaultVO implements DataSetRowTypeAccessor {

    /** 검색조건 */
    private String searchCondition = "";

    /** 검색Keyword */
    private String searchKeyword = "";

    /** 검색사용여부 */
    private String searchUseYn = "";

    private int rowType;

    /**
     * @return the searchCondition
     */
    public String getSearchCondition() {
        return searchCondition;
    }

    /**
     * @param searchCondition
     *            the searchCondition to set
     */
    public void setSearchCondition(String searchCondition) {
        this.searchCondition = searchCondition;
    }

    /**
     * @return the searchKeyword
     */
    public String getSearchKeyword() {
        return searchKeyword;
    }

    /**
     * @param searchKeyword
     *            the searchKeyword to set
     */
    public void setSearchKeyword(String searchKeyword) {
        this.searchKeyword = searchKeyword;
    }

    /**
     * @return the searchUseYn
     */
    public String getSearchUseYn() {
        return searchUseYn;
    }

    /**
     * @param searchUseYn
     *            the searchUseYn to set
     */
    public void setSearchUseYn(String searchUseYn) {
        this.searchUseYn = searchUseYn;
    }

    @Override
    public int getRowType() {
        return this.rowType;
    }

    @Override
    public void setRowType(int rowType) {
        this.rowType = rowType;
    }
}