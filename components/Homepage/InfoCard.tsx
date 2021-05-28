import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileInfo } from "../../lib/dto";
import Avatar from "../Avatar";
import useDelay from "../../lib/utils/delay";

const InfoCard = ({ wait, file }: { wait?: number; file: FileInfo }) => {
  const { hidden } = useDelay(wait);

  return (
    !hidden && (
      <div className="flex items-center rounded-2xl col-span-1 row-span-2 bg-white">
        <div className="p-5 flex flex-col justify-center items-center align-middle">
          <div className="p-10 animate-dropIn">
            {file && <Avatar src={file.url} width={200} height={200} />}
          </div>
          <div className="flex flex-col items-center font-bold tracking-wide animate-dropUp">
            <h1 className="degree-h">M.P.H. & R.D.</h1>
            <h1 className="degree-h">
              Bachelor's Degree of Life Sciences in Nutritional Sciences
            </h1>
            <h1 className="degree-h">Master's Degree of Public Health</h1>
            <h1 className="degree-h">Registered Dietitian</h1>
          </div>
        </div>
      </div>
    )
  );
};

export default InfoCard;
