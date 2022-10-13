import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import './Footer.css'
export const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className='footerDiv1'>
                <h2 id='redes'>Descripcion</h2>
                <p>Portfolio digital de Joaquin Andres Toledo, aquí voy a ir guardando todos los avances que tenga como profesional de la materia que tanto me encanta. </p>
            </div>
            
            <div className='footerDiv3'>
                <h2>Contacto</h2>
                <li>
                    <BsLinkedin  className="icon-network"/>
                    <a href="https://www.linkedin.com/in/joaquin1998/">Linkedin</a>
                </li>
                <li>
                    <AiFillGithub  className="icon-network"/>
                    <a href="https://github.com/joaquinxtx">GitHub</a>
                </li>
                <li>
                    <SiGmail className="icon-network"/>
                    <a href="mailto:thejotex1998@gmail.com">Gmail</a>
                </li>
                <li>
                    <BsFacebook  className="icon-network"/>
                    <a href="https://www.facebook.com/joaquina.toledo.90/">Facebook</a>
                </li>
                <li>
                    <FaInstagramSquare  className="icon-network"/>
                    <a href="https://www.instagram.com/joaquinxtx/">Instagram</a>
                </li>
            </div>
        </div>
    )
}