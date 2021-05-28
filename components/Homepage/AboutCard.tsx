import React from "react";
import Link from "next/link";
import useDelay from "../../lib/utils/delay";
import { FileInfo } from "../../lib/dto";
import Image from "next/image";

const AboutCard = ({
  wait,
  background,
}: {
  wait: number;
  background: FileInfo;
}) => {
  const { hidden } = useDelay(wait);

  return (
    !hidden && (
      <div className="relative group flex flex-wrap items-end p-10 rounded-2xl col-span-1 row-span-1 animate-fadeIn bg-white">
        {background && (
          <div className="-z-10">
            <Image
              className="rounded-2xl"
              src={background.url}
              alt="sunshine.jpg"
              layout="fill"
            />
          </div>
        )}

        <h1 className="self-start text-2xl font-semibold tracking-wide uppercase rounded bg-white px-2">
          About Me
        </h1>

        <Link href="/about">
          <a target="_blank" rel="noopener noreferrer">
            <div className="z-10">
              <h1 className="leading-normal py-1 my-2">
                <span className="text-base tracking-wide line-clamp-3 bg-gray-100 px-2 cursor-pointer group-hover:underline">
                  So what made me become a Registered Dietitian and pursued a
                  Master’s degree in Public Health? This academic passion for
                  nutrition originally comes from my childhood routine and
                  interest. Raised by parents who mostly work abroad, I started
                  living with plenty of freedom at ten years of age.
                </span>
              </h1>
              <button className="rounded-full font-light bg-blue-100 px-5 py-2 hover:bg-white">
                Learn More...
              </button>
            </div>
          </a>
        </Link>
      </div>
    )
  );
};

export default AboutCard;
