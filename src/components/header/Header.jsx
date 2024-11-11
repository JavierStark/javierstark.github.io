import React from 'react';
import './header.css'
import CTA from "./CTA";
import Me from '../../assets/Me.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="title">
          <h5>Hello I'm</h5>
          <h1 className="display-1" style={{ fontWeight: 'bold' }}>Javier Torralbo</h1>
          <h5 className="text-light">.Net Developer</h5>
          <CTA/>
        </div>

        <HeaderSocials/>


        <a href="#contact" className={'scroll__down'}>ScrollDown</a>
      </div>
    </header>
  );
};

export default Header;