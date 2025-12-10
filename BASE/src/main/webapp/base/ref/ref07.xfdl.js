(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ref07");
            this.set_titletext("엑셀 Export");
            this.getSetter("classname").set("ref07");
            if (Form == this.constructor)
            {
                this._setFormPosition(1840,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExport", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">m0</Col><Col id=\"MENU_NM\">BMS</Col><Col id=\"MENU_URL\">BMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m1</Col><Col id=\"MENU_NM\">폴더1</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m2</Col><Col id=\"MENU_NM\">메뉴1</Col><Col id=\"MENU_URL\">reference::ref01.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">m0</Col><Col id=\"MENU_NM\">BMS</Col><Col id=\"MENU_URL\">BMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m1</Col><Col id=\"MENU_NM\">폴더1</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m2</Col><Col id=\"MENU_NM\">메뉴1</Col><Col id=\"MENU_URL\">reference::ref01.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m33</Col><Col id=\"MENU_NM\">메뉴11</Col><Col id=\"MENU_URL\">sample::Member_Base_Info_scr.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m3</Col><Col id=\"MENU_NM\">CMS</Col><Col id=\"MENU_URL\">CMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m4</Col><Col id=\"MENU_NM\">폴더2</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m5</Col><Col id=\"MENU_NM\">메뉴2</Col><Col id=\"MENU_URL\">sample::Sample02.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m6</Col><Col id=\"MENU_NM\">FMSOMS</Col><Col id=\"MENU_URL\">FMSOMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m7</Col><Col id=\"MENU_NM\">폴더3</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m8</Col><Col id=\"MENU_NM\">메뉴3</Col><Col id=\"MENU_URL\">sample::Sample03.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m9</Col><Col id=\"MENU_NM\">FMSAIR</Col><Col id=\"MENU_URL\">FMSAIR::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m10</Col><Col id=\"MENU_NM\">폴더4</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m11</Col><Col id=\"MENU_NM\">메뉴4</Col><Col id=\"MENU_URL\">sample::Sample04.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m12</Col><Col id=\"MENU_NM\">FMSSEA</Col><Col id=\"MENU_URL\">FMSSEA::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m13</Col><Col id=\"MENU_NM\">폴더5</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m14</Col><Col id=\"MENU_NM\">메뉴6</Col><Col id=\"MENU_URL\">sample::Sample05.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m0</Col><Col id=\"MENU_NM\">BMS</Col><Col id=\"MENU_URL\">BMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m1</Col><Col id=\"MENU_NM\">폴더1</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m2</Col><Col id=\"MENU_NM\">메뉴1</Col><Col id=\"MENU_URL\">reference::ref01.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m33</Col><Col id=\"MENU_NM\">메뉴11</Col><Col id=\"MENU_URL\">sample::Member_Base_Info_scr.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m3</Col><Col id=\"MENU_NM\">CMS</Col><Col id=\"MENU_URL\">CMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m4</Col><Col id=\"MENU_NM\">폴더2</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m5</Col><Col id=\"MENU_NM\">메뉴2</Col><Col id=\"MENU_URL\">sample::Sample02.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m6</Col><Col id=\"MENU_NM\">FMSOMS</Col><Col id=\"MENU_URL\">FMSOMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m7</Col><Col id=\"MENU_NM\">폴더3</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m8</Col><Col id=\"MENU_NM\">메뉴3</Col><Col id=\"MENU_URL\">sample::Sample03.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m9</Col><Col id=\"MENU_NM\">FMSAIR</Col><Col id=\"MENU_URL\">FMSAIR::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m10</Col><Col id=\"MENU_NM\">폴더4</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m11</Col><Col id=\"MENU_NM\">메뉴4</Col><Col id=\"MENU_URL\">sample::Sample04.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m12</Col><Col id=\"MENU_NM\">FMSSEA</Col><Col id=\"MENU_URL\">FMSSEA::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m13</Col><Col id=\"MENU_NM\">폴더5</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m14</Col><Col id=\"MENU_NM\">메뉴6</Col><Col id=\"MENU_URL\">sample::Sample05.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m0</Col><Col id=\"MENU_NM\">BMS</Col><Col id=\"MENU_URL\">BMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m1</Col><Col id=\"MENU_NM\">폴더1</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m2</Col><Col id=\"MENU_NM\">메뉴1</Col><Col id=\"MENU_URL\">reference::ref01.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m33</Col><Col id=\"MENU_NM\">메뉴11</Col><Col id=\"MENU_URL\">sample::Member_Base_Info_scr.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m3</Col><Col id=\"MENU_NM\">CMS</Col><Col id=\"MENU_URL\">CMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m4</Col><Col id=\"MENU_NM\">폴더2</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m5</Col><Col id=\"MENU_NM\">메뉴2</Col><Col id=\"MENU_URL\">sample::Sample02.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m6</Col><Col id=\"MENU_NM\">FMSOMS</Col><Col id=\"MENU_URL\">FMSOMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m7</Col><Col id=\"MENU_NM\">폴더3</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m8</Col><Col id=\"MENU_NM\">메뉴3</Col><Col id=\"MENU_URL\">sample::Sample03.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSOMS</Col></Row><Row><Col id=\"MENU_ID\">m9</Col><Col id=\"MENU_NM\">FMSAIR</Col><Col id=\"MENU_URL\">FMSAIR::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m10</Col><Col id=\"MENU_NM\">폴더4</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m11</Col><Col id=\"MENU_NM\">메뉴4</Col><Col id=\"MENU_URL\">sample::Sample04.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSAIR</Col></Row><Row><Col id=\"MENU_ID\">m12</Col><Col id=\"MENU_NM\">FMSSEA</Col><Col id=\"MENU_URL\">FMSSEA::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m13</Col><Col id=\"MENU_NM\">폴더5</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m14</Col><Col id=\"MENU_NM\">메뉴6</Col><Col id=\"MENU_URL\">sample::Sample05.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">FMSSEA</Col></Row><Row><Col id=\"MENU_ID\">m0</Col><Col id=\"MENU_NM\">BMS</Col><Col id=\"MENU_URL\">BMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m1</Col><Col id=\"MENU_NM\">폴더1</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m2</Col><Col id=\"MENU_NM\">메뉴1</Col><Col id=\"MENU_URL\">reference::ref01.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m33</Col><Col id=\"MENU_NM\">메뉴11</Col><Col id=\"MENU_URL\">sample::Member_Base_Info_scr.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">BMS</Col></Row><Row><Col id=\"MENU_ID\">m3</Col><Col id=\"MENU_NM\">CMS</Col><Col id=\"MENU_URL\">CMS::home.xfdl</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m4</Col><Col id=\"MENU_NM\">폴더2</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row><Row><Col id=\"MENU_ID\">m5</Col><Col id=\"MENU_NM\">메뉴2</Col><Col id=\"MENU_URL\">sample::Sample02.xfdl</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_AUTH\">1111111111</Col><Col id=\"MENU_GRP\">CMS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExportTypes", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">XLSX</Col></Row><Row><Col id=\"cd\">XLS</Col></Row><Row><Col id=\"cd\">CSV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEL_MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEL_MENU_ID\">740</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond2", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LVL\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnExport","10","58","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("단순 export\r\n대상 그리드와 영문파일");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExport","10","98",null,"222","1218",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsExport");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_NM\"/><Cell col=\"1\" text=\"MENU_ID\"/><Cell col=\"2\" text=\"MENU_AUTH\"/><Cell col=\"3\" text=\"MENU_GRP\"/><Cell col=\"4\" text=\"MENU_LVL\"/><Cell col=\"5\" text=\"MENU_URL\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\"/><Cell col=\"1\" text=\"bind:MENU_ID\"/><Cell col=\"2\" text=\"bind:MENU_AUTH\"/><Cell col=\"3\" text=\"bind:MENU_GRP\"/><Cell col=\"4\" text=\"bind:MENU_LVL\"/><Cell col=\"5\" text=\"bind:MENU_URL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExportKor","162","58","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("단순 export\r\n대상 그리드와 한글파일명");
            this.addChild(obj.name, obj);

            obj = new Button("btnExportKor00","314","58","198","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("단순 export\r\n대상 그리드와 파일명,시트명");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01",null,"20","479",null,"0","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("- ref::ref07.xfdl \r\n\r\n\tGrid를 Excel로 Export하는 API : this.exportExcel\r\n\t\r\n\tthis.exportExcel 사용 option\r\n\tthis.exportExcel(scope , oInfo)\r\n\t\r\n\tscope : 실행 위치, this\r\n\t--- oInfo 구성정보 ---\r\n\toInfo.Grid : 대상그리드 객체\r\n\toInfo.FileNm : 출력파일명\r\n\toInfo.Sheet : 출력 시트명\r\n\toInfo.ExportType : XLS/XLSX/CSV 중 택일 미지정시 default:XLS\r\n\toInfo.ExportId : fnExportExcelCallback 에서 반환받을 ExportId값\r\n\t\r\n\tExport후 후처리를 위한 콜백함수( 필요시 기술 )\r\n\tthis.fnExportExcelCallback 약속된 함수를 공통에서 콜한다.\r\n\t콜백함수 인자값으로 성공/실패여부를 boolean값으로 반환한다.\r\n\t엑셀 출력성공을 위해서는 팝업차단이 해제되어 있어야 하며,\r\n\t\t엑셀이 출력되지 않을때 해당 브라우져에 팝업차단여부를 확인한다.\r\n\t\t\r\n\t*자세한 처리는 스크립트를 참조");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExport00","10","370",null,"222","507",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsExport00");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_ID\"/><Cell col=\"1\" text=\"MENU_NM\"/><Cell col=\"2\" text=\"MENU_URL\"/><Cell col=\"3\" text=\"MENU_LVL\"/><Cell col=\"4\" text=\"MENU_AUTH\"/><Cell col=\"5\" text=\"MENU_GRP\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_NM\"/><Cell col=\"2\" text=\"bind:MENU_URL\"/><Cell col=\"3\" text=\"bind:MENU_LVL\"/><Cell col=\"4\" text=\"bind:MENU_AUTH\"/><Cell col=\"5\" text=\"bind:MENU_GRP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiSheetExport","10","330","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("다중 시트 export");
            this.addChild(obj.name, obj);

            obj = new Combo("cboExportType","173","16","147","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsExportTypes");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("cd");
            obj.set_value("XLS");
            obj.set_index("0");
            obj.set_text("XLS");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","9","14","147","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("ExportTypes");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","331","15","979","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("DRM(문서보안)이 걸린 엑셀문서는 Export 받지 못함");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExport01","630","99",null,"222","507",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsExport");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_ID\"/><Cell col=\"1\" text=\"MENU_NM\"/><Cell col=\"2\" text=\"MENU_URL\"/><Cell col=\"3\" text=\"MENU_LVL\"/><Cell col=\"4\" text=\"MENU_AUTH\"/><Cell col=\"5\" text=\"MENU_GRP\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_NM\"/><Cell col=\"2\" text=\"bind:MENU_URL\"/><Cell col=\"3\" text=\"bind:MENU_LVL\"/><Cell col=\"4\" text=\"bind:MENU_AUTH\"/><Cell col=\"5\" text=\"bind:MENU_GRP\"/></Band></Format><Format id=\"default_excel\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_ID\"/><Cell col=\"1\" text=\"MENU_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel","630","58","198","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀 전용 포맷 _excel 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel00","832","58","218","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Query를 통한 _excel 포맷 다운로드");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("ref07.xfdl", function() {
        /***********************************************************************************
        * 화면(명)		︰ 엑셀 Export
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
        	trace("workArea form init call");
        }

        // 필요시 폼관련 이벤트는 여기 추가
        /***********************************************************************************
         * Common Function
         ***********************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	this.dsExport.copyData(this.dsExport00);
        }

        // 저장
        this.fnSave = function()
        {
        	trace("fnSave call");
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
        this.fnMsgAfter = function(mID,varValue)
        {
        	// TO DO
        	// 개발자가 지정한 mID(메시지창ID) , varValue(메시지창 반환값)
        	// alert/error : 무조건 true 반환
        	// confirm     : true/false 선택적 반환
        }

        //-----엑셀 Import 콜백---
        this.fnExportExcelCallback = function (bSuccess,sExportId,sFileNm)
        {
        	// bSuccess 성공/실패를 boolean값으로 리턴한다
        	// sExportId는 지정한 경우만 반환한다.
        	// sFileNm은 성공일경우만 반환한다.
        	trace("fnExportExcelCallback EXPORTID/EXPORTFILENM sExportId="+sExportId,"sFileNm="+sFileNm);
        	if (bSuccess)
        	{
        		trace("성공");
        	}
        	else
        	{
        		trace("실패");
        	}
        }

        /***********************************************************************************
         * User Function
         ***********************************************************************************/

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        /*
        	Grid를 Excel로 Export하는 API : this.exportExcel

        	this.exportExcel 사용 option
        	this.exportExcel(scope , oInfo)

        	scope : 실행 위치, this
        	--- oInfo 구성정보 ---
        	oInfo.Grid : 대상그리드 객체
        	oInfo.FileNm : 출력파일명
        	oInfo.Sheet : 출력 시트명
        	oInfo.ExportType : XLS/XLSX/CSV 중 택일 미지정시 default:XLS
        	oInfo.ExportId : fnExportExcelCallback 에서 반환받을 ExportId값

        	Export후 후처리를 위한 콜백함수( 필요시 기술 )
        	this.fnExportExcelCallback 약속된 함수를 공통에서 콜한다.
        	콜백함수 인자값으로 성공/실패여부를 boolean값으로 반환한다.
        	엑셀 출력성공을 위해서는 팝업차단이 해제되어 있어야 하며,
        		엑셀이 출력되지 않을때 해당 브라우져에 팝업차단여부를 확인한다.

        	*자세한 처리는 스크립트를 참조
        */
        // 단순 엑셀 Excel Export
        this.btnExport_onclick = function(obj,  e)
        {
        	var oInfo = {
        					Grid	: this.grdExport ,
        					Sheet	: "",
        					FileNm	: "ref07",
        					ExportType : this.cboExportType.value,
        					ExportId : "btnExport_onclick"
        				};
        	// 대상 그리드와 영문파일명만 지정한경우
        	this.gfnExportExcel(this, oInfo);
        }

        this.btnExportKor_onclick = function(obj,  e)
        {
        	var oInfo = {
        					Grid	: this.grdExport ,
        					Sheet	: "",
        					FileNm	: "메뉴리스트",
        					ExportType : this.cboExportType.value,
        					ExportId : ""
        				};
        	// 대상 그리드와 한글파일명만 지정한경우
        	this.gfnExportExcel(this, oInfo);
        }

        this.btnExportSheet_onclick = function(obj,  e)
        {
        	var oInfo = {
        		Grid	: this.grdExport ,
        		Sheet	: "첫번째그리드",
        		FileNm	: "메뉴리스트",
        		ExportType : this.cboExportType.value,
        		ExportId : "btnExportSheet_onclick"
        	};
        	// 대상 그리드와 한글파일명,시트명을 지정한경우
        	this.gfnExportExcel(this, oInfo);
        }

        this.btnMultiSheetExport_onclick = function(obj,  e)
        {
        	var oInfo = {
        					Grid	: [this.grdExport , this.grdExport01, this.grdExport00] ,
        					Sheet	: ["첫번째그리드" , "두번째그리드", "세번째그리드"],
        					FileNm	: "메뉴리스트",
        					ExportType : this.cboExportType.value,
        					ExportId : ""
        				};
        	// 2개 이상의 그리드를 export할경우 그리드/sheet명을 array로 지정한다.
        	// 반드시 그리드및 sheet명을 1:1로 매핑할수 있도록 지정한다.
        	this.gfnExportExcel(this, oInfo);
        }

        this.btn_Excel_onclick = function(obj,e)
        {
        	var oInfo = {
        					Grid	: [this.grdExport, this.grdExport01],
        					Sheet	: "테스트시트명",
        					FileNm	: "Grid_default_excel FormatId_download",
        					ExportType : this.cboExportType.value,
        					ExportId : "btn_Excel_onclick"
        				};
        	// 대상 그리드와 한글파일명,시트명을 지정한경우
        	this.gfnExportExcel(this, oInfo);
        };

        this.btn_Excel_onclickQuery = function(obj,e)
        {
        	var oInfo = {
        		Grid		: [this.grdExport, this.grdExport01],
        		Sheet		: ["테스트시트명1", "테스트시트명2"],
        		FileNm		: "Grid_default_excel FormatId_download",
        		ExportType	: this.cboExportType.value,
        		ExportId	: "btn_Excel_onclick",
        		Controller	: ["fomm/FOMM0140W/select02", "fomm/FOMM0140W/select02"],	//Controller
        		Where		: [this.dsCond, this.dsCond2],
        		formatId	: ["default_excel", "default"]
        	};
        	// 대상 그리드와 한글파일명,시트명을 지정한경우
        	this.gfnExportExcel(this, oInfo);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnExportKor.addEventHandler("onclick",this.btnExportKor_onclick,this);
            this.btnExportKor00.addEventHandler("onclick",this.btnExportSheet_onclick,this);
            this.btnMultiSheetExport.addEventHandler("onclick",this.btnMultiSheetExport_onclick,this);
            this.btn_Excel.addEventHandler("onclick",this.btn_Excel_onclick,this);
            this.btn_Excel00.addEventHandler("onclick",this.btn_Excel_onclickQuery,this);
        };
        this.loadIncludeScript("ref07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
