import React from "react";
import HomePage from "../containers/HomePage";
import SEO from "../components/SEO";
//constants
import { COMPANY_NAME } from "../constants/staticInfo";

const Home = () => {
  return (
    <>
      <SEO
        title={`${COMPANY_NAME} - Software Development Company`}
        description={`As an software development company, ${COMPANY_NAME} helps clients develop new products and improve their businesses by creating efficient custom software solutions.`}
      />
      <HomePage />
    </>
  );
};

export default Home;
