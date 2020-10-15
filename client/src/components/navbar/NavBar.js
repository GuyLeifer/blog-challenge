import React from 'react';
import './NavBar.css';
import Header from '../Header';
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="navbar">
                <Link to="/">
                    <div className="navbarLink">
                    <img className="Icon" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" alt="Home" width="70" height="70" />
                    </div>
                </Link>
                <h1>
                    <Header />
                </h1>
                <Link to="/about">
                    <div className="navbarLink">
                    <img className="Icon" src="https://static.thenounproject.com/png/2940521-200.png" alt="Home" width="70" height="70" />
                    </div>
                </Link>
        </div>
    )
}

export default NavBar