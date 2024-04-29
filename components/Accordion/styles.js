import styled from "styled-components";
//variables
import { primaryColor, whiteColor } from "../../styles/variables";

//components
import AccordionMaterial from "@material-ui/core/Accordion";
import AccordionSummaryMaterial from "@material-ui/core/AccordionSummary";
import AccordionDetailsMaterial from "@material-ui/core/AccordionDetails";

export const Accordion = styled(AccordionMaterial)`
  width: 100%;
  margin-bottom: 16px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 4px 0 #00000040;
  border-image: linear-gradient(
      to left top,
      ${primaryColor} 0%,
      ${whiteColor} 100px,
      #fff 50%,
      #fff calc(100% - 100px),
      ${primaryColor} 100%
    )
    10;
`;

export const AccordionSummary = styled(AccordionSummaryMaterial)`
  width: 100%;
`;

export const AccordionDetails = styled(AccordionDetailsMaterial)`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p``;
