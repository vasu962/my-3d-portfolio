import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nextjs,
  // nodejs,
  // mongodb,
  git,
  postman,
  router,
  // postman,
  // figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // era,
  gdsc,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  headphone,
  // todo,
  music,
  prompt,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Router',
    icon: router,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company_name: 'Docplix',
    icon: gdsc,
    iconBg: '#E6DEDD',
    date: 'April 2023 - June 2024',
    points: [
      'Built responsive and dynamic frontend components for EHR/EMR dashboards using React.js, Tailwind CSS, and TypeScript, enhancing accessibility across web and mobile devices.',
      'Optimized performance and load times by 25% through efficient state management, code splitting, and API integration, improving user experience for healthcare professionals.',
      'Collaborated with backend and design teams to integrate appointment booking, calendar views, and real-time updates, improving workflow efficiency for medical staff.',
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Ecommerce',
    description:
      'A fully functional e-commerce application with complete stripe payment integration and with sanity platform for structured data.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'stripe',
        color: 'pink-text-gradient',
      },
      {
        name: 'sanity',
        color: 'blue-text-gradient',
      },
      {
        name: 'react-context',
        color: 'green-text-gradient',
      },
      {
        name: 'react-hot-toast',
        color: 'pink-text-gradient',
      },
    ],
    image: headphone,
    source_code_link: 'https://github.com/vasu962/ecommerce',
  },
  {
    name: 'Music Application',
    description:
      'A fully fledge spotify like music player that allows to go to the previous song, next song, repeat, shuffle, and fully functional search.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'react-router',
        color: 'pink-text-gradient',
      },
      {
        name: 'rapidapi',
        color: 'blue-text-gradient',
      },
      {
        name: 'react-hooks',
        color: 'green-text-gradient',
      },
    ],
    image: music,
    source_code_link: 'https://github.com/vasu962/music-player',
  },
  {
    name: 'Promptwise',
    description:
      'It is an open source AI prompting tool for modern world that helps discover, create and share creative prompts using next-auth.',
    tags: [
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoose',
        color: 'green-text-gradient',
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: 'bcrypt',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: "next-auth",
        color: "pink-text-gradient",
      },
    ],
    image: prompt,
    source_code_link: 'https://github.com/vasu962/promptwise',
  },
];

export { services, technologies, experiences, testimonials, projects };
