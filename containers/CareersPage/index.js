import Wrapper from "/components/Wrapper";
//components
import Hero from "../../components/Hero";
import CareersSection from "../../components/CareersSection";
import ContactForm from "../../components/ContactForm";
//images
import careerBackgroundImage from "../../public/assets/images/careersbg.jpeg";
import * as Styled from "../../components/Hero/styles";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const CareersPage = ({ jobs }) => {
  return (
    <Wrapper>
      <Hero img={careerBackgroundImage} alt={`corporate with ${COMPANY_NAME}`}>
        <Styled.SloganBlock>
          <Styled.Title>We ascend together</Styled.Title>
          <Styled.Description>
            Are you an IT genius or just a humble friendly beginner in the world
            of information technologies, do you want to strive for excellence,
            then come in. We are waiting for you to swim in the ocean of codes
            together. Here is the company where your back will always be covered
            by an outstanding friendly team, who cares about your well being as
            much as you do.
          </Styled.Description>
        </Styled.SloganBlock>
      </Hero>
      <CareersSection jobs={jobs} />
      <ContactForm />
    </Wrapper>
  );
};

export default CareersPage;
