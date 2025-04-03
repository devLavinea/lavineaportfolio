import React, { useState, useEffect } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // State to store the number of technologies to display
  const [visibleTechnologies, setVisibleTechnologies] = useState([]);

  // Function to update the visible technologies based on screen size
  const updateVisibleTechnologies = () => {
    const isSmallScreen = window.innerWidth <= 768; // You can adjust the breakpoint
    const halfTechnologies = isSmallScreen
      ? technologies.slice(0, Math.floor(technologies.length / 2)) // Show only half on small screens
      : technologies; // Show all technologies on larger screens
    setVisibleTechnologies(halfTechnologies);
  };

  // Effect to handle screen resizing
  useEffect(() => {
    updateVisibleTechnologies();
    window.addEventListener("resize", updateVisibleTechnologies);
    return () => {
      window.removeEventListener("resize", updateVisibleTechnologies);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {visibleTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
