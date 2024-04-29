//styles
import * as Styled from "./styles";
//components
import Title from "../../components/Title";
//constants
import { solutionsData } from "./constants";

const SolutionSection = () => (
  <Styled.SolutionSectionBlock>
    <Styled.Container>
      <Title variant={"h3"}>DEVELOPMENT PROCESS</Title>
      <Title variant={"h4"}>How we develop solutions</Title>
      <Styled.SolutionList>
        {solutionsData.map((data, key) => (
          <Styled.Solution key={key}>
            <Styled.Heading>
              <Styled.Num>{key + 1}</Styled.Num>
              <Title variant={"h2"}>{data.title}</Title>
            </Styled.Heading>
            <Styled.Description left={true}>
              {data.description}
            </Styled.Description>
          </Styled.Solution>
        ))}
      </Styled.SolutionList>
    </Styled.Container>
  </Styled.SolutionSectionBlock>
);

export default SolutionSection;
