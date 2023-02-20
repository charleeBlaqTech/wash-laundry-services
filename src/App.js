import React, { Fragment} from "react";
import {Routes, Route} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar"
import Home  from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import WorkTeam from "./components/WorkTeam";
import Contact from "./components/Contact";


function App() {




  return (
    <Fragment>
      <NavBar/>
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/team" element={<WorkTeam/>}/>
          <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
