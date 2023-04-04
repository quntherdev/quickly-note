const { BrowserWindow, app, ipcMain, globalShortcut, clipboard } = require('electron');
const Database = require("./src/db/Database");
const path = require("path");

const { Worker } = require('worker_threads');
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
    win.webContents.openDevTools()
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
    // const notes = Note.getAll()
    const notes = ["a","b"]
    // Envoi le résultat à la fenêtre de rendu
    event.reply('getAllNotesResult', notes)
})



async function instanciateDatabase(){
    const db = Database.getInstance();

    db.then(async (connection) => {
        console.log("Instance of database received");
/*
        await createEntities(connection);

        try {
            const rows = await new Promise((resolve, reject) => {
                connection.all('SELECT * FROM notes ORDER BY notes_id DESC', (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            });

            for(let note of rows){
                console.log("------------");
                console.log(note["NOTES_ID"]);
                console.log(note["GRP_ID"]);
                console.log(note["NOTES_LABEL"]);
                console.log("------------");
            }


        } catch (err) {
            console.error('Error selecting records:', err);
        }
*/


    }).catch((err) => {
        console.error(err);
    });
}