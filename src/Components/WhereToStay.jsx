import React from 'react'
import SwedishHome from "../Images/SwedishHome.jpg"

const WhereToStay = () => {
  return (
    <div className="firstImageDiv">
        <h1>Where to stay</h1>
        <img className='whereToStayImg' src={SwedishHome} alt="swedishHome"/>
        <h5>Image Credit:https://thespaces.com/wp-content/uploads/2017/06/Swedish-property-for-sale-Villa-Ulfsbo-13.jpg</h5>

    </div>
    

  )
}

export default WhereToStay