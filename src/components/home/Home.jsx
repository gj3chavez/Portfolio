import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { Link } from 'react-scroll';
import { GoMarkGithub } from "react-icons/go";
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import CV from '../../assets/Giuliana-Cv.pdf';
import './home.css';
const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__wrapper'>
        <div className='home__container container'>
          {/* <p className='home__subtitle text-cs'>
            Hi! <span>I am</span>
          </p> */}

          <h1 className='home__title text-cs'>
            <span>GIULIANA</span> CHAVEZ
          </h1>

          <p className='home__job'>
            <span className='text-cs'>Full Stack</span> <b>Web Developer</b>
          </p>

          <div className='home__img-wrapper'>
            <div className='home__banner'>
              <img src={profileImg} alt='' className='home__profile' />
            </div>

            <img src={shapeOne} alt='' className='shape shape__1' />
            <img src={shapeTwo} alt='' className='shape shape__2' />
            <img src={shapeTwo} alt='' className='shape shape__3' />
          </div>


          {/* <p className='home__text'>
          Welcome to my portfolio! As a full stack developer, I am passionate about building innovative, efficient, and user-friendly web applications. My goal is to create software solutions that not only meet the needs of businesses and organizations but also provide seamless experiences for end-users. In my portfolio, you'll find a collection of projects that showcase my skills and expertise in front-end and back-end development, as well as my ability to work collaboratively in a team environment. From design to deployment, I strive to maintain the highest level of professionalism, quality, and attention to detail in all of my work. Thank you for taking the time to browse my portfolio, and I look forward to hearing from you soon!
          
          </p> */}


          <div className='home_text'>
            <TypeWriterEffect
            textStyle={{
            // fontFamily: 'Red Hat Display',
            // color: '#3F3D56',
            // ontWeight: 500,
            // ontSize: '1.5em',
           }}
            startDelay={2000}
            cursorColor="#3F3D56"
          multiText={[
            'Welcome to my portfolio!', 
            'My name is Giuliana Chavez and I am a full stack developer.',
            'I am a dedicated professional with a diverse background',
            'that blends business management and early childhood education',
            'with a newfound passion for web development.',
            'I am passionate about building innovative, efficient', 
            'and user-friendly web applications.',  
            'My goal is to create software solutions', 
            'that not only meet the needs of businesses and organizations', 
            'but also provide seamless experiences for end-users.', 
            'In my portfolio, you will find a collection of projects', 
            'that showcase my skills and expertise in front-end and back-end development', 
            'From design to deployment', 'I strive to maintain the highest level of professionalism', 
            'quality, and attention to detail in all of my work.', 
            'Thank you for taking the time to browse my portfolio and', 
            'I look forward to hearing from you soon!',
           ]}
        
           multiTextDelay={1000}
          typeSpeed={30}
          />

          </div>

          <div className='home__socials'>
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

          <div className='home__btns'>
            <a download='' href={CV} className='btn text-cs'>
              Download CV
            </a>

            <Link
              className='hero__link text-cs'
              to='skills'
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              My Skills
            </Link>
          </div>
        </div>

        <div className='section__deco deco__left'>
          <img src={shapeOne} alt='' className='shape' />
        </div>
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
