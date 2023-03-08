const { BrowserWindow, app } = require('electron');
const { ipcMain } = require('electron');
const { ipcRenderer } = require('electron');

function createWindow() {
    app.setName("QuicklyNote")

    if (process.platform === 'win32')
    {
        app.setAppUserModelId(app.name);
    }

    const win = new BrowserWindow({
        width: 1320,
        height: 780,
        minWidth: 1320,
        minHeight: 780,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.removeMenu()
    // win.webContents.openDevTools()
    win.loadFile('./src/views/index.html')
}

app.whenReady().then(createWindow);
