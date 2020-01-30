import React from "react";

const CityName = ({ cityWeather }) => {
  return (
    <h1 style={{ fontSize: "1.5em" }}>
      {cityWeather.name}, {cityWeather.sys.country}
    </h1>
  );
};

export default CityName;
