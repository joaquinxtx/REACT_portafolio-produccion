import React from "react";
import { ItemsProyect } from "./ItemsProyect";
import { IoMdReturnLeft } from "react-icons/io";
import "./PageProyect.css";
import { Link } from "react-router-dom";

export const PageProjects = () => {
  return (
    <div className="fondoProyects">
      <div className="containerProyect">
        <div className="flexIcon">
          <Link to="/">
            <IoMdReturnLeft className="return" />
          </Link>
          <h1 className=" titleproyect " data-aos="fade-down">
            {"<"}
            Proyectos
            {"/>"}
          </h1>
        </div>

        <div className="displayGridProyect">
          <ItemsProyect
            img="https://img.unocero.com/2019/08/MercadoLibre.jpg"
            deQueTrata=" Calendario y anotaciones con autenticacion "
            description="Proyecto con service worked"
            nameProyect="Calendario MERN"
            tech="React.JS"
            tech2="typescript"
            tech3="styled-Components"
            tech4="npm "
            tech5="node"
            tech6="Service Worked"
            tech7="MongooDB"
          />
            <ItemsProyect
              img="https://cdn.shopify.com/s/files/1/0426/9209/articles/diseno-web-todo-lo-que-debes-saber_960x502_crop_center.jpg?v=1598655949960w"
              deQueTrata="Pagina con Login/logout donde podes anotar tareas y adjuntar archivos"
              description=""
              nameProyect="Journal Redux-Toolkin"
              tech="React.JS"
              tech2="JavaScript"
              tech3="styled-Components"
              tech4="Booststrap"
              tech5="patron solid"
              tech6="Firebase"
              tech7="Material UI"
              github='https://github.com/joaquinxtx/Lista-de-tareas'
              web='https://journal-reduxtoolkin.vercel.app/'
            />
          <ItemsProyect
            img="https://total-condo.com/wp-content/uploads/2022/02/Total-condo-logo-1000x1000-72ppp_Mesa-de-trabajo-1.png"
            deQueTrata=" 💼(Proyecto Real en al que estoy trabjando con un grupo)"
            description=""
            nameProyect="Total Condo mobil web"
            tech="React.JS"
            tech2="JavaScript"
            tech3="Redux Toolkin"
            tech4="Material UI"
            tech5="Node.js"
            tech6="SQL"
          />
          <ItemsProyect
            img="https://terreno.pe/wp-content/uploads/2020/07/FincaBonita-4.jpg"
            deQueTrata=" 💼( Proyecto Real en al que estoy trabjando con un grupo)"
            description=""
            nameProyect="Total Condo"
            tech="React.JS"
            tech2="JavaScript"
            tech3="Redux Toolkin"
            tech4="Material UI"
            tech5="Node.js"
            tech6="SQL"
          />
            <ItemsProyect
              img="https://miro.medium.com/max/1400/1*VTKsiByHMcWDIxpFawp4fg.png"
              deQueTrata=" 📑 ( Lista de Tareas )"
              description=""
              nameProyect="ToDo List"
              tech="React.JS"
              tech2="JavaScript"
              tech3="CSS"
              tech4="Booststrap"
              github='https://github.com/joaquinxtx/Lista-de-tareas'
              web='https://lista-jdev.netlify.app/'
            />
          <ItemsProyect
            img="https://img.freepik.com/vector-premium/juego-terminado-imagenes-predisenadas-pantalla-retro-arcade-juegos-consola-vintage-lanza-pantalla-azul-arranque-accion-vectorial_572038-26.jpg"
            deQueTrata=" 🐍 (Juego de Snake)"
            description=""
            nameProyect="Snake Game"
            tech="JavaScript"
            tech2="CSS"
            tech3="HTML"
            tech4="Sweet Alert"
            tech5="GIT"
            github='https://github.com/joaquinxtx/snake-juego'
            web='https://snake-juego-jdev.netlify.app/html/juego.html'
          />
          <ItemsProyect
            img="https://elceo.com/wp-content/uploads/2020/12/fotoarte-1.jpg"
            deQueTrata=" 🛒 ( Proyecto E-commerse  )"
            description=""
            nameProyect="E-commerse"
            tech="React.JS"
            tech2="JavaScript"
            tech3="styled-Components"
            tech4="Booststrap"
            tech5="patron solid"
            tech6="Firebase"
          />
          <ItemsProyect
            img="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/11/giphy.jpg?itok=1GnoR6Yd"
            deQueTrata=" 🎇 ( Consumiendo Api GIPHY )"
            description=""
            nameProyect="Buscador de gifs"
            tech="React.JS"
            tech2="JavaScript"
            tech3="CSS"
            tech4="Booststrap"
            tech5="Api GIPHY"
            github='https://github.com/joaquinxtx/Buscador-De-Gif'
            web='https://buscador-de-gif-mu.vercel.app/'
          />

          
          <ItemsProyect
            img="https://altamiraweb.net/wp-content/uploads/2020/05/las-mejores-agencias-de-dise%C3%B1o-web-de-Argentina-1024x537.jpg"
            deQueTrata="💻 ( Diseño web Responsive)"
            description=""
            nameProyect="Diseño Web 1"
            tech="HTML"
            tech2="SASS"
            github='https://github.com/joaquinxtx/coderhouse-web'
            web='https://coderhouse-web.vercel.app/'
          />
        </div>
      </div>
    </div>
  );
};
