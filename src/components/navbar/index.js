import React from "react";
import logo from './logo.png';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src={logo} />
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/signup"
                  activeStyle={{ color: 'black' }}
                >
                    Sign Up
                </NavLink>
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;