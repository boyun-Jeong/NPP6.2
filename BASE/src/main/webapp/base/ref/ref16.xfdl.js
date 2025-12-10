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
            this.set_titletext("Grid Validation");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/><Column id=\"COL4\" type=\"STRING\" size=\"256\"/><Column id=\"COL5\" type=\"STRING\" size=\"256\"/><Column id=\"COL6\" type=\"STRING\" size=\"256\"/><Column id=\"COL7\" type=\"STRING\" size=\"256\"/><Column id=\"COL8\" type=\"STRING\" size=\"256\"/><Column id=\"COL9\" type=\"STRING\" size=\"256\"/><Column id=\"COL10\" type=\"STRING\" size=\"256\"/><Column id=\"COL11\" type=\"STRING\" size=\"256\"/><Column id=\"COL12\" type=\"STRING\" size=\"256\"/><Column id=\"COL13\" type=\"STRING\" size=\"256\"/><Column id=\"COL14\" type=\"STRING\" size=\"256\"/><Column id=\"COL15\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">- 선택 -</Col></Row><Row><Col id=\"CODE\">AA</Col><Col id=\"DATA\">테스트1</Col></Row><Row><Col id=\"CODE\">BB</Col><Col id=\"DATA\">테스트2</Col></Row><Row><Col id=\"CODE\">CC</Col><Col id=\"DATA\">테스트3</Col></Row><Row><Col id=\"CODE\">DD</Col><Col id=\"DATA\">테스트4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/><Column id=\"COL4\" type=\"STRING\" size=\"256\"/><Column id=\"COL5\" type=\"STRING\" size=\"256\"/><Column id=\"COL6\" type=\"STRING\" size=\"256\"/><Column id=\"COL7\" type=\"STRING\" size=\"256\"/><Column id=\"COL8\" type=\"STRING\" size=\"256\"/><Column id=\"COL9\" type=\"STRING\" size=\"256\"/><Column id=\"COL10\" type=\"STRING\" size=\"256\"/><Column id=\"COL11\" type=\"STRING\" size=\"256\"/><Column id=\"COL12\" type=\"STRING\" size=\"256\"/><Column id=\"COL13\" type=\"STRING\" size=\"256\"/><Column id=\"COL14\" type=\"STRING\" size=\"256\"/><Column id=\"COL15\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL1\">1</Col><Col id=\"COL2\">11</Col><Col id=\"COL3\">111</Col><Col id=\"COL4\">1111</Col><Col id=\"COL5\">11111</Col><Col id=\"COL6\">111111</Col><Col id=\"COL7\">1111111</Col><Col id=\"COL8\">11111111</Col><Col id=\"COL9\">111111111</Col><Col id=\"COL10\">1111111111</Col><Col id=\"COL11\">11111111111</Col><Col id=\"COL12\">111111111111</Col><Col id=\"COL13\">1111111111111</Col><Col id=\"COL14\">11111111111111</Col><Col id=\"COL15\">111111111111111</Col></Row><Row><Col id=\"COL1\">2</Col><Col id=\"COL2\">22</Col><Col id=\"COL3\">222</Col><Col id=\"COL4\">2222</Col><Col id=\"COL5\">22222</Col><Col id=\"COL6\">222222</Col><Col id=\"COL7\">2222222</Col><Col id=\"COL8\">22222222</Col><Col id=\"COL9\">222222222</Col><Col id=\"COL10\">2222222222</Col><Col id=\"COL11\">22222222222</Col><Col id=\"COL12\">222222222222</Col><Col id=\"COL13\">2222222222222</Col><Col id=\"COL14\">22222222222222</Col><Col id=\"COL15\">222222222222222</Col></Row><Row><Col id=\"COL1\">3</Col><Col id=\"COL2\">33</Col><Col id=\"COL3\">333</Col><Col id=\"COL4\">3333</Col><Col id=\"COL5\">33333</Col><Col id=\"COL6\">333333</Col><Col id=\"COL7\">3333333</Col><Col id=\"COL8\">33333333</Col><Col id=\"COL9\">333333333</Col><Col id=\"COL10\">3333333333</Col><Col id=\"COL11\">33333333333</Col><Col id=\"COL12\">333333333333</Col><Col id=\"COL13\">3333333333333</Col><Col id=\"COL14\">33333333333333</Col><Col id=\"COL15\">333333333333333</Col></Row><Row><Col id=\"COL1\">4</Col><Col id=\"COL2\">44</Col><Col id=\"COL3\">444</Col><Col id=\"COL4\">4444</Col><Col id=\"COL5\">44444</Col><Col id=\"COL6\">444444</Col><Col id=\"COL7\">4444444</Col><Col id=\"COL8\">44444444</Col><Col id=\"COL9\">444444444</Col><Col id=\"COL10\">4444444444</Col><Col id=\"COL11\">44444444444</Col><Col id=\"COL12\">444444444444</Col><Col id=\"COL13\">4444444444444</Col><Col id=\"COL14\">44444444444444</Col><Col id=\"COL15\">444444444444444</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCol", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">COL1</Col><Col id=\"DATA\">COL1</Col></Row><Row><Col id=\"CODE\">COL2</Col><Col id=\"DATA\">COL2</Col></Row><Row><Col id=\"CODE\">COL3</Col><Col id=\"DATA\">COL3</Col></Row><Row><Col id=\"CODE\">COL4</Col><Col id=\"DATA\">COL4</Col></Row><Row><Col id=\"CODE\">COL5</Col><Col id=\"DATA\">COL5</Col></Row><Row><Col id=\"CODE\">COL6</Col><Col id=\"DATA\">COL6</Col></Row><Row><Col id=\"CODE\">COL7</Col><Col id=\"DATA\">COL7</Col></Row><Row><Col id=\"CODE\">COL8</Col><Col id=\"DATA\">COL8</Col></Row><Row><Col id=\"CODE\">COL9</Col><Col id=\"DATA\">COL9</Col></Row><Row><Col id=\"CODE\">COL10</Col><Col id=\"DATA\">COL10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEdittype", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">normal</Col></Row><Row><Col id=\"CODE\">combo</Col></Row><Row><Col id=\"CODE\">date</Col></Row><Row><Col id=\"CODE\">text</Col></Row><Row><Col id=\"CODE\">textarea</Col></Row><Row><Col id=\"CODE\">mask</Col></Row><Row><Col id=\"CODE\">readonly</Col></Row><Row><Col id=\"CODE\">none</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","16",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","301",null,null,"10","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("Grid Validation 사용되는 속성\nvalidation : Cell의 Validation Check 로직을 설정하는 속성입니다.\nvalidationStatus : true로 설정하면 edittype이 활성화된 상태인 cell만 Validation Check를 수행합니다.(false인 경우 edittype 상태와 무관하게 무조건 Validation Check를 수행)\n\nValidtion Check 함수 호출 예시\nex) this.Grid00.checkValidate(true); --Form내의 sample1이라는 group에 대해서만 체크를 진행합니다.\n\nCheck 로직에 사용되는 항목은 아래와 같습니다.\nNULL - 필수 입력 항목 설정시 사용\nNUMBER - 입력된 문자열이 모두 숫자인지 체크합니다.\nMIN - 숫자로 입력되어야 하는 입력 항목인 경우 숫자값으로 입력 가능한 최소 숫자값을 셋팅합니다. ex) MIN:5 (5이상이면 Vaildation 충족)\nMAX - 숫자로 입력되어야 하는 입력 항목인 경우 숫자값으로 입력 가능한 최대 숫자값을 셋팅합니다. ex) MIN:100 (100까지만 Vaildation 충족)\nMIN_LEN - 모든 문자 1글자로 인식하며 최소로 입력해야 하는 글자 수를 설정할 때 사용 ex) MIN_LEN:5 (최소 5글자를 입력하면 Vaildation 충족)\nMAX_LEN - 모든 문자 1글자로 인식하며 최대로 입력해야 하는 글자 수를 설정할 때 사용 ex) MAX_LEN:10 (최대 10글자 까지만 입력하면 Vaildation 충족)\nMIN_LEN_ASC - 한글은 2Byte 그외는 1Byte(ASCII)로 인식하며 최소로 입력해야 하는 byte수를 설정할 때 사용 ex) MIN_LEN_ASC:5 (최소 5byte 입력하면 Vaildation 충족)\nMAX_LEN_ASC - 한글은 2Byte 그외는 1Byte(ASCII)로 인식하며 최대로 입력해야 하는 byte수를 설정할 때 사용 ex) MAX_LEN_ASC:10 (최대 10byte 까지만 Vaildation 충족)\nMIN_LEN_UTF8 - 한글은 3Byte 그외는 1Byte(UTF-8)로 인식하며 최소로 입력해야 하는 byte수를 설정할 때 사용 ex) MIN_LEN_ASC:5 (최소 5byte 입력하면 Vaildation 충족)\nMAX_LEN_UTF8 - 한글은 3Byte 그외는 1Byte(UTF-8)로 인식하며 최대로 입력해야 하는 byte수를 설정할 때 사용 ex) MAX_LEN_ASC:10 (최대 10byte 까지만 Vaildation 충족)\nURL - 입력값이 URL 형식인지를 체크\nIPADDR - 입력값이 IP주소 형식인지를 체크\nPHONE - 입력값이 전화번호 형식인지를 체크\nMOBILE - 입력값이 핸드폰번호 형식인지를 체크\nEMAIL - 입력값이 E-MAIL 형식인지를 체크\nJUMINNO - 입력값이 주민등록번호 형식인지를 체크\nBIZNO - 입력값이 사업자번호 형식인지를 체크\nCORPNO - 입력값이 법인번호 형식인지를 체크\nDATETIME : 입력값이 일시/날짜/시간인 경우 유효성이 맞는지 체크\n종류 : YYYY/YYYYMM/YYYYMMDDHH/YYYYMMDDHHMI/YYYYMMDDHHMISS/HH/MI/SS/HHMI/HHMISS\nex) DATETIME:YYYY 입력값이 년도 형식인지 체크\nex) DATETIME:YYYYMM 입력값이 년월 형식인지 체크\nex) DATETIME:YYYYMMDD 입력값이 년월일 형식인지 체크\n\nvalidation 입력 방법 예시\n1. 최초 입력값은 메시지에 뿌려질 항목값(라벨)을 입력 후 항목 입력 마지막에 ;를 입력\n2. 이후 해당 입력 항목에 필요한 validation Check 속성값을 입력 (다중 사용 가능) \'|\' 문자를 붙여 추가 옵션을 사용한다.\n\nvalidation 신청사유;MIN_LEN_UTF8:100|MAX_LEN_UTF8:1000\n→ 신청사유 라는 입력 항목에 대한 최소 입력해야하는 100Byte, 최대입력 가능 Byte는 1000Byte)로 설정");
            obj.set_tooltiptext("※ 실제 적용된 자세한 내용은 ref14.xfdl 파일 내 script를 참조하세요.");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","63",null,"116","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"COL1\"/><Cell col=\"1\" text=\"COL2\"/><Cell col=\"2\" text=\"COL3\"/><Cell col=\"3\" text=\"COL4\"/><Cell col=\"4\" text=\"COL5\"/><Cell col=\"5\" text=\"COL6\"/><Cell col=\"6\" text=\"COL7\"/><Cell col=\"7\" text=\"COL8\"/><Cell col=\"8\" text=\"COL9\"/><Cell col=\"9\" text=\"COL10\"/></Band><Band id=\"body\"><Cell text=\"bind:COL1\" validationStatus=\"true\" edittype=\"text\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\"/><Cell col=\"1\" text=\"bind:COL2\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsCombo\" combocodecol=\"CODE\" combodatacol=\"DATA\" comboautoselect=\"true\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼2;NULL\" validationStatus=\"false\"/><Cell col=\"2\" text=\"bind:COL3\" validationStatus=\"false\" validation=\"컬럼3;NULL|NUMBER|MIN:3|MAX:5\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" edittype=\"normal\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"3\" text=\"bind:COL4\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼4;NULL|MIN_LEN:5|MAX_LEN:10\" validationStatus=\"false\"/><Cell col=\"4\" text=\"bind:COL5\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼5;NULL|MIN_LEN_ASC:5|MIN_LEN_ASC:10\"/><Cell col=\"5\" text=\"bind:COL6\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼6;NULL|MIN_LEN_UTF8:5|MAX_LEN_UTF8:10\"/><Cell col=\"6\" text=\"bind:COL7\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼7;URL\"/><Cell col=\"7\" text=\"bind:COL8\" edittype=\"mask\" maskeditformat=\"####-##-##\" displaytype=\"mask\" maskedittype=\"string\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼8;DATETIME:YYYYMMDD\"/><Cell col=\"8\" text=\"bind:COL9\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼9;EMAIL\"/><Cell col=\"9\" text=\"bind:COL10\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼10;PHONE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPropValidaion","680","27","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_inputmode("upper");
            obj.set_text("NULL");
            this.addChild(obj.name, obj);

            obj = new Button("btnValidationConf","983","27","46","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCol","12","27","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCol");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("COL1");
            obj.set_index("0");
            obj.set_text("COL1");
            this.addChild(obj.name, obj);

            obj = new Button("btnValidationStatus","390","27","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("validationStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","592","27","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("validation");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboEdittype","192","27","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsEdittype");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnEdittypeConf","341","27","46","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("적용");
            obj.set_tooltiptext("Enable 변경");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","117","27","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("edittype");
            obj.set_cssclass("sta_WF_schTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","173",null,"128","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","5",null,null,"0","5",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"COL1\"/><Cell col=\"1\" text=\"COL2\"/><Cell col=\"2\" text=\"COL3\"/><Cell col=\"3\" text=\"COL4\"/><Cell col=\"4\" text=\"COL5\"/><Cell col=\"5\" text=\"COL6\"/><Cell col=\"6\" text=\"COL7\"/><Cell col=\"7\" text=\"COL8\"/><Cell col=\"8\" text=\"COL9\"/><Cell col=\"9\" text=\"COL10\"/></Band><Band id=\"body\"><Cell text=\"bind:COL1\" validationStatus=\"true\" edittype=\"text\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\"/><Cell col=\"1\" text=\"bind:COL2\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsCombo\" combocodecol=\"CODE\" combodatacol=\"DATA\" comboautoselect=\"true\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼2;NULL\"/><Cell col=\"2\" text=\"bind:COL3\" validationStatus=\"false\" validation=\"컬럼3;NULL|NUMBER|MIN:3|MAX:5\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:COL4\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼4;NULL|MIN_LEN:5|MAX_LEN:10\"/><Cell col=\"4\" text=\"bind:COL5\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼5;NULL|MIN_LEN_ASC:5|MIN_LEN_ASC:10\"/><Cell col=\"5\" text=\"bind:COL6\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼6;NULL|MIN_LEN_UTF8:5|MAX_LEN_UTF8:10\"/><Cell col=\"6\" text=\"bind:COL7\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼7;URL\"/><Cell col=\"7\" text=\"bind:COL8\" edittype=\"mask\" maskeditformat=\"####-##-##\" displaytype=\"mask\" maskedittype=\"string\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼8;DATETIME:YYYYMMDD\"/><Cell col=\"8\" text=\"bind:COL9\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼9;EMAIL\"/><Cell col=\"9\" text=\"bind:COL10\" tooltiptext=\"expr:&quot;[&quot; + (currow + 1) + &quot;행] validation:[&quot; + this.validation + &quot;]\\n&quot; + &quot;validationStatus:[&quot; + this.validationStatus + &quot;]&quot;\" validation=\"컬럼10;PHONE\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnValidationCheck00",null,"24","170","24","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div-checkValidation");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btnValidationCheck",null,"24","170","24","btnValidationCheck00:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("checkValidation");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1371","24",null,"23","btnValidationCheck:5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("팝업");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("ref16.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		: Grid Valdation
        * 메뉴(경로)	: 공통관리 > 플랫폼 > 공통
        * 화면 설명	: Grid Valdation Check
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
        	var validationStatus = this.Grid00.getCellProperty("Body", 0, "validationStatus");
        	var validationVal = this.Grid00.getCellProperty("Body", 0, "validation") || "";
        	this.btnValidationStatus.set_text("validationStatus=[" + validationStatus + "]");
        	var edittype = this.Grid00.getCellProperty("Body", 0, "edittype");

        	trace("edittype : " + edittype);
        	this.cboEdittype.set_value(edittype);

        	trace("validationVal : " + validationVal);

        	if(validationStatus) this.btnValidationStatus.set_border("1px solid red");
        	else this.btnValidationStatus.set_border("");

        	var validation = validationVal.split(";");

        	trace("validation : " + validation);

        	if(validation.length > 1)
        	{
        		this.edtPropValidaion.set_value(validation[1]);
        	}

        	this.dsData.set_updatecontrol(false);
        	for(var i=0; i<this.dsData.rowcount ; i++)
        	{
        		this.dsData.setRowType(i, Dataset.ROWTYPE_UPDATE);
        	}
        	this.dsData.set_updatecontrol(true);

        	for(var i=0; i<this.Grid00.getCellCount("body"); i++)
        	{
        		var test = this.Grid00.getCellProperty("Body", i, "validationStatus")

        		if(test == true)
        		{
        			trace("if i=" + i + " val : " + test);
        		}
        		else if(test == false)
        		{
        			trace("else if i=" + i + " val : " + test);
        		}
        		else
        		{
        			trace("else i=" + i + " val : " + test);
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

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        //공통 버튼 이벤트
        this.fnButtonComOnclick = function(obj, e)
        {
            var sObjId = obj.name;
            switch(sObjId)
        	{
                case "btnValidationCheck" :
        			var rtn = this.Grid00.checkValidate(true);
        			trace("rtn Value : " + rtn);
                    break;

        		case "btnValidationCheck00" :
        			var rtn = this.Div00.form.Grid00.checkValidate();
        			trace("rtn Value : " + rtn);
                    break;

        		case "btnValidationStatus" :
        			var idx = nexacro.toNumber(nexacro.replaceAll(this.cboCol.value, "COL", "")) - 1;
        			this.Grid00.setCellProperty("Body", idx, "validationStatus", !this.Grid00.getCellProperty("Body", idx, "validationStatus"));
        			var validationStatus = this.Grid00.getCellProperty("Body", idx, "validationStatus");
        			this.btnValidationStatus.set_text("validationStatus=[" + validationStatus + "]");

        			if(validationStatus) this.btnValidationStatus.set_border("1px solid red");
        			else this.btnValidationStatus.set_border("");
        			break;

        		case "btnEdittypeConf" :
        			var idx = nexacro.toNumber(nexacro.replaceAll(this.cboCol.value, "COL", "")) - 1;
        			this.Grid00.setCellProperty("Body", idx, "edittype", this.cboEdittype.value);
        			break;

        		case "btnValidationConf" :
        			var idx = nexacro.toNumber(nexacro.replaceAll(this.cboCol.value, "COL", "")) - 1;
        			var validationStr = this.Grid00.getCellProperty("Body", idx, "validation") || "";
        			var validation = validationStr.split(";");
        			var validationAttr = validation[0];

        			if(validation.length > 1)
        			{
        				this.Grid00.setCellProperty("Body", idx, "validation", validationAttr + ";" + this.edtPropValidaion.value);
        			}
        			else
        			{
        				this.Grid00.setCellProperty("Body", idx, "validation", validationAttr + ";");
        			}
        			break;

            }
        }

        this.onItemChanged = function(obj,e)
        {
        	trace("e.postvalue : " + e.postvalue);
        	var idx = nexacro.toNumber(nexacro.replaceAll(e.postvalue, "COL", "")) - 1;
        	var validationStatus = this.Grid00.getCellProperty("Body", idx, "validationStatus");
        	var validationVal = this.Grid00.getCellProperty("Body", idx, "validation") || "";
        	var edittype = this.Grid00.getCellProperty("Body", idx, "edittype");
        	this.btnValidationStatus.set_text("validationStatus=[" + validationStatus + "]");

        	trace("idx : " + idx + " validationStatus : " + validationStatus + " validationVal : " + validationVal);

        	this.cboEdittype.set_value(edittype);
        	if(validationStatus) this.btnValidationStatus.set_border("1px solid red");
        	else this.btnValidationStatus.set_border("");

        	var validation = validationVal.split(";");

        	trace("validation : " + validation);

        	if(validation.length > 1)
        	{
        		this.edtPropValidaion.set_value(validation[1]);
        	}
        	else
        	{
        		this.edtPropValidaion.set_value("");
        	}
        };

        this.oncellClick = function(obj,e)
        {
        	obj.showEditor();
        	obj.dropdownCalendar();
        	obj.dropdownCombo();
        };

        this.Button00_onclick = function(obj,e)
        {
        	Ex.core.popup(
        		this,					// <--- 팝업 실행 스코프
        		"ref06_1",				// <--- 팝업창 아이디(반드시 영문으로 입력 처리)
        		"ref::ref06_1.xfdl",	// <--- 팝업창 오픈 Url
        		{
        			title : "모달창"
        		},						// <--- title및 파라미터(p1,p2는 화면에서 사용할 파라미터 등)
        		"width=1600,height=600"	// <--- width/height/modeless(프레임 처리 옵션)
        	);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.oncellClick,this);
            this.btnValidationConf.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.cboCol.addEventHandler("onitemchanged",this.onItemChanged,this);
            this.btnValidationStatus.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnEdittypeConf.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.oncellClick,this);
            this.btnValidationCheck00.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.btnValidationCheck.addEventHandler("onclick",this.fnButtonComOnclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("ref16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
