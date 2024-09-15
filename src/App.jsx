import Header from "./componets/Header/index";
import Home from "./Pages/Home/index";
import Services from "./Pages/Services/index";
import Portfolio from "./Pages/Portfolio/index";
import AboutMe from "./Pages/AboutMe/index";
import { Routes, Route, Router } from "react-router-dom";
import Footer from "./componets/Footer";
import Contact from "./Pages/Contact/index";

function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element = { <Home /> } />
      <Route exact path="/services" element = { <Services /> } />
      <Route exact path="/portfolio" element = { <Portfolio /> } />
      <Route exact path="/AboutMe" element = { <AboutMe /> } />
      <Route exact path="/Contact" element ={ <Contact /> } />
    </Routes>
    <Footer />
      
    </>
  )
}

export default App
