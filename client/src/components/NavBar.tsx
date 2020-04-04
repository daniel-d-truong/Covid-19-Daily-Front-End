import React from "react";
import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="title">Covid 19 Daily</h1>
            <p className="title">Get your daily dose of COVID-19 information and news.</p>
            <div className="links-section">
                <p>Home</p>
                <p>About</p>
            </div>
        </div>
    )
};

export default NavBar;