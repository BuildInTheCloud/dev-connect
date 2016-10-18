const {ipcRenderer} = require('electron')
var $chromeTabsShell;
var winHeight = 900;
var sites = {
    "ionic-dashboard": { title: "Ionic Dashboard", url: "https://apps.ionic.io/apps", favicon: "" },
    "google-play-dashboard": { title: "Google Dev Dashboard", url: "https://play.google.com/apps/publish/", favicon: "" },
    "admob": { title: "adMob", url: "https://apps.admob.com/#home", favicon: "" },
    "windows-dashboard": { title: "Win Dev Dashboard", url: "https://developer.microsoft.com/en-us/dashboard/apps/overview", favicon: "" },
    "apple-dashboard": { title: "Apple Dev Dashboard", url: "https://developer.apple.com/account/#/overview/", favicon: "" },
    "linkedin": { title: "LinkedIn", url: "https://www.linkedin.com/developer/apps", favicon: "" },
    "xx": { title: "", url: "", favicon: "" }
};
onresize = function() {
    winHeight = window.innerHeight-50;
}
onload = function() {
    $chromeTabsShell = $('.chrome-tabs-shell')
    chromeTabs.init({$shell: $chromeTabsShell,minWidth: 45,maxWidth: 242.5});
    $chromeTabsShell.bind('chromeTabRender', function() {
        $("#webPages webview").css("height","0px");
        var $currentTab = $chromeTabsShell.find('.chrome-tab-current');
        if ($currentTab.length) {
            $.each(sites, function(index, element) {
                if (this.title == $currentTab.text().trim()) {
                    $("#webPages webview#"+index).css("height",winHeight+"px");
                }
            });
            //console.log('Current tab index', $currentTab.index(), 'title', $.trim($currentTab.text()), 'data', $currentTab.data('tabData').data);

        }
    });
}

ipcRenderer.on('menu', function (event, arg) {
    $("#webPages webview").css("height","0px");
    var isLoaded = $("div.chrome-tab-title:contains('"+sites[arg].title+"')").length == 0 ? false : true;
    if (!isLoaded) {
        //-- add new tab
        chromeTabs.addNewTab($chromeTabsShell, { favicon: sites[arg].favicon, title: sites[arg].title, data: { timeAdded: +new Date() } });
        $("#webPages").append("<webview id=\""+arg+"\" src=\""+sites[arg].url+"\" style=\"height:"+winHeight+"px\"></webview>");
    } else {
        //-- switch to tab
        $("#webPages webview#"+arg).css("height",winHeight+"px");
        chromeTabs.setCurrentTab($chromeTabsShell, $("div.chrome-tab-title:contains('"+sites[arg].title+"')").parent());
    }
})