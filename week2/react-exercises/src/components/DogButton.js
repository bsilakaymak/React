import React from 'react';

const buttonStyle = {
    width:"10%",
    margin:"auto",
    outline:"none",
    border: "3px solid black",
    background: "#3282b8",
    marginTop: "3%",
    padding:"1%",
    height: "3em",
    fontSize:"1em"
}

const DogButton = ({ getDogPhoto })=>{
    return(
        <button style={buttonStyle} onClick = { getDogPhoto }>Click</button>
    )
}
export default DogButton;

