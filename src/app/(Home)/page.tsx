"use client";
import { Layout } from "@/components/Layout/Layout";
import Image from "next/image";
import { IntroductionText } from "@/components/IntroductionText/IntroductionText";
import useSWR from "swr";
import { ResumeType } from "@/types/resumeType";
import { AboutMe } from "@/container/AboutMe/AboutMe";
import { ModalButtonGroup } from "@/container/ModalButtonGroup/ModalButtonGroup";
import { Footer } from "@/container/Footer/Footer";

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
        <Image
          src={data.resume[0].introductionImage}
          width={50}
          height={50}
          alt="image of code and computer"
          layout="responsive"
        />
        <IntroductionText text={data.resume[0].introduction} />
        <AboutMe
          imageSrc={data.resume[0].profileImage}
          description={data.resume[0].summary}
        />
        <ModalButtonGroup />
      </Layout>
      <Footer />
    </>
  );
}
