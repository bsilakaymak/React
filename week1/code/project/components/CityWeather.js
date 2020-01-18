import React from 'react';
import CityData from './city.json';
import Description from './Description.js';
import CityName from './CityName.js';
import Details from './Details.js';

const CityWeather = ()=>{
    return CityData.map((city)=>{
        return(
            <div style = {{border:'2px solid black', margin:'10px', paddingLeft: '10px'}}> 
                <CityName city = {city}/>
                <Description city = {city}/>
                <Details city = {city} kelvinToCelcius = {(kelvin)=>{return (kelvin-273).toFixed(2)}}/>

            </div>
        )
    })
}

export default CityWeather;