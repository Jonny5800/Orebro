import React from 'react'
import OrebroSign from "../Images/OrebroSign.jpg"

const VisitorInformation = () => {
  return (
    <div className='firstImageDiv'>
        <h1>Visitor Information</h1>
        <img className='visitorInformationImg' src={OrebroSign} alt="OrebroSign"/>
        <h5>Image credit: http://www.bussville.se/%C3%96vriga%20Bilder/%C3%96rebro/index.html</h5>
    </div>
    
  )
}

export default VisitorInformation