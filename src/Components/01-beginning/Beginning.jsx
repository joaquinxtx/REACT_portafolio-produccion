import React from "react";

import jt from "./img/jt.jpg";
import img from "./img/jota2.jpg";

import "./Beginning.css";

export const Beginning = () => {
  return (
    <>
      <header className=" containerBeginning" id="inicio">
        <div className="container">
          <h1 className="fa-brands fa-js tech-icon js-icon title titleJT">
            {"<"}
            <img className="jt" src={jt} alt="" />
            {"/>"}
          </h1>
          <div className="  containerFoto">
            <img className="imgHome" src={img} alt="imgHome" />
          </div>
          <div className="nameTitle">
            <p>¡Hola mundo!</p>
            <h1>
              Soy <span className="titleSpan">Joaquin</span>
            </h1>
          </div>
          <div className="typewrite-box">
            <p>
              <a
                href="https://github.com/joaquinxtx"
                className="typewrite"
                data-period="2000"
                data-type='[ "Desarrollador en progreso", "Innovación y diseño", "Desarrollo Front-End", " (: <3 </>" ]'
              >
                <span className="wrap"></span>
              </a>
            </p>
          </div>
        </div>
      </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,32L1440,224L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};
let TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  let elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute("data-type");
    let period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #6721e9}";
  document.body.appendChild(css);
};
