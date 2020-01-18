import React from 'react';

const CityName = ({city})=>{

return <h1 style={{fontSize: '1.5em'}}>{city.name}, {city.sys.country}</h1>

}

export default CityName;