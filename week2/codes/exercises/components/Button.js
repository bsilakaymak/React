import React from 'react';

const buttonStyle = {
    width:"10%",
    margin:"auto",
    outline:"none",
    border: "4px solid black",
    background: "#3282b8",
    marginTop: "3%",
    padding:"1%",
    height: "5em"
}

const Button = ({handleOnClick, text})=>{
    return (
         <button style={buttonStyle} onClick = {handleOnClick}>{text}</button>
    )
}

export default Button;