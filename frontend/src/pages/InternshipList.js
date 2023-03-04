import { useAppContext } from '../context/appContext';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { convertMasterData, getEditableConfig, uploadFile } from '../utils';
import usePageName from '../utils/usePageName';
import MaterialTable from 'material-table';
import { Rating } from 'react-simple-star-rating';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';

function InternshipList() {
  const path = 'internship';

  const { authFetch, user } = useAppContext();
  const role = user?.role;
  const [data, setData] = useState();
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [students, setStudents] = useState([]);

  const [modal, setModal] = useState('');
  const [salary, setSalary] = useState(0);
  const [training, setTraining] = useState(0);
  const [care, setCare] = useState(0);
  const [culture, setCulture] = useState(0);
  const [office, setOffice] = useState(0);
  const [feedback, setFeedback] = useState('');
  const companyId = useRef();

  const [report1, setReport1] = useState();
  const [report2, setReport2] = useState();
  const selectedRow = useRef();

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
    { title: 'Is Chosen', field: 'IsChosen', type: 'boolean' },
    { title: 'Job', field: 'Job', lookup: convertMasterData(jobs, 'JobTitle'), editable: 'never' },
    { title: 'Company', field: 'Company', lookup: convertMasterData(companies), editable: 'never' },
    { title: 'Other Company Name', field: 'OtherCompanyName' },
    { title: 'Other Company Contact', field: 'OtherCompanyContact' },
    { title: 'Supervisor Position', field: 'SupervisorPosition' },
    { title: 'Supervisor Name', field: 'SupervisorName' },
    { title: 'SuperVisor Phone', field: 'SuperVisorPhone' },
    { title: 'SuperVisor Email', field: 'SuperVisorEmail' },
    { title: 'Registration Date', field: 'RegistrationDate', type: 'date' },
    { title: 'Confirmed', field: 'ConfirmedYN', type: 'boolean', editable: role === 'student' ? 'never' : undefined },
    { title: 'Confirmed Name', field: 'ConfirmedName' },
    { title: 'From Date', field: 'InternFromDate', type: 'date' },
    { title: 'To Date', field: 'InternToDate', type: 'date' },
    { title: 'Lecturer Comment', field: 'LecturerComment' },
    {
      title: 'Intern Status',
      field: 'InternStatus',
      lookup: {
        Accepted: 'Accepted',
        Completed: 'Completed',
        Pending: 'Pending',
        Declined: 'Declined',
        'In-progress': 'In-progress',
      },
      editComponent: (props) => (
        <Select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
          <MenuItem value="Accepted">Accepted</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Declined">Declined</MenuItem>
          {role !== 'student' && <MenuItem value="In-progress">In-progress</MenuItem>}
        </Select>
      ),
    },
    { title: 'Intern Complete Date', field: 'InternCompleteDate', type: 'date' },
    {
      title: 'Grade',
      field: 'grade',
      type: 'numeric',
      editable: role === 'student' ? 'never' : undefined,
      editComponent: (props) => {
        if (!props.rowData.reports.length) return props.value;
        return <Input type="number" value={props.value} onChange={(event) => props.onChange(event.target.value)} />;
      },
    },
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
        editable={getEditableConfig(authFetch, path, data, setData, [], fetchData)}
        options={{
          columnsButton: true,
          filtering: true,
          exportButton: true,
          exportAllData: true,
          exportFileName: 'Internship List',
        }}
        actions={[
          role === 'student'
            ? [
                ({ tableData, ...row }) => ({
                  icon: 'upload_file',
                  tooltip: 'Upload reports',
                  onClick: () => {
                    selectedRow.current = row;
                    setModal('reports');
                    setReport1(row.reports?.[0] || '');
                    setReport2(row.reports?.[1] || '');
                  },
                  disabled: row.InternStatus !== 'Completed',
                }),
                ({ InternStatus }) => ({
                  icon: 'feedback',
                  tooltip: 'Add feedback',
                  onClick: (_, { Company }) => {
                    companyId.current = Company;
                    setModal('feedback');
                    setSalary(0);
                    setTraining(0);
                    setCare(0);
                    setCulture(0);
                    setOffice(0);
                    setFeedback('');
                  },
                  disabled: InternStatus !== 'Completed',
                }),
              ]
            : ({ InternStatus, reports }) => ({
                icon: 'preview',
                tooltip: 'View reports',
                onClick: () => {
                  setModal('reports');
                  setReport1(reports?.[0] || '');
                  setReport2(reports?.[1] || '');
                },
                disabled: InternStatus !== 'Completed' || !reports?.length,
              }),
        ]
          .flat()
          .filter((v) => v)}
      />

      <div className="modal" style={modal ? { display: 'flex' } : {}}>
        <div className="modal-content">
          {modal === 'feedback' ? (
            <>
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
                <button className="btn btn-block btn-danger" onClick={() => setModal('')}>
                  Cancel
                </button>
                <button
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
                    setModal('');
                  }}
                >
                  OK
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>Reports</h2>

              <p style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                {role === 'student' && (
                  <IconButton
                    color="primary"
                    onClick={async () => {
                      setReport1(await uploadFile());
                    }}
                  >
                    <PublishIcon />
                  </IconButton>
                )}
                {!!report1 ? (
                  <div>
                    <b>1. This is the internship report: </b>
                    <Link href={report1.url} target="_blank" rel="noreferrer">
                      {report1.filename}
                    </Link>
                  </div>
                ) : (
                  role === 'student' && '1. Please upload the internship report. The file size is limited to 10MB.'
                )}
              </p>

              <p style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                {role === 'student' && (
                  <IconButton
                    color="primary"
                    onClick={async () => {
                      setReport2(await uploadFile());
                    }}
                  >
                    <PublishIcon />
                  </IconButton>
                )}
                {!!report2 ? (
                  <div>
                    <b>2. This is the evaluation report: </b>
                    <Link href={report2.url} target="_blank" rel="noreferrer">
                      {report2.filename}
                    </Link>
                  </div>
                ) : (
                  role === 'student' && '2. Please upload the evaluation report. The file size is limited to 10MB.'
                )}
              </p>

              <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                <button className="btn btn-block btn-danger" onClick={() => setModal('')}>
                  Close
                </button>
                {role === 'student' && (
                  <button
                    className="btn btn-block"
                    onClick={() => {
                      authFetch.put(`${path}/${selectedRow.current._id}`, {
                        ...selectedRow.current,
                        reports: [report1, report2].filter((v) => v),
                      });
                      setModal('');
                    }}
                  >
                    Save
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default InternshipList;
