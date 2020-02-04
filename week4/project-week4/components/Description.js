import React from "react";

const Description = ({ item }) => {
  return (
    <div style={{ padding: "0.5em 0" }}>
      <p style={{ fontWeight: "bold", fontSize: "1em" }}>
        {item.weather[0].main}
      </p>
      <p style={{ fontStyle: "italic" }}>{item.weather[0].description}</p>
    </div>
  );
};

export default Description;
