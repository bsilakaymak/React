import React from "react";
import CityName from "./CityName";
import Description from "./Description";
import Details from "./Details";
import RemoveButton from "./RemoveButton";
import { Link } from "react-router-dom";

const CityInfo = ({ cityWeather, remove }) => {
  return cityWeather.map(item => {
    return (
      <div id="info">
        <Link to={"/" + item.id} id="link-to-graph">
          <CityName item={item} />
          <Description item={item} />
          <Details item={item} />
        </Link>
        <RemoveButton handleOnClick={remove} item={item} />
      </div>
    );
  });
};

export default CityInfo;
