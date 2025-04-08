import React, { useState, useEffect } from "react";
import Ball from "../canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechnologies, setVisibleTechnologies] = useState([]);

  const updateVisibleTechnologies = () => {
    const isSmallScreen = window.innerWidth <= 768;
    const filteredTechnologies = technologies.filter((tech) => {
      if (isSmallScreen) {
        return (
          tech.name === "TypeScript" ||
          tech.name === "Redux Toolkit" ||
          tech.name === "Tailwind CSS" ||
          tech.name === "Node JS" ||
          tech.name === "docker"
        );
      } else {
        return true;
      }
    });

    setVisibleTechnologies(filteredTechnologies);
  };

  useEffect(() => {
    updateVisibleTechnologies();
    window.addEventListener("resize", updateVisibleTechnologies);

    return () => {
      window.removeEventListener("resize", updateVisibleTechnologies);
    };
  }, []);

  return (
    <div className="flex   md:w-[100vw]  flex-row flex-wrap justify-center gap-10 ">
      <div className="flex   md:w-[85vw]  flex-row flex-wrap justify-center gap-10 ">
        {visibleTechnologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <Ball icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
