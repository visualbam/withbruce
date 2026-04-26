// TODO: Update experience titles, companies, and durations with your actual data.
// Projects and services are sourced from the asset images already in the project.

export interface Tag {
  id: number;
  name: string;
}

export interface ProjectImage {
  id: number;
  filePath: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  isFeatured: boolean;
  cover: string;
  logo: string;
  mast: string;
  tags: Tag[];
  images: ProjectImage[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  logo: string;
  duration: string;
}

export interface OfferedService {
  name: string;
  imagePath: string;
  altText: string;
  description: string;
  isFeatured?: boolean;
}

function thumbs(prefix: string, nums: number[]): ProjectImage[] {
  return nums.map((n, i) => ({
    id: i + 1,
    filePath: `/${prefix}-thumbnail-${n}.webp`,
  }));
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Pampered Chef",
    slug: "pampered-chef",
    description:
      "A modern platform redesign for Pampered Chef, elevating the digital experience for their independent consultants and customers with a fresh, contemporary design language and intuitive navigation.",
    isFeatured: true,
    cover: "/pampered-chef-cover.webp",
    logo: "/pampered-chef-logo-light.svg",
    mast: "/pampered-chef-mast.webp",
    tags: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Design" },
      { id: 3, name: "Responsive Design" },
      { id: 4, name: "UI/UX" },
      { id: 5, name: "Web Development" },
    ],
    images: thumbs(
      "pampered-chef",
      [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    ),
  },
  {
    id: 2,
    title: "Pittsburgh Technical College",
    slug: "pittsburgh-technical-college",
    description:
      "A comprehensive website redesign for Pittsburgh Technical College, modernizing their digital presence with responsive design, improved navigation, and a fresh visual identity that speaks to prospective students.",
    isFeatured: true,
    cover: "/pittsburgh-technical-college-cover.webp",
    logo: "/pittsburgh-technical-college-logo-light.svg",
    mast: "/pittsburgh-technical-college-mast.webp",
    tags: [
      { id: 1, name: "Design" },
      { id: 6, name: ".NET" },
      { id: 3, name: "Responsive Design" },
      { id: 4, name: "UI/UX" },
      { id: 5, name: "Web Development" },
    ],
    images: thumbs(
      "pittsburgh-technical-college",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    ),
  },
  {
    id: 3,
    title: "Vodsearch",
    slug: "vodsearch",
    description:
      "Vodsearch is a streaming content aggregator that lets users search across multiple platforms to discover exactly where their favorite movies and TV shows are available to watch.",
    isFeatured: true,
    cover: "/vodsearch-project-cover.webp",
    logo: "/vodsearch-logo.svg",
    mast: "/vodsearch-mast.webp",
    tags: [
      { id: 2, name: "Design" },
      { id: 4, name: "UI/UX" },
      { id: 5, name: "Web Development" },
      { id: 7, name: "Vue.js" },
    ],
    images: thumbs(
      "vodsearch",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ),
  },
  {
    id: 4,
    title: "FastEndpoints",
    slug: "fastendpoints",
    description:
      "Documentation site and landing page for FastEndpoints, a high-performance .NET library for building REST APIs — designed to be developer-friendly and visually sharp.",
    isFeatured: true,
    cover: "/fastendpoints-project-cover.webp",
    logo: "/fast-endpoints-logo.svg",
    mast: "/fast-endpoints-mast.webp",
    tags: [
      { id: 6, name: ".NET" },
      { id: 2, name: "Design" },
      { id: 8, name: "Software Engineering" },
      { id: 5, name: "Web Development" },
    ],
    images: thumbs("fast-endpoints", [1, 2, 3, 4, 5, 6]),
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "Principal Software Engineer",
    company: "DDI | Development Dimensions International",
    logo: "/ddi-logo.svg",
    duration: "Mar 2026 – Present",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "DDI | Development Dimensions International",
    logo: "/ddi-logo.svg",
    duration: "Aug 2024 – Mar 2026",
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    company: "Broadridge",
    logo: "/broadridge-logo.png",
    duration: "Jan 2018 – Aug 2024",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Berryville Holdings, LLC.",
    logo: "/bvhllc-logo.svg",
    duration: "Feb 2016 – Nov 2017",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Acatar",
    logo: "/acatar-logo.svg",
    duration: "Jan 2015 – Jan 2016",
  },
  {
    id: 6,
    title: "Front End Web Developer",
    company: "Branding Brand",
    logo: "/bb-logo.svg",
    duration: "Nov 2013 – Aug 2014",
  },
  {
    id: 7,
    title: "Front End Web Developer",
    company: "PPG Industries",
    logo: "/ppg-logo.svg",
    duration: "Aug 2012 – Nov 2013",
  },
  {
    id: 8,
    title: "UI/UX Designer",
    company: "Kolano Design",
    logo: "/kolano-logo.png",
    duration: "2013 – 2014",
  },
];

export const SERVICES: OfferedService[] = [
  {
    name: "UI/UX",
    imagePath: "/service-icon-uiux.svg",
    altText: "Icon representing UI/UX service",
    description:
      "Design accessible product flows that make complex interactions feel clear.",
    isFeatured: true,
  },
  {
    name: "Software Engineering",
    imagePath: "/service-icon-software-engineering.svg",
    altText: "Icon representing software engineering service",
    description:
      "Build maintainable features across front end, APIs, and product systems.",
    isFeatured: true,
  },
  {
    name: "Web Development",
    imagePath: "/service-icon-web-development.svg",
    altText: "Icon representing web development service",
    description:
      "Create fast, resilient websites tuned for real users and business goals.",
  },
  {
    name: "Bug Squashing",
    imagePath: "/service-icon-bug-squashing.svg",
    altText: "Icon representing bug fixing service",
    description:
      "Trace defects, stabilize releases, and keep critical product paths moving.",
  },
  {
    name: "Design Insights",
    imagePath: "/service-icon-design-insights.svg",
    altText: "Icon representing design insights service",
    description:
      "Turn audits, analytics, and user signals into sharper interface decisions.",
  },
  {
    name: "Mobile Strategy",
    imagePath: "/service-icon-mobile-strategy.svg",
    altText: "Icon representing mobile strategy service",
    description:
      "Plan touch-first experiences that scale cleanly across screens and contexts.",
  },
  {
    name: "Photo Editing",
    imagePath: "/service-icon-photo-editing.svg",
    altText: "Icon representing photo editing service",
    description:
      "Polish campaign visuals, product imagery, and branded digital assets.",
  },
  {
    name: "Responsive Design",
    imagePath: "/service-icon-responsive-design.svg",
    altText: "Icon representing responsive design service",
    description:
      "Refine layouts so content, navigation, and interactions adapt naturally.",
  },
];

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(
  id: number,
): { prev: Project | undefined; next: Project | undefined } {
  const idx = PROJECTS.findIndex((p) => p.id === id);
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : PROJECTS[PROJECTS.length - 1],
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : PROJECTS[0],
  };
}
