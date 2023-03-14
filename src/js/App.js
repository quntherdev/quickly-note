import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import NotesTable from "./NotesTable";

import "../styles/TopLeft.css";
import "../styles/Title.css";
import "../styles/Searchbar.css";

export default function App() {
    const [activeButton, setActiveButton] = useState('Notes');

    const handleActiveButtonChange = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="container-fluid" style={{ height: '100vh', maxHeight:'100vh' }}>
            <div className="row" style={{ height: '100%', maxHeight:'100%' }}>
                {/* Logo/Sidebar Column */}
                <div className="col-2">

                    {/* Logo Row */}
                    <div className="row no-gutters" style={{ height: '20%' }}>
                        <img src="../assets/pictures/notion-logo.svg"
                             id="logo"
                             alt="Notion logo"/>
                    </div>

                    {/* Sidebar Row */}
                    <div className="row no-gutters" style={{ height: '80%', maxHeight:'80%' }}>
                        <Sidebar onActiveButtonChange={handleActiveButtonChange}/>
                    </div>
                </div>

                {/* Content Column */}
                <div className="col-10" style={{ backgroundColor: '#FFFFFF', height: '100%', maxHeight:'100%' }}>

                    {/* Searchbar Row */}
                    <div className="row d-flex align-items-center justify-content-center" style={{ height: '10%', backgroundColor:'#FFFFFF'}}>
                        <div className="searchbar-container d-flex align-items-center">
                            <div className="searchbar-bar">
                                <img src="../assets/pictures/search.svg" height="28" alt="Search image"/>
                                <p className="searchbar-text">Rechercher une note</p>
                            </div>
                        </div>
                    </div>

                    {/* Title/Add note Row  */}
                    <div className="row d-flex align-items-center justify-content-center" style={{ width:'100%',
                                                                                                    height: '10%',
                                                                                                    backgroundColor:'#FFFFFF'}}>
                        <div className="title-container d-flex align-items-center">
                            <h1 className="title" style={{color:'#1E1F54',fontSize:'52',fontFamily:'Poppins-SemiBold'}}>Toutes les Notes</h1>
                            <button className="add_note_button">Ajouter note</button>
                        </div>

                    </div>



                    {/* Content Row */}
                    <div className="row align-items-center justify-content-center"
                         style={{ height: '80%', maxHeight:'80%', justifyContent: 'center' }}>

                        <div className="content-container" style={{ height: '100%', maxHeight:'100%'}}>
                            {activeButton === 'Notes' && <NotesTable />}
                            {activeButton === 'Notes rangées' && <Sidebar />}
                            {activeButton === 'Corbeille' && <Sidebar />}
                            {activeButton === 'A propos' && <Sidebar />}
                            {activeButton === 'Paramètres' && <Sidebar />}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}