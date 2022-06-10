import React from "react";
import {Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';


import "./nav.scss";

 
 


export const Nav = ({
    children,
    type,
    onclick,

})=> {




    return (
         <>
            <span className="MenuOpen">
                <FaBars/>
            </span>
            <nav className={`nav`}>
            <span className="MenuClose">
                <FaTimes/>
            </span>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
         </>


    );

}
