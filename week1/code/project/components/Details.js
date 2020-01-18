import React from 'react';


const Details = ({city, kelvinToCelcius})=>{
    return(
     <div style={{lineHeight:'1.5em'}}>
         <p>min temp: {kelvinToCelcius(city.main.temp_min)} °C</p>
         <p>max temp:  {kelvinToCelcius(city.main.temp_max)} °C</p>
         <p>location:  {city.coord.lon}, {city.coord.lat}</p>

     </div>
    )
}

export default Details;