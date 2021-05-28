import Head from "next/head";
import React, { useState, useMemo } from "react";
import { FileInfo } from "../lib/dto";
import { PaginateResult } from "../lib/core";
import { getAvator, getAboutTag } from "../lib/api";
import InfoCard from "../components/Info/InfoCard";
import AboutCard from "../components/AboutCard/AboutCard";

export default function Home({
  pageResults,
  avator,
  about,
}: {
  pageResults: PaginateResult<FileInfo>;
  avator: FileInfo;
  about: FileInfo;
}) {
  return (
    <div className="grid auto-cols-fr auto-rows-fr grid-cols-3 grid-rows-content gap-8 m-8">
      <Head>
        <title>Pearl Tu: Homepage</title>
      </Head>
      <InfoCard wait={1000} file={avator} />
      <AboutCard wait={1500} background={about} />
      <div className="bg-gray-100 rounded-2xl col-span-1 row-span-2">
        <iframe
          src="https://pearl-tu-portfolio.s3.amazonaws.com/89d5df20-d66c-4763-8596-f3f342b40080.pptx?AWSAccessKeyId=AKIARLS3QRVYPK24JBPQ&Expires=1621969483&Signature=Nhcrx7SJqOQY4esS1UUNiIkY1io%3D"
          width="100%"
          height="600px"
        />
      </div>
      {/* <div className="bg-red-200 rounded-2xl col-span-1 row-span-1"></div> */}
    </div>
  );
}

export const getStaticProps = async () => {
  let res = await fetch(
    "https://pearl-portfolio-server.herokuapp.com/files?type=pdf&limit=2"
  );
  const pdfs = await res.json();
  const avator = await getAvator();
  const aboutTag = await getAboutTag();
  return {
    props: {
      pageResults: pdfs,
      avator: avator,
      about: aboutTag,
    },
  };
};
