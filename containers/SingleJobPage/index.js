//components
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import TextTypes from "../../components/TextTypes";
import Hero from "../../components/Hero";
import ContactForm from "../../components/ContactForm";
import SEO from "../../components/SEO";
//styles
import * as Styled from "./styles";
//images
import careerBackgroundImage from "../../public/assets/images/careersbg.jpeg";
import image from "../../public/assets/images/processTest.jpeg";
import { OUR_EMAIL } from "../../constants/staticInfo";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const SingleJobPage = ({ job }) => {
  return (
    <>
      <SEO
        title={`${COMPANY_NAME} - ${job.title} in ${job.location}`}
        image={image}
      />
      <Wrapper>
        <Hero
          img={careerBackgroundImage}
          alt={`Find your dream job in ${COMPANY_NAME} - ${job.title}`}
        />
        <Styled.Container>
          <Styled.JobPage>
            <Title variant={"h2"}>{job.title}</Title>
            <Styled.JobDueTo>Job due to - {job.dueTo}</Styled.JobDueTo>
            {job.details.map((text, key) => (
              <TextTypes key={key} textObject={text} />
            ))}
            <Styled.SendCvText>
              If you are interested, please send us your CV and a cover letter
              to
              <Styled.Email href={`mailto:${OUR_EMAIL}`}>
                {OUR_EMAIL}
              </Styled.Email>
            </Styled.SendCvText>
          </Styled.JobPage>
        </Styled.Container>
        <ContactForm />
      </Wrapper>
    </>
  );
};

export default SingleJobPage;
