const Database = require('../db/Database');

class NoteDAO{
    constructor() {

    }

    insert(note){
        let {note_id,grp_id,message} = note
        grp_id = 2

        let SQLgetMaxNoteID= 'SELECT MAX(notes_id) AS noteIdMax FROM notes'

        return Database.getInstance()
            .then(async (connection) => {
                try {
                    await new Promise((resolve, reject) => {
                        connection.all(SQLgetMaxNoteID, (err, rows) => {
                            if (err) {
                                console.log("error retrieving max note id")
                                reject()
                            } else {
                                note_id =  isNaN(rows[0]['noteIdMax']) ? 1 : rows[0]['noteIdMax']+1
                                console.log("Max note ID + 1 : ", rows[0])
                                resolve()
                            }
                        });
                    });

                    await new Promise((resolve,reject) => {
                        let SQLinsertion = 'INSERT INTO notes (notes_id, grp_id, notes_label) VALUES (?,?,?)';
                        connection.all(SQLinsertion, [note_id,grp_id,message], (err,rows) => {
                            if(err){
                                console("insertion note failed")
                                reject()
                            }else{
                                console.log("insertion note OK")
                                resolve()
                            }
                        })
                    })
                } catch(err){
                    console.log("error to retrieve max note id :",err)
                }
            })
            .catch((err) => {
                console.log("get db instance failed")
            })
    }

    async getAll() {
        try {
            const connection = await Database.getInstance();
            const rows = await new Promise((resolve, reject) => {
                connection.all('SELECT * FROM notes ORDER BY notes_id DESC', (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            });

            return rows;
        } catch (err) {
            console.log("error to retrieve all notes: ", err);
        }
    }


}

module.exports = NoteDAO;