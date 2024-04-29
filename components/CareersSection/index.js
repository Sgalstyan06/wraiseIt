import React, { useCallback, useState } from "react";
//styles
import * as Styled from "./styles";
//components
import Title from "../Title";
import Vacancies from "./Vacancies";
import Benefits from "./Benefits";

const CareersSection = ({ jobs }) => {
  const [vacancy, setVacancy] = useState((jobs[0] && jobs[0].title) || "");

  const changeVacancy = useCallback(
    (ev) => {
      setVacancy(ev);
    },
    [setVacancy],
  );

  return (
    <Styled.Careers>
      <Styled.Container>
        <Title variant={"h3"}>OPEN VACANCIES</Title>
        <Title variant={"h4"}>We are hiring!</Title>
        <Styled.CareersBlock>
          <Vacancies
            jobs={jobs}
            vacancyType={vacancy}
            onChange={changeVacancy}
          />
          <Benefits />
        </Styled.CareersBlock>
      </Styled.Container>
    </Styled.Careers>
  );
};

export default CareersSection;
