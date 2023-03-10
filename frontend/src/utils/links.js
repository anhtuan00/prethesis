import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaCommentDots } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { IoIosBook } from 'react-icons/io';

export const LINKS = [
  { id: 'search-jobs', text: 'Search Jobs', path: 'search-jobs', icon: <IoBarChartSharp /> },
  { id: 'internship-list', text: 'Internship List', path: 'internship-list', icon: <MdQueryStats /> },
  { id: 'jobs', text: 'Jobs', path: 'jobs', roles: ['officer'], icon: <FaWpforms /> },
  { id: 'companies', text: 'Companies', path: 'companies', roles: ['officer'], icon: <ImProfile /> },
  { id: 'master-data', text: 'Master Data', path: 'master-data', roles: ['officer'], icon: <FaCommentDots /> },
  { id: 'users', text: 'Users', path: 'users', roles: ['officer', 'teacher'], icon: <FaCommentAlt /> },
  { id: 'other-resources', text: 'Other Resources', path: 'other-resources', icon: <FaQuestionCircle /> },
  { id: 'internship-regulations', text: 'Internship Regulations', path: 'internship-regulations', icon: <IoIosBook /> },
  {
    id: 'system-evaluation',
    text: 'system evaluation',
    path: 'system-evaluation',
    roles: ['student', 'teacher', 'officer'],
    icon: <MdQueryStats />,
  },
  { id: 'get-help', text: 'Get Help', path: 'get-help', icon: <FaQuestionCircle /> },
];

export const adminLinks = [
  { id: 1, text: 'view users', path: 'view-users', icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: 'view all feedback',
    path: 'view-all-feedback',
    icon: <MdQueryStats />,
  },
  { id: 3, text: 'add approval', path: 'add-approval', icon: <FaWpforms /> },
  {
    id: 4,
    text: 'Manage Evaluation Report',
    path: 'manage-evaluation-report',
    icon: <MdQueryStats />,
  },
  {
    id: 5,
    text: 'Manage Internship Report',
    path: 'manage-internship-report',
    icon: <FaWpforms />,
  },

  { id: 6, text: 'Grade', path: 'grade', icon: <MdQueryStats /> },
  {
    id: 7,
    text: 'Internship Confirmation',
    path: 'internship-confirmation',
    icon: <MdQueryStats />,
  },
  {
    id: 8,
    text: 'Manage Company Partnership Proposal',
    path: 'manage-company-partnership-proposal',
    icon: <MdQueryStats />,
  },
  {
    id: 7,
    text: 'Student Feedback',
    path: 'student-feedback',
    icon: <MdQueryStats />,
  },
  {
    id: 7,
    text: 'Company Feedback',
    path: 'company-feedback',
    icon: <MdQueryStats />,
  },
  {
    id: 7,
    text: 'Teacher Feedback',
    path: 'teacher-feedback',
    icon: <MdQueryStats />,
  },
  { id: 4, text: 'get help', path: 'get-help', icon: <FaQuestionCircle /> },
  { id: 5, text: 'profile', path: 'profile', icon: <ImProfile /> },
];

export const userLinks = [
  { id: 1, text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 2, text: 'add job', path: 'add-job', icon: <FaWpforms /> },
  { id: 3, text: 'all feedback', path: 'all-feedback', icon: <FaCommentAlt /> },
  {
    id: 4,
    text: 'add feedback',
    path: 'add-feedback',
    icon: <FaCommentDots />,
  },
  {
    id: 5,
    text: 'job search resources',
    path: 'job-search-resources',
    icon: <IoIosBook />,
  },
  { id: 6, text: 'Student Grade', path: 'grade', icon: <MdQueryStats /> },
  { id: 7, text: 'Feedback', path: 'student-feedback', icon: <MdQueryStats /> },
  {
    id: 8,
    text: 'Internship Confirmation',
    path: 'internship-confirmation',
    icon: <MdQueryStats />,
  },
  {
    id: 9,
    text: 'Manage Evaluation Report',
    path: 'manage-evaluation-report',
    icon: <MdQueryStats />,
  },
  {
    id: 10,
    text: 'Manage Internship Report',
    path: 'manage-internship-report',
    icon: <FaWpforms />,
  },

  { id: 11, text: 'get help', path: 'get-help', icon: <FaQuestionCircle /> },
  { id: 12, text: 'profile', path: 'profile', icon: <ImProfile /> },
];

export const companyLinks = [
  { id: 1, text: 'Feedback', path: 'company-feedback', icon: <MdQueryStats /> },
  { id: 2, text: 'Company Grade', path: 'grade', icon: <MdQueryStats /> },
  {
    id: 3,
    text: 'Internship Confirmation',
    path: 'internship-confirmation',
    icon: <MdQueryStats />,
  },
  {
    id: 4,
    text: 'Manage Evaluation Report',
    path: 'manage-evaluation-report',
    icon: <MdQueryStats />,
  },
  {
    id: 5,
    text: 'Manage Internship Report',
    path: 'manage-internship-report',
    icon: <FaWpforms />,
  },
  { id: 6, text: 'get help', path: 'get-help', icon: <FaQuestionCircle /> },
  { id: 7, text: 'profile', path: 'profile', icon: <ImProfile /> },
];

export const teacherLinks = [
  {
    id: 1,
    text: 'Manage Evaluation Report',
    path: 'manage-evaluation-report',
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: 'Manage Internship Report',
    path: 'manage-internship-report',
    icon: <FaWpforms />,
  },

  { id: 3, text: 'Teacher Grade', path: 'grade', icon: <MdQueryStats /> },
  {
    id: 4,
    text: 'Internship Confirmation',
    path: 'internship-confirmation',
    icon: <MdQueryStats />,
  },
  {
    id: 5,
    text: 'Manage Company Partnership Proposal',
    path: 'manage-company-partnership-proposal',
    icon: <MdQueryStats />,
  },

  // { id: 3, text: "all feedback", path: "all-feedback", icon: <FaCommentAlt /> },
  // {
  //   id: 4,
  //   text: "add feedback",
  //   path: "add-feedback",
  //   icon: <FaCommentDots />,
  // },
  // {
  //   id: 5,
  //   text: "job search resources",
  //   path: "job-search-resources",
  //   icon: <IoIosBook />,
  // },
  { id: 6, text: 'get help', path: 'get-help', icon: <FaQuestionCircle /> },
  { id: 7, text: 'profile', path: 'profile', icon: <ImProfile /> },
];
