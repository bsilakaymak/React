import React from "react";

const Description = ({ cityWeather }) => {
  return (
    <div style={{ padding: "0.5em 0" }}>
      <p style={{ fontWeight: "bold", fontSize: "1em" }}>
        {cityWeather.weather[0].main}
      </p>
      <p style={{ fontStyle: "italic" }}>
        {cityWeather.weather[0].description}
      </p>
    </div>
  );
};

export default Description;
