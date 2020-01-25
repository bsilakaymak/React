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

const Button = ({getFriend})=>{
    return (
         <button style={buttonStyle} onClick = {getFriend}>Click to get a friend</button>
    )
}

export default Button;