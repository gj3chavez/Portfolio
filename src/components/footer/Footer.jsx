import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container grid'>
        <div className='footer__socials'>
        <a
              href='https://www.linkedin.com/in/giuliana-chavez-329738255/'
              target='_blank'
              className='home__social-link'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>

            <a
              href='https://github.com/gj3chavez'
              target='_blank'
              className='home__social-link'
              rel='noreferrer'
            >
              <GoMarkGithub />
            </a>


            <a
              href='https://www.twitter.com/'
              target='_blank'
              className='home__social-link'
              rel='noreferrer'
            >
              <FaTwitter />
            </a>

            <a
              href='https://www.instagram.com/'
              target='_blank'
              className='home__social-link'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
        </div>

        <p className='footer__copyright text-cs'>
          &copy; 2023 <span> GC PORTFOLIIO</span> All Rights Reserved
        </p>

        <p className='footer__copyright text-cs'>
          Developed By <span>Giuliana Chavez</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
