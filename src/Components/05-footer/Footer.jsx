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
                    
                    <a href="https://www.linkedin.com/in/joaquin1998/"><BsLinkedin  className="icon-network"/>Linkedin</a>
                </li>
                <li>
                    
                    <a href="https://github.com/joaquinxtx"><AiFillGithub  className="icon-network"/>GitHub</a>
                </li>
                <li>
                    
                    <a href="mailto:thejotex1998@gmail.com"><SiGmail className="icon-network"/>Gmail</a>
                </li>
                <li>
                    
                    <a href="https://www.facebook.com/joaquina.toledo.90/"><BsFacebook  className="icon-network"/>Facebook</a>
                </li>
                <li>
                    
                    <a href="https://www.instagram.com/joaquinxtx/"><FaInstagramSquare  className="icon-network"/>Instagram</a>
                </li>
            </div>
        </div>
    )
}