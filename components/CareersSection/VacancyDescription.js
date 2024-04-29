//components
import Accordion from "../Accordion/Accordion";
//styles
import * as Styled from "./styles";

const VacancyDescription = ({ jobs, allExpanded }) => (
  <Styled.AccordionBlock>
    {jobs.map((vacancy, key) => (
      <Accordion key={key} vacancy={vacancy} allExpanded={allExpanded} />
    ))}
  </Styled.AccordionBlock>
);

export default VacancyDescription;
