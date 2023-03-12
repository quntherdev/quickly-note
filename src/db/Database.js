const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const fs = require('fs');

class Database {
    static base_path = "quicklynote.db"
    static db_path = path.join(__dirname, '../../data', 'quicklynote.db')
    static sql_path = path.join(__dirname, '../../data', 'test.SQL')

    static createDatabase() {
        try {
            const dbExist = fs.existsSync(Database.db_path)

            const db = new sqlite3.Database(path.join(__dirname,'../../data',Database.base_path),(err) => {
                if (err) {
                    console.log('Error connecting to the database.')
                } else {
                    console.log('Connected to the database : ');
                }
            });

            if(!dbExist){
                const sql_filepath = fs.readFileSync(Database.sql_path)

                db.exec(sql_filepath, (err) => {
                    if(err){
                        console.log("Erreur lors de l'insertion du fichier SQL.")
                    }else{
                        console.log("Fichier SQL exécuté avec succès.")
                    }
                })

            }

            db.close()
        } catch (e) {
            console.log("error db")
        }
    }
}

module.exports = Database;