import { useMemo, useState } from "react";

// components
import VacancyDescription from "./VacancyDescription";
import NoJobs from "./NoJobs";
//styles
import * as Styled from "./styles";

const Vacancies = ({ vacancyType, onChange, jobs }) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const activeJobData = useMemo(() => {
    return (jobs || []).filter(
      (jobCategory) =>
        jobCategory.title.trim().toLowerCase() ===
        vacancyType.trim().toLowerCase(),
    )[0];
  }, [vacancyType, jobs]);

  return (
    <Styled.VacanciesBlock>
      <Styled.SwitchBlock>
        {jobs.map((vacancy, key) => (
          <Styled.Switcher
            active={vacancyType === vacancy.title}
            key={key}
            onClick={() => {
              setAllExpanded(!allExpanded);
              onChange(vacancy.title);
            }}
          >
            {vacancy.title}
          </Styled.Switcher>
        ))}
      </Styled.SwitchBlock>
      {activeJobData.openPositions && activeJobData.openPositions.length ? (
        <VacancyDescription
          jobs={activeJobData.openPositions}
          allExpanded={allExpanded}
        />
      ) : (
        <NoJobs />
      )}
    </Styled.VacanciesBlock>
  );
};

export default Vacancies;
