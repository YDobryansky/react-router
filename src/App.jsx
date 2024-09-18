import React from 'react';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>

        <div className="page__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/*" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
