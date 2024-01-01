export interface LinkType {
  github: string;
  live: string;
}
export interface PortfolioType {
  projects: {
    title: string;
    techStack: string[];
    projectImage: string;
    description: string;
    link: LinkType;
  }[];
}
