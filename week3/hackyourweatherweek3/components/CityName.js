import React from "react";

const CityName = ({ item }) => {
  return (
    <h1 style={{ fontSize: "1.5em" }}>
      {item.name}, {item.sys.country}
    </h1>
  );
};

export default CityName;
