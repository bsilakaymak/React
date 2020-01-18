import React from 'react';
import Hobby from './Hobbies';

const HobbyList = ()=> {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

  return hobbies.map((hobby, index) => <Hobby hobby={hobby} key={index} />);
}

export default HobbyList;
