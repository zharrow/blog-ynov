// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Florent Detres</div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" exact activeClassName="active">
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" activeClassName="active">
                Mes articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact 
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
