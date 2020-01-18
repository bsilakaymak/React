import React from 'react';

const Details = ({city})=>{
    return(
     <div style={{lineHeight:'1.5em'}}>
         <p>min temp:  {city.main.temp_min}</p>
         <p>max temp:  {city.main.temp_max}</p>
         <p>location:  {city.coord.lon}, {city.coord.lat}</p>

     </div>
    )
}

export default Details;