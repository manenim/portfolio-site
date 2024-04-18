import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Fullstack Apple Store",
    description:
      "Developed a responsive and interactive user interface using Next.js and NodeJs to explore Apple products. This project allowed users to filter, search, and view detailed information about various Apple devices",
    tools: [
      "NextJS",
      "Material Ui",
      "Sanity",
      "Stripe",
      "Typescript",
      "Tailwind CSS",
      "Joi",
      "EC2",
    ],
    role: "Fullstack Developer",
    code: "https://github.com/manenim/apple-store",
    demo: "https://apple-store-hfy2.vercel.app",
    image: crefin,
  },
  {
    id: 2,
    name: "Fashion Ecomm Store",
    description:
      " Developed a fully functional e-commerce fashion store using React and Next.js. This project included features like product browsing, filtering, shopping cart management and secure checkout",
    tools: [
      "React",
      "Tailwind CSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Redux",
      "Material Ui",
      "AWS S3",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/manenim/eccomfrontend",
    demo: "https://sparkly-granita-b076ba.netlify.app/",
    image: travel,
  },
  {
    id: 3,
    name: "AI Powered Real Estate",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Newsroom Management",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
