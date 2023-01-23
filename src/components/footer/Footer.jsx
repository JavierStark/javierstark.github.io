import React from 'react';
import './footer.css';
import {FaDiscord, FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className={'footer__logo'}>Javier Torralbo</a>

      <ul className={'permalinks'}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://discordapp.com/users/449292174996013067"><FaDiscord/></a>
        <a href="https://www.linkedin.com/in/javier-torralbo-0ab132220"><FaLinkedin/></a>
        <a href="https://github.com/JavierStark"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Javier Torralbo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
