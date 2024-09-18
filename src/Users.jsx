import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import User from './User';

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <NavLink to="github">Github</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="facebook">Facebook</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<span>Select a user please</span>} />
        <Route path=":userId" element={<User />} />
      </Routes>
    </div>
  );
};

export default Users;
