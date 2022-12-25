import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaCommentDots } from "react-icons/fa"; // import the icon for the feedback link
import { FaCommentAlt } from "react-icons/fa";

const links = [
  { id: 1, text: "stats", path: "/", icon: <IoBarChartSharp /> },
  { id: 2, text: "all jobs", path: "all-jobs", icon: <MdQueryStats /> },
  { id: 3, text: "add job", path: "add-job", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
  { id: 5, text: "add feedback", path: "feedback", icon: <FaCommentDots /> }, // add the feedback link
  { id: 6, text: "all feedback", path: "all-feedback", icon: <FaCommentAlt /> },
];

export default links;
