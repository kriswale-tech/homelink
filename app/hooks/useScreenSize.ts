"use client";

import { useState, useEffect } from "react";

interface ScreenSize {
  width: number;
  height: number;
  isMounted: boolean;
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
    isMounted: false,
  });

  useEffect(() => {
    const getSize = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
      isMounted: true,
    });

    const handleResize = () => {
      setScreenSize(getSize());
    };

    // Use setTimeout to defer the initial state update
    const timeoutId = setTimeout(() => {
      setScreenSize(getSize());
    }, 0);

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
