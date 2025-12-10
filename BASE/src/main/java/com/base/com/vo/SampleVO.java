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
public class SampleVO extends DefaultVO {

    // Fields
    private String title;
    private String regId;
    private String postId;
    private String contents;
    private String communityId;
    private String hitCount;
    private Date regDate;


    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title
     *            the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the regId
     */
    public String getRegId() {
        return regId;
    }

    /**
     * @param regId
     *            the regId to set
     */
    public void setRegId(String regId) {
        this.regId = regId;
    }

    /**
     * @return the postId
     */
    public String getPostId() {
        return postId;
    }

    /**
     * @param postId
     *            the postId to set
     */
    public void setPostId(String postId) {
        this.postId = postId;
    }

    /**
     * @return the contents
     */
    public String getContents() {
        return contents;
    }

    /**
     * @param contents
     *            the contents to set
     */
    public void setContents(String contents) {
        this.contents = contents;
    }

    /**
     * @return the communityId
     */
    public String getCommunityId() {
        return communityId;
    }

    /**
     * @param communityId
     *            the communityId to set
     */
    public void setCommunityId(String communityId) {
        this.communityId = communityId;
    }

    /**
     * @return the hitCount
     */
    public String getHitCount() {
        return hitCount;
    }

    /**
     * @param hitCount
     *            the hitCount to set
     */
    public void setHitCount(String hitCount) {
        this.hitCount = hitCount;
    }

    /**
     * @return the regDate
     */
    public Date getRegDate() {
        return regDate;
    }

    /**
     * @param regDate
     *            the regDate to set
     */
    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }
}
