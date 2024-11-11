import React from 'react';
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import Skill from "./Skill";

const Experience = () => {
  return (
    <section id={'section'}>
      <h5>Skills I have</h5>
      <h2>Main Skills</h2>

      <div className="container experience__container">
        <div className="experience__off">
          <div className="experience__content">
            <Skill><strong>C#/.NET</strong> Development</Skill>
            <Skill><strong>Backend</strong> Development with Cloud Deployment (ASP.NET, Azure)</Skill>
            <Skill><strong>Game Development</strong> (Unity, Godot)</Skill>
            <Skill><strong>Basic Frontend Development</strong> (React, Flutter)</Skill>
          </div>
        </div>
        <div className="experience__on">
          <div className="experience__content">            
            <Skill><strong>Unit Testing</strong> & TDD</Skill>
            <Skill><strong>Code Refactoring</strong> & <strong>Clean Code</strong> Practices</Skill>
            <Skill><strong>XP & Agile</strong> Methodologies (Pair/Mob Programming)</Skill>
            <Skill><strong>Competitive Programming</strong> (C++)</Skill>
            <Skill><strong>Communicative</strong>/Teaching skills</Skill>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;