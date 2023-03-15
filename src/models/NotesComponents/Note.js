import NoteComponent from "./NoteComponent"
import Database from "./../../db/Database";

class Note extends NoteComponent {
    static notesId = []

    static getAll(){
        return ["note1","note2","note3"]
    }

    static getComponent(noteId){
        if(Note.notesId.includes(noteId)) return Note.notesId.indexOf(noteId)
        return false
    }

    static removeComponent(noteId){
        Database.deleteNote(noteId)
        if(Note.notesId.includes(noteId)) Note.notesId.splice(Note.notesId.indexOf(noteId),1)
    }



    constructor(message, parent) {
        super();
        this.message = message;
        this.parent = parent;
    }

    remove(){
        if(parent !== null){
            this.parent.removeNote(this)
        }
    }

    getParent() {
        return this.parent;
    }

    getMessage() {
        return this.message;
    }
}

export default Note;