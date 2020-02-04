import React, { useState } from "react";
import CityInfo from "./CityInfo";
import Form from "./Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CityDetails from './pages/CityDetails'
import Loading from "./Loading";

const CityWeatherApp = () => {
  const [cityWeather, setCityWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [feedback, setFeedback] = useState(
    "Type the city name to start searching"
  );
  function getCity(city) {
    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        const cities = cityWeather.filter(city => city.id !== data.id);
        if (data.cod === 200) {
          setCityWeather([data, ...cities]);
          setFeedback("Search another city");
        }
        if (data.cod !== 200) setFeedback("CITY NOT FOUND");
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
    return <Loading/>;
  } else {
    return (
      <Router>
        <Route exact path = '/'>
          <div>
            <h3 className="orangeMsg">{feedback}</h3>
            <Form getCity={getCity} />
            {cityWeather && (
              <CityInfo cityWeather={cityWeather} remove={removeCity} />
            )}
          </div>
        </Route>
        <Route exact path = '/:cityId'>
          <CityDetails/>
        </Route>
      </Router>
    );
  }
};

export default CityWeatherApp;
