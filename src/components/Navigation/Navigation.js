import React from "react";
import { NavLink } from "react-router-dom";
import { NAVIGATION_ITEMS } from '../../utils/constants';
import './Navigation.css';

const Navigation = () => {

    return (
        <nav className="nav">
            <ul className="nav__list">
                {NAVIGATION_ITEMS.map(item => {
                    return <li key={item.id} className="nav__item"><NavLink
                        className="nav__link"
                        activeStyle={{ fontWeight: "bold" }}
                        to={item.to}>{item.text}
                        </NavLink></li>
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
