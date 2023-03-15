import React, {useEffect, useState} from 'react';
import "../styles/NotesTable.css";
const { ipcRenderer } = require('electron');

function NotesTable(props) {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        ipcRenderer.send('getAllNotes')
        ipcRenderer.on('getAllNotesResult', (event, result) => setNotes(result) )
        return () => {ipcRenderer.removeAllListeners('getAllNotesResult')}
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
                    {notes.map((item,index) =>
                        <tr key={index}>
                            <td>{item}</td>
                            <td>Editer</td>
                        </tr>) }
                </tbody>
            </table>
        </div>
    );
}

export default NotesTable;
