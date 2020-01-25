import React from 'react';

const photoStyle = {
    width: "50%",
    display:"inline-block",
    margin:"auto"

}

const DogPhoto = ({dogPhoto}) =>{
        return(
       <img  style={photoStyle} src= {dogPhoto} alt= "" />    
    )     
    
}

export default DogPhoto;