import React from "react";

const RemoveButton = ({ handleOnClick, item }) => {
  return (
    <button id="remove-button" onClick={() => handleOnClick(item.id)}>
      &#215;
    </button>
  );
};

export default RemoveButton;
