import Image from "next/image";
//styles
import * as Styled from "./styles";
//components
import Title from "../../components/Title";
//images
import firstCultureImage from "/public/assets/images/cultureImage.jpeg";
import secondCultureImage from "/public/assets/images/cultureSecondImage.jpeg";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

function CultureSectionContainer() {
  return (
    <Styled.CultureSection>
      <Styled.Container>
        <Styled.CultureSectionBlock>
          <Styled.CultureDescription>
            <Title variant={"h4"}>Our culture</Title>
            <Styled.Description left={true}>
              We are friendship based company, where the highest value is the
              human being, our present and future teammate, our present and
              future friend and for sure our present and future client. Despite
              of other companies where first forms the company, the work and
              after the friendship, we have different approach. Firstly we form
              friendship and later the work.
            </Styled.Description>
            <Styled.Description left={true}>
              We gathered here to serve to one idea, which is solving the
              problems in the scope of our possibilities and make it done with
              the optimal and the best ways we can. In our team we pay attention
              to the development of each member regardless to the experience
              level and seniority. We also arrange IT trainings in Armenia,
              where the main purpose is to get our future friend and teammate,
              who will grow and raise in accordance with our company culture.
            </Styled.Description>
          </Styled.CultureDescription>
          <Styled.CultureImages>
            <Styled.Image>
              <Image
                src={firstCultureImage}
                objectFit={"cover"}
                layout={"fill"}
                alt={`culture of the ${COMPANY_NAME}`}
              />
            </Styled.Image>
            <Styled.Image>
              <Image
                src={secondCultureImage}
                objectFit={"cover"}
                layout={"fill"}
                alt={`benefits of the ${COMPANY_NAME}`}
              />
            </Styled.Image>
          </Styled.CultureImages>
        </Styled.CultureSectionBlock>
      </Styled.Container>
    </Styled.CultureSection>
  );
}

export default CultureSectionContainer;
