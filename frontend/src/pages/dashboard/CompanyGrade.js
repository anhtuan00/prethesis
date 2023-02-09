// import React, { useState, useEffect } from "react";
// import { forwardRef } from "react";
// import MaterialTable from "material-table";
// import AddBox from "@material-ui/icons/AddBox";
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import Check from "@material-ui/icons/Check";
// import ChevronLeft from "@material-ui/icons/ChevronLeft";
// import ChevronRight from "@material-ui/icons/ChevronRight";
// import Clear from "@material-ui/icons/Clear";
// import DeleteOutline from "@material-ui/icons/DeleteOutline";
// import Edit from "@material-ui/icons/Edit";
// import FilterList from "@material-ui/icons/FilterList";
// import FirstPage from "@material-ui/icons/FirstPage";
// import LastPage from "@material-ui/icons/LastPage";
// import Remove from "@material-ui/icons/Remove";
// import SaveAlt from "@material-ui/icons/SaveAlt";
// import Search from "@material-ui/icons/Search";
// import ViewColumn from "@material-ui/icons/ViewColumn";

// import { useAppContext } from "../../context/appContext";

// const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => (
//     <ChevronRight {...props} ref={ref} />
//   )),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => (
//     <ChevronLeft {...props} ref={ref} />
//   )),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
// };

// let grade = [
//   {
//     _id: 30,
//     courseName: "Cluff Lake Airport",
//     courseId: "Cluff Lake",
//     companyName: "Bluejam",
//     studentName: "Beverie Banasiak",
//     studentId: "CA-SK",
//     companyGrade: 72,
//     schoolGrade: 26,
//   },
//   {
//     _id: 29,
//     courseName: "Kalaeloa Airport",
//     courseId: "Kapolei",
//     companyName: "Zoomzone",
//     studentName: "Steffen Bentame",
//     studentId: "US-HI",
//     companyGrade: 13,
//     schoolGrade: 47,
//   },
//   {
//     _id: 9,
//     courseName: "Currillo Airport",
//     courseId: "Currillo",
//     companyName: "Jetpulse",
//     studentName: "Berti Machon",
//     studentId: "CO-CAS",
//     companyGrade: 39,
//     schoolGrade: 81,
//   },
//   {
//     _id: 21,
//     courseName: "Yola Airport",
//     courseId: "Yola",
//     companyName: "Bluezoom",
//     studentName: "Aluin Gandy",
//     studentId: "NG-AD",
//     companyGrade: 46,
//     schoolGrade: 34,
//   },
//   {
//     _id: 78,
//     courseName: "Homer Airport",
//     courseId: "Homer",
//     companyName: "Twitterwire",
//     studentName: "Yasmeen Baulk",
//     studentId: "US-AK",
//     companyGrade: 96,
//     schoolGrade: 8,
//   },
//   {
//     _id: 51,
//     courseName: "Bardera Airport",
//     courseId: null,
//     companyName: "Mycat",
//     studentName: "Stavros Quested",
//     studentId: "SO-GE",
//     companyGrade: 21,
//     schoolGrade: 85,
//   },
//   {
//     _id: 39,
//     courseName: "Kiman Airport",
//     courseId: "Kiman-Papua Island",
//     companyName: "Photofeed",
//     studentName: "Sibley Thombleson",
//     studentId: "ID-PA",
//     companyGrade: 81,
//     schoolGrade: 83,
//   },
//   {
//     _id: 13,
//     courseName: "Mono Airport",
//     courseId: "Stirling Island",
//     companyName: "Babbleset",
//     studentName: "Leticia Tynewell",
//     studentId: "SB-WE",
//     companyGrade: 71,
//     schoolGrade: 66,
//   },
//   {
//     _id: 41,
//     courseName: "Berlin Brandenburg Airport (U.C.)",
//     courseId: "Berlin",
//     companyName: "Rhyzio",
//     studentName: "Dukie Dunnaway",
//     studentId: "DE-BR",
//     companyGrade: 81,
//     schoolGrade: 33,
//   },
// ];

// function CompanyGrade() {
//   const [data, setData] = useState(grade);
//   const columns = [
//     {
//       title: "Course Name",
//       field: "courseName",
//     },
//     {
//       title: "Course Id",
//       field: "courseId",
//     },
//     {
//       title: "Company Name",
//       field: "companyName",
//     },
//     {
//       title: "Student Name",
//       field: "studentName",
//     },
//     {
//       title: "Student Id",
//       field: "studentId",
//     },
//     {
//       title: "Company Grade",
//       field: "companyGrade",
//     },
//     {
//       title: "School Grade",
//       field: "schoolGrade",
//     },
//   ];
//   const handleRowDelete = (oldData, resolve) => {
//     alert("This is Delete ");
//   };

//   const handleRowUpdate = (oldData, resolve) => {
//     alert("This is Update ");
//   };

//   const handleRowAdd = (oldData, resolve) => {
//     alert("This is Add ");
//   };
//   return (
//     <div>
//       <MaterialTable
//         title="Teacher Grade"
//         columns={columns}
//         data={data}
//         icons={tableIcons}
//         editable={{
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve) => {
//               handleRowUpdate(newData, oldData, resolve);
//             }),
//           onRowAdd: (newData) =>
//             new Promise((resolve) => {
//               handleRowAdd(newData, resolve);
//             }),
//           onRowDelete: (oldData) =>
//             new Promise((resolve) => {
//               handleRowDelete(oldData, resolve);
//             }),
//         }}
//       />
//     </div>
//   );
// }

// export default CompanyGrade;
