import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import { useAppContext } from "../../context/appContext";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

let grade = [
  {
    _id: 30,
    courseName: "Internship",
    courseId: "ENGL173",
    companyName: "FPT Software",
    studentName: "Nguyen Van A",
    studentId: "ITITIU18123",
    companyGrade: 72,
    schoolGrade: 26,
  },
  {
    _id: 29,
    courseName: "Internship",
    courseId: "ENGL173",
    companyName: "Zoomzone",
    studentName: "Pham Thi B",
    studentId: "ITITIU19133",
    companyGrade: 13,
    schoolGrade: 47,
  },
  {
    _id: 9,
    courseName: "Internship",
    courseId: "ENGL173",
    companyName: "FPT Software",
    studentName: "Nguyen Van A",
    studentId: "ITITIU18123",
    companyGrade: 72,
    schoolGrade: 26,
  },
  {
    _id: 21,
    courseName: "Internship",
    courseId: "ENGL173",
    companyName: "Zoomzone",
    studentName: "Pham Thi B",
    studentId: "ITITIU19133",
    companyGrade: 46,
    schoolGrade: 34,
  },
  {
    _id: 78,
    courseName: "Internship",
    courseId: "ENGL173",
    companyName: "FPT Software",
    studentName: "Nguyen Van A",
    studentId: "ITITIU18123",
    companyGrade: 72,
    schoolGrade: 26,
  },
  {
    _id: 51,
    courseName: "Internship",
    courseId: "ENGL173",
    companyName: "Zoomzone",
    studentName: "Pham Thi B",
    studentId: "ITITIU19133",
    companyGrade: 21,
    schoolGrade: 85,
  },
];

function Grade() {
  const { user } = useAppContext();
  const [data, setData] = useState(grade);

  const columns = [
    {
      title: "Course Name",
      field: "courseName",
    },
    {
      title: "Course Id",
      field: "courseId",
    },
    {
      title: "Company Name",
      field: "companyName",
    },
    {
      title: "Student Name",
      field: "studentName",
    },
    {
      title: "Student Id",
      field: "studentId",
    },
    {
      title: "Company Grade",
      field: "companyGrade",
      editable: "never",
    },
    {
      title: "School Grade",
      field: "schoolGrade",
      editable: "always",
    },
  ];
  const handleRowDelete = (oldData, resolve) => {
    alert("This is Delete ");
  };

  const handleRowUpdate = (oldData, resolve) => {
    alert("This is Update ");
  };

  const handleRowAdd = (oldData, resolve) => {
    alert("This is Add ");
  };
  return (
    <div>
      <MaterialTable
        title="Grade"
        columns={columns}
        data={data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}

export default Grade;
