import { useEffect, useState } from "react";

export const useOnScreen = (
  ref,
  rootMargin = "0px",
  disconnectWhenElementIsInViewport = false,
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (disconnectWhenElementIsInViewport && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};
