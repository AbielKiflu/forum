import React from "react";
import {Link } from 'react-router-dom';

import "./nav.scss";

 
 


export const Nav = ({
    children,
    type,
    onclick,

})=> {




    return (
 
         <nav className={`nav`}>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </nav>

    );

}
