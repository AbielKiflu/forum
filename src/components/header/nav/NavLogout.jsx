import React from "react";
import {Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


import "./nav.scss";

 
 


export const NavLogout = ({
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
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
         </>


    );

}
