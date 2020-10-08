import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chris | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Chris Liu.',
  subtitle: 'I am a passionate web developer.',
  subintro: 'With every Line of code, I strive to make the web a wonderful place.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I passionately incorporate good design, technology, and innovation into all my projects to build visually-compelling pages.`,
  paragraphTwo: `I am specializing in the development of responsive user interfaces with React, Vue and I'm interested in Node.js, HTML5, CSS3, JavaScript (ES5+), Web Technologies, User Experience, Accessibility, Clean Code, and the Universe. And everything in between.`,
  paragraphThree:
    'At present stage, I am looking for front-end / full-stack jobs with prime focus on building responsive components.',
  resume: 'https://drive.google.com/file/d/10yBA_BUF8RDbnd0Eo4YkRp37LOi2DdLA/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1',
    title: 'Andy Express',
    info:
      'Andy Express is an express platform website with Mandarin-English bilingual model to boost business focusing on cross-border e-commerce and international transportation.',
    info2: `The UI/UX was conceived with a mobile first approach. The front-end development was based on Vue composition API, Vue Routing, Vuex store management, and Bootstrap. I combine Bootstrap Grid and Media Queries to conditionally apply styles for pixel perfect layout differing in screens. We've used Node.js with Express framework on the server, rendering data views through RESTful API. The website content database is crafted with MongoDB and Amazon S3 for storing goods/order pictures.`,
    keyword: 'Vue, Element UI, Bootstrap, CSS Media Queries, Express.js, MongoDB, HeroKu',
    demourl: 'http://andyexpress.andyliu.ca/#/',
  },
  {
    id: nanoid(),
    img: 'project3',
    title: 'GoToCanada',
    info:
      'GoToCanada is an online web application for canadian colleges and educational institutes to recruit international students and review their applications. It also serves as an online portal for international students and agents to submit applications, make payments and check the status of the applications.',
    info2:
      'We use React.js/React Hooks to create single pages application by building reusable components. We use Redux for statement management and Redux-Thunk for API consumption.',
    keyword: 'React.js, React Hooks, Redux, Axios, material UI, Animate.css, NProgress.js',
    demourl: '',
  },
  {
    id: nanoid(),
    img: 'project2',
    title: 'WeFunDate',
    info:
      'WeFunDate is an online dating website exclusively focused on matching Chinese-Canadians. Its matching algorithm places special emphasis on Chinese-relevant charateristics with premium membership and live chat functionalities.',
    info2:
      'It is develoepd from scratch and built on top of Vue.js Framework and Element UI Toolkit. The main challenge is to build robust design and fully-responsive pages for displaying user information including pictures and texts with better scalability and maintainability. ',
    keyword: 'Vue, Vuex, Vue Router, Element UI, Bootstrap, Moment.js',
    demourl: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chongchrisliu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/chong.chris.liu/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100013837660586',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/chongchongchrisliu',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Chongchrisliu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
