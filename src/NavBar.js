import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

/** Navigation bar for sites. Shows up on every page. 
 * 
 * Props: 
 * - none
 * 
 * State: 
 * - none 
 * 
 * App -> NavBar
*/

function NavBar() {
  console.debug("* NavBar");

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
        Après-Ski-Me
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/snacks">Snacks</NavLink>
          </NavItem>

          <NavItem>
            <NavLink exact to="/drinks">Drinks</NavLink>
          </NavItem>

          <NavItem>
            <NavLink exact to="/additem">Add An Item</NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
