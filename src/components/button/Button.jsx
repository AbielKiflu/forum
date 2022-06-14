import React from "react";
import "./button.scss";


const STYLEBACKGROUND=[
    "btn-primary",
    "btn-dark",
];

 


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle

})=> {

    const checkStyle=STYLEBACKGROUND.includes(buttonStyle)?buttonStyle:STYLEBACKGROUND[0];


    return (
        <button className={`btn  ${checkStyle}`} onClick={onClick} type={type} >
            {children}
        </button>
    );

}
