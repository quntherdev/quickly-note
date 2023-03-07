const sqlite3 = require('sqlite3').verbose();

class Database{
    static db_name = "quicklynote";

    constructor(username,password) {
        this.username = username
        this.password = password
    }

    static create(){
        const db = new sqlite3.Database('./quicklynote.db');
        const fs = require('fs');
        const sql = fs.readFileSync('./mcd/QUICKLYNOTE.SQL').toString();

        db.exec(sql, function(err) {
            if (err) {
                return console.error(err.message);
            }
            console.log('Schema created successfully');
        });
    }

}