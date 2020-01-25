import React from 'react';
import './App.css';
import City from './components/City';
function App() {
  return (
    <div className="App">
         <h1 style ={{textAlign:'center', padding:'1em', color:"#0f4c75"}}>HackYourWeather</h1>
         <City/>
       
    </div>
  );
}

export default App;
