import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            A <span>Student Internship</span> and <span>Job Assistance</span> App
          </h1>
          <h3>
            Welcome to our <span>iSIS</span>
          </h3>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
          <div style={{ marginTop: 8 }}>
            <Link to="/search-jobs" className="btn btn-hero">
              Search jobs
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
