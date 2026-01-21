import React from 'react';
import './workexperience.css';
import { MdWork, MdSchool } from "react-icons/md";
import { FaFlask, FaGlobeAmericas } from "react-icons/fa";
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id={'experience'}>
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        My Journey
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Professional Experience
      </motion.h2>

      <div className="container experience__timeline">
        {/* Karunya Institute */}
        <motion.div 
          className="timeline__item"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="timeline__icon">
            <MdWork />
          </div>
          <div className="timeline__content">
            <h3>Research Intern</h3>
            <h4>Karunya Institute of Technology and Sciences</h4>
            <p className="timeline__date">Jul 2025 – Sept 2025 · Coimbatore, India</p>
            <p className="timeline__project"><strong>Cloud-Backed EEG Pipeline for Pre-Ictal Epilepsy Prediction using Deep Learning</strong></p>
            <ul>
              <li>Designed and implemented a <strong>CNN-based deep learning pipeline</strong> for epileptic seizure prediction using CHB-MIT EEG data</li>
              <li>Created scalable, <strong>cloud-backed preprocessing workflows</strong> and training pipelines</li>
              <li>Built a <strong>Flutter mobile app</strong> with real-time database integration to deliver prediction notifications</li>
            </ul>
          </div>
        </motion.div>

        {/* IAESTE */}
        <motion.div 
          className="timeline__item"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="timeline__icon">
            <FaGlobeAmericas />
          </div>
          <div className="timeline__content">
            <h3>President · Board Member (Computer Science)</h3>
            <h4>IAESTE LC Málaga</h4>
            <p className="timeline__date">March 2025 – Present · Málaga, Spain</p>
            <ul>
              <li>Student representative and coordinator, connecting local students with <strong>international internships</strong></li>
              <li>Foster a global, collaborative engineering community</li>
              <li>Lead organizational initiatives and strategic planning</li>
            </ul>
          </div>
        </motion.div>

        {/* iGEM UMA */}
        <motion.div 
          className="timeline__item"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="timeline__icon">
            <FaFlask />
          </div>
          <div className="timeline__content">
            <h3>Team Member</h3>
            <h4>iGEM UMA</h4>
            <p className="timeline__date">March 2025 – Present · Málaga, Spain</p>
            <ul>
              <li>Part of an interdisciplinary <strong>synthetic biology team</strong> guided by professors Carlos Rodríguez Caso and Manuel Bernal Muñoz</li>
              <li>Focus on practical laboratory foundations, <strong>computational modeling</strong>, and cross-domain collaboration</li>
              <li>Bridge computing expertise with life sciences applications</li>
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          className="timeline__item"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="timeline__icon">
            <MdSchool />
          </div>
          <div className="timeline__content">
            <h3>BSc in Computer Engineering</h3>
            <h4>University of Málaga</h4>
            <p className="timeline__date">2023 – 2027 · Málaga, Spain</p>
            <ul>
              <li>Specializing in <strong>backend development</strong>, <strong>cloud architectures</strong>, and <strong>software engineering</strong></li>
              <li>Focus on <strong>.NET/C#</strong>, scalable systems, and robust engineering practices</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
