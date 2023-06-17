import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', text: 'OUR DEVELOPERS' },
  { to: '/add', text: 'ADD A DEV' },
];

const NavBar = () => (
  <nav className="flex flex-row">
    <h1 className="text-3xl font-bold">Kritek Devs</h1>
    <ul className="flex flex-row">
      {links.map((link) => (
        <li key={link.to} className="ml-6">
          <NavLink to={link.to} activeClassName="text-blue-500">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
