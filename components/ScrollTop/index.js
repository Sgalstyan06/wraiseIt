import React, { useEffect, useState } from "react";
//styles
import * as Styled from "./styles";

const ArrowTopIcon = () => (
  <svg
    width="21"
    height="27"
    viewBox="0 0 21 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 25.1667L10.5 1.83333M10.5 1.83333L19.25 10.5833M10.5 1.83333L1.75 10.5833"
      stroke="white"
      strokeWidth="2.91667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ScrollTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const listener = () =>
      window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false);
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Styled.ScrollTop isScrolled={isScrolled} onClick={scrollToTop}>
      <ArrowTopIcon />
    </Styled.ScrollTop>
  );
};

export default ScrollTop;
