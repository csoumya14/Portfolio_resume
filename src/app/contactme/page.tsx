"use client";
import { Layout } from "@/components/Layout/Layout";
import useSWR from "swr";
import { ContactType } from "@/types/contactType";
import { ContactInfo } from "@/container/ContactInfo/ContactInfo";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function Contact() {
  const { data, error } = useSWR<ContactType, Error>("/api/contactme", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data.contactInfo);
  return (
    <>
      <Layout>
        <ContactInfo
          title={data.contactInfo.title}
          summary={data.contactInfo.summary}
          phoneNumber={data.contactInfo.phoneNumber}
          email={data.contactInfo.email}
          link={data.contactInfo.link}
        />
      </Layout>
    </>
  );
}
