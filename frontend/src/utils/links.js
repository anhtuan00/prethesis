import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaCommentDots } from "react-icons/fa"; // import the icon for the feedback link
import { FaCommentAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";

export const adminLinks = [
  { id: 1, text: "view users", path: "view-users", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "view all feedback",
    path: "view-all-feedback",
    icon: <MdQueryStats />,
  },
  { id: 3, text: "add approval", path: "add-approve", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
  { id: 5, text: "get help", path: "get-help", icon: <FaQuestionCircle /> },
];

export const userLinks = [
  { id: 1, text: "all jobs", path: "all-jobs", icon: <MdQueryStats /> },
  { id: 2, text: "add job", path: "add-job", icon: <FaWpforms /> },
  { id: 3, text: "all feedback", path: "all-feedback", icon: <FaCommentAlt /> },
  {
    id: 4,
    text: "add feedback",
    path: "add-feedback",
    icon: <FaCommentDots />,
  },
  {
    id: 5,
    text: "job search resources",
    path: "job-search-resources",
    icon: <IoIosBook />,
  },
  { id: 6, text: "get help", path: "get-help", icon: <FaQuestionCircle /> },
  { id: 7, text: "profile", path: "profile", icon: <ImProfile /> },
];
