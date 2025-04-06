import React from "react";
import "./index.css";

import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp.jsx";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";

import Stars from "./canvas/Stars";



const App = () => {
  return (
    <div className="relative flex-col items-center justify-center z-0 bg-primary overflow-x-hidden w-full">
      <div className="bg-custom bg-cover bg-no-repeat bg-center">
        <Whatsapp /> 
        <Navbar />
        <Cta />
        <Hero />
      </div>
      <Works />
      <Experience />
      <Tech />
      <Services />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <Stars/>
      </div>
    </div>
  );
};

export default App;
