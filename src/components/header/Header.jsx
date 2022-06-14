import React from "react";
import {Nav} from './nav/Nav';
import {Link} from 'react-router-dom'
import "./header.scss";


 


export const Header = ()=> {

 
    return (
    <header className={`header header-primary`}>
        <Link to='/'> <p className='logo'>forum</p> </Link>
        <Nav/>
    </header>
    );

}
