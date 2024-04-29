import image from "/public/assets/images/processTest.jpeg";
import CareersPage from "../../containers/CareersPage";
import SEO from "../../components/SEO";
import { getAllJobs } from "../../services/jobs.service";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const Index = ({ jobs }) => {
  return (
    <>
      <SEO
        title={`Career Opportunities and Job Openings - ${COMPANY_NAME}`}
        description={
          "Are you an IT genius or just a humble friendly beginner in the world of information technologies, then come in. We are waiting for you to swim in the ocean of codes together."
        }
        image={image}
        subroute={`careers`}
      />
      <CareersPage jobs={jobs} />
    </>
  );
};

export async function getStaticProps() {
  const jobs = getAllJobs();
  return {
    props: {
      jobs,
    },
  };
}

export default Index;
