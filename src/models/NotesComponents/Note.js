const NoteComponent = require("./NoteComponent")

class Note {
    constructor(note_id = null, grp_id = null, message) {
        this.note_id = note_id
        this.groupe_id = grp_id
        this.message = message;
    }
}

module.exports = Note;