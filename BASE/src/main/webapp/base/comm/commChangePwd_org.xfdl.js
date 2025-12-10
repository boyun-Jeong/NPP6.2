(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commChangePwd");
            this.set_titletext("비밀번호 변경");
            this.getSetter("classname").set("commConfirmPwd");
            if (Form == this.constructor)
            {
                this._setFormPosition(352,188);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pwd", this);
            obj._setContents("<ColumnInfo><Column id=\"OLD_PASSWD\" type=\"STRING\" size=\"64\"/><Column id=\"NH_PASSWD\" type=\"string\" size=\"64\"/><Column id=\"LMOD_USER_ID\" type=\"string\" size=\"10\"/><Column id=\"LMOD_USER_NM\" type=\"string\" size=\"100\"/><Column id=\"SYSMODTIME\" type=\"string\" size=\"14\"/><Column id=\"LAST_PASSWD_CHG_TIME\" type=\"string\" size=\"14\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pwdCount", this);
            obj._setContents("<ColumnInfo><Column id=\"PASSWD_COUNT\" type=\"INT\" size=\"39\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BUSEO_ID\" type=\"STRING\" size=\"6\"/><Column id=\"BUSEO_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"JBC_JID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_JNAME\" type=\"STRING\" size=\"30\"/><Column id=\"JBC_POSI_ID\" type=\"STRING\" size=\"4\"/><Column id=\"JBC_POSI\" type=\"STRING\" size=\"30\"/><Column id=\"CONTACT_PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"ADDRESS_1\" type=\"STRING\" size=\"200\"/><Column id=\"ADDRESS_2\" type=\"STRING\" size=\"100\"/><Column id=\"POSTCODE\" type=\"STRING\" size=\"7\"/><Column id=\"NH_GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"NH_ACTIVE\" type=\"STRING\" size=\"1\"/><Column id=\"NH_STATUS\" type=\"STRING\" size=\"3\"/><Column id=\"BUJAE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUJAE_STIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_ETIME\" type=\"STRING\" size=\"14\"/><Column id=\"BUJAE_SAYU\" type=\"STRING\" size=\"30\"/><Column id=\"DAEJIC_ID\" type=\"STRING\" size=\"9\"/><Column id=\"DAEJIC_NM\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_MOBILE\" type=\"STRING\" size=\"20\"/><Column id=\"CONTACT_OFFICE\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID1\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM1\" type=\"STRING\" size=\"20\"/><Column id=\"MY_CHR_ID2\" type=\"STRING\" size=\"9\"/><Column id=\"MY_CHR_NM2\" type=\"STRING\" size=\"20\"/><Column id=\"MY_MGR_ID\" type=\"STRING\" size=\"9\"/><Column id=\"MY_MGR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"LAST_LOGIN_TIME\" type=\"STRING\" size=\"14\"/><Column id=\"NH_PASSWD\" type=\"STRING\" size=\"28\"/><Column id=\"SYSMODTIME\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","20","41","108","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","127","41","205","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_passwd","133","46","193","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            obj.getSetter("validate").set("title:패스워드,required:true");
            obj.set_password("true");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","71","108","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","127","71","205","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPasswd","133","76","193","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            obj.getSetter("validate").set("title:새 패스워드,required:true");
            obj.set_password("true");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","101","108","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","127","101","205","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_confirm","133","106","193","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            obj.getSetter("validate").set("title:패스워드 확인,required:true");
            obj.set_password("true");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","332","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("W20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("H15");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","168",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("H20");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","36",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","15","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","132",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_cssclass("Guide_Color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","240","142","45","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","287","142","45","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popupclose");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",352,188,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("commChangePwd_org.xfdl","lib::comInclude.xjs");
        this.registerScript("commChangePwd_org.xfdl", function() {
        /***********************************************************************
         * 화면ID   : commChangePwd
         * 화면명   : 패스워드 변경 팝업
         * 화면설명 : 패스워드를 변경한다.
         * 작성일   : 2016.12.13
         * 작성자   : 송금준
         * 수정이력 :
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::comInclude.xjs"); /*include "lib::comInclude.xjs"*/;

        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/

        /***********************************************************************
         * Form Initialize Functions
         ***********************************************************************/

        /***********************************************************************
        * Data Transaction Functions
        ************************************************************************/
        this.fn_getUserInfo = function ()
        {
        	var params = "";
        	params += Iject.Util.setParam("model", "commSearchUser");

        	var svcId = "commSearchUser";
        	var inDatasets = "";
        	var outDatasets = "ds_user=ds_user";
        	var argument = Iject.Util.setParam("userId", nexacro.wrapQuote(application.gv_Logid));
        	var callbackFunc = "fn_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.fn_getPwdCount = function ()
        {
        	this.ds_pwd.clearData();

        	var params = "";
        	params += Iject.Util.setParam("model", "commCheckPasswdDuplicated");

        	var svcId = "commCheckPasswdDuplicated";
        	var inDatasets = "";
        	var outDatasets = "ds_pwdCount=ds_pwdCount";
        	var argument = Iject.Util.setParam("pwd", nexacro.wrapQuote(sha256_digest(this.edt_newPasswd.value)));
        	var callbackFunc = "fn_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.fn_changePasswd = function ()
        {
        	if(!confirm("비밀번호를 변경하시겠습니까?"))
        	{
        		return;
        	}

        	this.ds_pwd.clearData();
        	var row = this.ds_pwd.addRow();
        	this.ds_pwd.setColumn(row, "OLD_PASSWD", sha256_digest(this.edt_passwd.value));
        	this.ds_pwd.setColumn(row, "NH_PASSWD", sha256_digest(this.edt_newPasswd.value));

        	var params = "";
        	params += Iject.Util.setParam("model", "commChangePwd");

        	var svcId = "commChangePwd";
        	var inDatasets = "ds_pwd=ds_pwd:U";
        	var outDatasets = "";
        	var argument = "";
        	var callbackFunc = "fn_callback";

        	Iject.xuptran(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.fn_callback = function (sid, errNo, errMsg)
        {
        	if(errNo < 0) {
        		return;
        	}

        	switch(sid) {
        		case "commCheckPasswdDuplicated" :
        			if(this.ds_pwdCount.getColumn(0, "PASSWD_COUNT") == 0)
        			{
        				var oldPwd = this.edt_passwd.value;
        				var newPwd = this.edt_newPasswd.value;
        				var confirmPwd = this.edt_confirm.value;

        //				if(!Iject.Validate.checkPwd(application.gv_Logid, oldPwd, newPwd, confirmPwd)) return;

        				this.fn_changePasswd();
        			}
        			else
        			{
        				alert("최근에 사용된 비밀번호는 사용하실 수 없습니다. 다시 입력하여 주십시요.");
        				return;
        			}
        			break;
        		case "commChangePwd" :
        // 			alert("비밀번호가 정상적으로 변경되었습니다. 다시 로그인 하십시요.");
        			Iject.logging(this.opener, "비밀번호 변경", "comm::commChangePwd.xfdl", "xfdl");
        			Iject.close(this, true);
        			break;
        		case "commSearchUser" :
        			var oldPwd = sha256_digest(this.edt_passwd.value);
        			var nhPwd = this.ds_user.getColumn(0, "NH_PASSWD");

        			if(oldPwd == nhPwd) {
        				this.fn_getPwdCount();
        			} else {
        				alert("입력하신 비밀번호와 현재 비밀번호가 일치하지 않습니다.");
        			}

        			break;
        		default :
        			break;
        	}
        }

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.btn_cancel_onclick = function(obj,  e)
        {
        	Iject.close(this, false);
        }

        this.btn_ok_onclick = function(obj,  e)
        {
        	var oldPwd = this.edt_passwd.value;
        	var newPwd = this.edt_newPasswd.value;
        	var confirmPwd = this.edt_confirm.value;

        	if(!Iject.Validate.validateCompList(this, this)) return;
        	if(!Iject.Validate.checkPwd(application.gv_Logid, oldPwd, newPwd, confirmPwd)) return;
        	this.fn_getUserInfo();
        }

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("commChangePwd_org.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
