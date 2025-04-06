import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bonolo Modikoane",
  initials: "BM",
  url: "https://dillion.io",
  location: "Johannesburg, South Africa",
  locationLink: "https://maps.app.goo.gl/jLMajoD97jEBEYAz5",
  description:
    "One last thing—I'm actively seeking a full-time position and am also available for freelance work. If you have a project or opportunity, feel free to reach out and say hello! I promise I don’t bite 😉.",
  summary:
    "I’m a frontend and web developer passionate about building responsive, user-friendly websites. With a background in [Business Administration](/#education),  I transitioned into tech and learned [ web development](/#education),  mastering HTML, CSS, JavaScript, and modern frameworks like Vue.js, React, and Next.js. Since 2023, I’ve worked independently, creating fast, accessible websites using [Tailwind CSS, React, next.js and Vue.js](/#skills). I love optimizing performance, integrating APIs, and improving SEO to deliver seamless digital experiences that make an impact.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Vuex/Pinia",
    "Context API",
    "React Hooks",
    "lazy loading",
    "Code splitting",
    "RESTful API",
    "Node.js",
    "Git/GitHub",
    "Vite",
    "NPM",
    "PNPM",
    "Responsive Design",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "bonolojv@gmail.com",
    tel: "+27 62 234 7438",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ValleyValerie",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bonolo-modikoane-13a3992b5/",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:bonolojv@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      cv: {
        name: "Download CV",
        url: "/Frontend CV.pdf", 
        icon: Icons.CV,  
        navbar: true,
        download: true, 
      },
    },
  },

  work: [
    {
      company: "Coded Canvas",
      location: "Johannesburg, South Africa",
      title: "Founder, Visionary Leader & Frontend Developer",
      logoUrl: "/CodedCanvas.jpeg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Founder, Visionary & Frontend Developer – I lead my company with a clear vision and hands-on coding. From strategy to execution, I design and build high-performance, user-centric interfaces while driving innovation and guiding my team. My mission: turn bold ideas into exceptional digital experiences.",
    },
     {
      company: "Independent Freelancer",
      location: "Remote",
      title: "Freelancer developer/engineer",
      logoUrl: "/freelancer.jpeg",
      start: "December 2023",
      end: "November 2024",
      description:
        "I built fast, modern websites with Vue.js, Next.js, and TypeScript. I specialize in responsive design (Tailwind CSS), performance optimization, and adding interactive features. My work included redesigning sites, and improving UX/accessibility. I handled everything from HTML/CSS to API integrations and SEO – delivering complete frontend solutions tailored to every client's needs.",
    },
    {
      company: "Uniaudi",
      location: "Remote",
      title: "Frontend Developer & UI Specialist",
      logoUrl: "/UNIAUDI.jpeg",
      start: "July 2023",
      end: "November 2023",
      description:
        "I spearheaded a complete website redesign and rebuild using semantic HTML5, CSS3, and JavaScript, dramatically improving accessibility and cross-device responsiveness. To transform the user experience, I strategically expanded the site's architecture with new, high-value sections—including dedicated pages for Services, Clients, Investment Projects, and a dynamic News Section—enhancing both content discoverability and engagement. Working closely with stakeholders and project manager, I ensured the redesign not only aligned with brand standards but also actively supported key business objectives and user needs.",
    },    
  ],
  education: [
   
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "The Complete 2023 Web Development Bootcamp, Information Technology",
      logoUrl: "/Udemy.jpeg",
      start: "2023",
      end: "2023",
    },
     {
      school: "Regenesys",
      href: "https://www.regenesys.net/",
      degree: "Bachelor of Business Administration - BBA, Business Administration and Management, General",
      logoUrl: "/regenesys.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Updated version of Uniaudi's website",
      href: "https://uniaudi-pearl.vercel.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "UniAudi is a modern website for a Portuguese accounting firm, offering clear insights into its accounting, tax, and advisory services. Built with reusable TSX components in TypeScript and powered by Next.js and React, the site combines clean design with smooth animations.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "TailwindCSS",
        "Framer Motion",
        "GSAP",
        "Animate.css",
        "Aceternity UI",
        "Shadcn UI",
        "Magic UI",
        "NPM",
      ],
      links: [
        {
          type: "Website",
          href: "https://uniaudi-pearl.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Uniaudi-3.mp4",
    },
    {
      title: "Garden Cafe",
      href: "https://garden-cafe1-m1ixs78aj-valleyvaleries-projects.vercel.app/",
      dates: "December 2024",
      active: true,
      description:
        "Garden Café is a vibrant website that captures a cozy, nature-inspired café experience through a modern, clean design. Built with Vue 3 and powered by Vite, it features modular components, smooth interactivity, and seamless navigation using Vue Router and Pinia for state management.",
      technologies: [
        "Vue 3",
        "Vite",
        "modern ES modules",
        "Vue Router",
        "TailwindCSS",
        "Pinia",
        "NPM",
      ],
      links: [
        {
          type: "Website",
          href: "https://garden-cafe1-m1ixs78aj-valleyvaleries-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "/garden-cafe.mp4",
    },
    {
      title: "Color Palette Generator",
      href: "https://color-palette-generator-beta.vercel.app/",
      dates: "November 2024",
      active: true,
      description:
        "The Color Palette Generator is a sleek, interactive web tool designed to create and explore custom color palettes. Its minimalist interface allows users to generate harmonious color schemes effortlessly, making it a handy resource for designers and developers seeking inspiration or precise color combinations.",
      technologies: [
        "Vue 3",
        "Vite",
        "Vue Router",
        "axios",
        "TailwindCSS",
        "colorthief",
        "headlessui/vue",
        "NPM",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://color-palette-generator-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "/generator.mp4",
    },
    {
      title: "First Uniaudi version",
      href: "https://www.uniaudi.pt/",
      dates: "November 2023",
      active: true,
      description:
        "​In developing Uniaudi's website, I initially crafted the foundational structure and core functionalities. Subsequently, another developer expanded upon this by integrating additional components and sections, enhancing the site's features and user experience. This collaborative effort ensured a robust and comprehensive digital platform for Uniaudi.​",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "JQuery",
        "Bootstrap",
        "NPM",
        "Animate.css",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.uniaudi.pt/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Uniaudi-6.mp4",
    },
    
  ],
  MiniProjects: [
    {
      title: "Web Preloader Animation Component",
      dates: "Feburary 2025",
      description:
        "This solution improves user experience by indicating loading status, reducing perceived wait times and preventing user abandonment during content retrieval.",
        
        features: "Type-safe implementation with TypeScript, Reusable React component architecture, Responsive design for all device sizes and Lightweight with minimal performance impact.",
        technologies: "Next.js, Tailwind CSS, React, Typescript, NPM",
    },
    {
      title: "Restaurant table booking site",
      dates: "August 10th - 25th, 2024",
      description:
        "A visually appealing café website built with Vue.js. This project showcases a modern UI, smooth navigation, and a responsive design. It includes menu displays, interactive elements, and a well-structured component-based architecture.",
      features: "Dynamic menu display, smooth page transitions, responsive design",
      technologies: "Vue.js, Tailwind CSS, Vue Router, Pinia, NPM",
    },
    {
      title: "E-commerce website",
      dates: "September 3th - 22th, 2024",
      description:
        "I rebuilt this modern e-commerce store based on a community Figma template using Next.js. The goal was to translate a sleek UI into a fully responsive, high-performance frontend. ",
      features: "A responsive homepage, product listings, and detail pages. Modular components styled with Tailwind CSS. Image optimization and routing using Next.js features",
      technologies: " Next.js, Tailwind CSS, React, Typescript, NPM",
    },
    
  ],
} as const;
