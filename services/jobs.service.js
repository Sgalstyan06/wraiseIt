import openPositionsData from "../public/data/openPositions";
import get from "lodash.get";

export const getAllJobs = () => {
  if (!!(openPositionsData || []).length) {
    return openPositionsData;
  }

  return [];
};

export const getJobById = (id) => {
  if (!id) {
    return null;
  }

  let job = null;

  if (!!openPositionsData) {
    const categoriesLength = (openPositionsData || []).length;

    if (!!openPositionsData && !!categoriesLength) {
      for (let i = 0; i < categoriesLength; i += 1) {
        const categoryData = openPositionsData[i];
        job = get(categoryData, "openPositions", []).find(
          (job) => Number(job.id) === Number(id),
        );

        if (!!job) {
          break;
        }
      }
    }
  }

  return job;
};
