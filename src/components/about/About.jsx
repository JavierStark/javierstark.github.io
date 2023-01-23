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
            <a href={'#experience'}>
              <article className="about__card">
                <FaAward className={'about__icon'}/>
                <h5>Experience</h5>
                <small>5+ Years programming</small>
              </article>
            </a>

            <a href={'#testimonials'}>
              <article className="about__card">
                <FiUsers className={'about__icon'}/>
                <h5>Lessons</h5>
                <small>20+ lessons taught</small>
              </article>
            </a>

            <a href={'#portfolio'}>
              <article className="about__card">
                <AiFillFolderOpen className={'about__icon'}/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </a>
          </div>

          <p>
            Self taught programmer with more than 5 years learning countless technologies from game
            development to machine learning.</p>
          <p>Experienced in team work and leadership managing game development international teams and publishing in
            Google Play.</p>
          <p>Eager to learn new technologies, languages and frameworks as well as to teach others the way I would have
            wanted to be taught</p>

          <a href="#contact" className={'btn btn-primary'}>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;