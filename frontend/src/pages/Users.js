import React, { useCallback, useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import usePageName from '../utils/usePageName';
import { useAppContext } from '../context/appContext';
import { convertMasterData, getEditableConfig } from '../utils';

function Users() {
  const path = 'user';

  const { authFetch } = useAppContext();
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const { data } = await authFetch.get(path);
    setData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { title: 'Email', field: 'email' },
    { title: 'Password', field: 'password', render: () => '******' },
    { title: 'Role', field: 'role', lookup: { student: 'student', teacher: 'teacher', officer: 'officer' } },
    { title: 'Name', field: 'name' },
    { title: 'Student ID', field: 'IDNumber' },
    {
      title: 'Applied Internship',
      render: (data) => data.appliedInternship.length,
      editable: 'never',
    },
    { title: 'DOB', field: 'DOB', type: 'date' },
    { title: 'Address', field: 'Address' },
    { title: 'District', field: 'District' },
    { title: 'City', field: 'City' },
    { title: 'Country', field: 'Country' },
    { title: 'Tel', field: 'Tel' },
    { title: 'Course Number', field: 'CourseNumber' },
    { title: 'Class Code', field: 'ClassCode' },
    { title: 'Class Name', field: 'ClassName' },
    { title: 'Faculty', field: 'Faculty' },
    { title: 'Head Teacher', field: 'HeadTeacher', lookup: convertMasterData(data, 'name') },
    { title: 'Admit Date', field: 'AdmitDate', type: 'date' },
    { title: 'Graduate Date', field: 'GradDate', type: 'date' },
  ];

  usePageName('Users');

  return (
    <MaterialTable
      title="Users"
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
    />
  );
}

export default Users;
