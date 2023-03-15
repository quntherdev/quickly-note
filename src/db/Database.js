const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const fs = require('fs');
const { exec } = require('child_process');

class Database {
    static db_path = path.join(__dirname, '../../data', 'quicklynote.db')
    static db_path_sql = path.join(__dirname, '../../data', 'mysql_quicklynote.sql')

    static dbConn = Database.connexionAttempt()

    static getInstance(){
        if(Database.dbConn === null){
            Database.createDatabase()
            Database.dbConn = Database.connexionAttempt()
        }

        return new Promise((successCallback, failureCallback) => {
            if (Database.dbConn) {
                successCallback(Database.dbConn);
            } else {
                failureCallback("Erreur lors de la création de la connexion");
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
                    console.log('Connected to the database : ');
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



}

module.exports = Database;