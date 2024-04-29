//components
import Wrapper from "/components/Wrapper";
import Hero from "../../components/Hero";
import AboutUsDescription from "./AboutUsDescription";
import MissionSection from "./MissionSection";
import SolutionSection from "./SolutionSection";
import CultureSection from "./CultureSection";
import ContactForm from "../../components/ContactForm";
import Button from "../../components/Button";
//images
import aboutUsBackgroundImage from "../../public/assets/images/aboutUS.jpeg";
//styles
import * as Styled from "../../components/Hero/styles";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const AboutPage = () => {
  return (
    <Wrapper>
      <Hero img={aboutUsBackgroundImage} alt={`About ${COMPANY_NAME}`}>
        <Styled.SloganBlock>
          <Styled.Title>About {COMPANY_NAME}</Styled.Title>
          <Styled.Description>
            We are full-cycle custom outsourcing software development company
            with over 30 + diverse IT professionals with strong technology
            skills and business knowledge and mature methodologies enable us to
            effectively handle software projects of any scale and complexity.
            Our team is located in Armenia and in The Czech Republic.
          </Styled.Description>
        </Styled.SloganBlock>
      </Hero>
      <AboutUsDescription />
      <MissionSection />
      <SolutionSection />
      <CultureSection />
      <ContactForm />
    </Wrapper>
  );
};

export default AboutPage;
