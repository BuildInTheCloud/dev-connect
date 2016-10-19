exports.config = [
  {
    label: 'Ionic',
    submenu: [
      { label: 'Cloud Dashboard',
        click (item, focusedWindow) { focusedWindow.send("menu", "ionic-dashboard") },
        key: "ionic-dashboard",
        title: "Ionic Dashboard",
        url: "https://apps.ionic.io/apps",
        favicon: ""
      }
    ]
  },
  {
    label: 'Google/Android',
    submenu: [
      { label: 'Developer Dashboard',
        click (item, focusedWindow) { focusedWindow.send("menu", "google-play-dashboard") },
        key: "google-play-dashboard",
        title: "Google Dev Dashboard",
        url: "https://play.google.com/apps/publish/",
        favicon: ""
      },
      { label: 'adMob',
        click (item, focusedWindow) { focusedWindow.send("menu", "admob") },
        key: "admob",
        title: "adMob",
        url: "https://apps.admob.com/#home",
        favicon: ""
      }
    ]
  },
  {
    label: 'Windows',
    submenu: [
      { label: 'Store Dashboard',
        click (item, focusedWindow) { focusedWindow.send("menu", "windows-dashboard") },
        key: "windows-dashboard",
        title: "Win Dev Dashboard",
        url: "https://developer.microsoft.com/en-us/dashboard/apps/overview",
        favicon: ""
      }
    ]
  },
  {
    label: 'iOS',
    submenu: [
      { label: 'Developer Portal',
        click (item, focusedWindow) { focusedWindow.send("menu", "apple-dashboard") },
        key: "apple-dashboard",
        title: "Apple Dev Dashboard",
        url: "https://developer.apple.com/account/#/overview/",
        favicon: ""
      }
    ]
  },
  {
    label: 'Social Connections',
    submenu: [
      { label: 'LinkedIn',
        click (item, focusedWindow) { focusedWindow.send("menu", "linkedin") },
        key: "linkedin",
        title: "LinkedIn",
        url: "https://www.linkedin.com/developer/apps",
        favicon: ""
      }
    ]
  },
  {
    label: 'Tools/Reference',
    submenu: [
      { label: 'md Cheatsheet',
        click (item, focusedWindow) { focusedWindow.send("menu", "md-cheatsheet") },
        key: "md-cheatsheet",
        title: "md Cheatsheet",
        url: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
        favicon: ""
      },
      { label: 'Translate User Agent',
        click (item, focusedWindow) { focusedWindow.send("menu", "translate-user-agent") },
        key: "translate-user-agent",
        title: "Translate User Agent",
        url: "http://www.useragentstring.com/",
        favicon: ""
      },
      { label: 'Lets Encrypt',
        click (item, focusedWindow) { focusedWindow.send("menu", "lets-encrypt") },
        key: "lets-encrypt",
        title: "Lets Encrypt",
        url: "https://letsencrypt.org/",
        favicon: ""
      },
      { label: 'Awesome',
        click (item, focusedWindow) { focusedWindow.send("menu", "awesome") },
        key: "awesome",
        title: "awesome",
        url: "https://github.com/sindresorhus/awesome",
        favicon: ""
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      { label: 'F12', click (item, mainWindow) { mainWindow.webContents.openDevTools() } }
    ]
  }
]
