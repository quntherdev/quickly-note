
import React from 'react';
import "../styles/NotesTable.css";

function NotesTable(props) {
    return (
/*        <div className="scroll">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. It is a long established fact that a
            reader will be distracted by the readable content of a page when looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. It is a long established fact that a
            reader will be distracted by the readable content of a page when looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </div>*/

        <div className="scrollable" style={{ height: '85%', maxHeight:'85%'}}>
                <thead>
                    <tr>
                        <th className="note">Note</th>
                        <th className="action">Action</th>
                    </tr>
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
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Enregistrement 3</td>
                        <td>Action 3</td>
                    </tr>
                    <tr>
                        <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                        <td>Action 2</td>
                    </tr>
                    <tr>
                        <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                        <td>Action 2</td>
                    </tr>
                    <tr>
                        <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                        <td>Action 2</td>
                    </tr>
                    <tr>
                        <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                        <td>Action 2</td>
                    </tr>
                    <tr>
                        <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                        <td>Action 2</td>
                    </tr>
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
                    <td>Enregistrement 3</td>
                    <td>Action 3</td>
                </tr>
                <tr>
                    <td>Enregistrement 3</td>
                    <td>Action 3</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
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
                    <td>Enregistrement 3</td>
                    <td>Action 3</td>
                </tr>
                <tr>
                    <td>Enregistrement 3</td>
                    <td>Action 3</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>Cras gravida consectetur aliquam. Donec massa turpis, ultrices eget mauris eu, rhoncus consequat urna.</td>
                    <td>Action 2</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NotesTable;