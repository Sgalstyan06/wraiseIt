//components
import Wrapper from "/components/Wrapper";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/ServicesSection";
import ContactForm from "../../components/ContactForm";
import DevelopmentProcessSection from "../../components/ServicesSection/DevelopmentProcessSection";
//images
import serviceBackgroundImage from "/public/assets/images/servicesbg.jpeg";
import * as Styled from "../../components/Hero/styles";
import Button from "../../components/Button";
import { ButtonStates } from "../../constants/components-types";
import React from "react";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";
import AnimatedWrapper from "../../components/AnimatedWrapper";

const ServicesPage = () => {
  return (
    <Wrapper>
      <Hero
        img={serviceBackgroundImage}
        alt={`Services of the ${COMPANY_NAME}`}
      >
        <Styled.SloganBlock>
          <Styled.Title>Let’s move your business forward</Styled.Title>
          <Styled.Description>
            We are Software Development company that helps small and medium
            businesses, SaaS, and enterprise companies with cutting-edge
            solutions. We provide solutions that integrate the development of
            the website or application from the scratch or adjustment of already
            available product to your progressing needs.
          </Styled.Description>
        </Styled.SloganBlock>
      </Hero>
      <AnimatedWrapper>
        <ServicesSection />
      </AnimatedWrapper>
      <DevelopmentProcessSection />
      <ContactForm />
    </Wrapper>
  );
};

export default ServicesPage;
