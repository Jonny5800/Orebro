import React from 'react'
import OrebroTower from "../Images/OrebroTower.jpg"
import {Link} from "react-router-dom"
import {useState} from "react"

import OrebroTextTwo from "../Images/OrebroTextTwo.png"

const Header = () => {
const[burgerActive, setBurgerActive]=useState(false)
const toggleBurger = ()=>{
  setBurgerActive(!burgerActive)
  console.log("burger clicked")
}
return (
<header className='header'>
  <div 
    className='OrebroHeaderList'>
  </div>
  <div>
    <Link to="/orebro"><img src={OrebroTower} className="orebroTower" alt="OrebroTower"/></Link>
  </div>
  <div className='orebroList'>
    <Link to="/orebro"><img className='orebroText' src={OrebroTextTwo} alt="OrebroTextTwo"/></Link>
    <nav className='headerList'> 
      <ul className='seeAndDo'><Link to="SeeAndDo"><h1>Things to See and Do</h1></Link></ul> 
      <ul className='foodAndDrink'><Link to="FoodAndDrink"><h1>Food & Drink</h1></Link></ul>
      <ul className='visitorInformation'><Link to="visitorinformation"><h1>Visitor Information</h1></Link></ul>
      <ul className='whereToStay'><Link to="wheretostay"><h1>Where to Stay</h1></Link></ul>
      <ul className='thingsForKids'><Link to="thingsforkids"><h1>Things for Kids</h1></Link></ul>
    </nav>
  </div>
  <div>
    <button onClick={toggleBurger} className={`hamburger ${burgerActive ? 'is-active' : ''}`} 
    aria-label="Toggle Nav Menu">
      <div 
        className='bar'>
      </div>
    </button>
  </div>
  
    <nav className={`menu-list ${burgerActive ? 'is-active' : ''}`}>
      <ul onClick={toggleBurger}><Link to="SeeAndDo">Things to see and do</Link> </ul> 
      <ul onClick={toggleBurger}><Link to="FoodAndDrink">Food & Drink</Link> </ul>
      <ul onClick={toggleBurger}><Link to="visitorinformation">Visitor Information</Link></ul>
      <ul onClick={toggleBurger}><Link to="wheretostay">Where to stay</Link></ul>
      <ul onClick={toggleBurger}><Link to="thingsforkids">Things for Kids</Link></ul>
  </nav>
</header>
)}
export default Header
