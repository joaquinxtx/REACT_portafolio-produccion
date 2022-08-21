import { AiOutlineHome} from "react-icons/ai";
import {VscProject } from "react-icons/vsc";
import {MdEmail } from "react-icons/md";
import {GiSupersonicArrow } from "react-icons/gi";

import { BsFillEmojiSmileFill } from "react-icons/bs";

import React from 'react'
import './NavBar.css'


export const NavBar = () => {
  return (
    <div className='navigation'>
        <a href='#inicio'>
            <AiOutlineHome className='icon '/>
        </a>
        <a href='#aboutMe'>
            <BsFillEmojiSmileFill className='icon '/>
        </a>
        <a href='#projects'>
            <VscProject className='icon '/>
        </a>
        <a href='#skill'>
            <GiSupersonicArrow className='icon '/>
        </a>
        <a href='#redes'>
            <MdEmail className='icon '/>
        </a>
           
    </div>
  )
}