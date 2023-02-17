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

let internshipConfirmation = [
  {
    _id: 1,
    companyName: "18",
    otherCompanyName: "Other",
    companyAddress: "HCM city",
    companyContact: "citynow@gmail.com",
    supervisorName: "Nguyen Anh Van",
    supervisorPosition: "Team leader",
    supervisorPhone: "0913172627",
    supervisorEmail: "supervisor@gmail.com",
    studentName: "Nguyen Van B",
    studentId: "ITITIU18123",
    studentPosition: "Web Developer",
    studentPhone: "0917182625",
    studentEmail: "student@gmail.com",
    startDate: "12/12/2022",
    endDate: "03/17/2023",
    approval: "unapproved",
  },
  {
    _id: 2,
    companyName: "29",
    otherCompanyName: "Other",
    companyAddress: "HCM city",
    companyContact: "codelynx@gmail.com",
    supervisorName: "Nguyen Anh Thanh",
    supervisorPosition: "Team leader",
    supervisorPhone: "0913172627",
    supervisorEmail: "supervisor@gmail.com",
    studentName: "Nguyen Van A",
    studentId: "ITITIU18123",
    studentPosition: "Web Developer",
    studentPhone: "0917182625",
    studentEmail: "student@gmail.com",
    startDate: "12/12/2022",
    endDate: "03/17/2023",
    approval: "unapproved",
  },
  {
    _id: 3,
    companyName: "12",
    otherCompanyName: "Other",
    companyAddress: "HCM city",
    companyContact: "citynow@gmail.com",
    supervisorName: "Nguyen Anh Van",
    supervisorPosition: "Team leader",
    supervisorPhone: "0913172627",
    supervisorEmail: "supervisor@gmail.com",
    studentName: "Nguyen Van B",
    studentId: "ITITIU18123",
    studentPosition: "Web Developer",
    studentPhone: "0917182625",
    studentEmail: "student@gmail.com",
    startDate: "12/12/2022",
    endDate: "03/17/2023",
    approval: "unapproved",
  },
  {
    _id: 4,
    companyName: "4",
    otherCompanyName: "Other",
    companyAddress: "HCM city",
    companyContact: "codelynx@gmail.com",
    supervisorName: "Nguyen Anh Thanh",
    supervisorPosition: "Team leader",
    supervisorPhone: "0913172627",
    supervisorEmail: "supervisor@gmail.com",
    studentName: "Nguyen Van A",
    studentId: "ITITIU18123",
    studentPosition: "Web Developer",
    studentPhone: "0917182625",
    studentEmail: "student@gmail.com",
    startDate: "12/12/2022",
    endDate: "03/17/2023",
    approval: "unapproved",
  },
  {
    _id: 5,
    companyName: "2",
    otherCompanyName: "Other",
    companyAddress: "HCM city",
    companyContact: "citynow@gmail.com",
    supervisorName: "Nguyen Anh Van",
    supervisorPosition: "Team leader",
    supervisorPhone: "0913172627",
    supervisorEmail: "supervisor@gmail.com",
    studentName: "Nguyen Van B",
    studentId: "ITITIU18123",
    studentPosition: "Web Developer",
    studentPhone: "0917182625",
    studentEmail: "student@gmail.com",
    startDate: "12/12/2022",
    endDate: "03/17/2023",
    approval: "unapproved",
  },
  {
    _id: 6,
    companyName: "1",
    otherCompanyName: "Other",
    companyAddress: "HCM city",
    companyContact: "codelynx@gmail.com",
    supervisorName: "Nguyen Anh Thanh",
    supervisorPosition: "Team leader",
    supervisorPhone: "0913172627",
    supervisorEmail: "supervisor@gmail.com",
    studentName: "Nguyen Van A",
    studentId: "ITITIU18123",
    studentPosition: "Web Developer",
    studentPhone: "0917182625",
    studentEmail: "student@gmail.com",
    startDate: "12/12/2022",
    endDate: "03/17/2023",
    approval: "unapproved",
  },
];

function InternshipConfirmation() {
  const [data, setData] = useState(internshipConfirmation);
  const columns = [
    {
      title: "Company Name",
      field: "companyName",
      lookup: {
        1: "66 Investment Trading ( Công Ty TNHH ĐẦU TƯ THƯƠNG MẠI 66)",

        2: "Cinnamon AI Labs",
        3: "Computer Vision and Image Processing lab – HCMIU",
        4: "Công Ty 689Cloud Inc",
        5: "Công ty Cổ phần Bamboo Capital",
        6: "Công ty Cổ Phần Be Group",
        7: "Công Ty Cổ Phần Công Nghệ TESSE",
        8: "Công ty cổ phần Đầu tư Địa ốc PT Land",
        9: "Công Ty Cổ Phần Feros",
        10: "Công ty Cổ Phần Gcalls",
        11: "Công ty Cổ phần Geek Up Product Development",
        12: "Công ty Cổ phần IMT Solutions",
        13: "Công Ty Cổ Phần Innovation Capital Management (ICM)",
        14: "Công ty Cổ phần SmartScale",
        15: "Công ty Cổ phần Thế giới di động",
        16: "Công Ty Cổ Phần The Southern Rubber Industry",
        17: "Công ty Cổ phần Top On Tech",
        18: "Công ty Cổ Phần VBPO",
        19: "Công ty CP Mạng Thanh Toán PAYNET Việt Nam",
        20: "Công ty CP SpaceFintech",
        21: "Công ty dịch vụ Bến xe – tỉnh Bà Rịa Vũng Tàu",
        22: "Công ty tích hợp hệ thống ITECH",
        23: "Công ty TNHH Appvity Việt Nam",
        24: "Công Ty TNHH Atomic Việt Nam",
        25: "Công Ty TNHH BIGIN",
        26: "Công ty TNHH Capgemini Vietnam",
        27: "Công ty TNHH CEREBRO",
        28: "Công Ty TNHH City Now",
        29: "Công ty TNHH Cloud Nine Solutions",
        30: "Công Ty TNHH Codelynx",
        31: "Công ty TNHH Công Nghệ Anh Quân",
        32: "Công Ty TNHH Công Nghê FABA",
        33: "Công Ty TNHH Cube System Việt Nam",
        34: "Công Ty TNHH Cyberlogitec Việt Nam",
        35: "Công Ty TNHH CYBRIDGE ASIA",
        36: "Công ty TNHH CYPERLOGITEC VIET NAM",
        37: "Công ty TNHH D2M Studio",
        38: "Công Ty TNHH Dai Viet Controls and Instrumentation",
        39: "Công ty TNHH Diamond Age",
        40: "Công ty TNHH Dicentral",
        41: "Công Ty TNHH Dịch Vụ Magenta Consulting",
        42: "Công ty TNHH DIVMOB",
        43: "Công ty TNHH DKSH VietNam",
        44: "Công ty TNHH ĐT XNK Thiên Gia",
        45: "Công ty TNHH DXC Việt Nam",
        46: "CÔNG TY TNHH EXIMIAS VIETNAM",
        47: "Công ty TNHH FPT Software (FSoft)",
        48: "Công Ty TNHH GEEK Up",
        49: "Công ty TNHH giáo dục Lam Anh",
        50: "Công ty TNHH HOIIO Việt Nam",
        51: "Công Ty TNHH INNOS",
        52: "Công Ty TNHH InspireUI",
        53: "Công ty TNHH Intel Product Vietnam",
        54: "Công ty TNHH Jacobins-Digital",
        55: "Công ty TNHH Journey Horizon Việt Nam",
        56: "Công ty TNHH KEIZU Việt Nam",
        57: "Công Ty TNHH Khải Nam Transport",
        58: "Công ty TNHH KMS Technology",
        59: "Công Ty TNHH LEAP",
        60: "Công ty TNHH LogiGear Vietnam",
        61: "Công ty TNHH Make Famous App",
        62: "Công ty TNHH MEGA GS CINEMAS",
        63: "Công Ty TNHH MeU Solutions",
        64: "Công ty TNHH NashTech Vietnam",
        65: "Công ty TNHH Netcompany Việt Nam",
        66: "Công Ty TNHH NFQ Asia",
        67: "Công ty TNHH Phát triển Hồng Quang",
        68: "Công ty TNHH Rivercrane Việt Nam",
        69: "Công ty TNHH Robert Bosch Engineering & Business Solutions Việt Nam",
        70: "Công ty TNHH Robust Tech House(MMPS Technologies Pte Ltd)",

        71: "Công ty TNHH SCHENKER VIỆT NAM",
        72: "Công Ty TNHH SiGlaz Việt Nam",
        73: "Công Ty TNHH SMARTR",
        74: "Công ty TNHH Snap Research Labs",
        75: "Công ty TNHH Spirit Labs",
        76: "Công ty TNHH TIKATIKA CONNECT",
        77: "Công Ty TNHH Tin Học & Công Nghệ Thông Tin Địa Lý ITGIS Instructor",
        78: "Công Ty TNHH TM DV Bamboo Dev",
        79: "Công ty TNHH TM DV NINA",
        80: "Công ty TNHH TMA Solutions",
        81: "Công ty TNHH Top On Seek",
        82: "Công ty TNHH TRG International",
        83: "Công ty TNHH VinBrain",
        84: "Contemi Vietnam",
        85: "EdgeWorks Software",
        86: "Fitness and LifeStyle Group VN",
        87: "GKIM DIGITAL",
        88: "Holistics Software Pte Ltd",
        89: "iDentalSoft Company",
        90: "Intel Products Vietnam",
        91: "Intensive International Medical Center",
        92: "Ngân hàng Sacombank – Hội Sở",
        93: "NUS Technology",
        94: "Papaya Insurtech",
        95: "PYCOGROUP",
        96: "Tan Cang – Cai Mep International Terminal",
        97: "Tập đoàn Nguyễn Hoàng",
        98: "Tokyo University of Agriculture and Technology",
        99: "Trung tâm Big-O Coding",
        100: "TWIN Software Solutions",
        101: "Viện nghiên cứu Ứng dụng Khoa học và Công nghệ,Đại học Quy Nhơn",

        102: "VinaCIS Corporation (Công ty cổ phần thương mại dịch vụ tin học Vinh Nam )",
      },
    },
    { title: "Other Company Name", field: "otherCompanyName" },
    { title: "Company Address", field: "companyAddress" },
    { title: "Company Contact", field: "companyContact" },
    { title: "Supervisor Name", field: "supervisorName" },
    { title: "Supervisor Position", field: "supervisorPosition" },
    { title: "Supervisor Phone", field: "supervisorPhone" },
    { title: "Supervisor Email", field: "supervisorEmail" },
    { title: "Student Name", field: "studentName" },
    { title: "Student Id", field: "studentId" },
    { title: "Student Position", field: "studentPosition" },
    { title: "Student Email", field: "studentEmail" },
    { title: "Start Date", field: "startDate" },
    { title: "End Date", field: "endDate" },
    {
      title: "Approval",
      field: "approval",
      lookup: { approved: "approved", unapproved: "unapproved" },
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
        title="Internship Confirmation"
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
        options={{
          filtering: true,
        }}
      />
    </div>
  );
}

export default InternshipConfirmation;
