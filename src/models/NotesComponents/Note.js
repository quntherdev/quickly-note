const NoteComponent = require("./NoteComponent")

class Note extends NoteComponent {
    static notes = []
    static notesId = []

    static getAll(){
        return Note.notes.map(note => note.message)
    }

    static getComponent(noteId){
        if(Note.notesId.includes(noteId)){
/*            Note.notes.forEach(note => {
                if(note.id===noteId) return note
            })*/
            return Note.notes[noteId.indexOf(noteId)]
        }
        return false
    }

/*    static removeComponent(noteId){
        Database.deleteNote(noteId)
        if(Note.notesId.includes(noteId)) Note.notesId.splice(Note.notesId.indexOf(noteId),1)
    }*/

    constructor(note_id, grp_id, message) {
        super();
        this.note_id = note_id
        this.groupe_id = grp_id
        this.message = message;
        // this.parent = parent;
    }

    remove(){
/*        if(parent !== null){
            this.parent.removeNote(this)
        }*/
        // this.parent.removeNote(this)
    }

/*    getParent() {
        return this.parent;
    }*/

    getMessage() {
        return this.message;
    }
}

module.exports = Note;