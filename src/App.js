import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FoodAndDrink from "./Components/FoodAndDrink";
import SeeAndDo from "./Components/SeeAndDo";
import VisitorInformation from "./Components/VisitorInformation";
import WhereToStay from "./Components/WhereToStay";
import ThingsForKids from "./Components/ThingsForKids";

function App() {
  const location = useLocation();
  useEffect(() => {
    document.title = ` ${location.pathname} `;
  }, [location]);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/orebro" element={<HomePage />} />
          <Route path="foodanddrink" element={<FoodAndDrink />} />
          <Route path="seeanddo" element={<SeeAndDo />} />
          <Route path="VisitorInformation" element={<VisitorInformation />} />
          <Route path="wheretostay" element={<WhereToStay />} />
          <Route path="thingsforkids" element={<ThingsForKids />} />
        </Routes>
      </div>
      <footer className="keepBottom">
        <Footer className="appLevelFooter" />
      </footer>
    </div>
  );
}

export default App;
