import React from 'react';
import Joke from './Joke';

const RandomJoke = ()=>{
    const [joke, setJoke] = React.useState({});
    React.useEffect(()=>{
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res=>res.json())
        .then(data=>setJoke(data))
    }, [])
    return(

      <Joke joke = { joke }/>

    )
}

export default RandomJoke;