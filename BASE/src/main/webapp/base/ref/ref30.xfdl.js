(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref30");
            this.set_titletext("댓글");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOparam", this);
            obj._setContents("<ColumnInfo><Column id=\"tableName\" type=\"STRING\" size=\"256\"/><Column id=\"primaryKey1\" type=\"STRING\" size=\"256\"/><Column id=\"primaryKey2\" type=\"STRING\" size=\"256\"/><Column id=\"primaryKey3\" type=\"STRING\" size=\"256\"/><Column id=\"extCol1\" type=\"STRING\" size=\"256\"/><Column id=\"extCol2\" type=\"STRING\" size=\"256\"/><Column id=\"extCol3\" type=\"STRING\" size=\"256\"/><Column id=\"extCol4\" type=\"STRING\" size=\"256\"/><Column id=\"extCol5\" type=\"STRING\" size=\"256\"/><Column id=\"nDispComment\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("TextArea01","870.00","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("댓글 기능을 공통 div 처리한다. (ref::ref30.xfdl)\n1. 기본 기능\n- 쓰기: 모두 가능\n- 읽기: 모두 가능\n- 수정: 자신이 등록한 댓글만 가능\n- 삭제: 자신이 등록한 댓글만 가능\n\n2. 적용 방식\n- 첨부파일과 유사하게 parameter 객체와 setConfig 함수를 통해 적용한다.\n- 첨부파일과 달리 \'Title\'은 개발자가 따로 추가한다.\n- 첨부파일과 다르게 댓글은 최초 master data 등록 시 같이 등록하는 기능이 없으므로,\n  최초 \'insert시에는 비활성화\' 하고 추후 \'read/update 시 활성화\'를 원칙으로 한다.\n\n3. script 처리 (자세한 처리는 스크립트 참조)\n1) 댓글 Div setting\n  - Div를 배치한 후 \"comm::comCommentDiv.xfdl\"을 url로 지정한다.\n  - fnInit에 아래 첨부파일 처리용 setConfig함수를 호출한다.\nEx)\n\tvar BOARD_NO = \'1\';\n\tvar oParam = {\n\t\t\t  tableName\t\t: \'FOMM_BOARD_MT\'\n\t\t\t, primaryKey1\t: BOARD_NO\n\t\t\t, primaryKey2\t: \'\'\n\t\t\t, primaryKey3\t: \'\'\n\t\t\t, extCol1\t\t: \'\'\n\t\t\t, extCol2\t\t: \'\'\n\t\t\t, extCol3\t\t: \'\'\n\t\t\t, extCol4\t\t: \'\'\n\t\t\t, extCol5\t\t: \'\'\n\t\t\t, nDispComment\t: \'\'\n\t\t};\n\tthis.divComment.form.setConfig(this, oPparam);\nDescription)\n\tFOMM_BOARD_MT(게시판) 테이블의 BOARD_NO(PK)가 \'1\'인 글에 대하여 댓글 조회 및 작성\n\n4. comCommentDiv 제공 함수\n\t함수명 \t\t\t\t\t\t\t\t\t\tRETURN\t\t\t\t\t\t\t설명\n1) \tsetConfig(this, oParam);\t\t\t\t\t\tNULL\t\t\t\t\t\t\t\t// 호출 시 oParam값에 따라 댓글 조회 && 그리기\n2) \tgetCommentCount();\t\t\t\t\t\t(integer) 댓글 수\t\t\t\t\t\t// 조회한 댓글 수 return\n3) \topenComment();\t\t\t\t\t\t\t(integer)펼친 후 최종 적용된 div height \t// comCommentDiv.xfdl 화면 호출한 div 펼치기\n4) \tcloseComment(nDispComment, bInputVisible);\t(integer)펼친 후 최종 적용된 div height\t// comCommentDiv.xfdl 화면 호출한 div 접기\n\t  - nDispComment \t// (integer, 필수) 접었을 때 표기할 댓글 수\n\t  - bInputVisible\t// (boolean) 접었을 때 댓글 입력란 표기여부 true(보이기)/false(숨기기);\tdefault false\n");
            this.addChild(obj.name, obj);

            obj = new Div("divComment","430","54","400",null,null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_async("false");
            obj.set_url("comm::comCommentDiv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divOption","20","54","400",null,null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","20.00","10","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("0");
            obj.set_text("tableName");
            obj.set_cssclass("sta_WF_schTitle_E");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00","20","39","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("1");
            obj.set_text("primaryKey1");
            obj.set_cssclass("sta_WF_schTitle_E");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00","20","68","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("2");
            obj.set_text("primaryKey2");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00","20","97","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("3");
            obj.set_text("primaryKey3");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00","20.00","126","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("4");
            obj.set_text("extCol1");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00_00","20.00","155","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("5");
            obj.set_text("extCol2");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00_00_00","20.00","184","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("6");
            obj.set_text("extCol3");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00_00_00_00","20.00","213","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("7");
            obj.set_text("extCol4");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00_00_00_00_00","20.00","242","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("8");
            obj.set_text("extCol5");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00_00_00_00_00_00","20.00","271","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("9");
            obj.set_text("nDispComment");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtTbl","142","10",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("tableName;NULL");
            obj.set_text("");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtPk1","142.00","39",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationGroup("fvValiCmp");
            obj.set_validation("primaryKey1;NULL");
            obj.set_text("");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtPk2","142.00","68",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_normal");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtPk3","142.00","97",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_normal");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtCol1","142.00","126",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_normal");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtCol2","142.00","155",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_normal");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtCol3","142.00","184",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_normal");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtCol4","142.00","213",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_normal");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtCol5","142.00","242",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("18");
            obj.set_cssclass("edt_WF_normal");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtnDisp","142.00","271",null,"24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputtype("number,digit");
            obj.set_inputfilter("sign,space,symbol,comma,alpha,dot");
            this.divOption.addChild(obj.name, obj);

            obj = new TextArea("txa00","20","300",null,"180","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("20");
            obj.set_cssclass("txa_WF_normal");
            obj.set_readonly("true");
            this.divOption.addChild(obj.name, obj);

            obj = new Button("btnApply",null,"483","120","24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("21");
            obj.set_text("setConfig 호출");
            this.divOption.addChild(obj.name, obj);

            obj = new Button("btnOpen",null,"531","140","24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("22");
            obj.set_text("openComment");
            this.divOption.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"608","180","24","20",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("23");
            obj.set_text("closeComment(nDisp, bVisible)");
            this.divOption.addChild(obj.name, obj);

            obj = new Button("btnGetCnt",null,"531","140","24","238",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("24");
            obj.set_text("getCommentCount");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00_00_00_00_00_00_00","25.00","581","50","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("25");
            obj.set_text("nDisp");
            obj.set_cssclass("sta_WF_schTitle_E");
            this.divOption.addChild(obj.name, obj);

            obj = new Edit("edtnDisp00","77.00","581",null,"24","254",null,null,null,null,null,this.divOption.form);
            obj.set_taborder("26");
            obj.set_cssclass("edt_WF_normal");
            obj.set_inputtype("number,digit");
            obj.set_inputfilter("sign,space,symbol,comma,alpha,dot");
            obj.set_validation("nDisp;NULL");
            obj.set_value("0");
            obj.set_text("0");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00_00_00_00_00_00_00_00_00_00_00","edtnDisp00:10","581","100","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("27");
            obj.set_text("bInputVisible");
            obj.set_cssclass("sta_WF_schTitle");
            this.divOption.addChild(obj.name, obj);

            obj = new Radio("rdo00","245","581","145","24",null,null,null,null,null,null,this.divOption.form);
            obj.set_taborder("28");
            obj.set_cssclass("rdo_WF_normal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divOption_form_rdo00_innerdataset = new nexacro.NormalDataset("divOption_form_rdo00_innerdataset", obj);
            divOption_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row></Rows>");
            obj.set_innerdataset(divOption_form_rdo00_innerdataset);
            obj.set_value("true");
            obj.set_index("1");
            obj.set_text("true");
            this.divOption.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle","20","25","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("옵션 적용");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stcTreeTitle00","430.00","25","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("댓글");
            obj.set_cssclass("sta_WF_gridTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divComment
            obj = new Layout("default","",0,0,this.divComment.form,function(p){});
            this.divComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divOption.form
            obj = new Layout("default","",0,0,this.divOption.form,function(p){});
            this.divOption.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divOption.form.edtnDisp","value","dsOparam","nDispComment");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divOption.form.edtCol5","value","dsOparam","extCol5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divOption.form.edtCol4","value","dsOparam","extCol4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divOption.form.edtCol3","value","dsOparam","extCol3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divOption.form.edtCol2","value","dsOparam","extCol2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divOption.form.edtCol1","value","dsOparam","extCol1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divOption.form.edtPk3","value","dsOparam","primaryKey3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divOption.form.edtPk2","value","dsOparam","primaryKey2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divOption.form.edtPk1","value","dsOparam","primaryKey1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divOption.form.edtTbl","value","dsOparam","tableName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divOption.form.stcTreeTitle00_00_00_00_00_00_00_00_00_00","value","dsOparam","nDispComment");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divOption.form.stcTreeTitle00_00_00_00_00_00_00_00_00_00_00","value","dsOparam","nDispComment");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comCommentDiv.xfdl");
        };
        
        // User Script
        this.registerScript("ref30.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		: 공통 댓글
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: 댓글 핸들링 가이드
        * 작성자		: WEMB
        * 작성일		:
        * 수정이력		:
        *------------------------------------------------------------------
        * 수정일			작성자			이력
        *------------------------------------------------------------------
        * 2023.04.00	WEMB		최초작성
        *------------------------------------------------------------------
        ***********************************************************************************/
        /***********************************************************************************
         * Script Include
         ***********************************************************************************/

        /***********************************************************************************
         * Form Variable
         ***********************************************************************************/


        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        this.form_onload = function(obj, e)
        {
        	// 화면 초기 세팅
        	// 이외는 기술하지 말것
        	this.gfnFormOnLoad(obj, this.fnInit);
        }

        this.fnInit = function()
        {
        	this.dsOparam.setColumn(0, 'tableName', 'FOMM_DEV_MENU_MT');
        	this.dsOparam.setColumn(0, 'primaryKey1', '1');
        	this.Edit_onchanged(null);
        	this.divOption_btnApply_onclick(null);

        }


        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        this.fnSave = function()
        {

        }


        // 공통 저장 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
        this.fnDelete = function(objDs)
        {
        	objDs.set_enableevent(false);
        	objDs.set_filterstr("CHK=='1'");

        	for(var i = 0; i < objDs.rowcount; i++)
        		objDs.setDeleteRow(i);

        	objDs.set_filterstr("");
        	objDs.set_enableevent(true);
        }



        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/
        // 파일 업로드 default callback
        this.fnUploadCallback = function(sSvcId, nErrorCode, sErrorMsg)
        {
        	// TO DO
        	// 개발자가 지정한 sSvcId(setConfig 옵션에 넣은 파일첨부ID), nErrorCode(에러코드), sErrorMsg(에러메시지)
        	if (nErrorCode < 0)
        	{
        		Ex.core.error(this,{id:"ERROR",msg:sSvcId+"\n"+Ex.core.msg(sErrorMsg)});
        		return;
        	}

        	switch(sSvcId)
        	{

        	}

        }



        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/

        /*
         * Dataset 변경에 따라 ROWFLAG 처리가 들어가야 하므로 setAddRow, setInsertRow, setDeleteRow, setCopyRow를 활용한다.
         */
        this.fnButtonComOnclick = function(obj, e)
        {
            switch(obj.name)
        	{

            }
        }



        this.divOption_btnApply_onclick = function(obj,e)
        {
        	if( Ex.util.checkValidate(this.divOption, "fvValiCmp") )
        	{
        		var oParam = {
        					  tableName		: this.dsOparam.getColumn(0, 'tableName')||''
        					, primaryKey1	: this.dsOparam.getColumn(0, 'primaryKey1')||''
        					, primaryKey2	: this.dsOparam.getColumn(0, 'primaryKey1')||''
        					, primaryKey3	: this.dsOparam.getColumn(0, 'primaryKey1')||''
        					, extCol1		: this.dsOparam.getColumn(0, 'extCol1')||''
        					, extCol2		: this.dsOparam.getColumn(0, 'extCol1')||''
        					, extCol3		: this.dsOparam.getColumn(0, 'extCol1')||''
        					, extCol4		: this.dsOparam.getColumn(0, 'extCol1')||''
        					, extCol5		: this.dsOparam.getColumn(0, 'extCol1')||''
        					, nDispComment	: this.dsOparam.getColumn(0, 'nDispComment')||''
        				};
        		this.divComment.form.setConfig(this, oParam);
        	}
        };

        this.Edit_onchanged = function(obj,e)
        {
        	var tableName 		= this.dsOparam.getColumn(0, 'tableName')||'';
        	var primaryKey1 	= this.dsOparam.getColumn(0, 'primaryKey1')||'';
        	var primaryKey2 	= this.dsOparam.getColumn(0, 'primaryKey2')||'';
        	var primaryKey3 	= this.dsOparam.getColumn(0, 'primaryKey3')||'';
        	var extCol1 		= this.dsOparam.getColumn(0, 'extCol1')||'';
        	var extCol2 		= this.dsOparam.getColumn(0, 'extCol2')||'';
        	var extCol3 		= this.dsOparam.getColumn(0, 'extCol3')||'';
        	var extCol4 		= this.dsOparam.getColumn(0, 'extCol4')||'';
        	var extCol5 		= this.dsOparam.getColumn(0, 'extCol5')||'';
        	var nDsipComment	= this.dsOparam.getColumn(0, 'nDispComment')||'';
        	strParam = "var oParam = {";
        	strParam += "\n			  tableName		: '" + tableName + "'";
        	strParam += "\n			, primaryKey1	: '" + primaryKey1 + "'";
        	strParam += "\n			, primaryKey2	: '" + primaryKey2 + "'";
        	strParam += "\n			, primaryKey3	: '" + primaryKey3 + "'";
        	strParam += "\n			, extCol1		: '" + extCol1 + "'";
        	strParam += "\n			, extCol2		: '" + extCol2 + "'";
        	strParam += "\n			, extCol3		: '" + extCol3 + "'";
        	strParam += "\n			, extCol4		: '" + extCol4 + "'";
        	strParam += "\n			, extCol5		: '" + extCol5 + "'";
        	strParam += "\n			, nDispComment	: '" + nDsipComment + "'";
        	strParam += "\n		};";

        	this.divOption.form.txa00.set_value(strParam);
        };


        this.divOption_btnOpen_onclick = function(obj,e)
        {
        	alert(this.divComment.form.openComment());
        };

        this.divOption_btnClose_onclick = function(obj,e)
        {
        	if( Ex.util.checkValidate(this.divOption, "fvValiCmp2") ) {
        		var nDispComment	= this.divOption.form.edtnDisp00.value;
        		var bInputVisible	= (this.divOption.form.rdo00.value)=='true'?true:false;
        		alert(this.divComment.form.closeComment(nDispComment, bInputVisible));
        	}
        };

        this.divOption_btnGetCnt_onclick = function(obj,e)
        {
        	var cnt = this.divComment.form.getCommentCount();
        	alert(cnt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divOption.form.edtTbl.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtPk1.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtPk2.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtPk3.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtCol1.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtCol2.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtCol3.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtCol4.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtCol5.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.edtnDisp.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.divOption.form.btnApply.addEventHandler("onclick",this.divOption_btnApply_onclick,this);
            this.divOption.form.btnOpen.addEventHandler("onclick",this.divOption_btnOpen_onclick,this);
            this.divOption.form.btnClose.addEventHandler("onclick",this.divOption_btnClose_onclick,this);
            this.divOption.form.btnGetCnt.addEventHandler("onclick",this.divOption_btnGetCnt_onclick,this);
            this.divOption.form.edtnDisp00.addEventHandler("onchanged",this.Edit_onchanged,this);
        };
        this.loadIncludeScript("ref30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
