import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import Link from "next/link";
import useDelay from "../../lib/utils/delay";
import useResize from "../../lib/utils/useResize";
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
  const divRef: any = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
      console.log(dimensions.width, dimensions.height);
    }
  }, []);

  return (
    !hidden && (
      <div className="relative group bg-green-100 rounded-2xl col-span-1 row-span-1 animate-fadeIn">
        {/* <Image
          className="rounded-2xl z--10"
          src={background.url}
          alt="sunshine.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        /> */}

        <div className="relative m-10 h-3/4">
          <h1 className="text-2xl font-inter">About Me</h1>
          <Link href="/about">
            <div className="absolute bottom-0">
              <p className="line-clamp-3 my-5 cursor-pointer font-inter group-hover:underline">
                My academic passion towards nutrition originally comes from my
                childhood routine and interest. Raised by parents who mostly
                work abroad, I started living with plenty of freedom at ten
                years-of-age.
              </p>
              <button className="rounded-full bg-green-50 px-5 py-2 font-inter hover:bg-white">
                Learn More...
              </button>
            </div>
          </Link>
        </div>
      </div>
    )
  );
};

export default AboutCard;
