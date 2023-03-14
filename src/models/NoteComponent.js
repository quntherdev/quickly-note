class  NoteComponent {

    constructor(componentID) {
        if (this.constructor === NoteComponent) {
            throw new Error('Cannot instantiate abstract class');
        }
        this.componentID = componentID;
    }

    getParent();
    getID(){
        return this.componentID
    }
    setID(id){
        this.componentID = id
    }
}