import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import usePageName from '../utils/usePageName';
import { useAppContext } from '../context/appContext';
import { convertMasterData, getEditableConfig } from '../utils';

function InternshipReports() {
  const path = 'internship';

  const { authFetch } = useAppContext();
  const [data, setData] = useState();
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data: companies } = await authFetch.get('company');
      setCompanies(companies);

      const { data: jobType } = await authFetch.get('job');
      setJobs(jobType);

      const { data: students } = await authFetch.get('user');
      setStudents(students);

      const { data } = await authFetch.get(path);
      setData(data);
    };

    init();
  }, []);

  const columns = [
    { title: 'Student', field: 'Student', lookup: convertMasterData(students), editable: 'never' },
    { title: 'Job', field: 'Job', lookup: convertMasterData(jobs, 'JobTitle'), editable: 'never' },
    { title: 'Company', field: 'Company', lookup: convertMasterData(companies), editable: 'never' },
    { title: 'Registration Date', field: 'RegistrationDate', type: 'date' },
    { title: 'Confirmed', field: 'ConfirmedYN', type: 'boolean' },
    { title: 'Confirmed Name', field: 'ConfirmedName' },
    { title: 'From Date', field: 'InternFromDate', type: 'date' },
    { title: 'To Date', field: 'InternToDate', type: 'date' },
    { title: 'Lecturer Comment', field: 'LecturerComment' },
    { title: 'Intern Status', field: 'InternStatus' },
    { title: 'Intern Complete Date', field: 'InternCompleteDate', type: 'date' },
    { title: 'Intern Time', field: 'InternTime', type: 'numeric' },
  ];

  usePageName('Internship Reports');

  return (
    <MaterialTable
      title="Internship Reports"
      columns={columns}
      data={data}
      isLoading={!data}
      editable={getEditableConfig(authFetch, path, data, setData)}
      options={{
        filtering: true,
        columnsButton: true,
      }}
    />
  );
}

export default InternshipReports;
