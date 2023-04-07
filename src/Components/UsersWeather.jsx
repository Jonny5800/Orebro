import React from 'react'
import Axios from "axios"
import {useState} from "react"
// import {useEffect} from "react"


const UsersWeather = () => {
const[userLocation,setUserLocation]=useState(true)
//need to make it so the search remains at the bottom before the search
//Centre the "compare where you are"
//check the visual on heading labels showing with horizontal mobile
//make sure the footer remains at the bottom when content empty
const[userTemp,setUserTemp]=useState("")
const[userweather, setUserWeather]=useState("")
const[userDescription,setUserDescription]=useState("")
const[userWind,setUserWind]=useState("")
const[humidity, setHumidity]=useState("")
const[userCountry, setUserCountry]=useState("")
const[userCity, setUserCity]=useState("")
const[errorCode, setErrorCode]=useState(null)
const[errorTrue, setErrorTrue]=useState(false)
const errorMessage = "Please enter valid country / City names"
const country = userCountry
const city = userCity

const getWeather=()=>{
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=45965e86278e1d1806a35a380a87eeea`)
    .then((response)=>{
          console.log(response.data)
    setErrorTrue(false)   
    setUserLocation(response.data.name)
        let responseTempInKelvin = response.data.main.temp
        let tempInCelcius = responseTempInKelvin - 273.15
        let locationTemp = tempInCelcius.toFixed(2) 
    setUserTemp(locationTemp)
    setUserWeather(response.data.weather[0].main)
        let lowCaseDescription = response.data.weather[0].description
        let capitalisedDescription = lowCaseDescription.replace(/\b\w/g, (match) => match.toUpperCase())
    setUserDescription(capitalisedDescription)
    setUserWind(response.data.wind.speed)
    setHumidity(response.data.main.humidity)
              
    })
    .catch(error=>{
        setErrorCode(error)
        console.log(error + " gsghsfhg")
        console.log(errorCode + " error dude code")
        setErrorTrue(true)
    })
} 
const handleCountryChange = (event) =>{
    setUserCountry(event.target.value)
   }
   const handleCityChange = (event) => {
    setUserCity(event.target.value)
   }

  return (
    <div>
        
        <div className='userWeatherOutputDiv'>
            {            
            userLocation ? (<div>
            <h2 className='weatherOutputLocal'>Weather for {userLocation}</h2>
            <h4 className='weatherOutputLocal'>{userweather} ({userDescription})</h4>
            <h4 className='weatherOutputLocal'>Temperature: {userTemp}°C</h4>
            <h4 className='weatherOutputLocal'>Wind: {userWind}mph</h4>
            <h4 className='weatherOutputLocal'>Humidity: {humidity}%</h4>
            </div>) :(null)
            } 
        </div>
        
         {/* below here to be exported into UserWeatherSearch.jsx */}
         <div className='UserWeatherSearchDiv'>
          {/* <div>Visitor'ssss Weather</div> */}
          {errorTrue ? (null) : (<div></div>)}
          <input type="text" placeholder='Enter City' value={userCity} onChange={handleCityChange} />
          <input type="text" placeholder='Enter Country' value={userCountry} onChange={handleCountryChange}  />
          <button onClick={getWeather}>Click to Compare</button>
          {errorTrue && <div style={{color: "red", fontWeight: "bold"}}>{errorMessage}</div>}
        </div>
        {/* Above here to be exported into UserWeatherSearch.jsx */}
         
       
          
    </div>
  
  )
}

export default UsersWeather
