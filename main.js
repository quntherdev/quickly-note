const { BrowserWindow, app, ipcMain, globalShortcut, clipboard, dialog } = require('electron');
const Database = require("./src/db/Database");
const path = require("path");
const NoteDAO = require('./src/db/NoteDAO');

const { Worker } = require('worker_threads');
const Note = require("./src/models/NotesComponents/Note");
const Notes = require("./src/models/NotesComponents/Note");
const uiohookWorkerPath = path.join(__dirname, 'src/models/addNoteListener.js');
const uiohookWorker = new Worker(uiohookWorkerPath);


const noteDAO = new NoteDAO();

function createWindow() {
    Database.setupBase()

    app.setName("QuicklyNote")

    if (process.platform === 'win32')
    {
        app.setAppUserModelId(app.name);
    }

    win = new BrowserWindow({
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

        if(win.isMinimized()){
            win.restore()
        }
        win.focus()
    });

    if (!ret) {
        console.error('Failed to register global shortcut');
    }
}


function createModalWindow() {
    modalWindow = new BrowserWindow({
        width: 600,
        height: 200,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false
        },
        frame: false,
        titleBarStyle: "hidden",
        parent: win,
        modal: true,
        show: false
    });

    modalWindow.loadFile('./src/pages/AddNote.html');
    // modalWindow.webContents.openDevTools();

    modalWindow.once('ready-to-show', () => {
        modalWindow.show();
    });
}



app.whenReady().then(createWindow);

ipcMain.on('addNote', async (event, args) => {
    try {
        createModalWindow()
    } catch (err) {
        console.error('Error in addNote:', err);
    }
});

ipcMain.on('modalTextSubmit', async (event, text) => {
    console.log('Message nouvelle note :', text);

    let newNote = new Note(null, 1, text);
    await noteDAO.insert(newNote);

    const rows = await noteDAO.getAll();

    const notes = rows.map(row => new Note(row.NOTES_ID, row.GRP_ID, row.NOTES_LABEL));
    notes.forEach(r => console.log(r))

    const notes_message = notes.map(note => note.message)

    win.webContents.send('getAllNotesAnswer', notes_message)
    modalWindow.close();
});

ipcMain.on('modalClose', () => {
// Fermer la fenêtre modale
    console.log("close popup")
    modalWindow.close();
});



ipcMain.on('getAllNotesRequest', async(event, arg) => {
    const rows = await noteDAO.getAll();

    const notes = rows.map(row => new Note(row.NOTES_ID, row.GRP_ID, row.NOTES_LABEL));
    const notes_message = notes.map(note => note.message)

    // notes.forEach(r => console.log(r))

    event.reply('getAllNotesAnswer', notes_message)
})