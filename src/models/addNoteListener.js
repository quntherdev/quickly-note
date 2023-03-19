/*
const iohook = require('iohook');
const clipboardy = require('clipboardy');

let isCtrlPressed = false;
let isCPressed = false;
let isXPressed = false;

// Ecouter l'événement d'appui sur une touche
iohook.on('keydown', async (event) => {
    // Identifier les touches enfoncées (Ctrl, C et X)
    if (event.keycode === 29) isCtrlPressed = true;
    if (event.keycode === 46) isCPressed = true;
    if (event.keycode === 45) isXPressed = true;

    if (isCtrlPressed && isCPressed && isXPressed) {
        const clipboardContent = await clipboardy.read();
        console.log('Contenu du presse-papier :', clipboardContent);
    }
});

// Ecouter l'événement de relâchement d'une touche
iohook.on('keyup', (event) => {
    if (event.keycode === 29) isCtrlPressed = false;
    if (event.keycode === 46) isCPressed = false;
    if (event.keycode === 45) isXPressed = false;
});

// Démarrer l'écoute des événements
iohook.start();
*/
