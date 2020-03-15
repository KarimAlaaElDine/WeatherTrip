import React, { useState } from "react";
import Weather from "./Weather";

const Search = () => {
  const [location, updateLocation] = useState("Berlin,DE");
  const [info, updateInfo] = useState("");
  const [start, updateStart] = useState(false);

  async function requestWeather(location) {
    const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7f5458f173edd4a153e8fed1eb393ed4`;
    const promise = fetch(WEATHER_URL);
    promise
      .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function(processedPromise) {
        updateInfo(processedPromise);
        console.log(processedPromise);
      })
      .catch(function() {
        updateInfo({
          name: "Country not found"
        });
      });
    console.log(info);
  }

  return (
    <div className="search-in">
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("IN");
          updateStart({ start: true });
          location ? requestWeather(location) : console.log("nope");
        }}
      >
        <label htmlFor="location">
          Please enter a location:
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>

        <button className="Button">Search</button>
      </form>
      <Weather info={info} start={start} />
    </div>
  );
};

export default Search;
