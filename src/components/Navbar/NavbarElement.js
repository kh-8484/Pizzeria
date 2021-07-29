import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  /* box-shadow: 0px 15px 10px -15px #fff; */
`;

export const NavLink = styled(Link)`
  display: flex;
  color: #e9ba23;
  font-size: 2rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #e9ba23;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    margin-left: -2px;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  color: #e9ba23;
  margin-top: -10px;
  font-size: 2rem;
  transform: translate(-50%, 15%);
`;
