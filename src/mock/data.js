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
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am Chris Liu. I am a front end developer with more than 1 year's web development working experience.`,
  paragraphTwo:
    'I have solid background in web development, with master degree from University of Waterloo. After graduation, I was provided a full-time position to work as a front-end developer at SomoPlay. Working in SomoPlay provided me enriched experience in programming languages, frameworks, and services.',
  paragraphThree:
    'At present stage, I am looking for front-end/full-stack jobs with prime focus on building responsive wesites.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2',
    title: 'WeFunDate',
    info:
      'WeFunDate is an online dating website exclusively focused on matching Chinese-Canadians. Its matching algorithm places special emphasis on Chinese-relevant charateristics with premium membership and live chat functionalities.',
    info2:
      'It is develoepd from scratch and built on top of Vue.js Framework and Element UI Toolkit. The main challenge is to build robust design and fully-responsive pages for displaying user information including pictures and texts with better scalability and maintainability. ',
    url: '',
    keyword: 'Vue, Vuex, Vue Router, Element UI, Bootstrap, Moment.js',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UserSignOrderPage.png',
    title: 'Andy Express',
    info:
      'Andy Express is an express platform website with business focus on shipping goods from China to Canada.',
    info2: `The UI/UX was conceived with a mobile first approach. The front-end development was based on Vue.js, Vue Routing, Vuex store management, and Bootstrap. We've used Node.js with Express framework on the server, rendering data views through RESTful API. The website content database is crafted with MongoDB and Amazon S3 for storing goods/order pictures.`,
    url: '',
    keyword: 'Vue, Element UI, CSS Media Queries, Express.js, MongoDB, HeroKu',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3',
    title: 'School Enrollment System',
    info:
      'The school enrollment system is an online web application for canadian colleges and educational institutes to recruit international students and review their applications. It also serves as an onlineportal for international students and agents to submit applications, make payments and check the status of the applications.',
    info2:
      'We use React.js/React Hooks to create single pages application by uilging reusable components. We use Redux for statement management and Redux-Thunk for API consumption.',
    keyword: 'React.js, React Hooks, Redux, Axios, material UI, Animate.css, NProgress.js',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      name: 'twitter',
      url: '',
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
