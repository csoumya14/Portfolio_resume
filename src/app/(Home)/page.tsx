"use client";
import { Layout } from "@/components/Layout/Layout";
import useSWR from "swr";
import { ResumeType } from "@/types/resumeType";
import { AboutMe } from "@/container/AboutMe/AboutMe";
import { ModalButtonGroup } from "@/container/ModalButtonGroup/ModalButtonGroup";
import { IntroductionImage } from "@/container/IntroductionImage/IntroductionImage";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR<ResumeType, Error>("/api/resume", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <>
      <Layout>
        <IntroductionImage text={data.resume.introduction} />
        <AboutMe
          imageSrc={data.resume.profileImage}
          description={data.resume.summary}
        />
        <ModalButtonGroup
          workContent={data.resume.work}
          educationContent={data.resume.education}
        />
      </Layout>
    </>
  );
}
