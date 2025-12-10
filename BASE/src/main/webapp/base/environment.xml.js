if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::base");
        this.set_filesecurelevel("all");
        this.set_networksecurelevel("all");
        this.set_checkversion("false");
        this.set_tracemode("append");
        this.set_userfontid("font::KoPub.xfont");
    };
    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "0");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("nexacrolib", "file", "./nexacrolib/", "session", null, "", "0", "0");
        nexacro._addService("svc_url", "JSP", "http://localhost:8080/", "none", null, "", "0", "0");
        nexacro._addService("lib", "js", "./lib/", "session", null, "", "0", "0");
        nexacro._addService("Frame", "form", "./Frame/", "session", null, "", "0", "0");
        nexacro._addService("mainWidget", "form", "./mainWidget/", "session", null, "", "0", "0");
        nexacro._addService("comm", "form", "./comm/", "session", null, "", "0", "0");
        nexacro._addService("ckeditor", "file", "./ckeditor/", "session", null, "", "0", "0");
        nexacro._addService("topology", "file", "./topology/", "session", null, "", "0", "0");
        nexacro._addService("html", "file", "./html/", "session", null, "", "0", "0");
        nexacro._addService("ref", "form", "./ref/", "session", null, "", "0", "0");
        nexacro._addService("template", "form", "./template/", "session", null, "", "0", "0");
        nexacro._addService("guide", "form", "./guide/", "session", null, "", "0", "0");
        nexacro._addService("test", "form", "./test/", "session", null, "", "0", "0");
        nexacro._addService("fomm", "form", "./fomm/", "session", null, "", "0", "0");
        nexacro._addService("wf", "form", "./wf/", "session", null, "", "0", "0");
        nexacro._addService("sr", "form", "./sr/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"View", "classname":"nexacro.View", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"WebView", "classname":"nexacro.WebView", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"GoogleMap", "classname":"nexacro.GoogleMap", "type":"JavaScript"},
        		{"id":"Graphics", "classname":"nexacro.Graphics", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header
        nexacro.setHTTPHeaderVariable("fommScreenId");
        nexacro.setHTTPHeaderVariable("fommMenuId");
    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
	
    // StringResource Information

	
    // User Script
    env.registerScript("environment.xml", function() {
    this.Environment_onerror = function(obj,e)
    {
    	if(e.statuscode == 10401) return true;
    };
    });
					
    env = null;
    nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType;
}
