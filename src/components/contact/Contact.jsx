import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

import {MdOutlineEmail} from "react-icons/md";
import {FaDiscord} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ejq8sa2', 'template_x24g9un', form.current, 'OqAiE2cCCHpbQggbx');
    e.target.reset();
  };

  return (
    <section id={'contact'}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className={'contact__option'}>
            <MdOutlineEmail className={'contact__option-icon'}/>
            <h4>Email</h4>
            <h5>javiertorralbocortes@gmail.com</h5>
            <a href="mailto:javiertorralbocortes@gmail.com" target={'_blank'}>Send a message</a>
          </article>
          <article className={'contact__option'}>
            <FaDiscord className={'contact__option-icon'}/>
            <h4>Discord</h4>
            <h5>javiertorralbocortes@gmail.com</h5>
            <a href="https://discord.com" target={'_blank'}>Send a message</a>
          </article>
          <article className={'contact__option'}>
            <FaLinkedin className={'contact__option-icon'}/>
            <h4>Linkedin</h4>
            <h5>javiertorralbocortes@gmail.com</h5>
            <a href="https://linkedin.com" target={'_blank'}>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name={'name'} placeholder={'Your Full Name'} required/>
          <input type="email" name={'email'} placeholder={'Your Email'} required/>
          <textarea name="message" rows="10" placeholder={'Your Message'} required></textarea>
          <button type={'submit'} className={'btn btn-primary'}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;