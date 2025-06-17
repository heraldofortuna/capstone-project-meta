import React from 'react';
import Nav from './Nav';
import logo from './images/logo.png';
import './Header.css'
function Header()
{
    return(
        <header className="Header_site">
            <img src={logo} alt="little-lemon"/>
            <Nav/>
        </header>
    )
}
export default Header;