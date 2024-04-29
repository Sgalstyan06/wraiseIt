import React, { useEffect, useState } from "react";
//components
import Title from "../Title";
import StyledLink from "../StyledLink";
//icons
import { MinusIcon, PlusIcon } from "../Icons";
//styles
import * as Styled from "./styles";

const Accordion = ({ vacancy, allExpanded }) => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setExpand(false);
  }, [allExpanded]);

  return (
    <Styled.Accordion expanded={expand}>
      <Styled.AccordionSummary
        expandIcon={expand ? <PlusIcon /> : <MinusIcon />}
        onClick={() => setExpand((prev) => !prev)}
      >
        <Title variant={"h5"}>{vacancy.title}</Title>
      </Styled.AccordionSummary>
      <Styled.AccordionDetails>
        <Styled.Description>{vacancy.description}</Styled.Description>
        <StyledLink href={`jobs/${vacancy.id}`}>Learn More</StyledLink>
      </Styled.AccordionDetails>
    </Styled.Accordion>
  );
};

export default Accordion;
