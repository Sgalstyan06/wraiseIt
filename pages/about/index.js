import React from "react";
import AboutPage from "../../containers/AboutPage";
import SEO from "../../components/SEO";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const Index = () => (
  <>
    {/*TODO we need to add description*/}
    <SEO
      title={`About Us - ${COMPANY_NAME}`}
      description={
        "We are full-cycle custom outsourcing software development company  with over 30 + diverse IT professionals with strong technology skills and business knowledge and mature methodologies enable us to effectively handle software projects of any scale and complexity."
      }
      subroute={`about`}
    />
    <AboutPage />
  </>
);

export default Index;
