import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

import './Network.css'

export const Network = () => {
  return (
    <div className='network'>
        <div className="container">
            <h1 className="titleProjects" id='redes'>
                Redes
            </h1>
            <div className="divider"></div>
            <div className="containerIcons">
                <div className='iconsNetwork'><a href="mailto:thejotex1998@gmail.com"><SiGmail className="fa-brands  tech-icon-redes gmail-icon"/></a><span>Thejotex1998@gmail.com</span> </div>
                <div className='iconsNetwork'><a href="https://www.instagram.com/joaquinxtx/"><FaInstagramSquare className="fa-brands  tech-icon-redes instagram-icon"/></a><span>Joaquinxtx</span> </div>
                <div className='iconsNetwork'><a href="https://www.linkedin.com/in/joaquin1998/"><BsLinkedin className="fa-brands  tech-icon-redes linkdin-icon"/></a><span>Joaquin Toledo</span></div>
                <div className='iconsNetwork'><a href="https://www.facebook.com/joaquina.toledo.90/"><BsFacebook className="fa-brands  tech-icon-redes facebook-icon"/></a><span>Joaquin Toledo</span></div>
                <div className='iconsNetwork'><a href="https://github.com/joaquinxtx"><AiFillGithub className="fa-brands  tech-icon-redes github-icon"/></a><span>Joaquinxtx</span></div>
            </div>
        </div>

    </div>
  )
}
