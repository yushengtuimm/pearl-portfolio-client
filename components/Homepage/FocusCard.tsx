import React from "react";
import Link from "next/link";
import useDelay from "../../lib/utils/delay";

const FocusCard = ({ wait }: { wait: number }) => {
  const { hidden } = useDelay(wait);
  return (
    !hidden && (
      <div className="relative group flex flex-wrap items-end p-10 rounded-2xl col-span-1 row-span-1 animate-fadeIn bg-white">
        <h1 className="self-start text-2xl font-semibold tracking-wide uppercase rounded bg-white px-2">
          Career Focus
        </h1>

        <Link href="/career" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <div>
              <h1 className="leading-normal py-1 my-2">
                <span className="text-base tracking-wide line-clamp-3px-2 cursor-pointer group-hover:underline">
                  As my passion for nutrition persists in my cooking and
                  traveling experiences, I found food certifications and labels
                  for product integrity have become more critical with the
                  increase in special dietary needs.
                </span>
              </h1>
              <button className="rounded-full font-light px-5 py-2 hover:bg-white bg-green-50">
                Learn More...
              </button>
            </div>
          </a>
        </Link>
      </div>
    )
  );
};

export default FocusCard;
