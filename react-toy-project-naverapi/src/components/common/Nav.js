import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  background: #34495e;
  width: 160px;
  height: 100vh;
  border-right: 1px solid rgba(26, 26, 26, 0.5);
`;

const ListUl = styled.ul`
  padding: 2em 0 0 0;
  margin: 0;
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 1em;
  text-align: center;
  a {
    text-decoration: none;
    color: #ecf0f1;
    font-size: 1.3em;
    font-weight: bold;
  }
`;

const Nav = () => {
  return (
    <NavWrap>
      <Router>
        <ListUl>
          <List>
            <Link to="/" exact="true">
              Home
            </Link>
          </List>
          <List>
            <Link to="/home">About</Link>
          </List>
          <List>
            <Link to="/">Users</Link>
          </List>
        </ListUl>
      </Router>
    </NavWrap>
  );
};

export default Nav;
