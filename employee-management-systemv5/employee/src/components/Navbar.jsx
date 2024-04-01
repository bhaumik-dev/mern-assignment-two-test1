import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employee/create">Create Employee</Link>
        </li>
        <li>
          <Link to="/employee/table">Employee Table</Link>
        </li>
        <li>
          <Link to="/employee/details">Employee Details</Link>
        </li>
        <li>
          <Link to="/employee/search">Employee Search</Link>
        </li>
        <li>
          <Link to="/employee/update">Employee Update</Link>
        </li>
        <li>
          <Link to="/employee/delete">Employee Delete</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
