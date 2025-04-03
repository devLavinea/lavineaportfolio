import React from "react";
import "./index.css";

import StarsCanvas from "./canvas/Stars";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
// import Whatsapp from "./components/whatsapp";

const App = () => {
  return (
    <div className="relative flex-col items-center justify-center z-0 bg-primary">
      <div className="bg-custom bg-cover bg-no-repeat bg-center">
        {/* <Whatsapp /> */}
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
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
