import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElement";
import { FaShoppingCart } from "react-icons/fa";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { Redirect } from "react-router-dom";

function Sidebar({ isOpen, toggle }) {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      return <Redirect to="/" />;
    }
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/pizza">Pizzas</SidebarLink>
        <SidebarLink to="/dessert">Desserts</SidebarLink>
        <SidebarLink to={user ? "/checkout" : "/signin"}>
          Cart <FaShoppingCart /> ({basket?.length})
        </SidebarLink>
        <SidebarLink to="/">Hello {!user ? "Guest" : user.email}</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap onClick={handleAuthentication}>
        <SidebarRoute to={user ? "/" : "/signin"}>
          {user ? "Sign Out" : "Sign In"}
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
