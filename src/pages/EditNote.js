const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const submitTextButton = document.getElementById('submitText');
    const cancelButton = document.getElementById('cancel');

    var selectedNote

    ipcRenderer.on('editNoteInfos', (event,note) =>{
        selectedNote = note
        inputText.value = note.message;
    });

    submitTextButton.addEventListener('click', () => {
        selectedNote.message = inputText.value;
        ipcRenderer.send('editNoteSubmit', selectedNote);
    });

    cancelButton.addEventListener('click', () => {
        ipcRenderer.send('closeEditWindow');
    });
});
