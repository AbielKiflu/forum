import React from "react";
import {NavLogin} from './nav/NavLogin';
import {NavLogout} from './nav/NavLogout';
import {Link} from 'react-router-dom'
import "./header.scss";


 


export const Header = ({isLoggedIn}) => {

    if(isLoggedIn) {
        return (
        <header className={`header header-primary`}>
            <Link to='/'> <p className='logo'>forum</p> </Link>
            <NavLogin/>
        </header>
        );
    }
    else
    {
        return (
            <header className={`header header-primary`}>
                <Link to='/'> <p className='logo'>forum</p> </Link>
                <NavLogout/>
            </header>
        );
    }
}
