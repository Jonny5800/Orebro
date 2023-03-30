import React, { useState, useEffect } from 'react';

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);
  const locationSearched = 'Orebro';
  const selectedCountry = 'Sweden';
  const API_KEY = '45965e86278e1d1806a35a380a87eeea';

  useEffect(() => {
    async function fetchWeatherData() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationSearched},${selectedCountry}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      
    }
    fetchWeatherData();
  }, [locationSearched, selectedCountry, API_KEY]);

  if (!weatherData) {
    return <div>Loading...</div>; 
  }

  const { name } = weatherData;
  const  description  = weatherData.weather[0].description;
  const  main  = weatherData.weather[0].main;
  const { temp, humidity } = weatherData.main;
  const celciusTemp = (temp - 273.15).toFixed(2)
  const  wind   = weatherData.wind.speed
  
  //console.log(weatherData.wind.speed + " thats speed")
  console.log(weatherData)
  console.log(weatherData.weather[0].description + " the description")
 
  return (
    <div>
      <h2 className='weatherOutputOrebro'>Weather for {name}</h2>
      <h4 className='weatherOutputOrebro'>{main} ({description}) </h4>
      <h4 className='weatherOutputOrebro'>Temperature: {celciusTemp}°C</h4>
      <h4 className='weatherOutputOrebro'>Wind: {wind}mph</h4>
      <h4 className='weatherOutputOrebro'>Humidity: {humidity}%</h4>
    </div>
  );
}

export default WeatherDisplay;
