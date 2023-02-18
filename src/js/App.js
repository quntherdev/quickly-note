import React from 'react';
import Sidebar from "./Sidebar";

export default function App() {
    return (
        <div className="container-fluid" style={{ height: '100vh' }}>
            <div className="row " style={{ height: '100%' }}>

                {/* Logo/Sidebar Column */}
                <div className="col-2 border border-danger" style={{ backgroundColor: 'red'}}>

                    {/* Logo Row */}
                    <div className="row no-gutters border border-danger" style={{ height: '20%' }}>
                        <div className="col" style={{ backgroundColor: '#FFFFFF' }}>

                        </div>
                    </div>

                    {/* Sidebar Row */}
                    <div className="row no-gutters border border-danger" style={{ height: '80%' }}>

                            <div className="rounded-top shadow" style={{backgroundColor:'#0C2480',height:'100%', width:'100%'}}>
                                <div className="items">
                                    <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>Notes</a>
                                    <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-SemiBold'}}>Notes rangées</a>
                                    <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>Corbeille</a>
                                    <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>A propos</a>
                                    <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>Paramètres</a>
                                </div>

                        </div>

                    </div>
                </div>

                {/* Content Column */}
                <div className="col-10 border border-danger" style={{ backgroundColor: '#FFFFFF'}}>

                </div>
            </div>
        </div>
    );
}