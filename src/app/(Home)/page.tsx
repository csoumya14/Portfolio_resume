"use client";
import { Layout } from "@/components/Layout/Layout";
import { IntroductionText } from "@/components/IntroductionText/IntroductionText";
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
        <IntroductionImage imageSrc={data.resume[0].introductionImage} />
        <IntroductionText text={data.resume[0].introduction} />
        <AboutMe
          imageSrc={data.resume[0].profileImage}
          description={data.resume[0].summary}
        />
        <ModalButtonGroup
          workContent={data.resume[0].work}
          educationContent={data.resume[0].education}
        />
      </Layout>
    </>
  );
}
