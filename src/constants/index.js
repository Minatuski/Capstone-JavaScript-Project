import { instacart, shopify, starbucks, snow } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Barista",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Maintains inventories by replenishing coffee bean supply; stocking coffee brewing equipment; maintaining supplies, pastries, and cookies for coffee bar.",
            "Keeps equipment operating by following operating instructions; troubleshooting breakdowns; maintaining supplies; performing preventive maintenance; calling for repairs.",
            "Educates customers by presenting and explaining the coffee drink menu; answering questions.",
            "Enhances coffee shop reputation by accepting ownership for accomplishing new and different requests; exploring opportunities to add value to job accomplishments.",
        ],
    },
    {
        title: "Snow Ambassador",
        company_name: "Big Snow",
        icon: snow,
        iconBg: "white",
        date: "Jan 2024 - Present",
        points: [
            "Interfacing with guests and ensuring an enjoyable and exciting snow experience.",
            "Ensuring set up and breakdown procedures run smoothly at the beginning and end of day.",
            "Sharing snowboarding insights and enhancing guests' enjoyment with enthusiasm.",
            "Welcoming guests, offering on-mountain assistance, and fostering a safe, enjoyable snow experience.",
        ],
    },
    {
        title: "E-Commerce Creator",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Develop and maintain ecommerce website, including product catalog, checkout process, and payment gateway integration.",
            "Manage customer service inquiries and complaints.",
            "Monitor and analyze website performance metrics to identify areas for improvement.",
            "Create and manage content for website, including product descriptions, blog posts, and other marketing materials.",
        ],
    },
    {
        title: "In-Store Shopper",
        company_name: "Instacart",
        icon: instacart,
        iconBg: "green",
        date: "August 2023 - Jan 2023",
        points: [
            "Used a digital tool to select items necessary to complete online orders, to pack and put away orders in staging area, and to retrieve orders for customers.",
            "Provided superior customer service; answers product-related questions, locates products, and helps in-store Customers, as needed.",
            "Sorted selected merchandise into refrigeration, frozen, or dry storage holding areas.",
            "Selected merchandise from sales floor to complete customer online orders.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Minatuski',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/brandonleonn/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'JavaScript Calculator',
        description: 'Developed a web application that calculates numbers.',
        link: 'https://github.com/Minatuski/Minatsuki.github.io',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Hangman Game',
        description: 'Created a hang man game.',
        link: 'https://github.com/Minatuski/HangMan',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Tic-Tac-Toe',
        description: 'Developed a tic tac toe game.',
        link: 'https://github.com/Minatuski/TicTacToe',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Menagerie Database',
        description: 'Developed a database using ORACLE.',
        link: 'https://github.com/Minatuski/MenagerieDatabase',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Final JavaScript Project',
        description: 'My Year Up Final Java Script Project',
        link: 'https://github.com/Minatuski/FinalJSProject',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Stopwatch',
        description: 'An application that utilizes a stopwatch',
        link: 'https://github.com/Minatuski/stopwatch',
    }
];