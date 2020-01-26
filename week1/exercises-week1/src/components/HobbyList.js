import React from 'react';
import Hobby from './Hobbies';

const HobbyList = ()=> {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

  return hobbies.map((hobby, index) =>(
      <ul>
        <Hobby hobby={hobby} key={index} />
      </ul>
  ))
}

export default HobbyList;
