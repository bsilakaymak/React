import React, { useState } from "react";
import CityInfo from "./CityInfo";
import Form from "./Form";

const CityWeatherApp = () => {
  const [cityWeather, setCityWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [statusMessage, setStatusMessage] = useState(" ");
  const [feedback, setFeedback] = useState(
    "Type the city name to start searching"
  );
  function getCity(city) {
    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        const cities = cityWeather.filter(city => city.id !== data.id);
        if (data.cod === 200) {
          setCityWeather([data, ...cities]);
          setFeedback("Keep searching");
        }
        if (data.cod !== 200) setFeedback("CITY NOT FOUND");
        setStatusMessage("Success");
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }

  function removeCity(id) {
    const cities = cityWeather.filter(city => city.id !== id);
    setCityWeather(cities);
  }

  if (hasError) {
    return <h3 className="orangeMsg">Something Went Wrong</h3>;
  } else if (isLoading) {
    return <h3 className="orangeMsg">Loading...</h3>;
  } else {
    return (
      <div>
        <h3 className="orangeMsg">{feedback}</h3>
        <Form getCity={getCity} />
        {statusMessage === "Success" && (
          <CityInfo cityWeather={cityWeather} remove={removeCity} />
        )}
      </div>
    );
  }
};

export default CityWeatherApp;
