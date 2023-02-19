import React from 'react';
import Sidebar from "./Sidebar";
import NotesTable from "./NotesTable";

import "../styles/TopLeft.css";

export default function App() {
    return (
        <div className="container-fluid" style={{ height: '100vh' }}>
            <div className="row " style={{ height: '100%' }}>

                {/* Logo/Sidebar Column */}
                <div className="col-2">

                    {/* Logo Row */}
                    <div className="row no-gutters" style={{ height: '20%' }}>
                        <img src="../assets/pictures/notion-logo.svg"
                             id="logo"
                             alt="Notion logo"/>
                    </div>

                    {/* Sidebar Row */}
                    <div className="row no-gutters" style={{ height: '80%' }}>
                        <Sidebar />
                    </div>
                </div>

                {/* Content Column */}
                <div className="col-10" style={{ backgroundColor: '#FFFFFF'}}>
                    <NotesTable />
                </div>
            </div>
        </div>
    );
}