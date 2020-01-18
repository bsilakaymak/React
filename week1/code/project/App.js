import React from 'react';
import './App.css';
import CityWeather from './components/CityWeather';

function App() {
  return (
    <div className="App">
         <h1 style ={{textAlign:'center', padding:'1em'}}>Weather</h1>
         <CityWeather/>
       
    </div>
  );
}

export default App;
