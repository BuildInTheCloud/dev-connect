const electron = require('electron')
const {Menu} = require('electron')
const {ipcMain} = require('electron')
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 900});
  mainWindow.maximize();
  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const template = [
  {
    label: 'Ionic',
    submenu: [
      { label: 'Cloud Dashboard', click (item, focusedWindow) { focusedWindow.send("menu", "ionic-dashboard") } }
    ]
  },
  {
    label: 'Google/Android',
    submenu: [
      { label: 'Developer Dashboard', click (item, focusedWindow) { focusedWindow.send("menu", "google-play-dashboard") } },
      { label: 'adMob', click (item, focusedWindow) { focusedWindow.send("menu", "admob") } }
    ]
  },
  {
    label: 'Windows',
    submenu: [
      { label: 'Store Dashboard', click (item, focusedWindow) { focusedWindow.send("menu", "windows-dashboard") } }
    ]
  },
  {
    label: 'iOS',
    submenu: [
      { label: 'Developer Portal', click (item, focusedWindow) { focusedWindow.send("menu", "apple-dashboard") } }
    ]
  },
  {
    label: 'Social Connections',
    submenu: [
      { label: 'LinkedIn', click (item, focusedWindow) { focusedWindow.send("menu", "linkedin") } }
    ]
  },
  {
    label: 'Tools',
    submenu: [
      { label: 'Learn More', click (item, focusedWindow) { focusedWindow.send("menu", "linkedin") } }
    ]
  },
  {
    role: 'help',
    submenu: [
      { label: 'Learn More', click (item, focusedWindow) { focusedWindow.send("menu", "linkedin") } }
    ]
  }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)



