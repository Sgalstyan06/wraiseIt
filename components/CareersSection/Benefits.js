import React from "react";
//styles
import * as Styled from "./styles";
//components
import Title from "../Title";
//data
import { benefitsData } from "./vacanciesData";

const Benefits = () => (
  <Styled.BenefitsBlock>
    <Title variant={"h3"}>BENEFITS OF BEING WRAISIT MEMEBER</Title>
    <Styled.BenefitsList>
      {benefitsData.map((desc, key) => (
        <Styled.BenefitsDesc key={key}>
          <CheckIcon />
          {desc.text}
        </Styled.BenefitsDesc>
      ))}
    </Styled.BenefitsList>
  </Styled.BenefitsBlock>
);

export default Benefits;

const CheckIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.99999 11.2001L1.79999 7.0001L0.399994 8.4001L5.99999 14.0001L18 2.0001L16.6 0.600098L5.99999 11.2001Z"
      fill="#1DCA9D"
    />
  </svg>
);
