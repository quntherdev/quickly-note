class Note extends NoteComponent {
    constructor(message) {
        super();
        this.message = message;
        this.parent = null;
    }

    getParent() {
        return this.parent;
    }

    getMessage() {
        return this.message;
    }
}