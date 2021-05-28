import React from "react";
import Image from "next/image";
import Link from "next/link";

const Avatar = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="cursor-pointer transition duration-150 transform hover:scale-110">
      <Image
        className="rounded-full"
        src={src}
        width={width}
        height={height}
        alt="profile picture"
      />
    </div>
  );
};

export default Avatar;
