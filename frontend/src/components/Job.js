import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWrench,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
  approve,
  startDate,
  endDate,
}) => {
  const { setEditJob, deleteJob, convertDate } = useAppContext();
  const formattedStartDate = convertDate(startDate);
  const formattedEndDate = convertDate(endDate);

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaMapMarkerAlt />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={formattedStartDate} />
          <JobInfo icon={<FaCalendarAlt />} text={formattedEndDate} />
          <JobInfo icon={<FaWrench />} text={jobType} />
          <JobInfo icon={<FaCheck />} text={approve} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => setEditJob(_id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
