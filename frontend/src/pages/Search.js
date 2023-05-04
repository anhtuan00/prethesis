import React, { useCallback, useEffect, useState } from 'react';
import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';
import usePageName from '../utils/usePageName';
import { useAppContext } from '../context/appContext';
import { convertDate, useOptions } from '../utils';
import { Rating } from 'react-simple-star-rating';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { Radio, RadioGroup } from '@material-ui/core';

const Search = () => {
  const { authFetch, user: localUser } = useAppContext();

  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');
  const [catalog, setCatalog] = useState('All');
  const [sort, setSort] = useState('');

  const [jobType, setJobType] = useState([]);
  const jobTypeOptions = useOptions(jobType);
  const [jobCatalog, setJobCatalog] = useState([]);
  const jobCatalogOptions = useOptions(jobCatalog);

  const [isSearching, setIsSearching] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState();
  const [feedback, setFeedback] = useState(null);

  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(false);

  const jobsFetch = useCallback(async (path) => {
    setIsSearching(true);
    const { data } = await authFetch.get(path);
    setJobs(data);
    setIsSearching(false);
  }, []);

  const userFetch = useCallback(async () => {
    if (localUser?._id) {
      const { data } = await authFetch.get(`user/${localUser._id}`);
      setUser(data);
    } else setUser(null);
  }, [localUser]);

  const feedbackFetch = useCallback(async (companyId) => {
    setFeedback(null);
    const { data } = await authFetch.get(`feedback/company/${companyId}`);
    setFeedback(data?.[0]);
  }, []);

  useEffect(() => {
    const init = async () => {
      const { data: jobCatalog } = await authFetch.get('jobCatalog');
      setJobCatalog(jobCatalog);

      const { data: jobType } = await authFetch.get('jobType');
      setJobType(jobType);

      onSearch();
    };

    init();
  }, []);

  useEffect(() => {
    userFetch();
  }, [localUser]);

  usePageName('Search Jobs');

  const onSearch = () => {
    let path = `job/search?search=${search}`;
    if (type !== 'All') path = path + `&jobType=${type}`;
    if (catalog !== 'All') path = path + `&jobCatalog=${catalog}`;
    if (sort) path = path + `&sort=${sort}`;
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
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
            <div>
              <div>Sort by</div>
              <RadioGroup row value={sort} onChange={(event) => setSort(event.target.value)}>
                <FormControlLabel value="" control={<Radio />} label="None" />
                <FormControlLabel value="rate" control={<Radio />} label="Company Rate" />
                <FormControlLabel value="applied" control={<Radio />} label="Job Application Count" />
              </RadioGroup>
            </div>
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
              onClick={() => {
                feedbackFetch(job.RecruitCompID._id);
                setCurrentJob(job);
              }}
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
                />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{job.JobTitle}</div>
                  <div>{job.RecruitCompID?.Name}</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Rating readonly={true} initialValue={job.rate} /> ({job.rate})
                  </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div>Created at: {convertDate(job.createdAt)}</div>
                  <div>Job application count: {job.feedbacks.length}</div>
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

              <a
                target="_blank"
                href={currentJob.RecruitCompID?.link || 'https://example.com'}
                className="btn btn-block"
                style={{ textAlign: 'center', marginBottom: 8 }}
              >
                Apply job
              </a>

              {user?.role === 'student' && currentJob.JobType?.Name === 'Internship' && (
                <>
                  {user.appliedInternship.some((id) => id === currentJob._id) ? (
                    <button className="btn btn-block btn-danger" style={{ pointerEvents: 'none' }}>
                      Applied internship
                    </button>
                  ) : (
                    <button className="btn btn-block btn-hipster" onClick={() => setModal(true)}>
                      Apply internship
                    </button>
                  )}

                  <div className="modal" style={modal ? { display: 'flex' } : {}}>
                    <div className="modal-content">
                      <h2>Apply Internship</h2>

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
                </>
              )}

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

              {feedback ? (
                <>
                  <h5 style={{ marginTop: 12 }}>Rate</h5>
                  <div className="big-star">
                    <Rating fillColor="blue" readonly={true} initialValue={feedback.rate} /> ({feedback.rate}) (
                    {feedback.comments.length} reviews)
                  </div>
                  <Divider variant="fullWidth" />
                  <p>
                    <Rating readonly={true} initialValue={feedback.salaryRate} /> ({feedback.salaryRate}) Salary Rate
                  </p>
                  <p>
                    <Rating readonly={true} initialValue={feedback.trainingRate} /> ({feedback.trainingRate}) Training
                    Rate
                  </p>
                  <p>
                    <Rating readonly={true} initialValue={feedback.careRate} /> ({feedback.careRate}) Care Rate
                  </p>
                  <p>
                    <Rating readonly={true} initialValue={feedback.cultureRate} /> ({feedback.cultureRate}) Culture Rate
                  </p>
                  <p>
                    <Rating readonly={true} initialValue={feedback.officeRate} /> ({feedback.officeRate}) Office Rate
                  </p>
                  <h5 style={{ marginTop: 12 }}>Feedback</h5>
                  {feedback.comments.map(({ comment, user }) => (
                    <p>
                      <div style={{ fontWeight: 600 }}>{user}</div>
                      <div>{comment}</div>
                    </p>
                  ))}
                </>
              ) : (
                <p style={{ fontStyle: 'italic' }}>Don't have any feedback yet.</p>
              )}
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
