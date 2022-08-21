import React from 'react'
import { Beginning } from './01-beginning/Beginning'
import { AboutMe } from './02-aboutMe/AboutMe'
import { Projects } from './03-projects/Projects'
import { Skill } from './04-skill/Skill'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { NavBar } from './navBar/NavBar'

export const PortfolioConteiner = () => {
  return (
    <>
        <NavBar/>
        <Beginning/>
        <AboutMe/>
        <Projects/>
        <Skill/>
        
    
    </>

  )
}
