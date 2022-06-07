import React from "react";
import {Nav} from './nav/Nav';
import {Link} from 'react-router-dom'
import "./header.scss";


const STYLEBACKGROUND=[
    "header-primary",
    "header-dark",
];



export const Header = ({
    headStyle
})=> {

    const checkStyle=STYLEBACKGROUND.includes(headStyle)?headStyle:STYLEBACKGROUND[0];

    return (
    <header className={`header ${checkStyle}`}>
       
        <Link to='/'> <p className='logo'>forum</p> </Link>
        <Nav/>
    </header>
    );

}
