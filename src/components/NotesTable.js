import React, {useCallback, useEffect, useState} from 'react';
import "../styles/NotesTable.css";

const { ipcRenderer } = require('electron');

function NotesTable(props) {
    const [notes, setNotes] = useState([])

    // first loading of the data
    useEffect(() => {
        ipcRenderer.send('getAllNotesRequest')
        ipcRenderer.on('getAllNotesAnswer', (event, result) =>{
            setNotes(result)
        })
        return () => {ipcRenderer.removeAllListeners('getAllNotesAnswer')}
    }, [])

    return (
        <div className="scrollable" style={{ height: '90%', maxHeight:'90%'}}>
            <table className="table" style={{ height: '90%', maxHeight:'90%'}}>
                <thead>
                <tr>
                    <th className="note">Note</th>
                    <th className="action">Action</th>
                </tr>
                </thead>

                <tbody>
                    {
                        notes.map((item,index) =>
                        <tr key={index}>
                            <td>{item.message}</td>

                            <td>
                                <img src="../assets/pictures/copyNote.svg" alt="Copier" onClick={() => handleCopyNote(item.note_id)} style={{ height:"38px", width:"38px", cursor: "pointer", marginRight:"8px" }} />
                                <img src="../assets/pictures/editNote.svg" alt="Editer" onClick={() => handleEditNote(item.note_id)} style={{ height:"46px", width:"46px", cursor: "pointer", marginLeft:"8px",marginRight:"8px" }} />
                                <img src="../assets/pictures/deleteNote.svg" alt="Supprimer" onClick={() => handleDeleteNote(item.note_id)}  style={{ height:"42px", width:"42px", cursor: "pointer", marginLeft:"5px"}} />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}


function handleCopyNote(noteID){
    console.log("COPIER FRERO")
}
function handleEditNote(noteID){
    console.log("EDITER FRERO")
}
function handleDeleteNote(noteID){
    console.log("SUPPRIME FRERO ",noteID)
    ipcRenderer.send("deleteNote",noteID)
}

export default NotesTable;
