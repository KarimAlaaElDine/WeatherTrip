import React from "react";
import { NewsContainer } from "./Store";

const Weather = props => {
  console.log(props.info);

  if (props.info.cod === 200) {
    console.log("props exist");

    return (
      <div>
        <div className="Desplayed">
          <h2>
            {props.info.name}, {props.info.sys.country}
          </h2>
          <h2>{props.info.weather[0].main}</h2>
          <h3 className="Temprature">
            {Math.round(props.info.main.temp - 273.15)}°C
          </h3>
        </div>
        <NewsContainer />
      </div>
    );
  } else {
    if (props.start) {
      return <h1 id="loading">Loading</h1>;
    }

    return (
      <div className="NotFound">
        <h2>{props.info.message}</h2>
      </div>
    );
  }
};

export default Weather;
