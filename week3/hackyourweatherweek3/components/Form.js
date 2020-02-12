import React from "react";

const Form = ({ getCity }) => {
  const [city, setCity] = React.useState("");
  const submit = e => {
    if (city === "undefined" || city.trim() === "") {
      return alert("Please type a valid input");
    } else {
      e.preventDefault();
      getCity(city);
      setCity(" ");
    }
  };

  return (
    <div className="form-area">
      <form style = {{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:"center"}}>
        <input
          className="input-area"
          placeholder="Search for a city"
          value={city}
          required
          autoComplete="off"
          onChange={e => {
            setCity(e.target.value);
          }}
        />
        <button className="submit-button" onClick={submit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
