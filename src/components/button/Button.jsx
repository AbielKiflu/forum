import React from "react";
import "./button.scss";


const STYLE=[
    "btn-primary",
    "btn-danger",
    "btn-success",
    "btn-warning"
];

const SIZE =[
    "btn-sm",
    "btn-md",
    "btn-lg"
]




export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize

})=> {

    const checkStyl=STYLE.includes(buttonStyle)?buttonStyle:STYLE[0];



    return (
        <button className={`btn  ${checkStyl}`} onClick={onclick} type={type} >
            {children}
        </button>
    );

}
