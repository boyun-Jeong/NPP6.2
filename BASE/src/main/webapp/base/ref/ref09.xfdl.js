(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref09");
            this.set_titletext("multiCombo");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"chkedit\" type=\"STRING\" size=\"256\"/><Column id=\"chkvisible\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">가</Col><Col id=\"chkedit\">N</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">나</Col><Col id=\"chkedit\">N</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">다</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">N</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">라</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"chkedit\" type=\"STRING\" size=\"256\"/><Column id=\"chkvisible\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">A</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">B</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">C</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">D</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">E</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">F</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">G</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">H</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">I</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">J</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">K</Col><Col id=\"chkedit\">Y</Col><Col id=\"chkvisible\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col></Row><Row><Col id=\"code\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("grpCbomTest2","495","80","419","539",null,null,null,null,null,null,this);
            obj.set_text("Property");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("stcCbomTest","10","20","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("다중선택콤보");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new GroupBox("grpCbomTest","10","80","419","539",null,null,null,null,null,null,this);
            obj.set_text("Property");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01",null,"3","221","48","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("- ref::ref09.xfdl \r\n*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcCbomTest2","495","20","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("다중선택콤보");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("divcbomTest","17","94","405","516",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetValue","274","7","64","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("0");
            obj.set_text("value");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetValue","139","7","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("1");
            obj.set_text("set_value");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetEnable","274","35","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("2");
            obj.set_text("enable");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetEnable","139","35","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("3");
            obj.set_text("set_enable");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetVisible","274","63","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("4");
            obj.set_text("visible");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetVisible","139","63","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("5");
            obj.set_text("set_visible");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetText","341","7","64","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("6");
            obj.set_text("text");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetCodeColumn","274","91","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("7");
            obj.set_text("codecolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetCodeColumn","140","91","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("8");
            obj.set_text("set_codecolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetDataColumn","274","119","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("9");
            obj.set_text("datacolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetDataColumn","140","119","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("10");
            obj.set_text("set_datacolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetInnerDataset","274","147","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("11");
            obj.set_text("innerdataset");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetInnerDataset","140","147","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("12");
            obj.set_text("set_innerdataset");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetFocusRed","274","454","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("13");
            obj.set_text("setFocusRed");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetDisplayRowcount","140","231","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("14");
            obj.set_text("set_displayrowcount");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Edit("edtValue","0","7","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("Combo의 Value값을 설정합니다.");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetDisplayRowcount","274","231","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("16");
            obj.set_text("displayrowcount");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetBindDataset","274","259","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("17");
            obj.set_text("setBind");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Combo("cboEnable","0","35","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Enable]");
            var divcbomTest_form_cboEnable_innerdataset = new nexacro.NormalDataset("divcbomTest_form_cboEnable_innerdataset", obj);
            divcbomTest_form_cboEnable_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest_form_cboEnable_innerdataset);
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Combo("cboVisible","0","63","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Visible]");
            var divcbomTest_form_cboVisible_innerdataset = new nexacro.NormalDataset("divcbomTest_form_cboVisible_innerdataset", obj);
            divcbomTest_form_cboVisible_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest_form_cboVisible_innerdataset);
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Edit("edtCodeColumn","0","91","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("20");
            obj.set_displaynulltext("[CodeColumn]");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Edit("edtDataColumn","0","119","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("[DataColumn]");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Combo("cboInnerDataset","0","147","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[InnerDataet]");
            var divcbomTest_form_cboInnerDataset_innerdataset = new nexacro.NormalDataset("divcbomTest_form_cboInnerDataset_innerdataset", obj);
            divcbomTest_form_cboInnerDataset_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dsCombo</Col><Col id=\"datacolumn\">dsCombo</Col></Row><Row><Col id=\"codecolumn\">dsCombo2</Col><Col id=\"datacolumn\">dsCombo2</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest_form_cboInnerDataset_innerdataset);
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Spin("spnDisplayRowcount","0","231","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("23");
            obj.set_tooltiptext("Combo가 펼쳐졌을 때 보여질 목록 갯수를 설정합니다.");
            obj.set_displaynulltext("[DisplayRowcount]");
            obj.set_min("5");
            obj.set_max("20");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Combo("cboBindDataset","0","259","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Bind Dataset]");
            var divcbomTest_form_cboBindDataset_innerdataset = new nexacro.NormalDataset("divcbomTest_form_cboBindDataset_innerdataset", obj);
            divcbomTest_form_cboBindDataset_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dsData</Col><Col id=\"datacolumn\">dsData</Col></Row><Row><Col id=\"codecolumn\">dsData2</Col><Col id=\"datacolumn\">dsData2</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest_form_cboBindDataset_innerdataset);
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Edit("edtBindColumn","140","259","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("[Column]");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetFocus","140","454","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("26");
            obj.set_text("setFocus");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnAddCanchange","0","398","200","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("27");
            obj.set_text("Add Event canchange");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnRemoveOnchanged","205","426","200","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("28");
            obj.set_text("Remove Event onchanged");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnRemoveCanchange","205","398","200","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("29");
            obj.set_text("Remove Event canchange");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnAddOnchanged","0","426","200","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("30");
            obj.set_text("Add Event onchanged");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Spin("spnWidth","0","287","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("31");
            obj.set_tooltiptext("Combo가 펼쳐졌을 때 보여질 목록 갯수를 설정합니다.");
            obj.set_increment("5");
            obj.set_displaynulltext("[Width px]");
            obj.set_min("100");
            obj.set_max("300");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetWidth","140","287","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("32");
            obj.set_text("set_width");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetWidth","274","287","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("33");
            obj.set_text("width");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Spin("spnHeight","0","315","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("34");
            obj.set_tooltiptext("Combo가 펼쳐졌을 때 보여질 목록 갯수를 설정합니다.");
            obj.set_increment("5");
            obj.set_displaynulltext("[Height px]");
            obj.set_min("24");
            obj.set_max("50");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetHeight","140","315","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("35");
            obj.set_text("set_height");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetHeight","274","315","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("36");
            obj.set_text("height");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Combo("cboEnableEvent","0","371","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[EnableEvent]");
            var divcbomTest_form_cboEnableEvent_innerdataset = new nexacro.NormalDataset("divcbomTest_form_cboEnableEvent_innerdataset", obj);
            divcbomTest_form_cboEnableEvent_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest_form_cboEnableEvent_innerdataset);
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetEnableEvent","140","370","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("38");
            obj.set_text("set_enableevent");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetEnableEvent","274","370","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("39");
            obj.set_text("enableevent");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Combo("cboOkBtnVisible","0","343","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Visible]");
            var divcbomTest_form_cboOkBtnVisible_innerdataset = new nexacro.NormalDataset("divcbomTest_form_cboOkBtnVisible_innerdataset", obj);
            divcbomTest_form_cboOkBtnVisible_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest_form_cboOkBtnVisible_innerdataset);
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnOKSetVisible","139","343","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("41");
            obj.set_text("set_okBtnVisible");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnOKGetVisible","274","343","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("42");
            obj.set_text("okBtnVisible");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetIsCheckEditColumn","274","175","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("43");
            obj.set_text("ischeckeditcolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetIsCheckEditColumn","140","175","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("44");
            obj.set_text("set_ischeckeditcolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnGetIsCheckVisibleColumn","274","203","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("45");
            obj.set_text("ischeckvisiblecolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Button("btnSetIsCheckVisibleColumn","140","203","131","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("46");
            obj.set_text("set_ischeckvisiblecolumn");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Edit("edtIsCheckEditColumn","0","175","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("47");
            obj.set_displaynulltext("[isCheckEditColumn]");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Edit("edtIsCheckVisibleColumn","0","203","135","24",null,null,null,null,null,null,this.divcbomTest.form);
            obj.set_taborder("48");
            obj.set_displaynulltext("[IsCheckVisibleColumn]");
            this.divcbomTest.addChild(obj.name, obj);

            obj = new Div("divcbomTest2","502","94","405","516",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetValue","274","7","64","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("0");
            obj.set_text("value");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetValue","139","7","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("1");
            obj.set_text("set_value");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetEnable","274","35","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("2");
            obj.set_text("enable");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetEnable","139","35","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("3");
            obj.set_text("set_enable");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetVisible","274","63","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("4");
            obj.set_text("visible");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetVisible","139","63","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("5");
            obj.set_text("set_visible");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetText","341","7","64","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("6");
            obj.set_text("text");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetCodeColumn","274","91","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("7");
            obj.set_text("codecolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetCodeColumn","140","91","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("8");
            obj.set_text("set_codecolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetDataColumn","274","119","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("9");
            obj.set_text("datacolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetDataColumn","140","119","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("10");
            obj.set_text("set_datacolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetInnerDataset","274","147","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("11");
            obj.set_text("innerdataset");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetInnerDataset","140","147","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("12");
            obj.set_text("set_innerdataset");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetFocusRed","274","454","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("13");
            obj.set_text("setFocusRed");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetDisplayRowcount","140","231","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("14");
            obj.set_text("set_displayrowcount");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Edit("edtValue","0","7","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("Combo의 Value값을 설정합니다.");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetDisplayRowcount","274","231","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("16");
            obj.set_text("displayrowcount");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetBindDataset","274","259","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("17");
            obj.set_text("setBind");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Combo("cboEnable","0","35","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Enable]");
            var divcbomTest2_form_cboEnable_innerdataset = new nexacro.NormalDataset("divcbomTest2_form_cboEnable_innerdataset", obj);
            divcbomTest2_form_cboEnable_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest2_form_cboEnable_innerdataset);
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Combo("cboVisible","0","63","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Visible]");
            var divcbomTest2_form_cboVisible_innerdataset = new nexacro.NormalDataset("divcbomTest2_form_cboVisible_innerdataset", obj);
            divcbomTest2_form_cboVisible_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest2_form_cboVisible_innerdataset);
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Edit("edtCodeColumn","0","91","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("20");
            obj.set_displaynulltext("[CodeColumn]");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Edit("edtDataColumn","0","119","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("[DataColumn]");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Combo("cboInnerDataset","0","147","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[InnerDataet]");
            var divcbomTest2_form_cboInnerDataset_innerdataset = new nexacro.NormalDataset("divcbomTest2_form_cboInnerDataset_innerdataset", obj);
            divcbomTest2_form_cboInnerDataset_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dsCombo</Col><Col id=\"datacolumn\">dsCombo</Col></Row><Row><Col id=\"codecolumn\">dsCombo2</Col><Col id=\"datacolumn\">dsCombo2</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest2_form_cboInnerDataset_innerdataset);
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Spin("spnDisplayRowcount","0","231","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("23");
            obj.set_tooltiptext("Combo가 펼쳐졌을 때 보여질 목록 갯수를 설정합니다.");
            obj.set_displaynulltext("[DisplayRowcount]");
            obj.set_min("5");
            obj.set_max("20");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Combo("cboBindDataset","0","259","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Bind Dataset]");
            var divcbomTest2_form_cboBindDataset_innerdataset = new nexacro.NormalDataset("divcbomTest2_form_cboBindDataset_innerdataset", obj);
            divcbomTest2_form_cboBindDataset_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dsData</Col><Col id=\"datacolumn\">dsData</Col></Row><Row><Col id=\"codecolumn\">dsData2</Col><Col id=\"datacolumn\">dsData2</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest2_form_cboBindDataset_innerdataset);
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Edit("edtBindColumn","140","259","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("[Column]");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetFocus","140","454","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("26");
            obj.set_text("setFocus");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnAddCanchange","0","398","200","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("27");
            obj.set_text("Add Event canchange");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnRemoveOnchanged","205","426","200","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("28");
            obj.set_text("Remove Event onchanged");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnRemoveCanchange","205","398","200","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("29");
            obj.set_text("Remove Event canchange");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnAddOnchanged","0","426","200","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("30");
            obj.set_text("Add Event onchanged");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Spin("spnWidth","0","287","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("31");
            obj.set_tooltiptext("Combo가 펼쳐졌을 때 보여질 목록 갯수를 설정합니다.");
            obj.set_increment("5");
            obj.set_displaynulltext("[Width px]");
            obj.set_min("100");
            obj.set_max("300");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetWidth","140","287","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("32");
            obj.set_text("set_width");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetWidth","274","287","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("33");
            obj.set_text("width");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Spin("spnHeight","0","315","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("34");
            obj.set_tooltiptext("Combo가 펼쳐졌을 때 보여질 목록 갯수를 설정합니다.");
            obj.set_increment("5");
            obj.set_displaynulltext("[Height px]");
            obj.set_min("24");
            obj.set_max("50");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetHeight","140","315","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("35");
            obj.set_text("set_height");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetHeight","274","315","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("36");
            obj.set_text("height");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Combo("cboEnableEvent","0","371","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[EnableEvent]");
            var divcbomTest2_form_cboEnableEvent_innerdataset = new nexacro.NormalDataset("divcbomTest2_form_cboEnableEvent_innerdataset", obj);
            divcbomTest2_form_cboEnableEvent_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest2_form_cboEnableEvent_innerdataset);
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetEnableEvent","140","370","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("38");
            obj.set_text("set_enableevent");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetEnableEvent","274","370","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("39");
            obj.set_text("enableevent");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Combo("cboOkBtnVisible","0","343","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[Visible]");
            var divcbomTest2_form_cboOkBtnVisible_innerdataset = new nexacro.NormalDataset("divcbomTest2_form_cboOkBtnVisible_innerdataset", obj);
            divcbomTest2_form_cboOkBtnVisible_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divcbomTest2_form_cboOkBtnVisible_innerdataset);
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnOKSetVisible","139","343","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("41");
            obj.set_text("set_okBtnVisible");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnOKGetVisible","274","343","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("42");
            obj.set_text("okBtnVisible");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetIsCheckEditColumn","274","175","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("43");
            obj.set_text("ischeckeditcolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetIsCheckEditColumn","140","175","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("44");
            obj.set_text("set_ischeckeditcolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnGetIsCheckVisibleColumn","274","203","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("45");
            obj.set_text("ischeckvisiblecolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Button("btnSetIsCheckVisibleColumn","140","203","131","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("46");
            obj.set_text("set_ischeckvisiblecolumn");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Edit("edtIsCheckEditColumn","0","175","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("47");
            obj.set_displaynulltext("[isCheckEditColumn]");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Edit("edtIsCheckVisibleColumn","0","203","135","24",null,null,null,null,null,null,this.divcbomTest2.form);
            obj.set_taborder("48");
            obj.set_displaynulltext("[IsCheckVisibleColumn]");
            this.divcbomTest2.addChild(obj.name, obj);

            obj = new Static("stcCbomTest2_00","933","21","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("dsCombo 데이터");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","929","90","325","529",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsCombo");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/><Cell col=\"2\" text=\"chkedit\"/><Cell col=\"3\" text=\"chkvisible\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/><Cell col=\"2\" text=\"bind:chkedit\" edittype=\"combo\" combodataset=\"dsGrdCombo\" combocodecol=\"code\" combodatacol=\"code\"/><Cell col=\"3\" text=\"bind:chkvisible\" edittype=\"combo\" combodataset=\"dsGrdCombo\" combocodecol=\"code\" combodatacol=\"code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcCbomTest2_00_00","1268","21","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("dsCombo2 데이터");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","1264","90","325","529",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsCombo2");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/><Cell col=\"2\" text=\"chkedit\"/><Cell col=\"3\" text=\"chkvisible\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/><Cell col=\"2\" text=\"bind:chkedit\" edittype=\"combo\" combodataset=\"dsGrdCombo\" combocodecol=\"code\" combodatacol=\"code\"/><Cell col=\"3\" text=\"bind:chkvisible\" edittype=\"combo\" combodataset=\"dsGrdCombo\" combocodecol=\"code\" combodatacol=\"code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MultiSelectCombo("cbomTest2","stcCbomTest2:0","20","140","24",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("11");
            obj.getSetter("innerdataset").set("dsCombo2");
            obj.getSetter("codecolumn").set("code");
            obj.getSetter("datacolumn").set("data");
            obj.getSetter("ischeckeditcolumn").set("chkedit");
            obj.getSetter("ischeckvisiblecolumn").set("chkvisible");
            this.addChild(obj.name, obj);

            obj = new MultiSelectCombo("cbomTest","123","18","162","27",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("12");
            obj.getSetter("innerdataset").set("dsCombo");
            obj.getSetter("codecolumn").set("code");
            obj.getSetter("datacolumn").set("data");
            obj.getSetter("ischeckeditcolumn").set("chkedit");
            obj.getSetter("ischeckvisiblecolumn").set("chkvisible");
            obj.getSetter("displayrowcount").set("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divcbomTest.form
            obj = new Layout("default","",0,0,this.divcbomTest.form,function(p){});
            this.divcbomTest.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divcbomTest2.form
            obj = new Layout("default","",0,0,this.divcbomTest2.form,function(p){});
            this.divcbomTest2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ref09.xfdl", function() {
        /***********************************************************************************
        * 화면 ID		︰ ref09
        * 화면(명)		︰ MultiSelectCombo
        * 메뉴(경로)	︰ 공통
        * 화면 설명	︰
        * 작성자		︰ WEMB
        * 작성일		︰
        * 수정이력		︰
        *------------------------------------------------------------------
        * 수정일		작성자		이력
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
        this.fvVar;  // 폼변수는 var로 선언하지 말고 this.변수명으로 기술한다.
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
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        // 	trace("workArea form init call");
        // 	trace("ref09 this.fnInit() this.id : " + this.id);
        // 	trace("ref09 this.fnInit() this.parent.id : " + this.parent.id);
        // 	trace("ref09 this.fnInit() this.parent.parent.id : " + this.parent.parent.id);
        // 	trace("ref09 this.fnInit() this.parent.parent.parent.id : " + this.parent.parent.parent.id);
        // 	trace("ref09 this.fnInit() this.parent.parent.parent.parent.id : " + this.parent.parent.parent.parent.id);

        	var comp = this.components["divcbomTest"];
        	comp.form.components["edtValue"].set_value(this.cbomTest.value);
        	comp.form.components["cboEnable"].set_value(this.cbomTest.enable ? "Y" : "N");
        	comp.form.components["cboVisible"].set_value(this.cbomTest.visible ? "Y" : "N");
        	comp.form.components["edtCodeColumn"].set_value(this.cbomTest.codecolumn);
        	comp.form.components["edtDataColumn"].set_value(this.cbomTest.datacolumn);
        	comp.form.components["cboInnerDataset"].set_value(this.cbomTest.innerdataset);
        	comp.form.components["edtIsCheckEditColumn"].set_value(this.cbomTest.ischeckeditcolumn);
        	comp.form.components["edtIsCheckVisibleColumn"].set_value(this.cbomTest.ischeckvisiblecolumn);
        	comp.form.components["spnDisplayRowcount"].set_value(this.cbomTest.displayrowcount);

        	for(var i=0; i<this.binds.length ; i++)
        	{
        		if(this.binds[i].propid == "value")
        		{
        			if(this.binds[i].compid == "cbomTest")
        			{
        				//trace("ref09 " + this.binds[i].name + "/" + this.binds[i].compid+ "/" + this.binds[i].propid + "/" + this.binds[i].datasetid+ "/" + this.binds[i].columnid);
        				comp.form.components["cboBindDataset"].set_value(this.binds[i].datasetid);
        				comp.form.components["edtBindColumn"].set_value(this.binds[i].columnid);
        			}
        		}
        	}

        	comp.form.components["spnWidth"].set_value(this.cbomTest.width);
        	comp.form.components["spnHeight"].set_value(this.cbomTest.height);
        	comp.form.components["cboOkBtnVisible"].set_value(this.cbomTest.isbuttonokvisible ? "Y" : "N");
        	comp.form.components["cboEnableEvent"].set_value(this.cbomTest.enableevent ? "Y" : "N");

        	comp = this.components["divcbomTest2"];
        	comp.form.components["edtValue"].set_value(this.cbomTest2.value);
        	comp.form.components["cboEnable"].set_value(this.cbomTest2.enable ? "Y" : "N");
        	comp.form.components["cboVisible"].set_value(this.cbomTest2.visible ? "Y" : "N");
        	comp.form.components["edtCodeColumn"].set_value(this.cbomTest2.codecolumn);
        	comp.form.components["edtDataColumn"].set_value(this.cbomTest2.datacolumn);
        	comp.form.components["cboInnerDataset"].set_value(this.cbomTest2.innerdataset);
        	comp.form.components["edtIsCheckEditColumn"].set_value(this.cbomTest.ischeckeditcolumn);
        	comp.form.components["edtIsCheckVisibleColumn"].set_value(this.cbomTest.ischeckvisiblecolumn);
        	comp.form.components["spnDisplayRowcount"].set_value(this.cbomTest2.displayrowcount);

        	//alert("datasetid : " + this.binds["cbomTest"].datasetid);

        	for(var i=0; i<this.binds.length ; i++)
        	{
        		if(this.binds[i].propid == "value")
        		{
        			if(this.binds[i].compid == "cbomTest2")
        			{
        				//trace("ref09 " + this.binds[i].name + "/" + this.binds[i].compid+ "/" + this.binds[i].propid + "/" + this.binds[i].datasetid+ "/" + this.binds[i].columnid);
        				comp.form.components["cboBindDataset"].set_value(this.binds[i].datasetid);
        				comp.form.components["edtBindColumn"].set_value(this.binds[i].columnid);
        			}
        		}
        	}

        	comp.form.components["spnWidth"].set_value(this.cbomTest2.width);
        	comp.form.components["spnHeight"].set_value(this.cbomTest2.height);
        	comp.form.components["cboOkBtnVisible"].set_value(this.cbomTest2.isbuttonokvisible ? "Y" : "N");
        	comp.form.components["cboEnableEvent"].set_value(this.cbomTest2.enableevent ? "Y" : "N");
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
        }

        // 공통 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
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
        // Transaction 디폴트 콜백함수
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	// 에러메세지 처리
        	if (nErrorCode < 0)
        	{
        		var param = {id : "ERROR", msg : sSvcId+"::"+nErrorCode+"::"+sErrorMsg};
        		Ex.core.error(this, param);
        		return;
        	}

        	// 각 Transaction별 CallBack 처리
        	switch (sSvcId)
        	{
        		case "ABOUT" : // 서비스 ID
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID, varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        	//"pAlert" + obj.parent.parent.id + "_" + obj.name
        	if(!varValue) return;

        	var idVal = nexacro.replaceAll(mID, "pAlertI", "").split("_");
        	var divId = idVal[0];
        	var btnId = idVal[1];

        	var compId = nexacro.replaceAll(divId, "div", "");

        	var comp = this.components[compId];

        	//trace("mID : " + mID + " idVal : " + idVal + " divId : " + divId + " btnId : " + btnId + " compId : " + compId);

        	switch(btnId)
        	{
        		case "btnSetValue" :
        			comp.set_value(this.components[divId].form.edtValue.value);
        			break;
        		case "btnGetValue" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.value + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnGetText" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.text + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetEnable" :
        			comp.set_enable(this.components[divId].form.cboEnable.value == "Y" ? true : false);
        			break;
        		case "btnGetEnable" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.enable + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetVisible" :
        			comp.set_visible(this.components[divId].form.cboVisible.value == "Y" ? true : false);
        			break;
        		case "btnGetVisible" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.visible + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetCodeColumn" :
        			comp.set_codecolumn(this.components[divId].form.edtCodeColumn.value);
        			break;
        		case "btnGetCodeColumn" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.codecolumn + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetDataColumn" :
        			comp.set_datacolumn(this.components[divId].form.edtDataColumn.value);
        			break;
        		case "btnGetDataColumn" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.datacolumn + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetInnerDataset" :
        			comp.set_innerdataset(this.components[divId].form.cboInnerDataset.value);
        			break;
        		case "btnGetInnerDataset" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.innerdataset + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetIsCheckEditColumn" :
        			comp.set_ischeckeditcolumn(this.components[divId].form.edtIsCheckEditColumn.value);
        			break;
        		case "btnGetIsCheckEditColumn" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.ischeckeditcolumn + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetIsCheckVisibleColumn" :
        			comp.set_ischeckvisiblecolumn(this.components[divId].form.edtIsCheckVisibleColumn.value);
        			break;
        		case "btnGetIsCheckVisibleColumn" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.ischeckvisiblecolumn + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetDisplayRowcount" :
        			comp.set_displayrowcount(this.components[divId].form.spnDisplayRowcount.value);
        			break;
        		case "btnGetDisplayRowcount" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.displayrowcount + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetBindDataset" :
        			comp.setBind(this.components[divId].form.cboBindDataset.value, this.divcbomTest.form.edtBindColumn.value);
        			break;
        		case "btnSetWidth" :
        			comp.set_width(this.components[divId].form.spnWidth.value);
        			break;
        		case "btnGetWidth" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.getOffsetWidth() + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetHeight" :
        			comp.set_height(this.components[divId].form.spnHeight.value);
        			break;
        		case "btnGetHeight" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.getOffsetHeight() + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnOKSetVisible" :
        			comp.popupdiv.form.setBtnOkVisible(this.components[divId].form.cboOkBtnVisible.value == "Y" ? true : false);
        			break;
        		case "btnOKGetVisible" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.isbuttonokvisible + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnSetEnableEvent" :
        			comp.set_enableevent(this.components[divId].form.cboEnableEvent.value == "Y" ? true : false);
        			break;
        		case "btnGetEnableEvent" :
        			var param = {id : "pAlertTextI", msg : "value : [" + comp.enableevent + "]"};
        			Ex.core.alert(this, param);
        			break;
        		case "btnAddCanchange" :
        			var fIdx = comp.findEventHandler("canchange", this.cbomTest_canchange, this);
        			trace("btnAddCanchange fIdx : " + fIdx);
        			if( fIdx < 0 )
        			{
        				var idx = comp.addEventHandler("canchange", this.cbomTest_canchange, this);
        				trace("btnAddCanchange idx :[" + idx + "]");
        			}
        			break;
        		case "btnRemoveCanchange" :
        			var fIdx = comp.findEventHandler("canchange", this.cbomTest_canchange, this);
        			trace("btnRemoveCanchange fIdx : " + fIdx);
        			if( fIdx > -1 )
        			{
        				var idx = comp.removeEventHandler("canchange", this.cbomTest_canchange, this);
        				trace("btnRemoveCanchange idx :[" + idx + "]");
        			}
        			break;
        		case "btnAddOnchanged" :
        			var fIdx = comp.findEventHandler("onchanged", this.cbomTest_onchanged, this);
        			trace("btnAddCanchange fIdx : " + fIdx);
        			if( fIdx < 0 )
        			{
        				var idx = comp.addEventHandler("onchanged", this.cbomTest_onchanged, this);
        				trace("btnAddOnchanged idx :[" + idx + "]");
        			}
        			break;
        		case "btnRemoveOnchanged" :
        			var fIdx = comp.findEventHandler("onchanged", this.cbomTest_onchanged, this);
        			trace("btnRemoveOnchanged fIdx : " + fIdx);
        			if( fIdx > -1)
        			{
        				var idx = comp.removeEventHandler("onchanged", this.cbomTest_onchanged, this);
        				trace("btnRemoveOnchanged idx :[" + idx + "]");
        			}
        			break;
        		case "btnSetFocus" :
        			comp.setFocus();
        			break;
        		case "btnSetFocusRed" :
        			comp.setFocusRed();
        			break;
        		default:
        			break;
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        // component onclick event.
        this.fnCommOnclick = function(obj, e)
        {
        	var msgText = "";
        	switch(obj.name)
        	{
        		case "btnSetValue" :
        			break;
        		case "btnGetValue" :
        			break;
        		case "btnGetText" :
        			break;
        		case "btnSetEnable" :
        			break;
        		case "btnGetEnable" :
        			break;
        		case "btnSetVisible" :
        			break;
        		case "btnGetVisible" :
        			break;
        		case "btnSetCodeColumn" :
        			break;
        		case "btnGetCodeColumn" :
        			break;
        		case "btnSetDataColumn" :
        			break;
        		case "btnGetDataColumn" :
        			break;
        		case "btnSetInnerDataset" :
        			break;
        		case "btnGetInnerDataset" :
        			break;
        		case "btnSetDisplayRowcount" :
        			break;
        		case "btnGetDisplayRowcount" :
        			break;
        		case "btnSetBindDataset" :
        			break;
        		case "btnSetWidth" :
        			break;
        		case "btnGetWidth" :
        			break;
        		case "btnSetHeight" :
        			break;
        		case "btnGetHeight" :
        			break;
        		case "btnSetEnableEvent" :
        			break;
        		case "btnGetEnableEvent" :
        			break;
        		case "btnAddCanchange" :
        			obj.set_border("1px solid red");
        			break;
        		case "btnRemoveCanchange" :
        			if(obj.parent.parent.id == "divcbomTest")
        			{
        				this.divcbomTest.form.btnAddCanchange.set_border("");
        			}
        			else if(obj.parent.parent.id == "divcbomTest2")
        			{
        				this.divcbomTest2.form.btnAddCanchange.set_border("");
        			}
        			break;
        		case "btnAddOnchanged" :
        			obj.set_border("1px solid red");
        			break;

        		case "btnRemoveOnchanged" :
        			if(obj.parent.parent.id == "divcbomTest")
        			{
        				this.divcbomTest.form.btnAddOnchanged.set_border("");
        			}
        			else if(obj.parent.parent.id == "divcbomTest2")
        			{
        				this.divcbomTest2.form.btnAddOnchanged.set_border("");
        			}
        			break;
        		case "btnSetFocus" :
        			break;
        		case "btnSetFocusRed" :
        			break;
        	}

        	//trace("obj.parent.parent.id : " + obj.parent.parent.id);
        	this.fnMsgAfter("pAlertI" + obj.parent.parent.id + "_" + obj.name, true);
        }

        this.grd_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        this.cbomTest_canchange = function(obj, e)
        {
        	var msg = "값을 변경하시겠습니까?\n";
        		msg += "[확인] : true, [취소] : false\n";
        		msg += "(false 를 반환하면 값 변경이 안됩니다.)";
        	return confirm(msg);
        };

        this.cbomTest_onchanged = function(obj, e)
        {
        	var msg = obj + " ==> " + obj.name + "\n";
        		msg += "변경전 value : " + e.prevalue + "\n";
        		msg += "변경후 value : " + e.postvalue + "\n";
        		msg += "변경전 text : " + e.pretext + "\n";
        		msg += "변경후 text : " + e.posttext + "\n";
        	alert(msg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divcbomTest.form.btnGetValue.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetValue.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetEnable.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetEnable.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetText.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetCodeColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetCodeColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetDataColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetDataColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetInnerDataset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetInnerDataset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetFocusRed.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetDisplayRowcount.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetDisplayRowcount.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetBindDataset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetFocus.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnAddCanchange.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnRemoveOnchanged.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnRemoveCanchange.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnAddOnchanged.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetWidth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetWidth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetHeight.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetHeight.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetEnableEvent.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetEnableEvent.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnOKSetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnOKGetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetIsCheckEditColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetIsCheckEditColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnGetIsCheckVisibleColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest.form.btnSetIsCheckVisibleColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetValue.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetValue.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetEnable.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetEnable.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetText.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetCodeColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetCodeColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetDataColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetDataColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetInnerDataset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetInnerDataset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetFocusRed.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetDisplayRowcount.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetDisplayRowcount.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetBindDataset.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetFocus.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnAddCanchange.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnRemoveOnchanged.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnRemoveCanchange.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnAddOnchanged.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetWidth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetWidth.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetHeight.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetHeight.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetEnableEvent.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetEnableEvent.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnOKSetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnOKGetVisible.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetIsCheckEditColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetIsCheckEditColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnGetIsCheckVisibleColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.divcbomTest2.form.btnSetIsCheckVisibleColumn.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Grid00.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.grd_oncellclick,this);
        };
        this.loadIncludeScript("ref09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
