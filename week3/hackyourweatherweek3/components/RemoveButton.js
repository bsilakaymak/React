import React from "react";

const RemoveButton = ({ removeCity, item }) => {
  return (
    <button id="remove-button" onClick={() => removeCity(item.id)}>
      &#215;
    </button>
  );
};

export default RemoveButton;
