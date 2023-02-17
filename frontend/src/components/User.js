import { FaEnvelope, FaRegIdCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/User';
import UserInfo from './UserInfo';

const User = ({ _id, name, email, studentId }) => {
  const { setEditUser, deleteUser } = useAppContext();

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{name}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <UserInfo icon={<FaEnvelope />} text={email} />
          <UserInfo icon={<FaRegIdCard />} text={studentId} />
        </div>
        <footer>
          <div className="actions">
            <Link to="/add-user" className="btn edit-btn" onClick={() => setEditUser(_id)}>
              Add Approval
            </Link>
            <button type="button" className="btn delete-btn" onClick={() => deleteUser(_id)}>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default User;
