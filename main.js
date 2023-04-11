const { BrowserWindow, app, ipcMain, globalShortcut, clipboard } = require('electron');
const Database = require("./src/db/Database");
const NoteDAO = require('./src/db/NoteDAO');
const Note = require("./src/models/NotesComponents/Note");

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

    modalWindow.once('ready-to-show', () => {
        modalWindow.show();
    });
}


function createEditNoteWindow(note) {
    editNoteWindow = new BrowserWindow({
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

    editNoteWindow.loadFile('./src/pages/EditNote.html');

    editNoteWindow.once('ready-to-show', () => {
        editNoteWindow.show();
        editNoteWindow.webContents.send("editNoteInfos", note)
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

    win.webContents.send('getAllNotesAnswer', notes)
    modalWindow.close();
});

ipcMain.on('modalClose', () => {
    modalWindow.close();
});

ipcMain.on('closeEditWindow', () => {
    editNoteWindow.close();
});



ipcMain.on('editNoteSubmit', async (event, editedNote) => {
    editNoteWindow.close();

    const query = await noteDAO.editNoteContent(editedNote.note_id, editedNote.message)
    const rows = await noteDAO.getAll();
    const notes = rows.map(row => new Note(row.NOTES_ID, row.GRP_ID, row.NOTES_LABEL));

    win.webContents.send('getAllNotesAnswer', notes)
});

ipcMain.on('getAllNotesRequest', async(event, arg) => {
    const rows = await noteDAO.getAll();
    const notes = rows.map(row => new Note(row.NOTES_ID, row.GRP_ID, row.NOTES_LABEL));

    event.reply('getAllNotesAnswer', notes)
})


ipcMain.on('copyNote', async (event, noteMessage) => {
    console.log('Copied note :', noteMessage);
    clipboard.writeText(noteMessage);
});


ipcMain.on('editNote', async (event, noteID) => {
    try {
        const note = await noteDAO.getNoteByID(noteID);
        createEditNoteWindow(note);
    } catch (error) {
        console.log("Error in retrieving the note by ID:", error);
    }
});


ipcMain.on('deleteNote', async (event, noteID) => {
    console.log('Delete note :', noteID);

    await noteDAO.deleteByID(noteID);
    const rows = await noteDAO.getAll();

    const notes = rows.map(row => new Note(row.NOTES_ID, row.GRP_ID, row.NOTES_LABEL));

    win.webContents.send('getAllNotesAnswer', notes)
});