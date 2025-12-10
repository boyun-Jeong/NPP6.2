package com.base.com.vo;

import java.util.Date;

/**
 * 
 * <pre>
 * @title   
 * -        
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
public class GroupCodeVO extends DefaultVO {

    private String groupCd;
    private String groupNm;
    private String useFg;
    private String createUser;
    private Date createDt;
    private String updateUser;
    private Date updateDt;
    private String groupDesc;
    /**
     * @return the groupCd
     */
    public String getGroupCd() {
        return groupCd;
    }
    /**
     * @param groupCd the groupCd to set
     */
    public void setGroupCd(String groupCd) {
        this.groupCd = groupCd;
    }
    /**
     * @return the groupNm
     */
    public String getGroupNm() {
        return groupNm;
    }
    /**
     * @param groupNm the groupNm to set
     */
    public void setGroupNm(String groupNm) {
        this.groupNm = groupNm;
    }
    /**
     * @return the useFg
     */
    public String getUseFg() {
        return useFg;
    }
    /**
     * @param useFg the useFg to set
     */
    public void setUseFg(String useFg) {
        this.useFg = useFg;
    }
    /**
     * @return the createUser
     */
    public String getCreateUser() {
        return createUser;
    }
    /**
     * @param createUser the createUser to set
     */
    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }
    /**
     * @return the createDt
     */
    public Date getCreateDt() {
        return createDt;
    }
    /**
     * @param createDt the createDt to set
     */
    public void setCreateDt(Date createDt) {
        this.createDt = createDt;
    }
    /**
     * @return the updateUser
     */
    public String getUpdateUser() {
        return updateUser;
    }
    /**
     * @param updateUser the updateUser to set
     */
    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser;
    }
    /**
     * @return the updateDt
     */
    public Date getUpdateDt() {
        return updateDt;
    }
    /**
     * @param updateDt the updateDt to set
     */
    public void setUpdateDt(Date updateDt) {
        this.updateDt = updateDt;
    }
    /**
     * @return the groupDesc
     */
    public String getGroupDesc() {
        return groupDesc;
    }
    /**
     * @param groupDesc the groupDesc to set
     */
    public void setGroupDesc(String groupDesc) {
        this.groupDesc = groupDesc;
    }
}

