import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";

import "./Skill.css";

export const Skill = () => {
  return (
    <div className="containerSkill">
      <div className="container " id="skill">
        <h1 className="titleFormacion">Tecnologias</h1>
        <div className="divider"></div>
        <p
          className="paragraph"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <b>React Js:</b>React con TypeScript,React-Router-dom , Rutas Hijas,
          MaterialUI , StyledComponents , Context , HOOKS , Redux Toolkin , Firebase
          ,Lazyload y Suspense, Patrones de creación de componentes (Compound
          Components Pattern , Extensible Styles Pattern ,  Function Child
          Pattern, Custom State Initializer + Function Child
          pattern), Storybook , Service Worker
          <br/>
          
          <b>TYPESCRIPT , JAVASCRIPT , NEXT.JS </b> 
          <br />
          <b>MongooDB , SQL</b>
          <br />
          <b>HTML , CSS </b> 
          <br />
          <b>GIT , NPM , GITHUB, DOCKER </b>   
        </p>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-once="true"
        >
          <FaHtml5 className="fa-brands fa-html5 tech-icon html-icon" />
          <IoLogoCss3 className="fa-brands fa-css3-alt tech-icon css-icon" />
          <DiSass className="fa-brands fa-sass tech-icon sass-icon" />
          <SiBootstrap className="fa-brands fa-bootstrap tech-icon bootstrap-icon" />
          <IoLogoJavascript className="fa-brands fa-js tech-icon js-icon" />
          <FaReact className="fa-brands fa-python tech-icon python-icon" />
          <BiGitRepoForked className="fa-brands fa-git-alt tech-icon git-icon" />
          <AiFillGithub className="fa-brands fa-github tech-icon github-icon" />
          <SiNextdotjs className="fa-brands  tech-icon " />
        </div>
        <h1 className="titleFormacion">¿Qué servicios Ofrezco?</h1>
        <div className="divider"></div>
        <p
          className="paragraph"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          Actualmente diseño, rediseño sitios web con mi stack de tecnologías
          Front-end .Estoy continuamente aprendiendo y adquiriendo nuevas
          habilidades en función a las actuales y futuras demandas y tendencias
          tecnológicas en el campo del diseño para poder generar un buen impacto
          al usuario que ingrese al sitio web .
        </p>
        <h1 className="titleFormacion">Formacion</h1>
        <div className="divider"></div>
        <p
          className="paragraph"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          Termine mi formación Front-End en el bootcamp de CoderHouse aun asi
          sigo de forma autodidacta aprendiendo múltiples lenguajes y
          tecnologías para el desarrollo optimo de una aplicación web siempre
          teniendo en cuenta las buenas practicas para un código limpio y usando
          las ultimas tecnologías del mercado.{" "}
        </p>
        <p
          className="paragraph"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          Cursos de Udemy:
          <br />
          React de cero a Experto Fernando Herrera
          <br />
          React con typescript lleva tus bases a otro nivel Fernando Herrera
          <br />
          Next Js de cero a experto Fernando Herrera <br />
          SQL básico{" "}
        </p>
      </div>
    </div>
  );
};
