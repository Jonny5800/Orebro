import React from 'react'
import CastleCropped from "../Images/CastleCropped.jpg"
import Map from './GoogleMap'
import WeatherDisplay from './WeatherDisplay'
import UsersWeather from './UsersWeather'
import MainPageGrid from './MainPageGrid'
// before a user Search, weather for "your search"
//make brckets round user description conditional  
//extra line to commit
//Use font awesome icons too
// Insta to add - https://www.instagram.com/explore/tags/%C3%B6rebro/?hl=en
// Youtube link to add - https://www.youtube.com/results?search_query=orebro
// Twitter link to add - https://mobile.twitter.com/giannis2221963/status/1373288274119303175
// Facebook link to add - https://www.facebook.com/places/Things-to-do-in-Orebro-Sweden/110611878960213/
//Inspired by "vitis cornwall" page
const HomePage = () => {
  
return (
<div>
  <div className='welcomeBanner '>
    <h1 className='welcomeMessage'>Say Hello to Örebro</h1>
    <img src={CastleCropped} alt="castleBackground" className='castleBackground'/>
  </div>
  <MainPageGrid/>
  <div>
    <h1 className='weatherDiv'>Compare your weather to <span className='home-page-blue-text'>&nbsp;Örebro</span></h1>
   

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
    <div className="city-video-div">
       <iframe  
  className='cityVideo' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7039943637970882561?compact=1" 
  frameBorder="1" allowFullScreen="" title="Embedded post">
  </iframe>
    </div>
 
</div>
)}

export default HomePage