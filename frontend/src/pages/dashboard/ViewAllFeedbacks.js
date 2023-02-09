import React, { useState } from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import EditOutlined from "@material-ui/icons/EditOutlined";

const empList = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    status: 0,
    role: 1,
    approval: "unapproved",
    // feedback:
    // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    name: "Raj",
    email: "raj@gmail.com",
    status: 1,
    role: 0,
    approval: "unapproved",
  },
  {
    id: 3,
    name: "David",
    email: "david342@gmail.com",
    status: 1,
    role: 3,
    approval: "unapproved",
  },
  {
    id: 4,
    name: "Vikas",
    email: "vikas75@gmail.com",
    status: 0,
    role: 2,
    approval: "unapproved",
  },
];

function ViewAllFeedbacks() {
  const [data, setData] = useState(empList);
  const [selectedRow, setSelectedRow] = useState({});
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Status", field: "status" },
    { title: "Role", field: "role" },
    {
      title: "Approval",
      field: "approval",
      lookup: { approved: "Approved", unapproved: "Unapproved" },
    },
    { title: "Age", field: "age" },
    { title: "Feedback", field: "feedback" },
  ];
  

  return (
    
    <MaterialTable
      title="Employee Data"
      data={data}
      columns={columns}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setData((prevData) => [...prevData, newData]);
              
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setData((prevData) =>
                  prevData.map((row) => (row.id === oldData.id ? newData : row))
                );
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setData((prevData) =>
                prevData.filter((row) => row.id !== oldData.id)
              );
            }, 600);
          }),
      }}
      options={{
        filtering: true,
        // selection: true,
      }}
      icons={{
        Add: () => <AddIcon />,
        Edit: () => <EditOutlined />,
        Delete: () => <DeleteOutlined />,
      }}
    />
  );
}

export default ViewAllFeedbacks;
