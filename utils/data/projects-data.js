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
    type: "FE",
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
    type: "FE",
  },
  {
    id: 3,
    name: "Breeze-UI (Component Library)",
    description:
      "Developed a custom component library named Breeze UI using React for building user interfaces. This library leverages Storybook for interactive component documentation and Tailwind CSS for rapid and consistent styling.",
    tools: [
      "React",
      "TailwindCSS",
      "clsx",
      "tailwind-merge",
      "Storybook",
      "TypeScript",
      "Vite",
      "chromatic",
      "class-variance-authority (CVA)",
    ],
    code: "https://github.com/manenim/breeze-ui/",
    role: "Frontend Developer",
    type: "FE",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Authorworks API",
    description:
      "Built an API using Node.js, Express, and MongoDB to manage author and book information. This API allows users to perform CRUD operations on authors and their associated books, enabling applications to interact with author and book data.",
    tools: ["NodeJs", "ExpressJS", "MongoDB", "Mongoose", "Joi", "Crypto-JS"],
    code: "https://github.com/manenim/shopnow-api/",
    demo: "https://authorworks-api.onrender.com/docs/",
    type: "BE",
    image: ayla,
    role: "Backend Developer",
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
