import React from 'react';
import "../styles/NotesTable.css";

function NotesTable(props) {
    return (
        <div className="scrollable">
            <table className="table">
                <thead>
                    <tr>
                        <th className="note">Note</th>
                        <th className="action">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus dictum ultricies. Nam ut eros at nisi vehicula congue eu at ex. Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna</td>
                        <td>Action 1</td>
                    </tr>
                    <tr>
                        <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                        <td>Action 2</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 1</td>
                        <td>Action 1</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 1</td>
                        <td>Action 1</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 1</td>
                        <td>Action 1</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Action 1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NotesTable;