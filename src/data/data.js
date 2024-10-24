import imgMoulinCastaSite from "../assets/images/moulin-casta-site.JPG";
import yogaSite from "../assets/images/yoga-site.JPG";
export const projects = [
  {
    title: "Le Moulin Casta",
    url: "http://www.moulincasta.fr",
    img: imgMoulinCastaSite,
    description:
      "Site créé pour un logement de vacances en Corse. L'objectif était de créer un site vitrine pour les propriétaires avec une authentification afin de permettre aux propriétaires de gérer les médias du site (ajouter et supprimer les photos de chaque logement) et les tarifs et disponibilités à l'aide d'un calendrier entièrement customisable, créé de A à Z. La partie technique était le composant calendrier car aucune librairie ne propose de calendrier avec les options désirées (réservations uniquement du samedi au samedi pour un des logements, gestion des tarifs pour chaque jour, indisponibilité/disponibilité des dates). Projet entièrement fonctionnel et clients très satisfaits.",
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
    deployTech: ["AWS EC2 sur plateforme Ubuntu (backend)", "Netlify"],
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
