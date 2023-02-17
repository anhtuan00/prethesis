import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';

const SharedLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/search-jobs');
    }
  });

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
