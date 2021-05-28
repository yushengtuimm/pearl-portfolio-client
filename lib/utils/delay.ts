import React, { useState, useEffect } from "react";

const useDelay = (wait) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(false), wait);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { hidden };
};
export default useDelay;
