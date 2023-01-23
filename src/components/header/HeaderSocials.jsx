import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
import {FaRedditAlien} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className={'header__socials'}>
      <a href="https://linkedin.com/in/javier-torralbo-0ab132220" target={'_blank'}
         rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/JavierStark" target={'_blank'} rel="noreferrer"><FaGithub/></a>
      <a href="https://discordapp.com/users/449292174996013067" target={'_blank'} rel="noreferrer"><FaDiscord/></a>
      <a href="https://www.reddit.com/user/JavierStark800" target={'_blank'} rel="noreferrer"><FaRedditAlien/></a>
    </div>
  );
};

export default HeaderSocials;