

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
              src="https://assets.iproup.com/assets/jpg/2019/08/5599.jpg"
              alt=""
            />
            <div className="projectSubTitleHover">
              <div className="projectSubTitle">e-commerce</div>
            </div>
          </div>

        </div>

        </div>
      <Carrousel/>
      </div>

    </div>
  );
};
