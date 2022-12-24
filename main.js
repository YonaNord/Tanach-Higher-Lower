const { Menu } = require('electron')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
 
const path = require('path')
const url = require('url')
 
let win
 
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800, 
    height: 600,
    minWidth: 450,
    minHeight: 680,
    icon: path.join(__dirname, '/images/doron.png')
  })
 
  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    
  })); Menu.setApplicationMenu(null);
}
//remove menu from win
Menu.setApplicationMenu(null);
app.on('ready', createWindow);