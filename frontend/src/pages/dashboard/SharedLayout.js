import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import { useAppContext } from '../../context/appContext';

const SharedLayout = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/search-jobs');
    }
  });

  return (
    <Wrapper>
      <main style={user ? {} : { display: 'block' }} className="dashboard">
        {!!user && (
          <>
            <SmallSidebar />
            <BigSidebar />
          </>
        )}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
