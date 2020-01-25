import React, {useState} from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';
import Error from './Error';
import Loading from './Loading';


const friendStyle = {
    borderBottom:"10px solid #3282b8",
    padding:"2%",

}

function Friend(){
    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [indexMessage, setIndexMessage] = useState('Get your first friend by clicking');

    function getFriend(){
        setLoading(true);
        fetch('https://www.randomuser.me/api?results=1')
        .then(res => res.json())
        .then(data=>{
          setFriend(data.results[0]);
          setLoading(false);
          setIndexMessage('Click More!!');
          console.log(friend);

        })
        .catch(err=>{
          setError(true);
          setLoading(false);
        })
    }

    if(hasError) {
      return <Error/>
  }else if(isLoading){
      return <Loading/>
  }else{
      return(
       <div style = {friendStyle}>
         <h3>{indexMessage}</h3>
         {indexMessage === 'Click More!!' && <FriendProfile friend = { friend }/>}
         <Button getFriend = { getFriend }/>

       </div>      
      )
  }
   
  }
  





export default Friend;