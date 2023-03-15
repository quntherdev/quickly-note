export default class NoteComponent {

    constructor(componentID) {
        if (this.constructor === NoteComponent) {
            throw new Error('Cannot instantiate abstract class');
        }
        this.componentID = componentID;
    }

    static getComponent(componentId){}
    static removeComponent(component){}
    remove(){}
    getParent(){}
    getID(){
        return this.componentID
    }
    setID(id){
        this.componentID = id
    }

}