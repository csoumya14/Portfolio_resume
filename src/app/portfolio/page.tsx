"use client";
import { Layout } from "@/components/Layout/Layout";
import useSWR from "swr";
import { PortfolioType } from "@/types/portfolioType";
import { ProjectDetails } from "@/container/ProjectDetails/ProjectDetails";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function Portfolio() {
  const { data, error } = useSWR<PortfolioType, Error>(
    "/api/portfolio",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        {data.projects.map((project) => (
          <ProjectDetails
            key={project.title}
            imageSrc={project.projectImage}
            description={project.description}
            title={project.title}
            link={project.link}
            techStack={project.techStack}
          />
        ))}
      </Layout>
    </>
  );
}
