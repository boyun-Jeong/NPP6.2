(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref14");
            this.set_titletext("Component Validation");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">A</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">B</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">C</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">D</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">E</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"name\">F</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"name\">G</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"name\">H</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"name\">I</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">J</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">K</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","5","629","745","80",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_border("1px solid blue");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput21","199","7","141","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_validationGroup("sample1");
            obj.set_validation("EDIT 빈값 항목;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validationCompStatus").set("E|V|R");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","4","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("EDIT");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","5","27","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("MASKEDIT");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","5","50","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("COMBO");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("edtInput23","199","53","141","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_validation("COMBO빈값 항목;NULL");
            obj.set_validationGroup("sample1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_edtInput23_innerdataset = new nexacro.NormalDataset("Div00_form_edtInput23_innerdataset", obj);
            Div00_form_edtInput23_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">- 선택 -</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_edtInput23_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("- 선택 -");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtInput22","199","30","141","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_validation("MASKEDIT 빈값 항목;NULL");
            obj.set_validationGroup("sample1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnenable21","95","7","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnreadonly21","112","7","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvisible21","129","7","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable21","146","7","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly21","163","7","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible21","180","7","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnenable22","95","30","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnreadonly22","112","30","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvisible22","129","30","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable22","146","30","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly22","163","30","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible22","180","30","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnenable23","95","53","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnreadonly23","112","53","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvisible23","129","53","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable23","146","53","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly23","163","53","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible23","180","53","15","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion21","344","7","362","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_inputmode("upper");
            obj.set_text("NULL|MOBILE");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnConf21","709","7","31","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion22","344","30","362","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_inputmode("upper");
            obj.set_text("NULL|MOBILE");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnConf22","709","30","31","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion23","344","53","362","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_inputmode("upper");
            obj.set_text("NULL|MOBILE");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnConf23","709","53","31","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnValidationCheck01","5","20","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("validCheck-group[sample1]");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5","73","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("최소/최대");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","5","96","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("최소/최대길이(문자당길이1)");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","5","142","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("최소/최대길이(한글3byte)");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","5","165","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("URL");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","5","188","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("IPADDRESS");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","5","211","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("전화번호");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","5","270","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("핸드폰번호");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","5","293","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("EMAIL");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","50","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("NULL");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","5","119","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("최소/최대길이(한글2byte)");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion01","411","53","304","19",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_inputmode("upper");
            obj.set_text("NULL");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","285","20","465","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("적용된 Vaildation 옵션값(validation Property 값에 셋팅)");
            obj.set_border("1px solid blue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion02","411","76","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_inputmode("upper");
            obj.set_text("NUMBER|MIN:5|MAX:10|MAX_LEN:2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion03","411","99","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_inputmode("upper");
            obj.set_text("MIN_LEN:3|MAX_LEN:5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion04","411","122","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_inputmode("upper");
            obj.set_text("MIN_LEN_ASC:3|MAX_LEN_ASC:5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion05","411","145","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_inputmode("upper");
            obj.set_text("MIN_LEN_UTF8:3|MAX_LEN_UTF8:10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion06","411","168","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_inputmode("upper");
            obj.set_text("NULL|URL");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion07","411","191","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_inputmode("upper");
            obj.set_text("NULL|IPADDR");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion08","411","214","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_inputmode("upper");
            obj.set_text("NULL|PHONE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion09","411","273","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_inputmode("upper");
            obj.set_text("NULL|MOBILE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion10","411","296","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_inputmode("upper");
            obj.set_text("NULL|EMAIL");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","5","316","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("날짜");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion11","411","319","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_inputmode("upper");
            obj.set_text("NULL|DATETIME:YYYYMMDD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00","5","339","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("날짜/시간");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion12","411","342","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_inputmode("upper");
            obj.set_text("NULL|DATETIME:YYYYMMDDHH");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00","5","362","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("날짜/시분");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion13","411","365","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_inputmode("upper");
            obj.set_text("NULL|DATETIME:YYYYMMDDHHMI");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00","5","385","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("날짜/시분초");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion14","411","388","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_inputmode("upper");
            obj.set_text("NULL|DATETIME:YYYYMMDDHHMISS");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00","5","408","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("시간");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion15","411","411","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_inputmode("upper");
            obj.set_text("NULL|DATETIME:HH");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00","5","431","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("시분");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion16","411","434","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_inputmode("upper");
            obj.set_text("NULL|DATETIME:HHMI");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","5","454","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("시분초");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion17","411","457","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_inputmode("upper");
            obj.set_text("NULL|DATETIME:HHMISS");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","755","21",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_value("※ Validation Check 처리 순서는 Component의 TabOrder 순서로 처리됩니다.\n\nComponent Validation 사용되는 속성\nvalidationGroup : Validation Check Group을 설정합니다.\nvalidation : Edit의 Validation Check 로직을 설정하는 속성입니다.\nvalidationCheckEnable : true로 설정하면 Enable 상태가 true인 경우만 Validation Check를 수행합니다.(false인 경우 Enable 상태와 무관하게 무조건 Validation Check를 수행)\nvalidationCheckVisible : true로 설정하면 visible 상태가 true인 경우만 Validation Check를 수행합니다.(false인 경우 visible 상태와 무관하게 무조건 Validation Check를 수행)\nvalidationCheckReadonly : true로 설정하면 Readonly 상태가 false인 경우만 Validation Check를 수행합니다.(false인 경우 Readonly 상태와 무관하게 무조건 Validation Check를 수행)\n\nValidtion Check 함수 호출 예시\nex) Ex.util.checkValidate(this, \"sample1\"); --Form내의 sample1이라는 group에 대해서만 체크를 진행합니다.\n\nValidation Check 종류\nNULL - 필수 입력 항목 설정시 사용\nNUMBER - 입력된 문자열이 모두 숫자인지 체크합니다.\nMIN - 숫자로 입력되어야 하는 입력 항목인 경우 숫자값으로 입력 가능한 최소 숫자값을 셋팅합니다. ex) MIN:5 (5이상이면 Vaildation 충족)\nMAX - 숫자로 입력되어야 하는 입력 항목인 경우 숫자값으로 입력 가능한 최대 숫자값을 셋팅합니다. ex) MIN:100 (100까지만 Vaildation 충족)\nMIN_LEN - 모든 문자 1글자로 인식하며 최소로 입력해야 하는 글자 수를 설정할 때 사용 ex) MIN_LEN:5 (최소 5글자를 입력하면 Vaildation 충족)\nMAX_LEN - 모든 문자 1글자로 인식하며 최대로 입력해야 하는 글자 수를 설정할 때 사용 ex) MAX_LEN:10 (최대 10글자 까지만 입력하면 Vaildation 충족)\nMIN_LEN_ASC - 한글은 2Byte 그외는 1Byte(ASCII)로 인식하며 최소로 입력해야 하는 byte수를 설정할 때 사용 ex) MIN_LEN_ASC:5 (최소 5byte 입력하면 Vaildation 충족)\nMAX_LEN_ASC - 한글은 2Byte 그외는 1Byte(ASCII)로 인식하며 최대로 입력해야 하는 byte수를 설정할 때 사용 ex) MAX_LEN_ASC:10 (최대 10byte 까지만 Vaildation 충족)\nMIN_LEN_UTF8 - 한글은 3Byte 그외는 1Byte(UTF-8)로 인식하며 최소로 입력해야 하는 byte수를 설정할 때 사용 ex) MIN_LEN_ASC:5 (최소 5byte 입력하면 Vaildation 충족)\nMAX_LEN_UTF8 - 한글은 3Byte 그외는 1Byte(UTF-8)로 인식하며 최대로 입력해야 하는 byte수를 설정할 때 사용 ex) MAX_LEN_ASC:10 (최대 10byte 까지만 Vaildation 충족)\nURL - 입력값이 URL 형식인지를 체크\nIPADDR - 입력값이 IP주소 형식인지를 체크\nPHONE - 입력값이 전화번호 형식인지를 체크\nMOBILE - 입력값이 핸드폰번호 형식인지를 체크\nEMAIL - 입력값이 E-MAIL 형식인지를 체크\nJUMINNO - 입력값이 주민등록번호 형식인지를 체크\nBIZNO - 입력값이 사업자번호 형식인지를 체크\nCORPNO - 입력값이 법인번호 형식인지를 체크\nDATETIME : 입력값이 일시/날짜/시간인 경우 유효성이 맞는지 체크\n종류 : YYYY/YYYYMM/YYYYMMDDHH/YYYYMMDDHHMI/YYYYMMDDHHMISS/HH/MI/SS/HHMI/HHMISS\nex) DATETIME:YYYY 입력값이 년도 형식인지 체크\nex) DATETIME:YYYYMM 입력값이 년월 형식인지 체크\nex) DATETIME:YYYYMMDD 입력값이 년월일 형식인지 체크\n\nvalidation 입력 방법 예시\n1. 최초 입력값은 메시지에 뿌려질 항목값(라벨)을 입력 후 항목 입력 마지막에 ;를 입력\n2. 이후 해당 입력 항목에 필요한 validation Check 속성값을 입력 (다중 사용 가능) \'|\' 문자를 붙여 추가 옵션을 사용한다.\nex) validation 신청사유;MIN_LEN_UTF8:100|MAX_LEN_UTF8:1000\n→ 신청사유 라는 입력 항목에 대한 최소 입력 내용은UTF-8 문자셋 기준 100Byte로 최대입력 제한 Byte는 UTF-8 문자셋 기준 1000Byte까지 처리한다는 예시임");
            obj.set_tooltiptext("※ 실제 적용된 자세한 내용은 ref14.xfdl 파일 내 script를 참조하세요.");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","5","488","745","111",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_tabindex("0");
            obj.set_border("1px solid blue");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Edit("edtInput18","199","7","141","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_validationGroup("sample1");
            obj.set_validation("EDIT 빈값 항목;NULL");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("validationCompStatus").set("E|V|R");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","4","85","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("EDIT");
            obj.set_border("1px solid black");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","5","27","85","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("MASKEDIT");
            obj.set_border("1px solid black");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","5","50","85","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("COMBO");
            obj.set_border("1px solid black");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("edtInput20","199","53","141","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_validation("COMBO빈값 항목;NULL");
            obj.set_validationGroup("sample1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_edtInput20_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_edtInput20_innerdataset", obj);
            Tab00_Tabpage1_form_edtInput20_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">- 선택 -</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_edtInput20_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            obj.set_text("- 선택 -");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("edtInput19","199","30","141","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_validation("MASKEDIT 빈값 항목;NULL");
            obj.set_validationGroup("sample1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion18","344","7","362","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_inputmode("upper");
            obj.set_text("NULL|MOBILE");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnConf18","709","7","31","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnenable18","95","7","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnreadonly18","112","7","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvisible18","129","7","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable18","146","7","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly18","163","7","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible18","180","7","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnenable19","95","30","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnreadonly19","112","30","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvisible19","129","30","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable19","146","30","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly19","163","30","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible19","180","30","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnenable20","95","53","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnreadonly20","112","53","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvisible20","129","53","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable20","146","53","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly20","163","53","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible20","180","53","15","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion19","344","30","362","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_inputmode("upper");
            obj.set_text("NULL|MOBILE");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnConf19","709","30","31","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion20","344","53","362","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_inputmode("upper");
            obj.set_text("NULL|MOBILE");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnConf20","709","53","31","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnValidationCheck03","655","493","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("ValidCheck");
            this.addChild(obj.name, obj);

            obj = new Button("btnValidationCheck02","5","240","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("validCheck-group[sample2]");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable01","180","53","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly01","197","53","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible01","214","53","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable01","231","53","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly01","248","53","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible01","265","53","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable02","180","76","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly02","197","76","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible02","214","76","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable02","231","76","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly02","248","76","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible02","265","76","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable03","180","99","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly03","197","99","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible03","214","99","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable03","231","99","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly03","248","99","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible03","265","99","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable04","180","122","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly04","197","122","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible04","214","122","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable04","231","122","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly04","248","122","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible04","265","122","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable05","180","145","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly05","197","145","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible05","214","145","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable05","231","145","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly05","248","145","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible05","265","145","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable06","180","168","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly06","197","168","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible06","214","168","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable06","231","168","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly06","248","168","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible06","265","168","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable07","180","191","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly07","197","191","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible07","214","191","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable07","231","191","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly07","248","191","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible07","265","191","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable08","180","214","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly08","197","214","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible08","214","214","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable08","231","214","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly08","248","214","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible08","265","214","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable09","180","273","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly09","197","273","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible09","214","273","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable09","231","273","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly09","248","273","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible09","265","273","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable10","180","296","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly10","197","296","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible10","214","296","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable10","231","296","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly10","248","296","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible10","265","296","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable11","180","319","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly11","197","319","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible11","214","319","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable11","231","319","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly11","248","319","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible11","265","319","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable12","180","342","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly12","197","342","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible12","214","342","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable12","231","342","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly12","248","342","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible12","265","342","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable13","180","365","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly13","197","365","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible13","214","365","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable13","231","365","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly13","248","365","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible13","265","365","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable14","180","388","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly14","197","388","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible14","214","388","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable14","231","388","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly14","248","388","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible14","265","388","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable15","180","411","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly15","197","411","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible15","214","411","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable15","231","411","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly15","248","411","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible15","265","411","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable16","180","434","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly16","197","434","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible16","214","434","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable16","231","434","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly16","248","434","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible16","265","434","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnenable17","180","457","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("E");
            obj.set_tooltiptext("입력EDIT Enable 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnreadonly17","197","457","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT ReadOnly 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvisible17","214","457","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT Visible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckEnable17","231","457","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("E");
            obj.set_tooltiptext("validationCheckEnable 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckReadonly17","248","457","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("R");
            obj.set_tooltiptext("입력EDIT validationCheckReadonly 설정 속성 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnvalidationCheckVisible17","265","457","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("V");
            obj.set_tooltiptext("입력EDIT validationCheckVisible 속성 설정 변경");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput02","285","76","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_validationGroup("sample1");
            obj.set_validation("최소/최대 항목;NULL|NUMBER|MIN:5|MAX:10|MAX_LEN:2");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput03","285","99","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_validationGroup("sample1");
            obj.set_validation("최소/최대길이(문자당길이1) 항목;NULL|MIN_LEN:3|MAX_LEN:5");
            obj.set_cssclass("edt_WF_normal");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput05","285","145","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_validationGroup("sample1");
            obj.set_validation("최소/최대길이(한글3byte) 항목;NULL|MIN_LEN_UTF8:3|MAX_LEN_UTF8:10");
            obj.set_cssclass("edt_WF_normal");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput06","285","168","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_validationGroup("sample1");
            obj.set_validation("URL형식체크 항목;NULL|URL");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput07","285","191","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_validationGroup("sample1");
            obj.set_validation("IPADDRESS형식체크 항목;NULL|IPADDR");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationCheckEnable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput08","285","214","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_validationGroup("sample1");
            obj.set_validation("전화번호형식체크 항목;NULL|PHONE");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationCheckVisible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput09","285","273","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_validationGroup("sample2");
            obj.set_validation("핸드폰번호형식체크 항목;NULL|MOBILE");
            obj.set_cssclass("edt_WF_normal");
            obj.set_validationCheckReadonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput10","285","296","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_validationGroup("sample2");
            obj.set_validation("EMAIL형식체크 항목;NULL|EMAIL");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput01","285","53","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_validationGroup("sample1");
            obj.set_validation("빈값 항목;NULL");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput04","285","122","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_validationGroup("sample1");
            obj.set_validation("최소/최대길이(한글2byte)항목;NULL|MIN_LEN_ASC:3|MAX_LEN_ASC:5");
            obj.set_cssclass("edt_WF_normal");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput11","285","319","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_validationGroup("sample2");
            obj.set_validation("YYYYMMDD형식체크 항목;NULL|DATETIME:YYYYMMDD");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput12","285","342","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_validationGroup("sample2");
            obj.set_validation("YYYYMMDDHH형식체크 항목;NULL|DATETIME:YYYYMMDDHH");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput13","285","365","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_validationGroup("sample2");
            obj.set_validation("YYYYMMDDHHMI형식체크 항목;NULL|DATETIME:YYYYMMDDHHMI");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput14","285","388","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_validationGroup("sample2");
            obj.set_validation("YYYYMMDDHHMISS형식체크 항목;NULL|DATETIME:YYYYMMDDHHMISS");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput15","285","411","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_validationGroup("sample2");
            obj.set_validation("시간(HH)형식체크 항목;NULL|DATETIME:HH");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput16","285","434","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_validationGroup("sample2");
            obj.set_validation("시분(HHMI)형식체크 항목;NULL|DATETIME:HHMI");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput17","285","457","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_validationGroup("sample2");
            obj.set_validation("시분초(HHMI)형식체크 항목;NULL|DATETIME:HHMISS");
            obj.set_cssclass("edt_WF_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","179","20","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("COMP");
            obj.set_border("1px solid blue");
            obj.set_textAlign("center");
            obj.set_font("12px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","231","20","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("PROP");
            obj.set_border("1px solid blue");
            obj.set_textAlign("center");
            obj.set_font("12px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf01","719","53","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf02","719","76","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf04","719","122","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf03","719","99","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf05","719","145","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf06","719","168","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf08","719","214","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf07","719","191","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf09","719","273","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf10","719","296","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf12","719","342","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf11","719","319","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf13","719","365","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf14","719","388","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf16","719","434","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf15","719","411","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf17","719","457","31","20",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnValidationCheck04","660","604","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("ValidCheck");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

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
        this.registerScript("ref14.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		: Component Valdation
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: Component Valdation Check
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
        	// 폼 로드시 필요한 기술사항은 this.fnInit에서 기술할것
        	var scopeArr = [this.all, this.Tab00.Tabpage1.form.components, this.Div00.form.components];

        	for(var a=0; a<scopeArr.length ; a++)
        	{
        		scope = scopeArr[a];

        		for(var i=0; i<scope.length ; i++)
        		{
        			if(scope[i].id.indexOf("edtInput") > -1)
        			{
        				var seq = Ex.util.getRightStr(scope[i].id, 2);
        				var validationStr = scope[i].validation || "";

        				//trace("i=" + i + " Comp ID : " + scope[i].id + " validationStr : " + validationStr);

        				if(validationStr.split(";").length > 1)
        				{
        					if(scope["edtInput" + seq].enable) scope["btnenable" + seq].set_border("1px solid red");
        					else scope["btnenable" + seq].set_border("");

        					if(scope["edtInput" + seq].readonly) scope["btnreadonly" + seq].set_border("");
        					else scope["btnreadonly" + seq].set_border("1px solid red");

        					if(scope["edtInput" + seq].visible) scope["btnvisible" + seq].set_border("1px solid red");
        					else scope["btnvisible" + seq].set_border("");

        					if(scope["edtInput" + seq].validationCheckEnable) scope["btnvalidationCheckEnable" + seq].set_border("1px solid red");
        					else scope["btnvalidationCheckEnable" + seq].set_border("");

        					if(scope["edtInput" + seq].validationCheckReadonly) scope["btnvalidationCheckReadonly" + seq].set_border("1px solid red");
        					else scope["btnvalidationCheckReadonly" + seq].set_border("");

        					if(scope["edtInput" + seq].validationCheckVisible) scope["btnvalidationCheckVisible" + seq].set_border("1px solid red");
        					else scope["btnvalidationCheckVisible" + seq].set_border("");

        					scope["edtPropValidaion" + seq].set_value(validationStr.split(";")[1]);

        					this.SetInputCompToolTipText(scope["edtInput" + seq]);
        				}
        			}
        		}
        	}
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

        // 삭제 func. ROWFLAG가 'I'면 행 삭제, 'U'/''면 'D'로 변경, 'D'면 원복
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
        		case "" : // 서비스 ID
        			break;
        	}
        }

        // 팝업 디폴트 콜백함수
        this.fnPopupAfter = function(pID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 pID(팝업창ID) , varValue(팝업창 반환값)
        	trace("pID="+pID+" ,varValue="+varValue);
        }

        // alert/confirm/error 메시지창 디폴트 콜백함수
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        //사용자 정의 함수
        this.SetInputCompToolTipText = function(inputObj)
        {
        	inputObj.set_tooltiptext(
        		"enable=[" + inputObj.enable + "]" +
        		"\nreadonly=[" + inputObj.readonly + "]" +
        		"\nvisible=[" + inputObj.visible + "]" +
        		"\nvalidationCheckEnable=[" + inputObj.validationCheckEnable + "]" +
        		"\nvalidationCheckReadonly=[" + inputObj.validationCheckReadonly + "]" +
        		"\nvalidationCheckVisible=[" + inputObj.validationCheckVisible + "]" +
        		"\nvalidation=[" + inputObj.validation + "]"
        	);
        }

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        //공통 버튼 이벤트
        this.fnButtonComOnclick = function(obj, e)
        {
            var sObjId = obj.name;
            switch(sObjId)
        	{
                case "btnValidationCheck01" :
        			var rtn = Ex.util.checkValidate(this, "sample1");
        			trace("rtn Value : " + rtn);
                    break;

                case "btnValidationCheck02" :
        			var rtn = Ex.util.checkValidate(this, "sample2");
        			trace("rtn Value : " + rtn);
                    break;

                case "btnValidationCheck03" :
        			var rtn = Ex.util.checkValidate(this.Tab00.Tabpage1, "sample1");
        			trace("rtn Value : " + rtn);
                    break;

        		case "btnValidationCheck04" :
        			var rtn = Ex.util.checkValidate(this.Div00, "sample1");
        			trace("rtn Value : " + rtn);
                    break;
            }
        }

        this.btnEnable_onclick = function(obj,e)
        {
        	var seq = Ex.util.getRightStr(obj.id, 2);
        	var seqNum = nexacro.toNumber(seq);

        	var scope;

        	if(seqNum >= 1 && seqNum <= 17)
        	{
        		scope = this.all;
        	}
        	else if(seqNum >= 18 && seqNum <= 20)
        	{
        		scope = this.Tab00.Tabpage1.form.components;
        	}
        	else if(seqNum >= 21 && seqNum <= 23)
        	{
        		scope = this.Div00.form.components;
        	}

        	scope["edtInput" + seq].set_enable(!scope["edtInput" + seq].enable);

        	if(this.all["edtInput" + seq].enable) this.all["btnenable" + seq].set_border("1px solid red");
        	else this.all["btnenable" + seq].set_border("");

        	this.SetInputCompToolTipText(this.all["edtInput" + seq]);
        };

        this.btnReadonly_onclick = function(obj,e)
        {
        	var seq = Ex.util.getRightStr(obj.id, 2);
        	var seqNum = nexacro.toNumber(seq);

        	var scope;

        	if(seqNum >= 1 && seqNum <= 17)
        	{
        		scope = this.all;
        	}
        	else if(seqNum >= 18 && seqNum <= 20)
        	{
        		scope = this.Tab00.Tabpage1.form.components;
        	}
        	else if(seqNum >= 21 && seqNum <= 23)
        	{
        		scope = this.Div00.form.components;
        	}

        	scope["edtInput" + seq].set_readonly(!scope["edtInput" + seq].readonly);

        	if(scope["edtInput" + seq].readonly) scope["btnreadonly" + seq].set_border("");
        	else scope["btnreadonly" + seq].set_border("1px solid red");

        	this.SetInputCompToolTipText(scope["edtInput" + seq]);
        };

        this.btnVisible_onclick = function(obj,e)
        {
        	var seq = Ex.util.getRightStr(obj.id, 2);
        	var seqNum = nexacro.toNumber(seq);

        	var scope;

        	if(seqNum >= 1 && seqNum <= 17)
        	{
        		scope = this.all;
        	}
        	else if(seqNum >= 18 && seqNum <= 20)
        	{
        		scope = this.Tab00.Tabpage1.form.components;
        	}
        	else if(seqNum >= 21 && seqNum <= 23)
        	{
        		scope = this.Div00.form.components;
        	}

        	scope["edtInput" + seq].set_visible(!scope["edtInput" + seq].visible);

        	if(scope["edtInput" + seq].visible) scope["btnvisible" + seq].set_border("1px solid red");
        	else scope["btnvisible" + seq].set_border("");

        	this.SetInputCompToolTipText(scope["edtInput" + seq]);
        };

        this.btnValidationCheckEnable_onclick = function(obj,e)
        {
        	var seq = Ex.util.getRightStr(obj.id, 2);
        	var seqNum = nexacro.toNumber(seq);

        	var scope;

        	if(seqNum >= 1 && seqNum <= 17)
        	{
        		scope = this.all;
        	}
        	else if(seqNum >= 18 && seqNum <= 20)
        	{
        		scope = this.Tab00.Tabpage1.form.components;
        	}
        	else if(seqNum >= 21 && seqNum <= 23)
        	{
        		scope = this.Div00.form.components;
        	}

        	scope["edtInput" + seq].set_validationCheckEnable(!scope["edtInput" + seq].validationCheckEnable);

        	if(scope["edtInput" + seq].validationCheckEnable) scope["btnvalidationCheckEnable" + seq].set_border("1px solid red");
        	else scope["btnvalidationCheckEnable" + seq].set_border("");

        	this.SetInputCompToolTipText(scope["edtInput" + seq]);
        };

        this.btnValidationCheckReadonly_onclick = function(obj,e)
        {
        	var seq = Ex.util.getRightStr(obj.id, 2);
        	var seqNum = nexacro.toNumber(seq);

        	var scope;

        	if(seqNum >= 1 && seqNum <= 17)
        	{
        		scope = this.all;
        	}
        	else if(seqNum >= 18 && seqNum <= 20)
        	{
        		scope = this.Tab00.Tabpage1.form.components;
        	}
        	else if(seqNum >= 21 && seqNum <= 23)
        	{
        		scope = this.Div00.form.components;
        	}

        	scope["edtInput" + seq].set_validationCheckReadonly(!scope["edtInput" + seq].validationCheckReadonly);

        	if(scope["edtInput" + seq].validationCheckReadonly) scope["btnvalidationCheckReadonly" + seq].set_border("1px solid red");
        	else scope["btnvalidationCheckReadonly" + seq].set_border("");

        	this.SetInputCompToolTipText(scope["edtInput" + seq]);
        };

        this.btnValidationCheckVisible_onclick = function(obj,e)
        {
        	var seq = Ex.util.getRightStr(obj.id, 2);
        	var seqNum = nexacro.toNumber(seq);

        	var scope;

        	if(seqNum >= 1 && seqNum <= 17)
        	{
        		scope = this.all;
        	}
        	else if(seqNum >= 18 && seqNum <= 20)
        	{
        		scope = this.Tab00.Tabpage1.form.components;
        	}
        	else if(seqNum >= 21 && seqNum <= 23)
        	{
        		scope = this.Div00.form.components;
        	}

        	scope["edtInput" + seq].set_validationCheckVisible(!scope["edtInput" + seq].validationCheckVisible);

        	if(scope["edtInput" + seq].validationCheckVisible) scope["btnvalidationCheckVisible" + seq].set_border("1px solid red");
        	else scope["btnvalidationCheckVisible" + seq].set_border("");

        	this.SetInputCompToolTipText(scope["edtInput" + seq]);
        };

        this.btnConf_onclick = function(obj,e)
        {
        	var seq = Ex.util.getRightStr(obj.id, 2);
        	var seqNum = nexacro.toNumber(seq);

        	var scope;

        	if(seqNum >= 1 && seqNum <= 17)
        	{
        		scope = this.all;
        	}
        	else if(seqNum >= 18 && seqNum <= 20)
        	{
        		scope = this.Tab00.Tabpage1.form.components;
        	}
        	else if(seqNum >= 21 && seqNum <= 23)
        	{
        		scope = this.Div00.form.components;
        	}

        	var valdation = scope["edtInput" + seq].validation || "";

        	scope["edtInput" + seq].set_validation(valdation.split(";")[0] + ";" + scope["edtPropValidaion" + seq].value);
        	this.SetInputCompToolTipText(scope["edtInput" + seq]);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.btnenable21.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.Div00.form.btnreadonly21.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.Div00.form.btnvisible21.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.Div00.form.btnvalidationCheckEnable21.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.Div00.form.btnvalidationCheckReadonly21.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.Div00.form.btnvalidationCheckVisible21.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.Div00.form.btnenable22.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.Div00.form.btnreadonly22.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.Div00.form.btnvisible22.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.Div00.form.btnvalidationCheckEnable22.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.Div00.form.btnvalidationCheckReadonly22.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.Div00.form.btnvalidationCheckVisible22.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.Div00.form.btnenable23.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.Div00.form.btnreadonly23.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.Div00.form.btnvisible23.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.Div00.form.btnvalidationCheckEnable23.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.Div00.form.btnvalidationCheckReadonly23.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.Div00.form.btnvalidationCheckVisible23.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.Div00.form.btnConf21.addEventHandler("onclick",this.btnConf_onclick,this);
            this.Div00.form.btnConf22.addEventHandler("onclick",this.btnConf_onclick,this);
            this.Div00.form.btnConf23.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnValidationCheck01.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.Tab00.Tabpage1.form.btnConf18.addEventHandler("onclick",this.btnConf_onclick,this);
            this.Tab00.Tabpage1.form.btnenable18.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.Tab00.Tabpage1.form.btnreadonly18.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.Tab00.Tabpage1.form.btnvisible18.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckEnable18.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckReadonly18.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckVisible18.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.Tab00.Tabpage1.form.btnenable19.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.Tab00.Tabpage1.form.btnreadonly19.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.Tab00.Tabpage1.form.btnvisible19.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckEnable19.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckReadonly19.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckVisible19.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.Tab00.Tabpage1.form.btnenable20.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.Tab00.Tabpage1.form.btnreadonly20.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.Tab00.Tabpage1.form.btnvisible20.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckEnable20.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckReadonly20.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.Tab00.Tabpage1.form.btnvalidationCheckVisible20.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.Tab00.Tabpage1.form.btnConf19.addEventHandler("onclick",this.btnConf_onclick,this);
            this.Tab00.Tabpage1.form.btnConf20.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnValidationCheck03.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnValidationCheck02.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnenable01.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly01.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible01.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable01.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly01.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible01.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable02.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly02.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible02.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable02.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly02.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible02.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable03.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly03.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible03.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable03.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly03.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible03.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable04.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly04.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible04.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable04.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly04.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible04.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable05.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly05.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible05.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable05.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly05.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible05.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable06.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly06.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible06.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable06.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly06.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible06.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable07.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly07.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible07.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable07.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly07.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible07.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable08.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly08.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible08.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable08.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly08.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible08.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable09.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly09.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible09.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable09.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly09.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible09.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable10.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly10.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible10.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable10.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly10.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible10.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable11.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly11.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible11.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable11.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly11.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible11.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable12.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly12.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible12.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable12.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly12.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible12.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable13.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly13.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible13.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable13.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly13.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible13.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable14.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly14.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible14.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable14.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly14.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible14.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable15.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly15.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible15.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable15.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly15.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible15.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable16.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly16.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible16.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable16.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly16.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible16.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnenable17.addEventHandler("onclick",this.btnEnable_onclick,this);
            this.btnreadonly17.addEventHandler("onclick",this.btnReadonly_onclick,this);
            this.btnvisible17.addEventHandler("onclick",this.btnVisible_onclick,this);
            this.btnvalidationCheckEnable17.addEventHandler("onclick",this.btnValidationCheckEnable_onclick,this);
            this.btnvalidationCheckReadonly17.addEventHandler("onclick",this.btnValidationCheckReadonly_onclick,this);
            this.btnvalidationCheckVisible17.addEventHandler("onclick",this.btnValidationCheckVisible_onclick,this);
            this.btnConf01.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf02.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf04.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf03.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf05.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf06.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf08.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf07.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf09.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf10.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf12.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf11.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf13.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf14.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf16.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf15.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnConf17.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnValidationCheck04.addEventHandler("onclick",this.fnButtonComOnclick,this);
        };
        this.loadIncludeScript("ref14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
