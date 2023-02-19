const { BrowserWindow, app } = require('electron');

function createWindow() {
    app.setName("QuicklyNote")

    if (process.platform === 'win32')
    {
        app.setAppUserModelId(app.name);
    }

    const win = new BrowserWindow({
        width: 1200,
        height: 800,
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
