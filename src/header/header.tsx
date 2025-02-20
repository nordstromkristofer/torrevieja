import React from 'react';


import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className='filler'></div>
      <div className="Home-header">
        <div className='logocontainer'>
          <NavLink to="/" className="nav-link1">Casa del Catarina</NavLink>
        </div>
        <div className='calendarlink'>
          <NavLink to="/calendar" className="nav-link">Bokning via kalender</NavLink>
        </div>
        <div className='todo'>
          <NavLink to="/todo" className="nav-link">Inför resa</NavLink>
        </div>
        <div className='b4leave'>
          <NavLink to="/b4leave" className="nav-link">Innan du lämnar lägenheten</NavLink>
        </div>
        <div className='contact'>
          <NavLink to="/contact" className="nav-link">Kontakt</NavLink>
        </div>
      </div>
    </div >
  );
}

export default Header;