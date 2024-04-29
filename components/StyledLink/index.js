import React from "react";
//styles
import * as Styled from "./styles";

const StyledLink = ({ href, children, mode }) => {
  return (
    <Styled.LearnMore href={href}>
      <Styled.LinkTo mode={mode}>
        {children}
        <ArrowIcon />
      </Styled.LinkTo>
    </Styled.LearnMore>
  );
};

export default StyledLink;

const ArrowIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M5.47665 0.310303L10.6622 5.49543L5.4762 10.6897" />
      <path d="M10.662 5.49707L0 5.50323" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="11" height="11" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
