import React from 'react';


import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className='filler'></div>
      <div className="Home-header">
        <div className='logocontainer'>
          <NavLink to="/" className="nav-link">Casa del Catarina</NavLink>
        </div>
        <div className='calendarlink'>
          <NavLink to="/calendar" className="nav-link">Bokning via kalender</NavLink>
        </div>
      </div>
    </div >
  );
}

export default Header;