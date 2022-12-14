import React from 'react';
import './about.css';
import Me from '../../assets/Me.jpeg';
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
            <article className="about__card">
              <FaAward className={'about__icon'}/>
              <h5>Experience</h5>
              <small>5+ Years programming</small>
            </article>

            <article className="about__card">
              <FiUsers className={'about__icon'}/>
              <h5>Clients</h5>
              <small>1 Client Worldwide</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className={'about__icon'}/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
          <a href="#contact" className={'btn btn-primary'}>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;