import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const UsersSearchContainer = () => {
  const { isLoading, searchUsers, searchEmail, searchStudentId, sortUsers, sortOptions, handleChange, clearFilters } =
    useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search by name */}
          <FormRow type="text" name="searchUsers" value={searchUsers} handleChange={handleSearch} />
          {/* search by email */}
          <FormRow type="text" name="searchEmail" value={searchEmail} handleChange={handleSearch} />
          {/* search by studentId */}
          <FormRow type="text" name="searchStudentId" value={searchStudentId} handleChange={handleSearch} />
          {/* sort */}
          <FormRowSelect name="sortUsers" value={sortUsers} handleChange={handleSearch} list={sortOptions} />
          <button className="btn btn-block btn-danger" disabled={isLoading} onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UsersSearchContainer;
