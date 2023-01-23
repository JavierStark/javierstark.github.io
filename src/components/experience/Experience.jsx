import React from 'react';
import './experience.css'
import {BsFillPatchCheckFill} from "react-icons/bs";
import Skill from "./Skill";

const Experience = () => {
  return (
    <section id={'section'}>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__off">
          <h3>Languages</h3>
          <div className="experience__content">
            <Skill Name={'C#'} Proficiency={'Advanced'}/>
            <Skill Name={'C++'} Proficiency={'Advanced'}/>
            <Skill Name={'C'} Proficiency={'Intermediate'}/>
            <Skill Name={'Python'} Proficiency={'Intermediate'}/>
            <Skill Name={'JavaScript'} Proficiency={'Intermediate'}/>
          </div>
        </div>
        <div className="experience__on">
          <h3>Frameworks and Software</h3>
          <div className="experience__content">
            <Skill Name={'Unity'} Proficiency={'Advanced'}/>
            <Skill Name={'P5.js'} Proficiency={'Advanced'}/>
            <Skill Name={'React'} Proficiency={'Intermediate'}/>
            <Skill Name={'Node'} Proficiency={'Basic'}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;