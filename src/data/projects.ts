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
      LIGHT: "/images/projects/r1.png",
      DARK: "/images/projects/r1.png",
    },
  },
  {
    index: 2,
    title: "JSON to 3D graph",
    href: "/projects",
    tags: ["tailwind css", "reactjs", "redux"],
    image: {
      LIGHT: "/images/projects/j2g.png",
      DARK: "/images/projects/j2g.png",
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
      "your go-to tool for designing and managing project roadmaps effortlessly. Whether you’re a project manager, team leader, or developer, our tool allows you to create, customize, and download roadmaps tailored to your needs—all for free",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.roadmap-creator.com/",
  },
  {
    name: "JSON 2 Graph",
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: [
      "/images/projects/j2g.png"
    ],
    description:
      "transfrom json to stunning 2d and 3d graph visualization with our json2graph tools",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.json2graph.com/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/prtdark.png"
    ],
    description:
      "My crazy personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BugBlitz98/portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  }
];
