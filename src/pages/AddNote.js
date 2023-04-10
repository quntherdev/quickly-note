const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const submitTextButton = document.getElementById('submitText');
    const cancelButton = document.getElementById('cancel');

    // Valider le texte entré
    submitTextButton.addEventListener('click', () => {
        const text = inputText.value;
        ipcRenderer.send('modalTextSubmit', text);
    });

    // Annuler et fermer la fenêtre modale
    cancelButton.addEventListener('click', () => {
        console.log("event close popup")
        ipcRenderer.send('modalClose');
    });

    console.log('Event listener added');
});