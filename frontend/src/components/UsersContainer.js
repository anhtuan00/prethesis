import { useEffect } from 'react';
import User from './User';
import Wrapper from '../assets/wrappers/UsersContainer';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import UsersPageBtnContainer from './UsersPageBtnContainer';

const UsersContainer = () => {
  const {
    getUsers,
    users,
    isLoading,
    pageUsers,
    totalUsers,
    searchUsers,
    searchEmail,
    searchStudentId,
    sortUsers,
    numOfPagesUsers,
  } = useAppContext();

  useEffect(() => {
    getUsers();
    console.log('users: ', users);
    // eslint-disable-next-line
  }, [pageUsers, searchUsers, searchEmail, searchStudentId, sortUsers]);

  if (isLoading) {
    return <Loading center />;
  }

  if (users.length === 0) {
    return (
      <Wrapper>
        <h2>No users to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalUsers} user{users.length > 1 && 's'} found
      </h5>
      <div className="users">
        {users
          .filter((user) => user.role === 'user')
          .map((user) => {
            return <User key={user._id} {...user} />;
          })}
      </div>

      {numOfPagesUsers > 1 && <UsersPageBtnContainer />}
    </Wrapper>
  );
};

export default UsersContainer;
