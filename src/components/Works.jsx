import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { works } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { Pagination, Navigation } from "swiper/modules";

const WorkCard = ({ name, description, tags, image, path }) => {
  return (
    <motion.div
      className="w-full relative"
      variants={fadeIn("up", "spring", 0.5, 0.75)}
    >
      <div className="bg-tertiary  h-[440px] rounded-2xl flex flex-col justify-between">
        {" "}
        {/* Nova div envolvendo o Tilt */}
        <Link className="h-full w-full" to={path}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="relative h-[30vh] md:h-[25vh] mb-15px lg:h-[30vh]"
          >
            <img
              src={image}
              alt="project_image"
              className="w-full  object-fiil  rounded-2xl"
            />
          </Tilt>
        </Link>
        <div className=" h-[40vh] ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 div-6 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 div-3">
          {tags.map((tag, index) => (
            // Usando o índice no key para garantir unicidade
            <p
              key={`${name}-${tag.name}-${index}`}
              className={`text-[14px] div-4 ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="lg:w-[100vw] lg:h-[103vh] h-[114vh] md:h-[90vh] flex items-center justify-center">
      <section className=" lg:h-[105vh] h-[116vh] md:h-[90vh] w-[95vw] ml-[20px] flex flex-col px-4 py-8">
        <div
          className="w-full md:h-[18vh] h-[16vh] "
          
        >
          <p className={styles.sectionSubText}>Meu trabalho</p>
          <h2 className={styles.sectionHeadText}>Projetos.</h2>
        </div>

        <div className="w-full flex lg:h-[0vh] h-[20vh] md:h-[5vh]">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-[#dfd9ff] lg:w-[60vw] mt-3 text-secondary text-[19px] lg:text-[23px] md:text-[25px] max-w-6xl leading-[30px] h-[8vh]"
          >
            A seguir, apresento projetos que demonstram
             minhas habilidades e experiência por meio de 
             exemplos práticos do meu trabalho. Cada projeto
              é exibido ao vivo em um frame, proporcionando uma 
            visão clara e detalhada do meu processo e resultados.
          </motion.p>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full"
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {works.map((work, workIndex) => (
            <SwiperSlide key={`${work.name}-${workIndex}`}>
              <WorkCard
                name={work.name}
                description={work.description}
                tags={work.tags}
                image={work.image}
                source_code_link={work.source_code_link}
                path={work.path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default SectionWrapper(Works, "work");
