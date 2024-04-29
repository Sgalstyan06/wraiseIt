//components
import CustomersSection from "../../components/CustomersSection";
import AboutUsSection from "../../components/AboutUsSection";
import ContactForm from "../../components/ContactForm";
import ScrollTop from "../../components/ScrollTop";
import Wrapper from "/components/Wrapper";
import Hero from "../../components/Hero";
import MainValuesSection from "../../components/MainValuesSection";
import Button from "../../components/Button";
//styles
import * as Styled from "../../components/Hero/styles";
import { ButtonStates } from "../../constants/components-types";
import { SERVICES_PATH } from "../../constants/paths";
import Link from "next/link";
import AnimatedWrapper from "../../components/AnimatedWrapper";
import { COMPANY_NAME } from "../../constants/staticInfo";

const HomePage = () => {
  return (
    <Wrapper>
      <Hero alt={`Welcome to ${COMPANY_NAME}`}>
        <Styled.SloganBlock>
          <Styled.Title>We make your work done</Styled.Title>
          <Styled.Description>
            We are software development company, which will build your web page
            or application in accordance with your dreams and requirements. Our
            flexible and professional team is here to provide you with tailor
            made webpages and applications under the clean code.
          </Styled.Description>
          <Styled.ButtonBlock>
            <Link href={SERVICES_PATH}>
              <Button buttonState={ButtonStates.TRANSPARENT}>
                Our services
              </Button>
            </Link>
          </Styled.ButtonBlock>
        </Styled.SloganBlock>
      </Hero>
      <AnimatedWrapper>
        <AboutUsSection />
      </AnimatedWrapper>
      <CustomersSection />
      <MainValuesSection />
      <ContactForm />
      <ScrollTop />
    </Wrapper>
  );
};

export default HomePage;
