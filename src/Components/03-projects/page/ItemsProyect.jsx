import React from "react";
import 'react-bootstrap'
import "./ItemProyect.css";

export const ItemsProyect = ({img,alt,nameProyect,deQueTrata,description,tech2,tech3,tech4,tech5,tech6,tech}) => {
  return (
    <div className="gridItemProyect " data-aos="fade-up"data-aos-delay="100"
    data-aos-duration="700">
        <div className="divImgProycto"data-aos="flip-right"data-aos-delay="100"
            data-aos-duration="700">
            <img src={img} alt={alt} className="imgProyectItem" />

        </div>
      
      <div className="divGridItem">
        <h2 >
          {nameProyect}
          <span >{deQueTrata} </span>
        </h2>

        <p >
          {description}
        </p>

        <h3 >Tecnolog&iacute;as utilizadas:</h3>

        <ul className=" tech-used">
          <li>{tech} </li>
          <li>{tech2} </li>
          <li>{tech3} </li>
          <li>{tech4} </li>
          <li>{tech5} </li>
          <li>{tech6} </li>
          
        </ul>
      </div>
    </div>
  );
};
