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

let companyFeedback = [
  {
    _id: 1,
    studentName: "Osgood Maciaszek",
    studentId: 1,
    companyName: "Schultz-Will",
    internshipPosition: "Programmer Analyst IV",
    courseFeedback:
      "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis",
    studentFeedback:
      "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas",
    coordinatorFeedback:
      "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
  },
  {
    _id: 2,
    studentName: "Annecorinne Haymes",
    studentId: 2,
    companyName: "Gleichner-Mitchell",
    internshipPosition: "Developer III",
    courseFeedback:
      "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
    studentFeedback:
      "ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
    coordinatorFeedback:
      "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
  },
  {
    _id: 3,
    studentName: "Gaelan Fitchen",
    studentId: 3,
    companyName: "Altenwerth and Sons",
    internshipPosition: "Food Chemist",
    courseFeedback:
      "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
    studentFeedback:
      "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
    coordinatorFeedback:
      "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
  },
  {
    _id: 4,
    studentName: "Kamillah Mc Caughan",
    studentId: 4,
    companyName: "Hettinger, Willms and Reilly",
    internshipPosition: "Senior Quality Engineer",
    courseFeedback: "blandit mi in porttitor pede justo eu massa donec dapibus",
    studentFeedback:
      "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget",
    coordinatorFeedback:
      "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
  },
  {
    _id: 5,
    studentName: "Bear Iceton",
    studentId: 5,
    companyName: "Hayes Group",
    internshipPosition: "Librarian",
    courseFeedback:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
    studentFeedback: "donec dapibus duis at velit eu est congue elementum in",
    coordinatorFeedback:
      "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
  },
  {
    _id: 6,
    studentName: "Gill Ruthven",
    studentId: 6,
    companyName: "Schowalter-Langosh",
    internshipPosition: "Nurse Practicioner",
    courseFeedback:
      "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
    studentFeedback:
      "luctus ultricies eu nibh quisque id justo sit amet sapien",
    coordinatorFeedback:
      "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus",
  },
  {
    _id: 7,
    studentName: "Wyndham Middis",
    studentId: 7,
    companyName: "O'Hara-Greenfelder",
    internshipPosition: "Programmer Analyst III",
    courseFeedback:
      "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    studentFeedback:
      "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
    coordinatorFeedback:
      "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
  },
  {
    _id: 8,
    studentName: "Reeta Lasty",
    studentId: 8,
    companyName: "Witting and Sons",
    internshipPosition: "Database Administrator II",
    courseFeedback:
      "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
    studentFeedback:
      "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce",
    coordinatorFeedback:
      "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
  },
  {
    _id: 9,
    studentName: "Bel Goade",
    studentId: 9,
    companyName: "Ankunding, Oberbrunner and Crona",
    internshipPosition: "Tax Accountant",
    courseFeedback:
      "at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum",
    studentFeedback:
      "orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",
    coordinatorFeedback:
      "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
  },
];

function CompanyFeedback() {
  const [data, setData] = useState(companyFeedback);
  const columns = [
    { title: "Student Name", field: "studentName" },
    { title: "Student Id", field: "studentId" },
    { title: "Company Name", field: "companyName" },
    { title: "Internship Position", field: "internshipPosition" },
    { title: "Course Feedback", field: "courseFeedback" },
    {
      title: "Student Feedback",
      field: "studentFeedback",
    },
    { title: "Coordinator Feedback", field: "coordinatorFeedback" },
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
        title="Company Feedback"
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

export default CompanyFeedback;
