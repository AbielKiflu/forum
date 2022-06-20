import React from "react";
import {Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


import "./nav.scss";
export const NavLogin = ({
    children,
    type,
    onclick,

})=> {
    function  handleClick(e) {
            document.querySelector('#nav').classList.toggle('navShow');
        }
    return (
         <>
            <span className="MenuOpen" onClick={handleClick}> <FaBars/></span>
            <nav className='nav' id="nav">
                <Link to='/'>Home</Link>
                <Link to='/Boards'>Boards</Link>
                <Link to='/logout'>Logout</Link>
            </nav>
         </>
    );

}
