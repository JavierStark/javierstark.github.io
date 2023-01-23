import React from 'react';
import './services.css'
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <section id={'services'}>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className={'service'}>
          <div className="service__head">
            <h3>Tutoring for Beginners</h3>
          </div>
          <ul className={'service__list'}>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Programming language of your choice</p>
            </li>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Personalized syllabus</p>
            </li>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Affordable price</p>
            </li>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Help with computer science assignments</p>
            </li>
          </ul>
        </article>

        <article className={'service'}>
          <div className="service__head">
            <h3>Game Development</h3>
          </div>
          <ul className={'service__list'}>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Multiple frameworks and software</p>
            </li>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>2D or 3D</p>
            </li>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Implementation of the mechanics you like</p>
            </li>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Mobile, web or PC</p>
            </li>
            <li>
              <BiCheck className={'service__list-icon'}/>
              <p>Any genre</p>
            </li>
          </ul>
        </article>

        {/*<article className={'service'}>*/}
        {/*  <div className="service__head">*/}
        {/*    <h3>Web Development</h3>*/}
        {/*  </div>*/}
        {/*  <ul className={'service__list'}>*/}
        {/*    <li>*/}
        {/*      <BiCheck className={'service__list-icon'}/>*/}
        {/*      <p>daspfioasdfapiosdfjasdfojas</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className={'service__list-icon'}/>*/}
        {/*      <p>daspfioasdfapiosdfjasdfojas</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className={'service__list-icon'}/>*/}
        {/*      <p>daspfioasdfapiosdfjasdfojas</p>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</article>*/}
      </div>
    </section>
  );
};

export default Services;