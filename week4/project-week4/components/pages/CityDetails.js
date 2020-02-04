import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Loading from "../Loading";

const CityDetails = () => {
  const { cityId } = useParams();
  const history = useHistory();
  const back = () => history.goBack();

  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [graphData, setGraphData] = useState({});
  function fetchGraphData() {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setGraphData(data);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }
  useEffect(fetchGraphData, []);

  if (isLoading) return <Loading />;
  if (hasError) return <h3 className="orangeMsg">Something Went Wrong</h3>;
  return (
    <div className="weather-details">
      <h3 className="orangeMsg">
        {graphData.city && graphData.city.name},{" "}
        {graphData.city && graphData.city.country} - 5 Days Forecast{" "}
      </h3>
      <ResponsiveContainer width="75%" height={250}>
        <AreaChart data={graphData.list}>
          <XAxis stroke="#0f4c75" dataKey="dt_txt" />
          <YAxis stroke="#0f4c75" />
          <Tooltip />
          <Area
            type="monotone "
            dataKey="main.temp"
            name="main temperature"
            stroke="#f88e1e"
            fill="#3282b8"
          />
        </AreaChart>
      </ResponsiveContainer>

      <button className="goback-button" onClick={back}>
        Go Back
      </button>
    </div>
  );
};

export default CityDetails;
