import React from 'react';
import './nav.css'
import {BsHouse} from "react-icons/bs";
import {AiOutlineUser, AiOutlinePhone} from "react-icons/ai";
import {BiBookBookmark} from 'react-icons/bi'
import {MdOutlineWorkOutline, MdLightbulbOutline} from 'react-icons/md'
import {useState} from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#"
         className={activeNav === '#' ? 'active' : ''}
         onClick={() => setActiveNav('#')}
      ><BsHouse/></a>
      <a href="#about"
         className={activeNav === '#about' ? 'active' : ''}
         onClick={() => setActiveNav('#about')}
      ><AiOutlineUser/></a>
      <a href="#skills"
         className={activeNav === '#skills' ? 'active' : ''}
         onClick={() => setActiveNav('#skills')}
      ><MdLightbulbOutline/></a>
      <a href="#portfolio"
         className={activeNav === '#portfolio' ? 'active' : ''}
         onClick={() => setActiveNav('#portfolio')}
      ><BiBookBookmark/></a>
      <a href="#contact"
         className={activeNav === '#contact' ? 'active' : ''}
         onClick={() => setActiveNav('#contact')}
      ><AiOutlinePhone/></a>
    </nav>
  );
};

export default Nav;
