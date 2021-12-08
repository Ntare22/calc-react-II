import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: '1',
    path: '/',
    name: 'Home',
  },
  {
    id: '2',
    path: '/calculator',
    name: 'Calculator',
  },
  {
    id: '3',
    path: '/quote',
    name: 'Quote',
  },
];
const NavBar = () => (
  <header>
    <h1>Math Magicians</h1>
    <ul>
      {links.map((link) => <NavLink className="nav-link" key={link.id} to={link.path}>{link.name}</NavLink>)}
    </ul>
  </header>
);

export default NavBar;
