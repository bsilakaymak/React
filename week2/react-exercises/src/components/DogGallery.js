import React, {useState} from 'react';
import DogButton from './DogButton';
import DogPhoto from './DogPhoto';
import Error from './Error';
import Loading from './Loading';


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
        return <Error/>
    }else if(isLoading){
        return <Loading/>
    }else{
        return(
            <div style={dogGalleryStyle}>
                <h3>{indexMessage}</h3>
                <DogPhoto dogPhoto = { dogPhoto }/>
                <DogButton getDogPhoto = { getDogPhoto }/> 
            </div>
           
        )
    }
    
}

export default DogGallery;