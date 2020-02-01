import React from 'react';

const ulStyle = {
  listStyleType :"none",
  padding:"0",
  margin:"0",
}

const FriendProfile = ({friend})=>{

    return (
        <ul style={ulStyle}>
          <li>{friend.name.first} {friend.name.last}</li>
          <li>{friend.location.postcode}</li>
          <li>{friend.location.street.name} {friend.location.street.number}</li>
          <li>{friend.location.country}</li>
          <li>{friend.email}</li>
          <li>{friend.cell}</li>
        </ul>
      );
    };
    
export default FriendProfile