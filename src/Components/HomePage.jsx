import React from 'react'
import CastleCropped from "../Images/CastleCropped.jpg"
// import CurrentWeather from "../Components/CurrentWeather" WORKING - but not being used
import Map from './GoogleMap'
import WeatherDisplay from './WeatherDisplay'
import UsersWeather from './UsersWeather'
// import UserWeatherOutput from './UserWeatherOutput'

const HomePage = () => {
  
return (
<div>
  <div className='welcomeBanner'>
    <h1 className='welcomeMessage'>Say Hello to Örebro</h1>
    <img src={CastleCropped} alt="castleBackground" className='castleBackground'/>
  </div>
  <div>
    <h1 className='weatherDiv'>Compare where you are to Örebro</h1>
    {/* <CurrentWeather/> */}

    <div className='WeatherFlexBox'>
        
        <div className='orebroWeather'>
        <WeatherDisplay /> 
        {/* weather display is fixed on orebro */} 
        </div>
        
        <div className='localWeather'>
        <UsersWeather/>
        {/* users weather is the whole search */}
        </div>

    </div>
    {/* <UserWeatherOutput/> */}
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