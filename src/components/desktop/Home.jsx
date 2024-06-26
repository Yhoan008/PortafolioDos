import React, { useContext, useEffect, useState } from "react";

import background from "./../../assets/background.png";
import music from "./../../assets/headphone.png";
import downIcon from "./../../assets/downIcon.png";
import mail from "./../../assets/mail.png";
import linkedin from "./../../assets/linkedin.png";
import git from "./../../assets/git.png";
import wha from "./../../assets/wha.png";

import Particles from "./Particles";

import { ScrollerContext } from "./../../context/Scroller";

export default function Home() {
  const scroller = useContext(ScrollerContext);

  // < 768 es tomado por movil
  return (
    <div className="w-full h-[55vw] bg-[#9C9B99] relative flex justify-center items-center ">
      <div className="absolute w-full h-full z-10 text-white flex flex-row ">
        <div className="flex justify-center flex-col items-center w-full p-10 ">
          <h1 className="mr-[50%] font-['Itim'] ">HOLA! SOY</h1>
          <h1 className="font-['Irish_Grover'] text-4xl ">YHOAN MATEO</h1>
          <h1 className="font-['Itim'] ml-[70%] w-full ">
            DESARROLLADOR Y DISEÑADOR WEB
          </h1>
        </div>
        <div className="flex flex-col justify-end items-end m-[100px] w-full gap-4 ">
          <div className="flex flex-row gap-4 ml-3 mb-4 ">
            <a href="#" className="w-9 h-10">
              <img src={mail} alt="icon Mail" className="w-full" />
            </a>
            <a href="#" className="w-9 h-10">
              <img src={git} alt="icon Git" className="w-full" />
            </a>
            <a href="#" className="w-9 h-10">
              <img src={wha} alt="icon WahtsApp" className="w-full" />
            </a>
            <a href="#" className="w-9 h-10">
              <img src={linkedin} alt="icon Linkedin" className="w-full" />
            </a>
          </div>
          <button className="flex h-[20px] justify-center items-center gap-2 bg-[#E9D985] p-2 box-content rounded-xl ">
            <h1 className="font-['Itim'] text-xl text-black font-bold ">CV</h1>
            <div className="h-full ">
              <img
                src={downIcon}
                alt="Download Icon"
                className="h-[100%] w-auto "
              />
            </div>
          </button>
        </div>
      </div>
      {/* Elemento Canvas */}
      <Particles />
      <img
        src={background}
        alt="Figure Fond"
        className="w-[100%] absolute right-0 bottom-2 z-0 "
      />
      <div
        className={` w-[${window.innerWidth}px] h-[${window.innerWidth}px] shadow-[inset_0_0_0_350px_black] absolute z-20 rounded-full `}
      />
      {/*       
      
      Componente basado en la anterior pagina de portafolio ----- Es estudio UI
      <Shadow />  
      
      */}
      <div
        className="w-[135px] h-[135px] fixed left-0 right-0 top-0 m-auto flex items-center justify-center transition z-30 "
        style={{
          transform: `translateY(${
            scroller > 80 ? -2.6 : 17 - scroller / 4
          }vw) scale(${scroller > 60 ? 40 : 100 - scroller}%) `,
        }}
      >
        <div className=" w-full h-full absolute rounded-full bg-[#E9995E] " />
        <div className="w-10 h-10  absolute bottom-4 flex justify-center items-center">
          <Line state={8} />
          <Line state={15} />
          <Line state={25} />
          <Line state={15} />
          <Line state={8} />
        </div>
        <img
          src={music}
          alt="Music Play"
          className="w-[80%] h-[80%] absolute "
        />
      </div>
    </div>
  );
}

function Shadow() {
  const [shadowActive, setShadowActive] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShadowActive(false);
    });
  });

  // inset de 800px

  return (
    <div
      className="w-[250vh] h-[250vh] absolute transition-shadow z-20  rounded-full -translate-y-20"
      style={{
        boxShadow: `inset 0 0 0 ${shadowActive == true ? 800 : 0}px black`,
      }}
    />
  );
}

function Line({ state }) {
  // Variacion en heigh de 2 a 6
  // aca estoy usando una animacion prediseñada desde tailwind.config.js

  return (
    <div
      className="w-[5px] h-6 bg-black rounded mx-[2px] animate-[musicBar_1s_ease-in-out_infinite] delay-1000 "
      style={{ height: `${state}px` }}
    />
  );
}
