import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  // get the necessary state and functions from the app context
  const { getJobs, jobs, isLoading, page, totalJobs, search, searchStatus, searchType, sort, numOfPages } =
    useAppContext();

  // useEffect hook to fetch the jobs data when the page, search, searchStatus, searchType, or sort values change
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  // if the data is still being fetched, display the loading component
  if (isLoading) {
    return <Loading center />;
  }

  // if there are no jobs to display, display a message
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  // render the jobs data, mapping over each job and passing the data to the Job component
  return (
    <Wrapper>
      {/* display the number of jobs found */}
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      {/* map over the jobs data and render the Job component for each job */}
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {/* only render the PageBtnContainer if there are more than 1 page of jobs to display */}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
