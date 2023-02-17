import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Assistance</span> App
          </h1>
          <p>Welcome to our iSIS</p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
