// Works but This is not being used

import React, { useState, useEffect } from 'react'
import Axios from "axios"


const CurrentWeather = () => {
    const API_Key = "3857155a831a5b4da099e4540bf8282c"
    const API_URL = "http://api.weatherstack.com/current"
    const[locationQuery, setLocationQuery]=useState("Orebro Sweden")
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        Axios.get(API_URL, {
            params: {
                access_key: API_Key,
                query: locationQuery 
            }
        })
        .then(response => {
            setWeatherData(response.data);
        })
        .catch(error => {
            console.error(error)
        })
    }, []);

    console.log('weatherData:', weatherData);

    return (
    <div>
      <div>CurrentWeather</div>
      {weatherData ? (
        <div>
          <div>
            Temperature: {weatherData.current.temperature} &#8457;
          </div>
          <div>Humidity: {weatherData.current.humidity}%</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CurrentWeather








































