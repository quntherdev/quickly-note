const { parentPort } = require('worker_threads');
const { uIOhook, UiohookKey } = require('uiohook-napi');

uIOhook.on('keydown', (e) => {
    if (e.keycode === UiohookKey.Q) {
        console.log('Hello!');
    }

    if (e.keycode === UiohookKey.Escape) {
        process.exit(0);
    }
});

uIOhook.start();

parentPort.on('message', (message) => {
    if (message === 'stop') {
        uIOhook.stop();
    }
});

module.exports = {
    uIOhook,
};
