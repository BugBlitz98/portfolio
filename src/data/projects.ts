import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Json Viewer",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "https://project-assets.showwcase.com/1420x/147255/1721969491317-coma.png?type=webp",
      DARK: "https://project-assets.showwcase.com/1420x/147255/1721969491317-coma.png?type=webp",
    },
  },
  {
    index: 1,
    title: "RoadMap Creator",
    href: "/projects",
    tags: [
      "NextJS",
      "Tailwindcss",
      "Scss",
      "redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/roadmap.png",
      DARK: "/images/projects/roadmap.png",
    },
  },
  {
    index: 2,
    title: "bug Blitz",
    href: "/projects",
    tags: ["html", "css", "Javascript"],
    image: {
      LIGHT: "/images/projects/bugblitz.png",
      DARK: "/images/projects/bugblitz.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json Viewer",
    favicon: "/images/projects/logos/jsonviewer.ico",
    imageUrl: [
      "/images/projects/jv1.png",
      "/images/projects/jv2.png",
      "https://project-assets.showwcase.com/1420x/147255/1721969491317-coma.png?type=webp",
    ],
    description:
      "Visualize, compare, and customize JSON data as graphs, charts, and tables. Export insights easily with jsonviewer.tools. Perfect for developers",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.jsonviewer.tools",
  },
  {
    name: "Roadmap Creator",
    favicon: "/images/projects/logos/roadmap.ico",
    imageUrl: [
      "/images/projects/r1.png",
      "/images/projects/roadmap.png"
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.roadmap-creator.com/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My crazy personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BugBlitz98/portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  }
];
