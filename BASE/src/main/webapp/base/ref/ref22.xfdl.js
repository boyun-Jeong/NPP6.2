(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref22");
            this.set_titletext("웹에디터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column3\">321458</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">321458</Col><Col id=\"Column0\">강감찬</Col><Col id=\"Column2\">서울특별시 중구 세종대로 40</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">고려시대 명장. 본관은 금주, 초명은 은천. 귀주대첩 승리</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">425862</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">425862</Col><Col id=\"Column0\">김부식</Col><Col id=\"Column2\">경상북도 경주시 불국로 873-243</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">고려시대 문신. 본관은 경주, 자는 입지, 시호는 문열</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">57786</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">57786</Col><Col id=\"Column0\">정몽주</Col><Col id=\"Column2\">경기도 수원시 장안구 연무동 190</Col><Col id=\"Column1\">수정</Col><Col id=\"Column6\">고려 말 문신. 본관은 연일, 자는 달가. 시조 단심가를 지음</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">51651</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">51651</Col><Col id=\"Column0\">김유신</Col><Col id=\"Column2\">경상북도 영주시 부석사로 345</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column6\">삼국통일을 이룩한 신라 장군. 본관은 김해. 가야국의 시조 김수로왕(金首露王)의 12대손. 흥무대왕으로 추존</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">216548</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">216548</Col><Col id=\"Column0\">최무선</Col><Col id=\"Column2\">충청남도 부여군 정림로 83</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">고려 말, 조선 초 발명가. 본관은 영주. 원나라에서 화포제작법을 배워 우리나라에서도 제작함</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">216218</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">216218</Col><Col id=\"Column0\">정중부</Col><Col id=\"Column2\">경기도 여주시 북내면 상교리 411-1</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">고려시대 무신. 본관은 해주. 무신의 난으로 정권을 잡음</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">954561</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">954561</Col><Col id=\"Column0\">김부식</Col><Col id=\"Column2\">서울특별시 종로구 종로 99</Col><Col id=\"Column1\">수정</Col><Col id=\"Column6\">고려시대 문신. 본관은 경주, 자는 입지, 시호는 문열</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">2121684</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">2121684</Col><Col id=\"Column0\">안중근</Col><Col id=\"Column2\">경상북도 경주시 대경로 4859</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column6\">한말의 독립운동가. 본관은 순흥. 1909년(융희 2년)에 만주 하얼빈에서 이토 히로부미를 죽임. 건국훈장 대한민국장을 수상</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">6549845</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">6549845</Col><Col id=\"Column0\">안창호</Col><Col id=\"Column2\">경기도 이천시 관고동 501-7</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">한말의 독립운동가·사상가. 호는 도산. 신민회를 조직. 《신한민보(新韓民報)》를 창간. 건국훈장 대한민국장을 수상함</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column3\">65150</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">65150</Col><Col id=\"Column0\">유관순</Col><Col id=\"Column2\">충청남도 부여군 부여읍 동남리 산16-9</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">한말의 독립운동가. 충남 천안 출생. 1919년 아우내 장터에서 3000여 군중에게 태극기를 나눠 주며 시위를 지휘하다가 일본 헌병대에 체포. 1920년 옥사함. 건국훈장 독립장을 수상</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">이종무</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">전라북도 익산시 금마면 동고도리 1086</Col><Col id=\"Column3\">158886</Col><Col id=\"Column4\">20170429</Col><Col id=\"Column5\">158886</Col><Col id=\"Column6\">고려 말, 조선 초 무신. 본관은 장수. 일본 대마도를 정벌</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">한명회</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">부산광역시 연제구 경기장로 28</Col><Col id=\"Column3\">258624</Col><Col id=\"Column4\">20170111</Col><Col id=\"Column5\">258624</Col><Col id=\"Column6\">조선 전기의 문신. 본관은 청주, 자는 자준. 예종비 장순왕후와 성종비 공혜왕후의 부. 계유정난으로 정권을 받음. 세조 묘정에 배향</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">정몽주</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">제주특별자치도 제주시 일주동로 17</Col><Col id=\"Column3\">4569985</Col><Col id=\"Column4\">20170829</Col><Col id=\"Column5\">4569985</Col><Col id=\"Column6\">고려 말 문신. 본관은 연일, 자는 달가. 시조 단심가를 지음</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">문익점</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">경상남도 합천군 가야면 해인사길 122</Col><Col id=\"Column3\">1245568</Col><Col id=\"Column4\">20170605</Col><Col id=\"Column5\">1245568</Col><Col id=\"Column6\">고려시대 학자. 본관은 남평, 자는 일신, 시호는 충선. 원에서 목화씨를 가져와 재배함</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">최영</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">서울특별시 종로구 훈정동 1</Col><Col id=\"Column3\">336985</Col><Col id=\"Column4\">20170614</Col><Col id=\"Column5\">336985</Col><Col id=\"Column6\">고려 말 무신. 시호는 무민. 본관은 동주. 위화도회군으로 정권을 잃음</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">장영실</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">전라북도 남원시 산내면 대정리 975</Col><Col id=\"Column3\">578962</Col><Col id=\"Column4\">20170231</Col><Col id=\"Column5\">578962</Col><Col id=\"Column6\">조선 시대의 과학자. 본관은 아산. 기생의 아들. 해시계, 문시계, 측우기를 발명</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">곽재우</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">전라남도 구례군 마산면 화엄사로 539</Col><Col id=\"Column3\">11235</Col><Col id=\"Column4\">20170723</Col><Col id=\"Column5\">11235</Col><Col id=\"Column6\">조선 중기의 의병장. 본관은 현풍, 자는 계수. 임진왜란때 의병을 일으켜 왜군들을 무찌름. &apos;망우집&apos;을 지음</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">김시민</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">경상북도 안동시 서후면 봉정사길 222</Col><Col id=\"Column3\">569875</Col><Col id=\"Column4\">20170406</Col><Col id=\"Column5\">569875</Col><Col id=\"Column6\">조선 중기의 무신. 본관은 안동, 자는 면오. 임진왜란때 왜군들과 싸워 전사함. 선무공신 2등에 추록. 상락부원군에 추증</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">정양용</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">경상북도 영천시 청통면 거조길 400-67</Col><Col id=\"Column3\">5588966</Col><Col id=\"Column4\">20170308</Col><Col id=\"Column5\">5588966</Col><Col id=\"Column6\">조선 후기의 학자.문신, 본관은 나주, 호는 다산, 여유당. 수원 화성을 계획함. 《정다산전서(丁茶山全書)》을 저술(목민심서 등)</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">윤동주</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">전라북도 익산시 금마면 기양리 97번지</Col><Col id=\"Column3\">639996</Col><Col id=\"Column4\">20171205</Col><Col id=\"Column5\">639996</Col><Col id=\"Column6\">시인. 북간도에서 충생. 《서시(序詩)》,《또 다른 고향》,《별 헤는 밤》을 지음</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">이중섭</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">충청남도 보령시 성주면 성주리 80-4</Col><Col id=\"Column3\">859648</Col><Col id=\"Column4\">20170925</Col><Col id=\"Column5\">859648</Col><Col id=\"Column6\">한국의 서양화과. 호는 대향. 평양 출생. 작품으로 《소》《흰 소》등이 있음</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">박문수</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">충청남도 천안시 서북구 성환읍 대홍리 319-8</Col><Col id=\"Column3\">15698</Col><Col id=\"Column4\">20170722</Col><Col id=\"Column5\">15698</Col><Col id=\"Column6\">조선 후기의 문신. 본관은 고령, 자는 성보. 영조때 정미환국으로 영남 엄행어사로 나가 부정관리들을 적발함</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">황진이</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">서울특별시 종로구 율곡로 99</Col><Col id=\"Column3\">75489</Col><Col id=\"Column4\">20170614</Col><Col id=\"Column5\">75489</Col><Col id=\"Column6\">조선시대 시인, 명기(기생). 기생명은 명월.  《만월대 회고시》《박연폭포시》《봉별소양곡시》를 지음</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">김정호</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">충청북도 충주시 중앙탑면 탑평리 11</Col><Col id=\"Column3\">63963</Col><Col id=\"Column4\">20170416</Col><Col id=\"Column5\">63963</Col><Col id=\"Column6\">조선 후기 지리학자. 본관은 청도, 자는 백원. 《대동여지도》를 만듬</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">홍길동</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">서울특별시 용산구 서빙고로 137</Col><Col id=\"Column3\">668955</Col><Col id=\"Column4\">20170814</Col><Col id=\"Column5\">668955</Col><Col id=\"Column6\">&apos;허균&apos;이 지은 &quot;홍길동전&quot;의 주인공. 실존인물</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">신숙주</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">인천광역시 강화군 길상면 전등사로 37-41</Col><Col id=\"Column3\">754896</Col><Col id=\"Column4\">20170517</Col><Col id=\"Column5\">754896</Col><Col id=\"Column6\">조선 초기의 문신. 본관은 고령, 자는 범옹. 세종의 총애를 가장 많이 받은 학자이자, 계유정난으로 정난공신에 등록됨. 성종 묘정에 배향</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">한석봉</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">경기도 안양시 만안구 예술공원로103번길 4</Col><Col id=\"Column3\">1258963</Col><Col id=\"Column4\">20170318</Col><Col id=\"Column5\">1258963</Col><Col id=\"Column6\">조선 중기의 서예가. 본관은 삼화, 호가 석봉이다. 왕희지, 안진경의 필법을 익혀 해.행.초 등 각 서체에 모두 뛰어남</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">전봉준</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">경상북도 봉화군 춘양면 서원촌길 8-14</Col><Col id=\"Column3\">458962</Col><Col id=\"Column4\">20170704</Col><Col id=\"Column5\">458962</Col><Col id=\"Column6\">조선 후기 동학농민운동의 지도자. 초명은 명숙, 별명이 녹두장군이다</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">김대건</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">경기도 여주시 북내면 상교리 419-3번지</Col><Col id=\"Column3\">15756</Col><Col id=\"Column4\">20170114</Col><Col id=\"Column5\">15756</Col><Col id=\"Column6\">조선 최초의 신부. 본관은 김해, 세례명은 안드레아. 조선 후기 박해사건으로 가족들을 모두 잃음. 후에 25세로 순교함</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column0\">방정환</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">대구광역시 수성구 청호로 321</Col><Col id=\"Column3\">25896</Col><Col id=\"Column4\">20170326</Col><Col id=\"Column5\">25896</Col><Col id=\"Column6\">아동문학의 보급과 아동보호운동의 선구자인 아동문학가. 호는 소파. 어린이날을 공포</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","20","55","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("normal");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Button00:5","55","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("readonly");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","660","20",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("- ref::ref22.xfdl\t\n\n* 웹에디터 사용 가이드\nCK에디터 사용을 위한 스크립트 가이드를 제공한다.\n\nscript 처리 (자세한 처리는 스크립트 참조)\n1) div배치 후 url setting\n- url속성에 \'comm::comWebEditor.xfdl\' 지정\n\n2) Web Editor 초기화\n- 웹에디터를 사용하기 위해서 반드시 초기화 해야 한다.\n- setContent(), getContent() 사용 전에 초기화 되어 있어야 한다.\n * 함수명\t: initCreate(bReadOnly);\n * 설명\t: 웹에디터를 사용할 수 있도록 초기화한다.\n * @param\n *\t- bReadonly : default false; 웹에디터를 readonly로 초기화할 지, edit 가능상태로 초기화할 지 지정한다.\n * @return\n *\t- null;\n * @Example\n *\t- this.divWebEditor.form.initCreate(bReadonly);\n\n3) Web Editor에 값 set\n * 함수명\t: setContent(contents);\n * 설명\t: 웹에디터에 값을 할당한다.\n * @param\n *\t- contents : html value\n * @return\n *\t- null;\n * @Example\n *\t- var webConts = \"<div style=\"text-align:center\"><strong><span style=\"font-size:22px\">test공지</span></strong></div>\";\n *\t- this.divWebEditor.form.setContent(webConts);\n\n4) Web Editor의 값 get\n * 함수명\t: getContent();\n * 설명\t: 웹에디터에 값을 할당한다.\n * @param\n *\t- null;\n * @return\n *\t- contents;\n * @Example\n *\t- var webConts = this.divWebEditor.form.getContent();\n ");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","20","91",null,"34","TextArea01:5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_inputBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","20","stcBg01:5",null,"500","TextArea01:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("comm::comWebEditor.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","20","205","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("웹에디터 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Button01:5","55","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("getContent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","Static00:5.00","20","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("값 얻기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","Static00_00:5","20","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("값 셋팅");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","Button02:5","55","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("setContent");
            this.addChild(obj.name, obj);

            obj = new Static("stcEmptyDisplayText","20","91","204","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("데이터 값이 없을 때 표시 메시지");
            obj.set_cssclass("sta_WF_inputTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmptyDisplayText","stcEmptyDisplayText:5","96",null,"24","TextArea01:10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_normal");
            obj.getSetter("readonlyComp").set("Y");
            obj.set_value("에디터 내용을 입력하세요.");
            obj.set_text("에디터 내용을 입력하세요.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWebEditor
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1840,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::comWebEditor.xfdl");
        };
        
        // User Script
        this.registerScript("ref22.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		: ref22
        * 메뉴(경로)	:
        * 화면 설명	: 웹에디터 사용 가이드
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

        }


        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/



        /***********************************************************************************
         * CallBack Event
         ***********************************************************************************/


        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.fnCommOnclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		/* 웹에디터 초기화
        		 * 함수명	: initCreate(bReadOnly);
        		 * 설명	: 웹에디터를 사용할 수 있도록 초기화한다.
        		 * @param
        		 *	- bReadonly : default false; 웹에디터를 readonly로 초기화할 지, edit 가능상태로 초기화할 지 지정한다.
        		 * @return
        		 *	- null;
        		 * @Example
        		 *	- this.divWebEditor.form.initCreate(bReadonly);
        		 */
        		case "Button00" :	this.divWebEditor.form.initCreate(false,	this.edtEmptyDisplayText.value);	break;		// readonly : false
        		case "Button01" :	this.divWebEditor.form.initCreate(true,		this.edtEmptyDisplayText.value);	break;		// readonly : true


        		/* 웹에디터 값 얻기
        		 * 함수명	: getContent();
        		 * 설명	: 웹에디터에 값을 할당한다.
        		 * @param
        		 *	- null;
        		 * @return
        		 *	- contents;
        		 * @Example
        		 *	- var webConts = this.divWebEditor.form.getContent();
        		 */
        		case "Button02" :	alert(this.divWebEditor.form.getContent());	break;


        		/* 값 set
        		 * 함수명	: setContent(contents);
        		 * 설명	: 웹에디터에 값을 할당한다.
        		 * @param
        		 *	- contents : html value
        		 * @return
        		 *	- null;
        		 * @Example
        		 *	- var webConts = "<div style="text-align:center"><strong><span style="font-size:22px">test공지</span></strong></div>";
        		 *	- this.divWebEditor.form.setContent(webConts);
        		 */
        		case "Button03" :
        			var webConts = '<div style="text-align:center"><strong><span style="font-size:22px">test공지</span></strong></div>';
        			this.divWebEditor.form.setContent(webConts);
        			break;

        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button01.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button02.addEventHandler("onclick",this.fnCommOnclick,this);
            this.Button03.addEventHandler("onclick",this.fnCommOnclick,this);
        };
        this.loadIncludeScript("ref22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
