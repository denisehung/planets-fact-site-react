import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import arrowIcon from '../images/icon-chevron.svg';


function Header() {
    const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

    function hamburgerClick() {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <header className="header">
        <Link exact to="/" className="logo">The Planets</Link>
            <nav className="navigation">
                <ul className={`navigation__menu ${hamburgerOpen ? "active" : ""}`}>
                    <li className="navigation__item">
                        <div className="navigation__planet-icon navigation__planet-icon_mercury"></div>
                        <NavLink 
                            exact to="/" 
                            activeClassName="navigation__link_active navigation__link_active_mercury" 
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Mercury
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                    <li className="navigation__item">
                    <div className="navigation__planet-icon navigation__planet-icon_venus"></div>
                        <NavLink 
                            to="/venus" 
                            activeClassName="navigation__link_active navigation__link_active_venus" 
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Venus
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                    <li className="navigation__item">
                    <div className="navigation__planet-icon navigation__planet-icon_earth"></div>
                        <NavLink 
                            to="/earth" 
                            activeClassName="navigation__link_active navigation__link_active_earth" 
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Earth
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                    <li className="navigation__item">
                    <div className="navigation__planet-icon navigation__planet-icon_mars"></div>
                        <NavLink
                            to="/mars"
                            activeClassName="navigation__link_active navigation__link_active_mars"
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Mars
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                    <li className="navigation__item">
                    <div className="navigation__planet-icon navigation__planet-icon_jupiter"></div>
                        <NavLink 
                            to="/jupiter"
                            activeClassName="navigation__link_active navigation__link_active_jupiter"
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Jupiter
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                    <li className="navigation__item">
                    <div className="navigation__planet-icon navigation__planet-icon_saturn"></div>
                        <NavLink 
                            to="/saturn"
                            activeClassName="navigation__link_active navigation__link_active_saturn"
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Saturn
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                    <li className="navigation__item">
                    <div className="navigation__planet-icon navigation__planet-icon_uranus"></div>
                        <NavLink 
                            to="/uranus"
                            activeClassName="navigation__link_active navigation__link_active_uranus"
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Uranus
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                    <li className="navigation__item">
                    <div className="navigation__planet-icon navigation__planet-icon_neptune"></div>
                    <NavLink 
                            to="/neptune"
                            activeClassName="navigation__link_active navigation__link_active_neptune"
                            className="navigation__link"
                            onClick={hamburgerClick}>
                            Neptune
                        </NavLink>
                        <img className="navigation__arrow" alt="" src={arrowIcon} />
                    </li>
                </ul>
                <div className={`hamburger ${hamburgerOpen ? "active" : ""}`} onClick={hamburgerClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;

