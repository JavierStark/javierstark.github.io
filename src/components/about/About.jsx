import React from 'react';
import './about.css';
const Me = '/assets/MeBg.jpeg';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {AiFillFolderOpen} from "react-icons/ai";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id={'about'}>
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        Get To Know
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <div className="container about__container">
        <motion.div 
          className="about__me"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="about__me-image">
            <img src={Me} alt="About image"/>
          </div>
        </motion.div>
        <motion.div 
          className="about__content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="about__cards">
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Computer Engineering student at the University of Málaga with a strong focus on <strong>scalable backend development</strong>, <strong>cloud architectures</strong>, and the emerging intersection between computing and life sciences. I specialize in <strong>.NET/C#</strong>, <strong>ASP.NET</strong>, and cloud platforms including <strong>Azure</strong> and <strong>Oracle Cloud</strong>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            My work emphasizes robust engineering practices—<strong>TDD</strong>, <strong>CI/CD</strong>, <strong>clean code</strong>, <strong>refactoring</strong>, and architectural clarity—to build production-ready systems. I've deployed full-stack applications to Azure and Oracle Cloud, always prioritizing maintainability, performance, and reliability.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            I thrive in fast-paced, competitive environments, having twice won the <strong>Ada Byron Regional Programming Tournament</strong> and receiving awards at <strong>Malackathon</strong> (Excellence in Development - INDRA) and <strong>Málaga Jam</strong> for software quality, innovation, and rapid development under pressure.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            Currently expanding into <strong>bioinformatics and synthetic biology</strong> as a member of <strong>iGEM UMA</strong>, complementing my research internship at <strong>Karunya University</strong>, where I built a cloud-backed EEG processing pipeline for epilepsy prediction using deep learning. As <strong>President of IAESTE Computer Science Málaga</strong>, I help students access international opportunities and cultivate a collaborative tech ecosystem.
          </motion.p>
          <motion.a 
            href="#contact" 
            className={'btn btn-primary'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;