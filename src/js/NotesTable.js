import React from 'react';

function NotesTable(props) {
    return (
        <div className="main-container">
            <table>
                <thead>
                <tr>
                    <th className="note">Note</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Enregistrement 1</td>
                    <td>Action 1</td>
                </tr>
                <tr>
                    <td>Enregistrement 2</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Enregistrement 3</td>
                    <td>Action 3</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default NotesTable;