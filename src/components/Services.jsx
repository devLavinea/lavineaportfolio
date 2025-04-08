import React from "react";
import { motion } from "framer-motion"; // Importando o motion para animações
import Tilt from "react-parallax-tilt"; // Importação do motion
import { SectionWrapper } from "../hoc";
import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "../styles";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaPager } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import { fadeIn, textVariant } from "../utils/motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Dados dos cards
const cardData = [
  {
    id: 1,
    title: "Landing Pages",
    description:
      "Landing pages focadas em resultados, com design simples, CTAs atraentes e conteúdo persuasivo, sempre visando maximizar conversões e alcançar os objetivos do cliente.",
    buttonText: "Quero uma Landing Page",
    buttonLink:
      "https://wa.me/5574988248014?text=Olá%20Lavinea,%20preciso%20de%20uma%20Landing%20Page.%20Gostaria%20de%20discutir%20detalhes%20e%20obter%20mais%20informações.",
    icon: <FaPager />,
  },
  {
    id: 2,
    title: "Desenvolvimento de sites",
    description:
      "Criação de sites personalizados, incluindo portfólios, sites institucionais, sites corporativos e outros projetos. Sempre atendendo às necessidades específicas de cada cliente.",
    buttonText: "Quero um Web Site",
    buttonLink:
      "https://wa.me/5574988248014?text=Olá%20Lavinea,%20preciso%20de%20um%20Site%20.%20Gostaria%20de%20discutir%20detalhes%20e%20obter%20mais%20informações.",
    icon: <TbWorldWww />,
  },
  {
    id: 3,
    title: "Web Designer",
    description:
      "Criação de designs personalizados e responsivos. Meu objetivo é garantir uma experiência de usuário intuitiva e envolvente, com layouts que se adaptam a qualquer dispositivo.",
    buttonText: "Quero um Layout",
    buttonLink:
      "https://wa.me/5574988248014?text=Olá%20Lavinea,%20preciso%20de%20um%20Layout.%20Gostaria%20de%20discutir%20detalhes%20e%20obter%20mais%20informações.",
    icon: <MdOutlineDesignServices />,
  },
];

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="w-full ml-50px  h-auto flex items-start justify-center "
      >
        <section className="  w-full  flex  flex-col ">
          <motion.div
            className="   flex  items-center "
            variants={textVariant()}
          >
            <h2 className={`mb-15px ${styles.sectionHeadText}`}>
              <br></br>Serviços.
            </h2>
          </motion.div>

          <div className="  w-full flex  ">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-[#dfd9ff]  lg:w-[60vw] mt-3 text-secondary text-[18px]  lg:text-[23px] md:text-[25px] max-w-6xl leading-[30px] h-[8%]"
              >
              Crio landing pages otimizadas, com design responsivo e foco em
              conversão. Desenvolvo portfólios personalizados, destacando
              projetos de forma criativa e profissional. Também crio soluções de
              e-commerce sem backend, utilizando tecnologias front-end,
              garantindo sites rápidos, funcionais e fáceis de gerenciar.{" "}
            </motion.p>
          </div>

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper "
            breakpoints={{
              // Quando a largura da tela for maior que 640px
              480: {
                slidesPerView: 1, // Exibir 1 slide por vez
                spaceBetween: 10, // Espaço de 10px entre os slides
              },
              580: {
                slidesPerView: 2, // Exibir 1 slide por vez
                spaceBetween: 10, // Espaço de 10px entre os slides
              },
              // Quando a largura da tela for maior que 768px
              900: {
                slidesPerView: 3, // Exibir 2 slides por vez
                spaceBetween: 20, // Espaço de 20px entre os slides
              },
            }}
          >
            {cardData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="swiper-slide mb-15px">
                  <Tilt
                    options={{
                      max: 45, // Inclinação máxima
                      scale: 1, // Escala do efeito
                      speed: 450, // Velocidade de animação
                    }}
                    className="bg-secondary  rounded-2xl  w-[320px] h-[420px] lg:h-[370px] lg:w-[305px]"
                  >
                    <motion.div
                      className="swiper-card p-5  "
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Efeito de sombra no hover
                      }}
                    >
                      <div className="h-full flex flex-col items-center justify-around ">
                        <div className="text-[40px] h-[50px] text-[#544eff]">
                          {card.icon}
                        </div>
                        <h3 className="text-[20px] font-semibold">
                          {card.title}
                        </h3>
                        <p className="text-[16px] md:text-[19px] text-[#dfd9ff]">
                          {card.description}
                        </p>
                        <a href={card.buttonLink} target="_blank">
                          <button className="div-3 btn-default">
                            {card.buttonText}
                          </button>
                        </a>
                      </div>
                    </motion.div>
                  </Tilt>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
