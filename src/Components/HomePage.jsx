import React from 'react'
import CastleCropped from "../Images/CastleCropped.jpg"
import Map from './GoogleMap'
import WeatherDisplay from './WeatherDisplay'
import UsersWeather from './UsersWeather'

// before a user Search, weather for "your search"
//make brckets round user description conditional

const HomePage = () => {
  
return (
<div>
  <div className='welcomeBanner'>
    <h1 className='welcomeMessage'>Say Hello to Örebro</h1>
    <img src={CastleCropped} alt="castleBackground" className='castleBackground'/>
  </div>
  <div>
    <h1 className='weatherDiv'>Compare where you are to Örebro</h1>
    <div className='WeatherFlexBox'>
      <div className='orebroWeather'>
        <WeatherDisplay /> 
      </div>
      <div className='localWeather'>
        <UsersWeather/>
      </div>
    </div>
  </div>
    <div className="mapDiv firstImageDiv">
      <Map className="googleMap"/> 
    </div>
  <iframe 
  className='cityVideo' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7039943637970882561?compact=1" 
  frameBorder="1" allowFullScreen="" title="Embedded post">
  </iframe>
</div>
)}

export default HomePage