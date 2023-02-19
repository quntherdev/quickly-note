import React from 'react';
import Sidebar from "./Sidebar";
import NotesTable from "./NotesTable";
import BaseWindowNotification from "../notifications/BaseWindowNotification";

export default function App() {

    return (
        <div className="container-fluid" style={{ height: '100vh' }}>
            <div className="row " style={{ height: '100%' }}>

                {/* Logo/Sidebar Column */}
                <div className="col-2 border border-danger">

                    {/* Logo Row */}
                    <div className="row no-gutters border border-danger" style={{ height: '20%' }}>
                        <input type="button" name="button" value="Notify me !" onClick={handleNotifyClick}></input>
                    </div>

                    {/* Sidebar Row */}
                    <div className="row no-gutters" style={{ height: '80%' }}>
                        <Sidebar />
                    </div>
                </div>

                {/* Content Column */}
                <div className="col-10 border border-danger" style={{ backgroundColor: '#FFFFFF'}}>
                    <NotesTable />
                </div>
            </div>
        </div>
    );
}