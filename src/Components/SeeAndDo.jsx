import React from 'react'
import WaterParkGustavsvik from "../Images/WaterParkGustavsvik.jpg"

const SeeAndDo = () => {
  return (
    <div>
        <div className='firstSeeAndDo'>
          <h1>Places to See Things to Do</h1>
          <img src={WaterParkGustavsvik} className="foodPics" alt="waterPark"/>
        </div>
    </div>
     
  )
}

export default SeeAndDo