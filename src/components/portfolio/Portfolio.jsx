import React from 'react';
import './portfolio.css'
const IMG1 = '/assets/BrutalBounce.webp';
const IMG2 = '/assets/CallOfMonkeys.png';
const IMG3 = '/assets/DinoRunRoyale.webp';
const IMG4 = '/assets/LoadClicker.png';
const IMG5 = '/assets/ChargedParticlesSimulator.jpeg';
const IMG6 = '/assets/TheGameOfLife.jpeg';
const IMG7 = '/assets/Minesweeper.jpeg';
const IMG8 = '/assets/MinecraftClone.png';
const IMG9 = '/assets/AQWAC.jpg';
const IMG10 = '/assets/apagalo.png';
const IMG11 = '/assets/DiseaseMutationApp.png';
const IMG12 = '/assets/Cudeca.png';


const data = [
  // {
  //   image: IMG1,
  //   title: 'Brutal Bounce (Not available)  (Unity)',
  //   github: 'https://github.com/JavierStark/Brutal-Bounce',
  //   demo: 'https://play.google.com/store/apps/details?id=com.recinostudio.BrutalBounce',
  //   description: 'Placeholder description for Brutal Bounce. This mobile game features exciting physics-based gameplay mechanics.',
  //   technologies: ['Unity', 'C#', 'Mobile Development']
  // },
  // {
  //   image: IMG2,
  //   title: 'Call of the Monkeys (Unity)',
  //   github: 'https://github.com/JavierStark/SpainGameJamProject',
  //   demo: 'https://javierstark.itch.io/call-of-monkeys',
  //   description: 'Placeholder description for Call of the Monkeys. A game jam project developed during Spain Game Jam.',
  //   technologies: ['Unity', 'C#', 'Game Jam']
  // },
  // {
  //   image: IMG3,
  //   title: 'DinoRun Royale (Unity)',
  //   github: 'https://github.com/JavierStark/ProjectDinoRoyale',
  //   demo: 'https://play.google.com/store/apps/details?id=com.JTGameStudio.DinoRunRoyale&pli=1',
  //   description: 'Placeholder description for DinoRun Royale. A battle royale style runner game available on mobile platforms.',
  //   technologies: ['Unity', 'C#', 'Mobile', 'Multiplayer']
  // },
  {
    image: IMG12,
    title: 'CUDECA Full-Stack Website',
    github: 'https://github.com/JavierStark/Proyecto-ADAp-WATT',
    demo: 'https://cudeca-watt.es/',
    description: 'CUDECA WATT is a comprehensive full-stack web application developed to streamline donations and event management for the CUDECA charitable organization. The platform provides a dual-interface system where donors can securely manage contributions, register for events, and download automated tax certificates, while administrators utilize a robust dashboard to oversee ticket sales, validate entries via QR codes, and analyze donation trends.',
    technologies: ['C#', 'Azure', 'ASP.NET', 'GitHub Actions'],
    year: 2025
  },
  {
    image: IMG11,
    title: 'Disease Mutation App (iGEM UMA)',
    github: 'https://github.com/JavierStark/DiseaseMutationsApp',
    description: 'A specialized bioinformatics tool developed to streamline CRISPR research by automating the design of optimized guide RNA (gRNA) sequences. The application features a Blazor WebAssembly frontend and a high-performance F# core library that parses HGVS mutation data and integrates with the Bowtie alignment engine for off-target analysis. It provides researchers with a robust environment for genomic sequence retrieval and quality-based gRNA ranking, all packaged within a multi-stage Docker architecture for efficient deployment.',
    technologies: ['C#', 'F#', 'Bioinformatics'],
    year: 2026
  },
  {
    image: IMG10,
    title: '¡APÁGALO! (Game)',
    demo: 'https://javierstark.itch.io/apagalo',
    description: 'The game ¡APÁGALO! was developed for the Indie Spain Jam 2023 with a focus on sustainability and energy efficiency. Players must manage the power consumption of a household to keep inhabitants happy while dealing with ghosts that disrupt the home\'s energy balance. For this team project, you performed the role of programmer, utilizing C# and the Unity engine.',
    technologies: ['Godot', 'C#'],
    year: 2023
  },
  {
    image: IMG9,
    title: 'AQWATC (Horror Game)',
    github: 'https://github.com/JavierStark/A-Quiet-Walk-Around-The-Castle',
    demo: 'https://javierstark.github.io/AQuietWalkAroundTheCastle-PostMortem/',
    description: 'AQuietWalkAroundTheCastle-PostMortem is a documentation project that serves as a post-mortem for a cancelled game titled "A Quiet Walk Around The Castle." It provides a transparent look at the assets and design decisions made during the development phase, preserving the creative process for future reference. The site itself is built using HTML and CSS.',
    technologies: ['Unity', 'C#', '3D'],
    year: 2023
  },
  {
    image: IMG8,
    title: 'Minecraft Clone (React Three Fiber)',
    github: 'https://github.com/JavierStark/R3F-MinecraftClone',
    demo: '',
    description: 'The R3F-MinecraftClone project is a functional 3D demonstration that recreates the core mechanics of Minecraft within a web browser. It features a voxel-based world where users can navigate using standard controls, place various block types such as grass and glass, and save their progress directly to local storage. This project was built using React Three Fiber, JavaScript, Three.js, React, HTML, and CSS..',
    technologies: ['React', 'Three.js', 'WebGL', 'JavaScript'],
    year: 2022
  },
  // {
  //   image: IMG4,
  //   title: 'Load Clicker (Unity)',
  //   github: '',
  //   demo: 'https://javierstark.itch.io/load-clicker',
  //   description: 'Placeholder description for Load Clicker. An incremental clicker game with engaging progression mechanics.',
  //   technologies: ['Unity', 'C#', 'Game Design']
  // },
  // {
  //   image: IMG5,
  //   title: 'Charged Particles Simulator (P5.js)',
  //   github: 'https://github.com/JavierStark/ChargedParticlesSimulator',
  //   demo: 'https://javierstark.github.io/ChargedParticlesSimulator/',
  //   description: 'Placeholder description for Charged Particles Simulator. An interactive physics simulation visualizing electromagnetic forces.',
  //   technologies: ['P5.js', 'JavaScript', 'Physics Simulation']
  // },
  {
    image: IMG6,
    title: 'The Game of Life (Game)',
    github: 'https://github.com/JavierStark/The-Game-of-Life-SFML',
    demo: '',
    description: 'The-Game-of-Life-SFML is a C++ implementation of Conway\'s famous cellular automaton. It uses the SFML graphics library to provide an interactive grid where players can toggle cell states, pause the simulation, and randomly populate the environment to observe complex patterns. The project utilizes C++, SFML, and CMake.',
    technologies: ['C++', 'SFML', 'Algorithm'],
    year: 2023
  },
  {
    image: IMG7,
    title: 'Minesweeper (Game)',
    github: 'https://github.com/JavierStark/Minesweeper-SFML',
    demo: '',
    description: 'Minesweeper-SFML is a desktop adaptation of the classic puzzle game that emphasizes clean logic and traditional gameplay. It includes features like flagging potential mines, a question mark system for uncertain tiles, and a performance timer. The technology stack for this project includes C++ and the SFML library.',
    technologies: ['C++', 'SFML', 'Game Development'],
    year: 2023
  }
]

const Portfolio = () => {
  return (
    <section id={'portfolio'}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({image, title, github, demo, description, technologies, year}, index) => {
            return (
              <article key={index} className={'portfolio__item'}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <div className="portfolio__item-content">
                  <h3>{title} <span className="portfolio__year">({year})</span></h3>
                  <div className="portfolio__technologies">
                    {technologies.map((tech, i) => (
                      <span key={i} className="portfolio__tech-tag">{tech}</span>
                    ))}
                  </div>
                  <p className="portfolio__description">{description}</p>
                  <div className="portfolio__item-cta">
                    {github && <a href={github} className={'btn'} target={'_blank'}>Github</a>}
                    {demo && <a href={demo} className={'btn btn-primary'} target={'_blank'}>App</a>}
                  </div>
                </div>
              </article>)
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;