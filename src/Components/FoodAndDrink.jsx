import React from 'react'
import PotatoPancakes from "../Images/PotatoPancakes.jpg"

const FoodAndDrink = () => {
  return (
    <div className='FoodPage'>
        <h1 className='FoodTitle'>The Food and Drink Page</h1>
        <div className='firstFoodDiv'>
          <a href="https://sweden.se/culture/food/10-things-to-know-about-swedish-food#main-content">
          <img src={PotatoPancakes} className="foodPics mainFoodPic" alt="PotatoPancakes"/></a>
          <h4><a href="https://sweden.se/culture/food/10-things-to-know-about-swedish-food">Click to see more Typical Foods</a></h4>
        </div>
   </div>
    
  )
}

export default FoodAndDrink