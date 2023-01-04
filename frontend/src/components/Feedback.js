import {
  FaBriefcase,
  FaCalendarAlt,
  FaIdCard,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Feedback";
import FeedbackInfo from "./FeedbackInfo";
const Feedback = ({
  _id,
  fbstudentName,
  fbstudentId,
  fbposition,
  fbcompanyName,
  fbstartDate,
  fbendDate,
  status,
  fbComment,
  fbstudentPhone,
  fbcompanyPhone,
  fblocation,
}) => {
  const { setEditFeedback, deleteFeedback } = useAppContext();

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{fbcompanyName.charAt(0)}</div>
        <div className="info">
          <h5>Student ID: {fbstudentId}</h5>
          <h5>{fbstudentName}</h5>
          <p>{fbposition}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <FeedbackInfo icon={<FaIdCard />} text={fbstudentId} />
          <FeedbackInfo icon={<FaUser />} text={fbstudentName} />
          <FeedbackInfo icon={<FaPhone />} text={fbstudentPhone} />
          <FeedbackInfo icon={<FaBriefcase />} text={fbposition} />
          <FeedbackInfo icon={<FaPhone />} text={fbcompanyPhone} />
          <FeedbackInfo icon={<FaMapMarkerAlt />} text={fblocation} />
          <FeedbackInfo icon={<FaCalendarAlt />} text={fbstartDate} />
          <FeedbackInfo icon={<FaCalendarAlt />} text={fbendDate} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-feedback"
              className="btn edit-btn"
              onClick={() => setEditFeedback(_id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteFeedback(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Feedback;
