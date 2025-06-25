// src/data/projects.ts
export interface ProjectsProps {
  id: number;
  images: string[];
  title: string;
  "description-1": string;
  "description-2"?: string;
  "description-3"?: string;
  stack: string[];
}

const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Grenier Wallet System & Dashboard",
    images: [
      `${import.meta.env.BASE_URL}projects/1/grenier-1.png`,
      `${import.meta.env.BASE_URL}projects/1/grenier-2.png`,
      `${import.meta.env.BASE_URL}projects/1/grenier-3.png`,
      `${import.meta.env.BASE_URL}projects/1/grenier-4.png`,
      `${import.meta.env.BASE_URL}projects/1/grenier-5.png`,
      `${import.meta.env.BASE_URL}projects/1/grenier-6.png`,
      `${import.meta.env.BASE_URL}projects/1/grenier-stat.png`,
    ],
    "description-1":
      "As a Front-end Developer at Grenier since October 2024, I spearheaded the development of an internal enterprise wallet system that empowers multiple users to securely deposit and withdraw funds within specified time intervals. This system, built with React and TypeScript, incorporates robust security protocols and offers a seamless user experience for managing financial transactions in a corporate environment.",
    "description-2":
      "In addition to the wallet system, I designed and developed an interactive dashboard to visualize real-time financial data and customer insights through dynamic, interactive graphs. This dashboard enables key stakeholders to analyze performance metrics, quickly identify trends, and make data-driven decisions to enhance operational efficiency.",
    "description-3":
      "To optimize performance, I implemented advanced React techniques such as code-splitting and lazy loading, ensuring that only the necessary components are loaded at startup. This approach significantly reduced initial load times and improved overall application responsiveness, while keeping the codebase scalable for future enhancements.",
    stack: [
      "React",
      "TypeScript",
      "Material UI",
      "Code Splitting",
      "Lazy Loading",
    ],
  },
  {
    id: 2,
    images: [
      `${import.meta.env.BASE_URL}projects/2/junior-1.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-2.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-3.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-4.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-5.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-6.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-7.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-8.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-9.jpeg`,
      `${import.meta.env.BASE_URL}projects/2/junior-10.jpeg`,
    ],
    title: "Professional Dance Studio Platform",
    "description-1":
      "The Professional Dance Studio Platform is a comprehensive, state-of-the-art website developed for a professional dancer to showcase an extensive range of dance styles and class offerings. The platform delivers an immersive user experience through interactive galleries, high-quality media content, and a seamless online registration process, serving as a digital gateway for prospective students and enthusiasts.",
    "description-2":
      "As the full stack developer, I led the project using Next.js, TypeScript, and Material UI, building a responsive and visually appealing design. Advanced SEO strategies were implemented, resulting in a 30% boost in organic enrollment. Firebase was integrated to securely store photos and videos, as well as manage email functionalities, ensuring efficient performance and scalability.",
    "description-3":
      "Additionally, the project reflects a strong commitment to user experience and performance optimization. Regular stakeholder feedback and iterative design refinements led to robust error handling and smooth interactions, ultimately elevating the dancer's online presence and engagement.",
    stack: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Firebase",
      "SEO Best Practices",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    images: [
      `${import.meta.env.BASE_URL}projects/3/redears-1.jpg`,
      `${import.meta.env.BASE_URL}projects/3/redears-2.jpeg`,
      `${import.meta.env.BASE_URL}projects/3/redears-3.jpeg`,
      `${import.meta.env.BASE_URL}projects/3/redears-4.jpeg`,
    ],
    title: "Academic Digital Library Platform Prototype",
    "description-1":
      "The Academic Digital Library Platform Prototype is an innovative solution designed to democratize access to literature for students and the wider community. Developed for College Saint-Martin de Tours, it offers free and seamless access to thousands of books, featuring intuitive navigation, advanced search capabilities, and personalized recommendations for an engaging reading experience.",
    "description-2":
      "In my role as the front-end developer, I built the prototype using React, TypeScript, and Styled-components, with a meticulously designed UI in Figma. The integration of Supabase ensured robust API management for secure user authentication and data handling, while third-party APIs enriched the platform’s content.",
    "description-3":
      "This project not only enhanced accessibility to educational resources but also demonstrated the innovative use of modern web technologies to create a scalable, user-centric platform. Continuous improvements and future enhancements are planned to further expand the library’s capabilities and reach.",
    stack: [
      "React",
      "TypeScript",
      "Styled-components",
      "Figma",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    id: 4,
    images: [
      `${import.meta.env.BASE_URL}projects/4/sort-1.jpg`,
      `${import.meta.env.BASE_URL}projects/4/sort-2.jpg`,
      `${import.meta.env.BASE_URL}projects/4/sort-3.jpg`,
      `${import.meta.env.BASE_URL}projects/4/sort-4.jpg`,
      `${import.meta.env.BASE_URL}projects/4/sort-5.jpg`,
      `${import.meta.env.BASE_URL}projects/4/sort-6.jpg`,
    ],
    title: "Interactive Sorting Algorithm Visualization Tool",
    "description-1":
      "The Interactive Sorting Algorithm Visualization Tool is designed to visually demonstrate various sorting algorithms in action. It offers real-time animations for Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, Merge Sort, and Heap Sort, allowing users to follow the step-by-step process of each algorithm.",
    "description-2":
      "Developed using HTML, CSS, and vanilla JavaScript, this project emphasizes clarity and simplicity in design. Users can initiate different sorting processes, compare algorithm efficiencies, and observe how each method manipulates data, transforming abstract concepts into tangible visual experiences.",
    "description-3":
      "Serving as an effective educational tool, the application demystifies complex algorithmic processes. Its clear visual feedback and interactive controls empower learners to experiment with various sorting techniques and deepen their understanding of algorithm design and performance.",
    stack: ["HTML", "CSS", "Vanilla JavaScript"],
  },
];

export default projects;
