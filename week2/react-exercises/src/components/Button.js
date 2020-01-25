import React from 'react';

const buttonStyle = {
    width:"10%",
    margin:"auto",
    outline:"none",
    border: "5px solid black",
    background: "yellow",
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