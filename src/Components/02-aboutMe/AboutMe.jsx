import { GrDescend } from "react-icons/gr";
import './AboutMe.css'

export const AboutMe = () => {
  return (
    <div className='container' id='aboutMe'>
        <div className='titleAboutMe'>
            <h3>
                <p> {'<'} <span>/</span> {'>'} </p>
                Joaquin Toledo
            </h3>
            <h2>Front-End Developer</h2>
        </div>
        <div className='subTitleAboutMe'>
            <h1>
                Sobre Mi
            </h1>
            <div className="divider"></div>
            <p className='paragraph'>
              Hola mi nombre es Joaquin Toledo, apasionado por el diseño,
              desarrollo de sitios web . Diseño y desarrollo siempre con la idea
              que la diferencia está en los detalles. Mi objetivo principal es
              lograr que las personas puedan conectar con más personas, marcas,
              negocios y clientes utilizando medios digitales de una manera
              eficaz, sencilla y amigable, esto lo logro creando sitios webs
              responsivos, rápidos, fáciles de usar y construidos con las mejores
              prácticas.
            </p>
            <div className='dowlangCV'>
            <a
              href="https://drive.google.com/file/d/1P0eC75Q8zxj8S_dyMY_huwu774G7cVgt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
                <button className='buttonCV'>
                    <span>Descargar CV</span>
                    <div className='divIconCV'>
                        <GrDescend className="iconCV" />
                    </div>
                </button>
            </a>
            </div>

        </div>

    </div>
  )
}
