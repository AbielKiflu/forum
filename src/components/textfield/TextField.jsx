import React from "react";
import "./textfield.scss";


const STYLEBACKGROUND=[
    "btn-primary",
    "btn-dark",
];

 


export const TextField = ({
    children,
    type,
    onclick,
    buttonStyle

})=> {

    const checkStyle=STYLEBACKGROUND.includes(buttonStyle)?buttonStyle:STYLEBACKGROUND[0];


    return (
        <input className={`textfield  ${checkStyle}`} onClick={onclick} type={type} />
 
    );

}
