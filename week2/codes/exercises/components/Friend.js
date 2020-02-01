import React, {useState} from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';



const friendStyle = {
    borderBottom:"10px solid #3282b8",
    padding:"2%",

}

function Friend(){
    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const userMessage = friend.name ? "Click More!!" : "Get your first friend by clicking"
    function getFriend(){
        setLoading(true);
        fetch('https://www.randomuser.me/api?results=1')
        .then(res => res.json())
        .then(data=>{
          setFriend(data.results[0]);
          setLoading(false);
        })
        .catch(err=>{
          setError(true);
          setLoading(false);
        })
    }

    if(hasError) {
      return <h1>Error!!!</h1>
  }else if(isLoading){
      return <h1>Loading...</h1>
  }else{
      return(
       <div style = {friendStyle}>
         <h3>{userMessage}</h3>
         {friend.name && <FriendProfile friend = { friend }/>}
         <Button handleOnClick = { getFriend } text = 'Click to get a friend'/>

       </div>      
      )
  }
   
  }
  





export default Friend;