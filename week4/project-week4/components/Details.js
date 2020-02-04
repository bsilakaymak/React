import React from "react";

const Details = ({ item }) => {
  return (
    <div style={{ lineHeight: "1.5em" }}>
      <p>min temp: {item.main.temp_min} °C</p>
      <p>max temp: {item.main.temp_max} °C</p>
      <p>
        location: {item.coord.lon}, {item.coord.lat}
      </p>
    </div>
  );
};

export default Details;
