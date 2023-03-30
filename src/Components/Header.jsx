import React from 'react'
import OrebroTower from "../Images/OrebroTower.jpg"
import {Link} from "react-router-dom"
import {useState} from "react"
import OrebroText from "../Images/OrebroText.png"

const Header = () => {
const[burgerActive, setBurgerActive]=useState(false)
const toggleBurger = ()=>{
  setBurgerActive(!burgerActive)
  console.log("burger clicked")
}
return (
<div className='header'>
  <div 
    className='OrebroHeaderList'>
  </div>
  <div>
    <Link to="/"><img src={OrebroTower} className="orebroTower" alt="OrebroTower"/></Link>
  </div>
  <div className='orebroList'>
  <Link to="/"><img className='orebroText' src={OrebroText} alt="OrebroText"/></Link>
    <div className='headerList'> 
      <ul className='seeAndDo'><Link to="SeeAndDo">Things to See and Do</Link></ul> 
      <ul className='foodAndDrink'><Link to="FoodAndDrink">Food & Drink</Link></ul>
      <ul className='visitorInformation'><Link to="visitorinformation">Visitor Information</Link></ul>
      <ul className='whereToStay'><Link to="wheretostay">Where to Stay</Link></ul>
      <ul className='thingsForKids'><Link to="thingsforkids">Things for Kids</Link></ul>
    </div>
  </div>
  <div>
    <button onClick={toggleBurger} className={`hamburger ${burgerActive ? 'is-active' : ''}`} >
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
</div>
)}
export default Header
