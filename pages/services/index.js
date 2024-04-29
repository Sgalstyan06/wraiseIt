import React from "react";
import ServicesPage from "../../containers/ServicesPage";
import SEO from "../../components/SEO";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const Index = () => {
  return (
    <>
      <SEO
        title={`Our services - ${COMPANY_NAME}`}
        description={
          "Interested in digital optimization of your company? We can walk through this process together and move your company to the next level."
        }
        subroute={`services`}
      />
      <ServicesPage />
    </>
  );
};
export default Index;
