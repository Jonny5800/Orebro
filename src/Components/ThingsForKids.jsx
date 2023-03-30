import React from 'react'
import CannonKids from "../Images/CannonKids.jpg"

const ThingsForKids = () => {
  return (
    <div className='firstImageDiv '>
        <h1>Things for Kids</h1>
        <img src={CannonKids} className="cannonKids" alt="cannon Kids"/>
        <h5>image credit:https://homebasehungary.com/2020/01/01/new-year-celebration-in-orebro/ </h5>

    </div>
    
  )
}

export default ThingsForKids