import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: 120px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  background-image: url(./gysd.png);
  margin-left: -10%;
  margin-top: 1%;
  width: 110px;
  height: 50px;
  left: 188px;
  top: 177px;
`;

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background: #EBECF0;
    outline: none;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 48px;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &:hover {
    color: gray;
    }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;