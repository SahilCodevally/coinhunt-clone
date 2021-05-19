import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink to="/">🚀 conihunt</NavLink>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <NavLink to="/coinForm">Add Coin</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
