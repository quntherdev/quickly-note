import React from 'react';
function Sidebar(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="rounded-top shadow p-3 mb-5" style={{backgroundColor:'#0C2480'}}>
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
    );
}

export default Sidebar;