import React from "react";
import "./index.css";
import { FaWhatsapp } from "react-icons/fa";

import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
      <div className="whatsapp w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[70px] lg:h-[70px] ">
      <a
        href="https://wa.me/5574988248014?text=Olá,%20Lavinea,%20vi%20seu%20portfólio%20e%20tenho%20interesse%20em%20obter%20mais%20informações."
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
    </div>
  );
};

export default App;
