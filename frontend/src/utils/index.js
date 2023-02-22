import { useMemo } from 'react';
import moment from 'moment/moment';

const convertArrayData = (newData, arrayKeys) => {
  const result = { ...newData };
  for (const arrayKey of arrayKeys) {
    if (result[arrayKey]) result[arrayKey] = result[arrayKey].map(({ _id }) => _id);
  }
  return result;
};

export const getEditableConfig = (fetch, path, data, setData, arrayKeys = [], update = async () => {}) => {
  return {
    onRowAdd: async (newData) => {
      try {
        await fetch.post(path, convertArrayData(newData, arrayKeys));
        setData([...data, newData]);
        await update();
      } catch (e) {}
    },
    onRowUpdate: async (newData, oldData) => {
      try {
        await fetch.put(`${path}/${newData._id}`, convertArrayData(newData, arrayKeys));
        const dataUpdate = [...data];
        dataUpdate[oldData.tableData.id] = newData;
        setData(dataUpdate);
        await update();
      } catch (e) {}
    },
    onRowDelete: async (oldData) => {
      try {
        await fetch.delete(`${path}/${oldData._id}`);
        const dataDelete = [...data];
        dataDelete.splice(oldData.tableData.id, 1);
        setData(dataDelete);
        await update();
      } catch (e) {}
    },
  };
};

export const convertMasterData = (data, key = 'Name') => {
  return data.reduce((prev, cur) => {
    prev[cur._id] = cur[key];
    return prev;
  }, {});
};

export const convertDate = (date) => {
  return moment(date).format('DD-MM-YYYY');
};

export const findById = (ids, data) => {
  if (Array.isArray(ids)) {
    return ids.map((id) => data.find(({ _id }) => _id === id));
  }

  return data.find(({ _id }) => _id === ids);
};

export const convertReferenceData = (data, keys) => {
  const result = { ...data };
  for (const { key, source } of keys) {
    result[key] = findById(result[key], source);
  }
  return result;
};

export const useOptions = (data) => {
  return useMemo(() => {
    const result = data.map(({ Name }) => Name);
    result.unshift('All');
    return result;
  }, [data]);
};
