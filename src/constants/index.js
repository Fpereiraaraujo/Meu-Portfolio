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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
 
];

const experiences = [
  {
    title: "Estagiario",
    company_name: "Sig Combibloc",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Junho 2022 - Atual",
    points: [
      "Responsável por automatização de processos utilizando Python",
      "Desenvolvimento de softwares para Controle de Informações",
      "Desenvolvi softwares que ajudaram na redução de custos",
      "Análise do desempenho operacional a fim de identificar os pontos negativos e oferecer soluções práticas",
      "à gerência.",
      "Análise de dados usando Power Bi, Excel e Python",
      "Criação de Dashboards de quebras, custos e apontamentos",
      "Participação em atividades voltadas à equipe a fim de fortalecer os relacionamentos profissionais.",
      "Desenvolvimento e implementação de estratégias e planos de melhoria do desempenho, visando o",
      "crescimento contínuo da equipe",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tweeter-clone",
    description:
      "Desenvolvido para aprimorar meus conecimentos em MongoDB, AWS, Tailwindcss e NextJs.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Fpereiraaraujo/Twitter-clone",
  },
  {
    name: "ConectaOngs(Minha Propria rede social)",
    description:
      "Essa aplicaçao Web esta sendo desenvolvida como um projeto da faculdade e com Intuito de ajudar Ongs. a ideia é uma rede social onde ongs de diversos tipos postam Projetos e os usuarios fazem doação dentro da propria plataforma.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Fpereiraaraujo/ConectaOngs",
  },
  {
    name: "UberClone",
    description:
      "Um Clone do aplicativo uber completo tanto o lado do usuario quanto o lado do motorista",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Aws-amplify",
        color: "green-text-gradient",
      },
      {
        name: "GraphQl",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Fpereiraaraujo/Uber-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
