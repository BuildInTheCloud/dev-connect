const {ipcRenderer} = require('electron')
const template = require('./settings.js').config;
var $chromeTabsShell;
var winHeight = 900;
onresize = function() { winHeight = window.innerHeight - 50; }

onload = function() {
    $chromeTabsShell = $('.chrome-tabs-shell')
    chromeTabs.init({$shell: $chromeTabsShell,minWidth: 45,maxWidth: 242.5});
    $chromeTabsShell.bind('chromeTabRender', function(x) {
        $("#webPages webview").css("height","0px");
        var $currentTab = $chromeTabsShell.find('.chrome-tab-current');
        if ($currentTab.length) {
            $.each(template, function(index, element) {
                $.each(this.submenu, function(index, element) {
                    if (this.title == $currentTab.text().trim()) {
                        $("#webPages webview#"+this.key).css("height",winHeight+"px");
                    }
                });
            });
        }
    });
}

ipcRenderer.on('menu', function (event, arg) {
    $("#webPages webview").css("height","0px");
    var isLoaded = false;
    $.each(template, function(index, element) {
        $.each(this.submenu, function(index, element) {
            if (this.key == arg) {
                if ($("div.chrome-tab-title:contains('"+this.title+"')").length > 0) { isLoaded = true; }
            }
        });
    });
    console.log(isLoaded);
    if (!isLoaded) {
        //-- add new tab
        $.each(template, function(index, element) {
            $.each(this.submenu, function(index, element) {
                if (this.key == arg) {
                    chromeTabs.addNewTab($chromeTabsShell, { favicon: this.favicon, title: this.title, data: { timeAdded: +new Date() } });
                    $("#webPages").append("<webview id=\""+this.key+"\" src=\""+this.url+"\" style=\"height:"+winHeight+"px\"></webview>");
                }
            });
        });
    } else {
        //-- switch to tab
        $("#webPages webview#"+arg).css("height",winHeight+"px");
        $.each(template, function(index, element) {
            $.each(this.submenu, function(index, element) {
                if (this.key == arg) {
                    chromeTabs.setCurrentTab($chromeTabsShell, $("div.chrome-tab-title:contains('"+this.title+"')").parent());
                }
            });
        });
    }
})