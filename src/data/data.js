import imgMoulinCastaSite from "../assets/images/moulin-casta-site.JPG";
import yogaSite from "../assets/images/yoga-site.JPG";
export const projects = [
  {
    title: "Le Moulin Casta",
    url: "http://www.moulincasta.fr",
    img: imgMoulinCastaSite,
    description:
      "Site vitrine créé pour un logement de vacances en Corse, permettant aux propriétaires de gérer médias, tarifs, et disponibilités via un calendrier personnalisé (réservations spécifiques, gestion tarifaire par jour). Projet fonctionnel avec clients très satisfaits.",
    frontendTech: [
      "React.js",
      "Redux Toolkit",
      "Framer Motion",
      "Sass",
      "Axios",
      "Date-fns",
      "Leaflet",
      "Swiper",
    ],
    backendTech: [
      "Node.js",
      "Express",
      "Cron",
      "Mongoose",
      "Multer",
      "Helmet",
      "Dotenv",
      "JWT",
      "Nodemon",
    ],
    stockageTech: ["MongoDB", "AWS S3 (médias)"],
    deployTech: ["AWS EC2 (Ubuntu)", "Netlify"],
  },
  {
    title: "Yoga Courses",
    url: "https://yogacoursespractice.netlify.app",
    img: yogaSite,
    description: `Site vitrine pour des cours de yoga. Une page d'accueil pour présenter globalement les services proposés. Une page présentant les "yoga retreats" avec les destinations proposées. Une page concernant les cours de yogas avec le programme de la semaine. Une page "à propos" donnant des informations sur la professeur de yoga. Pour finir, une page de contact permettant de contacter l'instructeur de yoga par email.`,
    frontendTech: ["React.js", "Framer Motion", "Sass", "Swiper"],
    backendTech: [],
    stockageTech: ["AWS S3 (médias)"],
    deployTech: ["Netlify"],
  },
];
