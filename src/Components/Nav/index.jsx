import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'
const Nav = () => {
  return (
    <nav>
      <h1>Logo 🍉</h1>

      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">
            products
          </NavLink>
        </li>
      </ul>
      <div className="buttons">

        <NavLink to="/login" >
          <button className='Button-L' >Log in</button>
        </NavLink>     
          <NavLink to="/sigup" >
          <button className='Button-S' >Sig up</button>
        </NavLink>
      </div>

    </nav>
  );
};

export default Nav;