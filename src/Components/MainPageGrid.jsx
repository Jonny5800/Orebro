  import Hotel from "../Images/MainPageGrid/Hotel.jpg";
  import KidsPlay from "../Images/MainPageGrid/KidsPlay.jpg";
  import FoodFestival from "../Images/MainPageGrid/FoodFestival.jpg";
  import ThingsToDo from "../Images/MainPageGrid/ThingsToDo.jpg";
  import VisitorGuides from "../Images/MainPageGrid/VisitorGuides.jpg";
  import Skiing from "../Images/MainPageGrid/Skiing.jpg";
  import MusicGig from "../Images/MainPageGrid/MusicGig.jpg";
  import "./MainPageGridCSS.css"
  import MainPageGridGif from './MainPageGridGif'
  import { useState } from "react"

  const MainPageGrid = () => {
    
  const [gifBtnClicks, setGifBtnClicks]=useState(0)
  const changeGifFunc = () => {
      setGifBtnClicks(gifBtnClicks => gifBtnClicks +1 )
      console.log(`Gif change button clicked ${gifBtnClicks} times `)
      }



    const gridItemImage1 = {
      backgroundImage: `url(${Hotel})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
    const gridItemImage2 = {
      backgroundImage: `url(${KidsPlay})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
    const gridItemImage3 = {
      backgroundImage: `url(${ThingsToDo})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat"
    }
        const centerStyle ={
    backgroundImage: `url(${MainPageGridGif})`,
      display: "flex",
      flexDirection: "column"
  }
    const gridItemImage4 = {
      backgroundImage: `url(${FoodFestival})`,
      backgroundSize: "140% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",

    }
    const gridItemImage6 = {
      backgroundImage: `url(${VisitorGuides})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat"
    }
    const gridItemImage7 = {
      backgroundImage: `url(${MusicGig})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat"
    }
    const gridItemImage8 = {
      backgroundImage: `url(${Skiing})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }

   return (
    
  
    <div>
  <h1 className="grid-header">See what <span className="blue-text">Örebro</span> has to offer </h1>
<div className="grid-container">

    <div className="grid-item" id="item1" style={gridItemImage1}>1</div>
    <div className="grid-item" id="item2" style={gridItemImage2}>2</div>
    <div className="grid-item" id="item3" style={gridItemImage3}>3</div>
    <div className="grid-item" id="item4" style={gridItemImage4}>4</div>
      <div className="grid-item" id="item5" style={centerStyle}>
        <MainPageGridGif numBtnClicks={gifBtnClicks} newGif={changeGifFunc} />
        <button id="grid-button" onClick={changeGifFunc} >Change Gif</button>
 
      </div>
    <div className="grid-item" id="item6" style={gridItemImage6}>6</div>
    <div className="grid-item" id="item7" style={gridItemImage7}>7</div>
    <div className="grid-item" id="item8" style={gridItemImage8}>8</div>
</div>

</div>
  )
}

export default MainPageGrid