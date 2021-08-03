import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
        <Link exact to="/" className="logo">The Planets</Link>
            <nav className="navigation">
                <ul className="navigation__menu">
                    <li className="navigation__item">
                        <NavLink 
                            exact to="/" 
                            activeClassName="navigation__link_active navigation__link_active_mercury" 
                            className="navigation__link">
                            Mercury
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink 
                            to="/venus" 
                            activeClassName="navigation__link_active navigation__link_active_venus" 
                            className="navigation__link">
                            Venus
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink 
                            to="/earth" 
                            activeClassName="navigation__link_active navigation__link_active_earth" 
                            className="navigation__link">
                            Earth
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink
                            to="/mars"
                            activeClassName="navigation__link_active navigation__link_active_mars"
                            className="navigation__link">
                            Mars
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink 
                            to="/jupiter"
                            activeClassName="navigation__link_active navigation__link_active_jupiter"
                            className="navigation__link">
                            Jupiter
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink 
                            to="/saturn"
                            activeClassName="navigation__link_active navigation__link_active_saturn"
                            className="navigation__link">
                            Saturn
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink 
                            to="/uranus"
                            activeClassName="navigation__link_active navigation__link_active_uranus"
                            className="navigation__link">
                            Uranus
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                    <NavLink 
                            to="/neptune"
                            activeClassName="navigation__link_active navigation__link_active_neptune"
                            className="navigation__link">
                            Neptune
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

