import { useCallback, useEffect, useState } from 'react';
import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';
import usePageName from '../utils/usePageName';
import { useAppContext } from '../context/appContext';
import { convertDate, useOptions } from '../utils';

const Search = () => {
  const {
    authFetch,
    user: { _id },
  } = useAppContext();

  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');
  const [catalog, setCatalog] = useState('All');

  const [isSearching, setIsSearching] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState();

  const [jobType, setJobType] = useState([]);
  const jobTypeOptions = useOptions(jobType);
  const [jobCatalog, setJobCatalog] = useState([]);
  const jobCatalogOptions = useOptions(jobCatalog);

  const [user, setUser] = useState(false);
  const [modal, setModal] = useState(false);

  const jobsFetch = useCallback(async (path) => {
    setIsSearching(true);
    const { data } = await authFetch.get(path);
    setJobs(data);
    setIsSearching(false);
  }, []);

  const userFetch = useCallback(async () => {
    const { data } = await authFetch.get(`user/${_id}`);
    setUser(data);
  }, []);

  useEffect(() => {
    const init = async () => {
      const { data: jobCatalog } = await authFetch.get('jobCatalog');
      setJobCatalog(jobCatalog);

      const { data: jobType } = await authFetch.get('jobType');
      setJobType(jobType);

      await userFetch();
      await jobsFetch('job/search');
    };

    init();
  }, []);

  usePageName('Search Jobs');

  const onSearch = () => {
    let path = `job/search?search=${search}`;
    if (type !== 'All') path = path + `&jobType=${type}`;
    if (catalog !== 'All') path = path + `&jobCatalog=${catalog}`;
    jobsFetch(path);
  };

  const onApply = async () => {
    await authFetch.post('internship', {
      Student: user._id,
      Job: currentJob._id,
      Company: currentJob.RecruitCompID?._id,
    });
    await userFetch();
  };

  return (
    <>
      <Wrapper>
        <div className="form" style={{ padding: '3rem', margin: '0 0 2rem' }}>
          <FormRow type="text" name="search" value={search} handleChange={(event) => setSearch(event.target.value)} />
          <div className="form-center" style={{ marginTop: '1rem' }}>
            <FormRowSelect
              labelText="Job Type"
              name="searchType"
              value={type}
              handleChange={(event) => setType(event.target.value)}
              list={jobTypeOptions}
            />
            <FormRowSelect
              labelText="Job Catalog"
              name="searchCatalog"
              value={catalog}
              handleChange={(event) => setCatalog(event.target.value)}
              list={jobCatalogOptions}
            />
          </div>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '1rem' }}>
            <button
              className="btn btn-block btn-danger"
              disabled={false}
              onClick={() => {
                setSearch('');
                setType('All');
                setCatalog('All');
              }}
            >
              Clear Filters
            </button>
            <button className="btn btn-block" disabled={isSearching} onClick={() => onSearch()}>
              Search
            </button>
          </div>
        </div>
      </Wrapper>

      <section style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ width: '50%' }}>
          {jobs.map((job) => (
            <div
              key={job._id}
              style={{ marginBottom: '2rem', background: 'white', padding: '1rem 3rem', cursor: 'pointer' }}
              onClick={() => setCurrentJob(job)}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid black',
                  marginBottom: '1rem',
                }}
              >
                <img
                  alt={job.RecruitCompID?.Name}
                  src={job.RecruitCompID?.Logo}
                  style={{ width: 75, height: 75, objectFit: 'contain', marginRight: '2rem' }}
                ></img>

                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{job.JobTitle}</div>
                  <div>{job.RecruitCompID?.Name}</div>
                </div>

                <div style={{ marginLeft: 'auto' }}>
                  <div>{convertDate(job.createdAt)}</div>
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 600 }}>Job types</div>
                <div>{job.JobType?.Name}</div>
                <div style={{ fontWeight: 600 }}>Job catalogs</div>
                <div>{job.JobCatalog?.map(({ Name }) => Name).join(', ')}</div>
                <div style={{ fontWeight: 600 }}>Description</div>
                <div>{job.JobDescription}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ width: '50%', background: 'white', padding: '2rem', marginBottom: '2rem' }}>
          {currentJob ? (
            <>
              <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{currentJob.JobTitle}</div>

              {user.appliedInternship.some((id) => id === currentJob._id) ? (
                <button className="btn btn-block btn-danger" style={{ pointerEvents: 'none' }}>
                  Applied
                </button>
              ) : (
                <button className="btn btn-block btn-hipster" onClick={() => setModal(true)}>
                  Apply internship
                </button>
              )}

              <div className="modal" style={modal ? { display: 'flex' } : {}}>
                <div className="modal-content">
                  <h2>Apply Intership</h2>

                  <p>
                    <b>Company: </b>
                    {currentJob.RecruitCompID?.Name}
                  </p>
                  <p>
                    <b>Job Title: </b>
                    {currentJob.JobTitle}
                  </p>
                  <p>
                    <b>Student ID: </b>
                    {user.IDNumber}
                  </p>
                  <p>
                    <b>Student Name: </b>
                    {user.name}
                  </p>
                  <p>
                    <b>Course: </b>
                    {user.CourseNumber}
                  </p>
                  <p>
                    <b>Class: </b>
                    {user.ClassName}
                  </p>
                  <p>
                    <b>Teacher: </b>
                    {user.HeadTeacher?.name}
                  </p>

                  <div style={{ display: 'flex', gap: '3rem', marginTop: '1rem' }}>
                    <button className="btn btn-block btn-danger" onClick={() => setModal(false)}>
                      Cancel
                    </button>
                    <button
                      className="btn btn-block"
                      onClick={() => {
                        onApply();
                        setModal(false);
                      }}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>

              <p>
                Valid date: {convertDate(currentJob.JobValidFromDate)} - {convertDate(currentJob.JobValidToDate)}
              </p>
              <p style={{ fontWeight: 600 }}>Description</p>
              <p>{currentJob.JobDescription}</p>

              <div style={{ marginTop: '2rem', border: '1px solid gray', borderRadius: 5, padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    alt={currentJob.RecruitCompID?.Name}
                    src={currentJob.RecruitCompID?.Logo}
                    style={{ width: 75, height: 75, objectFit: 'contain', marginRight: '2rem' }}
                  ></img>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {currentJob.RecruitCompID?.Name}
                  </div>
                </div>
                <div
                  style={{
                    fontStyle: 'italic',
                    padding: '0.5rem 0',
                  }}
                >
                  {currentJob.RecruitCompID?.Description}
                </div>
                <div>
                  {currentJob.RecruitCompID?.Address}, {currentJob.RecruitCompID?.District}
                  {', '}
                  {currentJob.RecruitCompID?.Country}
                </div>
                <div>{currentJob.RecruitCompID?.ContactPerson}</div>
                <div>{currentJob.RecruitCompID?.ContactPerTel}</div>
                <div>{currentJob.RecruitCompID?.ContactEmail}</div>
              </div>
            </>
          ) : (
            <div>Select a job</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
