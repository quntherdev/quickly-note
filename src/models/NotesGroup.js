class NotesGroup extends NoteComponent {
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

    removeChild(component) {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getLabel() {
        return this.label;
    }
}