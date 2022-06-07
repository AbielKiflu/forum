import React from "react";
import {Nav} from './nav/Nav';
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
        <p className='logo'>forum</p>
        <Nav/>
    </header>
    );

}
