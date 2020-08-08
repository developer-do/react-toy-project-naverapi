import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" exact={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Users</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Nav;
