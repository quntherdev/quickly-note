import React from 'react';
import "../styles/Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar-container">
            <div className="items">
                <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>Notes</a>
                <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-SemiBold'}}>Notes rangées</a>
                <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>Corbeille</a>
                <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>A propos</a>
                <a href="#" className="list-group-item list-group-item-action" style={{color:'#FFFFFF',fontFamily: 'Poppins-Regular'}}>Paramètres</a>
            </div>
        </div>
    );
}

export default Sidebar;