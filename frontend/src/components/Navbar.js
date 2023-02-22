import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar, logoutUser, user, pageName } = useAppContext();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <h3 className="logo-text">{pageName}</h3>
        </div>
        <div className="btn-container">
          {user ? (
            <>
              <button type="button" className="btn" onClick={() => setShowLogout(!showLogout)}>
                <FaUserCircle />
                {user?.name}
                <FaCaretDown />
              </button>
              <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                <button type="button" className="dropdown-btn" onClick={logoutUser}>
                  logout
                </button>
              </div>
            </>
          ) : (
            <button type="button" className="btn" onClick={() => navigate('/register')}>
              Login
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
