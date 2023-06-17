import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', text: 'OUR DEVELOPERS' },
  { to: '/next_link', text: 'NEXT LINK' },
];

const NavBar = () => (
  <nav className="flex flex-row items-center bg-white px-24 border border-gray-300">
    <h1 className="text-3xl font-bold text-cyan-500 py-6">Kritek Devs</h1>
    <ul className="flex items-center gap-3 py-6">
      {links.map((link) => (
        <li key={link.to} className="ml-6">
          <NavLink
            className="no-underline text-gray-300 hover:text-gray-700"
            to={link.to}
            activeClassName="active"
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
