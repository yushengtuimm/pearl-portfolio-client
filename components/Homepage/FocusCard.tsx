import React from "react";
import useDelay from "../../lib/utils/delay";

const FocusCard = ({ wait }: { wait: number }) => {
  const { hidden } = useDelay(wait);
  return <div></div>;
};

export default FocusCard;
