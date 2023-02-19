const { BrowserWindow, app } = require('electron');

function createWindow() {
    app.setName("QuicklyNote")

    if (process.platform === 'win32')
    {
        app.setAppUserModelId(app.name);
    }

    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.removeMenu()
    win.webContents.openDevTools()
    win.loadFile('./src/views/index.html')
}

app.whenReady().then(createWindow);
