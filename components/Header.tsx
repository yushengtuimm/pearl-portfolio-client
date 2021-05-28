import React from "react";
import Link from "next/link";
import { FileInfo } from "../lib/dto";
import Avatar from "./Avatar";

const Header = ({ avator }: { avator: FileInfo }) => {
  return (
    <header className="sticky top-0 flex justify-between py-3 my-5 mx-auto w-3/4 bg-white bg-opacity-60">
      {/* Left */}
      <div className="flex mx-10 items-center">
        {/* Avatar */}
        {avator && <Avatar src={avator.url} width={100} height={100} />}
      </div>

      {/* Right */}
      <div className="flex space-x-3 mx-10 items-center">
        <Link href="/">Home</Link>
      </div>
    </header>
  );
};

export default Header;
