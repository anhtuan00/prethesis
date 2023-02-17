import { FormRow, Alert, DateInput, FormRowComment } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddFeedback = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    fbstudentName,
    fbstudentId,
    fbposition,
    fbstudentPhone,
    fbcompanyName,
    fblocation,
    fbcompanyPhone,
    fbstartDate,
    fbendDate,
    fbComment,
    handleChange,
    clearValues,
    editFeedback,
    createFeedback,
  } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();

    // log all form values here
    console.log({
      fbstudentName,
      fbstudentId,
      fbposition,
      fbstudentPhone,
      fbcompanyName,
      fblocation,
      fbcompanyPhone,
      fbstartDate,
      fbendDate,
      fbComment,
    });

    if (
      !fbstudentName ||
      !fbposition ||
      !fbstudentPhone ||
      !fbcompanyName ||
      !fblocation ||
      !fbcompanyPhone ||
      !fbstartDate ||
      !fbendDate ||
      !fbComment
    )
      if (
        !fbstudentName ||
        !fbposition ||
        !fbstudentPhone ||
        !fbcompanyName ||
        !fblocation ||
        !fbcompanyPhone ||
        !fbstartDate ||
        !fbendDate ||
        !fbComment
      ) {
        displayAlert();
        return;
      }
    if (isEditing) {
      editFeedback();
      return;
    }
    createFeedback();
  };

  const handleFeedbackInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  console.log('isLoading: ', isLoading);
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit feedback' : 'add feedback'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            labelText="Student Name"
            name="fbstudentName"
            value={fbstudentName}
            handleChange={handleFeedbackInput}
          />
          {/* position */}
          <FormRow
            type="text"
            labelText="Student ID"
            name="fbstudentId"
            value={fbstudentId}
            handleChange={handleFeedbackInput}
          />
          {/* company */}
          <FormRow
            type="text"
            labelText="Position"
            name="fbposition"
            value={fbposition}
            handleChange={handleFeedbackInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="Student Phone"
            name="fbstudentPhone"
            value={fbstudentPhone}
            handleChange={handleFeedbackInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="Company Name"
            name="fbcompanyName"
            value={fbcompanyName}
            handleChange={handleFeedbackInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="Company location"
            name="fblocation"
            value={fblocation}
            handleChange={handleFeedbackInput}
          />
          <FormRow
            type="text"
            labelText="Company Phone"
            name="fbcompanyPhone"
            value={fbcompanyPhone}
            handleChange={handleFeedbackInput}
          />

          <DateInput
            labelText="Start date"
            name="fbstartDate"
            value={fbstartDate}
            handleChange={handleFeedbackInput}
            min="2022-12-22"
          />
          <DateInput
            labelText="End date"
            name="fbendDate"
            value={fbendDate}
            handleChange={handleFeedbackInput}
            max="2023-12-31"
          />
          <FormRowComment
            type="text"
            labelText="Feedback Comment"
            name="fbComment"
            value={fbComment}
            handleChange={handleFeedbackInput}
          />

          {/* btn container */}
          <div className="btn-container">
            <button type="submit" className="btn btn-block submit-btn" onClick={handleSubmit} disabled={isLoading}>
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues('feedback');
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddFeedback;
