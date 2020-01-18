import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import Counter from './components/Counter';
function App() {
 
  return (
    <div className="App">
      <div style={{margin:'2em'}}>
      <HobbyList/>
      </div>

      <div style={{padding:'1em'}}>
        <Guarantee/>
      </div>

      <div style={{border:'1px solid pink', padding:'1em'}}>
        <Counter/>
      </div>
   
    </div>

  );
}

export default App;
