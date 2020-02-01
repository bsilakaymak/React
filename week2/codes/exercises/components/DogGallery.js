import React, {useState} from 'react';
import DogPhoto from './DogPhoto';
import Button from './Button';


const dogGalleryStyle = {
    display:"flex",
    flexDirection:"column",
    borderBottom:"10px solid #3282b8",
    padding:"2%",

}

const DogGallery = ()=>{
    const [dogPhoto, setDogPhoto] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [indexMessage, setIndexMessage] = useState('Get your first dog by clicking');
    function getDogPhoto(){
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data=>{
            setDogPhoto(data.message);
            setLoading(false);
            setIndexMessage('Keep clicking')
        })
        .catch(err => {
            setLoading(false);
            setError(true);
        })
    }
    if(hasError) {
        return <h1>Error!</h1>
    }else if(isLoading){
        return <h1>Loading...</h1>
    }else{
        return(
            <div style={dogGalleryStyle}>
                <h3>{indexMessage}</h3>
                <DogPhoto dogPhoto = { dogPhoto }/>
                <Button handleOnClick = { getDogPhoto } text = 'Click'/> 
            </div>
           
        )
    }
    
}

export default DogGallery;