import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/BrutalBounce.webp'
import IMG2 from '../../assets/CallOfMonkeys.png'
import IMG3 from '../../assets/DinoRunRoyale.webp'
import IMG4 from '../../assets/LoadClicker.png'
import IMG5 from '../../assets/ChargedParticlesSimulator.jpeg'
import IMG6 from '../../assets/TheGameOfLife.jpeg'
import IMG7 from '../../assets/Minesweeper.jpeg'
import IMG8 from '../../assets/MinecraftClone.png'
import IMG9 from '../../assets/AQWAC.jpg'


const data = [
  {
    image: IMG1,
    title: 'Brutal Bounce (Not available)  (Unity)',
    github: 'https://github.com/JavierStark/Brutal-Bounce',
    demo: 'https://play.google.com/store/apps/details?id=com.recinostudio.BrutalBounce'
  },
  {
    image: IMG2,
    title: 'Call of the Monkeys (Unity)',
    github: 'https://github.com/JavierStark/SpainGameJamProject',
    demo: 'https://javierstark.itch.io/call-of-monkeys'
  },
  {
    image: IMG3,
    title: 'DinoRun Royale (Unity)',
    github: 'https://github.com/JavierStark/ProjectDinoRoyale',
    demo: 'https://play.google.com/store/apps/details?id=com.JTGameStudio.DinoRunRoyale&pli=1'
  },
  {
    image: IMG8,
    title: 'Minecraft Clone (React Three Fiber)',
    github: 'https://github.com/JavierStark/R3F-MinecraftClone',
    demo: ''
  },
  {
    image: IMG4,
    title: 'Load Clicker (Unity)',
    github: '',
    demo: 'https://javierstark.itch.io/load-clicker'
  },
  {
    image: IMG5,
    title: 'Charged Particles Simulator (P5.js)',
    github: 'https://github.com/JavierStark/ChargedParticlesSimulator',
    demo: 'https://javierstark.github.io/ChargedParticlesSimulator/'
  },
  {
    image: IMG6,
    title: 'The Game of Life (c++/SFML)',
    github: 'https://github.com/JavierStark/The-Game-of-Life-SFML',
    demo: ''
  },
  {
    image: IMG7,
    title: 'Minesweeper (c++/SFML)',
    github: 'https://github.com/JavierStark/Minesweeper-SFML',
    demo: ''
  },
  {
    image: IMG9,
    title: 'AQWATC - Horror Game  (Unity / Cancelled)',
    github: 'https://github.com/JavierStark/A-Quiet-Walk-Around-The-Castle',
    demo: 'https://javierstark.github.io/AQuietWalkAroundTheCastle-PostMortem/'
  },
]

const Portfolio = () => {
  return (
    <section id={'portfolio'}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.reverse().map(({image, title, github, demo}, index) => {
            return (
              <article className={'portfolio__item'}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github && <a href={github} className={'btn'} target={'_blank'}>Github</a>}
                  {demo && <a href={demo} className={'btn btn-primary'} target={'_blank'}>App</a>}
                </div>
              </article>)
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;