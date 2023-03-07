import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar(props) {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


    const handleButtonClick2 = () => {
        // Déclenche l'événement "change-to-notes-rangées" avec le paramètre "NotesTable"
        ipcRenderer.send('change-to-notes-rangées', 'Sidebar');
    };

    const renderButton = (buttonName, buttonText) => {
        return (
            <>
                <a
                    href="#"
                    className={`item list-group-item list-group-item-action ${
                        activeButton === buttonName ? 'active' : ''
                    }`}
                    onClick={() => {
                        handleButtonClick(buttonName);
                        handleButtonClick2();
                    }}
                >
                    {activeButton === buttonName && <div className="rectangle"></div>}
                    
                    {buttonText}
                </a>
            </>
        );
    };

    return (
        <div className="sidebar-container row" style={{ height: '100%'}}>
            <div className="row items_group" style={{ height: '25%'}}>
                {renderButton('Notes', 'Notes')}

                {renderButton('Notes rangées', 'Notes rangées')}

                {renderButton('Corbeille', 'Corbeille')}
            </div>

            <div className="row" style={{ height: '50%' }}></div>

            <div className="row items_group" style={{ height: '25%' }}>
                {renderButton('A propos', 'A propos')}

                {renderButton('Paramètres', 'Paramètres')}
            </div>
        </div>
    );
}

export default Sidebar;
