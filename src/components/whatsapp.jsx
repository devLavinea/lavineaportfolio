import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="whatsapp w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[70px] lg:h-[70px] ">
      <a
        href="https://wa.me/5574988248014?text=Olá,%20Lavinea,%20vi%20seu%20portfólio%20e%20tenho%20interesse%20em%20obter%20mais%20informações."
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Whatsapp;
