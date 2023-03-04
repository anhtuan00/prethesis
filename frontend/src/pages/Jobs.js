import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import usePageName from '../utils/usePageName';
import { useAppContext } from '../context/appContext';
import { convertMasterData, getEditableConfig } from '../utils';
import Select from 'react-select';

function Jobs() {
  const path = 'job';

  const { authFetch } = useAppContext();
  const [data, setData] = useState();
  const [companies, setCompanies] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [jobCatalog, setJobCatalog] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data: companies } = await authFetch.get('company');
      setCompanies(companies);

      const { data: jobType } = await authFetch.get('jobType');
      setJobType(jobType);

      const { data: jobCatalog } = await authFetch.get('jobCatalog');
      setJobCatalog(jobCatalog);

      const { data } = await authFetch.get(path);
      data.forEach((company) => {
        company.JobCatalog = company.JobCatalog.map((id) => jobCatalog.find(({ _id }) => _id === id)).filter((v) => v);
      });
      setData(data);
    };

    init();
  }, []);

  const columns = [
    { title: 'Title', field: 'JobTitle' },
    { title: 'Description', field: 'JobDescription' },
    { title: 'From Date', field: 'JobValidFromDate', type: 'date' },
    { title: 'To Date', field: 'JobValidToDate', type: 'date' },
    { title: 'Company', field: 'RecruitCompID', lookup: convertMasterData(companies) },
    { title: 'Job Type', field: 'JobType', lookup: convertMasterData(jobType) },
    {
      title: 'Job Catalog',
      field: 'JobCatalog',
      editComponent: ({ value, onChange }) => (
        <Select
          isMulti
          options={jobCatalog}
          value={value}
          onChange={(newValue) => onChange(newValue)}
          getOptionLabel={({ Name }) => Name}
          getOptionValue={({ _id }) => _id}
        />
      ),
      render: ({ JobCatalog }) => JobCatalog.map(({ Name }) => Name).join(', '),
    },
  ];

  usePageName('Jobs');

  return (
    <MaterialTable
      title="Jobs"
      columns={columns}
      data={data}
      isLoading={!data}
      editable={getEditableConfig(authFetch, path, data, setData)}
      options={{
        columnsButton: true,
        filtering: true,
        exportButton: true,
        exportAllData: true,
        exportFileName: 'Job List',
      }}
    />
  );
}

export default Jobs;
