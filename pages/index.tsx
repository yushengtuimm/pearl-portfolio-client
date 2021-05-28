import Head from "next/head";
import React, { useState, useMemo } from "react";
import { FileInfo } from "../lib/dto";
import { PaginateResult } from "../lib/core";
import { getAvator, getAboutBackground } from "../lib/api";
import { InfoCard, AboutCard, FocusCard } from "../components/Homepage";

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
      <FocusCard wait={1500} />
      <div className="bg-gray-100 rounded-2xl col-span-1 row-span-1"></div>
      {/* <div className="bg-red-200 rounded-2xl col-span-1 row-span-1"></div> */}
    </div>
  );
}

export const getStaticProps = async () => {
  // let res = await fetch(
  //   "https://pearl-portfolio-server.herokuapp.com/files?type=pdf&limit=2"
  // );
  // const pdfs = await res.json();
  const avator = await getAvator();
  const aboutBackground = await getAboutBackground();
  return {
    props: {
      pageResults: null,
      avator: avator,
      about: aboutBackground,
    },
  };
};
