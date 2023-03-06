import React, {useState} from 'react';
import "../styles/Sidebar.css";
function Sidebar(props) {
    const [activeButton, setActiveButton] = useState("");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="sidebar-container row" style={{ height: "100%" }}>
            <div className="row items_group" style={{ height: "25%" }}>
                <a
                    href="#"
                    className={`item list-group-item list-group-item-action ${
                        activeButton === "Notes" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("Notes")} style={{backgroundColor:'green'}}
                >
                    <div className="rectangle"></div>
                    Notes
                </a>
                <a
                    href="#"
                    className={`item list-group-item list-group-item-action ${
                        activeButton === "Notes rangées" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("Notes rangées")}
                >
                    <div className="rectangle"></div>
                    Notes rangées
                </a>
                <a
                    href="#"
                    className={`item list-group-item list-group-item-action ${
                        activeButton === "Corbeille" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("Corbeille")}
                >
                    <div className="rectangle"></div>
                    Corbeille
                </a>
            </div>

            <div className="row" style={{ height: "50%" }}></div>

            <div className="row items_group" style={{ height: "25%" }}>
                <a
                    href="#"
                    className={`item list-group-item list-group-item-action ${
                        activeButton === "A propos" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("A propos")}
                >
                    <div className="rectangle"></div>
                    A propos
                </a>
                <a
                    href="#"
                    className={`item list-group-item list-group-item-action ${
                        activeButton === "Paramètres" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("Paramètres")}
                >
                    <div className="rectangle"></div>
                    Paramètres
                </a>
            </div>
        </div>
    );
}

export default Sidebar;