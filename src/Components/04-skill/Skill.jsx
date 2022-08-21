import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";

import './Skill.css'


export const Skill = () => {
  return (
    <div className='container' id='skill'>
        <h1 className='titleFormacion'>
            Formacion
        </h1>
        <div className='divider'></div>
        <p className='paragraph' data-aos="fade-up"
           data-aos-anchor-placement="bottom-bottom">
          Termine mi formacion Front-End en el bootcamp de CoderHouse
          aprendiendo multiples lenguajes y tecnologias para el desarrollo
          optimo de una aplicacion web siempre teniendo en cuenta las buenas
          practicas para un codigo limpio y usando las utimas tecnologias del
          mercado.{" "}
        </p>
        <p className='paragraph'data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
          Cursos de Udemy:
          <br />
          React de cero a Experto Fernando Herrera(Terminado)
          <br />
          React con typescript lleva tus bases a otro nivel Fernando Herrera
          (60%)
          <br />
          Next Js de cero a experto Fernando Herrera(25%) <br />
          SQL basico (terminado)
        </p>
        <h1 className='titleFormacion'>
            ¿Qué servicios Ofrezco?
        </h1>
        <div className='divider'></div>
        <p className='paragraph' data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
          Actualmente diseño, rediseño sitios web con mi stack de tecnologias
          Front-end .Estoy continuamente aprendiendo y adquiriendo nuevas
          habilidades en función a las actuales y futuras demandas y tendencias
          tecnológicas en el campo del diseño para poder generar un buen impacto
          al usuario que ingrese al sitio web .
        </p>
        <h1 className='titleFormacion'>
            Tecnologias
        </h1>
        <div className='divider'></div>
        <p className='paragraph' data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
            <b>HTML .</b> <br />
            <b>CSS:</b> Bootstrap,SASS,VariablesCSS,Tailwind,Responsive Web Design
            <br />
            <b>JavaScript :</b> sweetAlert ,Jquery, Redux .<br />
            <b>React Js:</b>React-Router-dom , MaterialUI, StyledComponents,
            Context , HOOKS ,Redux Toolkin,Firebase ,MERN ,CRUD.
            <br />
            <b>Typescript.</b> <br />
            <b> GIT</b> <br />
            <b>GITHUB.</b>
        </p>
        <div data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">

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

    </div>
  )
}
