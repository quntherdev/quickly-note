const iohook = require('iohook');
let clipboardy;
import('clipboardy').then(module => {
    clipboardy = module.default;
});

let isCtrlPressed = false;
let isCPressed = false;
let isXPressed = false;

iohook.on('keydown', (event) => {
    // Identifier les touches enfoncées (Ctrl, C et X)
    if (event.keycode === 29) isCtrlPressed = true;
    if (event.keycode === 46) isCPressed = true;
    if (event.keycode === 45) isXPressed = true;

    if (isCtrlPressed && isCPressed && isXPressed) {
        const clipboardContent = clipboardy.readSync();
        console.log('Contenu du presse-papier :', clipboardContent);
    }
});

iohook.on('keyup', (event) => {
    if (event.keycode === 29) isCtrlPressed = false;
    if (event.keycode === 46) isCPressed = false;
    if (event.keycode === 45) isXPressed = false;
});

iohook.start();

module.exports = {
    iohook,
    clipboardy,
};
