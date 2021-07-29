import React from "react";
import { Nav, NavLink, Bars, NavIcon } from "./NavbarElement";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
      </Nav>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </>
  );
}

export default Navbar;
