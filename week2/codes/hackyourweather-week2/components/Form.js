import React from 'react';

const formStyle = {
    width: "15em",
    margin:"auto",
    display: "flex",
    flexDirection: "column"
  };

const buttonStyle = {
    width:"30%",
    margin:"auto",
    outline:"none",
    border: "none",
    background: "#3282b8",
    marginTop: "5%",
    padding:"1%",
    height: "3em",
    color:"#1b262c",
    fontFamily:"Arial",
}

const inputStyle = {
    border : "none",
    height: "1.75em",
    borderBottom: "2px solid #0f4c75",
    fontSize:"1.5em",
}

const Form = ({getCity})=>{
    const [city, setCity] = React.useState('');
    const submit = e => {
        e.preventDefault();
        getCity(city);
        setCity(" ");
      };
   
    
    return(
        <div style = {formStyle}>
            <input placeholder="Search for a city"style={inputStyle} value={city}required onChange ={(e)=>{setCity(e.target.value)}} />
            <button style = {buttonStyle} onClick = { submit }>Search</button>
        </div>
        
    )
}

export default Form;