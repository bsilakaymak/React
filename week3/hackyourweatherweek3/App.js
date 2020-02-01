import React, {useEffect} from 'react';
import './App.css';
import CityWeatherApp from './components/CityWeatherApp';
function App() {
  useEffect(() => {
    document.title = "HackYourWeather"
 }, []);
  return (
    <div className="App">
         <h1 style ={{textAlign:'center', padding:'1em', color:"#0f4c75"}}>HackYourWeather</h1>
         <CityWeatherApp/>
       
    </div>
  );
}

export default App;
