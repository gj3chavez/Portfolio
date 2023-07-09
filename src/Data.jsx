import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpeg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpeg';
import Project6 from './assets/project6.jpeg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

// export const services = [
//   {
//     id: 1,
//     name: 'Web Development',
//     title: 'Web Design',
//     description:
//       'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
//   },
//   {
//     id: 2,
//     name: ' Apps Development ',
//     title: 'IOS & Android',
//     description:
//       'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
//   },
  // {
  //   id: 3,
  //   name: ' Game Development ',
  //   title: '',
  //   description:
  //     ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  // },
  // {
  //   id: 4,
  //   name: ' Advertising ',
  //   title: ' Google Ads ',
  //   description:
  //     ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  // },
// ];

export const skills = [
  {
    id: 1,
    name: 'HTML5 & CSS3',
    percentage: 95,
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 85,
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 3,
    name: 'React',
    percentage: 90,
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 4,
    name: 'NODE JS, EXPRESS JS',
    percentage: 85,
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 5,
    name: 'MySQL, MongoDB',
    percentage: 90,
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 6,
    name: 'Git',
    percentage: 90,
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Ecommerce',
    title: 'Cardify',
    description:
      'Cardify allows you to personalize your chosen card template in just a few easy steps. You can add your own text, select from a wide variety of fonts, and choose from an array of eye-catching colors to make your message truly stand out. Additionally, you have the option to insert photos or images directly from your device, bringing an extra touch of personalization to your card.',
    link: 'https://cardify-app.herokuapp.com/'
  },
  {
    id: 2,
    img: Project2,
    category: 'Turn Based Game',
    title: 'Princess Saving Simulator',
    description:
      'This simulator uses turn based game play to battle the enemy and rescue the princess! You will first select from a range of characters including; an Elf, Dwarf, and Magician. Each having its own unique strengths and weaknesses as well as special moves. Using a strategy that matches your character’s abilities against the enemy Orcs, you will do battle, with the ultimate goal of saving the princess.',
    link: 'https://sheltered-falls-73233.herokuapp.com/'
  },
  {
    id: 3,            
    img: Project3,
    category: 'Web APIs',
    title: 'Coding Quiz',
    description:
      "This is a timed coding quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It also features a clean and polished user interface and is responsive, ensuring that it adapts to multiple screen sizes.",
    link: 'https://gj3chavez.github.io/Code-Quiz/'
  },
  {
    id: 4,
    img: Project4,
    category: 'MERN',
    title: 'Book Search Engine',
    description:
      'This is a book search engine application where users can create an account, search for books, save their favorite books. This application also uses front-end routing, api requests (queries and mutations) and user authentication',
    link: 'https://floating-citadel-59172.herokuapp.com/'
  },
  {
    id: 5,
    img: Project5,
    category: 'Express.js ',
    title: 'Note Taker',
    description:
      'A Note Taker application that can be used to write and save notes. The application uses an Express.js back end and  saves and retrieves note data from a JSON file.',
    link: 'https://mysterious-taiga-87007.herokuapp.com/'
    },
  {
    id: 6,
    img: Project6,
    category: 'Server-Side APIs',
    title: 'Weather Dashboard',
    description:
      'A social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Uses Express.js for routing, a MongoDB database, and the Mongoose ODM.',
    link: 'https://gj3chavez.github.io/Weather-Dashboard/'
    },
];

export const cv = [
  {
    id: 1,
    title: 'Full Stack Developer Certificate',
    subtitle: 'SMU Continue and Professional Education',
    date: '2023',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Degree in Business Management',
    subtitle: 'San Agustin University - Peru',
    date: '2000',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'education',
  },



  {
    id: 4,
    title: 'Preschool Teacher',
    subtitle: 'PISD',
    date: '2013 - Present',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Teacher',
    subtitle: 'Precious Beginnings Montessori',
    date: '2010 - 2013',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'experience',
  },

  // {
  //   id: 6,
  //   title: 'Assistant Manager',
  //   subtitle: 'Adidas.',
  //   date: '2007 - 2010',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   category: 'experience',
  // },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'John Doe',
    author: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'John Doe',
    author: 'Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Martin Joe',
    author: 'Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'John Doe',
    author: 'Director',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Charlotte Kel',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
