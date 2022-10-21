

import { Link } from "react-router-dom";
import { Carrousel } from "../carrousel-Bootstrap/Carousel";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1 className="titleProjects" id="projects" 
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-offset="500"
        data-aos-duration="500"
        >
          Proyectos
        </h1>
        <div className="divider"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="500"
        data-aos-once="true"
        ></div>
        <div className="projectsAreaComplet" data-aos="zoom-in-right">


        <div className="areaConteiner">
          <div className="projectsItems">
            <img
              className="projectsImg"
              src="https://storage.googleapis.com/www-paredro-com/uploads/2019/05/MercadoLibre.jpg"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">MeLi Clon</div>
            </div>
          </div>
          <div className="projectsItems">
            <img
              className="projectsImg"
              src="https://assets.iproup.com/assets/jpg/2019/08/5599.jpg"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">e-commerce</div>
            </div>
          </div>
          <div className="projectsItems">
            <img
              className="projectsImg"
              src="https://png.pngtree.com/png-vector/20190110/ourlarge/pngtree-vector-list-icon-png-image_312699.jpg"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">ToDo List</div>
            </div>
          </div>

          <div className="projectsItems">
            <img
              className="projectsImg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">Techo ORG</div>
            </div>
          </div>

          <div className="projectsItems">
            <img
              className="projectsImg"
              src="https://lh3.googleusercontent.com/tORVpXxlc6FICvt5qtkIEuBhuvivwNLiv8EaGvvcTcFAmASS6JiDj9rEH5VYzWLWZyjgndiFnp4TjXhcML5Li2Sj=w640-h400-e365-rj-sc0x00ffffff"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">Snake Game</div>
            </div>
          </div>

          <div className="projectsItems">
            <img
              className="projectsImg"
              src="https://www.maxcf.es/wp-content/uploads/2018/03/diseno-web-profesional-1.jpg"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">Diseño web</div>
            </div>
          </div>

          <div className="projectsItems">
            <img
              className="projectsImg"
              src="https://d500.epimg.net/cincodias/imagenes/2021/05/17/lifestyle/1621272309_585275_1621272544_noticia_normal.jpg"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">Calendario offline y online </div>
            </div>
          </div>

          <div className="projectsItems">
            <img
              className="projectsImg"
              src="http://lideratuproyecto.com/wp-content/uploads/2019/05/iniciacion-y-planificacion-de-proyectos.jpg"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">Mas Proyectos...</div>
            </div>
          </div>

        </div>

        </div>
      <Carrousel/>

      <div className='divBotton' data-aos="flip-right" data-aos-duration="1000" data-aos-once="true">
        <Link className='buttonVerMas' to='/proyectos'>
          VER MAS
        </Link>

      </div>
      </div>

    </div>
  );
};
