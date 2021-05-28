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
    <div className="grid auto-cols-fr auto-rows-fr lg:grid-cols-3 md:grid-cols-2 grid-rows-content gap-8 p-8 grid-cols-1 bg-gray-200">
      <Head>
        <title>Pearl Tu: Homepage</title>
      </Head>
      <InfoCard wait={1000} file={avator} />
      <AboutCard wait={1500} background={about} />
      <FocusCard wait={1500} />
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
