const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const Note = require("../models/NotesComponents/Note");

class Database {
    static db_path = path.join(__dirname, '../../data', 'quicklynote.db')
    static db_path_sql = path.join(__dirname, '../../data', 'mysql_quicklynote.sql')

    static dbConn = null

    static setupBase(){
        if (Database.dbConn === null) {
            Database.createDatabase(); // create base and tables
            Database.dbConn = Database.connexionAttempt(); // get connection instance
        }
    }

    static async getInstance() {
        return await new Promise((successCallback, failureCallback) => {
            if (Database.dbConn) {
                successCallback(Database.dbConn);
            } else {
                failureCallback("Erreur lors de la connexion à la base de données.");
            }
        });
    }


    static connexionAttempt(){
        return new sqlite3.Database(Database.db_path, sqlite3.OPEN_READWRITE,(err) => {
            if (err) {
                console.log('Error connecting to the database.')
            } else {
                console.log('Connected to the database : ');
            }
        })
    }


    static createDatabase() {
        try {
            const dbExist = fs.existsSync(Database.db_path)

            const db = new sqlite3.Database(Database.db_path,(err) => {
                if (err) {
                    console.log('Error connecting to the database.')
                } else {
                    console.log('Database created/connected.');
                    Database.loadNotes()
                }
            });


            if(!dbExist){
                const sql_filepath = fs.readFileSync(Database.db_path_sql)
                const dataArr = sql_filepath.toString().split(");");

                // db.serialize ensures that your queries are one after the other depending on which one came first in your `dataArr`
                db.serialize(() => {
                    db.run("PRAGMA foreign_keys=OFF;"); // deactive forfeign keys check when importing script
                    db.run("BEGIN TRANSACTION;");

                    dataArr.forEach(query => {
                        if (query) {
                            query += ");";

                            db.run(query, err => {
                                if (err) throw err;
                            });
                        }
                    });

                    db.run("COMMIT;");
                });
            }

            // Close the DB connection
            db.close(err => {
                if (err) {
                    return console.error(err.message);
                }
                console.log("Closed the database connection.");
            });

        } catch (e) {
            console.log("Error connecting or creating the database.")
        }
    }

    /*
    Load the existing notes from the database to Note.notesId
     */
    static loadNotes(){
        const db = Database.getInstance();

        db.then(async (connection) => {
            try {
                const rows = await new Promise((resolve, reject) => {
                    connection.all('SELECT * FROM notes ORDER BY notes_id DESC', (err, rows) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                        }
                    });
                });

                for(let note of rows){
/*                    console.log("------------");
                    console.log(note["NOTES_ID"]);
                    console.log(note["GRP_ID"]);
                    console.log(note["NOTES_LABEL"]);
                    console.log("------------");*/

                    const n = new Note(note["NOTES_ID"],
                        note["GRP_ID"],
                        note["NOTES_LABEL"])
/*                    Note.notes.push(n)
                    Note.notesId.push(n.note_id)*/
                }

            } catch (err) {
                console.error('Error selecting records:', err);
            }

        }).catch((err) => {
            console.error(err);
        });
    }

    static deleteNote(noteId){

    }

    static deleteGroup(groupId){

    }

}

module.exports = Database