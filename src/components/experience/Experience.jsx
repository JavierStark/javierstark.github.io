import React from 'react';
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import Skill from "./Skill";
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id={'skills'}>
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        Technical Expertise
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="container experience__container">
        <motion.div 
          className="experience__off"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3>Backend & .NET</h3>
          <motion.div 
            className="experience__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Skill><strong>C# & .NET</strong> Development</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>ASP.NET</strong> Core & Web APIs</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Azure</strong> Cloud Platform</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>TDD</strong> & Unit Testing (xUnit)</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Clean Code</strong> & Refactoring</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>CI/CD</strong> Pipelines</Skill>
            </motion.div>
          </motion.div>
          
          <h3 style={{ marginTop: '2rem' }}>Software Engineering</h3>
          <motion.div 
            className="experience__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Skill><strong>Agile</strong> & XP Methodologies</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Pair/Mob</strong> Programming</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>SCRUM</strong> Framework</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Code Reviews</strong> & Quality</Skill>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="experience__on"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3>Cloud & Infrastructure</h3>
          <motion.div 
            className="experience__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Skill><strong>Oracle Cloud</strong> Infrastructure</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Oracle APEX</strong></Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Firebase</strong> Platform</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill>Cloud-backed <strong>Scalable Systems</strong></Skill>
            </motion.div>
          </motion.div>
          
          <h3 style={{ marginTop: '2rem' }}>Programming & Tools</h3>
          <motion.div 
            className="experience__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Skill><strong>C++</strong> (Competitive Programming)</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Python</strong> (Deep Learning, Data)</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>React</strong> & Flutter</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Unity</strong> & Godot</Skill>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skill><strong>Teaching</strong> & Mentoring</Skill>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;