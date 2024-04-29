import SingleJobPage from "../../containers/SingleJobPage";
import { server } from "../../config";
import { getAllJobs, getJobById } from "../../services/jobs.service";

function Index({ job }) {
  return <SingleJobPage job={job} />;
}

export async function getStaticPaths() {
  const jobsData = getAllJobs();
  const allJobs = [];

  (jobsData || []).forEach((jobCategoryData) => {
    allJobs.push(...jobCategoryData.openPositions);
  });

  const paths = allJobs.map((job) => ({
    params: { id: job.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const job = getJobById(params.id);

  return { props: { job } };
}

export default Index;
