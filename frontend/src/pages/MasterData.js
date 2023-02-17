import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import usePageName from '../utils/usePageName';
import { getEditableConfig } from '../utils';
import { useAppContext } from '../context/appContext';

const Table = ({ title, path }) => {
  const { authFetch } = useAppContext();
  const [data, setData] = useState();

  useEffect(() => {
    const init = async () => {
      const { data } = await authFetch.get(path);
      setData(data);
    };
    init();
  }, []);

  const columns = [
    { title: 'Name', field: 'Name' },
    { title: 'Descriptions', field: 'Descriptions' },
  ];

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data || []}
      isLoading={!data}
      editable={getEditableConfig(authFetch, path, data, setData)}
    />
  );
};

function MasterData() {
  usePageName('Master Data');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <Table title="Work Catalog" path="workCatalog" />
      <Table title="Job Catalog" path="jobCatalog" />
      <Table title="Job Type" path="jobType" />
    </div>
  );
}

export default MasterData;
