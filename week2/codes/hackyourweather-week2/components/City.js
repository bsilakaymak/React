import React, { useState } from "react";
import CityInfo from "./CityInfo";
import Form from "./Form";

const City = () => {
  const [cityWeather, setCityWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [indexMessage, setIndexMessage] = useState("Weatherrr!");
  function getCity(city) {
    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setCityWeather(data);
        setIndexMessage("Success");
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }

  if (hasError) {
    return <p>Error</p>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <Form getCity={getCity} />
        {indexMessage === "Success" && <CityInfo cityWeather={cityWeather} />}
      </div>
    );
  }
};

export default City;
