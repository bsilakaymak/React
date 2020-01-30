import React from "react";
import CityName from "./CityName";
import Description from "./Description";
import Details from "./Details";
const infoStyle = {
  margin: "auto",
  width: "18em",
  border: "2px solid #0f4c75",
  padding: "2%",
  color: "#0f4c75",
  marginTop: "5%"
};
const CityInfo = ({ cityWeather }) => {
  if (cityWeather.cod >= 400) {
    return <h3 style={{ textAlign: "center" }}>Error</h3>;
  } else {
    return (
      <div style={infoStyle}>
        <CityName cityWeather={cityWeather} />
        <Description cityWeather={cityWeather} />
        <Details
          cityWeather={cityWeather}
          kelvinToCelcius={kelvin => {
            return (kelvin - 273).toFixed(2);
          }}
        />
      </div>
    );
  }
};
export default CityInfo;
