import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Select from 'react-select';
import usePageName from '../utils/usePageName';
import { useAppContext } from '../context/appContext';
import { getEditableConfig } from '../utils';

function Companies() {
  const path = 'company';

  const { authFetch } = useAppContext();
  const [data, setData] = useState();
  const [workCatalog, setWorkCatalog] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data: workCatalog } = await authFetch.get('workCatalog');
      setWorkCatalog(workCatalog);

      const { data } = await authFetch.get(path);
      data.forEach((company) => {
        company.WorkCatalogId = company.WorkCatalogId.map((id) => workCatalog.find(({ _id }) => _id === id));
      });
      setData(data);
    };

    init();
  }, []);

  const columns = [
    { title: 'Name', field: 'Name' },
    { title: 'Address', field: 'Address' },
    { title: 'District', field: 'District' },
    { title: 'City', field: 'City' },
    { title: 'Country', field: 'Country' },
    { title: 'Nationality', field: 'Nationality' },
    { title: 'Contact Person', field: 'ContactPerson' },
    { title: 'Contact Phone', field: 'ContactPerTel' },
    { title: 'Contact Email', field: 'ContactEmail' },
    { title: 'Rate', field: 'Rate', type: 'numeric' },
    {
      title: 'Logo',
      field: 'Logo',
      render: ({ Name, Logo }) => <img alt={Name} src={Logo} style={{ width: 75, height: 75, objectFit: 'contain' }} />,
    },
    {
      title: 'Work Catalog',
      field: 'WorkCatalogId',
      editComponent: ({ value, onChange }) => (
        <Select
          isMulti
          options={workCatalog}
          value={value}
          onChange={(newValue) => onChange(newValue)}
          getOptionLabel={({ Name }) => Name}
          getOptionValue={({ _id }) => _id}
        />
      ),
      render: ({ WorkCatalogId }) => WorkCatalogId.map(({ Name }) => Name).join(', '),
    },
    { title: 'Description', field: 'Description' },
  ];

  usePageName('Companies');

  return (
    <MaterialTable
      title="Companies"
      columns={columns}
      data={data}
      isLoading={!data}
      editable={getEditableConfig(authFetch, path, data, setData, ['WorkCatalogId'])}
    />
  );
}

export default Companies;
