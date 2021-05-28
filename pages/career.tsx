import React from "react";
import Head from "next/head";

function career() {
  return (
    <>
      <Head>
        <title>Career & Value</title>
      </Head>

      <div className="flex justify-center bg-white my-24">
        <div className="flex flex-col justify-center items-start max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            Career Focus
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Published 19 February 2019
          </p>
          <h1 className="self-start tracking-wide font-bold text-3xl"></h1>
          <h2 className="tracking-wide">
            <p className="py-5">
              👋 Mi purus platea euismod ac dui aliquet aenean lacus eleifend
              eros interdum. Maecenas praesent ornare phasellus, integer ut.
              Nullam quis pharetra cras, vehicula massa pellentesque nostra.
              Aenean, dapibus sollicitudin congue facilisi elementum parturient
              commodo. Ullamcorper senectus magna ac congue sed elementum
              ullamcorper magnis scelerisque ac. Eros eleifend conubia nisi
              venenatis.
            </p>
            <p>
              Egestas potenti per sem. Rutrum ipsum cursus himenaeos etiam
              egestas primis fringilla sodales eros ut. Nostra integer, sagittis
              quis. Consequat penatibus amet tincidunt ligula tempor iaculis
              curabitur ligula. Aptent consectetur nunc curabitur urna lorem mi
              nunc ut magnis. Eros erat augue imperdiet. Egestas consectetur
              aliquam risus lectus lacinia mattis massa potenti cum gravida
              aliquet nascetur. Cum malesuada ligula habitasse hac gravida cum
              viverra. Quisque aptent ridiculus ornare iaculis molestie habitant
              fringilla diam? Mus non odio commodo cursus senectus taciti
              vehicula interdum consectetur lacinia? Lacus magnis inceptos
              hendrerit ligula posuere. Conubia blandit mollis nibh, dolor
              integer inceptos feugiat aliquet bibendum! Sociosqu tempor non,
              per condimentum. Natoque ut potenti morbi mollis massa laoreet est
              mus massa tellus. Cum tellus quis eros, vivamus dignissim suscipit
              hendrerit vivamus nec quam sollicitudin. Faucibus magnis primis
              elementum donec pretium? Gravida sagittis ut faucibus curabitur
              augue curae; pellentesque. Quis consequat leo, mattis diam orci.
            </p>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Example of blockquote - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </blockquote>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
              <code className="break-words whitespace-pre-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </code>
            </pre>
          </h2>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
export default career;
