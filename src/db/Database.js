const sqlite3 = require('sqlite3').verbose();
const path = require("path");

class Database{
    static db_name = "quicklynote.db";

/*    constructor(username,password) {
        this.username = username
        this.password = password
    }*/

    static create() {
        // const db = new sqlite3.Database('./quicklynote.db');

        const db = new sqlite3.Database(path.join(__dirname, 'data', Database.db_name), (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Connected to the mydb database.');
                // Création de la table "notes" si elle n'existe pas déjà
                db.run('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)');
            }
        });

    }

}