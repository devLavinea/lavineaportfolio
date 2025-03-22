import React from 'react';

// import EarthCanvas from "./canvas/Earth";
// import BallCanvas from "./canvas/Ball";
// import ComputersCanvas from "./canvas/Computers";
 import StarsCanvas from "./canvas/Stars";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
// import CanvasLoader from "./components/Loader";

import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative flex-col items-center justify-center z-0 bg-primary'>
        <div className=' bg-custom bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About /> 
        <Experience /> 
       <Tech />
        <Works />
        <Feedbacks /> 
        <div className='relative z-0'>
           <Contact /> 
           <StarsCanvas /> 
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
