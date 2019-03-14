import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default (props) => {
    return (
        <nav>
            <h2 className="logo">
                <a className="logo-link" href="#">{props.title}</a>
            </h2>
            <ul className="nav-menu">
                <li><NavLink className="nav-menu-link" exact to="/">Home</NavLink></li>
                <li><NavLink className="nav-menu-link" to="portfolio">Portfolio</NavLink> </li>
                <li><NavLink className="nav-menu-link" to="support">Support</NavLink></li>
            </ul>
        </nav>
    );
}

