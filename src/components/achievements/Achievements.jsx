import React from 'react';
import './achievements.css';
import { FaTrophy, FaAward, FaGamepad } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { motion } from 'framer-motion';

const Achievements = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id={'achievements'}>
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Recognition
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Achievements & Awards
      </motion.h2>

      <div className="container achievements__container">
        {/* Ada Byron */}
        <motion.article 
          className="achievement__item"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
        >
          <div className="achievement__icon">
            <FaTrophy />
          </div>
          <div className="achievement__content">
            <h3>1st Place — Ada Byron Regional Programming Tournament</h3>
            <p className="achievement__subtitle">Winner in Andalusia & Overall Winner at UMA</p>
            <p className="achievement__date">2024 & 2025</p>
            <ul className="achievement__details">
              <li>Solved advanced <strong>algorithmic challenges</strong> in C++ under extreme time constraints</li>
              <li>Focus on <strong>optimal, efficient solutions</strong> for competitive programming</li>
              <li>Demonstrated expertise in <strong>data structures</strong> and <strong>algorithm design</strong></li>
            </ul>
          </div>
        </motion.article>

        {/* Malackathon */}
        <motion.article 
          className="achievement__item"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
        >
          <div className="achievement__icon">
            <SiAzuredevops />
          </div>
          <div className="achievement__content">
            <h3>Excellence Award in Development and Best Practices (INDRA)</h3>
            <p className="achievement__subtitle">Malackathon 2024 · Honorable Mention 2025</p>
            <p className="achievement__date">2024 & 2025</p>
            <ul className="achievement__details">
              <li>Delivered a <strong>fullstack system</strong> with <strong>Azure deployment</strong> in &lt;10 hours</li>
              <li>Implemented <strong>TDD, CI/CD</strong>, and <strong>pair programming</strong> for quality and consistency</li>
              <li>Designed an <strong>Oracle APEX</strong> data visualization app</li>
            </ul>
          </div>
        </motion.article>

        {/* Málaga Jam */}
        <motion.article 
          className="achievement__item"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
        >
          <div className="achievement__icon">
            <FaGamepad />
          </div>
          <div className="achievement__content">
            <h3>Special Award — Málaga Jam Weekend 16</h3>
            <p className="achievement__subtitle">Polo Nacional de Contenidos Digitales</p>
            <p className="achievement__date">June 2024</p>
            <ul className="achievement__details">
              <li>Developed a <strong>Nintendo 3DS game</strong> in Unity with strict VRAM constraints</li>
              <li>Coordinated a <strong>multidisciplinary team</strong> under heavy time pressure</li>
              <li>Delivered polished product in <strong>48-hour game jam</strong></li>
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Achievements;
