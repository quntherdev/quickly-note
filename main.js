const { BrowserWindow, app, ipcMain, globalShortcut, clipboard } = require('electron');
const Database = require("./src/db/Database");
const path = require("path");

const { Worker } = require('worker_threads');
const Note = require("./src/models/NotesComponents/Note");
const uiohookWorkerPath = path.join(__dirname, 'src/models/addNoteListener.js');
const uiohookWorker = new Worker(uiohookWorkerPath);

function createWindow() {

    Database.setupBase()

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
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false
        }
    })

    win.removeMenu()
    // win.webContents.openDevTools()
    win.loadFile('./src/views/index.html')

    // Enregistrez le raccourci clavier global
    const ret = globalShortcut.register('CommandOrControl+C+X', async () => {
        console.log('CommandOrControl+C+X is pressed');
        console.log('Clipboard content: '+clipboard.readText());

        const notes = ["1","2"]
        win.webContents.send('getAllNotesResult',notes)

        if(win.isMinimized()){
            win.restore()
        }
        win.focus()
    });

    if (!ret) {
        console.error('Failed to register global shortcut');
    }
}


app.whenReady().then(createWindow);

ipcMain.on('getAllNotes', (event, arg) => {
    const notes = Note.getAll()
    // const notes = ["a","b","c","d","e","f","g","i","j","a","b","c","d","e","f","g","i","j"]
    // Envoi le résultat à la fenêtre de rendu
    event.reply('getAllNotesResult', notes)
})