import React from "react";
import {Link, NavLink} from "react-router-dom";

function Navbar(){
    const myStyle = {
        backgroundColor: "#E88B78",
        margin: "20px",
        width: "150px",
        textAlign: "center",
        borderRadius: "40%"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h1>Furama Resort</h1>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={myStyle}>
                            <Link to="/services" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item" style={myStyle}>
                            <NavLink to="/services" className="nav-link active">SERVICES</NavLink>
                        </li>
                        <li className="nav-item" style={myStyle}>
                            <NavLink to="/customers" className="nav-link active">CUSTOMERS</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;