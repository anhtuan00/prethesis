import { useAppContext } from '../context/appContext';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { convertMasterData, getEditableConfig } from '../utils';
import usePageName from '../utils/usePageName';
import MaterialTable from 'material-table';
import { Rating } from 'react-simple-star-rating';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function InternshipList() {
  const path = 'internship';

  const { authFetch, user } = useAppContext();
  const role = user?.role;
  const [data, setData] = useState();
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [students, setStudents] = useState([]);

  const [modal, setModal] = useState(false);
  const [salary, setSalary] = useState(0);
  const [training, setTraining] = useState(0);
  const [care, setCare] = useState(0);
  const [culture, setCulture] = useState(0);
  const [office, setOffice] = useState(0);
  const [feedback, setFeedback] = useState('');
  const companyId = useRef();

  const fetchData = useCallback(async () => {
    const { data } = await authFetch.get(path);
    setData(data);
  }, []);

  useEffect(() => {
    const init = async () => {
      const { data: companies } = await authFetch.get('company');
      setCompanies(companies);

      const { data: jobType } = await authFetch.get('job');
      setJobs(jobType);

      const { data: students } = await authFetch.get('user');
      setStudents(students);

      await fetchData();
    };

    init();
  }, []);

  const columns = [
    { title: 'Student', field: 'Student', lookup: convertMasterData(students, 'name'), editable: 'never' },
    role === 'student' ? { title: 'Is Chosen', field: 'IsChosen', type: 'boolean' } : undefined,
    { title: 'Job', field: 'Job', lookup: convertMasterData(jobs, 'JobTitle'), editable: 'never' },
    { title: 'Company', field: 'Company', lookup: convertMasterData(companies), editable: 'never' },
    { title: 'Other Company Name', field: 'OtherCompanyName' },
    { title: 'Other Company Contact', field: 'OtherCompanyContact' },
    { title: 'Supervisor Position', field: 'SupervisorPosition' },
    { title: 'Supervisor Name', field: 'SupervisorName' },
    { title: 'SuperVisor Phone', field: 'SuperVisorPhone' },
    { title: 'SuperVisor Email', field: 'SuperVisorEmail' },
    { title: 'Registration Date', field: 'RegistrationDate', type: 'date' },
    { title: 'Confirmed', field: 'ConfirmedYN', type: 'boolean' },
    { title: 'Confirmed Name', field: 'ConfirmedName' },
    { title: 'From Date', field: 'InternFromDate', type: 'date' },
    { title: 'To Date', field: 'InternToDate', type: 'date' },
    { title: 'Lecturer Comment', field: 'LecturerComment' },
    {
      title: 'Intern Status',
      field: 'InternStatus',
      lookup: { Accepted: 'Accepted', Completed: 'Completed', Pending: 'Pending', Declined: 'Declined' },
    },
    { title: 'Intern Complete Date', field: 'InternCompleteDate', type: 'date' },
    { title: 'Intern Time', field: 'InternTime', type: 'numeric' },
  ].filter((v) => v);

  usePageName('Internship List');

  return (
    <>
      <MaterialTable
        title="Internship List"
        columns={columns}
        data={data}
        isLoading={!data}
        editable={getEditableConfig(authFetch, path, data, setData, [], role === 'student' ? fetchData : undefined)}
        actions={[
          (rowData) => ({
            icon: 'filter',
            tooltip: 'Add feedback',
            onClick: (_, { Company }) => {
              companyId.current = Company;
              setModal(true);
              setSalary(0);
              setTraining(0);
              setCare(0);
              setCulture(0);
              setOffice(0);
              setFeedback('');
            },
            disabled: rowData.InternStatus !== 'Completed',
          }),
        ]}
        options={{
          columnsButton: true,
          filtering: true,
          exportButton: true,
          exportAllData: true,
          exportFileName: 'Internship List',
        }}
      />

      <div className="modal" style={modal ? { display: 'flex' } : {}}>
        <div className="modal-content">
          <h2>Add feedback</h2>

          <p>
            <Rating onClick={setSalary} initialValue={salary} /> Salary Rate
          </p>
          <p>
            <Rating onClick={setTraining} initialValue={training} /> Training Rate
          </p>
          <p>
            <Rating onClick={setCare} initialValue={care} /> Care Rate
          </p>
          <p>
            <Rating onClick={setCulture} initialValue={culture} /> Culture Rate
          </p>
          <p>
            <Rating onClick={setOffice} initialValue={office} /> Office Rate
          </p>

          <TextareaAutosize
            style={{ width: '100%', padding: 8 }}
            minRows={3}
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            placeholder="Enter your feedback"
          />

          <div style={{ display: 'flex', gap: '3rem', marginTop: '1rem' }}>
            <button className="btn btn-block btn-danger" onClick={() => setModal(false)}>
              Cancel
            </button>
            <button
              className="btn btn-block"
              onClick={() => {
                authFetch.post('feedback', {
                  companyId: companyId.current,
                  createdBy: user._id,
                  comment: feedback,
                  salaryRate: salary,
                  trainingRate: training,
                  careRate: care,
                  cultureRate: culture,
                  officeRate: office,
                  rate: (salary + training + care + culture + office) / 5,
                });
                setModal(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternshipList;
