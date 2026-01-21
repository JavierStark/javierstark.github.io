import React from 'react';
import './header.css'
import CTA from "./CTA";
import Me from '../../assets/Me.png'
import HeaderSocials from "./HeaderSocials";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="title">
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Hello I'm
          </motion.h5>
          <motion.h1 
            className="display-1" 
            style={{ fontWeight: 'bold' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
          >
            Javier Torralbo
          </motion.h1>
          <motion.h5 
            className="text-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            .NET Backend Developer | Cloud & Software Engineering
          </motion.h5>
          <motion.h6 
            className="text-light" 
            style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            iGEM UMA Member · IAESTE IFML Málaga President
          </motion.h6>
          <CTA/>
        </div>

        <HeaderSocials/>

        <motion.a 
          href="#contact" 
          className={'scroll__down'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
        >
          ScrollDown
        </motion.a>
      </div>
    </header>
  );
};

export default Header;