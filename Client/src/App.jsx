import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar"
import About from "./Pages/About/About"
import Packages from "./Pages/Packages/Packages"
import FAQs from "./Pages/FAQs/FAQs"
import Itinerary from "./Pages/Itinerary/Itinerary"



function App() {

  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Packages/> */}
    {/* <FAQs/> */}
    <Itinerary/>
    <Footer/>
    
    </>
  );
}

export default App;
