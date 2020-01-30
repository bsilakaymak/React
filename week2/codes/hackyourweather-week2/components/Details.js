import React from "react";

const Details = ({ cityWeather, kelvinToCelcius }) => {
  return (
    <div style={{ lineHeight: "1.5em" }}>
      <p>min temp: {kelvinToCelcius(cityWeather.main.temp_min)} °C</p>
      <p>max temp: {kelvinToCelcius(cityWeather.main.temp_max)} °C</p>
      <p>
        location: {cityWeather.coord.lon}, {cityWeather.coord.lat}
      </p>
    </div>
  );
};

export default Details;
