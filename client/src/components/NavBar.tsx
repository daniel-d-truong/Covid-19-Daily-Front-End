import React from "react";
import './styles.css';

import covid from '../assets/covid.png';
import DateComponent from "./Date";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="title">Covid 19 Daily</h1>
            <img src={covid} alt="covid logo"></img>
            <p className="title">Get your daily dose of COVID-19 information and news.</p>
            <DateComponent />
        </div>
    )
};

export default NavBar;