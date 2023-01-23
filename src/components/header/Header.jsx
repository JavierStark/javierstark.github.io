import React from 'react';
import './header.css'
import CTA from "./CTA";
import Me from '../../assets/Me.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Javier Torralbo</h1>
        <h5 className="text-light">Game Developer</h5>

        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="Me"/>
        </div>

        <a href="#contact" className={'scroll__down'}>ScrollDown</a>
      </div>
    </header>
  );
};

export default Header;