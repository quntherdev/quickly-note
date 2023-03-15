import Database from "./../../db/Database";
import NoteComponent from "./NoteComponent";

class NotesGroup extends NoteComponent {
    static {
        const groupsId = []

        function getComponent(groupId){
            if(groupsId.includes(groupId)) return groupsId.indexOf(groupId)
            return false
        }

        function removeComponent(groupId){
            Database.deleteGroup(groupId)
            if(groupsId.includes(groupId)) groupsId.splice(groupsId.indexOf(groupId),1)
        }

    }

    constructor(label) {
        super();
        this.label = label;
        this.children = [];
    }

    getParent() {
        super.getParent();
    }

    getChildren() {
        return this.children;
    }

    addChild(component) {
        this.children.push(component);
    }

    removeNote(_note: Note){
        if(this.children.includes(_note)){
            // const note = this.children.filter((el) => typeof el === Note && el.getID()===note.getID());
            Note.removeNote(_note.getID())
            this.children.slice(this.children.indexOf(_note.getID(),1))
        }else{
            return false
        }
    }

    getLabel() {
        return this.label;
    }
}