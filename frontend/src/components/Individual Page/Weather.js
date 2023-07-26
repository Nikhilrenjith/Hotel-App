import React, { useEffect, useState } from "react";
import { WiHumidity, WiBarometer, WiCloudyWindy } from "weather-icons-react";
import jsonp from "jsonp";

const Weather = ({ city, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        setWeatherData(data);
        console.log(weatherData);
      }
    });
  }, [city, apiKey]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="weather">
      <p>{city}</p>
      <div className="cityname">
        <p className="temp">{weatherData.main.temp.toFixed(1)}°c</p>
      </div>
      <p>{weatherData.weather[0].main}</p>
      <div className="attrb">
        <div>
          <p>
            <strong>High:</strong>
            {weatherData.main.temp_max.toFixed(0)}°c
          </p>
          <p>
            <strong>Low:</strong>
            {weatherData.main.temp_min.toFixed(0)}°c
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
