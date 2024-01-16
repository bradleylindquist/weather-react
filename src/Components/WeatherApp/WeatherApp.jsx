import React from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import cloudy_icon from "../Assets/cloudy.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import sunny_icon from "../Assets/sunny.png";
import wind_icon from "../Assets/wind.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search city" />
        <div className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
