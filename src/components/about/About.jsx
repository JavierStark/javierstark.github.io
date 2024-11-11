import React from 'react';
import './about.css';
import Me from '../../assets/MeBg.jpeg';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {AiFillFolderOpen} from "react-icons/ai";

const About = () => {
  return (
    <section id={'about'}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          </div>
          <p>Hello! I'm a computer science student at the University of Málaga with extensive experience in competitive programming, game development, and software engineering. I specialize in backend development, using .Net with a Agile practices and CI/CD pipelines.</p>
          <p>Throughout my academic journey, I've actively participated in various programming competitions, winning the Ada Byron Programming Tournament and the Excellence Award in Development and Best Practices during Malackathon.</p>
          <p>When I'm not coding, I enjoy teaching programming to others, offering private lessons and helping classmates strengthen their technical skills.</p>
          <a href="#contact" className={'btn btn-primary'}>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;